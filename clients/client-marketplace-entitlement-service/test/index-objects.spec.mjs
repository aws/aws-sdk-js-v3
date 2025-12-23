import {
  Entitlement$,
  EntitlementValue$,
  GetEntitlementFilterName,
  GetEntitlements$,
  GetEntitlementsCommand,
  GetEntitlementsRequest$,
  GetEntitlementsResult$,
  InternalServiceErrorException,
  InternalServiceErrorException$,
  InvalidParameterException,
  InvalidParameterException$,
  MarketplaceEntitlementService,
  MarketplaceEntitlementServiceClient,
  MarketplaceEntitlementServiceServiceException,
  paginateGetEntitlements,
  ThrottlingException,
  ThrottlingException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceEntitlementServiceClient === "function");
assert(typeof MarketplaceEntitlementService === "function");
// commands
assert(typeof GetEntitlementsCommand === "function");
assert(typeof GetEntitlements$ === "object");
// structural schemas
assert(typeof Entitlement$ === "object");
assert(typeof EntitlementValue$ === "object");
assert(typeof GetEntitlementsRequest$ === "object");
assert(typeof GetEntitlementsResult$ === "object");
// enums
assert(typeof GetEntitlementFilterName === "object");
// errors
assert(InternalServiceErrorException.prototype instanceof MarketplaceEntitlementServiceServiceException);
assert(typeof InternalServiceErrorException$ === "object");
assert(InvalidParameterException.prototype instanceof MarketplaceEntitlementServiceServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(ThrottlingException.prototype instanceof MarketplaceEntitlementServiceServiceException);
assert(typeof ThrottlingException$ === "object");
assert(MarketplaceEntitlementServiceServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetEntitlements === "function");
console.log(`MarketplaceEntitlementService index test passed.`);
