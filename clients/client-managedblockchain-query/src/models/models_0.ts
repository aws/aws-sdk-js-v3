// smithy-typescript generated code
import {
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
 * <p>This is the container for the unique public address on the blockchain.</p>
 * @public
 */
export interface AddressIdentifierFilter {
  /**
   * <p>The container for the recipient address of the transaction. </p>
   * @public
   */
  transactionEventToAddress: string[] | undefined;
}

/**
 * <p>Container for the blockchain address and network information about a contract.</p>
 * @public
 */
export interface ContractIdentifier {
  /**
   * <p>The blockchain network of the contract.</p>
   * @public
   */
  network: QueryNetwork | undefined;

  /**
   * <p>Container for the blockchain address about a contract.</p>
   * @public
   */
  contractAddress: string | undefined;
}

/**
 * <p>This container contains information about an contract.</p>
 * @public
 */
export interface AssetContract {
  /**
   * <p>The container for the contract identifier containing its blockchain network
   *        and address.</p>
   * @public
   */
  contractIdentifier: ContractIdentifier | undefined;

  /**
   * <p>The token standard of the contract.</p>
   * @public
   */
  tokenStandard: QueryTokenStandard | undefined;

  /**
   * <p>The address of the contract deployer.</p>
   * @public
   */
  deployerAddress: string | undefined;
}

/**
 * <p>The container for time.</p>
 * @public
 */
export interface BlockchainInstant {
  /**
   * <p>The container of the <code>Timestamp</code> of the blockchain instant.</p>
   *          <note>
   *             <p>This <code>timestamp</code> will only be recorded up to
   *          the second.</p>
   *          </note>
   * @public
   */
  time?: Date | undefined;
}

/**
 * <p>The container for the owner identifier.</p>
 * @public
 */
export interface OwnerIdentifier {
  /**
   * <p>The contract or wallet address for the owner.</p>
   * @public
   */
  address: string | undefined;
}

/**
 * <p>The container for the identifier for the token including the unique token ID and its blockchain network.</p>
 *          <note>
 *             <p>Only the native tokens BTC and ETH, and the ERC-20,
 *          ERC-721, and ERC 1155 token standards are supported.</p>
 *          </note>
 * @public
 */
export interface TokenIdentifier {
  /**
   * <p>The blockchain network of the token.</p>
   * @public
   */
  network: QueryNetwork | undefined;

  /**
   * <p>This is the token's contract address.</p>
   * @public
   */
  contractAddress?: string | undefined;

  /**
   * <p>The unique identifier of the token.</p>
   *          <note>
   *             <p>For native tokens, use the 3 character abbreviation that best matches your token.
   *          For example, btc for Bitcoin, eth for Ether, etc. For all other token types you must
   *          specify the <code>tokenId</code> in the 64 character hexadecimal <code>tokenid</code> format.</p>
   *          </note>
   * @public
   */
  tokenId?: string | undefined;
}

/**
 * <p>The container for the input for getting a token balance.</p>
 * @public
 */
export interface BatchGetTokenBalanceInputItem {
  /**
   * <p>The container for the identifier for the token including the unique token ID and its blockchain network.</p>
   *          <note>
   *             <p>Only the native tokens BTC and ETH, and the ERC-20,
   *          ERC-721, and ERC 1155 token standards are supported.</p>
   *          </note>
   * @public
   */
  tokenIdentifier: TokenIdentifier | undefined;

  /**
   * <p>The container for the owner identifier.</p>
   * @public
   */
  ownerIdentifier: OwnerIdentifier | undefined;

  /**
   * <p>The container for time.</p>
   * @public
   */
  atBlockchainInstant?: BlockchainInstant | undefined;
}

/**
 * @public
 */
export interface BatchGetTokenBalanceInput {
  /**
   * <p>An array of <code>BatchGetTokenBalanceInputItem</code> objects whose balance is being requested.</p>
   * @public
   */
  getTokenBalanceInputs?: BatchGetTokenBalanceInputItem[] | undefined;
}

/**
 * <p>Error generated from a failed <code>BatchGetTokenBalance</code> request.</p>
 * @public
 */
export interface BatchGetTokenBalanceErrorItem {
  /**
   * <p>The container for the identifier for the token including the unique token ID and its blockchain network.</p>
   *          <note>
   *             <p>Only the native tokens BTC and ETH, and the ERC-20,
   *          ERC-721, and ERC 1155 token standards are supported.</p>
   *          </note>
   * @public
   */
  tokenIdentifier?: TokenIdentifier | undefined;

  /**
   * <p>The container for the owner identifier.</p>
   * @public
   */
  ownerIdentifier?: OwnerIdentifier | undefined;

  /**
   * <p>The container for time.</p>
   * @public
   */
  atBlockchainInstant?: BlockchainInstant | undefined;

  /**
   * <p>The error code associated with the error.</p>
   * @public
   */
  errorCode: string | undefined;

  /**
   * <p>The message associated with the error.</p>
   * @public
   */
  errorMessage: string | undefined;

  /**
   * <p>The type of error.</p>
   * @public
   */
  errorType: ErrorType | undefined;
}

/**
 * <p>The container for the properties of a token balance output.</p>
 * @public
 */
export interface BatchGetTokenBalanceOutputItem {
  /**
   * <p>The container for the owner identifier.</p>
   * @public
   */
  ownerIdentifier?: OwnerIdentifier | undefined;

  /**
   * <p>The container for the identifier for the token including the unique token ID and its blockchain network.</p>
   *          <note>
   *             <p>Only the native tokens BTC and ETH, and the ERC-20,
   *          ERC-721, and ERC 1155 token standards are supported.</p>
   *          </note>
   * @public
   */
  tokenIdentifier?: TokenIdentifier | undefined;

  /**
   * <p>The container for the token balance.</p>
   * @public
   */
  balance: string | undefined;

  /**
   * <p>The container for time.</p>
   * @public
   */
  atBlockchainInstant: BlockchainInstant | undefined;

  /**
   * <p>The container for time.</p>
   * @public
   */
  lastUpdatedTime?: BlockchainInstant | undefined;
}

/**
 * @public
 */
export interface BatchGetTokenBalanceOutput {
  /**
   * <p>An array of <code>BatchGetTokenBalanceOutputItem</code> objects returned by the response.</p>
   * @public
   */
  tokenBalances: BatchGetTokenBalanceOutputItem[] | undefined;

  /**
   * <p>An array of <code>BatchGetTokenBalanceErrorItem</code> objects returned from the request.</p>
   * @public
   */
  errors: BatchGetTokenBalanceErrorItem[] | undefined;
}

/**
 * <p>The resource passed is invalid.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field that triggered the <code>ValidationException</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The <code>ValidationException</code> message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>The container for the <code>ConfirmationStatusFilter</code> that filters for the <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ambq-dg/key-concepts.html#finality">
 *                <i>finality</i>
 *             </a> of the results.</p>
 * @public
 */
export interface ConfirmationStatusFilter {
  /**
   * <p>The container to determine whether to list results that have only reached <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ambq-dg/key-concepts.html#finality">
   *                <i>finality</i>
   *             </a>. Transactions
   *          that have reached finality are always part of the response.</p>
   * @public
   */
  include: ConfirmationStatus[] | undefined;
}

/**
 * <p>The contract or wallet address by which to filter the request.</p>
 * @public
 */
export interface ContractFilter {
  /**
   * <p>The blockchain network of the contract.</p>
   * @public
   */
  network: QueryNetwork | undefined;

  /**
   * <p>The container for the token standard.</p>
   * @public
   */
  tokenStandard: QueryTokenStandard | undefined;

  /**
   * <p>The network address of the deployer.</p>
   * @public
   */
  deployerAddress: string | undefined;
}

/**
 * <p>The metadata of the contract.</p>
 * @public
 */
export interface ContractMetadata {
  /**
   * <p>The name of the token contract.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The symbol of the token contract.</p>
   * @public
   */
  symbol?: string | undefined;

  /**
   * <p>The decimals used by the token contract.</p>
   * @public
   */
  decimals?: number | undefined;
}

/**
 * @public
 */
export interface GetAssetContractInput {
  /**
   * <p>Contains the blockchain address and network information about the contract.</p>
   * @public
   */
  contractIdentifier: ContractIdentifier | undefined;
}

/**
 * @public
 */
export interface GetAssetContractOutput {
  /**
   * <p>Contains the blockchain address and network information about the contract.</p>
   * @public
   */
  contractIdentifier: ContractIdentifier | undefined;

  /**
   * <p>The token standard of the contract requested.</p>
   * @public
   */
  tokenStandard: QueryTokenStandard | undefined;

  /**
   * <p>The address of the deployer of contract.</p>
   * @public
   */
  deployerAddress: string | undefined;

  /**
   * <p>The metadata of the contract.</p>
   * @public
   */
  metadata?: ContractMetadata | undefined;
}

/**
 * @public
 */
export interface GetTokenBalanceInput {
  /**
   * <p>The container for the identifier for the token, including the unique
   *          token ID and its blockchain network.</p>
   * @public
   */
  tokenIdentifier: TokenIdentifier | undefined;

  /**
   * <p>The container for the identifier for the owner.</p>
   * @public
   */
  ownerIdentifier: OwnerIdentifier | undefined;

  /**
   * <p>The time for when the TokenBalance is requested or
   *          the current time if a time is not provided in the request.</p>
   *          <note>
   *             <p>This time will only be recorded up to the second.</p>
   *          </note>
   * @public
   */
  atBlockchainInstant?: BlockchainInstant | undefined;
}

/**
 * @public
 */
export interface GetTokenBalanceOutput {
  /**
   * <p>The container for the owner identifier.</p>
   * @public
   */
  ownerIdentifier?: OwnerIdentifier | undefined;

  /**
   * <p>The container for the identifier for the token including the unique token ID and its blockchain network.</p>
   *          <note>
   *             <p>Only the native tokens BTC and ETH, and the ERC-20,
   *          ERC-721, and ERC 1155 token standards are supported.</p>
   *          </note>
   * @public
   */
  tokenIdentifier?: TokenIdentifier | undefined;

  /**
   * <p>The container for the token balance.</p>
   * @public
   */
  balance: string | undefined;

  /**
   * <p>The container for time.</p>
   * @public
   */
  atBlockchainInstant: BlockchainInstant | undefined;

  /**
   * <p>The container for time.</p>
   * @public
   */
  lastUpdatedTime?: BlockchainInstant | undefined;
}

/**
 * @public
 */
export interface GetTransactionInput {
  /**
   * <p>The hash of a transaction. It is generated when a transaction is created.</p>
   * @public
   */
  transactionHash?: string | undefined;

  /**
   * <p>The identifier of a Bitcoin transaction. It is generated when a transaction is created.</p>
   *          <note>
   *             <p>
   *                <code>transactionId</code> is only supported on the Bitcoin networks.</p>
   *          </note>
   * @public
   */
  transactionId?: string | undefined;

  /**
   * <p>The blockchain network where the transaction occurred.</p>
   * @public
   */
  network: QueryNetwork | undefined;
}

/**
 * <p>There are two possible types of transactions used for this data type:</p>
 *          <ul>
 *             <li>
 *                <p>A Bitcoin transaction is a movement of BTC from one address to
 *             another.</p>
 *             </li>
 *             <li>
 *                <p>An Ethereum transaction refers to an action initiated by an externally
 *            owned account, which is an account managed by a human, not a contract.
 *             For example, if Bob sends Alice 1 ETH, Bob's account must be debited and
 *             Alice's must be credited. This state-changing action occurs within a transaction.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface Transaction {
  /**
   * <p>The blockchain network where the transaction occurred.</p>
   * @public
   */
  network: QueryNetwork | undefined;

  /**
   * <p>The block hash is a unique identifier for a block. It is a fixed-size
   *          string that is calculated by using the information in the block. The block
   *          hash is used to verify the integrity of the data in the block.</p>
   * @public
   */
  blockHash?: string | undefined;

  /**
   * <p>The hash of a transaction. It is generated when a transaction is created.</p>
   * @public
   */
  transactionHash: string | undefined;

  /**
   * <p>The block number in which the transaction is recorded.</p>
   * @public
   */
  blockNumber?: string | undefined;

  /**
   * <p>The <code>Timestamp</code> of the transaction. </p>
   * @public
   */
  transactionTimestamp: Date | undefined;

  /**
   * <p>The index of the transaction within a blockchain.</p>
   * @public
   */
  transactionIndex: number | undefined;

  /**
   * <p>The number of transactions in the block.</p>
   * @public
   */
  numberOfTransactions: number | undefined;

  /**
   * <p>The identifier of the transaction. It is generated whenever a transaction is verified and added to the blockchain.</p>
   * @public
   */
  to: string | undefined;

  /**
   * <p>The initiator of the transaction. It is either in the form a public key or a
   *          contract address.</p>
   * @public
   */
  from?: string | undefined;

  /**
   * <p>The blockchain address for the contract.</p>
   * @public
   */
  contractAddress?: string | undefined;

  /**
   * <p>The amount of gas used for the transaction.</p>
   * @public
   */
  gasUsed?: string | undefined;

  /**
   * <p>The amount of gas used up to the specified point in the block.</p>
   * @public
   */
  cumulativeGasUsed?: string | undefined;

  /**
   * <p>The effective gas price.</p>
   * @public
   */
  effectiveGasPrice?: string | undefined;

  /**
   * <p>The signature of the transaction. The Z coordinate of a point V.</p>
   * @public
   */
  signatureV?: number | undefined;

  /**
   * <p>The signature of the transaction. The X coordinate of a point R.</p>
   * @public
   */
  signatureR?: string | undefined;

  /**
   * <p>The signature of the transaction. The Y coordinate of a point S.</p>
   * @public
   */
  signatureS?: string | undefined;

  /**
   * <p>The transaction fee.</p>
   * @public
   */
  transactionFee?: string | undefined;

  /**
   * <p>The identifier of a Bitcoin transaction. It is generated when a transaction is created.</p>
   * @public
   */
  transactionId?: string | undefined;

  /**
   * <p>Specifies whether the transaction has reached Finality.</p>
   * @public
   */
  confirmationStatus?: ConfirmationStatus | undefined;

  /**
   * <p>Identifies whether the transaction has succeeded or failed.</p>
   * @public
   */
  executionStatus?: ExecutionStatus | undefined;
}

