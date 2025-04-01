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
  limitedParseFloat32 as __limitedParseFloat32,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { CancelCapacityTaskCommandInput, CancelCapacityTaskCommandOutput } from "../commands/CancelCapacityTaskCommand";
import { CancelOrderCommandInput, CancelOrderCommandOutput } from "../commands/CancelOrderCommand";
import { CreateOrderCommandInput, CreateOrderCommandOutput } from "../commands/CreateOrderCommand";
import { CreateOutpostCommandInput, CreateOutpostCommandOutput } from "../commands/CreateOutpostCommand";
import { CreateSiteCommandInput, CreateSiteCommandOutput } from "../commands/CreateSiteCommand";
import { DeleteOutpostCommandInput, DeleteOutpostCommandOutput } from "../commands/DeleteOutpostCommand";
import { DeleteSiteCommandInput, DeleteSiteCommandOutput } from "../commands/DeleteSiteCommand";
import { GetCapacityTaskCommandInput, GetCapacityTaskCommandOutput } from "../commands/GetCapacityTaskCommand";
import { GetCatalogItemCommandInput, GetCatalogItemCommandOutput } from "../commands/GetCatalogItemCommand";
import { GetConnectionCommandInput, GetConnectionCommandOutput } from "../commands/GetConnectionCommand";
import { GetOrderCommandInput, GetOrderCommandOutput } from "../commands/GetOrderCommand";
import { GetOutpostCommandInput, GetOutpostCommandOutput } from "../commands/GetOutpostCommand";
import {
  GetOutpostInstanceTypesCommandInput,
  GetOutpostInstanceTypesCommandOutput,
} from "../commands/GetOutpostInstanceTypesCommand";
import {
  GetOutpostSupportedInstanceTypesCommandInput,
  GetOutpostSupportedInstanceTypesCommandOutput,
} from "../commands/GetOutpostSupportedInstanceTypesCommand";
import { GetSiteAddressCommandInput, GetSiteAddressCommandOutput } from "../commands/GetSiteAddressCommand";
import { GetSiteCommandInput, GetSiteCommandOutput } from "../commands/GetSiteCommand";
import { ListAssetInstancesCommandInput, ListAssetInstancesCommandOutput } from "../commands/ListAssetInstancesCommand";
import { ListAssetsCommandInput, ListAssetsCommandOutput } from "../commands/ListAssetsCommand";
import {
  ListBlockingInstancesForCapacityTaskCommandInput,
  ListBlockingInstancesForCapacityTaskCommandOutput,
} from "../commands/ListBlockingInstancesForCapacityTaskCommand";
import { ListCapacityTasksCommandInput, ListCapacityTasksCommandOutput } from "../commands/ListCapacityTasksCommand";
import { ListCatalogItemsCommandInput, ListCatalogItemsCommandOutput } from "../commands/ListCatalogItemsCommand";
import { ListOrdersCommandInput, ListOrdersCommandOutput } from "../commands/ListOrdersCommand";
import { ListOutpostsCommandInput, ListOutpostsCommandOutput } from "../commands/ListOutpostsCommand";
import { ListSitesCommandInput, ListSitesCommandOutput } from "../commands/ListSitesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "../commands/ListTagsForResourceCommand";
import { StartCapacityTaskCommandInput, StartCapacityTaskCommandOutput } from "../commands/StartCapacityTaskCommand";
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
  AWSServiceName,
  CapacityTaskSummary,
  CatalogItem,
  ConflictException,
  InstancesToExclude,
  InstanceTypeCapacity,
  InternalServerException,
  LineItemRequest,
  NotFoundException,
  Order,
  OrderSummary,
  RackPhysicalProperties,
  ServiceQuotaExceededException,
  ValidationException,
} from "../models/models_0";
import { OutpostsServiceException as __BaseException } from "../models/OutpostsServiceException";

/**
 * serializeAws_restJson1CancelCapacityTaskCommand
 */
