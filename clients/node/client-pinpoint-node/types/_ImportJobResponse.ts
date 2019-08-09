import {
  _ImportJobResource,
  _UnmarshalledImportJobResource
} from "./_ImportJobResource";

/**
 * <p>Provides information about the status and settings of a job that imports endpoint definitions from one or more files. The files can be stored in an Amazon Simple Storage Service (Amazon S3) bucket or uploaded directly from a computer by using the Amazon Pinpoint console.</p>
 */
export interface _ImportJobResponse {
  /**
   * <p>The unique identifier for the application that's associated with the import job.</p>
   */
  ApplicationId: string;

  /**
   * <p>The number of pieces that were processed successfully (completed) by the import job, as of the time of the request.</p>
   */
  CompletedPieces?: number;

  /**
   * <p>The date, in ISO 8601 format, when the import job was completed.</p>
   */
  CompletionDate?: string;

  /**
   * <p>The date, in ISO 8601 format, when the import job was created.</p>
   */
  CreationDate: string;

  /**
   * <p>The resource settings that apply to the import job.</p>
   */
  Definition: _ImportJobResource;

  /**
   * <p>The number of pieces that weren't processed successfully (failed) by the import job, as of the time of the request.</p>
   */
  FailedPieces?: number;

  /**
   * <p>An array of entries, one for each of the first 100 entries that weren't processed successfully (failed) by the import job, if any.</p>
   */
  Failures?: Array<string> | Iterable<string>;

  /**
   * <p>The unique identifier for the import job.</p>
   */
  Id: string;

  /**
   * <p>The status of the import job. The job status is FAILED if Amazon Pinpoint wasn't able to process one or more pieces in the job.</p>
   */
  JobStatus:
    | "CREATED"
    | "INITIALIZING"
    | "PROCESSING"
    | "COMPLETING"
    | "COMPLETED"
    | "FAILING"
    | "FAILED"
    | string;

  /**
   * <p>The total number of endpoint definitions that weren't processed successfully (failed) by the import job, typically because an error, such as a syntax error, occurred.</p>
   */
  TotalFailures?: number;

  /**
   * <p>The total number of pieces that must be processed to complete the import job. Each piece consists of an approximately equal portion of the endpoint definitions that are part of the import job.</p>
   */
  TotalPieces?: number;

  /**
   * <p>The total number of endpoint definitions that were processed by the import job.</p>
   */
  TotalProcessed?: number;

  /**
   * <p>The job type. This value is IMPORT for import jobs.</p>
   */
  Type: string;
}

export interface _UnmarshalledImportJobResponse extends _ImportJobResponse {
  /**
   * <p>The resource settings that apply to the import job.</p>
   */
  Definition: _UnmarshalledImportJobResource;

  /**
   * <p>An array of entries, one for each of the first 100 entries that weren't processed successfully (failed) by the import job, if any.</p>
   */
  Failures?: Array<string>;
}
