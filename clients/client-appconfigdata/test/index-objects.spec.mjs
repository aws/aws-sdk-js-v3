import {
  AppConfigData,
  AppConfigDataClient,
  AppConfigDataServiceException,
  GetLatestConfigurationCommand,
  StartConfigurationSessionCommand,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AppConfigDataClient === "function");
assert(typeof AppConfigData === "function");
// commands
assert(typeof GetLatestConfigurationCommand === "function");
assert(typeof StartConfigurationSessionCommand === "function");
// errors
assert(AppConfigDataServiceException.prototype instanceof Error);
console.log(`AppConfigData index test passed.`);
