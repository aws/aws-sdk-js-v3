// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  LazyJsonString as __LazyJsonString,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
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
  CreateDirectConnectGatewayAttachmentCommandInput,
  CreateDirectConnectGatewayAttachmentCommandOutput,
} from "../commands/CreateDirectConnectGatewayAttachmentCommand";
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
  GetDirectConnectGatewayAttachmentCommandInput,
  GetDirectConnectGatewayAttachmentCommandOutput,
} from "../commands/GetDirectConnectGatewayAttachmentCommand";
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
  UpdateDirectConnectGatewayAttachmentCommandInput,
  UpdateDirectConnectGatewayAttachmentCommandOutput,
} from "../commands/UpdateDirectConnectGatewayAttachmentCommand";
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
  ConnectPeerSummary,
  CoreNetwork,
  CoreNetworkChangeEvent,
  CoreNetworkNetworkFunctionGroupIdentifier,
  CoreNetworkPolicy,
  CoreNetworkPolicyException,
  CoreNetworkPolicyVersion,
  CoreNetworkSegmentEdgeIdentifier,
  Device,
  DirectConnectGatewayAttachment,
  GlobalNetwork,
  InternalServerException,
  Link,
  Location,
  NetworkResource,
  NetworkTelemetry,
  Peering,
  ResourceNotFoundException,
  RouteAnalysis,
  RouteAnalysisEndpointOptionsSpecification,
  RouteState,
  RouteTableIdentifier,
  RouteType,
  ServiceQuotaExceededException,
  Site,
  SiteToSiteVpnAttachment,
  Tag,
  ThrottlingException,
  TransitGatewayPeering,
  TransitGatewayRouteTableAttachment,
  ValidationException,
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
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/attachments/{AttachmentId}/accept");
  b.p("AttachmentId", () => input.AttachmentId!, "{AttachmentId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateConnectPeerCommand
 */
export const se_AssociateConnectPeerCommand = async (
  input: AssociateConnectPeerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-networks/{GlobalNetworkId}/connect-peer-associations");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConnectPeerId: [],
      DeviceId: [],
      LinkId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateCustomerGatewayCommand
 */
export const se_AssociateCustomerGatewayCommand = async (
  input: AssociateCustomerGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-networks/{GlobalNetworkId}/customer-gateway-associations");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CustomerGatewayArn: [],
      DeviceId: [],
      LinkId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateLinkCommand
 */
export const se_AssociateLinkCommand = async (
  input: AssociateLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-networks/{GlobalNetworkId}/link-associations");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DeviceId: [],
      LinkId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1AssociateTransitGatewayConnectPeerCommand
 */
export const se_AssociateTransitGatewayConnectPeerCommand = async (
  input: AssociateTransitGatewayConnectPeerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DeviceId: [],
      LinkId: [],
      TransitGatewayConnectPeerArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConnectAttachmentCommand
 */
export const se_CreateConnectAttachmentCommand = async (
  input: CreateConnectAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/connect-attachments");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      CoreNetworkId: [],
      EdgeLocation: [],
      Options: (_) => _json(_),
      Tags: (_) => _json(_),
      TransportAttachmentId: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConnectionCommand
 */
export const se_CreateConnectionCommand = async (
  input: CreateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-networks/{GlobalNetworkId}/connections");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConnectedDeviceId: [],
      ConnectedLinkId: [],
      Description: [],
      DeviceId: [],
      LinkId: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateConnectPeerCommand
 */
export const se_CreateConnectPeerCommand = async (
  input: CreateConnectPeerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/connect-peers");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BgpOptions: (_) => _json(_),
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ConnectAttachmentId: [],
      CoreNetworkAddress: [],
      InsideCidrBlocks: (_) => _json(_),
      PeerAddress: [],
      SubnetArn: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateCoreNetworkCommand
 */
export const se_CreateCoreNetworkCommand = async (
  input: CreateCoreNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/core-networks");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      GlobalNetworkId: [],
      PolicyDocument: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDeviceCommand
 */
export const se_CreateDeviceCommand = async (
  input: CreateDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-networks/{GlobalNetworkId}/devices");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AWSLocation: (_) => _json(_),
      Description: [],
      Location: (_) => _json(_),
      Model: [],
      SerialNumber: [],
      SiteId: [],
      Tags: (_) => _json(_),
      Type: [],
      Vendor: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateDirectConnectGatewayAttachmentCommand
 */
export const se_CreateDirectConnectGatewayAttachmentCommand = async (
  input: CreateDirectConnectGatewayAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/direct-connect-gateway-attachments");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      CoreNetworkId: [],
      DirectConnectGatewayArn: [],
      EdgeLocations: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateGlobalNetworkCommand
 */
export const se_CreateGlobalNetworkCommand = async (
  input: CreateGlobalNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-networks");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateLinkCommand
 */
export const se_CreateLinkCommand = async (
  input: CreateLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-networks/{GlobalNetworkId}/links");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Bandwidth: (_) => _json(_),
      Description: [],
      Provider: [],
      SiteId: [],
      Tags: (_) => _json(_),
      Type: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSiteCommand
 */
export const se_CreateSiteCommand = async (
  input: CreateSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-networks/{GlobalNetworkId}/sites");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Location: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateSiteToSiteVpnAttachmentCommand
 */
export const se_CreateSiteToSiteVpnAttachmentCommand = async (
  input: CreateSiteToSiteVpnAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/site-to-site-vpn-attachments");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      CoreNetworkId: [],
      Tags: (_) => _json(_),
      VpnConnectionArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTransitGatewayPeeringCommand
 */
export const se_CreateTransitGatewayPeeringCommand = async (
  input: CreateTransitGatewayPeeringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/transit-gateway-peerings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      CoreNetworkId: [],
      Tags: (_) => _json(_),
      TransitGatewayArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateTransitGatewayRouteTableAttachmentCommand
 */
export const se_CreateTransitGatewayRouteTableAttachmentCommand = async (
  input: CreateTransitGatewayRouteTableAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/transit-gateway-route-table-attachments");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      PeeringId: [],
      Tags: (_) => _json(_),
      TransitGatewayRouteTableArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateVpcAttachmentCommand
 */
export const se_CreateVpcAttachmentCommand = async (
  input: CreateVpcAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/vpc-attachments");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      CoreNetworkId: [],
      Options: (_) => _json(_),
      SubnetArns: (_) => _json(_),
      Tags: (_) => _json(_),
      VpcArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteAttachmentCommand
 */
export const se_DeleteAttachmentCommand = async (
  input: DeleteAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/attachments/{AttachmentId}");
  b.p("AttachmentId", () => input.AttachmentId!, "{AttachmentId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConnectionCommand
 */
export const se_DeleteConnectionCommand = async (
  input: DeleteConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/connections/{ConnectionId}");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  b.p("ConnectionId", () => input.ConnectionId!, "{ConnectionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteConnectPeerCommand
 */
export const se_DeleteConnectPeerCommand = async (
  input: DeleteConnectPeerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/connect-peers/{ConnectPeerId}");
  b.p("ConnectPeerId", () => input.ConnectPeerId!, "{ConnectPeerId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCoreNetworkCommand
 */
export const se_DeleteCoreNetworkCommand = async (
  input: DeleteCoreNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/core-networks/{CoreNetworkId}");
  b.p("CoreNetworkId", () => input.CoreNetworkId!, "{CoreNetworkId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteCoreNetworkPolicyVersionCommand
 */
export const se_DeleteCoreNetworkPolicyVersionCommand = async (
  input: DeleteCoreNetworkPolicyVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/core-networks/{CoreNetworkId}/core-network-policy-versions/{PolicyVersionId}");
  b.p("CoreNetworkId", () => input.CoreNetworkId!, "{CoreNetworkId}", false);
  b.p("PolicyVersionId", () => input.PolicyVersionId!.toString(), "{PolicyVersionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteDeviceCommand
 */
export const se_DeleteDeviceCommand = async (
  input: DeleteDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/devices/{DeviceId}");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  b.p("DeviceId", () => input.DeviceId!, "{DeviceId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteGlobalNetworkCommand
 */
export const se_DeleteGlobalNetworkCommand = async (
  input: DeleteGlobalNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteLinkCommand
 */
export const se_DeleteLinkCommand = async (
  input: DeleteLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/links/{LinkId}");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  b.p("LinkId", () => input.LinkId!, "{LinkId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeletePeeringCommand
 */
export const se_DeletePeeringCommand = async (
  input: DeletePeeringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/peerings/{PeeringId}");
  b.p("PeeringId", () => input.PeeringId!, "{PeeringId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteResourcePolicyCommand
 */
export const se_DeleteResourcePolicyCommand = async (
  input: DeleteResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/resource-policy/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteSiteCommand
 */
export const se_DeleteSiteCommand = async (
  input: DeleteSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/sites/{SiteId}");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  b.p("SiteId", () => input.SiteId!, "{SiteId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeregisterTransitGatewayCommand
 */
export const se_DeregisterTransitGatewayCommand = async (
  input: DeregisterTransitGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/transit-gateway-registrations/{TransitGatewayArn}");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  b.p("TransitGatewayArn", () => input.TransitGatewayArn!, "{TransitGatewayArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeGlobalNetworksCommand
 */
export const se_DescribeGlobalNetworksCommand = async (
  input: DescribeGlobalNetworksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks");
  const query: any = map({
    [_gNI]: [() => input.GlobalNetworkIds !== void 0, () => input[_GNI]! || []],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateConnectPeerCommand
 */
export const se_DisassociateConnectPeerCommand = async (
  input: DisassociateConnectPeerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/connect-peer-associations/{ConnectPeerId}");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  b.p("ConnectPeerId", () => input.ConnectPeerId!, "{ConnectPeerId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateCustomerGatewayCommand
 */
export const se_DisassociateCustomerGatewayCommand = async (
  input: DisassociateCustomerGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/customer-gateway-associations/{CustomerGatewayArn}");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  b.p("CustomerGatewayArn", () => input.CustomerGatewayArn!, "{CustomerGatewayArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateLinkCommand
 */
export const se_DisassociateLinkCommand = async (
  input: DisassociateLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/link-associations");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  const query: any = map({
    [_dI]: [, __expectNonNull(input[_DI]!, `DeviceId`)],
    [_lI]: [, __expectNonNull(input[_LI]!, `LinkId`)],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand
 */
export const se_DisassociateTransitGatewayConnectPeerCommand = async (
  input: DisassociateTransitGatewayConnectPeerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations/{TransitGatewayConnectPeerArn}");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  b.p(
    "TransitGatewayConnectPeerArn",
    () => input.TransitGatewayConnectPeerArn!,
    "{TransitGatewayConnectPeerArn}",
    false
  );
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExecuteCoreNetworkChangeSetCommand
 */
export const se_ExecuteCoreNetworkChangeSetCommand = async (
  input: ExecuteCoreNetworkChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/core-networks/{CoreNetworkId}/core-network-change-sets/{PolicyVersionId}/execute");
  b.p("CoreNetworkId", () => input.CoreNetworkId!, "{CoreNetworkId}", false);
  b.p("PolicyVersionId", () => input.PolicyVersionId!.toString(), "{PolicyVersionId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConnectAttachmentCommand
 */
export const se_GetConnectAttachmentCommand = async (
  input: GetConnectAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/connect-attachments/{AttachmentId}");
  b.p("AttachmentId", () => input.AttachmentId!, "{AttachmentId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConnectionsCommand
 */
export const se_GetConnectionsCommand = async (
  input: GetConnectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/connections");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  const query: any = map({
    [_cI]: [() => input.ConnectionIds !== void 0, () => input[_CI]! || []],
    [_dI]: [, input[_DI]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConnectPeerCommand
 */
export const se_GetConnectPeerCommand = async (
  input: GetConnectPeerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/connect-peers/{ConnectPeerId}");
  b.p("ConnectPeerId", () => input.ConnectPeerId!, "{ConnectPeerId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConnectPeerAssociationsCommand
 */
export const se_GetConnectPeerAssociationsCommand = async (
  input: GetConnectPeerAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/connect-peer-associations");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  const query: any = map({
    [_cPI]: [() => input.ConnectPeerIds !== void 0, () => input[_CPI]! || []],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCoreNetworkCommand
 */
export const se_GetCoreNetworkCommand = async (
  input: GetCoreNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/core-networks/{CoreNetworkId}");
  b.p("CoreNetworkId", () => input.CoreNetworkId!, "{CoreNetworkId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCoreNetworkChangeEventsCommand
 */
export const se_GetCoreNetworkChangeEventsCommand = async (
  input: GetCoreNetworkChangeEventsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/core-networks/{CoreNetworkId}/core-network-change-events/{PolicyVersionId}");
  b.p("CoreNetworkId", () => input.CoreNetworkId!, "{CoreNetworkId}", false);
  b.p("PolicyVersionId", () => input.PolicyVersionId!.toString(), "{PolicyVersionId}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCoreNetworkChangeSetCommand
 */
export const se_GetCoreNetworkChangeSetCommand = async (
  input: GetCoreNetworkChangeSetCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/core-networks/{CoreNetworkId}/core-network-change-sets/{PolicyVersionId}");
  b.p("CoreNetworkId", () => input.CoreNetworkId!, "{CoreNetworkId}", false);
  b.p("PolicyVersionId", () => input.PolicyVersionId!.toString(), "{PolicyVersionId}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCoreNetworkPolicyCommand
 */
export const se_GetCoreNetworkPolicyCommand = async (
  input: GetCoreNetworkPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/core-networks/{CoreNetworkId}/core-network-policy");
  b.p("CoreNetworkId", () => input.CoreNetworkId!, "{CoreNetworkId}", false);
  const query: any = map({
    [_pVI]: [() => input.PolicyVersionId !== void 0, () => input[_PVI]!.toString()],
    [_a]: [, input[_A]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCustomerGatewayAssociationsCommand
 */
export const se_GetCustomerGatewayAssociationsCommand = async (
  input: GetCustomerGatewayAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/customer-gateway-associations");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  const query: any = map({
    [_cGA]: [() => input.CustomerGatewayArns !== void 0, () => input[_CGA]! || []],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDevicesCommand
 */
export const se_GetDevicesCommand = async (
  input: GetDevicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/devices");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  const query: any = map({
    [_dIe]: [() => input.DeviceIds !== void 0, () => input[_DIe]! || []],
    [_sI]: [, input[_SI]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDirectConnectGatewayAttachmentCommand
 */
export const se_GetDirectConnectGatewayAttachmentCommand = async (
  input: GetDirectConnectGatewayAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/direct-connect-gateway-attachments/{AttachmentId}");
  b.p("AttachmentId", () => input.AttachmentId!, "{AttachmentId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLinkAssociationsCommand
 */
export const se_GetLinkAssociationsCommand = async (
  input: GetLinkAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/link-associations");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  const query: any = map({
    [_dI]: [, input[_DI]!],
    [_lI]: [, input[_LI]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLinksCommand
 */
export const se_GetLinksCommand = async (
  input: GetLinksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/links");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  const query: any = map({
    [_lIi]: [() => input.LinkIds !== void 0, () => input[_LIi]! || []],
    [_sI]: [, input[_SI]!],
    [_t]: [, input[_T]!],
    [_p]: [, input[_P]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetNetworkResourceCountsCommand
 */
export const se_GetNetworkResourceCountsCommand = async (
  input: GetNetworkResourceCountsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/network-resource-count");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  const query: any = map({
    [_rT]: [, input[_RT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetNetworkResourceRelationshipsCommand
 */
export const se_GetNetworkResourceRelationshipsCommand = async (
  input: GetNetworkResourceRelationshipsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/network-resource-relationships");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  const query: any = map({
    [_cNI]: [, input[_CNI]!],
    [_rGA]: [, input[_RGA]!],
    [_aR]: [, input[_AR]!],
    [_aI]: [, input[_AI]!],
    [_rT]: [, input[_RT]!],
    [_rA]: [, input[_RA]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetNetworkResourcesCommand
 */
export const se_GetNetworkResourcesCommand = async (
  input: GetNetworkResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/network-resources");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  const query: any = map({
    [_cNI]: [, input[_CNI]!],
    [_rGA]: [, input[_RGA]!],
    [_aR]: [, input[_AR]!],
    [_aI]: [, input[_AI]!],
    [_rT]: [, input[_RT]!],
    [_rA]: [, input[_RA]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetNetworkRoutesCommand
 */
export const se_GetNetworkRoutesCommand = async (
  input: GetNetworkRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-networks/{GlobalNetworkId}/network-routes");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      DestinationFilters: (_) => _json(_),
      ExactCidrMatches: (_) => _json(_),
      LongestPrefixMatches: (_) => _json(_),
      PrefixListIds: (_) => _json(_),
      RouteTableIdentifier: (_) => _json(_),
      States: (_) => _json(_),
      SubnetOfMatches: (_) => _json(_),
      SupernetOfMatches: (_) => _json(_),
      Types: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetNetworkTelemetryCommand
 */
export const se_GetNetworkTelemetryCommand = async (
  input: GetNetworkTelemetryCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/network-telemetry");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  const query: any = map({
    [_cNI]: [, input[_CNI]!],
    [_rGA]: [, input[_RGA]!],
    [_aR]: [, input[_AR]!],
    [_aI]: [, input[_AI]!],
    [_rT]: [, input[_RT]!],
    [_rA]: [, input[_RA]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetResourcePolicyCommand
 */
export const se_GetResourcePolicyCommand = async (
  input: GetResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/resource-policy/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRouteAnalysisCommand
 */
export const se_GetRouteAnalysisCommand = async (
  input: GetRouteAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/route-analyses/{RouteAnalysisId}");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  b.p("RouteAnalysisId", () => input.RouteAnalysisId!, "{RouteAnalysisId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSitesCommand
 */
export const se_GetSitesCommand = async (
  input: GetSitesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/sites");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  const query: any = map({
    [_sIi]: [() => input.SiteIds !== void 0, () => input[_SIi]! || []],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSiteToSiteVpnAttachmentCommand
 */
export const se_GetSiteToSiteVpnAttachmentCommand = async (
  input: GetSiteToSiteVpnAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/site-to-site-vpn-attachments/{AttachmentId}");
  b.p("AttachmentId", () => input.AttachmentId!, "{AttachmentId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand
 */
export const se_GetTransitGatewayConnectPeerAssociationsCommand = async (
  input: GetTransitGatewayConnectPeerAssociationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/transit-gateway-connect-peer-associations");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  const query: any = map({
    [_tGCPA]: [() => input.TransitGatewayConnectPeerArns !== void 0, () => input[_TGCPA]! || []],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTransitGatewayPeeringCommand
 */
export const se_GetTransitGatewayPeeringCommand = async (
  input: GetTransitGatewayPeeringCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/transit-gateway-peerings/{PeeringId}");
  b.p("PeeringId", () => input.PeeringId!, "{PeeringId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTransitGatewayRegistrationsCommand
 */
export const se_GetTransitGatewayRegistrationsCommand = async (
  input: GetTransitGatewayRegistrationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-networks/{GlobalNetworkId}/transit-gateway-registrations");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  const query: any = map({
    [_tGA]: [() => input.TransitGatewayArns !== void 0, () => input[_TGA]! || []],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetTransitGatewayRouteTableAttachmentCommand
 */
export const se_GetTransitGatewayRouteTableAttachmentCommand = async (
  input: GetTransitGatewayRouteTableAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/transit-gateway-route-table-attachments/{AttachmentId}");
  b.p("AttachmentId", () => input.AttachmentId!, "{AttachmentId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetVpcAttachmentCommand
 */
export const se_GetVpcAttachmentCommand = async (
  input: GetVpcAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/vpc-attachments/{AttachmentId}");
  b.p("AttachmentId", () => input.AttachmentId!, "{AttachmentId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAttachmentsCommand
 */
export const se_ListAttachmentsCommand = async (
  input: ListAttachmentsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/attachments");
  const query: any = map({
    [_cNI]: [, input[_CNI]!],
    [_aT]: [, input[_AT]!],
    [_eL]: [, input[_EL]!],
    [_s]: [, input[_S]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListConnectPeersCommand
 */
export const se_ListConnectPeersCommand = async (
  input: ListConnectPeersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/connect-peers");
  const query: any = map({
    [_cNI]: [, input[_CNI]!],
    [_cAI]: [, input[_CAI]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCoreNetworkPolicyVersionsCommand
 */
export const se_ListCoreNetworkPolicyVersionsCommand = async (
  input: ListCoreNetworkPolicyVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/core-networks/{CoreNetworkId}/core-network-policy-versions");
  b.p("CoreNetworkId", () => input.CoreNetworkId!, "{CoreNetworkId}", false);
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCoreNetworksCommand
 */
export const se_ListCoreNetworksCommand = async (
  input: ListCoreNetworksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/core-networks");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListOrganizationServiceAccessStatusCommand
 */
export const se_ListOrganizationServiceAccessStatusCommand = async (
  input: ListOrganizationServiceAccessStatusCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/organizations/service-access");
  const query: any = map({
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListPeeringsCommand
 */
export const se_ListPeeringsCommand = async (
  input: ListPeeringsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/peerings");
  const query: any = map({
    [_cNI]: [, input[_CNI]!],
    [_pT]: [, input[_PT]!],
    [_eL]: [, input[_EL]!],
    [_s]: [, input[_S]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_nT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsForResourceCommand
 */
export const se_ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutCoreNetworkPolicyCommand
 */
export const se_PutCoreNetworkPolicyCommand = async (
  input: PutCoreNetworkPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/core-networks/{CoreNetworkId}/core-network-policy");
  b.p("CoreNetworkId", () => input.CoreNetworkId!, "{CoreNetworkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ClientToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Description: [],
      LatestVersionId: [],
      PolicyDocument: (_) => __LazyJsonString.from(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutResourcePolicyCommand
 */
export const se_PutResourcePolicyCommand = async (
  input: PutResourcePolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/resource-policy/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      PolicyDocument: (_) => __LazyJsonString.from(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RegisterTransitGatewayCommand
 */
export const se_RegisterTransitGatewayCommand = async (
  input: RegisterTransitGatewayCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-networks/{GlobalNetworkId}/transit-gateway-registrations");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      TransitGatewayArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RejectAttachmentCommand
 */
export const se_RejectAttachmentCommand = async (
  input: RejectAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/attachments/{AttachmentId}/reject");
  b.p("AttachmentId", () => input.AttachmentId!, "{AttachmentId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RestoreCoreNetworkPolicyVersionCommand
 */
export const se_RestoreCoreNetworkPolicyVersionCommand = async (
  input: RestoreCoreNetworkPolicyVersionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/core-networks/{CoreNetworkId}/core-network-policy-versions/{PolicyVersionId}/restore");
  b.p("CoreNetworkId", () => input.CoreNetworkId!, "{CoreNetworkId}", false);
  b.p("PolicyVersionId", () => input.PolicyVersionId!.toString(), "{PolicyVersionId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartOrganizationServiceAccessUpdateCommand
 */
export const se_StartOrganizationServiceAccessUpdateCommand = async (
  input: StartOrganizationServiceAccessUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/organizations/service-access");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Action: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartRouteAnalysisCommand
 */
export const se_StartRouteAnalysisCommand = async (
  input: StartRouteAnalysisCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-networks/{GlobalNetworkId}/route-analyses");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Destination: (_) => _json(_),
      IncludeReturnPath: [],
      Source: (_) => _json(_),
      UseMiddleboxes: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.TagKeys, `TagKeys`) != null, () => input[_TK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateConnectionCommand
 */
export const se_UpdateConnectionCommand = async (
  input: UpdateConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-networks/{GlobalNetworkId}/connections/{ConnectionId}");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  b.p("ConnectionId", () => input.ConnectionId!, "{ConnectionId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ConnectedLinkId: [],
      Description: [],
      LinkId: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateCoreNetworkCommand
 */
export const se_UpdateCoreNetworkCommand = async (
  input: UpdateCoreNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/core-networks/{CoreNetworkId}");
  b.p("CoreNetworkId", () => input.CoreNetworkId!, "{CoreNetworkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDeviceCommand
 */
export const se_UpdateDeviceCommand = async (
  input: UpdateDeviceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-networks/{GlobalNetworkId}/devices/{DeviceId}");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  b.p("DeviceId", () => input.DeviceId!, "{DeviceId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AWSLocation: (_) => _json(_),
      Description: [],
      Location: (_) => _json(_),
      Model: [],
      SerialNumber: [],
      SiteId: [],
      Type: [],
      Vendor: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateDirectConnectGatewayAttachmentCommand
 */
export const se_UpdateDirectConnectGatewayAttachmentCommand = async (
  input: UpdateDirectConnectGatewayAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/direct-connect-gateway-attachments/{AttachmentId}");
  b.p("AttachmentId", () => input.AttachmentId!, "{AttachmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      EdgeLocations: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGlobalNetworkCommand
 */
export const se_UpdateGlobalNetworkCommand = async (
  input: UpdateGlobalNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-networks/{GlobalNetworkId}");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateLinkCommand
 */
export const se_UpdateLinkCommand = async (
  input: UpdateLinkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-networks/{GlobalNetworkId}/links/{LinkId}");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  b.p("LinkId", () => input.LinkId!, "{LinkId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Bandwidth: (_) => _json(_),
      Description: [],
      Provider: [],
      Type: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateNetworkResourceMetadataCommand
 */
export const se_UpdateNetworkResourceMetadataCommand = async (
  input: UpdateNetworkResourceMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-networks/{GlobalNetworkId}/network-resources/{ResourceArn}/metadata");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Metadata: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSiteCommand
 */
export const se_UpdateSiteCommand = async (
  input: UpdateSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-networks/{GlobalNetworkId}/sites/{SiteId}");
  b.p("GlobalNetworkId", () => input.GlobalNetworkId!, "{GlobalNetworkId}", false);
  b.p("SiteId", () => input.SiteId!, "{SiteId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Location: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateVpcAttachmentCommand
 */
export const se_UpdateVpcAttachmentCommand = async (
  input: UpdateVpcAttachmentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/vpc-attachments/{AttachmentId}");
  b.p("AttachmentId", () => input.AttachmentId!, "{AttachmentId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AddSubnetArns: (_) => _json(_),
      Options: (_) => _json(_),
      RemoveSubnetArns: (_) => _json(_),
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AcceptAttachmentCommand
 */
export const de_AcceptAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcceptAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attachment: (_) => de_Attachment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateConnectPeerCommand
 */
export const de_AssociateConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectPeerAssociation: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateCustomerGatewayCommand
 */
export const de_AssociateCustomerGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateCustomerGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CustomerGatewayAssociation: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateLinkCommand
 */
export const de_AssociateLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LinkAssociation: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1AssociateTransitGatewayConnectPeerCommand
 */
export const de_AssociateTransitGatewayConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateTransitGatewayConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TransitGatewayConnectPeerAssociation: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConnectAttachmentCommand
 */
export const de_CreateConnectAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectAttachment: (_) => de_ConnectAttachment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConnectionCommand
 */
export const de_CreateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Connection: (_) => de_Connection(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateConnectPeerCommand
 */
export const de_CreateConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectPeer: (_) => de_ConnectPeer(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateCoreNetworkCommand
 */
export const de_CreateCoreNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateCoreNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CoreNetwork: (_) => de_CoreNetwork(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDeviceCommand
 */
export const de_CreateDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Device: (_) => de_Device(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDirectConnectGatewayAttachmentCommand
 */
export const de_CreateDirectConnectGatewayAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDirectConnectGatewayAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DirectConnectGatewayAttachment: (_) => de_DirectConnectGatewayAttachment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateGlobalNetworkCommand
 */
export const de_CreateGlobalNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateGlobalNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GlobalNetwork: (_) => de_GlobalNetwork(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLinkCommand
 */
export const de_CreateLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Link: (_) => de_Link(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSiteCommand
 */
export const de_CreateSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Site: (_) => de_Site(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateSiteToSiteVpnAttachmentCommand
 */
export const de_CreateSiteToSiteVpnAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateSiteToSiteVpnAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SiteToSiteVpnAttachment: (_) => de_SiteToSiteVpnAttachment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTransitGatewayPeeringCommand
 */
export const de_CreateTransitGatewayPeeringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTransitGatewayPeeringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TransitGatewayPeering: (_) => de_TransitGatewayPeering(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateTransitGatewayRouteTableAttachmentCommand
 */
export const de_CreateTransitGatewayRouteTableAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateTransitGatewayRouteTableAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TransitGatewayRouteTableAttachment: (_) => de_TransitGatewayRouteTableAttachment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateVpcAttachmentCommand
 */
export const de_CreateVpcAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVpcAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VpcAttachment: (_) => de_VpcAttachment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteAttachmentCommand
 */
export const de_DeleteAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attachment: (_) => de_Attachment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConnectionCommand
 */
export const de_DeleteConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Connection: (_) => de_Connection(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteConnectPeerCommand
 */
export const de_DeleteConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectPeer: (_) => de_ConnectPeer(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCoreNetworkCommand
 */
export const de_DeleteCoreNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CoreNetwork: (_) => de_CoreNetwork(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteCoreNetworkPolicyVersionCommand
 */
export const de_DeleteCoreNetworkPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteCoreNetworkPolicyVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CoreNetworkPolicy: (_) => de_CoreNetworkPolicy(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDeviceCommand
 */
export const de_DeleteDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Device: (_) => de_Device(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteGlobalNetworkCommand
 */
export const de_DeleteGlobalNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteGlobalNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GlobalNetwork: (_) => de_GlobalNetwork(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLinkCommand
 */
export const de_DeleteLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Link: (_) => de_Link(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeletePeeringCommand
 */
export const de_DeletePeeringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeletePeeringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Peering: (_) => de_Peering(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteResourcePolicyCommand
 */
export const de_DeleteResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteSiteCommand
 */
export const de_DeleteSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Site: (_) => de_Site(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterTransitGatewayCommand
 */
export const de_DeregisterTransitGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterTransitGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TransitGatewayRegistration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeGlobalNetworksCommand
 */
export const de_DescribeGlobalNetworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalNetworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GlobalNetworks: (_) => de_GlobalNetworkList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateConnectPeerCommand
 */
export const de_DisassociateConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectPeerAssociation: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateCustomerGatewayCommand
 */
export const de_DisassociateCustomerGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateCustomerGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CustomerGatewayAssociation: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateLinkCommand
 */
export const de_DisassociateLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LinkAssociation: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateTransitGatewayConnectPeerCommand
 */
export const de_DisassociateTransitGatewayConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateTransitGatewayConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TransitGatewayConnectPeerAssociation: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ExecuteCoreNetworkChangeSetCommand
 */
export const de_ExecuteCoreNetworkChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExecuteCoreNetworkChangeSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectAttachmentCommand
 */
export const de_GetConnectAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectAttachment: (_) => de_ConnectAttachment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectionsCommand
 */
export const de_GetConnectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Connections: (_) => de_ConnectionList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectPeerCommand
 */
export const de_GetConnectPeerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectPeerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectPeer: (_) => de_ConnectPeer(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectPeerAssociationsCommand
 */
export const de_GetConnectPeerAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectPeerAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectPeerAssociations: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCoreNetworkCommand
 */
export const de_GetCoreNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CoreNetwork: (_) => de_CoreNetwork(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCoreNetworkChangeEventsCommand
 */
export const de_GetCoreNetworkChangeEventsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkChangeEventsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CoreNetworkChangeEvents: (_) => de_CoreNetworkChangeEventList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCoreNetworkChangeSetCommand
 */
export const de_GetCoreNetworkChangeSetCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkChangeSetCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CoreNetworkChanges: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCoreNetworkPolicyCommand
 */
export const de_GetCoreNetworkPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCoreNetworkPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CoreNetworkPolicy: (_) => de_CoreNetworkPolicy(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCustomerGatewayAssociationsCommand
 */
export const de_GetCustomerGatewayAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCustomerGatewayAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CustomerGatewayAssociations: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDevicesCommand
 */
export const de_GetDevicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDevicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Devices: (_) => de_DeviceList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDirectConnectGatewayAttachmentCommand
 */
export const de_GetDirectConnectGatewayAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDirectConnectGatewayAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DirectConnectGatewayAttachment: (_) => de_DirectConnectGatewayAttachment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLinkAssociationsCommand
 */
export const de_GetLinkAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinkAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LinkAssociations: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLinksCommand
 */
export const de_GetLinksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLinksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Links: (_) => de_LinkList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetNetworkResourceCountsCommand
 */
export const de_GetNetworkResourceCountsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourceCountsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NetworkResourceCounts: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetNetworkResourceRelationshipsCommand
 */
export const de_GetNetworkResourceRelationshipsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourceRelationshipsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Relationships: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetNetworkResourcesCommand
 */
export const de_GetNetworkResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NetworkResources: (_) => de_NetworkResourceList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetNetworkRoutesCommand
 */
export const de_GetNetworkRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CoreNetworkSegmentEdge: _json,
    NetworkRoutes: _json,
    RouteTableArn: __expectString,
    RouteTableTimestamp: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RouteTableType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetNetworkTelemetryCommand
 */
export const de_GetNetworkTelemetryCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkTelemetryCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NetworkTelemetry: (_) => de_NetworkTelemetryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetResourcePolicyCommand
 */
export const de_GetResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    PolicyDocument: (_) => new __LazyJsonString(_),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRouteAnalysisCommand
 */
export const de_GetRouteAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRouteAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RouteAnalysis: (_) => de_RouteAnalysis(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSitesCommand
 */
export const de_GetSitesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSitesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Sites: (_) => de_SiteList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSiteToSiteVpnAttachmentCommand
 */
export const de_GetSiteToSiteVpnAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSiteToSiteVpnAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    SiteToSiteVpnAttachment: (_) => de_SiteToSiteVpnAttachment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTransitGatewayConnectPeerAssociationsCommand
 */
export const de_GetTransitGatewayConnectPeerAssociationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayConnectPeerAssociationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    TransitGatewayConnectPeerAssociations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTransitGatewayPeeringCommand
 */
export const de_GetTransitGatewayPeeringCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayPeeringCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TransitGatewayPeering: (_) => de_TransitGatewayPeering(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTransitGatewayRegistrationsCommand
 */
export const de_GetTransitGatewayRegistrationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayRegistrationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    TransitGatewayRegistrations: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetTransitGatewayRouteTableAttachmentCommand
 */
export const de_GetTransitGatewayRouteTableAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTransitGatewayRouteTableAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TransitGatewayRouteTableAttachment: (_) => de_TransitGatewayRouteTableAttachment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVpcAttachmentCommand
 */
export const de_GetVpcAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVpcAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VpcAttachment: (_) => de_VpcAttachment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAttachmentsCommand
 */
export const de_ListAttachmentsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAttachmentsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attachments: (_) => de_AttachmentList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListConnectPeersCommand
 */
export const de_ListConnectPeersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListConnectPeersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectPeers: (_) => de_ConnectPeerSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCoreNetworkPolicyVersionsCommand
 */
export const de_ListCoreNetworkPolicyVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreNetworkPolicyVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CoreNetworkPolicyVersions: (_) => de_CoreNetworkPolicyVersionList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCoreNetworksCommand
 */
export const de_ListCoreNetworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCoreNetworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CoreNetworks: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListOrganizationServiceAccessStatusCommand
 */
export const de_ListOrganizationServiceAccessStatusCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrganizationServiceAccessStatusCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    OrganizationStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPeeringsCommand
 */
export const de_ListPeeringsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPeeringsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Peerings: (_) => de_PeeringList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForResourceCommand
 */
export const de_ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TagList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutCoreNetworkPolicyCommand
 */
export const de_PutCoreNetworkPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutCoreNetworkPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CoreNetworkPolicy: (_) => de_CoreNetworkPolicy(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PutResourcePolicyCommand
 */
export const de_PutResourcePolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutResourcePolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RegisterTransitGatewayCommand
 */
export const de_RegisterTransitGatewayCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterTransitGatewayCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    TransitGatewayRegistration: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RejectAttachmentCommand
 */
export const de_RejectAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RejectAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Attachment: (_) => de_Attachment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1RestoreCoreNetworkPolicyVersionCommand
 */
export const de_RestoreCoreNetworkPolicyVersionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RestoreCoreNetworkPolicyVersionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CoreNetworkPolicy: (_) => de_CoreNetworkPolicy(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartOrganizationServiceAccessUpdateCommand
 */
export const de_StartOrganizationServiceAccessUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartOrganizationServiceAccessUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    OrganizationStatus: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartRouteAnalysisCommand
 */
export const de_StartRouteAnalysisCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRouteAnalysisCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RouteAnalysis: (_) => de_RouteAnalysis(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateConnectionCommand
 */
export const de_UpdateConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Connection: (_) => de_Connection(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateCoreNetworkCommand
 */
export const de_UpdateCoreNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateCoreNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CoreNetwork: (_) => de_CoreNetwork(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDeviceCommand
 */
export const de_UpdateDeviceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDeviceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Device: (_) => de_Device(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDirectConnectGatewayAttachmentCommand
 */
export const de_UpdateDirectConnectGatewayAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDirectConnectGatewayAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    DirectConnectGatewayAttachment: (_) => de_DirectConnectGatewayAttachment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGlobalNetworkCommand
 */
export const de_UpdateGlobalNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GlobalNetwork: (_) => de_GlobalNetwork(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLinkCommand
 */
export const de_UpdateLinkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLinkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Link: (_) => de_Link(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateNetworkResourceMetadataCommand
 */
export const de_UpdateNetworkResourceMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkResourceMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Metadata: _json,
    ResourceArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSiteCommand
 */
export const de_UpdateSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Site: (_) => de_Site(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateVpcAttachmentCommand
 */
export const de_UpdateVpcAttachmentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVpcAttachmentCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    VpcAttachment: (_) => de_VpcAttachment(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
    case "CoreNetworkPolicyException":
    case "com.amazonaws.networkmanager#CoreNetworkPolicyException":
      throw await de_CoreNetworkPolicyExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Errors: _json,
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
    [_RAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Context: _json,
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    LimitCode: __expectString,
    Message: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
    ServiceCode: __expectString,
  });
  Object.assign(contents, doc);
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
    [_RAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Fields: _json,
    Message: __expectString,
    Reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AWSLocation omitted.

// se_Bandwidth omitted.

// se_BgpOptions omitted.

// se_ConnectAttachmentOptions omitted.

// se_ConstrainedStringList omitted.

// se_CoreNetworkNetworkFunctionGroupIdentifier omitted.

// se_CoreNetworkSegmentEdgeIdentifier omitted.

// se_ExternalRegionCodeList omitted.

// se_FilterMap omitted.

// se_FilterValues omitted.

// se_Location omitted.

// se_NetworkResourceMetadataMap omitted.

// se_RouteAnalysisEndpointOptionsSpecification omitted.

// se_RouteStateList omitted.

// se_RouteTableIdentifier omitted.

// se_RouteTypeList omitted.

// se_SubnetArnList omitted.

// se_Tag omitted.

// se_TagList omitted.

// se_VpcOptions omitted.

// de_AccountStatus omitted.

// de_AccountStatusList omitted.

/**
 * deserializeAws_restJson1Attachment
 */
const de_Attachment = (output: any, context: __SerdeContext): Attachment => {
  return take(output, {
    AttachmentId: __expectString,
    AttachmentPolicyRuleNumber: __expectInt32,
    AttachmentType: __expectString,
    CoreNetworkArn: __expectString,
    CoreNetworkId: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EdgeLocation: __expectString,
    EdgeLocations: _json,
    LastModificationErrors: _json,
    NetworkFunctionGroupName: __expectString,
    OwnerAccountId: __expectString,
    ProposedNetworkFunctionGroupChange: _json,
    ProposedSegmentChange: _json,
    ResourceArn: __expectString,
    SegmentName: __expectString,
    State: __expectString,
    Tags: _json,
    UpdatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_AttachmentError omitted.

// de_AttachmentErrorList omitted.

/**
 * deserializeAws_restJson1AttachmentList
 */
const de_AttachmentList = (output: any, context: __SerdeContext): Attachment[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Attachment(entry, context);
    });
  return retVal;
};

// de_AWSLocation omitted.

// de_Bandwidth omitted.

/**
 * deserializeAws_restJson1ConnectAttachment
 */
const de_ConnectAttachment = (output: any, context: __SerdeContext): ConnectAttachment => {
  return take(output, {
    Attachment: (_: any) => de_Attachment(_, context),
    Options: _json,
    TransportAttachmentId: __expectString,
  }) as any;
};

// de_ConnectAttachmentOptions omitted.

/**
 * deserializeAws_restJson1Connection
 */
const de_Connection = (output: any, context: __SerdeContext): Connection => {
  return take(output, {
    ConnectedDeviceId: __expectString,
    ConnectedLinkId: __expectString,
    ConnectionArn: __expectString,
    ConnectionId: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DeviceId: __expectString,
    GlobalNetworkId: __expectString,
    LinkId: __expectString,
    State: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ConnectionHealth
 */
const de_ConnectionHealth = (output: any, context: __SerdeContext): ConnectionHealth => {
  return take(output, {
    Status: __expectString,
    Timestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Type: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ConnectionList
 */
const de_ConnectionList = (output: any, context: __SerdeContext): Connection[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Connection(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ConnectPeer
 */
const de_ConnectPeer = (output: any, context: __SerdeContext): ConnectPeer => {
  return take(output, {
    Configuration: _json,
    ConnectAttachmentId: __expectString,
    ConnectPeerId: __expectString,
    CoreNetworkId: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EdgeLocation: __expectString,
    LastModificationErrors: _json,
    State: __expectString,
    SubnetArn: __expectString,
    Tags: _json,
  }) as any;
};

// de_ConnectPeerAssociation omitted.

// de_ConnectPeerAssociationList omitted.

// de_ConnectPeerBgpConfiguration omitted.

// de_ConnectPeerBgpConfigurationList omitted.

// de_ConnectPeerConfiguration omitted.

// de_ConnectPeerError omitted.

// de_ConnectPeerErrorList omitted.

/**
 * deserializeAws_restJson1ConnectPeerSummary
 */
const de_ConnectPeerSummary = (output: any, context: __SerdeContext): ConnectPeerSummary => {
  return take(output, {
    ConnectAttachmentId: __expectString,
    ConnectPeerId: __expectString,
    ConnectPeerState: __expectString,
    CoreNetworkId: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EdgeLocation: __expectString,
    SubnetArn: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ConnectPeerSummaryList
 */
const de_ConnectPeerSummaryList = (output: any, context: __SerdeContext): ConnectPeerSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ConnectPeerSummary(entry, context);
    });
  return retVal;
};

// de_ConstrainedStringList omitted.

/**
 * deserializeAws_restJson1CoreNetwork
 */
const de_CoreNetwork = (output: any, context: __SerdeContext): CoreNetwork => {
  return take(output, {
    CoreNetworkArn: __expectString,
    CoreNetworkId: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    Edges: _json,
    GlobalNetworkId: __expectString,
    NetworkFunctionGroups: _json,
    Segments: _json,
    State: __expectString,
    Tags: _json,
  }) as any;
};

// de_CoreNetworkChange omitted.

/**
 * deserializeAws_restJson1CoreNetworkChangeEvent
 */
const de_CoreNetworkChangeEvent = (output: any, context: __SerdeContext): CoreNetworkChangeEvent => {
  return take(output, {
    Action: __expectString,
    EventTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IdentifierPath: __expectString,
    Status: __expectString,
    Type: __expectString,
    Values: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1CoreNetworkChangeEventList
 */
const de_CoreNetworkChangeEventList = (output: any, context: __SerdeContext): CoreNetworkChangeEvent[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CoreNetworkChangeEvent(entry, context);
    });
  return retVal;
};

// de_CoreNetworkChangeEventValues omitted.

// de_CoreNetworkChangeList omitted.

// de_CoreNetworkChangeValues omitted.

// de_CoreNetworkEdge omitted.

// de_CoreNetworkEdgeList omitted.

// de_CoreNetworkNetworkFunctionGroup omitted.

// de_CoreNetworkNetworkFunctionGroupList omitted.

/**
 * deserializeAws_restJson1CoreNetworkPolicy
 */
const de_CoreNetworkPolicy = (output: any, context: __SerdeContext): CoreNetworkPolicy => {
  return take(output, {
    Alias: __expectString,
    ChangeSetState: __expectString,
    CoreNetworkId: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    PolicyDocument: (_: any) => new __LazyJsonString(_),
    PolicyErrors: _json,
    PolicyVersionId: __expectInt32,
  }) as any;
};

// de_CoreNetworkPolicyError omitted.

// de_CoreNetworkPolicyErrorList omitted.

/**
 * deserializeAws_restJson1CoreNetworkPolicyVersion
 */
const de_CoreNetworkPolicyVersion = (output: any, context: __SerdeContext): CoreNetworkPolicyVersion => {
  return take(output, {
    Alias: __expectString,
    ChangeSetState: __expectString,
    CoreNetworkId: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    PolicyVersionId: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1CoreNetworkPolicyVersionList
 */
const de_CoreNetworkPolicyVersionList = (output: any, context: __SerdeContext): CoreNetworkPolicyVersion[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CoreNetworkPolicyVersion(entry, context);
    });
  return retVal;
};

// de_CoreNetworkSegment omitted.

// de_CoreNetworkSegmentEdgeIdentifier omitted.

// de_CoreNetworkSegmentList omitted.

// de_CoreNetworkSummary omitted.

// de_CoreNetworkSummaryList omitted.

// de_CustomerGatewayAssociation omitted.

// de_CustomerGatewayAssociationList omitted.

/**
 * deserializeAws_restJson1Device
 */
const de_Device = (output: any, context: __SerdeContext): Device => {
  return take(output, {
    AWSLocation: _json,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    DeviceArn: __expectString,
    DeviceId: __expectString,
    GlobalNetworkId: __expectString,
    Location: _json,
    Model: __expectString,
    SerialNumber: __expectString,
    SiteId: __expectString,
    State: __expectString,
    Tags: _json,
    Type: __expectString,
    Vendor: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DeviceList
 */
const de_DeviceList = (output: any, context: __SerdeContext): Device[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Device(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DirectConnectGatewayAttachment
 */
const de_DirectConnectGatewayAttachment = (output: any, context: __SerdeContext): DirectConnectGatewayAttachment => {
  return take(output, {
    Attachment: (_: any) => de_Attachment(_, context),
    DirectConnectGatewayArn: __expectString,
  }) as any;
};

// de_EdgeOverride omitted.

// de_EdgeSet omitted.

// de_EdgeSetList omitted.

// de_ExceptionContextMap omitted.

// de_ExternalRegionCodeList omitted.

/**
 * deserializeAws_restJson1GlobalNetwork
 */
const de_GlobalNetwork = (output: any, context: __SerdeContext): GlobalNetwork => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    GlobalNetworkArn: __expectString,
    GlobalNetworkId: __expectString,
    State: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1GlobalNetworkList
 */
const de_GlobalNetworkList = (output: any, context: __SerdeContext): GlobalNetwork[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_GlobalNetwork(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Link
 */
const de_Link = (output: any, context: __SerdeContext): Link => {
  return take(output, {
    Bandwidth: _json,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    GlobalNetworkId: __expectString,
    LinkArn: __expectString,
    LinkId: __expectString,
    Provider: __expectString,
    SiteId: __expectString,
    State: __expectString,
    Tags: _json,
    Type: __expectString,
  }) as any;
};

// de_LinkAssociation omitted.

// de_LinkAssociationList omitted.

/**
 * deserializeAws_restJson1LinkList
 */
const de_LinkList = (output: any, context: __SerdeContext): Link[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Link(entry, context);
    });
  return retVal;
};

// de_Location omitted.

// de_NetworkFunctionGroup omitted.

// de_NetworkFunctionGroupList omitted.

/**
 * deserializeAws_restJson1NetworkResource
 */
const de_NetworkResource = (output: any, context: __SerdeContext): NetworkResource => {
  return take(output, {
    AccountId: __expectString,
    AwsRegion: __expectString,
    CoreNetworkId: __expectString,
    Definition: __expectString,
    DefinitionTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Metadata: _json,
    RegisteredGatewayArn: __expectString,
    ResourceArn: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
    Tags: _json,
  }) as any;
};

// de_NetworkResourceCount omitted.

// de_NetworkResourceCountList omitted.

/**
 * deserializeAws_restJson1NetworkResourceList
 */
const de_NetworkResourceList = (output: any, context: __SerdeContext): NetworkResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NetworkResource(entry, context);
    });
  return retVal;
};

// de_NetworkResourceMetadataMap omitted.

// de_NetworkResourceSummary omitted.

// de_NetworkRoute omitted.

// de_NetworkRouteDestination omitted.

// de_NetworkRouteDestinationList omitted.

// de_NetworkRouteList omitted.

/**
 * deserializeAws_restJson1NetworkTelemetry
 */
const de_NetworkTelemetry = (output: any, context: __SerdeContext): NetworkTelemetry => {
  return take(output, {
    AccountId: __expectString,
    Address: __expectString,
    AwsRegion: __expectString,
    CoreNetworkId: __expectString,
    Health: (_: any) => de_ConnectionHealth(_, context),
    RegisteredGatewayArn: __expectString,
    ResourceArn: __expectString,
    ResourceId: __expectString,
    ResourceType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1NetworkTelemetryList
 */
const de_NetworkTelemetryList = (output: any, context: __SerdeContext): NetworkTelemetry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NetworkTelemetry(entry, context);
    });
  return retVal;
};

// de_OrganizationStatus omitted.

// de_PathComponent omitted.

// de_PathComponentList omitted.

/**
 * deserializeAws_restJson1Peering
 */
const de_Peering = (output: any, context: __SerdeContext): Peering => {
  return take(output, {
    CoreNetworkArn: __expectString,
    CoreNetworkId: __expectString,
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EdgeLocation: __expectString,
    LastModificationErrors: _json,
    OwnerAccountId: __expectString,
    PeeringId: __expectString,
    PeeringType: __expectString,
    ResourceArn: __expectString,
    State: __expectString,
    Tags: _json,
  }) as any;
};

// de_PeeringError omitted.

// de_PeeringErrorList omitted.

/**
 * deserializeAws_restJson1PeeringList
 */
const de_PeeringList = (output: any, context: __SerdeContext): Peering[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Peering(entry, context);
    });
  return retVal;
};

// de_PermissionsErrorContext omitted.

// de_ProposedNetworkFunctionGroupChange omitted.

// de_ProposedSegmentChange omitted.

// de_ReasonContextMap omitted.

// de_Relationship omitted.

// de_RelationshipList omitted.

/**
 * deserializeAws_restJson1RouteAnalysis
 */
const de_RouteAnalysis = (output: any, context: __SerdeContext): RouteAnalysis => {
  return take(output, {
    Destination: _json,
    ForwardPath: _json,
    GlobalNetworkId: __expectString,
    IncludeReturnPath: __expectBoolean,
    OwnerAccountId: __expectString,
    ReturnPath: _json,
    RouteAnalysisId: __expectString,
    Source: _json,
    StartTimestamp: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    UseMiddleboxes: __expectBoolean,
  }) as any;
};

// de_RouteAnalysisCompletion omitted.

// de_RouteAnalysisEndpointOptions omitted.

// de_RouteAnalysisPath omitted.

// de_ServiceInsertionAction omitted.

// de_ServiceInsertionActionList omitted.

// de_ServiceInsertionSegments omitted.

/**
 * deserializeAws_restJson1Site
 */
const de_Site = (output: any, context: __SerdeContext): Site => {
  return take(output, {
    CreatedAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    GlobalNetworkId: __expectString,
    Location: _json,
    SiteArn: __expectString,
    SiteId: __expectString,
    State: __expectString,
    Tags: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1SiteList
 */
const de_SiteList = (output: any, context: __SerdeContext): Site[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Site(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1SiteToSiteVpnAttachment
 */
const de_SiteToSiteVpnAttachment = (output: any, context: __SerdeContext): SiteToSiteVpnAttachment => {
  return take(output, {
    Attachment: (_: any) => de_Attachment(_, context),
    VpnConnectionArn: __expectString,
  }) as any;
};

// de_SubnetArnList omitted.

// de_Tag omitted.

// de_TagList omitted.

// de_TransitGatewayConnectPeerAssociation omitted.

// de_TransitGatewayConnectPeerAssociationList omitted.

/**
 * deserializeAws_restJson1TransitGatewayPeering
 */
const de_TransitGatewayPeering = (output: any, context: __SerdeContext): TransitGatewayPeering => {
  return take(output, {
    Peering: (_: any) => de_Peering(_, context),
    TransitGatewayArn: __expectString,
    TransitGatewayPeeringAttachmentId: __expectString,
  }) as any;
};

// de_TransitGatewayRegistration omitted.

// de_TransitGatewayRegistrationList omitted.

// de_TransitGatewayRegistrationStateReason omitted.

/**
 * deserializeAws_restJson1TransitGatewayRouteTableAttachment
 */
const de_TransitGatewayRouteTableAttachment = (
  output: any,
  context: __SerdeContext
): TransitGatewayRouteTableAttachment => {
  return take(output, {
    Attachment: (_: any) => de_Attachment(_, context),
    PeeringId: __expectString,
    TransitGatewayRouteTableArn: __expectString,
  }) as any;
};

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

// de_Via omitted.

/**
 * deserializeAws_restJson1VpcAttachment
 */
const de_VpcAttachment = (output: any, context: __SerdeContext): VpcAttachment => {
  return take(output, {
    Attachment: (_: any) => de_Attachment(_, context),
    Options: _json,
    SubnetArns: _json,
  }) as any;
};

// de_VpcOptions omitted.

// de_WhenSentTo omitted.

// de_WhenSentToSegmentsList omitted.

// de_WithEdgeOverridesList omitted.

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

const _A = "Alias";
const _AI = "AccountId";
const _AR = "AwsRegion";
const _AT = "AttachmentType";
const _CAI = "ConnectAttachmentId";
const _CGA = "CustomerGatewayArns";
const _CI = "ConnectionIds";
const _CNI = "CoreNetworkId";
const _CPI = "ConnectPeerIds";
const _DI = "DeviceId";
const _DIe = "DeviceIds";
const _EL = "EdgeLocation";
const _GNI = "GlobalNetworkIds";
const _LI = "LinkId";
const _LIi = "LinkIds";
const _MR = "MaxResults";
const _NT = "NextToken";
const _P = "Provider";
const _PT = "PeeringType";
const _PVI = "PolicyVersionId";
const _RA = "ResourceArn";
const _RAS = "RetryAfterSeconds";
const _RGA = "RegisteredGatewayArn";
const _RT = "ResourceType";
const _S = "State";
const _SI = "SiteId";
const _SIi = "SiteIds";
const _T = "Type";
const _TGA = "TransitGatewayArns";
const _TGCPA = "TransitGatewayConnectPeerArns";
const _TK = "TagKeys";
const _a = "alias";
const _aI = "accountId";
const _aR = "awsRegion";
const _aT = "attachmentType";
const _cAI = "connectAttachmentId";
const _cGA = "customerGatewayArns";
const _cI = "connectionIds";
const _cNI = "coreNetworkId";
const _cPI = "connectPeerIds";
const _dI = "deviceId";
const _dIe = "deviceIds";
const _eL = "edgeLocation";
const _gNI = "globalNetworkIds";
const _lI = "linkId";
const _lIi = "linkIds";
const _mR = "maxResults";
const _nT = "nextToken";
const _p = "provider";
const _pT = "peeringType";
const _pVI = "policyVersionId";
const _rA = "resourceArn";
const _rGA = "registeredGatewayArn";
const _rT = "resourceType";
const _ra = "retry-after";
const _s = "state";
const _sI = "siteId";
const _sIi = "siteIds";
const _t = "type";
const _tGA = "transitGatewayArns";
const _tGCPA = "transitGatewayConnectPeerArns";
const _tK = "tagKeys";
