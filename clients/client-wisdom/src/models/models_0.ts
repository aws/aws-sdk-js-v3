// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { WisdomServiceException as __BaseException } from "./WisdomServiceException";

/**
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
 * <p>Configuration information for Amazon AppIntegrations to automatically ingest content.</p>
 */
export interface AppIntegrationsConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the AppIntegrations DataIntegration to use for ingesting content.</p>
   */
  appIntegrationArn: string | undefined;

  /**
   * <p>The fields from the source that are made available to your agents in Wisdom. </p>
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
   *          </ul>
   *          <p>Make sure to include additional fields. These fields are indexed and used to source
   *       recommendations. </p>
   */
  objectFields: string[] | undefined;
}

/**
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
 * <p>The data that is input into Wisdom as a result of the assistant association.</p>
 */
export type AssistantAssociationInputData =
  | AssistantAssociationInputData.KnowledgeBaseIdMember
  | AssistantAssociationInputData.$UnknownMember;

export namespace AssistantAssociationInputData {
  /**
   * <p>The identifier of the knowledge base.</p>
   */
  export interface KnowledgeBaseIdMember {
    knowledgeBaseId: string;
    $unknown?: never;
  }

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

export enum AssociationType {
  KNOWLEDGE_BASE = "KNOWLEDGE_BASE",
}

export interface CreateAssistantAssociationRequest {
  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The type of association.</p>
   */
  associationType: AssociationType | string | undefined;

  /**
   * <p>The identifier of the associated resource.</p>
   */
  association: AssistantAssociationInputData | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *    request.</p>
   */
  clientToken?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>Association information about the knowledge base.</p>
 */
export interface KnowledgeBaseAssociationData {
  /**
   * <p>The identifier of the knowledge base.</p>
   */
  knowledgeBaseId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn?: string;
}

/**
 * <p>The data that is output as a result of the assistant association.</p>
 */
export type AssistantAssociationOutputData =
  | AssistantAssociationOutputData.KnowledgeBaseAssociationMember
  | AssistantAssociationOutputData.$UnknownMember;

export namespace AssistantAssociationOutputData {
  /**
   * <p>The knowledge base where output data is sent.</p>
   */
  export interface KnowledgeBaseAssociationMember {
    knowledgeBaseAssociation: KnowledgeBaseAssociationData;
    $unknown?: never;
  }

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
 * <p>Information about the assistant association.</p>
 */
export interface AssistantAssociationData {
  /**
   * <p>The identifier of the assistant association.</p>
   */
  assistantAssociationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the assistant association.</p>
   */
  assistantAssociationArn: string | undefined;

  /**
   * <p>The identifier of the Wisdom assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant.</p>
   */
  assistantArn: string | undefined;

  /**
   * <p>The type of association.</p>
   */
  associationType: AssociationType | string | undefined;

  /**
   * <p>A union type that currently has a single argument, the knowledge base ID.</p>
   */
  associationData: AssistantAssociationOutputData | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateAssistantAssociationResponse {
  /**
   * <p>The assistant association.</p>
   */
  assistantAssociation?: AssistantAssociationData;
}

/**
 * <p>The specified resource does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
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

export interface DeleteAssistantAssociationRequest {
  /**
   * <p>The identifier of the assistant association. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantAssociationId: string | undefined;

  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;
}

export interface DeleteAssistantAssociationResponse {}

export interface GetAssistantAssociationRequest {
  /**
   * <p>The identifier of the assistant association. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantAssociationId: string | undefined;

  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;
}

export interface GetAssistantAssociationResponse {
  /**
   * <p>The assistant association.</p>
   */
  assistantAssociation?: AssistantAssociationData;
}

export interface ListAssistantAssociationsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;
}

/**
 * <p>Summary information about the assistant association.</p>
 */
export interface AssistantAssociationSummary {
  /**
   * <p>The identifier of the assistant association.</p>
   */
  assistantAssociationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the assistant association.</p>
   */
  assistantAssociationArn: string | undefined;

  /**
   * <p>The identifier of the Wisdom assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant.</p>
   */
  assistantArn: string | undefined;

  /**
   * <p>The type of association.</p>
   */
  associationType: AssociationType | string | undefined;