/**
 * @public
 */
export interface GetTransactionOutput {
  /**
   * <p>Contains the details of the transaction.</p>
   * @public
   */
  transaction: Transaction | undefined;
}

/**
 * @public
 */
export interface ListAssetContractsInput {
  /**
   * <p>Contains the filter parameter for the request.</p>
   * @public
   */
  contractFilter: ContractFilter | undefined;

  /**
   * <p> The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of contracts to list.</p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <note>
   *             <p>Even if additional results can be retrieved, the request can return less
   *        results than <code>maxResults</code> or an empty array of results.</p>
   *             <p>To retrieve the next set of results, make another request with the
   *          returned <code>nextToken</code> value. The value of <code>nextToken</code> is
   *          <code>null</code> when there are no more results to return</p>
   *          </note>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAssetContractsOutput {
  /**
   * <p>An array of contract objects that contain the properties for each contract.</p>
   * @public
   */
  contracts: AssetContract[] | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Lists all the transaction events for an address on the blockchain.</p>
 *          <note>
 *             <p>This operation is only supported on the Bitcoin blockchain networks.</p>
 *          </note>
 * @public
 */
export interface ListFilteredTransactionEventsSort {
  /**
   * <p>Container on how the results will be sorted by?</p>
   * @public
   */
  sortBy?: ListFilteredTransactionEventsSortBy | undefined;

