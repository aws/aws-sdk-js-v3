// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AgentManagedRuntimeType,
  AgentRuntimeEndpointStatus,
  AgentRuntimeStatus,
  AuthorizerType,
  BrowserEnterprisePolicyType,
  BrowserNetworkMode,
  BrowserProfileStatus,
  BrowserStatus,
  CapacityProviderStatus,
  CapacityProviderStatusCode,
  CapacityReservationPreference,
  CircuitBreakerMode,
  ClaimMatchOperatorType,
  CodeInterpreterNetworkMode,
  CodeInterpreterStatus,
  ConfigurationBundleStatus,
  ConsentPortalSourceType,
  ConsentPortalStatus,
  DatasetSchemaType,
  DatasetStatus,
  DraftStatus,
  EbsVolumeType,
  EndpointIpAddressType,
  EvaluatorLevel,
  EvaluatorStatus,
  EvaluatorType,
  ExceptionLevel,
  FallbackError,
  GatewayInterceptionPoint,
  GatewayPolicyEngineMode,
  GatewayProtocolType,
  GatewayRateLimitStatus,
  GatewayRuleStatus,
  GatewayStatus,
  InboundTokenClaimValueType,
  IncludedData,
  InterceptorPayloadExclusion,
  MatchOperator,
  Monitoring,
  NetworkMode,
  OperatingSystem,
  Period,
  PrincipalMatchOperator,
  Provider,
  ResourceType,
  SearchType,
  SecretSourceType,
  ServerProtocol,
  WafFailureMode,
} from "./enums";

/**
 * The agent card definition for an A2A descriptor. Contains the schema version and inline content for the agent card.
 *
 * @public
 */
export interface AgentCardDefinition {
  /**
   * The schema version of the agent card based on the A2A protocol specification.
   *
   * @public
   */
  schemaVersion?: string | undefined;

  /**
   * The JSON content containing the A2A agent card definition, conforming to the A2A protocol specification.
   *
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * The Agent-to-Agent (A2A) protocol descriptor for a registry record. Contains the agent card definition as defined by the A2A protocol specification.
 *
 * @public
 */
export interface A2aDescriptor {
  /**
   * The agent card definition for the A2A agent, as defined by the A2A protocol specification.
   *
   * @public
   */
  agentCard?: AgentCardDefinition | undefined;
}

/**
 * A static configuration bundle override.
 *
 * @public
 */
export interface StaticOverride {
  /**
   * The Amazon Resource Name (ARN) of the configuration bundle to apply.
   *
   * @public
   */
  bundleArn: string | undefined;

  /**
   * The version of the configuration bundle to apply.
   *
   * @public
   */
  bundleVersion: string | undefined;
}

/**
 * A reference to a specific version of a configuration bundle.
 *
 * @public
 */
export interface ConfigurationBundleReference {
  /**
   * The Amazon Resource Name (ARN) of the configuration bundle.
   *
   * @public
   */
  bundleArn: string | undefined;

  /**
   * The version of the configuration bundle.
   *
   * @public
   */
  bundleVersion: string | undefined;
}

/**
 * An entry in a traffic split configuration, defining a named variant with a weight and configuration bundle reference.
 *
 * @public
 */
export interface TrafficSplitEntry {
  /**
   * The name of this traffic split variant.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The percentage of traffic to route to this variant. Weights across all entries must sum to 100.
   *
   * @public
   */
  weight: number | undefined;

  /**
   * The configuration bundle reference for this variant.
   *
   * @public
   */
  configurationBundle: ConfigurationBundleReference | undefined;

  /**
   * The description of this traffic split variant.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Key-value metadata associated with this traffic split variant.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;
}

/**
 * A weighted configuration bundle override that splits traffic between multiple bundle versions.
 *
 * @public
 */
export interface WeightedOverride {
  /**
   * The traffic split entries defining how traffic is distributed between configuration bundle versions.
   *
   * @public
   */
  trafficSplit: TrafficSplitEntry[] | undefined;
}

/**
 * An action that applies a configuration bundle override, either as a static override or a weighted split for A/B testing.
 *
 * @public
 */
export type ConfigurationBundleAction =
  | ConfigurationBundleAction.StaticOverrideMember
  | ConfigurationBundleAction.WeightedOverrideMember
  | ConfigurationBundleAction.$UnknownMember;

/**
 * @public
 */
export namespace ConfigurationBundleAction {
  /**
   * A static configuration bundle override that applies a single bundle version to all matching requests.
   *
   * @public
   */
  export interface StaticOverrideMember {
    staticOverride: StaticOverride;
    weightedOverride?: never;
    $unknown?: never;
  }

  /**
   * A weighted configuration bundle override that splits traffic between multiple bundle versions based on configured weights.
   *
   * @public
   */
  export interface WeightedOverrideMember {
    staticOverride?: never;
    weightedOverride: WeightedOverride;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    staticOverride?: never;
    weightedOverride?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    staticOverride: (value: StaticOverride) => T;
    weightedOverride: (value: WeightedOverride) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Specifies whether the circuit breaker monitors failures for the targets in a fallback chain.
 *
 * @public
 */
export interface CircuitBreakerConfiguration {
  /**
   * Specifies whether you want the circuit breaker turned on. To turn it off, set this value to `DISABLED`. The default is `ENABLED`.
   *
   * @public
   */
  mode?: CircuitBreakerMode | undefined;
}

/**
 * The conditions that trigger a fallback to the next target. A fallback occurs if the response matches any of the specified status codes or errors.
 *
 * @public
 */
export interface FallbackTriggers {
  /**
   * The HTTP status codes returned by the target that trigger a fallback. You can specify the following:
   *
   * - An exact status code – A three-digit code, such as `429`.
   * - A class of status codes – The first digit followed by `XX`, such as `5XX`, which matches every code from 500 to 599.
   *
   * Only 4XX and 5XX codes are supported. Throttling by the gateway itself doesn't trigger a fallback.
   *
   * @public
   */
  statusCodes?: string[] | undefined;

  /**
   * The errors that trigger a fallback. You can specify the following:
   *
   * - `CONNECTION_ERROR` – The gateway couldn't connect to the target because the connection was refused, reset, or timed out. The request didn't reach the target.
   * - `FIRST_BYTE_TIMEOUT` – The target accepted the connection but didn't return the first byte of the response within `firstByteTimeoutMilliseconds`. The gateway abandons the request before any of the response reaches you.
   * - `UNROUTABLE` – The gateway couldn't route the request to the target, for example because the target doesn't exist or doesn't support the request path. These errors don't count toward the circuit breaker.
   *
   * @public
   */
  errors?: FallbackError[] | undefined;
}

/**
 * Specifies a target to send the request to when the previous target in the fallback chain fails. Includes the target name, the model to send, and the conditions that trigger a fallback from this target to the next one.
 *
 * @public
 */
export interface FallbackTarget {
  /**
   * The name of the gateway target to fall back to. The target must be an inference target.
   *
   * @public
   */
  targetName: string | undefined;

  /**
   * The model ID to send to this fallback target. If you don't specify a model, the gateway sends the model from the original request.
   *
   * @public
   */
  model?: string | undefined;

  /**
   * The status codes and errors from this target that cause the gateway to send the request to the next fallback target. This setting isn't inherited from the route. If you omit it, the gateway uses the default triggers: `5XX` status codes and the `CONNECTION_ERROR`, `FIRST_BYTE_TIMEOUT`, and `UNROUTABLE` errors.
   *
   * @public
   */
  triggerOn?: FallbackTriggers | undefined;

  /**
   * The maximum time, in milliseconds, from sending the request to this target until the first byte of the response body arrives. This setting isn't inherited from the route. If you don't specify a value, no timeout is enforced.
   *
   * @public
   */
  firstByteTimeoutMilliseconds?: number | undefined;
}

/**
 * The fallback configuration for a route to an inference target. Defines an ordered list of fallback targets to try when a request to the route's target fails, and the conditions that trigger a fallback. A fallback can occur only before the gateway sends the first byte of the response to the caller. After a streaming response starts, the gateway doesn't fall back.
 *
 * @public
 */
export interface Fallback {
  /**
   * The status codes and errors from the route's target that cause the gateway to send the request to the first fallback target. If you omit `triggerOn`, the gateway falls back on `5XX` status codes and on the `CONNECTION_ERROR`, `FIRST_BYTE_TIMEOUT`, and `UNROUTABLE` errors. If you specify `triggerOn`, only the status codes and errors that you list trigger a fallback.
   *
   * @public
   */
  triggerOn?: FallbackTriggers | undefined;

  /**
   * The maximum time, in milliseconds, from sending the request to the route's target until the first byte of the response body arrives. If the time expires, the gateway abandons the request and treats it as a `FIRST_BYTE_TIMEOUT` error. If you don't specify a value, no timeout is enforced.
   *
   * @public
   */
  firstByteTimeoutMilliseconds?: number | undefined;

  /**
   * Specifies whether the gateway temporarily stops sending your requests to a failing target. The circuit breaker tracks each combination of target and model separately. With the circuit breaker enabled, the gateway skips one or more targets and models that fail repeatedly, and your requests go to the next target in the chain. The gateway always tries the last remaining target in the chain. The gateway enables the circuit breaker by default.
   *
   * @public
   */
  circuitBreaker?: CircuitBreakerConfiguration | undefined;

  /**
   * The ordered list of fallback targets. The gateway tries each target in order until a response doesn't match that target's triggers, and returns that response to the caller. If every target fails, the gateway returns the last response. You can specify up to two fallback targets. Each combination of target and model, including the route's target, can appear only once.
   *
   * @public
   */
  targetFallback: FallbackTarget[] | undefined;
}

/**
 * A static route to a single gateway target.
 *
 * @public
 */
export interface StaticRoute {
  /**
   * The name of the target to route requests to.
   *
   * @public
   */
  targetName: string | undefined;

  /**
   * The model ID to send to the target. Supported only for inference targets. If you don't specify a model, the gateway sends the model from the original request.
   *
   * @public
   */
  model?: string | undefined;

  /**
   * The fallback configuration for this route. Supported only for inference targets.
   *
   * @public
   */
  fallback?: Fallback | undefined;
}

/**
 * An entry in a target traffic split configuration.
 *
 * @public
 */
export interface TargetTrafficSplitEntry {
  /**
   * The name of the target to route traffic to.
   *
   * @public
   */
  targetName: string | undefined;

  /**
   * The model ID to send to the target for this variant. Supported only for inference targets. If you don't specify a model, the gateway sends the model from the original request.
   *
   * @public
   */
  model?: string | undefined;

  /**
   * The fallback configuration for this variant. Supported only for inference targets.
   *
   * @public
   */
  fallback?: Fallback | undefined;

  /**
   * The name of this traffic split variant.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The percentage of traffic to route to this variant.
   *
   * @public
   */
  weight: number | undefined;

  /**
   * The description of this traffic split variant.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Key-value metadata associated with this traffic split variant.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;
}

/**
 * A weighted route that splits traffic between multiple gateway targets.
 *
 * @public
 */
export interface WeightedRoute {
  /**
   * The traffic split entries defining how traffic is distributed between targets.
   *
   * @public
   */
  trafficSplit: TargetTrafficSplitEntry[] | undefined;
}

/**
 * An action that routes requests to a gateway target, either statically or with weighted traffic splitting.
 *
 * @public
 */
export type RouteToTargetAction =
  | RouteToTargetAction.StaticRouteMember
  | RouteToTargetAction.WeightedRouteMember
  | RouteToTargetAction.$UnknownMember;

/**
 * @public
 */
export namespace RouteToTargetAction {
  /**
   * A static route that sends all matching requests to a single target.
   *
   * @public
   */
  export interface StaticRouteMember {
    staticRoute: StaticRoute;
    weightedRoute?: never;
    $unknown?: never;
  }

  /**
   * A weighted route that splits traffic between multiple targets.
   *
   * @public
   */
  export interface WeightedRouteMember {
    staticRoute?: never;
    weightedRoute: WeightedRoute;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    staticRoute?: never;
    weightedRoute?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    staticRoute: (value: StaticRoute) => T;
    weightedRoute: (value: WeightedRoute) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An action to take when a gateway rule's conditions are met.
 *
 * @public
 */
export type Action =
  | Action.ConfigurationBundleMember
  | Action.RouteToTargetMember
  | Action.$UnknownMember;

/**
 * @public
 */
export namespace Action {
  /**
   * An action that applies a configuration bundle override to the request.
   *
   * @public
   */
  export interface ConfigurationBundleMember {
    configurationBundle: ConfigurationBundleAction;
    routeToTarget?: never;
    $unknown?: never;
  }

  /**
   * An action that routes the request to a specific target.
   *
   * @public
   */
  export interface RouteToTargetMember {
    configurationBundle?: never;
    routeToTarget: RouteToTargetAction;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    configurationBundle?: never;
    routeToTarget?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    configurationBundle: (value: ConfigurationBundleAction) => T;
    routeToTarget: (value: RouteToTargetAction) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Inline examples provided directly in the request body.
 *
 * @public
 */
export interface InlineExamplesSource {
  /**
   * Examples to add. Each example is assigned an auto-generated UUID.
   *
   * @public
   */
  examples: __DocumentType[] | undefined;
}

/**
 * Amazon S3 location of a JSONL file containing dataset examples.
 *
 * @public
 */
export interface S3Source {
  /**
   * Amazon S3 URI of the JSONL file (for example, `s3://my-bucket/path/to/examples.jsonl`).
   *
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * Source of examples to add to the dataset.
 *
 * @public
 */
export type DataSourceType =
  | DataSourceType.InlineExamplesMember
  | DataSourceType.S3SourceMember
  | DataSourceType.$UnknownMember;

/**
 * @public
 */
export namespace DataSourceType {
  /**
   * Inline examples provided directly in the request body.
   *
   * @public
   */
  export interface InlineExamplesMember {
    inlineExamples: InlineExamplesSource;
    s3Source?: never;
    $unknown?: never;
  }

  /**
   * Amazon S3 URI pointing to a JSONL file in the customer's bucket.
   *
   * @public
   */
  export interface S3SourceMember {
    inlineExamples?: never;
    s3Source: S3Source;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    inlineExamples?: never;
    s3Source?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    inlineExamples: (value: InlineExamplesSource) => T;
    s3Source: (value: S3Source) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface AddDatasetExamplesRequest {
  /**
   * The unique identifier of the dataset to add examples to.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Source of examples to add. Provide either inline examples or an S3 URI pointing to a JSONL file.
   *
   * @public
   */
  source: DataSourceType | undefined;
}

/**
 * @public
 */
export interface AddDatasetExamplesResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  datasetArn: string | undefined;

  /**
   * The unique identifier of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The current status of the dataset.
   *
   * @public
   */
  status: DatasetStatus | undefined;

  /**
   * The number of examples added.
   *
   * @public
   */
  addedCount: number | undefined;

  /**
   * The timestamp when the examples were added.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * IDs of all added examples (auto-generated UUIDs).
   *
   * @public
   */
  exampleIds: string[] | undefined;
}

/**
 * Stores information about a field passed inside a request that resulted in an exception.
 *
 * @public
 */
export interface ValidationExceptionField {
  /**
   * The name of the field.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A message describing why this field failed validation.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface CreateAgentRuntimeEndpointRequest {
  /**
   * The unique identifier of the AgentCore Runtime to create an endpoint for.
   *
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * The name of the AgentCore Runtime endpoint.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version of the AgentCore Runtime to use for the endpoint.
   *
   * @public
   */
  agentRuntimeVersion?: string | undefined;

  /**
   * The description of the AgentCore Runtime endpoint.
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
   * A map of tag keys and values to assign to the agent runtime endpoint. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAgentRuntimeEndpointResponse {
  /**
   * The target version of the AgentCore Runtime for the endpoint.
   *
   * @public
   */
  targetVersion: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AgentCore Runtime endpoint.
   *
   * @public
   */
  agentRuntimeEndpointArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * The unique identifier of the AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeId?: string | undefined;

  /**
   * The name of the AgentCore Runtime endpoint.
   *
   * @public
   */
  endpointName?: string | undefined;

  /**
   * The current status of the AgentCore Runtime endpoint.
   *
   * @public
   */
  status: AgentRuntimeEndpointStatus | undefined;

  /**
   * The timestamp when the AgentCore Runtime endpoint was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteAgentRuntimeEndpointRequest {
  /**
   * The unique identifier of the AgentCore Runtime associated with the endpoint.
   *
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * The name of the AgentCore Runtime endpoint to delete.
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
export interface DeleteAgentRuntimeEndpointResponse {
  /**
   * The current status of the AgentCore Runtime endpoint deletion.
   *
   * @public
   */
  status: AgentRuntimeEndpointStatus | undefined;

  /**
   * The unique identifier of the AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeId?: string | undefined;

  /**
   * The name of the AgentCore Runtime endpoint.
   *
   * @public
   */
  endpointName?: string | undefined;
}

/**
 * @public
 */
export interface GetAgentRuntimeEndpointRequest {
  /**
   * The unique identifier of the AgentCore Runtime associated with the endpoint.
   *
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * The name of the AgentCore Runtime endpoint to retrieve.
   *
   * @public
   */
  endpointName: string | undefined;
}

/**
 * @public
 */
export interface GetAgentRuntimeEndpointResponse {
  /**
   * The currently deployed version of the AgentCore Runtime on the endpoint.
   *
   * @public
   */
  liveVersion?: string | undefined;

  /**
   * The target version of the AgentCore Runtime for the endpoint.
   *
   * @public
   */
  targetVersion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AgentCore Runtime endpoint.
   *
   * @public
   */
  agentRuntimeEndpointArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * The description of the AgentCore Runtime endpoint.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The current status of the AgentCore Runtime endpoint.
   *
   * @public
   */
  status: AgentRuntimeEndpointStatus | undefined;

  /**
   * The timestamp when the AgentCore Runtime endpoint was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the AgentCore Runtime endpoint was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * The reason for failure if the AgentCore Runtime endpoint is in a failed state.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The name of the AgentCore Runtime endpoint.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The unique identifier of the AgentCore Runtime endpoint.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListAgentRuntimeEndpointsRequest {
  /**
   * The unique identifier of the AgentCore Runtime to list endpoints for.
   *
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains information about an agent runtime endpoint. An endpoint provides a way to connect to and interact with an agent runtime.
 *
 * @public
 */
export interface AgentRuntimeEndpoint {
  /**
   * The name of the agent runtime endpoint.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The live version of the agent runtime endpoint. This is the version that is currently serving requests.
   *
   * @public
   */
  liveVersion?: string | undefined;

  /**
   * The target version of the agent runtime endpoint. This is the version that the endpoint is being updated to.
   *
   * @public
   */
  targetVersion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the agent runtime endpoint.
   *
   * @public
   */
  agentRuntimeEndpointArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the agent runtime associated with the endpoint.
   *
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * The current status of the agent runtime endpoint.
   *
   * @public
   */
  status: AgentRuntimeEndpointStatus | undefined;

