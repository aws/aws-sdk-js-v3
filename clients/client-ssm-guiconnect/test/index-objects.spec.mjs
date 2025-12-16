import {
  AccessDeniedException,
  AccessDeniedException$,
  ConflictException,
  ConflictException$,
  ConnectionRecordingPreferences$,
  DeleteConnectionRecordingPreferences$,
  DeleteConnectionRecordingPreferencesCommand,
  DeleteConnectionRecordingPreferencesRequest$,
  DeleteConnectionRecordingPreferencesResponse$,
  GetConnectionRecordingPreferences$,
  GetConnectionRecordingPreferencesCommand,
  GetConnectionRecordingPreferencesResponse$,
  InternalServerException,
  InternalServerException$,
  RecordingDestinations$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3Bucket$,
  SSMGuiConnect,
  SSMGuiConnectClient,
  SSMGuiConnectServiceException,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ThrottlingException,
  ThrottlingException$,
  UpdateConnectionRecordingPreferences$,
  UpdateConnectionRecordingPreferencesCommand,
  UpdateConnectionRecordingPreferencesRequest$,
  UpdateConnectionRecordingPreferencesResponse$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SSMGuiConnectClient === "function");
assert(typeof SSMGuiConnect === "function");
// commands
assert(typeof DeleteConnectionRecordingPreferencesCommand === "function");
assert(typeof DeleteConnectionRecordingPreferences$ === "object");
assert(typeof GetConnectionRecordingPreferencesCommand === "function");
assert(typeof GetConnectionRecordingPreferences$ === "object");
assert(typeof UpdateConnectionRecordingPreferencesCommand === "function");
assert(typeof UpdateConnectionRecordingPreferences$ === "object");
// structural schemas
assert(typeof ConnectionRecordingPreferences$ === "object");
assert(typeof DeleteConnectionRecordingPreferencesRequest$ === "object");
assert(typeof DeleteConnectionRecordingPreferencesResponse$ === "object");
assert(typeof GetConnectionRecordingPreferencesResponse$ === "object");
assert(typeof RecordingDestinations$ === "object");
assert(typeof S3Bucket$ === "object");
assert(typeof UpdateConnectionRecordingPreferencesRequest$ === "object");
assert(typeof UpdateConnectionRecordingPreferencesResponse$ === "object");
// errors
assert(AccessDeniedException.prototype instanceof SSMGuiConnectServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof SSMGuiConnectServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof SSMGuiConnectServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SSMGuiConnectServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof SSMGuiConnectServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof SSMGuiConnectServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof SSMGuiConnectServiceException);
assert(typeof ValidationException$ === "object");
assert(SSMGuiConnectServiceException.prototype instanceof Error);
console.log(`SSMGuiConnect index test passed.`);
