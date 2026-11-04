// smithy-typescript generated code
import type {
  ConfirmationStatus,
  ErrorType,
  ExecutionStatus,
  ListFilteredTransactionEventsSortBy,
  ListTransactionsSortBy,
  QueryNetwork,
  QueryTokenStandard,
  QueryTransactionEventType,
  SortOrder,
} from "./enums";

/**
 * This is the container for the unique public address on the blockchain.
 *
 * @public
 */
export interface AddressIdentifierFilter {
  /**
   * The container for the recipient address of the transaction.
   *
   * @public
   */
  transactionEventToAddress: string[] | undefined;
}

/**
 * Container for the blockchain address and network information about a contract.
 *
 * @public
 */
export interface ContractIdentifier {
  /**
   * The blockchain network of the contract.
   *
   * @public
   */
  network: QueryNetwork | undefined;

  /**
   * Container for the blockchain address about a contract.
   *
   * @public
   */
  contractAddress: string | undefined;
}

/**
 * This container contains information about an contract.
 *
 * @public
 */
export interface AssetContract {
  /**
   * The container for the contract identifier containing its blockchain network and address.
   *
   * @public
   */
  contractIdentifier: ContractIdentifier | undefined;

  /**
   * The token standard of the contract.
   *
   * @public
   */
  tokenStandard: QueryTokenStandard | undefined;

  /**
   * The address of the contract deployer.
   *
   * @public
   */
  deployerAddress: string | undefined;
}

/**
 * The container for time.
 *
 * @public
 */
export interface BlockchainInstant {
  /**
   * The container of the `Timestamp` of the blockchain instant.
   *
   * > **Note:** This `timestamp` will only be recorded up to the second.
   *
   * @public
   */
  time?: Date | undefined;
}

/**
 * The container for the owner identifier.
 *
 * @public
 */
export interface OwnerIdentifier {
  /**
   * The contract or wallet address for the owner.
   *
   * @public
   */
  address: string | undefined;
}

/**
 * The container for the identifier for the token including the unique token ID and its blockchain network.
 *
 * > **Note:** Only the native tokens BTC and ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.
 *
 * @public
 */
export interface TokenIdentifier {
  /**
   * The blockchain network of the token.
   *
   * @public
   */
  network: QueryNetwork | undefined;

  /**
   * This is the token's contract address.
   *
   * @public
   */
  contractAddress?: string | undefined;

  /**
   * The unique identifier of the token.
   *
   * > **Note:** For native tokens, use the 3 character abbreviation that best matches your token. For example, btc for Bitcoin, eth for Ether, etc. For all other token types you must specify the `tokenId` in the 64 character hexadecimal `tokenid` format.
   *
   * @public
   */
  tokenId?: string | undefined;
}

/**
 * The container for the input for getting a token balance.
 *
 * @public
 */
export interface BatchGetTokenBalanceInputItem {
  /**
   * The container for the identifier for the token including the unique token ID and its blockchain network.
   *
   * > **Note:** Only the native tokens BTC and ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.
   *
   * @public
   */
  tokenIdentifier: TokenIdentifier | undefined;

  /**
   * The container for the owner identifier.
   *
   * @public
   */
  ownerIdentifier: OwnerIdentifier | undefined;

  /**
   * The container for time.
   *
   * @public
   */
  atBlockchainInstant?: BlockchainInstant | undefined;
}

/**
 * @public
 */
export interface BatchGetTokenBalanceInput {
  /**
   * An array of `BatchGetTokenBalanceInputItem` objects whose balance is being requested.
   *
   * @public
   */
  getTokenBalanceInputs?: BatchGetTokenBalanceInputItem[] | undefined;
}

/**
 * Error generated from a failed `BatchGetTokenBalance` request.
 *
 * @public
 */
export interface BatchGetTokenBalanceErrorItem {
  /**
   * The container for the identifier for the token including the unique token ID and its blockchain network.
   *
   * > **Note:** Only the native tokens BTC and ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.
   *
   * @public
   */
  tokenIdentifier?: TokenIdentifier | undefined;

  /**
   * The container for the owner identifier.
   *
   * @public
   */
  ownerIdentifier?: OwnerIdentifier | undefined;

  /**
   * The container for time.
   *
   * @public
   */
  atBlockchainInstant?: BlockchainInstant | undefined;

  /**
   * The error code associated with the error.
   *
   * @public
   */
  errorCode: string | undefined;

