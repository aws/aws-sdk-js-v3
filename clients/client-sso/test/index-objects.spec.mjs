import {
  GetRoleCredentialsCommand,
  ListAccountRolesCommand,
  ListAccountsCommand,
  LogoutCommand,
  SSO,
  SSOClient,
  SSOServiceException,
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
assert(SSOServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAccountRoles === "function");
assert(typeof paginateListAccounts === "function");
console.log(`SSO index test passed.`);