  /**
   * <p>The container for the <i>sort order</i> for <code>ListFilteredTransactionEvents</code>.
   *          The <code>SortOrder</code> field only accepts the values <code>ASCENDING</code>
   *          and <code>DESCENDING</code>. Not providing <code>SortOrder</code> will default
   *          to <code>ASCENDING</code>.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * <p>This container is used to specify a time frame.</p>
 * @public
 */
export interface TimeFilter {
  /**
   * <p>The container for time.</p>
   * @public
   */
  from?: BlockchainInstant | undefined;

  /**
   * <p>The container for time.</p>
   * @public
   */
  to?: BlockchainInstant | undefined;
}

/**
 * <p>This container specifies filtering attributes related to <code>BITCOIN_VOUT</code> event types</p>
 * @public
 */
export interface VoutFilter {
  /**
   * <p>Specifies if the transaction output is spent or unspent.</p>
   * @public
   */
  voutSpent: boolean | undefined;
}

/**
 * @public
 */
export interface ListFilteredTransactionEventsInput {
  /**
   * <p>The blockchain network where the transaction occurred.</p>
   *          <p>Valid Values: <code>BITCOIN_MAINNET</code> | <code>BITCOIN_TESTNET</code>
   *          </p>
   * @public
   */
  network: string | undefined;

