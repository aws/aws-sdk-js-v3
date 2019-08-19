/**
 * <p>An object that recognizes faces in a streaming video. An Amazon Rekognition stream processor is created by a call to <a>CreateStreamProcessor</a>. The request parameters for <code>CreateStreamProcessor</code> describe the Kinesis video stream source for the streaming video, face recognition parameters, and where to stream the analysis resullts. </p>
 */
export interface _StreamProcessor {
  /**
   * <p>Name of the Amazon Rekognition stream processor. </p>
   */
  Name?: string;

  /**
   * <p>Current status of the Amazon Rekognition stream processor.</p>
   */
  Status?: "STOPPED" | "STARTING" | "RUNNING" | "FAILED" | "STOPPING" | string;
}

export type _UnmarshalledStreamProcessor = _StreamProcessor;
