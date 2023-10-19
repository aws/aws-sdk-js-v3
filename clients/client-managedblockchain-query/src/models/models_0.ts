// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ManagedBlockchainQueryServiceException as __BaseException } from "./ManagedBlockchainQueryServiceException";

/**
 * @public
 * <p>The Amazon Web Services account doesn’t have access to this resource. </p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const QueryNetwork = {
  /**
   * Bitcoin main network
   */
  BITCOIN_MAINNET: "BITCOIN_MAINNET",
  /**
   * Bitcoin test network
   */
  BITCOIN_TESTNET: "BITCOIN_TESTNET",
  /**
   * Ethereum main network
   */
  ETHEREUM_MAINNET: "ETHEREUM_MAINNET",
  /**
   * SEPOLIA network (ethereum testnet)
   */
  ETHEREUM_SEPOLIA_TESTNET: "ETHEREUM_SEPOLIA_TESTNET",
} as const;

/**
 * @public
 */
export type QueryNetwork = (typeof QueryNetwork)[keyof typeof QueryNetwork];

/**
 * @public
 * <p>Container for the blockchain address and network information about a contract.</p>
 */
export interface ContractIdentifier {
  /**
   * @public
   * <p>The blockchain network of the contract.</p>
   */
  network: QueryNetwork | undefined;

  /**
   * @public
   * <p>Container for the blockchain address about a contract.</p>
   */
  contractAddress: string | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryTokenStandard = {
  ERC1155: "ERC1155",
  ERC20: "ERC20",
  ERC721: "ERC721",
} as const;

/**
 * @public
 */
export type QueryTokenStandard = (typeof QueryTokenStandard)[keyof typeof QueryTokenStandard];

/**
 * @public
 * <p>This container contains information about an contract.</p>
 */
export interface AssetContract {
  /**
   * @public
   * <p>The container for the contract identifier containing its blockchain network
   *              and address.</p>
   */
  contractIdentifier: ContractIdentifier | undefined;

  /**
   * @public
   * <p>The token standard of the contract.</p>
   */
  tokenStandard: QueryTokenStandard | undefined;

  /**
   * @public
   * <p>The address of the contract deployer.</p>
   */
  deployerAddress: string | undefined;
}

/**
 * @public
 * <p>The container for time.</p>
 */
export interface BlockchainInstant {
  /**
   * @public
   * <p>The container of the <code>Timestamp</code> of the blockchain instant.</p>
   *          <note>
   *             <p>This <code>timestamp</code> will only be recorded up to
   *          the second.</p>
   *          </note>
   */
  time?: Date;
}

/**
 * @public
 * <p>The container for the identifier of the owner.</p>
 */
export interface OwnerIdentifier {
  /**
   * @public
   * <p>The contract or wallet address for the owner.</p>
   */
  address: string | undefined;
}

/**
 * @public
 * <p>The container for the identifier for the token including the unique token ID and its blockchain network.</p>
 *          <note>
 *             <p>Only the native tokens BTC,ETH, and the ERC-20,
 *          ERC-721, and ERC 1155 token standards are supported.</p>
 *          </note>
 */
export interface TokenIdentifier {
  /**
   * @public
   * <p>The blockchain network of the token.</p>
   */
  network: QueryNetwork | undefined;

  /**
   * @public
   * <p>This is the token's contract address.</p>
   */
  contractAddress?: string;

  /**
   * @public
   * <p>The unique identifier of the token.</p>
   *          <note>
   *             <p>You must specify this container with <code>btc</code> for the native BTC token, and
   *          <code>eth</code> for the native ETH token. For all other token types you must
   *          specify the <code>tokenId</code> in the 64 character hexadecimal <code>tokenid</code> format.</p>
   *          </note>
   */
  tokenId?: string;
}

/**
 * @public
 * <p>The container for the input for getting a token balance.</p>
 */
export interface BatchGetTokenBalanceInputItem {
  /**
   * @public
   * <p>The container for the identifier for the token including the unique token ID and its blockchain network.</p>
   *          <note>
   *             <p>Only the native tokens BTC,ETH, and the ERC-20,
   *          ERC-721, and ERC 1155 token standards are supported.</p>
   *          </note>
   */
  tokenIdentifier: TokenIdentifier | undefined;

