import {
  ClientMode,
  CloseTunnel$,
  CloseTunnelCommand,
  CloseTunnelRequest$,
  CloseTunnelResponse$,
  ConnectionState$,
  ConnectionStatus,
  DescribeTunnel$,
  DescribeTunnelCommand,
  DescribeTunnelRequest$,
  DescribeTunnelResponse$,
  DestinationConfig$,
  IoTSecureTunneling,
  IoTSecureTunnelingClient,
  IoTSecureTunnelingServiceException,
  LimitExceededException,
  LimitExceededException$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  ListTunnels$,
  ListTunnelsCommand,
  ListTunnelsRequest$,
  ListTunnelsResponse$,
  OpenTunnel$,
  OpenTunnelCommand,
  OpenTunnelRequest$,
  OpenTunnelResponse$,
  paginateListTunnels,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RotateTunnelAccessToken$,
  RotateTunnelAccessTokenCommand,
  RotateTunnelAccessTokenRequest$,
  RotateTunnelAccessTokenResponse$,
  Tag$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TimeoutConfig$,
  Tunnel$,
  TunnelStatus,
  TunnelSummary$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTSecureTunnelingClient === "function");
assert(typeof IoTSecureTunneling === "function");
// commands
assert(typeof CloseTunnelCommand === "function");
assert(typeof CloseTunnel$ === "object");
assert(typeof DescribeTunnelCommand === "function");
assert(typeof DescribeTunnel$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof ListTunnelsCommand === "function");
assert(typeof ListTunnels$ === "object");
assert(typeof OpenTunnelCommand === "function");
assert(typeof OpenTunnel$ === "object");
assert(typeof RotateTunnelAccessTokenCommand === "function");
assert(typeof RotateTunnelAccessToken$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
// structural schemas
assert(typeof CloseTunnelRequest$ === "object");
assert(typeof CloseTunnelResponse$ === "object");
assert(typeof ConnectionState$ === "object");
assert(typeof DescribeTunnelRequest$ === "object");
assert(typeof DescribeTunnelResponse$ === "object");
assert(typeof DestinationConfig$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ListTunnelsRequest$ === "object");
assert(typeof ListTunnelsResponse$ === "object");
assert(typeof OpenTunnelRequest$ === "object");
assert(typeof OpenTunnelResponse$ === "object");
assert(typeof RotateTunnelAccessTokenRequest$ === "object");
assert(typeof RotateTunnelAccessTokenResponse$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TimeoutConfig$ === "object");
assert(typeof Tunnel$ === "object");
assert(typeof TunnelSummary$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
// enums
assert(typeof ClientMode === "object");
assert(typeof ConnectionStatus === "object");
assert(typeof TunnelStatus === "object");
// errors
assert(LimitExceededException.prototype instanceof IoTSecureTunnelingServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof IoTSecureTunnelingServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(IoTSecureTunnelingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListTunnels === "function");
console.log(`IoTSecureTunneling index test passed.`);
