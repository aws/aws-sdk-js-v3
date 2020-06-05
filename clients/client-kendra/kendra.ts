import {
  BatchDeleteDocumentCommand,
  BatchDeleteDocumentCommandInput,
  BatchDeleteDocumentCommandOutput
} from "./commands/BatchDeleteDocumentCommand";
import {
  BatchPutDocumentCommand,
  BatchPutDocumentCommandInput,
  BatchPutDocumentCommandOutput
} from "./commands/BatchPutDocumentCommand";
import {
  CreateDataSourceCommand,
  CreateDataSourceCommandInput,
  CreateDataSourceCommandOutput
} from "./commands/CreateDataSourceCommand";
import {
  CreateFaqCommand,
  CreateFaqCommandInput,
  CreateFaqCommandOutput
} from "./commands/CreateFaqCommand";
import {
  CreateIndexCommand,
  CreateIndexCommandInput,
  CreateIndexCommandOutput
} from "./commands/CreateIndexCommand";
import {
  DeleteFaqCommand,
  DeleteFaqCommandInput,
  DeleteFaqCommandOutput
} from "./commands/DeleteFaqCommand";
import {
  DeleteIndexCommand,
  DeleteIndexCommandInput,
  DeleteIndexCommandOutput
} from "./commands/DeleteIndexCommand";
import {
  DescribeDataSourceCommand,
  DescribeDataSourceCommandInput,
  DescribeDataSourceCommandOutput
} from "./commands/DescribeDataSourceCommand";
import {
  DescribeFaqCommand,
  DescribeFaqCommandInput,
  DescribeFaqCommandOutput
} from "./commands/DescribeFaqCommand";
import {
  DescribeIndexCommand,
  DescribeIndexCommandInput,
  DescribeIndexCommandOutput
} from "./commands/DescribeIndexCommand";
import {
  ListDataSourceSyncJobsCommand,
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput
} from "./commands/ListDataSourceSyncJobsCommand";
import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput
} from "./commands/ListDataSourcesCommand";
import {
  ListFaqsCommand,
  ListFaqsCommandInput,
  ListFaqsCommandOutput
} from "./commands/ListFaqsCommand";
import {
  ListIndicesCommand,
  ListIndicesCommandInput,
  ListIndicesCommandOutput
} from "./commands/ListIndicesCommand";
import {
  QueryCommand,
  QueryCommandInput,
  QueryCommandOutput
} from "./commands/QueryCommand";
import {
  StartDataSourceSyncJobCommand,
  StartDataSourceSyncJobCommandInput,
  StartDataSourceSyncJobCommandOutput
} from "./commands/StartDataSourceSyncJobCommand";
import {
  StopDataSourceSyncJobCommand,
  StopDataSourceSyncJobCommandInput,
  StopDataSourceSyncJobCommandOutput
} from "./commands/StopDataSourceSyncJobCommand";
import {
  SubmitFeedbackCommand,
  SubmitFeedbackCommandInput,
  SubmitFeedbackCommandOutput
} from "./commands/SubmitFeedbackCommand";
import {
  UpdateDataSourceCommand,
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput
} from "./commands/UpdateDataSourceCommand";
import {
  UpdateIndexCommand,
  UpdateIndexCommandInput,
  UpdateIndexCommandOutput
} from "./commands/UpdateIndexCommand";
import { kendraClient } from "./kendraClient";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon Kendra is a service for indexing large document sets.</p>
 */
