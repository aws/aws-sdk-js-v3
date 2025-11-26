import {
  ActionType,
  BCMRecommendedActions,
  BCMRecommendedActionsClient,
  BCMRecommendedActionsServiceException,
  Feature,
  FilterName,
  ListRecommendedActionsCommand,
  MatchOption,
  Severity,
  paginateListRecommendedActions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BCMRecommendedActionsClient === "function")
assert(typeof BCMRecommendedActions === "function")
// commands
assert(typeof ListRecommendedActionsCommand === "function")
// enums
assert(typeof ActionType === "object");
assert(typeof Feature === "object");
assert(typeof FilterName === "object");
assert(typeof MatchOption === "object");
assert(typeof Severity === "object");
// errors
assert(BCMRecommendedActionsServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateListRecommendedActions === "function")
console.log(`BCMRecommendedActions index test passed.`);
