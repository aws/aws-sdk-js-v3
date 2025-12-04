import {
  AcceptDomainTransferFromAnotherAwsAccountCommand,
  AssociateDelegationSignerToDomainCommand,
  CancelDomainTransferToAnotherAwsAccountCommand,
  CheckDomainAvailabilityCommand,
  CheckDomainTransferabilityCommand,
  ContactType,
  CountryCode,
  DeleteDomainCommand,
  DeleteTagsForDomainCommand,
  DisableDomainAutoRenewCommand,
  DisableDomainTransferLockCommand,
  DisassociateDelegationSignerFromDomainCommand,
  DomainAvailability,
  EnableDomainAutoRenewCommand,
  EnableDomainTransferLockCommand,
  ExtraParamName,
  GetContactReachabilityStatusCommand,
  GetDomainDetailCommand,
  GetDomainSuggestionsCommand,
  GetOperationDetailCommand,
  ListDomainsAttributeName,
  ListDomainsCommand,
  ListOperationsCommand,
  ListOperationsSortAttributeName,
  ListPricesCommand,
  ListTagsForDomainCommand,
  OperationStatus,
  OperationType,
  Operator,
  PushDomainCommand,
  ReachabilityStatus,
  RegisterDomainCommand,
  RejectDomainTransferFromAnotherAwsAccountCommand,
  RenewDomainCommand,
  ResendContactReachabilityEmailCommand,
  ResendOperationAuthorizationCommand,
  RetrieveDomainAuthCodeCommand,
  Route53Domains,
  Route53DomainsClient,
  Route53DomainsServiceException,
  SortOrder,
  StatusFlag,
  TransferDomainCommand,
  TransferDomainToAnotherAwsAccountCommand,
  Transferable,
  UpdateDomainContactCommand,
  UpdateDomainContactPrivacyCommand,
  UpdateDomainNameserversCommand,
  UpdateTagsForDomainCommand,
  ViewBillingCommand,
  paginateListDomains,
  paginateListOperations,
  paginateListPrices,
  paginateViewBilling,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Route53DomainsClient === "function");
assert(typeof Route53Domains === "function");
// commands
assert(typeof AcceptDomainTransferFromAnotherAwsAccountCommand === "function");
assert(typeof AssociateDelegationSignerToDomainCommand === "function");
assert(typeof CancelDomainTransferToAnotherAwsAccountCommand === "function");
assert(typeof CheckDomainAvailabilityCommand === "function");
assert(typeof CheckDomainTransferabilityCommand === "function");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteTagsForDomainCommand === "function");
assert(typeof DisableDomainAutoRenewCommand === "function");
assert(typeof DisableDomainTransferLockCommand === "function");
assert(typeof DisassociateDelegationSignerFromDomainCommand === "function");
assert(typeof EnableDomainAutoRenewCommand === "function");
assert(typeof EnableDomainTransferLockCommand === "function");
assert(typeof GetContactReachabilityStatusCommand === "function");
assert(typeof GetDomainDetailCommand === "function");
assert(typeof GetDomainSuggestionsCommand === "function");
assert(typeof GetOperationDetailCommand === "function");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListOperationsCommand === "function");
assert(typeof ListPricesCommand === "function");
assert(typeof ListTagsForDomainCommand === "function");
assert(typeof PushDomainCommand === "function");
assert(typeof RegisterDomainCommand === "function");
assert(typeof RejectDomainTransferFromAnotherAwsAccountCommand === "function");
assert(typeof RenewDomainCommand === "function");
assert(typeof ResendContactReachabilityEmailCommand === "function");
assert(typeof ResendOperationAuthorizationCommand === "function");
assert(typeof RetrieveDomainAuthCodeCommand === "function");
assert(typeof TransferDomainCommand === "function");
assert(typeof TransferDomainToAnotherAwsAccountCommand === "function");
assert(typeof UpdateDomainContactCommand === "function");
assert(typeof UpdateDomainContactPrivacyCommand === "function");
assert(typeof UpdateDomainNameserversCommand === "function");
assert(typeof UpdateTagsForDomainCommand === "function");
assert(typeof ViewBillingCommand === "function");
// enums
assert(typeof ContactType === "object");
assert(typeof CountryCode === "object");
assert(typeof DomainAvailability === "object");
assert(typeof ExtraParamName === "object");
assert(typeof ListDomainsAttributeName === "object");
assert(typeof ListOperationsSortAttributeName === "object");
assert(typeof OperationStatus === "object");
assert(typeof OperationType === "object");
assert(typeof Operator === "object");
assert(typeof ReachabilityStatus === "object");
assert(typeof SortOrder === "object");
assert(typeof StatusFlag === "object");
assert(typeof Transferable === "object");
// errors
assert(Route53DomainsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDomains === "function");
assert(typeof paginateListOperations === "function");
assert(typeof paginateListPrices === "function");
assert(typeof paginateViewBilling === "function");
console.log(`Route53Domains index test passed.`);
