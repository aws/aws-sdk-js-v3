import {
  GetActionRecommendationsCommand,
  GetPersonalizedRankingCommand,
  GetRecommendationsCommand,
  PersonalizeRuntime,
  PersonalizeRuntimeClient,
  PersonalizeRuntimeServiceException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PersonalizeRuntimeClient === "function");
assert(typeof PersonalizeRuntime === "function");
// commands
assert(typeof GetActionRecommendationsCommand === "function");
assert(typeof GetPersonalizedRankingCommand === "function");
assert(typeof GetRecommendationsCommand === "function");
// errors
assert(PersonalizeRuntimeServiceException.prototype instanceof Error);
console.log(`PersonalizeRuntime index test passed.`);
