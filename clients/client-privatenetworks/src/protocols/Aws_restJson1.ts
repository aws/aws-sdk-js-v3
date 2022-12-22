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
  parseRfc3339DateTime as __parseRfc3339DateTime,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  strictParseInt32 as __strictParseInt32,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AcknowledgeOrderReceiptCommandInput,
  AcknowledgeOrderReceiptCommandOutput,
} from "../commands/AcknowledgeOrderReceiptCommand";
import {
  ActivateDeviceIdentifierCommandInput,
  ActivateDeviceIdentifierCommandOutput,
} from "../commands/ActivateDeviceIdentifierCommand";
import {
  ActivateNetworkSiteCommandInput,
  ActivateNetworkSiteCommandOutput,
} from "../commands/ActivateNetworkSiteCommand";
import {
  ConfigureAccessPointCommandInput,
  ConfigureAccessPointCommandOutput,
} from "../commands/ConfigureAccessPointCommand";
import { CreateNetworkCommandInput, CreateNetworkCommandOutput } from "../commands/CreateNetworkCommand";
import { CreateNetworkSiteCommandInput, CreateNetworkSiteCommandOutput } from "../commands/CreateNetworkSiteCommand";
import {
  DeactivateDeviceIdentifierCommandInput,
  DeactivateDeviceIdentifierCommandOutput,
} from "../commands/DeactivateDeviceIdentifierCommand";
import { DeleteNetworkCommandInput, DeleteNetworkCommandOutput } from "../commands/DeleteNetworkCommand";
import { DeleteNetworkSiteCommandInput, DeleteNetworkSiteCommandOutput } from "../commands/DeleteNetworkSiteCommand";
import {
  GetDeviceIdentifierCommandInput,
  GetDeviceIdentifierCommandOutput,
} from "../commands/GetDeviceIdentifierCommand";
import { GetNetworkCommandInput, GetNetworkCommandOutput } from "../commands/GetNetworkCommand";
import { GetNetworkResourceCommandInput, GetNetworkResourceCommandOutput } from "../commands/GetNetworkResourceCommand";
import { GetNetworkSiteCommandInput, GetNetworkSiteCommandOutput } from "../commands/GetNetworkSiteCommand";
import { GetOrderCommandInput, GetOrderCommandOutput } from "../commands/GetOrderCommand";
import {
  ListDeviceIdentifiersCommandInput,
  ListDeviceIdentifiersCommandOutput,
} from "../commands/ListDeviceIdentifiersCommand";
import {
  ListNetworkResourcesCommandInput,
  ListNetworkResourcesCommandOutput,
} from "../commands/ListNetworkResourcesCommand";
import { ListNetworksCommandInput, ListNetworksCommandOutput } from "../commands/ListNetworksCommand";
import { ListNetworkSitesCommandInput, ListNetworkSitesCommandOutput } from "../commands/ListNetworkSitesCommand";
import { ListOrdersCommandInput, ListOrdersCommandOutput } from "../commands/ListOrdersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { PingCommandInput, PingCommandOutput } from "../commands/PingCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateNetworkSiteCommandInput, UpdateNetworkSiteCommandOutput } from "../commands/UpdateNetworkSiteCommand";
import {
  UpdateNetworkSitePlanCommandInput,
  UpdateNetworkSitePlanCommandOutput,
} from "../commands/UpdateNetworkSitePlanCommand";
import {
  AccessDeniedException,
  Address,
  DeviceIdentifier,
  DeviceIdentifierFilterKeys,
  InternalServerException,
  LimitExceededException,
  NameValuePair,
  Network,
  NetworkFilterKeys,
  NetworkResource,
  NetworkResourceDefinition,
  NetworkResourceFilterKeys,
  NetworkSite,
  NetworkSiteFilterKeys,
  Order,
  OrderFilterKeys,
  Position,
  ResourceNotFoundException,
  SitePlan,
  ThrottlingException,
  TrackingInformation,
  ValidationException,
  ValidationExceptionField,
} from "../models/models_0";
import { PrivateNetworksServiceException as __BaseException } from "../models/PrivateNetworksServiceException";

