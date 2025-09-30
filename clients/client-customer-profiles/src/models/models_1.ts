// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  AdditionalSearchKey,
  AttributeDetails,
  Conditions,
  EngagementPreferences,
  EventTriggerCondition,
  EventTriggerLimits,
  FieldSourceProfileIds,
  FlowDefinition,
  Gender,
  LayoutType,
  MatchingRequest,
  MatchingResponse,
  ObjectTypeField,
  ObjectTypeKey,
  PartyType,
  Profile,
  ProfileFilterSensitiveLog,
  ProfileType,
  Readiness,
  ReadinessStatus,
  RuleBasedMatchingRequest,
  RuleBasedMatchingResponse,
  Statistic,
} from "./models_0";

/**
 * @public
 */
export interface MergeProfilesRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The identifier of the profile to be taken.</p>
   * @public
   */
  MainProfileId: string | undefined;

  /**
   * <p>The identifier of the profile to be merged into MainProfileId.</p>
   * @public
   */
  ProfileIdsToBeMerged: string[] | undefined;

  /**
   * <p>The identifiers of the fields in the profile that has the information you want to apply
   *          to the merge. For example, say you want to merge EmailAddress from Profile1 into
   *          MainProfile. This would be the identifier of the EmailAddress field in Profile1. </p>
   * @public
   */
  FieldSourceProfileIds?: FieldSourceProfileIds | undefined;
}

/**
 * @public
 */
export interface MergeProfilesResponse {
  /**
   * <p>A message that indicates the merge request is complete.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface PutIntegrationRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The URI of the S3 bucket or any other type of data source.</p>
   * @public
   */
  Uri?: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The configuration that controls how Customer Profiles retrieves data from the
   *          source.</p>
   * @public
   */
  FlowDefinition?: FlowDefinition | undefined;

  /**
   * <p>A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an <code>ObjectTypeName</code> (template) used to ingest the event.
   * It supports the following event types: <code>SegmentIdentify</code>, <code>ShopifyCreateCustomers</code>, <code>ShopifyUpdateCustomers</code>, <code>ShopifyCreateDraftOrders</code>,
   * <code>ShopifyUpdateDraftOrders</code>, <code>ShopifyCreateOrders</code>, and <code>ShopifyUpdatedOrders</code>.</p>
   * @public
   */
  ObjectTypeNames?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. The Integration uses this role to make
   *          Customer Profiles requests on your behalf.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>A list of unique names for active event triggers associated with the integration.</p>
   * @public
   */
  EventTriggerNames?: string[] | undefined;
}

/**
 * @public
 */
export interface PutIntegrationResponse {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The URI of the S3 bucket or any other type of data source.</p>
   * @public
   */
  Uri: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * <p>The timestamp of when the domain was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A map in which each key is an event type from an external application such as Segment or Shopify, and each value is an <code>ObjectTypeName</code> (template) used to ingest the event.
   * It supports the following event types: <code>SegmentIdentify</code>, <code>ShopifyCreateCustomers</code>, <code>ShopifyUpdateCustomers</code>, <code>ShopifyCreateDraftOrders</code>,
   * <code>ShopifyUpdateDraftOrders</code>, <code>ShopifyCreateOrders</code>, and <code>ShopifyUpdatedOrders</code>.</p>
   * @public
   */
  ObjectTypeNames?: Record<string, string> | undefined;

  /**
   * <p>Unique identifier for the workflow.</p>
   * @public
   */
  WorkflowId?: string | undefined;

  /**
   * <p>Boolean that shows if the Flow that's associated with the Integration is created in
   *          Amazon Appflow, or with ObjectTypeName equals _unstructured via API/CLI in
   *          flowDefinition.</p>
   * @public
   */
  IsUnstructured?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role. The Integration uses this role to make
   *          Customer Profiles requests on your behalf.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>A list of unique names for active event triggers associated with the integration. This
   *          list would be empty if no Event Trigger is associated with the integration.</p>
   * @public
   */
  EventTriggerNames?: string[] | undefined;
}

/**
 * @public
 */
