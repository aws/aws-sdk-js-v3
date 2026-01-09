// smithy-typescript generated code
import { DocumentType as __DocumentType } from "@smithy/types";

import {
  AgentManagedRuntimeType,
  AgentRuntimeEndpointStatus,
  AgentRuntimeStatus,
  ApiKeyCredentialLocation,
  AuthorizerType,
  BrowserNetworkMode,
  BrowserStatus,
  ClaimMatchOperatorType,
  CodeInterpreterNetworkMode,
  CodeInterpreterStatus,
  CredentialProviderType,
  CredentialProviderVendorType,
  EvaluatorLevel,
  EvaluatorStatus,
  EvaluatorType,
  ExceptionLevel,
  FilterOperator,
  FindingType,
  GatewayInterceptionPoint,
  GatewayPolicyEngineMode,
  GatewayProtocolType,
  GatewayStatus,
  InboundTokenClaimValueType,
  KeyType,
  MemoryStatus,
  MemoryStrategyStatus,
  MemoryStrategyType,
  MemoryView,
  NetworkMode,
  OAuthGrantType,
  OnlineEvaluationConfigStatus,
  OnlineEvaluationExecutionStatus,
  OverrideType,
  PolicyEngineStatus,
  PolicyGenerationStatus,
  PolicyStatus,
  PolicyValidationMode,
  ResourceType,
  RestApiMethod,
  SearchType,
  ServerProtocol,
  TargetStatus,
} from "./enums";

/**
 * @public
 */
export interface CreateAgentRuntimeEndpointRequest {
  /**
   * <p>The unique identifier of the AgentCore Runtime to create an endpoint for.</p>
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * <p>The name of the AgentCore Runtime endpoint.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version of the AgentCore Runtime to use for the endpoint.</p>
   * @public
   */
  agentRuntimeVersion?: string | undefined;

  /**
   * <p>The description of the AgentCore Runtime endpoint.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A map of tag keys and values to assign to the agent runtime endpoint. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAgentRuntimeEndpointResponse {
  /**
   * <p>The target version of the AgentCore Runtime for the endpoint.</p>
   * @public
   */
  targetVersion: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AgentCore Runtime endpoint.</p>
   * @public
   */
  agentRuntimeEndpointArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * <p>The unique identifier of the AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeId?: string | undefined;

  /**
   * <p>The name of the AgentCore Runtime endpoint.</p>
   * @public
   */
  endpointName?: string | undefined;

  /**
   * <p>The current status of the AgentCore Runtime endpoint.</p>
   * @public
   */
  status: AgentRuntimeEndpointStatus | undefined;

  /**
   * <p>The timestamp when the AgentCore Runtime endpoint was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * <p>Stores information about a field passed inside a request that resulted in an exception.</p>
 * @public
 */
export interface ValidationExceptionField {
  /**
   * <p>The name of the field.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A message describing why this field failed validation.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentRuntimeEndpointRequest {
  /**
   * <p>The unique identifier of the AgentCore Runtime associated with the endpoint.</p>
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * <p>The name of the AgentCore Runtime endpoint to delete.</p>
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
export interface DeleteAgentRuntimeEndpointResponse {
  /**
   * <p>The current status of the AgentCore Runtime endpoint deletion.</p>
   * @public
   */
  status: AgentRuntimeEndpointStatus | undefined;

  /**
   * <p>The unique identifier of the AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeId?: string | undefined;

  /**
   * <p>The name of the AgentCore Runtime endpoint.</p>
   * @public
   */
  endpointName?: string | undefined;
}

/**
 * @public
 */
export interface GetAgentRuntimeEndpointRequest {
  /**
   * <p>The unique identifier of the AgentCore Runtime associated with the endpoint.</p>
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * <p>The name of the AgentCore Runtime endpoint to retrieve.</p>
   * @public
   */
  endpointName: string | undefined;
}

/**
 * @public
 */
export interface GetAgentRuntimeEndpointResponse {
  /**
   * <p>The currently deployed version of the AgentCore Runtime on the endpoint.</p>
   * @public
   */
  liveVersion?: string | undefined;

  /**
   * <p>The target version of the AgentCore Runtime for the endpoint.</p>
   * @public
   */
  targetVersion?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AgentCore Runtime endpoint.</p>
   * @public
   */
  agentRuntimeEndpointArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * <p>The description of the AgentCore Runtime endpoint.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The current status of the AgentCore Runtime endpoint.</p>
   * @public
   */
  status: AgentRuntimeEndpointStatus | undefined;

  /**
   * <p>The timestamp when the AgentCore Runtime endpoint was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the AgentCore Runtime endpoint was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The reason for failure if the AgentCore Runtime endpoint is in a failed state.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The name of the AgentCore Runtime endpoint.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The unique identifier of the AgentCore Runtime endpoint.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListAgentRuntimeEndpointsRequest {
  /**
   * <p>The unique identifier of the AgentCore Runtime to list endpoints for.</p>
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains information about an agent runtime endpoint. An endpoint provides a way to connect to and interact with an agent runtime.</p>
 * @public
 */
export interface AgentRuntimeEndpoint {
  /**
   * <p>The name of the agent runtime endpoint.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The live version of the agent runtime endpoint. This is the version that is currently serving requests.</p>
   * @public
   */
  liveVersion?: string | undefined;

  /**
   * <p>The target version of the agent runtime endpoint. This is the version that the endpoint is being updated to.</p>
   * @public
   */
  targetVersion?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the agent runtime endpoint.</p>
   * @public
   */
  agentRuntimeEndpointArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the agent runtime associated with the endpoint.</p>
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * <p>The current status of the agent runtime endpoint.</p>
   * @public
   */
  status: AgentRuntimeEndpointStatus | undefined;

  /**
   * <p>The unique identifier of the agent runtime endpoint.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The description of the agent runtime endpoint.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp when the agent runtime endpoint was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the agent runtime endpoint was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListAgentRuntimeEndpointsResponse {
  /**
   * <p>The list of AgentCore Runtime endpoints.</p>
   * @public
   */
  runtimeEndpoints: AgentRuntimeEndpoint[] | undefined;

  /**
   * <p>A token to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentRuntimeEndpointRequest {
  /**
   * <p>The unique identifier of the AgentCore Runtime associated with the endpoint.</p>
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * <p>The name of the AgentCore Runtime endpoint to update.</p>
   * @public
   */
  endpointName: string | undefined;

  /**
   * <p>The updated version of the AgentCore Runtime for the endpoint.</p>
   * @public
   */
  agentRuntimeVersion?: string | undefined;

  /**
   * <p>The updated description of the AgentCore Runtime endpoint.</p>
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
export interface UpdateAgentRuntimeEndpointResponse {
  /**
   * <p>The currently deployed version of the AgentCore Runtime on the endpoint.</p>
   * @public
   */
  liveVersion?: string | undefined;

  /**
   * <p>The target version of the AgentCore Runtime for the endpoint.</p>
   * @public
   */
  targetVersion?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AgentCore Runtime endpoint.</p>
   * @public
   */
  agentRuntimeEndpointArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * <p>The current status of the updated AgentCore Runtime endpoint.</p>
   * @public
   */
  status: AgentRuntimeEndpointStatus | undefined;

  /**
   * <p>The timestamp when the AgentCore Runtime endpoint was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the AgentCore Runtime endpoint was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * <p>The Amazon S3 location for storing data. This structure defines where in Amazon S3 data is stored.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>The name of the Amazon S3 bucket. This bucket contains the stored data.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>The prefix for objects in the Amazon S3 bucket. This prefix is added to the object keys to organize the data.</p>
   * @public
   */
  prefix: string | undefined;

  /**
   * <p>The version ID of the Amazon Amazon S3 object. If not specified, the latest version of the object is used.</p>
   * @public
   */
  versionId?: string | undefined;
}

/**
 * <p>The source code configuration that specifies the location and details of the code to be executed.</p>
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
   * <p>The Amazon Amazon S3 object that contains the source code for the agent runtime.</p>
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
 * <p>The configuration for the source code that defines how the agent runtime code should be executed, including the code location, runtime environment, and entry point.</p>
 * @public
 */
export interface CodeConfiguration {
  /**
   * <p>The source code location and configuration details.</p>
   * @public
   */
  code: Code | undefined;

  /**
   * <p>The runtime environment for executing the code (for example, Python 3.9 or Node.js 18).</p>
   * @public
   */
  runtime: AgentManagedRuntimeType | undefined;

  /**
   * <p>The entry point for the code execution, specifying the function or method that should be invoked when the code runs.</p>
   * @public
   */
  entryPoint: string[] | undefined;
}

/**
 * <p>Representation of a container configuration.</p>
 * @public
 */
export interface ContainerConfiguration {
  /**
   * <p>The ECR URI of the container.</p>
   * @public
   */
  containerUri: string | undefined;
}

/**
 * <p>The artifact of the agent.</p>
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
   * <p>The container configuration for the agent artifact.</p>
   * @public
   */
  export interface ContainerConfigurationMember {
    containerConfiguration: ContainerConfiguration;
    codeConfiguration?: never;
    $unknown?: never;
  }

  /**
   * <p>The code configuration for the agent runtime artifact, including the source code location and execution settings.</p>
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
 * <p>The value or values to match for.</p> <ul> <li> <p>Include a <code>matchValueString</code> with the <code>EQUALS</code> operator to specify a string that matches the claim field value.</p> </li> <li> <p>Include a <code>matchValueArray</code> to specify an array of string values. You can use the following operators:</p> <ul> <li> <p>Use <code>CONTAINS</code> to yield a match if the claim field value is in the array.</p> </li> <li> <p>Use <code>CONTAINS_ANY</code> to yield a match if the claim field value contains any of the strings in the array.</p> </li> </ul> </li> </ul>
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
   * <p>The string value to match for.</p>
   * @public
   */
  export interface MatchValueStringMember {
    matchValueString: string;
    matchValueStringList?: never;
    $unknown?: never;
  }

  /**
   * <p>An array of strings to check for a match.</p>
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
 * <p>Defines the value or values to match for and the relationship of the match.</p>
 * @public
 */
export interface AuthorizingClaimMatchValueType {
  /**
   * <p>The value or values to match for.</p>
   * @public
   */
  claimMatchValue: ClaimMatchValueType | undefined;

  /**
   * <p>Defines the relationship between the claim field value and the value or values you're matching for.</p>
   * @public
   */
  claimMatchOperator: ClaimMatchOperatorType | undefined;
}

/**
 * <p>Defines the name of a custom claim field and rules for finding matches to authenticate its value.</p>
 * @public
 */
export interface CustomClaimValidationType {
  /**
   * <p>The name of the custom claim field to check.</p>
   * @public
   */
  inboundTokenClaimName: string | undefined;