  /**
   * <p>This is the unique public address on the blockchain for which the transaction events are being requested.</p>
   * @public
   */
  addressIdentifierFilter: AddressIdentifierFilter | undefined;

  /**
   * <p>This container specifies the time frame for the transaction events returned in the response.</p>
   * @public
   */
  timeFilter?: TimeFilter | undefined;

  /**
   * <p>This container specifies filtering attributes related to BITCOIN_VOUT event types</p>
   * @public
   */
  voutFilter?: VoutFilter | undefined;

  /**
   * <p>The container for the <code>ConfirmationStatusFilter</code> that filters for the <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ambq-dg/key-concepts.html#finality">
   *                <i>finality</i>
   *             </a> of the results.</p>
   * @public
   */
  confirmationStatusFilter?: ConfirmationStatusFilter | undefined;

  /**
   * <p>The order by which the results will be sorted.</p>
   * @public
   */
  sort?: ListFilteredTransactionEventsSort | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of transaction events to list.</p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <note>
   *             <p>Even if additional results can be retrieved, the request can return less
   *        results than <code>maxResults</code> or an empty array of results.</p>
   *             <p>To retrieve the next set of results, make another request with the
   *          returned <code>nextToken</code> value. The value of <code>nextToken</code> is
   *          <code>null</code> when there are no more results to return</p>
   *          </note>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The container for the properties of a transaction event.</p>
 * @public
 */
export interface TransactionEvent {
  /**
   * <p>The blockchain network where the transaction occurred.</p>
   * @public
   */
  network: QueryNetwork | undefined;

