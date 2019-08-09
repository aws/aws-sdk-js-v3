import { AthenaClient } from "./AthenaClient";
import { BatchGetNamedQueryInput } from "./types/BatchGetNamedQueryInput";
import { BatchGetNamedQueryOutput } from "./types/BatchGetNamedQueryOutput";
import { BatchGetQueryExecutionInput } from "./types/BatchGetQueryExecutionInput";
import { BatchGetQueryExecutionOutput } from "./types/BatchGetQueryExecutionOutput";
import { CreateNamedQueryInput } from "./types/CreateNamedQueryInput";
import { CreateNamedQueryOutput } from "./types/CreateNamedQueryOutput";
import { CreateWorkGroupInput } from "./types/CreateWorkGroupInput";
import { CreateWorkGroupOutput } from "./types/CreateWorkGroupOutput";
import { DeleteNamedQueryInput } from "./types/DeleteNamedQueryInput";
import { DeleteNamedQueryOutput } from "./types/DeleteNamedQueryOutput";
import { DeleteWorkGroupInput } from "./types/DeleteWorkGroupInput";
import { DeleteWorkGroupOutput } from "./types/DeleteWorkGroupOutput";
import { GetNamedQueryInput } from "./types/GetNamedQueryInput";
import { GetNamedQueryOutput } from "./types/GetNamedQueryOutput";
import { GetQueryExecutionInput } from "./types/GetQueryExecutionInput";
import { GetQueryExecutionOutput } from "./types/GetQueryExecutionOutput";
import { GetQueryResultsInput } from "./types/GetQueryResultsInput";
import { GetQueryResultsOutput } from "./types/GetQueryResultsOutput";
import { GetWorkGroupInput } from "./types/GetWorkGroupInput";
import { GetWorkGroupOutput } from "./types/GetWorkGroupOutput";
import { InternalServerException } from "./types/InternalServerException";
import { InvalidRequestException } from "./types/InvalidRequestException";
import { ListNamedQueriesInput } from "./types/ListNamedQueriesInput";
import { ListNamedQueriesOutput } from "./types/ListNamedQueriesOutput";
import { ListQueryExecutionsInput } from "./types/ListQueryExecutionsInput";
import { ListQueryExecutionsOutput } from "./types/ListQueryExecutionsOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListWorkGroupsInput } from "./types/ListWorkGroupsInput";
import { ListWorkGroupsOutput } from "./types/ListWorkGroupsOutput";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { StartQueryExecutionInput } from "./types/StartQueryExecutionInput";
import { StartQueryExecutionOutput } from "./types/StartQueryExecutionOutput";
import { StopQueryExecutionInput } from "./types/StopQueryExecutionInput";
import { StopQueryExecutionOutput } from "./types/StopQueryExecutionOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateWorkGroupInput } from "./types/UpdateWorkGroupInput";
import { UpdateWorkGroupOutput } from "./types/UpdateWorkGroupOutput";
import { BatchGetNamedQueryCommand } from "./commands/BatchGetNamedQueryCommand";
import { BatchGetQueryExecutionCommand } from "./commands/BatchGetQueryExecutionCommand";
import { CreateNamedQueryCommand } from "./commands/CreateNamedQueryCommand";
import { CreateWorkGroupCommand } from "./commands/CreateWorkGroupCommand";
import { DeleteNamedQueryCommand } from "./commands/DeleteNamedQueryCommand";
import { DeleteWorkGroupCommand } from "./commands/DeleteWorkGroupCommand";
import { GetNamedQueryCommand } from "./commands/GetNamedQueryCommand";
import { GetQueryExecutionCommand } from "./commands/GetQueryExecutionCommand";
import { GetQueryResultsCommand } from "./commands/GetQueryResultsCommand";
import { GetWorkGroupCommand } from "./commands/GetWorkGroupCommand";
import { ListNamedQueriesCommand } from "./commands/ListNamedQueriesCommand";
import { ListQueryExecutionsCommand } from "./commands/ListQueryExecutionsCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListWorkGroupsCommand } from "./commands/ListWorkGroupsCommand";
import { StartQueryExecutionCommand } from "./commands/StartQueryExecutionCommand";
import { StopQueryExecutionCommand } from "./commands/StopQueryExecutionCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateWorkGroupCommand } from "./commands/UpdateWorkGroupCommand";

