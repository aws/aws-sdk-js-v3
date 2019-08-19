/**
 * <p>Information about a named query ID that could not be processed.</p>
 */
export interface _UnprocessedNamedQueryId {
  /**
   * <p>The unique identifier of the named query.</p>
   */
  NamedQueryId?: string;

  /**
   * <p>The error code returned when the processing request for the named query failed, if applicable.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message returned when the processing request for the named query failed, if applicable.</p>
   */
  ErrorMessage?: string;
}

export type _UnmarshalledUnprocessedNamedQueryId = _UnprocessedNamedQueryId;
