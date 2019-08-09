/**
 * <p>An attachment to a case communication. The attachment consists of the file name and the content of the file.</p>
 */
export interface _Attachment {
  /**
   * <p>The name of the attachment file.</p>
   */
  fileName?: string;

  /**
   * <p>The content of the attachment file.</p>
   */
  data?: ArrayBuffer | ArrayBufferView | string;
}

export interface _UnmarshalledAttachment extends _Attachment {
  /**
   * <p>The content of the attachment file.</p>
   */
  data?: Uint8Array;
}