  /**
   * <p>The association data.</p>
   */
  associationData: AssistantAssociationOutputData | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

export interface ListAssistantAssociationsResponse {
  /**
   * <p>Summary information about assistant associations.</p>
   */
  assistantAssociationSummaries: AssistantAssociationSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

/**
 * <p>The KMS key used for encryption.</p>
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * <p>The KMS key. For information about valid ID values, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key identifiers (KeyId)</a>.</p>
   */
  kmsKeyId?: string;
}

export enum AssistantType {
  AGENT = "AGENT",
}

export interface CreateAssistantRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *    request.</p>
   */
  clientToken?: string;

  /**
   * <p>The name of the assistant.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of assistant.</p>
   */
  type: AssistantType | string | undefined;

  /**
   * <p>The description of the assistant.</p>
   */
  description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The KMS key used for encryption.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
}

export enum AssistantStatus {
  ACTIVE = "ACTIVE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETED = "DELETED",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
}

/**
 * <p>The assistant data.</p>
 */
export interface AssistantData {
  /**
   * <p>The identifier of the Wisdom assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant.</p>
   */
  assistantArn: string | undefined;

  /**
   * <p>The name.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of assistant.</p>
   */
  type: AssistantType | string | undefined;

  /**
   * <p>The status of the assistant.</p>
   */
  status: AssistantStatus | string | undefined;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The KMS key used for encryption.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
}

export interface CreateAssistantResponse {
  /**
   * <p>Information about the assistant.</p>
   */
  assistant?: AssistantData;
}

export interface DeleteAssistantRequest {
  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;
}

export interface DeleteAssistantResponse {}

export interface GetAssistantRequest {
  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;
}

export interface GetAssistantResponse {
  /**
   * <p>Information about the assistant.</p>
   */
  assistant?: AssistantData;
}

export interface GetRecommendationsRequest {
  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The duration (in seconds) for which the call waits for a recommendation to be made
   *       available before returning. If a recommendation is available, the call returns sooner than
   *         <code>WaitTimeSeconds</code>. If no messages are available and the wait time expires, the
   *       call returns successfully with an empty list.</p>
   */
  waitTimeSeconds?: number;
}

/**
 * <p>Reference information about the content.</p>
 */
export interface ContentReference {
  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn?: string;

  /**
   * <p>The identifier of the knowledge base.</p>
   */
  knowledgeBaseId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the content.</p>
   */
  contentArn?: string;

  /**
   * <p>The identifier of the content.</p>
   */
  contentId?: string;
}

/**
 * <p>Offset specification to describe highlighting of document excerpts for rendering search
 *       results and recommendations.</p>
 */
export interface Highlight {
  /**
   * <p>The offset for the start of the highlight.</p>
   */
  beginOffsetInclusive?: number;

  /**
   * <p>The offset for the end of the highlight.</p>
   */
  endOffsetExclusive?: number;
}

/**
 * <p>The text of the document.</p>
 */
export interface DocumentText {
  /**
   * <p>Text in the document.</p>
   */
  text?: string;

  /**
   * <p>Highlights in the document text.</p>
   */
  highlights?: Highlight[];
}

/**
 * <p>The document.</p>
 */
export interface Document {
  /**
   * <p>A reference to the content resource.</p>
   */
  contentReference: ContentReference | undefined;

  /**
   * <p>The title of the document.</p>
   */
  title?: DocumentText;

  /**
   * <p>The excerpt from the document.</p>
   */
  excerpt?: DocumentText;
}

export enum RelevanceLevel {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

export enum RecommendationType {
  KNOWLEDGE_CONTENT = "KNOWLEDGE_CONTENT",
}

/**
 * <p>Information about the recommendation.</p>
 */
export interface RecommendationData {
  /**
   * <p>The identifier of the recommendation.</p>
   */
  recommendationId: string | undefined;

  /**
   * <p>The recommended document.</p>
   */
  document: Document | undefined;

  /**
   * <p>The relevance score of the recommendation.</p>
   */
  relevanceScore?: number;

  /**
   * <p>The relevance level of the recommendation.</p>
   */
  relevanceLevel?: RelevanceLevel | string;

