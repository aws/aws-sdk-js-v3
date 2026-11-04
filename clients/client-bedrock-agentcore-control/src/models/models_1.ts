// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  ActorTokenContentType,
  ApiKeyCredentialLocation,
  ClientAuthenticationMethodType,
  ClusteringFrequency,
  ContentLevel,
  ContentType,
  CredentialProviderType,
  CredentialProviderVendorType,
  ExtractionType,
  FilterOperator,
  GatewayRuleStatus,
  HarnessBedrockApiFormat,
  HarnessEndpointStatus,
  HarnessHookFailureMode,
  HarnessManagedMemoryStrategyType,
  HarnessOpenAiApiFormat,
  HarnessStatus,
  HarnessToolType,
  HarnessTruncationStrategy,
  KeyType,
  ListingMode,
  MemoryStatus,
  MemoryStrategyStatus,
  MemoryStrategyType,
  MemoryView,
  MetadataValueType,
  OAuthGrantType,
  OnBehalfOfClientAuthenticationMethod,
  OnBehalfOfTokenExchangeGrantTypeType,
  OnlineEvaluationConfigStatus,
  OnlineEvaluationExecutionStatus,
  OverrideType,
  PassthroughProtocolType,
  PaymentCredentialProviderVendorType,
  PaymentsAuthorizerType,
  RecordExpiryAction,
  RestApiMethod,
  ResultDestination,
  SecretSourceType,
  SigningAlgorithm,
  StaticQueryParameterConflictResolution,
  Status,
  TargetStatus,
  TargetType,
} from "./enums";
import type {
  Action,
  AuthorizerConfiguration,
  Condition,
  ContainerConfiguration,
  FilesystemConfiguration,
  LifecycleConfiguration,
  NetworkConfiguration,
  PrivateEndpoint,
  PrivateEndpointOverride,
  Secret,
  SecretReference,
  SystemManagedBlock,
  Unit,
} from "./models_0";

/**
 * @public
 */
export interface GetGatewayRuleRequest {
  /**
   * The identifier of the gateway containing the rule.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * The unique identifier of the rule to retrieve.
   *
   * @public
   */
  ruleId: string | undefined;
}

/**
 * Create response excludes updatedAt (redundant on create).
 * Get/Update responses include it via their own output structures.
 * @public
 */
export interface GetGatewayRuleResponse {
  /**
   * The unique identifier of the gateway rule.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway that the rule belongs to.
   *
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * The priority of the rule. Rules are evaluated in order of priority, with lower numbers evaluated first.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The conditions that must be met for the rule to apply.
   *
   * @public
   */
  conditions?: Condition[] | undefined;

  /**
   * The actions to take when the rule conditions are met.
   *
   * @public
   */
  actions: Action[] | undefined;

  /**
   * The description of the gateway rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp when the rule was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The current status of the rule.
   *
   * @public
   */
  status: GatewayRuleStatus | undefined;

  /**
   * System-managed metadata for rules created by automated processes.
   *
   * @public
   */
  system?: SystemManagedBlock | undefined;

  /**
   * The timestamp when the rule was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListGatewayRulesRequest {
  /**
   * The identifier of the gateway to list rules for.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The pagination token from a previous request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Detailed information about a gateway rule.
 *
 * @public
 */
export interface GatewayRuleDetail {
  /**
   * The unique identifier of the gateway rule.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway that the rule belongs to.
   *
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * The priority of the rule. Rules are evaluated in order of priority, with lower numbers evaluated first.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The conditions that must be met for the rule to apply.
   *
   * @public
   */
  conditions?: Condition[] | undefined;

  /**
   * The actions to take when the rule conditions are met.
   *
   * @public
   */
  actions: Action[] | undefined;

  /**
   * The description of the gateway rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp when the rule was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The current status of the rule.
   *
   * @public
   */
  status: GatewayRuleStatus | undefined;

  /**
   * System-managed metadata for rules created by automated processes.
   *
   * @public
   */
  system?: SystemManagedBlock | undefined;

  /**
   * The timestamp when the rule was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListGatewayRulesResponse {
  /**
   * The list of gateway rules.
   *
   * @public
   */
  gatewayRules: GatewayRuleDetail[] | undefined;

  /**
   * The pagination token to use in a subsequent request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayRuleRequest {
  /**
   * The identifier of the gateway containing the rule.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * The unique identifier of the rule to update.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The updated priority of the rule.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * The updated conditions for the rule.
   *
   * @public
   */
  conditions?: Condition[] | undefined;

  /**
   * The updated actions for the rule.
   *
   * @public
   */
  actions?: Action[] | undefined;

  /**
   * The updated description of the rule.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Create response excludes updatedAt (redundant on create).
 * Get/Update responses include it via their own output structures.
 * @public
 */
export interface UpdateGatewayRuleResponse {
  /**
   * The unique identifier of the gateway rule.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the gateway that the rule belongs to.
   *
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * The priority of the rule. Rules are evaluated in order of priority, with lower numbers evaluated first.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The conditions that must be met for the rule to apply.
   *
   * @public
   */
  conditions?: Condition[] | undefined;

  /**
   * The actions to take when the rule conditions are met.
   *
   * @public
   */
  actions: Action[] | undefined;

  /**
   * The description of the gateway rule.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp when the rule was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The current status of the rule.
   *
   * @public
   */
  status: GatewayRuleStatus | undefined;

  /**
   * System-managed metadata for rules created by automated processes.
   *
   * @public
   */
  system?: SystemManagedBlock | undefined;

  /**
   * The timestamp when the rule was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * A reference to a PEM-encoded private CA certificate stored as an Amazon S3 object.
 *
 * @public
 */
export interface S3CertificateConfiguration {
  /**
   * The URI of the Amazon S3 object that contains the PEM-encoded certificate.
   *
   * @public
   */
  uri: string | undefined;

