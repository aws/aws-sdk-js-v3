/**
 * <p>Represents an event to be submitted.</p>
 */
export interface _PutEventsRequestEntry {
  /**
   * <p>The timestamp of the event, per <a href="https://www.rfc-editor.org/rfc/rfc3339.txt">RFC3339</a>. If no timestamp is provided, the timestamp of the <a>PutEvents</a> call is used.</p>
   */
  Time?: Date | string | number;

  /**
   * <p>The source of the event. This field is required.</p>
   */
  Source?: string;

  /**
   * <p>AWS resources, identified by Amazon Resource Name (ARN), that the event primarily concerns. Any number, including zero, can be present.</p>
   */
  Resources?: Array<string> | Iterable<string>;

  /**
   * <p>Free-form string used to decide which fields to expect in the event detail.</p>
   */
  DetailType?: string;

  /**
   * <p>A valid JSON string. There is no other schema imposed. The JSON string can contain fields and nested subobjects.</p>
   */
  Detail?: string;

  /**
   * <p>The event bus that will receive the event. Only the rules that are associated with this event bus can match the event.</p>
   */
  EventBusName?: string;
}

export interface _UnmarshalledPutEventsRequestEntry
  extends _PutEventsRequestEntry {
  /**
   * <p>The timestamp of the event, per <a href="https://www.rfc-editor.org/rfc/rfc3339.txt">RFC3339</a>. If no timestamp is provided, the timestamp of the <a>PutEvents</a> call is used.</p>
   */
  Time?: Date;

  /**
   * <p>AWS resources, identified by Amazon Resource Name (ARN), that the event primarily concerns. Any number, including zero, can be present.</p>
   */
  Resources?: Array<string>;
}
