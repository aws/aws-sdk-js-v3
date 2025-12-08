import {
  Forecastquery,
  ForecastqueryClient,
  ForecastqueryServiceException,
  InvalidInputException,
  InvalidNextTokenException,
  LimitExceededException,
  QueryForecastCommand,
  QueryWhatIfForecastCommand,
  ResourceInUseException,
  ResourceNotFoundException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ForecastqueryClient === "function");
assert(typeof Forecastquery === "function");
// commands
assert(typeof QueryForecastCommand === "function");
assert(typeof QueryWhatIfForecastCommand === "function");
// errors
assert(InvalidInputException.prototype instanceof ForecastqueryServiceException);
assert(InvalidNextTokenException.prototype instanceof ForecastqueryServiceException);
assert(LimitExceededException.prototype instanceof ForecastqueryServiceException);
assert(ResourceInUseException.prototype instanceof ForecastqueryServiceException);
assert(ResourceNotFoundException.prototype instanceof ForecastqueryServiceException);
assert(ForecastqueryServiceException.prototype instanceof Error);
console.log(`Forecastquery index test passed.`);
