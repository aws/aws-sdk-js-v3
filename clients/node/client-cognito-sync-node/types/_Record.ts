/**
 * The basic data structure of a dataset.
 */
export interface _Record {
  /**
   * The key for the record.
   */
  Key?: string;

  /**
   * The value for the record.
   */
  Value?: string;

  /**
   * The server sync count for this record.
   */
  SyncCount?: number;

  /**
   * The date on which the record was last modified.
   */
  LastModifiedDate?: Date | string | number;

  /**
   * The user/device that made the last change to this record.
   */
  LastModifiedBy?: string;

  /**
   * The last modified date of the client device.
   */
  DeviceLastModifiedDate?: Date | string | number;
}

export interface _UnmarshalledRecord extends _Record {
  /**
   * The date on which the record was last modified.
   */
  LastModifiedDate?: Date;

  /**
   * The last modified date of the client device.
   */
  DeviceLastModifiedDate?: Date;
}
