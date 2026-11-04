// smithy-typescript generated code
import { AutomaticJsonStringConversion as __AutomaticJsonStringConversion } from "@smithy/core/serde";

/**
 * Represents action metadata added to an Action dataset using the `PutActions` API. For more information see [Importing actions individually](https://docs.aws.amazon.com/personalize/latest/dg/importing-actions.html).
 *
 * @public
 */
export interface Action {
  /**
   * The ID associated with the action.
   *
   * @public
   */
  actionId: string | undefined;

  /**
   * A string map of action-specific metadata. Each element in the map consists of a key-value pair. For example, `\{"value": "100"\}`.
   *
   * The keys use camel case names that match the fields in the schema for the Actions dataset. In the previous example, the `value` matches the 'VALUE' field defined in the Actions schema. For categorical string data, to include multiple categories for a single action, separate each category with a pipe separator (`|`). For example, `\"Deluxe|Premium\"`.
   *
   * @public
   */
  properties?: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * Represents an action interaction event sent using the `PutActionInteractions` API.
 *
 * @public
 */
export interface ActionInteraction {
  /**
   * The ID of the action the user interacted with. This corresponds to the `ACTION_ID` field of the Action interaction schema.
   *
   * @public
   */
  actionId: string | undefined;

  /**
   * The ID of the user who interacted with the action. This corresponds to the `USER_ID` field of the Action interaction schema.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The ID associated with the user's visit. Your application generates a unique `sessionId` when a user first visits your website or uses your application.
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * The timestamp for when the action interaction event occurred. Timestamps must be in Unix epoch time format, in seconds.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The type of action interaction event. You can specify `Viewed`, `Taken`, and `Not Taken` event types. For more information about action interaction event type data, see [Event type data](https://docs.aws.amazon.com/personalize/latest/dg/action-interaction-event-type-data.html).
   *
   * @public
   */
  eventType: string | undefined;

  /**
   * An ID associated with the event. If an event ID is not provided, Amazon Personalize generates a unique ID for the event. An event ID is not used as an input to the model. Amazon Personalize uses the event ID to distinguish unique events. Any subsequent events after the first with the same event ID are not used in model training.
   *
   * @public
   */
  eventId?: string | undefined;

  /**
   * The ID of the list of recommendations that contains the action the user interacted with.
   *
   * @public
   */
  recommendationId?: string | undefined;

  /**
   * A list of action IDs that represents the sequence of actions you have shown the user. For example, `["actionId1", "actionId2", "actionId3"]`. Amazon Personalize doesn't use impressions data from action interaction events. Instead, record multiple events for each action and use the `Viewed` event type.
   *
   * @public
   */
  impression?: string[] | undefined;

  /**
   * A string map of event-specific data that you might choose to record. For example, if a user takes an action, other than the action ID, you might also send the number of actions taken by the user.
   *
   * Each item in the map consists of a key-value pair. For example,
   *
   * `\{"numberOfActions": "12"\}`
   *
   * The keys use camel case names that match the fields in the Action interactions schema. In the above example, the `numberOfActions` would match the 'NUMBER_OF_ACTIONS' field defined in the Action interactions schema.
   *
   * The following can't be included as a keyword for properties (case insensitive).
   *
   * - userId
   * - sessionId
   * - eventType
   * - timestamp
   * - recommendationId
   * - impression
   *
   * @public
   */
  properties?: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * @public
 */
export interface PutActionInteractionsRequest {
  /**
   * The ID of your action interaction event tracker. When you create an Action interactions dataset, Amazon Personalize creates an action interaction event tracker for you. For more information, see [Action interaction event tracker ID](https://docs.aws.amazon.com/personalize/latest/dg/action-interaction-tracker-id.html).
   *
   * @public
   */
  trackingId: string | undefined;

  /**
   * A list of action interaction events from the session.
   *
   * @public
   */
  actionInteractions: ActionInteraction[] | undefined;
}

/**
 * @public
 */
export interface PutActionsRequest {
  /**
   * The Amazon Resource Name (ARN) of the Actions dataset you are adding the action or actions to.
   *
   * @public
   */
  datasetArn: string | undefined;

  /**
   * A list of action data.
   *
   * @public
   */
  actions: Action[] | undefined;
}

/**
 * Contains information about a metric attribution associated with an event. For more information about metric attributions, see [Measuring impact of recommendations](https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html).
 *
 * @public
 */
export interface MetricAttribution {
  /**
   * The source of the event, such as a third party.
   *
   * @public
   */
  eventAttributionSource: string | undefined;
}

/**
 * Represents item interaction event information sent using the `PutEvents` API.
 *
 * @public
 */
export interface Event {
  /**
   * An ID associated with the event. If an event ID is not provided, Amazon Personalize generates a unique ID for the event. An event ID is not used as an input to the model. Amazon Personalize uses the event ID to distinguish unique events. Any subsequent events after the first with the same event ID are not used in model training.
   *
   * @public
   */
  eventId?: string | undefined;

  /**
   * The type of event, such as click or download. This property corresponds to the `EVENT_TYPE` field of your Item interactions dataset's schema and depends on the types of events you are tracking.
   *
   * @public
   */
  eventType: string | undefined;

  /**
   * The event value that corresponds to the `EVENT_VALUE` field of the Item interactions schema.
   *
   * @public
   */
  eventValue?: number | undefined;

