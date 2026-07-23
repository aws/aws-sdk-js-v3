// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  BlockchainChainId,
  CryptoWalletNetwork,
  Currency,
  DescriptorType,
  EventFilterCondition,
  ExtractionJobStatus,
  InstrumentBalanceToken,
  MemoryRecordOperatorType,
  OperatorType,
  PaymentInstrumentStatus,
  PaymentInstrumentType,
  PaymentSessionStatus,
  PaymentStatus,
  PaymentType,
  RegistryRecordStatus,
} from "./enums";
import type {
  A2aDescriptor,
  ActorSummary,
  AgentSkillsDescriptor,
  Event,
  MemoryContent,
  MemoryRecordMetadataValue,
  MetadataValue,
} from "./models_0";

/**
 * @public
 */
export interface ListActorsInput {
  /**
   * <p>The identifier of the AgentCore Memory resource for which to list actors.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListActorsOutput {
  /**
   * <p>The list of actor summaries.</p>
   * @public
   */
  actorSummaries: ActorSummary[] | undefined;

  /**
   * <p>The token to use in a subsequent request to get the next set of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains filter criteria for branches when listing events.</p>
 * @public
 */
export interface BranchFilter {
  /**
   * <p>The name of the branch to filter by.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies whether to include parent branches in the results. Set to true to include parent branches, or false to exclude them.</p>
   * @public
   */
  includeParentBranches?: boolean | undefined;
}

/**
 * <p>Left expression of the event metadata filter.</p>
 * @public
 */
export type LeftExpression =
  | LeftExpression.MetadataKeyMember
  | LeftExpression.$UnknownMember;

/**
 * @public
 */
export namespace LeftExpression {
  /**
   * <p>Key associated with the metadata in an event.</p>
   * @public
   */
  export interface MetadataKeyMember {
    metadataKey: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    metadataKey?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    metadataKey: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Right expression of the <code>eventMetadata</code>filter.</p>
 * @public
 */
export type RightExpression =
  | RightExpression.MetadataValueMember
  | RightExpression.$UnknownMember;

/**
 * @public
 */
export namespace RightExpression {
  /**
   * <p>Value associated with the key in <code>eventMetadata</code>.</p>
   * @public
   */
  export interface MetadataValueMember {
    metadataValue: MetadataValue;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    metadataValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    metadataValue: (value: MetadataValue) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Filter expression for retrieving events based on metadata associated with an event.</p>
 * @public
 */
export interface EventMetadataFilterExpression {
  /**
   * <p>Left operand of the event metadata filter expression.</p>
   * @public
   */
  left: LeftExpression | undefined;

  /**
   * <p>Operator applied to the event metadata filter expression.</p>
   * @public
   */
  operator: OperatorType | undefined;

  /**
   * <p>Right operand of the event metadata filter expression.</p>
   * @public
   */
  right?: RightExpression | undefined;
}

/**
 * <p>Contains filter criteria for listing events.</p>
 * @public
 */
export interface FilterInput {
  /**
   * <p>The branch filter criteria to apply when listing events.</p>
   * @public
   */
  branch?: BranchFilter | undefined;

  /**
   * <p>Event metadata filter criteria to apply when retrieving events.</p>
   * @public
   */
  eventMetadata?: EventMetadataFilterExpression[] | undefined;
}

/**
 * @public
 */
export interface ListEventsInput {
  /**
   * <p>The identifier of the AgentCore Memory resource for which to list events.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The identifier of the session for which to list events.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The identifier of the actor for which to list events.</p>
   * @public
   */
  actorId: string | undefined;

  /**
   * <p>Specifies whether to include event payloads in the response. Set to true to include payloads, or false to exclude them.</p>
   * @public
   */
  includePayloads?: boolean | undefined;

