/**
 * <p>The unit of data in a delivery stream.</p>
 */
export interface _Record {
  /**
   * <p>The data blob, which is base64-encoded when the blob is serialized. The maximum size of the data blob, before base64-encoding, is 1,000 KiB.</p>
   */
  Data: ArrayBuffer | ArrayBufferView | string;
}

export interface _UnmarshalledRecord extends _Record {
  /**
   * <p>The data blob, which is base64-encoded when the blob is serialized. The maximum size of the data blob, before base64-encoding, is 1,000 KiB.</p>
   */
  Data: Uint8Array;
}
