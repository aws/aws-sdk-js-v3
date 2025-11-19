// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AccessorNetworkType = {
  ETHEREUM_GOERLI: "ETHEREUM_GOERLI",
  ETHEREUM_MAINNET: "ETHEREUM_MAINNET",
  ETHEREUM_MAINNET_AND_GOERLI: "ETHEREUM_MAINNET_AND_GOERLI",
  POLYGON_MAINNET: "POLYGON_MAINNET",
  POLYGON_MUMBAI: "POLYGON_MUMBAI",
} as const;
/**
 * @public
 */
export type AccessorNetworkType = (typeof AccessorNetworkType)[keyof typeof AccessorNetworkType];

/**
 * @public
 * @enum
 */
export const AccessorStatus = {
  AVAILABLE: "AVAILABLE",
  DELETED: "DELETED",
  PENDING_DELETION: "PENDING_DELETION",
} as const;
/**
 * @public
 */
export type AccessorStatus = (typeof AccessorStatus)[keyof typeof AccessorStatus];

/**
 * @public
 * @enum
 */
export const AccessorType = {
  BILLING_TOKEN: "BILLING_TOKEN",
} as const;
/**
 * @public
 */
export type AccessorType = (typeof AccessorType)[keyof typeof AccessorType];

/**
 * @public
 * @enum
 */
export const ThresholdComparator = {
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL_TO: "GREATER_THAN_OR_EQUAL_TO",
} as const;
/**
 * @public
 */
export type ThresholdComparator = (typeof ThresholdComparator)[keyof typeof ThresholdComparator];

/**
 * @public
 * @enum
 */
export const Framework = {
  ETHEREUM: "ETHEREUM",
  HYPERLEDGER_FABRIC: "HYPERLEDGER_FABRIC",
} as const;
/**
 * @public
 */
export type Framework = (typeof Framework)[keyof typeof Framework];

/**
 * @public
 * @enum
 */
export const Edition = {
  STANDARD: "STANDARD",
  STARTER: "STARTER",
} as const;
/**
 * @public
 */
export type Edition = (typeof Edition)[keyof typeof Edition];

/**
 * @public
 * @enum
 */
export const StateDBType = {
  CouchDB: "CouchDB",
  LevelDB: "LevelDB",
} as const;
/**
 * @public
 */
export type StateDBType = (typeof StateDBType)[keyof typeof StateDBType];

/**
 * @public
 * @enum
 */
export const MemberStatus = {
  AVAILABLE: "AVAILABLE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  INACCESSIBLE_ENCRYPTION_KEY: "INACCESSIBLE_ENCRYPTION_KEY",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type MemberStatus = (typeof MemberStatus)[keyof typeof MemberStatus];

/**
 * @public
 * @enum
 */
export const NetworkStatus = {
  AVAILABLE: "AVAILABLE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
} as const;
/**
 * @public
 */
export type NetworkStatus = (typeof NetworkStatus)[keyof typeof NetworkStatus];

/**
 * @public
 * @enum
 */
export const NodeStatus = {
  AVAILABLE: "AVAILABLE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  INACCESSIBLE_ENCRYPTION_KEY: "INACCESSIBLE_ENCRYPTION_KEY",
  UNHEALTHY: "UNHEALTHY",
  UPDATING: "UPDATING",
} as const;
/**
 * @public
 */
export type NodeStatus = (typeof NodeStatus)[keyof typeof NodeStatus];

/**
 * @public
 * @enum
 */
export const ProposalStatus = {
  ACTION_FAILED: "ACTION_FAILED",
  APPROVED: "APPROVED",
  EXPIRED: "EXPIRED",
  IN_PROGRESS: "IN_PROGRESS",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type ProposalStatus = (typeof ProposalStatus)[keyof typeof ProposalStatus];

/**
 * @public
 * @enum
 */
export const InvitationStatus = {
  ACCEPTED: "ACCEPTED",
  ACCEPTING: "ACCEPTING",
  EXPIRED: "EXPIRED",
  PENDING: "PENDING",
  REJECTED: "REJECTED",
} as const;
/**
 * @public
 */
export type InvitationStatus = (typeof InvitationStatus)[keyof typeof InvitationStatus];

/**
 * @public
 * @enum
 */
export const VoteValue = {
  NO: "NO",
  YES: "YES",
} as const;
/**
 * @public
 */
export type VoteValue = (typeof VoteValue)[keyof typeof VoteValue];