  /**
   * <p>Filter criteria to apply when listing events.</p>
   * @public
   */
  filter?: FilterInput | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventsOutput {
  /**
   * <p>The list of events that match the specified criteria.</p>
   * @public
   */
  events: Event[] | undefined;

  /**
   * <p>The token to use in a subsequent request to get the next set of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Filters for querying memory extraction jobs based on various criteria.</p>
 * @public
 */
export interface ExtractionJobFilterInput {
  /**
   * <p>The memory strategy identifier to filter extraction jobs by. If specified, only extraction jobs with this strategy ID are returned.</p>
   * @public
   */
  strategyId?: string | undefined;

  /**
   * <p>The unique identifier of the session. If specified, only extraction jobs with this session ID are returned.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The identifier of the actor. If specified, only extraction jobs with this actor ID are returned.</p>
   * @public
   */
  actorId?: string | undefined;

  /**
   * <p>The status of the extraction job. If specified, only extraction jobs with this status are returned.</p>
   * @public
   */
  status?: ExtractionJobStatus | undefined;
}

/**
 * @public
 */
export interface ListMemoryExtractionJobsInput {
  /**
   * <p>The unique identifier of the memory to list extraction jobs for.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Filter criteria to apply when listing extraction jobs.</p>
   * @public
   */
  filter?: ExtractionJobFilterInput | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Metadata information associated with this message.</p>
 * @public
 */
export interface MessageMetadata {
  /**
   * <p>The identifier of the event associated with this message.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The position of this message within that event’s ordered list of messages.</p>
   * @public
   */
  messageIndex: number | undefined;
}

/**
 * <p>The list of messages that compose this extraction job.</p>
 * @public
 */
export type ExtractionJobMessages =
  | ExtractionJobMessages.MessagesListMember
  | ExtractionJobMessages.$UnknownMember;

/**
 * @public
 */
export namespace ExtractionJobMessages {
  /**
   * <p>The list of messages that compose this extraction job.</p>
   * @public
   */
  export interface MessagesListMember {
    messagesList: MessageMetadata[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    messagesList?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    messagesList: (value: MessageMetadata[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Metadata information associated with this extraction job.</p>
 * @public
 */
export interface ExtractionJobMetadata {
  /**
   * <p>The unique identifier for the extraction job.</p>
   * @public
   */
  jobID: string | undefined;

  /**
   * <p>The messages associated with the extraction job.</p>
   * @public
   */
  messages: ExtractionJobMessages | undefined;

  /**
   * <p>The current status of the extraction job.</p>
   * @public
   */
  status?: ExtractionJobStatus | undefined;

  /**
   * <p>The cause of failure, if the job did not complete successfully.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The identifier of the memory strategy for this extraction job.</p>
   * @public
   */
  strategyId?: string | undefined;

  /**
   * <p>The identifier of the session for this extraction job.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The identifier of the actor for this extraction job.</p>
   * @public
   */
  actorId?: string | undefined;
}

/**
 * @public
 */
export interface ListMemoryExtractionJobsOutput {
  /**
   * <p>List of extraction job metadata matching the specified criteria.</p>
   * @public
   */
  jobs: ExtractionJobMetadata[] | undefined;

  /**
   * <p>Token to retrieve the next page of results, if available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The left-hand side of a memory record metadata filter expression.</p>
 * @public
 */
export type MemoryRecordLeftExpression =
  | MemoryRecordLeftExpression.MetadataKeyMember
  | MemoryRecordLeftExpression.$UnknownMember;

/**
 * @public
 */
export namespace MemoryRecordLeftExpression {
  /**
   * <p>The metadata key to filter on.</p>
   * @public
   */
  export interface MetadataKeyMember {
    metadataKey: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    metadataKey?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    metadataKey: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The right-hand side of a memory record metadata filter expression.</p>
 * @public
 */
export type MemoryRecordRightExpression =
  | MemoryRecordRightExpression.MetadataValueMember
  | MemoryRecordRightExpression.$UnknownMember;

/**
 * @public
 */
export namespace MemoryRecordRightExpression {
  /**
   * <p>The metadata value to compare against.</p>
   * @public
   */
  export interface MetadataValueMember {
    metadataValue: MemoryRecordMetadataValue;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    metadataValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    metadataValue: (value: MemoryRecordMetadataValue) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Filters to apply to metadata associated with a memory. Specify the metadata key and value in the <code>left</code> and <code>right</code> fields and use the <code>operator</code> field to define the relationship to match.</p>
 * @public
 */
export interface MemoryMetadataFilterExpression {
  /**
   * <p>The metadata key to evaluate.</p>
   * @public
   */
  left: MemoryRecordLeftExpression | undefined;

  /**
   * <p>The relationship between the metadata key and value to match when applying the metadata filter.</p>
   * @public
   */
  operator: MemoryRecordOperatorType | undefined;

  /**
   * <p>The value to compare against. Required for all operators except EXISTS and NOT_EXISTS.</p>
   * @public
   */
  right?: MemoryRecordRightExpression | undefined;
}

/**
 * @public
 */
export interface ListMemoryRecordsInput {
  /**
   * <p>The identifier of the AgentCore Memory resource for which to list memory records.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The namespace prefix to filter memory records by. Returns all memory records in namespaces that start with the provided prefix. Either <code>namespace</code> or <code>namespacePath</code> is required.</p>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>Use namespacePath for hierarchical retrievals. Return all memory records where namespace falls under the same parent hierarchy. Either <code>namespace</code> or <code>namespacePath</code> is required.</p>
   * @public
   */
  namespacePath?: string | undefined;

  /**
   * <p>The memory strategy identifier to filter memory records by. If specified, only memory records with this strategy ID are returned.</p>
   * @public
   */
  memoryStrategyId?: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of metadata filter expressions to scope the returned memory records.</p>
   * @public
   */
  metadataFilters?: MemoryMetadataFilterExpression[] | undefined;
}

/**
 * <p>Contains summary information about a memory record.</p>
 * @public
 */
export interface MemoryRecordSummary {
  /**
   * <p>The unique identifier of the memory record.</p>
   * @public
   */
  memoryRecordId: string | undefined;

  /**
   * <p>The content of the memory record.</p>
   * @public
   */
  content: MemoryContent | undefined;

  /**
   * <p>The identifier of the memory strategy associated with this record.</p>
   * @public
   */
  memoryStrategyId: string | undefined;

  /**
   * <p>The namespaces associated with this memory record.</p>
   * @public
   */
  namespaces: string[] | undefined;

  /**
   * <p>The timestamp when the memory record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The relevance score of the memory record when returned as part of a search result. Higher values indicate greater relevance to the search query.</p>
   * @public
   */
  score?: number | undefined;

  /**
   * <p>A map of metadata key-value pairs associated with a memory record.</p>
   * @public
   */
  metadata?: Record<string, MemoryRecordMetadataValue> | undefined;
}

/**
 * @public
 */
export interface ListMemoryRecordsOutput {
  /**
   * <p>The list of memory record summaries that match the specified criteria.</p>
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
 * <p>Contains filter criteria for listing sessions.</p>
 * @public
 */
export interface SessionFilter {
  /**
   * <p>The event filter condition to apply. Use this to filter sessions based on event presence.</p>
   * @public
   */
  eventFilter?: EventFilterCondition | undefined;
}

/**
 * @public
 */
export interface ListSessionsInput {
  /**
   * <p>The identifier of the AgentCore Memory resource for which to list sessions.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The identifier of the actor for which to list sessions. </p>
   * @public
   */
  actorId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call. The default value is 20.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Filter criteria to apply when listing sessions.</p>
   * @public
   */
  filter?: SessionFilter | undefined;
}

/**
 * <p>Contains summary information about a session in an AgentCore Memory resource.</p>
 * @public
 */
export interface SessionSummary {
  /**
   * <p>The unique identifier of the session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The identifier of the actor associated with the session.</p>
   * @public
   */
  actorId: string | undefined;

  /**
   * <p>The timestamp when the session was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListSessionsOutput {
  /**
   * <p>The list of session summaries that match the specified criteria.</p>
   * @public
   */
  sessionSummaries: SessionSummary[] | undefined;

  /**
   * <p>The token to use in a subsequent request to get the next set of results. This value is null when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

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
   * <p>The namespace prefix to filter memory records by. Searches for memory records in namespaces that start with the provided prefix. Either <code>namespace</code> or <code>namespacePath</code> is required.</p>
   * @public
   */
  namespace?: string | undefined;

  /**
   * <p>Use namespacePath for hierarchical retrievals. Return all memory records where namespace falls under the same parent hierarchy. Either <code>namespace</code> or <code>namespacePath</code> is required.</p>
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
 * <p>Authentication method using JWT with key ID and subject claims.</p>
 * @public
 */
export interface LinkedAccountDeveloperJwt {
  /**
   * <p>The key ID (kid) from the JWT header. Identifies which key was used to sign the JWT.</p>
   * @public
   */
  kid: string | undefined;

  /**
   * <p>The subject (sub) claim from the JWT payload. Identifies the principal that is the subject of the JWT.</p>
   * @public
   */
  sub: string | undefined;
}

/**
 * <p>Linked account using an email address.</p>
 * @public
 */
export interface LinkedAccountEmail {
  /**
   * <p>The email address used for the linked account. Must be a valid email format.</p>
   * @public
   */
  emailAddress: string | undefined;
}

/**
 * <p>OAuth2 authentication information for third-party providers.</p>
 * @public
 */
export interface OAuth2Authentication {
  /**
   * <p>The subject (sub) claim from the OAuth2 provider. Uniquely identifies the user at the provider.</p>
   * @public
   */
  sub: string | undefined;

  /**
   * <p>The email address from the OAuth2 provider.</p>
   * @public
   */
  emailAddress?: string | undefined;

  /**
   * <p>The user's name from the OAuth2 provider.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The username from the OAuth2 provider.</p>
   * @public
   */
  username?: string | undefined;
}

/**
 * <p>Authentication method using OAuth2 providers. Supports Google, Apple, X, Telegram, and GitHub providers.</p>
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
   * <p>Google OAuth2 authentication.</p>
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
   * <p>Apple OAuth2 authentication.</p>
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
   * <p>X (formerly Twitter) OAuth2 authentication.</p>
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
   * <p>Telegram OAuth2 authentication.</p>
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
   * <p>GitHub OAuth2 authentication.</p>
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
 * <p>Linked account using a phone number in E.164 format.</p>
 * @public
 */
export interface LinkedAccountSms {
  /**
   * <p>The phone number in E.164 format (e.g., +1234567890).</p>
   * @public
   */
  phoneNumber: string | undefined;
}

/**
 * <p>Represents different linked accounts that can be linked to an embedded wallet. Supports email, SMS, JWT, and OAuth2 approaches.</p>
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
   * <p>Email-based linked account.</p>
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
   * <p>SMS-based linked account using phone number.</p>
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
   * <p>Developer JWT linked account with key ID and subject.</p>
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
   * <p>OAuth2 provider linked account (Google, Apple, X, Telegram, GitHub).</p>
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
 * <p>Embedded crypto wallet instrument details.</p>
 * @public
 */
export interface EmbeddedCryptoWallet {
  /**
   * <p>The blockchain network for this embedded crypto wallet. Supported networks: ETHEREUM, SOLANA.</p>
   * @public
   */
  network: CryptoWalletNetwork | undefined;

  /**
   * <p>List of linked accounts linked to this wallet. Each represents a way the end user can authenticate to this wallet.</p>
   * @public
   */
  linkedAccounts: LinkedAccount[] | undefined;

  /**
   * <p>The wallet address on the specified blockchain network.</p>
   * @public
   */
  walletAddress?: string | undefined;

  /**
   * <p>URL for the end user to complete a provider-specific action such as wallet linking or onboarding.</p>
   * @public
   */
  redirectUrl?: string | undefined;
}

/**
 * <p>Details specific to the instrument type.</p>
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
   * <p>Embedded crypto wallet managed directly by end user.</p>
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
 * <p>Request structure for creating a payment instrument.</p>
 * @public
 */
export interface CreatePaymentInstrumentRequest {
  /**
   * <p>The user ID associated with this payment instrument.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The agent name associated with this request, used for observability.</p>
   * @public
   */
  agentName?: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns this payment instrument.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The ID of the payment connector to use for this instrument.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The type of payment instrument being created.</p>
   * @public
   */
  paymentInstrumentType: PaymentInstrumentType | undefined;

  /**
   * <p>The details of the payment instrument.</p>
   * @public
   */
  paymentInstrumentDetails: PaymentInstrumentDetails | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Represents a payment instrument.</p>
 * @public
 */
export interface PaymentInstrument {
  /**
   * <p>The unique identifier for this payment instrument.</p>
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns this payment instrument.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The ID of the payment connector associated with this instrument.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The user ID associated with this payment instrument.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>The type of payment instrument (e.g., EMBEDDED_CRYPTO_WALLET).</p>
   * @public
   */
  paymentInstrumentType: PaymentInstrumentType | undefined;

  /**
   * <p>The details specific to the payment instrument type.</p>
   * @public
   */
  paymentInstrumentDetails: PaymentInstrumentDetails | undefined;

  /**
   * <p>The timestamp when this payment instrument was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The current status of this payment instrument.</p>
   * @public
   */
  status: PaymentInstrumentStatus | undefined;

  /**
   * <p>The timestamp when this payment instrument was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Response structure for creating a payment instrument.</p>
 * @public
 */
export interface CreatePaymentInstrumentResponse {
  /**
   * <p>The created payment instrument.</p>
   * @public
   */
  paymentInstrument: PaymentInstrument | undefined;
}

/**
 * <p>Request structure for deleting a payment instrument.</p>
 * @public
 */
export interface DeletePaymentInstrumentRequest {
  /**
   * <p>The user ID making the delete request. Must match the instrument's userId.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The payment manager ARN. Must match the instrument's paymentManagerArn.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The payment connector ID. Must match the instrument's paymentConnectorId.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The payment instrument ID to delete.</p>
   * @public
   */
  paymentInstrumentId: string | undefined;
}

/**
 * <p>Response structure for deleting a payment instrument.</p>
 * @public
 */
export interface DeletePaymentInstrumentResponse {
  /**
   * <p>The status of the instrument after deletion. Always DELETED for successful soft delete.</p>
   * @public
   */
  status: PaymentInstrumentStatus | undefined;
}

/**
 * <p>Request structure for getting a payment instrument.</p>
 * @public
 */
export interface GetPaymentInstrumentRequest {
  /**
   * <p>The user ID associated with this payment instrument.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The agent name associated with this request, used for observability.</p>
   * @public
   */
  agentName?: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns this payment instrument.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The ID of the payment connector.</p>
   * @public
   */
  paymentConnectorId?: string | undefined;

  /**
   * <p>The ID of the payment instrument to retrieve.</p>
   * @public
   */
  paymentInstrumentId: string | undefined;
}

/**
 * <p>Response structure for getting a payment instrument.</p>
 * @public
 */
export interface GetPaymentInstrumentResponse {
  /**
   * <p>The payment instrument details.</p>
   * @public
   */
  paymentInstrument: PaymentInstrument | undefined;
}

/**
 * <p>Request structure for getting payment instrument balance.</p>
 * @public
 */
export interface GetPaymentInstrumentBalanceRequest {
  /**
   * <p>The user ID associated with this payment instrument.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The agent name associated with this request, used for observability.</p>
   * @public
   */
  agentName?: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns this payment instrument.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The ID of the payment connector associated with this instrument.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The ID of the payment instrument to query balance for.</p>
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * <p>The specific blockchain chain to query balance on. Required because balances are chain-specific.</p>
   * @public
   */
  chain: BlockchainChainId | undefined;

  /**
   * <p>The token to query balance for. Only tokens supported for X402 payments are returned.</p>
   * @public
   */
  token: InstrumentBalanceToken | undefined;
}

/**
 * <p>A single token balance entry.</p>
 * @public
 */
export interface TokenBalance {
  /**
   * <p>Raw balance in the smallest denomination (e.g., USDC base units where 1 USDC = 1000000).</p>
   * @public
   */
  amount: string | undefined;

  /**
   * <p>Number of decimal places for the token (e.g., 6 for USDC).</p>
   * @public
   */
  decimals: number | undefined;

  /**
   * <p>The supported token for this balance.</p>
   * @public
   */
  token: InstrumentBalanceToken | undefined;

  /**
   * <p>The blockchain network family (ETHEREUM or SOLANA).</p>
   * @public
   */
  network: CryptoWalletNetwork | undefined;

  /**
   * <p>The specific blockchain chain.</p>
   * @public
   */
  chain: BlockchainChainId | undefined;
}

/**
 * <p>Response structure for getting payment instrument balance.</p>
 * @public
 */
export interface GetPaymentInstrumentBalanceResponse {
  /**
   * <p>The ID of the payment instrument.</p>
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * <p>The balance of the supported token on the requested chain.</p>
   * @public
   */
  tokenBalance: TokenBalance | undefined;
}

/**
 * <p>Request structure for listing payment instruments.</p>
 * @public
 */
export interface ListPaymentInstrumentsRequest {
  /**
   * <p>The user ID associated with the payment instruments.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The agent name associated with this request, used for observability.</p>
   * @public
   */
  agentName?: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns the payment instruments.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The ID of the payment connector to filter by.</p>
   * @public
   */
  paymentConnectorId?: string | undefined;

  /**
   * <p>Token for pagination to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary of a payment instrument for list operations.</p>
 * @public
 */
export interface PaymentInstrumentSummary {
  /**
   * <p>The unique identifier for this payment instrument.</p>
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns this payment instrument.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The ID of the payment connector associated with this instrument.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The user ID associated with this payment instrument.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>The type of payment instrument (e.g., EMBEDDED_CRYPTO_WALLET).</p>
   * @public
   */
  paymentInstrumentType: PaymentInstrumentType | undefined;

  /**
   * <p>The current status of this payment instrument.</p>
   * @public
   */
  status: PaymentInstrumentStatus | undefined;

  /**
   * <p>The timestamp when this payment instrument was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when this payment instrument was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Response structure for listing payment instruments.</p>
 * @public
 */
export interface ListPaymentInstrumentsResponse {
  /**
   * <p>List of payment instrument summaries matching the request criteria.</p>
   * @public
   */
  paymentInstruments: PaymentInstrumentSummary[] | undefined;

  /**
   * <p>Token for pagination to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents a monetary amount with a currency.</p>
 * @public
 */
export interface Amount {
  /**
   * <p>The numeric value of the amount.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The currency code for the amount.</p>
   * @public
   */
  currency: Currency | undefined;
}

/**
 * <p>The spending limits configuration for a payment session.</p>
 * @public
 */
export interface SessionLimits {
  /**
   * <p>The maximum amount that can be spent in the session.</p>
   * @public
   */
  maxSpendAmount: Amount | undefined;
}

/**
 * <p>Request structure for creating a payment session.</p>
 * @public
 */
export interface CreatePaymentSessionRequest {
  /**
   * <p>The user ID associated with this payment session.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The agent name associated with this request, used for observability.</p>
   * @public
   */
  agentName?: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns this session.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The spending limits for this payment session.</p>
   * @public
   */
  limits?: SessionLimits | undefined;

  /**
   * <p>The session expiry time in minutes. Must be between 15 and 480 minutes.</p>
   * @public
   */
  expiryTimeInMinutes: number | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The available spending limits for a payment session.</p>
 * @public
 */
export interface AvailableLimits {
  /**
   * <p>The remaining available amount that can be spent.</p>
   * @public
   */
  availableSpendAmount?: Amount | undefined;

  /**
   * <p>The timestamp when the available limits were last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>A payment session for managing payment transactions.</p>
 * @public
 */
export interface PaymentSession {
  /**
   * <p>The unique identifier of the payment session.</p>
   * @public
   */
  paymentSessionId: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns this session.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The spending limits for the payment session.</p>
   * @public
   */
  limits?: SessionLimits | undefined;

  /**
   * <p>The user ID associated with this session.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>The session expiry time in minutes.</p>
   * @public
   */
  expiryTimeInMinutes: number | undefined;

  /**
   * <p>The timestamp when the session was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The current available spending limits.</p>
   * @public
   */
  availableLimits?: AvailableLimits | undefined;

  /**
   * <p>The timestamp when the session was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Response structure for creating a payment session.</p>
 * @public
 */
export interface CreatePaymentSessionResponse {
  /**
   * <p>The created payment session.</p>
   * @public
   */
  paymentSession: PaymentSession | undefined;
}

/**
 * <p>Request structure for deleting a payment session.</p>
 * @public
 */
export interface DeletePaymentSessionRequest {
  /**
   * <p>The user ID making the delete request. Must match the session's userId.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The payment manager ARN. Must match the session's paymentManagerArn.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The payment session ID to delete.</p>
   * @public
   */
  paymentSessionId: string | undefined;
}

/**
 * <p>Response structure for deleting a payment session.</p>
 * @public
 */
export interface DeletePaymentSessionResponse {
  /**
   * <p>The status of the deletion. Always DELETED for successful hard delete.</p>
   * @public
   */
  status: PaymentSessionStatus | undefined;
}

/**
 * <p>Request structure for getting a payment session.</p>
 * @public
 */
export interface GetPaymentSessionRequest {
  /**
   * <p>The user ID associated with this payment session.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The agent name associated with this request, used for observability.</p>
   * @public
   */
  agentName?: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns this session.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The ID of the payment session to retrieve.</p>
   * @public
   */
  paymentSessionId: string | undefined;
}

/**
 * <p>Response structure for getting a payment session.</p>
 * @public
 */
export interface GetPaymentSessionResponse {
  /**
   * <p>The payment session details.</p>
   * @public
   */
  paymentSession: PaymentSession | undefined;
}

/**
 * <p>Request structure for listing payment sessions.</p>
 * @public
 */
export interface ListPaymentSessionsRequest {
  /**
   * <p>The user ID associated with the payment sessions.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The agent name associated with this request, used for observability.</p>
   * @public
   */
  agentName?: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns the sessions.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>Token for pagination to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary information about a payment session.</p>
 * @public
 */
export interface PaymentSessionSummary {
  /**
   * <p>The unique identifier of the payment session.</p>
   * @public
   */
  paymentSessionId: string | undefined;

  /**
   * <p>The ARN of the payment manager that owns this session.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The user ID associated with this session.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>The session expiry time in minutes.</p>
   * @public
   */
  expiryTimeInMinutes: number | undefined;

  /**
   * <p>The timestamp when the session was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the session was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Response structure for listing payment sessions.</p>
 * @public
 */
export interface ListPaymentSessionsResponse {
  /**
   * <p>List of payment session summaries matching the request criteria.</p>
   * @public
   */
  paymentSessions: PaymentSessionSummary[] | undefined;

  /**
   * <p>Token for pagination to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The input for a crypto X402 payment.</p>
 * @public
 */
export interface CryptoX402PaymentInput {
  /**
   * <p>The version of the X402 protocol.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The X402 payment payload.</p>
   * @public
   */
  payload: __DocumentType | undefined;
}

/**
 * <p>The payment input details, which vary by payment type.</p>
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
   * <p>Input for a crypto X402 payment.</p>
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
 * <p>Request structure for processing a payment.</p>
 * @public
 */
export interface ProcessPaymentRequest {
  /**
   * <p>The user ID associated with this payment.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The agent name associated with this request, used for observability.</p>
   * @public
   */
  agentName?: string | undefined;

  /**
   * <p>The ARN of the payment manager.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The ID of the payment session.</p>
   * @public
   */
  paymentSessionId: string | undefined;

  /**
   * <p>The ID of the payment instrument to use.</p>
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * <p>The type of payment to process.</p>
   * @public
   */
  paymentType: PaymentType | undefined;

  /**
   * <p>The payment input details specific to the payment type.</p>
   * @public
   */
  paymentInput: PaymentInput | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The output from a crypto X402 payment.</p>
 * @public
 */
export interface CryptoX402PaymentOutput {
  /**
   * <p>The version of the X402 protocol.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The X402 payment response payload.</p>
   * @public
   */
  payload: __DocumentType | undefined;
}

/**
 * <p>The payment output details, which vary by payment type.</p>
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
   * <p>Output from a crypto X402 payment.</p>
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
 * <p>Response structure for processing a payment.</p>
 * @public
 */
export interface ProcessPaymentResponse {
  /**
   * <p>The unique identifier of the processed payment.</p>
   * @public
   */
  processPaymentId: string | undefined;

  /**
   * <p>The ARN of the payment manager.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The ID of the payment session used.</p>
   * @public
   */
  paymentSessionId: string | undefined;

  /**
   * <p>The ID of the payment instrument used.</p>
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * <p>The type of payment processed.</p>
   * @public
   */
  paymentType: PaymentType | undefined;

  /**
   * <p>The status of the payment.</p>
   * @public
   */
  status: PaymentStatus | undefined;

  /**
   * <p>The payment output details specific to the payment type.</p>
   * @public
   */
  paymentOutput: PaymentOutput | undefined;

  /**
   * <p>The timestamp when the payment was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the payment was last updated.</p>
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
