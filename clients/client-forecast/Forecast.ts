import { ForecastClient } from "./ForecastClient";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Provides APIs for creating and managing Amazon Forecast resources.</p>
 */
export class Forecast extends ForecastClient {
  /**
   * <p>Creates an Amazon Forecast dataset. The information about the dataset that you provide helps
   *       Forecast understand how to consume the data for model training. This includes the
   *       following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>
   *                      <code>DataFrequency</code>
   *                   </i> - How frequently your historical
   *           time-series data is collected.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>
   *                      <code>Domain</code>
   *                   </i> and
   *             <i>
   *                      <code>DatasetType</code>
   *                   </i> - Each dataset has an associated dataset
   *           domain and a type within the domain. Amazon Forecast provides a list of predefined domains and
   *           types within each domain. For each unique dataset domain and type within the domain,
   *           Amazon Forecast requires your data to include a minimum set of predefined fields.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>
   *                      <code>Schema</code>
   *                   </i> - A schema specifies the fields in the dataset,
   *           including the field name and data type.</p>
   *             </li>
   *          </ul>
   *          <p>After creating a dataset, you import your training data into it and add the dataset to a
   *       dataset group. You use the dataset group to create a predictor. For more information, see
   *         <a>howitworks-datasets-groups</a>.</p>
   *          <p>To get a list of all your datasets, use the <a>ListDatasets</a>
   *       operation.</p>
   *          <p>For example Forecast datasets, see the <a href="https://github.com/aws-samples/amazon-forecast-samples">Amazon Forecast Sample GitHub
   *         repository</a>.</p>
   *          <note>
   *             <p>The <code>Status</code> of a dataset must be <code>ACTIVE</code> before you can import
   *         training data. Use the <a>DescribeDataset</a> operation to get the status.</p>
   *          </note>
   */
  public createDataset(
    args: CreateDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetCommandOutput>;
  public createDataset(
    args: CreateDatasetCommandInput,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;
  public createDataset(
    args: CreateDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;
  public createDataset(
    args: CreateDatasetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDatasetCommandOutput) => void),
    cb?: (err: any, data?: CreateDatasetCommandOutput) => void
  ): Promise<CreateDatasetCommandOutput> | void {
    const command = new CreateDatasetCommand(args);
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
   * <p>Creates a dataset group, which holds a collection of related datasets. You can add
   *       datasets to the dataset group when you create the dataset group, or later by using the <a>UpdateDatasetGroup</a> operation.</p>
   *          <p>After creating a dataset group and adding datasets, you use the dataset group when you
   *       create a predictor. For more information, see <a>howitworks-datasets-groups</a>.</p>
   *          <p>To get a list of all your datasets groups, use the <a>ListDatasetGroups</a>
   *       operation.</p>
   *          <note>
   *             <p>The <code>Status</code> of a dataset group must be <code>ACTIVE</code> before you can
   *         use the dataset group to create a predictor. To get the status, use the <a>DescribeDatasetGroup</a> operation.</p>
   *          </note>
   */
  public createDatasetGroup(
    args: CreateDatasetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetGroupCommandOutput>;
  public createDatasetGroup(
    args: CreateDatasetGroupCommandInput,
    cb: (err: any, data?: CreateDatasetGroupCommandOutput) => void
  ): void;
  public createDatasetGroup(
    args: CreateDatasetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetGroupCommandOutput) => void
  ): void;
  public createDatasetGroup(
    args: CreateDatasetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDatasetGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateDatasetGroupCommandOutput) => void
  ): Promise<CreateDatasetGroupCommandOutput> | void {
    const command = new CreateDatasetGroupCommand(args);
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
   * <p>Imports your training data to an Amazon Forecast dataset. You provide the location of your
   *       training data in an Amazon Simple Storage Service (Amazon S3) bucket and the Amazon Resource Name (ARN) of the dataset
   *       that you want to import the data to.</p>
   *          <p>You must specify a <a>DataSource</a> object that includes an AWS Identity and Access Management (IAM)
   *       role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy of your data and
   *       processes it in an internal AWS system. For more information, see <a>aws-forecast-iam-roles</a>.</p>
   *          <p>The training data must be in CSV format. The delimiter must be a comma (,).</p>
   *          <p>You can specify the path to a specific CSV file, the S3 bucket, or to a folder in the S3
   *       bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000
   *       files.</p>
   *
   *
   *          <p>Because dataset imports are not aggregated, your most recent dataset import is the one
   *       that is used when training a predictor or generating a forecast. Make sure that your most
   *       recent dataset import contains all of the data you want to model off of, and not just the new
   *       data collected since the previous import.</p>
   *
   *
   *          <p>To get a list of all your dataset import jobs, filtered by specified criteria, use the
   *         <a>ListDatasetImportJobs</a> operation.</p>
   */
  public createDatasetImportJob(
    args: CreateDatasetImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetImportJobCommandOutput>;
  public createDatasetImportJob(
    args: CreateDatasetImportJobCommandInput,
    cb: (err: any, data?: CreateDatasetImportJobCommandOutput) => void
  ): void;
  public createDatasetImportJob(
    args: CreateDatasetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetImportJobCommandOutput) => void
  ): void;
  public createDatasetImportJob(
    args: CreateDatasetImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDatasetImportJobCommandOutput) => void),
    cb?: (err: any, data?: CreateDatasetImportJobCommandOutput) => void
  ): Promise<CreateDatasetImportJobCommandOutput> | void {
    const command = new CreateDatasetImportJobCommand(args);
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
   * <p>Creates a forecast for each item in the <code>TARGET_TIME_SERIES</code> dataset that was
   *       used to train the predictor. This is known as inference. To retrieve the forecast for a single
   *       item at low latency, use the  operation. To
   *       export the complete forecast into your Amazon Simple Storage Service (Amazon S3) bucket, use the <a>CreateForecastExportJob</a> operation.</p>
   *          <p>The range of the forecast is determined by the <code>ForecastHorizon</code> value, which
   *       you specify in the <a>CreatePredictor</a> request. When you query a forecast, you
   *       can request a specific date range within the forecast.</p>
   *          <p>To get a list of all your forecasts, use the <a>ListForecasts</a>
   *       operation.</p>
   *          <note>
   *             <p>The forecasts generated by Amazon Forecast are in the same time zone as the dataset that was
   *         used to create the predictor.</p>
   *          </note>
   *          <p>For more information, see <a>howitworks-forecast</a>.</p>
   *          <note>
   *             <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query
   *         or export the forecast. Use the <a>DescribeForecast</a> operation to get the
   *         status.</p>
   *          </note>
   */
  public createForecast(
    args: CreateForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateForecastCommandOutput>;
  public createForecast(
    args: CreateForecastCommandInput,
    cb: (err: any, data?: CreateForecastCommandOutput) => void
  ): void;
  public createForecast(
    args: CreateForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateForecastCommandOutput) => void
  ): void;
  public createForecast(
    args: CreateForecastCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateForecastCommandOutput) => void),
    cb?: (err: any, data?: CreateForecastCommandOutput) => void
  ): Promise<CreateForecastCommandOutput> | void {
    const command = new CreateForecastCommand(args);
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
   * <p>Exports a forecast created by the <a>CreateForecast</a> operation to your
   *       Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p>
   *          <p><ForecastExportJobName>_<ExportTimestamp>_<PartNumber></p>
   *          <p>where the <ExportTimestamp> component is in Java SimpleDateFormat
   *       (yyyy-MM-ddTHH-mm-ssZ).</p>
   *          <p>You must specify a <a>DataDestination</a> object that includes an AWS Identity and Access Management
   *       (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see
   *         <a>aws-forecast-iam-roles</a>.</p>
   *          <p>For more information, see <a>howitworks-forecast</a>.</p>
   *          <p>To get a list of all your forecast export jobs, use the <a>ListForecastExportJobs</a> operation.</p>
   *          <note>
   *             <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before
   *         you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p>
   *          </note>
   */
  public createForecastExportJob(
    args: CreateForecastExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateForecastExportJobCommandOutput>;
  public createForecastExportJob(
    args: CreateForecastExportJobCommandInput,
    cb: (err: any, data?: CreateForecastExportJobCommandOutput) => void
  ): void;
  public createForecastExportJob(
    args: CreateForecastExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateForecastExportJobCommandOutput) => void
  ): void;
  public createForecastExportJob(
    args: CreateForecastExportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateForecastExportJobCommandOutput) => void),
    cb?: (err: any, data?: CreateForecastExportJobCommandOutput) => void
  ): Promise<CreateForecastExportJobCommandOutput> | void {
    const command = new CreateForecastExportJobCommand(args);
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
   * <p>Creates an Amazon Forecast predictor.</p>
   *          <p>In the request, provide a dataset group and either specify an algorithm or let
   *       Amazon Forecast choose an algorithm for you using AutoML. If you specify an algorithm, you also can
   *       override algorithm-specific hyperparameters.</p>
   *          <p>Amazon Forecast uses the algorithm to train a predictor using the latest version of the
   *       datasets in the specified dataset group. You can then generate a
   *       forecast using the <a>CreateForecast</a> operation.</p>
   *          <p>
   *       To see the evaluation metrics, use the <a>GetAccuracyMetrics</a> operation.
   *     </p>
   *          <p>You can specify a featurization configuration to fill and aggregate the data
   *       fields in the <code>TARGET_TIME_SERIES</code> dataset to improve model training. For more
   *       information, see <a>FeaturizationConfig</a>.</p>
   *          <p>For RELATED_TIME_SERIES datasets, <code>CreatePredictor</code> verifies that the
   *         <code>DataFrequency</code> specified when the dataset was created matches the
   *         <code>ForecastFrequency</code>. TARGET_TIME_SERIES datasets don't have this restriction.
   *       Amazon Forecast also verifies the delimiter and timestamp format. For more information, see <a>howitworks-datasets-groups</a>.</p>
   *          <p>By default, predictors are trained and evaluated at the 0.1 (P10), 0.5 (P50), and 0.9
   *       (P90) quantiles. You can choose custom forecast types to train and evaluate your predictor
   *       by setting the <code>ForecastTypes</code>.
   *     </p>
   *          <p>
   *             <b>AutoML</b>
   *          </p>
   *          <p>If you want Amazon Forecast to evaluate each algorithm and choose the one that minimizes the
   *         <code>objective function</code>, set <code>PerformAutoML</code> to <code>true</code>. The
   *         <code>objective function</code> is defined as the mean of the weighted losses over the
   *       forecast types. By default, these are the p10, p50, and p90
   *       quantile losses. For more information, see <a>EvaluationResult</a>.</p>
   *          <p>When AutoML is enabled, the following properties are disallowed:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AlgorithmArn</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HPOConfig</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PerformHPO</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TrainingParameters</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *
   *
   *          <p>To get a list of all of your predictors, use the <a>ListPredictors</a>
   *       operation.</p>
   *          <note>
   *             <p>Before you can use the predictor to create a forecast, the <code>Status</code> of the
   *         predictor must be <code>ACTIVE</code>, signifying that training has completed. To get the
   *         status, use the <a>DescribePredictor</a> operation.</p>
   *          </note>
   */
  public createPredictor(
    args: CreatePredictorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePredictorCommandOutput>;
  public createPredictor(
    args: CreatePredictorCommandInput,
    cb: (err: any, data?: CreatePredictorCommandOutput) => void
  ): void;
  public createPredictor(
    args: CreatePredictorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePredictorCommandOutput) => void
  ): void;
  public createPredictor(
    args: CreatePredictorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePredictorCommandOutput) => void),
    cb?: (err: any, data?: CreatePredictorCommandOutput) => void
  ): Promise<CreatePredictorCommandOutput> | void {
    const command = new CreatePredictorCommand(args);
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
   * <p>Exports backtest forecasts and accuracy metrics generated by the <a>CreatePredictor</a> operation. Two folders containing CSV files are exported
   *             to your specified S3 bucket.</p>
   *         <p> The export file names will match the following conventions:</p>
   *         <p>
   *             <code><ExportJobName>_<ExportTimestamp>_<PartNumber>.csv</code>
   *          </p>
   *         <p>The <ExportTimestamp> component is in Java SimpleDate format
   *             (yyyy-MM-ddTHH-mm-ssZ).</p>
   *         <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3
   *             bucket and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3
   *             bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p>
   *         <note>
   *             <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before
   *                 you can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribePredictorBacktestExportJob</a> operation.</p>
   *         </note>
   */
  public createPredictorBacktestExportJob(
    args: CreatePredictorBacktestExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePredictorBacktestExportJobCommandOutput>;
  public createPredictorBacktestExportJob(
    args: CreatePredictorBacktestExportJobCommandInput,
    cb: (err: any, data?: CreatePredictorBacktestExportJobCommandOutput) => void
  ): void;
  public createPredictorBacktestExportJob(
    args: CreatePredictorBacktestExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePredictorBacktestExportJobCommandOutput) => void
  ): void;
  public createPredictorBacktestExportJob(
    args: CreatePredictorBacktestExportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePredictorBacktestExportJobCommandOutput) => void),
    cb?: (err: any, data?: CreatePredictorBacktestExportJobCommandOutput) => void
  ): Promise<CreatePredictorBacktestExportJobCommandOutput> | void {
    const command = new CreatePredictorBacktestExportJobCommand(args);
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
   * <p>Deletes an Amazon Forecast dataset that was created using the <a>CreateDataset</a>
   *       operation. You can only delete datasets that have a status of <code>ACTIVE</code> or
   *         <code>CREATE_FAILED</code>. To get the status use the <a>DescribeDataset</a>
   *       operation.</p>
   *          <note>
   *             <p>Forecast does not automatically update any dataset groups that contain the deleted dataset.
   *         In order to update the dataset group, use the
   *         operation, omitting the deleted dataset's ARN.</p>
   *          </note>
   */
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatasetCommandOutput>;
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;
  public deleteDataset(
    args: DeleteDatasetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDatasetCommandOutput) => void),
    cb?: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): Promise<DeleteDatasetCommandOutput> | void {
    const command = new DeleteDatasetCommand(args);
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
   * <p>Deletes a dataset group created using the <a>CreateDatasetGroup</a> operation.
   *       You can only delete dataset groups that have a status of <code>ACTIVE</code>,
   *         <code>CREATE_FAILED</code>, or <code>UPDATE_FAILED</code>. To get the status, use the <a>DescribeDatasetGroup</a> operation.</p>
   *          <p>This operation deletes only the dataset group, not the datasets in the group.</p>
   */
  public deleteDatasetGroup(
    args: DeleteDatasetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatasetGroupCommandOutput>;
  public deleteDatasetGroup(
    args: DeleteDatasetGroupCommandInput,
    cb: (err: any, data?: DeleteDatasetGroupCommandOutput) => void
  ): void;
  public deleteDatasetGroup(
    args: DeleteDatasetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetGroupCommandOutput) => void
  ): void;
  public deleteDatasetGroup(
    args: DeleteDatasetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDatasetGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteDatasetGroupCommandOutput) => void
  ): Promise<DeleteDatasetGroupCommandOutput> | void {
    const command = new DeleteDatasetGroupCommand(args);
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
   * <p>Deletes a dataset import job created using the <a>CreateDatasetImportJob</a>
   *       operation. You can delete only dataset import jobs that have a status of <code>ACTIVE</code>
   *       or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeDatasetImportJob</a> operation.</p>
   */
  public deleteDatasetImportJob(
    args: DeleteDatasetImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatasetImportJobCommandOutput>;
  public deleteDatasetImportJob(
    args: DeleteDatasetImportJobCommandInput,
    cb: (err: any, data?: DeleteDatasetImportJobCommandOutput) => void
  ): void;
  public deleteDatasetImportJob(
    args: DeleteDatasetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetImportJobCommandOutput) => void
  ): void;
  public deleteDatasetImportJob(
    args: DeleteDatasetImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDatasetImportJobCommandOutput) => void),
    cb?: (err: any, data?: DeleteDatasetImportJobCommandOutput) => void
  ): Promise<DeleteDatasetImportJobCommandOutput> | void {
    const command = new DeleteDatasetImportJobCommand(args);
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
   * <p>Deletes a forecast created using the <a>CreateForecast</a> operation. You can
   *       delete only forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>.
   *       To get the status, use the <a>DescribeForecast</a> operation.</p>
   *          <p>You can't delete a forecast while it is being exported. After a forecast is deleted, you
   *       can no longer query the forecast.</p>
   */
  public deleteForecast(
    args: DeleteForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteForecastCommandOutput>;
  public deleteForecast(
    args: DeleteForecastCommandInput,
    cb: (err: any, data?: DeleteForecastCommandOutput) => void
  ): void;
  public deleteForecast(
    args: DeleteForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteForecastCommandOutput) => void
  ): void;
  public deleteForecast(
    args: DeleteForecastCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteForecastCommandOutput) => void),
    cb?: (err: any, data?: DeleteForecastCommandOutput) => void
  ): Promise<DeleteForecastCommandOutput> | void {
    const command = new DeleteForecastCommand(args);
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
   * <p>Deletes a forecast export job created using the <a>CreateForecastExportJob</a>
   *       operation. You can delete only export jobs that have a status of <code>ACTIVE</code> or
   *         <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeForecastExportJob</a> operation.</p>
   */
  public deleteForecastExportJob(
    args: DeleteForecastExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteForecastExportJobCommandOutput>;
  public deleteForecastExportJob(
    args: DeleteForecastExportJobCommandInput,
    cb: (err: any, data?: DeleteForecastExportJobCommandOutput) => void
  ): void;
  public deleteForecastExportJob(
    args: DeleteForecastExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteForecastExportJobCommandOutput) => void
  ): void;
  public deleteForecastExportJob(
    args: DeleteForecastExportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteForecastExportJobCommandOutput) => void),
    cb?: (err: any, data?: DeleteForecastExportJobCommandOutput) => void
  ): Promise<DeleteForecastExportJobCommandOutput> | void {
    const command = new DeleteForecastExportJobCommand(args);
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
   * <p>Deletes a predictor created using the <a>CreatePredictor</a> operation. You can
   *       delete only predictor that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>.
   *       To get the status, use the <a>DescribePredictor</a> operation.</p>
   */
  public deletePredictor(
    args: DeletePredictorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePredictorCommandOutput>;
  public deletePredictor(
    args: DeletePredictorCommandInput,
    cb: (err: any, data?: DeletePredictorCommandOutput) => void
  ): void;
  public deletePredictor(
    args: DeletePredictorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePredictorCommandOutput) => void
  ): void;
  public deletePredictor(
    args: DeletePredictorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePredictorCommandOutput) => void),
    cb?: (err: any, data?: DeletePredictorCommandOutput) => void
  ): Promise<DeletePredictorCommandOutput> | void {
    const command = new DeletePredictorCommand(args);
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
   * <p>Deletes a predictor backtest export job.</p>
   */
  public deletePredictorBacktestExportJob(
    args: DeletePredictorBacktestExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePredictorBacktestExportJobCommandOutput>;
  public deletePredictorBacktestExportJob(
    args: DeletePredictorBacktestExportJobCommandInput,
    cb: (err: any, data?: DeletePredictorBacktestExportJobCommandOutput) => void
  ): void;
  public deletePredictorBacktestExportJob(
    args: DeletePredictorBacktestExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePredictorBacktestExportJobCommandOutput) => void
  ): void;
  public deletePredictorBacktestExportJob(
    args: DeletePredictorBacktestExportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePredictorBacktestExportJobCommandOutput) => void),
    cb?: (err: any, data?: DeletePredictorBacktestExportJobCommandOutput) => void
  ): Promise<DeletePredictorBacktestExportJobCommandOutput> | void {
    const command = new DeletePredictorBacktestExportJobCommand(args);
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
   * <p>Deletes an entire resource tree. This operation will delete the parent resource and
   *             its child resources.</p>
   *         <p>Child resources are resources that were created from another resource. For example,
   *             when a forecast is generated from a predictor, the forecast is the child resource and
   *             the predictor is the parent resource.</p>
   *         <p>Amazon Forecast resources possess the following parent-child resource hierarchies:</p>
   *
   *         <ul>
   *             <li>
   *                 <p>
   *                   <b>Dataset</b>: dataset import jobs</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Dataset Group</b>: predictors, predictor backtest
   *                     export jobs, forecasts, forecast export jobs</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Predictor</b>: predictor backtest export jobs,
   *                     forecasts, forecast export jobs</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <b>Forecast</b>: forecast export jobs</p>
   *             </li>
   *          </ul>
   *         <note>
   *             <p>
   *                <code>DeleteResourceTree</code> will only delete Amazon Forecast resources, and will not
   *                 delete datasets or exported files stored in Amazon S3. </p>
   *         </note>
   */
  public deleteResourceTree(
    args: DeleteResourceTreeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceTreeCommandOutput>;
  public deleteResourceTree(
    args: DeleteResourceTreeCommandInput,
    cb: (err: any, data?: DeleteResourceTreeCommandOutput) => void
  ): void;
  public deleteResourceTree(
    args: DeleteResourceTreeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceTreeCommandOutput) => void
  ): void;
  public deleteResourceTree(
    args: DeleteResourceTreeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourceTreeCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourceTreeCommandOutput) => void
  ): Promise<DeleteResourceTreeCommandOutput> | void {
    const command = new DeleteResourceTreeCommand(args);
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
   * <p>Describes an Amazon Forecast dataset created using the <a>CreateDataset</a>
   *       operation.</p>
   *          <p>In addition to listing the parameters specified in the <code>CreateDataset</code> request,
   *       this operation includes the following dataset properties:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreationTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LastModificationTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeDataset(
    args: DescribeDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetCommandOutput>;
  public describeDataset(
    args: DescribeDatasetCommandInput,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;
  public describeDataset(
    args: DescribeDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;
  public describeDataset(
    args: DescribeDatasetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDatasetCommandOutput) => void),
    cb?: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): Promise<DescribeDatasetCommandOutput> | void {
    const command = new DescribeDatasetCommand(args);
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
   * <p>Describes a dataset group created using the <a>CreateDatasetGroup</a>
   *       operation.</p>
   *          <p>In addition to listing the parameters provided in the <code>CreateDatasetGroup</code>
   *       request, this operation includes the following properties:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DatasetArns</code> - The datasets belonging to the group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreationTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LastModificationTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeDatasetGroup(
    args: DescribeDatasetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetGroupCommandOutput>;
  public describeDatasetGroup(
    args: DescribeDatasetGroupCommandInput,
    cb: (err: any, data?: DescribeDatasetGroupCommandOutput) => void
  ): void;
  public describeDatasetGroup(
    args: DescribeDatasetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetGroupCommandOutput) => void
  ): void;
  public describeDatasetGroup(
    args: DescribeDatasetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDatasetGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeDatasetGroupCommandOutput) => void
  ): Promise<DescribeDatasetGroupCommandOutput> | void {
    const command = new DescribeDatasetGroupCommand(args);
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
   * <p>Describes a dataset import job created using the <a>CreateDatasetImportJob</a>
   *       operation.</p>
   *          <p>In addition to listing the parameters provided in the <code>CreateDatasetImportJob</code>
   *       request, this operation includes the following properties:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreationTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LastModificationTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DataSize</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FieldStatistics</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Message</code> - If an error occurred, information about the error.</p>
   *             </li>
   *          </ul>
   */
  public describeDatasetImportJob(
    args: DescribeDatasetImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetImportJobCommandOutput>;
  public describeDatasetImportJob(
    args: DescribeDatasetImportJobCommandInput,
    cb: (err: any, data?: DescribeDatasetImportJobCommandOutput) => void
  ): void;
  public describeDatasetImportJob(
    args: DescribeDatasetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetImportJobCommandOutput) => void
  ): void;
  public describeDatasetImportJob(
    args: DescribeDatasetImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDatasetImportJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeDatasetImportJobCommandOutput) => void
  ): Promise<DescribeDatasetImportJobCommandOutput> | void {
    const command = new DescribeDatasetImportJobCommand(args);
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
   * <p>Describes a forecast created using the <a>CreateForecast</a> operation.</p>
   *          <p>In addition to listing the properties provided in the <code>CreateForecast</code> request,
   *       this operation lists the following properties:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DatasetGroupArn</code> - The dataset group that provided the training
   *           data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreationTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LastModificationTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Message</code> - If an error occurred, information about the error.</p>
   *             </li>
   *          </ul>
   */
  public describeForecast(
    args: DescribeForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeForecastCommandOutput>;
  public describeForecast(
    args: DescribeForecastCommandInput,
    cb: (err: any, data?: DescribeForecastCommandOutput) => void
  ): void;
  public describeForecast(
    args: DescribeForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeForecastCommandOutput) => void
  ): void;
  public describeForecast(
    args: DescribeForecastCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeForecastCommandOutput) => void),
    cb?: (err: any, data?: DescribeForecastCommandOutput) => void
  ): Promise<DescribeForecastCommandOutput> | void {
    const command = new DescribeForecastCommand(args);
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
   * <p>Describes a forecast export job created using the <a>CreateForecastExportJob</a> operation.</p>
   *          <p>In addition to listing the properties provided by the user in the
   *         <code>CreateForecastExportJob</code> request, this operation lists the following
   *       properties:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CreationTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LastModificationTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Message</code> - If an error occurred, information about the error.</p>
   *             </li>
   *          </ul>
   */
  public describeForecastExportJob(
    args: DescribeForecastExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeForecastExportJobCommandOutput>;
  public describeForecastExportJob(
    args: DescribeForecastExportJobCommandInput,
    cb: (err: any, data?: DescribeForecastExportJobCommandOutput) => void
  ): void;
  public describeForecastExportJob(
    args: DescribeForecastExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeForecastExportJobCommandOutput) => void
  ): void;
  public describeForecastExportJob(
    args: DescribeForecastExportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeForecastExportJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeForecastExportJobCommandOutput) => void
  ): Promise<DescribeForecastExportJobCommandOutput> | void {
    const command = new DescribeForecastExportJobCommand(args);
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
   * <p>Describes a predictor created using the <a>CreatePredictor</a>
   *       operation.</p>
   *          <p>In addition to listing the properties provided in the <code>CreatePredictor</code>
   *       request, this operation lists the following properties:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DatasetImportJobArns</code> - The dataset import jobs used to import training
   *           data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AutoMLAlgorithmArns</code> - If AutoML is performed, the algorithms that were
   *           evaluated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreationTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LastModificationTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Message</code> - If an error occurred, information about the error.</p>
   *             </li>
   *          </ul>
   */
  public describePredictor(
    args: DescribePredictorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePredictorCommandOutput>;
  public describePredictor(
    args: DescribePredictorCommandInput,
    cb: (err: any, data?: DescribePredictorCommandOutput) => void
  ): void;
  public describePredictor(
    args: DescribePredictorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePredictorCommandOutput) => void
  ): void;
  public describePredictor(
    args: DescribePredictorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePredictorCommandOutput) => void),
    cb?: (err: any, data?: DescribePredictorCommandOutput) => void
  ): Promise<DescribePredictorCommandOutput> | void {
    const command = new DescribePredictorCommand(args);
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
   * <p>Describes a predictor backtest export job created using the <a>CreatePredictorBacktestExportJob</a> operation.</p>
   *         <p>In addition to listing the properties provided by the user in the
   *             <code>CreatePredictorBacktestExportJob</code> request, this operation lists the
   *             following properties:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>CreationTime</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>LastModificationTime</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>Status</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Message</code> (if an error occurred)</p>
   *             </li>
   *          </ul>
   */
  public describePredictorBacktestExportJob(
    args: DescribePredictorBacktestExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePredictorBacktestExportJobCommandOutput>;
  public describePredictorBacktestExportJob(
    args: DescribePredictorBacktestExportJobCommandInput,
    cb: (err: any, data?: DescribePredictorBacktestExportJobCommandOutput) => void
  ): void;
  public describePredictorBacktestExportJob(
    args: DescribePredictorBacktestExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePredictorBacktestExportJobCommandOutput) => void
  ): void;
  public describePredictorBacktestExportJob(
    args: DescribePredictorBacktestExportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePredictorBacktestExportJobCommandOutput) => void),
    cb?: (err: any, data?: DescribePredictorBacktestExportJobCommandOutput) => void
  ): Promise<DescribePredictorBacktestExportJobCommandOutput> | void {
    const command = new DescribePredictorBacktestExportJobCommand(args);
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
   * <p>Provides metrics on the accuracy of the models that were trained by the <a>CreatePredictor</a> operation. Use metrics to see how well the model performed and
   *       to decide whether to use the predictor to generate a forecast. For more information, see
   *         <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">Predictor
   *         Metrics</a>.</p>
   *          <p>This operation generates metrics for each backtest window that was evaluated. The number
   *       of backtest windows (<code>NumberOfBacktestWindows</code>) is specified using the <a>EvaluationParameters</a> object, which is optionally included in the
   *         <code>CreatePredictor</code> request. If <code>NumberOfBacktestWindows</code> isn't
   *       specified, the number defaults to one.</p>
   *          <p>The parameters of the <code>filling</code> method determine which items contribute to the
   *       metrics. If you want all items to contribute, specify <code>zero</code>. If you want only
   *       those items that have complete data in the range being evaluated to contribute, specify
   *         <code>nan</code>. For more information, see <a>FeaturizationMethod</a>.</p>
   *
   *          <note>
   *             <p>Before you can get accuracy metrics, the <code>Status</code> of the predictor must be
   *           <code>ACTIVE</code>, signifying that training has completed. To get the status, use the
   *           <a>DescribePredictor</a> operation.</p>
   *          </note>
   */
  public getAccuracyMetrics(
    args: GetAccuracyMetricsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccuracyMetricsCommandOutput>;
  public getAccuracyMetrics(
    args: GetAccuracyMetricsCommandInput,
    cb: (err: any, data?: GetAccuracyMetricsCommandOutput) => void
  ): void;
  public getAccuracyMetrics(
    args: GetAccuracyMetricsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccuracyMetricsCommandOutput) => void
  ): void;
  public getAccuracyMetrics(
    args: GetAccuracyMetricsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccuracyMetricsCommandOutput) => void),
    cb?: (err: any, data?: GetAccuracyMetricsCommandOutput) => void
  ): Promise<GetAccuracyMetricsCommandOutput> | void {
    const command = new GetAccuracyMetricsCommand(args);
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
   * <p>Returns a list of dataset groups created using the <a>CreateDatasetGroup</a>
   *       operation. For each dataset group, this operation returns a summary of its properties,
   *       including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by
   *       using the dataset group ARN with the <a>DescribeDatasetGroup</a> operation.</p>
   */
  public listDatasetGroups(
    args: ListDatasetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetGroupsCommandOutput>;
  public listDatasetGroups(
    args: ListDatasetGroupsCommandInput,
    cb: (err: any, data?: ListDatasetGroupsCommandOutput) => void
  ): void;
  public listDatasetGroups(
    args: ListDatasetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetGroupsCommandOutput) => void
  ): void;
  public listDatasetGroups(
    args: ListDatasetGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDatasetGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListDatasetGroupsCommandOutput) => void
  ): Promise<ListDatasetGroupsCommandOutput> | void {
    const command = new ListDatasetGroupsCommand(args);
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
   * <p>Returns a list of dataset import jobs created using the <a>CreateDatasetImportJob</a> operation. For each import job, this operation returns a
   *       summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the
   *       complete set of properties by using the ARN with the <a>DescribeDatasetImportJob</a> operation. You can filter the list by providing an array of <a>Filter</a>
   *       objects.</p>
   */
  public listDatasetImportJobs(
    args: ListDatasetImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetImportJobsCommandOutput>;
  public listDatasetImportJobs(
    args: ListDatasetImportJobsCommandInput,
    cb: (err: any, data?: ListDatasetImportJobsCommandOutput) => void
  ): void;
  public listDatasetImportJobs(
    args: ListDatasetImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetImportJobsCommandOutput) => void
  ): void;
  public listDatasetImportJobs(
    args: ListDatasetImportJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDatasetImportJobsCommandOutput) => void),
    cb?: (err: any, data?: ListDatasetImportJobsCommandOutput) => void
  ): Promise<ListDatasetImportJobsCommandOutput> | void {
    const command = new ListDatasetImportJobsCommand(args);
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
   * <p>Returns a list of datasets created using the <a>CreateDataset</a> operation.
   *       For each dataset, a summary of its properties, including its Amazon Resource Name (ARN), is
   *       returned. To retrieve the complete set of properties, use the ARN with the <a>DescribeDataset</a> operation.</p>
   */
  public listDatasets(
    args: ListDatasetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetsCommandOutput>;
  public listDatasets(args: ListDatasetsCommandInput, cb: (err: any, data?: ListDatasetsCommandOutput) => void): void;
  public listDatasets(
    args: ListDatasetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;
  public listDatasets(
    args: ListDatasetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDatasetsCommandOutput) => void),
    cb?: (err: any, data?: ListDatasetsCommandOutput) => void
  ): Promise<ListDatasetsCommandOutput> | void {
    const command = new ListDatasetsCommand(args);
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
   * <p>Returns a list of forecast export jobs created using the <a>CreateForecastExportJob</a> operation. For each forecast export job, this operation
   *       returns a summary of its properties, including its Amazon Resource Name (ARN). To retrieve the
   *       complete set of properties, use the ARN with the <a>DescribeForecastExportJob</a>
   *       operation. You can filter the list using an array of <a>Filter</a> objects.</p>
   */
  public listForecastExportJobs(
    args: ListForecastExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListForecastExportJobsCommandOutput>;
  public listForecastExportJobs(
    args: ListForecastExportJobsCommandInput,
    cb: (err: any, data?: ListForecastExportJobsCommandOutput) => void
  ): void;
  public listForecastExportJobs(
    args: ListForecastExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListForecastExportJobsCommandOutput) => void
  ): void;
  public listForecastExportJobs(
    args: ListForecastExportJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListForecastExportJobsCommandOutput) => void),
    cb?: (err: any, data?: ListForecastExportJobsCommandOutput) => void
  ): Promise<ListForecastExportJobsCommandOutput> | void {
    const command = new ListForecastExportJobsCommand(args);
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
   * <p>Returns a list of forecasts created using the <a>CreateForecast</a> operation.
   *       For each forecast, this operation returns a summary of its properties, including its Amazon
   *       Resource Name (ARN). To retrieve the complete set of properties, specify the ARN with the
   *         <a>DescribeForecast</a> operation. You can filter the list using an array of
   *         <a>Filter</a> objects.</p>
   */
  public listForecasts(
    args: ListForecastsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListForecastsCommandOutput>;
  public listForecasts(
    args: ListForecastsCommandInput,
    cb: (err: any, data?: ListForecastsCommandOutput) => void
  ): void;
  public listForecasts(
    args: ListForecastsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListForecastsCommandOutput) => void
  ): void;
  public listForecasts(
    args: ListForecastsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListForecastsCommandOutput) => void),
    cb?: (err: any, data?: ListForecastsCommandOutput) => void
  ): Promise<ListForecastsCommandOutput> | void {
    const command = new ListForecastsCommand(args);
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
   * <p>Returns a list of predictor backtest export jobs created using the <a>CreatePredictorBacktestExportJob</a> operation. This operation returns a summary
   *             for each backtest export job. You can filter the list using an array of <a>Filter</a> objects.</p>
   *         <p>To retrieve the complete set of properties for a particular backtest export job, use the
   *             ARN with the <a>DescribePredictorBacktestExportJob</a> operation.</p>
   */
  public listPredictorBacktestExportJobs(
    args: ListPredictorBacktestExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPredictorBacktestExportJobsCommandOutput>;
  public listPredictorBacktestExportJobs(
    args: ListPredictorBacktestExportJobsCommandInput,
    cb: (err: any, data?: ListPredictorBacktestExportJobsCommandOutput) => void
  ): void;
  public listPredictorBacktestExportJobs(
    args: ListPredictorBacktestExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPredictorBacktestExportJobsCommandOutput) => void
  ): void;
  public listPredictorBacktestExportJobs(
    args: ListPredictorBacktestExportJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPredictorBacktestExportJobsCommandOutput) => void),
    cb?: (err: any, data?: ListPredictorBacktestExportJobsCommandOutput) => void
  ): Promise<ListPredictorBacktestExportJobsCommandOutput> | void {
    const command = new ListPredictorBacktestExportJobsCommand(args);
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
   * <p>Returns a list of predictors created using the <a>CreatePredictor</a>
   *       operation. For each predictor, this operation returns a summary of its properties, including
   *       its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the
   *       ARN with the <a>DescribePredictor</a> operation. You can filter the list using an
   *       array of <a>Filter</a> objects.</p>
   */
  public listPredictors(
    args: ListPredictorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPredictorsCommandOutput>;
  public listPredictors(
    args: ListPredictorsCommandInput,
    cb: (err: any, data?: ListPredictorsCommandOutput) => void
  ): void;
  public listPredictors(
    args: ListPredictorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPredictorsCommandOutput) => void
  ): void;
  public listPredictors(
    args: ListPredictorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPredictorsCommandOutput) => void),
    cb?: (err: any, data?: ListPredictorsCommandOutput) => void
  ): Promise<ListPredictorsCommandOutput> | void {
    const command = new ListPredictorsCommand(args);
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
   * <p>Lists the tags for an Amazon Forecast resource.</p>
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
   * <p>Stops a resource.</p>
   *          <p>The resource undergoes the following states:
   *          <code>CREATE_STOPPING</code> and <code>CREATE_STOPPED</code>. You cannot resume
   *          a resource once it has been stopped.</p>
   *          <p>This operation can be applied to the following resources (and their corresponding child
   *          resources):</p>
   *          <ul>
   *             <li>
   *                <p>Dataset Import Job</p>
   *             </li>
   *             <li>
   *                <p>Predictor Job</p>
   *             </li>
   *             <li>
   *                <p>Forecast Job</p>
   *             </li>
   *             <li>
   *                <p>Forecast Export Job</p>
   *             </li>
   *             <li>
   *                <p>Predictor Backtest Export Job</p>
   *             </li>
   *          </ul>
   */
  public stopResource(
    args: StopResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopResourceCommandOutput>;
  public stopResource(args: StopResourceCommandInput, cb: (err: any, data?: StopResourceCommandOutput) => void): void;
  public stopResource(
    args: StopResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopResourceCommandOutput) => void
  ): void;
  public stopResource(
    args: StopResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopResourceCommandOutput) => void),
    cb?: (err: any, data?: StopResourceCommandOutput) => void
  ): Promise<StopResourceCommandOutput> | void {
    const command = new StopResourceCommand(args);
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
   * <p>Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are also deleted.</p>
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
   * <p>Deletes the specified tags from a resource.</p>
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
   * <p>Replaces the datasets in a dataset group with the specified datasets.</p>
   *          <note>
   *             <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can
   *         use the dataset group to create a predictor. Use the <a>DescribeDatasetGroup</a>
   *         operation to get the status.</p>
   *          </note>
   */
  public updateDatasetGroup(
    args: UpdateDatasetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatasetGroupCommandOutput>;
  public updateDatasetGroup(
    args: UpdateDatasetGroupCommandInput,
    cb: (err: any, data?: UpdateDatasetGroupCommandOutput) => void
  ): void;
  public updateDatasetGroup(
    args: UpdateDatasetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatasetGroupCommandOutput) => void
  ): void;
  public updateDatasetGroup(
    args: UpdateDatasetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDatasetGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateDatasetGroupCommandOutput) => void
  ): Promise<UpdateDatasetGroupCommandOutput> | void {
    const command = new UpdateDatasetGroupCommand(args);
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
