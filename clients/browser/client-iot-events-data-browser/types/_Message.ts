/**
 * <p>Information about a message.</p>
 */
export interface _Message {
  /**
   * <p>The ID to assign to the message. Within each batch sent, each <code>"messageId"</code> must be unique.</p>
   */
  messageId: string;

  /**
   * <p>The name of the input into which the message payload is transformed.</p>
   */
  inputName: string;

  /**
   * <p>The payload of the message. This can be a JSON string or a Base-64-encoded string representing binary data (in which case you must decode it).</p>
   */
  payload: ArrayBuffer | ArrayBufferView | string;
}

export interface _UnmarshalledMessage extends _Message {
  /**
   * <p>The payload of the message. This can be a JSON string or a Base-64-encoded string representing binary data (in which case you must decode it).</p>
   */
  payload: Uint8Array;
}
