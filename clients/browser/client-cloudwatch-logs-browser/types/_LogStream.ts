/**
 * <p>Represents a log stream, which is a sequence of log events from a single emitter of logs.</p>
 */
export interface _LogStream {
  /**
   * <p>The name of the log stream.</p>
   */
  logStreamName?: string;

  /**
   * <p>The creation time of the stream, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</p>
   */
  creationTime?: number;

  /**
   * <p>The time of the first event, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</p>
   */
  firstEventTimestamp?: number;

  /**
   * <p>The time of the most recent log event in the log stream in CloudWatch Logs. This number is expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC. The <code>lastEventTime</code> value updates on an eventual consistency basis. It typically updates in less than an hour from ingestion, but may take longer in some rare situations.</p>
   */
  lastEventTimestamp?: number;

  /**
   * <p>The ingestion time, expressed as the number of milliseconds after Jan 1, 1970 00:00:00 UTC.</p>
   */
  lastIngestionTime?: number;

  /**
   * <p>The sequence token.</p>
   */
  uploadSequenceToken?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the log stream.</p>
   */
  arn?: string;

  /**
   * <p>The number of bytes stored.</p> <p> <b>IMPORTANT:</b> Starting on June 17, 2019, this parameter will be deprecated for log streams, and will be reported as zero. This change applies only to log streams. The <code>storedBytes</code> parameter for log groups is not affected.</p>
   */
  storedBytes?: number;
}

export type _UnmarshalledLogStream = _LogStream;
