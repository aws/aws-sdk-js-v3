// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type CancelGremlinQueryCommandInput,
  type CancelGremlinQueryCommandOutput,
  CancelGremlinQueryCommand,
} from "./commands/CancelGremlinQueryCommand";
import {
  type CancelLoaderJobCommandInput,
  type CancelLoaderJobCommandOutput,
  CancelLoaderJobCommand,
} from "./commands/CancelLoaderJobCommand";
import {
  type CancelMLDataProcessingJobCommandInput,
  type CancelMLDataProcessingJobCommandOutput,
  CancelMLDataProcessingJobCommand,
} from "./commands/CancelMLDataProcessingJobCommand";
import {
  type CancelMLModelTrainingJobCommandInput,
  type CancelMLModelTrainingJobCommandOutput,
  CancelMLModelTrainingJobCommand,
} from "./commands/CancelMLModelTrainingJobCommand";
import {
  type CancelMLModelTransformJobCommandInput,
  type CancelMLModelTransformJobCommandOutput,
  CancelMLModelTransformJobCommand,
} from "./commands/CancelMLModelTransformJobCommand";
import {
  type CancelOpenCypherQueryCommandInput,
  type CancelOpenCypherQueryCommandOutput,
  CancelOpenCypherQueryCommand,
} from "./commands/CancelOpenCypherQueryCommand";
import {
  type CreateMLEndpointCommandInput,
  type CreateMLEndpointCommandOutput,
  CreateMLEndpointCommand,
} from "./commands/CreateMLEndpointCommand";
import {
  type DeleteMLEndpointCommandInput,
  type DeleteMLEndpointCommandOutput,
  DeleteMLEndpointCommand,
} from "./commands/DeleteMLEndpointCommand";
import {
  type DeletePropertygraphStatisticsCommandInput,
  type DeletePropertygraphStatisticsCommandOutput,
  DeletePropertygraphStatisticsCommand,
} from "./commands/DeletePropertygraphStatisticsCommand";
import {
  type DeleteSparqlStatisticsCommandInput,
  type DeleteSparqlStatisticsCommandOutput,
  DeleteSparqlStatisticsCommand,
} from "./commands/DeleteSparqlStatisticsCommand";
import {
  type ExecuteFastResetCommandInput,
  type ExecuteFastResetCommandOutput,
  ExecuteFastResetCommand,
} from "./commands/ExecuteFastResetCommand";
import {
  type ExecuteGremlinExplainQueryCommandInput,
  type ExecuteGremlinExplainQueryCommandOutput,
  ExecuteGremlinExplainQueryCommand,
} from "./commands/ExecuteGremlinExplainQueryCommand";
import {
  type ExecuteGremlinProfileQueryCommandInput,
  type ExecuteGremlinProfileQueryCommandOutput,
  ExecuteGremlinProfileQueryCommand,
} from "./commands/ExecuteGremlinProfileQueryCommand";
import {
  type ExecuteGremlinQueryCommandInput,
  type ExecuteGremlinQueryCommandOutput,
  ExecuteGremlinQueryCommand,
} from "./commands/ExecuteGremlinQueryCommand";
import {
  type ExecuteOpenCypherExplainQueryCommandInput,
  type ExecuteOpenCypherExplainQueryCommandOutput,
  ExecuteOpenCypherExplainQueryCommand,
} from "./commands/ExecuteOpenCypherExplainQueryCommand";
import {
  type ExecuteOpenCypherQueryCommandInput,
  type ExecuteOpenCypherQueryCommandOutput,
  ExecuteOpenCypherQueryCommand,
} from "./commands/ExecuteOpenCypherQueryCommand";
import {
  type GetEngineStatusCommandInput,
  type GetEngineStatusCommandOutput,
  GetEngineStatusCommand,
} from "./commands/GetEngineStatusCommand";
import {
  type GetGremlinQueryStatusCommandInput,
  type GetGremlinQueryStatusCommandOutput,
  GetGremlinQueryStatusCommand,
} from "./commands/GetGremlinQueryStatusCommand";
import {
  type GetLoaderJobStatusCommandInput,
  type GetLoaderJobStatusCommandOutput,
  GetLoaderJobStatusCommand,
} from "./commands/GetLoaderJobStatusCommand";
import {
  type GetMLDataProcessingJobCommandInput,
  type GetMLDataProcessingJobCommandOutput,
  GetMLDataProcessingJobCommand,
} from "./commands/GetMLDataProcessingJobCommand";
import {
  type GetMLEndpointCommandInput,
  type GetMLEndpointCommandOutput,
  GetMLEndpointCommand,
} from "./commands/GetMLEndpointCommand";
import {
  type GetMLModelTrainingJobCommandInput,
  type GetMLModelTrainingJobCommandOutput,
  GetMLModelTrainingJobCommand,
} from "./commands/GetMLModelTrainingJobCommand";
import {
  type GetMLModelTransformJobCommandInput,
  type GetMLModelTransformJobCommandOutput,
  GetMLModelTransformJobCommand,
} from "./commands/GetMLModelTransformJobCommand";
import {
  type GetOpenCypherQueryStatusCommandInput,
  type GetOpenCypherQueryStatusCommandOutput,
  GetOpenCypherQueryStatusCommand,
} from "./commands/GetOpenCypherQueryStatusCommand";
import {
  type GetPropertygraphStatisticsCommandInput,
  type GetPropertygraphStatisticsCommandOutput,
  GetPropertygraphStatisticsCommand,
} from "./commands/GetPropertygraphStatisticsCommand";
import {
  type GetPropertygraphStreamCommandInput,
  type GetPropertygraphStreamCommandOutput,
  GetPropertygraphStreamCommand,
} from "./commands/GetPropertygraphStreamCommand";
import {
  type GetPropertygraphSummaryCommandInput,
  type GetPropertygraphSummaryCommandOutput,
  GetPropertygraphSummaryCommand,
} from "./commands/GetPropertygraphSummaryCommand";
import {
  type GetRDFGraphSummaryCommandInput,
  type GetRDFGraphSummaryCommandOutput,
  GetRDFGraphSummaryCommand,
} from "./commands/GetRDFGraphSummaryCommand";
import {
  type GetSparqlStatisticsCommandInput,
  type GetSparqlStatisticsCommandOutput,
  GetSparqlStatisticsCommand,
} from "./commands/GetSparqlStatisticsCommand";
import {
  type GetSparqlStreamCommandInput,
  type GetSparqlStreamCommandOutput,
  GetSparqlStreamCommand,
} from "./commands/GetSparqlStreamCommand";
import {
  type ListGremlinQueriesCommandInput,
  type ListGremlinQueriesCommandOutput,
  ListGremlinQueriesCommand,
} from "./commands/ListGremlinQueriesCommand";
import {
  type ListLoaderJobsCommandInput,
  type ListLoaderJobsCommandOutput,
  ListLoaderJobsCommand,
} from "./commands/ListLoaderJobsCommand";
import {
  type ListMLDataProcessingJobsCommandInput,
  type ListMLDataProcessingJobsCommandOutput,
  ListMLDataProcessingJobsCommand,
} from "./commands/ListMLDataProcessingJobsCommand";
import {
  type ListMLEndpointsCommandInput,
  type ListMLEndpointsCommandOutput,
  ListMLEndpointsCommand,
} from "./commands/ListMLEndpointsCommand";
import {
  type ListMLModelTrainingJobsCommandInput,
  type ListMLModelTrainingJobsCommandOutput,
  ListMLModelTrainingJobsCommand,
} from "./commands/ListMLModelTrainingJobsCommand";
import {
  type ListMLModelTransformJobsCommandInput,
  type ListMLModelTransformJobsCommandOutput,
  ListMLModelTransformJobsCommand,
} from "./commands/ListMLModelTransformJobsCommand";
import {
  type ListOpenCypherQueriesCommandInput,
  type ListOpenCypherQueriesCommandOutput,
  ListOpenCypherQueriesCommand,
} from "./commands/ListOpenCypherQueriesCommand";
import {
  type ManagePropertygraphStatisticsCommandInput,
  type ManagePropertygraphStatisticsCommandOutput,
  ManagePropertygraphStatisticsCommand,
} from "./commands/ManagePropertygraphStatisticsCommand";
import {
  type ManageSparqlStatisticsCommandInput,
  type ManageSparqlStatisticsCommandOutput,
  ManageSparqlStatisticsCommand,
} from "./commands/ManageSparqlStatisticsCommand";
import {
  type StartLoaderJobCommandInput,
  type StartLoaderJobCommandOutput,
  StartLoaderJobCommand,
} from "./commands/StartLoaderJobCommand";
import {
  type StartMLDataProcessingJobCommandInput,
  type StartMLDataProcessingJobCommandOutput,
  StartMLDataProcessingJobCommand,
} from "./commands/StartMLDataProcessingJobCommand";
import {
  type StartMLModelTrainingJobCommandInput,
  type StartMLModelTrainingJobCommandOutput,
  StartMLModelTrainingJobCommand,
} from "./commands/StartMLModelTrainingJobCommand";
import {
  type StartMLModelTransformJobCommandInput,
  type StartMLModelTransformJobCommandOutput,
  StartMLModelTransformJobCommand,
} from "./commands/StartMLModelTransformJobCommand";
import { NeptunedataClient } from "./NeptunedataClient";

