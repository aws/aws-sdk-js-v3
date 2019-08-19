/**
 * <p>Describes the point at which the application reads from the streaming source.</p>
 */
export interface _InputStartingPositionConfiguration {
  /**
   * <p>The starting position on the stream.</p> <ul> <li> <p> <code>NOW</code> - Start reading just after the most recent record in the stream, and start at the request timestamp that the customer issued.</p> </li> <li> <p> <code>TRIM_HORIZON</code> - Start reading at the last untrimmed record in the stream, which is the oldest record available in the stream. This option is not available for an Amazon Kinesis Data Firehose delivery stream.</p> </li> <li> <p> <code>LAST_STOPPED_POINT</code> - Resume reading from where the application last stopped reading.</p> </li> </ul>
   */
  InputStartingPosition?:
    | "NOW"
    | "TRIM_HORIZON"
    | "LAST_STOPPED_POINT"
    | string;
}

export type _UnmarshalledInputStartingPositionConfiguration = _InputStartingPositionConfiguration;
