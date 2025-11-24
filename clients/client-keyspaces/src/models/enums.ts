// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ThroughputMode = {
  PAY_PER_REQUEST: "PAY_PER_REQUEST",
  PROVISIONED: "PROVISIONED",
} as const;
/**
 * @public
 */
export type ThroughputMode = (typeof ThroughputMode)[keyof typeof ThroughputMode];

/**
 * @public
 * @enum
 */
export const CdcPropagateTags = {
  NONE: "NONE",
  TABLE: "TABLE",
} as const;
/**
 * @public
 */
export type CdcPropagateTags = (typeof CdcPropagateTags)[keyof typeof CdcPropagateTags];

/**
 * @public
 * @enum
 */
export const CdcStatus = {
  DISABLED: "DISABLED",
  DISABLING: "DISABLING",
  ENABLED: "ENABLED",
  ENABLING: "ENABLING",
} as const;
/**
 * @public
 */
export type CdcStatus = (typeof CdcStatus)[keyof typeof CdcStatus];

/**
 * @public
 * @enum
 */
export const ViewType = {
  KEYS_ONLY: "KEYS_ONLY",
  NEW_AND_OLD_IMAGES: "NEW_AND_OLD_IMAGES",
  NEW_IMAGE: "NEW_IMAGE",
  OLD_IMAGE: "OLD_IMAGE",
} as const;
/**
 * @public
 */
export type ViewType = (typeof ViewType)[keyof typeof ViewType];

/**
 * @public
 * @enum
 */
export const ClientSideTimestampsStatus = {
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type ClientSideTimestampsStatus = (typeof ClientSideTimestampsStatus)[keyof typeof ClientSideTimestampsStatus];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASC: "ASC",
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const Rs = {
  MULTI_REGION: "MULTI_REGION",
  SINGLE_REGION: "SINGLE_REGION",
} as const;
/**
 * @public
 */
export type Rs = (typeof Rs)[keyof typeof Rs];

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  AWS_OWNED_KMS_KEY: "AWS_OWNED_KMS_KEY",
  CUSTOMER_MANAGED_KMS_KEY: "CUSTOMER_MANAGED_KMS_KEY",
} as const;
/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 * @enum
 */
export const PointInTimeRecoveryStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type PointInTimeRecoveryStatus = (typeof PointInTimeRecoveryStatus)[keyof typeof PointInTimeRecoveryStatus];

/**
 * @public
 * @enum
 */
export const TimeToLiveStatus = {
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type TimeToLiveStatus = (typeof TimeToLiveStatus)[keyof typeof TimeToLiveStatus];

/**
 * @public
 * @enum
 */
export const KeyspaceStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type KeyspaceStatus = (typeof KeyspaceStatus)[keyof typeof KeyspaceStatus];

/**
 * @public
 * @enum
 */
export const TableStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  INACCESSIBLE_ENCRYPTION_CREDENTIALS: "INACCESSIBLE_ENCRYPTION_CREDENTIALS",
  RESTORING: "RESTORING",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type TableStatus = (typeof TableStatus)[keyof typeof TableStatus];

/**
 * @public
 * @enum
 */
export const TypeStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  RESTORING: "RESTORING",
} as const;
/**
 * @public
 */
export type TypeStatus = (typeof TypeStatus)[keyof typeof TypeStatus];
