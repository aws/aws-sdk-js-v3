// smithy-typescript generated code
import {
  ExceptionOptionType as __ExceptionOptionType,
  LazyJsonString as __LazyJsonString,
  SENSITIVE_STRING,
} from "@smithy/smithy-client";

import { PersonalizeEventsServiceException as __BaseException } from "./PersonalizeEventsServiceException";

/**
 * @public
 * <p>Represents action metadata added to an Action dataset using the
 *       <code>PutActions</code> API. For more information see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-actions.html">Importing actions individually</a>.
 *     </p>
 */
export interface Action {
  /**
   * @public
   * <p>The ID associated with the action.</p>
   */
  actionId: string | undefined;

  /**
   * @public
   * <p>A string map of action-specific metadata. Each element in the map consists of a key-value pair.
   *       For example, <code>\{"value": "100"\}</code>.</p>
   *          <p>The keys use camel case names that match the fields in the schema for the Actions
   *       dataset. In the previous example, the <code>value</code> matches the
   *       'VALUE' field defined in the Actions schema. For categorical string data, to include multiple categories for a single action,
   *       separate each category with a pipe separator (<code>|</code>). For example, <code>\"Deluxe|Premium\"</code>.</p>
   */
  properties?: __LazyJsonString | string;
}

/**
 * @public
 * <p>Represents an action interaction event sent using the
 *       <code>PutActionInteractions</code> API.</p>
 */
export interface ActionInteraction {
  /**
   * @public
   * <p>The ID of the action the user interacted with. This corresponds to the <code>ACTION_ID</code>
   *       field of the Action interaction schema.</p>
   */
  actionId: string | undefined;

  /**
   * @public
   * <p>The ID of the user who interacted with the action. This corresponds to the <code>USER_ID</code>
   *       field of the Action interaction schema.</p>
   */
  userId?: string;

  /**
   * @public
   * <p>The ID associated with the user's visit.
   *       Your application generates a unique <code>sessionId</code> when a user first visits your website or uses your application. </p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>The timestamp for when the action interaction event occurred. Timestamps must be in Unix epoch time format, in seconds.</p>
   */
  timestamp: Date | undefined;

  /**
   * @public
   * <p>The type of action interaction event. You can specify <code>Viewed</code>, <code>Taken</code>, and <code>Not Taken</code> event types. For more
   *       information about action interaction event type data, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/action-interaction-event-type-data.html">Event type data</a>. </p>
   */
  eventType: string | undefined;

  /**
   * @public
   * <p>An ID associated with the event. If an event ID is not provided, Amazon Personalize generates
   *       a unique ID for the event. An event ID is not used as an input to the model. Amazon Personalize uses
   *       the event ID to distinguish unique events. Any subsequent events after the first with the
   *       same event ID are not used in model training.</p>
   */
  eventId?: string;

  /**
   * @public
   * <p>The ID of the list of recommendations that contains the action the user interacted with.</p>
   */
  recommendationId?: string;

  /**
   * @public
   * <p>A list of action IDs that represents the sequence of actions you have shown the user. For example, <code>["actionId1", "actionId2", "actionId3"]</code>.
   *       Amazon Personalize doesn't use impressions data from action interaction events. Instead, record multiple events for each action and use the <code>Viewed</code> event type.
   *     </p>
   */
  impression?: string[];

  /**
   * @public
   * <p>A string map of event-specific data that you might choose to record. For example, if a
   *       user takes an action, other than the action ID, you might also send the number of actions taken by the user.</p>
   *          <p>Each item in the map consists of a key-value pair. For example,</p>
   *          <p>
   *             <code>\{"numberOfActions": "12"\}</code>
   *          </p>
   *          <p>The keys use camel case names that match the fields in the Action interactions
   *       schema. In the above example, the <code>numberOfActions</code> would match the
   *       'NUMBER_OF_ACTIONS' field defined in the Action interactions schema.</p>
   *          <p>
   *       The following can't be included as a keyword for properties (case insensitive).
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *           userId
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           sessionId
   *         </p>
   *             </li>
   *             <li>
   *                <p>eventType</p>
   *             </li>
   *             <li>
   *                <p>timestamp</p>
   *             </li>
   *             <li>
   *                <p>recommendationId</p>
   *             </li>
   *             <li>
   *                <p>impression</p>
   *             </li>
   *          </ul>
   */
  properties?: __LazyJsonString | string;
}

