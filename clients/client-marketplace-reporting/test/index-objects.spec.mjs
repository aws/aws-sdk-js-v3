import {
  AccessDeniedException,
  BadRequestException,
  GetBuyerDashboardCommand,
  InternalServerException,
  MarketplaceReporting,
  MarketplaceReportingClient,
  MarketplaceReportingServiceException,
  UnauthorizedException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceReportingClient === "function");
assert(typeof MarketplaceReporting === "function");
// commands
assert(typeof GetBuyerDashboardCommand === "function");
// errors
assert(AccessDeniedException.prototype instanceof MarketplaceReportingServiceException);
assert(BadRequestException.prototype instanceof MarketplaceReportingServiceException);
assert(InternalServerException.prototype instanceof MarketplaceReportingServiceException);
assert(UnauthorizedException.prototype instanceof MarketplaceReportingServiceException);
assert(MarketplaceReportingServiceException.prototype instanceof Error);
console.log(`MarketplaceReporting index test passed.`);
