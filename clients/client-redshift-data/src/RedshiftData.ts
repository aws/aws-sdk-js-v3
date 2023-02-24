// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  BatchExecuteStatementCommand,
  BatchExecuteStatementCommandInput,
  BatchExecuteStatementCommandOutput,
} from "./commands/BatchExecuteStatementCommand";
import {
  CancelStatementCommand,
  CancelStatementCommandInput,
  CancelStatementCommandOutput,
} from "./commands/CancelStatementCommand";
import {
  DescribeStatementCommand,
  DescribeStatementCommandInput,
  DescribeStatementCommandOutput,
} from "./commands/DescribeStatementCommand";
import {
  DescribeTableCommand,
  DescribeTableCommandInput,
  DescribeTableCommandOutput,
} from "./commands/DescribeTableCommand";
import {
  ExecuteStatementCommand,
  ExecuteStatementCommandInput,
  ExecuteStatementCommandOutput,
} from "./commands/ExecuteStatementCommand";
import {
  GetStatementResultCommand,
  GetStatementResultCommandInput,
  GetStatementResultCommandOutput,
} from "./commands/GetStatementResultCommand";
import {
  ListDatabasesCommand,
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput,
} from "./commands/ListDatabasesCommand";
import { ListSchemasCommand, ListSchemasCommandInput, ListSchemasCommandOutput } from "./commands/ListSchemasCommand";
import {
  ListStatementsCommand,
  ListStatementsCommandInput,
  ListStatementsCommandOutput,
} from "./commands/ListStatementsCommand";
import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "./commands/ListTablesCommand";
import { RedshiftDataClient } from "./RedshiftDataClient";

/**
 * <p>You can use the Amazon Redshift Data API to run queries on Amazon Redshift tables. You
 *       can run SQL statements, which are committed if the statement succeeds. </p>
 *          <p>For more information about the Amazon Redshift Data API and CLI usage examples, see
 *        <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
 *        <i>Amazon Redshift Management Guide</i>. </p>
 */