  /**
   * @public
   * <p>The container for the identifier of the owner.</p>
   */
  ownerIdentifier: OwnerIdentifier | undefined;

  /**
   * @public
   * <p>The container for time.</p>
   */
  atBlockchainInstant?: BlockchainInstant;
}

/**
 * @public
 */
export interface BatchGetTokenBalanceInput {
  /**
   * @public
   * <p>An array of <code>BatchGetTokenBalanceInputItem</code> objects whose balance is being requested.</p>
   */
  getTokenBalanceInputs?: BatchGetTokenBalanceInputItem[];
}

/**
 * @public
 * @enum
 */
export const ErrorType = {
  /**
   * An API request retrieving an item that can't be found
   */
  RESOURCE_NOT_FOUND_EXCEPTION: "RESOURCE_NOT_FOUND_EXCEPTION",
  /**
   * An API request validation exception
   */
  VALIDATION_EXCEPTION: "VALIDATION_EXCEPTION",
} as const;

/**
 * @public
 */
export type ErrorType = (typeof ErrorType)[keyof typeof ErrorType];

/**
 * @public
 * <p>Error generated from a failed <code>BatchGetTokenBalance</code> request.</p>
 */
export interface BatchGetTokenBalanceErrorItem {
  /**
   * @public
   * <p>The container for the identifier for the token including the unique token ID and its blockchain network.</p>
   *          <note>
   *             <p>Only the native tokens BTC,ETH, and the ERC-20,
   *          ERC-721, and ERC 1155 token standards are supported.</p>
   *          </note>
   */
  tokenIdentifier?: TokenIdentifier;

  /**
   * @public
   * <p>The container for the identifier of the owner.</p>
   */
  ownerIdentifier?: OwnerIdentifier;

  /**
   * @public
   * <p>The container for time.</p>
   */
  atBlockchainInstant?: BlockchainInstant;

  /**
   * @public
   * <p>The error code associated with the error.</p>
   */
  errorCode: string | undefined;

  /**
   * @public
   * <p>The message associated with the error.</p>
   */
  errorMessage: string | undefined;

  /**
   * @public
   * <p>The type of error.</p>
   */
  errorType: ErrorType | undefined;
}

/**
 * @public
 * <p>The container for the properties of a token balance output.</p>
 */
export interface BatchGetTokenBalanceOutputItem {
  /**
   * @public
   * <p>The container for the identifier of the owner.</p>
   */
  ownerIdentifier?: OwnerIdentifier;

  /**
   * @public
   * <p>The container for the identifier for the token including the unique token ID and its blockchain network.</p>
   *          <note>
   *             <p>Only the native tokens BTC,ETH, and the ERC-20,
   *          ERC-721, and ERC 1155 token standards are supported.</p>
   *          </note>
   */
  tokenIdentifier?: TokenIdentifier;

  /**
   * @public
   * <p>The container for the token balance.</p>
   */
  balance: string | undefined;

  /**
   * @public
   * <p>The container for time.</p>
   */
  atBlockchainInstant: BlockchainInstant | undefined;

  /**
   * @public
   * <p>The container for time.</p>
   */
  lastUpdatedTime?: BlockchainInstant;
}

/**
 * @public
 */
export interface BatchGetTokenBalanceOutput {
  /**
   * @public
   * <p>An array of <code>BatchGetTokenBalanceOutputItem</code> objects returned by the response.</p>
   */
  tokenBalances: BatchGetTokenBalanceOutputItem[] | undefined;

