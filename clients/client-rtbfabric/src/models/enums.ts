// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ResponderErrorMaskingAction = {
  NO_BID: "NO_BID",
  PASSTHROUGH: "PASSTHROUGH",
} as const;
/**
 * @public
 */
export type ResponderErrorMaskingAction =
  (typeof ResponderErrorMaskingAction)[keyof typeof ResponderErrorMaskingAction];

/**
 * @public
 * @enum
 */
export const ResponderErrorMaskingLoggingType = {
  METRIC: "METRIC",
  NONE: "NONE",
  RESPONSE: "RESPONSE",
} as const;
/**
 * @public
 */
export type ResponderErrorMaskingLoggingType =
  (typeof ResponderErrorMaskingLoggingType)[keyof typeof ResponderErrorMaskingLoggingType];

/**
 * @public
 * @enum
 */
export const LinkDirection = {
  REQUEST: "REQUEST",
  RESPONSE: "RESPONSE",
} as const;
/**
 * @public
 */
export type LinkDirection = (typeof LinkDirection)[keyof typeof LinkDirection];

/**
 * @public
 * @enum
 */
export const FilterType = {
  EXCLUDE: "EXCLUDE",
  INCLUDE: "INCLUDE",
} as const;
/**
 * @public
 */
export type FilterType = (typeof FilterType)[keyof typeof FilterType];

/**
 * @public
 * @enum
 */
export const LinkStatus = {
  ACCEPTED: "ACCEPTED",
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  FAILED: "FAILED",
  ISOLATED: "ISOLATED",
  PENDING_CREATION: "PENDING_CREATION",
  PENDING_DELETION: "PENDING_DELETION",
  PENDING_ISOLATION: "PENDING_ISOLATION",
  PENDING_REQUEST: "PENDING_REQUEST",
  PENDING_RESTORATION: "PENDING_RESTORATION",
  PENDING_UPDATE: "PENDING_UPDATE",
  REJECTED: "REJECTED",
  REQUESTED: "REQUESTED",
} as const;
/**
 * @public
 */
export type LinkStatus = (typeof LinkStatus)[keyof typeof LinkStatus];

/**
 * @public
 * @enum
 */
export const RequesterGatewayStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  ERROR: "ERROR",
  ISOLATED: "ISOLATED",
  PENDING_CREATION: "PENDING_CREATION",
  PENDING_DELETION: "PENDING_DELETION",
  PENDING_ISOLATION: "PENDING_ISOLATION",
  PENDING_RESTORATION: "PENDING_RESTORATION",
  PENDING_UPDATE: "PENDING_UPDATE",
} as const;
/**
 * @public
 */
export type RequesterGatewayStatus = (typeof RequesterGatewayStatus)[keyof typeof RequesterGatewayStatus];

/**
 * @public
 * @enum
 */
export const Protocol = {
  HTTP: "HTTP",
  HTTPS: "HTTPS",
} as const;
/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * @public
 * @enum
 */
export const ResponderGatewayStatus = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  ERROR: "ERROR",
  ISOLATED: "ISOLATED",
  PENDING_CREATION: "PENDING_CREATION",
  PENDING_DELETION: "PENDING_DELETION",
  PENDING_ISOLATION: "PENDING_ISOLATION",
  PENDING_RESTORATION: "PENDING_RESTORATION",
  PENDING_UPDATE: "PENDING_UPDATE",
} as const;
/**
 * @public
 */
export type ResponderGatewayStatus = (typeof ResponderGatewayStatus)[keyof typeof ResponderGatewayStatus];
