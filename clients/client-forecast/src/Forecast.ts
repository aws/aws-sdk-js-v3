// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateAutoPredictorCommand,
  CreateAutoPredictorCommandInput,
  CreateAutoPredictorCommandOutput,
} from "./commands/CreateAutoPredictorCommand";
import {
  CreateDatasetCommand,
  CreateDatasetCommandInput,
  CreateDatasetCommandOutput,
} from "./commands/CreateDatasetCommand";
import {
  CreateDatasetGroupCommand,
  CreateDatasetGroupCommandInput,
  CreateDatasetGroupCommandOutput,
} from "./commands/CreateDatasetGroupCommand";
import {
  CreateDatasetImportJobCommand,
  CreateDatasetImportJobCommandInput,
  CreateDatasetImportJobCommandOutput,
} from "./commands/CreateDatasetImportJobCommand";
import {
  CreateExplainabilityCommand,
  CreateExplainabilityCommandInput,
  CreateExplainabilityCommandOutput,
} from "./commands/CreateExplainabilityCommand";
import {
  CreateExplainabilityExportCommand,
  CreateExplainabilityExportCommandInput,
  CreateExplainabilityExportCommandOutput,
} from "./commands/CreateExplainabilityExportCommand";
import {
  CreateForecastCommand,
  CreateForecastCommandInput,
  CreateForecastCommandOutput,
} from "./commands/CreateForecastCommand";
import {
  CreateForecastExportJobCommand,
  CreateForecastExportJobCommandInput,
  CreateForecastExportJobCommandOutput,
} from "./commands/CreateForecastExportJobCommand";
import {
  CreateMonitorCommand,
  CreateMonitorCommandInput,
  CreateMonitorCommandOutput,
} from "./commands/CreateMonitorCommand";
import {
  CreatePredictorBacktestExportJobCommand,
  CreatePredictorBacktestExportJobCommandInput,
  CreatePredictorBacktestExportJobCommandOutput,
} from "./commands/CreatePredictorBacktestExportJobCommand";
import {
  CreatePredictorCommand,
  CreatePredictorCommandInput,
  CreatePredictorCommandOutput,
} from "./commands/CreatePredictorCommand";
import {
  CreateWhatIfAnalysisCommand,
  CreateWhatIfAnalysisCommandInput,
  CreateWhatIfAnalysisCommandOutput,
} from "./commands/CreateWhatIfAnalysisCommand";
import {
  CreateWhatIfForecastCommand,
  CreateWhatIfForecastCommandInput,
  CreateWhatIfForecastCommandOutput,
} from "./commands/CreateWhatIfForecastCommand";
import {
  CreateWhatIfForecastExportCommand,
  CreateWhatIfForecastExportCommandInput,
  CreateWhatIfForecastExportCommandOutput,
} from "./commands/CreateWhatIfForecastExportCommand";
import {
  DeleteDatasetCommand,
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput,
} from "./commands/DeleteDatasetCommand";
import {
  DeleteDatasetGroupCommand,
  DeleteDatasetGroupCommandInput,
  DeleteDatasetGroupCommandOutput,
} from "./commands/DeleteDatasetGroupCommand";
import {
  DeleteDatasetImportJobCommand,
  DeleteDatasetImportJobCommandInput,
  DeleteDatasetImportJobCommandOutput,
} from "./commands/DeleteDatasetImportJobCommand";
import {
  DeleteExplainabilityCommand,
  DeleteExplainabilityCommandInput,
  DeleteExplainabilityCommandOutput,
} from "./commands/DeleteExplainabilityCommand";
import {
  DeleteExplainabilityExportCommand,
  DeleteExplainabilityExportCommandInput,
  DeleteExplainabilityExportCommandOutput,
} from "./commands/DeleteExplainabilityExportCommand";
import {
  DeleteForecastCommand,
  DeleteForecastCommandInput,
  DeleteForecastCommandOutput,
} from "./commands/DeleteForecastCommand";
import {
  DeleteForecastExportJobCommand,
  DeleteForecastExportJobCommandInput,
  DeleteForecastExportJobCommandOutput,
} from "./commands/DeleteForecastExportJobCommand";
import {
  DeleteMonitorCommand,
  DeleteMonitorCommandInput,
  DeleteMonitorCommandOutput,
} from "./commands/DeleteMonitorCommand";
import {
  DeletePredictorBacktestExportJobCommand,
  DeletePredictorBacktestExportJobCommandInput,
  DeletePredictorBacktestExportJobCommandOutput,
} from "./commands/DeletePredictorBacktestExportJobCommand";
import {
  DeletePredictorCommand,
  DeletePredictorCommandInput,
  DeletePredictorCommandOutput,
} from "./commands/DeletePredictorCommand";
import {
  DeleteResourceTreeCommand,
  DeleteResourceTreeCommandInput,
  DeleteResourceTreeCommandOutput,
} from "./commands/DeleteResourceTreeCommand";
import {
  DeleteWhatIfAnalysisCommand,
  DeleteWhatIfAnalysisCommandInput,
  DeleteWhatIfAnalysisCommandOutput,
} from "./commands/DeleteWhatIfAnalysisCommand";
import {
  DeleteWhatIfForecastCommand,
  DeleteWhatIfForecastCommandInput,
  DeleteWhatIfForecastCommandOutput,
} from "./commands/DeleteWhatIfForecastCommand";
import {
  DeleteWhatIfForecastExportCommand,
  DeleteWhatIfForecastExportCommandInput,
  DeleteWhatIfForecastExportCommandOutput,
} from "./commands/DeleteWhatIfForecastExportCommand";
import {
  DescribeAutoPredictorCommand,
  DescribeAutoPredictorCommandInput,
  DescribeAutoPredictorCommandOutput,
} from "./commands/DescribeAutoPredictorCommand";
import {
  DescribeDatasetCommand,
  DescribeDatasetCommandInput,
  DescribeDatasetCommandOutput,
} from "./commands/DescribeDatasetCommand";
import {
  DescribeDatasetGroupCommand,
  DescribeDatasetGroupCommandInput,
  DescribeDatasetGroupCommandOutput,
} from "./commands/DescribeDatasetGroupCommand";
import {
  DescribeDatasetImportJobCommand,
  DescribeDatasetImportJobCommandInput,
  DescribeDatasetImportJobCommandOutput,
} from "./commands/DescribeDatasetImportJobCommand";
import {
  DescribeExplainabilityCommand,
  DescribeExplainabilityCommandInput,
  DescribeExplainabilityCommandOutput,
} from "./commands/DescribeExplainabilityCommand";
import {
  DescribeExplainabilityExportCommand,
  DescribeExplainabilityExportCommandInput,
  DescribeExplainabilityExportCommandOutput,
} from "./commands/DescribeExplainabilityExportCommand";
import {
  DescribeForecastCommand,
  DescribeForecastCommandInput,
  DescribeForecastCommandOutput,
} from "./commands/DescribeForecastCommand";
import {
  DescribeForecastExportJobCommand,
  DescribeForecastExportJobCommandInput,
  DescribeForecastExportJobCommandOutput,
} from "./commands/DescribeForecastExportJobCommand";
import {
  DescribeMonitorCommand,
  DescribeMonitorCommandInput,
  DescribeMonitorCommandOutput,
} from "./commands/DescribeMonitorCommand";
import {
  DescribePredictorBacktestExportJobCommand,
  DescribePredictorBacktestExportJobCommandInput,
  DescribePredictorBacktestExportJobCommandOutput,
} from "./commands/DescribePredictorBacktestExportJobCommand";
import {
  DescribePredictorCommand,
  DescribePredictorCommandInput,
  DescribePredictorCommandOutput,
} from "./commands/DescribePredictorCommand";
import {
  DescribeWhatIfAnalysisCommand,
  DescribeWhatIfAnalysisCommandInput,
  DescribeWhatIfAnalysisCommandOutput,
} from "./commands/DescribeWhatIfAnalysisCommand";
import {
  DescribeWhatIfForecastCommand,
  DescribeWhatIfForecastCommandInput,
  DescribeWhatIfForecastCommandOutput,
} from "./commands/DescribeWhatIfForecastCommand";
import {
  DescribeWhatIfForecastExportCommand,
  DescribeWhatIfForecastExportCommandInput,
  DescribeWhatIfForecastExportCommandOutput,
} from "./commands/DescribeWhatIfForecastExportCommand";
import {
  GetAccuracyMetricsCommand,
  GetAccuracyMetricsCommandInput,
  GetAccuracyMetricsCommandOutput,
} from "./commands/GetAccuracyMetricsCommand";
import {
  ListDatasetGroupsCommand,
  ListDatasetGroupsCommandInput,
  ListDatasetGroupsCommandOutput,
} from "./commands/ListDatasetGroupsCommand";
import {
  ListDatasetImportJobsCommand,
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput,
} from "./commands/ListDatasetImportJobsCommand";
import {
  ListDatasetsCommand,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput,
} from "./commands/ListDatasetsCommand";
import {
  ListExplainabilitiesCommand,
  ListExplainabilitiesCommandInput,
  ListExplainabilitiesCommandOutput,
} from "./commands/ListExplainabilitiesCommand";
import {
  ListExplainabilityExportsCommand,
  ListExplainabilityExportsCommandInput,
  ListExplainabilityExportsCommandOutput,
} from "./commands/ListExplainabilityExportsCommand";
import {
  ListForecastExportJobsCommand,
  ListForecastExportJobsCommandInput,
  ListForecastExportJobsCommandOutput,
} from "./commands/ListForecastExportJobsCommand";
import {
  ListForecastsCommand,
  ListForecastsCommandInput,
  ListForecastsCommandOutput,
} from "./commands/ListForecastsCommand";
import {
  ListMonitorEvaluationsCommand,
  ListMonitorEvaluationsCommandInput,
  ListMonitorEvaluationsCommandOutput,
} from "./commands/ListMonitorEvaluationsCommand";
import {
  ListMonitorsCommand,
  ListMonitorsCommandInput,
  ListMonitorsCommandOutput,
} from "./commands/ListMonitorsCommand";
import {
  ListPredictorBacktestExportJobsCommand,
  ListPredictorBacktestExportJobsCommandInput,
  ListPredictorBacktestExportJobsCommandOutput,
} from "./commands/ListPredictorBacktestExportJobsCommand";
import {
  ListPredictorsCommand,
  ListPredictorsCommandInput,
  ListPredictorsCommandOutput,
} from "./commands/ListPredictorsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWhatIfAnalysesCommand,
  ListWhatIfAnalysesCommandInput,
  ListWhatIfAnalysesCommandOutput,
} from "./commands/ListWhatIfAnalysesCommand";
import {
  ListWhatIfForecastExportsCommand,
  ListWhatIfForecastExportsCommandInput,
  ListWhatIfForecastExportsCommandOutput,
} from "./commands/ListWhatIfForecastExportsCommand";
import {
  ListWhatIfForecastsCommand,
  ListWhatIfForecastsCommandInput,
  ListWhatIfForecastsCommandOutput,
} from "./commands/ListWhatIfForecastsCommand";
import {
  ResumeResourceCommand,
  ResumeResourceCommandInput,
  ResumeResourceCommandOutput,
} from "./commands/ResumeResourceCommand";
import {
  StopResourceCommand,
  StopResourceCommandInput,
  StopResourceCommandOutput,
} from "./commands/StopResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateDatasetGroupCommand,
  UpdateDatasetGroupCommandInput,
  UpdateDatasetGroupCommandOutput,
} from "./commands/UpdateDatasetGroupCommand";
import { ForecastClient, ForecastClientConfig } from "./ForecastClient";

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