  /**
   * The message associated with the error.
   *
   * @public
   */
  errorMessage: string | undefined;

  /**
   * The type of error.
   *
   * @public
   */
  errorType: ErrorType | undefined;
}

/**
 * The container for the properties of a token balance output.
 *
 * @public
 */
export interface BatchGetTokenBalanceOutputItem {
  /**
   * The container for the owner identifier.
   *
   * @public
   */
  ownerIdentifier?: OwnerIdentifier | undefined;

  /**
   * The container for the identifier for the token including the unique token ID and its blockchain network.
   *
   * > **Note:** Only the native tokens BTC and ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.
   *
   * @public
   */
  tokenIdentifier?: TokenIdentifier | undefined;

  /**
   * The container for the token balance.
   *
   * @public
   */
  balance: string | undefined;

  /**
   * The container for time.
   *
   * @public
   */
  atBlockchainInstant: BlockchainInstant | undefined;

  /**
   * The container for time.
   *
   * @public
   */
  lastUpdatedTime?: BlockchainInstant | undefined;
}

/**
 * @public
 */
export interface BatchGetTokenBalanceOutput {
  /**
   * An array of `BatchGetTokenBalanceOutputItem` objects returned by the response.
   *
   * @public
   */
  tokenBalances: BatchGetTokenBalanceOutputItem[] | undefined;

  /**
   * An array of `BatchGetTokenBalanceErrorItem` objects returned from the request.
   *
   * @public
   */
  errors: BatchGetTokenBalanceErrorItem[] | undefined;
}

/**
 * The resource passed is invalid.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field that triggered the `ValidationException`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The `ValidationException` message.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * The container for the `ConfirmationStatusFilter` that filters for the [*finality*](https://docs.aws.amazon.com/managed-blockchain/latest/ambq-dg/key-concepts.html#finality) of the results.
 *
 * @public
 */
export interface ConfirmationStatusFilter {
  /**
   * The container to determine whether to list results that have only reached [*finality*](https://docs.aws.amazon.com/managed-blockchain/latest/ambq-dg/key-concepts.html#finality). Transactions that have reached finality are always part of the response.
   *
   * @public
   */
  include: ConfirmationStatus[] | undefined;
}

/**
 * The contract or wallet address by which to filter the request.
 *
 * @public
 */
export interface ContractFilter {
  /**
   * The blockchain network of the contract.
   *
   * @public
   */
  network: QueryNetwork | undefined;

  /**
   * The container for the token standard.
   *
   * @public
   */
  tokenStandard: QueryTokenStandard | undefined;

  /**
   * The network address of the deployer.
   *
   * @public
   */
  deployerAddress: string | undefined;
}

/**
 * The metadata of the contract.
 *
 * @public
 */
export interface ContractMetadata {
  /**
   * The name of the token contract.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The symbol of the token contract.
   *
   * @public
   */
  symbol?: string | undefined;

  /**
   * The decimals used by the token contract.
   *
   * @public
   */
  decimals?: number | undefined;
}

/**
 * @public
 */
export interface GetAssetContractInput {
  /**
   * Contains the blockchain address and network information about the contract.
   *
   * @public
   */
  contractIdentifier: ContractIdentifier | undefined;
}

/**
 * @public
 */
export interface GetAssetContractOutput {
  /**
   * Contains the blockchain address and network information about the contract.
   *
   * @public
   */
  contractIdentifier: ContractIdentifier | undefined;

  /**
   * The token standard of the contract requested.
   *
   * @public
   */
  tokenStandard: QueryTokenStandard | undefined;

  /**
   * The address of the deployer of contract.
   *
   * @public
   */
  deployerAddress: string | undefined;

  /**
   * The metadata of the contract.
   *
   * @public
   */
  metadata?: ContractMetadata | undefined;
}

/**
 * @public
 */
export interface GetTokenBalanceInput {
  /**
   * The container for the identifier for the token, including the unique token ID and its blockchain network.
   *
   * @public
   */
  tokenIdentifier: TokenIdentifier | undefined;

  /**
   * The container for the identifier for the owner.
   *
   * @public
   */
  ownerIdentifier: OwnerIdentifier | undefined;

  /**
   * The time for when the TokenBalance is requested or the current time if a time is not provided in the request.
   *
   * > **Note:** This time will only be recorded up to the second.
   *
   * @public
   */
  atBlockchainInstant?: BlockchainInstant | undefined;
}

