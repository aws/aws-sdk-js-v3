import {
  BatchMeterUsageCommand,
  MarketplaceMetering,
  MarketplaceMeteringClient,
  MarketplaceMeteringServiceException,
  MeterUsageCommand,
  RegisterUsageCommand,
  ResolveCustomerCommand,
  UsageRecordResultStatus,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof MarketplaceMeteringClient === "function")
assert(typeof MarketplaceMetering === "function")
// commands
assert(typeof BatchMeterUsageCommand === "function")
assert(typeof MeterUsageCommand === "function")
assert(typeof RegisterUsageCommand === "function")
assert(typeof ResolveCustomerCommand === "function")
// enums
assert(typeof UsageRecordResultStatus === "object");
// errors
assert(MarketplaceMeteringServiceException.prototype instanceof Error)
console.log(`MarketplaceMetering index test passed.`);
