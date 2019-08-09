import {
  _StorageDescriptor,
  _UnmarshalledStorageDescriptor
} from "./_StorageDescriptor";

/**
 * <p>Represents a slice of table data.</p>
 */
export interface _Partition {
  /**
   * <p>The values of the partition.</p>
   */
  Values?: Array<string> | Iterable<string>;

  /**
   * <p>The name of the catalog database where the table in question is located.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The name of the table in question.</p>
   */
  TableName?: string;

  /**
   * <p>The time at which the partition was created.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>The last time at which the partition was accessed.</p>
   */
  LastAccessTime?: Date | string | number;

  /**
   * <p>Provides information about the physical location where the partition is stored.</p>
   */
  StorageDescriptor?: _StorageDescriptor;

  /**
   * <p>These key-value pairs define partition parameters.</p>
   */
  Parameters?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The last time at which column statistics were computed for this partition.</p>
   */
  LastAnalyzedTime?: Date | string | number;
}

export interface _UnmarshalledPartition extends _Partition {
  /**
   * <p>The values of the partition.</p>
   */
  Values?: Array<string>;

  /**
   * <p>The time at which the partition was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last time at which the partition was accessed.</p>
   */
  LastAccessTime?: Date;

  /**
   * <p>Provides information about the physical location where the partition is stored.</p>
   */
  StorageDescriptor?: _UnmarshalledStorageDescriptor;

  /**
   * <p>These key-value pairs define partition parameters.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>The last time at which column statistics were computed for this partition.</p>
   */
  LastAnalyzedTime?: Date;
}
