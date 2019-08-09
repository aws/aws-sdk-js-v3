/**
 * <p>Describes a resize operation.</p>
 */
export interface _ResizeInfo {
  /**
   * <p>Returns the value <code>ClassicResize</code>.</p>
   */
  ResizeType?: string;

  /**
   * <p>A boolean value indicating if the resize operation can be cancelled.</p>
   */
  AllowCancelResize?: boolean;
}

export type _UnmarshalledResizeInfo = _ResizeInfo;
