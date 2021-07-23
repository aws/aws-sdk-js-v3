import { KendraClient } from "./KendraClient";
import {
  BatchDeleteDocumentCommand,
  BatchDeleteDocumentCommandInput,
  BatchDeleteDocumentCommandOutput,
} from "./commands/BatchDeleteDocumentCommand";
import {
  BatchGetDocumentStatusCommand,
  BatchGetDocumentStatusCommandInput,
  BatchGetDocumentStatusCommandOutput,
} from "./commands/BatchGetDocumentStatusCommand";
import {
  BatchPutDocumentCommand,
  BatchPutDocumentCommandInput,
  BatchPutDocumentCommandOutput,
} from "./commands/BatchPutDocumentCommand";
import {
  ClearQuerySuggestionsCommand,
  ClearQuerySuggestionsCommandInput,
  ClearQuerySuggestionsCommandOutput,
} from "./commands/ClearQuerySuggestionsCommand";
import {
  CreateDataSourceCommand,
  CreateDataSourceCommandInput,
  CreateDataSourceCommandOutput,
} from "./commands/CreateDataSourceCommand";
import { CreateFaqCommand, CreateFaqCommandInput, CreateFaqCommandOutput } from "./commands/CreateFaqCommand";
import { CreateIndexCommand, CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import {
  CreateQuerySuggestionsBlockListCommand,
  CreateQuerySuggestionsBlockListCommandInput,
  CreateQuerySuggestionsBlockListCommandOutput,
} from "./commands/CreateQuerySuggestionsBlockListCommand";
import {
  CreateThesaurusCommand,
  CreateThesaurusCommandInput,
  CreateThesaurusCommandOutput,
} from "./commands/CreateThesaurusCommand";
import {
  DeleteDataSourceCommand,
  DeleteDataSourceCommandInput,
  DeleteDataSourceCommandOutput,
} from "./commands/DeleteDataSourceCommand";
import { DeleteFaqCommand, DeleteFaqCommandInput, DeleteFaqCommandOutput } from "./commands/DeleteFaqCommand";
import { DeleteIndexCommand, DeleteIndexCommandInput, DeleteIndexCommandOutput } from "./commands/DeleteIndexCommand";
import {
  DeletePrincipalMappingCommand,
  DeletePrincipalMappingCommandInput,
  DeletePrincipalMappingCommandOutput,
} from "./commands/DeletePrincipalMappingCommand";
import {
  DeleteQuerySuggestionsBlockListCommand,
  DeleteQuerySuggestionsBlockListCommandInput,
  DeleteQuerySuggestionsBlockListCommandOutput,
} from "./commands/DeleteQuerySuggestionsBlockListCommand";
import {
  DeleteThesaurusCommand,
  DeleteThesaurusCommandInput,
  DeleteThesaurusCommandOutput,
} from "./commands/DeleteThesaurusCommand";
import {
  DescribeDataSourceCommand,
  DescribeDataSourceCommandInput,
  DescribeDataSourceCommandOutput,
} from "./commands/DescribeDataSourceCommand";
import { DescribeFaqCommand, DescribeFaqCommandInput, DescribeFaqCommandOutput } from "./commands/DescribeFaqCommand";
import {
  DescribeIndexCommand,
  DescribeIndexCommandInput,
  DescribeIndexCommandOutput,
} from "./commands/DescribeIndexCommand";
import {
  DescribePrincipalMappingCommand,
  DescribePrincipalMappingCommandInput,
  DescribePrincipalMappingCommandOutput,
} from "./commands/DescribePrincipalMappingCommand";
import {
  DescribeQuerySuggestionsBlockListCommand,
  DescribeQuerySuggestionsBlockListCommandInput,
  DescribeQuerySuggestionsBlockListCommandOutput,
} from "./commands/DescribeQuerySuggestionsBlockListCommand";
import {
  DescribeQuerySuggestionsConfigCommand,
  DescribeQuerySuggestionsConfigCommandInput,
  DescribeQuerySuggestionsConfigCommandOutput,
} from "./commands/DescribeQuerySuggestionsConfigCommand";
import {
  DescribeThesaurusCommand,
  DescribeThesaurusCommandInput,
  DescribeThesaurusCommandOutput,
} from "./commands/DescribeThesaurusCommand";
import {
  GetQuerySuggestionsCommand,
  GetQuerySuggestionsCommandInput,
  GetQuerySuggestionsCommandOutput,
} from "./commands/GetQuerySuggestionsCommand";
import {
  ListDataSourceSyncJobsCommand,
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput,
} from "./commands/ListDataSourceSyncJobsCommand";
import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
} from "./commands/ListDataSourcesCommand";
import { ListFaqsCommand, ListFaqsCommandInput, ListFaqsCommandOutput } from "./commands/ListFaqsCommand";
import {
  ListGroupsOlderThanOrderingIdCommand,
  ListGroupsOlderThanOrderingIdCommandInput,
  ListGroupsOlderThanOrderingIdCommandOutput,
} from "./commands/ListGroupsOlderThanOrderingIdCommand";
import { ListIndicesCommand, ListIndicesCommandInput, ListIndicesCommandOutput } from "./commands/ListIndicesCommand";
import {
  ListQuerySuggestionsBlockListsCommand,
  ListQuerySuggestionsBlockListsCommandInput,
  ListQuerySuggestionsBlockListsCommandOutput,
} from "./commands/ListQuerySuggestionsBlockListsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListThesauriCommand,
  ListThesauriCommandInput,
  ListThesauriCommandOutput,
} from "./commands/ListThesauriCommand";
import {
  PutPrincipalMappingCommand,
  PutPrincipalMappingCommandInput,
  PutPrincipalMappingCommandOutput,
} from "./commands/PutPrincipalMappingCommand";
import { QueryCommand, QueryCommandInput, QueryCommandOutput } from "./commands/QueryCommand";
import {
  StartDataSourceSyncJobCommand,
  StartDataSourceSyncJobCommandInput,
  StartDataSourceSyncJobCommandOutput,
} from "./commands/StartDataSourceSyncJobCommand";
import {
  StopDataSourceSyncJobCommand,
  StopDataSourceSyncJobCommandInput,
  StopDataSourceSyncJobCommandOutput,
} from "./commands/StopDataSourceSyncJobCommand";
import {
  SubmitFeedbackCommand,
  SubmitFeedbackCommandInput,
  SubmitFeedbackCommandOutput,
} from "./commands/SubmitFeedbackCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDataSourceCommand,
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput,
} from "./commands/UpdateDataSourceCommand";
import { UpdateIndexCommand, UpdateIndexCommandInput, UpdateIndexCommandOutput } from "./commands/UpdateIndexCommand";
import {
  UpdateQuerySuggestionsBlockListCommand,
  UpdateQuerySuggestionsBlockListCommandInput,
  UpdateQuerySuggestionsBlockListCommandOutput,
} from "./commands/UpdateQuerySuggestionsBlockListCommand";
import {
  UpdateQuerySuggestionsConfigCommand,
  UpdateQuerySuggestionsConfigCommandInput,
  UpdateQuerySuggestionsConfigCommandOutput,
} from "./commands/UpdateQuerySuggestionsConfigCommand";
import {
  UpdateThesaurusCommand,
  UpdateThesaurusCommandInput,
  UpdateThesaurusCommandOutput,
} from "./commands/UpdateThesaurusCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon Kendra is a service for indexing large document sets.</p>
 */
