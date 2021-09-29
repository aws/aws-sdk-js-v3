import { AthenaClient } from "./AthenaClient";
import {
  BatchGetNamedQueryCommand,
  BatchGetNamedQueryCommandInput,
  BatchGetNamedQueryCommandOutput,
} from "./commands/BatchGetNamedQueryCommand";
import {
  BatchGetQueryExecutionCommand,
  BatchGetQueryExecutionCommandInput,
  BatchGetQueryExecutionCommandOutput,
} from "./commands/BatchGetQueryExecutionCommand";
import {
  CreateDataCatalogCommand,
  CreateDataCatalogCommandInput,
  CreateDataCatalogCommandOutput,
} from "./commands/CreateDataCatalogCommand";
import {
  CreateNamedQueryCommand,
  CreateNamedQueryCommandInput,
  CreateNamedQueryCommandOutput,
} from "./commands/CreateNamedQueryCommand";
import {
  CreatePreparedStatementCommand,
  CreatePreparedStatementCommandInput,
  CreatePreparedStatementCommandOutput,
} from "./commands/CreatePreparedStatementCommand";
import {
  CreateWorkGroupCommand,
  CreateWorkGroupCommandInput,
  CreateWorkGroupCommandOutput,
} from "./commands/CreateWorkGroupCommand";
import {
  DeleteDataCatalogCommand,
  DeleteDataCatalogCommandInput,
  DeleteDataCatalogCommandOutput,
} from "./commands/DeleteDataCatalogCommand";
import {
  DeleteNamedQueryCommand,
  DeleteNamedQueryCommandInput,
  DeleteNamedQueryCommandOutput,
} from "./commands/DeleteNamedQueryCommand";
import {
  DeletePreparedStatementCommand,
  DeletePreparedStatementCommandInput,
  DeletePreparedStatementCommandOutput,
} from "./commands/DeletePreparedStatementCommand";
import {
  DeleteWorkGroupCommand,
  DeleteWorkGroupCommandInput,
  DeleteWorkGroupCommandOutput,
} from "./commands/DeleteWorkGroupCommand";
import {
  GetDataCatalogCommand,
  GetDataCatalogCommandInput,
  GetDataCatalogCommandOutput,
} from "./commands/GetDataCatalogCommand";
import { GetDatabaseCommand, GetDatabaseCommandInput, GetDatabaseCommandOutput } from "./commands/GetDatabaseCommand";
import {
  GetNamedQueryCommand,
  GetNamedQueryCommandInput,
  GetNamedQueryCommandOutput,
} from "./commands/GetNamedQueryCommand";
import {
  GetPreparedStatementCommand,
  GetPreparedStatementCommandInput,
  GetPreparedStatementCommandOutput,
} from "./commands/GetPreparedStatementCommand";
import {
  GetQueryExecutionCommand,
  GetQueryExecutionCommandInput,
  GetQueryExecutionCommandOutput,
} from "./commands/GetQueryExecutionCommand";
import {
  GetQueryResultsCommand,
  GetQueryResultsCommandInput,
  GetQueryResultsCommandOutput,
} from "./commands/GetQueryResultsCommand";
import {
  GetTableMetadataCommand,
  GetTableMetadataCommandInput,
  GetTableMetadataCommandOutput,
} from "./commands/GetTableMetadataCommand";
import {
  GetWorkGroupCommand,
  GetWorkGroupCommandInput,
  GetWorkGroupCommandOutput,
} from "./commands/GetWorkGroupCommand";
import {
  ListDataCatalogsCommand,
  ListDataCatalogsCommandInput,
  ListDataCatalogsCommandOutput,
} from "./commands/ListDataCatalogsCommand";
import {
  ListDatabasesCommand,
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput,
} from "./commands/ListDatabasesCommand";
import {
  ListEngineVersionsCommand,
  ListEngineVersionsCommandInput,
  ListEngineVersionsCommandOutput,
} from "./commands/ListEngineVersionsCommand";
import {
  ListNamedQueriesCommand,
  ListNamedQueriesCommandInput,
  ListNamedQueriesCommandOutput,
} from "./commands/ListNamedQueriesCommand";
import {
  ListPreparedStatementsCommand,
  ListPreparedStatementsCommandInput,
  ListPreparedStatementsCommandOutput,
} from "./commands/ListPreparedStatementsCommand";
import {
  ListQueryExecutionsCommand,
  ListQueryExecutionsCommandInput,
  ListQueryExecutionsCommandOutput,
} from "./commands/ListQueryExecutionsCommand";
import {
  ListTableMetadataCommand,
  ListTableMetadataCommandInput,
  ListTableMetadataCommandOutput,
} from "./commands/ListTableMetadataCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWorkGroupsCommand,
  ListWorkGroupsCommandInput,
  ListWorkGroupsCommandOutput,
} from "./commands/ListWorkGroupsCommand";
import {
  StartQueryExecutionCommand,
  StartQueryExecutionCommandInput,
  StartQueryExecutionCommandOutput,
} from "./commands/StartQueryExecutionCommand";
import {
  StopQueryExecutionCommand,
  StopQueryExecutionCommandInput,
  StopQueryExecutionCommandOutput,
} from "./commands/StopQueryExecutionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDataCatalogCommand,
  UpdateDataCatalogCommandInput,
  UpdateDataCatalogCommandOutput,
} from "./commands/UpdateDataCatalogCommand";
import {
  UpdatePreparedStatementCommand,
  UpdatePreparedStatementCommandInput,
  UpdatePreparedStatementCommandOutput,
} from "./commands/UpdatePreparedStatementCommand";
import {
  UpdateWorkGroupCommand,
  UpdateWorkGroupCommandInput,
  UpdateWorkGroupCommandOutput,
} from "./commands/UpdateWorkGroupCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon Athena is an interactive query service that lets you use standard SQL
 *             to analyze data directly in Amazon S3. You can point Athena at your
 *             data in Amazon S3 and run ad-hoc queries and get results in seconds. Athena is serverless, so there is no infrastructure to set up or manage. You pay
 *             only for the queries you run. Athena scales automatically—executing queries
 *             in parallel—so results are fast, even with large datasets and complex queries. For more
 *             information, see <a href="http://docs.aws.amazon.com/athena/latest/ug/what-is.html">What is Amazon Athena</a> in the <i>Amazon Athena User
 *                 Guide</i>.</p>
 *         <p>If you connect to Athena using the JDBC driver, use version 1.1.0 of the
 *             driver or later with the Amazon Athena API. Earlier version drivers do not
 *             support the API. For more information and to download the driver, see <a href="https://docs.aws.amazon.com/athena/latest/ug/connect-with-jdbc.html">Accessing
 *                     Amazon Athena with JDBC</a>.</p>
 *         <p>For code samples using the Amazon Web Services SDK for Java, see <a href="https://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
 *                 Code Samples</a> in the <i>Amazon Athena User
 *             Guide</i>.</p>
 */
