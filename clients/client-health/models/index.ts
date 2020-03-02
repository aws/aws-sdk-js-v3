import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum EntityStatusCode {
  IMPAIRED = "IMPAIRED",
  UNIMPAIRED = "UNIMPAIRED",
  UNKNOWN = "UNKNOWN"
}

export enum EventAggregateField {
  EventTypeCategory = "eventTypeCategory"
}

export enum EventStatusCode {
  CLOSED = "closed",
  OPEN = "open",
  UPCOMING = "upcoming"
}

export enum EventTypeCategory {
  ACCOUNT_NOTIFICATION = "accountNotification",
  INVESTIGATION = "investigation",
  ISSUE = "issue",
  SCHEDULED_CHANGE = "scheduledChange"
}

/**
 * <p>
 *             <a>EnableHealthServiceAccessForOrganization</a> is already in progress. Wait
 *          for the action to complete before trying again. To get the current status, use the <a>DescribeHealthServiceStatusForOrganization</a> operation.</p>
 */
export interface ConcurrentModificationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  message?: string;
}

export namespace ConcurrentModificationException {
  export function isa(o: any): o is ConcurrentModificationException {
    return __isa(o, "ConcurrentModificationException");
  }
}

/**
 * <p>The specified pagination token (<code>nextToken</code>) is not valid.</p>
 */
export interface InvalidPaginationToken
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidPaginationToken";
  $fault: "client";
  message?: string;
}

export namespace InvalidPaginationToken {
  export function isa(o: any): o is InvalidPaginationToken {
    return __isa(o, "InvalidPaginationToken");
  }
}

/**
 * <p>The specified locale is not supported.</p>
 */
export interface UnsupportedLocale extends __SmithyException, $MetadataBearer {
  name: "UnsupportedLocale";
  $fault: "client";
  message?: string;
}

export namespace UnsupportedLocale {
  export function isa(o: any): o is UnsupportedLocale {
    return __isa(o, "UnsupportedLocale");
  }
}

export interface DescribeAffectedAccountsForOrganizationRequest {
  __type?: "DescribeAffectedAccountsForOrganizationRequest";
  /**
   * <p>The unique identifier for the event. Format: <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>. Example: <code>Example: arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   */
  eventArn: string | undefined;

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

export namespace DescribeAffectedAccountsForOrganizationRequest {
  export function isa(
    o: any
  ): o is DescribeAffectedAccountsForOrganizationRequest {
    return __isa(o, "DescribeAffectedAccountsForOrganizationRequest");
  }
}

export interface DescribeAffectedAccountsForOrganizationResponse {
  __type?: "DescribeAffectedAccountsForOrganizationResponse";
  /**
   * <p>A JSON set of elements of the affected accounts.</p>
   */
  affectedAccounts?: Array<string>;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;
}

export namespace DescribeAffectedAccountsForOrganizationResponse {
  export function isa(
    o: any
  ): o is DescribeAffectedAccountsForOrganizationResponse {
    return __isa(o, "DescribeAffectedAccountsForOrganizationResponse");
  }
}

export interface DescribeAffectedEntitiesForOrganizationRequest {
  __type?: "DescribeAffectedEntitiesForOrganizationRequest";
  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   */
  locale?: string;

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

  /**
   * <p>A JSON set of elements including the <code>awsAccountId</code> and the
   *             <code>eventArn</code>.</p>
   */
  organizationEntityFilters: Array<EventAccountFilter> | undefined;
}

export namespace DescribeAffectedEntitiesForOrganizationRequest {
  export function isa(
    o: any
  ): o is DescribeAffectedEntitiesForOrganizationRequest {
    return __isa(o, "DescribeAffectedEntitiesForOrganizationRequest");
  }
}

export interface DescribeAffectedEntitiesForOrganizationResponse {
  __type?: "DescribeAffectedEntitiesForOrganizationResponse";
  /**
   * <p>A JSON set of elements including the <code>awsAccountId</code> and its
   *             <code>entityArn</code>, <code>entityValue</code> and its <code>entityArn</code>,
   *             <code>lastUpdatedTime</code>, <code>statusCode</code>, and <code>tags</code>.</p>
   */
  entities?: Array<AffectedEntity>;

