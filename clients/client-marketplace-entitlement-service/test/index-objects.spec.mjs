import {
  GetEntitlementFilterName,
  GetEntitlementsCommand,
  InternalServiceErrorException,
  InvalidParameterException,
  MarketplaceEntitlementService,
  MarketplaceEntitlementServiceClient,
  MarketplaceEntitlementServiceServiceException,
  ThrottlingException,
  paginateGetEntitlements,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceEntitlementServiceClient === "function");
assert(typeof MarketplaceEntitlementService === "function");
// commands
assert(typeof GetEntitlementsCommand === "function");
// enums
assert(typeof GetEntitlementFilterName === "object");
// errors
assert(InternalServiceErrorException.prototype instanceof MarketplaceEntitlementServiceServiceException);
assert(InvalidParameterException.prototype instanceof MarketplaceEntitlementServiceServiceException);
assert(ThrottlingException.prototype instanceof MarketplaceEntitlementServiceServiceException);
assert(MarketplaceEntitlementServiceServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetEntitlements === "function");
console.log(`MarketplaceEntitlementService index test passed.`);
