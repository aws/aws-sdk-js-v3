/**
 * Specify the offset between the upper-left corner of the video frame and the top left corner of the overlay.
 */
export interface _MotionImageInsertionOffset {
  /**
   * Set the distance, in pixels, between the overlay and the left edge of the video frame.
   */
  ImageX?: number;

  /**
   * Set the distance, in pixels, between the overlay and the top edge of the video frame.
   */
  ImageY?: number;
}

export type _UnmarshalledMotionImageInsertionOffset = _MotionImageInsertionOffset;
