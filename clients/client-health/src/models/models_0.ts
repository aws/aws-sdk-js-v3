// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { HealthServiceException as __BaseException } from "./HealthServiceException";

export enum EntityStatusCode {
  IMPAIRED = "IMPAIRED",
  UNIMPAIRED = "UNIMPAIRED",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>Information about an entity that is affected by a Health event.</p>
 */
export interface AffectedEntity {
  /**
   * <p>The unique identifier for the entity. Format: <code>arn:aws:health:<i>entity-region</i>:<i>aws-account</i>:entity/<i>entity-id</i>
   *             </code>. Example: <code>arn:aws:health:us-east-1:111222333444:entity/AVh5GGT7ul1arKr1sE1K</code>
   *          </p>
   */
  entityArn?: string;

  /**
   * <p>The unique identifier for the event. The event ARN has the
   * <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>
   * format.</p>
   *          <p>For example, an event ARN might look like the following:</p>
   *          <p>
   *             <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   */
  eventArn?: string;

  /**
   * <p>The ID of the affected entity.</p>
   */
  entityValue?: string;

  /**
   * <p>The URL of the affected entity.</p>
   */
  entityUrl?: string;

  /**
   * <p>The 12-digit Amazon Web Services account number that contains the affected entity.</p>
   */
  awsAccountId?: string;

  /**
   * <p>The most recent time that the entity was updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The most recent status of the entity affected by the event. The possible values are
   *             <code>IMPAIRED</code>, <code>UNIMPAIRED</code>, and <code>UNKNOWN</code>.</p>
   */
  statusCode?: EntityStatusCode | string;

  /**
   * <p>A map of entity tags attached to the affected entity.</p>
   *          <note>
   *             <p>Currently, the <code>tags</code> property isn't supported.</p>
   *          </note>
   */
  tags?: Record<string, string>;
}

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
   */
  eventArn: string | undefined;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of items to return in one batch, between 10 and 100, inclusive.</p>
   */
  maxResults?: number;
}

export enum EventScopeCode {
  ACCOUNT_SPECIFIC = "ACCOUNT_SPECIFIC",
  NONE = "NONE",
  PUBLIC = "PUBLIC",
}

export interface DescribeAffectedAccountsForOrganizationResponse {
  /**
   * <p>A JSON set of elements of the affected accounts.</p>
   */
  affectedAccounts?: string[];

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
   */
  eventScopeCode?: EventScopeCode | string;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;
}

/**
 * <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
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
 */
export interface DateTimeRange {
  /**
   * <p>The starting date and time of a time range.</p>
   */
  from?: Date;

  /**
   * <p>The ending date and time of a time range.</p>
   */
  to?: Date;
}

/**
 * <p>The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntities.html">DescribeAffectedEntities</a> operation.</p>
 */
export interface EntityFilter {
  /**
   * <p>A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code>
   *          </p>
   */
  eventArns: string[] | undefined;

  /**
   * <p>A list of entity ARNs (unique identifiers).</p>
   */
  entityArns?: string[];

  /**
   * <p>A list of IDs for affected entities.</p>
   */
  entityValues?: string[];

  /**
   * <p>A list of the most recent dates and times that the entity was updated.</p>
   */
  lastUpdatedTimes?: DateTimeRange[];

  /**
   * <p>A map of entity tags attached to the affected entity.</p>
   *          <note>
   *             <p>Currently, the <code>tags</code> property isn't supported.</p>
   *          </note>
   */
  tags?: Record<string, string>[];

  /**
   * <p>A list of entity status codes (<code>IMPAIRED</code>, <code>UNIMPAIRED</code>, or
   *             <code>UNKNOWN</code>).</p>
   */
  statusCodes?: (EntityStatusCode | string)[];
}

export interface DescribeAffectedEntitiesRequest {
  /**
   * <p>Values to narrow the results returned. At least one event ARN is required.</p>
   */
  filter: EntityFilter | undefined;

  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   */
  locale?: string;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of items to return in one batch, between 10 and 100, inclusive.</p>
   */
  maxResults?: number;
}

export interface DescribeAffectedEntitiesResponse {
  /**
   * <p>The entities that match the filter criteria.</p>
   */
  entities?: AffectedEntity[];

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;
}

/**
 * <p>The specified locale is not supported.</p>
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
 * <p>The values used to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operations.</p>
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
   */
  eventArn: string | undefined;

  /**
   * <p>The 12-digit Amazon Web Services account numbers that contains the affected entities.</p>
   */
  awsAccountId?: string;
}

