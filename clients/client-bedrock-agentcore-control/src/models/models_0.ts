// smithy-typescript generated code
import type { DocumentType as __DocumentType } from "@smithy/types";

import type {
  AgentManagedRuntimeType,
  AgentRuntimeEndpointStatus,
  AgentRuntimeStatus,
  ApiKeyCredentialLocation,
  AuthorizerType,
  BrowserEnterprisePolicyType,
  BrowserNetworkMode,
  BrowserProfileStatus,
  BrowserStatus,
  ClaimMatchOperatorType,
  CodeInterpreterNetworkMode,
  CodeInterpreterStatus,
  ConfigurationBundleStatus,
  ContentLevel,
  ContentType,
  CredentialProviderType,
  EndpointIpAddressType,
  EvaluatorLevel,
  EvaluatorStatus,
  EvaluatorType,
  ExceptionLevel,
  GatewayInterceptionPoint,
  GatewayPolicyEngineMode,
  GatewayProtocolType,
  GatewayRuleStatus,
  GatewayStatus,
  HarnessStatus,
  HarnessToolType,
  HarnessTruncationStrategy,
  InboundTokenClaimValueType,
  IncludedData,
  KeyType,
  ListingMode,
  MetadataValueType,
  NetworkMode,
  OAuthGrantType,
  PrincipalMatchOperator,
  ResourceType,
  RestApiMethod,
  SearchType,
  ServerProtocol,
  TargetStatus,
} from "./enums";

/**
 * <p>The agent card definition for an A2A descriptor. Contains the schema version and inline content for the agent card.</p>
 * @public
 */
export interface AgentCardDefinition {
  /**
   * <p>The schema version of the agent card based on the A2A protocol specification.</p>
   * @public
   */
  schemaVersion?: string | undefined;

  /**
   * <p>The JSON content containing the A2A agent card definition, conforming to the A2A protocol specification.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p>The Agent-to-Agent (A2A) protocol descriptor for a registry record. Contains the agent card definition as defined by the A2A protocol specification.</p>
 * @public
 */
export interface A2aDescriptor {
  /**
   * <p>The agent card definition for the A2A agent, as defined by the A2A protocol specification.</p>
   * @public
   */
  agentCard?: AgentCardDefinition | undefined;
}

/**
 * <p>A static configuration bundle override.</p>
 * @public
 */
export interface StaticOverride {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration bundle to apply.</p>
   * @public
   */
  bundleArn: string | undefined;

  /**
   * <p>The version of the configuration bundle to apply.</p>
   * @public
   */
  bundleVersion: string | undefined;
}

/**
 * <p>A reference to a specific version of a configuration bundle.</p>
 * @public
 */
export interface ConfigurationBundleReference {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration bundle.</p>
   * @public
   */
  bundleArn: string | undefined;

  /**
   * <p>The version of the configuration bundle.</p>
   * @public
   */
  bundleVersion: string | undefined;
}

/**
 * <p>An entry in a traffic split configuration, defining a named variant with a weight and configuration bundle reference.</p>
 * @public
 */
export interface TrafficSplitEntry {
  /**
   * <p>The name of this traffic split variant.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The percentage of traffic to route to this variant. Weights across all entries must sum to 100.</p>
   * @public
   */
  weight: number | undefined;

  /**
   * <p>The configuration bundle reference for this variant.</p>
   * @public
   */
  configurationBundle: ConfigurationBundleReference | undefined;

  /**
   * <p>The description of this traffic split variant.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Key-value metadata associated with this traffic split variant.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;
}

/**
 * <p>A weighted configuration bundle override that splits traffic between multiple bundle versions.</p>
 * @public
 */
export interface WeightedOverride {
  /**
   * <p>The traffic split entries defining how traffic is distributed between configuration bundle versions.</p>
   * @public
   */
  trafficSplit: TrafficSplitEntry[] | undefined;
}

/**
 * <p>An action that applies a configuration bundle override, either as a static override or a weighted split for A/B testing.</p>
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
   * <p>A static configuration bundle override that applies a single bundle version to all matching requests.</p>
   * @public
   */
  export interface StaticOverrideMember {
    staticOverride: StaticOverride;
    weightedOverride?: never;
    $unknown?: never;
  }

  /**
   * <p>A weighted configuration bundle override that splits traffic between multiple bundle versions based on configured weights.</p>
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
 * <p>A static route to a single gateway target.</p>
 * @public
 */
export interface StaticRoute {
  /**
   * <p>The name of the target to route requests to.</p>
   * @public
   */
  targetName: string | undefined;
}

/**
 * <p>An entry in a target traffic split configuration.</p>
 * @public
 */
export interface TargetTrafficSplitEntry {
  /**
   * <p>The name of this traffic split variant.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The percentage of traffic to route to this variant.</p>
   * @public
   */
  weight: number | undefined;

  /**
   * <p>The name of the target to route traffic to.</p>
   * @public
   */
  targetName: string | undefined;

  /**
   * <p>The description of this traffic split variant.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Key-value metadata associated with this traffic split variant.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;
}

/**
 * <p>A weighted route that splits traffic between multiple gateway targets.</p>
 * @public
 */
export interface WeightedRoute {
  /**
   * <p>The traffic split entries defining how traffic is distributed between targets.</p>
   * @public
   */
  trafficSplit: TargetTrafficSplitEntry[] | undefined;
}

/**
 * <p>An action that routes requests to a gateway target, either statically or with weighted traffic splitting.</p>
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
   * <p>A static route that sends all matching requests to a single target.</p>
   * @public
   */
  export interface StaticRouteMember {
    staticRoute: StaticRoute;
    weightedRoute?: never;
    $unknown?: never;
  }