  /**
   * The item ID key that corresponds to the `ITEM_ID` field of the Item interactions dataset's schema.
   *
   * @public
   */
  itemId?: string | undefined;

  /**
   * A string map of event-specific data that you might choose to record. For example, if a user rates a movie on your site, other than movie ID (`itemId`) and rating (`eventValue`) , you might also send the number of movie ratings made by the user.
   *
   * Each item in the map consists of a key-value pair. For example,
   *
   * `\{"numberOfRatings": "12"\}`
   *
   * The keys use camel case names that match the fields in the Item interactions dataset's schema. In the above example, the `numberOfRatings` would match the 'NUMBER_OF_RATINGS' field defined in the Item interactions dataset's schema.
   *
   * The following can't be included as a keyword for properties (case insensitive).
   *
   * - userId
   * - sessionId
   * - eventType
   * - timestamp
   * - recommendationId
   * - impression
   *
   * @public
   */
  properties?: __AutomaticJsonStringConversion | string | undefined;

  /**
   * The timestamp (in Unix time) on the client side when the event occurred.
   *
   * @public
   */
  sentAt: Date | undefined;

  /**
   * The ID of the list of recommendations that contains the item the user interacted with. Provide a `recommendationId` to have Amazon Personalize implicitly record the recommendations you show your user as impressions data. Or provide a `recommendationId` if you use a metric attribution to measure the impact of recommendations.
   *
   * For more information on recording impressions data, see [Recording impressions data](https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html#putevents-including-impressions-data). For more information on creating a metric attribution see [Measuring impact of recommendations](https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html).
   *
   * @public
   */
  recommendationId?: string | undefined;

  /**
   * A list of item IDs that represents the sequence of items you have shown the user. For example, `["itemId1", "itemId2", "itemId3"]`. Provide a list of items to manually record impressions data for an event. For more information on recording impressions data, see [Recording impressions data](https://docs.aws.amazon.com/personalize/latest/dg/recording-events.html#putevents-including-impressions-data).
   *
   * @public
   */
  impression?: string[] | undefined;

  /**
   * Contains information about the metric attribution associated with an event. For more information about metric attributions, see [Measuring impact of recommendations](https://docs.aws.amazon.com/personalize/latest/dg/measuring-recommendation-impact.html).
   *
   * @public
   */
  metricAttribution?: MetricAttribution | undefined;
}

/**
 * @public
 */
export interface PutEventsRequest {
  /**
   * The tracking ID for the event. The ID is generated by a call to the [CreateEventTracker](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateEventTracker.html) API.
   *
   * @public
   */
  trackingId: string | undefined;

  /**
   * The user associated with the event.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The session ID associated with the user's visit. Your application generates the sessionId when a user first visits your website or uses your application. Amazon Personalize uses the sessionId to associate events with the user before they log in. For more information, see [Recording item interaction events](https://docs.aws.amazon.com/personalize/latest/dg/recording-item-interaction-events.html).
   *
   * @public
   */
  sessionId: string | undefined;

  /**
   * A list of event data from the session.
   *
   * @public
   */
  eventList: Event[] | undefined;
}

/**
 * Represents item metadata added to an Items dataset using the `PutItems` API. For more information see [Importing items individually](https://docs.aws.amazon.com/personalize/latest/dg/importing-items.html).
 *
 * @public
 */
export interface Item {
  /**
   * The ID associated with the item.
   *
   * @public
   */
  itemId: string | undefined;

  /**
   * A string map of item-specific metadata. Each element in the map consists of a key-value pair. For example, `\{"numberOfRatings": "12"\}`.
   *
   * The keys use camel case names that match the fields in the schema for the Items dataset. In the previous example, the `numberOfRatings` matches the 'NUMBER_OF_RATINGS' field defined in the Items schema. For categorical string data, to include multiple categories for a single item, separate each category with a pipe separator (`|`). For example, `\"Horror|Action\"`.
   *
   * @public
   */
  properties?: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * @public
 */
export interface PutItemsRequest {
  /**
   * The Amazon Resource Name (ARN) of the Items dataset you are adding the item or items to.
   *
   * @public
   */
  datasetArn: string | undefined;

  /**
   * A list of item data.
   *
   * @public
   */
  items: Item[] | undefined;
}

/**
 * Represents user metadata added to a Users dataset using the `PutUsers` API. For more information see [Importing users individually](https://docs.aws.amazon.com/personalize/latest/dg/importing-users.html).
 *
 * @public
 */
export interface User {
  /**
   * The ID associated with the user.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * A string map of user-specific metadata. Each element in the map consists of a key-value pair. For example, `\{"numberOfVideosWatched": "45"\}`.
   *
   * The keys use camel case names that match the fields in the schema for the Users dataset. In the previous example, the `numberOfVideosWatched` matches the 'NUMBER_OF_VIDEOS_WATCHED' field defined in the Users schema. For categorical string data, to include multiple categories for a single user, separate each category with a pipe separator (`|`). For example, `\"Member|Frequent shopper\"`.
   *
   * @public
   */
  properties?: __AutomaticJsonStringConversion | string | undefined;
}

/**
 * @public
 */
export interface PutUsersRequest {
  /**
   * The Amazon Resource Name (ARN) of the Users dataset you are adding the user or users to.
   *
   * @public
   */
  datasetArn: string | undefined;

  /**
   * A list of user data.
   *
   * @public
   */
  users: User[] | undefined;
}
