/**
 * <p>The latest known metered size (in bytes) of data stored in the file system, in its <code>Value</code> field, and the time at which that size was determined in its <code>Timestamp</code> field. The value doesn't represent the size of a consistent snapshot of the file system, but it is eventually consistent when there are no writes to the file system. That is, the value represents the actual size only if the file system is not modified for a period longer than a couple of hours. Otherwise, the value is not necessarily the exact size the file system was at any instant in time.</p>
 */
export interface _FileSystemSize {
  /**
   * <p>The latest known metered size (in bytes) of data stored in the file system.</p>
   */
  Value: number;

  /**
   * <p>The time at which the size of data, returned in the <code>Value</code> field, was determined. The value is the integer number of seconds since 1970-01-01T00:00:00Z.</p>
   */
  Timestamp?: Date | string | number;

  /**
   * <p>The latest known metered size (in bytes) of data stored in the Infrequent Access storage class.</p>
   */
  ValueInIA?: number;

  /**
   * <p>The latest known metered size (in bytes) of data stored in the Standard storage class.</p>
   */
  ValueInStandard?: number;
}

export interface _UnmarshalledFileSystemSize extends _FileSystemSize {
  /**
   * <p>The time at which the size of data, returned in the <code>Value</code> field, was determined. The value is the integer number of seconds since 1970-01-01T00:00:00Z.</p>
   */
  Timestamp?: Date;
}
