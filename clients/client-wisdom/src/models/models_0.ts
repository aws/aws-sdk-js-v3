// smithy-typescript generated code
/**
 * <p>Configuration information for Amazon AppIntegrations to automatically ingest content.</p>
 * @public
 */
export interface AppIntegrationsConfiguration {
  /**
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
   *             ObjectConfiguration and FileConfiguration of your AppIntegrations
   *           DataIntegration must be null. The <code>SourceURI</code> of your
   *             DataIntegration must use the following format:
   *             <code>s3://your_s3_bucket_name</code>.</p>
   *                <important>
   *                   <p>The bucket policy of the corresponding S3 bucket must allow the Amazon Web Services
   *             principal <code>app-integrations.amazonaws.com</code> to perform
   *               <code>s3:ListBucket</code>, <code>s3:GetObject</code>, and <code>s3:GetBucketLocation</code>
   *             against the bucket.</p>
   *                </important>
   *             </li>
   *          </ul>
   * @public
   */
  appIntegrationArn: string | undefined;

  /**
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
   * @public
   */
  objectFields?: string[] | undefined;
}

/**
 * <p>The data that is input into Wisdom as a result of the assistant association.</p>
 * @public
 */
export type AssistantAssociationInputData =
  | AssistantAssociationInputData.KnowledgeBaseIdMember
  | AssistantAssociationInputData.$UnknownMember;

/**
 * @public
 */
export namespace AssistantAssociationInputData {
  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it.</p>
   * @public
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    knowledgeBaseId: (value: string) => T;
    _: (name: string, value: any) => T;
  }
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
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The type of association.</p>
   * @public
   */
  associationType: AssociationType | undefined;

  /**
   * <p>The identifier of the associated resource.</p>
   * @public
   */
  association: AssistantAssociationInputData | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Association information about the knowledge base.</p>
 * @public
 */
export interface KnowledgeBaseAssociationData {
  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it.</p>
   * @public
   */
  knowledgeBaseId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn?: string | undefined;
}

/**
 * <p>The data that is output as a result of the assistant association.</p>
 * @public
 */
export type AssistantAssociationOutputData =
  | AssistantAssociationOutputData.KnowledgeBaseAssociationMember
  | AssistantAssociationOutputData.$UnknownMember;

/**
 * @public
 */
export namespace AssistantAssociationOutputData {
  /**
   * <p>The knowledge base where output data is sent.</p>
   * @public
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    knowledgeBaseAssociation: (value: KnowledgeBaseAssociationData) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Information about the assistant association.</p>
 * @public
 */
export interface AssistantAssociationData {
  /**
   * <p>The identifier of the assistant association.</p>
   * @public
   */
  assistantAssociationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the assistant association.</p>
   * @public
   */
  assistantAssociationArn: string | undefined;

  /**
   * <p>The identifier of the Wisdom assistant.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant.</p>
   * @public
   */
  assistantArn: string | undefined;

  /**
   * <p>The type of association.</p>
   * @public
   */
  associationType: AssociationType | undefined;

  /**
   * <p>A union type that currently has a single argument, the knowledge base ID.</p>
   * @public
   */
  associationData: AssistantAssociationOutputData | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAssistantAssociationResponse {
  /**
   * <p>The assistant association.</p>
   * @public
   */
  assistantAssociation?: AssistantAssociationData | undefined;
}

/**
 * @public
 */
export interface DeleteAssistantAssociationRequest {
  /**
   * <p>The identifier of the assistant association. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantAssociationId: string | undefined;

  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
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
   * <p>The identifier of the assistant association. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantAssociationId: string | undefined;

  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;
}

/**
 * @public
 */
export interface GetAssistantAssociationResponse {
  /**
   * <p>The assistant association.</p>
   * @public
   */
  assistantAssociation?: AssistantAssociationData | undefined;
}

/**
 * @public
 */
export interface ListAssistantAssociationsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;
}

/**
 * <p>Summary information about the assistant association.</p>
 * @public
 */
export interface AssistantAssociationSummary {
  /**
   * <p>The identifier of the assistant association.</p>
   * @public
   */
  assistantAssociationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the assistant association.</p>
   * @public
   */
  assistantAssociationArn: string | undefined;

  /**
   * <p>The identifier of the Wisdom assistant.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant.</p>
   * @public
   */
  assistantArn: string | undefined;

  /**
   * <p>The type of association.</p>
   * @public
   */
  associationType: AssociationType | undefined;

