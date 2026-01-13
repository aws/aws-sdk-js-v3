import {
  AccessDeniedException,
  AccessDeniedException$,
  AccountPlanStatus,
  AccountPlanType,
  ActivityReward$,
  ActivityStatus,
  ActivitySummary$,
  CurrencyCode,
  Dimension,
  DimensionValues$,
  Expression$,
  FreeTier,
  FreeTierClient,
  FreeTierServiceException,
  FreeTierUsage$,
  GetAccountActivity$,
  GetAccountActivityCommand,
  GetAccountActivityRequest$,
  GetAccountActivityResponse$,
  GetAccountPlanState$,
  GetAccountPlanStateCommand,
  GetAccountPlanStateRequest$,
  GetAccountPlanStateResponse$,
  GetFreeTierUsage$,
  GetFreeTierUsageCommand,
  GetFreeTierUsageRequest$,
  GetFreeTierUsageResponse$,
  InternalServerException,
  InternalServerException$,
  LanguageCode,
  ListAccountActivities$,
  ListAccountActivitiesCommand,
  ListAccountActivitiesRequest$,
  ListAccountActivitiesResponse$,
  MatchOption,
  MonetaryAmount$,
  paginateGetFreeTierUsage,
  paginateListAccountActivities,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ThrottlingException,
  ThrottlingException$,
  UpgradeAccountPlan$,
  UpgradeAccountPlanCommand,
  UpgradeAccountPlanRequest$,
  UpgradeAccountPlanResponse$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof FreeTierClient === "function");
assert(typeof FreeTier === "function");
// commands
assert(typeof GetAccountActivityCommand === "function");
assert(typeof GetAccountActivity$ === "object");
assert(typeof GetAccountPlanStateCommand === "function");
assert(typeof GetAccountPlanState$ === "object");
assert(typeof GetFreeTierUsageCommand === "function");
assert(typeof GetFreeTierUsage$ === "object");
assert(typeof ListAccountActivitiesCommand === "function");
assert(typeof ListAccountActivities$ === "object");
assert(typeof UpgradeAccountPlanCommand === "function");
assert(typeof UpgradeAccountPlan$ === "object");
// structural schemas
assert(typeof ActivityReward$ === "object");
assert(typeof ActivitySummary$ === "object");
assert(typeof DimensionValues$ === "object");
assert(typeof Expression$ === "object");
assert(typeof FreeTierUsage$ === "object");
assert(typeof GetAccountActivityRequest$ === "object");
assert(typeof GetAccountActivityResponse$ === "object");
assert(typeof GetAccountPlanStateRequest$ === "object");
assert(typeof GetAccountPlanStateResponse$ === "object");
assert(typeof GetFreeTierUsageRequest$ === "object");
assert(typeof GetFreeTierUsageResponse$ === "object");
assert(typeof ListAccountActivitiesRequest$ === "object");
assert(typeof ListAccountActivitiesResponse$ === "object");
assert(typeof MonetaryAmount$ === "object");
assert(typeof UpgradeAccountPlanRequest$ === "object");
assert(typeof UpgradeAccountPlanResponse$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof FreeTierServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof FreeTierServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof FreeTierServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof FreeTierServiceException);
assert(typeof ValidationException$ === "object");
assert(FreeTierServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetFreeTierUsage === "function");
assert(typeof paginateListAccountActivities === "function");
console.log(`FreeTier index test passed.`);
