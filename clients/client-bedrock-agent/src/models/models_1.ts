// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import { DocumentType as __DocumentType } from "@smithy/types";

import {
  AgentKnowledgeBase,
  AgentKnowledgeBaseSummary,
  AgentStatus,
  AgentVersion,
  AgentVersionFilterSensitiveLog,
  AgentVersionSummary,
  FlowDefinition,
  FlowValidation,
  FlowValidationFilterSensitiveLog,
  KnowledgeBase,
  KnowledgeBaseConfiguration,
  KnowledgeBaseState,
  KnowledgeBaseStatus,
  PromptInferenceConfiguration,
  PromptTemplateConfiguration,
  PromptTemplateConfigurationFilterSensitiveLog,
  PromptTemplateType,
  StorageConfiguration,
} from "./models_0";

/**
 * @public
 */
export interface ListAgentKnowledgeBasesRequest {
  /**
   * <p>The unique identifier of the agent for which to return information about knowledge bases associated with it.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent for which to return information about knowledge bases associated with it.</p>
   * @public
   */
  agentVersion: string | undefined;

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
 * @public
 */
export interface ListAgentKnowledgeBasesResponse {
  /**
   * <p>A list of objects, each of which contains information about a knowledge base associated with the agent.</p>
   * @public
   */
  agentKnowledgeBaseSummaries: AgentKnowledgeBaseSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesRequest {
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
 * <p>Contains details about a knowledge base.</p>
 * @public
 */
export interface KnowledgeBaseSummary {
  /**
   * <p>The unique identifier of the knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the knowledge base.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the knowledge base.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the knowledge base.</p>
   * @public
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * <p>The time the knowledge base was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesResponse {
  /**
   * <p>A list of knowledge bases with information about each knowledge base.</p>
   * @public
   */
  knowledgeBaseSummaries: KnowledgeBaseSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentKnowledgeBaseRequest {
  /**
   * <p>The unique identifier of the agent associated with the knowledge base that you want to update.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent associated with the knowledge base that you want to update.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The unique identifier of the knowledge base that has been associated with an agent.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>Specifies a new description for the knowledge base associated with an agent.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies whether the agent uses the knowledge base or not when sending an <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent-runtime_InvokeAgent.html">InvokeAgent</a> request.</p>
   * @public
   */
  knowledgeBaseState?: KnowledgeBaseState | undefined;
}

/**
 * @public
 */
export interface UpdateAgentKnowledgeBaseResponse {
  /**
   * <p>Contains details about the knowledge base that has been associated with an agent.</p>
   * @public
   */
  agentKnowledgeBase: AgentKnowledgeBase | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseRequest {
  /**
   * <p>The unique identifier of the knowledge base to update.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>Specifies a new name for the knowledge base.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specifies a new description for the knowledge base.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies a different Amazon Resource Name (ARN) of the IAM role with permissions to invoke API operations on the knowledge base.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Specifies the configuration for the embeddings model used for the knowledge base. You must use the same configuration as when the knowledge base was created.</p>
   * @public
   */
  knowledgeBaseConfiguration: KnowledgeBaseConfiguration | undefined;

  /**
   * <p>Specifies the configuration for the vector store used for the knowledge base. You must use the same configuration as when the knowledge base was created.</p>
   * @public
   */
  storageConfiguration: StorageConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseResponse {
  /**
   * <p>Contains details about the knowledge base.</p>
   * @public
   */
  knowledgeBase: KnowledgeBase | undefined;
}

/**
 * <p>Contains specifications for an Amazon Bedrock agent with which to use the prompt. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html">Create a prompt using Prompt management</a> and <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html">Automate tasks in your application using conversational agents</a>.</p>
 * @public
 */
export interface PromptAgentResource {
  /**
   * <p>The ARN of the agent with which to use the prompt.</p>
   * @public
   */
  agentIdentifier: string | undefined;
}

/**
 * <p>Contains specifications for a generative AI resource with which to use the prompt. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html">Create a prompt using Prompt management</a>.</p>
 * @public
 */
export type PromptGenAiResource = PromptGenAiResource.AgentMember | PromptGenAiResource.$UnknownMember;

/**
 * @public
 */
export namespace PromptGenAiResource {
  /**
   * <p>Specifies an Amazon Bedrock agent with which to use the prompt.</p>
   * @public
   */
  export interface AgentMember {
    agent: PromptAgentResource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    agent?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    agent: (value: PromptAgentResource) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: PromptGenAiResource, visitor: Visitor<T>): T => {
    if (value.agent !== undefined) return visitor.agent(value.agent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Contains a key-value pair that defines a metadata tag and value to attach to a prompt variant. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/prompt-management-create.html">Create a prompt using Prompt management</a>.</p>
 * @public
 */
export interface PromptMetadataEntry {
  /**
   * <p>The key of a metadata tag for a prompt variant.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value of a metadata tag for a prompt variant.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>Contains details about a variant of the prompt.</p>
 * @public
 */
export interface PromptVariant {
  /**
   * <p>The name of the prompt variant.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of prompt template to use.</p>
   * @public
   */
  templateType: PromptTemplateType | undefined;

  /**
   * <p>Contains configurations for the prompt template.</p>
   * @public
   */
  templateConfiguration: PromptTemplateConfiguration | undefined;

  /**
   * <p>The unique identifier of the model or <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html">inference profile</a> with which to run inference on the prompt.</p>
   * @public
   */
  modelId?: string | undefined;

  /**
   * <p>Contains inference configurations for the prompt variant.</p>
   * @public
   */
  inferenceConfiguration?: PromptInferenceConfiguration | undefined;

  /**
   * <p>An array of objects, each containing a key-value pair that defines a metadata tag and value to attach to a prompt variant.</p>
   * @public
   */
  metadata?: PromptMetadataEntry[] | undefined;

  /**
   * <p>Contains model-specific inference configurations that aren't in the <code>inferenceConfiguration</code> field. To see model-specific inference parameters, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/model-parameters.html">Inference request parameters and response fields for foundation models</a>.</p>
   * @public
   */
  additionalModelRequestFields?: __DocumentType | undefined;

  /**
   * <p>Specifies a generative AI resource with which to use the prompt.</p>
   * @public
   */
  genAiResource?: PromptGenAiResource | undefined;
}

/**
 * @public
 */
export interface CreatePromptRequest {
  /**
   * <p>A name for the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the prompt.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to encrypt the prompt.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>The name of the default variant for the prompt. This value must match the <code>name</code> field in the relevant <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html">PromptVariant</a> object.</p>
   * @public
   */
  defaultVariant?: string | undefined;

  /**
   * <p>A list of objects, each containing details about a variant of the prompt.</p>
   * @public
   */
  variants?: PromptVariant[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Any tags that you want to attach to the prompt. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html">Tagging resources in Amazon Bedrock</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePromptResponse {
  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the prompt.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that you encrypted the prompt with.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>The name of the default variant for your prompt.</p>
   * @public
   */
  defaultVariant?: string | undefined;

  /**
   * <p>A list of objects, each containing details about a variant of the prompt.</p>
   * @public
   */
  variants?: PromptVariant[] | undefined;

  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the prompt. When you create a prompt, the version created is the <code>DRAFT</code> version.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The time at which the prompt was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the prompt was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface CreatePromptVersionRequest {
  /**
   * <p>The unique identifier of the prompt that you want to create a version of.</p>
   * @public
   */
  promptIdentifier: string | undefined;

  /**
   * <p>A description for the version of the prompt.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure that the API request completes no more than one time. If this token matches a previous request,
   *       Amazon Bedrock ignores the request, but does not return an error. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">Ensuring idempotency</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Any tags that you want to attach to the version of the prompt. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/tagging.html">Tagging resources in Amazon Bedrock</a>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePromptVersionResponse {
  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the version.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to encrypt the version of the prompt.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>The name of the default variant for the prompt. This value must match the <code>name</code> field in the relevant <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html">PromptVariant</a> object.</p>
   * @public
   */
  defaultVariant?: string | undefined;

  /**
   * <p>A list of objects, each containing details about a variant of the prompt.</p>
   * @public
   */
  variants?: PromptVariant[] | undefined;

  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the version of the prompt.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the prompt that was created. Versions are numbered incrementally, starting from 1.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The time at which the prompt was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the prompt was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface DeletePromptRequest {
  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  promptIdentifier: string | undefined;

  /**
   * <p>The version of the prompt to delete. To delete the prompt, omit this field.</p>
   * @public
   */
  promptVersion?: string | undefined;
}

/**
 * @public
 */
export interface DeletePromptResponse {
  /**
   * <p>The unique identifier of the prompt that was deleted.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The version of the prompt that was deleted.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * @public
 */
export interface GetPromptRequest {
  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  promptIdentifier: string | undefined;

  /**
   * <p>The version of the prompt about which you want to retrieve information. Omit this field to return information about the working draft of the prompt.</p>
   * @public
   */
  promptVersion?: string | undefined;
}

/**
 * @public
 */
export interface GetPromptResponse {
  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The descriptino of the prompt.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that the prompt is encrypted with.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>The name of the default variant for the prompt. This value must match the <code>name</code> field in the relevant <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html">PromptVariant</a> object.</p>
   * @public
   */
  defaultVariant?: string | undefined;

  /**
   * <p>A list of objects, each containing details about a variant of the prompt.</p>
   * @public
   */
  variants?: PromptVariant[] | undefined;

  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the prompt or the prompt version (if you specified a version in the request).</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the prompt.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The time at which the prompt was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the prompt was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListPromptsRequest {
  /**
   * <p>The unique identifier of the prompt for whose versions you want to return information. Omit this field to list information about all prompts in an account.</p>
   * @public
   */
  promptIdentifier?: string | undefined;

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
 * <p>Contains information about a prompt in your Prompt management tool.</p>
 *          <p>This data type is used in the following API operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_ListPrompts.html#API_agent_ListPrompts_ResponseSyntax">ListPrompts response</a>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface PromptSummary {
  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the prompt.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the prompt or the prompt version (if you specified a version in the request).</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the prompt that this summary applies to.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The time at which the prompt was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the prompt was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListPromptsResponse {
  /**
   * <p>A list, each member of which contains information about a prompt using Prompt management.</p>
   * @public
   */
  promptSummaries: PromptSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePromptRequest {
  /**
   * <p>A name for the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description for the prompt.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to encrypt the prompt.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>The name of the default variant for the prompt. This value must match the <code>name</code> field in the relevant <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html">PromptVariant</a> object.</p>
   * @public
   */
  defaultVariant?: string | undefined;

  /**
   * <p>A list of objects, each containing details about a variant of the prompt.</p>
   * @public
   */
  variants?: PromptVariant[] | undefined;

  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  promptIdentifier: string | undefined;
}

/**
 * @public
 */
export interface UpdatePromptResponse {
  /**
   * <p>The name of the prompt.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the prompt.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to encrypt the prompt.</p>
   * @public
   */
  customerEncryptionKeyArn?: string | undefined;

  /**
   * <p>The name of the default variant for the prompt. This value must match the <code>name</code> field in the relevant <a href="https://docs.aws.amazon.com/bedrock/latest/APIReference/API_agent_PromptVariant.html">PromptVariant</a> object.</p>
   * @public
   */
  defaultVariant?: string | undefined;

  /**
   * <p>A list of objects, each containing details about a variant of the prompt.</p>
   * @public
   */
  variants?: PromptVariant[] | undefined;

  /**
   * <p>The unique identifier of the prompt.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the prompt.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The version of the prompt. When you update a prompt, the version updated is the <code>DRAFT</code> version.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The time at which the prompt was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time at which the prompt was last updated.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to list tags.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The key-value pairs for the tags associated with the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>An object containing key-value pairs that define the tags to attach to the resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource from which to remove tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of keys of the tags to remove from the resource.</p>
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
export interface ValidateFlowDefinitionRequest {
  /**
   * <p>The definition of a flow to validate.</p>
   * @public
   */
  definition: FlowDefinition | undefined;
}

/**
 * @public
 */
export interface ValidateFlowDefinitionResponse {
  /**
   * <p>Contains an array of objects, each of which contains an error identified by validation.</p>
   * @public
   */
  validations: FlowValidation[] | undefined;
}

/**
 * @public
 */
export interface DeleteAgentVersionRequest {
  /**
   * <p>The unique identifier of the agent that the version belongs to.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent to delete.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>By default, this value is <code>false</code> and deletion is stopped if the resource is in use. If you set it to <code>true</code>, the resource will be deleted even if the resource is in use.</p>
   * @public
   */
  skipResourceInUseCheck?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteAgentVersionResponse {
  /**
   * <p>The unique identifier of the agent that the version belongs to.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version that was deleted.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>The status of the agent version.</p>
   * @public
   */
  agentStatus: AgentStatus | undefined;
}

/**
 * @public
 */
export interface GetAgentVersionRequest {
  /**
   * <p>The unique identifier of the agent.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>The version of the agent.</p>
   * @public
   */
  agentVersion: string | undefined;
}

/**
 * @public
 */
export interface GetAgentVersionResponse {
  /**
   * <p>Contains details about the version of the agent.</p>
   * @public
   */
  agentVersion: AgentVersion | undefined;
}

/**
 * @public
 */
export interface ListAgentVersionsRequest {
  /**
   * <p>The unique identifier of the agent.</p>
   * @public
   */
  agentId: string | undefined;

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
 * @public
 */
export interface ListAgentVersionsResponse {
  /**
   * <p>A list of objects, each of which contains information about a version of the agent.</p>
   * @public
   */
  agentVersionSummaries: AgentVersionSummary[] | undefined;

  /**
   * <p>If the total number of results is greater than the <code>maxResults</code> value provided in the request, use this token when making another request in the <code>nextToken</code> field to return the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @internal
 */
export const PromptAgentResourceFilterSensitiveLog = (obj: PromptAgentResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PromptGenAiResourceFilterSensitiveLog = (obj: PromptGenAiResource): any => {
  if (obj.agent !== undefined) return { agent: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const PromptMetadataEntryFilterSensitiveLog = (obj: PromptMetadataEntry): any => ({
  ...obj,
  ...(obj.key && { key: SENSITIVE_STRING }),
  ...(obj.value && { value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PromptVariantFilterSensitiveLog = (obj: PromptVariant): any => ({
  ...obj,
  ...(obj.templateConfiguration && {
    templateConfiguration: PromptTemplateConfigurationFilterSensitiveLog(obj.templateConfiguration),
  }),
  ...(obj.inferenceConfiguration && { inferenceConfiguration: obj.inferenceConfiguration }),
  ...(obj.metadata && { metadata: SENSITIVE_STRING }),
  ...(obj.genAiResource && { genAiResource: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePromptRequestFilterSensitiveLog = (obj: CreatePromptRequest): any => ({
  ...obj,
  ...(obj.variants && { variants: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePromptResponseFilterSensitiveLog = (obj: CreatePromptResponse): any => ({
  ...obj,
  ...(obj.variants && { variants: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreatePromptVersionResponseFilterSensitiveLog = (obj: CreatePromptVersionResponse): any => ({
  ...obj,
  ...(obj.variants && { variants: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetPromptResponseFilterSensitiveLog = (obj: GetPromptResponse): any => ({
  ...obj,
  ...(obj.variants && { variants: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePromptRequestFilterSensitiveLog = (obj: UpdatePromptRequest): any => ({
  ...obj,
  ...(obj.variants && { variants: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdatePromptResponseFilterSensitiveLog = (obj: UpdatePromptResponse): any => ({
  ...obj,
  ...(obj.variants && { variants: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ValidateFlowDefinitionRequestFilterSensitiveLog = (obj: ValidateFlowDefinitionRequest): any => ({
  ...obj,
  ...(obj.definition && { definition: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ValidateFlowDefinitionResponseFilterSensitiveLog = (obj: ValidateFlowDefinitionResponse): any => ({
  ...obj,
  ...(obj.validations && { validations: obj.validations.map((item) => FlowValidationFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const GetAgentVersionResponseFilterSensitiveLog = (obj: GetAgentVersionResponse): any => ({
  ...obj,
  ...(obj.agentVersion && { agentVersion: AgentVersionFilterSensitiveLog(obj.agentVersion) }),
});