  /**
   * <p>The hash of a transaction. It is generated when a transaction is created.</p>
   * @public
   */
  transactionHash: string | undefined;

  /**
   * <p>The type of transaction event.</p>
   * @public
   */
  eventType: QueryTransactionEventType | undefined;

  /**
   * <p>The wallet address initiating the transaction. It can either be a public key or a contract.</p>
   * @public
   */
  from?: string | undefined;

  /**
   * <p>The wallet address receiving the transaction.  It can either be a public key or a contract.</p>
   * @public
   */
  to?: string | undefined;

  /**
   * <p>The value that was transacted.</p>
   * @public
   */
  value?: string | undefined;

  /**
   * <p>The blockchain address for the contract</p>
   * @public
   */
  contractAddress?: string | undefined;

  /**
   * <p>The unique identifier for the token involved in the transaction.</p>
   * @public
   */
  tokenId?: string | undefined;

  /**
   * <p>The identifier of a Bitcoin transaction. It is generated when a transaction is created.</p>
   * @public
   */
  transactionId?: string | undefined;

  /**
   * <p>The position of the transaction output in the transaction output list.</p>
   * @public
   */
  voutIndex?: number | undefined;

  /**
   * <p>Specifies if the transaction output is spent or unspent. This is only returned for BITCOIN_VOUT event types.</p>
   *          <note>
   *             <p>This is only returned for <code>BITCOIN_VOUT</code> event types.</p>
   *          </note>
   * @public
   */
  voutSpent?: boolean | undefined;

  /**
   * <p>The transactionId that <i>created</i> the spent transaction output.</p>
   *          <note>
   *             <p>This is only returned for <code>BITCOIN_VIN</code> event types.</p>
   *          </note>
   * @public
   */
  spentVoutTransactionId?: string | undefined;

  /**
   * <p>The transactionHash that <i>created</i> the spent transaction output.</p>
   *          <note>
   *             <p>This is only returned for <code>BITCOIN_VIN</code> event types.</p>
   *          </note>
   * @public
   */
  spentVoutTransactionHash?: string | undefined;

