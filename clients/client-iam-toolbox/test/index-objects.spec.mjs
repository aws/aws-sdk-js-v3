import {
  AccessDeniedException,
  AccessDeniedException$,
  AttachedTo$,
  EvaluatedEffect,
  Evaluation$,
  GetRequestAuthorizationDetails$,
  GetRequestAuthorizationDetailsCommand,
  GetRequestAuthorizationDetailsInput$,
  GetRequestAuthorizationDetailsOutput$,
  IAMToolbox,
  IAMToolboxClient,
  IAMToolboxServiceException,
  InternalServerException,
  InternalServerException$,
  MatchedPolicy$,
  MatchedStatement$,
  paginateGetRequestAuthorizationDetails,
  PolicyInfo$,
  PolicyType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  StatementEffect,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof IAMToolboxClient === "function");
assert(typeof IAMToolbox === "function");
// commands
assert(typeof GetRequestAuthorizationDetailsCommand === "function");
assert(typeof GetRequestAuthorizationDetails$ === "object");
// structural schemas
assert(typeof AttachedTo$ === "object");
assert(typeof Evaluation$ === "object");
assert(typeof GetRequestAuthorizationDetailsInput$ === "object");
assert(typeof GetRequestAuthorizationDetailsOutput$ === "object");
assert(typeof MatchedPolicy$ === "object");
assert(typeof MatchedStatement$ === "object");
assert(typeof PolicyInfo$ === "object");
// enums
assert(typeof EvaluatedEffect === "object");
assert(typeof PolicyType === "object");
assert(typeof StatementEffect === "object");
// errors
assert(AccessDeniedException.prototype instanceof IAMToolboxServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof IAMToolboxServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof IAMToolboxServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ValidationException.prototype instanceof IAMToolboxServiceException);
assert(typeof ValidationException$ === "object");
assert(IAMToolboxServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetRequestAuthorizationDetails === "function");
console.log(`IAMToolbox index test passed.`);