  /**
   * <p>A JSON set of elements of the failed response, including the <code>awsAccountId</code>,
   *             <code>errorMessage</code>, <code>errorName</code>, and <code>eventArn</code>.</p>
   */
  failedSet?: Array<OrganizationAffectedEntitiesErrorItem>;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;
}

export namespace DescribeAffectedEntitiesForOrganizationResponse {
  export function isa(
    o: any
  ): o is DescribeAffectedEntitiesForOrganizationResponse {
    return __isa(o, "DescribeAffectedEntitiesForOrganizationResponse");
  }
}

export interface DescribeAffectedEntitiesRequest {
  __type?: "DescribeAffectedEntitiesRequest";
  /**
   * <p>Values to narrow the results returned. At least one event ARN is required.</p>
   */
  filter: EntityFilter | undefined;

  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   */
  locale?: string;

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

export namespace DescribeAffectedEntitiesRequest {
  export function isa(o: any): o is DescribeAffectedEntitiesRequest {
    return __isa(o, "DescribeAffectedEntitiesRequest");
  }
}

export interface DescribeAffectedEntitiesResponse {
  __type?: "DescribeAffectedEntitiesResponse";
  /**
   * <p>The entities that match the filter criteria.</p>
   */
  entities?: Array<AffectedEntity>;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;
}

export namespace DescribeAffectedEntitiesResponse {
  export function isa(o: any): o is DescribeAffectedEntitiesResponse {
    return __isa(o, "DescribeAffectedEntitiesResponse");
  }
}

export interface DescribeEntityAggregatesRequest {
  __type?: "DescribeEntityAggregatesRequest";
  /**
   * <p>A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code>
   *          </p>
   */
  eventArns?: Array<string>;
}

export namespace DescribeEntityAggregatesRequest {
  export function isa(o: any): o is DescribeEntityAggregatesRequest {
    return __isa(o, "DescribeEntityAggregatesRequest");
  }
}

export interface DescribeEntityAggregatesResponse {
  __type?: "DescribeEntityAggregatesResponse";
  /**
   * <p>The number of entities that are affected by each of the specified events.</p>
   */
  entityAggregates?: Array<EntityAggregate>;
}

export namespace DescribeEntityAggregatesResponse {
  export function isa(o: any): o is DescribeEntityAggregatesResponse {
    return __isa(o, "DescribeEntityAggregatesResponse");
  }
}

export interface DescribeEventAggregatesRequest {
  __type?: "DescribeEventAggregatesRequest";
  /**
   * <p>The only currently supported value is <code>eventTypeCategory</code>.</p>
   */
  aggregateField: EventAggregateField | string | undefined;

  /**
   * <p>Values to narrow the results returned.</p>
   */
  filter?: EventFilter;

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

export namespace DescribeEventAggregatesRequest {
  export function isa(o: any): o is DescribeEventAggregatesRequest {
    return __isa(o, "DescribeEventAggregatesRequest");
  }
}

export interface DescribeEventAggregatesResponse {
  __type?: "DescribeEventAggregatesResponse";
  /**
   * <p>The number of events in each category that meet the optional filter
   *          criteria.</p>
   */
  eventAggregates?: Array<EventAggregate>;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;
}

export namespace DescribeEventAggregatesResponse {
  export function isa(o: any): o is DescribeEventAggregatesResponse {
    return __isa(o, "DescribeEventAggregatesResponse");
  }
}

export interface DescribeEventDetailsForOrganizationRequest {
  __type?: "DescribeEventDetailsForOrganizationRequest";
  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   */
  locale?: string;

  /**
   * <p>A set of JSON elements that includes the <code>awsAccountId</code> and the
   *             <code>eventArn</code>.</p>
   */
  organizationEventDetailFilters: Array<EventAccountFilter> | undefined;
}

export namespace DescribeEventDetailsForOrganizationRequest {
  export function isa(o: any): o is DescribeEventDetailsForOrganizationRequest {
    return __isa(o, "DescribeEventDetailsForOrganizationRequest");
  }
}

export interface DescribeEventDetailsForOrganizationResponse {
  __type?: "DescribeEventDetailsForOrganizationResponse";
  /**
   * <p>Error messages for any events that could not be retrieved.</p>
   */
  failedSet?: Array<OrganizationEventDetailsErrorItem>;

