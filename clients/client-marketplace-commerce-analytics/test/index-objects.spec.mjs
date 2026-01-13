import {
  DataSetType,
  GenerateDataSet$,
  GenerateDataSetCommand,
  GenerateDataSetRequest$,
  GenerateDataSetResult$,
  MarketplaceCommerceAnalytics,
  MarketplaceCommerceAnalyticsClient,
  MarketplaceCommerceAnalyticsException,
  MarketplaceCommerceAnalyticsException$,
  MarketplaceCommerceAnalyticsServiceException,
  StartSupportDataExport$,
  StartSupportDataExportCommand,
  StartSupportDataExportRequest$,
  StartSupportDataExportResult$,
  SupportDataSetType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceCommerceAnalyticsClient === "function");
assert(typeof MarketplaceCommerceAnalytics === "function");
// commands
assert(typeof GenerateDataSetCommand === "function");
assert(typeof GenerateDataSet$ === "object");
assert(typeof StartSupportDataExportCommand === "function");
assert(typeof StartSupportDataExport$ === "object");
// structural schemas
assert(typeof GenerateDataSetRequest$ === "object");
assert(typeof GenerateDataSetResult$ === "object");
assert(typeof StartSupportDataExportRequest$ === "object");
assert(typeof StartSupportDataExportResult$ === "object");
// enums
assert(typeof DataSetType === "object");
assert(typeof SupportDataSetType === "object");
// errors
assert(MarketplaceCommerceAnalyticsException.prototype instanceof MarketplaceCommerceAnalyticsServiceException);
assert(typeof MarketplaceCommerceAnalyticsException$ === "object");
assert(MarketplaceCommerceAnalyticsServiceException.prototype instanceof Error);
console.log(`MarketplaceCommerceAnalytics index test passed.`);
