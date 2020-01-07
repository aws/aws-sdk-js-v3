import { BatchDeleteDocumentCommandInput, BatchDeleteDocumentCommandOutput } from "./commands/BatchDeleteDocumentCommand";
import { BatchPutDocumentCommandInput, BatchPutDocumentCommandOutput } from "./commands/BatchPutDocumentCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "./commands/CreateDataSourceCommand";
import { CreateFaqCommandInput, CreateFaqCommandOutput } from "./commands/CreateFaqCommand";
import { CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import { DeleteFaqCommandInput, DeleteFaqCommandOutput } from "./commands/DeleteFaqCommand";
import { DeleteIndexCommandInput, DeleteIndexCommandOutput } from "./commands/DeleteIndexCommand";
import { DescribeDataSourceCommandInput, DescribeDataSourceCommandOutput } from "./commands/DescribeDataSourceCommand";
import { DescribeFaqCommandInput, DescribeFaqCommandOutput } from "./commands/DescribeFaqCommand";
import { DescribeIndexCommandInput, DescribeIndexCommandOutput } from "./commands/DescribeIndexCommand";
import { ListDataSourceSyncJobsCommandInput, ListDataSourceSyncJobsCommandOutput } from "./commands/ListDataSourceSyncJobsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import { ListFaqsCommandInput, ListFaqsCommandOutput } from "./commands/ListFaqsCommand";
import { ListIndicesCommandInput, ListIndicesCommandOutput } from "./commands/ListIndicesCommand";
import { QueryCommandInput, QueryCommandOutput } from "./commands/QueryCommand";
import { StartDataSourceSyncJobCommandInput, StartDataSourceSyncJobCommandOutput } from "./commands/StartDataSourceSyncJobCommand";
import { StopDataSourceSyncJobCommandInput, StopDataSourceSyncJobCommandOutput } from "./commands/StopDataSourceSyncJobCommand";
import { SubmitFeedbackCommandInput, SubmitFeedbackCommandOutput } from "./commands/SubmitFeedbackCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import { UpdateIndexCommandInput, UpdateIndexCommandOutput } from "./commands/UpdateIndexCommand";
import { kendraClient } from "./kendraClient";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon Kendra is a service for indexing large document sets.</p>
 */
export declare class kendra extends kendraClient {
    /**
     * <p>Removes one or more documents from an index. The documents must have been added with the
     *         <a>BatchPutDocument</a> operation.</p>
     *          <p>The documents are deleted asynchronously. You can see the progress of the deletion by
     *       using AWS CloudWatch. Any error messages releated to the processing of the batch are sent to
     *       you CloudWatch log.</p>
     */
    batchDeleteDocument(args: BatchDeleteDocumentCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeleteDocumentCommandOutput>;
    batchDeleteDocument(args: BatchDeleteDocumentCommandInput, cb: (err: any, data?: BatchDeleteDocumentCommandOutput) => void): void;
    batchDeleteDocument(args: BatchDeleteDocumentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDeleteDocumentCommandOutput) => void): void;
    /**
     * <p>Adds one or more documents to an index.</p>
     *          <p>The <code>BatchPutDocument</code> operation enables you to ingest inline documents or a
     *       set of documents stored in an Amazon S3 bucket. Use this operation to ingest your text and
     *       unstructured text into an index, add custom attributes to the documents, and to attach an
     *       access control list to the documents added to the index.</p>
     *          <p>The documents are indexed asynchronously. You can see the progress of the batch using AWS
     *       CloudWatch. Any error messages related to processing the batch are sent to your AWS CloudWatch
     *       log.</p>
     */
    batchPutDocument(args: BatchPutDocumentCommandInput, options?: __HttpHandlerOptions): Promise<BatchPutDocumentCommandOutput>;
    batchPutDocument(args: BatchPutDocumentCommandInput, cb: (err: any, data?: BatchPutDocumentCommandOutput) => void): void;
    batchPutDocument(args: BatchPutDocumentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchPutDocumentCommandOutput) => void): void;
    /**
     * <p>Creates a data source that you use to with an Amazon Kendra index. </p>
     *          <p>You specify a name, connector type and description for your data source. You can choose
     *       between an S3 connector, a SharePoint Online connector, and a database connector.</p>
     *          <p>You also specify configuration information such as document metadata (author, source URI,
     *       and so on) and user context information.</p>
     *          <p>
     *             <code>CreateDataSource</code> is a synchronous operation. The operation returns 200 if the
     *       data source was successfully created. Otherwise, an exception is raised.</p>
     */
    createDataSource(args: CreateDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<CreateDataSourceCommandOutput>;
    createDataSource(args: CreateDataSourceCommandInput, cb: (err: any, data?: CreateDataSourceCommandOutput) => void): void;
    createDataSource(args: CreateDataSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDataSourceCommandOutput) => void): void;
    /**
     * <p>Creates an new set of frequently asked question (FAQ) questions and answers.</p>
     */
    createFaq(args: CreateFaqCommandInput, options?: __HttpHandlerOptions): Promise<CreateFaqCommandOutput>;
    createFaq(args: CreateFaqCommandInput, cb: (err: any, data?: CreateFaqCommandOutput) => void): void;
    createFaq(args: CreateFaqCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFaqCommandOutput) => void): void;
    /**
     * <p>Creates a new Amazon Kendra index. Index creation is an asynchronous operation. To
     *       determine if index creation has completed, check the <code>Status</code> field returned from a
     *       call to . The <code>Status</code> field is set to
     *         <code>ACTIVE</code> when the index is ready to use.</p>
     *          <p>Once the index is active you can index your documents using the  operation or using one of the supported data sources.
     *     </p>
     */
    createIndex(args: CreateIndexCommandInput, options?: __HttpHandlerOptions): Promise<CreateIndexCommandOutput>;
    createIndex(args: CreateIndexCommandInput, cb: (err: any, data?: CreateIndexCommandOutput) => void): void;
    createIndex(args: CreateIndexCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateIndexCommandOutput) => void): void;
    /**
     * <p>Removes an FAQ from an index.</p>
     */
    deleteFaq(args: DeleteFaqCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFaqCommandOutput>;
    deleteFaq(args: DeleteFaqCommandInput, cb: (err: any, data?: DeleteFaqCommandOutput) => void): void;
    deleteFaq(args: DeleteFaqCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFaqCommandOutput) => void): void;
    /**
     * <p>Deletes an existing Amazon Kendra index. An exception is not thrown if the index is already
     *       being deleted. While the index is being deleted, the <code>Status</code> field returned by a
     *       call to the <a>DescribeIndex</a> operation is set to <code>DELETING</code>.</p>
     */
    deleteIndex(args: DeleteIndexCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIndexCommandOutput>;
    deleteIndex(args: DeleteIndexCommandInput, cb: (err: any, data?: DeleteIndexCommandOutput) => void): void;
    deleteIndex(args: DeleteIndexCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteIndexCommandOutput) => void): void;
    /**
     * <p>Gets information about a Amazon Kendra data source.</p>
     */
    describeDataSource(args: DescribeDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDataSourceCommandOutput>;
    describeDataSource(args: DescribeDataSourceCommandInput, cb: (err: any, data?: DescribeDataSourceCommandOutput) => void): void;
    describeDataSource(args: DescribeDataSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDataSourceCommandOutput) => void): void;
    /**
     * <p>Gets information about an FAQ list.</p>
     */
    describeFaq(args: DescribeFaqCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFaqCommandOutput>;
    describeFaq(args: DescribeFaqCommandInput, cb: (err: any, data?: DescribeFaqCommandOutput) => void): void;
    describeFaq(args: DescribeFaqCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeFaqCommandOutput) => void): void;
    /**
     * <p>Describes an existing Amazon Kendra index</p>
     */
    describeIndex(args: DescribeIndexCommandInput, options?: __HttpHandlerOptions): Promise<DescribeIndexCommandOutput>;
    describeIndex(args: DescribeIndexCommandInput, cb: (err: any, data?: DescribeIndexCommandOutput) => void): void;
    describeIndex(args: DescribeIndexCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeIndexCommandOutput) => void): void;
    /**
     * <p>Gets statistics about synchronizing Amazon Kendra with a data source.</p>
     */
    listDataSourceSyncJobs(args: ListDataSourceSyncJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListDataSourceSyncJobsCommandOutput>;
    listDataSourceSyncJobs(args: ListDataSourceSyncJobsCommandInput, cb: (err: any, data?: ListDataSourceSyncJobsCommandOutput) => void): void;
    listDataSourceSyncJobs(args: ListDataSourceSyncJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDataSourceSyncJobsCommandOutput) => void): void;
    /**
     * <p>Lists the data sources that you have created.</p>
     */
    listDataSources(args: ListDataSourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListDataSourcesCommandOutput>;
    listDataSources(args: ListDataSourcesCommandInput, cb: (err: any, data?: ListDataSourcesCommandOutput) => void): void;
    listDataSources(args: ListDataSourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDataSourcesCommandOutput) => void): void;
    /**
     * <p>Gets a list of FAQ lists associated with an index.</p>
     */
    listFaqs(args: ListFaqsCommandInput, options?: __HttpHandlerOptions): Promise<ListFaqsCommandOutput>;
    listFaqs(args: ListFaqsCommandInput, cb: (err: any, data?: ListFaqsCommandOutput) => void): void;
    listFaqs(args: ListFaqsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFaqsCommandOutput) => void): void;
    /**
     * <p>Lists the Amazon Kendra indexes that you have created.</p>
     */
    listIndices(args: ListIndicesCommandInput, options?: __HttpHandlerOptions): Promise<ListIndicesCommandOutput>;
    listIndices(args: ListIndicesCommandInput, cb: (err: any, data?: ListIndicesCommandOutput) => void): void;
    listIndices(args: ListIndicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListIndicesCommandOutput) => void): void;
    /**
     * <p>Searches an active index. Use this API to search your documents using query. The
     *             <code>Query</code> operation enables to do faceted search and to filter results based on
     *          document attributes.</p>
     *          <p>It also enables you to provide user context that Amazon Kendra uses to enforce document
     *          access control in the search results. </p>
     *          <p>Amazon Kendra searches your index for text content and question and answer (FAQ) content.
     *       By default the response contains three types of results.</p>
     *          <ul>
     *             <li>
     *                <p>Relevant passages</p>
     *             </li>
     *             <li>
     *                <p>Matching FAQs</p>
     *             </li>
     *             <li>
     *                <p>Relevant documents</p>
     *             </li>
     *          </ul>
     *          <p>You can specify that the query return only one type of result using the
     *       <code>QueryResultTypeConfig</code> parameter.</p>
     */
    query(args: QueryCommandInput, options?: __HttpHandlerOptions): Promise<QueryCommandOutput>;
    query(args: QueryCommandInput, cb: (err: any, data?: QueryCommandOutput) => void): void;
    query(args: QueryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: QueryCommandOutput) => void): void;
    /**
     * <p>Starts a synchronization job for a data source. If a synchronization job is already in
     *       progress, Amazon Kendra returns a <code>ResourceInUseException</code> exception.</p>
     */
    startDataSourceSyncJob(args: StartDataSourceSyncJobCommandInput, options?: __HttpHandlerOptions): Promise<StartDataSourceSyncJobCommandOutput>;
    startDataSourceSyncJob(args: StartDataSourceSyncJobCommandInput, cb: (err: any, data?: StartDataSourceSyncJobCommandOutput) => void): void;
    startDataSourceSyncJob(args: StartDataSourceSyncJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartDataSourceSyncJobCommandOutput) => void): void;
    /**
     * <p>Stops a running synchronization job. You can't stop a scheduled synchronization
     *       job.</p>
     */
    stopDataSourceSyncJob(args: StopDataSourceSyncJobCommandInput, options?: __HttpHandlerOptions): Promise<StopDataSourceSyncJobCommandOutput>;
    stopDataSourceSyncJob(args: StopDataSourceSyncJobCommandInput, cb: (err: any, data?: StopDataSourceSyncJobCommandOutput) => void): void;
    stopDataSourceSyncJob(args: StopDataSourceSyncJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopDataSourceSyncJobCommandOutput) => void): void;
    /**
     * <p>Enables you to provide feedback to Amazon Kendra to improve the performance
     *         of the service. </p>
     */
    submitFeedback(args: SubmitFeedbackCommandInput, options?: __HttpHandlerOptions): Promise<SubmitFeedbackCommandOutput>;
    submitFeedback(args: SubmitFeedbackCommandInput, cb: (err: any, data?: SubmitFeedbackCommandOutput) => void): void;
    submitFeedback(args: SubmitFeedbackCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SubmitFeedbackCommandOutput) => void): void;
    /**
     * <p>Updates an existing Amazon Kendra data source.</p>
     */
    updateDataSource(args: UpdateDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDataSourceCommandOutput>;
    updateDataSource(args: UpdateDataSourceCommandInput, cb: (err: any, data?: UpdateDataSourceCommandOutput) => void): void;
    updateDataSource(args: UpdateDataSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDataSourceCommandOutput) => void): void;
    /**
     * <p>Updates an existing Amazon Kendra index.</p>
     */
    updateIndex(args: UpdateIndexCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIndexCommandOutput>;
    updateIndex(args: UpdateIndexCommandInput, cb: (err: any, data?: UpdateIndexCommandOutput) => void): void;
    updateIndex(args: UpdateIndexCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateIndexCommandOutput) => void): void;
}
