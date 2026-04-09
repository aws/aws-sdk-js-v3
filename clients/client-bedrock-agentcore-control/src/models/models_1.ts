// smithy-typescript generated code
import type {
  DescriptorType,
  FindingType,
  OnlineEvaluationConfigStatus,
  OnlineEvaluationExecutionStatus,
  PolicyEngineStatus,
  PolicyGenerationStatus,
  PolicyStatus,
  PolicyValidationMode,
  RegistryAuthorizerType,
  RegistryRecordCredentialProviderType,
  RegistryRecordOAuthGrantType,
  RegistryRecordStatus,
  RegistryStatus,
  SchemaType,
  SynchronizationType,
  TargetStatus,
} from "./enums";
import type {
  A2aDescriptor,
  AgentSkillsDescriptor,
  ApiGatewayTargetConfiguration,
  ApiSchemaConfiguration,
  AuthorizationData,
  AuthorizerConfiguration,
  CredentialProviderConfiguration,
  DataSourceConfig,
  EvaluatorReference,
  KmsConfiguration,
  ManagedResourceDetails,
  McpServerTargetConfiguration,
  MetadataConfiguration,
  PrivateEndpoint,
  Rule,
  S3Configuration,
  SkillDefinition,
  SkillMdDefinition,
} from "./models_0";

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

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;
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

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;
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

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;
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
 * <p>Wrapper for updating an optional Description field with PATCH semantics. When present in an update request, the description is replaced with optionalValue. When absent, the description is left unchanged. To unset the description, include the wrapper with optionalValue not specified.</p>
 * @public
 */
export interface UpdatedDescription {
  /**
   * <p>Represents an optional value that is used to update the human-readable description of the resource. If not specified, it will clear the current description of the resource.</p>
   * @public
   */
  optionalValue?: string | undefined;
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

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key used to encrypt the policy engine data.</p>
   * @public
   */
  encryptionKeyArn?: string | undefined;
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
 * <p>Represents the information identifying a generated policy asset from the AI-powered policy generation process within the AgentCore Policy system. Each asset contains a Cedar policy statement generated from natural language input, along with associated metadata and analysis findings to help users evaluate and select the most appropriate policy option.</p>
 * @public
 */
export interface PolicyGenerationDetails {
  /**
   * <p>The unique identifier for this policy generation request.</p>
   * @public
   */
  policyGenerationId: string | undefined;

