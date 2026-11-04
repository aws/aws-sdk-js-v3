// smithy-typescript generated code
import type {
  AssistantStatus,
  AssistantType,
  AssociationType,
  ContentStatus,
  ExternalSource,
  FilterField,
  FilterOperator,
  ImportJobStatus,
  ImportJobType,
  KnowledgeBaseStatus,
  KnowledgeBaseType,
  Order,
  Priority,
  QuickResponseFilterOperator,
  QuickResponseQueryOperator,
  QuickResponseStatus,
  RecommendationSourceType,
  RecommendationTriggerType,
  RecommendationType,
  RelevanceLevel,
} from "./enums";

/**
 * Configuration information for Amazon AppIntegrations to automatically ingest content.
 *
 * @public
 */
export interface AppIntegrationsConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the AppIntegrations DataIntegration to use for ingesting content.
   *
   * - For [Salesforce](https://developer.salesforce.com/docs/atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__kav.htm), your AppIntegrations DataIntegration must have an ObjectConfiguration if objectFields is not provided, including at least `Id`, `ArticleNumber`, `VersionNumber`, `Title`, `PublishStatus`, and `IsDeleted` as source fields.
   * - For [ServiceNow](https://developer.servicenow.com/dev.do#!/reference/api/rome/rest/knowledge-management-api), your AppIntegrations DataIntegration must have an ObjectConfiguration if objectFields is not provided, including at least `number`, `short_description`, `sys_mod_count`, `workflow_state`, and `active` as source fields.
   * - For [Zendesk](https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/), your AppIntegrations DataIntegration must have an ObjectConfiguration if `objectFields` is not provided, including at least `id`, `title`, `updated_at`, and `draft` as source fields.
   * - For [SharePoint](https://learn.microsoft.com/en-us/sharepoint/dev/sp-add-ins/sharepoint-net-server-csom-jsom-and-rest-api-index), your AppIntegrations DataIntegration must have a FileConfiguration, including only file extensions that are among `docx`, `pdf`, `html`, `htm`, and `txt`.
   * - For [Amazon S3](https://aws.amazon.com/s3/), the ObjectConfiguration and FileConfiguration of your AppIntegrations DataIntegration must be null. The `SourceURI` of your DataIntegration must use the following format: `s3://your_s3_bucket_name`.
   *
   *   > **Important:** The bucket policy of the corresponding S3 bucket must allow the Amazon Web Services principal `app-integrations.amazonaws.com` to perform `s3:ListBucket`, `s3:GetObject`, and `s3:GetBucketLocation` against the bucket.
   *
   * @public
   */
  appIntegrationArn: string | undefined;

  /**
   * The fields from the source that are made available to your agents in Wisdom. Optional if ObjectConfiguration is included in the provided DataIntegration.
   *
   * - For [Salesforce](https://developer.salesforce.com/docs/atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__kav.htm), you must include at least `Id`, `ArticleNumber`, `VersionNumber`, `Title`, `PublishStatus`, and `IsDeleted`.
   * - For [ServiceNow](https://developer.servicenow.com/dev.do#!/reference/api/rome/rest/knowledge-management-api), you must include at least `number`, `short_description`, `sys_mod_count`, `workflow_state`, and `active`.
   * - For [Zendesk](https://developer.zendesk.com/api-reference/help_center/help-center-api/articles/), you must include at least `id`, `title`, `updated_at`, and `draft`.
   *
   * Make sure to include additional fields. These fields are indexed and used to source recommendations.
   *
   * @public
   */
  objectFields?: string[] | undefined;
}

/**
 * The data that is input into Wisdom as a result of the assistant association.
 *
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
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it.
   *
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
 */
export interface CreateAssistantAssociationRequest {
  /**
   * The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The type of association.
   *
   * @public
   */
  associationType: AssociationType | undefined;

  /**
   * The identifier of the associated resource.
   *
   * @public
   */
  association: AssistantAssociationInputData | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Association information about the knowledge base.
 *
 * @public
 */
export interface KnowledgeBaseAssociationData {
  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it.
   *
   * @public
   */
  knowledgeBaseId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn?: string | undefined;
}

/**
 * The data that is output as a result of the assistant association.
 *
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
   * The knowledge base where output data is sent.
   *
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
 * Information about the assistant association.
 *
 * @public
 */
export interface AssistantAssociationData {
  /**
   * The identifier of the assistant association.
   *
   * @public
   */
  assistantAssociationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the assistant association.
   *
   * @public
   */
  assistantAssociationArn: string | undefined;

  /**
   * The identifier of the Wisdom assistant.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Wisdom assistant.
   *
   * @public
   */
  assistantArn: string | undefined;

  /**
   * The type of association.
   *
   * @public
   */
  associationType: AssociationType | undefined;

  /**
   * A union type that currently has a single argument, the knowledge base ID.
   *
   * @public
   */
  associationData: AssistantAssociationOutputData | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAssistantAssociationResponse {
  /**
   * The assistant association.
   *
   * @public
   */
  assistantAssociation?: AssistantAssociationData | undefined;
}

/**
 * @public
 */
export interface DeleteAssistantAssociationRequest {
  /**
   * The identifier of the assistant association. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantAssociationId: string | undefined;

  /**
   * The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
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
   * The identifier of the assistant association. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantAssociationId: string | undefined;

  /**
   * The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;
}

/**
 * @public
 */
export interface GetAssistantAssociationResponse {
  /**
   * The assistant association.
   *
   * @public
   */
  assistantAssociation?: AssistantAssociationData | undefined;
}

/**
 * @public
 */
export interface ListAssistantAssociationsRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;
}

/**
 * Summary information about the assistant association.
 *
 * @public
 */
export interface AssistantAssociationSummary {
  /**
   * The identifier of the assistant association.
   *
   * @public
   */
  assistantAssociationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the assistant association.
   *
   * @public
   */
  assistantAssociationArn: string | undefined;

  /**
   * The identifier of the Wisdom assistant.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Wisdom assistant.
   *
   * @public
   */
  assistantArn: string | undefined;

  /**
   * The type of association.
   *
   * @public
   */
  associationType: AssociationType | undefined;

  /**
   * The association data.
   *
   * @public
   */
  associationData: AssistantAssociationOutputData | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListAssistantAssociationsResponse {
  /**
   * Summary information about assistant associations.
   *
   * @public
   */
  assistantAssociationSummaries: AssistantAssociationSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The configuration information for the customer managed key used for encryption.
 *
 * @public
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * The customer managed key used for encryption. For more information about setting up a customer managed key for Wisdom, see [Enable Amazon Connect Wisdom for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html). For information about valid ID values, see [Key identifiers (KeyId)](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id).
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssistantRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the assistant.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of assistant.
   *
   * @public
   */
  type: AssistantType | undefined;

  /**
   * The description of the assistant.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The configuration information for the customer managed key used for encryption.
   *
   * The customer managed key must have a policy that allows `kms:CreateGrant`, `kms:DescribeKey`, and `kms:Decrypt/kms:GenerateDataKey` permissions to the IAM identity using the key to invoke Wisdom. To use Wisdom with chat, the key policy must also allow `kms:Decrypt`, `kms:GenerateDataKey*`, and `kms:DescribeKey` permissions to the `connect.amazonaws.com` service principal.
   *
   * For more information about setting up a customer managed key for Wisdom, see [Enable Amazon Connect Wisdom for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html).
   *
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;
}

/**
 * The configuration information for the Wisdom assistant integration.
 *
 * @public
 */
export interface AssistantIntegrationConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the integrated Amazon SNS topic used for streaming chat messages.
   *
   * @public
   */
  topicIntegrationArn?: string | undefined;
}

/**
 * The assistant data.
 *
 * @public
 */
export interface AssistantData {
  /**
   * The identifier of the Wisdom assistant.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Wisdom assistant.
   *
   * @public
   */
  assistantArn: string | undefined;

  /**
   * The name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of assistant.
   *
   * @public
   */
  type: AssistantType | undefined;

  /**
   * The status of the assistant.
   *
   * @public
   */
  status: AssistantStatus | undefined;

  /**
   * The description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The configuration information for the customer managed key used for encryption.
   *
   * This KMS key must have a policy that allows `kms:CreateGrant`, `kms:DescribeKey`, and `kms:Decrypt/kms:GenerateDataKey` permissions to the IAM identity using the key to invoke Wisdom. To use Wisdom with chat, the key policy must also allow `kms:Decrypt`, `kms:GenerateDataKey*`, and `kms:DescribeKey` permissions to the `connect.amazonaws.com` service principal.
   *
   * For more information about setting up a customer managed key for Wisdom, see [Enable Amazon Connect Wisdom for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html).
   *
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * The configuration information for the Wisdom assistant integration.
   *
   * @public
   */
  integrationConfiguration?: AssistantIntegrationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateAssistantResponse {
  /**
   * Information about the assistant.
   *
   * @public
   */
  assistant?: AssistantData | undefined;
}

/**
 * @public
 */
export interface DeleteAssistantRequest {
  /**
   * The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
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
   * The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;
}

/**
 * @public
 */
export interface GetAssistantResponse {
  /**
   * Information about the assistant.
   *
   * @public
   */
  assistant?: AssistantData | undefined;
}

/**
 * @public
 */
export interface GetRecommendationsRequest {
  /**
   * The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The duration (in seconds) for which the call waits for a recommendation to be made available before returning. If a recommendation is available, the call returns sooner than `WaitTimeSeconds`. If no messages are available and the wait time expires, the call returns successfully with an empty list.
   *
   * @public
   */
  waitTimeSeconds?: number | undefined;
}

/**
 * Reference information about the content.
 *
 * @public
 */
export interface ContentReference {
  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn?: string | undefined;

  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it.
   *
   * @public
   */
  knowledgeBaseId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the content.
   *
   * @public
   */
  contentArn?: string | undefined;

  /**
   * The identifier of the content.
   *
   * @public
   */
  contentId?: string | undefined;
}

/**
 * Offset specification to describe highlighting of document excerpts for rendering search results and recommendations.
 *
 * @public
 */
export interface Highlight {
  /**
   * The offset for the start of the highlight.
   *
   * @public
   */
  beginOffsetInclusive?: number | undefined;

  /**
   * The offset for the end of the highlight.
   *
   * @public
   */
  endOffsetExclusive?: number | undefined;
}

/**
 * The text of the document.
 *
 * @public
 */
export interface DocumentText {
  /**
   * Text in the document.
   *
   * @public
   */
  text?: string | undefined;

  /**
   * Highlights in the document text.
   *
   * @public
   */
  highlights?: Highlight[] | undefined;
}

/**
 * The document.
 *
 * @public
 */
export interface Document {
  /**
   * A reference to the content resource.
   *
   * @public
   */
  contentReference: ContentReference | undefined;

  /**
   * The title of the document.
   *
   * @public
   */
  title?: DocumentText | undefined;

  /**
   * The excerpt from the document.
   *
   * @public
   */
  excerpt?: DocumentText | undefined;
}

/**
 * Information about the recommendation.
 *
 * @public
 */
export interface RecommendationData {
  /**
   * The identifier of the recommendation.
   *
   * @public
   */
  recommendationId: string | undefined;

  /**
   * The recommended document.
   *
   * @public
   */
  document: Document | undefined;

  /**
   * The relevance score of the recommendation.
   *
   * @public
   */
  relevanceScore?: number | undefined;

  /**
   * The relevance level of the recommendation.
   *
   * @public
   */
  relevanceLevel?: RelevanceLevel | undefined;

  /**
   * The type of recommendation.
   *
   * @public
   */
  type?: RecommendationType | undefined;
}

/**
 * Data associated with the QUERY RecommendationTriggerType.
 *
 * @public
 */
export interface QueryRecommendationTriggerData {
  /**
   * The text associated with the recommendation trigger.
   *
   * @public
   */
  text?: string | undefined;
}

/**
 * A union type containing information related to the trigger.
 *
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
   * Data associated with the QUERY RecommendationTriggerType.
   *
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
 * A recommendation trigger provides context on the event that produced the referenced recommendations. Recommendations are only referenced in `recommendationIds` by a single RecommendationTrigger.
 *
 * @public
 */
export interface RecommendationTrigger {
  /**
   * The identifier of the recommendation trigger.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The type of recommendation trigger.
   *
   * @public
   */
  type: RecommendationTriggerType | undefined;

  /**
   * The source of the recommendation trigger.
   *
   * - ISSUE_DETECTION: The corresponding recommendations were triggered by a Contact Lens issue.
   * - RULE_EVALUATION: The corresponding recommendations were triggered by a Contact Lens rule.
   *
   * @public
   */
  source: RecommendationSourceType | undefined;

  /**
   * A union type containing information related to the trigger.
   *
   * @public
   */
  data: RecommendationTriggerData | undefined;

  /**
   * The identifiers of the recommendations.
   *
   * @public
   */
  recommendationIds: string[] | undefined;
}

/**
 * @public
 */
export interface GetRecommendationsResponse {
  /**
   * The recommendations.
   *
   * @public
   */
  recommendations: RecommendationData[] | undefined;

  /**
   * The triggers corresponding to recommendations.
   *
   * @public
   */
  triggers?: RecommendationTrigger[] | undefined;
}

/**
 * @public
 */
export interface ListAssistantsRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about the assistant.
 *
 * @public
 */
export interface AssistantSummary {
  /**
   * The identifier of the Wisdom assistant.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Wisdom assistant.
   *
   * @public
   */
  assistantArn: string | undefined;

  /**
   * The name of the assistant.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the assistant.
   *
   * @public
   */
  type: AssistantType | undefined;

  /**
   * The status of the assistant.
   *
   * @public
   */
  status: AssistantStatus | undefined;

  /**
   * The description of the assistant.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The configuration information for the customer managed key used for encryption.
   *
   * This KMS key must have a policy that allows `kms:CreateGrant`, `kms:DescribeKey`, and `kms:Decrypt/kms:GenerateDataKey` permissions to the IAM identity using the key to invoke Wisdom. To use Wisdom with chat, the key policy must also allow `kms:Decrypt`, `kms:GenerateDataKey*`, and `kms:DescribeKey` permissions to the `connect.amazonaws.com` service principal.
   *
   * For more information about setting up a customer managed key for Wisdom, see [Enable Amazon Connect Wisdom for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html).
   *
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * The configuration information for the Wisdom assistant integration.
   *
   * @public
   */
  integrationConfiguration?: AssistantIntegrationConfiguration | undefined;
}

/**
 * @public
 */
export interface ListAssistantsResponse {
  /**
   * Information about the assistants.
   *
   * @public
   */
  assistantSummaries: AssistantSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface NotifyRecommendationsReceivedRequest {
  /**
   * The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The identifiers of the recommendations.
   *
   * @public
   */
  recommendationIds: string[] | undefined;
}

/**
 * An error occurred when creating a recommendation.
 *
 * @public
 */
export interface NotifyRecommendationsReceivedError {
  /**
   * The identifier of the recommendation that is in error.
   *
   * @public
   */
  recommendationId?: string | undefined;

  /**
   * A recommendation is causing an error.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 */
export interface NotifyRecommendationsReceivedResponse {
  /**
   * The identifiers of the recommendations.
   *
   * @public
   */
  recommendationIds?: string[] | undefined;

  /**
   * The identifiers of recommendations that are causing errors.
   *
   * @public
   */
  errors?: NotifyRecommendationsReceivedError[] | undefined;
}

/**
 * @public
 */
export interface QueryAssistantRequest {
  /**
   * The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The text to search for.
   *
   * @public
   */
  queryText: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about the result.
 *
 * @public
 */
export interface ResultData {
  /**
   * The identifier of the result data.
   *
   * @public
   */
  resultId: string | undefined;

  /**
   * The document.
   *
   * @public
   */
  document: Document | undefined;

  /**
   * The relevance score of the results.
   *
   * @public
   */
  relevanceScore?: number | undefined;
}

/**
 * @public
 */
export interface QueryAssistantResponse {
  /**
   * The results of the query.
   *
   * @public
   */
  results: ResultData[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A search filter.
 *
 * @public
 */
export interface Filter {
  /**
   * The field on which to filter.
   *
   * @public
   */
  field: FilterField | undefined;

  /**
   * The operator to use for comparing the field’s value with the provided value.
   *
   * @public
   */
  operator: FilterOperator | undefined;

  /**
   * The desired field value on which to filter.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * The search expression.
 *
 * @public
 */
export interface SearchExpression {
  /**
   * The search expression filters.
   *
   * @public
   */
  filters: Filter[] | undefined;
}

/**
 * @public
 */
export interface SearchSessionsRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The search expression to filter results.
   *
   * @public
   */
  searchExpression: SearchExpression | undefined;
}

/**
 * Summary information about the session.
 *
 * @public
 */
export interface SessionSummary {
  /**
   * The identifier of the session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the session.
   *
   * @public
   */
  sessionArn: string | undefined;

  /**
   * The identifier of the Wisdom assistant.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Wisdom assistant.
   *
   * @public
   */
  assistantArn: string | undefined;
}

/**
 * @public
 */
export interface SearchSessionsResponse {
  /**
   * Summary information about the sessions.
   *
   * @public
   */
  sessionSummaries: SessionSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSessionRequest {
  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The name of the session.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The configuration information for the session integration.
 *
 * @public
 */
export interface SessionIntegrationConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the integrated Amazon SNS topic used for streaming chat messages.
   *
   * @public
   */
  topicIntegrationArn?: string | undefined;
}

/**
 * Information about the session.
 *
 * @public
 */
export interface SessionData {
  /**
   * The Amazon Resource Name (ARN) of the session.
   *
   * @public
   */
  sessionArn: string | undefined;

  /**
   * The identifier of the session.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The name of the session.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the session.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The configuration information for the session integration.
   *
   * @public
   */
  integrationConfiguration?: SessionIntegrationConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSessionResponse {
  /**
   * The session.
   *
   * @public
   */
  session?: SessionData | undefined;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  assistantId: string | undefined;

  /**
   * The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * The session.
   *
   * @public
   */
  session?: SessionData | undefined;
}

/**
 * The configuration information of the Amazon Connect data source.
 *
 * @public
 */
export interface ConnectConfiguration {
  /**
   * The identifier of the Amazon Connect instance. You can find the instanceId in the ARN of the instance.
   *
   * @public
   */
  instanceId?: string | undefined;
}

/**
 * The configuration information of the external data source.
 *
 * @public
 */
export type Configuration =
  | Configuration.ConnectConfigurationMember
  | Configuration.$UnknownMember;

/**
 * @public
 */
export namespace Configuration {
  /**
   * The configuration information of the Amazon Connect data source.
   *
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
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the content. Each piece of content in a knowledge base must have a unique name. You can retrieve a piece of content using only its knowledge base and its name with the [SearchContent](https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SearchContent.html) API.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The title of the content. If not set, the title is equal to the name.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The URI you want to use for the article. If the knowledge base has a templateUri, setting this argument overrides it for this piece of content.
   *
   * @public
   */
  overrideLinkOutUri?: string | undefined;

  /**
   * A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * A pointer to the uploaded asset. This value is returned by [StartContentUpload](https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html).
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Information about the content.
 *
 * @public
 */
export interface ContentData {
  /**
   * The Amazon Resource Name (ARN) of the content.
   *
   * @public
   */
  contentArn: string | undefined;

  /**
   * The identifier of the content.
   *
   * @public
   */
  contentId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the content.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the content revision.
   *
   * @public
   */
  revisionId: string | undefined;

  /**
   * The title of the content.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The media type of the content.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * The status of the content.
   *
   * @public
   */
  status: ContentStatus | undefined;

  /**
   * A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift.
   *
   * @public
   */
  metadata: Record<string, string> | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The URI of the content.
   *
   * @public
   */
  linkOutUri?: string | undefined;

  /**
   * The URL of the content.
   *
   * @public
   */
  url: string | undefined;

  /**
   * The expiration time of the URL as an epoch timestamp.
   *
   * @public
   */
  urlExpiry: Date | undefined;
}

/**
 * @public
 */
export interface CreateContentResponse {
  /**
   * The content.
   *
   * @public
   */
  content?: ContentData | undefined;
}

/**
 * @public
 */
export interface DeleteContentRequest {
  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
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
   * The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  contentId: string | undefined;

  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetContentResponse {
  /**
   * The content.
   *
   * @public
   */
  content?: ContentData | undefined;
}

/**
 * @public
 */
export interface GetContentSummaryRequest {
  /**
   * The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  contentId: string | undefined;

  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * Summary information about the content.
 *
 * @public
 */
export interface ContentSummary {
  /**
   * The Amazon Resource Name (ARN) of the content.
   *
   * @public
   */
  contentArn: string | undefined;

  /**
   * The identifier of the content.
   *
   * @public
   */
  contentId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the content.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The identifier of the revision of the content.
   *
   * @public
   */
  revisionId: string | undefined;

  /**
   * The title of the content.
   *
   * @public
   */
  title: string | undefined;

  /**
   * The media type of the content.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * The status of the content.
   *
   * @public
   */
  status: ContentStatus | undefined;

  /**
   * A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift.
   *
   * @public
   */
  metadata: Record<string, string> | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetContentSummaryResponse {
  /**
   * The content summary.
   *
   * @public
   */
  contentSummary?: ContentSummary | undefined;
}

/**
 * @public
 */
export interface ListContentsRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface ListContentsResponse {
  /**
   * Information about the content.
   *
   * @public
   */
  contentSummaries: ContentSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContentRequest {
  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  contentId: string | undefined;

  /**
   * The `revisionId` of the content resource to update, taken from an earlier call to `GetContent`, `GetContentSummary`, `SearchContent`, or `ListContents`. If included, this argument acts as an optimistic lock to ensure content was not modified since it was last read. If it has been modified, this API throws a `PreconditionFailedException`.
   *
   * @public
   */
  revisionId?: string | undefined;

  /**
   * The title of the content.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The URI for the article. If the knowledge base has a templateUri, setting this argument overrides it for this piece of content. To remove an existing `overrideLinkOurUri`, exclude this argument and set `removeOverrideLinkOutUri` to true.
   *
   * @public
   */
  overrideLinkOutUri?: string | undefined;

  /**
   * Unset the existing `overrideLinkOutUri` if it exists.
   *
   * @public
   */
  removeOverrideLinkOutUri?: boolean | undefined;

  /**
   * A key/value map to store attributes without affecting tagging or recommendations. For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * A pointer to the uploaded asset. This value is returned by [StartContentUpload](https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html).
   *
   * @public
   */
  uploadId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContentResponse {
  /**
   * The content.
   *
   * @public
   */
  content?: ContentData | undefined;
}

/**
 * Information about how to render the content.
 *
 * @public
 */
export interface RenderingConfiguration {
  /**
   * A URI template containing exactly one variable in `$\{variableName\}`format. This can only be set for `EXTERNAL` knowledge bases. For Salesforce, ServiceNow, and Zendesk, the variable must be one of the following:
   *
   * - Salesforce: `Id`, `ArticleNumber`, `VersionNumber`, `Title`, `PublishStatus`, or `IsDeleted`
   * - ServiceNow: `number`, `short_description`, `sys_mod_count`, `workflow_state`, or `active`
   * - Zendesk: `id`, `title`, `updated_at`, or `draft`
   *
   * The variable is replaced with the actual value for a piece of content when calling [GetContent](https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetContent.html).
   *
   * @public
   */
  templateUri?: string | undefined;
}

/**
 * Configuration information about the external data source.
 *
 * @public
 */
export type SourceConfiguration =
  | SourceConfiguration.AppIntegrationsMember
  | SourceConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace SourceConfiguration {
  /**
   * Configuration information for Amazon AppIntegrations to automatically ingest content.
   *
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
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the knowledge base.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of knowledge base. Only CUSTOM knowledge bases allow you to upload your own content. EXTERNAL knowledge bases support integrations with third-party systems whose content is synchronized automatically.
   *
   * @public
   */
  knowledgeBaseType: KnowledgeBaseType | undefined;

  /**
   * The source of the knowledge base content. Only set this argument for EXTERNAL knowledge bases.
   *
   * @public
   */
  sourceConfiguration?: SourceConfiguration | undefined;

  /**
   * Information about how to render the content.
   *
   * @public
   */
  renderingConfiguration?: RenderingConfiguration | undefined;

  /**
   * The configuration information for the customer managed key used for encryption.
   *
   * This KMS key must have a policy that allows `kms:CreateGrant`, `kms:DescribeKey`, and `kms:Decrypt/kms:GenerateDataKey` permissions to the IAM identity using the key to invoke Wisdom.
   *
   * For more information about setting up a customer managed key for Wisdom, see [Enable Amazon Connect Wisdom for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html).
   *
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * The description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Information about the knowledge base.
 *
 * @public
 */
export interface KnowledgeBaseData {
  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The name of the knowledge base.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of knowledge base.
   *
   * @public
   */
  knowledgeBaseType: KnowledgeBaseType | undefined;

  /**
   * The status of the knowledge base.
   *
   * @public
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * An epoch timestamp indicating the most recent content modification inside the knowledge base. If no content exists in a knowledge base, this value is unset.
   *
   * @public
   */
  lastContentModificationTime?: Date | undefined;

  /**
   * Source configuration information about the knowledge base.
   *
   * @public
   */
  sourceConfiguration?: SourceConfiguration | undefined;

  /**
   * Information about how to render the content.
   *
   * @public
   */
  renderingConfiguration?: RenderingConfiguration | undefined;

  /**
   * The configuration information for the customer managed key used for encryption.
   *
   * This KMS key must have a policy that allows `kms:CreateGrant`, `kms:DescribeKey`, and `kms:Decrypt/kms:GenerateDataKey` permissions to the IAM identity using the key to invoke Wisdom.
   *
   * For more information about setting up a customer managed key for Wisdom, see [Enable Amazon Connect Wisdom for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html).
   *
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * The description.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateKnowledgeBaseResponse {
  /**
   * The knowledge base.
   *
   * @public
   */
  knowledgeBase?: KnowledgeBaseData | undefined;
}

/**
 * The container of quick response data.
 *
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
   * The content of the quick response.
   *
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
 * The configuration information of the grouping of Wisdom users.
 *
 * @public
 */
export interface GroupingConfiguration {
  /**
   * The criteria used for grouping Wisdom users.
   *
   * The following is the list of supported criteria values.
   *
   * - `RoutingProfileArn`: Grouping the users by their [Amazon Connect routing profile ARN](https://docs.aws.amazon.com/connect/latest/APIReference/API_RoutingProfile.html). User should have [SearchRoutingProfile](https://docs.aws.amazon.com/connect/latest/APIReference/API_SearchRoutingProfiles.html) and [DescribeRoutingProfile](https://docs.aws.amazon.com/connect/latest/APIReference/API_DescribeRoutingProfile.html) permissions when setting criteria to this value.
   *
   * @public
   */
  criteria?: string | undefined;

  /**
   * The list of values that define different groups of Wisdom users.
   *
   * - When setting `criteria` to `RoutingProfileArn`, you need to provide a list of ARNs of [Amazon Connect routing profiles](https://docs.aws.amazon.com/connect/latest/APIReference/API_RoutingProfile.html) as values of this parameter.
   *
   * @public
   */
  values?: string[] | undefined;
}

/**
 * @public
 */
export interface CreateQuickResponseRequest {
  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the quick response.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The content of the quick response.
   *
   * @public
   */
  content: QuickResponseDataProvider | undefined;

  /**
   * The media type of the quick response content.
   *
   * - Use `application/x.quickresponse;format=plain` for a quick response written in plain text.
   * - Use `application/x.quickresponse;format=markdown` for a quick response written in richtext.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * The configuration information of the user groups that the quick response is accessible to.
   *
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * The description of the quick response.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The shortcut key of the quick response. The value should be unique across the knowledge base.
   *
   * @public
   */
  shortcutKey?: string | undefined;

  /**
   * Whether the quick response is active.
   *
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * The Amazon Connect channels this quick response applies to.
   *
   * @public
   */
  channels?: string[] | undefined;

  /**
   * The language code value for the language in which the quick response is written. The supported language codes include `de_DE`, `en_US`, `es_ES`, `fr_FR`, `id_ID`, `it_IT`, `ja_JP`, `ko_KR`, `pt_BR`, `zh_CN`, `zh_TW`
   *
   * @public
   */
  language?: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The container quick response content.
 *
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
   * The content of the quick response.
   *
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
 * The content of the quick response stored in different media types.
 *
 * @public
 */
export interface QuickResponseContents {
  /**
   * The container quick response content.
   *
   * @public
   */
  plainText?: QuickResponseContentProvider | undefined;

  /**
   * The container quick response content.
   *
   * @public
   */
  markdown?: QuickResponseContentProvider | undefined;
}

/**
 * Information about the quick response.
 *
 * @public
 */
export interface QuickResponseData {
  /**
   * The Amazon Resource Name (ARN) of the quick response.
   *
   * @public
   */
  quickResponseArn: string | undefined;

  /**
   * The identifier of the quick response.
   *
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the quick response.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The media type of the quick response content.
   *
   * - Use `application/x.quickresponse;format=plain` for quick response written in plain text.
   * - Use `application/x.quickresponse;format=markdown` for quick response written in richtext.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * The status of the quick response data.
   *
   * @public
   */
  status: QuickResponseStatus | undefined;

  /**
   * The timestamp when the quick response was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the quick response data was last modified.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * The contents of the quick response.
   *
   * @public
   */
  contents?: QuickResponseContents | undefined;

  /**
   * The description of the quick response.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration information of the user groups that the quick response is accessible to.
   *
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * The shortcut key of the quick response. The value should be unique across the knowledge base.
   *
   * @public
   */
  shortcutKey?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last updated the quick response data.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * Whether the quick response is active.
   *
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * The Amazon Connect contact channels this quick response applies to. The supported contact channel types include `Chat`.
   *
   * @public
   */
  channels?: string[] | undefined;

  /**
   * The language code value for the language in which the quick response is written.
   *
   * @public
   */
  language?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateQuickResponseResponse {
  /**
   * The quick response.
   *
   * @public
   */
  quickResponse?: QuickResponseData | undefined;
}

/**
 * @public
 */
export interface DeleteImportJobRequest {
  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the import job to be deleted.
   *
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
   * The knowledge base to delete content from. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
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
   * The knowledge base from which the quick response is deleted. The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the quick response to delete.
   *
   * @public
   */
  quickResponseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteQuickResponseResponse {}

/**
 * The configuration information of the external data source.
 *
 * @public
 */
export interface ExternalSourceConfiguration {
  /**
   * The type of the external data source.
   *
   * @public
   */
  source: ExternalSource | undefined;

  /**
   * The configuration information of the external data source.
   *
   * @public
   */
  configuration: Configuration | undefined;
}

/**
 * @public
 */
export interface GetImportJobRequest {
  /**
   * The identifier of the import job to retrieve.
   *
   * @public
   */
  importJobId: string | undefined;

  /**
   * The identifier of the knowledge base that the import job belongs to.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * Summary information about the import job.
 *
 * @public
 */
export interface ImportJobData {
  /**
   * The identifier of the import job.
   *
   * @public
   */
  importJobId: string | undefined;

  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * A pointer to the uploaded asset. This value is returned by [StartContentUpload](https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html).
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The type of the import job.
   *
   * @public
   */
  importJobType: ImportJobType | undefined;

  /**
   * The status of the import job.
   *
   * @public
   */
  status: ImportJobStatus | undefined;

  /**
   * The download link to the resource file that is uploaded to the import job.
   *
   * @public
   */
  url: string | undefined;

  /**
   * The link to donwload the information of resource data that failed to be imported.
   *
   * @public
   */
  failedRecordReport?: string | undefined;

  /**
   * The expiration time of the URL as an epoch timestamp.
   *
   * @public
   */
  urlExpiry: Date | undefined;

  /**
   * The timestamp when the import job was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the import job data was last modified.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * The metadata fields of the imported Wisdom resources.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * The configuration information of the external data source.
   *
   * @public
   */
  externalSourceConfiguration?: ExternalSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface GetImportJobResponse {
  /**
   * The import job.
   *
   * @public
   */
  importJob?: ImportJobData | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseRequest {
  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetKnowledgeBaseResponse {
  /**
   * The knowledge base.
   *
   * @public
   */
  knowledgeBase?: KnowledgeBaseData | undefined;
}

/**
 * @public
 */
export interface GetQuickResponseRequest {
  /**
   * The identifier of the quick response.
   *
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * The identifier of the knowledge base. This should be a QUICK_RESPONSES type knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface GetQuickResponseResponse {
  /**
   * The quick response.
   *
   * @public
   */
  quickResponse?: QuickResponseData | undefined;
}

/**
 * Summary information about the import job.
 *
 * @public
 */
export interface ImportJobSummary {
  /**
   * The identifier of the import job.
   *
   * @public
   */
  importJobId: string | undefined;

  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * A pointer to the uploaded asset. This value is returned by [StartContentUpload](https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html).
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The type of import job.
   *
   * @public
   */
  importJobType: ImportJobType | undefined;

  /**
   * The status of the import job.
   *
   * @public
   */
  status: ImportJobStatus | undefined;

  /**
   * The timestamp when the import job was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the import job was last modified.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * The metadata fields of the imported Wisdom resources.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * The configuration information of the external source that the resource data are imported from.
   *
   * @public
   */
  externalSourceConfiguration?: ExternalSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface ListImportJobsRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * @public
 */
export interface ListImportJobsResponse {
  /**
   * Summary information about the import jobs.
   *
   * @public
   */
  importJobSummaries: ImportJobSummary[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Summary information about the knowledge base.
 *
 * @public
 */
export interface KnowledgeBaseSummary {
  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The name of the knowledge base.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of knowledge base.
   *
   * @public
   */
  knowledgeBaseType: KnowledgeBaseType | undefined;

  /**
   * The status of the knowledge base summary.
   *
   * @public
   */
  status: KnowledgeBaseStatus | undefined;

  /**
   * Configuration information about the external data source.
   *
   * @public
   */
  sourceConfiguration?: SourceConfiguration | undefined;

  /**
   * Information about how to render the content.
   *
   * @public
   */
  renderingConfiguration?: RenderingConfiguration | undefined;

  /**
   * The configuration information for the customer managed key used for encryption.
   *
   * This KMS key must have a policy that allows `kms:CreateGrant`, `kms:DescribeKey`, `kms:Decrypt/kms:GenerateDataKey` permissions to the IAM identity using the key to invoke Wisdom.
   *
   * For more information about setting up a customer managed key for Wisdom, see [Enable Amazon Connect Wisdom for your instance](https://docs.aws.amazon.com/connect/latest/adminguide/enable-wisdom.html).
   *
   * @public
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration | undefined;

  /**
   * The description of the knowledge base.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListKnowledgeBasesResponse {
  /**
   * Information about the knowledge bases.
   *
   * @public
   */
  knowledgeBaseSummaries: KnowledgeBaseSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListQuickResponsesRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;
}

/**
 * The summary information about the quick response.
 *
 * @public
 */
export interface QuickResponseSummary {
  /**
   * The Amazon Resource Name (ARN) of the quick response.
   *
   * @public
   */
  quickResponseArn: string | undefined;

  /**
   * The identifier of the quick response.
   *
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the quick response.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The media type of the quick response content.
   *
   * - Use `application/x.quickresponse;format=plain` for quick response written in plain text.
   * - Use `application/x.quickresponse;format=markdown` for quick response written in richtext.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * The resource status of the quick response.
   *
   * @public
   */
  status: QuickResponseStatus | undefined;

  /**
   * The timestamp when the quick response was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the quick response summary was last modified.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * The description of the quick response.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last updated the quick response data.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * Whether the quick response is active.
   *
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * The Amazon Connect contact channels this quick response applies to. The supported contact channel types include `Chat`.
   *
   * @public
   */
  channels?: string[] | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListQuickResponsesResponse {
  /**
   * Summary information about the quick responses.
   *
   * @public
   */
  quickResponseSummaries: QuickResponseSummary[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQuickResponseRequest {
  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The identifier of the quick response.
   *
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * The name of the quick response.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The updated content of the quick response.
   *
   * @public
   */
  content?: QuickResponseDataProvider | undefined;

  /**
   * The media type of the quick response content.
   *
   * - Use `application/x.quickresponse;format=plain` for quick response written in plain text.
   * - Use `application/x.quickresponse;format=markdown` for quick response written in richtext.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * The updated grouping configuration of the quick response.
   *
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * Whether to remove the grouping configuration of the quick response.
   *
   * @public
   */
  removeGroupingConfiguration?: boolean | undefined;

  /**
   * The updated description of the quick response.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Whether to remove the description from the quick response.
   *
   * @public
   */
  removeDescription?: boolean | undefined;

  /**
   * The shortcut key of the quick response. The value should be unique across the knowledge base.
   *
   * @public
   */
  shortcutKey?: string | undefined;

  /**
   * Whether to remove the shortcut key of the quick response.
   *
   * @public
   */
  removeShortcutKey?: boolean | undefined;

  /**
   * Whether the quick response is active.
   *
   * @public
   */
  isActive?: boolean | undefined;

  /**
   * The Amazon Connect contact channels this quick response applies to. The supported contact channel types include `Chat`.
   *
   * @public
   */
  channels?: string[] | undefined;

  /**
   * The language code value for the language in which the quick response is written. The supported language codes include `de_DE`, `en_US`, `es_ES`, `fr_FR`, `id_ID`, `it_IT`, `ja_JP`, `ko_KR`, `pt_BR`, `zh_CN`, `zh_TW`
   *
   * @public
   */
  language?: string | undefined;
}

/**
 * @public
 */
export interface UpdateQuickResponseResponse {
  /**
   * The quick response.
   *
   * @public
   */
  quickResponse?: QuickResponseData | undefined;
}

/**
 * @public
 */
export interface RemoveKnowledgeBaseTemplateUriRequest {
  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
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
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The search expression to filter results.
   *
   * @public
   */
  searchExpression: SearchExpression | undefined;
}

/**
 * @public
 */
export interface SearchContentResponse {
  /**
   * Summary information about the content.
   *
   * @public
   */
  contentSummaries: ContentSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The quick response fields to filter the quick response query results by.
 *
 * The following is the list of supported field names.
 *
 * - name
 * - description
 * - shortcutKey
 * - isActive
 * - channels
 * - language
 * - contentType
 * - createdTime
 * - lastModifiedTime
 * - lastModifiedBy
 * - groupingConfiguration.criteria
 * - groupingConfiguration.values
 *
 * @public
 */
export interface QuickResponseFilterField {
  /**
   * The name of the attribute field to filter the quick responses by.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The values of attribute field to filter the quick response by.
   *
   * @public
   */
  values?: string[] | undefined;

  /**
   * The operator to use for filtering.
   *
   * @public
   */
  operator: QuickResponseFilterOperator | undefined;

  /**
   * Whether to treat null value as a match for the attribute field.
   *
   * @public
   */
  includeNoExistence?: boolean | undefined;
}

/**
 * The quick response fields to order the quick response query results by.
 *
 * The following is the list of supported field names.
 *
 * - name
 * - description
 * - shortcutKey
 * - isActive
 * - channels
 * - language
 * - contentType
 * - createdTime
 * - lastModifiedTime
 * - lastModifiedBy
 * - groupingConfiguration.criteria
 * - groupingConfiguration.values
 *
 * @public
 */
export interface QuickResponseOrderField {
  /**
   * The name of the attribute to order the quick response query results by.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The order at which the quick responses are sorted by.
   *
   * @public
   */
  order?: Order | undefined;
}

/**
 * The quick response fields to query quick responses by.
 *
 * The following is the list of supported field names.
 *
 * - content
 * - name
 * - description
 * - shortcutKey
 *
 * @public
 */
export interface QuickResponseQueryField {
  /**
   * The name of the attribute to query the quick responses by.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The values of the attribute to query the quick responses by.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The operator to use for matching attribute field values in the query.
   *
   * @public
   */
  operator: QuickResponseQueryOperator | undefined;

  /**
   * Whether the query expects only exact matches on the attribute field values. The results of the query will only include exact matches if this parameter is set to false.
   *
   * @public
   */
  allowFuzziness?: boolean | undefined;

  /**
   * The importance of the attribute field when calculating query result relevancy scores. The value set for this parameter affects the ordering of search results.
   *
   * @public
   */
  priority?: Priority | undefined;
}

/**
 * Information about the import job.
 *
 * @public
 */
export interface QuickResponseSearchExpression {
  /**
   * The quick response query expressions.
   *
   * @public
   */
  queries?: QuickResponseQueryField[] | undefined;

  /**
   * The configuration of filtering rules applied to quick response query results.
   *
   * @public
   */
  filters?: QuickResponseFilterField[] | undefined;

  /**
   * The quick response attribute fields on which the query results are ordered.
   *
   * @public
   */
  orderOnField?: QuickResponseOrderField | undefined;
}

/**
 * @public
 */
export interface SearchQuickResponsesRequest {
  /**
   * The identifier of the knowledge base. This should be a QUICK_RESPONSES type knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The search expression for querying the quick response.
   *
   * @public
   */
  searchExpression: QuickResponseSearchExpression | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The [user-defined Amazon Connect contact attributes](https://docs.aws.amazon.com/connect/latest/adminguide/connect-attrib-list.html#user-defined-attributes) to be resolved when search results are returned.
   *
   * @public
   */
  attributes?: Record<string, string> | undefined;
}

/**
 * The result of quick response search.
 *
 * @public
 */
export interface QuickResponseSearchResultData {
  /**
   * The Amazon Resource Name (ARN) of the quick response.
   *
   * @public
   */
  quickResponseArn: string | undefined;

  /**
   * The identifier of the quick response.
   *
   * @public
   */
  quickResponseId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the knowledge base.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The name of the quick response.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The media type of the quick response content.
   *
   * - Use `application/x.quickresponse;format=plain` for quick response written in plain text.
   * - Use `application/x.quickresponse;format=markdown` for quick response written in richtext.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * The resource status of the quick response.
   *
   * @public
   */
  status: QuickResponseStatus | undefined;

  /**
   * The contents of the quick response.
   *
   * @public
   */
  contents: QuickResponseContents | undefined;

  /**
   * The timestamp when the quick response was created.
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The timestamp when the quick response search result data was last modified.
   *
   * @public
   */
  lastModifiedTime: Date | undefined;

  /**
   * Whether the quick response is active.
   *
   * @public
   */
  isActive: boolean | undefined;

  /**
   * The description of the quick response.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The configuration information of the user groups that the quick response is accessible to.
   *
   * @public
   */
  groupingConfiguration?: GroupingConfiguration | undefined;

  /**
   * The shortcut key of the quick response. The value should be unique across the knowledge base.
   *
   * @public
   */
  shortcutKey?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last updated the quick response search result data.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * The Amazon Connect contact channels this quick response applies to. The supported contact channel types include `Chat`.
   *
   * @public
   */
  channels?: string[] | undefined;

  /**
   * The language code value for the language in which the quick response is written.
   *
   * @public
   */
  language?: string | undefined;

  /**
   * The user defined contact attributes that are not resolved when the search result is returned.
   *
   * @public
   */
  attributesNotInterpolated?: string[] | undefined;

  /**
   * The user defined contact attributes that are resolved when the search result is returned.
   *
   * @public
   */
  attributesInterpolated?: string[] | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface SearchQuickResponsesResponse {
  /**
   * The results of the quick response search.
   *
   * @public
   */
  results: QuickResponseSearchResultData[] | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartContentUploadRequest {
  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The type of content to upload.
   *
   * @public
   */
  contentType: string | undefined;

  /**
   * The expected expiration time of the generated presigned URL, specified in minutes.
   *
   * @public
   */
  presignedUrlTimeToLive?: number | undefined;
}

/**
 * @public
 */
export interface StartContentUploadResponse {
  /**
   * The identifier of the upload.
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The URL of the upload.
   *
   * @public
   */
  url: string | undefined;

  /**
   * The expiration time of the URL as an epoch timestamp.
   *
   * @public
   */
  urlExpiry: Date | undefined;

  /**
   * The headers to include in the upload.
   *
   * @public
   */
  headersToInclude: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartImportJobRequest {
  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * - For importing Wisdom quick responses, this should be a `QUICK_RESPONSES` type knowledge base.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The type of the import job.
   *
   * - For importing quick response resource, set the value to `QUICK_RESPONSES`.
   *
   * @public
   */
  importJobType: ImportJobType | undefined;

  /**
   * A pointer to the uploaded asset. This value is returned by [StartContentUpload](https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html).
   *
   * @public
   */
  uploadId: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The metadata fields of the imported Wisdom resources.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * The configuration information of the external source that the resource data are imported from.
   *
   * @public
   */
  externalSourceConfiguration?: ExternalSourceConfiguration | undefined;
}

/**
 * @public
 */
export interface StartImportJobResponse {
  /**
   * The import job.
   *
   * @public
   */
  importJob?: ImportJobData | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseTemplateUriRequest {
  /**
   * The identifier of the knowledge base. This should not be a QUICK_RESPONSES type knowledge base if you're storing Wisdom Content resource to it. Can be either the ID or the ARN. URLs cannot contain the ARN.
   *
   * @public
   */
  knowledgeBaseId: string | undefined;

  /**
   * The template URI to update.
   *
   * @public
   */
  templateUri: string | undefined;
}

/**
 * @public
 */
export interface UpdateKnowledgeBaseTemplateUriResponse {
  /**
   * The knowledge base to update.
   *
   * @public
   */
  knowledgeBase?: KnowledgeBaseData | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
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
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