  /**
   * <p>Information about the events that could be retrieved.</p>
   */
  successfulSet?: Array<OrganizationEventDetails>;
}

export namespace DescribeEventDetailsForOrganizationResponse {
  export function isa(
    o: any
  ): o is DescribeEventDetailsForOrganizationResponse {
    return __isa(o, "DescribeEventDetailsForOrganizationResponse");
  }
}

export interface DescribeEventDetailsRequest {
  __type?: "DescribeEventDetailsRequest";
  /**
   * <p>A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code>
   *          </p>
   */
  eventArns: Array<string> | undefined;

  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   */
  locale?: string;
}

export namespace DescribeEventDetailsRequest {
  export function isa(o: any): o is DescribeEventDetailsRequest {
    return __isa(o, "DescribeEventDetailsRequest");
  }
}

export interface DescribeEventDetailsResponse {
  __type?: "DescribeEventDetailsResponse";
  /**
   * <p>Error messages for any events that could not be retrieved.</p>
   */
  failedSet?: Array<EventDetailsErrorItem>;

  /**
   * <p>Information about the events that could be retrieved.</p>
   */
  successfulSet?: Array<EventDetails>;
}

export namespace DescribeEventDetailsResponse {
  export function isa(o: any): o is DescribeEventDetailsResponse {
    return __isa(o, "DescribeEventDetailsResponse");
  }
}

export interface DescribeEventTypesRequest {
  __type?: "DescribeEventTypesRequest";
  /**
   * <p>Values to narrow the results returned.</p>
   */
  filter?: EventTypeFilter;

  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   */
  locale?: string;

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

export namespace DescribeEventTypesRequest {
  export function isa(o: any): o is DescribeEventTypesRequest {
    return __isa(o, "DescribeEventTypesRequest");
  }
}

export interface DescribeEventTypesResponse {
  __type?: "DescribeEventTypesResponse";
  /**
   * <p>A list of event types that match the filter criteria. Event types have a category
   *             (<code>issue</code>, <code>accountNotification</code>, or <code>scheduledChange</code>),
   *          a service (for example, <code>EC2</code>, <code>RDS</code>, <code>DATAPIPELINE</code>,
   *             <code>BILLING</code>), and a code (in the format
   *                <code>AWS_<i>SERVICE</i>_<i>DESCRIPTION</i>
   *             </code>; for
   *          example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>).</p>
   */
  eventTypes?: Array<EventType>;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;
}

export namespace DescribeEventTypesResponse {
  export function isa(o: any): o is DescribeEventTypesResponse {
    return __isa(o, "DescribeEventTypesResponse");
  }
}

export interface DescribeEventsForOrganizationRequest {
  __type?: "DescribeEventsForOrganizationRequest";
  /**
   * <p>Values to narrow the results returned.</p>
   */
  filter?: OrganizationEventFilter;

  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   */
  locale?: string;

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

export namespace DescribeEventsForOrganizationRequest {
  export function isa(o: any): o is DescribeEventsForOrganizationRequest {
    return __isa(o, "DescribeEventsForOrganizationRequest");
  }
}

export interface DescribeEventsForOrganizationResponse {
  __type?: "DescribeEventsForOrganizationResponse";
  /**
   * <p>The events that match the specified filter criteria.</p>
   */
  events?: Array<OrganizationEvent>;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;
}

export namespace DescribeEventsForOrganizationResponse {
  export function isa(o: any): o is DescribeEventsForOrganizationResponse {
    return __isa(o, "DescribeEventsForOrganizationResponse");
  }
}

export interface DescribeEventsRequest {
  __type?: "DescribeEventsRequest";
  /**
   * <p>Values to narrow the results returned.</p>
   */
  filter?: EventFilter;

  /**
   * <p>The locale (language) to return information in. English (en) is the default and the only supported value at this time.</p>
   */
  locale?: string;

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

export namespace DescribeEventsRequest {
  export function isa(o: any): o is DescribeEventsRequest {
    return __isa(o, "DescribeEventsRequest");
  }
}

export interface DescribeEventsResponse {
  __type?: "DescribeEventsResponse";
  /**
   * <p>The events that match the specified filter criteria.</p>
   */
  events?: Array<Event>;

