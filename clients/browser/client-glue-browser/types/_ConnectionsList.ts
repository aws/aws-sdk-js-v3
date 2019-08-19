/**
 * <p>Specifies the connections used by a job.</p>
 */
export interface _ConnectionsList {
  /**
   * <p>A list of connections used by the job.</p>
   */
  Connections?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledConnectionsList extends _ConnectionsList {
  /**
   * <p>A list of connections used by the job.</p>
   */
  Connections?: Array<string>;
}
