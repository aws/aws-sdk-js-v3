// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  BatchCreateTableRowsCommand,
  BatchCreateTableRowsCommandInput,
  BatchCreateTableRowsCommandOutput,
} from "./commands/BatchCreateTableRowsCommand";
import {
  BatchDeleteTableRowsCommand,
  BatchDeleteTableRowsCommandInput,
  BatchDeleteTableRowsCommandOutput,
} from "./commands/BatchDeleteTableRowsCommand";
import {
  BatchUpdateTableRowsCommand,
  BatchUpdateTableRowsCommandInput,
  BatchUpdateTableRowsCommandOutput,
} from "./commands/BatchUpdateTableRowsCommand";
import {
  BatchUpsertTableRowsCommand,
  BatchUpsertTableRowsCommandInput,
  BatchUpsertTableRowsCommandOutput,
} from "./commands/BatchUpsertTableRowsCommand";
import {
  DescribeTableDataImportJobCommand,
  DescribeTableDataImportJobCommandInput,
  DescribeTableDataImportJobCommandOutput,
} from "./commands/DescribeTableDataImportJobCommand";
import {
  GetScreenDataCommand,
  GetScreenDataCommandInput,
  GetScreenDataCommandOutput,
} from "./commands/GetScreenDataCommand";
import {
  InvokeScreenAutomationCommand,
  InvokeScreenAutomationCommandInput,
  InvokeScreenAutomationCommandOutput,
} from "./commands/InvokeScreenAutomationCommand";
import {
  ListTableColumnsCommand,
  ListTableColumnsCommandInput,
  ListTableColumnsCommandOutput,
} from "./commands/ListTableColumnsCommand";
import {
  ListTableRowsCommand,
  ListTableRowsCommandInput,
  ListTableRowsCommandOutput,
} from "./commands/ListTableRowsCommand";
import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "./commands/ListTablesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  QueryTableRowsCommand,
  QueryTableRowsCommandInput,
  QueryTableRowsCommandOutput,
} from "./commands/QueryTableRowsCommand";
import {
  StartTableDataImportJobCommand,
  StartTableDataImportJobCommandInput,
  StartTableDataImportJobCommandOutput,
} from "./commands/StartTableDataImportJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { HoneycodeClient } from "./HoneycodeClient";

/**
 * <p>
 *       Amazon Honeycode is a fully managed service that allows you to quickly build mobile and web apps for teams—without
 *       programming. Build Honeycode apps for managing almost anything, like projects, customers, operations, approvals,
 *       resources, and even your team.
 *     </p>
 */
