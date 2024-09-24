// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  limitedParseDouble as __limitedParseDouble,
  map,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  resolvedPath as __resolvedPath,
  serializeFloat as __serializeFloat,
  strictParseInt32 as __strictParseInt32,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
import {
  StartNetworkResourceUpdateCommandInput,
  StartNetworkResourceUpdateCommandOutput,
} from "../commands/StartNetworkResourceUpdateCommand";
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
  CommitmentConfiguration,
  CommitmentInformation,
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
  ValidationException,
} from "../models/models_0";
import { PrivateNetworksServiceException as __BaseException } from "../models/PrivateNetworksServiceException";

/**
 * serializeAws_restJson1AcknowledgeOrderReceiptCommand
 */
export const se_AcknowledgeOrderReceiptCommand = async (
  input: AcknowledgeOrderReceiptCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/orders/acknowledge");
  let body: any;
  body = JSON.stringify(
    take(input, {
      orderArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ActivateDeviceIdentifierCommand
 */
export const se_ActivateDeviceIdentifierCommand = async (
  input: ActivateDeviceIdentifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/device-identifiers/activate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [],
      deviceIdentifierArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ActivateNetworkSiteCommand
 */
export const se_ActivateNetworkSiteCommand = async (
  input: ActivateNetworkSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/network-sites/activate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [],
      commitmentConfiguration: (_) => _json(_),
      networkSiteArn: [],
      shippingAddress: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ConfigureAccessPointCommand
 */
export const se_ConfigureAccessPointCommand = async (
  input: ConfigureAccessPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/network-resources/configure");
  let body: any;
  body = JSON.stringify(
    take(input, {
      accessPointArn: [],
      cpiSecretKey: [],
      cpiUserId: [],
      cpiUserPassword: [],
      cpiUsername: [],
      position: (_) => se_Position(_, context),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateNetworkCommand
 */
export const se_CreateNetworkCommand = async (
  input: CreateNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/networks");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [],
      description: [],
      networkName: [],
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateNetworkSiteCommand
 */
export const se_CreateNetworkSiteCommand = async (
  input: CreateNetworkSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/network-sites");
  let body: any;
  body = JSON.stringify(
    take(input, {
      availabilityZone: [],
      availabilityZoneId: [],
      clientToken: [],
      description: [],
      networkArn: [],
      networkSiteName: [],
      pendingPlan: (_) => _json(_),
      tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeactivateDeviceIdentifierCommand
 */
export const se_DeactivateDeviceIdentifierCommand = async (
  input: DeactivateDeviceIdentifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/device-identifiers/deactivate");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [],
      deviceIdentifierArn: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteNetworkCommand
 */
export const se_DeleteNetworkCommand = async (
  input: DeleteNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/networks/{networkArn}");
  b.p("networkArn", () => input.networkArn!, "{networkArn}", false);
  const query: any = map({
    [_cT]: [, input[_cT]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteNetworkSiteCommand
 */
export const se_DeleteNetworkSiteCommand = async (
  input: DeleteNetworkSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/network-sites/{networkSiteArn}");
  b.p("networkSiteArn", () => input.networkSiteArn!, "{networkSiteArn}", false);
  const query: any = map({
    [_cT]: [, input[_cT]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetDeviceIdentifierCommand
 */
export const se_GetDeviceIdentifierCommand = async (
  input: GetDeviceIdentifierCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/device-identifiers/{deviceIdentifierArn}");
  b.p("deviceIdentifierArn", () => input.deviceIdentifierArn!, "{deviceIdentifierArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetNetworkCommand
 */
export const se_GetNetworkCommand = async (
  input: GetNetworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/networks/{networkArn}");
  b.p("networkArn", () => input.networkArn!, "{networkArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetNetworkResourceCommand
 */
export const se_GetNetworkResourceCommand = async (
  input: GetNetworkResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/network-resources/{networkResourceArn}");
  b.p("networkResourceArn", () => input.networkResourceArn!, "{networkResourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetNetworkSiteCommand
 */
export const se_GetNetworkSiteCommand = async (
  input: GetNetworkSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/network-sites/{networkSiteArn}");
  b.p("networkSiteArn", () => input.networkSiteArn!, "{networkSiteArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetOrderCommand
 */
export const se_GetOrderCommand = async (
  input: GetOrderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/v1/orders/{orderArn}");
  b.p("orderArn", () => input.orderArn!, "{orderArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListDeviceIdentifiersCommand
 */
export const se_ListDeviceIdentifiersCommand = async (
  input: ListDeviceIdentifiersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/device-identifiers/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      networkArn: [],
      startToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListNetworkResourcesCommand
 */
export const se_ListNetworkResourcesCommand = async (
  input: ListNetworkResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/network-resources");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      networkArn: [],
      startToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListNetworksCommand
 */
export const se_ListNetworksCommand = async (
  input: ListNetworksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/networks/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      startToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListNetworkSitesCommand
 */
export const se_ListNetworkSitesCommand = async (
  input: ListNetworkSitesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/network-sites/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      networkArn: [],
      startToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListOrdersCommand
 */
export const se_ListOrdersCommand = async (
  input: ListOrdersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/orders/list");
  let body: any;
  body = JSON.stringify(
    take(input, {
      filters: (_) => _json(_),
      maxResults: [],
      networkArn: [],
      startToken: [],
    })
  );
  b.m("POST").h(headers).b(body);
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PingCommand
 */
export const se_PingCommand = async (input: PingCommandInput, context: __SerdeContext): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/ping");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartNetworkResourceUpdateCommand
 */
export const se_StartNetworkResourceUpdateCommand = async (
  input: StartNetworkResourceUpdateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/network-resources/update");
  let body: any;
  body = JSON.stringify(
    take(input, {
      commitmentConfiguration: (_) => _json(_),
      networkResourceArn: [],
      returnReason: [],
      shippingAddress: (_) => _json(_),
      updateType: [],
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      tags: (_) => _json(_),
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
  b.bp("/tags/{resourceArn}");
  b.p("resourceArn", () => input.resourceArn!, "{resourceArn}", false);
  const query: any = map({
    [_tK]: [__expectNonNull(input.tagKeys, `tagKeys`) != null, () => input[_tK]! || []],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateNetworkSiteCommand
 */
export const se_UpdateNetworkSiteCommand = async (
  input: UpdateNetworkSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/network-sites/site");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [],
      description: [],
      networkSiteArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateNetworkSitePlanCommand
 */
export const se_UpdateNetworkSitePlanCommand = async (
  input: UpdateNetworkSitePlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/v1/network-sites/plan");
  let body: any;
  body = JSON.stringify(
    take(input, {
      clientToken: [],
      networkSiteArn: [],
      pendingPlan: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AcknowledgeOrderReceiptCommand
 */
export const de_AcknowledgeOrderReceiptCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AcknowledgeOrderReceiptCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    order: (_) => de_Order(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ActivateDeviceIdentifierCommand
 */
export const de_ActivateDeviceIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateDeviceIdentifierCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    deviceIdentifier: (_) => de_DeviceIdentifier(_, context),
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ActivateNetworkSiteCommand
 */
export const de_ActivateNetworkSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ActivateNetworkSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    networkSite: (_) => de_NetworkSite(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ConfigureAccessPointCommand
 */
export const de_ConfigureAccessPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ConfigureAccessPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    accessPoint: (_) => de_NetworkResource(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateNetworkCommand
 */
export const de_CreateNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    network: (_) => de_Network(_, context),
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateNetworkSiteCommand
 */
export const de_CreateNetworkSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateNetworkSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    networkSite: (_) => de_NetworkSite(_, context),
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeactivateDeviceIdentifierCommand
 */
export const de_DeactivateDeviceIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeactivateDeviceIdentifierCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    deviceIdentifier: (_) => de_DeviceIdentifier(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteNetworkCommand
 */
export const de_DeleteNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    network: (_) => de_Network(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteNetworkSiteCommand
 */
export const de_DeleteNetworkSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteNetworkSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    networkSite: (_) => de_NetworkSite(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDeviceIdentifierCommand
 */
export const de_GetDeviceIdentifierCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDeviceIdentifierCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    deviceIdentifier: (_) => de_DeviceIdentifier(_, context),
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetNetworkCommand
 */
export const de_GetNetworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    network: (_) => de_Network(_, context),
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetNetworkResourceCommand
 */
export const de_GetNetworkResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    networkResource: (_) => de_NetworkResource(_, context),
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetNetworkSiteCommand
 */
export const de_GetNetworkSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetNetworkSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    networkSite: (_) => de_NetworkSite(_, context),
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetOrderCommand
 */
export const de_GetOrderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOrderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    order: (_) => de_Order(_, context),
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListDeviceIdentifiersCommand
 */
export const de_ListDeviceIdentifiersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDeviceIdentifiersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    deviceIdentifiers: (_) => de_DeviceIdentifierList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListNetworkResourcesCommand
 */
export const de_ListNetworkResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    networkResources: (_) => de_NetworkResourceList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListNetworksCommand
 */
export const de_ListNetworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    networks: (_) => de_NetworkList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListNetworkSitesCommand
 */
export const de_ListNetworkSitesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListNetworkSitesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    networkSites: (_) => de_NetworkSiteList(_, context),
    nextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListOrdersCommand
 */
export const de_ListOrdersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOrdersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    nextToken: __expectString,
    orders: (_) => de_OrderList(_, context),
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
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1PingCommand
 */
export const de_PingCommand = async (output: __HttpResponse, context: __SerdeContext): Promise<PingCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    status: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartNetworkResourceUpdateCommand
 */
export const de_StartNetworkResourceUpdateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartNetworkResourceUpdateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    networkResource: (_) => de_NetworkResource(_, context),
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
 * deserializeAws_restJson1UpdateNetworkSiteCommand
 */
export const de_UpdateNetworkSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    networkSite: (_) => de_NetworkSite(_, context),
    tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateNetworkSitePlanCommand
 */
export const de_UpdateNetworkSitePlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateNetworkSitePlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    networkSite: (_) => de_NetworkSite(_, context),
    tags: _json,
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
    case "InternalServerException":
    case "com.amazonaws.privatenetworks#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.privatenetworks#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.privatenetworks#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.privatenetworks#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "AccessDeniedException":
    case "com.amazonaws.privatenetworks#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ThrottlingException":
    case "com.amazonaws.privatenetworks#ThrottlingException":
      throw await de_ThrottlingExceptionRes(parsedOutput, context);
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
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AccessDeniedException({
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
    [_rAS]: [() => void 0 !== parsedOutput.headers[_ra], () => __strictParseInt32(parsedOutput.headers[_ra])],
  });
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InternalServerException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
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
    message: __expectString,
    resourceId: __expectString,
    resourceType: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottlingExceptionRes
 */
const de_ThrottlingExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottlingException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    message: __expectString,
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
    fieldList: _json,
    message: __expectString,
    reason: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_Address omitted.

// se_CommitmentConfiguration omitted.

// se_DeviceIdentifierFilters omitted.

// se_DeviceIdentifierFilterValues omitted.

// se_NameValuePair omitted.

// se_NetworkFilters omitted.

// se_NetworkFilterValues omitted.

// se_NetworkResourceDefinition omitted.

// se_NetworkResourceDefinitions omitted.

// se_NetworkResourceFilters omitted.

// se_NetworkResourceFilterValues omitted.

// se_NetworkSiteFilters omitted.

// se_NetworkSiteFilterValues omitted.

// se_Options omitted.

// se_OrderFilters omitted.

// se_OrderFilterValues omitted.

/**
 * serializeAws_restJson1Position
 */
const se_Position = (input: Position, context: __SerdeContext): any => {
  return take(input, {
    elevation: __serializeFloat,
    elevationReference: [],
    elevationUnit: [],
    latitude: __serializeFloat,
    longitude: __serializeFloat,
  });
};

// se_SitePlan omitted.

// se_TagMap omitted.

// de_Address omitted.

// de_CommitmentConfiguration omitted.

/**
 * deserializeAws_restJson1CommitmentInformation
 */
const de_CommitmentInformation = (output: any, context: __SerdeContext): CommitmentInformation => {
  return take(output, {
    commitmentConfiguration: _json,
    expiresOn: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    startAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  }) as any;
};

/**
 * deserializeAws_restJson1DeviceIdentifier
 */
const de_DeviceIdentifier = (output: any, context: __SerdeContext): DeviceIdentifier => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    deviceIdentifierArn: __expectString,
    iccid: __expectString,
    imsi: __expectString,
    networkArn: __expectString,
    orderArn: __expectString,
    status: __expectString,
    trafficGroupArn: __expectString,
    vendor: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1DeviceIdentifierList
 */
const de_DeviceIdentifierList = (output: any, context: __SerdeContext): DeviceIdentifier[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_DeviceIdentifier(entry, context);
    });
  return retVal;
};

// de_NameValuePair omitted.

// de_NameValuePairs omitted.

/**
 * deserializeAws_restJson1Network
 */
const de_Network = (output: any, context: __SerdeContext): Network => {
  return take(output, {
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    networkArn: __expectString,
    networkName: __expectString,
    status: __expectString,
    statusReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1NetworkList
 */
const de_NetworkList = (output: any, context: __SerdeContext): Network[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Network(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NetworkResource
 */
const de_NetworkResource = (output: any, context: __SerdeContext): NetworkResource => {
  return take(output, {
    attributes: _json,
    commitmentInformation: (_: any) => de_CommitmentInformation(_, context),
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    description: __expectString,
    health: __expectString,
    model: __expectString,
    networkArn: __expectString,
    networkResourceArn: __expectString,
    networkSiteArn: __expectString,
    orderArn: __expectString,
    position: (_: any) => de_Position(_, context),
    returnInformation: _json,
    serialNumber: __expectString,
    status: __expectString,
    statusReason: __expectString,
    type: __expectString,
    vendor: __expectString,
  }) as any;
};

// de_NetworkResourceDefinition omitted.

// de_NetworkResourceDefinitions omitted.

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

/**
 * deserializeAws_restJson1NetworkSite
 */
const de_NetworkSite = (output: any, context: __SerdeContext): NetworkSite => {
  return take(output, {
    availabilityZone: __expectString,
    availabilityZoneId: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    currentPlan: _json,
    description: __expectString,
    networkArn: __expectString,
    networkSiteArn: __expectString,
    networkSiteName: __expectString,
    pendingPlan: _json,
    status: __expectString,
    statusReason: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1NetworkSiteList
 */
const de_NetworkSiteList = (output: any, context: __SerdeContext): NetworkSite[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_NetworkSite(entry, context);
    });
  return retVal;
};

// de_Options omitted.

/**
 * deserializeAws_restJson1Order
 */
const de_Order = (output: any, context: __SerdeContext): Order => {
  return take(output, {
    acknowledgmentStatus: __expectString,
    createdAt: (_: any) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
    networkArn: __expectString,
    networkSiteArn: __expectString,
    orderArn: __expectString,
    orderedResources: _json,
    shippingAddress: _json,
    trackingInformation: _json,
  }) as any;
};

// de_OrderedResourceDefinition omitted.

// de_OrderedResourceDefinitions omitted.

/**
 * deserializeAws_restJson1OrderList
 */
const de_OrderList = (output: any, context: __SerdeContext): Order[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Order(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Position
 */
const de_Position = (output: any, context: __SerdeContext): Position => {
  return take(output, {
    elevation: __limitedParseDouble,
    elevationReference: __expectString,
    elevationUnit: __expectString,
    latitude: __limitedParseDouble,
    longitude: __limitedParseDouble,
  }) as any;
};

// de_ReturnInformation omitted.

// de_SitePlan omitted.

// de_TagMap omitted.

// de_TrackingInformation omitted.

// de_TrackingInformationList omitted.

// de_ValidationExceptionField omitted.

// de_ValidationExceptionFieldList omitted.

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

const _cT = "clientToken";
const _rAS = "retryAfterSeconds";
const _ra = "retry-after";
const _tK = "tagKeys";