  /**
   * <p>The data type of the claim value to check for.</p> <ul> <li> <p>Use <code>STRING</code> if you want to find an exact match to a string you define.</p> </li> <li> <p>Use <code>STRING_ARRAY</code> if you want to fnd a match to at least one value in an array you define.</p> </li> </ul>
   * @public
   */
  inboundTokenClaimValueType: InboundTokenClaimValueType | undefined;

  /**
   * <p>Defines the value or values to match for and the relationship of the match.</p>
   * @public
   */
  authorizingClaimMatchValue: AuthorizingClaimMatchValueType | undefined;
}

/**
 * <p>Configuration for inbound JWT-based authorization, specifying how incoming requests should be authenticated.</p>
 * @public
 */
export interface CustomJWTAuthorizerConfiguration {
  /**
   * <p>This URL is used to fetch OpenID Connect configuration or authorization server metadata for validating incoming tokens.</p>
   * @public
   */
  discoveryUrl: string | undefined;

  /**
   * <p>Represents individual audience values that are validated in the incoming JWT token validation process.</p>
   * @public
   */
  allowedAudience?: string[] | undefined;

  /**
   * <p>Represents individual client IDs that are validated in the incoming JWT token validation process.</p>
   * @public
   */
  allowedClients?: string[] | undefined;

  /**
   * <p>An array of scopes that are allowed to access the token.</p>
   * @public
   */
  allowedScopes?: string[] | undefined;

  /**
   * <p>An array of objects that define a custom claim validation name, value, and operation </p>
   * @public
   */
  customClaims?: CustomClaimValidationType[] | undefined;
}

/**
 * <p>Represents inbound authorization configuration options used to authenticate incoming requests. </p>
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
   * <p>The inbound JWT-based authorization, specifying how incoming requests should be authenticated.</p>
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
 * <p>LifecycleConfiguration lets you manage the lifecycle of runtime sessions and resources in AgentCore Runtime. This configuration helps optimize resource utilization by automatically cleaning up idle sessions and preventing long-running instances from consuming resources indefinitely.</p>
 * @public
 */
export interface LifecycleConfiguration {
  /**
   * <p>Timeout in seconds for idle runtime sessions. When a session remains idle for this duration, it will be automatically terminated. Default: 900 seconds (15 minutes).</p>
   * @public
   */
  idleRuntimeSessionTimeout?: number | undefined;

  /**
   * <p>Maximum lifetime for the instance in seconds. Once reached, instances will be automatically terminated and replaced. Default: 28800 seconds (8 hours).</p>
   * @public
   */
  maxLifetime?: number | undefined;
}

/**
 * <p>VpcConfig for the Agent.</p>
 * @public
 */
export interface VpcConfig {
  /**
   * <p>The security groups associated with the VPC configuration.</p>
   * @public
   */
  securityGroups: string[] | undefined;

  /**
   * <p>The subnets associated with the VPC configuration.</p>
   * @public
   */
  subnets: string[] | undefined;
}

/**
 * <p>SecurityConfig for the Agent.</p>
 * @public
 */
export interface NetworkConfiguration {
  /**
   * <p>The network mode for the AgentCore Runtime.</p>
   * @public
   */
  networkMode: NetworkMode | undefined;

  /**
   * <p>The network mode configuration for the AgentCore Runtime.</p>
   * @public
   */
  networkModeConfig?: VpcConfig | undefined;
}

/**
 * <p>The protocol configuration for an agent runtime. This structure defines how the agent runtime communicates with clients.</p>
 * @public
 */
export interface ProtocolConfiguration {
  /**
   * <p>The server protocol for the agent runtime. This field specifies which protocol the agent runtime uses to communicate with clients.</p>
   * @public
   */
  serverProtocol: ServerProtocol | undefined;
}

/**
 * <p>Configuration for HTTP request headers that will be passed through to the runtime.</p>
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
   * <p>A list of HTTP request headers that are allowed to be passed through to the runtime.</p>
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
   * <p>The name of the AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeName: string | undefined;

  /**
   * <p>The artifact of the AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeArtifact: AgentRuntimeArtifact | undefined;

  /**
   * <p>The IAM role ARN that provides permissions for the AgentCore Runtime.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The network configuration for the AgentCore Runtime.</p>
   * @public
   */
  networkConfiguration: NetworkConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The description of the AgentCore Runtime.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The authorizer configuration for the AgentCore Runtime.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>Configuration for HTTP request headers that will be passed through to the runtime.</p>
   * @public
   */
  requestHeaderConfiguration?: RequestHeaderConfiguration | undefined;

  /**
   * <p>The protocol configuration for an agent runtime. This structure defines how the agent runtime communicates with clients.</p>
   * @public
   */
  protocolConfiguration?: ProtocolConfiguration | undefined;

  /**
   * <p>The life cycle configuration for the AgentCore Runtime.</p>
   * @public
   */
  lifecycleConfiguration?: LifecycleConfiguration | undefined;

  /**
   * <p>Environment variables to set in the AgentCore Runtime environment.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>A map of tag keys and values to assign to the agent runtime. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The information about the workload identity.</p>
 * @public
 */
export interface WorkloadIdentityDetails {
  /**
   * <p>The ARN associated with the workload identity.</p>
   * @public
   */
  workloadIdentityArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAgentRuntimeResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * <p>The workload identity details for the AgentCore Runtime.</p>
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * <p>The unique identifier of the AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * <p>The version of the AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeVersion: string | undefined;

  /**
   * <p>The timestamp when the AgentCore Runtime was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The current status of the AgentCore Runtime.</p>
   * @public
   */
  status: AgentRuntimeStatus | undefined;
}

/**
 * @public
 */
export interface DeleteAgentRuntimeRequest {
  /**
   * <p>The unique identifier of the AgentCore Runtime to delete.</p>
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, the service ignores the request but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAgentRuntimeResponse {
  /**
   * <p>The current status of the AgentCore Runtime deletion.</p>
   * @public
   */
  status: AgentRuntimeStatus | undefined;

  /**
   * <p>The unique identifier of the AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeId?: string | undefined;
}

/**
 * @public
 */
export interface GetAgentRuntimeRequest {
  /**
   * <p>The unique identifier of the AgentCore Runtime to retrieve.</p>
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * <p>The version of the AgentCore Runtime to retrieve.</p>
   * @public
   */
  agentRuntimeVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetAgentRuntimeResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * <p>The name of the AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeName: string | undefined;

  /**
   * <p>The unique identifier of the AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * <p>The version of the AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeVersion: string | undefined;

  /**
   * <p>The timestamp when the AgentCore Runtime was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the AgentCore Runtime was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The IAM role ARN that provides permissions for the AgentCore Runtime.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The network configuration for the AgentCore Runtime.</p>
   * @public
   */
  networkConfiguration: NetworkConfiguration | undefined;

  /**
   * <p>The current status of the AgentCore Runtime.</p>
   * @public
   */
  status: AgentRuntimeStatus | undefined;

  /**
   * <p>The life cycle configuration for the AgentCore Runtime.</p>
   * @public
   */
  lifecycleConfiguration: LifecycleConfiguration | undefined;

  /**
   * <p>The reason for failure if the AgentCore Runtime is in a failed state.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The description of the AgentCore Runtime.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The workload identity details for the AgentCore Runtime.</p>
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * <p>The artifact of the AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeArtifact?: AgentRuntimeArtifact | undefined;

  /**
   * <p>The protocol configuration for an agent runtime. This structure defines how the agent runtime communicates with clients.</p>
   * @public
   */
  protocolConfiguration?: ProtocolConfiguration | undefined;

  /**
   * <p>Environment variables set in the AgentCore Runtime environment.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>The authorizer configuration for the AgentCore Runtime.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>Configuration for HTTP request headers that will be passed through to the runtime.</p>
   * @public
   */
  requestHeaderConfiguration?: RequestHeaderConfiguration | undefined;
}

/**
 * @public
 */
export interface ListAgentRuntimesRequest {
  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains information about an agent runtime. An agent runtime is the execution environment for a Amazon Bedrock Agent.</p>
 * @public
 */
export interface AgentRuntime {
  /**
   * <p>The Amazon Resource Name (ARN) of the agent runtime.</p>
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * <p>The unique identifier of the agent runtime.</p>
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * <p>The version of the agent runtime.</p>
   * @public
   */
  agentRuntimeVersion: string | undefined;

  /**
   * <p>The name of the agent runtime.</p>
   * @public
   */
  agentRuntimeName: string | undefined;

  /**
   * <p>The description of the agent runtime.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The timestamp when the agent runtime was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The current status of the agent runtime.</p>
   * @public
   */
  status: AgentRuntimeStatus | undefined;
}

/**
 * @public
 */
export interface ListAgentRuntimesResponse {
  /**
   * <p>The list of AgentCore Runtime resources.</p>
   * @public
   */
  agentRuntimes: AgentRuntime[] | undefined;

  /**
   * <p>A token to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentRuntimeVersionsRequest {
  /**
   * <p>The unique identifier of the AgentCore Runtime to list versions for.</p>
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAgentRuntimeVersionsResponse {
  /**
   * <p>The list of AgentCore Runtime versions.</p>
   * @public
   */
  agentRuntimes: AgentRuntime[] | undefined;

  /**
   * <p>A token to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentRuntimeRequest {
  /**
   * <p>The unique identifier of the AgentCore Runtime to update.</p>
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * <p>The updated artifact of the AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeArtifact: AgentRuntimeArtifact | undefined;

  /**
   * <p>The updated IAM role ARN that provides permissions for the AgentCore Runtime.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The updated network configuration for the AgentCore Runtime.</p>
   * @public
   */
  networkConfiguration: NetworkConfiguration | undefined;

  /**
   * <p>The updated description of the AgentCore Runtime.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated authorizer configuration for the AgentCore Runtime.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The updated configuration for HTTP request headers that will be passed through to the runtime.</p>
   * @public
   */
  requestHeaderConfiguration?: RequestHeaderConfiguration | undefined;

  /**
   * <p>The protocol configuration for an agent runtime. This structure defines how the agent runtime communicates with clients.</p>
   * @public
   */
  protocolConfiguration?: ProtocolConfiguration | undefined;

  /**
   * <p>The updated life cycle configuration for the AgentCore Runtime.</p>
   * @public
   */
  lifecycleConfiguration?: LifecycleConfiguration | undefined;

  /**
   * <p>Updated environment variables to set in the AgentCore Runtime environment.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentRuntimeResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeArn: string | undefined;

  /**
   * <p>The unique identifier of the updated AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeId: string | undefined;

  /**
   * <p>The workload identity details for the updated AgentCore Runtime.</p>
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * <p>The version of the updated AgentCore Runtime.</p>
   * @public
   */
  agentRuntimeVersion: string | undefined;