  /**
   * <p>If the results of a search are large, only a portion of the
   * results are returned, and a <code>nextToken</code> pagination token is returned in the response. To
   * retrieve the next batch of results, reissue the search request and include the returned token.
   * When all results have been returned, the response does not contain a pagination token value.</p>
   */
  nextToken?: string;
}

export namespace DescribeEventsResponse {
  export function isa(o: any): o is DescribeEventsResponse {
    return __isa(o, "DescribeEventsResponse");
  }
}

export interface DescribeHealthServiceStatusForOrganizationResponse {
  __type?: "DescribeHealthServiceStatusForOrganizationResponse";
  /**
   * <p>Information about the status of enabling or disabling AWS Health Organizational View in
   *          your organization.</p>
   *          <p>Valid values are <code>ENABLED | DISABLED | PENDING</code>. </p>
   */
  healthServiceAccessStatusForOrganization?: string;
}

export namespace DescribeHealthServiceStatusForOrganizationResponse {
  export function isa(
    o: any
  ): o is DescribeHealthServiceStatusForOrganizationResponse {
    return __isa(o, "DescribeHealthServiceStatusForOrganizationResponse");
  }
}

/**
 * <p>Information about an entity that is affected by a Health event.</p>
 */
export interface AffectedEntity {
  __type?: "AffectedEntity";
  /**
   * <p>The 12-digit AWS account number that contains the affected entity.</p>
   */
  awsAccountId?: string;

  /**
   * <p>The unique identifier for the entity. Format: <code>arn:aws:health:<i>entity-region</i>:<i>aws-account</i>:entity/<i>entity-id</i>
   *             </code>. Example: <code>arn:aws:health:us-east-1:111222333444:entity/AVh5GGT7ul1arKr1sE1K</code>
   *          </p>
   */
  entityArn?: string;

  /**
   * <p>The URL of the affected entity.</p>
   */
  entityUrl?: string;

  /**
   * <p>The ID of the affected entity.</p>
   */
  entityValue?: string;

  /**
   * <p>The unique identifier for the event. Format: <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>. Example: <code>Example: arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   */
  eventArn?: string;

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
   */
  tags?: { [key: string]: string };
}

export namespace AffectedEntity {
  export function isa(o: any): o is AffectedEntity {
    return __isa(o, "AffectedEntity");
  }
}

/**
 * <p>A range of dates and times that is used by the <a>EventFilter</a> and
 *             <a>EntityFilter</a> objects. If <code>from</code> is set and <code>to</code>
 *          is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or
 *             <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code>
 *          inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where
 *          the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set
 *          and <code>to</code> is set: match items where the timestamp value is equal to or before
 *             <code>to</code>.</p>
 */
export interface DateTimeRange {
  __type?: "DateTimeRange";
  /**
   * <p>The starting date and time of a time range.</p>
   */
  from?: Date;

  /**
   * <p>The ending date and time of a time range.</p>
   */
  to?: Date;
}

export namespace DateTimeRange {
  export function isa(o: any): o is DateTimeRange {
    return __isa(o, "DateTimeRange");
  }
}

/**
 * <p>The number of entities that are affected by one or more events. Returned by the <a>DescribeEntityAggregates</a> operation.</p>
 */
export interface EntityAggregate {
  __type?: "EntityAggregate";
  /**
   * <p>The number entities that match the criteria for the specified events.</p>
   */
  count?: number;

  /**
   * <p>The unique identifier for the event. Format: <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>. Example: <code>Example: arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   */
  eventArn?: string;
}

export namespace EntityAggregate {
  export function isa(o: any): o is EntityAggregate {
    return __isa(o, "EntityAggregate");
  }
}

/**
 * <p>The values to use to filter results from the <a>DescribeAffectedEntities</a> operation.</p>
 */
export interface EntityFilter {
  __type?: "EntityFilter";
  /**
   * <p>A list of entity ARNs (unique identifiers).</p>
   */
  entityArns?: Array<string>;

  /**
   * <p>A list of IDs for affected entities.</p>
   */
  entityValues?: Array<string>;

  /**
   * <p>A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code>
   *          </p>
   */
  eventArns: Array<string> | undefined;

  /**
   * <p>A list of the most recent dates and times that the entity was updated.</p>
   */
  lastUpdatedTimes?: Array<DateTimeRange>;

