import { TranscribeClient } from "./TranscribeClient";
import { CreateVocabularyCommandInput, CreateVocabularyCommandOutput } from "./commands/CreateVocabularyCommand";
import { CreateVocabularyFilterCommandInput, CreateVocabularyFilterCommandOutput } from "./commands/CreateVocabularyFilterCommand";
import { DeleteTranscriptionJobCommandInput, DeleteTranscriptionJobCommandOutput } from "./commands/DeleteTranscriptionJobCommand";
import { DeleteVocabularyCommandInput, DeleteVocabularyCommandOutput } from "./commands/DeleteVocabularyCommand";
import { DeleteVocabularyFilterCommandInput, DeleteVocabularyFilterCommandOutput } from "./commands/DeleteVocabularyFilterCommand";
import { GetTranscriptionJobCommandInput, GetTranscriptionJobCommandOutput } from "./commands/GetTranscriptionJobCommand";
import { GetVocabularyCommandInput, GetVocabularyCommandOutput } from "./commands/GetVocabularyCommand";
import { GetVocabularyFilterCommandInput, GetVocabularyFilterCommandOutput } from "./commands/GetVocabularyFilterCommand";
import { ListTranscriptionJobsCommandInput, ListTranscriptionJobsCommandOutput } from "./commands/ListTranscriptionJobsCommand";
import { ListVocabulariesCommandInput, ListVocabulariesCommandOutput } from "./commands/ListVocabulariesCommand";
import { ListVocabularyFiltersCommandInput, ListVocabularyFiltersCommandOutput } from "./commands/ListVocabularyFiltersCommand";
import { StartTranscriptionJobCommandInput, StartTranscriptionJobCommandOutput } from "./commands/StartTranscriptionJobCommand";
import { UpdateVocabularyCommandInput, UpdateVocabularyCommandOutput } from "./commands/UpdateVocabularyCommand";
import { UpdateVocabularyFilterCommandInput, UpdateVocabularyFilterCommandOutput } from "./commands/UpdateVocabularyFilterCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Operations and objects for transcribing speech to text.</p>
 */
