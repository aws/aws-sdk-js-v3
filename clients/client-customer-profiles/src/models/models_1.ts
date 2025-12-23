// smithy-typescript generated code
import { Gender, LayoutType, PartyType, ProfileType, ReadinessStatus, Statistic } from "./enums";
import {
  type AttributeDetails,
  type Conditions,
  type DataStoreRequest,
  type DataStoreResponse,
  type EngagementPreferences,
  type EventTriggerLimits,
  type MatchingRequest,
  type MatchingResponse,
  type Readiness,
  type RecommenderConfig,
  type RuleBasedMatchingRequest,
  type RuleBasedMatchingResponse,
  EventTriggerCondition,
} from "./models_0";

/**
 * @public
 */
export interface StopRecommenderResponse {}

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
   * <p>Set to true to enabled data store for this domain.</p>
   * @public
   */
  DataStore?: DataStoreRequest | undefined;

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
   * <p>The data store.</p>
   * @public
   */
  DataStore?: DataStoreResponse | undefined;

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
   * @deprecated deprecated
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
   * @deprecated deprecated
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
 * @public
 */
export interface UpdateRecommenderRequest {
  /**
   * <p>The unique name of the domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the recommender to update.</p>
   * @public
   */
  RecommenderName: string | undefined;

  /**
   * <p>The new description to assign to the recommender.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The new configuration settings to apply to the recommender, including updated parameters and settings that define its behavior.</p>
   * @public
   */
  RecommenderConfig?: RecommenderConfig | undefined;
}

/**
 * @public
 */
export interface UpdateRecommenderResponse {
  /**
   * <p>The name of the recommender that was updated.</p>
   * @public
   */
  RecommenderName: string | undefined;
}
