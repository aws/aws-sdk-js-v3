// smithy-typescript generated code
import type {
  Gender,
  LayoutType,
  LogicalOperator,
  PartyType,
  ProfileType,
  ReadinessStatus,
  RecommenderFilterStatus,
  RecommenderRecipeName,
  RecommenderSchemaStatus,
  RecommenderStatus,
  Scope,
  SegmentSubscriptionStatus,
  SegmentType,
  Statistic,
  Status,
  StatusReason,
  SubscriptionEvent,
  SubscriptionEventType,
  UploadJobStatus,
  WorkflowType,
} from "./enums";
import type {
  AdditionalSearchKey,
  AttributeDetails,
  Conditions,
  DataStoreRequest,
  DataStoreResponse,
  DomainObjectTypeField,
  EngagementPreferences,
  EventTriggerCondition,
  EventTriggerLimits,
  FlowDefinition,
  MatchingRequest,
  MatchingResponse,
  ObjectTypeField,
  ObjectTypeKey,
  Profile,
  Readiness,
  Recommendation,
  RecommendationDiversityConfig,
  RecommenderConfig,
  RecommenderFilter,
  RecommenderPromotionalFilter,
  RecommenderSchemaField,
  RecommenderUpdate,
  RuleBasedMatchingRequest,
  RuleBasedMatchingResponse,
  ScheduleConfiguration,
} from "./models_0";

/**
 * @public
 */
export interface ListProfileObjectTypeTemplatesRequest {
  /**
   * The pagination token from the previous ListObjectTypeTemplates API call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects returned per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A ProfileObjectTypeTemplate in a list of ProfileObjectTypeTemplates.
 *
 * @public
 */
export interface ListProfileObjectTypeTemplateItem {
  /**
   * A unique identifier for the object template.
   *
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * The name of the source of the object template.
   *
   * @public
   */
  SourceName?: string | undefined;

  /**
   * The source of the object template.
   *
   * @public
   */
  SourceObject?: string | undefined;
}

/**
 * @public
 */
export interface ListProfileObjectTypeTemplatesResponse {
  /**
   * The list of ListProfileObjectType template instances.
   *
   * @public
   */
  Items?: ListProfileObjectTypeTemplateItem[] | undefined;

  /**
   * The pagination token from the previous ListObjectTypeTemplates API call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommenderFiltersRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The maximum number of recommender filters to return in the response. The default value is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token received from a previous ListRecommenderFilters call to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides a summary of a recommender filter's configuration and current state.
 *
 * @public
 */
export interface RecommenderFilterSummary {
  /**
   * The name of the recommender filter.
   *
   * @public
   */
  RecommenderFilterName?: string | undefined;

  /**
   * The name of the recommender schema associated with this recommender filter.
   *
   * @public
   */
  RecommenderSchemaName?: string | undefined;

  /**
   * The filter expression that defines which items to include or exclude from recommendations.
   *
   * @public
   */
  RecommenderFilterExpression?: string | undefined;

  /**
   * The timestamp when the recommender filter was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A description of the recommender filter's purpose and characteristics.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current operational status of the recommender filter.
   *
   * @public
   */
  Status?: RecommenderFilterStatus | undefined;

  /**
   * If the recommender filter is in a failed state, provides the reason for the failure.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListRecommenderFiltersResponse {
  /**
   * A token to retrieve the next page of results. Null if there are no more results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of recommender filters and their properties in the specified domain.
   *
   * @public
   */
  RecommenderFilters?: RecommenderFilterSummary[] | undefined;
}

/**
 * @public
 */
export interface ListRecommenderRecipesRequest {
  /**
   * The maximum number of recommender recipes to return in the response. The default value is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token received from a previous ListRecommenderRecipes call to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Defines the algorithm and approach used to generate recommendations.
 *
 * @public
 */
export interface RecommenderRecipe {
  /**
   * The name of the recommender recipe.
   *
   * @public
   */
  name?: RecommenderRecipeName | undefined;

  /**
   * A description of the recommender recipe's purpose and functionality.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListRecommenderRecipesResponse {
  /**
   * A token to retrieve the next page of results. Null if there are no more results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of available recommender recipes and their properties.
   *
   * @public
   */
  RecommenderRecipes?: RecommenderRecipe[] | undefined;
}

/**
 * @public
 */
export interface ListRecommendersRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The maximum number of recommenders to return in the response. The default value is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token received from a previous ListRecommenders call to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides a summary of a recommender's configuration and current state.
 *
 * @public
 */
export interface RecommenderSummary {
  /**
   * The name of the recommender.
   *
   * @public
   */
  RecommenderName?: string | undefined;

  /**
   * The name of the recipe used by this recommender.
   *
   * @public
   */
  RecipeName?: RecommenderRecipeName | undefined;

  /**
   * The name of the recommender schema associated with this recommender.
   *
   * @public
   */
  RecommenderSchemaName?: string | undefined;

  /**
   * The configuration settings applied to this recommender.
   *
   * @public
   */
  RecommenderConfig?: RecommenderConfig | undefined;

  /**
   * The timestamp when the recommender was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * A description of the recommender's purpose and characteristics.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current operational status of the recommender.
   *
   * @public
   */
  Status?: RecommenderStatus | undefined;