  /**
   * <p>The type of recommendation.</p>
   */
  type?: RecommendationType | string;
}

/**
 * <p>Data associated with the QUERY RecommendationTriggerType.</p>
 */
export interface QueryRecommendationTriggerData {
  /**
   * <p>The text associated with the recommendation trigger.</p>
   */
  text?: string;
}

/**
 * <p>A union type containing information related to the trigger.</p>
 */
export type RecommendationTriggerData =
  | RecommendationTriggerData.QueryMember
  | RecommendationTriggerData.$UnknownMember;

export namespace RecommendationTriggerData {
  /**
   * <p>Data associated with the QUERY RecommendationTriggerType.</p>
   */
  export interface QueryMember {
    query: QueryRecommendationTriggerData;
    $unknown?: never;
  }

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

export enum RecommendationSourceType {
  ISSUE_DETECTION = "ISSUE_DETECTION",
  OTHER = "OTHER",
  RULE_EVALUATION = "RULE_EVALUATION",
}

export enum RecommendationTriggerType {
  QUERY = "QUERY",
}

/**
 * <p>A recommendation trigger provides context on the event that produced the referenced recommendations.
 *       Recommendations are only referenced in <code>recommendationIds</code> by a single RecommendationTrigger.</p>
 */
export interface RecommendationTrigger {
  /**
   * <p>The identifier of the recommendation trigger.</p>
   */
  id: string | undefined;

  /**
   * <p>The type of recommendation trigger.</p>
   */
  type: RecommendationTriggerType | string | undefined;

  /**
   * <p>The source of the recommendation trigger.</p>
   *          <ul>
   *             <li>
   *                <p>ISSUE_DETECTION: The corresponding recommendations were triggered
   *           by a Contact Lens issue.</p>
   *             </li>
   *             <li>
   *                <p>RULE_EVALUATION: The corresponding recommendations were triggered
   *           by a Contact Lens rule.</p>
   *             </li>
   *          </ul>
   */
  source: RecommendationSourceType | string | undefined;

  /**
   * <p>A union type containing information related to the trigger.</p>
   */
  data: RecommendationTriggerData | undefined;

  /**
   * <p>The identifiers of the recommendations.</p>
   */
  recommendationIds: string[] | undefined;
}

export interface GetRecommendationsResponse {
  /**
   * <p>The recommendations.</p>
   */
  recommendations: RecommendationData[] | undefined;

  /**
   * <p>The triggers corresponding to recommendations.</p>
   */
  triggers?: RecommendationTrigger[];
}

export interface ListAssistantsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;
}

/**
 * <p>Summary information about the assistant.</p>
 */
export interface AssistantSummary {
  /**
   * <p>The identifier of the Wisdom assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant.</p>
   */
  assistantArn: string | undefined;

  /**
   * <p>The name of the assistant.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of the assistant.</p>
   */
  type: AssistantType | string | undefined;

  /**
   * <p>The status of the assistant.</p>
   */
  status: AssistantStatus | string | undefined;

  /**
   * <p>The description of the assistant.</p>
   */
  description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The KMS key used for encryption.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
}

export interface ListAssistantsResponse {
  /**
   * <p>Information about the assistants.</p>
   */
  assistantSummaries: AssistantSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

export interface NotifyRecommendationsReceivedRequest {
  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The identifiers of the recommendations.</p>
   */
  recommendationIds: string[] | undefined;
}

/**
 * <p>An error occurred when creating a recommendation.</p>
 */
export interface NotifyRecommendationsReceivedError {
  /**
   * <p>The identifier of the recommendation that is in error.</p>
   */
  recommendationId?: string;

  /**
   * <p>A recommendation is causing an error.</p>
   */
  message?: string;
}

export interface NotifyRecommendationsReceivedResponse {
  /**
   * <p>The identifiers of the recommendations.</p>
   */
  recommendationIds?: string[];

  /**
   * <p>The identifiers of recommendations that are causing errors.</p>
   */
  errors?: NotifyRecommendationsReceivedError[];
}

export interface QueryAssistantRequest {
  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The text to search for.</p>
   */
  queryText: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;
}

/**
 * <p>Information about the result.</p>
 */
export interface ResultData {
  /**
   * <p>The identifier of the result data.</p>
   */
  resultId: string | undefined;

  /**
   * <p>The document.</p>
   */
  document: Document | undefined;

  /**
   * <p>The relevance score of the results.</p>
   */
  relevanceScore?: number;
}

export interface QueryAssistantResponse {
  /**
   * <p>The results of the query.</p>
   */
  results: ResultData[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

export enum FilterField {
  NAME = "NAME",
}

export enum FilterOperator {
  EQUALS = "EQUALS",
}

/**
 * <p>A search filter.</p>
 */
export interface Filter {
  /**
   * <p>The field on which to filter.</p>
   */
  field: FilterField | string | undefined;

  /**
   * <p>The operator to use for comparing the field’s value with the provided value.</p>
   */
  operator: FilterOperator | string | undefined;

  /**
   * <p>The desired field value on which to filter.</p>
   */
  value: string | undefined;
}

/**
 * <p>The search expression.</p>
 */
export interface SearchExpression {
  /**
   * <p>The search expression filters.</p>
   */
  filters: Filter[] | undefined;
}

export interface SearchSessionsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The search expression to filter results.</p>
   */
  searchExpression: SearchExpression | undefined;
}

/**
 * <p>Summary information about the session.</p>
 */
export interface SessionSummary {
  /**
   * <p>The identifier of the session.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the session.</p>
   */
  sessionArn: string | undefined;

