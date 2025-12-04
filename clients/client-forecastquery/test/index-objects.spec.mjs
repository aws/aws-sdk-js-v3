import {
  Forecastquery,
  ForecastqueryClient,
  ForecastqueryServiceException,
  QueryForecastCommand,
  QueryWhatIfForecastCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ForecastqueryClient === "function");
assert(typeof Forecastquery === "function");
// commands
assert(typeof QueryForecastCommand === "function");
assert(typeof QueryWhatIfForecastCommand === "function");
// errors
assert(ForecastqueryServiceException.prototype instanceof Error);
console.log(`Forecastquery index test passed.`);
