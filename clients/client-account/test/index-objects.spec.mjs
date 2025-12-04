import {
  AcceptPrimaryEmailUpdateCommand,
  Account,
  AccountClient,
  AccountServiceException,
  AlternateContactType,
  DeleteAlternateContactCommand,
  DisableRegionCommand,
  EnableRegionCommand,
  GetAccountInformationCommand,
  GetAlternateContactCommand,
  GetContactInformationCommand,
  GetPrimaryEmailCommand,
  GetRegionOptStatusCommand,
  ListRegionsCommand,
  PrimaryEmailUpdateStatus,
  PutAccountNameCommand,
  PutAlternateContactCommand,
  PutContactInformationCommand,
  RegionOptStatus,
  StartPrimaryEmailUpdateCommand,
  paginateListRegions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AccountClient === "function");
assert(typeof Account === "function");
// commands
assert(typeof AcceptPrimaryEmailUpdateCommand === "function");
assert(typeof DeleteAlternateContactCommand === "function");
assert(typeof DisableRegionCommand === "function");
assert(typeof EnableRegionCommand === "function");
assert(typeof GetAccountInformationCommand === "function");
assert(typeof GetAlternateContactCommand === "function");
assert(typeof GetContactInformationCommand === "function");
assert(typeof GetPrimaryEmailCommand === "function");
assert(typeof GetRegionOptStatusCommand === "function");
assert(typeof ListRegionsCommand === "function");
assert(typeof PutAccountNameCommand === "function");
assert(typeof PutAlternateContactCommand === "function");
assert(typeof PutContactInformationCommand === "function");
assert(typeof StartPrimaryEmailUpdateCommand === "function");
// enums
assert(typeof AlternateContactType === "object");
assert(typeof PrimaryEmailUpdateStatus === "object");
assert(typeof RegionOptStatus === "object");
// errors
assert(AccountServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRegions === "function");
console.log(`Account index test passed.`);
