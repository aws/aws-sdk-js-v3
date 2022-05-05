// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CancelQueryCommand, CancelQueryCommandInput, CancelQueryCommandOutput } from "./commands/CancelQueryCommand";
import {
  CreateScheduledQueryCommand,
  CreateScheduledQueryCommandInput,
  CreateScheduledQueryCommandOutput,
} from "./commands/CreateScheduledQueryCommand";
import {
  DeleteScheduledQueryCommand,
  DeleteScheduledQueryCommandInput,
  DeleteScheduledQueryCommandOutput,
} from "./commands/DeleteScheduledQueryCommand";
import {
  DescribeEndpointsCommand,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
} from "./commands/DescribeEndpointsCommand";
import {
  DescribeScheduledQueryCommand,
  DescribeScheduledQueryCommandInput,
  DescribeScheduledQueryCommandOutput,
} from "./commands/DescribeScheduledQueryCommand";
import {
  ExecuteScheduledQueryCommand,
  ExecuteScheduledQueryCommandInput,
  ExecuteScheduledQueryCommandOutput,
} from "./commands/ExecuteScheduledQueryCommand";
import {
  ListScheduledQueriesCommand,
  ListScheduledQueriesCommandInput,
  ListScheduledQueriesCommandOutput,
} from "./commands/ListScheduledQueriesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PrepareQueryCommand,
  PrepareQueryCommandInput,
  PrepareQueryCommandOutput,
} from "./commands/PrepareQueryCommand";
import { QueryCommand, QueryCommandInput, QueryCommandOutput } from "./commands/QueryCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateScheduledQueryCommand,
  UpdateScheduledQueryCommandInput,
  UpdateScheduledQueryCommandOutput,
} from "./commands/UpdateScheduledQueryCommand";
import { TimestreamQueryClient } from "./TimestreamQueryClient";

/**
 * <fullname>Amazon Timestream Query
 *         </fullname>
 *         <p></p>
 */
