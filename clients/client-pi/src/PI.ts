// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  DescribeDimensionKeysCommand,
  DescribeDimensionKeysCommandInput,
  DescribeDimensionKeysCommandOutput,
} from "./commands/DescribeDimensionKeysCommand";
import {
  GetDimensionKeyDetailsCommand,
  GetDimensionKeyDetailsCommandInput,
  GetDimensionKeyDetailsCommandOutput,
} from "./commands/GetDimensionKeyDetailsCommand";
import {
  GetResourceMetadataCommand,
  GetResourceMetadataCommandInput,
  GetResourceMetadataCommandOutput,
} from "./commands/GetResourceMetadataCommand";
import {
  GetResourceMetricsCommand,
  GetResourceMetricsCommandInput,
  GetResourceMetricsCommandOutput,
} from "./commands/GetResourceMetricsCommand";
import {
  ListAvailableResourceDimensionsCommand,
  ListAvailableResourceDimensionsCommandInput,
  ListAvailableResourceDimensionsCommandOutput,
} from "./commands/ListAvailableResourceDimensionsCommand";
import {
  ListAvailableResourceMetricsCommand,
  ListAvailableResourceMetricsCommandInput,
  ListAvailableResourceMetricsCommandOutput,
} from "./commands/ListAvailableResourceMetricsCommand";
import { PIClient } from "./PIClient";

/**
 * <fullname>Amazon RDS Performance Insights</fullname>
 *          <p>Amazon RDS Performance Insights enables you to monitor and explore different dimensions of database load based on data captured from a running DB instance. The guide
 *             provides detailed information about Performance Insights data types, parameters and errors.</p>
 *          <p>When Performance Insights is enabled, the Amazon RDS Performance Insights API provides visibility into the performance of your DB instance. Amazon CloudWatch provides the
 *             authoritative source for Amazon Web Services service-vended monitoring metrics. Performance Insights offers a domain-specific view of DB load.</p>
 *          <p>DB load is measured as average active sessions. Performance Insights provides the data to API consumers as a two-dimensional time-series dataset. The time dimension
 *             provides DB load data for each time point in the queried time range. Each time point decomposes overall load in relation to the requested
 *             dimensions, measured at that time point. Examples include SQL, Wait event, User, and Host.</p>
 *          <ul>
 *             <li>
 *                <p>To learn more about Performance Insights and Amazon Aurora DB instances, go to the <i>
 *                      <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_PerfInsights.html"> Amazon Aurora User Guide</a>
 *                   </i>. </p>
 *             </li>
 *             <li>
 *                <p>To learn more about Performance Insights and Amazon RDS DB instances, go to the <i>
 *                      <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html"> Amazon RDS User Guide</a>
 *                   </i>. </p>
 *             </li>
 *             <li>
 *               <p>To learn more about Performance Insights and Amazon DocumentDB clusters, go to the <i>
 *                      <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html"> Amazon DocumentDB Developer Guide</a>
 *                   </i>.</p>
 *             </li>
 *          </ul>
 */