  /**
   * @public
   * <p>An array of <code>BatchGetTokenBalanceErrorItem</code> objects returned from the request.</p>
   */
  errors: BatchGetTokenBalanceErrorItem[] | undefined;
}

/**
 * @public
 * <p>The request processing has failed because of an internal error in the service.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @public
   * <p>The container of the <code>retryAfterSeconds</code> value.</p>
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  COLLECTION: "collection",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * <p>The resource was not found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The <code>resourceId</code> of the resource that caused the exception.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The <code>resourceType</code> of the resource that caused the exception.</p>
   */
  resourceType: ResourceType | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
  }
}

/**
 * @public
 * <p>The service quota has been exceeded for this resource.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The <code>resourceId</code> of the resource that caused the exception.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
   * <p>The <code>resourceType</code> of the resource that caused the exception.</p>
   */
  resourceType: ResourceType | undefined;

  /**
   * @public
   * <p>The container for the <code>serviceCode</code>.</p>
   */
  serviceCode: string | undefined;

  /**
   * @public
   * <p>The container for the <code>quotaCode</code>.</p>
   */
  quotaCode: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * @public
 * <p>The request or operation couldn't be performed because a service is throttling
 *       requests. The most common source of throttling errors is when you create resources
 *       that exceed your service limit for this resource type. Request a limit increase or
 *       delete unused resources, if possible.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @public
   * <p>The container for the <code>serviceCode</code>.</p>
   */
  serviceCode: string | undefined;

  /**
   * @public
   * <p>The container for the <code>quotaCode</code>.</p>
   */
  quotaCode: string | undefined;

  /**
   * @public
   * <p>The container of the <code>retryAfterSeconds</code> value.</p>
   */
  retryAfterSeconds?: number;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * @public
 * <p>The resource passed is invalid.</p>
 */
export interface ValidationExceptionField {
  /**
   * @public
   * <p>The name of the field that triggered the <code>ValidationException</code>.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The <code>ValidationException</code> message.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "cannotParse",
  FIELD_VALIDATION_FAILED: "fieldValidationFailed",
  OTHER: "other",
  UNKNOWN_OPERATION: "unknownOperation",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * @public
 * <p>The resource passed is invalid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The container for the reason for the exception</p>
   */
  reason: ValidationExceptionReason | undefined;

  /**
   * @public
   * <p>The container for the <code>fieldList</code> of the exception.</p>
   */
  fieldList?: ValidationExceptionField[];

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
}

/**
 * @public
 * <p>The contract or wallet address by which to filter the request.</p>
 */
export interface ContractFilter {
  /**
   * @public
   * <p>The blockchain network of the contract.</p>
   */
  network: QueryNetwork | undefined;

  /**
   * @public
   * <p>The container for the token standard.</p>
   */
  tokenStandard: QueryTokenStandard | undefined;

  /**
   * @public
   * <p>The network address of the deployer.</p>
   */
  deployerAddress: string | undefined;
}

/**
 * @public
 * <p>The metadata of the contract.</p>
 */
export interface ContractMetadata {
  /**
   * @public
   * <p>The name of the token contract.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The symbol of the token contract.</p>
   */
  symbol?: string;

  /**
   * @public
   * <p>The decimals used by the token contract.</p>
   */
  decimals?: number;
}

/**
 * @public
 */
export interface GetAssetContractInput {
  /**
   * @public
   * <p>Contains the blockchain address and network information about the contract.</p>
   */
  contractIdentifier: ContractIdentifier | undefined;
}

/**
 * @public
 */
export interface GetAssetContractOutput {
  /**
   * @public
   * <p>Contains the blockchain address and network information about the contract.</p>
   */
  contractIdentifier: ContractIdentifier | undefined;

  /**
   * @public
   * <p>The token standard of the contract requested.</p>
   */
  tokenStandard: QueryTokenStandard | undefined;

  /**
   * @public
   * <p>The address of the deployer of contract.</p>
   */
  deployerAddress: string | undefined;

