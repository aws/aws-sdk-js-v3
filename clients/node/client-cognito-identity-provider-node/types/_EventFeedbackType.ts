/**
 * <p>Specifies the event feedback type.</p>
 */
export interface _EventFeedbackType {
  /**
   * <p>The event feedback value.</p>
   */
  FeedbackValue: "Valid" | "Invalid" | string;

  /**
   * <p>The provider.</p>
   */
  Provider: string;

  /**
   * <p>The event feedback date.</p>
   */
  FeedbackDate?: Date | string | number;
}

export interface _UnmarshalledEventFeedbackType extends _EventFeedbackType {
  /**
   * <p>The event feedback date.</p>
   */
  FeedbackDate?: Date;
}