export interface DescribeAffectedEntitiesForOrganizationRequest {
  /**
   * <p>A JSON set of elements including the <code>awsAccountId</code> and the
   *             <code>eventArn</code>.</p>
   */
  organizationEntityFilters: EventAccountFilter[] | undefined;

  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   */
  locale?: string;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of items to return in one batch, between 10 and 100, inclusive.</p>
   */
  maxResults?: number;
}

/**
 * <p>Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeAffectedEntitiesForOrganization.html">DescribeAffectedEntitiesForOrganization</a> operation can't find or process a
 *          specific entity.</p>
 */
export interface OrganizationAffectedEntitiesErrorItem {
  /**
   * <p>The 12-digit Amazon Web Services account numbers that contains the affected entities.</p>
   */
  awsAccountId?: string;

  /**
   * <p>The unique identifier for the event. The event ARN has the
   * <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>
   * format.</p>
   *          <p>For example, an event ARN might look like the following:</p>
   *          <p>
   *             <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   */
  eventArn?: string;

  /**
   * <p>The name of the error.</p>
   */
  errorName?: string;

  /**
   * <p>The unique identifier for the event type. The format is
   *             <code>AWS_SERVICE_DESCRIPTION</code>. For example,
   *             <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>.</p>
   */
  errorMessage?: string;
}

export interface DescribeAffectedEntitiesForOrganizationResponse {
  /**
   * <p>A JSON set of elements including the <code>awsAccountId</code> and its
   *             <code>entityArn</code>, <code>entityValue</code> and its <code>entityArn</code>,
   *             <code>lastUpdatedTime</code>, and <code>statusCode</code>.</p>
   */
  entities?: AffectedEntity[];

  /**
   * <p>A JSON set of elements of the failed response, including the <code>awsAccountId</code>,
   *             <code>errorMessage</code>, <code>errorName</code>, and <code>eventArn</code>.</p>
   */
  failedSet?: OrganizationAffectedEntitiesErrorItem[];

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;
}

export interface DescribeEntityAggregatesRequest {
  /**
   * <p>A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code>
   *          </p>
   */
  eventArns?: string[];
}

/**
 * <p>The number of entities that are affected by one or more events. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEntityAggregates.html">DescribeEntityAggregates</a> operation.</p>
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
   */
  eventArn?: string;

  /**
   * <p>The number of entities that match the criteria for the specified events.</p>
   */
  count?: number;
}

export interface DescribeEntityAggregatesResponse {
  /**
   * <p>The number of entities that are affected by each of the specified events.</p>
   */
  entityAggregates?: EntityAggregate[];
}

export enum EventAggregateField {
  EventTypeCategory = "eventTypeCategory",
}

export enum EventStatusCode {
  CLOSED = "closed",
  OPEN = "open",
  UPCOMING = "upcoming",
}

export enum EventTypeCategory {
  ACCOUNT_NOTIFICATION = "accountNotification",
  INVESTIGATION = "investigation",
  ISSUE = "issue",
  SCHEDULED_CHANGE = "scheduledChange",
}

/**
 * <p>The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEvents.html">DescribeEvents</a> and
 *             <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html">DescribeEventAggregates</a> operations.</p>
 */
export interface EventFilter {
  /**
   * <p>A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code>
   *          </p>
   */
  eventArns?: string[];

  /**
   * <p>A list of unique identifiers for event types. For example, <code>"AWS_EC2_SYSTEM_MAINTENANCE_EVENT","AWS_RDS_MAINTENANCE_SCHEDULED".</code>
   *          </p>
   */
  eventTypeCodes?: string[];

  /**
   * <p>The Amazon Web Services services associated with the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   */
  services?: string[];

  /**
   * <p>A list of Amazon Web Services Regions.</p>
   */
  regions?: string[];

  /**
   * <p>A list of Amazon Web Services Availability Zones.</p>
   */
  availabilityZones?: string[];

  /**
   * <p>A list of dates and times that the event began.</p>
   */
  startTimes?: DateTimeRange[];

  /**
   * <p>A list of dates and times that the event ended.</p>
   */
  endTimes?: DateTimeRange[];

  /**
   * <p>A list of dates and times that the event was last updated.</p>
   */
  lastUpdatedTimes?: DateTimeRange[];