/**
 * @public
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
 * @public
 */
export interface PutActionInteractionsRequest {
  /**
   * @public
   * <p>The ID of your action interaction event tracker. When you create an Action interactions dataset, Amazon Personalize creates an
   *       action interaction event tracker for you. For more information, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/action-interaction-tracker-id.html">Action interaction event tracker ID</a>.</p>
   */
  trackingId: string | undefined;

  /**
   * @public
   * <p>A list of action interaction events from the session.</p>
   */
  actionInteractions: ActionInteraction[] | undefined;
}

/**
 * @public
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
 * @public
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
 * @public
 */
export interface PutActionsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Actions dataset you are adding the action or actions to.</p>
   */
  datasetArn: string | undefined;

  /**
   * @public
   * <p>A list of action data.</p>
   */
  actions: Action[] | undefined;
}

/**
 * @public
 * <p>Contains information about a metric attribution associated with an event. For more information about metric attributions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.</p>
 */
export interface MetricAttribution {
  /**
   * @public
   * <p>The source of the event, such as a third party.</p>
   */
  eventAttributionSource: string | undefined;
}

/**
 * @public
 * <p>Represents item interaction event information sent using the
 *       <code>PutEvents</code> API.</p>
 */
export interface Event {
  /**
   * @public
   * <p>An ID associated with the event. If an event ID is not provided, Amazon Personalize generates
   *       a unique ID for the event. An event ID is not used as an input to the model. Amazon Personalize uses
   *       the event ID to distinguish unique events. Any subsequent events after the first with the
   *       same event ID are not used in model training.</p>
   */
  eventId?: string;

  /**
   * @public
   * <p>The type of event, such as click or download. This property corresponds to the <code>EVENT_TYPE</code>
   *       field of your Item interactions dataset's schema and depends on the types of events you are tracking.</p>
   */
  eventType: string | undefined;

  /**
   * @public
   * <p>The event value that corresponds to the <code>EVENT_VALUE</code> field of the Item interactions schema.</p>
   */
  eventValue?: number;

  /**
   * @public
   * <p>The item ID key that corresponds to the <code>ITEM_ID</code> field of the Item interactions dataset's schema.</p>
   */
  itemId?: string;

  /**
   * @public
   * <p>A string map of event-specific data that you might choose to record. For example, if a
   *       user rates a movie on your site, other than movie ID (<code>itemId</code>) and rating (<code>eventValue</code>)
   *       , you might also send the number of movie ratings made by the user.</p>
   *          <p>Each item in the map consists of a key-value pair. For example,</p>
   *          <p>
   *             <code>\{"numberOfRatings": "12"\}</code>
   *          </p>
   *          <p>The keys use camel case names that match the fields in the Item interactions dataset's
   *       schema. In the above example, the <code>numberOfRatings</code> would match the
   *       'NUMBER_OF_RATINGS' field defined in the Item interactions dataset's schema.</p>
   *          <p>
   *       The following can't be included as a keyword for properties (case insensitive).
   *
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *           userId
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *           sessionId
   *         </p>
   *             </li>
   *             <li>
   *                <p>eventType</p>
   *             </li>
   *             <li>
   *                <p>timestamp</p>
   *             </li>
   *             <li>
   *                <p>recommendationId</p>
   *             </li>
   *             <li>
   *                <p>impression</p>
   *             </li>
   *          </ul>
   */
  properties?: __LazyJsonString | string;

  /**
   * @public
   * <p>The timestamp (in Unix time) on the client side when the event occurred.</p>
   */
  sentAt: Date | undefined;

  /**
   * @public
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
   * @public
   * <p>A list of item IDs that represents the sequence of items you have shown the user. For example, <code>["itemId1", "itemId2", "itemId3"]</code>. Provide a list of
   *       items to manually record impressions data for an event. For more information on recording impressions data,
   *       see <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html#putevents-including-impressions-data">Recording impressions data</a>. </p>
   */
  impression?: string[];

  /**
   * @public
   * <p>Contains information about the metric attribution associated with an event. For more information about metric attributions, see <a href="https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html">Measuring impact of recommendations</a>.</p>
   */
  metricAttribution?: MetricAttribution;
}