export class Athena extends AthenaClient {
  /**
   * <p>Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Requires you to have access to the workgroup in which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the list of named query IDs in the specified workgroup. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of query execution IDs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetNamedQuery(
    args: BatchGetNamedQueryInput
  ): Promise<BatchGetNamedQueryOutput>;
  public batchGetNamedQuery(
    args: BatchGetNamedQueryInput,
    cb: (err: any, data?: BatchGetNamedQueryOutput) => void
  ): void;
  public batchGetNamedQuery(
    args: BatchGetNamedQueryInput,
    cb?: (err: any, data?: BatchGetNamedQueryOutput) => void
  ): Promise<BatchGetNamedQueryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetNamedQueryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran. To get a list of query execution IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details about named queries.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public batchGetQueryExecution(
    args: BatchGetQueryExecutionInput
  ): Promise<BatchGetQueryExecutionOutput>;
  public batchGetQueryExecution(
    args: BatchGetQueryExecutionInput,
    cb: (err: any, data?: BatchGetQueryExecutionOutput) => void
  ): void;
  public batchGetQueryExecution(
    args: BatchGetQueryExecutionInput,
    cb?: (err: any, data?: BatchGetQueryExecutionOutput) => void
  ): Promise<BatchGetQueryExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new BatchGetQueryExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a named query in the specified workgroup. Requires that you have access to the workgroup.</p> <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createNamedQuery(
    args: CreateNamedQueryInput
  ): Promise<CreateNamedQueryOutput>;
  public createNamedQuery(
    args: CreateNamedQueryInput,
    cb: (err: any, data?: CreateNamedQueryOutput) => void
  ): void;
  public createNamedQuery(
    args: CreateNamedQueryInput,
    cb?: (err: any, data?: CreateNamedQueryOutput) => void
  ): Promise<CreateNamedQueryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateNamedQueryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a workgroup with the specified name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createWorkGroup(
    args: CreateWorkGroupInput
  ): Promise<CreateWorkGroupOutput>;
  public createWorkGroup(
    args: CreateWorkGroupInput,
    cb: (err: any, data?: CreateWorkGroupOutput) => void
  ): void;
  public createWorkGroup(
    args: CreateWorkGroupInput,
    cb?: (err: any, data?: CreateWorkGroupOutput) => void
  ): Promise<CreateWorkGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateWorkGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the named query if you have access to the workgroup in which the query was saved.</p> <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteNamedQuery(
    args: DeleteNamedQueryInput
  ): Promise<DeleteNamedQueryOutput>;
  public deleteNamedQuery(
    args: DeleteNamedQueryInput,
    cb: (err: any, data?: DeleteNamedQueryOutput) => void
  ): void;
  public deleteNamedQuery(
    args: DeleteNamedQueryInput,
    cb?: (err: any, data?: DeleteNamedQueryOutput) => void
  ): Promise<DeleteNamedQueryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteNamedQueryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the workgroup with the specified name. The primary workgroup cannot be deleted.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteWorkGroup(
    args: DeleteWorkGroupInput
  ): Promise<DeleteWorkGroupOutput>;
  public deleteWorkGroup(
    args: DeleteWorkGroupInput,
    cb: (err: any, data?: DeleteWorkGroupOutput) => void
  ): void;
  public deleteWorkGroup(
    args: DeleteWorkGroupInput,
    cb?: (err: any, data?: DeleteWorkGroupOutput) => void
  ): Promise<DeleteWorkGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteWorkGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a single query. Requires that you have access to the workgroup in which the query was saved.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getNamedQuery(args: GetNamedQueryInput): Promise<GetNamedQueryOutput>;
  public getNamedQuery(
    args: GetNamedQueryInput,
    cb: (err: any, data?: GetNamedQueryOutput) => void
  ): void;
  public getNamedQuery(
    args: GetNamedQueryInput,
    cb?: (err: any, data?: GetNamedQueryOutput) => void
  ): Promise<GetNamedQueryOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetNamedQueryCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getQueryExecution(
    args: GetQueryExecutionInput
  ): Promise<GetQueryExecutionOutput>;
  public getQueryExecution(
    args: GetQueryExecutionInput,
    cb: (err: any, data?: GetQueryExecutionOutput) => void
  ): void;
  public getQueryExecution(
    args: GetQueryExecutionInput,
    cb?: (err: any, data?: GetQueryExecutionOutput) => void
  ): Promise<GetQueryExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetQueryExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the results of a single query execution specified by <code>QueryExecutionId</code> if you have access to the workgroup in which the query ran. This request does not execute the query but returns results. Use <a>StartQueryExecution</a> to run a query.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getQueryResults(
    args: GetQueryResultsInput
  ): Promise<GetQueryResultsOutput>;
  public getQueryResults(
    args: GetQueryResultsInput,
    cb: (err: any, data?: GetQueryResultsOutput) => void
  ): void;
  public getQueryResults(
    args: GetQueryResultsInput,
    cb?: (err: any, data?: GetQueryResultsOutput) => void
  ): Promise<GetQueryResultsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetQueryResultsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the workgroup with the specified name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getWorkGroup(args: GetWorkGroupInput): Promise<GetWorkGroupOutput>;
  public getWorkGroup(
    args: GetWorkGroupInput,
    cb: (err: any, data?: GetWorkGroupOutput) => void
  ): void;
  public getWorkGroup(
    args: GetWorkGroupInput,
    cb?: (err: any, data?: GetWorkGroupOutput) => void
  ): Promise<GetWorkGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetWorkGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the workgroup.</p> <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listNamedQueries(
    args: ListNamedQueriesInput
  ): Promise<ListNamedQueriesOutput>;
  public listNamedQueries(
    args: ListNamedQueriesInput,
    cb: (err: any, data?: ListNamedQueriesOutput) => void
  ): void;
  public listNamedQueries(
    args: ListNamedQueriesInput,
    cb?: (err: any, data?: ListNamedQueriesOutput) => void
  ): Promise<ListNamedQueriesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListNamedQueriesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides a list of available query execution IDs for the queries in the specified workgroup. Requires you to have access to the workgroup in which the queries ran.</p> <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listQueryExecutions(
    args: ListQueryExecutionsInput
  ): Promise<ListQueryExecutionsOutput>;
  public listQueryExecutions(
    args: ListQueryExecutionsInput,
    cb: (err: any, data?: ListQueryExecutionsOutput) => void
  ): void;
  public listQueryExecutions(
    args: ListQueryExecutionsInput,
    cb?: (err: any, data?: ListQueryExecutionsOutput) => void
  ): Promise<ListQueryExecutionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListQueryExecutionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the tags associated with this workgroup.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
   *   - {ResourceNotFoundException} <p>A resource, such as a workgroup, was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists available workgroups for the account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listWorkGroups(
    args: ListWorkGroupsInput
  ): Promise<ListWorkGroupsOutput>;
  public listWorkGroups(
    args: ListWorkGroupsInput,
    cb: (err: any, data?: ListWorkGroupsOutput) => void
  ): void;
  public listWorkGroups(
    args: ListWorkGroupsInput,
    cb?: (err: any, data?: ListWorkGroupsOutput) => void
  ): Promise<ListWorkGroupsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListWorkGroupsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Runs the SQL query statements contained in the <code>Query</code>. Requires you to have access to the workgroup in which the query ran.</p> <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
   *   - {TooManyRequestsException} <p>Indicates that the request was throttled.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startQueryExecution(
    args: StartQueryExecutionInput
  ): Promise<StartQueryExecutionOutput>;
  public startQueryExecution(
    args: StartQueryExecutionInput,
    cb: (err: any, data?: StartQueryExecutionOutput) => void
  ): void;
  public startQueryExecution(
    args: StartQueryExecutionInput,
    cb?: (err: any, data?: StartQueryExecutionOutput) => void
  ): Promise<StartQueryExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartQueryExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Stops a query execution. Requires you to have access to the workgroup in which the query ran.</p> <p>For code samples using the AWS SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public stopQueryExecution(
    args: StopQueryExecutionInput
  ): Promise<StopQueryExecutionOutput>;
  public stopQueryExecution(
    args: StopQueryExecutionInput,
    cb: (err: any, data?: StopQueryExecutionOutput) => void
  ): void;
  public stopQueryExecution(
    args: StopQueryExecutionInput,
    cb?: (err: any, data?: StopQueryExecutionOutput) => void
  ): Promise<StopQueryExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StopQueryExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds one or more tags to the resource, such as a workgroup. A tag is a label that you assign to an AWS Athena resource (a workgroup). Each tag consists of a key and an optional value, both of which you define. Tags enable you to categorize resources (workgroups) in Athena, for example, by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter workgroups in your account. For best practices, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS Tagging Strategies</a>. The key length is from 1 (minimum) to 128 (maximum) Unicode characters in UTF-8. The tag value length is from 0 (minimum) to 256 (maximum) Unicode characters in UTF-8. You can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one, separate them by commas.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
   *   - {ResourceNotFoundException} <p>A resource, such as a workgroup, was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes one or more tags from the workgroup resource. Takes as an input a list of TagKey Strings separated by commas, and removes their tags at the same time.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
   *   - {ResourceNotFoundException} <p>A resource, such as a workgroup, was not found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates the workgroup with the specified name. The workgroup's name cannot be changed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InternalServerException} <p>Indicates a platform issue, which may be due to a transient condition or outage.</p>
   *   - {InvalidRequestException} <p>Indicates that something is wrong with the input to the request. For example, a required parameter may be missing or out of range.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateWorkGroup(
    args: UpdateWorkGroupInput
  ): Promise<UpdateWorkGroupOutput>;
  public updateWorkGroup(
    args: UpdateWorkGroupInput,
    cb: (err: any, data?: UpdateWorkGroupOutput) => void
  ): void;
  public updateWorkGroup(
    args: UpdateWorkGroupInput,
    cb?: (err: any, data?: UpdateWorkGroupOutput) => void
  ): Promise<UpdateWorkGroupOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateWorkGroupCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