  /**
   * <p>The identifier of the Wisdom assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant.</p>
   */
  assistantArn: string | undefined;
}

export interface SearchSessionsResponse {
  /**
   * <p>Summary information about the sessions.</p>
   */
  sessionSummaries: SessionSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

export interface CreateSessionRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *    request.</p>
   */
  clientToken?: string;

  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The name of the session.</p>
   */
  name: string | undefined;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>Information about the session.</p>
 */
export interface SessionData {
  /**
   * <p>The Amazon Resource Name (ARN) of the session.</p>
   */
  sessionArn: string | undefined;

  /**
   * <p>The identifier of the session.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The name of the session.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the session.</p>
   */
  description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateSessionResponse {
  /**
   * <p>The session.</p>
   */
  session?: SessionData;
}

export interface GetSessionRequest {
  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  sessionId: string | undefined;
}

export interface GetSessionResponse {
  /**
   * <p>The session.</p>
   */
  session?: SessionData;
}

export interface CreateContentRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the content. Each piece of content in a knowledge base must have a unique
   *       name. You can retrieve a piece of content using only its knowledge base and its name with the
   *         <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SearchContent.html">SearchContent</a> API.</p>
   */
  name: string | undefined;

  /**
   * <p>The title of the content. If not set, the title is equal to the name.</p>
   */
  title?: string;

  /**
   * <p>The URI you want to use for the article. If the knowledge base has a templateUri, setting
   *       this argument overrides it for this piece of content.</p>
   */
  overrideLinkOutUri?: string;

  /**
   * <p>A key/value map to store attributes without affecting tagging or recommendations.
   * For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift.</p>
   */
  metadata?: Record<string, string>;

  /**
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.</p>
   */
  uploadId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *    request.</p>
   */
  clientToken?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

export enum ContentStatus {
  ACTIVE = "ACTIVE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETED = "DELETED",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  UPDATE_FAILED = "UPDATE_FAILED",
}

/**
 * <p>Information about the content.</p>
 */
export interface ContentData {
  /**
   * <p>The Amazon Resource Name (ARN) of the content.</p>
   */
  contentArn: string | undefined;

  /**
   * <p>The identifier of the content.</p>
   */
  contentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the knowledge base.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the content.</p>
   */
  name: string | undefined;

  /**
   * <p>The identifier of the content revision.</p>
   */
  revisionId: string | undefined;

  /**
   * <p>The title of the content.</p>
   */
  title: string | undefined;

  /**
   * <p>The media type of the content.</p>
   */
  contentType: string | undefined;

  /**
   * <p>The status of the content.</p>
   */
  status: ContentStatus | string | undefined;

  /**
   * <p>A key/value map to store attributes without affecting tagging or recommendations.
   * For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift.</p>
   */
  metadata: Record<string, string> | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The URI of the content.</p>
   */
  linkOutUri?: string;

  /**
   * <p>The URL of the content.</p>
   */
  url: string | undefined;

  /**
   * <p>The expiration time of the URL as an epoch timestamp.</p>
   */
  urlExpiry: Date | undefined;
}

export interface CreateContentResponse {
  /**
   * <p>The content.</p>
   */
  content?: ContentData;
}

export interface DeleteContentRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  contentId: string | undefined;
}

export interface DeleteContentResponse {}

export interface GetContentRequest {
  /**
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  contentId: string | undefined;

  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

export interface GetContentResponse {
  /**
   * <p>The content.</p>
   */
  content?: ContentData;
}

export interface GetContentSummaryRequest {
  /**
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  contentId: string | undefined;

  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

/**
 * <p>Summary information about the content.</p>
 */
export interface ContentSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the content.</p>
   */
  contentArn: string | undefined;

  /**
   * <p>The identifier of the content.</p>
   */
  contentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the knowledge base.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the content.</p>
   */
  name: string | undefined;

  /**
   * <p>The identifier of the revision of the content.</p>
   */
  revisionId: string | undefined;

  /**
   * <p>The title of the content.</p>
   */
  title: string | undefined;

