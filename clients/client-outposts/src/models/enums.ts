// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AddressType = {
  OPERATING_ADDRESS: "OPERATING_ADDRESS",
  SHIPPING_ADDRESS: "SHIPPING_ADDRESS",
} as const;
/**
 * @public
 */
export type AddressType = (typeof AddressType)[keyof typeof AddressType];

/**
 * @public
 * @enum
 */
export const AssetType = {
  COMPUTE: "COMPUTE",
} as const;
/**
 * @public
 */
export type AssetType = (typeof AssetType)[keyof typeof AssetType];

/**
 * @public
 * @enum
 */
export const ComputeAssetState = {
  ACTIVE: "ACTIVE",
  ISOLATED: "ISOLATED",
  RETIRING: "RETIRING",
} as const;
/**
 * @public
 */
export type ComputeAssetState = (typeof ComputeAssetState)[keyof typeof ComputeAssetState];

/**
 * @public
 * @enum
 */
export const AWSServiceName = {
  AWS: "AWS",
  EC2: "EC2",
  ELASTICACHE: "ELASTICACHE",
  ELB: "ELB",
  RDS: "RDS",
  ROUTE53: "ROUTE53",
} as const;
/**
 * @public
 */
export type AWSServiceName = (typeof AWSServiceName)[keyof typeof AWSServiceName];

/**
 * @public
 * @enum
 */
export const AssetState = {
  ACTIVE: "ACTIVE",
  ISOLATED: "ISOLATED",
  RETIRING: "RETIRING",
} as const;
/**
 * @public
 */
export type AssetState = (typeof AssetState)[keyof typeof AssetState];

/**
 * @public
 * @enum
 */
export const BlockingResourceType = {
  EC2_INSTANCE: "EC2_INSTANCE",
  LGW_ROUTE_TABLE: "LGW_ROUTE_TABLE",
  LGW_ROUTING_DOMAIN: "LGW_ROUTING_DOMAIN",
  LGW_VIRTUAL_INTERFACE_GROUP: "LGW_VIRTUAL_INTERFACE_GROUP",
  OUTPOST_ORDER_CANCELLABLE: "OUTPOST_ORDER_CANCELLABLE",
  OUTPOST_ORDER_INTERVENTION_REQUIRED: "OUTPOST_ORDER_INTERVENTION_REQUIRED",
  OUTPOST_RAM_SHARE: "OUTPOST_RAM_SHARE",
} as const;
/**
 * @public
 */
