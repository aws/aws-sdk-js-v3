// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const QueryNetwork = {
  /**
   * Bitcoin main network
   */
  BITCOIN_MAINNET: "BITCOIN_MAINNET",
  /**
   * Bitcoin test network
   */
  BITCOIN_TESTNET: "BITCOIN_TESTNET",
  /**
   * Ethereum main network
   */
  ETHEREUM_MAINNET: "ETHEREUM_MAINNET",
  /**
   * SEPOLIA network (ethereum testnet)
   */
  ETHEREUM_SEPOLIA_TESTNET: "ETHEREUM_SEPOLIA_TESTNET",
} as const;
/**
 * @public
 */
export type QueryNetwork = (typeof QueryNetwork)[keyof typeof QueryNetwork];

/**
 * @public
 * @enum
 */
export const QueryTokenStandard = {
  ERC1155: "ERC1155",
  ERC20: "ERC20",
  ERC721: "ERC721",
} as const;
/**
 * @public
 */
export type QueryTokenStandard = (typeof QueryTokenStandard)[keyof typeof QueryTokenStandard];

/**
 * @public
 * @enum
 */
export const ErrorType = {
  /**
   * An API request retrieving an item that can't be found
   */
  RESOURCE_NOT_FOUND_EXCEPTION: "RESOURCE_NOT_FOUND_EXCEPTION",
  /**
   * An API request validation exception
   */
  VALIDATION_EXCEPTION: "VALIDATION_EXCEPTION",
} as const;
/**
 * @public
 */
export type ErrorType = (typeof ErrorType)[keyof typeof ErrorType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  COLLECTION: "collection",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;
/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * @enum
 */
export const ConfirmationStatus = {
  FINAL: "FINAL",
  NONFINAL: "NONFINAL",
} as const;
/**
 * @public
 */
export type ConfirmationStatus = (typeof ConfirmationStatus)[keyof typeof ConfirmationStatus];

/**
 * @public
 * @enum
 */
export const ExecutionStatus = {
  FAILED: "FAILED",
  SUCCEEDED: "SUCCEEDED",
} as const;
/**
 * @public
 */
export type ExecutionStatus = (typeof ExecutionStatus)[keyof typeof ExecutionStatus];

/**
 * @public
 * @enum
 */
export const ListFilteredTransactionEventsSortBy = {
  /**
   * Timestamp of a transaction
   */
  blockchainInstant: "blockchainInstant",
} as const;
/**
 * @public
 */
export type ListFilteredTransactionEventsSortBy =
  (typeof ListFilteredTransactionEventsSortBy)[keyof typeof ListFilteredTransactionEventsSortBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  /**
   * Result sorted in ascending order
   */
  ASCENDING: "ASCENDING",
  /**
   * Result sorted in descending order
   */
  DESCENDING: "DESCENDING",
} as const;
/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * @enum
 */
export const QueryTransactionEventType = {
  /**
   * A Bitcoin Vin transfer type
   */
  BITCOIN_VIN: "BITCOIN_VIN",
  /**
   * A Bitcoin Vout transfer type
   */
  BITCOIN_VOUT: "BITCOIN_VOUT",
  /**
   * An ERC1155 transfer type
   */
  ERC1155_TRANSFER: "ERC1155_TRANSFER",
  /**
   * An ERC20_BURN transfer type
   */
  ERC20_BURN: "ERC20_BURN",
  /**
   * An ERC20_DEPOSIT transfer type
   */
  ERC20_DEPOSIT: "ERC20_DEPOSIT",
  /**
   * An ERC20_MINT transfer type
   */
  ERC20_MINT: "ERC20_MINT",
  /**
   * An ERC20 transfer type
   */
  ERC20_TRANSFER: "ERC20_TRANSFER",
  /**
   * An ERC20_WITHDRAWAL transfer type
   */
  ERC20_WITHDRAWAL: "ERC20_WITHDRAWAL",
  /**
   * An ERC721 transfer type
   */
  ERC721_TRANSFER: "ERC721_TRANSFER",
  /**
   * An ETH transfer type
   */
  ETH_TRANSFER: "ETH_TRANSFER",
  /**
   * An internal ETH transfer type
   */
  INTERNAL_ETH_TRANSFER: "INTERNAL_ETH_TRANSFER",
} as const;
/**
 * @public
 */
export type QueryTransactionEventType = (typeof QueryTransactionEventType)[keyof typeof QueryTransactionEventType];

/**
 * @public
 * @enum
 */
export const ListTransactionsSortBy = {
  /**
   * Timestamp of a transaction
   */
  TRANSACTION_TIMESTAMP: "TRANSACTION_TIMESTAMP",
} as const;
/**
 * @public
 */
export type ListTransactionsSortBy = (typeof ListTransactionsSortBy)[keyof typeof ListTransactionsSortBy];
