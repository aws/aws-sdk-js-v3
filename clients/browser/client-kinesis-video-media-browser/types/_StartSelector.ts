/**
 * <p>Identifies the chunk on the Kinesis video stream where you want the <code>GetMedia</code> API to start returning media data. You have the following options to identify the starting chunk: </p> <ul> <li> <p>Choose the latest (or oldest) chunk.</p> </li> <li> <p>Identify a specific chunk. You can identify a specific chunk either by providing a fragment number or timestamp (server or producer). </p> </li> <li> <p>Each chunk's metadata includes a continuation token as a Matroska (MKV) tag (<code>AWS_KINESISVIDEO_CONTINUATION_TOKEN</code>). If your previous <code>GetMedia</code> request terminated, you can use this tag value in your next <code>GetMedia</code> request. The API then starts returning chunks starting where the last API ended.</p> </li> </ul>
 */
export interface _StartSelector {
  /**
   * <p>Identifies the fragment on the Kinesis video stream where you want to start getting the data from.</p> <ul> <li> <p>NOW - Start with the latest chunk on the stream.</p> </li> <li> <p>EARLIEST - Start with earliest available chunk on the stream.</p> </li> <li> <p>FRAGMENT_NUMBER - Start with the chunk after a specific fragment. You must also specify the <code>AfterFragmentNumber</code> parameter.</p> </li> <li> <p>PRODUCER_TIMESTAMP or SERVER_TIMESTAMP - Start with the chunk containing a fragment with the specified producer or server timestamp. You specify the timestamp by adding <code>StartTimestamp</code>.</p> </li> <li> <p> CONTINUATION_TOKEN - Read using the specified continuation token. </p> </li> </ul> <note> <p>If you choose the NOW, EARLIEST, or CONTINUATION_TOKEN as the <code>startSelectorType</code>, you don't provide any additional information in the <code>startSelector</code>.</p> </note>
   */
  StartSelectorType:
    | "FRAGMENT_NUMBER"
    | "SERVER_TIMESTAMP"
    | "PRODUCER_TIMESTAMP"
    | "NOW"
    | "EARLIEST"
    | "CONTINUATION_TOKEN"
    | string;

  /**
   * <p>Specifies the fragment number from where you want the <code>GetMedia</code> API to start returning the fragments. </p>
   */
  AfterFragmentNumber?: string;

  /**
   * <p>A timestamp value. This value is required if you choose the PRODUCER_TIMESTAMP or the SERVER_TIMESTAMP as the <code>startSelectorType</code>. The <code>GetMedia</code> API then starts with the chunk containing the fragment that has the specified timestamp.</p>
   */
  StartTimestamp?: Date | string | number;

  /**
   * <p>Continuation token that Kinesis Video Streams returned in the previous <code>GetMedia</code> response. The <code>GetMedia</code> API then starts with the chunk identified by the continuation token.</p>
   */
  ContinuationToken?: string;
}

export interface _UnmarshalledStartSelector extends _StartSelector {
  /**
   * <p>A timestamp value. This value is required if you choose the PRODUCER_TIMESTAMP or the SERVER_TIMESTAMP as the <code>startSelectorType</code>. The <code>GetMedia</code> API then starts with the chunk containing the fragment that has the specified timestamp.</p>
   */
  StartTimestamp?: Date;
}