  /**
   * @public
   * <p>The metadata of the contract.</p>
   */
  metadata?: ContractMetadata;
}

/**
 * @public
 */
export interface GetTokenBalanceInput {
  /**
   * @public
   * <p>The container for the identifier for the token, including the unique
   *          token ID and its blockchain network.</p>
   */
  tokenIdentifier: TokenIdentifier | undefined;

  /**
   * @public
   * <p>The container for the identifier for the owner.</p>
   */
  ownerIdentifier: OwnerIdentifier | undefined;

  /**
   * @public
   * <p>The time for when the TokenBalance is requested or
   *          the current time if a time is not provided in the request.</p>
   *          <note>
   *             <p>This time will only be recorded up to the second.</p>
   *          </note>
   */
  atBlockchainInstant?: BlockchainInstant;
}

/**
 * @public
 */
export interface GetTokenBalanceOutput {
  /**
   * @public
   * <p>The container for the identifier of the owner.</p>
   */
  ownerIdentifier?: OwnerIdentifier;

  /**
   * @public
   * <p>The container for the identifier for the token including the unique token ID and its blockchain network.</p>
   *          <note>
   *             <p>Only the native tokens BTC,ETH, and the ERC-20,
   *          ERC-721, and ERC 1155 token standards are supported.</p>
   *          </note>
   */
  tokenIdentifier?: TokenIdentifier;

  /**
   * @public
   * <p>The container for the token balance.</p>
   */
  balance: string | undefined;

  /**
   * @public
   * <p>The container for time.</p>
   */
  atBlockchainInstant: BlockchainInstant | undefined;

  /**
   * @public
   * <p>The container for time.</p>
   */
  lastUpdatedTime?: BlockchainInstant;
}

/**
 * @public
 */
export interface GetTransactionInput {
  /**
   * @public
   * <p>The hash of the transaction.  It is generated whenever a transaction is verified and added to the blockchain.</p>
   */
  transactionHash: string | undefined;

  /**
   * @public
   * <p>The blockchain network where the transaction occurred.</p>
   */
  network: QueryNetwork | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryTransactionStatus = {
  /**
   * The transaction completed on the blockchain, but failed
   */
  FAILED: "FAILED",
  /**
   * The transaction has been confirmed and is final in the blockchain
   */
  FINAL: "FINAL",
} as const;

/**
 * @public
 */
export type QueryTransactionStatus = (typeof QueryTransactionStatus)[keyof typeof QueryTransactionStatus];

/**
 * @public
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
 */
export interface Transaction {
  /**
   * @public
   * <p>The blockchain network where the transaction occurred.</p>
   */
  network: QueryNetwork | undefined;

  /**
   * @public
   * <p>The block hash is a unique identifier for a block. It is a fixed-size
   *          string that is calculated by using the information in the block. The block
   *          hash is used to verify the integrity of the data in the block.</p>
   */
  blockHash?: string;

  /**
   * @public
   * <p>The hash of the transaction. It is generated whenever a transaction is verified and added to the blockchain.</p>
   */
  transactionHash: string | undefined;

  /**
   * @public
   * <p>The block number in which the transaction is recorded.</p>
   */
  blockNumber?: string;

  /**
   * @public
   * <p>The <code>Timestamp</code> of the transaction. </p>
   */
  transactionTimestamp: Date | undefined;

  /**
   * @public
   * <p>The index of the transaction within a blockchain.</p>
   */
  transactionIndex: number | undefined;

  /**
   * @public
   * <p>The number of transactions in the block.</p>
   */
  numberOfTransactions: number | undefined;

  /**
   * @public
   * <p>The status of the transaction.</p>
   */
  status: QueryTransactionStatus | undefined;

  /**
   * @public
   * <p>The identifier of the transaction. It is generated whenever a transaction is verified and added to the blockchain.</p>
   */
  to: string | undefined;

  /**
   * @public
   * <p>The initiator of the transaction. It is either in the form a public key or a
   *          contract address.</p>
   */
  from?: string;

