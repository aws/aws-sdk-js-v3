// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { BedrockAgentCoreControlServiceException as __BaseException } from "./BedrockAgentCoreControlServiceException";

/**
 * <p>This exception is thrown when a request is denied per access permissions</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>This exception is thrown when there is a conflict performing an operation</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
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
 * @enum
 */
export const AgentRuntimeEndpointStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  READY: "READY",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type AgentRuntimeEndpointStatus = (typeof AgentRuntimeEndpointStatus)[keyof typeof AgentRuntimeEndpointStatus];

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
 * <p>This exception is thrown if there was an unexpected error during processing of request</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>This exception is thrown when a request is made beyond the service quota</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>This exception is thrown when the number of requests exceeds the limit</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
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
 * @enum
 */
export const ValidationExceptionReason = {
  CANNOT_PARSE: "CannotParse",
  FIELD_VALIDATION_FAILED: "FieldValidationFailed",
  IDEMPOTENT_PARAMETER_MISMATCH_EXCEPTION: "IdempotentParameterMismatchException",
  RESOURCE_CONFLICT: "ResourceConflict",
  ROOT_EVENT_IN_OTHER_SESSION: "EventInOtherSession",
} as const;

/**
 * @public
 */
export type ValidationExceptionReason = (typeof ValidationExceptionReason)[keyof typeof ValidationExceptionReason];

/**
 * <p>The input fails to satisfy the constraints specified by the service.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  reason: ValidationExceptionReason | undefined;
  fieldList?: ValidationExceptionField[] | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.reason = opts.reason;
    this.fieldList = opts.fieldList;
  }
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
 * @public
 * @enum
 */
export const AgentManagedRuntimeType = {
  PYTHON_3_10: "PYTHON_3_10",
  PYTHON_3_11: "PYTHON_3_11",
  PYTHON_3_12: "PYTHON_3_12",
  PYTHON_3_13: "PYTHON_3_13",
} as const;

/**
 * @public
 */