  /**
   * The account ID of the Amazon S3 bucket owner. This ID is used for cross-account access to the bucket.
   *
   * @public
   */
  bucketOwnerAccountId?: string | undefined;
}

/**
 * A reference to a PEM-encoded private CA certificate stored in an Amazon Web Services Secrets Manager secret.
 *
 * @public
 */
export interface SecretsManagerCertificateConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services Secrets Manager secret that contains the PEM-encoded certificate.
   *
   * @public
   */
  secretArn: string | undefined;
}

/**
 * A reference to a private certificate authority (CA) certificate that the gateway uses to verify TLS connections to the target endpoint. Use this when the target presents a certificate issued by a private CA that is not trusted by default. Specify exactly one certificate source. The configuration is a reference only and never contains the certificate content.
 *
 * @public
 */
export type CertificateConfiguration =
  | CertificateConfiguration.S3Member
  | CertificateConfiguration.SecretsManagerMember
  | CertificateConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace CertificateConfiguration {
  /**
   * The Amazon S3 location of the PEM-encoded private CA certificate.
   *
   * @public
   */
  export interface S3Member {
    s3: S3CertificateConfiguration;
    secretsManager?: never;
    $unknown?: never;
  }

  /**
   * The Amazon Web Services Secrets Manager location of the PEM-encoded private CA certificate.
   *
   * @public
   */
  export interface SecretsManagerMember {
    s3?: never;
    secretsManager: SecretsManagerCertificateConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    secretsManager?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: S3CertificateConfiguration) => T;
    secretsManager: (value: SecretsManagerCertificateConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An API key credential provider for gateway authentication. This structure contains the configuration for authenticating with the target endpoint using an API key.
 *
 * @public
 */
export interface GatewayApiKeyCredentialProvider {
  /**
   * The Amazon Resource Name (ARN) of the API key credential provider. This ARN identifies the provider in Amazon Web Services.
   *
   * @public
   */
  providerArn: string | undefined;

  /**
   * The name of the credential parameter for the API key. This parameter name is used when sending the API key to the target endpoint.
   *
   * @public
   */
  credentialParameterName?: string | undefined;

  /**
   * The prefix for the API key credential. This prefix is added to the API key when sending it to the target endpoint.
   *
   * @public
   */
  credentialPrefix?: string | undefined;

  /**
   * The location of the API key credential. This field specifies where in the request the API key should be placed.
   *
   * @public
   */
  credentialLocation?: ApiKeyCredentialLocation | undefined;
}

/**
 * An IAM credential provider for gateway authentication. This structure contains the configuration for authenticating with the target endpoint using IAM credentials and SigV4 signing.
 *
 * @public
 */
export interface IamCredentialProvider {
  /**
   * The target Amazon Web Services service name used for SigV4 signing. This value identifies the service that the gateway authenticates with when making requests to the target endpoint.
   *
   * @public
   */
  service: string | undefined;

  /**
   * The Amazon Web Services Region used for SigV4 signing. If not specified, defaults to the gateway's Region.
   *
   * @public
   */
  region?: string | undefined;
}

/**
 * An OAuth credential provider for gateway authentication. This structure contains the configuration for authenticating with the target endpoint using OAuth.
 *
 * @public
 */
export interface OAuthCredentialProvider {
  /**
   * The Amazon Resource Name (ARN) of the OAuth credential provider. This ARN identifies the provider in Amazon Web Services.
   *
   * @public
   */
  providerArn: string | undefined;

  /**
   * The OAuth scopes for the credential provider. These scopes define the level of access requested from the OAuth provider.
   *
   * @public
   */
  scopes: string[] | undefined;

  /**
   * The custom parameters for the OAuth credential provider. These parameters provide additional configuration for the OAuth authentication process.
   *
   * @public
   */
  customParameters?: Record<string, string> | undefined;

  /**
   * Specifies the kind of credentials to use for authorization:
   *
   * - `CLIENT_CREDENTIALS` - Authorization with a client ID and secret.
   * - `AUTHORIZATION_CODE` - Authorization with a token that is specific to an individual end user.
   * - `TOKEN_EXCHANGE` - Authorization using on-behalf-of token exchange. An inbound user token is exchanged for a downstream access token scoped to the target audience.
   *
   * @public
   */
  grantType?: OAuthGrantType | undefined;

  /**
   * The URL where the end user's browser is redirected after obtaining the authorization code. Generally points to the customer's application.
   *
   * @public
   */
  defaultReturnUrl?: string | undefined;
}

/**
 * A credential provider for gateway authentication. This structure contains the configuration for authenticating with the target endpoint.
 *
 * @public
 */
export type CredentialProvider =
  | CredentialProvider.ApiKeyCredentialProviderMember
  | CredentialProvider.IamCredentialProviderMember
  | CredentialProvider.OauthCredentialProviderMember
  | CredentialProvider.$UnknownMember;

/**
 * @public
 */
export namespace CredentialProvider {
  /**
   * The OAuth credential provider. This provider uses OAuth authentication to access the target endpoint.
   *
   * @public
   */
  export interface OauthCredentialProviderMember {
    oauthCredentialProvider: OAuthCredentialProvider;
    apiKeyCredentialProvider?: never;
    iamCredentialProvider?: never;
    $unknown?: never;
  }

  /**
   * The API key credential provider. This provider uses an API key to authenticate with the target endpoint.
   *
   * @public
   */
  export interface ApiKeyCredentialProviderMember {
    oauthCredentialProvider?: never;
    apiKeyCredentialProvider: GatewayApiKeyCredentialProvider;
    iamCredentialProvider?: never;
    $unknown?: never;
  }

  /**
   * The IAM credential provider. This provider uses IAM authentication with SigV4 signing to access the target endpoint.
   *
   * @public
   */
  export interface IamCredentialProviderMember {
    oauthCredentialProvider?: never;
    apiKeyCredentialProvider?: never;
    iamCredentialProvider: IamCredentialProvider;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    oauthCredentialProvider?: never;
    apiKeyCredentialProvider?: never;
    iamCredentialProvider?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    oauthCredentialProvider: (value: OAuthCredentialProvider) => T;
    apiKeyCredentialProvider: (value: GatewayApiKeyCredentialProvider) => T;
    iamCredentialProvider: (value: IamCredentialProvider) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration for a credential provider. This structure defines how the gateway authenticates with the target endpoint.
 *
 * @public
 */
export interface CredentialProviderConfiguration {
  /**
   * The type of credential provider. This field specifies which authentication method the gateway uses.
   *
   * @public
   */
  credentialProviderType: CredentialProviderType | undefined;

  /**
   * The credential provider. This field contains the specific configuration for the credential provider type.
   *
   * @public
   */
  credentialProvider?: CredentialProvider | undefined;
}

/**
 * Configuration for HTTP header and query parameter propagation between the gateway and target servers.
 *
 * @public
 */
export interface MetadataConfiguration {
  /**
   * A list of HTTP headers that are allowed to be propagated from incoming client requests to the target.
   *
   * @public
   */
  allowedRequestHeaders?: string[] | undefined;

  /**
   * A list of URL query parameters that are allowed to be propagated from incoming gateway URL to the target.
   *
   * @public
   */
  allowedQueryParameters?: string[] | undefined;

  /**
   * A list of HTTP headers that are allowed to be propagated from the target response back to the client.
   *
   * @public
   */
  allowedResponseHeaders?: string[] | undefined;
}

/**
 * The Amazon S3 configuration for a gateway. This structure defines how the gateway accesses files in Amazon S3.
 *
 * @public
 */
export interface S3Configuration {
  /**
   * The URI of the Amazon S3 object. This URI specifies the location of the object in Amazon S3.
   *
   * @public
   */
  uri?: string | undefined;

  /**
   * The account ID of the Amazon S3 bucket owner. This ID is used for cross-account access to the bucket.
   *
   * @public
   */
  bucketOwnerAccountId?: string | undefined;
}

/**
 * Configuration for API schema.
 *
 * @public
 */
export type ApiSchemaConfiguration =
  | ApiSchemaConfiguration.InlinePayloadMember
  | ApiSchemaConfiguration.S3Member
  | ApiSchemaConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ApiSchemaConfiguration {
  /**
   * The Amazon S3 configuration for a gateway. This structure defines how the gateway accesses files in Amazon S3.
   *
   * @public
   */
  export interface S3Member {
    s3: S3Configuration;
    inlinePayload?: never;
    $unknown?: never;
  }

  /**
   * The inline payload containing the API schema definition.
   *
   * @public
   */
  export interface InlinePayloadMember {
    s3?: never;
    inlinePayload: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    inlinePayload?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: S3Configuration) => T;
    inlinePayload: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The API schema configuration for an HTTP target. This schema defines the API structure that the target exposes.
 *
 * @public
 */
export interface HttpApiSchemaConfiguration {
  /**
   * Configuration for API schema.
   *
   * @public
   */
  source: ApiSchemaConfiguration | undefined;
}

/**
 * Configuration for an AgentCore Runtime target. Specifies the agent runtime to route requests to via HTTP.
 *
 * @public
 */
export interface RuntimeTargetConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the AgentCore Runtime to route requests to.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The qualifier for the agent runtime, used to target a specific endpoint version. If not specified, the default endpoint is used.
   *
   * @public
   */
  qualifier?: string | undefined;

  /**
   * The API schema configuration that defines the structure of the runtime target's API.
   *
   * @public
   */
  schema?: HttpApiSchemaConfiguration | undefined;
}

/**
 * The source identifying the HTTP connector integration.
 *
 * @public
 */
export interface HttpConnectorSource {
  /**
   * The identifier for the HTTP connector integration.
   *
   * @public
   */
  connectorId: string | undefined;
}

/**
 * The configuration for an HTTP connector target. Use this configuration when you want to route HTTP requests through a managed connector.
 *
 * @public
 */
export interface HttpConnectorTargetConfiguration {
  /**
   * The source configuration identifying which HTTP connector to use.
   *
   * @public
   */
  source: HttpConnectorSource | undefined;

  /**
   * The resource parameters for this connector (for example, `memoryId`). The service validates these parameters against the request path at runtime.
   *
   * @public
   */
  parameters?: Record<string, string> | undefined;
}

/**
 * The configuration for session-sticky routing to a target. Session stickiness routes requests that share a session identifier to the same target.
 *
 * @public
 */
export interface StickinessConfiguration {
  /**
   * The expression that identifies where to extract the session identifier from the request (for example, `$context.header.x-session-id`).
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The session stickiness timeout, in seconds. After this duration of inactivity, the session affinity expires. Valid values range from 1 to 86400.
   *
   * @public
   */
  timeout?: number | undefined;

  /**
   * Additional headers to include in session affinity routing. When set, requests are only considered part of the same session if both the `identifier` and all composite identifier values match.
   *
   * @public
   */
  compositeIdentifier?: string[] | undefined;
}

/**
 * The configuration for an HTTP passthrough target. A passthrough target forwards requests directly to an external HTTP endpoint.
 *
 * @public
 */
export interface PassthroughTargetConfiguration {
  /**
   * The HTTPS endpoint that the gateway forwards requests to for this passthrough target.
   *
   * @public
   */
  endpoint: string | undefined;

  /**
   * The application protocol that the passthrough target implements. This value is required for passthrough targets:
   *
   * - `MCP` - The Model Context Protocol.
   * - `A2A` - The Agent-to-Agent protocol.
   * - `INFERENCE` - The protocol for routing requests to a large language model (LLM) provider.
   * - `CUSTOM` - A custom application protocol.
   *
   * @public
   */
  protocolType: PassthroughProtocolType | undefined;

  /**
   * The API schema configuration that defines the structure of the passthrough target's API.
   *
   * @public
   */
  schema?: HttpApiSchemaConfiguration | undefined;

  /**
   * The session stickiness configuration for the passthrough target. This configuration routes requests within the same session to the same target.
   *
   * @public
   */
  stickinessConfiguration?: StickinessConfiguration | undefined;

  /**
   * A map of static query parameters that the gateway always appends to the outbound URL when forwarding requests to the target. The total outbound URL length, which includes the endpoint and the percent-encoded query parameters, is enforced by the service.
   *
   * @public
   */
  staticQueryParameters?: Record<string, string> | undefined;

  /**
   * Controls precedence when a client request supplies a query parameter whose name matches a configured static query parameter. If not set, defaults to `CLIENT_OVERRIDE`:
   *
   * - `CLIENT_OVERRIDE` - The client-supplied value overrides the configured static value for that parameter name.
   * - `STATIC_OVERRIDE` - The configured static value is retained, overriding the client-supplied value for that parameter name.
   *
   * @public
   */
  staticQueryParameterConflictResolution?: StaticQueryParameterConflictResolution | undefined;
}

/**
 * The HTTP target configuration for a gateway target. Contains the configuration for HTTP-based target endpoints.
 *
 * @public
 */
export type HttpTargetConfiguration =
  | HttpTargetConfiguration.AgentcoreRuntimeMember
  | HttpTargetConfiguration.ConnectorMember
  | HttpTargetConfiguration.PassthroughMember
  | HttpTargetConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace HttpTargetConfiguration {
  /**
   * The AgentCore Runtime target configuration for HTTP-based communication with an agent runtime.
   *
   * @public
   */
  export interface AgentcoreRuntimeMember {
    agentcoreRuntime: RuntimeTargetConfiguration;
    passthrough?: never;
    connector?: never;
    $unknown?: never;
  }

  /**
   * The passthrough configuration for the HTTP target. A passthrough target forwards requests directly to an external HTTP endpoint.
   *
   * @public
   */
  export interface PassthroughMember {
    agentcoreRuntime?: never;
    passthrough: PassthroughTargetConfiguration;
    connector?: never;
    $unknown?: never;
  }

  /**
   * The connector-based configuration for the HTTP target. Use this configuration when you want to route HTTP requests through a managed connector.
   *
   * @public
   */
  export interface ConnectorMember {
    agentcoreRuntime?: never;
    passthrough?: never;
    connector: HttpConnectorTargetConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    agentcoreRuntime?: never;
    passthrough?: never;
    connector?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    agentcoreRuntime: (value: RuntimeTargetConfiguration) => T;
    passthrough: (value: PassthroughTargetConfiguration) => T;
    connector: (value: HttpConnectorTargetConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The source identifying the inference connector.
 *
 * @public
 */
export interface InferenceConnectorSource {
  /**
   * The identifier for the inference connector (for example, `bedrock-mantle`, `openai`, or `anthropic`).
   *
   * @public
   */
  connectorId: string | undefined;
}

/**
 * The configuration for a connector-based inference target. This configuration uses a built-in connector that provides predefined rules for a large language model (LLM) provider.
 *
 * @public
 */
export interface InferenceConnectorTargetConfiguration {
  /**
   * The source configuration identifying which inference connector to use.
   *
   * @public
   */
  source: InferenceConnectorSource | undefined;
}

/**
 * The configuration that controls how a provider prefix is applied to model IDs during translation.
 *
 * @public
 */
export interface ProviderPrefix {
  /**
   * Whether clients can omit the provider prefix from model IDs. If `true`, the gateway accepts model IDs without the prefix and restores the full prefixed form before forwarding to the provider. The default is `false`.
   *
   * @public
   */
  strip?: boolean | undefined;

  /**
   * The single character that separates the provider prefix from the model name (for example, `.`). The default is `.`.
   *
   * @public
   */
  separator?: string | undefined;
}

/**
 * The configuration that translates model IDs between client-facing names and provider model IDs.
 *
 * @public
 */
export interface ModelMapping {
  /**
   * The provider prefix configuration used for model ID translation.
   *
   * @public
   */
  providerPrefix?: ProviderPrefix | undefined;
}

/**
 * A model entry that specifies a model supported for an inference operation.
 *
 * @public
 */
export interface ModelEntry {
  /**
   * The model ID or glob pattern that identifies the model (for example, `anthropic.claude-opus-*` or `openai.gpt-oss-*`).
   *
   * @public
   */
  model: string | undefined;
}

/**
 * The configuration for a specific inference operation, including its request path and the models that the operation supports.
 *
 * @public
 */
export interface InferenceOperationConfiguration {
  /**
   * The request path for this operation (for example, `/v1/messages` or `/v1/responses`).
   *
   * @public
   */
  path: string | undefined;

  /**
   * The provider path to forward requests to, if it differs from the request path. For example, `/anthropic/v1/messages` when the provider expects a different path than the client-facing `/v1/messages`.
   *
   * @public
   */
  providerPath?: string | undefined;

  /**
   * The list of models supported for this operation.
   *
   * @public
   */
  models?: ModelEntry[] | undefined;
}

/**
 * The configuration for a provider-based inference target. This configuration explicitly defines the endpoint, model mapping, and operations used to route requests to a large language model (LLM) provider.
 *
 * @public
 */
export interface InferenceProviderTargetConfiguration {
  /**
   * The HTTPS endpoint of the inference provider that the gateway forwards requests to.
   *
   * @public
   */
  endpoint: string | undefined;

  /**
   * The configuration that translates client-facing model IDs to the model IDs expected by the provider.
   *
   * @public
   */
  modelMapping?: ModelMapping | undefined;

  /**
   * A list of per-operation configurations that map request paths to the models supported for each operation.
   *
   * @public
   */
  operations?: InferenceOperationConfiguration[] | undefined;
}

/**
 * The configuration for an inference target. An inference target routes requests to a large language model (LLM) provider, either through a built-in connector or an explicitly configured provider.
 *
 * @public
 */
export type InferenceTargetConfiguration =
  | InferenceTargetConfiguration.ConnectorMember
  | InferenceTargetConfiguration.ProviderMember
  | InferenceTargetConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace InferenceTargetConfiguration {
  /**
   * The connector-based inference configuration. Use this option to route requests to an LLM provider through a built-in connector that includes predefined provider rules.
   *
   * @public
   */
  export interface ConnectorMember {
    connector: InferenceConnectorTargetConfiguration;
    provider?: never;
    $unknown?: never;
  }

  /**
   * The provider-based inference configuration. Use this option to explicitly configure the endpoint, model mapping, and operations for an LLM provider.
   *
   * @public
   */
  export interface ProviderMember {
    connector?: never;
    provider: InferenceProviderTargetConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    connector?: never;
    provider?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    connector: (value: InferenceConnectorTargetConfiguration) => T;
    provider: (value: InferenceProviderTargetConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Specifies which operations from an API Gateway REST API are exposed as tools. Tool names and descriptions are derived from the operationId and description fields in the API's exported OpenAPI specification.
 *
 * @public
 */
export interface ApiGatewayToolFilter {
  /**
   * Resource path to match in the REST API. Supports exact paths (for example, `/pets`) or wildcard paths (for example, `/pets/*` to match all paths under `/pets`). Must match existing paths in the REST API.
   *
   * @public
   */
  filterPath: string | undefined;

  /**
   * The methods to filter for.
   *
   * @public
   */
  methods: RestApiMethod[] | undefined;
}

/**
 * Settings to override configurations for a tool.
 *
 * @public
 */
export interface ApiGatewayToolOverride {
  /**
   * The name of tool. Identifies the tool in the Model Context Protocol.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the tool. Provides information about the purpose and usage of the tool. If not provided, uses the description from the API's OpenAPI specification.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Resource path in the REST API (e.g., `/pets`). Must explicitly match an existing path in the REST API.
   *
   * @public
   */
  path: string | undefined;

  /**
   * The HTTP method to expose for the specified path.
   *
   * @public
   */
  method: RestApiMethod | undefined;
}

/**
 * The configuration for defining REST API tool filters and overrides for the gateway target.
 *
 * @public
 */
export interface ApiGatewayToolConfiguration {
  /**
   * A list of explicit tool definitions with optional custom names and descriptions.
   *
   * @public
   */
  toolOverrides?: ApiGatewayToolOverride[] | undefined;

  /**
   * A list of path and method patterns to expose as tools using metadata from the REST API's OpenAPI specification.
   *
   * @public
   */
  toolFilters: ApiGatewayToolFilter[] | undefined;
}

/**
 * The configuration for an Amazon API Gateway target.
 *
 * @public
 */
export interface ApiGatewayTargetConfiguration {
  /**
   * The ID of the API Gateway REST API.
   *
   * @public
   */
  restApiId: string | undefined;

  /**
   * The ID of the stage of the REST API to add as a target.
   *
   * @public
   */
  stage: string | undefined;

  /**
   * The configuration for defining REST API tool filters and overrides for the gateway target.
   *
   * @public
   */
  apiGatewayToolConfiguration: ApiGatewayToolConfiguration | undefined;
}

/**
 * Specifies a parameter override for a connector tool, allowing you to control parameter visibility and descriptions.
 *
 * @public
 */
export interface ConnectorParameterOverride {
  /**
   * A JSON Pointer path identifying the parameter (for example, `/numberOfResults` or `/filter`).
   *
   * @public
   */
  path: string | undefined;

  /**
   * An agent-facing description override for this parameter.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Whether this parameter is visible to the agent. If not specified, uses the service default.
   *
   * @public
   */
  visible?: boolean | undefined;
}

/**
 * Configuration for a single tool within a connector.
 *
 * @public
 */
export interface ConnectorConfiguration {
  /**
   * The tool or operation name (for example, `retrieve` or `webSearch`).
   *
   * @public
   */
  name: string | undefined;

  /**
   * An agent-facing description override for this tool.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Parameters to set as fixed or default values when provisioning this tool.
   *
   * @public
   */
  parameterValues?: __DocumentType | undefined;

  /**
   * Parameters to expose to the agent at runtime, with optional description overrides.
   *
   * @public
   */
  parameterOverrides?: ConnectorParameterOverride[] | undefined;
}

/**
 * The source identifying the connector integration.
 *
 * @public
 */
export interface ConnectorSource {
  /**
   * The identifier for the connector integration (for example, `bedrock-knowledge-bases`).
   *
   * @public
   */
  connectorId: string | undefined;

  /**
   * The version of the connector to use (for example, `1.1.0`). If you don't specify a version, the service uses the latest available version.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * Configuration for a connector integration target. Connectors provide pre-built integrations with Amazon Web Services services and third-party tools.
 *
 * @public
 */
export interface ConnectorTargetConfiguration {
  /**
   * The source configuration identifying which connector to use.
   *
   * @public
   */
  source: ConnectorSource | undefined;

  /**
   * A list of tool names to enable from this connector. If absent, all tools provided by the connector are enabled.
   *
   * @public
   */
  enabled?: string[] | undefined;

  /**
   * A list of per-tool configurations for the connector.
   *
   * @public
   */
  configurations?: ConnectorConfiguration[] | undefined;
}

/**
 * The MCP tool schema configuration for an MCP server target. The tool schema must be aligned with the MCP specification.
 *
 * @public
 */
export type McpToolSchemaConfiguration =
  | McpToolSchemaConfiguration.InlinePayloadMember
  | McpToolSchemaConfiguration.S3Member
  | McpToolSchemaConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace McpToolSchemaConfiguration {
  /**
   * The Amazon S3 location of the tool schema. This location contains the schema definition file.
   *
   * @public
   */
  export interface S3Member {
    s3: S3Configuration;
    inlinePayload?: never;
    $unknown?: never;
  }

  /**
   * The inline payload containing the MCP tool schema definition.
   *
   * @public
   */
  export interface InlinePayloadMember {
    s3?: never;
    inlinePayload: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    inlinePayload?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: S3Configuration) => T;
    inlinePayload: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The target configuration for the MCP server.
 *
 * @public
 */
export interface McpServerTargetConfiguration {
  /**
   * The endpoint for the MCP server target configuration.
   *
   * @public
   */
  endpoint: string | undefined;

  /**
   * A static tool list for the MCP server target. It is supported for all credential providers. Dynamic tool discovery/synchronization will be disabled when a target is configured with mcpToolSchema.
   *
   * @public
   */
  mcpToolSchema?: McpToolSchemaConfiguration | undefined;

  /**
   * The listing mode for the MCP server target configuration. MCP resources for default targets are cached at the control plane for faster access. MCP resources for dynamic targets will be dynamically retrieved when listing tools.
   *
   * @public
   */
  listingMode?: ListingMode | undefined;

  /**
   * Priority for resolving MCP server targets with shared resource URIs. Lower values take precedence. Defaults to 1000 when not set.
   *
   * @public
   */
  resourcePriority?: number | undefined;
}

/**
 * OAuth2-specific authorization data, including the authorization URL and user identifier for the authorization session.
 *
 * @public
 */
export interface OAuth2AuthorizationData {
  /**
   * The URL to initiate the authorization process. This URL is provided when the OAuth2 access token requires user authorization.
   *
   * @public
   */
  authorizationUrl: string | undefined;

  /**
   * The user identifier associated with the OAuth2 authorization session that is defined by AgentCore Gateway.
   *
   * @public
   */
  userId?: string | undefined;
}

/**
 * Contains the authorization data that is returned when a gateway target is configured with a credential provider with authorization code grant type and requires user federation.
 *
 * @public
 */
export type AuthorizationData =
  | AuthorizationData.Oauth2Member
  | AuthorizationData.$UnknownMember;

/**
 * @public
 */
export namespace AuthorizationData {
  /**
   * OAuth2 authorization data for the gateway target.
   *
   * @public
   */
  export interface Oauth2Member {
    oauth2: OAuth2AuthorizationData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    oauth2?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    oauth2: (value: OAuth2AuthorizationData) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Details of a resource created and managed by the gateway for private endpoint connectivity.
 *
 * @public
 */
export interface ManagedResourceDetails {
  /**
   * The domain associated with this managed resource.
   *
   * @public
   */
  domain?: string | undefined;

  /**
   * The ARN of the VPC Lattice resource gateway created in your account.
   *
   * @public
   */
  resourceGatewayArn?: string | undefined;

  /**
   * The ARN of the service network resource association.
   *
   * @public
   */
  resourceAssociationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayTargetRequest {
  /**
   * The unique identifier of the gateway associated with the target.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * The unique identifier of the gateway target to delete.
   *
   * @public
   */
  targetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayTargetResponse {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * The unique identifier of the deleted gateway target.
   *
   * @public
   */
  targetId: string | undefined;

  /**
   * The current status of the gateway target deletion.
   *
   * @public
   */
  status: TargetStatus | undefined;

  /**
   * The reasons for the current status of the gateway target deletion.
   *
   * @public
   */
  statusReasons?: string[] | undefined;
}

/**
 * @public
 */
export interface GetGatewayTargetRequest {
  /**
   * The identifier of the gateway that contains the target.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * The unique identifier of the target to retrieve.
   *
   * @public
   */
  targetId: string | undefined;
}

/**
 * @public
 */
export interface ListGatewayTargetsRequest {
  /**
   * The identifier of the gateway to list targets for.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a gateway target. A target represents an endpoint that the gateway can connect to.
 *
 * @public
 */
export interface TargetSummary {
  /**
   * The unique identifier of the target.
   *
   * @public
   */
  targetId: string | undefined;

  /**
   * The name of the target.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The current status of the target.
   *
   * @public
   */
  status: TargetStatus | undefined;

  /**
   * The description of the target.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp when the target was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the target was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Priority for resolving resource URI conflicts across targets. Lower values take precedence. Defaults to 1000 when not set.
   *
   * @public
   */
  resourcePriority?: number | undefined;

  /**
   * The timestamp when the target was last synchronized.
   *
   * @public
   */
  lastSynchronizedAt?: Date | undefined;

  /**
   * Contains the authorization data that is returned when a gateway target is configured with a credential provider with authorization code grant type and requires user federation.
   *
   * @public
   */
  authorizationData?: AuthorizationData | undefined;

  /**
   * The type of the target.
   *
   * @public
   */
  targetType?: TargetType | undefined;

  /**
   * The listing mode for the target. MCP resources for `DEFAULT` targets are cached at the control plane for faster access. MCP resources for `DYNAMIC` targets are retrieved dynamically when listing tools.
   *
   * @public
   */
  listingMode?: ListingMode | undefined;
}

/**
 * @public
 */
export interface ListGatewayTargetsResponse {
  /**
   * The list of gateway target summaries.
   *
   * @public
   */
  items: TargetSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SynchronizeGatewayTargetsRequest {
  /**
   * The gateway Identifier.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * The target ID list.
   *
   * @public
   */
  targetIdList: string[] | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource for which to retrieve the resource policy.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * The resource policy associated with the specified resource.
   *
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface GetTokenVaultRequest {
  /**
   * The unique identifier of the token vault to retrieve.
   *
   * @public
   */
  tokenVaultId?: string | undefined;
}

/**
 * Contains the KMS configuration for a resource.
 *
 * @public
 */
export interface KmsConfiguration {
  /**
   * The type of KMS key (CustomerManagedKey or ServiceManagedKey).
   *
   * @public
   */
  keyType: KeyType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetTokenVaultResponse {
  /**
   * The ID of the token vault.
   *
   * @public
   */
  tokenVaultId: string | undefined;

  /**
   * The KMS configuration for the token vault.
   *
   * @public
   */
  kmsConfiguration: KmsConfiguration | undefined;

  /**
   * The timestamp when the token vault was last modified.
   *
   * @public
   */
  lastModifiedDate: Date | undefined;
}

/**
 * @public
 */
export interface CreateHarnessEndpointRequest {
  /**
   * The ID of the harness to create an endpoint for.
   *
   * @public
   */
  harnessId: string | undefined;

  /**
   * The name of the endpoint. Must start with a letter and contain only alphanumeric characters and underscores.
   *
   * @public
   */
  endpointName: string | undefined;

  /**
   * The harness version that the endpoint points to and serves invocations from.
   *
   * @public
   */
  targetVersion?: string | undefined;

  /**
   * A description of the endpoint.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Tags to apply to the endpoint resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Representation of a harness endpoint. An endpoint is a named, stable reference to a specific version of a harness that callers invoke, allowing the underlying version to be updated without changing how the agent is invoked.
 *
 * @public
 */
export interface HarnessEndpoint {
  /**
   * The ID of the harness that the endpoint belongs to.
   *
   * @public
   */
  harnessId: string | undefined;

  /**
   * The name of the harness that the endpoint belongs to.
   *
   * @public
   */
  harnessName: string | undefined;

  /**
   * The name of the endpoint.
   *
   * @public
   */
  endpointName: string | undefined;

  /**
   * The ARN of the endpoint.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the endpoint.
   *
   * @public
   */
  status: HarnessEndpointStatus | undefined;

  /**
   * The timestamp when the endpoint was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the endpoint was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The harness version that the endpoint is currently serving.
   *
   * @public
   */
  liveVersion?: string | undefined;

  /**
   * The harness version that the endpoint points to. While an update is in progress, this can differ from the live version until the endpoint finishes transitioning.
   *
   * @public
   */
  targetVersion?: string | undefined;

  /**
   * The description of the endpoint.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The reason the endpoint's last create or update operation failed.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateHarnessEndpointResponse {
  /**
   * The endpoint that was created.
   *
   * @public
   */
  endpoint: HarnessEndpoint | undefined;
}

/**
 * @public
 */
export interface DeleteHarnessEndpointRequest {
  /**
   * The ID of the harness that the endpoint belongs to.
   *
   * @public
   */
  harnessId: string | undefined;

  /**
   * The name of the endpoint to delete.
   *
   * @public
   */
  endpointName: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteHarnessEndpointResponse {
  /**
   * The endpoint that was deleted.
   *
   * @public
   */
  endpoint: HarnessEndpoint | undefined;
}

/**
 * @public
 */
export interface GetHarnessEndpointRequest {
  /**
   * The ID of the harness that the endpoint belongs to.
   *
   * @public
   */
  harnessId: string | undefined;

  /**
   * The name of the endpoint to retrieve.
   *
   * @public
   */
  endpointName: string | undefined;
}

/**
 * @public
 */
export interface GetHarnessEndpointResponse {
  /**
   * The endpoint resource.
   *
   * @public
   */
  endpoint: HarnessEndpoint | undefined;
}

/**
 * @public
 */
export interface ListHarnessEndpointsRequest {
  /**
   * The ID of the harness whose endpoints are listed.
   *
   * @public
   */
  harnessId: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHarnessEndpointsResponse {
  /**
   * The list of harness endpoints.
   *
   * @public
   */
  endpoints: HarnessEndpoint[] | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateHarnessEndpointRequest {
  /**
   * The ID of the harness that the endpoint belongs to.
   *
   * @public
   */
  harnessId: string | undefined;

  /**
   * The name of the endpoint to update.
   *
   * @public
   */
  endpointName: string | undefined;

  /**
   * The harness version that the endpoint points to. If not specified, the existing value is retained.
   *
   * @public
   */
  targetVersion?: string | undefined;

  /**
   * A description of the endpoint. If not specified, the existing value is retained.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateHarnessEndpointResponse {
  /**
   * The updated endpoint.
   *
   * @public
   */
  endpoint: HarnessEndpoint | undefined;
}

/**
 * The AgentCore Runtime environment request configuration.
 *
 * @public
 */
export interface HarnessAgentCoreRuntimeEnvironmentRequest {
  /**
   * LifecycleConfiguration lets you manage the lifecycle of runtime sessions and resources in AgentCore Runtime. This configuration helps optimize resource utilization by automatically cleaning up idle sessions and preventing long-running instances from consuming resources indefinitely.
   *
   * @public
   */
  lifecycleConfiguration?: LifecycleConfiguration | undefined;

  /**
   * SecurityConfig for the Agent.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The filesystem configurations for the runtime environment.
   *
   * @public
   */
  filesystemConfigurations?: FilesystemConfiguration[] | undefined;
}

/**
 * The environment provider request configuration.
 *
 * @public
 */
export type HarnessEnvironmentProviderRequest =
  | HarnessEnvironmentProviderRequest.AgentCoreRuntimeEnvironmentMember
  | HarnessEnvironmentProviderRequest.$UnknownMember;

/**
 * @public
 */
export namespace HarnessEnvironmentProviderRequest {
  /**
   * The AgentCore Runtime environment configuration.
   *
   * @public
   */
  export interface AgentCoreRuntimeEnvironmentMember {
    agentCoreRuntimeEnvironment: HarnessAgentCoreRuntimeEnvironmentRequest;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    agentCoreRuntimeEnvironment?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    agentCoreRuntimeEnvironment: (value: HarnessAgentCoreRuntimeEnvironmentRequest) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The environment artifact for a harness, such as a container image containing custom dependencies.
 *
 * @public
 */
export type HarnessEnvironmentArtifact =
  | HarnessEnvironmentArtifact.ContainerConfigurationMember
  | HarnessEnvironmentArtifact.$UnknownMember;

/**
 * @public
 */
export namespace HarnessEnvironmentArtifact {
  /**
   * Representation of a container configuration.
   *
   * @public
   */
  export interface ContainerConfigurationMember {
    containerConfiguration: ContainerConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    containerConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    containerConfiguration: (value: ContainerConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration for an Amazon EventBridge hook target.
 *
 * @public
 */
export interface HarnessHookEventBridgeTarget {
  /**
   * The ARN of the Amazon EventBridge event bus to send hook events to.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * The configuration for an Amazon Web Services Lambda hook target.
 *
 * @public
 */
export interface HarnessHookLambdaTarget {
  /**
   * The ARN of the Lambda function to invoke.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The maximum number of seconds to wait for the Lambda function response. The default is 60 seconds.
   *
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * The behavior when the Lambda function times out, returns an error, or returns an invalid response. The default is `DENY`.
   *
   * @public
   */
  failureMode?: HarnessHookFailureMode | undefined;
}

/**
 * The configuration for an Amazon SNS hook target.
 *
 * @public
 */
export interface HarnessHookSnsTarget {
  /**
   * The ARN of the Amazon SNS topic to publish hook events to.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * The target that receives lifecycle hook events. Specify one target type.
 *
 * @public
 */
export type HarnessHookTarget =
  | HarnessHookTarget.EventBridgeMember
  | HarnessHookTarget.LambdaMember
  | HarnessHookTarget.SnsMember
  | HarnessHookTarget.$UnknownMember;

/**
 * @public
 */
export namespace HarnessHookTarget {
  /**
   * A Lambda hook target that invokes an Amazon Web Services Lambda function synchronously and waits for its response.
   *
   * @public
   */
  export interface LambdaMember {
    lambda: HarnessHookLambdaTarget;
    sns?: never;
    eventBridge?: never;
    $unknown?: never;
  }

  /**
   * An Amazon SNS hook target that publishes the hook event without waiting for a response.
   *
   * @public
   */
  export interface SnsMember {
    lambda?: never;
    sns: HarnessHookSnsTarget;
    eventBridge?: never;
    $unknown?: never;
  }

  /**
   * An Amazon EventBridge hook target that sends the hook event without waiting for a response.
   *
   * @public
   */
  export interface EventBridgeMember {
    lambda?: never;
    sns?: never;
    eventBridge: HarnessHookEventBridgeTarget;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    lambda?: never;
    sns?: never;
    eventBridge?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    lambda: (value: HarnessHookLambdaTarget) => T;
    sns: (value: HarnessHookSnsTarget) => T;
    eventBridge: (value: HarnessHookEventBridgeTarget) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration for a hook that runs after an invocation completes.
 *
 * @public
 */
export interface HarnessAfterInvocationHook {
  /**
   * The name of the hook.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The target that receives the hook event.
   *
   * @public
   */
  target: HarnessHookTarget | undefined;
}

/**
 * The configuration for a hook that runs after a tool call completes.
 *
 * @public
 */
export interface HarnessAfterToolCallHook {
  /**
   * The name of the hook.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The target that receives the hook event.
   *
   * @public
   */
  target: HarnessHookTarget | undefined;
}

/**
 * The configuration for a hook that runs before an invocation begins.
 *
 * @public
 */
export interface HarnessBeforeInvocationHook {
  /**
   * The name of the hook.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The target that receives the hook event.
   *
   * @public
   */
  target: HarnessHookTarget | undefined;
}

/**
 * The configuration for a hook that runs before the agent calls a tool.
 *
 * @public
 */
export interface HarnessBeforeToolCallHook {
  /**
   * The name of the hook.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The target that receives the hook event.
   *
   * @public
   */
  target: HarnessHookTarget | undefined;
}

/**
 * A lifecycle hook configuration. Specify one hook type.
 *
 * @public
 */
export type HarnessHook =
  | HarnessHook.AfterInvocationMember
  | HarnessHook.AfterToolCallMember
  | HarnessHook.BeforeInvocationMember
  | HarnessHook.BeforeToolCallMember
  | HarnessHook.$UnknownMember;

/**
 * @public
 */
export namespace HarnessHook {
  /**
   * A hook that runs before an invocation begins.
   *
   * @public
   */
  export interface BeforeInvocationMember {
    beforeInvocation: HarnessBeforeInvocationHook;
    afterInvocation?: never;
    beforeToolCall?: never;
    afterToolCall?: never;
    $unknown?: never;
  }

  /**
   * A hook that runs after an invocation completes.
   *
   * @public
   */
  export interface AfterInvocationMember {
    beforeInvocation?: never;
    afterInvocation: HarnessAfterInvocationHook;
    beforeToolCall?: never;
    afterToolCall?: never;
    $unknown?: never;
  }

  /**
   * A hook that runs before the agent calls a tool.
   *
   * @public
   */
  export interface BeforeToolCallMember {
    beforeInvocation?: never;
    afterInvocation?: never;
    beforeToolCall: HarnessBeforeToolCallHook;
    afterToolCall?: never;
    $unknown?: never;
  }

  /**
   * A hook that runs after a tool call completes.
   *
   * @public
   */
  export interface AfterToolCallMember {
    beforeInvocation?: never;
    afterInvocation?: never;
    beforeToolCall?: never;
    afterToolCall: HarnessAfterToolCallHook;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    beforeInvocation?: never;
    afterInvocation?: never;
    beforeToolCall?: never;
    afterToolCall?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    beforeInvocation: (value: HarnessBeforeInvocationHook) => T;
    afterInvocation: (value: HarnessAfterInvocationHook) => T;
    beforeToolCall: (value: HarnessBeforeToolCallHook) => T;
    afterToolCall: (value: HarnessAfterToolCallHook) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration for memory retrieval within a namespace.
 *
 * @public
 */
export interface HarnessAgentCoreMemoryRetrievalConfig {
  /**
   * The maximum number of memory entries to retrieve.
   *
   * @public
   */
  topK?: number | undefined;

  /**
   * The minimum relevance score for retrieved memories.
   *
   * @public
   */
  relevanceScore?: number | undefined;

  /**
   * The ID of the retrieval strategy to use.
   *
   * @public
   */
  strategyId?: string | undefined;
}

/**
 * Configuration for AgentCore Memory integration.
 *
 * @public
 */
export interface HarnessAgentCoreMemoryConfiguration {
  /**
   * The ARN of the AgentCore Memory resource.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The actor ID for memory operations.
   *
   * @public
   */
  actorId?: string | undefined;

  /**
   * The number of messages to retrieve from memory.
   *
   * @public
   */
  messagesCount?: number | undefined;

  /**
   * The retrieval configuration for long-term memory, mapping namespace path templates to retrieval settings.
   *
   * @public
   */
  retrievalConfig?: Record<string, HarnessAgentCoreMemoryRetrievalConfig> | undefined;
}

/**
 * Explicitly opt out of memory.
 *
 * @public
 */
export interface HarnessDisabledMemoryConfiguration {}

/**
 * Configuration for managed memory creation.
 *
 * @public
 */
export interface HarnessManagedMemoryConfiguration {
  /**
   * The ARN of the managed AgentCore Memory resource. Read-only on Get, ignored on Create/Update input.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * Strategy types to enable. Defaults to [SEMANTIC, SUMMARIZATION].
   *
   * @public
   */
  strategies?: HarnessManagedMemoryStrategyType[] | undefined;

  /**
   * Event retention in days. Defaults to 30.
   *
   * @public
   */
  eventExpiryDuration?: number | undefined;

  /**
   * Customer-managed KMS key. Defaults to Amazon Web Services-owned key. Not updatable after creation.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * The memory configuration for a harness.
 *
 * @public
 */
export type HarnessMemoryConfiguration =
  | HarnessMemoryConfiguration.AgentCoreMemoryConfigurationMember
  | HarnessMemoryConfiguration.DisabledMember
  | HarnessMemoryConfiguration.ManagedMemoryConfigurationMember
  | HarnessMemoryConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace HarnessMemoryConfiguration {
  /**
   * The AgentCore Memory configuration.
   *
   * @public
   */
  export interface AgentCoreMemoryConfigurationMember {
    agentCoreMemoryConfiguration: HarnessAgentCoreMemoryConfiguration;
    managedMemoryConfiguration?: never;
    disabled?: never;
    $unknown?: never;
  }

  /**
   * Harness creates and manages a memory resource in the customer's account.
   *
   * @public
   */
  export interface ManagedMemoryConfigurationMember {
    agentCoreMemoryConfiguration?: never;
    managedMemoryConfiguration: HarnessManagedMemoryConfiguration;
    disabled?: never;
    $unknown?: never;
  }

  /**
   * Explicitly opt out of memory.
   *
   * @public
   */
  export interface DisabledMember {
    agentCoreMemoryConfiguration?: never;
    managedMemoryConfiguration?: never;
    disabled: HarnessDisabledMemoryConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    agentCoreMemoryConfiguration?: never;
    managedMemoryConfiguration?: never;
    disabled?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    agentCoreMemoryConfiguration: (value: HarnessAgentCoreMemoryConfiguration) => T;
    managedMemoryConfiguration: (value: HarnessManagedMemoryConfiguration) => T;
    disabled: (value: HarnessDisabledMemoryConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration for an Amazon Bedrock model provider.
 *
 * @public
 */
export interface HarnessBedrockModelConfig {
  /**
   * The Bedrock model ID.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The maximum number of tokens to allow in the generated response per model call.
   *
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * The temperature to set when calling the model.
   *
   * @public
   */
  temperature?: number | undefined;

  /**
   * The topP set when calling the model.
   *
   * @public
   */
  topP?: number | undefined;

  /**
   * The API format to use when calling the Bedrock provider.
   *
   * @public
   */
  apiFormat?: HarnessBedrockApiFormat | undefined;

  /**
   * Provider-specific parameters passed through to the model provider unchanged.
   *
   * @public
   */
  additionalParams?: __DocumentType | undefined;
}

/**
 * Configuration for a Google Gemini model provider. Requires an API key stored in AgentCore Identity.
 *
 * @public
 */
export interface HarnessGeminiModelConfig {
  /**
   * The Gemini model ID.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The ARN of your Gemini API key on AgentCore Identity.
   *
   * @public
   */
  apiKeyArn: string | undefined;

  /**
   * The maximum number of tokens to allow in the generated response per model call.
   *
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * The temperature to set when calling the model.
   *
   * @public
   */
  temperature?: number | undefined;

  /**
   * The topP set when calling the model.
   *
   * @public
   */
  topP?: number | undefined;

  /**
   * The topK set when calling the model.
   *
   * @public
   */
  topK?: number | undefined;

  /**
   * Provider-specific parameters passed through to the Gemini model provider unchanged.
   *
   * @public
   */
  additionalParams?: __DocumentType | undefined;
}

/**
 * Configuration for a LiteLLM model provider, enabling connection to third-party model providers.
 *
 * @public
 */
export interface HarnessLiteLlmModelConfig {
  /**
   * The LiteLLM model identifier (e.g., "anthropic/claude-3-sonnet").
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The ARN of the API key in AgentCore Identity for authenticating with the model provider.
   *
   * @public
   */
  apiKeyArn?: string | undefined;

  /**
   * The base URL for the model provider's API endpoint.
   *
   * @public
   */
  apiBase?: string | undefined;

  /**
   * The maximum number of tokens to allow in the generated response per iteration.
   *
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * The temperature to set when calling the model.
   *
   * @public
   */
  temperature?: number | undefined;

  /**
   * The topP set when calling the model.
   *
   * @public
   */
  topP?: number | undefined;

  /**
   * Provider-specific parameters passed through to the model provider unchanged.
   *
   * @public
   */
  additionalParams?: __DocumentType | undefined;
}

/**
 * Configuration for an OpenAI model provider. Requires an API key stored in AgentCore Identity.
 *
 * @public
 */
export interface HarnessOpenAiModelConfig {
  /**
   * The OpenAI model ID.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The ARN of your OpenAI API key on AgentCore Identity.
   *
   * @public
   */
  apiKeyArn: string | undefined;

  /**
   * Optional custom endpoint URL for an OpenAI-compatible endpoint.
   *
   * @public
   */
  apiBase?: string | undefined;

  /**
   * The maximum number of tokens to allow in the generated response per model call.
   *
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * The temperature to set when calling the model.
   *
   * @public
   */
  temperature?: number | undefined;

  /**
   * The topP set when calling the model.
   *
   * @public
   */
  topP?: number | undefined;

  /**
   * The API format to use when calling the OpenAI provider.
   *
   * @public
   */
  apiFormat?: HarnessOpenAiApiFormat | undefined;

  /**
   * Provider-specific parameters passed through to the model provider unchanged.
   *
   * @public
   */
  additionalParams?: __DocumentType | undefined;
}

/**
 * Specification of which model to use.
 *
 * @public
 */
export type HarnessModelConfiguration =
  | HarnessModelConfiguration.BedrockModelConfigMember
  | HarnessModelConfiguration.GeminiModelConfigMember
  | HarnessModelConfiguration.LiteLlmModelConfigMember
  | HarnessModelConfiguration.OpenAiModelConfigMember
  | HarnessModelConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace HarnessModelConfiguration {
  /**
   * Configuration for an Amazon Bedrock model.
   *
   * @public
   */
  export interface BedrockModelConfigMember {
    bedrockModelConfig: HarnessBedrockModelConfig;
    openAiModelConfig?: never;
    geminiModelConfig?: never;
    liteLlmModelConfig?: never;
    $unknown?: never;
  }

  /**
   * Configuration for an OpenAI model.
   *
   * @public
   */
  export interface OpenAiModelConfigMember {
    bedrockModelConfig?: never;
    openAiModelConfig: HarnessOpenAiModelConfig;
    geminiModelConfig?: never;
    liteLlmModelConfig?: never;
    $unknown?: never;
  }

  /**
   * Configuration for a Google Gemini model.
   *
   * @public
   */
  export interface GeminiModelConfigMember {
    bedrockModelConfig?: never;
    openAiModelConfig?: never;
    geminiModelConfig: HarnessGeminiModelConfig;
    liteLlmModelConfig?: never;
    $unknown?: never;
  }

  /**
   * The LiteLLM model configuration for connecting to third-party model providers.
   *
   * @public
   */
  export interface LiteLlmModelConfigMember {
    bedrockModelConfig?: never;
    openAiModelConfig?: never;
    geminiModelConfig?: never;
    liteLlmModelConfig: HarnessLiteLlmModelConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    bedrockModelConfig?: never;
    openAiModelConfig?: never;
    geminiModelConfig?: never;
    liteLlmModelConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    bedrockModelConfig: (value: HarnessBedrockModelConfig) => T;
    openAiModelConfig: (value: HarnessOpenAiModelConfig) => T;
    geminiModelConfig: (value: HarnessGeminiModelConfig) => T;
    liteLlmModelConfig: (value: HarnessLiteLlmModelConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Passed to show that Amazon Web Services Skills should be included.
 *
 * @public
 */
export interface HarnessSkillAwsSkillsSource {
  /**
   * Optionally filter allowed skills with glob syntax, e.g., ['core-skills/*'].
   *
   * @public
   */
  paths?: string[] | undefined;
}

/**
 * Authentication configuration for accessing a private git repository.
 *
 * @public
 */
export interface HarnessSkillGitAuth {
  /**
   * The ARN of the credential in AgentCore Identity containing the password or personal access token.
   *
   * @public
   */
  credentialArn: string | undefined;

  /**
   * Username for authentication. Defaults to 'oauth2' if not specified.
   *
   * @public
   */
  username?: string | undefined;
}

/**
 * A git repository source for a skill.
 *
 * @public
 */
export interface HarnessSkillGitSource {
  /**
   * The HTTPS URL of the git repository.
   *
   * @public
   */
  url: string | undefined;

  /**
   * Subdirectory within the repository containing the skill.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * Authentication configuration for private repositories.
   *
   * @public
   */
  auth?: HarnessSkillGitAuth | undefined;
}

/**
 * An S3 source for a skill.
 *
 * @public
 */
export interface HarnessSkillS3Source {
  /**
   * The S3 URI pointing to the skill directory (e.g., s3://bucket/skills/my-skill/).
   *
   * @public
   */
  uri: string | undefined;
}

/**
 * A skill available to the agent.
 *
 * @public
 */
export type HarnessSkill =
  | HarnessSkill.AwsSkillsMember
  | HarnessSkill.GitMember
  | HarnessSkill.PathMember
  | HarnessSkill.S3Member
  | HarnessSkill.$UnknownMember;

/**
 * @public
 */
export namespace HarnessSkill {
  /**
   * The filesystem path to the skill definition.
   *
   * @public
   */
  export interface PathMember {
    path: string;
    s3?: never;
    git?: never;
    awsSkills?: never;
    $unknown?: never;
  }

  /**
   * An S3 source containing the skill.
   *
   * @public
   */
  export interface S3Member {
    path?: never;
    s3: HarnessSkillS3Source;
    git?: never;
    awsSkills?: never;
    $unknown?: never;
  }

  /**
   * A git repository containing the skill.
   *
   * @public
   */
  export interface GitMember {
    path?: never;
    s3?: never;
    git: HarnessSkillGitSource;
    awsSkills?: never;
    $unknown?: never;
  }

  /**
   * Amazon Web Services Skills baked into the harness's underlying Runtime.
   *
   * @public
   */
  export interface AwsSkillsMember {
    path?: never;
    s3?: never;
    git?: never;
    awsSkills: HarnessSkillAwsSkillsSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    path?: never;
    s3?: never;
    git?: never;
    awsSkills?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    path: (value: string) => T;
    s3: (value: HarnessSkillS3Source) => T;
    git: (value: HarnessSkillGitSource) => T;
    awsSkills: (value: HarnessSkillAwsSkillsSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A content block in the system prompt.
 *
 * @public
 */
export type HarnessSystemContentBlock =
  | HarnessSystemContentBlock.TextMember
  | HarnessSystemContentBlock.$UnknownMember;

/**
 * @public
 */
export namespace HarnessSystemContentBlock {
  /**
   * The text content of the system prompt block.
   *
   * @public
   */
  export interface TextMember {
    text: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    text?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    text: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration for AgentCore Browser.
 *
 * @public
 */
export interface HarnessAgentCoreBrowserConfig {
  /**
   * If not populated, the built-in Browser ARN is used.
   *
   * @public
   */
  browserArn?: string | undefined;
}

/**
 * Configuration for AgentCore Code Interpreter.
 *
 * @public
 */
export interface HarnessAgentCoreCodeInterpreterConfig {
  /**
   * If not populated, the built-in Code Interpreter ARN is used.
   *
   * @public
   */
  codeInterpreterArn?: string | undefined;
}

/**
 * Authentication method for calling a Gateway.
 *
 * @public
 */
export type HarnessGatewayOutboundAuth =
  | HarnessGatewayOutboundAuth.AwsIamMember
  | HarnessGatewayOutboundAuth.NoneMember
  | HarnessGatewayOutboundAuth.OauthMember
  | HarnessGatewayOutboundAuth.$UnknownMember;

/**
 * @public
 */
export namespace HarnessGatewayOutboundAuth {
  /**
   * SigV4-sign requests using the agent's execution role.
   *
   * @public
   */
  export interface AwsIamMember {
    awsIam: Unit;
    none?: never;
    oauth?: never;
    $unknown?: never;
  }

  /**
   * No authentication.
   *
   * @public
   */
  export interface NoneMember {
    awsIam?: never;
    none: Unit;
    oauth?: never;
    $unknown?: never;
  }

  /**
   * Use OAuth credentials for outbound authentication to the gateway.
   *
   * The `AUTHORIZATION_CODE` grant type is not supported for outbound authentication from a harness to an AgentCore Gateway, even when `defaultReturnUrl` is specified.
   *
   * @public
   */
  export interface OauthMember {
    awsIam?: never;
    none?: never;
    oauth: OAuthCredentialProvider;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    awsIam?: never;
    none?: never;
    oauth?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    awsIam: (value: Unit) => T;
    none: (value: Unit) => T;
    oauth: (value: OAuthCredentialProvider) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration for AgentCore Gateway.
 *
 * @public
 */
export interface HarnessAgentCoreGatewayConfig {
  /**
   * The ARN of the desired AgentCore Gateway.
   *
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * How harness authenticates to this Gateway. Defaults to AWS_IAM (SigV4) if omitted.
   *
   * @public
   */
  outboundAuth?: HarnessGatewayOutboundAuth | undefined;
}

/**
 * Configuration for an inline function tool. When the agent calls this tool, the tool call is returned to the caller for external execution.
 *
 * @public
 */
export interface HarnessInlineFunctionConfig {
  /**
   * Description of what the tool does, provided to the model.
   *
   * @public
   */
  description: string | undefined;

  /**
   * JSON Schema describing the tool's input parameters.
   *
   * @public
   */
  inputSchema: __DocumentType | undefined;
}

/**
 * Configuration for connecting to a remote MCP server.
 *
 * @public
 */
export interface HarnessRemoteMcpConfig {
  /**
   * URL of the MCP endpoint.
   *
   * @public
   */
  url: string | undefined;

  /**
   * Custom headers to include when connecting to the remote MCP server.
   *
   * @public
   */
  headers?: Record<string, string> | undefined;
}

/**
 * Configuration union for different tool types.
 *
 * @public
 */
export type HarnessToolConfiguration =
  | HarnessToolConfiguration.AgentCoreBrowserMember
  | HarnessToolConfiguration.AgentCoreCodeInterpreterMember
  | HarnessToolConfiguration.AgentCoreGatewayMember
  | HarnessToolConfiguration.InlineFunctionMember
  | HarnessToolConfiguration.RemoteMcpMember
  | HarnessToolConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace HarnessToolConfiguration {
  /**
   * Configuration for remote MCP server.
   *
   * @public
   */
  export interface RemoteMcpMember {
    remoteMcp: HarnessRemoteMcpConfig;
    agentCoreBrowser?: never;
    agentCoreGateway?: never;
    inlineFunction?: never;
    agentCoreCodeInterpreter?: never;
    $unknown?: never;
  }

  /**
   * Configuration for AgentCore Browser.
   *
   * @public
   */
  export interface AgentCoreBrowserMember {
    remoteMcp?: never;
    agentCoreBrowser: HarnessAgentCoreBrowserConfig;
    agentCoreGateway?: never;
    inlineFunction?: never;
    agentCoreCodeInterpreter?: never;
    $unknown?: never;
  }

  /**
   * Configuration for AgentCore Gateway.
   *
   * @public
   */
  export interface AgentCoreGatewayMember {
    remoteMcp?: never;
    agentCoreBrowser?: never;
    agentCoreGateway: HarnessAgentCoreGatewayConfig;
    inlineFunction?: never;
    agentCoreCodeInterpreter?: never;
    $unknown?: never;
  }

  /**
   * Configuration for an inline function tool.
   *
   * @public
   */
  export interface InlineFunctionMember {
    remoteMcp?: never;
    agentCoreBrowser?: never;
    agentCoreGateway?: never;
    inlineFunction: HarnessInlineFunctionConfig;
    agentCoreCodeInterpreter?: never;
    $unknown?: never;
  }

  /**
   * Configuration for AgentCore Code Interpreter.
   *
   * @public
   */
  export interface AgentCoreCodeInterpreterMember {
    remoteMcp?: never;
    agentCoreBrowser?: never;
    agentCoreGateway?: never;
    inlineFunction?: never;
    agentCoreCodeInterpreter: HarnessAgentCoreCodeInterpreterConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    remoteMcp?: never;
    agentCoreBrowser?: never;
    agentCoreGateway?: never;
    inlineFunction?: never;
    agentCoreCodeInterpreter?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    remoteMcp: (value: HarnessRemoteMcpConfig) => T;
    agentCoreBrowser: (value: HarnessAgentCoreBrowserConfig) => T;
    agentCoreGateway: (value: HarnessAgentCoreGatewayConfig) => T;
    inlineFunction: (value: HarnessInlineFunctionConfig) => T;
    agentCoreCodeInterpreter: (value: HarnessAgentCoreCodeInterpreterConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A tool available to the agent loop.
 *
 * @public
 */
export interface HarnessTool {
  /**
   * The type of tool.
   *
   * @public
   */
  type: HarnessToolType | undefined;

  /**
   * Unique name for the tool. If not provided, a name will be inferred or generated.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Tool-specific configuration.
   *
   * @public
   */
  config?: HarnessToolConfiguration | undefined;
}

/**
 * Configuration for sliding window truncation strategy.
 *
 * @public
 */
export interface HarnessSlidingWindowConfiguration {
  /**
   * The number of recent messages to retain in the context window.
   *
   * @public
   */
  messagesCount?: number | undefined;
}

/**
 * Configuration for summarization-based truncation strategy.
 *
 * @public
 */
export interface HarnessSummarizationConfiguration {
  /**
   * The ratio of content to summarize.
   *
   * @public
   */
  summaryRatio?: number | undefined;

  /**
   * The number of recent messages to preserve without summarization.
   *
   * @public
   */
  preserveRecentMessages?: number | undefined;

  /**
   * The system prompt used for generating summaries.
   *
   * @public
   */
  summarizationSystemPrompt?: string | undefined;
}

/**
 * Strategy-specific truncation configuration.
 *
 * @public
 */
export type HarnessTruncationStrategyConfiguration =
  | HarnessTruncationStrategyConfiguration.SlidingWindowMember
  | HarnessTruncationStrategyConfiguration.SummarizationMember
  | HarnessTruncationStrategyConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace HarnessTruncationStrategyConfiguration {
  /**
   * Configuration for sliding window truncation.
   *
   * @public
   */
  export interface SlidingWindowMember {
    slidingWindow: HarnessSlidingWindowConfiguration;
    summarization?: never;
    $unknown?: never;
  }

  /**
   * Configuration for summarization-based truncation.
   *
   * @public
   */
  export interface SummarizationMember {
    slidingWindow?: never;
    summarization: HarnessSummarizationConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    slidingWindow?: never;
    summarization?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    slidingWindow: (value: HarnessSlidingWindowConfiguration) => T;
    summarization: (value: HarnessSummarizationConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration for truncating conversation context when it exceeds model limits.
 *
 * @public
 */
export interface HarnessTruncationConfiguration {
  /**
   * The truncation strategy to use.
   *
   * @public
   */
  strategy: HarnessTruncationStrategy | undefined;

  /**
   * The strategy-specific configuration.
   *
   * @public
   */
  config?: HarnessTruncationStrategyConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateHarnessRequest {
  /**
   * The name of the harness. Must start with a letter and contain only alphanumeric characters and underscores.
   *
   * @public
   */
  harnessName: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The ARN of the IAM role that the harness assumes when running. This role must have permissions for the services the agent needs to access, such as Amazon Bedrock for model invocation.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The compute environment configuration for the harness, including network and lifecycle settings.
   *
   * @public
   */
  environment?: HarnessEnvironmentProviderRequest | undefined;

  /**
   * The environment artifact for the harness, such as a custom container image containing additional dependencies.
   *
   * @public
   */
  environmentArtifact?: HarnessEnvironmentArtifact | undefined;

  /**
   * Environment variables to set in the harness runtime environment.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * Represents inbound authorization configuration options used to authenticate incoming requests.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * The model configuration for the harness. Supports Amazon Bedrock, OpenAI, and Google Gemini model providers.
   *
   * @public
   */
  model?: HarnessModelConfiguration | undefined;

  /**
   * The system prompt that defines the agent's behavior and instructions.
   *
   * @public
   */
  systemPrompt?: HarnessSystemContentBlock[] | undefined;

  /**
   * The tools available to the agent, such as remote MCP servers, AgentCore Gateway, AgentCore Browser, Code Interpreter, or inline functions.
   *
   * @public
   */
  tools?: HarnessTool[] | undefined;

  /**
   * The skills available to the agent. Skills are bundles of files that the agent can pull into its context on demand.
   *
   * @public
   */
  skills?: HarnessSkill[] | undefined;

  /**
   * The tools that the agent is allowed to use. Supports glob patterns such as * for all tools, @builtin for all built-in tools, or @serverName/toolName for specific MCP server tools.
   *
   * @public
   */
  allowedTools?: string[] | undefined;

  /**
   * The AgentCore Memory configuration for persisting conversation context across sessions.
   *
   * @public
   */
  memory?: HarnessMemoryConfiguration | undefined;

  /**
   * The truncation configuration for managing conversation context when it exceeds model limits.
   *
   * @public
   */
  truncation?: HarnessTruncationConfiguration | undefined;

  /**
   * The lifecycle hooks to run at defined points in the agent loop.
   *
   * @public
   */
  hooks?: HarnessHook[] | undefined;

  /**
   * The maximum number of iterations the agent loop can execute per invocation.
   *
   * @public
   */
  maxIterations?: number | undefined;

  /**
   * The maximum total number of output tokens the agent can generate across all model calls within a single invocation.
   *
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * The maximum duration in seconds for the agent loop execution per invocation.
   *
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * Tags to apply to the harness resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The AgentCore Runtime environment for a harness.
 *
 * @public
 */
export interface HarnessAgentCoreRuntimeEnvironment {
  /**
   * The ARN of the underlying AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * The name of the underlying AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeName: string | undefined;

  /**
   * The ID of the underlying AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * LifecycleConfiguration lets you manage the lifecycle of runtime sessions and resources in AgentCore Runtime. This configuration helps optimize resource utilization by automatically cleaning up idle sessions and preventing long-running instances from consuming resources indefinitely.
   *
   * @public
   */
  lifecycleConfiguration: LifecycleConfiguration | undefined;

  /**
   * SecurityConfig for the Agent.
   *
   * @public
   */
  networkConfiguration: NetworkConfiguration | undefined;

  /**
   * The filesystem configurations for the runtime environment.
   *
   * @public
   */
  filesystemConfigurations?: FilesystemConfiguration[] | undefined;
}

/**
 * The environment provider for a harness.
 *
 * @public
 */
export type HarnessEnvironmentProvider =
  | HarnessEnvironmentProvider.AgentCoreRuntimeEnvironmentMember
  | HarnessEnvironmentProvider.$UnknownMember;

/**
 * @public
 */
export namespace HarnessEnvironmentProvider {
  /**
   * The AgentCore Runtime environment configuration.
   *
   * @public
   */
  export interface AgentCoreRuntimeEnvironmentMember {
    agentCoreRuntimeEnvironment: HarnessAgentCoreRuntimeEnvironment;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    agentCoreRuntimeEnvironment?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    agentCoreRuntimeEnvironment: (value: HarnessAgentCoreRuntimeEnvironment) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Representation of a harness.
 *
 * @public
 */
export interface Harness {
  /**
   * The ID of the harness.
   *
   * @public
   */
  harnessId: string | undefined;

  /**
   * The name of the harness.
   *
   * @public
   */
  harnessName: string | undefined;

  /**
   * The ARN of the harness.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The status of the harness.
   *
   * @public
   */
  status: HarnessStatus | undefined;

  /**
   * The version of the harness. Incremented on every successful UpdateHarness.
   *
   * @public
   */
  harnessVersion?: string | undefined;

  /**
   * IAM role the harness assumes when running.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The createdAt time of the harness.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The updatedAt time of the harness.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The configuration of the default model used by the Harness.
   *
   * @public
   */
  model: HarnessModelConfiguration | undefined;

  /**
   * The system prompt of the harness.
   *
   * @public
   */
  systemPrompt: HarnessSystemContentBlock[] | undefined;

  /**
   * The tools of the harness.
   *
   * @public
   */
  tools: HarnessTool[] | undefined;

  /**
   * The skills of the harness.
   *
   * @public
   */
  skills: HarnessSkill[] | undefined;

  /**
   * The allowed tools of the harness. All tools are allowed by default.
   *
   * @public
   */
  allowedTools: string[] | undefined;

  /**
   * Configuration for truncating model context.
   *
   * @public
   */
  truncation: HarnessTruncationConfiguration | undefined;

  /**
   * The compute environment on which the Harness runs.
   *
   * @public
   */
  environment: HarnessEnvironmentProvider | undefined;

  /**
   * The environment artifact (e.g., container) in which the Harness operates.
   *
   * @public
   */
  environmentArtifact?: HarnessEnvironmentArtifact | undefined;

  /**
   * Environment variables exposed in the environment in which the harness operates.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * Represents inbound authorization configuration options used to authenticate incoming requests.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * AgentCore Memory instance configuration for short and long term memory.
   *
   * @public
   */
  memory?: HarnessMemoryConfiguration | undefined;

  /**
   * The lifecycle hooks configured for the harness.
   *
   * @public
   */
  hooks?: HarnessHook[] | undefined;

  /**
   * The maximum number of iterations in the agent loop allowed before exiting per invocation.
   *
   * @public
   */
  maxIterations?: number | undefined;

  /**
   * The maximum total number of output tokens the agent can generate across all model calls within a single invocation.
   *
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * The maximum duration per invocation.
   *
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * Reason why create or update operations fail.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateHarnessResponse {
  /**
   * The harness that was created.
   *
   * @public
   */
  harness: Harness | undefined;
}

/**
 * @public
 */
export interface DeleteHarnessRequest {
  /**
   * The ID of the harness to delete.
   *
   * @public
   */
  harnessId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Whether to delete the managed memory on harness deletion. Default: true. If false, the memory is disassociated and becomes a regular customer-owned resource.
   *
   * @public
   */
  deleteManagedMemory?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteHarnessResponse {
  /**
   * The harness that was deleted.
   *
   * @public
   */
  harness?: Harness | undefined;
}

/**
 * @public
 */
export interface GetHarnessRequest {
  /**
   * The ID of the harness to retrieve.
   *
   * @public
   */
  harnessId: string | undefined;

  /**
   * Specific version of the harness to retrieve. If omitted, returns the current Harness configuration, including its status.
   *
   * @public
   */
  harnessVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetHarnessResponse {
  /**
   * The harness resource.
   *
   * @public
   */
  harness: Harness | undefined;
}

/**
 * @public
 */
export interface ListHarnessesRequest {
  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a harness.
 *
 * @public
 */
export interface HarnessSummary {
  /**
   * The ID of the harness.
   *
   * @public
   */
  harnessId: string | undefined;

  /**
   * The name of the harness.
   *
   * @public
   */
  harnessName: string | undefined;

  /**
   * The ARN of the harness.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The current status of the harness.
   *
   * @public
   */
  status: HarnessStatus | undefined;

  /**
   * The timestamp when the harness was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the harness was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The latest version of the harness.
   *
   * @public
   */
  harnessVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListHarnessesResponse {
  /**
   * The list of harness summaries.
   *
   * @public
   */
  harnesses: HarnessSummary[] | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHarnessVersionsRequest {
  /**
   * The ID of the harness whose versions are listed.
   *
   * @public
   */
  harnessId: string | undefined;

  /**
   * The maximum number of results to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a single version of a harness.
 *
 * @public
 */
export interface HarnessVersionSummary {
  /**
   * The ID of the harness.
   *
   * @public
   */
  harnessId: string | undefined;

  /**
   * The name of the harness.
   *
   * @public
   */
  harnessName: string | undefined;

  /**
   * The ARN of the harness.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The version of the harness that this summary describes.
   *
   * @public
   */
  harnessVersion: string | undefined;

  /**
   * The status of this harness version.
   *
   * @public
   */
  status: HarnessStatus | undefined;

  /**
   * The timestamp when this harness version was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when this harness version was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Reason why the create or update operation for this harness version failed.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListHarnessVersionsResponse {
  /**
   * The list of harness version summaries.
   *
   * @public
   */
  harnessVersions: HarnessVersionSummary[] | undefined;

  /**
   * The token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Wrapper for updating an optional AuthorizerConfiguration field with PATCH semantics. When present in an update request, the authorizer configuration is replaced with optionalValue. When absent, the authorizer configuration is left unchanged. To unset, include the wrapper with optionalValue not specified.
 *
 * @public
 */
export interface UpdatedAuthorizerConfiguration {
  /**
   * The updated authorizer configuration value. If not specified, it will clear the current authorizer configuration of the resource.
   *
   * @public
   */
  optionalValue?: AuthorizerConfiguration | undefined;
}

/**
 * Wrapper for updating the environment artifact configuration.
 *
 * @public
 */
export interface UpdatedHarnessEnvironmentArtifact {
  /**
   * The updated environment artifact value, or null to clear the existing configuration.
   *
   * @public
   */
  optionalValue?: HarnessEnvironmentArtifact | undefined;
}

/**
 * Wrapper for updating the memory configuration.
 *
 * @public
 */
export interface UpdatedHarnessMemoryConfiguration {
  /**
   * The updated memory configuration value, or null to clear the existing configuration.
   *
   * @public
   */
  optionalValue?: HarnessMemoryConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateHarnessRequest {
  /**
   * The ID of the harness to update.
   *
   * @public
   */
  harnessId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The ARN of the IAM role that the harness assumes when running. If not specified, the existing value is retained.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The compute environment configuration for the harness. If not specified, the existing value is retained.
   *
   * @public
   */
  environment?: HarnessEnvironmentProviderRequest | undefined;

  /**
   * The environment artifact for the harness. Use the optionalValue wrapper to set a new value, or set it to null to clear the existing configuration.
   *
   * @public
   */
  environmentArtifact?: UpdatedHarnessEnvironmentArtifact | undefined;

  /**
   * Environment variables to set in the harness runtime environment. If specified, this replaces all existing environment variables. If not specified, the existing value is retained.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * Wrapper for updating an optional AuthorizerConfiguration field with PATCH semantics. When present in an update request, the authorizer configuration is replaced with optionalValue. When absent, the authorizer configuration is left unchanged. To unset, include the wrapper with optionalValue not specified.
   *
   * @public
   */
  authorizerConfiguration?: UpdatedAuthorizerConfiguration | undefined;

  /**
   * The model configuration for the harness. If not specified, the existing value is retained.
   *
   * @public
   */
  model?: HarnessModelConfiguration | undefined;

  /**
   * The system prompt that defines the agent's behavior. If not specified, the existing value is retained.
   *
   * @public
   */
  systemPrompt?: HarnessSystemContentBlock[] | undefined;

  /**
   * The tools available to the agent. If specified, this replaces all existing tools. If not specified, the existing value is retained.
   *
   * @public
   */
  tools?: HarnessTool[] | undefined;

  /**
   * The skills available to the agent. If specified, this replaces all existing skills. If not specified, the existing value is retained.
   *
   * @public
   */
  skills?: HarnessSkill[] | undefined;

  /**
   * The tools that the agent is allowed to use. If specified, this replaces all existing allowed tools. If not specified, the existing value is retained.
   *
   * @public
   */
  allowedTools?: string[] | undefined;

  /**
   * The AgentCore Memory configuration. Use the optionalValue wrapper to set a new value, or set it to null to clear the existing configuration.
   *
   * @public
   */
  memory?: UpdatedHarnessMemoryConfiguration | undefined;

  /**
   * The truncation configuration for managing conversation context. If not specified, the existing value is retained.
   *
   * @public
   */
  truncation?: HarnessTruncationConfiguration | undefined;

  /**
   * The lifecycle hooks to run at defined points in the agent loop. If specified, this replaces all existing hooks. If not specified, the existing hooks are retained.
   *
   * @public
   */
  hooks?: HarnessHook[] | undefined;

  /**
   * The maximum number of iterations the agent loop can execute per invocation. If not specified, the existing value is retained.
   *
   * @public
   */
  maxIterations?: number | undefined;

  /**
   * The maximum total number of output tokens the agent can generate across all model calls within a single invocation. If not specified, the existing value is retained.
   *
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * The maximum duration in seconds for the agent loop execution per invocation. If not specified, the existing value is retained.
   *
   * @public
   */
  timeoutSeconds?: number | undefined;
}

/**
 * @public
 */
export interface UpdateHarnessResponse {
  /**
   * The updated harness.
   *
   * @public
   */
  harness: Harness | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource for which you want to list tags.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags associated with the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * A metadata key indexed for filtering.
 *
 * @public
 */
export interface IndexedKey {
  /**
   * The metadata key name to index.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The data type of the indexed key.
   *
   * @public
   */
  type: MetadataValueType | undefined;
}

/**
 * Configurations for overriding the consolidation step of the episodic memory strategy.
 *
 * @public
 */
export interface EpisodicOverrideConsolidationConfigurationInput {
  /**
   * The text to append to the prompt for the consolidation step of the episodic memory strategy.
   *
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * The model ID to use for the consolidation step of the episodic memory strategy.
   *
   * @public
   */
  modelId: string | undefined;
}

/**
 * Configurations for overriding the extraction step of the episodic memory strategy.
 *
 * @public
 */
export interface EpisodicOverrideExtractionConfigurationInput {
  /**
   * The text to append to the prompt for the extraction step of the episodic memory strategy.
   *
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * The model ID to use for the extraction step of the episodic memory strategy.
   *
   * @public
   */
  modelId: string | undefined;
}

/**
 * Validation for NUMBER fields.
 *
 * @public
 */
export interface NumberValidation {
  /**
   * Minimum allowed value.
   *
   * @public
   */
  minValue?: number | undefined;

  /**
   * Maximum allowed value.
   *
   * @public
   */
  maxValue?: number | undefined;
}

/**
 * Validation for STRINGLIST fields.
 *
 * @public
 */
export interface StringListValidation {
  /**
   * Allowed values for items in this STRINGLIST field.
   *
   * @public
   */
  allowedValues?: string[] | undefined;

  /**
   * Maximum number of items in the string list.
   *
   * @public
   */
  maxItems?: number | undefined;
}

/**
 * Validation for STRING fields.
 *
 * @public
 */
export interface StringValidation {
  /**
   * Allowed values for this STRING field.
   *
   * @public
   */
  allowedValues: string[] | undefined;
}

/**
 * Validation rules for extracted metadata values. Only one type can be specified, matching the field's data type.
 *
 * @public
 */
export type Validation =
  | Validation.NumberValidationMember
  | Validation.StringListValidationMember
  | Validation.StringValidationMember
  | Validation.$UnknownMember;

/**
 * @public
 */
export namespace Validation {
  /**
   * Validation for STRING fields.
   *
   * @public
   */
  export interface StringValidationMember {
    stringValidation: StringValidation;
    stringListValidation?: never;
    numberValidation?: never;
    $unknown?: never;
  }

  /**
   * Validation for STRINGLIST fields.
   *
   * @public
   */
  export interface StringListValidationMember {
    stringValidation?: never;
    stringListValidation: StringListValidation;
    numberValidation?: never;
    $unknown?: never;
  }

  /**
   * Validation for NUMBER fields.
   *
   * @public
   */
  export interface NumberValidationMember {
    stringValidation?: never;
    stringListValidation?: never;
    numberValidation: NumberValidation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    stringValidation?: never;
    stringListValidation?: never;
    numberValidation?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    stringValidation: (value: StringValidation) => T;
    stringListValidation: (value: StringListValidation) => T;
    numberValidation: (value: NumberValidation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Model-based metadata extraction configuration.
 *
 * @public
 */
export interface LlmExtractionConfig {
  /**
   * Instructions for extraction. Supports built-in operators like LATEST_VALUE or custom natural-language instructions.
   *
   * @public
   */
  llmExtractionInstruction?: string | undefined;

  /**
   * Description of what this metadata field represents.
   *
   * @public
   */
  definition: string | undefined;

  /**
   * Validation rules to constrain extracted values.
   *
   * @public
   */
  validation?: Validation | undefined;
}

/**
 * Configuration for metadata extraction from conversational content.
 *
 * @public
 */
export type ExtractionConfig =
  | ExtractionConfig.LlmExtractionConfigMember
  | ExtractionConfig.$UnknownMember;

/**
 * @public
 */
export namespace ExtractionConfig {
  /**
   * Model-based extraction using a definition and instructions.
   *
   * @public
   */
  export interface LlmExtractionConfigMember {
    llmExtractionConfig: LlmExtractionConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    llmExtractionConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    llmExtractionConfig: (value: LlmExtractionConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A metadata field definition within a strategy's schema.
 *
 * @public
 */
export interface MetadataSchemaEntry {
  /**
   * The metadata field name. Must match an indexed key to be queryable via metadata filters.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The MetadataValueType.
   *
   * @public
   */
  type?: MetadataValueType | undefined;

  /**
   * Specifies whether the metadata value is extracted by the LLM or passed through deterministically from the event.
   *
   * @public
   */
  extractionType?: ExtractionType | undefined;

  /**
   * Configuration for extracting this metadata value from conversational content. Applicable only if extractionType is LLM inferred.
   *
   * @public
   */
  extractionConfig?: ExtractionConfig | undefined;
}

/**
 * Schema for metadata on memory records generated by a strategy.
 *
 * @public
 */
export interface MemoryRecordSchema {
  /**
   * The metadata field definitions for this strategy.
   *
   * @public
   */
  metadataSchema?: MetadataSchemaEntry[] | undefined;
}

/**
 * Configurations for overriding the reflection step of the episodic memory strategy.
 *
 * @public
 */
export interface EpisodicOverrideReflectionConfigurationInput {
  /**
   * The text to append to the prompt for reflection step of the episodic memory strategy.
   *
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * The model ID to use for the reflection step of the episodic memory strategy.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * This is a legacy parameter, use `namespaceTemplates`. The namespaces to use for episodic reflection. Can be less nested than the episodic namespaces.
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * The namespaceTemplates to use for episodic reflection. Can be less nested than the episodic namespaces.
   *
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * Schema for metadata fields on records generated by this reflection override.
   *
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * Input for the configuration to override the episodic memory strategy.
 *
 * @public
 */
export interface EpisodicOverrideConfigurationInput {
  /**
   * Contains configurations for overriding the extraction step of the episodic memory strategy.
   *
   * @public
   */
  extraction?: EpisodicOverrideExtractionConfigurationInput | undefined;

  /**
   * Contains configurations for overriding the consolidation step of the episodic memory strategy.
   *
   * @public
   */
  consolidation?: EpisodicOverrideConsolidationConfigurationInput | undefined;

  /**
   * Contains configurations for overriding the reflection step of the episodic memory strategy.
   *
   * @public
   */
  reflection?: EpisodicOverrideReflectionConfigurationInput | undefined;
}

/**
 * The configuration to invoke a self-managed memory processing pipeline with.
 *
 * @public
 */
export interface InvocationConfigurationInput {
  /**
   * The ARN of the SNS topic for job notifications.
   *
   * @public
   */
  topicArn: string | undefined;

  /**
   * The S3 bucket name for event payload delivery.
   *
   * @public
   */
  payloadDeliveryBucketName: string | undefined;
}

/**
 * The trigger configuration based on a message.
 *
 * @public
 */
export interface MessageBasedTriggerInput {
  /**
   * The number of messages that trigger memory processing.
   *
   * @public
   */
  messageCount?: number | undefined;
}

/**
 * Trigger configuration based on time.
 *
 * @public
 */
export interface TimeBasedTriggerInput {
  /**
   * Idle session timeout (seconds) that triggers memory processing.
   *
   * @public
   */
  idleSessionTimeout?: number | undefined;
}

/**
 * Trigger configuration based on tokens.
 *
 * @public
 */
export interface TokenBasedTriggerInput {
  /**
   * Number of tokens that trigger memory processing.
   *
   * @public
   */
  tokenCount?: number | undefined;
}

/**
 * Condition that triggers memory processing.
 *
 * @public
 */
export type TriggerConditionInput =
  | TriggerConditionInput.MessageBasedTriggerMember
  | TriggerConditionInput.TimeBasedTriggerMember
  | TriggerConditionInput.TokenBasedTriggerMember
  | TriggerConditionInput.$UnknownMember;

/**
 * @public
 */
export namespace TriggerConditionInput {
  /**
   * Message based trigger configuration.
   *
   * @public
   */
  export interface MessageBasedTriggerMember {
    messageBasedTrigger: MessageBasedTriggerInput;
    tokenBasedTrigger?: never;
    timeBasedTrigger?: never;
    $unknown?: never;
  }

  /**
   * Token based trigger configuration.
   *
   * @public
   */
  export interface TokenBasedTriggerMember {
    messageBasedTrigger?: never;
    tokenBasedTrigger: TokenBasedTriggerInput;
    timeBasedTrigger?: never;
    $unknown?: never;
  }

  /**
   * Time based trigger configuration.
   *
   * @public
   */
  export interface TimeBasedTriggerMember {
    messageBasedTrigger?: never;
    tokenBasedTrigger?: never;
    timeBasedTrigger: TimeBasedTriggerInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    messageBasedTrigger?: never;
    tokenBasedTrigger?: never;
    timeBasedTrigger?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    messageBasedTrigger: (value: MessageBasedTriggerInput) => T;
    tokenBasedTrigger: (value: TokenBasedTriggerInput) => T;
    timeBasedTrigger: (value: TimeBasedTriggerInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Input configuration for a self-managed memory strategy.
 *
 * @public
 */
export interface SelfManagedConfigurationInput {
  /**
   * A list of conditions that trigger memory processing.
   *
   * @public
   */
  triggerConditions?: TriggerConditionInput[] | undefined;

  /**
   * Configuration to invoke a self-managed memory processing pipeline with.
   *
   * @public
   */
  invocationConfiguration: InvocationConfigurationInput | undefined;

  /**
   * Number of historical messages to include in processing context.
   *
   * @public
   */
  historicalContextWindowSize?: number | undefined;
}

/**
 * Input for semantic override consolidation configuration in a memory strategy.
 *
 * @public
 */
export interface SemanticOverrideConsolidationConfigurationInput {
  /**
   * The text to append to the prompt for semantic consolidation.
   *
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * The model ID to use for semantic consolidation.
   *
   * @public
   */
  modelId: string | undefined;
}

/**
 * Input for semantic override extraction configuration in a memory strategy.
 *
 * @public
 */
export interface SemanticOverrideExtractionConfigurationInput {
  /**
   * The text to append to the prompt for semantic extraction.
   *
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * The model ID to use for semantic extraction.
   *
   * @public
   */
  modelId: string | undefined;
}

/**
 * Input for semantic override configuration in a memory strategy.
 *
 * @public
 */
export interface SemanticOverrideConfigurationInput {
  /**
   * The extraction configuration for a semantic override.
   *
   * @public
   */
  extraction?: SemanticOverrideExtractionConfigurationInput | undefined;

  /**
   * The consolidation configuration for a semantic override.
   *
   * @public
   */
  consolidation?: SemanticOverrideConsolidationConfigurationInput | undefined;
}

/**
 * Input for summary override consolidation configuration in a memory strategy.
 *
 * @public
 */
export interface SummaryOverrideConsolidationConfigurationInput {
  /**
   * The text to append to the prompt for summary consolidation.
   *
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * The model ID to use for summary consolidation.
   *
   * @public
   */
  modelId: string | undefined;
}

/**
 * Input for summary override configuration in a memory strategy.
 *
 * @public
 */
export interface SummaryOverrideConfigurationInput {
  /**
   * The consolidation configuration for a summary override.
   *
   * @public
   */
  consolidation?: SummaryOverrideConsolidationConfigurationInput | undefined;
}

/**
 * Input for user preference override consolidation configuration in a memory strategy.
 *
 * @public
 */
export interface UserPreferenceOverrideConsolidationConfigurationInput {
  /**
   * The text to append to the prompt for user preference consolidation.
   *
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * The model ID to use for user preference consolidation.
   *
   * @public
   */
  modelId: string | undefined;
}

/**
 * Input for user preference override extraction configuration in a memory strategy.
 *
 * @public
 */
export interface UserPreferenceOverrideExtractionConfigurationInput {
  /**
   * The text to append to the prompt for user preference extraction.
   *
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * The model ID to use for user preference extraction.
   *
   * @public
   */
  modelId: string | undefined;
}

/**
 * Input for user preference override configuration in a memory strategy.
 *
 * @public
 */
export interface UserPreferenceOverrideConfigurationInput {
  /**
   * The extraction configuration for a user preference override.
   *
   * @public
   */
  extraction?: UserPreferenceOverrideExtractionConfigurationInput | undefined;

  /**
   * The consolidation configuration for a user preference override.
   *
   * @public
   */
  consolidation?: UserPreferenceOverrideConsolidationConfigurationInput | undefined;
}

/**
 * Input for custom configuration of a memory strategy.
 *
 * @public
 */
export type CustomConfigurationInput =
  | CustomConfigurationInput.EpisodicOverrideMember
  | CustomConfigurationInput.SelfManagedConfigurationMember
  | CustomConfigurationInput.SemanticOverrideMember
  | CustomConfigurationInput.SummaryOverrideMember
  | CustomConfigurationInput.UserPreferenceOverrideMember
  | CustomConfigurationInput.$UnknownMember;

/**
 * @public
 */
export namespace CustomConfigurationInput {
  /**
   * The semantic override configuration for a custom memory strategy.
   *
   * @public
   */
  export interface SemanticOverrideMember {
    semanticOverride: SemanticOverrideConfigurationInput;
    summaryOverride?: never;
    userPreferenceOverride?: never;
    episodicOverride?: never;
    selfManagedConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The summary override configuration for a custom memory strategy.
   *
   * @public
   */
  export interface SummaryOverrideMember {
    semanticOverride?: never;
    summaryOverride: SummaryOverrideConfigurationInput;
    userPreferenceOverride?: never;
    episodicOverride?: never;
    selfManagedConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The user preference override configuration for a custom memory strategy.
   *
   * @public
   */
  export interface UserPreferenceOverrideMember {
    semanticOverride?: never;
    summaryOverride?: never;
    userPreferenceOverride: UserPreferenceOverrideConfigurationInput;
    episodicOverride?: never;
    selfManagedConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The episodic memory strategy override configuration for a custom memory strategy.
   *
   * @public
   */
  export interface EpisodicOverrideMember {
    semanticOverride?: never;
    summaryOverride?: never;
    userPreferenceOverride?: never;
    episodicOverride: EpisodicOverrideConfigurationInput;
    selfManagedConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The self managed configuration for a custom memory strategy.
   *
   * @public
   */
  export interface SelfManagedConfigurationMember {
    semanticOverride?: never;
    summaryOverride?: never;
    userPreferenceOverride?: never;
    episodicOverride?: never;
    selfManagedConfiguration: SelfManagedConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    semanticOverride?: never;
    summaryOverride?: never;
    userPreferenceOverride?: never;
    episodicOverride?: never;
    selfManagedConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    semanticOverride: (value: SemanticOverrideConfigurationInput) => T;
    summaryOverride: (value: SummaryOverrideConfigurationInput) => T;
    userPreferenceOverride: (value: UserPreferenceOverrideConfigurationInput) => T;
    episodicOverride: (value: EpisodicOverrideConfigurationInput) => T;
    selfManagedConfiguration: (value: SelfManagedConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Specifies the record expiry (long-term memory time-to-live) for a memory strategy. Provide exactly one of `recordExpiryDurationDays` or `action`. Set `recordExpiryDurationDays` to configure or update the time-to-live, or set `action` to `REMOVE` to remove a previously configured time-to-live.
 *
 * @public
 */
export type RecordExpirySpecification =
  | RecordExpirySpecification.ActionMember
  | RecordExpirySpecification.RecordExpiryDurationDaysMember
  | RecordExpirySpecification.$UnknownMember;

/**
 * @public
 */
export namespace RecordExpirySpecification {
  /**
   * The duration, in days, after which memory records generated by this strategy expire. The minimum is 31 days.
   *
   * @public
   */
  export interface RecordExpiryDurationDaysMember {
    recordExpiryDurationDays: number;
    action?: never;
    $unknown?: never;
  }

  /**
   * The action to apply to the existing record expiry (long-term memory time-to-live) configuration. Set to `REMOVE` to remove a previously configured time-to-live so that newer records no longer expire. This value is not applicable on create paths.
   *
   * @public
   */
  export interface ActionMember {
    recordExpiryDurationDays?: never;
    action: RecordExpiryAction;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    recordExpiryDurationDays?: never;
    action?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    recordExpiryDurationDays: (value: number) => T;
    action: (value: RecordExpiryAction) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Input for creating a custom memory strategy.
 *
 * @public
 */
export interface CustomMemoryStrategyInput {
  /**
   * The name of the custom memory strategy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the custom memory strategy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * This is a legacy parameter, use `namespaceTemplates`. The namespaces associated with the custom memory strategy.
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * The namespaceTemplates associated with the custom memory strategy.
   *
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * The configuration for the custom memory strategy.
   *
   * @public
   */
  configuration?: CustomConfigurationInput | undefined;

  /**
   * Schema for metadata fields on records generated by this strategy.
   *
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;

  /**
   * The record expiry (long-term memory time-to-live) configuration for memory records generated by this strategy. Set `recordExpiryDurationDays` to the number of days after which records expire. If not specified, records generated by this strategy do not expire.
   *
   * @public
   */
  recordExpirySpecification?: RecordExpirySpecification | undefined;
}

/**
 * An episodic reflection configuration input.
 *
 * @public
 */
export interface EpisodicReflectionConfigurationInput {
  /**
   * This is a legacy parameter, use `namespaceTemplates`. The namespaces over which to create reflections. Can be less nested than episode namespaces.
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * The namespaceTemplates over which to create reflections. Can be less nested than episode namespaces.
   *
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * Schema for metadata fields on records generated by reflections.
   *
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * Input for creating an episodic memory strategy.
 *
 * @public
 */
export interface EpisodicMemoryStrategyInput {
  /**
   * The name of the episodic memory strategy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the episodic memory strategy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * This is a legacy parameter, use `namespaceTemplates`. The namespaces for which to create episodes.
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * The namespaceTemplates for which to create episodes.
   *
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * The configuration for the reflections created with the episodic memory strategy.
   *
   * @public
   */
  reflectionConfiguration?: EpisodicReflectionConfigurationInput | undefined;

  /**
   * Schema for metadata fields on records generated by this strategy.
   *
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;

  /**
   * The record expiry (long-term memory time-to-live) configuration for memory records generated by this strategy. Set `recordExpiryDurationDays` to the number of days after which records expire. If not specified, records generated by this strategy do not expire.
   *
   * @public
   */
  recordExpirySpecification?: RecordExpirySpecification | undefined;
}

/**
 * Input for creating a semantic memory strategy.
 *
 * @public
 */
export interface SemanticMemoryStrategyInput {
  /**
   * The name of the semantic memory strategy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the semantic memory strategy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * This is a legacy parameter, use `namespaceTemplates`. The namespaces associated with the semantic memory strategy.
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * The namespaceTemplates associated with the semantic memory strategy.
   *
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * Schema for metadata on memory records generated by a strategy.
   *
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;

  /**
   * The record expiry (long-term memory time-to-live) configuration for memory records generated by this strategy. Set `recordExpiryDurationDays` to the number of days after which records expire. If not specified, records generated by this strategy do not expire.
   *
   * @public
   */
  recordExpirySpecification?: RecordExpirySpecification | undefined;
}

/**
 * Input for creating a summary memory strategy.
 *
 * @public
 */
export interface SummaryMemoryStrategyInput {
  /**
   * The name of the summary memory strategy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the summary memory strategy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * This is a legacy parameter, use `namespaceTemplates`. The namespaces associated with the summary memory strategy.
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * The namespaceTemplates associated with the summary memory strategy.
   *
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * Schema for metadata fields on records generated by this strategy.
   *
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;

  /**
   * The record expiry (long-term memory time-to-live) configuration for memory records generated by this strategy. Set `recordExpiryDurationDays` to the number of days after which records expire. If not specified, records generated by this strategy do not expire.
   *
   * @public
   */
  recordExpirySpecification?: RecordExpirySpecification | undefined;
}

/**
 * Input for creating a user preference memory strategy.
 *
 * @public
 */
export interface UserPreferenceMemoryStrategyInput {
  /**
   * The name of the user preference memory strategy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the user preference memory strategy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * This is a legacy parameter, use `namespaceTemplates`. The namespaces associated with the user preference memory strategy.
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * The namespaceTemplates associated with the user preference memory strategy.
   *
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * Schema for metadata fields on records generated by this strategy.
   *
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;

  /**
   * The record expiry (long-term memory time-to-live) configuration for memory records generated by this strategy. Set `recordExpiryDurationDays` to the number of days after which records expire. If not specified, records generated by this strategy do not expire.
   *
   * @public
   */
  recordExpirySpecification?: RecordExpirySpecification | undefined;
}

/**
 * Contains input information for creating a memory strategy.
 *
 * @public
 */
export type MemoryStrategyInput =
  | MemoryStrategyInput.CustomMemoryStrategyMember
  | MemoryStrategyInput.EpisodicMemoryStrategyMember
  | MemoryStrategyInput.SemanticMemoryStrategyMember
  | MemoryStrategyInput.SummaryMemoryStrategyMember
  | MemoryStrategyInput.UserPreferenceMemoryStrategyMember
  | MemoryStrategyInput.$UnknownMember;

/**
 * @public
 */
export namespace MemoryStrategyInput {
  /**
   * Input for creating a semantic memory strategy.
   *
   * @public
   */
  export interface SemanticMemoryStrategyMember {
    semanticMemoryStrategy: SemanticMemoryStrategyInput;
    summaryMemoryStrategy?: never;
    userPreferenceMemoryStrategy?: never;
    customMemoryStrategy?: never;
    episodicMemoryStrategy?: never;
    $unknown?: never;
  }

  /**
   * Input for creating a summary memory strategy.
   *
   * @public
   */
  export interface SummaryMemoryStrategyMember {
    semanticMemoryStrategy?: never;
    summaryMemoryStrategy: SummaryMemoryStrategyInput;
    userPreferenceMemoryStrategy?: never;
    customMemoryStrategy?: never;
    episodicMemoryStrategy?: never;
    $unknown?: never;
  }

  /**
   * Input for creating a user preference memory strategy.
   *
   * @public
   */
  export interface UserPreferenceMemoryStrategyMember {
    semanticMemoryStrategy?: never;
    summaryMemoryStrategy?: never;
    userPreferenceMemoryStrategy: UserPreferenceMemoryStrategyInput;
    customMemoryStrategy?: never;
    episodicMemoryStrategy?: never;
    $unknown?: never;
  }

  /**
   * Input for creating a custom memory strategy.
   *
   * @public
   */
  export interface CustomMemoryStrategyMember {
    semanticMemoryStrategy?: never;
    summaryMemoryStrategy?: never;
    userPreferenceMemoryStrategy?: never;
    customMemoryStrategy: CustomMemoryStrategyInput;
    episodicMemoryStrategy?: never;
    $unknown?: never;
  }

  /**
   * Input for creating an episodic memory strategy
   *
   * @public
   */
  export interface EpisodicMemoryStrategyMember {
    semanticMemoryStrategy?: never;
    summaryMemoryStrategy?: never;
    userPreferenceMemoryStrategy?: never;
    customMemoryStrategy?: never;
    episodicMemoryStrategy: EpisodicMemoryStrategyInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    semanticMemoryStrategy?: never;
    summaryMemoryStrategy?: never;
    userPreferenceMemoryStrategy?: never;
    customMemoryStrategy?: never;
    episodicMemoryStrategy?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    semanticMemoryStrategy: (value: SemanticMemoryStrategyInput) => T;
    summaryMemoryStrategy: (value: SummaryMemoryStrategyInput) => T;
    userPreferenceMemoryStrategy: (value: UserPreferenceMemoryStrategyInput) => T;
    customMemoryStrategy: (value: CustomMemoryStrategyInput) => T;
    episodicMemoryStrategy: (value: EpisodicMemoryStrategyInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The validation rules for namespace variable values. When you specify multiple rules, the service enforces a logical `AND` across all provided key-value pairs.
 *
 * @public
 */
export interface NamespaceKeyValidation {
  /**
   * The allowed values for this namespace variable key.
   *
   * @public
   */
  allowedValues?: string[] | undefined;

  /**
   * A regex pattern that the namespace variable key-value must match.
   *
   * @public
   */
  regexPattern?: string | undefined;
}

/**
 * A namespace variable key definition with optional `NamespaceKeyValidation` rules.
 *
 * @public
 */
export interface NamespaceKeyEntry {
  /**
   * The namespace variable key name.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The validation rules that constrain values for this namespace variable at runtime (`CreateEvent` API).
   *
   * @public
   */
  validation?: NamespaceKeyValidation | undefined;
}

/**
 * Defines what content to stream and at what level of detail.
 *
 * @public
 */
export interface ContentConfiguration {
  /**
   * Type of content to stream.
   *
   * @public
   */
  type: ContentType | undefined;

  /**
   * Level of detail for streamed content.
   *
   * @public
   */
  level?: ContentLevel | undefined;
}

/**
 * Configuration for Kinesis Data Stream delivery.
 *
 * @public
 */
export interface KinesisResource {
  /**
   * ARN of the Kinesis Data Stream.
   *
   * @public
   */
  dataStreamArn: string | undefined;

  /**
   * Content configurations for stream delivery.
   *
   * @public
   */
  contentConfigurations: ContentConfiguration[] | undefined;
}

/**
 * Supported stream delivery resource types.
 *
 * @public
 */
export type StreamDeliveryResource =
  | StreamDeliveryResource.KinesisMember
  | StreamDeliveryResource.$UnknownMember;

/**
 * @public
 */
export namespace StreamDeliveryResource {
  /**
   * Kinesis Data Stream configuration.
   *
   * @public
   */
  export interface KinesisMember {
    kinesis: KinesisResource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    kinesis?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    kinesis: (value: KinesisResource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration for streaming memory record data to external resources.
 *
 * @public
 */
export interface StreamDeliveryResources {
  /**
   * List of stream delivery resource configurations.
   *
   * @public
   */
  resources: StreamDeliveryResource[] | undefined;
}

/**
 * @public
 */
export interface CreateMemoryInput {
  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the memory. The name must be unique within your account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the memory.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the memory data.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the memory to access Amazon Web Services services.
   *
   * @public
   */
  memoryExecutionRoleArn?: string | undefined;

  /**
   * The duration after which memory events expire. Specified as an ISO 8601 duration.
   *
   * @public
   */
  eventExpiryDuration: number | undefined;

  /**
   * The memory strategies to use for this memory. Strategies define how information is extracted, processed, and consolidated.
   *
   * @public
   */
  memoryStrategies?: MemoryStrategyInput[] | undefined;

  /**
   * Metadata keys to index for filtering. Once declared, indexed keys cannot be removed.
   *
   * @public
   */
  indexedKeys?: IndexedKey[] | undefined;

  /**
   * The namespace variable key definitions with optional validation rules. Use these `namespaceKeys` in `namespaceTemplates` to control namespace hierarchy.
   *
   * @public
   */
  namespaceKeys?: NamespaceKeyEntry[] | undefined;

  /**
   * Configuration for streaming memory record data to external resources.
   *
   * @public
   */
  streamDeliveryResources?: StreamDeliveryResources | undefined;

  /**
   * A map of tag keys and values to assign to an AgentCore Memory. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Contains configurations to override the default consolidation step for the episodic memory strategy.
 *
 * @public
 */
export interface EpisodicConsolidationOverride {
  /**
   * The text appended to the prompt for the consolidation step of the episodic memory strategy.
   *
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * The model ID used for the consolidation step of the episodic memory strategy.
   *
   * @public
   */
  modelId: string | undefined;
}

/**
 * Contains semantic consolidation override configuration.
 *
 * @public
 */
export interface SemanticConsolidationOverride {
  /**
   * The text to append to the prompt for semantic consolidation.
   *
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * The model ID to use for semantic consolidation.
   *
   * @public
   */
  modelId: string | undefined;
}

/**
 * Contains summary consolidation override configuration.
 *
 * @public
 */
export interface SummaryConsolidationOverride {
  /**
   * The text to append to the prompt for summary consolidation.
   *
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * The model ID to use for summary consolidation.
   *
   * @public
   */
  modelId: string | undefined;
}

/**
 * Contains user preference consolidation override configuration.
 *
 * @public
 */
export interface UserPreferenceConsolidationOverride {
  /**
   * The text to append to the prompt for user preference consolidation.
   *
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * The model ID to use for user preference consolidation.
   *
   * @public
   */
  modelId: string | undefined;
}

/**
 * Contains custom consolidation configuration information.
 *
 * @public
 */
export type CustomConsolidationConfiguration =
  | CustomConsolidationConfiguration.EpisodicConsolidationOverrideMember
  | CustomConsolidationConfiguration.SemanticConsolidationOverrideMember
  | CustomConsolidationConfiguration.SummaryConsolidationOverrideMember
  | CustomConsolidationConfiguration.UserPreferenceConsolidationOverrideMember
  | CustomConsolidationConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace CustomConsolidationConfiguration {
  /**
   * The semantic consolidation override configuration.
   *
   * @public
   */
  export interface SemanticConsolidationOverrideMember {
    semanticConsolidationOverride: SemanticConsolidationOverride;
    summaryConsolidationOverride?: never;
    userPreferenceConsolidationOverride?: never;
    episodicConsolidationOverride?: never;
    $unknown?: never;
  }

  /**
   * The summary consolidation override configuration.
   *
   * @public
   */
  export interface SummaryConsolidationOverrideMember {
    semanticConsolidationOverride?: never;
    summaryConsolidationOverride: SummaryConsolidationOverride;
    userPreferenceConsolidationOverride?: never;
    episodicConsolidationOverride?: never;
    $unknown?: never;
  }

  /**
   * The user preference consolidation override configuration.
   *
   * @public
   */
  export interface UserPreferenceConsolidationOverrideMember {
    semanticConsolidationOverride?: never;
    summaryConsolidationOverride?: never;
    userPreferenceConsolidationOverride: UserPreferenceConsolidationOverride;
    episodicConsolidationOverride?: never;
    $unknown?: never;
  }

  /**
   * The configurations to override the default consolidation step for the episodic memory strategy.
   *
   * @public
   */
  export interface EpisodicConsolidationOverrideMember {
    semanticConsolidationOverride?: never;
    summaryConsolidationOverride?: never;
    userPreferenceConsolidationOverride?: never;
    episodicConsolidationOverride: EpisodicConsolidationOverride;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    semanticConsolidationOverride?: never;
    summaryConsolidationOverride?: never;
    userPreferenceConsolidationOverride?: never;
    episodicConsolidationOverride?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    semanticConsolidationOverride: (value: SemanticConsolidationOverride) => T;
    summaryConsolidationOverride: (value: SummaryConsolidationOverride) => T;
    userPreferenceConsolidationOverride: (value: UserPreferenceConsolidationOverride) => T;
    episodicConsolidationOverride: (value: EpisodicConsolidationOverride) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains consolidation configuration information for a memory strategy.
 *
 * @public
 */
export type ConsolidationConfiguration =
  | ConsolidationConfiguration.CustomConsolidationConfigurationMember
  | ConsolidationConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ConsolidationConfiguration {
  /**
   * The custom consolidation configuration.
   *
   * @public
   */
  export interface CustomConsolidationConfigurationMember {
    customConsolidationConfiguration: CustomConsolidationConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customConsolidationConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customConsolidationConfiguration: (value: CustomConsolidationConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains configurations to override the default extraction step for the episodic memory strategy.
 *
 * @public
 */
export interface EpisodicExtractionOverride {
  /**
   * The text appended to the prompt for the extraction step of the episodic memory strategy.
   *
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * The model ID used for the extraction step of the episodic memory strategy.
   *
   * @public
   */
  modelId: string | undefined;
}

/**
 * Contains semantic extraction override configuration.
 *
 * @public
 */
export interface SemanticExtractionOverride {
  /**
   * The text to append to the prompt for semantic extraction.
   *
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * The model ID to use for semantic extraction.
   *
   * @public
   */
  modelId: string | undefined;
}

/**
 * Contains user preference extraction override configuration.
 *
 * @public
 */
export interface UserPreferenceExtractionOverride {
  /**
   * The text to append to the prompt for user preference extraction.
   *
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * The model ID to use for user preference extraction.
   *
   * @public
   */
  modelId: string | undefined;
}

/**
 * Contains custom extraction configuration information.
 *
 * @public
 */
export type CustomExtractionConfiguration =
  | CustomExtractionConfiguration.EpisodicExtractionOverrideMember
  | CustomExtractionConfiguration.SemanticExtractionOverrideMember
  | CustomExtractionConfiguration.UserPreferenceExtractionOverrideMember
  | CustomExtractionConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace CustomExtractionConfiguration {
  /**
   * The semantic extraction override configuration.
   *
   * @public
   */
  export interface SemanticExtractionOverrideMember {
    semanticExtractionOverride: SemanticExtractionOverride;
    userPreferenceExtractionOverride?: never;
    episodicExtractionOverride?: never;
    $unknown?: never;
  }

  /**
   * The user preference extraction override configuration.
   *
   * @public
   */
  export interface UserPreferenceExtractionOverrideMember {
    semanticExtractionOverride?: never;
    userPreferenceExtractionOverride: UserPreferenceExtractionOverride;
    episodicExtractionOverride?: never;
    $unknown?: never;
  }

  /**
   * The configurations to override the default extraction step for the episodic memory strategy.
   *
   * @public
   */
  export interface EpisodicExtractionOverrideMember {
    semanticExtractionOverride?: never;
    userPreferenceExtractionOverride?: never;
    episodicExtractionOverride: EpisodicExtractionOverride;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    semanticExtractionOverride?: never;
    userPreferenceExtractionOverride?: never;
    episodicExtractionOverride?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    semanticExtractionOverride: (value: SemanticExtractionOverride) => T;
    userPreferenceExtractionOverride: (value: UserPreferenceExtractionOverride) => T;
    episodicExtractionOverride: (value: EpisodicExtractionOverride) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains extraction configuration information for a memory strategy.
 *
 * @public
 */
export type ExtractionConfiguration =
  | ExtractionConfiguration.CustomExtractionConfigurationMember
  | ExtractionConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ExtractionConfiguration {
  /**
   * The custom extraction configuration.
   *
   * @public
   */
  export interface CustomExtractionConfigurationMember {
    customExtractionConfiguration: CustomExtractionConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customExtractionConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customExtractionConfiguration: (value: CustomExtractionConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains configurations to override the default reflection step for the episodic memory strategy.
 *
 * @public
 */
export interface EpisodicReflectionOverride {
  /**
   * The text appended to the prompt for the reflection step of the episodic memory strategy.
   *
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * The model ID used for the reflection step of the episodic memory strategy.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * This is a legacy parameter. The namespaces over which reflections were created. Can be less nested than the episodic namespaces.
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * The namespaceTemplates over which reflections were created. Can be less nested than the episodic namespaces.
   *
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * Schema for metadata fields on records generated by this reflection override.
   *
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * Contains configurations for a custom reflection strategy.
 *
 * @public
 */
export type CustomReflectionConfiguration =
  | CustomReflectionConfiguration.EpisodicReflectionOverrideMember
  | CustomReflectionConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace CustomReflectionConfiguration {
  /**
   * The configuration for a reflection strategy to override the default one.
   *
   * @public
   */
  export interface EpisodicReflectionOverrideMember {
    episodicReflectionOverride: EpisodicReflectionOverride;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    episodicReflectionOverride?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    episodicReflectionOverride: (value: EpisodicReflectionOverride) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration for the reflections created with the episodic memory strategy.
 *
 * @public
 */
export interface EpisodicReflectionConfiguration {
  /**
   * This is a legacy parameter, use `namespaceTemplates`. The namespaces for which to create reflections. Can be less nested than the episodic namespaces.
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * The namespaceTemplates for which to create reflections. Can be less nested than the episodic namespaces.
   *
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * "Schema for metadata fields on records generated by reflections.
   *
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * Contains reflection configuration information for a memory strategy.
 *
 * @public
 */
export type ReflectionConfiguration =
  | ReflectionConfiguration.CustomReflectionConfigurationMember
  | ReflectionConfiguration.EpisodicReflectionConfigurationMember
  | ReflectionConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ReflectionConfiguration {
  /**
   * The configuration for a custom reflection strategy.
   *
   * @public
   */
  export interface CustomReflectionConfigurationMember {
    customReflectionConfiguration: CustomReflectionConfiguration;
    episodicReflectionConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The configuration for the episodic reflection strategy.
   *
   * @public
   */
  export interface EpisodicReflectionConfigurationMember {
    customReflectionConfiguration?: never;
    episodicReflectionConfiguration: EpisodicReflectionConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customReflectionConfiguration?: never;
    episodicReflectionConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customReflectionConfiguration: (value: CustomReflectionConfiguration) => T;
    episodicReflectionConfiguration: (value: EpisodicReflectionConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration to invoke a self-managed memory processing pipeline with.
 *
 * @public
 */
export interface InvocationConfiguration {
  /**
   * The ARN of the SNS topic for job notifications.
   *
   * @public
   */
  topicArn: string | undefined;

  /**
   * The S3 bucket name for event payload delivery.
   *
   * @public
   */
  payloadDeliveryBucketName: string | undefined;
}

/**
 * The trigger configuration based on a message.
 *
 * @public
 */
export interface MessageBasedTrigger {
  /**
   * The number of messages that trigger memory processing.
   *
   * @public
   */
  messageCount?: number | undefined;
}

/**
 * Trigger configuration based on time.
 *
 * @public
 */
export interface TimeBasedTrigger {
  /**
   * Idle session timeout (seconds) that triggers memory processing.
   *
   * @public
   */
  idleSessionTimeout?: number | undefined;
}

/**
 * Trigger configuration based on tokens.
 *
 * @public
 */
export interface TokenBasedTrigger {
  /**
   * Number of tokens that trigger memory processing.
   *
   * @public
   */
  tokenCount?: number | undefined;
}

/**
 * Condition that triggers memory processing.
 *
 * @public
 */
export type TriggerCondition =
  | TriggerCondition.MessageBasedTriggerMember
  | TriggerCondition.TimeBasedTriggerMember
  | TriggerCondition.TokenBasedTriggerMember
  | TriggerCondition.$UnknownMember;

/**
 * @public
 */
export namespace TriggerCondition {
  /**
   * Message based trigger configuration.
   *
   * @public
   */
  export interface MessageBasedTriggerMember {
    messageBasedTrigger: MessageBasedTrigger;
    tokenBasedTrigger?: never;
    timeBasedTrigger?: never;
    $unknown?: never;
  }

  /**
   * Token based trigger configuration.
   *
   * @public
   */
  export interface TokenBasedTriggerMember {
    messageBasedTrigger?: never;
    tokenBasedTrigger: TokenBasedTrigger;
    timeBasedTrigger?: never;
    $unknown?: never;
  }

  /**
   * Time based trigger configuration.
   *
   * @public
   */
  export interface TimeBasedTriggerMember {
    messageBasedTrigger?: never;
    tokenBasedTrigger?: never;
    timeBasedTrigger: TimeBasedTrigger;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    messageBasedTrigger?: never;
    tokenBasedTrigger?: never;
    timeBasedTrigger?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    messageBasedTrigger: (value: MessageBasedTrigger) => T;
    tokenBasedTrigger: (value: TokenBasedTrigger) => T;
    timeBasedTrigger: (value: TimeBasedTrigger) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A configuration for a self-managed memory strategy.
 *
 * @public
 */
export interface SelfManagedConfiguration {
  /**
   * A list of conditions that trigger memory processing.
   *
   * @public
   */
  triggerConditions: TriggerCondition[] | undefined;

  /**
   * The configuration to use when invoking memory processing.
   *
   * @public
   */
  invocationConfiguration: InvocationConfiguration | undefined;

  /**
   * The number of historical messages to include in processing context.
   *
   * @public
   */
  historicalContextWindowSize: number | undefined;
}

/**
 * Contains configuration information for a memory strategy.
 *
 * @public
 */
export interface StrategyConfiguration {
  /**
   * The type of override for the strategy configuration.
   *
   * @public
   */
  type?: OverrideType | undefined;

  /**
   * The extraction configuration for the memory strategy.
   *
   * @public
   */
  extraction?: ExtractionConfiguration | undefined;

  /**
   * The consolidation configuration for the memory strategy.
   *
   * @public
   */
  consolidation?: ConsolidationConfiguration | undefined;

  /**
   * The reflection configuration for the memory strategy.
   *
   * @public
   */
  reflection?: ReflectionConfiguration | undefined;

  /**
   * Self-managed configuration settings.
   *
   * @public
   */
  selfManagedConfiguration?: SelfManagedConfiguration | undefined;
}

/**
 * Contains information about a memory strategy.
 *
 * @public
 */
export interface MemoryStrategy {
  /**
   * The unique identifier of the memory strategy.
   *
   * @public
   */
  strategyId: string | undefined;

  /**
   * The name of the memory strategy.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the memory strategy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration of the memory strategy.
   *
   * @public
   */
  configuration?: StrategyConfiguration | undefined;

  /**
   * The type of the memory strategy.
   *
   * @public
   */
  type: MemoryStrategyType | undefined;

  /**
   * This is a legacy parameter. The namespaces associated with the memory strategy.
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces: string[] | undefined;

  /**
   * The namespaceTemplates associated with the memory strategy.
   *
   * @public
   */
  namespaceTemplates: string[] | undefined;

  /**
   * The timestamp when the memory strategy was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the memory strategy was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * The current status of the memory strategy.
   *
   * @public
   */
  status?: MemoryStrategyStatus | undefined;

  /**
   * Schema for metadata fields on records generated by this strategy.
   *
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;

  /**
   * The effective record expiry (long-term memory time-to-live), in days, for memory records generated by this strategy. New records expire this many days after they are created. If not set, records generated by this strategy do not expire.
   *
   * @public
   */
  recordExpiryDurationDays?: number | undefined;
}

/**
 * Contains information about a memory resource.
 *
 * @public
 */
export interface Memory {
  /**
   * The Amazon Resource Name (ARN) of the memory.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The unique identifier of the memory.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the memory.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the memory.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the KMS key used to encrypt the memory.
   *
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * The ARN of the IAM role that provides permissions for the memory.
   *
   * @public
   */
  memoryExecutionRoleArn?: string | undefined;

  /**
   * The number of days after which memory events will expire.
   *
   * @public
   */
  eventExpiryDuration: number | undefined;

  /**
   * The current status of the memory.
   *
   * @public
   */
  status: MemoryStatus | undefined;

  /**
   * The reason for failure if the memory is in a failed state.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The timestamp when the memory was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the memory was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The list of memory strategies associated with this memory.
   *
   * @public
   */
  strategies?: MemoryStrategy[] | undefined;

  /**
   * The indexed metadata keys for this memory. Only indexed keys can be used in metadata filters.
   *
   * @public
   */
  indexedKeys?: IndexedKey[] | undefined;

  /**
   * The namespace variable key definitions for this memory. Namespace keys define custom variables used in `namespaceTemplates` with optional validation rules.
   *
   * @public
   */
  namespaceKeys?: NamespaceKeyEntry[] | undefined;

  /**
   * Configuration for streaming memory record data to external resources.
   *
   * @public
   */
  streamDeliveryResources?: StreamDeliveryResources | undefined;

  /**
   * ARN of the resource managing this memory (e.g. a harness). When set, strategy modifications and deletion are only allowed through the managing resource.
   *
   * @public
   */
  managedByResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateMemoryOutput {
  /**
   * The details of the created memory, including its ID, ARN, name, description, and configuration settings.
   *
   * @public
   */
  memory?: Memory | undefined;
}

/**
 * @public
 */
export interface DeleteMemoryInput {
  /**
   * A client token is used for keeping track of idempotent requests. It can contain a session id which can be around 250 chars, combined with a unique Amazon Web Services identifier.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The unique identifier of the memory to delete.
   *
   * @public
   */
  memoryId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMemoryOutput {
  /**
   * The unique identifier of the deleted AgentCore Memory resource.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * The current status of the AgentCore Memory resource deletion.
   *
   * @public
   */
  status?: MemoryStatus | undefined;
}

/**
 * @public
 */
export interface GetMemoryInput {
  /**
   * The unique identifier of the memory to retrieve.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * The level of detail to return for the memory.
   *
   * @public
   */
  view?: MemoryView | undefined;
}

/**
 * @public
 */
export interface GetMemoryOutput {
  /**
   * The retrieved AgentCore Memory resource details.
   *
   * @public
   */
  memory: Memory | undefined;
}

/**
 * @public
 */
export interface ListMemoriesInput {
  /**
   * The maximum number of results to return in a single call. The default value is 10. The maximum value is 50.
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
 * Contains summary information about a memory resource.
 *
 * @public
 */
export interface MemorySummary {
  /**
   * The Amazon Resource Name (ARN) of the memory.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The unique identifier of the memory.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The current status of the memory.
   *
   * @public
   */
  status?: MemoryStatus | undefined;

  /**
   * The timestamp when the memory was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the memory was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * ARN of the resource managing this memory (e.g. a harness). Null if not managed.
   *
   * @public
   */
  managedByResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface ListMemoriesOutput {
  /**
   * The list of AgentCore Memory resource summaries.
   *
   * @public
   */
  memories: MemorySummary[] | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for deleting a memory strategy.
 *
 * @public
 */
export interface DeleteMemoryStrategyInput {
  /**
   * The unique identifier of the memory strategy to delete.
   *
   * @public
   */
  memoryStrategyId: string | undefined;
}

/**
 * Input for a custom consolidation configuration.
 *
 * @public
 */
export type CustomConsolidationConfigurationInput =
  | CustomConsolidationConfigurationInput.EpisodicConsolidationOverrideMember
  | CustomConsolidationConfigurationInput.SemanticConsolidationOverrideMember
  | CustomConsolidationConfigurationInput.SummaryConsolidationOverrideMember
  | CustomConsolidationConfigurationInput.UserPreferenceConsolidationOverrideMember
  | CustomConsolidationConfigurationInput.$UnknownMember;

/**
 * @public
 */
export namespace CustomConsolidationConfigurationInput {
  /**
   * The semantic consolidation override configuration input.
   *
   * @public
   */
  export interface SemanticConsolidationOverrideMember {
    semanticConsolidationOverride: SemanticOverrideConsolidationConfigurationInput;
    summaryConsolidationOverride?: never;
    userPreferenceConsolidationOverride?: never;
    episodicConsolidationOverride?: never;
    $unknown?: never;
  }

  /**
   * The summary consolidation override configuration input.
   *
   * @public
   */
  export interface SummaryConsolidationOverrideMember {
    semanticConsolidationOverride?: never;
    summaryConsolidationOverride: SummaryOverrideConsolidationConfigurationInput;
    userPreferenceConsolidationOverride?: never;
    episodicConsolidationOverride?: never;
    $unknown?: never;
  }

  /**
   * The user preference consolidation override configuration input.
   *
   * @public
   */
  export interface UserPreferenceConsolidationOverrideMember {
    semanticConsolidationOverride?: never;
    summaryConsolidationOverride?: never;
    userPreferenceConsolidationOverride: UserPreferenceOverrideConsolidationConfigurationInput;
    episodicConsolidationOverride?: never;
    $unknown?: never;
  }

  /**
   * Configurations to override the consolidation step of the episodic strategy.
   *
   * @public
   */
  export interface EpisodicConsolidationOverrideMember {
    semanticConsolidationOverride?: never;
    summaryConsolidationOverride?: never;
    userPreferenceConsolidationOverride?: never;
    episodicConsolidationOverride: EpisodicOverrideConsolidationConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    semanticConsolidationOverride?: never;
    summaryConsolidationOverride?: never;
    userPreferenceConsolidationOverride?: never;
    episodicConsolidationOverride?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    semanticConsolidationOverride: (value: SemanticOverrideConsolidationConfigurationInput) => T;
    summaryConsolidationOverride: (value: SummaryOverrideConsolidationConfigurationInput) => T;
    userPreferenceConsolidationOverride: (value: UserPreferenceOverrideConsolidationConfigurationInput) => T;
    episodicConsolidationOverride: (value: EpisodicOverrideConsolidationConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains information for modifying a consolidation configuration.
 *
 * @public
 */
export type ModifyConsolidationConfiguration =
  | ModifyConsolidationConfiguration.CustomConsolidationConfigurationMember
  | ModifyConsolidationConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ModifyConsolidationConfiguration {
  /**
   * The updated custom consolidation configuration.
   *
   * @public
   */
  export interface CustomConsolidationConfigurationMember {
    customConsolidationConfiguration: CustomConsolidationConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customConsolidationConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customConsolidationConfiguration: (value: CustomConsolidationConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Input for a custom extraction configuration.
 *
 * @public
 */
export type CustomExtractionConfigurationInput =
  | CustomExtractionConfigurationInput.EpisodicExtractionOverrideMember
  | CustomExtractionConfigurationInput.SemanticExtractionOverrideMember
  | CustomExtractionConfigurationInput.UserPreferenceExtractionOverrideMember
  | CustomExtractionConfigurationInput.$UnknownMember;

/**
 * @public
 */
export namespace CustomExtractionConfigurationInput {
  /**
   * The semantic extraction override configuration input.
   *
   * @public
   */
  export interface SemanticExtractionOverrideMember {
    semanticExtractionOverride: SemanticOverrideExtractionConfigurationInput;
    userPreferenceExtractionOverride?: never;
    episodicExtractionOverride?: never;
    $unknown?: never;
  }

  /**
   * The user preference extraction override configuration input.
   *
   * @public
   */
  export interface UserPreferenceExtractionOverrideMember {
    semanticExtractionOverride?: never;
    userPreferenceExtractionOverride: UserPreferenceOverrideExtractionConfigurationInput;
    episodicExtractionOverride?: never;
    $unknown?: never;
  }

  /**
   * Configurations to override the extraction step of the episodic strategy.
   *
   * @public
   */
  export interface EpisodicExtractionOverrideMember {
    semanticExtractionOverride?: never;
    userPreferenceExtractionOverride?: never;
    episodicExtractionOverride: EpisodicOverrideExtractionConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    semanticExtractionOverride?: never;
    userPreferenceExtractionOverride?: never;
    episodicExtractionOverride?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    semanticExtractionOverride: (value: SemanticOverrideExtractionConfigurationInput) => T;
    userPreferenceExtractionOverride: (value: UserPreferenceOverrideExtractionConfigurationInput) => T;
    episodicExtractionOverride: (value: EpisodicOverrideExtractionConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains information for modifying an extraction configuration.
 *
 * @public
 */
export type ModifyExtractionConfiguration =
  | ModifyExtractionConfiguration.CustomExtractionConfigurationMember
  | ModifyExtractionConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ModifyExtractionConfiguration {
  /**
   * The updated custom extraction configuration.
   *
   * @public
   */
  export interface CustomExtractionConfigurationMember {
    customExtractionConfiguration: CustomExtractionConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customExtractionConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customExtractionConfiguration: (value: CustomExtractionConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Input for a custom reflection configuration.
 *
 * @public
 */
export type CustomReflectionConfigurationInput =
  | CustomReflectionConfigurationInput.EpisodicReflectionOverrideMember
  | CustomReflectionConfigurationInput.$UnknownMember;

/**
 * @public
 */
export namespace CustomReflectionConfigurationInput {
  /**
   * The reflection override configuration input.
   *
   * @public
   */
  export interface EpisodicReflectionOverrideMember {
    episodicReflectionOverride: EpisodicOverrideReflectionConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    episodicReflectionOverride?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    episodicReflectionOverride: (value: EpisodicOverrideReflectionConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains information for modifying a reflection configuration.
 *
 * @public
 */
export type ModifyReflectionConfiguration =
  | ModifyReflectionConfiguration.CustomReflectionConfigurationMember
  | ModifyReflectionConfiguration.EpisodicReflectionConfigurationMember
  | ModifyReflectionConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ModifyReflectionConfiguration {
  /**
   * The updated episodic reflection configuration.
   *
   * @public
   */
  export interface EpisodicReflectionConfigurationMember {
    episodicReflectionConfiguration: EpisodicReflectionConfigurationInput;
    customReflectionConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The updated custom reflection configuration.
   *
   * @public
   */
  export interface CustomReflectionConfigurationMember {
    episodicReflectionConfiguration?: never;
    customReflectionConfiguration: CustomReflectionConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    episodicReflectionConfiguration?: never;
    customReflectionConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    episodicReflectionConfiguration: (value: EpisodicReflectionConfigurationInput) => T;
    customReflectionConfiguration: (value: CustomReflectionConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration for updating invocation settings.
 *
 * @public
 */
export interface ModifyInvocationConfigurationInput {
  /**
   * The updated ARN of the SNS topic for job notifications.
   *
   * @public
   */
  topicArn?: string | undefined;

  /**
   * The updated S3 bucket name for event payload delivery.
   *
   * @public
   */
  payloadDeliveryBucketName?: string | undefined;
}

/**
 * The configuration for updating the self-managed memory strategy.
 *
 * @public
 */
export interface ModifySelfManagedConfiguration {
  /**
   * The updated list of conditions that trigger memory processing.
   *
   * @public
   */
  triggerConditions?: TriggerConditionInput[] | undefined;

  /**
   * The updated configuration to invoke self-managed memory processing pipeline.
   *
   * @public
   */
  invocationConfiguration?: ModifyInvocationConfigurationInput | undefined;

  /**
   * The updated number of historical messages to include in processing context.
   *
   * @public
   */
  historicalContextWindowSize?: number | undefined;
}

/**
 * Contains information for modifying a strategy configuration.
 *
 * @public
 */
export interface ModifyStrategyConfiguration {
  /**
   * The updated extraction configuration.
   *
   * @public
   */
  extraction?: ModifyExtractionConfiguration | undefined;

  /**
   * The updated consolidation configuration.
   *
   * @public
   */
  consolidation?: ModifyConsolidationConfiguration | undefined;

  /**
   * The updated reflection configuration.
   *
   * @public
   */
  reflection?: ModifyReflectionConfiguration | undefined;

  /**
   * The updated self-managed configuration.
   *
   * @public
   */
  selfManagedConfiguration?: ModifySelfManagedConfiguration | undefined;
}

/**
 * Input for modifying a memory strategy.
 *
 * @public
 */
export interface ModifyMemoryStrategyInput {
  /**
   * The unique identifier of the memory strategy to modify.
   *
   * @public
   */
  memoryStrategyId: string | undefined;

  /**
   * The updated description of the memory strategy.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * This is a legacy parameter, use `namespaceTemplates`. The updated namespaces for the memory strategy.
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * The updated namespaceTemplates for the memory strategy.
   *
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * The updated configuration for the memory strategy.
   *
   * @public
   */
  configuration?: ModifyStrategyConfiguration | undefined;

  /**
   * Updated metadata schema for records generated by this strategy.
   *
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;

  /**
   * Updates or removes the record expiry (long-term memory time-to-live) for this strategy. Set `recordExpiryDurationDays` to configure or update the number of days after which records expire, or set `action` to `REMOVE` to remove a previously configured time-to-live so that newer records no longer expire. The change applies only to records created after the update.
   *
   * @public
   */
  recordExpirySpecification?: RecordExpirySpecification | undefined;
}

/**
 * Contains information for modifying memory strategies.
 *
 * @public
 */
export interface ModifyMemoryStrategies {
  /**
   * The list of memory strategies to add.
   *
   * @public
   */
  addMemoryStrategies?: MemoryStrategyInput[] | undefined;

  /**
   * The list of memory strategies to modify.
   *
   * @public
   */
  modifyMemoryStrategies?: ModifyMemoryStrategyInput[] | undefined;

  /**
   * The list of memory strategies to delete.
   *
   * @public
   */
  deleteMemoryStrategies?: DeleteMemoryStrategyInput[] | undefined;
}

/**
 * @public
 */
export interface UpdateMemoryInput {
  /**
   * A client token is used for keeping track of idempotent requests. It can contain a session id which can be around 250 chars, combined with a unique Amazon Web Services identifier.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The unique identifier of the memory to update.
   *
   * @public
   */
  memoryId: string | undefined;

  /**
   * The updated description of the AgentCore Memory resource.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The number of days after which memory events will expire, between 7 and 365 days.
   *
   * @public
   */
  eventExpiryDuration?: number | undefined;

  /**
   * The ARN of the IAM role that provides permissions for the AgentCore Memory resource.
   *
   * @public
   */
  memoryExecutionRoleArn?: string | undefined;

  /**
   * The memory strategies to add, modify, or delete.
   *
   * @public
   */
  memoryStrategies?: ModifyMemoryStrategies | undefined;

  /**
   * Additional metadata keys to index. Previously indexed keys cannot be removed.
   *
   * @public
   */
  addIndexedKeys?: IndexedKey[] | undefined;

  /**
   * The namespace variable key definitions with validation rules for this memory. This value fully replaces the existing set — any key you omit is removed. Any referenced `namespaceKey` omission will throw ValidationException.
   *
   * @public
   */
  namespaceKeys?: NamespaceKeyEntry[] | undefined;

  /**
   * Configuration for streaming memory record data to external resources.
   *
   * @public
   */
  streamDeliveryResources?: StreamDeliveryResources | undefined;
}

/**
 * @public
 */
export interface UpdateMemoryOutput {
  /**
   * The updated AgentCore Memory resource details.
   *
   * @public
   */
  memory?: Memory | undefined;
}

/**
 * Configuration settings for connecting to Atlassian services using OAuth2 authentication. This includes the client credentials required to authenticate with Atlassian's OAuth2 authorization server.
 *
 * @public
 */
export interface AtlassianOauth2ProviderConfigInput {
  /**
   * The client ID for the Atlassian OAuth2 provider. This identifier is assigned by Atlassian when you register your application.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * The client secret for the Atlassian OAuth2 provider. This secret is assigned by Atlassian and used along with the client ID to authenticate your application.
   *
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * A reference to the Amazon Web Services Secrets Manager secret that stores the client secret. This includes the secret ID and the JSON key used to extract the client secret value from the secret. Required when `clientSecretSource` is set to `EXTERNAL`.
   *
   * @public
   */
  clientSecretConfig?: SecretReference | undefined;

  /**
   * The source type of the client secret for the Atlassian OAuth2 provider. Use `MANAGED` if the secret is managed by the service, or `EXTERNAL` if you manage the secret yourself in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;
}

/**
 * Contains the authorization server metadata for an OAuth2 provider.
 *
 * @public
 */
export interface Oauth2AuthorizationServerMetadata {
  /**
   * The issuer URL for the OAuth2 authorization server.
   *
   * @public
   */
  issuer: string | undefined;

  /**
   * The authorization endpoint URL for the OAuth2 authorization server.
   *
   * @public
   */
  authorizationEndpoint: string | undefined;

  /**
   * The token endpoint URL for the OAuth2 authorization server.
   *
   * @public
   */
  tokenEndpoint: string | undefined;

  /**
   * The supported response types for the OAuth2 authorization server.
   *
   * @public
   */
  responseTypes?: string[] | undefined;

  /**
   * The authentication methods supported by the token endpoint. This specifies how clients can authenticate when requesting tokens from the authorization server.
   *
   * @public
   */
  tokenEndpointAuthMethods?: string[] | undefined;
}

/**
 * Contains the discovery information for an OAuth2 provider.
 *
 * @public
 */
export type Oauth2Discovery =
  | Oauth2Discovery.AuthorizationServerMetadataMember
  | Oauth2Discovery.DiscoveryUrlMember
  | Oauth2Discovery.$UnknownMember;

/**
 * @public
 */
export namespace Oauth2Discovery {
  /**
   * The discovery URL for the OAuth2 provider.
   *
   * @public
   */
  export interface DiscoveryUrlMember {
    discoveryUrl: string;
    authorizationServerMetadata?: never;
    $unknown?: never;
  }

  /**
   * The authorization server metadata for the OAuth2 provider.
   *
   * @public
   */
  export interface AuthorizationServerMetadataMember {
    discoveryUrl?: never;
    authorizationServerMetadata: Oauth2AuthorizationServerMetadata;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    discoveryUrl?: never;
    authorizationServerMetadata?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    discoveryUrl: (value: string) => T;
    authorizationServerMetadata: (value: Oauth2AuthorizationServerMetadata) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Specifies the client authentication method to use for the on-behalf-of token exchange.
 *
 * @public
 */
export interface OnBehalfOfAuthenticationConfig {
  /**
   * The client authentication method to use during the on-behalf-of token exchange. The `NO_CLIENT` option omits the `clientId` and `clientSecret` during the on-behalf-of token exchange with the identity provider.
   *
   * @public
   */
  clientAuthenticationMethod: OnBehalfOfClientAuthenticationMethod | undefined;
}

/**
 * Configuration for RFC 8693 token exchange.
 *
 * @public
 */
export interface TokenExchangeGrantTypeConfigType {
  /**
   * The content type for the actor token in the token exchange.
   *
   * @public
   */
  actorTokenContent: ActorTokenContentType | undefined;

  /**
   * The scopes for the actor token. Only valid when actorTokenContent is M2M.
   *
   * @public
   */
  actorTokenScopes?: string[] | undefined;
}

/**
 * Configuration for on-behalf-of token exchange.
 *
 * @public
 */
export interface OnBehalfOfTokenExchangeConfigType {
  /**
   * The grant type for the on-behalf-of token exchange.
   *
   * @public
   */
  grantType: OnBehalfOfTokenExchangeGrantTypeType | undefined;

  /**
   * Configuration specific to the TOKEN_EXCHANGE grant type (RFC 8693).
   *
   * @public
   */
  tokenExchangeGrantTypeConfig?: TokenExchangeGrantTypeConfigType | undefined;

  /**
   * Specify the client authentication configuration to use for the on-behalf-of token exchange. With this configuration, you override the provider level client authentication method for the on-behalf-of exchange with the identity provider. If you don't specify this configuration, we use the provider level client authentication method.
   *
   * @public
   */
  onBehalfOfAuthenticationConfig?: OnBehalfOfAuthenticationConfig | undefined;
}

/**
 * Contains the KMS key configuration for a JWT client assertion.
 *
 * @public
 */
export interface KmsKeySourceType {
  /**
   * The Amazon Resource Name (ARN) of the KMS key used to sign the JWT client assertion. The key must be an asymmetric key with key usage SIGN_VERIFY and a key spec compatible with the configured signing algorithm.
   *
   * @public
   */
  kmsKeyArn: string | undefined;
}

/**
 * Contains the private key source configuration for a JWT client assertion.
 *
 * @public
 */
export type PrivateKeySource =
  | PrivateKeySource.KmsKeySourceMember
  | PrivateKeySource.$UnknownMember;

/**
 * @public
 */
export namespace PrivateKeySource {
  /**
   * The KMS key source for the JWT client assertion.
   *
   * @public
   */
  export interface KmsKeySourceMember {
    kmsKeySource: KmsKeySourceType;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    kmsKeySource?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    kmsKeySource: (value: KmsKeySourceType) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The private key configuration for private_key_jwt client authentication.
 *
 * @public
 */
export interface PrivateKeyJwtConfig {
  /**
   * The private key source for the JWT client assertion.
   *
   * @public
   */
  privateKeySource?: PrivateKeySource | undefined;

  /**
   * The algorithm used to sign the JWT client assertion. Valid values are `RS256`, `PS256`, and `ES256`.
   *
   * @public
   */
  signingAlgorithm?: SigningAlgorithm | undefined;

  /**
   * A map of additional claims to include in the JWT client assertion header. Standard header claims such as `alg` and `typ` cannot be added.
   *
   * @public
   */
  additionalHeaderClaims?: Record<string, string> | undefined;

  /**
   * A map of additional claims to include in the JWT client assertion payload. Payload claims generated by the service, such as `iss`, `sub`, `jti`, and `exp`, cannot be added.
   *
   * @public
   */
  additionalPayloadClaims?: Record<string, string> | undefined;
}

/**
 * Input configuration for a custom OAuth2 provider.
 *
 * @public
 */
export interface CustomOauth2ProviderConfigInput {
  /**
   * The OAuth2 discovery information for the custom provider.
   *
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * The client ID for the custom OAuth2 provider.
   *
   * @public
   */
  clientId?: string | undefined;

  /**
   * The client secret for the custom OAuth2 provider.
   *
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * A reference to the Amazon Web Services Secrets Manager secret that stores the client secret. This includes the secret ID and the JSON key used to extract the client secret value from the secret. Required when `clientSecretSource` is set to `EXTERNAL`.
   *
   * @public
   */
  clientSecretConfig?: SecretReference | undefined;

  /**
   * The source type of the client secret. Use `MANAGED` if the secret is managed by the service, or `EXTERNAL` if you manage the secret yourself in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;

  /**
   * The configuration for on-behalf-of token exchange. This enables authentication flows that use RFC 8693 token exchange or RFC 7523 JWT authorization grants.
   *
   * @public
   */
  onBehalfOfTokenExchangeConfig?: OnBehalfOfTokenExchangeConfigType | undefined;

  /**
   * The client authentication method to use when authenticating with the token endpoint.
   *
   * @public
   */
  clientAuthenticationMethod?: ClientAuthenticationMethodType | undefined;

  /**
   * The private_key_jwt client authentication configuration for this credential provider. When specified, the credential provider uses JWT client assertions to authenticate with the token endpoint.
   *
   * @public
   */
  privateKeyJwtConfig?: PrivateKeyJwtConfig | undefined;

  /**
   * The default private endpoint for the custom OAuth2 provider, enabling secure connectivity through a VPC Lattice resource configuration.
   *
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * The private endpoint overrides for the custom OAuth2 provider configuration.
   *
   * @public
   */
  privateEndpointOverrides?: PrivateEndpointOverride[] | undefined;
}

/**
 * Input configuration for a GitHub OAuth2 provider.
 *
 * @public
 */
export interface GithubOauth2ProviderConfigInput {
  /**
   * The client ID for the GitHub OAuth2 provider.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * The client secret for the GitHub OAuth2 provider.
   *
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * A reference to the Amazon Web Services Secrets Manager secret that stores the client secret. This includes the secret ID and the JSON key used to extract the client secret value from the secret. Required when `clientSecretSource` is set to `EXTERNAL`.
   *
   * @public
   */
  clientSecretConfig?: SecretReference | undefined;

  /**
   * The source type of the client secret. Use `MANAGED` if the secret is managed by the service, or `EXTERNAL` if you manage the secret yourself in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;
}

/**
 * Input configuration for a Google OAuth2 provider.
 *
 * @public
 */
export interface GoogleOauth2ProviderConfigInput {
  /**
   * The client ID for the Google OAuth2 provider.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * The client secret for the Google OAuth2 provider.
   *
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * A reference to the Amazon Web Services Secrets Manager secret that stores the client secret. This includes the secret ID and the JSON key used to extract the client secret value from the secret. Required when `clientSecretSource` is set to `EXTERNAL`.
   *
   * @public
   */
  clientSecretConfig?: SecretReference | undefined;

  /**
   * The source type of the client secret. Use `MANAGED` if the secret is managed by the service, or `EXTERNAL` if you manage the secret yourself in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;
}

/**
 * Configuration settings for connecting to a supported OAuth2 provider. This includes client credentials and OAuth2 discovery information for providers that have built-in support.
 *
 * @public
 */
export interface IncludedOauth2ProviderConfigInput {
  /**
   * The client ID for the supported OAuth2 provider. This identifier is assigned by the OAuth2 provider when you register your application.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * The client secret for the supported OAuth2 provider. This secret is assigned by the OAuth2 provider and used along with the client ID to authenticate your application.
   *
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * A reference to the Amazon Web Services Secrets Manager secret that stores the client secret. This includes the secret ID and the JSON key used to extract the client secret value from the secret. Required when `clientSecretSource` is set to `EXTERNAL`.
   *
   * @public
   */
  clientSecretConfig?: SecretReference | undefined;

  /**
   * The source type of the client secret. Use `MANAGED` if the secret is managed by the service, or `EXTERNAL` if you manage the secret yourself in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;

  /**
   * Token issuer of your isolated OAuth2 application tenant. This URL identifies the authorization server that issues tokens for this provider.
   *
   * @public
   */
  issuer?: string | undefined;

  /**
   * OAuth2 authorization endpoint for your isolated OAuth2 application tenant. This is where users are redirected to authenticate and authorize access to their resources.
   *
   * @public
   */
  authorizationEndpoint?: string | undefined;

  /**
   * OAuth2 token endpoint for your isolated OAuth2 application tenant. This is where authorization codes are exchanged for access tokens.
   *
   * @public
   */
  tokenEndpoint?: string | undefined;
}

/**
 * Configuration settings for connecting to LinkedIn services using OAuth2 authentication. This includes the client credentials required to authenticate with LinkedIn's OAuth2 authorization server.
 *
 * @public
 */
export interface LinkedinOauth2ProviderConfigInput {
  /**
   * The client ID for the LinkedIn OAuth2 provider. This identifier is assigned by LinkedIn when you register your application.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * The client secret for the LinkedIn OAuth2 provider. This secret is assigned by LinkedIn and used along with the client ID to authenticate your application.
   *
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * A reference to the Amazon Web Services Secrets Manager secret that stores the client secret. This includes the secret ID and the JSON key used to extract the client secret value from the secret. Required when `clientSecretSource` is set to `EXTERNAL`.
   *
   * @public
   */
  clientSecretConfig?: SecretReference | undefined;

  /**
   * The source type of the client secret. Use `MANAGED` if the secret is managed by the service, or `EXTERNAL` if you manage the secret yourself in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;
}

/**
 * Input configuration for a Microsoft OAuth2 provider.
 *
 * @public
 */
export interface MicrosoftOauth2ProviderConfigInput {
  /**
   * The client ID for the Microsoft OAuth2 provider.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * The client secret for the Microsoft OAuth2 provider.
   *
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * A reference to the Amazon Web Services Secrets Manager secret that stores the client secret. This includes the secret ID and the JSON key used to extract the client secret value from the secret. Required when `clientSecretSource` is set to `EXTERNAL`.
   *
   * @public
   */
  clientSecretConfig?: SecretReference | undefined;

  /**
   * The source type of the client secret. Use `MANAGED` if the secret is managed by the service, or `EXTERNAL` if you manage the secret yourself in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;

  /**
   * The Microsoft Entra ID (formerly Azure AD) tenant ID for your organization. This identifies the specific tenant within Microsoft's identity platform where your application is registered.
   *
   * @public
   */
  tenantId?: string | undefined;
}

/**
 * Input configuration for a Salesforce OAuth2 provider.
 *
 * @public
 */
export interface SalesforceOauth2ProviderConfigInput {
  /**
   * The client ID for the Salesforce OAuth2 provider.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * The client secret for the Salesforce OAuth2 provider.
   *
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * A reference to the Amazon Web Services Secrets Manager secret that stores the client secret. This includes the secret ID and the JSON key used to extract the client secret value from the secret. Required when `clientSecretSource` is set to `EXTERNAL`.
   *
   * @public
   */
  clientSecretConfig?: SecretReference | undefined;

  /**
   * The source type of the client secret. Use `MANAGED` if the secret is managed by the service, or `EXTERNAL` if you manage the secret yourself in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;
}

/**
 * Input configuration for a Slack OAuth2 provider.
 *
 * @public
 */
export interface SlackOauth2ProviderConfigInput {
  /**
   * The client ID for the Slack OAuth2 provider.
   *
   * @public
   */
  clientId: string | undefined;

  /**
   * The client secret for the Slack OAuth2 provider.
   *
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * A reference to the Amazon Web Services Secrets Manager secret that stores the client secret. This includes the secret ID and the JSON key used to extract the client secret value from the secret. Required when `clientSecretSource` is set to `EXTERNAL`.
   *
   * @public
   */
  clientSecretConfig?: SecretReference | undefined;

  /**
   * The source type of the client secret. Use `MANAGED` if the secret is managed by the service, or `EXTERNAL` if you manage the secret yourself in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;
}

/**
 * Contains the input configuration for an OAuth2 provider.
 *
 * @public
 */
export type Oauth2ProviderConfigInput =
  | Oauth2ProviderConfigInput.AtlassianOauth2ProviderConfigMember
  | Oauth2ProviderConfigInput.CustomOauth2ProviderConfigMember
  | Oauth2ProviderConfigInput.GithubOauth2ProviderConfigMember
  | Oauth2ProviderConfigInput.GoogleOauth2ProviderConfigMember
  | Oauth2ProviderConfigInput.IncludedOauth2ProviderConfigMember
  | Oauth2ProviderConfigInput.LinkedinOauth2ProviderConfigMember
  | Oauth2ProviderConfigInput.MicrosoftOauth2ProviderConfigMember
  | Oauth2ProviderConfigInput.SalesforceOauth2ProviderConfigMember
  | Oauth2ProviderConfigInput.SlackOauth2ProviderConfigMember
  | Oauth2ProviderConfigInput.$UnknownMember;

/**
 * @public
 */
export namespace Oauth2ProviderConfigInput {
  /**
   * The configuration for a custom OAuth2 provider.
   *
   * @public
   */
  export interface CustomOauth2ProviderConfigMember {
    customOauth2ProviderConfig: CustomOauth2ProviderConfigInput;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * The configuration for a Google OAuth2 provider.
   *
   * @public
   */
  export interface GoogleOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig: GoogleOauth2ProviderConfigInput;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * The configuration for a GitHub OAuth2 provider.
   *
   * @public
   */
  export interface GithubOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig: GithubOauth2ProviderConfigInput;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * The configuration for a Slack OAuth2 provider.
   *
   * @public
   */
  export interface SlackOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig: SlackOauth2ProviderConfigInput;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * The configuration for a Salesforce OAuth2 provider.
   *
   * @public
   */
  export interface SalesforceOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig: SalesforceOauth2ProviderConfigInput;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * The configuration for a Microsoft OAuth2 provider.
   *
   * @public
   */
  export interface MicrosoftOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig: MicrosoftOauth2ProviderConfigInput;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * Configuration settings for Atlassian OAuth2 provider integration.
   *
   * @public
   */
  export interface AtlassianOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig: AtlassianOauth2ProviderConfigInput;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * Configuration settings for LinkedIn OAuth2 provider integration.
   *
   * @public
   */
  export interface LinkedinOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig: LinkedinOauth2ProviderConfigInput;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * The configuration for a non-custom OAuth2 provider. This includes settings for supported OAuth2 providers that have built-in integration support.
   *
   * @public
   */
  export interface IncludedOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig: IncludedOauth2ProviderConfigInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customOauth2ProviderConfig: (value: CustomOauth2ProviderConfigInput) => T;
    googleOauth2ProviderConfig: (value: GoogleOauth2ProviderConfigInput) => T;
    githubOauth2ProviderConfig: (value: GithubOauth2ProviderConfigInput) => T;
    slackOauth2ProviderConfig: (value: SlackOauth2ProviderConfigInput) => T;
    salesforceOauth2ProviderConfig: (value: SalesforceOauth2ProviderConfigInput) => T;
    microsoftOauth2ProviderConfig: (value: MicrosoftOauth2ProviderConfigInput) => T;
    atlassianOauth2ProviderConfig: (value: AtlassianOauth2ProviderConfigInput) => T;
    linkedinOauth2ProviderConfig: (value: LinkedinOauth2ProviderConfigInput) => T;
    includedOauth2ProviderConfig: (value: IncludedOauth2ProviderConfigInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateOauth2CredentialProviderRequest {
  /**
   * The name of the OAuth2 credential provider. The name must be unique within your account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The vendor of the OAuth2 credential provider. This specifies which OAuth2 implementation to use.
   *
   * @public
   */
  credentialProviderVendor: CredentialProviderVendorType | undefined;

  /**
   * The configuration settings for the OAuth2 provider, including client ID, client secret, and other vendor-specific settings.
   *
   * @public
   */
  oauth2ProviderConfigInput: Oauth2ProviderConfigInput | undefined;

  /**
   * A map of tag keys and values to assign to the OAuth2 credential provider. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The configuration details returned for an Atlassian OAuth2 provider, including the client ID and OAuth2 discovery information.
 *
 * @public
 */
export interface AtlassianOauth2ProviderConfigOutput {
  /**
   * Contains the discovery information for an OAuth2 provider.
   *
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * The client ID for the Atlassian OAuth2 provider.
   *
   * @public
   */
  clientId?: string | undefined;
}

/**
 * Output configuration for a custom OAuth2 provider.
 *
 * @public
 */
export interface CustomOauth2ProviderConfigOutput {
  /**
   * The OAuth2 discovery information for the custom provider.
   *
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * The client ID for the custom OAuth2 provider.
   *
   * @public
   */
  clientId?: string | undefined;

  /**
   * The configuration for on-behalf-of token exchange.
   *
   * @public
   */
  onBehalfOfTokenExchangeConfig?: OnBehalfOfTokenExchangeConfigType | undefined;

  /**
   * The client authentication method used when authenticating with the token endpoint.
   *
   * @public
   */
  clientAuthenticationMethod?: ClientAuthenticationMethodType | undefined;

  /**
   * The default private endpoint for the custom OAuth2 provider, enabling secure connectivity through a VPC Lattice resource configuration.
   *
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * The private endpoint overrides for the custom OAuth2 provider configuration.
   *
   * @public
   */
  privateEndpointOverrides?: PrivateEndpointOverride[] | undefined;

  /**
   * The configuration for private_key_jwt client authentication used by this OAuth2 credential provider.
   *
   * @public
   */
  privateKeyJwtConfig?: PrivateKeyJwtConfig | undefined;
}

/**
 * Output configuration for a GitHub OAuth2 provider.
 *
 * @public
 */
export interface GithubOauth2ProviderConfigOutput {
  /**
   * The OAuth2 discovery information for the GitHub provider.
   *
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * The client ID for the GitHub OAuth2 provider.
   *
   * @public
   */
  clientId?: string | undefined;
}

/**
 * Output configuration for a Google OAuth2 provider.
 *
 * @public
 */
export interface GoogleOauth2ProviderConfigOutput {
  /**
   * The OAuth2 discovery information for the Google provider.
   *
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * The client ID for the Google OAuth2 provider.
   *
   * @public
   */
  clientId?: string | undefined;
}

/**
 * The configuration details returned for a supported OAuth2 provider, including client credentials and OAuth2 discovery information.
 *
 * @public
 */
export interface IncludedOauth2ProviderConfigOutput {
  /**
   * Contains the discovery information for an OAuth2 provider.
   *
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * The client ID for the supported OAuth2 provider.
   *
   * @public
   */
  clientId?: string | undefined;
}

/**
 * The configuration details returned for a LinkedIn OAuth2 provider, including the client ID and OAuth2 discovery information.
 *
 * @public
 */
export interface LinkedinOauth2ProviderConfigOutput {
  /**
   * Contains the discovery information for an OAuth2 provider.
   *
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * The client ID for the LinkedIn OAuth2 provider.
   *
   * @public
   */
  clientId?: string | undefined;
}

/**
 * Output configuration for a Microsoft OAuth2 provider.
 *
 * @public
 */
export interface MicrosoftOauth2ProviderConfigOutput {
  /**
   * The OAuth2 discovery information for the Microsoft provider.
   *
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * The client ID for the Microsoft OAuth2 provider.
   *
   * @public
   */
  clientId?: string | undefined;
}

/**
 * Output configuration for a Salesforce OAuth2 provider.
 *
 * @public
 */
export interface SalesforceOauth2ProviderConfigOutput {
  /**
   * The OAuth2 discovery information for the Salesforce provider.
   *
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * The client ID for the Salesforce OAuth2 provider.
   *
   * @public
   */
  clientId?: string | undefined;
}

/**
 * Output configuration for a Slack OAuth2 provider.
 *
 * @public
 */
export interface SlackOauth2ProviderConfigOutput {
  /**
   * The OAuth2 discovery information for the Slack provider.
   *
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * The client ID for the Slack OAuth2 provider.
   *
   * @public
   */
  clientId?: string | undefined;
}

/**
 * Contains the output configuration for an OAuth2 provider.
 *
 * @public
 */
export type Oauth2ProviderConfigOutput =
  | Oauth2ProviderConfigOutput.AtlassianOauth2ProviderConfigMember
  | Oauth2ProviderConfigOutput.CustomOauth2ProviderConfigMember
  | Oauth2ProviderConfigOutput.GithubOauth2ProviderConfigMember
  | Oauth2ProviderConfigOutput.GoogleOauth2ProviderConfigMember
  | Oauth2ProviderConfigOutput.IncludedOauth2ProviderConfigMember
  | Oauth2ProviderConfigOutput.LinkedinOauth2ProviderConfigMember
  | Oauth2ProviderConfigOutput.MicrosoftOauth2ProviderConfigMember
  | Oauth2ProviderConfigOutput.SalesforceOauth2ProviderConfigMember
  | Oauth2ProviderConfigOutput.SlackOauth2ProviderConfigMember
  | Oauth2ProviderConfigOutput.$UnknownMember;

/**
 * @public
 */
export namespace Oauth2ProviderConfigOutput {
  /**
   * The output configuration for a custom OAuth2 provider.
   *
   * @public
   */
  export interface CustomOauth2ProviderConfigMember {
    customOauth2ProviderConfig: CustomOauth2ProviderConfigOutput;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * The output configuration for a Google OAuth2 provider.
   *
   * @public
   */
  export interface GoogleOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig: GoogleOauth2ProviderConfigOutput;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * The output configuration for a GitHub OAuth2 provider.
   *
   * @public
   */
  export interface GithubOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig: GithubOauth2ProviderConfigOutput;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * The output configuration for a Slack OAuth2 provider.
   *
   * @public
   */
  export interface SlackOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig: SlackOauth2ProviderConfigOutput;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * The output configuration for a Salesforce OAuth2 provider.
   *
   * @public
   */
  export interface SalesforceOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig: SalesforceOauth2ProviderConfigOutput;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * The output configuration for a Microsoft OAuth2 provider.
   *
   * @public
   */
  export interface MicrosoftOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig: MicrosoftOauth2ProviderConfigOutput;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * The configuration details for the Atlassian OAuth2 provider.
   *
   * @public
   */
  export interface AtlassianOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig: AtlassianOauth2ProviderConfigOutput;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * The configuration details for the LinkedIn OAuth2 provider.
   *
   * @public
   */
  export interface LinkedinOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig: LinkedinOauth2ProviderConfigOutput;
    includedOauth2ProviderConfig?: never;
    $unknown?: never;
  }

  /**
   * The configuration for a non-custom OAuth2 provider. This includes the configuration details for supported OAuth2 providers that have built-in integration support.
   *
   * @public
   */
  export interface IncludedOauth2ProviderConfigMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig: IncludedOauth2ProviderConfigOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customOauth2ProviderConfig?: never;
    googleOauth2ProviderConfig?: never;
    githubOauth2ProviderConfig?: never;
    slackOauth2ProviderConfig?: never;
    salesforceOauth2ProviderConfig?: never;
    microsoftOauth2ProviderConfig?: never;
    atlassianOauth2ProviderConfig?: never;
    linkedinOauth2ProviderConfig?: never;
    includedOauth2ProviderConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customOauth2ProviderConfig: (value: CustomOauth2ProviderConfigOutput) => T;
    googleOauth2ProviderConfig: (value: GoogleOauth2ProviderConfigOutput) => T;
    githubOauth2ProviderConfig: (value: GithubOauth2ProviderConfigOutput) => T;
    slackOauth2ProviderConfig: (value: SlackOauth2ProviderConfigOutput) => T;
    salesforceOauth2ProviderConfig: (value: SalesforceOauth2ProviderConfigOutput) => T;
    microsoftOauth2ProviderConfig: (value: MicrosoftOauth2ProviderConfigOutput) => T;
    atlassianOauth2ProviderConfig: (value: AtlassianOauth2ProviderConfigOutput) => T;
    linkedinOauth2ProviderConfig: (value: LinkedinOauth2ProviderConfigOutput) => T;
    includedOauth2ProviderConfig: (value: IncludedOauth2ProviderConfigOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateOauth2CredentialProviderResponse {
  /**
   * The Amazon Resource Name (ARN) of the client secret in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  clientSecretArn: Secret | undefined;

  /**
   * The JSON key used to extract the client secret value from the Amazon Web Services Secrets Manager secret.
   *
   * @public
   */
  clientSecretJsonKey?: string | undefined;

  /**
   * The source type of the client secret. Either `MANAGED` if the secret is managed by the service, or `EXTERNAL` if managed by the user in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;

  /**
   * The name of the OAuth2 credential provider.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the OAuth2 credential provider.
   *
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * Callback URL to register on the OAuth2 credential provider as an allowed callback URL. This URL is where the OAuth2 authorization server redirects users after they complete the authorization flow.
   *
   * @public
   */
  callbackUrl?: string | undefined;

  /**
   * Contains the output configuration for an OAuth2 provider.
   *
   * @public
   */
  oauth2ProviderConfigOutput?: Oauth2ProviderConfigOutput | undefined;

  /**
   * The current status of the OAuth2 credential provider.
   *
   * @public
   */
  status?: Status | undefined;
}

/**
 * @public
 */
export interface DeleteOauth2CredentialProviderRequest {
  /**
   * The name of the OAuth2 credential provider to delete.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteOauth2CredentialProviderResponse {}

/**
 * @public
 */
export interface GetOauth2CredentialProviderRequest {
  /**
   * The name of the OAuth2 credential provider to retrieve.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetOauth2CredentialProviderResponse {
  /**
   * The Amazon Resource Name (ARN) of the client secret in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  clientSecretArn: Secret | undefined;

  /**
   * The JSON key used to extract the client secret value from the Amazon Web Services Secrets Manager secret.
   *
   * @public
   */
  clientSecretJsonKey?: string | undefined;

  /**
   * The source type of the client secret. Either `MANAGED` if the secret is managed by the service, or `EXTERNAL` if managed by the user in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;

  /**
   * The name of the OAuth2 credential provider.
   *
   * @public
   */
  name: string | undefined;

  /**
   * ARN of the credential provider requested.
   *
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * The vendor of the OAuth2 credential provider.
   *
   * @public
   */
  credentialProviderVendor: CredentialProviderVendorType | undefined;

  /**
   * Callback URL to register on the OAuth2 credential provider as an allowed callback URL. This URL is where the OAuth2 authorization server redirects users after they complete the authorization flow.
   *
   * @public
   */
  callbackUrl?: string | undefined;

  /**
   * The configuration output for the OAuth2 provider.
   *
   * @public
   */
  oauth2ProviderConfigOutput: Oauth2ProviderConfigOutput | undefined;

  /**
   * The timestamp when the OAuth2 credential provider was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the OAuth2 credential provider was last updated.
   *
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * The current status of the OAuth2 credential provider.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The reason for failure if the OAuth2 credential provider is in a failed state.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListOauth2CredentialProvidersRequest {
  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains information about an OAuth2 credential provider.
 *
 * @public
 */
export interface Oauth2CredentialProviderItem {
  /**
   * The name of the OAuth2 credential provider.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The vendor of the OAuth2 credential provider.
   *
   * @public
   */
  credentialProviderVendor: CredentialProviderVendorType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the OAuth2 credential provider.
   *
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * The timestamp when the OAuth2 credential provider was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the OAuth2 credential provider was last updated.
   *
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListOauth2CredentialProvidersResponse {
  /**
   * The list of OAuth2 credential providers.
   *
   * @public
   */
  credentialProviders: Oauth2CredentialProviderItem[] | undefined;

  /**
   * Pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOauth2CredentialProviderRequest {
  /**
   * The name of the OAuth2 credential provider to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The vendor of the OAuth2 credential provider.
   *
   * @public
   */
  credentialProviderVendor: CredentialProviderVendorType | undefined;

  /**
   * The configuration input for the OAuth2 provider.
   *
   * @public
   */
  oauth2ProviderConfigInput: Oauth2ProviderConfigInput | undefined;
}

/**
 * @public
 */
export interface UpdateOauth2CredentialProviderResponse {
  /**
   * The Amazon Resource Name (ARN) of the client secret in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  clientSecretArn: Secret | undefined;

  /**
   * The JSON key used to extract the client secret value from the Amazon Web Services Secrets Manager secret.
   *
   * @public
   */
  clientSecretJsonKey?: string | undefined;

  /**
   * The source type of the client secret. Either `MANAGED` if the secret is managed by the service, or `EXTERNAL` if managed by the user in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;

  /**
   * The name of the OAuth2 credential provider.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The vendor of the OAuth2 credential provider.
   *
   * @public
   */
  credentialProviderVendor: CredentialProviderVendorType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the OAuth2 credential provider.
   *
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * Callback URL to register on the OAuth2 credential provider as an allowed callback URL. This URL is where the OAuth2 authorization server redirects users after they complete the authorization flow.
   *
   * @public
   */
  callbackUrl?: string | undefined;

  /**
   * The configuration output for the OAuth2 provider.
   *
   * @public
   */
  oauth2ProviderConfigOutput: Oauth2ProviderConfigOutput | undefined;

  /**
   * The timestamp when the OAuth2 credential provider was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the OAuth2 credential provider was last updated.
   *
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * The current status of the updated OAuth2 credential provider.
   *
   * @public
   */
  status?: Status | undefined;
}

/**
 * Configuration for periodic batch evaluation clustering, specifying how often clustering jobs run.
 *
 * @public
 */
export interface ClusteringConfig {
  /**
   * The list of frequencies at which clustering batch evaluations are triggered.
   *
   * @public
   */
  frequencies: ClusteringFrequency[] | undefined;
}

/**
 * The configuration for reading agent traces from CloudWatch logs as input for online evaluation.
 *
 * @public
 */
export interface CloudWatchLogsInputConfig {
  /**
   * The list of CloudWatch log group names to monitor for agent traces.
   *
   * @public
   */
  logGroupNames?: string[] | undefined;

  /**
   * The list of CloudWatch log group name prefixes to monitor for agent traces. Specify this instead of `logGroupNames` to match log groups by prefix. Specify either `logGroupNames` or `logGroupNamePrefixes`, not both. One of the two is required.
   *
   * @public
   */
  logGroupNamePrefixes?: string[] | undefined;

  /**
   * The list of service names to filter traces within the specified log groups. Used to identify relevant agent sessions.
   *
   * @public
   */
  serviceNames: string[] | undefined;
}

/**
 * The configuration that specifies where to read agent traces for online evaluation.
 *
 * @public
 */
export type DataSourceConfig =
  | DataSourceConfig.CloudWatchLogsMember
  | DataSourceConfig.$UnknownMember;

/**
 * @public
 */
export namespace DataSourceConfig {
  /**
   * The CloudWatch logs configuration for reading agent traces from log groups.
   *
   * @public
   */
  export interface CloudWatchLogsMember {
    cloudWatchLogs: CloudWatchLogsInputConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cloudWatchLogs?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cloudWatchLogs: (value: CloudWatchLogsInputConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The reference to an evaluator used in online evaluation configurations, containing the evaluator identifier.
 *
 * @public
 */
export type EvaluatorReference =
  | EvaluatorReference.EvaluatorIdMember
  | EvaluatorReference.$UnknownMember;

/**
 * @public
 */
export namespace EvaluatorReference {
  /**
   * The unique identifier of the evaluator. Can reference builtin evaluators (e.g., Builtin.Helpfulness) or custom evaluators.
   *
   * @public
   */
  export interface EvaluatorIdMember {
    evaluatorId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    evaluatorId?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    evaluatorId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A reference to an insight analysis to run against sessions during evaluation. Insights provide deeper analysis beyond individual evaluator scores, including failure detection, user intent clustering, and execution summarization.
 *
 * @public
 */
export interface Insight {
  /**
   * The unique identifier of the insight to run.
   *
   * @public
   */
  insightId: string | undefined;
}

/**
 * The configuration for writing evaluation results to CloudWatch logs with embedded metric format (EMF) for monitoring.
 *
 * @public
 */
export interface CloudWatchOutputConfig {
  /**
   * The name of the CloudWatch log group where evaluation results will be written. An existing log group is used as-is; otherwise the service creates it, which requires the evaluation execution role to grant `logs:CreateLogGroup` on the log group. Don't specify this value when `resultDestination` is `SOURCE_LOG_GROUP`. The name can't be under the service-reserved `/aws/bedrock-agentcore/evaluations/` namespace, apart from this configuration's own service-managed default group.
   *
   * @public
   */
  logGroupName?: string | undefined;

  /**
   * The CloudWatch metrics namespace where evaluation result metrics are published. If you omit this value, the service publishes metrics to `Bedrock-AgentCore/Evaluations`. This value can't begin with `AWS/`.
   *
   * @public
   */
  metricsNamespace?: string | undefined;

  /**
   * The destination where evaluation results are written. Valid values:
   *
   * - `DEDICATED_LOG_GROUP` (default) – Writes results to a dedicated result log group.
   * - `SOURCE_LOG_GROUP` – Writes results back to the log group that the agent traces were read from. If you use this value, don't specify `logGroupName`.
   *
   * @public
   */
  resultDestination?: ResultDestination | undefined;
}

/**
 * The configuration that specifies where evaluation results should be written for monitoring and analysis.
 *
 * @public
 */
export interface OutputConfig {
  /**
   * The CloudWatch configuration for writing evaluation results to CloudWatch logs with embedded metric format.
   *
   * @public
   */
  cloudWatchConfig: CloudWatchOutputConfig | undefined;
}

/**
 * The value used in filter comparisons, supporting different data types for flexible filtering criteria.
 *
 * @public
 */
export type FilterValue =
  | FilterValue.BooleanValueMember
  | FilterValue.DoubleValueMember
  | FilterValue.StringValueMember
  | FilterValue.$UnknownMember;

/**
 * @public
 */
export namespace FilterValue {
  /**
   * The string value for text-based filtering.
   *
   * @public
   */
  export interface StringValueMember {
    stringValue: string;
    doubleValue?: never;
    booleanValue?: never;
    $unknown?: never;
  }

  /**
   * The numeric value for numerical filtering and comparisons.
   *
   * @public
   */
  export interface DoubleValueMember {
    stringValue?: never;
    doubleValue: number;
    booleanValue?: never;
    $unknown?: never;
  }

  /**
   * The boolean value for true/false filtering conditions.
   *
   * @public
   */
  export interface BooleanValueMember {
    stringValue?: never;
    doubleValue?: never;
    booleanValue: boolean;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    stringValue?: never;
    doubleValue?: never;
    booleanValue?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    stringValue: (value: string) => T;
    doubleValue: (value: number) => T;
    booleanValue: (value: boolean) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The filter that applies conditions to agent traces during online evaluation to determine which traces should be evaluated.
 *
 * @public
 */
export interface Filter {
  /**
   * The key or field name to filter on within the agent trace data.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The comparison operator to use for filtering.
   *
   * @public
   */
  operator: FilterOperator | undefined;

  /**
   * The value to compare against using the specified operator.
   *
   * @public
   */
  value: FilterValue | undefined;
}

/**
 * The configuration that controls what percentage of agent traces are sampled for evaluation to manage evaluation volume and costs.
 *
 * @public
 */
export interface SamplingConfig {
  /**
   * The percentage of agent traces to sample for evaluation, ranging from 0.01% to 100%.
   *
   * @public
   */
  samplingPercentage: number | undefined;
}

/**
 * The configuration that defines how agent sessions are detected and when they are considered complete for evaluation.
 *
 * @public
 */
export interface SessionConfig {
  /**
   * The number of minutes of inactivity after which an agent session is considered complete and ready for evaluation. Default is 15 minutes.
   *
   * @public
   */
  sessionTimeoutMinutes: number | undefined;
}

/**
 * The evaluation rule that defines sampling configuration, filtering criteria, and session detection settings for online evaluation.
 *
 * @public
 */
export interface Rule {
  /**
   * The sampling configuration that determines what percentage of agent traces to evaluate.
   *
   * @public
   */
  samplingConfig: SamplingConfig | undefined;

  /**
   * The list of filters that determine which agent traces should be included in the evaluation based on trace properties.
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * The session configuration that defines timeout settings for detecting when agent sessions are complete and ready for evaluation.
   *
   * @public
   */
  sessionConfig?: SessionConfig | undefined;
}

/**
 * @public
 */
export interface CreateOnlineEvaluationConfigRequest {
  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the online evaluation configuration. Must be unique within your account.
   *
   * @public
   */
  onlineEvaluationConfigName: string | undefined;

  /**
   * The description of the online evaluation configuration that explains its monitoring purpose and scope.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The evaluation rule that defines sampling configuration, filters, and session detection settings for the online evaluation.
   *
   * @public
   */
  rule: Rule | undefined;

  /**
   * The data source configuration that specifies CloudWatch log groups and service names to monitor for agent traces.
   *
   * @public
   */
  dataSourceConfig: DataSourceConfig | undefined;

  /**
   * The list of evaluators to apply during online evaluation. Can include both built-in evaluators and custom evaluators created with `CreateEvaluator`.
   *
   * @public
   */
  evaluators?: EvaluatorReference[] | undefined;

  /**
   * The list of insight types to run against agent sessions.
   *
   * @public
   */
  insights?: Insight[] | undefined;

  /**
   * Configuration for periodic batch evaluation clustering of insight results.
   *
   * @public
   */
  clusteringConfig?: ClusteringConfig | undefined;

  /**
   * The configuration that specifies where evaluation results should be written for monitoring and analysis.
   *
   * @public
   */
  outputConfig?: OutputConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that grants permissions to read from CloudWatch logs, write evaluation results, and invoke Amazon Bedrock models for evaluation. If the configuration references evaluators encrypted with a customer managed KMS key, this role must also have `kms:Decrypt` permission on the KMS key. The service validates this permission at configuration creation time. For more information, see [Encryption at rest for AgentCore Evaluations](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/evaluations-encryption.html).
   *
   * @public
   */
  evaluationExecutionRoleArn: string | undefined;

  /**
   * Whether to enable the online evaluation configuration immediately upon creation. If true, evaluation begins automatically.
   *
   * @public
   */
  enableOnCreate: boolean | undefined;

  /**
   * A map of tag keys and values to assign to an AgentCore Online Evaluation Config. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateOnlineEvaluationConfigResponse {
  /**
   * The Amazon Resource Name (ARN) of the created online evaluation configuration.
   *
   * @public
   */
  onlineEvaluationConfigArn: string | undefined;

  /**
   * The unique identifier of the created online evaluation configuration.
   *
   * @public
   */
  onlineEvaluationConfigId: string | undefined;

  /**
   * The timestamp when the online evaluation configuration was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The configuration that specifies where evaluation results should be written for monitoring and analysis.
   *
   * @public
   */
  outputConfig?: OutputConfig | undefined;

  /**
   * The status of the online evaluation configuration.
   *
   * @public
   */
  status: OnlineEvaluationConfigStatus | undefined;

  /**
   * The execution status indicating whether the online evaluation is currently running.
   *
   * @public
   */
  executionStatus: OnlineEvaluationExecutionStatus | undefined;

  /**
   * The reason for failure if the online evaluation configuration creation or execution failed.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface DeleteOnlineEvaluationConfigRequest {
  /**
   * The unique identifier of the online evaluation configuration to delete.
   *
   * @public
   */
  onlineEvaluationConfigId: string | undefined;
}

/**
 * @public
 */
export interface DeleteOnlineEvaluationConfigResponse {
  /**
   * The Amazon Resource Name (ARN) of the deleted online evaluation configuration.
   *
   * @public
   */
  onlineEvaluationConfigArn: string | undefined;

  /**
   * The unique identifier of the deleted online evaluation configuration.
   *
   * @public
   */
  onlineEvaluationConfigId: string | undefined;

  /**
   * The status of the online evaluation configuration deletion operation.
   *
   * @public
   */
  status: OnlineEvaluationConfigStatus | undefined;
}

/**
 * @public
 */
export interface GetOnlineEvaluationConfigRequest {
  /**
   * The unique identifier of the online evaluation configuration to retrieve.
   *
   * @public
   */
  onlineEvaluationConfigId: string | undefined;
}

/**
 * @public
 */
export interface GetOnlineEvaluationConfigResponse {
  /**
   * The Amazon Resource Name (ARN) of the online evaluation configuration.
   *
   * @public
   */
  onlineEvaluationConfigArn: string | undefined;

  /**
   * The unique identifier of the online evaluation configuration.
   *
   * @public
   */
  onlineEvaluationConfigId: string | undefined;

  /**
   * The name of the online evaluation configuration.
   *
   * @public
   */
  onlineEvaluationConfigName: string | undefined;

  /**
   * The description of the online evaluation configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The evaluation rule containing sampling configuration, filters, and session settings.
   *
   * @public
   */
  rule: Rule | undefined;

  /**
   * The data source configuration specifying CloudWatch log groups and service names to monitor.
   *
   * @public
   */
  dataSourceConfig: DataSourceConfig | undefined;

  /**
   * The list of evaluators applied during online evaluation.
   *
   * @public
   */
  evaluators?: EvaluatorReference[] | undefined;

  /**
   * The list of insight types configured for this evaluation.
   *
   * @public
   */
  insights?: Insight[] | undefined;

  /**
   * The clustering configuration for periodic batch evaluation.
   *
   * @public
   */
  clusteringConfig?: ClusteringConfig | undefined;

  /**
   * The output configuration specifying where evaluation results are written.
   *
   * @public
   */
  outputConfig?: OutputConfig | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used for evaluation execution.
   *
   * @public
   */
  evaluationExecutionRoleArn?: string | undefined;

  /**
   * The status of the online evaluation configuration.
   *
   * @public
   */
  status: OnlineEvaluationConfigStatus | undefined;

  /**
   * The execution status indicating whether the online evaluation is currently running.
   *
   * @public
   */
  executionStatus: OnlineEvaluationExecutionStatus | undefined;

  /**
   * The timestamp when the online evaluation configuration was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the online evaluation configuration was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The reason for failure if the online evaluation configuration execution failed.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListOnlineEvaluationConfigsRequest {
  /**
   * The pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of online evaluation configurations to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary information about an online evaluation configuration, including basic metadata and execution status.
 *
 * @public
 */
export interface OnlineEvaluationConfigSummary {
  /**
   * The Amazon Resource Name (ARN) of the online evaluation configuration.
   *
   * @public
   */
  onlineEvaluationConfigArn: string | undefined;

  /**
   * The unique identifier of the online evaluation configuration.
   *
   * @public
   */
  onlineEvaluationConfigId: string | undefined;

  /**
   * The name of the online evaluation configuration.
   *
   * @public
   */
  onlineEvaluationConfigName: string | undefined;

  /**
   * The description of the online evaluation configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the online evaluation configuration.
   *
   * @public
   */
  status: OnlineEvaluationConfigStatus | undefined;

  /**
   * The execution status indicating whether the online evaluation is currently running.
   *
   * @public
   */
  executionStatus: OnlineEvaluationExecutionStatus | undefined;

  /**
   * The timestamp when the online evaluation configuration was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the online evaluation configuration was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The reason for failure if the online evaluation configuration execution failed.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The list of insight types configured for this evaluation.
   *
   * @public
   */
  insights?: Insight[] | undefined;

  /**
   * The clustering configuration for periodic batch evaluation.
   *
   * @public
   */
  clusteringConfig?: ClusteringConfig | undefined;
}

/**
 * @public
 */
export interface ListOnlineEvaluationConfigsResponse {
  /**
   * The list of online evaluation configuration summaries containing basic information about each configuration.
   *
   * @public
   */
  onlineEvaluationConfigs: OnlineEvaluationConfigSummary[] | undefined;

  /**
   * The pagination token to use in a subsequent request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOnlineEvaluationConfigRequest {
  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The unique identifier of the online evaluation configuration to update.
   *
   * @public
   */
  onlineEvaluationConfigId: string | undefined;

  /**
   * The updated description of the online evaluation configuration.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated evaluation rule containing sampling configuration, filters, and session settings.
   *
   * @public
   */
  rule?: Rule | undefined;

  /**
   * The updated data source configuration specifying CloudWatch log groups and service names to monitor.
   *
   * @public
   */
  dataSourceConfig?: DataSourceConfig | undefined;

  /**
   * The updated list of evaluators to apply during online evaluation.
   *
   * @public
   */
  evaluators?: EvaluatorReference[] | undefined;

  /**
   * The updated list of insight types to run against agent sessions.
   *
   * @public
   */
  insights?: Insight[] | undefined;

  /**
   * The updated clustering configuration for periodic batch evaluation.
   *
   * @public
   */
  clusteringConfig?: ClusteringConfig | undefined;

  /**
   * The configuration that specifies where evaluation results should be written for monitoring and analysis.
   *
   * @public
   */
  outputConfig?: OutputConfig | undefined;

  /**
   * The updated Amazon Resource Name (ARN) of the IAM role used for evaluation execution.
   *
   * @public
   */
  evaluationExecutionRoleArn?: string | undefined;

  /**
   * The updated execution status to enable or disable the online evaluation.
   *
   * @public
   */
  executionStatus?: OnlineEvaluationExecutionStatus | undefined;
}

/**
 * @public
 */
export interface UpdateOnlineEvaluationConfigResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated online evaluation configuration.
   *
   * @public
   */
  onlineEvaluationConfigArn: string | undefined;

  /**
   * The unique identifier of the updated online evaluation configuration.
   *
   * @public
   */
  onlineEvaluationConfigId: string | undefined;

  /**
   * The timestamp when the online evaluation configuration was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The status of the online evaluation configuration.
   *
   * @public
   */
  status: OnlineEvaluationConfigStatus | undefined;

  /**
   * The execution status indicating whether the online evaluation is currently running.
   *
   * @public
   */
  executionStatus: OnlineEvaluationExecutionStatus | undefined;

  /**
   * The reason for failure if the online evaluation configuration update or execution failed.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * Coinbase CDP configuration — credentials provided by Coinbase Developer Platform.
 *
 * @public
 */
export interface CoinbaseCdpConfigurationInput {
  /**
   * The API key identifier provided by Coinbase Developer Platform.
   *
   * @public
   */
  apiKeyId: string | undefined;

  /**
   * The API key secret provided by Coinbase Developer Platform.
   *
   * @public
   */
  apiKeySecret?: string | undefined;

  /**
   * The source type of the API key secret for the Coinbase Developer Platform. Use `MANAGED` if the secret is managed by the service, or `EXTERNAL` if you manage the secret yourself in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  apiKeySecretSource?: SecretSourceType | undefined;

  /**
   * A reference to the Amazon Web Services Secrets Manager secret that stores the API key secret. This includes the secret ID and the JSON key used to extract the API key secret value from the secret. Required when `apiKeySecretSource` is set to `EXTERNAL`.
   *
   * @public
   */
  apiKeySecretConfig?: SecretReference | undefined;

  /**
   * The wallet secret provided by Coinbase Developer Platform.
   *
   * @public
   */
  walletSecret?: string | undefined;

  /**
   * The source type of the wallet secret for the Coinbase Developer Platform. Use `MANAGED` if the secret is managed by the service, or `EXTERNAL` if you manage the secret yourself in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  walletSecretSource?: SecretSourceType | undefined;

  /**
   * A reference to the Amazon Web Services Secrets Manager secret that stores the wallet secret. This includes the secret ID and the JSON key used to extract the wallet secret value from the secret. Required when `walletSecretSource` is set to `EXTERNAL`.
   *
   * @public
   */
  walletSecretConfig?: SecretReference | undefined;
}

/**
 * Stripe Privy configuration — credentials provided by Stripe and Privy.
 *
 * @public
 */
export interface StripePrivyConfigurationInput {
  /**
   * The app ID provided by Privy.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * The app secret provided by Privy.
   *
   * @public
   */
  appSecret?: string | undefined;

  /**
   * The source type of the app secret. Use `MANAGED` if the secret is managed by the service, or `EXTERNAL` if you manage the secret yourself in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  appSecretSource?: SecretSourceType | undefined;

  /**
   * A reference to the Amazon Web Services Secrets Manager secret that stores the app secret. This includes the secret ID and the JSON key used to extract the app secret value from the secret. Required when `appSecretSource` is set to `EXTERNAL`.
   *
   * @public
   */
  appSecretConfig?: SecretReference | undefined;

  /**
   * The authorization private key for the Stripe Privy integration.
   *
   * @public
   */
  authorizationPrivateKey?: string | undefined;

  /**
   * The source type of the authorization private key. Use `MANAGED` if the secret is managed by the service, or `EXTERNAL` if you manage the secret yourself in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  authorizationPrivateKeySource?: SecretSourceType | undefined;

  /**
   * A reference to the Amazon Web Services Secrets Manager secret that stores the authorization private key. This includes the secret ID and the JSON key used to extract the authorization private key value from the secret. Required when `authorizationPrivateKeySource` is set to `EXTERNAL`.
   *
   * @public
   */
  authorizationPrivateKeyConfig?: SecretReference | undefined;

  /**
   * The authorization ID for the Stripe Privy integration.
   *
   * @public
   */
  authorizationId: string | undefined;
}

/**
 * Provider configuration input — contains secrets for creation and update. Varies by vendor type.
 *
 * @public
 */
export type PaymentProviderConfigurationInput =
  | PaymentProviderConfigurationInput.CoinbaseCdpConfigurationMember
  | PaymentProviderConfigurationInput.StripePrivyConfigurationMember
  | PaymentProviderConfigurationInput.$UnknownMember;

/**
 * @public
 */
export namespace PaymentProviderConfigurationInput {
  /**
   * The Coinbase CDP configuration.
   *
   * @public
   */
  export interface CoinbaseCdpConfigurationMember {
    coinbaseCdpConfiguration: CoinbaseCdpConfigurationInput;
    stripePrivyConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The Stripe Privy configuration.
   *
   * @public
   */
  export interface StripePrivyConfigurationMember {
    coinbaseCdpConfiguration?: never;
    stripePrivyConfiguration: StripePrivyConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    coinbaseCdpConfiguration?: never;
    stripePrivyConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    coinbaseCdpConfiguration: (value: CoinbaseCdpConfigurationInput) => T;
    stripePrivyConfiguration: (value: StripePrivyConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreatePaymentCredentialProviderRequest {
  /**
   * Unique name for the payment credential provider.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The vendor type for the payment credential provider (e.g., CoinbaseCDP, StripePrivy).
   *
   * @public
   */
  credentialProviderVendor: PaymentCredentialProviderVendorType | undefined;

  /**
   * Configuration specific to the vendor, including API credentials.
   *
   * @public
   */
  providerConfigurationInput: PaymentProviderConfigurationInput | undefined;

  /**
   * Optional tags for resource organization.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Coinbase CDP configuration output with secret ARNs.
 *
 * @public
 */
export interface CoinbaseCdpConfigurationOutput {
  /**
   * The API key identifier provided by Coinbase Developer Platform.
   *
   * @public
   */
  apiKeyId: string | undefined;

  /**
   * Contains information about a secret in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  apiKeySecretArn: Secret | undefined;

  /**
   * The JSON key used to extract the API key secret value from the Amazon Web Services Secrets Manager secret.
   *
   * @public
   */
  apiKeySecretJsonKey?: string | undefined;

  /**
   * The source type of the API key secret. Either `MANAGED` if the secret is managed by the service, or `EXTERNAL` if managed by the user in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  apiKeySecretSource?: SecretSourceType | undefined;

  /**
   * Contains information about a secret in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  walletSecretArn: Secret | undefined;

  /**
   * The JSON key used to extract the wallet secret value from the Amazon Web Services Secrets Manager secret.
   *
   * @public
   */
  walletSecretJsonKey?: string | undefined;

  /**
   * The source type of the wallet secret. Either `MANAGED` if the secret is managed by the service, or `EXTERNAL` if managed by the user in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  walletSecretSource?: SecretSourceType | undefined;
}

/**
 * Stripe Privy configuration output with secret ARNs.
 *
 * @public
 */
export interface StripePrivyConfigurationOutput {
  /**
   * The app ID provided by Privy.
   *
   * @public
   */
  appId: string | undefined;

  /**
   * Contains information about a secret in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  appSecretArn: Secret | undefined;

  /**
   * The JSON key used to extract the app secret value from the Amazon Web Services Secrets Manager secret.
   *
   * @public
   */
  appSecretJsonKey?: string | undefined;

  /**
   * The source type of the app secret. Either `MANAGED` if the secret is managed by the service, or `EXTERNAL` if managed by the user in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  appSecretSource?: SecretSourceType | undefined;

  /**
   * Contains information about a secret in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  authorizationPrivateKeyArn: Secret | undefined;

  /**
   * The JSON key used to extract the authorization private key value from the Amazon Web Services Secrets Manager secret.
   *
   * @public
   */
  authorizationPrivateKeyJsonKey?: string | undefined;

  /**
   * The source type of the authorization private key. Either `MANAGED` if the secret is managed by the service, or `EXTERNAL` if managed by the user in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  authorizationPrivateKeySource?: SecretSourceType | undefined;

  /**
   * The authorization ID for the Stripe Privy integration.
   *
   * @public
   */
  authorizationId: string | undefined;
}

/**
 * Provider configuration output — no raw secrets, only ARNs. Varies by vendor type.
 *
 * @public
 */
export type PaymentProviderConfigurationOutput =
  | PaymentProviderConfigurationOutput.CoinbaseCdpConfigurationMember
  | PaymentProviderConfigurationOutput.StripePrivyConfigurationMember
  | PaymentProviderConfigurationOutput.$UnknownMember;

/**
 * @public
 */
export namespace PaymentProviderConfigurationOutput {
  /**
   * The Coinbase CDP configuration.
   *
   * @public
   */
  export interface CoinbaseCdpConfigurationMember {
    coinbaseCdpConfiguration: CoinbaseCdpConfigurationOutput;
    stripePrivyConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The Stripe Privy configuration.
   *
   * @public
   */
  export interface StripePrivyConfigurationMember {
    coinbaseCdpConfiguration?: never;
    stripePrivyConfiguration: StripePrivyConfigurationOutput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    coinbaseCdpConfiguration?: never;
    stripePrivyConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    coinbaseCdpConfiguration: (value: CoinbaseCdpConfigurationOutput) => T;
    stripePrivyConfiguration: (value: StripePrivyConfigurationOutput) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreatePaymentCredentialProviderResponse {
  /**
   * The name of the created payment credential provider.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The vendor type for the created payment credential provider.
   *
   * @public
   */
  credentialProviderVendor: PaymentCredentialProviderVendorType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created payment credential provider.
   *
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * Output configuration (contains secret ARNs, excludes actual secret values).
   *
   * @public
   */
  providerConfigurationOutput: PaymentProviderConfigurationOutput | undefined;
}

/**
 * @public
 */
export interface DeletePaymentCredentialProviderRequest {
  /**
   * The name of the payment credential provider to delete.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeletePaymentCredentialProviderResponse {}

/**
 * @public
 */
export interface GetPaymentCredentialProviderRequest {
  /**
   * The name of the payment credential provider to retrieve.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetPaymentCredentialProviderResponse {
  /**
   * The name of the payment credential provider.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the payment credential provider.
   *
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * The vendor type for the payment credential provider.
   *
   * @public
   */
  credentialProviderVendor: PaymentCredentialProviderVendorType | undefined;

  /**
   * Output configuration (contains secret ARNs, excludes actual secret values).
   *
   * @public
   */
  providerConfigurationOutput: PaymentProviderConfigurationOutput | undefined;

  /**
   * The timestamp when the payment credential provider was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the payment credential provider was last updated.
   *
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * The tags associated with the payment credential provider.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListPaymentCredentialProvidersRequest {
  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains summary information about a payment credential provider.
 *
 * @public
 */
export interface PaymentCredentialProviderItem {
  /**
   * The name of the payment credential provider.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The vendor type for the payment credential provider.
   *
   * @public
   */
  credentialProviderVendor: PaymentCredentialProviderVendorType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the payment credential provider.
   *
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * The timestamp when the payment credential provider was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the payment credential provider was last updated.
   *
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListPaymentCredentialProvidersResponse {
  /**
   * The list of payment credential providers.
   *
   * @public
   */
  credentialProviders: PaymentCredentialProviderItem[] | undefined;

  /**
   * Pagination token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePaymentCredentialProviderRequest {
  /**
   * The name of the payment credential provider to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The vendor type for the payment credential provider (e.g., CoinbaseCDP, StripePrivy).
   *
   * @public
   */
  credentialProviderVendor: PaymentCredentialProviderVendorType | undefined;

  /**
   * Configuration specific to the vendor, including API credentials.
   *
   * @public
   */
  providerConfigurationInput: PaymentProviderConfigurationInput | undefined;
}

/**
 * @public
 */
export interface UpdatePaymentCredentialProviderResponse {
  /**
   * The name of the updated payment credential provider.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The vendor type for the updated payment credential provider.
   *
   * @public
   */
  credentialProviderVendor: PaymentCredentialProviderVendorType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the updated payment credential provider.
   *
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * Output configuration (contains secret ARNs, excludes actual secret values).
   *
   * @public
   */
  providerConfigurationOutput: PaymentProviderConfigurationOutput | undefined;

  /**
   * The timestamp when the payment credential provider was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the payment credential provider was last updated.
   *
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface CreatePaymentManagerRequest {
  /**
   * The name of the payment manager.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the payment manager.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of authorizer to use for the payment manager.
   *
   * - `CUSTOM_JWT` - Authorize with a bearer token.
   * - `AWS_IAM` - Authorize with your Amazon Web Services IAM credentials.
   *
   * @public
   */
  authorizerType: PaymentsAuthorizerType | undefined;

  /**
   * The authorizer configuration for the payment manager.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that the payment manager assumes to access resources on your behalf.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A map of tag keys and values to assign to the payment manager.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer managed KMS key to use for encrypting sensitive payment manager data at rest. If you don't specify a key, the data is encrypted with an Amazon Web Services owned key.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}
