/**
 * <p>A serializer to use for converting data to the ORC format before storing it in Amazon S3. For more information, see <a href="https://orc.apache.org/docs/">Apache ORC</a>.</p>
 */
export interface _OrcSerDe {
  /**
   * <p>The number of bytes in each stripe. The default is 64 MiB and the minimum is 8 MiB.</p>
   */
  StripeSizeBytes?: number;

  /**
   * <p>The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the minimum is 64 MiB. Kinesis Data Firehose uses this value for padding calculations.</p>
   */
  BlockSizeBytes?: number;

  /**
   * <p>The number of rows between index entries. The default is 10,000 and the minimum is 1,000.</p>
   */
  RowIndexStride?: number;

  /**
   * <p>Set this to <code>true</code> to indicate that you want stripes to be padded to the HDFS block boundaries. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is <code>false</code>.</p>
   */
  EnablePadding?: boolean;

  /**
   * <p>A number between 0 and 1 that defines the tolerance for block padding as a decimal fraction of stripe size. The default value is 0.05, which means 5 percent of stripe size.</p> <p>For the default values of 64 MiB ORC stripes and 256 MiB HDFS blocks, the default block padding tolerance of 5 percent reserves a maximum of 3.2 MiB for padding within the 256 MiB block. In such a case, if the available size within the block is more than 3.2 MiB, a new, smaller stripe is inserted to fit within that space. This ensures that no stripe crosses block boundaries and causes remote reads within a node-local task.</p> <p>Kinesis Data Firehose ignores this parameter when <a>OrcSerDe$EnablePadding</a> is <code>false</code>.</p>
   */
  PaddingTolerance?: number;

  /**
   * <p>The compression code to use over data blocks. The default is <code>SNAPPY</code>.</p>
   */
  Compression?: "NONE" | "ZLIB" | "SNAPPY" | string;

  /**
   * <p>The column names for which you want Kinesis Data Firehose to create bloom filters. The default is <code>null</code>.</p>
   */
  BloomFilterColumns?: Array<string> | Iterable<string>;

  /**
   * <p>The Bloom filter false positive probability (FPP). The lower the FPP, the bigger the Bloom filter. The default value is 0.05, the minimum is 0, and the maximum is 1.</p>
   */
  BloomFilterFalsePositiveProbability?: number;

  /**
   * <p>Represents the fraction of the total number of non-null rows. To turn off dictionary encoding, set this fraction to a number that is less than the number of distinct keys in a dictionary. To always use dictionary encoding, set this threshold to 1.</p>
   */
  DictionaryKeyThreshold?: number;

  /**
   * <p>The version of the file to write. The possible values are <code>V0_11</code> and <code>V0_12</code>. The default is <code>V0_12</code>.</p>
   */
  FormatVersion?: "V0_11" | "V0_12" | string;
}

export interface _UnmarshalledOrcSerDe extends _OrcSerDe {
  /**
   * <p>The column names for which you want Kinesis Data Firehose to create bloom filters. The default is <code>null</code>.</p>
   */
  BloomFilterColumns?: Array<string>;
}
