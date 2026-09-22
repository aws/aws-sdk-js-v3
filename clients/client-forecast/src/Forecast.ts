// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CreateAutoPredictorCommandInput,
  type CreateAutoPredictorCommandOutput,
  CreateAutoPredictorCommand,
} from "./commands/CreateAutoPredictorCommand";
import {
  type CreateDatasetCommandInput,
  type CreateDatasetCommandOutput,
  CreateDatasetCommand,
} from "./commands/CreateDatasetCommand";
import {
  type CreateDatasetGroupCommandInput,
  type CreateDatasetGroupCommandOutput,
  CreateDatasetGroupCommand,
} from "./commands/CreateDatasetGroupCommand";
import {
  type CreateDatasetImportJobCommandInput,
  type CreateDatasetImportJobCommandOutput,
  CreateDatasetImportJobCommand,
} from "./commands/CreateDatasetImportJobCommand";
import {
  type CreateExplainabilityCommandInput,
  type CreateExplainabilityCommandOutput,
  CreateExplainabilityCommand,
} from "./commands/CreateExplainabilityCommand";
import {
  type CreateExplainabilityExportCommandInput,
  type CreateExplainabilityExportCommandOutput,
  CreateExplainabilityExportCommand,
} from "./commands/CreateExplainabilityExportCommand";
import {
  type CreateForecastCommandInput,
  type CreateForecastCommandOutput,
  CreateForecastCommand,
} from "./commands/CreateForecastCommand";
import {
  type CreateForecastExportJobCommandInput,
  type CreateForecastExportJobCommandOutput,
  CreateForecastExportJobCommand,
} from "./commands/CreateForecastExportJobCommand";
import {
  type CreateMonitorCommandInput,
  type CreateMonitorCommandOutput,
  CreateMonitorCommand,
} from "./commands/CreateMonitorCommand";
import {
  type CreatePredictorBacktestExportJobCommandInput,
  type CreatePredictorBacktestExportJobCommandOutput,
  CreatePredictorBacktestExportJobCommand,
} from "./commands/CreatePredictorBacktestExportJobCommand";
import {
  type CreatePredictorCommandInput,
  type CreatePredictorCommandOutput,
  CreatePredictorCommand,
} from "./commands/CreatePredictorCommand";
import {
  type CreateWhatIfAnalysisCommandInput,
  type CreateWhatIfAnalysisCommandOutput,
  CreateWhatIfAnalysisCommand,
} from "./commands/CreateWhatIfAnalysisCommand";
import {
  type CreateWhatIfForecastCommandInput,
  type CreateWhatIfForecastCommandOutput,
  CreateWhatIfForecastCommand,
} from "./commands/CreateWhatIfForecastCommand";
import {
  type CreateWhatIfForecastExportCommandInput,
  type CreateWhatIfForecastExportCommandOutput,
  CreateWhatIfForecastExportCommand,
} from "./commands/CreateWhatIfForecastExportCommand";
import {
  type DeleteDatasetCommandInput,
  type DeleteDatasetCommandOutput,
  DeleteDatasetCommand,
} from "./commands/DeleteDatasetCommand";
import {
  type DeleteDatasetGroupCommandInput,
  type DeleteDatasetGroupCommandOutput,
  DeleteDatasetGroupCommand,
} from "./commands/DeleteDatasetGroupCommand";
import {
  type DeleteDatasetImportJobCommandInput,
  type DeleteDatasetImportJobCommandOutput,
  DeleteDatasetImportJobCommand,
} from "./commands/DeleteDatasetImportJobCommand";
import {
  type DeleteExplainabilityCommandInput,
  type DeleteExplainabilityCommandOutput,
  DeleteExplainabilityCommand,
} from "./commands/DeleteExplainabilityCommand";
import {
  type DeleteExplainabilityExportCommandInput,
  type DeleteExplainabilityExportCommandOutput,
  DeleteExplainabilityExportCommand,
} from "./commands/DeleteExplainabilityExportCommand";
import {
  type DeleteForecastCommandInput,
  type DeleteForecastCommandOutput,
  DeleteForecastCommand,
} from "./commands/DeleteForecastCommand";
import {
  type DeleteForecastExportJobCommandInput,
  type DeleteForecastExportJobCommandOutput,
  DeleteForecastExportJobCommand,
} from "./commands/DeleteForecastExportJobCommand";
import {
  type DeleteMonitorCommandInput,
  type DeleteMonitorCommandOutput,
  DeleteMonitorCommand,
} from "./commands/DeleteMonitorCommand";
import {
  type DeletePredictorBacktestExportJobCommandInput,
  type DeletePredictorBacktestExportJobCommandOutput,
  DeletePredictorBacktestExportJobCommand,
} from "./commands/DeletePredictorBacktestExportJobCommand";
import {
  type DeletePredictorCommandInput,
  type DeletePredictorCommandOutput,
  DeletePredictorCommand,
} from "./commands/DeletePredictorCommand";
import {
  type DeleteResourceTreeCommandInput,
  type DeleteResourceTreeCommandOutput,
  DeleteResourceTreeCommand,
} from "./commands/DeleteResourceTreeCommand";
import {
  type DeleteWhatIfAnalysisCommandInput,
  type DeleteWhatIfAnalysisCommandOutput,
  DeleteWhatIfAnalysisCommand,
} from "./commands/DeleteWhatIfAnalysisCommand";
import {
  type DeleteWhatIfForecastCommandInput,
  type DeleteWhatIfForecastCommandOutput,
  DeleteWhatIfForecastCommand,
} from "./commands/DeleteWhatIfForecastCommand";
import {
  type DeleteWhatIfForecastExportCommandInput,
  type DeleteWhatIfForecastExportCommandOutput,
  DeleteWhatIfForecastExportCommand,
} from "./commands/DeleteWhatIfForecastExportCommand";
import {
  type DescribeAutoPredictorCommandInput,
  type DescribeAutoPredictorCommandOutput,
  DescribeAutoPredictorCommand,
} from "./commands/DescribeAutoPredictorCommand";
import {
  type DescribeDatasetCommandInput,
  type DescribeDatasetCommandOutput,
  DescribeDatasetCommand,
} from "./commands/DescribeDatasetCommand";
import {
  type DescribeDatasetGroupCommandInput,
  type DescribeDatasetGroupCommandOutput,
  DescribeDatasetGroupCommand,
} from "./commands/DescribeDatasetGroupCommand";
import {
  type DescribeDatasetImportJobCommandInput,
  type DescribeDatasetImportJobCommandOutput,
  DescribeDatasetImportJobCommand,
} from "./commands/DescribeDatasetImportJobCommand";
import {
  type DescribeExplainabilityCommandInput,
  type DescribeExplainabilityCommandOutput,
  DescribeExplainabilityCommand,
} from "./commands/DescribeExplainabilityCommand";
import {
  type DescribeExplainabilityExportCommandInput,
  type DescribeExplainabilityExportCommandOutput,
  DescribeExplainabilityExportCommand,
} from "./commands/DescribeExplainabilityExportCommand";
import {
  type DescribeForecastCommandInput,
  type DescribeForecastCommandOutput,
  DescribeForecastCommand,
} from "./commands/DescribeForecastCommand";
import {
  type DescribeForecastExportJobCommandInput,
  type DescribeForecastExportJobCommandOutput,
  DescribeForecastExportJobCommand,
} from "./commands/DescribeForecastExportJobCommand";
import {
  type DescribeMonitorCommandInput,
  type DescribeMonitorCommandOutput,
  DescribeMonitorCommand,
} from "./commands/DescribeMonitorCommand";
import {
  type DescribePredictorBacktestExportJobCommandInput,
  type DescribePredictorBacktestExportJobCommandOutput,
  DescribePredictorBacktestExportJobCommand,
} from "./commands/DescribePredictorBacktestExportJobCommand";
import {
  type DescribePredictorCommandInput,
  type DescribePredictorCommandOutput,
  DescribePredictorCommand,
} from "./commands/DescribePredictorCommand";
import {
  type DescribeWhatIfAnalysisCommandInput,
  type DescribeWhatIfAnalysisCommandOutput,
  DescribeWhatIfAnalysisCommand,
} from "./commands/DescribeWhatIfAnalysisCommand";
import {
  type DescribeWhatIfForecastCommandInput,
  type DescribeWhatIfForecastCommandOutput,
  DescribeWhatIfForecastCommand,
} from "./commands/DescribeWhatIfForecastCommand";
import {
  type DescribeWhatIfForecastExportCommandInput,
  type DescribeWhatIfForecastExportCommandOutput,
  DescribeWhatIfForecastExportCommand,
} from "./commands/DescribeWhatIfForecastExportCommand";
import {
  type GetAccuracyMetricsCommandInput,
  type GetAccuracyMetricsCommandOutput,
  GetAccuracyMetricsCommand,
} from "./commands/GetAccuracyMetricsCommand";
import {
  type ListDatasetGroupsCommandInput,
  type ListDatasetGroupsCommandOutput,
  ListDatasetGroupsCommand,
} from "./commands/ListDatasetGroupsCommand";
import {
  type ListDatasetImportJobsCommandInput,
  type ListDatasetImportJobsCommandOutput,
  ListDatasetImportJobsCommand,
} from "./commands/ListDatasetImportJobsCommand";
import {
  type ListDatasetsCommandInput,
  type ListDatasetsCommandOutput,
  ListDatasetsCommand,
} from "./commands/ListDatasetsCommand";
import {
  type ListExplainabilitiesCommandInput,
  type ListExplainabilitiesCommandOutput,
  ListExplainabilitiesCommand,
} from "./commands/ListExplainabilitiesCommand";
import {
  type ListExplainabilityExportsCommandInput,
  type ListExplainabilityExportsCommandOutput,
  ListExplainabilityExportsCommand,
} from "./commands/ListExplainabilityExportsCommand";
import {
  type ListForecastExportJobsCommandInput,
  type ListForecastExportJobsCommandOutput,
  ListForecastExportJobsCommand,
} from "./commands/ListForecastExportJobsCommand";
import {
  type ListForecastsCommandInput,
  type ListForecastsCommandOutput,
  ListForecastsCommand,
} from "./commands/ListForecastsCommand";
import {
  type ListMonitorEvaluationsCommandInput,
  type ListMonitorEvaluationsCommandOutput,
  ListMonitorEvaluationsCommand,
} from "./commands/ListMonitorEvaluationsCommand";
import {
  type ListMonitorsCommandInput,
  type ListMonitorsCommandOutput,
  ListMonitorsCommand,
} from "./commands/ListMonitorsCommand";
import {
  type ListPredictorBacktestExportJobsCommandInput,
  type ListPredictorBacktestExportJobsCommandOutput,
  ListPredictorBacktestExportJobsCommand,
} from "./commands/ListPredictorBacktestExportJobsCommand";
import {
  type ListPredictorsCommandInput,
  type ListPredictorsCommandOutput,
  ListPredictorsCommand,
} from "./commands/ListPredictorsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListWhatIfAnalysesCommandInput,
  type ListWhatIfAnalysesCommandOutput,
  ListWhatIfAnalysesCommand,
} from "./commands/ListWhatIfAnalysesCommand";
import {
  type ListWhatIfForecastExportsCommandInput,
  type ListWhatIfForecastExportsCommandOutput,
  ListWhatIfForecastExportsCommand,
} from "./commands/ListWhatIfForecastExportsCommand";
import {
  type ListWhatIfForecastsCommandInput,
  type ListWhatIfForecastsCommandOutput,
  ListWhatIfForecastsCommand,
} from "./commands/ListWhatIfForecastsCommand";
import {
  type ResumeResourceCommandInput,
  type ResumeResourceCommandOutput,
  ResumeResourceCommand,
} from "./commands/ResumeResourceCommand";
import {
  type StopResourceCommandInput,
  type StopResourceCommandOutput,
  StopResourceCommand,
} from "./commands/StopResourceCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateDatasetGroupCommandInput,
  type UpdateDatasetGroupCommandOutput,
  UpdateDatasetGroupCommand,
} from "./commands/UpdateDatasetGroupCommand";
import { ForecastClient } from "./ForecastClient";
import { paginateListDatasetGroups } from "./pagination/ListDatasetGroupsPaginator";
import { paginateListDatasetImportJobs } from "./pagination/ListDatasetImportJobsPaginator";
import { paginateListDatasets } from "./pagination/ListDatasetsPaginator";
import { paginateListExplainabilities } from "./pagination/ListExplainabilitiesPaginator";
import { paginateListExplainabilityExports } from "./pagination/ListExplainabilityExportsPaginator";
import { paginateListForecastExportJobs } from "./pagination/ListForecastExportJobsPaginator";
import { paginateListForecasts } from "./pagination/ListForecastsPaginator";
import { paginateListMonitorEvaluations } from "./pagination/ListMonitorEvaluationsPaginator";
import { paginateListMonitors } from "./pagination/ListMonitorsPaginator";
import { paginateListPredictorBacktestExportJobs } from "./pagination/ListPredictorBacktestExportJobsPaginator";
import { paginateListPredictors } from "./pagination/ListPredictorsPaginator";
import { paginateListWhatIfAnalyses } from "./pagination/ListWhatIfAnalysesPaginator";
import { paginateListWhatIfForecastExports } from "./pagination/ListWhatIfForecastExportsPaginator";
import { paginateListWhatIfForecasts } from "./pagination/ListWhatIfForecastsPaginator";

