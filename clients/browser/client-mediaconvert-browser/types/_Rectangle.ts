/**
 * Use Rectangle to identify a specific area of the video frame.
 */
export interface _Rectangle {
  /**
   * Height of rectangle in pixels. Specify only even numbers.
   */
  Height?: number;

  /**
   * Width of rectangle in pixels. Specify only even numbers.
   */
  Width?: number;

  /**
   * The distance, in pixels, between the rectangle and the left edge of the video frame. Specify only even numbers.
   */
  X?: number;

  /**
   * The distance, in pixels, between the rectangle and the top edge of the video frame. Specify only even numbers.
   */
  Y?: number;
}

export type _UnmarshalledRectangle = _Rectangle;