  /**
   * <p>A list of entity ARNs (unique identifiers).</p>
   */
  entityArns?: string[];

  /**
   * <p>A list of entity identifiers, such as EC2 instance IDs (<code>i-34ab692e</code>) or EBS
   *          volumes (<code>vol-426ab23e</code>).</p>
   */
  entityValues?: string[];

  /**
   * <p>A list of event type category codes. Possible values are
   * <code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>. Currently,
   * the <code>investigation</code> value isn't supported at this time.</p>
   */
  eventTypeCategories?: (EventTypeCategory | string)[];

  /**
   * <p>A map of entity tags attached to the affected entity.</p>
   *          <note>
   *             <p>Currently, the <code>tags</code> property isn't supported.</p>
   *          </note>
   */
  tags?: Record<string, string>[];

  /**
   * <p>A list of event status codes.</p>
   */
  eventStatusCodes?: (EventStatusCode | string)[];
}

export interface DescribeEventAggregatesRequest {
  /**
   * <p>Values to narrow the results returned.</p>
   */
  filter?: EventFilter;

  /**
   * <p>The only currently supported value is <code>eventTypeCategory</code>.</p>
   */
  aggregateField: EventAggregateField | string | undefined;

  /**
   * <p>The maximum number of items to return in one batch, between 10 and 100, inclusive.</p>
   */
  maxResults?: number;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;
}

/**
 * <p>The number of events of each issue type. Returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventAggregates.html">DescribeEventAggregates</a> operation.</p>
 */
export interface EventAggregate {
  /**
   * <p>The issue type for the associated count.</p>
   */
  aggregateValue?: string;

  /**
   * <p>The number of events of the associated issue type.</p>
   */
  count?: number;
}

export interface DescribeEventAggregatesResponse {
  /**
   * <p>The number of events in each category that meet the optional filter criteria.</p>
   */
  eventAggregates?: EventAggregate[];

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;
}

export interface DescribeEventDetailsRequest {
  /**
   * <p>A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code>
   *          </p>
   */
  eventArns: string[] | undefined;

  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   */
  locale?: string;
}

/**
 * <p>Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation can't find a specified event.</p>
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
   */
  eventArn?: string;

  /**
   * <p>The name of the error.</p>
   */
  errorName?: string;

  /**
   * <p>A message that describes the error.</p>
   */
  errorMessage?: string;
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
   */
  arn?: string;

  /**
   * <p>The Amazon Web Services service that is affected by the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   */
  service?: string;

  /**
   * <p>The unique identifier for the event type. The format is <code>AWS_<i>SERVICE</i>_<i>DESCRIPTION</i>
   *             </code>; for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>.</p>
   */
  eventTypeCode?: string;

  /**
   * <p>A list of event type category codes. Possible values are
   * <code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>. Currently,
   * the <code>investigation</code> value isn't supported at this time.</p>
   */
  eventTypeCategory?: EventTypeCategory | string;

  /**
   * <p>The Amazon Web Services Region name of the event.</p>
   */
  region?: string;

  /**
   * <p>The Amazon Web Services Availability Zone of the event. For example, us-east-1a.</p>
   */
  availabilityZone?: string;

  /**
   * <p>The date and time that the event began.</p>
   */
  startTime?: Date;

  /**
   * <p>The date and time that the event ended.</p>
   */
  endTime?: Date;

  /**
   * <p>The most recent date and time that the event was updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The most recent status of the event. Possible values are <code>open</code>,
   *             <code>closed</code>, and <code>upcoming</code>.</p>
   */
  statusCode?: EventStatusCode | string;

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
   */
  eventScopeCode?: EventScopeCode | string;
}

/**
 * <p>The detailed description of the event. Included in the information returned by the
 *             <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation.</p>
 */
export interface EventDescription {
  /**
   * <p>The most recent description of the event.</p>
   */
  latestDescription?: string;
}

/**
 * <p>Detailed information about an event. A combination of an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a> object, an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventDescription.html">EventDescription</a> object, and additional metadata about the event. Returned by
 *          the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation.</p>
 */
export interface EventDetails {
  /**
   * <p>Summary information about the event.</p>
   */
  event?: Event;

  /**
   * <p>The most recent description of the event.</p>
   */
  eventDescription?: EventDescription;

  /**
   * <p>Additional metadata about the event.</p>
   */
  eventMetadata?: Record<string, string>;
}

