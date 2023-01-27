// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectInt32 as __expectInt32,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseFloat32 as __limitedParseFloat32,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CancelOrderCommandInput, CancelOrderCommandOutput } from "../commands/CancelOrderCommand";
import { CreateOrderCommandInput, CreateOrderCommandOutput } from "../commands/CreateOrderCommand";
import { CreateOutpostCommandInput, CreateOutpostCommandOutput } from "../commands/CreateOutpostCommand";
import { CreateSiteCommandInput, CreateSiteCommandOutput } from "../commands/CreateSiteCommand";
import { DeleteOutpostCommandInput, DeleteOutpostCommandOutput } from "../commands/DeleteOutpostCommand";
import { DeleteSiteCommandInput, DeleteSiteCommandOutput } from "../commands/DeleteSiteCommand";
import { GetCatalogItemCommandInput, GetCatalogItemCommandOutput } from "../commands/GetCatalogItemCommand";
import { GetConnectionCommandInput, GetConnectionCommandOutput } from "../commands/GetConnectionCommand";
import { GetOrderCommandInput, GetOrderCommandOutput } from "../commands/GetOrderCommand";
import { GetOutpostCommandInput, GetOutpostCommandOutput } from "../commands/GetOutpostCommand";
import {
  GetOutpostInstanceTypesCommandInput,
  GetOutpostInstanceTypesCommandOutput,
} from "../commands/GetOutpostInstanceTypesCommand";
import { GetSiteAddressCommandInput, GetSiteAddressCommandOutput } from "../commands/GetSiteAddressCommand";
import { GetSiteCommandInput, GetSiteCommandOutput } from "../commands/GetSiteCommand";
import { ListAssetsCommandInput, ListAssetsCommandOutput } from "../commands/ListAssetsCommand";
import { ListCatalogItemsCommandInput, ListCatalogItemsCommandOutput } from "../commands/ListCatalogItemsCommand";
import { ListOrdersCommandInput, ListOrdersCommandOutput } from "../commands/ListOrdersCommand";
import { ListOutpostsCommandInput, ListOutpostsCommandOutput } from "../commands/ListOutpostsCommand";
import { ListSitesCommandInput, ListSitesCommandOutput } from "../commands/ListSitesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartConnectionCommandInput, StartConnectionCommandOutput } from "../commands/StartConnectionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateOutpostCommandInput, UpdateOutpostCommandOutput } from "../commands/UpdateOutpostCommand";
import { UpdateSiteAddressCommandInput, UpdateSiteAddressCommandOutput } from "../commands/UpdateSiteAddressCommand";
import { UpdateSiteCommandInput, UpdateSiteCommandOutput } from "../commands/UpdateSiteCommand";
import {
  UpdateSiteRackPhysicalPropertiesCommandInput,
  UpdateSiteRackPhysicalPropertiesCommandOutput,
} from "../commands/UpdateSiteRackPhysicalPropertiesCommand";
import {
  AccessDeniedException,
  Address,
  AssetInfo,
  AssetLocation,
  CatalogItem,
  ComputeAttributes,
  ConflictException,
  ConnectionDetails,
  EC2Capacity,
  InstanceTypeItem,
  InternalServerException,
  LineItem,
  LineItemAssetInformation,
  LineItemRequest,
  LineItemStatus,
  NotFoundException,
  Order,
  OrderSummary,
  Outpost,
  RackPhysicalProperties,
  ServiceQuotaExceededException,
  ShipmentInformation,
  Site,
  SupportedStorageEnum,
  ValidationException,
} from "../models/models_0";
import { OutpostsServiceException as __BaseException } from "../models/OutpostsServiceException";