  /**
   * <p>The timestamp when the AgentCore Runtime was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the AgentCore Runtime was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The current status of the updated AgentCore Runtime.</p>
   * @public
   */
  status: AgentRuntimeStatus | undefined;
}

/**
 * @public
 */
export interface CreateApiKeyCredentialProviderRequest {
  /**
   * <p>The name of the API key credential provider. The name must be unique within your account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The API key to use for authentication. This value is encrypted and stored securely.</p>
   * @public
   */
  apiKey: string | undefined;

  /**
   * <p>A map of tag keys and values to assign to the API key credential provider. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Contains information about a secret in AWS Secrets Manager.</p>
 * @public
 */
export interface Secret {
  /**
   * <p>The Amazon Resource Name (ARN) of the secret in AWS Secrets Manager.</p>
   * @public
   */
  secretArn: string | undefined;
}

/**
 * @public
 */
export interface CreateApiKeyCredentialProviderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the secret containing the API key.</p>
   * @public
   */
  apiKeySecretArn: Secret | undefined;

  /**
   * <p>The name of the created API key credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created API key credential provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteApiKeyCredentialProviderRequest {
  /**
   * <p>The name of the API key credential provider to delete.</p>
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
   * <p>The name of the API key credential provider to retrieve.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetApiKeyCredentialProviderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the API key secret in AWS Secrets Manager.</p>
   * @public
   */
  apiKeySecretArn: Secret | undefined;

  /**
   * <p>The name of the API key credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the API key credential provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * <p>The timestamp when the API key credential provider was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the API key credential provider was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListApiKeyCredentialProvidersRequest {
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
 * <p>Contains information about an API key credential provider.</p>
 * @public
 */
export interface ApiKeyCredentialProviderItem {
  /**
   * <p>The name of the API key credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the API key credential provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * <p>The timestamp when the API key credential provider was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the API key credential provider was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListApiKeyCredentialProvidersResponse {
  /**
   * <p>The list of API key credential providers.</p>
   * @public
   */
  credentialProviders: ApiKeyCredentialProviderItem[] | undefined;

  /**
   * <p>Pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApiKeyCredentialProviderRequest {
  /**
   * <p>The name of the API key credential provider to update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The new API key to use for authentication. This value replaces the existing API key and is encrypted and stored securely.</p>
   * @public
   */
  apiKey: string | undefined;
}

/**
 * @public
 */
export interface UpdateApiKeyCredentialProviderResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the API key secret in AWS Secrets Manager.</p>
   * @public
   */
  apiKeySecretArn: Secret | undefined;

  /**
   * <p>The name of the API key credential provider.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the API key credential provider.</p>
   * @public
   */
  credentialProviderArn: string | undefined;

  /**
   * <p>The timestamp when the API key credential provider was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the API key credential provider was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * <p>Configuration for enabling browser signing capabilities that allow agents to cryptographically identify themselves to websites using HTTP message signatures.</p>
 * @public
 */
export interface BrowserSigningConfigInput {
  /**
   * <p>Specifies whether browser signing is enabled. When enabled, the browser will cryptographically sign HTTP requests to identify itself as an AI agent to bot control vendors.</p>
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * <p>The network configuration for a browser. This structure defines how the browser connects to the network.</p>
 * @public
 */
export interface BrowserNetworkConfiguration {
  /**
   * <p>The network mode for the browser. This field specifies how the browser connects to the network.</p>
   * @public
   */
  networkMode: BrowserNetworkMode | undefined;

  /**
   * <p>VpcConfig for the Agent.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;
}

/**
 * <p>The recording configuration for a browser. This structure defines how browser sessions are recorded.</p>
 * @public
 */
export interface RecordingConfig {
  /**
   * <p>Indicates whether recording is enabled for the browser. When set to true, browser sessions are recorded.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The Amazon S3 location where browser recordings are stored. This location contains the recorded browser sessions.</p>
   * @public
   */
  s3Location?: S3Location | undefined;
}

/**
 * @public
 */
export interface CreateBrowserRequest {
  /**
   * <p>The name of the browser. The name must be unique within your account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the browser.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides permissions for the browser to access Amazon Web Services services.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The network configuration for the browser. This configuration specifies the network mode for the browser.</p>
   * @public
   */
  networkConfiguration: BrowserNetworkConfiguration | undefined;

  /**
   * <p>The recording configuration for the browser. When enabled, browser sessions are recorded and stored in the specified Amazon S3 location.</p>
   * @public
   */
  recording?: RecordingConfig | undefined;

  /**
   * <p>The browser signing configuration that enables cryptographic agent identification using HTTP message signatures for web bot authentication.</p>
   * @public
   */
  browserSigning?: BrowserSigningConfigInput | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A map of tag keys and values to assign to the browser. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateBrowserResponse {
  /**
   * <p>The unique identifier of the created browser.</p>
   * @public
   */
  browserId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created browser.</p>
   * @public
   */
  browserArn: string | undefined;

  /**
   * <p>The timestamp when the browser was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The current status of the browser.</p>
   * @public
   */
  status: BrowserStatus | undefined;
}

/**
 * @public
 */
export interface DeleteBrowserRequest {
  /**
   * <p>The unique identifier of the browser to delete.</p>
   * @public
   */
  browserId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrowserResponse {
  /**
   * <p>The unique identifier of the deleted browser.</p>
   * @public
   */
  browserId: string | undefined;

  /**
   * <p>The current status of the browser deletion.</p>
   * @public
   */
  status: BrowserStatus | undefined;

  /**
   * <p>The timestamp when the browser was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetBrowserRequest {
  /**
   * <p>The unique identifier of the browser to retrieve.</p>
   * @public
   */
  browserId: string | undefined;
}

/**
 * <p>The current browser signing configuration that shows whether cryptographic agent identification is enabled for web bot authentication.</p>
 * @public
 */
export interface BrowserSigningConfigOutput {
  /**
   * <p>Indicates whether browser signing is currently enabled for cryptographic agent identification using HTTP message signatures.</p>
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * @public
 */
export interface GetBrowserResponse {
  /**
   * <p>The unique identifier of the browser.</p>
   * @public
   */
  browserId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the browser.</p>
   * @public
   */
  browserArn: string | undefined;

  /**
   * <p>The name of the browser.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the browser.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The IAM role ARN that provides permissions for the browser.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The network configuration for a browser. This structure defines how the browser connects to the network.</p>
   * @public
   */
  networkConfiguration: BrowserNetworkConfiguration | undefined;

  /**
   * <p>The recording configuration for a browser. This structure defines how browser sessions are recorded.</p>
   * @public
   */
  recording?: RecordingConfig | undefined;

  /**
   * <p>The browser signing configuration that shows whether cryptographic agent identification is enabled for web bot authentication.</p>
   * @public
   */
  browserSigning?: BrowserSigningConfigOutput | undefined;

  /**
   * <p>The current status of the browser.</p>
   * @public
   */
  status: BrowserStatus | undefined;

  /**
   * <p>The reason for failure if the browser is in a failed state.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The timestamp when the browser was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the browser was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListBrowsersRequest {
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

  /**
   * <p>The type of browsers to list. If not specified, all browser types are returned.</p>
   * @public
   */
  type?: ResourceType | undefined;
}

/**
 * <p>Contains summary information about a browser. A browser enables Amazon Bedrock Agent to interact with web content.</p>
 * @public
 */
export interface BrowserSummary {
  /**
   * <p>The unique identifier of the browser.</p>
   * @public
   */
  browserId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the browser.</p>
   * @public
   */
  browserArn: string | undefined;

  /**
   * <p>The name of the browser.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the browser.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The current status of the browser.</p>
   * @public
   */
  status: BrowserStatus | undefined;

  /**
   * <p>The timestamp when the browser was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the browser was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListBrowsersResponse {
  /**
   * <p>The list of browser summaries.</p>
   * @public
   */
  browserSummaries: BrowserSummary[] | undefined;

  /**
   * <p>A token to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The network configuration for a code interpreter. This structure defines how the code interpreter connects to the network.</p>
 * @public
 */
export interface CodeInterpreterNetworkConfiguration {
  /**
   * <p>The network mode for the code interpreter. This field specifies how the code interpreter connects to the network.</p>
   * @public
   */
  networkMode: CodeInterpreterNetworkMode | undefined;

  /**
   * <p>VpcConfig for the Agent.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;
}

/**
 * @public
 */
export interface CreateCodeInterpreterRequest {
  /**
   * <p>The name of the code interpreter. The name must be unique within your account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the code interpreter.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides permissions for the code interpreter to access Amazon Web Services services.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The network configuration for the code interpreter. This configuration specifies the network mode for the code interpreter.</p>
   * @public
   */
  networkConfiguration: CodeInterpreterNetworkConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock ignores the request but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A map of tag keys and values to assign to the code interpreter. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateCodeInterpreterResponse {
  /**
   * <p>The unique identifier of the created code interpreter.</p>
   * @public
   */
  codeInterpreterId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created code interpreter.</p>
   * @public
   */
  codeInterpreterArn: string | undefined;

  /**
   * <p>The timestamp when the code interpreter was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The current status of the code interpreter.</p>
   * @public
   */
  status: CodeInterpreterStatus | undefined;
}

/**
 * @public
 */
export interface DeleteCodeInterpreterRequest {
  /**
   * <p>The unique identifier of the code interpreter to delete.</p>
   * @public
   */
  codeInterpreterId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCodeInterpreterResponse {
  /**
   * <p>The unique identifier of the deleted code interpreter.</p>
   * @public
   */
  codeInterpreterId: string | undefined;

  /**
   * <p>The current status of the code interpreter deletion.</p>
   * @public
   */
  status: CodeInterpreterStatus | undefined;

  /**
   * <p>The timestamp when the code interpreter was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetCodeInterpreterRequest {
  /**
   * <p>The unique identifier of the code interpreter to retrieve.</p>
   * @public
   */
  codeInterpreterId: string | undefined;
}

/**
 * @public
 */
export interface GetCodeInterpreterResponse {
  /**
   * <p>The unique identifier of the code interpreter.</p>
   * @public
   */
  codeInterpreterId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the code interpreter.</p>
   * @public
   */
  codeInterpreterArn: string | undefined;

  /**
   * <p>The name of the code interpreter.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the code interpreter.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The IAM role ARN that provides permissions for the code interpreter.</p>
   * @public
   */
  executionRoleArn?: string | undefined;

  /**
   * <p>The network configuration for a code interpreter. This structure defines how the code interpreter connects to the network.</p>
   * @public
   */
  networkConfiguration: CodeInterpreterNetworkConfiguration | undefined;

  /**
   * <p>The current status of the code interpreter.</p>
   * @public
   */
  status: CodeInterpreterStatus | undefined;

