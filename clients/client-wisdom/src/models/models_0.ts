// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { WisdomServiceException as __BaseException } from "./WisdomServiceException";

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
   *                <p> For <a href="https://learn.microsoft.com/en-us/sharepoint/dev/sp-add-ins/sharepoint-net-server-csom-jsom-and-rest-api-index"> SharePoint</a>, your AppIntegrations DataIntegration must have a FileConfiguration,
   *           including only file extensions that are among <code>docx</code>, <code>pdf</code>,
   *             <code>html</code>, <code>htm</code>, and <code>txt</code>. </p>
   *             </li>
   *          </ul>
   */
  appIntegrationArn: string | undefined;

  /**
   * @public
   * <p>The fields from the source that are made available to your agents in Wisdom. Optional if
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
 * <p>The data that is input into Wisdom as a result of the assistant association.</p>
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
   * <p>The identifier of the knowledge base.</p>
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
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the knowledge base.</p>
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
   * <p>The identifier of the Wisdom assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant.</p>
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
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the Wisdom assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant.</p>
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
 * <p>The KMS key used for encryption.</p>
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * @public
   * <p>The KMS key. For information about valid ID values, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key identifiers
   *         (KeyId)</a>.</p>
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
   * <p>The KMS key used for encryption.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
}

/**
 * @public
 * <p>The configuration information for the Wisdom assistant integration.</p>
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
   * <p>The identifier of the Wisdom assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant.</p>
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
   * <p>The KMS key used for encryption.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * @public
   * <p>The configuration information for the Wisdom assistant integration.</p>
   */
  integrationConfiguration?: AssistantIntegrationConfiguration;
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
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the knowledge base.</p>
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
 * @enum
 */
export const RecommendationType = {
  KNOWLEDGE_CONTENT: "KNOWLEDGE_CONTENT",
} as const;

/**
 * @public
 */
export type RecommendationType = (typeof RecommendationType)[keyof typeof RecommendationType];

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
  document: Document | undefined;

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
}

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
   * <p>The identifier of the Wisdom assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant.</p>
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
   * <p>The KMS key used for encryption.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * @public
   * <p>The configuration information for the Wisdom assistant integration.</p>
   */
  integrationConfiguration?: AssistantIntegrationConfiguration;
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
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
 */
export interface QueryAssistantRequest {
  /**
   * @public
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
  document: Document | undefined;

  /**
   * @public
   * <p>The relevance score of the results.</p>
   */
  relevanceScore?: number;
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
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the Wisdom assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant.</p>
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
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
 */
export interface CreateContentRequest {
  /**
   * @public
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The name of the content. Each piece of content in a knowledge base must have a unique
   *       name. You can retrieve a piece of content using only its knowledge base and its name with the
   *         <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SearchContent.html">SearchContent</a> API.</p>
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
   * For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift.</p>
   */
  metadata?: Record<string, string>;

  /**
   * @public
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.</p>
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
   * <p>The identifier of the knowledge base.</p>
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
   * For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift.</p>
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
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the knowledge base.</p>
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
   * For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift.</p>
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
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN</p>
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
   *       example, when synchronizing data between an external system and Wisdom, you can store an
   *       external version identifier as metadata to utilize for determining drift.</p>
   */
  metadata?: Record<string, string>;

  /**
   * @public
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.
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
   *          <p>The variable is replaced with the actual value for a piece of content when calling <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetContent.html">GetContent</a>. </p>
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
   * <p>The KMS key used for encryption.</p>
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
   * <p>The identifier of the knowledge base.</p>
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
   * <p>The KMS key used for encryption.</p>
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
export interface GetKnowledgeBaseRequest {
  /**
   * @public
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the knowledge base.</p>
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
   * <p>The KMS key used for encryption.</p>
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
export interface RemoveKnowledgeBaseTemplateUriRequest {
  /**
   * @public
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
 */
export interface StartContentUploadRequest {
  /**
   * @public
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * @public
   * <p>The type of content to upload.</p>
   */
  contentType: string | undefined;
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
export interface UpdateKnowledgeBaseTemplateUriRequest {
  /**
   * @public
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
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
 * <p>Amazon Connect Wisdom throws this exception if you have too many tags in your tag set.</p>
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
 * @internal
 */
export const DocumentTextFilterSensitiveLog = (obj: DocumentText): any => ({
  ...obj,
  ...(obj.text && { text: SENSITIVE_STRING }),
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
export const RecommendationDataFilterSensitiveLog = (obj: RecommendationData): any => ({
  ...obj,
  ...(obj.document && { document: DocumentFilterSensitiveLog(obj.document) }),
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
export const QueryAssistantRequestFilterSensitiveLog = (obj: QueryAssistantRequest): any => ({
  ...obj,
  ...(obj.queryText && { queryText: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ResultDataFilterSensitiveLog = (obj: ResultData): any => ({
  ...obj,
  ...(obj.document && { document: DocumentFilterSensitiveLog(obj.document) }),
});

/**
 * @internal
 */
export const QueryAssistantResponseFilterSensitiveLog = (obj: QueryAssistantResponse): any => ({
  ...obj,
  ...(obj.results && { results: obj.results.map((item) => ResultDataFilterSensitiveLog(item)) }),
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
export const StartContentUploadResponseFilterSensitiveLog = (obj: StartContentUploadResponse): any => ({
  ...obj,
  ...(obj.url && { url: SENSITIVE_STRING }),
});
