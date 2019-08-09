/**
 * <p>Represents a matched event.</p>
 */
export interface _MetricFilterMatchRecord {
  /**
   * <p>The event number.</p>
   */
  eventNumber?: number;

  /**
   * <p>The raw event data.</p>
   */
  eventMessage?: string;

  /**
   * <p>The values extracted from the event data by the filter.</p>
   */
  extractedValues?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledMetricFilterMatchRecord
  extends _MetricFilterMatchRecord {
  /**
   * <p>The values extracted from the event data by the filter.</p>
   */
  extractedValues?: { [key: string]: string };
}