  /**
   * <p>The media type of the content.</p>
   */
  contentType: string | undefined;

  /**
   * <p>The status of the content.</p>
   */
  status: ContentStatus | string | undefined;

  /**
   * <p>A key/value map to store attributes without affecting tagging or recommendations.
   * For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift.</p>
   */
  metadata: Record<string, string> | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

export interface GetContentSummaryResponse {
  /**
   * <p>The content summary.</p>
   */
  contentSummary?: ContentSummary;
}

export interface ListContentsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

export interface ListContentsResponse {
  /**
   * <p>Information about the content.</p>
   */
  contentSummaries: ContentSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

/**
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

export interface UpdateContentRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  contentId: string | undefined;

  /**
   * <p>The <code>revisionId</code> of the content resource to update, taken from an earlier call
   *       to <code>GetContent</code>, <code>GetContentSummary</code>, <code>SearchContent</code>, or
   *         <code>ListContents</code>. If included, this argument acts as an optimistic lock to ensure
   *       content was not modified since it was last read. If it has been modified, this API throws a
   *         <code>PreconditionFailedException</code>.</p>
   */
  revisionId?: string;

  /**
   * <p>The title of the content.</p>
   */
  title?: string;

  /**
   * <p>The URI for the article. If the knowledge base has a templateUri, setting this argument
   *       overrides it for this piece of content. To remove an existing <code>overrideLinkOurUri</code>,
   *       exclude this argument and set <code>removeOverrideLinkOutUri</code> to true.</p>
   */
  overrideLinkOutUri?: string;

  /**
   * <p>Unset the existing <code>overrideLinkOutUri</code> if it exists.</p>
   */
  removeOverrideLinkOutUri?: boolean;

  /**
   * <p>A key/value map to store attributes without affecting tagging or recommendations. For
   *       example, when synchronizing data between an external system and Wisdom, you can store an
   *       external version identifier as metadata to utilize for determining drift.</p>
   */
  metadata?: Record<string, string>;

  /**
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.
   *     </p>
   */
  uploadId?: string;
}

export interface UpdateContentResponse {
  /**
   * <p>The content.</p>
   */
  content?: ContentData;
}

export enum KnowledgeBaseType {
  CUSTOM = "CUSTOM",
  EXTERNAL = "EXTERNAL",
}

/**
 * <p>Information about how to render the content.</p>
 */
export interface RenderingConfiguration {
  /**
   * <p>A URI template containing exactly one variable in <code>${variableName} </code>format.
   *       This can only be set for <code>EXTERNAL</code> knowledge bases. For Salesforce and ServiceNow,
   *       the variable must be one of the following:</p>
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
   *          </ul>
   *
   *          <p>The variable is replaced with the actual value for a piece of content when calling <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetContent.html">GetContent</a>. </p>
   */
  templateUri?: string;
}

/**
 * <p>Configuration information about the external data source.</p>
 */
export type SourceConfiguration = SourceConfiguration.AppIntegrationsMember | SourceConfiguration.$UnknownMember;

export namespace SourceConfiguration {
  /**
   * <p>Configuration information for Amazon AppIntegrations to automatically ingest content.</p>
   */
  export interface AppIntegrationsMember {
    appIntegrations: AppIntegrationsConfiguration;
    $unknown?: never;
  }

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

export interface CreateKnowledgeBaseRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *    request.</p>
   */
  clientToken?: string;

  /**
   * <p>The name of the knowledge base.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of knowledge base. Only CUSTOM knowledge bases allow you to upload your own content.
   *       EXTERNAL knowledge bases support integrations with third-party systems whose content is
   *       synchronized automatically. </p>
   */
  knowledgeBaseType: KnowledgeBaseType | string | undefined;

  /**
   * <p>The source of the knowledge base content. Only set this argument for EXTERNAL knowledge
   *       bases.</p>
   */
  sourceConfiguration?: SourceConfiguration;

  /**
   * <p>Information about how to render the content.</p>
   */
  renderingConfiguration?: RenderingConfiguration;

  /**
   * <p>The KMS key used for encryption.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

export enum KnowledgeBaseStatus {
  ACTIVE = "ACTIVE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETED = "DELETED",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
}

/**
 * <p>Information about the knowledge base.</p>
 */
export interface KnowledgeBaseData {
  /**
   * <p>The identifier of the knowledge base.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The name of the knowledge base.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of knowledge base.</p>
   */
  knowledgeBaseType: KnowledgeBaseType | string | undefined;