export interface PutProfileObjectRequest {
  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>A string that is serialized from a JSON object.</p>
   * @public
   */
  Object: string | undefined;

  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface PutProfileObjectResponse {
  /**
   * <p>The unique identifier of the profile object generated by the service.</p>
   * @public
   */
  ProfileObjectUniqueKey?: string | undefined;
}

/**
 * @public
 */
export interface PutProfileObjectTypeRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>Description of the profile object type.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>A unique identifier for the object template. For some attributes in the request, the
   *          service will use the default value from the object template when TemplateId is present. If
   *          these attributes are present in the request, the service may return a
   *             <code>BadRequestException</code>. These attributes include: AllowProfileCreation,
   *          SourceLastUpdatedTimestampFormat, Fields, and Keys. For example, if AllowProfileCreation is
   *          set to true when TemplateId is set, the service may return a
   *             <code>BadRequestException</code>.</p>
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * <p>The number of days until the data in the object expires.</p>
   * @public
   */
  ExpirationDays?: number | undefined;

  /**
   * <p>The customer-provided key to encrypt the profile object that will be created in this
   *          profile object type.</p>
   * @public
   */
  EncryptionKey?: string | undefined;

  /**
   * <p>Indicates whether a profile should be created when data is received if one doesn’t exist
   *          for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation
   *          flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and
   *          associate this object with the profile. If it is set to <code>TRUE</code>, and if no match
   *          is found, then the service creates a new standard profile.</p>
   * @public
   */
  AllowProfileCreation?: boolean | undefined;

  /**
   * <p>The format of your <code>sourceLastUpdatedTimestamp</code> that was previously set up.
   *       </p>
   * @public
   */
  SourceLastUpdatedTimestampFormat?: string | undefined;

  /**
   * <p>The amount of profile object max count assigned to the object type</p>
   * @public
   */
  MaxProfileObjectCount?: number | undefined;

  /**
   * <p>A map of the name and ObjectType field.</p>
   * @public
   */
  Fields?: Record<string, ObjectTypeField> | undefined;

