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
  parseEpochTimestamp as __parseEpochTimestamp,
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
  CatalogItem,
  ComputeAttributes,
  ConflictException,
  EC2Capacity,
  InstanceTypeItem,
  InternalServerException,
  LineItem,
  LineItemRequest,
  LineItemStatus,
  NotFoundException,
  Order,
  OrderSummary,
  Outpost,
  RackPhysicalProperties,
  ServiceQuotaExceededException,
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
  if (input.OrderId !== undefined) {
    const labelValue: string = input.OrderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OrderId.");
    }
    resolvedPath = resolvedPath.replace("{OrderId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: OrderId.");
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
    ...(input.LineItems !== undefined &&
      input.LineItems !== null && {
        LineItems: serializeAws_restJson1LineItemRequestListDefinition(input.LineItems, context),
      }),
    ...(input.OutpostIdentifier !== undefined &&
      input.OutpostIdentifier !== null && { OutpostIdentifier: input.OutpostIdentifier }),
    ...(input.PaymentOption !== undefined && input.PaymentOption !== null && { PaymentOption: input.PaymentOption }),
    ...(input.PaymentTerm !== undefined && input.PaymentTerm !== null && { PaymentTerm: input.PaymentTerm }),
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
    ...(input.AvailabilityZone !== undefined &&
      input.AvailabilityZone !== null && { AvailabilityZone: input.AvailabilityZone }),
    ...(input.AvailabilityZoneId !== undefined &&
      input.AvailabilityZoneId !== null && { AvailabilityZoneId: input.AvailabilityZoneId }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.SiteId !== undefined && input.SiteId !== null && { SiteId: input.SiteId }),
    ...(input.SupportedHardwareType !== undefined &&
      input.SupportedHardwareType !== null && { SupportedHardwareType: input.SupportedHardwareType }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Notes !== undefined && input.Notes !== null && { Notes: input.Notes }),
    ...(input.OperatingAddress !== undefined &&
      input.OperatingAddress !== null && {
        OperatingAddress: serializeAws_restJson1Address(input.OperatingAddress, context),
      }),
    ...(input.RackPhysicalProperties !== undefined &&
      input.RackPhysicalProperties !== null && {
        RackPhysicalProperties: serializeAws_restJson1RackPhysicalProperties(input.RackPhysicalProperties, context),
      }),
    ...(input.ShippingAddress !== undefined &&
      input.ShippingAddress !== null && {
        ShippingAddress: serializeAws_restJson1Address(input.ShippingAddress, context),
      }),
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
  if (input.OutpostId !== undefined) {
    const labelValue: string = input.OutpostId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OutpostId.");
    }
    resolvedPath = resolvedPath.replace("{OutpostId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: OutpostId.");
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sites/{SiteId}";
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