  /**
   * <p>The status of the knowledge base.</p>
   */
  status: KnowledgeBaseStatus | string | undefined;

  /**
   * <p>An epoch timestamp indicating the most recent content modification inside the knowledge
   *       base. If no content exists in a knowledge base, this value is unset.</p>
   */
  lastContentModificationTime?: Date;

  /**
   * <p>Source configuration information about the knowledge base.</p>
   */
  sourceConfiguration?: SourceConfiguration;

  /**
   * <p>Information about how to render the content.</p>
   */
  renderingConfiguration?: RenderingConfiguration;

  /**
   * <p>The KMS key used for encryption.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateKnowledgeBaseResponse {
  /**
   * <p>The knowledge base.</p>
   */
  knowledgeBase?: KnowledgeBaseData;
}

export interface DeleteKnowledgeBaseRequest {
  /**
   * <p>The knowledge base to delete content from. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

export interface DeleteKnowledgeBaseResponse {}

export interface GetKnowledgeBaseRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

export interface GetKnowledgeBaseResponse {
  /**
   * <p>The knowledge base.</p>
   */
  knowledgeBase?: KnowledgeBaseData;
}

export interface ListKnowledgeBasesRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;
}

/**
 * <p>Summary information about the knowledge base.</p>
 */
export interface KnowledgeBaseSummary {
  /**
   * <p>The identifier of the knowledge base.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The name of the knowledge base.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of knowledge base.</p>
   */
  knowledgeBaseType: KnowledgeBaseType | string | undefined;

  /**
   * <p>The status of the knowledge base summary.</p>
   */
  status: KnowledgeBaseStatus | string | undefined;

  /**
   * <p>Configuration information about the external data source.</p>
   */
  sourceConfiguration?: SourceConfiguration;

  /**
   * <p>Information about how to render the content.</p>
   */
  renderingConfiguration?: RenderingConfiguration;

  /**
   * <p>The KMS key used for encryption.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * <p>The description of the knowledge base.</p>
   */
  description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

export interface ListKnowledgeBasesResponse {
  /**
   * <p>Information about the knowledge bases.</p>
   */
  knowledgeBaseSummaries: KnowledgeBaseSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

export interface RemoveKnowledgeBaseTemplateUriRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

export interface RemoveKnowledgeBaseTemplateUriResponse {}

export interface SearchContentRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The search expression to filter results.</p>
   */
  searchExpression: SearchExpression | undefined;
}

export interface SearchContentResponse {
  /**
   * <p>Summary information about the content.</p>
   */
  contentSummaries: ContentSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

export interface StartContentUploadRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The type of content to upload.</p>
   */
  contentType: string | undefined;
}

export interface StartContentUploadResponse {
  /**
   * <p>The identifier of the upload.</p>
   */
  uploadId: string | undefined;

  /**
   * <p>The URL of the upload.</p>
   */
  url: string | undefined;

  /**
   * <p>The expiration time of the URL as an epoch timestamp.</p>
   */
  urlExpiry: Date | undefined;

