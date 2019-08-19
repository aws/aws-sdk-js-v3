import { _Column, _UnmarshalledColumn } from "./_Column";
import { _SerDeInfo, _UnmarshalledSerDeInfo } from "./_SerDeInfo";
import { _Order, _UnmarshalledOrder } from "./_Order";
import { _SkewedInfo, _UnmarshalledSkewedInfo } from "./_SkewedInfo";

/**
 * <p>Describes the physical storage of table data.</p>
 */
export interface _StorageDescriptor {
  /**
   * <p>A list of the <code>Columns</code> in the table.</p>
   */
  Columns?: Array<_Column> | Iterable<_Column>;

  /**
   * <p>The physical location of the table. By default this takes the form of the warehouse location, followed by the database location in the warehouse, followed by the table name.</p>
   */
  Location?: string;

  /**
   * <p>The input format: <code>SequenceFileInputFormat</code> (binary), or <code>TextInputFormat</code>, or a custom format.</p>
   */
  InputFormat?: string;

  /**
   * <p>The output format: <code>SequenceFileOutputFormat</code> (binary), or <code>IgnoreKeyTextOutputFormat</code>, or a custom format.</p>
   */
  OutputFormat?: string;

  /**
   * <p>True if the data in the table is compressed, or False if not.</p>
   */
  Compressed?: boolean;

  /**
   * <p>Must be specified if the table contains any dimension columns.</p>
   */
  NumberOfBuckets?: number;

  /**
   * <p>Serialization/deserialization (SerDe) information.</p>
   */
  SerdeInfo?: _SerDeInfo;

  /**
   * <p>A list of reducer grouping columns, clustering columns, and bucketing columns in the table.</p>
   */
  BucketColumns?: Array<string> | Iterable<string>;

  /**
   * <p>A list specifying the sort order of each bucket in the table.</p>
   */
  SortColumns?: Array<_Order> | Iterable<_Order>;

  /**
   * <p>User-supplied properties in key-value form.</p>
   */
  Parameters?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Information about values that appear very frequently in a column (skewed values).</p>
   */
  SkewedInfo?: _SkewedInfo;

  /**
   * <p>True if the table data is stored in subdirectories, or False if not.</p>
   */
  StoredAsSubDirectories?: boolean;
}

export interface _UnmarshalledStorageDescriptor extends _StorageDescriptor {
  /**
   * <p>A list of the <code>Columns</code> in the table.</p>
   */
  Columns?: Array<_UnmarshalledColumn>;

  /**
   * <p>Serialization/deserialization (SerDe) information.</p>
   */
  SerdeInfo?: _UnmarshalledSerDeInfo;

  /**
   * <p>A list of reducer grouping columns, clustering columns, and bucketing columns in the table.</p>
   */
  BucketColumns?: Array<string>;

  /**
   * <p>A list specifying the sort order of each bucket in the table.</p>
   */
  SortColumns?: Array<_UnmarshalledOrder>;

  /**
   * <p>User-supplied properties in key-value form.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>Information about values that appear very frequently in a column (skewed values).</p>
   */
  SkewedInfo?: _UnmarshalledSkewedInfo;
}
