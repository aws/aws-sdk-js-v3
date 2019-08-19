import {
  _ExportJobResource,
  _UnmarshalledExportJobResource
} from "./_ExportJobResource";

/**
 * <p>Provides information about the status and settings of a job that exports endpoint definitions to a file. The file can be added directly to an Amazon Simple Storage Service (Amazon S3) bucket by using the Amazon Pinpoint API or downloaded directly to a computer by using the Amazon Pinpoint console.</p>
 */
export interface _ExportJobResponse {
  /**
   * <p>The unique identifier for the application that's associated with the export job.</p>
   */
  ApplicationId: string;

  /**
   * <p>The number of pieces that were processed successfully (completed) by the export job, as of the time of the request.</p>
   */
  CompletedPieces?: number;

  /**
   * <p>The date, in ISO 8601 format, when the export job was completed.</p>
   */
  CompletionDate?: string;

  /**
   * <p>The date, in ISO 8601 format, when the export job was created.</p>
   */
  CreationDate: string;

  /**
   * <p>The resource settings that apply to the export job.</p>
   */
  Definition: _ExportJobResource;

  /**
   * <p>The number of pieces that weren't processed successfully (failed) by the export job, as of the time of the request.</p>
   */
  FailedPieces?: number;

  /**
   * <p>An array of entries, one for each of the first 100 entries that weren't processed successfully (failed) by the export job, if any.</p>
   */
  Failures?: Array<string> | Iterable<string>;

  /**
   * <p>The unique identifier for the export job.</p>
   */
  Id: string;

  /**
   * <p>The status of the export job. The job status is FAILED if Amazon Pinpoint wasn't able to process one or more pieces in the job.</p>
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
   * <p>The total number of endpoint definitions that weren't processed successfully (failed) by the export job, typically because an error, such as a syntax error, occurred.</p>
   */
  TotalFailures?: number;

  /**
   * <p>The total number of pieces that must be processed to complete the export job. Each piece consists of an approximately equal portion of the endpoint definitions that are part of the export job.</p>
   */
  TotalPieces?: number;

  /**
   * <p>The total number of endpoint definitions that were processed by the export job.</p>
   */
  TotalProcessed?: number;

  /**
   * <p>The job type. This value is EXPORT for export jobs.</p>
   */
  Type: string;
}

export interface _UnmarshalledExportJobResponse extends _ExportJobResponse {
  /**
   * <p>The resource settings that apply to the export job.</p>
   */
  Definition: _UnmarshalledExportJobResource;

  /**
   * <p>An array of entries, one for each of the first 100 entries that weren't processed successfully (failed) by the export job, if any.</p>
   */
  Failures?: Array<string>;
}