export interface DescribeEventDetailsResponse {
  /**
   * <p>Information about the events that could be retrieved.</p>
   */
  successfulSet?: EventDetails[];

  /**
   * <p>Error messages for any events that could not be retrieved.</p>
   */
  failedSet?: EventDetailsErrorItem[];
}

export interface DescribeEventDetailsForOrganizationRequest {
  /**
   * <p>A set of JSON elements that includes the <code>awsAccountId</code> and the
   *             <code>eventArn</code>.</p>
   */
  organizationEventDetailFilters: EventAccountFilter[] | undefined;

  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   */
  locale?: string;
}

/**
 * <p>Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> operation can't find a specified
 *          event.</p>
 */
export interface OrganizationEventDetailsErrorItem {
  /**
   * <p>Error information returned when a <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> operation can't find a specified
   *          event.</p>
   */
  awsAccountId?: string;

  /**
   * <p>The unique identifier for the event. The event ARN has the
   * <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>
   * format.</p>
   *          <p>For example, an event ARN might look like the following:</p>
   *          <p>
   *             <code>arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   */
  eventArn?: string;

  /**
   * <p>The name of the error.</p>
   */
  errorName?: string;

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
   */
  errorMessage?: string;
}

/**
 * <p>Detailed information about an event. A combination of an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_Event.html">Event</a> object, an <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventDescription.html">EventDescription</a> object, and additional metadata about the event. Returned by
 *          the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetailsForOrganization.html">DescribeEventDetailsForOrganization</a> operation.</p>
 */
export interface OrganizationEventDetails {
  /**
   * <p>The 12-digit Amazon Web Services account numbers that contains the affected entities.</p>
   */
  awsAccountId?: string;

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
   */
  event?: Event;

  /**
   * <p>The detailed description of the event. Included in the information returned by the
   *             <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventDetails.html">DescribeEventDetails</a> operation.</p>
   */
  eventDescription?: EventDescription;

  /**
   * <p>Additional metadata about the event.</p>
   */
  eventMetadata?: Record<string, string>;
}

export interface DescribeEventDetailsForOrganizationResponse {
  /**
   * <p>Information about the events that could be retrieved.</p>
   */
  successfulSet?: OrganizationEventDetails[];

  /**
   * <p>Error messages for any events that could not be retrieved.</p>
   */
  failedSet?: OrganizationEventDetailsErrorItem[];
}

export interface DescribeEventsRequest {
  /**
   * <p>Values to narrow the results returned.</p>
   */
  filter?: EventFilter;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of items to return in one batch, between 10 and 100, inclusive.</p>
   */
  maxResults?: number;

  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   */
  locale?: string;
}

export interface DescribeEventsResponse {
  /**
   * <p>The events that match the specified filter criteria.</p>
   */
  events?: Event[];

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;
}

/**
 * <p>The values to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html">DescribeEventsForOrganization</a> operation.</p>
 */
export interface OrganizationEventFilter {
  /**
   * <p>A list of unique identifiers for event types. For example, <code>"AWS_EC2_SYSTEM_MAINTENANCE_EVENT","AWS_RDS_MAINTENANCE_SCHEDULED".</code>
   *          </p>
   */
  eventTypeCodes?: string[];

  /**
   * <p>A list of 12-digit Amazon Web Services account numbers that contains the affected entities.</p>
   */
  awsAccountIds?: string[];

  /**
   * <p>The Amazon Web Services services associated with the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   */
  services?: string[];

  /**
   * <p>A list of Amazon Web Services Regions.</p>
   */
  regions?: string[];

  /**
   * <p>A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set:
   *          match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or
   *             <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code>
   *          inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where
   *          the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set
   *          and <code>to</code> is set: match items where the timestamp value is equal to or before
   *             <code>to</code>.</p>
   */
  startTime?: DateTimeRange;

  /**
   * <p>A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set:
   *          match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or
   *             <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code>
   *          inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where
   *          the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set
   *          and <code>to</code> is set: match items where the timestamp value is equal to or before
   *             <code>to</code>.</p>
   */
  endTime?: DateTimeRange;

  /**
   * <p>A range of dates and times that is used by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EventFilter.html">EventFilter</a> and <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EntityFilter.html">EntityFilter</a> objects. If <code>from</code> is set and <code>to</code> is set:
   *          match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or
   *             <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code>
   *          inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where
   *          the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set
   *          and <code>to</code> is set: match items where the timestamp value is equal to or before
   *             <code>to</code>.</p>
   */
  lastUpdatedTime?: DateTimeRange;

