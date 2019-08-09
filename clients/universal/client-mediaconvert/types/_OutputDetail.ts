import { _VideoDetail, _UnmarshalledVideoDetail } from "./_VideoDetail";

/**
 * Details regarding output
 */
export interface _OutputDetail {
  /**
   * Duration in milliseconds
   */
  DurationInMs?: number;

  /**
   * Contains details about the output's video stream
   */
  VideoDetails?: _VideoDetail;
}

export interface _UnmarshalledOutputDetail extends _OutputDetail {
  /**
   * Contains details about the output's video stream
   */
  VideoDetails?: _UnmarshalledVideoDetail;
}
