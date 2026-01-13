import {
  DataPoint$,
  Forecast$,
  Forecastquery,
  ForecastqueryClient,
  ForecastqueryServiceException,
  InvalidInputException,
  InvalidInputException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  LimitExceededException,
  LimitExceededException$,
  QueryForecast$,
  QueryForecastCommand,
  QueryForecastRequest$,
  QueryForecastResponse$,
  QueryWhatIfForecast$,
  QueryWhatIfForecastCommand,
  QueryWhatIfForecastRequest$,
  QueryWhatIfForecastResponse$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ForecastqueryClient === "function");
assert(typeof Forecastquery === "function");
// commands
assert(typeof QueryForecastCommand === "function");
assert(typeof QueryForecast$ === "object");
assert(typeof QueryWhatIfForecastCommand === "function");
assert(typeof QueryWhatIfForecast$ === "object");
// structural schemas
assert(typeof DataPoint$ === "object");
assert(typeof Forecast$ === "object");
assert(typeof QueryForecastRequest$ === "object");
assert(typeof QueryForecastResponse$ === "object");
assert(typeof QueryWhatIfForecastRequest$ === "object");
assert(typeof QueryWhatIfForecastResponse$ === "object");
// errors
assert(InvalidInputException.prototype instanceof ForecastqueryServiceException);
assert(typeof InvalidInputException$ === "object");
assert(InvalidNextTokenException.prototype instanceof ForecastqueryServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(LimitExceededException.prototype instanceof ForecastqueryServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceInUseException.prototype instanceof ForecastqueryServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ForecastqueryServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ForecastqueryServiceException.prototype instanceof Error);
console.log(`Forecastquery index test passed.`);
