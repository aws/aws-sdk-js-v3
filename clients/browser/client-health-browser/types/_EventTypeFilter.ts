/**
 * <p>The values to use to filter results from the <a>DescribeEventTypes</a> operation.</p>
 */
export interface _EventTypeFilter {
  /**
   * <p>A list of event type codes.</p>
   */
  eventTypeCodes?: Array<string> | Iterable<string>;

  /**
   * <p>The AWS services associated with the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   */
  services?: Array<string> | Iterable<string>;

  /**
   * <p>A list of event type category codes (<code>issue</code>, <code>scheduledChange</code>, or <code>accountNotification</code>).</p>
   */
  eventTypeCategories?:
    | Array<
        | "issue"
        | "accountNotification"
        | "scheduledChange"
        | "investigation"
        | string
      >
    | Iterable<
        | "issue"
        | "accountNotification"
        | "scheduledChange"
        | "investigation"
        | string
      >;
}

export interface _UnmarshalledEventTypeFilter extends _EventTypeFilter {
  /**
   * <p>A list of event type codes.</p>
   */
  eventTypeCodes?: Array<string>;

  /**
   * <p>The AWS services associated with the event. For example, <code>EC2</code>, <code>RDS</code>.</p>
   */
  services?: Array<string>;

  /**
   * <p>A list of event type category codes (<code>issue</code>, <code>scheduledChange</code>, or <code>accountNotification</code>).</p>
   */
  eventTypeCategories?: Array<
    | "issue"
    | "accountNotification"
    | "scheduledChange"
    | "investigation"
    | string
  >;
}