  /**
   * <p>A list of unique keys that can be used to map data to the profile.</p>
   * @public
   */
  Keys?: Record<string, ObjectTypeKey[]> | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutProfileObjectTypeResponse {
  /**
   * <p>The name of the profile object type.</p>
   * @public
   */
  ObjectTypeName: string | undefined;

  /**
   * <p>Description of the profile object type.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>A unique identifier for the object template.</p>
   * @public
   */
  TemplateId?: string | undefined;

  /**
   * <p>The number of days until the data in the object expires.</p>
   * @public
   */
  ExpirationDays?: number | undefined;

  /**
   * <p>The customer-provided key to encrypt the profile object that will be created in this
   *          profile object type.</p>
   * @public
   */
  EncryptionKey?: string | undefined;

  /**
   * <p>Indicates whether a profile should be created when data is received if one doesn’t exist
   *          for an object of this type. The default is <code>FALSE</code>. If the AllowProfileCreation
   *          flag is set to <code>FALSE</code>, then the service tries to fetch a standard profile and
   *          associate this object with the profile. If it is set to <code>TRUE</code>, and if no match
   *          is found, then the service creates a new standard profile.</p>
   * @public
   */
  AllowProfileCreation?: boolean | undefined;

  /**
   * <p>The format of your <code>sourceLastUpdatedTimestamp</code> that was previously set up in
   *          fields that were parsed using <a href="https://docs.oracle.com/javase/10/docs/api/java/text/SimpleDateFormat.html">SimpleDateFormat</a>. If you have <code>sourceLastUpdatedTimestamp</code> in your
   *          field, you must set up <code>sourceLastUpdatedTimestampFormat</code>.</p>
   * @public
   */
  SourceLastUpdatedTimestampFormat?: string | undefined;

  /**
   * <p>The amount of profile object max count assigned to the object type.</p>
   * @public
   */
  MaxProfileObjectCount?: number | undefined;

  /**
   * <p>The amount of provisioned profile object max count available.</p>
   * @public
   */
  MaxAvailableProfileObjectCount?: number | undefined;

  /**
   * <p>A map of the name and ObjectType field.</p>
   * @public
   */
  Fields?: Record<string, ObjectTypeField> | undefined;

  /**
   * <p>A list of unique keys that can be used to map data to the profile.</p>
   * @public
   */
  Keys?: Record<string, ObjectTypeKey[]> | undefined;

  /**
   * <p>The timestamp of when the domain was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 * @enum
 */
export const LogicalOperator = {
  AND: "AND",
  OR: "OR",
} as const;

/**
 * @public
 */
export type LogicalOperator = (typeof LogicalOperator)[keyof typeof LogicalOperator];

/**
 * @public
 */
export interface SearchProfilesRequest {
  /**
   * <p>The pagination token from the previous SearchProfiles API call.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of objects returned per page.</p>
   *          <p>The default is 20 if this parameter is not included in the request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>A searchable identifier of a customer profile. The predefined keys you can use to search include: _account, _profileId,
   *          _assetId, _caseId, _orderId, _fullName, _phone, _email, _ctrContactId, _marketoLeadId,
   *          _salesforceAccountId, _salesforceContactId, _salesforceAssetId, _zendeskUserId,
   *          _zendeskExternalId, _zendeskTicketId, _serviceNowSystemId, _serviceNowIncidentId,
   *          _segmentUserId, _shopifyCustomerId, _shopifyOrderId.</p>
   * @public
   */
  KeyName: string | undefined;

  /**
   * <p>A list of key values.</p>
   * @public
   */
  Values: string[] | undefined;

  /**
   * <p>A list of <code>AdditionalSearchKey</code> objects that are each searchable identifiers
   *          of a profile. Each <code>AdditionalSearchKey</code> object contains a <code>KeyName</code>
   *          and a list of <code>Values</code> associated with that specific key (i.e., a key-value(s)
   *          pair). These additional search keys will be used in conjunction with the
   *             <code>LogicalOperator</code> and the required <code>KeyName</code> and
   *             <code>Values</code> parameters to search for profiles that satisfy the search criteria.
   *       </p>
   * @public
   */
  AdditionalSearchKeys?: AdditionalSearchKey[] | undefined;

  /**
   * <p>Relationship between all specified search keys that will be used to search for profiles.
   *          This includes the required <code>KeyName</code> and <code>Values</code> parameters as well
   *          as any key-value(s) pairs specified in the <code>AdditionalSearchKeys</code> list.</p>
   *          <p>This parameter influences which profiles will be returned in the response in the
   *          following manner:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AND</code> - The response only includes profiles that match all of the
   *                search keys.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OR</code> - The response includes profiles that match at least one of the
   *                search keys.</p>
   *             </li>
   *          </ul>
   *          <p>The <code>OR</code> relationship is the default behavior if this parameter is not
   *          included in the request.</p>
   * @public
   */
  LogicalOperator?: LogicalOperator | undefined;
}

/**
 * @public
 */
export interface SearchProfilesResponse {
  /**
   * <p>The list of Profiles matching the search criteria.</p>
   * @public
   */
  Items?: Profile[] | undefined;

  /**
   * <p>The pagination token from the previous SearchProfiles API call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartUploadJobRequest {
  /**
   * <p>The unique name of the domain containing the upload job to start. </p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique identifier of the upload job to start. </p>
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
export interface StopUploadJobRequest {
  /**
   * <p>The unique name of the domain containing the upload job to stop. </p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique identifier of the upload job to stop. </p>
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
   * <p>The ARN of the resource that you're adding tags to.</p>
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
   * <p>The ARN of the resource from which you are removing tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
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
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique name of the calculated attribute.</p>
   * @public
   */
  CalculatedAttributeName: string | undefined;

  /**
   * <p>The display name of the calculated attribute.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The description of the calculated attribute.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The conditions including range, object count, and threshold for the calculated
   *          attribute.</p>
   * @public
   */
  Conditions?: Conditions | undefined;
}

/**
 * @public
 */
export interface UpdateCalculatedAttributeDefinitionResponse {
  /**
   * <p>The unique name of the calculated attribute.</p>
   * @public
   */
  CalculatedAttributeName?: string | undefined;

  /**
   * <p>The display name of the calculated attribute.</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>The description of the calculated attribute.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The timestamp of when the calculated attribute definition was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the calculated attribute definition was most recently
   *          edited.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>The aggregation operation to perform for the calculated attribute.</p>
   * @public
   */
  Statistic?: Statistic | undefined;

  /**
   * <p>The conditions including range, object count, and threshold for the calculated
   *          attribute.</p>
   * @public
   */
  Conditions?: Conditions | undefined;

  /**
   * <p>The mathematical expression and a list of attribute items specified in that
   *          expression.</p>
   * @public
   */
  AttributeDetails?: AttributeDetails | undefined;

  /**
   * <p>Whether historical data ingested before the Calculated Attribute was created should be
   *          included in calculations.</p>
   * @public
   */
  UseHistoricalData?: boolean | undefined;

  /**
   * <p>Status of the Calculated Attribute creation (whether all historical data has been
   *          indexed.)</p>
   * @public
   */
  Status?: ReadinessStatus | undefined;

  /**
   * <p>Information indicating if the Calculated Attribute is ready for use by confirming all
   *          historical data has been processed and reflected.</p>
   * @public
   */
  Readiness?: Readiness | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateDomainRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The default number of days until the data within the domain expires.</p>
   * @public
   */
  DefaultExpirationDays?: number | undefined;

  /**
   * <p>The default encryption key, which is an AWS managed key, is used when no specific type
   *          of encryption key is specified. It is used to encrypt all data before it is placed in
   *          permanent or semi-permanent storage. If specified as an empty string, it will clear any
   *          existing value.</p>
   * @public
   */
  DefaultEncryptionKey?: string | undefined;

  /**
   * <p>The URL of the SQS dead letter queue, which is used for reporting errors associated with
   *          ingesting data from third party applications. If specified as an empty string, it will
   *          clear any existing value. You must set up a policy on the DeadLetterQueue for the
   *          SendMessage operation to enable Amazon Connect Customer Profiles to send messages to the
   *          DeadLetterQueue.</p>
   * @public
   */
  DeadLetterQueueUrl?: string | undefined;

  /**
   * <p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly
   * batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every
   * Saturday at 12AM UTC to detect duplicate profiles in your domains. </p>
   *          <p>After the Identity Resolution Job completes, use the
   * <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>
   * API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from
   * S3.</p>
   * @public
   */
  Matching?: MatchingRequest | undefined;

  /**
   * <p>The process of matching duplicate profiles using the rule-Based matching. If
   *             <code>RuleBasedMatching</code> = true, Amazon Connect Customer Profiles will start
   *          to match and merge your profiles according to your configuration in the
   *             <code>RuleBasedMatchingRequest</code>. You can use the <code>ListRuleBasedMatches</code>
   *          and <code>GetSimilarProfiles</code> API to return and review the results. Also, if you have
   *          configured <code>ExportingConfig</code> in the <code>RuleBasedMatchingRequest</code>, you
   *          can download the results from S3.</p>
   * @public
   */
  RuleBasedMatching?: RuleBasedMatchingRequest | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateDomainResponse {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The default number of days until the data within the domain expires.</p>
   * @public
   */
  DefaultExpirationDays?: number | undefined;

  /**
   * <p>The default encryption key, which is an AWS managed key, is used when no specific type
   *          of encryption key is specified. It is used to encrypt all data before it is placed in
   *          permanent or semi-permanent storage.</p>
   * @public
   */
  DefaultEncryptionKey?: string | undefined;

  /**
   * <p>The URL of the SQS dead letter queue, which is used for reporting errors associated with
   *          ingesting data from third party applications.</p>
   * @public
   */
  DeadLetterQueueUrl?: string | undefined;

  /**
   * <p>The process of matching duplicate profiles. If <code>Matching</code> = <code>true</code>, Amazon Connect Customer Profiles starts a weekly
   * batch process called Identity Resolution Job. If you do not specify a date and time for Identity Resolution Job to run, by default it runs every
   * Saturday at 12AM UTC to detect duplicate profiles in your domains. </p>
   *          <p>After the Identity Resolution Job completes, use the
   * <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>
   * API to return and review the results. Or, if you have configured <code>ExportingConfig</code> in the <code>MatchingRequest</code>, you can download the results from
   * S3.</p>
   * @public
   */
  Matching?: MatchingResponse | undefined;

  /**
   * <p>The process of matching duplicate profiles using the rule-Based matching. If
   *             <code>RuleBasedMatching</code> = true, Amazon Connect Customer Profiles will start
   *          to match and merge your profiles according to your configuration in the
   *             <code>RuleBasedMatchingRequest</code>. You can use the <code>ListRuleBasedMatches</code>
   *          and <code>GetSimilarProfiles</code> API to return and review the results. Also, if you have
   *          configured <code>ExportingConfig</code> in the <code>RuleBasedMatchingRequest</code>, you
   *          can download the results from S3.</p>
   * @public
   */
  RuleBasedMatching?: RuleBasedMatchingResponse | undefined;

  /**
   * <p>The timestamp of when the domain was created.</p>
   * @public
   */
  CreatedAt: Date | undefined;

  /**
   * <p>The timestamp of when the domain was most recently edited.</p>
   * @public
   */
  LastUpdatedAt: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateDomainLayoutRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique name of the layout.</p>
   * @public
   */
  LayoutDefinitionName: string | undefined;

  /**
   * <p>The description of the layout</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The display name of the layout</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>If set to true for a layout, this layout will be used by default to view data. If set to
   *          false, then the layout will not be used by default, but it can be used to view data by
   *          explicitly selecting it in the console.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The type of layout that can be used to view data under a Customer Profiles domain.</p>
   * @public
   */
  LayoutType?: LayoutType | undefined;

  /**
   * <p>A customizable layout that can be used to view data under a Customer Profiles domain.</p>
   * @public
   */
  Layout?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDomainLayoutResponse {
  /**
   * <p>The unique name of the layout.</p>
   * @public
   */
  LayoutDefinitionName?: string | undefined;

  /**
   * <p>The description of the layout</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The display name of the layout</p>
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * <p>If set to true for a layout, this layout will be used by default to view data. If set to
   *          false, then the layout will not be used by default, but it can be used to view data by
   *          explicitly selecting it in the console.</p>
   * @public
   */
  IsDefault?: boolean | undefined;

  /**
   * <p>The type of layout that can be used to view data under a Customer Profiles domain.</p>
   * @public
   */
  LayoutType?: LayoutType | undefined;

  /**
   * <p>A customizable layout that can be used to view data under a Customer Profiles domain.</p>
   * @public
   */
  Layout?: string | undefined;

  /**
   * <p>The version used to create layout.</p>
   * @public
   */
  Version?: string | undefined;

  /**
   * <p>The timestamp of when the layout was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the layout was most recently updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateEventTriggerRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique name of the event trigger.</p>
   * @public
   */
  EventTriggerName: string | undefined;

  /**
   * <p>The unique name of the object type.</p>
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * <p>The description of the event trigger.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of conditions that determine when an event should trigger the destination.</p>
   * @public
   */
  EventTriggerConditions?: EventTriggerCondition[] | undefined;

  /**
   * <p>The destination is triggered only for profiles that meet the criteria of a segment
   *          definition.</p>
   * @public
   */
  SegmentFilter?: string | undefined;

  /**
   * <p>Defines limits controlling whether an event triggers the destination, based on ingestion
   *          latency and the number of invocations per profile over specific time periods.</p>
   * @public
   */
  EventTriggerLimits?: EventTriggerLimits | undefined;
}

/**
 * @public
 */
export interface UpdateEventTriggerResponse {
  /**
   * <p>The unique name of the event trigger.</p>
   * @public
   */
  EventTriggerName?: string | undefined;

  /**
   * <p>The unique name of the object type.</p>
   * @public
   */
  ObjectTypeName?: string | undefined;

  /**
   * <p>The description of the event trigger.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of conditions that determine when an event should trigger the destination.</p>
   * @public
   */
  EventTriggerConditions?: EventTriggerCondition[] | undefined;

  /**
   * <p>The destination is triggered only for profiles that meet the criteria of a segment
   *          definition.</p>
   * @public
   */
  SegmentFilter?: string | undefined;

  /**
   * <p>Defines limits controlling whether an event triggers the destination, based on ingestion
   *          latency and the number of invocations per profile over specific time periods.</p>
   * @public
   */
  EventTriggerLimits?: EventTriggerLimits | undefined;

  /**
   * <p>The timestamp of when the event trigger was created.</p>
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * <p>The timestamp of when the event trigger was most recently updated.</p>
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * <p>An array of key-value pairs to apply to this resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Updates associated with the address properties of a customer profile.</p>
 * @public
 */
export interface UpdateAddress {
  /**
   * <p>The first line of a customer address.</p>
   * @public
   */
  Address1?: string | undefined;

  /**
   * <p>The second line of a customer address.</p>
   * @public
   */
  Address2?: string | undefined;

  /**
   * <p>The third line of a customer address.</p>
   * @public
   */
  Address3?: string | undefined;

  /**
   * <p>The fourth line of a customer address.</p>
   * @public
   */
  Address4?: string | undefined;

  /**
   * <p>The city in which a customer lives.</p>
   * @public
   */
  City?: string | undefined;

  /**
   * <p>The county in which a customer lives.</p>
   * @public
   */
  County?: string | undefined;

  /**
   * <p>The state in which a customer lives.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>The province in which a customer lives.</p>
   * @public
   */
  Province?: string | undefined;

  /**
   * <p>The country in which a customer lives.</p>
   * @public
   */
  Country?: string | undefined;

  /**
   * <p>The postal code of a customer address.</p>
   * @public
   */
  PostalCode?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProfileRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The unique identifier of a customer profile.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>Any additional information relevant to the customer’s profile.</p>
   * @public
   */
  AdditionalInformation?: string | undefined;

  /**
   * <p>An account number that you have assigned to the customer.</p>
   * @public
   */
  AccountNumber?: string | undefined;

  /**
   * <p>The type of profile used to describe the customer.</p>
   *
   * @deprecated
   * @public
   */
  PartyType?: PartyType | undefined;

  /**
   * <p>The name of the customer’s business.</p>
   * @public
   */
  BusinessName?: string | undefined;

  /**
   * <p>The customer’s first name.</p>
   * @public
   */
  FirstName?: string | undefined;

  /**
   * <p>The customer’s middle name.</p>
   * @public
   */
  MiddleName?: string | undefined;

  /**
   * <p>The customer’s last name.</p>
   * @public
   */
  LastName?: string | undefined;

  /**
   * <p>The customer’s birth date. </p>
   * @public
   */
  BirthDate?: string | undefined;

  /**
   * <p>The gender with which the customer identifies. </p>
   *
   * @deprecated
   * @public
   */
  Gender?: Gender | undefined;

  /**
   * <p>The customer’s phone number, which has not been specified as a mobile, home, or business
   *          number. </p>
   * @public
   */
  PhoneNumber?: string | undefined;

  /**
   * <p>The customer’s mobile phone number.</p>
   * @public
   */
  MobilePhoneNumber?: string | undefined;

  /**
   * <p>The customer’s home phone number.</p>
   * @public
   */
  HomePhoneNumber?: string | undefined;

  /**
   * <p>The customer’s business phone number.</p>
   * @public
   */
  BusinessPhoneNumber?: string | undefined;

  /**
   * <p>The customer’s email address, which has not been specified as a personal or business
   *          address. </p>
   * @public
   */
  EmailAddress?: string | undefined;

  /**
   * <p>The customer’s personal email address.</p>
   * @public
   */
  PersonalEmailAddress?: string | undefined;

  /**
   * <p>The customer’s business email address.</p>
   * @public
   */
  BusinessEmailAddress?: string | undefined;

  /**
   * <p>A generic address associated with the customer that is not mailing, shipping, or
   *          billing.</p>
   * @public
   */
  Address?: UpdateAddress | undefined;

  /**
   * <p>The customer’s shipping address.</p>
   * @public
   */
  ShippingAddress?: UpdateAddress | undefined;

  /**
   * <p>The customer’s mailing address.</p>
   * @public
   */
  MailingAddress?: UpdateAddress | undefined;

  /**
   * <p>The customer’s billing address.</p>
   * @public
   */
  BillingAddress?: UpdateAddress | undefined;

  /**
   * <p>A key value pair of attributes of a customer profile.</p>
   * @public
   */
  Attributes?: Record<string, string> | undefined;

  /**
   * <p>An alternative to <code>PartyType</code> which accepts any string as input.</p>
   * @public
   */
  PartyTypeString?: string | undefined;

  /**
   * <p>An alternative to <code>Gender</code> which accepts any string as input.</p>
   * @public
   */
  GenderString?: string | undefined;

  /**
   * <p>Determines the type of the profile.</p>
   * @public
   */
  ProfileType?: ProfileType | undefined;

  /**
   * <p>Object that defines users preferred methods of engagement.</p>
   * @public
   */
  EngagementPreferences?: EngagementPreferences | undefined;
}

/**
 * @public
 */
export interface UpdateProfileResponse {
  /**
   * <p>The unique identifier of a customer profile.</p>
   * @public
   */
  ProfileId: string | undefined;
}

/**
 * @internal
 */
export const PutIntegrationRequestFilterSensitiveLog = (obj: PutIntegrationRequest): any => ({
  ...obj,
  ...(obj.FlowDefinition && { FlowDefinition: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutProfileObjectRequestFilterSensitiveLog = (obj: PutProfileObjectRequest): any => ({
  ...obj,
  ...(obj.Object && { Object: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutProfileObjectTypeRequestFilterSensitiveLog = (obj: PutProfileObjectTypeRequest): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.Fields && { Fields: SENSITIVE_STRING }),
  ...(obj.Keys && { Keys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutProfileObjectTypeResponseFilterSensitiveLog = (obj: PutProfileObjectTypeResponse): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.Fields && { Fields: SENSITIVE_STRING }),
  ...(obj.Keys && { Keys: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SearchProfilesResponseFilterSensitiveLog = (obj: SearchProfilesResponse): any => ({
  ...obj,
  ...(obj.Items && { Items: obj.Items.map((item) => ProfileFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateCalculatedAttributeDefinitionRequestFilterSensitiveLog = (
  obj: UpdateCalculatedAttributeDefinitionRequest
): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.Conditions && { Conditions: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateCalculatedAttributeDefinitionResponseFilterSensitiveLog = (
  obj: UpdateCalculatedAttributeDefinitionResponse
): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.Statistic && { Statistic: SENSITIVE_STRING }),
  ...(obj.Conditions && { Conditions: SENSITIVE_STRING }),
  ...(obj.AttributeDetails && { AttributeDetails: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateDomainLayoutRequestFilterSensitiveLog = (obj: UpdateDomainLayoutRequest): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.Layout && { Layout: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateDomainLayoutResponseFilterSensitiveLog = (obj: UpdateDomainLayoutResponse): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.Layout && { Layout: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateEventTriggerRequestFilterSensitiveLog = (obj: UpdateEventTriggerRequest): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.EventTriggerConditions && { EventTriggerConditions: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateEventTriggerResponseFilterSensitiveLog = (obj: UpdateEventTriggerResponse): any => ({
  ...obj,
  ...(obj.Description && { Description: SENSITIVE_STRING }),
  ...(obj.EventTriggerConditions && { EventTriggerConditions: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateAddressFilterSensitiveLog = (obj: UpdateAddress): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProfileRequestFilterSensitiveLog = (obj: UpdateProfileRequest): any => ({
  ...obj,
  ...(obj.AdditionalInformation && { AdditionalInformation: SENSITIVE_STRING }),
  ...(obj.AccountNumber && { AccountNumber: SENSITIVE_STRING }),
  ...(obj.PartyType && { PartyType: SENSITIVE_STRING }),
  ...(obj.BusinessName && { BusinessName: SENSITIVE_STRING }),
  ...(obj.FirstName && { FirstName: SENSITIVE_STRING }),
  ...(obj.MiddleName && { MiddleName: SENSITIVE_STRING }),
  ...(obj.LastName && { LastName: SENSITIVE_STRING }),
  ...(obj.BirthDate && { BirthDate: SENSITIVE_STRING }),
  ...(obj.Gender && { Gender: SENSITIVE_STRING }),
  ...(obj.PhoneNumber && { PhoneNumber: SENSITIVE_STRING }),
  ...(obj.MobilePhoneNumber && { MobilePhoneNumber: SENSITIVE_STRING }),
  ...(obj.HomePhoneNumber && { HomePhoneNumber: SENSITIVE_STRING }),
  ...(obj.BusinessPhoneNumber && { BusinessPhoneNumber: SENSITIVE_STRING }),
  ...(obj.EmailAddress && { EmailAddress: SENSITIVE_STRING }),
  ...(obj.PersonalEmailAddress && { PersonalEmailAddress: SENSITIVE_STRING }),
  ...(obj.BusinessEmailAddress && { BusinessEmailAddress: SENSITIVE_STRING }),
  ...(obj.Address && { Address: SENSITIVE_STRING }),
  ...(obj.ShippingAddress && { ShippingAddress: SENSITIVE_STRING }),
  ...(obj.MailingAddress && { MailingAddress: SENSITIVE_STRING }),
  ...(obj.BillingAddress && { BillingAddress: SENSITIVE_STRING }),
  ...(obj.Attributes && { Attributes: SENSITIVE_STRING }),
  ...(obj.PartyTypeString && { PartyTypeString: SENSITIVE_STRING }),
  ...(obj.GenderString && { GenderString: SENSITIVE_STRING }),
  ...(obj.ProfileType && { ProfileType: SENSITIVE_STRING }),
  ...(obj.EngagementPreferences && { EngagementPreferences: SENSITIVE_STRING }),
});
