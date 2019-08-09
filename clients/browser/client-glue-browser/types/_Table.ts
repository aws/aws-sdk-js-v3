import {
  _StorageDescriptor,
  _UnmarshalledStorageDescriptor
} from "./_StorageDescriptor";
import { _Column, _UnmarshalledColumn } from "./_Column";

/**
 * <p>Represents a collection of related data organized in columns and rows.</p>
 */
export interface _Table {
  /**
   * <p>Name of the table. For Hive compatibility, this must be entirely lowercase.</p>
   */
  Name: string;

  /**
   * <p>Name of the metadata database where the table metadata resides. For Hive compatibility, this must be all lowercase.</p>
   */
  DatabaseName?: string;

  /**
   * <p>Description of the table.</p>
   */
  Description?: string;

  /**
   * <p>Owner of the table.</p>
   */
  Owner?: string;

  /**
   * <p>Time when the table definition was created in the Data Catalog.</p>
   */
  CreateTime?: Date | string | number;

  /**
   * <p>Last time the table was updated.</p>
   */
  UpdateTime?: Date | string | number;

  /**
   * <p>Last time the table was accessed. This is usually taken from HDFS, and may not be reliable.</p>
   */
  LastAccessTime?: Date | string | number;

  /**
   * <p>Last time column statistics were computed for this table.</p>
   */
  LastAnalyzedTime?: Date | string | number;

  /**
   * <p>Retention time for this table.</p>
   */
  Retention?: number;

  /**
   * <p>A storage descriptor containing information about the physical storage of this table.</p>
   */
  StorageDescriptor?: _StorageDescriptor;

  /**
   * <p>A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.</p> <p>When creating a table used by Athena, and you do not specify any <code>partitionKeys</code>, you must at least set the value of <code>partitionKeys</code> to an empty list. For example:</p> <p> <code>"PartitionKeys": []</code> </p>
   */
  PartitionKeys?: Array<_Column> | Iterable<_Column>;

  /**
   * <p>If the table is a view, the original text of the view; otherwise <code>null</code>.</p>
   */
  ViewOriginalText?: string;

  /**
   * <p>If the table is a view, the expanded text of the view; otherwise <code>null</code>.</p>
   */
  ViewExpandedText?: string;

  /**
   * <p>The type of this table (<code>EXTERNAL_TABLE</code>, <code>VIRTUAL_VIEW</code>, etc.).</p>
   */
  TableType?: string;

  /**
   * <p>These key-value pairs define properties associated with the table.</p>
   */
  Parameters?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Person or entity who created the table.</p>
   */
  CreatedBy?: string;
}

export interface _UnmarshalledTable extends _Table {
  /**
   * <p>Time when the table definition was created in the Data Catalog.</p>
   */
  CreateTime?: Date;

  /**
   * <p>Last time the table was updated.</p>
   */
  UpdateTime?: Date;

  /**
   * <p>Last time the table was accessed. This is usually taken from HDFS, and may not be reliable.</p>
   */
  LastAccessTime?: Date;

  /**
   * <p>Last time column statistics were computed for this table.</p>
   */
  LastAnalyzedTime?: Date;

  /**
   * <p>A storage descriptor containing information about the physical storage of this table.</p>
   */
  StorageDescriptor?: _UnmarshalledStorageDescriptor;

  /**
   * <p>A list of columns by which the table is partitioned. Only primitive types are supported as partition keys.</p> <p>When creating a table used by Athena, and you do not specify any <code>partitionKeys</code>, you must at least set the value of <code>partitionKeys</code> to an empty list. For example:</p> <p> <code>"PartitionKeys": []</code> </p>
   */
  PartitionKeys?: Array<_UnmarshalledColumn>;

  /**
   * <p>These key-value pairs define properties associated with the table.</p>
   */
  Parameters?: { [key: string]: string };
}
