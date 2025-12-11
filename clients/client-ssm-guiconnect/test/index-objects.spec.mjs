import {
  AccessDeniedException,
  ConflictException,
  DeleteConnectionRecordingPreferencesCommand,
  GetConnectionRecordingPreferencesCommand,
  InternalServerException,
  ResourceNotFoundException,
  SSMGuiConnect,
  SSMGuiConnectClient,
  SSMGuiConnectServiceException,
  ServiceQuotaExceededException,
  ThrottlingException,
  UpdateConnectionRecordingPreferencesCommand,
  ValidationException,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SSMGuiConnectClient === "function");
assert(typeof SSMGuiConnect === "function");
// commands
assert(typeof DeleteConnectionRecordingPreferencesCommand === "function");
assert(typeof GetConnectionRecordingPreferencesCommand === "function");
assert(typeof UpdateConnectionRecordingPreferencesCommand === "function");
// errors
assert(AccessDeniedException.prototype instanceof SSMGuiConnectServiceException);
assert(ConflictException.prototype instanceof SSMGuiConnectServiceException);
assert(InternalServerException.prototype instanceof SSMGuiConnectServiceException);
assert(ResourceNotFoundException.prototype instanceof SSMGuiConnectServiceException);
assert(ServiceQuotaExceededException.prototype instanceof SSMGuiConnectServiceException);
assert(ThrottlingException.prototype instanceof SSMGuiConnectServiceException);
assert(ValidationException.prototype instanceof SSMGuiConnectServiceException);
assert(SSMGuiConnectServiceException.prototype instanceof Error);
console.log(`SSMGuiConnect index test passed.`);
