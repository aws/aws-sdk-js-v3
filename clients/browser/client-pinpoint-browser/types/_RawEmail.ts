/**
 * An email represented as a raw MIME message.
 */
export interface _RawEmail {
  /**
   * The raw data of the email.
   */
  Data?: ArrayBuffer | ArrayBufferView | string;
}

export interface _UnmarshalledRawEmail extends _RawEmail {
  /**
   * The raw data of the email.
   */
  Data?: Uint8Array;
}