/**
 * @public
 */
export interface GetTokenBalanceOutput {
  /**
   * The container for the owner identifier.
   *
   * @public
   */
  ownerIdentifier?: OwnerIdentifier | undefined;

  /**
   * The container for the identifier for the token including the unique token ID and its blockchain network.
   *
   * > **Note:** Only the native tokens BTC and ETH, and the ERC-20, ERC-721, and ERC 1155 token standards are supported.
   *
   * @public
   */
  tokenIdentifier?: TokenIdentifier | undefined;

  /**
   * The container for the token balance.
   *
   * @public
   */
  balance: string | undefined;

  /**
   * The container for time.
   *
   * @public
   */
  atBlockchainInstant: BlockchainInstant | undefined;

  /**
   * The container for time.
   *
   * @public
   */
  lastUpdatedTime?: BlockchainInstant | undefined;
}

/**
 * @public
 */
export interface GetTransactionInput {
  /**
   * The hash of a transaction. It is generated when a transaction is created.
   *
   * @public
   */
  transactionHash?: string | undefined;

  /**
   * The identifier of a Bitcoin transaction. It is generated when a transaction is created.
   *
   * > **Note:** `transactionId` is only supported on the Bitcoin networks.
   *
   * @public
   */
  transactionId?: string | undefined;

  /**
   * The blockchain network where the transaction occurred.
   *
   * @public
   */
  network: QueryNetwork | undefined;
}

/**
 * There are two possible types of transactions used for this data type:
 *
 * - A Bitcoin transaction is a movement of BTC from one address to another.
 * - An Ethereum transaction refers to an action initiated by an externally owned account, which is an account managed by a human, not a contract. For example, if Bob sends Alice 1 ETH, Bob's account must be debited and Alice's must be credited. This state-changing action occurs within a transaction.
 *
 * @public
 */
export interface Transaction {
  /**
   * The blockchain network where the transaction occurred.
   *
   * @public
   */
  network: QueryNetwork | undefined;

  /**
   * The block hash is a unique identifier for a block. It is a fixed-size string that is calculated by using the information in the block. The block hash is used to verify the integrity of the data in the block.
   *
   * @public
   */
  blockHash?: string | undefined;

  /**
   * The hash of a transaction. It is generated when a transaction is created.
   *
   * @public
   */
  transactionHash: string | undefined;

  /**
   * The block number in which the transaction is recorded.
   *
   * @public
   */
  blockNumber?: string | undefined;

  /**
   * The `Timestamp` of the transaction.
   *
   * @public
   */
  transactionTimestamp: Date | undefined;

  /**
   * The index of the transaction within a blockchain.
   *
   * @public
   */
  transactionIndex: number | undefined;

  /**
   * The number of transactions in the block.
   *
   * @public
   */
  numberOfTransactions: number | undefined;

  /**
   * The identifier of the transaction. It is generated whenever a transaction is verified and added to the blockchain.
   *
   * @public
   */
  to: string | undefined;

  /**
   * The initiator of the transaction. It is either in the form a public key or a contract address.
   *
   * @public
   */
  from?: string | undefined;

  /**
   * The blockchain address for the contract.
   *
   * @public
   */
  contractAddress?: string | undefined;

  /**
   * The amount of gas used for the transaction.
   *
   * @public
   */
  gasUsed?: string | undefined;

  /**
   * The amount of gas used up to the specified point in the block.
   *
   * @public
   */
  cumulativeGasUsed?: string | undefined;

  /**
   * The effective gas price.
   *
   * @public
   */
  effectiveGasPrice?: string | undefined;

  /**
   * The signature of the transaction. The Z coordinate of a point V.
   *
   * @public
   */
  signatureV?: number | undefined;

  /**
   * The signature of the transaction. The X coordinate of a point R.
   *
   * @public
   */
  signatureR?: string | undefined;

  /**
   * The signature of the transaction. The Y coordinate of a point S.
   *
   * @public
   */
  signatureS?: string | undefined;

  /**
   * The transaction fee.
   *
   * @public
   */
  transactionFee?: string | undefined;

  /**
   * The identifier of a Bitcoin transaction. It is generated when a transaction is created.
   *
   * @public
   */
  transactionId?: string | undefined;

