// smithy-typescript generated code
import { PolicyGenerationStatus, PolicyStatus, PolicyValidationMode, SchemaType, TargetStatus } from "./enums";
import {
  type KmsConfiguration,
  type MetadataConfiguration,
  type PolicyDefinition,
  type Resource,
  ApiGatewayTargetConfiguration,
  ApiSchemaConfiguration,
  CredentialProviderConfiguration,
  McpServerTargetConfiguration,
  S3Configuration,
} from "./models_0";

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
  description?: string | undefined;

  /**
   * <p>The new Cedar policy statement that defines the access control rules. This replaces the existing policy definition with new logic while maintaining the policy's identity.</p>
   * @public
   */
  definition: PolicyDefinition | undefined;

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
