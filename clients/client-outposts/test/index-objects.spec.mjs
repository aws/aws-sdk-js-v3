import {
  AccessDeniedException,
  AccessDeniedException$,
  Address$,
  AddressType,
  AssetInfo$,
  AssetInstance$,
  AssetInstanceTypeCapacity$,
  AssetLocation$,
  AssetState,
  AssetType,
  AWSServiceName,
  BlockingInstance$,
  BlockingResourceType,
  CancelCapacityTask$,
  CancelCapacityTaskCommand,
  CancelCapacityTaskInput$,
  CancelCapacityTaskOutput$,
  CancelOrder$,
  CancelOrderCommand,
  CancelOrderInput$,
  CancelOrderOutput$,
  CapacityTaskFailure$,
  CapacityTaskFailureType,
  CapacityTaskStatus,
  CapacityTaskSummary$,
  CatalogItem$,
  CatalogItemClass,
  CatalogItemStatus,
  ComputeAssetState,
  ComputeAttributes$,
  ConflictException,
  ConflictException$,
  ConnectionDetails$,
  CreateOrder$,
  CreateOrderCommand,
  CreateOrderInput$,
  CreateOrderOutput$,
  CreateOutpost$,
  CreateOutpostCommand,
  CreateOutpostInput$,
  CreateOutpostOutput$,
  CreateSite$,
  CreateSiteCommand,
  CreateSiteInput$,
  CreateSiteOutput$,
  DecommissionRequestStatus,
  DeleteOutpost$,
  DeleteOutpostCommand,
  DeleteOutpostInput$,
  DeleteOutpostOutput$,
  DeleteSite$,
  DeleteSiteCommand,
  DeleteSiteInput$,
  DeleteSiteOutput$,
  EC2Capacity$,
  FiberOpticCableType,
  GetCapacityTask$,
  GetCapacityTaskCommand,
  GetCapacityTaskInput$,
  GetCapacityTaskOutput$,
  GetCatalogItem$,
  GetCatalogItemCommand,
  GetCatalogItemInput$,
  GetCatalogItemOutput$,
  GetConnection$,
  GetConnectionCommand,
  GetConnectionRequest$,
  GetConnectionResponse$,
  GetOrder$,
  GetOrderCommand,
  GetOrderInput$,
  GetOrderOutput$,
  GetOutpost$,
  GetOutpostBillingInformation$,
  GetOutpostBillingInformationCommand,
  GetOutpostBillingInformationInput$,
  GetOutpostBillingInformationOutput$,
  GetOutpostCommand,
  GetOutpostInput$,
  GetOutpostInstanceTypes$,
  GetOutpostInstanceTypesCommand,
  GetOutpostInstanceTypesInput$,
  GetOutpostInstanceTypesOutput$,
  GetOutpostOutput$,
  GetOutpostSupportedInstanceTypes$,
  GetOutpostSupportedInstanceTypesCommand,
  GetOutpostSupportedInstanceTypesInput$,
  GetOutpostSupportedInstanceTypesOutput$,
  GetSite$,
  GetSiteAddress$,
  GetSiteAddressCommand,
  GetSiteAddressInput$,
  GetSiteAddressOutput$,
  GetSiteCommand,
  GetSiteInput$,
  GetSiteOutput$,
  InstancesToExclude$,
  InstanceTypeCapacity$,
  InstanceTypeItem$,
  InternalServerException,
  InternalServerException$,
  LineItem$,
  LineItemAssetInformation$,
  LineItemRequest$,
  LineItemStatus,
  ListAssetInstances$,
  ListAssetInstancesCommand,
  ListAssetInstancesInput$,
  ListAssetInstancesOutput$,
  ListAssets$,
  ListAssetsCommand,
  ListAssetsInput$,
  ListAssetsOutput$,
  ListBlockingInstancesForCapacityTask$,
  ListBlockingInstancesForCapacityTaskCommand,
  ListBlockingInstancesForCapacityTaskInput$,
  ListBlockingInstancesForCapacityTaskOutput$,
  ListCapacityTasks$,
  ListCapacityTasksCommand,
  ListCapacityTasksInput$,
  ListCapacityTasksOutput$,
  ListCatalogItems$,
  ListCatalogItemsCommand,
  ListCatalogItemsInput$,
  ListCatalogItemsOutput$,
  ListOrders$,
  ListOrdersCommand,
  ListOrdersInput$,
  ListOrdersOutput$,
  ListOutposts$,
  ListOutpostsCommand,
  ListOutpostsInput$,
  ListOutpostsOutput$,
  ListSites$,
  ListSitesCommand,
  ListSitesInput$,
  ListSitesOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MaximumSupportedWeightLbs,
  NotFoundException,
  NotFoundException$,
  OpticalStandard,
  Order$,
  OrderStatus,
  OrderSummary$,
  OrderType,
  Outpost$,
  Outposts,
  OutpostsClient,
  OutpostsServiceException,
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
  PaymentOption,
  PaymentTerm,
  PowerConnector,
  PowerDrawKva,
  PowerFeedDrop,
  PowerPhase,
  RackPhysicalProperties$,
  ResourceType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ShipmentCarrier,
  ShipmentInformation$,
  Site$,
  StartCapacityTask$,
  StartCapacityTaskCommand,
  StartCapacityTaskInput$,
  StartCapacityTaskOutput$,
  StartConnection$,
  StartConnectionCommand,
  StartConnectionRequest$,
  StartConnectionResponse$,
  StartOutpostDecommission$,
  StartOutpostDecommissionCommand,
  StartOutpostDecommissionInput$,
  StartOutpostDecommissionOutput$,
  Subscription$,
  SubscriptionStatus,
  SubscriptionType,
  SupportedHardwareType,
  SupportedStorageEnum,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TaskActionOnBlockingInstances,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateOutpost$,
  UpdateOutpostCommand,
  UpdateOutpostInput$,
  UpdateOutpostOutput$,
  UpdateSite$,
  UpdateSiteAddress$,
  UpdateSiteAddressCommand,
  UpdateSiteAddressInput$,
  UpdateSiteAddressOutput$,
  UpdateSiteCommand,
  UpdateSiteInput$,
  UpdateSiteOutput$,
  UpdateSiteRackPhysicalProperties$,
  UpdateSiteRackPhysicalPropertiesCommand,
  UpdateSiteRackPhysicalPropertiesInput$,
  UpdateSiteRackPhysicalPropertiesOutput$,
  UplinkCount,
  UplinkGbps,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof OutpostsClient === "function");