/**
 * @public
 */
export interface PutEventsRequest {
  /**
   * @public
   * <p>The tracking ID for the event.
   *       The ID is generated by a call to the
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html">CreateEventTracker</a> API.</p>
   */
  trackingId: string | undefined;

  /**
   * @public
   * <p>The user associated with the event.</p>
   */
  userId?: string;

  /**
   * @public
   * <p>The session ID associated with the user's visit. Your application generates the sessionId when a user first visits your website or uses your application.
   *       Amazon Personalize uses the sessionId to associate events with the user before they log in. For more information, see
   *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/recording-item-interaction-events.html">Recording item interaction events</a>.</p>
   */
  sessionId: string | undefined;

  /**
   * @public
   * <p>A list of event data from the session.</p>
   */
  eventList: Event[] | undefined;
}

/**
 * @public
 * <p>Represents item metadata added to an Items dataset using the
 *       <code>PutItems</code> API. For more information see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html">Importing items individually</a>.
 *     </p>
 */
export interface Item {
  /**
   * @public
   * <p>The ID associated with the item.</p>
   */
  itemId: string | undefined;

  /**
   * @public
   * <p>A string map of item-specific metadata. Each element in the map consists of a key-value pair.
   *       For example, <code>\{"numberOfRatings": "12"\}</code>.</p>
   *          <p>The keys use camel case names that match the fields in the schema for the Items
   *       dataset. In the previous example, the <code>numberOfRatings</code> matches the
   *       'NUMBER_OF_RATINGS' field defined in the Items schema. For categorical string data, to include multiple categories for a single item,
   *       separate each category with a pipe separator (<code>|</code>). For example, <code>\"Horror|Action\"</code>.</p>
   */
  properties?: __LazyJsonString | string;
}

/**
 * @public
 */
export interface PutItemsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Items dataset you are adding the item or items to.</p>
   */
  datasetArn: string | undefined;

  /**
   * @public
   * <p>A list of item data.</p>
   */
  items: Item[] | undefined;
}

/**
 * @public
 * <p>Represents user metadata added to a Users dataset using the
 *       <code>PutUsers</code> API. For more information see
 *       <a href="https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html">Importing users individually</a>.</p>
 */
export interface User {
  /**
   * @public
   * <p>The ID associated with the user.</p>
   */
  userId: string | undefined;

  /**
   * @public
   * <p>A string map of user-specific metadata. Each element in the map consists of a key-value pair.
   *       For example, <code>\{"numberOfVideosWatched": "45"\}</code>.</p>
   *          <p>The keys use camel case names that match the fields in the schema for the Users
   *       dataset. In the previous example, the <code>numberOfVideosWatched</code> matches the
   *       'NUMBER_OF_VIDEOS_WATCHED' field defined in the Users schema. For categorical string data,
   *       to include multiple categories for a single user, separate each category with a pipe separator (<code>|</code>).
   *       For example, <code>\"Member|Frequent shopper\"</code>.</p>
   */
  properties?: __LazyJsonString | string;
}

/**
 * @public
 */
export interface PutUsersRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Users dataset you are adding the user or users to.</p>
   */
  datasetArn: string | undefined;

  /**
   * @public
   * <p>A list of user data.</p>
   */
  users: User[] | undefined;
}

/**
 * @internal
 */
export const ActionFilterSensitiveLog = (obj: Action): any => ({
  ...obj,
  ...(obj.properties && { properties: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ActionInteractionFilterSensitiveLog = (obj: ActionInteraction): any => ({
  ...obj,
  ...(obj.actionId && { actionId: SENSITIVE_STRING }),
  ...(obj.userId && { userId: SENSITIVE_STRING }),
  ...(obj.impression && { impression: SENSITIVE_STRING }),
  ...(obj.properties && { properties: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PutActionInteractionsRequestFilterSensitiveLog = (obj: PutActionInteractionsRequest): any => ({
  ...obj,
  ...(obj.actionInteractions && {
    actionInteractions: obj.actionInteractions.map((item) => ActionInteractionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const PutActionsRequestFilterSensitiveLog = (obj: PutActionsRequest): any => ({
  ...obj,
  ...(obj.actions && { actions: obj.actions.map((item) => ActionFilterSensitiveLog(item)) }),
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