export class TimestreamQuery extends TimestreamQueryClient {
  /**
   * <p> Cancels a query that has been issued. Cancellation is provided only if the query has
   *             not completed running before the cancellation request was issued. Because cancellation
   *             is an idempotent operation, subsequent cancellation requests will return a
   *                 <code>CancellationMessage</code>, indicating that the query has already been
   *             canceled. See <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.cancel-query.html">code
   *                 sample</a> for details. </p>
   */
  public cancelQuery(args: CancelQueryCommandInput, options?: __HttpHandlerOptions): Promise<CancelQueryCommandOutput>;
  public cancelQuery(args: CancelQueryCommandInput, cb: (err: any, data?: CancelQueryCommandOutput) => void): void;
  public cancelQuery(
    args: CancelQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelQueryCommandOutput) => void
  ): void;
  public cancelQuery(
    args: CancelQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelQueryCommandOutput) => void),
    cb?: (err: any, data?: CancelQueryCommandOutput) => void
  ): Promise<CancelQueryCommandOutput> | void {
    const command = new CancelQueryCommand(args);
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
   * <p> Create a scheduled query that will be run on your behalf at the configured schedule.
   *             Timestream assumes the execution role provided as part of the
   *                 <code>ScheduledQueryExecutionRoleArn</code> parameter to run the query. You can use
   *             the <code>NotificationConfiguration</code> parameter to configure notification for your
   *             scheduled query operations.</p>
   */
  public createScheduledQuery(
    args: CreateScheduledQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateScheduledQueryCommandOutput>;
  public createScheduledQuery(
    args: CreateScheduledQueryCommandInput,
    cb: (err: any, data?: CreateScheduledQueryCommandOutput) => void
  ): void;
  public createScheduledQuery(
    args: CreateScheduledQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateScheduledQueryCommandOutput) => void
  ): void;
  public createScheduledQuery(
    args: CreateScheduledQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateScheduledQueryCommandOutput) => void),
    cb?: (err: any, data?: CreateScheduledQueryCommandOutput) => void
  ): Promise<CreateScheduledQueryCommandOutput> | void {
    const command = new CreateScheduledQueryCommand(args);
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
   * <p>Deletes a given scheduled query. This is an irreversible operation. </p>
   */
  public deleteScheduledQuery(
    args: DeleteScheduledQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteScheduledQueryCommandOutput>;
  public deleteScheduledQuery(
    args: DeleteScheduledQueryCommandInput,
    cb: (err: any, data?: DeleteScheduledQueryCommandOutput) => void
  ): void;
  public deleteScheduledQuery(
    args: DeleteScheduledQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteScheduledQueryCommandOutput) => void
  ): void;
  public deleteScheduledQuery(
    args: DeleteScheduledQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteScheduledQueryCommandOutput) => void),
    cb?: (err: any, data?: DeleteScheduledQueryCommandOutput) => void
  ): Promise<DeleteScheduledQueryCommandOutput> | void {
    const command = new DeleteScheduledQueryCommand(args);
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
   * <p>DescribeEndpoints returns a list of available endpoints to make Timestream
   *             API calls against. This API is available through both Write and Query.</p>
   *         <p>Because the Timestream SDKs are designed to transparently work with the
   *             service’s architecture, including the management and mapping of the service endpoints,
   *                 <i>it is not recommended that you use this API unless</i>:</p>
   *         <ul>
   *             <li>
   *                 <p>You are using <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/VPCEndpoints">VPC endpoints (Amazon Web Services PrivateLink) with Timestream
   *                     </a>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>Your application uses a programming language that does not yet have SDK
   *                     support</p>
   *             </li>
   *             <li>
   *                 <p>You require better control over the client-side implementation</p>
   *             </li>
   *          </ul>
   *         <p>For detailed information on how and when to use and implement DescribeEndpoints, see
   *                 <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using.API.html#Using-API.endpoint-discovery">The Endpoint Discovery Pattern</a>.</p>
   */
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointsCommandOutput>;
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    cb: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): void;
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): void;
  public describeEndpoints(
    args: DescribeEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEndpointsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEndpointsCommandOutput) => void
  ): Promise<DescribeEndpointsCommandOutput> | void {
    const command = new DescribeEndpointsCommand(args);
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
   * <p>Provides detailed information about a scheduled query.</p>
   */
  public describeScheduledQuery(
    args: DescribeScheduledQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScheduledQueryCommandOutput>;
  public describeScheduledQuery(
    args: DescribeScheduledQueryCommandInput,
    cb: (err: any, data?: DescribeScheduledQueryCommandOutput) => void
  ): void;
  public describeScheduledQuery(
    args: DescribeScheduledQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScheduledQueryCommandOutput) => void
  ): void;
  public describeScheduledQuery(
    args: DescribeScheduledQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeScheduledQueryCommandOutput) => void),
    cb?: (err: any, data?: DescribeScheduledQueryCommandOutput) => void
  ): Promise<DescribeScheduledQueryCommandOutput> | void {
    const command = new DescribeScheduledQueryCommand(args);
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
   * <p> You can use this API to run a scheduled query manually. </p>
   */
  public executeScheduledQuery(
    args: ExecuteScheduledQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteScheduledQueryCommandOutput>;
  public executeScheduledQuery(
    args: ExecuteScheduledQueryCommandInput,
    cb: (err: any, data?: ExecuteScheduledQueryCommandOutput) => void
  ): void;
  public executeScheduledQuery(
    args: ExecuteScheduledQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteScheduledQueryCommandOutput) => void
  ): void;
  public executeScheduledQuery(
    args: ExecuteScheduledQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExecuteScheduledQueryCommandOutput) => void),
    cb?: (err: any, data?: ExecuteScheduledQueryCommandOutput) => void
  ): Promise<ExecuteScheduledQueryCommandOutput> | void {
    const command = new ExecuteScheduledQueryCommand(args);
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
   * <p>Gets a list of all scheduled queries in the caller's Amazon account and Region. <code>ListScheduledQueries</code> is eventually consistent. </p>
   */
  public listScheduledQueries(
    args: ListScheduledQueriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListScheduledQueriesCommandOutput>;
  public listScheduledQueries(
    args: ListScheduledQueriesCommandInput,
    cb: (err: any, data?: ListScheduledQueriesCommandOutput) => void
  ): void;
  public listScheduledQueries(
    args: ListScheduledQueriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScheduledQueriesCommandOutput) => void
  ): void;
  public listScheduledQueries(
    args: ListScheduledQueriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListScheduledQueriesCommandOutput) => void),
    cb?: (err: any, data?: ListScheduledQueriesCommandOutput) => void
  ): Promise<ListScheduledQueriesCommandOutput> | void {
    const command = new ListScheduledQueriesCommand(args);
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
   * <p>List all tags on a Timestream query resource.</p>
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
   * <p>A synchronous operation that allows you to submit a query with parameters to be stored
   *             by Timestream for later running. Timestream only supports using this operation with the
   *                 <code>PrepareQueryRequest$ValidateOnly</code> set to <code>true</code>. </p>
   */
  public prepareQuery(
    args: PrepareQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PrepareQueryCommandOutput>;
  public prepareQuery(args: PrepareQueryCommandInput, cb: (err: any, data?: PrepareQueryCommandOutput) => void): void;
  public prepareQuery(
    args: PrepareQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PrepareQueryCommandOutput) => void
  ): void;
  public prepareQuery(
    args: PrepareQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PrepareQueryCommandOutput) => void),
    cb?: (err: any, data?: PrepareQueryCommandOutput) => void
  ): Promise<PrepareQueryCommandOutput> | void {
    const command = new PrepareQueryCommand(args);
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
   *             <code>Query</code> is a synchronous operation that enables you to run a query against
   *             your Amazon Timestream data. <code>Query</code> will time out after 60 seconds.
   *             You must update the default timeout in the SDK to support a timeout of 60 seconds. See
   *             the <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/code-samples.run-query.html">code
   *                 sample</a> for details. </p>
   *         <p>Your query request will fail in the following cases:</p>
   *         <ul>
   *             <li>
   *                 <p> If you submit a <code>Query</code> request with the same client token outside
   *                     of the 5-minute idempotency window. </p>
   *             </li>
   *             <li>
   *                 <p> If you submit a <code>Query</code> request with the same client token, but
   *                     change other parameters, within the 5-minute idempotency window. </p>
   *             </li>
   *             <li>
   *                 <p> If the size of the row (including the query metadata) exceeds 1 MB, then the
   *                     query will fail with the following error message: </p>
   *                 <p>
   *                   <code>Query aborted as max page response size has been exceeded by the output
   *                         result row</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p> If the IAM principal of the query initiator and the result reader are not the
   *                     same and/or the query initiator and the result reader do not have the same query
   *                     string in the query requests, the query will fail with an <code>Invalid
   *                         pagination token</code> error. </p>
   *             </li>
   *          </ul>
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
   * <p>Associate a set of tags with a Timestream resource. You can then activate these
   *             user-defined tags so that they appear on the Billing and Cost Management console for
   *             cost allocation tracking. </p>
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
   * <p>Removes the association of tags from a Timestream query resource.</p>
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
   * <p>Update a scheduled query.</p>
   */
  public updateScheduledQuery(
    args: UpdateScheduledQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateScheduledQueryCommandOutput>;
  public updateScheduledQuery(
    args: UpdateScheduledQueryCommandInput,
    cb: (err: any, data?: UpdateScheduledQueryCommandOutput) => void
  ): void;
  public updateScheduledQuery(
    args: UpdateScheduledQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateScheduledQueryCommandOutput) => void
  ): void;
  public updateScheduledQuery(
    args: UpdateScheduledQueryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateScheduledQueryCommandOutput) => void),
    cb?: (err: any, data?: UpdateScheduledQueryCommandOutput) => void
  ): Promise<UpdateScheduledQueryCommandOutput> | void {
    const command = new UpdateScheduledQueryCommand(args);
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
