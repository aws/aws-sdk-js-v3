import { TimestreamQueryClient } from "./TimestreamQueryClient";
import { CancelQueryCommand, CancelQueryCommandInput, CancelQueryCommandOutput } from "./commands/CancelQueryCommand";
import {
  DescribeEndpointsCommand,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
} from "./commands/DescribeEndpointsCommand";
import { QueryCommand, QueryCommandInput, QueryCommandOutput } from "./commands/QueryCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>
 *
 *         </p>
 */
export class TimestreamQuery extends TimestreamQueryClient {
  /**
   * <p>
   *         Cancels a query that has been issued. Cancellation is guaranteed only if the query has not
   *         completed execution before the cancellation request was issued. Because cancellation is an idempotent operation,
   *         subsequent cancellation requests will return a <code>CancellationMessage</code>, indicating that the query has already been canceled.
   *     </p>
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
   * <p>DescribeEndpoints returns a list of available endpoints to make Timestream API calls against.
   *             This API is available through both Write and Query.</p>
   *         <p>Because Timestream’s SDKs are designed to transparently work with the service’s architecture,
   *             including the management and mapping of the service endpoints,
   *             <i>it is not recommended that you use this API unless</i>:</p>
   *         <ul>
   *             <li>
   *                <p>Your application uses a programming language that does not yet have SDK support</p>
   *             </li>
   *             <li>
   *                <p>You require better control over the client-side implementation</p>
   *             </li>
   *          </ul>
   *         <p>For detailed information on how to use DescribeEndpoints,
   *             see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/Using-API.endpoint-discovery.html">The Endpoint Discovery Pattern and REST APIs</a>.</p>
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
   * <p>
   *             Query is a synchronous operation that enables you to execute a query. Query will timeout after 60 seconds. You must update the default timeout in the SDK to support a timeout of 60 seconds. The result set will be truncated to 1MB. Service quotas apply. For more information, see Quotas in the Timestream Developer Guide.
   *         </p>
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
}
