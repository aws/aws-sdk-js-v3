import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessDetails$,
  AccessType,
  AccountAccessRuntime,
  AccountAccessRuntimeClient,
  AccountAccessRuntimeServiceException,
  CredentialsDetails$,
  GetRoleCredentials$,
  GetRoleCredentialsCommand,
  GetRoleCredentialsRequest$,
  GetRoleCredentialsResponse$,
  InternalServerException,
  InternalServerException$,
  ListRoles$,
  ListRolesCommand,
  ListRolesRequest$,
  ListRolesResponse$,
  paginateListRoles,
  ProgrammaticAccessDetails$,
  ThrottlingException,
  ThrottlingException$,
  UnauthorizedException,
  UnauthorizedException$,
  ValidationException,
  ValidationException$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AccountAccessRuntimeClient === "function");
assert(typeof AccountAccessRuntime === "function");
// commands
assert(typeof GetRoleCredentialsCommand === "function");
assert(typeof GetRoleCredentials$ === "object");
assert(typeof ListRolesCommand === "function");
assert(typeof ListRoles$ === "object");
// structural schemas
assert(typeof AccessDetails$ === "object");
assert(typeof CredentialsDetails$ === "object");
assert(typeof GetRoleCredentialsRequest$ === "object");
assert(typeof GetRoleCredentialsResponse$ === "object");
assert(typeof ListRolesRequest$ === "object");
assert(typeof ListRolesResponse$ === "object");
assert(typeof ProgrammaticAccessDetails$ === "object");
// enums
assert(typeof AccessType === "object");
// errors
assert(AccessDeniedException.prototype instanceof AccountAccessRuntimeServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof AccountAccessRuntimeServiceException);
assert(typeof InternalServerException$ === "object");
assert(ThrottlingException.prototype instanceof AccountAccessRuntimeServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnauthorizedException.prototype instanceof AccountAccessRuntimeServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(ValidationException.prototype instanceof AccountAccessRuntimeServiceException);
assert(typeof ValidationException$ === "object");
assert(AccountAccessRuntimeServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRoles === "function");
console.log(`AccountAccessRuntime index test passed.`);
