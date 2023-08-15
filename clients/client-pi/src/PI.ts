// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreatePerformanceAnalysisReportCommand,
  CreatePerformanceAnalysisReportCommandInput,
  CreatePerformanceAnalysisReportCommandOutput,
} from "./commands/CreatePerformanceAnalysisReportCommand";
import {
  DeletePerformanceAnalysisReportCommand,
  DeletePerformanceAnalysisReportCommandInput,
  DeletePerformanceAnalysisReportCommandOutput,
} from "./commands/DeletePerformanceAnalysisReportCommand";
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
  GetPerformanceAnalysisReportCommand,
  GetPerformanceAnalysisReportCommandInput,
  GetPerformanceAnalysisReportCommandOutput,
} from "./commands/GetPerformanceAnalysisReportCommand";
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
import {
  ListPerformanceAnalysisReportsCommand,
  ListPerformanceAnalysisReportsCommandInput,
  ListPerformanceAnalysisReportsCommandOutput,
} from "./commands/ListPerformanceAnalysisReportsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { PIClient, PIClientConfig } from "./PIClient";

const commands = {
  CreatePerformanceAnalysisReportCommand,
  DeletePerformanceAnalysisReportCommand,
  DescribeDimensionKeysCommand,
  GetDimensionKeyDetailsCommand,
  GetPerformanceAnalysisReportCommand,
  GetResourceMetadataCommand,
  GetResourceMetricsCommand,
  ListAvailableResourceDimensionsCommand,
  ListAvailableResourceMetricsCommand,
  ListPerformanceAnalysisReportsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface PI {
  /**
   * @see {@link CreatePerformanceAnalysisReportCommand}
   */
  createPerformanceAnalysisReport(
    args: CreatePerformanceAnalysisReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePerformanceAnalysisReportCommandOutput>;
  createPerformanceAnalysisReport(
    args: CreatePerformanceAnalysisReportCommandInput,
    cb: (err: any, data?: CreatePerformanceAnalysisReportCommandOutput) => void
  ): void;
  createPerformanceAnalysisReport(
    args: CreatePerformanceAnalysisReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePerformanceAnalysisReportCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePerformanceAnalysisReportCommand}
   */
  deletePerformanceAnalysisReport(
    args: DeletePerformanceAnalysisReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePerformanceAnalysisReportCommandOutput>;
  deletePerformanceAnalysisReport(
    args: DeletePerformanceAnalysisReportCommandInput,
    cb: (err: any, data?: DeletePerformanceAnalysisReportCommandOutput) => void
  ): void;
  deletePerformanceAnalysisReport(
    args: DeletePerformanceAnalysisReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePerformanceAnalysisReportCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDimensionKeysCommand}
   */
  describeDimensionKeys(
    args: DescribeDimensionKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDimensionKeysCommandOutput>;
  describeDimensionKeys(
    args: DescribeDimensionKeysCommandInput,
    cb: (err: any, data?: DescribeDimensionKeysCommandOutput) => void
  ): void;
  describeDimensionKeys(
    args: DescribeDimensionKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDimensionKeysCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDimensionKeyDetailsCommand}
   */
  getDimensionKeyDetails(
    args: GetDimensionKeyDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDimensionKeyDetailsCommandOutput>;
  getDimensionKeyDetails(
    args: GetDimensionKeyDetailsCommandInput,
    cb: (err: any, data?: GetDimensionKeyDetailsCommandOutput) => void
  ): void;
  getDimensionKeyDetails(
    args: GetDimensionKeyDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDimensionKeyDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPerformanceAnalysisReportCommand}
   */
  getPerformanceAnalysisReport(
    args: GetPerformanceAnalysisReportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPerformanceAnalysisReportCommandOutput>;
  getPerformanceAnalysisReport(
    args: GetPerformanceAnalysisReportCommandInput,
    cb: (err: any, data?: GetPerformanceAnalysisReportCommandOutput) => void
  ): void;
  getPerformanceAnalysisReport(
    args: GetPerformanceAnalysisReportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPerformanceAnalysisReportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceMetadataCommand}
   */
  getResourceMetadata(
    args: GetResourceMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceMetadataCommandOutput>;
  getResourceMetadata(
    args: GetResourceMetadataCommandInput,
    cb: (err: any, data?: GetResourceMetadataCommandOutput) => void
  ): void;
  getResourceMetadata(
    args: GetResourceMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceMetricsCommand}
   */
  getResourceMetrics(
    args: GetResourceMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceMetricsCommandOutput>;
  getResourceMetrics(
    args: GetResourceMetricsCommandInput,
    cb: (err: any, data?: GetResourceMetricsCommandOutput) => void
  ): void;
  getResourceMetrics(
    args: GetResourceMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAvailableResourceDimensionsCommand}
   */
  listAvailableResourceDimensions(
    args: ListAvailableResourceDimensionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAvailableResourceDimensionsCommandOutput>;
  listAvailableResourceDimensions(
    args: ListAvailableResourceDimensionsCommandInput,
    cb: (err: any, data?: ListAvailableResourceDimensionsCommandOutput) => void
  ): void;
  listAvailableResourceDimensions(
    args: ListAvailableResourceDimensionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAvailableResourceDimensionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAvailableResourceMetricsCommand}
   */
  listAvailableResourceMetrics(
    args: ListAvailableResourceMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAvailableResourceMetricsCommandOutput>;
  listAvailableResourceMetrics(
    args: ListAvailableResourceMetricsCommandInput,
    cb: (err: any, data?: ListAvailableResourceMetricsCommandOutput) => void
  ): void;
  listAvailableResourceMetrics(
    args: ListAvailableResourceMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAvailableResourceMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPerformanceAnalysisReportsCommand}
   */
  listPerformanceAnalysisReports(
    args: ListPerformanceAnalysisReportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPerformanceAnalysisReportsCommandOutput>;
  listPerformanceAnalysisReports(
    args: ListPerformanceAnalysisReportsCommandInput,
    cb: (err: any, data?: ListPerformanceAnalysisReportsCommandOutput) => void
  ): void;
  listPerformanceAnalysisReports(
    args: ListPerformanceAnalysisReportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPerformanceAnalysisReportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
}

/**
 * @public
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
 *                <p>To learn more about Performance Insights and Amazon DocumentDB clusters, go to the <i>
 *                      <a href="https://docs.aws.amazon.com/documentdb/latest/developerguide/performance-insights.html"> Amazon DocumentDB Developer Guide</a>
 *                   </i>.</p>
 *             </li>
 *          </ul>
 */
export class PI extends PIClient implements PI {}
createAggregatedClient(commands, PI);
