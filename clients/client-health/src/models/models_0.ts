// smithy-typescript generated code
import type {
  EntityStatusCode,
  EventActionability,
  EventAggregateField,
  EventPersona,
  EventScopeCode,
  EventStatusCode,
  EventTypeActionability,
  EventTypeCategory,
  EventTypePersona,
} from "./enums";

/**
 * The number of entities in an account that are impacted by a specific event aggregated by the entity status codes.
 *
 * @public
 */
export interface AccountEntityAggregate {
  /**
   * The 12-digit Amazon Web Services account numbers that contains the affected entities.
   *
   * @public
   */
  accountId?: string | undefined;

  /**
   * The number of entities that match the filter criteria for the specified events.
   *
   * @public
   */
  count?: number | undefined;

  /**
   * The number of affected entities aggregated by the entity status codes.
   *
   * @public
   */
  statuses?: Partial<Record<EntityStatusCode, number>> | undefined;
}

/**
 * Information about an entity that is affected by a Health event.
 *
 * @public
 */
export interface AffectedEntity {
  /**
   * The unique identifier for the entity. Format: `arn:aws:health:entity-region:aws-account:entity/entity-id`. Example: `arn:aws:health:us-east-1:111222333444:entity/AVh5GGT7ul1arKr1sE1K`
   *
   * @public
   */
  entityArn?: string | undefined;

  /**
   * The unique identifier for the event. The event ARN has the `arn:aws:health:event-region::event/SERVICE/EVENT_TYPE_CODE/EVENT_TYPE_PLUS_ID` format.
   *
   * For example, an event ARN might look like the following:
   *
   * `arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456`
   *
   * @public
   */
  eventArn?: string | undefined;

  /**
   * The ID of the affected entity.
   *
   * @public
   */
  entityValue?: string | undefined;

  /**
   * The URL of the affected entity.
   *
   * @public
   */
  entityUrl?: string | undefined;

  /**
   * The 12-digit Amazon Web Services account number that contains the affected entity.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The most recent time that the entity was updated.
   *
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * The most recent status of the entity affected by the event. The possible values are `IMPAIRED`, `UNIMPAIRED`, `UNKNOWN`, `PENDING`, and `RESOLVED`.
   *
   * @public
   */
  statusCode?: EntityStatusCode | undefined;