  /**
   * The timestamp of when the recommender was edited.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * If the recommender is in a failed state, provides the reason for the failure.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * Information about the most recent update performed on the recommender, including its status and timing.
   *
   * @public
   */
  LatestRecommenderUpdate?: RecommenderUpdate | undefined;
}

/**
 * @public
 */
export interface ListRecommendersResponse {
  /**
   * A token to retrieve the next page of results. Null if there are no more results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of recommenders and their properties in the specified domain.
   *
   * @public
   */
  Recommenders?: RecommenderSummary[] | undefined;
}

/**
 * @public
 */
export interface ListRecommenderSchemasRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The maximum number of recommender schemas to return in the response. The default value is 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token received from a previous ListRecommenderSchemas call to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Provides a summary of a recommender schema's configuration and current state.
 *
 * @public
 */
export interface RecommenderSchemaSummary {
  /**
   * The name of the recommender schema.
   *
   * @public
   */
  RecommenderSchemaName: string | undefined;

  /**
   * A map of dataset type to column definitions included in the schema.
   *
   * @public
   */
  Fields: Record<string, RecommenderSchemaField[]> | undefined;

  /**
   * The timestamp when the recommender schema was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The current operational status of the recommender schema.
   *
   * @public
   */
  Status: RecommenderSchemaStatus | undefined;
}

/**
 * @public
 */
export interface ListRecommenderSchemasResponse {
  /**
   * A token to retrieve the next page of results. Null if there are no more results to retrieve.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of recommender schemas and their properties in the specified domain.
   *
   * @public
   */
  RecommenderSchemas?: RecommenderSchemaSummary[] | undefined;
}

/**
 * @public
 */
export interface ListRuleBasedMatchesRequest {
  /**
   * The pagination token from the previous `ListRuleBasedMatches` API call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of `MatchIds` returned per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface ListRuleBasedMatchesResponse {
  /**
   * The list of `MatchIds` for the given domain.
   *
   * @public
   */
  MatchIds?: string[] | undefined;

  /**
   * The pagination token from the previous `ListRuleBasedMatches` API call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSegmentDefinitionsRequest {
  /**
   * The unique identifier of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The maximum number of objects returned per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token from the previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Object holding the segment definition fields.
 *
 * @public
 */
export interface SegmentDefinitionItem {
  /**
   * Name of the segment definition.
   *
   * @public
   */
  SegmentDefinitionName?: string | undefined;

  /**
   * Display name of the segment definition.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description of the segment definition.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The arn of the segment definition.
   *
   * @public
   */
  SegmentDefinitionArn?: string | undefined;

  /**
   * When the segment definition was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The tags belonging to the segment definition.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The segment type.
   *
   * Classic : Segments created using traditional SegmentGroup structure
   *
   * Enhanced : Segments created using SQL queries
   *
   * @public
   */
  SegmentType?: SegmentType | undefined;
}

/**
 * @public
 */
export interface ListSegmentDefinitionsResponse {
  /**
   * The pagination token from the previous call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List of segment definitions.
   *
   * @public
   */
  Items?: SegmentDefinitionItem[] | undefined;
}

/**
 * @public
 */
export interface ListSegmentSubscriptionEventsRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the segment definition.
   *
   * @public
   */
  SegmentDefinitionName: string | undefined;

  /**
   * The maximum number of events to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token from the previous call to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a single segment membership event.
 *
 * @public
 */
export interface SubscriptionEventItem {
  /**
   * The unique identifier of a customer profile.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * The timestamp of when the membership change was detected.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The type of event that triggered the membership change. The following are valid values:
   *
   * - **LIVE**: Real-time event triggered by a profile or calculated attribute change (Classic segments only).
   * - **SCHEDULE**: Event generated during a scheduled execution.
   *
   * @public
   */
  EventType?: SubscriptionEventType | undefined;

  /**
   * Whether the profile joined or left the segment. The following are valid values:
   *
   * - **JOINED**: The profile joined the segment.
   * - **LEFT**: The profile left the segment.
   *
   * @public
   */
  Event?: SubscriptionEvent | undefined;
}

/**
 * @public
 */
export interface ListSegmentSubscriptionEventsResponse {
  /**
   * A list of segment membership events.
   *
   * @public
   */
  Events?: SubscriptionEventItem[] | undefined;

  /**
   * The pagination token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource for which you want to view tags.
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
export interface ListUploadJobsRequest {
  /**
   * The unique name of the domain to list upload jobs for.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The maximum number of upload jobs to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The pagination token from the previous call to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * The summary information for an individual upload job.
 *
 * @public
 */
export interface UploadJobItem {
  /**
   * The unique identifier of the upload job.
   *
   * @public
   */
  JobId?: string | undefined;

  /**
   * The name of the upload job.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The current status of the upload job.
   *
   * @public
   */
  Status?: UploadJobStatus | undefined;

  /**
   * The reason for the current status of the upload job.
   *
   * @public
   */
  StatusReason?: StatusReason | undefined;

  /**
   * The timestamp when the upload job was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp when the upload job was completed.
   *
   * @public
   */
  CompletedAt?: Date | undefined;

  /**
   * The expiry duration for the profiles ingested with the upload job.
   *
   * @public
   */
  DataExpiry?: number | undefined;
}

/**
 * @public
 */
export interface ListUploadJobsResponse {
  /**
   * The pagination token to use to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of upload jobs for the specified domain.
   *
   * @public
   */
  Items?: UploadJobItem[] | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The type of workflow. The only supported value is APPFLOW_INTEGRATION.
   *
   * @public
   */
  WorkflowType?: WorkflowType | undefined;

