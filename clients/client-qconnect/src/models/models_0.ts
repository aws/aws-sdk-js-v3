// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { QConnectServiceException as __BaseException } from "./QConnectServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
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
 * @public
 * <p>Configuration information for Amazon AppIntegrations to automatically ingest content.</p>
 */
export interface AppIntegrationsConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the AppIntegrations DataIntegration to use for ingesting content.</p>
   *          <ul>
   *             <li>
   *                <p> For <a href="https://developer.salesforce.com/docs/atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__kav.htm"> Salesforce</a>, your AppIntegrations DataIntegration must have an ObjectConfiguration if
   *           objectFields is not provided, including at least <code>Id</code>,
   *             <code>ArticleNumber</code>, <code>VersionNumber</code>, <code>Title</code>,
   *             <code>PublishStatus</code>, and <code>IsDeleted</code> as source fields. </p>
   *             </li>
   *             <li>
   *                <p> For <a href="https://developer.servicenow.com/dev.do#!/reference/api/rome/rest/knowledge-management-api"> ServiceNow</a>, your AppIntegrations DataIntegration must have an ObjectConfiguration if
   *           objectFields is not provided, including at least <code>number</code>,
   *             <code>short_description</code>, <code>sys_mod_count</code>, <code>workflow_state</code>,
   *           and <code>active</code> as source fields. </p>
   *             </li>
   *             <li>
   *                <p> For <a href="https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/">
   *             Zendesk</a>, your AppIntegrations DataIntegration must have an ObjectConfiguration if
   *             <code>objectFields</code> is not provided, including at least <code>id</code>,
   *             <code>title</code>, <code>updated_at</code>, and <code>draft</code> as source fields.
   *         </p>
   *             </li>
   *             <li>
   *                <p> For <a href="https://learn.microsoft.com/en-us/sharepoint/dev/sp-add-ins/sharepoint-net-server-csom-jsom-and-rest-api-index">SharePoint</a>, your AppIntegrations DataIntegration must have a FileConfiguration,
   *           including only file extensions that are among <code>docx</code>, <code>pdf</code>,
   *             <code>html</code>, <code>htm</code>, and <code>txt</code>. </p>
   *             </li>
   *             <li>
   *                <p> For <a href="https://aws.amazon.com/s3/">Amazon S3</a>, the
   *           ObjectConfiguration and FileConfiguration of your AppIntegrations DataIntegration must be null.
   *           The <code>SourceURI</code> of your DataIntegration must use the following format:
   *             <code>s3://your_s3_bucket_name</code>.</p>
   *                <important>
   *                   <p>The bucket policy of the corresponding S3 bucket must allow the Amazon Web Services
   *             principal <code>app-integrations.amazonaws.com</code> to perform
   *               <code>s3:ListBucket</code>, <code>s3:GetObject</code>, and
   *               <code>s3:GetBucketLocation</code> against the bucket.</p>
   *                </important>
   *             </li>
   *          </ul>
   */
  appIntegrationArn: string | undefined;

  /**
   * @public
   * <p>The fields from the source that are made available to your agents in Amazon Q. Optional if
   *       ObjectConfiguration is included in the provided DataIntegration. </p>
   *          <ul>
   *             <li>
   *                <p> For <a href="https://developer.salesforce.com/docs/atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__kav.htm"> Salesforce</a>, you must include at least <code>Id</code>,
   *             <code>ArticleNumber</code>, <code>VersionNumber</code>, <code>Title</code>,
   *             <code>PublishStatus</code>, and <code>IsDeleted</code>. </p>
   *             </li>
   *             <li>
   *                <p>For <a href="https://developer.servicenow.com/dev.do#!/reference/api/rome/rest/knowledge-management-api"> ServiceNow</a>, you must include at least <code>number</code>,
   *             <code>short_description</code>, <code>sys_mod_count</code>, <code>workflow_state</code>,
   *           and <code>active</code>. </p>
   *             </li>
   *             <li>
   *                <p>For <a href="https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/">
   *             Zendesk</a>, you must include at least <code>id</code>, <code>title</code>,
   *             <code>updated_at</code>, and <code>draft</code>. </p>
   *             </li>
   *          </ul>
   *          <p>Make sure to include additional fields. These fields are indexed and used to source
   *       recommendations. </p>
   */
  objectFields?: string[];
}

/**
 * @public
 * <p>The request could not be processed because of conflict in the current state of the
 *       resource. For example, if you're using a <code>Create</code> API (such as
 *         <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the
 *       same name) is being created or mutated.</p>
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
 * <p>The data that is input into Amazon Q as a result of the assistant association.</p>
 */
export type AssistantAssociationInputData =
  | AssistantAssociationInputData.KnowledgeBaseIdMember
  | AssistantAssociationInputData.$UnknownMember;

/**
 * @public
 */
