import {
  GetBuyerDashboardCommand,
  MarketplaceReporting,
  MarketplaceReportingClient,
  MarketplaceReportingServiceException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceReportingClient === "function")
assert(typeof MarketplaceReporting === "function")
// commands
assert(typeof GetBuyerDashboardCommand === "function")
// errors
assert(MarketplaceReportingServiceException.prototype instanceof Error)
console.log(`MarketplaceReporting index test passed.`);
