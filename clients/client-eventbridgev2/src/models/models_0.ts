// smithy-typescript generated code
import type {
  BusState,
  DeduplicationType,
  EventSourceState,
  EventSourceType,
  FilterLanguage,
  FilterScope,
  IncludePayload,
  InvocationType,
  LogLevel,
  OrderingType,
  PointType,
  ResumePosition,
  RetryStrategy,
  StartingPosition,
  SubscriberState,
  SuccessCode,
  TransformerType,
} from "./enums";

/**
 * Encryption configuration for an event bus.
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * Identifier of the AWS KMS customer managed key used to encrypt events: a key
   * ID, key ARN, alias name, or alias ARN. When absent, events are encrypted with
   * an AWS owned key.
   * @public
   */
  KmsKeyIdentifier?: string | undefined;
}

/**
 * Event storage configuration for an event bus.
 * @public
 */
export interface StorageConfiguration {
  /**
   * Number of days events are retained on the event bus.
   * @public
   */
  RetentionPeriodInDays?: number | undefined;
}

/**
 * @public
 */
export interface CreateEventBusRequest {
  /**
   * Name of an event bus. The first character must be alphanumeric; the remaining characters
   * may also include '.', '-', and '_'. The grammar matches the name segment of EventBusArn
   * (event-busv2/<name>/<id>), so every valid name can be represented in the bus's ARN. The same
   * type is used everywhere a bus name appears.
   * @public
   */
  Name: string | undefined;

  /**
   * Free-text description. Used by every resource type that has one: event buses,
   * subscribers, and event sources.
   * @public
   */
  Description?: string | undefined;

  /**
   * Encryption configuration for an event bus.
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * Event storage configuration for an event bus.
   * @public
   */
  StorageConfiguration?: StorageConfiguration | undefined;

  /**
   * Tags attached to a resource, as key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Unique, case-sensitive identifier that ensures the idempotency of the
   * request. The SDK generates one automatically when the field is omitted.
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * Event storage configuration of an event bus, as returned on reads.
 * @public
 */
export interface StorageConfigurationOutput {
  /**
   * Number of days events are retained on the event bus.
   * @public
   */
  RetentionPeriodInDays?: number | undefined;

  /**
   * The earliest point in time from which stored events are available. Events
   * older than this have expired from retention.
   * @public
   */
  RetentionWindowStartTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateEventBusResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * Name of an event bus. The first character must be alphanumeric; the remaining characters
   * may also include '.', '-', and '_'. The grammar matches the name segment of EventBusArn
   * (event-busv2/<name>/<id>), so every valid name can be represented in the bus's ARN. The same
   * type is used everywhere a bus name appears.
   * @public
   */
  Name?: string | undefined;

  /**
   * Free-text description. Used by every resource type that has one: event buses,
   * subscribers, and event sources.
   * @public
   */
  Description?: string | undefined;

  /**
   * Encryption configuration for an event bus.
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * Event storage configuration of an event bus, as returned on reads.
   * @public
   */
  StorageConfiguration?: StorageConfigurationOutput | undefined;

  /**
   * Lifecycle state of an event bus.
   * - CREATING: Bus creation is in progress.
   * - CREATE_FAILED: Bus creation failed; see StateReason. The bus cannot be recovered or
   *   recreated in place: delete it with DeleteEventBus, then create a new bus.
   * - ACTIVE: Bus is fully operational and can accept events.
   * - UPDATING: Bus update is in progress.
   * - UPDATE_FAILED: Bus update failed; the bus remains operational with its previous configuration.
   * - DELETING: Bus deletion is actively in progress.
   * - DELETE_FAILED: Bus deletion failed; see StateReason. Retry DeleteEventBus after removing
   *   subscribers and event sources.
   * @public
   */
  State?: BusState | undefined;

  /**
   * Human-readable explanation of why an event bus is in its current State. Omitted when the
   * bus is in a normal operational state (ACTIVE). It stands in for the error response an
   * asynchronous failure cannot return, so it applies only to resources with an asynchronous
   * lifecycle: event buses. EventSources and subscribers are provisioned synchronously and
   * report failures directly on the request.
   * @public
   */
  StateReason?: string | undefined;

  /**
   * The time the event bus was created.
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * On-failure configuration: where a failed delivery is sent. Shared by the subscriber and the
 * EventSource.
 * @public
 */
export interface OnFailureConfiguration {
  /**
   * The ARN of the destination that receives events that could not be delivered.
   * An Amazon SQS queue is the supported destination.
   * @public
   */
  Arn?: string | undefined;
}

/**
 * Configuration for forwarding a single AWS service's events from the account's default event bus.
 * @public
 */
export interface AwsServiceEventsSourceConfiguration {
  /**
   * A single AWS service source identifier, e.g. "aws.s3". Wildcards and lists are rejected.
   * @public
   */
  AwsService: string | undefined;

  /**
   * A filter pattern, as a JSON string, that defines which of the service's events are
   * forwarded to the event bus. Do not include source, account, or region as top-level
   * fields. If no pattern is specified, all events from the service are forwarded.
   * @public
   */
  Pattern?: string | undefined;

  /**
   * The destination for events that could not be forwarded.
   * @public
   */
  OnFailureConfiguration?: OnFailureConfiguration | undefined;
}

/**
 * Configuration for forwarding a partner event source's events through a managed partner event bus.
 * @public
 */
export interface PartnerEventsSourceConfiguration {
  /**
   * ARN of the partner event source to forward. It is a partner-owned resource, so the account
   * segment is empty: arn:aws:events:<region>::event-source/aws.partner/<name>.
   * @public
   */
  PartnerEventSourceArn: string | undefined;

  /**
   * A filter pattern, as a JSON string, that defines which of the partner event source's
   * events are forwarded to the event bus. If no pattern is specified, all events from the
   * partner event source are forwarded.
   * @public
   */
  Pattern?: string | undefined;

  /**
   * Identifier of the AWS KMS customer managed key used to encrypt events: a key
   * ID, key ARN, alias name, or alias ARN. When absent, events are encrypted with
   * an AWS owned key.
   * @public
   */
  PartnerBusKmsKeyIdentifier?: string | undefined;

