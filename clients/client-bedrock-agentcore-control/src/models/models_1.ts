// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  ActorTokenContentType,
  ClientAuthenticationMethodType,
  ClusteringFrequency,
  ContentLevel,
  ContentType,
  CredentialProviderVendorType,
  ExtractionType,
  FilterOperator,
  HarnessBedrockApiFormat,
  HarnessEndpointStatus,
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
  OnBehalfOfTokenExchangeGrantTypeType,
  OnlineEvaluationConfigStatus,
  OnlineEvaluationExecutionStatus,
  OverrideType,
  PaymentConnectorProvisionMode,
  PaymentConnectorStatus,
  PaymentConnectorType,
  PaymentCredentialProviderVendorType,
  PaymentManagerStatus,
  PaymentsAuthorizerType,
  PolicyEngineStatus,
  RestApiMethod,
  SecretSourceType,
  SigningAlgorithm,
  Status,
  TargetStatus,
  TargetType,
} from "./enums";
import type {
  AuthorizerConfiguration,
  ContainerConfiguration,
  FilesystemConfiguration,
  InferenceConnectorSource,
  LifecycleConfiguration,
  NetworkConfiguration,
  OAuthCredentialProvider,
  PrivateEndpoint,
  PrivateEndpointOverride,
  S3Configuration,
  Secret,
  SecretReference,
  Unit,
  UpdatedDescription,
  WorkloadIdentityDetails,
} from "./models_0";

/**
 * <p>The configuration for a connector-based inference target. This configuration uses a built-in connector that provides predefined rules for a large language model (LLM) provider.</p>
 * @public
 */
export interface InferenceConnectorTargetConfiguration {
  /**
   * <p>The source configuration identifying which inference connector to use.</p>
   * @public
   */
  source: InferenceConnectorSource | undefined;
}

/**
 * <p>The configuration that controls how a provider prefix is applied to model IDs during translation.</p>
 * @public
 */
export interface ProviderPrefix {
  /**
   * <p>Whether clients can omit the provider prefix from model IDs. If <code>true</code>, the gateway accepts model IDs without the prefix and restores the full prefixed form before forwarding to the provider. The default is <code>false</code>.</p>
   * @public
   */
  strip?: boolean | undefined;

  /**
   * <p>The single character that separates the provider prefix from the model name (for example, <code>.</code>). The default is <code>.</code>.</p>
   * @public
   */
  separator?: string | undefined;
}

/**
 * <p>The configuration that translates model IDs between client-facing names and provider model IDs.</p>
 * @public
 */
export interface ModelMapping {
  /**
   * <p>The provider prefix configuration used for model ID translation.</p>
   * @public
   */
  providerPrefix?: ProviderPrefix | undefined;
}

/**
 * <p>A model entry that specifies a model supported for an inference operation.</p>
 * @public
 */
export interface ModelEntry {
  /**
   * <p>The model ID or glob pattern that identifies the model (for example, <code>anthropic.claude-opus-*</code> or <code>openai.gpt-oss-*</code>).</p>
   * @public
   */
  model: string | undefined;
}

/**
 * <p>The configuration for a specific inference operation, including its request path and the models that the operation supports.</p>
 * @public
 */
export interface InferenceOperationConfiguration {
  /**
   * <p>The request path for this operation (for example, <code>/v1/messages</code> or <code>/v1/responses</code>).</p>
   * @public
   */
  path: string | undefined;

  /**
   * <p>The provider path to forward requests to, if it differs from the request path. For example, <code>/anthropic/v1/messages</code> when the provider expects a different path than the client-facing <code>/v1/messages</code>.</p>
   * @public
   */
  providerPath?: string | undefined;

  /**
   * <p>The list of models supported for this operation.</p>
   * @public
   */
  models?: ModelEntry[] | undefined;
}

/**
 * <p>The configuration for a provider-based inference target. This configuration explicitly defines the endpoint, model mapping, and operations used to route requests to a large language model (LLM) provider.</p>
 * @public
 */
export interface InferenceProviderTargetConfiguration {
  /**
   * <p>The HTTPS endpoint of the inference provider that the gateway forwards requests to.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>The configuration that translates client-facing model IDs to the model IDs expected by the provider.</p>
   * @public
   */
  modelMapping?: ModelMapping | undefined;

  /**
   * <p>A list of per-operation configurations that map request paths to the models supported for each operation.</p>
   * @public
   */
  operations?: InferenceOperationConfiguration[] | undefined;
}

/**
 * <p>The configuration for an inference target. An inference target routes requests to a large language model (LLM) provider, either through a built-in connector or an explicitly configured provider.</p>
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
   * <p>The connector-based inference configuration. Use this option to route requests to an LLM provider through a built-in connector that includes predefined provider rules.</p>
   * @public
   */
  export interface ConnectorMember {
    connector: InferenceConnectorTargetConfiguration;
    provider?: never;
    $unknown?: never;
  }

  /**
   * <p>The provider-based inference configuration. Use this option to explicitly configure the endpoint, model mapping, and operations for an LLM provider.</p>
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
 * <p>Specifies which operations from an API Gateway REST API are exposed as tools. Tool names and descriptions are derived from the operationId and description fields in the API's exported OpenAPI specification.</p>
 * @public
 */
export interface ApiGatewayToolFilter {
  /**
   * <p>Resource path to match in the REST API. Supports exact paths (for example, <code>/pets</code>) or wildcard paths (for example, <code>/pets/*</code> to match all paths under <code>/pets</code>). Must match existing paths in the REST API.</p>
   * @public
   */
  filterPath: string | undefined;

  /**
   * <p>The methods to filter for.</p>
   * @public
   */
  methods: RestApiMethod[] | undefined;
}

/**
 * <p>Settings to override configurations for a tool.</p>
 * @public
 */
export interface ApiGatewayToolOverride {
  /**
   * <p>The name of tool. Identifies the tool in the Model Context Protocol.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the tool. Provides information about the purpose and usage of the tool. If not provided, uses the description from the API's OpenAPI specification.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Resource path in the REST API (e.g., <code>/pets</code>). Must explicitly match an existing path in the REST API.</p>
   * @public
   */
  path: string | undefined;

  /**
   * <p>The HTTP method to expose for the specified path.</p>
   * @public
   */
  method: RestApiMethod | undefined;
}

/**
 * <p>The configuration for defining REST API tool filters and overrides for the gateway target.</p>
 * @public
 */
export interface ApiGatewayToolConfiguration {
  /**
   * <p>A list of explicit tool definitions with optional custom names and descriptions.</p>
   * @public
   */
  toolOverrides?: ApiGatewayToolOverride[] | undefined;

  /**
   * <p>A list of path and method patterns to expose as tools using metadata from the REST API's OpenAPI specification.</p>
   * @public
   */
  toolFilters: ApiGatewayToolFilter[] | undefined;
}

/**
 * <p>The configuration for an Amazon API Gateway target.</p>
 * @public
 */
export interface ApiGatewayTargetConfiguration {
  /**
   * <p>The ID of the API Gateway REST API.</p>
   * @public
   */
  restApiId: string | undefined;

  /**
   * <p>The ID of the stage of the REST API to add as a target.</p>
   * @public
   */
  stage: string | undefined;

  /**
   * <p>The configuration for defining REST API tool filters and overrides for the gateway target.</p>
   * @public
   */
  apiGatewayToolConfiguration: ApiGatewayToolConfiguration | undefined;
}

/**
 * <p>Specifies a parameter override for a connector tool, allowing you to control parameter visibility and descriptions.</p>
 * @public
 */
export interface ConnectorParameterOverride {
  /**
   * <p>A JSON Pointer path identifying the parameter (for example, <code>/numberOfResults</code> or <code>/filter</code>).</p>
   * @public
   */
  path: string | undefined;

  /**
   * <p>An agent-facing description override for this parameter.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Whether this parameter is visible to the agent. If not specified, uses the service default.</p>
   * @public
   */
  visible?: boolean | undefined;
}

/**
 * <p>Configuration for a single tool within a connector.</p>
 * @public
 */
export interface ConnectorConfiguration {
  /**
   * <p>The tool or operation name (for example, <code>retrieve</code> or <code>webSearch</code>).</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An agent-facing description override for this tool.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Parameters to set as fixed or default values when provisioning this tool.</p>
   * @public
   */
  parameterValues?: __DocumentType | undefined;

  /**
   * <p>Parameters to expose to the agent at runtime, with optional description overrides.</p>
   * @public
   */
  parameterOverrides?: ConnectorParameterOverride[] | undefined;
}

/**
 * <p>The source identifying the connector integration.</p>
 * @public
 */
export interface ConnectorSource {
  /**
   * <p>The identifier for the connector integration (for example, <code>bedrock-knowledge-bases</code>).</p>
   * @public
   */
  connectorId: string | undefined;

  /**
   * <p>The version of the connector to use (for example, <code>1.1.0</code>). If you don't specify a version, the service uses the latest available version.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * <p>Configuration for a connector integration target. Connectors provide pre-built integrations with Amazon Web Services services and third-party tools.</p>
 * @public
 */
export interface ConnectorTargetConfiguration {
  /**
   * <p>The source configuration identifying which connector to use.</p>
   * @public
   */
  source: ConnectorSource | undefined;

  /**
   * <p>A list of tool names to enable from this connector. If absent, all tools provided by the connector are enabled.</p>
   * @public
   */
  enabled?: string[] | undefined;

  /**
   * <p>A list of per-tool configurations for the connector.</p>
   * @public
   */
  configurations?: ConnectorConfiguration[] | undefined;
}

/**
 * <p>The MCP tool schema configuration for an MCP server target. The tool schema must be aligned with the MCP specification.</p>
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
   * <p>The Amazon S3 location of the tool schema. This location contains the schema definition file.</p>
   * @public
   */
  export interface S3Member {
    s3: S3Configuration;
    inlinePayload?: never;
    $unknown?: never;
  }

  /**
   * <p>The inline payload containing the MCP tool schema definition.</p>
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
 * <p>The target configuration for the MCP server.</p>
 * @public
 */
export interface McpServerTargetConfiguration {
  /**
   * <p>The endpoint for the MCP server target configuration.</p>
   * @public
   */
  endpoint: string | undefined;

  /**
   * <p>The tool schema configuration for the MCP server target. Supported only when the credential provider is configured with an authorization code grant type. Dynamic tool discovery/synchronization will be disabled when target is configured with mcpToolSchema.</p>
   * @public
   */
  mcpToolSchema?: McpToolSchemaConfiguration | undefined;

  /**
   * <p>The listing mode for the MCP server target configuration. MCP resources for default targets are cached at the control plane for faster access. MCP resources for dynamic targets will be dynamically retrieved when listing tools.</p>
   * @public
   */
  listingMode?: ListingMode | undefined;

  /**
   * <p>Priority for resolving MCP server targets with shared resource URIs. Lower values take precedence. Defaults to 1000 when not set.</p>
   * @public
   */
  resourcePriority?: number | undefined;
}

/**
 * <p>OAuth2-specific authorization data, including the authorization URL and user identifier for the authorization session.</p>
 * @public
 */
export interface OAuth2AuthorizationData {
  /**
   * <p>The URL to initiate the authorization process. This URL is provided when the OAuth2 access token requires user authorization.</p>
   * @public
   */
  authorizationUrl: string | undefined;

  /**
   * <p>The user identifier associated with the OAuth2 authorization session that is defined by AgentCore Gateway.</p>
   * @public
   */
  userId?: string | undefined;
}

/**
 * <p>Contains the authorization data that is returned when a gateway target is configured with a credential provider with authorization code grant type and requires user federation.</p>
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
   * <p>OAuth2 authorization data for the gateway target.</p>
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
 * <p>Details of a resource created and managed by the gateway for private endpoint connectivity.</p>
 * @public
 */
export interface ManagedResourceDetails {
  /**
   * <p>The domain associated with this managed resource.</p>
   * @public
   */
  domain?: string | undefined;

  /**
   * <p>The ARN of the VPC Lattice resource gateway created in your account.</p>
   * @public
   */
  resourceGatewayArn?: string | undefined;

  /**
   * <p>The ARN of the service network resource association.</p>
   * @public
   */
  resourceAssociationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayTargetRequest {
  /**
   * <p>The unique identifier of the gateway associated with the target.</p>
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the gateway target to delete.</p>
   * @public
   */
  targetId: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayTargetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>The unique identifier of the deleted gateway target.</p>
   * @public
   */
  targetId: string | undefined;

  /**
   * <p>The current status of the gateway target deletion.</p>
   * @public
   */
  status: TargetStatus | undefined;

  /**
   * <p>The reasons for the current status of the gateway target deletion.</p>
   * @public
   */
  statusReasons?: string[] | undefined;
}

/**
 * @public
 */
export interface GetGatewayTargetRequest {
  /**
   * <p>The identifier of the gateway that contains the target.</p>
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the target to retrieve.</p>
   * @public
   */
  targetId: string | undefined;
}

/**
 * @public
 */
export interface ListGatewayTargetsRequest {
  /**
   * <p>The identifier of the gateway to list targets for.</p>
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a gateway target. A target represents an endpoint that the gateway can connect to.</p>
 * @public
 */
export interface TargetSummary {
  /**
   * <p>The unique identifier of the target.</p>
   * @public
   */
  targetId: string | undefined;

  /**
   * <p>The name of the target.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The current status of the target.</p>
   * @public
   */
  status: TargetStatus | undefined;

  /**
   * <p>The description of the target.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp when the target was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the target was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Priority for resolving resource URI conflicts across targets. Lower values take precedence. Defaults to 1000 when not set.</p>
   * @public
   */
  resourcePriority?: number | undefined;

  /**
   * <p>The timestamp when the target was last synchronized.</p>
   * @public
   */
  lastSynchronizedAt?: Date | undefined;

  /**
   * <p>Contains the authorization data that is returned when a gateway target is configured with a credential provider with authorization code grant type and requires user federation.</p>
   * @public
   */
  authorizationData?: AuthorizationData | undefined;

  /**
   * <p>The type of the target.</p>
   * @public
   */
  targetType?: TargetType | undefined;