  /**
   * @public
   * <p>The blockchain address for the contract.</p>
   */
  contractAddress?: string;

  /**
   * @public
   * <p>The amount of gas used for the transaction.</p>
   */
  gasUsed?: string;

  /**
   * @public
   * <p>The amount of gas used up to the specified point in the block.</p>
   */
  cumulativeGasUsed?: string;

  /**
   * @public
   * <p>The effective gas price.</p>
   */
  effectiveGasPrice?: string;

  /**
   * @public
   * <p>The signature of the transaction. The Z coordinate of a point V.</p>
   */
  signatureV?: number;

  /**
   * @public
   * <p>The signature of the transaction. The X coordinate of a point R.</p>
   */
  signatureR?: string;

  /**
   * @public
   * <p>The signature of the transaction. The Y coordinate of a point S.</p>
   */
  signatureS?: string;

  /**
   * @public
   * <p>The transaction fee.</p>
   */
  transactionFee?: string;

  /**
   * @public
   * <p>The unique identifier of the transaction. It is generated whenever a transaction is verified and added to the blockchain.</p>
   */
  transactionId?: string;
}

/**
 * @public
 */
export interface GetTransactionOutput {
  /**
   * @public
   * <p>Contains the details of the transaction.</p>
   */
  transaction: Transaction | undefined;
}

/**
 * @public
 */
export interface ListAssetContractsInput {
  /**
   * @public
   * <p>Contains the filter parameter for the request.</p>
   */
  contractFilter: ContractFilter | undefined;

  /**
   * @public
   * <p> The pagination token that indicates the next set of results to retrieve.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of contracts to list.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAssetContractsOutput {
  /**
   * @public
   * <p>An array of contract objects that contain the properties for each contract.</p>
   */
  contracts: AssetContract[] | undefined;

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve. </p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The container for the owner information to filter by.</p>
 */
export interface OwnerFilter {
  /**
   * @public
   * <p>The contract or wallet address.</p>
   */
  address: string | undefined;
}

/**
 * @public
 * <p>The container of the token filter like the contract address
 *        on a given blockchain network or a unique token identifier on a given
 *        blockchain network.</p>
 *          <note>
 *             <p>You must always specify the network property of this
 *                            container when using this operation.</p>
 *          </note>
 */
export interface TokenFilter {
  /**
   * @public
   * <p>The blockchain network of the token.</p>
   */
  network: QueryNetwork | undefined;

  /**
   * @public
   * <p>This is the address of the contract.</p>
   */
  contractAddress?: string;

  /**
   * @public
   * <p>The unique identifier of the token.</p>
   */
  tokenId?: string;
}

/**
 * @public
 */
export interface ListTokenBalancesInput {
  /**
   * @public
   * <p>The contract or wallet address on the blockchain network by which to filter the
   *          request. You must specify the <code>address</code> property of the <code>ownerFilter</code>
   *          when listing balances of tokens owned by the address.</p>
   */
  ownerFilter?: OwnerFilter;

  /**
   * @public
   * <p>The contract address or a token identifier on the
   *         blockchain network by which to filter the request. You must specify the <code>contractAddress</code>
   *         property of this container when listing tokens minted by a contract.</p>
   *          <note>
   *             <p>You must always specify the network property of this
   *                            container when using this operation.</p>
   *          </note>
   */
  tokenFilter: TokenFilter | undefined;

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of token balances to return.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The balance of the token.</p>
 */
export interface TokenBalance {
  /**
   * @public
   * <p>The container for the identifier of the owner.</p>
   */
  ownerIdentifier?: OwnerIdentifier;

  /**
   * @public
   * <p>The identifier for the token, including the unique token ID and its blockchain network.</p>
   */
  tokenIdentifier?: TokenIdentifier;

  /**
   * @public
   * <p>The container of the token balance.</p>
   */
  balance: string | undefined;