  /**
   * <p>A list of entity ARNs (unique identifiers).</p>
   */
  entityArns?: string[];

  /**
   * <p>A list of entity identifiers, such as EC2 instance IDs (i-34ab692e) or EBS volumes (vol-426ab23e).</p>
   */
  entityValues?: string[];

  /**
   * <p>A list of event type category codes. Possible values are
   * <code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>. Currently,
   * the <code>investigation</code> value isn't supported at this time.</p>
   */
  eventTypeCategories?: (EventTypeCategory | string)[];

  /**
   * <p>A list of event status codes.</p>
   */
  eventStatusCodes?: (EventStatusCode | string)[];
}

export interface DescribeEventsForOrganizationRequest {
  /**
   * <p>Values to narrow the results returned.</p>
   */
  filter?: OrganizationEventFilter;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of items to return in one batch, between 10 and 100, inclusive.</p>
   */
  maxResults?: number;

  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   */
  locale?: string;
}

/**
 * <p>Summary information about an event, returned by the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventsForOrganization.html">DescribeEventsForOrganization</a> operation.</p>
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
   */
  arn?: string;

  /**
   * <p>The Amazon Web Services service that is affected by the event, such as EC2 and RDS.</p>
   */
  service?: string;

  /**
   * <p>The unique identifier for the event type. The format is
   *             <code>AWS_SERVICE_DESCRIPTION</code>. For example,
   *             <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>.</p>
   */
  eventTypeCode?: string;

  /**
   * <p>A list of event type category codes. Possible values are
   * <code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>. Currently,
   * the <code>investigation</code> value isn't supported at this time.</p>
   */
  eventTypeCategory?: EventTypeCategory | string;

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
   */
  eventScopeCode?: EventScopeCode | string;

  /**
   * <p>The Amazon Web Services Region name of the event.</p>
   */
  region?: string;

  /**
   * <p>The date and time that the event began.</p>
   */
  startTime?: Date;

  /**
   * <p>The date and time that the event ended.</p>
   */
  endTime?: Date;

  /**
   * <p>The most recent date and time that the event was updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The most recent status of the event. Possible values are <code>open</code>,
   *             <code>closed</code>, and <code>upcoming</code>.</p>
   */
  statusCode?: EventStatusCode | string;
}

export interface DescribeEventsForOrganizationResponse {
  /**
   * <p>The events that match the specified filter criteria.</p>
   */
  events?: OrganizationEvent[];

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;
}

/**
 * <p>The values to use to filter results from the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeEventTypes.html">DescribeEventTypes</a>
 *          operation.</p>
 */
export interface EventTypeFilter {
  /**
   * <p>A list of event type codes.</p>
   */
  eventTypeCodes?: string[];

  /**
   * <p>The Amazon Web Services services associated with the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   */
  services?: string[];

  /**
   * <p>A list of event type category codes. Possible values are
   * <code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>. Currently,
   * the <code>investigation</code> value isn't supported at this time.</p>
   */
  eventTypeCategories?: (EventTypeCategory | string)[];
}

export interface DescribeEventTypesRequest {
  /**
   * <p>Values to narrow the results returned.</p>
   */
  filter?: EventTypeFilter;

  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   */
  locale?: string;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of items to return in one batch, between 10 and 100, inclusive.</p>
   */
  maxResults?: number;
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
 */
export interface EventType {
  /**
   * <p>The Amazon Web Services service that is affected by the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   */
  service?: string;

  /**
   * <p>The unique identifier for the event type. The format is <code>AWS_<i>SERVICE</i>_<i>DESCRIPTION</i>
   *             </code>; for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>.</p>
   */
  code?: string;

