// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const IpAddressType = {
  DUAL_STACK: "DUAL_STACK",
  IPV4: "IPV4",
} as const;
/**
 * @public
 */
export type IpAddressType = (typeof IpAddressType)[keyof typeof IpAddressType];

/**
 * @public
 * @enum
 */
export const IpAddressFamily = {
  IPv4: "IPv4",
  IPv6: "IPv6",
} as const;
/**
 * @public
 */
export type IpAddressFamily = (typeof IpAddressFamily)[keyof typeof IpAddressFamily];

/**
 * @public
 * @enum
 */
export const AcceleratorStatus = {
  DEPLOYED: "DEPLOYED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type AcceleratorStatus = (typeof AcceleratorStatus)[keyof typeof AcceleratorStatus];

/**
 * @public
 * @enum
 */
export const HealthState = {
  HEALTHY: "HEALTHY",
  INITIAL: "INITIAL",
  UNHEALTHY: "UNHEALTHY",
} as const;
/**
 * @public
 */
export type HealthState = (typeof HealthState)[keyof typeof HealthState];

/**
 * @public
 * @enum
 */
export const ByoipCidrState = {
  ADVERTISING: "ADVERTISING",
  DEPROVISIONED: "DEPROVISIONED",
  FAILED_ADVERTISING: "FAILED_ADVERTISING",
  FAILED_DEPROVISION: "FAILED_DEPROVISION",
  FAILED_PROVISION: "FAILED_PROVISION",
  FAILED_WITHDRAW: "FAILED_WITHDRAW",
  PENDING_ADVERTISING: "PENDING_ADVERTISING",
  PENDING_DEPROVISIONING: "PENDING_DEPROVISIONING",
  PENDING_PROVISIONING: "PENDING_PROVISIONING",
  PENDING_WITHDRAWING: "PENDING_WITHDRAWING",
  READY: "READY",
} as const;
/**
 * @public
 */
export type ByoipCidrState = (typeof ByoipCidrState)[keyof typeof ByoipCidrState];

/**
 * @public
 * @enum
 */
export const ClientAffinity = {
  NONE: "NONE",
  SOURCE_IP: "SOURCE_IP",
} as const;
/**
 * @public
 */
export type ClientAffinity = (typeof ClientAffinity)[keyof typeof ClientAffinity];

/**
 * @public
 * @enum
 */
export const CustomRoutingAcceleratorStatus = {
  DEPLOYED: "DEPLOYED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;
/**
 * @public
 */
export type CustomRoutingAcceleratorStatus =
  (typeof CustomRoutingAcceleratorStatus)[keyof typeof CustomRoutingAcceleratorStatus];

/**
 * @public
 * @enum
 */
export const CustomRoutingProtocol = {
  TCP: "TCP",
  UDP: "UDP",
} as const;
/**
 * @public
 */
export type CustomRoutingProtocol = (typeof CustomRoutingProtocol)[keyof typeof CustomRoutingProtocol];

/**
 * @public
 * @enum
 */
export const Protocol = {
  TCP: "TCP",
  UDP: "UDP",
} as const;
/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * @public
 * @enum
 */
export const HealthCheckProtocol = {
  HTTP: "HTTP",
  HTTPS: "HTTPS",
  TCP: "TCP",
} as const;
/**
 * @public
 */
export type HealthCheckProtocol = (typeof HealthCheckProtocol)[keyof typeof HealthCheckProtocol];

/**
 * @public
 * @enum
 */
export const CustomRoutingDestinationTrafficState = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;
/**
 * @public
 */
export type CustomRoutingDestinationTrafficState =
  (typeof CustomRoutingDestinationTrafficState)[keyof typeof CustomRoutingDestinationTrafficState];
