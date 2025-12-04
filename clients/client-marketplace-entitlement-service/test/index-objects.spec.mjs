import {
  GetEntitlementFilterName,
  GetEntitlementsCommand,
  MarketplaceEntitlementService,
  MarketplaceEntitlementServiceClient,
  MarketplaceEntitlementServiceServiceException,
  paginateGetEntitlements,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceEntitlementServiceClient === "function")
assert(typeof MarketplaceEntitlementService === "function")
// commands
assert(typeof GetEntitlementsCommand === "function")
// enums
assert(typeof GetEntitlementFilterName === "object");
// errors
assert(MarketplaceEntitlementServiceServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateGetEntitlements === "function")
console.log(`MarketplaceEntitlementService index test passed.`);