  /**
   * <p>A list of entity status codes (<code>IMPAIRED</code>, <code>UNIMPAIRED</code>, or
   *             <code>UNKNOWN</code>).</p>
   */
  statusCodes?: Array<EntityStatusCode | string>;

  /**
   * <p>A map of entity tags attached to the affected entity.</p>
   */
  tags?: Array<{ [key: string]: string }>;
}

export namespace EntityFilter {
  export function isa(o: any): o is EntityFilter {
    return __isa(o, "EntityFilter");
  }
}

/**
 * <p>Summary information about an AWS Health event.</p>
 */
export interface Event {
  __type?: "Event";
  /**
   * <p>The unique identifier for the event. Format: <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>. Example: <code>Example: arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   */
  arn?: string;

  /**
   * <p>The AWS Availability Zone of the event. For example, us-east-1a.</p>
   */
  availabilityZone?: string;

  /**
   * <p>The date and time that the event ended.</p>
   */
  endTime?: Date;

  /**
   * <p>The category of the event. Possible values are <code>issue</code>,
   *             <code>scheduledChange</code>, and <code>accountNotification</code>.</p>
   */
  eventTypeCategory?: EventTypeCategory | string;

  /**
   * <p>The unique identifier for the event type. The format is <code>AWS_<i>SERVICE</i>_<i>DESCRIPTION</i>
   *             </code>; for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>.</p>
   */
  eventTypeCode?: string;

  /**
   * <p>The most recent date and time that the event was updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The AWS region name of the event.</p>
   */
  region?: string;

  /**
   * <p>The AWS service that is affected by the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   */
  service?: string;

  /**
   * <p>The date and time that the event began.</p>
   */
  startTime?: Date;

  /**
   * <p>The most recent status of the event. Possible values are <code>open</code>,
   *             <code>closed</code>, and <code>upcoming</code>.</p>
   */
  statusCode?: EventStatusCode | string;
}

export namespace Event {
  export function isa(o: any): o is Event {
    return __isa(o, "Event");
  }
}

/**
 * <p>The values used to filter results from the <a>DescribeEventDetailsForOrganization</a> and <a>DescribeAffectedEntitiesForOrganization</a> operations.</p>
 */
export interface EventAccountFilter {
  __type?: "EventAccountFilter";
  /**
   * <p>The 12-digit AWS account numbers that contains the affected entities.</p>
   */
  awsAccountId: string | undefined;

  /**
   * <p>The unique identifier for the event. Format: <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>. Example: <code>Example: arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   */
  eventArn: string | undefined;
}

export namespace EventAccountFilter {
  export function isa(o: any): o is EventAccountFilter {
    return __isa(o, "EventAccountFilter");
  }
}

/**
 * <p>The number of events of each issue type. Returned by the <a>DescribeEventAggregates</a> operation.</p>
 */
export interface EventAggregate {
  __type?: "EventAggregate";
  /**
   * <p>The issue type for the associated count.</p>
   */
  aggregateValue?: string;

  /**
   * <p>The number of events of the associated issue type.</p>
   */
  count?: number;
}

export namespace EventAggregate {
  export function isa(o: any): o is EventAggregate {
    return __isa(o, "EventAggregate");
  }
}

/**
 * <p>The detailed description of the event. Included in the information returned by the
 *             <a>DescribeEventDetails</a> operation.</p>
 */
export interface EventDescription {
  __type?: "EventDescription";
  /**
   * <p>The most recent description of the event.</p>
   */
  latestDescription?: string;
}

export namespace EventDescription {
  export function isa(o: any): o is EventDescription {
    return __isa(o, "EventDescription");
  }
}

/**
 * <p>Detailed information about an event. A combination of an <a>Event</a>
 *          object, an <a>EventDescription</a> object, and additional metadata about the
 *          event. Returned by the <a>DescribeEventDetails</a> operation.</p>
 */
export interface EventDetails {
  __type?: "EventDetails";
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
  eventMetadata?: { [key: string]: string };
}

export namespace EventDetails {
  export function isa(o: any): o is EventDetails {
    return __isa(o, "EventDetails");
  }
}

/**
 * <p>Error information returned when a <a>DescribeEventDetails</a> operation
 *          cannot find a specified event.</p>
 */
export interface EventDetailsErrorItem {
  __type?: "EventDetailsErrorItem";
  /**
   * <p>A message that describes the error.</p>
   */
  errorMessage?: string;