  /**
   * @public
   * <p>The time for when the TokenBalance is requested or
   *          the current time if a time is not provided in the request.</p>
   *          <note>
   *             <p>This time will only be recorded up to the second.</p>
   *          </note>
   */
  atBlockchainInstant: BlockchainInstant | undefined;

  /**
   * @public
   * <p>The <code>Timestamp</code> of the last transaction at which the balance for the token in the wallet was updated.</p>
   */
  lastUpdatedTime?: BlockchainInstant;
}

/**
 * @public
 */
export interface ListTokenBalancesOutput {
  /**
   * @public
   * <p>An array of <code>TokenBalance</code> objects. Each object contains details about
   *        the token balance.</p>
   */
  tokenBalances: TokenBalance[] | undefined;

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTransactionEventsInput {
  /**
   * @public
   * <p>The hash of the transaction. It is generated whenever a transaction is verified and added to the blockchain.</p>
   */
  transactionHash: string | undefined;

  /**
   * @public
   * <p>The blockchain network where the transaction events occurred.</p>
   */
  network: QueryNetwork | undefined;

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of transaction events to list.</p>
   *          <note>
   *             <p>Even if additional results can be retrieved, the request can return less
   *        results than <code>maxResults</code> or an empty array of results.</p>
   *             <p>To retrieve the next set of results, make another request with the
   *          returned <code>nextToken</code> value. The value of <code>nextToken</code> is
   *          <code>null</code> when there are no more results to return</p>
   *          </note>
   */
  maxResults?: number;
}

/**
 * @public
 * @enum
 */
export const QueryTransactionEventType = {
  /**
   * A Bitcoin Vin transfer type
   */
  BITCOIN_VIN: "BITCOIN_VIN",
  /**
   * A Bitcoin Vout transfer type
   */
  BITCOIN_VOUT: "BITCOIN_VOUT",
  /**
   * An ERC1155 transfer type
   */
  ERC1155_TRANSFER: "ERC1155_TRANSFER",
  /**
   * An ERC20_BURN transfer type
   */
  ERC20_BURN: "ERC20_BURN",
  /**
   * An ERC20_DEPOSIT transfer type
   */
  ERC20_DEPOSIT: "ERC20_DEPOSIT",
  /**
   * An ERC20_MINT transfer type
   */
  ERC20_MINT: "ERC20_MINT",
  /**
   * An ERC20 transfer type
   */
  ERC20_TRANSFER: "ERC20_TRANSFER",
  /**
   * An ERC20_WITHDRAWAL transfer type
   */
  ERC20_WITHDRAWAL: "ERC20_WITHDRAWAL",
  /**
   * An ERC721 transfer type
   */
  ERC721_TRANSFER: "ERC721_TRANSFER",
  /**
   * An ETH transfer type
   */
  ETH_TRANSFER: "ETH_TRANSFER",
  /**
   * An internal ETH transfer type
   */
  INTERNAL_ETH_TRANSFER: "INTERNAL_ETH_TRANSFER",
} as const;

/**
 * @public
 */
export type QueryTransactionEventType = (typeof QueryTransactionEventType)[keyof typeof QueryTransactionEventType];

/**
 * @public
 * <p>The container for the properties of a transaction event.</p>
 */
export interface TransactionEvent {
  /**
   * @public
   * <p>The blockchain network where the transaction occurred.</p>
   */
  network: QueryNetwork | undefined;

  /**
   * @public
   * <p>The hash of the transaction. It is generated whenever a transaction is verified and added to the blockchain.</p>
   */
  transactionHash: string | undefined;

  /**
   * @public
   * <p>The type of transaction event.</p>
   */
  eventType: QueryTransactionEventType | undefined;

  /**
   * @public
   * <p>The wallet address initiating the transaction. It can either be a public key or a contract.</p>
   */
  from?: string;

  /**
   * @public
   * <p>The wallet address receiving the transaction.  It can either be a public key or a contract.</p>
   */
  to?: string;