  /**
   * <p>The unique identifier for this generated policy asset within the policy generation request.</p>
   * @public
   */
  policyGenerationAssetId: string | undefined;
}

/**
 * <p>Represents the definition structure for policies within the AgentCore Policy system. This structure encapsulates different policy formats and languages that can be used to define access control rules.</p>
 * @public
 */
export type PolicyDefinition =
  | PolicyDefinition.CedarMember
  | PolicyDefinition.PolicyGenerationMember
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
    policyGeneration?: never;
    $unknown?: never;
  }

  /**
   * <p>The generated policy asset information within the policy definition structure. This contains information identifying a generated policy asset from the AI-powered policy generation process within the AgentCore Policy system. Each asset contains a Cedar policy statement generated from natural language input, along with associated metadata and analysis findings to help users evaluate and select the most appropriate policy option.</p>
   * @public
   */
  export interface PolicyGenerationMember {
    cedar?: never;
    policyGeneration: PolicyGenerationDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cedar?: never;
    policyGeneration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cedar: (value: CedarPolicy) => T;
    policyGeneration: (value: PolicyGenerationDetails) => T;
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

/**
 * @public
 */
export interface ListPoliciesRequest {
  /**
   * <p>A pagination token returned from a previous <a href="https://docs.aws.amazon.com/bedrock-agentcore-control/latest/APIReference/API_ListPolicies.html">ListPolicies</a> call. Use this token to retrieve the next page of results when the response is paginated.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of policies to return in a single response. If not specified, the default is 10 policies per page, with a maximum of 100 per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the policy engine whose policies to retrieve.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>Optional filter to list policies that apply to a specific resource scope or resource type. This helps narrow down policy results to those relevant for particular Amazon Web Services resources, agent tools, or operational contexts within the policy engine ecosystem.</p>
   * @public
   */
  targetResourceScope?: string | undefined;
}

/**
 * <p>Represents a complete policy resource within the AgentCore Policy system. Policies are ARN-able resources that contain Cedar policy statements and associated metadata for controlling agent behavior and access decisions. Each policy belongs to a policy engine and defines fine-grained authorization rules that are evaluated in real-time as agents interact with tools through Gateway. Policies use the Cedar policy language to specify who (principals based on OAuth claims like username, role, or scope) can perform what actions (tool calls) on which resources (Gateways), with optional conditions for attribute-based access control. Multiple policies can apply to a single request, with Cedar's forbid-wins semantics ensuring that security restrictions are never accidentally overridden.</p>
 * @public
 */
export interface Policy {
  /**
   * <p>The unique identifier for the policy. This system-generated identifier consists of the user name plus a 10-character generated suffix and serves as the primary key for policy operations.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The customer-assigned immutable name for the policy. This human-readable identifier must be unique within the account and cannot exceed 48 characters.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the policy engine that manages this policy. This establishes the policy engine context for policy evaluation and management.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The Cedar policy statement that defines the access control rules. This contains the actual policy logic used for agent behavior control and access decisions.</p>
   * @public
   */
  definition: PolicyDefinition | undefined;

  /**
   * <p>A human-readable description of the policy's purpose and functionality. Limited to 4,096 characters, this helps administrators understand and manage the policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The timestamp when the policy was originally created. This is automatically set by the service and used for auditing and lifecycle management.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy was last modified. This tracks the most recent changes to the policy configuration or metadata.</p>
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
   * <p>Additional information about the policy status. This provides details about any failures or the current state of the policy lifecycle.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface ListPoliciesResponse {
  /**
   * <p>An array of policy objects that match the specified criteria. Each policy object contains the policy metadata, status, and key identifiers for further operations.</p>
   * @public
   */
  policies: Policy[] | undefined;

  /**
   * <p>A pagination token that can be used in subsequent ListPolicies calls to retrieve additional results. This token is only present when there are more results available.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyRequest {
  /**
   * <p>The identifier of the policy engine that manages the policy to be updated. This ensures the policy is updated within the correct policy engine context.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The unique identifier of the policy to be updated. This must be a valid policy ID that exists within the specified policy engine.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The new human-readable description for the policy. This optional field allows updating the policy's documentation while keeping the same policy logic.</p>
   * @public
   */
  description?: UpdatedDescription | undefined;

  /**
   * <p>The new Cedar policy statement that defines the access control rules. This replaces the existing policy definition with new logic while maintaining the policy's identity.</p>
   * @public
   */
  definition?: PolicyDefinition | undefined;

  /**
   * <p>The validation mode for the policy update. Determines how Cedar analyzer validation results are handled during policy updates. FAIL_ON_ANY_FINDINGS runs the Cedar analyzer and fails the update if validation issues are detected, ensuring the policy conforms to the Cedar schema and tool context. IGNORE_ALL_FINDINGS runs the Cedar analyzer but allows updates despite validation warnings. Use FAIL_ON_ANY_FINDINGS to ensure policy correctness during updates, especially when modifying policy logic or conditions.</p>
   * @public
   */
  validationMode?: PolicyValidationMode | undefined;
}

/**
 * @public
 */
export interface UpdatePolicyResponse {
  /**
   * <p>The unique identifier of the updated policy.</p>
   * @public
   */
  policyId: string | undefined;

  /**
   * <p>The name of the updated policy.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the policy engine managing the updated policy.</p>
   * @public
   */
  policyEngineId: string | undefined;

  /**
   * <p>The updated Cedar policy statement.</p>
   * @public
   */
  definition: PolicyDefinition | undefined;

  /**
   * <p>The updated description of the policy.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The original creation timestamp of the policy.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the policy was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The ARN of the updated policy.</p>
   * @public
   */
  policyArn: string | undefined;

  /**
   * <p>The current status of the updated policy.</p>
   * @public
   */
  status: PolicyStatus | undefined;

  /**
   * <p>Additional information about the update status.</p>
   * @public
   */
  statusReasons: string[] | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to create or update the resource policy.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The resource policy to create or update.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>The resource policy that was created or updated.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * <p>A custom descriptor for a registry record. Use this for resources such as APIs, Lambda functions, or servers that do not conform to a standard protocol like MCP or A2A.</p>
 * @public
 */
export interface CustomDescriptor {
  /**
   * <p>The custom descriptor content as a valid JSON document. You can define any custom schema that describes your resource.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p>The server definition for an MCP descriptor. Contains the schema version and inline content for the MCP server configuration.</p>
 * @public
 */
export interface ServerDefinition {
  /**
   * <p>The schema version of the server definition based on the MCP protocol specification. If not specified, the version is auto-detected from the content.</p>
   * @public
   */
  schemaVersion?: string | undefined;

  /**
   * <p>The JSON content containing the MCP server definition, conforming to the MCP protocol specification.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p>The tools definition for an MCP descriptor. Contains the protocol version and inline content describing the available tools.</p>
 * @public
 */
export interface ToolsDefinition {
  /**
   * <p>The protocol version of the tools definition based on the MCP protocol specification. If not specified, the version is auto-detected from the content.</p>
   * @public
   */
  protocolVersion?: string | undefined;

  /**
   * <p>The JSON content containing the MCP tools definition, conforming to the MCP protocol specification.</p>
   * @public
   */
  inlineContent?: string | undefined;
}

/**
 * <p>The Model Context Protocol (MCP) descriptor for a registry record. Contains the server definition and tools definition for an MCP-compatible server. The schema is validated against the MCP protocol specification.</p>
 * @public
 */
export interface McpDescriptor {
  /**
   * <p>The MCP server definition, containing the server configuration and schema as defined by the MCP protocol specification.</p>
   * @public
   */
  server?: ServerDefinition | undefined;

  /**
   * <p>The MCP tools definition, containing the tools available on the MCP server as defined by the MCP protocol specification.</p>
   * @public
   */
  tools?: ToolsDefinition | undefined;
}

/**
 * <p>Contains descriptor-type-specific configurations for a registry record. Only the descriptor matching the record's <code>descriptorType</code> should be populated.</p>
 * @public
 */
export interface Descriptors {
  /**
   * <p>The Model Context Protocol (MCP) descriptor configuration. Use this when the <code>descriptorType</code> is <code>MCP</code>.</p>
   * @public
   */
  mcp?: McpDescriptor | undefined;

  /**
   * <p>The Agent-to-Agent (A2A) protocol descriptor configuration. Use this when the <code>descriptorType</code> is <code>A2A</code>.</p>
   * @public
   */
  a2a?: A2aDescriptor | undefined;

  /**
   * <p>The custom descriptor configuration. Use this when the <code>descriptorType</code> is <code>CUSTOM</code>.</p>
   * @public
   */
  custom?: CustomDescriptor | undefined;

  /**
   * <p>The agent skills descriptor configuration. Use this when the <code>descriptorType</code> is <code>AGENT_SKILLS</code>.</p>
   * @public
   */
  agentSkills?: AgentSkillsDescriptor | undefined;
}

/**
 * <p>IAM credential provider configuration for authenticating with an external source using SigV4 signing during synchronization.</p>
 * @public
 */
export interface RegistryRecordIamCredentialProvider {
  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to assume for SigV4 signing.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The SigV4 signing service name (for example, <code>execute-api</code> or <code>bedrock-agentcore</code>).</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>The Amazon Web Services region for SigV4 signing (for example, <code>us-west-2</code>). If not specified, the region is extracted from the MCP server URL hostname, with fallback to the service's own region.</p>
   * @public
   */
  region?: string | undefined;
}

/**
 * <p>OAuth credential provider configuration for authenticating with an external source during synchronization.</p>
 * @public
 */
export interface RegistryRecordOAuthCredentialProvider {
  /**
   * <p>The Amazon Resource Name (ARN) of the OAuth credential provider resource.</p>
   * @public
   */
  providerArn: string | undefined;

  /**
   * <p>The OAuth grant type. Currently only <code>CLIENT_CREDENTIALS</code> is supported.</p>
   * @public
   */
  grantType?: RegistryRecordOAuthGrantType | undefined;

  /**
   * <p>The OAuth scopes to request during authentication.</p>
   * @public
   */
  scopes?: string[] | undefined;

  /**
   * <p>Additional custom parameters for the OAuth flow.</p>
   * @public
   */
  customParameters?: Record<string, string> | undefined;
}

/**
 * <p>Union of supported credential provider types for registry record synchronization.</p>
 * @public
 */
export type RegistryRecordCredentialProviderUnion =
  | RegistryRecordCredentialProviderUnion.IamCredentialProviderMember
  | RegistryRecordCredentialProviderUnion.OauthCredentialProviderMember
  | RegistryRecordCredentialProviderUnion.$UnknownMember;

/**
 * @public
 */
export namespace RegistryRecordCredentialProviderUnion {
  /**
   * <p>The OAuth credential provider configuration for authenticating with the external source.</p>
   * @public
   */
  export interface OauthCredentialProviderMember {
    oauthCredentialProvider: RegistryRecordOAuthCredentialProvider;
    iamCredentialProvider?: never;
    $unknown?: never;
  }

  /**
   * <p>The IAM credential provider configuration for authenticating with the external source using SigV4 signing.</p>
   * @public
   */
  export interface IamCredentialProviderMember {
    oauthCredentialProvider?: never;
    iamCredentialProvider: RegistryRecordIamCredentialProvider;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    oauthCredentialProvider?: never;
    iamCredentialProvider?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    oauthCredentialProvider: (value: RegistryRecordOAuthCredentialProvider) => T;
    iamCredentialProvider: (value: RegistryRecordIamCredentialProvider) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>A pairing of a credential provider type with its corresponding provider details for authenticating with external sources.</p>
 * @public
 */
export interface RegistryRecordCredentialProviderConfiguration {
  /**
   * <p>The type of credential provider.</p> <ul> <li> <p> <code>OAUTH</code> - OAuth-based authentication.</p> </li> <li> <p> <code>IAM</code> - Amazon Web Services IAM-based authentication using SigV4 signing.</p> </li> </ul>
   * @public
   */
  credentialProviderType: RegistryRecordCredentialProviderType | undefined;

  /**
   * <p>The credential provider configuration details. The structure depends on the <code>credentialProviderType</code>.</p>
   * @public
   */
  credentialProvider: RegistryRecordCredentialProviderUnion | undefined;
}

/**
 * <p>Configuration for synchronizing from a URL-based MCP server.</p>
 * @public
 */
export interface FromUrlSynchronizationConfiguration {
  /**
   * <p>The HTTPS URL of the MCP server to synchronize from.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>Optional list of credential provider configurations for authenticating with the MCP server. At most one credential provider configuration can be specified.</p>
   * @public
   */
  credentialProviderConfigurations?: RegistryRecordCredentialProviderConfiguration[] | undefined;
}

/**
 * <p>Configuration for synchronizing registry record metadata from an external source.</p>
 * @public
 */
export interface SynchronizationConfiguration {
  /**
   * <p>Configuration for synchronizing from a URL-based source.</p>
   * @public
   */
  fromUrl?: FromUrlSynchronizationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateRegistryRecordRequest {
  /**
   * <p>The identifier of the registry where the record will be created. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The name of the registry record.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The descriptor type of the registry record.</p> <ul> <li> <p> <code>MCP</code> - Model Context Protocol descriptor for MCP-compatible servers and tools.</p> </li> <li> <p> <code>A2A</code> - Agent-to-Agent protocol descriptor.</p> </li> <li> <p> <code>CUSTOM</code> - Custom descriptor type for resources such as APIs, Lambda functions, or servers not conforming to a standard protocol.</p> </li> <li> <p> <code>AGENT_SKILLS</code> - Agent skills descriptor for defining agent skill definitions.</p> </li> </ul>
   * @public
   */
  descriptorType: DescriptorType | undefined;

  /**
   * <p>The descriptor-type-specific configuration containing the resource schema and metadata. The structure of this field depends on the <code>descriptorType</code> you specify.</p>
   * @public
   */
  descriptors?: Descriptors | undefined;

  /**
   * <p>The version of the registry record. Use this to track different versions of the record's content.</p>
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * <p>The type of synchronization to use for keeping the record metadata up to date from an external source. Possible values include <code>FROM_URL</code> and <code>NONE</code>.</p>
   * @public
   */
  synchronizationType?: SynchronizationType | undefined;

  /**
   * <p>The configuration for synchronizing registry record metadata from an external source, such as a URL-based MCP server.</p>
   * @public
   */
  synchronizationConfiguration?: SynchronizationConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRegistryRecordResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The status of the registry record. Set to <code>CREATING</code> while the asynchronous workflow is in progress.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryRecordRequest {
  /**
   * <p>The identifier of the registry containing the record. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to delete. You can specify either the Amazon Resource Name (ARN) or the ID of the record.</p>
   * @public
   */
  recordId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryRecordResponse {}

/**
 * @public
 */
export interface GetRegistryRecordRequest {
  /**
   * <p>The identifier of the registry containing the record. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to retrieve. You can specify either the Amazon Resource Name (ARN) or the ID of the record.</p>
   * @public
   */
  recordId: string | undefined;
}

/**
 * @public
 */
export interface GetRegistryRecordResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the registry that contains the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The name of the registry record.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The descriptor type of the registry record. Possible values are <code>MCP</code>, <code>A2A</code>, <code>CUSTOM</code>, and <code>AGENT_SKILLS</code>.</p>
   * @public
   */
  descriptorType: DescriptorType | undefined;

  /**
   * <p>The descriptor-type-specific configuration containing the resource schema and metadata. For details, see the <code>Descriptors</code> data type.</p>
   * @public
   */
  descriptors: Descriptors | undefined;

  /**
   * <p>The version of the registry record.</p>
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * <p>The current status of the registry record. Possible values include <code>CREATING</code>, <code>DRAFT</code>, <code>APPROVED</code>, <code>PENDING_APPROVAL</code>, <code>REJECTED</code>, <code>DEPRECATED</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, and <code>UPDATE_FAILED</code>. A record transitions from <code>CREATING</code> to <code>DRAFT</code>, then to <code>PENDING_APPROVAL</code> (via <code>SubmitRegistryRecordForApproval</code>), and finally to <code>APPROVED</code> upon approval.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The timestamp when the registry record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The reason for the current status, typically set when the status is a failure state.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The type of synchronization used for this record.</p>
   * @public
   */
  synchronizationType?: SynchronizationType | undefined;

  /**
   * <p>The configuration for synchronizing registry record metadata from an external source.</p>
   * @public
   */
  synchronizationConfiguration?: SynchronizationConfiguration | undefined;
}

/**
 * @public
 */
export interface ListRegistryRecordsRequest {
  /**
   * <p>The identifier of the registry to list records from. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

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

  /**
   * <p>Filter registry records by name.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Filter registry records by their current status. Possible values include <code>CREATING</code>, <code>DRAFT</code>, <code>APPROVED</code>, <code>PENDING_APPROVAL</code>, <code>REJECTED</code>, <code>DEPRECATED</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, and <code>UPDATE_FAILED</code>.</p>
   * @public
   */
  status?: RegistryRecordStatus | undefined;

  /**
   * <p>Filter registry records by their descriptor type. Possible values are <code>MCP</code>, <code>A2A</code>, <code>CUSTOM</code>, and <code>AGENT_SKILLS</code>.</p>
   * @public
   */
  descriptorType?: DescriptorType | undefined;
}

/**
 * <p>Contains summary information about a registry record.</p>
 * @public
 */
export interface RegistryRecordSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the registry that contains the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The name of the registry record.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The descriptor type of the registry record. Possible values are <code>MCP</code>, <code>A2A</code>, <code>CUSTOM</code>, and <code>AGENT_SKILLS</code>.</p>
   * @public
   */
  descriptorType: DescriptorType | undefined;

  /**
   * <p>The version of the registry record.</p>
   * @public
   */
  recordVersion: string | undefined;

  /**
   * <p>The current status of the registry record. Possible values include <code>CREATING</code>, <code>DRAFT</code>, <code>APPROVED</code>, <code>PENDING_APPROVAL</code>, <code>REJECTED</code>, <code>DEPRECATED</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, and <code>UPDATE_FAILED</code>.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The timestamp when the registry record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListRegistryRecordsResponse {
  /**
   * <p>The list of registry record summaries. For details about the fields in each summary, see the <code>RegistryRecordSummary</code> data type.</p>
   * @public
   */
  registryRecords: RegistryRecordSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface SubmitRegistryRecordForApprovalRequest {
  /**
   * <p>The identifier of the registry containing the record. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to submit for approval. You can specify either the Amazon Resource Name (ARN) or the ID of the record.</p>
   * @public
   */
  recordId: string | undefined;
}

/**
 * @public
 */
export interface SubmitRegistryRecordForApprovalResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the registry that contains the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The resulting status of the registry record after submission.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The timestamp when the record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Wrapper for updating an A2A descriptor with PATCH semantics. When present, the A2A descriptor is replaced with the provided value. When absent, the A2A descriptor is left unchanged. To unset, include the wrapper with the value set to null.</p>
 * @public
 */
export interface UpdatedA2aDescriptor {
  /**
   * <p>The updated A2A descriptor value.</p>
   * @public
   */
  optionalValue?: A2aDescriptor | undefined;
}

/**
 * <p>Wrapper for updating a skill definition with PATCH semantics.</p>
 * @public
 */
export interface UpdatedSkillDefinition {
  /**
   * <p>The updated skill definition value.</p>
   * @public
   */
  optionalValue?: SkillDefinition | undefined;
}

/**
 * <p>Wrapper for updating a skill markdown definition with PATCH semantics.</p>
 * @public
 */
export interface UpdatedSkillMdDefinition {
  /**
   * <p>The updated skill markdown definition value.</p>
   * @public
   */
  optionalValue?: SkillMdDefinition | undefined;
}

/**
 * <p>Individual agent skills descriptor fields that can be updated independently.</p>
 * @public
 */
export interface UpdatedAgentSkillsDescriptorFields {
  /**
   * <p>The updated skill markdown definition.</p>
   * @public
   */
  skillMd?: UpdatedSkillMdDefinition | undefined;

  /**
   * <p>The updated skill definition.</p>
   * @public
   */
  skillDefinition?: UpdatedSkillDefinition | undefined;
}

/**
 * <p>Wrapper for updating an agent skills descriptor with PATCH semantics. When present with a value, individual fields can be updated independently. When present with a null value, the entire agent skills descriptor is unset. When absent, the agent skills descriptor is left unchanged.</p>
 * @public
 */
export interface UpdatedAgentSkillsDescriptor {
  /**
   * <p>The updated agent skills descriptor fields.</p>
   * @public
   */
  optionalValue?: UpdatedAgentSkillsDescriptorFields | undefined;
}

/**
 * <p>Wrapper for updating a custom descriptor with PATCH semantics. When present, the custom descriptor is replaced with the provided value. When absent, the custom descriptor is left unchanged. To unset, include the wrapper with the value set to null.</p>
 * @public
 */
export interface UpdatedCustomDescriptor {
  /**
   * <p>The updated custom descriptor value.</p>
   * @public
   */
  optionalValue?: CustomDescriptor | undefined;
}

/**
 * <p>Wrapper for updating a server definition with PATCH semantics. When present, the server definition is replaced with the provided value. When absent, the server definition is left unchanged. To unset, include the wrapper with the value set to null.</p>
 * @public
 */
export interface UpdatedServerDefinition {
  /**
   * <p>The updated server definition value.</p>
   * @public
   */
  optionalValue?: ServerDefinition | undefined;
}

/**
 * <p>Wrapper for updating a tools definition with PATCH semantics. When present, the tools definition is replaced with the provided value. When absent, the tools definition is left unchanged. To unset, include the wrapper with the value set to null.</p>
 * @public
 */
export interface UpdatedToolsDefinition {
  /**
   * <p>The updated tools definition value.</p>
   * @public
   */
  optionalValue?: ToolsDefinition | undefined;
}

/**
 * <p>Individual MCP descriptor fields that can be updated independently.</p>
 * @public
 */
export interface UpdatedMcpDescriptorFields {
  /**
   * <p>The updated server definition for the MCP descriptor.</p>
   * @public
   */
  server?: UpdatedServerDefinition | undefined;

  /**
   * <p>The updated tools definition for the MCP descriptor.</p>
   * @public
   */
  tools?: UpdatedToolsDefinition | undefined;
}

/**
 * <p>Wrapper for updating an MCP descriptor with PATCH semantics. When present with a value, individual MCP fields can be updated independently. When present with a null value, the entire MCP descriptor is unset. When absent, the MCP descriptor is left unchanged.</p>
 * @public
 */
export interface UpdatedMcpDescriptor {
  /**
   * <p>The updated MCP descriptor fields.</p>
   * @public
   */
  optionalValue?: UpdatedMcpDescriptorFields | undefined;
}

/**
 * <p>Contains per-descriptor-type wrappers for updating descriptors. Each descriptor type can be updated independently.</p>
 * @public
 */
export interface UpdatedDescriptorsUnion {
  /**
   * <p>The updated MCP descriptor.</p>
   * @public
   */
  mcp?: UpdatedMcpDescriptor | undefined;

  /**
   * <p>The updated A2A descriptor.</p>
   * @public
   */
  a2a?: UpdatedA2aDescriptor | undefined;

  /**
   * <p>The updated custom descriptor.</p>
   * @public
   */
  custom?: UpdatedCustomDescriptor | undefined;

  /**
   * <p>The updated agent skills descriptor.</p>
   * @public
   */
  agentSkills?: UpdatedAgentSkillsDescriptor | undefined;
}

/**
 * <p>Wrapper for updating an optional descriptors field with PATCH semantics. When present with a value, individual descriptors can be updated. When present with a null value, all descriptors are unset. When absent, descriptors are left unchanged.</p>
 * @public
 */
export interface UpdatedDescriptors {
  /**
   * <p>The updated descriptors value. Contains per-descriptor-type wrappers that are each independently updatable.</p>
   * @public
   */
  optionalValue?: UpdatedDescriptorsUnion | undefined;
}

/**
 * <p>Wrapper for updating the synchronization configuration with PATCH semantics. Must be matched with <code>UpdatedSynchronizationType</code>.</p>
 * @public
 */
export interface UpdatedSynchronizationConfiguration {
  /**
   * <p>The updated synchronization configuration value.</p>
   * @public
   */
  optionalValue?: SynchronizationConfiguration | undefined;
}

/**
 * <p>Wrapper for updating the synchronization type with PATCH semantics. Must be matched with <code>UpdatedSynchronizationConfiguration</code>.</p>
 * @public
 */
export interface UpdatedSynchronizationType {
  /**
   * <p>The updated synchronization type value.</p>
   * @public
   */
  optionalValue?: SynchronizationType | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordRequest {
  /**
   * <p>The identifier of the registry containing the record. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to update. You can specify either the Amazon Resource Name (ARN) or the ID of the record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The updated name for the registry record.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description for the registry record. To clear the description, include the <code>UpdatedDescription</code> wrapper with <code>optionalValue</code> not specified.</p>
   * @public
   */
  description?: UpdatedDescription | undefined;

  /**
   * <p>The updated descriptor type for the registry record. Changing the descriptor type may require updating the <code>descriptors</code> field to match the new type's schema requirements.</p>
   * @public
   */
  descriptorType?: DescriptorType | undefined;

  /**
   * <p>The updated descriptor-type-specific configuration containing the resource schema and metadata. Uses PATCH semantics where individual descriptor fields can be updated independently.</p>
   * @public
   */
  descriptors?: UpdatedDescriptors | undefined;

  /**
   * <p>The version of the registry record for optimistic locking. If provided, it must match the current version of the record. The service automatically increments the version after a successful update.</p>
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * <p>The updated synchronization type for the registry record.</p>
   * @public
   */
  synchronizationType?: UpdatedSynchronizationType | undefined;

  /**
   * <p>The updated synchronization configuration for the registry record.</p>
   * @public
   */
  synchronizationConfiguration?: UpdatedSynchronizationConfiguration | undefined;

  /**
   * <p>Whether to trigger synchronization using the stored or provided configuration. When set to <code>true</code>, the service will synchronize the record metadata from the configured external source.</p>
   * @public
   */
  triggerSynchronization?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the registry that contains the updated record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the updated registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The name of the updated registry record.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the updated registry record.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The descriptor type of the updated registry record. Possible values are <code>MCP</code>, <code>A2A</code>, <code>CUSTOM</code>, and <code>AGENT_SKILLS</code>.</p>
   * @public
   */
  descriptorType: DescriptorType | undefined;

  /**
   * <p>The descriptor-type-specific configuration of the updated registry record. For details, see the <code>Descriptors</code> data type.</p>
   * @public
   */
  descriptors: Descriptors | undefined;

  /**
   * <p>The version of the updated registry record.</p>
   * @public
   */
  recordVersion?: string | undefined;

  /**
   * <p>The current status of the updated registry record. Possible values include <code>CREATING</code>, <code>DRAFT</code>, <code>APPROVED</code>, <code>PENDING_APPROVAL</code>, <code>REJECTED</code>, <code>DEPRECATED</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, and <code>UPDATE_FAILED</code>.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The timestamp when the registry record was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>The reason for the current status of the updated registry record.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The synchronization type of the updated registry record.</p>
   * @public
   */
  synchronizationType?: SynchronizationType | undefined;

  /**
   * <p>The synchronization configuration of the updated registry record.</p>
   * @public
   */
  synchronizationConfiguration?: SynchronizationConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordStatusRequest {
  /**
   * <p>The identifier of the registry containing the record. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The identifier of the registry record to update the status for. You can specify either the Amazon Resource Name (ARN) or the ID of the record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The target status for the registry record.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The reason for the status change, such as why the record was approved or rejected.</p>
   * @public
   */
  statusReason: string | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryRecordStatusResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the registry that contains the record.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry record.</p>
   * @public
   */
  recordArn: string | undefined;

  /**
   * <p>The unique identifier of the registry record.</p>
   * @public
   */
  recordId: string | undefined;

  /**
   * <p>The resulting status of the registry record.</p>
   * @public
   */
  status: RegistryRecordStatus | undefined;

  /**
   * <p>The reason for the status change.</p>
   * @public
   */
  statusReason: string | undefined;

  /**
   * <p>The timestamp when the record was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Configuration for the registry record approval workflow. Controls whether records added to the registry require explicit approval before becoming active.</p>
 * @public
 */
export interface ApprovalConfiguration {
  /**
   * <p>Whether registry records are auto-approved. When set to <code>true</code>, records are automatically approved upon creation. When set to <code>false</code> (the default), records require explicit approval for security purposes.</p>
   * @public
   */
  autoApproval?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateRegistryRequest {
  /**
   * <p>The name of the registry. The name must be unique within your account and can contain alphanumeric characters and underscores.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the registry.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of authorizer to use for the registry. This controls the authorization method for the Search and Invoke APIs used by consumers, and does not affect the standard CRUDL APIs for registry and registry record management used by administrators.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> </ul>
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;

  /**
   * <p>The authorizer configuration for the registry. Required if <code>authorizerType</code> is <code>CUSTOM_JWT</code>. For details, see the <code>AuthorizerConfiguration</code> data type.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If you don't specify this field, a value is randomly generated for you. If this token matches a previous request, the service ignores the request, but doesn't return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The approval configuration for registry records. Controls whether records require explicit approval before becoming active. See the <code>ApprovalConfiguration</code> data type for supported configuration options.</p>
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateRegistryResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the created registry.</p>
   * @public
   */
  registryArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryRequest {
  /**
   * <p>The identifier of the registry to delete. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRegistryResponse {
  /**
   * <p>The current status of the registry, set to <code>DELETING</code> when deletion is initiated. For a list of all possible registry statuses, see the <code>RegistryStatus</code> data type.</p>
   * @public
   */
  status: RegistryStatus | undefined;
}

/**
 * @public
 */
export interface GetRegistryRequest {
  /**
   * <p>The identifier of the registry to retrieve. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;
}

/**
 * @public
 */
export interface GetRegistryResponse {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the registry.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The type of authorizer used by the registry. This controls the authorization method for the Search and Invoke APIs used by consumers.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> </ul>
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;

  /**
   * <p>The authorizer configuration for the registry. For details, see the <code>AuthorizerConfiguration</code> data type.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The approval configuration for registry records. For details, see the <code>ApprovalConfiguration</code> data type.</p>
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;

  /**
   * <p>The current status of the registry. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, <code>DELETING</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * <p>The reason for the current status, typically set when the status is a failure state.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The timestamp when the registry was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListRegistriesRequest {
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

  /**
   * <p>Filter registries by their current status. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, <code>DELETING</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status?: RegistryStatus | undefined;
}

/**
 * <p>Contains summary information about a registry.</p>
 * @public
 */
export interface RegistrySummary {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the registry.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The type of authorizer used by the registry. This controls the authorization method for the Search and Invoke APIs used by consumers.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> </ul>
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;

  /**
   * <p>The current status of the registry. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, <code>DELETING</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * <p>The reason for the current status, typically set when the status is a failure state.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The timestamp when the registry was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListRegistriesResponse {
  /**
   * <p>The list of registry summaries. For details about the fields in each summary, see the <code>RegistrySummary</code> data type.</p>
   * @public
   */
  registries: RegistrySummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Wrapper for updating an optional approval configuration field with PATCH semantics. When present in an update request, the approval configuration is replaced with the provided value. When absent, the approval configuration is left unchanged.</p>
 * @public
 */
export interface UpdatedApprovalConfiguration {
  /**
   * <p>The updated approval configuration value. Set to <code>null</code> to unset the approval configuration.</p>
   * @public
   */
  optionalValue?: ApprovalConfiguration | undefined;
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
 * @public
 */
export interface UpdateRegistryRequest {
  /**
   * <p>The identifier of the registry to update. You can specify either the Amazon Resource Name (ARN) or the ID of the registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The updated name of the registry.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated description of the registry. To clear the description, include the <code>UpdatedDescription</code> wrapper with <code>optionalValue</code> not specified.</p>
   * @public
   */
  description?: UpdatedDescription | undefined;

  /**
   * <p>The updated authorizer configuration for the registry. Changing the authorizer configuration can break existing consumers of the registry who are using the authorization type prior to the update.</p>
   * @public
   */
  authorizerConfiguration?: UpdatedAuthorizerConfiguration | undefined;

  /**
   * <p>The updated approval configuration for registry records. The updated configuration only affects new records that move to <code>PENDING_APPROVAL</code> status after the change. Existing records already in <code>PENDING_APPROVAL</code> status are not affected.</p>
   * @public
   */
  approvalConfiguration?: UpdatedApprovalConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateRegistryResponse {
  /**
   * <p>The name of the updated registry.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the updated registry.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the updated registry.</p>
   * @public
   */
  registryId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the updated registry.</p>
   * @public
   */
  registryArn: string | undefined;

  /**
   * <p>The type of authorizer used by the updated registry. This controls the authorization method for the Search and Invoke APIs used by consumers.</p> <ul> <li> <p> <code>CUSTOM_JWT</code> - Authorize with a bearer token.</p> </li> <li> <p> <code>AWS_IAM</code> - Authorize with your Amazon Web Services IAM credentials.</p> </li> </ul>
   * @public
   */
  authorizerType?: RegistryAuthorizerType | undefined;

  /**
   * <p>The authorizer configuration for the updated registry. For details, see the <code>AuthorizerConfiguration</code> data type.</p>
   * @public
   */
  authorizerConfiguration?: AuthorizerConfiguration | undefined;

  /**
   * <p>The approval configuration for the updated registry. For details, see the <code>ApprovalConfiguration</code> data type.</p>
   * @public
   */
  approvalConfiguration?: ApprovalConfiguration | undefined;

  /**
   * <p>The current status of the updated registry. Possible values include <code>CREATING</code>, <code>READY</code>, <code>UPDATING</code>, <code>CREATE_FAILED</code>, <code>UPDATE_FAILED</code>, <code>DELETING</code>, and <code>DELETE_FAILED</code>.</p>
   * @public
   */
  status: RegistryStatus | undefined;

  /**
   * <p>The reason for the current status of the updated registry.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The timestamp when the registry was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The timestamp when the registry was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
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
export type ToolSchema =
  | ToolSchema.InlinePayloadMember
  | ToolSchema.S3Member
  | ToolSchema.$UnknownMember;

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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3: (value: S3Configuration) => T;
    inlinePayload: (value: ToolDefinition[]) => T;
    _: (name: string, value: any) => T;
  }
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
  | McpTargetConfiguration.ApiGatewayMember
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
    apiGateway?: never;
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
    apiGateway?: never;
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
    apiGateway?: never;
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
    apiGateway?: never;
    $unknown?: never;
  }

  /**
   * <p>The configuration for an Amazon API Gateway target.</p>
   * @public
   */
  export interface ApiGatewayMember {
    openApiSchema?: never;
    smithyModel?: never;
    lambda?: never;
    mcpServer?: never;
    apiGateway: ApiGatewayTargetConfiguration;
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
    apiGateway?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    openApiSchema: (value: ApiSchemaConfiguration) => T;
    smithyModel: (value: ApiSchemaConfiguration) => T;
    lambda: (value: McpLambdaTargetConfiguration) => T;
    mcpServer: (value: McpServerTargetConfiguration) => T;
    apiGateway: (value: ApiGatewayTargetConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The configuration for a gateway target. This structure defines how the gateway connects to and interacts with the target endpoint.</p>
 * @public
 */
export type TargetConfiguration =
  | TargetConfiguration.McpMember
  | TargetConfiguration.$UnknownMember;

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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    mcp: (value: McpTargetConfiguration) => T;
    _: (name: string, value: any) => T;
  }
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

  /**
   * <p>Optional configuration for HTTP header and query parameter propagation to and from the gateway target.</p>
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * <p>The private endpoint configuration for the gateway target. Use this to connect the gateway to private resources in your VPC.</p>
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;
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

  /**
   * <p>The metadata configuration that was applied to the created gateway target.</p>
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * <p>The private endpoint configuration for the gateway target.</p>
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * <p>The managed resources created by the gateway for private endpoint connectivity.</p>
   * @public
   */
  privateEndpointManagedResources?: ManagedResourceDetails[] | undefined;

  /**
   * <p>OAuth2 authorization data for the created gateway target. This data is returned when a target is configured with a credential provider with authorization code grant type and requires user federation.</p>
   * @public
   */
  authorizationData?: AuthorizationData | undefined;
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

  /**
   * <p>The metadata configuration for HTTP header and query parameter propagation to and from this gateway target.</p>
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * <p>The private endpoint configuration for a gateway target. Defines how the gateway connects to private resources in your VPC.</p>
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * <p>A list of managed resources created by the gateway for private endpoint connectivity. These resources are created in your account when you use a managed VPC Lattice resource configuration.</p>
   * @public
   */
  privateEndpointManagedResources?: ManagedResourceDetails[] | undefined;

  /**
   * <p>OAuth2 authorization data for the gateway target. This data is returned when a target is configured with a credential provider with authorization code grant type and requires user federation.</p>
   * @public
   */
  authorizationData?: AuthorizationData | undefined;
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

  /**
   * <p>The metadata configuration for HTTP header and query parameter propagation for the retrieved gateway target.</p>
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * <p>The private endpoint configuration for the gateway target.</p>
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * <p>The managed resources created by the gateway for private endpoint connectivity.</p>
   * @public
   */
  privateEndpointManagedResources?: ManagedResourceDetails[] | undefined;

  /**
   * <p>OAuth2 authorization data for the gateway target. This data is returned when a target is configured with a credential provider with authorization code grant type and requires user federation.</p>
   * @public
   */
  authorizationData?: AuthorizationData | undefined;
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

  /**
   * <p>Configuration for HTTP header and query parameter propagation to the gateway target.</p>
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * <p>The private endpoint configuration for the gateway target. Use this to connect the gateway to private resources in your VPC.</p>
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;
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

  /**
   * <p>The metadata configuration that was applied to the gateway target.</p>
   * @public
   */
  metadataConfiguration?: MetadataConfiguration | undefined;

  /**
   * <p>The private endpoint configuration for the gateway target.</p>
   * @public
   */
  privateEndpoint?: PrivateEndpoint | undefined;

  /**
   * <p>The managed resources created by the gateway for private endpoint connectivity.</p>
   * @public
   */
  privateEndpointManagedResources?: ManagedResourceDetails[] | undefined;

  /**
   * <p>OAuth2 authorization data for the updated gateway target. This data is returned when a target is configured with a credential provider with authorization code grant type and requires user federation.</p>
   * @public
   */
  authorizationData?: AuthorizationData | undefined;
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
