import {
  AcceptDomainTransferFromAnotherAwsAccount$,
  AcceptDomainTransferFromAnotherAwsAccountCommand,
  AcceptDomainTransferFromAnotherAwsAccountRequest$,
  AcceptDomainTransferFromAnotherAwsAccountResponse$,
  AssociateDelegationSignerToDomain$,
  AssociateDelegationSignerToDomainCommand,
  AssociateDelegationSignerToDomainRequest$,
  AssociateDelegationSignerToDomainResponse$,
  BillingRecord$,
  CancelDomainTransferToAnotherAwsAccount$,
  CancelDomainTransferToAnotherAwsAccountCommand,
  CancelDomainTransferToAnotherAwsAccountRequest$,
  CancelDomainTransferToAnotherAwsAccountResponse$,
  CheckDomainAvailability$,
  CheckDomainAvailabilityCommand,
  CheckDomainAvailabilityRequest$,
  CheckDomainAvailabilityResponse$,
  CheckDomainTransferability$,
  CheckDomainTransferabilityCommand,
  CheckDomainTransferabilityRequest$,
  CheckDomainTransferabilityResponse$,
  Consent$,
  ContactDetail$,
  ContactType,
  CountryCode,
  DeleteDomain$,
  DeleteDomainCommand,
  DeleteDomainRequest$,
  DeleteDomainResponse$,
  DeleteTagsForDomain$,
  DeleteTagsForDomainCommand,
  DeleteTagsForDomainRequest$,
  DeleteTagsForDomainResponse$,
  DisableDomainAutoRenew$,
  DisableDomainAutoRenewCommand,
  DisableDomainAutoRenewRequest$,
  DisableDomainAutoRenewResponse$,
  DisableDomainTransferLock$,
  DisableDomainTransferLockCommand,
  DisableDomainTransferLockRequest$,
  DisableDomainTransferLockResponse$,
  DisassociateDelegationSignerFromDomain$,
  DisassociateDelegationSignerFromDomainCommand,
  DisassociateDelegationSignerFromDomainRequest$,
  DisassociateDelegationSignerFromDomainResponse$,
  DnssecKey$,
  DnssecLimitExceeded,
  DnssecLimitExceeded$,
  DnssecSigningAttributes$,
  DomainAvailability,
  DomainLimitExceeded,
  DomainLimitExceeded$,
  DomainPrice$,
  DomainSuggestion$,
  DomainSummary$,
  DomainTransferability$,
  DuplicateRequest,
  DuplicateRequest$,
  EnableDomainAutoRenew$,
  EnableDomainAutoRenewCommand,
  EnableDomainAutoRenewRequest$,
  EnableDomainAutoRenewResponse$,
  EnableDomainTransferLock$,
  EnableDomainTransferLockCommand,
  EnableDomainTransferLockRequest$,
  EnableDomainTransferLockResponse$,
  ExtraParam$,
  ExtraParamName,
  FilterCondition$,
  GetContactReachabilityStatus$,
  GetContactReachabilityStatusCommand,
  GetContactReachabilityStatusRequest$,
  GetContactReachabilityStatusResponse$,
  GetDomainDetail$,
  GetDomainDetailCommand,
  GetDomainDetailRequest$,
  GetDomainDetailResponse$,
  GetDomainSuggestions$,
  GetDomainSuggestionsCommand,
  GetDomainSuggestionsRequest$,
  GetDomainSuggestionsResponse$,
  GetOperationDetail$,
  GetOperationDetailCommand,
  GetOperationDetailRequest$,
  GetOperationDetailResponse$,
  InvalidInput,
  InvalidInput$,
  ListDomains$,
  ListDomainsAttributeName,
  ListDomainsCommand,
  ListDomainsRequest$,
  ListDomainsResponse$,
  ListOperations$,
  ListOperationsCommand,
  ListOperationsRequest$,
  ListOperationsResponse$,
  ListOperationsSortAttributeName,
  ListPrices$,
  ListPricesCommand,
  ListPricesRequest$,
  ListPricesResponse$,
  ListTagsForDomain$,
  ListTagsForDomainCommand,
  ListTagsForDomainRequest$,
  ListTagsForDomainResponse$,
  Nameserver$,
  OperationLimitExceeded,
  OperationLimitExceeded$,
  OperationStatus,
  OperationSummary$,
  OperationType,
  Operator,
  PriceWithCurrency$,
  PushDomain$,
  PushDomainCommand,
  PushDomainRequest$,
  ReachabilityStatus,
  RegisterDomain$,
  RegisterDomainCommand,
  RegisterDomainRequest$,
  RegisterDomainResponse$,
  RejectDomainTransferFromAnotherAwsAccount$,
  RejectDomainTransferFromAnotherAwsAccountCommand,
  RejectDomainTransferFromAnotherAwsAccountRequest$,
  RejectDomainTransferFromAnotherAwsAccountResponse$,
  RenewDomain$,
  RenewDomainCommand,
  RenewDomainRequest$,
  RenewDomainResponse$,
  ResendContactReachabilityEmail$,
  ResendContactReachabilityEmailCommand,
  ResendContactReachabilityEmailRequest$,
  ResendContactReachabilityEmailResponse$,
  ResendOperationAuthorization$,
  ResendOperationAuthorizationCommand,
  ResendOperationAuthorizationRequest$,
  RetrieveDomainAuthCode$,
  RetrieveDomainAuthCodeCommand,
  RetrieveDomainAuthCodeRequest$,
  RetrieveDomainAuthCodeResponse$,
  Route53Domains,
  Route53DomainsClient,
  Route53DomainsServiceException,
  SortCondition$,
  SortOrder,
  StatusFlag,
  TLDRulesViolation,
  TLDRulesViolation$,
  Tag$,
  TransferDomain$,
  TransferDomainCommand,
  TransferDomainRequest$,
  TransferDomainResponse$,
  TransferDomainToAnotherAwsAccount$,
  TransferDomainToAnotherAwsAccountCommand,
  TransferDomainToAnotherAwsAccountRequest$,
  TransferDomainToAnotherAwsAccountResponse$,
  Transferable,
  UnsupportedTLD,
  UnsupportedTLD$,
  UpdateDomainContact$,
  UpdateDomainContactCommand,
  UpdateDomainContactPrivacy$,
  UpdateDomainContactPrivacyCommand,
  UpdateDomainContactPrivacyRequest$,
  UpdateDomainContactPrivacyResponse$,
  UpdateDomainContactRequest$,
  UpdateDomainContactResponse$,
  UpdateDomainNameservers$,
  UpdateDomainNameserversCommand,
  UpdateDomainNameserversRequest$,
  UpdateDomainNameserversResponse$,
  UpdateTagsForDomain$,
  UpdateTagsForDomainCommand,
  UpdateTagsForDomainRequest$,
  UpdateTagsForDomainResponse$,
  ViewBilling$,
  ViewBillingCommand,
  ViewBillingRequest$,
  ViewBillingResponse$,
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
assert(typeof AcceptDomainTransferFromAnotherAwsAccount$ === "object");
assert(typeof AssociateDelegationSignerToDomainCommand === "function");
assert(typeof AssociateDelegationSignerToDomain$ === "object");
assert(typeof CancelDomainTransferToAnotherAwsAccountCommand === "function");
assert(typeof CancelDomainTransferToAnotherAwsAccount$ === "object");
assert(typeof CheckDomainAvailabilityCommand === "function");
assert(typeof CheckDomainAvailability$ === "object");
assert(typeof CheckDomainTransferabilityCommand === "function");
assert(typeof CheckDomainTransferability$ === "object");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteDomain$ === "object");
assert(typeof DeleteTagsForDomainCommand === "function");
assert(typeof DeleteTagsForDomain$ === "object");
assert(typeof DisableDomainAutoRenewCommand === "function");
assert(typeof DisableDomainAutoRenew$ === "object");
assert(typeof DisableDomainTransferLockCommand === "function");
assert(typeof DisableDomainTransferLock$ === "object");
assert(typeof DisassociateDelegationSignerFromDomainCommand === "function");
assert(typeof DisassociateDelegationSignerFromDomain$ === "object");
assert(typeof EnableDomainAutoRenewCommand === "function");
assert(typeof EnableDomainAutoRenew$ === "object");
assert(typeof EnableDomainTransferLockCommand === "function");
assert(typeof EnableDomainTransferLock$ === "object");
assert(typeof GetContactReachabilityStatusCommand === "function");
assert(typeof GetContactReachabilityStatus$ === "object");
assert(typeof GetDomainDetailCommand === "function");
assert(typeof GetDomainDetail$ === "object");
assert(typeof GetDomainSuggestionsCommand === "function");
assert(typeof GetDomainSuggestions$ === "object");
assert(typeof GetOperationDetailCommand === "function");
assert(typeof GetOperationDetail$ === "object");
assert(typeof ListDomainsCommand === "function");
assert(typeof ListDomains$ === "object");
assert(typeof ListOperationsCommand === "function");
assert(typeof ListOperations$ === "object");
assert(typeof ListPricesCommand === "function");
assert(typeof ListPrices$ === "object");
assert(typeof ListTagsForDomainCommand === "function");
assert(typeof ListTagsForDomain$ === "object");
assert(typeof PushDomainCommand === "function");
assert(typeof PushDomain$ === "object");
assert(typeof RegisterDomainCommand === "function");
assert(typeof RegisterDomain$ === "object");
assert(typeof RejectDomainTransferFromAnotherAwsAccountCommand === "function");
assert(typeof RejectDomainTransferFromAnotherAwsAccount$ === "object");
assert(typeof RenewDomainCommand === "function");
assert(typeof RenewDomain$ === "object");
assert(typeof ResendContactReachabilityEmailCommand === "function");
assert(typeof ResendContactReachabilityEmail$ === "object");
assert(typeof ResendOperationAuthorizationCommand === "function");
assert(typeof ResendOperationAuthorization$ === "object");
assert(typeof RetrieveDomainAuthCodeCommand === "function");
assert(typeof RetrieveDomainAuthCode$ === "object");
assert(typeof TransferDomainCommand === "function");
assert(typeof TransferDomain$ === "object");
assert(typeof TransferDomainToAnotherAwsAccountCommand === "function");
assert(typeof TransferDomainToAnotherAwsAccount$ === "object");
assert(typeof UpdateDomainContactCommand === "function");
assert(typeof UpdateDomainContact$ === "object");
assert(typeof UpdateDomainContactPrivacyCommand === "function");
assert(typeof UpdateDomainContactPrivacy$ === "object");
assert(typeof UpdateDomainNameserversCommand === "function");
assert(typeof UpdateDomainNameservers$ === "object");
assert(typeof UpdateTagsForDomainCommand === "function");
assert(typeof UpdateTagsForDomain$ === "object");
assert(typeof ViewBillingCommand === "function");
assert(typeof ViewBilling$ === "object");
// structural schemas
assert(typeof AcceptDomainTransferFromAnotherAwsAccountRequest$ === "object");
assert(typeof AcceptDomainTransferFromAnotherAwsAccountResponse$ === "object");
assert(typeof AssociateDelegationSignerToDomainRequest$ === "object");
assert(typeof AssociateDelegationSignerToDomainResponse$ === "object");
assert(typeof BillingRecord$ === "object");
assert(typeof CancelDomainTransferToAnotherAwsAccountRequest$ === "object");
assert(typeof CancelDomainTransferToAnotherAwsAccountResponse$ === "object");
assert(typeof CheckDomainAvailabilityRequest$ === "object");
assert(typeof CheckDomainAvailabilityResponse$ === "object");
assert(typeof CheckDomainTransferabilityRequest$ === "object");
assert(typeof CheckDomainTransferabilityResponse$ === "object");
assert(typeof Consent$ === "object");
assert(typeof ContactDetail$ === "object");
assert(typeof DeleteDomainRequest$ === "object");
assert(typeof DeleteDomainResponse$ === "object");
assert(typeof DeleteTagsForDomainRequest$ === "object");
assert(typeof DeleteTagsForDomainResponse$ === "object");
assert(typeof DisableDomainAutoRenewRequest$ === "object");
assert(typeof DisableDomainAutoRenewResponse$ === "object");
assert(typeof DisableDomainTransferLockRequest$ === "object");
assert(typeof DisableDomainTransferLockResponse$ === "object");
assert(typeof DisassociateDelegationSignerFromDomainRequest$ === "object");
assert(typeof DisassociateDelegationSignerFromDomainResponse$ === "object");
assert(typeof DnssecKey$ === "object");
assert(typeof DnssecSigningAttributes$ === "object");
assert(typeof DomainPrice$ === "object");
assert(typeof DomainSuggestion$ === "object");
assert(typeof DomainSummary$ === "object");
assert(typeof DomainTransferability$ === "object");
assert(typeof EnableDomainAutoRenewRequest$ === "object");
assert(typeof EnableDomainAutoRenewResponse$ === "object");
assert(typeof EnableDomainTransferLockRequest$ === "object");
assert(typeof EnableDomainTransferLockResponse$ === "object");
assert(typeof ExtraParam$ === "object");
assert(typeof FilterCondition$ === "object");
assert(typeof GetContactReachabilityStatusRequest$ === "object");
assert(typeof GetContactReachabilityStatusResponse$ === "object");
assert(typeof GetDomainDetailRequest$ === "object");
assert(typeof GetDomainDetailResponse$ === "object");
assert(typeof GetDomainSuggestionsRequest$ === "object");
assert(typeof GetDomainSuggestionsResponse$ === "object");
assert(typeof GetOperationDetailRequest$ === "object");
assert(typeof GetOperationDetailResponse$ === "object");
assert(typeof ListDomainsRequest$ === "object");
assert(typeof ListDomainsResponse$ === "object");
assert(typeof ListOperationsRequest$ === "object");
assert(typeof ListOperationsResponse$ === "object");
assert(typeof ListPricesRequest$ === "object");
assert(typeof ListPricesResponse$ === "object");
assert(typeof ListTagsForDomainRequest$ === "object");
assert(typeof ListTagsForDomainResponse$ === "object");
assert(typeof Nameserver$ === "object");
assert(typeof OperationSummary$ === "object");
assert(typeof PriceWithCurrency$ === "object");
assert(typeof PushDomainRequest$ === "object");
assert(typeof RegisterDomainRequest$ === "object");
assert(typeof RegisterDomainResponse$ === "object");
assert(typeof RejectDomainTransferFromAnotherAwsAccountRequest$ === "object");
assert(typeof RejectDomainTransferFromAnotherAwsAccountResponse$ === "object");
assert(typeof RenewDomainRequest$ === "object");
assert(typeof RenewDomainResponse$ === "object");
assert(typeof ResendContactReachabilityEmailRequest$ === "object");
assert(typeof ResendContactReachabilityEmailResponse$ === "object");
assert(typeof ResendOperationAuthorizationRequest$ === "object");
assert(typeof RetrieveDomainAuthCodeRequest$ === "object");
assert(typeof RetrieveDomainAuthCodeResponse$ === "object");
assert(typeof SortCondition$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TransferDomainRequest$ === "object");
assert(typeof TransferDomainResponse$ === "object");
assert(typeof TransferDomainToAnotherAwsAccountRequest$ === "object");
assert(typeof TransferDomainToAnotherAwsAccountResponse$ === "object");
assert(typeof UpdateDomainContactPrivacyRequest$ === "object");
assert(typeof UpdateDomainContactPrivacyResponse$ === "object");
assert(typeof UpdateDomainContactRequest$ === "object");
assert(typeof UpdateDomainContactResponse$ === "object");
assert(typeof UpdateDomainNameserversRequest$ === "object");
assert(typeof UpdateDomainNameserversResponse$ === "object");
assert(typeof UpdateTagsForDomainRequest$ === "object");
assert(typeof UpdateTagsForDomainResponse$ === "object");
assert(typeof ViewBillingRequest$ === "object");
assert(typeof ViewBillingResponse$ === "object");
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
assert(DnssecLimitExceeded.prototype instanceof Route53DomainsServiceException);
assert(typeof DnssecLimitExceeded$ === "object");
assert(DomainLimitExceeded.prototype instanceof Route53DomainsServiceException);
assert(typeof DomainLimitExceeded$ === "object");
assert(DuplicateRequest.prototype instanceof Route53DomainsServiceException);
assert(typeof DuplicateRequest$ === "object");
assert(InvalidInput.prototype instanceof Route53DomainsServiceException);
assert(typeof InvalidInput$ === "object");
assert(OperationLimitExceeded.prototype instanceof Route53DomainsServiceException);
assert(typeof OperationLimitExceeded$ === "object");
assert(TLDRulesViolation.prototype instanceof Route53DomainsServiceException);
assert(typeof TLDRulesViolation$ === "object");
assert(UnsupportedTLD.prototype instanceof Route53DomainsServiceException);
assert(typeof UnsupportedTLD$ === "object");
assert(Route53DomainsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListDomains === "function");
assert(typeof paginateListOperations === "function");
assert(typeof paginateListPrices === "function");
assert(typeof paginateViewBilling === "function");
console.log(`Route53Domains index test passed.`);
