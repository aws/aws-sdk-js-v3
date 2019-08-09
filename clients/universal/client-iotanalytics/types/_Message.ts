/**
 * <p>Information about a message.</p>
 */
export interface _Message {
  /**
   * <p>The ID you wish to assign to the message. Each "messageId" must be unique within each batch sent.</p>
   */
  messageId: string;

  /**
   * <p>The payload of the message. This may be a JSON string or a Base64-encoded string representing binary data (in which case you must decode it by means of a pipeline activity).</p>
   */
  payload: ArrayBuffer | ArrayBufferView | string;
}

export interface _UnmarshalledMessage extends _Message {
  /**
   * <p>The payload of the message. This may be a JSON string or a Base64-encoded string representing binary data (in which case you must decode it by means of a pipeline activity).</p>
   */
  payload: Uint8Array;
}
