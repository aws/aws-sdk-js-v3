import {
  _StorageDescriptor,
  _UnmarshalledStorageDescriptor
} from "./_StorageDescriptor";

/**
 * <p>The structure used to create and update a partion.</p>
 */
export interface _PartitionInput {
  /**
   * <p>The values of the partition. Although this parameter is not required by the SDK, you must specify this parameter for a valid input.</p>
   */
  Values?: Array<string> | Iterable<string>;

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

export interface _UnmarshalledPartitionInput extends _PartitionInput {
  /**
   * <p>The values of the partition. Although this parameter is not required by the SDK, you must specify this parameter for a valid input.</p>
   */
  Values?: Array<string>;

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
