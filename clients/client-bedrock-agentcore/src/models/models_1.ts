// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  BlockchainChainId,
  CryptoWalletNetwork,
  Currency,
  DescriptorType,
  InstrumentBalanceToken,
  PaymentInstrumentStatus,
  PaymentInstrumentType,
  PaymentSessionStatus,
  PaymentStatus,
  PaymentType,
  RegistryRecordStatus,
} from "./enums";
import type {
  A2aDescriptor,
  AgentSkillsDescriptor,
  MemoryMetadataFilterExpression,
  MemoryRecordSummary,
} from "./models_0";

/**
 * <p>Contains search criteria for retrieving memory records.</p>
 * @public
 */
export interface SearchCriteria {
  /**
   * <p>The search query to use for finding relevant memory records.</p>
   * @public
   */
  searchQuery: string | undefined;

  /**
   * <p>The memory strategy identifier to filter memory records by.</p>
   * @public
   */
  memoryStrategyId?: string | undefined;

  /**
   * <p>The maximum number of top-scoring memory records to return. This value is used for semantic search ranking.</p>
   * @public
   */
  topK?: number | undefined;

  /**
   * <p>Filters to apply to metadata associated with a memory.</p>
   * @public
   */
  metadataFilters?: MemoryMetadataFilterExpression[] | undefined;
}

/**
 * @public
 */
export interface RetrieveMemoryRecordsInput {
  /**
   * <p>The identifier of the AgentCore Memory resource from which to retrieve memory records.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The namespace prefix to filter memory records by. Searches for memory records in namespaces that start with the provided prefix.</p>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>Use namespacePath for hierarchical retrievals. Return all memory records where namespace falls under the same parent hierarchy.</p>
   * @public
   */
  namespacePath?: string | undefined;