export class RedshiftData extends RedshiftDataClient {
  /**
   * <p>Runs one or more SQL statements, which can be data manipulation language (DML) or data definition
   *       language (DDL).
   *       Depending on the authorization
   *       method, use one of the following combinations of request parameters: </p>
   *          <ul>
   *             <li>
   *                <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret.
   * When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p>
   *             </li>
   *             <li>
   *                <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name.
   * Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.
   * When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p>
   *             </li>
   *          </ul>
   *          <p>For more information about the Amazon Redshift Data API and CLI usage examples, see
   *       <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
   *       <i>Amazon Redshift Management Guide</i>. </p>
   */
  public batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchExecuteStatementCommandOutput>;
  public batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    cb: (err: any, data?: BatchExecuteStatementCommandOutput) => void
  ): void;
  public batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchExecuteStatementCommandOutput) => void
  ): void;
  public batchExecuteStatement(
    args: BatchExecuteStatementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchExecuteStatementCommandOutput) => void),
    cb?: (err: any, data?: BatchExecuteStatementCommandOutput) => void
  ): Promise<BatchExecuteStatementCommandOutput> | void {
    const command = new BatchExecuteStatementCommand(args);
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
   * <p>Cancels a running query. To be canceled, a query must be running. </p>
   *          <p>For more information about the Amazon Redshift Data API and CLI usage examples, see
   *        <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
   *        <i>Amazon Redshift Management Guide</i>. </p>
   */
  public cancelStatement(
    args: CancelStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelStatementCommandOutput>;
  public cancelStatement(
    args: CancelStatementCommandInput,
    cb: (err: any, data?: CancelStatementCommandOutput) => void
  ): void;
  public cancelStatement(
    args: CancelStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelStatementCommandOutput) => void
  ): void;
  public cancelStatement(
    args: CancelStatementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelStatementCommandOutput) => void),
    cb?: (err: any, data?: CancelStatementCommandOutput) => void
  ): Promise<CancelStatementCommandOutput> | void {
    const command = new CancelStatementCommand(args);
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
   * <p>Describes the details about a specific instance when a query was run by the Amazon Redshift Data API. The information
   *       includes when the query started, when it finished, the query status, the number of rows returned, and the SQL
   *       statement. </p>
   *          <p>For more information about the Amazon Redshift Data API and CLI usage examples, see
   *        <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
   *        <i>Amazon Redshift Management Guide</i>. </p>
   */
  public describeStatement(
    args: DescribeStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStatementCommandOutput>;
  public describeStatement(
    args: DescribeStatementCommandInput,
    cb: (err: any, data?: DescribeStatementCommandOutput) => void
  ): void;
  public describeStatement(
    args: DescribeStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStatementCommandOutput) => void
  ): void;
  public describeStatement(
    args: DescribeStatementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStatementCommandOutput) => void),
    cb?: (err: any, data?: DescribeStatementCommandOutput) => void
  ): Promise<DescribeStatementCommandOutput> | void {
    const command = new DescribeStatementCommand(args);
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
   * <p>Describes the detailed information about a table from metadata in the cluster. The
   *       information includes its columns.
   *       A token is returned to page through the column list.
   *       Depending on the authorization method, use one of the
   *       following combinations of request parameters: </p>
   *          <ul>
   *             <li>
   *                <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret.
   * When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p>
   *             </li>
   *             <li>
   *                <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name.
   * Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.
   * When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p>
   *             </li>
   *          </ul>
   *          <p>For more information about the Amazon Redshift Data API and CLI usage examples, see
   *        <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
   *        <i>Amazon Redshift Management Guide</i>. </p>
   */
  public describeTable(
    args: DescribeTableCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTableCommandOutput>;
  public describeTable(
    args: DescribeTableCommandInput,
    cb: (err: any, data?: DescribeTableCommandOutput) => void
  ): void;
  public describeTable(
    args: DescribeTableCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTableCommandOutput) => void
  ): void;
  public describeTable(
    args: DescribeTableCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTableCommandOutput) => void),
    cb?: (err: any, data?: DescribeTableCommandOutput) => void
  ): Promise<DescribeTableCommandOutput> | void {
    const command = new DescribeTableCommand(args);
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
   * <p>Runs an SQL statement, which can be data manipulation language (DML) or data definition
   *       language (DDL). This statement must be a single SQL statement.
   *       Depending on the authorization
   *       method, use one of the following combinations of request parameters: </p>
   *          <ul>
   *             <li>
   *                <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret.
   * When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p>
   *             </li>
   *             <li>
   *                <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name.
   * Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.
   * When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p>
   *             </li>
   *          </ul>
   *          <p>For more information about the Amazon Redshift Data API and CLI usage examples, see
   *        <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
   *        <i>Amazon Redshift Management Guide</i>. </p>
   */
  public executeStatement(
    args: ExecuteStatementCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteStatementCommandOutput>;
  public executeStatement(
    args: ExecuteStatementCommandInput,
    cb: (err: any, data?: ExecuteStatementCommandOutput) => void
  ): void;
  public executeStatement(
    args: ExecuteStatementCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteStatementCommandOutput) => void
  ): void;
  public executeStatement(
    args: ExecuteStatementCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExecuteStatementCommandOutput) => void),
    cb?: (err: any, data?: ExecuteStatementCommandOutput) => void
  ): Promise<ExecuteStatementCommandOutput> | void {
    const command = new ExecuteStatementCommand(args);
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
   * <p>Fetches the temporarily cached result of an SQL statement.
   *        A token is returned to page through the statement results. </p>
   *          <p>For more information about the Amazon Redshift Data API and CLI usage examples, see
   *        <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
   *        <i>Amazon Redshift Management Guide</i>. </p>
   */
  public getStatementResult(
    args: GetStatementResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStatementResultCommandOutput>;
  public getStatementResult(
    args: GetStatementResultCommandInput,
    cb: (err: any, data?: GetStatementResultCommandOutput) => void
  ): void;
  public getStatementResult(
    args: GetStatementResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStatementResultCommandOutput) => void
  ): void;
  public getStatementResult(
    args: GetStatementResultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStatementResultCommandOutput) => void),
    cb?: (err: any, data?: GetStatementResultCommandOutput) => void
  ): Promise<GetStatementResultCommandOutput> | void {
    const command = new GetStatementResultCommand(args);
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
   * <p>List the databases in a cluster.
   *       A token is returned to page through the database list.
   *       Depending on the authorization method, use one of the
   *       following combinations of request parameters: </p>
   *          <ul>
   *             <li>
   *                <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret.
   * When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p>
   *             </li>
   *             <li>
   *                <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name.
   * Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.
   * When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p>
   *             </li>
   *          </ul>
   *          <p>For more information about the Amazon Redshift Data API and CLI usage examples, see
   *        <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
   *        <i>Amazon Redshift Management Guide</i>. </p>
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
   * <p>Lists the schemas in a database.
   *       A token is returned to page through the schema list.
   *       Depending on the authorization method, use one of the
   *       following combinations of request parameters: </p>
   *          <ul>
   *             <li>
   *                <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret.
   * When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p>
   *             </li>
   *             <li>
   *                <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name.
   * Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.
   * When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p>
   *             </li>
   *          </ul>
   *          <p>For more information about the Amazon Redshift Data API and CLI usage examples, see
   *        <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
   *        <i>Amazon Redshift Management Guide</i>. </p>
   */
  public listSchemas(args: ListSchemasCommandInput, options?: __HttpHandlerOptions): Promise<ListSchemasCommandOutput>;
  public listSchemas(args: ListSchemasCommandInput, cb: (err: any, data?: ListSchemasCommandOutput) => void): void;
  public listSchemas(
    args: ListSchemasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSchemasCommandOutput) => void
  ): void;
  public listSchemas(
    args: ListSchemasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSchemasCommandOutput) => void),
    cb?: (err: any, data?: ListSchemasCommandOutput) => void
  ): Promise<ListSchemasCommandOutput> | void {
    const command = new ListSchemasCommand(args);
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
   * <p>List of SQL statements. By default, only finished statements are shown.
   *         A token is returned to page through the statement list. </p>
   *          <p>For more information about the Amazon Redshift Data API and CLI usage examples, see
   *        <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
   *        <i>Amazon Redshift Management Guide</i>. </p>
   */
  public listStatements(
    args: ListStatementsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStatementsCommandOutput>;
  public listStatements(
    args: ListStatementsCommandInput,
    cb: (err: any, data?: ListStatementsCommandOutput) => void
  ): void;
  public listStatements(
    args: ListStatementsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStatementsCommandOutput) => void
  ): void;
  public listStatements(
    args: ListStatementsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStatementsCommandOutput) => void),
    cb?: (err: any, data?: ListStatementsCommandOutput) => void
  ): Promise<ListStatementsCommandOutput> | void {
    const command = new ListStatementsCommand(args);
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
   * <p>List the tables in a database. If neither <code>SchemaPattern</code> nor <code>TablePattern</code> are specified, then
   *        all tables in the database are returned.
   *       A token is returned to page through the table list.
   *       Depending on the authorization method, use one of the
   *       following combinations of request parameters: </p>
   *          <ul>
   *             <li>
   *                <p>Secrets Manager - when connecting to a cluster, specify the Amazon Resource Name (ARN) of the secret, the database name, and the cluster identifier that matches the cluster in the secret.
   * When connecting to a serverless workgroup, specify the Amazon Resource Name (ARN) of the secret and the database name. </p>
   *             </li>
   *             <li>
   *                <p>Temporary credentials - when connecting to a cluster, specify the cluster identifier, the database name, and the database user name.
   * Also, permission to call the <code>redshift:GetClusterCredentials</code> operation is required.
   * When connecting to a serverless workgroup, specify the workgroup name and database name. Also, permission to call the <code>redshift-serverless:GetCredentials</code> operation is required. </p>
   *             </li>
   *          </ul>
   *          <p>For more information about the Amazon Redshift Data API and CLI usage examples, see
   *        <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html">Using the Amazon Redshift Data API</a> in the
   *        <i>Amazon Redshift Management Guide</i>. </p>
   */
  public listTables(args: ListTablesCommandInput, options?: __HttpHandlerOptions): Promise<ListTablesCommandOutput>;
  public listTables(args: ListTablesCommandInput, cb: (err: any, data?: ListTablesCommandOutput) => void): void;
  public listTables(
    args: ListTablesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTablesCommandOutput) => void
  ): void;
  public listTables(
    args: ListTablesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTablesCommandOutput) => void),
    cb?: (err: any, data?: ListTablesCommandOutput) => void
  ): Promise<ListTablesCommandOutput> | void {
    const command = new ListTablesCommand(args);
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
