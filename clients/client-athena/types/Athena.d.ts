import { AthenaClient } from "./AthenaClient";
import { BatchGetNamedQueryCommandInput, BatchGetNamedQueryCommandOutput } from "./commands/BatchGetNamedQueryCommand";
import { BatchGetQueryExecutionCommandInput, BatchGetQueryExecutionCommandOutput } from "./commands/BatchGetQueryExecutionCommand";
import { CreateNamedQueryCommandInput, CreateNamedQueryCommandOutput } from "./commands/CreateNamedQueryCommand";
import { CreateWorkGroupCommandInput, CreateWorkGroupCommandOutput } from "./commands/CreateWorkGroupCommand";
import { DeleteNamedQueryCommandInput, DeleteNamedQueryCommandOutput } from "./commands/DeleteNamedQueryCommand";
import { DeleteWorkGroupCommandInput, DeleteWorkGroupCommandOutput } from "./commands/DeleteWorkGroupCommand";
import { GetNamedQueryCommandInput, GetNamedQueryCommandOutput } from "./commands/GetNamedQueryCommand";
import { GetQueryExecutionCommandInput, GetQueryExecutionCommandOutput } from "./commands/GetQueryExecutionCommand";
import { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "./commands/GetQueryResultsCommand";
import { GetWorkGroupCommandInput, GetWorkGroupCommandOutput } from "./commands/GetWorkGroupCommand";
import { ListNamedQueriesCommandInput, ListNamedQueriesCommandOutput } from "./commands/ListNamedQueriesCommand";
import { ListQueryExecutionsCommandInput, ListQueryExecutionsCommandOutput } from "./commands/ListQueryExecutionsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListWorkGroupsCommandInput, ListWorkGroupsCommandOutput } from "./commands/ListWorkGroupsCommand";
import { StartQueryExecutionCommandInput, StartQueryExecutionCommandOutput } from "./commands/StartQueryExecutionCommand";
import { StopQueryExecutionCommandInput, StopQueryExecutionCommandOutput } from "./commands/StopQueryExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateWorkGroupCommandInput, UpdateWorkGroupCommandOutput } from "./commands/UpdateWorkGroupCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Amazon Athena is an interactive query service that lets you use standard SQL to analyze data directly in Amazon S3. You can point Athena at your data in Amazon S3 and run ad-hoc queries and get results in seconds. Athena is serverless, so there is no infrastructure to set up or manage. You pay only for the queries you run. Athena scales automatically—executing queries in parallel—so results are fast, even with large datasets and complex queries. For more information, see <a href="http://docs.aws.amazon.com/athena/latest/ug/what-is.html">What is Amazon Athena</a> in the <i>Amazon Athena User Guide</i>.</p>
 *          <p>If you connect to Athena using the JDBC driver, use version 1.1.0 of the driver or later with the Amazon Athena API. Earlier version drivers do not support the API. For more information and to download the driver, see <a href="https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html">Accessing Amazon Athena with JDBC</a>.</p>
 *          <p>For code samples using the AWS SDK for Java, see <a href="https://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
 */
export declare class Athena extends AthenaClient {
    /**
     * <p>Returns the details of a single named query or a list of up to 50 queries,
     *          which you provide as an array of query ID strings. Requires you to have access to the workgroup in which the queries were saved. Use <a>ListNamedQueriesInput</a>
     *          to get the list of named query IDs in the specified workgroup. If information could not be retrieved for a submitted query ID,
     *          information about the query ID submitted is listed under <a>UnprocessedNamedQueryId</a>.
     *          Named queries differ from executed queries. Use <a>BatchGetQueryExecutionInput</a>
     *          to get details about each unique query execution, and <a>ListQueryExecutionsInput</a>
     *          to get a list of query execution IDs.</p>
     */
    batchGetNamedQuery(args: BatchGetNamedQueryCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetNamedQueryCommandOutput>;
    batchGetNamedQuery(args: BatchGetNamedQueryCommandInput, cb: (err: any, data?: BatchGetNamedQueryCommandOutput) => void): void;
    batchGetNamedQuery(args: BatchGetNamedQueryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetNamedQueryCommandOutput) => void): void;
    /**
     * <p>Returns the details of a single query execution or a list of up to 50 query executions,
     *         which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran.
     *         To get a list of query execution IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>.
     *         Query executions differ from named (saved) queries. Use <a>BatchGetNamedQueryInput</a>
     *         to get details about named queries.</p>
     */
    batchGetQueryExecution(args: BatchGetQueryExecutionCommandInput, options?: __HttpHandlerOptions): Promise<BatchGetQueryExecutionCommandOutput>;
    batchGetQueryExecution(args: BatchGetQueryExecutionCommandInput, cb: (err: any, data?: BatchGetQueryExecutionCommandOutput) => void): void;
    batchGetQueryExecution(args: BatchGetQueryExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchGetQueryExecutionCommandOutput) => void): void;
    /**
     * <p>Creates a named query in the specified workgroup. Requires that you have access to the workgroup.</p>
     *          <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
     */
    createNamedQuery(args: CreateNamedQueryCommandInput, options?: __HttpHandlerOptions): Promise<CreateNamedQueryCommandOutput>;
    createNamedQuery(args: CreateNamedQueryCommandInput, cb: (err: any, data?: CreateNamedQueryCommandOutput) => void): void;
    createNamedQuery(args: CreateNamedQueryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateNamedQueryCommandOutput) => void): void;
    /**
     * <p>Creates a workgroup with the specified name.</p>
     */
    createWorkGroup(args: CreateWorkGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateWorkGroupCommandOutput>;
    createWorkGroup(args: CreateWorkGroupCommandInput, cb: (err: any, data?: CreateWorkGroupCommandOutput) => void): void;
    createWorkGroup(args: CreateWorkGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateWorkGroupCommandOutput) => void): void;
    /**
     * <p>Deletes the named query if you have access to the workgroup in which the query was saved.</p>
     *          <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
     */
    deleteNamedQuery(args: DeleteNamedQueryCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNamedQueryCommandOutput>;
    deleteNamedQuery(args: DeleteNamedQueryCommandInput, cb: (err: any, data?: DeleteNamedQueryCommandOutput) => void): void;
    deleteNamedQuery(args: DeleteNamedQueryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteNamedQueryCommandOutput) => void): void;
    /**
     * <p>Deletes the workgroup with the specified name. The primary workgroup cannot be deleted.</p>
     */
    deleteWorkGroup(args: DeleteWorkGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWorkGroupCommandOutput>;
    deleteWorkGroup(args: DeleteWorkGroupCommandInput, cb: (err: any, data?: DeleteWorkGroupCommandOutput) => void): void;
    deleteWorkGroup(args: DeleteWorkGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteWorkGroupCommandOutput) => void): void;
    /**
     * <p>Returns information about a single query. Requires that you have access to the workgroup in which the query was saved.</p>
     */
    getNamedQuery(args: GetNamedQueryCommandInput, options?: __HttpHandlerOptions): Promise<GetNamedQueryCommandOutput>;
    getNamedQuery(args: GetNamedQueryCommandInput, cb: (err: any, data?: GetNamedQueryCommandOutput) => void): void;
    getNamedQuery(args: GetNamedQueryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetNamedQueryCommandOutput) => void): void;
    /**
     * <p>Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID.</p>
     */
    getQueryExecution(args: GetQueryExecutionCommandInput, options?: __HttpHandlerOptions): Promise<GetQueryExecutionCommandOutput>;
    getQueryExecution(args: GetQueryExecutionCommandInput, cb: (err: any, data?: GetQueryExecutionCommandOutput) => void): void;
    getQueryExecution(args: GetQueryExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetQueryExecutionCommandOutput) => void): void;
    /**
     * <p>Streams the results of a single query execution specified by <code>QueryExecutionId</code> from the Athena query results location in Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Query Results</a> in the <i>Amazon Athena User Guide</i>. This request does not execute the query but returns results. Use <a>StartQueryExecution</a> to run a query.</p>
     *          <p>To stream query results successfully, the IAM principal with permission to call <code>GetQueryResults</code> also must have permissions to the Amazon S3 <code>GetObject</code> action for the Athena query results location.</p>
     *          <important>
     *             <p>IAM principals with permission to the Amazon S3 <code>GetObject</code> action for the query results location are able to retrieve query results from Amazon S3 even if permission to the <code>GetQueryResults</code> action is denied. To restrict user or role access, ensure that Amazon S3 permissions to the Athena query location are denied.</p>
     *          </important>
     */
    getQueryResults(args: GetQueryResultsCommandInput, options?: __HttpHandlerOptions): Promise<GetQueryResultsCommandOutput>;
    getQueryResults(args: GetQueryResultsCommandInput, cb: (err: any, data?: GetQueryResultsCommandOutput) => void): void;
    getQueryResults(args: GetQueryResultsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetQueryResultsCommandOutput) => void): void;
    /**
     * <p>Returns information about the workgroup with the specified name.</p>
     */
    getWorkGroup(args: GetWorkGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkGroupCommandOutput>;
    getWorkGroup(args: GetWorkGroupCommandInput, cb: (err: any, data?: GetWorkGroupCommandOutput) => void): void;
    getWorkGroup(args: GetWorkGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetWorkGroupCommandOutput) => void): void;
    /**
     * <p>Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the workgroup.</p>
     *          <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
     */
    listNamedQueries(args: ListNamedQueriesCommandInput, options?: __HttpHandlerOptions): Promise<ListNamedQueriesCommandOutput>;
    listNamedQueries(args: ListNamedQueriesCommandInput, cb: (err: any, data?: ListNamedQueriesCommandOutput) => void): void;
    listNamedQueries(args: ListNamedQueriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListNamedQueriesCommandOutput) => void): void;
    /**
     * <p>Provides a list of available query execution IDs for the queries in the specified workgroup. Requires you to have access to the workgroup in which the queries ran.</p>
     *          <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
     */
    listQueryExecutions(args: ListQueryExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<ListQueryExecutionsCommandOutput>;
    listQueryExecutions(args: ListQueryExecutionsCommandInput, cb: (err: any, data?: ListQueryExecutionsCommandOutput) => void): void;
    listQueryExecutions(args: ListQueryExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListQueryExecutionsCommandOutput) => void): void;
    /**
     * <p>Lists the tags associated with this workgroup.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists available workgroups for the account.</p>
     */
    listWorkGroups(args: ListWorkGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkGroupsCommandOutput>;
    listWorkGroups(args: ListWorkGroupsCommandInput, cb: (err: any, data?: ListWorkGroupsCommandOutput) => void): void;
    listWorkGroups(args: ListWorkGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListWorkGroupsCommandOutput) => void): void;
    /**
     * <p>Runs the SQL query statements contained in the <code>Query</code>. Requires you to have access to the workgroup in which the query ran.</p>
     *          <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
     */
    startQueryExecution(args: StartQueryExecutionCommandInput, options?: __HttpHandlerOptions): Promise<StartQueryExecutionCommandOutput>;
    startQueryExecution(args: StartQueryExecutionCommandInput, cb: (err: any, data?: StartQueryExecutionCommandOutput) => void): void;
    startQueryExecution(args: StartQueryExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartQueryExecutionCommandOutput) => void): void;
    /**
     * <p>Stops a query execution. Requires you to have access to the workgroup in which the query ran.</p>
     *          <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
     */
    stopQueryExecution(args: StopQueryExecutionCommandInput, options?: __HttpHandlerOptions): Promise<StopQueryExecutionCommandOutput>;
    stopQueryExecution(args: StopQueryExecutionCommandInput, cb: (err: any, data?: StopQueryExecutionCommandOutput) => void): void;
    stopQueryExecution(args: StopQueryExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopQueryExecutionCommandOutput) => void): void;
    /**
     * <p>Adds one or more tags to the resource, such as a workgroup. A tag is a label that you assign to an AWS Athena resource (a workgroup). Each tag consists of a key and an optional value, both of which you define.
     *          Tags enable you to categorize resources (workgroups) in Athena, for example, by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter workgroups in your account.
     *          For best practices, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>. The key length is from 1 (minimum) to 128 (maximum) Unicode characters in UTF-8. The tag value length is from 0 (minimum) to 256 (maximum) Unicode characters
     *          in UTF-8. You can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @.
     *          Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one, separate them by commas.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes one or more tags from the workgroup resource. Takes as an input a list of TagKey Strings separated by commas, and removes their tags at the same time.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the workgroup with the specified name. The workgroup's name cannot be changed.</p>
     */
    updateWorkGroup(args: UpdateWorkGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWorkGroupCommandOutput>;
    updateWorkGroup(args: UpdateWorkGroupCommandInput, cb: (err: any, data?: UpdateWorkGroupCommandOutput) => void): void;
    updateWorkGroup(args: UpdateWorkGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateWorkGroupCommandOutput) => void): void;
}