export class PI extends PIClient {
  /**
   * <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a metric.
   *       </p>
   *          <note>
   *             <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements,
   *         only the first 500 bytes are returned.</p>
   *          </note>
   */
  public describeDimensionKeys(
    args: DescribeDimensionKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDimensionKeysCommandOutput>;
  public describeDimensionKeys(
    args: DescribeDimensionKeysCommandInput,
    cb: (err: any, data?: DescribeDimensionKeysCommandOutput) => void
  ): void;
  public describeDimensionKeys(
    args: DescribeDimensionKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDimensionKeysCommandOutput) => void
  ): void;
  public describeDimensionKeys(
    args: DescribeDimensionKeysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDimensionKeysCommandOutput) => void),
    cb?: (err: any, data?: DescribeDimensionKeysCommandOutput) => void
  ): Promise<DescribeDimensionKeysCommandOutput> | void {
    const command = new DescribeDimensionKeysCommand(args);
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
   * <p>Get the attributes of the specified dimension group for a DB instance or data source. For example, if you specify a SQL ID,
   *                 <code>GetDimensionKeyDetails</code> retrieves the full text of the dimension <code>db.sql.statement</code> associated with this ID.
   *             This operation is useful because <code>GetResourceMetrics</code> and <code>DescribeDimensionKeys</code> don't support retrieval of large
   *             SQL statement text.</p>
   */
  public getDimensionKeyDetails(
    args: GetDimensionKeyDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDimensionKeyDetailsCommandOutput>;
  public getDimensionKeyDetails(
    args: GetDimensionKeyDetailsCommandInput,
    cb: (err: any, data?: GetDimensionKeyDetailsCommandOutput) => void
  ): void;
  public getDimensionKeyDetails(
    args: GetDimensionKeyDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDimensionKeyDetailsCommandOutput) => void
  ): void;
  public getDimensionKeyDetails(
    args: GetDimensionKeyDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDimensionKeyDetailsCommandOutput) => void),
    cb?: (err: any, data?: GetDimensionKeyDetailsCommandOutput) => void
  ): Promise<GetDimensionKeyDetailsCommandOutput> | void {
    const command = new GetDimensionKeyDetailsCommand(args);
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
   * <p>Retrieve the metadata for different features. For example, the metadata might indicate
   *             that a feature is turned on or off on a specific DB instance.
   *         </p>
   */
  public getResourceMetadata(
    args: GetResourceMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceMetadataCommandOutput>;
  public getResourceMetadata(
    args: GetResourceMetadataCommandInput,
    cb: (err: any, data?: GetResourceMetadataCommandOutput) => void
  ): void;
  public getResourceMetadata(
    args: GetResourceMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceMetadataCommandOutput) => void
  ): void;
  public getResourceMetadata(
    args: GetResourceMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourceMetadataCommandOutput) => void),
    cb?: (err: any, data?: GetResourceMetadataCommandOutput) => void
  ): Promise<GetResourceMetadataCommandOutput> | void {
    const command = new GetResourceMetadataCommand(args);
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
   * <p>Retrieve Performance Insights metrics for a set of data sources over a time period. You can provide
   *       specific dimension groups and dimensions, and provide aggregation and filtering criteria for
   *       each group.</p>
   *          <note>
   *             <p>Each response element returns a maximum of 500 bytes. For larger elements, such as SQL statements,
   *                only the first 500 bytes are returned.</p>
   *          </note>
   */
  public getResourceMetrics(
    args: GetResourceMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceMetricsCommandOutput>;
  public getResourceMetrics(
    args: GetResourceMetricsCommandInput,
    cb: (err: any, data?: GetResourceMetricsCommandOutput) => void
  ): void;
  public getResourceMetrics(
    args: GetResourceMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceMetricsCommandOutput) => void
  ): void;
  public getResourceMetrics(
    args: GetResourceMetricsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourceMetricsCommandOutput) => void),
    cb?: (err: any, data?: GetResourceMetricsCommandOutput) => void
  ): Promise<GetResourceMetricsCommandOutput> | void {
    const command = new GetResourceMetricsCommand(args);
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
   * <p>Retrieve the dimensions that can be queried for each specified metric type on a specified DB instance.</p>
   */
  public listAvailableResourceDimensions(
    args: ListAvailableResourceDimensionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAvailableResourceDimensionsCommandOutput>;
  public listAvailableResourceDimensions(
    args: ListAvailableResourceDimensionsCommandInput,
    cb: (err: any, data?: ListAvailableResourceDimensionsCommandOutput) => void
  ): void;
  public listAvailableResourceDimensions(
    args: ListAvailableResourceDimensionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAvailableResourceDimensionsCommandOutput) => void
  ): void;
  public listAvailableResourceDimensions(
    args: ListAvailableResourceDimensionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAvailableResourceDimensionsCommandOutput) => void),
    cb?: (err: any, data?: ListAvailableResourceDimensionsCommandOutput) => void
  ): Promise<ListAvailableResourceDimensionsCommandOutput> | void {
    const command = new ListAvailableResourceDimensionsCommand(args);
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
   * <p>Retrieve metrics of the specified types that can be queried for a specified DB instance.
   *       </p>
   */
  public listAvailableResourceMetrics(
    args: ListAvailableResourceMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAvailableResourceMetricsCommandOutput>;
  public listAvailableResourceMetrics(
    args: ListAvailableResourceMetricsCommandInput,
    cb: (err: any, data?: ListAvailableResourceMetricsCommandOutput) => void
  ): void;
  public listAvailableResourceMetrics(
    args: ListAvailableResourceMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAvailableResourceMetricsCommandOutput) => void
  ): void;
  public listAvailableResourceMetrics(
    args: ListAvailableResourceMetricsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAvailableResourceMetricsCommandOutput) => void),
    cb?: (err: any, data?: ListAvailableResourceMetricsCommandOutput) => void
  ): Promise<ListAvailableResourceMetricsCommandOutput> | void {
    const command = new ListAvailableResourceMetricsCommand(args);
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