  /**
   * A map of entity tags attached to the affected entity.
   *
   * > **Note:** Currently, the `tags` property isn't supported.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Additional metadata about the affected entity.
   *
   * @public
   */
  entityMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeAffectedAccountsForOrganizationRequest {
  /**
   * The unique identifier for the event. The event ARN has the `arn:aws:health:event-region::event/SERVICE/EVENT_TYPE_CODE/EVENT_TYPE_PLUS_ID` format.
   *
   * For example, an event ARN might look like the following:
   *
   * `arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456`
   *
   * @public
   */
  eventArn: string | undefined;

  /**
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return in one batch, between 10 and 100, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAffectedAccountsForOrganizationResponse {
  /**
   * A JSON set of elements of the affected accounts.
   *
   * @public
   */
  affectedAccounts?: string[] | undefined;

  /**
   * This parameter specifies if the Health event is a public Amazon Web Services service event or an account-specific event.
   *
   * - If the `eventScopeCode` value is `PUBLIC`, then the `affectedAccounts` value is always empty.
   * - If the `eventScopeCode` value is `ACCOUNT_SPECIFIC`, then the `affectedAccounts` value lists the affected Amazon Web Services accounts in your organization. For example, if an event affects a service such as Amazon Elastic Compute Cloud and you have Amazon Web Services accounts that use that service, those account IDs appear in the response.
   * - If the `eventScopeCode` value is `NONE`, then the `eventArn` that you specified in the request is invalid or doesn't exist.
   *
   * @public
   */
  eventScopeCode?: EventScopeCode | undefined;

  /**
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A range of dates and times that is used by the [EventFilter](https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html) and [EntityFilter](https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html) objects. If `from` is set and `to` is set: match items where the timestamp (`startTime`, `endTime`, or `lastUpdatedTime`) is between `from` and `to` inclusive. If `from` is set and `to` is not set: match items where the timestamp value is equal to or after `from`. If `from` is not set and `to` is set: match items where the timestamp value is equal to or before `to`.
 *
 * @public
 */
export interface DateTimeRange {
  /**
   * The starting date and time of a time range.
   *
   * @public
   */
  from?: Date | undefined;

  /**
   * The ending date and time of a time range.
   *
   * @public
   */
  to?: Date | undefined;
}

/**
 * The values to use to filter results from the [DescribeAffectedEntities](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html) operation.
 *
 * @public
 */
export interface EntityFilter {
  /**
   * A list of event ARNs (unique identifiers). For example: `"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"`
   *
   * @public
   */
  eventArns: string[] | undefined;

  /**
   * A list of entity ARNs (unique identifiers).
   *
   * @public
   */
  entityArns?: string[] | undefined;

  /**
   * A list of IDs for affected entities.
   *
   * @public
   */
  entityValues?: string[] | undefined;

  /**
   * A list of the most recent dates and times that the entity was updated.
   *
   * @public
   */
  lastUpdatedTimes?: DateTimeRange[] | undefined;

  /**
   * A map of entity tags attached to the affected entity.
   *
   * > **Note:** Currently, the `tags` property isn't supported.
   *
   * @public
   */
  tags?: Record<string, string>[] | undefined;

  /**
   * A list of entity status codes (`IMPAIRED`, `UNIMPAIRED`, or `UNKNOWN`).
   *
   * @public
   */
  statusCodes?: EntityStatusCode[] | undefined;
}

/**
 * @public
 */
export interface DescribeAffectedEntitiesRequest {
  /**
   * Values to narrow the results returned. At least one event ARN is required.
   *
   * @public
   */
  filter: EntityFilter | undefined;

  /**
   * The locale (language) to return information in. English (en) is the default and the only supported value at this time.
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return in one batch, between 1 and 100, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAffectedEntitiesResponse {
  /**
   * The entities that match the filter criteria.
   *
   * @public
   */
  entities?: AffectedEntity[] | undefined;

  /**
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * A JSON set of elements including the `awsAccountId`, `eventArn` and a set of `statusCodes`.
 *
 * @public
 */
export interface EntityAccountFilter {
  /**
   * The unique identifier for the event. The event ARN has the `arn:aws:health:event-region::event/SERVICE/EVENT_TYPE_CODE/EVENT_TYPE_PLUS_ID` format.
   *
   * For example, an event ARN might look like the following:
   *
   * `arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456`
   *
   * @public
   */
  eventArn: string | undefined;

  /**
   * The 12-digit Amazon Web Services account numbers that contains the affected entities.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * A list of entity status codes.
   *
   * @public
   */
  statusCodes?: EntityStatusCode[] | undefined;
}

/**
 * The values used to filter results from the [DescribeEventDetailsForOrganization](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html) and [DescribeAffectedEntitiesForOrganization](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html) operations.
 *
 * @public
 */
export interface EventAccountFilter {
  /**
   * The unique identifier for the event. The event ARN has the `arn:aws:health:event-region::event/SERVICE/EVENT_TYPE_CODE/EVENT_TYPE_PLUS_ID` format.
   *
   * For example, an event ARN might look like the following:
   *
   * `arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456`
   *
   * @public
   */
  eventArn: string | undefined;

  /**
   * The 12-digit Amazon Web Services account numbers that contains the affected entities.
   *
   * @public
   */
  awsAccountId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAffectedEntitiesForOrganizationRequest {
  /**
   * A JSON set of elements including the `awsAccountId` and the `eventArn`.
   *
   * @deprecated This property is deprecated, use organizationEntityAccountFilters instead.
   * @public
   */
  organizationEntityFilters?: EventAccountFilter[] | undefined;

  /**
   * The locale (language) to return information in. English (en) is the default and the only supported value at this time.
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return in one batch, between 1 and 100, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A JSON set of elements including the `awsAccountId`, `eventArn` and a set of `statusCodes`.
   *
   * @public
   */
  organizationEntityAccountFilters?: EntityAccountFilter[] | undefined;
}

/**
 * Error information returned when a [DescribeAffectedEntitiesForOrganization](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html) operation can't find or process a specific entity.
 *
 * @public
 */
export interface OrganizationAffectedEntitiesErrorItem {
  /**
   * The 12-digit Amazon Web Services account numbers that contains the affected entities.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The unique identifier for the event. The event ARN has the `arn:aws:health:event-region::event/SERVICE/EVENT_TYPE_CODE/EVENT_TYPE_PLUS_ID` format.
   *
   * For example, an event ARN might look like the following:
   *
   * `arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456`
   *
   * @public
   */
  eventArn?: string | undefined;

  /**
   * The name of the error.
   *
   * @public
   */
  errorName?: string | undefined;

  /**
   * A message that describes the error. Follow the error message and retry your request.
   *
   * For example, the `InvalidAccountInputError` error message appears if you call the `DescribeAffectedEntitiesForOrganization` operation and specify the `AccountSpecific` value for the `EventScopeCode` parameter, but don't specify an Amazon Web Services account.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAffectedEntitiesForOrganizationResponse {
  /**
   * A JSON set of elements including the `awsAccountId` and its `entityArn`, `entityValue` and its `entityArn`, `lastUpdatedTime`, and `statusCode`.
   *
   * @public
   */
  entities?: AffectedEntity[] | undefined;

  /**
   * A JSON set of elements of the failed response, including the `awsAccountId`, `errorMessage`, `errorName`, and `eventArn`.
   *
   * @public
   */
  failedSet?: OrganizationAffectedEntitiesErrorItem[] | undefined;

  /**
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEntityAggregatesRequest {
  /**
   * A list of event ARNs (unique identifiers). For example: `"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"`
   *
   * @public
   */
  eventArns?: string[] | undefined;
}

/**
 * The number of entities that are affected by one or more events. Returned by the [DescribeEntityAggregates](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEntityAggregates.html) operation.
 *
 * @public
 */
export interface EntityAggregate {
  /**
   * The unique identifier for the event. The event ARN has the `arn:aws:health:event-region::event/SERVICE/EVENT_TYPE_CODE/EVENT_TYPE_PLUS_ID` format.
   *
   * For example, an event ARN might look like the following:
   *
   * `arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456`
   *
   * @public
   */
  eventArn?: string | undefined;

  /**
   * The number of entities that match the criteria for the specified events.
   *
   * @public
   */
  count?: number | undefined;

  /**
   * The number of affected entities aggregated by the entity status codes.
   *
   * @public
   */
  statuses?: Partial<Record<EntityStatusCode, number>> | undefined;
}

/**
 * @public
 */
export interface DescribeEntityAggregatesResponse {
  /**
   * The number of entities that are affected by each of the specified events.
   *
   * @public
   */
  entityAggregates?: EntityAggregate[] | undefined;
}

/**
 * @public
 */
export interface DescribeEntityAggregatesForOrganizationRequest {
  /**
   * A list of event ARNs (unique identifiers). For example: `"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"`
   *
   * @public
   */
  eventArns: string[] | undefined;

  /**
   * A list of 12-digit Amazon Web Services account numbers that contains the affected entities.
   *
   * @public
   */
  awsAccountIds?: string[] | undefined;
}

/**
 * The aggregate results of entities affected by the specified event in your organization. The results are aggregated by the entity status codes for the specified set of accountsIDs.
 *
 * @public
 */
export interface OrganizationEntityAggregate {
  /**
   * A list of event ARNs (unique identifiers). For example: `"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"`
   *
   * @public
   */
  eventArn?: string | undefined;

  /**
   * The number of entities for the organization that match the filter criteria for the specified events.
   *
   * @public
   */
  count?: number | undefined;

  /**
   * The number of affected entities aggregated by the entitiy status codes.
   *
   * @public
   */
  statuses?: Partial<Record<EntityStatusCode, number>> | undefined;

  /**
   * A list of entity aggregates for each of the specified accounts in your organization that are affected by a specific event. If there are no `awsAccountIds` provided in the request, this field will be empty in the response.
   *
   * @public
   */
  accounts?: AccountEntityAggregate[] | undefined;
}

/**
 * @public
 */
export interface DescribeEntityAggregatesForOrganizationResponse {
  /**
   * The list of entity aggregates for each of the specified accounts that are affected by each of the specified events.
   *
   * @public
   */
  organizationEntityAggregates?: OrganizationEntityAggregate[] | undefined;
}

/**
 * The values to use to filter results from the [DescribeEvents](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html) and [DescribeEventAggregates](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html) operations.
 *
 * @public
 */
export interface EventFilter {
  /**
   * A list of actionability values to filter events. Use this to filter events based on whether they require action (`ACTION_REQUIRED`), may require action (`ACTION_MAY_BE_REQUIRED`) or are informational (`INFORMATIONAL`).
   *
   * @public
   */
  actionabilities?: EventActionability[] | undefined;

  /**
   * A list of event ARNs (unique identifiers). For example: `"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"`
   *
   * @public
   */
  eventArns?: string[] | undefined;

  /**
   * A list of unique identifiers for event types. For example, `"AWS_EC2_SYSTEM_MAINTENANCE_EVENT","AWS_RDS_MAINTENANCE_SCHEDULED".`
   *
   * @public
   */
  eventTypeCodes?: string[] | undefined;

  /**
   * The Amazon Web Services services associated with the event. For example, `EC2`, `RDS`.
   *
   * @public
   */
  services?: string[] | undefined;

  /**
   * A list of Amazon Web Services Regions.
   *
   * @public
   */
  regions?: string[] | undefined;

  /**
   * A list of Amazon Web Services Availability Zones.
   *
   * @public
   */
  availabilityZones?: string[] | undefined;

  /**
   * A list of dates and times that the event began.
   *
   * @public
   */
  startTimes?: DateTimeRange[] | undefined;

  /**
   * A list of dates and times that the event ended.
   *
   * @public
   */
  endTimes?: DateTimeRange[] | undefined;

  /**
   * A list of dates and times that the event was last updated.
   *
   * @public
   */
  lastUpdatedTimes?: DateTimeRange[] | undefined;

  /**
   * A list of entity ARNs (unique identifiers).
   *
   * @public
   */
  entityArns?: string[] | undefined;

  /**
   * A list of entity identifiers, such as EC2 instance IDs (`i-34ab692e`) or EBS volumes (`vol-426ab23e`).
   *
   * @public
   */
  entityValues?: string[] | undefined;

  /**
   * A list of event type category codes. Possible values are `issue`, `accountNotification`, or `scheduledChange`. Currently, the `investigation` value isn't supported at this time.
   *
   * @public
   */
  eventTypeCategories?: EventTypeCategory[] | undefined;

  /**
   * A map of entity tags attached to the affected entity.
   *
   * > **Note:** Currently, the `tags` property isn't supported.
   *
   * @public
   */
  tags?: Record<string, string>[] | undefined;

  /**
   * A list of event status codes.
   *
   * @public
   */
  eventStatusCodes?: EventStatusCode[] | undefined;

  /**
   * A list of persona values to filter events. Use this to filter events based on their target audience: `OPERATIONS`, `SECURITY`, or `BILLING`.
   *
   * @public
   */
  personas?: EventPersona[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventAggregatesRequest {
  /**
   * Values to narrow the results returned.
   *
   * @public
   */
  filter?: EventFilter | undefined;

  /**
   * The only currently supported value is `eventTypeCategory`.
   *
   * @public
   */
  aggregateField: EventAggregateField | undefined;

  /**
   * The maximum number of items to return in one batch, between 10 and 100, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The number of events of each issue type. Returned by the [DescribeEventAggregates](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html) operation.
 *
 * @public
 */
export interface EventAggregate {
  /**
   * The issue type for the associated count.
   *
   * @public
   */
  aggregateValue?: string | undefined;

  /**
   * The number of events of the associated issue type.
   *
   * @public
   */
  count?: number | undefined;
}

/**
 * @public
 */
export interface DescribeEventAggregatesResponse {
  /**
   * The number of events in each category that meet the optional filter criteria.
   *
   * @public
   */
  eventAggregates?: EventAggregate[] | undefined;

  /**
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventDetailsRequest {
  /**
   * A list of event ARNs (unique identifiers). For example: `"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"`
   *
   * @public
   */
  eventArns: string[] | undefined;

  /**
   * The locale (language) to return information in. English (en) is the default and the only supported value at this time.
   *
   * @public
   */
  locale?: string | undefined;
}

/**
 * Error information returned when a [DescribeEventDetails](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html) operation can't find a specified event.
 *
 * @public
 */
export interface EventDetailsErrorItem {
  /**
   * The unique identifier for the event. The event ARN has the `arn:aws:health:event-region::event/SERVICE/EVENT_TYPE_CODE/EVENT_TYPE_PLUS_ID` format.
   *
   * For example, an event ARN might look like the following:
   *
   * `arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456`
   *
   * @public
   */
  eventArn?: string | undefined;

  /**
   * The name of the error.
   *
   * @public
   */
  errorName?: string | undefined;

  /**
   * A message that describes the error.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * Summary information about an Health event.
 *
 * Health events can be public or account-specific:
 *
 * - *Public events* might be service events that are not specific to an Amazon Web Services account. For example, if there is an issue with an Amazon Web Services Region, Health provides information about the event, even if you don't use services or resources in that Region.
 * - *Account-specific* events are specific to either your Amazon Web Services account or an account in your organization. For example, if there's an issue with Amazon Elastic Compute Cloud in a Region that you use, Health provides information about the event and the affected resources in the account.
 *
 * You can determine if an event is public or account-specific by using the `eventScopeCode` parameter. For more information, see [eventScopeCode](https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html#AWSHealth-Type-Event-eventScopeCode).
 *
 * @public
 */
export interface Event {
  /**
   * The unique identifier for the event. The event ARN has the `arn:aws:health:event-region::event/SERVICE/EVENT_TYPE_CODE/EVENT_TYPE_PLUS_ID` format.
   *
   * For example, an event ARN might look like the following:
   *
   * `arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456`
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The Amazon Web Services service that is affected by the event. For example, `EC2`, `RDS`.
   *
   * @public
   */
  service?: string | undefined;

  /**
   * The unique identifier for the event type. The format is `AWS_SERVICE_DESCRIPTION`; for example, `AWS_EC2_SYSTEM_MAINTENANCE_EVENT`.
   *
   * @public
   */
  eventTypeCode?: string | undefined;

  /**
   * A list of event type category codes. Possible values are `issue`, `accountNotification`, or `scheduledChange`. Currently, the `investigation` value isn't supported at this time.
   *
   * @public
   */
  eventTypeCategory?: EventTypeCategory | undefined;

  /**
   * The Amazon Web Services Region name of the event.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The Amazon Web Services Availability Zone of the event. For example, us-east-1a.
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * The date and time that the event began.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The date and time that the event ended.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The most recent date and time that the event was updated.
   *
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * The most recent status of the event. Possible values are `open`, `closed`, and `upcoming`.
   *
   * @public
   */
  statusCode?: EventStatusCode | undefined;

  /**
   * This parameter specifies if the Health event is a public Amazon Web Services service event or an account-specific event.
   *
   * - If the `eventScopeCode` value is `PUBLIC`, then the `affectedAccounts` value is always empty.
   * - If the `eventScopeCode` value is `ACCOUNT_SPECIFIC`, then the `affectedAccounts` value lists the affected Amazon Web Services accounts in your organization. For example, if an event affects a service such as Amazon Elastic Compute Cloud and you have Amazon Web Services accounts that use that service, those account IDs appear in the response.
   * - If the `eventScopeCode` value is `NONE`, then the `eventArn` that you specified in the request is invalid or doesn't exist.
   *
   * @public
   */
  eventScopeCode?: EventScopeCode | undefined;

  /**
   * The actionability classification of the event. Possible values are `ACTION_REQUIRED`, `ACTION_MAY_BE_REQUIRED` and `INFORMATIONAL`. Events with `ACTION_REQUIRED` actionability require customer action to resolve or mitigate the event. Events with `ACTION_MAY_BE_REQUIRED` actionability indicates that the current status is unknown or conditional and inspection is needed to determine if action is required. Events with `INFORMATIONAL` actionability are provided for awareness and do not require immediate action.
   *
   * @public
   */
  actionability?: EventActionability | undefined;

  /**
   * A list of persona classifications that indicate the target audience for the event. Possible values are `OPERATIONS`, `SECURITY`, and `BILLING`. Events can be associated with multiple personas to indicate relevance to different teams or roles within an organization.
   *
   * @public
   */
  personas?: EventPersona[] | undefined;
}

/**
 * The detailed description of the event. Included in the information returned by the [DescribeEventDetails](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html) operation.
 *
 * @public
 */
export interface EventDescription {
  /**
   * The most recent description of the event.
   *
   * @public
   */
  latestDescription?: string | undefined;
}

/**
 * Detailed information about an event. A combination of an [Event](https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html) object, an [EventDescription](https://docs.aws.amazon.com/health/latest/APIReference/API_EventDescription.html) object, and additional metadata about the event. Returned by the [DescribeEventDetails](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html) operation.
 *
 * @public
 */
export interface EventDetails {
  /**
   * Summary information about the event.
   *
   * @public
   */
  event?: Event | undefined;

  /**
   * The most recent description of the event.
   *
   * @public
   */
  eventDescription?: EventDescription | undefined;

  /**
   * Additional metadata about the event.
   *
   * @public
   */
  eventMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeEventDetailsResponse {
  /**
   * Information about the events that could be retrieved.
   *
   * @public
   */
  successfulSet?: EventDetails[] | undefined;

  /**
   * Error messages for any events that could not be retrieved.
   *
   * @public
   */
  failedSet?: EventDetailsErrorItem[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventDetailsForOrganizationRequest {
  /**
   * A set of JSON elements that includes the `awsAccountId` and the `eventArn`.
   *
   * @public
   */
  organizationEventDetailFilters: EventAccountFilter[] | undefined;

  /**
   * The locale (language) to return information in. English (en) is the default and the only supported value at this time.
   *
   * @public
   */
  locale?: string | undefined;
}

/**
 * Error information returned when a [DescribeEventDetailsForOrganization](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html) operation can't find a specified event.
 *
 * @public
 */
export interface OrganizationEventDetailsErrorItem {
  /**
   * Error information returned when a [DescribeEventDetailsForOrganization](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html) operation can't find a specified event.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * The unique identifier for the event. The event ARN has the `arn:aws:health:event-region::event/SERVICE/EVENT_TYPE_CODE/EVENT_TYPE_PLUS_ID` format.
   *
   * For example, an event ARN might look like the following:
   *
   * `arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456`
   *
   * @public
   */
  eventArn?: string | undefined;

  /**
   * The name of the error.
   *
   * @public
   */
  errorName?: string | undefined;

  /**
   * A message that describes the error.
   *
   * If you call the `DescribeEventDetailsForOrganization` operation and receive one of the following errors, follow the recommendations in the message:
   *
   * - We couldn't find a public event that matches your request. To find an event that is account specific, you must enter an Amazon Web Services account ID in the request.
   * - We couldn't find an account specific event for the specified Amazon Web Services account. To find an event that is public, you must enter a null value for the Amazon Web Services account ID in the request.
   * - Your Amazon Web Services account doesn't include the Amazon Web Services Support plan required to use the Health API. You must have either a Business, Enterprise On-Ramp, or Enterprise Support plan.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * Detailed information about an event. A combination of an [Event](https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html) object, an [EventDescription](https://docs.aws.amazon.com/health/latest/APIReference/API_EventDescription.html) object, and additional metadata about the event. Returned by the [DescribeEventDetailsForOrganization](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html) operation.
 *
 * @public
 */
export interface OrganizationEventDetails {
  /**
   * The 12-digit Amazon Web Services account numbers that contains the affected entities.
   *
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * Summary information about an Health event.
   *
   * Health events can be public or account-specific:
   *
   * - *Public events* might be service events that are not specific to an Amazon Web Services account. For example, if there is an issue with an Amazon Web Services Region, Health provides information about the event, even if you don't use services or resources in that Region.
   * - *Account-specific* events are specific to either your Amazon Web Services account or an account in your organization. For example, if there's an issue with Amazon Elastic Compute Cloud in a Region that you use, Health provides information about the event and the affected resources in the account.
   *
   * You can determine if an event is public or account-specific by using the `eventScopeCode` parameter. For more information, see [eventScopeCode](https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html#AWSHealth-Type-Event-eventScopeCode).
   *
   * @public
   */
  event?: Event | undefined;

  /**
   * The detailed description of the event. Included in the information returned by the [DescribeEventDetails](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html) operation.
   *
   * @public
   */
  eventDescription?: EventDescription | undefined;

  /**
   * Additional metadata about the event.
   *
   * @public
   */
  eventMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeEventDetailsForOrganizationResponse {
  /**
   * Information about the events that could be retrieved.
   *
   * @public
   */
  successfulSet?: OrganizationEventDetails[] | undefined;

  /**
   * Error messages for any events that could not be retrieved.
   *
   * @public
   */
  failedSet?: OrganizationEventDetailsErrorItem[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventsRequest {
  /**
   * Values to narrow the results returned.
   *
   * @public
   */
  filter?: EventFilter | undefined;

  /**
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return in one batch, between 1 and 100, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The locale (language) to return information in. English (en) is the default and the only supported value at this time.
   *
   * @public
   */
  locale?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventsResponse {
  /**
   * The events that match the specified filter criteria.
   *
   * @public
   */
  events?: Event[] | undefined;

  /**
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The values to filter results from the [DescribeEventsForOrganization](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html) operation.
 *
 * @public
 */
export interface OrganizationEventFilter {
  /**
   * A list of actionability values to filter events. Use this to filter events based on whether they require action (`ACTION_REQUIRED`), may require action (`ACTION_MAY_BE_REQUIRED`) or are informational (`INFORMATIONAL`).
   *
   * @public
   */
  actionabilities?: EventActionability[] | undefined;

  /**
   * A list of unique identifiers for event types. For example, `"AWS_EC2_SYSTEM_MAINTENANCE_EVENT","AWS_RDS_MAINTENANCE_SCHEDULED".`
   *
   * @public
   */
  eventTypeCodes?: string[] | undefined;

  /**
   * A list of 12-digit Amazon Web Services account numbers that contains the affected entities.
   *
   * @public
   */
  awsAccountIds?: string[] | undefined;

  /**
   * The Amazon Web Services services associated with the event. For example, `EC2`, `RDS`.
   *
   * @public
   */
  services?: string[] | undefined;

  /**
   * A list of Amazon Web Services Regions.
   *
   * @public
   */
  regions?: string[] | undefined;

  /**
   * A range of dates and times that is used by the [EventFilter](https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html) and [EntityFilter](https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html) objects. If `from` is set and `to` is set: match items where the timestamp (`startTime`, `endTime`, or `lastUpdatedTime`) is between `from` and `to` inclusive. If `from` is set and `to` is not set: match items where the timestamp value is equal to or after `from`. If `from` is not set and `to` is set: match items where the timestamp value is equal to or before `to`.
   *
   * @public
   */
  startTime?: DateTimeRange | undefined;

  /**
   * A range of dates and times that is used by the [EventFilter](https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html) and [EntityFilter](https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html) objects. If `from` is set and `to` is set: match items where the timestamp (`startTime`, `endTime`, or `lastUpdatedTime`) is between `from` and `to` inclusive. If `from` is set and `to` is not set: match items where the timestamp value is equal to or after `from`. If `from` is not set and `to` is set: match items where the timestamp value is equal to or before `to`.
   *
   * @public
   */
  endTime?: DateTimeRange | undefined;

  /**
   * A range of dates and times that is used by the [EventFilter](https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html) and [EntityFilter](https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html) objects. If `from` is set and `to` is set: match items where the timestamp (`startTime`, `endTime`, or `lastUpdatedTime`) is between `from` and `to` inclusive. If `from` is set and `to` is not set: match items where the timestamp value is equal to or after `from`. If `from` is not set and `to` is set: match items where the timestamp value is equal to or before `to`.
   *
   * @public
   */
  lastUpdatedTime?: DateTimeRange | undefined;

  /**
   * A list of entity ARNs (unique identifiers).
   *
   * @public
   */
  entityArns?: string[] | undefined;

  /**
   * A list of entity identifiers, such as EC2 instance IDs (i-34ab692e) or EBS volumes (vol-426ab23e).
   *
   * @public
   */
  entityValues?: string[] | undefined;

  /**
   * A list of event type category codes. Possible values are `issue`, `accountNotification`, or `scheduledChange`. Currently, the `investigation` value isn't supported at this time.
   *
   * @public
   */
  eventTypeCategories?: EventTypeCategory[] | undefined;

  /**
   * A list of event status codes.
   *
   * @public
   */
  eventStatusCodes?: EventStatusCode[] | undefined;

  /**
   * A list of persona values to filter events. Use this to filter events based on their target audience: `OPERATIONS`, `SECURITY`, or `BILLING`.
   *
   * @public
   */
  personas?: EventPersona[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventsForOrganizationRequest {
  /**
   * Values to narrow the results returned.
   *
   * @public
   */
  filter?: OrganizationEventFilter | undefined;

  /**
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return in one batch, between 1 and 100, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The locale (language) to return information in. English (en) is the default and the only supported value at this time.
   *
   * @public
   */
  locale?: string | undefined;
}

/**
 * Summary information about an event, returned by the [DescribeEventsForOrganization](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html) operation.
 *
 * @public
 */
export interface OrganizationEvent {
  /**
   * The unique identifier for the event. The event ARN has the `arn:aws:health:event-region::event/SERVICE/EVENT_TYPE_CODE/EVENT_TYPE_PLUS_ID` format.
   *
   * For example, an event ARN might look like the following:
   *
   * `arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456`
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The Amazon Web Services service that is affected by the event, such as EC2 and RDS.
   *
   * @public
   */
  service?: string | undefined;

  /**
   * The unique identifier for the event type. The format is `AWS_SERVICE_DESCRIPTION`. For example, `AWS_EC2_SYSTEM_MAINTENANCE_EVENT`.
   *
   * @public
   */
  eventTypeCode?: string | undefined;

  /**
   * A list of event type category codes. Possible values are `issue`, `accountNotification`, or `scheduledChange`. Currently, the `investigation` value isn't supported at this time.
   *
   * @public
   */
  eventTypeCategory?: EventTypeCategory | undefined;

  /**
   * This parameter specifies if the Health event is a public Amazon Web Services service event or an account-specific event.
   *
   * - If the `eventScopeCode` value is `PUBLIC`, then the `affectedAccounts` value is always empty.
   * - If the `eventScopeCode` value is `ACCOUNT_SPECIFIC`, then the `affectedAccounts` value lists the affected Amazon Web Services accounts in your organization. For example, if an event affects a service such as Amazon Elastic Compute Cloud and you have Amazon Web Services accounts that use that service, those account IDs appear in the response.
   * - If the `eventScopeCode` value is `NONE`, then the `eventArn` that you specified in the request is invalid or doesn't exist.
   *
   * @public
   */
  eventScopeCode?: EventScopeCode | undefined;

  /**
   * The Amazon Web Services Region name of the event.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * The date and time that the event began.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The date and time that the event ended.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The most recent date and time that the event was updated.
   *
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * The most recent status of the event. Possible values are `open`, `closed`, and `upcoming`.
   *
   * @public
   */
  statusCode?: EventStatusCode | undefined;

  /**
   * The actionability classification of the event. Possible values are `ACTION_REQUIRED`, `ACTION_MAY_BE_REQUIRED` and `INFORMATIONAL`. Events with `ACTION_REQUIRED` actionability require customer action to resolve or mitigate the event. Events with `ACTION_MAY_BE_REQUIRED` actionability indicates that the current status is unknown or conditional and inspection is needed to determine if action is required. Events with `INFORMATIONAL` actionability are provided for awareness and do not require immediate action.
   *
   * @public
   */
  actionability?: EventActionability | undefined;

  /**
   * A list of persona classifications that indicate the target audience for the event. Possible values are `OPERATIONS`, `SECURITY`, and `BILLING`. Events can be associated with multiple personas to indicate relevance to different teams or roles within an organization.
   *
   * @public
   */
  personas?: EventPersona[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventsForOrganizationResponse {
  /**
   * The events that match the specified filter criteria.
   *
   * @public
   */
  events?: OrganizationEvent[] | undefined;

  /**
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The values to use to filter results from the [DescribeEventTypes](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html) operation.
 *
 * @public
 */
export interface EventTypeFilter {
  /**
   * A list of event type codes.
   *
   * @public
   */
  eventTypeCodes?: string[] | undefined;

  /**
   * The Amazon Web Services services associated with the event. For example, `EC2`, `RDS`.
   *
   * @public
   */
  services?: string[] | undefined;

  /**
   * A list of event type category codes. Possible values are `issue`, `accountNotification`, or `scheduledChange`. Currently, the `investigation` value isn't supported at this time.
   *
   * @public
   */
  eventTypeCategories?: EventTypeCategory[] | undefined;

  /**
   * A list of actionability values to filter event types. Possible values are `ACTION_REQUIRED`, `ACTION_MAY_BE_REQUIRED` and `INFORMATIONAL`.
   *
   * @public
   */
  actionabilities?: EventTypeActionability[] | undefined;

  /**
   * A list of persona classifications to filter event types. Possible values are `OPERATIONS`, `SECURITY`, and `BILLING`.
   *
   * @public
   */
  personas?: EventTypePersona[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventTypesRequest {
  /**
   * Values to narrow the results returned.
   *
   * @public
   */
  filter?: EventTypeFilter | undefined;

  /**
   * The locale (language) to return information in. English (en) is the default and the only supported value at this time.
   *
   * @public
   */
  locale?: string | undefined;

  /**
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return in one batch, between 10 and 100, inclusive.
   *
   * > **Note:** If you don't specify the `maxResults` parameter, this operation returns a maximum of 30 items by default.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains the metadata about a type of event that is reported by Health. The `EventType` shows the category, service, and the event type code of the event. For example, an `issue` might be the category, `EC2` the service, and `AWS_EC2_SYSTEM_MAINTENANCE_EVENT` the event type code.
 *
 * You can use the [DescribeEventTypes](https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html) API operation to return this information about an event.
 *
 * You can also use the Amazon CloudWatch Events console to create a rule so that you can get notified or take action when Health delivers a specific event to your Amazon Web Services account. For more information, see [Monitor for Health events with Amazon CloudWatch Events](https://docs.aws.amazon.com/health/latest/ug/cloudwatch-events-health.html) in the *Health User Guide*.
 *
 * @public
 */
export interface EventType {
  /**
   * The Amazon Web Services service that is affected by the event. For example, `EC2`, `RDS`.
   *
   * @public
   */
  service?: string | undefined;

  /**
   * The unique identifier for the event type. The format is `AWS_SERVICE_DESCRIPTION`; for example, `AWS_EC2_SYSTEM_MAINTENANCE_EVENT`.
   *
   * @public
   */
  code?: string | undefined;

  /**
   * A list of event type category codes. Possible values are `issue`, `accountNotification`, or `scheduledChange`. Currently, the `investigation` value isn't supported at this time.
   *
   * @public
   */
  category?: EventTypeCategory | undefined;

  /**
   * The actionability classification of the event. Possible values are `ACTION_REQUIRED`, `ACTION_MAY_BE_REQUIRED` and `INFORMATIONAL`. Events with `ACTION_REQUIRED` actionability require customer action to resolve or mitigate the event. Events with `ACTION_MAY_BE_REQUIRED` actionability indicates that the current status is unknown or conditional and inspection is needed to determine if action is required. Events with `INFORMATIONAL` actionability are provided for awareness and do not require immediate action.
   *
   * @public
   */
  actionability?: EventTypeActionability | undefined;

  /**
   * A list of persona classifications that indicate the target audience for the event. Possible values are `OPERATIONS`, `SECURITY`, and `BILLING`. Events can be associated with multiple personas to indicate relevance to different teams or roles within an organization.
   *
   * @public
   */
  personas?: EventTypePersona[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventTypesResponse {
  /**
   * A list of event types that match the filter criteria. Event types have a category (`issue`, `accountNotification`, or `scheduledChange`), a service (for example, `EC2`, `RDS`, `DATAPIPELINE`, `BILLING`), and a code (in the format `AWS_SERVICE_DESCRIPTION`; for example, `AWS_EC2_SYSTEM_MAINTENANCE_EVENT`).
   *
   * @public
   */
  eventTypes?: EventType[] | undefined;

  /**
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHealthServiceStatusForOrganizationResponse {
  /**
   * Information about the status of enabling or disabling the Health organizational view feature in your organization.
   *
   * Valid values are `ENABLED | DISABLED | PENDING`.
   *
   * @public
   */
  healthServiceAccessStatusForOrganization?: string | undefined;
}

/**
 * A filter for narrowing down service lifecycle results.
 *
 * @public
 */
export interface ServiceLifecycleFilter {
  /**
   * The Amazon Web Services service name to filter by.
   *
   * @public
   */
  service?: string | undefined;
}

/**
 * @public
 */
export interface DescribeServiceLifecycleRequest {
  /**
   * Values to narrow the results returned.
   *
   * @public
   */
  filter?: ServiceLifecycleFilter | undefined;

  /**
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return in one batch, between 1 and 20, inclusive.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A lifecycle event for an Amazon Web Services service version, such as end-of-support or end-of-life.
 *
 * @public
 */
export interface LifecycleEvent {
  /**
   * The type of lifecycle event (for example, end-of-support, end-of-life).
   *
   * @public
   */
  lifecycleEventType?: string | undefined;

  /**
   * The date of the lifecycle event.
   *
   * @public
   */
  date?: Date | undefined;

  /**
   * The Amazon Web Services Regions affected by this lifecycle event.
   *
   * @public
   */
  regions?: string[] | undefined;

  /**
   * The potential impact risks associated with this lifecycle event.
   *
   * @public
   */
  impactRisks?: string[] | undefined;

  /**
   * A description of the lifecycle event.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Contains lifecycle information for an Amazon Web Services service version, including lifecycle events and version recommendations.
 *
 * @public
 */
export interface ServiceLifecycle {
  /**
   * The name of the Amazon Web Services service.
   *
   * @public
   */
  service?: string | undefined;

  /**
   * The version of the service.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * A human-readable title for the lifecycle entry.
   *
   * @public
   */
  title?: string | undefined;

  /**
   * The recommended version to upgrade to.
   *
   * @public
   */
  recommendedVersion?: string | undefined;

  /**
   * The list of lifecycle events for this service version.
   *
   * @public
   */
  lifecycleEvents?: LifecycleEvent[] | undefined;
}

/**
 * @public
 */
export interface DescribeServiceLifecycleResponse {
  /**
   * The list of service lifecycle entries matching the filter criteria.
   *
   * @public
   */
  serviceLifecycles?: ServiceLifecycle[] | undefined;

  /**
   * If the results of a search are large, only a portion of the results are returned, and a `nextToken` pagination token is returned in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When all results have been returned, the response does not contain a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;
}