  /**
   * Specifies whether the transaction has reached Finality.
   *
   * @public
   */
  confirmationStatus?: ConfirmationStatus | undefined;

  /**
   * Identifies whether the transaction has succeeded or failed.
   *
   * @public
   */
  executionStatus?: ExecutionStatus | undefined;
}

/**
 * @public
 */
export interface GetTransactionOutput {
  /**
   * Contains the details of the transaction.
   *
   * @public
   */
  transaction: Transaction | undefined;
}

/**
 * @public
 */
export interface ListAssetContractsInput {
  /**
   * Contains the filter parameter for the request.
   *
   * @public
   */
  contractFilter: ContractFilter | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of contracts to list.
   *
   * Default: `100`
   *
   * > **Note:**
   * >
   * > Even if additional results can be retrieved, the request can return less results than `maxResults` or an empty array of results.
   * >
   * > To retrieve the next set of results, make another request with the returned `nextToken` value. The value of `nextToken` is `null` when there are no more results to return
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssetContractsOutput {
  /**
   * An array of contract objects that contain the properties for each contract.
   *
   * @public
   */
  contracts: AssetContract[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Lists all the transaction events for an address on the blockchain.
 *
 * > **Note:** This operation is only supported on the Bitcoin blockchain networks.
 *
 * @public
 */
export interface ListFilteredTransactionEventsSort {
  /**
   * Container on how the results will be sorted by?
   *
   * @public
   */
  sortBy?: ListFilteredTransactionEventsSortBy | undefined;

  /**
   * The container for the *sort order* for `ListFilteredTransactionEvents`. The `SortOrder` field only accepts the values `ASCENDING` and `DESCENDING`. Not providing `SortOrder` will default to `ASCENDING`.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * This container is used to specify a time frame.
 *
 * @public
 */
export interface TimeFilter {
  /**
   * The container for time.
   *
   * @public
   */
  from?: BlockchainInstant | undefined;

  /**
   * The container for time.
   *
   * @public
   */
  to?: BlockchainInstant | undefined;
}

/**
 * This container specifies filtering attributes related to `BITCOIN_VOUT` event types
 *
 * @public
 */
export interface VoutFilter {
  /**
   * Specifies if the transaction output is spent or unspent.
   *
   * @public
   */
  voutSpent: boolean | undefined;
}

/**
 * @public
 */
export interface ListFilteredTransactionEventsInput {
  /**
   * The blockchain network where the transaction occurred.
   *
   * Valid Values: `BITCOIN_MAINNET` | `BITCOIN_TESTNET`
   *
   * @public
   */
  network: string | undefined;

  /**
   * This is the unique public address on the blockchain for which the transaction events are being requested.
   *
   * @public
   */
  addressIdentifierFilter: AddressIdentifierFilter | undefined;

  /**
   * This container specifies the time frame for the transaction events returned in the response.
   *
   * @public
   */
  timeFilter?: TimeFilter | undefined;

  /**
   * This container specifies filtering attributes related to BITCOIN_VOUT event types
   *
   * @public
   */
  voutFilter?: VoutFilter | undefined;

  /**
   * The container for the `ConfirmationStatusFilter` that filters for the [*finality*](https://docs.aws.amazon.com/managed-blockchain/latest/ambq-dg/key-concepts.html#finality) of the results.
   *
   * @public
   */
  confirmationStatusFilter?: ConfirmationStatusFilter | undefined;

  /**
   * The order by which the results will be sorted.
   *
   * @public
   */
  sort?: ListFilteredTransactionEventsSort | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of transaction events to list.
   *
   * Default: `100`
   *
   * > **Note:**
   * >
   * > Even if additional results can be retrieved, the request can return less results than `maxResults` or an empty array of results.
   * >
   * > To retrieve the next set of results, make another request with the returned `nextToken` value. The value of `nextToken` is `null` when there are no more results to return
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The container for the properties of a transaction event.
 *
 * @public
 */
export interface TransactionEvent {
  /**
   * The blockchain network where the transaction occurred.
   *
   * @public
   */
  network: QueryNetwork | undefined;

  /**
   * The hash of a transaction. It is generated when a transaction is created.
   *
   * @public
   */
  transactionHash: string | undefined;

  /**
   * The type of transaction event.
   *
   * @public
   */
  eventType: QueryTransactionEventType | undefined;

  /**
   * The wallet address initiating the transaction. It can either be a public key or a contract.
   *
   * @public
   */
  from?: string | undefined;

  /**
   * The wallet address receiving the transaction. It can either be a public key or a contract.
   *
   * @public
   */
  to?: string | undefined;

  /**
   * The value that was transacted.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The blockchain address for the contract
   *
   * @public
   */
  contractAddress?: string | undefined;

  /**
   * The unique identifier for the token involved in the transaction.
   *
   * @public
   */
  tokenId?: string | undefined;

  /**
   * The identifier of a Bitcoin transaction. It is generated when a transaction is created.
   *
   * @public
   */
  transactionId?: string | undefined;

  /**
   * The position of the transaction output in the transaction output list.
   *
   * @public
   */
  voutIndex?: number | undefined;

  /**
   * Specifies if the transaction output is spent or unspent. This is only returned for BITCOIN_VOUT event types.
   *
   * > **Note:** This is only returned for `BITCOIN_VOUT` event types.
   *
   * @public
   */
  voutSpent?: boolean | undefined;

  /**
   * The transactionId that *created* the spent transaction output.
   *
   * > **Note:** This is only returned for `BITCOIN_VIN` event types.
   *
   * @public
   */
  spentVoutTransactionId?: string | undefined;

  /**
   * The transactionHash that *created* the spent transaction output.
   *
   * > **Note:** This is only returned for `BITCOIN_VIN` event types.
   *
   * @public
   */
  spentVoutTransactionHash?: string | undefined;

  /**
   * The position of the spent transaction output in the output list of the *creating transaction*.
   *
   * > **Note:** This is only returned for `BITCOIN_VIN` event types.
   *
   * @public
   */
  spentVoutIndex?: number | undefined;

  /**
   * The container for time.
   *
   * @public
   */
  blockchainInstant?: BlockchainInstant | undefined;

  /**
   * This container specifies whether the transaction has reached Finality.
   *
   * @public
   */
  confirmationStatus?: ConfirmationStatus | undefined;
}

/**
 * @public
 */
export interface ListFilteredTransactionEventsOutput {
  /**
   * The transaction events returned by the request.
   *
   * @public
   */
  events: TransactionEvent[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The container for the owner information to filter by.
 *
 * @public
 */
export interface OwnerFilter {
  /**
   * The contract or wallet address.
   *
   * @public
   */
  address: string | undefined;
}

/**
 * The container of the token filter like the contract address on a given blockchain network or a unique token identifier on a given blockchain network.
 *
 * > **Note:** You must always specify the network property of this container when using this operation.
 *
 * @public
 */
export interface TokenFilter {
  /**
   * The blockchain network of the token.
   *
   * @public
   */
  network: QueryNetwork | undefined;

  /**
   * This is the address of the contract.
   *
   * @public
   */
  contractAddress?: string | undefined;

  /**
   * The unique identifier of the token.
   *
   * @public
   */
  tokenId?: string | undefined;
}

/**
 * @public
 */
export interface ListTokenBalancesInput {
  /**
   * The contract or wallet address on the blockchain network by which to filter the request. You must specify the `address` property of the `ownerFilter` when listing balances of tokens owned by the address.
   *
   * @public
   */
  ownerFilter?: OwnerFilter | undefined;

  /**
   * The contract address or a token identifier on the blockchain network by which to filter the request. You must specify the `contractAddress` property of this container when listing tokens minted by a contract.
   *
   * > **Note:** You must always specify the network property of this container when using this operation.
   *
   * @public
   */
  tokenFilter: TokenFilter | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of token balances to return.
   *
   * Default: `100`
   *
   * > **Note:**
   * >
   * > Even if additional results can be retrieved, the request can return less results than `maxResults` or an empty array of results.
   * >
   * > To retrieve the next set of results, make another request with the returned `nextToken` value. The value of `nextToken` is `null` when there are no more results to return
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The balance of the token.
 *
 * @public
 */
export interface TokenBalance {
  /**
   * The container for the identifier of the owner.
   *
   * @public
   */
  ownerIdentifier?: OwnerIdentifier | undefined;

  /**
   * The identifier for the token, including the unique token ID and its blockchain network.
   *
   * @public
   */
  tokenIdentifier?: TokenIdentifier | undefined;

  /**
   * The container of the token balance.
   *
   * @public
   */
  balance: string | undefined;

  /**
   * The time for when the TokenBalance is requested or the current time if a time is not provided in the request.
   *
   * > **Note:** This time will only be recorded up to the second.
   *
   * @public
   */
  atBlockchainInstant: BlockchainInstant | undefined;

  /**
   * The `Timestamp` of the last transaction at which the balance for the token in the wallet was updated.
   *
   * @public
   */
  lastUpdatedTime?: BlockchainInstant | undefined;
}

/**
 * @public
 */
export interface ListTokenBalancesOutput {
  /**
   * An array of `TokenBalance` objects. Each object contains details about the token balance.
   *
   * @public
   */
  tokenBalances: TokenBalance[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTransactionEventsInput {
  /**
   * The hash of a transaction. It is generated when a transaction is created.
   *
   * @public
   */
  transactionHash?: string | undefined;

  /**
   * The identifier of a Bitcoin transaction. It is generated when a transaction is created.
   *
   * > **Note:** `transactionId` is only supported on the Bitcoin networks.
   *
   * @public
   */
  transactionId?: string | undefined;

  /**
   * The blockchain network where the transaction events occurred.
   *
   * @public
   */
  network: QueryNetwork | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of transaction events to list.
   *
   * Default: `100`
   *
   * > **Note:**
   * >
   * > Even if additional results can be retrieved, the request can return less results than `maxResults` or an empty array of results.
   * >
   * > To retrieve the next set of results, make another request with the returned `nextToken` value. The value of `nextToken` is `null` when there are no more results to return
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTransactionEventsOutput {
  /**
   * An array of `TransactionEvent` objects. Each object contains details about the transaction events.
   *
   * @public
   */
  events: TransactionEvent[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The container for determining how the list transaction result will be sorted.
 *
 * @public
 */
export interface ListTransactionsSort {
  /**
   * Defaults to the value `TRANSACTION_TIMESTAMP`.
   *
   * @public
   */
  sortBy?: ListTransactionsSortBy | undefined;

  /**
   * The container for the *sort order* for `ListTransactions`. The `SortOrder` field only accepts the values `ASCENDING` and `DESCENDING`. Not providing `SortOrder` will default to `ASCENDING`.
   *
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListTransactionsInput {
  /**
   * The address (either a contract or wallet), whose transactions are being requested.
   *
   * @public
   */
  address: string | undefined;

  /**
   * The blockchain network where the transactions occurred.
   *
   * @public
   */
  network: QueryNetwork | undefined;

  /**
   * The container for time.
   *
   * @public
   */
  fromBlockchainInstant?: BlockchainInstant | undefined;

  /**
   * The container for time.
   *
   * @public
   */
  toBlockchainInstant?: BlockchainInstant | undefined;

  /**
   * The order by which the results will be sorted.
   *
   * @public
   */
  sort?: ListTransactionsSort | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of transactions to list.
   *
   * Default: `100`
   *
   * > **Note:**
   * >
   * > Even if additional results can be retrieved, the request can return less results than `maxResults` or an empty array of results.
   * >
   * > To retrieve the next set of results, make another request with the returned `nextToken` value. The value of `nextToken` is `null` when there are no more results to return
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * This filter is used to include transactions in the response that haven't reached [*finality*](https://docs.aws.amazon.com/managed-blockchain/latest/ambq-dg/key-concepts.html#finality). Transactions that have reached finality are always part of the response.
   *
   * @public
   */
  confirmationStatusFilter?: ConfirmationStatusFilter | undefined;
}

/**
 * The container of the transaction output.
 *
 * @public
 */
export interface TransactionOutputItem {
  /**
   * The hash of a transaction. It is generated when a transaction is created.
   *
   * @public
   */
  transactionHash: string | undefined;

  /**
   * The identifier of a Bitcoin transaction. It is generated when a transaction is created.
   *
   * @public
   */
  transactionId?: string | undefined;

  /**
   * The blockchain network where the transaction occurred.
   *
   * @public
   */
  network: QueryNetwork | undefined;

  /**
   * The time when the transaction occurred.
   *
   * @public
   */
  transactionTimestamp: Date | undefined;

  /**
   * Specifies whether to list transactions that have not reached Finality.
   *
   * @public
   */
  confirmationStatus?: ConfirmationStatus | undefined;
}

/**
 * @public
 */
export interface ListTransactionsOutput {
  /**
   * The array of transactions returned by the request.
   *
   * @public
   */
  transactions: TransactionOutputItem[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}
