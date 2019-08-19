import { _ActivityType, _UnmarshalledActivityType } from "./_ActivityType";

/**
 * <p>Detailed information about an activity type.</p>
 */
export interface _ActivityTypeInfo {
  /**
   * <p>The <a>ActivityType</a> type structure representing the activity type.</p>
   */
  activityType: _ActivityType;

  /**
   * <p>The current status of the activity type.</p>
   */
  status: "REGISTERED" | "DEPRECATED" | string;

  /**
   * <p>The description of the activity type provided in <a>RegisterActivityType</a>.</p>
   */
  description?: string;

  /**
   * <p>The date and time this activity type was created through <a>RegisterActivityType</a>.</p>
   */
  creationDate: Date | string | number;

  /**
   * <p>If DEPRECATED, the date and time <a>DeprecateActivityType</a> was called.</p>
   */
  deprecationDate?: Date | string | number;
}

export interface _UnmarshalledActivityTypeInfo extends _ActivityTypeInfo {
  /**
   * <p>The <a>ActivityType</a> type structure representing the activity type.</p>
   */
  activityType: _UnmarshalledActivityType;

  /**
   * <p>The date and time this activity type was created through <a>RegisterActivityType</a>.</p>
   */
  creationDate: Date;

  /**
   * <p>If DEPRECATED, the date and time <a>DeprecateActivityType</a> was called.</p>
   */
  deprecationDate?: Date;
}
