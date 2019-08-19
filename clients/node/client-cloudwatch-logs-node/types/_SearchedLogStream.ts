/**
 * <p>Represents the search status of a log stream.</p>
 */
export interface _SearchedLogStream {
  /**
   * <p>The name of the log stream.</p>
   */
  logStreamName?: string;

  /**
   * <p>Indicates whether all the events in this log stream were searched.</p>
   */
  searchedCompletely?: boolean;
}

export type _UnmarshalledSearchedLogStream = _SearchedLogStream;
