// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  BlockchainChainId,
  CryptoWalletNetwork,
  Currency,
  DescriptorType,
  EventFilterCondition,
  ExtractionJobStatus,
  ExtractionMode,
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
  Branch,
  Conversational,
  ExtractionConfig,
  MemoryContent,
  MemoryJsonData,
  MemoryRecordMetadataValue,
  MetadataValue,
  PayloadType,
} from "./models_0";

/**
 * @public
 */
export interface CreateEventInput {
  /**
   * The identifier of the AgentCore Memory resource in which to create the event.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * The identifier of the actor associated with this event. An actor represents an entity that participates in sessions and generates events.
   *
   * @public
   */
  actorId: string | undefined;

  /**
   * The identifier of the session in which this event occurs. A session represents a sequence of related events.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * The timestamp when the event occurred. If not specified, the current time is used.
   *
   * @public
   */
  eventTimestamp: Date | undefined;

  /**
   * The content payload of the event. This can include conversational data, JSON data, or binary content.
   *
   * @public
   */
  payload: PayloadType[] | undefined;

  /**
   * The branch information for this event. Branches allow for organizing events into different conversation threads or paths.
   *
   * @public
   */
  branch?: Branch | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, AgentCore ignores the request, but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The key-value metadata to attach to the event.
   *
   * @public
   */
  metadata?: Record<string, MetadataValue> | undefined;

  /**
   * Controls long-term memory extraction for this event. When set to `SKIP`, the event is stored in short-term memory but is excluded from long-term memory extraction. If not specified, the event is processed for extraction as usual.
   *
   * @public
   */
  extractionMode?: ExtractionMode | undefined;

  /**
   * The extraction configuration for long-term memory records. Use this parameter to specify namespace variable keys and their values for namespace substitution during extraction.
   *
   * @public
   */
  extractionConfig?: ExtractionConfig | undefined;
}

/**
 * Contains information about an event in an AgentCore Memory resource.
 *
 * @public
 */
export interface Event {
  /**
   * The identifier of the AgentCore Memory resource containing the event.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * The identifier of the actor associated with the event.
   *
   * @public
   */
  actorId: string | undefined;

  /**
   * The identifier of the session containing the event.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The unique identifier of the event.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The timestamp when the event occurred.
   *
   * @public
   */
  eventTimestamp: Date | undefined;

  /**
   * The content payload of the event.
   *
   * @public
   */
  payload: PayloadType[] | undefined;

  /**
   * The branch information for the event.
   *
   * @public
   */
  branch?: Branch | undefined;

  /**
   * Metadata associated with an event.
   *
   * @public
   */
  metadata?: Record<string, MetadataValue> | undefined;
}

/**
 * @public
 */
export interface CreateEventOutput {
  /**
   * The event that was created.
   *
   * @public
   */
  event: Event | undefined;
}

/**
 * @public
 */
