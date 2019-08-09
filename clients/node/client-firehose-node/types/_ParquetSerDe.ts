/**
 * <p>A serializer to use for converting data to the Parquet format before storing it in Amazon S3. For more information, see <a href="https://parquet.apache.org/documentation/latest/">Apache Parquet</a>.</p>
 */
export interface _ParquetSerDe {
  /**
   * <p>The Hadoop Distributed File System (HDFS) block size. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 256 MiB and the minimum is 64 MiB. Kinesis Data Firehose uses this value for padding calculations.</p>
   */
  BlockSizeBytes?: number;

  /**
   * <p>The Parquet page size. Column chunks are divided into pages. A page is conceptually an indivisible unit (in terms of compression and encoding). The minimum value is 64 KiB and the default is 1 MiB.</p>
   */
  PageSizeBytes?: number;

  /**
   * <p>The compression code to use over data blocks. The possible values are <code>UNCOMPRESSED</code>, <code>SNAPPY</code>, and <code>GZIP</code>, with the default being <code>SNAPPY</code>. Use <code>SNAPPY</code> for higher decompression speed. Use <code>GZIP</code> if the compression ration is more important than speed.</p>
   */
  Compression?: "UNCOMPRESSED" | "GZIP" | "SNAPPY" | string;

  /**
   * <p>Indicates whether to enable dictionary compression.</p>
   */
  EnableDictionaryCompression?: boolean;

  /**
   * <p>The maximum amount of padding to apply. This is useful if you intend to copy the data from Amazon S3 to HDFS before querying. The default is 0.</p>
   */
  MaxPaddingBytes?: number;

  /**
   * <p>Indicates the version of row format to output. The possible values are <code>V1</code> and <code>V2</code>. The default is <code>V1</code>.</p>
   */
  WriterVersion?: "V1" | "V2" | string;
}

export type _UnmarshalledParquetSerDe = _ParquetSerDe;