  /**
   * The destination for events that could not be forwarded, covering both the forwarding
   * target and the managed partner event bus.
   * @public
   */
  OnFailureConfiguration?: OnFailureConfiguration | undefined;
}

/**
 * Discriminated EventSource configuration. Exactly one variant must be set.
 * @public
 */
export type EventSourceConfiguration =
  | EventSourceConfiguration.AwsServiceEventsConfigurationMember
  | EventSourceConfiguration.PartnerEventsConfigurationMember
  | EventSourceConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace EventSourceConfiguration {
  /**
   * Configuration for forwarding a single AWS service's events from the account's default event bus.
   * @public
   */
  export interface AwsServiceEventsConfigurationMember {
    AwsServiceEventsConfiguration: AwsServiceEventsSourceConfiguration;
    PartnerEventsConfiguration?: never;
    $unknown?: never;
  }

  /**
   * Configuration for forwarding a partner event source's events through a managed partner event bus.
   * @public
   */
  export interface PartnerEventsConfigurationMember {
    AwsServiceEventsConfiguration?: never;
    PartnerEventsConfiguration: PartnerEventsSourceConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AwsServiceEventsConfiguration?: never;
    PartnerEventsConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AwsServiceEventsConfiguration: (value: AwsServiceEventsSourceConfiguration) => T;
    PartnerEventsConfiguration: (value: PartnerEventsSourceConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateEventSourceRequest {
  /**
   * EventSource name. First character alphanumeric; the rest may add '.', '-', '_'. Names may not
   * begin with the reserved "aws." prefix. The grammar
   * matches the ARN local-name segment in EventSourceArn (event-sourcev2/<type>/<name>/<id>), mirroring
   * EventBusName, so a name the ARN cannot represent cannot be created.
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn: string | undefined;

  /**
   * Discriminated EventSource configuration. Exactly one variant must be set.
   * @public
   */
  Configuration: EventSourceConfiguration | undefined;

  /**
   * Free-text description. Used by every resource type that has one: event buses,
   * subscribers, and event sources.
   * @public
   */
  Description?: string | undefined;

  /**
   * Tags attached to a resource, as key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Unique, case-sensitive identifier that ensures the idempotency of the
   * request. The SDK generates one automatically when the field is omitted.
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateEventSourceResponse {
  /**
   * EventSource ARN: event-sourcev2/<type>/<name>/<id>. The type segment is set by the service
   * (aws.service for AWS service events, aws.partner for partner events) and is not part of the
   * resource's name. The id segment is a 25-character identifier generated by the service.
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * EventSource name. First character alphanumeric; the rest may add '.', '-', '_'. Names may not
   * begin with the reserved "aws." prefix. The grammar
   * matches the ARN local-name segment in EventSourceArn (event-sourcev2/<type>/<name>/<id>), mirroring
   * EventBusName, so a name the ARN cannot represent cannot be created.
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * Lifecycle state of an EventSource. Revocation is reported by the Revoked flag.
   * @public
   */
  State?: EventSourceState | undefined;

  /**
   * The time the EventSource was created.
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * Batching configuration for a subscriber.
 * @public
 */
export interface BatchConfiguration {
  /**
   * The maximum number of events to include in a single batch delivered to the target.
   * The service delivers up to this many events per batch; fewer may be delivered when
   * the batch window elapses or the target's per-batch limit is smaller. This is a
   * maximum, not a guaranteed count. Valid range is 1-500 (default: 10, or the
   * target API's per-batch maximum). The resolved value applied by the service is returned on read.
   * @public
   */
  MaxBatchSize?: number | undefined;

  /**
   * The maximum time in seconds to wait for a batch to fill before delivering it to
   * the target. This is a maximum; a batch may be delivered sooner if it reaches
   * MaxBatchSize or another delivery condition is met. Valid range is 0-300
   * (default: 0, meaning no wait). The resolved value applied by the service is
   * always returned on read.
   * @public
   */
  MaxBatchWindowInSeconds?: number | undefined;
}

/**
 * A single filter entry within a FilterConfiguration.
 * @public
 */
export interface Filter {
  /**
   * An event pattern, as a JSON string, that selects which events match.
   * @public
   */
  Pattern: string | undefined;

  /**
   * Scope of a filter pattern within a FilterConfiguration.
   * @public
   */
  Scope: FilterScope | undefined;
}

/**
 * Configuration for filtering events delivered to a subscriber.
 * On CreateSubscriber, Filters is required and must contain at least one Filter with a non-empty Pattern.
 * On UpdateSubscriber, an empty `FilterConfiguration:\{\}` clears the existing filter.
 * Any non-empty shape (including `\{Language:X\}` without Filters) must contain a valid Filters list
 * — same contract as CreateSubscriber. A non-empty Filters list overwrites; an omitted
 * FilterConfiguration preserves existing state.
 * All Filters are implicitly ANDed — an event must match every Filter to be delivered.
 * @public
 */
export interface FilterConfiguration {
  /**
   * Defaults to EVENT_BRIDGE_PATTERN when not specified.
   * @public
   */
  Language?: FilterLanguage | undefined;

  /**
   * List of filters. An event must match every filter to be delivered.
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Deduplication settings for a publish request.
 * @public
 */
export interface DeduplicationConfiguration {
  /**
   * How duplicate events are detected: by a hash of the event content (CONTENT_BASED).
   * To deduplicate by a caller-supplied token instead, omit DeduplicationConfiguration and
   * set DeduplicationId on each entry.
   * @public
   */
  DeduplicationType: DeduplicationType | undefined;
}

/**
 * Customer-controllable system metadata attached to events forwarded to the downstream event bus.
 * @public
 */
export interface EventBusV2SystemMetadata {
  /**
   * Event group ID for FIFO ordering on the downstream bus. Accepts a literal
   * or a JSONata expression.
   * @public
   */
  EventGroupId?: string | undefined;

  /**
   * Deduplication ID for FIFO deduplication on the downstream bus. Accepts a
   * literal or a JSONata expression.
   * @public
   */
  DeduplicationId?: string | undefined;
}

/**
 * Parameters for forwarding events to another EventBridge event bus.
 * @public
 */
export interface EventBusV2Parameters {
  /**
   * Customer-defined metadata forwarded with each event.
   * @public
   */
  Metadata?: Record<string, string> | undefined;

  /**
   * Customer-controllable system metadata attached to each forwarded event.
   * @public
   */
  SystemMetadata?: EventBusV2SystemMetadata | undefined;

  /**
   * Deduplication settings applied to the forwarded events on the downstream bus.
   * @public
   */
  DeduplicationConfiguration?: DeduplicationConfiguration | undefined;
}

/**
 * HTTP invocation parameters for subscribers (API Gateway / API Destination). Values are
 * forwarded to the HTTP endpoint.
 * @public
 */
export interface HttpParameters {
  /**
   * Values substituted, in order, for the path-parameter placeholders in an HTTP
   * target's endpoint path.
   * @public
   */
  PathParameterValues?: string[] | undefined;

  /**
   * Map of HTTP header names to values, sent with the request to an HTTP target.
   * @public
   */
  HeaderParameters?: Record<string, string> | undefined;

  /**
   * Map of query-string parameter names to values, appended to the request to an
   * HTTP target.
   * @public
   */
  QueryStringParameters?: Record<string, string> | undefined;

  /**
   * Timeout in seconds for each invocation of the target (1-30). String-typed
   * (not integer) so the value may be a JSONata expression.
   * @public
   */
  InvocationTimeoutSeconds?: string | undefined;
}

/**
 * Kinesis Data Streams invocation parameters for subscribers. Values are forwarded to the
 * Kinesis PutRecords API.
 * All scalar values accept a literal or a JSONata expression (e.g. "\{% $events.Data.partitionKey %\}").
 * @public
 */
export interface KinesisParameters {
  /**
   * Required by PutRecords even when an explicit hash key is supplied. Accepts JSONata expression.
   * @public
   */
  PartitionKey?: string | undefined;

  /**
   * Explicit hash key forwarded to PutRecords unchanged. Accepts JSONata expression.
   * @public
   */
  ExplicitHashKey?: string | undefined;
}

/**
 * Lambda invocation parameters for subscribers. Values are forwarded to the Lambda Invoke API.
 * Every string member accepts a literal or a JSONata expression (e.g. "\{% $events.Data.qualifier %\}").
 * @public
 */
export interface LambdaParameters {
  /**
   * Lambda invocation type. EVENT invokes the function asynchronously; REQUEST_RESPONSE waits for
   * its result.
   * @public
   */
  InvocationType?: InvocationType | undefined;

  /**
   * Lambda qualifier: $LATEST, $LATEST.PUBLISHED, a numeric version, or an alias. Accepts a
   * JSONata expression.
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * Durable execution name. Accepts a JSONata expression.
   * @public
   */
  DurableExecutionName?: string | undefined;

  /**
   * Tenant identifier. Accepts a JSONata expression.
   * @public
   */
  TenantId?: string | undefined;

  /**
   * Timeout in seconds for each invocation of the target. String-typed so the value
   * may be a JSONata expression.
   * @public
   */
  InvocationTimeoutSeconds?: string | undefined;
}

/**
 * A custom SNS message attribute (data type plus string or binary value).
 * @public
 */
export interface SnsMessageAttributeValue {
  /**
   * Attribute data type. Requiredness and the accepted vocabulary belong to SNS, which rejects
   * an attribute without a data type on delivery.
   * @public
   */
  DataType?: string | undefined;

  /**
   * String attribute value. A JSONata expression resolves once per delivered event.
   * @public
   */
  StringValue?: string | undefined;

  /**
   * Base64-encoded literal binary attribute value.
   * @public
   */
  BinaryValue?: string | undefined;
}

/**
 * SNS invocation parameters for subscribers. Values are forwarded to the SNS PublishBatch API.
 * All scalar values accept a literal or a JSONata expression (e.g. "\{% $events.Data.groupId %\}").
 * @public
 */
export interface SnsParameters {
  /**
   * Message group ID for FIFO topics. Accepts JSONata expression.
   * @public
   */
  MessageGroupId?: string | undefined;

  /**
   * Message deduplication ID for FIFO topics. Accepts JSONata expression.
   * @public
   */
  MessageDeduplicationId?: string | undefined;

  /**
   * Subject line for email protocol subscriptions. Accepts JSONata expression.
   * @public
   */
  Subject?: string | undefined;

  /**
   * Per-protocol message formatting mode, forwarded to SNS Publish unchanged. Accepts JSONata
   * expression.
   * @public
   */
  MessageStructure?: string | undefined;

  /**
   * Custom message attributes for SNS filtering.
   * @public
   */
  MessageAttributes?: Record<string, SnsMessageAttributeValue> | undefined;
}

/**
 * A custom SQS message attribute (data type plus string or binary value).
 * @public
 */
export interface SqsMessageAttributeValue {
  /**
   * Attribute data type. Requiredness, the accepted vocabulary, and any custom label belong to
   * SQS, which rejects an attribute without a data type on delivery.
   * @public
   */
  DataType?: string | undefined;

  /**
   * String attribute value. A JSONata expression resolves once per delivered event.
   * @public
   */
  StringValue?: string | undefined;

  /**
   * Base64-encoded literal binary attribute value.
   * @public
   */
  BinaryValue?: string | undefined;
}

/**
 * SQS invocation parameters for subscribers. Values are forwarded to the SQS SendMessageBatch API.
 * All scalar values accept a literal or a JSONata expression (e.g. "\{% $events.Data.groupId %\}").
 * @public
 */
export interface SqsParameters {
  /**
   * Message group ID for FIFO queues. Accepts JSONata expression.
   * @public
   */
  MessageGroupId?: string | undefined;

  /**
   * Message deduplication ID for FIFO queues. Accepts JSONata expression.
   * @public
   */
  MessageDeduplicationId?: string | undefined;

  /**
   * Delay in seconds before the message becomes visible, standard queues only. Accepts JSONata
   * expression.
   * @public
   */
  DelaySeconds?: string | undefined;

  /**
   * Custom message attributes (name/type/value).
   * @public
   */
  MessageAttributes?: Record<string, SqsMessageAttributeValue> | undefined;

  /**
   * System message attributes (e.g., AWSTraceHeader).
   * @public
   */
  MessageSystemAttributes?: Record<string, SqsMessageAttributeValue> | undefined;
}

/**
 * Step Functions invocation parameters for subscribers. Values are forwarded to the
 * Step Functions StartExecution or StartSyncExecution API.
 * Every string member accepts a literal or a JSONata expression (e.g. "\{% $events.Data.executionName %\}").
 * @public
 */
export interface StepFunctionsParameters {
  /**
   * Selects StartExecution (EVENT) or StartSyncExecution (REQUEST_RESPONSE) at delivery.
   * @public
   */
  InvocationType?: InvocationType | undefined;

  /**
   * Name for the execution. Must be unique per account/region/state machine. Accepts JSONata expression.
   * @public
   */
  Name?: string | undefined;

  /**
   * X-Ray trace header for distributed tracing. Accepts JSONata expression.
   * @public
   */
  TraceHeader?: string | undefined;

  /**
   * Timeout in seconds for each invocation of the target (1-30). String-typed
   * (not integer) so the value may be a JSONata expression.
   * @public
   */
  InvocationTimeoutSeconds?: string | undefined;
}

/**
 * Parameters for USI (Universal Service Integration) targets.
 * Used when TargetArn is in the format arn:aws:events:::aws-sdk:\{service\}:\{apiAction\}
 * @public
 */
export interface UniversalTargetParameters {
  /**
   * JSON string or JSONata expression that produces the API request.
   * Supports \{% ... %\} JSONata expressions for dynamic values from the event.
   * @public
   */
  Input: string | undefined;

  /**
   * Timeout in seconds for each invocation of the target (1-30, default 30).
   * Accepts a literal integer or a \{% ... %\} JSONata expression evaluated against the event
   * at invocation time. A JSONata expression is syntax-checked at create time. Resolved values
   * outside of the range [1, 30] will be constrained to the nearest bound at delivery time.
   * Defaults to 30 seconds when unset.
   * @public
   */
  InvocationTimeoutSeconds?: string | undefined;
}

/**
 * Configuration for how the subscriber invokes its target.
 * @public
 */
export interface InvokeConfiguration {
  /**
   * IAM role the service assumes to invoke the target. Must belong to the
   * calling account.
   * @public
   */
  RoleArn: string | undefined;

  /**
   * Lambda invocation parameters for subscribers. Values are forwarded to the Lambda Invoke API.
   * Every string member accepts a literal or a JSONata expression (e.g. "\{% $events.Data.qualifier %\}").
   * @public
   */
  LambdaParameters?: LambdaParameters | undefined;

  /**
   * SQS invocation parameters for subscribers. Values are forwarded to the SQS SendMessageBatch API.
   * All scalar values accept a literal or a JSONata expression (e.g. "\{% $events.Data.groupId %\}").
   * @public
   */
  SqsParameters?: SqsParameters | undefined;

  /**
   * SNS invocation parameters for subscribers. Values are forwarded to the SNS PublishBatch API.
   * All scalar values accept a literal or a JSONata expression (e.g. "\{% $events.Data.groupId %\}").
   * @public
   */
  SnsParameters?: SnsParameters | undefined;

  /**
   * Kinesis Data Streams invocation parameters for subscribers. Values are forwarded to the
   * Kinesis PutRecords API.
   * All scalar values accept a literal or a JSONata expression (e.g. "\{% $events.Data.partitionKey %\}").
   * @public
   */
  KinesisParameters?: KinesisParameters | undefined;

  /**
   * Step Functions invocation parameters for subscribers. Values are forwarded to the
   * Step Functions StartExecution or StartSyncExecution API.
   * Every string member accepts a literal or a JSONata expression (e.g. "\{% $events.Data.executionName %\}").
   * @public
   */
  StepFunctionsParameters?: StepFunctionsParameters | undefined;

  /**
   * HTTP invocation parameters for subscribers (API Gateway / API Destination). Values are
   * forwarded to the HTTP endpoint.
   * @public
   */
  HttpParameters?: HttpParameters | undefined;

  /**
   * Parameters for USI (Universal Service Integration) targets.
   * Used when TargetArn is in the format arn:aws:events:::aws-sdk:\{service\}:\{apiAction\}
   * @public
   */
  UniversalTargetParameters?: UniversalTargetParameters | undefined;

  /**
   * Parameters for forwarding events to another EventBridge event bus.
   * @public
   */
  EventBusV2Parameters?: EventBusV2Parameters | undefined;

  /**
   * ARN of the target a subscriber invokes. The resource grammar is service-neutral because target
   * services use different separators and the USI form omits region and account.
   * @public
   */
  TargetArn: string | undefined;
}

/**
 * Log configuration for a subscriber.
 * @public
 */
export interface LogConfiguration {
  /**
   * Minimum log level. Records below this level are not emitted. Defaults to OFF.
   * @public
   */
  Level?: LogLevel | undefined;

  /**
   * Whether the customer event payload is embedded in log records. Defaults to ON_ERROR_ONLY.
   * @public
   */
  IncludePayload?: IncludePayload | undefined;
}

/**
 * Point-in-time configuration for a subscriber.
 * Only applicable when StartingPosition is POINT_IN_TIME.
 * @public
 */
export interface PointInTimeConfiguration {
  /**
   * Whether to start from the horizon or a specific timestamp.
   * @public
   */
  PointType: PointType | undefined;

  /**
   * Timestamp to start from. Required when PointType is TIMESTAMP.
   * @public
   */
  StartingPoint?: Date | undefined;

  /**
   * Timestamp to stop at. Optional.
   * @public
   */
  EndPoint?: Date | undefined;
}

/**
 * Retry policy for a subscriber.
 * @public
 */
export interface RetryPolicy {
  /**
   * Maximum number of retry attempts (0-185, default: 5).
   * @public
   */
  MaxRetryAttempts?: number | undefined;

  /**
   * Maximum age of an event in seconds before it is discarded (60-86400, default: 300).
   * @public
   */
  MaxEventAgeInSeconds?: number | undefined;

  /**
   * Strategy for determining which exceptions are retried. Default: ALL.
   * @public
   */
  RetryStrategy?: RetryStrategy | undefined;
}

/**
 * JSONata transform settings for a subscriber.
 * @public
 */
export interface JsonataConfiguration {
  /**
   * JSONata expression to transform the event. Must be wrapped in \{% %\} delimiters.
   * @public
   */
  Expression: string | undefined;
}

/**
 * Transformer configuration for a subscriber.
 * @public
 */
export interface Transformer {
  /**
   * Transform type.
   * @public
   */
  Type?: TransformerType | undefined;

  /**
   * JSONata expression configuration. Required when Type is JSONATA.
   * @public
   */
  JsonataConfiguration?: JsonataConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSubscriberRequest {
  /**
   * Name of a subscriber. The first character must be alphanumeric; the remaining
   * characters may also include '.', '-', and '_'.
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn: string | undefined;

  /**
   * Configuration for how the subscriber invokes its target.
   * @public
   */
  InvokeConfiguration: InvokeConfiguration | undefined;

  /**
   * Free-text description. Used by every resource type that has one: event buses,
   * subscribers, and event sources.
   * @public
   */
  Description?: string | undefined;

  /**
   * Configuration for filtering events delivered to a subscriber.
   * On CreateSubscriber, Filters is required and must contain at least one Filter with a non-empty Pattern.
   * On UpdateSubscriber, an empty `FilterConfiguration:\{\}` clears the existing filter.
   * Any non-empty shape (including `\{Language:X\}` without Filters) must contain a valid Filters list
   * — same contract as CreateSubscriber. A non-empty Filters list overwrites; an omitted
   * FilterConfiguration preserves existing state.
   * All Filters are implicitly ANDed — an event must match every Filter to be delivered.
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * Delivery ordering mode of a subscriber: FIFO delivers events in order within
   * an event group; UNORDERED delivers without an ordering guarantee.
   * @public
   */
  Type?: OrderingType | undefined;

  /**
   * Starting position for a subscriber.
   * @public
   */
  StartingPosition?: StartingPosition | undefined;

  /**
   * Point-in-time configuration for a subscriber.
   * Only applicable when StartingPosition is POINT_IN_TIME.
   * @public
   */
  PointInTimeConfiguration?: PointInTimeConfiguration | undefined;

  /**
   * Batching configuration for a subscriber.
   * @public
   */
  BatchConfiguration?: BatchConfiguration | undefined;

  /**
   * Not applicable to universal (aws-sdk) targets, whose input transformation is UniversalTargetParameters.Input; a Transformer on such a target is rejected.
   * @public
   */
  Transformer?: Transformer | undefined;

  /**
   * Retry policy for a subscriber.
   * @public
   */
  RetryPolicy?: RetryPolicy | undefined;

  /**
   * On-failure configuration: where a failed delivery is sent. Shared by the subscriber and the
   * EventSource.
   * @public
   */
  OnFailureConfiguration?: OnFailureConfiguration | undefined;

  /**
   * Log configuration for a subscriber.
   * @public
   */
  LogConfiguration?: LogConfiguration | undefined;

  /**
   * Customer-controlled run state of a subscriber, set on create or update. Distinct
   * from the bus lifecycle vocabulary, where ACTIVE means "provisioned and healthy".
   * Delivery requires State RUNNING on a subscriber that is not revoked.
   * @public
   */
  State?: SubscriberState | undefined;

  /**
   * Tags attached to a resource, as key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Unique, case-sensitive identifier that ensures the idempotency of the
   * request. The SDK generates one automatically when the field is omitted.
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSubscriberResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a subscriber.
   * @public
   */
  SubscriberArn?: string | undefined;

  /**
   * Name of a subscriber. The first character must be alphanumeric; the remaining
   * characters may also include '.', '-', and '_'.
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * Delivery ordering mode of a subscriber: FIFO delivers events in order within
   * an event group; UNORDERED delivers without an ordering guarantee.
   * @public
   */
  Type?: OrderingType | undefined;

  /**
   * Starting position for a subscriber.
   * @public
   */
  StartingPosition?: StartingPosition | undefined;

  /**
   * Point-in-time configuration for a subscriber.
   * Only applicable when StartingPosition is POINT_IN_TIME.
   * @public
   */
  PointInTimeConfiguration?: PointInTimeConfiguration | undefined;

  /**
   * Customer-controlled run state of a subscriber, set on create or update. Distinct
   * from the bus lifecycle vocabulary, where ACTIVE means "provisioned and healthy".
   * Delivery requires State RUNNING on a subscriber that is not revoked.
   * @public
   */
  State?: SubscriberState | undefined;

  /**
   * The time the subscriber was created.
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteEventBusRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventBusResponse {}

/**
 * @public
 */
export interface DeleteEventSourceRequest {
  /**
   * EventSource ARN: event-sourcev2/<type>/<name>/<id>. The type segment is set by the service
   * (aws.service for AWS service events, aws.partner for partner events) and is not part of the
   * resource's name. The id segment is a 25-character identifier generated by the service.
   * @public
   */
  EventSourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventSourceResponse {}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Which named policy to delete. Defaults to "default" when omitted (a delete AWS
   * Resource Access Manager makes on the owner's behalf resolves to "AWS_RAM" instead).
   * The two writers are exclusive in both directions — only Resource Access Manager can
   * delete "AWS_RAM", and only the bus owner can delete "default" — so naming the other
   * party's policy fails with AccessDeniedException. A well-formed name that is neither
   * of the two fails with InvalidInputException.
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * The delete succeeds only if the named policy's current revision ID matches
   * this value; if it differs or the policy does not exist, the operation fails
   * with ConflictException. The "NO_POLICY" sentinel is not valid here. When
   * omitted, deleting an absent policy is an idempotent success. Supplying this
   * value makes the delete non-idempotent: once it succeeds the expected
   * revision no longer exists, so retrying an unanswered request fails with
   * ConflictException even though the policy was deleted. To establish the
   * outcome, read the policy back: ResourceNotFoundException means the delete
   * took effect.
   * @public
   */
  ExpectedRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {
  /**
   * Revision ID of the policy that was deleted. Absent when no policy was deleted.
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriberRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a subscriber.
   * @public
   */
  SubscriberArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriberResponse {}

/**
 * @public
 */
export interface DescribeEventBusRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventBusResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * Name of an event bus. The first character must be alphanumeric; the remaining characters
   * may also include '.', '-', and '_'. The grammar matches the name segment of EventBusArn
   * (event-busv2/<name>/<id>), so every valid name can be represented in the bus's ARN. The same
   * type is used everywhere a bus name appears.
   * @public
   */
  Name?: string | undefined;

  /**
   * Free-text description. Used by every resource type that has one: event buses,
   * subscribers, and event sources.
   * @public
   */
  Description?: string | undefined;

  /**
   * Encryption configuration for an event bus.
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * Event storage configuration of an event bus, as returned on reads.
   * @public
   */
  StorageConfiguration?: StorageConfigurationOutput | undefined;

  /**
   * The time the event bus was created.
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time the event bus was last modified.
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Lifecycle state of an event bus.
   * - CREATING: Bus creation is in progress.
   * - CREATE_FAILED: Bus creation failed; see StateReason. The bus cannot be recovered or
   *   recreated in place: delete it with DeleteEventBus, then create a new bus.
   * - ACTIVE: Bus is fully operational and can accept events.
   * - UPDATING: Bus update is in progress.
   * - UPDATE_FAILED: Bus update failed; the bus remains operational with its previous configuration.
   * - DELETING: Bus deletion is actively in progress.
   * - DELETE_FAILED: Bus deletion failed; see StateReason. Retry DeleteEventBus after removing
   *   subscribers and event sources.
   * @public
   */
  State?: BusState | undefined;

  /**
   * Human-readable explanation of why an event bus is in its current State. Omitted when the
   * bus is in a normal operational state (ACTIVE). It stands in for the error response an
   * asynchronous failure cannot return, so it applies only to resources with an asynchronous
   * lifecycle: event buses. EventSources and subscribers are provisioned synchronously and
   * report failures directly on the request.
   * @public
   */
  StateReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventSourceRequest {
  /**
   * EventSource ARN: event-sourcev2/<type>/<name>/<id>. The type segment is set by the service
   * (aws.service for AWS service events, aws.partner for partner events) and is not part of the
   * resource's name. The id segment is a 25-character identifier generated by the service.
   * @public
   */
  EventSourceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventSourceResponse {
  /**
   * EventSource ARN: event-sourcev2/<type>/<name>/<id>. The type segment is set by the service
   * (aws.service for AWS service events, aws.partner for partner events) and is not part of the
   * resource's name. The id segment is a 25-character identifier generated by the service.
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * EventSource name. First character alphanumeric; the rest may add '.', '-', '_'. Names may not
   * begin with the reserved "aws." prefix. The grammar
   * matches the ARN local-name segment in EventSourceArn (event-sourcev2/<type>/<name>/<id>), mirroring
   * EventBusName, so a name the ARN cannot represent cannot be created.
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * Discriminated EventSource configuration. Exactly one variant must be set.
   * @public
   */
  Configuration?: EventSourceConfiguration | undefined;

  /**
   * Free-text description. Used by every resource type that has one: event buses,
   * subscribers, and event sources.
   * @public
   */
  Description?: string | undefined;

  /**
   * Lifecycle state of an EventSource. Revocation is reported by the Revoked flag.
   * @public
   */
  State?: EventSourceState | undefined;

  /**
   * True when the bus owner has withdrawn this EventSource. Present only when true, so an
   * absent member means the EventSource is not revoked. Revocation is terminal: it never
   * returns to false. Mutating operations on a revoked EventSource fail with
   * InvalidStateException, except DeleteEventSource, which stays available so a revoked
   * EventSource can still be cleaned up.
   * @public
   */
  Revoked?: boolean | undefined;

  /**
   * The time the EventSource was created.
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time the EventSource was last modified.
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeSubscriberRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a subscriber.
   * @public
   */
  SubscriberArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeSubscriberResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a subscriber.
   * @public
   */
  SubscriberArn?: string | undefined;

  /**
   * Name of a subscriber. The first character must be alphanumeric; the remaining
   * characters may also include '.', '-', and '_'.
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * Configuration for how the subscriber invokes its target.
   * @public
   */
  InvokeConfiguration?: InvokeConfiguration | undefined;

  /**
   * Free-text description. Used by every resource type that has one: event buses,
   * subscribers, and event sources.
   * @public
   */
  Description?: string | undefined;

  /**
   * Configuration for filtering events delivered to a subscriber.
   * On CreateSubscriber, Filters is required and must contain at least one Filter with a non-empty Pattern.
   * On UpdateSubscriber, an empty `FilterConfiguration:\{\}` clears the existing filter.
   * Any non-empty shape (including `\{Language:X\}` without Filters) must contain a valid Filters list
   * — same contract as CreateSubscriber. A non-empty Filters list overwrites; an omitted
   * FilterConfiguration preserves existing state.
   * All Filters are implicitly ANDed — an event must match every Filter to be delivered.
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * Delivery ordering mode of a subscriber: FIFO delivers events in order within
   * an event group; UNORDERED delivers without an ordering guarantee.
   * @public
   */
  Type?: OrderingType | undefined;

  /**
   * Starting position for a subscriber.
   * @public
   */
  StartingPosition?: StartingPosition | undefined;

  /**
   * Point-in-time configuration for a subscriber.
   * Only applicable when StartingPosition is POINT_IN_TIME.
   * @public
   */
  PointInTimeConfiguration?: PointInTimeConfiguration | undefined;

  /**
   * Batching configuration for a subscriber.
   * @public
   */
  BatchConfiguration?: BatchConfiguration | undefined;

  /**
   * Absent for universal (aws-sdk) targets, whose input transformation is UniversalTargetParameters.Input.
   * @public
   */
  Transformer?: Transformer | undefined;

  /**
   * Retry policy for a subscriber.
   * @public
   */
  RetryPolicy?: RetryPolicy | undefined;

  /**
   * On-failure configuration: where a failed delivery is sent. Shared by the subscriber and the
   * EventSource.
   * @public
   */
  OnFailureConfiguration?: OnFailureConfiguration | undefined;

  /**
   * Log configuration for a subscriber.
   * @public
   */
  LogConfiguration?: LogConfiguration | undefined;

  /**
   * Customer-controlled run state of a subscriber, set on create or update. Distinct
   * from the bus lifecycle vocabulary, where ACTIVE means "provisioned and healthy".
   * Delivery requires State RUNNING on a subscriber that is not revoked.
   * @public
   */
  State?: SubscriberState | undefined;

  /**
   * True when the bus owner has revoked this subscriber. Present only when true, so an
   * absent member means the subscriber is not revoked. Revocation is terminal: it never
   * returns to false. Mutating operations on a revoked subscriber fail with
   * InvalidStateException, except DeleteSubscriber, which stays available so a revoked
   * subscriber can still be cleaned up.
   * @public
   */
  Revoked?: boolean | undefined;

  /**
   * The time the subscriber was created.
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time the subscriber was last modified.
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Which named policy to read. Defaults to "default" when omitted (a read AWS Resource Access
   * Manager makes on the owner's behalf resolves to "AWS_RAM" instead). Unlike writing, neither
   * name is reserved on a read: the bus owner can read both. There is no fallback between the
   * two, so a bus shared only through Resource Access Manager fails with
   * ResourceNotFoundException until "AWS_RAM" is named explicitly. A well-formed name that is
   * neither of the two fails with InvalidInputException.
   * @public
   */
  PolicyName?: string | undefined;
}

/**
 * Returned only when the named policy exists. A missing event bus or a missing
 * named policy fails with ResourceNotFoundException rather than returning an
 * empty or null policy document. Every member is therefore always present on a
 * successful response.
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A resource policy document, as a JSON string. The "default" policy can be up to
   * 20 KB (20,480 bytes of UTF-8) by default. This quota is adjustable in Service
   * Quotas. A "default" policy that exceeds the quota is rejected with
   * PolicyLengthExceededException. No policy document can exceed 389,120 bytes of
   * UTF-8, regardless of the quota.
   * @public
   */
  PolicyDocument: string | undefined;

  /**
   * Name of a policy attached to a resource. Valid values: "default" (the
   * customer-managed policy) and "AWS_RAM" (managed exclusively by AWS Resource
   * Access Manager). Any other value is rejected.
   * @public
   */
  PolicyName: string | undefined;

  /**
   * Revision ID of a resource policy. A new revision ID is generated on every
   * successful write.
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface ListEventBusesRequest {
  /**
   * Name of an event bus. The first character must be alphanumeric; the remaining characters
   * may also include '.', '-', and '_'. The grammar matches the name segment of EventBusArn
   * (event-busv2/<name>/<id>), so every valid name can be represented in the bus's ARN. The same
   * type is used everywhere a bus name appears.
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * AWS Account Id.
   * @public
   */
  EventBusAccountId?: string | undefined;

  /**
   * Opaque pagination token returned by a List operation. Pass it back in the
   * next request to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to return in one page of a List operation.
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summary of an event bus, as returned by ListEventBuses.
 * @public
 */
export interface EventBusSummary {
  /**
   * Name of an event bus. The first character must be alphanumeric; the remaining characters
   * may also include '.', '-', and '_'. The grammar matches the name segment of EventBusArn
   * (event-busv2/<name>/<id>), so every valid name can be represented in the bus's ARN. The same
   * type is used everywhere a bus name appears.
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * Free-text description. Used by every resource type that has one: event buses,
   * subscribers, and event sources.
   * @public
   */
  Description?: string | undefined;

  /**
   * The time the event bus was created.
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time the event bus was last modified.
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Lifecycle state of an event bus.
   * - CREATING: Bus creation is in progress.
   * - CREATE_FAILED: Bus creation failed; see StateReason. The bus cannot be recovered or
   *   recreated in place: delete it with DeleteEventBus, then create a new bus.
   * - ACTIVE: Bus is fully operational and can accept events.
   * - UPDATING: Bus update is in progress.
   * - UPDATE_FAILED: Bus update failed; the bus remains operational with its previous configuration.
   * - DELETING: Bus deletion is actively in progress.
   * - DELETE_FAILED: Bus deletion failed; see StateReason. Retry DeleteEventBus after removing
   *   subscribers and event sources.
   * @public
   */
  State?: BusState | undefined;

  /**
   * Human-readable explanation of why an event bus is in its current State. Omitted when the
   * bus is in a normal operational state (ACTIVE). It stands in for the error response an
   * asynchronous failure cannot return, so it applies only to resources with an asynchronous
   * lifecycle: event buses. EventSources and subscribers are provisioned synchronously and
   * report failures directly on the request.
   * @public
   */
  StateReason?: string | undefined;

  /**
   * AWS Account Id.
   * @public
   */
  EventBusAccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListEventBusesResponse {
  /**
   * List of event bus summaries.
   * @public
   */
  EventBuses?: EventBusSummary[] | undefined;

  /**
   * Opaque pagination token returned by a List operation. Pass it back in the
   * next request to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventSourcesRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * EventSource name. First character alphanumeric; the rest may add '.', '-', '_'. Names may not
   * begin with the reserved "aws." prefix. The grammar
   * matches the ARN local-name segment in EventSourceArn (event-sourcev2/<type>/<name>/<id>), mirroring
   * EventBusName, so a name the ARN cannot represent cannot be created.
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * Opaque pagination token returned by a List operation. Pass it back in the
   * next request to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to return in one page of a List operation.
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summary of an EventSource, as returned by ListEventSources.
 * @public
 */
export interface EventSourceSummary {
  /**
   * EventSource ARN: event-sourcev2/<type>/<name>/<id>. The type segment is set by the service
   * (aws.service for AWS service events, aws.partner for partner events) and is not part of the
   * resource's name. The id segment is a 25-character identifier generated by the service.
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * EventSource name. First character alphanumeric; the rest may add '.', '-', '_'. Names may not
   * begin with the reserved "aws." prefix. The grammar
   * matches the ARN local-name segment in EventSourceArn (event-sourcev2/<type>/<name>/<id>), mirroring
   * EventBusName, so a name the ARN cannot represent cannot be created.
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * Origin type of an EventSource: an AWS service's events (AWS_SERVICE_EVENTS)
   * or a partner event source's events (PARTNER_EVENTS).
   * @public
   */
  Type?: EventSourceType | undefined;

  /**
   * Lifecycle state of an EventSource. Revocation is reported by the Revoked flag.
   * @public
   */
  State?: EventSourceState | undefined;

  /**
   * True when the bus owner has withdrawn this EventSource. Present only when true, so a bus
   * owner listing EventSources sees at a glance which ones they revoked. See
   * DescribeEventSourceResponse$Revoked.
   * @public
   */
  Revoked?: boolean | undefined;

  /**
   * The time the EventSource was created.
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time the EventSource was last modified.
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * AWS Account Id.
   * @public
   */
  EventSourceAccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListEventSourcesResponse {
  /**
   * List of EventSource summaries.
   * @public
   */
  EventSources?: EventSourceSummary[] | undefined;

  /**
   * Opaque pagination token returned by a List operation. Pass it back in the
   * next request to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcePoliciesRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Opaque pagination token returned by a List operation. Pass it back in the
   * next request to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to return in one page of a List operation.
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summary of a policy attached to a resource: its name and revision ID.
 * @public
 */
export interface ResourcePolicySummary {
  /**
   * Name of a policy attached to a resource. Valid values: "default" (the
   * customer-managed policy) and "AWS_RAM" (managed exclusively by AWS Resource
   * Access Manager). Any other value is rejected.
   * @public
   */
  PolicyName: string | undefined;

  /**
   * Revision ID of a resource policy. A new revision ID is generated on every
   * successful write.
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * Summaries only (policy name and revision ID). Use GetResourcePolicy to
 * retrieve a policy document.
 * @public
 */
export interface ListResourcePoliciesResponse {
  /**
   * List of resource policy summaries.
   * @public
   */
  PolicySummaries?: ResourcePolicySummary[] | undefined;

  /**
   * Opaque pagination token returned by a List operation. Pass it back in the
   * next request to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscribersRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * Name of a subscriber. The first character must be alphanumeric; the remaining
   * characters may also include '.', '-', and '_'.
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * Opaque pagination token returned by a List operation. Pass it back in the
   * next request to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to return in one page of a List operation.
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summary of a subscriber, as returned by ListSubscribers.
 * @public
 */
export interface SubscriberSummary {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a subscriber.
   * @public
   */
  SubscriberArn?: string | undefined;

  /**
   * Name of a subscriber. The first character must be alphanumeric; the remaining
   * characters may also include '.', '-', and '_'.
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * ARN of the target a subscriber invokes. The resource grammar is service-neutral because target
   * services use different separators and the USI form omits region and account.
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * Delivery ordering mode of a subscriber: FIFO delivers events in order within
   * an event group; UNORDERED delivers without an ordering guarantee.
   * @public
   */
  Type?: OrderingType | undefined;

  /**
   * True when the bus owner has revoked this subscriber. Present only when true, so a bus
   * owner listing subscribers sees at a glance which ones they revoked. See
   * DescribeSubscriberResponse$Revoked.
   * @public
   */
  Revoked?: boolean | undefined;

  /**
   * Customer-controlled run state of a subscriber, set on create or update. Distinct
   * from the bus lifecycle vocabulary, where ACTIVE means "provisioned and healthy".
   * Delivery requires State RUNNING on a subscriber that is not revoked.
   * @public
   */
  State?: SubscriberState | undefined;

  /**
   * The time the subscriber was created.
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time the subscriber was last modified.
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * AWS Account Id.
   * @public
   */
  SubscriberAccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscribersResponse {
  /**
   * List of subscriber summaries.
   * @public
   */
  Subscribers?: SubscriberSummary[] | undefined;

  /**
   * Opaque pagination token returned by a List operation. Pass it back in the
   * next request to retrieve the next page of results.
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * ARN for an EventBridge resource that supports tagging: event buses,
   * subscribers, and event sources.
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Tags attached to a resource, as key-value pairs.
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * System metadata for PutEvents entries. ContentType is not applicable
 * (always application/eventbridge+json, set server-side).
 * @public
 */
export interface PutEventsSystemMetadata {
  /**
   * Event group ID for FIFO ordering.
   * @public
   */
  EventGroupId?: string | undefined;

  /**
   * Deduplication ID for FIFO deduplication.
   * @public
   */
  DeduplicationId?: string | undefined;
}

/**
 * A single event entry in a PutEvents request.
 * @public
 */
export interface PutEventsRequestEntry {
  /**
   * The source of the event. The `aws.` value prefix is service-reserved and
   * cannot be used as a value.
   * @public
   */
  Source: string | undefined;

  /**
   * Free-form detail-type classifying an event within its source.
   * @public
   */
  DetailType: string | undefined;

  /**
   * The event payload, as a valid JSON string.
   * @public
   */
  Detail?: string | undefined;

  /**
   * ARNs of resources the event concerns. Included in the event delivered to
   * subscribers.
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * The time the event occurred. Defaults to the time the service receives the
   * event when omitted.
   * @public
   */
  Time?: Date | undefined;

  /**
   * System metadata for PutEvents entries. ContentType is not applicable
   * (always application/eventbridge+json, set server-side).
   * @public
   */
  SystemMetadata?: PutEventsSystemMetadata | undefined;
}

/**
 * @public
 */
export interface PutEventsRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn: string | undefined;

  /**
   * List of event entries to publish. Must contain at least one entry.
   * @public
   */
  Entries: PutEventsRequestEntry[] | undefined;

  /**
   * Request-level deduplication settings, applied to every entry in the batch.
   * @public
   */
  DeduplicationConfiguration?: DeduplicationConfiguration | undefined;
}

/**
 * Result entry for a published event. The position of each entry in the response
 * list aligns 1:1 with the corresponding request entry.
 * @public
 */
export interface PutEventsResultEntry {
  /**
   * Unique event ID assigned by the service.
   * @public
   */
  EventId?: string | undefined;

  /**
   * Sequence number assigned to the message for ordering within the message group.
   * @public
   */
  SequenceNumber?: string | undefined;

  /**
   * Indicates the outcome for a successfully processed publish entry.
   * @public
   */
  SuccessCode?: SuccessCode | undefined;

  /**
   * Error code identifying why a publish batch entry failed.
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * Human-readable explanation of why a publish batch entry failed.
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface PutEventsResponse {
  /**
   * The number of entries in the batch that failed to be published.
   * @public
   */
  FailedEntryCount?: number | undefined;

  /**
   * List of per-entry publish results, in the same order as the request entries.
   * @public
   */
  Entries?: PutEventsResultEntry[] | undefined;
}

/**
 * System metadata for PutRawEvents entries. ContentType is required because
 * PutRawEvents supports arbitrary binary formats.
 * @public
 */
export interface PutRawEventsSystemMetadata {
  /**
   * Content type of the event data (e.g., "application/cloudevents+json").
   * @public
   */
  ContentType: string | undefined;

  /**
   * Deduplication ID for FIFO deduplication.
   * @public
   */
  DeduplicationId?: string | undefined;

  /**
   * Event group ID for FIFO ordering.
   * @public
   */
  EventGroupId?: string | undefined;
}

/**
 * A single event entry in a raw publish request.
 * @public
 */
export interface PutRawEventsRequestEntry {
  /**
   * The event data as a base64-encoded blob. Supports binary formats.
   * @public
   */
  Data: Uint8Array | undefined;

  /**
   * Metadata key-value pairs you define. Keys must be 1-128 characters and must not contain "/".
   * @public
   */
  Metadata?: Record<string, string> | undefined;

  /**
   * Structured system metadata with defined properties.
   * @public
   */
  SystemMetadata: PutRawEventsSystemMetadata | undefined;
}

/**
 * Authentication configuration for public Confluent Schema Registry via EventBridge Connection.
 * @public
 */
export interface ConfluentPublicRegistryConfiguration {
  /**
   * EventBridge Connection ARN that provides API Key or OAuth credentials for the registry.
   * @public
   */
  ConnectionArn: string | undefined;
}

/**
 * Schema registry settings used to encode open-format (Avro/Protobuf) events.
 * @public
 */
export interface SchemaRegistryConfiguration {
  /**
   * Glue Schema Registry ARN, or Confluent Cloud HTTPS URL.
   * @public
   */
  RegistryUri: string | undefined;

  /**
   * Required when RegistryUri is an HTTPS URL. Provides Connection-based auth for Confluent Cloud.
   * @public
   */
  ConfluentPublicRegistryConfiguration?: ConfluentPublicRegistryConfiguration | undefined;
}

/**
 * @public
 */
export interface PutRawEventsRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn: string | undefined;

  /**
   * List of event entries to publish. Must contain at least one entry.
   * @public
   */
  Entries: PutRawEventsRequestEntry[] | undefined;

  /**
   * Schema-registry settings for encoding open-format (Avro/Protobuf) events.
   * Required for open-format entries; ignored for JSON entries. The registry
   * is read with the caller's credentials, so the caller needs read
   * access to the registry it references.
   * @public
   */
  SchemaRegistryConfiguration?: SchemaRegistryConfiguration | undefined;

  /**
   * Request-level deduplication settings, applied to every entry in the batch.
   * @public
   */
  DeduplicationConfiguration?: DeduplicationConfiguration | undefined;
}

/**
 * Result entry for a published event. The position of each entry in the response list
 * aligns 1:1 with the corresponding request entry, enabling co-location by index.
 * @public
 */
export interface PutRawEventsResultEntry {
  /**
   * Unique event ID assigned by the service. Present on successful entries.
   * @public
   */
  EventId?: string | undefined;

  /**
   * Sequence number for ordering within the event group.
   * @public
   */
  SequenceNumber?: string | undefined;

  /**
   * Indicates how the entry was processed. Present only on successful entries.
   * @public
   */
  SuccessCode?: SuccessCode | undefined;

  /**
   * Error code if the entry failed.
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * Error message if the entry failed.
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface PutRawEventsResponse {
  /**
   * The number of entries in the batch that failed to be published.
   * @public
   */
  FailedEntryCount?: number | undefined;

  /**
   * List of per-entry publish results, in the same order as the request entries.
   * @public
   */
  Entries?: PutRawEventsResultEntry[] | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A resource policy document, as a JSON string. The "default" policy can be up to
   * 20 KB (20,480 bytes of UTF-8) by default. This quota is adjustable in Service
   * Quotas. A "default" policy that exceeds the quota is rejected with
   * PolicyLengthExceededException. No policy document can exceed 389,120 bytes of
   * UTF-8, regardless of the quota.
   * @public
   */
  PolicyDocument: string | undefined;

  /**
   * Which named policy to write. Defaults to "default", the customer-managed policy,
   * when omitted (a write AWS Resource Access Manager makes on the owner's behalf
   * resolves to "AWS_RAM" instead). The two writers are exclusive in both directions —
   * only Resource Access Manager can write "AWS_RAM", and only the bus owner can write
   * "default" — so naming the other party's policy fails with AccessDeniedException.
   * A well-formed name that is neither of the two fails with InvalidInputException.
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * The write succeeds only if the named policy's current revision ID matches
   * this value; a policy that does not exist yet matches only the sentinel
   * "NO_POLICY" (create-only). On mismatch the operation fails with
   * ConflictException. When omitted, the write is unconditional. Every attempt
   * stores a newly generated revision ID, so retrying an unanswered request can
   * conflict with the caller's own earlier attempt; read the policy back and
   * compare it with the one you intended before treating a conflict as another
   * writer's change.
   * @public
   */
  ExpectedRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Name of a policy attached to a resource. Valid values: "default" (the
   * customer-managed policy) and "AWS_RAM" (managed exclusively by AWS Resource
   * Access Manager). Any other value is rejected.
   * @public
   */
  PolicyName: string | undefined;

  /**
   * Absent when the write removed the policy; a removal produces no new revision.
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface RevokeResourceRequest {
  /**
   * ARN of a resource a bus owner can revoke: a subscriber or an EventSource. The pattern is
   * the revocable subset of TaggableResourceArn; buses are not revocable.
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface RevokeResourceResponse {
  /**
   * ARN of a resource a bus owner can revoke: a subscriber or an EventSource. The pattern is
   * the revocable subset of TaggableResourceArn; buses are not revocable.
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * ARN for an EventBridge resource that supports tagging: event buses,
   * subscribers, and event sources.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * Tags attached to a resource, as key-value pairs.
   * @public
   */
  Tags: Record<string, string> | undefined;
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
   * ARN for an EventBridge resource that supports tagging: event buses,
   * subscribers, and event sources.
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * List of tag keys.
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateEventBusRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn: string | undefined;

  /**
   * Free-text description. Used by every resource type that has one: event buses,
   * subscribers, and event sources.
   * @public
   */
  Description?: string | undefined;

  /**
   * Encryption configuration for an event bus.
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * Event storage configuration for an event bus.
   * @public
   */
  StorageConfiguration?: StorageConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateEventBusResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * Name of an event bus. The first character must be alphanumeric; the remaining characters
   * may also include '.', '-', and '_'. The grammar matches the name segment of EventBusArn
   * (event-busv2/<name>/<id>), so every valid name can be represented in the bus's ARN. The same
   * type is used everywhere a bus name appears.
   * @public
   */
  Name?: string | undefined;

  /**
   * Free-text description. Used by every resource type that has one: event buses,
   * subscribers, and event sources.
   * @public
   */
  Description?: string | undefined;

  /**
   * Encryption configuration for an event bus.
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * Event storage configuration of an event bus, as returned on reads.
   * @public
   */
  StorageConfiguration?: StorageConfigurationOutput | undefined;

  /**
   * Lifecycle state of an event bus.
   * - CREATING: Bus creation is in progress.
   * - CREATE_FAILED: Bus creation failed; see StateReason. The bus cannot be recovered or
   *   recreated in place: delete it with DeleteEventBus, then create a new bus.
   * - ACTIVE: Bus is fully operational and can accept events.
   * - UPDATING: Bus update is in progress.
   * - UPDATE_FAILED: Bus update failed; the bus remains operational with its previous configuration.
   * - DELETING: Bus deletion is actively in progress.
   * - DELETE_FAILED: Bus deletion failed; see StateReason. Retry DeleteEventBus after removing
   *   subscribers and event sources.
   * @public
   */
  State?: BusState | undefined;

  /**
   * Human-readable explanation of why an event bus is in its current State. Omitted when the
   * bus is in a normal operational state (ACTIVE). It stands in for the error response an
   * asynchronous failure cannot return, so it applies only to resources with an asynchronous
   * lifecycle: event buses. EventSources and subscribers are provisioned synchronously and
   * report failures directly on the request.
   * @public
   */
  StateReason?: string | undefined;

  /**
   * The time the event bus was last modified.
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateEventSourceRequest {
  /**
   * EventSource ARN: event-sourcev2/<type>/<name>/<id>. The type segment is set by the service
   * (aws.service for AWS service events, aws.partner for partner events) and is not part of the
   * resource's name. The id segment is a 25-character identifier generated by the service.
   * @public
   */
  EventSourceArn: string | undefined;

  /**
   * Discriminated EventSource configuration. Exactly one variant must be set.
   * @public
   */
  Configuration?: EventSourceConfiguration | undefined;

  /**
   * Free-text description. Used by every resource type that has one: event buses,
   * subscribers, and event sources.
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEventSourceResponse {
  /**
   * EventSource ARN: event-sourcev2/<type>/<name>/<id>. The type segment is set by the service
   * (aws.service for AWS service events, aws.partner for partner events) and is not part of the
   * resource's name. The id segment is a 25-character identifier generated by the service.
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * EventSource name. First character alphanumeric; the rest may add '.', '-', '_'. Names may not
   * begin with the reserved "aws." prefix. The grammar
   * matches the ARN local-name segment in EventSourceArn (event-sourcev2/<type>/<name>/<id>), mirroring
   * EventBusName, so a name the ARN cannot represent cannot be created.
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * Lifecycle state of an EventSource. Revocation is reported by the Revoked flag.
   * @public
   */
  State?: EventSourceState | undefined;

  /**
   * The time the EventSource was last modified.
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * Update-able configuration for how the subscriber invokes its target.
 * @public
 */
export interface UpdateInvokeConfiguration {
  /**
   * IAM role the service assumes to invoke the target. Must belong to the
   * calling account.
   * @public
   */
  RoleArn: string | undefined;

  /**
   * Lambda invocation parameters for subscribers. Values are forwarded to the Lambda Invoke API.
   * Every string member accepts a literal or a JSONata expression (e.g. "\{% $events.Data.qualifier %\}").
   * @public
   */
  LambdaParameters?: LambdaParameters | undefined;

  /**
   * SQS invocation parameters for subscribers. Values are forwarded to the SQS SendMessageBatch API.
   * All scalar values accept a literal or a JSONata expression (e.g. "\{% $events.Data.groupId %\}").
   * @public
   */
  SqsParameters?: SqsParameters | undefined;

  /**
   * SNS invocation parameters for subscribers. Values are forwarded to the SNS PublishBatch API.
   * All scalar values accept a literal or a JSONata expression (e.g. "\{% $events.Data.groupId %\}").
   * @public
   */
  SnsParameters?: SnsParameters | undefined;

  /**
   * Kinesis Data Streams invocation parameters for subscribers. Values are forwarded to the
   * Kinesis PutRecords API.
   * All scalar values accept a literal or a JSONata expression (e.g. "\{% $events.Data.partitionKey %\}").
   * @public
   */
  KinesisParameters?: KinesisParameters | undefined;

  /**
   * Step Functions invocation parameters for subscribers. Values are forwarded to the
   * Step Functions StartExecution or StartSyncExecution API.
   * Every string member accepts a literal or a JSONata expression (e.g. "\{% $events.Data.executionName %\}").
   * @public
   */
  StepFunctionsParameters?: StepFunctionsParameters | undefined;

  /**
   * HTTP invocation parameters for subscribers (API Gateway / API Destination). Values are
   * forwarded to the HTTP endpoint.
   * @public
   */
  HttpParameters?: HttpParameters | undefined;

  /**
   * Parameters for USI (Universal Service Integration) targets.
   * Used when TargetArn is in the format arn:aws:events:::aws-sdk:\{service\}:\{apiAction\}
   * @public
   */
  UniversalTargetParameters?: UniversalTargetParameters | undefined;

  /**
   * Parameters for forwarding events to another EventBridge event bus.
   * @public
   */
  EventBusV2Parameters?: EventBusV2Parameters | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriberRequest {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a subscriber.
   * @public
   */
  SubscriberArn: string | undefined;

  /**
   * Free-text description. Used by every resource type that has one: event buses,
   * subscribers, and event sources.
   * @public
   */
  Description?: string | undefined;

  /**
   * Customer-controlled run state of a subscriber, set on create or update. Distinct
   * from the bus lifecycle vocabulary, where ACTIVE means "provisioned and healthy".
   * Delivery requires State RUNNING on a subscriber that is not revoked.
   * @public
   */
  State?: SubscriberState | undefined;

  /**
   * Position from which delivery resumes when a subscriber is unpaused.
   * Honored only on an UpdateSubscriber call that transitions State
   * from STOPPED to RUNNING (unpause); ignored on any other call and not accepted
   * on Create. Defaults to LAST_PROCESSED when omitted.
   * @public
   */
  ResumePosition?: ResumePosition | undefined;

  /**
   * Update-able configuration for how the subscriber invokes its target.
   * @public
   */
  InvokeConfiguration?: UpdateInvokeConfiguration | undefined;

  /**
   * Configuration for filtering events delivered to a subscriber.
   * On CreateSubscriber, Filters is required and must contain at least one Filter with a non-empty Pattern.
   * On UpdateSubscriber, an empty `FilterConfiguration:\{\}` clears the existing filter.
   * Any non-empty shape (including `\{Language:X\}` without Filters) must contain a valid Filters list
   * — same contract as CreateSubscriber. A non-empty Filters list overwrites; an omitted
   * FilterConfiguration preserves existing state.
   * All Filters are implicitly ANDed — an event must match every Filter to be delivered.
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * Batching configuration for a subscriber.
   * @public
   */
  BatchConfiguration?: BatchConfiguration | undefined;

  /**
   * Not applicable to universal (aws-sdk) targets, whose input transformation is UniversalTargetParameters.Input; a Transformer on such a target is rejected.
   * @public
   */
  Transformer?: Transformer | undefined;

  /**
   * Retry policy for a subscriber.
   * @public
   */
  RetryPolicy?: RetryPolicy | undefined;

  /**
   * On-failure configuration: where a failed delivery is sent. Shared by the subscriber and the
   * EventSource.
   * @public
   */
  OnFailureConfiguration?: OnFailureConfiguration | undefined;

  /**
   * Log configuration for a subscriber.
   * @public
   */
  LogConfiguration?: LogConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriberResponse {
  /**
   * The Amazon Resource Name (ARN) that uniquely identifies a subscriber.
   * @public
   */
  SubscriberArn?: string | undefined;

  /**
   * Name of a subscriber. The first character must be alphanumeric; the remaining
   * characters may also include '.', '-', and '_'.
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies an event bus.
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * Delivery ordering mode of a subscriber: FIFO delivers events in order within
   * an event group; UNORDERED delivers without an ordering guarantee.
   * @public
   */
  Type?: OrderingType | undefined;

  /**
   * Starting position for a subscriber.
   * @public
   */
  StartingPosition?: StartingPosition | undefined;

  /**
   * Point-in-time configuration for a subscriber.
   * Only applicable when StartingPosition is POINT_IN_TIME.
   * @public
   */
  PointInTimeConfiguration?: PointInTimeConfiguration | undefined;

  /**
   * Customer-controlled run state of a subscriber, set on create or update. Distinct
   * from the bus lifecycle vocabulary, where ACTIVE means "provisioned and healthy".
   * Delivery requires State RUNNING on a subscriber that is not revoked.
   * @public
   */
  State?: SubscriberState | undefined;

  /**
   * The time the subscriber was last modified.
   * @public
   */
  LastModifiedTime?: Date | undefined;
}