export class Athena extends AthenaClient {
  /**
   * <p>Returns the details of a single named query or a list of up to 50 queries, which you
   *             provide as an array of query ID strings. Requires you to have access to the workgroup in
   *             which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the
   *             list of named query IDs in the specified workgroup. If information could not be
   *             retrieved for a submitted query ID, information about the query ID submitted is listed
   *             under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed
   *             queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each
   *             unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of
   *             query execution IDs.</p>
   */
  public batchGetNamedQuery(
    args: BatchGetNamedQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetNamedQueryCommandOutput>;
  public batchGetNamedQuery(
    args: BatchGetNamedQueryCommandInput,
    cb: (err: any, data?: BatchGetNamedQueryCommandOutput) => void
  ): void;
  public batchGetNamedQuery(
    args: BatchGetNamedQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetNamedQueryCommandOutput) => void
  ): void;
  public batchGetNamedQuery(
    args: BatchGetNamedQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetNamedQueryCommandOutput) => void),
    cb?: (err: any, data?: BatchGetNamedQueryCommandOutput) => void
  ): Promise<BatchGetNamedQueryCommandOutput> | void {
    const command = new BatchGetNamedQueryCommand(args);
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
   * <p>Returns the details of a single query execution or a list of up to 50 query
   *             executions, which you provide as an array of query execution ID strings. Requires you to
   *             have access to the workgroup in which the queries ran. To get a list of query execution
   *             IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ
   *             from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details
   *             about named queries.</p>
   */
  public batchGetQueryExecution(
    args: BatchGetQueryExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetQueryExecutionCommandOutput>;
  public batchGetQueryExecution(
    args: BatchGetQueryExecutionCommandInput,
    cb: (err: any, data?: BatchGetQueryExecutionCommandOutput) => void
  ): void;
  public batchGetQueryExecution(
    args: BatchGetQueryExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetQueryExecutionCommandOutput) => void
  ): void;
  public batchGetQueryExecution(
    args: BatchGetQueryExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchGetQueryExecutionCommandOutput) => void),
    cb?: (err: any, data?: BatchGetQueryExecutionCommandOutput) => void
  ): Promise<BatchGetQueryExecutionCommandOutput> | void {
    const command = new BatchGetQueryExecutionCommand(args);
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
   * <p>Creates (registers) a data catalog with the specified name and properties. Catalogs
   *             created are visible to all users of the same Amazon Web Services account.</p>
   */
  public createDataCatalog(
    args: CreateDataCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataCatalogCommandOutput>;
  public createDataCatalog(
    args: CreateDataCatalogCommandInput,
    cb: (err: any, data?: CreateDataCatalogCommandOutput) => void
  ): void;
  public createDataCatalog(
    args: CreateDataCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataCatalogCommandOutput) => void
  ): void;
  public createDataCatalog(
    args: CreateDataCatalogCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDataCatalogCommandOutput) => void),
    cb?: (err: any, data?: CreateDataCatalogCommandOutput) => void
  ): Promise<CreateDataCatalogCommandOutput> | void {
    const command = new CreateDataCatalogCommand(args);
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
   * <p>Creates a named query in the specified workgroup. Requires that you have access to the
   *             workgroup.</p>
   *         <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
   *                 Code Samples</a> in the <i>Amazon Athena User
   *             Guide</i>.</p>
   */
  public createNamedQuery(
    args: CreateNamedQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateNamedQueryCommandOutput>;
  public createNamedQuery(
    args: CreateNamedQueryCommandInput,
    cb: (err: any, data?: CreateNamedQueryCommandOutput) => void
  ): void;
  public createNamedQuery(
    args: CreateNamedQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateNamedQueryCommandOutput) => void
  ): void;
  public createNamedQuery(
    args: CreateNamedQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateNamedQueryCommandOutput) => void),
    cb?: (err: any, data?: CreateNamedQueryCommandOutput) => void
  ): Promise<CreateNamedQueryCommandOutput> | void {
    const command = new CreateNamedQueryCommand(args);
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
   * <p>Creates a prepared statement for use with SQL queries in Athena.</p>
   */
  public createPreparedStatement(
    args: CreatePreparedStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePreparedStatementCommandOutput>;
  public createPreparedStatement(
    args: CreatePreparedStatementCommandInput,
    cb: (err: any, data?: CreatePreparedStatementCommandOutput) => void
  ): void;
  public createPreparedStatement(
    args: CreatePreparedStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePreparedStatementCommandOutput) => void
  ): void;
  public createPreparedStatement(
    args: CreatePreparedStatementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePreparedStatementCommandOutput) => void),
    cb?: (err: any, data?: CreatePreparedStatementCommandOutput) => void
  ): Promise<CreatePreparedStatementCommandOutput> | void {
    const command = new CreatePreparedStatementCommand(args);
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
   * <p>Creates a workgroup with the specified name.</p>
   */
  public createWorkGroup(
    args: CreateWorkGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkGroupCommandOutput>;
  public createWorkGroup(
    args: CreateWorkGroupCommandInput,
    cb: (err: any, data?: CreateWorkGroupCommandOutput) => void
  ): void;
  public createWorkGroup(
    args: CreateWorkGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkGroupCommandOutput) => void
  ): void;
  public createWorkGroup(
    args: CreateWorkGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkGroupCommandOutput) => void
  ): Promise<CreateWorkGroupCommandOutput> | void {
    const command = new CreateWorkGroupCommand(args);
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
   * <p>Deletes a data catalog.</p>
   */
  public deleteDataCatalog(
    args: DeleteDataCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataCatalogCommandOutput>;
  public deleteDataCatalog(
    args: DeleteDataCatalogCommandInput,
    cb: (err: any, data?: DeleteDataCatalogCommandOutput) => void
  ): void;
  public deleteDataCatalog(
    args: DeleteDataCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataCatalogCommandOutput) => void
  ): void;
  public deleteDataCatalog(
    args: DeleteDataCatalogCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDataCatalogCommandOutput) => void),
    cb?: (err: any, data?: DeleteDataCatalogCommandOutput) => void
  ): Promise<DeleteDataCatalogCommandOutput> | void {
    const command = new DeleteDataCatalogCommand(args);
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
   * <p>Deletes the named query if you have access to the workgroup in which the query was
   *             saved.</p>
   *         <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
   *                 Code Samples</a> in the <i>Amazon Athena User
   *             Guide</i>.</p>
   */
  public deleteNamedQuery(
    args: DeleteNamedQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNamedQueryCommandOutput>;
  public deleteNamedQuery(
    args: DeleteNamedQueryCommandInput,
    cb: (err: any, data?: DeleteNamedQueryCommandOutput) => void
  ): void;
  public deleteNamedQuery(
    args: DeleteNamedQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNamedQueryCommandOutput) => void
  ): void;
  public deleteNamedQuery(
    args: DeleteNamedQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNamedQueryCommandOutput) => void),
    cb?: (err: any, data?: DeleteNamedQueryCommandOutput) => void
  ): Promise<DeleteNamedQueryCommandOutput> | void {
    const command = new DeleteNamedQueryCommand(args);
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
   * <p>Deletes the prepared statement with the specified name from the specified
   *             workgroup.</p>
   */
  public deletePreparedStatement(
    args: DeletePreparedStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePreparedStatementCommandOutput>;
  public deletePreparedStatement(
    args: DeletePreparedStatementCommandInput,
    cb: (err: any, data?: DeletePreparedStatementCommandOutput) => void
  ): void;
  public deletePreparedStatement(
    args: DeletePreparedStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePreparedStatementCommandOutput) => void
  ): void;
  public deletePreparedStatement(
    args: DeletePreparedStatementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePreparedStatementCommandOutput) => void),
    cb?: (err: any, data?: DeletePreparedStatementCommandOutput) => void
  ): Promise<DeletePreparedStatementCommandOutput> | void {
    const command = new DeletePreparedStatementCommand(args);
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
   * <p>Deletes the workgroup with the specified name. The primary workgroup cannot be
   *             deleted.</p>
   */
  public deleteWorkGroup(
    args: DeleteWorkGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkGroupCommandOutput>;
  public deleteWorkGroup(
    args: DeleteWorkGroupCommandInput,
    cb: (err: any, data?: DeleteWorkGroupCommandOutput) => void
  ): void;
  public deleteWorkGroup(
    args: DeleteWorkGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkGroupCommandOutput) => void
  ): void;
  public deleteWorkGroup(
    args: DeleteWorkGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkGroupCommandOutput) => void
  ): Promise<DeleteWorkGroupCommandOutput> | void {
    const command = new DeleteWorkGroupCommand(args);
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
   * <p>Returns a database object for the specified database and data catalog.</p>
   */
  public getDatabase(args: GetDatabaseCommandInput, options?: __HttpHandlerOptions): Promise<GetDatabaseCommandOutput>;
  public getDatabase(args: GetDatabaseCommandInput, cb: (err: any, data?: GetDatabaseCommandOutput) => void): void;
  public getDatabase(
    args: GetDatabaseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDatabaseCommandOutput) => void
  ): void;
  public getDatabase(
    args: GetDatabaseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDatabaseCommandOutput) => void),
    cb?: (err: any, data?: GetDatabaseCommandOutput) => void
  ): Promise<GetDatabaseCommandOutput> | void {
    const command = new GetDatabaseCommand(args);
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
   * <p>Returns the specified data catalog.</p>
   */
  public getDataCatalog(
    args: GetDataCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataCatalogCommandOutput>;
  public getDataCatalog(
    args: GetDataCatalogCommandInput,
    cb: (err: any, data?: GetDataCatalogCommandOutput) => void
  ): void;
  public getDataCatalog(
    args: GetDataCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataCatalogCommandOutput) => void
  ): void;
  public getDataCatalog(
    args: GetDataCatalogCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataCatalogCommandOutput) => void),
    cb?: (err: any, data?: GetDataCatalogCommandOutput) => void
  ): Promise<GetDataCatalogCommandOutput> | void {
    const command = new GetDataCatalogCommand(args);
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
   * <p>Returns information about a single query. Requires that you have access to the
   *             workgroup in which the query was saved.</p>
   */
  public getNamedQuery(
    args: GetNamedQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNamedQueryCommandOutput>;
  public getNamedQuery(
    args: GetNamedQueryCommandInput,
    cb: (err: any, data?: GetNamedQueryCommandOutput) => void
  ): void;
  public getNamedQuery(
    args: GetNamedQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNamedQueryCommandOutput) => void
  ): void;
  public getNamedQuery(
    args: GetNamedQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNamedQueryCommandOutput) => void),
    cb?: (err: any, data?: GetNamedQueryCommandOutput) => void
  ): Promise<GetNamedQueryCommandOutput> | void {
    const command = new GetNamedQueryCommand(args);
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
   * <p>Retrieves the prepared statement with the specified name from the specified
   *             workgroup.</p>
   */
  public getPreparedStatement(
    args: GetPreparedStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPreparedStatementCommandOutput>;
  public getPreparedStatement(
    args: GetPreparedStatementCommandInput,
    cb: (err: any, data?: GetPreparedStatementCommandOutput) => void
  ): void;
  public getPreparedStatement(
    args: GetPreparedStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPreparedStatementCommandOutput) => void
  ): void;
  public getPreparedStatement(
    args: GetPreparedStatementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPreparedStatementCommandOutput) => void),
    cb?: (err: any, data?: GetPreparedStatementCommandOutput) => void
  ): Promise<GetPreparedStatementCommandOutput> | void {
    const command = new GetPreparedStatementCommand(args);
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
   * <p>Returns information about a single execution of a query if you have access to the
   *             workgroup in which the query ran. Each time a query executes, information about the
   *             query execution is saved with a unique ID.</p>
   */
  public getQueryExecution(
    args: GetQueryExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueryExecutionCommandOutput>;
  public getQueryExecution(
    args: GetQueryExecutionCommandInput,
    cb: (err: any, data?: GetQueryExecutionCommandOutput) => void
  ): void;
  public getQueryExecution(
    args: GetQueryExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueryExecutionCommandOutput) => void
  ): void;
  public getQueryExecution(
    args: GetQueryExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetQueryExecutionCommandOutput) => void),
    cb?: (err: any, data?: GetQueryExecutionCommandOutput) => void
  ): Promise<GetQueryExecutionCommandOutput> | void {
    const command = new GetQueryExecutionCommand(args);
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
   * <p>Streams the results of a single query execution specified by
   *                 <code>QueryExecutionId</code> from the Athena query results location in
   *                 Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Query Results</a> in the <i>Amazon Athena User Guide</i>. This request does not execute the query
   *             but returns results. Use <a>StartQueryExecution</a> to run a query.</p>
   *         <p>To stream query results successfully, the IAM principal with permission to call
   *                 <code>GetQueryResults</code> also must have permissions to the Amazon S3
   *             <code>GetObject</code> action for the Athena query results location.</p>
   *         <important>
   *             <p>IAM principals with permission to the Amazon S3
   *                 <code>GetObject</code> action for the query results location are able to retrieve
   *                 query results from Amazon S3 even if permission to the
   *                     <code>GetQueryResults</code> action is denied. To restrict user or role access,
   *                 ensure that Amazon S3 permissions to the Athena query location
   *                 are denied.</p>
   *         </important>
   */
  public getQueryResults(
    args: GetQueryResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueryResultsCommandOutput>;
  public getQueryResults(
    args: GetQueryResultsCommandInput,
    cb: (err: any, data?: GetQueryResultsCommandOutput) => void
  ): void;
  public getQueryResults(
    args: GetQueryResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueryResultsCommandOutput) => void
  ): void;
  public getQueryResults(
    args: GetQueryResultsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetQueryResultsCommandOutput) => void),
    cb?: (err: any, data?: GetQueryResultsCommandOutput) => void
  ): Promise<GetQueryResultsCommandOutput> | void {
    const command = new GetQueryResultsCommand(args);
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
   * <p>Returns table metadata for the specified catalog, database, and table.</p>
   */
  public getTableMetadata(
    args: GetTableMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableMetadataCommandOutput>;
  public getTableMetadata(
    args: GetTableMetadataCommandInput,
    cb: (err: any, data?: GetTableMetadataCommandOutput) => void
  ): void;
  public getTableMetadata(
    args: GetTableMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableMetadataCommandOutput) => void
  ): void;
  public getTableMetadata(
    args: GetTableMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTableMetadataCommandOutput) => void),
    cb?: (err: any, data?: GetTableMetadataCommandOutput) => void
  ): Promise<GetTableMetadataCommandOutput> | void {
    const command = new GetTableMetadataCommand(args);
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
   * <p>Returns information about the workgroup with the specified name.</p>
   */
  public getWorkGroup(
    args: GetWorkGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkGroupCommandOutput>;
  public getWorkGroup(args: GetWorkGroupCommandInput, cb: (err: any, data?: GetWorkGroupCommandOutput) => void): void;
  public getWorkGroup(
    args: GetWorkGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkGroupCommandOutput) => void
  ): void;
  public getWorkGroup(
    args: GetWorkGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkGroupCommandOutput) => void),
    cb?: (err: any, data?: GetWorkGroupCommandOutput) => void
  ): Promise<GetWorkGroupCommandOutput> | void {
    const command = new GetWorkGroupCommand(args);
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
   * <p>Lists the databases in the specified data catalog.</p>
   */
  public listDatabases(
    args: ListDatabasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatabasesCommandOutput>;
  public listDatabases(
    args: ListDatabasesCommandInput,
    cb: (err: any, data?: ListDatabasesCommandOutput) => void
  ): void;
  public listDatabases(
    args: ListDatabasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatabasesCommandOutput) => void
  ): void;
  public listDatabases(
    args: ListDatabasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDatabasesCommandOutput) => void),
    cb?: (err: any, data?: ListDatabasesCommandOutput) => void
  ): Promise<ListDatabasesCommandOutput> | void {
    const command = new ListDatabasesCommand(args);
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
   * <p>Lists the data catalogs in the current Amazon Web Services account.</p>
   */
  public listDataCatalogs(
    args: ListDataCatalogsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataCatalogsCommandOutput>;
  public listDataCatalogs(
    args: ListDataCatalogsCommandInput,
    cb: (err: any, data?: ListDataCatalogsCommandOutput) => void
  ): void;
  public listDataCatalogs(
    args: ListDataCatalogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataCatalogsCommandOutput) => void
  ): void;
  public listDataCatalogs(
    args: ListDataCatalogsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDataCatalogsCommandOutput) => void),
    cb?: (err: any, data?: ListDataCatalogsCommandOutput) => void
  ): Promise<ListDataCatalogsCommandOutput> | void {
    const command = new ListDataCatalogsCommand(args);
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
   * <p>Returns a list of engine versions that are available to choose from, including the
   *             Auto option.</p>
   */
  public listEngineVersions(
    args: ListEngineVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEngineVersionsCommandOutput>;
  public listEngineVersions(
    args: ListEngineVersionsCommandInput,
    cb: (err: any, data?: ListEngineVersionsCommandOutput) => void
  ): void;
  public listEngineVersions(
    args: ListEngineVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEngineVersionsCommandOutput) => void
  ): void;
  public listEngineVersions(
    args: ListEngineVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEngineVersionsCommandOutput) => void),
    cb?: (err: any, data?: ListEngineVersionsCommandOutput) => void
  ): Promise<ListEngineVersionsCommandOutput> | void {
    const command = new ListEngineVersionsCommand(args);
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
   * <p>Provides a list of available query IDs only for queries saved in the specified
   *             workgroup. Requires that you have access to the specified workgroup. If a workgroup is
   *             not specified, lists the saved queries for the primary workgroup.</p>
   *         <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
   *                 Code Samples</a> in the <i>Amazon Athena User
   *             Guide</i>.</p>
   */
  public listNamedQueries(
    args: ListNamedQueriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListNamedQueriesCommandOutput>;
  public listNamedQueries(
    args: ListNamedQueriesCommandInput,
    cb: (err: any, data?: ListNamedQueriesCommandOutput) => void
  ): void;
  public listNamedQueries(
    args: ListNamedQueriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListNamedQueriesCommandOutput) => void
  ): void;
  public listNamedQueries(
    args: ListNamedQueriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListNamedQueriesCommandOutput) => void),
    cb?: (err: any, data?: ListNamedQueriesCommandOutput) => void
  ): Promise<ListNamedQueriesCommandOutput> | void {
    const command = new ListNamedQueriesCommand(args);
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
   * <p>Lists the prepared statements in the specfied workgroup.</p>
   */
  public listPreparedStatements(
    args: ListPreparedStatementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPreparedStatementsCommandOutput>;
  public listPreparedStatements(
    args: ListPreparedStatementsCommandInput,
    cb: (err: any, data?: ListPreparedStatementsCommandOutput) => void
  ): void;
  public listPreparedStatements(
    args: ListPreparedStatementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPreparedStatementsCommandOutput) => void
  ): void;
  public listPreparedStatements(
    args: ListPreparedStatementsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPreparedStatementsCommandOutput) => void),
    cb?: (err: any, data?: ListPreparedStatementsCommandOutput) => void
  ): Promise<ListPreparedStatementsCommandOutput> | void {
    const command = new ListPreparedStatementsCommand(args);
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
   * <p>Provides a list of available query execution IDs for the queries in the specified
   *             workgroup. If a workgroup is not specified, returns a list of query execution IDs for
   *             the primary workgroup. Requires you to have access to the workgroup in which the queries
   *             ran.</p>
   *         <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
   *                 Code Samples</a> in the <i>Amazon Athena User
   *             Guide</i>.</p>
   */
  public listQueryExecutions(
    args: ListQueryExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListQueryExecutionsCommandOutput>;
  public listQueryExecutions(
    args: ListQueryExecutionsCommandInput,
    cb: (err: any, data?: ListQueryExecutionsCommandOutput) => void
  ): void;
  public listQueryExecutions(
    args: ListQueryExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListQueryExecutionsCommandOutput) => void
  ): void;
  public listQueryExecutions(
    args: ListQueryExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListQueryExecutionsCommandOutput) => void),
    cb?: (err: any, data?: ListQueryExecutionsCommandOutput) => void
  ): Promise<ListQueryExecutionsCommandOutput> | void {
    const command = new ListQueryExecutionsCommand(args);
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
   * <p>Lists the metadata for the tables in the specified data catalog database.</p>
   */
  public listTableMetadata(
    args: ListTableMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTableMetadataCommandOutput>;
  public listTableMetadata(
    args: ListTableMetadataCommandInput,
    cb: (err: any, data?: ListTableMetadataCommandOutput) => void
  ): void;
  public listTableMetadata(
    args: ListTableMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTableMetadataCommandOutput) => void
  ): void;
  public listTableMetadata(
    args: ListTableMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTableMetadataCommandOutput) => void),
    cb?: (err: any, data?: ListTableMetadataCommandOutput) => void
  ): Promise<ListTableMetadataCommandOutput> | void {
    const command = new ListTableMetadataCommand(args);
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
   * <p>Lists the tags associated with an Athena workgroup or data catalog
   *             resource.</p>
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
   * <p>Lists available workgroups for the account.</p>
   */
  public listWorkGroups(
    args: ListWorkGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkGroupsCommandOutput>;
  public listWorkGroups(
    args: ListWorkGroupsCommandInput,
    cb: (err: any, data?: ListWorkGroupsCommandOutput) => void
  ): void;
  public listWorkGroups(
    args: ListWorkGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkGroupsCommandOutput) => void
  ): void;
  public listWorkGroups(
    args: ListWorkGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListWorkGroupsCommandOutput) => void
  ): Promise<ListWorkGroupsCommandOutput> | void {
    const command = new ListWorkGroupsCommand(args);
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
   * <p>Runs the SQL query statements contained in the <code>Query</code>. Requires you to
   *             have access to the workgroup in which the query ran. Running queries against an external
   *             catalog requires <a>GetDataCatalog</a> permission to the catalog. For code
   *             samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
   *                 Code Samples</a> in the <i>Amazon Athena User
   *             Guide</i>.</p>
   */
  public startQueryExecution(
    args: StartQueryExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartQueryExecutionCommandOutput>;
  public startQueryExecution(
    args: StartQueryExecutionCommandInput,
    cb: (err: any, data?: StartQueryExecutionCommandOutput) => void
  ): void;
  public startQueryExecution(
    args: StartQueryExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartQueryExecutionCommandOutput) => void
  ): void;
  public startQueryExecution(
    args: StartQueryExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartQueryExecutionCommandOutput) => void),
    cb?: (err: any, data?: StartQueryExecutionCommandOutput) => void
  ): Promise<StartQueryExecutionCommandOutput> | void {
    const command = new StartQueryExecutionCommand(args);
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
   * <p>Stops a query execution. Requires you to have access to the workgroup in which the
   *             query ran.</p>
   *         <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and
   *                 Code Samples</a> in the <i>Amazon Athena User
   *             Guide</i>.</p>
   */
  public stopQueryExecution(
    args: StopQueryExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopQueryExecutionCommandOutput>;
  public stopQueryExecution(
    args: StopQueryExecutionCommandInput,
    cb: (err: any, data?: StopQueryExecutionCommandOutput) => void
  ): void;
  public stopQueryExecution(
    args: StopQueryExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopQueryExecutionCommandOutput) => void
  ): void;
  public stopQueryExecution(
    args: StopQueryExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopQueryExecutionCommandOutput) => void),
    cb?: (err: any, data?: StopQueryExecutionCommandOutput) => void
  ): Promise<StopQueryExecutionCommandOutput> | void {
    const command = new StopQueryExecutionCommand(args);
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
   * <p>Adds one or more tags to an Athena resource. A tag is a label that you
   *             assign to a resource. In Athena, a resource can be a workgroup or data
   *             catalog. Each tag consists of a key and an optional value, both of which you define. For
   *             example, you can use tags to categorize Athena workgroups or data catalogs
   *             by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to
   *             search and filter workgroups or data catalogs in your account. For best practices, see
   *                 <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode
   *             characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use
   *             letters and numbers representable in UTF-8, and the following characters: + - = . _ : /
   *             @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you
   *             specify more than one tag, separate them by commas.</p>
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
   * <p>Removes one or more tags from a data catalog or workgroup resource.</p>
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
   * <p>Updates the data catalog that has the specified name.</p>
   */
  public updateDataCatalog(
    args: UpdateDataCatalogCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataCatalogCommandOutput>;
  public updateDataCatalog(
    args: UpdateDataCatalogCommandInput,
    cb: (err: any, data?: UpdateDataCatalogCommandOutput) => void
  ): void;
  public updateDataCatalog(
    args: UpdateDataCatalogCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataCatalogCommandOutput) => void
  ): void;
  public updateDataCatalog(
    args: UpdateDataCatalogCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDataCatalogCommandOutput) => void),
    cb?: (err: any, data?: UpdateDataCatalogCommandOutput) => void
  ): Promise<UpdateDataCatalogCommandOutput> | void {
    const command = new UpdateDataCatalogCommand(args);
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
   * <p>Updates a prepared statement.</p>
   */
  public updatePreparedStatement(
    args: UpdatePreparedStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePreparedStatementCommandOutput>;
  public updatePreparedStatement(
    args: UpdatePreparedStatementCommandInput,
    cb: (err: any, data?: UpdatePreparedStatementCommandOutput) => void
  ): void;
  public updatePreparedStatement(
    args: UpdatePreparedStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePreparedStatementCommandOutput) => void
  ): void;
  public updatePreparedStatement(
    args: UpdatePreparedStatementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePreparedStatementCommandOutput) => void),
    cb?: (err: any, data?: UpdatePreparedStatementCommandOutput) => void
  ): Promise<UpdatePreparedStatementCommandOutput> | void {
    const command = new UpdatePreparedStatementCommand(args);
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
   * <p>Updates the workgroup with the specified name. The workgroup's name cannot be
   *             changed.</p>
   */
  public updateWorkGroup(
    args: UpdateWorkGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkGroupCommandOutput>;
  public updateWorkGroup(
    args: UpdateWorkGroupCommandInput,
    cb: (err: any, data?: UpdateWorkGroupCommandOutput) => void
  ): void;
  public updateWorkGroup(
    args: UpdateWorkGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkGroupCommandOutput) => void
  ): void;
  public updateWorkGroup(
    args: UpdateWorkGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorkGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkGroupCommandOutput) => void
  ): Promise<UpdateWorkGroupCommandOutput> | void {
    const command = new UpdateWorkGroupCommand(args);
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