  /**
   * <p>A list of event type category codes. Possible values are
   * <code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>. Currently,
   * the <code>investigation</code> value isn't supported at this time.</p>
   */
  category?: EventTypeCategory | string;
}

export interface DescribeEventTypesResponse {
  /**
   * <p>A list of event types that match the filter criteria. Event types have a category
   *             (<code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>),
   *          a service (for example, <code>EC2</code>, <code>RDS</code>, <code>DATAPIPELINE</code>,
   *             <code>BILLING</code>), and a code (in the format
   *                <code>AWS_<i>SERVICE</i>_<i>DESCRIPTION</i>
   *             </code>; for
   *          example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>).</p>
   */
  eventTypes?: EventType[];

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;
}

export interface DescribeHealthServiceStatusForOrganizationResponse {
  /**
   * <p>Information about the status of enabling or disabling the Health organizational
   *          view feature in your organization.</p>
   *          <p>Valid values are <code>ENABLED | DISABLED | PENDING</code>. </p>
   */
  healthServiceAccessStatusForOrganization?: string;
}

/**
 * <p>
 *             <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_EnableHealthServiceAccessForOrganization.html">EnableHealthServiceAccessForOrganization</a> is already in progress. Wait for the
 *          action to complete before trying again. To get the current status, use the <a href="https://docs.aws.amazon.com/health/latest/APIReference/API_DescribeHealthServiceStatusForOrganization.html">DescribeHealthServiceStatusForOrganization</a> operation.</p>
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

/**
 * @internal
 */
export const AffectedEntityFilterSensitiveLog = (obj: AffectedEntity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAffectedAccountsForOrganizationRequestFilterSensitiveLog = (
  obj: DescribeAffectedAccountsForOrganizationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAffectedAccountsForOrganizationResponseFilterSensitiveLog = (
  obj: DescribeAffectedAccountsForOrganizationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DateTimeRangeFilterSensitiveLog = (obj: DateTimeRange): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EntityFilterFilterSensitiveLog = (obj: EntityFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAffectedEntitiesRequestFilterSensitiveLog = (obj: DescribeAffectedEntitiesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAffectedEntitiesResponseFilterSensitiveLog = (obj: DescribeAffectedEntitiesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventAccountFilterFilterSensitiveLog = (obj: EventAccountFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAffectedEntitiesForOrganizationRequestFilterSensitiveLog = (
  obj: DescribeAffectedEntitiesForOrganizationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationAffectedEntitiesErrorItemFilterSensitiveLog = (
  obj: OrganizationAffectedEntitiesErrorItem
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAffectedEntitiesForOrganizationResponseFilterSensitiveLog = (
  obj: DescribeAffectedEntitiesForOrganizationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEntityAggregatesRequestFilterSensitiveLog = (obj: DescribeEntityAggregatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EntityAggregateFilterSensitiveLog = (obj: EntityAggregate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEntityAggregatesResponseFilterSensitiveLog = (obj: DescribeEntityAggregatesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventFilterFilterSensitiveLog = (obj: EventFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventAggregatesRequestFilterSensitiveLog = (obj: DescribeEventAggregatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventAggregateFilterSensitiveLog = (obj: EventAggregate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventAggregatesResponseFilterSensitiveLog = (obj: DescribeEventAggregatesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventDetailsRequestFilterSensitiveLog = (obj: DescribeEventDetailsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventDetailsErrorItemFilterSensitiveLog = (obj: EventDetailsErrorItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventFilterSensitiveLog = (obj: Event): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventDescriptionFilterSensitiveLog = (obj: EventDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventDetailsFilterSensitiveLog = (obj: EventDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventDetailsResponseFilterSensitiveLog = (obj: DescribeEventDetailsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventDetailsForOrganizationRequestFilterSensitiveLog = (
  obj: DescribeEventDetailsForOrganizationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationEventDetailsErrorItemFilterSensitiveLog = (obj: OrganizationEventDetailsErrorItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationEventDetailsFilterSensitiveLog = (obj: OrganizationEventDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventDetailsForOrganizationResponseFilterSensitiveLog = (
  obj: DescribeEventDetailsForOrganizationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventsRequestFilterSensitiveLog = (obj: DescribeEventsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventsResponseFilterSensitiveLog = (obj: DescribeEventsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationEventFilterFilterSensitiveLog = (obj: OrganizationEventFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventsForOrganizationRequestFilterSensitiveLog = (
  obj: DescribeEventsForOrganizationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OrganizationEventFilterSensitiveLog = (obj: OrganizationEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventsForOrganizationResponseFilterSensitiveLog = (
  obj: DescribeEventsForOrganizationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventTypeFilterFilterSensitiveLog = (obj: EventTypeFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventTypesRequestFilterSensitiveLog = (obj: DescribeEventTypesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventTypeFilterSensitiveLog = (obj: EventType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventTypesResponseFilterSensitiveLog = (obj: DescribeEventTypesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeHealthServiceStatusForOrganizationResponseFilterSensitiveLog = (
  obj: DescribeHealthServiceStatusForOrganizationResponse
): any => ({
  ...obj,
});
