import {_ImportJobResource, _UnmarshalledImportJobResource} from './_ImportJobResource';

/**
 * Import job response.
 */
export interface _ImportJobResponse {
    /**
     * The unique ID of the application to which the import job applies.
     */
    ApplicationId?: string;

    /**
     * The number of pieces that have successfully imported as of the time of the request.
     */
    CompletedPieces?: number;

    /**
     * The date the import job completed in ISO 8601 format.
     */
    CompletionDate?: string;

    /**
     * The date the import job was created in ISO 8601 format.
     */
    CreationDate?: string;

    /**
     * The import job settings.
     */
    Definition?: _ImportJobResource;

    /**
     * The number of pieces that have failed to import as of the time of the request.
     */
    FailedPieces?: number;

    /**
     * Provides up to 100 of the first failed entries for the job, if any exist.
     */
    Failures?: Array<string>|Iterable<string>;

    /**
     * The unique ID of the import job.
     */
    Id?: string;

    /**
     * The status of the import job.
     * Valid values: CREATED, INITIALIZING, PROCESSING, COMPLETING, COMPLETED, FAILING, FAILED
     *
     * The job status is FAILED if one or more pieces failed to import.
     */
    JobStatus?: 'CREATED'|'INITIALIZING'|'PROCESSING'|'COMPLETING'|'COMPLETED'|'FAILING'|'FAILED'|string;

    /**
     * The number of endpoints that failed to import; for example, because of syntax errors.
     */
    TotalFailures?: number;

    /**
     * The total number of pieces that must be imported to finish the job. Each piece is an approximately equal portion of the endpoints to import.
     */
    TotalPieces?: number;

    /**
     * The number of endpoints that were processed by the import job.
     */
    TotalProcessed?: number;

    /**
     * The job type. Will be Import.
     */
    Type?: string;
}

export interface _UnmarshalledImportJobResponse extends _ImportJobResponse {
    /**
     * The import job settings.
     */
    Definition?: _UnmarshalledImportJobResource;

    /**
     * Provides up to 100 of the first failed entries for the job, if any exist.
     */
    Failures?: Array<string>;
}