import {
  GetActionRecommendations$,
  GetActionRecommendationsCommand,
  GetActionRecommendationsRequest$,
  GetActionRecommendationsResponse$,
  GetPersonalizedRanking$,
  GetPersonalizedRankingCommand,
  GetPersonalizedRankingRequest$,
  GetPersonalizedRankingResponse$,
  GetRecommendations$,
  GetRecommendationsCommand,
  GetRecommendationsRequest$,
  GetRecommendationsResponse$,
  InvalidInputException,
  InvalidInputException$,
  PersonalizeRuntime,
  PersonalizeRuntimeClient,
  PersonalizeRuntimeServiceException,
  PredictedAction$,
  PredictedItem$,
  Promotion$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PersonalizeRuntimeClient === "function");
assert(typeof PersonalizeRuntime === "function");
// commands
assert(typeof GetActionRecommendationsCommand === "function");
assert(typeof GetActionRecommendations$ === "object");
assert(typeof GetPersonalizedRankingCommand === "function");
assert(typeof GetPersonalizedRanking$ === "object");
assert(typeof GetRecommendationsCommand === "function");
assert(typeof GetRecommendations$ === "object");
// structural schemas
assert(typeof GetActionRecommendationsRequest$ === "object");
assert(typeof GetActionRecommendationsResponse$ === "object");
assert(typeof GetPersonalizedRankingRequest$ === "object");
assert(typeof GetPersonalizedRankingResponse$ === "object");
assert(typeof GetRecommendationsRequest$ === "object");
assert(typeof GetRecommendationsResponse$ === "object");
assert(typeof PredictedAction$ === "object");
assert(typeof PredictedItem$ === "object");
assert(typeof Promotion$ === "object");
// errors
assert(InvalidInputException.prototype instanceof PersonalizeRuntimeServiceException);
assert(typeof InvalidInputException$ === "object");
assert(ResourceNotFoundException.prototype instanceof PersonalizeRuntimeServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(PersonalizeRuntimeServiceException.prototype instanceof Error);
console.log(`PersonalizeRuntime index test passed.`);