const commands = {
  CancelGremlinQueryCommand,
  CancelLoaderJobCommand,
  CancelMLDataProcessingJobCommand,
  CancelMLModelTrainingJobCommand,
  CancelMLModelTransformJobCommand,
  CancelOpenCypherQueryCommand,
  CreateMLEndpointCommand,
  DeleteMLEndpointCommand,
  DeletePropertygraphStatisticsCommand,
  DeleteSparqlStatisticsCommand,
  ExecuteFastResetCommand,
  ExecuteGremlinExplainQueryCommand,
  ExecuteGremlinProfileQueryCommand,
  ExecuteGremlinQueryCommand,
  ExecuteOpenCypherExplainQueryCommand,
  ExecuteOpenCypherQueryCommand,
  GetEngineStatusCommand,
  GetGremlinQueryStatusCommand,
  GetLoaderJobStatusCommand,
  GetMLDataProcessingJobCommand,
  GetMLEndpointCommand,
  GetMLModelTrainingJobCommand,
  GetMLModelTransformJobCommand,
  GetOpenCypherQueryStatusCommand,
  GetPropertygraphStatisticsCommand,
  GetPropertygraphStreamCommand,
  GetPropertygraphSummaryCommand,
  GetRDFGraphSummaryCommand,
  GetSparqlStatisticsCommand,
  GetSparqlStreamCommand,
  ListGremlinQueriesCommand,
  ListLoaderJobsCommand,
  ListMLDataProcessingJobsCommand,
  ListMLEndpointsCommand,
  ListMLModelTrainingJobsCommand,
  ListMLModelTransformJobsCommand,
  ListOpenCypherQueriesCommand,
  ManagePropertygraphStatisticsCommand,
  ManageSparqlStatisticsCommand,
  StartLoaderJobCommand,
  StartMLDataProcessingJobCommand,
  StartMLModelTrainingJobCommand,
  StartMLModelTransformJobCommand,
};