export type AgentManagedRuntimeType = (typeof AgentManagedRuntimeType)[keyof typeof AgentManagedRuntimeType];

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
export type Code = Code.S3Member | Code.$UnknownMember;

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

  export interface Visitor<T> {
    s3: (value: S3Location) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Code, visitor: Visitor<T>): T => {
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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

  export interface Visitor<T> {
    containerConfiguration: (value: ContainerConfiguration) => T;
    codeConfiguration: (value: CodeConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AgentRuntimeArtifact, visitor: Visitor<T>): T => {
    if (value.containerConfiguration !== undefined) return visitor.containerConfiguration(value.containerConfiguration);
    if (value.codeConfiguration !== undefined) return visitor.codeConfiguration(value.codeConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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

  export interface Visitor<T> {
    customJWTAuthorizer: (value: CustomJWTAuthorizerConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AuthorizerConfiguration, visitor: Visitor<T>): T => {
    if (value.customJWTAuthorizer !== undefined) return visitor.customJWTAuthorizer(value.customJWTAuthorizer);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
 * @public
 * @enum
 */
export const NetworkMode = {
  PUBLIC: "PUBLIC",
  VPC: "VPC",
} as const;

/**
 * @public
 */
export type NetworkMode = (typeof NetworkMode)[keyof typeof NetworkMode];

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
 * @public
 * @enum
 */
export const ServerProtocol = {
  A2A: "A2A",
  HTTP: "HTTP",
  MCP: "MCP",
} as const;

/**
 * @public
 */
export type ServerProtocol = (typeof ServerProtocol)[keyof typeof ServerProtocol];

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

  export interface Visitor<T> {
    requestHeaderAllowlist: (value: string[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RequestHeaderConfiguration, visitor: Visitor<T>): T => {
    if (value.requestHeaderAllowlist !== undefined) return visitor.requestHeaderAllowlist(value.requestHeaderAllowlist);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
 * @public
 * @enum
 */
export const AgentRuntimeStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  READY: "READY",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type AgentRuntimeStatus = (typeof AgentRuntimeStatus)[keyof typeof AgentRuntimeStatus];

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
 * <p>Exception thrown when decryption of a secret fails.</p>
 * @public
 */
export class DecryptionFailure extends __BaseException {
  readonly name: "DecryptionFailure" = "DecryptionFailure";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DecryptionFailure, __BaseException>) {
    super({
      name: "DecryptionFailure",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DecryptionFailure.prototype);
  }
}

/**
 * <p>Exception thrown when encryption of a secret fails.</p>
 * @public
 */
export class EncryptionFailure extends __BaseException {
  readonly name: "EncryptionFailure" = "EncryptionFailure";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<EncryptionFailure, __BaseException>) {
    super({
      name: "EncryptionFailure",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, EncryptionFailure.prototype);
  }
}

/**
 * <p>Exception thrown when a resource limit is exceeded.</p>
 * @public
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
  }
}

/**
 * <p>This exception is thrown when the JWT bearer token is invalid or not found for OAuth bearer token based access</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
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
 * @public
 * @enum
 */
export const BrowserNetworkMode = {
  PUBLIC: "PUBLIC",
  VPC: "VPC",
} as const;

/**
 * @public
 */
export type BrowserNetworkMode = (typeof BrowserNetworkMode)[keyof typeof BrowserNetworkMode];

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
 * @enum
 */
export const BrowserStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  READY: "READY",
} as const;

/**
 * @public
 */
export type BrowserStatus = (typeof BrowserStatus)[keyof typeof BrowserStatus];

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
 * @enum
 */
export const ResourceType = {
  CUSTOM: "CUSTOM",
  SYSTEM: "SYSTEM",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

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
 * @public
 * @enum
 */
export const CodeInterpreterNetworkMode = {
  PUBLIC: "PUBLIC",
  SANDBOX: "SANDBOX",
  VPC: "VPC",
} as const;

/**
 * @public
 */
export type CodeInterpreterNetworkMode = (typeof CodeInterpreterNetworkMode)[keyof typeof CodeInterpreterNetworkMode];

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
 * @enum
 */
export const CodeInterpreterStatus = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  READY: "READY",
} as const;

/**
 * @public
 */
export type CodeInterpreterStatus = (typeof CodeInterpreterStatus)[keyof typeof CodeInterpreterStatus];

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
 * @enum
 */
export const AuthorizerType = {
  AWS_IAM: "AWS_IAM",
  CUSTOM_JWT: "CUSTOM_JWT",
} as const;

/**
 * @public
 */
export type AuthorizerType = (typeof AuthorizerType)[keyof typeof AuthorizerType];

/**
 * @public
 * @enum
 */
export const ExceptionLevel = {
  DEBUG: "DEBUG",
} as const;

/**
 * @public
 */
export type ExceptionLevel = (typeof ExceptionLevel)[keyof typeof ExceptionLevel];

/**
 * @public
 * @enum
 */
export const SearchType = {
  SEMANTIC: "SEMANTIC",
} as const;

/**
 * @public
 */
export type SearchType = (typeof SearchType)[keyof typeof SearchType];

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

  export interface Visitor<T> {
    mcp: (value: MCPGatewayConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: GatewayProtocolConfiguration, visitor: Visitor<T>): T => {
    if (value.mcp !== undefined) return visitor.mcp(value.mcp);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const GatewayProtocolType = {
  MCP: "MCP",
} as const;

/**
 * @public
 */
export type GatewayProtocolType = (typeof GatewayProtocolType)[keyof typeof GatewayProtocolType];

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
   * <p>The type of authorizer to use for the gateway.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> </ul>
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
 * @enum
 */
export const GatewayStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  READY: "READY",
  UPDATE_UNSUCCESSFUL: "UPDATE_UNSUCCESSFUL",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type GatewayStatus = (typeof GatewayStatus)[keyof typeof GatewayStatus];

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
 * @public
 * @enum
 */
export const ApiKeyCredentialLocation = {
  HEADER: "HEADER",
  QUERY_PARAMETER: "QUERY_PARAMETER",
} as const;

/**
 * @public
 */
export type ApiKeyCredentialLocation = (typeof ApiKeyCredentialLocation)[keyof typeof ApiKeyCredentialLocation];

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

  export interface Visitor<T> {
    oauthCredentialProvider: (value: OAuthCredentialProvider) => T;
    apiKeyCredentialProvider: (value: GatewayApiKeyCredentialProvider) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CredentialProvider, visitor: Visitor<T>): T => {
    if (value.oauthCredentialProvider !== undefined)
      return visitor.oauthCredentialProvider(value.oauthCredentialProvider);
    if (value.apiKeyCredentialProvider !== undefined)
      return visitor.apiKeyCredentialProvider(value.apiKeyCredentialProvider);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const CredentialProviderType = {
  API_KEY: "API_KEY",
  GATEWAY_IAM_ROLE: "GATEWAY_IAM_ROLE",
  OAUTH: "OAUTH",
} as const;

/**
 * @public
 */
export type CredentialProviderType = (typeof CredentialProviderType)[keyof typeof CredentialProviderType];

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
 * @public
 * @enum
 */
export const SchemaType = {
  ARRAY: "array",
  BOOLEAN: "boolean",
  INTEGER: "integer",
  NUMBER: "number",
  OBJECT: "object",
  STRING: "string",
} as const;

/**
 * @public
 */
export type SchemaType = (typeof SchemaType)[keyof typeof SchemaType];

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

  export interface Visitor<T> {
    s3: (value: S3Configuration) => T;
    inlinePayload: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ApiSchemaConfiguration, visitor: Visitor<T>): T => {
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    if (value.inlinePayload !== undefined) return visitor.inlinePayload(value.inlinePayload);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const TargetStatus = {
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  READY: "READY",
  SYNCHRONIZE_UNSUCCESSFUL: "SYNCHRONIZE_UNSUCCESSFUL",
  SYNCHRONIZING: "SYNCHRONIZING",
  UPDATE_UNSUCCESSFUL: "UPDATE_UNSUCCESSFUL",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type TargetStatus = (typeof TargetStatus)[keyof typeof TargetStatus];

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
export interface GetTokenVaultRequest {
  /**
   * <p>The unique identifier of the token vault to retrieve.</p>
   * @public
   */
  tokenVaultId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const KeyType = {
  CustomerManagedKey: "CustomerManagedKey",
  ServiceManagedKey: "ServiceManagedKey",
} as const;

/**
 * @public
 */
export type KeyType = (typeof KeyType)[keyof typeof KeyType];

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

  export interface Visitor<T> {
    messageBasedTrigger: (value: MessageBasedTriggerInput) => T;
    tokenBasedTrigger: (value: TokenBasedTriggerInput) => T;
    timeBasedTrigger: (value: TimeBasedTriggerInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TriggerConditionInput, visitor: Visitor<T>): T => {
    if (value.messageBasedTrigger !== undefined) return visitor.messageBasedTrigger(value.messageBasedTrigger);
    if (value.tokenBasedTrigger !== undefined) return visitor.tokenBasedTrigger(value.tokenBasedTrigger);
    if (value.timeBasedTrigger !== undefined) return visitor.timeBasedTrigger(value.timeBasedTrigger);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
    selfManagedConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    semanticOverride: (value: SemanticOverrideConfigurationInput) => T;
    summaryOverride: (value: SummaryOverrideConfigurationInput) => T;
    userPreferenceOverride: (value: UserPreferenceOverrideConfigurationInput) => T;
    selfManagedConfiguration: (value: SelfManagedConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CustomConfigurationInput, visitor: Visitor<T>): T => {
    if (value.semanticOverride !== undefined) return visitor.semanticOverride(value.semanticOverride);
    if (value.summaryOverride !== undefined) return visitor.summaryOverride(value.summaryOverride);
    if (value.userPreferenceOverride !== undefined) return visitor.userPreferenceOverride(value.userPreferenceOverride);
    if (value.selfManagedConfiguration !== undefined)
      return visitor.selfManagedConfiguration(value.selfManagedConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    semanticMemoryStrategy: (value: SemanticMemoryStrategyInput) => T;
    summaryMemoryStrategy: (value: SummaryMemoryStrategyInput) => T;
    userPreferenceMemoryStrategy: (value: UserPreferenceMemoryStrategyInput) => T;
    customMemoryStrategy: (value: CustomMemoryStrategyInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: MemoryStrategyInput, visitor: Visitor<T>): T => {
    if (value.semanticMemoryStrategy !== undefined) return visitor.semanticMemoryStrategy(value.semanticMemoryStrategy);
    if (value.summaryMemoryStrategy !== undefined) return visitor.summaryMemoryStrategy(value.summaryMemoryStrategy);
    if (value.userPreferenceMemoryStrategy !== undefined)
      return visitor.userPreferenceMemoryStrategy(value.userPreferenceMemoryStrategy);
    if (value.customMemoryStrategy !== undefined) return visitor.customMemoryStrategy(value.customMemoryStrategy);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
 * @public
 * @enum
 */
export const MemoryStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type MemoryStatus = (typeof MemoryStatus)[keyof typeof MemoryStatus];

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
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    semanticConsolidationOverride?: never;
    summaryConsolidationOverride?: never;
    userPreferenceConsolidationOverride?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    semanticConsolidationOverride: (value: SemanticConsolidationOverride) => T;
    summaryConsolidationOverride: (value: SummaryConsolidationOverride) => T;
    userPreferenceConsolidationOverride: (value: UserPreferenceConsolidationOverride) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CustomConsolidationConfiguration, visitor: Visitor<T>): T => {
    if (value.semanticConsolidationOverride !== undefined)
      return visitor.semanticConsolidationOverride(value.semanticConsolidationOverride);
    if (value.summaryConsolidationOverride !== undefined)
      return visitor.summaryConsolidationOverride(value.summaryConsolidationOverride);
    if (value.userPreferenceConsolidationOverride !== undefined)
      return visitor.userPreferenceConsolidationOverride(value.userPreferenceConsolidationOverride);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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

  export interface Visitor<T> {
    customConsolidationConfiguration: (value: CustomConsolidationConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ConsolidationConfiguration, visitor: Visitor<T>): T => {
    if (value.customConsolidationConfiguration !== undefined)
      return visitor.customConsolidationConfiguration(value.customConsolidationConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
    $unknown?: never;
  }

  /**
   * <p>The user preference extraction override configuration.</p>
   * @public
   */
  export interface UserPreferenceExtractionOverrideMember {
    semanticExtractionOverride?: never;
    userPreferenceExtractionOverride: UserPreferenceExtractionOverride;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    semanticExtractionOverride?: never;
    userPreferenceExtractionOverride?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    semanticExtractionOverride: (value: SemanticExtractionOverride) => T;
    userPreferenceExtractionOverride: (value: UserPreferenceExtractionOverride) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CustomExtractionConfiguration, visitor: Visitor<T>): T => {
    if (value.semanticExtractionOverride !== undefined)
      return visitor.semanticExtractionOverride(value.semanticExtractionOverride);
    if (value.userPreferenceExtractionOverride !== undefined)
      return visitor.userPreferenceExtractionOverride(value.userPreferenceExtractionOverride);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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

  export interface Visitor<T> {
    customExtractionConfiguration: (value: CustomExtractionConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ExtractionConfiguration, visitor: Visitor<T>): T => {
    if (value.customExtractionConfiguration !== undefined)
      return visitor.customExtractionConfiguration(value.customExtractionConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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

  export interface Visitor<T> {
    messageBasedTrigger: (value: MessageBasedTrigger) => T;
    tokenBasedTrigger: (value: TokenBasedTrigger) => T;
    timeBasedTrigger: (value: TimeBasedTrigger) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TriggerCondition, visitor: Visitor<T>): T => {
    if (value.messageBasedTrigger !== undefined) return visitor.messageBasedTrigger(value.messageBasedTrigger);
    if (value.tokenBasedTrigger !== undefined) return visitor.tokenBasedTrigger(value.tokenBasedTrigger);
    if (value.timeBasedTrigger !== undefined) return visitor.timeBasedTrigger(value.timeBasedTrigger);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
 * @public
 * @enum
 */
export const OverrideType = {
  SELF_MANAGED: "SELF_MANAGED",
  SEMANTIC_OVERRIDE: "SEMANTIC_OVERRIDE",
  SUMMARY_OVERRIDE: "SUMMARY_OVERRIDE",
  USER_PREFERENCE_OVERRIDE: "USER_PREFERENCE_OVERRIDE",
} as const;

/**
 * @public
 */
export type OverrideType = (typeof OverrideType)[keyof typeof OverrideType];

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
   * <p>Self-managed configuration settings.</p>
   * @public
   */
  selfManagedConfiguration?: SelfManagedConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const MemoryStrategyStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type MemoryStrategyStatus = (typeof MemoryStrategyStatus)[keyof typeof MemoryStrategyStatus];

/**
 * @public
 * @enum
 */
export const MemoryStrategyType = {
  CUSTOM: "CUSTOM",
  SEMANTIC: "SEMANTIC",
  SUMMARIZATION: "SUMMARIZATION",
  USER_PREFERENCE: "USER_PREFERENCE",
} as const;

/**
 * @public
 */
export type MemoryStrategyType = (typeof MemoryStrategyType)[keyof typeof MemoryStrategyType];

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
 * <p>An internal error occurred.</p>
 * @public
 */
export class ServiceException extends __BaseException {
  readonly name: "ServiceException" = "ServiceException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceException, __BaseException>) {
    super({
      name: "ServiceException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceException.prototype);
  }
}

/**
 * <p>API rate limit has been exceeded.</p>
 * @public
 */
export class ThrottledException extends __BaseException {
  readonly name: "ThrottledException" = "ThrottledException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottledException, __BaseException>) {
    super({
      name: "ThrottledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottledException.prototype);
  }
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
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    semanticConsolidationOverride?: never;
    summaryConsolidationOverride?: never;
    userPreferenceConsolidationOverride?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    semanticConsolidationOverride: (value: SemanticOverrideConsolidationConfigurationInput) => T;
    summaryConsolidationOverride: (value: SummaryOverrideConsolidationConfigurationInput) => T;
    userPreferenceConsolidationOverride: (value: UserPreferenceOverrideConsolidationConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CustomConsolidationConfigurationInput, visitor: Visitor<T>): T => {
    if (value.semanticConsolidationOverride !== undefined)
      return visitor.semanticConsolidationOverride(value.semanticConsolidationOverride);
    if (value.summaryConsolidationOverride !== undefined)
      return visitor.summaryConsolidationOverride(value.summaryConsolidationOverride);
    if (value.userPreferenceConsolidationOverride !== undefined)
      return visitor.userPreferenceConsolidationOverride(value.userPreferenceConsolidationOverride);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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

  export interface Visitor<T> {
    customConsolidationConfiguration: (value: CustomConsolidationConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ModifyConsolidationConfiguration, visitor: Visitor<T>): T => {
    if (value.customConsolidationConfiguration !== undefined)
      return visitor.customConsolidationConfiguration(value.customConsolidationConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Input for a custom extraction configuration.</p>
 * @public
 */
export type CustomExtractionConfigurationInput =
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
    $unknown?: never;
  }

  /**
   * <p>The user preference extraction override configuration input.</p>
   * @public
   */
  export interface UserPreferenceExtractionOverrideMember {
    semanticExtractionOverride?: never;
    userPreferenceExtractionOverride: UserPreferenceOverrideExtractionConfigurationInput;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    semanticExtractionOverride?: never;
    userPreferenceExtractionOverride?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    semanticExtractionOverride: (value: SemanticOverrideExtractionConfigurationInput) => T;
    userPreferenceExtractionOverride: (value: UserPreferenceOverrideExtractionConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CustomExtractionConfigurationInput, visitor: Visitor<T>): T => {
    if (value.semanticExtractionOverride !== undefined)
      return visitor.semanticExtractionOverride(value.semanticExtractionOverride);
    if (value.userPreferenceExtractionOverride !== undefined)
      return visitor.userPreferenceExtractionOverride(value.userPreferenceExtractionOverride);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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

  export interface Visitor<T> {
    customExtractionConfiguration: (value: CustomExtractionConfigurationInput) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ModifyExtractionConfiguration, visitor: Visitor<T>): T => {
    if (value.customExtractionConfiguration !== undefined)
      return visitor.customExtractionConfiguration(value.customExtractionConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
 * @public
 * @enum
 */
export const CredentialProviderVendorType = {
  AtlassianOauth2: "AtlassianOauth2",
  Auth0Oauth2: "Auth0Oauth2",
  CognitoOauth2: "CognitoOauth2",
  CustomOauth2: "CustomOauth2",
  CyberArkOauth2: "CyberArkOauth2",
  DropboxOauth2: "DropboxOauth2",
  FacebookOauth2: "FacebookOauth2",
  FusionAuthOauth2: "FusionAuthOauth2",
  GithubOauth2: "GithubOauth2",
  GoogleOauth2: "GoogleOauth2",
  HubspotOauth2: "HubspotOauth2",
  LinkedinOauth2: "LinkedinOauth2",
  MicrosoftOauth2: "MicrosoftOauth2",
  NotionOauth2: "NotionOauth2",
  OktaOauth2: "OktaOauth2",
  OneLoginOauth2: "OneLoginOauth2",
  PingOneOauth2: "PingOneOauth2",
  RedditOauth2: "RedditOauth2",
  SalesforceOauth2: "SalesforceOauth2",
  SlackOauth2: "SlackOauth2",
  SpotifyOauth2: "SpotifyOauth2",
  TwitchOauth2: "TwitchOauth2",
  XOauth2: "XOauth2",
  YandexOauth2: "YandexOauth2",
  ZoomOauth2: "ZoomOauth2",
} as const;

/**
 * @public
 */
export type CredentialProviderVendorType =
  (typeof CredentialProviderVendorType)[keyof typeof CredentialProviderVendorType];

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

  export interface Visitor<T> {
    discoveryUrl: (value: string) => T;
    authorizationServerMetadata: (value: Oauth2AuthorizationServerMetadata) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Oauth2Discovery, visitor: Visitor<T>): T => {
    if (value.discoveryUrl !== undefined) return visitor.discoveryUrl(value.discoveryUrl);
    if (value.authorizationServerMetadata !== undefined)
      return visitor.authorizationServerMetadata(value.authorizationServerMetadata);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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

  export const visit = <T>(value: Oauth2ProviderConfigInput, visitor: Visitor<T>): T => {
    if (value.customOauth2ProviderConfig !== undefined)
      return visitor.customOauth2ProviderConfig(value.customOauth2ProviderConfig);
    if (value.googleOauth2ProviderConfig !== undefined)
      return visitor.googleOauth2ProviderConfig(value.googleOauth2ProviderConfig);
    if (value.githubOauth2ProviderConfig !== undefined)
      return visitor.githubOauth2ProviderConfig(value.githubOauth2ProviderConfig);
    if (value.slackOauth2ProviderConfig !== undefined)
      return visitor.slackOauth2ProviderConfig(value.slackOauth2ProviderConfig);
    if (value.salesforceOauth2ProviderConfig !== undefined)
      return visitor.salesforceOauth2ProviderConfig(value.salesforceOauth2ProviderConfig);
    if (value.microsoftOauth2ProviderConfig !== undefined)
      return visitor.microsoftOauth2ProviderConfig(value.microsoftOauth2ProviderConfig);
    if (value.atlassianOauth2ProviderConfig !== undefined)
      return visitor.atlassianOauth2ProviderConfig(value.atlassianOauth2ProviderConfig);
    if (value.linkedinOauth2ProviderConfig !== undefined)
      return visitor.linkedinOauth2ProviderConfig(value.linkedinOauth2ProviderConfig);
    if (value.includedOauth2ProviderConfig !== undefined)
      return visitor.includedOauth2ProviderConfig(value.includedOauth2ProviderConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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

  export const visit = <T>(value: Oauth2ProviderConfigOutput, visitor: Visitor<T>): T => {
    if (value.customOauth2ProviderConfig !== undefined)
      return visitor.customOauth2ProviderConfig(value.customOauth2ProviderConfig);
    if (value.googleOauth2ProviderConfig !== undefined)
      return visitor.googleOauth2ProviderConfig(value.googleOauth2ProviderConfig);
    if (value.githubOauth2ProviderConfig !== undefined)
      return visitor.githubOauth2ProviderConfig(value.githubOauth2ProviderConfig);
    if (value.slackOauth2ProviderConfig !== undefined)
      return visitor.slackOauth2ProviderConfig(value.slackOauth2ProviderConfig);
    if (value.salesforceOauth2ProviderConfig !== undefined)
      return visitor.salesforceOauth2ProviderConfig(value.salesforceOauth2ProviderConfig);
    if (value.microsoftOauth2ProviderConfig !== undefined)
      return visitor.microsoftOauth2ProviderConfig(value.microsoftOauth2ProviderConfig);
    if (value.atlassianOauth2ProviderConfig !== undefined)
      return visitor.atlassianOauth2ProviderConfig(value.atlassianOauth2ProviderConfig);
    if (value.linkedinOauth2ProviderConfig !== undefined)
      return visitor.linkedinOauth2ProviderConfig(value.linkedinOauth2ProviderConfig);
    if (value.includedOauth2ProviderConfig !== undefined)
      return visitor.includedOauth2ProviderConfig(value.includedOauth2ProviderConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
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
 * <p>Exception thrown when a resource is modified concurrently by multiple requests.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}

/**
 * @public
 */
export interface SetTokenVaultCMKRequest {
  /**
   * <p>The unique identifier of the token vault to update.</p>
   * @public
   */
  tokenVaultId?: string | undefined;

  /**
   * <p>The KMS configuration for the token vault, including the key type and KMS key ARN.</p>
   * @public
   */
  kmsConfiguration: KmsConfiguration | undefined;
}

/**
 * @public
 */
export interface SetTokenVaultCMKResponse {
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
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is a key-value pair.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the resource that you want to untag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys of the tags to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface CreateWorkloadIdentityRequest {
  /**
   * <p>The name of the workload identity. The name must be unique within your account.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The list of allowed OAuth2 return URLs for resources associated with this workload identity.</p>
   * @public
   */
  allowedResourceOauth2ReturnUrls?: string[] | undefined;

  /**
   * <p>A map of tag keys and values to assign to the workload identity. Tags enable you to categorize your resources in different ways, for example, by purpose, owner, or environment.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateWorkloadIdentityResponse {
  /**
   * <p>The name of the workload identity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workload identity.</p>
   * @public
   */
  workloadIdentityArn: string | undefined;

  /**
   * <p>The list of allowed OAuth2 return URLs for resources associated with this workload identity.</p>
   * @public
   */
  allowedResourceOauth2ReturnUrls?: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteWorkloadIdentityRequest {
  /**
   * <p>The name of the workload identity to delete.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkloadIdentityResponse {}

/**
 * @public
 */
export interface GetWorkloadIdentityRequest {
  /**
   * <p>The name of the workload identity to retrieve.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetWorkloadIdentityResponse {
  /**
   * <p>The name of the workload identity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workload identity.</p>
   * @public
   */
  workloadIdentityArn: string | undefined;

  /**
   * <p>The list of allowed OAuth2 return URLs for resources associated with this workload identity.</p>
   * @public
   */
  allowedResourceOauth2ReturnUrls?: string[] | undefined;

  /**
   * <p>The timestamp when the workload identity was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the workload identity was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListWorkloadIdentitiesRequest {
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
 * <p>Contains information about a workload identity.</p>
 * @public
 */
export interface WorkloadIdentityType {
  /**
   * <p>The name of the workload identity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workload identity.</p>
   * @public
   */
  workloadIdentityArn: string | undefined;
}

/**
 * @public
 */
export interface ListWorkloadIdentitiesResponse {
  /**
   * <p>The list of workload identities.</p>
   * @public
   */
  workloadIdentities: WorkloadIdentityType[] | undefined;

  /**
   * <p>Pagination token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateWorkloadIdentityRequest {
  /**
   * <p>The name of the workload identity to update.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The new list of allowed OAuth2 return URLs for resources associated with this workload identity. This list replaces the existing list.</p>
   * @public
   */
  allowedResourceOauth2ReturnUrls?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateWorkloadIdentityResponse {
  /**
   * <p>The name of the workload identity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the workload identity.</p>
   * @public
   */
  workloadIdentityArn: string | undefined;

  /**
   * <p>The list of allowed OAuth2 return URLs for resources associated with this workload identity.</p>
   * @public
   */
  allowedResourceOauth2ReturnUrls?: string[] | undefined;

  /**
   * <p>The timestamp when the workload identity was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the workload identity was last updated.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * <p>A schema definition for a gateway target. This structure defines the structure of the API that the target exposes.</p>
 * @public
 */
export interface SchemaDefinition {
  /**
   * <p>The type of the schema definition. This field specifies the data type of the schema.</p>
   * @public
   */
  type: SchemaType | undefined;

  /**
   * <p>The properties of the schema definition. These properties define the fields in the schema.</p>
   * @public
   */
  properties?: Record<string, SchemaDefinition> | undefined;

  /**
   * <p>The required fields in the schema definition. These fields must be provided when using the schema.</p>
   * @public
   */
  required?: string[] | undefined;

  /**
   * <p>The items in the schema definition. This field is used for array types to define the structure of the array elements.</p>
   * @public
   */
  items?: SchemaDefinition | undefined;

  /**
   * <p>The description of the schema definition. This description provides information about the purpose and usage of the schema.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>A tool definition for a gateway target. This structure defines a tool that the target exposes through the Model Context Protocol.</p>
 * @public
 */
export interface ToolDefinition {
  /**
   * <p>The name of the tool. This name identifies the tool in the Model Context Protocol.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the tool. This description provides information about the purpose and usage of the tool.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The input schema for the tool. This schema defines the structure of the input that the tool accepts.</p>
   * @public
   */
  inputSchema: SchemaDefinition | undefined;

  /**
   * <p>The output schema for the tool. This schema defines the structure of the output that the tool produces.</p>
   * @public
   */
  outputSchema?: SchemaDefinition | undefined;
}

/**
 * <p>A tool schema for a gateway target. This structure defines the schema for a tool that the target exposes through the Model Context Protocol.</p>
 * @public
 */
export type ToolSchema = ToolSchema.InlinePayloadMember | ToolSchema.S3Member | ToolSchema.$UnknownMember;

/**
 * @public
 */
export namespace ToolSchema {
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
   * <p>The inline payload of the tool schema. This payload contains the schema definition directly in the request.</p>
   * @public
   */
  export interface InlinePayloadMember {
    s3?: never;
    inlinePayload: ToolDefinition[];
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

  export interface Visitor<T> {
    s3: (value: S3Configuration) => T;
    inlinePayload: (value: ToolDefinition[]) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ToolSchema, visitor: Visitor<T>): T => {
    if (value.s3 !== undefined) return visitor.s3(value.s3);
    if (value.inlinePayload !== undefined) return visitor.inlinePayload(value.inlinePayload);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The Lambda configuration for a Model Context Protocol target. This structure defines how the gateway uses a Lambda function to communicate with the target.</p>
 * @public
 */
export interface McpLambdaTargetConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function. This function is invoked by the gateway to communicate with the target.</p>
   * @public
   */
  lambdaArn: string | undefined;

  /**
   * <p>The tool schema for the Lambda function. This schema defines the structure of the tools that the Lambda function provides.</p>
   * @public
   */
  toolSchema: ToolSchema | undefined;
}

/**
 * <p>The Model Context Protocol (MCP) configuration for a target. This structure defines how the gateway uses MCP to communicate with the target.</p>
 * @public
 */
export type McpTargetConfiguration =
  | McpTargetConfiguration.LambdaMember
  | McpTargetConfiguration.McpServerMember
  | McpTargetConfiguration.OpenApiSchemaMember
  | McpTargetConfiguration.SmithyModelMember
  | McpTargetConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace McpTargetConfiguration {
  /**
   * <p>The OpenAPI schema for the Model Context Protocol target. This schema defines the API structure of the target.</p>
   * @public
   */
  export interface OpenApiSchemaMember {
    openApiSchema: ApiSchemaConfiguration;
    smithyModel?: never;
    lambda?: never;
    mcpServer?: never;
    $unknown?: never;
  }

  /**
   * <p>The Smithy model for the Model Context Protocol target. This model defines the API structure of the target using the Smithy specification.</p>
   * @public
   */
  export interface SmithyModelMember {
    openApiSchema?: never;
    smithyModel: ApiSchemaConfiguration;
    lambda?: never;
    mcpServer?: never;
    $unknown?: never;
  }

  /**
   * <p>The Lambda configuration for the Model Context Protocol target. This configuration defines how the gateway uses a Lambda function to communicate with the target.</p>
   * @public
   */
  export interface LambdaMember {
    openApiSchema?: never;
    smithyModel?: never;
    lambda: McpLambdaTargetConfiguration;
    mcpServer?: never;
    $unknown?: never;
  }

  /**
   * <p>The MCP server specified as the gateway target.</p>
   * @public
   */
  export interface McpServerMember {
    openApiSchema?: never;
    smithyModel?: never;
    lambda?: never;
    mcpServer: McpServerTargetConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    openApiSchema?: never;
    smithyModel?: never;
    lambda?: never;
    mcpServer?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    openApiSchema: (value: ApiSchemaConfiguration) => T;
    smithyModel: (value: ApiSchemaConfiguration) => T;
    lambda: (value: McpLambdaTargetConfiguration) => T;
    mcpServer: (value: McpServerTargetConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: McpTargetConfiguration, visitor: Visitor<T>): T => {
    if (value.openApiSchema !== undefined) return visitor.openApiSchema(value.openApiSchema);
    if (value.smithyModel !== undefined) return visitor.smithyModel(value.smithyModel);
    if (value.lambda !== undefined) return visitor.lambda(value.lambda);
    if (value.mcpServer !== undefined) return visitor.mcpServer(value.mcpServer);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>The configuration for a gateway target. This structure defines how the gateway connects to and interacts with the target endpoint.</p>
 * @public
 */
export type TargetConfiguration = TargetConfiguration.McpMember | TargetConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace TargetConfiguration {
  /**
   * <p>The Model Context Protocol (MCP) configuration for the target. This configuration defines how the gateway uses MCP to communicate with the target.</p>
   * @public
   */
  export interface McpMember {
    mcp: McpTargetConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    mcp?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    mcp: (value: McpTargetConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: TargetConfiguration, visitor: Visitor<T>): T => {
    if (value.mcp !== undefined) return visitor.mcp(value.mcp);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateGatewayTargetRequest {
  /**
   * <p>The identifier of the gateway to create a target for.</p>
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * <p>The name of the gateway target. The name must be unique within the gateway.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the gateway target.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The configuration settings for the target, including endpoint information and schema definitions.</p>
   * @public
   */
  targetConfiguration: TargetConfiguration | undefined;

  /**
   * <p>The credential provider configurations for the target. These configurations specify how the gateway authenticates with the target endpoint.</p>
   * @public
   */
  credentialProviderConfigurations?: CredentialProviderConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateGatewayTargetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>The unique identifier of the created target.</p>
   * @public
   */
  targetId: string | undefined;

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
   * <p>The current status of the target.</p>
   * @public
   */
  status: TargetStatus | undefined;

  /**
   * <p>The reasons for the current status of the target.</p>
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * <p>The name of the target.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the target.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration settings for the target.</p>
   * @public
   */
  targetConfiguration: TargetConfiguration | undefined;

  /**
   * <p>The credential provider configurations for the target.</p>
   * @public
   */
  credentialProviderConfigurations: CredentialProviderConfiguration[] | undefined;

  /**
   * <p>The last synchronization of the target.</p>
   * @public
   */
  lastSynchronizedAt?: Date | undefined;
}

/**
 * <p>The gateway target.</p>
 * @public
 */
export interface GatewayTarget {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway target.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>The target ID.</p>
   * @public
   */
  targetId: string | undefined;

  /**
   * <p>The date and time at which the target was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The date and time at which the target was updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The status of the gateway target.</p>
   * @public
   */
  status: TargetStatus | undefined;

  /**
   * <p>The status reasons for the target status.</p>
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * <p>The name of the gateway target.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description for the gateway target.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration for a gateway target. This structure defines how the gateway connects to and interacts with the target endpoint.</p>
   * @public
   */
  targetConfiguration: TargetConfiguration | undefined;

  /**
   * <p>The provider configurations.</p>
   * @public
   */
  credentialProviderConfigurations: CredentialProviderConfiguration[] | undefined;

  /**
   * <p>The last synchronization time.</p>
   * @public
   */
  lastSynchronizedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetGatewayTargetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>The unique identifier of the gateway target.</p>
   * @public
   */
  targetId: string | undefined;

  /**
   * <p>The timestamp when the gateway target was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the gateway target was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the gateway target.</p>
   * @public
   */
  status: TargetStatus | undefined;

  /**
   * <p>The reasons for the current status of the gateway target.</p>
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * <p>The name of the gateway target.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the gateway target.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration for a gateway target. This structure defines how the gateway connects to and interacts with the target endpoint.</p>
   * @public
   */
  targetConfiguration: TargetConfiguration | undefined;

  /**
   * <p>The credential provider configurations for the gateway target.</p>
   * @public
   */
  credentialProviderConfigurations: CredentialProviderConfiguration[] | undefined;

  /**
   * <p>The last synchronization of the target.</p>
   * @public
   */
  lastSynchronizedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayTargetRequest {
  /**
   * <p>The unique identifier of the gateway associated with the target.</p>
   * @public
   */
  gatewayIdentifier: string | undefined;

  /**
   * <p>The unique identifier of the gateway target to update.</p>
   * @public
   */
  targetId: string | undefined;

  /**
   * <p>The updated name for the gateway target.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The updated description for the gateway target.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration for a gateway target. This structure defines how the gateway connects to and interacts with the target endpoint.</p>
   * @public
   */
  targetConfiguration: TargetConfiguration | undefined;

  /**
   * <p>The updated credential provider configurations for the gateway target.</p>
   * @public
   */
  credentialProviderConfigurations?: CredentialProviderConfiguration[] | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayTargetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the gateway.</p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>The unique identifier of the updated gateway target.</p>
   * @public
   */
  targetId: string | undefined;

  /**
   * <p>The timestamp when the gateway target was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the gateway target was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The current status of the updated gateway target.</p>
   * @public
   */
  status: TargetStatus | undefined;

  /**
   * <p>The reasons for the current status of the updated gateway target.</p>
   * @public
   */
  statusReasons?: string[] | undefined;

  /**
   * <p>The updated name of the gateway target.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The updated description of the gateway target.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration for a gateway target. This structure defines how the gateway connects to and interacts with the target endpoint.</p>
   * @public
   */
  targetConfiguration: TargetConfiguration | undefined;

  /**
   * <p>The updated credential provider configurations for the gateway target.</p>
   * @public
   */
  credentialProviderConfigurations: CredentialProviderConfiguration[] | undefined;

  /**
   * <p>The date and time at which the targets were last synchronized.</p>
   * @public
   */
  lastSynchronizedAt?: Date | undefined;
}

/**
 * @public
 */
export interface SynchronizeGatewayTargetsResponse {
  /**
   * <p>The gateway targets for synchronization.</p>
   * @public
   */
  targets?: GatewayTarget[] | undefined;
}

/**
 * @internal
 */
export const CreateAgentRuntimeEndpointRequestFilterSensitiveLog = (obj: CreateAgentRuntimeEndpointRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAgentRuntimeEndpointResponseFilterSensitiveLog = (obj: CreateAgentRuntimeEndpointResponse): any => ({
  ...obj,
  ...(obj.endpointName && { endpointName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteAgentRuntimeEndpointRequestFilterSensitiveLog = (obj: DeleteAgentRuntimeEndpointRequest): any => ({
  ...obj,
  ...(obj.endpointName && { endpointName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DeleteAgentRuntimeEndpointResponseFilterSensitiveLog = (obj: DeleteAgentRuntimeEndpointResponse): any => ({
  ...obj,
  ...(obj.endpointName && { endpointName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetAgentRuntimeEndpointRequestFilterSensitiveLog = (obj: GetAgentRuntimeEndpointRequest): any => ({
  ...obj,
  ...(obj.endpointName && { endpointName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetAgentRuntimeEndpointResponseFilterSensitiveLog = (obj: GetAgentRuntimeEndpointResponse): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const AgentRuntimeEndpointFilterSensitiveLog = (obj: AgentRuntimeEndpoint): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAgentRuntimeEndpointsResponseFilterSensitiveLog = (obj: ListAgentRuntimeEndpointsResponse): any => ({
  ...obj,
  ...(obj.runtimeEndpoints && {
    runtimeEndpoints: obj.runtimeEndpoints.map((item) => AgentRuntimeEndpointFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateAgentRuntimeEndpointRequestFilterSensitiveLog = (obj: UpdateAgentRuntimeEndpointRequest): any => ({
  ...obj,
  ...(obj.endpointName && { endpointName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAgentRuntimeRequestFilterSensitiveLog = (obj: CreateAgentRuntimeRequest): any => ({
  ...obj,
  ...(obj.agentRuntimeArtifact && { agentRuntimeArtifact: obj.agentRuntimeArtifact }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.authorizerConfiguration && { authorizerConfiguration: obj.authorizerConfiguration }),
  ...(obj.requestHeaderConfiguration && { requestHeaderConfiguration: obj.requestHeaderConfiguration }),
  ...(obj.environmentVariables && { environmentVariables: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetAgentRuntimeResponseFilterSensitiveLog = (obj: GetAgentRuntimeResponse): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.agentRuntimeArtifact && { agentRuntimeArtifact: obj.agentRuntimeArtifact }),
  ...(obj.environmentVariables && { environmentVariables: SENSITIVE_STRING }),
  ...(obj.authorizerConfiguration && { authorizerConfiguration: obj.authorizerConfiguration }),
  ...(obj.requestHeaderConfiguration && { requestHeaderConfiguration: obj.requestHeaderConfiguration }),
});

/**
 * @internal
 */
export const AgentRuntimeFilterSensitiveLog = (obj: AgentRuntime): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListAgentRuntimesResponseFilterSensitiveLog = (obj: ListAgentRuntimesResponse): any => ({
  ...obj,
  ...(obj.agentRuntimes && { agentRuntimes: obj.agentRuntimes.map((item) => AgentRuntimeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListAgentRuntimeVersionsResponseFilterSensitiveLog = (obj: ListAgentRuntimeVersionsResponse): any => ({
  ...obj,
  ...(obj.agentRuntimes && { agentRuntimes: obj.agentRuntimes.map((item) => AgentRuntimeFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateAgentRuntimeRequestFilterSensitiveLog = (obj: UpdateAgentRuntimeRequest): any => ({
  ...obj,
  ...(obj.agentRuntimeArtifact && { agentRuntimeArtifact: obj.agentRuntimeArtifact }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.authorizerConfiguration && { authorizerConfiguration: obj.authorizerConfiguration }),
  ...(obj.requestHeaderConfiguration && { requestHeaderConfiguration: obj.requestHeaderConfiguration }),
  ...(obj.environmentVariables && { environmentVariables: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateApiKeyCredentialProviderRequestFilterSensitiveLog = (
  obj: CreateApiKeyCredentialProviderRequest
): any => ({
  ...obj,
  ...(obj.apiKey && { apiKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateApiKeyCredentialProviderRequestFilterSensitiveLog = (
  obj: UpdateApiKeyCredentialProviderRequest
): any => ({
  ...obj,
  ...(obj.apiKey && { apiKey: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateBrowserRequestFilterSensitiveLog = (obj: CreateBrowserRequest): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetBrowserResponseFilterSensitiveLog = (obj: GetBrowserResponse): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BrowserSummaryFilterSensitiveLog = (obj: BrowserSummary): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListBrowsersResponseFilterSensitiveLog = (obj: ListBrowsersResponse): any => ({
  ...obj,
  ...(obj.browserSummaries && {
    browserSummaries: obj.browserSummaries.map((item) => BrowserSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateCodeInterpreterRequestFilterSensitiveLog = (obj: CreateCodeInterpreterRequest): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetCodeInterpreterResponseFilterSensitiveLog = (obj: GetCodeInterpreterResponse): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CodeInterpreterSummaryFilterSensitiveLog = (obj: CodeInterpreterSummary): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListCodeInterpretersResponseFilterSensitiveLog = (obj: ListCodeInterpretersResponse): any => ({
  ...obj,
  ...(obj.codeInterpreterSummaries && {
    codeInterpreterSummaries: obj.codeInterpreterSummaries.map((item) =>
      CodeInterpreterSummaryFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const CreateGatewayRequestFilterSensitiveLog = (obj: CreateGatewayRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.protocolConfiguration && { protocolConfiguration: obj.protocolConfiguration }),
  ...(obj.authorizerConfiguration && { authorizerConfiguration: obj.authorizerConfiguration }),
});

/**
 * @internal
 */
export const CreateGatewayResponseFilterSensitiveLog = (obj: CreateGatewayResponse): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.protocolConfiguration && { protocolConfiguration: obj.protocolConfiguration }),
  ...(obj.authorizerConfiguration && { authorizerConfiguration: obj.authorizerConfiguration }),
});

/**
 * @internal
 */
export const GetGatewayResponseFilterSensitiveLog = (obj: GetGatewayResponse): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.protocolConfiguration && { protocolConfiguration: obj.protocolConfiguration }),
  ...(obj.authorizerConfiguration && { authorizerConfiguration: obj.authorizerConfiguration }),
});

/**
 * @internal
 */
export const GatewaySummaryFilterSensitiveLog = (obj: GatewaySummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListGatewaysResponseFilterSensitiveLog = (obj: ListGatewaysResponse): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => GatewaySummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateGatewayRequestFilterSensitiveLog = (obj: UpdateGatewayRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.protocolConfiguration && { protocolConfiguration: obj.protocolConfiguration }),
  ...(obj.authorizerConfiguration && { authorizerConfiguration: obj.authorizerConfiguration }),
});

/**
 * @internal
 */
export const UpdateGatewayResponseFilterSensitiveLog = (obj: UpdateGatewayResponse): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.protocolConfiguration && { protocolConfiguration: obj.protocolConfiguration }),
  ...(obj.authorizerConfiguration && { authorizerConfiguration: obj.authorizerConfiguration }),
});

/**
 * @internal
 */
export const OAuthCredentialProviderFilterSensitiveLog = (obj: OAuthCredentialProvider): any => ({
  ...obj,
  ...(obj.customParameters && { customParameters: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CredentialProviderFilterSensitiveLog = (obj: CredentialProvider): any => {
  if (obj.oauthCredentialProvider !== undefined)
    return { oauthCredentialProvider: OAuthCredentialProviderFilterSensitiveLog(obj.oauthCredentialProvider) };
  if (obj.apiKeyCredentialProvider !== undefined) return { apiKeyCredentialProvider: obj.apiKeyCredentialProvider };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CredentialProviderConfigurationFilterSensitiveLog = (obj: CredentialProviderConfiguration): any => ({
  ...obj,
  ...(obj.credentialProvider && { credentialProvider: CredentialProviderFilterSensitiveLog(obj.credentialProvider) }),
});

/**
 * @internal
 */
export const ApiSchemaConfigurationFilterSensitiveLog = (obj: ApiSchemaConfiguration): any => {
  if (obj.s3 !== undefined) return { s3: obj.s3 };
  if (obj.inlinePayload !== undefined) return { inlinePayload: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const TargetSummaryFilterSensitiveLog = (obj: TargetSummary): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListGatewayTargetsResponseFilterSensitiveLog = (obj: ListGatewayTargetsResponse): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => TargetSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const SemanticOverrideConsolidationConfigurationInputFilterSensitiveLog = (
  obj: SemanticOverrideConsolidationConfigurationInput
): any => ({
  ...obj,
  ...(obj.appendToPrompt && { appendToPrompt: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SemanticOverrideExtractionConfigurationInputFilterSensitiveLog = (
  obj: SemanticOverrideExtractionConfigurationInput
): any => ({
  ...obj,
  ...(obj.appendToPrompt && { appendToPrompt: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SemanticOverrideConfigurationInputFilterSensitiveLog = (obj: SemanticOverrideConfigurationInput): any => ({
  ...obj,
  ...(obj.extraction && { extraction: SemanticOverrideExtractionConfigurationInputFilterSensitiveLog(obj.extraction) }),
  ...(obj.consolidation && {
    consolidation: SemanticOverrideConsolidationConfigurationInputFilterSensitiveLog(obj.consolidation),
  }),
});

/**
 * @internal
 */
export const SummaryOverrideConsolidationConfigurationInputFilterSensitiveLog = (
  obj: SummaryOverrideConsolidationConfigurationInput
): any => ({
  ...obj,
  ...(obj.appendToPrompt && { appendToPrompt: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SummaryOverrideConfigurationInputFilterSensitiveLog = (obj: SummaryOverrideConfigurationInput): any => ({
  ...obj,
  ...(obj.consolidation && {
    consolidation: SummaryOverrideConsolidationConfigurationInputFilterSensitiveLog(obj.consolidation),
  }),
});

/**
 * @internal
 */
export const UserPreferenceOverrideConsolidationConfigurationInputFilterSensitiveLog = (
  obj: UserPreferenceOverrideConsolidationConfigurationInput
): any => ({
  ...obj,
  ...(obj.appendToPrompt && { appendToPrompt: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UserPreferenceOverrideExtractionConfigurationInputFilterSensitiveLog = (
  obj: UserPreferenceOverrideExtractionConfigurationInput
): any => ({
  ...obj,
  ...(obj.appendToPrompt && { appendToPrompt: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UserPreferenceOverrideConfigurationInputFilterSensitiveLog = (
  obj: UserPreferenceOverrideConfigurationInput
): any => ({
  ...obj,
  ...(obj.extraction && {
    extraction: UserPreferenceOverrideExtractionConfigurationInputFilterSensitiveLog(obj.extraction),
  }),
  ...(obj.consolidation && {
    consolidation: UserPreferenceOverrideConsolidationConfigurationInputFilterSensitiveLog(obj.consolidation),
  }),
});

/**
 * @internal
 */
export const CustomConfigurationInputFilterSensitiveLog = (obj: CustomConfigurationInput): any => {
  if (obj.semanticOverride !== undefined)
    return { semanticOverride: SemanticOverrideConfigurationInputFilterSensitiveLog(obj.semanticOverride) };
  if (obj.summaryOverride !== undefined)
    return { summaryOverride: SummaryOverrideConfigurationInputFilterSensitiveLog(obj.summaryOverride) };
  if (obj.userPreferenceOverride !== undefined)
    return {
      userPreferenceOverride: UserPreferenceOverrideConfigurationInputFilterSensitiveLog(obj.userPreferenceOverride),
    };
  if (obj.selfManagedConfiguration !== undefined) return { selfManagedConfiguration: obj.selfManagedConfiguration };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CustomMemoryStrategyInputFilterSensitiveLog = (obj: CustomMemoryStrategyInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: CustomConfigurationInputFilterSensitiveLog(obj.configuration) }),
});

/**
 * @internal
 */
export const SemanticMemoryStrategyInputFilterSensitiveLog = (obj: SemanticMemoryStrategyInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SummaryMemoryStrategyInputFilterSensitiveLog = (obj: SummaryMemoryStrategyInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UserPreferenceMemoryStrategyInputFilterSensitiveLog = (obj: UserPreferenceMemoryStrategyInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MemoryStrategyInputFilterSensitiveLog = (obj: MemoryStrategyInput): any => {
  if (obj.semanticMemoryStrategy !== undefined)
    return { semanticMemoryStrategy: SemanticMemoryStrategyInputFilterSensitiveLog(obj.semanticMemoryStrategy) };
  if (obj.summaryMemoryStrategy !== undefined)
    return { summaryMemoryStrategy: SummaryMemoryStrategyInputFilterSensitiveLog(obj.summaryMemoryStrategy) };
  if (obj.userPreferenceMemoryStrategy !== undefined)
    return {
      userPreferenceMemoryStrategy: UserPreferenceMemoryStrategyInputFilterSensitiveLog(
        obj.userPreferenceMemoryStrategy
      ),
    };
  if (obj.customMemoryStrategy !== undefined)
    return { customMemoryStrategy: CustomMemoryStrategyInputFilterSensitiveLog(obj.customMemoryStrategy) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateMemoryInputFilterSensitiveLog = (obj: CreateMemoryInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.memoryStrategies && {
    memoryStrategies: obj.memoryStrategies.map((item) => MemoryStrategyInputFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const SemanticConsolidationOverrideFilterSensitiveLog = (obj: SemanticConsolidationOverride): any => ({
  ...obj,
  ...(obj.appendToPrompt && { appendToPrompt: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SummaryConsolidationOverrideFilterSensitiveLog = (obj: SummaryConsolidationOverride): any => ({
  ...obj,
  ...(obj.appendToPrompt && { appendToPrompt: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UserPreferenceConsolidationOverrideFilterSensitiveLog = (
  obj: UserPreferenceConsolidationOverride
): any => ({
  ...obj,
  ...(obj.appendToPrompt && { appendToPrompt: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CustomConsolidationConfigurationFilterSensitiveLog = (obj: CustomConsolidationConfiguration): any => {
  if (obj.semanticConsolidationOverride !== undefined)
    return {
      semanticConsolidationOverride: SemanticConsolidationOverrideFilterSensitiveLog(obj.semanticConsolidationOverride),
    };
  if (obj.summaryConsolidationOverride !== undefined)
    return {
      summaryConsolidationOverride: SummaryConsolidationOverrideFilterSensitiveLog(obj.summaryConsolidationOverride),
    };
  if (obj.userPreferenceConsolidationOverride !== undefined)
    return {
      userPreferenceConsolidationOverride: UserPreferenceConsolidationOverrideFilterSensitiveLog(
        obj.userPreferenceConsolidationOverride
      ),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ConsolidationConfigurationFilterSensitiveLog = (obj: ConsolidationConfiguration): any => {
  if (obj.customConsolidationConfiguration !== undefined)
    return {
      customConsolidationConfiguration: CustomConsolidationConfigurationFilterSensitiveLog(
        obj.customConsolidationConfiguration
      ),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const SemanticExtractionOverrideFilterSensitiveLog = (obj: SemanticExtractionOverride): any => ({
  ...obj,
  ...(obj.appendToPrompt && { appendToPrompt: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UserPreferenceExtractionOverrideFilterSensitiveLog = (obj: UserPreferenceExtractionOverride): any => ({
  ...obj,
  ...(obj.appendToPrompt && { appendToPrompt: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CustomExtractionConfigurationFilterSensitiveLog = (obj: CustomExtractionConfiguration): any => {
  if (obj.semanticExtractionOverride !== undefined)
    return { semanticExtractionOverride: SemanticExtractionOverrideFilterSensitiveLog(obj.semanticExtractionOverride) };
  if (obj.userPreferenceExtractionOverride !== undefined)
    return {
      userPreferenceExtractionOverride: UserPreferenceExtractionOverrideFilterSensitiveLog(
        obj.userPreferenceExtractionOverride
      ),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ExtractionConfigurationFilterSensitiveLog = (obj: ExtractionConfiguration): any => {
  if (obj.customExtractionConfiguration !== undefined)
    return {
      customExtractionConfiguration: CustomExtractionConfigurationFilterSensitiveLog(obj.customExtractionConfiguration),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const StrategyConfigurationFilterSensitiveLog = (obj: StrategyConfiguration): any => ({
  ...obj,
  ...(obj.extraction && { extraction: ExtractionConfigurationFilterSensitiveLog(obj.extraction) }),
  ...(obj.consolidation && { consolidation: ConsolidationConfigurationFilterSensitiveLog(obj.consolidation) }),
  ...(obj.selfManagedConfiguration && { selfManagedConfiguration: obj.selfManagedConfiguration }),
});

/**
 * @internal
 */
export const MemoryStrategyFilterSensitiveLog = (obj: MemoryStrategy): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: StrategyConfigurationFilterSensitiveLog(obj.configuration) }),
});

/**
 * @internal
 */
export const MemoryFilterSensitiveLog = (obj: Memory): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.strategies && { strategies: obj.strategies.map((item) => MemoryStrategyFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateMemoryOutputFilterSensitiveLog = (obj: CreateMemoryOutput): any => ({
  ...obj,
  ...(obj.memory && { memory: MemoryFilterSensitiveLog(obj.memory) }),
});

/**
 * @internal
 */
export const GetMemoryOutputFilterSensitiveLog = (obj: GetMemoryOutput): any => ({
  ...obj,
  ...(obj.memory && { memory: MemoryFilterSensitiveLog(obj.memory) }),
});

/**
 * @internal
 */
export const CustomConsolidationConfigurationInputFilterSensitiveLog = (
  obj: CustomConsolidationConfigurationInput
): any => {
  if (obj.semanticConsolidationOverride !== undefined)
    return {
      semanticConsolidationOverride: SemanticOverrideConsolidationConfigurationInputFilterSensitiveLog(
        obj.semanticConsolidationOverride
      ),
    };
  if (obj.summaryConsolidationOverride !== undefined)
    return {
      summaryConsolidationOverride: SummaryOverrideConsolidationConfigurationInputFilterSensitiveLog(
        obj.summaryConsolidationOverride
      ),
    };
  if (obj.userPreferenceConsolidationOverride !== undefined)
    return {
      userPreferenceConsolidationOverride: UserPreferenceOverrideConsolidationConfigurationInputFilterSensitiveLog(
        obj.userPreferenceConsolidationOverride
      ),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ModifyConsolidationConfigurationFilterSensitiveLog = (obj: ModifyConsolidationConfiguration): any => {
  if (obj.customConsolidationConfiguration !== undefined)
    return {
      customConsolidationConfiguration: CustomConsolidationConfigurationInputFilterSensitiveLog(
        obj.customConsolidationConfiguration
      ),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CustomExtractionConfigurationInputFilterSensitiveLog = (obj: CustomExtractionConfigurationInput): any => {
  if (obj.semanticExtractionOverride !== undefined)
    return {
      semanticExtractionOverride: SemanticOverrideExtractionConfigurationInputFilterSensitiveLog(
        obj.semanticExtractionOverride
      ),
    };
  if (obj.userPreferenceExtractionOverride !== undefined)
    return {
      userPreferenceExtractionOverride: UserPreferenceOverrideExtractionConfigurationInputFilterSensitiveLog(
        obj.userPreferenceExtractionOverride
      ),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ModifyExtractionConfigurationFilterSensitiveLog = (obj: ModifyExtractionConfiguration): any => {
  if (obj.customExtractionConfiguration !== undefined)
    return {
      customExtractionConfiguration: CustomExtractionConfigurationInputFilterSensitiveLog(
        obj.customExtractionConfiguration
      ),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ModifyStrategyConfigurationFilterSensitiveLog = (obj: ModifyStrategyConfiguration): any => ({
  ...obj,
  ...(obj.extraction && { extraction: ModifyExtractionConfigurationFilterSensitiveLog(obj.extraction) }),
  ...(obj.consolidation && { consolidation: ModifyConsolidationConfigurationFilterSensitiveLog(obj.consolidation) }),
  ...(obj.selfManagedConfiguration && { selfManagedConfiguration: obj.selfManagedConfiguration }),
});

/**
 * @internal
 */
export const ModifyMemoryStrategyInputFilterSensitiveLog = (obj: ModifyMemoryStrategyInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.configuration && { configuration: ModifyStrategyConfigurationFilterSensitiveLog(obj.configuration) }),
});

/**
 * @internal
 */
export const ModifyMemoryStrategiesFilterSensitiveLog = (obj: ModifyMemoryStrategies): any => ({
  ...obj,
  ...(obj.addMemoryStrategies && {
    addMemoryStrategies: obj.addMemoryStrategies.map((item) => MemoryStrategyInputFilterSensitiveLog(item)),
  }),
  ...(obj.modifyMemoryStrategies && {
    modifyMemoryStrategies: obj.modifyMemoryStrategies.map((item) => ModifyMemoryStrategyInputFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateMemoryInputFilterSensitiveLog = (obj: UpdateMemoryInput): any => ({
  ...obj,
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.memoryStrategies && { memoryStrategies: ModifyMemoryStrategiesFilterSensitiveLog(obj.memoryStrategies) }),
});

/**
 * @internal
 */
export const UpdateMemoryOutputFilterSensitiveLog = (obj: UpdateMemoryOutput): any => ({
  ...obj,
  ...(obj.memory && { memory: MemoryFilterSensitiveLog(obj.memory) }),
});

/**
 * @internal
 */
export const AtlassianOauth2ProviderConfigInputFilterSensitiveLog = (obj: AtlassianOauth2ProviderConfigInput): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CustomOauth2ProviderConfigInputFilterSensitiveLog = (obj: CustomOauth2ProviderConfigInput): any => ({
  ...obj,
  ...(obj.oauthDiscovery && { oauthDiscovery: obj.oauthDiscovery }),
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GithubOauth2ProviderConfigInputFilterSensitiveLog = (obj: GithubOauth2ProviderConfigInput): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GoogleOauth2ProviderConfigInputFilterSensitiveLog = (obj: GoogleOauth2ProviderConfigInput): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const IncludedOauth2ProviderConfigInputFilterSensitiveLog = (obj: IncludedOauth2ProviderConfigInput): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const LinkedinOauth2ProviderConfigInputFilterSensitiveLog = (obj: LinkedinOauth2ProviderConfigInput): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const MicrosoftOauth2ProviderConfigInputFilterSensitiveLog = (obj: MicrosoftOauth2ProviderConfigInput): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SalesforceOauth2ProviderConfigInputFilterSensitiveLog = (
  obj: SalesforceOauth2ProviderConfigInput
): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SlackOauth2ProviderConfigInputFilterSensitiveLog = (obj: SlackOauth2ProviderConfigInput): any => ({
  ...obj,
  ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const Oauth2ProviderConfigInputFilterSensitiveLog = (obj: Oauth2ProviderConfigInput): any => {
  if (obj.customOauth2ProviderConfig !== undefined)
    return {
      customOauth2ProviderConfig: CustomOauth2ProviderConfigInputFilterSensitiveLog(obj.customOauth2ProviderConfig),
    };
  if (obj.googleOauth2ProviderConfig !== undefined)
    return {
      googleOauth2ProviderConfig: GoogleOauth2ProviderConfigInputFilterSensitiveLog(obj.googleOauth2ProviderConfig),
    };
  if (obj.githubOauth2ProviderConfig !== undefined)
    return {
      githubOauth2ProviderConfig: GithubOauth2ProviderConfigInputFilterSensitiveLog(obj.githubOauth2ProviderConfig),
    };
  if (obj.slackOauth2ProviderConfig !== undefined)
    return {
      slackOauth2ProviderConfig: SlackOauth2ProviderConfigInputFilterSensitiveLog(obj.slackOauth2ProviderConfig),
    };
  if (obj.salesforceOauth2ProviderConfig !== undefined)
    return {
      salesforceOauth2ProviderConfig: SalesforceOauth2ProviderConfigInputFilterSensitiveLog(
        obj.salesforceOauth2ProviderConfig
      ),
    };
  if (obj.microsoftOauth2ProviderConfig !== undefined)
    return {
      microsoftOauth2ProviderConfig: MicrosoftOauth2ProviderConfigInputFilterSensitiveLog(
        obj.microsoftOauth2ProviderConfig
      ),
    };
  if (obj.atlassianOauth2ProviderConfig !== undefined)
    return {
      atlassianOauth2ProviderConfig: AtlassianOauth2ProviderConfigInputFilterSensitiveLog(
        obj.atlassianOauth2ProviderConfig
      ),
    };
  if (obj.linkedinOauth2ProviderConfig !== undefined)
    return {
      linkedinOauth2ProviderConfig: LinkedinOauth2ProviderConfigInputFilterSensitiveLog(
        obj.linkedinOauth2ProviderConfig
      ),
    };
  if (obj.includedOauth2ProviderConfig !== undefined)
    return {
      includedOauth2ProviderConfig: IncludedOauth2ProviderConfigInputFilterSensitiveLog(
        obj.includedOauth2ProviderConfig
      ),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateOauth2CredentialProviderRequestFilterSensitiveLog = (
  obj: CreateOauth2CredentialProviderRequest
): any => ({
  ...obj,
  ...(obj.oauth2ProviderConfigInput && {
    oauth2ProviderConfigInput: Oauth2ProviderConfigInputFilterSensitiveLog(obj.oauth2ProviderConfigInput),
  }),
});

/**
 * @internal
 */
export const UpdateOauth2CredentialProviderRequestFilterSensitiveLog = (
  obj: UpdateOauth2CredentialProviderRequest
): any => ({
  ...obj,
  ...(obj.oauth2ProviderConfigInput && {
    oauth2ProviderConfigInput: Oauth2ProviderConfigInputFilterSensitiveLog(obj.oauth2ProviderConfigInput),
  }),
});

/**
 * @internal
 */
export const McpTargetConfigurationFilterSensitiveLog = (obj: McpTargetConfiguration): any => {
  if (obj.openApiSchema !== undefined)
    return { openApiSchema: ApiSchemaConfigurationFilterSensitiveLog(obj.openApiSchema) };
  if (obj.smithyModel !== undefined) return { smithyModel: ApiSchemaConfigurationFilterSensitiveLog(obj.smithyModel) };
  if (obj.lambda !== undefined) return { lambda: obj.lambda };
  if (obj.mcpServer !== undefined) return { mcpServer: obj.mcpServer };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const TargetConfigurationFilterSensitiveLog = (obj: TargetConfiguration): any => {
  if (obj.mcp !== undefined) return { mcp: McpTargetConfigurationFilterSensitiveLog(obj.mcp) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateGatewayTargetRequestFilterSensitiveLog = (obj: CreateGatewayTargetRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.targetConfiguration && {
    targetConfiguration: TargetConfigurationFilterSensitiveLog(obj.targetConfiguration),
  }),
  ...(obj.credentialProviderConfigurations && {
    credentialProviderConfigurations: obj.credentialProviderConfigurations.map((item) =>
      CredentialProviderConfigurationFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const CreateGatewayTargetResponseFilterSensitiveLog = (obj: CreateGatewayTargetResponse): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.targetConfiguration && {
    targetConfiguration: TargetConfigurationFilterSensitiveLog(obj.targetConfiguration),
  }),
  ...(obj.credentialProviderConfigurations && {
    credentialProviderConfigurations: obj.credentialProviderConfigurations.map((item) =>
      CredentialProviderConfigurationFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const GatewayTargetFilterSensitiveLog = (obj: GatewayTarget): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.targetConfiguration && {
    targetConfiguration: TargetConfigurationFilterSensitiveLog(obj.targetConfiguration),
  }),
  ...(obj.credentialProviderConfigurations && {
    credentialProviderConfigurations: obj.credentialProviderConfigurations.map((item) =>
      CredentialProviderConfigurationFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const GetGatewayTargetResponseFilterSensitiveLog = (obj: GetGatewayTargetResponse): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.targetConfiguration && {
    targetConfiguration: TargetConfigurationFilterSensitiveLog(obj.targetConfiguration),
  }),
  ...(obj.credentialProviderConfigurations && {
    credentialProviderConfigurations: obj.credentialProviderConfigurations.map((item) =>
      CredentialProviderConfigurationFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const UpdateGatewayTargetRequestFilterSensitiveLog = (obj: UpdateGatewayTargetRequest): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.targetConfiguration && {
    targetConfiguration: TargetConfigurationFilterSensitiveLog(obj.targetConfiguration),
  }),
  ...(obj.credentialProviderConfigurations && {
    credentialProviderConfigurations: obj.credentialProviderConfigurations.map((item) =>
      CredentialProviderConfigurationFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const UpdateGatewayTargetResponseFilterSensitiveLog = (obj: UpdateGatewayTargetResponse): any => ({
  ...obj,
  ...(obj.name && { name: SENSITIVE_STRING }),
  ...(obj.description && { description: SENSITIVE_STRING }),
  ...(obj.targetConfiguration && {
    targetConfiguration: TargetConfigurationFilterSensitiveLog(obj.targetConfiguration),
  }),
  ...(obj.credentialProviderConfigurations && {
    credentialProviderConfigurations: obj.credentialProviderConfigurations.map((item) =>
      CredentialProviderConfigurationFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const SynchronizeGatewayTargetsResponseFilterSensitiveLog = (obj: SynchronizeGatewayTargetsResponse): any => ({
  ...obj,
  ...(obj.targets && { targets: obj.targets.map((item) => GatewayTargetFilterSensitiveLog(item)) }),
});
