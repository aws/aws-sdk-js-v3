/**
 * <p>Specifies the contents of an email message, represented as a raw MIME message.</p>
 */
export interface _RawEmail {
  /**
   * <p>The email message, represented as a raw MIME message. The entire message must be base64 encoded.</p>
   */
  Data?: ArrayBuffer | ArrayBufferView | string;
}

export interface _UnmarshalledRawEmail extends _RawEmail {
  /**
   * <p>The email message, represented as a raw MIME message. The entire message must be base64 encoded.</p>
   */
  Data?: Uint8Array;
}
