/**
 * <p>An array of information related to the import task request that includes status information, times, IDs, the Amazon S3 Object URL for the import file, and more.</p>
 */
export interface _ImportTask {
  /**
   * <p>The unique ID for a specific import task. These IDs aren't globally unique, but they are unique within an AWS account.</p>
   */
  importTaskId?: string;

  /**
   * <p>A unique token used to prevent the same import request from occurring more than once. If you didn't provide a token, a token was automatically generated when the import task request was sent.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>A descriptive name for an import task. You can use this name to filter future requests related to this import task, such as identifying applications and servers that were included in this import task. We recommend that you use a meaningful name for each import task.</p>
   */
  name?: string;

  /**
   * <p>The URL for your import file that you've uploaded to Amazon S3.</p>
   */
  importUrl?: string;

  /**
   * <p>The status of the import task. An import can have the status of <code>IMPORT_COMPLETE</code> and still have some records fail to import from the overall request. More information can be found in the downloadable archive defined in the <code>errorsAndFailedEntriesZip</code> field, or in the Migration Hub management console.</p>
   */
  status?:
    | "IMPORT_IN_PROGRESS"
    | "IMPORT_COMPLETE"
    | "IMPORT_COMPLETE_WITH_ERRORS"
    | "IMPORT_FAILED"
    | "IMPORT_FAILED_SERVER_LIMIT_EXCEEDED"
    | "IMPORT_FAILED_RECORD_LIMIT_EXCEEDED"
    | "DELETE_IN_PROGRESS"
    | "DELETE_COMPLETE"
    | "DELETE_FAILED"
    | "DELETE_FAILED_LIMIT_EXCEEDED"
    | "INTERNAL_ERROR"
    | string;

  /**
   * <p>The time that the import task request was made, presented in the Unix time stamp format.</p>
   */
  importRequestTime?: Date | string | number;

  /**
   * <p>The time that the import task request finished, presented in the Unix time stamp format.</p>
   */
  importCompletionTime?: Date | string | number;

  /**
   * <p>The time that the import task request was deleted, presented in the Unix time stamp format.</p>
   */
  importDeletedTime?: Date | string | number;

  /**
   * <p>The total number of server records in the import file that were successfully imported.</p>
   */
  serverImportSuccess?: number;

  /**
   * <p>The total number of server records in the import file that failed to be imported.</p>
   */
  serverImportFailure?: number;

  /**
   * <p>The total number of application records in the import file that were successfully imported.</p>
   */
  applicationImportSuccess?: number;

  /**
   * <p>The total number of application records in the import file that failed to be imported.</p>
   */
  applicationImportFailure?: number;

  /**
   * <p>A link to a compressed archive folder (in the ZIP format) that contains an error log and a file of failed records. You can use these two files to quickly identify records that failed, why they failed, and correct those records. Afterward, you can upload the corrected file to your Amazon S3 bucket and create another import task request.</p> <p>This field also includes authorization information so you can confirm the authenticity of the compressed archive before you download it.</p> <p>If some records failed to be imported we recommend that you correct the records in the failed entries file and then imports that failed entries file. This prevents you from having to correct and update the larger original file and attempt importing it again.</p>
   */
  errorsAndFailedEntriesZip?: string;
}

export interface _UnmarshalledImportTask extends _ImportTask {
  /**
   * <p>The time that the import task request was made, presented in the Unix time stamp format.</p>
   */
  importRequestTime?: Date;

  /**
   * <p>The time that the import task request finished, presented in the Unix time stamp format.</p>
   */
  importCompletionTime?: Date;

  /**
   * <p>The time that the import task request was deleted, presented in the Unix time stamp format.</p>
   */
  importDeletedTime?: Date;
}
