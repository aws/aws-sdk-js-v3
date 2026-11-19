// smithy-typescript generated code
import type {
  BusState,
  ConnectivityState,
  DeduplicationType,
  EventSourceState,
  EventSourceType,
  FilterLanguage,
  FilterScope,
  IncludePayload,
  InvocationType,
  LogLevel,
  MskAcks,
  MskCompression,
  MskConnectivity,
  OrderingType,
  PointType,
  ResumePosition,
  RetryStrategy,
  StartingPosition,
  SubscriberState,
  SuccessCode,
  TransformerType,
  WebhookDeduplicationType,
  WebhookHmacAlgorithm,
  WebhookHmacEncoding,
  WebhookSecretEncoding,
  WebhookSignedMessageComposition,
} from "./enums";

/**
 * <p>Encryption configuration for an event bus.</p>
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * <p>Identifier of the AWS KMS customer managed key used to encrypt events: a key ID, key ARN, alias name, or alias ARN. When absent, events are encrypted with an AWS owned key.</p>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;
}

/**
 * <p>Event storage configuration for an event bus.</p>
 * @public
 */
export interface StorageConfiguration {
  /**
   * <p>Number of days events are retained on the event bus.</p>
   * @public
   */
  RetentionPeriodInDays?: number | undefined;
}

/**
 * @public
 */
export interface CreateEventBusRequest {
  /**
   * <p>Name of an event bus. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'. The grammar matches the name segment of EventBusArn (event-busv2/&lt;name&gt;/&lt;id&gt;), so every valid name can be represented in the bus's ARN. The same type is used everywhere a bus name appears.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Free-text description. Used by every resource type that has one: event buses, subscribers, and event sources.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Encryption configuration for an event bus.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>Event storage configuration for an event bus.</p>
   * @public
   */
  StorageConfiguration?: StorageConfiguration | undefined;

  /**
   * <p>Tags attached to a resource, as key-value pairs.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Unique, case-sensitive identifier that ensures the idempotency of the request. The SDK generates one automatically when the field is omitted.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>Event storage configuration of an event bus, as returned on reads.</p>
 * @public
 */
export interface StorageConfigurationOutput {
  /**
   * <p>Number of days events are retained on the event bus.</p>
   * @public
   */
  RetentionPeriodInDays?: number | undefined;

  /**
   * <p>The earliest point in time from which stored events are available. Events older than this have expired from retention.</p>
   * @public
   */
  RetentionWindowStartTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateEventBusResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * <p>Name of an event bus. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'. The grammar matches the name segment of EventBusArn (event-busv2/&lt;name&gt;/&lt;id&gt;), so every valid name can be represented in the bus's ARN. The same type is used everywhere a bus name appears.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Free-text description. Used by every resource type that has one: event buses, subscribers, and event sources.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Encryption configuration for an event bus.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>Event storage configuration of an event bus, as returned on reads.</p>
   * @public
   */
  StorageConfiguration?: StorageConfigurationOutput | undefined;

  /**
   * <p>Lifecycle state of an event bus.</p> <ul> <li> <p>CREATING: Bus creation is in progress.</p> </li> <li> <p>CREATE_FAILED: Bus creation failed; see StateReason. The bus cannot be recovered or recreated in place: delete it with DeleteEventBus, then create a new bus.</p> </li> <li> <p>ACTIVE: Bus is fully operational and can accept events.</p> </li> <li> <p>UPDATING: Bus update is in progress.</p> </li> <li> <p>UPDATE_FAILED: Bus update failed; the bus remains operational with its previous configuration.</p> </li> <li> <p>DELETING: Bus deletion is actively in progress.</p> </li> <li> <p>DELETE_FAILED: Bus deletion failed; see StateReason. Retry DeleteEventBus after removing subscribers and event sources.</p> </li> </ul>
   * @public
   */
  State?: BusState | undefined;

  /**
   * <p>Human-readable explanation of why an event bus is in its current State. Omitted when the bus is in a normal operational state (ACTIVE). It stands in for the error response an asynchronous failure cannot return, so it applies only to resources with an asynchronous lifecycle: event buses. EventSources and subscribers are provisioned synchronously and report failures directly on the request.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The time the event bus was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * <p>On-failure configuration: where a failed delivery is sent. Shared by the subscriber and the EventSource.</p>
 * @public
 */
export interface OnFailureConfiguration {
  /**
   * <p>The ARN of the destination that receives events that could not be delivered. An Amazon SQS queue is the supported destination.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>Configuration for forwarding a single AWS service's events from the account's default event bus.</p>
 * @public
 */
export interface AwsServiceEventsSourceConfiguration {
  /**
   * <p>A single AWS service source identifier, e.g. "aws.s3". Wildcards and lists are rejected.</p>
   * @public
   */
  AwsService: string | undefined;

  /**
   * <p>A filter pattern, as a JSON string, that defines which of the service's events are forwarded to the event bus. Do not include source, account, or region as top-level fields. If no pattern is specified, all events from the service are forwarded.</p>
   * @public
   */
  Pattern?: string | undefined;

  /**
   * <p>The destination for events that could not be forwarded.</p>
   * @public
   */
  OnFailureConfiguration?: OnFailureConfiguration | undefined;
}

/**
 * <p>Configuration for forwarding a partner event source's events through a managed partner event bus.</p>
 * @public
 */
export interface PartnerEventsSourceConfiguration {
  /**
   * <p>ARN of the partner event source to forward. It is a partner-owned resource, so the account segment is empty: arn:aws:events:&lt;region&gt;::event-source/aws.partner/&lt;name&gt;.</p>
   * @public
   */
  PartnerEventSourceArn: string | undefined;

  /**
   * <p>A filter pattern, as a JSON string, that defines which of the partner event source's events are forwarded to the event bus. If no pattern is specified, all events from the partner event source are forwarded.</p>
   * @public
   */
  Pattern?: string | undefined;

  /**
   * <p>Identifier of the AWS KMS customer managed key used to encrypt events: a key ID, key ARN, alias name, or alias ARN. When absent, events are encrypted with an AWS owned key.</p>
   * @public
   */
  PartnerBusKmsKeyIdentifier?: string | undefined;

  /**
   * <p>The destination for events that could not be forwarded, covering both the forwarding target and the managed partner event bus.</p>
   * @public
   */
  OnFailureConfiguration?: OnFailureConfiguration | undefined;
}

/**
 * <p>The provider sends HTTP Basic authentication credentials: an Authorization header with the value "Basic " followed by the Base64 encoding of username:password. Supply both Username and Password, or omit both so that EventBridge generates the pair. Supplying only one fails with InvalidInputException. EventBridge stores both only in AWS Secrets Manager and never returns them, including from DescribeEventSource.</p>
 * @public
 */
export interface WebhookBasicHttpAuthConfiguration {
  /**
   * <p>The username.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The password.</p>
   * @public
   */
  Password?: string | undefined;
}

/**
 * <p>The provider signs each request with a hash-based message authentication code (HMAC) of the secret. Amazon EventBridge accepts the request if any signature in SignatureHttpHeader matches.</p>
 * @public
 */
export interface WebhookHmacAuthConfiguration {
  /**
   * <p>The hash algorithm the provider uses to compute the signature.</p>
   * @public
   */
  Algorithm: WebhookHmacAlgorithm | undefined;

  /**
   * <p>How the provider encodes the signature in the header.</p>
   * @public
   */
  Encoding: WebhookHmacEncoding | undefined;

  /**
   * <p>The name of the header that carries the signature, for example X-Hub-Signature-256. When TimestampHttpHeader names the same header, Delimiter, SignaturePrefix and TimestampPrefix are all required. Reserved names are rejected, as described on StaticTokenAuthConfiguration's TokenHttpHeader.</p>
   * @public
   */
  SignatureHttpHeader: string | undefined;

  /**
   * <p>The text that precedes the signature in the header value, for example sha256=. Required when TimestampHttpHeader is the same header as SignatureHttpHeader.</p>
   * @public
   */
  SignaturePrefix?: string | undefined;

  /**
   * <p>The separator between parts of the signature header value, for example a comma for a header value of t=1727816400,v1=&lt;signature&gt;, or a space when the header carries several signatures. Required when TimestampHttpHeader is the same header as SignatureHttpHeader.</p>
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * <p>The name of the header that carries the request timestamp. Required when SignedMessageComposition is TIMESTAMP_DOT_BODY or MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY, or when TimestampToleranceInSeconds is set. Not allowed when SignedMessageComposition is BODY, because BODY does not sign the timestamp. Reserved names are rejected, as described on StaticTokenAuthConfiguration's TokenHttpHeader.</p>
   * @public
   */
  TimestampHttpHeader?: string | undefined;

  /**
   * <p>The text that precedes the timestamp in the header value, for example t=. Required when TimestampHttpHeader is the same header as SignatureHttpHeader.</p>
   * @public
   */
  TimestampPrefix?: string | undefined;

  /**
   * <p>The maximum difference, in seconds, allowed between the request timestamp and the time EventBridge receives the request. Requests outside this window are rejected. The default is 300 seconds. Requires TimestampHttpHeader. Not allowed when SignedMessageComposition is BODY, because BODY does not sign the timestamp.</p>
   * @public
   */
  TimestampToleranceInSeconds?: number | undefined;

  /**
   * <p>The name of the header that carries the message ID. Required when SignedMessageComposition is MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY. Requests whose message ID contains a period (.) are rejected. Reserved names are rejected, as described on StaticTokenAuthConfiguration's TokenHttpHeader.</p>
   * @public
   */
  MessageIdHttpHeader?: string | undefined;

  /**
   * <p>How the provider assembles the message it signs from the request.</p> <ul> <li> <p>BODY - The request body alone. BODY provides no replay protection.</p> </li> <li> <p>TIMESTAMP_DOT_BODY - &lt;timestamp&gt;.&lt;body&gt;. Requires TimestampHttpHeader.</p> </li> <li> <p>MESSAGE_ID_DOT_TIMESTAMP_DOT_BODY - &lt;messageId&gt;.&lt;timestamp&gt;.&lt;body&gt;, as in the Standard Webhooks specification. Requires TimestampHttpHeader and MessageIdHttpHeader.</p> </li> </ul>
   * @public
   */
  SignedMessageComposition: WebhookSignedMessageComposition | undefined;