export type BlockingResourceType = (typeof BlockingResourceType)[keyof typeof BlockingResourceType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ORDER: "ORDER",
  OUTPOST: "OUTPOST",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const CapacityTaskFailureType = {
  BLOCKING_INSTANCES_NOT_EVACUATED: "BLOCKING_INSTANCES_NOT_EVACUATED",
  INTERNAL_SERVER_ERROR: "INTERNAL_SERVER_ERROR",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
  UNEXPECTED_ASSET_STATE: "UNEXPECTED_ASSET_STATE",
  UNSUPPORTED_CAPACITY_CONFIGURATION: "UNSUPPORTED_CAPACITY_CONFIGURATION",
} as const;
/**
 * @public
 */
export type CapacityTaskFailureType = (typeof CapacityTaskFailureType)[keyof typeof CapacityTaskFailureType];

/**
 * @public
 * @enum
 */
export const CapacityTaskStatus = {
  CANCELLATION_IN_PROGRESS: "CANCELLATION_IN_PROGRESS",
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  REQUESTED: "REQUESTED",
  WAITING_FOR_EVACUATION: "WAITING_FOR_EVACUATION",
} as const;
/**
 * @public
 */
export type CapacityTaskStatus = (typeof CapacityTaskStatus)[keyof typeof CapacityTaskStatus];

/**
 * @public
 * @enum
 */
export const CatalogItemStatus = {
  AVAILABLE: "AVAILABLE",
  DISCONTINUED: "DISCONTINUED",
} as const;
/**
 * @public
 */
export type CatalogItemStatus = (typeof CatalogItemStatus)[keyof typeof CatalogItemStatus];

/**
 * @public
 * @enum
 */
export const SupportedStorageEnum = {
  EBS: "EBS",
  S3: "S3",
} as const;
/**
 * @public
 */
export type SupportedStorageEnum = (typeof SupportedStorageEnum)[keyof typeof SupportedStorageEnum];

/**
 * @public
 * @enum
 */
export const CatalogItemClass = {
  RACK: "RACK",
  SERVER: "SERVER",
} as const;
/**
 * @public
 */
export type CatalogItemClass = (typeof CatalogItemClass)[keyof typeof CatalogItemClass];

/**
 * @public
 * @enum
 */
export const PaymentOption = {
  ALL_UPFRONT: "ALL_UPFRONT",
  NO_UPFRONT: "NO_UPFRONT",
  PARTIAL_UPFRONT: "PARTIAL_UPFRONT",
} as const;
/**
 * @public
 */
export type PaymentOption = (typeof PaymentOption)[keyof typeof PaymentOption];

/**
 * @public
 * @enum
 */
export const PaymentTerm = {
  FIVE_YEARS: "FIVE_YEARS",
  ONE_YEAR: "ONE_YEAR",
  THREE_YEARS: "THREE_YEARS",
} as const;
/**
 * @public
 */
export type PaymentTerm = (typeof PaymentTerm)[keyof typeof PaymentTerm];

/**
 * @public
 * @enum
 */
export const ShipmentCarrier = {
  DBS: "DBS",
  DHL: "DHL",
  EXPEDITORS: "EXPEDITORS",
  FEDEX: "FEDEX",
  UPS: "UPS",
} as const;
/**
 * @public
 */
export type ShipmentCarrier = (typeof ShipmentCarrier)[keyof typeof ShipmentCarrier];

/**
 * @public
 * @enum
 */
export const LineItemStatus = {
  BUILDING: "BUILDING",
  CANCELLED: "CANCELLED",
  DELIVERED: "DELIVERED",
  ERROR: "ERROR",
  INSTALLED: "INSTALLED",
  INSTALLING: "INSTALLING",
  PREPARING: "PREPARING",
  REPLACED: "REPLACED",
  SHIPPED: "SHIPPED",
} as const;
/**
 * @public
 */
export type LineItemStatus = (typeof LineItemStatus)[keyof typeof LineItemStatus];

/**
 * @public
 * @enum
 */
export const OrderType = {
  OUTPOST: "OUTPOST",
  REPLACEMENT: "REPLACEMENT",
} as const;
/**
 * @public
 */
export type OrderType = (typeof OrderType)[keyof typeof OrderType];

/**
 * @public
 * @enum
 */
export const OrderStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  DELIVERED: "DELIVERED",
  ERROR: "ERROR",
  FULFILLED: "FULFILLED",
  INSTALLING: "INSTALLING",
  IN_PROGRESS: "IN_PROGRESS",
  PENDING: "PENDING",
  PREPARING: "PREPARING",
  PROCESSING: "PROCESSING",
  RECEIVED: "RECEIVED",
} as const;
/**
 * @public
 */
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];

/**
 * @public
 * @enum
 */
export const SupportedHardwareType = {
  RACK: "RACK",
  SERVER: "SERVER",
} as const;
/**
 * @public
 */
export type SupportedHardwareType = (typeof SupportedHardwareType)[keyof typeof SupportedHardwareType];

/**
 * @public
 * @enum
 */
export const FiberOpticCableType = {
  MULTI_MODE: "MULTI_MODE",
  SINGLE_MODE: "SINGLE_MODE",
} as const;
/**
 * @public
 */
export type FiberOpticCableType = (typeof FiberOpticCableType)[keyof typeof FiberOpticCableType];

/**
 * @public
 * @enum
 */
export const MaximumSupportedWeightLbs = {
  MAX_1400_LBS: "MAX_1400_LBS",
  MAX_1600_LBS: "MAX_1600_LBS",
  MAX_1800_LBS: "MAX_1800_LBS",
  MAX_2000_LBS: "MAX_2000_LBS",
  NO_LIMIT: "NO_LIMIT",
} as const;
/**
 * @public
 */
export type MaximumSupportedWeightLbs = (typeof MaximumSupportedWeightLbs)[keyof typeof MaximumSupportedWeightLbs];

/**
 * @public
 * @enum
 */
export const OpticalStandard = {
  OPTIC_1000BASE_LX: "OPTIC_1000BASE_LX",
  OPTIC_1000BASE_SX: "OPTIC_1000BASE_SX",
  OPTIC_100GBASE_CWDM4: "OPTIC_100GBASE_CWDM4",
  OPTIC_100GBASE_LR4: "OPTIC_100GBASE_LR4",
  OPTIC_100GBASE_SR4: "OPTIC_100GBASE_SR4",
  OPTIC_100G_PSM4_MSA: "OPTIC_100G_PSM4_MSA",
  OPTIC_10GBASE_IR: "OPTIC_10GBASE_IR",
  OPTIC_10GBASE_LR: "OPTIC_10GBASE_LR",
  OPTIC_10GBASE_SR: "OPTIC_10GBASE_SR",
  OPTIC_40GBASE_ESR: "OPTIC_40GBASE_ESR",
  OPTIC_40GBASE_IR4_LR4L: "OPTIC_40GBASE_IR4_LR4L",
  OPTIC_40GBASE_LR4: "OPTIC_40GBASE_LR4",
  OPTIC_40GBASE_SR: "OPTIC_40GBASE_SR",
} as const;
/**
 * @public
 */