  /**
   * The unique identifier of the agent runtime endpoint.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The description of the agent runtime endpoint.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp when the agent runtime endpoint was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the agent runtime endpoint was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAgentRuntimeEndpointsResponse {
  /**
   * The list of AgentCore Runtime endpoints.
   *
   * @public
   */
  runtimeEndpoints: AgentRuntimeEndpoint[] | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentRuntimeEndpointRequest {
  /**
   * The unique identifier of the AgentCore Runtime associated with the endpoint.
   *
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * The name of the AgentCore Runtime endpoint to update.
   *
   * @public
   */
  endpointName: string | undefined;

  /**
   * The updated version of the AgentCore Runtime for the endpoint.
   *
   * @public
   */
  agentRuntimeVersion?: string | undefined;

  /**
   * The updated description of the AgentCore Runtime endpoint.
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
export interface UpdateAgentRuntimeEndpointResponse {
  /**
   * The currently deployed version of the AgentCore Runtime on the endpoint.
   *
   * @public
   */
  liveVersion?: string | undefined;

  /**
   * The target version of the AgentCore Runtime for the endpoint.
   *
   * @public
   */
  targetVersion?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AgentCore Runtime endpoint.
   *
   * @public
   */
  agentRuntimeEndpointArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * The current status of the updated AgentCore Runtime endpoint.
   *
   * @public
   */
  status: AgentRuntimeEndpointStatus | undefined;

  /**
   * The timestamp when the AgentCore Runtime endpoint was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the AgentCore Runtime endpoint was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * The Amazon S3 location for storing data. This structure defines where in Amazon S3 data is stored.
 *
 * @public
 */
export interface S3Location {
  /**
   * The name of the Amazon S3 bucket. This bucket contains the stored data.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * The prefix for objects in the Amazon S3 bucket. This prefix is added to the object keys to organize the data.
   *
   * @public
   */
  prefix: string | undefined;

  /**
   * The version ID of the Amazon Amazon S3 object. If not specified, the latest version of the object is used.
   *
   * @public
   */
  versionId?: string | undefined;
}

/**
 * The source code configuration that specifies the location and details of the code to be executed.
 *
 * @public
 */
export type Code =
  | Code.S3Member
  | Code.$UnknownMember;

/**
 * @public
 */
export namespace Code {
  /**
   * The Amazon Amazon S3 object that contains the source code for the agent runtime.
   *
   * @public
   */
  export interface S3Member {
    s3: S3Location;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: S3Location) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration for the source code that defines how the agent runtime code should be executed, including the code location, runtime environment, and entry point.
 *
 * @public
 */
export interface CodeConfiguration {
  /**
   * The source code location and configuration details.
   *
   * @public
   */
  code: Code | undefined;

  /**
   * The runtime environment for executing the agent code. Specify the programming language and version to use for the agent runtime. For valid values, see the list of supported runtimes.
   *
   * @public
   */
  runtime: AgentManagedRuntimeType | undefined;

  /**
   * The entry point for the code execution, specifying the function or method that should be invoked when the code runs.
   *
   * @public
   */
  entryPoint: string[] | undefined;
}

/**
 * Representation of a container configuration.
 *
 * @public
 */
export interface ContainerConfiguration {
  /**
   * The ECR URI of the container.
   *
   * @public
   */
  containerUri: string | undefined;
}

/**
 * The artifact of the agent.
 *
 * @public
 */
export type AgentRuntimeArtifact =
  | AgentRuntimeArtifact.CodeConfigurationMember
  | AgentRuntimeArtifact.ContainerConfigurationMember
  | AgentRuntimeArtifact.$UnknownMember;

/**
 * @public
 */
export namespace AgentRuntimeArtifact {
  /**
   * The container configuration for the agent artifact.
   *
   * @public
   */
  export interface ContainerConfigurationMember {
    containerConfiguration: ContainerConfiguration;
    codeConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The code configuration for the agent runtime artifact, including the source code location and execution settings.
   *
   * @public
   */
  export interface CodeConfigurationMember {
    containerConfiguration?: never;
    codeConfiguration: CodeConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    containerConfiguration?: never;
    codeConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    containerConfiguration: (value: ContainerConfiguration) => T;
    codeConfiguration: (value: CodeConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * An inclusive range of ports. The value of `from` must be less than or equal to the value of `to`.
 *
 * @public
 */
export interface PortRange {
  /**
   * The first port in the inclusive range.
   *
   * @public
   */
  from: number | undefined;

  /**
   * The last port in the inclusive range.
   *
   * @public
   */
  to: number | undefined;
}

/**
 * A port or port range that is reachable through the runtime's session URL. Specify exactly one of `port` or `portRange`.
 *
 * @public
 */
export type AllowedPort =
  | AllowedPort.PortMember
  | AllowedPort.PortRangeMember
  | AllowedPort.$UnknownMember;

/**
 * @public
 */
export namespace AllowedPort {
  /**
   * A single port that is reachable through the runtime's session URL.
   *
   * @public
   */
  export interface PortMember {
    port: number;
    portRange?: never;
    $unknown?: never;
  }

  /**
   * An inclusive range of ports that are reachable through the runtime's session URL.
   *
   * @public
   */
  export interface PortRangeMember {
    port?: never;
    portRange: PortRange;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    port?: never;
    portRange?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    port: (value: number) => T;
    portRange: (value: PortRange) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A hosting environment whose workloads are allowed to invoke the target. At launch, the only supported hosting environment is AgentCore Gateway.
 *
 * @public
 */
export interface HostingEnvironment {
  /**
   * The Amazon Resource Name (ARN) of the hosting environment.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * The configuration that restricts which workloads in the request's identity chain are allowed to invoke the target, identified by their hosting environments and workload identities. At launch, this is supported only for AgentCore Runtime targets, and the allowed workloads are AgentCore Gateways.
 *
 * @public
 */
export interface AllowedWorkloadConfiguration {
  /**
   * The list of hosting environments whose workloads are allowed to invoke the target. At launch, the only supported hosting environment is AgentCore Gateway.
   *
   * @public
   */
  hostingEnvironments?: HostingEnvironment[] | undefined;

  /**
   * The list of workload identities that are allowed to invoke the target.
   *
   * @public
   */
  workloadIdentities?: string[] | undefined;
}

/**
 * The value or values to match for.
 *
 * - Include a `matchValueString` with the `EQUALS` operator to specify a string that matches the claim field value.
 * - Include a `matchValueArray` to specify an array of string values. You can use the following operators:
 *
 *   - Use `CONTAINS` to yield a match if the claim field value is in the array.
 *   - Use `CONTAINS_ANY` to yield a match if the claim field value contains any of the strings in the array.
 *
 * @public
 */
export type ClaimMatchValueType =
  | ClaimMatchValueType.MatchValueStringMember
  | ClaimMatchValueType.MatchValueStringListMember
  | ClaimMatchValueType.$UnknownMember;

/**
 * @public
 */
export namespace ClaimMatchValueType {
  /**
   * The string value to match for.
   *
   * @public
   */
  export interface MatchValueStringMember {
    matchValueString: string;
    matchValueStringList?: never;
    $unknown?: never;
  }

  /**
   * An array of strings to check for a match.
   *
   * @public
   */
  export interface MatchValueStringListMember {
    matchValueString?: never;
    matchValueStringList: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    matchValueString?: never;
    matchValueStringList?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    matchValueString: (value: string) => T;
    matchValueStringList: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Defines the value or values to match for and the relationship of the match.
 *
 * @public
 */
export interface AuthorizingClaimMatchValueType {
  /**
   * The value or values to match for.
   *
   * @public
   */
  claimMatchValue: ClaimMatchValueType | undefined;

  /**
   * Defines the relationship between the claim field value and the value or values you're matching for.
   *
   * @public
   */
  claimMatchOperator: ClaimMatchOperatorType | undefined;
}

/**
 * Defines the name of a custom claim field and rules for finding matches to authenticate its value.
 *
 * @public
 */
export interface CustomClaimValidationType {
  /**
   * The name of the custom claim field to check.
   *
   * @public
   */
  inboundTokenClaimName: string | undefined;

  /**
   * The data type of the claim value to check for.
   *
   * - Use `STRING` if you want to find an exact match to a string you define.
   * - Use `STRING_ARRAY` if you want to fnd a match to at least one value in an array you define.
   *
   * @public
   */
  inboundTokenClaimValueType: InboundTokenClaimValueType | undefined;

  /**
   * Defines the value or values to match for and the relationship of the match.
   *
   * @public
   */
  authorizingClaimMatchValue: AuthorizingClaimMatchValueType | undefined;
}

/**
 * Configuration for a managed VPC Lattice resource. The gateway creates and manages the VPC Lattice resource gateway and resource configuration on your behalf using a service-linked role.
 *
 * @public
 */
export interface ManagedVpcResource {
  /**
   * The ID of the VPC that contains your private resource.
   *
   * @public
   */
  vpcIdentifier: string | undefined;

  /**
   * The subnet IDs within the VPC where the VPC Lattice resource gateway is placed.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The IP address type for the resource configuration endpoint.
   *
   * @public
   */
  endpointIpAddressType: EndpointIpAddressType | undefined;

  /**
   * The security group IDs to associate with the VPC Lattice resource gateway. If not specified, the default security group for the VPC is used.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * Tags to apply to the managed VPC Lattice resource gateway.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * An intermediate domain to use as the resource configuration endpoint instead of the actual target domain. Use this when you want to route traffic through an intermediate component such as a VPC endpoint or internal load balancer. For more information, see xref:lattice-vpc-egress-routing-domain[Route traffic through an intermediate domain].
   *
   * @public
   */
  routingDomain?: string | undefined;
}

/**
 * Configuration for a self-managed VPC Lattice resource. You create and manage the VPC Lattice resource gateway and resource configuration, then provide the resource configuration identifier.
 *
 * @public
 */
export type SelfManagedLatticeResource =
  | SelfManagedLatticeResource.ResourceConfigurationIdentifierMember
  | SelfManagedLatticeResource.$UnknownMember;

/**
 * @public
 */
export namespace SelfManagedLatticeResource {
  /**
   * The ARN or ID of the VPC Lattice resource configuration.
   *
   * @public
   */
  export interface ResourceConfigurationIdentifierMember {
    resourceConfigurationIdentifier: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    resourceConfigurationIdentifier?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    resourceConfigurationIdentifier: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The private endpoint configuration for a gateway target. Defines how the gateway connects to private resources in your VPC.
 *
 * @public
 */
export type PrivateEndpoint =
  | PrivateEndpoint.ManagedVpcResourceMember
  | PrivateEndpoint.SelfManagedLatticeResourceMember
  | PrivateEndpoint.$UnknownMember;

/**
 * @public
 */
export namespace PrivateEndpoint {
  /**
   * Configuration for connecting to a private resource using a self-managed VPC Lattice resource configuration.
   *
   * @public
   */
  export interface SelfManagedLatticeResourceMember {
    selfManagedLatticeResource: SelfManagedLatticeResource;
    managedVpcResource?: never;
    $unknown?: never;
  }

  /**
   * Configuration for connecting to a private resource using a managed VPC Lattice resource. The gateway creates and manages the VPC Lattice resources on your behalf.
   *
   * @public
   */
  export interface ManagedVpcResourceMember {
    selfManagedLatticeResource?: never;
    managedVpcResource: ManagedVpcResource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    selfManagedLatticeResource?: never;
    managedVpcResource?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    selfManagedLatticeResource: (value: SelfManagedLatticeResource) => T;
    managedVpcResource: (value: ManagedVpcResource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A mapping of a specific domain to a private endpoint for secure connectivity through a VPC Lattice resource configuration.
 *
 * @public
 */
export interface PrivateEndpointOverride {
  /**
   * The domain to override with a private endpoint.
   *
   * @public
   */
  domain: string | undefined;

  /**
   * The private endpoint configuration for the specified domain.
   *
   * @public
   */
  privateEndpoint: PrivateEndpoint | undefined;
}

/**
 * Configuration for inbound JWT-based authorization, specifying how incoming requests should be authenticated.
 *
 * @public
 */
export interface CustomJWTAuthorizerConfiguration {
  /**
   * This URL is used to fetch OpenID Connect configuration or authorization server metadata for validating incoming tokens.
   *
   * @public
   */
  discoveryUrl: string | undefined;

  /**
   * Represents individual audience values that are validated in the incoming JWT token validation process.
   *
   * @public
   */
  allowedAudience?: string[] | undefined;

  /**
   * Represents individual client IDs that are validated in the incoming JWT token validation process.
   *
   * @public
   */
  allowedClients?: string[] | undefined;

  /**
   * An array of scopes that are allowed to access the token.
   *
   * @public
   */
  allowedScopes?: string[] | undefined;

  /**
   * A map that associates each scope in `allowedScopes` with a corresponding advertised scope value. The advertised scope appears in OAuth protected resource metadata and `WWW-Authenticate` response headers. Use this parameter when the scope that clients request from your identity provider differs from the scope in the validated token. Each key is a scope from `allowedScopes` that the service uses for token validation. Each value is the corresponding scope that the service advertises to clients. Scopes without a mapping entry appear unchanged to clients.
   *
   * @public
   */
  advertisedScopeMapping?: Record<string, string> | undefined;

  /**
   * An array of objects that define a custom claim validation name, value, and operation
   *
   * @public
   */
  customClaims?: CustomClaimValidationType[] | undefined;

  /**
   * The private endpoint configuration for a gateway target. Defines how the gateway connects to private resources in your VPC.
   *
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * The private endpoint overrides for the custom JWT authorizer configuration.
   *
   * @public
   */
  privateEndpointOverrides?: PrivateEndpointOverride[] | undefined;

  /**
   * The configuration that restricts which workloads in the request's identity chain are allowed to invoke the target, identified by their hosting environments and workload identities. At launch, this is supported only for AgentCore Runtime targets, and the allowed workloads are AgentCore Gateways.
   *
   * @public
   */
  allowedWorkloadConfiguration?: AllowedWorkloadConfiguration | undefined;
}

/**
 * Represents inbound authorization configuration options used to authenticate incoming requests.
 *
 * @public
 */
export type AuthorizerConfiguration =
  | AuthorizerConfiguration.CustomJWTAuthorizerMember
  | AuthorizerConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace AuthorizerConfiguration {
  /**
   * The inbound JWT-based authorization, specifying how incoming requests should be authenticated.
   *
   * @public
   */
  export interface CustomJWTAuthorizerMember {
    customJWTAuthorizer: CustomJWTAuthorizerConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    customJWTAuthorizer?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    customJWTAuthorizer: (value: CustomJWTAuthorizerConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Configuration for customer-managed compute capacity for the AgentCore Runtime. A capacity provider runs the AgentCore Runtime on the Instances compute type, using Amazon Web Services managed compute in your account.
 *
 * @public
 */
export interface CapacityProviderConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the capacity provider to use for the AgentCore Runtime.
   *
   * @public
   */
  capacityProviderArn: string | undefined;
}

/**
 * Configuration for a capacity provider volume mounted into the AgentCore Runtime. This references a persistent volume by its logical name, as defined in the capacity provider's list of volumes.
 *
 * @public
 */
export interface CapacityProviderVolumeConfiguration {
  /**
   * The logical name of the capacity provider volume to mount. This name must match a volume that is defined in the capacity provider's list of volumes.
   *
   * @public
   */
  volumeName: string | undefined;

  /**
   * The mount path for the capacity provider volume inside the AgentCore Runtime. The path must be under `/mnt` with exactly one subdirectory level (for example, `/mnt/data`).
   *
   * @public
   */
  mountPath: string | undefined;
}

/**
 * Configuration for an Amazon EFS access point filesystem mounted into the AgentCore Runtime. EFS access points provide shared file storage accessible from your AgentCore Runtime sessions.
 *
 * @public
 */
export interface EfsAccessPointConfiguration {
  /**
   * The ARN of the EFS access point to mount into the AgentCore Runtime.
   *
   * @public
   */
  accessPointArn: string | undefined;

  /**
   * The mount path for the EFS access point inside the AgentCore Runtime. The path must be under `/mnt` with exactly one subdirectory level (for example, `/mnt/data`).
   *
   * @public
   */
  mountPath: string | undefined;
}

/**
 * Configuration for an Amazon S3 Files access point filesystem mounted into the AgentCore Runtime. S3 Files access points provide shared file storage accessible from your AgentCore Runtime sessions.
 *
 * @public
 */
export interface S3FilesAccessPointConfiguration {
  /**
   * The ARN of the S3 Files access point to mount into the AgentCore Runtime.
   *
   * @public
   */
  accessPointArn: string | undefined;

  /**
   * The mount path for the S3 Files access point inside the AgentCore Runtime. The path must be under `/mnt` with exactly one subdirectory level (for example, `/mnt/data`).
   *
   * @public
   */
  mountPath: string | undefined;
}

/**
 * Configuration for a session storage filesystem mounted into the AgentCore Runtime. Session storage provides persistent storage that is preserved across AgentCore Runtime session invocations.
 *
 * @public
 */
export interface SessionStorageConfiguration {
  /**
   * The mount path for the session storage filesystem inside the AgentCore Runtime. The path must be under `/mnt` with exactly one subdirectory level (for example, `/mnt/data`).
   *
   * @public
   */
  mountPath: string | undefined;
}

/**
 * Configuration for a filesystem that can be mounted into the AgentCore Runtime.
 *
 * @public
 */
export type FilesystemConfiguration =
  | FilesystemConfiguration.CapacityProviderVolumeMember
  | FilesystemConfiguration.EfsAccessPointMember
  | FilesystemConfiguration.S3FilesAccessPointMember
  | FilesystemConfiguration.SessionStorageMember
  | FilesystemConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace FilesystemConfiguration {
  /**
   * Configuration for session storage. Session storage provides persistent storage that is preserved across AgentCore Runtime session invocations.
   *
   * @public
   */
  export interface SessionStorageMember {
    sessionStorage: SessionStorageConfiguration;
    s3FilesAccessPoint?: never;
    efsAccessPoint?: never;
    capacityProviderVolume?: never;
    $unknown?: never;
  }

  /**
   * Configuration for an Amazon S3 Files access point to mount into the AgentCore Runtime.
   *
   * @public
   */
  export interface S3FilesAccessPointMember {
    sessionStorage?: never;
    s3FilesAccessPoint: S3FilesAccessPointConfiguration;
    efsAccessPoint?: never;
    capacityProviderVolume?: never;
    $unknown?: never;
  }

  /**
   * Configuration for an Amazon EFS access point to mount into the AgentCore Runtime.
   *
   * @public
   */
  export interface EfsAccessPointMember {
    sessionStorage?: never;
    s3FilesAccessPoint?: never;
    efsAccessPoint: EfsAccessPointConfiguration;
    capacityProviderVolume?: never;
    $unknown?: never;
  }

  /**
   * Configuration for a capacity provider volume to mount into the AgentCore Runtime. This mounts a persistent volume that is defined on the capacity provider, referenced by its logical name.
   *
   * @public
   */
  export interface CapacityProviderVolumeMember {
    sessionStorage?: never;
    s3FilesAccessPoint?: never;
    efsAccessPoint?: never;
    capacityProviderVolume: CapacityProviderVolumeConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sessionStorage?: never;
    s3FilesAccessPoint?: never;
    efsAccessPoint?: never;
    capacityProviderVolume?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    sessionStorage: (value: SessionStorageConfiguration) => T;
    s3FilesAccessPoint: (value: S3FilesAccessPointConfiguration) => T;
    efsAccessPoint: (value: EfsAccessPointConfiguration) => T;
    capacityProviderVolume: (value: CapacityProviderVolumeConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * LifecycleConfiguration lets you manage the lifecycle of runtime sessions and resources in AgentCore Runtime. This configuration helps optimize resource utilization by automatically cleaning up idle sessions and preventing long-running instances from consuming resources indefinitely.
 *
 * @public
 */
export interface LifecycleConfiguration {
  /**
   * Timeout in seconds for idle runtime sessions. When a session remains idle for this duration, it will be automatically terminated. Default: 900 seconds (15 minutes).
   *
   * @public
   */
  idleRuntimeSessionTimeout?: number | undefined;

  /**
   * Maximum lifetime for the instance in seconds. Once reached, instances will be automatically terminated and replaced. Default: 28800 seconds (8 hours).
   *
   * @public
   */
  maxLifetime?: number | undefined;
}

/**
 * VpcConfig for the Agent.
 *
 * @public
 */
export interface VpcConfig {
  /**
   * The security groups associated with the VPC configuration.
   *
   * @public
   */
  securityGroups: string[] | undefined;

  /**
   * The subnets associated with the VPC configuration.
   *
   * @public
   */
  subnets: string[] | undefined;

  /**
   * > **Note:** This field applies only to Agent Runtimes. It is not applicable to Browsers or Code Interpreters.
   *
   * Controls whether a service-managed Amazon S3 gateway endpoint is provisioned in the VPC network topology for the agent runtime. This gateway is used by Amazon Bedrock AgentCore Runtime to download code and container images during agent startup.
   *
   * Starting May 5, 2026, Amazon Bedrock AgentCore Runtime is gradually rolling out a change to how network isolation is configured for VPC mode agents. Agent runtimes created on or after this rollout will no longer include the service-managed Amazon S3 gateway. Instead, all network access, including to Amazon S3, is governed exclusively by your VPC configuration. This field cannot be set on agent runtimes created after the rollout. Passing this field in an `UpdateAgentRuntime` request for these agent runtimes returns a `ValidationException`.
   *
   * Agent runtimes created before the rollout are not affected and continue to operate with the service-managed Amazon S3 gateway. To enforce full VPC network isolation on these existing agent runtimes, set this field to `false` via the `UpdateAgentRuntime` API. Before opting out, ensure your VPC provides the Amazon S3 access required for agent startup. If this field is not specified or is set to `true`, the service-managed Amazon S3 gateway remains provisioned.
   *
   * This field is only supported in the `UpdateAgentRuntime` API for pre-rollout agent runtimes. Passing this field in a `CreateAgentRuntime` request returns a `ValidationException`.
   *
   * @public
   */
  requireServiceS3Endpoint?: boolean | undefined;
}

/**
 * SecurityConfig for the Agent.
 *
 * @public
 */
export interface NetworkConfiguration {
  /**
   * The network mode for the AgentCore Runtime.
   *
   * @public
   */
  networkMode: NetworkMode | undefined;

  /**
   * The network mode configuration for the AgentCore Runtime.
   *
   * @public
   */
  networkModeConfig?: VpcConfig | undefined;
}

/**
 * The protocol configuration for an agent runtime. This structure defines how the agent runtime communicates with clients.
 *
 * @public
 */
export interface ProtocolConfiguration {
  /**
   * The server protocol for the agent runtime. This field specifies which protocol the agent runtime uses to communicate with clients.
   *
   * @public
   */
  serverProtocol: ServerProtocol | undefined;

  /**
   * The port on which the agent server listens. The port must be between `8000` and `12000`, excluding the reserved port `8443`. When this field is omitted, the default is `8080` for `HTTP` and `AGUI`, `8000` for `MCP`, and `9000` for `A2A`.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The path on which the agent server accepts requests. The path must begin with `/`. When this field is omitted, the default is `/invocations` for `HTTP` and `AGUI`, `/mcp` for `MCP`, and `/` for `A2A`.
   *
   * @public
   */
  path?: string | undefined;
}

/**
 * Configuration for HTTP request headers that will be passed through to the runtime.
 *
 * @public
 */
export type RequestHeaderConfiguration =
  | RequestHeaderConfiguration.RequestHeaderAllowlistMember
  | RequestHeaderConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace RequestHeaderConfiguration {
  /**
   * A list of HTTP request headers that are allowed to be passed through to the runtime.
   *
   * @public
   */
  export interface RequestHeaderAllowlistMember {
    requestHeaderAllowlist: string[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    requestHeaderAllowlist?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    requestHeaderAllowlist: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateAgentRuntimeRequest {
  /**
   * The name of the AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeName: string | undefined;

  /**
   * The artifact of the AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeArtifact: AgentRuntimeArtifact | undefined;

  /**
   * The IAM role ARN that provides permissions for the AgentCore Runtime.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The network configuration for the AgentCore Runtime.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The description of the AgentCore Runtime.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The authorizer configuration for the AgentCore Runtime.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * Configuration for HTTP request headers that will be passed through to the runtime.
   *
   * @public
   */
  requestHeaderConfiguration?: RequestHeaderConfiguration | undefined;

  /**
   * The protocol configuration for the AgentCore Runtime, including the protocol, port, and path on which the agent server is available.
   *
   * @public
   */
  protocolConfiguration?: ProtocolConfiguration | undefined;

  /**
   * The life cycle configuration for the AgentCore Runtime.
   *
   * @public
   */
  lifecycleConfiguration?: LifecycleConfiguration | undefined;

  /**
   * Environment variables to set in the AgentCore Runtime environment.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * The filesystem configurations to mount into the AgentCore Runtime. Use filesystem configurations to provide persistent storage to your AgentCore Runtime sessions.
   *
   * @public
   */
  filesystemConfigurations?: FilesystemConfiguration[] | undefined;

  /**
   * The capacity provider configuration for the AgentCore Runtime. Use a capacity provider to run the AgentCore Runtime on the Instances compute type, which provisions Amazon Web Services managed compute in your account.
   *
   * @public
   */
  capacityProviderConfiguration?: CapacityProviderConfiguration | undefined;

  /**
   * A map of tag keys and values to assign to the agent runtime. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The version of the runtime platform to use for the AgentCore Runtime.
   *
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * The additional ports on the AgentCore Runtime that are reachable through the runtime's session URL. Specify one to five non-overlapping entries, each containing either a single port or an inclusive port range. Ports must be between `8000` and `12000`, excluding the reserved port `8443`.
   *
   * @public
   */
  allowedPorts?: AllowedPort[] | undefined;
}

/**
 * The information about the workload identity.
 *
 * @public
 */
export interface WorkloadIdentityDetails {
  /**
   * The ARN associated with the workload identity.
   *
   * @public
   */
  workloadIdentityArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAgentRuntimeResponse {
  /**
   * The Amazon Resource Name (ARN) of the AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * The workload identity details for the AgentCore Runtime.
   *
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * The unique identifier of the AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * The version of the AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeVersion: string | undefined;

  /**
   * The timestamp when the AgentCore Runtime was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The current status of the AgentCore Runtime.
   *
   * @public
   */
  status: AgentRuntimeStatus | undefined;
}

/**
 * @public
 */
export interface DeleteAgentRuntimeRequest {
  /**
   * The unique identifier of the AgentCore Runtime to delete.
   *
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * The version of the AgentCore Runtime to delete. When you provide this value, only that version is deleted. When you omit it, the entire AgentCore Runtime and all of its versions are deleted.
   *
   * @public
   */
  agentRuntimeVersion?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the service ignores the request but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentRuntimeResponse {
  /**
   * The current status of the AgentCore Runtime deletion.
   *
   * @public
   */
  status: AgentRuntimeStatus | undefined;

  /**
   * The unique identifier of the AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeId?: string | undefined;

  /**
   * The version of the AgentCore Runtime that was deleted. This value is present only when you delete a single version.
   *
   * @public
   */
  agentRuntimeVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetAgentRuntimeRequest {
  /**
   * The unique identifier of the AgentCore Runtime to retrieve.
   *
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * The version of the AgentCore Runtime to retrieve.
   *
   * @public
   */
  agentRuntimeVersion?: string | undefined;
}

/**
 * Configuration for microVM metadata service settings.
 *
 * @public
 */
export interface RuntimeMetadataConfiguration {
  /**
   * Enables MMDSv2 (microVM Metadata Service Version 2) requirement for the agent runtime. When set to `true`, the runtime microVM will only accept MMDSv2 requests.
   *
   * @public
   */
  requireMMDSV2: boolean | undefined;
}

/**
 * @public
 */
export interface GetAgentRuntimeResponse {
  /**
   * The Amazon Resource Name (ARN) of the AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * The name of the AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeName: string | undefined;

  /**
   * The unique identifier of the AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * The version of the AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeVersion: string | undefined;

  /**
   * The timestamp when the AgentCore Runtime was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the AgentCore Runtime was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * The IAM role ARN that provides permissions for the AgentCore Runtime.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The network configuration for the AgentCore Runtime.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The current status of the AgentCore Runtime.
   *
   * @public
   */
  status: AgentRuntimeStatus | undefined;

  /**
   * The life cycle configuration for the AgentCore Runtime.
   *
   * @public
   */
  lifecycleConfiguration: LifecycleConfiguration | undefined;

  /**
   * The reason for failure if the AgentCore Runtime is in a failed state.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The description of the AgentCore Runtime.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The workload identity details for the AgentCore Runtime.
   *
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * The artifact of the AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeArtifact?: AgentRuntimeArtifact | undefined;

  /**
   * The protocol configuration for the AgentCore Runtime, including the protocol, port, and path on which the agent server is available.
   *
   * @public
   */
  protocolConfiguration?: ProtocolConfiguration | undefined;

  /**
   * Environment variables set in the AgentCore Runtime environment.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * The authorizer configuration for the AgentCore Runtime.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * Configuration for HTTP request headers that will be passed through to the runtime.
   *
   * @public
   */
  requestHeaderConfiguration?: RequestHeaderConfiguration | undefined;

  /**
   * Configuration for microVM Metadata Service (MMDS) settings for the AgentCore Runtime.
   *
   * @public
   */
  metadataConfiguration?: RuntimeMetadataConfiguration | undefined;

  /**
   * The filesystem configurations mounted into the AgentCore Runtime.
   *
   * @public
   */
  filesystemConfigurations?: FilesystemConfiguration[] | undefined;

  /**
   * The capacity provider configuration for the AgentCore Runtime.
   *
   * @public
   */
  capacityProviderConfiguration?: CapacityProviderConfiguration | undefined;

  /**
   * The version of the runtime platform used by the AgentCore Runtime.
   *
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * The additional ports on the AgentCore Runtime that are reachable through the runtime's session URL.
   *
   * @public
   */
  allowedPorts?: AllowedPort[] | undefined;
}

/**
 * @public
 */
export interface ListAgentRuntimesRequest {
  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains information about an agent runtime. An agent runtime is the execution environment for a Amazon Bedrock AgentCore Agent.
 *
 * @public
 */
export interface AgentRuntime {
  /**
   * The Amazon Resource Name (ARN) of the agent runtime.
   *
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * The unique identifier of the agent runtime.
   *
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * The version of the agent runtime.
   *
   * @public
   */
  agentRuntimeVersion: string | undefined;

  /**
   * The name of the agent runtime.
   *
   * @public
   */
  agentRuntimeName: string | undefined;

  /**
   * The description of the agent runtime.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The timestamp when the agent runtime was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * The current status of the agent runtime.
   *
   * @public
   */
  status: AgentRuntimeStatus | undefined;
}

/**
 * @public
 */
export interface ListAgentRuntimesResponse {
  /**
   * The list of AgentCore Runtime resources.
   *
   * @public
   */
  agentRuntimes: AgentRuntime[] | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentRuntimeVersionsRequest {
  /**
   * The unique identifier of the AgentCore Runtime to list versions for.
   *
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentRuntimeVersionsResponse {
  /**
   * The list of AgentCore Runtime versions.
   *
   * @public
   */
  agentRuntimes: AgentRuntime[] | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentRuntimeRequest {
  /**
   * The unique identifier of the AgentCore Runtime to update.
   *
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * The updated artifact of the AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeArtifact: AgentRuntimeArtifact | undefined;

  /**
   * The updated IAM role ARN that provides permissions for the AgentCore Runtime.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The updated network configuration for the AgentCore Runtime.
   *
   * @public
   */
  networkConfiguration?: NetworkConfiguration | undefined;

  /**
   * The updated description of the AgentCore Runtime.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated authorizer configuration for the AgentCore Runtime.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * The updated configuration for HTTP request headers that will be passed through to the runtime.
   *
   * @public
   */
  requestHeaderConfiguration?: RequestHeaderConfiguration | undefined;

  /**
   * The updated protocol configuration for the AgentCore Runtime, including the protocol, port, and path on which the agent server is available.
   *
   * @public
   */
  protocolConfiguration?: ProtocolConfiguration | undefined;

  /**
   * The updated life cycle configuration for the AgentCore Runtime.
   *
   * @public
   */
  lifecycleConfiguration?: LifecycleConfiguration | undefined;

  /**
   * The updated configuration for microVM Metadata Service (MMDS) settings for the AgentCore Runtime.
   *
   * @public
   */
  metadataConfiguration?: RuntimeMetadataConfiguration | undefined;

  /**
   * Updated environment variables to set in the AgentCore Runtime environment.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * The updated filesystem configurations to mount into the AgentCore Runtime.
   *
   * @public
   */
  filesystemConfigurations?: FilesystemConfiguration[] | undefined;

  /**
   * The updated capacity provider configuration for the AgentCore Runtime.
   *
   * @public
   */
  capacityProviderConfiguration?: CapacityProviderConfiguration | undefined;

  /**
   * The updated version of the runtime platform to use for the AgentCore Runtime.
   *
   * @public
   */
  platformVersion?: string | undefined;

  /**
   * The updated additional ports on the AgentCore Runtime that are reachable through the runtime's session URL. Specify one to five non-overlapping entries, each containing either a single port or an inclusive port range. Ports must be between `8000` and `12000`, excluding the reserved port `8443`.
   *
   * @public
   */
  allowedPorts?: AllowedPort[] | undefined;

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
export interface UpdateAgentRuntimeResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * The unique identifier of the updated AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * The workload identity details for the updated AgentCore Runtime.
   *
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * The version of the updated AgentCore Runtime.
   *
   * @public
   */
  agentRuntimeVersion: string | undefined;

  /**
   * The timestamp when the AgentCore Runtime was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the AgentCore Runtime was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * The current status of the updated AgentCore Runtime.
   *
   * @public
   */
  status: AgentRuntimeStatus | undefined;
}

/**
 * Summary information about an agent runtime version associated with a capacity provider. This is returned by `ListAgentRuntimeVersionsByCapacityProvider`.
 *
 * @public
 */
export interface AgentRuntimeVersionSummary {
  /**
   * The Amazon Resource Name (ARN) of the agent runtime.
   *
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * The version of the agent runtime.
   *
   * @public
   */
  agentRuntimeVersion: string | undefined;

  /**
   * The current status of the agent runtime version.
   *
   * @public
   */
  status: AgentRuntimeStatus | undefined;
}

/**
 * The structured skill definition with schema version and content.
 *
 * @public
 */
export interface SkillDefinition {
  /**
   * The version of the skill definition schema.
   *
   * @public
   */
  schemaVersion?: string | undefined;

  /**
   * The JSON content containing the structured skill definition.
   *
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * The skill markdown definition for an agent skills descriptor.
 *
 * @public
 */
export interface SkillMdDefinition {
  /**
   * The markdown content describing the agent's skills in a human-readable format.
   *
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * The agent skills descriptor for a registry record. Contains an optional skill markdown definition in human-readable format and an optional structured skill definition.
 *
 * @public
 */
export interface AgentSkillsDescriptor {
  /**
   * The optional skill markdown definition describing the agent's skills in a human-readable format.
   *
   * @public
   */
  skillMd?: SkillMdDefinition | undefined;

  /**
   * The structured skill definition with schema version and content.
   *
   * @public
   */
  skillDefinition?: SkillDefinition | undefined;
}

/**
 * Contains a reference to a secret stored in Amazon Web Services Secrets Manager.
 *
 * @public
 */
export interface SecretReference {
  /**
   * The ID of the Amazon Web Services Secrets Manager secret that stores the secret value.
   *
   * @public
   */
  secretId: string | undefined;

  /**
   * The JSON key used to extract the secret value from the Amazon Web Services Secrets Manager secret.
   *
   * @public
   */
  jsonKey: string | undefined;
}

/**
 * @public
 */
export interface CreateApiKeyCredentialProviderRequest {
  /**
   * The name of the API key credential provider. The name must be unique within your account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The API key to use for authentication. This value is encrypted and stored securely.
   *
   * @public
   */
  apiKey?: string | undefined;

  /**
   * A reference to the Amazon Web Services Secrets Manager secret that stores the API key. This includes the secret ID and the JSON key used to extract the API key value from the secret. Required when `apiKeySecretSource` is set to `EXTERNAL`.
   *
   * @public
   */
  apiKeySecretConfig?: SecretReference | undefined;

  /**
   * The source type of the API key secret. Use `MANAGED` if the secret is managed by the service, or `EXTERNAL` if you manage the secret yourself in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  apiKeySecretSource?: SecretSourceType | undefined;

  /**
   * A map of tag keys and values to assign to the API key credential provider. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Contains information about a secret in Amazon Web Services Secrets Manager.
 *
 * @public
 */
export interface Secret {
  /**
   * The Amazon Resource Name (ARN) of the secret in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  secretArn: string | undefined;
}

/**
 * @public
 */
export interface CreateApiKeyCredentialProviderResponse {
  /**
   * The Amazon Resource Name (ARN) of the secret containing the API key.
   *
   * @public
   */
  apiKeySecretArn: Secret | undefined;

  /**
   * The JSON key used to extract the API key value from the Amazon Web Services Secrets Manager secret.
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
   * The name of the created API key credential provider.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created API key credential provider.
   *
   * @public
   */
  credentialProviderArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteApiKeyCredentialProviderRequest {
  /**
   * The name of the API key credential provider to delete.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteApiKeyCredentialProviderResponse {}

/**
 * @public
 */
export interface GetApiKeyCredentialProviderRequest {
  /**
   * The name of the API key credential provider to retrieve.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetApiKeyCredentialProviderResponse {
  /**
   * The Amazon Resource Name (ARN) of the API key secret in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  apiKeySecretArn: Secret | undefined;

  /**
   * The JSON key used to extract the API key value from the Amazon Web Services Secrets Manager secret.
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
   * The name of the API key credential provider.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the API key credential provider.
   *
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * The timestamp when the API key credential provider was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the API key credential provider was last updated.
   *
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListApiKeyCredentialProvidersRequest {
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
 * Contains information about an API key credential provider.
 *
 * @public
 */
export interface ApiKeyCredentialProviderItem {
  /**
   * The name of the API key credential provider.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the API key credential provider.
   *
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * The timestamp when the API key credential provider was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the API key credential provider was last updated.
   *
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListApiKeyCredentialProvidersResponse {
  /**
   * The list of API key credential providers.
   *
   * @public
   */
  credentialProviders: ApiKeyCredentialProviderItem[] | undefined;

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
export interface UpdateApiKeyCredentialProviderRequest {
  /**
   * The name of the API key credential provider to update.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The new API key to use for authentication. This value replaces the existing API key and is encrypted and stored securely.
   *
   * @public
   */
  apiKey?: string | undefined;

  /**
   * A reference to the Amazon Web Services Secrets Manager secret that stores the API key. This includes the secret ID and the JSON key used to extract the API key value from the secret. Required when `apiKeySecretSource` is set to `EXTERNAL`.
   *
   * @public
   */
  apiKeySecretConfig?: SecretReference | undefined;

  /**
   * The source type of the API key secret. Use `MANAGED` if the secret is managed by the service, or `EXTERNAL` if you manage the secret yourself in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  apiKeySecretSource?: SecretSourceType | undefined;
}

/**
 * @public
 */
export interface UpdateApiKeyCredentialProviderResponse {
  /**
   * The Amazon Resource Name (ARN) of the API key secret in Amazon Web Services Secrets Manager.
   *
   * @public
   */
  apiKeySecretArn: Secret | undefined;

  /**
   * The JSON key used to extract the API key value from the Amazon Web Services Secrets Manager secret.
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
   * The name of the API key credential provider.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the API key credential provider.
   *
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * The timestamp when the API key credential provider was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the API key credential provider was last updated.
   *
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateBrowserProfileRequest {
  /**
   * The name of the browser profile. The name must be unique within your account and can contain alphanumeric characters and underscores.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the browser profile. Use this field to describe the purpose or contents of the profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock AgentCore ignores the request but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A map of tag keys and values to assign to the browser profile. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateBrowserProfileResponse {
  /**
   * The unique identifier of the created browser profile.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created browser profile.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The timestamp when the browser profile was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The current status of the browser profile.
   *
   * @public
   */
  status: BrowserProfileStatus | undefined;
}

/**
 * @public
 */
export interface DeleteBrowserProfileRequest {
  /**
   * The unique identifier of the browser profile to delete.
   *
   * @public
   */
  profileId: string | undefined;

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
export interface DeleteBrowserProfileResponse {
  /**
   * The unique identifier of the deleted browser profile.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the deleted browser profile.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The current status of the browser profile deletion.
   *
   * @public
   */
  status: BrowserProfileStatus | undefined;

  /**
   * The timestamp when the browser profile was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * The timestamp when browser session data was last saved to this profile before deletion.
   *
   * @public
   */
  lastSavedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetBrowserProfileRequest {
  /**
   * The unique identifier of the browser profile to retrieve.
   *
   * @public
   */
  profileId: string | undefined;
}

/**
 * @public
 */
export interface GetBrowserProfileResponse {
  /**
   * The unique identifier of the browser profile.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the browser profile.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The name of the browser profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the browser profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The current status of the browser profile.
   *
   * @public
   */
  status: BrowserProfileStatus | undefined;

  /**
   * The timestamp when the browser profile was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the browser profile was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * The timestamp when browser session data was last saved to this profile.
   *
   * @public
   */
  lastSavedAt?: Date | undefined;

  /**
   * The identifier of the browser session from which data was last saved to this profile.
   *
   * @public
   */
  lastSavedBrowserSessionId?: string | undefined;

  /**
   * The identifier of the browser from which data was last saved to this profile.
   *
   * @public
   */
  lastSavedBrowserId?: string | undefined;
}

/**
 * @public
 */
export interface ListBrowserProfilesRequest {
  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The name of the browser profile to filter results by.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Contains summary information about a browser profile. A browser profile stores persistent browser data that can be reused across browser sessions.
 *
 * @public
 */
export interface BrowserProfileSummary {
  /**
   * The unique identifier of the browser profile.
   *
   * @public
   */
  profileId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the browser profile.
   *
   * @public
   */
  profileArn: string | undefined;

  /**
   * The name of the browser profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the browser profile.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The current status of the browser profile. Possible values include READY, SAVING, DELETING, and DELETED.
   *
   * @public
   */
  status: BrowserProfileStatus | undefined;

  /**
   * The timestamp when the browser profile was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the browser profile was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * The timestamp when browser session data was last saved to this profile.
   *
   * @public
   */
  lastSavedAt?: Date | undefined;

  /**
   * The identifier of the browser session from which data was last saved to this profile.
   *
   * @public
   */
  lastSavedBrowserSessionId?: string | undefined;

  /**
   * The identifier of the browser from which data was last saved to this profile.
   *
   * @public
   */
  lastSavedBrowserId?: string | undefined;
}

/**
 * @public
 */
export interface ListBrowserProfilesResponse {
  /**
   * The list of browser profile summaries.
   *
   * @public
   */
  profileSummaries: BrowserProfileSummary[] | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Configuration for enabling browser signing capabilities that allow agents to cryptographically identify themselves to websites using HTTP message signatures.
 *
 * @public
 */
export interface BrowserSigningConfigInput {
  /**
   * Specifies whether browser signing is enabled. When enabled, the browser will cryptographically sign HTTP requests to identify itself as an AI agent to bot control vendors.
   *
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * The Amazon Web Services Secrets Manager location configuration.
 *
 * @public
 */
export interface SecretsManagerLocation {
  /**
   * The ARN of the Amazon Web Services Secrets Manager secret containing the certificate.
   *
   * @public
   */
  secretArn: string | undefined;
}

/**
 * The location from which to retrieve a certificate.
 *
 * @public
 */
export type CertificateLocation =
  | CertificateLocation.SecretsManagerMember
  | CertificateLocation.$UnknownMember;

/**
 * @public
 */
export namespace CertificateLocation {
  /**
   * The Amazon Web Services Secrets Manager location of the certificate.
   *
   * @public
   */
  export interface SecretsManagerMember {
    secretsManager: SecretsManagerLocation;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    secretsManager?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    secretsManager: (value: SecretsManagerLocation) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A certificate to install in the browser or code interpreter.
 *
 * @public
 */
export interface Certificate {
  /**
   * The location of the certificate.
   *
   * @public
   */
  location: CertificateLocation | undefined;
}

/**
 * The location of a resource.
 *
 * @public
 */
export type ResourceLocation =
  | ResourceLocation.S3Member
  | ResourceLocation.$UnknownMember;

/**
 * @public
 */
export namespace ResourceLocation {
  /**
   * The Amazon S3 location for storing data. This structure defines where in Amazon S3 data is stored.
   *
   * @public
   */
  export interface S3Member {
    s3: S3Location;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: S3Location) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Browser enterprise policy configuration.
 *
 * @public
 */
export interface BrowserEnterprisePolicy {
  /**
   * The location of the enterprise policy file.
   *
   * @public
   */
  location: ResourceLocation | undefined;

  /**
   * The type of browser enterprise policy. Available values are `MANAGED` and `RECOMMENDED`.
   *
   * @public
   */
  type?: BrowserEnterprisePolicyType | undefined;
}

/**
 * The configuration for mounting an Amazon Elastic File System (Amazon EFS) access point that you own into a session.
 *
 * @public
 */
export interface EfsConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Elastic File System (Amazon EFS) access point to mount.
   *
   * @public
   */
  accessPointArn: string | undefined;

  /**
   * The absolute path within the session at which the access point is mounted, for example `/mnt/efs`. Each mount path must be unique across all file system configurations in the session.
   *
   * @public
   */
  mountPath: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Elastic File System (Amazon EFS) file system that owns the access point.
   *
   * @public
   */
  fileSystemArn: string | undefined;
}

/**
 * The configuration for mounting an Amazon Simple Storage Service (Amazon S3) Files access point that you own into a session.
 *
 * @public
 */
export interface S3FilesConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Simple Storage Service (Amazon S3) Files access point to mount.
   *
   * @public
   */
  accessPointArn: string | undefined;

  /**
   * The absolute path within the session at which the access point is mounted, for example `/mnt/s3data`. Each mount path must be unique across all file system configurations in the session.
   *
   * @public
   */
  mountPath: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Simple Storage Service (Amazon S3) Files file system that owns the access point.
   *
   * @public
   */
  fileSystemArn: string | undefined;
}

/**
 * Specifies a file system to mount into the session by providing exactly one of the following:
 *
 * - `s3FilesConfiguration` - Mounts an Amazon Simple Storage Service (Amazon S3) Files access point.
 * - `efsConfiguration` - Mounts an Amazon Elastic File System (Amazon EFS) access point.
 *
 * @public
 */
export type ToolsFileSystemConfiguration =
  | ToolsFileSystemConfiguration.EfsConfigurationMember
  | ToolsFileSystemConfiguration.S3FilesConfigurationMember
  | ToolsFileSystemConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ToolsFileSystemConfiguration {
  /**
   * The configuration for mounting your own Amazon Simple Storage Service (Amazon S3) Files access point into the session.
   *
   * @public
   */
  export interface S3FilesConfigurationMember {
    s3FilesConfiguration: S3FilesConfiguration;
    efsConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The configuration for mounting your own Amazon Elastic File System (Amazon EFS) access point into the session.
   *
   * @public
   */
  export interface EfsConfigurationMember {
    s3FilesConfiguration?: never;
    efsConfiguration: EfsConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3FilesConfiguration?: never;
    efsConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3FilesConfiguration: (value: S3FilesConfiguration) => T;
    efsConfiguration: (value: EfsConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The network configuration for a browser. This structure defines how the browser connects to the network.
 *
 * @public
 */
export interface BrowserNetworkConfiguration {
  /**
   * The network mode for the browser. This field specifies how the browser connects to the network.
   *
   * @public
   */
  networkMode: BrowserNetworkMode | undefined;

  /**
   * The VPC configuration for the browser. This configuration is required when the network mode is set to `VPC`.
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;
}

/**
 * The recording configuration for a browser. This structure defines how browser sessions are recorded.
 *
 * @public
 */
export interface RecordingConfig {
  /**
   * Indicates whether recording is enabled for the browser. When set to true, browser sessions are recorded.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The Amazon S3 location where browser recordings are stored. This location contains the recorded browser sessions.
   *
   * @public
   */
  s3Location?: S3Location | undefined;
}

/**
 * @public
 */
export interface CreateBrowserRequest {
  /**
   * The name of the browser. The name must be unique within your account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the browser.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the browser to access Amazon Web Services services.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The network configuration for the browser. This configuration specifies the network mode for the browser.
   *
   * @public
   */
  networkConfiguration: BrowserNetworkConfiguration | undefined;

  /**
   * The recording configuration for the browser. When enabled, browser sessions are recorded and stored in the specified Amazon S3 location.
   *
   * @public
   */
  recording?: RecordingConfig | undefined;

  /**
   * The browser signing configuration that enables cryptographic agent identification using HTTP message signatures for web bot authentication.
   *
   * @public
   */
  browserSigning?: BrowserSigningConfigInput | undefined;

  /**
   * A list of enterprise policy files for the browser.
   *
   * @public
   */
  enterprisePolicies?: BrowserEnterprisePolicy[] | undefined;

  /**
   * A list of certificates to install in the browser.
   *
   * @public
   */
  certificates?: Certificate[] | undefined;

  /**
   * The file system configurations to mount into the browser. Use these configurations to mount your own Amazon Simple Storage Service (Amazon S3) Files or Amazon Elastic File System (Amazon EFS) access points. Your sessions can then access your data. If you don't specify this field, no file systems are mounted.
   *
   * @public
   */
  filesystemConfigurations?: ToolsFileSystemConfiguration[] | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock AgentCore ignores the request but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A map of tag keys and values to assign to the browser. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateBrowserResponse {
  /**
   * The unique identifier of the created browser.
   *
   * @public
   */
  browserId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created browser.
   *
   * @public
   */
  browserArn: string | undefined;

  /**
   * The timestamp when the browser was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The current status of the browser.
   *
   * @public
   */
  status: BrowserStatus | undefined;
}

/**
 * @public
 */
export interface DeleteBrowserRequest {
  /**
   * The unique identifier of the browser to delete.
   *
   * @public
   */
  browserId: string | undefined;

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
export interface DeleteBrowserResponse {
  /**
   * The unique identifier of the deleted browser.
   *
   * @public
   */
  browserId: string | undefined;

  /**
   * The current status of the browser deletion.
   *
   * @public
   */
  status: BrowserStatus | undefined;

  /**
   * The timestamp when the browser was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetBrowserRequest {
  /**
   * The unique identifier of the browser to retrieve.
   *
   * @public
   */
  browserId: string | undefined;
}

/**
 * The current browser signing configuration that shows whether cryptographic agent identification is enabled for web bot authentication.
 *
 * @public
 */
export interface BrowserSigningConfigOutput {
  /**
   * Indicates whether browser signing is currently enabled for cryptographic agent identification using HTTP message signatures.
   *
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * @public
 */
export interface GetBrowserResponse {
  /**
   * The unique identifier of the browser.
   *
   * @public
   */
  browserId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the browser.
   *
   * @public
   */
  browserArn: string | undefined;

  /**
   * The name of the browser.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the browser.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The IAM role ARN that provides permissions for the browser.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The network configuration for a browser. This structure defines how the browser connects to the network.
   *
   * @public
   */
  networkConfiguration: BrowserNetworkConfiguration | undefined;

  /**
   * The recording configuration for a browser. This structure defines how browser sessions are recorded.
   *
   * @public
   */
  recording?: RecordingConfig | undefined;

  /**
   * The browser signing configuration that shows whether cryptographic agent identification is enabled for web bot authentication.
   *
   * @public
   */
  browserSigning?: BrowserSigningConfigOutput | undefined;

  /**
   * The list of enterprise policy files configured for the browser.
   *
   * @public
   */
  enterprisePolicies?: BrowserEnterprisePolicy[] | undefined;

  /**
   * The list of certificates configured for the browser.
   *
   * @public
   */
  certificates?: Certificate[] | undefined;

  /**
   * The file system configurations mounted into the browser. Each entry describes an access point and its mount path.
   *
   * @public
   */
  filesystemConfigurations?: ToolsFileSystemConfiguration[] | undefined;

  /**
   * The current status of the browser.
   *
   * @public
   */
  status: BrowserStatus | undefined;

  /**
   * The reason for failure if the browser is in a failed state.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The timestamp when the browser was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the browser was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListBrowsersRequest {
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

  /**
   * The type of browsers to list. If not specified, all browser types are returned.
   *
   * @public
   */
  type?: ResourceType | undefined;
}

/**
 * Contains summary information about a browser. A browser enables Amazon Bedrock AgentCore Agent to interact with web content.
 *
 * @public
 */
export interface BrowserSummary {
  /**
   * The unique identifier of the browser.
   *
   * @public
   */
  browserId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the browser.
   *
   * @public
   */
  browserArn: string | undefined;

  /**
   * The name of the browser.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the browser.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The current status of the browser.
   *
   * @public
   */
  status: BrowserStatus | undefined;

  /**
   * The timestamp when the browser was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the browser was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListBrowsersResponse {
  /**
   * The list of browser summaries.
   *
   * @public
   */
  browserSummaries: BrowserSummary[] | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about the target Capacity Reservation or Capacity Reservation group for the instances.
 *
 * @public
 */
export interface CapacityReservationTarget {
  /**
   * The ID of the Capacity Reservation in which to run the instances.
   *
   * @public
   */
  capacityReservationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Capacity Reservation resource group in which to run the instances.
   *
   * @public
   */
  capacityReservationResourceGroupArn?: string | undefined;
}

/**
 * The Capacity Reservation targeting option for the instances.
 *
 * @public
 */
export interface CapacityReservationSpecification {
  /**
   * The Capacity Reservation preference for the instances.
   *
   * @public
   */
  capacityReservationPreference?: CapacityReservationPreference | undefined;

  /**
   * The target Capacity Reservation or Capacity Reservation group for the instances.
   *
   * @public
   */
  capacityReservationTarget?: CapacityReservationTarget | undefined;
}

/**
 * The shared Amazon EBS performance and encryption properties for a volume. These properties are common across the different volume configurations for a capacity provider.
 *
 * @public
 */
export interface EphemeralEBSVolumeConfiguration {
  /**
   * The Amazon EBS volume type. If you do not specify a type, the default is `gp3`.
   *
   * @public
   */
  volumeType?: EbsVolumeType | undefined;

  /**
   * The number of IOPS to provision. For `gp3`, `io1`, and `io2` volumes, this is the number of IOPS provisioned for the volume. For `gp2` volumes, this sets the baseline IOPS performance. It also controls the rate at which the volume accumulates I/O credits for bursting. Supported values: `gp3`, 3,000–80,000; `io1`, 100–64,000; `io2`, 100–256,000.
   *
   * @public
   */
  iops?: number | undefined;

  /**
   * The throughput to provision, in MiB/s. Valid only for `gp3` volumes. Valid range: 125–2,000 MiB/s.
   *
   * @public
   */
  throughput?: number | undefined;

  /**
   * Specifies whether to encrypt the volume. Encrypted volumes can be attached only to instances that support Amazon EBS encryption. If you create a volume from a snapshot, you cannot specify an encryption value.
   *
   * @public
   */
  encrypted?: boolean | undefined;

  /**
   * The identifier (key ID, key alias, key ARN, or alias ARN) of the customer managed KMS key to use for Amazon EBS encryption.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The ID of the snapshot.
   *
   * @public
   */
  snapshotId?: string | undefined;

  /**
   * The size of the volume, in GiB. You must specify either a snapshot ID or a volume size. Supported sizes: `gp2`, 1–16,384; `gp3`, 1–65,536; `io1`, 4–16,384; `io2`, 4–65,536.
   *
   * @public
   */
  volumeSize?: number | undefined;

  /**
   * The rate at which the volume is initialized after creation, in MiB/s. Supported only for volumes created from snapshots. Valid range: 100–300 MiB/s.
   *
   * @public
   */
  volumeInitializationRate?: number | undefined;

  /**
   * The index of the Amazon EBS card. Applies to instances with multiple Amazon EBS cards.
   *
   * @public
   */
  ebsCardIndex?: number | undefined;
}

/**
 * A block device mapping for an instance store (ephemeral) volume.
 *
 * @public
 */
export interface EphemeralBlockDeviceMapping {
  /**
   * The device name, for example `/dev/sdh` or `xvdh`.
   *
   * @public
   */
  deviceName?: string | undefined;

  /**
   * The virtual device name (`ephemeralN`). Instance store volumes are numbered starting from 0. The number of available instance store volumes depends on the instance type. After you connect to the instance, you must mount the volume.
   *
   * @public
   */
  virtualName?: string | undefined;

  /**
   * The shared Amazon EBS performance and encryption properties for a volume. These properties are common across the different volume configurations for a capacity provider.
   *
   * @public
   */
  ebs?: EphemeralEBSVolumeConfiguration | undefined;
}

/**
 * The requirements for Amazon EC2 instance types in a capacity provider.
 *
 * @public
 */
export interface InstanceRequirements {
  /**
   * The list of allowed instance types. You can specify up to 30 instance types.
   *
   * @public
   */
  allowedInstanceTypes: string[] | undefined;
}

/**
 * A license configuration to associate with the instances.
 *
 * @public
 */
export interface LicenseSpecification {
  /**
   * The Amazon Resource Name (ARN) of the license configuration.
   *
   * @public
   */
  licenseConfigurationArn: string | undefined;
}

/**
 * The parameters for launching Amazon EC2 instances in a capacity provider.
 *
 * @public
 */
export interface LaunchParameters {
  /**
   * The operating system and CPU architecture for the instances.
   *
   * @public
   */
  operatingSystem: OperatingSystem | undefined;

  /**
   * The requirements that determine which instance types can be launched.
   *
   * @public
   */
  instanceRequirements: InstanceRequirements | undefined;

  /**
   * The block device mappings for instance store (ephemeral) volumes. You can specify up to five mappings.
   *
   * @public
   */
  ephemeralVolumes?: EphemeralBlockDeviceMapping[] | undefined;

  /**
   * The monitoring level for the instances.
   *
   * @public
   */
  monitoring?: Monitoring | undefined;

  /**
   * The license configurations to associate with the instances. You can specify up to five configurations.
   *
   * @public
   */
  licenseSpecifications?: LicenseSpecification[] | undefined;

  /**
   * The Capacity Reservation targeting option for the instances.
   *
   * @public
   */
  capacityReservationSpecification?: CapacityReservationSpecification | undefined;

  /**
   * The name of the SSH key pair to configure on the instances for SSH connectivity.
   *
   * @public
   */
  sshKeyName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM instance profile to associate with launched instances. If provided, this overrides the default instance profile.
   *
   * @public
   */
  instanceProfileArn?: string | undefined;

  /**
   * The tags to propagate to all Amazon EC2 resources (instances, volumes, and network interfaces) that the capacity provider creates.
   *
   * @public
   */
  propagatedTags?: Record<string, string> | undefined;
}

/**
 * The source of the launch template configuration for a capacity provider. The `launchParameters` member specifies the operating system, instance requirements, and other settings used to launch instances.
 *
 * @public
 */
export type LaunchTemplateSource =
  | LaunchTemplateSource.LaunchParametersMember
  | LaunchTemplateSource.$UnknownMember;

/**
 * @public
 */
export namespace LaunchTemplateSource {
  /**
   * The parameters that AgentCore uses to create the launch template.
   *
   * @public
   */
  export interface LaunchParametersMember {
    launchParameters: LaunchParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    launchParameters?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    launchParameters: (value: LaunchParameters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration that manages the lifecycle of instances in a capacity provider, including idle timeout and maximum lifetime.
 *
 * @public
 */
export interface InstanceLifecycleConfiguration {
  /**
   * The number of seconds an instance can remain idle before it is stopped. An instance is considered idle when all of its agents are idle. The default is 900 seconds (15 minutes).
   *
   * @public
   */
  idleInstanceTimeout?: number | undefined;

  /**
   * The maximum lifetime of an instance, in seconds. When an instance reaches this limit, the service terminates it regardless of activity. The default is 28800 seconds (8 hours). The maximum is 1209600 seconds (14 days).
   *
   * @public
   */
  maxLifetime?: number | undefined;
}

/**
 * The configuration for the root volume of a capacity provider instance. Specify the amount of free space to guarantee on the root volume. The device name and delete-on-termination settings are fixed and cannot be changed.
 *
 * @public
 */
export interface RootVolumeConfiguration {
  /**
   * The Amazon EBS volume type. If you do not specify a type, the default is `gp3`.
   *
   * @public
   */
  volumeType?: EbsVolumeType | undefined;

  /**
   * The number of IOPS to provision. For `gp3`, `io1`, and `io2` volumes, this is the number of IOPS provisioned for the volume. For `gp2` volumes, this sets the baseline IOPS performance. It also controls the rate at which the volume accumulates I/O credits for bursting. Supported values: `gp3`, 3,000–80,000; `io1`, 100–64,000; `io2`, 100–256,000.
   *
   * @public
   */
  iops?: number | undefined;

  /**
   * The throughput to provision, in MiB/s. Valid only for `gp3` volumes. Valid range: 125–2,000 MiB/s.
   *
   * @public
   */
  throughput?: number | undefined;

  /**
   * Specifies whether to encrypt the volume. Encrypted volumes can be attached only to instances that support Amazon EBS encryption. If you create a volume from a snapshot, you cannot specify an encryption value.
   *
   * @public
   */
  encrypted?: boolean | undefined;

  /**
   * The identifier (key ID, key alias, key ARN, or alias ARN) of the customer managed KMS key to use for Amazon EBS encryption.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The free space guaranteed on the root volume, in GiB. AgentCore adds the operating system overhead on top of this value. The default is 8 GiB.
   *
   * @public
   */
  freeSpaceGiB?: number | undefined;
}

/**
 * The configuration for an Amazon EBS-backed persistent volume. The service creates persistent volumes when a session first launches, and the volumes survive instance termination. The volumes persist until you delete the session.
 *
 * @public
 */
export interface EbsVolumeConfiguration {
  /**
   * The logical name of the volume. Use this name to reference the volume when you mount it into an agent runtime.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The size of the volume, in GiB.
   *
   * @public
   */
  sizeGiB: number | undefined;

  /**
   * The Amazon EBS volume type. If you do not specify a type, the default is `gp3`.
   *
   * @public
   */
  volumeType?: EbsVolumeType | undefined;

  /**
   * The number of IOPS to provision. Valid only for `gp3`, `io1`, and `io2` volumes.
   *
   * @public
   */
  iops?: number | undefined;

  /**
   * The throughput, in MiB/s. Valid only for `gp3` volumes.
   *
   * @public
   */
  throughput?: number | undefined;

  /**
   * Specifies whether to encrypt the volume. If `true`, the service encrypts the volume with the KMS key that you specify in `kmsKeyId`, or the default KMS key for Amazon EBS if you do not specify one. The default is `true`.
   *
   * @public
   */
  encrypted?: boolean | undefined;

  /**
   * The identifier of the KMS key to use for encryption.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * An optional Amazon EBS snapshot ID. If provided, the volume is initialized from this snapshot the first time it is created. On subsequent restarts, the existing volume is used and the snapshot is ignored.
   *
   * @public
   */
  snapshotId?: string | undefined;
}

/**
 * The configuration for a persistent volume attached to a capacity provider. This structure defines the storage backing for the persistent volumes used by agents that run on capacity provider instances.
 *
 * @public
 */
export type VolumeConfiguration =
  | VolumeConfiguration.EbsConfigurationMember
  | VolumeConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace VolumeConfiguration {
  /**
   * The configuration for an Amazon EBS-backed persistent volume.
   *
   * @public
   */
  export interface EbsConfigurationMember {
    ebsConfiguration: EbsVolumeConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ebsConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ebsConfiguration: (value: EbsVolumeConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The VPC configuration for launching Amazon EC2 instances.
 *
 * @public
 */
export interface VpcConfiguration {
  /**
   * The IDs of the subnets in which to launch instances. You must specify at least one subnet.
   *
   * @public
   */
  subnets: string[] | undefined;

  /**
   * The IDs of the security groups to associate with the instances. You must specify at least one security group.
   *
   * @public
   */
  securityGroups: string[] | undefined;
}

/**
 * The configuration for Amazon EC2-based compute, including the launch template source, networking, storage volumes, and instance lifecycle settings.
 *
 * @public
 */
export interface Ec2Configuration {
  /**
   * The source of the launch template configuration that defines how instances are launched.
   *
   * @public
   */
  launchTemplateSource: LaunchTemplateSource | undefined;

  /**
   * The VPC configuration for launching instances, including subnets and security groups.
   *
   * @public
   */
  vpcConfiguration: VpcConfiguration | undefined;

  /**
   * The named persistent Amazon EBS volumes for the capacity provider. A capacity provider can define up to five volumes.
   *
   * @public
   */
  volumes?: VolumeConfiguration[] | undefined;

  /**
   * The lifecycle configuration for instances in the capacity provider.
   *
   * @public
   */
  lifecycleConfiguration?: InstanceLifecycleConfiguration | undefined;

  /**
   * The configuration for the instance root volume. Specify the amount of free space to guarantee and, optionally, the Amazon EBS performance and encryption settings. The device name and delete-on-termination behavior are not configurable.
   *
   * @public
   */
  rootVolume?: RootVolumeConfiguration | undefined;
}

/**
 * The compute configuration for a capacity provider. This structure defines the type and settings of the compute resources used to launch instances.
 *
 * @public
 */
export type ComputeConfiguration =
  | ComputeConfiguration.Ec2ConfigurationMember
  | ComputeConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ComputeConfiguration {
  /**
   * The Amazon EC2 compute configuration for the capacity provider.
   *
   * @public
   */
  export interface Ec2ConfigurationMember {
    ec2Configuration: Ec2Configuration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    ec2Configuration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    ec2Configuration: (value: Ec2Configuration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The permissions configuration for a capacity provider. This specifies the IAM role that AgentCore uses to manage the Amazon EC2 instances for the capacity provider on your behalf.
 *
 * @public
 */
export interface PermissionsConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the IAM role that AgentCore assumes to manage the capacity provider, including launching, tagging, and terminating instances and their network interfaces. We recommend scoping this role to the minimum permissions that your workloads require.
   *
   * @public
   */
  capacityProviderOperatorRoleArn: string | undefined;
}

/**
 * @public
 */
export interface CreateCapacityProviderInput {
  /**
   * The name of the capacity provider. The name must be unique within your account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * An optional description of the capacity provider. If you don't specify a description, the service creates the capacity provider without one.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The permissions configuration for the capacity provider. This specifies the IAM role that AgentCore uses to manage the Amazon EC2 instances on your behalf.
   *
   * @public
   */
  permissionsConfiguration: PermissionsConfiguration | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A map of tag keys and values to associate with the capacity provider. If you don't specify tags, the capacity provider is created with no tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The compute configuration for the capacity provider. This defines the Amazon EC2 compute resources used to launch instances: the operating system, allowed instance types, networking, and storage.
   *
   * @public
   */
  computeConfiguration: ComputeConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateCapacityProviderOutput {
  /**
   * The unique identifier of the created capacity provider.
   *
   * @public
   */
  capacityProviderId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the capacity provider.
   *
   * @public
   */
  capacityProviderArn: string | undefined;

  /**
   * The name of the capacity provider.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The current status of the capacity provider. For possible values, see `CapacityProviderStatus`.
   *
   * @public
   */
  status: CapacityProviderStatus | undefined;
}

/**
 * @public
 */
export interface DeleteCapacityProviderInput {
  /**
   * The unique identifier of the capacity provider to delete.
   *
   * @public
   */
  capacityProviderId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCapacityProviderOutput {
  /**
   * The unique identifier of the deleted capacity provider.
   *
   * @public
   */
  capacityProviderId: string | undefined;

  /**
   * The current status of the capacity provider. For possible values, see `CapacityProviderStatus`.
   *
   * @public
   */
  status: CapacityProviderStatus | undefined;
}

/**
 * @public
 */
export interface GetCapacityProviderInput {
  /**
   * The unique identifier of the capacity provider.
   *
   * @public
   */
  capacityProviderId: string | undefined;
}

/**
 * @public
 */
export interface GetCapacityProviderOutput {
  /**
   * The unique identifier of the capacity provider.
   *
   * @public
   */
  capacityProviderId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the capacity provider.
   *
   * @public
   */
  capacityProviderArn: string | undefined;

  /**
   * The name of the capacity provider.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The current status of the capacity provider. For possible values, see `CapacityProviderStatus`.
   *
   * @public
   */
  status: CapacityProviderStatus | undefined;

  /**
   * The description of the capacity provider, if one was provided.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A reason code for a capacity provider that is not in the `READY` state. Use this code for programmatic error handling.
   *
   * @public
   */
  statusCode?: CapacityProviderStatusCode | undefined;

  /**
   * A human-readable message that describes why the capacity provider is not in the `READY` state. Because these messages can change, use `statusCode` for programmatic error handling.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The permissions configuration for the capacity provider.
   *
   * @public
   */
  permissionsConfiguration: PermissionsConfiguration | undefined;

  /**
   * The compute configuration for the capacity provider.
   *
   * @public
   */
  computeConfiguration: ComputeConfiguration | undefined;

  /**
   * The timestamp when the capacity provider was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the capacity provider was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAgentRuntimeVersionsByCapacityProviderInput {
  /**
   * The unique identifier of the capacity provider.
   *
   * @public
   */
  capacityProviderId: string | undefined;

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
 * @public
 */
export interface ListAgentRuntimeVersionsByCapacityProviderOutput {
  /**
   * The list of agent runtime versions that are associated with the capacity provider.
   *
   * @public
   */
  agentRuntimes: AgentRuntimeVersionSummary[] | undefined;

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
export interface ListCapacityProvidersInput {
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
 * A summary of a capacity provider, as returned by `ListCapacityProviders`. Each summary includes the capacity provider identifier, Amazon Resource Name (ARN), name, status, and last-updated timestamp.
 *
 * @public
 */
export interface CapacityProviderSummary {
  /**
   * The unique identifier of the capacity provider.
   *
   * @public
   */
  capacityProviderId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the capacity provider.
   *
   * @public
   */
  capacityProviderArn: string | undefined;

  /**
   * The name of the capacity provider.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The current status of the capacity provider. For possible values, see `CapacityProviderStatus`.
   *
   * @public
   */
  status: CapacityProviderStatus | undefined;

  /**
   * The timestamp when the capacity provider was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListCapacityProvidersOutput {
  /**
   * The list of capacity provider summaries.
   *
   * @public
   */
  capacityProviders: CapacityProviderSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Wrapper for updating an optional Description field with PATCH semantics. When present in an update request, the description is replaced with optionalValue. When absent, the description is left unchanged. To unset the description, include the wrapper with optionalValue not specified.
 *
 * @public
 */
export interface UpdatedDescription {
  /**
   * Represents an optional value that is used to update the human-readable description of the resource. If not specified, it will clear the current description of the resource.
   *
   * @public
   */
  optionalValue?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCapacityProviderInput {
  /**
   * The unique identifier of the capacity provider to update.
   *
   * @public
   */
  capacityProviderId: string | undefined;

  /**
   * The updated description of the capacity provider.
   *
   * @public
   */
  description?: UpdatedDescription | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCapacityProviderOutput {
  /**
   * The unique identifier of the capacity provider.
   *
   * @public
   */
  capacityProviderId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the capacity provider.
   *
   * @public
   */
  capacityProviderArn: string | undefined;

  /**
   * The name of the capacity provider.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The current status of the capacity provider. For possible values, see `CapacityProviderStatus`.
   *
   * @public
   */
  status: CapacityProviderStatus | undefined;

  /**
   * The timestamp when the capacity provider was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the capacity provider was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * The network configuration for a code interpreter. This structure defines how the code interpreter connects to the network.
 *
 * @public
 */
export interface CodeInterpreterNetworkConfiguration {
  /**
   * The network mode for the code interpreter. This field specifies how the code interpreter connects to the network.
   *
   * @public
   */
  networkMode: CodeInterpreterNetworkMode | undefined;

  /**
   * The VPC configuration for the code interpreter. This configuration is required when the network mode is set to `VPC`.
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;
}

/**
 * @public
 */
export interface CreateCodeInterpreterRequest {
  /**
   * The name of the code interpreter. The name must be unique within your account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the code interpreter.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the code interpreter to access Amazon Web Services services.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The network configuration for the code interpreter. This configuration specifies the network mode for the code interpreter.
   *
   * @public
   */
  networkConfiguration: CodeInterpreterNetworkConfiguration | undefined;

  /**
   * A list of certificates to install in the code interpreter.
   *
   * @public
   */
  certificates?: Certificate[] | undefined;

  /**
   * The file system configurations to mount into the code interpreter. Use these configurations to mount your own Amazon Simple Storage Service (Amazon S3) Files or Amazon Elastic File System (Amazon EFS) access points. Your sessions can then access your data. If you don't specify this field, no file systems are mounted.
   *
   * @public
   */
  filesystemConfigurations?: ToolsFileSystemConfiguration[] | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock AgentCore ignores the request but does not return an error.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A map of tag keys and values to assign to the code interpreter. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCodeInterpreterResponse {
  /**
   * The unique identifier of the created code interpreter.
   *
   * @public
   */
  codeInterpreterId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the created code interpreter.
   *
   * @public
   */
  codeInterpreterArn: string | undefined;

  /**
   * The timestamp when the code interpreter was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The current status of the code interpreter.
   *
   * @public
   */
  status: CodeInterpreterStatus | undefined;
}

/**
 * @public
 */
export interface DeleteCodeInterpreterRequest {
  /**
   * The unique identifier of the code interpreter to delete.
   *
   * @public
   */
  codeInterpreterId: string | undefined;

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
export interface DeleteCodeInterpreterResponse {
  /**
   * The unique identifier of the deleted code interpreter.
   *
   * @public
   */
  codeInterpreterId: string | undefined;

  /**
   * The current status of the code interpreter deletion.
   *
   * @public
   */
  status: CodeInterpreterStatus | undefined;

  /**
   * The timestamp when the code interpreter was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetCodeInterpreterRequest {
  /**
   * The unique identifier of the code interpreter to retrieve.
   *
   * @public
   */
  codeInterpreterId: string | undefined;
}

/**
 * @public
 */
export interface GetCodeInterpreterResponse {
  /**
   * The unique identifier of the code interpreter.
   *
   * @public
   */
  codeInterpreterId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the code interpreter.
   *
   * @public
   */
  codeInterpreterArn: string | undefined;

  /**
   * The name of the code interpreter.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the code interpreter.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The IAM role ARN that provides permissions for the code interpreter.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The network configuration for a code interpreter. This structure defines how the code interpreter connects to the network.
   *
   * @public
   */
  networkConfiguration: CodeInterpreterNetworkConfiguration | undefined;

  /**
   * The current status of the code interpreter.
   *
   * @public
   */
  status: CodeInterpreterStatus | undefined;

  /**
   * The list of certificates configured for the code interpreter.
   *
   * @public
   */
  certificates?: Certificate[] | undefined;

  /**
   * The file system configurations mounted into the code interpreter. Each entry describes an access point and its mount path.
   *
   * @public
   */
  filesystemConfigurations?: ToolsFileSystemConfiguration[] | undefined;

  /**
   * The reason for failure if the code interpreter is in a failed state.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The timestamp when the code interpreter was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the code interpreter was last updated.
   *
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListCodeInterpretersRequest {
  /**
   * The maximum number of results to return in the response.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The type of code interpreters to list.
   *
   * @public
   */
  type?: ResourceType | undefined;
}

/**
 * Contains summary information about a code interpreter. A code interpreter enables Amazon Bedrock AgentCore Agent to execute code.
 *
 * @public
 */
export interface CodeInterpreterSummary {
  /**
   * The unique identifier of the code interpreter.
   *
   * @public
   */
  codeInterpreterId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the code interpreter.
   *
   * @public
   */
  codeInterpreterArn: string | undefined;

  /**
   * The name of the code interpreter.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the code interpreter.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The current status of the code interpreter.
   *
   * @public
   */
  status: CodeInterpreterStatus | undefined;

  /**
   * The timestamp when the code interpreter was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the code interpreter was last updated.
   *
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListCodeInterpretersResponse {
  /**
   * The list of code interpreter summaries.
   *
   * @public
   */
  codeInterpreterSummaries: CodeInterpreterSummary[] | undefined;

  /**
   * A token to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The configuration for a component within a configuration bundle. The component type is inferred from the component identifier ARN.
 *
 * @public
 */
export interface ComponentConfiguration {
  /**
   * The configuration values as a flexible JSON document.
   *
   * @public
   */
  configuration: __DocumentType | undefined;
}

/**
 * The source that created a configuration bundle version.
 *
 * @public
 */
export interface VersionCreatedBySource {
  /**
   * The name of the source (for example, `user`, `optimization-job`, or `system`).
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the source, if applicable (for example, a user ARN or optimization job ARN).
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationBundleRequest {
  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name for the configuration bundle. Names must be unique within your account.
   *
   * @public
   */
  bundleName: string | undefined;

  /**
   * The description for the configuration bundle.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A map of component identifiers to their configurations. Each component represents a configurable element within the bundle.
   *
   * @public
   */
  components: Record<string, ComponentConfiguration> | undefined;

  /**
   * The branch name for version tracking. Defaults to `mainline` if not specified.
   *
   * @public
   */
  branchName?: string | undefined;

  /**
   * A commit message describing the initial version of the configuration bundle.
   *
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * The source that created this version, including the source name and optional ARN.
   *
   * @public
   */
  createdBy?: VersionCreatedBySource | undefined;

  /**
   * Optional KMS key ARN for encrypting component configurations.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * A map of tag keys and values to assign to the configuration bundle. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationBundleResponse {
  /**
   * The Amazon Resource Name (ARN) of the created configuration bundle.
   *
   * @public
   */
  bundleArn: string | undefined;

  /**
   * The unique identifier of the created configuration bundle.
   *
   * @public
   */
  bundleId: string | undefined;

  /**
   * The initial version identifier of the configuration bundle.
   *
   * @public
   */
  versionId: string | undefined;

  /**
   * The timestamp when the configuration bundle was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationBundleRequest {
  /**
   * The unique identifier of the configuration bundle to delete.
   *
   * @public
   */
  bundleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationBundleResponse {
  /**
   * The Amazon Resource Name (ARN) of the deleted configuration bundle.
   *
   * @public
   */
  bundleArn: string | undefined;

  /**
   * The unique identifier of the deleted configuration bundle.
   *
   * @public
   */
  bundleId: string | undefined;

  /**
   * The status of the configuration bundle deletion operation.
   *
   * @public
   */
  status: ConfigurationBundleStatus | undefined;
}

/**
 * @public
 */
export interface GetConfigurationBundleRequest {
  /**
   * The unique identifier of the configuration bundle to retrieve.
   *
   * @public
   */
  bundleId: string | undefined;

  /**
   * The branch name to get the latest version from. If not specified, returns the latest version on the mainline branch.
   *
   * @public
   */
  branchName?: string | undefined;
}

/**
 * The version lineage metadata that tracks parent versions and creation source. Supports git-like two-parent merges for branch management.
 *
 * @public
 */
export interface VersionLineageMetadata {
  /**
   * A list of parent version identifiers. Regular commits have 0-1 parents. Merge commits have 2 parents: the target branch parent and the source branch parent. The first parent represents the primary lineage.
   *
   * @public
   */
  parentVersionIds?: string[] | undefined;

  /**
   * The branch name for this version. If not specified, inherits the parent's branch or defaults to `mainline`.
   *
   * @public
   */
  branchName?: string | undefined;

  /**
   * The source that created this version.
   *
   * @public
   */
  createdBy?: VersionCreatedBySource | undefined;

  /**
   * A commit message describing the changes in this version.
   *
   * @public
   */
  commitMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationBundleResponse {
  /**
   * The Amazon Resource Name (ARN) of the configuration bundle.
   *
   * @public
   */
  bundleArn: string | undefined;

  /**
   * The unique identifier of the configuration bundle.
   *
   * @public
   */
  bundleId: string | undefined;

  /**
   * The name of the configuration bundle.
   *
   * @public
   */
  bundleName: string | undefined;

  /**
   * The description of the configuration bundle.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The version identifier of this configuration bundle.
   *
   * @public
   */
  versionId: string | undefined;

  /**
   * A map of component identifiers to their configurations for this version.
   *
   * @public
   */
  components: Record<string, ComponentConfiguration> | undefined;

  /**
   * The version lineage metadata, including parent versions, branch name, and creation source.
   *
   * @public
   */
  lineageMetadata?: VersionLineageMetadata | undefined;

  /**
   * The timestamp when the configuration bundle was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the configuration bundle was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * KMS key ARN used to encrypt component configurations, if CMK was provided.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationBundleVersionRequest {
  /**
   * The unique identifier of the configuration bundle.
   *
   * @public
   */
  bundleId: string | undefined;

  /**
   * The version identifier of the configuration bundle version to retrieve.
   *
   * @public
   */
  versionId: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationBundleVersionResponse {
  /**
   * The Amazon Resource Name (ARN) of the configuration bundle.
   *
   * @public
   */
  bundleArn: string | undefined;

  /**
   * The unique identifier of the configuration bundle.
   *
   * @public
   */
  bundleId: string | undefined;

  /**
   * The name of the configuration bundle.
   *
   * @public
   */
  bundleName: string | undefined;

  /**
   * The description of the configuration bundle.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The version identifier of this configuration bundle version.
   *
   * @public
   */
  versionId: string | undefined;

  /**
   * A map of component identifiers to their configurations for this version.
   *
   * @public
   */
  components: Record<string, ComponentConfiguration> | undefined;

  /**
   * The version lineage metadata, including parent versions, branch name, and creation source.
   *
   * @public
   */
  lineageMetadata?: VersionLineageMetadata | undefined;

  /**
   * The timestamp when the configuration bundle was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when this specific version was created.
   *
   * @public
   */
  versionCreatedAt: Date | undefined;

  /**
   * KMS key ARN used to encrypt component configurations, if CMK was provided.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationBundlesRequest {
  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a configuration bundle.
 *
 * @public
 */
export interface ConfigurationBundleSummary {
  /**
   * The Amazon Resource Name (ARN) of the configuration bundle.
   *
   * @public
   */
  bundleArn: string | undefined;

  /**
   * The unique identifier of the configuration bundle.
   *
   * @public
   */
  bundleId: string | undefined;

  /**
   * The name of the configuration bundle.
   *
   * @public
   */
  bundleName: string | undefined;

  /**
   * The description of the configuration bundle.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp when the configuration bundle was created.
   *
   * @public
   */
  createdAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListConfigurationBundlesResponse {
  /**
   * The list of configuration bundle summaries.
   *
   * @public
   */
  bundles: ConfigurationBundleSummary[] | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, use this token when making another request in the `nextToken` field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A filter for listing configuration bundle versions.
 *
 * @public
 */
export interface VersionFilter {
  /**
   * Filter by branch name.
   *
   * @public
   */
  branchName?: string | undefined;

  /**
   * Filter by creation source name.
   *
   * @public
   */
  createdByName?: string | undefined;

  /**
   * When true, returns only the latest version for each branch. When false or not specified, returns all versions. Can be combined with `branchName` to get the latest version for a specific branch.
   *
   * @public
   */
  latestPerBranch?: boolean | undefined;
}

/**
 * @public
 */
export interface ListConfigurationBundleVersionsRequest {
  /**
   * The unique identifier of the configuration bundle to list versions for.
   *
   * @public
   */
  bundleId: string | undefined;

  /**
   * If the total number of results is greater than the `maxResults` value provided in the request, enter the token returned in the `nextToken` field in the response in this field to return the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the `nextToken` field when making another request to return the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * An optional filter for listing versions, including branch name, creation source, and whether to return only the latest version per branch.
   *
   * @public
   */
  filter?: VersionFilter | undefined;
}

/**
 * Summary information about a configuration bundle version.
 *
 * @public
 */
export interface ConfigurationBundleVersionSummary {
  /**
   * The Amazon Resource Name (ARN) of the configuration bundle.
   *
   * @public
   */
  bundleArn: string | undefined;

  /**
   * The unique identifier of the configuration bundle.
   *
   * @public
   */
  bundleId: string | undefined;

  /**
   * The version identifier of this configuration bundle version.
   *
   * @public
   */
  versionId: string | undefined;

  /**
   * The version lineage metadata, including parent versions, branch name, and creation source.
   *
   * @public
   */
  lineageMetadata?: VersionLineageMetadata | undefined;

  /**
   * The timestamp when this version was created.
   *
   * @public
   */
  versionCreatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListConfigurationBundleVersionsResponse {
  /**
   * The list of configuration bundle version summaries.
   *
   * @public
   */
  versions: ConfigurationBundleVersionSummary[] | undefined;

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
export interface UpdateConfigurationBundleRequest {
  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The unique identifier of the configuration bundle to update.
   *
   * @public
   */
  bundleId: string | undefined;

  /**
   * The updated name for the configuration bundle.
   *
   * @public
   */
  bundleName?: string | undefined;

  /**
   * The updated description for the configuration bundle.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated component configurations. Creates a new version of the bundle.
   *
   * @public
   */
  components?: Record<string, ComponentConfiguration> | undefined;

  /**
   * A list of parent version identifiers for lineage tracking. Regular commits have a single parent. Merge commits have two parents: the target branch parent and the source branch parent. If the branch already exists, the first parent must be the latest version on that branch.
   *
   * @public
   */
  parentVersionIds: string[] | undefined;

  /**
   * The branch name for this version. If not specified, inherits the parent's branch or defaults to `mainline`.
   *
   * @public
   */
  branchName?: string | undefined;

  /**
   * A commit message describing the changes in this version.
   *
   * @public
   */
  commitMessage: string | undefined;

  /**
   * The source that created this version, including the source name and optional ARN.
   *
   * @public
   */
  createdBy?: VersionCreatedBySource | undefined;

  /**
   * Optional KMS key ARN for encrypting component configurations. If provided, components will be encrypted with this key. If the bundle already has a KMS key, this rotates to the new key.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationBundleResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated configuration bundle.
   *
   * @public
   */
  bundleArn: string | undefined;

  /**
   * The unique identifier of the updated configuration bundle.
   *
   * @public
   */
  bundleId: string | undefined;

  /**
   * The new version identifier created by this update.
   *
   * @public
   */
  versionId: string | undefined;

  /**
   * The timestamp when the configuration bundle was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * The identity provider configuration used to authenticate end users to the consent portal.
 *
 * @public
 */
export interface ConsentPortalIdpConfig {
  /**
   * The Amazon Resource Name (ARN) of the OAuth2 credential provider used to authenticate end users to the consent portal.
   *
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * The OAuth2 scopes that the consent portal requests when authenticating end users.
   *
   * @public
   */
  scopes: string[] | undefined;

  /**
   * The audience value that the consent portal includes when requesting tokens from the identity provider.
   *
   * @public
   */
  audience?: string | undefined;
}

/**
 * A resource served by the consent portal.
 *
 * @public
 */
export interface ConsentPortalSource {
  /**
   * The identifier of the source resource. For an `agentcore-gateway` source, this is the gateway ID or its Amazon Resource Name (ARN).
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The type of the source resource.
   *
   * @public
   */
  type: ConsentPortalSourceType | undefined;
}

/**
 * @public
 */
export interface CreateConsentPortalRequest {
  /**
   * The Amazon Resource Name (ARN) of the IAM role that the consent portal assumes to access the resources defined in its sources.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The identity provider configuration that the consent portal uses to authenticate end users.
   *
   * @public
   */
  idpConfig: ConsentPortalIdpConfig | undefined;

  /**
   * The name of the consent portal. The name must be unique within your account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The resources served by the consent portal. Currently, we only support type `agentcore-gateway`.
   *
   * @public
   */
  sources: ConsentPortalSource[] | undefined;

  /**
   * The description of the consent portal.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A map of tag keys and values to assign to the consent portal. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConsentPortalResponse {
  /**
   * The resources served by the consent portal.
   *
   * @public
   */
  sources: ConsentPortalSource[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the consent portal.
   *
   * @public
   */
  consentPortalArn: string | undefined;

  /**
   * The unique identifier of the consent portal.
   *
   * @public
   */
  consentPortalId: string | undefined;

  /**
   * The timestamp for when the consent portal was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The description of the consent portal.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that the consent portal assumes to access the resources defined in its sources.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The identity provider configuration that the consent portal uses to authenticate end users.
   *
   * @public
   */
  idpConfig: ConsentPortalIdpConfig | undefined;

  /**
   * The name of the consent portal.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The URL used to access the consent portal.
   *
   * @public
   */
  portalUrl?: string | undefined;

  /**
   * The current status of the consent portal.
   *
   * @public
   */
  status: ConsentPortalStatus | undefined;

  /**
   * A message that provides additional information about the current status of the consent portal.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The timestamp for when the consent portal was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteConsentPortalRequest {
  /**
   * The identifier of the consent portal. You can specify either the consent portal ID or its Amazon Resource Name (ARN).
   *
   * @public
   */
  consentPortalIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteConsentPortalResponse {}

/**
 * @public
 */
export interface GetConsentPortalRequest {
  /**
   * The identifier of the consent portal. You can specify either the consent portal ID or its Amazon Resource Name (ARN).
   *
   * @public
   */
  consentPortalIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetConsentPortalResponse {
  /**
   * The resources served by the consent portal.
   *
   * @public
   */
  sources: ConsentPortalSource[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the consent portal.
   *
   * @public
   */
  consentPortalArn: string | undefined;

  /**
   * The unique identifier of the consent portal.
   *
   * @public
   */
  consentPortalId: string | undefined;

  /**
   * The timestamp for when the consent portal was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The description of the consent portal.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that the consent portal assumes to access the resources defined in its sources.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The identity provider configuration that the consent portal uses to authenticate end users.
   *
   * @public
   */
  idpConfig: ConsentPortalIdpConfig | undefined;

  /**
   * The name of the consent portal.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The URL used to access the consent portal.
   *
   * @public
   */
  portalUrl?: string | undefined;

  /**
   * The current status of the consent portal.
   *
   * @public
   */
  status: ConsentPortalStatus | undefined;

  /**
   * A message that provides additional information about the current status of the consent portal.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The timestamp for when the consent portal was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListConsentPortalsRequest {
  /**
   * The maximum number of consent portals to return in a single call.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token to retrieve the next page of results. Use the value returned in a previous response to request the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Summary information about a consent portal.
 *
 * @public
 */
export interface ConsentPortalSummary {
  /**
   * The resources served by the consent portal.
   *
   * @public
   */
  sources: ConsentPortalSource[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the consent portal.
   *
   * @public
   */
  consentPortalArn: string | undefined;

  /**
   * The unique identifier of the consent portal.
   *
   * @public
   */
  consentPortalId: string | undefined;

  /**
   * The timestamp for when the consent portal was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The description of the consent portal.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The name of the consent portal.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The URL used to access the consent portal.
   *
   * @public
   */
  portalUrl?: string | undefined;

  /**
   * The current status of the consent portal.
   *
   * @public
   */
  status: ConsentPortalStatus | undefined;

  /**
   * The timestamp for when the consent portal was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListConsentPortalsResponse {
  /**
   * The list of consent portals.
   *
   * @public
   */
  consentPortals: ConsentPortalSummary[] | undefined;

  /**
   * The token to use in a subsequent request to retrieve the next page of results. This value is null when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConsentPortalRequest {
  /**
   * The identifier of the consent portal. You can specify either the consent portal ID or its Amazon Resource Name (ARN).
   *
   * @public
   */
  consentPortalIdentifier: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that the consent portal assumes to access the resources defined in its sources.
   *
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * The identity provider configuration that the consent portal uses to authenticate end users.
   *
   * @public
   */
  idpConfig?: ConsentPortalIdpConfig | undefined;

  /**
   * The description of the consent portal.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConsentPortalResponse {
  /**
   * The resources served by the consent portal.
   *
   * @public
   */
  sources: ConsentPortalSource[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the consent portal.
   *
   * @public
   */
  consentPortalArn: string | undefined;

  /**
   * The unique identifier of the consent portal.
   *
   * @public
   */
  consentPortalId: string | undefined;

  /**
   * The timestamp for when the consent portal was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The description of the consent portal.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that the consent portal assumes to access the resources defined in its sources.
   *
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * The identity provider configuration that the consent portal uses to authenticate end users.
   *
   * @public
   */
  idpConfig: ConsentPortalIdpConfig | undefined;

  /**
   * The name of the consent portal.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The URL used to access the consent portal.
   *
   * @public
   */
  portalUrl?: string | undefined;

  /**
   * The current status of the consent portal.
   *
   * @public
   */
  status: ConsentPortalStatus | undefined;

  /**
   * A message that provides additional information about the current status of the consent portal.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The timestamp for when the consent portal was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateDatasetRequest {
  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Human-readable name for the dataset. Must be unique within the account. Immutable after creation.
   *
   * @public
   */
  datasetName: string | undefined;

  /**
   * A description of the dataset.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Source of initial examples. Provide either inline examples or an S3 URI pointing to a JSONL file.
   *
   * @public
   */
  source: DataSourceType | undefined;

  /**
   * Versioned schema type governing the structure of examples. Immutable after creation.
   *
   * @public
   */
  schemaType: DatasetSchemaType | undefined;

  /**
   * Optional KMS key ARN for server-side encryption on service Amazon S3 writes.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * A map of tag keys and values to assign to the dataset.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * The Amazon Resource Name (ARN) of the created dataset.
   *
   * @public
   */
  datasetArn: string | undefined;

  /**
   * The unique identifier of the created dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * Always CREATING immediately after this call. Poll `GetDataset` until status transitions to ACTIVE or CREATE_FAILED.
   *
   * @public
   */
  status: DatasetStatus | undefined;

  /**
   * The timestamp when the dataset was created.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface CreateDatasetVersionRequest {
  /**
   * The unique identifier of the dataset to publish a version for.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateDatasetVersionResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  datasetArn: string | undefined;

  /**
   * The unique identifier of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * Always UPDATING immediately after this call. Poll `GetDataset` until status transitions to ACTIVE or UPDATE_FAILED.
   *
   * @public
   */
  status: DatasetStatus | undefined;

  /**
   * The version number being created.
   *
   * @public
   */
  datasetVersion: string | undefined;

  /**
   * The timestamp when the version creation was initiated.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetRequest {
  /**
   * The unique identifier of the dataset to delete.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * Optional version to delete. If absent, deletes the entire dataset. If provided, deletes only that specific version.
   *
   * @public
   */
  datasetVersion?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  datasetArn: string | undefined;

  /**
   * The unique identifier of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The current status of the dataset after the delete request.
   *
   * @public
   */
  status: DatasetStatus | undefined;

  /**
   * The version that was deleted.
   *
   * @public
   */
  datasetVersion: string | undefined;

  /**
   * The timestamp when the delete was initiated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetExamplesRequest {
  /**
   * The unique identifier of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The IDs of the examples to delete.
   *
   * @public
   */
  exampleIds: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetExamplesResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  datasetArn: string | undefined;

  /**
   * The unique identifier of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The current status of the dataset.
   *
   * @public
   */
  status: DatasetStatus | undefined;

  /**
   * The number of examples deleted.
   *
   * @public
   */
  deletedCount: number | undefined;

  /**
   * The timestamp when the examples were deleted.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetDatasetRequest {
  /**
   * The unique identifier of the dataset to retrieve.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * Version to retrieve: "DRAFT" or a version number. Defaults to DRAFT if absent.
   *
   * @public
   */
  datasetVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetDatasetResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  datasetArn: string | undefined;

  /**
   * The unique identifier of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The resolved version: "DRAFT" (default) or the requested version number.
   *
   * @public
   */
  datasetVersion: string | undefined;

  /**
   * The name of the dataset.
   *
   * @public
   */
  datasetName: string | undefined;

  /**
   * The description of the dataset.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The current status of the dataset.
   *
   * @public
   */
  status: DatasetStatus | undefined;

  /**
   * Publish synchronization state. Only authoritative when status is ACTIVE. MODIFIED indicates DRAFT has unpublished changes. UNMODIFIED indicates DRAFT matches the latest published version.
   *
   * @public
   */
  draftStatus?: DraftStatus | undefined;

  /**
   * Populated when status is CREATE_FAILED, UPDATE_FAILED, or DELETE_FAILED. Describes the reason for the failure.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The schema type declared at create time. Immutable after creation.
   *
   * @public
   */
  schemaType: DatasetSchemaType | undefined;

  /**
   * KMS key ARN used for server-side encryption on service Amazon S3 writes, if configured.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The number of examples in the DRAFT.
   *
   * @public
   */
  exampleCount: number | undefined;

  /**
   * Presigned Amazon S3 URL to download the consolidated dataset file for the resolved version. Expires after 5 minutes. Omitted if the file does not yet exist.
   *
   * @public
   */
  downloadUrl?: string | undefined;

  /**
   * Expiry timestamp for the download URL.
   *
   * @public
   */
  downloadUrlExpiresAt?: Date | undefined;

  /**
   * The timestamp when the dataset was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the dataset was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The tags associated with the dataset.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDatasetExamplesRequest {
  /**
   * The unique identifier of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * Version to paginate: "DRAFT" or a version number. Defaults to DRAFT if absent. Only used on the first request; for subsequent pages, the version is extracted from the pagination token.
   *
   * @public
   */
  datasetVersion?: string | undefined;

  /**
   * Maximum number of examples to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetExamplesResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  datasetArn: string | undefined;

  /**
   * The unique identifier of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The version returned.
   *
   * @public
   */
  datasetVersion: string | undefined;

  /**
   * Paginated example content. Each element is a JSON object containing at least an `exampleId` field plus the schema-specific content fields.
   *
   * @public
   */
  examples: __DocumentType[] | undefined;

  /**
   * The token for the next page of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of datasets to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a dataset.
 *
 * @public
 */
export interface DatasetSummary {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  datasetArn: string | undefined;

  /**
   * The unique identifier of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The name of the dataset.
   *
   * @public
   */
  datasetName: string | undefined;

  /**
   * The description of the dataset.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The current status of the dataset.
   *
   * @public
   */
  status: DatasetStatus | undefined;

  /**
   * Publish synchronization state. Only authoritative when status is ACTIVE.
   *
   * @public
   */
  draftStatus?: DraftStatus | undefined;

  /**
   * The schema type of the dataset.
   *
   * @public
   */
  schemaType: DatasetSchemaType | undefined;

  /**
   * The number of examples in the dataset.
   *
   * @public
   */
  exampleCount: number | undefined;

  /**
   * The timestamp when the dataset was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the dataset was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * The list of datasets.
   *
   * @public
   */
  datasets: DatasetSummary[] | undefined;

  /**
   * The token for the next page of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetVersionsRequest {
  /**
   * The unique identifier of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of versions to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about a published dataset version.
 *
 * @public
 */
export interface DatasetVersionSummary {
  /**
   * The version number of this published snapshot.
   *
   * @public
   */
  datasetVersion: string | undefined;

  /**
   * The number of examples in this version.
   *
   * @public
   */
  exampleCount: number | undefined;

  /**
   * The timestamp when this version was published.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface ListDatasetVersionsResponse {
  /**
   * The list of published dataset versions.
   *
   * @public
   */
  versions: DatasetVersionSummary[] | undefined;

  /**
   * The token for the next page of results, or null if there are no more results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetRequest {
  /**
   * The unique identifier of the dataset to update.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The updated description for the dataset.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated dataset.
   *
   * @public
   */
  datasetArn: string | undefined;

  /**
   * The unique identifier of the updated dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The timestamp when the dataset was updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetExamplesRequest {
  /**
   * The unique identifier of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Examples to update. Each element is a JSON object containing a required `exampleId` field identifying the existing example, plus the replacement fields. Maximum 1000 examples per call.
   *
   * @public
   */
  examples: __DocumentType[] | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetExamplesResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  datasetArn: string | undefined;

  /**
   * The unique identifier of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The current status of the dataset.
   *
   * @public
   */
  status: DatasetStatus | undefined;

  /**
   * The number of examples updated.
   *
   * @public
   */
  updatedCount: number | undefined;

  /**
   * The timestamp when the examples were updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource for which to delete the resource policy.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * Configuration for a Lambda function used as a code-based evaluator.
 *
 * @public
 */
export interface LambdaEvaluatorConfig {
  /**
   * The Amazon Resource Name (ARN) of the Lambda function that implements the evaluation logic.
   *
   * @public
   */
  lambdaArn: string | undefined;

  /**
   * The timeout in seconds for the Lambda function invocation. Defaults to 60. Must be between 1 and 300.
   *
   * @public
   */
  lambdaTimeoutInSeconds?: number | undefined;
}

/**
 * Configuration for a code-based evaluator. Specify the Lambda function to use for evaluation.
 *
 * @public
 */
export type CodeBasedEvaluatorConfig =
  | CodeBasedEvaluatorConfig.LambdaConfigMember
  | CodeBasedEvaluatorConfig.$UnknownMember;

/**
 * @public
 */
export namespace CodeBasedEvaluatorConfig {
  /**
   * The Lambda function configuration for code-based evaluation.
   *
   * @public
   */
  export interface LambdaConfigMember {
    lambdaConfig: LambdaEvaluatorConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    lambdaConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    lambdaConfig: (value: LambdaEvaluatorConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration parameters that control how the foundation model behaves during evaluation, including response generation settings.
 *
 * @public
 */
export interface InferenceConfiguration {
  /**
   * The maximum number of tokens to generate in the model response during evaluation.
   *
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * The temperature value that controls randomness in the model's responses. Lower values produce more deterministic outputs.
   *
   * @public
   */
  temperature?: number | undefined;

  /**
   * The top-p sampling parameter that controls the diversity of the model's responses by limiting the cumulative probability of token choices.
   *
   * @public
   */
  topP?: number | undefined;

  /**
   * The list of sequences that will cause the model to stop generating tokens when encountered.
   *
   * @public
   */
  stopSequences?: string[] | undefined;
}

/**
 * The configuration for using Amazon Bedrock models in evaluator assessments, including model selection and inference parameters.
 *
 * @public
 */
export interface BedrockEvaluatorModelConfig {
  /**
   * The identifier of the Amazon Bedrock model to use for evaluation. Must be a supported foundation model available in your region.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The inference configuration parameters that control model behavior during evaluation, including temperature, token limits, and sampling settings.
   *
   * @public
   */
  inferenceConfig?: InferenceConfiguration | undefined;

  /**
   * Additional model-specific request fields to customize model behavior beyond the standard inference configuration.
   *
   * @public
   */
  additionalModelRequestFields?: __DocumentType | undefined;
}

/**
 * The reasoning configuration that controls how a reasoning model allocates effort during evaluation.
 *
 * @public
 */
export interface ReasoningConfiguration {
  /**
   * The level of reasoning effort the model applies when generating a response. For supported values, see the model provider's documentation.
   *
   * @public
   */
  effort?: string | undefined;
}

/**
 * The configuration for using models served through the OpenResponses API in evaluator assessments, including model selection and inference parameters.
 *
 * @public
 */
export interface OpenResponsesEvaluatorModelConfig {
  /**
   * The identifier of the model to use for evaluation.
   *
   * @public
   */
  modelId: string | undefined;

  /**
   * The maximum number of tokens to generate in the model response, including visible output and reasoning tokens.
   *
   * @public
   */
  maxOutputTokens?: number | undefined;

  /**
   * The temperature value that controls randomness in the model's responses. Lower values produce more deterministic outputs.
   *
   * @public
   */
  temperature?: number | undefined;

  /**
   * The top-p sampling parameter that controls the diversity of the model's responses by limiting the cumulative probability of token choices.
   *
   * @public
   */
  topP?: number | undefined;

  /**
   * The reasoning configuration for reasoning models. Non-reasoning models ignore this configuration.
   *
   * @public
   */
  reasoning?: ReasoningConfiguration | undefined;
}

/**
 * The model configuration that specifies which foundation model to use for evaluation and how to configure it.
 *
 * @public
 */
export type EvaluatorModelConfig =
  | EvaluatorModelConfig.BedrockEvaluatorModelConfigMember
  | EvaluatorModelConfig.ResponsesEvaluatorModelConfigMember
  | EvaluatorModelConfig.$UnknownMember;

/**
 * @public
 */
export namespace EvaluatorModelConfig {
  /**
   * The Amazon Bedrock model configuration for evaluation.
   *
   * @public
   */
  export interface BedrockEvaluatorModelConfigMember {
    bedrockEvaluatorModelConfig: BedrockEvaluatorModelConfig;
    responsesEvaluatorModelConfig?: never;
    $unknown?: never;
  }

  /**
   * The OpenResponses model configuration for evaluation.
   *
   * @public
   */
  export interface ResponsesEvaluatorModelConfigMember {
    bedrockEvaluatorModelConfig?: never;
    responsesEvaluatorModelConfig: OpenResponsesEvaluatorModelConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    bedrockEvaluatorModelConfig?: never;
    responsesEvaluatorModelConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    bedrockEvaluatorModelConfig: (value: BedrockEvaluatorModelConfig) => T;
    responsesEvaluatorModelConfig: (value: OpenResponsesEvaluatorModelConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration for a derived evaluator. It reuses an existing evaluator's logic on your own model.
 *
 * @public
 */
export interface DerivedEvaluatorConfig {
  /**
   * The identifier of the base evaluator whose logic to run (a `Builtin.*` or `ThirdParty.*` evaluator).
   *
   * @public
   */
  baseEvaluatorId: string | undefined;

  /**
   * The configuration of the evaluator model that you supply.
   *
   * @public
   */
  modelConfig: EvaluatorModelConfig | undefined;
}

/**
 * The definition of a categorical rating scale option that provides a named category with its description for evaluation scoring.
 *
 * @public
 */
export interface CategoricalScaleDefinition {
  /**
   * The description that explains what this categorical rating represents and when it should be used.
   *
   * @public
   */
  definition: string | undefined;

  /**
   * The label or name of this categorical rating option.
   *
   * @public
   */
  label: string | undefined;
}

/**
 * The definition of a numerical rating scale option that provides a numeric value with its description for evaluation scoring.
 *
 * @public
 */
export interface NumericalScaleDefinition {
  /**
   * The description that explains what this numerical rating represents and when it should be used.
   *
   * @public
   */
  definition: string | undefined;

  /**
   * The numerical value for this rating scale option.
   *
   * @public
   */
  value: number | undefined;

  /**
   * The label or name that describes this numerical rating option.
   *
   * @public
   */
  label: string | undefined;
}

/**
 * The rating scale for one dimension of an LLM-as-a-judge evaluator, supporting either a numerical or a categorical scale.
 *
 * @public
 */
export type DimensionRatingScale =
  | DimensionRatingScale.CategoricalMember
  | DimensionRatingScale.NumericalMember
  | DimensionRatingScale.$UnknownMember;

/**
 * @public
 */
export namespace DimensionRatingScale {
  /**
   * The numerical rating scale with defined score values and descriptions for quantitative evaluation of the dimension.
   *
   * @public
   */
  export interface NumericalMember {
    numerical: NumericalScaleDefinition[];
    categorical?: never;
    $unknown?: never;
  }

  /**
   * The categorical rating scale with named categories and definitions for qualitative evaluation of the dimension.
   *
   * @public
   */
  export interface CategoricalMember {
    numerical?: never;
    categorical: CategoricalScaleDefinition[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    numerical?: never;
    categorical?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    numerical: (value: NumericalScaleDefinition[]) => T;
    categorical: (value: CategoricalScaleDefinition[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A single dimension of an LLM-as-a-judge evaluator, defining what the evaluator model should judge for that dimension and how it should be scored.
 *
 * @public
 */
export interface EvaluationDimension {
  /**
   * The name of the dimension. This name is unique within the evaluator and identifies the dimension's results.
   *
   * @public
   */
  dimensionName: string | undefined;

  /**
   * The instruction to the evaluator model for this dimension, describing what the model should judge when scoring the dimension.
   *
   * @public
   */
  dimensionInstruction: string | undefined;

  /**
   * The rating scale for this dimension, which can be numerical or categorical. A dimension's rating scale cannot itself be multi-dimensional.
   *
   * @public
   */
  dimensionRatingScale: DimensionRatingScale | undefined;
}

/**
 * The rating scale that defines how evaluators should score agent performance, supporting both numerical and categorical scales.
 *
 * @public
 */
export type RatingScale =
  | RatingScale.CategoricalMember
  | RatingScale.MultiDimensionalMember
  | RatingScale.NumericalMember
  | RatingScale.$UnknownMember;

/**
 * @public
 */
export namespace RatingScale {
  /**
   * The numerical rating scale with defined score values and descriptions for quantitative evaluation.
   *
   * @public
   */
  export interface NumericalMember {
    numerical: NumericalScaleDefinition[];
    categorical?: never;
    multiDimensional?: never;
    $unknown?: never;
  }

  /**
   * The categorical rating scale with named categories and definitions for qualitative evaluation.
   *
   * @public
   */
  export interface CategoricalMember {
    numerical?: never;
    categorical: CategoricalScaleDefinition[];
    multiDimensional?: never;
    $unknown?: never;
  }

  /**
   * A list of dimensions that lets an LLM-as-a-judge evaluator score several dimensions of the same target in a single evaluation. Each dimension has its own instruction and rating scale, and produces its own result.
   *
   * @public
   */
  export interface MultiDimensionalMember {
    numerical?: never;
    categorical?: never;
    multiDimensional: EvaluationDimension[];
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    numerical?: never;
    categorical?: never;
    multiDimensional?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    numerical: (value: NumericalScaleDefinition[]) => T;
    categorical: (value: CategoricalScaleDefinition[]) => T;
    multiDimensional: (value: EvaluationDimension[]) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration for LLM-as-a-Judge evaluation that uses a language model to assess agent performance based on custom instructions and rating scales.
 *
 * @public
 */
export interface LlmAsAJudgeEvaluatorConfig {
  /**
   * The evaluation instructions that guide the language model in assessing agent performance, including criteria and evaluation guidelines.
   *
   * @public
   */
  instructions: string | undefined;

  /**
   * The rating scale that defines how the evaluator should score agent performance, either numerical or categorical.
   *
   * @public
   */
  ratingScale: RatingScale | undefined;

  /**
   * The model configuration that specifies which foundation model to use and how to configure it for evaluation.
   *
   * @public
   */
  modelConfig: EvaluatorModelConfig | undefined;
}

/**
 * The configuration that defines how an evaluator assesses agent performance, including the evaluation method and parameters.
 *
 * @public
 */
export type EvaluatorConfig =
  | EvaluatorConfig.CodeBasedMember
  | EvaluatorConfig.DerivedMember
  | EvaluatorConfig.LlmAsAJudgeMember
  | EvaluatorConfig.$UnknownMember;

/**
 * @public
 */
export namespace EvaluatorConfig {
  /**
   * The LLM-as-a-Judge configuration that uses a language model to evaluate agent performance based on custom instructions and rating scales.
   *
   * @public
   */
  export interface LlmAsAJudgeMember {
    llmAsAJudge: LlmAsAJudgeEvaluatorConfig;
    codeBased?: never;
    derived?: never;
    $unknown?: never;
  }

  /**
   * Configuration for a code-based evaluator that uses a customer-managed Lambda function to programmatically assess agent performance.
   *
   * @public
   */
  export interface CodeBasedMember {
    llmAsAJudge?: never;
    codeBased: CodeBasedEvaluatorConfig;
    derived?: never;
    $unknown?: never;
  }

  /**
   * The configuration for an evaluator derived from an existing base evaluator (a built-in or third-party evaluator), run on your own model. The base evaluator supplies the prompt and scoring.
   *
   * @public
   */
  export interface DerivedMember {
    llmAsAJudge?: never;
    codeBased?: never;
    derived: DerivedEvaluatorConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    llmAsAJudge?: never;
    codeBased?: never;
    derived?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    llmAsAJudge: (value: LlmAsAJudgeEvaluatorConfig) => T;
    codeBased: (value: CodeBasedEvaluatorConfig) => T;
    derived: (value: DerivedEvaluatorConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateEvaluatorRequest {
  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the evaluator. Must be unique within your account.
   *
   * @public
   */
  evaluatorName: string | undefined;

  /**
   * The description of the evaluator that explains its purpose and evaluation criteria.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration for the evaluator. Specify either LLM-as-a-Judge settings with instructions, rating scale, and model configuration, or code-based settings with a customer-managed Lambda function.
   *
   * @public
   */
  evaluatorConfig: EvaluatorConfig | undefined;

  /**
   * The evaluation level that determines the scope of evaluation. Valid values are `TOOL_CALL` for individual tool invocations, `TRACE` for single request-response interactions, or `SESSION` for entire conversation sessions.
   *
   * @public
   */
  level: EvaluatorLevel | undefined;

  /**
   * The Amazon Resource Name (ARN) of a customer managed KMS key to use for encrypting sensitive evaluator data, including instructions and rating scale. If you don't specify a KMS key, the evaluator data is encrypted with an Amazon Web Services owned key. Only symmetric encryption KMS keys are supported. For more information, see [Encryption at rest for AgentCore Evaluations](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/evaluations-encryption.html).
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * A map of tag keys and values to assign to an AgentCore Evaluator. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateEvaluatorResponse {
  /**
   * The Amazon Resource Name (ARN) of the created evaluator.
   *
   * @public
   */
  evaluatorArn: string | undefined;

  /**
   * The unique identifier of the created evaluator.
   *
   * @public
   */
  evaluatorId: string | undefined;

  /**
   * The timestamp when the evaluator was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The status of the evaluator creation operation.
   *
   * @public
   */
  status: EvaluatorStatus | undefined;
}

/**
 * @public
 */
export interface DeleteEvaluatorRequest {
  /**
   * The unique identifier of the evaluator to delete.
   *
   * @public
   */
  evaluatorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEvaluatorResponse {
  /**
   * The Amazon Resource Name (ARN) of the deleted evaluator.
   *
   * @public
   */
  evaluatorArn: string | undefined;

  /**
   * The unique identifier of the deleted evaluator.
   *
   * @public
   */
  evaluatorId: string | undefined;

  /**
   * The status of the evaluator deletion operation.
   *
   * @public
   */
  status: EvaluatorStatus | undefined;
}

/**
 * @public
 */
export interface GetEvaluatorRequest {
  /**
   * The unique identifier of the evaluator to retrieve. Can be a built-in evaluator ID (e.g., Builtin.Helpfulness) or a custom evaluator ID.
   *
   * @public
   */
  evaluatorId: string | undefined;

  /**
   * Controls which data is returned in the response. `ALL_DATA` (default) returns the full evaluator including decrypted instructions and rating scale. For evaluators encrypted with a customer managed KMS key, this requires `kms:Decrypt` permission on the key. `METADATA_ONLY` returns evaluator metadata and model configuration without instructions or rating scale, and does not require any KMS permissions.
   *
   * @public
   */
  includedData?: IncludedData | undefined;
}

/**
 * @public
 */
export interface GetEvaluatorResponse {
  /**
   * The Amazon Resource Name (ARN) of the evaluator.
   *
   * @public
   */
  evaluatorArn: string | undefined;

  /**
   * The unique identifier of the evaluator.
   *
   * @public
   */
  evaluatorId: string | undefined;

  /**
   * The name of the evaluator.
   *
   * @public
   */
  evaluatorName: string | undefined;

  /**
   * The description of the evaluator.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration of the evaluator, including LLM-as-a-Judge or code-based settings.
   *
   * @public
   */
  evaluatorConfig: EvaluatorConfig | undefined;

  /**
   * The kind of evaluator resource. Valid values:
   *
   * - `Builtin` – An Amazon Web Services-managed global evaluator.
   * - `ThirdParty` – An Amazon Web Services-managed global evaluator from a third-party provider.
   * - `Custom` – A customer-created evaluator.
   * - `CustomCode` – A customer-created code-based evaluator.
   * - `CustomDerived` – A customer-created evaluator derived from an existing base evaluator.
   *
   * @public
   */
  evaluatorType?: EvaluatorType | undefined;

  /**
   * The source of the evaluator's logic: Amazon Web Services, a third-party library, or you.
   *
   * @public
   */
  provider?: Provider | undefined;

  /**
   * The evaluation level (`TOOL_CALL`, `TRACE`, or `SESSION`) that determines the scope of evaluation.
   *
   * @public
   */
  level: EvaluatorLevel | undefined;

  /**
   * The current status of the evaluator.
   *
   * @public
   */
  status: EvaluatorStatus | undefined;

  /**
   * The timestamp when the evaluator was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the evaluator was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Whether the evaluator is locked for modification due to being referenced by active online evaluation configurations.
   *
   * @public
   */
  lockedForModification?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer managed KMS key used to encrypt the evaluator's sensitive data. This field is only present for evaluators encrypted with a customer managed key.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListEvaluatorsRequest {
  /**
   * The pagination token from a previous request to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of evaluators to return in a single response.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * The summary information about an evaluator, including basic metadata and status information.
 *
 * @public
 */
export interface EvaluatorSummary {
  /**
   * The Amazon Resource Name (ARN) of the evaluator.
   *
   * @public
   */
  evaluatorArn: string | undefined;

  /**
   * The unique identifier of the evaluator.
   *
   * @public
   */
  evaluatorId: string | undefined;

  /**
   * The name of the evaluator.
   *
   * @public
   */
  evaluatorName: string | undefined;

  /**
   * The description of the evaluator.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of evaluator, indicating whether it is a built-in evaluator provided by the service or a custom evaluator created by the user.
   *
   * @public
   */
  evaluatorType: EvaluatorType | undefined;

  /**
   * The source of the evaluator's logic: Amazon Web Services, a third-party library, or you.
   *
   * @public
   */
  provider?: Provider | undefined;

  /**
   * The evaluation level (`TOOL_CALL`, `TRACE`, or `SESSION`) that determines the scope of evaluation.
   *
   * @public
   */
  level?: EvaluatorLevel | undefined;

  /**
   * The current status of the evaluator.
   *
   * @public
   */
  status: EvaluatorStatus | undefined;

  /**
   * The timestamp when the evaluator was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the evaluator was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Whether the evaluator is locked for modification due to being referenced by active online evaluation configurations.
   *
   * @public
   */
  lockedForModification?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the customer managed KMS key used to encrypt the evaluator's sensitive data. This field is only present for evaluators encrypted with a customer managed key.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface ListEvaluatorsResponse {
  /**
   * The list of evaluator summaries containing basic information about each evaluator.
   *
   * @public
   */
  evaluators: EvaluatorSummary[] | undefined;

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
export interface UpdateEvaluatorRequest {
  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The unique identifier of the evaluator to update.
   *
   * @public
   */
  evaluatorId: string | undefined;

  /**
   * The updated description of the evaluator.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated configuration for the evaluator. Specify either LLM-as-a-Judge settings with instructions, rating scale, and model configuration, or code-based settings with a customer-managed Lambda function.
   *
   * @public
   */
  evaluatorConfig?: EvaluatorConfig | undefined;

  /**
   * The updated evaluation level (`TOOL_CALL`, `TRACE`, or `SESSION`) that determines the scope of evaluation.
   *
   * @public
   */
  level?: EvaluatorLevel | undefined;

  /**
   * The Amazon Resource Name (ARN) of a customer managed KMS key to use for encrypting sensitive evaluator data. Specify a new key ARN to rotate the encryption key, or specify a key ARN to add encryption to an evaluator that was previously created without one. When you rotate to a new key, the service decrypts the existing data with the old key and re-encrypts it with the new key. Only symmetric encryption KMS keys are supported. For more information, see [Encryption at rest for AgentCore Evaluations](https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/evaluations-encryption.html).
   *
   * @public
   */
  kmsKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEvaluatorResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated evaluator.
   *
   * @public
   */
  evaluatorArn: string | undefined;

  /**
   * The unique identifier of the updated evaluator.
   *
   * @public
   */
  evaluatorId: string | undefined;

  /**
   * The timestamp when the evaluator was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The status of the evaluator update operation.
   *
   * @public
   */
  status: EvaluatorStatus | undefined;
}

/**
 * Contains the rate configuration for a rate limit metric, specifying the allowed rate and time period.
 *
 * @public
 */
export interface RateConfig {
  /**
   * The rate value for the limit. For request limits, this is the number of requests allowed per period. For token limits, this is the number of tokens allowed per period. For connection limits, this is the number of concurrent connections allowed.
   *
   * @public
   */
  rate: number | undefined;

  /**
   * The time period for the rate limit. Valid values:
   *
   * - `second`—Measures the rate limit over a one-second window.
   * - `minute`—Measures the rate limit over a one-minute window.
   *
   * @public
   */
  period: Period | undefined;
}

/**
 * A single rule entry within a rate limit that maps dimension values to rate configurations. Each entry defines the rate limits for a specific combination of dimension values.
 *
 * @public
 */
export interface LimitEntry {
  /**
   * A map of dimension names to dimension values for this rule entry. Keys must match the parent rate limit's dimension keys. Values may use `*` as a wildcard, but only in trailing positions based on the dimension keys ordering.
   *
   * @public
   */
  dimensions: Record<string, string> | undefined;

  /**
   * The request rate limit configuration. Specifies the maximum number of requests allowed per time period.
   *
   * @public
   */
  requests?: RateConfig[] | undefined;

  /**
   * The token rate limit configuration. Specifies the maximum number of tokens allowed per time period.
   *
   * @public
   */
  tokens?: RateConfig[] | undefined;

  /**
   * The connection rate limit configuration. Specifies the maximum number of concurrent connections allowed.
   *
   * @public
   */
  connections?: RateConfig[] | undefined;
}

/**
 * A rate limit definition within a batch put request. If you provide a `rateLimitId`, the service uses it for upsert matching against existing rate limits.
 *
 * @public
 */
export interface BatchPutLimitEntry {
  /**
   * The unique identifier of the rate limit. If provided, the service uses it for upsert matching against existing rate limits.
   *
   * @public
   */
  rateLimitId?: string | undefined;

  /**
   * An optional human-readable description for this rate limit. If not provided, the rate limit is created without a description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ordered list of dimension key names that define the scope of this rate limit.
   *
   * @public
   */
  dimensionKeys: string[] | undefined;

  /**
   * The list of rule entries that map dimension values to rate configurations.
   *
   * @public
   */
  entries: LimitEntry[] | undefined;
}

/**
 * @public
 */
export interface BatchPutGatewayRateLimitsRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The complete set of rate limits for this gateway. This operation replaces all existing rate limits in a single request. If the operation fails, no rate limits are changed.
   *
   * @public
   */
  rateLimits: BatchPutLimitEntry[] | undefined;
}

/**
 * Contains detailed information about a gateway rate limit, including its configuration and current status.
 *
 * @public
 */
export interface GatewayRateLimitDetail {
  /**
   * The unique identifier of the rate limit.
   *
   * @public
   */
  rateLimitId: string | undefined;

  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * The human-readable description of the rate limit.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ordered list of dimension key names that define the scope of this rate limit.
   *
   * @public
   */
  dimensionKeys: string[] | undefined;

  /**
   * The list of rule entries that map dimension values to rate configurations.
   *
   * @public
   */
  entries: LimitEntry[] | undefined;

  /**
   * The current status of the rate limit.
   *
   * @public
   */
  status: GatewayRateLimitStatus | undefined;

  /**
   * The timestamp when the rate limit was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the rate limit was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface BatchPutGatewayRateLimitsResponse {
  /**
   * The resulting set of rate limits after the batch operation.
   *
   * @public
   */
  rateLimits: GatewayRateLimitDetail[] | undefined;
}

/**
 * @public
 */
export interface CreateGatewayRateLimitRequest {
  /**
   * The unique identifier of the gateway to create the rate limit for.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * An optional customer-defined identifier for the rate limit. If not provided, the system generates one.
   *
   * @public
   */
  rateLimitId?: string | undefined;

  /**
   * An optional human-readable description for this rate limit. If not provided, the rate limit is created without a description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ordered list of dimension key names that define the scope of this rate limit. Must be unique per gateway—no two rate limits can share the same dimension keys.
   *
   * @public
   */
  dimensionKeys: string[] | undefined;

  /**
   * The rule entries that map dimension values to rate configurations.
   *
   * @public
   */
  entries: LimitEntry[] | undefined;
}

/**
 * Shared fields for `GatewayRateLimit` responses.
 *
 * @public
 */
export interface CreateGatewayRateLimitResponse {
  /**
   * The unique identifier of the created rate limit.
   *
   * @public
   */
  rateLimitId: string | undefined;

  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * The human-readable description of the rate limit.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ordered list of dimension key names that define the scope of this rate limit.
   *
   * @public
   */
  dimensionKeys: string[] | undefined;

  /**
   * The list of rule entries that map dimension values to rate configurations.
   *
   * @public
   */
  entries: LimitEntry[] | undefined;

  /**
   * The current status of the rate limit.
   *
   * @public
   */
  status: GatewayRateLimitStatus | undefined;

  /**
   * The timestamp when the rate limit was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the rate limit was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayRateLimitRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * The unique identifier of the rate limit to delete.
   *
   * @public
   */
  rateLimitId: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayRateLimitResponse {
  /**
   * The unique identifier of the deleted rate limit.
   *
   * @public
   */
  rateLimitId: string | undefined;

  /**
   * The current status of the rate limit deletion.
   *
   * @public
   */
  status: GatewayRateLimitStatus | undefined;
}

/**
 * @public
 */
export interface GetGatewayRateLimitRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * The unique identifier of the rate limit to retrieve.
   *
   * @public
   */
  rateLimitId: string | undefined;
}

/**
 * Shared fields for `GatewayRateLimit` responses.
 *
 * @public
 */
export interface GetGatewayRateLimitResponse {
  /**
   * The unique identifier of the rate limit.
   *
   * @public
   */
  rateLimitId: string | undefined;

  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * The human-readable description of the rate limit.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ordered list of dimension key names that define the scope of this rate limit.
   *
   * @public
   */
  dimensionKeys: string[] | undefined;

  /**
   * The list of rule entries that map dimension values to rate configurations.
   *
   * @public
   */
  entries: LimitEntry[] | undefined;

  /**
   * The current status of the rate limit.
   *
   * @public
   */
  status: GatewayRateLimitStatus | undefined;

  /**
   * The timestamp when the rate limit was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the rate limit was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListGatewayRateLimitsRequest {
  /**
   * The unique identifier of the gateway.
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
   * The token to use to retrieve the next page of results. Use the value returned in a previous `ListGatewayRateLimits` response.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGatewayRateLimitsResponse {
  /**
   * The list of rate limits for the gateway.
   *
   * @public
   */
  rateLimits: GatewayRateLimitDetail[] | undefined;

  /**
   * The token for the next page of results. If this value is absent, there are no more results to retrieve.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayRateLimitRequest {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * The unique identifier of the rate limit to update.
   *
   * @public
   */
  rateLimitId: string | undefined;

  /**
   * The updated human-readable description for this rate limit.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated rule entries. The dimension keys are immutable after creation and cannot be changed.
   *
   * @public
   */
  entries: LimitEntry[] | undefined;
}

/**
 * Shared fields for `GatewayRateLimit` responses.
 *
 * @public
 */
export interface UpdateGatewayRateLimitResponse {
  /**
   * The unique identifier of the rate limit.
   *
   * @public
   */
  rateLimitId: string | undefined;

  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * The human-readable description of the rate limit.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ordered list of dimension key names that define the scope of this rate limit.
   *
   * @public
   */
  dimensionKeys: string[] | undefined;

  /**
   * The list of rule entries that map dimension values to rate configurations.
   *
   * @public
   */
  entries: LimitEntry[] | undefined;

  /**
   * The current status of the rate limit.
   *
   * @public
   */
  status: GatewayRateLimitStatus | undefined;

  /**
   * The timestamp when the rate limit was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the rate limit was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * A selector that identifies a payload field to exclude from the interceptor input.
 *
 * @public
 */
export type InterceptorPayloadExclusionSelector =
  | InterceptorPayloadExclusionSelector.FieldMember
  | InterceptorPayloadExclusionSelector.$UnknownMember;

/**
 * @public
 */
export namespace InterceptorPayloadExclusionSelector {
  /**
   * The field to exclude from the interceptor input.
   *
   * @public
   */
  export interface FieldMember {
    field: InterceptorPayloadExclusion;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    field?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    field: (value: InterceptorPayloadExclusion) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The filter that controls which fields of the request or response payload are included in the input to the interceptor.
 *
 * @public
 */
export interface InterceptorPayloadFilter {
  /**
   * The list of selectors that identify payload fields to exclude from the interceptor input.
   *
   * @public
   */
  exclude: InterceptorPayloadExclusionSelector[] | undefined;
}

/**
 * The input configuration of the interceptor.
 *
 * @public
 */
export interface InterceptorInputConfiguration {
  /**
   * Indicates whether to pass request headers as input into the interceptor. When set to true, request headers will be passed.
   *
   * @public
   */
  passRequestHeaders: boolean | undefined;

  /**
   * The filter that determines which parts of the request or response payload are passed as input to the interceptor.
   *
   * @public
   */
  payloadFilter?: InterceptorPayloadFilter | undefined;
}

/**
 * The lambda configuration for the interceptor
 *
 * @public
 */
export interface LambdaInterceptorConfiguration {
  /**
   * The arn of the lambda function to be invoked for the interceptor.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * The interceptor configuration.
 *
 * @public
 */
export type InterceptorConfiguration =
  | InterceptorConfiguration.LambdaMember
  | InterceptorConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace InterceptorConfiguration {
  /**
   * The details of the lambda function used for the interceptor.
   *
   * @public
   */
  export interface LambdaMember {
    lambda: LambdaInterceptorConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    lambda?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    lambda: (value: LambdaInterceptorConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The configuration for an interceptor on a gateway. This structure defines settings for an interceptor that will be invoked during the invocation of the gateway.
 *
 * @public
 */
export interface GatewayInterceptorConfiguration {
  /**
   * The infrastructure settings of an interceptor configuration. This structure defines how the interceptor can be invoked.
   *
   * @public
   */
  interceptor: InterceptorConfiguration | undefined;

  /**
   * The supported points of interception. This field specifies which points during the gateway invocation to invoke the interceptor
   *
   * @public
   */
  interceptionPoints: GatewayInterceptionPoint[] | undefined;

  /**
   * The configuration for the input of the interceptor. This field specifies how the input to the interceptor is constructed
   *
   * @public
   */
  inputConfiguration?: InterceptorInputConfiguration | undefined;
}

/**
 * The configuration for a policy engine associated with a gateway. A policy engine is a collection of policies that evaluates and authorizes agent tool calls. When associated with a gateway, the policy engine intercepts all agent requests and determines whether to allow or deny each action based on the defined policies.
 *
 * @public
 */
export interface GatewayPolicyEngineConfiguration {
  /**
   * The ARN of the policy engine. The policy engine contains Cedar or Dogwood policies that define fine-grained authorization rules specifying who can perform what actions on which resources as agents interact through the gateway.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The enforcement mode for the policy engine. Valid values include:
   *
   * - `LOG_ONLY` - The policy engine evaluates each action against your policies and adds traces on whether tool calls would be allowed or denied, but does not enforce the decision. Use this mode to test and validate policies before enabling enforcement.
   * - `ENFORCE` - The policy engine evaluates actions against your policies and enforces decisions by allowing or denying agent operations. Test and validate policies in `LOG_ONLY` mode before enabling enforcement to avoid unintended denials or adversely affecting production traffic.
   *
   * @public
   */
  mode: GatewayPolicyEngineMode | undefined;
}

/**
 * The session configuration for an MCP gateway. This structure defines settings that control session behavior.
 *
 * @public
 */
export interface SessionConfiguration {
  /**
   * The session timeout in seconds. After this timeout, the session expires and subsequent requests to this session will receive an error. The minimum value is 900 seconds (15 minutes), the maximum value is 28800 seconds (8 hours), and the default value is 3600 seconds (1 hour).
   *
   * @public
   */
  sessionTimeoutInSeconds?: number | undefined;
}

/**
 * The streaming configuration for an MCP gateway. This structure defines settings that control response streaming behavior.
 *
 * @public
 */
export interface StreamingConfiguration {
  /**
   * Indicates whether response streaming is enabled for the gateway. When set to `true`, the gateway streams responses from targets back to the client.
   *
   * @public
   */
  enableResponseStreaming?: boolean | undefined;
}

/**
 * The configuration for a Model Context Protocol (MCP) gateway. This structure defines how the gateway implements the MCP protocol.
 *
 * @public
 */
export interface MCPGatewayConfiguration {
  /**
   * The supported versions of the Model Context Protocol. This field specifies which versions of the protocol the gateway can use.
   *
   * @public
   */
  supportedVersions?: string[] | undefined;

  /**
   * The instructions for using the Model Context Protocol gateway. These instructions provide guidance on how to interact with the gateway.
   *
   * @public
   */
  instructions?: string | undefined;

  /**
   * The search type for the Model Context Protocol gateway. This field specifies how the gateway handles search operations.
   *
   * @public
   */
  searchType?: SearchType | undefined;

  /**
   * The session configuration for the MCP gateway. This configuration controls session behavior, including session timeout settings.
   *
   * @public
   */
  sessionConfiguration?: SessionConfiguration | undefined;

  /**
   * The streaming configuration for the MCP gateway. This configuration controls whether response streaming is enabled for the gateway.
   *
   * @public
   */
  streamingConfiguration?: StreamingConfiguration | undefined;

  /**
   * Specifies whether the gateway disables pagination for the Model Context Protocol (MCP) `tools/list` operation. When set to `true`, the gateway returns the complete list of tools in a single response without a pagination cursor. When set to `false` or omitted, the gateway returns tools in paginated responses. For information about changing this value on an existing gateway, see [UpdateGateway](https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_UpdateGateway.html).
   *
   * @public
   */
  disableMcpListToolsPagination?: boolean | undefined;
}

/**
 * The configuration for a gateway protocol. This structure defines how the gateway communicates with external services.
 *
 * @public
 */
export type GatewayProtocolConfiguration =
  | GatewayProtocolConfiguration.McpMember
  | GatewayProtocolConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace GatewayProtocolConfiguration {
  /**
   * The configuration for the Model Context Protocol (MCP). This protocol enables communication between Amazon Bedrock Agent and external tools.
   *
   * @public
   */
  export interface McpMember {
    mcp: MCPGatewayConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    mcp?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    mcp: (value: MCPGatewayConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateGatewayRequest {
  /**
   * The name of the gateway. The name must be unique within your account.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the gateway.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role that provides permissions for the gateway to access Amazon Web Services services.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The protocol type for the gateway.
   *
   * @public
   */
  protocolType?: GatewayProtocolType | undefined;

  /**
   * The configuration settings for the protocol specified in the `protocolType` parameter.
   *
   * @public
   */
  protocolConfiguration?: GatewayProtocolConfiguration | undefined;

  /**
   * The type of authorizer to use for the gateway.
   *
   * - `CUSTOM_JWT` - Authorize with a bearer token.
   * - `AWS_IAM` - Authorize with your Amazon Web Services IAM credentials.
   * - `NONE` - No authorization
   *
   * @public
   */
  authorizerType: AuthorizerType | undefined;

  /**
   * The authorizer configuration for the gateway. Required if `authorizerType` is `CUSTOM_JWT`.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt data associated with the gateway.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * A list of configuration settings for a gateway interceptor. Gateway interceptors allow custom code to be invoked during gateway invocations.
   *
   * @public
   */
  interceptorConfigurations?: GatewayInterceptorConfiguration[] | undefined;

  /**
   * The policy engine configuration for the gateway. A policy engine is a collection of policies that evaluates and authorizes agent tool calls. When associated with a gateway, the policy engine intercepts all agent requests and determines whether to allow or deny each action based on the defined policies.
   *
   * @public
   */
  policyEngineConfiguration?: GatewayPolicyEngineConfiguration | undefined;

  /**
   * The level of detail in error messages returned when invoking the gateway.
   *
   * - If the value is `DEBUG`, granular exception messages are returned to help a user debug the gateway.
   * - If the value is omitted, a generic error message is returned to the end user.
   *
   * @public
   */
  exceptionLevel?: ExceptionLevel | undefined;

  /**
   * A map of key-value pairs to associate with the gateway as metadata tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The Lambda configuration for custom transformations. This structure defines the Lambda function that the gateway invokes to transform data.
 *
 * @public
 */
export interface LambdaTransformConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Lambda function. This function is invoked by the gateway to transform data.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * The configuration for custom transformations applied to requests and responses through the gateway. This structure defines how the gateway transforms data.
 *
 * @public
 */
export interface CustomTransformConfiguration {
  /**
   * The Lambda configuration for custom transformations. This configuration defines how the gateway uses a Lambda function to transform data.
   *
   * @public
   */
  lambda?: LambdaTransformConfiguration | undefined;
}

/**
 * The Amazon Web Services WAF configuration for the gateway. This configuration controls how the gateway behaves when the associated web ACL cannot be evaluated.
 *
 * @public
 */
export interface WafConfiguration {
  /**
   * The failure mode that determines how the gateway handles requests when Amazon Web Services WAF is unreachable or times out. Valid values include:
   *
   * - `FAIL_CLOSE` - The gateway blocks requests when Amazon Web Services WAF cannot be evaluated.
   * - `FAIL_OPEN` - The gateway allows requests when Amazon Web Services WAF cannot be evaluated.
   *
   * @public
   */
  failureMode?: WafFailureMode | undefined;
}

/**
 * @public
 */
export interface CreateGatewayResponse {
  /**
   * The Amazon Resource Name (ARN) of the created gateway.
   *
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * The unique identifier of the created gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The URL endpoint for the created gateway.
   *
   * @public
   */
  gatewayUrl?: string | undefined;

  /**
   * The timestamp when the gateway was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the gateway was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of the gateway.
   *
   * @public
   */
  status: GatewayStatus | undefined;

  /**
   * The reasons for the current status of the gateway.
   *
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * The name of the gateway.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the gateway.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the gateway.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The protocol type of the gateway.
   *
   * @public
   */
  protocolType?: GatewayProtocolType | undefined;

  /**
   * The configuration settings for the protocol used by the gateway.
   *
   * @public
   */
  protocolConfiguration?: GatewayProtocolConfiguration | undefined;

  /**
   * The type of authorizer used by the gateway.
   *
   * @public
   */
  authorizerType: AuthorizerType | undefined;

  /**
   * The authorizer configuration for the created gateway.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt data associated with the gateway.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The custom transformation configuration for the gateway. This configuration defines how the gateway transforms requests and responses.
   *
   * @public
   */
  customTransformConfiguration?: CustomTransformConfiguration | undefined;

  /**
   * The list of interceptor configurations for the created gateway.
   *
   * @public
   */
  interceptorConfigurations?: GatewayInterceptorConfiguration[] | undefined;

  /**
   * The policy engine configuration for the created gateway.
   *
   * @public
   */
  policyEngineConfiguration?: GatewayPolicyEngineConfiguration | undefined;

  /**
   * The workload identity details for the created gateway.
   *
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * The level of detail in error messages returned when invoking the gateway.
   *
   * - If the value is `DEBUG`, granular exception messages are returned to help a user debug the gateway.
   * - If the value is omitted, a generic error message is returned to the end user.
   *
   * @public
   */
  exceptionLevel?: ExceptionLevel | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services WAF web ACL associated with the gateway.
   *
   * @public
   */
  webAclArn?: string | undefined;

  /**
   * The Amazon Web Services WAF configuration for the gateway.
   *
   * @public
   */
  wafConfiguration?: WafConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayRequest {
  /**
   * The identifier of the gateway to delete.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayResponse {
  /**
   * The unique identifier of the deleted gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The current status of the gateway deletion.
   *
   * @public
   */
  status: GatewayStatus | undefined;

  /**
   * The reasons for the current status of the gateway deletion.
   *
   * @public
   */
  statusReasons?: string[] | undefined;
}

/**
 * @public
 */
export interface GetGatewayRequest {
  /**
   * The identifier of the gateway to retrieve.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetGatewayResponse {
  /**
   * The Amazon Resource Name (ARN) of the gateway.
   *
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * An endpoint for invoking gateway.
   *
   * @public
   */
  gatewayUrl?: string | undefined;

  /**
   * The timestamp when the gateway was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the gateway was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of the gateway.
   *
   * @public
   */
  status: GatewayStatus | undefined;

  /**
   * The reasons for the current status of the gateway.
   *
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * The name of the gateway.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the gateway.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The IAM role ARN that provides permissions for the gateway.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Protocol applied to a gateway.
   *
   * @public
   */
  protocolType?: GatewayProtocolType | undefined;

  /**
   * The configuration for a gateway protocol. This structure defines how the gateway communicates with external services.
   *
   * @public
   */
  protocolConfiguration?: GatewayProtocolConfiguration | undefined;

  /**
   * Authorizer type for the gateway.
   *
   * @public
   */
  authorizerType: AuthorizerType | undefined;

  /**
   * The authorizer configuration for the gateway.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the gateway.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The custom transformation configuration for the gateway. This configuration defines how the gateway transforms requests and responses.
   *
   * @public
   */
  customTransformConfiguration?: CustomTransformConfiguration | undefined;

  /**
   * The interceptors configured on the gateway.
   *
   * @public
   */
  interceptorConfigurations?: GatewayInterceptorConfiguration[] | undefined;

  /**
   * The policy engine configuration for the gateway.
   *
   * @public
   */
  policyEngineConfiguration?: GatewayPolicyEngineConfiguration | undefined;

  /**
   * The workload identity details for the gateway.
   *
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * The level of detail in error messages returned when invoking the gateway.
   *
   * - If the value is `DEBUG`, granular exception messages are returned to help a user debug the gateway.
   * - If the value is omitted, a generic error message is returned to the end user.
   *
   * @public
   */
  exceptionLevel?: ExceptionLevel | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services WAF web ACL associated with the gateway.
   *
   * @public
   */
  webAclArn?: string | undefined;

  /**
   * The Amazon Web Services WAF configuration for the gateway.
   *
   * @public
   */
  wafConfiguration?: WafConfiguration | undefined;
}

/**
 * @public
 */
export interface ListGatewaysRequest {
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
 * Contains summary information about a gateway.
 *
 * @public
 */
export interface GatewaySummary {
  /**
   * The unique identifier of the gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The name of the gateway.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The current status of the gateway.
   *
   * @public
   */
  status: GatewayStatus | undefined;

  /**
   * The description of the gateway.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The timestamp when the gateway was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the gateway was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The type of authorizer used by the gateway.
   *
   * @public
   */
  authorizerType: AuthorizerType | undefined;

  /**
   * The protocol type used by the gateway.
   *
   * @public
   */
  protocolType?: GatewayProtocolType | undefined;
}

/**
 * @public
 */
export interface ListGatewaysResponse {
  /**
   * The list of gateway summaries.
   *
   * @public
   */
  items: GatewaySummary[] | undefined;

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
export interface UpdateGatewayRequest {
  /**
   * The identifier of the gateway to update.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * The name of the gateway. This name must be the same as the one when the gateway was created.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The updated description for the gateway.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated IAM role ARN that provides permissions for the gateway.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The updated protocol type for the gateway.
   *
   * @public
   */
  protocolType?: GatewayProtocolType | undefined;

  /**
   * The configuration for a gateway protocol. This structure defines how the gateway communicates with external services.
   *
   * @public
   */
  protocolConfiguration?: GatewayProtocolConfiguration | undefined;

  /**
   * The updated authorizer type for the gateway.
   *
   * @public
   */
  authorizerType: AuthorizerType | undefined;

  /**
   * The updated authorizer configuration for the gateway.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * The updated ARN of the KMS key used to encrypt the gateway.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The updated custom transformation configuration for the gateway. This configuration defines how the gateway transforms requests and responses.
   *
   * @public
   */
  customTransformConfiguration?: CustomTransformConfiguration | undefined;

  /**
   * The updated interceptor configurations for the gateway.
   *
   * @public
   */
  interceptorConfigurations?: GatewayInterceptorConfiguration[] | undefined;

  /**
   * The updated policy engine configuration for the gateway. A policy engine is a collection of policies that evaluates and authorizes agent tool calls. When associated with a gateway, the policy engine intercepts all agent requests and determines whether to allow or deny each action based on the defined policies.
   *
   * @public
   */
  policyEngineConfiguration?: GatewayPolicyEngineConfiguration | undefined;

  /**
   * The level of detail in error messages returned when invoking the gateway.
   *
   * - If the value is `DEBUG`, granular exception messages are returned to help a user debug the gateway.
   * - If the value is omitted, a generic error message is returned to the end user.
   *
   * @public
   */
  exceptionLevel?: ExceptionLevel | undefined;

  /**
   * The updated Amazon Web Services WAF configuration for the gateway.
   *
   * @public
   */
  wafConfiguration?: WafConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayResponse {
  /**
   * The Amazon Resource Name (ARN) of the updated gateway.
   *
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * The unique identifier of the updated gateway.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * An endpoint for invoking the updated gateway.
   *
   * @public
   */
  gatewayUrl?: string | undefined;

  /**
   * The timestamp when the gateway was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The timestamp when the gateway was last updated.
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * The current status of the updated gateway.
   *
   * @public
   */
  status: GatewayStatus | undefined;

  /**
   * The reasons for the current status of the updated gateway.
   *
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * The name of the gateway.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The updated description of the gateway.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The updated IAM role ARN that provides permissions for the gateway.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The updated protocol type for the gateway.
   *
   * @public
   */
  protocolType?: GatewayProtocolType | undefined;

  /**
   * The configuration for a gateway protocol. This structure defines how the gateway communicates with external services.
   *
   * @public
   */
  protocolConfiguration?: GatewayProtocolConfiguration | undefined;

  /**
   * The updated authorizer type for the gateway.
   *
   * @public
   */
  authorizerType: AuthorizerType | undefined;

  /**
   * The updated authorizer configuration for the gateway.
   *
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * The updated ARN of the KMS key used to encrypt the gateway.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The custom transformation configuration for the gateway. This configuration defines how the gateway transforms requests and responses.
   *
   * @public
   */
  customTransformConfiguration?: CustomTransformConfiguration | undefined;

  /**
   * The updated interceptor configurations for the gateway.
   *
   * @public
   */
  interceptorConfigurations?: GatewayInterceptorConfiguration[] | undefined;

  /**
   * The updated policy engine configuration for the gateway.
   *
   * @public
   */
  policyEngineConfiguration?: GatewayPolicyEngineConfiguration | undefined;

  /**
   * The workload identity details for the updated gateway.
   *
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * The level of detail in error messages returned when invoking the gateway.
   *
   * - If the value is `DEBUG`, granular exception messages are returned to help a user debug the gateway.
   * - If the value is omitted, a generic error message is returned to the end user.
   *
   * @public
   */
  exceptionLevel?: ExceptionLevel | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Web Services WAF web ACL associated with the gateway.
   *
   * @public
   */
  webAclArn?: string | undefined;

  /**
   * The Amazon Web Services WAF configuration for the gateway.
   *
   * @public
   */
  wafConfiguration?: WafConfiguration | undefined;
}

/**
 * A model ID or pattern to match against the requested model, and the operator to use for the comparison.
 *
 * @public
 */
export interface MatchModelEntry {
  /**
   * The model ID or pattern to match. With the `StringLike` operator, you can use `*` and `?` as wildcards, for example `anthropic.claude-*`.
   *
   * @public
   */
  value: string | undefined;

  /**
   * The operator to use when comparing the requested model to the value:
   *
   * - `StringEquals` – Requires an exact match.
   * - `StringLike` – Supports wildcard patterns using `*` and `?`. This is the default.
   *
   * @public
   */
  operator?: MatchOperator | undefined;
}

/**
 * A condition that matches inference requests based on the requested model.
 *
 * @public
 */
export interface MatchModels {
  /**
   * A list of model entries. The condition is met if the requested model matches any of the entries.
   *
   * @public
   */
  anyOf: MatchModelEntry[] | undefined;
}

/**
 * A condition that matches requests based on the request path.
 *
 * @public
 */
export interface MatchPaths {
  /**
   * A list of path patterns. The condition is met if the request path matches any of the patterns.
   *
   * @public
   */
  anyOf: string[] | undefined;
}

/**
 * An IAM principal specification for rule matching.
 *
 * @public
 */
export interface IamPrincipal {
  /**
   * The Amazon Resource Name (ARN) of the IAM principal. Supports user, role, and assumed-role ARNs. Wildcards can be used with the `StringLike` operator.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The match operator. `StringEquals` requires an exact match. `StringLike` supports wildcard patterns using `*` and `?`.
   *
   * @public
   */
  operator?: PrincipalMatchOperator | undefined;
}

/**
 * Union for principal matching. Currently supports IAM principal ARN glob matching.
 *
 * @public
 */
export type MatchPrincipalEntry =
  | MatchPrincipalEntry.IamPrincipalMember
  | MatchPrincipalEntry.$UnknownMember;

/**
 * @public
 */
export namespace MatchPrincipalEntry {
  /**
   * An IAM principal to match against, specified by ARN.
   *
   * @public
   */
  export interface IamPrincipalMember {
    iamPrincipal: IamPrincipal;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    iamPrincipal?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    iamPrincipal: (value: IamPrincipal) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * A condition that matches requests based on the caller's identity.
 *
 * @public
 */
export interface MatchPrincipals {
  /**
   * A list of principal entries. The condition is met if any of the entries match the caller's identity.
   *
   * @public
   */
  anyOf: MatchPrincipalEntry[] | undefined;
}

/**
 * A condition that determines when a gateway rule applies. Conditions can match on principals, request paths, or the requested model.
 *
 * @public
 */
export type Condition =
  | Condition.MatchModelsMember
  | Condition.MatchPathsMember
  | Condition.MatchPrincipalsMember
  | Condition.$UnknownMember;

/**
 * @public
 */
export namespace Condition {
  /**
   * A condition that matches on the identity of the caller making the request.
   *
   * @public
   */
  export interface MatchPrincipalsMember {
    matchPrincipals: MatchPrincipals;
    matchPaths?: never;
    matchModels?: never;
    $unknown?: never;
  }

  /**
   * A condition that matches on the request path.
   *
   * @public
   */
  export interface MatchPathsMember {
    matchPrincipals?: never;
    matchPaths: MatchPaths;
    matchModels?: never;
    $unknown?: never;
  }

  /**
   * A condition that matches on the model requested in an inference request.
   *
   * @public
   */
  export interface MatchModelsMember {
    matchPrincipals?: never;
    matchPaths?: never;
    matchModels: MatchModels;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    matchPrincipals?: never;
    matchPaths?: never;
    matchModels?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    matchPrincipals: (value: MatchPrincipals) => T;
    matchPaths: (value: MatchPaths) => T;
    matchModels: (value: MatchModels) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateGatewayRuleRequest {
  /**
   * The identifier of the gateway to create a rule for.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see [Ensuring idempotency](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The priority of the rule. Rules are evaluated in order of priority, with lower numbers evaluated first. Must be between 1 and 1,000,000.
   *
   * @public
   */
  priority: number | undefined;

  /**
   * The conditions that must be met for the rule to apply. Conditions can match on principals (IAM ARNs) or request paths.
   *
   * @public
   */
  conditions?: Condition[] | undefined;

  /**
   * The actions to take when the rule conditions are met. Actions can route to a specific target or apply a configuration bundle override.
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
}

/**
 * System-managed metadata for rules created by automated processes such as A/B tests.
 *
 * @public
 */
export interface SystemManagedBlock {
  /**
   * The identifier of the system or process that manages this rule.
   *
   * @public
   */
  managedBy: string | undefined;
}

/**
 * @public
 */
export interface CreateGatewayRuleResponse {
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
}

/**
 * @public
 */
export interface DeleteGatewayRuleRequest {
  /**
   * The identifier of the gateway containing the rule.
   *
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * The unique identifier of the rule to delete.
   *
   * @public
   */
  ruleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayRuleResponse {
  /**
   * The unique identifier of the deleted rule.
   *
   * @public
   */
  ruleId: string | undefined;

  /**
   * The status of the rule deletion operation.
   *
   * @public
   */
  status: GatewayRuleStatus | undefined;
}

/**
 * @public
 */
export interface Unit {}
