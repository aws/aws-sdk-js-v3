/**
 * <p>Describes the reason why the last image builder state change occurred.</p>
 */
export interface _ImageBuilderStateChangeReason {
  /**
   * <p>The state change reason code.</p>
   */
  Code?: "INTERNAL_ERROR" | "IMAGE_UNAVAILABLE" | string;

  /**
   * <p>The state change reason message.</p>
   */
  Message?: string;
}

export type _UnmarshalledImageBuilderStateChangeReason = _ImageBuilderStateChangeReason;
