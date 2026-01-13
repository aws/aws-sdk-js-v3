import {
  AccessDeniedException,
  AccessDeniedException$,
  BadRequestException,
  BadRequestException$,
  GetBuyerDashboard$,
  GetBuyerDashboardCommand,
  GetBuyerDashboardInput$,
  GetBuyerDashboardOutput$,
  InternalServerException,
  InternalServerException$,
  MarketplaceReporting,
  MarketplaceReportingClient,
  MarketplaceReportingServiceException,
  UnauthorizedException,
  UnauthorizedException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceReportingClient === "function");
assert(typeof MarketplaceReporting === "function");
// commands
assert(typeof GetBuyerDashboardCommand === "function");
assert(typeof GetBuyerDashboard$ === "object");
// structural schemas
assert(typeof GetBuyerDashboardInput$ === "object");
assert(typeof GetBuyerDashboardOutput$ === "object");
// errors
assert(AccessDeniedException.prototype instanceof MarketplaceReportingServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(BadRequestException.prototype instanceof MarketplaceReportingServiceException);
assert(typeof BadRequestException$ === "object");
assert(InternalServerException.prototype instanceof MarketplaceReportingServiceException);
assert(typeof InternalServerException$ === "object");
assert(UnauthorizedException.prototype instanceof MarketplaceReportingServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(MarketplaceReportingServiceException.prototype instanceof Error);
console.log(`MarketplaceReporting index test passed.`);
