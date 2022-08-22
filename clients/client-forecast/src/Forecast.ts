// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { ForecastClient } from "./ForecastClient";

/**
 * <p>Provides APIs for creating and managing Amazon Forecast resources.</p>
 */
export class Forecast extends ForecastClient {
  /**
   * <p>Creates an Amazon Forecast predictor.</p>
   *         <p>Amazon Forecast creates predictors with AutoPredictor, which involves applying the
   *             optimal combination of algorithms to each time series in your datasets. You can use
   *                 <a>CreateAutoPredictor</a> to create new predictors or upgrade/retrain
   *             existing predictors.</p>
   *
   *         <p>
   *             <b>Creating new predictors</b>
   *          </p>
   *
   *         <p>The following parameters are required when creating a new predictor:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PredictorName</code> - A unique name for the predictor.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DatasetGroupArn</code> - The ARN of the dataset group used to train the
   *                     predictor.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ForecastFrequency</code> - The granularity of your forecasts (hourly,
   *                     daily, weekly, etc).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ForecastHorizon</code> - The number of time-steps that the model
   *                     predicts. The forecast horizon is also called the prediction length.</p>
   *             </li>
   *          </ul>
   *         <p>When creating a new predictor, do not specify a value for
   *                 <code>ReferencePredictorArn</code>.</p>
   *         <p>
   *             <b>Upgrading and retraining predictors</b>
   *         </p>
   *         <p>The following parameters are required when retraining or upgrading a predictor:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PredictorName</code> - A unique name for the predictor.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ReferencePredictorArn</code> - The ARN of the predictor to retrain or
   *                     upgrade.</p>
   *             </li>
   *          </ul>
   *         <p>When upgrading or retraining a predictor, only specify values for the
   *                 <code>ReferencePredictorArn</code> and <code>PredictorName</code>. </p>
   */
  public createAutoPredictor(
    args: CreateAutoPredictorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAutoPredictorCommandOutput>;
  public createAutoPredictor(
    args: CreateAutoPredictorCommandInput,
    cb: (err: any, data?: CreateAutoPredictorCommandOutput) => void
  ): void;
  public createAutoPredictor(
    args: CreateAutoPredictorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAutoPredictorCommandOutput) => void
  ): void;
  public createAutoPredictor(
    args: CreateAutoPredictorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAutoPredictorCommandOutput) => void),
    cb?: (err: any, data?: CreateAutoPredictorCommandOutput) => void
  ): Promise<CreateAutoPredictorCommandOutput> | void {
    const command = new CreateAutoPredictorCommand(args);
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
   *         <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Importing datasets</a>.</p>
   *          <p>To get a list of all your datasets, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html">ListDatasets</a> operation.</p>
   *          <p>For example Forecast datasets, see the <a href="https://github.com/aws-samples/amazon-forecast-samples">Amazon Forecast Sample GitHub
   *         repository</a>.</p>
   *          <note>
   *             <p>The <code>Status</code> of a dataset must be <code>ACTIVE</code> before you can import
   *         training data. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation to get
   *         the status.</p>
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
   *       datasets to the dataset group when you create the dataset group, or later by using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation.</p>
   *          <p>After creating a dataset group and adding datasets, you use the dataset group when you
   *       create a predictor. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Dataset groups</a>.</p>
   *          <p>To get a list of all your datasets groups, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a>
   *       operation.</p>
   *          <note>
   *             <p>The <code>Status</code> of a dataset group must be <code>ACTIVE</code> before you can
   *         use the dataset group to create a predictor. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p>
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
   *          <p>You must specify a <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DataSource.html">DataSource</a> object that includes an
   *       AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data, as Amazon Forecast makes a copy
   *       of your data and processes it in an internal AWS system. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/aws-forecast-iam-roles.html">Set up
   *         permissions</a>.</p>
   *          <p>The training data must be in CSV or Parquet format. The delimiter must be a comma (,).</p>
   *          <p>You can specify the path to a specific file, the S3 bucket, or to a folder in the S3
   *       bucket. For the latter two cases, Amazon Forecast imports all files up to the limit of 10,000
   *       files.</p>
   *          <p>Because dataset imports are not aggregated, your most recent dataset import is the one
   *       that is used when training a predictor or generating a forecast. Make sure that your most
   *       recent dataset import contains all of the data you want to model off of, and not just the new
   *       data collected since the previous import.</p>
   *          <p>To get a list of all your dataset import jobs, filtered by specified criteria, use the
   *         <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> operation.</p>
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
   * <note>
   *             <p>Explainability is only available for Forecasts and Predictors generated from an
   *                 AutoPredictor (<a>CreateAutoPredictor</a>)</p>
   *         </note>
   *         <p>Creates an Amazon Forecast Explainability.</p>
   *         <p>Explainability helps you better understand how the attributes in your datasets impact
   *             forecast. Amazon Forecast uses a metric called Impact scores to quantify the relative
   *             impact of each attribute and determine whether they increase or decrease forecast
   *             values.</p>
   *         <p>To enable Forecast Explainability, your predictor must include at least one of the
   *             following: related time series, item metadata, or additional datasets like Holidays and
   *             the Weather Index.</p>
   *         <p>CreateExplainability accepts either a Predictor ARN or Forecast ARN. To receive
   *             aggregated Impact scores for all time series and time points in your datasets, provide a
   *             Predictor ARN. To receive Impact scores for specific time series and time points,
   *             provide a Forecast ARN.</p>
   *         <p>
   *             <b>CreateExplainability with a Predictor ARN</b>
   *         </p>
   *         <note>
   *             <p>You can only have one Explainability resource per predictor. If you already
   *                 enabled <code>ExplainPredictor</code> in <a>CreateAutoPredictor</a>, that
   *                 predictor already has an Explainability resource.</p>
   *         </note>
   *         <p>The following parameters are required when providing a Predictor ARN:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ExplainabilityName</code> - A unique name for the Explainability.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ResourceArn</code> - The Arn of the predictor.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TimePointGranularity</code> - Must be set to “ALL”.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TimeSeriesGranularity</code> - Must be set to “ALL”.</p>
   *             </li>
   *          </ul>
   *         <p>Do not specify a value for the following parameters:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DataSource</code> - Only valid when TimeSeriesGranularity is
   *                     “SPECIFIC”.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Schema</code> - Only valid when TimeSeriesGranularity is
   *                     “SPECIFIC”.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>StartDateTime</code> - Only valid when TimePointGranularity is
   *                     “SPECIFIC”.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>EndDateTime</code> - Only valid when TimePointGranularity is
   *                     “SPECIFIC”.</p>
   *             </li>
   *          </ul>
   *         <p>
   *             <b>CreateExplainability with a Forecast ARN</b>
   *         </p>
   *         <note>
   *             <p>You can specify a maximum of 50 time series and 500 time points.</p>
   *         </note>
   *         <p>The following parameters are required when providing a Predictor ARN:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ExplainabilityName</code> - A unique name for the Explainability.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ResourceArn</code> - The Arn of the forecast.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TimePointGranularity</code> - Either “ALL” or “SPECIFIC”.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TimeSeriesGranularity</code> - Either “ALL” or “SPECIFIC”.</p>
   *             </li>
   *          </ul>
   *         <p>If you set TimeSeriesGranularity to “SPECIFIC”, you must also provide the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>DataSource</code> - The S3 location of the CSV file specifying your time
   *                     series.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Schema</code> - The Schema defines the attributes and attribute types
   *                     listed in the Data Source.</p>
   *             </li>
   *          </ul>
   *         <p>If you set TimePointGranularity to “SPECIFIC”, you must also provide the
   *             following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>StartDateTime</code> - The first timestamp in the range of time
   *                     points.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>EndDateTime</code> - The last timestamp in the range of time
   *                     points.</p>
   *             </li>
   *          </ul>
   */
  public createExplainability(
    args: CreateExplainabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExplainabilityCommandOutput>;
  public createExplainability(
    args: CreateExplainabilityCommandInput,
    cb: (err: any, data?: CreateExplainabilityCommandOutput) => void
  ): void;
  public createExplainability(
    args: CreateExplainabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExplainabilityCommandOutput) => void
  ): void;
  public createExplainability(
    args: CreateExplainabilityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateExplainabilityCommandOutput) => void),
    cb?: (err: any, data?: CreateExplainabilityCommandOutput) => void
  ): Promise<CreateExplainabilityCommandOutput> | void {
    const command = new CreateExplainabilityCommand(args);
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
   * <p>Exports an Explainability resource created by the <a>CreateExplainability</a> operation. Exported files are exported to an Amazon Simple Storage Service (Amazon
   *             S3) bucket.</p>
   *         <p>You must specify a <a>DataDestination</a> object that includes an Amazon S3
   *             bucket and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3
   *             bucket. For more information, see <a>aws-forecast-iam-roles</a>.</p>
   *         <note>
   *             <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you
   *                 can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribeExplainabilityExport</a> operation.</p>
   *         </note>
   */
  public createExplainabilityExport(
    args: CreateExplainabilityExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExplainabilityExportCommandOutput>;
  public createExplainabilityExport(
    args: CreateExplainabilityExportCommandInput,
    cb: (err: any, data?: CreateExplainabilityExportCommandOutput) => void
  ): void;
  public createExplainabilityExport(
    args: CreateExplainabilityExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExplainabilityExportCommandOutput) => void
  ): void;
  public createExplainabilityExport(
    args: CreateExplainabilityExportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateExplainabilityExportCommandOutput) => void),
    cb?: (err: any, data?: CreateExplainabilityExportCommandOutput) => void
  ): Promise<CreateExplainabilityExportCommandOutput> | void {
    const command = new CreateExplainabilityExportCommand(args);
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
   *          <p>By default, a forecast includes predictions for every item (<code>item_id</code>) in the dataset group that was used to train the predictor.
   *       However, you can use the <code>TimeSeriesSelector</code> object to generate a forecast on a subset of time series. Forecast creation is skipped for any time series that you specify that are not in the input dataset. The forecast export file will not contain these time series or their forecasted values.</p>
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
   * <p>Creates a predictor monitor resource for an existing auto predictor. Predictor monitoring allows you to see how your predictor's performance changes over time.
   *            For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring.html">Predictor Monitoring</a>.
   *        </p>
   */
  public createMonitor(
    args: CreateMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMonitorCommandOutput>;
  public createMonitor(
    args: CreateMonitorCommandInput,
    cb: (err: any, data?: CreateMonitorCommandOutput) => void
  ): void;
  public createMonitor(
    args: CreateMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMonitorCommandOutput) => void
  ): void;
  public createMonitor(
    args: CreateMonitorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMonitorCommandOutput) => void),
    cb?: (err: any, data?: CreateMonitorCommandOutput) => void
  ): Promise<CreateMonitorCommandOutput> | void {
    const command = new CreateMonitorCommand(args);
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
   * <note>
   *             <p> This operation creates a legacy predictor that does not include all the predictor
   *         functionalities provided by Amazon Forecast. To create a predictor that is compatible with all
   *         aspects of Forecast, use <a>CreateAutoPredictor</a>.</p>
   *          </note>
   *          <p>Creates an Amazon Forecast predictor.</p>
   *          <p>In the request, provide a dataset group and either specify an algorithm or let Amazon Forecast
   *       choose an algorithm for you using AutoML. If you specify an algorithm, you also can override
   *       algorithm-specific hyperparameters.</p>
   *          <p>Amazon Forecast uses the algorithm to train a predictor using the latest version of the datasets
   *       in the specified dataset group. You can then generate a forecast using the <a>CreateForecast</a> operation.</p>
   *          <p> To see the evaluation metrics, use the <a>GetAccuracyMetrics</a> operation. </p>
   *          <p>You can specify a featurization configuration to fill and aggregate the data fields in the
   *         <code>TARGET_TIME_SERIES</code> dataset to improve model training. For more information, see
   *         <a>FeaturizationConfig</a>.</p>
   *          <p>For RELATED_TIME_SERIES datasets, <code>CreatePredictor</code> verifies that the
   *         <code>DataFrequency</code> specified when the dataset was created matches the
   *         <code>ForecastFrequency</code>. TARGET_TIME_SERIES datasets don't have this restriction.
   *       Amazon Forecast also verifies the delimiter and timestamp format. For more information, see <a>howitworks-datasets-groups</a>.</p>
   *          <p>By default, predictors are trained and evaluated at the 0.1 (P10), 0.5 (P50), and 0.9
   *       (P90) quantiles. You can choose custom forecast types to train and evaluate your predictor by
   *       setting the <code>ForecastTypes</code>. </p>
   *          <p>
   *             <b>AutoML</b>
   *          </p>
   *          <p>If you want Amazon Forecast to evaluate each algorithm and choose the one that minimizes the
   *         <code>objective function</code>, set <code>PerformAutoML</code> to <code>true</code>. The
   *         <code>objective function</code> is defined as the mean of the weighted losses over the
   *       forecast types. By default, these are the p10, p50, and p90 quantile losses. For more
   *       information, see <a>EvaluationResult</a>.</p>
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
   * <p>Exports backtest forecasts and accuracy metrics generated by the <a>CreateAutoPredictor</a> or <a>CreatePredictor</a> operations. Two
   *             folders containing CSV or Parquet files are exported to your specified S3 bucket.</p>
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
   *             <p>The <code>Status</code> of the export job must be <code>ACTIVE</code> before you
   *                 can access the export in your Amazon S3 bucket. To get the status, use the <a>DescribePredictorBacktestExportJob</a> operation.</p>
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
   * <p>What-if analysis is a scenario modeling technique where you make a hypothetical change to a time series and
   *       compare the forecasts generated by these changes against the baseline, unchanged time series. It is important to
   *       remember that the purpose of a what-if analysis is to understand how a forecast can change given different
   *       modifications to the baseline time series.</p>
   *          <p>For example, imagine you are a clothing retailer who is considering an end of season sale to clear space for
   *       new styles. After creating a baseline forecast, you can use a what-if analysis to investigate how different sales
   *       tactics might affect your goals. You could create a scenario where everything is given a 25% markdown and another
   *       where everything is given a fixed dollar markdown. You can create a scenario where the sale lasts for 1 week and
   *       another where the sale lasts for 1 month. Your what-if analysis enables you to compare many different scenarios
   *       against each other.</p>
   *          <p>Note that a what-if analysis is meant to display what the forecasting model has learned and how it will behave in the scenarios that you are evaluating. Do not blindly use the results of the what-if analysis to make business decisions. For instance, forecasts might not be accurate for novel scenarios where there is no reference available to determine whether a forecast is good.</p>
   *          <p>The <a>TimeSeriesSelector</a> object defines the items that you want in the what-if analysis.</p>
   */
  public createWhatIfAnalysis(
    args: CreateWhatIfAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWhatIfAnalysisCommandOutput>;
  public createWhatIfAnalysis(
    args: CreateWhatIfAnalysisCommandInput,
    cb: (err: any, data?: CreateWhatIfAnalysisCommandOutput) => void
  ): void;
  public createWhatIfAnalysis(
    args: CreateWhatIfAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWhatIfAnalysisCommandOutput) => void
  ): void;
  public createWhatIfAnalysis(
    args: CreateWhatIfAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWhatIfAnalysisCommandOutput) => void),
    cb?: (err: any, data?: CreateWhatIfAnalysisCommandOutput) => void
  ): Promise<CreateWhatIfAnalysisCommandOutput> | void {
    const command = new CreateWhatIfAnalysisCommand(args);
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
   * <p>A what-if forecast is a forecast that is created from a modified version of the baseline forecast. Each
   *       what-if forecast incorporates either a replacement dataset or a set of transformations to the original dataset. </p>
   */
  public createWhatIfForecast(
    args: CreateWhatIfForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWhatIfForecastCommandOutput>;
  public createWhatIfForecast(
    args: CreateWhatIfForecastCommandInput,
    cb: (err: any, data?: CreateWhatIfForecastCommandOutput) => void
  ): void;
  public createWhatIfForecast(
    args: CreateWhatIfForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWhatIfForecastCommandOutput) => void
  ): void;
  public createWhatIfForecast(
    args: CreateWhatIfForecastCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWhatIfForecastCommandOutput) => void),
    cb?: (err: any, data?: CreateWhatIfForecastCommandOutput) => void
  ): Promise<CreateWhatIfForecastCommandOutput> | void {
    const command = new CreateWhatIfForecastCommand(args);
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
   * <p>Exports a forecast created by the <a>CreateWhatIfForecast</a> operation to your
   *       Amazon Simple Storage Service (Amazon S3) bucket. The forecast file name will match the following conventions:</p>
   *          <p>
   *             <code>≈<ForecastExportJobName>_<ExportTimestamp>_<PartNumber></code>
   *          </p>
   *          <p>The <ExportTimestamp> component is in Java SimpleDateFormat
   *       (yyyy-MM-ddTHH-mm-ssZ).</p>
   *          <p>You must specify a <a>DataDestination</a> object that includes an AWS Identity and Access Management
   *       (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket. For more information, see
   *       <a>aws-forecast-iam-roles</a>.</p>
   *          <p>For more information, see <a>howitworks-forecast</a>.</p>
   *          <p>To get a list of all your what-if forecast export jobs, use the <a>ListWhatIfForecastExports</a>
   *       operation.</p>
   *          <note>
   *             <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before
   *         you can access the forecast in your Amazon S3 bucket. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation.</p>
   *          </note>
   */
  public createWhatIfForecastExport(
    args: CreateWhatIfForecastExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWhatIfForecastExportCommandOutput>;
  public createWhatIfForecastExport(
    args: CreateWhatIfForecastExportCommandInput,
    cb: (err: any, data?: CreateWhatIfForecastExportCommandOutput) => void
  ): void;
  public createWhatIfForecastExport(
    args: CreateWhatIfForecastExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWhatIfForecastExportCommandOutput) => void
  ): void;
  public createWhatIfForecastExport(
    args: CreateWhatIfForecastExportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWhatIfForecastExportCommandOutput) => void),
    cb?: (err: any, data?: CreateWhatIfForecastExportCommandOutput) => void
  ): Promise<CreateWhatIfForecastExportCommandOutput> | void {
    const command = new CreateWhatIfForecastExportCommand(args);
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
   * <p>Deletes an Amazon Forecast dataset that was created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation. You can
   *       only delete datasets that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>.
   *       To get the status use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation.</p>
   *          <note>
   *             <p>Forecast does not automatically update any dataset groups that contain the deleted dataset.
   *         In order to update the dataset group, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation,
   *         omitting the deleted dataset's ARN.</p>
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
   * <p>Deletes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation.
   *       You can only delete dataset groups that have a status of <code>ACTIVE</code>,
   *         <code>CREATE_FAILED</code>, or <code>UPDATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a> operation.</p>
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
   * <p>Deletes a dataset import job created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>
   *       operation. You can delete only dataset import jobs that have a status of <code>ACTIVE</code>
   *       or <code>CREATE_FAILED</code>. To get the status, use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>
   *       operation.</p>
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
   * <p>Deletes an Explainability resource.</p>
   *         <p>You can delete only predictor that have a status of <code>ACTIVE</code> or
   *                 <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeExplainability</a> operation.</p>
   */
  public deleteExplainability(
    args: DeleteExplainabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExplainabilityCommandOutput>;
  public deleteExplainability(
    args: DeleteExplainabilityCommandInput,
    cb: (err: any, data?: DeleteExplainabilityCommandOutput) => void
  ): void;
  public deleteExplainability(
    args: DeleteExplainabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExplainabilityCommandOutput) => void
  ): void;
  public deleteExplainability(
    args: DeleteExplainabilityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteExplainabilityCommandOutput) => void),
    cb?: (err: any, data?: DeleteExplainabilityCommandOutput) => void
  ): Promise<DeleteExplainabilityCommandOutput> | void {
    const command = new DeleteExplainabilityCommand(args);
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
   * <p>Deletes an Explainability export.</p>
   */
  public deleteExplainabilityExport(
    args: DeleteExplainabilityExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExplainabilityExportCommandOutput>;
  public deleteExplainabilityExport(
    args: DeleteExplainabilityExportCommandInput,
    cb: (err: any, data?: DeleteExplainabilityExportCommandOutput) => void
  ): void;
  public deleteExplainabilityExport(
    args: DeleteExplainabilityExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExplainabilityExportCommandOutput) => void
  ): void;
  public deleteExplainabilityExport(
    args: DeleteExplainabilityExportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteExplainabilityExportCommandOutput) => void),
    cb?: (err: any, data?: DeleteExplainabilityExportCommandOutput) => void
  ): Promise<DeleteExplainabilityExportCommandOutput> | void {
    const command = new DeleteExplainabilityExportCommand(args);
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
   * <p>Deletes a monitor resource. You can only delete a monitor resource with a status of <code>ACTIVE</code>, <code>ACTIVE_STOPPED</code>, <code>CREATE_FAILED</code>, or <code>CREATE_STOPPED</code>.</p>
   */
  public deleteMonitor(
    args: DeleteMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMonitorCommandOutput>;
  public deleteMonitor(
    args: DeleteMonitorCommandInput,
    cb: (err: any, data?: DeleteMonitorCommandOutput) => void
  ): void;
  public deleteMonitor(
    args: DeleteMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMonitorCommandOutput) => void
  ): void;
  public deleteMonitor(
    args: DeleteMonitorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMonitorCommandOutput) => void),
    cb?: (err: any, data?: DeleteMonitorCommandOutput) => void
  ): Promise<DeleteMonitorCommandOutput> | void {
    const command = new DeleteMonitorCommand(args);
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
   * <p>Deletes a predictor created using the <a>DescribePredictor</a> or <a>CreatePredictor</a> operations. You can delete only predictor that have a status of
   *         <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribePredictor</a> operation.</p>
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
   * <p>Deletes a what-if analysis created using the <a>CreateWhatIfAnalysis</a>
   *       operation. You can delete only what-if analyses that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfAnalysis</a> operation. </p>
   *          <p>You can't delete a what-if analysis while any of its forecasts are being exported.</p>
   */
  public deleteWhatIfAnalysis(
    args: DeleteWhatIfAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWhatIfAnalysisCommandOutput>;
  public deleteWhatIfAnalysis(
    args: DeleteWhatIfAnalysisCommandInput,
    cb: (err: any, data?: DeleteWhatIfAnalysisCommandOutput) => void
  ): void;
  public deleteWhatIfAnalysis(
    args: DeleteWhatIfAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWhatIfAnalysisCommandOutput) => void
  ): void;
  public deleteWhatIfAnalysis(
    args: DeleteWhatIfAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWhatIfAnalysisCommandOutput) => void),
    cb?: (err: any, data?: DeleteWhatIfAnalysisCommandOutput) => void
  ): Promise<DeleteWhatIfAnalysisCommandOutput> | void {
    const command = new DeleteWhatIfAnalysisCommand(args);
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
   * <p>Deletes a what-if forecast created using the <a>CreateWhatIfForecast</a>
   *       operation. You can delete only what-if forecasts that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecast</a> operation. </p>
   *          <p>You can't delete a what-if forecast while it is being exported. After a what-if forecast is deleted, you can no longer query the what-if analysis.</p>
   */
  public deleteWhatIfForecast(
    args: DeleteWhatIfForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWhatIfForecastCommandOutput>;
  public deleteWhatIfForecast(
    args: DeleteWhatIfForecastCommandInput,
    cb: (err: any, data?: DeleteWhatIfForecastCommandOutput) => void
  ): void;
  public deleteWhatIfForecast(
    args: DeleteWhatIfForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWhatIfForecastCommandOutput) => void
  ): void;
  public deleteWhatIfForecast(
    args: DeleteWhatIfForecastCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWhatIfForecastCommandOutput) => void),
    cb?: (err: any, data?: DeleteWhatIfForecastCommandOutput) => void
  ): Promise<DeleteWhatIfForecastCommandOutput> | void {
    const command = new DeleteWhatIfForecastCommand(args);
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
   * <p>Deletes a what-if forecast export created using the <a>CreateWhatIfForecastExport</a>
   *       operation. You can delete only what-if forecast exports that have a status of <code>ACTIVE</code> or <code>CREATE_FAILED</code>. To get the status, use the <a>DescribeWhatIfForecastExport</a> operation. </p>
   */
  public deleteWhatIfForecastExport(
    args: DeleteWhatIfForecastExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWhatIfForecastExportCommandOutput>;
  public deleteWhatIfForecastExport(
    args: DeleteWhatIfForecastExportCommandInput,
    cb: (err: any, data?: DeleteWhatIfForecastExportCommandOutput) => void
  ): void;
  public deleteWhatIfForecastExport(
    args: DeleteWhatIfForecastExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWhatIfForecastExportCommandOutput) => void
  ): void;
  public deleteWhatIfForecastExport(
    args: DeleteWhatIfForecastExportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWhatIfForecastExportCommandOutput) => void),
    cb?: (err: any, data?: DeleteWhatIfForecastExportCommandOutput) => void
  ): Promise<DeleteWhatIfForecastExportCommandOutput> | void {
    const command = new DeleteWhatIfForecastExportCommand(args);
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
   * <p>Describes a predictor created using the CreateAutoPredictor operation.</p>
   */
  public describeAutoPredictor(
    args: DescribeAutoPredictorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAutoPredictorCommandOutput>;
  public describeAutoPredictor(
    args: DescribeAutoPredictorCommandInput,
    cb: (err: any, data?: DescribeAutoPredictorCommandOutput) => void
  ): void;
  public describeAutoPredictor(
    args: DescribeAutoPredictorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAutoPredictorCommandOutput) => void
  ): void;
  public describeAutoPredictor(
    args: DescribeAutoPredictorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAutoPredictorCommandOutput) => void),
    cb?: (err: any, data?: DescribeAutoPredictorCommandOutput) => void
  ): Promise<DescribeAutoPredictorCommandOutput> | void {
    const command = new DescribeAutoPredictorCommand(args);
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
   * <p>Describes an Amazon Forecast dataset created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation.</p>
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
   * <p>Describes a dataset group created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a>
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
   * <p>Describes a dataset import job created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>
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
   * <p>Describes an Explainability resource created using the <a>CreateExplainability</a> operation.</p>
   */
  public describeExplainability(
    args: DescribeExplainabilityCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExplainabilityCommandOutput>;
  public describeExplainability(
    args: DescribeExplainabilityCommandInput,
    cb: (err: any, data?: DescribeExplainabilityCommandOutput) => void
  ): void;
  public describeExplainability(
    args: DescribeExplainabilityCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExplainabilityCommandOutput) => void
  ): void;
  public describeExplainability(
    args: DescribeExplainabilityCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeExplainabilityCommandOutput) => void),
    cb?: (err: any, data?: DescribeExplainabilityCommandOutput) => void
  ): Promise<DescribeExplainabilityCommandOutput> | void {
    const command = new DescribeExplainabilityCommand(args);
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
   * <p>Describes an Explainability export created using the <a>CreateExplainabilityExport</a> operation.</p>
   */
  public describeExplainabilityExport(
    args: DescribeExplainabilityExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExplainabilityExportCommandOutput>;
  public describeExplainabilityExport(
    args: DescribeExplainabilityExportCommandInput,
    cb: (err: any, data?: DescribeExplainabilityExportCommandOutput) => void
  ): void;
  public describeExplainabilityExport(
    args: DescribeExplainabilityExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExplainabilityExportCommandOutput) => void
  ): void;
  public describeExplainabilityExport(
    args: DescribeExplainabilityExportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeExplainabilityExportCommandOutput) => void),
    cb?: (err: any, data?: DescribeExplainabilityExportCommandOutput) => void
  ): Promise<DescribeExplainabilityExportCommandOutput> | void {
    const command = new DescribeExplainabilityExportCommand(args);
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
   * <p>Describes a monitor resource. In addition to listing the properties provided in the <a>CreateMonitor</a> request, this operation lists the following properties:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Baseline</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CreationTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LastEvaluationTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LastEvaluationState</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LastModificationTime</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Message</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeMonitor(
    args: DescribeMonitorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMonitorCommandOutput>;
  public describeMonitor(
    args: DescribeMonitorCommandInput,
    cb: (err: any, data?: DescribeMonitorCommandOutput) => void
  ): void;
  public describeMonitor(
    args: DescribeMonitorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMonitorCommandOutput) => void
  ): void;
  public describeMonitor(
    args: DescribeMonitorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMonitorCommandOutput) => void),
    cb?: (err: any, data?: DescribeMonitorCommandOutput) => void
  ): Promise<DescribeMonitorCommandOutput> | void {
    const command = new DescribeMonitorCommand(args);
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
   * <note>
   *             <p> This operation is only valid for legacy predictors created with CreatePredictor. If you
   *         are not using a legacy predictor, use <a>DescribeAutoPredictor</a>.</p>
   *          </note>
   *          <p>Describes a predictor created using the <a>CreatePredictor</a>
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
   *                 <code>CreatePredictorBacktestExportJob</code> request, this operation lists the
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
   * <p>Describes the what-if analysis created using the <a>CreateWhatIfAnalysis</a> operation.</p>
   *          <p>In addition to listing the properties provided in the <code>CreateWhatIfAnalysis</code> request, this operation lists the following properties:</p>
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
   *                   <code>Message</code> - If an error occurred, information about the error.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeWhatIfAnalysis(
    args: DescribeWhatIfAnalysisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWhatIfAnalysisCommandOutput>;
  public describeWhatIfAnalysis(
    args: DescribeWhatIfAnalysisCommandInput,
    cb: (err: any, data?: DescribeWhatIfAnalysisCommandOutput) => void
  ): void;
  public describeWhatIfAnalysis(
    args: DescribeWhatIfAnalysisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWhatIfAnalysisCommandOutput) => void
  ): void;
  public describeWhatIfAnalysis(
    args: DescribeWhatIfAnalysisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWhatIfAnalysisCommandOutput) => void),
    cb?: (err: any, data?: DescribeWhatIfAnalysisCommandOutput) => void
  ): Promise<DescribeWhatIfAnalysisCommandOutput> | void {
    const command = new DescribeWhatIfAnalysisCommand(args);
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
   * <p>Describes the what-if forecast created using the <a>CreateWhatIfForecast</a> operation.</p>
   *          <p>In addition to listing the properties provided in the <code>CreateWhatIfForecast</code> request, this operation lists the following properties:</p>
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
   *                   <code>Message</code> - If an error occurred, information about the error.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeWhatIfForecast(
    args: DescribeWhatIfForecastCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWhatIfForecastCommandOutput>;
  public describeWhatIfForecast(
    args: DescribeWhatIfForecastCommandInput,
    cb: (err: any, data?: DescribeWhatIfForecastCommandOutput) => void
  ): void;
  public describeWhatIfForecast(
    args: DescribeWhatIfForecastCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWhatIfForecastCommandOutput) => void
  ): void;
  public describeWhatIfForecast(
    args: DescribeWhatIfForecastCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWhatIfForecastCommandOutput) => void),
    cb?: (err: any, data?: DescribeWhatIfForecastCommandOutput) => void
  ): Promise<DescribeWhatIfForecastCommandOutput> | void {
    const command = new DescribeWhatIfForecastCommand(args);
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
   * <p>Describes the what-if forecast export created using the <a>CreateWhatIfForecastExport</a> operation.</p>
   *          <p>In addition to listing the properties provided in the <code>CreateWhatIfForecastExport</code> request, this operation lists the following properties:</p>
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
   *                   <code>Message</code> - If an error occurred, information about the error.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeWhatIfForecastExport(
    args: DescribeWhatIfForecastExportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWhatIfForecastExportCommandOutput>;
  public describeWhatIfForecastExport(
    args: DescribeWhatIfForecastExportCommandInput,
    cb: (err: any, data?: DescribeWhatIfForecastExportCommandOutput) => void
  ): void;
  public describeWhatIfForecastExport(
    args: DescribeWhatIfForecastExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWhatIfForecastExportCommandOutput) => void
  ): void;
  public describeWhatIfForecastExport(
    args: DescribeWhatIfForecastExportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeWhatIfForecastExportCommandOutput) => void),
    cb?: (err: any, data?: DescribeWhatIfForecastExportCommandOutput) => void
  ): Promise<DescribeWhatIfForecastExportCommandOutput> | void {
    const command = new DescribeWhatIfForecastExportCommand(args);
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
   * <p>Returns a list of dataset groups created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation.
   *       For each dataset group, this operation returns a summary of its properties, including its
   *       Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the
   *       dataset group ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>
   *       operation.</p>
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
   * <p>Returns a list of dataset import jobs created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>
   *       operation. For each import job, this operation returns a summary of its properties, including
   *       its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the
   *       ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a>
   *       operation. You can filter the list by providing an array of <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_Filter.html">Filter</a> objects.</p>
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
   * <p>Returns a list of datasets created using the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a> operation. For each
   *       dataset, a summary of its properties, including its Amazon Resource Name (ARN), is returned.
   *       To retrieve the complete set of properties, use the ARN with the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation.</p>
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
   * <p>Returns a list of Explainability resources created using the <a>CreateExplainability</a> operation. This operation returns a summary for
   *             each Explainability. You can filter the list using an array of <a>Filter</a>
   *             objects.</p>
   *         <p>To retrieve the complete set of properties for a particular Explainability resource,
   *             use the ARN with the <a>DescribeExplainability</a> operation.</p>
   */
  public listExplainabilities(
    args: ListExplainabilitiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExplainabilitiesCommandOutput>;
  public listExplainabilities(
    args: ListExplainabilitiesCommandInput,
    cb: (err: any, data?: ListExplainabilitiesCommandOutput) => void
  ): void;
  public listExplainabilities(
    args: ListExplainabilitiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExplainabilitiesCommandOutput) => void
  ): void;
  public listExplainabilities(
    args: ListExplainabilitiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListExplainabilitiesCommandOutput) => void),
    cb?: (err: any, data?: ListExplainabilitiesCommandOutput) => void
  ): Promise<ListExplainabilitiesCommandOutput> | void {
    const command = new ListExplainabilitiesCommand(args);
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
   * <p>Returns a list of Explainability exports created using the <a>CreateExplainabilityExport</a> operation. This operation returns a summary
   *             for each Explainability export. You can filter the list using an array of <a>Filter</a> objects.</p>
   *         <p>To retrieve the complete set of properties for a particular Explainability export, use
   *             the ARN with the <a>DescribeExplainability</a> operation.</p>
   */
  public listExplainabilityExports(
    args: ListExplainabilityExportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExplainabilityExportsCommandOutput>;
  public listExplainabilityExports(
    args: ListExplainabilityExportsCommandInput,
    cb: (err: any, data?: ListExplainabilityExportsCommandOutput) => void
  ): void;
  public listExplainabilityExports(
    args: ListExplainabilityExportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExplainabilityExportsCommandOutput) => void
  ): void;
  public listExplainabilityExports(
    args: ListExplainabilityExportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListExplainabilityExportsCommandOutput) => void),
    cb?: (err: any, data?: ListExplainabilityExportsCommandOutput) => void
  ): Promise<ListExplainabilityExportsCommandOutput> | void {
    const command = new ListExplainabilityExportsCommand(args);
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
   * <p>Returns a list of the monitoring evaluation results and predictor events collected by
   *          the monitor resource during different windows of time.</p>
   *          <p>For information about monitoring see <a>predictor-monitoring</a>. For
   *          more information about retrieving monitoring results see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html">Viewing Monitoring Results</a>.</p>
   */
  public listMonitorEvaluations(
    args: ListMonitorEvaluationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMonitorEvaluationsCommandOutput>;
  public listMonitorEvaluations(
    args: ListMonitorEvaluationsCommandInput,
    cb: (err: any, data?: ListMonitorEvaluationsCommandOutput) => void
  ): void;
  public listMonitorEvaluations(
    args: ListMonitorEvaluationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMonitorEvaluationsCommandOutput) => void
  ): void;
  public listMonitorEvaluations(
    args: ListMonitorEvaluationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMonitorEvaluationsCommandOutput) => void),
    cb?: (err: any, data?: ListMonitorEvaluationsCommandOutput) => void
  ): Promise<ListMonitorEvaluationsCommandOutput> | void {
    const command = new ListMonitorEvaluationsCommand(args);
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
   * <p>Returns a list of monitors created with the <a>CreateMonitor</a> operation and <a>CreateAutoPredictor</a> operation. For each monitor resource, this operation returns of a summary of its properties, including its Amazon Resource Name (ARN). You
   *          can retrieve a complete set of properties of a monitor resource by specify the monitor's ARN in the <a>DescribeMonitor</a> operation.</p>
   */
  public listMonitors(
    args: ListMonitorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMonitorsCommandOutput>;
  public listMonitors(args: ListMonitorsCommandInput, cb: (err: any, data?: ListMonitorsCommandOutput) => void): void;
  public listMonitors(
    args: ListMonitorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMonitorsCommandOutput) => void
  ): void;
  public listMonitors(
    args: ListMonitorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMonitorsCommandOutput) => void),
    cb?: (err: any, data?: ListMonitorsCommandOutput) => void
  ): Promise<ListMonitorsCommandOutput> | void {
    const command = new ListMonitorsCommand(args);
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
   * <p>Returns a list of predictor backtest export jobs created using the <a>CreatePredictorBacktestExportJob</a> operation. This operation returns a
   *             summary for each backtest export job. You can filter the list using an array of <a>Filter</a> objects.</p>
   *         <p>To retrieve the complete set of properties for a particular backtest export job, use
   *             the ARN with the <a>DescribePredictorBacktestExportJob</a> operation.</p>
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
   * <p>Returns a list of predictors created using the <a>CreateAutoPredictor</a> or
   *         <a>CreatePredictor</a> operations. For each predictor, this operation returns a
   *       summary of its properties, including its Amazon Resource Name (ARN). </p>
   *          <p>You can retrieve the complete set of properties by using the ARN with the <a>DescribeAutoPredictor</a> and <a>DescribePredictor</a> operations. You
   *       can filter the list using an array of <a>Filter</a> objects.</p>
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
   * <p>Returns a list of what-if analyses created using the <a>CreateWhatIfAnalysis</a> operation. For each what-if analysis, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if analysis ARN with the <a>DescribeWhatIfAnalysis</a> operation.</p>
   */
  public listWhatIfAnalyses(
    args: ListWhatIfAnalysesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWhatIfAnalysesCommandOutput>;
  public listWhatIfAnalyses(
    args: ListWhatIfAnalysesCommandInput,
    cb: (err: any, data?: ListWhatIfAnalysesCommandOutput) => void
  ): void;
  public listWhatIfAnalyses(
    args: ListWhatIfAnalysesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWhatIfAnalysesCommandOutput) => void
  ): void;
  public listWhatIfAnalyses(
    args: ListWhatIfAnalysesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWhatIfAnalysesCommandOutput) => void),
    cb?: (err: any, data?: ListWhatIfAnalysesCommandOutput) => void
  ): Promise<ListWhatIfAnalysesCommandOutput> | void {
    const command = new ListWhatIfAnalysesCommand(args);
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
   * <p>Returns a list of what-if forecast exports created using the <a>CreateWhatIfForecastExport</a> operation. For each what-if forecast export, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast export ARN with the <a>DescribeWhatIfForecastExport</a> operation.</p>
   */
  public listWhatIfForecastExports(
    args: ListWhatIfForecastExportsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWhatIfForecastExportsCommandOutput>;
  public listWhatIfForecastExports(
    args: ListWhatIfForecastExportsCommandInput,
    cb: (err: any, data?: ListWhatIfForecastExportsCommandOutput) => void
  ): void;
  public listWhatIfForecastExports(
    args: ListWhatIfForecastExportsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWhatIfForecastExportsCommandOutput) => void
  ): void;
  public listWhatIfForecastExports(
    args: ListWhatIfForecastExportsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWhatIfForecastExportsCommandOutput) => void),
    cb?: (err: any, data?: ListWhatIfForecastExportsCommandOutput) => void
  ): Promise<ListWhatIfForecastExportsCommandOutput> | void {
    const command = new ListWhatIfForecastExportsCommand(args);
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
   * <p>Returns a list of what-if forecasts created using the <a>CreateWhatIfForecast</a> operation. For each what-if forecast, this operation returns a summary of its properties, including its Amazon Resource Name (ARN). You can retrieve the complete set of properties by using the what-if forecast ARN with the <a>DescribeWhatIfForecast</a> operation.</p>
   */
  public listWhatIfForecasts(
    args: ListWhatIfForecastsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWhatIfForecastsCommandOutput>;
  public listWhatIfForecasts(
    args: ListWhatIfForecastsCommandInput,
    cb: (err: any, data?: ListWhatIfForecastsCommandOutput) => void
  ): void;
  public listWhatIfForecasts(
    args: ListWhatIfForecastsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWhatIfForecastsCommandOutput) => void
  ): void;
  public listWhatIfForecasts(
    args: ListWhatIfForecastsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWhatIfForecastsCommandOutput) => void),
    cb?: (err: any, data?: ListWhatIfForecastsCommandOutput) => void
  ): Promise<ListWhatIfForecastsCommandOutput> | void {
    const command = new ListWhatIfForecastsCommand(args);
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
   * <p>Resumes a stopped monitor resource.</p>
   */
  public resumeResource(
    args: ResumeResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResumeResourceCommandOutput>;
  public resumeResource(
    args: ResumeResourceCommandInput,
    cb: (err: any, data?: ResumeResourceCommandOutput) => void
  ): void;
  public resumeResource(
    args: ResumeResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResumeResourceCommandOutput) => void
  ): void;
  public resumeResource(
    args: ResumeResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResumeResourceCommandOutput) => void),
    cb?: (err: any, data?: ResumeResourceCommandOutput) => void
  ): Promise<ResumeResourceCommandOutput> | void {
    const command = new ResumeResourceCommand(args);
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
   *          <p>The resource undergoes the following states: <code>CREATE_STOPPING</code> and
   *             <code>CREATE_STOPPED</code>. You cannot resume a resource once it has been
   *          stopped.</p>
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
   *             <li>
   *                <p>Explainability Job</p>
   *             </li>
   *             <li>
   *                <p>Explainability Export Job</p>
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
   * <p>Associates the specified tags to a resource with the specified <code>resourceArn</code>.
   *       If existing tags on a resource are not specified in the request parameters, they are not
   *       changed. When a resource is deleted, the tags associated with that resource are also
   *       deleted.</p>
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
   *         use the dataset group to create a predictor. Use the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>
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
