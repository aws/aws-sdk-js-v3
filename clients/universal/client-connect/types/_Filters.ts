/**
 * <p>The filter, either channel or queues, to apply to the metric results retrieved.</p>
 */
export interface _Filters {
  /**
   * <p>A list of up to 100 queue IDs or queue ARNs to use to filter the metrics retrieved. You can include both IDs and ARNs in a request.</p>
   */
  Queues?: Array<string> | Iterable<string>;

  /**
   * <p>The Channel to use as a filter for the metrics returned. Only VOICE is supported.</p>
   */
  Channels?: Array<"VOICE" | string> | Iterable<"VOICE" | string>;
}

export interface _UnmarshalledFilters extends _Filters {
  /**
   * <p>A list of up to 100 queue IDs or queue ARNs to use to filter the metrics retrieved. You can include both IDs and ARNs in a request.</p>
   */
  Queues?: Array<string>;

  /**
   * <p>The Channel to use as a filter for the metrics returned. Only VOICE is supported.</p>
   */
  Channels?: Array<"VOICE" | string>;
}