  /**
   * Status of workflow execution.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * Retrieve workflows started after timestamp.
   *
   * @public
   */
  QueryStartDate?: Date | undefined;

  /**
   * Retrieve workflows ended after timestamp.
   *
   * @public
   */
  QueryEndDate?: Date | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A workflow in list of workflows.
 *
 * @public
 */
export interface ListWorkflowsItem {
  /**
   * The type of workflow. The only supported value is APPFLOW_INTEGRATION.
   *
   * @public
   */
  WorkflowType: WorkflowType | undefined;

  /**
   * Unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId: string | undefined;

  /**
   * Status of workflow execution.
   *
   * @public
   */
  Status: Status | undefined;

  /**
   * Description for workflow execution status.
   *
   * @public
   */
  StatusDescription: string | undefined;

  /**
   * Creation timestamp for workflow.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * Last updated timestamp for workflow.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsResponse {
  /**
   * List containing workflow details.
   *
   * @public
   */
  Items?: ListWorkflowsItem[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A duplicate customer profile that is to be merged into a main profile.
 *
 * @public
 */
export interface FieldSourceProfileIds {
  /**
   * A unique identifier for the account number field to be merged.
   *
   * @public
   */
  AccountNumber?: string | undefined;

  /**
   * A unique identifier for the additional information field to be merged.
   *
   * @public
   */
  AdditionalInformation?: string | undefined;

  /**
   * A unique identifier for the party type field to be merged.
   *
   * @public
   */
  PartyType?: string | undefined;

  /**
   * A unique identifier for the business name field to be merged.
   *
   * @public
   */
  BusinessName?: string | undefined;

  /**
   * A unique identifier for the first name field to be merged.
   *
   * @public
   */
  FirstName?: string | undefined;

  /**
   * A unique identifier for the middle name field to be merged.
   *
   * @public
   */
  MiddleName?: string | undefined;

  /**
   * A unique identifier for the last name field to be merged.
   *
   * @public
   */
  LastName?: string | undefined;

  /**
   * A unique identifier for the birthdate field to be merged.
   *
   * @public
   */
  BirthDate?: string | undefined;

  /**
   * A unique identifier for the gender field to be merged.
   *
   * @public
   */
  Gender?: string | undefined;

  /**
   * A unique identifier for the phone number field to be merged.
   *
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * A unique identifier for the mobile phone number field to be merged.
   *
   * @public
   */
  MobilePhoneNumber?: string | undefined;

  /**
   * A unique identifier for the home phone number field to be merged.
   *
   * @public
   */
  HomePhoneNumber?: string | undefined;

  /**
   * A unique identifier for the business phone number field to be merged.
   *
   * @public
   */
  BusinessPhoneNumber?: string | undefined;

  /**
   * A unique identifier for the email address field to be merged.
   *
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * A unique identifier for the personal email address field to be merged.
   *
   * @public
   */
  PersonalEmailAddress?: string | undefined;

  /**
   * A unique identifier for the party type field to be merged.
   *
   * @public
   */
  BusinessEmailAddress?: string | undefined;

  /**
   * A unique identifier for the party type field to be merged.
   *
   * @public
   */
  Address?: string | undefined;

  /**
   * A unique identifier for the shipping address field to be merged.
   *
   * @public
   */
  ShippingAddress?: string | undefined;

  /**
   * A unique identifier for the mailing address field to be merged.
   *
   * @public
   */
  MailingAddress?: string | undefined;

  /**
   * A unique identifier for the billing type field to be merged.
   *
   * @public
   */
  BillingAddress?: string | undefined;

  /**
   * A unique identifier for the attributes field to be merged.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * A unique identifier for the profile type field to be merged.
   *
   * @public
   */
  ProfileType?: string | undefined;

  /**
   * A unique identifier for the engagement preferences field to be merged.
   *
   * @public
   */
  EngagementPreferences?: string | undefined;
}

/**
 * @public
 */
export interface MergeProfilesRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The identifier of the profile to be taken.
   *
   * @public
   */
  MainProfileId: string | undefined;

  /**
   * The identifier of the profile to be merged into MainProfileId.
   *
   * @public
   */
  ProfileIdsToBeMerged: string[] | undefined;

  /**
   * The identifiers of the fields in the profile that has the information you want to apply to the merge. For example, say you want to merge EmailAddress from Profile1 into MainProfile. This would be the identifier of the EmailAddress field in Profile1.
   *
   * @public
   */
  FieldSourceProfileIds?: FieldSourceProfileIds | undefined;
}

/**
 * @public
 */
export interface MergeProfilesResponse {
  /**
   * A message that indicates the merge request is complete.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface PutDomainObjectTypeRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the domain object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * The description of the domain object type.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The customer provided KMS key used to encrypt this type of domain object.
   *
   * @public
   */
  EncryptionKey?: string | undefined;