export type OpticalStandard = (typeof OpticalStandard)[keyof typeof OpticalStandard];

/**
 * @public
 * @enum
 */
export const PowerConnector = {
  AH530P7W: "AH530P7W",
  AH532P6W: "AH532P6W",
  CS8365C: "CS8365C",
  IEC309: "IEC309",
  L6_30P: "L6_30P",
} as const;
/**
 * @public
 */
export type PowerConnector = (typeof PowerConnector)[keyof typeof PowerConnector];

/**
 * @public
 * @enum
 */
export const PowerDrawKva = {
  POWER_10_KVA: "POWER_10_KVA",
  POWER_15_KVA: "POWER_15_KVA",
  POWER_30_KVA: "POWER_30_KVA",
  POWER_5_KVA: "POWER_5_KVA",
} as const;
/**
 * @public
 */
export type PowerDrawKva = (typeof PowerDrawKva)[keyof typeof PowerDrawKva];

/**
 * @public
 * @enum
 */
export const PowerFeedDrop = {
  ABOVE_RACK: "ABOVE_RACK",
  BELOW_RACK: "BELOW_RACK",
} as const;
/**
 * @public
 */
export type PowerFeedDrop = (typeof PowerFeedDrop)[keyof typeof PowerFeedDrop];

/**
 * @public
 * @enum
 */
export const PowerPhase = {
  SINGLE_PHASE: "SINGLE_PHASE",
  THREE_PHASE: "THREE_PHASE",
} as const;
/**
 * @public
 */
export type PowerPhase = (typeof PowerPhase)[keyof typeof PowerPhase];

/**
 * @public
 * @enum
 */
export const UplinkCount = {
  UPLINK_COUNT_1: "UPLINK_COUNT_1",
  UPLINK_COUNT_12: "UPLINK_COUNT_12",
  UPLINK_COUNT_16: "UPLINK_COUNT_16",
  UPLINK_COUNT_2: "UPLINK_COUNT_2",
  UPLINK_COUNT_3: "UPLINK_COUNT_3",
  UPLINK_COUNT_4: "UPLINK_COUNT_4",
  UPLINK_COUNT_5: "UPLINK_COUNT_5",
  UPLINK_COUNT_6: "UPLINK_COUNT_6",
  UPLINK_COUNT_7: "UPLINK_COUNT_7",
  UPLINK_COUNT_8: "UPLINK_COUNT_8",
} as const;
/**
 * @public
 */
export type UplinkCount = (typeof UplinkCount)[keyof typeof UplinkCount];

/**
 * @public
 * @enum
 */
export const UplinkGbps = {
  UPLINK_100G: "UPLINK_100G",
  UPLINK_10G: "UPLINK_10G",
  UPLINK_1G: "UPLINK_1G",
  UPLINK_40G: "UPLINK_40G",
} as const;
/**
 * @public
 */
export type UplinkGbps = (typeof UplinkGbps)[keyof typeof UplinkGbps];

/**
 * @public
 * @enum
 */
export const DecommissionRequestStatus = {
  BLOCKED: "BLOCKED",
  REQUESTED: "REQUESTED",
  SKIPPED: "SKIPPED",
} as const;
/**
 * @public
 */
export type DecommissionRequestStatus = (typeof DecommissionRequestStatus)[keyof typeof DecommissionRequestStatus];

/**
 * @public
 * @enum
 */
export const TaskActionOnBlockingInstances = {
  FAIL_TASK: "FAIL_TASK",
  WAIT_FOR_EVACUATION: "WAIT_FOR_EVACUATION",
} as const;
/**
 * @public
 */
export type TaskActionOnBlockingInstances =
  (typeof TaskActionOnBlockingInstances)[keyof typeof TaskActionOnBlockingInstances];

/**
 * @public
 * @enum
 */
export const SubscriptionStatus = {
  ACTIVE: "ACTIVE",
  CANCELLED: "CANCELLED",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];

/**
 * @public
 * @enum
 */
export const SubscriptionType = {
  CAPACITY_INCREASE: "CAPACITY_INCREASE",
  ORIGINAL: "ORIGINAL",
  RENEWAL: "RENEWAL",
} as const;
/**
 * @public
 */
export type SubscriptionType = (typeof SubscriptionType)[keyof typeof SubscriptionType];