  /**
   * <p>The search criteria to use for finding relevant memory records. This includes the search query, memory strategy ID, and other search parameters.</p>
   * @public
   */
  searchCriteria: SearchCriteria | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 20.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface RetrieveMemoryRecordsOutput {
  /**
   * <p>The list of memory record summaries that match the search criteria, ordered by relevance.</p>
   * @public
   */
  memoryRecordSummaries: MemoryRecordSummary[] | undefined;

  /**
   * <p>The token to use in a subsequent request to get the next set of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents the metadata of a memory extraction job such as the message identifiers that compose this job.</p>
 * @public
 */
export interface ExtractionJob {
  /**
   * <p>The unique identifier of the extraction job.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface StartMemoryExtractionJobInput {
  /**
   * <p>The unique identifier of the memory for which to start extraction jobs.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>Extraction job to start in this operation.</p>
   * @public
   */
  extractionJob: ExtractionJob | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotent processing of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartMemoryExtractionJobOutput {
  /**
   * <p>Extraction Job ID that was attempted to start.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * Authentication method using JWT with key ID and subject claims.
 * @public
 */
export interface LinkedAccountDeveloperJwt {
  /**
   * The key ID (kid) from the JWT header.
   * Identifies which key was used to sign the JWT.
   * @public
   */
  kid: string | undefined;

  /**
   * The subject (sub) claim from the JWT payload.
   * Identifies the principal that is the subject of the JWT.
   * @public
   */
  sub: string | undefined;
}

/**
 * LinkedAccount using an email address.
 * @public
 */
export interface LinkedAccountEmail {
  /**
   * The email address used for linkedAccount.
   * Must be a valid email format.
   * @public
   */
  emailAddress: string | undefined;
}

/**
 * OAuth2 authentication information for third-party providers.
 * Supports Google, Apple, X, Telegram, and GitHub providers.
 * @public
 */
export interface OAuth2Authentication {
  /**
   * The subject (sub) claim from the OAuth2 provider.
   * Uniquely identifies the user at the provider.
   * @public
   */
  sub: string | undefined;

  /**
   * The email address from the OAuth2 provider (optional).
   * @public
   */
  emailAddress?: string | undefined;

  /**
   * The user's name from the OAuth2 provider (optional).
   * @public
   */
  name?: string | undefined;

  /**
   * The username from the OAuth2 provider (optional).
   * @public
   */
  username?: string | undefined;
}

/**
 * Authentication method using OAuth2 providers.
 * Supports Google, Apple, X, Telegram, and GitHub providers.
 * @public
 */
export type LinkedAccountOAuth2 =
  | LinkedAccountOAuth2.AppleMember
  | LinkedAccountOAuth2.GithubMember
  | LinkedAccountOAuth2.GoogleMember
  | LinkedAccountOAuth2.TelegramMember
  | LinkedAccountOAuth2.XMember
  | LinkedAccountOAuth2.$UnknownMember;

/**
 * @public
 */
export namespace LinkedAccountOAuth2 {
  /**
   * Google OAuth2 authentication
   * @public
   */
  export interface GoogleMember {
    google: OAuth2Authentication;
    apple?: never;
    x?: never;
    telegram?: never;
    github?: never;
    $unknown?: never;
  }

  /**
   * Apple OAuth2 authentication
   * @public
   */
  export interface AppleMember {
    google?: never;
    apple: OAuth2Authentication;
    x?: never;
    telegram?: never;
    github?: never;
    $unknown?: never;
  }

  /**
   * X (formerly Twitter) OAuth2 authentication
   * @public
   */
  export interface XMember {
    google?: never;
    apple?: never;
    x: OAuth2Authentication;
    telegram?: never;
    github?: never;
    $unknown?: never;
  }

  /**
   * Telegram OAuth2 authentication
   * @public
   */
  export interface TelegramMember {
    google?: never;
    apple?: never;
    x?: never;
    telegram: OAuth2Authentication;
    github?: never;
    $unknown?: never;
  }

  /**
   * GitHub OAuth2 authentication
   * @public
   */
  export interface GithubMember {
    google?: never;
    apple?: never;
    x?: never;
    telegram?: never;
    github: OAuth2Authentication;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    google?: never;
    apple?: never;
    x?: never;
    telegram?: never;
    github?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    google: (value: OAuth2Authentication) => T;
    apple: (value: OAuth2Authentication) => T;
    x: (value: OAuth2Authentication) => T;
    telegram: (value: OAuth2Authentication) => T;
    github: (value: OAuth2Authentication) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * LinkedAccount using a phone number in E.164 format.
 * @public
 */
export interface LinkedAccountSms {
  /**
   * The phone number in E.164 format (e.g., +1234567890).
   * Must be a valid E.164 formatted phone number starting with + and containing 1-15 digits.
   * @public
   */
  phoneNumber: string | undefined;
}

/**
 * Represents different linkedAccounts that can be linked to an embedded wallet.
 * This union supports multiple linkedAccount approaches: email, SMS, JWT, and OAuth2.
 * @public
 */
export type LinkedAccount =
  | LinkedAccount.DeveloperJwtMember
  | LinkedAccount.EmailMember
  | LinkedAccount.OAuth2Member
  | LinkedAccount.SmsMember
  | LinkedAccount.$UnknownMember;

/**
 * @public
 */
export namespace LinkedAccount {
  /**
   * Email-based linkedAccount
   * @public
   */
  export interface EmailMember {
    email: LinkedAccountEmail;
    sms?: never;
    developerJwt?: never;
    oAuth2?: never;
    $unknown?: never;
  }

  /**
   * SMS-based linkedAccount using phone number
   * @public
   */
  export interface SmsMember {
    email?: never;
    sms: LinkedAccountSms;
    developerJwt?: never;
    oAuth2?: never;
    $unknown?: never;
  }

  /**
   * Developer JWT linkedAccount with key ID and subject
   * @public
   */
  export interface DeveloperJwtMember {
    email?: never;
    sms?: never;
    developerJwt: LinkedAccountDeveloperJwt;
    oAuth2?: never;
    $unknown?: never;
  }

  /**
   * OAuth2 provider linkedAccount (Google, Apple, X, Telegram, GitHub)
   * @public
   */
  export interface OAuth2Member {
    email?: never;
    sms?: never;
    developerJwt?: never;
    oAuth2: LinkedAccountOAuth2;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    email?: never;
    sms?: never;
    developerJwt?: never;
    oAuth2?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    email: (value: LinkedAccountEmail) => T;
    sms: (value: LinkedAccountSms) => T;
    developerJwt: (value: LinkedAccountDeveloperJwt) => T;
    oAuth2: (value: LinkedAccountOAuth2) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Embedded Crypto wallet instrument details
 * @public
 */
export interface EmbeddedCryptoWallet {
  /**
   * The blockchain network for this embedded crypto wallet.
   * Supported networks: ETHEREUM, SOLANA
   * @public
   */
  network: CryptoWalletNetwork | undefined;

  /**
   * List of linkedAccounts linked to this wallet.
   * Each linkedAccount represents a way the end user can authenticate to this wallet.
   * Can be empty when adding a new linkedAccount to an existing wallet.
   * @public
   */
  linkedAccounts: LinkedAccount[] | undefined;

  /**
   * The wallet address on the specified blockchain network.
   * @public
   */
  walletAddress?: string | undefined;

  /**
   * URL for the end user to complete a provider-specific action (e.g., wallet linking, onboarding).
   * Returned by the payment connector during instrument creation.
   * @public
   */
  redirectUrl?: string | undefined;
}

/**
 * Details specific to the instrument type
 * @public
 */
export type PaymentInstrumentDetails =
  | PaymentInstrumentDetails.EmbeddedCryptoWalletMember
  | PaymentInstrumentDetails.$UnknownMember;

/**
 * @public
 */
export namespace PaymentInstrumentDetails {
  /**
   * Embedded crypto wallet managed directly by end user
   * @public
   */
  export interface EmbeddedCryptoWalletMember {
    embeddedCryptoWallet: EmbeddedCryptoWallet;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    embeddedCryptoWallet?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    embeddedCryptoWallet: (value: EmbeddedCryptoWallet) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Request structure for creating a payment instrument
 * @public
 */
export interface CreatePaymentInstrumentRequest {
  /**
   * The user ID associated with this payment instrument.
   * @public
   */
  userId?: string | undefined;

  /**
   * The agent name associated with this request, used for observability.
   * @public
   */
  agentName?: string | undefined;

  /**
   * The ARN of the payment manager that owns this payment instrument.
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The ID of the payment connector to use for this instrument.
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * The type of payment instrument being created.
   * @public
   */
  paymentInstrumentType: PaymentInstrumentType | undefined;

  /**
   * The details of the payment instrument.
   * @public
   */
  paymentInstrumentDetails: PaymentInstrumentDetails | undefined;

  /**
   * Idempotency token to ensure request uniqueness.
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Represents a payment instrument
 * @public
 */
export interface PaymentInstrument {
  /**
   * The unique identifier for this payment instrument.
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * The ARN of the payment manager that owns this payment instrument.
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The ID of the payment connector associated with this instrument.
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * The user ID associated with this payment instrument.
   * @public
   */
  userId: string | undefined;

  /**
   * The type of payment instrument (e.g., EMBEDDED_CRYPTO_WALLET).
   * @public
   */
  paymentInstrumentType: PaymentInstrumentType | undefined;

  /**
   * The details specific to the payment instrument type.
   * @public
   */
  paymentInstrumentDetails: PaymentInstrumentDetails | undefined;

  /**
   * The timestamp when this payment instrument was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The current status of this payment instrument.
   * @public
   */
  status: PaymentInstrumentStatus | undefined;

  /**
   * The timestamp when this payment instrument was last updated.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Response structure for creating a payment instrument
 * @public
 */
export interface CreatePaymentInstrumentResponse {
  /**
   * Represents a payment instrument
   * @public
   */
  paymentInstrument: PaymentInstrument | undefined;
}

/**
 * Request structure for deleting a payment instrument
 *
 * All fields are required and must match the instrument owner's identifiers for authorization to succeed.
 * @public
 */
export interface DeletePaymentInstrumentRequest {
  /**
   * The user ID making the delete request. Must match the instrument's userId.
   * @public
   */
  userId?: string | undefined;

  /**
   * The payment manager ARN. Must match the instrument's paymentManagerArn.
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The payment connector ID. Must match the instrument's paymentConnectorId.
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * The payment instrument ID to delete.
   * @public
   */
  paymentInstrumentId: string | undefined;
}

/**
 * Response structure for deleting a payment instrument
 *
 * Returns the deletion status with HTTP 200 OK status code on successful soft deletion.
 * @public
 */
export interface DeletePaymentInstrumentResponse {
  /**
   * The status of the instrument after deletion. Always DELETED for successful soft delete.
   * @public
   */
  status: PaymentInstrumentStatus | undefined;
}

/**
 * Request structure for getting a payment instrument
 * @public
 */
export interface GetPaymentInstrumentRequest {
  /**
   * The user ID associated with this payment instrument.
   * @public
   */
  userId?: string | undefined;

  /**
   * The agent name associated with this request, used for observability.
   * @public
   */
  agentName?: string | undefined;

  /**
   * The ARN of the payment manager that owns this payment instrument.
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The ID of the payment connector.
   * @public
   */
  paymentConnectorId?: string | undefined;

  /**
   * The ID of the payment instrument to retrieve.
   * @public
   */
  paymentInstrumentId: string | undefined;
}

/**
 * Response structure for getting a payment instrument
 * @public
 */
export interface GetPaymentInstrumentResponse {
  /**
   * Represents a payment instrument
   * @public
   */
  paymentInstrument: PaymentInstrument | undefined;
}

/**
 * Request structure for getting payment instrument balance
 * @public
 */
export interface GetPaymentInstrumentBalanceRequest {
  /**
   * The user ID associated with this payment instrument.
   * @public
   */
  userId?: string | undefined;

  /**
   * The agent name associated with this request, used for observability.
   * @public
   */
  agentName?: string | undefined;

  /**
   * The ARN of the payment manager that owns this payment instrument.
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The ID of the payment connector associated with this instrument.
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * The ID of the payment instrument to query balance for.
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * The specific blockchain chain to query balance on.
   * Required because balances are chain-specific — the same wallet address may hold
   * different token balances on different chains.
   * @public
   */
  chain: BlockchainChainId | undefined;

  /**
   * The token to query balance for.
   * Required to specify which supported token's balance to return.
   * @public
   */
  token: InstrumentBalanceToken | undefined;
}

/**
 * A single token balance entry
 * @public
 */
export interface TokenBalance {
  /**
   * Raw balance in the smallest denomination (e.g., USDC base units where 1 USDC = 1000000).
   * @public
   */
  amount: string | undefined;

  /**
   * Number of decimal places for the token (e.g., 6 for USDC).
   * @public
   */
  decimals: number | undefined;

  /**
   * The supported token for this balance.
   * @public
   */
  token: InstrumentBalanceToken | undefined;

  /**
   * The blockchain network family (ETHEREUM or SOLANA).
   * @public
   */
  network: CryptoWalletNetwork | undefined;

  /**
   * The specific blockchain chain.
   * @public
   */
  chain: BlockchainChainId | undefined;
}

/**
 * Response structure for getting payment instrument balance
 * @public
 */
export interface GetPaymentInstrumentBalanceResponse {
  /**
   * The ID of the payment instrument.
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * The balance of the supported token on the requested chain.
   * @public
   */
  tokenBalance: TokenBalance | undefined;
}

/**
 * Request structure for listing payment instruments
 * @public
 */
export interface ListPaymentInstrumentsRequest {
  /**
   * The user ID associated with the payment instruments.
   * @public
   */
  userId?: string | undefined;

  /**
   * The agent name associated with this request, used for observability.
   * @public
   */
  agentName?: string | undefined;

  /**
   * The ARN of the payment manager that owns the payment instruments.
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The ID of the payment connector to filter by.
   * @public
   */
  paymentConnectorId?: string | undefined;

  /**
   * Token for pagination to retrieve the next set of results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return in a single response.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary of a payment instrument for list operations
 * @public
 */
export interface PaymentInstrumentSummary {
  /**
   * The unique identifier for this payment instrument.
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * The ARN of the payment manager that owns this payment instrument.
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The ID of the payment connector associated with this instrument.
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * The user ID associated with this payment instrument.
   * @public
   */
  userId: string | undefined;

  /**
   * The type of payment instrument (e.g., EMBEDDED_CRYPTO_WALLET).
   * @public
   */
  paymentInstrumentType: PaymentInstrumentType | undefined;

  /**
   * The current status of this payment instrument.
   * @public
   */
  status: PaymentInstrumentStatus | undefined;

  /**
   * The timestamp when this payment instrument was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when this payment instrument was last updated.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Response structure for listing payment instruments
 * @public
 */
export interface ListPaymentInstrumentsResponse {
  /**
   * List of payment instrument summaries matching the request criteria.
   * @public
   */
  paymentInstruments: PaymentInstrumentSummary[] | undefined;

  /**
   * Token for pagination to retrieve the next set of results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Money amount with currency
 * @public
 */
export interface Amount {
  /**
   * The numeric value of the amount.
   * @public
   */
  value: string | undefined;

  /**
   * The currency code for this amount.
   * @public
   */
  currency: Currency | undefined;
}

/**
 * Session spending limits
 * @public
 */
export interface SessionLimits {
  /**
   * The maximum amount that can be spent in this session.
   * @public
   */
  maxSpendAmount: Amount | undefined;
}

/**
 * Request structure for creating a payment session
 * @public
 */
export interface CreatePaymentSessionRequest {
  /**
   * The user ID associated with this payment session.
   * @public
   */
  userId?: string | undefined;

  /**
   * The agent name associated with this request, used for observability.
   * @public
   */
  agentName?: string | undefined;

  /**
   * The ARN of the payment manager that owns this session.
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The spending limits for this payment session.
   * @public
   */
  limits?: SessionLimits | undefined;

  /**
   * The session expiry time in minutes. Must be between 15 and 480 minutes.
   * @public
   */
  expiryTimeInMinutes: number | undefined;

  /**
   * Idempotency token to ensure request uniqueness.
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Available session limits. Currently only budget is supported.
 * @public
 */
export interface AvailableLimits {
  /**
   * The available spend amount for this session.
   * @public
   */
  availableSpendAmount?: Amount | undefined;

  /**
   * The timestamp when the available limits were last updated.
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * Payment manager session
 * @public
 */
export interface PaymentSession {
  /**
   * The unique identifier for this payment session.
   * @public
   */
  paymentSessionId: string | undefined;

  /**
   * The ARN of the payment manager that owns this session.
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The spending limits for this session.
   * @public
   */
  limits?: SessionLimits | undefined;

  /**
   * The user ID associated with this payment session.
   * @public
   */
  userId: string | undefined;

  /**
   * The session expiry time in minutes.
   * @public
   */
  expiryTimeInMinutes: number | undefined;

  /**
   * The timestamp when this payment session was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The available limits for this session after accounting for processed payments.
   * @public
   */
  availableLimits?: AvailableLimits | undefined;

  /**
   * The timestamp when this payment session was last updated.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Response structure for creating a payment session
 * @public
 */
export interface CreatePaymentSessionResponse {
  /**
   * Payment manager session
   * @public
   */
  paymentSession: PaymentSession | undefined;
}

/**
 * Request structure for deleting a payment session
 *
 * All fields are required and must match the session owner's identifiers for authorization to succeed.
 * @public
 */
export interface DeletePaymentSessionRequest {
  /**
   * The user ID making the delete request. Must match the session's userId.
   * @public
   */
  userId?: string | undefined;

  /**
   * The payment manager ARN. Must match the session's paymentManagerArn.
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The payment session ID to delete.
   * @public
   */
  paymentSessionId: string | undefined;
}

/**
 * Response structure for deleting a payment session
 *
 * Returns the deletion status with HTTP 200 status code on successful deletion.
 * @public
 */
export interface DeletePaymentSessionResponse {
  /**
   * The status of the deletion. Always DELETED for successful hard delete.
   * @public
   */
  status: PaymentSessionStatus | undefined;
}

/**
 * Request structure for getting a payment session
 * @public
 */
export interface GetPaymentSessionRequest {
  /**
   * The user ID associated with this payment session.
   * @public
   */
  userId?: string | undefined;

  /**
   * The agent name associated with this request, used for observability.
   * @public
   */
  agentName?: string | undefined;

  /**
   * The ARN of the payment manager that owns this session.
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The ID of the payment session to retrieve.
   * @public
   */
  paymentSessionId: string | undefined;
}

/**
 * Response structure for getting a payment session
 * @public
 */
export interface GetPaymentSessionResponse {
  /**
   * Payment manager session
   * @public
   */
  paymentSession: PaymentSession | undefined;
}

/**
 * Request structure for listing payment sessions
 * @public
 */
export interface ListPaymentSessionsRequest {
  /**
   * The user ID associated with the payment sessions.
   * @public
   */
  userId?: string | undefined;

  /**
   * The agent name associated with this request, used for observability.
   * @public
   */
  agentName?: string | undefined;

  /**
   * The ARN of the payment manager that owns the sessions.
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * Token for pagination to retrieve the next set of results.
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return in a single response.
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary of a payment session for list operations
 * @public
 */
export interface PaymentSessionSummary {
  /**
   * The unique identifier for this payment session.
   * @public
   */
  paymentSessionId: string | undefined;

  /**
   * The ARN of the payment manager that owns this session.
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The user ID associated with this payment session.
   * @public
   */
  userId: string | undefined;

  /**
   * The session expiry time in minutes.
   * @public
   */
  expiryTimeInMinutes: number | undefined;

  /**
   * The timestamp when this payment session was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when this payment session was last updated.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Response structure for listing payment sessions
 * @public
 */
export interface ListPaymentSessionsResponse {
  /**
   * List of payment session summaries matching the request criteria.
   * @public
   */
  paymentSessions: PaymentSessionSummary[] | undefined;

  /**
   * Token for pagination to retrieve the next set of results.
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * X402 payment requirement input
 * @public
 */
export interface CryptoX402PaymentInput {
  /**
   * The X402 protocol version (e.g., "v1", "v2")
   * @public
   */
  version: string | undefined;

  /**
   * This can hold any JSON-like object
   * @public
   */
  payload: __DocumentType | undefined;
}

/**
 * Payment request details union
 * @public
 */
export type PaymentInput =
  | PaymentInput.CryptoX402Member
  | PaymentInput.$UnknownMember;

/**
 * @public
 */
export namespace PaymentInput {
  /**
   * X402 payment requirement input
   * @public
   */
  export interface CryptoX402Member {
    cryptoX402: CryptoX402PaymentInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cryptoX402?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cryptoX402: (value: CryptoX402PaymentInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Request structure for processing a payment
 * @public
 */
export interface ProcessPaymentRequest {
  /**
   * The user ID associated with this payment.
   * @public
   */
  userId?: string | undefined;

  /**
   * The agent name associated with this request, used for observability.
   * @public
   */
  agentName?: string | undefined;

  /**
   * The ARN of the payment manager handling this payment.
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The ID of the payment session for this transaction.
   * @public
   */
  paymentSessionId: string | undefined;

  /**
   * The ID of the payment instrument to use for this transaction.
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * The type of payment being processed.
   * @public
   */
  paymentType: PaymentType | undefined;

  /**
   * The payment input details specific to the payment type.
   * @public
   */
  paymentInput: PaymentInput | undefined;

  /**
   * Idempotency token to ensure request uniqueness.
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * X402 payment requirement output
 * @public
 */
export interface CryptoX402PaymentOutput {
  /**
   * The X402 protocol version (e.g., "1", "2")
   * @public
   */
  version: string | undefined;

  /**
   * This can hold any JSON-like object
   * @public
   */
  payload: __DocumentType | undefined;
}

/**
 * Payment response payload union. We will support versioning by introducing other model in this union
 * @public
 */
export type PaymentOutput =
  | PaymentOutput.CryptoX402Member
  | PaymentOutput.$UnknownMember;

/**
 * @public
 */
export namespace PaymentOutput {
  /**
   * X402 payment requirement output
   * @public
   */
  export interface CryptoX402Member {
    cryptoX402: CryptoX402PaymentOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cryptoX402?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cryptoX402: (value: CryptoX402PaymentOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Response structure for processing a payment
 * @public
 */
export interface ProcessPaymentResponse {
  /**
   * The unique ID of the processed payment transaction.
   * @public
   */
  processPaymentId: string | undefined;

  /**
   * The ARN of the payment manager that processed this payment.
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The ID of the payment session for this transaction.
   * @public
   */
  paymentSessionId: string | undefined;

  /**
   * The ID of the payment instrument used for this transaction.
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * The type of payment that was processed.
   * @public
   */
  paymentType: PaymentType | undefined;

  /**
   * The status of the payment transaction.
   * @public
   */
  status: PaymentStatus | undefined;

  /**
   * The payment output details specific to the payment type.
   * @public
   */
  paymentOutput: PaymentOutput | undefined;

  /**
   * The timestamp when the payment was created.
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the payment was last updated.
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface SearchRegistryRecordsRequest {
  /**
   * <p> The search query to find matching registry records.</p>
   * @public
   */
  searchQuery: string | undefined;

  /**
   * <p> The list of registry identifiers to search within. Currently, you can specify exactly one registry identifier. You can provide either the full Amazon Web Services Resource Name (ARN) or the 12-character alphanumeric registry ID.</p>
   * @public
   */
  registryIds: string[] | undefined;

  /**
   * <p> The maximum number of records to return in a single call. Valid values are 1 through 20. The default value is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> A metadata filter expression to narrow search results. Uses structured JSON operators including field-level operators (<code>$eq</code>, <code>$ne</code>, <code>$in</code>) and logical operators (<code>$and</code>, <code>$or</code>) on filterable fields (<code>name</code>, <code>descriptorType</code>, <code>version</code>). For example, to filter by descriptor type: <code>\{"descriptorType": \{"$eq": "MCP"\}\}</code>. To combine filters: <code>\{"$and": [\{"descriptorType": \{"$eq": "MCP"\}\}, \{"name": \{"$eq": "my-tool"\}\}]\}</code>.</p>
   * @public
   */
  filters?: __DocumentType | undefined;
}

/**
 * <p> A custom descriptor configuration for a registry record.</p>
 * @public
 */
export interface CustomDescriptor {
  /**
   * <p> The inline content of the custom descriptor.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p> The MCP server definition with a schema version and inline content. The <code>schemaVersion</code> identifies the version of the MCP server configuration schema.</p>
 * @public
 */
export interface ServerDefinition {
  /**
   * <p> The schema version of the MCP server configuration. The schema version identifies the format of the server definition content.</p>
   * @public
   */
  schemaVersion?: string | undefined;

  /**
   * <p> The inline content of the server definition.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p> The MCP tools definition with a protocol version and inline content. The <code>protocolVersion</code> identifies the MCP protocol version that the tools conform to. This differs from <code>schemaVersion</code> in the server definition, which identifies the server configuration schema format.</p>
 * @public
 */
export interface ToolsDefinition {
  /**
   * <p> The MCP protocol version that the tools conform to. This differs from the <code>schemaVersion</code> field in the server definition, which identifies the server configuration schema format.</p>
   * @public
   */
  protocolVersion?: string | undefined;

  /**
   * <p> The inline content of the tools definition.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p> The MCP (Model Context Protocol) descriptor configuration for a registry record. Contains the server definition and tools definition.</p>
 * @public
 */
export interface McpDescriptor {
  /**
   * <p> The MCP server definition that describes the server configuration.</p>
   * @public
   */
  server: ServerDefinition | undefined;

  /**
   * <p> The MCP tools definition that describes the available tools.</p>
   * @public
   */
  tools: ToolsDefinition | undefined;
}

/**
 * <p> Contains the descriptor configuration for a registry record. Only the field that matches the record's <code>descriptorType</code> is populated.</p>
 * @public
 */
export interface Descriptors {
  /**
   * <p> The MCP (Model Context Protocol) descriptor configuration. Populated when the record's <code>descriptorType</code> is <code>MCP</code>.</p>
   * @public
   */
  mcp?: McpDescriptor | undefined;

  /**
   * <p> The A2A (Agent-to-Agent) descriptor configuration. Populated when the record's <code>descriptorType</code> is <code>A2A</code>.</p>
   * @public
   */
  a2a?: A2aDescriptor | undefined;

  /**
   * <p> The custom descriptor configuration. Populated when the record's <code>descriptorType</code> is <code>CUSTOM</code>.</p>
   * @public
   */
  custom?: CustomDescriptor | undefined;

  /**
   * <p> The agent skills descriptor configuration. Populated when the record's <code>descriptorType</code> is <code>AGENT_SKILLS</code>.</p>
   * @public
   */
  agentSkills?: AgentSkillsDescriptor | undefined;
}

/**
 * <p> Summary information about a registry record.</p>
 * @public
 */
export interface RegistryRecordSummary {
  /**
   * <p> The Amazon Resource Name (ARN) of the registry that this record belongs to.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p> The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p> The name of the registry record.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p> A description of the registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The type of descriptor associated with this registry record.</p>
   * @public
   */
  descriptorType: DescriptorType | undefined;

  /**
   * <p> The descriptor configurations for this registry record.</p>
   * @public
   */
  descriptors: Descriptors | undefined;

  /**
   * <p> The version of the registry record.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p> The current status of the registry record.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p> The date and time when the registry record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p> The date and time when the registry record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface SearchRegistryRecordsResponse {
  /**
   * <p> The list of registry records that match the search query, ordered by relevance.</p>
   * @public
   */
  registryRecords: RegistryRecordSummary[] | undefined;
}
