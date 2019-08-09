/**
 * _BlobAttributeValue shape
 */
export interface _BlobAttributeValue {
  /**
   * _Blob shape
   */
  Value?: ArrayBuffer | ArrayBufferView | string;
}

export interface _UnmarshalledBlobAttributeValue extends _BlobAttributeValue {
  /**
   * _Blob shape
   */
  Value?: Uint8Array;
}
