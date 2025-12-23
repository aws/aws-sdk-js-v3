import {
  AccessDeniedException,
  AccessDeniedException$,
  ActionFilter$,
  ActionType,
  BCMRecommendedActions,
  BCMRecommendedActionsClient,
  BCMRecommendedActionsServiceException,
  Feature,
  FilterName,
  InternalServerException,
  InternalServerException$,
  ListRecommendedActions$,
  ListRecommendedActionsCommand,
  ListRecommendedActionsRequest$,
  ListRecommendedActionsResponse$,
  MatchOption,
  paginateListRecommendedActions,
  RecommendedAction$,
  RequestFilter$,
  Severity,
  ThrottlingException,
  ThrottlingException$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BCMRecommendedActionsClient === "function");
assert(typeof BCMRecommendedActions === "function");
// commands
assert(typeof ListRecommendedActionsCommand === "function");
assert(typeof ListRecommendedActions$ === "object");
// structural schemas
assert(typeof ActionFilter$ === "object");
assert(typeof ListRecommendedActionsRequest$ === "object");
assert(typeof ListRecommendedActionsResponse$ === "object");
assert(typeof RecommendedAction$ === "object");
assert(typeof RequestFilter$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof ActionType === "object");
assert(typeof Feature === "object");
assert(typeof FilterName === "object");
assert(typeof MatchOption === "object");
assert(typeof Severity === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof BCMRecommendedActionsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof BCMRecommendedActionsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ThrottlingException.prototype instanceof BCMRecommendedActionsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof BCMRecommendedActionsServiceException);
assert(typeof ValidationException$ === "object");
assert(BCMRecommendedActionsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRecommendedActions === "function");
console.log(`BCMRecommendedActions index test passed.`);