  /**
   * A map of field names to their corresponding domain object type field definitions.
   *
   * @public
   */
  Fields: Record<string, DomainObjectTypeField> | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutDomainObjectTypeResponse {
  /**
   * The unique name of the domain object type.
   *
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * The description of the domain object type.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The customer provided KMS key used to encrypt this type of domain object.
   *
   * @public
   */
  EncryptionKey?: string | undefined;

  /**
   * A map of field names to their corresponding domain object type field definitions.
   *
   * @public
   */
  Fields?: Record<string, DomainObjectTypeField> | undefined;

  /**
   * The timestamp of when the domain object type was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the domain object type was most recently edited.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutIntegrationRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The URI of the S3 bucket or any other type of data source.
   *
   * @public
   */
  Uri?: string | undefined;

  /**
   * The name of the profile object type.
   *
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an `ObjectTypeName` (template) used to ingest the event. It supports the following event types: `SegmentIdentify`, `ShopifyCreateCustomers`, `ShopifyUpdateCustomers`, `ShopifyCreateDraftOrders`, `ShopifyUpdateDraftOrders`, `ShopifyCreateOrders`, and `ShopifyUpdatedOrders`.
   *
   * @public
   */
  ObjectTypeNames?: Record<string, string> | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The configuration that controls how Customer Profiles retrieves data from the source.
   *
   * @public
   */
  FlowDefinition?: FlowDefinition | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. The Integration uses this role to make Customer Profiles requests on your behalf.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * A list of unique names for active event triggers associated with the integration.
   *
   * @public
   */
  EventTriggerNames?: string[] | undefined;

  /**
   * Specifies whether the integration applies to profile level data (associated with profiles) or domain level data (not associated with any specific profile). The default value is PROFILE.
   *
   * @public
   */
  Scope?: Scope | undefined;
}

/**
 * @public
 */
export interface PutIntegrationResponse {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The URI of the S3 bucket or any other type of data source.
   *
   * @public
   */
  Uri: string | undefined;

  /**
   * The name of the profile object type.
   *
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * The timestamp of when the domain was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp of when the domain was most recently edited.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an `ObjectTypeName` (template) used to ingest the event. It supports the following event types: `SegmentIdentify`, `ShopifyCreateCustomers`, `ShopifyUpdateCustomers`, `ShopifyCreateDraftOrders`, `ShopifyUpdateDraftOrders`, `ShopifyCreateOrders`, and `ShopifyUpdatedOrders`.
   *
   * @public
   */
  ObjectTypeNames?: Record<string, string> | undefined;

  /**
   * Unique identifier for the workflow.
   *
   * @public
   */
  WorkflowId?: string | undefined;

  /**
   * Boolean that shows if the Flow that's associated with the Integration is created in Amazon Appflow, or with ObjectTypeName equals _unstructured via API/CLI in flowDefinition.
   *
   * @public
   */
  IsUnstructured?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role. The Integration uses this role to make Customer Profiles requests on your behalf.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * A list of unique names for active event triggers associated with the integration. This list would be empty if no Event Trigger is associated with the integration.
   *
   * @public
   */
  EventTriggerNames?: string[] | undefined;

  /**
   * Specifies whether the integration applies to profile level data (associated with profiles) or domain level data (not associated with any specific profile). The default value is PROFILE.
   *
   * @public
   */
  Scope?: Scope | undefined;
}

/**
 * @public
 */
export interface PutProfileObjectRequest {
  /**
   * The name of the profile object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * A string that is serialized from a JSON object.
   *
   * @public
   */
  Object: string | undefined;

  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface PutProfileObjectResponse {
  /**
   * The unique identifier of the profile object generated by the service.
   *
   * @public
   */
  ProfileObjectUniqueKey?: string | undefined;
}

/**
 * @public
 */
export interface PutProfileObjectTypeRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the profile object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * Description of the profile object type.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * A unique identifier for the object template. For some attributes in the request, the service will use the default value from the object template when TemplateId is present. If these attributes are present in the request, the service may return a `BadRequestException`. These attributes include: AllowProfileCreation, SourceLastUpdatedTimestampFormat, Fields, and Keys. For example, if AllowProfileCreation is set to true when TemplateId is set, the service may return a `BadRequestException`.
   *
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * The number of days until the data in the object expires.
   *
   * @public
   */
  ExpirationDays?: number | undefined;

  /**
   * The customer-provided key to encrypt the profile object that will be created in this profile object type.
   *
   * @public
   */
  EncryptionKey?: string | undefined;

  /**
   * Indicates whether a profile should be created when data is received if one doesn’t exist for an object of this type. The default is `FALSE`. If the AllowProfileCreation flag is set to `FALSE`, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to `TRUE`, and if no match is found, then the service creates a new standard profile.
   *
   * @public
   */
  AllowProfileCreation?: boolean | undefined;

  /**
   * The format of your `sourceLastUpdatedTimestamp` that was previously set up.
   *
   * @public
   */
  SourceLastUpdatedTimestampFormat?: string | undefined;

  /**
   * The amount of profile object max count assigned to the object type
   *
   * @public
   */
  MaxProfileObjectCount?: number | undefined;

  /**
   * An integer that determines the priority of this object type when data from multiple sources is ingested. Lower values take priority. Object types without a specified source priority default to the lowest priority.
   *
   * @public
   */
  SourcePriority?: number | undefined;

  /**
   * A map of the name and ObjectType field.
   *
   * @public
   */
  Fields?: Record<string, ObjectTypeField> | undefined;