export class Honeycode extends HoneycodeClient {
  /**
   * <p>
   *             The BatchCreateTableRows API allows you to create one or more rows at the end of a table in a workbook.
   *             The API allows you to specify the values to set in some or all of the columns in the new rows.
   *         </p>
   *         <p>
   *             If a column is not explicitly set in a specific row, then the column level formula specified in the table
   *             will be applied to the new row. If there is no column level formula but the last row of the table has a
   *             formula, then that formula will be copied down to the new row. If there is no column level formula and
   *             no formula in the last row of the table, then that column will be left blank for the new rows.
   *         </p>
   */
  public batchCreateTableRows(
    args: BatchCreateTableRowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchCreateTableRowsCommandOutput>;
  public batchCreateTableRows(
    args: BatchCreateTableRowsCommandInput,
    cb: (err: any, data?: BatchCreateTableRowsCommandOutput) => void
  ): void;
  public batchCreateTableRows(
    args: BatchCreateTableRowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchCreateTableRowsCommandOutput) => void
  ): void;
  public batchCreateTableRows(
    args: BatchCreateTableRowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchCreateTableRowsCommandOutput) => void),
    cb?: (err: any, data?: BatchCreateTableRowsCommandOutput) => void
  ): Promise<BatchCreateTableRowsCommandOutput> | void {
    const command = new BatchCreateTableRowsCommand(args);
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
   * <p>
   *             The BatchDeleteTableRows API allows you to delete one or more rows from a table in a workbook.
   *             You need to specify the ids of the rows that you want to delete from the table.
   *         </p>
   */
  public batchDeleteTableRows(
    args: BatchDeleteTableRowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteTableRowsCommandOutput>;
  public batchDeleteTableRows(
    args: BatchDeleteTableRowsCommandInput,
    cb: (err: any, data?: BatchDeleteTableRowsCommandOutput) => void
  ): void;
  public batchDeleteTableRows(
    args: BatchDeleteTableRowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteTableRowsCommandOutput) => void
  ): void;
  public batchDeleteTableRows(
    args: BatchDeleteTableRowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteTableRowsCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteTableRowsCommandOutput) => void
  ): Promise<BatchDeleteTableRowsCommandOutput> | void {
    const command = new BatchDeleteTableRowsCommand(args);
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
   * <p>
   *             The BatchUpdateTableRows API allows you to update one or more rows in a table in a workbook.
   *         </p>
   *         <p>
   *             You can specify the values to set in some or all of the columns in the table for the specified
   *             rows.
   *             If a column is not explicitly specified in a particular row, then that column will not be updated
   *             for that row. To clear out the data in a specific cell, you need to set the value as an empty string
   *             ("").
   *         </p>
   */
  public batchUpdateTableRows(
    args: BatchUpdateTableRowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateTableRowsCommandOutput>;
  public batchUpdateTableRows(
    args: BatchUpdateTableRowsCommandInput,
    cb: (err: any, data?: BatchUpdateTableRowsCommandOutput) => void
  ): void;
  public batchUpdateTableRows(
    args: BatchUpdateTableRowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateTableRowsCommandOutput) => void
  ): void;
  public batchUpdateTableRows(
    args: BatchUpdateTableRowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchUpdateTableRowsCommandOutput) => void),
    cb?: (err: any, data?: BatchUpdateTableRowsCommandOutput) => void
  ): Promise<BatchUpdateTableRowsCommandOutput> | void {
    const command = new BatchUpdateTableRowsCommand(args);
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
   * <p>
   *             The BatchUpsertTableRows API allows you to upsert one or more rows in a table. The upsert
   *             operation takes a filter expression as input and evaluates it to find matching rows on the destination
   *             table. If matching rows are found, it will update the cells in the matching rows to new values specified
   *             in the request. If no matching rows are found, a new row is added at the end of the table and the cells in
   *             that row are set to the new values specified in the request.
   *         </p>
   *         <p>
   *             You can specify the values to set in some or all of the columns in the table for the
   *             matching or newly appended rows. If a column is not explicitly specified for a particular row, then that
   *             column will not be updated for that row. To clear out the data in a specific cell, you need to set the value
   *             as an empty string ("").
   *         </p>
   */
  public batchUpsertTableRows(
    args: BatchUpsertTableRowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpsertTableRowsCommandOutput>;
  public batchUpsertTableRows(
    args: BatchUpsertTableRowsCommandInput,
    cb: (err: any, data?: BatchUpsertTableRowsCommandOutput) => void
  ): void;
  public batchUpsertTableRows(
    args: BatchUpsertTableRowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpsertTableRowsCommandOutput) => void
  ): void;
  public batchUpsertTableRows(
    args: BatchUpsertTableRowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchUpsertTableRowsCommandOutput) => void),
    cb?: (err: any, data?: BatchUpsertTableRowsCommandOutput) => void
  ): Promise<BatchUpsertTableRowsCommandOutput> | void {
    const command = new BatchUpsertTableRowsCommand(args);
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
   * <p>
   *             The DescribeTableDataImportJob API allows you to retrieve the status and details of a table data import job.
   *         </p>
   */
  public describeTableDataImportJob(
    args: DescribeTableDataImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTableDataImportJobCommandOutput>;
  public describeTableDataImportJob(
    args: DescribeTableDataImportJobCommandInput,
    cb: (err: any, data?: DescribeTableDataImportJobCommandOutput) => void
  ): void;
  public describeTableDataImportJob(
    args: DescribeTableDataImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTableDataImportJobCommandOutput) => void
  ): void;
  public describeTableDataImportJob(
    args: DescribeTableDataImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTableDataImportJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeTableDataImportJobCommandOutput) => void
  ): Promise<DescribeTableDataImportJobCommandOutput> | void {
    const command = new DescribeTableDataImportJobCommand(args);
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
   * <p>
   *             The GetScreenData API allows retrieval of data from a screen in a Honeycode app.
   *             The API allows setting local variables in the screen to filter, sort or otherwise affect what will be
   *             displayed on the screen.
   *         </p>
   */
  public getScreenData(
    args: GetScreenDataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetScreenDataCommandOutput>;
  public getScreenData(
    args: GetScreenDataCommandInput,
    cb: (err: any, data?: GetScreenDataCommandOutput) => void
  ): void;
  public getScreenData(
    args: GetScreenDataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetScreenDataCommandOutput) => void
  ): void;
  public getScreenData(
    args: GetScreenDataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetScreenDataCommandOutput) => void),
    cb?: (err: any, data?: GetScreenDataCommandOutput) => void
  ): Promise<GetScreenDataCommandOutput> | void {
    const command = new GetScreenDataCommand(args);
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
   * <p>
   *             The InvokeScreenAutomation API allows invoking an action defined in a screen in a Honeycode app.
   *             The API allows setting local variables, which can then be used in the automation being invoked.
   *             This allows automating the Honeycode app interactions to write, update or delete data in the workbook.
   *         </p>
   */
  public invokeScreenAutomation(
    args: InvokeScreenAutomationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeScreenAutomationCommandOutput>;
  public invokeScreenAutomation(
    args: InvokeScreenAutomationCommandInput,
    cb: (err: any, data?: InvokeScreenAutomationCommandOutput) => void
  ): void;
  public invokeScreenAutomation(
    args: InvokeScreenAutomationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeScreenAutomationCommandOutput) => void
  ): void;
  public invokeScreenAutomation(
    args: InvokeScreenAutomationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: InvokeScreenAutomationCommandOutput) => void),
    cb?: (err: any, data?: InvokeScreenAutomationCommandOutput) => void
  ): Promise<InvokeScreenAutomationCommandOutput> | void {
    const command = new InvokeScreenAutomationCommand(args);
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
   * <p>
   *             The ListTableColumns API allows you to retrieve a list of all the columns in a table in a workbook.
   *         </p>
   */
  public listTableColumns(
    args: ListTableColumnsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTableColumnsCommandOutput>;
  public listTableColumns(
    args: ListTableColumnsCommandInput,
    cb: (err: any, data?: ListTableColumnsCommandOutput) => void
  ): void;
  public listTableColumns(
    args: ListTableColumnsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTableColumnsCommandOutput) => void
  ): void;
  public listTableColumns(
    args: ListTableColumnsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTableColumnsCommandOutput) => void),
    cb?: (err: any, data?: ListTableColumnsCommandOutput) => void
  ): Promise<ListTableColumnsCommandOutput> | void {
    const command = new ListTableColumnsCommand(args);
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
   * <p>
   *             The ListTableRows API allows you to retrieve a list of all the rows in a table in a workbook.
   *         </p>
   */
  public listTableRows(
    args: ListTableRowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTableRowsCommandOutput>;
  public listTableRows(
    args: ListTableRowsCommandInput,
    cb: (err: any, data?: ListTableRowsCommandOutput) => void
  ): void;
  public listTableRows(
    args: ListTableRowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTableRowsCommandOutput) => void
  ): void;
  public listTableRows(
    args: ListTableRowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTableRowsCommandOutput) => void),
    cb?: (err: any, data?: ListTableRowsCommandOutput) => void
  ): Promise<ListTableRowsCommandOutput> | void {
    const command = new ListTableRowsCommand(args);
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
   * <p>
   *             The ListTables API allows you to retrieve a list of all the tables in a workbook.
   *         </p>
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

  /**
   * <p>
   *             The ListTagsForResource API allows you to return a resource's tags.
   *         </p>
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
   * <p>
   *             The QueryTableRows API allows you to use a filter formula to query for specific rows in a table.
   *         </p>
   */
  public queryTableRows(
    args: QueryTableRowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<QueryTableRowsCommandOutput>;
  public queryTableRows(
    args: QueryTableRowsCommandInput,
    cb: (err: any, data?: QueryTableRowsCommandOutput) => void
  ): void;
  public queryTableRows(
    args: QueryTableRowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: QueryTableRowsCommandOutput) => void
  ): void;
  public queryTableRows(
    args: QueryTableRowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: QueryTableRowsCommandOutput) => void),
    cb?: (err: any, data?: QueryTableRowsCommandOutput) => void
  ): Promise<QueryTableRowsCommandOutput> | void {
    const command = new QueryTableRowsCommand(args);
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
   * <p>
   *             The StartTableDataImportJob API allows you to start an import job on a table. This API will only return
   *             the id of the job that was started. To find out the status of the import request, you need to call the
   *             DescribeTableDataImportJob API.
   *         </p>
   */
  public startTableDataImportJob(
    args: StartTableDataImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTableDataImportJobCommandOutput>;
  public startTableDataImportJob(
    args: StartTableDataImportJobCommandInput,
    cb: (err: any, data?: StartTableDataImportJobCommandOutput) => void
  ): void;
  public startTableDataImportJob(
    args: StartTableDataImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTableDataImportJobCommandOutput) => void
  ): void;
  public startTableDataImportJob(
    args: StartTableDataImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartTableDataImportJobCommandOutput) => void),
    cb?: (err: any, data?: StartTableDataImportJobCommandOutput) => void
  ): Promise<StartTableDataImportJobCommandOutput> | void {
    const command = new StartTableDataImportJobCommand(args);
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
   * <p>
   *             The TagResource API allows you to add tags to an ARN-able resource. Resource includes workbook, table,
   *             screen and screen-automation.
   *         </p>
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
   * <p>
   *             The UntagResource API allows you to removes tags from an ARN-able resource. Resource includes workbook, table,
   *             screen and screen-automation.
   *         </p>
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
}