  /**
   * <p>The position of the spent transaction output in the output list of the <i>creating transaction</i>.</p>
   *          <note>
   *             <p>This is only returned for <code>BITCOIN_VIN</code> event types.</p>
   *          </note>
   * @public
   */
  spentVoutIndex?: number | undefined;

  /**
   * <p>The container for time.</p>
   * @public
   */
  blockchainInstant?: BlockchainInstant | undefined;

  /**
   * <p>This container specifies whether the transaction has reached Finality.</p>
   * @public
   */
  confirmationStatus?: ConfirmationStatus | undefined;
}

/**
 * @public
 */
export interface ListFilteredTransactionEventsOutput {
  /**
   * <p>The transaction events returned by the request.</p>
   * @public
   */
  events: TransactionEvent[] | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The container for the owner information to filter by.</p>
 * @public
 */
export interface OwnerFilter {
  /**
   * <p>The contract or wallet address.</p>
   * @public
   */
  address: string | undefined;
}

/**
 * <p>The container of the token filter like the contract address
 *        on a given blockchain network or a unique token identifier on a given
 *        blockchain network.</p>
 *          <note>
 *             <p>You must always specify the network property of this
 *                            container when using this operation.</p>
 *          </note>
 * @public
 */
export interface TokenFilter {
  /**
   * <p>The blockchain network of the token.</p>
   * @public
   */
  network: QueryNetwork | undefined;

  /**
   * <p>This is the address of the contract.</p>
   * @public
   */
  contractAddress?: string | undefined;

  /**
   * <p>The unique identifier of the token.</p>
   * @public
   */
  tokenId?: string | undefined;
}

/**
 * @public
 */
export interface ListTokenBalancesInput {
  /**
   * <p>The contract or wallet address on the blockchain network by which to filter the
   *          request. You must specify the <code>address</code> property of the <code>ownerFilter</code>
   *          when listing balances of tokens owned by the address.</p>
   * @public
   */
  ownerFilter?: OwnerFilter | undefined;

  /**
   * <p>The contract address or a token identifier on the
   *         blockchain network by which to filter the request. You must specify the <code>contractAddress</code>
   *         property of this container when listing tokens minted by a contract.</p>
   *          <note>
   *             <p>You must always specify the network property of this
   *                            container when using this operation.</p>
   *          </note>
   * @public
   */
  tokenFilter: TokenFilter | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of token balances to return.</p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <note>
   *             <p>Even if additional results can be retrieved, the request can return less
   *        results than <code>maxResults</code> or an empty array of results.</p>
   *             <p>To retrieve the next set of results, make another request with the
   *          returned <code>nextToken</code> value. The value of <code>nextToken</code> is
   *          <code>null</code> when there are no more results to return</p>
   *          </note>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>The balance of the token.</p>
 * @public
 */
export interface TokenBalance {
  /**
   * <p>The container for the identifier of the owner.</p>
   * @public
   */
  ownerIdentifier?: OwnerIdentifier | undefined;

  /**
   * <p>The identifier for the token, including the unique token ID and its blockchain network.</p>
   * @public
   */
  tokenIdentifier?: TokenIdentifier | undefined;

  /**
   * <p>The container of the token balance.</p>
   * @public
   */
  balance: string | undefined;

  /**
   * <p>The time for when the TokenBalance is requested or
   *          the current time if a time is not provided in the request.</p>
   *          <note>
   *             <p>This time will only be recorded up to the second.</p>
   *          </note>
   * @public
   */
  atBlockchainInstant: BlockchainInstant | undefined;

