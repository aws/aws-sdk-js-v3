/**
 * <p>Contains the resource id (<code>rid</code>) and the time it took to process the request (<code>timems</code>).</p>
 */
export interface _SuggestStatus {
  /**
   * <p>How long it took to process the request, in milliseconds.</p>
   */
  timems?: number;

  /**
   * <p>The encrypted resource ID for the request.</p>
   */
  rid?: string;
}

export type _UnmarshalledSuggestStatus = _SuggestStatus;