  /**
   * <p>The headers to include in the upload.</p>
   */
  headersToInclude: Record<string, string> | undefined;
}

export interface UpdateKnowledgeBaseTemplateUriRequest {
  /**
   * <p>The identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The template URI to update.</p>
   */
  templateUri: string | undefined;
}

export interface UpdateKnowledgeBaseTemplateUriResponse {
  /**
   * <p>The knowledge base to update.</p>
   */
  knowledgeBase?: KnowledgeBaseData;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: Record<string, string>;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

/**
 * <p>Amazon Connect Wisdom throws this exception if you have too many tags in your tag set.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
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

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

/**
 * @internal
 */
export const AppIntegrationsConfigurationFilterSensitiveLog = (obj: AppIntegrationsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssistantAssociationInputDataFilterSensitiveLog = (obj: AssistantAssociationInputData): any => {
  if (obj.knowledgeBaseId !== undefined) return { knowledgeBaseId: obj.knowledgeBaseId };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateAssistantAssociationRequestFilterSensitiveLog = (obj: CreateAssistantAssociationRequest): any => ({
  ...obj,
  ...(obj.association && { association: AssistantAssociationInputDataFilterSensitiveLog(obj.association) }),
});

/**
 * @internal
 */
export const KnowledgeBaseAssociationDataFilterSensitiveLog = (obj: KnowledgeBaseAssociationData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssistantAssociationOutputDataFilterSensitiveLog = (obj: AssistantAssociationOutputData): any => {
  if (obj.knowledgeBaseAssociation !== undefined)
    return { knowledgeBaseAssociation: KnowledgeBaseAssociationDataFilterSensitiveLog(obj.knowledgeBaseAssociation) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const AssistantAssociationDataFilterSensitiveLog = (obj: AssistantAssociationData): any => ({
  ...obj,
  ...(obj.associationData && {
    associationData: AssistantAssociationOutputDataFilterSensitiveLog(obj.associationData),
  }),
});

/**
 * @internal
 */
export const CreateAssistantAssociationResponseFilterSensitiveLog = (obj: CreateAssistantAssociationResponse): any => ({
  ...obj,
  ...(obj.assistantAssociation && {
    assistantAssociation: AssistantAssociationDataFilterSensitiveLog(obj.assistantAssociation),
  }),
});

/**
 * @internal
 */
export const DeleteAssistantAssociationRequestFilterSensitiveLog = (obj: DeleteAssistantAssociationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssistantAssociationResponseFilterSensitiveLog = (obj: DeleteAssistantAssociationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssistantAssociationRequestFilterSensitiveLog = (obj: GetAssistantAssociationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssistantAssociationResponseFilterSensitiveLog = (obj: GetAssistantAssociationResponse): any => ({
  ...obj,
  ...(obj.assistantAssociation && {
    assistantAssociation: AssistantAssociationDataFilterSensitiveLog(obj.assistantAssociation),
  }),
});

/**
 * @internal
 */
export const ListAssistantAssociationsRequestFilterSensitiveLog = (obj: ListAssistantAssociationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssistantAssociationSummaryFilterSensitiveLog = (obj: AssistantAssociationSummary): any => ({
  ...obj,
  ...(obj.associationData && {
    associationData: AssistantAssociationOutputDataFilterSensitiveLog(obj.associationData),
  }),
});

/**
 * @internal
 */
export const ListAssistantAssociationsResponseFilterSensitiveLog = (obj: ListAssistantAssociationsResponse): any => ({
  ...obj,
  ...(obj.assistantAssociationSummaries && {
    assistantAssociationSummaries: obj.assistantAssociationSummaries.map((item) =>
      AssistantAssociationSummaryFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const ServerSideEncryptionConfigurationFilterSensitiveLog = (obj: ServerSideEncryptionConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAssistantRequestFilterSensitiveLog = (obj: CreateAssistantRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssistantDataFilterSensitiveLog = (obj: AssistantData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAssistantResponseFilterSensitiveLog = (obj: CreateAssistantResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssistantRequestFilterSensitiveLog = (obj: DeleteAssistantRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssistantResponseFilterSensitiveLog = (obj: DeleteAssistantResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssistantRequestFilterSensitiveLog = (obj: GetAssistantRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssistantResponseFilterSensitiveLog = (obj: GetAssistantResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRecommendationsRequestFilterSensitiveLog = (obj: GetRecommendationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContentReferenceFilterSensitiveLog = (obj: ContentReference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HighlightFilterSensitiveLog = (obj: Highlight): any => ({
  ...obj,
});

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
export const ListAssistantsRequestFilterSensitiveLog = (obj: ListAssistantsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssistantSummaryFilterSensitiveLog = (obj: AssistantSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssistantsResponseFilterSensitiveLog = (obj: ListAssistantsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotifyRecommendationsReceivedRequestFilterSensitiveLog = (
  obj: NotifyRecommendationsReceivedRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotifyRecommendationsReceivedErrorFilterSensitiveLog = (obj: NotifyRecommendationsReceivedError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotifyRecommendationsReceivedResponseFilterSensitiveLog = (
  obj: NotifyRecommendationsReceivedResponse
): any => ({
  ...obj,
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
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchExpressionFilterSensitiveLog = (obj: SearchExpression): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchSessionsRequestFilterSensitiveLog = (obj: SearchSessionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SessionSummaryFilterSensitiveLog = (obj: SessionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchSessionsResponseFilterSensitiveLog = (obj: SearchSessionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSessionRequestFilterSensitiveLog = (obj: CreateSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SessionDataFilterSensitiveLog = (obj: SessionData): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSessionResponseFilterSensitiveLog = (obj: CreateSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSessionRequestFilterSensitiveLog = (obj: GetSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetSessionResponseFilterSensitiveLog = (obj: GetSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateContentRequestFilterSensitiveLog = (obj: CreateContentRequest): any => ({
  ...obj,
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
export const DeleteContentRequestFilterSensitiveLog = (obj: DeleteContentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteContentResponseFilterSensitiveLog = (obj: DeleteContentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContentRequestFilterSensitiveLog = (obj: GetContentRequest): any => ({
  ...obj,
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
export const GetContentSummaryRequestFilterSensitiveLog = (obj: GetContentSummaryRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ContentSummaryFilterSensitiveLog = (obj: ContentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetContentSummaryResponseFilterSensitiveLog = (obj: GetContentSummaryResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContentsRequestFilterSensitiveLog = (obj: ListContentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListContentsResponseFilterSensitiveLog = (obj: ListContentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateContentRequestFilterSensitiveLog = (obj: UpdateContentRequest): any => ({
  ...obj,
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
export const RenderingConfigurationFilterSensitiveLog = (obj: RenderingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceConfigurationFilterSensitiveLog = (obj: SourceConfiguration): any => {
  if (obj.appIntegrations !== undefined)
    return { appIntegrations: AppIntegrationsConfigurationFilterSensitiveLog(obj.appIntegrations) };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const CreateKnowledgeBaseRequestFilterSensitiveLog = (obj: CreateKnowledgeBaseRequest): any => ({
  ...obj,
  ...(obj.sourceConfiguration && {
    sourceConfiguration: SourceConfigurationFilterSensitiveLog(obj.sourceConfiguration),
  }),
});

/**
 * @internal
 */
export const KnowledgeBaseDataFilterSensitiveLog = (obj: KnowledgeBaseData): any => ({
  ...obj,
  ...(obj.sourceConfiguration && {
    sourceConfiguration: SourceConfigurationFilterSensitiveLog(obj.sourceConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateKnowledgeBaseResponseFilterSensitiveLog = (obj: CreateKnowledgeBaseResponse): any => ({
  ...obj,
  ...(obj.knowledgeBase && { knowledgeBase: KnowledgeBaseDataFilterSensitiveLog(obj.knowledgeBase) }),
});

/**
 * @internal
 */
export const DeleteKnowledgeBaseRequestFilterSensitiveLog = (obj: DeleteKnowledgeBaseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteKnowledgeBaseResponseFilterSensitiveLog = (obj: DeleteKnowledgeBaseResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetKnowledgeBaseRequestFilterSensitiveLog = (obj: GetKnowledgeBaseRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetKnowledgeBaseResponseFilterSensitiveLog = (obj: GetKnowledgeBaseResponse): any => ({
  ...obj,
  ...(obj.knowledgeBase && { knowledgeBase: KnowledgeBaseDataFilterSensitiveLog(obj.knowledgeBase) }),
});

/**
 * @internal
 */
export const ListKnowledgeBasesRequestFilterSensitiveLog = (obj: ListKnowledgeBasesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KnowledgeBaseSummaryFilterSensitiveLog = (obj: KnowledgeBaseSummary): any => ({
  ...obj,
  ...(obj.sourceConfiguration && {
    sourceConfiguration: SourceConfigurationFilterSensitiveLog(obj.sourceConfiguration),
  }),
});

/**
 * @internal
 */
export const ListKnowledgeBasesResponseFilterSensitiveLog = (obj: ListKnowledgeBasesResponse): any => ({
  ...obj,
  ...(obj.knowledgeBaseSummaries && {
    knowledgeBaseSummaries: obj.knowledgeBaseSummaries.map((item) => KnowledgeBaseSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const RemoveKnowledgeBaseTemplateUriRequestFilterSensitiveLog = (
  obj: RemoveKnowledgeBaseTemplateUriRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveKnowledgeBaseTemplateUriResponseFilterSensitiveLog = (
  obj: RemoveKnowledgeBaseTemplateUriResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchContentRequestFilterSensitiveLog = (obj: SearchContentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchContentResponseFilterSensitiveLog = (obj: SearchContentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartContentUploadRequestFilterSensitiveLog = (obj: StartContentUploadRequest): any => ({
  ...obj,
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
export const UpdateKnowledgeBaseTemplateUriRequestFilterSensitiveLog = (
  obj: UpdateKnowledgeBaseTemplateUriRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateKnowledgeBaseTemplateUriResponseFilterSensitiveLog = (
  obj: UpdateKnowledgeBaseTemplateUriResponse
): any => ({
  ...obj,
  ...(obj.knowledgeBase && { knowledgeBase: KnowledgeBaseDataFilterSensitiveLog(obj.knowledgeBase) }),
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});