export class Kendra extends KendraClient {
  /**
   * <p>Removes one or more documents from an index. The documents must have
   *       been added with the <code>BatchPutDocument</code> operation.</p>
   *          <p>The documents are deleted asynchronously. You can see the progress of
   *       the deletion by using Amazon Web Services CloudWatch. Any error messages related to the
   *       processing of the batch are sent to you CloudWatch log.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteDocumentCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteDocumentCommandOutput) => void
  ): Promise<BatchDeleteDocumentCommandOutput> | void {
    const command = new BatchDeleteDocumentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the indexing status for one or more documents submitted
   *             with the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchPutDocument.html">
   *                 BatchPutDocument</a> operation.</p>
   *         <p>When you use the <code>BatchPutDocument</code> operation,
   *             documents are indexed asynchronously. You can use the
   *                 <code>BatchGetDocumentStatus</code> operation to get the current
   *             status of a list of documents so that you can determine if they have
   *             been successfully indexed.</p>
   *         <p>You can also use the <code>BatchGetDocumentStatus</code> operation
   *             to check the status of the <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_BatchDeleteDocument.html">
   *                 BatchDeleteDocument</a> operation. When a document is
   *             deleted from the index, Amazon Kendra returns <code>NOT_FOUND</code> as the
   *             status.</p>
   */
  public batchGetDocumentStatus(
    args: BatchGetDocumentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetDocumentStatusCommandOutput>;
  public batchGetDocumentStatus(
    args: BatchGetDocumentStatusCommandInput,
    cb: (err: any, data?: BatchGetDocumentStatusCommandOutput) => void
  ): void;
  public batchGetDocumentStatus(
    args: BatchGetDocumentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetDocumentStatusCommandOutput) => void
  ): void;
  public batchGetDocumentStatus(
    args: BatchGetDocumentStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetDocumentStatusCommandOutput) => void),
    cb?: (err: any, data?: BatchGetDocumentStatusCommandOutput) => void
  ): Promise<BatchGetDocumentStatusCommandOutput> | void {
    const command = new BatchGetDocumentStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds one or more documents to an index.</p>
   *          <p>The <code>BatchPutDocument</code> operation enables you to ingest
   *       inline documents or a set of documents stored in an Amazon S3 bucket. Use
   *       this operation to ingest your text and unstructured text into an index,
   *       add custom attributes to the documents, and to attach an access control
   *       list to the documents added to the index.</p>
   *          <p>The documents are indexed asynchronously. You can see the progress of
   *       the batch using Amazon Web Services CloudWatch. Any error messages related to processing
   *       the batch are sent to your Amazon Web Services CloudWatch log.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchPutDocumentCommandOutput) => void),
    cb?: (err: any, data?: BatchPutDocumentCommandOutput) => void
  ): Promise<BatchPutDocumentCommandOutput> | void {
    const command = new BatchPutDocumentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Clears existing query suggestions from an index.</p>
   *         <p>This deletes existing suggestions only, not the queries
   *             in the query log. After you clear suggestions, Amazon Kendra learns
   *             new suggestions based on new queries added to the query log
   *             from the time you cleared suggestions. If you do not see any
   *             new suggestions, then please allow Amazon Kendra to collect
   *             enough queries to learn new suggestions.</p>
   */
  public clearQuerySuggestions(
    args: ClearQuerySuggestionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ClearQuerySuggestionsCommandOutput>;
  public clearQuerySuggestions(
    args: ClearQuerySuggestionsCommandInput,
    cb: (err: any, data?: ClearQuerySuggestionsCommandOutput) => void
  ): void;
  public clearQuerySuggestions(
    args: ClearQuerySuggestionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ClearQuerySuggestionsCommandOutput) => void
  ): void;
  public clearQuerySuggestions(
    args: ClearQuerySuggestionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ClearQuerySuggestionsCommandOutput) => void),
    cb?: (err: any, data?: ClearQuerySuggestionsCommandOutput) => void
  ): Promise<ClearQuerySuggestionsCommandOutput> | void {
    const command = new ClearQuerySuggestionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a data source that you use to with an Amazon Kendra index. </p>
   *          <p>You specify a name, data source connector type and description for
   *       your data source. You also specify configuration information such as
   *       document metadata (author, source URI, and so on) and user context
   *       information.</p>
   *          <p>
   *             <code>CreateDataSource</code> is a synchronous operation. The
   *       operation returns 200 if the data source was successfully created.
   *       Otherwise, an exception is raised.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDataSourceCommandOutput) => void),
    cb?: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): Promise<CreateDataSourceCommandOutput> | void {
    const command = new CreateDataSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an new set of frequently asked question (FAQ) questions and answers.</p>
   */
  public createFaq(args: CreateFaqCommandInput, options?: __HttpHandlerOptions): Promise<CreateFaqCommandOutput>;
  public createFaq(args: CreateFaqCommandInput, cb: (err: any, data?: CreateFaqCommandOutput) => void): void;
  public createFaq(
    args: CreateFaqCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFaqCommandOutput) => void
  ): void;
  public createFaq(
    args: CreateFaqCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFaqCommandOutput) => void),
    cb?: (err: any, data?: CreateFaqCommandOutput) => void
  ): Promise<CreateFaqCommandOutput> | void {
    const command = new CreateFaqCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new Amazon Kendra index. Index creation is an asynchronous
   *       operation. To determine if index creation has completed, check the
   *         <code>Status</code> field returned from a call to
   *         <code>DescribeIndex</code>. The <code>Status</code> field is set to
   *         <code>ACTIVE</code> when the index is ready to use.</p>
   *          <p>Once the index is active you can index your documents using the
   *         <code>BatchPutDocument</code> operation or using one of the supported
   *       data sources. </p>
   */
  public createIndex(args: CreateIndexCommandInput, options?: __HttpHandlerOptions): Promise<CreateIndexCommandOutput>;
  public createIndex(args: CreateIndexCommandInput, cb: (err: any, data?: CreateIndexCommandOutput) => void): void;
  public createIndex(
    args: CreateIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;
  public createIndex(
    args: CreateIndexCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateIndexCommandOutput) => void),
    cb?: (err: any, data?: CreateIndexCommandOutput) => void
  ): Promise<CreateIndexCommandOutput> | void {
    const command = new CreateIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a block list to exlcude certain queries from suggestions.</p>
   *         <p>Any query that contains words or phrases specified in the block
   *             list is blocked or filtered out from being shown as a suggestion.</p>
   *         <p>You need to provide the file location of your block list text file
   *             in your S3 bucket. In your text file, enter each block word or phrase
   *             on a separate line.</p>
   *         <p>For information on the current quota limits for block lists, see
   *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas
   *                 for Amazon Kendra</a>.</p>
   */
  public createQuerySuggestionsBlockList(
    args: CreateQuerySuggestionsBlockListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateQuerySuggestionsBlockListCommandOutput>;
  public createQuerySuggestionsBlockList(
    args: CreateQuerySuggestionsBlockListCommandInput,
    cb: (err: any, data?: CreateQuerySuggestionsBlockListCommandOutput) => void
  ): void;
  public createQuerySuggestionsBlockList(
    args: CreateQuerySuggestionsBlockListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateQuerySuggestionsBlockListCommandOutput) => void
  ): void;
  public createQuerySuggestionsBlockList(
    args: CreateQuerySuggestionsBlockListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateQuerySuggestionsBlockListCommandOutput) => void),
    cb?: (err: any, data?: CreateQuerySuggestionsBlockListCommandOutput) => void
  ): Promise<CreateQuerySuggestionsBlockListCommandOutput> | void {
    const command = new CreateQuerySuggestionsBlockListCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a thesaurus for an index. The thesaurus
   *       contains a list of synonyms in Solr format.</p>
   */
  public createThesaurus(
    args: CreateThesaurusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateThesaurusCommandOutput>;
  public createThesaurus(
    args: CreateThesaurusCommandInput,
    cb: (err: any, data?: CreateThesaurusCommandOutput) => void
  ): void;
  public createThesaurus(
    args: CreateThesaurusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateThesaurusCommandOutput) => void
  ): void;
  public createThesaurus(
    args: CreateThesaurusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateThesaurusCommandOutput) => void),
    cb?: (err: any, data?: CreateThesaurusCommandOutput) => void
  ): Promise<CreateThesaurusCommandOutput> | void {
    const command = new CreateThesaurusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an Amazon Kendra data source. An exception is not thrown if the
   *       data source is already being deleted. While the data source is being
   *       deleted, the <code>Status</code> field returned by a call to the
   *         <code>DescribeDataSource</code> operation is set to
   *         <code>DELETING</code>. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/delete-data-source.html">Deleting Data Sources</a>.</p>
   */
  public deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataSourceCommandOutput>;
  public deleteDataSource(
    args: DeleteDataSourceCommandInput,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  public deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  public deleteDataSource(
    args: DeleteDataSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDataSourceCommandOutput) => void),
    cb?: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): Promise<DeleteDataSourceCommandOutput> | void {
    const command = new DeleteDataSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes an FAQ from an index.</p>
   */
  public deleteFaq(args: DeleteFaqCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFaqCommandOutput>;
  public deleteFaq(args: DeleteFaqCommandInput, cb: (err: any, data?: DeleteFaqCommandOutput) => void): void;
  public deleteFaq(
    args: DeleteFaqCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFaqCommandOutput) => void
  ): void;
  public deleteFaq(
    args: DeleteFaqCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFaqCommandOutput) => void),
    cb?: (err: any, data?: DeleteFaqCommandOutput) => void
  ): Promise<DeleteFaqCommandOutput> | void {
    const command = new DeleteFaqCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing Amazon Kendra index. An exception is not thrown if
   *       the index is already being deleted. While the index is being deleted, the
   *         <code>Status</code> field returned by a call to the
   *         <code>DescribeIndex</code> operation is set to
   *       <code>DELETING</code>.</p>
   */
  public deleteIndex(args: DeleteIndexCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIndexCommandOutput>;
  public deleteIndex(args: DeleteIndexCommandInput, cb: (err: any, data?: DeleteIndexCommandOutput) => void): void;
  public deleteIndex(
    args: DeleteIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIndexCommandOutput) => void
  ): void;
  public deleteIndex(
    args: DeleteIndexCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteIndexCommandOutput) => void),
    cb?: (err: any, data?: DeleteIndexCommandOutput) => void
  ): Promise<DeleteIndexCommandOutput> | void {
    const command = new DeleteIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a group so that all users and sub groups that belong to the group can
   *             no longer access documents only available to that group.</p>
   *         <p>For example, after deleting the group "Summer Interns", all interns who
   *             belonged to that group no longer see intern-only documents in their search
   *             results.</p>
   *         <p>If you want to delete or replace users or sub groups of a group, you need to
   *             use the <code>PutPrincipalMapping</code> operation. For example, if a user in
   *             the group "Engineering" leaves the engineering team and another user takes
   *             their place, you provide an updated list of users or sub groups that belong
   *             to the "Engineering" group when calling <code>PutPrincipalMapping</code>. You
   *             can update your internal list of users or sub groups and input this list
   *             when calling <code>PutPrincipalMapping</code>.</p>
   */
  public deletePrincipalMapping(
    args: DeletePrincipalMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePrincipalMappingCommandOutput>;
  public deletePrincipalMapping(
    args: DeletePrincipalMappingCommandInput,
    cb: (err: any, data?: DeletePrincipalMappingCommandOutput) => void
  ): void;
  public deletePrincipalMapping(
    args: DeletePrincipalMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePrincipalMappingCommandOutput) => void
  ): void;
  public deletePrincipalMapping(
    args: DeletePrincipalMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePrincipalMappingCommandOutput) => void),
    cb?: (err: any, data?: DeletePrincipalMappingCommandOutput) => void
  ): Promise<DeletePrincipalMappingCommandOutput> | void {
    const command = new DeletePrincipalMappingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a block list used for query suggestions for an index.</p>
   *         <p>A deleted block list might not take effect right away. Amazon Kendra
   *             needs to refresh the entire suggestions list to add back the
   *             queries that were previously blocked.</p>
   */
  public deleteQuerySuggestionsBlockList(
    args: DeleteQuerySuggestionsBlockListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteQuerySuggestionsBlockListCommandOutput>;
  public deleteQuerySuggestionsBlockList(
    args: DeleteQuerySuggestionsBlockListCommandInput,
    cb: (err: any, data?: DeleteQuerySuggestionsBlockListCommandOutput) => void
  ): void;
  public deleteQuerySuggestionsBlockList(
    args: DeleteQuerySuggestionsBlockListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteQuerySuggestionsBlockListCommandOutput) => void
  ): void;
  public deleteQuerySuggestionsBlockList(
    args: DeleteQuerySuggestionsBlockListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteQuerySuggestionsBlockListCommandOutput) => void),
    cb?: (err: any, data?: DeleteQuerySuggestionsBlockListCommandOutput) => void
  ): Promise<DeleteQuerySuggestionsBlockListCommandOutput> | void {
    const command = new DeleteQuerySuggestionsBlockListCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an existing Amazon Kendra thesaurus.
   *       </p>
   */
  public deleteThesaurus(
    args: DeleteThesaurusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteThesaurusCommandOutput>;
  public deleteThesaurus(
    args: DeleteThesaurusCommandInput,
    cb: (err: any, data?: DeleteThesaurusCommandOutput) => void
  ): void;
  public deleteThesaurus(
    args: DeleteThesaurusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteThesaurusCommandOutput) => void
  ): void;
  public deleteThesaurus(
    args: DeleteThesaurusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteThesaurusCommandOutput) => void),
    cb?: (err: any, data?: DeleteThesaurusCommandOutput) => void
  ): Promise<DeleteThesaurusCommandOutput> | void {
    const command = new DeleteThesaurusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDataSourceCommandOutput) => void),
    cb?: (err: any, data?: DescribeDataSourceCommandOutput) => void
  ): Promise<DescribeDataSourceCommandOutput> | void {
    const command = new DescribeDataSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about an FAQ list.</p>
   */
  public describeFaq(args: DescribeFaqCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFaqCommandOutput>;
  public describeFaq(args: DescribeFaqCommandInput, cb: (err: any, data?: DescribeFaqCommandOutput) => void): void;
  public describeFaq(
    args: DescribeFaqCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFaqCommandOutput) => void
  ): void;
  public describeFaq(
    args: DescribeFaqCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFaqCommandOutput) => void),
    cb?: (err: any, data?: DescribeFaqCommandOutput) => void
  ): Promise<DescribeFaqCommandOutput> | void {
    const command = new DescribeFaqCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeIndexCommandOutput) => void),
    cb?: (err: any, data?: DescribeIndexCommandOutput) => void
  ): Promise<DescribeIndexCommandOutput> | void {
    const command = new DescribeIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the processing of <code>PUT</code> and <code>DELETE</code> actions
   *             for mapping users to their groups. This includes information on the status of
   *             actions currently processing or yet to be processed, when actions were last updated,
   *             when actions were received by Amazon Kendra, the latest action that should process
   *             and apply after other actions, and useful error messages if an action could
   *             not be processed.</p>
   */
  public describePrincipalMapping(
    args: DescribePrincipalMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePrincipalMappingCommandOutput>;
  public describePrincipalMapping(
    args: DescribePrincipalMappingCommandInput,
    cb: (err: any, data?: DescribePrincipalMappingCommandOutput) => void
  ): void;
  public describePrincipalMapping(
    args: DescribePrincipalMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePrincipalMappingCommandOutput) => void
  ): void;
  public describePrincipalMapping(
    args: DescribePrincipalMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePrincipalMappingCommandOutput) => void),
    cb?: (err: any, data?: DescribePrincipalMappingCommandOutput) => void
  ): Promise<DescribePrincipalMappingCommandOutput> | void {
    const command = new DescribePrincipalMappingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes a block list used for query suggestions for an index.</p>
   *         <p>This is used to check the current settings that are applied to a
   *             block list.</p>
   */
  public describeQuerySuggestionsBlockList(
    args: DescribeQuerySuggestionsBlockListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeQuerySuggestionsBlockListCommandOutput>;
  public describeQuerySuggestionsBlockList(
    args: DescribeQuerySuggestionsBlockListCommandInput,
    cb: (err: any, data?: DescribeQuerySuggestionsBlockListCommandOutput) => void
  ): void;
  public describeQuerySuggestionsBlockList(
    args: DescribeQuerySuggestionsBlockListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeQuerySuggestionsBlockListCommandOutput) => void
  ): void;
  public describeQuerySuggestionsBlockList(
    args: DescribeQuerySuggestionsBlockListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeQuerySuggestionsBlockListCommandOutput) => void),
    cb?: (err: any, data?: DescribeQuerySuggestionsBlockListCommandOutput) => void
  ): Promise<DescribeQuerySuggestionsBlockListCommandOutput> | void {
    const command = new DescribeQuerySuggestionsBlockListCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the settings of query suggestions for an index.</p>
   *         <p>This is used to check the current settings applied
   *             to query suggestions.</p>
   */
  public describeQuerySuggestionsConfig(
    args: DescribeQuerySuggestionsConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeQuerySuggestionsConfigCommandOutput>;
  public describeQuerySuggestionsConfig(
    args: DescribeQuerySuggestionsConfigCommandInput,
    cb: (err: any, data?: DescribeQuerySuggestionsConfigCommandOutput) => void
  ): void;
  public describeQuerySuggestionsConfig(
    args: DescribeQuerySuggestionsConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeQuerySuggestionsConfigCommandOutput) => void
  ): void;
  public describeQuerySuggestionsConfig(
    args: DescribeQuerySuggestionsConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeQuerySuggestionsConfigCommandOutput) => void),
    cb?: (err: any, data?: DescribeQuerySuggestionsConfigCommandOutput) => void
  ): Promise<DescribeQuerySuggestionsConfigCommandOutput> | void {
    const command = new DescribeQuerySuggestionsConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes an existing Amazon Kendra thesaurus.</p>
   */
  public describeThesaurus(
    args: DescribeThesaurusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeThesaurusCommandOutput>;
  public describeThesaurus(
    args: DescribeThesaurusCommandInput,
    cb: (err: any, data?: DescribeThesaurusCommandOutput) => void
  ): void;
  public describeThesaurus(
    args: DescribeThesaurusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeThesaurusCommandOutput) => void
  ): void;
  public describeThesaurus(
    args: DescribeThesaurusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeThesaurusCommandOutput) => void),
    cb?: (err: any, data?: DescribeThesaurusCommandOutput) => void
  ): Promise<DescribeThesaurusCommandOutput> | void {
    const command = new DescribeThesaurusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Fetches the queries that are suggested to your users.</p>
   */
  public getQuerySuggestions(
    args: GetQuerySuggestionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQuerySuggestionsCommandOutput>;
  public getQuerySuggestions(
    args: GetQuerySuggestionsCommandInput,
    cb: (err: any, data?: GetQuerySuggestionsCommandOutput) => void
  ): void;
  public getQuerySuggestions(
    args: GetQuerySuggestionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQuerySuggestionsCommandOutput) => void
  ): void;
  public getQuerySuggestions(
    args: GetQuerySuggestionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetQuerySuggestionsCommandOutput) => void),
    cb?: (err: any, data?: GetQuerySuggestionsCommandOutput) => void
  ): Promise<GetQuerySuggestionsCommandOutput> | void {
    const command = new GetQuerySuggestionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDataSourcesCommandOutput) => void),
    cb?: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): Promise<ListDataSourcesCommandOutput> | void {
    const command = new ListDataSourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets statistics about synchronizing Amazon Kendra with a data
   *       source.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDataSourceSyncJobsCommandOutput) => void),
    cb?: (err: any, data?: ListDataSourceSyncJobsCommandOutput) => void
  ): Promise<ListDataSourceSyncJobsCommandOutput> | void {
    const command = new ListDataSourceSyncJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of FAQ lists associated with an index.</p>
   */
  public listFaqs(args: ListFaqsCommandInput, options?: __HttpHandlerOptions): Promise<ListFaqsCommandOutput>;
  public listFaqs(args: ListFaqsCommandInput, cb: (err: any, data?: ListFaqsCommandOutput) => void): void;
  public listFaqs(
    args: ListFaqsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFaqsCommandOutput) => void
  ): void;
  public listFaqs(
    args: ListFaqsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFaqsCommandOutput) => void),
    cb?: (err: any, data?: ListFaqsCommandOutput) => void
  ): Promise<ListFaqsCommandOutput> | void {
    const command = new ListFaqsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides a list of groups that are mapped to users before a
   *             given ordering or timestamp identifier.</p>
   */
  public listGroupsOlderThanOrderingId(
    args: ListGroupsOlderThanOrderingIdCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupsOlderThanOrderingIdCommandOutput>;
  public listGroupsOlderThanOrderingId(
    args: ListGroupsOlderThanOrderingIdCommandInput,
    cb: (err: any, data?: ListGroupsOlderThanOrderingIdCommandOutput) => void
  ): void;
  public listGroupsOlderThanOrderingId(
    args: ListGroupsOlderThanOrderingIdCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsOlderThanOrderingIdCommandOutput) => void
  ): void;
  public listGroupsOlderThanOrderingId(
    args: ListGroupsOlderThanOrderingIdCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGroupsOlderThanOrderingIdCommandOutput) => void),
    cb?: (err: any, data?: ListGroupsOlderThanOrderingIdCommandOutput) => void
  ): Promise<ListGroupsOlderThanOrderingIdCommandOutput> | void {
    const command = new ListGroupsOlderThanOrderingIdCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the Amazon Kendra indexes that you have created.</p>
   */
  public listIndices(args: ListIndicesCommandInput, options?: __HttpHandlerOptions): Promise<ListIndicesCommandOutput>;
  public listIndices(args: ListIndicesCommandInput, cb: (err: any, data?: ListIndicesCommandOutput) => void): void;
  public listIndices(
    args: ListIndicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIndicesCommandOutput) => void
  ): void;
  public listIndices(
    args: ListIndicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIndicesCommandOutput) => void),
    cb?: (err: any, data?: ListIndicesCommandOutput) => void
  ): Promise<ListIndicesCommandOutput> | void {
    const command = new ListIndicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the block lists used for query suggestions for an index.</p>
   *         <p>For information on the current quota limits for block lists, see
   *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/quotas.html">Quotas
   *                 for Amazon Kendra</a>.</p>
   */
  public listQuerySuggestionsBlockLists(
    args: ListQuerySuggestionsBlockListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQuerySuggestionsBlockListsCommandOutput>;
  public listQuerySuggestionsBlockLists(
    args: ListQuerySuggestionsBlockListsCommandInput,
    cb: (err: any, data?: ListQuerySuggestionsBlockListsCommandOutput) => void
  ): void;
  public listQuerySuggestionsBlockLists(
    args: ListQuerySuggestionsBlockListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQuerySuggestionsBlockListsCommandOutput) => void
  ): void;
  public listQuerySuggestionsBlockLists(
    args: ListQuerySuggestionsBlockListsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListQuerySuggestionsBlockListsCommandOutput) => void),
    cb?: (err: any, data?: ListQuerySuggestionsBlockListsCommandOutput) => void
  ): Promise<ListQuerySuggestionsBlockListsCommandOutput> | void {
    const command = new ListQuerySuggestionsBlockListsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a list of tags associated with a specified resource. Indexes,
   *       FAQs, and data sources can have tags associated with them.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the Amazon Kendra thesauri associated with an index.</p>
   */
  public listThesauri(
    args: ListThesauriCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThesauriCommandOutput>;
  public listThesauri(args: ListThesauriCommandInput, cb: (err: any, data?: ListThesauriCommandOutput) => void): void;
  public listThesauri(
    args: ListThesauriCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThesauriCommandOutput) => void
  ): void;
  public listThesauri(
    args: ListThesauriCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListThesauriCommandOutput) => void),
    cb?: (err: any, data?: ListThesauriCommandOutput) => void
  ): Promise<ListThesauriCommandOutput> | void {
    const command = new ListThesauriCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Maps users to their groups. You can also map sub groups to groups.
   *             For example, the group "Company Intellectual Property Teams" includes
   *             sub groups "Research" and "Engineering". These sub groups include their
   *             own list of users or people who work in these teams. Only users who work
   *             in research and engineering, and therefore belong in the intellectual
   *             property group, can see top-secret company documents in their search
   *             results. </p>
   *         <p>You map users to their groups when you want to filter search results
   *             for different users based on their group’s access to documents. For more
   *             information on filtering search results for different users, see
   *             <a href="https://docs.aws.amazon.com/kendra/latest/dg/user-context-filter.html">Filtering
   *                 on user context</a>.</p>
   *         <p>If more than five <code>PUT</code> actions for a group are currently
   *             processing, a validation exception is thrown.</p>
   */
  public putPrincipalMapping(
    args: PutPrincipalMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPrincipalMappingCommandOutput>;
  public putPrincipalMapping(
    args: PutPrincipalMappingCommandInput,
    cb: (err: any, data?: PutPrincipalMappingCommandOutput) => void
  ): void;
  public putPrincipalMapping(
    args: PutPrincipalMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPrincipalMappingCommandOutput) => void
  ): void;
  public putPrincipalMapping(
    args: PutPrincipalMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutPrincipalMappingCommandOutput) => void),
    cb?: (err: any, data?: PutPrincipalMappingCommandOutput) => void
  ): Promise<PutPrincipalMappingCommandOutput> | void {
    const command = new PutPrincipalMappingCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Searches an active index. Use this API to search your documents
   *          using query. The <code>Query</code> operation enables to do faceted
   *          search and to filter results based on document attributes.</p>
   *          <p>It also enables you to provide user context that Amazon Kendra uses
   *          to enforce document access control in the search results. </p>
   *          <p>Amazon Kendra searches your index for text content and question and
   *          answer (FAQ) content. By default the response contains three types of
   *          results.</p>
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
   *          <p>You can specify that the query return only one type of result using
   *          the <code>QueryResultTypeConfig</code> parameter.</p>
   *          <p>Each query returns the 100 most relevant results. </p>
   */
  public query(args: QueryCommandInput, options?: __HttpHandlerOptions): Promise<QueryCommandOutput>;
  public query(args: QueryCommandInput, cb: (err: any, data?: QueryCommandOutput) => void): void;
  public query(
    args: QueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryCommandOutput) => void
  ): void;
  public query(
    args: QueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: QueryCommandOutput) => void),
    cb?: (err: any, data?: QueryCommandOutput) => void
  ): Promise<QueryCommandOutput> | void {
    const command = new QueryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a synchronization job for a data source. If a synchronization
   *       job is already in progress, Amazon Kendra returns a
   *         <code>ResourceInUseException</code> exception.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDataSourceSyncJobCommandOutput) => void),
    cb?: (err: any, data?: StartDataSourceSyncJobCommandOutput) => void
  ): Promise<StartDataSourceSyncJobCommandOutput> | void {
    const command = new StartDataSourceSyncJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops a running synchronization job. You can't stop a scheduled
   *       synchronization job.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopDataSourceSyncJobCommandOutput) => void),
    cb?: (err: any, data?: StopDataSourceSyncJobCommandOutput) => void
  ): Promise<StopDataSourceSyncJobCommandOutput> | void {
    const command = new StopDataSourceSyncJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables you to provide feedback to Amazon Kendra to improve the
   *             performance of your index. </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SubmitFeedbackCommandOutput) => void),
    cb?: (err: any, data?: SubmitFeedbackCommandOutput) => void
  ): Promise<SubmitFeedbackCommandOutput> | void {
    const command = new SubmitFeedbackCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds the specified tag to the specified index, FAQ, or data source
   *       resource. If the tag already exists, the existing value is replaced with
   *       the new value.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a tag from an index, FAQ, or a data source.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDataSourceCommandOutput) => void),
    cb?: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): Promise<UpdateDataSourceCommandOutput> | void {
    const command = new UpdateDataSourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing Amazon Kendra index.</p>
   */
  public updateIndex(args: UpdateIndexCommandInput, options?: __HttpHandlerOptions): Promise<UpdateIndexCommandOutput>;
  public updateIndex(args: UpdateIndexCommandInput, cb: (err: any, data?: UpdateIndexCommandOutput) => void): void;
  public updateIndex(
    args: UpdateIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIndexCommandOutput) => void
  ): void;
  public updateIndex(
    args: UpdateIndexCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateIndexCommandOutput) => void),
    cb?: (err: any, data?: UpdateIndexCommandOutput) => void
  ): Promise<UpdateIndexCommandOutput> | void {
    const command = new UpdateIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a block list used for query suggestions for an index.</p>
   *         <p>Updates to a block list might not take effect right away. Amazon Kendra
   *             needs to refresh the entire suggestions list to apply any updates to the
   *             block list. Other changes not related to the block list apply immediately.</p>
   *         <p>If a block list is updating, then you need to wait for the first update to
   *             finish before submitting another update.</p>
   *         <p>Amazon Kendra supports partial updates, so you only need to provide the fields
   *             you want to update.</p>
   */
  public updateQuerySuggestionsBlockList(
    args: UpdateQuerySuggestionsBlockListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQuerySuggestionsBlockListCommandOutput>;
  public updateQuerySuggestionsBlockList(
    args: UpdateQuerySuggestionsBlockListCommandInput,
    cb: (err: any, data?: UpdateQuerySuggestionsBlockListCommandOutput) => void
  ): void;
  public updateQuerySuggestionsBlockList(
    args: UpdateQuerySuggestionsBlockListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQuerySuggestionsBlockListCommandOutput) => void
  ): void;
  public updateQuerySuggestionsBlockList(
    args: UpdateQuerySuggestionsBlockListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateQuerySuggestionsBlockListCommandOutput) => void),
    cb?: (err: any, data?: UpdateQuerySuggestionsBlockListCommandOutput) => void
  ): Promise<UpdateQuerySuggestionsBlockListCommandOutput> | void {
    const command = new UpdateQuerySuggestionsBlockListCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the settings of query suggestions for an index.</p>
   *         <p>Amazon Kendra supports partial updates, so you only need to provide
   *             the fields you want to update.</p>
   *         <p>If an update is currently processing (i.e. 'happening'), you
   *             need to wait for the update to finish before making another update.</p>
   *         <p>Updates to query suggestions settings might not take effect right away.
   *             The time for your updated settings to take effect depends on the updates
   *             made and the number of search queries in your index.</p>
   *         <p>You can still enable/disable query suggestions at any time.</p>
   */
  public updateQuerySuggestionsConfig(
    args: UpdateQuerySuggestionsConfigCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateQuerySuggestionsConfigCommandOutput>;
  public updateQuerySuggestionsConfig(
    args: UpdateQuerySuggestionsConfigCommandInput,
    cb: (err: any, data?: UpdateQuerySuggestionsConfigCommandOutput) => void
  ): void;
  public updateQuerySuggestionsConfig(
    args: UpdateQuerySuggestionsConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateQuerySuggestionsConfigCommandOutput) => void
  ): void;
  public updateQuerySuggestionsConfig(
    args: UpdateQuerySuggestionsConfigCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateQuerySuggestionsConfigCommandOutput) => void),
    cb?: (err: any, data?: UpdateQuerySuggestionsConfigCommandOutput) => void
  ): Promise<UpdateQuerySuggestionsConfigCommandOutput> | void {
    const command = new UpdateQuerySuggestionsConfigCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a thesaurus file associated with an index.</p>
   */
  public updateThesaurus(
    args: UpdateThesaurusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateThesaurusCommandOutput>;
  public updateThesaurus(
    args: UpdateThesaurusCommandInput,
    cb: (err: any, data?: UpdateThesaurusCommandOutput) => void
  ): void;
  public updateThesaurus(
    args: UpdateThesaurusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateThesaurusCommandOutput) => void
  ): void;
  public updateThesaurus(
    args: UpdateThesaurusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateThesaurusCommandOutput) => void),
    cb?: (err: any, data?: UpdateThesaurusCommandOutput) => void
  ): Promise<UpdateThesaurusCommandOutput> | void {
    const command = new UpdateThesaurusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
