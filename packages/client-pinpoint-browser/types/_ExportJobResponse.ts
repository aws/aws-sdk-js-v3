import {
  _ExportJobResource,
  _UnmarshalledExportJobResource
} from "./_ExportJobResource";

/**
 * Export job response.
 */
export interface _ExportJobResponse {
  /**
   * The unique ID of the application associated with the export job.
   */
  ApplicationId?: string;

  /**
   * The number of pieces that have successfully completed as of the time of the request.
   */
  CompletedPieces?: number;

  /**
   * The date the job completed in ISO 8601 format.
   */
  CompletionDate?: string;

  /**
   * The date the job was created in ISO 8601 format.
   */
  CreationDate?: string;

  /**
   * The export job settings.
   */
  Definition?: _ExportJobResource;

  /**
   * The number of pieces that failed to be processed as of the time of the request.
   */
  FailedPieces?: number;

  /**
   * Provides up to 100 of the first failed entries for the job, if any exist.
   */
  Failures?: Array<string> | Iterable<string>;

  /**
   * The unique ID of the job.
   */
  Id?: string;

  /**
   * The status of the job.
   * Valid values: CREATED, INITIALIZING, PROCESSING, COMPLETING, COMPLETED, FAILING, FAILED
   *
   * The job status is FAILED if one or more pieces failed.
   */
  JobStatus?:
    | "CREATED"
    | "INITIALIZING"
    | "PROCESSING"
    | "COMPLETING"
    | "COMPLETED"
    | "FAILING"
    | "FAILED"
    | string;

  /**
   * The number of endpoints that were not processed; for example, because of syntax errors.
   */
  TotalFailures?: number;

  /**
   * The total number of pieces that must be processed to finish the job. Each piece is an approximately equal portion of the endpoints.
   */
  TotalPieces?: number;

  /**
   * The number of endpoints that were processed by the job.
   */
  TotalProcessed?: number;

  /**
   * The job type. Will be 'EXPORT'.
   */
  Type?: string;
}

export interface _UnmarshalledExportJobResponse extends _ExportJobResponse {
  /**
   * The export job settings.
   */
  Definition?: _UnmarshalledExportJobResource;

  /**
   * Provides up to 100 of the first failed entries for the job, if any exist.
   */
  Failures?: Array<string>;
}
