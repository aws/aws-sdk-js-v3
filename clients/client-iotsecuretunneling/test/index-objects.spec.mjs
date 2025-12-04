import {
  ClientMode,
  CloseTunnelCommand,
  ConnectionStatus,
  DescribeTunnelCommand,
  IoTSecureTunneling,
  IoTSecureTunnelingClient,
  IoTSecureTunnelingServiceException,
  ListTagsForResourceCommand,
  ListTunnelsCommand,
  OpenTunnelCommand,
  RotateTunnelAccessTokenCommand,
  TagResourceCommand,
  TunnelStatus,
  UntagResourceCommand,
  paginateListTunnels,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IoTSecureTunnelingClient === "function");
assert(typeof IoTSecureTunneling === "function");
// commands
assert(typeof CloseTunnelCommand === "function");
assert(typeof DescribeTunnelCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTunnelsCommand === "function");
assert(typeof OpenTunnelCommand === "function");
assert(typeof RotateTunnelAccessTokenCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
// enums
assert(typeof ClientMode === "object");
assert(typeof ConnectionStatus === "object");
assert(typeof TunnelStatus === "object");
// errors
assert(IoTSecureTunnelingServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListTunnels === "function");
console.log(`IoTSecureTunneling index test passed.`);
