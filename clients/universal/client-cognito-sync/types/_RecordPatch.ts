/**
 * An update operation for a record.
 */
export interface _RecordPatch {
  /**
   * An operation, either replace or remove.
   */
  Op: "replace" | "remove" | string;

  /**
   * The key associated with the record patch.
   */
  Key: string;

  /**
   * The value associated with the record patch.
   */
  Value?: string;

  /**
   * Last known server sync count for this record. Set to 0 if unknown.
   */
  SyncCount: number;

  /**
   * The last modified date of the client device.
   */
  DeviceLastModifiedDate?: Date | string | number;
}

export interface _UnmarshalledRecordPatch extends _RecordPatch {
  /**
   * The last modified date of the client device.
   */
  DeviceLastModifiedDate?: Date;
}