  /**
   * <p>The name of the error.</p>
   */
  errorName?: string;

  /**
   * <p>The unique identifier for the event. Format: <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>. Example: <code>Example: arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   */
  eventArn?: string;
}

export namespace EventDetailsErrorItem {
  export function isa(o: any): o is EventDetailsErrorItem {
    return __isa(o, "EventDetailsErrorItem");
  }
}

/**
 * <p>The values to use to filter results from the <a>DescribeEvents</a> and
 *             <a>DescribeEventAggregates</a> operations.</p>
 */
export interface EventFilter {
  __type?: "EventFilter";
  /**
   * <p>A list of AWS availability zones.</p>
   */
  availabilityZones?: Array<string>;

  /**
   * <p>A list of dates and times that the event ended.</p>
   */
  endTimes?: Array<DateTimeRange>;

  /**
   * <p>A list of entity ARNs (unique identifiers).</p>
   */
  entityArns?: Array<string>;

  /**
   * <p>A list of entity identifiers, such as EC2 instance IDs (<code>i-34ab692e</code>) or
   *          EBS volumes (<code>vol-426ab23e</code>).</p>
   */
  entityValues?: Array<string>;

  /**
   * <p>A list of event ARNs (unique identifiers). For example: <code>"arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-CDE456", "arn:aws:health:us-west-1::event/EBS/AWS_EBS_LOST_VOLUME/AWS_EBS_LOST_VOLUME_CHI789_JKL101"</code>
   *          </p>
   */
  eventArns?: Array<string>;

  /**
   * <p>A list of event status codes.</p>
   */
  eventStatusCodes?: Array<EventStatusCode | string>;

  /**
   * <p>A list of event type category codes (<code>issue</code>,
   *          <code>scheduledChange</code>, or <code>accountNotification</code>).</p>
   */
  eventTypeCategories?: Array<EventTypeCategory | string>;

  /**
   * <p>A list of unique identifiers for event types. For example, <code>"AWS_EC2_SYSTEM_MAINTENANCE_EVENT","AWS_RDS_MAINTENANCE_SCHEDULED".</code>
   *          </p>
   */
  eventTypeCodes?: Array<string>;

  /**
   * <p>A list of dates and times that the event was last updated.</p>
   */
  lastUpdatedTimes?: Array<DateTimeRange>;

  /**
   * <p>A list of AWS regions.</p>
   */
  regions?: Array<string>;

  /**
   * <p>The AWS services associated with the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   */
  services?: Array<string>;

  /**
   * <p>A list of dates and times that the event began.</p>
   */
  startTimes?: Array<DateTimeRange>;

  /**
   * <p>A map of entity tags attached to the affected entity.</p>
   */
  tags?: Array<{ [key: string]: string }>;
}

export namespace EventFilter {
  export function isa(o: any): o is EventFilter {
    return __isa(o, "EventFilter");
  }
}

/**
 * <p>Metadata about a type of event that is reported by AWS Health. Data consists of
 *          the category (for example, <code>issue</code>), the service (for example,
 *          <code>EC2</code>), and the event type code (for example,
 *             <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>).</p>
 */
export interface EventType {
  __type?: "EventType";
  /**
   * <p>A list of event type category codes (<code>issue</code>,
   *          <code>scheduledChange</code>, or <code>accountNotification</code>).</p>
   */
  category?: EventTypeCategory | string;

  /**
   * <p>The unique identifier for the event type. The format is <code>AWS_<i>SERVICE</i>_<i>DESCRIPTION</i>
   *             </code>; for example, <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>.</p>
   */
  code?: string;

  /**
   * <p>The AWS service that is affected by the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   */
  service?: string;
}

export namespace EventType {
  export function isa(o: any): o is EventType {
    return __isa(o, "EventType");
  }
}

/**
 * <p>The values to use to filter results from the <a>DescribeEventTypes</a>
 *          operation.</p>
 */
export interface EventTypeFilter {
  __type?: "EventTypeFilter";
  /**
   * <p>A list of event type category codes (<code>issue</code>,
   *          <code>scheduledChange</code>, or <code>accountNotification</code>).</p>
   */
  eventTypeCategories?: Array<EventTypeCategory | string>;

