import {
  AccessDeniedException,
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
  InternalServerException,
  LanguageCode,
  ListAccountActivitiesCommand,
  MatchOption,
  ResourceNotFoundException,
  ThrottlingException,
  UpgradeAccountPlanCommand,
  ValidationException,
  paginateGetFreeTierUsage,
  paginateListAccountActivities,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof FreeTierClient === "function");
assert(typeof FreeTier === "function");
// commands
assert(typeof GetAccountActivityCommand === "function");
assert(typeof GetAccountPlanStateCommand === "function");
assert(typeof GetFreeTierUsageCommand === "function");
assert(typeof ListAccountActivitiesCommand === "function");
assert(typeof UpgradeAccountPlanCommand === "function");
// enums
assert(typeof AccountPlanStatus === "object");
assert(typeof AccountPlanType === "object");
assert(typeof ActivityStatus === "object");
assert(typeof CurrencyCode === "object");
assert(typeof Dimension === "object");
assert(typeof LanguageCode === "object");
assert(typeof MatchOption === "object");
// errors
assert(AccessDeniedException.prototype instanceof FreeTierServiceException);
assert(InternalServerException.prototype instanceof FreeTierServiceException);
assert(ResourceNotFoundException.prototype instanceof FreeTierServiceException);
assert(ThrottlingException.prototype instanceof FreeTierServiceException);
assert(ValidationException.prototype instanceof FreeTierServiceException);
assert(FreeTierServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetFreeTierUsage === "function");
assert(typeof paginateListAccountActivities === "function");
console.log(`FreeTier index test passed.`);