const commands = {
  CreateAutoPredictorCommand,
  CreateDatasetCommand,
  CreateDatasetGroupCommand,
  CreateDatasetImportJobCommand,
  CreateExplainabilityCommand,
  CreateExplainabilityExportCommand,
  CreateForecastCommand,
  CreateForecastExportJobCommand,
  CreateMonitorCommand,
  CreatePredictorCommand,
  CreatePredictorBacktestExportJobCommand,
  CreateWhatIfAnalysisCommand,
  CreateWhatIfForecastCommand,
  CreateWhatIfForecastExportCommand,
  DeleteDatasetCommand,
  DeleteDatasetGroupCommand,
  DeleteDatasetImportJobCommand,
  DeleteExplainabilityCommand,
  DeleteExplainabilityExportCommand,
  DeleteForecastCommand,
  DeleteForecastExportJobCommand,
  DeleteMonitorCommand,
  DeletePredictorCommand,
  DeletePredictorBacktestExportJobCommand,
  DeleteResourceTreeCommand,
  DeleteWhatIfAnalysisCommand,
  DeleteWhatIfForecastCommand,
  DeleteWhatIfForecastExportCommand,
  DescribeAutoPredictorCommand,
  DescribeDatasetCommand,
  DescribeDatasetGroupCommand,
  DescribeDatasetImportJobCommand,
  DescribeExplainabilityCommand,
  DescribeExplainabilityExportCommand,
  DescribeForecastCommand,
  DescribeForecastExportJobCommand,
  DescribeMonitorCommand,
  DescribePredictorCommand,
  DescribePredictorBacktestExportJobCommand,
  DescribeWhatIfAnalysisCommand,
  DescribeWhatIfForecastCommand,
  DescribeWhatIfForecastExportCommand,
  GetAccuracyMetricsCommand,
  ListDatasetGroupsCommand,
  ListDatasetImportJobsCommand,
  ListDatasetsCommand,
  ListExplainabilitiesCommand,
  ListExplainabilityExportsCommand,
  ListForecastExportJobsCommand,
  ListForecastsCommand,
  ListMonitorEvaluationsCommand,
  ListMonitorsCommand,
  ListPredictorBacktestExportJobsCommand,
  ListPredictorsCommand,
  ListTagsForResourceCommand,
  ListWhatIfAnalysesCommand,
  ListWhatIfForecastExportsCommand,
  ListWhatIfForecastsCommand,
  ResumeResourceCommand,
  StopResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateDatasetGroupCommand,
};
const paginators = {
  paginateListDatasetGroups,
  paginateListDatasetImportJobs,
  paginateListDatasets,
  paginateListExplainabilities,
  paginateListExplainabilityExports,
  paginateListForecastExportJobs,
  paginateListForecasts,
  paginateListMonitorEvaluations,
  paginateListMonitors,
  paginateListPredictorBacktestExportJobs,
  paginateListPredictors,
  paginateListWhatIfAnalyses,
  paginateListWhatIfForecastExports,
  paginateListWhatIfForecasts,
};