export const serializeAws_restJson1CancelOrderCommand = async (
  input: CancelOrderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/orders/{OrderId}/cancel";
  resolvedPath = __resolvedPath(resolvedPath, input, "OrderId", () => input.OrderId!, "{OrderId}", false);
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

export const serializeAws_restJson1CreateOrderCommand = async (
  input: CreateOrderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/orders";
  let body: any;
  body = JSON.stringify({
    ...(input.LineItems != null && {
      LineItems: serializeAws_restJson1LineItemRequestListDefinition(input.LineItems, context),
    }),
    ...(input.OutpostIdentifier != null && { OutpostIdentifier: input.OutpostIdentifier }),
    ...(input.PaymentOption != null && { PaymentOption: input.PaymentOption }),
    ...(input.PaymentTerm != null && { PaymentTerm: input.PaymentTerm }),
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

export const serializeAws_restJson1CreateOutpostCommand = async (
  input: CreateOutpostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/outposts";
  let body: any;
  body = JSON.stringify({
    ...(input.AvailabilityZone != null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.AvailabilityZoneId != null && { AvailabilityZoneId: input.AvailabilityZoneId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SiteId != null && { SiteId: input.SiteId }),
    ...(input.SupportedHardwareType != null && { SupportedHardwareType: input.SupportedHardwareType }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sites";
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Notes != null && { Notes: input.Notes }),
    ...(input.OperatingAddress != null && {
      OperatingAddress: serializeAws_restJson1Address(input.OperatingAddress, context),
    }),
    ...(input.RackPhysicalProperties != null && {
      RackPhysicalProperties: serializeAws_restJson1RackPhysicalProperties(input.RackPhysicalProperties, context),
    }),
    ...(input.ShippingAddress != null && {
      ShippingAddress: serializeAws_restJson1Address(input.ShippingAddress, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1DeleteOutpostCommand = async (
  input: DeleteOutpostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/outposts/{OutpostId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "OutpostId", () => input.OutpostId!, "{OutpostId}", false);
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sites/{SiteId}";
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

export const serializeAws_restJson1GetCatalogItemCommand = async (
  input: GetCatalogItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/catalog/item/{CatalogItemId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "CatalogItemId",
    () => input.CatalogItemId!,
    "{CatalogItemId}",
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

export const serializeAws_restJson1GetConnectionCommand = async (
  input: GetConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/connections/{ConnectionId}";
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
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

export const serializeAws_restJson1GetOrderCommand = async (
  input: GetOrderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/orders/{OrderId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "OrderId", () => input.OrderId!, "{OrderId}", false);
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

export const serializeAws_restJson1GetOutpostCommand = async (
  input: GetOutpostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/outposts/{OutpostId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "OutpostId", () => input.OutpostId!, "{OutpostId}", false);
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

export const serializeAws_restJson1GetOutpostInstanceTypesCommand = async (
  input: GetOutpostInstanceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/outposts/{OutpostId}/instanceTypes";
  resolvedPath = __resolvedPath(resolvedPath, input, "OutpostId", () => input.OutpostId!, "{OutpostId}", false);
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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

export const serializeAws_restJson1GetSiteCommand = async (
  input: GetSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sites/{SiteId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "SiteId", () => input.SiteId!, "{SiteId}", false);
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

export const serializeAws_restJson1GetSiteAddressCommand = async (
  input: GetSiteAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sites/{SiteId}/address";
  resolvedPath = __resolvedPath(resolvedPath, input, "SiteId", () => input.SiteId!, "{SiteId}", false);
  const query: any = map({
    AddressType: [, __expectNonNull(input.AddressType!, `AddressType`)],
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

export const serializeAws_restJson1ListAssetsCommand = async (
  input: ListAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/outposts/{OutpostIdentifier}/assets";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "OutpostIdentifier",
    () => input.OutpostIdentifier!,
    "{OutpostIdentifier}",
    false
  );
  const query: any = map({
    HostIdFilter: [
      () => input.HostIdFilter !== void 0,
      () => (input.HostIdFilter! || []).map((_entry) => _entry as any),
    ],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
    StatusFilter: [
      () => input.StatusFilter !== void 0,
      () => (input.StatusFilter! || []).map((_entry) => _entry as any),
    ],
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

export const serializeAws_restJson1ListCatalogItemsCommand = async (
  input: ListCatalogItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/catalog/items";
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    ItemClassFilter: [
      () => input.ItemClassFilter !== void 0,
      () => (input.ItemClassFilter! || []).map((_entry) => _entry as any),
    ],
    SupportedStorageFilter: [
      () => input.SupportedStorageFilter !== void 0,
      () => (input.SupportedStorageFilter! || []).map((_entry) => _entry as any),
    ],
    EC2FamilyFilter: [
      () => input.EC2FamilyFilter !== void 0,
      () => (input.EC2FamilyFilter! || []).map((_entry) => _entry as any),
    ],
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

export const serializeAws_restJson1ListOrdersCommand = async (
  input: ListOrdersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-orders";
  const query: any = map({
    OutpostIdentifierFilter: [, input.OutpostIdentifierFilter!],
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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

export const serializeAws_restJson1ListOutpostsCommand = async (
  input: ListOutpostsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/outposts";
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    LifeCycleStatusFilter: [
      () => input.LifeCycleStatusFilter !== void 0,
      () => (input.LifeCycleStatusFilter! || []).map((_entry) => _entry as any),
    ],
    AvailabilityZoneFilter: [
      () => input.AvailabilityZoneFilter !== void 0,
      () => (input.AvailabilityZoneFilter! || []).map((_entry) => _entry as any),
    ],
    AvailabilityZoneIdFilter: [
      () => input.AvailabilityZoneIdFilter !== void 0,
      () => (input.AvailabilityZoneIdFilter! || []).map((_entry) => _entry as any),
    ],
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

export const serializeAws_restJson1ListSitesCommand = async (
  input: ListSitesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sites";
  const query: any = map({
    NextToken: [, input.NextToken!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    OperatingAddressCountryCodeFilter: [
      () => input.OperatingAddressCountryCodeFilter !== void 0,
      () => (input.OperatingAddressCountryCodeFilter! || []).map((_entry) => _entry as any),
    ],
    OperatingAddressStateOrRegionFilter: [
      () => input.OperatingAddressStateOrRegionFilter !== void 0,
      () => (input.OperatingAddressStateOrRegionFilter! || []).map((_entry) => _entry as any),
    ],
    OperatingAddressCityFilter: [
      () => input.OperatingAddressCityFilter !== void 0,
      () => (input.OperatingAddressCityFilter! || []).map((_entry) => _entry as any),
    ],
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

export const serializeAws_restJson1StartConnectionCommand = async (
  input: StartConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/connections";
  let body: any;
  body = JSON.stringify({
    ...(input.AssetId != null && { AssetId: input.AssetId }),
    ...(input.ClientPublicKey != null && { ClientPublicKey: input.ClientPublicKey }),
    ...(input.DeviceSerialNumber != null && { DeviceSerialNumber: input.DeviceSerialNumber }),
    ...(input.NetworkInterfaceDeviceIndex != null && {
      NetworkInterfaceDeviceIndex: input.NetworkInterfaceDeviceIndex,
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1UpdateOutpostCommand = async (
  input: UpdateOutpostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/outposts/{OutpostId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "OutpostId", () => input.OutpostId!, "{OutpostId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.SupportedHardwareType != null && { SupportedHardwareType: input.SupportedHardwareType }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sites/{SiteId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "SiteId", () => input.SiteId!, "{SiteId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.Notes != null && { Notes: input.Notes }),
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

export const serializeAws_restJson1UpdateSiteAddressCommand = async (
  input: UpdateSiteAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sites/{SiteId}/address";
  resolvedPath = __resolvedPath(resolvedPath, input, "SiteId", () => input.SiteId!, "{SiteId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.Address != null && { Address: serializeAws_restJson1Address(input.Address, context) }),
    ...(input.AddressType != null && { AddressType: input.AddressType }),
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

export const serializeAws_restJson1UpdateSiteRackPhysicalPropertiesCommand = async (
  input: UpdateSiteRackPhysicalPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sites/{SiteId}/rackPhysicalProperties";
  resolvedPath = __resolvedPath(resolvedPath, input, "SiteId", () => input.SiteId!, "{SiteId}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.FiberOpticCableType != null && { FiberOpticCableType: input.FiberOpticCableType }),
    ...(input.MaximumSupportedWeightLbs != null && { MaximumSupportedWeightLbs: input.MaximumSupportedWeightLbs }),
    ...(input.OpticalStandard != null && { OpticalStandard: input.OpticalStandard }),
    ...(input.PowerConnector != null && { PowerConnector: input.PowerConnector }),
    ...(input.PowerDrawKva != null && { PowerDrawKva: input.PowerDrawKva }),
    ...(input.PowerFeedDrop != null && { PowerFeedDrop: input.PowerFeedDrop }),
    ...(input.PowerPhase != null && { PowerPhase: input.PowerPhase }),
    ...(input.UplinkCount != null && { UplinkCount: input.UplinkCount }),
    ...(input.UplinkGbps != null && { UplinkGbps: input.UplinkGbps }),
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

export const deserializeAws_restJson1CancelOrderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelOrderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelOrderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CancelOrderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelOrderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.outposts#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

export const deserializeAws_restJson1CreateOrderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateOrderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Order != null) {
    contents.Order = deserializeAws_restJson1Order(data.Order, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateOrderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.outposts#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.outposts#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

export const deserializeAws_restJson1CreateOutpostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOutpostCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateOutpostCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Outpost != null) {
    contents.Outpost = deserializeAws_restJson1Outpost(data.Outpost, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateOutpostCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOutpostCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.outposts#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.outposts#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.outposts#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.outposts#ServiceQuotaExceededException":
      throw await deserializeAws_restJson1ServiceQuotaExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

export const deserializeAws_restJson1DeleteOutpostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOutpostCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteOutpostCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteOutpostCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOutpostCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.outposts#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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
  await collectBody(output.body, context);
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
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.outposts#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

export const deserializeAws_restJson1GetCatalogItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCatalogItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCatalogItemCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CatalogItem != null) {
    contents.CatalogItem = deserializeAws_restJson1CatalogItem(data.CatalogItem, context);
  }
  return contents;
};

const deserializeAws_restJson1GetCatalogItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCatalogItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

export const deserializeAws_restJson1GetConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectionDetails != null) {
    contents.ConnectionDetails = deserializeAws_restJson1ConnectionDetails(data.ConnectionDetails, context);
  }
  if (data.ConnectionId != null) {
    contents.ConnectionId = __expectString(data.ConnectionId);
  }
  return contents;
};

const deserializeAws_restJson1GetConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

export const deserializeAws_restJson1GetOrderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetOrderCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Order != null) {
    contents.Order = deserializeAws_restJson1Order(data.Order, context);
  }
  return contents;
};

const deserializeAws_restJson1GetOrderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

export const deserializeAws_restJson1GetOutpostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetOutpostCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Outpost != null) {
    contents.Outpost = deserializeAws_restJson1Outpost(data.Outpost, context);
  }
  return contents;
};

const deserializeAws_restJson1GetOutpostCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

export const deserializeAws_restJson1GetOutpostInstanceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostInstanceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetOutpostInstanceTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InstanceTypes != null) {
    contents.InstanceTypes = deserializeAws_restJson1InstanceTypeListDefinition(data.InstanceTypes, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.OutpostArn != null) {
    contents.OutpostArn = __expectString(data.OutpostArn);
  }
  if (data.OutpostId != null) {
    contents.OutpostId = __expectString(data.OutpostId);
  }
  return contents;
};

const deserializeAws_restJson1GetOutpostInstanceTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostInstanceTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

export const deserializeAws_restJson1GetSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSiteCommandError(output, context);
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

const deserializeAws_restJson1GetSiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

export const deserializeAws_restJson1GetSiteAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSiteAddressCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSiteAddressCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Address != null) {
    contents.Address = deserializeAws_restJson1Address(data.Address, context);
  }
  if (data.AddressType != null) {
    contents.AddressType = __expectString(data.AddressType);
  }
  if (data.SiteId != null) {
    contents.SiteId = __expectString(data.SiteId);
  }
  return contents;
};

const deserializeAws_restJson1GetSiteAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSiteAddressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

export const deserializeAws_restJson1ListAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAssetsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Assets != null) {
    contents.Assets = deserializeAws_restJson1AssetListDefinition(data.Assets, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

export const deserializeAws_restJson1ListCatalogItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCatalogItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCatalogItemsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CatalogItems != null) {
    contents.CatalogItems = deserializeAws_restJson1CatalogItemListDefinition(data.CatalogItems, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListCatalogItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCatalogItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

export const deserializeAws_restJson1ListOrdersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrdersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListOrdersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Orders != null) {
    contents.Orders = deserializeAws_restJson1OrderSummaryListDefinition(data.Orders, context);
  }
  return contents;
};

const deserializeAws_restJson1ListOrdersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrdersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

export const deserializeAws_restJson1ListOutpostsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOutpostsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListOutpostsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Outposts != null) {
    contents.Outposts = deserializeAws_restJson1outpostListDefinition(data.Outposts, context);
  }
  return contents;
};

const deserializeAws_restJson1ListOutpostsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOutpostsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

export const deserializeAws_restJson1ListSitesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSitesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSitesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Sites != null) {
    contents.Sites = deserializeAws_restJson1siteListDefinition(data.Sites, context);
  }
  return contents;
};

const deserializeAws_restJson1ListSitesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSitesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
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
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

export const deserializeAws_restJson1StartConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartConnectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ConnectionId != null) {
    contents.ConnectionId = __expectString(data.ConnectionId);
  }
  if (data.UnderlayIpAddress != null) {
    contents.UnderlayIpAddress = __expectString(data.UnderlayIpAddress);
  }
  return contents;
};

const deserializeAws_restJson1StartConnectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartConnectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

export const deserializeAws_restJson1UpdateOutpostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOutpostCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateOutpostCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Outpost != null) {
    contents.Outpost = deserializeAws_restJson1Outpost(data.Outpost, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateOutpostCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOutpostCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.outposts#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.outposts#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

export const deserializeAws_restJson1UpdateSiteAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteAddressCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSiteAddressCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Address != null) {
    contents.Address = deserializeAws_restJson1Address(data.Address, context);
  }
  if (data.AddressType != null) {
    contents.AddressType = __expectString(data.AddressType);
  }
  return contents;
};

const deserializeAws_restJson1UpdateSiteAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteAddressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.outposts#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

export const deserializeAws_restJson1UpdateSiteRackPhysicalPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteRackPhysicalPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSiteRackPhysicalPropertiesCommandError(output, context);
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

const deserializeAws_restJson1UpdateSiteRackPhysicalPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteRackPhysicalPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.outposts#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await deserializeAws_restJson1NotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
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

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new NotFoundException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ServiceQuotaExceededException({
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
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1Address = (input: Address, context: __SerdeContext): any => {
  return {
    ...(input.AddressLine1 != null && { AddressLine1: input.AddressLine1 }),
    ...(input.AddressLine2 != null && { AddressLine2: input.AddressLine2 }),
    ...(input.AddressLine3 != null && { AddressLine3: input.AddressLine3 }),
    ...(input.City != null && { City: input.City }),
    ...(input.ContactName != null && { ContactName: input.ContactName }),
    ...(input.ContactPhoneNumber != null && { ContactPhoneNumber: input.ContactPhoneNumber }),
    ...(input.CountryCode != null && { CountryCode: input.CountryCode }),
    ...(input.DistrictOrCounty != null && { DistrictOrCounty: input.DistrictOrCounty }),
    ...(input.Municipality != null && { Municipality: input.Municipality }),
    ...(input.PostalCode != null && { PostalCode: input.PostalCode }),
    ...(input.StateOrRegion != null && { StateOrRegion: input.StateOrRegion }),
  };
};

const serializeAws_restJson1LineItemRequest = (input: LineItemRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogItemId != null && { CatalogItemId: input.CatalogItemId }),
    ...(input.Quantity != null && { Quantity: input.Quantity }),
  };
};

const serializeAws_restJson1LineItemRequestListDefinition = (
  input: LineItemRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1LineItemRequest(entry, context);
    });
};

const serializeAws_restJson1RackPhysicalProperties = (input: RackPhysicalProperties, context: __SerdeContext): any => {
  return {
    ...(input.FiberOpticCableType != null && { FiberOpticCableType: input.FiberOpticCableType }),
    ...(input.MaximumSupportedWeightLbs != null && { MaximumSupportedWeightLbs: input.MaximumSupportedWeightLbs }),
    ...(input.OpticalStandard != null && { OpticalStandard: input.OpticalStandard }),
    ...(input.PowerConnector != null && { PowerConnector: input.PowerConnector }),
    ...(input.PowerDrawKva != null && { PowerDrawKva: input.PowerDrawKva }),
    ...(input.PowerFeedDrop != null && { PowerFeedDrop: input.PowerFeedDrop }),
    ...(input.PowerPhase != null && { PowerPhase: input.PowerPhase }),
    ...(input.UplinkCount != null && { UplinkCount: input.UplinkCount }),
    ...(input.UplinkGbps != null && { UplinkGbps: input.UplinkGbps }),
  };
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const deserializeAws_restJson1Address = (output: any, context: __SerdeContext): Address => {
  return {
    AddressLine1: __expectString(output.AddressLine1),
    AddressLine2: __expectString(output.AddressLine2),
    AddressLine3: __expectString(output.AddressLine3),
    City: __expectString(output.City),
    ContactName: __expectString(output.ContactName),
    ContactPhoneNumber: __expectString(output.ContactPhoneNumber),
    CountryCode: __expectString(output.CountryCode),
    DistrictOrCounty: __expectString(output.DistrictOrCounty),
    Municipality: __expectString(output.Municipality),
    PostalCode: __expectString(output.PostalCode),
    StateOrRegion: __expectString(output.StateOrRegion),
  } as any;
};

const deserializeAws_restJson1AssetInfo = (output: any, context: __SerdeContext): AssetInfo => {
  return {
    AssetId: __expectString(output.AssetId),
    AssetLocation:
      output.AssetLocation != null ? deserializeAws_restJson1AssetLocation(output.AssetLocation, context) : undefined,
    AssetType: __expectString(output.AssetType),
    ComputeAttributes:
      output.ComputeAttributes != null
        ? deserializeAws_restJson1ComputeAttributes(output.ComputeAttributes, context)
        : undefined,
    RackId: __expectString(output.RackId),
  } as any;
};

const deserializeAws_restJson1AssetListDefinition = (output: any, context: __SerdeContext): AssetInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AssetInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1AssetLocation = (output: any, context: __SerdeContext): AssetLocation => {
  return {
    RackElevation: __limitedParseFloat32(output.RackElevation),
  } as any;
};

const deserializeAws_restJson1CatalogItem = (output: any, context: __SerdeContext): CatalogItem => {
  return {
    CatalogItemId: __expectString(output.CatalogItemId),
    EC2Capacities:
      output.EC2Capacities != null
        ? deserializeAws_restJson1EC2CapacityListDefinition(output.EC2Capacities, context)
        : undefined,
    ItemStatus: __expectString(output.ItemStatus),
    PowerKva: __limitedParseFloat32(output.PowerKva),
    SupportedStorage:
      output.SupportedStorage != null
        ? deserializeAws_restJson1SupportedStorageList(output.SupportedStorage, context)
        : undefined,
    SupportedUplinkGbps:
      output.SupportedUplinkGbps != null
        ? deserializeAws_restJson1SupportedUplinkGbpsListDefinition(output.SupportedUplinkGbps, context)
        : undefined,
    WeightLbs: __expectInt32(output.WeightLbs),
  } as any;
};

const deserializeAws_restJson1CatalogItemListDefinition = (output: any, context: __SerdeContext): CatalogItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CatalogItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CIDRList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ComputeAttributes = (output: any, context: __SerdeContext): ComputeAttributes => {
  return {
    HostId: __expectString(output.HostId),
    State: __expectString(output.State),
  } as any;
};

const deserializeAws_restJson1ConnectionDetails = (output: any, context: __SerdeContext): ConnectionDetails => {
  return {
    AllowedIps: output.AllowedIps != null ? deserializeAws_restJson1CIDRList(output.AllowedIps, context) : undefined,
    ClientPublicKey: __expectString(output.ClientPublicKey),
    ClientTunnelAddress: __expectString(output.ClientTunnelAddress),
    ServerEndpoint: __expectString(output.ServerEndpoint),
    ServerPublicKey: __expectString(output.ServerPublicKey),
    ServerTunnelAddress: __expectString(output.ServerTunnelAddress),
  } as any;
};

const deserializeAws_restJson1EC2Capacity = (output: any, context: __SerdeContext): EC2Capacity => {
  return {
    Family: __expectString(output.Family),
    MaxSize: __expectString(output.MaxSize),
    Quantity: __expectString(output.Quantity),
  } as any;
};

const deserializeAws_restJson1EC2CapacityListDefinition = (output: any, context: __SerdeContext): EC2Capacity[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1EC2Capacity(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1InstanceTypeItem = (output: any, context: __SerdeContext): InstanceTypeItem => {
  return {
    InstanceType: __expectString(output.InstanceType),
  } as any;
};

const deserializeAws_restJson1InstanceTypeListDefinition = (
  output: any,
  context: __SerdeContext
): InstanceTypeItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1InstanceTypeItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LineItem = (output: any, context: __SerdeContext): LineItem => {
  return {
    AssetInformationList:
      output.AssetInformationList != null
        ? deserializeAws_restJson1LineItemAssetInformationList(output.AssetInformationList, context)
        : undefined,
    CatalogItemId: __expectString(output.CatalogItemId),
    LineItemId: __expectString(output.LineItemId),
    Quantity: __expectInt32(output.Quantity),
    ShipmentInformation:
      output.ShipmentInformation != null
        ? deserializeAws_restJson1ShipmentInformation(output.ShipmentInformation, context)
        : undefined,
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1LineItemAssetInformation = (
  output: any,
  context: __SerdeContext
): LineItemAssetInformation => {
  return {
    AssetId: __expectString(output.AssetId),
    MacAddressList:
      output.MacAddressList != null
        ? deserializeAws_restJson1MacAddressList(output.MacAddressList, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LineItemAssetInformationList = (
  output: any,
  context: __SerdeContext
): LineItemAssetInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LineItemAssetInformation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LineItemListDefinition = (output: any, context: __SerdeContext): LineItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LineItem(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LineItemStatusCounts = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [LineItemStatus | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectInt32(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1MacAddressList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Order = (output: any, context: __SerdeContext): Order => {
  return {
    LineItems:
      output.LineItems != null ? deserializeAws_restJson1LineItemListDefinition(output.LineItems, context) : undefined,
    OrderFulfilledDate:
      output.OrderFulfilledDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.OrderFulfilledDate)))
        : undefined,
    OrderId: __expectString(output.OrderId),
    OrderSubmissionDate:
      output.OrderSubmissionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.OrderSubmissionDate)))
        : undefined,
    OutpostId: __expectString(output.OutpostId),
    PaymentOption: __expectString(output.PaymentOption),
    PaymentTerm: __expectString(output.PaymentTerm),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1OrderSummary = (output: any, context: __SerdeContext): OrderSummary => {
  return {
    LineItemCountsByStatus:
      output.LineItemCountsByStatus != null
        ? deserializeAws_restJson1LineItemStatusCounts(output.LineItemCountsByStatus, context)
        : undefined,
    OrderFulfilledDate:
      output.OrderFulfilledDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.OrderFulfilledDate)))
        : undefined,
    OrderId: __expectString(output.OrderId),
    OrderSubmissionDate:
      output.OrderSubmissionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.OrderSubmissionDate)))
        : undefined,
    OrderType: __expectString(output.OrderType),
    OutpostId: __expectString(output.OutpostId),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1OrderSummaryListDefinition = (output: any, context: __SerdeContext): OrderSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1OrderSummary(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Outpost = (output: any, context: __SerdeContext): Outpost => {
  return {
    AvailabilityZone: __expectString(output.AvailabilityZone),
    AvailabilityZoneId: __expectString(output.AvailabilityZoneId),
    Description: __expectString(output.Description),
    LifeCycleStatus: __expectString(output.LifeCycleStatus),
    Name: __expectString(output.Name),
    OutpostArn: __expectString(output.OutpostArn),
    OutpostId: __expectString(output.OutpostId),
    OwnerId: __expectString(output.OwnerId),
    SiteArn: __expectString(output.SiteArn),
    SiteId: __expectString(output.SiteId),
    SupportedHardwareType: __expectString(output.SupportedHardwareType),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1outpostListDefinition = (output: any, context: __SerdeContext): Outpost[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Outpost(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RackPhysicalProperties = (
  output: any,
  context: __SerdeContext
): RackPhysicalProperties => {
  return {
    FiberOpticCableType: __expectString(output.FiberOpticCableType),
    MaximumSupportedWeightLbs: __expectString(output.MaximumSupportedWeightLbs),
    OpticalStandard: __expectString(output.OpticalStandard),
    PowerConnector: __expectString(output.PowerConnector),
    PowerDrawKva: __expectString(output.PowerDrawKva),
    PowerFeedDrop: __expectString(output.PowerFeedDrop),
    PowerPhase: __expectString(output.PowerPhase),
    UplinkCount: __expectString(output.UplinkCount),
    UplinkGbps: __expectString(output.UplinkGbps),
  } as any;
};

const deserializeAws_restJson1ShipmentInformation = (output: any, context: __SerdeContext): ShipmentInformation => {
  return {
    ShipmentCarrier: __expectString(output.ShipmentCarrier),
    ShipmentTrackingNumber: __expectString(output.ShipmentTrackingNumber),
  } as any;
};

const deserializeAws_restJson1Site = (output: any, context: __SerdeContext): Site => {
  return {
    AccountId: __expectString(output.AccountId),
    Description: __expectString(output.Description),
    Name: __expectString(output.Name),
    Notes: __expectString(output.Notes),
    OperatingAddressCity: __expectString(output.OperatingAddressCity),
    OperatingAddressCountryCode: __expectString(output.OperatingAddressCountryCode),
    OperatingAddressStateOrRegion: __expectString(output.OperatingAddressStateOrRegion),
    RackPhysicalProperties:
      output.RackPhysicalProperties != null
        ? deserializeAws_restJson1RackPhysicalProperties(output.RackPhysicalProperties, context)
        : undefined,
    SiteArn: __expectString(output.SiteArn),
    SiteId: __expectString(output.SiteId),
    Tags: output.Tags != null ? deserializeAws_restJson1TagMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1siteListDefinition = (output: any, context: __SerdeContext): Site[] => {
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

const deserializeAws_restJson1SupportedStorageList = (
  output: any,
  context: __SerdeContext
): (SupportedStorageEnum | string)[] => {
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

const deserializeAws_restJson1SupportedUplinkGbpsListDefinition = (output: any, context: __SerdeContext): number[] => {
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

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
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
