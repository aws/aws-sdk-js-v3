import { PIClient } from "./PIClient";
import {
  DescribeDimensionKeysCommand,
  DescribeDimensionKeysCommandInput,
  DescribeDimensionKeysCommandOutput,
} from "./commands/DescribeDimensionKeysCommand";
import {
  GetResourceMetricsCommand,
  GetResourceMetricsCommandInput,
  GetResourceMetricsCommandOutput,
} from "./commands/GetResourceMetricsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>AWS Performance Insights enables you to monitor and explore different dimensions of
 *       database load based on data captured from a running RDS instance. The guide provides detailed
 *       information about Performance Insights data types, parameters and errors. For more information
 *       about Performance Insights capabilities see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon RDS Performance
 *         Insights </a> in the <i>Amazon RDS User Guide</i>.</p>
 *
 *          <p> The AWS Performance Insights API provides visibility into the performance of your RDS
 *       instance, when Performance Insights is enabled for supported engine types. While Amazon
 *       CloudWatch provides the authoritative source for AWS service vended monitoring metrics, AWS
 *       Performance Insights offers a domain-specific view of database load measured as Average Active
 *       Sessions and provided to API consumers as a 2-dimensional time-series dataset. The time
 *       dimension of the data provides DB load data for each time point in the queried time range, and
 *       each time point decomposes overall load in relation to the requested dimensions, such as SQL,
 *       Wait-event, User or Host, measured at that time point.</p>
 */
export class PI extends PIClient {
  /**
   * <p>For a specific time period, retrieve the top <code>N</code> dimension keys for a
   *       metric.</p>
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
   * <p>Retrieve Performance Insights metrics for a set of data sources, over a time period. You can provide
   *       specific dimension groups and dimensions, and provide aggregation and filtering criteria for
   *       each group.</p>
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
}
