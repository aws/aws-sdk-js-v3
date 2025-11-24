// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const EgressFilterType = {
  ALLOW_ALL: "ALLOW_ALL",
  DROP_ALL: "DROP_ALL",
} as const;
/**
 * @public
 */
export type EgressFilterType = (typeof EgressFilterType)[keyof typeof EgressFilterType];

/**
 * @public
 * @enum
 */
export const IpPreference = {
  IPv4_ONLY: "IPv4_ONLY",
  IPv4_PREFERRED: "IPv4_PREFERRED",
  IPv6_ONLY: "IPv6_ONLY",
  IPv6_PREFERRED: "IPv6_PREFERRED",
} as const;
/**
 * @public
 */
export type IpPreference = (typeof IpPreference)[keyof typeof IpPreference];

/**
 * @public
 * @enum
 */
export const MeshStatusCode = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type MeshStatusCode = (typeof MeshStatusCode)[keyof typeof MeshStatusCode];

/**
 * @public
 * @enum
 */
export const VirtualGatewayPortProtocol = {
  GRPC: "grpc",
  HTTP: "http",
  HTTP2: "http2",
} as const;
/**
 * @public
 */
export type VirtualGatewayPortProtocol = (typeof VirtualGatewayPortProtocol)[keyof typeof VirtualGatewayPortProtocol];

/**
 * @public
 * @enum
 */
export const VirtualGatewayListenerTlsMode = {
  DISABLED: "DISABLED",
  PERMISSIVE: "PERMISSIVE",
  STRICT: "STRICT",
} as const;
/**
 * @public
 */
export type VirtualGatewayListenerTlsMode =
  (typeof VirtualGatewayListenerTlsMode)[keyof typeof VirtualGatewayListenerTlsMode];

/**
 * @public
 * @enum
 */
export const VirtualGatewayStatusCode = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type VirtualGatewayStatusCode = (typeof VirtualGatewayStatusCode)[keyof typeof VirtualGatewayStatusCode];

/**
 * @public
 * @enum
 */
export const DefaultGatewayRouteRewrite = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;
/**
 * @public
 */
export type DefaultGatewayRouteRewrite = (typeof DefaultGatewayRouteRewrite)[keyof typeof DefaultGatewayRouteRewrite];

/**
 * @public
 * @enum
 */
export const HttpMethod = {
  CONNECT: "CONNECT",
  DELETE: "DELETE",
  GET: "GET",
  HEAD: "HEAD",
  OPTIONS: "OPTIONS",
  PATCH: "PATCH",
  POST: "POST",
  PUT: "PUT",
  TRACE: "TRACE",
} as const;
/**
 * @public
 */
export type HttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod];

/**
 * @public
 * @enum
 */
export const GatewayRouteStatusCode = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type GatewayRouteStatusCode = (typeof GatewayRouteStatusCode)[keyof typeof GatewayRouteStatusCode];

/**
 * @public
 * @enum
 */
export const PortProtocol = {
  GRPC: "grpc",
  HTTP: "http",
  HTTP2: "http2",
  TCP: "tcp",
} as const;
/**
 * @public
 */
export type PortProtocol = (typeof PortProtocol)[keyof typeof PortProtocol];

/**
 * @public
 * @enum
 */
export const DurationUnit = {
  MS: "ms",
  S: "s",
} as const;
/**
 * @public
 */
export type DurationUnit = (typeof DurationUnit)[keyof typeof DurationUnit];

/**
 * @public
 * @enum
 */
export const ListenerTlsMode = {
  DISABLED: "DISABLED",
  PERMISSIVE: "PERMISSIVE",
  STRICT: "STRICT",
} as const;
/**
 * @public
 */
export type ListenerTlsMode = (typeof ListenerTlsMode)[keyof typeof ListenerTlsMode];

/**
 * @public
 * @enum
 */
export const DnsResponseType = {
  ENDPOINTS: "ENDPOINTS",
  LOADBALANCER: "LOADBALANCER",
} as const;
/**
 * @public
 */
export type DnsResponseType = (typeof DnsResponseType)[keyof typeof DnsResponseType];

/**
 * @public
 * @enum
 */
export const VirtualNodeStatusCode = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type VirtualNodeStatusCode = (typeof VirtualNodeStatusCode)[keyof typeof VirtualNodeStatusCode];

/**
 * @public
 * @enum
 */
export const VirtualRouterStatusCode = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type VirtualRouterStatusCode = (typeof VirtualRouterStatusCode)[keyof typeof VirtualRouterStatusCode];

/**
 * @public
 * @enum
 */
export const GrpcRetryPolicyEvent = {
  CANCELLED: "cancelled",
  DEADLINE_EXCEEDED: "deadline-exceeded",
  INTERNAL: "internal",
  RESOURCE_EXHAUSTED: "resource-exhausted",
  UNAVAILABLE: "unavailable",
} as const;
/**
 * @public
 */
export type GrpcRetryPolicyEvent = (typeof GrpcRetryPolicyEvent)[keyof typeof GrpcRetryPolicyEvent];

/**
 * @public
 * @enum
 */
export const TcpRetryPolicyEvent = {
  CONNECTION_ERROR: "connection-error",
} as const;
/**
 * @public
 */
export type TcpRetryPolicyEvent = (typeof TcpRetryPolicyEvent)[keyof typeof TcpRetryPolicyEvent];

/**
 * @public
 * @enum
 */
export const HttpScheme = {
  HTTP: "http",
  HTTPS: "https",
} as const;
/**
 * @public
 */
export type HttpScheme = (typeof HttpScheme)[keyof typeof HttpScheme];

/**
 * @public
 * @enum
 */
export const RouteStatusCode = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type RouteStatusCode = (typeof RouteStatusCode)[keyof typeof RouteStatusCode];

/**
 * @public
 * @enum
 */
export const VirtualServiceStatusCode = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  INACTIVE: "INACTIVE",
} as const;
/**
 * @public
 */
export type VirtualServiceStatusCode = (typeof VirtualServiceStatusCode)[keyof typeof VirtualServiceStatusCode];
