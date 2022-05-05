// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AddTagsCommand, AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import {
  CreateBatchPredictionCommand,
  CreateBatchPredictionCommandInput,
  CreateBatchPredictionCommandOutput,
} from "./commands/CreateBatchPredictionCommand";
import {
  CreateDataSourceFromRDSCommand,
  CreateDataSourceFromRDSCommandInput,
  CreateDataSourceFromRDSCommandOutput,
} from "./commands/CreateDataSourceFromRDSCommand";
import {
  CreateDataSourceFromRedshiftCommand,
  CreateDataSourceFromRedshiftCommandInput,
  CreateDataSourceFromRedshiftCommandOutput,
} from "./commands/CreateDataSourceFromRedshiftCommand";
import {
  CreateDataSourceFromS3Command,
  CreateDataSourceFromS3CommandInput,
  CreateDataSourceFromS3CommandOutput,
} from "./commands/CreateDataSourceFromS3Command";
import {
  CreateEvaluationCommand,
  CreateEvaluationCommandInput,
  CreateEvaluationCommandOutput,
} from "./commands/CreateEvaluationCommand";
import {
  CreateMLModelCommand,
  CreateMLModelCommandInput,
  CreateMLModelCommandOutput,
} from "./commands/CreateMLModelCommand";
import {
  CreateRealtimeEndpointCommand,
  CreateRealtimeEndpointCommandInput,
  CreateRealtimeEndpointCommandOutput,
} from "./commands/CreateRealtimeEndpointCommand";
import {
  DeleteBatchPredictionCommand,
  DeleteBatchPredictionCommandInput,
  DeleteBatchPredictionCommandOutput,
} from "./commands/DeleteBatchPredictionCommand";
import {
  DeleteDataSourceCommand,
  DeleteDataSourceCommandInput,
  DeleteDataSourceCommandOutput,
} from "./commands/DeleteDataSourceCommand";
import {
  DeleteEvaluationCommand,
  DeleteEvaluationCommandInput,
  DeleteEvaluationCommandOutput,
} from "./commands/DeleteEvaluationCommand";
import {
  DeleteMLModelCommand,
  DeleteMLModelCommandInput,
  DeleteMLModelCommandOutput,
} from "./commands/DeleteMLModelCommand";
import {
  DeleteRealtimeEndpointCommand,
  DeleteRealtimeEndpointCommandInput,
  DeleteRealtimeEndpointCommandOutput,
} from "./commands/DeleteRealtimeEndpointCommand";
import { DeleteTagsCommand, DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import {
  DescribeBatchPredictionsCommand,
  DescribeBatchPredictionsCommandInput,
  DescribeBatchPredictionsCommandOutput,
} from "./commands/DescribeBatchPredictionsCommand";
import {
  DescribeDataSourcesCommand,
  DescribeDataSourcesCommandInput,
  DescribeDataSourcesCommandOutput,
} from "./commands/DescribeDataSourcesCommand";
import {
  DescribeEvaluationsCommand,
  DescribeEvaluationsCommandInput,
  DescribeEvaluationsCommandOutput,
} from "./commands/DescribeEvaluationsCommand";
import {
  DescribeMLModelsCommand,
  DescribeMLModelsCommandInput,
  DescribeMLModelsCommandOutput,
} from "./commands/DescribeMLModelsCommand";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "./commands/DescribeTagsCommand";
import {
  GetBatchPredictionCommand,
  GetBatchPredictionCommandInput,
  GetBatchPredictionCommandOutput,
} from "./commands/GetBatchPredictionCommand";
import {
  GetDataSourceCommand,
  GetDataSourceCommandInput,
  GetDataSourceCommandOutput,
} from "./commands/GetDataSourceCommand";
import {
  GetEvaluationCommand,
  GetEvaluationCommandInput,
  GetEvaluationCommandOutput,
} from "./commands/GetEvaluationCommand";
import { GetMLModelCommand, GetMLModelCommandInput, GetMLModelCommandOutput } from "./commands/GetMLModelCommand";
import { PredictCommand, PredictCommandInput, PredictCommandOutput } from "./commands/PredictCommand";
import {
  UpdateBatchPredictionCommand,
  UpdateBatchPredictionCommandInput,
  UpdateBatchPredictionCommandOutput,
} from "./commands/UpdateBatchPredictionCommand";
import {
  UpdateDataSourceCommand,
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput,
} from "./commands/UpdateDataSourceCommand";
import {
  UpdateEvaluationCommand,
  UpdateEvaluationCommandInput,
  UpdateEvaluationCommandOutput,
} from "./commands/UpdateEvaluationCommand";
import {
  UpdateMLModelCommand,
  UpdateMLModelCommandInput,
  UpdateMLModelCommandOutput,
} from "./commands/UpdateMLModelCommand";
import { MachineLearningClient } from "./MachineLearningClient";

/**
 * Definition of the public APIs
 * 		exposed by Amazon Machine Learning
 */
export class MachineLearning extends MachineLearningClient {
  /**
   * <p>Adds one or more tags to an object, up to a limit of 10. Each tag consists of a key
   * 		    and an optional value. If you add a tag using a key that is already associated with the ML object,
   * 			<code>AddTags</code> updates the tag's value.</p>
   */
  public addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
  public addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
  public addTags(
    args: AddTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;
  public addTags(
    args: AddTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddTagsCommandOutput) => void),
    cb?: (err: any, data?: AddTagsCommandOutput) => void
  ): Promise<AddTagsCommandOutput> | void {
    const command = new AddTagsCommand(args);
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
   * <p>Generates predictions for a group of observations. The observations to process exist in one or more data files referenced
   *             by a <code>DataSource</code>. This operation creates a new <code>BatchPrediction</code>, and uses an <code>MLModel</code> and the data
   *             files referenced by the <code>DataSource</code> as information sources.
   *         </p>
   *
   *         <p>
   *             <code>CreateBatchPrediction</code> is an asynchronous operation. In response to <code>CreateBatchPrediction</code>,
   *         Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>BatchPrediction</code> status to <code>PENDING</code>.
   *         After the <code>BatchPrediction</code> completes, Amazon ML sets the status to <code>COMPLETED</code>.
   *         </p>
   *         <p>You can poll for status updates by using the <a>GetBatchPrediction</a> operation and checking the <code>Status</code> parameter of the result. After the <code>COMPLETED</code> status appears,
   *             the results are available in the location specified by the <code>OutputUri</code> parameter.</p>
   */
  public createBatchPrediction(
    args: CreateBatchPredictionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBatchPredictionCommandOutput>;
  public createBatchPrediction(
    args: CreateBatchPredictionCommandInput,
    cb: (err: any, data?: CreateBatchPredictionCommandOutput) => void
  ): void;
  public createBatchPrediction(
    args: CreateBatchPredictionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBatchPredictionCommandOutput) => void
  ): void;
  public createBatchPrediction(
    args: CreateBatchPredictionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBatchPredictionCommandOutput) => void),
    cb?: (err: any, data?: CreateBatchPredictionCommandOutput) => void
  ): Promise<CreateBatchPredictionCommandOutput> | void {
    const command = new CreateBatchPredictionCommand(args);
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
   * <p>Creates a <code>DataSource</code> object from an <a href="http://aws.amazon.com/rds/"> Amazon Relational Database Service</a> (Amazon RDS). A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p>
   *
   *         <p>
   *             <code>CreateDataSourceFromRDS</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRDS</code>,
   *          Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>.
   *             After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>.
   *             <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can
   *           be used only to perform <code>>CreateMLModel</code>>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.
   *         </p>
   *         <p>
   *           If Amazon ML cannot accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response.
   *         </p>
   */
  public createDataSourceFromRDS(
    args: CreateDataSourceFromRDSCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSourceFromRDSCommandOutput>;
  public createDataSourceFromRDS(
    args: CreateDataSourceFromRDSCommandInput,
    cb: (err: any, data?: CreateDataSourceFromRDSCommandOutput) => void
  ): void;
  public createDataSourceFromRDS(
    args: CreateDataSourceFromRDSCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSourceFromRDSCommandOutput) => void
  ): void;
  public createDataSourceFromRDS(
    args: CreateDataSourceFromRDSCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDataSourceFromRDSCommandOutput) => void),
    cb?: (err: any, data?: CreateDataSourceFromRDSCommandOutput) => void
  ): Promise<CreateDataSourceFromRDSCommandOutput> | void {
    const command = new CreateDataSourceFromRDSCommand(args);
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
   * <p>Creates a <code>DataSource</code> from a database hosted on an Amazon Redshift cluster. A
   * 		<code>DataSource</code> references data that can be used to perform either <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code>
   * 		operations.</p>
   *
   *         <p>
   *             <code>CreateDataSourceFromRedshift</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRedshift</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>.
   *             After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>.
   *           <code>DataSource</code> in <code>COMPLETED</code> or <code>PENDING</code> states can be
   *           used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.
   *         </p>
   *
   *         <p>
   *           If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code>
   * 		  attribute of the <code>GetDataSource</code> operation response.
   *         </p>
   *
   *         <p>The observations should be contained in the database hosted on an Amazon Redshift cluster
   *             and should be specified by a <code>SelectSqlQuery</code> query. Amazon ML executes an
   *                 <code>Unload</code> command in Amazon Redshift to transfer the result set of
   *                 the <code>SelectSqlQuery</code> query to <code>S3StagingLocation</code>.</p>
   *
   *         <p>After the <code>DataSource</code> has been created, it's ready for use in evaluations and
   *             batch predictions. If you plan to use the <code>DataSource</code> to train an
   *                 <code>MLModel</code>, the <code>DataSource</code> also requires a recipe. A recipe
   *             describes how each input variable will be used in training an <code>MLModel</code>. Will
   *             the variable be included or excluded from training? Will the variable be manipulated;
   *             for example, will it be combined with another variable or will it be split apart into
   *             word combinations? The recipe provides answers to these questions.</p>
   *          <p>You can't change an existing datasource, but you can copy and modify the settings from an
   *             existing Amazon Redshift datasource to create a new datasource. To do so, call
   *                 <code>GetDataSource</code> for an existing datasource and copy the values to a
   *                 <code>CreateDataSource</code> call. Change the settings that you want to change and
   *             make sure that all required fields have the appropriate values.</p>
   */
  public createDataSourceFromRedshift(
    args: CreateDataSourceFromRedshiftCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSourceFromRedshiftCommandOutput>;
  public createDataSourceFromRedshift(
    args: CreateDataSourceFromRedshiftCommandInput,
    cb: (err: any, data?: CreateDataSourceFromRedshiftCommandOutput) => void
  ): void;
  public createDataSourceFromRedshift(
    args: CreateDataSourceFromRedshiftCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSourceFromRedshiftCommandOutput) => void
  ): void;
  public createDataSourceFromRedshift(
    args: CreateDataSourceFromRedshiftCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDataSourceFromRedshiftCommandOutput) => void),
    cb?: (err: any, data?: CreateDataSourceFromRedshiftCommandOutput) => void
  ): Promise<CreateDataSourceFromRedshiftCommandOutput> | void {
    const command = new CreateDataSourceFromRedshiftCommand(args);
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
   * <p>Creates a <code>DataSource</code> object. A <code>DataSource</code> references data that
   *           can be used to perform  <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or
   *           <code>CreateBatchPrediction</code> operations.</p>
   *
   *         <p>
   *             <code>CreateDataSourceFromS3</code> is an asynchronous operation. In response to
   *                 <code>CreateDataSourceFromS3</code>, Amazon Machine Learning (Amazon ML) immediately
   *             returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the
   *                 <code>DataSource</code> has been created and is ready for use, Amazon ML sets the
   *                 <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in
   *             the <code>COMPLETED</code> or <code>PENDING</code> state can be used to perform only
   *                 <code>CreateMLModel</code>, <code>CreateEvaluation</code> or
   *                 <code>CreateBatchPrediction</code> operations. </p>
   *
   *         <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to
   *                 <code>FAILED</code> and includes an error message in the <code>Message</code>
   *             attribute of the <code>GetDataSource</code> operation response. </p>
   *
   *         <p>The observation data used in a <code>DataSource</code> should be ready to use; that is,
   *             it should have a consistent structure, and missing data values should be kept to a
   *             minimum. The observation data must reside in one or more .csv files in an Amazon Simple
   *             Storage Service (Amazon S3) location, along with a schema that describes the data items
   *             by name and type. The same schema must be used for all of the data files referenced by
   *             the <code>DataSource</code>. </p>
   *         <p>After the <code>DataSource</code> has been created, it's ready to use in evaluations and
   *             batch predictions. If you plan to use the <code>DataSource</code> to train an
   *                 <code>MLModel</code>, the <code>DataSource</code> also needs a recipe. A recipe
   *             describes how each input variable will be used in training an <code>MLModel</code>. Will
   *             the variable be included or excluded from training? Will the variable be manipulated;
   *             for example, will it be combined with another variable or will it be split apart into
   *             word combinations? The recipe provides answers to these questions.</p>
   */
  public createDataSourceFromS3(
    args: CreateDataSourceFromS3CommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSourceFromS3CommandOutput>;
  public createDataSourceFromS3(
    args: CreateDataSourceFromS3CommandInput,
    cb: (err: any, data?: CreateDataSourceFromS3CommandOutput) => void
  ): void;
  public createDataSourceFromS3(
    args: CreateDataSourceFromS3CommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSourceFromS3CommandOutput) => void
  ): void;
  public createDataSourceFromS3(
    args: CreateDataSourceFromS3CommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDataSourceFromS3CommandOutput) => void),
    cb?: (err: any, data?: CreateDataSourceFromS3CommandOutput) => void
  ): Promise<CreateDataSourceFromS3CommandOutput> | void {
    const command = new CreateDataSourceFromS3Command(args);
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
   * <p>Creates a new <code>Evaluation</code> of an <code>MLModel</code>. An <code>MLModel</code> is evaluated on a set of observations associated to a <code>DataSource</code>. Like a <code>DataSource</code>
   *           for an <code>MLModel</code>, the <code>DataSource</code> for an <code>Evaluation</code> contains values for the <code>Target Variable</code>. The <code>Evaluation</code> compares the predicted result for each observation to the actual outcome and provides a
   *             summary so that you know how effective the <code>MLModel</code> functions on the test
   *           data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding <code>MLModelType</code>: <code>BINARY</code>, <code>REGRESSION</code> or <code>MULTICLASS</code>.
   *
   *         </p>
   *         <p>
   *             <code>CreateEvaluation</code> is an asynchronous operation. In response to <code>CreateEvaluation</code>, Amazon Machine Learning (Amazon ML) immediately
   *             returns and sets the evaluation status to <code>PENDING</code>. After the <code>Evaluation</code> is created and ready for use,
   *             Amazon ML sets the status to <code>COMPLETED</code>.
   *         </p>
   *         <p>You can use the <code>GetEvaluation</code> operation to check progress of the evaluation during the creation operation.</p>
   */
  public createEvaluation(
    args: CreateEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEvaluationCommandOutput>;
  public createEvaluation(
    args: CreateEvaluationCommandInput,
    cb: (err: any, data?: CreateEvaluationCommandOutput) => void
  ): void;
  public createEvaluation(
    args: CreateEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEvaluationCommandOutput) => void
  ): void;
  public createEvaluation(
    args: CreateEvaluationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEvaluationCommandOutput) => void),
    cb?: (err: any, data?: CreateEvaluationCommandOutput) => void
  ): Promise<CreateEvaluationCommandOutput> | void {
    const command = new CreateEvaluationCommand(args);
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
   * <p>Creates a new <code>MLModel</code> using the <code>DataSource</code> and the recipe as
   *             information sources. </p>
   *         <p>An <code>MLModel</code> is nearly immutable. Users can update only the
   *                 <code>MLModelName</code> and the <code>ScoreThreshold</code> in an
   *                 <code>MLModel</code> without creating a new <code>MLModel</code>. </p>
   *         <p>
   *             <code>CreateMLModel</code> is an asynchronous operation. In response to
   *                 <code>CreateMLModel</code>, Amazon Machine Learning (Amazon ML) immediately returns
   *             and sets the <code>MLModel</code> status to <code>PENDING</code>. After the
   *                 <code>MLModel</code> has been created and ready is for use, Amazon ML sets the
   *             status to <code>COMPLETED</code>. </p>
   *         <p>You can use the <code>GetMLModel</code> operation to check the progress of the
   *                 <code>MLModel</code> during the creation operation.</p>
   *
   *         <p>
   *            <code>CreateMLModel</code> requires a <code>DataSource</code> with computed statistics,
   *           which can be created by setting <code>ComputeStatistics</code> to <code>true</code> in
   *           <code>CreateDataSourceFromRDS</code>, <code>CreateDataSourceFromS3</code>, or
   *           <code>CreateDataSourceFromRedshift</code> operations.
   *         </p>
   */
  public createMLModel(
    args: CreateMLModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMLModelCommandOutput>;
  public createMLModel(
    args: CreateMLModelCommandInput,
    cb: (err: any, data?: CreateMLModelCommandOutput) => void
  ): void;
  public createMLModel(
    args: CreateMLModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMLModelCommandOutput) => void
  ): void;
  public createMLModel(
    args: CreateMLModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMLModelCommandOutput) => void),
    cb?: (err: any, data?: CreateMLModelCommandOutput) => void
  ): Promise<CreateMLModelCommandOutput> | void {
    const command = new CreateMLModelCommand(args);
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
   * <p>Creates a real-time endpoint for the <code>MLModel</code>. The endpoint contains the URI of the <code>MLModel</code>; that is, the location to send real-time prediction requests for the specified <code>MLModel</code>.</p>
   */
  public createRealtimeEndpoint(
    args: CreateRealtimeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRealtimeEndpointCommandOutput>;
  public createRealtimeEndpoint(
    args: CreateRealtimeEndpointCommandInput,
    cb: (err: any, data?: CreateRealtimeEndpointCommandOutput) => void
  ): void;
  public createRealtimeEndpoint(
    args: CreateRealtimeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRealtimeEndpointCommandOutput) => void
  ): void;
  public createRealtimeEndpoint(
    args: CreateRealtimeEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRealtimeEndpointCommandOutput) => void),
    cb?: (err: any, data?: CreateRealtimeEndpointCommandOutput) => void
  ): Promise<CreateRealtimeEndpointCommandOutput> | void {
    const command = new CreateRealtimeEndpointCommand(args);
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
   * <p>Assigns the DELETED status to a <code>BatchPrediction</code>, rendering it unusable.</p>
   *         <p>After using the <code>DeleteBatchPrediction</code> operation, you can use the <a>GetBatchPrediction</a>
   *             operation to verify that the status of the <code>BatchPrediction</code> changed to DELETED.</p>
   *
   *         <p>
   *             <b>Caution:</b> The result of the <code>DeleteBatchPrediction</code> operation is irreversible.</p>
   */
  public deleteBatchPrediction(
    args: DeleteBatchPredictionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBatchPredictionCommandOutput>;
  public deleteBatchPrediction(
    args: DeleteBatchPredictionCommandInput,
    cb: (err: any, data?: DeleteBatchPredictionCommandOutput) => void
  ): void;
  public deleteBatchPrediction(
    args: DeleteBatchPredictionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBatchPredictionCommandOutput) => void
  ): void;
  public deleteBatchPrediction(
    args: DeleteBatchPredictionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBatchPredictionCommandOutput) => void),
    cb?: (err: any, data?: DeleteBatchPredictionCommandOutput) => void
  ): Promise<DeleteBatchPredictionCommandOutput> | void {
    const command = new DeleteBatchPredictionCommand(args);
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
   * <p>Assigns the DELETED status to a <code>DataSource</code>, rendering it unusable.</p>
   *         <p>After using the <code>DeleteDataSource</code> operation, you can use the <a>GetDataSource</a> operation to verify that the status of the <code>DataSource</code> changed to DELETED.</p>
   *         <p>
   *             <b>Caution:</b> The results of the <code>DeleteDataSource</code> operation are irreversible.</p>
   */
  public deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataSourceCommandOutput>;
  public deleteDataSource(
    args: DeleteDataSourceCommandInput,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  public deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  public deleteDataSource(
    args: DeleteDataSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDataSourceCommandOutput) => void),
    cb?: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): Promise<DeleteDataSourceCommandOutput> | void {
    const command = new DeleteDataSourceCommand(args);
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
   * <p>Assigns the <code>DELETED</code> status to an <code>Evaluation</code>, rendering it unusable.</p>
   *
   *         <p>After invoking the <code>DeleteEvaluation</code> operation, you can use the
   *           <code>GetEvaluation</code> operation to verify that the status of the <code>Evaluation</code> changed to <code>DELETED</code>.</p>
   *         <p>
   *             <b>Caution:</b> The results of the <code>DeleteEvaluation</code> operation are irreversible.</p>
   */
  public deleteEvaluation(
    args: DeleteEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEvaluationCommandOutput>;
  public deleteEvaluation(
    args: DeleteEvaluationCommandInput,
    cb: (err: any, data?: DeleteEvaluationCommandOutput) => void
  ): void;
  public deleteEvaluation(
    args: DeleteEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEvaluationCommandOutput) => void
  ): void;
  public deleteEvaluation(
    args: DeleteEvaluationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEvaluationCommandOutput) => void),
    cb?: (err: any, data?: DeleteEvaluationCommandOutput) => void
  ): Promise<DeleteEvaluationCommandOutput> | void {
    const command = new DeleteEvaluationCommand(args);
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
   * <p>Assigns the <code>DELETED</code> status to an <code>MLModel</code>, rendering it unusable.</p>
   *         <p>After using the <code>DeleteMLModel</code> operation, you can use the
   *           <code>GetMLModel</code> operation to verify that the status of the <code>MLModel</code> changed to DELETED.</p>
   *
   *         <p>
   *             <b>Caution:</b> The result of the <code>DeleteMLModel</code> operation is irreversible.</p>
   */
  public deleteMLModel(
    args: DeleteMLModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMLModelCommandOutput>;
  public deleteMLModel(
    args: DeleteMLModelCommandInput,
    cb: (err: any, data?: DeleteMLModelCommandOutput) => void
  ): void;
  public deleteMLModel(
    args: DeleteMLModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMLModelCommandOutput) => void
  ): void;
  public deleteMLModel(
    args: DeleteMLModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMLModelCommandOutput) => void),
    cb?: (err: any, data?: DeleteMLModelCommandOutput) => void
  ): Promise<DeleteMLModelCommandOutput> | void {
    const command = new DeleteMLModelCommand(args);
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
   * <p>Deletes a real time endpoint of an <code>MLModel</code>.</p>
   */
  public deleteRealtimeEndpoint(
    args: DeleteRealtimeEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRealtimeEndpointCommandOutput>;
  public deleteRealtimeEndpoint(
    args: DeleteRealtimeEndpointCommandInput,
    cb: (err: any, data?: DeleteRealtimeEndpointCommandOutput) => void
  ): void;
  public deleteRealtimeEndpoint(
    args: DeleteRealtimeEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRealtimeEndpointCommandOutput) => void
  ): void;
  public deleteRealtimeEndpoint(
    args: DeleteRealtimeEndpointCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRealtimeEndpointCommandOutput) => void),
    cb?: (err: any, data?: DeleteRealtimeEndpointCommandOutput) => void
  ): Promise<DeleteRealtimeEndpointCommandOutput> | void {
    const command = new DeleteRealtimeEndpointCommand(args);
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
   * <p>Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags.</p>
   * 		       <p>If you specify a tag that doesn't exist, Amazon ML ignores it.</p>
   */
  public deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
  public deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTagsCommandOutput) => void),
    cb?: (err: any, data?: DeleteTagsCommandOutput) => void
  ): Promise<DeleteTagsCommandOutput> | void {
    const command = new DeleteTagsCommand(args);
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
   * <p>Returns a list of <code>BatchPrediction</code> operations that match the search criteria in the request.</p>
   */
  public describeBatchPredictions(
    args: DescribeBatchPredictionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBatchPredictionsCommandOutput>;
  public describeBatchPredictions(
    args: DescribeBatchPredictionsCommandInput,
    cb: (err: any, data?: DescribeBatchPredictionsCommandOutput) => void
  ): void;
  public describeBatchPredictions(
    args: DescribeBatchPredictionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBatchPredictionsCommandOutput) => void
  ): void;
  public describeBatchPredictions(
    args: DescribeBatchPredictionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeBatchPredictionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeBatchPredictionsCommandOutput) => void
  ): Promise<DescribeBatchPredictionsCommandOutput> | void {
    const command = new DescribeBatchPredictionsCommand(args);
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
   * <p>Returns a list of <code>DataSource</code> that match the search criteria in the request.</p>
   */
  public describeDataSources(
    args: DescribeDataSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDataSourcesCommandOutput>;
  public describeDataSources(
    args: DescribeDataSourcesCommandInput,
    cb: (err: any, data?: DescribeDataSourcesCommandOutput) => void
  ): void;
  public describeDataSources(
    args: DescribeDataSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDataSourcesCommandOutput) => void
  ): void;
  public describeDataSources(
    args: DescribeDataSourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDataSourcesCommandOutput) => void),
    cb?: (err: any, data?: DescribeDataSourcesCommandOutput) => void
  ): Promise<DescribeDataSourcesCommandOutput> | void {
    const command = new DescribeDataSourcesCommand(args);
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
   * <p>Returns a list of <code>DescribeEvaluations</code> that match the search criteria in the request.</p>
   */
  public describeEvaluations(
    args: DescribeEvaluationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEvaluationsCommandOutput>;
  public describeEvaluations(
    args: DescribeEvaluationsCommandInput,
    cb: (err: any, data?: DescribeEvaluationsCommandOutput) => void
  ): void;
  public describeEvaluations(
    args: DescribeEvaluationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEvaluationsCommandOutput) => void
  ): void;
  public describeEvaluations(
    args: DescribeEvaluationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEvaluationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeEvaluationsCommandOutput) => void
  ): Promise<DescribeEvaluationsCommandOutput> | void {
    const command = new DescribeEvaluationsCommand(args);
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
   * <p>Returns a list of <code>MLModel</code> that match the search criteria in the request.</p>
   */
  public describeMLModels(
    args: DescribeMLModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMLModelsCommandOutput>;
  public describeMLModels(
    args: DescribeMLModelsCommandInput,
    cb: (err: any, data?: DescribeMLModelsCommandOutput) => void
  ): void;
  public describeMLModels(
    args: DescribeMLModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMLModelsCommandOutput) => void
  ): void;
  public describeMLModels(
    args: DescribeMLModelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMLModelsCommandOutput) => void),
    cb?: (err: any, data?: DescribeMLModelsCommandOutput) => void
  ): Promise<DescribeMLModelsCommandOutput> | void {
    const command = new DescribeMLModelsCommand(args);
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
   * <p>Describes one or more of the tags for your Amazon ML object.</p>
   */
  public describeTags(
    args: DescribeTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTagsCommandOutput>;
  public describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
  public describeTags(
    args: DescribeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;
  public describeTags(
    args: DescribeTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTagsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTagsCommandOutput) => void
  ): Promise<DescribeTagsCommandOutput> | void {
    const command = new DescribeTagsCommand(args);
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
   * <p>Returns a <code>BatchPrediction</code> that includes detailed metadata, status, and data file information for a
   *             <code>Batch Prediction</code> request.</p>
   */
  public getBatchPrediction(
    args: GetBatchPredictionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBatchPredictionCommandOutput>;
  public getBatchPrediction(
    args: GetBatchPredictionCommandInput,
    cb: (err: any, data?: GetBatchPredictionCommandOutput) => void
  ): void;
  public getBatchPrediction(
    args: GetBatchPredictionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBatchPredictionCommandOutput) => void
  ): void;
  public getBatchPrediction(
    args: GetBatchPredictionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBatchPredictionCommandOutput) => void),
    cb?: (err: any, data?: GetBatchPredictionCommandOutput) => void
  ): Promise<GetBatchPredictionCommandOutput> | void {
    const command = new GetBatchPredictionCommand(args);
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
   * <p>Returns a <code>DataSource</code> that includes metadata and data file information, as well as the current status of the <code>DataSource</code>.</p>
   *         <p>
   *             <code>GetDataSource</code> provides results in normal or verbose format. The verbose format
   *             adds the schema description and the list of files pointed to by the DataSource to the normal format.</p>
   */
  public getDataSource(
    args: GetDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataSourceCommandOutput>;
  public getDataSource(
    args: GetDataSourceCommandInput,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;
  public getDataSource(
    args: GetDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;
  public getDataSource(
    args: GetDataSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataSourceCommandOutput) => void),
    cb?: (err: any, data?: GetDataSourceCommandOutput) => void
  ): Promise<GetDataSourceCommandOutput> | void {
    const command = new GetDataSourceCommand(args);
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
   * <p>Returns an <code>Evaluation</code> that includes metadata as well as the current status of the <code>Evaluation</code>.</p>
   */
  public getEvaluation(
    args: GetEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEvaluationCommandOutput>;
  public getEvaluation(
    args: GetEvaluationCommandInput,
    cb: (err: any, data?: GetEvaluationCommandOutput) => void
  ): void;
  public getEvaluation(
    args: GetEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEvaluationCommandOutput) => void
  ): void;
  public getEvaluation(
    args: GetEvaluationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetEvaluationCommandOutput) => void),
    cb?: (err: any, data?: GetEvaluationCommandOutput) => void
  ): Promise<GetEvaluationCommandOutput> | void {
    const command = new GetEvaluationCommand(args);
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
   * <p>Returns an <code>MLModel</code> that includes detailed metadata, data source information, and the current status of the <code>MLModel</code>.</p>
   *         <p>
   *             <code>GetMLModel</code> provides results in normal or verbose format. </p>
   */
  public getMLModel(args: GetMLModelCommandInput, options?: __HttpHandlerOptions): Promise<GetMLModelCommandOutput>;
  public getMLModel(args: GetMLModelCommandInput, cb: (err: any, data?: GetMLModelCommandOutput) => void): void;
  public getMLModel(
    args: GetMLModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMLModelCommandOutput) => void
  ): void;
  public getMLModel(
    args: GetMLModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMLModelCommandOutput) => void),
    cb?: (err: any, data?: GetMLModelCommandOutput) => void
  ): Promise<GetMLModelCommandOutput> | void {
    const command = new GetMLModelCommand(args);
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
   * <p>Generates a prediction for the observation using the specified <code>ML Model</code>.</p>
   *         <p>
   *             <b>Note:</b> Not all response parameters will be populated. Whether a
   *           response parameter is populated depends on the type of model requested.</p>
   */
  public predict(args: PredictCommandInput, options?: __HttpHandlerOptions): Promise<PredictCommandOutput>;
  public predict(args: PredictCommandInput, cb: (err: any, data?: PredictCommandOutput) => void): void;
  public predict(
    args: PredictCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PredictCommandOutput) => void
  ): void;
  public predict(
    args: PredictCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PredictCommandOutput) => void),
    cb?: (err: any, data?: PredictCommandOutput) => void
  ): Promise<PredictCommandOutput> | void {
    const command = new PredictCommand(args);
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
   * <p>Updates the <code>BatchPredictionName</code> of a <code>BatchPrediction</code>.</p>
   *         <p>You can use the <code>GetBatchPrediction</code> operation to view the contents of the updated data element.</p>
   */
  public updateBatchPrediction(
    args: UpdateBatchPredictionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBatchPredictionCommandOutput>;
  public updateBatchPrediction(
    args: UpdateBatchPredictionCommandInput,
    cb: (err: any, data?: UpdateBatchPredictionCommandOutput) => void
  ): void;
  public updateBatchPrediction(
    args: UpdateBatchPredictionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBatchPredictionCommandOutput) => void
  ): void;
  public updateBatchPrediction(
    args: UpdateBatchPredictionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBatchPredictionCommandOutput) => void),
    cb?: (err: any, data?: UpdateBatchPredictionCommandOutput) => void
  ): Promise<UpdateBatchPredictionCommandOutput> | void {
    const command = new UpdateBatchPredictionCommand(args);
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
   * <p>Updates the <code>DataSourceName</code> of a <code>DataSource</code>.</p>
   *         <p>You can use the <code>GetDataSource</code> operation to view the contents of the updated data element.</p>
   */
  public updateDataSource(
    args: UpdateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSourceCommandOutput>;
  public updateDataSource(
    args: UpdateDataSourceCommandInput,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  public updateDataSource(
    args: UpdateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  public updateDataSource(
    args: UpdateDataSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDataSourceCommandOutput) => void),
    cb?: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): Promise<UpdateDataSourceCommandOutput> | void {
    const command = new UpdateDataSourceCommand(args);
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
   * <p>Updates the <code>EvaluationName</code> of an <code>Evaluation</code>.</p>
   *         <p>You can use the <code>GetEvaluation</code> operation to view the contents of the updated data element.</p>
   */
  public updateEvaluation(
    args: UpdateEvaluationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEvaluationCommandOutput>;
  public updateEvaluation(
    args: UpdateEvaluationCommandInput,
    cb: (err: any, data?: UpdateEvaluationCommandOutput) => void
  ): void;
  public updateEvaluation(
    args: UpdateEvaluationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEvaluationCommandOutput) => void
  ): void;
  public updateEvaluation(
    args: UpdateEvaluationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEvaluationCommandOutput) => void),
    cb?: (err: any, data?: UpdateEvaluationCommandOutput) => void
  ): Promise<UpdateEvaluationCommandOutput> | void {
    const command = new UpdateEvaluationCommand(args);
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
   * <p>Updates the <code>MLModelName</code> and the <code>ScoreThreshold</code> of an <code>MLModel</code>.</p>
   *         <p>You can use the <code>GetMLModel</code> operation to view the contents of the updated data element.</p>
   */
  public updateMLModel(
    args: UpdateMLModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMLModelCommandOutput>;
  public updateMLModel(
    args: UpdateMLModelCommandInput,
    cb: (err: any, data?: UpdateMLModelCommandOutput) => void
  ): void;
  public updateMLModel(
    args: UpdateMLModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMLModelCommandOutput) => void
  ): void;
  public updateMLModel(
    args: UpdateMLModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMLModelCommandOutput) => void),
    cb?: (err: any, data?: UpdateMLModelCommandOutput) => void
  ): Promise<UpdateMLModelCommandOutput> | void {
    const command = new UpdateMLModelCommand(args);
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