export const serializeAws_restJson1GetCatalogItemCommand = async (
  input: GetCatalogItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/catalog/item/{CatalogItemId}";
  if (input.CatalogItemId !== undefined) {
    const labelValue: string = input.CatalogItemId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CatalogItemId.");
    }
    resolvedPath = resolvedPath.replace("{CatalogItemId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CatalogItemId.");
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

export const serializeAws_restJson1GetOrderCommand = async (
  input: GetOrderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/orders/{OrderId}";
  if (input.OrderId !== undefined) {
    const labelValue: string = input.OrderId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OrderId.");
    }
    resolvedPath = resolvedPath.replace("{OrderId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: OrderId.");
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

export const serializeAws_restJson1GetOutpostCommand = async (
  input: GetOutpostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/outposts/{OutpostId}";
  if (input.OutpostId !== undefined) {
    const labelValue: string = input.OutpostId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OutpostId.");
    }
    resolvedPath = resolvedPath.replace("{OutpostId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: OutpostId.");
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

export const serializeAws_restJson1GetOutpostInstanceTypesCommand = async (
  input: GetOutpostInstanceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/outposts/{OutpostId}/instanceTypes";
  if (input.OutpostId !== undefined) {
    const labelValue: string = input.OutpostId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OutpostId.");
    }
    resolvedPath = resolvedPath.replace("{OutpostId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: OutpostId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
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

export const serializeAws_restJson1GetSiteCommand = async (
  input: GetSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sites/{SiteId}";
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
  if (input.SiteId !== undefined) {
    const labelValue: string = input.SiteId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SiteId.");
    }
    resolvedPath = resolvedPath.replace("{SiteId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SiteId.");
  }
  const query: any = {
    ...(input.AddressType !== undefined && { AddressType: input.AddressType }),
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

export const serializeAws_restJson1ListAssetsCommand = async (
  input: ListAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/outposts/{OutpostIdentifier}/assets";
  if (input.OutpostIdentifier !== undefined) {
    const labelValue: string = input.OutpostIdentifier;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OutpostIdentifier.");
    }
    resolvedPath = resolvedPath.replace("{OutpostIdentifier}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: OutpostIdentifier.");
  }
  const query: any = {
    ...(input.HostIdFilter !== undefined && {
      HostIdFilter: (input.HostIdFilter || []).map((_entry) => _entry as any),
    }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
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

export const serializeAws_restJson1ListCatalogItemsCommand = async (
  input: ListCatalogItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/catalog/items";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.ItemClassFilter !== undefined && {
      ItemClassFilter: (input.ItemClassFilter || []).map((_entry) => _entry as any),
    }),
    ...(input.SupportedStorageFilter !== undefined && {
      SupportedStorageFilter: (input.SupportedStorageFilter || []).map((_entry) => _entry as any),
    }),
    ...(input.EC2FamilyFilter !== undefined && {
      EC2FamilyFilter: (input.EC2FamilyFilter || []).map((_entry) => _entry as any),
    }),
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

export const serializeAws_restJson1ListOrdersCommand = async (
  input: ListOrdersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/list-orders";
  const query: any = {
    ...(input.OutpostIdentifierFilter !== undefined && { OutpostIdentifierFilter: input.OutpostIdentifierFilter }),
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
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

export const serializeAws_restJson1ListOutpostsCommand = async (
  input: ListOutpostsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/outposts";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.LifeCycleStatusFilter !== undefined && {
      LifeCycleStatusFilter: (input.LifeCycleStatusFilter || []).map((_entry) => _entry as any),
    }),
    ...(input.AvailabilityZoneFilter !== undefined && {
      AvailabilityZoneFilter: (input.AvailabilityZoneFilter || []).map((_entry) => _entry as any),
    }),
    ...(input.AvailabilityZoneIdFilter !== undefined && {
      AvailabilityZoneIdFilter: (input.AvailabilityZoneIdFilter || []).map((_entry) => _entry as any),
    }),
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

export const serializeAws_restJson1ListSitesCommand = async (
  input: ListSitesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/sites";
  const query: any = {
    ...(input.NextToken !== undefined && { NextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { MaxResults: input.MaxResults.toString() }),
    ...(input.OperatingAddressCountryCodeFilter !== undefined && {
      OperatingAddressCountryCodeFilter: (input.OperatingAddressCountryCodeFilter || []).map((_entry) => _entry as any),
    }),
    ...(input.OperatingAddressStateOrRegionFilter !== undefined && {
      OperatingAddressStateOrRegionFilter: (input.OperatingAddressStateOrRegionFilter || []).map(
        (_entry) => _entry as any
      ),
    }),
    ...(input.OperatingAddressCityFilter !== undefined && {
      OperatingAddressCityFilter: (input.OperatingAddressCityFilter || []).map((_entry) => _entry as any),
    }),
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
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1UpdateOutpostCommand = async (
  input: UpdateOutpostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/outposts/{OutpostId}";
  if (input.OutpostId !== undefined) {
    const labelValue: string = input.OutpostId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: OutpostId.");
    }
    resolvedPath = resolvedPath.replace("{OutpostId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: OutpostId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.SupportedHardwareType !== undefined &&
      input.SupportedHardwareType !== null && { SupportedHardwareType: input.SupportedHardwareType }),
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
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.Notes !== undefined && input.Notes !== null && { Notes: input.Notes }),
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
    ...(input.Address !== undefined &&
      input.Address !== null && { Address: serializeAws_restJson1Address(input.Address, context) }),
    ...(input.AddressType !== undefined && input.AddressType !== null && { AddressType: input.AddressType }),
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
    ...(input.FiberOpticCableType !== undefined &&
      input.FiberOpticCableType !== null && { FiberOpticCableType: input.FiberOpticCableType }),
    ...(input.MaximumSupportedWeightLbs !== undefined &&
      input.MaximumSupportedWeightLbs !== null && { MaximumSupportedWeightLbs: input.MaximumSupportedWeightLbs }),
    ...(input.OpticalStandard !== undefined &&
      input.OpticalStandard !== null && { OpticalStandard: input.OpticalStandard }),
    ...(input.PowerConnector !== undefined &&
      input.PowerConnector !== null && { PowerConnector: input.PowerConnector }),
    ...(input.PowerDrawKva !== undefined && input.PowerDrawKva !== null && { PowerDrawKva: input.PowerDrawKva }),
    ...(input.PowerFeedDrop !== undefined && input.PowerFeedDrop !== null && { PowerFeedDrop: input.PowerFeedDrop }),
    ...(input.PowerPhase !== undefined && input.PowerPhase !== null && { PowerPhase: input.PowerPhase }),
    ...(input.UplinkCount !== undefined && input.UplinkCount !== null && { UplinkCount: input.UplinkCount }),
    ...(input.UplinkGbps !== undefined && input.UplinkGbps !== null && { UplinkGbps: input.UplinkGbps }),
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
  const contents: CancelOrderCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelOrderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelOrderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateOrderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateOrderCommandError(output, context);
  }
  const contents: CreateOrderCommandOutput = {
    $metadata: deserializeMetadata(output),
    Order: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Order !== undefined && data.Order !== null) {
    contents.Order = deserializeAws_restJson1Order(data.Order, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateOrderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateOutpostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOutpostCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateOutpostCommandError(output, context);
  }
  const contents: CreateOutpostCommandOutput = {
    $metadata: deserializeMetadata(output),
    Outpost: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Outpost !== undefined && data.Outpost !== null) {
    contents.Outpost = deserializeAws_restJson1Outpost(data.Outpost, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateOutpostCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOutpostCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteOutpostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOutpostCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteOutpostCommandError(output, context);
  }
  const contents: DeleteOutpostCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteOutpostCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOutpostCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  };
  await collectBody(output.body, context);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetCatalogItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCatalogItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetCatalogItemCommandError(output, context);
  }
  const contents: GetCatalogItemCommandOutput = {
    $metadata: deserializeMetadata(output),
    CatalogItem: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CatalogItem !== undefined && data.CatalogItem !== null) {
    contents.CatalogItem = deserializeAws_restJson1CatalogItem(data.CatalogItem, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetCatalogItemCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCatalogItemCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetOrderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetOrderCommandError(output, context);
  }
  const contents: GetOrderCommandOutput = {
    $metadata: deserializeMetadata(output),
    Order: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Order !== undefined && data.Order !== null) {
    contents.Order = deserializeAws_restJson1Order(data.Order, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetOrderCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrderCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetOutpostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetOutpostCommandError(output, context);
  }
  const contents: GetOutpostCommandOutput = {
    $metadata: deserializeMetadata(output),
    Outpost: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Outpost !== undefined && data.Outpost !== null) {
    contents.Outpost = deserializeAws_restJson1Outpost(data.Outpost, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetOutpostCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetOutpostInstanceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostInstanceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetOutpostInstanceTypesCommandError(output, context);
  }
  const contents: GetOutpostInstanceTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    InstanceTypes: undefined,
    NextToken: undefined,
    OutpostArn: undefined,
    OutpostId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.InstanceTypes !== undefined && data.InstanceTypes !== null) {
    contents.InstanceTypes = deserializeAws_restJson1InstanceTypeListDefinition(data.InstanceTypes, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.OutpostArn !== undefined && data.OutpostArn !== null) {
    contents.OutpostArn = __expectString(data.OutpostArn);
  }
  if (data.OutpostId !== undefined && data.OutpostId !== null) {
    contents.OutpostId = __expectString(data.OutpostId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetOutpostInstanceTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostInstanceTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSiteCommandError(output, context);
  }
  const contents: GetSiteCommandOutput = {
    $metadata: deserializeMetadata(output),
    Site: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Site !== undefined && data.Site !== null) {
    contents.Site = deserializeAws_restJson1Site(data.Site, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetSiteAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSiteAddressCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSiteAddressCommandError(output, context);
  }
  const contents: GetSiteAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    Address: undefined,
    AddressType: undefined,
    SiteId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Address !== undefined && data.Address !== null) {
    contents.Address = deserializeAws_restJson1Address(data.Address, context);
  }
  if (data.AddressType !== undefined && data.AddressType !== null) {
    contents.AddressType = __expectString(data.AddressType);
  }
  if (data.SiteId !== undefined && data.SiteId !== null) {
    contents.SiteId = __expectString(data.SiteId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSiteAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSiteAddressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListAssetsCommandError(output, context);
  }
  const contents: ListAssetsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Assets: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Assets !== undefined && data.Assets !== null) {
    contents.Assets = deserializeAws_restJson1AssetListDefinition(data.Assets, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListAssetsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListCatalogItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCatalogItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCatalogItemsCommandError(output, context);
  }
  const contents: ListCatalogItemsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CatalogItems: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CatalogItems !== undefined && data.CatalogItems !== null) {
    contents.CatalogItems = deserializeAws_restJson1CatalogItemListDefinition(data.CatalogItems, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListCatalogItemsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCatalogItemsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListOrdersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrdersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListOrdersCommandError(output, context);
  }
  const contents: ListOrdersCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Orders: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Orders !== undefined && data.Orders !== null) {
    contents.Orders = deserializeAws_restJson1OrderSummaryListDefinition(data.Orders, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListOrdersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrdersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListOutpostsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOutpostsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListOutpostsCommandError(output, context);
  }
  const contents: ListOutpostsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Outposts: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Outposts !== undefined && data.Outposts !== null) {
    contents.Outposts = deserializeAws_restJson1outpostListDefinition(data.Outposts, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListOutpostsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOutpostsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListSitesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSitesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListSitesCommandError(output, context);
  }
  const contents: ListSitesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Sites: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Sites !== undefined && data.Sites !== null) {
    contents.Sites = deserializeAws_restJson1siteListDefinition(data.Sites, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListSitesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSitesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
    Tags: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateOutpostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOutpostCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateOutpostCommandError(output, context);
  }
  const contents: UpdateOutpostCommandOutput = {
    $metadata: deserializeMetadata(output),
    Outpost: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Outpost !== undefined && data.Outpost !== null) {
    contents.Outpost = deserializeAws_restJson1Outpost(data.Outpost, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateOutpostCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOutpostCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateSiteAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteAddressCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSiteAddressCommandError(output, context);
  }
  const contents: UpdateSiteAddressCommandOutput = {
    $metadata: deserializeMetadata(output),
    Address: undefined,
    AddressType: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Address !== undefined && data.Address !== null) {
    contents.Address = deserializeAws_restJson1Address(data.Address, context);
  }
  if (data.AddressType !== undefined && data.AddressType !== null) {
    contents.AddressType = __expectString(data.AddressType);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSiteAddressCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteAddressCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateSiteRackPhysicalPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteRackPhysicalPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateSiteRackPhysicalPropertiesCommandError(output, context);
  }
  const contents: UpdateSiteRackPhysicalPropertiesCommandOutput = {
    $metadata: deserializeMetadata(output),
    Site: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Site !== undefined && data.Site !== null) {
    contents.Site = deserializeAws_restJson1Site(data.Site, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateSiteRackPhysicalPropertiesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteRackPhysicalPropertiesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  let errorCode = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
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

const deserializeAws_restJson1InternalServerExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = {};
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

const deserializeAws_restJson1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
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
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
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
    ...(input.AddressLine1 !== undefined && input.AddressLine1 !== null && { AddressLine1: input.AddressLine1 }),
    ...(input.AddressLine2 !== undefined && input.AddressLine2 !== null && { AddressLine2: input.AddressLine2 }),
    ...(input.AddressLine3 !== undefined && input.AddressLine3 !== null && { AddressLine3: input.AddressLine3 }),
    ...(input.City !== undefined && input.City !== null && { City: input.City }),
    ...(input.ContactName !== undefined && input.ContactName !== null && { ContactName: input.ContactName }),
    ...(input.ContactPhoneNumber !== undefined &&
      input.ContactPhoneNumber !== null && { ContactPhoneNumber: input.ContactPhoneNumber }),
    ...(input.CountryCode !== undefined && input.CountryCode !== null && { CountryCode: input.CountryCode }),
    ...(input.DistrictOrCounty !== undefined &&
      input.DistrictOrCounty !== null && { DistrictOrCounty: input.DistrictOrCounty }),
    ...(input.Municipality !== undefined && input.Municipality !== null && { Municipality: input.Municipality }),
    ...(input.PostalCode !== undefined && input.PostalCode !== null && { PostalCode: input.PostalCode }),
    ...(input.StateOrRegion !== undefined && input.StateOrRegion !== null && { StateOrRegion: input.StateOrRegion }),
  };
};

const serializeAws_restJson1LineItemRequest = (input: LineItemRequest, context: __SerdeContext): any => {
  return {
    ...(input.CatalogItemId !== undefined && input.CatalogItemId !== null && { CatalogItemId: input.CatalogItemId }),
    ...(input.Quantity !== undefined && input.Quantity !== null && { Quantity: input.Quantity }),
  };
};

const serializeAws_restJson1LineItemRequestListDefinition = (
  input: LineItemRequest[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1LineItemRequest(entry, context);
    });
};

const serializeAws_restJson1RackPhysicalProperties = (input: RackPhysicalProperties, context: __SerdeContext): any => {
  return {
    ...(input.FiberOpticCableType !== undefined &&
      input.FiberOpticCableType !== null && { FiberOpticCableType: input.FiberOpticCableType }),
    ...(input.MaximumSupportedWeightLbs !== undefined &&
      input.MaximumSupportedWeightLbs !== null && { MaximumSupportedWeightLbs: input.MaximumSupportedWeightLbs }),
    ...(input.OpticalStandard !== undefined &&
      input.OpticalStandard !== null && { OpticalStandard: input.OpticalStandard }),
    ...(input.PowerConnector !== undefined &&
      input.PowerConnector !== null && { PowerConnector: input.PowerConnector }),
    ...(input.PowerDrawKva !== undefined && input.PowerDrawKva !== null && { PowerDrawKva: input.PowerDrawKva }),
    ...(input.PowerFeedDrop !== undefined && input.PowerFeedDrop !== null && { PowerFeedDrop: input.PowerFeedDrop }),
    ...(input.PowerPhase !== undefined && input.PowerPhase !== null && { PowerPhase: input.PowerPhase }),
    ...(input.UplinkCount !== undefined && input.UplinkCount !== null && { UplinkCount: input.UplinkCount }),
    ...(input.UplinkGbps !== undefined && input.UplinkGbps !== null && { UplinkGbps: input.UplinkGbps }),
  };
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
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
    AssetType: __expectString(output.AssetType),
    ComputeAttributes:
      output.ComputeAttributes !== undefined && output.ComputeAttributes !== null
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

const deserializeAws_restJson1CatalogItem = (output: any, context: __SerdeContext): CatalogItem => {
  return {
    CatalogItemId: __expectString(output.CatalogItemId),
    EC2Capacities:
      output.EC2Capacities !== undefined && output.EC2Capacities !== null
        ? deserializeAws_restJson1EC2CapacityListDefinition(output.EC2Capacities, context)
        : undefined,
    ItemStatus: __expectString(output.ItemStatus),
    PowerKva: __limitedParseFloat32(output.PowerKva),
    SupportedStorage:
      output.SupportedStorage !== undefined && output.SupportedStorage !== null
        ? deserializeAws_restJson1SupportedStorageList(output.SupportedStorage, context)
        : undefined,
    SupportedUplinkGbps:
      output.SupportedUplinkGbps !== undefined && output.SupportedUplinkGbps !== null
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

const deserializeAws_restJson1ComputeAttributes = (output: any, context: __SerdeContext): ComputeAttributes => {
  return {
    HostId: __expectString(output.HostId),
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
    CatalogItemId: __expectString(output.CatalogItemId),
    LineItemId: __expectString(output.LineItemId),
    Quantity: __expectInt32(output.Quantity),
    Status: __expectString(output.Status),
  } as any;
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
    return {
      ...acc,
      [key]: __expectInt32(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1Order = (output: any, context: __SerdeContext): Order => {
  return {
    LineItems:
      output.LineItems !== undefined && output.LineItems !== null
        ? deserializeAws_restJson1LineItemListDefinition(output.LineItems, context)
        : undefined,
    OrderFulfilledDate:
      output.OrderFulfilledDate !== undefined && output.OrderFulfilledDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.OrderFulfilledDate)))
        : undefined,
    OrderId: __expectString(output.OrderId),
    OrderSubmissionDate:
      output.OrderSubmissionDate !== undefined && output.OrderSubmissionDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.OrderSubmissionDate)))
        : undefined,
    OutpostId: __expectString(output.OutpostId),
    PaymentOption: __expectString(output.PaymentOption),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1OrderSummary = (output: any, context: __SerdeContext): OrderSummary => {
  return {
    LineItemCountsByStatus:
      output.LineItemCountsByStatus !== undefined && output.LineItemCountsByStatus !== null
        ? deserializeAws_restJson1LineItemStatusCounts(output.LineItemCountsByStatus, context)
        : undefined,
    OrderFulfilledDate:
      output.OrderFulfilledDate !== undefined && output.OrderFulfilledDate !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.OrderFulfilledDate)))
        : undefined,
    OrderId: __expectString(output.OrderId),
    OrderSubmissionDate:
      output.OrderSubmissionDate !== undefined && output.OrderSubmissionDate !== null
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
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
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
      output.RackPhysicalProperties !== undefined && output.RackPhysicalProperties !== null
        ? deserializeAws_restJson1RackPhysicalProperties(output.RackPhysicalProperties, context)
        : undefined,
    SiteArn: __expectString(output.SiteArn),
    SiteId: __expectString(output.SiteId),
    Tags:
      output.Tags !== undefined && output.Tags !== null
        ? deserializeAws_restJson1TagMap(output.Tags, context)
        : undefined,
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
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
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