  /**
   * A list of unique keys that can be used to map data to the profile.
   *
   * @public
   */
  Keys?: Record<string, ObjectTypeKey[]> | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutProfileObjectTypeResponse {
  /**
   * The name of the profile object type.
   *
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * Description of the profile object type.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * A unique identifier for the object template.
   *
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * The number of days until the data in the object expires.
   *
   * @public
   */
  ExpirationDays?: number | undefined;

  /**
   * The customer-provided key to encrypt the profile object that will be created in this profile object type.
   *
   * @public
   */
  EncryptionKey?: string | undefined;

  /**
   * Indicates whether a profile should be created when data is received if one doesn’t exist for an object of this type. The default is `FALSE`. If the AllowProfileCreation flag is set to `FALSE`, then the service tries to fetch a standard profile and associate this object with the profile. If it is set to `TRUE`, and if no match is found, then the service creates a new standard profile.
   *
   * @public
   */
  AllowProfileCreation?: boolean | undefined;

  /**
   * The format of your `sourceLastUpdatedTimestamp` that was previously set up in fields that were parsed using [SimpleDateFormat](https://docs.oracle.com/javase/10/docs/api/java/text/SimpleDateFormat.html). If you have `sourceLastUpdatedTimestamp` in your field, you must set up `sourceLastUpdatedTimestampFormat`.
   *
   * @public
   */
  SourceLastUpdatedTimestampFormat?: string | undefined;

  /**
   * The amount of profile object max count assigned to the object type.
   *
   * @public
   */
  MaxProfileObjectCount?: number | undefined;

  /**
   * The amount of provisioned profile object max count available.
   *
   * @public
   */
  MaxAvailableProfileObjectCount?: number | undefined;

  /**
   * An integer that determines the priority of this object type when data from multiple sources is ingested. Lower values take priority. Object types without a specified source priority default to the lowest priority.
   *
   * @public
   */
  SourcePriority?: number | undefined;

  /**
   * A map of the name and ObjectType field.
   *
   * @public
   */
  Fields?: Record<string, ObjectTypeField> | undefined;

  /**
   * A list of unique keys that can be used to map data to the profile.
   *
   * @public
   */
  Keys?: Record<string, ObjectTypeKey[]> | undefined;

  /**
   * The timestamp of when the domain was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the domain was most recently edited.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutSegmentSubscriptionRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the segment definition.
   *
   * @public
   */
  SegmentDefinitionName: string | undefined;

  /**
   * The optional schedule configuration that controls how often membership snapshots are run. If not provided, the subscription defaults to a 24-hour interval.
   *
   * @public
   */
  ScheduleConfiguration?: ScheduleConfiguration | undefined;
}

/**
 * @public
 */
export interface PutSegmentSubscriptionResponse {
  /**
   * The current lifecycle status of the subscription. The following are valid values:
   *
   * - **STARTING**: Initial snapshot is in progress.
   * - **RUNNING**: Notifications are active and running.
   * - **STOPPED**: Notifications have been stopped.
   * - **FAILED**: Notifications failed (for example, the Amazon Kinesis data stream became inaccessible).
   *
   * @public
   */
  Status?: SegmentSubscriptionStatus | undefined;

  /**
   * The schedule configuration for the subscription, if configured.
   *
   * @public
   */
  ScheduleConfiguration?: ScheduleConfiguration | undefined;

  /**
   * The timestamp of when the subscription was started.
   *
   * @public
   */
  StartedAt?: Date | undefined;
}

/**
 * @public
 */
export interface SearchProfilesRequest {
  /**
   * The pagination token from the previous SearchProfiles API call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of objects returned per page.
   *
   * The default is 20 if this parameter is not included in the request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * A searchable identifier of a customer profile. The predefined keys you can use to search include: _account, _profileId, _assetId, _caseId, _orderId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId, _salesforceAccountId, _salesforceContactId, _salesforceAssetId, _zendeskUserId, _zendeskExternalId, _zendeskTicketId, _serviceNowSystemId, _serviceNowIncidentId, _segmentUserId, _shopifyCustomerId, _shopifyOrderId.
   *
   * @public
   */
  KeyName: string | undefined;

  /**
   * A list of key values.
   *
   * @public
   */
  Values: string[] | undefined;

  /**
   * A list of `AdditionalSearchKey` objects that are each searchable identifiers of a profile. Each `AdditionalSearchKey` object contains a `KeyName` and a list of `Values` associated with that specific key (i.e., a key-value(s) pair). These additional search keys will be used in conjunction with the `LogicalOperator` and the required `KeyName` and `Values` parameters to search for profiles that satisfy the search criteria.
   *
   * @public
   */
  AdditionalSearchKeys?: AdditionalSearchKey[] | undefined;

  /**
   * Relationship between all specified search keys that will be used to search for profiles. This includes the required `KeyName` and `Values` parameters as well as any key-value(s) pairs specified in the `AdditionalSearchKeys` list.
   *
   * This parameter influences which profiles will be returned in the response in the following manner:
   *
   * - `AND` - The response only includes profiles that match all of the search keys.
   * - `OR` - The response includes profiles that match at least one of the search keys.
   *
   * The `OR` relationship is the default behavior if this parameter is not included in the request.
   *
   * @public
   */
  LogicalOperator?: LogicalOperator | undefined;
}

/**
 * @public
 */
export interface SearchProfilesResponse {
  /**
   * The list of Profiles matching the search criteria.
   *
   * @public
   */
  Items?: Profile[] | undefined;

  /**
   * The pagination token from the previous SearchProfiles API call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Configuration for metadata to include in recommendation responses.
 *
 * @public
 */
export interface RecommendationMetadata {
  /**
   * A list of metadata column names from your Items dataset to include in the recommendation response.
   *
   * @public
   */
  Columns?: string[] | undefined;
}

/**
 * The recommender used to generate the recommendations.
 *
 * @public
 */
export interface Recommender {
  /**
   * The unique name of the recommender.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of filters to apply to the returned recommendations. Filters define criteria for including or excluding items from the recommendation results.
   *
   * @public
   */
  Filters?: RecommenderFilter[] | undefined;