export namespace AssistantAssociationInputData {
  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it.</p>
   */
  export interface KnowledgeBaseIdMember {
    knowledgeBaseId: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    knowledgeBaseId?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    knowledgeBaseId: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AssistantAssociationInputData, visitor: Visitor<T>): T => {
    if (value.knowledgeBaseId !== undefined) return visitor.knowledgeBaseId(value.knowledgeBaseId);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const AssociationType = {
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
} as const;

/**
 * @public
 */
export type AssociationType = (typeof AssociationType)[keyof typeof AssociationType];

/**
 * @public
 */
export interface CreateAssistantAssociationRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * @public
   * <p>The type of association.</p>
   */
  associationType: AssociationType | undefined;

  /**
   * @public
   * <p>The identifier of the associated resource.</p>
   */
  association: AssistantAssociationInputData | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>Association information about the knowledge base.</p>
 */
export interface KnowledgeBaseAssociationData {
  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it.</p>
   */
  knowledgeBaseId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn?: string;
}

/**
 * @public
 * <p>The data that is output as a result of the assistant association.</p>
 */
export type AssistantAssociationOutputData =
  | AssistantAssociationOutputData.KnowledgeBaseAssociationMember
  | AssistantAssociationOutputData.$UnknownMember;

/**
 * @public
 */
export namespace AssistantAssociationOutputData {
  /**
   * @public
   * <p>The knowledge base where output data is sent.</p>
   */
  export interface KnowledgeBaseAssociationMember {
    knowledgeBaseAssociation: KnowledgeBaseAssociationData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    knowledgeBaseAssociation?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    knowledgeBaseAssociation: (value: KnowledgeBaseAssociationData) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AssistantAssociationOutputData, visitor: Visitor<T>): T => {
    if (value.knowledgeBaseAssociation !== undefined)
      return visitor.knowledgeBaseAssociation(value.knowledgeBaseAssociation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Information about the assistant association.</p>
 */
export interface AssistantAssociationData {
  /**
   * @public
   * <p>The identifier of the assistant association.</p>
   */
  assistantAssociationId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the assistant association.</p>
   */
  assistantAssociationArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Q assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Q assistant.</p>
   */
  assistantArn: string | undefined;

  /**
   * @public
   * <p>The type of association.</p>
   */
  associationType: AssociationType | undefined;

  /**
   * @public
   * <p>A union type that currently has a single argument, the knowledge base ID.</p>
   */
  associationData: AssistantAssociationOutputData | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateAssistantAssociationResponse {
  /**
   * @public
   * <p>The assistant association.</p>
   */
  assistantAssociation?: AssistantAssociationData;
}

/**
 * @public
 * <p>The specified resource does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The specified resource name.</p>
   */
  resourceName?: string;

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
    this.resourceName = opts.resourceName;
  }
}

/**
 * @public
 * <p>You've exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use service quotas to request a service quota increase.</p>
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
 * @public
 * <p>The input fails to satisfy the constraints specified by a service.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface DeleteAssistantAssociationRequest {
  /**
   * @public
   * <p>The identifier of the assistant association. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantAssociationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Q assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssistantAssociationResponse {}

/**
 * @public
 */
export interface GetAssistantAssociationRequest {
  /**
   * @public
   * <p>The identifier of the assistant association. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantAssociationId: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Q assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;
}

/**
 * @public
 */
export interface GetAssistantAssociationResponse {
  /**
   * @public
   * <p>The assistant association.</p>
   */
  assistantAssociation?: AssistantAssociationData;
}

/**
 * @public
 */
export interface ListAssistantAssociationsRequest {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The identifier of the Amazon Q assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;
}

/**
 * @public
 * <p>Summary information about the assistant association.</p>
 */
export interface AssistantAssociationSummary {
  /**
   * @public
   * <p>The identifier of the assistant association.</p>
   */
  assistantAssociationId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the assistant association.</p>
   */
  assistantAssociationArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Q assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Q assistant.</p>
   */
  assistantArn: string | undefined;

  /**
   * @public
   * <p>The type of association.</p>
   */
  associationType: AssociationType | undefined;

  /**
   * @public
   * <p>The association data.</p>
   */
  associationData: AssistantAssociationOutputData | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListAssistantAssociationsResponse {
  /**
   * @public
   * <p>Summary information about assistant associations.</p>
   */
  assistantAssociationSummaries: AssistantAssociationSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The configuration information for the customer managed key used for encryption.</p>
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * @public
   * <p>The customer managed key used for encryption. For more information about setting up a
   *         customer managed key for Amazon Q, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for your instance</a>.
   *       For information about valid ID values, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key identifiers (KeyId)</a>.</p>
   */
  kmsKeyId?: string;
}

/**
 * @public
 * @enum
 */
export const AssistantType = {
  AGENT: "AGENT",
} as const;

/**
 * @public
 */
export type AssistantType = (typeof AssistantType)[keyof typeof AssistantType];

/**
 * @public
 */
export interface CreateAssistantRequest {
  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The name of the assistant.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of assistant.</p>
   */
  type: AssistantType | undefined;

  /**
   * @public
   * <p>The description of the assistant.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The configuration information for the customer managed key used for encryption. </p>
   *          <p>The customer managed key must have a policy that allows <code>kms:CreateGrant</code>,
   *         <code> kms:DescribeKey</code>, <code>kms:Decrypt</code>, and
   *         <code>kms:GenerateDataKey*</code> permissions to the IAM identity using the
   *       key to invoke Amazon Q. To use Amazon Q with chat, the key policy must also allow
   *         <code>kms:Decrypt</code>, <code>kms:GenerateDataKey*</code>, and
   *         <code>kms:DescribeKey</code> permissions to the <code>connect.amazonaws.com</code> service
   *       principal. </p>
   *          <p>For more information about setting up a customer managed key for Amazon Q, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for
   *         your instance</a>.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
}

/**
 * @public
 * @enum
 */
export const AssistantCapabilityType = {
  V1: "V1",
  V2: "V2",
} as const;

/**
 * @public
 */
export type AssistantCapabilityType = (typeof AssistantCapabilityType)[keyof typeof AssistantCapabilityType];

/**
 * @public
 * <p>The capability configuration for an Amazon Q assistant. </p>
 */
export interface AssistantCapabilityConfiguration {
  /**
   * @public
   * <p>The type of Amazon Q assistant capability. </p>
   */
  type?: AssistantCapabilityType;
}

/**
 * @public
 * <p>The configuration information for the Amazon Q assistant integration.</p>
 */
export interface AssistantIntegrationConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the integrated Amazon SNS topic used for streaming chat messages.</p>
   */
  topicIntegrationArn?: string;
}

/**
 * @public
 * @enum
 */
export const AssistantStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type AssistantStatus = (typeof AssistantStatus)[keyof typeof AssistantStatus];

/**
 * @public
 * <p>The assistant data.</p>
 */
export interface AssistantData {
  /**
   * @public
   * <p>The identifier of the Amazon Q assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Q assistant.</p>
   */
  assistantArn: string | undefined;

  /**
   * @public
   * <p>The name.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of assistant.</p>
   */
  type: AssistantType | undefined;

  /**
   * @public
   * <p>The status of the assistant.</p>
   */
  status: AssistantStatus | undefined;

  /**
   * @public
   * <p>The description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The configuration information for the customer managed key used for encryption. </p>
   *          <p>This KMS key must have a policy that allows <code>kms:CreateGrant</code>,
   *         <code>kms:DescribeKey</code>, <code>kms:Decrypt</code>, and
   *         <code>kms:GenerateDataKey*</code> permissions to the IAM identity using the
   *       key to invoke Amazon Q. To use Amazon Q with chat, the key policy must also allow
   *         <code>kms:Decrypt</code>, <code>kms:GenerateDataKey*</code>, and
   *         <code>kms:DescribeKey</code> permissions to the <code>connect.amazonaws.com</code> service
   *       principal. </p>
   *          <p>For more information about setting up a customer managed key for Amazon Q, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for
   *         your instance</a>.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * @public
   * <p>The configuration information for the Amazon Q assistant integration.</p>
   */
  integrationConfiguration?: AssistantIntegrationConfiguration;

  /**
   * @public
   * <p>The configuration information for the Amazon Q assistant capability. </p>
   */
  capabilityConfiguration?: AssistantCapabilityConfiguration;
}

/**
 * @public
 */
export interface CreateAssistantResponse {
  /**
   * @public
   * <p>Information about the assistant.</p>
   */
  assistant?: AssistantData;
}

/**
 * @public
 */
export interface DeleteAssistantRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssistantResponse {}

/**
 * @public
 */
export interface GetAssistantRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;
}

/**
 * @public
 */
export interface GetAssistantResponse {
  /**
   * @public
   * <p>Information about the assistant.</p>
   */
  assistant?: AssistantData;
}

/**
 * @public
 */
export interface GetRecommendationsRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * @public
   * <p>The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The duration (in seconds) for which the call waits for a recommendation to be made
   *       available before returning. If a recommendation is available, the call returns sooner than
   *         <code>WaitTimeSeconds</code>. If no messages are available and the wait time expires, the
   *       call returns successfully with an empty list.</p>
   */
  waitTimeSeconds?: number;
}

/**
 * @public
 * @enum
 */
export const RelevanceLevel = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type RelevanceLevel = (typeof RelevanceLevel)[keyof typeof RelevanceLevel];

/**
 * @public
 * <p>Details about the source content ranking data.</p>
 */
export interface RankingData {
  /**
   * @public
   * <p>The relevance level of the recommendation.</p>
   */
  relevanceScore?: number;

  /**
   * @public
   * <p>The relevance score of the content.</p>
   */
  relevanceLevel?: RelevanceLevel;
}

/**
 * @public
 * <p>Offset specification to describe highlighting of document excerpts for rendering search
 *       results and recommendations.</p>
 */
export interface Highlight {
  /**
   * @public
   * <p>The offset for the start of the highlight.</p>
   */
  beginOffsetInclusive?: number;

  /**
   * @public
   * <p>The offset for the end of the highlight.</p>
   */
  endOffsetExclusive?: number;
}

/**
 * @public
 * <p>The text of the document.</p>
 */
export interface DocumentText {
  /**
   * @public
   * <p>Text in the document.</p>
   */
  text?: string;

  /**
   * @public
   * <p>Highlights in the document text.</p>
   */
  highlights?: Highlight[];
}

/**
 * @public
 * <p>Details about the source content text data.</p>
 */
export interface TextData {
  /**
   * @public
   * <p>The text of the document.</p>
   */
  title?: DocumentText;

  /**
   * @public
   * <p>The text of the document.</p>
   */
  excerpt?: DocumentText;
}

/**
 * @public
 * <p>Details about the content data.</p>
 */
export interface ContentDataDetails {
  /**
   * @public
   * <p>Details about the content text data.</p>
   */
  textData: TextData | undefined;

  /**
   * @public
   * <p>Details about the content ranking data.</p>
   */
  rankingData: RankingData | undefined;
}

/**
 * @public
 * @enum
 */
export const SourceContentType = {
  KNOWLEDGE_CONTENT: "KNOWLEDGE_CONTENT",
} as const;

/**
 * @public
 */
export type SourceContentType = (typeof SourceContentType)[keyof typeof SourceContentType];

/**
 * @public
 * <p>Details about the source content data.</p>
 */
export interface SourceContentDataDetails {
  /**
   * @public
   * <p>The identifier of the source content.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The type of the source content.</p>
   */
  type: SourceContentType | undefined;

  /**
   * @public
   * <p> Details about the source content text data.</p>
   */
  textData: TextData | undefined;

  /**
   * @public
   * <p>Details about the source content ranking data.</p>
   */
  rankingData: RankingData | undefined;
}

/**
 * @public
 * <p>Reference information about the content.</p>
 */
export interface ContentReference {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn?: string;

  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it.</p>
   */
  knowledgeBaseId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the content.</p>
   */
  contentArn?: string;

  /**
   * @public
   * <p>The identifier of the content.</p>
   */
  contentId?: string;
}

/**
 * @public
 * <p>Reference information about generative content.</p>
 */
export interface GenerativeReference {
  /**
   * @public
   * <p>The identifier of the LLM model. </p>
   */
  modelId?: string;

  /**
   * @public
   * <p> The identifier of the LLM model. </p>
   */
  generationId?: string;
}

/**
 * @public
 * <p>Reference data.</p>
 */
export type DataReference =
  | DataReference.ContentReferenceMember
  | DataReference.GenerativeReferenceMember
  | DataReference.$UnknownMember;

/**
 * @public
 */
export namespace DataReference {
  /**
   * @public
   * <p>Reference information about the content.</p>
   */
  export interface ContentReferenceMember {
    contentReference: ContentReference;
    generativeReference?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Reference information about the generative content.</p>
   */
  export interface GenerativeReferenceMember {
    contentReference?: never;
    generativeReference: GenerativeReference;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    contentReference?: never;
    generativeReference?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    contentReference: (value: ContentReference) => T;
    generativeReference: (value: GenerativeReference) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DataReference, visitor: Visitor<T>): T => {
    if (value.contentReference !== undefined) return visitor.contentReference(value.contentReference);
    if (value.generativeReference !== undefined) return visitor.generativeReference(value.generativeReference);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The document.</p>
 */
export interface Document {
  /**
   * @public
   * <p>A reference to the content resource.</p>
   */
  contentReference: ContentReference | undefined;

  /**
   * @public
   * <p>The title of the document.</p>
   */
  title?: DocumentText;

  /**
   * @public
   * <p>The excerpt from the document.</p>
   */
  excerpt?: DocumentText;
}

/**
 * @public
 * @enum
 */
export const RecommendationType = {
  GENERATIVE_ANSWER: "GENERATIVE_ANSWER",
  GENERATIVE_RESPONSE: "GENERATIVE_RESPONSE",
  KNOWLEDGE_CONTENT: "KNOWLEDGE_CONTENT",
} as const;

/**
 * @public
 */
export type RecommendationType = (typeof RecommendationType)[keyof typeof RecommendationType];

/**
 * @public
 * <p>Data associated with the QUERY RecommendationTriggerType.</p>
 */
export interface QueryRecommendationTriggerData {
  /**
   * @public
   * <p>The text associated with the recommendation trigger.</p>
   */
  text?: string;
}

/**
 * @public
 * <p>A union type containing information related to the trigger.</p>
 */
export type RecommendationTriggerData =
  | RecommendationTriggerData.QueryMember
  | RecommendationTriggerData.$UnknownMember;

/**
 * @public
 */
export namespace RecommendationTriggerData {
  /**
   * @public
   * <p>Data associated with the QUERY RecommendationTriggerType.</p>
   */
  export interface QueryMember {
    query: QueryRecommendationTriggerData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    query?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    query: (value: QueryRecommendationTriggerData) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: RecommendationTriggerData, visitor: Visitor<T>): T => {
    if (value.query !== undefined) return visitor.query(value.query);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const RecommendationSourceType = {
  ISSUE_DETECTION: "ISSUE_DETECTION",
  OTHER: "OTHER",
  RULE_EVALUATION: "RULE_EVALUATION",
} as const;

/**
 * @public
 */
export type RecommendationSourceType = (typeof RecommendationSourceType)[keyof typeof RecommendationSourceType];

/**
 * @public
 * @enum
 */
export const RecommendationTriggerType = {
  GENERATIVE: "GENERATIVE",
  QUERY: "QUERY",
} as const;

/**
 * @public
 */
export type RecommendationTriggerType = (typeof RecommendationTriggerType)[keyof typeof RecommendationTriggerType];

/**
 * @public
 * <p>A recommendation trigger provides context on the event that produced the referenced
 *       recommendations. Recommendations are only referenced in <code>recommendationIds</code> by a
 *       single RecommendationTrigger.</p>
 */
export interface RecommendationTrigger {
  /**
   * @public
   * <p>The identifier of the recommendation trigger.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The type of recommendation trigger.</p>
   */
  type: RecommendationTriggerType | undefined;

  /**
   * @public
   * <p>The source of the recommendation trigger.</p>
   *          <ul>
   *             <li>
   *                <p>ISSUE_DETECTION: The corresponding recommendations were triggered by a Contact Lens
   *           issue.</p>
   *             </li>
   *             <li>
   *                <p>RULE_EVALUATION: The corresponding recommendations were triggered by a Contact Lens
   *           rule.</p>
   *             </li>
   *          </ul>
   */
  source: RecommendationSourceType | undefined;

  /**
   * @public
   * <p>A union type containing information related to the trigger.</p>
   */
  data: RecommendationTriggerData | undefined;

  /**
   * @public
   * <p>The identifiers of the recommendations.</p>
   */
  recommendationIds: string[] | undefined;
}

/**
 * @public
 */
export interface ListAssistantsRequest {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary information about the assistant.</p>
 */
export interface AssistantSummary {
  /**
   * @public
   * <p>The identifier of the Amazon Q assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Q assistant.</p>
   */
  assistantArn: string | undefined;

  /**
   * @public
   * <p>The name of the assistant.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of the assistant.</p>
   */
  type: AssistantType | undefined;

  /**
   * @public
   * <p>The status of the assistant.</p>
   */
  status: AssistantStatus | undefined;

  /**
   * @public
   * <p>The description of the assistant.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The configuration information for the customer managed key used for encryption. </p>
   *          <p>This KMS key must have a policy that allows <code>kms:CreateGrant</code>,
   *         <code>kms:DescribeKey</code>, <code>kms:Decrypt</code>, and
   *         <code>kms:GenerateDataKey*</code> permissions to the IAM identity using the
   *       key to invoke Amazon Q. To use Amazon Q with chat, the key policy must also allow
   *         <code>kms:Decrypt</code>, <code>kms:GenerateDataKey*</code>, and
   *         <code>kms:DescribeKey</code> permissions to the <code>connect.amazonaws.com</code> service
   *       principal. </p>
   *          <p>For more information about setting up a customer managed key for Amazon Q, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for
   *         your instance</a>.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * @public
   * <p>The configuration information for the Amazon Q assistant integration.</p>
   */
  integrationConfiguration?: AssistantIntegrationConfiguration;

  /**
   * @public
   * <p>The configuration information for the Amazon Q assistant capability. </p>
   */
  capabilityConfiguration?: AssistantCapabilityConfiguration;
}

/**
 * @public
 */
export interface ListAssistantsResponse {
  /**
   * @public
   * <p>Information about the assistants.</p>
   */
  assistantSummaries: AssistantSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface NotifyRecommendationsReceivedRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * @public
   * <p>The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>The identifiers of the recommendations.</p>
   */
  recommendationIds: string[] | undefined;
}

/**
 * @public
 * <p>An error occurred when creating a recommendation.</p>
 */
export interface NotifyRecommendationsReceivedError {
  /**
   * @public
   * <p>The identifier of the recommendation that is in error.</p>
   */
  recommendationId?: string;

  /**
   * @public
   * <p>A recommendation is causing an error.</p>
   */
  message?: string;
}

/**
 * @public
 */
export interface NotifyRecommendationsReceivedResponse {
  /**
   * @public
   * <p>The identifiers of the recommendations.</p>
   */
  recommendationIds?: string[];

  /**
   * @public
   * <p>The identifiers of recommendations that are causing errors.</p>
   */
  errors?: NotifyRecommendationsReceivedError[];
}

/**
 * @public
 * @enum
 */
export const Relevance = {
  HELPFUL: "HELPFUL",
  NOT_HELPFUL: "NOT_HELPFUL",
} as const;

/**
 * @public
 */
export type Relevance = (typeof Relevance)[keyof typeof Relevance];

/**
 * @public
 * <p>The feedback information for a generative target type.</p>
 */
export interface GenerativeContentFeedbackData {
  /**
   * @public
   * <p>The relevance of the feedback.</p>
   */
  relevance: Relevance | undefined;
}

/**
 * @public
 * <p>Information about the feedback.</p>
 */
export type ContentFeedbackData =
  | ContentFeedbackData.GenerativeContentFeedbackDataMember
  | ContentFeedbackData.$UnknownMember;

/**
 * @public
 */
export namespace ContentFeedbackData {
  /**
   * @public
   * <p>Information about the feedback for a generative target type.</p>
   */
  export interface GenerativeContentFeedbackDataMember {
    generativeContentFeedbackData: GenerativeContentFeedbackData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    generativeContentFeedbackData?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    generativeContentFeedbackData: (value: GenerativeContentFeedbackData) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ContentFeedbackData, visitor: Visitor<T>): T => {
    if (value.generativeContentFeedbackData !== undefined)
      return visitor.generativeContentFeedbackData(value.generativeContentFeedbackData);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const TargetType = {
  RECOMMENDATION: "RECOMMENDATION",
  RESULT: "RESULT",
} as const;

/**
 * @public
 */
export type TargetType = (typeof TargetType)[keyof typeof TargetType];

/**
 * @public
 */
export interface PutFeedbackRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * @public
   * <p>The identifier of the feedback target.</p>
   */
  targetId: string | undefined;

  /**
   * @public
   * <p>The type of the feedback target.</p>
   */
  targetType: TargetType | undefined;

  /**
   * @public
   * <p>Information about the feedback provided.</p>
   */
  contentFeedback: ContentFeedbackData | undefined;
}

/**
 * @public
 */
export interface PutFeedbackResponse {
  /**
   * @public
   * <p>The identifier of the Amazon Q assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Q assistant.</p>
   */
  assistantArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the feedback target.</p>
   */
  targetId: string | undefined;

  /**
   * @public
   * <p>The type of the feedback target.</p>
   */
  targetType: TargetType | undefined;

  /**
   * @public
   * <p>Information about the feedback provided.</p>
   */
  contentFeedback: ContentFeedbackData | undefined;
}

/**
 * @public
 * @enum
 */
export const QueryConditionComparisonOperator = {
  EQUALS: "EQUALS",
} as const;

/**
 * @public
 */
export type QueryConditionComparisonOperator =
  (typeof QueryConditionComparisonOperator)[keyof typeof QueryConditionComparisonOperator];

/**
 * @public
 * @enum
 */
export const QueryConditionFieldName = {
  RESULT_TYPE: "RESULT_TYPE",
} as const;

/**
 * @public
 */
export type QueryConditionFieldName = (typeof QueryConditionFieldName)[keyof typeof QueryConditionFieldName];

/**
 * @public
 * <p>The condition for the query.</p>
 */
export interface QueryConditionItem {
  /**
   * @public
   * <p> The name of the field for query condition to query on.</p>
   */
  field: QueryConditionFieldName | undefined;

  /**
   * @public
   * <p>The comparison operator for query condition to query on.</p>
   */
  comparator: QueryConditionComparisonOperator | undefined;

  /**
   * @public
   * <p>The value for the query condition to query on.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>Information about how to query content.</p>
 */
export type QueryCondition = QueryCondition.SingleMember | QueryCondition.$UnknownMember;

/**
 * @public
 */
export namespace QueryCondition {
  /**
   * @public
   * <p>The condition for the query.</p>
   */
  export interface SingleMember {
    single: QueryConditionItem;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    single?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    single: (value: QueryConditionItem) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: QueryCondition, visitor: Visitor<T>): T => {
    if (value.single !== undefined) return visitor.single(value.single);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface QueryAssistantRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * @public
   * <p>The text to search for.</p>
   */
  queryText: string | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The identifier of the Amazon Q session. Can be either the ID or the ARN. URLs cannot
   *       contain the ARN.</p>
   */
  sessionId?: string;

  /**
   * @public
   * <p>Information about how to query content.</p>
   */
  queryCondition?: QueryCondition[];
}

/**
 * @public
 * @enum
 */
export const QueryResultType = {
  GENERATIVE_ANSWER: "GENERATIVE_ANSWER",
  KNOWLEDGE_CONTENT: "KNOWLEDGE_CONTENT",
} as const;

/**
 * @public
 */
export type QueryResultType = (typeof QueryResultType)[keyof typeof QueryResultType];

/**
 * @public
 * <p>The request reached the service more than 15 minutes after the date stamp on the request
 *       or more than 15 minutes after the request expiration date (such as for pre-signed URLs), or
 *       the date stamp on the request is more than 15 minutes in the future.</p>
 */
export class RequestTimeoutException extends __BaseException {
  readonly name: "RequestTimeoutException" = "RequestTimeoutException";
  readonly $fault: "client" = "client";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<RequestTimeoutException, __BaseException>) {
    super({
      name: "RequestTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, RequestTimeoutException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const FilterField = {
  NAME: "NAME",
} as const;

/**
 * @public
 */
export type FilterField = (typeof FilterField)[keyof typeof FilterField];

/**
 * @public
 * @enum
 */
export const FilterOperator = {
  EQUALS: "EQUALS",
} as const;

/**
 * @public
 */
export type FilterOperator = (typeof FilterOperator)[keyof typeof FilterOperator];

/**
 * @public
 * <p>A search filter.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>The field on which to filter.</p>
   */
  field: FilterField | undefined;

  /**
   * @public
   * <p>The operator to use for comparing the field’s value with the provided value.</p>
   */
  operator: FilterOperator | undefined;

  /**
   * @public
   * <p>The desired field value on which to filter.</p>
   */
  value: string | undefined;
}

/**
 * @public
 * <p>The search expression.</p>
 */
export interface SearchExpression {
  /**
   * @public
   * <p>The search expression filters.</p>
   */
  filters: Filter[] | undefined;
}

/**
 * @public
 */
export interface SearchSessionsRequest {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The identifier of the Amazon Q assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * @public
   * <p>The search expression to filter results.</p>
   */
  searchExpression: SearchExpression | undefined;
}

/**
 * @public
 * <p>Summary information about the session.</p>
 */
export interface SessionSummary {
  /**
   * @public
   * <p>The identifier of the session.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the session.</p>
   */
  sessionArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the Amazon Q assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Q assistant.</p>
   */
  assistantArn: string | undefined;
}

/**
 * @public
 */
export interface SearchSessionsResponse {
  /**
   * @public
   * <p>Summary information about the sessions.</p>
   */
  sessionSummaries: SessionSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface CreateSessionRequest {
  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The identifier of the Amazon Q assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * @public
   * <p>The name of the session.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>The configuration information for the session integration.</p>
 */
export interface SessionIntegrationConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the integrated Amazon SNS topic used for streaming chat messages.</p>
   */
  topicIntegrationArn?: string;
}

/**
 * @public
 * <p>Information about the session.</p>
 */
export interface SessionData {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the session.</p>
   */
  sessionArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the session.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>The name of the session.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the session.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The configuration information for the session integration.</p>
   */
  integrationConfiguration?: SessionIntegrationConfiguration;
}

/**
 * @public
 */
export interface CreateSessionResponse {
  /**
   * @public
   * <p>The session.</p>
   */
  session?: SessionData;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * @public
   * <p>The identifier of the Amazon Q assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * @public
   * <p>The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * @public
   * <p>The session.</p>
   */
  session?: SessionData;
}

/**
 * @public
 * <p>The configuration information of the Amazon Connect data source.</p>
 */
export interface ConnectConfiguration {
  /**
   * @public
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   */
  instanceId?: string;
}

/**
 * @public
 * <p>The configuration information of the external data source.</p>
 */
export type Configuration = Configuration.ConnectConfigurationMember | Configuration.$UnknownMember;

/**
 * @public
 */
export namespace Configuration {
  /**
   * @public
   * <p>The configuration information of the Amazon Connect data source.</p>
   */
  export interface ConnectConfigurationMember {
    connectConfiguration: ConnectConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    connectConfiguration?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    connectConfiguration: (value: ConnectConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Configuration, visitor: Visitor<T>): T => {
    if (value.connectConfiguration !== undefined) return visitor.connectConfiguration(value.connectConfiguration);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateContentRequest {
  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The name of the content. Each piece of content in a knowledge base must have a unique
   *       name. You can retrieve a piece of content using only its knowledge base and its name with the
   *         <a href="https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_SearchContent.html">SearchContent</a> API.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The title of the content. If not set, the title is equal to the name.</p>
   */
  title?: string;

  /**
   * @public
   * <p>The URI you want to use for the article. If the knowledge base has a templateUri, setting
   *       this argument overrides it for this piece of content.</p>
   */
  overrideLinkOutUri?: string;

  /**
   * @public
   * <p>A key/value map to store attributes without affecting tagging or recommendations.
   * For example, when synchronizing data between an external system and Amazon Q, you can store an external version identifier as metadata to utilize for determining drift.</p>
   */
  metadata?: Record<string, string>;

  /**
   * @public
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.</p>
   */
  uploadId: string | undefined;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ContentStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  UPDATE_FAILED: "UPDATE_FAILED",
} as const;

/**
 * @public
 */
export type ContentStatus = (typeof ContentStatus)[keyof typeof ContentStatus];

/**
 * @public
 * <p>Information about the content.</p>
 */
export interface ContentData {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the content.</p>
   */
  contentArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the content.</p>
   */
  contentId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The name of the content.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The identifier of the content revision.</p>
   */
  revisionId: string | undefined;

  /**
   * @public
   * <p>The title of the content.</p>
   */
  title: string | undefined;

  /**
   * @public
   * <p>The media type of the content.</p>
   */
  contentType: string | undefined;

  /**
   * @public
   * <p>The status of the content.</p>
   */
  status: ContentStatus | undefined;

  /**
   * @public
   * <p>A key/value map to store attributes without affecting tagging or recommendations.
   * For example, when synchronizing data between an external system and Amazon Q, you can store an external version identifier as metadata to utilize for determining drift.</p>
   */
  metadata: Record<string, string> | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The URI of the content.</p>
   */
  linkOutUri?: string;

  /**
   * @public
   * <p>The URL of the content.</p>
   */
  url: string | undefined;

  /**
   * @public
   * <p>The expiration time of the URL as an epoch timestamp.</p>
   */
  urlExpiry: Date | undefined;
}

/**
 * @public
 */
export interface CreateContentResponse {
  /**
   * @public
   * <p>The content.</p>
   */
  content?: ContentData;
}

/**
 * @public
 */
export interface DeleteContentRequest {
  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  contentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteContentResponse {}

/**
 * @public
 */
export interface GetContentRequest {
  /**
   * @public
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  contentId: string | undefined;

  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetContentResponse {
  /**
   * @public
   * <p>The content.</p>
   */
  content?: ContentData;
}

/**
 * @public
 */
export interface GetContentSummaryRequest {
  /**
   * @public
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  contentId: string | undefined;

  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 * <p>Summary information about the content.</p>
 */
export interface ContentSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the content.</p>
   */
  contentArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the content.</p>
   */
  contentId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The name of the content.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The identifier of the revision of the content.</p>
   */
  revisionId: string | undefined;

  /**
   * @public
   * <p>The title of the content.</p>
   */
  title: string | undefined;

  /**
   * @public
   * <p>The media type of the content.</p>
   */
  contentType: string | undefined;

  /**
   * @public
   * <p>The status of the content.</p>
   */
  status: ContentStatus | undefined;

  /**
   * @public
   * <p>A key/value map to store attributes without affecting tagging or recommendations.
   * For example, when synchronizing data between an external system and Amazon Q, you can store an external version identifier as metadata to utilize for determining drift.</p>
   */
  metadata: Record<string, string> | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetContentSummaryResponse {
  /**
   * @public
   * <p>The content summary.</p>
   */
  contentSummary?: ContentSummary;
}

/**
 * @public
 */
export interface ListContentsRequest {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface ListContentsResponse {
  /**
   * @public
   * <p>Information about the content.</p>
   */
  contentSummaries: ContentSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>The provided <code>revisionId</code> does not match, indicating the content has been
 *       modified since it was last read.</p>
 */
export class PreconditionFailedException extends __BaseException {
  readonly name: "PreconditionFailedException" = "PreconditionFailedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreconditionFailedException, __BaseException>) {
    super({
      name: "PreconditionFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreconditionFailedException.prototype);
  }
}

/**
 * @public
 */
export interface UpdateContentRequest {
  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it. Can be either the ID or the ARN</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  contentId: string | undefined;

  /**
   * @public
   * <p>The <code>revisionId</code> of the content resource to update, taken from an earlier call
   *       to <code>GetContent</code>, <code>GetContentSummary</code>, <code>SearchContent</code>, or
   *         <code>ListContents</code>. If included, this argument acts as an optimistic lock to ensure
   *       content was not modified since it was last read. If it has been modified, this API throws a
   *         <code>PreconditionFailedException</code>.</p>
   */
  revisionId?: string;

  /**
   * @public
   * <p>The title of the content.</p>
   */
  title?: string;

  /**
   * @public
   * <p>The URI for the article. If the knowledge base has a templateUri, setting this argument
   *       overrides it for this piece of content. To remove an existing <code>overrideLinkOurUri</code>,
   *       exclude this argument and set <code>removeOverrideLinkOutUri</code> to true.</p>
   */
  overrideLinkOutUri?: string;

  /**
   * @public
   * <p>Unset the existing <code>overrideLinkOutUri</code> if it exists.</p>
   */
  removeOverrideLinkOutUri?: boolean;

  /**
   * @public
   * <p>A key/value map to store attributes without affecting tagging or recommendations. For
   *       example, when synchronizing data between an external system and Amazon Q, you can store an
   *       external version identifier as metadata to utilize for determining drift.</p>
   */
  metadata?: Record<string, string>;

  /**
   * @public
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.
   *     </p>
   */
  uploadId?: string;
}

/**
 * @public
 */
export interface UpdateContentResponse {
  /**
   * @public
   * <p>The content.</p>
   */
  content?: ContentData;
}

/**
 * @public
 * @enum
 */
export const KnowledgeBaseType = {
  CUSTOM: "CUSTOM",
  EXTERNAL: "EXTERNAL",
  QUICK_RESPONSES: "QUICK_RESPONSES",
} as const;

/**
 * @public
 */
export type KnowledgeBaseType = (typeof KnowledgeBaseType)[keyof typeof KnowledgeBaseType];

/**
 * @public
 * <p>Information about how to render the content.</p>
 */
export interface RenderingConfiguration {
  /**
   * @public
   * <p>A URI template containing exactly one variable in <code>$\{variableName\} </code>format.
   *       This can only be set for <code>EXTERNAL</code> knowledge bases. For Salesforce, ServiceNow,
   *       and Zendesk, the variable must be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Salesforce: <code>Id</code>, <code>ArticleNumber</code>, <code>VersionNumber</code>,
   *             <code>Title</code>, <code>PublishStatus</code>, or <code>IsDeleted</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ServiceNow: <code>number</code>, <code>short_description</code>,
   *             <code>sys_mod_count</code>, <code>workflow_state</code>, or <code>active</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>Zendesk: <code>id</code>, <code>title</code>, <code>updated_at</code>, or
   *             <code>draft</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The variable is replaced with the actual value for a piece of content when calling <a href="https://docs.aws.amazon.com/amazon-q-connect/latest/APIReference/API_GetContent.html">GetContent</a>. </p>
   */
  templateUri?: string;
}

/**
 * @public
 * <p>Configuration information about the external data source.</p>
 */
export type SourceConfiguration = SourceConfiguration.AppIntegrationsMember | SourceConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace SourceConfiguration {
  /**
   * @public
   * <p>Configuration information for Amazon AppIntegrations to automatically ingest content.</p>
   */
  export interface AppIntegrationsMember {
    appIntegrations: AppIntegrationsConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    appIntegrations?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    appIntegrations: (value: AppIntegrationsConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SourceConfiguration, visitor: Visitor<T>): T => {
    if (value.appIntegrations !== undefined) return visitor.appIntegrations(value.appIntegrations);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateKnowledgeBaseRequest {
  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The name of the knowledge base.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of knowledge base. Only CUSTOM knowledge bases allow you to upload your own content.
   *       EXTERNAL knowledge bases support integrations with third-party systems whose content is
   *       synchronized automatically. </p>
   */
  knowledgeBaseType: KnowledgeBaseType | undefined;

  /**
   * @public
   * <p>The source of the knowledge base content. Only set this argument for EXTERNAL knowledge
   *       bases.</p>
   */
  sourceConfiguration?: SourceConfiguration;

  /**
   * @public
   * <p>Information about how to render the content.</p>
   */
  renderingConfiguration?: RenderingConfiguration;

  /**
   * @public
   * <p>The configuration information for the customer managed key used for encryption. </p>
   *          <p>This KMS key must have a policy that allows <code>kms:CreateGrant</code>,
   *         <code>kms:DescribeKey</code>, <code>kms:Decrypt</code>, and
   *         <code>kms:GenerateDataKey*</code> permissions to the IAM identity using the
   *       key to invoke Amazon Q.</p>
   *          <p>For more information about setting up a customer managed key for Amazon Q, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for
   *         your instance</a>.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * @public
   * <p>The description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const KnowledgeBaseStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type KnowledgeBaseStatus = (typeof KnowledgeBaseStatus)[keyof typeof KnowledgeBaseStatus];

/**
 * @public
 * <p>Information about the knowledge base.</p>
 */
export interface KnowledgeBaseData {
  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn: string | undefined;

  /**
   * @public
   * <p>The name of the knowledge base.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of knowledge base.</p>
   */
  knowledgeBaseType: KnowledgeBaseType | undefined;

  /**
   * @public
   * <p>The status of the knowledge base.</p>
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * @public
   * <p>An epoch timestamp indicating the most recent content modification inside the knowledge
   *       base. If no content exists in a knowledge base, this value is unset.</p>
   */
  lastContentModificationTime?: Date;

  /**
   * @public
   * <p>Source configuration information about the knowledge base.</p>
   */
  sourceConfiguration?: SourceConfiguration;

  /**
   * @public
   * <p>Information about how to render the content.</p>
   */
  renderingConfiguration?: RenderingConfiguration;

  /**
   * @public
   * <p>The configuration information for the customer managed key used for encryption. </p>
   *          <p>This KMS key must have a policy that allows <code>kms:CreateGrant</code>,
   *         <code>kms:DescribeKey</code>, <code>kms:Decrypt</code>, and
   *         <code>kms:GenerateDataKey*</code> permissions to the IAM identity using the
   *       key to invoke Amazon Q. </p>
   *          <p>For more information about setting up a customer managed key for Amazon Q, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for
   *         your instance</a>.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * @public
   * <p>The description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateKnowledgeBaseResponse {
  /**
   * @public
   * <p>The knowledge base.</p>
   */
  knowledgeBase?: KnowledgeBaseData;
}

/**
 * @public
 * <p>The container of quick response data.</p>
 */
export type QuickResponseDataProvider =
  | QuickResponseDataProvider.ContentMember
  | QuickResponseDataProvider.$UnknownMember;

/**
 * @public
 */
export namespace QuickResponseDataProvider {
  /**
   * @public
   * <p>The content of the quick response.</p>
   */
  export interface ContentMember {
    content: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    content?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    content: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: QuickResponseDataProvider, visitor: Visitor<T>): T => {
    if (value.content !== undefined) return visitor.content(value.content);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The configuration information of the grouping of Amazon Q users.</p>
 */
export interface GroupingConfiguration {
  /**
   * @public
   * <p>The criteria used for grouping Amazon Q users.</p>
   *          <p>The following is the list of supported criteria values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RoutingProfileArn</code>: Grouping the users by their <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_RoutingProfile.html">Amazon Connect routing profile ARN</a>. User should have <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchRoutingProfiles.html">SearchRoutingProfile</a> and
   *             <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeRoutingProfile.html">DescribeRoutingProfile</a> permissions when setting criteria to this value.</p>
   *             </li>
   *          </ul>
   */
  criteria?: string;

  /**
   * @public
   * <p>The list of values that define different groups of Amazon Q users.</p>
   *          <ul>
   *             <li>
   *                <p>When setting <code>criteria</code> to <code>RoutingProfileArn</code>, you need to provide a list of
   *             ARNs of <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_RoutingProfile.html">Amazon Connect routing profiles</a> as values of this parameter.</p>
   *             </li>
   *          </ul>
   */
  values?: string[];
}

/**
 * @public
 */
export interface CreateQuickResponseRequest {
  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The name of the quick response.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The content of the quick response.</p>
   */
  content: QuickResponseDataProvider | undefined;

  /**
   * @public
   * <p>The media type of the quick response content.</p>
   *          <ul>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=plain</code> for a quick response written in plain text.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=markdown</code> for a quick response written in richtext.</p>
   *             </li>
   *          </ul>
   */
  contentType?: string;

  /**
   * @public
   * <p>The configuration information of the user groups that the quick response is accessible to.</p>
   */
  groupingConfiguration?: GroupingConfiguration;

  /**
   * @public
   * <p>The description of the quick response.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The shortcut key of the quick response. The value should be unique across the
   *   knowledge base.
   *     </p>
   */
  shortcutKey?: string;

  /**
   * @public
   * <p>Whether the quick response is active.</p>
   */
  isActive?: boolean;

  /**
   * @public
   * <p>The Amazon Connect channels this quick response applies to.</p>
   */
  channels?: string[];

  /**
   * @public
   * <p>The language code value for the language in which the quick response is written.  The supported language codes include <code>de_DE</code>, <code>en_US</code>, <code>es_ES</code>,
   *   <code>fr_FR</code>, <code>id_ID</code>, <code>it_IT</code>, <code>ja_JP</code>, <code>ko_KR</code>, <code>pt_BR</code>,
   *   <code>zh_CN</code>, <code>zh_TW</code>
   *          </p>
   */
  language?: string;

  /**
   * @public
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>The container quick response content.</p>
 */
export type QuickResponseContentProvider =
  | QuickResponseContentProvider.ContentMember
  | QuickResponseContentProvider.$UnknownMember;

/**
 * @public
 */
export namespace QuickResponseContentProvider {
  /**
   * @public
   * <p>The content of the quick response.</p>
   */
  export interface ContentMember {
    content: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    content?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    content: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: QuickResponseContentProvider, visitor: Visitor<T>): T => {
    if (value.content !== undefined) return visitor.content(value.content);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>The content of the quick response stored in different media types.</p>
 */
export interface QuickResponseContents {
  /**
   * @public
   * <p>The container quick response content.</p>
   */
  plainText?: QuickResponseContentProvider;

  /**
   * @public
   * <p>The container quick response content.</p>
   */
  markdown?: QuickResponseContentProvider;
}

/**
 * @public
 * @enum
 */
export const QuickResponseStatus = {
  CREATED: "CREATED",
  CREATE_FAILED: "CREATE_FAILED",
  CREATE_IN_PROGRESS: "CREATE_IN_PROGRESS",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type QuickResponseStatus = (typeof QuickResponseStatus)[keyof typeof QuickResponseStatus];

/**
 * @public
 * <p>Information about the quick response.</p>
 */
export interface QuickResponseData {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the quick response.</p>
   */
  quickResponseArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the quick response.</p>
   */
  quickResponseId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The name of the quick response.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The media type of the quick response content.</p>
   *          <ul>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=plain</code> for quick response written in plain text.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=markdown</code> for quick response written in richtext.</p>
   *             </li>
   *          </ul>
   */
  contentType: string | undefined;

  /**
   * @public
   * <p>The status of the quick response data.</p>
   */
  status: QuickResponseStatus | undefined;

  /**
   * @public
   * <p>The timestamp when the quick response was created.</p>
   */
  createdTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp when the quick response data was last modified.</p>
   */
  lastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The contents of the quick response.</p>
   */
  contents?: QuickResponseContents;

  /**
   * @public
   * <p>The description of the quick response.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The configuration information of the user groups that the quick response is accessible to.</p>
   */
  groupingConfiguration?: GroupingConfiguration;

  /**
   * @public
   * <p>The shortcut key of the quick response. The value should be unique across the
   *   knowledge base.</p>
   */
  shortcutKey?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who last updated the quick response data.</p>
   */
  lastModifiedBy?: string;

  /**
   * @public
   * <p>Whether the quick response is active.</p>
   */
  isActive?: boolean;

  /**
   * @public
   * <p>The Amazon Connect contact channels this quick response applies to. The supported contact channel types include <code>Chat</code>.</p>
   */
  channels?: string[];

  /**
   * @public
   * <p>The language code value for the language in which the quick response is written.</p>
   */
  language?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateQuickResponseResponse {
  /**
   * @public
   * <p>The quick response.</p>
   */
  quickResponse?: QuickResponseData;
}

/**
 * @public
 */
export interface DeleteImportJobRequest {
  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The identifier of the import job to be deleted.</p>
   */
  importJobId: string | undefined;
}

/**
 * @public
 */
export interface DeleteImportJobResponse {}

/**
 * @public
 */
export interface DeleteKnowledgeBaseRequest {
  /**
   * @public
   * <p>The knowledge base to delete content from. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteKnowledgeBaseResponse {}

/**
 * @public
 */
export interface DeleteQuickResponseRequest {
  /**
   * @public
   * <p>The knowledge base from which the quick response is deleted. The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The identifier of the quick response to delete.</p>
   */
  quickResponseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQuickResponseResponse {}

/**
 * @public
 * @enum
 */
export const ExternalSource = {
  AMAZON_CONNECT: "AMAZON_CONNECT",
} as const;

/**
 * @public
 */
export type ExternalSource = (typeof ExternalSource)[keyof typeof ExternalSource];

/**
 * @public
 * <p>The configuration information of the external data source.</p>
 */
export interface ExternalSourceConfiguration {
  /**
   * @public
   * <p>The type of the external data source.</p>
   */
  source: ExternalSource | undefined;

  /**
   * @public
   * <p>The configuration information of the external data source.</p>
   */
  configuration: Configuration | undefined;
}

/**
 * @public
 */
export interface GetImportJobRequest {
  /**
   * @public
   * <p>The identifier of the import job to retrieve.</p>
   */
  importJobId: string | undefined;

  /**
   * @public
   * <p>The identifier of the knowledge base that the import job belongs to.</p>
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ImportJobType = {
  QUICK_RESPONSES: "QUICK_RESPONSES",
} as const;

/**
 * @public
 */
export type ImportJobType = (typeof ImportJobType)[keyof typeof ImportJobType];

/**
 * @public
 * @enum
 */
export const ImportJobStatus = {
  COMPLETE: "COMPLETE",
  DELETED: "DELETED",
  DELETE_FAILED: "DELETE_FAILED",
  DELETE_IN_PROGRESS: "DELETE_IN_PROGRESS",
  FAILED: "FAILED",
  START_IN_PROGRESS: "START_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ImportJobStatus = (typeof ImportJobStatus)[keyof typeof ImportJobStatus];

/**
 * @public
 * <p>Summary information about the import job.</p>
 */
export interface ImportJobData {
  /**
   * @public
   * <p>The identifier of the import job.</p>
   */
  importJobId: string | undefined;

  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.</p>
   */
  uploadId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn: string | undefined;

  /**
   * @public
   * <p>The type of the import job.</p>
   */
  importJobType: ImportJobType | undefined;

  /**
   * @public
   * <p>The status of the import job.</p>
   */
  status: ImportJobStatus | undefined;

  /**
   * @public
   * <p>The download link to the resource file that is uploaded to the import job.</p>
   */
  url: string | undefined;

  /**
   * @public
   * <p>The link to donwload the information of resource data that failed to be imported.</p>
   */
  failedRecordReport?: string;

  /**
   * @public
   * <p>The expiration time of the URL as an epoch timestamp.</p>
   */
  urlExpiry: Date | undefined;

  /**
   * @public
   * <p>The timestamp when the import job was created.</p>
   */
  createdTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp when the import job data was last modified.</p>
   */
  lastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The metadata fields of the imported Amazon Q resources.</p>
   */
  metadata?: Record<string, string>;

  /**
   * @public
   * <p>The configuration information of the external data source.</p>
   */
  externalSourceConfiguration?: ExternalSourceConfiguration;
}

/**
 * @public
 */
export interface GetImportJobResponse {
  /**
   * @public
   * <p>The import job.</p>
   */
  importJob?: ImportJobData;
}

/**
 * @public
 */
export interface GetKnowledgeBaseRequest {
  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseResponse {
  /**
   * @public
   * <p>The knowledge base.</p>
   */
  knowledgeBase?: KnowledgeBaseData;
}

/**
 * @public
 */
export interface GetQuickResponseRequest {
  /**
   * @public
   * <p>The identifier of the quick response.</p>
   */
  quickResponseId: string | undefined;

  /**
   * @public
   * <p>The identifier of the knowledge base. This should be a QUICK_RESPONSES type knowledge base.</p>
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetQuickResponseResponse {
  /**
   * @public
   * <p>The quick response.</p>
   */
  quickResponse?: QuickResponseData;
}

/**
 * @public
 * <p>Summary information about the import job.</p>
 */
export interface ImportJobSummary {
  /**
   * @public
   * <p>The identifier of the import job.</p>
   */
  importJobId: string | undefined;

  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.</p>
   */
  uploadId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn: string | undefined;

  /**
   * @public
   * <p>The type of import job.</p>
   */
  importJobType: ImportJobType | undefined;

  /**
   * @public
   * <p>The status of the import job.</p>
   */
  status: ImportJobStatus | undefined;

  /**
   * @public
   * <p>The timestamp when the import job was created.</p>
   */
  createdTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp when the import job was last modified.</p>
   */
  lastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The metadata fields of the imported Amazon Q resources.</p>
   */
  metadata?: Record<string, string>;

  /**
   * @public
   * <p>The configuration information of the external source that the resource data are imported from.</p>
   */
  externalSourceConfiguration?: ExternalSourceConfiguration;
}

/**
 * @public
 */
export interface ListImportJobsRequest {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface ListImportJobsResponse {
  /**
   * @public
   * <p>Summary information about the import jobs.</p>
   */
  importJobSummaries: ImportJobSummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListKnowledgeBasesRequest {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Summary information about the knowledge base.</p>
 */
export interface KnowledgeBaseSummary {
  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn: string | undefined;

  /**
   * @public
   * <p>The name of the knowledge base.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of knowledge base.</p>
   */
  knowledgeBaseType: KnowledgeBaseType | undefined;

  /**
   * @public
   * <p>The status of the knowledge base summary.</p>
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * @public
   * <p>Configuration information about the external data source.</p>
   */
  sourceConfiguration?: SourceConfiguration;

  /**
   * @public
   * <p>Information about how to render the content.</p>
   */
  renderingConfiguration?: RenderingConfiguration;

  /**
   * @public
   * <p>The configuration information for the customer managed key used for encryption. </p>
   *          <p>This KMS key must have a policy that allows <code>kms:CreateGrant</code>,
   *         <code>kms:DescribeKey</code>, <code>kms:Decrypt</code>, and
   *         <code>kms:GenerateDataKey*</code> permissions to the IAM identity using the
   *       key to invoke Amazon Q. </p>
   *          <p>For more information about setting up a customer managed key for Amazon Q, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-q.html">Enable Amazon Q in Connect for
   *         your instance</a>.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * @public
   * <p>The description of the knowledge base.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListKnowledgeBasesResponse {
  /**
   * @public
   * <p>Information about the knowledge bases.</p>
   */
  knowledgeBaseSummaries: KnowledgeBaseSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListQuickResponsesRequest {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 * <p>The summary information about the quick response.</p>
 */
export interface QuickResponseSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the quick response.</p>
   */
  quickResponseArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the quick response.</p>
   */
  quickResponseId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The name of the quick response.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The media type of the quick response content.</p>
   *          <ul>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=plain</code> for quick response written in plain text.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=markdown</code> for quick response written in richtext.</p>
   *             </li>
   *          </ul>
   */
  contentType: string | undefined;

  /**
   * @public
   * <p>The resource status of the quick response.</p>
   */
  status: QuickResponseStatus | undefined;

  /**
   * @public
   * <p>The timestamp when the quick response was created.</p>
   */
  createdTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp when the quick response summary was last modified.</p>
   */
  lastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>The description of the quick response.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who last updated the quick response data.</p>
   */
  lastModifiedBy?: string;

  /**
   * @public
   * <p>Whether the quick response is active.</p>
   */
  isActive?: boolean;

  /**
   * @public
   * <p>The Amazon Connect contact channels this quick response applies to. The supported contact channel types include <code>Chat</code>.</p>
   */
  channels?: string[];

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListQuickResponsesResponse {
  /**
   * @public
   * <p>Summary information about the quick responses.</p>
   */
  quickResponseSummaries: QuickResponseSummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface UpdateQuickResponseRequest {
  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The identifier of the quick response.</p>
   */
  quickResponseId: string | undefined;

  /**
   * @public
   * <p>The name of the quick response.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The updated content of the quick response.</p>
   */
  content?: QuickResponseDataProvider;

  /**
   * @public
   * <p>The media type of the quick response content.</p>
   *          <ul>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=plain</code> for quick response written in plain text.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=markdown</code> for quick response written in richtext.</p>
   *             </li>
   *          </ul>
   */
  contentType?: string;

  /**
   * @public
   * <p>The updated grouping configuration of the quick response.</p>
   */
  groupingConfiguration?: GroupingConfiguration;

  /**
   * @public
   * <p>Whether to remove the grouping configuration of the quick response.</p>
   */
  removeGroupingConfiguration?: boolean;

  /**
   * @public
   * <p>The updated description of the quick response.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Whether to remove the description from the quick response.</p>
   */
  removeDescription?: boolean;

  /**
   * @public
   * <p>The shortcut key of the quick response. The value should be unique across the
   *   knowledge base.</p>
   */
  shortcutKey?: string;

  /**
   * @public
   * <p>Whether to remove the shortcut key of the quick response.</p>
   */
  removeShortcutKey?: boolean;

  /**
   * @public
   * <p>Whether the quick response is active. </p>
   */
  isActive?: boolean;

  /**
   * @public
   * <p>The Amazon Connect contact channels this quick response applies to. The supported contact channel types include <code>Chat</code>.</p>
   */
  channels?: string[];

  /**
   * @public
   * <p>The language code value for the language in which the quick response is written. The supported language codes include <code>de_DE</code>, <code>en_US</code>, <code>es_ES</code>,
   *   <code>fr_FR</code>, <code>id_ID</code>, <code>it_IT</code>, <code>ja_JP</code>, <code>ko_KR</code>, <code>pt_BR</code>,
   *   <code>zh_CN</code>, <code>zh_TW</code>
   *          </p>
   */
  language?: string;
}

/**
 * @public
 */
export interface UpdateQuickResponseResponse {
  /**
   * @public
   * <p>The quick response.</p>
   */
  quickResponse?: QuickResponseData;
}

/**
 * @public
 */
export interface RemoveKnowledgeBaseTemplateUriRequest {
  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface RemoveKnowledgeBaseTemplateUriResponse {}

/**
 * @public
 */
export interface SearchContentRequest {
  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The search expression to filter results.</p>
   */
  searchExpression: SearchExpression | undefined;
}

/**
 * @public
 */
export interface SearchContentResponse {
  /**
   * @public
   * <p>Summary information about the content.</p>
   */
  contentSummaries: ContentSummary[] | undefined;

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const QuickResponseFilterOperator = {
  EQUALS: "EQUALS",
  PREFIX: "PREFIX",
} as const;

/**
 * @public
 */
export type QuickResponseFilterOperator =
  (typeof QuickResponseFilterOperator)[keyof typeof QuickResponseFilterOperator];

/**
 * @public
 * <p>The quick response fields to filter the quick response query results by.</p>
 *          <p>The following is the list of supported field names.</p>
 *          <ul>
 *             <li>
 *                <p>name</p>
 *             </li>
 *             <li>
 *                <p>description</p>
 *             </li>
 *             <li>
 *                <p>shortcutKey</p>
 *             </li>
 *             <li>
 *                <p>isActive</p>
 *             </li>
 *             <li>
 *                <p>channels</p>
 *             </li>
 *             <li>
 *                <p>language</p>
 *             </li>
 *             <li>
 *                <p>contentType</p>
 *             </li>
 *             <li>
 *                <p>createdTime</p>
 *             </li>
 *             <li>
 *                <p>lastModifiedTime</p>
 *             </li>
 *             <li>
 *                <p>lastModifiedBy</p>
 *             </li>
 *             <li>
 *                <p>groupingConfiguration.criteria</p>
 *             </li>
 *             <li>
 *                <p>groupingConfiguration.values</p>
 *             </li>
 *          </ul>
 */
export interface QuickResponseFilterField {
  /**
   * @public
   * <p>The name of the attribute field to filter the quick responses by.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The values of attribute field to filter the quick response by.</p>
   */
  values?: string[];

  /**
   * @public
   * <p>The operator to use for filtering.</p>
   */
  operator: QuickResponseFilterOperator | undefined;

  /**
   * @public
   * <p>Whether to treat null value as a match for the attribute field.</p>
   */
  includeNoExistence?: boolean;
}

/**
 * @public
 * @enum
 */
export const Order = {
  ASC: "ASC",
  DESC: "DESC",
} as const;

/**
 * @public
 */
export type Order = (typeof Order)[keyof typeof Order];

/**
 * @public
 * <p>The quick response fields to order the quick response query results by.</p>
 *          <p>The following is the list of supported field names.</p>
 *          <ul>
 *             <li>
 *                <p>name</p>
 *             </li>
 *             <li>
 *                <p>description</p>
 *             </li>
 *             <li>
 *                <p>shortcutKey</p>
 *             </li>
 *             <li>
 *                <p>isActive</p>
 *             </li>
 *             <li>
 *                <p>channels</p>
 *             </li>
 *             <li>
 *                <p>language</p>
 *             </li>
 *             <li>
 *                <p>contentType</p>
 *             </li>
 *             <li>
 *                <p>createdTime</p>
 *             </li>
 *             <li>
 *                <p>lastModifiedTime</p>
 *             </li>
 *             <li>
 *                <p>lastModifiedBy</p>
 *             </li>
 *             <li>
 *                <p>groupingConfiguration.criteria</p>
 *             </li>
 *             <li>
 *                <p>groupingConfiguration.values</p>
 *             </li>
 *          </ul>
 */
export interface QuickResponseOrderField {
  /**
   * @public
   * <p>The name of the attribute to order the quick response query results by.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The order at which the quick responses are sorted by.</p>
   */
  order?: Order;
}

/**
 * @public
 * @enum
 */
export const QuickResponseQueryOperator = {
  CONTAINS: "CONTAINS",
  CONTAINS_AND_PREFIX: "CONTAINS_AND_PREFIX",
} as const;

/**
 * @public
 */
export type QuickResponseQueryOperator = (typeof QuickResponseQueryOperator)[keyof typeof QuickResponseQueryOperator];

/**
 * @public
 * @enum
 */
export const Priority = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
} as const;

/**
 * @public
 */
export type Priority = (typeof Priority)[keyof typeof Priority];

/**
 * @public
 * <p>The quick response fields to query quick responses by.</p>
 *          <p>The following is the list of supported field names.</p>
 *          <ul>
 *             <li>
 *                <p>content</p>
 *             </li>
 *             <li>
 *                <p>name</p>
 *             </li>
 *             <li>
 *                <p>description</p>
 *             </li>
 *             <li>
 *                <p>shortcutKey</p>
 *             </li>
 *          </ul>
 */
export interface QuickResponseQueryField {
  /**
   * @public
   * <p>The name of the attribute to query the quick responses by.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The values of the attribute to query the quick responses by.</p>
   */
  values: string[] | undefined;

  /**
   * @public
   * <p>The operator to use for matching attribute field values in the query.</p>
   */
  operator: QuickResponseQueryOperator | undefined;

  /**
   * @public
   * <p>Whether the query expects only exact matches on the attribute field values. The results of the query will only include exact matches if this parameter is set to false.</p>
   */
  allowFuzziness?: boolean;

  /**
   * @public
   * <p>The importance of the attribute field when calculating query result relevancy scores.
   *       The value set for this parameter affects the ordering of search results.</p>
   */
  priority?: Priority;
}

/**
 * @public
 * <p>Information about the import job.</p>
 */
export interface QuickResponseSearchExpression {
  /**
   * @public
   * <p>The quick response query expressions.</p>
   */
  queries?: QuickResponseQueryField[];

  /**
   * @public
   * <p>The configuration of filtering rules applied to quick response query results.</p>
   */
  filters?: QuickResponseFilterField[];

  /**
   * @public
   * <p>The quick response attribute fields on which the query results are ordered.</p>
   */
  orderOnField?: QuickResponseOrderField;
}

/**
 * @public
 */
export interface SearchQuickResponsesRequest {
  /**
   * @public
   * <p>The identifier of the knowledge base. This should be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The search expression for querying the quick response.</p>
   */
  searchExpression: QuickResponseSearchExpression | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/connect/latest/adminguide/connect-attrib-list.html#user-defined-attributes">user-defined Amazon Connect contact attributes</a> to be resolved when search results are returned.</p>
   */
  attributes?: Record<string, string>;
}

/**
 * @public
 * <p>The result of quick response search.</p>
 */
export interface QuickResponseSearchResultData {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the quick response.</p>
   */
  quickResponseArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the quick response.</p>
   */
  quickResponseId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn: string | undefined;

  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The name of the quick response.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The media type of the quick response content.</p>
   *          <ul>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=plain</code> for quick response written in plain text.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=markdown</code> for quick response written in richtext.</p>
   *             </li>
   *          </ul>
   */
  contentType: string | undefined;

  /**
   * @public
   * <p>The resource status of the quick response.</p>
   */
  status: QuickResponseStatus | undefined;

  /**
   * @public
   * <p>The contents of the quick response.</p>
   */
  contents: QuickResponseContents | undefined;

  /**
   * @public
   * <p>The timestamp when the quick response was created.</p>
   */
  createdTime: Date | undefined;

  /**
   * @public
   * <p>The timestamp when the quick response search result data was last modified.</p>
   */
  lastModifiedTime: Date | undefined;

  /**
   * @public
   * <p>Whether the quick response is active.</p>
   */
  isActive: boolean | undefined;

  /**
   * @public
   * <p>The description of the quick response.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The configuration information of the user groups that the quick response is accessible to.</p>
   */
  groupingConfiguration?: GroupingConfiguration;

  /**
   * @public
   * <p>The shortcut key of the quick response. The value should be unique across the
   *   knowledge base.</p>
   */
  shortcutKey?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who last updated the quick response search result data.</p>
   */
  lastModifiedBy?: string;

  /**
   * @public
   * <p>The Amazon Connect contact channels this quick response applies to. The supported contact channel types include <code>Chat</code>.</p>
   */
  channels?: string[];

  /**
   * @public
   * <p>The language code value for the language in which the quick response is written.</p>
   */
  language?: string;

  /**
   * @public
   * <p>The user defined contact attributes that are not resolved when the search result is returned.</p>
   */
  attributesNotInterpolated?: string[];

  /**
   * @public
   * <p>The user defined contact attributes that are resolved when the search result is returned.</p>
   */
  attributesInterpolated?: string[];

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface SearchQuickResponsesResponse {
  /**
   * @public
   * <p>The results of the quick response search.</p>
   */
  results: QuickResponseSearchResultData[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartContentUploadRequest {
  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The type of content to upload.</p>
   */
  contentType: string | undefined;

  /**
   * @public
   * <p>The expected expiration time of the generated presigned URL, specified in minutes.</p>
   */
  presignedUrlTimeToLive?: number;
}

/**
 * @public
 */
export interface StartContentUploadResponse {
  /**
   * @public
   * <p>The identifier of the upload.</p>
   */
  uploadId: string | undefined;

  /**
   * @public
   * <p>The URL of the upload.</p>
   */
  url: string | undefined;

  /**
   * @public
   * <p>The expiration time of the URL as an epoch timestamp.</p>
   */
  urlExpiry: Date | undefined;

  /**
   * @public
   * <p>The headers to include in the upload.</p>
   */
  headersToInclude: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartImportJobRequest {
  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   *          <ul>
   *             <li>
   *                <p>For importing Amazon Q quick responses, this should be a <code>QUICK_RESPONSES</code> type knowledge base.</p>
   *             </li>
   *          </ul>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The type of the import job.</p>
   *          <ul>
   *             <li>
   *                <p>For importing quick response resource, set the value to <code>QUICK_RESPONSES</code>.</p>
   *             </li>
   *          </ul>
   */
  importJobType: ImportJobType | undefined;

  /**
   * @public
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.</p>
   */
  uploadId: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The metadata fields of the imported Amazon Q resources.</p>
   */
  metadata?: Record<string, string>;

  /**
   * @public
   * <p>The configuration information of the external source that the resource data are imported from.</p>
   */
  externalSourceConfiguration?: ExternalSourceConfiguration;
}

/**
 * @public
 */
export interface StartImportJobResponse {
  /**
   * @public
   * <p>The import job.</p>
   */
  importJob?: ImportJobData;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseTemplateUriRequest {
  /**
   * @public
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Amazon Q Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The template URI to update.</p>
   */
  templateUri: string | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseTemplateUriResponse {
  /**
   * @public
   * <p>The knowledge base to update.</p>
   */
  knowledgeBase?: KnowledgeBaseData;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 * <p>Amazon Q in Connect throws this exception if you have too many tags in your tag set.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The specified resource name.</p>
   */
  resourceName?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.resourceName = opts.resourceName;
  }
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The tag keys.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 * <p>Details about the data.</p>
 */
export type DataDetails =
  | DataDetails.ContentDataMember
  | DataDetails.GenerativeDataMember
  | DataDetails.SourceContentDataMember
  | DataDetails.$UnknownMember;

/**
 * @public
 */
export namespace DataDetails {
  /**
   * @public
   * <p>Details about the content data.</p>
   */
  export interface ContentDataMember {
    contentData: ContentDataDetails;
    generativeData?: never;
    sourceContentData?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p> Details about the generative data.</p>
   */
  export interface GenerativeDataMember {
    contentData?: never;
    generativeData: GenerativeDataDetails;
    sourceContentData?: never;
    $unknown?: never;
  }

  /**
   * @public
   * <p>Details about the content data.</p>
   */
  export interface SourceContentDataMember {
    contentData?: never;
    generativeData?: never;
    sourceContentData: SourceContentDataDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    contentData?: never;
    generativeData?: never;
    sourceContentData?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    contentData: (value: ContentDataDetails) => T;
    generativeData: (value: GenerativeDataDetails) => T;
    sourceContentData: (value: SourceContentDataDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DataDetails, visitor: Visitor<T>): T => {
    if (value.contentData !== undefined) return visitor.contentData(value.contentData);
    if (value.generativeData !== undefined) return visitor.generativeData(value.generativeData);
    if (value.sourceContentData !== undefined) return visitor.sourceContentData(value.sourceContentData);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p>Summary of the data.</p>
 */
export interface DataSummary {
  /**
   * @public
   * <p>Reference information about the content.</p>
   */
  reference: DataReference | undefined;

  /**
   * @public
   * <p>Details about the data.</p>
   */
  details: DataDetails | undefined;
}

/**
 * @public
 * <p>Details about generative data.</p>
 */
export interface GenerativeDataDetails {
  /**
   * @public
   * <p>The LLM response.</p>
   */
  completion: string | undefined;

  /**
   * @public
   * <p>The references used to generative the LLM response.</p>
   */
  references: DataSummary[] | undefined;

  /**
   * @public
   * <p>Details about the generative content ranking data.</p>
   */
  rankingData: RankingData | undefined;
}

/**
 * @public
 * <p>Information about the recommendation.</p>
 */
export interface RecommendationData {
  /**
   * @public
   * <p>The identifier of the recommendation.</p>
   */
  recommendationId: string | undefined;

  /**
   * @public
   * <p>The recommended document.</p>
   */
  document?: Document;

  /**
   * @public
   * <p>The relevance score of the recommendation.</p>
   */
  relevanceScore?: number;

  /**
   * @public
   * <p>The relevance level of the recommendation.</p>
   */
  relevanceLevel?: RelevanceLevel;

  /**
   * @public
   * <p>The type of recommendation.</p>
   */
  type?: RecommendationType;

  /**
   * @public
   * <p> Summary of the recommended content.</p>
   */
  data?: DataSummary;
}

/**
 * @public
 * <p>Information about the result.</p>
 */
export interface ResultData {
  /**
   * @public
   * <p>The identifier of the result data.</p>
   */
  resultId: string | undefined;

  /**
   * @public
   * <p>The document.</p>
   */
  document?: Document;

  /**
   * @public
   * <p>The relevance score of the results.</p>
   */
  relevanceScore?: number;

  /**
   * @public
   * <p> Summary of the recommended content.</p>
   */
  data?: DataSummary;

  /**
   * @public
   * <p>The type of the query result.</p>
   */
  type?: QueryResultType;
}

/**
 * @public
 */
export interface GetRecommendationsResponse {
  /**
   * @public
   * <p>The recommendations.</p>
   */
  recommendations: RecommendationData[] | undefined;

  /**
   * @public
   * <p>The triggers corresponding to recommendations.</p>
   */
  triggers?: RecommendationTrigger[];
}

/**
 * @public
 */
export interface QueryAssistantResponse {
  /**
   * @public
   * <p>The results of the query.</p>
   */
  results: ResultData[] | undefined;

  /**
   * @public
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * @internal
 */
export const DocumentTextFilterSensitiveLog = (obj: DocumentText): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TextDataFilterSensitiveLog = (obj: TextData): any => ({
  ...obj,
  ...(obj.title && { title: DocumentTextFilterSensitiveLog(obj.title) }),
  ...(obj.excerpt && { excerpt: DocumentTextFilterSensitiveLog(obj.excerpt) }),
});

/**
 * @internal
 */
export const ContentDataDetailsFilterSensitiveLog = (obj: ContentDataDetails): any => ({
  ...obj,
  ...(obj.textData && { textData: TextDataFilterSensitiveLog(obj.textData) }),
});

/**
 * @internal
 */
export const SourceContentDataDetailsFilterSensitiveLog = (obj: SourceContentDataDetails): any => ({
  ...obj,
  ...(obj.textData && { textData: TextDataFilterSensitiveLog(obj.textData) }),
});

/**
 * @internal
 */
export const DocumentFilterSensitiveLog = (obj: Document): any => ({
  ...obj,
  ...(obj.title && { title: DocumentTextFilterSensitiveLog(obj.title) }),
  ...(obj.excerpt && { excerpt: DocumentTextFilterSensitiveLog(obj.excerpt) }),
});

/**
 * @internal
 */
export const QueryRecommendationTriggerDataFilterSensitiveLog = (obj: QueryRecommendationTriggerData): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const RecommendationTriggerDataFilterSensitiveLog = (obj: RecommendationTriggerData): any => {
  if (obj.query !== undefined) return { query: QueryRecommendationTriggerDataFilterSensitiveLog(obj.query) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const RecommendationTriggerFilterSensitiveLog = (obj: RecommendationTrigger): any => ({
  ...obj,
  ...(obj.data && { data: RecommendationTriggerDataFilterSensitiveLog(obj.data) }),
});

/**
 * @internal
 */
export const QueryAssistantRequestFilterSensitiveLog = (obj: QueryAssistantRequest): any => ({
  ...obj,
  ...(obj.queryText && { queryText: SENSITIVE_STRING }),
  ...(obj.queryCondition && { queryCondition: obj.queryCondition.map((item) => item) }),
});

/**
 * @internal
 */
export const ContentDataFilterSensitiveLog = (obj: ContentData): any => ({
  ...obj,
  ...(obj.url && { url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateContentResponseFilterSensitiveLog = (obj: CreateContentResponse): any => ({
  ...obj,
  ...(obj.content && { content: ContentDataFilterSensitiveLog(obj.content) }),
});

/**
 * @internal
 */
export const GetContentResponseFilterSensitiveLog = (obj: GetContentResponse): any => ({
  ...obj,
  ...(obj.content && { content: ContentDataFilterSensitiveLog(obj.content) }),
});

/**
 * @internal
 */
export const UpdateContentResponseFilterSensitiveLog = (obj: UpdateContentResponse): any => ({
  ...obj,
  ...(obj.content && { content: ContentDataFilterSensitiveLog(obj.content) }),
});

/**
 * @internal
 */
export const QuickResponseDataProviderFilterSensitiveLog = (obj: QuickResponseDataProvider): any => {
  if (obj.content !== undefined) return { content: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const GroupingConfigurationFilterSensitiveLog = (obj: GroupingConfiguration): any => ({
  ...obj,
  ...(obj.criteria && { criteria: SENSITIVE_STRING }),
  ...(obj.values && { values: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateQuickResponseRequestFilterSensitiveLog = (obj: CreateQuickResponseRequest): any => ({
  ...obj,
  ...(obj.content && { content: QuickResponseDataProviderFilterSensitiveLog(obj.content) }),
  ...(obj.groupingConfiguration && {
    groupingConfiguration: GroupingConfigurationFilterSensitiveLog(obj.groupingConfiguration),
  }),
  ...(obj.channels && { channels: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const QuickResponseContentProviderFilterSensitiveLog = (obj: QuickResponseContentProvider): any => {
  if (obj.content !== undefined) return { content: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const QuickResponseContentsFilterSensitiveLog = (obj: QuickResponseContents): any => ({
  ...obj,
  ...(obj.plainText && { plainText: QuickResponseContentProviderFilterSensitiveLog(obj.plainText) }),
  ...(obj.markdown && { markdown: QuickResponseContentProviderFilterSensitiveLog(obj.markdown) }),
});

/**
 * @internal
 */
export const QuickResponseDataFilterSensitiveLog = (obj: QuickResponseData): any => ({
  ...obj,
  ...(obj.contents && { contents: QuickResponseContentsFilterSensitiveLog(obj.contents) }),
  ...(obj.groupingConfiguration && {
    groupingConfiguration: GroupingConfigurationFilterSensitiveLog(obj.groupingConfiguration),
  }),
  ...(obj.channels && { channels: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateQuickResponseResponseFilterSensitiveLog = (obj: CreateQuickResponseResponse): any => ({
  ...obj,
  ...(obj.quickResponse && { quickResponse: QuickResponseDataFilterSensitiveLog(obj.quickResponse) }),
});

/**
 * @internal
 */
export const ImportJobDataFilterSensitiveLog = (obj: ImportJobData): any => ({
  ...obj,
  ...(obj.url && { url: SENSITIVE_STRING }),
  ...(obj.failedRecordReport && { failedRecordReport: SENSITIVE_STRING }),
  ...(obj.externalSourceConfiguration && { externalSourceConfiguration: obj.externalSourceConfiguration }),
});

/**
 * @internal
 */
export const GetImportJobResponseFilterSensitiveLog = (obj: GetImportJobResponse): any => ({
  ...obj,
  ...(obj.importJob && { importJob: ImportJobDataFilterSensitiveLog(obj.importJob) }),
});

/**
 * @internal
 */
export const GetQuickResponseResponseFilterSensitiveLog = (obj: GetQuickResponseResponse): any => ({
  ...obj,
  ...(obj.quickResponse && { quickResponse: QuickResponseDataFilterSensitiveLog(obj.quickResponse) }),
});

/**
 * @internal
 */
export const QuickResponseSummaryFilterSensitiveLog = (obj: QuickResponseSummary): any => ({
  ...obj,
  ...(obj.channels && { channels: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListQuickResponsesResponseFilterSensitiveLog = (obj: ListQuickResponsesResponse): any => ({
  ...obj,
  ...(obj.quickResponseSummaries && {
    quickResponseSummaries: obj.quickResponseSummaries.map((item) => QuickResponseSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const UpdateQuickResponseRequestFilterSensitiveLog = (obj: UpdateQuickResponseRequest): any => ({
  ...obj,
  ...(obj.content && { content: QuickResponseDataProviderFilterSensitiveLog(obj.content) }),
  ...(obj.groupingConfiguration && {
    groupingConfiguration: GroupingConfigurationFilterSensitiveLog(obj.groupingConfiguration),
  }),
  ...(obj.channels && { channels: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateQuickResponseResponseFilterSensitiveLog = (obj: UpdateQuickResponseResponse): any => ({
  ...obj,
  ...(obj.quickResponse && { quickResponse: QuickResponseDataFilterSensitiveLog(obj.quickResponse) }),
});

/**
 * @internal
 */
export const SearchQuickResponsesRequestFilterSensitiveLog = (obj: SearchQuickResponsesRequest): any => ({
  ...obj,
  ...(obj.attributes && { attributes: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const QuickResponseSearchResultDataFilterSensitiveLog = (obj: QuickResponseSearchResultData): any => ({
  ...obj,
  ...(obj.contents && { contents: QuickResponseContentsFilterSensitiveLog(obj.contents) }),
  ...(obj.groupingConfiguration && {
    groupingConfiguration: GroupingConfigurationFilterSensitiveLog(obj.groupingConfiguration),
  }),
  ...(obj.channels && { channels: SENSITIVE_STRING }),
  ...(obj.attributesNotInterpolated && { attributesNotInterpolated: SENSITIVE_STRING }),
  ...(obj.attributesInterpolated && { attributesInterpolated: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchQuickResponsesResponseFilterSensitiveLog = (obj: SearchQuickResponsesResponse): any => ({
  ...obj,
  ...(obj.results && { results: obj.results.map((item) => QuickResponseSearchResultDataFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const StartContentUploadResponseFilterSensitiveLog = (obj: StartContentUploadResponse): any => ({
  ...obj,
  ...(obj.url && { url: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartImportJobResponseFilterSensitiveLog = (obj: StartImportJobResponse): any => ({
  ...obj,
  ...(obj.importJob && { importJob: ImportJobDataFilterSensitiveLog(obj.importJob) }),
});

/**
 * @internal
 */
export const DataDetailsFilterSensitiveLog = (obj: DataDetails): any => {
  if (obj.contentData !== undefined) return { contentData: ContentDataDetailsFilterSensitiveLog(obj.contentData) };
  if (obj.generativeData !== undefined)
    return { generativeData: GenerativeDataDetailsFilterSensitiveLog(obj.generativeData) };
  if (obj.sourceContentData !== undefined)
    return { sourceContentData: SourceContentDataDetailsFilterSensitiveLog(obj.sourceContentData) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const DataSummaryFilterSensitiveLog = (obj: DataSummary): any => ({
  ...obj,
  ...(obj.reference && { reference: obj.reference }),
  ...(obj.details && { details: DataDetailsFilterSensitiveLog(obj.details) }),
});

/**
 * @internal
 */
export const GenerativeDataDetailsFilterSensitiveLog = (obj: GenerativeDataDetails): any => ({
  ...obj,
  ...(obj.completion && { completion: SENSITIVE_STRING }),
  ...(obj.references && { references: obj.references.map((item) => DataSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const RecommendationDataFilterSensitiveLog = (obj: RecommendationData): any => ({
  ...obj,
  ...(obj.document && { document: DocumentFilterSensitiveLog(obj.document) }),
  ...(obj.data && { data: DataSummaryFilterSensitiveLog(obj.data) }),
});

/**
 * @internal
 */
export const ResultDataFilterSensitiveLog = (obj: ResultData): any => ({
  ...obj,
  ...(obj.document && { document: DocumentFilterSensitiveLog(obj.document) }),
  ...(obj.data && { data: DataSummaryFilterSensitiveLog(obj.data) }),
});

/**
 * @internal
 */
export const GetRecommendationsResponseFilterSensitiveLog = (obj: GetRecommendationsResponse): any => ({
  ...obj,
  ...(obj.recommendations && {
    recommendations: obj.recommendations.map((item) => RecommendationDataFilterSensitiveLog(item)),
  }),
  ...(obj.triggers && { triggers: obj.triggers.map((item) => RecommendationTriggerFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const QueryAssistantResponseFilterSensitiveLog = (obj: QueryAssistantResponse): any => ({
  ...obj,
  ...(obj.results && { results: obj.results.map((item) => ResultDataFilterSensitiveLog(item)) }),
});
