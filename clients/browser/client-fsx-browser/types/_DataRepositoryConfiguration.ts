/**
 * <p>The data repository configuration object for Lustre file systems returned in the response of the <code>CreateFileSystem</code> operation.</p>
 */
export interface _DataRepositoryConfiguration {
  /**
   * <p>The import path to the Amazon S3 bucket (and optional prefix) that you're using as the data repository for your FSx for Lustre file system, for example <code>s3://import-bucket/optional-prefix</code>. If a prefix is specified after the Amazon S3 bucket name, only object keys with that prefix are loaded into the file system.</p>
   */
  ImportPath?: string;

  /**
   * <p>The export path to the Amazon S3 bucket (and prefix) that you are using to store new and changed Lustre file system files in S3.</p>
   */
  ExportPath?: string;

  /**
   * <p>For files imported from a data repository, this value determines the stripe count and maximum amount of data per file (in MiB) stored on a single physical disk. The maximum number of disks that a single file can be striped across is limited by the total number of disks that make up the file system.</p> <p>The default chunk size is 1,024 MiB (1 GiB) and can go as high as 512,000 MiB (500 GiB). Amazon S3 objects have a maximum size of 5 TB.</p>
   */
  ImportedFileChunkSize?: number;
}

export type _UnmarshalledDataRepositoryConfiguration = _DataRepositoryConfiguration;
