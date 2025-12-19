// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessLevel = {
  PREMIUM: "PREMIUM",
  STANDARD: "STANDARD",
} as const;
/**
 * @public
 */
export type AccessLevel = (typeof AccessLevel)[keyof typeof AccessLevel];

export enum BotStatus {
  PENDING = 1,
  ACTIVE = 2,
}

/**
 * @public
 * @enum
 */
export const DataRetentionActionType = {
  DISABLE: "DISABLE",
  ENABLE: "ENABLE",
  PUBKEY_MSG_ACK: "PUBKEY_MSG_ACK",
} as const;
/**
 * @public
 */
export type DataRetentionActionType = (typeof DataRetentionActionType)[keyof typeof DataRetentionActionType];

/**
 * @public
 * @enum
 */
export const SortDirection = {
  ASC: "ASC",
  DESC: "DESC",
} as const;
/**
 * @public
 */
export type SortDirection = (typeof SortDirection)[keyof typeof SortDirection];

export enum UserStatus {
  PENDING = 1,
  ACTIVE = 2,
}

/**
 * @public
 * @enum
 */
export const Status = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  FORCE_ENABLED: "FORCE_ENABLED",
} as const;
/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];
