import {
  AccountInfo$,
  GetRoleCredentials$,
  GetRoleCredentialsCommand,
  GetRoleCredentialsRequest$,
  GetRoleCredentialsResponse$,
  InvalidRequestException,
  InvalidRequestException$,
  ListAccountRoles$,
  ListAccountRolesCommand,
  ListAccountRolesRequest$,
  ListAccountRolesResponse$,
  ListAccounts$,
  ListAccountsCommand,
  ListAccountsRequest$,
  ListAccountsResponse$,
  Logout$,
  LogoutCommand,
  LogoutRequest$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RoleCredentials$,
  RoleInfo$,
  SSO,
  SSOClient,
  SSOServiceException,
  TooManyRequestsException,
  TooManyRequestsException$,
  UnauthorizedException,
  UnauthorizedException$,
  paginateListAccountRoles,
  paginateListAccounts,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SSOClient === "function");
assert(typeof SSO === "function");
// commands
assert(typeof GetRoleCredentialsCommand === "function");
assert(typeof GetRoleCredentials$ === "object");
assert(typeof ListAccountRolesCommand === "function");
assert(typeof ListAccountRoles$ === "object");
assert(typeof ListAccountsCommand === "function");
assert(typeof ListAccounts$ === "object");
assert(typeof LogoutCommand === "function");
assert(typeof Logout$ === "object");
// structural schemas
assert(typeof AccountInfo$ === "object");
assert(typeof GetRoleCredentialsRequest$ === "object");
assert(typeof GetRoleCredentialsResponse$ === "object");
assert(typeof ListAccountRolesRequest$ === "object");
assert(typeof ListAccountRolesResponse$ === "object");
assert(typeof ListAccountsRequest$ === "object");
assert(typeof ListAccountsResponse$ === "object");
assert(typeof LogoutRequest$ === "object");
assert(typeof RoleCredentials$ === "object");
assert(typeof RoleInfo$ === "object");
// errors
assert(InvalidRequestException.prototype instanceof SSOServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(ResourceNotFoundException.prototype instanceof SSOServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(TooManyRequestsException.prototype instanceof SSOServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(UnauthorizedException.prototype instanceof SSOServiceException);
assert(typeof UnauthorizedException$ === "object");
assert(SSOServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAccountRoles === "function");
assert(typeof paginateListAccounts === "function");
console.log(`SSO index test passed.`);