  /**
   * A list of promotional filters to apply to the recommendations. Promotional filters allow you to promote specific items within a configurable subset of recommendation results.
   *
   * @public
   */
  PromotionalFilters?: RecommenderPromotionalFilter[] | undefined;
}

/**
 * @public
 */
export interface SearchRecommendationsRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * A searchable identifier of a customer profile. You can use a predefined key, such as `_profileId`, `_phone`, or `_email`, or a custom-defined key.
   *
   * @public
   */
  KeyName: string | undefined;

  /**
   * A list of key values. Provide one value for each field of the search key.
   *
   * @public
   */
  KeyValues: string[] | undefined;

  /**
   * The recommender used to generate the recommendations.
   *
   * @public
   */
  Recommender: Recommender | undefined;

  /**
   * A list of item IDs to rank for the user. Use this when you want to re-rank a specific set of items rather than getting recommendations from the full item catalog. Required for personalized-ranking use cases.
   *
   * @public
   */
  CandidateIds?: string[] | undefined;

  /**
   * The contextual metadata used to provide dynamic runtime information to tailor recommendations.
   *
   * @public
   */
  Context?: Record<string, string> | undefined;

  /**
   * Runtime diversity configuration for this request. Enables diversity-aware recommendations and optionally supplies values for placeholder-based diversity caps configured on the recommender.
   *
   * @public
   */
  Diversity?: RecommendationDiversityConfig | undefined;

  /**
   * Configuration for metadata to include in recommendation responses.
   *
   * @public
   */
  Metadata?: RecommendationMetadata | undefined;

  /**
   * The maximum number of recommendations to return. The default value is 5.
   *
   * @public
   */
  MaxRecommendations?: number | undefined;
}

/**
 * @public
 */
export interface SearchRecommendationsResponse {
  /**
   * The unique identifier of the profile for which to retrieve recommendations.
   *
   * @public
   */
  ProfileId?: string | undefined;

  /**
   * List of recommendations generated by the recommender.
   *
   * @public
   */
  Recommendations?: Recommendation[] | undefined;
}

/**
 * @public
 */
export interface StartRecommenderRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the recommender to start.
   *
   * @public
   */
  RecommenderName: string | undefined;
}

/**
 * @public
 */
export interface StartRecommenderResponse {}

/**
 * @public
 */
export interface StartUploadJobRequest {
  /**
   * The unique name of the domain containing the upload job to start.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique identifier of the upload job to start.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StartUploadJobResponse {}

/**
 * @public
 */
export interface StopRecommenderRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the recommender to stop.
   *
   * @public
   */
  RecommenderName: string | undefined;
}

/**
 * @public
 */
export interface StopRecommenderResponse {}

/**
 * @public
 */
export interface StopUploadJobRequest {
  /**
   * The unique name of the domain containing the upload job to stop.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique identifier of the upload job to stop.
   *
   * @public
   */
  JobId: string | undefined;
}

/**
 * @public
 */
export interface StopUploadJobResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource that you're adding tags to.
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
   * The ARN of the resource from which you are removing tags.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of tag keys to remove from the resource.
   *
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
export interface UpdateCalculatedAttributeDefinitionRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the calculated attribute.
   *
   * @public
   */
  CalculatedAttributeName: string | undefined;

  /**
   * The display name of the calculated attribute.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description of the calculated attribute.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The conditions including range, object count, and threshold for the calculated attribute.
   *
   * @public
   */
  Conditions?: Conditions | undefined;
}

/**
 * @public
 */
export interface UpdateCalculatedAttributeDefinitionResponse {
  /**
   * The unique name of the calculated attribute.
   *
   * @public
   */
  CalculatedAttributeName?: string | undefined;

  /**
   * The display name of the calculated attribute.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The description of the calculated attribute.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The timestamp of when the calculated attribute definition was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the calculated attribute definition was most recently edited.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The aggregation operation to perform for the calculated attribute.
   *
   * @public
   */
  Statistic?: Statistic | undefined;

  /**
   * The conditions including range, object count, and threshold for the calculated attribute.
   *
   * @public
   */
  Conditions?: Conditions | undefined;

  /**
   * The mathematical expression and a list of attribute items specified in that expression.
   *
   * @public
   */
  AttributeDetails?: AttributeDetails | undefined;

  /**
   * Whether historical data ingested before the Calculated Attribute was created should be included in calculations.
   *
   * @public
   */
  UseHistoricalData?: boolean | undefined;

  /**
   * Status of the Calculated Attribute creation (whether all historical data has been indexed.)
   *
   * @public
   */
  Status?: ReadinessStatus | undefined;

  /**
   * Information indicating if the Calculated Attribute is ready for use by confirming all historical data has been processed and reflected.
   *
   * @public
   */
  Readiness?: Readiness | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateDomainRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The default number of days until the data within the domain expires.
   *
   * @public
   */
  DefaultExpirationDays?: number | undefined;

  /**
   * The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage. If specified as an empty string, it will clear any existing value.
   *
   * @public
   */
  DefaultEncryptionKey?: string | undefined;

