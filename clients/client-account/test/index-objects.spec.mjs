import {
  AcceptPrimaryEmailUpdateCommand,
  AccessDeniedException,
  Account,
  AccountClient,
  AccountServiceException,
  AlternateContactType,
  AwsAccountState,
  ConflictException,
  DeleteAlternateContactCommand,
  DisableRegionCommand,
  EnableRegionCommand,
  GetAccountInformationCommand,
  GetAlternateContactCommand,
  GetContactInformationCommand,
  GetGovCloudAccountInformationCommand,
  GetPrimaryEmailCommand,
  GetRegionOptStatusCommand,
  InternalServerException,
  ListRegionsCommand,
  PrimaryEmailUpdateStatus,
  PutAccountNameCommand,
  PutAlternateContactCommand,
  PutContactInformationCommand,
  RegionOptStatus,
  ResourceNotFoundException,
  ResourceUnavailableException,
  StartPrimaryEmailUpdateCommand,
  TooManyRequestsException,
  ValidationException,
  ValidationExceptionReason,
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
assert(typeof GetGovCloudAccountInformationCommand === "function");
assert(typeof GetPrimaryEmailCommand === "function");
assert(typeof GetRegionOptStatusCommand === "function");
assert(typeof ListRegionsCommand === "function");
assert(typeof PutAccountNameCommand === "function");
assert(typeof PutAlternateContactCommand === "function");
assert(typeof PutContactInformationCommand === "function");
assert(typeof StartPrimaryEmailUpdateCommand === "function");
// enums
assert(typeof AlternateContactType === "object");
assert(typeof AwsAccountState === "object");
assert(typeof PrimaryEmailUpdateStatus === "object");
assert(typeof RegionOptStatus === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof AccountServiceException);
assert(ConflictException.prototype instanceof AccountServiceException);
assert(InternalServerException.prototype instanceof AccountServiceException);
assert(ResourceNotFoundException.prototype instanceof AccountServiceException);
assert(ResourceUnavailableException.prototype instanceof AccountServiceException);
assert(TooManyRequestsException.prototype instanceof AccountServiceException);
assert(ValidationException.prototype instanceof AccountServiceException);
assert(AccountServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRegions === "function");
console.log(`Account index test passed.`);