export declare class Transcribe extends TranscribeClient {
    /**
     * <p>Creates a new custom vocabulary that you can use to change the way Amazon Transcribe handles
     *             transcription of an audio file. </p>
     */
    createVocabulary(args: CreateVocabularyCommandInput, options?: __HttpHandlerOptions): Promise<CreateVocabularyCommandOutput>;
    createVocabulary(args: CreateVocabularyCommandInput, cb: (err: any, data?: CreateVocabularyCommandOutput) => void): void;
    createVocabulary(args: CreateVocabularyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateVocabularyCommandOutput) => void): void;
    /**
     * <p>Creates a new vocabulary filter that you can use to filter words, such as profane
     *             words, from the output of a transcription job.</p>
     */
    createVocabularyFilter(args: CreateVocabularyFilterCommandInput, options?: __HttpHandlerOptions): Promise<CreateVocabularyFilterCommandOutput>;
    createVocabularyFilter(args: CreateVocabularyFilterCommandInput, cb: (err: any, data?: CreateVocabularyFilterCommandOutput) => void): void;
    createVocabularyFilter(args: CreateVocabularyFilterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateVocabularyFilterCommandOutput) => void): void;
    /**
     * <p>Deletes a previously submitted transcription job along with any other generated
     *             results such as the transcription, models, and so on.</p>
     */
    deleteTranscriptionJob(args: DeleteTranscriptionJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTranscriptionJobCommandOutput>;
    deleteTranscriptionJob(args: DeleteTranscriptionJobCommandInput, cb: (err: any, data?: DeleteTranscriptionJobCommandOutput) => void): void;
    deleteTranscriptionJob(args: DeleteTranscriptionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTranscriptionJobCommandOutput) => void): void;
    /**
     * <p>Deletes a vocabulary from Amazon Transcribe. </p>
     */
    deleteVocabulary(args: DeleteVocabularyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVocabularyCommandOutput>;
    deleteVocabulary(args: DeleteVocabularyCommandInput, cb: (err: any, data?: DeleteVocabularyCommandOutput) => void): void;
    deleteVocabulary(args: DeleteVocabularyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteVocabularyCommandOutput) => void): void;
    /**
     * <p>Removes a vocabulary filter.</p>
     */
    deleteVocabularyFilter(args: DeleteVocabularyFilterCommandInput, options?: __HttpHandlerOptions): Promise<DeleteVocabularyFilterCommandOutput>;
    deleteVocabularyFilter(args: DeleteVocabularyFilterCommandInput, cb: (err: any, data?: DeleteVocabularyFilterCommandOutput) => void): void;
    deleteVocabularyFilter(args: DeleteVocabularyFilterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteVocabularyFilterCommandOutput) => void): void;
    /**
     * <p>Returns information about a transcription job. To see the status of the job, check the
     *                 <code>TranscriptionJobStatus</code> field. If the status is <code>COMPLETED</code>,
     *             the job is finished and you can find the results at the location specified in the
     *                 <code>TranscriptionFileUri</code> field.</p>
     */
    getTranscriptionJob(args: GetTranscriptionJobCommandInput, options?: __HttpHandlerOptions): Promise<GetTranscriptionJobCommandOutput>;
    getTranscriptionJob(args: GetTranscriptionJobCommandInput, cb: (err: any, data?: GetTranscriptionJobCommandOutput) => void): void;
    getTranscriptionJob(args: GetTranscriptionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetTranscriptionJobCommandOutput) => void): void;
    /**
     * <p>Gets information about a vocabulary. </p>
     */
    getVocabulary(args: GetVocabularyCommandInput, options?: __HttpHandlerOptions): Promise<GetVocabularyCommandOutput>;
    getVocabulary(args: GetVocabularyCommandInput, cb: (err: any, data?: GetVocabularyCommandOutput) => void): void;
    getVocabulary(args: GetVocabularyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetVocabularyCommandOutput) => void): void;
    /**
     * <p>Returns information about a vocabulary filter.</p>
     */
    getVocabularyFilter(args: GetVocabularyFilterCommandInput, options?: __HttpHandlerOptions): Promise<GetVocabularyFilterCommandOutput>;
    getVocabularyFilter(args: GetVocabularyFilterCommandInput, cb: (err: any, data?: GetVocabularyFilterCommandOutput) => void): void;
    getVocabularyFilter(args: GetVocabularyFilterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetVocabularyFilterCommandOutput) => void): void;
    /**
     * <p>Lists transcription jobs with the specified status.</p>
     */
    listTranscriptionJobs(args: ListTranscriptionJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListTranscriptionJobsCommandOutput>;
    listTranscriptionJobs(args: ListTranscriptionJobsCommandInput, cb: (err: any, data?: ListTranscriptionJobsCommandOutput) => void): void;
    listTranscriptionJobs(args: ListTranscriptionJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTranscriptionJobsCommandOutput) => void): void;
    /**
     * <p>Returns a list of vocabularies that match the specified criteria. If no criteria are
     *             specified, returns the entire list of vocabularies.</p>
     */
    listVocabularies(args: ListVocabulariesCommandInput, options?: __HttpHandlerOptions): Promise<ListVocabulariesCommandOutput>;
    listVocabularies(args: ListVocabulariesCommandInput, cb: (err: any, data?: ListVocabulariesCommandOutput) => void): void;
    listVocabularies(args: ListVocabulariesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListVocabulariesCommandOutput) => void): void;
    /**
     * <p>Gets information about vocabulary filters.</p>
     */
    listVocabularyFilters(args: ListVocabularyFiltersCommandInput, options?: __HttpHandlerOptions): Promise<ListVocabularyFiltersCommandOutput>;
    listVocabularyFilters(args: ListVocabularyFiltersCommandInput, cb: (err: any, data?: ListVocabularyFiltersCommandOutput) => void): void;
    listVocabularyFilters(args: ListVocabularyFiltersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListVocabularyFiltersCommandOutput) => void): void;
    /**
     * <p>Starts an asynchronous job to transcribe speech to text. </p>
     */
    startTranscriptionJob(args: StartTranscriptionJobCommandInput, options?: __HttpHandlerOptions): Promise<StartTranscriptionJobCommandOutput>;
    startTranscriptionJob(args: StartTranscriptionJobCommandInput, cb: (err: any, data?: StartTranscriptionJobCommandOutput) => void): void;
    startTranscriptionJob(args: StartTranscriptionJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartTranscriptionJobCommandOutput) => void): void;
    /**
     * <p>Updates an existing vocabulary with new values. The <code>UpdateVocabulary</code>
     *             operation overwrites all of the existing information with the values that you provide in
     *             the request. </p>
     */
    updateVocabulary(args: UpdateVocabularyCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVocabularyCommandOutput>;
    updateVocabulary(args: UpdateVocabularyCommandInput, cb: (err: any, data?: UpdateVocabularyCommandOutput) => void): void;
    updateVocabulary(args: UpdateVocabularyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateVocabularyCommandOutput) => void): void;
    /**
     * <p>Updates a vocabulary filter with a new list of filtered words.</p>
     */
    updateVocabularyFilter(args: UpdateVocabularyFilterCommandInput, options?: __HttpHandlerOptions): Promise<UpdateVocabularyFilterCommandOutput>;
    updateVocabularyFilter(args: UpdateVocabularyFilterCommandInput, cb: (err: any, data?: UpdateVocabularyFilterCommandOutput) => void): void;
    updateVocabularyFilter(args: UpdateVocabularyFilterCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateVocabularyFilterCommandOutput) => void): void;
}
