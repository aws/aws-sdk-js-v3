// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { HealthServiceException as __BaseException } from "./HealthServiceException";

/**
 * @public
 * @enum
 */
export const EntityStatusCode = {
  IMPAIRED: "IMPAIRED",
  PENDING: "PENDING",
  RESOLVED: "RESOLVED",
  UNIMPAIRED: "UNIMPAIRED",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type EntityStatusCode = (typeof EntityStatusCode)[keyof typeof EntityStatusCode];

/**
 * <p>The number of entities in an account that are impacted by a specific event aggregated by the entity status codes.</p>
 * @public
 */
export interface AccountEntityAggregate {
  /**
   * <p>The 12-digit Amazon Web Services account numbers that contains the affected entities.</p>
   * @public
   */
  accountId?: string | undefined;

  /**
   * <p>The number of entities that match the filter criteria for the specified events.</p>
   * @public
   */
  count?: number | undefined;

  /**
   * <p>The number of affected entities aggregated by the entity status codes.</p>
   * @public
   */
  statuses?: Partial<Record<EntityStatusCode, number>> | undefined;
}

/**
 * <p>Information about an entity that is affected by a Health event.</p>
 * @public
 */
export interface AffectedEntity {
  /**
   * <p>The unique identifier for the entity. Format: <code>arn:aws:health:<i>entity-region</i>:<i>aws-account</i>:entity/<i>entity-id</i>
   *             </code>. Example: <code>arn:aws:health:us-east-1:111222333444:entity/AVh5GGT7ul1arKr1sE1K</code>
   *          </p>
   * @public
   */
  entityArn?: string | undefined;

  /**
   * <p>The unique identifier for the event. The event ARN has the
   * <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>
   * format.</p>
   *          <p>For example, an event ARN might look like the following:</p>
   *          <p>
   *             <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   * @public
   */
  eventArn?: string | undefined;

  /**
   * <p>The ID of the affected entity.</p>
   * @public
   */
  entityValue?: string | undefined;

  /**
   * <p>The URL of the affected entity.</p>
   * @public
   */
  entityUrl?: string | undefined;

  /**
   * <p>The 12-digit Amazon Web Services account number that contains the affected entity.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The most recent time that the entity was updated.</p>
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * <p>The most recent status of the entity affected by the event. The possible values are
   *             <code>IMPAIRED</code>, <code>UNIMPAIRED</code>, and <code>UNKNOWN</code>.</p>
   * @public
   */
  statusCode?: EntityStatusCode | undefined;

  /**
   * <p>A map of entity tags attached to the affected entity.</p>
   *          <note>
   *             <p>Currently, the <code>tags</code> property isn't supported.</p>
   *          </note>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Additional metadata about the affected entity.</p>
   * @public
   */
  entityMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeAffectedAccountsForOrganizationRequest {
  /**
   * <p>The unique identifier for the event. The event ARN has the
   * <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>
   * format.</p>
   *          <p>For example, an event ARN might look like the following:</p>
   *          <p>
   *             <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   * @public
   */
  eventArn: string | undefined;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in one batch, between 10 and 100, inclusive.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const EventScopeCode = {
  ACCOUNT_SPECIFIC: "ACCOUNT_SPECIFIC",
  NONE: "NONE",
  PUBLIC: "PUBLIC",
} as const;

/**
 * @public
 */
export type EventScopeCode = (typeof EventScopeCode)[keyof typeof EventScopeCode];

/**
 * @public
 */
export interface DescribeAffectedAccountsForOrganizationResponse {
  /**
   * <p>A JSON set of elements of the affected accounts.</p>
   * @public
   */
  affectedAccounts?: string[] | undefined;

  /**
   * <p>This parameter specifies if the Health event is a public Amazon Web Services service event or an account-specific event.</p>
   *          <ul>
   *             <li>
   *                <p>If the <code>eventScopeCode</code> value is <code>PUBLIC</code>, then the
   *                   <code>affectedAccounts</code> value is always empty.</p>
   *             </li>
   *             <li>
   *                <p>If the <code>eventScopeCode</code> value is <code>ACCOUNT_SPECIFIC</code>, then
   *                the <code>affectedAccounts</code> value lists the affected Amazon Web Services accounts in your
   *                organization. For example, if an event affects a service such as Amazon Elastic Compute Cloud and you
   *                have Amazon Web Services accounts that use that service, those account IDs appear in the
   *                response.</p>
   *             </li>
   *             <li>
   *                <p>If the <code>eventScopeCode</code> value is <code>NONE</code>, then the
   *                   <code>eventArn</code> that you specified in the request is invalid or doesn't
   *                exist.</p>
   *             </li>
   *          </ul>
   * @public
   */
  eventScopeCode?: EventScopeCode | undefined;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
 * @public
 */
export class InvalidPaginationToken extends __BaseException {
  readonly name: "InvalidPaginationToken" = "InvalidPaginationToken";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidPaginationToken, __BaseException>) {
    super({
      name: "InvalidPaginationToken",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidPaginationToken.prototype);
  }
}

/**
 * <p>A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set:
 *          match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or
 *             <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code>
 *          inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where
 *          the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set
 *          and <code>to</code> is set: match items where the timestamp value is equal to or before
 *             <code>to</code>.</p>
 * @public
 */
export interface DateTimeRange {
  /**
   * <p>The starting date and time of a time range.</p>
   * @public
   */
  from?: Date | undefined;

  /**
   * <p>The ending date and time of a time range.</p>
   * @public
   */
  to?: Date | undefined;
}

/**
 * <p>The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operation.</p>
 * @public
 */
export interface EntityFilter {
  /**
   * <p>A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code>
   *          </p>
   * @public
   */
  eventArns: string[] | undefined;

  /**
   * <p>A list of entity ARNs (unique identifiers).</p>
   * @public
   */
  entityArns?: string[] | undefined;

  /**
   * <p>A list of IDs for affected entities.</p>
   * @public
   */
  entityValues?: string[] | undefined;

  /**
   * <p>A list of the most recent dates and times that the entity was updated.</p>
   * @public
   */
  lastUpdatedTimes?: DateTimeRange[] | undefined;

  /**
   * <p>A map of entity tags attached to the affected entity.</p>
   *          <note>
   *             <p>Currently, the <code>tags</code> property isn't supported.</p>
   *          </note>
   * @public
   */
  tags?: Record<string, string>[] | undefined;

  /**
   * <p>A list of entity status codes (<code>IMPAIRED</code>, <code>UNIMPAIRED</code>, or
   *             <code>UNKNOWN</code>).</p>
   * @public
   */
  statusCodes?: EntityStatusCode[] | undefined;
}

/**
 * @public
 */
export interface DescribeAffectedEntitiesRequest {
  /**
   * <p>Values to narrow the results returned. At least one event ARN is required.</p>
   * @public
   */
  filter: EntityFilter | undefined;

  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   * @public
   */
  locale?: string | undefined;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in one batch, between 10 and 100, inclusive.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAffectedEntitiesResponse {
  /**
   * <p>The entities that match the filter criteria.</p>
   * @public
   */
  entities?: AffectedEntity[] | undefined;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The specified locale is not supported.</p>
 * @public
 */
export class UnsupportedLocale extends __BaseException {
  readonly name: "UnsupportedLocale" = "UnsupportedLocale";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnsupportedLocale, __BaseException>) {
    super({
      name: "UnsupportedLocale",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnsupportedLocale.prototype);
  }
}

/**
 * <p>A JSON set of elements including the <code>awsAccountId</code>, <code>eventArn</code> and a set of <code>statusCodes</code>.</p>
 * @public
 */
export interface EntityAccountFilter {
  /**
   * <p>The unique identifier for the event. The event ARN has the
   * <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>
   * format.</p>
   *          <p>For example, an event ARN might look like the following:</p>
   *          <p>
   *             <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   * @public
   */
  eventArn: string | undefined;

  /**
   * <p>The 12-digit Amazon Web Services account numbers that contains the affected entities.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>A list of entity status codes.</p>
   * @public
   */
  statusCodes?: EntityStatusCode[] | undefined;
}

/**
 * <p>The values used to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operations.</p>
 * @public
 */
export interface EventAccountFilter {
  /**
   * <p>The unique identifier for the event. The event ARN has the
   * <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>
   * format.</p>
   *          <p>For example, an event ARN might look like the following:</p>
   *          <p>
   *             <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   * @public
   */
  eventArn: string | undefined;

  /**
   * <p>The 12-digit Amazon Web Services account numbers that contains the affected entities.</p>
   * @public
   */
  awsAccountId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAffectedEntitiesForOrganizationRequest {
  /**
   * <p>A JSON set of elements including the <code>awsAccountId</code> and the
   *             <code>eventArn</code>.</p>
   *
   * @deprecated This property is deprecated, use organizationEntityAccountFilters instead.
   * @public
   */
  organizationEntityFilters?: EventAccountFilter[] | undefined;

  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   * @public
   */
  locale?: string | undefined;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in one batch, between 10 and 100, inclusive.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A JSON set of elements including the <code>awsAccountId</code>, <code>eventArn</code> and a set of <code>statusCodes</code>.</p>
   * @public
   */
  organizationEntityAccountFilters?: EntityAccountFilter[] | undefined;
}

/**
 * <p>Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operation can't find or process a
 *          specific entity.</p>
 * @public
 */
export interface OrganizationAffectedEntitiesErrorItem {
  /**
   * <p>The 12-digit Amazon Web Services account numbers that contains the affected entities.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The unique identifier for the event. The event ARN has the
   * <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>
   * format.</p>
   *          <p>For example, an event ARN might look like the following:</p>
   *          <p>
   *             <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   * @public
   */
  eventArn?: string | undefined;

  /**
   * <p>The name of the error.</p>
   * @public
   */
  errorName?: string | undefined;

  /**
   * <p>A message that describes the error. Follow the error message and retry your request.</p>
   *          <p>For example, the <code>InvalidAccountInputError</code> error message appears if
   *          you call the <code>DescribeAffectedEntitiesForOrganization</code> operation and specify the
   *             <code>AccountSpecific</code> value for the <code>EventScopeCode</code> parameter, but
   *          don't specify an Amazon Web Services account.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAffectedEntitiesForOrganizationResponse {
  /**
   * <p>A JSON set of elements including the <code>awsAccountId</code> and its
   *             <code>entityArn</code>, <code>entityValue</code> and its <code>entityArn</code>,
   *             <code>lastUpdatedTime</code>, and <code>statusCode</code>.</p>
   * @public
   */
  entities?: AffectedEntity[] | undefined;

  /**
   * <p>A JSON set of elements of the failed response, including the <code>awsAccountId</code>,
   *             <code>errorMessage</code>, <code>errorName</code>, and <code>eventArn</code>.</p>
   * @public
   */
  failedSet?: OrganizationAffectedEntitiesErrorItem[] | undefined;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEntityAggregatesRequest {
  /**
   * <p>A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code>
   *          </p>
   * @public
   */
  eventArns?: string[] | undefined;
}

/**
 * <p>The number of entities that are affected by one or more events. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEntityAggregates.html">DescribeEntityAggregates</a> operation.</p>
 * @public
 */
export interface EntityAggregate {
  /**
   * <p>The unique identifier for the event. The event ARN has the
   * <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>
   * format.</p>
   *          <p>For example, an event ARN might look like the following:</p>
   *          <p>
   *             <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   * @public
   */
  eventArn?: string | undefined;

  /**
   * <p>The number of entities that match the criteria for the specified events.</p>
   * @public
   */
  count?: number | undefined;

  /**
   * <p>The number of affected entities aggregated by the entity status codes.</p>
   * @public
   */
  statuses?: Partial<Record<EntityStatusCode, number>> | undefined;
}

/**
 * @public
 */
export interface DescribeEntityAggregatesResponse {
  /**
   * <p>The number of entities that are affected by each of the specified events.</p>
   * @public
   */
  entityAggregates?: EntityAggregate[] | undefined;
}

/**
 * @public
 */
export interface DescribeEntityAggregatesForOrganizationRequest {
  /**
   * <p>A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code>
   *          </p>
   * @public
   */
  eventArns: string[] | undefined;

  /**
   * <p>A list of 12-digit Amazon Web Services account numbers that contains the affected entities.</p>
   * @public
   */
  awsAccountIds?: string[] | undefined;
}

/**
 * <p>The aggregate results of entities affected by the specified event in your organization.
 *          The results are aggregated by the entity status codes for the specified set of accountsIDs.</p>
 * @public
 */
export interface OrganizationEntityAggregate {
  /**
   * <p>A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code>
   *          </p>
   * @public
   */
  eventArn?: string | undefined;

  /**
   * <p>The number of entities for the organization that match the filter criteria for the specified events.</p>
   * @public
   */
  count?: number | undefined;

  /**
   * <p>The number of affected entities aggregated by the entitiy status codes.</p>
   * @public
   */
  statuses?: Partial<Record<EntityStatusCode, number>> | undefined;

  /**
   * <p>A list of entity aggregates for each of the specified accounts in your organization that are affected by
   *          a specific event. If there are no <code>awsAccountIds</code> provided in the request, this field will be empty in the response.</p>
   * @public
   */
  accounts?: AccountEntityAggregate[] | undefined;
}

/**
 * @public
 */
export interface DescribeEntityAggregatesForOrganizationResponse {
  /**
   * <p>The list of entity aggregates for each of the specified accounts that are affected by each of the specified events.</p>
   * @public
   */
  organizationEntityAggregates?: OrganizationEntityAggregate[] | undefined;
}

/**
 * @public
 * @enum
 */
export const EventAggregateField = {
  EventTypeCategory: "eventTypeCategory",
} as const;

/**
 * @public
 */
export type EventAggregateField = (typeof EventAggregateField)[keyof typeof EventAggregateField];

/**
 * @public
 * @enum
 */
export const EventStatusCode = {
  CLOSED: "closed",
  OPEN: "open",
  UPCOMING: "upcoming",
} as const;

/**
 * @public
 */
export type EventStatusCode = (typeof EventStatusCode)[keyof typeof EventStatusCode];

/**
 * @public
 * @enum
 */
export const EventTypeCategory = {
  ACCOUNT_NOTIFICATION: "accountNotification",
  INVESTIGATION: "investigation",
  ISSUE: "issue",
  SCHEDULED_CHANGE: "scheduledChange",
} as const;

/**
 * @public
 */
export type EventTypeCategory = (typeof EventTypeCategory)[keyof typeof EventTypeCategory];

/**
 * <p>The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> and
 *             <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html">DescribeEventAggregates</a> operations.</p>
 * @public
 */
export interface EventFilter {
  /**
   * <p>A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code>
   *          </p>
   * @public
   */
  eventArns?: string[] | undefined;

  /**
   * <p>A list of unique identifiers for event types. For example, <code>"AWS_EC2_SYSTEM_MAINTENANCE_EVENT","AWS_RDS_MAINTENANCE_SCHEDULED".</code>
   *          </p>
   * @public
   */
  eventTypeCodes?: string[] | undefined;

  /**
   * <p>The Amazon Web Services services associated with the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   * @public
   */
  services?: string[] | undefined;

  /**
   * <p>A list of Amazon Web Services Regions.</p>
   * @public
   */
  regions?: string[] | undefined;

  /**
   * <p>A list of Amazon Web Services Availability Zones.</p>
   * @public
   */
  availabilityZones?: string[] | undefined;

  /**
   * <p>A list of dates and times that the event began.</p>
   * @public
   */
  startTimes?: DateTimeRange[] | undefined;

  /**
   * <p>A list of dates and times that the event ended.</p>
   * @public
   */
  endTimes?: DateTimeRange[] | undefined;

  /**
   * <p>A list of dates and times that the event was last updated.</p>
   * @public
   */
  lastUpdatedTimes?: DateTimeRange[] | undefined;

  /**
   * <p>A list of entity ARNs (unique identifiers).</p>
   * @public
   */
  entityArns?: string[] | undefined;

  /**
   * <p>A list of entity identifiers, such as EC2 instance IDs (<code>i-34ab692e</code>) or EBS
   *          volumes (<code>vol-426ab23e</code>).</p>
   * @public
   */
  entityValues?: string[] | undefined;

  /**
   * <p>A list of event type category codes. Possible values are
   * <code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>. Currently,
   * the <code>investigation</code> value isn't supported at this time.</p>
   * @public
   */
  eventTypeCategories?: EventTypeCategory[] | undefined;

  /**
   * <p>A map of entity tags attached to the affected entity.</p>
   *          <note>
   *             <p>Currently, the <code>tags</code> property isn't supported.</p>
   *          </note>
   * @public
   */
  tags?: Record<string, string>[] | undefined;

  /**
   * <p>A list of event status codes.</p>
   * @public
   */
  eventStatusCodes?: EventStatusCode[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventAggregatesRequest {
  /**
   * <p>Values to narrow the results returned.</p>
   * @public
   */
  filter?: EventFilter | undefined;

  /**
   * <p>The only currently supported value is <code>eventTypeCategory</code>.</p>
   * @public
   */
  aggregateField: EventAggregateField | undefined;

  /**
   * <p>The maximum number of items to return in one batch, between 10 and 100, inclusive.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The number of events of each issue type. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html">DescribeEventAggregates</a> operation.</p>
 * @public
 */
export interface EventAggregate {
  /**
   * <p>The issue type for the associated count.</p>
   * @public
   */
  aggregateValue?: string | undefined;

  /**
   * <p>The number of events of the associated issue type.</p>
   * @public
   */
  count?: number | undefined;
}

/**
 * @public
 */
export interface DescribeEventAggregatesResponse {
  /**
   * <p>The number of events in each category that meet the optional filter criteria.</p>
   * @public
   */
  eventAggregates?: EventAggregate[] | undefined;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventDetailsRequest {
  /**
   * <p>A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code>
   *          </p>
   * @public
   */
  eventArns: string[] | undefined;

  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   * @public
   */
  locale?: string | undefined;
}

/**
 * <p>Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation can't find a specified event.</p>
 * @public
 */
export interface EventDetailsErrorItem {
  /**
   * <p>The unique identifier for the event. The event ARN has the
   * <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>
   * format.</p>
   *          <p>For example, an event ARN might look like the following:</p>
   *          <p>
   *             <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   * @public
   */
  eventArn?: string | undefined;

  /**
   * <p>The name of the error.</p>
   * @public
   */
  errorName?: string | undefined;

  /**
   * <p>A message that describes the error.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>Summary information about an Health event.</p>
 *          <p>Health events can be public or account-specific:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>Public events</i> might be service events that are not specific
 *                to an Amazon Web Services account. For example, if there is an issue with an Amazon Web Services Region,
 *                Health provides information about the event, even if you don't use services or
 *                resources in that Region.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Account-specific</i> events are specific to either your
 *                Amazon Web Services account or an account in your organization. For example, if there's an issue
 *                with Amazon Elastic Compute Cloud in a Region that you use, Health provides information about the
 *                event and the affected resources in the account.</p>
 *             </li>
 *          </ul>
 *          <p>You can determine if an event is public or account-specific by using the
 *             <code>eventScopeCode</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html#AWSHealth-Type-Event-eventScopeCode">eventScopeCode</a>.</p>
 * @public
 */
export interface Event {
  /**
   * <p>The unique identifier for the event. The event ARN has the
   * <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>
   * format.</p>
   *          <p>For example, an event ARN might look like the following:</p>
   *          <p>
   *             <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The Amazon Web Services service that is affected by the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>The unique identifier for the event type. The format is <code>AWS_<i>SERVICE</i>_<i>DESCRIPTION</i>
   *             </code>; for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>.</p>
   * @public
   */
  eventTypeCode?: string | undefined;

  /**
   * <p>A list of event type category codes. Possible values are
   * <code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>. Currently,
   * the <code>investigation</code> value isn't supported at this time.</p>
   * @public
   */
  eventTypeCategory?: EventTypeCategory | undefined;

  /**
   * <p>The Amazon Web Services Region name of the event.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The Amazon Web Services Availability Zone of the event. For example, us-east-1a.</p>
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * <p>The date and time that the event began.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The date and time that the event ended.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The most recent date and time that the event was updated.</p>
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * <p>The most recent status of the event. Possible values are <code>open</code>,
   *             <code>closed</code>, and <code>upcoming</code>.</p>
   * @public
   */
  statusCode?: EventStatusCode | undefined;

  /**
   * <p>This parameter specifies if the Health event is a public Amazon Web Services service event or an account-specific event.</p>
   *          <ul>
   *             <li>
   *                <p>If the <code>eventScopeCode</code> value is <code>PUBLIC</code>, then the
   *                   <code>affectedAccounts</code> value is always empty.</p>
   *             </li>
   *             <li>
   *                <p>If the <code>eventScopeCode</code> value is <code>ACCOUNT_SPECIFIC</code>, then
   *                the <code>affectedAccounts</code> value lists the affected Amazon Web Services accounts in your
   *                organization. For example, if an event affects a service such as Amazon Elastic Compute Cloud and you
   *                have Amazon Web Services accounts that use that service, those account IDs appear in the
   *                response.</p>
   *             </li>
   *             <li>
   *                <p>If the <code>eventScopeCode</code> value is <code>NONE</code>, then the
   *                   <code>eventArn</code> that you specified in the request is invalid or doesn't
   *                exist.</p>
   *             </li>
   *          </ul>
   * @public
   */
  eventScopeCode?: EventScopeCode | undefined;
}

/**
 * <p>The detailed description of the event. Included in the information returned by the
 *             <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation.</p>
 * @public
 */
export interface EventDescription {
  /**
   * <p>The most recent description of the event.</p>
   * @public
   */
  latestDescription?: string | undefined;
}

/**
 * <p>Detailed information about an event. A combination of an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a> object, an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventDescription.html">EventDescription</a> object, and additional metadata about the event. Returned by
 *          the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation.</p>
 * @public
 */
export interface EventDetails {
  /**
   * <p>Summary information about the event.</p>
   * @public
   */
  event?: Event | undefined;

  /**
   * <p>The most recent description of the event.</p>
   * @public
   */
  eventDescription?: EventDescription | undefined;

  /**
   * <p>Additional metadata about the event.</p>
   * @public
   */
  eventMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeEventDetailsResponse {
  /**
   * <p>Information about the events that could be retrieved.</p>
   * @public
   */
  successfulSet?: EventDetails[] | undefined;

  /**
   * <p>Error messages for any events that could not be retrieved.</p>
   * @public
   */
  failedSet?: EventDetailsErrorItem[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventDetailsForOrganizationRequest {
  /**
   * <p>A set of JSON elements that includes the <code>awsAccountId</code> and the
   *             <code>eventArn</code>.</p>
   * @public
   */
  organizationEventDetailFilters: EventAccountFilter[] | undefined;

  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   * @public
   */
  locale?: string | undefined;
}

/**
 * <p>Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> operation can't find a specified
 *          event.</p>
 * @public
 */
export interface OrganizationEventDetailsErrorItem {
  /**
   * <p>Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> operation can't find a specified
   *          event.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>The unique identifier for the event. The event ARN has the
   * <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>
   * format.</p>
   *          <p>For example, an event ARN might look like the following:</p>
   *          <p>
   *             <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   * @public
   */
  eventArn?: string | undefined;

  /**
   * <p>The name of the error.</p>
   * @public
   */
  errorName?: string | undefined;

  /**
   * <p>A message that describes the error.</p>
   *          <p>If you call the <code>DescribeEventDetailsForOrganization</code> operation and receive one of the following errors, follow the recommendations in the message:</p>
   *          <ul>
   *             <li>
   *                <p>We couldn't find a public event that matches your request. To find an event that is account specific, you must enter an Amazon Web Services account ID in the request.</p>
   *             </li>
   *             <li>
   *                <p>We couldn't find an account specific event for the specified Amazon Web Services account. To find an event that is public, you must enter a null value for the Amazon Web Services account ID in the request.</p>
   *             </li>
   *             <li>
   *                <p>Your Amazon Web Services account doesn't include the Amazon Web Services Support plan required to use the
   * Health API. You must have either a Business, Enterprise On-Ramp, or Enterprise Support plan.</p>
   *             </li>
   *          </ul>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>Detailed information about an event. A combination of an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a> object, an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventDescription.html">EventDescription</a> object, and additional metadata about the event. Returned by
 *          the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> operation.</p>
 * @public
 */
export interface OrganizationEventDetails {
  /**
   * <p>The 12-digit Amazon Web Services account numbers that contains the affected entities.</p>
   * @public
   */
  awsAccountId?: string | undefined;

  /**
   * <p>Summary information about an Health event.</p>
   *          <p>Health events can be public or account-specific:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>Public events</i> might be service events that are not specific
   *                to an Amazon Web Services account. For example, if there is an issue with an Amazon Web Services Region,
   *                Health provides information about the event, even if you don't use services or
   *                resources in that Region.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>Account-specific</i> events are specific to either your
   *                Amazon Web Services account or an account in your organization. For example, if there's an issue
   *                with Amazon Elastic Compute Cloud in a Region that you use, Health provides information about the
   *                event and the affected resources in the account.</p>
   *             </li>
   *          </ul>
   *          <p>You can determine if an event is public or account-specific by using the
   *             <code>eventScopeCode</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html#AWSHealth-Type-Event-eventScopeCode">eventScopeCode</a>.</p>
   * @public
   */
  event?: Event | undefined;

  /**
   * <p>The detailed description of the event. Included in the information returned by the
   *             <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation.</p>
   * @public
   */
  eventDescription?: EventDescription | undefined;

  /**
   * <p>Additional metadata about the event.</p>
   * @public
   */
  eventMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeEventDetailsForOrganizationResponse {
  /**
   * <p>Information about the events that could be retrieved.</p>
   * @public
   */
  successfulSet?: OrganizationEventDetails[] | undefined;

  /**
   * <p>Error messages for any events that could not be retrieved.</p>
   * @public
   */
  failedSet?: OrganizationEventDetailsErrorItem[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventsRequest {
  /**
   * <p>Values to narrow the results returned.</p>
   * @public
   */
  filter?: EventFilter | undefined;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in one batch, between 10 and 100, inclusive.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   * @public
   */
  locale?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventsResponse {
  /**
   * <p>The events that match the specified filter criteria.</p>
   * @public
   */
  events?: Event[] | undefined;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The values to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html">DescribeEventsForOrganization</a> operation.</p>
 * @public
 */
export interface OrganizationEventFilter {
  /**
   * <p>A list of unique identifiers for event types. For example, <code>"AWS_EC2_SYSTEM_MAINTENANCE_EVENT","AWS_RDS_MAINTENANCE_SCHEDULED".</code>
   *          </p>
   * @public
   */
  eventTypeCodes?: string[] | undefined;

  /**
   * <p>A list of 12-digit Amazon Web Services account numbers that contains the affected entities.</p>
   * @public
   */
  awsAccountIds?: string[] | undefined;

  /**
   * <p>The Amazon Web Services services associated with the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   * @public
   */
  services?: string[] | undefined;

  /**
   * <p>A list of Amazon Web Services Regions.</p>
   * @public
   */
  regions?: string[] | undefined;

  /**
   * <p>A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set:
   *          match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or
   *             <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code>
   *          inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where
   *          the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set
   *          and <code>to</code> is set: match items where the timestamp value is equal to or before
   *             <code>to</code>.</p>
   * @public
   */
  startTime?: DateTimeRange | undefined;

  /**
   * <p>A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set:
   *          match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or
   *             <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code>
   *          inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where
   *          the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set
   *          and <code>to</code> is set: match items where the timestamp value is equal to or before
   *             <code>to</code>.</p>
   * @public
   */
  endTime?: DateTimeRange | undefined;

  /**
   * <p>A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set:
   *          match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or
   *             <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code>
   *          inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where
   *          the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set
   *          and <code>to</code> is set: match items where the timestamp value is equal to or before
   *             <code>to</code>.</p>
   * @public
   */
  lastUpdatedTime?: DateTimeRange | undefined;

  /**
   * <p>A list of entity ARNs (unique identifiers).</p>
   * @public
   */
  entityArns?: string[] | undefined;

  /**
   * <p>A list of entity identifiers, such as EC2 instance IDs (i-34ab692e) or EBS volumes (vol-426ab23e).</p>
   * @public
   */
  entityValues?: string[] | undefined;

  /**
   * <p>A list of event type category codes. Possible values are
   * <code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>. Currently,
   * the <code>investigation</code> value isn't supported at this time.</p>
   * @public
   */
  eventTypeCategories?: EventTypeCategory[] | undefined;

  /**
   * <p>A list of event status codes.</p>
   * @public
   */
  eventStatusCodes?: EventStatusCode[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventsForOrganizationRequest {
  /**
   * <p>Values to narrow the results returned.</p>
   * @public
   */
  filter?: OrganizationEventFilter | undefined;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in one batch, between 10 and 100, inclusive.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   * @public
   */
  locale?: string | undefined;
}

/**
 * <p>Summary information about an event, returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html">DescribeEventsForOrganization</a> operation.</p>
 * @public
 */
export interface OrganizationEvent {
  /**
   * <p>The unique identifier for the event. The event ARN has the
   * <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>
   * format.</p>
   *          <p>For example, an event ARN might look like the following:</p>
   *          <p>
   *             <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The Amazon Web Services service that is affected by the event, such as EC2 and RDS.</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>The unique identifier for the event type. The format is
   *             <code>AWS_SERVICE_DESCRIPTION</code>. For example,
   *             <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>.</p>
   * @public
   */
  eventTypeCode?: string | undefined;

  /**
   * <p>A list of event type category codes. Possible values are
   * <code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>. Currently,
   * the <code>investigation</code> value isn't supported at this time.</p>
   * @public
   */
  eventTypeCategory?: EventTypeCategory | undefined;

  /**
   * <p>This parameter specifies if the Health event is a public Amazon Web Services service event or an account-specific event.</p>
   *          <ul>
   *             <li>
   *                <p>If the <code>eventScopeCode</code> value is <code>PUBLIC</code>, then the
   *                   <code>affectedAccounts</code> value is always empty.</p>
   *             </li>
   *             <li>
   *                <p>If the <code>eventScopeCode</code> value is <code>ACCOUNT_SPECIFIC</code>, then
   *                the <code>affectedAccounts</code> value lists the affected Amazon Web Services accounts in your
   *                organization. For example, if an event affects a service such as Amazon Elastic Compute Cloud and you
   *                have Amazon Web Services accounts that use that service, those account IDs appear in the
   *                response.</p>
   *             </li>
   *             <li>
   *                <p>If the <code>eventScopeCode</code> value is <code>NONE</code>, then the
   *                   <code>eventArn</code> that you specified in the request is invalid or doesn't
   *                exist.</p>
   *             </li>
   *          </ul>
   * @public
   */
  eventScopeCode?: EventScopeCode | undefined;

  /**
   * <p>The Amazon Web Services Region name of the event.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>The date and time that the event began.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The date and time that the event ended.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The most recent date and time that the event was updated.</p>
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * <p>The most recent status of the event. Possible values are <code>open</code>,
   *             <code>closed</code>, and <code>upcoming</code>.</p>
   * @public
   */
  statusCode?: EventStatusCode | undefined;
}

/**
 * @public
 */
export interface DescribeEventsForOrganizationResponse {
  /**
   * <p>The events that match the specified filter criteria.</p>
   * @public
   */
  events?: OrganizationEvent[] | undefined;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html">DescribeEventTypes</a>
 *          operation.</p>
 * @public
 */
export interface EventTypeFilter {
  /**
   * <p>A list of event type codes.</p>
   * @public
   */
  eventTypeCodes?: string[] | undefined;

  /**
   * <p>The Amazon Web Services services associated with the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   * @public
   */
  services?: string[] | undefined;

  /**
   * <p>A list of event type category codes. Possible values are
   * <code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>. Currently,
   * the <code>investigation</code> value isn't supported at this time.</p>
   * @public
   */
  eventTypeCategories?: EventTypeCategory[] | undefined;
}

/**
 * @public
 */
export interface DescribeEventTypesRequest {
  /**
   * <p>Values to narrow the results returned.</p>
   * @public
   */
  filter?: EventTypeFilter | undefined;

  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   * @public
   */
  locale?: string | undefined;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of items to return in one batch, between 10 and 100, inclusive.</p>
   *          <note>
   *             <p>If you don't specify the <code>maxResults</code> parameter, this operation returns a
   *             maximum of 30 items by default.</p>
   *          </note>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains the metadata about a type of event that is reported by Health. The
 *             <code>EventType</code> shows the category, service, and the event type code of the
 *          event. For example, an <code>issue</code> might be the category, <code>EC2</code> the
 *          service, and <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code> the event type code.</p>
 *          <p>You can use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html">DescribeEventTypes</a> API operation to return this information
 *          about an event.</p>
 *          <p>You can also use the Amazon CloudWatch Events console to create a rule so that you can get notified or
 *          take action when Health delivers a specific event to your Amazon Web Services account. For more
 *          information, see <a href="https://docs.aws.amazon.com/health/latest/ug/cloudwatch-events-health.html">Monitor for Health events with Amazon CloudWatch Events</a> in the
 *             <i>Health User Guide</i>.</p>
 * @public
 */
export interface EventType {
  /**
   * <p>The Amazon Web Services service that is affected by the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   * @public
   */
  service?: string | undefined;

  /**
   * <p>The unique identifier for the event type. The format is <code>AWS_<i>SERVICE</i>_<i>DESCRIPTION</i>
   *             </code>; for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>.</p>
   * @public
   */
  code?: string | undefined;

  /**
   * <p>A list of event type category codes. Possible values are
   * <code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>. Currently,
   * the <code>investigation</code> value isn't supported at this time.</p>
   * @public
   */
  category?: EventTypeCategory | undefined;
}

/**
 * @public
 */
export interface DescribeEventTypesResponse {
  /**
   * <p>A list of event types that match the filter criteria. Event types have a category
   *             (<code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>),
   *          a service (for example, <code>EC2</code>, <code>RDS</code>, <code>DATAPIPELINE</code>,
   *             <code>BILLING</code>), and a code (in the format
   *                <code>AWS_<i>SERVICE</i>_<i>DESCRIPTION</i>
   *             </code>; for
   *          example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>).</p>
   * @public
   */
  eventTypes?: EventType[] | undefined;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeHealthServiceStatusForOrganizationResponse {
  /**
   * <p>Information about the status of enabling or disabling the Health organizational
   *          view feature in your organization.</p>
   *          <p>Valid values are <code>ENABLED | DISABLED | PENDING</code>. </p>
   * @public
   */
  healthServiceAccessStatusForOrganization?: string | undefined;
}

/**
 * <p>
 *             <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> is already in progress. Wait for the
 *          action to complete before trying again. To get the current status, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeHealthServiceStatusForOrganization.html">DescribeHealthServiceStatusForOrganization</a> operation.</p>
 * @public
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}