export interface Forecast {
  /**
   * @see {@link CreateAutoPredictorCommand}
   */
  createAutoPredictor(
    args: CreateAutoPredictorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAutoPredictorCommandOutput>;
  createAutoPredictor(
    args: CreateAutoPredictorCommandInput,
    cb: (err: any, data?: CreateAutoPredictorCommandOutput) => void
  ): void;
  createAutoPredictor(
    args: CreateAutoPredictorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAutoPredictorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetCommand}
   */
  createDataset(args: CreateDatasetCommandInput, options?: __HttpHandlerOptions): Promise<CreateDatasetCommandOutput>;
  createDataset(args: CreateDatasetCommandInput, cb: (err: any, data?: CreateDatasetCommandOutput) => void): void;
  createDataset(
    args: CreateDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetGroupCommand}
   */
  createDatasetGroup(
    args: CreateDatasetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetGroupCommandOutput>;
  createDatasetGroup(
    args: CreateDatasetGroupCommandInput,
    cb: (err: any, data?: CreateDatasetGroupCommandOutput) => void
  ): void;
  createDatasetGroup(
    args: CreateDatasetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetImportJobCommand}
   */
  createDatasetImportJob(
    args: CreateDatasetImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetImportJobCommandOutput>;
  createDatasetImportJob(
    args: CreateDatasetImportJobCommandInput,
    cb: (err: any, data?: CreateDatasetImportJobCommandOutput) => void
  ): void;
  createDatasetImportJob(
    args: CreateDatasetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExplainabilityCommand}
   */
  createExplainability(
    args: CreateExplainabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExplainabilityCommandOutput>;
  createExplainability(
    args: CreateExplainabilityCommandInput,
    cb: (err: any, data?: CreateExplainabilityCommandOutput) => void
  ): void;
  createExplainability(
    args: CreateExplainabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExplainabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateExplainabilityExportCommand}
   */
  createExplainabilityExport(
    args: CreateExplainabilityExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExplainabilityExportCommandOutput>;
  createExplainabilityExport(
    args: CreateExplainabilityExportCommandInput,
    cb: (err: any, data?: CreateExplainabilityExportCommandOutput) => void
  ): void;
  createExplainabilityExport(
    args: CreateExplainabilityExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExplainabilityExportCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateForecastCommand}
   */
  createForecast(
    args: CreateForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateForecastCommandOutput>;
  createForecast(args: CreateForecastCommandInput, cb: (err: any, data?: CreateForecastCommandOutput) => void): void;
  createForecast(
    args: CreateForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateForecastExportJobCommand}
   */
  createForecastExportJob(
    args: CreateForecastExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateForecastExportJobCommandOutput>;
  createForecastExportJob(
    args: CreateForecastExportJobCommandInput,
    cb: (err: any, data?: CreateForecastExportJobCommandOutput) => void
  ): void;
  createForecastExportJob(
    args: CreateForecastExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateForecastExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMonitorCommand}
   */
  createMonitor(args: CreateMonitorCommandInput, options?: __HttpHandlerOptions): Promise<CreateMonitorCommandOutput>;
  createMonitor(args: CreateMonitorCommandInput, cb: (err: any, data?: CreateMonitorCommandOutput) => void): void;
  createMonitor(
    args: CreateMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePredictorCommand}
   */
  createPredictor(
    args: CreatePredictorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePredictorCommandOutput>;
  createPredictor(args: CreatePredictorCommandInput, cb: (err: any, data?: CreatePredictorCommandOutput) => void): void;
  createPredictor(
    args: CreatePredictorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePredictorCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePredictorBacktestExportJobCommand}
   */
  createPredictorBacktestExportJob(
    args: CreatePredictorBacktestExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePredictorBacktestExportJobCommandOutput>;
  createPredictorBacktestExportJob(
    args: CreatePredictorBacktestExportJobCommandInput,
    cb: (err: any, data?: CreatePredictorBacktestExportJobCommandOutput) => void
  ): void;
  createPredictorBacktestExportJob(
    args: CreatePredictorBacktestExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePredictorBacktestExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWhatIfAnalysisCommand}
   */
  createWhatIfAnalysis(
    args: CreateWhatIfAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWhatIfAnalysisCommandOutput>;
  createWhatIfAnalysis(
    args: CreateWhatIfAnalysisCommandInput,
    cb: (err: any, data?: CreateWhatIfAnalysisCommandOutput) => void
  ): void;
  createWhatIfAnalysis(
    args: CreateWhatIfAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWhatIfAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWhatIfForecastCommand}
   */
  createWhatIfForecast(
    args: CreateWhatIfForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWhatIfForecastCommandOutput>;
  createWhatIfForecast(
    args: CreateWhatIfForecastCommandInput,
    cb: (err: any, data?: CreateWhatIfForecastCommandOutput) => void
  ): void;
  createWhatIfForecast(
    args: CreateWhatIfForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWhatIfForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWhatIfForecastExportCommand}
   */
  createWhatIfForecastExport(
    args: CreateWhatIfForecastExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWhatIfForecastExportCommandOutput>;
  createWhatIfForecastExport(
    args: CreateWhatIfForecastExportCommandInput,
    cb: (err: any, data?: CreateWhatIfForecastExportCommandOutput) => void
  ): void;
  createWhatIfForecastExport(
    args: CreateWhatIfForecastExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWhatIfForecastExportCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetCommand}
   */
  deleteDataset(args: DeleteDatasetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDatasetCommandOutput>;
  deleteDataset(args: DeleteDatasetCommandInput, cb: (err: any, data?: DeleteDatasetCommandOutput) => void): void;
  deleteDataset(
    args: DeleteDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetGroupCommand}
   */
  deleteDatasetGroup(
    args: DeleteDatasetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatasetGroupCommandOutput>;
  deleteDatasetGroup(
    args: DeleteDatasetGroupCommandInput,
    cb: (err: any, data?: DeleteDatasetGroupCommandOutput) => void
  ): void;
  deleteDatasetGroup(
    args: DeleteDatasetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetImportJobCommand}
   */
  deleteDatasetImportJob(
    args: DeleteDatasetImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatasetImportJobCommandOutput>;
  deleteDatasetImportJob(
    args: DeleteDatasetImportJobCommandInput,
    cb: (err: any, data?: DeleteDatasetImportJobCommandOutput) => void
  ): void;
  deleteDatasetImportJob(
    args: DeleteDatasetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteExplainabilityCommand}
   */
  deleteExplainability(
    args: DeleteExplainabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExplainabilityCommandOutput>;
  deleteExplainability(
    args: DeleteExplainabilityCommandInput,
    cb: (err: any, data?: DeleteExplainabilityCommandOutput) => void
  ): void;
  deleteExplainability(
    args: DeleteExplainabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExplainabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteExplainabilityExportCommand}
   */
  deleteExplainabilityExport(
    args: DeleteExplainabilityExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExplainabilityExportCommandOutput>;
  deleteExplainabilityExport(
    args: DeleteExplainabilityExportCommandInput,
    cb: (err: any, data?: DeleteExplainabilityExportCommandOutput) => void
  ): void;
  deleteExplainabilityExport(
    args: DeleteExplainabilityExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExplainabilityExportCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteForecastCommand}
   */
  deleteForecast(
    args: DeleteForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteForecastCommandOutput>;
  deleteForecast(args: DeleteForecastCommandInput, cb: (err: any, data?: DeleteForecastCommandOutput) => void): void;
  deleteForecast(
    args: DeleteForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteForecastExportJobCommand}
   */
  deleteForecastExportJob(
    args: DeleteForecastExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteForecastExportJobCommandOutput>;
  deleteForecastExportJob(
    args: DeleteForecastExportJobCommandInput,
    cb: (err: any, data?: DeleteForecastExportJobCommandOutput) => void
  ): void;
  deleteForecastExportJob(
    args: DeleteForecastExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteForecastExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMonitorCommand}
   */
  deleteMonitor(args: DeleteMonitorCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMonitorCommandOutput>;
  deleteMonitor(args: DeleteMonitorCommandInput, cb: (err: any, data?: DeleteMonitorCommandOutput) => void): void;
  deleteMonitor(
    args: DeleteMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePredictorCommand}
   */
  deletePredictor(
    args: DeletePredictorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePredictorCommandOutput>;
  deletePredictor(args: DeletePredictorCommandInput, cb: (err: any, data?: DeletePredictorCommandOutput) => void): void;
  deletePredictor(
    args: DeletePredictorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePredictorCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePredictorBacktestExportJobCommand}
   */
  deletePredictorBacktestExportJob(
    args: DeletePredictorBacktestExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePredictorBacktestExportJobCommandOutput>;
  deletePredictorBacktestExportJob(
    args: DeletePredictorBacktestExportJobCommandInput,
    cb: (err: any, data?: DeletePredictorBacktestExportJobCommandOutput) => void
  ): void;
  deletePredictorBacktestExportJob(
    args: DeletePredictorBacktestExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePredictorBacktestExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteResourceTreeCommand}
   */
  deleteResourceTree(
    args: DeleteResourceTreeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceTreeCommandOutput>;
  deleteResourceTree(
    args: DeleteResourceTreeCommandInput,
    cb: (err: any, data?: DeleteResourceTreeCommandOutput) => void
  ): void;
  deleteResourceTree(
    args: DeleteResourceTreeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceTreeCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWhatIfAnalysisCommand}
   */
  deleteWhatIfAnalysis(
    args: DeleteWhatIfAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWhatIfAnalysisCommandOutput>;
  deleteWhatIfAnalysis(
    args: DeleteWhatIfAnalysisCommandInput,
    cb: (err: any, data?: DeleteWhatIfAnalysisCommandOutput) => void
  ): void;
  deleteWhatIfAnalysis(
    args: DeleteWhatIfAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWhatIfAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWhatIfForecastCommand}
   */
  deleteWhatIfForecast(
    args: DeleteWhatIfForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWhatIfForecastCommandOutput>;
  deleteWhatIfForecast(
    args: DeleteWhatIfForecastCommandInput,
    cb: (err: any, data?: DeleteWhatIfForecastCommandOutput) => void
  ): void;
  deleteWhatIfForecast(
    args: DeleteWhatIfForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWhatIfForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWhatIfForecastExportCommand}
   */
  deleteWhatIfForecastExport(
    args: DeleteWhatIfForecastExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWhatIfForecastExportCommandOutput>;
  deleteWhatIfForecastExport(
    args: DeleteWhatIfForecastExportCommandInput,
    cb: (err: any, data?: DeleteWhatIfForecastExportCommandOutput) => void
  ): void;
  deleteWhatIfForecastExport(
    args: DeleteWhatIfForecastExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWhatIfForecastExportCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAutoPredictorCommand}
   */
  describeAutoPredictor(
    args: DescribeAutoPredictorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAutoPredictorCommandOutput>;
  describeAutoPredictor(
    args: DescribeAutoPredictorCommandInput,
    cb: (err: any, data?: DescribeAutoPredictorCommandOutput) => void
  ): void;
  describeAutoPredictor(
    args: DescribeAutoPredictorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAutoPredictorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDatasetCommand}
   */
  describeDataset(
    args: DescribeDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetCommandOutput>;
  describeDataset(args: DescribeDatasetCommandInput, cb: (err: any, data?: DescribeDatasetCommandOutput) => void): void;
  describeDataset(
    args: DescribeDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDatasetGroupCommand}
   */
  describeDatasetGroup(
    args: DescribeDatasetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetGroupCommandOutput>;
  describeDatasetGroup(
    args: DescribeDatasetGroupCommandInput,
    cb: (err: any, data?: DescribeDatasetGroupCommandOutput) => void
  ): void;
  describeDatasetGroup(
    args: DescribeDatasetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDatasetImportJobCommand}
   */
  describeDatasetImportJob(
    args: DescribeDatasetImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetImportJobCommandOutput>;
  describeDatasetImportJob(
    args: DescribeDatasetImportJobCommandInput,
    cb: (err: any, data?: DescribeDatasetImportJobCommandOutput) => void
  ): void;
  describeDatasetImportJob(
    args: DescribeDatasetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExplainabilityCommand}
   */
  describeExplainability(
    args: DescribeExplainabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExplainabilityCommandOutput>;
  describeExplainability(
    args: DescribeExplainabilityCommandInput,
    cb: (err: any, data?: DescribeExplainabilityCommandOutput) => void
  ): void;
  describeExplainability(
    args: DescribeExplainabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExplainabilityCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExplainabilityExportCommand}
   */
  describeExplainabilityExport(
    args: DescribeExplainabilityExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExplainabilityExportCommandOutput>;
  describeExplainabilityExport(
    args: DescribeExplainabilityExportCommandInput,
    cb: (err: any, data?: DescribeExplainabilityExportCommandOutput) => void
  ): void;
  describeExplainabilityExport(
    args: DescribeExplainabilityExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExplainabilityExportCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeForecastCommand}
   */
  describeForecast(
    args: DescribeForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeForecastCommandOutput>;
  describeForecast(
    args: DescribeForecastCommandInput,
    cb: (err: any, data?: DescribeForecastCommandOutput) => void
  ): void;
  describeForecast(
    args: DescribeForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeForecastExportJobCommand}
   */
  describeForecastExportJob(
    args: DescribeForecastExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeForecastExportJobCommandOutput>;
  describeForecastExportJob(
    args: DescribeForecastExportJobCommandInput,
    cb: (err: any, data?: DescribeForecastExportJobCommandOutput) => void
  ): void;
  describeForecastExportJob(
    args: DescribeForecastExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeForecastExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeMonitorCommand}
   */
  describeMonitor(
    args: DescribeMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMonitorCommandOutput>;
  describeMonitor(args: DescribeMonitorCommandInput, cb: (err: any, data?: DescribeMonitorCommandOutput) => void): void;
  describeMonitor(
    args: DescribeMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMonitorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePredictorCommand}
   */
  describePredictor(
    args: DescribePredictorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePredictorCommandOutput>;
  describePredictor(
    args: DescribePredictorCommandInput,
    cb: (err: any, data?: DescribePredictorCommandOutput) => void
  ): void;
  describePredictor(
    args: DescribePredictorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePredictorCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePredictorBacktestExportJobCommand}
   */
  describePredictorBacktestExportJob(
    args: DescribePredictorBacktestExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePredictorBacktestExportJobCommandOutput>;
  describePredictorBacktestExportJob(
    args: DescribePredictorBacktestExportJobCommandInput,
    cb: (err: any, data?: DescribePredictorBacktestExportJobCommandOutput) => void
  ): void;
  describePredictorBacktestExportJob(
    args: DescribePredictorBacktestExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePredictorBacktestExportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWhatIfAnalysisCommand}
   */
  describeWhatIfAnalysis(
    args: DescribeWhatIfAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWhatIfAnalysisCommandOutput>;
  describeWhatIfAnalysis(
    args: DescribeWhatIfAnalysisCommandInput,
    cb: (err: any, data?: DescribeWhatIfAnalysisCommandOutput) => void
  ): void;
  describeWhatIfAnalysis(
    args: DescribeWhatIfAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWhatIfAnalysisCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWhatIfForecastCommand}
   */
  describeWhatIfForecast(
    args: DescribeWhatIfForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWhatIfForecastCommandOutput>;
  describeWhatIfForecast(
    args: DescribeWhatIfForecastCommandInput,
    cb: (err: any, data?: DescribeWhatIfForecastCommandOutput) => void
  ): void;
  describeWhatIfForecast(
    args: DescribeWhatIfForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWhatIfForecastCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWhatIfForecastExportCommand}
   */
  describeWhatIfForecastExport(
    args: DescribeWhatIfForecastExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWhatIfForecastExportCommandOutput>;
  describeWhatIfForecastExport(
    args: DescribeWhatIfForecastExportCommandInput,
    cb: (err: any, data?: DescribeWhatIfForecastExportCommandOutput) => void
  ): void;
  describeWhatIfForecastExport(
    args: DescribeWhatIfForecastExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWhatIfForecastExportCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccuracyMetricsCommand}
   */
  getAccuracyMetrics(
    args: GetAccuracyMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccuracyMetricsCommandOutput>;
  getAccuracyMetrics(
    args: GetAccuracyMetricsCommandInput,
    cb: (err: any, data?: GetAccuracyMetricsCommandOutput) => void
  ): void;
  getAccuracyMetrics(
    args: GetAccuracyMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccuracyMetricsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetGroupsCommand}
   */
  listDatasetGroups(
    args: ListDatasetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetGroupsCommandOutput>;
  listDatasetGroups(
    args: ListDatasetGroupsCommandInput,
    cb: (err: any, data?: ListDatasetGroupsCommandOutput) => void
  ): void;
  listDatasetGroups(
    args: ListDatasetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetImportJobsCommand}
   */
  listDatasetImportJobs(
    args: ListDatasetImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetImportJobsCommandOutput>;
  listDatasetImportJobs(
    args: ListDatasetImportJobsCommandInput,
    cb: (err: any, data?: ListDatasetImportJobsCommandOutput) => void
  ): void;
  listDatasetImportJobs(
    args: ListDatasetImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetsCommand}
   */
  listDatasets(args: ListDatasetsCommandInput, options?: __HttpHandlerOptions): Promise<ListDatasetsCommandOutput>;
  listDatasets(args: ListDatasetsCommandInput, cb: (err: any, data?: ListDatasetsCommandOutput) => void): void;
  listDatasets(
    args: ListDatasetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExplainabilitiesCommand}
   */
  listExplainabilities(
    args: ListExplainabilitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExplainabilitiesCommandOutput>;
  listExplainabilities(
    args: ListExplainabilitiesCommandInput,
    cb: (err: any, data?: ListExplainabilitiesCommandOutput) => void
  ): void;
  listExplainabilities(
    args: ListExplainabilitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExplainabilitiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExplainabilityExportsCommand}
   */
  listExplainabilityExports(
    args: ListExplainabilityExportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExplainabilityExportsCommandOutput>;
  listExplainabilityExports(
    args: ListExplainabilityExportsCommandInput,
    cb: (err: any, data?: ListExplainabilityExportsCommandOutput) => void
  ): void;
  listExplainabilityExports(
    args: ListExplainabilityExportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExplainabilityExportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListForecastExportJobsCommand}
   */
  listForecastExportJobs(
    args: ListForecastExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListForecastExportJobsCommandOutput>;
  listForecastExportJobs(
    args: ListForecastExportJobsCommandInput,
    cb: (err: any, data?: ListForecastExportJobsCommandOutput) => void
  ): void;
  listForecastExportJobs(
    args: ListForecastExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListForecastExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListForecastsCommand}
   */
  listForecasts(args: ListForecastsCommandInput, options?: __HttpHandlerOptions): Promise<ListForecastsCommandOutput>;
  listForecasts(args: ListForecastsCommandInput, cb: (err: any, data?: ListForecastsCommandOutput) => void): void;
  listForecasts(
    args: ListForecastsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListForecastsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMonitorEvaluationsCommand}
   */
  listMonitorEvaluations(
    args: ListMonitorEvaluationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMonitorEvaluationsCommandOutput>;
  listMonitorEvaluations(
    args: ListMonitorEvaluationsCommandInput,
    cb: (err: any, data?: ListMonitorEvaluationsCommandOutput) => void
  ): void;
  listMonitorEvaluations(
    args: ListMonitorEvaluationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMonitorEvaluationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMonitorsCommand}
   */
  listMonitors(args: ListMonitorsCommandInput, options?: __HttpHandlerOptions): Promise<ListMonitorsCommandOutput>;
  listMonitors(args: ListMonitorsCommandInput, cb: (err: any, data?: ListMonitorsCommandOutput) => void): void;
  listMonitors(
    args: ListMonitorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMonitorsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPredictorBacktestExportJobsCommand}
   */
  listPredictorBacktestExportJobs(
    args: ListPredictorBacktestExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPredictorBacktestExportJobsCommandOutput>;
  listPredictorBacktestExportJobs(
    args: ListPredictorBacktestExportJobsCommandInput,
    cb: (err: any, data?: ListPredictorBacktestExportJobsCommandOutput) => void
  ): void;
  listPredictorBacktestExportJobs(
    args: ListPredictorBacktestExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPredictorBacktestExportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPredictorsCommand}
   */
  listPredictors(
    args: ListPredictorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPredictorsCommandOutput>;
  listPredictors(args: ListPredictorsCommandInput, cb: (err: any, data?: ListPredictorsCommandOutput) => void): void;
  listPredictors(
    args: ListPredictorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPredictorsCommandOutput) => void
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
   * @see {@link ListWhatIfAnalysesCommand}
   */
  listWhatIfAnalyses(
    args: ListWhatIfAnalysesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWhatIfAnalysesCommandOutput>;
  listWhatIfAnalyses(
    args: ListWhatIfAnalysesCommandInput,
    cb: (err: any, data?: ListWhatIfAnalysesCommandOutput) => void
  ): void;
  listWhatIfAnalyses(
    args: ListWhatIfAnalysesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWhatIfAnalysesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWhatIfForecastExportsCommand}
   */
  listWhatIfForecastExports(
    args: ListWhatIfForecastExportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWhatIfForecastExportsCommandOutput>;
  listWhatIfForecastExports(
    args: ListWhatIfForecastExportsCommandInput,
    cb: (err: any, data?: ListWhatIfForecastExportsCommandOutput) => void
  ): void;
  listWhatIfForecastExports(
    args: ListWhatIfForecastExportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWhatIfForecastExportsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListWhatIfForecastsCommand}
   */
  listWhatIfForecasts(
    args: ListWhatIfForecastsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWhatIfForecastsCommandOutput>;
  listWhatIfForecasts(
    args: ListWhatIfForecastsCommandInput,
    cb: (err: any, data?: ListWhatIfForecastsCommandOutput) => void
  ): void;
  listWhatIfForecasts(
    args: ListWhatIfForecastsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWhatIfForecastsCommandOutput) => void
  ): void;

  /**
   * @see {@link ResumeResourceCommand}
   */
  resumeResource(
    args: ResumeResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeResourceCommandOutput>;
  resumeResource(args: ResumeResourceCommandInput, cb: (err: any, data?: ResumeResourceCommandOutput) => void): void;
  resumeResource(
    args: ResumeResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link StopResourceCommand}
   */
  stopResource(args: StopResourceCommandInput, options?: __HttpHandlerOptions): Promise<StopResourceCommandOutput>;
  stopResource(args: StopResourceCommandInput, cb: (err: any, data?: StopResourceCommandOutput) => void): void;
  stopResource(
    args: StopResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopResourceCommandOutput) => void
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

  /**
   * @see {@link UpdateDatasetGroupCommand}
   */
  updateDatasetGroup(
    args: UpdateDatasetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatasetGroupCommandOutput>;
  updateDatasetGroup(
    args: UpdateDatasetGroupCommandInput,
    cb: (err: any, data?: UpdateDatasetGroupCommandOutput) => void
  ): void;
  updateDatasetGroup(
    args: UpdateDatasetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatasetGroupCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Provides APIs for creating and managing Amazon Forecast resources.</p>
 */
export class Forecast extends ForecastClient implements Forecast {}
createAggregatedClient(commands, Forecast);
