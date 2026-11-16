// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  BatchGetEventErrorCode,
  BlobContentType,
  MemorySortField,
  MemoryStrategyType,
  MemoryType,
  MessageRole,
  MetadataMode,
  SortOrder,
  SpaceStatus,
} from "./enums";

/**
 * @public
 */
export interface BatchGetEventInput {
  /**
   * <p>The ID of the space.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The actor that every requested event must belong to. Omit it to skip this check. The operation reports an event that doesn't match in <code>errors</code> as <code>RESOURCE_NOT_FOUND</code>.</p>
   * @public
   */
  actorId?: string | undefined;

  /**
   * <p>The session that every requested event must belong to. Omit it to skip this check. The operation reports an event that doesn't match in <code>errors</code> as <code>RESOURCE_NOT_FOUND</code>.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The IDs of the events to get: 1 to 10, without duplicates.</p>
   * @public
   */
  eventIds: string[] | undefined;
}

/**
 * <p>A requested event that the call didn't return, and the reason.</p>
 * @public
 */
export interface BatchGetEventError {
  /**
   * <p>The ID of the requested event.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The reason that the call didn't return the event.</p>
   * @public
   */
  errorCode: BatchGetEventErrorCode | undefined;

  /**
   * <p>A human-readable description.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>An object in Amazon S3.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>The object's S3 URI, for example <code>s3://bucket/key</code>. The bucket must be in the space's Region. You need <code>s3:GetObject</code> on the object, and <code>kms:Decrypt</code> on its key if the object uses SSE-KMS. The event doesn't store the object itself.</p>
   * @public
   */
  uri: string | undefined;
}

/**
 * <p>The source of a blob's content. Set exactly one member. Currently, the only member is <code>s3Location</code>.</p>
 * @public
 */
export type BlobSource =
  | BlobSource.S3LocationMember
  | BlobSource.$UnknownMember;

/**
 * @public
 */
export namespace BlobSource {
  /**
   * <p>The S3 object holding the document.</p>
   * @public
   */
  export interface S3LocationMember {
    s3Location: S3Location;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3Location?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3Location: (value: S3Location) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A document stored in Amazon S3, such as a PDF, and its media type.</p>
 * @public
 */
export interface BlobPayload {
  /**
   * <p>The document's media type. Only <code>application/pdf</code> is supported. Any other value fails with <code>ValidationException</code>.</p>
   * @public
   */
  contentType: BlobContentType | undefined;

  /**
   * <p>The location of the document.</p>
   * @public
   */
  source: BlobSource | undefined;
}

/**
 * <p>The content of a conversation turn.</p>
 * @public
 */
export interface MessageContent {
  /**
   * <p>The text of the turn.</p>
   * @public
   */
  text: string | undefined;
}

/**
 * <p>A conversation turn.</p>
 * @public
 */
export interface Message {
  /**
   * <p>The author of the turn.</p>
   * @public
   */
  role: MessageRole | undefined;

