import {
  AccessDeniedException,
  ActionType,
  BCMRecommendedActions,
  BCMRecommendedActionsClient,
  BCMRecommendedActionsServiceException,
  Feature,
  FilterName,
  InternalServerException,
  ListRecommendedActionsCommand,
  MatchOption,
  Severity,
  ThrottlingException,
  ValidationException,
  ValidationExceptionReason,
  paginateListRecommendedActions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BCMRecommendedActionsClient === "function");
assert(typeof BCMRecommendedActions === "function");
// commands
assert(typeof ListRecommendedActionsCommand === "function");
// enums
assert(typeof ActionType === "object");
assert(typeof Feature === "object");
assert(typeof FilterName === "object");
assert(typeof MatchOption === "object");
assert(typeof Severity === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof BCMRecommendedActionsServiceException);
assert(InternalServerException.prototype instanceof BCMRecommendedActionsServiceException);
assert(ThrottlingException.prototype instanceof BCMRecommendedActionsServiceException);
assert(ValidationException.prototype instanceof BCMRecommendedActionsServiceException);
assert(BCMRecommendedActionsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRecommendedActions === "function");
console.log(`BCMRecommendedActions index test passed.`);