  /**
   * <p>The signing key shared with the provider. If you omit it, EventBridge generates one. EventBridge stores the key only in AWS Secrets Manager and never returns it, including from DescribeEventSource. The key must be 16 to 512 bytes; with BASE64 SecretEncoding, this is measured after decoding.</p>
   * @public
   */
  SecretValue?: string | undefined;

  /**
   * <p>How the secret is encoded. RAW uses the secret's characters as the signing key. BASE64 decodes the secret first, as providers that follow the Standard Webhooks specification require. The default is RAW.</p>
   * @public
   */
  SecretEncoding?: WebhookSecretEncoding | undefined;
}

/**
 * <p>The provider sends the secret as the value of an HTTP header.</p>
 * @public
 */
export interface WebhookStaticTokenAuthConfiguration {
  /**
   * <p>The name of the header that carries the secret, for example X-Webhook-Secret. Reserved names are rejected: the names EventBridge's edge writes, such as Host and the X-Forwarded-* family, and the hop-by-hop and framing names an HTTP intermediary may rewrite, such as Connection and Content-Length. Authorization is allowed.</p>
   * @public
   */
  TokenHttpHeader: string | undefined;

  /**
   * <p>The token the provider sends in the header. If you omit it, EventBridge generates one. EventBridge stores the token only in AWS Secrets Manager and never returns it, including from DescribeEventSource. EventBridge compares it against the entire header value, so a provider that sends Authorization: Bearer &lt;token&gt; needs SecretValue to include the "Bearer " prefix.</p>
   * @public
   */
  SecretValue?: string | undefined;
}

/**
 * <p>How the provider authenticates its webhook requests. Exactly one variant must be set.</p>
 * @public
 */
export type WebhookAuthConfiguration =
  | WebhookAuthConfiguration.BasicHttpAuthConfigurationMember
  | WebhookAuthConfiguration.HmacAuthConfigurationMember
  | WebhookAuthConfiguration.StaticTokenAuthConfigurationMember
  | WebhookAuthConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace WebhookAuthConfiguration {
  /**
   * <p>The provider sends a static token in an HTTP header.</p>
   * @public
   */
  export interface StaticTokenAuthConfigurationMember {
    StaticTokenAuthConfiguration: WebhookStaticTokenAuthConfiguration;
    BasicHttpAuthConfiguration?: never;
    HmacAuthConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The provider uses HTTP Basic authentication.</p>
   * @public
   */
  export interface BasicHttpAuthConfigurationMember {
    StaticTokenAuthConfiguration?: never;
    BasicHttpAuthConfiguration: WebhookBasicHttpAuthConfiguration;
    HmacAuthConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The provider signs each request with an HMAC of the secret.</p>
   * @public
   */
  export interface HmacAuthConfigurationMember {
    StaticTokenAuthConfiguration?: never;
    BasicHttpAuthConfiguration?: never;
    HmacAuthConfiguration: WebhookHmacAuthConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StaticTokenAuthConfiguration?: never;
    BasicHttpAuthConfiguration?: never;
    HmacAuthConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    StaticTokenAuthConfiguration: (value: WebhookStaticTokenAuthConfiguration) => T;
    BasicHttpAuthConfiguration: (value: WebhookBasicHttpAuthConfiguration) => T;
    HmacAuthConfiguration: (value: WebhookHmacAuthConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Deduplication settings for a webhook EventSource's events.</p>
 * @public
 */
export interface WebhookDeduplicationConfiguration {
  /**
   * <p>How duplicate events are detected.</p>
   * @public
   */
  DeduplicationType: WebhookDeduplicationType | undefined;
}

/**
 * <p>Log configuration for a resource that delivers vended logs: a subscriber or a webhook EventSource.</p>
 * @public
 */
export interface LogConfiguration {
  /**
   * <p>Minimum log level. Records below this level are not emitted. Defaults to OFF.</p>
   * @public
   */
  Level?: LogLevel | undefined;

  /**
   * <p>Whether the customer event payload is embedded in log records. Defaults to ON_ERROR_ONLY.</p>
   * @public
   */
  IncludePayload?: IncludePayload | undefined;
}

/**
 * <p>Configuration for receiving events from an external provider, such as a SaaS application, that sends them as HTTPS POST requests to a webhook URL. The provider authenticates with an HTTP scheme instead of AWS credentials.</p>
 * @public
 */
export interface WebhookEventsSourceConfiguration {
  /**
   * <p>How the provider authenticates its requests. Exactly one authentication type must be set, and it can't be changed after the EventSource is created.</p>
   * @public
   */
  AuthConfiguration: WebhookAuthConfiguration | undefined;

  /**
   * <p>Optional. The AWS KMS key that encrypts the EventSource's secret in AWS Secrets Manager. Omit it to encrypt the secret with the AWS managed key aws/secretsmanager. A key you supply must be an enabled customer managed key in your account and Region. Changing it re-encrypts the secret under the new key. The previous key can still decrypt the stored versions until the credential is next rotated.</p>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;

  /**
   * <p>IAM role the service assumes to put the webhook's events on the event bus. Must belong to the calling account.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The HTTP request headers to add to each event's metadata, up to 20. Header names are case-insensitive and can't repeat. Each header is added under its lowercase name. Omit the list to add no headers. Headers that carry credentials or that describe the network path, and the header that carries the static token, can't be listed.</p>
   * @public
   */
  MetadataHttpHeaders?: string[] | undefined;

  /**
   * <p>Optional. Deduplicates this EventSource's events on the event bus. Omit it to deduplicate nothing.</p>
   * @public
   */
  DeduplicationConfiguration?: WebhookDeduplicationConfiguration | undefined;

  /**
   * <p>Optional. Controls the log records EventBridge delivers for this EventSource's webhook requests. Omit it to deliver no logs. Logs are delivered to the destinations you configure with Amazon CloudWatch Logs vended log delivery.</p>
   * @public
   */
  LogConfiguration?: LogConfiguration | undefined;
}

/**
 * <p>Discriminated EventSource configuration. Exactly one variant must be set.</p>
 * @public
 */
export type EventSourceConfiguration =
  | EventSourceConfiguration.AwsServiceEventsConfigurationMember
  | EventSourceConfiguration.PartnerEventsConfigurationMember
  | EventSourceConfiguration.WebhookEventsConfigurationMember
  | EventSourceConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace EventSourceConfiguration {
  /**
   * <p>Configuration for forwarding a single AWS service's events from the account's default event bus.</p>
   * @public
   */
  export interface AwsServiceEventsConfigurationMember {
    AwsServiceEventsConfiguration: AwsServiceEventsSourceConfiguration;
    PartnerEventsConfiguration?: never;
    WebhookEventsConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration for forwarding a partner event source's events through a managed partner event bus.</p>
   * @public
   */
  export interface PartnerEventsConfigurationMember {
    AwsServiceEventsConfiguration?: never;
    PartnerEventsConfiguration: PartnerEventsSourceConfiguration;
    WebhookEventsConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration for receiving events that a third-party provider sends to an HTTPS webhook URL.</p>
   * @public
   */
  export interface WebhookEventsConfigurationMember {
    AwsServiceEventsConfiguration?: never;
    PartnerEventsConfiguration?: never;
    WebhookEventsConfiguration: WebhookEventsSourceConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    AwsServiceEventsConfiguration?: never;
    PartnerEventsConfiguration?: never;
    WebhookEventsConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    AwsServiceEventsConfiguration: (value: AwsServiceEventsSourceConfiguration) => T;
    PartnerEventsConfiguration: (value: PartnerEventsSourceConfiguration) => T;
    WebhookEventsConfiguration: (value: WebhookEventsSourceConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateEventSourceRequest {
  /**
   * <p>EventSource name. First character alphanumeric; the rest may add '.', '-', '_'. Names may not begin with the reserved "aws." prefix. The grammar matches the ARN local-name segment in EventSourceArn (event-sourcev2/&lt;type&gt;/&lt;name&gt;/&lt;id&gt;), mirroring EventBusName, so a name the ARN cannot represent cannot be created.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn: string | undefined;

  /**
   * <p>Discriminated EventSource configuration. Exactly one variant must be set.</p>
   * @public
   */
  Configuration: EventSourceConfiguration | undefined;

  /**
   * <p>Free-text description. Used by every resource type that has one: event buses, subscribers, and event sources.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Tags attached to a resource, as key-value pairs.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Unique, case-sensitive identifier that ensures the idempotency of the request. The SDK generates one automatically when the field is omitted.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>Values EventBridge generated for a webhook EventSource.</p>
 * @public
 */
export interface WebhookDetails {
  /**
   * <p>The HTTPS URL to configure in the provider. The URL doesn't change for the life of the EventSource.</p>
   * @public
   */
  WebhookUrl?: string | undefined;

  /**
   * <p>The ARN of the AWS Secrets Manager secret, in your account, that holds the secret.</p>
   * @public
   */
  SecretArn?: string | undefined;
}

/**
 * <p>Values EventBridge generated for an EventSource that depend on its type. Only the member for the EventSource's type is set. Returned in responses only. You never supply these values.</p>
 * @public
 */
export interface EventSourceDetails {
  /**
   * <p>Values generated for a webhook EventSource.</p>
   * @public
   */
  WebhookDetails?: WebhookDetails | undefined;
}

/**
 * @public
 */
export interface CreateEventSourceResponse {
  /**
   * <p>EventSource ARN: event-sourcev2/&lt;type&gt;/&lt;name&gt;/&lt;id&gt;. The type segment is set by the service (aws.service for AWS service events, aws.partner for partner events, webhook for webhook events) and is not part of the resource's name. The id segment is a 25-character identifier generated by the service.</p>
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * <p>EventSource name. First character alphanumeric; the rest may add '.', '-', '_'. Names may not begin with the reserved "aws." prefix. The grammar matches the ARN local-name segment in EventSourceArn (event-sourcev2/&lt;type&gt;/&lt;name&gt;/&lt;id&gt;), mirroring EventBusName, so a name the ARN cannot represent cannot be created.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * <p>Lifecycle state of an EventSource. Revocation is reported by the Revoked flag.</p>
   * @public
   */
  State?: EventSourceState | undefined;

  /**
   * <p>Values EventBridge generated for this EventSource type, such as a webhook's URL and the ARN of its secret. Absent for EventSource types that have no generated values.</p>
   * @public
   */
  EventSourceDetails?: EventSourceDetails | undefined;

  /**
   * <p>The time the EventSource was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * <p>Batching configuration for a subscriber.</p>
 * @public
 */
export interface BatchConfiguration {
  /**
   * <p>The maximum number of events to include in a single batch delivered to the target. The service delivers up to this many events per batch; fewer may be delivered when the batch window elapses or the target's per-batch limit is smaller. This is a maximum, not a guaranteed count. Valid range is 1-500 (default: 10, or the target API's per-batch maximum). The resolved value applied by the service is returned on read.</p>
   * @public
   */
  MaxBatchSize?: number | undefined;

  /**
   * <p>The maximum time in seconds to wait for a batch to fill before delivering it to the target. This is a maximum; a batch may be delivered sooner if it reaches MaxBatchSize or another delivery condition is met. Valid range is 0-300 (default: 0, meaning no wait). The resolved value applied by the service is always returned on read.</p>
   * @public
   */
  MaxBatchWindowInSeconds?: number | undefined;
}

/**
 * <p>A single filter entry within a FilterConfiguration.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>An event pattern, as a JSON string, that selects which events match.</p>
   * @public
   */
  Pattern: string | undefined;

  /**
   * <p>Scope of a filter pattern within a FilterConfiguration.</p>
   * @public
   */
  Scope: FilterScope | undefined;
}

/**
 * <p>Configuration for filtering events delivered to a subscriber. On CreateSubscriber, Filters is required and must contain at least one Filter with a non-empty Pattern. On UpdateSubscriber, an empty <code>FilterConfiguration:\{\}</code> clears the existing filter. Any non-empty shape (including <code>\{Language:X\}</code> without Filters) must contain a valid Filters list — same contract as CreateSubscriber. A non-empty Filters list overwrites; an omitted FilterConfiguration preserves existing state. All Filters are implicitly ANDed — an event must match every Filter to be delivered.</p>
 * @public
 */
export interface FilterConfiguration {
  /**
   * <p>Defaults to EVENT_BRIDGE_PATTERN when not specified.</p>
   * @public
   */
  Language?: FilterLanguage | undefined;

  /**
   * <p>List of filters. An event must match every filter to be delivered.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Deduplication settings for a publish request.</p>
 * @public
 */
export interface DeduplicationConfiguration {
  /**
   * <p>How duplicate events are detected: by a hash of the event content (CONTENT_BASED). To deduplicate by a caller-supplied token instead, omit DeduplicationConfiguration and set DeduplicationId on each entry.</p>
   * @public
   */
  DeduplicationType: DeduplicationType | undefined;
}

/**
 * <p>Customer-controllable system metadata attached to events forwarded to the downstream event bus.</p>
 * @public
 */
export interface EventBusV2SystemMetadata {
  /**
   * <p>Event group ID for FIFO ordering on the downstream bus. Accepts a literal or a JSONata expression.</p>
   * @public
   */
  EventGroupId?: string | undefined;

  /**
   * <p>Deduplication ID for FIFO deduplication on the downstream bus. Accepts a literal or a JSONata expression.</p>
   * @public
   */
  DeduplicationId?: string | undefined;
}

/**
 * <p>Parameters for forwarding events to another EventBridge event bus.</p>
 * @public
 */
export interface EventBusV2Parameters {
  /**
   * <p>Customer-defined metadata forwarded with each event.</p>
   * @public
   */
  Metadata?: Record<string, string> | undefined;

  /**
   * <p>Customer-controllable system metadata attached to each forwarded event.</p>
   * @public
   */
  SystemMetadata?: EventBusV2SystemMetadata | undefined;

  /**
   * <p>Deduplication settings applied to the forwarded events on the downstream bus.</p>
   * @public
   */
  DeduplicationConfiguration?: DeduplicationConfiguration | undefined;
}

/**
 * <p>HTTP invocation parameters for subscribers (API Gateway / API Destination). Values are forwarded to the HTTP endpoint.</p>
 * @public
 */
export interface HttpParameters {
  /**
   * <p>Values substituted, in order, for the path-parameter placeholders in an HTTP target's endpoint path.</p>
   * @public
   */
  PathParameterValues?: string[] | undefined;

  /**
   * <p>Map of HTTP header names to values, sent with the request to an HTTP target.</p>
   * @public
   */
  HeaderParameters?: Record<string, string> | undefined;

  /**
   * <p>Map of query-string parameter names to values, appended to the request to an HTTP target.</p>
   * @public
   */
  QueryStringParameters?: Record<string, string> | undefined;

  /**
   * <p>Timeout in seconds for each invocation of the target (1-30). String-typed (not integer) so the value may be a JSONata expression.</p>
   * @public
   */
  InvocationTimeoutSeconds?: string | undefined;
}

/**
 * <p>Kinesis Data Streams invocation parameters for subscribers. Values are forwarded to the Kinesis PutRecords API. All scalar values accept a literal or a JSONata expression (e.g. "\{% $events.Data.partitionKey %\}").</p>
 * @public
 */
export interface KinesisParameters {
  /**
   * <p>Required by PutRecords even when an explicit hash key is supplied. Accepts JSONata expression.</p>
   * @public
   */
  PartitionKey?: string | undefined;

  /**
   * <p>Explicit hash key forwarded to PutRecords unchanged. Accepts JSONata expression.</p>
   * @public
   */
  ExplicitHashKey?: string | undefined;
}

/**
 * <p>Lambda invocation parameters for subscribers. Values are forwarded to the Lambda Invoke API. Every string member accepts a literal or a JSONata expression (e.g. "\{% $events.Data.qualifier %\}").</p>
 * @public
 */
export interface LambdaParameters {
  /**
   * <p>Lambda invocation type. EVENT invokes the function asynchronously; REQUEST_RESPONSE waits for its result.</p>
   * @public
   */
  InvocationType?: InvocationType | undefined;

  /**
   * <p>Lambda qualifier: $LATEST, $LATEST.PUBLISHED, a numeric version, or an alias. Accepts a JSONata expression.</p>
   * @public
   */
  Qualifier?: string | undefined;

  /**
   * <p>Durable execution name. Accepts a JSONata expression.</p>
   * @public
   */
  DurableExecutionName?: string | undefined;

  /**
   * <p>Tenant identifier. Accepts a JSONata expression.</p>
   * @public
   */
  TenantId?: string | undefined;

  /**
   * <p>Timeout in seconds for each invocation of the target. String-typed so the value may be a JSONata expression.</p>
   * @public
   */
  InvocationTimeoutSeconds?: string | undefined;
}

/**
 * <p>A single Kafka record header. Both Key and Value accept a literal or a JSONata expression (e.g. "\{% $events.metadata.source %\}") resolved once per delivered event.</p>
 * @public
 */
export interface MskHeader {
  /**
   * <p>The header key. Accepts a literal or a JSONata expression.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The header value. Accepts a literal or a JSONata expression.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>MSK (Apache Kafka) invocation parameters for subscribers targeting an Amazon MSK cluster.</p>
 * @public
 */
export interface MskParameters {
  /**
   * <p>Name of the Kafka topic events are produced to. Accepts a literal or a JSONata expression resolved once per delivered event.</p>
   * @public
   */
  TopicName: string | undefined;

  /**
   * <p>Producer compression codec applied to the record batch. Defaults to NONE.</p>
   * @public
   */
  Compression?: MskCompression | undefined;

  /**
   * <p>Producer acknowledgement mode. Defaults to ALL.</p>
   * @public
   */
  Acks?: MskAcks | undefined;

  /**
   * <p>Kafka record key. Accepts a literal or a JSONata expression (e.g. "\{% $events.data.customerId %\}") resolved once per delivered event; the resolved value selects the destination partition. If you omit it, the producer selects the partition; on an ordered (FIFO) subscriber, EventBridge instead uses the event group ID as the record key to preserve ordering.</p>
   * @public
   */
  PartitionKey?: string | undefined;

  /**
   * <p>Kafka record headers attached to each produced record.</p>
   * @public
   */
  Headers?: MskHeader[] | undefined;

  /**
   * <p>Producer client.id passed to the Kafka broker. Identifies the producer in broker-side logs, metrics, and quota enforcement. A literal, not a JSONata expression: it is a connection-level setting resolved once when the producer is created, not per event. If you do not set it, EventBridge uses the subscriber ARN.</p>
   * @public
   */
  ClientId?: string | undefined;

  /**
   * <p>How the service connects to the cluster. A cluster can have public access and multi-VPC private connectivity turned on at the same time, so the subscriber names the one to use. That path must be turned on, with IAM access control, on the cluster.</p>
   * @public
   */
  Connectivity: MskConnectivity | undefined;
}

/**
 * <p>A custom SNS message attribute (data type plus string or binary value).</p>
 * @public
 */
export interface SnsMessageAttributeValue {
  /**
   * <p>Attribute data type. Requiredness and the accepted vocabulary belong to SNS, which rejects an attribute without a data type on delivery.</p>
   * @public
   */
  DataType?: string | undefined;

  /**
   * <p>String attribute value. A JSONata expression resolves once per delivered event.</p>
   * @public
   */
  StringValue?: string | undefined;

  /**
   * <p>Base64-encoded literal binary attribute value.</p>
   * @public
   */
  BinaryValue?: string | undefined;
}

/**
 * <p>SNS invocation parameters for subscribers. Values are forwarded to the SNS PublishBatch API. All scalar values accept a literal or a JSONata expression (e.g. "\{% $events.Data.groupId %\}").</p>
 * @public
 */
export interface SnsParameters {
  /**
   * <p>Message group ID for FIFO topics. Accepts JSONata expression.</p>
   * @public
   */
  MessageGroupId?: string | undefined;

  /**
   * <p>Message deduplication ID for FIFO topics. Accepts JSONata expression.</p>
   * @public
   */
  MessageDeduplicationId?: string | undefined;

  /**
   * <p>Subject line for email protocol subscriptions. Accepts JSONata expression.</p>
   * @public
   */
  Subject?: string | undefined;

  /**
   * <p>Per-protocol message formatting mode, forwarded to SNS Publish unchanged. Accepts JSONata expression.</p>
   * @public
   */
  MessageStructure?: string | undefined;

  /**
   * <p>Custom message attributes for SNS filtering.</p>
   * @public
   */
  MessageAttributes?: Record<string, SnsMessageAttributeValue> | undefined;
}

/**
 * <p>A custom SQS message attribute (data type plus string or binary value).</p>
 * @public
 */
export interface SqsMessageAttributeValue {
  /**
   * <p>Attribute data type. Requiredness, the accepted vocabulary, and any custom label belong to SQS, which rejects an attribute without a data type on delivery.</p>
   * @public
   */
  DataType?: string | undefined;

  /**
   * <p>String attribute value. A JSONata expression resolves once per delivered event.</p>
   * @public
   */
  StringValue?: string | undefined;

  /**
   * <p>Base64-encoded literal binary attribute value.</p>
   * @public
   */
  BinaryValue?: string | undefined;
}

/**
 * <p>SQS invocation parameters for subscribers. Values are forwarded to the SQS SendMessageBatch API. All scalar values accept a literal or a JSONata expression (e.g. "\{% $events.Data.groupId %\}").</p>
 * @public
 */
export interface SqsParameters {
  /**
   * <p>Message group ID for FIFO queues. Accepts JSONata expression.</p>
   * @public
   */
  MessageGroupId?: string | undefined;

  /**
   * <p>Message deduplication ID for FIFO queues. Accepts JSONata expression.</p>
   * @public
   */
  MessageDeduplicationId?: string | undefined;

  /**
   * <p>Delay in seconds before the message becomes visible, standard queues only. Accepts JSONata expression.</p>
   * @public
   */
  DelaySeconds?: string | undefined;

  /**
   * <p>Custom message attributes (name/type/value).</p>
   * @public
   */
  MessageAttributes?: Record<string, SqsMessageAttributeValue> | undefined;

  /**
   * <p>System message attributes (e.g., AWSTraceHeader).</p>
   * @public
   */
  MessageSystemAttributes?: Record<string, SqsMessageAttributeValue> | undefined;
}

/**
 * <p>Step Functions invocation parameters for subscribers. Values are forwarded to the Step Functions StartExecution or StartSyncExecution API. Every string member accepts a literal or a JSONata expression (e.g. "\{% $events.Data.executionName %\}").</p>
 * @public
 */
export interface StepFunctionsParameters {
  /**
   * <p>Selects StartExecution (EVENT) or StartSyncExecution (REQUEST_RESPONSE) at delivery.</p>
   * @public
   */
  InvocationType?: InvocationType | undefined;

  /**
   * <p>Name for the execution. Must be unique per account/region/state machine. Accepts JSONata expression.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>X-Ray trace header for distributed tracing. Accepts JSONata expression.</p>
   * @public
   */
  TraceHeader?: string | undefined;

  /**
   * <p>Timeout in seconds for each invocation of the target (1-30). String-typed (not integer) so the value may be a JSONata expression.</p>
   * @public
   */
  InvocationTimeoutSeconds?: string | undefined;
}

/**
 * <p>Parameters for USI (Universal Service Integration) targets. Used when TargetArn is in the format arn:aws:events:::aws-sdk:\{service\}:\{apiAction\}</p>
 * @public
 */
export interface UniversalTargetParameters {
  /**
   * <p>JSON string or JSONata expression that produces the API request. Supports \{% ... %\} JSONata expressions for dynamic values from the event.</p>
   * @public
   */
  Input: string | undefined;

  /**
   * <p>Timeout in seconds for each invocation of the target (1-30, default 30). Must be a literal integer; JSONata expressions are not supported for this field. String-typed to match the other targets' timeout fields. Defaults to 30s when unset.</p>
   * @public
   */
  InvocationTimeoutSeconds?: string | undefined;
}

/**
 * <p>Configuration for how the subscriber invokes its target.</p>
 * @public
 */
export interface InvokeConfiguration {
  /**
   * <p>IAM role the service assumes to invoke the target. Must belong to the calling account.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>Lambda invocation parameters for subscribers. Values are forwarded to the Lambda Invoke API. Every string member accepts a literal or a JSONata expression (e.g. "\{% $events.Data.qualifier %\}").</p>
   * @public
   */
  LambdaParameters?: LambdaParameters | undefined;

  /**
   * <p>SQS invocation parameters for subscribers. Values are forwarded to the SQS SendMessageBatch API. All scalar values accept a literal or a JSONata expression (e.g. "\{% $events.Data.groupId %\}").</p>
   * @public
   */
  SqsParameters?: SqsParameters | undefined;

  /**
   * <p>SNS invocation parameters for subscribers. Values are forwarded to the SNS PublishBatch API. All scalar values accept a literal or a JSONata expression (e.g. "\{% $events.Data.groupId %\}").</p>
   * @public
   */
  SnsParameters?: SnsParameters | undefined;

  /**
   * <p>Kinesis Data Streams invocation parameters for subscribers. Values are forwarded to the Kinesis PutRecords API. All scalar values accept a literal or a JSONata expression (e.g. "\{% $events.Data.partitionKey %\}").</p>
   * @public
   */
  KinesisParameters?: KinesisParameters | undefined;

  /**
   * <p>Step Functions invocation parameters for subscribers. Values are forwarded to the Step Functions StartExecution or StartSyncExecution API. Every string member accepts a literal or a JSONata expression (e.g. "\{% $events.Data.executionName %\}").</p>
   * @public
   */
  StepFunctionsParameters?: StepFunctionsParameters | undefined;

  /**
   * <p>HTTP invocation parameters for subscribers (API Gateway / API Destination). Values are forwarded to the HTTP endpoint.</p>
   * @public
   */
  HttpParameters?: HttpParameters | undefined;

  /**
   * <p>Parameters for USI (Universal Service Integration) targets. Used when TargetArn is in the format arn:aws:events:::aws-sdk:\{service\}:\{apiAction\}</p>
   * @public
   */
  UniversalTargetParameters?: UniversalTargetParameters | undefined;

  /**
   * <p>Parameters for forwarding events to another EventBridge event bus.</p>
   * @public
   */
  EventBusV2Parameters?: EventBusV2Parameters | undefined;

  /**
   * <p>MSK (Apache Kafka) invocation parameters for subscribers targeting an Amazon MSK cluster.</p>
   * @public
   */
  MskParameters?: MskParameters | undefined;

  /**
   * <p>ARN of the target a subscriber invokes. The resource grammar is service-neutral because target services use different separators and the USI form omits region and account.</p>
   * @public
   */
  TargetArn: string | undefined;
}

/**
 * <p>Point-in-time configuration for a subscriber. Only applicable when StartingPosition is POINT_IN_TIME.</p>
 * @public
 */
export interface PointInTimeConfiguration {
  /**
   * <p>Whether to start from the horizon or a specific timestamp.</p>
   * @public
   */
  PointType: PointType | undefined;

  /**
   * <p>Timestamp to start from. Required when PointType is TIMESTAMP.</p>
   * @public
   */
  StartingPoint?: Date | undefined;

  /**
   * <p>Timestamp to stop at. Optional.</p>
   * @public
   */
  EndPoint?: Date | undefined;
}

/**
 * <p>Retry policy for a subscriber.</p>
 * @public
 */
export interface RetryPolicy {
  /**
   * <p>Maximum number of retry attempts (0-185, default: 5).</p>
   * @public
   */
  MaxRetryAttempts?: number | undefined;

  /**
   * <p>Maximum age of an event in seconds before it is discarded (60-86400, default: 300).</p>
   * @public
   */
  MaxEventAgeInSeconds?: number | undefined;

  /**
   * <p>Strategy for determining which exceptions are retried. Default: ALL.</p>
   * @public
   */
  RetryStrategy?: RetryStrategy | undefined;
}

/**
 * <p>JSONata transform settings for a subscriber.</p>
 * @public
 */
export interface JsonataConfiguration {
  /**
   * <p>JSONata expression to transform the event. Must be wrapped in \{% %\} delimiters.</p>
   * @public
   */
  Expression: string | undefined;
}

/**
 * <p>Transformer configuration for a subscriber.</p>
 * @public
 */
export interface Transformer {
  /**
   * <p>Transform type.</p>
   * @public
   */
  Type?: TransformerType | undefined;

  /**
   * <p>JSONata expression configuration. Required when Type is JSONATA.</p>
   * @public
   */
  JsonataConfiguration?: JsonataConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSubscriberRequest {
  /**
   * <p>Name of a subscriber. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn: string | undefined;

  /**
   * <p>Configuration for how the subscriber invokes its target.</p>
   * @public
   */
  InvokeConfiguration: InvokeConfiguration | undefined;

  /**
   * <p>Free-text description. Used by every resource type that has one: event buses, subscribers, and event sources.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Configuration for filtering events delivered to a subscriber. On CreateSubscriber, Filters is required and must contain at least one Filter with a non-empty Pattern. On UpdateSubscriber, an empty <code>FilterConfiguration:\{\}</code> clears the existing filter. Any non-empty shape (including <code>\{Language:X\}</code> without Filters) must contain a valid Filters list — same contract as CreateSubscriber. A non-empty Filters list overwrites; an omitted FilterConfiguration preserves existing state. All Filters are implicitly ANDed — an event must match every Filter to be delivered.</p>
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * <p>Delivery ordering mode of a subscriber: FIFO delivers events in order within an event group; UNORDERED delivers without an ordering guarantee.</p>
   * @public
   */
  Type?: OrderingType | undefined;

  /**
   * <p>Starting position for a subscriber.</p>
   * @public
   */
  StartingPosition?: StartingPosition | undefined;

  /**
   * <p>Point-in-time configuration for a subscriber. Only applicable when StartingPosition is POINT_IN_TIME.</p>
   * @public
   */
  PointInTimeConfiguration?: PointInTimeConfiguration | undefined;

  /**
   * <p>Batching configuration for a subscriber.</p>
   * @public
   */
  BatchConfiguration?: BatchConfiguration | undefined;

  /**
   * <p>Transformer configuration for a subscriber.</p>
   * @public
   */
  Transformer?: Transformer | undefined;

  /**
   * <p>Retry policy for a subscriber.</p>
   * @public
   */
  RetryPolicy?: RetryPolicy | undefined;

  /**
   * <p>On-failure configuration: where a failed delivery is sent. Shared by the subscriber and the EventSource.</p>
   * @public
   */
  OnFailureConfiguration?: OnFailureConfiguration | undefined;

  /**
   * <p>Log configuration for a subscriber.</p>
   * @public
   */
  LogConfiguration?: LogConfiguration | undefined;

  /**
   * <p>Customer-controlled run state of a subscriber, set on create or update. Distinct from the bus lifecycle vocabulary, where ACTIVE means "provisioned and healthy". Delivery requires State RUNNING on a subscriber that is not revoked.</p>
   * @public
   */
  State?: SubscriberState | undefined;

  /**
   * <p>Tags attached to a resource, as key-value pairs.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Unique, case-sensitive identifier that ensures the idempotency of the request. The SDK generates one automatically when the field is omitted.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * <p>Values EventBridge manages for a subscriber that targets an Amazon MSK cluster.</p>
 * @public
 */
export interface MskDetails {
  /**
   * <p>Provisioning state of the connectivity EventBridge sets up to the cluster. Distinct from the subscriber's State, which the customer controls.</p>
   * @public
   */
  ConnectivityState?: ConnectivityState | undefined;

  /**
   * <p>Why provisioning failed. Present only when ConnectivityState is PROVISION_FAILED.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>ARN of the VPC connection EventBridge uses to reach the cluster. Present only for PRIVATE connectivity, once the connection exists. It is the connection the cluster owner sees through the MSK ListClientVpcConnections API.</p>
   * @public
   */
  VpcConnectionArn?: string | undefined;
}

/**
 * <p>Values EventBridge manages for a subscriber that depend on its target type. Only the member for the subscriber's target type is set. Returned in responses only; the customer never supplies these values.</p>
 * @public
 */
export interface SubscriberDetails {
  /**
   * <p>Values EventBridge manages for a subscriber that targets an Amazon MSK cluster.</p>
   * @public
   */
  MskDetails?: MskDetails | undefined;
}

/**
 * @public
 */
export interface CreateSubscriberResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a subscriber.</p>
   * @public
   */
  SubscriberArn?: string | undefined;

  /**
   * <p>Name of a subscriber. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * <p>Delivery ordering mode of a subscriber: FIFO delivers events in order within an event group; UNORDERED delivers without an ordering guarantee.</p>
   * @public
   */
  Type?: OrderingType | undefined;

  /**
   * <p>Starting position for a subscriber.</p>
   * @public
   */
  StartingPosition?: StartingPosition | undefined;

  /**
   * <p>Point-in-time configuration for a subscriber. Only applicable when StartingPosition is POINT_IN_TIME.</p>
   * @public
   */
  PointInTimeConfiguration?: PointInTimeConfiguration | undefined;

  /**
   * <p>Customer-controlled run state of a subscriber, set on create or update. Distinct from the bus lifecycle vocabulary, where ACTIVE means "provisioned and healthy". Delivery requires State RUNNING on a subscriber that is not revoked.</p>
   * @public
   */
  State?: SubscriberState | undefined;

  /**
   * <p>The time the subscriber was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>Values EventBridge manages for a subscriber that depend on its target type. Only the member for the subscriber's target type is set. Returned in responses only; the customer never supplies these values.</p>
   * @public
   */
  SubscriberDetails?: SubscriberDetails | undefined;
}

/**
 * @public
 */
export interface DeleteEventBusRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
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
   * <p>EventSource ARN: event-sourcev2/&lt;type&gt;/&lt;name&gt;/&lt;id&gt;. The type segment is set by the service (aws.service for AWS service events, aws.partner for partner events, webhook for webhook events) and is not part of the resource's name. The id segment is a 25-character identifier generated by the service.</p>
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
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Which named policy to delete. Defaults to "default" when omitted (a delete AWS Resource Access Manager makes on the owner's behalf resolves to "AWS_RAM" instead). The two writers are exclusive in both directions — only Resource Access Manager can delete "AWS_RAM", and only the bus owner can delete "default" — so naming the other party's policy fails with AccessDeniedException. A well-formed name that is neither of the two fails with InvalidInputException.</p>
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * <p>The delete succeeds only if the named policy's current revision ID matches this value; if it differs or the policy does not exist, the operation fails with ConflictException. The "NO_POLICY" sentinel is not valid here. When omitted, deleting an absent policy is an idempotent success. Supplying this value makes the delete non-idempotent: once it succeeds the expected revision no longer exists, so retrying an unanswered request fails with ConflictException even though the policy was deleted. To establish the outcome, read the policy back: ResourceNotFoundException means the delete took effect.</p>
   * @public
   */
  ExpectedRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {
  /**
   * <p>Revision ID of the policy that was deleted. Absent when no policy was deleted.</p>
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSubscriberRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a subscriber.</p>
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
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventBusResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * <p>Name of an event bus. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'. The grammar matches the name segment of EventBusArn (event-busv2/&lt;name&gt;/&lt;id&gt;), so every valid name can be represented in the bus's ARN. The same type is used everywhere a bus name appears.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Free-text description. Used by every resource type that has one: event buses, subscribers, and event sources.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Encryption configuration for an event bus.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>Event storage configuration of an event bus, as returned on reads.</p>
   * @public
   */
  StorageConfiguration?: StorageConfigurationOutput | undefined;

  /**
   * <p>The time the event bus was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time the event bus was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Lifecycle state of an event bus.</p> <ul> <li> <p>CREATING: Bus creation is in progress.</p> </li> <li> <p>CREATE_FAILED: Bus creation failed; see StateReason. The bus cannot be recovered or recreated in place: delete it with DeleteEventBus, then create a new bus.</p> </li> <li> <p>ACTIVE: Bus is fully operational and can accept events.</p> </li> <li> <p>UPDATING: Bus update is in progress.</p> </li> <li> <p>UPDATE_FAILED: Bus update failed; the bus remains operational with its previous configuration.</p> </li> <li> <p>DELETING: Bus deletion is actively in progress.</p> </li> <li> <p>DELETE_FAILED: Bus deletion failed; see StateReason. Retry DeleteEventBus after removing subscribers and event sources.</p> </li> </ul>
   * @public
   */
  State?: BusState | undefined;

  /**
   * <p>Human-readable explanation of why an event bus is in its current State. Omitted when the bus is in a normal operational state (ACTIVE). It stands in for the error response an asynchronous failure cannot return, so it applies only to resources with an asynchronous lifecycle: event buses. EventSources and subscribers are provisioned synchronously and report failures directly on the request.</p>
   * @public
   */
  StateReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventSourceRequest {
  /**
   * <p>EventSource ARN: event-sourcev2/&lt;type&gt;/&lt;name&gt;/&lt;id&gt;. The type segment is set by the service (aws.service for AWS service events, aws.partner for partner events, webhook for webhook events) and is not part of the resource's name. The id segment is a 25-character identifier generated by the service.</p>
   * @public
   */
  EventSourceArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventSourceResponse {
  /**
   * <p>EventSource ARN: event-sourcev2/&lt;type&gt;/&lt;name&gt;/&lt;id&gt;. The type segment is set by the service (aws.service for AWS service events, aws.partner for partner events, webhook for webhook events) and is not part of the resource's name. The id segment is a 25-character identifier generated by the service.</p>
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * <p>EventSource name. First character alphanumeric; the rest may add '.', '-', '_'. Names may not begin with the reserved "aws." prefix. The grammar matches the ARN local-name segment in EventSourceArn (event-sourcev2/&lt;type&gt;/&lt;name&gt;/&lt;id&gt;), mirroring EventBusName, so a name the ARN cannot represent cannot be created.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * <p>Discriminated EventSource configuration. Exactly one variant must be set.</p>
   * @public
   */
  Configuration?: EventSourceConfiguration | undefined;

  /**
   * <p>Free-text description. Used by every resource type that has one: event buses, subscribers, and event sources.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Lifecycle state of an EventSource. Revocation is reported by the Revoked flag.</p>
   * @public
   */
  State?: EventSourceState | undefined;

  /**
   * <p>True when the bus owner has withdrawn this EventSource. Present only when true, so an absent member means the EventSource is not revoked. Revocation is terminal: it never returns to false. Mutating operations on a revoked EventSource fail with InvalidStateException, except DeleteEventSource, which stays available so a revoked EventSource can still be cleaned up.</p>
   * @public
   */
  Revoked?: boolean | undefined;

  /**
   * <p>Values EventBridge generated for this EventSource type, such as a webhook's URL and the ARN of its secret. Absent for EventSource types that have no generated values.</p>
   * @public
   */
  EventSourceDetails?: EventSourceDetails | undefined;

  /**
   * <p>The time the EventSource was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time the EventSource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeSubscriberRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a subscriber.</p>
   * @public
   */
  SubscriberArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeSubscriberResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a subscriber.</p>
   * @public
   */
  SubscriberArn?: string | undefined;

  /**
   * <p>Name of a subscriber. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * <p>Configuration for how the subscriber invokes its target.</p>
   * @public
   */
  InvokeConfiguration?: InvokeConfiguration | undefined;

  /**
   * <p>Free-text description. Used by every resource type that has one: event buses, subscribers, and event sources.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Configuration for filtering events delivered to a subscriber. On CreateSubscriber, Filters is required and must contain at least one Filter with a non-empty Pattern. On UpdateSubscriber, an empty <code>FilterConfiguration:\{\}</code> clears the existing filter. Any non-empty shape (including <code>\{Language:X\}</code> without Filters) must contain a valid Filters list — same contract as CreateSubscriber. A non-empty Filters list overwrites; an omitted FilterConfiguration preserves existing state. All Filters are implicitly ANDed — an event must match every Filter to be delivered.</p>
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * <p>Delivery ordering mode of a subscriber: FIFO delivers events in order within an event group; UNORDERED delivers without an ordering guarantee.</p>
   * @public
   */
  Type?: OrderingType | undefined;

  /**
   * <p>Starting position for a subscriber.</p>
   * @public
   */
  StartingPosition?: StartingPosition | undefined;

  /**
   * <p>Point-in-time configuration for a subscriber. Only applicable when StartingPosition is POINT_IN_TIME.</p>
   * @public
   */
  PointInTimeConfiguration?: PointInTimeConfiguration | undefined;

  /**
   * <p>Batching configuration for a subscriber.</p>
   * @public
   */
  BatchConfiguration?: BatchConfiguration | undefined;

  /**
   * <p>Transformer configuration for a subscriber.</p>
   * @public
   */
  Transformer?: Transformer | undefined;

  /**
   * <p>Retry policy for a subscriber.</p>
   * @public
   */
  RetryPolicy?: RetryPolicy | undefined;

  /**
   * <p>On-failure configuration: where a failed delivery is sent. Shared by the subscriber and the EventSource.</p>
   * @public
   */
  OnFailureConfiguration?: OnFailureConfiguration | undefined;

  /**
   * <p>Log configuration for a subscriber.</p>
   * @public
   */
  LogConfiguration?: LogConfiguration | undefined;

  /**
   * <p>Customer-controlled run state of a subscriber, set on create or update. Distinct from the bus lifecycle vocabulary, where ACTIVE means "provisioned and healthy". Delivery requires State RUNNING on a subscriber that is not revoked.</p>
   * @public
   */
  State?: SubscriberState | undefined;

  /**
   * <p>True when the bus owner has revoked this subscriber. Present only when true, so an absent member means the subscriber is not revoked. Revocation is terminal: it never returns to false. Mutating operations on a revoked subscriber fail with InvalidStateException, except DeleteSubscriber, which stays available so a revoked subscriber can still be cleaned up.</p>
   * @public
   */
  Revoked?: boolean | undefined;

  /**
   * <p>The time the subscriber was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time the subscriber was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Values EventBridge manages for a subscriber that depend on its target type. Only the member for the subscriber's target type is set. Returned in responses only; the customer never supplies these values.</p>
   * @public
   */
  SubscriberDetails?: SubscriberDetails | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Which named policy to read. Defaults to "default" when omitted (a read AWS Resource Access Manager makes on the owner's behalf resolves to "AWS_RAM" instead). Unlike writing, neither name is reserved on a read: the bus owner can read both. There is no fallback between the two, so a bus shared only through Resource Access Manager fails with ResourceNotFoundException until "AWS_RAM" is named explicitly. A well-formed name that is neither of the two fails with InvalidInputException.</p>
   * @public
   */
  PolicyName?: string | undefined;
}

/**
 * <p>Returned only when the named policy exists. A missing event bus or a missing named policy fails with ResourceNotFoundException rather than returning an empty or null policy document. Every member is therefore always present on a successful response.</p>
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A resource policy document, as a JSON string. The maximum size is 389,120 bytes of UTF-8; the byte limit is enforced by the service.</p>
   * @public
   */
  PolicyDocument: string | undefined;

  /**
   * <p>Name of a policy attached to a resource. Valid values: "default" (the customer-managed policy) and "AWS_RAM" (managed exclusively by AWS Resource Access Manager). Any other value is rejected.</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>Revision ID of a resource policy. A new revision ID is generated on every successful write.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * @public
 */
export interface ListEventBusesRequest {
  /**
   * <p>Name of an event bus. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'. The grammar matches the name segment of EventBusArn (event-busv2/&lt;name&gt;/&lt;id&gt;), so every valid name can be represented in the bus's ARN. The same type is used everywhere a bus name appears.</p>
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * <p>AWS Account Id.</p>
   * @public
   */
  EventBusAccountId?: string | undefined;

  /**
   * <p>Opaque pagination token returned by a List operation. Pass it back in the next request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return in one page of a List operation.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Summary of an event bus, as returned by ListEventBuses.</p>
 * @public
 */
export interface EventBusSummary {
  /**
   * <p>Name of an event bus. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'. The grammar matches the name segment of EventBusArn (event-busv2/&lt;name&gt;/&lt;id&gt;), so every valid name can be represented in the bus's ARN. The same type is used everywhere a bus name appears.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * <p>Free-text description. Used by every resource type that has one: event buses, subscribers, and event sources.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The time the event bus was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time the event bus was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Lifecycle state of an event bus.</p> <ul> <li> <p>CREATING: Bus creation is in progress.</p> </li> <li> <p>CREATE_FAILED: Bus creation failed; see StateReason. The bus cannot be recovered or recreated in place: delete it with DeleteEventBus, then create a new bus.</p> </li> <li> <p>ACTIVE: Bus is fully operational and can accept events.</p> </li> <li> <p>UPDATING: Bus update is in progress.</p> </li> <li> <p>UPDATE_FAILED: Bus update failed; the bus remains operational with its previous configuration.</p> </li> <li> <p>DELETING: Bus deletion is actively in progress.</p> </li> <li> <p>DELETE_FAILED: Bus deletion failed; see StateReason. Retry DeleteEventBus after removing subscribers and event sources.</p> </li> </ul>
   * @public
   */
  State?: BusState | undefined;

  /**
   * <p>Human-readable explanation of why an event bus is in its current State. Omitted when the bus is in a normal operational state (ACTIVE). It stands in for the error response an asynchronous failure cannot return, so it applies only to resources with an asynchronous lifecycle: event buses. EventSources and subscribers are provisioned synchronously and report failures directly on the request.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>AWS Account Id.</p>
   * @public
   */
  EventBusAccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListEventBusesResponse {
  /**
   * <p>List of event bus summaries.</p>
   * @public
   */
  EventBuses?: EventBusSummary[] | undefined;

  /**
   * <p>Opaque pagination token returned by a List operation. Pass it back in the next request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventSourcesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * <p>EventSource name. First character alphanumeric; the rest may add '.', '-', '_'. Names may not begin with the reserved "aws." prefix. The grammar matches the ARN local-name segment in EventSourceArn (event-sourcev2/&lt;type&gt;/&lt;name&gt;/&lt;id&gt;), mirroring EventBusName, so a name the ARN cannot represent cannot be created.</p>
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * <p>Opaque pagination token returned by a List operation. Pass it back in the next request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return in one page of a List operation.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Summary of an EventSource, as returned by ListEventSources.</p>
 * @public
 */
export interface EventSourceSummary {
  /**
   * <p>EventSource ARN: event-sourcev2/&lt;type&gt;/&lt;name&gt;/&lt;id&gt;. The type segment is set by the service (aws.service for AWS service events, aws.partner for partner events, webhook for webhook events) and is not part of the resource's name. The id segment is a 25-character identifier generated by the service.</p>
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * <p>EventSource name. First character alphanumeric; the rest may add '.', '-', '_'. Names may not begin with the reserved "aws." prefix. The grammar matches the ARN local-name segment in EventSourceArn (event-sourcev2/&lt;type&gt;/&lt;name&gt;/&lt;id&gt;), mirroring EventBusName, so a name the ARN cannot represent cannot be created.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * <p>Origin type of an EventSource.</p> <ul> <li> <p>AWS_SERVICE_EVENTS - Events from an AWS service.</p> </li> <li> <p>PARTNER_EVENTS - Events from a partner event source.</p> </li> <li> <p>WEBHOOK_EVENTS - Events that a third-party provider sends to a webhook URL.</p> </li> </ul>
   * @public
   */
  Type?: EventSourceType | undefined;

  /**
   * <p>Lifecycle state of an EventSource. Revocation is reported by the Revoked flag.</p>
   * @public
   */
  State?: EventSourceState | undefined;

  /**
   * <p>True when the bus owner has withdrawn this EventSource. Present only when true, so a bus owner listing EventSources sees at a glance which ones they revoked. See DescribeEventSourceResponse$Revoked.</p>
   * @public
   */
  Revoked?: boolean | undefined;

  /**
   * <p>The time the EventSource was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time the EventSource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>AWS Account Id.</p>
   * @public
   */
  EventSourceAccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListEventSourcesResponse {
  /**
   * <p>List of EventSource summaries.</p>
   * @public
   */
  EventSources?: EventSourceSummary[] | undefined;

  /**
   * <p>Opaque pagination token returned by a List operation. Pass it back in the next request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourcePoliciesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Opaque pagination token returned by a List operation. Pass it back in the next request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return in one page of a List operation.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Summary of a policy attached to a resource: its name and revision ID.</p>
 * @public
 */
export interface ResourcePolicySummary {
  /**
   * <p>Name of a policy attached to a resource. Valid values: "default" (the customer-managed policy) and "AWS_RAM" (managed exclusively by AWS Resource Access Manager). Any other value is rejected.</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>Revision ID of a resource policy. A new revision ID is generated on every successful write.</p>
   * @public
   */
  RevisionId: string | undefined;
}

/**
 * <p>Summaries only (policy name and revision ID). Use GetResourcePolicy to retrieve a policy document.</p>
 * @public
 */
export interface ListResourcePoliciesResponse {
  /**
   * <p>List of resource policy summaries.</p>
   * @public
   */
  PolicySummaries?: ResourcePolicySummary[] | undefined;

  /**
   * <p>Opaque pagination token returned by a List operation. Pass it back in the next request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscribersRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * <p>Name of a subscriber. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'.</p>
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * <p>Opaque pagination token returned by a List operation. Pass it back in the next request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return in one page of a List operation.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Summary of a subscriber, as returned by ListSubscribers.</p>
 * @public
 */
export interface SubscriberSummary {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a subscriber.</p>
   * @public
   */
  SubscriberArn?: string | undefined;

  /**
   * <p>Name of a subscriber. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * <p>ARN of the target a subscriber invokes. The resource grammar is service-neutral because target services use different separators and the USI form omits region and account.</p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>Delivery ordering mode of a subscriber: FIFO delivers events in order within an event group; UNORDERED delivers without an ordering guarantee.</p>
   * @public
   */
  Type?: OrderingType | undefined;

  /**
   * <p>True when the bus owner has revoked this subscriber. Present only when true, so a bus owner listing subscribers sees at a glance which ones they revoked. See DescribeSubscriberResponse$Revoked.</p>
   * @public
   */
  Revoked?: boolean | undefined;

  /**
   * <p>Customer-controlled run state of a subscriber, set on create or update. Distinct from the bus lifecycle vocabulary, where ACTIVE means "provisioned and healthy". Delivery requires State RUNNING on a subscriber that is not revoked.</p>
   * @public
   */
  State?: SubscriberState | undefined;

  /**
   * <p>The time the subscriber was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time the subscriber was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>AWS Account Id.</p>
   * @public
   */
  SubscriberAccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListSubscribersResponse {
  /**
   * <p>List of subscriber summaries.</p>
   * @public
   */
  Subscribers?: SubscriberSummary[] | undefined;

  /**
   * <p>Opaque pagination token returned by a List operation. Pass it back in the next request to retrieve the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>ARN for an EventBridge resource that supports tagging: event buses, subscribers, and event sources.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Tags attached to a resource, as key-value pairs.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>System metadata for PutEvents entries. ContentType is not applicable (always application/eventbridge+json, set server-side).</p>
 * @public
 */
export interface PutEventsSystemMetadata {
  /**
   * <p>Event group ID for FIFO ordering.</p>
   * @public
   */
  EventGroupId?: string | undefined;

  /**
   * <p>Deduplication ID for FIFO deduplication.</p>
   * @public
   */
  DeduplicationId?: string | undefined;
}

/**
 * <p>A single event entry in a PutEvents request.</p>
 * @public
 */
export interface PutEventsRequestEntry {
  /**
   * <p>The source of the event. The <code>aws.</code> value prefix is service-reserved and cannot be used as a value.</p>
   * @public
   */
  Source: string | undefined;

  /**
   * <p>Free-form detail-type classifying an event within its source.</p>
   * @public
   */
  DetailType: string | undefined;

  /**
   * <p>The event payload, as a valid JSON string.</p>
   * @public
   */
  Detail?: string | undefined;

  /**
   * <p>ARNs of resources the event concerns. Included in the event delivered to subscribers.</p>
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * <p>The time the event occurred. Defaults to the time the service receives the event when omitted.</p>
   * @public
   */
  Time?: Date | undefined;

  /**
   * <p>System metadata for PutEvents entries. ContentType is not applicable (always application/eventbridge+json, set server-side).</p>
   * @public
   */
  SystemMetadata?: PutEventsSystemMetadata | undefined;
}

/**
 * @public
 */
export interface PutEventsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn: string | undefined;

  /**
   * <p>List of event entries to publish. Must contain at least one entry.</p>
   * @public
   */
  Entries: PutEventsRequestEntry[] | undefined;

  /**
   * <p>Request-level deduplication settings, applied to every entry in the batch.</p>
   * @public
   */
  DeduplicationConfiguration?: DeduplicationConfiguration | undefined;
}

/**
 * <p>Result entry for a published event. The position of each entry in the response list aligns 1:1 with the corresponding request entry.</p>
 * @public
 */
export interface PutEventsResultEntry {
  /**
   * <p>Unique event ID assigned by the service.</p>
   * @public
   */
  EventId?: string | undefined;

  /**
   * <p>Sequence number assigned to the message for ordering within the message group.</p>
   * @public
   */
  SequenceNumber?: string | undefined;

  /**
   * <p>Indicates the outcome for a successfully processed publish entry.</p>
   * @public
   */
  SuccessCode?: SuccessCode | undefined;

  /**
   * <p>Error code if the entry failed.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>Error message if the entry failed.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface PutEventsResponse {
  /**
   * <p>The number of entries in the batch that failed to be published.</p>
   * @public
   */
  FailedEntryCount?: number | undefined;

  /**
   * <p>List of per-entry publish results, in the same order as the request entries.</p>
   * @public
   */
  Entries?: PutEventsResultEntry[] | undefined;
}

/**
 * <p>System metadata for PutRawEvents entries. ContentType is required because PutRawEvents supports arbitrary binary formats.</p>
 * @public
 */
export interface PutRawEventsSystemMetadata {
  /**
   * <p>Content type of the event data. Valid values: <code>application/json</code>, <code>application/avro</code>, <code>application/protobuf</code>, <code>application/octet-stream</code>.</p>
   * @public
   */
  ContentType: string | undefined;

  /**
   * <p>Deduplication ID for FIFO deduplication.</p>
   * @public
   */
  DeduplicationId?: string | undefined;

  /**
   * <p>Event group ID for FIFO ordering.</p>
   * @public
   */
  EventGroupId?: string | undefined;
}

/**
 * <p>A single event entry in a raw publish request.</p>
 * @public
 */
export interface PutRawEventsRequestEntry {
  /**
   * <p>The event data as a base64-encoded blob. Supports binary formats.</p>
   * @public
   */
  Data: Uint8Array | undefined;

  /**
   * <p>Metadata key-value pairs you define. Keys must be 1-128 characters and must not contain "/".</p>
   * @public
   */
  Metadata?: Record<string, string> | undefined;

  /**
   * <p>Structured system metadata with defined properties.</p>
   * @public
   */
  SystemMetadata: PutRawEventsSystemMetadata | undefined;
}

/**
 * <p>Authentication configuration for public Confluent Schema Registry via EventBridge Connection.</p>
 * @public
 */
export interface ConfluentPublicRegistryConfiguration {
  /**
   * <p>EventBridge Connection ARN that provides API Key or OAuth credentials for the registry.</p>
   * @public
   */
  ConnectionArn: string | undefined;
}

/**
 * <p>Schema registry settings used to encode open-format (Avro/Protobuf) events.</p>
 * @public
 */
export interface SchemaRegistryConfiguration {
  /**
   * <p>Glue Schema Registry ARN, or Confluent Cloud HTTPS URL.</p>
   * @public
   */
  RegistryUri: string | undefined;

  /**
   * <p>Required when RegistryUri is an HTTPS URL. Provides Connection-based auth for Confluent Cloud.</p>
   * @public
   */
  ConfluentPublicRegistryConfiguration?: ConfluentPublicRegistryConfiguration | undefined;
}

/**
 * @public
 */
export interface PutRawEventsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn: string | undefined;

  /**
   * <p>List of event entries to publish. Must contain at least one entry.</p>
   * @public
   */
  Entries: PutRawEventsRequestEntry[] | undefined;

  /**
   * <p>Schema-registry settings for encoding open-format (Avro/Protobuf) events. Required for open-format entries; ignored for JSON entries. The registry is read with the caller's credentials, so the caller needs read access to the registry it references.</p>
   * @public
   */
  SchemaRegistryConfiguration?: SchemaRegistryConfiguration | undefined;

  /**
   * <p>Request-level deduplication settings, applied to every entry in the batch.</p>
   * @public
   */
  DeduplicationConfiguration?: DeduplicationConfiguration | undefined;
}

/**
 * <p>Result entry for a published event. The position of each entry in the response list aligns 1:1 with the corresponding request entry, enabling co-location by index.</p>
 * @public
 */
export interface PutRawEventsResultEntry {
  /**
   * <p>Unique event ID assigned by the service. Present on successful entries.</p>
   * @public
   */
  EventId?: string | undefined;

  /**
   * <p>Sequence number for ordering within the event group.</p>
   * @public
   */
  SequenceNumber?: string | undefined;

  /**
   * <p>Indicates how the entry was processed. Present only on successful entries.</p>
   * @public
   */
  SuccessCode?: SuccessCode | undefined;

  /**
   * <p>Error code if the entry failed.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>Error message if the entry failed.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface PutRawEventsResponse {
  /**
   * <p>The number of entries in the batch that failed to be published.</p>
   * @public
   */
  FailedEntryCount?: number | undefined;

  /**
   * <p>List of per-entry publish results, in the same order as the request entries.</p>
   * @public
   */
  Entries?: PutRawEventsResultEntry[] | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A resource policy document, as a JSON string. The maximum size is 389,120 bytes of UTF-8; the byte limit is enforced by the service.</p>
   * @public
   */
  PolicyDocument: string | undefined;

  /**
   * <p>Which named policy to write. Defaults to "default", the customer-managed policy, when omitted (a write AWS Resource Access Manager makes on the owner's behalf resolves to "AWS_RAM" instead). The two writers are exclusive in both directions — only Resource Access Manager can write "AWS_RAM", and only the bus owner can write "default" — so naming the other party's policy fails with AccessDeniedException. A well-formed name that is neither of the two fails with InvalidInputException.</p>
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * <p>The write succeeds only if the named policy's current revision ID matches this value; a policy that does not exist yet matches only the sentinel "NO_POLICY" (create-only). On mismatch the operation fails with ConflictException. When omitted, the write is unconditional. Every attempt stores a newly generated revision ID, so retrying an unanswered request can conflict with the caller's own earlier attempt; read the policy back and compare it with the one you intended before treating a conflict as another writer's change.</p>
   * @public
   */
  ExpectedRevisionId?: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Name of a policy attached to a resource. Valid values: "default" (the customer-managed policy) and "AWS_RAM" (managed exclusively by AWS Resource Access Manager). Any other value is rejected.</p>
   * @public
   */
  PolicyName: string | undefined;

  /**
   * <p>Absent when the write removed the policy; a removal produces no new revision.</p>
   * @public
   */
  RevisionId?: string | undefined;
}

/**
 * @public
 */
export interface RevokeResourceRequest {
  /**
   * <p>ARN of a resource a bus owner can revoke: a subscriber or an EventSource. The pattern is the revocable subset of TaggableResourceArn; buses are not revocable.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface RevokeResourceResponse {
  /**
   * <p>ARN of a resource a bus owner can revoke: a subscriber or an EventSource. The pattern is the revocable subset of TaggableResourceArn; buses are not revocable.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>A new webhook credential. Exactly one variant must be set.</p>
 * @public
 */
export type WebhookCredential =
  | WebhookCredential.BasicHttpPasswordMember
  | WebhookCredential.HmacSecretValueMember
  | WebhookCredential.StaticTokenSecretValueMember
  | WebhookCredential.$UnknownMember;

/**
 * @public
 */
export namespace WebhookCredential {
  /**
   * <p>The new token for static token authentication.</p>
   * @public
   */
  export interface StaticTokenSecretValueMember {
    StaticTokenSecretValue: string;
    BasicHttpPassword?: never;
    HmacSecretValue?: never;
    $unknown?: never;
  }

  /**
   * <p>The new password for HTTP Basic authentication. The username does not change.</p>
   * @public
   */
  export interface BasicHttpPasswordMember {
    StaticTokenSecretValue?: never;
    BasicHttpPassword: string;
    HmacSecretValue?: never;
    $unknown?: never;
  }

  /**
   * <p>The new HMAC secret, in the SecretEncoding of the EventSource. With BASE64, EventBridge removes a leading "whsec_". The key must be 16 to 512 bytes; with BASE64 SecretEncoding, this is measured after decoding.</p>
   * @public
   */
  export interface HmacSecretValueMember {
    StaticTokenSecretValue?: never;
    BasicHttpPassword?: never;
    HmacSecretValue: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    StaticTokenSecretValue?: never;
    BasicHttpPassword?: never;
    HmacSecretValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    StaticTokenSecretValue: (value: string) => T;
    BasicHttpPassword: (value: string) => T;
    HmacSecretValue: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface RotateWebhookCredentialsRequest {
  /**
   * <p>The ARN of the webhook EventSource.</p>
   * @public
   */
  EventSourceArn: string | undefined;

  /**
   * <p>The new credential. Set the member that matches the authentication type of the EventSource. If you set a member that does not match the authentication type, EventBridge returns InvalidInputException. If you omit Credential, EventBridge generates a value.</p>
   * @public
   */
  Credential?: WebhookCredential | undefined;

  /**
   * <p>Unique, case-sensitive identifier that ensures the idempotency of the request. The SDK generates one automatically when the field is omitted.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface RotateWebhookCredentialsResponse {
  /**
   * <p>The ARN of the AWS Secrets Manager secret that holds the credential. It doesn't change when the credential is rotated.</p>
   * @public
   */
  SecretArn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>ARN for an EventBridge resource that supports tagging: event buses, subscribers, and event sources.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags attached to a resource, as key-value pairs.</p>
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
   * <p>ARN for an EventBridge resource that supports tagging: event buses, subscribers, and event sources.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>List of tag keys.</p>
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
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn: string | undefined;

  /**
   * <p>Free-text description. Used by every resource type that has one: event buses, subscribers, and event sources.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Encryption configuration for an event bus.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>Event storage configuration for an event bus.</p>
   * @public
   */
  StorageConfiguration?: StorageConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateEventBusResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * <p>Name of an event bus. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'. The grammar matches the name segment of EventBusArn (event-busv2/&lt;name&gt;/&lt;id&gt;), so every valid name can be represented in the bus's ARN. The same type is used everywhere a bus name appears.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>Free-text description. Used by every resource type that has one: event buses, subscribers, and event sources.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Encryption configuration for an event bus.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>Event storage configuration of an event bus, as returned on reads.</p>
   * @public
   */
  StorageConfiguration?: StorageConfigurationOutput | undefined;

  /**
   * <p>Lifecycle state of an event bus.</p> <ul> <li> <p>CREATING: Bus creation is in progress.</p> </li> <li> <p>CREATE_FAILED: Bus creation failed; see StateReason. The bus cannot be recovered or recreated in place: delete it with DeleteEventBus, then create a new bus.</p> </li> <li> <p>ACTIVE: Bus is fully operational and can accept events.</p> </li> <li> <p>UPDATING: Bus update is in progress.</p> </li> <li> <p>UPDATE_FAILED: Bus update failed; the bus remains operational with its previous configuration.</p> </li> <li> <p>DELETING: Bus deletion is actively in progress.</p> </li> <li> <p>DELETE_FAILED: Bus deletion failed; see StateReason. Retry DeleteEventBus after removing subscribers and event sources.</p> </li> </ul>
   * @public
   */
  State?: BusState | undefined;

  /**
   * <p>Human-readable explanation of why an event bus is in its current State. Omitted when the bus is in a normal operational state (ACTIVE). It stands in for the error response an asynchronous failure cannot return, so it applies only to resources with an asynchronous lifecycle: event buses. EventSources and subscribers are provisioned synchronously and report failures directly on the request.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The time the event bus was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateEventSourceRequest {
  /**
   * <p>EventSource ARN: event-sourcev2/&lt;type&gt;/&lt;name&gt;/&lt;id&gt;. The type segment is set by the service (aws.service for AWS service events, aws.partner for partner events, webhook for webhook events) and is not part of the resource's name. The id segment is a 25-character identifier generated by the service.</p>
   * @public
   */
  EventSourceArn: string | undefined;

  /**
   * <p>Discriminated EventSource configuration. Exactly one variant must be set.</p>
   * @public
   */
  Configuration?: EventSourceConfiguration | undefined;

  /**
   * <p>Free-text description. Used by every resource type that has one: event buses, subscribers, and event sources.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEventSourceResponse {
  /**
   * <p>EventSource ARN: event-sourcev2/&lt;type&gt;/&lt;name&gt;/&lt;id&gt;. The type segment is set by the service (aws.service for AWS service events, aws.partner for partner events, webhook for webhook events) and is not part of the resource's name. The id segment is a 25-character identifier generated by the service.</p>
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * <p>EventSource name. First character alphanumeric; the rest may add '.', '-', '_'. Names may not begin with the reserved "aws." prefix. The grammar matches the ARN local-name segment in EventSourceArn (event-sourcev2/&lt;type&gt;/&lt;name&gt;/&lt;id&gt;), mirroring EventBusName, so a name the ARN cannot represent cannot be created.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * <p>Lifecycle state of an EventSource. Revocation is reported by the Revoked flag.</p>
   * @public
   */
  State?: EventSourceState | undefined;

  /**
   * <p>The time the EventSource was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * <p>Update-able configuration for how the subscriber invokes its target.</p>
 * @public
 */
export interface UpdateInvokeConfiguration {
  /**
   * <p>IAM role the service assumes to invoke the target. Must belong to the calling account.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>Lambda invocation parameters for subscribers. Values are forwarded to the Lambda Invoke API. Every string member accepts a literal or a JSONata expression (e.g. "\{% $events.Data.qualifier %\}").</p>
   * @public
   */
  LambdaParameters?: LambdaParameters | undefined;

  /**
   * <p>SQS invocation parameters for subscribers. Values are forwarded to the SQS SendMessageBatch API. All scalar values accept a literal or a JSONata expression (e.g. "\{% $events.Data.groupId %\}").</p>
   * @public
   */
  SqsParameters?: SqsParameters | undefined;

  /**
   * <p>SNS invocation parameters for subscribers. Values are forwarded to the SNS PublishBatch API. All scalar values accept a literal or a JSONata expression (e.g. "\{% $events.Data.groupId %\}").</p>
   * @public
   */
  SnsParameters?: SnsParameters | undefined;

  /**
   * <p>Kinesis Data Streams invocation parameters for subscribers. Values are forwarded to the Kinesis PutRecords API. All scalar values accept a literal or a JSONata expression (e.g. "\{% $events.Data.partitionKey %\}").</p>
   * @public
   */
  KinesisParameters?: KinesisParameters | undefined;

  /**
   * <p>Step Functions invocation parameters for subscribers. Values are forwarded to the Step Functions StartExecution or StartSyncExecution API. Every string member accepts a literal or a JSONata expression (e.g. "\{% $events.Data.executionName %\}").</p>
   * @public
   */
  StepFunctionsParameters?: StepFunctionsParameters | undefined;

  /**
   * <p>HTTP invocation parameters for subscribers (API Gateway / API Destination). Values are forwarded to the HTTP endpoint.</p>
   * @public
   */
  HttpParameters?: HttpParameters | undefined;

  /**
   * <p>Parameters for USI (Universal Service Integration) targets. Used when TargetArn is in the format arn:aws:events:::aws-sdk:\{service\}:\{apiAction\}</p>
   * @public
   */
  UniversalTargetParameters?: UniversalTargetParameters | undefined;

  /**
   * <p>Parameters for forwarding events to another EventBridge event bus.</p>
   * @public
   */
  EventBusV2Parameters?: EventBusV2Parameters | undefined;

  /**
   * <p>MSK (Apache Kafka) invocation parameters for subscribers targeting an Amazon MSK cluster.</p>
   * @public
   */
  MskParameters?: MskParameters | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriberRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a subscriber.</p>
   * @public
   */
  SubscriberArn: string | undefined;

  /**
   * <p>Free-text description. Used by every resource type that has one: event buses, subscribers, and event sources.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Customer-controlled run state of a subscriber, set on create or update. Distinct from the bus lifecycle vocabulary, where ACTIVE means "provisioned and healthy". Delivery requires State RUNNING on a subscriber that is not revoked.</p>
   * @public
   */
  State?: SubscriberState | undefined;

  /**
   * <p>Position from which delivery resumes when a subscriber is unpaused. Honored only on an UpdateSubscriber call that transitions State from STOPPED to RUNNING (unpause); ignored on any other call and not accepted on Create. Defaults to LAST_PROCESSED when omitted.</p>
   * @public
   */
  ResumePosition?: ResumePosition | undefined;

  /**
   * <p>Update-able configuration for how the subscriber invokes its target.</p>
   * @public
   */
  InvokeConfiguration?: UpdateInvokeConfiguration | undefined;

  /**
   * <p>Configuration for filtering events delivered to a subscriber. On CreateSubscriber, Filters is required and must contain at least one Filter with a non-empty Pattern. On UpdateSubscriber, an empty <code>FilterConfiguration:\{\}</code> clears the existing filter. Any non-empty shape (including <code>\{Language:X\}</code> without Filters) must contain a valid Filters list — same contract as CreateSubscriber. A non-empty Filters list overwrites; an omitted FilterConfiguration preserves existing state. All Filters are implicitly ANDed — an event must match every Filter to be delivered.</p>
   * @public
   */
  FilterConfiguration?: FilterConfiguration | undefined;

  /**
   * <p>Batching configuration for a subscriber.</p>
   * @public
   */
  BatchConfiguration?: BatchConfiguration | undefined;

  /**
   * <p>Transformer configuration for a subscriber.</p>
   * @public
   */
  Transformer?: Transformer | undefined;

  /**
   * <p>Retry policy for a subscriber.</p>
   * @public
   */
  RetryPolicy?: RetryPolicy | undefined;

  /**
   * <p>On-failure configuration: where a failed delivery is sent. Shared by the subscriber and the EventSource.</p>
   * @public
   */
  OnFailureConfiguration?: OnFailureConfiguration | undefined;

  /**
   * <p>Log configuration for a subscriber.</p>
   * @public
   */
  LogConfiguration?: LogConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriberResponse {
  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies a subscriber.</p>
   * @public
   */
  SubscriberArn?: string | undefined;

  /**
   * <p>Name of a subscriber. The first character must be alphanumeric; the remaining characters may also include '.', '-', and '_'.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) that uniquely identifies an event bus.</p>
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * <p>Delivery ordering mode of a subscriber: FIFO delivers events in order within an event group; UNORDERED delivers without an ordering guarantee.</p>
   * @public
   */
  Type?: OrderingType | undefined;

  /**
   * <p>Starting position for a subscriber.</p>
   * @public
   */
  StartingPosition?: StartingPosition | undefined;

  /**
   * <p>Point-in-time configuration for a subscriber. Only applicable when StartingPosition is POINT_IN_TIME.</p>
   * @public
   */
  PointInTimeConfiguration?: PointInTimeConfiguration | undefined;

  /**
   * <p>Customer-controlled run state of a subscriber, set on create or update. Distinct from the bus lifecycle vocabulary, where ACTIVE means "provisioned and healthy". Delivery requires State RUNNING on a subscriber that is not revoked.</p>
   * @public
   */
  State?: SubscriberState | undefined;

  /**
   * <p>The time the subscriber was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>Values EventBridge manages for a subscriber that depend on its target type. Only the member for the subscriber's target type is set. Returned in responses only; the customer never supplies these values.</p>
   * @public
   */
  SubscriberDetails?: SubscriberDetails | undefined;
}
