import {
  AccountPlanStatus,
  AccountPlanType,
  ActivityStatus,
  CurrencyCode,
  Dimension,
  FreeTier,
  FreeTierClient,
  FreeTierServiceException,
  GetAccountActivityCommand,
  GetAccountPlanStateCommand,
  GetFreeTierUsageCommand,
  LanguageCode,
  ListAccountActivitiesCommand,
  MatchOption,
  UpgradeAccountPlanCommand,
  paginateGetFreeTierUsage,
  paginateListAccountActivities,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof FreeTierClient === "function")
assert(typeof FreeTier === "function")
// commands
assert(typeof GetAccountActivityCommand === "function")
assert(typeof GetAccountPlanStateCommand === "function")
assert(typeof GetFreeTierUsageCommand === "function")
assert(typeof ListAccountActivitiesCommand === "function")
assert(typeof UpgradeAccountPlanCommand === "function")
// enums
assert(typeof AccountPlanStatus === "object");
assert(typeof AccountPlanType === "object");
assert(typeof ActivityStatus === "object");
assert(typeof CurrencyCode === "object");
assert(typeof Dimension === "object");
assert(typeof LanguageCode === "object");
assert(typeof MatchOption === "object");
// errors
assert(FreeTierServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateGetFreeTierUsage === "function")
assert(typeof paginateListAccountActivities === "function")
console.log(`FreeTier index test passed.`);
