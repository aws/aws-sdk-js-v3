import {
  AcceptPrimaryEmailUpdate$,
  AcceptPrimaryEmailUpdateCommand,
  AcceptPrimaryEmailUpdateRequest$,
  AcceptPrimaryEmailUpdateResponse$,
  AccessDeniedException,
  AccessDeniedException$,
  Account,
  AccountClient,
  AccountServiceException,
  AlternateContact$,
  AlternateContactType,
  AwsAccountState,
  ConflictException,
  ConflictException$,
  ContactInformation$,
  DeleteAlternateContact$,
  DeleteAlternateContactCommand,
  DeleteAlternateContactRequest$,
  DisableRegion$,
  DisableRegionCommand,
  DisableRegionRequest$,
  EnableRegion$,
  EnableRegionCommand,
  EnableRegionRequest$,
  GetAccountInformation$,
  GetAccountInformationCommand,
  GetAccountInformationRequest$,
  GetAccountInformationResponse$,
  GetAlternateContact$,
  GetAlternateContactCommand,
  GetAlternateContactRequest$,
  GetAlternateContactResponse$,
  GetContactInformation$,
  GetContactInformationCommand,
  GetContactInformationRequest$,
  GetContactInformationResponse$,
  GetGovCloudAccountInformation$,
  GetGovCloudAccountInformationCommand,
  GetGovCloudAccountInformationRequest$,
  GetGovCloudAccountInformationResponse$,
  GetPrimaryEmail$,
  GetPrimaryEmailCommand,
  GetPrimaryEmailRequest$,
  GetPrimaryEmailResponse$,
  GetRegionOptStatus$,
  GetRegionOptStatusCommand,
  GetRegionOptStatusRequest$,
  GetRegionOptStatusResponse$,
  InternalServerException,
  InternalServerException$,
  ListRegions$,
  ListRegionsCommand,
  ListRegionsRequest$,
  ListRegionsResponse$,
  PrimaryEmailUpdateStatus,
  PutAccountName$,
  PutAccountNameCommand,
  PutAccountNameRequest$,
  PutAlternateContact$,
  PutAlternateContactCommand,
  PutAlternateContactRequest$,
  PutContactInformation$,
  PutContactInformationCommand,
  PutContactInformationRequest$,
  Region$,
  RegionOptStatus,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceUnavailableException,
  ResourceUnavailableException$,
  StartPrimaryEmailUpdate$,
  StartPrimaryEmailUpdateCommand,
  StartPrimaryEmailUpdateRequest$,
  StartPrimaryEmailUpdateResponse$,
  TooManyRequestsException,
  TooManyRequestsException$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  paginateListRegions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof AccountClient === "function");
assert(typeof Account === "function");
// commands
assert(typeof AcceptPrimaryEmailUpdateCommand === "function");
assert(typeof AcceptPrimaryEmailUpdate$ === "object");
assert(typeof DeleteAlternateContactCommand === "function");
assert(typeof DeleteAlternateContact$ === "object");
assert(typeof DisableRegionCommand === "function");
assert(typeof DisableRegion$ === "object");
assert(typeof EnableRegionCommand === "function");
assert(typeof EnableRegion$ === "object");
assert(typeof GetAccountInformationCommand === "function");
assert(typeof GetAccountInformation$ === "object");
assert(typeof GetAlternateContactCommand === "function");
assert(typeof GetAlternateContact$ === "object");
assert(typeof GetContactInformationCommand === "function");
assert(typeof GetContactInformation$ === "object");
assert(typeof GetGovCloudAccountInformationCommand === "function");
assert(typeof GetGovCloudAccountInformation$ === "object");
assert(typeof GetPrimaryEmailCommand === "function");
assert(typeof GetPrimaryEmail$ === "object");
assert(typeof GetRegionOptStatusCommand === "function");
assert(typeof GetRegionOptStatus$ === "object");
assert(typeof ListRegionsCommand === "function");
assert(typeof ListRegions$ === "object");
assert(typeof PutAccountNameCommand === "function");
assert(typeof PutAccountName$ === "object");
assert(typeof PutAlternateContactCommand === "function");
assert(typeof PutAlternateContact$ === "object");
assert(typeof PutContactInformationCommand === "function");
assert(typeof PutContactInformation$ === "object");
assert(typeof StartPrimaryEmailUpdateCommand === "function");
assert(typeof StartPrimaryEmailUpdate$ === "object");
// structural schemas
assert(typeof AcceptPrimaryEmailUpdateRequest$ === "object");
assert(typeof AcceptPrimaryEmailUpdateResponse$ === "object");
assert(typeof AlternateContact$ === "object");
assert(typeof ContactInformation$ === "object");
assert(typeof DeleteAlternateContactRequest$ === "object");
assert(typeof DisableRegionRequest$ === "object");
assert(typeof EnableRegionRequest$ === "object");
assert(typeof GetAccountInformationRequest$ === "object");
assert(typeof GetAccountInformationResponse$ === "object");
assert(typeof GetAlternateContactRequest$ === "object");
assert(typeof GetAlternateContactResponse$ === "object");
assert(typeof GetContactInformationRequest$ === "object");
assert(typeof GetContactInformationResponse$ === "object");
assert(typeof GetGovCloudAccountInformationRequest$ === "object");
assert(typeof GetGovCloudAccountInformationResponse$ === "object");
assert(typeof GetPrimaryEmailRequest$ === "object");
assert(typeof GetPrimaryEmailResponse$ === "object");
assert(typeof GetRegionOptStatusRequest$ === "object");
assert(typeof GetRegionOptStatusResponse$ === "object");
assert(typeof ListRegionsRequest$ === "object");
assert(typeof ListRegionsResponse$ === "object");
assert(typeof PutAccountNameRequest$ === "object");
assert(typeof PutAlternateContactRequest$ === "object");
assert(typeof PutContactInformationRequest$ === "object");
assert(typeof Region$ === "object");
assert(typeof StartPrimaryEmailUpdateRequest$ === "object");
assert(typeof StartPrimaryEmailUpdateResponse$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof AlternateContactType === "object");
assert(typeof AwsAccountState === "object");
assert(typeof PrimaryEmailUpdateStatus === "object");
assert(typeof RegionOptStatus === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof AccountServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof AccountServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof AccountServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof AccountServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourceUnavailableException.prototype instanceof AccountServiceException);
assert(typeof ResourceUnavailableException$ === "object");
assert(TooManyRequestsException.prototype instanceof AccountServiceException);
assert(typeof TooManyRequestsException$ === "object");
assert(ValidationException.prototype instanceof AccountServiceException);
assert(typeof ValidationException$ === "object");
assert(AccountServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListRegions === "function");
console.log(`Account index test passed.`);