  /**
   * <p>The content of the turn.</p>
   * @public
   */
  content: MessageContent | undefined;
}

/**
 * <p>Conversation turns.</p>
 * @public
 */
export interface UnifiedConversationalObject {
  /**
   * <p>The conversation turns, in order. The order matters for extraction.</p>
   * @public
   */
  messages: Message[] | undefined;
}

/**
 * <p>The source of a conversation. Set exactly one member. Currently, the only member is <code>object</code>.</p>
 * @public
 */
export type UnifiedConversationalSource =
  | UnifiedConversationalSource.ObjectMember
  | UnifiedConversationalSource.$UnknownMember;

/**
 * @public
 */
export namespace UnifiedConversationalSource {
  /**
   * <p>The conversation turns.</p>
   * @public
   */
  export interface ObjectMember {
    object: UnifiedConversationalObject;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    object?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    object: (value: UnifiedConversationalObject) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Conversation turns in the service's own format.</p>
 * @public
 */
export interface UnifiedConversational {
  /**
   * <p>The conversation.</p>
   * @public
   */
  source: UnifiedConversationalSource | undefined;
}

/**
 * <p>Conversational content. Exactly one member is set.</p>
 * @public
 */
export type ConversationalPayload =
  | ConversationalPayload.UnifiedMember
  | ConversationalPayload.$UnknownMember;

/**
 * @public
 */
export namespace ConversationalPayload {
  /**
   * <p>Conversation turns in the service's own format.</p>
   * @public
   */
  export interface UnifiedMember {
    unified: UnifiedConversational;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    unified?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    unified: (value: UnifiedConversational) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The source of structured content. Set exactly one member. Currently, the only member is <code>json</code>.</p>
 * @public
 */
export type StructuredDataSource =
  | StructuredDataSource.JsonMember
  | StructuredDataSource.$UnknownMember;

/**
 * @public
 */
export namespace StructuredDataSource {
  /**
   * <p>The structured content, as a JSON object of at most 1 MiB when serialized as UTF-8, nested at most 10 levels deep.</p>
   * @public
   */
  export interface JsonMember {
    json: __DocumentType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    json?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    json: (value: __DocumentType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Structured content, as a JSON object.</p>
 * @public
 */
export interface StructuredDataPayload {
  /**
   * <p>The structured content.</p>
   * @public
   */
  source: StructuredDataSource | undefined;
}

/**
 * <p>The event content. Exactly one member must be set.</p>
 * @public
 */
export type EventPayload =
  | EventPayload.BlobMember
  | EventPayload.ConversationalMember
  | EventPayload.StructuredDataMember
  | EventPayload.$UnknownMember;

/**
 * @public
 */
export namespace EventPayload {
  /**
   * <p>Conversation turns.</p>
   * @public
   */
  export interface ConversationalMember {
    conversational: ConversationalPayload;
    structuredData?: never;
    blob?: never;
    $unknown?: never;
  }

  /**
   * <p>Structured (non-conversational) content, for example a deployment result that an agent should remember.</p>
   * @public
   */
  export interface StructuredDataMember {
    conversational?: never;
    structuredData: StructuredDataPayload;
    blob?: never;
    $unknown?: never;
  }

  /**
   * <p>A document stored in Amazon S3, such as a PDF.</p>
   * @public
   */
  export interface BlobMember {
    conversational?: never;
    structuredData?: never;
    blob: BlobPayload;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    conversational?: never;
    structuredData?: never;
    blob?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    conversational: (value: ConversationalPayload) => T;
    structuredData: (value: StructuredDataPayload) => T;
    blob: (value: BlobPayload) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>An event, including its payload.</p>
 * @public
 */
export interface Event {
  /**
   * <p>The event's ID.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The ID of the space.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The ID of the actor the event belongs to.</p>
   * @public
   */
  actorId: string | undefined;

  /**
   * <p>The ID of the session the event belongs to.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The event's content, as submitted to <code>CreateEvent</code>.</p>
   * @public
   */
  payload: EventPayload | undefined;

  /**
   * <p>The event's metadata tags, as supplied to <code>CreateEvent</code>. May be empty.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>The time the event occurred.</p>
   * @public
   */
  eventTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface BatchGetEventOutput {
  /**
   * <p>The events found, in the order that you requested their IDs.</p>
   * @public
   */
  events: Event[] | undefined;

  /**
   * <p>An entry for each requested event that the call didn't return. Empty when the call returned every event.</p>
   * @public
   */
  errors: BatchGetEventError[] | undefined;
}

/**
 * <p>Information about a request field that failed validation.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The field name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A message that describes why the field failed validation.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface CreateEventInput {
  /**
   * <p>The ID of the space that owns the event, for example <code>sp-02864597b164</code>.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The ID of the actor (end user or agent) that the event belongs to.</p>
   * @public
   */
  actorId: string | undefined;

  /**
   * <p>The session the event belongs to. Send every event of one conversation with the same session ID, so that <code>SUMMARY</code> strategies summarize the conversation as one session. If you omit it, the service generates a session ID and returns it.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>When the event occurred. The default is the time that the service receives the request.</p>
   * @public
   */
  eventTimestamp?: Date | undefined;

  /**
   * <p>The event content. Set exactly one union member.</p>
   * @public
   */
  payload: EventPayload | undefined;

  /**
   * <p>Metadata tags to store with the event. Memories derived from the event carry the same tags. Keys that begin with <code>x-amz-</code>, the keys <code>documentS3Source</code> and <code>documentS3Url</code>, and other keys that the service uses internally are reserved: a request that sets one fails with <code>ValidationException</code>, and the message names the key.</p> <p>A space can use at most 50 distinct metadata keys across all of its events and memories. A request that would add a key beyond that fails with <code>ValidationException</code>. Reuse an existing key instead.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that makes the request idempotent. Within 2 hours of the first request, a retry with the same token and the same request, including the same <code>sessionId</code>, returns the same event. If you omit <code>sessionId</code>, the service generates a new one on each attempt, so a retry fails with <code>ConflictException</code>. Reusing the token with different request content also fails with <code>ConflictException</code>. <code>eventTimestamp</code> isn't compared. After 2 hours, the token starts a new event.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Specifies whether to extract memories from this event. The default is <code>true</code>. Set it to <code>false</code> to store the event without extraction: the service skips strategies that infer memories, and still indexes the event's turns for <code>SearchEvents</code>. A document submitted as a <code>blob</code> is still extracted.</p>
   * @public
   */
  infer?: boolean | undefined;
}

/**
 * <p>The stored event's identifiers. Call <code>GetEvent</code> for the payload.</p>
 * @public
 */
export interface EventDetail {
  /**
   * <p>The event's ID, assigned by the service. Use it with <code>GetEvent</code> and <code>DeleteEvent</code>.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The ID of the space.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The ID of the actor the event belongs to.</p>
   * @public
   */
  actorId: string | undefined;

  /**
   * <p>The ID of the session the event belongs to, including one the service generated.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>When the event occurred: the value supplied, or the time the request was received.</p>
   * @public
   */
  eventTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface CreateEventOutput {
  /**
   * <p>The stored event's identifiers: its ID, session, and timestamp.</p>
   * @public
   */
  event: EventDetail | undefined;
}

/**
 * <p>The request for <code>CreateMemory</code>.</p>
 * @public
 */
export interface CreateMemoryInput {
  /**
   * <p>The ID of the space that owns the memory, for example <code>sp-02864597b164</code>.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The name of the strategy that the memory belongs to. The space must already declare the strategy, and the memory's type comes from that strategy. The name must be 1 to 64 characters: letters, digits, periods, hyphens, and underscores, starting with a letter or digit.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The memory text, stored and embedded as provided.</p>
   * @public
   */
  content: string | undefined;

  /**
   * <p>The actor (end user or agent) that owns the memory.</p>
   * @public
   */
  actorId: string | undefined;

  /**
   * <p>The session that the memory belongs to. If you omit it, the service generates a session ID and returns it.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>Metadata tags to store with the memory. Keys that begin with <code>x-amz-</code>, the key <code>documentS3Source</code>, and other keys that the service uses internally are reserved: a request that sets one fails with <code>ValidationException</code>, and the message names the key.</p> <p>A space can use at most 50 distinct metadata keys across all of its events and memories. A request that would add a key beyond that fails with <code>ValidationException</code>. Reuse an existing key instead.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that makes the request idempotent. Within 2 hours of the first request, a retry with the same token returns the same <code>memoryId</code> instead of creating a second memory. Reusing the token with a different <code>name</code>, <code>content</code>, <code>metadata</code>, <code>actorId</code>, or <code>sessionId</code> fails with <code>ConflictException</code>. If you omit <code>sessionId</code>, a retry with the same token gets the same session. If you omit the token, each call creates a new memory.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>The memory as <code>CreateMemory</code> acknowledges it: its identifiers. The memory isn't searchable yet when the call returns.</p>
 * @public
 */
export interface CreateMemoryDetail {
  /**
   * <p>The final ID of the memory. Until the memory is indexed, <code>GetMemory</code>, <code>UpdateMemory</code>, and <code>DeleteMemory</code> return <code>ResourceNotFoundException</code> for it.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The ID of the space.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The name of the strategy the memory belongs to.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the actor the memory belongs to.</p>
   * @public
   */
  actorId: string | undefined;

  /**
   * <p>The ID of the session the memory belongs to, including one the service generated.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * <p>The acknowledged memory. It isn't searchable yet when the call returns.</p>
 * @public
 */
export interface CreateMemoryOutput {
  /**
   * <p>The memory, identified but not yet indexed.</p>
   * @public
   */
  memory: CreateMemoryDetail | undefined;
}

/**
 * <p>Encryption settings for a space.</p>
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * <p>The ARN of a customer managed AWS KMS key that encrypts the space's data. The key must be an enabled symmetric encryption key in the space's Region, and you need permission to create grants on it (<code>kms:CreateGrant</code>). Otherwise, the request fails with <code>ValidationException</code> or <code>AccessDeniedException</code>.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * <p>Settings for a memory strategy. The defaults described here apply when you create a strategy. In <code>UpdateSpace</code>, a member you omit for a kept strategy keeps its current value.</p>
 * @public
 */
export interface MemoryStrategyConfiguration {
  /**
   * <p>Instructions that define what a <code>CUSTOM</code> strategy extracts, up to 30,720 characters. Required for a <code>CUSTOM</code> strategy: <code>CreateSpace</code> and <code>UpdateSpace</code> fail with <code>ValidationException</code> if a <code>CUSTOM</code> strategy has none.</p> <p>Only <code>CUSTOM</code> strategies use it. <code>SEMANTIC</code> and <code>SUMMARY</code> strategies always extract with the service's built-in instructions: the service accepts and stores a prompt on them, and <code>GetSpace</code> returns it, but extraction doesn't use it.</p>
   * @public
   */
  extractionPrompt?: string | undefined;

  /**
   * <p>Extract once this many messages have accumulated, from 1 to 1000. Lower values extract more often, in smaller batches. The default is 12.</p> <p>Messages accumulate until the first of <code>extractEveryNMessages</code>, <code>extractEveryNTokens</code>, and <code>idleTimeoutSeconds</code> is reached. The service then extracts them together in one pass.</p>
   * @public
   */
  extractEveryNMessages?: number | undefined;

  /**
   * <p>Extract once this many tokens of conversation have accumulated, from 1 to 80,000, however few messages that takes. Use it to bound how much text one extraction call carries when message sizes vary widely. Omit it to bound a batch only by <code>extractEveryNMessages</code>, <code>idleTimeoutSeconds</code>, and the service's maximum batch size.</p>
   * @public
   */
  extractEveryNTokens?: number | undefined;

  /**
   * <p>Extract what has accumulated once the conversation has been idle for this many seconds, from 1 to 86,400. The default is 60. This is what extracts the end of a conversation that stops. Raise it when the pauses in your conversations are longer than that, so that one exchange isn't split across several extraction passes.</p>
   * @public
   */
  idleTimeoutSeconds?: number | undefined;

  /**
   * <p>How many of the strategy's stored memories that are most relevant to the conversation to include in the extraction prompt, from 0 to 20, to improve extraction and reduce duplicates. If you omit this or set it to 0, the service uses its default (see <code>extractionSeedRecentN</code>). When this and <code>extractionSeedRecentN</code> are both set, the two sets of memories are combined without duplicates.</p>
   * @public
   */
  extractionSeedTopK?: number | undefined;

  /**
   * <p>How many of the strategy's most recent stored memories to include in the extraction prompt, from 0 to 20. If you omit this or set it to 0, the service uses its default: no seeding for most strategy types, and the 10 most recent memories for a <code>SUMMARY</code> strategy when neither seed setting is given. When this and <code>extractionSeedTopK</code> are both set, the two sets of memories are combined without duplicates.</p>
   * @public
   */
  extractionSeedRecentN?: number | undefined;

  /**
   * <p>Specifies whether the strategy consolidates memories. With consolidation, each new memory is compared with similar stored memories, and the service adds it, updates a stored memory, or skips it, so duplicate or contradicting facts don't accumulate. Without it, every extracted memory is stored as a new memory, which costs less and keeps a full history.</p> <p>When omitted, the default depends on the strategy's type: on for <code>SEMANTIC</code> and <code>SUMMARY</code>, off for <code>CUSTOM</code>.</p>
   * @public
   */
  consolidationEnabled?: boolean | undefined;
}

/**
 * <p>A memory strategy: how a space extracts one kind of memory from its events.</p>
 * @public
 */
export interface MemoryStrategy {
  /**
   * <p>The type of memory the strategy extracts.</p>
   * @public
   */
  type: MemoryStrategyType | undefined;

  /**
   * <p>A name for the strategy, unique within the space. Omit it to have the service generate one from the type, for example <code>semantic_1</code>. The name must be 1 to 64 characters: letters, digits, periods, hyphens, and underscores, starting with a letter or digit. A strategy's name can't be changed, and the strategy's memories are stored under it: a strategy added under a new name starts with no memories.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the strategy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Settings for the strategy. When you create a strategy, omit it to use the defaults for the strategy's type.</p> <p>A <code>CUSTOM</code> strategy must set <code>extractionPrompt</code>.</p>
   * @public
   */
  configuration?: MemoryStrategyConfiguration | undefined;
}

/**
 * <p>A tag: a key-value pair that you attach to a space.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateSpaceRequest {
  /**
   * <p>A name for the space, unique within your account in the Region. If another space already has the name, the request fails with <code>ConflictException</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The memory strategies that extract memories from the space's events: up to 10 strategies, each with a name that is unique within the space.</p> <p>Optional. Omit it, or send an empty list, to create a space with no memory strategies. Such a space stores the conversation events you send it and returns them through <code>SearchEvents</code> and <code>ListEvents</code>, but extracts no memories and has none to search. You can add strategies later with <code>UpdateSpace</code>.</p> <p>The serialized list can be at most 384 KiB.</p>
   * @public
   */
  memoryStrategies?: MemoryStrategy[] | undefined;

  /**
   * <p>How many days the space keeps each event, from 1 to 365. The default is 90.</p>
   * @public
   */
  eventExpiryDays?: number | undefined;

  /**
   * <p>How many days the space keeps each memory, from 0 to 3650, counted from when the service writes the memory. Updating a memory with <code>UpdateMemory</code> doesn't restart the count. 0 means memories never expire. If you omit it, memories never expire.</p> <p>Searches and lists leave out a memory past its expiry, and reading, updating, or deleting it returns <code>ResourceNotFoundException</code>.</p>
   * @public
   */
  memoryExpiryDays?: number | undefined;

  /**
   * <p>The model that extracts and consolidates memories for every strategy in the space, as an Amazon Bedrock model ID without an inference-profile prefix: <code>anthropic.claude-opus-5-5</code> or <code>anthropic.claude-haiku-5-5</code>. Another value fails with <code>ValidationException</code>, and the message lists the supported IDs. Omit it to use the service default, which can change over time and isn't returned by <code>GetSpace</code>. Setting a value pins the model.</p>
   * @public
   */
  extractionModelId?: string | undefined;

  /**
   * <p>The AWS KMS key that encrypts the space's data. Omit it, or omit its <code>kmsKeyArn</code>, to use an AWS owned key. You can't change the key after you create the space.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>The tags to add to the space.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that makes the request idempotent. A retry with the same token and the same parameters within 2 hours returns the space that the first request created, instead of creating another. Reusing the token with different parameters, or while the first request is still in progress, fails with <code>ConflictException</code>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSpaceResponse {
  /**
   * <p>The ID of the space.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the space.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the space.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of the space: <code>CREATING</code>.</p>
   * @public
   */
  status: SpaceStatus | undefined;

  /**
   * <p>When the space was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteEventInput {
  /**
   * <p>The ID of the space.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The ID of the event to delete.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The actor that the event must belong to. Omit it to skip this check. If it doesn't match the stored event, the call fails with <code>ResourceNotFoundException</code>, as if the event did not exist.</p>
   * @public
   */
  actorId?: string | undefined;

  /**
   * <p>The session that the event must belong to. Omit it to skip this check. If it doesn't match the stored event, the call fails with <code>ResourceNotFoundException</code>, as if the event did not exist.</p>
   * @public
   */
  sessionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventOutput {
  /**
   * <p>The ID of the deleted event.</p>
   * @public
   */
  eventId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMemoryInput {
  /**
   * <p>The ID of the space that owns the memory.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The ID of the memory to delete.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The ID of the actor that the memory must belong to. Omit it to skip this check. If it doesn't match the stored memory, the call fails with <code>ResourceNotFoundException</code>, as if the memory did not exist.</p>
   * @public
   */
  actorId?: string | undefined;

  /**
   * <p>The name of the strategy that the memory must belong to. Omit it to skip this check. If it doesn't match the stored memory, the call fails with <code>ResourceNotFoundException</code>, as if the memory did not exist.</p>
   * @public
   */
  strategyName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteMemoryOutput {
  /**
   * <p>The ID of the deleted memory.</p>
   * @public
   */
  memoryId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpaceRequest {
  /**
   * <p>The ID of the space to delete.</p>
   * @public
   */
  spaceId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpaceResponse {
  /**
   * <p>The ID of the space.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The status of the space: <code>DELETING</code>.</p>
   * @public
   */
  status: SpaceStatus | undefined;
}

/**
 * <p>System-generated provenance for a memory or event: the owning actor and session, and the creation and last-update timestamps. <code>SearchMemories</code>, <code>SearchEvents</code>, <code>ListMemories</code>, and <code>GetMemory</code> return the same block.</p> <p> <code>ListMemories</code> and <code>GetMemory</code> always return <code>createdAt</code> and <code>updatedAt</code>. The search operations return what is recorded and omit the block when nothing is.</p> <p>In a query, the timestamps are <code>system_metadata.created_at</code> and <code>system_metadata.updated_at</code>. Scope by owner with the top-level parameters (<code>actorId</code> on the search operations, <code>actorIds</code> on <code>ListMemories</code>) and <code>sessionIds</code> (<code>SearchEvents</code> and <code>ListMemories</code>). The search operations reject actor and session fields inside the query or sort.</p>
 * @public
 */
export interface SystemMetadata {
  /**
   * <p>The owning actor. Absent when none was recorded.</p>
   * @public
   */
  actorId?: string | undefined;

  /**
   * <p>The owning session. Absent when none was recorded.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>When the record was created. Always present on <code>ListMemories</code> and <code>GetMemory</code>. It can be absent from search results.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>When the record was last updated. Equals <code>createdAt</code> for a record that has never been updated, and always for a <code>SearchEvents</code> result.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * <p>A <code>SearchEvents</code> result: the matching chunk of an event and its provenance. Unlike <code>EventSummary</code> from <code>ListEvents</code>, it has a relevance score and the matched content, but not the full payload.</p>
 * @public
 */
export interface EventSearchSummary {
  /**
   * <p>The ID of the event that the chunk belongs to. Use it with <code>GetEvent</code> or <code>DeleteEvent</code>.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The relevance score of the result. A higher score is more relevant. Scores aren't normalized to a fixed range and can be greater than 1, so use them only to order results.</p>
   * @public
   */
  score?: number | undefined;

  /**
   * <p>Provenance for the chunk: the owning actor and session, and when it was created and last updated. It is the same block that <code>ListMemories</code> and <code>SearchMemories</code> return. Event chunks are never modified, so <code>updatedAt</code> always equals <code>createdAt</code>.</p> <p>Absent when the service has no provenance for the chunk.</p>
   * @public
   */
  systemMetadata?: SystemMetadata | undefined;

  /**
   * <p>The event's metadata tags. All values are strings. In a query, filter on a tag as <code>metadata.&lt;key&gt;</code>.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>The text of the matching chunk.</p>
   * @public
   */
  matchedContent?: string | undefined;
}

/**
 * <p>A summary of an event, as returned by <code>ListEvents</code>. It doesn't include the payload.</p>
 * @public
 */
export interface EventSummary {
  /**
   * <p>The event's ID.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The event's metadata tags, as supplied to <code>CreateEvent</code>. May be empty.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>The time the event occurred.</p>
   * @public
   */
  eventTimestamp: Date | undefined;
}

/**
 * @public
 */
export interface GetEventInput {
  /**
   * <p>The ID of the space.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The event's ID, as returned by <code>CreateEvent</code>, <code>ListEvents</code>, or <code>SearchEvents</code>.</p>
   * @public
   */
  eventId: string | undefined;

  /**
   * <p>The actor the event must belong to. Omit it to skip this check. If it doesn't match the stored event, the call fails with <code>ResourceNotFoundException</code>, as if the event did not exist.</p>
   * @public
   */
  actorId?: string | undefined;

  /**
   * <p>The session the event must belong to. Omit it to skip this check. If it doesn't match the stored event, the call fails with <code>ResourceNotFoundException</code>, as if the event did not exist.</p>
   * @public
   */
  sessionId?: string | undefined;
}

/**
 * @public
 */
export interface GetEventOutput {
  /**
   * <p>The event, including its payload.</p>
   * @public
   */
  event: Event | undefined;
}

/**
 * @public
 */
export interface GetMemoryInput {
  /**
   * <p>The ID of the space that holds the memory.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The memory's ID, as returned by <code>SearchMemories</code> or <code>ListMemories</code>.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The ID of the actor the memory must belong to. Omit it to skip this check. If it doesn't match the stored memory, the call fails with <code>ResourceNotFoundException</code>, as if the memory did not exist.</p>
   * @public
   */
  actorId?: string | undefined;

  /**
   * <p>The name of the strategy the memory must belong to. Omit it to skip this check. If it doesn't match the stored memory, the call fails with <code>ResourceNotFoundException</code>, as if the memory did not exist.</p>
   * @public
   */
  strategyName?: string | undefined;
}

/**
 * <p>A memory, as returned by <code>GetMemory</code> and <code>UpdateMemory</code>. Unlike <code>MemoryListSummary</code> it includes <code>content</code>, and unlike <code>MemorySearchSummary</code> it has no relevance score.</p>
 * @public
 */
export interface Memory {
  /**
   * <p>The memory's ID, assigned by the service.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The memory type.</p>
   * @public
   */
  memoryType: MemoryType | undefined;

  /**
   * <p>The name of the strategy the memory belongs to, for example <code>user-facts</code>. A space can hold several strategies of the same type, so this tells them apart. Absent when the memory's strategy is no longer declared on the space, for example right after the strategy is deleted.</p>
   * @public
   */
  strategyName?: string | undefined;

  /**
   * <p>The memory text.</p>
   * @public
   */
  content: string | undefined;

  /**
   * <p>Provenance for the memory: the owning actor and session, and when it was created and last updated. Always present. <code>updatedAt</code> equals <code>createdAt</code> for a memory that has never been updated.</p>
   * @public
   */
  systemMetadata: SystemMetadata | undefined;

  /**
   * <p>The memory's metadata tags. All values are strings. May be empty.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetMemoryOutput {
  /**
   * <p>The memory. Always present: a memory that doesn't exist returns <code>ResourceNotFoundException</code>.</p>
   * @public
   */
  memory: Memory | undefined;
}

/**
 * @public
 */
export interface GetSpaceRequest {
  /**
   * <p>The ID of the space.</p>
   * @public
   */
  spaceId: string | undefined;
}

/**
 * @public
 */
export interface GetSpaceResponse {
  /**
   * <p>The ID of the space.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the space.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the space.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of the space.</p>
   * @public
   */
  status: SpaceStatus | undefined;

  /**
   * <p>Details about why the space is <code>FAILED</code>. Read it only when <code>status</code> is <code>FAILED</code>: it can still hold the reason for an earlier failure.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>When the space was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The space's memory strategies, including the names the service generated for strategies created without one. Empty for a space that has no memory strategies.</p>
   * @public
   */
  memoryStrategies?: MemoryStrategy[] | undefined;

  /**
   * <p>How many days the space keeps each event. Absent when it was never set, in which case the default of 90 days applies.</p>
   * @public
   */
  eventExpiryDays?: number | undefined;

  /**
   * <p>How many days the space keeps each memory. 0 means memories never expire. Absent when it was never set, in which case memories never expire.</p>
   * @public
   */
  memoryExpiryDays?: number | undefined;

  /**
   * <p>The model that extracts and consolidates memories for the space. Absent when it was never set, in which case the service default applies.</p>
   * @public
   */
  extractionModelId?: string | undefined;

  /**
   * <p>The AWS KMS key the space was created with. Absent when the space uses an AWS owned key.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface ListEventsInput {
  /**
   * <p>The ID of the space.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The actor whose events to list.</p>
   * @public
   */
  actorId: string | undefined;

  /**
   * <p>The session whose events to list. To find events across sessions, use <code>SearchEvents</code>.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>Inclusive upper bound on <code>eventTimestamp</code>: only events at or before this time are returned. Omit for no upper bound.</p>
   * @public
   */
  eventTimestampBefore?: Date | undefined;

  /**
   * <p>Inclusive lower bound on <code>eventTimestamp</code>: only events at or after this time are returned. Omit for no lower bound.</p> <p>If it's later than <code>eventTimestampBefore</code>, the request fails with <code>ValidationException</code>.</p>
   * @public
   */
  eventTimestampAfter?: Date | undefined;

  /**
   * <p>The order of the results by <code>eventTimestamp</code>: <code>ASC</code> or <code>DESC</code>. The default is <code>DESC</code>, most recent first.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>Returns only events whose metadata contains every one of these key-value pairs. Omit, or leave empty, for no metadata filter. The service applies the filter after it reads events, so a page can hold fewer than <code>maxResults</code> events, or none, and still return a <code>nextToken</code>. Keep paging until <code>nextToken</code> is absent.</p>
   * @public
   */
  metadataFilters?: Record<string, string> | undefined;

  /**
   * <p>The maximum number of events to return, from 1 to 100. The default is 20.</p>
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
   * <p>The events, without their payloads. Call <code>GetEvent</code> for an event's payload.</p>
   * @public
   */
  events: EventSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Absent when there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A memory type and, optionally, specific strategy names of that type. A space can hold several strategies of the same type, so the type and its names are given together.</p>
 * @public
 */
export interface StrategySelector {
  /**
   * <p>The memory type to search or list.</p>
   * @public
   */
  memoryType: MemoryType | undefined;

  /**
   * <p>Specific strategy names of <code>memoryType</code>. Omit it to include every strategy of that type.</p>
   * @public
   */
  memoryStrategyNames?: string[] | undefined;
}

/**
 * @public
 */
export interface ListMemoriesInput {
  /**
   * <p>The space whose memories to list.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The strategies to list, as selectors. A selector without <code>memoryStrategyNames</code> lists every strategy of its type, and omitting <code>memoryStrategies</code> lists every strategy in the space. A name that is not a declared strategy of that type fails with <code>ValidationException</code>.</p>
   * @public
   */
  memoryStrategies?: StrategySelector[] | undefined;

  /**
   * <p>Lists only memories owned by one of these actors. Combined with <code>sessionIds</code> by AND: a memory must match both filters when both are given. Omit for no actor filter. An empty list fails validation. A memory stored without an actor never matches an actor filter.</p>
   * @public
   */
  actorIds?: string[] | undefined;

  /**
   * <p>Lists only memories from one of these sessions. Combined with <code>actorIds</code> by AND. Omit for no session filter. An empty list fails validation. A memory stored without a session never matches a session filter.</p>
   * @public
   */
  sessionIds?: string[] | undefined;

  /**
   * <p>The timestamp to sort by, as returned in <code>systemMetadata</code>: <code>CREATED_AT</code> (the default) or <code>UPDATED_AT</code>.</p>
   * @public
   */
  sortBy?: MemorySortField | undefined;

  /**
   * <p>The sort order: <code>ASC</code> or <code>DESC</code>. The default is <code>DESC</code>, most recent first.</p>
   * @public
   */
  sortOrder?: SortOrder | undefined;

  /**
   * <p>The maximum number of memories to return, from 1 to 100. The default is 20.</p>
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
 * <p>A summary of a memory, as returned by <code>ListMemories</code>: its ID, type, provenance, and tags. It doesn't include <code>content</code>. Call <code>GetMemory</code> for the full memory.</p>
 * @public
 */
export interface MemoryListSummary {
  /**
   * <p>The memory's ID, assigned by the service. IDs are opaque, can contain hyphens and underscores, and can be up to 512 characters long.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The memory type.</p>
   * @public
   */
  memoryType: MemoryType | undefined;

  /**
   * <p>The name of the strategy the memory belongs to, for example <code>user-facts</code>: the strategy <code>memoryStrategies</code> selects on in <code>ListMemories</code>. Absent when the memory's strategy is no longer declared on the space, for example right after the strategy is deleted.</p>
   * @public
   */
  strategyName?: string | undefined;

  /**
   * <p>Provenance for the memory: the owning actor and session, and when it was created and last updated. Always present, with both timestamps.</p>
   * @public
   */
  systemMetadata: SystemMetadata | undefined;

  /**
   * <p>The memory's metadata tags. All values are strings.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMemoriesOutput {
  /**
   * <p>The memories, in the requested order. Empty when there are none.</p>
   * @public
   */
  memories: MemoryListSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Absent when there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSpacesRequest {
  /**
   * <p>The maximum number of spaces to return, from 1 to 100. The default is 100.</p>
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
 * <p>A summary of a space, as returned by <code>ListSpaces</code>.</p>
 * @public
 */
export interface SpaceSummary {
  /**
   * <p>The ID of the space.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the space.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the space.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The status of the space.</p>
   * @public
   */
  status: SpaceStatus | undefined;

  /**
   * <p>When the space was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListSpacesResponse {
  /**
   * <p>The spaces.</p>
   * @public
   */
  spaces: SpaceSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Absent when there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the space.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the space.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>A <code>SearchMemories</code> result: a matching memory and its relevance score.</p>
 * @public
 */
export interface MemorySearchSummary {
  /**
   * <p>The memory's ID, assigned by the service. Always present.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The memory type of the result.</p>
   * @public
   */
  memoryType?: MemoryType | undefined;

  /**
   * <p>The name of the strategy the memory belongs to, for example <code>user-facts</code>: the strategy <code>memoryStrategies</code> selects on in <code>SearchMemories</code>. Absent when the memory's strategy is no longer declared on the space, for example right after the strategy is deleted.</p>
   * @public
   */
  strategyName?: string | undefined;

  /**
   * <p>The memory text.</p>
   * @public
   */
  content?: string | undefined;

  /**
   * <p>The relevance score of the result. A higher score is more relevant. Scores aren't normalized to a fixed range and can be greater than 1, so use them only to order results.</p>
   * @public
   */
  score?: number | undefined;

  /**
   * <p>Provenance for the memory: the actor and session that own it, and when it was created and last updated. It is the same block that <code>ListMemories</code>, <code>GetMemory</code>, and <code>SearchEvents</code> return.</p> <p>In a query, filter or sort on the timestamps as <code>system_metadata.created_at</code> and <code>system_metadata.updated_at</code>. Scope by owner with the top-level <code>actorId</code>, not in the query. Searching memories doesn't filter by session.</p> <p>Absent when the service has no provenance for the memory.</p>
   * @public
   */
  systemMetadata?: SystemMetadata | undefined;

  /**
   * <p>The memory's metadata tags. All values are strings. In a query, filter on a tag as <code>metadata.&lt;key&gt;</code>.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>The IDs of the events the memory was derived from, without duplicates. Use them with <code>GetEvent</code> or <code>BatchGetEvent</code>, or to search those events' content with <code>SearchEvents</code> by filtering on <code>event_ids</code> in the query. Absent for a memory created directly with <code>CreateMemory</code>. A memory can be derived from several events. The service sets this value.</p>
   * @public
   */
  sourceEventIds?: string[] | undefined;
}

/**
 * @public
 */
export interface SearchEventsInput {
  /**
   * <p>The space whose events to search. Use <code>actorId</code> and <code>sessionIds</code> to narrow the search within it.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The actor whose events to search (exact match). Required: every search covers exactly one actor, and an event stored without an actor is never returned. Narrow the search further with <code>sessionIds</code>, combined by AND. This is the only way to filter by actor: a query that references <code>system_metadata.actor_id</code> fails with <code>ValidationException</code> (reason <code>nonFilterableField</code>).</p>
   * @public
   */
  actorId: string | undefined;

  /**
   * <p>Returns only events from one of these sessions (exact match). Combined with <code>actorId</code> by AND. Omit for no session filter. An empty list fails validation. An event stored without a session never matches a session filter. This is the only way to filter by session: a query that references <code>system_metadata.session_id</code> fails with <code>ValidationException</code> (reason <code>nonFilterableField</code>).</p>
   * @public
   */
  sessionIds?: string[] | undefined;

  /**
   * <p>The query: a subset of the OpenSearch Query DSL (see <code>SearchQuery</code>), validated by the same rules as on <code>SearchMemories</code>. Query event text as <code>text</code> and embeddings as <code>vector</code>. A search covers both conversation turns and chunks of documents submitted as a <code>blob</code>. You can't use actor and session fields here. Use the top-level <code>actorId</code> and <code>sessionIds</code>.</p> <p>To search only the content of particular events, filter on <code>event_ids</code> with <code>term</code> or <code>terms</code>, for example with the <code>sourceEventIds</code> that a <code>SearchMemories</code> result returns. A <code>terms</code> clause on <code>event_ids</code> can list up to 10 event IDs. More IDs fail with <code>ValidationException</code> (reason <code>queryBodyTooLarge</code>). You can use <code>event_ids</code> only in <code>term</code>, <code>terms</code>, and <code>exists</code> queries.</p>
   * @public
   */
  query: __DocumentType | undefined;

  /**
   * <p>The sort order (see <code>SearchSort</code>). Omit to return the most relevant events first.</p>
   * @public
   */
  sort?: __DocumentType | undefined;

  /**
   * <p>The maximum number of events to return, from 1 to 100. The default is 20.</p>
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
export interface SearchEventsOutput {
  /**
   * <p>The matching event chunks, in the order <code>sort</code> requests, or most relevant first when it has none. Empty when nothing matches. Each result is the matching chunk of an event. Call <code>GetEvent</code> for the whole event.</p>
   * @public
   */
  events: EventSearchSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Absent when there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SearchMemoriesInput {
  /**
   * <p>The space to search. Use <code>actorId</code> to narrow the search within it.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The strategies to search, as a list of selectors. Each selector names a memory type and, optionally, specific strategy names of that type. A space can hold several strategies of the same type. A selector without <code>memoryStrategyNames</code> searches every strategy of its type, and omitting <code>memoryStrategies</code> searches every strategy in the space. A name that is not a declared strategy of that type fails with <code>ValidationException</code>.</p>
   * @public
   */
  memoryStrategies?: StrategySelector[] | undefined;

  /**
   * <p>The actor whose memories to search (exact match). Required: every search covers exactly one actor, and a memory stored without an actor is never returned. This is the only way to filter by actor: a query that references <code>system_metadata.actor_id</code> fails with <code>ValidationException</code> (reason <code>nonFilterableField</code>).</p>
   * @public
   */
  actorId: string | undefined;

  /**
   * <p>The query: a subset of the OpenSearch Query DSL (see <code>SearchQuery</code>). You can't use the actor and session fields <code>system_metadata.actor_id</code> and <code>system_metadata.session_id</code> here. Use the top-level <code>actorId</code> to filter by actor. Searching memories doesn't filter by session.</p>
   * @public
   */
  query: __DocumentType | undefined;

  /**
   * <p>The sort order (see <code>SearchSort</code>). Omit to return the most relevant memories first.</p>
   * @public
   */
  sort?: __DocumentType | undefined;

  /**
   * <p>The maximum number of memories to return, from 1 to 100. The default is 20.</p>
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
export interface SearchMemoriesOutput {
  /**
   * <p>The matching memories, in the order <code>sort</code> requests, or most relevant first when it has none. Empty when nothing matches.</p>
   * @public
   */
  memories: MemorySearchSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Absent when there are no more results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMemoryInput {
  /**
   * <p>The ID of the space that owns the memory, for example <code>sp-02864597b164</code>.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The ID of the memory to update.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>Replacement memory text. Supplying it re-embeds the memory. Omit to leave the text unchanged.</p>
   * @public
   */
  content?: string | undefined;

  /**
   * <p>The metadata tags to apply. By default this map replaces the stored metadata, and any key not present is removed. Set <code>metadataMode</code> to <code>MERGE</code> to keep the keys you don't supply. Limits apply to the resulting metadata, not to the request. Keys that begin with <code>x-amz-</code> and the key <code>documentS3Source</code> are reserved: a request that sets one fails with <code>ValidationException</code>.</p> <p>A space can use at most 50 distinct metadata keys across all of its events and memories. A request that would add a key beyond that fails with <code>ValidationException</code>. Reuse an existing key instead.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>How <code>metadata</code> combines with what is stored. The default is <code>REPLACE</code>.</p>
   * @public
   */
  metadataMode?: MetadataMode | undefined;

  /**
   * <p>The ID of the actor that the memory must belong to. Omit it to skip this check. If it doesn't match the stored memory, the call fails with <code>ResourceNotFoundException</code>, as if the memory did not exist.</p>
   * @public
   */
  actorId?: string | undefined;

  /**
   * <p>The name of the strategy that the memory must belong to. Omit it to skip this check. If it doesn't match the stored memory, the call fails with <code>ResourceNotFoundException</code>, as if the memory did not exist.</p>
   * @public
   */
  strategyName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMemoryOutput {
  /**
   * <p>The updated memory, in the same shape that <code>GetMemory</code> returns.</p>
   * @public
   */
  memory: Memory | undefined;
}

/**
 * @public
 */
export interface UpdateSpaceRequest {
  /**
   * <p>The ID of the space to update.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The complete new list of memory strategies. The service removes strategies that aren't in the list from the space. Removing a strategy stops extraction for it but doesn't delete its memories: they're kept, until they expire if the space sets <code>memoryExpiryDays</code>, and they're available again if you later add a strategy with the same <code>type</code> and <code>name</code>. To delete them, use <code>DeleteMemory</code> before you remove the strategy, or delete the space.</p> <p>To keep a strategy, include it with the same <code>type</code> and <code>name</code> that <code>GetSpace</code> returns. For a kept strategy, any <code>configuration</code> member you omit keeps its current value. It doesn't return to the default, and you can't clear a member once it's set. Omit this field to leave the strategies unchanged. The list must name at least one strategy. You can't remove every strategy from a space with <code>UpdateSpace</code>.</p> <p>The serialized list can be at most 384 KiB.</p>
   * @public
   */
  memoryStrategies?: MemoryStrategy[] | undefined;

  /**
   * <p>How many days the space keeps each event, from 1 to 365. Omit it to leave the current value unchanged. Events already stored keep the expiry they were written with.</p>
   * @public
   */
  eventExpiryDays?: number | undefined;

  /**
   * <p>How many days the space keeps each memory, from 0 to 3650. 0 means memories never expire. Omit it to leave the current value unchanged. You can't clear the setting. To make memories written from then on never expire, send 0. <code>GetSpace</code> then returns 0.</p> <p>A change applies to memories written after it. Memories already stored keep the expiry they were written with. A memory the service rewrites later, such as a summary it keeps up to date, takes the setting in force at that rewrite. A change moves the space to <code>UPDATING</code>. Sending the value that the space has stored doesn't.</p>
   * @public
   */
  memoryExpiryDays?: number | undefined;

  /**
   * <p>The model that extracts and consolidates memories for every strategy in the space: <code>anthropic.claude-opus-5-5</code> or <code>anthropic.claude-haiku-5-5</code>. Omit it to leave the current value unchanged. Once set, it can't be cleared back to the service default.</p>
   * @public
   */
  extractionModelId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSpaceResponse {
  /**
   * <p>The ID of the space.</p>
   * @public
   */
  spaceId: string | undefined;

  /**
   * <p>The status of the space: <code>UPDATING</code> when the change has to be applied to the space's strategies, retention, or extraction model. Otherwise, the space's current status.</p>
   * @public
   */
  status: SpaceStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the space.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the space.</p>
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the space.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to remove from the space.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