export const se_CancelCapacityTaskCommand = async (
  input: CancelCapacityTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/outposts/{OutpostIdentifier}/capacity/{CapacityTaskId}");
  b.p("CapacityTaskId", () => input.CapacityTaskId!, "{CapacityTaskId}", false);
  b.p("OutpostIdentifier", () => input.OutpostIdentifier!, "{OutpostIdentifier}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelOrderCommand
 */
export const se_CancelOrderCommand = async (
  input: CancelOrderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/orders/{OrderId}/cancel");
  b.p("OrderId", () => input.OrderId!, "{OrderId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateOrderCommand
 */
export const se_CreateOrderCommand = async (
  input: CreateOrderCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/orders");
  let body: any;
  body = JSON.stringify(
    take(input, {
      LineItems: (_) => _json(_),
      OutpostIdentifier: [],
      PaymentOption: [],
      PaymentTerm: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateOutpostCommand
 */
export const se_CreateOutpostCommand = async (
  input: CreateOutpostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/outposts");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AvailabilityZone: [],
      AvailabilityZoneId: [],
      Description: [],
      Name: [],
      SiteId: [],
      SupportedHardwareType: [],
      Tags: (_) => _json(_),
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
  b.bp("/sites");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
      Notes: [],
      OperatingAddress: (_) => _json(_),
      RackPhysicalProperties: (_) => _json(_),
      ShippingAddress: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteOutpostCommand
 */
export const se_DeleteOutpostCommand = async (
  input: DeleteOutpostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/outposts/{OutpostId}");
  b.p("OutpostId", () => input.OutpostId!, "{OutpostId}", false);
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
  b.bp("/sites/{SiteId}");
  b.p("SiteId", () => input.SiteId!, "{SiteId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCapacityTaskCommand
 */
export const se_GetCapacityTaskCommand = async (
  input: GetCapacityTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/outposts/{OutpostIdentifier}/capacity/{CapacityTaskId}");
  b.p("CapacityTaskId", () => input.CapacityTaskId!, "{CapacityTaskId}", false);
  b.p("OutpostIdentifier", () => input.OutpostIdentifier!, "{OutpostIdentifier}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetCatalogItemCommand
 */
export const se_GetCatalogItemCommand = async (
  input: GetCatalogItemCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/catalog/item/{CatalogItemId}");
  b.p("CatalogItemId", () => input.CatalogItemId!, "{CatalogItemId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetConnectionCommand
 */
export const se_GetConnectionCommand = async (
  input: GetConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/connections/{ConnectionId}");
  b.p("ConnectionId", () => input.ConnectionId!, "{ConnectionId}", false);
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
  b.bp("/orders/{OrderId}");
  b.p("OrderId", () => input.OrderId!, "{OrderId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetOutpostCommand
 */
export const se_GetOutpostCommand = async (
  input: GetOutpostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/outposts/{OutpostId}");
  b.p("OutpostId", () => input.OutpostId!, "{OutpostId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetOutpostInstanceTypesCommand
 */
export const se_GetOutpostInstanceTypesCommand = async (
  input: GetOutpostInstanceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/outposts/{OutpostId}/instanceTypes");
  b.p("OutpostId", () => input.OutpostId!, "{OutpostId}", false);
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetOutpostSupportedInstanceTypesCommand
 */
export const se_GetOutpostSupportedInstanceTypesCommand = async (
  input: GetOutpostSupportedInstanceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/outposts/{OutpostIdentifier}/supportedInstanceTypes");
  b.p("OutpostIdentifier", () => input.OutpostIdentifier!, "{OutpostIdentifier}", false);
  const query: any = map({
    [_OI]: [, input[_OI]!],
    [_AI]: [, input[_AI]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSiteCommand
 */
export const se_GetSiteCommand = async (
  input: GetSiteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sites/{SiteId}");
  b.p("SiteId", () => input.SiteId!, "{SiteId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSiteAddressCommand
 */
export const se_GetSiteAddressCommand = async (
  input: GetSiteAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sites/{SiteId}/address");
  b.p("SiteId", () => input.SiteId!, "{SiteId}", false);
  const query: any = map({
    [_AT]: [, __expectNonNull(input[_AT]!, `AddressType`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssetInstancesCommand
 */
export const se_ListAssetInstancesCommand = async (
  input: ListAssetInstancesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/outposts/{OutpostIdentifier}/assetInstances");
  b.p("OutpostIdentifier", () => input.OutpostIdentifier!, "{OutpostIdentifier}", false);
  const query: any = map({
    [_AIF]: [() => input.AssetIdFilter !== void 0, () => input[_AIF]! || []],
    [_ITF]: [() => input.InstanceTypeFilter !== void 0, () => input[_ITF]! || []],
    [_AIFc]: [() => input.AccountIdFilter !== void 0, () => input[_AIFc]! || []],
    [_ASF]: [() => input.AwsServiceFilter !== void 0, () => input[_ASF]! || []],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListAssetsCommand
 */
export const se_ListAssetsCommand = async (
  input: ListAssetsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/outposts/{OutpostIdentifier}/assets");
  b.p("OutpostIdentifier", () => input.OutpostIdentifier!, "{OutpostIdentifier}", false);
  const query: any = map({
    [_HIF]: [() => input.HostIdFilter !== void 0, () => input[_HIF]! || []],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
    [_SF]: [() => input.StatusFilter !== void 0, () => input[_SF]! || []],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBlockingInstancesForCapacityTaskCommand
 */
export const se_ListBlockingInstancesForCapacityTaskCommand = async (
  input: ListBlockingInstancesForCapacityTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/outposts/{OutpostIdentifier}/capacity/{CapacityTaskId}/blockingInstances");
  b.p("OutpostIdentifier", () => input.OutpostIdentifier!, "{OutpostIdentifier}", false);
  b.p("CapacityTaskId", () => input.CapacityTaskId!, "{CapacityTaskId}", false);
  const query: any = map({
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCapacityTasksCommand
 */
export const se_ListCapacityTasksCommand = async (
  input: ListCapacityTasksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/capacity/tasks");
  const query: any = map({
    [_OIF]: [, input[_OIF]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
    [_CTSF]: [() => input.CapacityTaskStatusFilter !== void 0, () => input[_CTSF]! || []],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCatalogItemsCommand
 */
export const se_ListCatalogItemsCommand = async (
  input: ListCatalogItemsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/catalog/items");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_ICF]: [() => input.ItemClassFilter !== void 0, () => input[_ICF]! || []],
    [_SSF]: [() => input.SupportedStorageFilter !== void 0, () => input[_SSF]! || []],
    [_ECFF]: [() => input.EC2FamilyFilter !== void 0, () => input[_ECFF]! || []],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
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
  const headers: any = {};
  b.bp("/list-orders");
  const query: any = map({
    [_OIF]: [, input[_OIF]!],
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListOutpostsCommand
 */
export const se_ListOutpostsCommand = async (
  input: ListOutpostsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/outposts");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_LCSF]: [() => input.LifeCycleStatusFilter !== void 0, () => input[_LCSF]! || []],
    [_AZF]: [() => input.AvailabilityZoneFilter !== void 0, () => input[_AZF]! || []],
    [_AZIF]: [() => input.AvailabilityZoneIdFilter !== void 0, () => input[_AZIF]! || []],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListSitesCommand
 */
export const se_ListSitesCommand = async (
  input: ListSitesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/sites");
  const query: any = map({
    [_NT]: [, input[_NT]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_OACCF]: [() => input.OperatingAddressCountryCodeFilter !== void 0, () => input[_OACCF]! || []],
    [_OASORF]: [() => input.OperatingAddressStateOrRegionFilter !== void 0, () => input[_OASORF]! || []],
    [_OACF]: [() => input.OperatingAddressCityFilter !== void 0, () => input[_OACF]! || []],
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
 * serializeAws_restJson1StartCapacityTaskCommand
 */
export const se_StartCapacityTaskCommand = async (
  input: StartCapacityTaskCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/outposts/{OutpostIdentifier}/capacity");
  b.p("OutpostIdentifier", () => input.OutpostIdentifier!, "{OutpostIdentifier}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      AssetId: [],
      DryRun: [],
      InstancePools: (_) => _json(_),
      InstancesToExclude: (_) => _json(_),
      OrderId: [],
      TaskActionOnBlockingInstances: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartConnectionCommand
 */
export const se_StartConnectionCommand = async (
  input: StartConnectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/connections");
  let body: any;
  body = JSON.stringify(
    take(input, {
      AssetId: [],
      ClientPublicKey: [],
      DeviceSerialNumber: [],
      NetworkInterfaceDeviceIndex: [],
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
 * serializeAws_restJson1UpdateOutpostCommand
 */
export const se_UpdateOutpostCommand = async (
  input: UpdateOutpostCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/outposts/{OutpostId}");
  b.p("OutpostId", () => input.OutpostId!, "{OutpostId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
      SupportedHardwareType: [],
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
  b.bp("/sites/{SiteId}");
  b.p("SiteId", () => input.SiteId!, "{SiteId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      Name: [],
      Notes: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSiteAddressCommand
 */
export const se_UpdateSiteAddressCommand = async (
  input: UpdateSiteAddressCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sites/{SiteId}/address");
  b.p("SiteId", () => input.SiteId!, "{SiteId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Address: (_) => _json(_),
      AddressType: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateSiteRackPhysicalPropertiesCommand
 */
export const se_UpdateSiteRackPhysicalPropertiesCommand = async (
  input: UpdateSiteRackPhysicalPropertiesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/sites/{SiteId}/rackPhysicalProperties");
  b.p("SiteId", () => input.SiteId!, "{SiteId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      FiberOpticCableType: [],
      MaximumSupportedWeightLbs: [],
      OpticalStandard: [],
      PowerConnector: [],
      PowerDrawKva: [],
      PowerFeedDrop: [],
      PowerPhase: [],
      UplinkCount: [],
      UplinkGbps: [],
    })
  );
  b.m("PATCH").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1CancelCapacityTaskCommand
 */
export const de_CancelCapacityTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelCapacityTaskCommandOutput> => {
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
 * deserializeAws_restJson1CancelOrderCommand
 */
export const de_CancelOrderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelOrderCommandOutput> => {
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
 * deserializeAws_restJson1CreateOrderCommand
 */
export const de_CreateOrderCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOrderCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Order: (_) => de_Order(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateOutpostCommand
 */
export const de_CreateOutpostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateOutpostCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Outpost: _json,
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
    Site: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteOutpostCommand
 */
export const de_DeleteOutpostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteOutpostCommandOutput> => {
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
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GetCapacityTaskCommand
 */
export const de_GetCapacityTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCapacityTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AssetId: __expectString,
    CapacityTaskId: __expectString,
    CapacityTaskStatus: __expectString,
    CompletionDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DryRun: __expectBoolean,
    Failed: _json,
    InstancesToExclude: _json,
    LastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OrderId: __expectString,
    OutpostId: __expectString,
    RequestedInstancePools: _json,
    TaskActionOnBlockingInstances: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetCatalogItemCommand
 */
export const de_GetCatalogItemCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetCatalogItemCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CatalogItem: (_) => de_CatalogItem(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetConnectionCommand
 */
export const de_GetConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectionDetails: _json,
    ConnectionId: __expectString,
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
    Order: (_) => de_Order(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetOutpostCommand
 */
export const de_GetOutpostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Outpost: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetOutpostInstanceTypesCommand
 */
export const de_GetOutpostInstanceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostInstanceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InstanceTypes: _json,
    NextToken: __expectString,
    OutpostArn: __expectString,
    OutpostId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetOutpostSupportedInstanceTypesCommand
 */
export const de_GetOutpostSupportedInstanceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetOutpostSupportedInstanceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InstanceTypes: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSiteCommand
 */
export const de_GetSiteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSiteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Site: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSiteAddressCommand
 */
export const de_GetSiteAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSiteAddressCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Address: _json,
    AddressType: __expectString,
    SiteId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssetInstancesCommand
 */
export const de_ListAssetInstancesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetInstancesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AssetInstances: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListAssetsCommand
 */
export const de_ListAssetsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListAssetsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Assets: (_) => de_AssetListDefinition(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBlockingInstancesForCapacityTaskCommand
 */
export const de_ListBlockingInstancesForCapacityTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBlockingInstancesForCapacityTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BlockingInstances: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCapacityTasksCommand
 */
export const de_ListCapacityTasksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCapacityTasksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CapacityTasks: (_) => de_CapacityTaskList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCatalogItemsCommand
 */
export const de_ListCatalogItemsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCatalogItemsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CatalogItems: (_) => de_CatalogItemListDefinition(_, context),
    NextToken: __expectString,
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
    NextToken: __expectString,
    Orders: (_) => de_OrderSummaryListDefinition(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListOutpostsCommand
 */
export const de_ListOutpostsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListOutpostsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Outposts: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListSitesCommand
 */
export const de_ListSitesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListSitesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Sites: _json,
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
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartCapacityTaskCommand
 */
export const de_StartCapacityTaskCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCapacityTaskCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AssetId: __expectString,
    CapacityTaskId: __expectString,
    CapacityTaskStatus: __expectString,
    CompletionDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DryRun: __expectBoolean,
    Failed: _json,
    InstancesToExclude: _json,
    LastModifiedDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OrderId: __expectString,
    OutpostId: __expectString,
    RequestedInstancePools: _json,
    TaskActionOnBlockingInstances: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartConnectionCommand
 */
export const de_StartConnectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartConnectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ConnectionId: __expectString,
    UnderlayIpAddress: __expectString,
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
 * deserializeAws_restJson1UpdateOutpostCommand
 */
export const de_UpdateOutpostCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateOutpostCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Outpost: _json,
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
    Site: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSiteAddressCommand
 */
export const de_UpdateSiteAddressCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteAddressCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Address: _json,
    AddressType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateSiteRackPhysicalPropertiesCommand
 */
export const de_UpdateSiteRackPhysicalPropertiesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateSiteRackPhysicalPropertiesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Site: _json,
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
    case "com.amazonaws.outposts#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.outposts#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InternalServerException":
    case "com.amazonaws.outposts#InternalServerException":
      throw await de_InternalServerExceptionRes(parsedOutput, context);
    case "NotFoundException":
    case "com.amazonaws.outposts#NotFoundException":
      throw await de_NotFoundExceptionRes(parsedOutput, context);
    case "ValidationException":
    case "com.amazonaws.outposts#ValidationException":
      throw await de_ValidationExceptionRes(parsedOutput, context);
    case "ServiceQuotaExceededException":
    case "com.amazonaws.outposts#ServiceQuotaExceededException":
      throw await de_ServiceQuotaExceededExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1InternalServerExceptionRes
 */
const de_InternalServerExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerException> => {
  const contents: any = map({});
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
 * deserializeAws_restJson1NotFoundExceptionRes
 */
const de_NotFoundExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<NotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new NotFoundException({
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceQuotaExceededException({
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
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ValidationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AccountIdList omitted.

// se_Address omitted.

// se_AWSServiceNameList omitted.

// se_InstanceIdList omitted.

// se_InstancesToExclude omitted.

// se_InstanceTypeCapacity omitted.

// se_LineItemRequest omitted.

// se_LineItemRequestListDefinition omitted.

// se_RackPhysicalProperties omitted.

// se_RequestedInstancePools omitted.

// se_TagMap omitted.

// de_AccountIdList omitted.

// de_Address omitted.

/**
 * deserializeAws_restJson1AssetInfo
 */
const de_AssetInfo = (output: any, context: __SerdeContext): AssetInfo => {
  return take(output, {
    AssetId: __expectString,
    AssetLocation: (_: any) => de_AssetLocation(_, context),
    AssetType: __expectString,
    ComputeAttributes: _json,
    RackId: __expectString,
  }) as any;
};

// de_AssetInstance omitted.

// de_AssetInstanceCapacityList omitted.

// de_AssetInstanceList omitted.

// de_AssetInstanceTypeCapacity omitted.

/**
 * deserializeAws_restJson1AssetListDefinition
 */
const de_AssetListDefinition = (output: any, context: __SerdeContext): AssetInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_AssetInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1AssetLocation
 */
const de_AssetLocation = (output: any, context: __SerdeContext): AssetLocation => {
  return take(output, {
    RackElevation: __limitedParseFloat32,
  }) as any;
};

// de_AWSServiceNameList omitted.

// de_BlockingInstance omitted.

// de_BlockingInstancesList omitted.

// de_CapacityTaskFailure omitted.

/**
 * deserializeAws_restJson1CapacityTaskList
 */
const de_CapacityTaskList = (output: any, context: __SerdeContext): CapacityTaskSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CapacityTaskSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CapacityTaskSummary
 */
const de_CapacityTaskSummary = (output: any, context: __SerdeContext): CapacityTaskSummary => {
  return take(output, {
    AssetId: __expectString,
    CapacityTaskId: __expectString,
    CapacityTaskStatus: __expectString,
    CompletionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastModifiedDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OrderId: __expectString,
    OutpostId: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CatalogItem
 */
const de_CatalogItem = (output: any, context: __SerdeContext): CatalogItem => {
  return take(output, {
    CatalogItemId: __expectString,
    EC2Capacities: _json,
    ItemStatus: __expectString,
    PowerKva: __limitedParseFloat32,
    SupportedStorage: _json,
    SupportedUplinkGbps: _json,
    WeightLbs: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1CatalogItemListDefinition
 */
const de_CatalogItemListDefinition = (output: any, context: __SerdeContext): CatalogItem[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CatalogItem(entry, context);
    });
  return retVal;
};

// de_CIDRList omitted.

// de_ComputeAttributes omitted.

// de_ConnectionDetails omitted.

// de_EC2Capacity omitted.

// de_EC2CapacityListDefinition omitted.

// de_InstanceFamilies omitted.

// de_InstanceIdList omitted.

// de_InstancesToExclude omitted.

// de_InstanceTypeCapacity omitted.

// de_InstanceTypeItem omitted.

// de_InstanceTypeListDefinition omitted.

// de_LineItem omitted.

// de_LineItemAssetInformation omitted.

// de_LineItemAssetInformationList omitted.

// de_LineItemListDefinition omitted.

// de_LineItemStatusCounts omitted.

// de_MacAddressList omitted.

/**
 * deserializeAws_restJson1Order
 */
const de_Order = (output: any, context: __SerdeContext): Order => {
  return take(output, {
    LineItems: _json,
    OrderFulfilledDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OrderId: __expectString,
    OrderSubmissionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OrderType: __expectString,
    OutpostId: __expectString,
    PaymentOption: __expectString,
    PaymentTerm: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1OrderSummary
 */
const de_OrderSummary = (output: any, context: __SerdeContext): OrderSummary => {
  return take(output, {
    LineItemCountsByStatus: _json,
    OrderFulfilledDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OrderId: __expectString,
    OrderSubmissionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    OrderType: __expectString,
    OutpostId: __expectString,
    Status: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1OrderSummaryListDefinition
 */
const de_OrderSummaryListDefinition = (output: any, context: __SerdeContext): OrderSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_OrderSummary(entry, context);
    });
  return retVal;
};

// de_Outpost omitted.

// de_outpostListDefinition omitted.

// de_RackPhysicalProperties omitted.

// de_RequestedInstancePools omitted.

// de_ShipmentInformation omitted.

// de_Site omitted.

// de_siteListDefinition omitted.

// de_SupportedStorageList omitted.

// de_SupportedUplinkGbpsListDefinition omitted.

// de_TagMap omitted.

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

const _AI = "AssetId";
const _AIF = "AssetIdFilter";
const _AIFc = "AccountIdFilter";
const _ASF = "AwsServiceFilter";
const _AT = "AddressType";
const _AZF = "AvailabilityZoneFilter";
const _AZIF = "AvailabilityZoneIdFilter";
const _CTSF = "CapacityTaskStatusFilter";
const _ECFF = "EC2FamilyFilter";
const _HIF = "HostIdFilter";
const _ICF = "ItemClassFilter";
const _ITF = "InstanceTypeFilter";
const _LCSF = "LifeCycleStatusFilter";
const _MR = "MaxResults";
const _NT = "NextToken";
const _OACCF = "OperatingAddressCountryCodeFilter";
const _OACF = "OperatingAddressCityFilter";
const _OASORF = "OperatingAddressStateOrRegionFilter";
const _OI = "OrderId";
const _OIF = "OutpostIdentifierFilter";
const _SF = "StatusFilter";
const _SSF = "SupportedStorageFilter";
const _TK = "TagKeys";
const _tK = "tagKeys";
