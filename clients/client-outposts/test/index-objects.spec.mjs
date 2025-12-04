import {
  AWSServiceName,
  AddressType,
  AssetState,
  AssetType,
  BlockingResourceType,
  CancelCapacityTaskCommand,
  CancelOrderCommand,
  CapacityTaskFailureType,
  CapacityTaskStatus,
  CatalogItemClass,
  CatalogItemStatus,
  ComputeAssetState,
  CreateOrderCommand,
  CreateOutpostCommand,
  CreateSiteCommand,
  DecommissionRequestStatus,
  DeleteOutpostCommand,
  DeleteSiteCommand,
  FiberOpticCableType,
  GetCapacityTaskCommand,
  GetCatalogItemCommand,
  GetConnectionCommand,
  GetOrderCommand,
  GetOutpostBillingInformationCommand,
  GetOutpostCommand,
  GetOutpostInstanceTypesCommand,
  GetOutpostSupportedInstanceTypesCommand,
  GetSiteAddressCommand,
  GetSiteCommand,
  LineItemStatus,
  ListAssetInstancesCommand,
  ListAssetsCommand,
  ListBlockingInstancesForCapacityTaskCommand,
  ListCapacityTasksCommand,
  ListCatalogItemsCommand,
  ListOrdersCommand,
  ListOutpostsCommand,
  ListSitesCommand,
  ListTagsForResourceCommand,
  MaximumSupportedWeightLbs,
  OpticalStandard,
  OrderStatus,
  OrderType,
  Outposts,
  OutpostsClient,
  OutpostsServiceException,
  PaymentOption,
  PaymentTerm,
  PowerConnector,
  PowerDrawKva,
  PowerFeedDrop,
  PowerPhase,
  ShipmentCarrier,
  StartCapacityTaskCommand,
  StartConnectionCommand,
  StartOutpostDecommissionCommand,
  SubscriptionStatus,
  SubscriptionType,
  SupportedHardwareType,
  SupportedStorageEnum,
  TagResourceCommand,
  TaskActionOnBlockingInstances,
  UntagResourceCommand,
  UpdateOutpostCommand,
  UpdateSiteAddressCommand,
  UpdateSiteCommand,
  UpdateSiteRackPhysicalPropertiesCommand,
  UplinkCount,
  UplinkGbps,
  paginateGetOutpostBillingInformation,
  paginateGetOutpostInstanceTypes,
  paginateGetOutpostSupportedInstanceTypes,
  paginateListAssetInstances,
  paginateListAssets,
  paginateListBlockingInstancesForCapacityTask,
  paginateListCapacityTasks,
  paginateListCatalogItems,
  paginateListOrders,
  paginateListOutposts,
  paginateListSites,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof OutpostsClient === "function")
assert(typeof Outposts === "function")
// commands
assert(typeof CancelCapacityTaskCommand === "function")
assert(typeof CancelOrderCommand === "function")
assert(typeof CreateOrderCommand === "function")
assert(typeof CreateOutpostCommand === "function")
assert(typeof CreateSiteCommand === "function")
assert(typeof DeleteOutpostCommand === "function")
assert(typeof DeleteSiteCommand === "function")
assert(typeof GetCapacityTaskCommand === "function")
assert(typeof GetCatalogItemCommand === "function")
assert(typeof GetConnectionCommand === "function")
assert(typeof GetOrderCommand === "function")
assert(typeof GetOutpostCommand === "function")
assert(typeof GetOutpostBillingInformationCommand === "function")
assert(typeof GetOutpostInstanceTypesCommand === "function")
assert(typeof GetOutpostSupportedInstanceTypesCommand === "function")
assert(typeof GetSiteCommand === "function")
assert(typeof GetSiteAddressCommand === "function")
assert(typeof ListAssetInstancesCommand === "function")
assert(typeof ListAssetsCommand === "function")
assert(typeof ListBlockingInstancesForCapacityTaskCommand === "function")
assert(typeof ListCapacityTasksCommand === "function")
assert(typeof ListCatalogItemsCommand === "function")
assert(typeof ListOrdersCommand === "function")
assert(typeof ListOutpostsCommand === "function")
assert(typeof ListSitesCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof StartCapacityTaskCommand === "function")
assert(typeof StartConnectionCommand === "function")
assert(typeof StartOutpostDecommissionCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateOutpostCommand === "function")
assert(typeof UpdateSiteCommand === "function")
assert(typeof UpdateSiteAddressCommand === "function")
assert(typeof UpdateSiteRackPhysicalPropertiesCommand === "function")
// enums
assert(typeof AddressType === "object");
assert(typeof AssetState === "object");
assert(typeof AssetType === "object");
assert(typeof AWSServiceName === "object");
assert(typeof BlockingResourceType === "object");
assert(typeof CapacityTaskFailureType === "object");
assert(typeof CapacityTaskStatus === "object");
assert(typeof CatalogItemClass === "object");
assert(typeof CatalogItemStatus === "object");
assert(typeof ComputeAssetState === "object");
assert(typeof DecommissionRequestStatus === "object");
assert(typeof FiberOpticCableType === "object");
assert(typeof LineItemStatus === "object");
assert(typeof MaximumSupportedWeightLbs === "object");
assert(typeof OpticalStandard === "object");
assert(typeof OrderStatus === "object");
assert(typeof OrderType === "object");
assert(typeof PaymentOption === "object");
assert(typeof PaymentTerm === "object");
assert(typeof PowerConnector === "object");
assert(typeof PowerDrawKva === "object");
assert(typeof PowerFeedDrop === "object");
assert(typeof PowerPhase === "object");
assert(typeof ShipmentCarrier === "object");
assert(typeof SubscriptionStatus === "object");
assert(typeof SubscriptionType === "object");
assert(typeof SupportedHardwareType === "object");
assert(typeof SupportedStorageEnum === "object");
assert(typeof TaskActionOnBlockingInstances === "object");
assert(typeof UplinkCount === "object");
assert(typeof UplinkGbps === "object");
// errors
assert(OutpostsServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateGetOutpostBillingInformation === "function")
assert(typeof paginateGetOutpostInstanceTypes === "function")
assert(typeof paginateGetOutpostSupportedInstanceTypes === "function")
assert(typeof paginateListAssetInstances === "function")
assert(typeof paginateListAssets === "function")
assert(typeof paginateListBlockingInstancesForCapacityTask === "function")
assert(typeof paginateListCapacityTasks === "function")
assert(typeof paginateListCatalogItems === "function")
assert(typeof paginateListOrders === "function")
assert(typeof paginateListOutposts === "function")
assert(typeof paginateListSites === "function")
console.log(`Outposts index test passed.`);
