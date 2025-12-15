import {
  AccessDeniedException,
  AccessDeniedException$,
  AddressIdentifierFilter$,
  AssetContract$,
  BatchGetTokenBalance$,
  BatchGetTokenBalanceCommand,
  BatchGetTokenBalanceErrorItem$,
  BatchGetTokenBalanceInput$,
  BatchGetTokenBalanceInputItem$,
  BatchGetTokenBalanceOutput$,
  BatchGetTokenBalanceOutputItem$,
  BlockchainInstant$,
  ConfirmationStatus,
  ConfirmationStatusFilter$,
  ContractFilter$,
  ContractIdentifier$,
  ContractMetadata$,
  ErrorType,
  ExecutionStatus,
  GetAssetContract$,
  GetAssetContractCommand,
  GetAssetContractInput$,
  GetAssetContractOutput$,
  GetTokenBalance$,
  GetTokenBalanceCommand,
  GetTokenBalanceInput$,
  GetTokenBalanceOutput$,
  GetTransaction$,
  GetTransactionCommand,
  GetTransactionInput$,
  GetTransactionOutput$,
  InternalServerException,
  InternalServerException$,
  ListAssetContracts$,
  ListAssetContractsCommand,
  ListAssetContractsInput$,
  ListAssetContractsOutput$,
  ListFilteredTransactionEvents$,
  ListFilteredTransactionEventsCommand,
  ListFilteredTransactionEventsInput$,
  ListFilteredTransactionEventsOutput$,
  ListFilteredTransactionEventsSort$,
  ListFilteredTransactionEventsSortBy,
  ListTokenBalances$,
  ListTokenBalancesCommand,
  ListTokenBalancesInput$,
  ListTokenBalancesOutput$,
  ListTransactionEvents$,
  ListTransactionEventsCommand,
  ListTransactionEventsInput$,
  ListTransactionEventsOutput$,
  ListTransactions$,
  ListTransactionsCommand,
  ListTransactionsInput$,
  ListTransactionsOutput$,
  ListTransactionsSort$,
  ListTransactionsSortBy,
  ManagedBlockchainQuery,
  ManagedBlockchainQueryClient,
  ManagedBlockchainQueryServiceException,
  OwnerFilter$,
  OwnerIdentifier$,
  QueryNetwork,
  QueryTokenStandard,
  QueryTransactionEventType,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceType,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SortOrder,
  ThrottlingException,
  ThrottlingException$,
  TimeFilter$,
  TokenBalance$,
  TokenFilter$,
  TokenIdentifier$,
  Transaction$,
  TransactionEvent$,
  TransactionOutputItem$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VoutFilter$,
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
assert(typeof BatchGetTokenBalance$ === "object");
assert(typeof GetAssetContractCommand === "function");
assert(typeof GetAssetContract$ === "object");
assert(typeof GetTokenBalanceCommand === "function");
assert(typeof GetTokenBalance$ === "object");
assert(typeof GetTransactionCommand === "function");
assert(typeof GetTransaction$ === "object");
assert(typeof ListAssetContractsCommand === "function");
assert(typeof ListAssetContracts$ === "object");
assert(typeof ListFilteredTransactionEventsCommand === "function");
assert(typeof ListFilteredTransactionEvents$ === "object");
assert(typeof ListTokenBalancesCommand === "function");
assert(typeof ListTokenBalances$ === "object");
assert(typeof ListTransactionEventsCommand === "function");
assert(typeof ListTransactionEvents$ === "object");
assert(typeof ListTransactionsCommand === "function");
assert(typeof ListTransactions$ === "object");
// structural schemas
assert(typeof AddressIdentifierFilter$ === "object");
assert(typeof AssetContract$ === "object");
assert(typeof BatchGetTokenBalanceErrorItem$ === "object");
assert(typeof BatchGetTokenBalanceInput$ === "object");
assert(typeof BatchGetTokenBalanceInputItem$ === "object");
assert(typeof BatchGetTokenBalanceOutput$ === "object");
assert(typeof BatchGetTokenBalanceOutputItem$ === "object");
assert(typeof BlockchainInstant$ === "object");
assert(typeof ConfirmationStatusFilter$ === "object");
assert(typeof ContractFilter$ === "object");
assert(typeof ContractIdentifier$ === "object");
assert(typeof ContractMetadata$ === "object");
assert(typeof GetAssetContractInput$ === "object");
assert(typeof GetAssetContractOutput$ === "object");
assert(typeof GetTokenBalanceInput$ === "object");
assert(typeof GetTokenBalanceOutput$ === "object");
assert(typeof GetTransactionInput$ === "object");
assert(typeof GetTransactionOutput$ === "object");
assert(typeof ListAssetContractsInput$ === "object");
assert(typeof ListAssetContractsOutput$ === "object");
assert(typeof ListFilteredTransactionEventsInput$ === "object");
assert(typeof ListFilteredTransactionEventsOutput$ === "object");
assert(typeof ListFilteredTransactionEventsSort$ === "object");
assert(typeof ListTokenBalancesInput$ === "object");
assert(typeof ListTokenBalancesOutput$ === "object");
assert(typeof ListTransactionEventsInput$ === "object");
assert(typeof ListTransactionEventsOutput$ === "object");
assert(typeof ListTransactionsInput$ === "object");
assert(typeof ListTransactionsOutput$ === "object");
assert(typeof ListTransactionsSort$ === "object");
assert(typeof OwnerFilter$ === "object");
assert(typeof OwnerIdentifier$ === "object");
assert(typeof TimeFilter$ === "object");
assert(typeof TokenBalance$ === "object");
assert(typeof TokenFilter$ === "object");
assert(typeof TokenIdentifier$ === "object");
assert(typeof Transaction$ === "object");
assert(typeof TransactionEvent$ === "object");
assert(typeof TransactionOutputItem$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof VoutFilter$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(InternalServerException.prototype instanceof ManagedBlockchainQueryServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof ManagedBlockchainQueryServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof ManagedBlockchainQueryServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof ManagedBlockchainQueryServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof ManagedBlockchainQueryServiceException);
assert(typeof ValidationException$ === "object");
assert(ManagedBlockchainQueryServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAssetContracts === "function");
assert(typeof paginateListFilteredTransactionEvents === "function");
assert(typeof paginateListTokenBalances === "function");
assert(typeof paginateListTransactionEvents === "function");
assert(typeof paginateListTransactions === "function");
console.log(`ManagedBlockchainQuery index test passed.`);