  /**
   * <p>The listing mode for the target. MCP resources for <code>DEFAULT</code> targets are cached at the control plane for faster access. MCP resources for <code>DYNAMIC</code> targets are retrieved dynamically when listing tools.</p>
   * @public
   */
  listingMode?: ListingMode | undefined;
}

/**
 * @public
 */
export interface ListGatewayTargetsResponse {
  /**
   * <p>The list of gateway target summaries.</p>
   * @public
   */
  items: TargetSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SynchronizeGatewayTargetsRequest {
  /**
   * <p>The gateway Identifier.</p>
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * <p>The target ID list.</p>
   * @public
   */
  targetIdList: string[] | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to retrieve the resource policy.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>The resource policy associated with the specified resource.</p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface GetTokenVaultRequest {
  /**
   * <p>The unique identifier of the token vault to retrieve.</p>
   * @public
   */
  tokenVaultId?: string | undefined;
}

/**
 * <p>Contains the KMS configuration for a resource.</p>
 * @public
 */
export interface KmsConfiguration {
  /**
   * <p>The type of KMS key (CustomerManagedKey or ServiceManagedKey).</p>
   * @public
   */
  keyType: KeyType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetTokenVaultResponse {
  /**
   * <p>The ID of the token vault.</p>
   * @public
   */
  tokenVaultId: string | undefined;

  /**
   * <p>The KMS configuration for the token vault.</p>
   * @public
   */
  kmsConfiguration: KmsConfiguration | undefined;

  /**
   * <p>The timestamp when the token vault was last modified.</p>
   * @public
   */
  lastModifiedDate: Date | undefined;
}

/**
 * @public
 */
export interface CreateHarnessEndpointRequest {
  /**
   * <p>The ID of the harness to create an endpoint for.</p>
   * @public
   */
  harnessId: string | undefined;

  /**
   * <p>The name of the endpoint. Must start with a letter and contain only alphanumeric characters and underscores.</p>
   * @public
   */
  endpointName: string | undefined;

  /**
   * <p>The harness version that the endpoint points to and serves invocations from.</p>
   * @public
   */
  targetVersion?: string | undefined;

  /**
   * <p>A description of the endpoint.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Tags to apply to the endpoint resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Representation of a harness endpoint. An endpoint is a named, stable reference to a specific version of a harness that callers invoke, allowing the underlying version to be updated without changing how the agent is invoked.</p>
 * @public
 */
export interface HarnessEndpoint {
  /**
   * <p>The ID of the harness that the endpoint belongs to.</p>
   * @public
   */
  harnessId: string | undefined;

  /**
   * <p>The name of the harness that the endpoint belongs to.</p>
   * @public
   */
  harnessName: string | undefined;

  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  endpointName: string | undefined;

  /**
   * <p>The ARN of the endpoint.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the endpoint.</p>
   * @public
   */
  status: HarnessEndpointStatus | undefined;

  /**
   * <p>The timestamp when the endpoint was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the endpoint was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The harness version that the endpoint is currently serving.</p>
   * @public
   */
  liveVersion?: string | undefined;

  /**
   * <p>The harness version that the endpoint points to. While an update is in progress, this can differ from the live version until the endpoint finishes transitioning.</p>
   * @public
   */
  targetVersion?: string | undefined;

  /**
   * <p>The description of the endpoint.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The reason the endpoint's last create or update operation failed.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateHarnessEndpointResponse {
  /**
   * <p>The endpoint that was created.</p>
   * @public
   */
  endpoint: HarnessEndpoint | undefined;
}

/**
 * @public
 */
export interface DeleteHarnessEndpointRequest {
  /**
   * <p>The ID of the harness that the endpoint belongs to.</p>
   * @public
   */
  harnessId: string | undefined;

  /**
   * <p>The name of the endpoint to delete.</p>
   * @public
   */
  endpointName: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteHarnessEndpointResponse {
  /**
   * <p>The endpoint that was deleted.</p>
   * @public
   */
  endpoint: HarnessEndpoint | undefined;
}

/**
 * @public
 */
export interface GetHarnessEndpointRequest {
  /**
   * <p>The ID of the harness that the endpoint belongs to.</p>
   * @public
   */
  harnessId: string | undefined;

  /**
   * <p>The name of the endpoint to retrieve.</p>
   * @public
   */
  endpointName: string | undefined;
}

/**
 * @public
 */
export interface GetHarnessEndpointResponse {
  /**
   * <p>The endpoint resource.</p>
   * @public
   */
  endpoint: HarnessEndpoint | undefined;
}

/**
 * @public
 */
export interface ListHarnessEndpointsRequest {
  /**
   * <p>The ID of the harness whose endpoints are listed.</p>
   * @public
   */
  harnessId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHarnessEndpointsResponse {
  /**
   * <p>The list of harness endpoints.</p>
   * @public
   */
  endpoints: HarnessEndpoint[] | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateHarnessEndpointRequest {
  /**
   * <p>The ID of the harness that the endpoint belongs to.</p>
   * @public
   */
  harnessId: string | undefined;

  /**
   * <p>The name of the endpoint to update.</p>
   * @public
   */
  endpointName: string | undefined;

  /**
   * <p>The harness version that the endpoint points to. If not specified, the existing value is retained.</p>
   * @public
   */
  targetVersion?: string | undefined;

  /**
   * <p>A description of the endpoint. If not specified, the existing value is retained.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateHarnessEndpointResponse {
  /**
   * <p>The updated endpoint.</p>
   * @public
   */
  endpoint: HarnessEndpoint | undefined;
}

/**
 * <p>The AgentCore Runtime environment request configuration.</p>
 * @public
 */
export interface HarnessAgentCoreRuntimeEnvironmentRequest {
  /**
   * <p>LifecycleConfiguration lets you manage the lifecycle of runtime sessions and resources in AgentCore Runtime. This configuration helps optimize resource utilization by automatically cleaning up idle sessions and preventing long-running instances from consuming resources indefinitely.</p>
   * @public
   */
  lifecycleConfiguration?: LifecycleConfiguration | undefined;

  /**
   * <p>SecurityConfig for the Agent.</p>
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>The filesystem configurations for the runtime environment.</p>
   * @public
   */
  filesystemConfigurations?: FilesystemConfiguration[] | undefined;
}

/**
 * <p>The environment provider request configuration.</p>
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
   * <p>The AgentCore Runtime environment configuration.</p>
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
 * <p>The environment artifact for a harness, such as a container image containing custom dependencies.</p>
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
   * <p>Representation of a container configuration.</p>
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
 * <p>Configuration for memory retrieval within a namespace.</p>
 * @public
 */
export interface HarnessAgentCoreMemoryRetrievalConfig {
  /**
   * <p>The maximum number of memory entries to retrieve.</p>
   * @public
   */
  topK?: number | undefined;

  /**
   * <p>The minimum relevance score for retrieved memories.</p>
   * @public
   */
  relevanceScore?: number | undefined;

  /**
   * <p>The ID of the retrieval strategy to use.</p>
   * @public
   */
  strategyId?: string | undefined;
}

/**
 * <p>Configuration for AgentCore Memory integration.</p>
 * @public
 */
export interface HarnessAgentCoreMemoryConfiguration {
  /**
   * <p>The ARN of the AgentCore Memory resource.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The actor ID for memory operations.</p>
   * @public
   */
  actorId?: string | undefined;

  /**
   * <p>The number of messages to retrieve from memory.</p>
   * @public
   */
  messagesCount?: number | undefined;

  /**
   * <p>The retrieval configuration for long-term memory, mapping namespace path templates to retrieval settings.</p>
   * @public
   */
  retrievalConfig?: Record<string, HarnessAgentCoreMemoryRetrievalConfig> | undefined;
}

/**
 * <p>Explicitly opt out of memory.</p>
 * @public
 */
export interface HarnessDisabledMemoryConfiguration {}

/**
 * <p>Configuration for managed memory creation.</p>
 * @public
 */
export interface HarnessManagedMemoryConfiguration {
  /**
   * <p>The ARN of the managed AgentCore Memory resource. Read-only on Get, ignored on Create/Update input.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>Strategy types to enable. Defaults to [SEMANTIC, SUMMARIZATION].</p>
   * @public
   */
  strategies?: HarnessManagedMemoryStrategyType[] | undefined;

  /**
   * <p>Event retention in days. Defaults to 30.</p>
   * @public
   */
  eventExpiryDuration?: number | undefined;

  /**
   * <p>Customer-managed KMS key. Defaults to AWS-owned key. Not updatable after creation.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * <p>The memory configuration for a harness.</p>
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
   * <p>The AgentCore Memory configuration.</p>
   * @public
   */
  export interface AgentCoreMemoryConfigurationMember {
    agentCoreMemoryConfiguration: HarnessAgentCoreMemoryConfiguration;
    managedMemoryConfiguration?: never;
    disabled?: never;
    $unknown?: never;
  }

  /**
   * <p>Harness creates and manages a memory resource in the customer's account.</p>
   * @public
   */
  export interface ManagedMemoryConfigurationMember {
    agentCoreMemoryConfiguration?: never;
    managedMemoryConfiguration: HarnessManagedMemoryConfiguration;
    disabled?: never;
    $unknown?: never;
  }

  /**
   * <p>Explicitly opt out of memory.</p>
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
 * <p>Configuration for an Amazon Bedrock model provider.</p>
 * @public
 */
export interface HarnessBedrockModelConfig {
  /**
   * <p>The Bedrock model ID.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The maximum number of tokens to allow in the generated response per model call.</p>
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * <p>The temperature to set when calling the model.</p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p>The topP set when calling the model.</p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p>The API format to use when calling the Bedrock provider.</p>
   * @public
   */
  apiFormat?: HarnessBedrockApiFormat | undefined;

  /**
   * <p>Provider-specific parameters passed through to the model provider unchanged.</p>
   * @public
   */
  additionalParams?: __DocumentType | undefined;
}

/**
 * <p>Configuration for a Google Gemini model provider. Requires an API key stored in AgentCore Identity.</p>
 * @public
 */
export interface HarnessGeminiModelConfig {
  /**
   * <p>The Gemini model ID.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The ARN of your Gemini API key on AgentCore Identity.</p>
   * @public
   */
  apiKeyArn: string | undefined;

  /**
   * <p>The maximum number of tokens to allow in the generated response per model call.</p>
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * <p>The temperature to set when calling the model.</p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p>The topP set when calling the model.</p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p>The topK set when calling the model.</p>
   * @public
   */
  topK?: number | undefined;

  /**
   * <p>Provider-specific parameters passed through to the Gemini model provider unchanged.</p>
   * @public
   */
  additionalParams?: __DocumentType | undefined;
}

/**
 * <p>Configuration for a LiteLLM model provider, enabling connection to third-party model providers.</p>
 * @public
 */
export interface HarnessLiteLlmModelConfig {
  /**
   * <p>The LiteLLM model identifier (e.g., "anthropic/claude-3-sonnet").</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The ARN of the API key in AgentCore Identity for authenticating with the model provider.</p>
   * @public
   */
  apiKeyArn?: string | undefined;

  /**
   * <p>The base URL for the model provider's API endpoint.</p>
   * @public
   */
  apiBase?: string | undefined;

  /**
   * <p>The maximum number of tokens to allow in the generated response per iteration.</p>
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * <p>The temperature to set when calling the model.</p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p>The topP set when calling the model.</p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p>Provider-specific parameters passed through to the model provider unchanged.</p>
   * @public
   */
  additionalParams?: __DocumentType | undefined;
}

/**
 * <p>Configuration for an OpenAI model provider. Requires an API key stored in AgentCore Identity.</p>
 * @public
 */
export interface HarnessOpenAiModelConfig {
  /**
   * <p>The OpenAI model ID.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>The ARN of your OpenAI API key on AgentCore Identity.</p>
   * @public
   */
  apiKeyArn: string | undefined;

  /**
   * <p>The maximum number of tokens to allow in the generated response per model call.</p>
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * <p>The temperature to set when calling the model.</p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p>The topP set when calling the model.</p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p>The API format to use when calling the OpenAI provider.</p>
   * @public
   */
  apiFormat?: HarnessOpenAiApiFormat | undefined;

  /**
   * <p>Provider-specific parameters passed through to the model provider unchanged.</p>
   * @public
   */
  additionalParams?: __DocumentType | undefined;
}

/**
 * <p>Specification of which model to use.</p>
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
   * <p>Configuration for an Amazon Bedrock model.</p>
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
   * <p>Configuration for an OpenAI model.</p>
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
   * <p>Configuration for a Google Gemini model.</p>
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
   * <p>The LiteLLM model configuration for connecting to third-party model providers.</p>
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
 * <p>Passed to show that AWS Skills should be included.</p>
 * @public
 */
export interface HarnessSkillAwsSkillsSource {
  /**
   * <p>Optionally filter allowed skills with glob syntax, e.g., ['core-skills/*'].</p>
   * @public
   */
  paths?: string[] | undefined;
}

/**
 * <p>Authentication configuration for accessing a private git repository.</p>
 * @public
 */
export interface HarnessSkillGitAuth {
  /**
   * <p>The ARN of the credential in AgentCore Identity containing the password or personal access token.</p>
   * @public
   */
  credentialArn: string | undefined;

  /**
   * <p>Username for authentication. Defaults to 'oauth2' if not specified.</p>
   * @public
   */
  username?: string | undefined;
}

/**
 * <p>A git repository source for a skill.</p>
 * @public
 */
export interface HarnessSkillGitSource {
  /**
   * <p>The HTTPS URL of the git repository.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>Subdirectory within the repository containing the skill.</p>
   * @public
   */
  path?: string | undefined;

  /**
   * <p>Authentication configuration for private repositories.</p>
   * @public
   */
  auth?: HarnessSkillGitAuth | undefined;
}

/**
 * <p>An S3 source for a skill.</p>
 * @public
 */
export interface HarnessSkillS3Source {
  /**
   * <p>The S3 URI pointing to the skill directory (e.g., s3://bucket/skills/my-skill/).</p>
   * @public
   */
  uri: string | undefined;
}

/**
 * <p>A skill available to the agent.</p>
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
   * <p>The filesystem path to the skill definition.</p>
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
   * <p>An S3 source containing the skill.</p>
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
   * <p>A git repository containing the skill.</p>
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
   * <p>AWS Skills baked into the harness's underlying Runtime.</p>
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
 * <p>A content block in the system prompt.</p>
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
   * <p>The text content of the system prompt block.</p>
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
 * <p>Configuration for AgentCore Browser.</p>
 * @public
 */
export interface HarnessAgentCoreBrowserConfig {
  /**
   * <p>If not populated, the built-in Browser ARN is used.</p>
   * @public
   */
  browserArn?: string | undefined;
}

/**
 * <p>Configuration for AgentCore Code Interpreter.</p>
 * @public
 */
export interface HarnessAgentCoreCodeInterpreterConfig {
  /**
   * <p>If not populated, the built-in Code Interpreter ARN is used.</p>
   * @public
   */
  codeInterpreterArn?: string | undefined;
}

/**
 * <p>Authentication method for calling a Gateway.</p>
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
   * <p>SigV4-sign requests using the agent's execution role.</p>
   * @public
   */
  export interface AwsIamMember {
    awsIam: Unit;
    none?: never;
    oauth?: never;
    $unknown?: never;
  }

  /**
   * <p>No authentication.</p>
   * @public
   */
  export interface NoneMember {
    awsIam?: never;
    none: Unit;
    oauth?: never;
    $unknown?: never;
  }

  /**
   * <p>Use OAuth credentials for outbound authentication to the gateway.</p>
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
 * <p>Configuration for AgentCore Gateway.</p>
 * @public
 */
export interface HarnessAgentCoreGatewayConfig {
  /**
   * <p>The ARN of the desired AgentCore Gateway.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>How harness authenticates to this Gateway. Defaults to AWS_IAM (SigV4) if omitted.</p>
   * @public
   */
  outboundAuth?: HarnessGatewayOutboundAuth | undefined;
}

/**
 * <p>Configuration for an inline function tool. When the agent calls this tool, the tool call is returned to the caller for external execution.</p>
 * @public
 */
export interface HarnessInlineFunctionConfig {
  /**
   * <p>Description of what the tool does, provided to the model.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>JSON Schema describing the tool's input parameters.</p>
   * @public
   */
  inputSchema: __DocumentType | undefined;
}

/**
 * <p>Configuration for connecting to a remote MCP server.</p>
 * @public
 */
export interface HarnessRemoteMcpConfig {
  /**
   * <p>URL of the MCP endpoint.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>Custom headers to include when connecting to the remote MCP server.</p>
   * @public
   */
  headers?: Record<string, string> | undefined;
}

/**
 * <p>Configuration union for different tool types.</p>
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
   * <p>Configuration for remote MCP server.</p>
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
   * <p>Configuration for AgentCore Browser.</p>
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
   * <p>Configuration for AgentCore Gateway.</p>
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
   * <p>Configuration for an inline function tool.</p>
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
   * <p>Configuration for AgentCore Code Interpreter.</p>
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
 * <p>A tool available to the agent loop.</p>
 * @public
 */
export interface HarnessTool {
  /**
   * <p>The type of tool.</p>
   * @public
   */
  type: HarnessToolType | undefined;

  /**
   * <p>Unique name for the tool. If not provided, a name will be inferred or generated.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Tool-specific configuration.</p>
   * @public
   */
  config?: HarnessToolConfiguration | undefined;
}

/**
 * <p>Configuration for sliding window truncation strategy.</p>
 * @public
 */
export interface HarnessSlidingWindowConfiguration {
  /**
   * <p>The number of recent messages to retain in the context window.</p>
   * @public
   */
  messagesCount?: number | undefined;
}

/**
 * <p>Configuration for summarization-based truncation strategy.</p>
 * @public
 */
export interface HarnessSummarizationConfiguration {
  /**
   * <p>The ratio of content to summarize.</p>
   * @public
   */
  summaryRatio?: number | undefined;

  /**
   * <p>The number of recent messages to preserve without summarization.</p>
   * @public
   */
  preserveRecentMessages?: number | undefined;

  /**
   * <p>The system prompt used for generating summaries.</p>
   * @public
   */
  summarizationSystemPrompt?: string | undefined;
}

/**
 * <p>Strategy-specific truncation configuration.</p>
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
   * <p>Configuration for sliding window truncation.</p>
   * @public
   */
  export interface SlidingWindowMember {
    slidingWindow: HarnessSlidingWindowConfiguration;
    summarization?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration for summarization-based truncation.</p>
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
 * <p>Configuration for truncating conversation context when it exceeds model limits.</p>
 * @public
 */
export interface HarnessTruncationConfiguration {
  /**
   * <p>The truncation strategy to use.</p>
   * @public
   */
  strategy: HarnessTruncationStrategy | undefined;

  /**
   * <p>The strategy-specific configuration.</p>
   * @public
   */
  config?: HarnessTruncationStrategyConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateHarnessRequest {
  /**
   * <p>The name of the harness. Must start with a letter and contain only alphanumeric characters and underscores.</p>
   * @public
   */
  harnessName: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The ARN of the IAM role that the harness assumes when running. This role must have permissions for the services the agent needs to access, such as Amazon Bedrock for model invocation.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The compute environment configuration for the harness, including network and lifecycle settings.</p>
   * @public
   */
  environment?: HarnessEnvironmentProviderRequest | undefined;

  /**
   * <p>The environment artifact for the harness, such as a custom container image containing additional dependencies.</p>
   * @public
   */
  environmentArtifact?: HarnessEnvironmentArtifact | undefined;

  /**
   * <p>Environment variables to set in the harness runtime environment.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>Represents inbound authorization configuration options used to authenticate incoming requests. </p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The model configuration for the harness. Supports Amazon Bedrock, OpenAI, and Google Gemini model providers.</p>
   * @public
   */
  model?: HarnessModelConfiguration | undefined;

  /**
   * <p>The system prompt that defines the agent's behavior and instructions.</p>
   * @public
   */
  systemPrompt?: HarnessSystemContentBlock[] | undefined;

  /**
   * <p>The tools available to the agent, such as remote MCP servers, AgentCore Gateway, AgentCore Browser, Code Interpreter, or inline functions.</p>
   * @public
   */
  tools?: HarnessTool[] | undefined;

  /**
   * <p>The skills available to the agent. Skills are bundles of files that the agent can pull into its context on demand.</p>
   * @public
   */
  skills?: HarnessSkill[] | undefined;

  /**
   * <p>The tools that the agent is allowed to use. Supports glob patterns such as * for all tools, @builtin for all built-in tools, or @serverName/toolName for specific MCP server tools.</p>
   * @public
   */
  allowedTools?: string[] | undefined;

  /**
   * <p>The AgentCore Memory configuration for persisting conversation context across sessions.</p>
   * @public
   */
  memory?: HarnessMemoryConfiguration | undefined;

  /**
   * <p>The truncation configuration for managing conversation context when it exceeds model limits.</p>
   * @public
   */
  truncation?: HarnessTruncationConfiguration | undefined;

  /**
   * <p>The maximum number of iterations the agent loop can execute per invocation.</p>
   * @public
   */
  maxIterations?: number | undefined;

  /**
   * <p>The maximum total number of output tokens the agent can generate across all model calls within a single invocation.</p>
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * <p>The maximum duration in seconds for the agent loop execution per invocation.</p>
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * <p>Tags to apply to the harness resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The AgentCore Runtime environment for a harness.</p>
 * @public
 */
export interface HarnessAgentCoreRuntimeEnvironment {
  /**
   * <p>The ARN of the underlying AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * <p>The name of the underlying AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeName: string | undefined;

  /**
   * <p>The ID of the underlying AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * <p>LifecycleConfiguration lets you manage the lifecycle of runtime sessions and resources in AgentCore Runtime. This configuration helps optimize resource utilization by automatically cleaning up idle sessions and preventing long-running instances from consuming resources indefinitely.</p>
   * @public
   */
  lifecycleConfiguration: LifecycleConfiguration | undefined;

  /**
   * <p>SecurityConfig for the Agent.</p>
   * @public
   */
  networkConfiguration: NetworkConfiguration | undefined;

  /**
   * <p>The filesystem configurations for the runtime environment.</p>
   * @public
   */
  filesystemConfigurations?: FilesystemConfiguration[] | undefined;
}

/**
 * <p>The environment provider for a harness.</p>
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
   * <p>The AgentCore Runtime environment configuration.</p>
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
 * <p>Representation of a harness.</p>
 * @public
 */
export interface Harness {
  /**
   * <p>The ID of the harness.</p>
   * @public
   */
  harnessId: string | undefined;

  /**
   * <p>The name of the harness.</p>
   * @public
   */
  harnessName: string | undefined;

  /**
   * <p>The ARN of the harness.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the harness.</p>
   * @public
   */
  status: HarnessStatus | undefined;

  /**
   * <p>The version of the harness. Incremented on every successful UpdateHarness.</p>
   * @public
   */
  harnessVersion?: string | undefined;

  /**
   * <p>IAM role the harness assumes when running.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The createdAt time of the harness.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The updatedAt time of the harness.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The configuration of the default model used by the Harness.</p>
   * @public
   */
  model: HarnessModelConfiguration | undefined;

  /**
   * <p>The system prompt of the harness.</p>
   * @public
   */
  systemPrompt: HarnessSystemContentBlock[] | undefined;

  /**
   * <p>The tools of the harness.</p>
   * @public
   */
  tools: HarnessTool[] | undefined;

  /**
   * <p>The skills of the harness.</p>
   * @public
   */
  skills: HarnessSkill[] | undefined;

  /**
   * <p>The allowed tools of the harness. All tools are allowed by default.</p>
   * @public
   */
  allowedTools: string[] | undefined;

  /**
   * <p>Configuration for truncating model context.</p>
   * @public
   */
  truncation: HarnessTruncationConfiguration | undefined;

  /**
   * <p>The compute environment on which the Harness runs.</p>
   * @public
   */
  environment: HarnessEnvironmentProvider | undefined;

  /**
   * <p>The environment artifact (e.g., container) in which the Harness operates.</p>
   * @public
   */
  environmentArtifact?: HarnessEnvironmentArtifact | undefined;

  /**
   * <p>Environment variables exposed in the environment in which the harness operates.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>Represents inbound authorization configuration options used to authenticate incoming requests. </p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>AgentCore Memory instance configuration for short and long term memory.</p>
   * @public
   */
  memory?: HarnessMemoryConfiguration | undefined;

  /**
   * <p>The maximum number of iterations in the agent loop allowed before exiting per invocation.</p>
   * @public
   */
  maxIterations?: number | undefined;

  /**
   * <p>The maximum total number of output tokens the agent can generate across all model calls within a single invocation.</p>
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * <p>The maximum duration per invocation.</p>
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * <p>Reason why create or update operations fail.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateHarnessResponse {
  /**
   * <p>The harness that was created.</p>
   * @public
   */
  harness: Harness | undefined;
}

/**
 * @public
 */
export interface DeleteHarnessRequest {
  /**
   * <p>The ID of the harness to delete.</p>
   * @public
   */
  harnessId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Whether to delete the managed memory on harness deletion. Default: true. If false, the memory is disassociated and becomes a regular customer-owned resource.</p>
   * @public
   */
  deleteManagedMemory?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteHarnessResponse {
  /**
   * <p>The harness that was deleted.</p>
   * @public
   */
  harness?: Harness | undefined;
}

/**
 * @public
 */
export interface GetHarnessRequest {
  /**
   * <p>The ID of the harness to retrieve.</p>
   * @public
   */
  harnessId: string | undefined;

  /**
   * <p>Specific version of the harness to retrieve. If omitted, returns the current Harness configuration, including its status.</p>
   * @public
   */
  harnessVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetHarnessResponse {
  /**
   * <p>The harness resource.</p>
   * @public
   */
  harness: Harness | undefined;
}

/**
 * @public
 */
export interface ListHarnessesRequest {
  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about a harness.</p>
 * @public
 */
export interface HarnessSummary {
  /**
   * <p>The ID of the harness.</p>
   * @public
   */
  harnessId: string | undefined;

  /**
   * <p>The name of the harness.</p>
   * @public
   */
  harnessName: string | undefined;

  /**
   * <p>The ARN of the harness.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The current status of the harness.</p>
   * @public
   */
  status: HarnessStatus | undefined;

  /**
   * <p>The timestamp when the harness was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the harness was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The latest version of the harness.</p>
   * @public
   */
  harnessVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListHarnessesResponse {
  /**
   * <p>The list of harness summaries.</p>
   * @public
   */
  harnesses: HarnessSummary[] | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListHarnessVersionsRequest {
  /**
   * <p>The ID of the harness whose versions are listed.</p>
   * @public
   */
  harnessId: string | undefined;

  /**
   * <p>The maximum number of results to return in a single call.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Summary information about a single version of a harness.</p>
 * @public
 */
export interface HarnessVersionSummary {
  /**
   * <p>The ID of the harness.</p>
   * @public
   */
  harnessId: string | undefined;

  /**
   * <p>The name of the harness.</p>
   * @public
   */
  harnessName: string | undefined;

  /**
   * <p>The ARN of the harness.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the harness that this summary describes.</p>
   * @public
   */
  harnessVersion: string | undefined;

  /**
   * <p>The status of this harness version.</p>
   * @public
   */
  status: HarnessStatus | undefined;

  /**
   * <p>The timestamp when this harness version was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when this harness version was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Reason why the create or update operation for this harness version failed.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListHarnessVersionsResponse {
  /**
   * <p>The list of harness version summaries.</p>
   * @public
   */
  harnessVersions: HarnessVersionSummary[] | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Wrapper for updating an optional AuthorizerConfiguration field with PATCH semantics. When present in an update request, the authorizer configuration is replaced with optionalValue. When absent, the authorizer configuration is left unchanged. To unset, include the wrapper with optionalValue not specified.</p>
 * @public
 */
export interface UpdatedAuthorizerConfiguration {
  /**
   * <p>The updated authorizer configuration value. If not specified, it will clear the current authorizer configuration of the resource.</p>
   * @public
   */
  optionalValue?: AuthorizerConfiguration | undefined;
}

/**
 * <p>Wrapper for updating the environment artifact configuration.</p>
 * @public
 */
export interface UpdatedHarnessEnvironmentArtifact {
  /**
   * <p>The updated environment artifact value, or null to clear the existing configuration.</p>
   * @public
   */
  optionalValue?: HarnessEnvironmentArtifact | undefined;
}

/**
 * <p>Wrapper for updating the memory configuration.</p>
 * @public
 */
export interface UpdatedHarnessMemoryConfiguration {
  /**
   * <p>The updated memory configuration value, or null to clear the existing configuration.</p>
   * @public
   */
  optionalValue?: HarnessMemoryConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateHarnessRequest {
  /**
   * <p>The ID of the harness to update.</p>
   * @public
   */
  harnessId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The ARN of the IAM role that the harness assumes when running. If not specified, the existing value is retained.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The compute environment configuration for the harness. If not specified, the existing value is retained.</p>
   * @public
   */
  environment?: HarnessEnvironmentProviderRequest | undefined;

  /**
   * <p>The environment artifact for the harness. Use the optionalValue wrapper to set a new value, or set it to null to clear the existing configuration.</p>
   * @public
   */
  environmentArtifact?: UpdatedHarnessEnvironmentArtifact | undefined;

  /**
   * <p>Environment variables to set in the harness runtime environment. If specified, this replaces all existing environment variables. If not specified, the existing value is retained.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>Wrapper for updating an optional AuthorizerConfiguration field with PATCH semantics. When present in an update request, the authorizer configuration is replaced with optionalValue. When absent, the authorizer configuration is left unchanged. To unset, include the wrapper with optionalValue not specified.</p>
   * @public
   */
  authorizerConfiguration?: UpdatedAuthorizerConfiguration | undefined;

  /**
   * <p>The model configuration for the harness. If not specified, the existing value is retained.</p>
   * @public
   */
  model?: HarnessModelConfiguration | undefined;

  /**
   * <p>The system prompt that defines the agent's behavior. If not specified, the existing value is retained.</p>
   * @public
   */
  systemPrompt?: HarnessSystemContentBlock[] | undefined;

  /**
   * <p>The tools available to the agent. If specified, this replaces all existing tools. If not specified, the existing value is retained.</p>
   * @public
   */
  tools?: HarnessTool[] | undefined;

  /**
   * <p>The skills available to the agent. If specified, this replaces all existing skills. If not specified, the existing value is retained.</p>
   * @public
   */
  skills?: HarnessSkill[] | undefined;

  /**
   * <p>The tools that the agent is allowed to use. If specified, this replaces all existing allowed tools. If not specified, the existing value is retained.</p>
   * @public
   */
  allowedTools?: string[] | undefined;

  /**
   * <p>The AgentCore Memory configuration. Use the optionalValue wrapper to set a new value, or set it to null to clear the existing configuration.</p>
   * @public
   */
  memory?: UpdatedHarnessMemoryConfiguration | undefined;

  /**
   * <p>The truncation configuration for managing conversation context. If not specified, the existing value is retained.</p>
   * @public
   */
  truncation?: HarnessTruncationConfiguration | undefined;

  /**
   * <p>The maximum number of iterations the agent loop can execute per invocation. If not specified, the existing value is retained.</p>
   * @public
   */
  maxIterations?: number | undefined;

  /**
   * <p>The maximum total number of output tokens the agent can generate across all model calls within a single invocation. If not specified, the existing value is retained.</p>
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * <p>The maximum duration in seconds for the agent loop execution per invocation. If not specified, the existing value is retained.</p>
   * @public
   */
  timeoutSeconds?: number | undefined;
}

/**
 * @public
 */
export interface UpdateHarnessResponse {
  /**
   * <p>The updated harness.</p>
   * @public
   */
  harness: Harness | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which you want to list tags.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>A metadata key indexed for filtering.</p>
 * @public
 */
export interface IndexedKey {
  /**
   * <p>The metadata key name to index.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The data type of the indexed key.</p>
   * @public
   */
  type: MetadataValueType | undefined;
}

/**
 * <p>Configurations for overriding the consolidation step of the episodic memory strategy.</p>
 * @public
 */
export interface EpisodicOverrideConsolidationConfigurationInput {
  /**
   * <p>The text to append to the prompt for the consolidation step of the episodic memory strategy.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for the consolidation step of the episodic memory strategy.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Configurations for overriding the extraction step of the episodic memory strategy.</p>
 * @public
 */
export interface EpisodicOverrideExtractionConfigurationInput {
  /**
   * <p>The text to append to the prompt for the extraction step of the episodic memory strategy.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for the extraction step of the episodic memory strategy.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Validation for NUMBER fields.</p>
 * @public
 */
export interface NumberValidation {
  /**
   * <p>Minimum allowed value.</p>
   * @public
   */
  minValue?: number | undefined;

  /**
   * <p>Maximum allowed value.</p>
   * @public
   */
  maxValue?: number | undefined;
}

/**
 * <p>Validation for STRINGLIST fields.</p>
 * @public
 */
export interface StringListValidation {
  /**
   * <p>Allowed values for items in this STRINGLIST field.</p>
   * @public
   */
  allowedValues?: string[] | undefined;

  /**
   * <p>Maximum number of items in the string list.</p>
   * @public
   */
  maxItems?: number | undefined;
}

/**
 * <p>Validation for STRING fields.</p>
 * @public
 */
export interface StringValidation {
  /**
   * <p>Allowed values for this STRING field.</p>
   * @public
   */
  allowedValues: string[] | undefined;
}

/**
 * <p>Validation rules for extracted metadata values. Only one type can be specified, matching the field's data type.</p>
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
   * <p>Validation for STRING fields.</p>
   * @public
   */
  export interface StringValidationMember {
    stringValidation: StringValidation;
    stringListValidation?: never;
    numberValidation?: never;
    $unknown?: never;
  }

  /**
   * <p>Validation for STRINGLIST fields.</p>
   * @public
   */
  export interface StringListValidationMember {
    stringValidation?: never;
    stringListValidation: StringListValidation;
    numberValidation?: never;
    $unknown?: never;
  }

  /**
   * <p>Validation for NUMBER fields.</p>
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
 * <p>Model-based metadata extraction configuration.</p>
 * @public
 */
export interface LlmExtractionConfig {
  /**
   * <p>Instructions for extraction. Supports built-in operators like LATEST_VALUE or custom natural-language instructions.</p>
   * @public
   */
  llmExtractionInstruction?: string | undefined;

  /**
   * <p>Description of what this metadata field represents.</p>
   * @public
   */
  definition: string | undefined;

  /**
   * <p>Validation rules to constrain extracted values.</p>
   * @public
   */
  validation?: Validation | undefined;
}

/**
 * <p>Configuration for metadata extraction from conversational content.</p>
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
   * <p>Model-based extraction using a definition and instructions.</p>
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
 * <p>A metadata field definition within a strategy's schema.</p>
 * @public
 */
export interface MetadataSchemaEntry {
  /**
   * <p>The metadata field name. Must match an indexed key to be queryable via metadata filters.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The MetadataValueType.</p>
   * @public
   */
  type?: MetadataValueType | undefined;

  /**
   * <p>Specifies whether the metadata value is extracted by the LLM or passed through deterministically from the event.</p>
   * @public
   */
  extractionType?: ExtractionType | undefined;

  /**
   * <p>Configuration for extracting this metadata value from conversational content. Applicable only if extractionType is LLM inferred.</p>
   * @public
   */
  extractionConfig?: ExtractionConfig | undefined;
}

/**
 * <p>Schema for metadata on memory records generated by a strategy.</p>
 * @public
 */
export interface MemoryRecordSchema {
  /**
   * <p>The metadata field definitions for this strategy.</p>
   * @public
   */
  metadataSchema?: MetadataSchemaEntry[] | undefined;
}

/**
 * <p>Configurations for overriding the reflection step of the episodic memory strategy.</p>
 * @public
 */
export interface EpisodicOverrideReflectionConfigurationInput {
  /**
   * <p>The text to append to the prompt for reflection step of the episodic memory strategy.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for the reflection step of the episodic memory strategy.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>This is a legacy parameter, use <code>namespaceTemplates</code>. The namespaces to use for episodic reflection. Can be less nested than the episodic namespaces.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The namespaceTemplates to use for episodic reflection. Can be less nested than the episodic namespaces.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>Schema for metadata fields on records generated by this reflection override.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Input for the configuration to override the episodic memory strategy.</p>
 * @public
 */
export interface EpisodicOverrideConfigurationInput {
  /**
   * <p>Contains configurations for overriding the extraction step of the episodic memory strategy.</p>
   * @public
   */
  extraction?: EpisodicOverrideExtractionConfigurationInput | undefined;

  /**
   * <p>Contains configurations for overriding the consolidation step of the episodic memory strategy.</p>
   * @public
   */
  consolidation?: EpisodicOverrideConsolidationConfigurationInput | undefined;

  /**
   * <p>Contains configurations for overriding the reflection step of the episodic memory strategy.</p>
   * @public
   */
  reflection?: EpisodicOverrideReflectionConfigurationInput | undefined;
}

/**
 * <p>The configuration to invoke a self-managed memory processing pipeline with.</p>
 * @public
 */
export interface InvocationConfigurationInput {
  /**
   * <p>The ARN of the SNS topic for job notifications.</p>
   * @public
   */
  topicArn: string | undefined;

  /**
   * <p>The S3 bucket name for event payload delivery.</p>
   * @public
   */
  payloadDeliveryBucketName: string | undefined;
}

/**
 * <p>The trigger configuration based on a message.</p>
 * @public
 */
export interface MessageBasedTriggerInput {
  /**
   * <p>The number of messages that trigger memory processing.</p>
   * @public
   */
  messageCount?: number | undefined;
}

/**
 * <p>Trigger configuration based on time.</p>
 * @public
 */
export interface TimeBasedTriggerInput {
  /**
   * <p>Idle session timeout (seconds) that triggers memory processing.</p>
   * @public
   */
  idleSessionTimeout?: number | undefined;
}

/**
 * <p>Trigger configuration based on tokens.</p>
 * @public
 */
export interface TokenBasedTriggerInput {
  /**
   * <p>Number of tokens that trigger memory processing.</p>
   * @public
   */
  tokenCount?: number | undefined;
}

/**
 * <p>Condition that triggers memory processing.</p>
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
   * <p>Message based trigger configuration.</p>
   * @public
   */
  export interface MessageBasedTriggerMember {
    messageBasedTrigger: MessageBasedTriggerInput;
    tokenBasedTrigger?: never;
    timeBasedTrigger?: never;
    $unknown?: never;
  }

  /**
   * <p>Token based trigger configuration.</p>
   * @public
   */
  export interface TokenBasedTriggerMember {
    messageBasedTrigger?: never;
    tokenBasedTrigger: TokenBasedTriggerInput;
    timeBasedTrigger?: never;
    $unknown?: never;
  }

  /**
   * <p>Time based trigger configuration.</p>
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
 * <p>Input configuration for a self-managed memory strategy.</p>
 * @public
 */
export interface SelfManagedConfigurationInput {
  /**
   * <p>A list of conditions that trigger memory processing.</p>
   * @public
   */
  triggerConditions?: TriggerConditionInput[] | undefined;

  /**
   * <p>Configuration to invoke a self-managed memory processing pipeline with.</p>
   * @public
   */
  invocationConfiguration: InvocationConfigurationInput | undefined;

  /**
   * <p>Number of historical messages to include in processing context.</p>
   * @public
   */
  historicalContextWindowSize?: number | undefined;
}

/**
 * <p>Input for semantic override consolidation configuration in a memory strategy.</p>
 * @public
 */
export interface SemanticOverrideConsolidationConfigurationInput {
  /**
   * <p>The text to append to the prompt for semantic consolidation.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for semantic consolidation.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Input for semantic override extraction configuration in a memory strategy.</p>
 * @public
 */
export interface SemanticOverrideExtractionConfigurationInput {
  /**
   * <p>The text to append to the prompt for semantic extraction.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for semantic extraction.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Input for semantic override configuration in a memory strategy.</p>
 * @public
 */
export interface SemanticOverrideConfigurationInput {
  /**
   * <p>The extraction configuration for a semantic override.</p>
   * @public
   */
  extraction?: SemanticOverrideExtractionConfigurationInput | undefined;

  /**
   * <p>The consolidation configuration for a semantic override.</p>
   * @public
   */
  consolidation?: SemanticOverrideConsolidationConfigurationInput | undefined;
}

/**
 * <p>Input for summary override consolidation configuration in a memory strategy.</p>
 * @public
 */
export interface SummaryOverrideConsolidationConfigurationInput {
  /**
   * <p>The text to append to the prompt for summary consolidation.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for summary consolidation.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Input for summary override configuration in a memory strategy.</p>
 * @public
 */
export interface SummaryOverrideConfigurationInput {
  /**
   * <p>The consolidation configuration for a summary override.</p>
   * @public
   */
  consolidation?: SummaryOverrideConsolidationConfigurationInput | undefined;
}

/**
 * <p>Input for user preference override consolidation configuration in a memory strategy.</p>
 * @public
 */
export interface UserPreferenceOverrideConsolidationConfigurationInput {
  /**
   * <p>The text to append to the prompt for user preference consolidation.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for user preference consolidation.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Input for user preference override extraction configuration in a memory strategy.</p>
 * @public
 */
export interface UserPreferenceOverrideExtractionConfigurationInput {
  /**
   * <p>The text to append to the prompt for user preference extraction.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for user preference extraction.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Input for user preference override configuration in a memory strategy.</p>
 * @public
 */
export interface UserPreferenceOverrideConfigurationInput {
  /**
   * <p>The extraction configuration for a user preference override.</p>
   * @public
   */
  extraction?: UserPreferenceOverrideExtractionConfigurationInput | undefined;

  /**
   * <p>The consolidation configuration for a user preference override.</p>
   * @public
   */
  consolidation?: UserPreferenceOverrideConsolidationConfigurationInput | undefined;
}

/**
 * <p>Input for custom configuration of a memory strategy.</p>
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
   * <p>The semantic override configuration for a custom memory strategy.</p>
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
   * <p>The summary override configuration for a custom memory strategy.</p>
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
   * <p>The user preference override configuration for a custom memory strategy.</p>
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
   * <p>The episodic memory strategy override configuration for a custom memory strategy.</p>
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
   * <p>The self managed configuration for a custom memory strategy.</p>
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
 * <p>Input for creating a custom memory strategy.</p>
 * @public
 */
export interface CustomMemoryStrategyInput {
  /**
   * <p>The name of the custom memory strategy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the custom memory strategy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>This is a legacy parameter, use <code>namespaceTemplates</code>. The namespaces associated with the custom memory strategy.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The namespaceTemplates associated with the custom memory strategy.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>The configuration for the custom memory strategy.</p>
   * @public
   */
  configuration?: CustomConfigurationInput | undefined;

  /**
   * <p>Schema for metadata fields on records generated by this strategy.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>An episodic reflection configuration input.</p>
 * @public
 */
export interface EpisodicReflectionConfigurationInput {
  /**
   * <p>This is a legacy parameter, use <code>namespaceTemplates</code>. The namespaces over which to create reflections. Can be less nested than episode namespaces.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The namespaceTemplates over which to create reflections. Can be less nested than episode namespaces.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>Schema for metadata fields on records generated by reflections.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Input for creating an episodic memory strategy.</p>
 * @public
 */
export interface EpisodicMemoryStrategyInput {
  /**
   * <p>The name of the episodic memory strategy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the episodic memory strategy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>This is a legacy parameter, use <code>namespaceTemplates</code>. The namespaces for which to create episodes.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The namespaceTemplates for which to create episodes.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>The configuration for the reflections created with the episodic memory strategy.</p>
   * @public
   */
  reflectionConfiguration?: EpisodicReflectionConfigurationInput | undefined;

  /**
   * <p>Schema for metadata fields on records generated by this strategy.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Input for creating a semantic memory strategy.</p>
 * @public
 */
export interface SemanticMemoryStrategyInput {
  /**
   * <p>The name of the semantic memory strategy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the semantic memory strategy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>This is a legacy parameter, use <code>namespaceTemplates</code>. The namespaces associated with the semantic memory strategy.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The namespaceTemplates associated with the semantic memory strategy.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>Schema for metadata on memory records generated by a strategy.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Input for creating a summary memory strategy.</p>
 * @public
 */
export interface SummaryMemoryStrategyInput {
  /**
   * <p>The name of the summary memory strategy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the summary memory strategy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>This is a legacy parameter, use <code>namespaceTemplates</code>. The namespaces associated with the summary memory strategy.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The namespaceTemplates associated with the summary memory strategy.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>Schema for metadata fields on records generated by this strategy.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Input for creating a user preference memory strategy.</p>
 * @public
 */
export interface UserPreferenceMemoryStrategyInput {
  /**
   * <p>The name of the user preference memory strategy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the user preference memory strategy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>This is a legacy parameter, use <code>namespaceTemplates</code>. The namespaces associated with the user preference memory strategy.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The namespaceTemplates associated with the user preference memory strategy.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>Schema for metadata fields on records generated by this strategy.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Contains input information for creating a memory strategy.</p>
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
   * <p>Input for creating a semantic memory strategy.</p>
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
   * <p>Input for creating a summary memory strategy.</p>
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
   * <p>Input for creating a user preference memory strategy.</p>
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
   * <p>Input for creating a custom memory strategy.</p>
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
   * <p>Input for creating an episodic memory strategy</p>
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
 * <p>Defines what content to stream and at what level of detail.</p>
 * @public
 */
export interface ContentConfiguration {
  /**
   * <p>Type of content to stream.</p>
   * @public
   */
  type: ContentType | undefined;

  /**
   * <p>Level of detail for streamed content.</p>
   * @public
   */
  level?: ContentLevel | undefined;
}

/**
 * <p>Configuration for Kinesis Data Stream delivery.</p>
 * @public
 */
export interface KinesisResource {
  /**
   * <p>ARN of the Kinesis Data Stream.</p>
   * @public
   */
  dataStreamArn: string | undefined;

  /**
   * <p>Content configurations for stream delivery.</p>
   * @public
   */
  contentConfigurations: ContentConfiguration[] | undefined;
}

/**
 * <p>Supported stream delivery resource types.</p>
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
   * <p>Kinesis Data Stream configuration.</p>
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
 * <p>Configuration for streaming memory record data to external resources.</p>
 * @public
 */
export interface StreamDeliveryResources {
  /**
   * <p>List of stream delivery resource configurations.</p>
   * @public
   */
  resources: StreamDeliveryResource[] | undefined;
}

/**
 * @public
 */
export interface CreateMemoryInput {
  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the memory. The name must be unique within your account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the memory.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the memory data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides permissions for the memory to access Amazon Web Services services.</p>
   * @public
   */
  memoryExecutionRoleArn?: string | undefined;

  /**
   * <p>The duration after which memory events expire. Specified as an ISO 8601 duration.</p>
   * @public
   */
  eventExpiryDuration: number | undefined;

  /**
   * <p>The memory strategies to use for this memory. Strategies define how information is extracted, processed, and consolidated.</p>
   * @public
   */
  memoryStrategies?: MemoryStrategyInput[] | undefined;

  /**
   * <p>Metadata keys to index for filtering. Once declared, indexed keys cannot be removed.</p>
   * @public
   */
  indexedKeys?: IndexedKey[] | undefined;

  /**
   * <p>Configuration for streaming memory record data to external resources.</p>
   * @public
   */
  streamDeliveryResources?: StreamDeliveryResources | undefined;

  /**
   * <p>A map of tag keys and values to assign to an AgentCore Memory. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Contains configurations to override the default consolidation step for the episodic memory strategy.</p>
 * @public
 */
export interface EpisodicConsolidationOverride {
  /**
   * <p>The text appended to the prompt for the consolidation step of the episodic memory strategy.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID used for the consolidation step of the episodic memory strategy.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Contains semantic consolidation override configuration.</p>
 * @public
 */
export interface SemanticConsolidationOverride {
  /**
   * <p>The text to append to the prompt for semantic consolidation.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for semantic consolidation.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Contains summary consolidation override configuration.</p>
 * @public
 */
export interface SummaryConsolidationOverride {
  /**
   * <p>The text to append to the prompt for summary consolidation.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for summary consolidation.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Contains user preference consolidation override configuration.</p>
 * @public
 */
export interface UserPreferenceConsolidationOverride {
  /**
   * <p>The text to append to the prompt for user preference consolidation.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for user preference consolidation.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Contains custom consolidation configuration information.</p>
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
   * <p>The semantic consolidation override configuration.</p>
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
   * <p>The summary consolidation override configuration.</p>
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
   * <p>The user preference consolidation override configuration.</p>
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
   * <p>The configurations to override the default consolidation step for the episodic memory strategy.</p>
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
 * <p>Contains consolidation configuration information for a memory strategy.</p>
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
   * <p>The custom consolidation configuration.</p>
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
 * <p>Contains configurations to override the default extraction step for the episodic memory strategy.</p>
 * @public
 */
export interface EpisodicExtractionOverride {
  /**
   * <p>The text appended to the prompt for the extraction step of the episodic memory strategy.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID used for the extraction step of the episodic memory strategy.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Contains semantic extraction override configuration.</p>
 * @public
 */
export interface SemanticExtractionOverride {
  /**
   * <p>The text to append to the prompt for semantic extraction.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for semantic extraction.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Contains user preference extraction override configuration.</p>
 * @public
 */
export interface UserPreferenceExtractionOverride {
  /**
   * <p>The text to append to the prompt for user preference extraction.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID to use for user preference extraction.</p>
   * @public
   */
  modelId: string | undefined;
}

/**
 * <p>Contains custom extraction configuration information.</p>
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
   * <p>The semantic extraction override configuration.</p>
   * @public
   */
  export interface SemanticExtractionOverrideMember {
    semanticExtractionOverride: SemanticExtractionOverride;
    userPreferenceExtractionOverride?: never;
    episodicExtractionOverride?: never;
    $unknown?: never;
  }

  /**
   * <p>The user preference extraction override configuration.</p>
   * @public
   */
  export interface UserPreferenceExtractionOverrideMember {
    semanticExtractionOverride?: never;
    userPreferenceExtractionOverride: UserPreferenceExtractionOverride;
    episodicExtractionOverride?: never;
    $unknown?: never;
  }

  /**
   * <p>The configurations to override the default extraction step for the episodic memory strategy.</p>
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
 * <p>Contains extraction configuration information for a memory strategy.</p>
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
   * <p>The custom extraction configuration.</p>
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
 * <p>Contains configurations to override the default reflection step for the episodic memory strategy.</p>
 * @public
 */
export interface EpisodicReflectionOverride {
  /**
   * <p>The text appended to the prompt for the reflection step of the episodic memory strategy.</p>
   * @public
   */
  appendToPrompt: string | undefined;

  /**
   * <p>The model ID used for the reflection step of the episodic memory strategy.</p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p>This is a legacy parameter. The namespaces over which reflections were created. Can be less nested than the episodic namespaces.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The namespaceTemplates over which reflections were created. Can be less nested than the episodic namespaces.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>Schema for metadata fields on records generated by this reflection override.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Contains configurations for a custom reflection strategy.</p>
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
   * <p>The configuration for a reflection strategy to override the default one.</p>
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
 * <p>The configuration for the reflections created with the episodic memory strategy.</p>
 * @public
 */
export interface EpisodicReflectionConfiguration {
  /**
   * <p>This is a legacy parameter, use <code>namespaceTemplates</code>. The namespaces for which to create reflections. Can be less nested than the episodic namespaces.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The namespaceTemplates for which to create reflections. Can be less nested than the episodic namespaces.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>"Schema for metadata fields on records generated by reflections.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Contains reflection configuration information for a memory strategy.</p>
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
   * <p>The configuration for a custom reflection strategy.</p>
   * @public
   */
  export interface CustomReflectionConfigurationMember {
    customReflectionConfiguration: CustomReflectionConfiguration;
    episodicReflectionConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for the episodic reflection strategy.</p>
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
 * <p>The configuration to invoke a self-managed memory processing pipeline with.</p>
 * @public
 */
export interface InvocationConfiguration {
  /**
   * <p>The ARN of the SNS topic for job notifications.</p>
   * @public
   */
  topicArn: string | undefined;

  /**
   * <p>The S3 bucket name for event payload delivery.</p>
   * @public
   */
  payloadDeliveryBucketName: string | undefined;
}

/**
 * <p>The trigger configuration based on a message.</p>
 * @public
 */
export interface MessageBasedTrigger {
  /**
   * <p>The number of messages that trigger memory processing.</p>
   * @public
   */
  messageCount?: number | undefined;
}

/**
 * <p>Trigger configuration based on time.</p>
 * @public
 */
export interface TimeBasedTrigger {
  /**
   * <p>Idle session timeout (seconds) that triggers memory processing.</p>
   * @public
   */
  idleSessionTimeout?: number | undefined;
}

/**
 * <p>Trigger configuration based on tokens.</p>
 * @public
 */
export interface TokenBasedTrigger {
  /**
   * <p>Number of tokens that trigger memory processing.</p>
   * @public
   */
  tokenCount?: number | undefined;
}

/**
 * <p>Condition that triggers memory processing.</p>
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
   * <p>Message based trigger configuration.</p>
   * @public
   */
  export interface MessageBasedTriggerMember {
    messageBasedTrigger: MessageBasedTrigger;
    tokenBasedTrigger?: never;
    timeBasedTrigger?: never;
    $unknown?: never;
  }

  /**
   * <p>Token based trigger configuration.</p>
   * @public
   */
  export interface TokenBasedTriggerMember {
    messageBasedTrigger?: never;
    tokenBasedTrigger: TokenBasedTrigger;
    timeBasedTrigger?: never;
    $unknown?: never;
  }

  /**
   * <p>Time based trigger configuration.</p>
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
 * <p>A configuration for a self-managed memory strategy.</p>
 * @public
 */
export interface SelfManagedConfiguration {
  /**
   * <p>A list of conditions that trigger memory processing.</p>
   * @public
   */
  triggerConditions: TriggerCondition[] | undefined;

  /**
   * <p>The configuration to use when invoking memory processing.</p>
   * @public
   */
  invocationConfiguration: InvocationConfiguration | undefined;

  /**
   * <p>The number of historical messages to include in processing context.</p>
   * @public
   */
  historicalContextWindowSize: number | undefined;
}

/**
 * <p>Contains configuration information for a memory strategy.</p>
 * @public
 */
export interface StrategyConfiguration {
  /**
   * <p>The type of override for the strategy configuration.</p>
   * @public
   */
  type?: OverrideType | undefined;

  /**
   * <p>The extraction configuration for the memory strategy.</p>
   * @public
   */
  extraction?: ExtractionConfiguration | undefined;

  /**
   * <p>The consolidation configuration for the memory strategy.</p>
   * @public
   */
  consolidation?: ConsolidationConfiguration | undefined;

  /**
   * <p>The reflection configuration for the memory strategy.</p>
   * @public
   */
  reflection?: ReflectionConfiguration | undefined;

  /**
   * <p>Self-managed configuration settings.</p>
   * @public
   */
  selfManagedConfiguration?: SelfManagedConfiguration | undefined;
}

/**
 * <p>Contains information about a memory strategy.</p>
 * @public
 */
export interface MemoryStrategy {
  /**
   * <p>The unique identifier of the memory strategy.</p>
   * @public
   */
  strategyId: string | undefined;

  /**
   * <p>The name of the memory strategy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the memory strategy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration of the memory strategy.</p>
   * @public
   */
  configuration?: StrategyConfiguration | undefined;

  /**
   * <p>The type of the memory strategy.</p>
   * @public
   */
  type: MemoryStrategyType | undefined;

  /**
   * <p>This is a legacy parameter. The namespaces associated with the memory strategy.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces: string[] | undefined;

  /**
   * <p>The namespaceTemplates associated with the memory strategy.</p>
   * @public
   */
  namespaceTemplates: string[] | undefined;

  /**
   * <p>The timestamp when the memory strategy was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the memory strategy was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>The current status of the memory strategy.</p>
   * @public
   */
  status?: MemoryStrategyStatus | undefined;

  /**
   * <p>Schema for metadata fields on records generated by this strategy.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Contains information about a memory resource.</p>
 * @public
 */
export interface Memory {
  /**
   * <p>The Amazon Resource Name (ARN) of the memory.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The unique identifier of the memory.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the memory.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the memory.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ARN of the KMS key used to encrypt the memory.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * <p>The ARN of the IAM role that provides permissions for the memory.</p>
   * @public
   */
  memoryExecutionRoleArn?: string | undefined;

  /**
   * <p>The number of days after which memory events will expire.</p>
   * @public
   */
  eventExpiryDuration: number | undefined;

  /**
   * <p>The current status of the memory.</p>
   * @public
   */
  status: MemoryStatus | undefined;

  /**
   * <p>The reason for failure if the memory is in a failed state.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The timestamp when the memory was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the memory was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The list of memory strategies associated with this memory.</p>
   * @public
   */
  strategies?: MemoryStrategy[] | undefined;

  /**
   * <p>The indexed metadata keys for this memory. Only indexed keys can be used in metadata filters.</p>
   * @public
   */
  indexedKeys?: IndexedKey[] | undefined;

  /**
   * <p>Configuration for streaming memory record data to external resources.</p>
   * @public
   */
  streamDeliveryResources?: StreamDeliveryResources | undefined;

  /**
   * <p>ARN of the resource managing this memory (e.g. a harness). When set, strategy modifications and deletion are only allowed through the managing resource.</p>
   * @public
   */
  managedByResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateMemoryOutput {
  /**
   * <p>The details of the created memory, including its ID, ARN, name, description, and configuration settings.</p>
   * @public
   */
  memory?: Memory | undefined;
}

/**
 * @public
 */
export interface DeleteMemoryInput {
  /**
   * <p>A client token is used for keeping track of idempotent requests. It can contain a session id which can be around 250 chars, combined with a unique AWS identifier.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unique identifier of the memory to delete.</p>
   * @public
   */
  memoryId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMemoryOutput {
  /**
   * <p>The unique identifier of the deleted AgentCore Memory resource.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The current status of the AgentCore Memory resource deletion.</p>
   * @public
   */
  status?: MemoryStatus | undefined;
}

/**
 * @public
 */
export interface GetMemoryInput {
  /**
   * <p>The unique identifier of the memory to retrieve.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The level of detail to return for the memory.</p>
   * @public
   */
  view?: MemoryView | undefined;
}

/**
 * @public
 */
export interface GetMemoryOutput {
  /**
   * <p>The retrieved AgentCore Memory resource details.</p>
   * @public
   */
  memory: Memory | undefined;
}

/**
 * @public
 */
export interface ListMemoriesInput {
  /**
   * <p>The maximum number of results to return in a single call. The default value is 10. The maximum value is 50.</p>
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
 * <p>Contains summary information about a memory resource.</p>
 * @public
 */
export interface MemorySummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the memory.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The unique identifier of the memory.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The current status of the memory.</p>
   * @public
   */
  status?: MemoryStatus | undefined;

  /**
   * <p>The timestamp when the memory was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the memory was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>ARN of the resource managing this memory (e.g. a harness). Null if not managed.</p>
   * @public
   */
  managedByResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface ListMemoriesOutput {
  /**
   * <p>The list of AgentCore Memory resource summaries.</p>
   * @public
   */
  memories: MemorySummary[] | undefined;

  /**
   * <p>A token to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Input for deleting a memory strategy.</p>
 * @public
 */
export interface DeleteMemoryStrategyInput {
  /**
   * <p>The unique identifier of the memory strategy to delete.</p>
   * @public
   */
  memoryStrategyId: string | undefined;
}

/**
 * <p>Input for a custom consolidation configuration.</p>
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
   * <p>The semantic consolidation override configuration input.</p>
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
   * <p>The summary consolidation override configuration input.</p>
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
   * <p>The user preference consolidation override configuration input.</p>
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
   * <p>Configurations to override the consolidation step of the episodic strategy.</p>
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
 * <p>Contains information for modifying a consolidation configuration.</p>
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
   * <p>The updated custom consolidation configuration.</p>
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
 * <p>Input for a custom extraction configuration.</p>
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
   * <p>The semantic extraction override configuration input.</p>
   * @public
   */
  export interface SemanticExtractionOverrideMember {
    semanticExtractionOverride: SemanticOverrideExtractionConfigurationInput;
    userPreferenceExtractionOverride?: never;
    episodicExtractionOverride?: never;
    $unknown?: never;
  }

  /**
   * <p>The user preference extraction override configuration input.</p>
   * @public
   */
  export interface UserPreferenceExtractionOverrideMember {
    semanticExtractionOverride?: never;
    userPreferenceExtractionOverride: UserPreferenceOverrideExtractionConfigurationInput;
    episodicExtractionOverride?: never;
    $unknown?: never;
  }

  /**
   * <p>Configurations to override the extraction step of the episodic strategy.</p>
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
 * <p>Contains information for modifying an extraction configuration.</p>
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
   * <p>The updated custom extraction configuration.</p>
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
 * <p>Input for a custom reflection configuration.</p>
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
   * <p>The reflection override configuration input.</p>
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
 * <p>Contains information for modifying a reflection configuration.</p>
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
   * <p>The updated episodic reflection configuration.</p>
   * @public
   */
  export interface EpisodicReflectionConfigurationMember {
    episodicReflectionConfiguration: EpisodicReflectionConfigurationInput;
    customReflectionConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The updated custom reflection configuration.</p>
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
 * <p>The configuration for updating invocation settings.</p>
 * @public
 */
export interface ModifyInvocationConfigurationInput {
  /**
   * <p>The updated ARN of the SNS topic for job notifications.</p>
   * @public
   */
  topicArn?: string | undefined;

  /**
   * <p>The updated S3 bucket name for event payload delivery.</p>
   * @public
   */
  payloadDeliveryBucketName?: string | undefined;
}

/**
 * <p>The configuration for updating the self-managed memory strategy.</p>
 * @public
 */
export interface ModifySelfManagedConfiguration {
  /**
   * <p>The updated list of conditions that trigger memory processing.</p>
   * @public
   */
  triggerConditions?: TriggerConditionInput[] | undefined;

  /**
   * <p>The updated configuration to invoke self-managed memory processing pipeline.</p>
   * @public
   */
  invocationConfiguration?: ModifyInvocationConfigurationInput | undefined;

  /**
   * <p>The updated number of historical messages to include in processing context.</p>
   * @public
   */
  historicalContextWindowSize?: number | undefined;
}

/**
 * <p>Contains information for modifying a strategy configuration.</p>
 * @public
 */
export interface ModifyStrategyConfiguration {
  /**
   * <p>The updated extraction configuration.</p>
   * @public
   */
  extraction?: ModifyExtractionConfiguration | undefined;

  /**
   * <p>The updated consolidation configuration.</p>
   * @public
   */
  consolidation?: ModifyConsolidationConfiguration | undefined;

  /**
   * <p>The updated reflection configuration.</p>
   * @public
   */
  reflection?: ModifyReflectionConfiguration | undefined;

  /**
   * <p>The updated self-managed configuration.</p>
   * @public
   */
  selfManagedConfiguration?: ModifySelfManagedConfiguration | undefined;
}

/**
 * <p>Input for modifying a memory strategy.</p>
 * @public
 */
export interface ModifyMemoryStrategyInput {
  /**
   * <p>The unique identifier of the memory strategy to modify.</p>
   * @public
   */
  memoryStrategyId: string | undefined;

  /**
   * <p>The updated description of the memory strategy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>This is a legacy parameter, use <code>namespaceTemplates</code>. The updated namespaces for the memory strategy.</p>
   *
   * @deprecated (since 2026-03-02) Use namespaceTemplates instead.
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The updated namespaceTemplates for the memory strategy.</p>
   * @public
   */
  namespaceTemplates?: string[] | undefined;

  /**
   * <p>The updated configuration for the memory strategy.</p>
   * @public
   */
  configuration?: ModifyStrategyConfiguration | undefined;

  /**
   * <p>Updated metadata schema for records generated by this strategy.</p>
   * @public
   */
  memoryRecordSchema?: MemoryRecordSchema | undefined;
}

/**
 * <p>Contains information for modifying memory strategies.</p>
 * @public
 */
export interface ModifyMemoryStrategies {
  /**
   * <p>The list of memory strategies to add.</p>
   * @public
   */
  addMemoryStrategies?: MemoryStrategyInput[] | undefined;

  /**
   * <p>The list of memory strategies to modify.</p>
   * @public
   */
  modifyMemoryStrategies?: ModifyMemoryStrategyInput[] | undefined;

  /**
   * <p>The list of memory strategies to delete.</p>
   * @public
   */
  deleteMemoryStrategies?: DeleteMemoryStrategyInput[] | undefined;
}

/**
 * @public
 */
export interface UpdateMemoryInput {
  /**
   * <p>A client token is used for keeping track of idempotent requests. It can contain a session id which can be around 250 chars, combined with a unique AWS identifier.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unique identifier of the memory to update.</p>
   * @public
   */
  memoryId: string | undefined;

  /**
   * <p>The updated description of the AgentCore Memory resource.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The number of days after which memory events will expire, between 7 and 365 days.</p>
   * @public
   */
  eventExpiryDuration?: number | undefined;

  /**
   * <p>The ARN of the IAM role that provides permissions for the AgentCore Memory resource.</p>
   * @public
   */
  memoryExecutionRoleArn?: string | undefined;

  /**
   * <p>The memory strategies to add, modify, or delete.</p>
   * @public
   */
  memoryStrategies?: ModifyMemoryStrategies | undefined;

  /**
   * <p>Additional metadata keys to index. Previously indexed keys cannot be removed.</p>
   * @public
   */
  addIndexedKeys?: IndexedKey[] | undefined;

  /**
   * <p>Configuration for streaming memory record data to external resources.</p>
   * @public
   */
  streamDeliveryResources?: StreamDeliveryResources | undefined;
}

/**
 * @public
 */
export interface UpdateMemoryOutput {
  /**
   * <p>The updated AgentCore Memory resource details.</p>
   * @public
   */
  memory?: Memory | undefined;
}

/**
 * <p>Configuration settings for connecting to Atlassian services using OAuth2 authentication. This includes the client credentials required to authenticate with Atlassian's OAuth2 authorization server.</p>
 * @public
 */
export interface AtlassianOauth2ProviderConfigInput {
  /**
   * <p>The client ID for the Atlassian OAuth2 provider. This identifier is assigned by Atlassian when you register your application.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The client secret for the Atlassian OAuth2 provider. This secret is assigned by Atlassian and used along with the client ID to authenticate your application.</p>
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * <p>A reference to the Amazon Web Services Secrets Manager secret that stores the client secret. This includes the secret ID and the JSON key used to extract the client secret value from the secret. Required when <code>clientSecretSource</code> is set to <code>EXTERNAL</code>.</p>
   * @public
   */
  clientSecretConfig?: SecretReference | undefined;

  /**
   * <p>The source type of the client secret for the Atlassian OAuth2 provider. Use <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if you manage the secret yourself in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;
}

/**
 * <p>Contains the authorization server metadata for an OAuth2 provider.</p>
 * @public
 */
export interface Oauth2AuthorizationServerMetadata {
  /**
   * <p>The issuer URL for the OAuth2 authorization server.</p>
   * @public
   */
  issuer: string | undefined;

  /**
   * <p>The authorization endpoint URL for the OAuth2 authorization server.</p>
   * @public
   */
  authorizationEndpoint: string | undefined;

  /**
   * <p>The token endpoint URL for the OAuth2 authorization server.</p>
   * @public
   */
  tokenEndpoint: string | undefined;

  /**
   * <p>The supported response types for the OAuth2 authorization server.</p>
   * @public
   */
  responseTypes?: string[] | undefined;

  /**
   * <p>The authentication methods supported by the token endpoint. This specifies how clients can authenticate when requesting tokens from the authorization server.</p>
   * @public
   */
  tokenEndpointAuthMethods?: string[] | undefined;
}

/**
 * <p>Contains the discovery information for an OAuth2 provider.</p>
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
   * <p>The discovery URL for the OAuth2 provider.</p>
   * @public
   */
  export interface DiscoveryUrlMember {
    discoveryUrl: string;
    authorizationServerMetadata?: never;
    $unknown?: never;
  }

  /**
   * <p>The authorization server metadata for the OAuth2 provider.</p>
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
 * <p>Configuration for RFC 8693 token exchange.</p>
 * @public
 */
export interface TokenExchangeGrantTypeConfigType {
  /**
   * <p>The content type for the actor token in the token exchange.</p>
   * @public
   */
  actorTokenContent: ActorTokenContentType | undefined;

  /**
   * <p>The scopes for the actor token. Only valid when actorTokenContent is M2M.</p>
   * @public
   */
  actorTokenScopes?: string[] | undefined;
}

/**
 * <p>Configuration for on-behalf-of token exchange.</p>
 * @public
 */
export interface OnBehalfOfTokenExchangeConfigType {
  /**
   * <p>The grant type for the on-behalf-of token exchange.</p>
   * @public
   */
  grantType: OnBehalfOfTokenExchangeGrantTypeType | undefined;

  /**
   * <p>Configuration specific to the TOKEN_EXCHANGE grant type (RFC 8693).</p>
   * @public
   */
  tokenExchangeGrantTypeConfig?: TokenExchangeGrantTypeConfigType | undefined;
}

/**
 * <p>Contains the KMS key configuration for a JWT client assertion.</p>
 * @public
 */
export interface KmsKeySourceType {
  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to sign the JWT client assertion. The key must be an asymmetric key with key usage SIGN_VERIFY and a key spec compatible with the configured signing algorithm.</p>
   * @public
   */
  kmsKeyArn: string | undefined;
}

/**
 * <p>Contains the private key source configuration for a JWT client assertion.</p>
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
   * <p>The KMS key source for the JWT client assertion.</p>
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
 * Configuration for private_key_jwt client authentication (RFC 7523).
 * On Create: privateKeySource and signingAlgorithm are required (enforced server-side).
 * On Update: all fields are optional — only provided fields are updated.
 * @public
 */
export interface PrivateKeyJwtConfig {
  /**
   * <p>The private key source for the JWT client assertion.</p>
   * @public
   */
  privateKeySource?: PrivateKeySource | undefined;

  /**
   * <p>The algorithm used to sign the JWT client assertion. Valid values are <code>RS256</code>, <code>PS256</code>, and <code>ES256</code>.</p>
   * @public
   */
  signingAlgorithm?: SigningAlgorithm | undefined;

  /**
   * <p>A map of additional claims to include in the JWT client assertion header. Standard header claims such as <code>alg</code> and <code>typ</code> cannot be added.</p>
   * @public
   */
  additionalHeaderClaims?: Record<string, string> | undefined;

  /**
   * <p>A map of additional claims to include in the JWT client assertion payload. Payload claims generated by the service, such as <code>iss</code>, <code>sub</code>, <code>jti</code>, and <code>exp</code>, cannot be added.</p>
   * @public
   */
  additionalPayloadClaims?: Record<string, string> | undefined;
}

/**
 * <p>Input configuration for a custom OAuth2 provider.</p>
 * @public
 */
export interface CustomOauth2ProviderConfigInput {
  /**
   * <p>The OAuth2 discovery information for the custom provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the custom OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;

  /**
   * <p>The client secret for the custom OAuth2 provider.</p>
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * <p>A reference to the Amazon Web Services Secrets Manager secret that stores the client secret. This includes the secret ID and the JSON key used to extract the client secret value from the secret. Required when <code>clientSecretSource</code> is set to <code>EXTERNAL</code>.</p>
   * @public
   */
  clientSecretConfig?: SecretReference | undefined;

  /**
   * <p>The source type of the client secret. Use <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if you manage the secret yourself in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;

  /**
   * <p>The configuration for on-behalf-of token exchange. This enables authentication flows that use RFC 8693 token exchange or RFC 7523 JWT authorization grants.</p>
   * @public
   */
  onBehalfOfTokenExchangeConfig?: OnBehalfOfTokenExchangeConfigType | undefined;

  /**
   * <p>The client authentication method to use when authenticating with the token endpoint.</p>
   * @public
   */
  clientAuthenticationMethod?: ClientAuthenticationMethodType | undefined;

  /**
   * Configuration for private_key_jwt client authentication (RFC 7523).
   * On Create: privateKeySource and signingAlgorithm are required (enforced server-side).
   * On Update: all fields are optional — only provided fields are updated.
   * @public
   */
  privateKeyJwtConfig?: PrivateKeyJwtConfig | undefined;

  /**
   * <p>The default private endpoint for the custom OAuth2 provider, enabling secure connectivity through a VPC Lattice resource configuration.</p>
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * <p>The private endpoint overrides for the custom OAuth2 provider configuration.</p>
   * @public
   */
  privateEndpointOverrides?: PrivateEndpointOverride[] | undefined;
}

/**
 * <p>Input configuration for a GitHub OAuth2 provider.</p>
 * @public
 */
export interface GithubOauth2ProviderConfigInput {
  /**
   * <p>The client ID for the GitHub OAuth2 provider.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The client secret for the GitHub OAuth2 provider.</p>
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * <p>A reference to the Amazon Web Services Secrets Manager secret that stores the client secret. This includes the secret ID and the JSON key used to extract the client secret value from the secret. Required when <code>clientSecretSource</code> is set to <code>EXTERNAL</code>.</p>
   * @public
   */
  clientSecretConfig?: SecretReference | undefined;

  /**
   * <p>The source type of the client secret. Use <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if you manage the secret yourself in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;
}

/**
 * <p>Input configuration for a Google OAuth2 provider.</p>
 * @public
 */
export interface GoogleOauth2ProviderConfigInput {
  /**
   * <p>The client ID for the Google OAuth2 provider.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The client secret for the Google OAuth2 provider.</p>
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * <p>A reference to the Amazon Web Services Secrets Manager secret that stores the client secret. This includes the secret ID and the JSON key used to extract the client secret value from the secret. Required when <code>clientSecretSource</code> is set to <code>EXTERNAL</code>.</p>
   * @public
   */
  clientSecretConfig?: SecretReference | undefined;

  /**
   * <p>The source type of the client secret. Use <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if you manage the secret yourself in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;
}

/**
 * <p>Configuration settings for connecting to a supported OAuth2 provider. This includes client credentials and OAuth2 discovery information for providers that have built-in support.</p>
 * @public
 */
export interface IncludedOauth2ProviderConfigInput {
  /**
   * <p>The client ID for the supported OAuth2 provider. This identifier is assigned by the OAuth2 provider when you register your application.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The client secret for the supported OAuth2 provider. This secret is assigned by the OAuth2 provider and used along with the client ID to authenticate your application.</p>
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * <p>A reference to the Amazon Web Services Secrets Manager secret that stores the client secret. This includes the secret ID and the JSON key used to extract the client secret value from the secret. Required when <code>clientSecretSource</code> is set to <code>EXTERNAL</code>.</p>
   * @public
   */
  clientSecretConfig?: SecretReference | undefined;

  /**
   * <p>The source type of the client secret. Use <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if you manage the secret yourself in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;

  /**
   * <p>Token issuer of your isolated OAuth2 application tenant. This URL identifies the authorization server that issues tokens for this provider.</p>
   * @public
   */
  issuer?: string | undefined;

  /**
   * <p>OAuth2 authorization endpoint for your isolated OAuth2 application tenant. This is where users are redirected to authenticate and authorize access to their resources.</p>
   * @public
   */
  authorizationEndpoint?: string | undefined;

  /**
   * <p>OAuth2 token endpoint for your isolated OAuth2 application tenant. This is where authorization codes are exchanged for access tokens.</p>
   * @public
   */
  tokenEndpoint?: string | undefined;
}

/**
 * <p>Configuration settings for connecting to LinkedIn services using OAuth2 authentication. This includes the client credentials required to authenticate with LinkedIn's OAuth2 authorization server.</p>
 * @public
 */
export interface LinkedinOauth2ProviderConfigInput {
  /**
   * <p>The client ID for the LinkedIn OAuth2 provider. This identifier is assigned by LinkedIn when you register your application.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The client secret for the LinkedIn OAuth2 provider. This secret is assigned by LinkedIn and used along with the client ID to authenticate your application.</p>
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * <p>A reference to the Amazon Web Services Secrets Manager secret that stores the client secret. This includes the secret ID and the JSON key used to extract the client secret value from the secret. Required when <code>clientSecretSource</code> is set to <code>EXTERNAL</code>.</p>
   * @public
   */
  clientSecretConfig?: SecretReference | undefined;

  /**
   * <p>The source type of the client secret. Use <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if you manage the secret yourself in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;
}

/**
 * <p>Input configuration for a Microsoft OAuth2 provider.</p>
 * @public
 */
export interface MicrosoftOauth2ProviderConfigInput {
  /**
   * <p>The client ID for the Microsoft OAuth2 provider.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The client secret for the Microsoft OAuth2 provider.</p>
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * <p>A reference to the Amazon Web Services Secrets Manager secret that stores the client secret. This includes the secret ID and the JSON key used to extract the client secret value from the secret. Required when <code>clientSecretSource</code> is set to <code>EXTERNAL</code>.</p>
   * @public
   */
  clientSecretConfig?: SecretReference | undefined;

  /**
   * <p>The source type of the client secret. Use <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if you manage the secret yourself in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;

  /**
   * <p>The Microsoft Entra ID (formerly Azure AD) tenant ID for your organization. This identifies the specific tenant within Microsoft's identity platform where your application is registered.</p>
   * @public
   */
  tenantId?: string | undefined;
}

/**
 * <p>Input configuration for a Salesforce OAuth2 provider.</p>
 * @public
 */
export interface SalesforceOauth2ProviderConfigInput {
  /**
   * <p>The client ID for the Salesforce OAuth2 provider.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The client secret for the Salesforce OAuth2 provider.</p>
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * <p>A reference to the Amazon Web Services Secrets Manager secret that stores the client secret. This includes the secret ID and the JSON key used to extract the client secret value from the secret. Required when <code>clientSecretSource</code> is set to <code>EXTERNAL</code>.</p>
   * @public
   */
  clientSecretConfig?: SecretReference | undefined;

  /**
   * <p>The source type of the client secret. Use <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if you manage the secret yourself in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;
}

/**
 * <p>Input configuration for a Slack OAuth2 provider.</p>
 * @public
 */
export interface SlackOauth2ProviderConfigInput {
  /**
   * <p>The client ID for the Slack OAuth2 provider.</p>
   * @public
   */
  clientId: string | undefined;

  /**
   * <p>The client secret for the Slack OAuth2 provider.</p>
   * @public
   */
  clientSecret?: string | undefined;

  /**
   * <p>A reference to the Amazon Web Services Secrets Manager secret that stores the client secret. This includes the secret ID and the JSON key used to extract the client secret value from the secret. Required when <code>clientSecretSource</code> is set to <code>EXTERNAL</code>.</p>
   * @public
   */
  clientSecretConfig?: SecretReference | undefined;

  /**
   * <p>The source type of the client secret. Use <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if you manage the secret yourself in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;
}

/**
 * <p>Contains the input configuration for an OAuth2 provider.</p>
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
   * <p>The configuration for a custom OAuth2 provider.</p>
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
   * <p>The configuration for a Google OAuth2 provider.</p>
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
   * <p>The configuration for a GitHub OAuth2 provider.</p>
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
   * <p>The configuration for a Slack OAuth2 provider.</p>
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
   * <p>The configuration for a Salesforce OAuth2 provider.</p>
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
   * <p>The configuration for a Microsoft OAuth2 provider.</p>
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
   * <p>Configuration settings for Atlassian OAuth2 provider integration.</p>
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
   * <p>Configuration settings for LinkedIn OAuth2 provider integration.</p>
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
   * <p>The configuration for a non-custom OAuth2 provider. This includes settings for supported OAuth2 providers that have built-in integration support.</p>
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
   * <p>The name of the OAuth2 credential provider. The name must be unique within your account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The vendor of the OAuth2 credential provider. This specifies which OAuth2 implementation to use.</p>
   * @public
   */
  credentialProviderVendor: CredentialProviderVendorType | undefined;

  /**
   * <p>The configuration settings for the OAuth2 provider, including client ID, client secret, and other vendor-specific settings.</p>
   * @public
   */
  oauth2ProviderConfigInput: Oauth2ProviderConfigInput | undefined;

  /**
   * <p>A map of tag keys and values to assign to the OAuth2 credential provider. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The configuration details returned for an Atlassian OAuth2 provider, including the client ID and OAuth2 discovery information.</p>
 * @public
 */
export interface AtlassianOauth2ProviderConfigOutput {
  /**
   * <p>Contains the discovery information for an OAuth2 provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the Atlassian OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;
}

/**
 * <p>Output configuration for a custom OAuth2 provider.</p>
 * @public
 */
export interface CustomOauth2ProviderConfigOutput {
  /**
   * <p>The OAuth2 discovery information for the custom provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the custom OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;

  /**
   * <p>The configuration for on-behalf-of token exchange.</p>
   * @public
   */
  onBehalfOfTokenExchangeConfig?: OnBehalfOfTokenExchangeConfigType | undefined;

  /**
   * <p>The client authentication method used when authenticating with the token endpoint.</p>
   * @public
   */
  clientAuthenticationMethod?: ClientAuthenticationMethodType | undefined;

  /**
   * <p>The default private endpoint for the custom OAuth2 provider, enabling secure connectivity through a VPC Lattice resource configuration.</p>
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * <p>The private endpoint overrides for the custom OAuth2 provider configuration.</p>
   * @public
   */
  privateEndpointOverrides?: PrivateEndpointOverride[] | undefined;

  /**
   * Configuration for private_key_jwt client authentication (RFC 7523).
   * On Create: privateKeySource and signingAlgorithm are required (enforced server-side).
   * On Update: all fields are optional — only provided fields are updated.
   * @public
   */
  privateKeyJwtConfig?: PrivateKeyJwtConfig | undefined;
}

/**
 * <p>Output configuration for a GitHub OAuth2 provider.</p>
 * @public
 */
export interface GithubOauth2ProviderConfigOutput {
  /**
   * <p>The OAuth2 discovery information for the GitHub provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the GitHub OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;
}

/**
 * <p>Output configuration for a Google OAuth2 provider.</p>
 * @public
 */
export interface GoogleOauth2ProviderConfigOutput {
  /**
   * <p>The OAuth2 discovery information for the Google provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the Google OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;
}

/**
 * <p>The configuration details returned for a supported OAuth2 provider, including client credentials and OAuth2 discovery information.</p>
 * @public
 */
export interface IncludedOauth2ProviderConfigOutput {
  /**
   * <p>Contains the discovery information for an OAuth2 provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the supported OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;
}

/**
 * <p>The configuration details returned for a LinkedIn OAuth2 provider, including the client ID and OAuth2 discovery information.</p>
 * @public
 */
export interface LinkedinOauth2ProviderConfigOutput {
  /**
   * <p>Contains the discovery information for an OAuth2 provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the LinkedIn OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;
}

/**
 * <p>Output configuration for a Microsoft OAuth2 provider.</p>
 * @public
 */
export interface MicrosoftOauth2ProviderConfigOutput {
  /**
   * <p>The OAuth2 discovery information for the Microsoft provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the Microsoft OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;
}

/**
 * <p>Output configuration for a Salesforce OAuth2 provider.</p>
 * @public
 */
export interface SalesforceOauth2ProviderConfigOutput {
  /**
   * <p>The OAuth2 discovery information for the Salesforce provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the Salesforce OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;
}

/**
 * <p>Output configuration for a Slack OAuth2 provider.</p>
 * @public
 */
export interface SlackOauth2ProviderConfigOutput {
  /**
   * <p>The OAuth2 discovery information for the Slack provider.</p>
   * @public
   */
  oauthDiscovery: Oauth2Discovery | undefined;

  /**
   * <p>The client ID for the Slack OAuth2 provider.</p>
   * @public
   */
  clientId?: string | undefined;
}

/**
 * <p>Contains the output configuration for an OAuth2 provider.</p>
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
   * <p>The output configuration for a custom OAuth2 provider.</p>
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
   * <p>The output configuration for a Google OAuth2 provider.</p>
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
   * <p>The output configuration for a GitHub OAuth2 provider.</p>
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
   * <p>The output configuration for a Slack OAuth2 provider.</p>
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
   * <p>The output configuration for a Salesforce OAuth2 provider.</p>
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
   * <p>The output configuration for a Microsoft OAuth2 provider.</p>
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
   * <p>The configuration details for the Atlassian OAuth2 provider.</p>
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
   * <p>The configuration details for the LinkedIn OAuth2 provider.</p>
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
   * <p>The configuration for a non-custom OAuth2 provider. This includes the configuration details for supported OAuth2 providers that have built-in integration support.</p>
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
   * <p>The Amazon Resource Name (ARN) of the client secret in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  clientSecretArn: Secret | undefined;

  /**
   * <p>The JSON key used to extract the client secret value from the Amazon Web Services Secrets Manager secret.</p>
   * @public
   */
  clientSecretJsonKey?: string | undefined;

  /**
   * <p>The source type of the client secret. Either <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if managed by the user in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;

  /**
   * <p>The name of the OAuth2 credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the OAuth2 credential provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * <p>Callback URL to register on the OAuth2 credential provider as an allowed callback URL. This URL is where the OAuth2 authorization server redirects users after they complete the authorization flow.</p>
   * @public
   */
  callbackUrl?: string | undefined;

  /**
   * <p>Contains the output configuration for an OAuth2 provider.</p>
   * @public
   */
  oauth2ProviderConfigOutput?: Oauth2ProviderConfigOutput | undefined;

  /**
   * <p>The current status of the OAuth2 credential provider.</p>
   * @public
   */
  status?: Status | undefined;
}

/**
 * @public
 */
export interface DeleteOauth2CredentialProviderRequest {
  /**
   * <p>The name of the OAuth2 credential provider to delete.</p>
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
   * <p>The name of the OAuth2 credential provider to retrieve.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetOauth2CredentialProviderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the client secret in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  clientSecretArn: Secret | undefined;

  /**
   * <p>The JSON key used to extract the client secret value from the Amazon Web Services Secrets Manager secret.</p>
   * @public
   */
  clientSecretJsonKey?: string | undefined;

  /**
   * <p>The source type of the client secret. Either <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if managed by the user in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;

  /**
   * <p>The name of the OAuth2 credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>ARN of the credential provider requested.</p>
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * <p>The vendor of the OAuth2 credential provider.</p>
   * @public
   */
  credentialProviderVendor: CredentialProviderVendorType | undefined;

  /**
   * <p>Callback URL to register on the OAuth2 credential provider as an allowed callback URL. This URL is where the OAuth2 authorization server redirects users after they complete the authorization flow.</p>
   * @public
   */
  callbackUrl?: string | undefined;

  /**
   * <p>The configuration output for the OAuth2 provider.</p>
   * @public
   */
  oauth2ProviderConfigOutput: Oauth2ProviderConfigOutput | undefined;

  /**
   * <p>The timestamp when the OAuth2 credential provider was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the OAuth2 credential provider was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The current status of the OAuth2 credential provider.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The reason for failure if the OAuth2 credential provider is in a failed state.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListOauth2CredentialProvidersRequest {
  /**
   * <p>Pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains information about an OAuth2 credential provider.</p>
 * @public
 */
export interface Oauth2CredentialProviderItem {
  /**
   * <p>The name of the OAuth2 credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The vendor of the OAuth2 credential provider.</p>
   * @public
   */
  credentialProviderVendor: CredentialProviderVendorType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the OAuth2 credential provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * <p>The timestamp when the OAuth2 credential provider was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the OAuth2 credential provider was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListOauth2CredentialProvidersResponse {
  /**
   * <p>The list of OAuth2 credential providers.</p>
   * @public
   */
  credentialProviders: Oauth2CredentialProviderItem[] | undefined;

  /**
   * <p>Pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOauth2CredentialProviderRequest {
  /**
   * <p>The name of the OAuth2 credential provider to update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The vendor of the OAuth2 credential provider.</p>
   * @public
   */
  credentialProviderVendor: CredentialProviderVendorType | undefined;

  /**
   * <p>The configuration input for the OAuth2 provider.</p>
   * @public
   */
  oauth2ProviderConfigInput: Oauth2ProviderConfigInput | undefined;
}

/**
 * @public
 */
export interface UpdateOauth2CredentialProviderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the client secret in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  clientSecretArn: Secret | undefined;

  /**
   * <p>The JSON key used to extract the client secret value from the Amazon Web Services Secrets Manager secret.</p>
   * @public
   */
  clientSecretJsonKey?: string | undefined;

  /**
   * <p>The source type of the client secret. Either <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if managed by the user in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  clientSecretSource?: SecretSourceType | undefined;

  /**
   * <p>The name of the OAuth2 credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The vendor of the OAuth2 credential provider.</p>
   * @public
   */
  credentialProviderVendor: CredentialProviderVendorType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the OAuth2 credential provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * <p>Callback URL to register on the OAuth2 credential provider as an allowed callback URL. This URL is where the OAuth2 authorization server redirects users after they complete the authorization flow.</p>
   * @public
   */
  callbackUrl?: string | undefined;

  /**
   * <p>The configuration output for the OAuth2 provider.</p>
   * @public
   */
  oauth2ProviderConfigOutput: Oauth2ProviderConfigOutput | undefined;

  /**
   * <p>The timestamp when the OAuth2 credential provider was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the OAuth2 credential provider was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The current status of the updated OAuth2 credential provider.</p>
   * @public
   */
  status?: Status | undefined;
}

/**
 * <p>Configuration for periodic batch evaluation clustering, specifying how often clustering jobs run.</p>
 * @public
 */
export interface ClusteringConfig {
  /**
   * <p>The list of frequencies at which clustering batch evaluations are triggered.</p>
   * @public
   */
  frequencies: ClusteringFrequency[] | undefined;
}

/**
 * <p> The configuration for reading agent traces from CloudWatch logs as input for online evaluation. </p>
 * @public
 */
export interface CloudWatchLogsInputConfig {
  /**
   * <p> The list of CloudWatch log group names to monitor for agent traces.</p>
   * @public
   */
  logGroupNames: string[] | undefined;

  /**
   * <p> The list of service names to filter traces within the specified log groups. Used to identify relevant agent sessions. </p>
   * @public
   */
  serviceNames: string[] | undefined;
}

/**
 * <p> The configuration that specifies where to read agent traces for online evaluation. </p>
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
   * <p> The CloudWatch logs configuration for reading agent traces from log groups. </p>
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
 * <p> The reference to an evaluator used in online evaluation configurations, containing the evaluator identifier. </p>
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
   * <p> The unique identifier of the evaluator. Can reference builtin evaluators (e.g., Builtin.Helpfulness) or custom evaluators. </p>
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
 * <p>A reference to an insight analysis to run against sessions during evaluation. Insights provide deeper analysis beyond individual evaluator scores, including failure detection, user intent clustering, and execution summarization.</p>
 * @public
 */
export interface Insight {
  /**
   * <p>The unique identifier of the insight to run.</p>
   * @public
   */
  insightId: string | undefined;
}

/**
 * <p> The value used in filter comparisons, supporting different data types for flexible filtering criteria. </p>
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
   * <p> The string value for text-based filtering. </p>
   * @public
   */
  export interface StringValueMember {
    stringValue: string;
    doubleValue?: never;
    booleanValue?: never;
    $unknown?: never;
  }

  /**
   * <p> The numeric value for numerical filtering and comparisons. </p>
   * @public
   */
  export interface DoubleValueMember {
    stringValue?: never;
    doubleValue: number;
    booleanValue?: never;
    $unknown?: never;
  }

  /**
   * <p> The boolean value for true/false filtering conditions. </p>
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
 * <p> The filter that applies conditions to agent traces during online evaluation to determine which traces should be evaluated. </p>
 * @public
 */
export interface Filter {
  /**
   * <p> The key or field name to filter on within the agent trace data. </p>
   * @public
   */
  key: string | undefined;

  /**
   * <p> The comparison operator to use for filtering. </p>
   * @public
   */
  operator: FilterOperator | undefined;

  /**
   * <p> The value to compare against using the specified operator. </p>
   * @public
   */
  value: FilterValue | undefined;
}

/**
 * <p> The configuration that controls what percentage of agent traces are sampled for evaluation to manage evaluation volume and costs. </p>
 * @public
 */
export interface SamplingConfig {
  /**
   * <p> The percentage of agent traces to sample for evaluation, ranging from 0.01% to 100%. </p>
   * @public
   */
  samplingPercentage: number | undefined;
}

/**
 * <p> The configuration that defines how agent sessions are detected and when they are considered complete for evaluation. </p>
 * @public
 */
export interface SessionConfig {
  /**
   * <p> The number of minutes of inactivity after which an agent session is considered complete and ready for evaluation. Default is 15 minutes. </p>
   * @public
   */
  sessionTimeoutMinutes: number | undefined;
}

/**
 * <p> The evaluation rule that defines sampling configuration, filtering criteria, and session detection settings for online evaluation. </p>
 * @public
 */
export interface Rule {
  /**
   * <p> The sampling configuration that determines what percentage of agent traces to evaluate. </p>
   * @public
   */
  samplingConfig: SamplingConfig | undefined;

  /**
   * <p> The list of filters that determine which agent traces should be included in the evaluation based on trace properties. </p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p> The session configuration that defines timeout settings for detecting when agent sessions are complete and ready for evaluation. </p>
   * @public
   */
  sessionConfig?: SessionConfig | undefined;
}

/**
 * @public
 */
export interface CreateOnlineEvaluationConfigRequest {
  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p> The name of the online evaluation configuration. Must be unique within your account. </p>
   * @public
   */
  onlineEvaluationConfigName: string | undefined;

  /**
   * <p> The description of the online evaluation configuration that explains its monitoring purpose and scope. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The evaluation rule that defines sampling configuration, filters, and session detection settings for the online evaluation. </p>
   * @public
   */
  rule: Rule | undefined;

  /**
   * <p> The data source configuration that specifies CloudWatch log groups and service names to monitor for agent traces. </p>
   * @public
   */
  dataSourceConfig: DataSourceConfig | undefined;

  /**
   * <p> The list of evaluators to apply during online evaluation. Can include both built-in evaluators and custom evaluators created with <code>CreateEvaluator</code>. </p>
   * @public
   */
  evaluators?: EvaluatorReference[] | undefined;

  /**
   * <p>The list of insight types to run against agent sessions.</p>
   * @public
   */
  insights?: Insight[] | undefined;

  /**
   * <p>Configuration for periodic batch evaluation clustering of insight results.</p>
   * @public
   */
  clusteringConfig?: ClusteringConfig | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM role that grants permissions to read from CloudWatch logs, write evaluation results, and invoke Amazon Bedrock models for evaluation. If the configuration references evaluators encrypted with a customer managed KMS key, this role must also have <code>kms:Decrypt</code> permission on the KMS key. The service validates this permission at configuration creation time. For more information, see <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/evaluations-encryption.html">Encryption at rest for AgentCore Evaluations</a>. </p>
   * @public
   */
  evaluationExecutionRoleArn: string | undefined;

  /**
   * <p> Whether to enable the online evaluation configuration immediately upon creation. If true, evaluation begins automatically. </p>
   * @public
   */
  enableOnCreate: boolean | undefined;

  /**
   * <p>A map of tag keys and values to assign to an AgentCore Online Evaluation Config. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p> The configuration for writing evaluation results to CloudWatch logs with embedded metric format (EMF) for monitoring. </p>
 * @public
 */
export interface CloudWatchOutputConfig {
  /**
   * <p> The name of the CloudWatch log group where evaluation results will be written. The log group will be created if it doesn't exist. </p>
   * @public
   */
  logGroupName: string | undefined;
}

/**
 * <p> The configuration that specifies where evaluation results should be written for monitoring and analysis. </p>
 * @public
 */
export interface OutputConfig {
  /**
   * <p> The CloudWatch configuration for writing evaluation results to CloudWatch logs with embedded metric format. </p>
   * @public
   */
  cloudWatchConfig: CloudWatchOutputConfig | undefined;
}

/**
 * @public
 */
export interface CreateOnlineEvaluationConfigResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the created online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigArn: string | undefined;

  /**
   * <p> The unique identifier of the created online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigId: string | undefined;

  /**
   * <p> The timestamp when the online evaluation configuration was created. </p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p> The configuration that specifies where evaluation results should be written for monitoring and analysis. </p>
   * @public
   */
  outputConfig?: OutputConfig | undefined;

  /**
   * <p> The status of the online evaluation configuration. </p>
   * @public
   */
  status: OnlineEvaluationConfigStatus | undefined;

  /**
   * <p> The execution status indicating whether the online evaluation is currently running. </p>
   * @public
   */
  executionStatus: OnlineEvaluationExecutionStatus | undefined;

  /**
   * <p> The reason for failure if the online evaluation configuration creation or execution failed. </p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface DeleteOnlineEvaluationConfigRequest {
  /**
   * <p> The unique identifier of the online evaluation configuration to delete. </p>
   * @public
   */
  onlineEvaluationConfigId: string | undefined;
}

/**
 * @public
 */
export interface DeleteOnlineEvaluationConfigResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the deleted online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigArn: string | undefined;

  /**
   * <p> The unique identifier of the deleted online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigId: string | undefined;

  /**
   * <p> The status of the online evaluation configuration deletion operation. </p>
   * @public
   */
  status: OnlineEvaluationConfigStatus | undefined;
}

/**
 * @public
 */
export interface GetOnlineEvaluationConfigRequest {
  /**
   * <p> The unique identifier of the online evaluation configuration to retrieve. </p>
   * @public
   */
  onlineEvaluationConfigId: string | undefined;
}

/**
 * @public
 */
export interface GetOnlineEvaluationConfigResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigArn: string | undefined;

  /**
   * <p> The unique identifier of the online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigId: string | undefined;

  /**
   * <p> The name of the online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigName: string | undefined;

  /**
   * <p> The description of the online evaluation configuration. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The evaluation rule containing sampling configuration, filters, and session settings. </p>
   * @public
   */
  rule: Rule | undefined;

  /**
   * <p> The data source configuration specifying CloudWatch log groups and service names to monitor. </p>
   * @public
   */
  dataSourceConfig: DataSourceConfig | undefined;

  /**
   * <p> The list of evaluators applied during online evaluation. </p>
   * @public
   */
  evaluators?: EvaluatorReference[] | undefined;

  /**
   * <p>The list of insight types configured for this evaluation.</p>
   * @public
   */
  insights?: Insight[] | undefined;

  /**
   * <p>The clustering configuration for periodic batch evaluation.</p>
   * @public
   */
  clusteringConfig?: ClusteringConfig | undefined;

  /**
   * <p> The output configuration specifying where evaluation results are written. </p>
   * @public
   */
  outputConfig?: OutputConfig | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM role used for evaluation execution. </p>
   * @public
   */
  evaluationExecutionRoleArn?: string | undefined;

  /**
   * <p> The status of the online evaluation configuration. </p>
   * @public
   */
  status: OnlineEvaluationConfigStatus | undefined;

  /**
   * <p> The execution status indicating whether the online evaluation is currently running. </p>
   * @public
   */
  executionStatus: OnlineEvaluationExecutionStatus | undefined;

  /**
   * <p> The timestamp when the online evaluation configuration was created. </p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p> The timestamp when the online evaluation configuration was last updated. </p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p> The reason for failure if the online evaluation configuration execution failed. </p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface ListOnlineEvaluationConfigsRequest {
  /**
   * <p> The pagination token from a previous request to retrieve the next page of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> The maximum number of online evaluation configurations to return in a single response. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p> The summary information about an online evaluation configuration, including basic metadata and execution status. </p>
 * @public
 */
export interface OnlineEvaluationConfigSummary {
  /**
   * <p> The Amazon Resource Name (ARN) of the online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigArn: string | undefined;

  /**
   * <p> The unique identifier of the online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigId: string | undefined;

  /**
   * <p> The name of the online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigName: string | undefined;

  /**
   * <p> The description of the online evaluation configuration. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The status of the online evaluation configuration. </p>
   * @public
   */
  status: OnlineEvaluationConfigStatus | undefined;

  /**
   * <p> The execution status indicating whether the online evaluation is currently running. </p>
   * @public
   */
  executionStatus: OnlineEvaluationExecutionStatus | undefined;

  /**
   * <p> The timestamp when the online evaluation configuration was created. </p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p> The timestamp when the online evaluation configuration was last updated. </p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p> The reason for failure if the online evaluation configuration execution failed. </p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The list of insight types configured for this evaluation.</p>
   * @public
   */
  insights?: Insight[] | undefined;

  /**
   * <p>The clustering configuration for periodic batch evaluation.</p>
   * @public
   */
  clusteringConfig?: ClusteringConfig | undefined;
}

/**
 * @public
 */
export interface ListOnlineEvaluationConfigsResponse {
  /**
   * <p> The list of online evaluation configuration summaries containing basic information about each configuration. </p>
   * @public
   */
  onlineEvaluationConfigs: OnlineEvaluationConfigSummary[] | undefined;

  /**
   * <p> The pagination token to use in a subsequent request to retrieve the next page of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateOnlineEvaluationConfigRequest {
  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p> The unique identifier of the online evaluation configuration to update. </p>
   * @public
   */
  onlineEvaluationConfigId: string | undefined;

  /**
   * <p> The updated description of the online evaluation configuration. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The updated evaluation rule containing sampling configuration, filters, and session settings. </p>
   * @public
   */
  rule?: Rule | undefined;

  /**
   * <p> The updated data source configuration specifying CloudWatch log groups and service names to monitor. </p>
   * @public
   */
  dataSourceConfig?: DataSourceConfig | undefined;

  /**
   * <p> The updated list of evaluators to apply during online evaluation. </p>
   * @public
   */
  evaluators?: EvaluatorReference[] | undefined;

  /**
   * <p>The updated list of insight types to run against agent sessions.</p>
   * @public
   */
  insights?: Insight[] | undefined;

  /**
   * <p>The updated clustering configuration for periodic batch evaluation.</p>
   * @public
   */
  clusteringConfig?: ClusteringConfig | undefined;

  /**
   * <p> The updated Amazon Resource Name (ARN) of the IAM role used for evaluation execution. </p>
   * @public
   */
  evaluationExecutionRoleArn?: string | undefined;

  /**
   * <p> The updated execution status to enable or disable the online evaluation. </p>
   * @public
   */
  executionStatus?: OnlineEvaluationExecutionStatus | undefined;
}

/**
 * @public
 */
export interface UpdateOnlineEvaluationConfigResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the updated online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigArn: string | undefined;

  /**
   * <p> The unique identifier of the updated online evaluation configuration. </p>
   * @public
   */
  onlineEvaluationConfigId: string | undefined;

  /**
   * <p> The timestamp when the online evaluation configuration was last updated. </p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p> The status of the online evaluation configuration. </p>
   * @public
   */
  status: OnlineEvaluationConfigStatus | undefined;

  /**
   * <p> The execution status indicating whether the online evaluation is currently running. </p>
   * @public
   */
  executionStatus: OnlineEvaluationExecutionStatus | undefined;

  /**
   * <p> The reason for failure if the online evaluation configuration update or execution failed. </p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * <p>Coinbase CDP configuration — credentials provided by Coinbase Developer Platform.</p>
 * @public
 */
export interface CoinbaseCdpConfigurationInput {
  /**
   * <p>The API key identifier provided by Coinbase Developer Platform.</p>
   * @public
   */
  apiKeyId: string | undefined;

  /**
   * <p>The API key secret provided by Coinbase Developer Platform.</p>
   * @public
   */
  apiKeySecret?: string | undefined;

  /**
   * <p>The source type of the API key secret for the Coinbase Developer Platform. Use <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if you manage the secret yourself in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  apiKeySecretSource?: SecretSourceType | undefined;

  /**
   * <p>A reference to the Amazon Web Services Secrets Manager secret that stores the API key secret. This includes the secret ID and the JSON key used to extract the API key secret value from the secret. Required when <code>apiKeySecretSource</code> is set to <code>EXTERNAL</code>.</p>
   * @public
   */
  apiKeySecretConfig?: SecretReference | undefined;

  /**
   * <p>The wallet secret provided by Coinbase Developer Platform.</p>
   * @public
   */
  walletSecret?: string | undefined;

  /**
   * <p>The source type of the wallet secret for the Coinbase Developer Platform. Use <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if you manage the secret yourself in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  walletSecretSource?: SecretSourceType | undefined;

  /**
   * <p>A reference to the Amazon Web Services Secrets Manager secret that stores the wallet secret. This includes the secret ID and the JSON key used to extract the wallet secret value from the secret. Required when <code>walletSecretSource</code> is set to <code>EXTERNAL</code>.</p>
   * @public
   */
  walletSecretConfig?: SecretReference | undefined;
}

/**
 * <p>Stripe Privy configuration — credentials provided by Stripe and Privy.</p>
 * @public
 */
export interface StripePrivyConfigurationInput {
  /**
   * <p>The app ID provided by Privy.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>The app secret provided by Privy.</p>
   * @public
   */
  appSecret?: string | undefined;

  /**
   * <p>The source type of the app secret. Use <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if you manage the secret yourself in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  appSecretSource?: SecretSourceType | undefined;

  /**
   * <p>A reference to the Amazon Web Services Secrets Manager secret that stores the app secret. This includes the secret ID and the JSON key used to extract the app secret value from the secret. Required when <code>appSecretSource</code> is set to <code>EXTERNAL</code>.</p>
   * @public
   */
  appSecretConfig?: SecretReference | undefined;

  /**
   * <p>The authorization private key for the Stripe Privy integration.</p>
   * @public
   */
  authorizationPrivateKey?: string | undefined;

  /**
   * <p>The source type of the authorization private key. Use <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if you manage the secret yourself in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  authorizationPrivateKeySource?: SecretSourceType | undefined;

  /**
   * <p>A reference to the Amazon Web Services Secrets Manager secret that stores the authorization private key. This includes the secret ID and the JSON key used to extract the authorization private key value from the secret. Required when <code>authorizationPrivateKeySource</code> is set to <code>EXTERNAL</code>.</p>
   * @public
   */
  authorizationPrivateKeyConfig?: SecretReference | undefined;

  /**
   * <p>The authorization ID for the Stripe Privy integration.</p>
   * @public
   */
  authorizationId: string | undefined;
}

/**
 * <p>Provider configuration input — contains secrets for creation and update. Varies by vendor type.</p>
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
   * <p>The Coinbase CDP configuration.</p>
   * @public
   */
  export interface CoinbaseCdpConfigurationMember {
    coinbaseCdpConfiguration: CoinbaseCdpConfigurationInput;
    stripePrivyConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The Stripe Privy configuration.</p>
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
   * <p>Unique name for the payment credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The vendor type for the payment credential provider (e.g., CoinbaseCDP, StripePrivy).</p>
   * @public
   */
  credentialProviderVendor: PaymentCredentialProviderVendorType | undefined;

  /**
   * <p>Configuration specific to the vendor, including API credentials.</p>
   * @public
   */
  providerConfigurationInput: PaymentProviderConfigurationInput | undefined;

  /**
   * <p>Optional tags for resource organization.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Coinbase CDP configuration output with secret ARNs.</p>
 * @public
 */
export interface CoinbaseCdpConfigurationOutput {
  /**
   * <p>The API key identifier provided by Coinbase Developer Platform.</p>
   * @public
   */
  apiKeyId: string | undefined;

  /**
   * <p>Contains information about a secret in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  apiKeySecretArn: Secret | undefined;

  /**
   * <p>The JSON key used to extract the API key secret value from the Amazon Web Services Secrets Manager secret.</p>
   * @public
   */
  apiKeySecretJsonKey?: string | undefined;

  /**
   * <p>The source type of the API key secret. Either <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if managed by the user in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  apiKeySecretSource?: SecretSourceType | undefined;

  /**
   * <p>Contains information about a secret in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  walletSecretArn: Secret | undefined;

  /**
   * <p>The JSON key used to extract the wallet secret value from the Amazon Web Services Secrets Manager secret.</p>
   * @public
   */
  walletSecretJsonKey?: string | undefined;

  /**
   * <p>The source type of the wallet secret. Either <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if managed by the user in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  walletSecretSource?: SecretSourceType | undefined;
}

/**
 * <p>Stripe Privy configuration output with secret ARNs.</p>
 * @public
 */
export interface StripePrivyConfigurationOutput {
  /**
   * <p>The app ID provided by Privy.</p>
   * @public
   */
  appId: string | undefined;

  /**
   * <p>Contains information about a secret in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  appSecretArn: Secret | undefined;

  /**
   * <p>The JSON key used to extract the app secret value from the Amazon Web Services Secrets Manager secret.</p>
   * @public
   */
  appSecretJsonKey?: string | undefined;

  /**
   * <p>The source type of the app secret. Either <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if managed by the user in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  appSecretSource?: SecretSourceType | undefined;

  /**
   * <p>Contains information about a secret in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  authorizationPrivateKeyArn: Secret | undefined;

  /**
   * <p>The JSON key used to extract the authorization private key value from the Amazon Web Services Secrets Manager secret.</p>
   * @public
   */
  authorizationPrivateKeyJsonKey?: string | undefined;

  /**
   * <p>The source type of the authorization private key. Either <code>MANAGED</code> if the secret is managed by the service, or <code>EXTERNAL</code> if managed by the user in Amazon Web Services Secrets Manager.</p>
   * @public
   */
  authorizationPrivateKeySource?: SecretSourceType | undefined;

  /**
   * <p>The authorization ID for the Stripe Privy integration.</p>
   * @public
   */
  authorizationId: string | undefined;
}

/**
 * <p>Provider configuration output — no raw secrets, only ARNs. Varies by vendor type.</p>
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
   * <p>The Coinbase CDP configuration.</p>
   * @public
   */
  export interface CoinbaseCdpConfigurationMember {
    coinbaseCdpConfiguration: CoinbaseCdpConfigurationOutput;
    stripePrivyConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The Stripe Privy configuration.</p>
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
   * <p>The name of the created payment credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The vendor type for the created payment credential provider.</p>
   * @public
   */
  credentialProviderVendor: PaymentCredentialProviderVendorType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created payment credential provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * <p>Output configuration (contains secret ARNs, excludes actual secret values).</p>
   * @public
   */
  providerConfigurationOutput: PaymentProviderConfigurationOutput | undefined;
}

/**
 * @public
 */
export interface DeletePaymentCredentialProviderRequest {
  /**
   * <p>The name of the payment credential provider to delete.</p>
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
   * <p>The name of the payment credential provider to retrieve.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetPaymentCredentialProviderResponse {
  /**
   * <p>The name of the payment credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the payment credential provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * <p>The vendor type for the payment credential provider.</p>
   * @public
   */
  credentialProviderVendor: PaymentCredentialProviderVendorType | undefined;

  /**
   * <p>Output configuration (contains secret ARNs, excludes actual secret values).</p>
   * @public
   */
  providerConfigurationOutput: PaymentProviderConfigurationOutput | undefined;

  /**
   * <p>The timestamp when the payment credential provider was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the payment credential provider was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The tags associated with the payment credential provider.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListPaymentCredentialProvidersRequest {
  /**
   * <p>Pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains summary information about a payment credential provider.</p>
 * @public
 */
export interface PaymentCredentialProviderItem {
  /**
   * <p>The name of the payment credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The vendor type for the payment credential provider.</p>
   * @public
   */
  credentialProviderVendor: PaymentCredentialProviderVendorType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the payment credential provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * <p>The timestamp when the payment credential provider was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the payment credential provider was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListPaymentCredentialProvidersResponse {
  /**
   * <p>The list of payment credential providers.</p>
   * @public
   */
  credentialProviders: PaymentCredentialProviderItem[] | undefined;

  /**
   * <p>Pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePaymentCredentialProviderRequest {
  /**
   * <p>The name of the payment credential provider to update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The vendor type for the payment credential provider (e.g., CoinbaseCDP, StripePrivy).</p>
   * @public
   */
  credentialProviderVendor: PaymentCredentialProviderVendorType | undefined;

  /**
   * <p>Configuration specific to the vendor, including API credentials.</p>
   * @public
   */
  providerConfigurationInput: PaymentProviderConfigurationInput | undefined;
}

/**
 * @public
 */
export interface UpdatePaymentCredentialProviderResponse {
  /**
   * <p>The name of the updated payment credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The vendor type for the updated payment credential provider.</p>
   * @public
   */
  credentialProviderVendor: PaymentCredentialProviderVendorType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated payment credential provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * <p>Output configuration (contains secret ARNs, excludes actual secret values).</p>
   * @public
   */
  providerConfigurationOutput: PaymentProviderConfigurationOutput | undefined;

  /**
   * <p>The timestamp when the payment credential provider was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the payment credential provider was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface CreatePaymentManagerRequest {
  /**
   * <p>The name of the payment manager.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the payment manager.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of authorizer to use for the payment manager.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> </ul>
   * @public
   */
  authorizerType: PaymentsAuthorizerType | undefined;

  /**
   * <p>The authorizer configuration for the payment manager.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that the payment manager assumes to access resources on your behalf.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A map of tag keys and values to assign to the payment manager.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the customer managed KMS key to use for encrypting sensitive payment manager data at rest. If you don't specify a key, the data is encrypted with an Amazon Web Services owned key.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreatePaymentManagerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created payment manager.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The unique identifier of the created payment manager.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The name of the created payment manager.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of authorizer for the created payment manager.</p>
   * @public
   */
  authorizerType: PaymentsAuthorizerType | undefined;

  /**
   * <p>Represents inbound authorization configuration options used to authenticate incoming requests. </p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the created payment manager.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The information about the workload identity.</p>
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * <p>The timestamp when the payment manager was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The current status of the payment manager. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentManagerStatus | undefined;

  /**
   * <p>The tags associated with the created payment manager.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt sensitive payment manager data at rest, if configured.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface DeletePaymentManagerRequest {
  /**
   * <p>The unique identifier of the payment manager to delete.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePaymentManagerResponse {
  /**
   * <p>The current status of the payment manager, set to <code>DELETING</code> when deletion is initiated. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentManagerStatus | undefined;

  /**
   * <p>The unique identifier of the deleted payment manager.</p>
   * @public
   */
  paymentManagerId?: string | undefined;
}

/**
 * @public
 */
export interface GetPaymentManagerRequest {
  /**
   * <p>The unique identifier of the payment manager to retrieve.</p>
   * @public
   */
  paymentManagerId: string | undefined;
}

/**
 * @public
 */
export interface GetPaymentManagerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the payment manager.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The unique identifier of the payment manager.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The name of the payment manager.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the payment manager.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of authorizer used by the payment manager.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> </ul>
   * @public
   */
  authorizerType: PaymentsAuthorizerType | undefined;

  /**
   * <p>Represents inbound authorization configuration options used to authenticate incoming requests. </p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the payment manager.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The information about the workload identity.</p>
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * <p>The timestamp when the payment manager was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the payment manager was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The current status of the payment manager. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentManagerStatus | undefined;

  /**
   * <p>The tags associated with the payment manager.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt sensitive payment manager data at rest, if configured.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListPaymentManagersRequest {
  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a payment manager.</p>
 * @public
 */
export interface PaymentManagerSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the payment manager.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The unique identifier of the payment manager.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The name of the payment manager.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the payment manager.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of authorizer used by the payment manager.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> </ul>
   * @public
   */
  authorizerType: PaymentsAuthorizerType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the payment manager.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The current status of the payment manager. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentManagerStatus | undefined;

  /**
   * <p>The timestamp when the payment manager was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the payment manager was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt sensitive payment manager data at rest, if configured.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListPaymentManagersResponse {
  /**
   * <p>The list of payment manager summaries. For details about the fields in each summary, see the <code>PaymentManagerSummary</code> data type.</p>
   * @public
   */
  paymentManagers: PaymentManagerSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Configuration for a payment credential provider that stores authentication credentials for a payment provider.</p>
 * @public
 */
export interface PaymentCredentialProviderConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the credential provider that stores the authentication credentials for the payment provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;
}

/**
 * <p>The credential provider configuration for a payment connector. Specifies the payment provider type and its associated credential provider.</p>
 * @public
 */
export type CredentialsProviderConfiguration =
  | CredentialsProviderConfiguration.CoinbaseCDPMember
  | CredentialsProviderConfiguration.StripePrivyMember
  | CredentialsProviderConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace CredentialsProviderConfiguration {
  /**
   * <p>The credential provider configuration for a Coinbase CDP payment connector.</p>
   * @public
   */
  export interface CoinbaseCDPMember {
    coinbaseCDP: PaymentCredentialProviderConfiguration;
    stripePrivy?: never;
    $unknown?: never;
  }

  /**
   * <p>The credential provider configuration for a Stripe Privy payment connector.</p>
   * @public
   */
  export interface StripePrivyMember {
    coinbaseCDP?: never;
    stripePrivy: PaymentCredentialProviderConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    coinbaseCDP?: never;
    stripePrivy?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    coinbaseCDP: (value: PaymentCredentialProviderConfiguration) => T;
    stripePrivy: (value: PaymentCredentialProviderConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreatePaymentConnectorRequest {
  /**
   * <p>The unique identifier of the payment manager to create the connector for.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The name of the payment connector.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the payment connector.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of payment connector, which determines the payment provider integration.</p>
   * @public
   */
  type: PaymentConnectorType | undefined;

  /**
   * <p>The credential provider configurations for the payment connector. These configurations specify how the connector authenticates with the payment provider.</p>
   * @public
   */
  credentialProviderConfigurations: CredentialsProviderConfiguration[] | undefined;

  /**
   * <p>The provision mode for creating the payment connector. If you don't specify a value, the default is <code>MANUAL</code>.</p> <ul> <li> <p> <code>MANUAL</code> - You provide the credential provider configurations directly.</p> </li> <li> <p> <code>QUICK_CREATE</code> - The service orchestrates OAuth consent and provisions the credential provider for you.</p> </li> </ul>
   * @public
   */
  provisionMode?: PaymentConnectorProvisionMode | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreatePaymentConnectorResponse {
  /**
   * <p>The unique identifier of the created payment connector.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The unique identifier of the parent payment manager.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The name of the created payment connector.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the created payment connector.</p>
   * @public
   */
  type: PaymentConnectorType | undefined;

  /**
   * <p>The credential provider configurations for the created payment connector.</p>
   * @public
   */
  credentialProviderConfigurations: CredentialsProviderConfiguration[] | undefined;

  /**
   * <p>The timestamp when the payment connector was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The current status of the payment connector. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentConnectorStatus | undefined;

  /**
   * <p>The URL that the user must open to complete OAuth consent. This field is only present when the payment connector status is <code>PENDING_AUTHENTICATION</code>.</p>
   * @public
   */
  authorizationUrl?: string | undefined;
}

/**
 * @public
 */
export interface DeletePaymentConnectorRequest {
  /**
   * <p>The unique identifier of the parent payment manager.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The unique identifier of the payment connector to delete.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePaymentConnectorResponse {
  /**
   * <p>The current status of the payment connector, set to <code>DELETING</code> when deletion is initiated. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentConnectorStatus | undefined;

  /**
   * <p>The unique identifier of the deleted payment connector.</p>
   * @public
   */
  paymentConnectorId?: string | undefined;
}

/**
 * @public
 */
export interface GetPaymentConnectorRequest {
  /**
   * <p>The unique identifier of the parent payment manager.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The unique identifier of the payment connector to retrieve.</p>
   * @public
   */
  paymentConnectorId: string | undefined;
}

/**
 * @public
 */
export interface GetPaymentConnectorResponse {
  /**
   * <p>The unique identifier of the payment connector.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The name of the payment connector.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the payment connector.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the payment connector, which determines the payment provider integration.</p>
   * @public
   */
  type: PaymentConnectorType | undefined;

  /**
   * <p>The credential provider configurations for the payment connector.</p>
   * @public
   */
  credentialProviderConfigurations: CredentialsProviderConfiguration[] | undefined;

  /**
   * <p>The timestamp when the payment connector was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the payment connector was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The current status of the payment connector. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentConnectorStatus | undefined;

  /**
   * <p>The URL that the user must open to complete OAuth consent. This field is only present when the payment connector status is <code>PENDING_AUTHENTICATION</code>.</p>
   * @public
   */
  authorizationUrl?: string | undefined;
}

/**
 * @public
 */
export interface ListPaymentConnectorsRequest {
  /**
   * <p>The unique identifier of the payment manager whose connectors to list.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a payment connector.</p>
 * @public
 */
export interface PaymentConnectorSummary {
  /**
   * <p>The unique identifier of the payment connector.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The name of the payment connector.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the payment connector, which determines the payment provider integration.</p>
   * @public
   */
  type: PaymentConnectorType | undefined;

  /**
   * <p>The current status of the payment connector. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentConnectorStatus | undefined;

  /**
   * <p>The timestamp when the payment connector was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListPaymentConnectorsResponse {
  /**
   * <p>The list of payment connector summaries. For details about the fields in each summary, see the <code>PaymentConnectorSummary</code> data type.</p>
   * @public
   */
  paymentConnectors: PaymentConnectorSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePaymentConnectorRequest {
  /**
   * <p>The unique identifier of the parent payment manager.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The unique identifier of the payment connector to update.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The updated description of the payment connector.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated type of the payment connector.</p>
   * @public
   */
  type?: PaymentConnectorType | undefined;

  /**
   * <p>The updated credential provider configurations for the payment connector.</p>
   * @public
   */
  credentialProviderConfigurations?: CredentialsProviderConfiguration[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePaymentConnectorResponse {
  /**
   * <p>The unique identifier of the updated payment connector.</p>
   * @public
   */
  paymentConnectorId: string | undefined;

  /**
   * <p>The unique identifier of the parent payment manager.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The name of the updated payment connector.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the updated payment connector.</p>
   * @public
   */
  type: PaymentConnectorType | undefined;

  /**
   * <p>The credential provider configurations for the updated payment connector.</p>
   * @public
   */
  credentialProviderConfigurations: CredentialsProviderConfiguration[] | undefined;

  /**
   * <p>The timestamp when the payment connector was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The current status of the updated payment connector. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentConnectorStatus | undefined;

  /**
   * <p>The URL that the user must open to complete OAuth consent. This field is only present when the payment connector status is <code>PENDING_AUTHENTICATION</code>.</p>
   * @public
   */
  authorizationUrl?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePaymentManagerRequest {
  /**
   * <p>The unique identifier of the payment manager to update.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The updated description of the payment manager.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated authorizer type for the payment manager.</p>
   * @public
   */
  authorizerType?: PaymentsAuthorizerType | undefined;

  /**
   * <p>The updated authorizer configuration for the payment manager.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The updated Amazon Resource Name (ARN) of the IAM role for the payment manager.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The updated Amazon Resource Name (ARN) of the customer managed KMS key used to encrypt sensitive payment manager data at rest.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePaymentManagerResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated payment manager.</p>
   * @public
   */
  paymentManagerArn: string | undefined;

  /**
   * <p>The unique identifier of the updated payment manager.</p>
   * @public
   */
  paymentManagerId: string | undefined;

  /**
   * <p>The name of the updated payment manager.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of authorizer for the updated payment manager.</p>
   * @public
   */
  authorizerType: PaymentsAuthorizerType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the updated payment manager.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The information about the workload identity.</p>
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * <p>The timestamp when the payment manager was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The current status of the updated payment manager. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>DELETING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: PaymentManagerStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt sensitive payment manager data at rest, if configured.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreatePolicyEngineRequest {
  /**
   * <p>The customer-assigned immutable name for the policy engine. This name identifies the policy engine and cannot be changed after creation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A human-readable description of the policy engine's purpose and scope (1-4,096 characters). This helps administrators understand the policy engine's role in the overall governance strategy. Document which Gateway this engine will be associated with, what types of tools or workflows it governs, and the team or service responsible for maintaining it. Clear descriptions are essential when managing multiple policy engines across different services or environments.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request with the same client token, the service returns the same response without creating a duplicate policy engine.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * <p>A map of tag keys and values to assign to an AgentCore Policy. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePolicyEngineResponse {
  /**
   * <p>The unique identifier for the created policy engine. This system-generated identifier consists of the user name plus a 10-character generated suffix and is used for all subsequent policy engine operations.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The customer-assigned name of the created policy engine. This matches the name provided in the request and serves as the human-readable identifier.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The timestamp when the policy engine was created. This is automatically set by the service and used for auditing and lifecycle management.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy engine was last updated. For newly created policy engines, this matches the <code>createdAt</code> timestamp.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created policy engine. This globally unique identifier can be used for cross-service references and IAM policy statements.</p>
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * <p>The current status of the policy engine. A status of <code>ACTIVE</code> indicates the policy engine is ready for use.</p>
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * <p>A human-readable description of the policy engine's purpose.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Additional information about the policy engine status. This provides details about any failures or the current state of the policy engine creation process.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface DeletePolicyEngineRequest {
  /**
   * <p>The unique identifier of the policy engine to be deleted. This must be a valid policy engine ID that exists within the account.</p>
   * @public
   */
  policyEngineId: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyEngineResponse {
  /**
   * <p>The unique identifier of the policy engine being deleted. This confirms which policy engine the deletion operation targets.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The customer-assigned name of the deleted policy engine.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The timestamp when the deleted policy engine was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the deleted policy engine was last modified before deletion. This tracks the final state of the policy engine before it was removed from the system.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted policy engine. This globally unique identifier confirms which policy engine resource was successfully removed.</p>
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * <p>The status of the policy engine deletion operation. This provides status about any issues that occurred during the deletion process.</p>
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * <p>The human-readable description of the deleted policy engine.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Additional information about the deletion status. This provides details about the deletion process or any issues that may have occurred.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface GetPolicyEngineRequest {
  /**
   * <p>The unique identifier of the policy engine to be retrieved. This must be a valid policy engine ID that exists within the account.</p>
   * @public
   */
  policyEngineId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyEngineResponse {
  /**
   * <p>The unique identifier of the retrieved policy engine. This matches the policy engine ID provided in the request and serves as the system identifier.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The customer-assigned name of the policy engine. This is the human-readable identifier that was specified when the policy engine was created.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The timestamp when the policy engine was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy engine was last modified. This tracks the most recent changes to the policy engine configuration.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy engine. This globally unique identifier can be used for cross-service references and IAM policy statements.</p>
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * <p>The current status of the policy engine.</p>
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * <p>The human-readable description of the policy engine's purpose and scope. This helps administrators understand the policy engine's role in governance.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Additional information about the policy engine status. This provides details about any failures or the current state of the policy engine.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface GetPolicyEngineSummaryRequest {
  /**
   * <p>The unique identifier of the policy engine to retrieve the summary for. This must be a valid policy engine ID that exists within the account.</p>
   * @public
   */
  policyEngineId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyEngineSummaryResponse {
  /**
   * <p>The unique identifier of the policy engine.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The customer-assigned name of the policy engine.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The timestamp when the policy engine was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy engine was last modified.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy engine.</p>
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * <p>The current status of the policy engine.</p>
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyEnginesRequest {
  /**
   * <p>A pagination token returned from a previous <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyEngines.html">ListPolicyEngines</a> call. Use this token to retrieve the next page of results when the response is paginated.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of policy engines to return in a single response. If not specified, the default is 10 policy engines per page, with a maximum of 100 per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Represents a policy engine resource within the AgentCore Policy system. Policy engines serve as containers for grouping related policies and provide the execution context for policy evaluation and management. Each policy engine can be associated with one Gateway (one engine per Gateway), where it intercepts all agent tool calls and evaluates them against the contained policies before allowing tools to execute. The policy engine maintains the Cedar schema generated from the Gateway's tool manifest, ensuring that policies are validated against the actual tools and parameters available. Policy engines support two enforcement modes that can be configured when associating with a Gateway: log-only mode for testing (evaluates decisions without blocking) and enforce mode for production (actively allows or denies based on policy evaluation).</p>
 * @public
 */
export interface PolicyEngine {
  /**
   * <p>The unique identifier for the policy engine. This system-generated identifier consists of the user name plus a 10-character generated suffix and serves as the primary key for policy engine operations.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The customer-assigned immutable name for the policy engine. This human-readable identifier must be unique within the account and cannot exceed 48 characters.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The timestamp when the policy engine was originally created. This is automatically set by the service and used for auditing and lifecycle management.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy engine was last modified. This tracks the most recent changes to the policy engine configuration or metadata.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy engine. This globally unique identifier can be used for cross-service references and IAM policy statements.</p>
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * <p>The current status of the policy engine.</p>
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * <p>A human-readable description of the policy engine's purpose and scope. Limited to 4,096 characters, this helps administrators understand the policy engine's role in the overall governance strategy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Additional information about the policy engine status. This provides details about any failures or the current state of the policy engine lifecycle.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface ListPolicyEnginesResponse {
  /**
   * <p>An array of policy engine objects that exist in the account. Each policy engine object contains the engine metadata, status, and key identifiers for further operations.</p>
   * @public
   */
  policyEngines: PolicyEngine[] | undefined;

  /**
   * <p>A pagination token that can be used in subsequent <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyEngines.html">ListPolicyEngines</a> calls to retrieve additional results. This token is only present when there are more results available. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyEngineSummariesRequest {
  /**
   * <p>A pagination token returned from a previous <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyEngineSummaries.html">ListPolicyEngineSummaries</a> call. Use this token to retrieve the next page of results when the response is paginated.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of policy engine summaries to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Represents a metadata-only summary of a policy engine resource. This structure contains resource identifiers, status, and timestamps without customer-encrypted fields such as description or status reasons. Policy engine summaries are returned by operations that do not require access to the customer's KMS key.</p>
 * @public
 */
export interface PolicyEngineSummary {
  /**
   * <p>The unique identifier for the policy engine.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The customer-assigned name of the policy engine.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The timestamp when the policy engine was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy engine was last modified.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy engine.</p>
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * <p>The current status of the policy engine.</p>
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyEngineSummariesResponse {
  /**
   * <p>An array of policy engine summary objects that exist in the account. Each summary contains resource identifiers, status, and timestamps without customer-encrypted content.</p>
   * @public
   */
  policyEngines: PolicyEngineSummary[] | undefined;

  /**
   * <p>A pagination token that can be used in subsequent <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyEngineSummaries.html">ListPolicyEngineSummaries</a> calls to retrieve additional results. This token is only present when there are more results available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyEngineRequest {
  /**
   * <p>The unique identifier of the policy engine to be updated.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The new description for the policy engine.</p>
   * @public
   */
  description?: UpdatedDescription | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyEngineResponse {
  /**
   * <p>The unique identifier of the updated policy engine.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The name of the updated policy engine.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The original creation timestamp of the policy engine.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy engine was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The ARN of the updated policy engine.</p>
   * @public
   */
  policyEngineArn: string | undefined;

  /**
   * <p>The current status of the updated policy engine.</p>
   * @public
   */
  status: PolicyEngineStatus | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;

  /**
   * <p>The updated description of the policy engine.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Additional information about the update status.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}