  /**
   * <p>The reason for failure if the code interpreter is in a failed state.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The timestamp when the code interpreter was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the code interpreter was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListCodeInterpretersRequest {
  /**
   * <p>The maximum number of results to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The type of code interpreters to list.</p>
   * @public
   */
  type?: ResourceType | undefined;
}

/**
 * <p>Contains summary information about a code interpreter. A code interpreter enables Amazon Bedrock Agent to execute code.</p>
 * @public
 */
export interface CodeInterpreterSummary {
  /**
   * <p>The unique identifier of the code interpreter.</p>
   * @public
   */
  codeInterpreterId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the code interpreter.</p>
   * @public
   */
  codeInterpreterArn: string | undefined;

  /**
   * <p>The name of the code interpreter.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the code interpreter.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The current status of the code interpreter.</p>
   * @public
   */
  status: CodeInterpreterStatus | undefined;

  /**
   * <p>The timestamp when the code interpreter was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the code interpreter was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListCodeInterpretersResponse {
  /**
   * <p>The list of code interpreter summaries.</p>
   * @public
   */
  codeInterpreterSummaries: CodeInterpreterSummary[] | undefined;

  /**
   * <p>A token to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to delete the resource policy.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * <p> The configuration parameters that control how the foundation model behaves during evaluation, including response generation settings. </p>
 * @public
 */
export interface InferenceConfiguration {
  /**
   * <p> The maximum number of tokens to generate in the model response during evaluation. </p>
   * @public
   */
  maxTokens?: number | undefined;

  /**
   * <p> The temperature value that controls randomness in the model's responses. Lower values produce more deterministic outputs. </p>
   * @public
   */
  temperature?: number | undefined;

  /**
   * <p> The top-p sampling parameter that controls the diversity of the model's responses by limiting the cumulative probability of token choices. </p>
   * @public
   */
  topP?: number | undefined;

  /**
   * <p> The list of sequences that will cause the model to stop generating tokens when encountered. </p>
   * @public
   */
  stopSequences?: string[] | undefined;
}

/**
 * <p> The configuration for using Amazon Bedrock models in evaluator assessments, including model selection and inference parameters. </p>
 * @public
 */
export interface BedrockEvaluatorModelConfig {
  /**
   * <p> The identifier of the Amazon Bedrock model to use for evaluation. Must be a supported foundation model available in your region. </p>
   * @public
   */
  modelId: string | undefined;

  /**
   * <p> The inference configuration parameters that control model behavior during evaluation, including temperature, token limits, and sampling settings. </p>
   * @public
   */
  inferenceConfig?: InferenceConfiguration | undefined;

