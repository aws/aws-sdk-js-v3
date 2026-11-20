import {
  AccessDeniedException,
  AccessDeniedException$,
  AccessDeniedExceptionReason,
  AccountBalance$,
  Balances$,
  BalanceType,
  BankAccountType,
  BatchErrorCode,
  BatchGetFinancialRecord$,
  BatchGetFinancialRecordCommand,
  BatchGetFinancialRecordRequest$,
  BatchGetFinancialRecordResponse$,
  BillingPeriod$,
  BusinessUnit$,
  Card$,
  CardBrand,
  CardType,
  CnBankRedirect$,
  CreditMemoDetails$,
  CurrencyAmount$,
  DueStatus,
  FinancialRecord$,
  FinancialRecordDetails$,
  FinancialRecordError$,
  FinancialRecordKey$,
  FinancialRecordSortField,
  FinancialRecordStatus,
  FinancialRecordSummary$,
  FinancialRecordType,
  GetAccountBalance$,
  GetAccountBalanceCommand,
  GetAccountBalanceRequest$,
  GetAccountBalanceResponse$,
  GetFinancialRecord$,
  GetFinancialRecordCommand,
  GetFinancialRecordRequest$,
  GetFinancialRecordResponse$,
  GetPaymentInstrument$,
  GetPaymentInstrumentCommand,
  GetPaymentInstrumentRequest$,
  GetPaymentInstrumentResponse$,
  InNetBanking$,
  InternalServerException,
  InternalServerException$,
  InvoiceDetails$,
  InvoiceFrequency,
  LineOfBusiness,
  ListFinancialRecords$,
  ListFinancialRecordsCommand,
  ListFinancialRecordsRequest$,
  ListFinancialRecordsResponse$,
  ListPaymentInstruments$,
  ListPaymentInstrumentsCommand,
  ListPaymentInstrumentsRequest$,
  ListPaymentInstrumentsResponse$,
  paginateGetAccountBalance,
  paginateListFinancialRecords,
  paginateListPaymentInstruments,
  PaymentInstrument$,
  PaymentInstrumentDetails$,
  PaymentInstrumentStatus,
  PaymentInstrumentSummary$,
  PaymentMethod,
  Payments,
  PaymentsClient,
  PaymentsServiceException,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  SepaBankAccount$,
  SettlementStatus,
  SortOrder,
  ThrottlingException,
  ThrottlingException$,
  UkBacsBankAccount$,
  Upi$,
  UsAchBankAccount$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof PaymentsClient === "function");
assert(typeof Payments === "function");
// commands
assert(typeof BatchGetFinancialRecordCommand === "function");
assert(typeof BatchGetFinancialRecord$ === "object");
assert(typeof GetAccountBalanceCommand === "function");
assert(typeof GetAccountBalance$ === "object");
assert(typeof GetFinancialRecordCommand === "function");
assert(typeof GetFinancialRecord$ === "object");
assert(typeof GetPaymentInstrumentCommand === "function");
assert(typeof GetPaymentInstrument$ === "object");
assert(typeof ListFinancialRecordsCommand === "function");
assert(typeof ListFinancialRecords$ === "object");
assert(typeof ListPaymentInstrumentsCommand === "function");
assert(typeof ListPaymentInstruments$ === "object");
// structural schemas
assert(typeof AccountBalance$ === "object");
assert(typeof Balances$ === "object");
assert(typeof BatchGetFinancialRecordRequest$ === "object");
assert(typeof BatchGetFinancialRecordResponse$ === "object");
assert(typeof BillingPeriod$ === "object");
assert(typeof BusinessUnit$ === "object");
assert(typeof Card$ === "object");
assert(typeof CnBankRedirect$ === "object");
assert(typeof CreditMemoDetails$ === "object");
assert(typeof CurrencyAmount$ === "object");
assert(typeof FinancialRecord$ === "object");
assert(typeof FinancialRecordDetails$ === "object");
assert(typeof FinancialRecordError$ === "object");
assert(typeof FinancialRecordKey$ === "object");
assert(typeof FinancialRecordSummary$ === "object");
assert(typeof GetAccountBalanceRequest$ === "object");
assert(typeof GetAccountBalanceResponse$ === "object");
assert(typeof GetFinancialRecordRequest$ === "object");
assert(typeof GetFinancialRecordResponse$ === "object");
assert(typeof GetPaymentInstrumentRequest$ === "object");
assert(typeof GetPaymentInstrumentResponse$ === "object");
assert(typeof InNetBanking$ === "object");
assert(typeof InvoiceDetails$ === "object");
assert(typeof ListFinancialRecordsRequest$ === "object");
assert(typeof ListFinancialRecordsResponse$ === "object");
assert(typeof ListPaymentInstrumentsRequest$ === "object");
assert(typeof ListPaymentInstrumentsResponse$ === "object");
assert(typeof PaymentInstrument$ === "object");
assert(typeof PaymentInstrumentDetails$ === "object");
assert(typeof PaymentInstrumentSummary$ === "object");
assert(typeof SepaBankAccount$ === "object");
assert(typeof UkBacsBankAccount$ === "object");
assert(typeof Upi$ === "object");
assert(typeof UsAchBankAccount$ === "object");
assert(typeof ValidationExceptionField$ === "object");
// enums
assert(typeof AccessDeniedExceptionReason === "object");
assert(typeof BalanceType === "object");
assert(typeof BankAccountType === "object");
assert(typeof BatchErrorCode === "object");
assert(typeof CardBrand === "object");
assert(typeof CardType === "object");
assert(typeof DueStatus === "object");
assert(typeof FinancialRecordSortField === "object");
assert(typeof FinancialRecordStatus === "object");
assert(typeof FinancialRecordType === "object");
assert(typeof InvoiceFrequency === "object");
assert(typeof LineOfBusiness === "object");
assert(typeof PaymentInstrumentStatus === "object");
assert(typeof PaymentMethod === "object");
assert(typeof SettlementStatus === "object");
assert(typeof SortOrder === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof PaymentsServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof PaymentsServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof PaymentsServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ThrottlingException.prototype instanceof PaymentsServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof PaymentsServiceException);
assert(typeof ValidationException$ === "object");
assert(PaymentsServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateGetAccountBalance === "function");
assert(typeof paginateListFinancialRecords === "function");
assert(typeof paginateListPaymentInstruments === "function");
console.log(`Payments index test passed.`);