  /**
   * @public
   * <p>The value that was transacted.</p>
   */
  value?: string;

  /**
   * @public
   * <p>The blockchain address. for the contract</p>
   */
  contractAddress?: string;

  /**
   * @public
   * <p>The unique identifier for the token involved in the transaction.</p>
   */
  tokenId?: string;

  /**
   * @public
   * <p>The unique identifier of the transaction. It is generated whenever a transaction is verified and added to the blockchain.</p>
   */
  transactionId?: string;

  /**
   * @public
   * <p>The position of the vout in the transaction output list.</p>
   */
  voutIndex?: number;
}

/**
 * @public
 */
export interface ListTransactionEventsOutput {
  /**
   * @public
   * <p>An array of <code>TransactionEvent</code> objects. Each object contains details
   *          about the transaction events.</p>
   */
  events: TransactionEvent[] | undefined;

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ListTransactionsSortBy = {
  /**
   * Timestamp of a transaction
   */
  TRANSACTION_TIMESTAMP: "TRANSACTION_TIMESTAMP",
} as const;

/**
 * @public
 */
export type ListTransactionsSortBy = (typeof ListTransactionsSortBy)[keyof typeof ListTransactionsSortBy];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  /**
   * Result sorted in ascending order
   */
  ASCENDING: "ASCENDING",
  /**
   * Result sorted in descending order
   */
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 * <p>The container for determining how the list transaction result will
 *              be sorted.</p>
 */
export interface ListTransactionsSort {
  /**
   * @public
   * <p>Defaults to the value <code>TRANSACTION_TIMESTAMP</code>.</p>
   */
  sortBy?: ListTransactionsSortBy;

  /**
   * @public
   * <p>The container for the <i>sort order</i> for <code>ListTransactions</code>.
   *              The <code>SortOrder</code> field only accepts the values <code>ASCENDING</code>
   *              and <code>DESCENDING</code>. Not providing <code>SortOrder</code> will default
   *              to <code>ASCENDING</code>.</p>
   */
  sortOrder?: SortOrder;
}

/**
 * @public
 */
export interface ListTransactionsInput {
  /**
   * @public
   * <p>The address (either a contract or wallet), whose transactions are being requested.</p>
   */
  address: string | undefined;

  /**
   * @public
   * <p>The blockchain network where the transactions occurred.</p>
   */
  network: QueryNetwork | undefined;

  /**
   * @public
   * <p>The container for time.</p>
   */
  fromBlockchainInstant?: BlockchainInstant;

  /**
   * @public
   * <p>The container for time.</p>
   */
  toBlockchainInstant?: BlockchainInstant;

  /**
   * @public
   * <p>Sorts items in an ascending order if the first page starts at <code>fromTime</code>.
   *         Sorts items in a descending order if the first page starts at <code>toTime</code>.</p>
   */
  sort?: ListTransactionsSort;

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of transactions to list.</p>
   *          <note>
   *             <p>Even if additional results can be retrieved, the request can return less
   *        results than <code>maxResults</code> or an empty array of results.</p>
   *             <p>To retrieve the next set of results, make another request with the
   *          returned <code>nextToken</code> value. The value of <code>nextToken</code> is
   *          <code>null</code> when there are no more results to return</p>
   *          </note>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>The container of the transaction output.</p>
 */
export interface TransactionOutputItem {
  /**
   * @public
   * <p>The hash of the transaction. It is generated whenever a transaction is verified and added to the blockchain.</p>
   */
  transactionHash: string | undefined;

  /**
   * @public
   * <p>The blockchain network where the transaction occurred.</p>
   */
  network: QueryNetwork | undefined;

  /**
   * @public
   * <p>The time when the transaction occurred.</p>
   */
  transactionTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface ListTransactionsOutput {
  /**
   * @public
   * <p>The array of transactions returned by the request.</p>
   */
  transactions: TransactionOutputItem[] | undefined;

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  nextToken?: string;
}