/**
 * @public
 */
export interface ForecastRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Forecast {
  /**
   * @see {@link CreateAutoPredictorCommand}
   */
  createAutoPredictor(
    args: CreateAutoPredictorCommandInput,
    options?: ForecastRequestOptions
  ): Promise<CreateAutoPredictorCommandOutput>;
  createAutoPredictor(
    args: CreateAutoPredictorCommandInput,
    cb: (err: any, data?: CreateAutoPredictorCommandOutput) => void
  ): void;
  createAutoPredictor(
    args: CreateAutoPredictorCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: CreateAutoPredictorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetCommand}
   */
  createDataset(
    args: CreateDatasetCommandInput,
    options?: ForecastRequestOptions
  ): Promise<CreateDatasetCommandOutput>;
  createDataset(
    args: CreateDatasetCommandInput,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;
  createDataset(
    args: CreateDatasetCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetGroupCommand}
   */
  createDatasetGroup(
    args: CreateDatasetGroupCommandInput,
    options?: ForecastRequestOptions
  ): Promise<CreateDatasetGroupCommandOutput>;
  createDatasetGroup(
    args: CreateDatasetGroupCommandInput,
    cb: (err: any, data?: CreateDatasetGroupCommandOutput) => void
  ): void;
  createDatasetGroup(
    args: CreateDatasetGroupCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: CreateDatasetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetImportJobCommand}
   */
  createDatasetImportJob(
    args: CreateDatasetImportJobCommandInput,
    options?: ForecastRequestOptions
  ): Promise<CreateDatasetImportJobCommandOutput>;
  createDatasetImportJob(
    args: CreateDatasetImportJobCommandInput,
    cb: (err: any, data?: CreateDatasetImportJobCommandOutput) => void
  ): void;
  createDatasetImportJob(
    args: CreateDatasetImportJobCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: CreateDatasetImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExplainabilityCommand}
   */
  createExplainability(
    args: CreateExplainabilityCommandInput,
    options?: ForecastRequestOptions
  ): Promise<CreateExplainabilityCommandOutput>;
  createExplainability(
    args: CreateExplainabilityCommandInput,
    cb: (err: any, data?: CreateExplainabilityCommandOutput) => void
  ): void;
  createExplainability(
    args: CreateExplainabilityCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: CreateExplainabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExplainabilityExportCommand}
   */
  createExplainabilityExport(
    args: CreateExplainabilityExportCommandInput,
    options?: ForecastRequestOptions
  ): Promise<CreateExplainabilityExportCommandOutput>;
  createExplainabilityExport(
    args: CreateExplainabilityExportCommandInput,
    cb: (err: any, data?: CreateExplainabilityExportCommandOutput) => void
  ): void;
  createExplainabilityExport(
    args: CreateExplainabilityExportCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: CreateExplainabilityExportCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateForecastCommand}
   */
  createForecast(
    args: CreateForecastCommandInput,
    options?: ForecastRequestOptions
  ): Promise<CreateForecastCommandOutput>;
  createForecast(
    args: CreateForecastCommandInput,
    cb: (err: any, data?: CreateForecastCommandOutput) => void
  ): void;
  createForecast(
    args: CreateForecastCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: CreateForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateForecastExportJobCommand}
   */
  createForecastExportJob(
    args: CreateForecastExportJobCommandInput,
    options?: ForecastRequestOptions
  ): Promise<CreateForecastExportJobCommandOutput>;
  createForecastExportJob(
    args: CreateForecastExportJobCommandInput,
    cb: (err: any, data?: CreateForecastExportJobCommandOutput) => void
  ): void;
  createForecastExportJob(
    args: CreateForecastExportJobCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: CreateForecastExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMonitorCommand}
   */
  createMonitor(
    args: CreateMonitorCommandInput,
    options?: ForecastRequestOptions
  ): Promise<CreateMonitorCommandOutput>;
  createMonitor(
    args: CreateMonitorCommandInput,
    cb: (err: any, data?: CreateMonitorCommandOutput) => void
  ): void;
  createMonitor(
    args: CreateMonitorCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: CreateMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePredictorCommand}
   */
  createPredictor(
    args: CreatePredictorCommandInput,
    options?: ForecastRequestOptions
  ): Promise<CreatePredictorCommandOutput>;
  createPredictor(
    args: CreatePredictorCommandInput,
    cb: (err: any, data?: CreatePredictorCommandOutput) => void
  ): void;
  createPredictor(
    args: CreatePredictorCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: CreatePredictorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePredictorBacktestExportJobCommand}
   */
  createPredictorBacktestExportJob(
    args: CreatePredictorBacktestExportJobCommandInput,
    options?: ForecastRequestOptions
  ): Promise<CreatePredictorBacktestExportJobCommandOutput>;
  createPredictorBacktestExportJob(
    args: CreatePredictorBacktestExportJobCommandInput,
    cb: (err: any, data?: CreatePredictorBacktestExportJobCommandOutput) => void
  ): void;
  createPredictorBacktestExportJob(
    args: CreatePredictorBacktestExportJobCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: CreatePredictorBacktestExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWhatIfAnalysisCommand}
   */
  createWhatIfAnalysis(
    args: CreateWhatIfAnalysisCommandInput,
    options?: ForecastRequestOptions
  ): Promise<CreateWhatIfAnalysisCommandOutput>;
  createWhatIfAnalysis(
    args: CreateWhatIfAnalysisCommandInput,
    cb: (err: any, data?: CreateWhatIfAnalysisCommandOutput) => void
  ): void;
  createWhatIfAnalysis(
    args: CreateWhatIfAnalysisCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: CreateWhatIfAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWhatIfForecastCommand}
   */
  createWhatIfForecast(
    args: CreateWhatIfForecastCommandInput,
    options?: ForecastRequestOptions
  ): Promise<CreateWhatIfForecastCommandOutput>;
  createWhatIfForecast(
    args: CreateWhatIfForecastCommandInput,
    cb: (err: any, data?: CreateWhatIfForecastCommandOutput) => void
  ): void;
  createWhatIfForecast(
    args: CreateWhatIfForecastCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: CreateWhatIfForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWhatIfForecastExportCommand}
   */
  createWhatIfForecastExport(
    args: CreateWhatIfForecastExportCommandInput,
    options?: ForecastRequestOptions
  ): Promise<CreateWhatIfForecastExportCommandOutput>;
  createWhatIfForecastExport(
    args: CreateWhatIfForecastExportCommandInput,
    cb: (err: any, data?: CreateWhatIfForecastExportCommandOutput) => void
  ): void;
  createWhatIfForecastExport(
    args: CreateWhatIfForecastExportCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: CreateWhatIfForecastExportCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetCommand}
   */
  deleteDataset(
    args: DeleteDatasetCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DeleteDatasetCommandOutput>;
  deleteDataset(
    args: DeleteDatasetCommandInput,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;
  deleteDataset(
    args: DeleteDatasetCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetGroupCommand}
   */
  deleteDatasetGroup(
    args: DeleteDatasetGroupCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DeleteDatasetGroupCommandOutput>;
  deleteDatasetGroup(
    args: DeleteDatasetGroupCommandInput,
    cb: (err: any, data?: DeleteDatasetGroupCommandOutput) => void
  ): void;
  deleteDatasetGroup(
    args: DeleteDatasetGroupCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DeleteDatasetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetImportJobCommand}
   */
  deleteDatasetImportJob(
    args: DeleteDatasetImportJobCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DeleteDatasetImportJobCommandOutput>;
  deleteDatasetImportJob(
    args: DeleteDatasetImportJobCommandInput,
    cb: (err: any, data?: DeleteDatasetImportJobCommandOutput) => void
  ): void;
  deleteDatasetImportJob(
    args: DeleteDatasetImportJobCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DeleteDatasetImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteExplainabilityCommand}
   */
  deleteExplainability(
    args: DeleteExplainabilityCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DeleteExplainabilityCommandOutput>;
  deleteExplainability(
    args: DeleteExplainabilityCommandInput,
    cb: (err: any, data?: DeleteExplainabilityCommandOutput) => void
  ): void;
  deleteExplainability(
    args: DeleteExplainabilityCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DeleteExplainabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteExplainabilityExportCommand}
   */
  deleteExplainabilityExport(
    args: DeleteExplainabilityExportCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DeleteExplainabilityExportCommandOutput>;
  deleteExplainabilityExport(
    args: DeleteExplainabilityExportCommandInput,
    cb: (err: any, data?: DeleteExplainabilityExportCommandOutput) => void
  ): void;
  deleteExplainabilityExport(
    args: DeleteExplainabilityExportCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DeleteExplainabilityExportCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteForecastCommand}
   */
  deleteForecast(
    args: DeleteForecastCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DeleteForecastCommandOutput>;
  deleteForecast(
    args: DeleteForecastCommandInput,
    cb: (err: any, data?: DeleteForecastCommandOutput) => void
  ): void;
  deleteForecast(
    args: DeleteForecastCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DeleteForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteForecastExportJobCommand}
   */
  deleteForecastExportJob(
    args: DeleteForecastExportJobCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DeleteForecastExportJobCommandOutput>;
  deleteForecastExportJob(
    args: DeleteForecastExportJobCommandInput,
    cb: (err: any, data?: DeleteForecastExportJobCommandOutput) => void
  ): void;
  deleteForecastExportJob(
    args: DeleteForecastExportJobCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DeleteForecastExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMonitorCommand}
   */
  deleteMonitor(
    args: DeleteMonitorCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DeleteMonitorCommandOutput>;
  deleteMonitor(
    args: DeleteMonitorCommandInput,
    cb: (err: any, data?: DeleteMonitorCommandOutput) => void
  ): void;
  deleteMonitor(
    args: DeleteMonitorCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DeleteMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePredictorCommand}
   */
  deletePredictor(
    args: DeletePredictorCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DeletePredictorCommandOutput>;
  deletePredictor(
    args: DeletePredictorCommandInput,
    cb: (err: any, data?: DeletePredictorCommandOutput) => void
  ): void;
  deletePredictor(
    args: DeletePredictorCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DeletePredictorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePredictorBacktestExportJobCommand}
   */
  deletePredictorBacktestExportJob(
    args: DeletePredictorBacktestExportJobCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DeletePredictorBacktestExportJobCommandOutput>;
  deletePredictorBacktestExportJob(
    args: DeletePredictorBacktestExportJobCommandInput,
    cb: (err: any, data?: DeletePredictorBacktestExportJobCommandOutput) => void
  ): void;
  deletePredictorBacktestExportJob(
    args: DeletePredictorBacktestExportJobCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DeletePredictorBacktestExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceTreeCommand}
   */
  deleteResourceTree(
    args: DeleteResourceTreeCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DeleteResourceTreeCommandOutput>;
  deleteResourceTree(
    args: DeleteResourceTreeCommandInput,
    cb: (err: any, data?: DeleteResourceTreeCommandOutput) => void
  ): void;
  deleteResourceTree(
    args: DeleteResourceTreeCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DeleteResourceTreeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWhatIfAnalysisCommand}
   */
  deleteWhatIfAnalysis(
    args: DeleteWhatIfAnalysisCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DeleteWhatIfAnalysisCommandOutput>;
  deleteWhatIfAnalysis(
    args: DeleteWhatIfAnalysisCommandInput,
    cb: (err: any, data?: DeleteWhatIfAnalysisCommandOutput) => void
  ): void;
  deleteWhatIfAnalysis(
    args: DeleteWhatIfAnalysisCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DeleteWhatIfAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWhatIfForecastCommand}
   */
  deleteWhatIfForecast(
    args: DeleteWhatIfForecastCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DeleteWhatIfForecastCommandOutput>;
  deleteWhatIfForecast(
    args: DeleteWhatIfForecastCommandInput,
    cb: (err: any, data?: DeleteWhatIfForecastCommandOutput) => void
  ): void;
  deleteWhatIfForecast(
    args: DeleteWhatIfForecastCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DeleteWhatIfForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWhatIfForecastExportCommand}
   */
  deleteWhatIfForecastExport(
    args: DeleteWhatIfForecastExportCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DeleteWhatIfForecastExportCommandOutput>;
  deleteWhatIfForecastExport(
    args: DeleteWhatIfForecastExportCommandInput,
    cb: (err: any, data?: DeleteWhatIfForecastExportCommandOutput) => void
  ): void;
  deleteWhatIfForecastExport(
    args: DeleteWhatIfForecastExportCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DeleteWhatIfForecastExportCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAutoPredictorCommand}
   */
  describeAutoPredictor(
    args: DescribeAutoPredictorCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DescribeAutoPredictorCommandOutput>;
  describeAutoPredictor(
    args: DescribeAutoPredictorCommandInput,
    cb: (err: any, data?: DescribeAutoPredictorCommandOutput) => void
  ): void;
  describeAutoPredictor(
    args: DescribeAutoPredictorCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DescribeAutoPredictorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDatasetCommand}
   */
  describeDataset(
    args: DescribeDatasetCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DescribeDatasetCommandOutput>;
  describeDataset(
    args: DescribeDatasetCommandInput,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;
  describeDataset(
    args: DescribeDatasetCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDatasetGroupCommand}
   */
  describeDatasetGroup(
    args: DescribeDatasetGroupCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DescribeDatasetGroupCommandOutput>;
  describeDatasetGroup(
    args: DescribeDatasetGroupCommandInput,
    cb: (err: any, data?: DescribeDatasetGroupCommandOutput) => void
  ): void;
  describeDatasetGroup(
    args: DescribeDatasetGroupCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DescribeDatasetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDatasetImportJobCommand}
   */
  describeDatasetImportJob(
    args: DescribeDatasetImportJobCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DescribeDatasetImportJobCommandOutput>;
  describeDatasetImportJob(
    args: DescribeDatasetImportJobCommandInput,
    cb: (err: any, data?: DescribeDatasetImportJobCommandOutput) => void
  ): void;
  describeDatasetImportJob(
    args: DescribeDatasetImportJobCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DescribeDatasetImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExplainabilityCommand}
   */
  describeExplainability(
    args: DescribeExplainabilityCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DescribeExplainabilityCommandOutput>;
  describeExplainability(
    args: DescribeExplainabilityCommandInput,
    cb: (err: any, data?: DescribeExplainabilityCommandOutput) => void
  ): void;
  describeExplainability(
    args: DescribeExplainabilityCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DescribeExplainabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExplainabilityExportCommand}
   */
  describeExplainabilityExport(
    args: DescribeExplainabilityExportCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DescribeExplainabilityExportCommandOutput>;
  describeExplainabilityExport(
    args: DescribeExplainabilityExportCommandInput,
    cb: (err: any, data?: DescribeExplainabilityExportCommandOutput) => void
  ): void;
  describeExplainabilityExport(
    args: DescribeExplainabilityExportCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DescribeExplainabilityExportCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeForecastCommand}
   */
  describeForecast(
    args: DescribeForecastCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DescribeForecastCommandOutput>;
  describeForecast(
    args: DescribeForecastCommandInput,
    cb: (err: any, data?: DescribeForecastCommandOutput) => void
  ): void;
  describeForecast(
    args: DescribeForecastCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DescribeForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeForecastExportJobCommand}
   */
  describeForecastExportJob(
    args: DescribeForecastExportJobCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DescribeForecastExportJobCommandOutput>;
  describeForecastExportJob(
    args: DescribeForecastExportJobCommandInput,
    cb: (err: any, data?: DescribeForecastExportJobCommandOutput) => void
  ): void;
  describeForecastExportJob(
    args: DescribeForecastExportJobCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DescribeForecastExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMonitorCommand}
   */
  describeMonitor(
    args: DescribeMonitorCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DescribeMonitorCommandOutput>;
  describeMonitor(
    args: DescribeMonitorCommandInput,
    cb: (err: any, data?: DescribeMonitorCommandOutput) => void
  ): void;
  describeMonitor(
    args: DescribeMonitorCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DescribeMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePredictorCommand}
   */
  describePredictor(
    args: DescribePredictorCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DescribePredictorCommandOutput>;
  describePredictor(
    args: DescribePredictorCommandInput,
    cb: (err: any, data?: DescribePredictorCommandOutput) => void
  ): void;
  describePredictor(
    args: DescribePredictorCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DescribePredictorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePredictorBacktestExportJobCommand}
   */
  describePredictorBacktestExportJob(
    args: DescribePredictorBacktestExportJobCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DescribePredictorBacktestExportJobCommandOutput>;
  describePredictorBacktestExportJob(
    args: DescribePredictorBacktestExportJobCommandInput,
    cb: (err: any, data?: DescribePredictorBacktestExportJobCommandOutput) => void
  ): void;
  describePredictorBacktestExportJob(
    args: DescribePredictorBacktestExportJobCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DescribePredictorBacktestExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWhatIfAnalysisCommand}
   */
  describeWhatIfAnalysis(
    args: DescribeWhatIfAnalysisCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DescribeWhatIfAnalysisCommandOutput>;
  describeWhatIfAnalysis(
    args: DescribeWhatIfAnalysisCommandInput,
    cb: (err: any, data?: DescribeWhatIfAnalysisCommandOutput) => void
  ): void;
  describeWhatIfAnalysis(
    args: DescribeWhatIfAnalysisCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DescribeWhatIfAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWhatIfForecastCommand}
   */
  describeWhatIfForecast(
    args: DescribeWhatIfForecastCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DescribeWhatIfForecastCommandOutput>;
  describeWhatIfForecast(
    args: DescribeWhatIfForecastCommandInput,
    cb: (err: any, data?: DescribeWhatIfForecastCommandOutput) => void
  ): void;
  describeWhatIfForecast(
    args: DescribeWhatIfForecastCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DescribeWhatIfForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWhatIfForecastExportCommand}
   */
  describeWhatIfForecastExport(
    args: DescribeWhatIfForecastExportCommandInput,
    options?: ForecastRequestOptions
  ): Promise<DescribeWhatIfForecastExportCommandOutput>;
  describeWhatIfForecastExport(
    args: DescribeWhatIfForecastExportCommandInput,
    cb: (err: any, data?: DescribeWhatIfForecastExportCommandOutput) => void
  ): void;
  describeWhatIfForecastExport(
    args: DescribeWhatIfForecastExportCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: DescribeWhatIfForecastExportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccuracyMetricsCommand}
   */
  getAccuracyMetrics(
    args: GetAccuracyMetricsCommandInput,
    options?: ForecastRequestOptions
  ): Promise<GetAccuracyMetricsCommandOutput>;
  getAccuracyMetrics(
    args: GetAccuracyMetricsCommandInput,
    cb: (err: any, data?: GetAccuracyMetricsCommandOutput) => void
  ): void;
  getAccuracyMetrics(
    args: GetAccuracyMetricsCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: GetAccuracyMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetGroupsCommand}
   */
  listDatasetGroups(): Promise<ListDatasetGroupsCommandOutput>;
  listDatasetGroups(
    args: ListDatasetGroupsCommandInput,
    options?: ForecastRequestOptions
  ): Promise<ListDatasetGroupsCommandOutput>;
  listDatasetGroups(
    args: ListDatasetGroupsCommandInput,
    cb: (err: any, data?: ListDatasetGroupsCommandOutput) => void
  ): void;
  listDatasetGroups(
    args: ListDatasetGroupsCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: ListDatasetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetImportJobsCommand}
   */
  listDatasetImportJobs(): Promise<ListDatasetImportJobsCommandOutput>;
  listDatasetImportJobs(
    args: ListDatasetImportJobsCommandInput,
    options?: ForecastRequestOptions
  ): Promise<ListDatasetImportJobsCommandOutput>;
  listDatasetImportJobs(
    args: ListDatasetImportJobsCommandInput,
    cb: (err: any, data?: ListDatasetImportJobsCommandOutput) => void
  ): void;
  listDatasetImportJobs(
    args: ListDatasetImportJobsCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: ListDatasetImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetsCommand}
   */
  listDatasets(): Promise<ListDatasetsCommandOutput>;
  listDatasets(
    args: ListDatasetsCommandInput,
    options?: ForecastRequestOptions
  ): Promise<ListDatasetsCommandOutput>;
  listDatasets(
    args: ListDatasetsCommandInput,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;
  listDatasets(
    args: ListDatasetsCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExplainabilitiesCommand}
   */
  listExplainabilities(): Promise<ListExplainabilitiesCommandOutput>;
  listExplainabilities(
    args: ListExplainabilitiesCommandInput,
    options?: ForecastRequestOptions
  ): Promise<ListExplainabilitiesCommandOutput>;
  listExplainabilities(
    args: ListExplainabilitiesCommandInput,
    cb: (err: any, data?: ListExplainabilitiesCommandOutput) => void
  ): void;
  listExplainabilities(
    args: ListExplainabilitiesCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: ListExplainabilitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExplainabilityExportsCommand}
   */
  listExplainabilityExports(): Promise<ListExplainabilityExportsCommandOutput>;
  listExplainabilityExports(
    args: ListExplainabilityExportsCommandInput,
    options?: ForecastRequestOptions
  ): Promise<ListExplainabilityExportsCommandOutput>;
  listExplainabilityExports(
    args: ListExplainabilityExportsCommandInput,
    cb: (err: any, data?: ListExplainabilityExportsCommandOutput) => void
  ): void;
  listExplainabilityExports(
    args: ListExplainabilityExportsCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: ListExplainabilityExportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListForecastExportJobsCommand}
   */
  listForecastExportJobs(): Promise<ListForecastExportJobsCommandOutput>;
  listForecastExportJobs(
    args: ListForecastExportJobsCommandInput,
    options?: ForecastRequestOptions
  ): Promise<ListForecastExportJobsCommandOutput>;
  listForecastExportJobs(
    args: ListForecastExportJobsCommandInput,
    cb: (err: any, data?: ListForecastExportJobsCommandOutput) => void
  ): void;
  listForecastExportJobs(
    args: ListForecastExportJobsCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: ListForecastExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListForecastsCommand}
   */
  listForecasts(): Promise<ListForecastsCommandOutput>;
  listForecasts(
    args: ListForecastsCommandInput,
    options?: ForecastRequestOptions
  ): Promise<ListForecastsCommandOutput>;
  listForecasts(
    args: ListForecastsCommandInput,
    cb: (err: any, data?: ListForecastsCommandOutput) => void
  ): void;
  listForecasts(
    args: ListForecastsCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: ListForecastsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMonitorEvaluationsCommand}
   */
  listMonitorEvaluations(
    args: ListMonitorEvaluationsCommandInput,
    options?: ForecastRequestOptions
  ): Promise<ListMonitorEvaluationsCommandOutput>;
  listMonitorEvaluations(
    args: ListMonitorEvaluationsCommandInput,
    cb: (err: any, data?: ListMonitorEvaluationsCommandOutput) => void
  ): void;
  listMonitorEvaluations(
    args: ListMonitorEvaluationsCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: ListMonitorEvaluationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMonitorsCommand}
   */
  listMonitors(): Promise<ListMonitorsCommandOutput>;
  listMonitors(
    args: ListMonitorsCommandInput,
    options?: ForecastRequestOptions
  ): Promise<ListMonitorsCommandOutput>;
  listMonitors(
    args: ListMonitorsCommandInput,
    cb: (err: any, data?: ListMonitorsCommandOutput) => void
  ): void;
  listMonitors(
    args: ListMonitorsCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: ListMonitorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPredictorBacktestExportJobsCommand}
   */
  listPredictorBacktestExportJobs(): Promise<ListPredictorBacktestExportJobsCommandOutput>;
  listPredictorBacktestExportJobs(
    args: ListPredictorBacktestExportJobsCommandInput,
    options?: ForecastRequestOptions
  ): Promise<ListPredictorBacktestExportJobsCommandOutput>;
  listPredictorBacktestExportJobs(
    args: ListPredictorBacktestExportJobsCommandInput,
    cb: (err: any, data?: ListPredictorBacktestExportJobsCommandOutput) => void
  ): void;
  listPredictorBacktestExportJobs(
    args: ListPredictorBacktestExportJobsCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: ListPredictorBacktestExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPredictorsCommand}
   */
  listPredictors(): Promise<ListPredictorsCommandOutput>;
  listPredictors(
    args: ListPredictorsCommandInput,
    options?: ForecastRequestOptions
  ): Promise<ListPredictorsCommandOutput>;
  listPredictors(
    args: ListPredictorsCommandInput,
    cb: (err: any, data?: ListPredictorsCommandOutput) => void
  ): void;
  listPredictors(
    args: ListPredictorsCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: ListPredictorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: ForecastRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWhatIfAnalysesCommand}
   */
  listWhatIfAnalyses(): Promise<ListWhatIfAnalysesCommandOutput>;
  listWhatIfAnalyses(
    args: ListWhatIfAnalysesCommandInput,
    options?: ForecastRequestOptions
  ): Promise<ListWhatIfAnalysesCommandOutput>;
  listWhatIfAnalyses(
    args: ListWhatIfAnalysesCommandInput,
    cb: (err: any, data?: ListWhatIfAnalysesCommandOutput) => void
  ): void;
  listWhatIfAnalyses(
    args: ListWhatIfAnalysesCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: ListWhatIfAnalysesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWhatIfForecastExportsCommand}
   */
  listWhatIfForecastExports(): Promise<ListWhatIfForecastExportsCommandOutput>;
  listWhatIfForecastExports(
    args: ListWhatIfForecastExportsCommandInput,
    options?: ForecastRequestOptions
  ): Promise<ListWhatIfForecastExportsCommandOutput>;
  listWhatIfForecastExports(
    args: ListWhatIfForecastExportsCommandInput,
    cb: (err: any, data?: ListWhatIfForecastExportsCommandOutput) => void
  ): void;
  listWhatIfForecastExports(
    args: ListWhatIfForecastExportsCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: ListWhatIfForecastExportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWhatIfForecastsCommand}
   */
  listWhatIfForecasts(): Promise<ListWhatIfForecastsCommandOutput>;
  listWhatIfForecasts(
    args: ListWhatIfForecastsCommandInput,
    options?: ForecastRequestOptions
  ): Promise<ListWhatIfForecastsCommandOutput>;
  listWhatIfForecasts(
    args: ListWhatIfForecastsCommandInput,
    cb: (err: any, data?: ListWhatIfForecastsCommandOutput) => void
  ): void;
  listWhatIfForecasts(
    args: ListWhatIfForecastsCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: ListWhatIfForecastsCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeResourceCommand}
   */
  resumeResource(
    args: ResumeResourceCommandInput,
    options?: ForecastRequestOptions
  ): Promise<ResumeResourceCommandOutput>;
  resumeResource(
    args: ResumeResourceCommandInput,
    cb: (err: any, data?: ResumeResourceCommandOutput) => void
  ): void;
  resumeResource(
    args: ResumeResourceCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: ResumeResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link StopResourceCommand}
   */
  stopResource(
    args: StopResourceCommandInput,
    options?: ForecastRequestOptions
  ): Promise<StopResourceCommandOutput>;
  stopResource(
    args: StopResourceCommandInput,
    cb: (err: any, data?: StopResourceCommandOutput) => void
  ): void;
  stopResource(
    args: StopResourceCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: StopResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: ForecastRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: ForecastRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDatasetGroupCommand}
   */
  updateDatasetGroup(
    args: UpdateDatasetGroupCommandInput,
    options?: ForecastRequestOptions
  ): Promise<UpdateDatasetGroupCommandOutput>;
  updateDatasetGroup(
    args: UpdateDatasetGroupCommandInput,
    cb: (err: any, data?: UpdateDatasetGroupCommandOutput) => void
  ): void;
  updateDatasetGroup(
    args: UpdateDatasetGroupCommandInput,
    options: ForecastRequestOptions,
    cb: (err: any, data?: UpdateDatasetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDatasetGroupsCommandOutput}.
   */
  paginateListDatasetGroups(
    args?: ListDatasetGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDatasetGroupsCommandOutput>;

  /**
   * @see {@link ListDatasetImportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDatasetImportJobsCommandOutput}.
   */
  paginateListDatasetImportJobs(
    args?: ListDatasetImportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDatasetImportJobsCommandOutput>;

  /**
   * @see {@link ListDatasetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDatasetsCommandOutput}.
   */
  paginateListDatasets(
    args?: ListDatasetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDatasetsCommandOutput>;

  /**
   * @see {@link ListExplainabilitiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExplainabilitiesCommandOutput}.
   */
  paginateListExplainabilities(
    args?: ListExplainabilitiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExplainabilitiesCommandOutput>;

  /**
   * @see {@link ListExplainabilityExportsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExplainabilityExportsCommandOutput}.
   */
  paginateListExplainabilityExports(
    args?: ListExplainabilityExportsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExplainabilityExportsCommandOutput>;

  /**
   * @see {@link ListForecastExportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListForecastExportJobsCommandOutput}.
   */
  paginateListForecastExportJobs(
    args?: ListForecastExportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListForecastExportJobsCommandOutput>;

  /**
   * @see {@link ListForecastsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListForecastsCommandOutput}.
   */
  paginateListForecasts(
    args?: ListForecastsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListForecastsCommandOutput>;

  /**
   * @see {@link ListMonitorEvaluationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMonitorEvaluationsCommandOutput}.
   */
  paginateListMonitorEvaluations(
    args: ListMonitorEvaluationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMonitorEvaluationsCommandOutput>;

  /**
   * @see {@link ListMonitorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListMonitorsCommandOutput}.
   */
  paginateListMonitors(
    args?: ListMonitorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListMonitorsCommandOutput>;

  /**
   * @see {@link ListPredictorBacktestExportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPredictorBacktestExportJobsCommandOutput}.
   */
  paginateListPredictorBacktestExportJobs(
    args?: ListPredictorBacktestExportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPredictorBacktestExportJobsCommandOutput>;

  /**
   * @see {@link ListPredictorsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPredictorsCommandOutput}.
   */
  paginateListPredictors(
    args?: ListPredictorsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPredictorsCommandOutput>;

  /**
   * @see {@link ListWhatIfAnalysesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWhatIfAnalysesCommandOutput}.
   */
  paginateListWhatIfAnalyses(
    args?: ListWhatIfAnalysesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWhatIfAnalysesCommandOutput>;

  /**
   * @see {@link ListWhatIfForecastExportsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWhatIfForecastExportsCommandOutput}.
   */
  paginateListWhatIfForecastExports(
    args?: ListWhatIfForecastExportsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWhatIfForecastExportsCommandOutput>;

  /**
   * @see {@link ListWhatIfForecastsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListWhatIfForecastsCommandOutput}.
   */
  paginateListWhatIfForecasts(
    args?: ListWhatIfForecastsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListWhatIfForecastsCommandOutput>;
}

/**
 * <p>Provides APIs for creating and managing Amazon Forecast resources.</p>
 * @public
 */
export class Forecast extends ForecastClient implements Forecast {}
createAggregatedClient(commands, Forecast, { paginators });
