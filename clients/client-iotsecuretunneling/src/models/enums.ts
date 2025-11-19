// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ClientMode = {
  ALL: "ALL",
  DESTINATION: "DESTINATION",
  SOURCE: "SOURCE",
} as const;
/**
 * @public
 */
export type ClientMode = (typeof ClientMode)[keyof typeof ClientMode];

/**
 * @public
 * @enum
 */
export const ConnectionStatus = {
  CONNECTED: "CONNECTED",
  DISCONNECTED: "DISCONNECTED",
} as const;
/**
 * @public
 */
export type ConnectionStatus = (typeof ConnectionStatus)[keyof typeof ConnectionStatus];

/**
 * @public
 * @enum
 */
export const TunnelStatus = {
  CLOSED: "CLOSED",
  OPEN: "OPEN",
} as const;
/**
 * @public
 */
export type TunnelStatus = (typeof TunnelStatus)[keyof typeof TunnelStatus];
