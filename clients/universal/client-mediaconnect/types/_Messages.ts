/**
 * Messages that provide the state of the flow.
 */
export interface _Messages {
  /**
   * A list of errors that might have been generated from processes on this flow.
   */
  Errors: Array<string> | Iterable<string>;
}

export interface _UnmarshalledMessages extends _Messages {
  /**
   * A list of errors that might have been generated from processes on this flow.
   */
  Errors: Array<string>;
}