  /**
   * <p>A list of event type codes.</p>
   */
  eventTypeCodes?: Array<string>;

  /**
   * <p>The AWS services associated with the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   */
  services?: Array<string>;
}

export namespace EventTypeFilter {
  export function isa(o: any): o is EventTypeFilter {
    return __isa(o, "EventTypeFilter");
  }
}

/**
 * <p>Error information returned when a <a>DescribeAffectedEntitiesForOrganization</a> operation cannot find or process a
 *          specific entity.</p>
 */
export interface OrganizationAffectedEntitiesErrorItem {
  __type?: "OrganizationAffectedEntitiesErrorItem";
  /**
   * <p>The 12-digit AWS account numbers that contains the affected entities.</p>
   */
  awsAccountId?: string;

  /**
   * <p>The unique identifier for the event type. The format is
   *             <code>AWS_SERVICE_DESCRIPTION</code>. For example,
   *             <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>.</p>
   */
  errorMessage?: string;

  /**
   * <p>The name of the error.</p>
   */
  errorName?: string;

  /**
   * <p>The unique identifier for the event. Format: <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>. Example: <code>Example: arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   */
  eventArn?: string;
}

export namespace OrganizationAffectedEntitiesErrorItem {
  export function isa(o: any): o is OrganizationAffectedEntitiesErrorItem {
    return __isa(o, "OrganizationAffectedEntitiesErrorItem");
  }
}

/**
 * <p>Summary information about an event, returned by the <a>DescribeEventsForOrganization</a> operation.</p>
 */
export interface OrganizationEvent {
  __type?: "OrganizationEvent";
  /**
   * <p>The unique identifier for the event. Format: <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>. Example: <code>Example: arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   */
  arn?: string;

  /**
   * <p>The date and time that the event ended.</p>
   */
  endTime?: Date;

  /**
   * <p>The category of the event type.</p>
   */
  eventTypeCategory?: EventTypeCategory | string;

  /**
   * <p>The unique identifier for the event type. The format is
   *             <code>AWS_SERVICE_DESCRIPTION</code>. For example,
   *             <code>AWS_EC2_SYSTEM_MAINTENANCE_EVENT</code>.</p>
   */
  eventTypeCode?: string;

  /**
   * <p>The most recent date and time that the event was updated.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * <p>The AWS Region name of the event.</p>
   */
  region?: string;

  /**
   * <p>The AWS service that is affected by the event. For example, EC2, RDS.</p>
   */
  service?: string;

  /**
   * <p>The date and time that the event began.</p>
   */
  startTime?: Date;

  /**
   * <p>The most recent status of the event. Possible values are <code>open</code>,
   *             <code>closed</code>, and <code>upcoming</code>.</p>
   */
  statusCode?: EventStatusCode | string;
}

export namespace OrganizationEvent {
  export function isa(o: any): o is OrganizationEvent {
    return __isa(o, "OrganizationEvent");
  }
}

/**
 * <p>Detailed information about an event. A combination of an <a>Event</a> object,
 *          an <a>EventDescription</a> object, and additional metadata about the event.
 *          Returned by the <a>DescribeEventDetailsForOrganization</a> operation.</p>
 */
export interface OrganizationEventDetails {
  __type?: "OrganizationEventDetails";
  /**
   * <p>The 12-digit AWS account numbers that contains the affected entities.</p>
   */
  awsAccountId?: string;

  /**
   * <p>Summary information about an AWS Health event.</p>
   */
  event?: Event;

  /**
   * <p>The detailed description of the event. Included in the information returned by the
   *             <a>DescribeEventDetails</a> operation.</p>
   */
  eventDescription?: EventDescription;

  /**
   * <p>Additional metadata about the event.</p>
   */
  eventMetadata?: { [key: string]: string };
}

export namespace OrganizationEventDetails {
  export function isa(o: any): o is OrganizationEventDetails {
    return __isa(o, "OrganizationEventDetails");
  }
}

/**
 * <p>Error information returned when a <a>DescribeEventDetailsForOrganization</a>
 *          operation cannot find a specified event.</p>
 */
export interface OrganizationEventDetailsErrorItem {
  __type?: "OrganizationEventDetailsErrorItem";
  /**
   * <p>Error information returned when a <a>DescribeEventDetailsForOrganization</a>
   *          operation cannot find a specified event.</p>
   */
  awsAccountId?: string;