  /**
   * <p> Additional model-specific request fields to customize model behavior beyond the standard inference configuration. </p>
   * @public
   */
  additionalModelRequestFields?: __DocumentType | undefined;
}

/**
 * <p> The model configuration that specifies which foundation model to use for evaluation and how to configure it. </p>
 * @public
 */
export type EvaluatorModelConfig =
  | EvaluatorModelConfig.BedrockEvaluatorModelConfigMember
  | EvaluatorModelConfig.$UnknownMember;

/**
 * @public
 */
export namespace EvaluatorModelConfig {
  /**
   * <p> The Amazon Bedrock model configuration for evaluation. </p>
   * @public
   */
  export interface BedrockEvaluatorModelConfigMember {
    bedrockEvaluatorModelConfig: BedrockEvaluatorModelConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    bedrockEvaluatorModelConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    bedrockEvaluatorModelConfig: (value: BedrockEvaluatorModelConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p> The definition of a categorical rating scale option that provides a named category with its description for evaluation scoring. </p>
 * @public
 */
export interface CategoricalScaleDefinition {
  /**
   * <p> The description that explains what this categorical rating represents and when it should be used. </p>
   * @public
   */
  definition: string | undefined;

  /**
   * <p> The label or name of this categorical rating option. </p>
   * @public
   */
  label: string | undefined;
}

/**
 * <p> The definition of a numerical rating scale option that provides a numeric value with its description for evaluation scoring. </p>
 * @public
 */
export interface NumericalScaleDefinition {
  /**
   * <p> The description that explains what this numerical rating represents and when it should be used. </p>
   * @public
   */
  definition: string | undefined;

  /**
   * <p> The numerical value for this rating scale option. </p>
   * @public
   */
  value: number | undefined;

  /**
   * <p> The label or name that describes this numerical rating option. </p>
   * @public
   */
  label: string | undefined;
}

/**
 * <p> The rating scale that defines how evaluators should score agent performance, supporting both numerical and categorical scales. </p>
 * @public
 */
export type RatingScale =
  | RatingScale.CategoricalMember
  | RatingScale.NumericalMember
  | RatingScale.$UnknownMember;

/**
 * @public
 */
export namespace RatingScale {
  /**
   * <p> The numerical rating scale with defined score values and descriptions for quantitative evaluation. </p>
   * @public
   */
  export interface NumericalMember {
    numerical: NumericalScaleDefinition[];
    categorical?: never;
    $unknown?: never;
  }

  /**
   * <p> The categorical rating scale with named categories and definitions for qualitative evaluation. </p>
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
 * <p> The configuration for LLM-as-a-Judge evaluation that uses a language model to assess agent performance based on custom instructions and rating scales. </p>
 * @public
 */
export interface LlmAsAJudgeEvaluatorConfig {
  /**
   * <p> The evaluation instructions that guide the language model in assessing agent performance, including criteria and evaluation guidelines. </p>
   * @public
   */
  instructions: string | undefined;

  /**
   * <p> The rating scale that defines how the evaluator should score agent performance, either numerical or categorical. </p>
   * @public
   */
  ratingScale: RatingScale | undefined;

  /**
   * <p> The model configuration that specifies which foundation model to use and how to configure it for evaluation. </p>
   * @public
   */
  modelConfig: EvaluatorModelConfig | undefined;
}

/**
 * <p> The configuration that defines how an evaluator assesses agent performance, including the evaluation method and parameters. </p>
 * @public
 */
export type EvaluatorConfig =
  | EvaluatorConfig.LlmAsAJudgeMember
  | EvaluatorConfig.$UnknownMember;

/**
 * @public
 */
export namespace EvaluatorConfig {
  /**
   * <p> The LLM-as-a-Judge configuration that uses a language model to evaluate agent performance based on custom instructions and rating scales. </p>
   * @public
   */
  export interface LlmAsAJudgeMember {
    llmAsAJudge: LlmAsAJudgeEvaluatorConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    llmAsAJudge?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    llmAsAJudge: (value: LlmAsAJudgeEvaluatorConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateEvaluatorRequest {
  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p> The name of the evaluator. Must be unique within your account. </p>
   * @public
   */
  evaluatorName: string | undefined;

  /**
   * <p> The description of the evaluator that explains its purpose and evaluation criteria. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The configuration for the evaluator, including LLM-as-a-Judge settings with instructions, rating scale, and model configuration. </p>
   * @public
   */
  evaluatorConfig: EvaluatorConfig | undefined;

  /**
   * <p> The evaluation level that determines the scope of evaluation. Valid values are <code>TOOL_CALL</code> for individual tool invocations, <code>TRACE</code> for single request-response interactions, or <code>SESSION</code> for entire conversation sessions. </p>
   * @public
   */
  level: EvaluatorLevel | undefined;
}

/**
 * @public
 */
export interface CreateEvaluatorResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the created evaluator. </p>
   * @public
   */
  evaluatorArn: string | undefined;

  /**
   * <p> The unique identifier of the created evaluator. </p>
   * @public
   */
  evaluatorId: string | undefined;

  /**
   * <p> The timestamp when the evaluator was created. </p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p> The status of the evaluator creation operation. </p>
   * @public
   */
  status: EvaluatorStatus | undefined;
}

/**
 * @public
 */
export interface DeleteEvaluatorRequest {
  /**
   * <p> The unique identifier of the evaluator to delete. </p>
   * @public
   */
  evaluatorId: string | undefined;
}

/**
 * @public
 */
export interface DeleteEvaluatorResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the deleted evaluator. </p>
   * @public
   */
  evaluatorArn: string | undefined;

  /**
   * <p> The unique identifier of the deleted evaluator. </p>
   * @public
   */
  evaluatorId: string | undefined;

  /**
   * <p> The status of the evaluator deletion operation. </p>
   * @public
   */
  status: EvaluatorStatus | undefined;
}

/**
 * @public
 */
export interface GetEvaluatorRequest {
  /**
   * <p> The unique identifier of the evaluator to retrieve. Can be a built-in evaluator ID (e.g., Builtin.Helpfulness) or a custom evaluator ID. </p>
   * @public
   */
  evaluatorId: string | undefined;
}

/**
 * @public
 */
export interface GetEvaluatorResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the evaluator. </p>
   * @public
   */
  evaluatorArn: string | undefined;

  /**
   * <p> The unique identifier of the evaluator. </p>
   * @public
   */
  evaluatorId: string | undefined;

  /**
   * <p> The name of the evaluator. </p>
   * @public
   */
  evaluatorName: string | undefined;

  /**
   * <p> The description of the evaluator. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The configuration of the evaluator, including LLM-as-a-Judge settings for custom evaluators. </p>
   * @public
   */
  evaluatorConfig: EvaluatorConfig | undefined;

  /**
   * <p> The evaluation level (<code>TOOL_CALL</code>, <code>TRACE</code>, or <code>SESSION</code>) that determines the scope of evaluation. </p>
   * @public
   */
  level: EvaluatorLevel | undefined;

  /**
   * <p> The current status of the evaluator. </p>
   * @public
   */
  status: EvaluatorStatus | undefined;

  /**
   * <p> The timestamp when the evaluator was created. </p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p> The timestamp when the evaluator was last updated. </p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p> Whether the evaluator is locked for modification due to being referenced by active online evaluation configurations. </p>
   * @public
   */
  lockedForModification?: boolean | undefined;
}

/**
 * @public
 */
export interface ListEvaluatorsRequest {
  /**
   * <p> The pagination token from a previous request to retrieve the next page of results. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> The maximum number of evaluators to return in a single response. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p> The summary information about an evaluator, including basic metadata and status information. </p>
 * @public
 */
export interface EvaluatorSummary {
  /**
   * <p> The Amazon Resource Name (ARN) of the evaluator. </p>
   * @public
   */
  evaluatorArn: string | undefined;

  /**
   * <p> The unique identifier of the evaluator. </p>
   * @public
   */
  evaluatorId: string | undefined;

  /**
   * <p> The name of the evaluator. </p>
   * @public
   */
  evaluatorName: string | undefined;

  /**
   * <p> The description of the evaluator. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The type of evaluator, indicating whether it is a built-in evaluator provided by the service or a custom evaluator created by the user. </p>
   * @public
   */
  evaluatorType: EvaluatorType | undefined;

  /**
   * <p> The evaluation level (<code>TOOL_CALL</code>, <code>TRACE</code>, or <code>SESSION</code>) that determines the scope of evaluation. </p>
   * @public
   */
  level?: EvaluatorLevel | undefined;

  /**
   * <p> The current status of the evaluator. </p>
   * @public
   */
  status: EvaluatorStatus | undefined;

  /**
   * <p> The timestamp when the evaluator was created. </p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p> The timestamp when the evaluator was last updated. </p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p> Whether the evaluator is locked for modification due to being referenced by active online evaluation configurations. </p>
   * @public
   */
  lockedForModification?: boolean | undefined;
}

/**
 * @public
 */
export interface ListEvaluatorsResponse {
  /**
   * <p> The list of evaluator summaries containing basic information about each evaluator. </p>
   * @public
   */
  evaluators: EvaluatorSummary[] | undefined;

  /**
   * <p> The pagination token to use in a subsequent request to retrieve the next page of results. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEvaluatorRequest {
  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p> The unique identifier of the evaluator to update. </p>
   * @public
   */
  evaluatorId: string | undefined;

  /**
   * <p> The updated description of the evaluator. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p> The updated configuration for the evaluator, including LLM-as-a-Judge settings with instructions, rating scale, and model configuration. </p>
   * @public
   */
  evaluatorConfig?: EvaluatorConfig | undefined;

  /**
   * <p> The updated evaluation level (<code>TOOL_CALL</code>, <code>TRACE</code>, or <code>SESSION</code>) that determines the scope of evaluation. </p>
   * @public
   */
  level?: EvaluatorLevel | undefined;
}

/**
 * @public
 */
export interface UpdateEvaluatorResponse {
  /**
   * <p> The Amazon Resource Name (ARN) of the updated evaluator. </p>
   * @public
   */
  evaluatorArn: string | undefined;

  /**
   * <p> The unique identifier of the updated evaluator. </p>
   * @public
   */
  evaluatorId: string | undefined;

  /**
   * <p> The timestamp when the evaluator was last updated. </p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p> The status of the evaluator update operation. </p>
   * @public
   */
  status: EvaluatorStatus | undefined;
}

/**
 * <p>The input configuration of the interceptor.</p>
 * @public
 */
export interface InterceptorInputConfiguration {
  /**
   * <p>Indicates whether to pass request headers as input into the interceptor. When set to true, request headers will be passed.</p>
   * @public
   */
  passRequestHeaders: boolean | undefined;
}

/**
 * <p>The lambda configuration for the interceptor</p>
 * @public
 */
export interface LambdaInterceptorConfiguration {
  /**
   * <p>The arn of the lambda function to be invoked for the interceptor.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>The interceptor configuration.</p>
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
   * <p>The details of the lambda function used for the interceptor.</p>
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
 * <p>The configuration for an interceptor on a gateway. This structure defines settings for an interceptor that will be invoked during the invocation of the gateway.</p>
 * @public
 */
export interface GatewayInterceptorConfiguration {
  /**
   * <p>The infrastructure settings of an interceptor configuration. This structure defines how the interceptor can be invoked.</p>
   * @public
   */
  interceptor: InterceptorConfiguration | undefined;

  /**
   * <p>The supported points of interception. This field specifies which points during the gateway invocation to invoke the interceptor</p>
   * @public
   */
  interceptionPoints: GatewayInterceptionPoint[] | undefined;

  /**
   * <p>The configuration for the input of the interceptor. This field specifies how the input to the interceptor is constructed</p>
   * @public
   */
  inputConfiguration?: InterceptorInputConfiguration | undefined;
}

/**
 * <p>The configuration for a policy engine associated with a gateway. A policy engine is a collection of policies that evaluates and authorizes agent tool calls. When associated with a gateway, the policy engine intercepts all agent requests and determines whether to allow or deny each action based on the defined policies.</p>
 * @public
 */
export interface GatewayPolicyEngineConfiguration {
  /**
   * <p>The ARN of the policy engine. The policy engine contains Cedar policies that define fine-grained authorization rules specifying who can perform what actions on which resources as agents interact through the gateway.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The enforcement mode for the policy engine. Valid values include:</p> <ul> <li> <p> <code>LOG_ONLY</code> - The policy engine evaluates each action against your policies and adds traces on whether tool calls would be allowed or denied, but does not enforce the decision. Use this mode to test and validate policies before enabling enforcement.</p> </li> <li> <p> <code>ENFORCE</code> - The policy engine evaluates actions against your policies and enforces decisions by allowing or denying agent operations. Test and validate policies in <code>LOG_ONLY</code> mode before enabling enforcement to avoid unintended denials or adversely affecting production traffic.</p> </li> </ul>
   * @public
   */
  mode: GatewayPolicyEngineMode | undefined;
}

/**
 * <p>The configuration for a Model Context Protocol (MCP) gateway. This structure defines how the gateway implements the MCP protocol.</p>
 * @public
 */
export interface MCPGatewayConfiguration {
  /**
   * <p>The supported versions of the Model Context Protocol. This field specifies which versions of the protocol the gateway can use.</p>
   * @public
   */
  supportedVersions?: string[] | undefined;

  /**
   * <p>The instructions for using the Model Context Protocol gateway. These instructions provide guidance on how to interact with the gateway.</p>
   * @public
   */
  instructions?: string | undefined;

  /**
   * <p>The search type for the Model Context Protocol gateway. This field specifies how the gateway handles search operations.</p>
   * @public
   */
  searchType?: SearchType | undefined;
}

/**
 * <p>The configuration for a gateway protocol. This structure defines how the gateway communicates with external services.</p>
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
   * <p>The configuration for the Model Context Protocol (MCP). This protocol enables communication between Amazon Bedrock Agent and external tools.</p>
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
   * <p>The name of the gateway. The name must be unique within your account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the gateway.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that provides permissions for the gateway to access Amazon Web Services services.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The protocol type for the gateway.</p>
   * @public
   */
  protocolType: GatewayProtocolType | undefined;

  /**
   * <p>The configuration settings for the protocol specified in the <code>protocolType</code> parameter.</p>
   * @public
   */
  protocolConfiguration?: GatewayProtocolConfiguration | undefined;

  /**
   * <p>The type of authorizer to use for the gateway.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> <li> <p> <code>NONE</code> - No authorization</p> </li> </ul>
   * @public
   */
  authorizerType: AuthorizerType | undefined;

  /**
   * <p>The authorizer configuration for the gateway. Required if <code>authorizerType</code> is <code>CUSTOM_JWT</code>.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt data associated with the gateway.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>A list of configuration settings for a gateway interceptor. Gateway interceptors allow custom code to be invoked during gateway invocations.</p>
   * @public
   */
  interceptorConfigurations?: GatewayInterceptorConfiguration[] | undefined;

  /**
   * <p>The policy engine configuration for the gateway. A policy engine is a collection of policies that evaluates and authorizes agent tool calls. When associated with a gateway, the policy engine intercepts all agent requests and determines whether to allow or deny each action based on the defined policies.</p>
   * @public
   */
  policyEngineConfiguration?: GatewayPolicyEngineConfiguration | undefined;

  /**
   * <p>The level of detail in error messages returned when invoking the gateway.</p> <ul> <li> <p>If the value is <code>DEBUG</code>, granular exception messages are returned to help a user debug the gateway.</p> </li> <li> <p>If the value is omitted, a generic error message is returned to the end user.</p> </li> </ul>
   * @public
   */
  exceptionLevel?: ExceptionLevel | undefined;

  /**
   * <p>A map of key-value pairs to associate with the gateway as metadata tags.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateGatewayResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created gateway.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>The unique identifier of the created gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The URL endpoint for the created gateway.</p>
   * @public
   */
  gatewayUrl?: string | undefined;

  /**
   * <p>The timestamp when the gateway was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the gateway was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the gateway.</p>
   * @public
   */
  status: GatewayStatus | undefined;

  /**
   * <p>The reasons for the current status of the gateway.</p>
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * <p>The name of the gateway.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the gateway.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the gateway.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The protocol type of the gateway.</p>
   * @public
   */
  protocolType: GatewayProtocolType | undefined;

  /**
   * <p>The configuration settings for the protocol used by the gateway.</p>
   * @public
   */
  protocolConfiguration?: GatewayProtocolConfiguration | undefined;

  /**
   * <p>The type of authorizer used by the gateway.</p>
   * @public
   */
  authorizerType: AuthorizerType | undefined;

  /**
   * <p>The authorizer configuration for the created gateway.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt data associated with the gateway.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The list of interceptor configurations for the created gateway.</p>
   * @public
   */
  interceptorConfigurations?: GatewayInterceptorConfiguration[] | undefined;

  /**
   * <p>The policy engine configuration for the created gateway.</p>
   * @public
   */
  policyEngineConfiguration?: GatewayPolicyEngineConfiguration | undefined;

  /**
   * <p>The workload identity details for the created gateway.</p>
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * <p>The level of detail in error messages returned when invoking the gateway.</p> <ul> <li> <p>If the value is <code>DEBUG</code>, granular exception messages are returned to help a user debug the gateway.</p> </li> <li> <p>If the value is omitted, a generic error message is returned to the end user.</p> </li> </ul>
   * @public
   */
  exceptionLevel?: ExceptionLevel | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayRequest {
  /**
   * <p>The identifier of the gateway to delete.</p>
   * @public
   */
  gatewayIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayResponse {
  /**
   * <p>The unique identifier of the deleted gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The current status of the gateway deletion.</p>
   * @public
   */
  status: GatewayStatus | undefined;

  /**
   * <p>The reasons for the current status of the gateway deletion.</p>
   * @public
   */
  statusReasons?: string[] | undefined;
}

/**
 * @public
 */
export interface GetGatewayRequest {
  /**
   * <p>The identifier of the gateway to retrieve.</p>
   * @public
   */
  gatewayIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetGatewayResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>An endpoint for invoking gateway.</p>
   * @public
   */
  gatewayUrl?: string | undefined;

  /**
   * <p>The timestamp when the gateway was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the gateway was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the gateway.</p>
   * @public
   */
  status: GatewayStatus | undefined;

  /**
   * <p>The reasons for the current status of the gateway.</p>
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * <p>The name of the gateway.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the gateway.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The IAM role ARN that provides permissions for the gateway.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>Protocol applied to a gateway.</p>
   * @public
   */
  protocolType: GatewayProtocolType | undefined;

  /**
   * <p>The configuration for a gateway protocol. This structure defines how the gateway communicates with external services.</p>
   * @public
   */
  protocolConfiguration?: GatewayProtocolConfiguration | undefined;

  /**
   * <p>Authorizer type for the gateway.</p>
   * @public
   */
  authorizerType: AuthorizerType | undefined;

  /**
   * <p>The authorizer configuration for the gateway.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the gateway.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The interceptors configured on the gateway.</p>
   * @public
   */
  interceptorConfigurations?: GatewayInterceptorConfiguration[] | undefined;

  /**
   * <p>The policy engine configuration for the gateway.</p>
   * @public
   */
  policyEngineConfiguration?: GatewayPolicyEngineConfiguration | undefined;

  /**
   * <p>The workload identity details for the gateway.</p>
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * <p>The level of detail in error messages returned when invoking the gateway.</p> <ul> <li> <p>If the value is <code>DEBUG</code>, granular exception messages are returned to help a user debug the gateway.</p> </li> <li> <p>If the value is omitted, a generic error message is returned to the end user.</p> </li> </ul>
   * @public
   */
  exceptionLevel?: ExceptionLevel | undefined;
}

/**
 * @public
 */
export interface ListGatewaysRequest {
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
 * <p>Contains summary information about a gateway.</p>
 * @public
 */
export interface GatewaySummary {
  /**
   * <p>The unique identifier of the gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The name of the gateway.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The current status of the gateway.</p>
   * @public
   */
  status: GatewayStatus | undefined;

  /**
   * <p>The description of the gateway.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp when the gateway was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the gateway was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The type of authorizer used by the gateway.</p>
   * @public
   */
  authorizerType: AuthorizerType | undefined;

  /**
   * <p>The protocol type used by the gateway.</p>
   * @public
   */
  protocolType: GatewayProtocolType | undefined;
}

/**
 * @public
 */
export interface ListGatewaysResponse {
  /**
   * <p>The list of gateway summaries.</p>
   * @public
   */
  items: GatewaySummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayRequest {
  /**
   * <p>The identifier of the gateway to update.</p>
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * <p>The name of the gateway. This name must be the same as the one when the gateway was created.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The updated description for the gateway.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated IAM role ARN that provides permissions for the gateway.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The updated protocol type for the gateway.</p>
   * @public
   */
  protocolType: GatewayProtocolType | undefined;

  /**
   * <p>The configuration for a gateway protocol. This structure defines how the gateway communicates with external services.</p>
   * @public
   */
  protocolConfiguration?: GatewayProtocolConfiguration | undefined;

  /**
   * <p>The updated authorizer type for the gateway.</p>
   * @public
   */
  authorizerType: AuthorizerType | undefined;

  /**
   * <p>The updated authorizer configuration for the gateway.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The updated ARN of the KMS key used to encrypt the gateway.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The updated interceptor configurations for the gateway.</p>
   * @public
   */
  interceptorConfigurations?: GatewayInterceptorConfiguration[] | undefined;

  /**
   * <p>The updated policy engine configuration for the gateway. A policy engine is a collection of policies that evaluates and authorizes agent tool calls. When associated with a gateway, the policy engine intercepts all agent requests and determines whether to allow or deny each action based on the defined policies.</p>
   * @public
   */
  policyEngineConfiguration?: GatewayPolicyEngineConfiguration | undefined;

  /**
   * <p>The level of detail in error messages returned when invoking the gateway.</p> <ul> <li> <p>If the value is <code>DEBUG</code>, granular exception messages are returned to help a user debug the gateway.</p> </li> <li> <p>If the value is omitted, a generic error message is returned to the end user.</p> </li> </ul>
   * @public
   */
  exceptionLevel?: ExceptionLevel | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated gateway.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>The unique identifier of the updated gateway.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>An endpoint for invoking the updated gateway.</p>
   * @public
   */
  gatewayUrl?: string | undefined;

  /**
   * <p>The timestamp when the gateway was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the gateway was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the updated gateway.</p>
   * @public
   */
  status: GatewayStatus | undefined;

  /**
   * <p>The reasons for the current status of the updated gateway.</p>
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * <p>The name of the gateway.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The updated description of the gateway.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated IAM role ARN that provides permissions for the gateway.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The updated protocol type for the gateway.</p>
   * @public
   */
  protocolType: GatewayProtocolType | undefined;

  /**
   * <p>The configuration for a gateway protocol. This structure defines how the gateway communicates with external services.</p>
   * @public
   */
  protocolConfiguration?: GatewayProtocolConfiguration | undefined;

  /**
   * <p>The updated authorizer type for the gateway.</p>
   * @public
   */
  authorizerType: AuthorizerType | undefined;

  /**
   * <p>The updated authorizer configuration for the gateway.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The updated ARN of the KMS key used to encrypt the gateway.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The updated interceptor configurations for the gateway.</p>
   * @public
   */
  interceptorConfigurations?: GatewayInterceptorConfiguration[] | undefined;

  /**
   * <p>The updated policy engine configuration for the gateway.</p>
   * @public
   */
  policyEngineConfiguration?: GatewayPolicyEngineConfiguration | undefined;

  /**
   * <p>The workload identity details for the updated gateway.</p>
   * @public
   */
  workloadIdentityDetails?: WorkloadIdentityDetails | undefined;

  /**
   * <p>The level of detail in error messages returned when invoking the gateway.</p> <ul> <li> <p>If the value is <code>DEBUG</code>, granular exception messages are returned to help a user debug the gateway.</p> </li> <li> <p>If the value is omitted, a generic error message is returned to the end user.</p> </li> </ul>
   * @public
   */
  exceptionLevel?: ExceptionLevel | undefined;
}

/**
 * <p>An API key credential provider for gateway authentication. This structure contains the configuration for authenticating with the target endpoint using an API key.</p>
 * @public
 */
export interface GatewayApiKeyCredentialProvider {
  /**
   * <p>The Amazon Resource Name (ARN) of the API key credential provider. This ARN identifies the provider in Amazon Web Services.</p>
   * @public
   */
  providerArn: string | undefined;

  /**
   * <p>The name of the credential parameter for the API key. This parameter name is used when sending the API key to the target endpoint.</p>
   * @public
   */
  credentialParameterName?: string | undefined;

  /**
   * <p>The prefix for the API key credential. This prefix is added to the API key when sending it to the target endpoint.</p>
   * @public
   */
  credentialPrefix?: string | undefined;

  /**
   * <p>The location of the API key credential. This field specifies where in the request the API key should be placed.</p>
   * @public
   */
  credentialLocation?: ApiKeyCredentialLocation | undefined;
}

/**
 * <p>An OAuth credential provider for gateway authentication. This structure contains the configuration for authenticating with the target endpoint using OAuth.</p>
 * @public
 */
export interface OAuthCredentialProvider {
  /**
   * <p>The Amazon Resource Name (ARN) of the OAuth credential provider. This ARN identifies the provider in Amazon Web Services.</p>
   * @public
   */
  providerArn: string | undefined;

  /**
   * <p>The OAuth scopes for the credential provider. These scopes define the level of access requested from the OAuth provider.</p>
   * @public
   */
  scopes: string[] | undefined;

  /**
   * <p>The custom parameters for the OAuth credential provider. These parameters provide additional configuration for the OAuth authentication process.</p>
   * @public
   */
  customParameters?: Record<string, string> | undefined;

  /**
   * <p>Specifies the kind of credentials to use for authorization:</p> <ul> <li> <p> <code>CLIENT_CREDENTIALS</code> - Authorization with a client ID and secret.</p> </li> <li> <p> <code>AUTHORIZATION_CODE</code> - Authorization with a token that is specific to an individual end user.</p> </li> </ul>
   * @public
   */
  grantType?: OAuthGrantType | undefined;

  /**
   * <p>The URL where the end user's browser is redirected after obtaining the authorization code. Generally points to the customer's application.</p>
   * @public
   */
  defaultReturnUrl?: string | undefined;
}

/**
 * <p>A credential provider for gateway authentication. This structure contains the configuration for authenticating with the target endpoint.</p>
 * @public
 */
export type CredentialProvider =
  | CredentialProvider.ApiKeyCredentialProviderMember
  | CredentialProvider.OauthCredentialProviderMember
  | CredentialProvider.$UnknownMember;

/**
 * @public
 */
export namespace CredentialProvider {
  /**
   * <p>The OAuth credential provider. This provider uses OAuth authentication to access the target endpoint.</p>
   * @public
   */
  export interface OauthCredentialProviderMember {
    oauthCredentialProvider: OAuthCredentialProvider;
    apiKeyCredentialProvider?: never;
    $unknown?: never;
  }

  /**
   * <p>The API key credential provider. This provider uses an API key to authenticate with the target endpoint.</p>
   * @public
   */
  export interface ApiKeyCredentialProviderMember {
    oauthCredentialProvider?: never;
    apiKeyCredentialProvider: GatewayApiKeyCredentialProvider;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    oauthCredentialProvider?: never;
    apiKeyCredentialProvider?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    oauthCredentialProvider: (value: OAuthCredentialProvider) => T;
    apiKeyCredentialProvider: (value: GatewayApiKeyCredentialProvider) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The configuration for a credential provider. This structure defines how the gateway authenticates with the target endpoint.</p>
 * @public
 */
export interface CredentialProviderConfiguration {
  /**
   * <p>The type of credential provider. This field specifies which authentication method the gateway uses.</p>
   * @public
   */
  credentialProviderType: CredentialProviderType | undefined;

  /**
   * <p>The credential provider. This field contains the specific configuration for the credential provider type.</p>
   * @public
   */
  credentialProvider?: CredentialProvider | undefined;
}

/**
 * <p>Configuration for HTTP header and query parameter propagation between the gateway and target servers.</p>
 * @public
 */
export interface MetadataConfiguration {
  /**
   * <p>A list of HTTP headers that are allowed to be propagated from incoming client requests to the target.</p>
   * @public
   */
  allowedRequestHeaders?: string[] | undefined;

  /**
   * <p>A list of URL query parameters that are allowed to be propagated from incoming gateway URL to the target.</p>
   * @public
   */
  allowedQueryParameters?: string[] | undefined;

  /**
   * <p>A list of HTTP headers that are allowed to be propagated from the target response back to the client.</p>
   * @public
   */
  allowedResponseHeaders?: string[] | undefined;
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
 * <p>The Amazon S3 configuration for a gateway. This structure defines how the gateway accesses files in Amazon S3.</p>
 * @public
 */
export interface S3Configuration {
  /**
   * <p>The URI of the Amazon S3 object. This URI specifies the location of the object in Amazon S3.</p>
   * @public
   */
  uri?: string | undefined;

  /**
   * <p>The account ID of the Amazon S3 bucket owner. This ID is used for cross-account access to the bucket.</p>
   * @public
   */
  bucketOwnerAccountId?: string | undefined;
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
}

/**
 * <p>Configuration for API schema.</p>
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
   * <p>The Amazon S3 configuration for a gateway. This structure defines how the gateway accesses files in Amazon S3.</p>
   * @public
   */
  export interface S3Member {
    s3: S3Configuration;
    inlinePayload?: never;
    $unknown?: never;
  }

  /**
   * <p>The inline payload containing the API schema definition.</p>
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
   * <p>The namespaces to use for episodic reflection. Can be less nested than the episodic namespaces.</p>
   * @public
   */
  namespaces?: string[] | undefined;
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
   * <p>The namespaces associated with the custom memory strategy.</p>
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The configuration for the custom memory strategy.</p>
   * @public
   */
  configuration?: CustomConfigurationInput | undefined;
}

/**
 * <p>An episodic reflection configuration input.</p>
 * @public
 */
export interface EpisodicReflectionConfigurationInput {
  /**
   * <p>The namespaces over which to create reflections. Can be less nested than episode namespaces.</p>
   * @public
   */
  namespaces: string[] | undefined;
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
   * <p>The namespaces for which to create episodes.</p>
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The configuration for the reflections created with the episodic memory strategy.</p>
   * @public
   */
  reflectionConfiguration?: EpisodicReflectionConfigurationInput | undefined;
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
   * <p>The namespaces associated with the semantic memory strategy.</p>
   * @public
   */
  namespaces?: string[] | undefined;
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
   * <p>The namespaces associated with the summary memory strategy.</p>
   * @public
   */
  namespaces?: string[] | undefined;
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
   * <p>The namespaces associated with the user preference memory strategy.</p>
   * @public
   */
  namespaces?: string[] | undefined;
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
   * <p>The namespaces over which reflections were created. Can be less nested than the episodic namespaces.</p>
   * @public
   */
  namespaces?: string[] | undefined;
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
   * <p>The namespaces for which to create reflections. Can be less nested than the episodic namespaces.</p>
   * @public
   */
  namespaces: string[] | undefined;
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
   * <p>The namespaces associated with the memory strategy.</p>
   * @public
   */
  namespaces: string[] | undefined;

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
   * <p>The updated namespaces for the memory strategy.</p>
   * @public
   */
  namespaces?: string[] | undefined;

  /**
   * <p>The updated configuration for the memory strategy.</p>
   * @public
   */
  configuration?: ModifyStrategyConfiguration | undefined;
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
  clientSecret: string | undefined;
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
  clientId: string | undefined;

  /**
   * <p>The client secret for the custom OAuth2 provider.</p>
   * @public
   */
  clientSecret: string | undefined;
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
  clientSecret: string | undefined;
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
  clientSecret: string | undefined;
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
  clientSecret: string | undefined;

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
  clientSecret: string | undefined;
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
  clientSecret: string | undefined;

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
  clientSecret: string | undefined;
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
  clientSecret: string | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the client secret in AWS Secrets Manager.</p>
   * @public
   */
  clientSecretArn: Secret | undefined;

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
   * <p>The Amazon Resource Name (ARN) of the client secret in AWS Secrets Manager.</p>
   * @public
   */
  clientSecretArn: Secret | undefined;

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
   * <p>The Amazon Resource Name (ARN) of the client secret in AWS Secrets Manager.</p>
   * @public
   */
  clientSecretArn: Secret | undefined;

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
  evaluators: EvaluatorReference[] | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the IAM role that grants permissions to read from CloudWatch logs, write evaluation results, and invoke Amazon Bedrock models for evaluation. </p>
   * @public
   */
  evaluationExecutionRoleArn: string | undefined;

  /**
   * <p> Whether to enable the online evaluation configuration immediately upon creation. If true, evaluation begins automatically. </p>
   * @public
   */
  enableOnCreate: boolean | undefined;
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
  evaluators: EvaluatorReference[] | undefined;

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
   * <p>A human-readable description of the policy engine's purpose.</p>
   * @public
   */
  description?: string | undefined;

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
   * <p>The human-readable description of the deleted policy engine.</p>
   * @public
   */
  description?: string | undefined;

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
   * <p>The human-readable description of the policy engine's purpose and scope. This helps administrators understand the policy engine's role in governance.</p>
   * @public
   */
  description?: string | undefined;

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
   * <p>Additional information about the policy engine status. This provides details about any failures or the current state of the policy engine.</p>
   * @public
   */
  statusReasons: string[] | undefined;
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
   * <p>A human-readable description of the policy engine's purpose and scope. Limited to 4,096 characters, this helps administrators understand the policy engine's role in the overall governance strategy.</p>
   * @public
   */
  description?: string | undefined;

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
  description?: string | undefined;
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
   * <p>The updated description of the policy engine.</p>
   * @public
   */
  description?: string | undefined;

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
   * <p>Additional information about the update status.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface GetPolicyGenerationRequest {
  /**
   * <p>The unique identifier of the policy generation request to be retrieved. This must be a valid generation ID from a previous <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_StartPolicyGeneration.html">StartPolicyGeneration</a> call.</p>
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * <p>The identifier of the policy engine associated with the policy generation request. This provides the context for the generation operation and schema validation.</p>
   * @public
   */
  policyEngineId: string | undefined;
}

/**
 * <p>Represents a resource within the AgentCore Policy system. Resources are the targets of policy evaluation. Currently, only AgentCore Gateways are supported as resources for policy enforcement.</p>
 * @public
 */
export type Resource =
  | Resource.ArnMember
  | Resource.$UnknownMember;

/**
 * @public
 */
export namespace Resource {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. This globally unique identifier specifies the exact resource that policies will be evaluated against for access control decisions. </p>
   * @public
   */
  export interface ArnMember {
    arn: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    arn?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    arn: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface GetPolicyGenerationResponse {
  /**
   * <p>The identifier of the policy engine associated with this policy generation. This confirms the policy engine context for the generation operation.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The unique identifier of the policy generation request. This matches the generation ID provided in the request and serves as the tracking identifier.</p>
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * <p>The customer-assigned name for the policy generation request. This helps identify and track generation operations across multiple requests.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy generation. This globally unique identifier can be used for tracking, auditing, and cross-service references.</p>
   * @public
   */
  policyGenerationArn: string | undefined;

  /**
   * <p>The resource information associated with the policy generation. This provides context about the target resources for which the policies are being generated.</p>
   * @public
   */
  resource: Resource | undefined;

  /**
   * <p>The timestamp when the policy generation request was created. This is used for tracking and auditing generation operations and their lifecycle.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy generation was last updated. This tracks the progress of the generation process and any status changes.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the policy generation. This indicates whether the generation is in progress, completed successfully, or failed during processing.</p>
   * @public
   */
  status: PolicyGenerationStatus | undefined;

  /**
   * <p>Additional information about the generation status. This provides details about any failures, warnings, or the current state of the generation process.</p>
   * @public
   */
  statusReasons: string[] | undefined;

  /**
   * <p>The findings and results from the policy generation process. This includes any issues, recommendations, validation results, or insights from the generated policies.</p>
   * @public
   */
  findings?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationAssetsRequest {
  /**
   * <p>The unique identifier of the policy generation request whose assets are to be retrieved. This must be a valid generation ID from a previous <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_StartPolicyGeneration.html">StartPolicyGeneration</a> call that has completed processing.</p>
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * <p>The unique identifier of the policy engine associated with the policy generation request. This provides the context for the generation operation and ensures assets are retrieved from the correct policy engine.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>A pagination token returned from a previous <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyGenerationAssets.html">ListPolicyGenerationAssets</a> call. Use this token to retrieve the next page of assets when the response is paginated due to large numbers of generated policy options.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of policy generation assets to return in a single response. If not specified, the default is 10 assets per page, with a maximum of 100 per page. This helps control response size when dealing with policy generations that produce many alternative policy options.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Represents a Cedar policy statement within the AgentCore Policy system. Cedar is a policy language designed for authorization that provides human-readable, analyzable, and high-performance policy evaluation for controlling agent behavior and access decisions. </p>
 * @public
 */
export interface CedarPolicy {
  /**
   * <p>The Cedar policy statement that defines the authorization logic. This statement follows Cedar syntax and specifies principals, actions, resources, and conditions that determine when access should be allowed or denied.</p>
   * @public
   */
  statement: string | undefined;
}

/**
 * <p>Represents the definition structure for policies within the AgentCore Policy system. This structure encapsulates different policy formats and languages that can be used to define access control rules.</p>
 * @public
 */
export type PolicyDefinition =
  | PolicyDefinition.CedarMember
  | PolicyDefinition.$UnknownMember;

/**
 * @public
 */
export namespace PolicyDefinition {
  /**
   * <p>The Cedar policy definition within the policy definition structure. This contains the Cedar policy statement that defines the authorization logic using Cedar's human-readable, analyzable policy language. Cedar policies specify principals (who can access), actions (what operations are allowed), resources (what can be accessed), and optional conditions for fine-grained control. Cedar provides a formal policy language designed for authorization with deterministic evaluation, making policies testable, reviewable, and auditable. All Cedar policies follow a default-deny model where actions are denied unless explicitly permitted, and forbid policies always override permit policies.</p>
   * @public
   */
  export interface CedarMember {
    cedar: CedarPolicy;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cedar?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cedar: (value: CedarPolicy) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Represents a finding or issue discovered during policy generation or validation. Findings provide insights about potential problems, recommendations, or validation results from policy analysis operations. Finding types include: VALID (policy is ready to use), INVALID (policy has validation errors that must be fixed), NOT_TRANSLATABLE (input couldn't be converted to policy), ALLOW_ALL (policy would allow all actions, potential security risk), ALLOW_NONE (policy would allow no actions, unusable), DENY_ALL (policy would deny all actions, may be too restrictive), and DENY_NONE (policy would deny no actions, ineffective). Review all findings before creating policies from generated assets to ensure they match your security requirements.</p>
 * @public
 */
export interface Finding {
  /**
   * <p>The type or category of the finding. This classifies the finding as an error, warning, recommendation, or informational message to help users understand the severity and nature of the issue.</p>
   * @public
   */
  type?: FindingType | undefined;

  /**
   * <p>A human-readable description of the finding. This provides detailed information about the issue, recommendation, or validation result to help users understand and address the finding. </p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>Represents a generated policy asset from the AI-powered policy generation process within the AgentCore Policy system. Each asset contains a Cedar policy statement generated from natural language input, along with associated metadata and analysis findings to help users evaluate and select the most appropriate policy option.</p>
 * @public
 */
export interface PolicyGenerationAsset {
  /**
   * <p>The unique identifier for this generated policy asset within the policy generation request. This ID can be used to reference specific generated policy options when creating actual policies from the generation results.</p>
   * @public
   */
  policyGenerationAssetId: string | undefined;

  /**
   * <p>Represents the definition structure for policies within the AgentCore Policy system. This structure encapsulates different policy formats and languages that can be used to define access control rules.</p>
   * @public
   */
  definition?: PolicyDefinition | undefined;

  /**
   * <p>The portion of the original natural language input that this generated policy asset addresses. This helps users understand which part of their policy description was translated into this specific Cedar policy statement, enabling better policy selection and refinement. When a single natural language input describes multiple authorization requirements, the generation process creates separate policy assets for each requirement, with each asset's rawTextFragment showing which requirement it addresses. Use this mapping to verify that all parts of your natural language input were correctly translated into Cedar policies.</p>
   * @public
   */
  rawTextFragment: string | undefined;

  /**
   * <p>Analysis findings and insights related to this specific generated policy asset. These findings may include validation results, potential issues, or recommendations for improvement to help users evaluate the quality and appropriateness of the generated policy.</p>
   * @public
   */
  findings: Finding[] | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationAssetsResponse {
  /**
   * <p>An array of generated policy assets including Cedar policies and related artifacts from the AI-powered policy generation process. Each asset represents a different policy option or variation generated from the original natural language input.</p>
   * @public
   */
  policyGenerationAssets?: PolicyGenerationAsset[] | undefined;

  /**
   * <p>A pagination token that can be used in subsequent <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicyGenerationAssets.html">ListPolicyGenerationAssets</a> calls to retrieve additional assets. This token is only present when there are more generated policy assets available beyond the current response.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationsRequest {
  /**
   * <p>A pagination token for retrieving additional policy generations when results are paginated.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of policy generations to return in a single response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the policy engine whose policy generations to retrieve.</p>
   * @public
   */
  policyEngineId: string | undefined;
}

/**
 * <p>Represents a policy generation request within the AgentCore Policy system. Tracks the AI-powered conversion of natural language descriptions into Cedar policy statements, enabling users to author policies by describing authorization requirements in plain English. The generation process analyzes the natural language input along with the Gateway's tool context and Cedar schema to produce one or more validated policy options. Each generation request tracks the status of the conversion process and maintains findings about the generated policies, including validation results and potential issues. Generated policy assets remain available for one week after successful generation, allowing time to review and create policies from the generated options.</p>
 * @public
 */
export interface PolicyGeneration {
  /**
   * <p>The identifier of the policy engine associated with this generation request.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The unique identifier for this policy generation request.</p>
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * <p>The customer-assigned name for this policy generation request.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of this policy generation request.</p>
   * @public
   */
  policyGenerationArn: string | undefined;

  /**
   * <p>The resource information associated with this policy generation.</p>
   * @public
   */
  resource: Resource | undefined;

  /**
   * <p>The timestamp when this policy generation request was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when this policy generation was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of this policy generation request.</p>
   * @public
   */
  status: PolicyGenerationStatus | undefined;

  /**
   * <p>Additional information about the generation status.</p>
   * @public
   */
  statusReasons: string[] | undefined;

  /**
   * <p>Findings and insights from this policy generation process.</p>
   * @public
   */
  findings?: string | undefined;
}

/**
 * @public
 */
export interface ListPolicyGenerationsResponse {
  /**
   * <p>An array of policy generation objects that match the specified criteria.</p>
   * @public
   */
  policyGenerations: PolicyGeneration[] | undefined;

  /**
   * <p>A pagination token for retrieving additional policy generations if more results are available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Represents content input for policy generation operations. This structure encapsulates the natural language descriptions or other content formats that are used as input for AI-powered policy generation.</p>
 * @public
 */
export type Content =
  | Content.RawTextMember
  | Content.$UnknownMember;

/**
 * @public
 */
export namespace Content {
  /**
   * <p>The raw text content containing natural language descriptions of desired policy behavior. This text is processed by AI to generate corresponding Cedar policy statements that match the described intent.</p>
   * @public
   */
  export interface RawTextMember {
    rawText: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    rawText?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    rawText: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartPolicyGenerationRequest {
  /**
   * <p>The identifier of the policy engine that provides the context for policy generation. This engine's schema and tool context are used to ensure generated policies are valid and applicable.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The resource information that provides context for policy generation. This helps the AI understand the target resources and generate appropriate access control rules.</p>
   * @public
   */
  resource: Resource | undefined;

  /**
   * <p>The natural language description of the desired policy behavior. This content is processed by AI to generate corresponding Cedar policy statements that match the described intent.</p>
   * @public
   */
  content: Content | undefined;

  /**
   * <p>A customer-assigned name for the policy generation request. This helps track and identify generation operations, especially when running multiple generations simultaneously.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure the idempotency of the request. The AWS SDK automatically generates this token, so you don't need to provide it in most cases. If you retry a request with the same client token, the service returns the same response without starting a duplicate generation.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartPolicyGenerationResponse {
  /**
   * <p>The identifier of the policy engine associated with the started policy generation. </p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The unique identifier assigned to the policy generation request for tracking progress. </p>
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * <p>The customer-assigned name for the policy generation request.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the created policy generation request.</p>
   * @public
   */
  policyGenerationArn: string | undefined;

  /**
   * <p>The resource information associated with the policy generation request.</p>
   * @public
   */
  resource: Resource | undefined;

  /**
   * <p>The timestamp when the policy generation request was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy generation was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The initial status of the policy generation request.</p>
   * @public
   */
  status: PolicyGenerationStatus | undefined;

  /**
   * <p>Additional information about the generation status.</p>
   * @public
   */
  statusReasons: string[] | undefined;

  /**
   * <p>Initial findings from the policy generation process.</p>
   * @public
   */
  findings?: string | undefined;
}

/**
 * @public
 */
export interface CreatePolicyRequest {
  /**
   * <p>The customer-assigned immutable name for the policy. Must be unique within the account. This name is used for policy identification and cannot be changed after creation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Cedar policy statement that defines the access control rules. This contains the actual policy logic written in Cedar policy language, specifying effect (permit or forbid), principals, actions, resources, and conditions for agent behavior control.</p>
   * @public
   */
  definition: PolicyDefinition | undefined;

  /**
   * <p>A human-readable description of the policy's purpose and functionality (1-4,096 characters). This helps policy administrators understand the policy's intent, business rules, and operational scope. Use this field to document why the policy exists, what business requirement it addresses, and any special considerations for maintenance. Clear descriptions are essential for policy governance, auditing, and troubleshooting.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The validation mode for the policy creation. Determines how Cedar analyzer validation results are handled during policy creation. FAIL_ON_ANY_FINDINGS (default) runs the Cedar analyzer to validate the policy against the Cedar schema and tool context, failing creation if the analyzer detects any validation issues to ensure strict conformance. IGNORE_ALL_FINDINGS runs the Cedar analyzer but allows policy creation even if validation issues are detected, useful for testing or when the policy schema is evolving. Use FAIL_ON_ANY_FINDINGS for production policies to ensure correctness, and IGNORE_ALL_FINDINGS only when you understand and accept the analyzer findings.</p>
   * @public
   */
  validationMode?: PolicyValidationMode | undefined;

  /**
   * <p>The identifier of the policy engine which contains this policy. Policy engines group related policies and provide the execution context for policy evaluation.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure the idempotency of the request. The AWS SDK automatically generates this token, so you don't need to provide it in most cases. If you retry a request with the same client token, the service returns the same response without creating a duplicate policy.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreatePolicyResponse {
  /**
   * <p>The unique identifier for the created policy. This is a system-generated identifier consisting of the user name plus a 10-character generated suffix, used for all subsequent policy operations.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The customer-assigned name of the created policy. This matches the name provided in the request and serves as the human-readable identifier for the policy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the policy engine that manages this policy. This confirms the policy engine assignment and is used for policy evaluation routing.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The Cedar policy statement that was created. This is the validated policy definition that will be used for agent behavior control and access decisions.</p>
   * @public
   */
  definition: PolicyDefinition | undefined;

  /**
   * <p>The human-readable description of the policy's purpose and functionality. This helps administrators understand and manage the policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp when the policy was created. This is automatically set by the service and used for auditing and lifecycle management.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy was last updated. For newly created policies, this matches the createdAt timestamp.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created policy. This globally unique identifier can be used for cross-service references and IAM policy statements.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The current status of the policy. A status of <code>ACTIVE</code> indicates the policy is ready for use.</p>
   * @public
   */
  status: PolicyStatus | undefined;

  /**
   * <p>Additional information about the policy status. This provides details about any failures or the current state of the policy creation process.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface DeletePolicyRequest {
  /**
   * <p>The identifier of the policy engine that manages the policy to be deleted. This ensures the policy is deleted from the correct policy engine context.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The unique identifier of the policy to be deleted. This must be a valid policy ID that exists within the specified policy engine.</p>
   * @public
   */
  policyId: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyResponse {
  /**
   * <p>The unique identifier of the policy being deleted. This confirms which policy the deletion operation targets.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The customer-assigned name of the deleted policy. This confirms which policy was successfully removed from the system and matches the name that was originally assigned during policy creation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the policy engine from which the policy was deleted. This confirms the policy engine context for the deletion operation.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>Represents the definition structure for policies within the AgentCore Policy system. This structure encapsulates different policy formats and languages that can be used to define access control rules.</p>
   * @public
   */
  definition: PolicyDefinition | undefined;

  /**
   * <p>The human-readable description of the deleted policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp when the deleted policy was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the deleted policy was last modified before deletion. This tracks the final state of the policy before it was removed from the system.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted policy. This globally unique identifier confirms which policy resource was successfully removed.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The status of the policy deletion operation. This provides information about any issues that occurred during the deletion process.</p>
   * @public
   */
  status: PolicyStatus | undefined;

  /**
   * <p>Additional information about the deletion status. This provides details about the deletion process or any issues that may have occurred.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface GetPolicyRequest {
  /**
   * <p>The identifier of the policy engine that manages the policy to be retrieved.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The unique identifier of the policy to be retrieved. This must be a valid policy ID that exists within the specified policy engine.</p>
   * @public
   */
  policyId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyResponse {
  /**
   * <p>The unique identifier of the retrieved policy. This matches the policy ID provided in the request and serves as the system identifier for the policy.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The customer-assigned name of the policy. This is the human-readable identifier that was specified when the policy was created.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the policy engine that manages this policy. This confirms the policy engine context for the retrieved policy.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The Cedar policy statement that defines the access control rules. This contains the actual policy logic used for agent behavior control and access decisions.</p>
   * @public
   */
  definition: PolicyDefinition | undefined;

  /**
   * <p>The human-readable description of the policy's purpose and functionality. This helps administrators understand and manage the policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp when the policy was originally created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy was last modified. This tracks the most recent changes to the policy configuration.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy. This globally unique identifier can be used for cross-service references and IAM policy statements.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The current status of the policy.</p>
   * @public
   */
  status: PolicyStatus | undefined;

  /**
   * <p>Additional information about the policy status. This provides details about any failures or the current state of the policy.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}