assert(typeof Outposts === "function");
// commands
assert(typeof CancelCapacityTaskCommand === "function");
assert(typeof CancelCapacityTask$ === "object");
assert(typeof CancelOrderCommand === "function");
assert(typeof CancelOrder$ === "object");
assert(typeof CreateOrderCommand === "function");
assert(typeof CreateOrder$ === "object");
assert(typeof CreateOutpostCommand === "function");
assert(typeof CreateOutpost$ === "object");
assert(typeof CreateSiteCommand === "function");
assert(typeof CreateSite$ === "object");
assert(typeof DeleteOutpostCommand === "function");
assert(typeof DeleteOutpost$ === "object");
assert(typeof DeleteSiteCommand === "function");
assert(typeof DeleteSite$ === "object");
assert(typeof GetCapacityTaskCommand === "function");
assert(typeof GetCapacityTask$ === "object");
assert(typeof GetCatalogItemCommand === "function");
assert(typeof GetCatalogItem$ === "object");
assert(typeof GetConnectionCommand === "function");
assert(typeof GetConnection$ === "object");
assert(typeof GetOrderCommand === "function");
assert(typeof GetOrder$ === "object");
assert(typeof GetOutpostCommand === "function");
assert(typeof GetOutpost$ === "object");
assert(typeof GetOutpostBillingInformationCommand === "function");
assert(typeof GetOutpostBillingInformation$ === "object");
assert(typeof GetOutpostInstanceTypesCommand === "function");
assert(typeof GetOutpostInstanceTypes$ === "object");
assert(typeof GetOutpostSupportedInstanceTypesCommand === "function");
assert(typeof GetOutpostSupportedInstanceTypes$ === "object");
assert(typeof GetSiteCommand === "function");
assert(typeof GetSite$ === "object");
assert(typeof GetSiteAddressCommand === "function");
assert(typeof GetSiteAddress$ === "object");
assert(typeof ListAssetInstancesCommand === "function");
assert(typeof ListAssetInstances$ === "object");
assert(typeof ListAssetsCommand === "function");
assert(typeof ListAssets$ === "object");
assert(typeof ListBlockingInstancesForCapacityTaskCommand === "function");
assert(typeof ListBlockingInstancesForCapacityTask$ === "object");
assert(typeof ListCapacityTasksCommand === "function");
assert(typeof ListCapacityTasks$ === "object");
assert(typeof ListCatalogItemsCommand === "function");
assert(typeof ListCatalogItems$ === "object");
assert(typeof ListOrdersCommand === "function");
assert(typeof ListOrders$ === "object");
assert(typeof ListOutpostsCommand === "function");
assert(typeof ListOutposts$ === "object");
assert(typeof ListSitesCommand === "function");
assert(typeof ListSites$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof StartCapacityTaskCommand === "function");
assert(typeof StartCapacityTask$ === "object");
assert(typeof StartConnectionCommand === "function");
assert(typeof StartConnection$ === "object");
assert(typeof StartOutpostDecommissionCommand === "function");
assert(typeof StartOutpostDecommission$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateOutpostCommand === "function");
assert(typeof UpdateOutpost$ === "object");
assert(typeof UpdateSiteCommand === "function");
assert(typeof UpdateSite$ === "object");
assert(typeof UpdateSiteAddressCommand === "function");
assert(typeof UpdateSiteAddress$ === "object");
assert(typeof UpdateSiteRackPhysicalPropertiesCommand === "function");
assert(typeof UpdateSiteRackPhysicalProperties$ === "object");
// structural schemas
assert(typeof Address$ === "object");
assert(typeof AssetInfo$ === "object");
assert(typeof AssetInstance$ === "object");
assert(typeof AssetInstanceTypeCapacity$ === "object");
assert(typeof AssetLocation$ === "object");
assert(typeof BlockingInstance$ === "object");
assert(typeof CancelCapacityTaskInput$ === "object");
assert(typeof CancelCapacityTaskOutput$ === "object");
assert(typeof CancelOrderInput$ === "object");
assert(typeof CancelOrderOutput$ === "object");
assert(typeof CapacityTaskFailure$ === "object");
assert(typeof CapacityTaskSummary$ === "object");
assert(typeof CatalogItem$ === "object");
assert(typeof ComputeAttributes$ === "object");
assert(typeof ConnectionDetails$ === "object");
assert(typeof CreateOrderInput$ === "object");
assert(typeof CreateOrderOutput$ === "object");
assert(typeof CreateOutpostInput$ === "object");
assert(typeof CreateOutpostOutput$ === "object");
assert(typeof CreateSiteInput$ === "object");
assert(typeof CreateSiteOutput$ === "object");
assert(typeof DeleteOutpostInput$ === "object");
assert(typeof DeleteOutpostOutput$ === "object");
assert(typeof DeleteSiteInput$ === "object");
assert(typeof DeleteSiteOutput$ === "object");
assert(typeof EC2Capacity$ === "object");
assert(typeof GetCapacityTaskInput$ === "object");
assert(typeof GetCapacityTaskOutput$ === "object");
assert(typeof GetCatalogItemInput$ === "object");
assert(typeof GetCatalogItemOutput$ === "object");
assert(typeof GetConnectionRequest$ === "object");
assert(typeof GetConnectionResponse$ === "object");
assert(typeof GetOrderInput$ === "object");
assert(typeof GetOrderOutput$ === "object");
assert(typeof GetOutpostBillingInformationInput$ === "object");
assert(typeof GetOutpostBillingInformationOutput$ === "object");
assert(typeof GetOutpostInput$ === "object");
assert(typeof GetOutpostInstanceTypesInput$ === "object");
assert(typeof GetOutpostInstanceTypesOutput$ === "object");
assert(typeof GetOutpostOutput$ === "object");
assert(typeof GetOutpostSupportedInstanceTypesInput$ === "object");
assert(typeof GetOutpostSupportedInstanceTypesOutput$ === "object");
assert(typeof GetSiteAddressInput$ === "object");
assert(typeof GetSiteAddressOutput$ === "object");
assert(typeof GetSiteInput$ === "object");
assert(typeof GetSiteOutput$ === "object");
assert(typeof InstancesToExclude$ === "object");
assert(typeof InstanceTypeCapacity$ === "object");
assert(typeof InstanceTypeItem$ === "object");
assert(typeof LineItem$ === "object");
assert(typeof LineItemAssetInformation$ === "object");
assert(typeof LineItemRequest$ === "object");
assert(typeof ListAssetInstancesInput$ === "object");
assert(typeof ListAssetInstancesOutput$ === "object");
assert(typeof ListAssetsInput$ === "object");
assert(typeof ListAssetsOutput$ === "object");
assert(typeof ListBlockingInstancesForCapacityTaskInput$ === "object");
assert(typeof ListBlockingInstancesForCapacityTaskOutput$ === "object");
assert(typeof ListCapacityTasksInput$ === "object");
assert(typeof ListCapacityTasksOutput$ === "object");
assert(typeof ListCatalogItemsInput$ === "object");
assert(typeof ListCatalogItemsOutput$ === "object");
assert(typeof ListOrdersInput$ === "object");
assert(typeof ListOrdersOutput$ === "object");
assert(typeof ListOutpostsInput$ === "object");
assert(typeof ListOutpostsOutput$ === "object");
assert(typeof ListSitesInput$ === "object");
assert(typeof ListSitesOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof Order$ === "object");
assert(typeof OrderSummary$ === "object");
assert(typeof Outpost$ === "object");
assert(typeof RackPhysicalProperties$ === "object");
assert(typeof ShipmentInformation$ === "object");
assert(typeof Site$ === "object");
assert(typeof StartCapacityTaskInput$ === "object");
assert(typeof StartCapacityTaskOutput$ === "object");
assert(typeof StartConnectionRequest$ === "object");
assert(typeof StartConnectionResponse$ === "object");
assert(typeof StartOutpostDecommissionInput$ === "object");
assert(typeof StartOutpostDecommissionOutput$ === "object");
assert(typeof Subscription$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateOutpostInput$ === "object");
assert(typeof UpdateOutpostOutput$ === "object");
assert(typeof UpdateSiteAddressInput$ === "object");
assert(typeof UpdateSiteAddressOutput$ === "object");
assert(typeof UpdateSiteInput$ === "object");
assert(typeof UpdateSiteOutput$ === "object");
assert(typeof UpdateSiteRackPhysicalPropertiesInput$ === "object");
assert(typeof UpdateSiteRackPhysicalPropertiesOutput$ === "object");
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
assert(typeof ResourceType === "object");
assert(typeof ShipmentCarrier === "object");
assert(typeof SubscriptionStatus === "object");
assert(typeof SubscriptionType === "object");
assert(typeof SupportedHardwareType === "object");
assert(typeof SupportedStorageEnum === "object");
assert(typeof TaskActionOnBlockingInstances === "object");
assert(typeof UplinkCount === "object");
assert(typeof UplinkGbps === "object");
// errors
assert(AccessDeniedException.prototype instanceof OutpostsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof OutpostsServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof OutpostsServiceException);
assert(typeof InternalServerException$ === "object");
assert(NotFoundException.prototype instanceof OutpostsServiceException);
assert(typeof NotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof OutpostsServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ValidationException.prototype instanceof OutpostsServiceException);
assert(typeof ValidationException$ === "object");
assert(OutpostsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetOutpostBillingInformation === "function");
assert(typeof paginateGetOutpostInstanceTypes === "function");
assert(typeof paginateGetOutpostSupportedInstanceTypes === "function");
assert(typeof paginateListAssetInstances === "function");
assert(typeof paginateListAssets === "function");
assert(typeof paginateListBlockingInstancesForCapacityTask === "function");
assert(typeof paginateListCapacityTasks === "function");
assert(typeof paginateListCatalogItems === "function");
assert(typeof paginateListOrders === "function");
assert(typeof paginateListOutposts === "function");
assert(typeof paginateListSites === "function");
console.log(`Outposts index test passed.`);
