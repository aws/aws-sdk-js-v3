import {
  AppConfigData,
  AppConfigDataClient,
  AppConfigDataServiceException,
  BadRequestDetails$,
  BadRequestException,
  BadRequestException$,
  BadRequestReason,
  GetLatestConfiguration$,
  GetLatestConfigurationCommand,
  GetLatestConfigurationRequest$,
  GetLatestConfigurationResponse$,
  InternalServerException,
  InternalServerException$,
  InvalidParameterDetail$,
  InvalidParameterProblem,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  StartConfigurationSession$,
  StartConfigurationSessionCommand,
  StartConfigurationSessionRequest$,
  StartConfigurationSessionResponse$,
  ThrottlingException,
  ThrottlingException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AppConfigDataClient === "function");
assert(typeof AppConfigData === "function");
// commands
assert(typeof GetLatestConfigurationCommand === "function");
assert(typeof GetLatestConfiguration$ === "object");
assert(typeof StartConfigurationSessionCommand === "function");
assert(typeof StartConfigurationSession$ === "object");
// structural schemas
assert(typeof BadRequestDetails$ === "object");
assert(typeof GetLatestConfigurationRequest$ === "object");
assert(typeof GetLatestConfigurationResponse$ === "object");
assert(typeof InvalidParameterDetail$ === "object");
assert(typeof StartConfigurationSessionRequest$ === "object");
assert(typeof StartConfigurationSessionResponse$ === "object");
// enums
assert(typeof BadRequestReason === "object");
assert(typeof InvalidParameterProblem === "object");
assert(typeof ResourceType === "object");
// errors
assert(BadRequestException.prototype instanceof AppConfigDataServiceException);
assert(typeof BadRequestException$ === "object");
assert(InternalServerException.prototype instanceof AppConfigDataServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof AppConfigDataServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof AppConfigDataServiceException);
assert(typeof ThrottlingException$ === "object");
assert(AppConfigDataServiceException.prototype instanceof Error);
console.log(`AppConfigData index test passed.`);
