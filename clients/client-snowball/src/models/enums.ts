// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AddressType = {
  AWS_SHIP: "AWS_SHIP",
  CUST_PICKUP: "CUST_PICKUP",
} as const;
/**
 * @public
 */
export type AddressType = (typeof AddressType)[keyof typeof AddressType];

/**
 * @public
 * @enum
 */
export const JobType = {
  EXPORT: "EXPORT",
  IMPORT: "IMPORT",
  LOCAL_USE: "LOCAL_USE",
} as const;
/**
 * @public
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

/**
 * @public
 * @enum
 */
export const JobState = {
  CANCELLED: "Cancelled",
  COMPLETE: "Complete",
  IN_PROGRESS: "InProgress",
  IN_TRANSIT_TO_AWS: "InTransitToAWS",
  IN_TRANSIT_TO_CUSTOMER: "InTransitToCustomer",
  LISTING: "Listing",
  NEW: "New",
  PENDING: "Pending",
  PREPARING_APPLIANCE: "PreparingAppliance",
  PREPARING_SHIPMENT: "PreparingShipment",
  WITH_AWS: "WithAWS",
  WITH_AWS_SORTING_FACILITY: "WithAWSSortingFacility",
  WITH_CUSTOMER: "WithCustomer",
} as const;
/**
 * @public
 */
export type JobState = (typeof JobState)[keyof typeof JobState];

/**
 * @public
 * @enum
 */
export const StorageUnit = {
  TB: "TB",
} as const;
/**
 * @public
 */
export type StorageUnit = (typeof StorageUnit)[keyof typeof StorageUnit];

/**
 * @public
 * @enum
 */
export const RemoteManagement = {
  INSTALLED_AUTOSTART: "INSTALLED_AUTOSTART",
  INSTALLED_ONLY: "INSTALLED_ONLY",
  NOT_INSTALLED: "NOT_INSTALLED",
} as const;
/**
 * @public
 */
export type RemoteManagement = (typeof RemoteManagement)[keyof typeof RemoteManagement];

/**
 * @public
 * @enum
 */
export const DeviceServiceName = {
  NFS_ON_DEVICE_SERVICE: "NFS_ON_DEVICE_SERVICE",
  S3_ON_DEVICE_SERVICE: "S3_ON_DEVICE_SERVICE",
} as const;
/**
 * @public
 */
export type DeviceServiceName = (typeof DeviceServiceName)[keyof typeof DeviceServiceName];

/**
 * @public
 * @enum
 */
export const TransferOption = {
  EXPORT: "EXPORT",
  IMPORT: "IMPORT",
  LOCAL_USE: "LOCAL_USE",
} as const;
/**
 * @public
 */
export type TransferOption = (typeof TransferOption)[keyof typeof TransferOption];

/**
 * @public
 * @enum
 */
export const ShippingOption = {
  EXPRESS: "EXPRESS",
  NEXT_DAY: "NEXT_DAY",
  SECOND_DAY: "SECOND_DAY",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type ShippingOption = (typeof ShippingOption)[keyof typeof ShippingOption];

/**
 * @public
 * @enum
 */
export const SnowballCapacity = {
  NO_PREFERENCE: "NoPreference",
  T100: "T100",
  T13: "T13",
  T14: "T14",
  T240: "T240",
  T32: "T32",
  T42: "T42",
  T50: "T50",
  T8: "T8",
  T80: "T80",
  T98: "T98",
} as const;
/**
 * @public
 */
export type SnowballCapacity = (typeof SnowballCapacity)[keyof typeof SnowballCapacity];

/**
 * @public
 * @enum
 */
export const SnowballType = {
  EDGE: "EDGE",
  EDGE_C: "EDGE_C",
  EDGE_CG: "EDGE_CG",
  EDGE_S: "EDGE_S",
  RACK_5U_C: "RACK_5U_C",
  SNC1_HDD: "SNC1_HDD",
  SNC1_SSD: "SNC1_SSD",
  STANDARD: "STANDARD",
  V3_5C: "V3_5C",
  V3_5S: "V3_5S",
} as const;
/**
 * @public
 */
export type SnowballType = (typeof SnowballType)[keyof typeof SnowballType];

/**
 * @public
 * @enum
 */
export const ImpactLevel = {
  IL2: "IL2",
  IL4: "IL4",
  IL5: "IL5",
  IL6: "IL6",
  IL99: "IL99",
} as const;
/**
 * @public
 */
export type ImpactLevel = (typeof ImpactLevel)[keyof typeof ImpactLevel];

/**
 * @public
 * @enum
 */
export const LongTermPricingType = {
  ONE_MONTH: "OneMonth",
  ONE_YEAR: "OneYear",
  THREE_YEAR: "ThreeYear",
} as const;
/**
 * @public
 */
export type LongTermPricingType = (typeof LongTermPricingType)[keyof typeof LongTermPricingType];

/**
 * @public
 * @enum
 */
export const ShippingLabelStatus = {
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  SUCCEEDED: "Succeeded",
  TIMED_OUT: "TimedOut",
} as const;
/**
 * @public
 */
export type ShippingLabelStatus = (typeof ShippingLabelStatus)[keyof typeof ShippingLabelStatus];

/**
 * @public
 * @enum
 */
export const ClusterState = {
  AWAITING_QUORUM: "AwaitingQuorum",
  CANCELLED: "Cancelled",
  COMPLETE: "Complete",
  IN_USE: "InUse",
  PENDING: "Pending",
} as const;
/**
 * @public
 */
export type ClusterState = (typeof ClusterState)[keyof typeof ClusterState];

/**
 * @public
 * @enum
 */
export const ServiceName = {
  EKS_ANYWHERE: "EKS_ANYWHERE",
  KUBERNETES: "KUBERNETES",
} as const;
/**
 * @public
 */
export type ServiceName = (typeof ServiceName)[keyof typeof ServiceName];

/**
 * @public
 * @enum
 */
export const ShipmentState = {
  RECEIVED: "RECEIVED",
  RETURNED: "RETURNED",
} as const;
/**
 * @public
 */
export type ShipmentState = (typeof ShipmentState)[keyof typeof ShipmentState];