  /**
   * <p>A weighted route that splits traffic between multiple targets.</p>
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
 * <p>An action to take when a gateway rule's conditions are met.</p>
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
   * <p>An action that applies a configuration bundle override to the request.</p>
   * @public
   */
  export interface ConfigurationBundleMember {
    configurationBundle: ConfigurationBundleAction;
    routeToTarget?: never;
    $unknown?: never;
  }

  /**
   * <p>An action that routes the request to a specific target.</p>
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
   * <p>The runtime environment for executing the agent code. Specify the programming language and version to use for the agent runtime. For valid values, see the list of supported runtimes.</p>
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
 * <p>Configuration for a managed VPC Lattice resource. The gateway creates and manages the VPC Lattice resource gateway and resource configuration on your behalf using a service-linked role.</p>
 * @public
 */
export interface ManagedVpcResource {
  /**
   * <p>The ID of the VPC that contains your private resource.</p>
   * @public
   */
  vpcIdentifier: string | undefined;

  /**
   * <p>The subnet IDs within the VPC where the VPC Lattice resource gateway is placed.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The IP address type for the resource configuration endpoint.</p>
   * @public
   */
  endpointIpAddressType: EndpointIpAddressType | undefined;

  /**
   * <p>The security group IDs to associate with the VPC Lattice resource gateway. If not specified, the default security group for the VPC is used.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>Tags to apply to the managed VPC Lattice resource gateway.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>An intermediate publicly resolvable domain used as the VPC Lattice resource configuration endpoint. Required when your private endpoint uses a domain that is not publicly resolvable.</p>
   * @public
   */
  routingDomain?: string | undefined;
}

/**
 * <p>Configuration for a self-managed VPC Lattice resource. You create and manage the VPC Lattice resource gateway and resource configuration, then provide the resource configuration identifier.</p>
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
   * <p>The ARN or ID of the VPC Lattice resource configuration.</p>
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
 * <p>The private endpoint configuration for a gateway target. Defines how the gateway connects to private resources in your VPC.</p>
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
   * <p>Configuration for connecting to a private resource using a self-managed VPC Lattice resource configuration.</p>
   * @public
   */
  export interface SelfManagedLatticeResourceMember {
    selfManagedLatticeResource: SelfManagedLatticeResource;
    managedVpcResource?: never;
    $unknown?: never;
  }

  /**
   * <p>Configuration for connecting to a private resource using a managed VPC Lattice resource. The gateway creates and manages the VPC Lattice resources on your behalf.</p>
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
 * <p>A mapping of a specific domain to a private endpoint for secure connectivity through a VPC Lattice resource configuration.</p>
 * @public
 */
export interface PrivateEndpointOverride {
  /**
   * <p>The domain to override with a private endpoint.</p>
   * @public
   */
  domain: string | undefined;

  /**
   * <p>The private endpoint configuration for the specified domain.</p>
   * @public
   */
  privateEndpoint: PrivateEndpoint | undefined;
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

