// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
  SENSITIVE_STRING,
} from "@aws-sdk/smithy-client";

import { PersonalizeEventsServiceException as __BaseException } from "./PersonalizeEventsServiceException";

/**
 * <p>Provide a valid value for the field or parameter.</p>
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
  }
}

/**
 * <p>Contains information about a metric attribution associated with an event. For more information about metric attributions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.</p>
 */
export interface MetricAttribution {
  /**
   * <p>The source of the event, such as a third party.</p>
   */
  eventAttributionSource: string | undefined;
}

/**
 * <p>Represents user interaction event information sent using the
 *       <code>PutEvents</code> API.</p>
 */
export interface Event {
  /**
   * <p>An ID associated with the event. If an event ID is not provided, Amazon Personalize generates
   *       a unique ID for the event. An event ID is not used as an input to the model. Amazon Personalize uses
   *       the event ID to distinquish unique events. Any subsequent events after the first with the
   *       same event ID are not used in model training.</p>
   */
  eventId?: string;

  /**
   * <p>The type of event, such as click or download. This property corresponds to the <code>EVENT_TYPE</code>
   *       field of your Interactions schema and depends on the types of events you are tracking.</p>
   */
  eventType: string | undefined;

  /**
   * <p>The event value that corresponds to the <code>EVENT_VALUE</code> field of the Interactions schema.</p>
   */
  eventValue?: number;

  /**
   * <p>The item ID key that corresponds to the <code>ITEM_ID</code> field of the Interactions schema.</p>
   */
  itemId?: string;

  /**
   * <p>A string map of event-specific data that you might choose to record. For example, if a
   *       user rates a movie on your site, other than movie ID (<code>itemId</code>) and rating (<code>eventValue</code>)
   *       , you might also send the number of movie ratings made by the user.</p>
   *          <p>Each item in the map consists of a key-value pair. For example,</p>
   *
   *          <p>
   *             <code>{"numberOfRatings": "12"}</code>
   *          </p>
   *          <p>The keys use camel case names that match the fields in the Interactions
   *       schema. In the above example, the <code>numberOfRatings</code> would match the
   *       'NUMBER_OF_RATINGS' field defined in the Interactions schema.</p>
   */
  properties?: __LazyJsonString | string;

  /**
   * <p>The timestamp (in Unix time) on the client side when the event occurred.</p>
   */
  sentAt: Date | undefined;

  /**
   * <p>The ID of the list of recommendations that contains the item the user interacted with. Provide a <code>recommendationId</code> to have Amazon Personalize implicitly record the
   *       recommendations you show your user as impressions data. Or provide a <code>recommendationId</code> if you use a metric attribution to measure the impact of recommendations.
   *     </p>
   *          <p>
   *       For more information on recording impressions data, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html#putevents-including-impressions-data">Recording impressions data</a>.
   *       For more information on creating a metric attribution see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.
   *     </p>
   */
  recommendationId?: string;

  /**
   * <p>A list of item IDs that represents the sequence of items you have shown the user. For example, <code>["itemId1", "itemId2", "itemId3"]</code>. Provide a list of
   *       items to manually record impressions data for an event. For more information on recording impressions data,
   *       see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html#putevents-including-impressions-data">Recording impressions data</a>. </p>
   */
  impression?: string[];

  /**
   * <p>Contains information about the metric attribution associated with an event. For more information about metric attributions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.</p>
   */
  metricAttribution?: MetricAttribution;
}

export interface PutEventsRequest {
  /**
   * <p>The tracking ID for the event.
   *       The ID is generated by a call to the
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a> API.</p>
   */
  trackingId: string | undefined;

  /**
   * <p>The user associated with the event.</p>
   */
  userId?: string;

  /**
   * <p>The session ID associated with the user's visit. Your application generates the sessionId when a user first visits your website or uses your application.
   *       Amazon Personalize uses the sessionId to associate events with the user before they log in. For more information, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html">Recording Events</a>.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>A list of event data from the session.</p>
   */
  eventList: Event[] | undefined;
}

/**
 * <p>Represents item metadata added to an Items dataset using the
 *       <code>PutItems</code> API. For more information see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing Items Incrementally</a>.
 *     </p>
 */
export interface Item {
  /**
   * <p>The ID associated with the item.</p>
   */
  itemId: string | undefined;

  /**
   * <p>A string map of item-specific metadata. Each element in the map consists of a key-value pair.
   *       For example, <code>{"numberOfRatings": "12"}</code>.</p>
   *          <p>The keys use camel case names that match the fields in the schema for the Items
   *       dataset. In the previous example, the <code>numberOfRatings</code> matches the
   *       'NUMBER_OF_RATINGS' field defined in the Items schema. For categorical string data, to include multiple categories for a single item,
   *       separate each category with a pipe separator (<code>|</code>). For example, <code>\"Horror|Action\"</code>.</p>
   */
  properties?: __LazyJsonString | string;
}

export interface PutItemsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Items dataset you are adding the item or items to.</p>
   */
  datasetArn: string | undefined;

  /**
   * <p>A list of item data.</p>
   */
  items: Item[] | undefined;
}

/**
 * <p>The specified resource is in use.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
  }
}

/**
 * <p>Could not find the specified resource.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>Represents user metadata added to a Users dataset using the
 *       <code>PutUsers</code> API. For more information see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing Users Incrementally</a>.</p>
 */
export interface User {
  /**
   * <p>The ID associated with the user.</p>
   */
  userId: string | undefined;

  /**
   * <p>A string map of user-specific metadata. Each element in the map consists of a key-value pair.
   *       For example, <code>{"numberOfVideosWatched": "45"}</code>.</p>
   *          <p>The keys use camel case names that match the fields in the schema for the Users
   *       dataset. In the previous example, the <code>numberOfVideosWatched</code> matches the
   *       'NUMBER_OF_VIDEOS_WATCHED' field defined in the Users schema. For categorical string data,
   *       to include multiple categories for a single user, separate each category with a pipe separator (<code>|</code>).
   *       For example, <code>\"Member|Frequent shopper\"</code>.</p>
   */
  properties?: __LazyJsonString | string;
}

export interface PutUsersRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Users dataset you are adding the user or users to.</p>
   */
  datasetArn: string | undefined;

  /**
   * <p>A list of user data.</p>
   */
  users: User[] | undefined;
}

/**
 * @internal
 */
export const MetricAttributionFilterSensitiveLog = (obj: MetricAttribution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventFilterSensitiveLog = (obj: Event): any => ({
  ...obj,
  ...(obj.itemId && { itemId: SENSITIVE_STRING }),
  ...(obj.properties && { properties: SENSITIVE_STRING }),
  ...(obj.impression && { impression: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutEventsRequestFilterSensitiveLog = (obj: PutEventsRequest): any => ({
  ...obj,
  ...(obj.userId && { userId: SENSITIVE_STRING }),
  ...(obj.eventList && { eventList: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ItemFilterSensitiveLog = (obj: Item): any => ({
  ...obj,
  ...(obj.properties && { properties: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutItemsRequestFilterSensitiveLog = (obj: PutItemsRequest): any => ({
  ...obj,
  ...(obj.items && { items: obj.items.map((item) => ItemFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UserFilterSensitiveLog = (obj: User): any => ({
  ...obj,
  ...(obj.properties && { properties: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutUsersRequestFilterSensitiveLog = (obj: PutUsersRequest): any => ({
  ...obj,
  ...(obj.users && { users: obj.users.map((item) => UserFilterSensitiveLog(item)) }),
});
