// smithy-typescript generated code
import {
  AdminAccount,
  AllowListCriteria,
  AutomatedDiscoveryStatus,
  ClassificationExportConfiguration,
  ClassificationScopeUpdateOperation,
  Detection,
  FindingCriteria,
  FindingPublishingFrequency,
  FindingsFilterAction,
  Invitation,
  JobStatus,
  MacieStatus,
  ManagedDataIdentifierSummary,
  MatchingResource,
  Member,
  OrderBy,
  ResourceProfileArtifact,
  RevealConfiguration,
  SearchResourcesCriteria,
  SecurityHubConfiguration,
  SensitivityInspectionTemplateExcludes,
  SensitivityInspectionTemplateIncludes,
  SensitivityInspectionTemplatesEntry,
  SuppressDataIdentifier,
} from "./models_0";

export interface ListInvitationsRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;
}

export interface ListInvitationsResponse {
  /**
   * <p>An array of objects, one for each invitation that was received by the account.</p>
   */
  invitations?: Invitation[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export interface ListManagedDataIdentifiersRequest {
  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;
}

export interface ListManagedDataIdentifiersResponse {
  /**
   * <p>An array of objects, one for each managed data identifier.</p>
   */
  items?: ManagedDataIdentifierSummary[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export interface ListMembersRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies which accounts to include in the response, based on the status of an account's relationship with the administrator account. By default, the response includes only current member accounts. To include all accounts, set this value to false.</p>
   */
  onlyAssociated?: string;
}

export interface ListMembersResponse {
  /**
   * <p>An array of objects, one for each account that's associated with the administrator account and matches the criteria specified in the request.</p>
   */
  members?: Member[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export interface ListOrganizationAdminAccountsRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;
}

export interface ListOrganizationAdminAccountsResponse {
  /**
   * <p>An array of objects, one for each delegated Amazon Macie administrator account for the organization. Only one of these accounts can have a status of ENABLED.</p>
   */
  adminAccounts?: AdminAccount[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export interface ListResourceProfileArtifactsRequest {
  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.</p>
   */
  resourceArn: string | undefined;
}

export interface ListResourceProfileArtifactsResponse {
  /**
   * <p>An array of objects, one for each S3 object that Amazon Macie selected for analysis.</p>
   */
  artifacts?: ResourceProfileArtifact[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export interface ListResourceProfileDetectionsRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.</p>
   */
  resourceArn: string | undefined;
}

export interface ListResourceProfileDetectionsResponse {
  /**
   * <p>An array of objects, one for each type of sensitive data that Amazon Macie found in the bucket. Each object reports the number of occurrences of the specified type and provides information about the custom data identifier or managed data identifier that detected the data.</p>
   */
  detections?: Detection[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export interface ListSensitivityInspectionTemplatesRequest {
  /**
   * <p>The maximum number of items to include in each page of a paginated response.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;
}

export interface ListSensitivityInspectionTemplatesResponse {
  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;

  /**
   * <p>An array that specifies the unique identifier and name of the sensitivity inspection template for the account.</p>
   */
  sensitivityInspectionTemplates?: SensitivityInspectionTemplatesEntry[];
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A map of key-value pairs that specifies which tags (keys and values) are associated with the resource.</p>
   */
  tags?: Record<string, string>;
}

export interface PutClassificationExportConfigurationRequest {
  /**
   * <p>The location to store data classification results in, and the encryption settings to use when storing results in that location.</p>
   */
  configuration: ClassificationExportConfiguration | undefined;
}

export interface PutClassificationExportConfigurationResponse {
  /**
   * <p>The location where the data classification results are stored, and the encryption settings that are used when storing results in that location.</p>
   */
  configuration?: ClassificationExportConfiguration;
}

export interface PutFindingsPublicationConfigurationRequest {
  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>The configuration settings that determine which findings to publish to Security Hub.</p>
   */
  securityHubConfiguration?: SecurityHubConfiguration;
}

export interface PutFindingsPublicationConfigurationResponse {}

/**
 * <p>Specifies property- and tag-based conditions that define filter criteria for including or excluding Amazon Web Services resources from the query results.</p>
 */
export interface SearchResourcesCriteriaBlock {
  /**
   * <p>An array of objects, one for each property- or tag-based condition that includes or excludes resources from the query results. If you specify more than one condition, Amazon Macie uses AND logic to join the conditions.</p>
   */
  and?: SearchResourcesCriteria[];
}

/**
 * <p>Specifies property- and tag-based conditions that define filter criteria for including or excluding S3 buckets from the query results. Exclude conditions take precedence over include conditions.</p>
 */
export interface SearchResourcesBucketCriteria {
  /**
   * <p>The property- and tag-based conditions that determine which buckets to exclude from the results.</p>
   */
  excludes?: SearchResourcesCriteriaBlock;

  /**
   * <p>The property- and tag-based conditions that determine which buckets to include in the results.</p>
   */
  includes?: SearchResourcesCriteriaBlock;
}

export enum SearchResourcesSortAttributeName {
  ACCOUNT_ID = "ACCOUNT_ID",
  RESOURCE_NAME = "RESOURCE_NAME",
  S3_CLASSIFIABLE_OBJECT_COUNT = "S3_CLASSIFIABLE_OBJECT_COUNT",
  S3_CLASSIFIABLE_SIZE_IN_BYTES = "S3_CLASSIFIABLE_SIZE_IN_BYTES",
}

/**
 * <p>Specifies criteria for sorting the results of a query for information about Amazon Web Services resources that Amazon Macie monitors and analyzes.</p>
 */
export interface SearchResourcesSortCriteria {
  /**
   * <p>The property to sort the results by.</p>
   */
  attributeName?: SearchResourcesSortAttributeName | string;

  /**
   * <p>The sort order to apply to the results, based on the value for the property specified by the attributeName property. Valid values are: ASC, sort the results in ascending order; and, DESC, sort the results in descending order.</p>
   */
  orderBy?: OrderBy | string;
}

export interface SearchResourcesRequest {
  /**
   * <p>The filter conditions that determine which S3 buckets to include or exclude from the query results.</p>
   */
  bucketCriteria?: SearchResourcesBucketCriteria;

  /**
   * <p>The maximum number of items to include in each page of the response. The default value is 50.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken string that specifies which page of results to return in a paginated response.</p>
   */
  nextToken?: string;

  /**
   * <p>The criteria to use to sort the results.</p>
   */
  sortCriteria?: SearchResourcesSortCriteria;
}

export interface SearchResourcesResponse {
  /**
   * <p>An array of objects, one for each resource that matches the filter criteria specified in the request.</p>
   */
  matchingResources?: MatchingResource[];

  /**
   * <p>The string to use in a subsequent request to get the next page of results in a paginated response. This value is null if there are no additional pages.</p>
   */
  nextToken?: string;
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A map of key-value pairs that specifies the tags to associate with the resource.</p> <p>A resource can have a maximum of 50 tags. Each tag consists of a tag key and an associated tag value. The maximum length of a tag key is 128 characters. The maximum length of a tag value is 256 characters.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface TestCustomDataIdentifierRequest {
  /**
   * <p>An array that lists specific character sequences (<i>ignore words</i>) to exclude from the results. If the text matched by the regular expression contains any string in this array, Amazon Macie ignores it. The array can contain as many as 10 ignore words. Each ignore word can contain 4-90 UTF-8 characters. Ignore words are case sensitive.</p>
   */
  ignoreWords?: string[];

  /**
   * <p>An array that lists specific character sequences (<i>keywords</i>), one of which must precede and be within proximity (maximumMatchDistance) of the regular expression to match. The array can contain as many as 50 keywords. Each keyword can contain 3-90 UTF-8 characters. Keywords aren't case sensitive.</p>
   */
  keywords?: string[];

  /**
   * <p>The maximum number of characters that can exist between the end of at least one complete character sequence specified by the keywords array and the end of the text that matches the regex pattern. If a complete keyword precedes all the text that matches the pattern and the keyword is within the specified distance, Amazon Macie includes the result. The distance can be 1-300 characters. The default value is 50.</p>
   */
  maximumMatchDistance?: number;

  /**
   * <p>The regular expression (<i>regex</i>) that defines the pattern to match. The expression can contain as many as 512 characters.</p>
   */
  regex: string | undefined;

  /**
   * <p>The sample text to inspect by using the custom data identifier. The text can contain as many as 1,000 characters.</p>
   */
  sampleText: string | undefined;
}

export interface TestCustomDataIdentifierResponse {
  /**
   * <p>The number of occurrences of sample text that matched the criteria specified by the custom data identifier.</p>
   */
  matchCount?: number;
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>One or more tags (keys) to remove from the resource. In an HTTP request to remove multiple tags, append the tagKeys parameter and argument for each tag to remove, separated by an ampersand (&amp;).</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateAllowListRequest {
  /**
   * <p>The criteria that specify the text or text pattern to ignore. The criteria can be the location and name of an S3 object that lists specific text to ignore (s3WordsList), or a regular expression that defines a text pattern to ignore (regex).</p> <p>You can change a list's underlying criteria, such as the name of the S3 object or the regular expression to use. However, you can't change the type from s3WordsList to regex or the other way around.</p>
   */
  criteria: AllowListCriteria | undefined;

  /**
   * <p>A custom description of the allow list. The description can contain as many as 512 characters.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   */
  id: string | undefined;

  /**
   * <p>A custom name for the allow list. The name can contain as many as 128 characters.</p>
   */
  name: string | undefined;
}

export interface UpdateAllowListResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the allow list.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the allow list.</p>
   */
  id?: string;
}

export interface UpdateAutomatedDiscoveryConfigurationRequest {
  /**
   * <p>The new status of automated sensitive data discovery for the account. Valid values are: ENABLED, start or resume automated sensitive data discovery activities for the account; and, DISABLED, stop performing automated sensitive data discovery activities for the account.</p> <p>When you enable automated sensitive data discovery for the first time, Amazon Macie uses default configuration settings to determine which data sources to analyze and which managed data identifiers to use. To change these settings, use the UpdateClassificationScope and UpdateSensitivityInspectionTemplate operations, respectively. If you change the settings and subsequently disable the configuration, Amazon Macie retains your changes.</p>
   */
  status: AutomatedDiscoveryStatus | string | undefined;
}

export interface UpdateAutomatedDiscoveryConfigurationResponse {}

export interface UpdateClassificationJobRequest {
  /**
   * <p>The unique identifier for the classification job.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The new status for the job. Valid values are:</p> <ul><li><p>CANCELLED - Stops the job permanently and cancels it. This value is valid only if the job's current status is IDLE, PAUSED, RUNNING, or USER_PAUSED.</p> <p>If you specify this value and the job's current status is RUNNING, Amazon Macie immediately begins to stop all processing tasks for the job. You can't resume or restart a job after you cancel it.</p></li> <li><p>RUNNING - Resumes the job. This value is valid only if the job's current status is USER_PAUSED.</p> <p>If you paused the job while it was actively running and you specify this value less than 30 days after you paused the job, Macie immediately resumes processing from the point where you paused the job. Otherwise, Macie resumes the job according to the schedule and other settings for the job.</p></li> <li><p>USER_PAUSED - Pauses the job temporarily. This value is valid only if the job's current status is IDLE, PAUSED, or RUNNING. If you specify this value and the job's current status is RUNNING, Macie immediately begins to pause all processing tasks for the job.</p> <p>If you pause a one-time job and you don't resume it within 30 days, the job expires and Macie cancels the job. If you pause a recurring job when its status is RUNNING and you don't resume it within 30 days, the job run expires and Macie cancels the run. To check the expiration date, refer to the UserPausedDetails.jobExpiresAt property.</p></li></ul>
   */
  jobStatus: JobStatus | string | undefined;
}

export interface UpdateClassificationJobResponse {}

/**
 * <p>Specifies S3 buckets to add or remove from the exclusion list defined by the classification scope for an Amazon Macie account.</p>
 */
export interface S3ClassificationScopeExclusionUpdate {
  /**
   * <p>Depending on the value specified for the update operation (ClassificationScopeUpdateOperation), an array of strings that: lists the names of buckets to add or remove from the list, or specifies a new set of bucket names that overwrites all existing names in the list. Each string must be the full name of an S3 bucket. Values are case sensitive.</p>
   */
  bucketNames: string[] | undefined;

  /**
   * <p>Specifies how to apply the changes to the exclusion list. Valid values are:</p> <ul><li><p>ADD - Append the specified bucket names to the current list.</p></li> <li><p>REMOVE - Remove the specified bucket names from the current list.</p></li> <li><p>REPLACE - Overwrite the current list with the specified list of bucket names. If you specify this value, Amazon Macie removes all existing names from the list and adds all the specified names to the list.</p></li></ul>
   */
  operation: ClassificationScopeUpdateOperation | string | undefined;
}

/**
 * <p>Specifies changes to the list of S3 buckets that are excluded from automated sensitive data discovery for an Amazon Macie account.</p>
 */
export interface S3ClassificationScopeUpdate {
  /**
   * <p>The names of the S3 buckets to add or remove from the list.</p>
   */
  excludes: S3ClassificationScopeExclusionUpdate | undefined;
}

export interface UpdateClassificationScopeRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   */
  id: string | undefined;

  /**
   * <p>The S3 buckets to add or remove from the exclusion list defined by the classification scope.</p>
   */
  s3?: S3ClassificationScopeUpdate;
}

export interface UpdateClassificationScopeResponse {}

export interface UpdateFindingsFilterRequest {
  /**
   * <p>The action to perform on findings that match the filter criteria (findingCriteria). Valid values are: ARCHIVE, suppress (automatically archive) the findings; and, NOOP, don't perform any action on the findings.</p>
   */
  action?: FindingsFilterAction | string;

  /**
   * <p>A unique, case-sensitive token that you provide to ensure the idempotency of the request.</p>
   */
  clientToken?: string;

  /**
   * <p>A custom description of the filter. The description can contain as many as 512 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the description of a filter. Other users might be able to see this description, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  description?: string;

  /**
   * <p>The criteria to use to filter findings.</p>
   */
  findingCriteria?: FindingCriteria;

  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   */
  id: string | undefined;

  /**
   * <p>A custom name for the filter. The name must contain at least 3 characters and can contain as many as 64 characters.</p> <p>We strongly recommend that you avoid including any sensitive data in the name of a filter. Other users might be able to see this name, depending on the actions that they're allowed to perform in Amazon Macie.</p>
   */
  name?: string;

  /**
   * <p>The position of the filter in the list of saved filters on the Amazon Macie console. This value also determines the order in which the filter is applied to findings, relative to other filters that are also applied to the findings.</p>
   */
  position?: number;
}

export interface UpdateFindingsFilterResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the filter that was updated.</p>
   */
  arn?: string;

  /**
   * <p>The unique identifier for the filter that was updated.</p>
   */
  id?: string;
}

export interface UpdateMacieSessionRequest {
  /**
   * <p>Specifies how often to publish updates to policy findings for the account. This includes publishing updates to Security Hub and Amazon EventBridge (formerly Amazon CloudWatch Events).</p>
   */
  findingPublishingFrequency?: FindingPublishingFrequency | string;

  /**
   * <p>Specifies a new status for the account. Valid values are: ENABLED, resume all Amazon Macie activities for the account; and, PAUSED, suspend all Macie activities for the account.</p>
   */
  status?: MacieStatus | string;
}

export interface UpdateMacieSessionResponse {}

export interface UpdateMemberSessionRequest {
  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   */
  id: string | undefined;

  /**
   * <p>Specifies the new status for the account. Valid values are: ENABLED, resume all Amazon Macie activities for the account; and, PAUSED, suspend all Macie activities for the account.</p>
   */
  status: MacieStatus | string | undefined;
}

export interface UpdateMemberSessionResponse {}

export interface UpdateOrganizationConfigurationRequest {
  /**
   * <p>Specifies whether to enable Amazon Macie automatically for an account when the account is added to the organization in Organizations.</p>
   */
  autoEnable: boolean | undefined;
}

export interface UpdateOrganizationConfigurationResponse {}

export interface UpdateResourceProfileRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The new sensitivity score for the bucket. Valid values are: 100, assign the maximum score and apply the <i>Sensitive</i> label to the bucket; and, null (empty), assign a score that Amazon Macie calculates automatically after you submit the request.</p>
   */
  sensitivityScoreOverride?: number;
}

export interface UpdateResourceProfileResponse {}

export interface UpdateResourceProfileDetectionsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the S3 bucket that the request applies to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>An array of objects, one for each custom data identifier or managed data identifier that detected the type of sensitive data to start excluding or including in the bucket's score. To start including all sensitive data types in the score, don't specify any values for this array.</p>
   */
  suppressDataIdentifiers?: SuppressDataIdentifier[];
}

export interface UpdateResourceProfileDetectionsResponse {}

export interface UpdateRevealConfigurationRequest {
  /**
   * <p>The new configuration settings and the status of the configuration for the account.</p>
   */
  configuration: RevealConfiguration | undefined;
}

export interface UpdateRevealConfigurationResponse {
  /**
   * <p>The new configuration settings and the status of the configuration for the account.</p>
   */
  configuration?: RevealConfiguration;
}

export interface UpdateSensitivityInspectionTemplateRequest {
  /**
   * <p>A custom description of the template.</p>
   */
  description?: string;

  /**
   * <p>The managed data identifiers to explicitly exclude (not use) when analyzing data.</p> <p>To exclude an allow list or custom data identifier that's currently included by the template, update the values for the SensitivityInspectionTemplateIncludes.allowListIds and SensitivityInspectionTemplateIncludes.customDataIdentifierIds properties, respectively.</p>
   */
  excludes?: SensitivityInspectionTemplateExcludes;

  /**
   * <p>The unique identifier for the Amazon Macie resource that the request applies to.</p>
   */
  id: string | undefined;

  /**
   * <p>The allow lists, custom data identifiers, and managed data identifiers to include (use) when analyzing data.</p>
   */
  includes?: SensitivityInspectionTemplateIncludes;
}

export interface UpdateSensitivityInspectionTemplateResponse {}

/**
 * @internal
 */
export const ListInvitationsRequestFilterSensitiveLog = (obj: ListInvitationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListInvitationsResponseFilterSensitiveLog = (obj: ListInvitationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListManagedDataIdentifiersRequestFilterSensitiveLog = (obj: ListManagedDataIdentifiersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListManagedDataIdentifiersResponseFilterSensitiveLog = (obj: ListManagedDataIdentifiersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMembersRequestFilterSensitiveLog = (obj: ListMembersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMembersResponseFilterSensitiveLog = (obj: ListMembersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOrganizationAdminAccountsRequestFilterSensitiveLog = (
  obj: ListOrganizationAdminAccountsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListOrganizationAdminAccountsResponseFilterSensitiveLog = (
  obj: ListOrganizationAdminAccountsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceProfileArtifactsRequestFilterSensitiveLog = (
  obj: ListResourceProfileArtifactsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceProfileArtifactsResponseFilterSensitiveLog = (
  obj: ListResourceProfileArtifactsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceProfileDetectionsRequestFilterSensitiveLog = (
  obj: ListResourceProfileDetectionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListResourceProfileDetectionsResponseFilterSensitiveLog = (
  obj: ListResourceProfileDetectionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSensitivityInspectionTemplatesRequestFilterSensitiveLog = (
  obj: ListSensitivityInspectionTemplatesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSensitivityInspectionTemplatesResponseFilterSensitiveLog = (
  obj: ListSensitivityInspectionTemplatesResponse
): any => ({
  ...obj,
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
export const PutClassificationExportConfigurationRequestFilterSensitiveLog = (
  obj: PutClassificationExportConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutClassificationExportConfigurationResponseFilterSensitiveLog = (
  obj: PutClassificationExportConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutFindingsPublicationConfigurationRequestFilterSensitiveLog = (
  obj: PutFindingsPublicationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutFindingsPublicationConfigurationResponseFilterSensitiveLog = (
  obj: PutFindingsPublicationConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchResourcesCriteriaBlockFilterSensitiveLog = (obj: SearchResourcesCriteriaBlock): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchResourcesBucketCriteriaFilterSensitiveLog = (obj: SearchResourcesBucketCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchResourcesSortCriteriaFilterSensitiveLog = (obj: SearchResourcesSortCriteria): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchResourcesRequestFilterSensitiveLog = (obj: SearchResourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchResourcesResponseFilterSensitiveLog = (obj: SearchResourcesResponse): any => ({
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
export const TestCustomDataIdentifierRequestFilterSensitiveLog = (obj: TestCustomDataIdentifierRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestCustomDataIdentifierResponseFilterSensitiveLog = (obj: TestCustomDataIdentifierResponse): any => ({
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

/**
 * @internal
 */
export const UpdateAllowListRequestFilterSensitiveLog = (obj: UpdateAllowListRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAllowListResponseFilterSensitiveLog = (obj: UpdateAllowListResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAutomatedDiscoveryConfigurationRequestFilterSensitiveLog = (
  obj: UpdateAutomatedDiscoveryConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAutomatedDiscoveryConfigurationResponseFilterSensitiveLog = (
  obj: UpdateAutomatedDiscoveryConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClassificationJobRequestFilterSensitiveLog = (obj: UpdateClassificationJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClassificationJobResponseFilterSensitiveLog = (obj: UpdateClassificationJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ClassificationScopeExclusionUpdateFilterSensitiveLog = (
  obj: S3ClassificationScopeExclusionUpdate
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3ClassificationScopeUpdateFilterSensitiveLog = (obj: S3ClassificationScopeUpdate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClassificationScopeRequestFilterSensitiveLog = (obj: UpdateClassificationScopeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateClassificationScopeResponseFilterSensitiveLog = (obj: UpdateClassificationScopeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFindingsFilterRequestFilterSensitiveLog = (obj: UpdateFindingsFilterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateFindingsFilterResponseFilterSensitiveLog = (obj: UpdateFindingsFilterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMacieSessionRequestFilterSensitiveLog = (obj: UpdateMacieSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMacieSessionResponseFilterSensitiveLog = (obj: UpdateMacieSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMemberSessionRequestFilterSensitiveLog = (obj: UpdateMemberSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateMemberSessionResponseFilterSensitiveLog = (obj: UpdateMemberSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateOrganizationConfigurationRequestFilterSensitiveLog = (
  obj: UpdateOrganizationConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateOrganizationConfigurationResponseFilterSensitiveLog = (
  obj: UpdateOrganizationConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResourceProfileRequestFilterSensitiveLog = (obj: UpdateResourceProfileRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResourceProfileResponseFilterSensitiveLog = (obj: UpdateResourceProfileResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResourceProfileDetectionsRequestFilterSensitiveLog = (
  obj: UpdateResourceProfileDetectionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResourceProfileDetectionsResponseFilterSensitiveLog = (
  obj: UpdateResourceProfileDetectionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRevealConfigurationRequestFilterSensitiveLog = (obj: UpdateRevealConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRevealConfigurationResponseFilterSensitiveLog = (obj: UpdateRevealConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSensitivityInspectionTemplateRequestFilterSensitiveLog = (
  obj: UpdateSensitivityInspectionTemplateRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSensitivityInspectionTemplateResponseFilterSensitiveLog = (
  obj: UpdateSensitivityInspectionTemplateResponse
): any => ({
  ...obj,
});
