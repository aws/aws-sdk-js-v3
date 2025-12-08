import {
  AppConfigData,
  AppConfigDataClient,
  AppConfigDataServiceException,
  BadRequestException,
  BadRequestReason,
  GetLatestConfigurationCommand,
  InternalServerException,
  InvalidParameterProblem,
  ResourceNotFoundException,
  ResourceType,
  StartConfigurationSessionCommand,
  ThrottlingException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AppConfigDataClient === "function");
assert(typeof AppConfigData === "function");
// commands
assert(typeof GetLatestConfigurationCommand === "function");
assert(typeof StartConfigurationSessionCommand === "function");
// enums
assert(typeof BadRequestReason === "object");
assert(typeof InvalidParameterProblem === "object");
assert(typeof ResourceType === "object");
// errors
assert(BadRequestException.prototype instanceof AppConfigDataServiceException);
assert(InternalServerException.prototype instanceof AppConfigDataServiceException);
assert(ResourceNotFoundException.prototype instanceof AppConfigDataServiceException);
assert(ThrottlingException.prototype instanceof AppConfigDataServiceException);
assert(AppConfigDataServiceException.prototype instanceof Error);
console.log(`AppConfigData index test passed.`);