export interface DeleteEventInput {
  /**
   * The identifier of the AgentCore Memory resource from which to delete the event.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * The identifier of the session containing the event to delete.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The identifier of the event to delete.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The identifier of the actor associated with the event to delete.
   *
   * @public
   */
  actorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventOutput {
  /**
   * The identifier of the event that was deleted.
   *
   * @public
   */
  eventId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMemoryRecordInput {
  /**
   * The identifier of the AgentCore Memory resource from which to delete the memory record.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * The identifier of the memory record to delete.
   *
   * @public
   */
  memoryRecordId: string | undefined;

  /**
   * The namespace of the memory record to delete. This value is used for IAM condition key authorization.
   *
   * @public
   */
  namespace?: string | undefined;
}

/**
 * @public
 */
export interface DeleteMemoryRecordOutput {
  /**
   * The identifier of the memory record that was deleted.
   *
   * @public
   */
  memoryRecordId: string | undefined;
}

/**
 * @public
 */
export interface GetEventInput {
  /**
   * The identifier of the AgentCore Memory resource containing the event.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * The identifier of the session containing the event.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The identifier of the actor associated with the event.
   *
   * @public
   */
  actorId: string | undefined;

  /**
   * The identifier of the event to retrieve.
   *
   * @public
   */
  eventId: string | undefined;
}

/**
 * @public
 */
export interface GetEventOutput {
  /**
   * The requested event information.
   *
   * @public
   */
  event: Event | undefined;
}

/**
 * @public
 */
export interface GetMemoryRecordInput {
  /**
   * The identifier of the AgentCore Memory resource containing the memory record.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * The identifier of the memory record to retrieve.
   *
   * @public
   */
  memoryRecordId: string | undefined;

  /**
   * The namespace of the memory record to retrieve. This value is used for IAM condition key authorization.
   *
   * @public
   */
  namespace?: string | undefined;
}

/**
 * Contains information about a memory record in an AgentCore Memory resource.
 *
 * @public
 */
export interface MemoryRecord {
  /**
   * The unique identifier of the memory record.
   *
   * @public
   */
  memoryRecordId: string | undefined;

  /**
   * The content of the memory record.
   *
   * @public
   */
  content: MemoryContent | undefined;

  /**
   * The identifier of the memory strategy associated with this record.
   *
   * @public
   */
  memoryStrategyId: string | undefined;

  /**
   * The namespaces associated with this memory record. Namespaces help organize and categorize memory records.
   *
   * @public
   */
  namespaces: string[] | undefined;

  /**
   * The timestamp when the memory record was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp based on which the memory record was ingested. This reflects the time of the source content that the record was derived from, which can differ from `createdAt`, the time the record itself was written.
   *
   * @public
   */
  timestamp?: Date | undefined;

  /**
   * A map of metadata key-value pairs associated with a memory record.
   *
   * @public
   */
  metadata?: Record<string, MemoryRecordMetadataValue> | undefined;

  /**
   * The timestamp at which the memory record expires and becomes eligible for deletion. This value is set when a record expiry (long-term memory time-to-live) applies to the record, either from the strategy the record belongs to or from a record expiry provided on the batch request that created or updated it. If the record has no expiry configured, this value is not present and the record does not expire.
   *
   * @public
   */
  expiresAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetMemoryRecordOutput {
  /**
   * The requested memory record.
   *
   * @public
   */
  memoryRecord: MemoryRecord | undefined;
}

/**
 * A single content payload item to ingest. A payload item contains either conversational or JSON content.
 *
 * @public
 */
export type IngestPayloadType =
  | IngestPayloadType.ConversationalMember
  | IngestPayloadType.JsonMember
  | IngestPayloadType.$UnknownMember;

/**
 * @public
 */
export namespace IngestPayloadType {
  /**
   * The conversational content for this payload item.
   *
   * @public
   */
  export interface ConversationalMember {
    conversational: Conversational;
    json?: never;
    $unknown?: never;
  }

  /**
   * The JSON content for this payload item.
   *
   * @public
   */
  export interface JsonMember {
    conversational?: never;
    json: MemoryJsonData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    conversational?: never;
    json?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    conversational: (value: Conversational) => T;
    json: (value: MemoryJsonData) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The content included directly in the request as one or more payload items.
 *
 * @public
 */
export interface InlineMemoryContent {
  /**
   * The list of content payload items to ingest.
   *
   * @public
   */
  payload: IngestPayloadType[] | undefined;
}

/**
 * The source of the content to ingest. Only inline content is supported.
 *
 * @public
 */
export type ContentSource =
  | ContentSource.InlineMember
  | ContentSource.$UnknownMember;

/**
 * @public
 */
export namespace ContentSource {
  /**
   * The content included directly in the request.
   *
   * @public
   */
  export interface InlineMember {
    inline: InlineMemoryContent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    inline?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    inline: (value: InlineMemoryContent) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface IngestDataInput {
  /**
   * The identifier of the AgentCore Memory resource to ingest content into.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * The content to ingest. Only inline content is supported.
   *
   * @public
   */
  source: ContentSource | undefined;

  /**
   * The timestamp of when the content occurred.
   *
   * @public
   */
  contentTimestamp: Date | undefined;

  /**
   * The identifier of the actor associated with this content. An actor represents an entity that participates in sessions and generates content.
   *
   * @public
   */
  actorId: string | undefined;

  /**
   * The identifier of the session that the content belongs to. If not provided, a session identifier is generated and returned in the response.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * The extraction configuration for long-term memory records. Use this parameter to specify namespace variable keys and their values for namespace substitution during extraction.
   *
   * @public
   */
  extractionConfig?: ExtractionConfig | undefined;

  /**
   * The key-value metadata to attach to the content.
   *
   * @public
   */
  metadata?: Record<string, MetadataValue> | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, AgentCore ignores the request, but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface IngestDataOutput {
  /**
   * The identifier of the session that the service ingested the content into. This value echoes the session identifier from the request, or the identifier that the service generated when you did not provide one.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface ListActorsInput {
  /**
   * The identifier of the AgentCore Memory resource for which to list actors.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * The maximum number of results to return in a single call. The default value is 20.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListActorsOutput {
  /**
   * The list of actor summaries.
   *
   * @public
   */
  actorSummaries: ActorSummary[] | undefined;

  /**
   * The token to use in a subsequent request to get the next set of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains filter criteria for branches when listing events.
 *
 * @public
 */
export interface BranchFilter {
  /**
   * The name of the branch to filter by.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specifies whether to include parent branches in the results. Set to true to include parent branches, or false to exclude them.
   *
   * @public
   */
  includeParentBranches?: boolean | undefined;
}

/**
 * Left expression of the event metadata filter.
 *
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
   * Key associated with the metadata in an event.
   *
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
 * Right expression of the `eventMetadata`filter.
 *
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
   * Value associated with the key in `eventMetadata`.
   *
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
 * Filter expression for retrieving events based on metadata associated with an event.
 *
 * @public
 */
export interface EventMetadataFilterExpression {
  /**
   * Left operand of the event metadata filter expression.
   *
   * @public
   */
  left: LeftExpression | undefined;

  /**
   * Operator applied to the event metadata filter expression.
   *
   * @public
   */
  operator: OperatorType | undefined;

  /**
   * Right operand of the event metadata filter expression.
   *
   * @public
   */
  right?: RightExpression | undefined;
}

/**
 * Contains filter criteria for listing events.
 *
 * @public
 */
export interface FilterInput {
  /**
   * The branch filter criteria to apply when listing events.
   *
   * @public
   */
  branch?: BranchFilter | undefined;

  /**
   * Event metadata filter criteria to apply when retrieving events.
   *
   * @public
   */
  eventMetadata?: EventMetadataFilterExpression[] | undefined;
}

/**
 * @public
 */
export interface ListEventsInput {
  /**
   * The identifier of the AgentCore Memory resource for which to list events.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * The identifier of the session for which to list events.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The identifier of the actor for which to list events.
   *
   * @public
   */
  actorId: string | undefined;

  /**
   * Specifies whether to include event payloads in the response. Set to true to include payloads, or false to exclude them.
   *
   * @public
   */
  includePayloads?: boolean | undefined;

  /**
   * Filter criteria to apply when listing events.
   *
   * @public
   */
  filter?: FilterInput | undefined;

  /**
   * The maximum number of results to return in a single call. The default value is 20.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventsOutput {
  /**
   * The list of events that match the specified criteria.
   *
   * @public
   */
  events: Event[] | undefined;

  /**
   * The token to use in a subsequent request to get the next set of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Filters for querying memory extraction jobs based on various criteria.
 *
 * @public
 */
export interface ExtractionJobFilterInput {
  /**
   * The memory strategy identifier to filter extraction jobs by. If specified, only extraction jobs with this strategy ID are returned.
   *
   * @public
   */
  strategyId?: string | undefined;

  /**
   * The unique identifier of the session. If specified, only extraction jobs with this session ID are returned.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * The identifier of the actor. If specified, only extraction jobs with this actor ID are returned.
   *
   * @public
   */
  actorId?: string | undefined;

  /**
   * The status of the extraction job. If specified, only extraction jobs with this status are returned.
   *
   * @public
   */
  status?: ExtractionJobStatus | undefined;
}

/**
 * @public
 */
export interface ListMemoryExtractionJobsInput {
  /**
   * The unique identifier of the memory to list extraction jobs for.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * The maximum number of results to return in a single call. The default value is 20.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Filter criteria to apply when listing extraction jobs.
   *
   * @public
   */
  filter?: ExtractionJobFilterInput | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Metadata information associated with this message.
 *
 * @public
 */
export interface MessageMetadata {
  /**
   * The identifier of the event associated with this message.
   *
   * @public
   */
  eventId: string | undefined;

  /**
   * The position of this message within that event’s ordered list of messages.
   *
   * @public
   */
  messageIndex: number | undefined;
}

/**
 * The list of messages that compose this extraction job.
 *
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
   * The list of messages that compose this extraction job.
   *
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
 * Metadata information associated with this extraction job.
 *
 * @public
 */
export interface ExtractionJobMetadata {
  /**
   * The unique identifier for the extraction job.
   *
   * @public
   */
  jobID: string | undefined;

  /**
   * The messages associated with the extraction job.
   *
   * @public
   */
  messages: ExtractionJobMessages | undefined;

  /**
   * The current status of the extraction job.
   *
   * @public
   */
  status?: ExtractionJobStatus | undefined;

  /**
   * The cause of failure, if the job did not complete successfully.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The identifier of the memory strategy for this extraction job.
   *
   * @public
   */
  strategyId?: string | undefined;

  /**
   * The identifier of the session for this extraction job.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * The identifier of the actor for this extraction job.
   *
   * @public
   */
  actorId?: string | undefined;
}

/**
 * @public
 */
export interface ListMemoryExtractionJobsOutput {
  /**
   * List of extraction job metadata matching the specified criteria.
   *
   * @public
   */
  jobs: ExtractionJobMetadata[] | undefined;

  /**
   * Token to retrieve the next page of results, if available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The left-hand side of a memory record metadata filter expression.
 *
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
   * The metadata key to filter on.
   *
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
 * The right-hand side of a memory record metadata filter expression.
 *
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
   * The metadata value to compare against.
   *
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
 * Filters to apply to metadata associated with a memory. Specify the metadata key and value in the `left` and `right` fields and use the `operator` field to define the relationship to match.
 *
 * @public
 */
export interface MemoryMetadataFilterExpression {
  /**
   * The metadata key to evaluate.
   *
   * @public
   */
  left: MemoryRecordLeftExpression | undefined;

  /**
   * The relationship between the metadata key and value to match when applying the metadata filter.
   *
   * @public
   */
  operator: MemoryRecordOperatorType | undefined;

  /**
   * The value to compare against. Required for all operators except EXISTS and NOT_EXISTS.
   *
   * @public
   */
  right?: MemoryRecordRightExpression | undefined;
}

/**
 * @public
 */
export interface ListMemoryRecordsInput {
  /**
   * The identifier of the AgentCore Memory resource for which to list memory records.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * The exact namespace to filter memory records by. Returns all memory records that matches the provided namespace. Either `namespace` or `namespacePath` is required.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * Use namespacePath for hierarchical retrievals. Return all memory records where namespace falls under the same parent hierarchy. Either `namespace` or `namespacePath` is required.
   *
   * @public
   */
  namespacePath?: string | undefined;

  /**
   * The memory strategy identifier to filter memory records by. If specified, only memory records with this strategy ID are returned.
   *
   * @public
   */
  memoryStrategyId?: string | undefined;

  /**
   * The maximum number of results to return in a single call. The default value is 20.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of metadata filter expressions to scope the returned memory records.
   *
   * @public
   */
  metadataFilters?: MemoryMetadataFilterExpression[] | undefined;
}

/**
 * Contains summary information about a memory record.
 *
 * @public
 */
export interface MemoryRecordSummary {
  /**
   * The unique identifier of the memory record.
   *
   * @public
   */
  memoryRecordId: string | undefined;

  /**
   * The content of the memory record.
   *
   * @public
   */
  content: MemoryContent | undefined;

  /**
   * The identifier of the memory strategy associated with this record.
   *
   * @public
   */
  memoryStrategyId: string | undefined;

  /**
   * The namespaces associated with this memory record.
   *
   * @public
   */
  namespaces: string[] | undefined;

  /**
   * The timestamp when the memory record was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The relevance score of the memory record when returned as part of a search result. Higher values indicate greater relevance to the search query.
   *
   * @public
   */
  score?: number | undefined;

  /**
   * The timestamp based on which the memory record was ingested. This reflects the time of the source content that the record was derived from, which can differ from `createdAt`, the time the record itself was written.
   *
   * @public
   */
  timestamp?: Date | undefined;

  /**
   * A map of metadata key-value pairs associated with a memory record.
   *
   * @public
   */
  metadata?: Record<string, MemoryRecordMetadataValue> | undefined;
}

/**
 * @public
 */
export interface ListMemoryRecordsOutput {
  /**
   * The list of memory record summaries that match the specified criteria.
   *
   * @public
   */
  memoryRecordSummaries: MemoryRecordSummary[] | undefined;

  /**
   * The token to use in a subsequent request to get the next set of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains filter criteria for listing sessions.
 *
 * @public
 */
export interface SessionFilter {
  /**
   * The event filter condition to apply. Use this to filter sessions based on event presence.
   *
   * @public
   */
  eventFilter?: EventFilterCondition | undefined;
}

/**
 * @public
 */
export interface ListSessionsInput {
  /**
   * The identifier of the AgentCore Memory resource for which to list sessions.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * The identifier of the actor for which to list sessions.
   *
   * @public
   */
  actorId: string | undefined;

  /**
   * The maximum number of results to return in a single call. The default value is 20.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Filter criteria to apply when listing sessions.
   *
   * @public
   */
  filter?: SessionFilter | undefined;
}

/**
 * Contains summary information about a session in an AgentCore Memory resource.
 *
 * @public
 */
export interface SessionSummary {
  /**
   * The unique identifier of the session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The identifier of the actor associated with the session.
   *
   * @public
   */
  actorId: string | undefined;

  /**
   * The timestamp when the session was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListSessionsOutput {
  /**
   * The list of session summaries that match the specified criteria.
   *
   * @public
   */
  sessionSummaries: SessionSummary[] | undefined;

  /**
   * The token to use in a subsequent request to get the next set of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains search criteria for retrieving memory records.
 *
 * @public
 */
export interface SearchCriteria {
  /**
   * The search query to use for finding relevant memory records.
   *
   * @public
   */
  searchQuery: string | undefined;

  /**
   * The memory strategy identifier to filter memory records by.
   *
   * @public
   */
  memoryStrategyId?: string | undefined;

  /**
   * The maximum number of top-scoring memory records to return. This value is used for semantic search ranking.
   *
   * @public
   */
  topK?: number | undefined;

  /**
   * Filters to apply to metadata associated with a memory.
   *
   * @public
   */
  metadataFilters?: MemoryMetadataFilterExpression[] | undefined;
}

/**
 * @public
 */
export interface RetrieveMemoryRecordsInput {
  /**
   * The identifier of the AgentCore Memory resource from which to retrieve memory records.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * The exact namespace to filter memory records by. Searches for memory records that matches the provided namespace value. Either `namespace` or `namespacePath` is required.
   *
   * @public
   */
  namespace?: string | undefined;

  /**
   * Use namespacePath for hierarchical retrievals. Return all memory records where namespace falls under the same parent hierarchy. Either `namespace` or `namespacePath` is required.
   *
   * @public
   */
  namespacePath?: string | undefined;

  /**
   * The search criteria to use for finding relevant memory records. This includes the search query, memory strategy ID, and other search parameters.
   *
   * @public
   */
  searchCriteria: SearchCriteria | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in a single call. The default value is 20.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface RetrieveMemoryRecordsOutput {
  /**
   * The list of memory record summaries that match the search criteria, ordered by relevance.
   *
   * @public
   */
  memoryRecordSummaries: MemoryRecordSummary[] | undefined;

  /**
   * The token to use in a subsequent request to get the next set of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents the metadata of a memory extraction job such as the message identifiers that compose this job.
 *
 * @public
 */
export interface ExtractionJob {
  /**
   * The unique identifier of the extraction job.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface StartMemoryExtractionJobInput {
  /**
   * The unique identifier of the memory for which to start extraction jobs.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * Extraction job to start in this operation.
   *
   * @public
   */
  extractionJob: ExtractionJob | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotent processing of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartMemoryExtractionJobOutput {
  /**
   * Extraction Job ID that was attempted to start.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * Authentication method using JWT with key ID and subject claims.
 *
 * @public
 */
export interface LinkedAccountDeveloperJwt {
  /**
   * The key ID (kid) from the JWT header. Identifies which key was used to sign the JWT.
   *
   * @public
   */
  kid: string | undefined;

  /**
   * The subject (sub) claim from the JWT payload. Identifies the principal that is the subject of the JWT.
   *
   * @public
   */
  sub: string | undefined;
}

/**
 * Linked account using an email address.
 *
 * @public
 */
export interface LinkedAccountEmail {
  /**
   * The email address used for the linked account. Must be a valid email format.
   *
   * @public
   */
  emailAddress: string | undefined;
}

/**
 * OAuth2 authentication information for third-party providers.
 *
 * @public
 */
export interface OAuth2Authentication {
  /**
   * The subject (sub) claim from the OAuth2 provider. Uniquely identifies the user at the provider.
   *
   * @public
   */
  sub: string | undefined;

  /**
   * The email address from the OAuth2 provider.
   *
   * @public
   */
  emailAddress?: string | undefined;

  /**
   * The user's name from the OAuth2 provider.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The username from the OAuth2 provider.
   *
   * @public
   */
  username?: string | undefined;
}

/**
 * Authentication method using OAuth2 providers. Supports Google, Apple, X, Telegram, and GitHub providers.
 *
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
   * Google OAuth2 authentication.
   *
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
   * Apple OAuth2 authentication.
   *
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
   * X (formerly Twitter) OAuth2 authentication.
   *
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
   * Telegram OAuth2 authentication.
   *
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
   * GitHub OAuth2 authentication.
   *
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
 * Linked account using a phone number in E.164 format.
 *
 * @public
 */
export interface LinkedAccountSms {
  /**
   * The phone number in E.164 format (e.g., +1234567890).
   *
   * @public
   */
  phoneNumber: string | undefined;
}

/**
 * Represents different linked accounts that can be linked to an embedded wallet. Supports email, SMS, JWT, and OAuth2 approaches.
 *
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
   * Email-based linked account.
   *
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
   * SMS-based linked account using phone number.
   *
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
   * Developer JWT linked account with key ID and subject.
   *
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
   * OAuth2 provider linked account (Google, Apple, X, Telegram, GitHub).
   *
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
 * Embedded crypto wallet instrument details.
 *
 * @public
 */
export interface EmbeddedCryptoWallet {
  /**
   * The blockchain network for this embedded crypto wallet. Supported networks: ETHEREUM, SOLANA.
   *
   * @public
   */
  network: CryptoWalletNetwork | undefined;

  /**
   * List of linked accounts linked to this wallet. Each represents a way the end user can authenticate to this wallet.
   *
   * @public
   */
  linkedAccounts: LinkedAccount[] | undefined;

  /**
   * The wallet address on the specified blockchain network.
   *
   * @public
   */
  walletAddress?: string | undefined;

  /**
   * URL for the end user to complete a provider-specific action such as wallet linking or onboarding.
   *
   * @public
   */
  redirectUrl?: string | undefined;
}

/**
 * Details specific to the instrument type.
 *
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
   * Embedded crypto wallet managed directly by end user.
   *
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
 * Request structure for creating a payment instrument.
 *
 * @public
 */
export interface CreatePaymentInstrumentRequest {
  /**
   * The user ID associated with this payment instrument.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The agent name associated with this request, used for observability.
   *
   * @public
   */
  agentName?: string | undefined;

  /**
   * The ARN of the payment manager that owns this payment instrument.
   *
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The ID of the payment connector to use for this instrument.
   *
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * The type of payment instrument being created.
   *
   * @public
   */
  paymentInstrumentType: PaymentInstrumentType | undefined;

  /**
   * The details of the payment instrument.
   *
   * @public
   */
  paymentInstrumentDetails: PaymentInstrumentDetails | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Represents a payment instrument.
 *
 * @public
 */
export interface PaymentInstrument {
  /**
   * The unique identifier for this payment instrument.
   *
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * The ARN of the payment manager that owns this payment instrument.
   *
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The ID of the payment connector associated with this instrument.
   *
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * The user ID associated with this payment instrument.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * The type of payment instrument (e.g., EMBEDDED_CRYPTO_WALLET).
   *
   * @public
   */
  paymentInstrumentType: PaymentInstrumentType | undefined;

  /**
   * The details specific to the payment instrument type.
   *
   * @public
   */
  paymentInstrumentDetails: PaymentInstrumentDetails | undefined;

  /**
   * The timestamp when this payment instrument was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The current status of this payment instrument.
   *
   * @public
   */
  status: PaymentInstrumentStatus | undefined;

  /**
   * The timestamp when this payment instrument was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Response structure for creating a payment instrument.
 *
 * @public
 */
export interface CreatePaymentInstrumentResponse {
  /**
   * The created payment instrument.
   *
   * @public
   */
  paymentInstrument: PaymentInstrument | undefined;
}

/**
 * Request structure for deleting a payment instrument.
 *
 * @public
 */
export interface DeletePaymentInstrumentRequest {
  /**
   * The user ID making the delete request. Must match the instrument's userId.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The payment manager ARN. Must match the instrument's paymentManagerArn.
   *
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The payment connector ID. Must match the instrument's paymentConnectorId.
   *
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * The payment instrument ID to delete.
   *
   * @public
   */
  paymentInstrumentId: string | undefined;
}

/**
 * Response structure for deleting a payment instrument.
 *
 * @public
 */
export interface DeletePaymentInstrumentResponse {
  /**
   * The status of the instrument after deletion. Always DELETED for successful soft delete.
   *
   * @public
   */
  status: PaymentInstrumentStatus | undefined;
}

/**
 * Request structure for getting a payment instrument.
 *
 * @public
 */
export interface GetPaymentInstrumentRequest {
  /**
   * The user ID associated with this payment instrument.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The agent name associated with this request, used for observability.
   *
   * @public
   */
  agentName?: string | undefined;

  /**
   * The ARN of the payment manager that owns this payment instrument.
   *
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The ID of the payment connector.
   *
   * @public
   */
  paymentConnectorId?: string | undefined;

  /**
   * The ID of the payment instrument to retrieve.
   *
   * @public
   */
  paymentInstrumentId: string | undefined;
}

/**
 * Response structure for getting a payment instrument.
 *
 * @public
 */
export interface GetPaymentInstrumentResponse {
  /**
   * The payment instrument details.
   *
   * @public
   */
  paymentInstrument: PaymentInstrument | undefined;
}

/**
 * Request structure for getting payment instrument balance.
 *
 * @public
 */
export interface GetPaymentInstrumentBalanceRequest {
  /**
   * The user ID associated with this payment instrument.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The agent name associated with this request, used for observability.
   *
   * @public
   */
  agentName?: string | undefined;

  /**
   * The ARN of the payment manager that owns this payment instrument.
   *
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The ID of the payment connector associated with this instrument.
   *
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * The ID of the payment instrument to query balance for.
   *
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * The specific blockchain chain to query balance on. Required because balances are chain-specific.
   *
   * @public
   */
  chain: BlockchainChainId | undefined;

  /**
   * The token to query balance for. Only tokens supported for X402 payments are returned.
   *
   * @public
   */
  token: InstrumentBalanceToken | undefined;
}

/**
 * A single token balance entry.
 *
 * @public
 */
export interface TokenBalance {
  /**
   * Raw balance in the smallest denomination (e.g., USDC base units where 1 USDC = 1000000).
   *
   * @public
   */
  amount: string | undefined;

  /**
   * Number of decimal places for the token (e.g., 6 for USDC).
   *
   * @public
   */
  decimals: number | undefined;

  /**
   * The supported token for this balance.
   *
   * @public
   */
  token: InstrumentBalanceToken | undefined;

  /**
   * The blockchain network family (ETHEREUM or SOLANA).
   *
   * @public
   */
  network: CryptoWalletNetwork | undefined;

  /**
   * The specific blockchain chain.
   *
   * @public
   */
  chain: BlockchainChainId | undefined;
}

/**
 * Response structure for getting payment instrument balance.
 *
 * @public
 */
export interface GetPaymentInstrumentBalanceResponse {
  /**
   * The ID of the payment instrument.
   *
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * The balance of the supported token on the requested chain.
   *
   * @public
   */
  tokenBalance: TokenBalance | undefined;
}

/**
 * Request structure for listing payment instruments.
 *
 * @public
 */
export interface ListPaymentInstrumentsRequest {
  /**
   * The user ID associated with the payment instruments.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The agent name associated with this request, used for observability.
   *
   * @public
   */
  agentName?: string | undefined;

  /**
   * The ARN of the payment manager that owns the payment instruments.
   *
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The ID of the payment connector to filter by.
   *
   * @public
   */
  paymentConnectorId?: string | undefined;

  /**
   * Token for pagination to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary of a payment instrument for list operations.
 *
 * @public
 */
export interface PaymentInstrumentSummary {
  /**
   * The unique identifier for this payment instrument.
   *
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * The ARN of the payment manager that owns this payment instrument.
   *
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The ID of the payment connector associated with this instrument.
   *
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * The user ID associated with this payment instrument.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * The type of payment instrument (e.g., EMBEDDED_CRYPTO_WALLET).
   *
   * @public
   */
  paymentInstrumentType: PaymentInstrumentType | undefined;

  /**
   * The current status of this payment instrument.
   *
   * @public
   */
  status: PaymentInstrumentStatus | undefined;

  /**
   * The timestamp when this payment instrument was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when this payment instrument was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Response structure for listing payment instruments.
 *
 * @public
 */
export interface ListPaymentInstrumentsResponse {
  /**
   * List of payment instrument summaries matching the request criteria.
   *
   * @public
   */
  paymentInstruments: PaymentInstrumentSummary[] | undefined;

  /**
   * Token for pagination to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Represents a monetary amount with a currency.
 *
 * @public
 */
export interface Amount {
  /**
   * The numeric value of the amount.
   *
   * @public
   */
  value: string | undefined;

  /**
   * The currency code for the amount.
   *
   * @public
   */
  currency: Currency | undefined;
}

/**
 * The spending limits configuration for a payment session.
 *
 * @public
 */
export interface SessionLimits {
  /**
   * The maximum amount that can be spent in the session.
   *
   * @public
   */
  maxSpendAmount: Amount | undefined;
}

/**
 * Request structure for creating a payment session.
 *
 * @public
 */
export interface CreatePaymentSessionRequest {
  /**
   * The user ID associated with this payment session.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The agent name associated with this request, used for observability.
   *
   * @public
   */
  agentName?: string | undefined;

  /**
   * The ARN of the payment manager that owns this session.
   *
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The spending limits for this payment session.
   *
   * @public
   */
  limits?: SessionLimits | undefined;

  /**
   * The session expiry time in minutes. Must be between 15 and 480 minutes.
   *
   * @public
   */
  expiryTimeInMinutes: number | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * The available spending limits for a payment session.
 *
 * @public
 */
export interface AvailableLimits {
  /**
   * The remaining available amount that can be spent.
   *
   * @public
   */
  availableSpendAmount?: Amount | undefined;

  /**
   * The timestamp when the available limits were last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * A payment session for managing payment transactions.
 *
 * @public
 */
export interface PaymentSession {
  /**
   * The unique identifier of the payment session.
   *
   * @public
   */
  paymentSessionId: string | undefined;

  /**
   * The ARN of the payment manager that owns this session.
   *
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The spending limits for the payment session.
   *
   * @public
   */
  limits?: SessionLimits | undefined;

  /**
   * The user ID associated with this session.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * The session expiry time in minutes.
   *
   * @public
   */
  expiryTimeInMinutes: number | undefined;

  /**
   * The timestamp when the session was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The current available spending limits.
   *
   * @public
   */
  availableLimits?: AvailableLimits | undefined;

  /**
   * The timestamp when the session was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Response structure for creating a payment session.
 *
 * @public
 */
export interface CreatePaymentSessionResponse {
  /**
   * The created payment session.
   *
   * @public
   */
  paymentSession: PaymentSession | undefined;
}

/**
 * Request structure for deleting a payment session.
 *
 * @public
 */
export interface DeletePaymentSessionRequest {
  /**
   * The user ID making the delete request. Must match the session's userId.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The payment manager ARN. Must match the session's paymentManagerArn.
   *
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The payment session ID to delete.
   *
   * @public
   */
  paymentSessionId: string | undefined;
}

/**
 * Response structure for deleting a payment session.
 *
 * @public
 */
export interface DeletePaymentSessionResponse {
  /**
   * The status of the deletion. Always DELETED for successful hard delete.
   *
   * @public
   */
  status: PaymentSessionStatus | undefined;
}

/**
 * Request structure for getting a payment session.
 *
 * @public
 */
export interface GetPaymentSessionRequest {
  /**
   * The user ID associated with this payment session.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The agent name associated with this request, used for observability.
   *
   * @public
   */
  agentName?: string | undefined;

  /**
   * The ARN of the payment manager that owns this session.
   *
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The ID of the payment session to retrieve.
   *
   * @public
   */
  paymentSessionId: string | undefined;
}

/**
 * Response structure for getting a payment session.
 *
 * @public
 */
export interface GetPaymentSessionResponse {
  /**
   * The payment session details.
   *
   * @public
   */
  paymentSession: PaymentSession | undefined;
}

/**
 * Request structure for listing payment sessions.
 *
 * @public
 */
export interface ListPaymentSessionsRequest {
  /**
   * The user ID associated with the payment sessions.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The agent name associated with this request, used for observability.
   *
   * @public
   */
  agentName?: string | undefined;

  /**
   * The ARN of the payment manager that owns the sessions.
   *
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * Token for pagination to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a payment session.
 *
 * @public
 */
export interface PaymentSessionSummary {
  /**
   * The unique identifier of the payment session.
   *
   * @public
   */
  paymentSessionId: string | undefined;

  /**
   * The ARN of the payment manager that owns this session.
   *
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The user ID associated with this session.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * The session expiry time in minutes.
   *
   * @public
   */
  expiryTimeInMinutes: number | undefined;

  /**
   * The timestamp when the session was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the session was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Response structure for listing payment sessions.
 *
 * @public
 */
export interface ListPaymentSessionsResponse {
  /**
   * List of payment session summaries matching the request criteria.
   *
   * @public
   */
  paymentSessions: PaymentSessionSummary[] | undefined;

  /**
   * Token for pagination to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The input for a crypto X402 payment.
 *
 * @public
 */
export interface CryptoX402PaymentInput {
  /**
   * The version of the X402 protocol.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The X402 payment payload.
   *
   * @public
   */
  payload: __DocumentType | undefined;

  /**
   * The maximum on-chain Permit2 allowance to grant before signing the payment authorization, in the asset's smallest denomination. This field is valid only for the `upto` (metered) scheme; supplying it for the `exact` scheme returns a validation error.
   *
   * When set, the service approves an ERC-20 allowance for this amount before processing the payment. The approval sets, rather than adds to, the wallet's allowance. Set this field only when the wallet needs approving, for example on its first `upto` payment, to avoid a redundant on-chain transaction. Omit the field to skip allowance handling. This is the default, and the only behavior for the `exact` scheme.
   *
   * @public
   */
  permit2AllowanceLimit?: string | undefined;
}

/**
 * Contains the payment challenge from a 402 Payment Required response. Forward the raw `WWW-Authenticate: Payment` header value verbatim. In response, you receive a payment credential that satisfies the challenge. Provide exactly one challenge per request.
 *
 * @public
 */
export interface MppPaymentInput {
  /**
   * The MPP protocol version, for example "1" or "2".
   *
   * @public
   */
  version: string | undefined;

  /**
   * The raw `WWW-Authenticate: Payment` header value from the 402 response, passed verbatim. Provide exactly one entry. The service uses this value to generate the payment credential.
   *
   * @public
   */
  wwwAuthenticateHeaders: string[] | undefined;

  /**
   * Authorizes the service to sign a payment whose blockchain network (gas) fees are charged to your wallet, on top of the payment amount.
   *
   * The challenge indicates who sponsors the network fees. When the challenge does not sponsor them, the service signs the payment only if this field is `true`. Otherwise it returns a validation error, so you can decide whether to pay the fees or obtain a challenge that sponsors them.
   *
   * Optional. When omitted or `false`, you decline to pay network fees. This field has no effect on challenges that already sponsor the fees.
   *
   * @public
   */
  buyerPaysGasFees?: boolean | undefined;
}

/**
 * The payment input details, which vary by payment type.
 *
 * @public
 */
export type PaymentInput =
  | PaymentInput.CryptoX402Member
  | PaymentInput.MppMember
  | PaymentInput.$UnknownMember;

/**
 * @public
 */
export namespace PaymentInput {
  /**
   * Input for a crypto X402 payment.
   *
   * @public
   */
  export interface CryptoX402Member {
    cryptoX402: CryptoX402PaymentInput;
    mpp?: never;
    $unknown?: never;
  }

  /**
   * Contains the payment challenge from a 402 Payment Required response. Forward the raw `WWW-Authenticate: Payment` header value verbatim. In response, you receive a payment credential that satisfies the challenge. Provide exactly one challenge per request.
   *
   * @public
   */
  export interface MppMember {
    cryptoX402?: never;
    mpp: MppPaymentInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cryptoX402?: never;
    mpp?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cryptoX402: (value: CryptoX402PaymentInput) => T;
    mpp: (value: MppPaymentInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Request structure for processing a payment.
 *
 * @public
 */
export interface ProcessPaymentRequest {
  /**
   * The user ID associated with this payment.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The agent name associated with this request, used for observability.
   *
   * @public
   */
  agentName?: string | undefined;

  /**
   * The ARN of the payment manager.
   *
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The ID of the payment session.
   *
   * @public
   */
  paymentSessionId: string | undefined;

  /**
   * The ID of the payment instrument to use.
   *
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * The type of payment to process.
   *
   * @public
   */
  paymentType: PaymentType | undefined;

  /**
   * The payment input details specific to the payment type.
   *
   * @public
   */
  paymentInput: PaymentInput | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * The output from a crypto X402 payment.
 *
 * @public
 */
export interface CryptoX402PaymentOutput {
  /**
   * The version of the X402 protocol.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The X402 payment response payload.
   *
   * @public
   */
  payload: __DocumentType | undefined;
}

/**
 * Contains the payment credential, ready to retry the request.
 *
 * @public
 */
export interface MppPaymentOutput {
  /**
   * The MPP protocol version, for example "1" or "2".
   *
   * @public
   */
  version: string | undefined;

  /**
   * The id of the challenge that was paid, echoed from the input challenge so you can correlate the result without decoding the credential.
   *
   * @public
   */
  selectedPaymentId: string | undefined;

  /**
   * Ready-to-send value for the `Authorization` header, in the form "Payment &lt;base64url-token&gt;". Attach this header and retry the original request. To inspect the full credential, base64url-decode the token.
   *
   * @public
   */
  paymentCredential: string | undefined;
}

/**
 * The payment output details, which vary by payment type.
 *
 * @public
 */
export type PaymentOutput =
  | PaymentOutput.CryptoX402Member
  | PaymentOutput.MppMember
  | PaymentOutput.$UnknownMember;

/**
 * @public
 */
export namespace PaymentOutput {
  /**
   * Output from a crypto X402 payment.
   *
   * @public
   */
  export interface CryptoX402Member {
    cryptoX402: CryptoX402PaymentOutput;
    mpp?: never;
    $unknown?: never;
  }

  /**
   * Contains the payment credential, ready to retry the request.
   *
   * @public
   */
  export interface MppMember {
    cryptoX402?: never;
    mpp: MppPaymentOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cryptoX402?: never;
    mpp?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cryptoX402: (value: CryptoX402PaymentOutput) => T;
    mpp: (value: MppPaymentOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Response structure for processing a payment.
 *
 * @public
 */
export interface ProcessPaymentResponse {
  /**
   * The unique identifier of the processed payment.
   *
   * @public
   */
  processPaymentId: string | undefined;

  /**
   * The ARN of the payment manager.
   *
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * The ID of the payment session used.
   *
   * @public
   */
  paymentSessionId: string | undefined;

  /**
   * The ID of the payment instrument used.
   *
   * @public
   */
  paymentInstrumentId: string | undefined;

  /**
   * The type of payment processed.
   *
   * @public
   */
  paymentType: PaymentType | undefined;

  /**
   * The status of the payment.
   *
   * @public
   */
  status: PaymentStatus | undefined;

  /**
   * The payment output details specific to the payment type.
   *
   * @public
   */
  paymentOutput: PaymentOutput | undefined;

  /**
   * The timestamp when the payment was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the payment was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface SearchRegistryRecordsRequest {
  /**
   * The search query to find matching registry records.
   *
   * @public
   */
  searchQuery: string | undefined;

  /**
   * The list of registry identifiers to search within. Currently, you can specify exactly one registry identifier. You can provide either the full Amazon Web Services Resource Name (ARN) or the 12-character alphanumeric registry ID.
   *
   * @public
   */
  registryIds: string[] | undefined;

  /**
   * The maximum number of records to return in a single call. Valid values are 1 through 20. The default value is 10.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A metadata filter expression to narrow search results. Uses structured JSON operators including field-level operators (`$eq`, `$ne`, `$in`) and logical operators (`$and`, `$or`) on filterable fields (`name`, `descriptorType`, `version`). For example, to filter by descriptor type: `\{"descriptorType": \{"$eq": "MCP"\}\}`. To combine filters: `\{"$and": [\{"descriptorType": \{"$eq": "MCP"\}\}, \{"name": \{"$eq": "my-tool"\}\}]\}`.
   *
   * @public
   */
  filters?: __DocumentType | undefined;
}

/**
 * A custom descriptor configuration for a registry record.
 *
 * @public
 */
export interface CustomDescriptor {
  /**
   * The inline content of the custom descriptor.
   *
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * The MCP server definition with a schema version and inline content. The `schemaVersion` identifies the version of the MCP server configuration schema.
 *
 * @public
 */
export interface ServerDefinition {
  /**
   * The schema version of the MCP server configuration. The schema version identifies the format of the server definition content.
   *
   * @public
   */
  schemaVersion?: string | undefined;

  /**
   * The inline content of the server definition.
   *
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * The MCP tools definition with a protocol version and inline content. The `protocolVersion` identifies the MCP protocol version that the tools conform to. This differs from `schemaVersion` in the server definition, which identifies the server configuration schema format.
 *
 * @public
 */
export interface ToolsDefinition {
  /**
   * The MCP protocol version that the tools conform to. This differs from the `schemaVersion` field in the server definition, which identifies the server configuration schema format.
   *
   * @public
   */
  protocolVersion?: string | undefined;

  /**
   * The inline content of the tools definition.
   *
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * The MCP (Model Context Protocol) descriptor configuration for a registry record. Contains the server definition and tools definition.
 *
 * @public
 */
export interface McpDescriptor {
  /**
   * The MCP server definition that describes the server configuration.
   *
   * @public
   */
  server: ServerDefinition | undefined;

  /**
   * The MCP tools definition that describes the available tools.
   *
   * @public
   */
  tools: ToolsDefinition | undefined;
}

/**
 * Contains the descriptor configuration for a registry record. Only the field that matches the record's `descriptorType` is populated.
 *
 * @public
 */
export interface Descriptors {
  /**
   * The MCP (Model Context Protocol) descriptor configuration. Populated when the record's `descriptorType` is `MCP`.
   *
   * @public
   */
  mcp?: McpDescriptor | undefined;

  /**
   * The A2A (Agent-to-Agent) descriptor configuration. Populated when the record's `descriptorType` is `A2A`.
   *
   * @public
   */
  a2a?: A2aDescriptor | undefined;

  /**
   * The custom descriptor configuration. Populated when the record's `descriptorType` is `CUSTOM`.
   *
   * @public
   */
  custom?: CustomDescriptor | undefined;

  /**
   * The agent skills descriptor configuration. Populated when the record's `descriptorType` is `AGENT_SKILLS`.
   *
   * @public
   */
  agentSkills?: AgentSkillsDescriptor | undefined;
}

/**
 * Summary information about a registry record.
 *
 * @public
 */
export interface RegistryRecordSummary {
  /**
   * The Amazon Resource Name (ARN) of the registry that this record belongs to.
   *
   * @public
   */
  registryArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the registry record.
   *
   * @public
   */
  recordArn: string | undefined;

  /**
   * The unique identifier of the registry record.
   *
   * @public
   */
  recordId: string | undefined;

  /**
   * The name of the registry record.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the registry record.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of descriptor associated with this registry record.
   *
   * @public
   */
  descriptorType: DescriptorType | undefined;

  /**
   * The descriptor configurations for this registry record.
   *
   * @public
   */
  descriptors: Descriptors | undefined;

  /**
   * The version of the registry record.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The current status of the registry record.
   *
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * The date and time when the registry record was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The date and time when the registry record was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface SearchRegistryRecordsResponse {
  /**
   * The list of registry records that match the search query, ordered by relevance.
   *
   * @public
   */
  registryRecords: RegistryRecordSummary[] | undefined;
}