export class kendra extends kendraClient {
  /**
   * <p>Removes one or more documents from an index. The documents must have been added with the
   *         <a>BatchPutDocument</a> operation.</p>
   *          <p>The documents are deleted asynchronously. You can see the progress of the deletion by
   *       using AWS CloudWatch. Any error messages releated to the processing of the batch are sent to
   *       you CloudWatch log.</p>
   */
  public batchDeleteDocument(
    args: BatchDeleteDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteDocumentCommandOutput>;
  public batchDeleteDocument(
    args: BatchDeleteDocumentCommandInput,
    cb: (err: any, data?: BatchDeleteDocumentCommandOutput) => void
  ): void;
  public batchDeleteDocument(
    args: BatchDeleteDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteDocumentCommandOutput) => void
  ): void;
  public batchDeleteDocument(
    args: BatchDeleteDocumentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchDeleteDocumentCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteDocumentCommandOutput) => void
  ): Promise<BatchDeleteDocumentCommandOutput> | void {
    const command = new BatchDeleteDocumentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
  public batchPutDocument(
    args: BatchPutDocumentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutDocumentCommandOutput>;
  public batchPutDocument(
    args: BatchPutDocumentCommandInput,
    cb: (err: any, data?: BatchPutDocumentCommandOutput) => void
  ): void;
  public batchPutDocument(
    args: BatchPutDocumentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutDocumentCommandOutput) => void
  ): void;
  public batchPutDocument(
    args: BatchPutDocumentCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: BatchPutDocumentCommandOutput) => void),
    cb?: (err: any, data?: BatchPutDocumentCommandOutput) => void
  ): Promise<BatchPutDocumentCommandOutput> | void {
    const command = new BatchPutDocumentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
  public createDataSource(
    args: CreateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSourceCommandOutput>;
  public createDataSource(
    args: CreateDataSourceCommandInput,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;
  public createDataSource(
    args: CreateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;
  public createDataSource(
    args: CreateDataSourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateDataSourceCommandOutput) => void),
    cb?: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): Promise<CreateDataSourceCommandOutput> | void {
    const command = new CreateDataSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an new set of frequently asked question (FAQ) questions and answers.</p>
   */
  public createFaq(
    args: CreateFaqCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFaqCommandOutput>;
  public createFaq(
    args: CreateFaqCommandInput,
    cb: (err: any, data?: CreateFaqCommandOutput) => void
  ): void;
  public createFaq(
    args: CreateFaqCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFaqCommandOutput) => void
  ): void;
  public createFaq(
    args: CreateFaqCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateFaqCommandOutput) => void),
    cb?: (err: any, data?: CreateFaqCommandOutput) => void
  ): Promise<CreateFaqCommandOutput> | void {
    const command = new CreateFaqCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new Amazon Kendra index. Index creation is an asynchronous operation. To
   *       determine if index creation has completed, check the <code>Status</code> field returned from a
   *       call to . The <code>Status</code> field is set to
   *         <code>ACTIVE</code> when the index is ready to use.</p>
   *          <p>Once the index is active you can index your documents using the  operation or using one of the supported data sources.
   *     </p>
   */
  public createIndex(
    args: CreateIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIndexCommandOutput>;
  public createIndex(
    args: CreateIndexCommandInput,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;
  public createIndex(
    args: CreateIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;
  public createIndex(
    args: CreateIndexCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateIndexCommandOutput) => void),
    cb?: (err: any, data?: CreateIndexCommandOutput) => void
  ): Promise<CreateIndexCommandOutput> | void {
    const command = new CreateIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes an FAQ from an index.</p>
   */
  public deleteFaq(
    args: DeleteFaqCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFaqCommandOutput>;
  public deleteFaq(
    args: DeleteFaqCommandInput,
    cb: (err: any, data?: DeleteFaqCommandOutput) => void
  ): void;
  public deleteFaq(
    args: DeleteFaqCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFaqCommandOutput) => void
  ): void;
  public deleteFaq(
    args: DeleteFaqCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteFaqCommandOutput) => void),
    cb?: (err: any, data?: DeleteFaqCommandOutput) => void
  ): Promise<DeleteFaqCommandOutput> | void {
    const command = new DeleteFaqCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing Amazon Kendra index. An exception is not thrown if the index is already
   *       being deleted. While the index is being deleted, the <code>Status</code> field returned by a
   *       call to the <a>DescribeIndex</a> operation is set to <code>DELETING</code>.</p>
   */
  public deleteIndex(
    args: DeleteIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIndexCommandOutput>;
  public deleteIndex(
    args: DeleteIndexCommandInput,
    cb: (err: any, data?: DeleteIndexCommandOutput) => void
  ): void;
  public deleteIndex(
    args: DeleteIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIndexCommandOutput) => void
  ): void;
  public deleteIndex(
    args: DeleteIndexCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteIndexCommandOutput) => void),
    cb?: (err: any, data?: DeleteIndexCommandOutput) => void
  ): Promise<DeleteIndexCommandOutput> | void {
    const command = new DeleteIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a Amazon Kendra data source.</p>
   */
  public describeDataSource(
    args: DescribeDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSourceCommandOutput>;
  public describeDataSource(
    args: DescribeDataSourceCommandInput,
    cb: (err: any, data?: DescribeDataSourceCommandOutput) => void
  ): void;
  public describeDataSource(
    args: DescribeDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataSourceCommandOutput) => void
  ): void;
  public describeDataSource(
    args: DescribeDataSourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeDataSourceCommandOutput) => void),
    cb?: (err: any, data?: DescribeDataSourceCommandOutput) => void
  ): Promise<DescribeDataSourceCommandOutput> | void {
    const command = new DescribeDataSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about an FAQ list.</p>
   */
  public describeFaq(
    args: DescribeFaqCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFaqCommandOutput>;
  public describeFaq(
    args: DescribeFaqCommandInput,
    cb: (err: any, data?: DescribeFaqCommandOutput) => void
  ): void;
  public describeFaq(
    args: DescribeFaqCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFaqCommandOutput) => void
  ): void;
  public describeFaq(
    args: DescribeFaqCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeFaqCommandOutput) => void),
    cb?: (err: any, data?: DescribeFaqCommandOutput) => void
  ): Promise<DescribeFaqCommandOutput> | void {
    const command = new DescribeFaqCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes an existing Amazon Kendra index</p>
   */
  public describeIndex(
    args: DescribeIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIndexCommandOutput>;
  public describeIndex(
    args: DescribeIndexCommandInput,
    cb: (err: any, data?: DescribeIndexCommandOutput) => void
  ): void;
  public describeIndex(
    args: DescribeIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIndexCommandOutput) => void
  ): void;
  public describeIndex(
    args: DescribeIndexCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeIndexCommandOutput) => void),
    cb?: (err: any, data?: DescribeIndexCommandOutput) => void
  ): Promise<DescribeIndexCommandOutput> | void {
    const command = new DescribeIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the data sources that you have created.</p>
   */
  public listDataSources(
    args: ListDataSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSourcesCommandOutput>;
  public listDataSources(
    args: ListDataSourcesCommandInput,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;
  public listDataSources(
    args: ListDataSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;
  public listDataSources(
    args: ListDataSourcesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListDataSourcesCommandOutput) => void),
    cb?: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): Promise<ListDataSourcesCommandOutput> | void {
    const command = new ListDataSourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets statistics about synchronizing Amazon Kendra with a data source.</p>
   */
  public listDataSourceSyncJobs(
    args: ListDataSourceSyncJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSourceSyncJobsCommandOutput>;
  public listDataSourceSyncJobs(
    args: ListDataSourceSyncJobsCommandInput,
    cb: (err: any, data?: ListDataSourceSyncJobsCommandOutput) => void
  ): void;
  public listDataSourceSyncJobs(
    args: ListDataSourceSyncJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSourceSyncJobsCommandOutput) => void
  ): void;
  public listDataSourceSyncJobs(
    args: ListDataSourceSyncJobsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListDataSourceSyncJobsCommandOutput) => void),
    cb?: (err: any, data?: ListDataSourceSyncJobsCommandOutput) => void
  ): Promise<ListDataSourceSyncJobsCommandOutput> | void {
    const command = new ListDataSourceSyncJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of FAQ lists associated with an index.</p>
   */
  public listFaqs(
    args: ListFaqsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFaqsCommandOutput>;
  public listFaqs(
    args: ListFaqsCommandInput,
    cb: (err: any, data?: ListFaqsCommandOutput) => void
  ): void;
  public listFaqs(
    args: ListFaqsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFaqsCommandOutput) => void
  ): void;
  public listFaqs(
    args: ListFaqsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListFaqsCommandOutput) => void),
    cb?: (err: any, data?: ListFaqsCommandOutput) => void
  ): Promise<ListFaqsCommandOutput> | void {
    const command = new ListFaqsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the Amazon Kendra indexes that you have created.</p>
   */
  public listIndices(
    args: ListIndicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIndicesCommandOutput>;
  public listIndices(
    args: ListIndicesCommandInput,
    cb: (err: any, data?: ListIndicesCommandOutput) => void
  ): void;
  public listIndices(
    args: ListIndicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIndicesCommandOutput) => void
  ): void;
  public listIndices(
    args: ListIndicesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListIndicesCommandOutput) => void),
    cb?: (err: any, data?: ListIndicesCommandOutput) => void
  ): Promise<ListIndicesCommandOutput> | void {
    const command = new ListIndicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

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
  public query(
    args: QueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryCommandOutput>;
  public query(
    args: QueryCommandInput,
    cb: (err: any, data?: QueryCommandOutput) => void
  ): void;
  public query(
    args: QueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryCommandOutput) => void
  ): void;
  public query(
    args: QueryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: QueryCommandOutput) => void),
    cb?: (err: any, data?: QueryCommandOutput) => void
  ): Promise<QueryCommandOutput> | void {
    const command = new QueryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a synchronization job for a data source. If a synchronization job is already in
   *       progress, Amazon Kendra returns a <code>ResourceInUseException</code> exception.</p>
   */
  public startDataSourceSyncJob(
    args: StartDataSourceSyncJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDataSourceSyncJobCommandOutput>;
  public startDataSourceSyncJob(
    args: StartDataSourceSyncJobCommandInput,
    cb: (err: any, data?: StartDataSourceSyncJobCommandOutput) => void
  ): void;
  public startDataSourceSyncJob(
    args: StartDataSourceSyncJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDataSourceSyncJobCommandOutput) => void
  ): void;
  public startDataSourceSyncJob(
    args: StartDataSourceSyncJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartDataSourceSyncJobCommandOutput) => void),
    cb?: (err: any, data?: StartDataSourceSyncJobCommandOutput) => void
  ): Promise<StartDataSourceSyncJobCommandOutput> | void {
    const command = new StartDataSourceSyncJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops a running synchronization job. You can't stop a scheduled synchronization
   *       job.</p>
   */
  public stopDataSourceSyncJob(
    args: StopDataSourceSyncJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopDataSourceSyncJobCommandOutput>;
  public stopDataSourceSyncJob(
    args: StopDataSourceSyncJobCommandInput,
    cb: (err: any, data?: StopDataSourceSyncJobCommandOutput) => void
  ): void;
  public stopDataSourceSyncJob(
    args: StopDataSourceSyncJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopDataSourceSyncJobCommandOutput) => void
  ): void;
  public stopDataSourceSyncJob(
    args: StopDataSourceSyncJobCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopDataSourceSyncJobCommandOutput) => void),
    cb?: (err: any, data?: StopDataSourceSyncJobCommandOutput) => void
  ): Promise<StopDataSourceSyncJobCommandOutput> | void {
    const command = new StopDataSourceSyncJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables you to provide feedback to Amazon Kendra to improve the performance
   *         of the service. </p>
   */
  public submitFeedback(
    args: SubmitFeedbackCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SubmitFeedbackCommandOutput>;
  public submitFeedback(
    args: SubmitFeedbackCommandInput,
    cb: (err: any, data?: SubmitFeedbackCommandOutput) => void
  ): void;
  public submitFeedback(
    args: SubmitFeedbackCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SubmitFeedbackCommandOutput) => void
  ): void;
  public submitFeedback(
    args: SubmitFeedbackCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: SubmitFeedbackCommandOutput) => void),
    cb?: (err: any, data?: SubmitFeedbackCommandOutput) => void
  ): Promise<SubmitFeedbackCommandOutput> | void {
    const command = new SubmitFeedbackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing Amazon Kendra data source.</p>
   */
  public updateDataSource(
    args: UpdateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSourceCommandOutput>;
  public updateDataSource(
    args: UpdateDataSourceCommandInput,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  public updateDataSource(
    args: UpdateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  public updateDataSource(
    args: UpdateDataSourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateDataSourceCommandOutput) => void),
    cb?: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): Promise<UpdateDataSourceCommandOutput> | void {
    const command = new UpdateDataSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing Amazon Kendra index.</p>
   */
  public updateIndex(
    args: UpdateIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIndexCommandOutput>;
  public updateIndex(
    args: UpdateIndexCommandInput,
    cb: (err: any, data?: UpdateIndexCommandOutput) => void
  ): void;
  public updateIndex(
    args: UpdateIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIndexCommandOutput) => void
  ): void;
  public updateIndex(
    args: UpdateIndexCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateIndexCommandOutput) => void),
    cb?: (err: any, data?: UpdateIndexCommandOutput) => void
  ): Promise<UpdateIndexCommandOutput> | void {
    const command = new UpdateIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
