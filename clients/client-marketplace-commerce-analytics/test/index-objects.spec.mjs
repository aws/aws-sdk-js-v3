import {
  DataSetType,
  GenerateDataSetCommand,
  MarketplaceCommerceAnalytics,
  MarketplaceCommerceAnalyticsClient,
  MarketplaceCommerceAnalyticsException,
  MarketplaceCommerceAnalyticsServiceException,
  StartSupportDataExportCommand,
  SupportDataSetType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceCommerceAnalyticsClient === "function");
assert(typeof MarketplaceCommerceAnalytics === "function");
// commands
assert(typeof GenerateDataSetCommand === "function");
assert(typeof StartSupportDataExportCommand === "function");
// enums
assert(typeof DataSetType === "object");
assert(typeof SupportDataSetType === "object");
// errors
assert(MarketplaceCommerceAnalyticsException.prototype instanceof MarketplaceCommerceAnalyticsServiceException);
assert(MarketplaceCommerceAnalyticsServiceException.prototype instanceof Error);
console.log(`MarketplaceCommerceAnalytics index test passed.`);