  /**
   * <p>A message that describes the error.</p>
   */
  errorMessage?: string;

  /**
   * <p>The name of the error.</p>
   */
  errorName?: string;

  /**
   * <p>The unique identifier for the event. Format: <code>arn:aws:health:<i>event-region</i>::event/<i>SERVICE</i>/<i>EVENT_TYPE_CODE</i>/<i>EVENT_TYPE_PLUS_ID</i>
   *             </code>. Example: <code>Example: arn:aws:health:us-east-1::event/EC2/EC2_INSTANCE_RETIREMENT_SCHEDULED/EC2_INSTANCE_RETIREMENT_SCHEDULED_ABC123-DEF456</code>
   *          </p>
   */
  eventArn?: string;
}

export namespace OrganizationEventDetailsErrorItem {
  export function isa(o: any): o is OrganizationEventDetailsErrorItem {
    return __isa(o, "OrganizationEventDetailsErrorItem");
  }
}

/**
 * <p>The values to filter results from the <a>DescribeEventsForOrganization</a>
 *          operation.</p>
 */
export interface OrganizationEventFilter {
  __type?: "OrganizationEventFilter";
  /**
   * <p>A list of 12-digit AWS account numbers that contains the affected entities.</p>
   */
  awsAccountIds?: Array<string>;

  /**
   * <p>A range of dates and times that is used by the <a>EventFilter</a> and
   *             <a>EntityFilter</a> objects. If <code>from</code> is set and <code>to</code>
   *          is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or
   *             <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code>
   *          inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where
   *          the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set
   *          and <code>to</code> is set: match items where the timestamp value is equal to or before
   *             <code>to</code>.</p>
   */
  endTime?: DateTimeRange;

  /**
   * <p>REPLACEME</p>
   */
  entityArns?: Array<string>;

  /**
   * <p>A list of entity identifiers, such as EC2 instance IDs (i-34ab692e) or EBS volumes (vol-426ab23e).</p>
   */
  entityValues?: Array<string>;

  /**
   * <p>A list of event status codes.</p>
   */
  eventStatusCodes?: Array<EventStatusCode | string>;

  /**
   * <p>REPLACEME</p>
   */
  eventTypeCategories?: Array<EventTypeCategory | string>;

  /**
   * <p>A list of unique identifiers for event types. For example, <code>"AWS_EC2_SYSTEM_MAINTENANCE_EVENT","AWS_RDS_MAINTENANCE_SCHEDULED".</code>
   *          </p>
   */
  eventTypeCodes?: Array<string>;

  /**
   * <p>A range of dates and times that is used by the <a>EventFilter</a> and
   *             <a>EntityFilter</a> objects. If <code>from</code> is set and <code>to</code>
   *          is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or
   *             <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code>
   *          inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where
   *          the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set
   *          and <code>to</code> is set: match items where the timestamp value is equal to or before
   *             <code>to</code>.</p>
   */
  lastUpdatedTime?: DateTimeRange;

  /**
   * <p>A list of AWS Regions.</p>
   */
  regions?: Array<string>;

  /**
   * <p>The AWS services associated with the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   */
  services?: Array<string>;

  /**
   * <p>A range of dates and times that is used by the <a>EventFilter</a> and
   *             <a>EntityFilter</a> objects. If <code>from</code> is set and <code>to</code>
   *          is set: match items where the timestamp (<code>startTime</code>, <code>endTime</code>, or
   *             <code>lastUpdatedTime</code>) is between <code>from</code> and <code>to</code>
   *          inclusive. If <code>from</code> is set and <code>to</code> is not set: match items where
   *          the timestamp value is equal to or after <code>from</code>. If <code>from</code> is not set
   *          and <code>to</code> is set: match items where the timestamp value is equal to or before
   *             <code>to</code>.</p>
   */
  startTime?: DateTimeRange;
}

export namespace OrganizationEventFilter {
  export function isa(o: any): o is OrganizationEventFilter {
    return __isa(o, "OrganizationEventFilter");
  }
}
