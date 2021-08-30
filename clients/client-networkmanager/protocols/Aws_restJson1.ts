import {
  AssociateCustomerGatewayCommandInput,
  AssociateCustomerGatewayCommandOutput,
} from "../commands/AssociateCustomerGatewayCommand";
import { AssociateLinkCommandInput, AssociateLinkCommandOutput } from "../commands/AssociateLinkCommand";
import {
  AssociateTransitGatewayConnectPeerCommandInput,
  AssociateTransitGatewayConnectPeerCommandOutput,
} from "../commands/AssociateTransitGatewayConnectPeerCommand";
import { CreateConnectionCommandInput, CreateConnectionCommandOutput } from "../commands/CreateConnectionCommand";
import { CreateDeviceCommandInput, CreateDeviceCommandOutput } from "../commands/CreateDeviceCommand";
import {
  CreateGlobalNetworkCommandInput,
  CreateGlobalNetworkCommandOutput,
} from "../commands/CreateGlobalNetworkCommand";
import { CreateLinkCommandInput, CreateLinkCommandOutput } from "../commands/CreateLinkCommand";
import { CreateSiteCommandInput, CreateSiteCommandOutput } from "../commands/CreateSiteCommand";
import { DeleteConnectionCommandInput, DeleteConnectionCommandOutput } from "../commands/DeleteConnectionCommand";
import { DeleteDeviceCommandInput, DeleteDeviceCommandOutput } from "../commands/DeleteDeviceCommand";
import {
  DeleteGlobalNetworkCommandInput,
  DeleteGlobalNetworkCommandOutput,
} from "../commands/DeleteGlobalNetworkCommand";
import { DeleteLinkCommandInput, DeleteLinkCommandOutput } from "../commands/DeleteLinkCommand";
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
  DisassociateCustomerGatewayCommandInput,
  DisassociateCustomerGatewayCommandOutput,
} from "../commands/DisassociateCustomerGatewayCommand";
import { DisassociateLinkCommandInput, DisassociateLinkCommandOutput } from "../commands/DisassociateLinkCommand";
import {
  DisassociateTransitGatewayConnectPeerCommandInput,
  DisassociateTransitGatewayConnectPeerCommandOutput,
} from "../commands/DisassociateTransitGatewayConnectPeerCommand";
import { GetConnectionsCommandInput, GetConnectionsCommandOutput } from "../commands/GetConnectionsCommand";
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
import { GetSitesCommandInput, GetSitesCommandOutput } from "../commands/GetSitesCommand";
import {
  GetTransitGatewayConnectPeerAssociationsCommandInput,
  GetTransitGatewayConnectPeerAssociationsCommandOutput,
} from "../commands/GetTransitGatewayConnectPeerAssociationsCommand";
import {
  GetTransitGatewayRegistrationsCommandInput,
  GetTransitGatewayRegistrationsCommandOutput,
} from "../commands/GetTransitGatewayRegistrationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import {
  RegisterTransitGatewayCommandInput,
  RegisterTransitGatewayCommandOutput,
} from "../commands/RegisterTransitGatewayCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateConnectionCommandInput, UpdateConnectionCommandOutput } from "../commands/UpdateConnectionCommand";
import { UpdateDeviceCommandInput, UpdateDeviceCommandOutput } from "../commands/UpdateDeviceCommand";
import {
  UpdateGlobalNetworkCommandInput,
  UpdateGlobalNetworkCommandOutput,
} from "../commands/UpdateGlobalNetworkCommand";
import { UpdateLinkCommandInput, UpdateLinkCommandOutput } from "../commands/UpdateLinkCommand";
import { UpdateSiteCommandInput, UpdateSiteCommandOutput } from "../commands/UpdateSiteCommand";
import {
  AWSLocation,
  AccessDeniedException,
  Bandwidth,
  ConflictException,
  Connection,
  CustomerGatewayAssociation,
  Device,
  GlobalNetwork,
  InternalServerException,
  Link,
  LinkAssociation,
  Location,
  ResourceNotFoundException,
  ServiceQuotaExceededException,
  Site,
  Tag,
  ThrottlingException,
  TransitGatewayConnectPeerAssociation,
  TransitGatewayRegistration,
  TransitGatewayRegistrationStateReason,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  strictParseInt32 as __strictParseInt32,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/global-networks";
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/global-networks";
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceQuotaExceededException":
    case "com.amazonaws.networkmanager#ServiceQuotaExceededException":
      response = {
        ...(await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.networkmanager#AccessDeniedException":
      response = {
        ...(await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ConflictException":
    case "com.amazonaws.networkmanager#ConflictException":
      response = {
        ...(await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InternalServerException":
    case "com.amazonaws.networkmanager#InternalServerException":
      response = {
        ...(await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.networkmanager#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ThrottlingException":
    case "com.amazonaws.networkmanager#ThrottlingException":
      response = {
        ...(await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ValidationException":
    case "com.amazonaws.networkmanager#ValidationException":
      response = {
        ...(await deserializeAws_restJson1ValidationExceptionResponse(parsedOutput, context)),
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

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: AccessDeniedException = {
    name: "AccessDeniedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceId: undefined,
    ResourceType: undefined,
  };
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
  return contents;
};

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: InternalServerException = {
    name: "InternalServerException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RetryAfterSeconds: undefined,
  };
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.RetryAfterSeconds = __strictParseInt32(parsedOutput.headers["retry-after"]);
  }
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    ResourceId: undefined,
    ResourceType: undefined,
  };
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
  return contents;
};

const deserializeAws_restJson1ServiceQuotaExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceQuotaExceededException> => {
  const contents: ServiceQuotaExceededException = {
    name: "ServiceQuotaExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    LimitCode: undefined,
    Message: undefined,
    ResourceId: undefined,
    ResourceType: undefined,
    ServiceCode: undefined,
  };
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
  return contents;
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: ThrottlingException = {
    name: "ThrottlingException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Message: undefined,
    RetryAfterSeconds: undefined,
  };
  if (parsedOutput.headers["retry-after"] !== undefined) {
    contents.RetryAfterSeconds = __strictParseInt32(parsedOutput.headers["retry-after"]);
  }
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  return contents;
};

const deserializeAws_restJson1ValidationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ValidationException> => {
  const contents: ValidationException = {
    name: "ValidationException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Fields: undefined,
    Message: undefined,
    Reason: undefined,
  };
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
  return contents;
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

const serializeAws_restJson1Location = (input: Location, context: __SerdeContext): any => {
  return {
    ...(input.Address !== undefined && input.Address !== null && { Address: input.Address }),
    ...(input.Latitude !== undefined && input.Latitude !== null && { Latitude: input.Latitude }),
    ...(input.Longitude !== undefined && input.Longitude !== null && { Longitude: input.Longitude }),
  };
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

const deserializeAws_restJson1Connection = (output: any, context: __SerdeContext): Connection => {
  return {
    ConnectedDeviceId: __expectString(output.ConnectedDeviceId),
    ConnectedLinkId: __expectString(output.ConnectedLinkId),
    ConnectionArn: __expectString(output.ConnectionArn),
    ConnectionId: __expectString(output.ConnectionId),
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
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

const deserializeAws_restJson1ConnectionList = (output: any, context: __SerdeContext): Connection[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Connection(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CustomerGatewayAssociation(entry, context);
    });
};

const deserializeAws_restJson1Device = (output: any, context: __SerdeContext): Device => {
  return {
    AWSLocation:
      output.AWSLocation !== undefined && output.AWSLocation !== null
        ? deserializeAws_restJson1AWSLocation(output.AWSLocation, context)
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Device(entry, context);
    });
};

const deserializeAws_restJson1GlobalNetwork = (output: any, context: __SerdeContext): GlobalNetwork => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GlobalNetwork(entry, context);
    });
};

const deserializeAws_restJson1Link = (output: any, context: __SerdeContext): Link => {
  return {
    Bandwidth:
      output.Bandwidth !== undefined && output.Bandwidth !== null
        ? deserializeAws_restJson1Bandwidth(output.Bandwidth, context)
        : undefined,
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LinkAssociation(entry, context);
    });
};

const deserializeAws_restJson1LinkList = (output: any, context: __SerdeContext): Link[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Link(entry, context);
    });
};

const deserializeAws_restJson1Location = (output: any, context: __SerdeContext): Location => {
  return {
    Address: __expectString(output.Address),
    Latitude: __expectString(output.Latitude),
    Longitude: __expectString(output.Longitude),
  } as any;
};

const deserializeAws_restJson1Site = (output: any, context: __SerdeContext): Site => {
  return {
    CreatedAt:
      output.CreatedAt !== undefined && output.CreatedAt !== null
        ? new Date(Math.round(output.CreatedAt * 1000))
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Site(entry, context);
    });
};

const deserializeAws_restJson1Tag = (output: any, context: __SerdeContext): Tag => {
  return {
    Key: __expectString(output.Key),
    Value: __expectString(output.Value),
  } as any;
};

const deserializeAws_restJson1TagList = (output: any, context: __SerdeContext): Tag[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Tag(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TransitGatewayConnectPeerAssociation(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TransitGatewayRegistration(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ValidationExceptionField(entry, context);
    });
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