  /**
   * The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications. If specified as an empty string, it will clear any existing value. You must set up a policy on the DeadLetterQueue for the SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the DeadLetterQueue.
   *
   * @public
   */
  DeadLetterQueueUrl?: string | undefined;

  /**
   * The process of matching duplicate profiles. If `Matching` = `true`, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains.
   *
   * After the Identity Resolution Job completes, use the [GetMatches](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html) API to return and review the results. Or, if you have configured `ExportingConfig` in the `MatchingRequest`, you can download the results from S3.
   *
   * @public
   */
  Matching?: MatchingRequest | undefined;

  /**
   * The process of matching duplicate profiles using the rule-Based matching. If `RuleBasedMatching` = true, Connect Customer Customer Profiles will start to match and merge your profiles according to your configuration in the `RuleBasedMatchingRequest`. You can use the `ListRuleBasedMatches` and `GetSimilarProfiles` API to return and review the results. Also, if you have configured `ExportingConfig` in the `RuleBasedMatchingRequest`, you can download the results from S3.
   *
   * @public
   */
  RuleBasedMatching?: RuleBasedMatchingRequest | undefined;

  /**
   * Set to true to enabled data store for this domain.
   *
   * @public
   */
  DataStore?: DataStoreRequest | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateDomainResponse {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The default number of days until the data within the domain expires.
   *
   * @public
   */
  DefaultExpirationDays?: number | undefined;

  /**
   * The default encryption key, which is an AWS managed key, is used when no specific type of encryption key is specified. It is used to encrypt all data before it is placed in permanent or semi-permanent storage.
   *
   * @public
   */
  DefaultEncryptionKey?: string | undefined;

  /**
   * The URL of the SQS dead letter queue, which is used for reporting errors associated with ingesting data from third party applications.
   *
   * @public
   */
  DeadLetterQueueUrl?: string | undefined;

  /**
   * The process of matching duplicate profiles. If `Matching` = `true`, Amazon Connect Customer Profiles starts a weekly batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every Saturday at 12AM UTC to detect duplicate profiles in your domains.
   *
   * After the Identity Resolution Job completes, use the [GetMatches](https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html) API to return and review the results. Or, if you have configured `ExportingConfig` in the `MatchingRequest`, you can download the results from S3.
   *
   * @public
   */
  Matching?: MatchingResponse | undefined;

  /**
   * The process of matching duplicate profiles using the rule-Based matching. If `RuleBasedMatching` = true, Connect Customer Customer Profiles will start to match and merge your profiles according to your configuration in the `RuleBasedMatchingRequest`. You can use the `ListRuleBasedMatches` and `GetSimilarProfiles` API to return and review the results. Also, if you have configured `ExportingConfig` in the `RuleBasedMatchingRequest`, you can download the results from S3.
   *
   * @public
   */
  RuleBasedMatching?: RuleBasedMatchingResponse | undefined;

  /**
   * The data store.
   *
   * @public
   */
  DataStore?: DataStoreResponse | undefined;

  /**
   * The timestamp of when the domain was created.
   *
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * The timestamp of when the domain was most recently edited.
   *
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateDomainLayoutRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the layout.
   *
   * @public
   */
  LayoutDefinitionName: string | undefined;

  /**
   * The description of the layout
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The display name of the layout
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * If set to true for a layout, this layout will be used by default to view data. If set to false, then the layout will not be used by default, but it can be used to view data by explicitly selecting it in the console.
   *
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * The type of layout that can be used to view data under a Customer Profiles domain.
   *
   * @public
   */
  LayoutType?: LayoutType | undefined;

  /**
   * A customizable layout that can be used to view data under a Customer Profiles domain.
   *
   * @public
   */
  Layout?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainLayoutResponse {
  /**
   * The unique name of the layout.
   *
   * @public
   */
  LayoutDefinitionName?: string | undefined;

  /**
   * The description of the layout
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The display name of the layout
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * If set to true for a layout, this layout will be used by default to view data. If set to false, then the layout will not be used by default, but it can be used to view data by explicitly selecting it in the console.
   *
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * The type of layout that can be used to view data under a Customer Profiles domain.
   *
   * @public
   */
  LayoutType?: LayoutType | undefined;

  /**
   * A customizable layout that can be used to view data under a Customer Profiles domain.
   *
   * @public
   */
  Layout?: string | undefined;

  /**
   * The version used to create layout.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The timestamp of when the layout was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the layout was most recently updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateEventTriggerRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique name of the event trigger.
   *
   * @public
   */
  EventTriggerName: string | undefined;

  /**
   * The unique name of the object type.
   *
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * The description of the event trigger.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of conditions that determine when an event should trigger the destination.
   *
   * @public
   */
  EventTriggerConditions?: EventTriggerCondition[] | undefined;

  /**
   * The destination is triggered only for profiles that meet the criteria of a segment definition.
   *
   * @public
   */
  SegmentFilter?: string | undefined;

  /**
   * Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.
   *
   * @public
   */
  EventTriggerLimits?: EventTriggerLimits | undefined;
}

/**
 * @public
 */
export interface UpdateEventTriggerResponse {
  /**
   * The unique name of the event trigger.
   *
   * @public
   */
  EventTriggerName?: string | undefined;

  /**
   * The unique name of the object type.
   *
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * The description of the event trigger.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of conditions that determine when an event should trigger the destination.
   *
   * @public
   */
  EventTriggerConditions?: EventTriggerCondition[] | undefined;

  /**
   * The destination is triggered only for profiles that meet the criteria of a segment definition.
   *
   * @public
   */
  SegmentFilter?: string | undefined;

  /**
   * Defines limits controlling whether an event triggers the destination, based on ingestion latency and the number of invocations per profile over specific time periods.
   *
   * @public
   */
  EventTriggerLimits?: EventTriggerLimits | undefined;

  /**
   * The timestamp of when the event trigger was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The timestamp of when the event trigger was most recently updated.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * An array of key-value pairs to apply to this resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Updates associated with the address properties of a customer profile.
 *
 * @public
 */
export interface UpdateAddress {
  /**
   * The first line of a customer address.
   *
   * @public
   */
  Address1?: string | undefined;

  /**
   * The second line of a customer address.
   *
   * @public
   */
  Address2?: string | undefined;

  /**
   * The third line of a customer address.
   *
   * @public
   */
  Address3?: string | undefined;

  /**
   * The fourth line of a customer address.
   *
   * @public
   */
  Address4?: string | undefined;

  /**
   * The city in which a customer lives.
   *
   * @public
   */
  City?: string | undefined;

  /**
   * The county in which a customer lives.
   *
   * @public
   */
  County?: string | undefined;

  /**
   * The state in which a customer lives.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The province in which a customer lives.
   *
   * @public
   */
  Province?: string | undefined;

  /**
   * The country in which a customer lives.
   *
   * @public
   */
  Country?: string | undefined;

  /**
   * The postal code of a customer address.
   *
   * @public
   */
  PostalCode?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProfileRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The unique identifier of a customer profile.
   *
   * @public
   */
  ProfileId: string | undefined;

  /**
   * Any additional information relevant to the customer’s profile.
   *
   * @public
   */
  AdditionalInformation?: string | undefined;

  /**
   * An account number that you have assigned to the customer.
   *
   * @public
   */
  AccountNumber?: string | undefined;

  /**
   * The type of profile used to describe the customer.
   *
   * @deprecated deprecated.
   * @public
   */
  PartyType?: PartyType | undefined;

  /**
   * The name of the customer’s business.
   *
   * @public
   */
  BusinessName?: string | undefined;

  /**
   * The customer’s first name.
   *
   * @public
   */
  FirstName?: string | undefined;

  /**
   * The customer’s middle name.
   *
   * @public
   */
  MiddleName?: string | undefined;

  /**
   * The customer’s last name.
   *
   * @public
   */
  LastName?: string | undefined;

  /**
   * The customer’s birth date.
   *
   * @public
   */
  BirthDate?: string | undefined;

  /**
   * The gender with which the customer identifies.
   *
   * @deprecated deprecated.
   * @public
   */
  Gender?: Gender | undefined;

  /**
   * The customer’s phone number, which has not been specified as a mobile, home, or business number.
   *
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * The customer’s mobile phone number.
   *
   * @public
   */
  MobilePhoneNumber?: string | undefined;

  /**
   * The customer’s home phone number.
   *
   * @public
   */
  HomePhoneNumber?: string | undefined;

  /**
   * The customer’s business phone number.
   *
   * @public
   */
  BusinessPhoneNumber?: string | undefined;

  /**
   * The customer’s email address, which has not been specified as a personal or business address.
   *
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * The customer’s personal email address.
   *
   * @public
   */
  PersonalEmailAddress?: string | undefined;

  /**
   * The customer’s business email address.
   *
   * @public
   */
  BusinessEmailAddress?: string | undefined;

  /**
   * A generic address associated with the customer that is not mailing, shipping, or billing.
   *
   * @public
   */
  Address?: UpdateAddress | undefined;

  /**
   * The customer’s shipping address.
   *
   * @public
   */
  ShippingAddress?: UpdateAddress | undefined;

  /**
   * The customer’s mailing address.
   *
   * @public
   */
  MailingAddress?: UpdateAddress | undefined;

  /**
   * The customer’s billing address.
   *
   * @public
   */
  BillingAddress?: UpdateAddress | undefined;

  /**
   * A key value pair of attributes of a customer profile.
   *
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * An alternative to `PartyType` which accepts any string as input.
   *
   * @public
   */
  PartyTypeString?: string | undefined;

  /**
   * An alternative to `Gender` which accepts any string as input.
   *
   * @public
   */
  GenderString?: string | undefined;

  /**
   * Determines the type of the profile.
   *
   * @public
   */
  ProfileType?: ProfileType | undefined;

  /**
   * Object that defines users preferred methods of engagement.
   *
   * @public
   */
  EngagementPreferences?: EngagementPreferences | undefined;
}

/**
 * @public
 */
export interface UpdateProfileResponse {
  /**
   * The unique identifier of a customer profile.
   *
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @public
 */
export interface UpdateRecommenderRequest {
  /**
   * The unique name of the domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the recommender to update.
   *
   * @public
   */
  RecommenderName: string | undefined;

  /**
   * The new description to assign to the recommender.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The new configuration settings to apply to the recommender, including updated parameters and settings that define its behavior.
   *
   * @public
   */
  RecommenderConfig?: RecommenderConfig | undefined;

  /**
   * The name of a specific recommender version to activate as part of this update (for example, to roll back to a previously trained version).
   *
   * @public
   */
  RecommenderVersionName?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRecommenderResponse {
  /**
   * The name of the recommender that was updated.
   *
   * @public
   */
  RecommenderName: string | undefined;
}
