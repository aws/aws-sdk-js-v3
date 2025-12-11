import {
  AccessDeniedException,
  BatchGetTokenBalanceCommand,
  ConfirmationStatus,
  ErrorType,
  ExecutionStatus,
  GetAssetContractCommand,
  GetTokenBalanceCommand,
  GetTransactionCommand,
  InternalServerException,
  ListAssetContractsCommand,
  ListFilteredTransactionEventsCommand,
  ListFilteredTransactionEventsSortBy,
  ListTokenBalancesCommand,
  ListTransactionEventsCommand,
  ListTransactionsCommand,
  ListTransactionsSortBy,
  ManagedBlockchainQuery,
  ManagedBlockchainQueryClient,
  ManagedBlockchainQueryServiceException,
  QueryNetwork,
  QueryTokenStandard,
  QueryTransactionEventType,
  ResourceNotFoundException,
  ResourceType,
  ServiceQuotaExceededException,
  SortOrder,
  ThrottlingException,
  ValidationException,
  ValidationExceptionReason,
  paginateListAssetContracts,
  paginateListFilteredTransactionEvents,
  paginateListTokenBalances,
  paginateListTransactionEvents,
  paginateListTransactions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof ManagedBlockchainQueryClient === "function");
assert(typeof ManagedBlockchainQuery === "function");
// commands
assert(typeof BatchGetTokenBalanceCommand === "function");
assert(typeof GetAssetContractCommand === "function");
assert(typeof GetTokenBalanceCommand === "function");
assert(typeof GetTransactionCommand === "function");
assert(typeof ListAssetContractsCommand === "function");
assert(typeof ListFilteredTransactionEventsCommand === "function");
assert(typeof ListTokenBalancesCommand === "function");
assert(typeof ListTransactionEventsCommand === "function");
assert(typeof ListTransactionsCommand === "function");
// enums
assert(typeof ConfirmationStatus === "object");
assert(typeof ErrorType === "object");
assert(typeof ExecutionStatus === "object");
assert(typeof ListFilteredTransactionEventsSortBy === "object");
assert(typeof ListTransactionsSortBy === "object");
assert(typeof QueryNetwork === "object");
assert(typeof QueryTokenStandard === "object");
assert(typeof QueryTransactionEventType === "object");
assert(typeof ResourceType === "object");
assert(typeof SortOrder === "object");
assert(typeof ValidationExceptionReason === "object");
// errors
assert(AccessDeniedException.prototype instanceof ManagedBlockchainQueryServiceException);
assert(InternalServerException.prototype instanceof ManagedBlockchainQueryServiceException);
assert(ResourceNotFoundException.prototype instanceof ManagedBlockchainQueryServiceException);
assert(ServiceQuotaExceededException.prototype instanceof ManagedBlockchainQueryServiceException);
assert(ThrottlingException.prototype instanceof ManagedBlockchainQueryServiceException);
assert(ValidationException.prototype instanceof ManagedBlockchainQueryServiceException);
assert(ManagedBlockchainQueryServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAssetContracts === "function");
assert(typeof paginateListFilteredTransactionEvents === "function");
assert(typeof paginateListTokenBalances === "function");
assert(typeof paginateListTransactionEvents === "function");
assert(typeof paginateListTransactions === "function");
console.log(`ManagedBlockchainQuery index test passed.`);
