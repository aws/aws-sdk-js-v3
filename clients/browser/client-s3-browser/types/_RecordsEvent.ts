/**
 * <p/>
 */
export interface _RecordsEvent {
  /**
   * <p>The byte array of partial, one or more result records.</p>
   */
  Payload?: ArrayBuffer | ArrayBufferView | string;
}

export interface _UnmarshalledRecordsEvent extends _RecordsEvent {
  /**
   * <p>The byte array of partial, one or more result records.</p>
   */
  Payload?: Uint8Array;
}