export const serializeAws_restJson1AcknowledgeOrderReceiptCommand = async (
  input: AcknowledgeOrderReceiptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/orders/acknowledge";
  let body: any;
  body = JSON.stringify({
    ...(input.orderArn != null && { orderArn: input.orderArn }),
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

export const serializeAws_restJson1ActivateDeviceIdentifierCommand = async (
  input: ActivateDeviceIdentifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/device-identifiers/activate";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.deviceIdentifierArn != null && { deviceIdentifierArn: input.deviceIdentifierArn }),
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

export const serializeAws_restJson1ActivateNetworkSiteCommand = async (
  input: ActivateNetworkSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/network-sites/activate";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.networkSiteArn != null && { networkSiteArn: input.networkSiteArn }),
    ...(input.shippingAddress != null && {
      shippingAddress: serializeAws_restJson1Address(input.shippingAddress, context),
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

export const serializeAws_restJson1ConfigureAccessPointCommand = async (
  input: ConfigureAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/network-resources/configure";
  let body: any;
  body = JSON.stringify({
    ...(input.accessPointArn != null && { accessPointArn: input.accessPointArn }),
    ...(input.cpiSecretKey != null && { cpiSecretKey: input.cpiSecretKey }),
    ...(input.cpiUserId != null && { cpiUserId: input.cpiUserId }),
    ...(input.cpiUserPassword != null && { cpiUserPassword: input.cpiUserPassword }),
    ...(input.cpiUsername != null && { cpiUsername: input.cpiUsername }),
    ...(input.position != null && { position: serializeAws_restJson1Position(input.position, context) }),
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

export const serializeAws_restJson1CreateNetworkCommand = async (
  input: CreateNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/networks";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.description != null && { description: input.description }),
    ...(input.networkName != null && { networkName: input.networkName }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1CreateNetworkSiteCommand = async (
  input: CreateNetworkSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/network-sites";
  let body: any;
  body = JSON.stringify({
    ...(input.availabilityZone != null && { availabilityZone: input.availabilityZone }),
    ...(input.availabilityZoneId != null && { availabilityZoneId: input.availabilityZoneId }),
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.description != null && { description: input.description }),
    ...(input.networkArn != null && { networkArn: input.networkArn }),
    ...(input.networkSiteName != null && { networkSiteName: input.networkSiteName }),
    ...(input.pendingPlan != null && { pendingPlan: serializeAws_restJson1SitePlan(input.pendingPlan, context) }),
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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

export const serializeAws_restJson1DeactivateDeviceIdentifierCommand = async (
  input: DeactivateDeviceIdentifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/device-identifiers/deactivate";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.deviceIdentifierArn != null && { deviceIdentifierArn: input.deviceIdentifierArn }),
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

export const serializeAws_restJson1DeleteNetworkCommand = async (
  input: DeleteNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/networks/{networkArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "networkArn", () => input.networkArn!, "{networkArn}", false);
  const query: any = map({
    clientToken: [, input.clientToken!],
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

export const serializeAws_restJson1DeleteNetworkSiteCommand = async (
  input: DeleteNetworkSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/network-sites/{networkSiteArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "networkSiteArn",
    () => input.networkSiteArn!,
    "{networkSiteArn}",
    false
  );
  const query: any = map({
    clientToken: [, input.clientToken!],
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

export const serializeAws_restJson1GetDeviceIdentifierCommand = async (
  input: GetDeviceIdentifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/device-identifiers/{deviceIdentifierArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "deviceIdentifierArn",
    () => input.deviceIdentifierArn!,
    "{deviceIdentifierArn}",
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

export const serializeAws_restJson1GetNetworkCommand = async (
  input: GetNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/networks/{networkArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "networkArn", () => input.networkArn!, "{networkArn}", false);
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

export const serializeAws_restJson1GetNetworkResourceCommand = async (
  input: GetNetworkResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/v1/network-resources/{networkResourceArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "networkResourceArn",
    () => input.networkResourceArn!,
    "{networkResourceArn}",
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

export const serializeAws_restJson1GetNetworkSiteCommand = async (
  input: GetNetworkSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/network-sites/{networkSiteArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "networkSiteArn",
    () => input.networkSiteArn!,
    "{networkSiteArn}",
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/orders/{orderArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "orderArn", () => input.orderArn!, "{orderArn}", false);
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

export const serializeAws_restJson1ListDeviceIdentifiersCommand = async (
  input: ListDeviceIdentifiersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/device-identifiers/list";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: serializeAws_restJson1DeviceIdentifierFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.networkArn != null && { networkArn: input.networkArn }),
    ...(input.startToken != null && { startToken: input.startToken }),
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

export const serializeAws_restJson1ListNetworkResourcesCommand = async (
  input: ListNetworkResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/network-resources";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: serializeAws_restJson1NetworkResourceFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.networkArn != null && { networkArn: input.networkArn }),
    ...(input.startToken != null && { startToken: input.startToken }),
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

export const serializeAws_restJson1ListNetworksCommand = async (
  input: ListNetworksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/networks/list";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: serializeAws_restJson1NetworkFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.startToken != null && { startToken: input.startToken }),
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

export const serializeAws_restJson1ListNetworkSitesCommand = async (
  input: ListNetworkSitesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/network-sites/list";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: serializeAws_restJson1NetworkSiteFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.networkArn != null && { networkArn: input.networkArn }),
    ...(input.startToken != null && { startToken: input.startToken }),
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

export const serializeAws_restJson1ListOrdersCommand = async (
  input: ListOrdersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/orders/list";
  let body: any;
  body = JSON.stringify({
    ...(input.filters != null && { filters: serializeAws_restJson1OrderFilters(input.filters, context) }),
    ...(input.maxResults != null && { maxResults: input.maxResults }),
    ...(input.networkArn != null && { networkArn: input.networkArn }),
    ...(input.startToken != null && { startToken: input.startToken }),
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

export const serializeAws_restJson1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
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

export const serializeAws_restJson1PingCommand = async (
  input: PingCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ping";
  let body: any;
  body = "";
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.tags != null && { tags: serializeAws_restJson1TagMap(input.tags, context) }),
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
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{resourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    tagKeys: [
      __expectNonNull(input.tagKeys, `tagKeys`) != null,
      () => (input.tagKeys! || []).map((_entry) => _entry as any),
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

export const serializeAws_restJson1UpdateNetworkSiteCommand = async (
  input: UpdateNetworkSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/network-sites/site";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.description != null && { description: input.description }),
    ...(input.networkSiteArn != null && { networkSiteArn: input.networkSiteArn }),
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

export const serializeAws_restJson1UpdateNetworkSitePlanCommand = async (
  input: UpdateNetworkSitePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/v1/network-sites/plan";
  let body: any;
  body = JSON.stringify({
    ...(input.clientToken != null && { clientToken: input.clientToken }),
    ...(input.networkSiteArn != null && { networkSiteArn: input.networkSiteArn }),
    ...(input.pendingPlan != null && { pendingPlan: serializeAws_restJson1SitePlan(input.pendingPlan, context) }),
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

export const deserializeAws_restJson1AcknowledgeOrderReceiptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcknowledgeOrderReceiptCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AcknowledgeOrderReceiptCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.order != null) {
    contents.order = deserializeAws_restJson1Order(data.order, context);
  }
  return contents;
};

const deserializeAws_restJson1AcknowledgeOrderReceiptCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcknowledgeOrderReceiptCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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

export const deserializeAws_restJson1ActivateDeviceIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateDeviceIdentifierCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ActivateDeviceIdentifierCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.deviceIdentifier != null) {
    contents.deviceIdentifier = deserializeAws_restJson1DeviceIdentifier(data.deviceIdentifier, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ActivateDeviceIdentifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateDeviceIdentifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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

export const deserializeAws_restJson1ActivateNetworkSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateNetworkSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ActivateNetworkSiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkSite != null) {
    contents.networkSite = deserializeAws_restJson1NetworkSite(data.networkSite, context);
  }
  return contents;
};

const deserializeAws_restJson1ActivateNetworkSiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateNetworkSiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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

export const deserializeAws_restJson1ConfigureAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ConfigureAccessPointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.accessPoint != null) {
    contents.accessPoint = deserializeAws_restJson1NetworkResource(data.accessPoint, context);
  }
  return contents;
};

const deserializeAws_restJson1ConfigureAccessPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureAccessPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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

export const deserializeAws_restJson1CreateNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateNetworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.network != null) {
    contents.network = deserializeAws_restJson1Network(data.network, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.privatenetworks#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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

export const deserializeAws_restJson1CreateNetworkSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateNetworkSiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkSite != null) {
    contents.networkSite = deserializeAws_restJson1NetworkSite(data.networkSite, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1CreateNetworkSiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkSiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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

export const deserializeAws_restJson1DeactivateDeviceIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateDeviceIdentifierCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeactivateDeviceIdentifierCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.deviceIdentifier != null) {
    contents.deviceIdentifier = deserializeAws_restJson1DeviceIdentifier(data.deviceIdentifier, context);
  }
  return contents;
};

const deserializeAws_restJson1DeactivateDeviceIdentifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateDeviceIdentifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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

export const deserializeAws_restJson1DeleteNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteNetworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.network != null) {
    contents.network = deserializeAws_restJson1Network(data.network, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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

export const deserializeAws_restJson1DeleteNetworkSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteNetworkSiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkSite != null) {
    contents.networkSite = deserializeAws_restJson1NetworkSite(data.networkSite, context);
  }
  return contents;
};

const deserializeAws_restJson1DeleteNetworkSiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkSiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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

export const deserializeAws_restJson1GetDeviceIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceIdentifierCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDeviceIdentifierCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.deviceIdentifier != null) {
    contents.deviceIdentifier = deserializeAws_restJson1DeviceIdentifier(data.deviceIdentifier, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetDeviceIdentifierCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceIdentifierCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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

export const deserializeAws_restJson1GetNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetNetworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.network != null) {
    contents.network = deserializeAws_restJson1Network(data.network, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetNetworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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

export const deserializeAws_restJson1GetNetworkResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetNetworkResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkResource != null) {
    contents.networkResource = deserializeAws_restJson1NetworkResource(data.networkResource, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetNetworkResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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

export const deserializeAws_restJson1GetNetworkSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetNetworkSiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkSite != null) {
    contents.networkSite = deserializeAws_restJson1NetworkSite(data.networkSite, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1GetNetworkSiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkSiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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
  if (data.order != null) {
    contents.order = deserializeAws_restJson1Order(data.order, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
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
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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

export const deserializeAws_restJson1ListDeviceIdentifiersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceIdentifiersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDeviceIdentifiersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.deviceIdentifiers != null) {
    contents.deviceIdentifiers = deserializeAws_restJson1DeviceIdentifierList(data.deviceIdentifiers, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListDeviceIdentifiersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceIdentifiersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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

export const deserializeAws_restJson1ListNetworkResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNetworkResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkResources != null) {
    contents.networkResources = deserializeAws_restJson1NetworkResourceList(data.networkResources, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListNetworkResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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

export const deserializeAws_restJson1ListNetworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNetworksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networks != null) {
    contents.networks = deserializeAws_restJson1NetworkList(data.networks, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListNetworksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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

export const deserializeAws_restJson1ListNetworkSitesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkSitesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListNetworkSitesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkSites != null) {
    contents.networkSites = deserializeAws_restJson1NetworkSiteList(data.networkSites, context);
  }
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListNetworkSitesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkSitesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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
  if (data.nextToken != null) {
    contents.nextToken = __expectString(data.nextToken);
  }
  if (data.orders != null) {
    contents.orders = deserializeAws_restJson1OrderList(data.orders, context);
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
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
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
    case "com.amazonaws.privatenetworks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.privatenetworks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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

export const deserializeAws_restJson1PingCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PingCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.status != null) {
    contents.status = __expectString(data.status);
  }
  return contents;
};

const deserializeAws_restJson1PingCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PingCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
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
    case "com.amazonaws.privatenetworks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.privatenetworks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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
    case "com.amazonaws.privatenetworks#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.privatenetworks#ThrottlingException":
      throw await deserializeAws_restJson1ThrottlingExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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

export const deserializeAws_restJson1UpdateNetworkSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateNetworkSiteCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkSite != null) {
    contents.networkSite = deserializeAws_restJson1NetworkSite(data.networkSite, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateNetworkSiteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkSiteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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

export const deserializeAws_restJson1UpdateNetworkSitePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkSitePlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateNetworkSitePlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.networkSite != null) {
    contents.networkSite = deserializeAws_restJson1NetworkSite(data.networkSite, context);
  }
  if (data.tags != null) {
    contents.tags = deserializeAws_restJson1TagMap(data.tags, context);
  }
  return contents;
};

const deserializeAws_restJson1UpdateNetworkSitePlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkSitePlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await deserializeAws_restJson1InternalServerExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new AccessDeniedException({
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
    retryAfterSeconds: [
      () => void 0 !== parsedOutput.headers["retry-after"],
      () => __strictParseInt32(parsedOutput.headers["retry-after"]),
    ],
  });
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  const exception = new LimitExceededException({
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
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.resourceId != null) {
    contents.resourceId = __expectString(data.resourceId);
  }
  if (data.resourceType != null) {
    contents.resourceType = __expectString(data.resourceType);
  }
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottlingExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.message != null) {
    contents.message = __expectString(data.message);
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
  if (data.fieldList != null) {
    contents.fieldList = deserializeAws_restJson1ValidationExceptionFieldList(data.fieldList, context);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.reason != null) {
    contents.reason = __expectString(data.reason);
  }
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1Address = (input: Address, context: __SerdeContext): any => {
  return {
    ...(input.city != null && { city: input.city }),
    ...(input.company != null && { company: input.company }),
    ...(input.country != null && { country: input.country }),
    ...(input.name != null && { name: input.name }),
    ...(input.phoneNumber != null && { phoneNumber: input.phoneNumber }),
    ...(input.postalCode != null && { postalCode: input.postalCode }),
    ...(input.stateOrProvince != null && { stateOrProvince: input.stateOrProvince }),
    ...(input.street1 != null && { street1: input.street1 }),
    ...(input.street2 != null && { street2: input.street2 }),
    ...(input.street3 != null && { street3: input.street3 }),
  };
};

const serializeAws_restJson1DeviceIdentifierFilters = (
  input: Record<string, string[]>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: Record<string, any>, [key, value]: [DeviceIdentifierFilterKeys | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = serializeAws_restJson1DeviceIdentifierFilterValues(value, context);
      return acc;
    },
    {}
  );
};

const serializeAws_restJson1DeviceIdentifierFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1NameValuePair = (input: NameValuePair, context: __SerdeContext): any => {
  return {
    ...(input.name != null && { name: input.name }),
    ...(input.value != null && { value: input.value }),
  };
};

const serializeAws_restJson1NetworkFilters = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [NetworkFilterKeys | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1NetworkFilterValues(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1NetworkFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1NetworkResourceDefinition = (
  input: NetworkResourceDefinition,
  context: __SerdeContext
): any => {
  return {
    ...(input.count != null && { count: input.count }),
    ...(input.options != null && { options: serializeAws_restJson1Options(input.options, context) }),
    ...(input.type != null && { type: input.type }),
  };
};

const serializeAws_restJson1NetworkResourceDefinitions = (
  input: NetworkResourceDefinition[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1NetworkResourceDefinition(entry, context);
    });
};

const serializeAws_restJson1NetworkResourceFilters = (
  input: Record<string, string[]>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: Record<string, any>, [key, value]: [NetworkResourceFilterKeys | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = serializeAws_restJson1NetworkResourceFilterValues(value, context);
      return acc;
    },
    {}
  );
};

const serializeAws_restJson1NetworkResourceFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1NetworkSiteFilters = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce(
    (acc: Record<string, any>, [key, value]: [NetworkSiteFilterKeys | string, any]) => {
      if (value === null) {
        return acc;
      }
      acc[key] = serializeAws_restJson1NetworkSiteFilterValues(value, context);
      return acc;
    },
    {}
  );
};

const serializeAws_restJson1NetworkSiteFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Options = (input: NameValuePair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1NameValuePair(entry, context);
    });
};

const serializeAws_restJson1OrderFilters = (input: Record<string, string[]>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [OrderFilterKeys | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = serializeAws_restJson1OrderFilterValues(value, context);
    return acc;
  }, {});
};

const serializeAws_restJson1OrderFilterValues = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Position = (input: Position, context: __SerdeContext): any => {
  return {
    ...(input.elevation != null && { elevation: __serializeFloat(input.elevation) }),
    ...(input.elevationReference != null && { elevationReference: input.elevationReference }),
    ...(input.elevationUnit != null && { elevationUnit: input.elevationUnit }),
    ...(input.latitude != null && { latitude: __serializeFloat(input.latitude) }),
    ...(input.longitude != null && { longitude: __serializeFloat(input.longitude) }),
  };
};

const serializeAws_restJson1SitePlan = (input: SitePlan, context: __SerdeContext): any => {
  return {
    ...(input.options != null && { options: serializeAws_restJson1Options(input.options, context) }),
    ...(input.resourceDefinitions != null && {
      resourceDefinitions: serializeAws_restJson1NetworkResourceDefinitions(input.resourceDefinitions, context),
    }),
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
    city: __expectString(output.city),
    company: __expectString(output.company),
    country: __expectString(output.country),
    name: __expectString(output.name),
    phoneNumber: __expectString(output.phoneNumber),
    postalCode: __expectString(output.postalCode),
    stateOrProvince: __expectString(output.stateOrProvince),
    street1: __expectString(output.street1),
    street2: __expectString(output.street2),
    street3: __expectString(output.street3),
  } as any;
};

const deserializeAws_restJson1DeviceIdentifier = (output: any, context: __SerdeContext): DeviceIdentifier => {
  return {
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    deviceIdentifierArn: __expectString(output.deviceIdentifierArn),
    iccid: __expectString(output.iccid),
    imsi: __expectString(output.imsi),
    networkArn: __expectString(output.networkArn),
    orderArn: __expectString(output.orderArn),
    status: __expectString(output.status),
    trafficGroupArn: __expectString(output.trafficGroupArn),
    vendor: __expectString(output.vendor),
  } as any;
};

const deserializeAws_restJson1DeviceIdentifierList = (output: any, context: __SerdeContext): DeviceIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DeviceIdentifier(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NameValuePair = (output: any, context: __SerdeContext): NameValuePair => {
  return {
    name: __expectString(output.name),
    value: __expectString(output.value),
  } as any;
};

const deserializeAws_restJson1NameValuePairs = (output: any, context: __SerdeContext): NameValuePair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NameValuePair(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Network = (output: any, context: __SerdeContext): Network => {
  return {
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    description: __expectString(output.description),
    networkArn: __expectString(output.networkArn),
    networkName: __expectString(output.networkName),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
  } as any;
};

const deserializeAws_restJson1NetworkList = (output: any, context: __SerdeContext): Network[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Network(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NetworkResource = (output: any, context: __SerdeContext): NetworkResource => {
  return {
    attributes:
      output.attributes != null ? deserializeAws_restJson1NameValuePairs(output.attributes, context) : undefined,
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    description: __expectString(output.description),
    health: __expectString(output.health),
    model: __expectString(output.model),
    networkArn: __expectString(output.networkArn),
    networkResourceArn: __expectString(output.networkResourceArn),
    networkSiteArn: __expectString(output.networkSiteArn),
    orderArn: __expectString(output.orderArn),
    position: output.position != null ? deserializeAws_restJson1Position(output.position, context) : undefined,
    serialNumber: __expectString(output.serialNumber),
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
    type: __expectString(output.type),
    vendor: __expectString(output.vendor),
  } as any;
};

const deserializeAws_restJson1NetworkResourceDefinition = (
  output: any,
  context: __SerdeContext
): NetworkResourceDefinition => {
  return {
    count: __expectInt32(output.count),
    options: output.options != null ? deserializeAws_restJson1Options(output.options, context) : undefined,
    type: __expectString(output.type),
  } as any;
};

const deserializeAws_restJson1NetworkResourceDefinitions = (
  output: any,
  context: __SerdeContext
): NetworkResourceDefinition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkResourceDefinition(entry, context);
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

const deserializeAws_restJson1NetworkSite = (output: any, context: __SerdeContext): NetworkSite => {
  return {
    availabilityZone: __expectString(output.availabilityZone),
    availabilityZoneId: __expectString(output.availabilityZoneId),
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    currentPlan: output.currentPlan != null ? deserializeAws_restJson1SitePlan(output.currentPlan, context) : undefined,
    description: __expectString(output.description),
    networkArn: __expectString(output.networkArn),
    networkSiteArn: __expectString(output.networkSiteArn),
    networkSiteName: __expectString(output.networkSiteName),
    pendingPlan: output.pendingPlan != null ? deserializeAws_restJson1SitePlan(output.pendingPlan, context) : undefined,
    status: __expectString(output.status),
    statusReason: __expectString(output.statusReason),
  } as any;
};

const deserializeAws_restJson1NetworkSiteList = (output: any, context: __SerdeContext): NetworkSite[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NetworkSite(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Options = (output: any, context: __SerdeContext): NameValuePair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1NameValuePair(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Order = (output: any, context: __SerdeContext): Order => {
  return {
    acknowledgmentStatus: __expectString(output.acknowledgmentStatus),
    createdAt: output.createdAt != null ? __expectNonNull(__parseRfc3339DateTime(output.createdAt)) : undefined,
    networkArn: __expectString(output.networkArn),
    networkSiteArn: __expectString(output.networkSiteArn),
    orderArn: __expectString(output.orderArn),
    shippingAddress:
      output.shippingAddress != null ? deserializeAws_restJson1Address(output.shippingAddress, context) : undefined,
    trackingInformation:
      output.trackingInformation != null
        ? deserializeAws_restJson1TrackingInformationList(output.trackingInformation, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OrderList = (output: any, context: __SerdeContext): Order[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Order(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Position = (output: any, context: __SerdeContext): Position => {
  return {
    elevation: __limitedParseDouble(output.elevation),
    elevationReference: __expectString(output.elevationReference),
    elevationUnit: __expectString(output.elevationUnit),
    latitude: __limitedParseDouble(output.latitude),
    longitude: __limitedParseDouble(output.longitude),
  } as any;
};

const deserializeAws_restJson1SitePlan = (output: any, context: __SerdeContext): SitePlan => {
  return {
    options: output.options != null ? deserializeAws_restJson1Options(output.options, context) : undefined,
    resourceDefinitions:
      output.resourceDefinitions != null
        ? deserializeAws_restJson1NetworkResourceDefinitions(output.resourceDefinitions, context)
        : undefined,
  } as any;
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

const deserializeAws_restJson1TrackingInformation = (output: any, context: __SerdeContext): TrackingInformation => {
  return {
    trackingNumber: __expectString(output.trackingNumber),
  } as any;
};

const deserializeAws_restJson1TrackingInformationList = (
  output: any,
  context: __SerdeContext
): TrackingInformation[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TrackingInformation(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ValidationExceptionField = (
  output: any,
  context: __SerdeContext
): ValidationExceptionField => {
  return {
    message: __expectString(output.message),
    name: __expectString(output.name),
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
