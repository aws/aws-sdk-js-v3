// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const AddressFamily = {
  IPV4: "IPV4",
  IPV6: "IPV6",
} as const;
/**
 * @public
 */
export type AddressFamily = (typeof AddressFamily)[keyof typeof AddressFamily];

/**
 * @public
 * @enum
 */
export const Protocol = {
  ICMP: "ICMP",
  TCP: "TCP",
} as const;
/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * @public
 * @enum
 */
export const MonitorState = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type MonitorState = (typeof MonitorState)[keyof typeof MonitorState];

/**
 * @public
 * @enum
 */
export const ProbeState = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DELETING: "DELETING",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
} as const;
/**
 * @public
 */
export type ProbeState = (typeof ProbeState)[keyof typeof ProbeState];