/**
 * @public
 */
export interface NeptunedataRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Neptunedata {
  /**
   * @see {@link CancelGremlinQueryCommand}
   */
  cancelGremlinQuery(
    args: CancelGremlinQueryCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<CancelGremlinQueryCommandOutput>;
  cancelGremlinQuery(
    args: CancelGremlinQueryCommandInput,
    cb: (err: any, data?: CancelGremlinQueryCommandOutput) => void
  ): void;
  cancelGremlinQuery(
    args: CancelGremlinQueryCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: CancelGremlinQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelLoaderJobCommand}
   */
  cancelLoaderJob(
    args: CancelLoaderJobCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<CancelLoaderJobCommandOutput>;
  cancelLoaderJob(
    args: CancelLoaderJobCommandInput,
    cb: (err: any, data?: CancelLoaderJobCommandOutput) => void
  ): void;
  cancelLoaderJob(
    args: CancelLoaderJobCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: CancelLoaderJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelMLDataProcessingJobCommand}
   */
  cancelMLDataProcessingJob(
    args: CancelMLDataProcessingJobCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<CancelMLDataProcessingJobCommandOutput>;
  cancelMLDataProcessingJob(
    args: CancelMLDataProcessingJobCommandInput,
    cb: (err: any, data?: CancelMLDataProcessingJobCommandOutput) => void
  ): void;
  cancelMLDataProcessingJob(
    args: CancelMLDataProcessingJobCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: CancelMLDataProcessingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelMLModelTrainingJobCommand}
   */
  cancelMLModelTrainingJob(
    args: CancelMLModelTrainingJobCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<CancelMLModelTrainingJobCommandOutput>;
  cancelMLModelTrainingJob(
    args: CancelMLModelTrainingJobCommandInput,
    cb: (err: any, data?: CancelMLModelTrainingJobCommandOutput) => void
  ): void;
  cancelMLModelTrainingJob(
    args: CancelMLModelTrainingJobCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: CancelMLModelTrainingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelMLModelTransformJobCommand}
   */
  cancelMLModelTransformJob(
    args: CancelMLModelTransformJobCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<CancelMLModelTransformJobCommandOutput>;
  cancelMLModelTransformJob(
    args: CancelMLModelTransformJobCommandInput,
    cb: (err: any, data?: CancelMLModelTransformJobCommandOutput) => void
  ): void;
  cancelMLModelTransformJob(
    args: CancelMLModelTransformJobCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: CancelMLModelTransformJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelOpenCypherQueryCommand}
   */
  cancelOpenCypherQuery(
    args: CancelOpenCypherQueryCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<CancelOpenCypherQueryCommandOutput>;
  cancelOpenCypherQuery(
    args: CancelOpenCypherQueryCommandInput,
    cb: (err: any, data?: CancelOpenCypherQueryCommandOutput) => void
  ): void;
  cancelOpenCypherQuery(
    args: CancelOpenCypherQueryCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: CancelOpenCypherQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMLEndpointCommand}
   */
  createMLEndpoint(): Promise<CreateMLEndpointCommandOutput>;
  createMLEndpoint(
    args: CreateMLEndpointCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<CreateMLEndpointCommandOutput>;
  createMLEndpoint(
    args: CreateMLEndpointCommandInput,
    cb: (err: any, data?: CreateMLEndpointCommandOutput) => void
  ): void;
  createMLEndpoint(
    args: CreateMLEndpointCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: CreateMLEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMLEndpointCommand}
   */
  deleteMLEndpoint(
    args: DeleteMLEndpointCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<DeleteMLEndpointCommandOutput>;
  deleteMLEndpoint(
    args: DeleteMLEndpointCommandInput,
    cb: (err: any, data?: DeleteMLEndpointCommandOutput) => void
  ): void;
  deleteMLEndpoint(
    args: DeleteMLEndpointCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: DeleteMLEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePropertygraphStatisticsCommand}
   */
  deletePropertygraphStatistics(): Promise<DeletePropertygraphStatisticsCommandOutput>;
  deletePropertygraphStatistics(
    args: DeletePropertygraphStatisticsCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<DeletePropertygraphStatisticsCommandOutput>;
  deletePropertygraphStatistics(
    args: DeletePropertygraphStatisticsCommandInput,
    cb: (err: any, data?: DeletePropertygraphStatisticsCommandOutput) => void
  ): void;
  deletePropertygraphStatistics(
    args: DeletePropertygraphStatisticsCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: DeletePropertygraphStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSparqlStatisticsCommand}
   */
  deleteSparqlStatistics(): Promise<DeleteSparqlStatisticsCommandOutput>;
  deleteSparqlStatistics(
    args: DeleteSparqlStatisticsCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<DeleteSparqlStatisticsCommandOutput>;
  deleteSparqlStatistics(
    args: DeleteSparqlStatisticsCommandInput,
    cb: (err: any, data?: DeleteSparqlStatisticsCommandOutput) => void
  ): void;
  deleteSparqlStatistics(
    args: DeleteSparqlStatisticsCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: DeleteSparqlStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteFastResetCommand}
   */
  executeFastReset(
    args: ExecuteFastResetCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<ExecuteFastResetCommandOutput>;
  executeFastReset(
    args: ExecuteFastResetCommandInput,
    cb: (err: any, data?: ExecuteFastResetCommandOutput) => void
  ): void;
  executeFastReset(
    args: ExecuteFastResetCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: ExecuteFastResetCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteGremlinExplainQueryCommand}
   */
  executeGremlinExplainQuery(
    args: ExecuteGremlinExplainQueryCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<ExecuteGremlinExplainQueryCommandOutput>;
  executeGremlinExplainQuery(
    args: ExecuteGremlinExplainQueryCommandInput,
    cb: (err: any, data?: ExecuteGremlinExplainQueryCommandOutput) => void
  ): void;
  executeGremlinExplainQuery(
    args: ExecuteGremlinExplainQueryCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: ExecuteGremlinExplainQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteGremlinProfileQueryCommand}
   */
  executeGremlinProfileQuery(
    args: ExecuteGremlinProfileQueryCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<ExecuteGremlinProfileQueryCommandOutput>;
  executeGremlinProfileQuery(
    args: ExecuteGremlinProfileQueryCommandInput,
    cb: (err: any, data?: ExecuteGremlinProfileQueryCommandOutput) => void
  ): void;
  executeGremlinProfileQuery(
    args: ExecuteGremlinProfileQueryCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: ExecuteGremlinProfileQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteGremlinQueryCommand}
   */
  executeGremlinQuery(
    args: ExecuteGremlinQueryCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<ExecuteGremlinQueryCommandOutput>;
  executeGremlinQuery(
    args: ExecuteGremlinQueryCommandInput,
    cb: (err: any, data?: ExecuteGremlinQueryCommandOutput) => void
  ): void;
  executeGremlinQuery(
    args: ExecuteGremlinQueryCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: ExecuteGremlinQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteOpenCypherExplainQueryCommand}
   */
  executeOpenCypherExplainQuery(
    args: ExecuteOpenCypherExplainQueryCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<ExecuteOpenCypherExplainQueryCommandOutput>;
  executeOpenCypherExplainQuery(
    args: ExecuteOpenCypherExplainQueryCommandInput,
    cb: (err: any, data?: ExecuteOpenCypherExplainQueryCommandOutput) => void
  ): void;
  executeOpenCypherExplainQuery(
    args: ExecuteOpenCypherExplainQueryCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: ExecuteOpenCypherExplainQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteOpenCypherQueryCommand}
   */
  executeOpenCypherQuery(
    args: ExecuteOpenCypherQueryCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<ExecuteOpenCypherQueryCommandOutput>;
  executeOpenCypherQuery(
    args: ExecuteOpenCypherQueryCommandInput,
    cb: (err: any, data?: ExecuteOpenCypherQueryCommandOutput) => void
  ): void;
  executeOpenCypherQuery(
    args: ExecuteOpenCypherQueryCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: ExecuteOpenCypherQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEngineStatusCommand}
   */
  getEngineStatus(): Promise<GetEngineStatusCommandOutput>;
  getEngineStatus(
    args: GetEngineStatusCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<GetEngineStatusCommandOutput>;
  getEngineStatus(
    args: GetEngineStatusCommandInput,
    cb: (err: any, data?: GetEngineStatusCommandOutput) => void
  ): void;
  getEngineStatus(
    args: GetEngineStatusCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: GetEngineStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetGremlinQueryStatusCommand}
   */
  getGremlinQueryStatus(
    args: GetGremlinQueryStatusCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<GetGremlinQueryStatusCommandOutput>;
  getGremlinQueryStatus(
    args: GetGremlinQueryStatusCommandInput,
    cb: (err: any, data?: GetGremlinQueryStatusCommandOutput) => void
  ): void;
  getGremlinQueryStatus(
    args: GetGremlinQueryStatusCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: GetGremlinQueryStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLoaderJobStatusCommand}
   */
  getLoaderJobStatus(
    args: GetLoaderJobStatusCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<GetLoaderJobStatusCommandOutput>;
  getLoaderJobStatus(
    args: GetLoaderJobStatusCommandInput,
    cb: (err: any, data?: GetLoaderJobStatusCommandOutput) => void
  ): void;
  getLoaderJobStatus(
    args: GetLoaderJobStatusCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: GetLoaderJobStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMLDataProcessingJobCommand}
   */
  getMLDataProcessingJob(
    args: GetMLDataProcessingJobCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<GetMLDataProcessingJobCommandOutput>;
  getMLDataProcessingJob(
    args: GetMLDataProcessingJobCommandInput,
    cb: (err: any, data?: GetMLDataProcessingJobCommandOutput) => void
  ): void;
  getMLDataProcessingJob(
    args: GetMLDataProcessingJobCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: GetMLDataProcessingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMLEndpointCommand}
   */
  getMLEndpoint(
    args: GetMLEndpointCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<GetMLEndpointCommandOutput>;
  getMLEndpoint(
    args: GetMLEndpointCommandInput,
    cb: (err: any, data?: GetMLEndpointCommandOutput) => void
  ): void;
  getMLEndpoint(
    args: GetMLEndpointCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: GetMLEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMLModelTrainingJobCommand}
   */
  getMLModelTrainingJob(
    args: GetMLModelTrainingJobCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<GetMLModelTrainingJobCommandOutput>;
  getMLModelTrainingJob(
    args: GetMLModelTrainingJobCommandInput,
    cb: (err: any, data?: GetMLModelTrainingJobCommandOutput) => void
  ): void;
  getMLModelTrainingJob(
    args: GetMLModelTrainingJobCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: GetMLModelTrainingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMLModelTransformJobCommand}
   */
  getMLModelTransformJob(
    args: GetMLModelTransformJobCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<GetMLModelTransformJobCommandOutput>;
  getMLModelTransformJob(
    args: GetMLModelTransformJobCommandInput,
    cb: (err: any, data?: GetMLModelTransformJobCommandOutput) => void
  ): void;
  getMLModelTransformJob(
    args: GetMLModelTransformJobCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: GetMLModelTransformJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOpenCypherQueryStatusCommand}
   */
  getOpenCypherQueryStatus(
    args: GetOpenCypherQueryStatusCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<GetOpenCypherQueryStatusCommandOutput>;
  getOpenCypherQueryStatus(
    args: GetOpenCypherQueryStatusCommandInput,
    cb: (err: any, data?: GetOpenCypherQueryStatusCommandOutput) => void
  ): void;
  getOpenCypherQueryStatus(
    args: GetOpenCypherQueryStatusCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: GetOpenCypherQueryStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPropertygraphStatisticsCommand}
   */
  getPropertygraphStatistics(): Promise<GetPropertygraphStatisticsCommandOutput>;
  getPropertygraphStatistics(
    args: GetPropertygraphStatisticsCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<GetPropertygraphStatisticsCommandOutput>;
  getPropertygraphStatistics(
    args: GetPropertygraphStatisticsCommandInput,
    cb: (err: any, data?: GetPropertygraphStatisticsCommandOutput) => void
  ): void;
  getPropertygraphStatistics(
    args: GetPropertygraphStatisticsCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: GetPropertygraphStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPropertygraphStreamCommand}
   */
  getPropertygraphStream(): Promise<GetPropertygraphStreamCommandOutput>;
  getPropertygraphStream(
    args: GetPropertygraphStreamCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<GetPropertygraphStreamCommandOutput>;
  getPropertygraphStream(
    args: GetPropertygraphStreamCommandInput,
    cb: (err: any, data?: GetPropertygraphStreamCommandOutput) => void
  ): void;
  getPropertygraphStream(
    args: GetPropertygraphStreamCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: GetPropertygraphStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPropertygraphSummaryCommand}
   */
  getPropertygraphSummary(): Promise<GetPropertygraphSummaryCommandOutput>;
  getPropertygraphSummary(
    args: GetPropertygraphSummaryCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<GetPropertygraphSummaryCommandOutput>;
  getPropertygraphSummary(
    args: GetPropertygraphSummaryCommandInput,
    cb: (err: any, data?: GetPropertygraphSummaryCommandOutput) => void
  ): void;
  getPropertygraphSummary(
    args: GetPropertygraphSummaryCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: GetPropertygraphSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRDFGraphSummaryCommand}
   */
  getRDFGraphSummary(): Promise<GetRDFGraphSummaryCommandOutput>;
  getRDFGraphSummary(
    args: GetRDFGraphSummaryCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<GetRDFGraphSummaryCommandOutput>;
  getRDFGraphSummary(
    args: GetRDFGraphSummaryCommandInput,
    cb: (err: any, data?: GetRDFGraphSummaryCommandOutput) => void
  ): void;
  getRDFGraphSummary(
    args: GetRDFGraphSummaryCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: GetRDFGraphSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSparqlStatisticsCommand}
   */
  getSparqlStatistics(): Promise<GetSparqlStatisticsCommandOutput>;
  getSparqlStatistics(
    args: GetSparqlStatisticsCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<GetSparqlStatisticsCommandOutput>;
  getSparqlStatistics(
    args: GetSparqlStatisticsCommandInput,
    cb: (err: any, data?: GetSparqlStatisticsCommandOutput) => void
  ): void;
  getSparqlStatistics(
    args: GetSparqlStatisticsCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: GetSparqlStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSparqlStreamCommand}
   */
  getSparqlStream(): Promise<GetSparqlStreamCommandOutput>;
  getSparqlStream(
    args: GetSparqlStreamCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<GetSparqlStreamCommandOutput>;
  getSparqlStream(
    args: GetSparqlStreamCommandInput,
    cb: (err: any, data?: GetSparqlStreamCommandOutput) => void
  ): void;
  getSparqlStream(
    args: GetSparqlStreamCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: GetSparqlStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGremlinQueriesCommand}
   */
  listGremlinQueries(): Promise<ListGremlinQueriesCommandOutput>;
  listGremlinQueries(
    args: ListGremlinQueriesCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<ListGremlinQueriesCommandOutput>;
  listGremlinQueries(
    args: ListGremlinQueriesCommandInput,
    cb: (err: any, data?: ListGremlinQueriesCommandOutput) => void
  ): void;
  listGremlinQueries(
    args: ListGremlinQueriesCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: ListGremlinQueriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLoaderJobsCommand}
   */
  listLoaderJobs(): Promise<ListLoaderJobsCommandOutput>;
  listLoaderJobs(
    args: ListLoaderJobsCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<ListLoaderJobsCommandOutput>;
  listLoaderJobs(
    args: ListLoaderJobsCommandInput,
    cb: (err: any, data?: ListLoaderJobsCommandOutput) => void
  ): void;
  listLoaderJobs(
    args: ListLoaderJobsCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: ListLoaderJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMLDataProcessingJobsCommand}
   */
  listMLDataProcessingJobs(): Promise<ListMLDataProcessingJobsCommandOutput>;
  listMLDataProcessingJobs(
    args: ListMLDataProcessingJobsCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<ListMLDataProcessingJobsCommandOutput>;
  listMLDataProcessingJobs(
    args: ListMLDataProcessingJobsCommandInput,
    cb: (err: any, data?: ListMLDataProcessingJobsCommandOutput) => void
  ): void;
  listMLDataProcessingJobs(
    args: ListMLDataProcessingJobsCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: ListMLDataProcessingJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMLEndpointsCommand}
   */
  listMLEndpoints(): Promise<ListMLEndpointsCommandOutput>;
  listMLEndpoints(
    args: ListMLEndpointsCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<ListMLEndpointsCommandOutput>;
  listMLEndpoints(
    args: ListMLEndpointsCommandInput,
    cb: (err: any, data?: ListMLEndpointsCommandOutput) => void
  ): void;
  listMLEndpoints(
    args: ListMLEndpointsCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: ListMLEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMLModelTrainingJobsCommand}
   */
  listMLModelTrainingJobs(): Promise<ListMLModelTrainingJobsCommandOutput>;
  listMLModelTrainingJobs(
    args: ListMLModelTrainingJobsCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<ListMLModelTrainingJobsCommandOutput>;
  listMLModelTrainingJobs(
    args: ListMLModelTrainingJobsCommandInput,
    cb: (err: any, data?: ListMLModelTrainingJobsCommandOutput) => void
  ): void;
  listMLModelTrainingJobs(
    args: ListMLModelTrainingJobsCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: ListMLModelTrainingJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMLModelTransformJobsCommand}
   */
  listMLModelTransformJobs(): Promise<ListMLModelTransformJobsCommandOutput>;
  listMLModelTransformJobs(
    args: ListMLModelTransformJobsCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<ListMLModelTransformJobsCommandOutput>;
  listMLModelTransformJobs(
    args: ListMLModelTransformJobsCommandInput,
    cb: (err: any, data?: ListMLModelTransformJobsCommandOutput) => void
  ): void;
  listMLModelTransformJobs(
    args: ListMLModelTransformJobsCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: ListMLModelTransformJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOpenCypherQueriesCommand}
   */
  listOpenCypherQueries(): Promise<ListOpenCypherQueriesCommandOutput>;
  listOpenCypherQueries(
    args: ListOpenCypherQueriesCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<ListOpenCypherQueriesCommandOutput>;
  listOpenCypherQueries(
    args: ListOpenCypherQueriesCommandInput,
    cb: (err: any, data?: ListOpenCypherQueriesCommandOutput) => void
  ): void;
  listOpenCypherQueries(
    args: ListOpenCypherQueriesCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: ListOpenCypherQueriesCommandOutput) => void
  ): void;

  /**
   * @see {@link ManagePropertygraphStatisticsCommand}
   */
  managePropertygraphStatistics(): Promise<ManagePropertygraphStatisticsCommandOutput>;
  managePropertygraphStatistics(
    args: ManagePropertygraphStatisticsCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<ManagePropertygraphStatisticsCommandOutput>;
  managePropertygraphStatistics(
    args: ManagePropertygraphStatisticsCommandInput,
    cb: (err: any, data?: ManagePropertygraphStatisticsCommandOutput) => void
  ): void;
  managePropertygraphStatistics(
    args: ManagePropertygraphStatisticsCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: ManagePropertygraphStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link ManageSparqlStatisticsCommand}
   */
  manageSparqlStatistics(): Promise<ManageSparqlStatisticsCommandOutput>;
  manageSparqlStatistics(
    args: ManageSparqlStatisticsCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<ManageSparqlStatisticsCommandOutput>;
  manageSparqlStatistics(
    args: ManageSparqlStatisticsCommandInput,
    cb: (err: any, data?: ManageSparqlStatisticsCommandOutput) => void
  ): void;
  manageSparqlStatistics(
    args: ManageSparqlStatisticsCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: ManageSparqlStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartLoaderJobCommand}
   */
  startLoaderJob(
    args: StartLoaderJobCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<StartLoaderJobCommandOutput>;
  startLoaderJob(
    args: StartLoaderJobCommandInput,
    cb: (err: any, data?: StartLoaderJobCommandOutput) => void
  ): void;
  startLoaderJob(
    args: StartLoaderJobCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: StartLoaderJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMLDataProcessingJobCommand}
   */
  startMLDataProcessingJob(
    args: StartMLDataProcessingJobCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<StartMLDataProcessingJobCommandOutput>;
  startMLDataProcessingJob(
    args: StartMLDataProcessingJobCommandInput,
    cb: (err: any, data?: StartMLDataProcessingJobCommandOutput) => void
  ): void;
  startMLDataProcessingJob(
    args: StartMLDataProcessingJobCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: StartMLDataProcessingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMLModelTrainingJobCommand}
   */
  startMLModelTrainingJob(
    args: StartMLModelTrainingJobCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<StartMLModelTrainingJobCommandOutput>;
  startMLModelTrainingJob(
    args: StartMLModelTrainingJobCommandInput,
    cb: (err: any, data?: StartMLModelTrainingJobCommandOutput) => void
  ): void;
  startMLModelTrainingJob(
    args: StartMLModelTrainingJobCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: StartMLModelTrainingJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartMLModelTransformJobCommand}
   */
  startMLModelTransformJob(
    args: StartMLModelTransformJobCommandInput,
    options?: NeptunedataRequestOptions
  ): Promise<StartMLModelTransformJobCommandOutput>;
  startMLModelTransformJob(
    args: StartMLModelTransformJobCommandInput,
    cb: (err: any, data?: StartMLModelTransformJobCommandOutput) => void
  ): void;
  startMLModelTransformJob(
    args: StartMLModelTransformJobCommandInput,
    options: NeptunedataRequestOptions,
    cb: (err: any, data?: StartMLModelTransformJobCommandOutput) => void
  ): void;
}

/**
 * <fullname>Neptune Data API</fullname> <p>The Amazon Neptune data API provides SDK support for more than 40 of Neptune's data operations, including data loading, query execution, data inquiry, and machine learning. It supports the Gremlin and openCypher query languages, and is available in all SDK languages. It automatically signs API requests and greatly simplifies integrating Neptune into your applications.</p>
 * @public
 */
export class Neptunedata extends NeptunedataClient implements Neptunedata {}
createAggregatedClient(commands, Neptunedata);