  /**
   * <p>The association data.</p>
   * @public
   */
  associationData: AssistantAssociationOutputData | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListAssistantAssociationsResponse {
  /**
   * <p>Summary information about assistant associations.</p>
   * @public
   */
  assistantAssociationSummaries: AssistantAssociationSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The configuration information for the customer managed key used for encryption.</p>
 * @public
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * <p>The customer managed key used for encryption. For more information about setting up a
   *         customer managed key for Wisdom, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html">Enable Amazon Connect Wisdom for your
   *         instance</a>. For information about valid ID values, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key identifiers (KeyId)</a>.</p>
   * @public
   */
  kmsKeyId?: string | undefined;
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
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the assistant.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of assistant.</p>
   * @public
   */
  type: AssistantType | undefined;

  /**
   * <p>The description of the assistant.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration information for the customer managed key used for encryption. </p>
   *          <p>The customer managed key must have a policy that allows <code>kms:CreateGrant</code>,
   *       <code> kms:DescribeKey</code>, and <code>kms:Decrypt/kms:GenerateDataKey</code> permissions to the IAM identity using the key
   *       to invoke Wisdom. To use Wisdom with chat, the key policy must also allow
   *         <code>kms:Decrypt</code>, <code>kms:GenerateDataKey*</code>, and
   *         <code>kms:DescribeKey</code> permissions to the <code>connect.amazonaws.com</code> service
   *       principal. </p>
   *          <p>For more information about setting up a customer managed key for Wisdom, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html">Enable Amazon Connect Wisdom
   *         for your instance</a>.</p>
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;
}

/**
 * <p>The configuration information for the Wisdom assistant integration.</p>
 * @public
 */
export interface AssistantIntegrationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the integrated Amazon SNS topic used for streaming chat messages.</p>
   * @public
   */
  topicIntegrationArn?: string | undefined;
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
 * <p>The assistant data.</p>
 * @public
 */
export interface AssistantData {
  /**
   * <p>The identifier of the Wisdom assistant.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant.</p>
   * @public
   */
  assistantArn: string | undefined;

  /**
   * <p>The name.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of assistant.</p>
   * @public
   */
  type: AssistantType | undefined;

  /**
   * <p>The status of the assistant.</p>
   * @public
   */
  status: AssistantStatus | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration information for the customer managed key used for encryption. </p>
   *          <p>This KMS key must have a policy that allows <code>kms:CreateGrant</code>,
   *       <code>kms:DescribeKey</code>, and <code>kms:Decrypt/kms:GenerateDataKey</code> permissions to the IAM identity using the key
   *       to invoke Wisdom. To use Wisdom with chat, the key policy must also allow
   *       <code>kms:Decrypt</code>, <code>kms:GenerateDataKey*</code>, and <code>kms:DescribeKey</code>
   *       permissions to the <code>connect.amazonaws.com</code> service
   *       principal. </p>
   *          <p>For more information about setting up a customer managed key for Wisdom, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html">Enable Amazon Connect Wisdom
   *         for your instance</a>.</p>
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>The configuration information for the Wisdom assistant integration.</p>
   * @public
   */
  integrationConfiguration?: AssistantIntegrationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateAssistantResponse {
  /**
   * <p>Information about the assistant.</p>
   * @public
   */
  assistant?: AssistantData | undefined;
}

/**
 * @public
 */
export interface DeleteAssistantRequest {
  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
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
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;
}

/**
 * @public
 */
export interface GetAssistantResponse {
  /**
   * <p>Information about the assistant.</p>
   * @public
   */
  assistant?: AssistantData | undefined;
}

/**
 * @public
 */
export interface GetRecommendationsRequest {
  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The duration (in seconds) for which the call waits for a recommendation to be made
   *       available before returning. If a recommendation is available, the call returns sooner than
   *         <code>WaitTimeSeconds</code>. If no messages are available and the wait time expires, the
   *       call returns successfully with an empty list.</p>
   * @public
   */
  waitTimeSeconds?: number | undefined;
}

/**
 * <p>Reference information about the content.</p>
 * @public
 */
export interface ContentReference {
  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn?: string | undefined;

  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it.</p>
   * @public
   */
  knowledgeBaseId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the content.</p>
   * @public
   */
  contentArn?: string | undefined;

  /**
   * <p>The identifier of the content.</p>
   * @public
   */
  contentId?: string | undefined;
}

/**
 * <p>Offset specification to describe highlighting of document excerpts for rendering search
 *       results and recommendations.</p>
 * @public
 */
export interface Highlight {
  /**
   * <p>The offset for the start of the highlight.</p>
   * @public
   */
  beginOffsetInclusive?: number | undefined;

  /**
   * <p>The offset for the end of the highlight.</p>
   * @public
   */
  endOffsetExclusive?: number | undefined;
}

/**
 * <p>The text of the document.</p>
 * @public
 */
export interface DocumentText {
  /**
   * <p>Text in the document.</p>
   * @public
   */
  text?: string | undefined;

  /**
   * <p>Highlights in the document text.</p>
   * @public
   */
  highlights?: Highlight[] | undefined;
}

/**
 * <p>The document.</p>
 * @public
 */
export interface Document {
  /**
   * <p>A reference to the content resource.</p>
   * @public
   */
  contentReference: ContentReference | undefined;

  /**
   * <p>The title of the document.</p>
   * @public
   */
  title?: DocumentText | undefined;

  /**
   * <p>The excerpt from the document.</p>
   * @public
   */
  excerpt?: DocumentText | undefined;
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
 * <p>Information about the recommendation.</p>
 * @public
 */
export interface RecommendationData {
  /**
   * <p>The identifier of the recommendation.</p>
   * @public
   */
  recommendationId: string | undefined;

  /**
   * <p>The recommended document.</p>
   * @public
   */
  document: Document | undefined;

  /**
   * <p>The relevance score of the recommendation.</p>
   * @public
   */
  relevanceScore?: number | undefined;

  /**
   * <p>The relevance level of the recommendation.</p>
   * @public
   */
  relevanceLevel?: RelevanceLevel | undefined;

  /**
   * <p>The type of recommendation.</p>
   * @public
   */
  type?: RecommendationType | undefined;
}

/**
 * <p>Data associated with the QUERY RecommendationTriggerType.</p>
 * @public
 */
export interface QueryRecommendationTriggerData {
  /**
   * <p>The text associated with the recommendation trigger.</p>
   * @public
   */
  text?: string | undefined;
}

/**
 * <p>A union type containing information related to the trigger.</p>
 * @public
 */
export type RecommendationTriggerData =
  | RecommendationTriggerData.QueryMember
  | RecommendationTriggerData.$UnknownMember;

/**
 * @public
 */
export namespace RecommendationTriggerData {
  /**
   * <p>Data associated with the QUERY RecommendationTriggerType.</p>
   * @public
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    query: (value: QueryRecommendationTriggerData) => T;
    _: (name: string, value: any) => T;
  }
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
 * <p>A recommendation trigger provides context on the event that produced the referenced
 *       recommendations. Recommendations are only referenced in <code>recommendationIds</code> by a
 *       single RecommendationTrigger.</p>
 * @public
 */
export interface RecommendationTrigger {
  /**
   * <p>The identifier of the recommendation trigger.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The type of recommendation trigger.</p>
   * @public
   */
  type: RecommendationTriggerType | undefined;

  /**
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
   * @public
   */
  source: RecommendationSourceType | undefined;

  /**
   * <p>A union type containing information related to the trigger.</p>
   * @public
   */
  data: RecommendationTriggerData | undefined;

  /**
   * <p>The identifiers of the recommendations.</p>
   * @public
   */
  recommendationIds: string[] | undefined;
}

/**
 * @public
 */
export interface GetRecommendationsResponse {
  /**
   * <p>The recommendations.</p>
   * @public
   */
  recommendations: RecommendationData[] | undefined;

  /**
   * <p>The triggers corresponding to recommendations.</p>
   * @public
   */
  triggers?: RecommendationTrigger[] | undefined;
}

/**
 * @public
 */
export interface ListAssistantsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary information about the assistant.</p>
 * @public
 */
export interface AssistantSummary {
  /**
   * <p>The identifier of the Wisdom assistant.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant.</p>
   * @public
   */
  assistantArn: string | undefined;

  /**
   * <p>The name of the assistant.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the assistant.</p>
   * @public
   */
  type: AssistantType | undefined;

  /**
   * <p>The status of the assistant.</p>
   * @public
   */
  status: AssistantStatus | undefined;

  /**
   * <p>The description of the assistant.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration information for the customer managed key used for encryption. </p>
   *          <p>This KMS key must have a policy that allows <code>kms:CreateGrant</code>,
   *       <code>kms:DescribeKey</code>, and <code>kms:Decrypt/kms:GenerateDataKey</code> permissions to the IAM identity using the key
   *       to invoke Wisdom. To use Wisdom with chat, the key policy must also allow
   *         <code>kms:Decrypt</code>, <code>kms:GenerateDataKey*</code>, and
   *         <code>kms:DescribeKey</code> permissions to the <code>connect.amazonaws.com</code> service
   *       principal. </p>
   *          <p>For more information about setting up a customer managed key for Wisdom, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html">Enable Amazon Connect Wisdom
   *         for your instance</a>.</p>
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>The configuration information for the Wisdom assistant integration.</p>
   * @public
   */
  integrationConfiguration?: AssistantIntegrationConfiguration | undefined;
}

/**
 * @public
 */
export interface ListAssistantsResponse {
  /**
   * <p>Information about the assistants.</p>
   * @public
   */
  assistantSummaries: AssistantSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface NotifyRecommendationsReceivedRequest {
  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The identifiers of the recommendations.</p>
   * @public
   */
  recommendationIds: string[] | undefined;
}

/**
 * <p>An error occurred when creating a recommendation.</p>
 * @public
 */
export interface NotifyRecommendationsReceivedError {
  /**
   * <p>The identifier of the recommendation that is in error.</p>
   * @public
   */
  recommendationId?: string | undefined;

  /**
   * <p>A recommendation is causing an error.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface NotifyRecommendationsReceivedResponse {
  /**
   * <p>The identifiers of the recommendations.</p>
   * @public
   */
  recommendationIds?: string[] | undefined;

  /**
   * <p>The identifiers of recommendations that are causing errors.</p>
   * @public
   */
  errors?: NotifyRecommendationsReceivedError[] | undefined;
}

/**
 * @public
 */
export interface QueryAssistantRequest {
  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The text to search for.</p>
   * @public
   */
  queryText: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Information about the result.</p>
 * @public
 */
export interface ResultData {
  /**
   * <p>The identifier of the result data.</p>
   * @public
   */
  resultId: string | undefined;

  /**
   * <p>The document.</p>
   * @public
   */
  document: Document | undefined;

  /**
   * <p>The relevance score of the results.</p>
   * @public
   */
  relevanceScore?: number | undefined;
}

/**
 * @public
 */
export interface QueryAssistantResponse {
  /**
   * <p>The results of the query.</p>
   * @public
   */
  results: ResultData[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
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
 * <p>A search filter.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The field on which to filter.</p>
   * @public
   */
  field: FilterField | undefined;

  /**
   * <p>The operator to use for comparing the field’s value with the provided value.</p>
   * @public
   */
  operator: FilterOperator | undefined;

  /**
   * <p>The desired field value on which to filter.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * <p>The search expression.</p>
 * @public
 */
export interface SearchExpression {
  /**
   * <p>The search expression filters.</p>
   * @public
   */
  filters: Filter[] | undefined;
}

/**
 * @public
 */
export interface SearchSessionsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The search expression to filter results.</p>
   * @public
   */
  searchExpression: SearchExpression | undefined;
}

/**
 * <p>Summary information about the session.</p>
 * @public
 */
export interface SessionSummary {
  /**
   * <p>The identifier of the session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the session.</p>
   * @public
   */
  sessionArn: string | undefined;

  /**
   * <p>The identifier of the Wisdom assistant.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant.</p>
   * @public
   */
  assistantArn: string | undefined;
}

/**
 * @public
 */
export interface SearchSessionsResponse {
  /**
   * <p>Summary information about the sessions.</p>
   * @public
   */
  sessionSummaries: SessionSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSessionRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The name of the session.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The configuration information for the session integration.</p>
 * @public
 */
export interface SessionIntegrationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the integrated Amazon SNS topic used for streaming chat messages.</p>
   * @public
   */
  topicIntegrationArn?: string | undefined;
}

/**
 * <p>Information about the session.</p>
 * @public
 */
export interface SessionData {
  /**
   * <p>The Amazon Resource Name (ARN) of the session.</p>
   * @public
   */
  sessionArn: string | undefined;

  /**
   * <p>The identifier of the session.</p>
   * @public
   */
  sessionId: string | undefined;

  /**
   * <p>The name of the session.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the session.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration information for the session integration.</p>
   * @public
   */
  integrationConfiguration?: SessionIntegrationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSessionResponse {
  /**
   * <p>The session.</p>
   * @public
   */
  session?: SessionData | undefined;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * <p>The session.</p>
   * @public
   */
  session?: SessionData | undefined;
}

/**
 * <p>The configuration information of the Amazon Connect data source.</p>
 * @public
 */
export interface ConnectConfiguration {
  /**
   * <p>The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.</p>
   * @public
   */
  instanceId?: string | undefined;
}

/**
 * <p>The configuration information of the external data source.</p>
 * @public
 */
export type Configuration = Configuration.ConnectConfigurationMember | Configuration.$UnknownMember;

/**
 * @public
 */
export namespace Configuration {
  /**
   * <p>The configuration information of the Amazon Connect data source.</p>
   * @public
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    connectConfiguration: (value: ConnectConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateContentRequest {
  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the content. Each piece of content in a knowledge base must have a unique
   *       name. You can retrieve a piece of content using only its knowledge base and its name with the
   *         <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SearchContent.html">SearchContent</a> API.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The title of the content. If not set, the title is equal to the name.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The URI you want to use for the article. If the knowledge base has a templateUri, setting
   *       this argument overrides it for this piece of content.</p>
   * @public
   */
  overrideLinkOutUri?: string | undefined;

  /**
   * <p>A key/value map to store attributes without affecting tagging or recommendations.
   * For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
 * <p>Information about the content.</p>
 * @public
 */
export interface ContentData {
  /**
   * <p>The Amazon Resource Name (ARN) of the content.</p>
   * @public
   */
  contentArn: string | undefined;

  /**
   * <p>The identifier of the content.</p>
   * @public
   */
  contentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the content.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the content revision.</p>
   * @public
   */
  revisionId: string | undefined;

  /**
   * <p>The title of the content.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The media type of the content.</p>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The status of the content.</p>
   * @public
   */
  status: ContentStatus | undefined;

  /**
   * <p>A key/value map to store attributes without affecting tagging or recommendations.
   * For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift.</p>
   * @public
   */
  metadata: Record<string, string> | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The URI of the content.</p>
   * @public
   */
  linkOutUri?: string | undefined;

  /**
   * <p>The URL of the content.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>The expiration time of the URL as an epoch timestamp.</p>
   * @public
   */
  urlExpiry: Date | undefined;
}

/**
 * @public
 */
export interface CreateContentResponse {
  /**
   * <p>The content.</p>
   * @public
   */
  content?: ContentData | undefined;
}

/**
 * @public
 */
export interface DeleteContentRequest {
  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
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
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  contentId: string | undefined;

  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetContentResponse {
  /**
   * <p>The content.</p>
   * @public
   */
  content?: ContentData | undefined;
}

/**
 * @public
 */
export interface GetContentSummaryRequest {
  /**
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  contentId: string | undefined;

  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * <p>Summary information about the content.</p>
 * @public
 */
export interface ContentSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the content.</p>
   * @public
   */
  contentArn: string | undefined;

  /**
   * <p>The identifier of the content.</p>
   * @public
   */
  contentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the content.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The identifier of the revision of the content.</p>
   * @public
   */
  revisionId: string | undefined;

  /**
   * <p>The title of the content.</p>
   * @public
   */
  title: string | undefined;

  /**
   * <p>The media type of the content.</p>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The status of the content.</p>
   * @public
   */
  status: ContentStatus | undefined;

  /**
   * <p>A key/value map to store attributes without affecting tagging or recommendations.
   * For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift.</p>
   * @public
   */
  metadata: Record<string, string> | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetContentSummaryResponse {
  /**
   * <p>The content summary.</p>
   * @public
   */
  contentSummary?: ContentSummary | undefined;
}

/**
 * @public
 */
export interface ListContentsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface ListContentsResponse {
  /**
   * <p>Information about the content.</p>
   * @public
   */
  contentSummaries: ContentSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContentRequest {
  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  contentId: string | undefined;

  /**
   * <p>The <code>revisionId</code> of the content resource to update, taken from an earlier call
   *       to <code>GetContent</code>, <code>GetContentSummary</code>, <code>SearchContent</code>, or
   *         <code>ListContents</code>. If included, this argument acts as an optimistic lock to ensure
   *       content was not modified since it was last read. If it has been modified, this API throws a
   *         <code>PreconditionFailedException</code>.</p>
   * @public
   */
  revisionId?: string | undefined;

  /**
   * <p>The title of the content.</p>
   * @public
   */
  title?: string | undefined;

  /**
   * <p>The URI for the article. If the knowledge base has a templateUri, setting this argument
   *       overrides it for this piece of content. To remove an existing <code>overrideLinkOurUri</code>,
   *       exclude this argument and set <code>removeOverrideLinkOutUri</code> to true.</p>
   * @public
   */
  overrideLinkOutUri?: string | undefined;

  /**
   * <p>Unset the existing <code>overrideLinkOutUri</code> if it exists.</p>
   * @public
   */
  removeOverrideLinkOutUri?: boolean | undefined;

  /**
   * <p>A key/value map to store attributes without affecting tagging or recommendations. For
   *       example, when synchronizing data between an external system and Wisdom, you can store an
   *       external version identifier as metadata to utilize for determining drift.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.
   *     </p>
   * @public
   */
  uploadId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContentResponse {
  /**
   * <p>The content.</p>
   * @public
   */
  content?: ContentData | undefined;
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
 * <p>Information about how to render the content.</p>
 * @public
 */
export interface RenderingConfiguration {
  /**
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
   * @public
   */
  templateUri?: string | undefined;
}

/**
 * <p>Configuration information about the external data source.</p>
 * @public
 */
export type SourceConfiguration = SourceConfiguration.AppIntegrationsMember | SourceConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace SourceConfiguration {
  /**
   * <p>Configuration information for Amazon AppIntegrations to automatically ingest content.</p>
   * @public
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    appIntegrations: (value: AppIntegrationsConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateKnowledgeBaseRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the knowledge base.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of knowledge base. Only CUSTOM knowledge bases allow you to upload your own content.
   *       EXTERNAL knowledge bases support integrations with third-party systems whose content is
   *       synchronized automatically. </p>
   * @public
   */
  knowledgeBaseType: KnowledgeBaseType | undefined;

  /**
   * <p>The source of the knowledge base content. Only set this argument for EXTERNAL knowledge
   *       bases.</p>
   * @public
   */
  sourceConfiguration?: SourceConfiguration | undefined;

  /**
   * <p>Information about how to render the content.</p>
   * @public
   */
  renderingConfiguration?: RenderingConfiguration | undefined;

  /**
   * <p>The configuration information for the customer managed key used for encryption. </p>
   *          <p>This KMS key must have a policy that allows <code>kms:CreateGrant</code>,
   *       <code>kms:DescribeKey</code>, and <code>kms:Decrypt/kms:GenerateDataKey</code> permissions to the IAM identity using the key
   *       to invoke Wisdom.</p>
   *          <p>For more information about setting up a customer managed key for Wisdom, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html">Enable Amazon Connect Wisdom
   *         for your instance</a>.</p>
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
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
 * <p>Information about the knowledge base.</p>
 * @public
 */
export interface KnowledgeBaseData {
  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The name of the knowledge base.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of knowledge base.</p>
   * @public
   */
  knowledgeBaseType: KnowledgeBaseType | undefined;

  /**
   * <p>The status of the knowledge base.</p>
   * @public
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * <p>An epoch timestamp indicating the most recent content modification inside the knowledge
   *       base. If no content exists in a knowledge base, this value is unset.</p>
   * @public
   */
  lastContentModificationTime?: Date | undefined;

  /**
   * <p>Source configuration information about the knowledge base.</p>
   * @public
   */
  sourceConfiguration?: SourceConfiguration | undefined;

  /**
   * <p>Information about how to render the content.</p>
   * @public
   */
  renderingConfiguration?: RenderingConfiguration | undefined;

  /**
   * <p>The configuration information for the customer managed key used for encryption. </p>
   *          <p>This KMS key must have a policy that allows <code>kms:CreateGrant</code>,
   *       <code>kms:DescribeKey</code>, and <code>kms:Decrypt/kms:GenerateDataKey</code> permissions to the IAM identity using the key
   *       to invoke Wisdom. </p>
   *          <p>For more information about setting up a customer managed key for Wisdom, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html">Enable Amazon Connect Wisdom
   *         for your instance</a>.</p>
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>The description.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateKnowledgeBaseResponse {
  /**
   * <p>The knowledge base.</p>
   * @public
   */
  knowledgeBase?: KnowledgeBaseData | undefined;
}

/**
 * <p>The container of quick response data.</p>
 * @public
 */
export type QuickResponseDataProvider =
  | QuickResponseDataProvider.ContentMember
  | QuickResponseDataProvider.$UnknownMember;

/**
 * @public
 */
export namespace QuickResponseDataProvider {
  /**
   * <p>The content of the quick response.</p>
   * @public
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    content: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The configuration information of the grouping of Wisdom users.</p>
 * @public
 */
export interface GroupingConfiguration {
  /**
   * <p>The criteria used for grouping Wisdom users.</p>
   *          <p>The following is the list of supported criteria values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RoutingProfileArn</code>: Grouping the users by their <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_RoutingProfile.html">Amazon Connect routing profile ARN</a>. User should have <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchRoutingProfiles.html">SearchRoutingProfile</a> and
   *             <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeRoutingProfile.html">DescribeRoutingProfile</a> permissions when setting criteria to this value.</p>
   *             </li>
   *          </ul>
   * @public
   */
  criteria?: string | undefined;

  /**
   * <p>The list of values that define different groups of Wisdom users.</p>
   *          <ul>
   *             <li>
   *                <p>When setting <code>criteria</code> to <code>RoutingProfileArn</code>, you need to provide a list of
   *             ARNs of <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_RoutingProfile.html">Amazon Connect routing profiles</a> as values of this parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateQuickResponseRequest {
  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the quick response.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The content of the quick response.</p>
   * @public
   */
  content: QuickResponseDataProvider | undefined;

  /**
   * <p>The media type of the quick response content.</p>
   *          <ul>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=plain</code> for a quick response written in plain text.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=markdown</code> for a quick response written in richtext.</p>
   *             </li>
   *          </ul>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The configuration information of the user groups that the quick response is accessible to.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * <p>The description of the quick response.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The shortcut key of the quick response. The value should be unique across the
   *   knowledge base.
   *     </p>
   * @public
   */
  shortcutKey?: string | undefined;

  /**
   * <p>Whether the quick response is active.</p>
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * <p>The Amazon Connect channels this quick response applies to.</p>
   * @public
   */
  channels?: string[] | undefined;

  /**
   * <p>The language code value for the language in which the quick response is written.  The supported language codes include <code>de_DE</code>, <code>en_US</code>, <code>es_ES</code>,
   *   <code>fr_FR</code>, <code>id_ID</code>, <code>it_IT</code>, <code>ja_JP</code>, <code>ko_KR</code>, <code>pt_BR</code>,
   *   <code>zh_CN</code>, <code>zh_TW</code>
   *          </p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *             request. If not provided, the Amazon Web Services
   *             SDK populates this field. For more information about idempotency, see
   *             <a href="https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/">Making retries safe with idempotent APIs</a>.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The container quick response content.</p>
 * @public
 */
export type QuickResponseContentProvider =
  | QuickResponseContentProvider.ContentMember
  | QuickResponseContentProvider.$UnknownMember;

/**
 * @public
 */
export namespace QuickResponseContentProvider {
  /**
   * <p>The content of the quick response.</p>
   * @public
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    content: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>The content of the quick response stored in different media types.</p>
 * @public
 */
export interface QuickResponseContents {
  /**
   * <p>The container quick response content.</p>
   * @public
   */
  plainText?: QuickResponseContentProvider | undefined;

  /**
   * <p>The container quick response content.</p>
   * @public
   */
  markdown?: QuickResponseContentProvider | undefined;
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
 * <p>Information about the quick response.</p>
 * @public
 */
export interface QuickResponseData {
  /**
   * <p>The Amazon Resource Name (ARN) of the quick response.</p>
   * @public
   */
  quickResponseArn: string | undefined;

  /**
   * <p>The identifier of the quick response.</p>
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the quick response.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The media type of the quick response content.</p>
   *          <ul>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=plain</code> for quick response written in plain text.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=markdown</code> for quick response written in richtext.</p>
   *             </li>
   *          </ul>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The status of the quick response data.</p>
   * @public
   */
  status: QuickResponseStatus | undefined;

  /**
   * <p>The timestamp when the quick response was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the quick response data was last modified.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>The contents of the quick response.</p>
   * @public
   */
  contents?: QuickResponseContents | undefined;

  /**
   * <p>The description of the quick response.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration information of the user groups that the quick response is accessible to.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * <p>The shortcut key of the quick response. The value should be unique across the
   *   knowledge base.</p>
   * @public
   */
  shortcutKey?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the quick response data.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>Whether the quick response is active.</p>
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * <p>The Amazon Connect contact channels this quick response applies to. The supported contact channel types include <code>Chat</code>.</p>
   * @public
   */
  channels?: string[] | undefined;

  /**
   * <p>The language code value for the language in which the quick response is written.</p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateQuickResponseResponse {
  /**
   * <p>The quick response.</p>
   * @public
   */
  quickResponse?: QuickResponseData | undefined;
}

/**
 * @public
 */
export interface DeleteImportJobRequest {
  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the import job to be deleted.</p>
   * @public
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
   * <p>The knowledge base to delete content from. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
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
   * <p>The knowledge base from which the quick response is deleted. The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the quick response to delete.</p>
   * @public
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
 * <p>The configuration information of the external data source.</p>
 * @public
 */
export interface ExternalSourceConfiguration {
  /**
   * <p>The type of the external data source.</p>
   * @public
   */
  source: ExternalSource | undefined;

  /**
   * <p>The configuration information of the external data source.</p>
   * @public
   */
  configuration: Configuration | undefined;
}

/**
 * @public
 */
export interface GetImportJobRequest {
  /**
   * <p>The identifier of the import job to retrieve.</p>
   * @public
   */
  importJobId: string | undefined;

  /**
   * <p>The identifier of the knowledge base that the import job belongs to.</p>
   * @public
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
 * <p>Summary information about the import job.</p>
 * @public
 */
export interface ImportJobData {
  /**
   * <p>The identifier of the import job.</p>
   * @public
   */
  importJobId: string | undefined;

  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The type of the import job.</p>
   * @public
   */
  importJobType: ImportJobType | undefined;

  /**
   * <p>The status of the import job.</p>
   * @public
   */
  status: ImportJobStatus | undefined;

  /**
   * <p>The download link to the resource file that is uploaded to the import job.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>The link to donwload the information of resource data that failed to be imported.</p>
   * @public
   */
  failedRecordReport?: string | undefined;

  /**
   * <p>The expiration time of the URL as an epoch timestamp.</p>
   * @public
   */
  urlExpiry: Date | undefined;

  /**
   * <p>The timestamp when the import job was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the import job data was last modified.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>The metadata fields of the imported Wisdom resources.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>The configuration information of the external data source.</p>
   * @public
   */
  externalSourceConfiguration?: ExternalSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface GetImportJobResponse {
  /**
   * <p>The import job.</p>
   * @public
   */
  importJob?: ImportJobData | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseRequest {
  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseResponse {
  /**
   * <p>The knowledge base.</p>
   * @public
   */
  knowledgeBase?: KnowledgeBaseData | undefined;
}

/**
 * @public
 */
export interface GetQuickResponseRequest {
  /**
   * <p>The identifier of the quick response.</p>
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * <p>The identifier of the knowledge base. This should be a QUICK_RESPONSES type knowledge base.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetQuickResponseResponse {
  /**
   * <p>The quick response.</p>
   * @public
   */
  quickResponse?: QuickResponseData | undefined;
}

/**
 * <p>Summary information about the import job.</p>
 * @public
 */
export interface ImportJobSummary {
  /**
   * <p>The identifier of the import job.</p>
   * @public
   */
  importJobId: string | undefined;

  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The type of import job.</p>
   * @public
   */
  importJobType: ImportJobType | undefined;

  /**
   * <p>The status of the import job.</p>
   * @public
   */
  status: ImportJobStatus | undefined;

  /**
   * <p>The timestamp when the import job was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the import job was last modified.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>The metadata fields of the imported Wisdom resources.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>The configuration information of the external source that the resource data are imported from.</p>
   * @public
   */
  externalSourceConfiguration?: ExternalSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface ListImportJobsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface ListImportJobsResponse {
  /**
   * <p>Summary information about the import jobs.</p>
   * @public
   */
  importJobSummaries: ImportJobSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary information about the knowledge base.</p>
 * @public
 */
export interface KnowledgeBaseSummary {
  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The name of the knowledge base.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of knowledge base.</p>
   * @public
   */
  knowledgeBaseType: KnowledgeBaseType | undefined;

  /**
   * <p>The status of the knowledge base summary.</p>
   * @public
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * <p>Configuration information about the external data source.</p>
   * @public
   */
  sourceConfiguration?: SourceConfiguration | undefined;

  /**
   * <p>Information about how to render the content.</p>
   * @public
   */
  renderingConfiguration?: RenderingConfiguration | undefined;

  /**
   * <p>The configuration information for the customer managed key used for encryption. </p>
   *          <p>This KMS key must have a policy that allows <code>kms:CreateGrant</code>,
   *       <code>kms:DescribeKey</code>, <code>kms:Decrypt/kms:GenerateDataKey</code> permissions to the IAM identity using the key
   *       to invoke Wisdom. </p>
   *          <p>For more information about setting up a customer managed key for Wisdom, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html">Enable Amazon Connect Wisdom
   *         for your instance</a>.</p>
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * <p>The description of the knowledge base.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesResponse {
  /**
   * <p>Information about the knowledge bases.</p>
   * @public
   */
  knowledgeBaseSummaries: KnowledgeBaseSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQuickResponsesRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * <p>The summary information about the quick response.</p>
 * @public
 */
export interface QuickResponseSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the quick response.</p>
   * @public
   */
  quickResponseArn: string | undefined;

  /**
   * <p>The identifier of the quick response.</p>
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the quick response.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The media type of the quick response content.</p>
   *          <ul>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=plain</code> for quick response written in plain text.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=markdown</code> for quick response written in richtext.</p>
   *             </li>
   *          </ul>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The resource status of the quick response.</p>
   * @public
   */
  status: QuickResponseStatus | undefined;

  /**
   * <p>The timestamp when the quick response was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the quick response summary was last modified.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>The description of the quick response.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the quick response data.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>Whether the quick response is active.</p>
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * <p>The Amazon Connect contact channels this quick response applies to. The supported contact channel types include <code>Chat</code>.</p>
   * @public
   */
  channels?: string[] | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListQuickResponsesResponse {
  /**
   * <p>Summary information about the quick responses.</p>
   * @public
   */
  quickResponseSummaries: QuickResponseSummary[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQuickResponseRequest {
  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the quick response.</p>
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * <p>The name of the quick response.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The updated content of the quick response.</p>
   * @public
   */
  content?: QuickResponseDataProvider | undefined;

  /**
   * <p>The media type of the quick response content.</p>
   *          <ul>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=plain</code> for quick response written in plain text.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=markdown</code> for quick response written in richtext.</p>
   *             </li>
   *          </ul>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The updated grouping configuration of the quick response.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * <p>Whether to remove the grouping configuration of the quick response.</p>
   * @public
   */
  removeGroupingConfiguration?: boolean | undefined;

  /**
   * <p>The updated description of the quick response.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Whether to remove the description from the quick response.</p>
   * @public
   */
  removeDescription?: boolean | undefined;

  /**
   * <p>The shortcut key of the quick response. The value should be unique across the
   *   knowledge base.</p>
   * @public
   */
  shortcutKey?: string | undefined;

  /**
   * <p>Whether to remove the shortcut key of the quick response.</p>
   * @public
   */
  removeShortcutKey?: boolean | undefined;

  /**
   * <p>Whether the quick response is active. </p>
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * <p>The Amazon Connect contact channels this quick response applies to. The supported contact channel types include <code>Chat</code>.</p>
   * @public
   */
  channels?: string[] | undefined;

  /**
   * <p>The language code value for the language in which the quick response is written. The supported language codes include <code>de_DE</code>, <code>en_US</code>, <code>es_ES</code>,
   *   <code>fr_FR</code>, <code>id_ID</code>, <code>it_IT</code>, <code>ja_JP</code>, <code>ko_KR</code>, <code>pt_BR</code>,
   *   <code>zh_CN</code>, <code>zh_TW</code>
   *          </p>
   * @public
   */
  language?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQuickResponseResponse {
  /**
   * <p>The quick response.</p>
   * @public
   */
  quickResponse?: QuickResponseData | undefined;
}

/**
 * @public
 */
export interface RemoveKnowledgeBaseTemplateUriRequest {
  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
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
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The search expression to filter results.</p>
   * @public
   */
  searchExpression: SearchExpression | undefined;
}

/**
 * @public
 */
export interface SearchContentResponse {
  /**
   * <p>Summary information about the content.</p>
   * @public
   */
  contentSummaries: ContentSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
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
 * @public
 */
export interface QuickResponseFilterField {
  /**
   * <p>The name of the attribute field to filter the quick responses by.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The values of attribute field to filter the quick response by.</p>
   * @public
   */
  values?: string[] | undefined;

  /**
   * <p>The operator to use for filtering.</p>
   * @public
   */
  operator: QuickResponseFilterOperator | undefined;

  /**
   * <p>Whether to treat null value as a match for the attribute field.</p>
   * @public
   */
  includeNoExistence?: boolean | undefined;
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
 * @public
 */
export interface QuickResponseOrderField {
  /**
   * <p>The name of the attribute to order the quick response query results by.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The order at which the quick responses are sorted by.</p>
   * @public
   */
  order?: Order | undefined;
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
 * @public
 */
export interface QuickResponseQueryField {
  /**
   * <p>The name of the attribute to query the quick responses by.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The values of the attribute to query the quick responses by.</p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>The operator to use for matching attribute field values in the query.</p>
   * @public
   */
  operator: QuickResponseQueryOperator | undefined;

  /**
   * <p>Whether the query expects only exact matches on the attribute field values. The results of the query will only include exact matches if this parameter is set to false.</p>
   * @public
   */
  allowFuzziness?: boolean | undefined;

  /**
   * <p>The importance of the attribute field when calculating query result relevancy scores.
   *       The value set for this parameter affects the ordering of search results.</p>
   * @public
   */
  priority?: Priority | undefined;
}

/**
 * <p>Information about the import job.</p>
 * @public
 */
export interface QuickResponseSearchExpression {
  /**
   * <p>The quick response query expressions.</p>
   * @public
   */
  queries?: QuickResponseQueryField[] | undefined;

  /**
   * <p>The configuration of filtering rules applied to quick response query results.</p>
   * @public
   */
  filters?: QuickResponseFilterField[] | undefined;

  /**
   * <p>The quick response attribute fields on which the query results are ordered.</p>
   * @public
   */
  orderOnField?: QuickResponseOrderField | undefined;
}

/**
 * @public
 */
export interface SearchQuickResponsesRequest {
  /**
   * <p>The identifier of the knowledge base. This should be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The search expression for querying the quick response.</p>
   * @public
   */
  searchExpression: QuickResponseSearchExpression | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/connect/latest/adminguide/connect-attrib-list.html#user-defined-attributes">user-defined Amazon Connect contact attributes</a> to be resolved when search results are returned.</p>
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * <p>The result of quick response search.</p>
 * @public
 */
export interface QuickResponseSearchResultData {
  /**
   * <p>The Amazon Resource Name (ARN) of the quick response.</p>
   * @public
   */
  quickResponseArn: string | undefined;

  /**
   * <p>The identifier of the quick response.</p>
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the quick response.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The media type of the quick response content.</p>
   *          <ul>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=plain</code> for quick response written in plain text.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>application/x.quickresponse;format=markdown</code> for quick response written in richtext.</p>
   *             </li>
   *          </ul>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The resource status of the quick response.</p>
   * @public
   */
  status: QuickResponseStatus | undefined;

  /**
   * <p>The contents of the quick response.</p>
   * @public
   */
  contents: QuickResponseContents | undefined;

  /**
   * <p>The timestamp when the quick response was created.</p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The timestamp when the quick response search result data was last modified.</p>
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * <p>Whether the quick response is active.</p>
   * @public
   */
  isActive: boolean | undefined;

  /**
   * <p>The description of the quick response.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The configuration information of the user groups that the quick response is accessible to.</p>
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * <p>The shortcut key of the quick response. The value should be unique across the
   *   knowledge base.</p>
   * @public
   */
  shortcutKey?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last updated the quick response search result data.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The Amazon Connect contact channels this quick response applies to. The supported contact channel types include <code>Chat</code>.</p>
   * @public
   */
  channels?: string[] | undefined;

  /**
   * <p>The language code value for the language in which the quick response is written.</p>
   * @public
   */
  language?: string | undefined;

  /**
   * <p>The user defined contact attributes that are not resolved when the search result is returned.</p>
   * @public
   */
  attributesNotInterpolated?: string[] | undefined;

  /**
   * <p>The user defined contact attributes that are resolved when the search result is returned.</p>
   * @public
   */
  attributesInterpolated?: string[] | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchQuickResponsesResponse {
  /**
   * <p>The results of the quick response search.</p>
   * @public
   */
  results: QuickResponseSearchResultData[] | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartContentUploadRequest {
  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The type of content to upload.</p>
   * @public
   */
  contentType: string | undefined;

  /**
   * <p>The expected expiration time of the generated presigned URL, specified in minutes.</p>
   * @public
   */
  presignedUrlTimeToLive?: number | undefined;
}

/**
 * @public
 */
export interface StartContentUploadResponse {
  /**
   * <p>The identifier of the upload.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>The URL of the upload.</p>
   * @public
   */
  url: string | undefined;

  /**
   * <p>The expiration time of the URL as an epoch timestamp.</p>
   * @public
   */
  urlExpiry: Date | undefined;

  /**
   * <p>The headers to include in the upload.</p>
   * @public
   */
  headersToInclude: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartImportJobRequest {
  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   *          <ul>
   *             <li>
   *                <p>For importing Wisdom quick responses, this should be a <code>QUICK_RESPONSES</code> type knowledge base.</p>
   *             </li>
   *          </ul>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The type of the import job.</p>
   *          <ul>
   *             <li>
   *                <p>For importing quick response resource, set the value to <code>QUICK_RESPONSES</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  importJobType: ImportJobType | undefined;

  /**
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.</p>
   * @public
   */
  uploadId: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The metadata fields of the imported Wisdom resources.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>The configuration information of the external source that the resource data are imported from.</p>
   * @public
   */
  externalSourceConfiguration?: ExternalSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface StartImportJobResponse {
  /**
   * <p>The import job.</p>
   * @public
   */
  importJob?: ImportJobData | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseTemplateUriRequest {
  /**
   * <p>The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge
   * base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The template URI to update.</p>
   * @public
   */
  templateUri: string | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseTemplateUriResponse {
  /**
   * <p>The knowledge base to update.</p>
   * @public
   */
  knowledgeBase?: KnowledgeBaseData | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
