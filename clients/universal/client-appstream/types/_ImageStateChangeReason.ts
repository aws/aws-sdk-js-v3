/**
 * <p>Describes the reason why the last image state change occurred.</p>
 */
export interface _ImageStateChangeReason {
  /**
   * <p>The state change reason code.</p>
   */
  Code?:
    | "INTERNAL_ERROR"
    | "IMAGE_BUILDER_NOT_AVAILABLE"
    | "IMAGE_COPY_FAILURE"
    | string;

  /**
   * <p>The state change reason message.</p>
   */
  Message?: string;
}

export type _UnmarshalledImageStateChangeReason = _ImageStateChangeReason;