  /**
   * <p>The <code>Timestamp</code> of the last transaction at which the balance for the token in the wallet was updated.</p>
   * @public
   */
  lastUpdatedTime?: BlockchainInstant | undefined;
}

/**
 * @public
 */
export interface ListTokenBalancesOutput {
  /**
   * <p>An array of <code>TokenBalance</code> objects. Each object contains details about
   *        the token balance.</p>
   * @public
   */
  tokenBalances: TokenBalance[] | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTransactionEventsInput {
  /**
   * <p>The hash of a transaction. It is generated when a transaction is created.</p>
   * @public
   */
  transactionHash?: string | undefined;

  /**
   * <p>The identifier of a Bitcoin transaction. It is generated when a transaction is created.</p>
   *          <note>
   *             <p>
   *                <code>transactionId</code> is only supported on the Bitcoin networks.</p>
   *          </note>
   * @public
   */
  transactionId?: string | undefined;

  /**
   * <p>The blockchain network where the transaction events occurred.</p>
   * @public
   */
  network: QueryNetwork | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of transaction events to list.</p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <note>
   *             <p>Even if additional results can be retrieved, the request can return less
   *        results than <code>maxResults</code> or an empty array of results.</p>
   *             <p>To retrieve the next set of results, make another request with the
   *          returned <code>nextToken</code> value. The value of <code>nextToken</code> is
   *          <code>null</code> when there are no more results to return</p>
   *          </note>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTransactionEventsOutput {
  /**
   * <p>An array of <code>TransactionEvent</code> objects. Each object contains details
   *          about the transaction events.</p>
   * @public
   */
  events: TransactionEvent[] | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The container for determining how the list transaction result will
 *              be sorted.</p>
 * @public
 */
export interface ListTransactionsSort {
  /**
   * <p>Defaults to the value <code>TRANSACTION_TIMESTAMP</code>.</p>
   * @public
   */
  sortBy?: ListTransactionsSortBy | undefined;

  /**
   * <p>The container for the <i>sort order</i> for <code>ListTransactions</code>.
   *              The <code>SortOrder</code> field only accepts the values <code>ASCENDING</code>
   *              and <code>DESCENDING</code>. Not providing <code>SortOrder</code> will default
   *              to <code>ASCENDING</code>.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;
}

/**
 * @public
 */
export interface ListTransactionsInput {
  /**
   * <p>The address (either a contract or wallet), whose transactions are being requested.</p>
   * @public
   */
  address: string | undefined;

  /**
   * <p>The blockchain network where the transactions occurred.</p>
   * @public
   */
  network: QueryNetwork | undefined;

  /**
   * <p>The container for time.</p>
   * @public
   */
  fromBlockchainInstant?: BlockchainInstant | undefined;

  /**
   * <p>The container for time.</p>
   * @public
   */
  toBlockchainInstant?: BlockchainInstant | undefined;

  /**
   * <p>The order by which the results will be sorted. </p>
   * @public
   */
  sort?: ListTransactionsSort | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of transactions to list.</p>
   *          <p>Default: <code>100</code>
   *          </p>
   *          <note>
   *             <p>Even if additional results can be retrieved, the request can return less
   *        results than <code>maxResults</code> or an empty array of results.</p>
   *             <p>To retrieve the next set of results, make another request with the
   *          returned <code>nextToken</code> value. The value of <code>nextToken</code> is
   *          <code>null</code> when there are no more results to return</p>
   *          </note>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>This filter is used to include transactions in the response that haven't reached <a href="https://docs.aws.amazon.com/managed-blockchain/latest/ambq-dg/key-concepts.html#finality">
   *                <i>finality</i>
   *             </a>. Transactions that have reached finality are always
   *          part of the response.</p>
   * @public
   */
  confirmationStatusFilter?: ConfirmationStatusFilter | undefined;
}

/**
 * <p>The container of the transaction output.</p>
 * @public
 */
export interface TransactionOutputItem {
  /**
   * <p>The hash of a transaction. It is generated when a transaction is created.</p>
   * @public
   */
  transactionHash: string | undefined;

  /**
   * <p>The identifier of a Bitcoin transaction. It is generated when a transaction is created.</p>
   * @public
   */
  transactionId?: string | undefined;

  /**
   * <p>The blockchain network where the transaction occurred.</p>
   * @public
   */
  network: QueryNetwork | undefined;

  /**
   * <p>The time when the transaction occurred.</p>
   * @public
   */
  transactionTimestamp: Date | undefined;

  /**
   * <p>Specifies whether to list transactions that have not reached Finality.</p>
   * @public
   */
  confirmationStatus?: ConfirmationStatus | undefined;
}

/**
 * @public
 */
export interface ListTransactionsOutput {
  /**
   * <p>The array of transactions returned by the request.</p>
   * @public
   */
  transactions: TransactionOutputItem[] | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   * @public
   */
  nextToken?: string | undefined;
}