  /**
   * <p>The private endpoint configuration for a gateway target. Defines how the gateway connects to private resources in your VPC.</p>
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * <p>A list of private endpoint overrides for the JWT authorizer. Each override maps a specific domain to a private endpoint, enabling secure connectivity through VPC Lattice resource configurations.</p>
   * @public
   */
  privateEndpointOverrides?: PrivateEndpointOverride[] | undefined;
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
 * <p>Configuration for a session storage filesystem mounted into the AgentCore Runtime. Session storage provides persistent storage that is preserved across AgentCore Runtime session invocations.</p>
 * @public
 */
export interface SessionStorageConfiguration {
  /**
   * <p>The mount path for the session storage filesystem inside the AgentCore Runtime. The path must be under <code>/mnt</code> with exactly one subdirectory level (for example, <code>/mnt/data</code>).</p>
   * @public
   */
  mountPath: string | undefined;
}

/**
 * <p>Configuration for a filesystem that can be mounted into the AgentCore Runtime.</p>
 * @public
 */
export type FilesystemConfiguration =
  | FilesystemConfiguration.SessionStorageMember
  | FilesystemConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace FilesystemConfiguration {
  /**
   * <p>Configuration for session storage. Session storage provides persistent storage that is preserved across AgentCore Runtime session invocations.</p>
   * @public
   */
  export interface SessionStorageMember {
    sessionStorage: SessionStorageConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    sessionStorage?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    sessionStorage: (value: SessionStorageConfiguration) => T;
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
   * <p>The filesystem configurations to mount into the AgentCore Runtime. Use filesystem configurations to provide persistent storage to your AgentCore Runtime sessions.</p>
   * @public
   */
  filesystemConfigurations?: FilesystemConfiguration[] | undefined;

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
 * <p>Configuration for microVM metadata service settings.</p>
 * @public
 */
export interface RuntimeMetadataConfiguration {
  /**
   * <p>Enables MMDSv2 (microVM Metadata Service Version 2) requirement for the agent runtime. When set to <code>true</code>, the runtime microVM will only accept MMDSv2 requests.</p>
   * @public
   */
  requireMMDSV2: boolean | undefined;
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

  /**
   * <p>Configuration for microVM Metadata Service (MMDS) settings for the AgentCore Runtime.</p>
   * @public
   */
  metadataConfiguration?: RuntimeMetadataConfiguration | undefined;

  /**
   * <p>The filesystem configurations mounted into the AgentCore Runtime.</p>
   * @public
   */
  filesystemConfigurations?: FilesystemConfiguration[] | undefined;
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
 * <p>Contains information about an agent runtime. An agent runtime is the execution environment for a Amazon Bedrock AgentCore Agent.</p>
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
   * <p>The updated configuration for microVM Metadata Service (MMDS) settings for the AgentCore Runtime.</p>
   * @public
   */
  metadataConfiguration?: RuntimeMetadataConfiguration | undefined;

  /**
   * <p>Updated environment variables to set in the AgentCore Runtime environment.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>The updated filesystem configurations to mount into the AgentCore Runtime.</p>
   * @public
   */
  filesystemConfigurations?: FilesystemConfiguration[] | undefined;

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
 * <p>The structured skill definition with schema version and content.</p>
 * @public
 */
export interface SkillDefinition {
  /**
   * <p>The version of the skill definition schema.</p>
   * @public
   */
  schemaVersion?: string | undefined;

  /**
   * <p>The JSON content containing the structured skill definition.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p>The skill markdown definition for an agent skills descriptor.</p>
 * @public
 */
export interface SkillMdDefinition {
  /**
   * <p>The markdown content describing the agent's skills in a human-readable format.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p>The agent skills descriptor for a registry record. Contains an optional skill markdown definition in human-readable format and an optional structured skill definition.</p>
 * @public
 */
export interface AgentSkillsDescriptor {
  /**
   * <p>The optional skill markdown definition describing the agent's skills in a human-readable format.</p>
   * @public
   */
  skillMd?: SkillMdDefinition | undefined;

  /**
   * <p>The structured skill definition with schema version and content.</p>
   * @public
   */
  skillDefinition?: SkillDefinition | undefined;
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
 * @public
 */
export interface CreateBrowserProfileRequest {
  /**
   * <p>The name of the browser profile. The name must be unique within your account and can contain alphanumeric characters and underscores.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the browser profile. Use this field to describe the purpose or contents of the profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock AgentCore ignores the request but does not return an error.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A map of tag keys and values to assign to the browser profile. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateBrowserProfileResponse {
  /**
   * <p>The unique identifier of the created browser profile.</p>
   * @public
   */
  profileId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the created browser profile.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The timestamp when the browser profile was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The current status of the browser profile.</p>
   * @public
   */
  status: BrowserProfileStatus | undefined;
}

/**
 * @public
 */
export interface DeleteBrowserProfileRequest {
  /**
   * <p>The unique identifier of the browser profile to delete.</p>
   * @public
   */
  profileId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrowserProfileResponse {
  /**
   * <p>The unique identifier of the deleted browser profile.</p>
   * @public
   */
  profileId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the deleted browser profile.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The current status of the browser profile deletion.</p>
   * @public
   */
  status: BrowserProfileStatus | undefined;

  /**
   * <p>The timestamp when the browser profile was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The timestamp when browser session data was last saved to this profile before deletion.</p>
   * @public
   */
  lastSavedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetBrowserProfileRequest {
  /**
   * <p>The unique identifier of the browser profile to retrieve.</p>
   * @public
   */
  profileId: string | undefined;
}

/**
 * @public
 */
export interface GetBrowserProfileResponse {
  /**
   * <p>The unique identifier of the browser profile.</p>
   * @public
   */
  profileId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the browser profile.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The name of the browser profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the browser profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The current status of the browser profile.</p>
   * @public
   */
  status: BrowserProfileStatus | undefined;

  /**
   * <p>The timestamp when the browser profile was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the browser profile was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The timestamp when browser session data was last saved to this profile.</p>
   * @public
   */
  lastSavedAt?: Date | undefined;

  /**
   * <p>The identifier of the browser session from which data was last saved to this profile.</p>
   * @public
   */
  lastSavedBrowserSessionId?: string | undefined;

  /**
   * <p>The identifier of the browser from which data was last saved to this profile.</p>
   * @public
   */
  lastSavedBrowserId?: string | undefined;
}

/**
 * @public
 */
export interface ListBrowserProfilesRequest {
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
   * <p>The name of the browser profile to filter results by.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Contains summary information about a browser profile. A browser profile stores persistent browser data that can be reused across browser sessions.</p>
 * @public
 */
export interface BrowserProfileSummary {
  /**
   * <p>The unique identifier of the browser profile.</p>
   * @public
   */
  profileId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the browser profile.</p>
   * @public
   */
  profileArn: string | undefined;

  /**
   * <p>The name of the browser profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the browser profile.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The current status of the browser profile. Possible values include READY, SAVING, DELETING, and DELETED.</p>
   * @public
   */
  status: BrowserProfileStatus | undefined;

  /**
   * <p>The timestamp when the browser profile was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the browser profile was last updated.</p>
   * @public
   */
  lastUpdatedAt: Date | undefined;

  /**
   * <p>The timestamp when browser session data was last saved to this profile.</p>
   * @public
   */
  lastSavedAt?: Date | undefined;

  /**
   * <p>The identifier of the browser session from which data was last saved to this profile.</p>
   * @public
   */
  lastSavedBrowserSessionId?: string | undefined;

  /**
   * <p>The identifier of the browser from which data was last saved to this profile.</p>
   * @public
   */
  lastSavedBrowserId?: string | undefined;
}

/**
 * @public
 */
export interface ListBrowserProfilesResponse {
  /**
   * <p>The list of browser profile summaries.</p>
   * @public
   */
  profileSummaries: BrowserProfileSummary[] | undefined;

  /**
   * <p>A token to retrieve the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
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
 * <p>The Amazon Web Services Secrets Manager location configuration.</p>
 * @public
 */
export interface SecretsManagerLocation {
  /**
   * <p>The ARN of the Amazon Web Services Secrets Manager secret containing the certificate.</p>
   * @public
   */
  secretArn: string | undefined;
}

/**
 * <p>The location from which to retrieve a certificate.</p>
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
   * <p>The Amazon Web Services Secrets Manager location of the certificate.</p>
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
 * <p>A certificate to install in the browser or code interpreter.</p>
 * @public
 */
export interface Certificate {
  /**
   * <p>The location of the certificate.</p>
   * @public
   */
  location: CertificateLocation | undefined;
}

/**
 * <p>The location of a resource.</p>
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
   * <p>The Amazon S3 location for storing data. This structure defines where in Amazon S3 data is stored.</p>
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
 * <p>Browser enterprise policy configuration.</p>
 * @public
 */
export interface BrowserEnterprisePolicy {
  /**
   * <p>The location of the enterprise policy file.</p>
   * @public
   */
  location: ResourceLocation | undefined;

  /**
   * <p>The type of browser enterprise policy. Available values are <code>MANAGED</code> and <code>RECOMMENDED</code>.</p>
   * @public
   */
  type?: BrowserEnterprisePolicyType | undefined;
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
   * <p>A list of enterprise policy files for the browser.</p>
   * @public
   */
  enterprisePolicies?: BrowserEnterprisePolicy[] | undefined;

  /**
   * <p>A list of certificates to install in the browser.</p>
   * @public
   */
  certificates?: Certificate[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock AgentCore ignores the request but does not return an error.</p>
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
   * <p>The list of enterprise policy files configured for the browser.</p>
   * @public
   */
  enterprisePolicies?: BrowserEnterprisePolicy[] | undefined;

  /**
   * <p>The list of certificates configured for the browser.</p>
   * @public
   */
  certificates?: Certificate[] | undefined;

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
 * <p>Contains summary information about a browser. A browser enables Amazon Bedrock AgentCore Agent to interact with web content.</p>
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
   * <p>A list of certificates to install in the code interpreter.</p>
   * @public
   */
  certificates?: Certificate[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the operation completes no more than one time. If this token matches a previous request, Amazon Bedrock AgentCore ignores the request but does not return an error.</p>
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
   * <p>The list of certificates configured for the code interpreter.</p>
   * @public
   */
  certificates?: Certificate[] | undefined;

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
 * <p>Contains summary information about a code interpreter. A code interpreter enables Amazon Bedrock AgentCore Agent to execute code.</p>
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
 * <p>The configuration for a component within a configuration bundle. The component type is inferred from the component identifier ARN.</p>
 * @public
 */
export interface ComponentConfiguration {
  /**
   * <p>The configuration values as a flexible JSON document.</p>
   * @public
   */
  configuration: __DocumentType | undefined;
}

/**
 * <p>The source that created a configuration bundle version.</p>
 * @public
 */
export interface VersionCreatedBySource {
  /**
   * <p>The name of the source (for example, <code>user</code>, <code>optimization-job</code>, or <code>system</code>).</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source, if applicable (for example, a user ARN or optimization job ARN).</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationBundleRequest {
  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name for the configuration bundle. Names must be unique within your account.</p>
   * @public
   */
  bundleName: string | undefined;

  /**
   * <p>The description for the configuration bundle.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A map of component identifiers to their configurations. Each component represents a configurable element within the bundle.</p>
   * @public
   */
  components: Record<string, ComponentConfiguration> | undefined;

  /**
   * <p>The branch name for version tracking. Defaults to <code>mainline</code> if not specified.</p>
   * @public
   */
  branchName?: string | undefined;

  /**
   * <p>A commit message describing the initial version of the configuration bundle.</p>
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * <p>The source that created this version, including the source name and optional ARN.</p>
   * @public
   */
  createdBy?: VersionCreatedBySource | undefined;

  /**
   * <p>A map of tag keys and values to assign to the configuration bundle. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationBundleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created configuration bundle.</p>
   * @public
   */
  bundleArn: string | undefined;

  /**
   * <p>The unique identifier of the created configuration bundle.</p>
   * @public
   */
  bundleId: string | undefined;

  /**
   * <p>The initial version identifier of the configuration bundle.</p>
   * @public
   */
  versionId: string | undefined;

  /**
   * <p>The timestamp when the configuration bundle was created.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationBundleRequest {
  /**
   * <p>The unique identifier of the configuration bundle to delete.</p>
   * @public
   */
  bundleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationBundleResponse {
  /**
   * <p>The unique identifier of the deleted configuration bundle.</p>
   * @public
   */
  bundleId: string | undefined;

  /**
   * <p>The status of the configuration bundle deletion operation.</p>
   * @public
   */
  status: ConfigurationBundleStatus | undefined;
}

/**
 * @public
 */
export interface GetConfigurationBundleRequest {
  /**
   * <p>The unique identifier of the configuration bundle to retrieve.</p>
   * @public
   */
  bundleId: string | undefined;

  /**
   * <p>The branch name to get the latest version from. If not specified, returns the latest version on the mainline branch.</p>
   * @public
   */
  branchName?: string | undefined;
}

/**
 * <p>The version lineage metadata that tracks parent versions and creation source. Supports git-like two-parent merges for branch management.</p>
 * @public
 */
export interface VersionLineageMetadata {
  /**
   * <p>A list of parent version identifiers. Regular commits have 0-1 parents. Merge commits have 2 parents: the target branch parent and the source branch parent. The first parent represents the primary lineage.</p>
   * @public
   */
  parentVersionIds?: string[] | undefined;

  /**
   * <p>The branch name for this version. If not specified, inherits the parent's branch or defaults to <code>mainline</code>.</p>
   * @public
   */
  branchName?: string | undefined;

  /**
   * <p>The source that created this version.</p>
   * @public
   */
  createdBy?: VersionCreatedBySource | undefined;

  /**
   * <p>A commit message describing the changes in this version.</p>
   * @public
   */
  commitMessage?: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationBundleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration bundle.</p>
   * @public
   */
  bundleArn: string | undefined;

  /**
   * <p>The unique identifier of the configuration bundle.</p>
   * @public
   */
  bundleId: string | undefined;

  /**
   * <p>The name of the configuration bundle.</p>
   * @public
   */
  bundleName: string | undefined;

  /**
   * <p>The description of the configuration bundle.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The version identifier of this configuration bundle.</p>
   * @public
   */
  versionId: string | undefined;

  /**
   * <p>A map of component identifiers to their configurations for this version.</p>
   * @public
   */
  components: Record<string, ComponentConfiguration> | undefined;

  /**
   * <p>The version lineage metadata, including parent versions, branch name, and creation source.</p>
   * @public
   */
  lineageMetadata?: VersionLineageMetadata | undefined;

  /**
   * <p>The timestamp when the configuration bundle was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the configuration bundle was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetConfigurationBundleVersionRequest {
  /**
   * <p>The unique identifier of the configuration bundle.</p>
   * @public
   */
  bundleId: string | undefined;

  /**
   * <p>The version identifier of the configuration bundle version to retrieve.</p>
   * @public
   */
  versionId: string | undefined;
}

/**
 * @public
 */
export interface GetConfigurationBundleVersionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration bundle.</p>
   * @public
   */
  bundleArn: string | undefined;

  /**
   * <p>The unique identifier of the configuration bundle.</p>
   * @public
   */
  bundleId: string | undefined;

  /**
   * <p>The name of the configuration bundle.</p>
   * @public
   */
  bundleName: string | undefined;

  /**
   * <p>The description of the configuration bundle.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The version identifier of this configuration bundle version.</p>
   * @public
   */
  versionId: string | undefined;

  /**
   * <p>A map of component identifiers to their configurations for this version.</p>
   * @public
   */
  components: Record<string, ComponentConfiguration> | undefined;

  /**
   * <p>The version lineage metadata, including parent versions, branch name, and creation source.</p>
   * @public
   */
  lineageMetadata?: VersionLineageMetadata | undefined;

  /**
   * <p>The timestamp when the configuration bundle was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when this specific version was created.</p>
   * @public
   */
  versionCreatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListConfigurationBundlesRequest {
  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary information about a configuration bundle.</p>
 * @public
 */
export interface ConfigurationBundleSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration bundle.</p>
   * @public
   */
  bundleArn: string | undefined;

  /**
   * <p>The unique identifier of the configuration bundle.</p>
   * @public
   */
  bundleId: string | undefined;

  /**
   * <p>The name of the configuration bundle.</p>
   * @public
   */
  bundleName: string | undefined;

  /**
   * <p>The description of the configuration bundle.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationBundlesResponse {
  /**
   * <p>The list of configuration bundle summaries.</p>
   * @public
   */
  bundles: ConfigurationBundleSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>A filter for listing configuration bundle versions.</p>
 * @public
 */
export interface VersionFilter {
  /**
   * <p>Filter by branch name.</p>
   * @public
   */
  branchName?: string | undefined;

  /**
   * <p>Filter by creation source name.</p>
   * @public
   */
  createdByName?: string | undefined;

  /**
   * <p>When true, returns only the latest version for each branch. When false or not specified, returns all versions. Can be combined with <code>branchName</code> to get the latest version for a specific branch.</p>
   * @public
   */
  latestPerBranch?: boolean | undefined;
}

/**
 * @public
 */
export interface ListConfigurationBundleVersionsRequest {
  /**
   * <p>The unique identifier of the configuration bundle to list versions for.</p>
   * @public
   */
  bundleId: string | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, enter the token returned in the <code>nextToken</code> field in the response in this field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>An optional filter for listing versions, including branch name, creation source, and whether to return only the latest version per branch.</p>
   * @public
   */
  filter?: VersionFilter | undefined;
}

/**
 * <p>Summary information about a configuration bundle version.</p>
 * @public
 */
export interface ConfigurationBundleVersionSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration bundle.</p>
   * @public
   */
  bundleArn: string | undefined;

  /**
   * <p>The unique identifier of the configuration bundle.</p>
   * @public
   */
  bundleId: string | undefined;

  /**
   * <p>The version identifier of this configuration bundle version.</p>
   * @public
   */
  versionId: string | undefined;

  /**
   * <p>The version lineage metadata, including parent versions, branch name, and creation source.</p>
   * @public
   */
  lineageMetadata?: VersionLineageMetadata | undefined;

  /**
   * <p>The timestamp when this version was created.</p>
   * @public
   */
  versionCreatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListConfigurationBundleVersionsResponse {
  /**
   * <p>The list of configuration bundle version summaries.</p>
   * @public
   */
  versions: ConfigurationBundleVersionSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationBundleRequest {
  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The unique identifier of the configuration bundle to update.</p>
   * @public
   */
  bundleId: string | undefined;

  /**
   * <p>The updated name for the configuration bundle.</p>
   * @public
   */
  bundleName?: string | undefined;

  /**
   * <p>The updated description for the configuration bundle.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The updated component configurations. Creates a new version of the bundle.</p>
   * @public
   */
  components?: Record<string, ComponentConfiguration> | undefined;

  /**
   * <p>A list of parent version identifiers for lineage tracking. Regular commits have a single parent. Merge commits have two parents: the target branch parent and the source branch parent. If the branch already exists, the first parent must be the latest version on that branch.</p>
   * @public
   */
  parentVersionIds?: string[] | undefined;

  /**
   * <p>The branch name for this version. If not specified, inherits the parent's branch or defaults to <code>mainline</code>.</p>
   * @public
   */
  branchName?: string | undefined;

  /**
   * <p>A commit message describing the changes in this version.</p>
   * @public
   */
  commitMessage?: string | undefined;

  /**
   * <p>The source that created this version, including the source name and optional ARN.</p>
   * @public
   */
  createdBy?: VersionCreatedBySource | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationBundleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the updated configuration bundle.</p>
   * @public
   */
  bundleArn: string | undefined;

  /**
   * <p>The unique identifier of the updated configuration bundle.</p>
   * @public
   */
  bundleId: string | undefined;

  /**
   * <p>The new version identifier created by this update.</p>
   * @public
   */
  versionId: string | undefined;

  /**
   * <p>The timestamp when the configuration bundle was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
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
 * <p> Configuration for a Lambda function used as a code-based evaluator. </p>
 * @public
 */
export interface LambdaEvaluatorConfig {
  /**
   * <p> The Amazon Resource Name (ARN) of the Lambda function that implements the evaluation logic. </p>
   * @public
   */
  lambdaArn: string | undefined;

  /**
   * <p> The timeout in seconds for the Lambda function invocation. Defaults to 60. Must be between 1 and 300. </p>
   * @public
   */
  lambdaTimeoutInSeconds?: number | undefined;
}

/**
 * <p> Configuration for a code-based evaluator. Specify the Lambda function to use for evaluation. </p>
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
   * <p> The Lambda function configuration for code-based evaluation. </p>
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
  | EvaluatorConfig.CodeBasedMember
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
    codeBased?: never;
    $unknown?: never;
  }

  /**
   * <p> Configuration for a code-based evaluator that uses a customer-managed Lambda function to programmatically assess agent performance. </p>
   * @public
   */
  export interface CodeBasedMember {
    llmAsAJudge?: never;
    codeBased: CodeBasedEvaluatorConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    llmAsAJudge?: never;
    codeBased?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    llmAsAJudge: (value: LlmAsAJudgeEvaluatorConfig) => T;
    codeBased: (value: CodeBasedEvaluatorConfig) => T;
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
   * <p> The configuration for the evaluator. Specify either LLM-as-a-Judge settings with instructions, rating scale, and model configuration, or code-based settings with a customer-managed Lambda function. </p>
   * @public
   */
  evaluatorConfig: EvaluatorConfig | undefined;

  /**
   * <p> The evaluation level that determines the scope of evaluation. Valid values are <code>TOOL_CALL</code> for individual tool invocations, <code>TRACE</code> for single request-response interactions, or <code>SESSION</code> for entire conversation sessions. </p>
   * @public
   */
  level: EvaluatorLevel | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of a customer managed KMS key to use for encrypting sensitive evaluator data, including instructions and rating scale. If you don't specify a KMS key, the evaluator data is encrypted with an Amazon Web Services owned key. Only symmetric encryption KMS keys are supported. For more information, see <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/evaluations-encryption.html">Encryption at rest for AgentCore Evaluations</a>. </p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>A map of tag keys and values to assign to an AgentCore Evaluator. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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

  /**
   * <p> Controls which data is returned in the response. <code>ALL_DATA</code> (default) returns the full evaluator including decrypted instructions and rating scale. For evaluators encrypted with a customer managed KMS key, this requires <code>kms:Decrypt</code> permission on the key. <code>METADATA_ONLY</code> returns evaluator metadata and model configuration without instructions or rating scale, and does not require any KMS permissions. </p>
   * @public
   */
  includedData?: IncludedData | undefined;
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
   * <p> The configuration of the evaluator, including LLM-as-a-Judge or code-based settings. </p>
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

  /**
   * <p> The Amazon Resource Name (ARN) of the customer managed KMS key used to encrypt the evaluator's sensitive data. This field is only present for evaluators encrypted with a customer managed key. </p>
   * @public
   */
  kmsKeyArn?: string | undefined;
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

  /**
   * <p> The Amazon Resource Name (ARN) of the customer managed KMS key used to encrypt the evaluator's sensitive data. This field is only present for evaluators encrypted with a customer managed key. </p>
   * @public
   */
  kmsKeyArn?: string | undefined;
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
   * <p> The updated configuration for the evaluator. Specify either LLM-as-a-Judge settings with instructions, rating scale, and model configuration, or code-based settings with a customer-managed Lambda function. </p>
   * @public
   */
  evaluatorConfig?: EvaluatorConfig | undefined;

  /**
   * <p> The updated evaluation level (<code>TOOL_CALL</code>, <code>TRACE</code>, or <code>SESSION</code>) that determines the scope of evaluation. </p>
   * @public
   */
  level?: EvaluatorLevel | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of a customer managed KMS key to use for encrypting sensitive evaluator data. Specify a new key ARN to rotate the encryption key, or specify a key ARN to add encryption to an evaluator that was previously created without one. When you rotate to a new key, the service decrypts the existing data with the old key and re-encrypts it with the new key. Only symmetric encryption KMS keys are supported. For more information, see <a href="https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/evaluations-encryption.html">Encryption at rest for AgentCore Evaluations</a>. </p>
   * @public
   */
  kmsKeyArn?: string | undefined;
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
  protocolType?: GatewayProtocolType | undefined;

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
  protocolType?: GatewayProtocolType | undefined;

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
  protocolType?: GatewayProtocolType | undefined;

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
  protocolType?: GatewayProtocolType | undefined;
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
  protocolType?: GatewayProtocolType | undefined;

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
  protocolType?: GatewayProtocolType | undefined;

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
 * <p>A condition that matches requests based on the request path.</p>
 * @public
 */
export interface MatchPaths {
  /**
   * <p>A list of path patterns. The condition is met if the request path matches any of the patterns.</p>
   * @public
   */
  anyOf: string[] | undefined;
}

/**
 * <p>An IAM principal specification for rule matching.</p>
 * @public
 */
export interface IamPrincipal {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM principal. Supports user, role, and assumed-role ARNs. Wildcards can be used with the <code>StringLike</code> operator.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The match operator. <code>StringEquals</code> requires an exact match. <code>StringLike</code> supports wildcard patterns using <code>*</code> and <code>?</code>.</p>
   * @public
   */
  operator?: PrincipalMatchOperator | undefined;
}

/**
 * Union for principal matching. Currently supports IAM principal ARN glob matching.
 * Extensible for future principal types (e.g., OAuth client ID).
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
   * <p>An IAM principal to match against, specified by ARN.</p>
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
 * <p>A condition that matches requests based on the caller's identity.</p>
 * @public
 */
export interface MatchPrincipals {
  /**
   * <p>A list of principal entries. The condition is met if any of the entries match the caller's identity.</p>
   * @public
   */
  anyOf: MatchPrincipalEntry[] | undefined;
}

/**
 * <p>A condition that determines when a gateway rule applies. Conditions can match on principals or request paths.</p>
 * @public
 */
export type Condition =
  | Condition.MatchPathsMember
  | Condition.MatchPrincipalsMember
  | Condition.$UnknownMember;

/**
 * @public
 */
export namespace Condition {
  /**
   * <p>A condition that matches on the identity of the caller making the request.</p>
   * @public
   */
  export interface MatchPrincipalsMember {
    matchPrincipals: MatchPrincipals;
    matchPaths?: never;
    $unknown?: never;
  }

  /**
   * <p>A condition that matches on the request path.</p>
   * @public
   */
  export interface MatchPathsMember {
    matchPrincipals?: never;
    matchPaths: MatchPaths;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    matchPrincipals?: never;
    matchPaths?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    matchPrincipals: (value: MatchPrincipals) => T;
    matchPaths: (value: MatchPaths) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateGatewayRuleRequest {
  /**
   * <p>The identifier of the gateway to create a rule for.</p>
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The priority of the rule. Rules are evaluated in order of priority, with lower numbers evaluated first. Must be between 1 and 1,000,000.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The conditions that must be met for the rule to apply. Conditions can match on principals (IAM ARNs) or request paths.</p>
   * @public
   */
  conditions?: Condition[] | undefined;

  /**
   * <p>The actions to take when the rule conditions are met. Actions can route to a specific target or apply a configuration bundle override.</p>
   * @public
   */
  actions: Action[] | undefined;

  /**
   * <p>The description of the gateway rule.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>System-managed metadata for rules created by automated processes such as A/B tests.</p>
 * @public
 */
export interface SystemManagedBlock {
  /**
   * <p>The identifier of the system or process that manages this rule.</p>
   * @public
   */
  managedBy: string | undefined;
}

/**
 * @public
 */
export interface CreateGatewayRuleResponse {
  /**
   * <p>The unique identifier of the gateway rule.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway that the rule belongs to.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>The priority of the rule. Rules are evaluated in order of priority, with lower numbers evaluated first.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The conditions that must be met for the rule to apply.</p>
   * @public
   */
  conditions?: Condition[] | undefined;

  /**
   * <p>The actions to take when the rule conditions are met.</p>
   * @public
   */
  actions: Action[] | undefined;

  /**
   * <p>The description of the gateway rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp when the rule was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The current status of the rule.</p>
   * @public
   */
  status: GatewayRuleStatus | undefined;

  /**
   * <p>System-managed metadata for rules created by automated processes.</p>
   * @public
   */
  system?: SystemManagedBlock | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayRuleRequest {
  /**
   * <p>The identifier of the gateway containing the rule.</p>
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the rule to delete.</p>
   * @public
   */
  ruleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayRuleResponse {
  /**
   * <p>The unique identifier of the deleted rule.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The status of the rule deletion operation.</p>
   * @public
   */
  status: GatewayRuleStatus | undefined;
}

/**
 * @public
 */
export interface GetGatewayRuleRequest {
  /**
   * <p>The identifier of the gateway containing the rule.</p>
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the rule to retrieve.</p>
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
   * <p>The unique identifier of the gateway rule.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway that the rule belongs to.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>The priority of the rule. Rules are evaluated in order of priority, with lower numbers evaluated first.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The conditions that must be met for the rule to apply.</p>
   * @public
   */
  conditions?: Condition[] | undefined;

  /**
   * <p>The actions to take when the rule conditions are met.</p>
   * @public
   */
  actions: Action[] | undefined;

  /**
   * <p>The description of the gateway rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp when the rule was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The current status of the rule.</p>
   * @public
   */
  status: GatewayRuleStatus | undefined;

  /**
   * <p>System-managed metadata for rules created by automated processes.</p>
   * @public
   */
  system?: SystemManagedBlock | undefined;

  /**
   * <p>The timestamp when the rule was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListGatewayRulesRequest {
  /**
   * <p>The identifier of the gateway to list rules for.</p>
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * <p>The maximum number of results to return in the response. If the total number of results is greater than this value, use the token returned in the response in the <code>nextToken</code> field when making another request to return the next batch of results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The pagination token from a previous request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Detailed information about a gateway rule.</p>
 * @public
 */
export interface GatewayRuleDetail {
  /**
   * <p>The unique identifier of the gateway rule.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway that the rule belongs to.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>The priority of the rule. Rules are evaluated in order of priority, with lower numbers evaluated first.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The conditions that must be met for the rule to apply.</p>
   * @public
   */
  conditions?: Condition[] | undefined;

  /**
   * <p>The actions to take when the rule conditions are met.</p>
   * @public
   */
  actions: Action[] | undefined;

  /**
   * <p>The description of the gateway rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp when the rule was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The current status of the rule.</p>
   * @public
   */
  status: GatewayRuleStatus | undefined;

  /**
   * <p>System-managed metadata for rules created by automated processes.</p>
   * @public
   */
  system?: SystemManagedBlock | undefined;

  /**
   * <p>The timestamp when the rule was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface ListGatewayRulesResponse {
  /**
   * <p>The list of gateway rules.</p>
   * @public
   */
  gatewayRules: GatewayRuleDetail[] | undefined;

  /**
   * <p>The pagination token to use in a subsequent request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayRuleRequest {
  /**
   * <p>The identifier of the gateway containing the rule.</p>
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the rule to update.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The updated priority of the rule.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>The updated conditions for the rule.</p>
   * @public
   */
  conditions?: Condition[] | undefined;

  /**
   * <p>The updated actions for the rule.</p>
   * @public
   */
  actions?: Action[] | undefined;

  /**
   * <p>The updated description of the rule.</p>
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
   * <p>The unique identifier of the gateway rule.</p>
   * @public
   */
  ruleId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the gateway that the rule belongs to.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>The priority of the rule. Rules are evaluated in order of priority, with lower numbers evaluated first.</p>
   * @public
   */
  priority: number | undefined;

  /**
   * <p>The conditions that must be met for the rule to apply.</p>
   * @public
   */
  conditions?: Condition[] | undefined;

  /**
   * <p>The actions to take when the rule conditions are met.</p>
   * @public
   */
  actions: Action[] | undefined;

  /**
   * <p>The description of the gateway rule.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp when the rule was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The current status of the rule.</p>
   * @public
   */
  status: GatewayRuleStatus | undefined;

  /**
   * <p>System-managed metadata for rules created by automated processes.</p>
   * @public
   */
  system?: SystemManagedBlock | undefined;

  /**
   * <p>The timestamp when the rule was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
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
 * <p>An IAM credential provider for gateway authentication. This structure contains the configuration for authenticating with the target endpoint using IAM credentials and SigV4 signing.</p>
 * @public
 */
export interface IamCredentialProvider {
  /**
   * <p>The target Amazon Web Services service name used for SigV4 signing. This value identifies the service that the gateway authenticates with when making requests to the target endpoint.</p>
   * @public
   */
  service: string | undefined;

  /**
   * <p>The Amazon Web Services Region used for SigV4 signing. If not specified, defaults to the gateway's Region.</p>
   * @public
   */
  region?: string | undefined;
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
  | CredentialProvider.IamCredentialProviderMember
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
    iamCredentialProvider?: never;
    $unknown?: never;
  }

  /**
   * <p>The API key credential provider. This provider uses an API key to authenticate with the target endpoint.</p>
   * @public
   */
  export interface ApiKeyCredentialProviderMember {
    oauthCredentialProvider?: never;
    apiKeyCredentialProvider: GatewayApiKeyCredentialProvider;
    iamCredentialProvider?: never;
    $unknown?: never;
  }

  /**
   * <p>The IAM credential provider. This provider uses IAM authentication with SigV4 signing to access the target endpoint.</p>
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
 * <p>Configuration for an AgentCore Runtime target. Specifies the agent runtime to route requests to via HTTP.</p>
 * @public
 */
export interface RuntimeTargetConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the AgentCore Runtime to route requests to.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The qualifier for the agent runtime, used to target a specific endpoint version. If not specified, the default endpoint is used.</p>
   * @public
   */
  qualifier?: string | undefined;
}

/**
 * <p>The HTTP target configuration for a gateway target. Contains the configuration for HTTP-based target endpoints.</p>
 * @public
 */
export type HttpTargetConfiguration =
  | HttpTargetConfiguration.AgentcoreRuntimeMember
  | HttpTargetConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace HttpTargetConfiguration {
  /**
   * <p>The AgentCore Runtime target configuration for HTTP-based communication with an agent runtime.</p>
   * @public
   */
  export interface AgentcoreRuntimeMember {
    agentcoreRuntime: RuntimeTargetConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    agentcoreRuntime?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    agentcoreRuntime: (value: RuntimeTargetConfiguration) => T;
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
 * <p>The memory configuration for a harness.</p>
 * @public
 */
export type HarnessMemoryConfiguration =
  | HarnessMemoryConfiguration.AgentCoreMemoryConfigurationMember
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
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    agentCoreMemoryConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    agentCoreMemoryConfiguration: (value: HarnessAgentCoreMemoryConfiguration) => T;
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
}

/**
 * <p>Specification of which model to use.</p>
 * @public
 */
export type HarnessModelConfiguration =
  | HarnessModelConfiguration.BedrockModelConfigMember
  | HarnessModelConfiguration.GeminiModelConfigMember
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
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    bedrockModelConfig?: never;
    openAiModelConfig?: never;
    geminiModelConfig?: never;
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
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A skill available to the agent.</p>
 * @public
 */
export type HarnessSkill =
  | HarnessSkill.PathMember
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
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    path?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    path: (value: string) => T;
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
 * @public
 */
export interface Unit {}

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
   * <p>An OAuth credential provider for gateway authentication. This structure contains the configuration for authenticating with the target endpoint using OAuth.</p>
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
 * <p>Representation of a Harness.</p>
 * @public
 */
export interface Harness {
  /**
   * <p>The ID of the Harness.</p>
   * @public
   */
  harnessId: string | undefined;

  /**
   * <p>The name of the Harness.</p>
   * @public
   */
  harnessName: string | undefined;

  /**
   * <p>The ARN of the Harness.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The status of the Harness.</p>
   * @public
   */
  status: HarnessStatus | undefined;

  /**
   * <p>IAM role the Harness assumes when running.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The createdAt time of the Harness.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The updatedAt time of the Harness.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The configuration of the default model used by the Harness.</p>
   * @public
   */
  model: HarnessModelConfiguration | undefined;

  /**
   * <p>The system prompt of the Harness.</p>
   * @public
   */
  systemPrompt: HarnessSystemContentBlock[] | undefined;

  /**
   * <p>The tools of the Harness.</p>
   * @public
   */
  tools: HarnessTool[] | undefined;

  /**
   * <p>The skills of the Harness.</p>
   * @public
   */
  skills: HarnessSkill[] | undefined;

  /**
   * <p>The allowed tools of the Harness. All tools are allowed by default.</p>
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
   * <p>Environment variables exposed in the environment in which the Harness operates.</p>
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
   * <p>Configuration for extracting this metadata value from conversational content.</p>
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
   * <p>The namespaces to use for episodic reflection. Can be less nested than the episodic namespaces.</p>
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
   * <p>The namespaces associated with the custom memory strategy.</p>
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
   * <p>The namespaces over which to create reflections. Can be less nested than episode namespaces.</p>
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
   * <p>The namespaces for which to create episodes.</p>
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
   * <p>The namespaces associated with the semantic memory strategy.</p>
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
   * <p>The namespaces associated with the summary memory strategy.</p>
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
   * <p>The namespaces associated with the user preference memory strategy.</p>
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
