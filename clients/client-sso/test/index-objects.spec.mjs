import {
  GetRoleCredentialsCommand,
  InvalidRequestException,
  ListAccountRolesCommand,
  ListAccountsCommand,
  LogoutCommand,
  ResourceNotFoundException,
  SSO,
  SSOClient,
  SSOServiceException,
  TooManyRequestsException,
  UnauthorizedException,
  paginateListAccountRoles,
  paginateListAccounts,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof SSOClient === "function");
assert(typeof SSO === "function");
// commands
assert(typeof GetRoleCredentialsCommand === "function");
assert(typeof ListAccountRolesCommand === "function");
assert(typeof ListAccountsCommand === "function");
assert(typeof LogoutCommand === "function");
// errors
assert(InvalidRequestException.prototype instanceof SSOServiceException);
assert(ResourceNotFoundException.prototype instanceof SSOServiceException);
assert(TooManyRequestsException.prototype instanceof SSOServiceException);
assert(UnauthorizedException.prototype instanceof SSOServiceException);
assert(SSOServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAccountRoles === "function");
assert(typeof paginateListAccounts === "function");
console.log(`SSO index test passed.`);
