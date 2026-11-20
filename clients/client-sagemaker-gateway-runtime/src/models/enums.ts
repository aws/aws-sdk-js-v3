// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const StreamErrorCode = {
  /**
   * The model exceeded its allowed invocation time mid-stream.
   */
  MODEL_INVOCATION_TIME_EXCEEDED: "ModelInvocationTimeExceeded",
  /**
   * The model server's stream broke before it completed.
   */
  STREAM_BROKEN: "StreamBroken",
} as const;
/**
 * @public
 */
export type StreamErrorCode = (typeof StreamErrorCode)[keyof typeof StreamErrorCode];
