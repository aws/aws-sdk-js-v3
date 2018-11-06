import {MachineLearningClient} from './MachineLearningClient';
import {AddTagsInput} from './types/AddTagsInput';
import {AddTagsOutput} from './types/AddTagsOutput';
import {CreateBatchPredictionInput} from './types/CreateBatchPredictionInput';
import {CreateBatchPredictionOutput} from './types/CreateBatchPredictionOutput';
import {CreateDataSourceFromRDSInput} from './types/CreateDataSourceFromRDSInput';
import {CreateDataSourceFromRDSOutput} from './types/CreateDataSourceFromRDSOutput';
import {CreateDataSourceFromRedshiftInput} from './types/CreateDataSourceFromRedshiftInput';
import {CreateDataSourceFromRedshiftOutput} from './types/CreateDataSourceFromRedshiftOutput';
import {CreateDataSourceFromS3Input} from './types/CreateDataSourceFromS3Input';
import {CreateDataSourceFromS3Output} from './types/CreateDataSourceFromS3Output';
import {CreateEvaluationInput} from './types/CreateEvaluationInput';
import {CreateEvaluationOutput} from './types/CreateEvaluationOutput';
import {CreateMLModelInput} from './types/CreateMLModelInput';
import {CreateMLModelOutput} from './types/CreateMLModelOutput';
import {CreateRealtimeEndpointInput} from './types/CreateRealtimeEndpointInput';
import {CreateRealtimeEndpointOutput} from './types/CreateRealtimeEndpointOutput';
import {DeleteBatchPredictionInput} from './types/DeleteBatchPredictionInput';
import {DeleteBatchPredictionOutput} from './types/DeleteBatchPredictionOutput';
import {DeleteDataSourceInput} from './types/DeleteDataSourceInput';
import {DeleteDataSourceOutput} from './types/DeleteDataSourceOutput';
import {DeleteEvaluationInput} from './types/DeleteEvaluationInput';
import {DeleteEvaluationOutput} from './types/DeleteEvaluationOutput';
import {DeleteMLModelInput} from './types/DeleteMLModelInput';
import {DeleteMLModelOutput} from './types/DeleteMLModelOutput';
import {DeleteRealtimeEndpointInput} from './types/DeleteRealtimeEndpointInput';
import {DeleteRealtimeEndpointOutput} from './types/DeleteRealtimeEndpointOutput';
import {DeleteTagsInput} from './types/DeleteTagsInput';
import {DeleteTagsOutput} from './types/DeleteTagsOutput';
import {DescribeBatchPredictionsInput} from './types/DescribeBatchPredictionsInput';
import {DescribeBatchPredictionsOutput} from './types/DescribeBatchPredictionsOutput';
import {DescribeDataSourcesInput} from './types/DescribeDataSourcesInput';
import {DescribeDataSourcesOutput} from './types/DescribeDataSourcesOutput';
import {DescribeEvaluationsInput} from './types/DescribeEvaluationsInput';
import {DescribeEvaluationsOutput} from './types/DescribeEvaluationsOutput';
import {DescribeMLModelsInput} from './types/DescribeMLModelsInput';
import {DescribeMLModelsOutput} from './types/DescribeMLModelsOutput';
import {DescribeTagsInput} from './types/DescribeTagsInput';
import {DescribeTagsOutput} from './types/DescribeTagsOutput';
import {GetBatchPredictionInput} from './types/GetBatchPredictionInput';
import {GetBatchPredictionOutput} from './types/GetBatchPredictionOutput';
import {GetDataSourceInput} from './types/GetDataSourceInput';
import {GetDataSourceOutput} from './types/GetDataSourceOutput';
import {GetEvaluationInput} from './types/GetEvaluationInput';
import {GetEvaluationOutput} from './types/GetEvaluationOutput';
import {GetMLModelInput} from './types/GetMLModelInput';
import {GetMLModelOutput} from './types/GetMLModelOutput';
import {IdempotentParameterMismatchException} from './types/IdempotentParameterMismatchException';
import {InternalServerException} from './types/InternalServerException';
import {InvalidInputException} from './types/InvalidInputException';
import {InvalidTagException} from './types/InvalidTagException';
import {LimitExceededException} from './types/LimitExceededException';
import {PredictInput} from './types/PredictInput';
import {PredictOutput} from './types/PredictOutput';
import {PredictorNotMountedException} from './types/PredictorNotMountedException';
import {ResourceNotFoundException} from './types/ResourceNotFoundException';
import {TagLimitExceededException} from './types/TagLimitExceededException';
import {UpdateBatchPredictionInput} from './types/UpdateBatchPredictionInput';
import {UpdateBatchPredictionOutput} from './types/UpdateBatchPredictionOutput';
import {UpdateDataSourceInput} from './types/UpdateDataSourceInput';
import {UpdateDataSourceOutput} from './types/UpdateDataSourceOutput';
import {UpdateEvaluationInput} from './types/UpdateEvaluationInput';
import {UpdateEvaluationOutput} from './types/UpdateEvaluationOutput';
import {UpdateMLModelInput} from './types/UpdateMLModelInput';
import {UpdateMLModelOutput} from './types/UpdateMLModelOutput';
import {AddTagsCommand} from './commands/AddTagsCommand';
import {CreateBatchPredictionCommand} from './commands/CreateBatchPredictionCommand';
import {CreateDataSourceFromRDSCommand} from './commands/CreateDataSourceFromRDSCommand';
import {CreateDataSourceFromRedshiftCommand} from './commands/CreateDataSourceFromRedshiftCommand';
import {CreateDataSourceFromS3Command} from './commands/CreateDataSourceFromS3Command';
import {CreateEvaluationCommand} from './commands/CreateEvaluationCommand';
import {CreateMLModelCommand} from './commands/CreateMLModelCommand';
import {CreateRealtimeEndpointCommand} from './commands/CreateRealtimeEndpointCommand';
import {DeleteBatchPredictionCommand} from './commands/DeleteBatchPredictionCommand';
import {DeleteDataSourceCommand} from './commands/DeleteDataSourceCommand';
import {DeleteEvaluationCommand} from './commands/DeleteEvaluationCommand';
import {DeleteMLModelCommand} from './commands/DeleteMLModelCommand';
import {DeleteRealtimeEndpointCommand} from './commands/DeleteRealtimeEndpointCommand';
import {DeleteTagsCommand} from './commands/DeleteTagsCommand';
import {DescribeBatchPredictionsCommand} from './commands/DescribeBatchPredictionsCommand';
import {DescribeDataSourcesCommand} from './commands/DescribeDataSourcesCommand';
import {DescribeEvaluationsCommand} from './commands/DescribeEvaluationsCommand';
import {DescribeMLModelsCommand} from './commands/DescribeMLModelsCommand';
import {DescribeTagsCommand} from './commands/DescribeTagsCommand';
import {GetBatchPredictionCommand} from './commands/GetBatchPredictionCommand';
import {GetDataSourceCommand} from './commands/GetDataSourceCommand';
import {GetEvaluationCommand} from './commands/GetEvaluationCommand';
import {GetMLModelCommand} from './commands/GetMLModelCommand';
import {PredictCommand} from './commands/PredictCommand';
import {UpdateBatchPredictionCommand} from './commands/UpdateBatchPredictionCommand';
import {UpdateDataSourceCommand} from './commands/UpdateDataSourceCommand';
import {UpdateEvaluationCommand} from './commands/UpdateEvaluationCommand';
import {UpdateMLModelCommand} from './commands/UpdateMLModelCommand';

export class MachineLearning extends MachineLearningClient {
    /**
     * <p>Adds one or more tags to an object, up to a limit of 10. Each tag consists of a key and an optional value. If you add a tag using a key that is already associated with the ML object, <code>AddTags</code> updates the tag's value.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {InvalidTagException} InvalidTagException shape
     *   - {TagLimitExceededException} TagLimitExceededException shape
     *   - {ResourceNotFoundException} <p>A specified resource cannot be located.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public addTags(args: AddTagsInput): Promise<AddTagsOutput>;
    public addTags(
        args: AddTagsInput,
        cb: (err: any, data?: AddTagsOutput) => void
    ): void;
    public addTags(
        args: AddTagsInput,
        cb?: (err: any, data?: AddTagsOutput) => void
    ): Promise<AddTagsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new AddTagsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Generates predictions for a group of observations. The observations to process exist in one or more data files referenced by a <code>DataSource</code>. This operation creates a new <code>BatchPrediction</code>, and uses an <code>MLModel</code> and the data files referenced by the <code>DataSource</code> as information sources. </p> <p><code>CreateBatchPrediction</code> is an asynchronous operation. In response to <code>CreateBatchPrediction</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>BatchPrediction</code> status to <code>PENDING</code>. After the <code>BatchPrediction</code> completes, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can poll for status updates by using the <a>GetBatchPrediction</a> operation and checking the <code>Status</code> parameter of the result. After the <code>COMPLETED</code> status appears, the results are available in the location specified by the <code>OutputUri</code> parameter.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {IdempotentParameterMismatchException} <p>A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createBatchPrediction(args: CreateBatchPredictionInput): Promise<CreateBatchPredictionOutput>;
    public createBatchPrediction(
        args: CreateBatchPredictionInput,
        cb: (err: any, data?: CreateBatchPredictionOutput) => void
    ): void;
    public createBatchPrediction(
        args: CreateBatchPredictionInput,
        cb?: (err: any, data?: CreateBatchPredictionOutput) => void
    ): Promise<CreateBatchPredictionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateBatchPredictionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Creates a <code>DataSource</code> object from an <a href="http://aws.amazon.com/rds/"> Amazon Relational Database Service</a> (Amazon RDS). A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p><code>CreateDataSourceFromRDS</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRDS</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used only to perform <code>&gt;CreateMLModel</code>&gt;, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML cannot accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {IdempotentParameterMismatchException} <p>A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createDataSourceFromRDS(args: CreateDataSourceFromRDSInput): Promise<CreateDataSourceFromRDSOutput>;
    public createDataSourceFromRDS(
        args: CreateDataSourceFromRDSInput,
        cb: (err: any, data?: CreateDataSourceFromRDSOutput) => void
    ): void;
    public createDataSourceFromRDS(
        args: CreateDataSourceFromRDSInput,
        cb?: (err: any, data?: CreateDataSourceFromRDSOutput) => void
    ): Promise<CreateDataSourceFromRDSOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateDataSourceFromRDSCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Creates a <code>DataSource</code> from a database hosted on an Amazon Redshift cluster. A <code>DataSource</code> references data that can be used to perform either <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p><code>CreateDataSourceFromRedshift</code> is an asynchronous operation. In response to <code>CreateDataSourceFromRedshift</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> is created and ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in <code>COMPLETED</code> or <code>PENDING</code> states can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observations should be contained in the database hosted on an Amazon Redshift cluster and should be specified by a <code>SelectSqlQuery</code> query. Amazon ML executes an <code>Unload</code> command in Amazon Redshift to transfer the result set of the <code>SelectSqlQuery</code> query to <code>S3StagingLocation</code>.</p> <p>After the <code>DataSource</code> has been created, it's ready for use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also requires a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p> <?oxy_insert_start author="laurama" timestamp="20160406T153842-0700"><p>You can't change an existing datasource, but you can copy and modify the settings from an existing Amazon Redshift datasource to create a new datasource. To do so, call <code>GetDataSource</code> for an existing datasource and copy the values to a <code>CreateDataSource</code> call. Change the settings that you want to change and make sure that all required fields have the appropriate values.</p> <?oxy_insert_end>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {IdempotentParameterMismatchException} <p>A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createDataSourceFromRedshift(args: CreateDataSourceFromRedshiftInput): Promise<CreateDataSourceFromRedshiftOutput>;
    public createDataSourceFromRedshift(
        args: CreateDataSourceFromRedshiftInput,
        cb: (err: any, data?: CreateDataSourceFromRedshiftOutput) => void
    ): void;
    public createDataSourceFromRedshift(
        args: CreateDataSourceFromRedshiftInput,
        cb?: (err: any, data?: CreateDataSourceFromRedshiftOutput) => void
    ): Promise<CreateDataSourceFromRedshiftOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateDataSourceFromRedshiftCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Creates a <code>DataSource</code> object. A <code>DataSource</code> references data that can be used to perform <code>CreateMLModel</code>, <code>CreateEvaluation</code>, or <code>CreateBatchPrediction</code> operations.</p> <p><code>CreateDataSourceFromS3</code> is an asynchronous operation. In response to <code>CreateDataSourceFromS3</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>DataSource</code> status to <code>PENDING</code>. After the <code>DataSource</code> has been created and is ready for use, Amazon ML sets the <code>Status</code> parameter to <code>COMPLETED</code>. <code>DataSource</code> in the <code>COMPLETED</code> or <code>PENDING</code> state can be used to perform only <code>CreateMLModel</code>, <code>CreateEvaluation</code> or <code>CreateBatchPrediction</code> operations. </p> <p> If Amazon ML can't accept the input source, it sets the <code>Status</code> parameter to <code>FAILED</code> and includes an error message in the <code>Message</code> attribute of the <code>GetDataSource</code> operation response. </p> <p>The observation data used in a <code>DataSource</code> should be ready to use; that is, it should have a consistent structure, and missing data values should be kept to a minimum. The observation data must reside in one or more .csv files in an Amazon Simple Storage Service (Amazon S3) location, along with a schema that describes the data items by name and type. The same schema must be used for all of the data files referenced by the <code>DataSource</code>. </p> <p>After the <code>DataSource</code> has been created, it's ready to use in evaluations and batch predictions. If you plan to use the <code>DataSource</code> to train an <code>MLModel</code>, the <code>DataSource</code> also needs a recipe. A recipe describes how each input variable will be used in training an <code>MLModel</code>. Will the variable be included or excluded from training? Will the variable be manipulated; for example, will it be combined with another variable or will it be split apart into word combinations? The recipe provides answers to these questions.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {IdempotentParameterMismatchException} <p>A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createDataSourceFromS3(args: CreateDataSourceFromS3Input): Promise<CreateDataSourceFromS3Output>;
    public createDataSourceFromS3(
        args: CreateDataSourceFromS3Input,
        cb: (err: any, data?: CreateDataSourceFromS3Output) => void
    ): void;
    public createDataSourceFromS3(
        args: CreateDataSourceFromS3Input,
        cb?: (err: any, data?: CreateDataSourceFromS3Output) => void
    ): Promise<CreateDataSourceFromS3Output>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateDataSourceFromS3Command(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Creates a new <code>Evaluation</code> of an <code>MLModel</code>. An <code>MLModel</code> is evaluated on a set of observations associated to a <code>DataSource</code>. Like a <code>DataSource</code> for an <code>MLModel</code>, the <code>DataSource</code> for an <code>Evaluation</code> contains values for the <code>Target Variable</code>. The <code>Evaluation</code> compares the predicted result for each observation to the actual outcome and provides a summary so that you know how effective the <code>MLModel</code> functions on the test data. Evaluation generates a relevant performance metric, such as BinaryAUC, RegressionRMSE or MulticlassAvgFScore based on the corresponding <code>MLModelType</code>: <code>BINARY</code>, <code>REGRESSION</code> or <code>MULTICLASS</code>. </p> <p><code>CreateEvaluation</code> is an asynchronous operation. In response to <code>CreateEvaluation</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the evaluation status to <code>PENDING</code>. After the <code>Evaluation</code> is created and ready for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetEvaluation</code> operation to check progress of the evaluation during the creation operation.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {IdempotentParameterMismatchException} <p>A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createEvaluation(args: CreateEvaluationInput): Promise<CreateEvaluationOutput>;
    public createEvaluation(
        args: CreateEvaluationInput,
        cb: (err: any, data?: CreateEvaluationOutput) => void
    ): void;
    public createEvaluation(
        args: CreateEvaluationInput,
        cb?: (err: any, data?: CreateEvaluationOutput) => void
    ): Promise<CreateEvaluationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateEvaluationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Creates a new <code>MLModel</code> using the <code>DataSource</code> and the recipe as information sources. </p> <p>An <code>MLModel</code> is nearly immutable. Users can update only the <code>MLModelName</code> and the <code>ScoreThreshold</code> in an <code>MLModel</code> without creating a new <code>MLModel</code>. </p> <p><code>CreateMLModel</code> is an asynchronous operation. In response to <code>CreateMLModel</code>, Amazon Machine Learning (Amazon ML) immediately returns and sets the <code>MLModel</code> status to <code>PENDING</code>. After the <code>MLModel</code> has been created and ready is for use, Amazon ML sets the status to <code>COMPLETED</code>. </p> <p>You can use the <code>GetMLModel</code> operation to check the progress of the <code>MLModel</code> during the creation operation.</p> <p> <code>CreateMLModel</code> requires a <code>DataSource</code> with computed statistics, which can be created by setting <code>ComputeStatistics</code> to <code>true</code> in <code>CreateDataSourceFromRDS</code>, <code>CreateDataSourceFromS3</code>, or <code>CreateDataSourceFromRedshift</code> operations. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {IdempotentParameterMismatchException} <p>A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createMLModel(args: CreateMLModelInput): Promise<CreateMLModelOutput>;
    public createMLModel(
        args: CreateMLModelInput,
        cb: (err: any, data?: CreateMLModelOutput) => void
    ): void;
    public createMLModel(
        args: CreateMLModelInput,
        cb?: (err: any, data?: CreateMLModelOutput) => void
    ): Promise<CreateMLModelOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateMLModelCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Creates a real-time endpoint for the <code>MLModel</code>. The endpoint contains the URI of the <code>MLModel</code>; that is, the location to send real-time prediction requests for the specified <code>MLModel</code>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {ResourceNotFoundException} <p>A specified resource cannot be located.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public createRealtimeEndpoint(args: CreateRealtimeEndpointInput): Promise<CreateRealtimeEndpointOutput>;
    public createRealtimeEndpoint(
        args: CreateRealtimeEndpointInput,
        cb: (err: any, data?: CreateRealtimeEndpointOutput) => void
    ): void;
    public createRealtimeEndpoint(
        args: CreateRealtimeEndpointInput,
        cb?: (err: any, data?: CreateRealtimeEndpointOutput) => void
    ): Promise<CreateRealtimeEndpointOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new CreateRealtimeEndpointCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Assigns the DELETED status to a <code>BatchPrediction</code>, rendering it unusable.</p> <p>After using the <code>DeleteBatchPrediction</code> operation, you can use the <a>GetBatchPrediction</a> operation to verify that the status of the <code>BatchPrediction</code> changed to DELETED.</p> <p><b>Caution:</b> The result of the <code>DeleteBatchPrediction</code> operation is irreversible.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {ResourceNotFoundException} <p>A specified resource cannot be located.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteBatchPrediction(args: DeleteBatchPredictionInput): Promise<DeleteBatchPredictionOutput>;
    public deleteBatchPrediction(
        args: DeleteBatchPredictionInput,
        cb: (err: any, data?: DeleteBatchPredictionOutput) => void
    ): void;
    public deleteBatchPrediction(
        args: DeleteBatchPredictionInput,
        cb?: (err: any, data?: DeleteBatchPredictionOutput) => void
    ): Promise<DeleteBatchPredictionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteBatchPredictionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Assigns the DELETED status to a <code>DataSource</code>, rendering it unusable.</p> <p>After using the <code>DeleteDataSource</code> operation, you can use the <a>GetDataSource</a> operation to verify that the status of the <code>DataSource</code> changed to DELETED.</p> <p><b>Caution:</b> The results of the <code>DeleteDataSource</code> operation are irreversible.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {ResourceNotFoundException} <p>A specified resource cannot be located.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteDataSource(args: DeleteDataSourceInput): Promise<DeleteDataSourceOutput>;
    public deleteDataSource(
        args: DeleteDataSourceInput,
        cb: (err: any, data?: DeleteDataSourceOutput) => void
    ): void;
    public deleteDataSource(
        args: DeleteDataSourceInput,
        cb?: (err: any, data?: DeleteDataSourceOutput) => void
    ): Promise<DeleteDataSourceOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteDataSourceCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Assigns the <code>DELETED</code> status to an <code>Evaluation</code>, rendering it unusable.</p> <p>After invoking the <code>DeleteEvaluation</code> operation, you can use the <code>GetEvaluation</code> operation to verify that the status of the <code>Evaluation</code> changed to <code>DELETED</code>.</p> <caution><title>Caution</title> <p>The results of the <code>DeleteEvaluation</code> operation are irreversible.</p></caution>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {ResourceNotFoundException} <p>A specified resource cannot be located.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteEvaluation(args: DeleteEvaluationInput): Promise<DeleteEvaluationOutput>;
    public deleteEvaluation(
        args: DeleteEvaluationInput,
        cb: (err: any, data?: DeleteEvaluationOutput) => void
    ): void;
    public deleteEvaluation(
        args: DeleteEvaluationInput,
        cb?: (err: any, data?: DeleteEvaluationOutput) => void
    ): Promise<DeleteEvaluationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteEvaluationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Assigns the <code>DELETED</code> status to an <code>MLModel</code>, rendering it unusable.</p> <p>After using the <code>DeleteMLModel</code> operation, you can use the <code>GetMLModel</code> operation to verify that the status of the <code>MLModel</code> changed to DELETED.</p> <p><b>Caution:</b> The result of the <code>DeleteMLModel</code> operation is irreversible.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {ResourceNotFoundException} <p>A specified resource cannot be located.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteMLModel(args: DeleteMLModelInput): Promise<DeleteMLModelOutput>;
    public deleteMLModel(
        args: DeleteMLModelInput,
        cb: (err: any, data?: DeleteMLModelOutput) => void
    ): void;
    public deleteMLModel(
        args: DeleteMLModelInput,
        cb?: (err: any, data?: DeleteMLModelOutput) => void
    ): Promise<DeleteMLModelOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteMLModelCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Deletes a real time endpoint of an <code>MLModel</code>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {ResourceNotFoundException} <p>A specified resource cannot be located.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteRealtimeEndpoint(args: DeleteRealtimeEndpointInput): Promise<DeleteRealtimeEndpointOutput>;
    public deleteRealtimeEndpoint(
        args: DeleteRealtimeEndpointInput,
        cb: (err: any, data?: DeleteRealtimeEndpointOutput) => void
    ): void;
    public deleteRealtimeEndpoint(
        args: DeleteRealtimeEndpointInput,
        cb?: (err: any, data?: DeleteRealtimeEndpointOutput) => void
    ): Promise<DeleteRealtimeEndpointOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteRealtimeEndpointCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags.</p> <p>If you specify a tag that doesn't exist, Amazon ML ignores it.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {InvalidTagException} InvalidTagException shape
     *   - {ResourceNotFoundException} <p>A specified resource cannot be located.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public deleteTags(args: DeleteTagsInput): Promise<DeleteTagsOutput>;
    public deleteTags(
        args: DeleteTagsInput,
        cb: (err: any, data?: DeleteTagsOutput) => void
    ): void;
    public deleteTags(
        args: DeleteTagsInput,
        cb?: (err: any, data?: DeleteTagsOutput) => void
    ): Promise<DeleteTagsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DeleteTagsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns a list of <code>BatchPrediction</code> operations that match the search criteria in the request.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public describeBatchPredictions(args: DescribeBatchPredictionsInput): Promise<DescribeBatchPredictionsOutput>;
    public describeBatchPredictions(
        args: DescribeBatchPredictionsInput,
        cb: (err: any, data?: DescribeBatchPredictionsOutput) => void
    ): void;
    public describeBatchPredictions(
        args: DescribeBatchPredictionsInput,
        cb?: (err: any, data?: DescribeBatchPredictionsOutput) => void
    ): Promise<DescribeBatchPredictionsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DescribeBatchPredictionsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns a list of <code>DataSource</code> that match the search criteria in the request.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public describeDataSources(args: DescribeDataSourcesInput): Promise<DescribeDataSourcesOutput>;
    public describeDataSources(
        args: DescribeDataSourcesInput,
        cb: (err: any, data?: DescribeDataSourcesOutput) => void
    ): void;
    public describeDataSources(
        args: DescribeDataSourcesInput,
        cb?: (err: any, data?: DescribeDataSourcesOutput) => void
    ): Promise<DescribeDataSourcesOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DescribeDataSourcesCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns a list of <code>DescribeEvaluations</code> that match the search criteria in the request.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public describeEvaluations(args: DescribeEvaluationsInput): Promise<DescribeEvaluationsOutput>;
    public describeEvaluations(
        args: DescribeEvaluationsInput,
        cb: (err: any, data?: DescribeEvaluationsOutput) => void
    ): void;
    public describeEvaluations(
        args: DescribeEvaluationsInput,
        cb?: (err: any, data?: DescribeEvaluationsOutput) => void
    ): Promise<DescribeEvaluationsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DescribeEvaluationsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns a list of <code>MLModel</code> that match the search criteria in the request.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public describeMLModels(args: DescribeMLModelsInput): Promise<DescribeMLModelsOutput>;
    public describeMLModels(
        args: DescribeMLModelsInput,
        cb: (err: any, data?: DescribeMLModelsOutput) => void
    ): void;
    public describeMLModels(
        args: DescribeMLModelsInput,
        cb?: (err: any, data?: DescribeMLModelsOutput) => void
    ): Promise<DescribeMLModelsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DescribeMLModelsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Describes one or more of the tags for your Amazon ML object.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {ResourceNotFoundException} <p>A specified resource cannot be located.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public describeTags(args: DescribeTagsInput): Promise<DescribeTagsOutput>;
    public describeTags(
        args: DescribeTagsInput,
        cb: (err: any, data?: DescribeTagsOutput) => void
    ): void;
    public describeTags(
        args: DescribeTagsInput,
        cb?: (err: any, data?: DescribeTagsOutput) => void
    ): Promise<DescribeTagsOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new DescribeTagsCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns a <code>BatchPrediction</code> that includes detailed metadata, status, and data file information for a <code>Batch Prediction</code> request.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {ResourceNotFoundException} <p>A specified resource cannot be located.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getBatchPrediction(args: GetBatchPredictionInput): Promise<GetBatchPredictionOutput>;
    public getBatchPrediction(
        args: GetBatchPredictionInput,
        cb: (err: any, data?: GetBatchPredictionOutput) => void
    ): void;
    public getBatchPrediction(
        args: GetBatchPredictionInput,
        cb?: (err: any, data?: GetBatchPredictionOutput) => void
    ): Promise<GetBatchPredictionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetBatchPredictionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns a <code>DataSource</code> that includes metadata and data file information, as well as the current status of the <code>DataSource</code>.</p> <p><code>GetDataSource</code> provides results in normal or verbose format. The verbose format adds the schema description and the list of files pointed to by the DataSource to the normal format.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {ResourceNotFoundException} <p>A specified resource cannot be located.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getDataSource(args: GetDataSourceInput): Promise<GetDataSourceOutput>;
    public getDataSource(
        args: GetDataSourceInput,
        cb: (err: any, data?: GetDataSourceOutput) => void
    ): void;
    public getDataSource(
        args: GetDataSourceInput,
        cb?: (err: any, data?: GetDataSourceOutput) => void
    ): Promise<GetDataSourceOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetDataSourceCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns an <code>Evaluation</code> that includes metadata as well as the current status of the <code>Evaluation</code>.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {ResourceNotFoundException} <p>A specified resource cannot be located.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getEvaluation(args: GetEvaluationInput): Promise<GetEvaluationOutput>;
    public getEvaluation(
        args: GetEvaluationInput,
        cb: (err: any, data?: GetEvaluationOutput) => void
    ): void;
    public getEvaluation(
        args: GetEvaluationInput,
        cb?: (err: any, data?: GetEvaluationOutput) => void
    ): Promise<GetEvaluationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetEvaluationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Returns an <code>MLModel</code> that includes detailed metadata, data source information, and the current status of the <code>MLModel</code>.</p> <p><code>GetMLModel</code> provides results in normal or verbose format. </p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {ResourceNotFoundException} <p>A specified resource cannot be located.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public getMLModel(args: GetMLModelInput): Promise<GetMLModelOutput>;
    public getMLModel(
        args: GetMLModelInput,
        cb: (err: any, data?: GetMLModelOutput) => void
    ): void;
    public getMLModel(
        args: GetMLModelInput,
        cb?: (err: any, data?: GetMLModelOutput) => void
    ): Promise<GetMLModelOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new GetMLModelCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Generates a prediction for the observation using the specified <code>ML Model</code>.</p> <note><title>Note</title> <p>Not all response parameters will be populated. Whether a response parameter is populated depends on the type of model requested.</p></note>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {ResourceNotFoundException} <p>A specified resource cannot be located.</p>
     *   - {LimitExceededException} <p>The subscriber exceeded the maximum number of operations. This exception can occur when listing objects such as <code>DataSource</code>.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {PredictorNotMountedException} <p>The exception is thrown when a predict request is made to an unmounted <code>MLModel</code>.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public predict(args: PredictInput): Promise<PredictOutput>;
    public predict(
        args: PredictInput,
        cb: (err: any, data?: PredictOutput) => void
    ): void;
    public predict(
        args: PredictInput,
        cb?: (err: any, data?: PredictOutput) => void
    ): Promise<PredictOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new PredictCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Updates the <code>BatchPredictionName</code> of a <code>BatchPrediction</code>.</p> <p>You can use the <code>GetBatchPrediction</code> operation to view the contents of the updated data element.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {ResourceNotFoundException} <p>A specified resource cannot be located.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public updateBatchPrediction(args: UpdateBatchPredictionInput): Promise<UpdateBatchPredictionOutput>;
    public updateBatchPrediction(
        args: UpdateBatchPredictionInput,
        cb: (err: any, data?: UpdateBatchPredictionOutput) => void
    ): void;
    public updateBatchPrediction(
        args: UpdateBatchPredictionInput,
        cb?: (err: any, data?: UpdateBatchPredictionOutput) => void
    ): Promise<UpdateBatchPredictionOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UpdateBatchPredictionCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Updates the <code>DataSourceName</code> of a <code>DataSource</code>.</p> <p>You can use the <code>GetDataSource</code> operation to view the contents of the updated data element.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {ResourceNotFoundException} <p>A specified resource cannot be located.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public updateDataSource(args: UpdateDataSourceInput): Promise<UpdateDataSourceOutput>;
    public updateDataSource(
        args: UpdateDataSourceInput,
        cb: (err: any, data?: UpdateDataSourceOutput) => void
    ): void;
    public updateDataSource(
        args: UpdateDataSourceInput,
        cb?: (err: any, data?: UpdateDataSourceOutput) => void
    ): Promise<UpdateDataSourceOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UpdateDataSourceCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Updates the <code>EvaluationName</code> of an <code>Evaluation</code>.</p> <p>You can use the <code>GetEvaluation</code> operation to view the contents of the updated data element.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {ResourceNotFoundException} <p>A specified resource cannot be located.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public updateEvaluation(args: UpdateEvaluationInput): Promise<UpdateEvaluationOutput>;
    public updateEvaluation(
        args: UpdateEvaluationInput,
        cb: (err: any, data?: UpdateEvaluationOutput) => void
    ): void;
    public updateEvaluation(
        args: UpdateEvaluationInput,
        cb?: (err: any, data?: UpdateEvaluationOutput) => void
    ): Promise<UpdateEvaluationOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UpdateEvaluationCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }

    /**
     * <p>Updates the <code>MLModelName</code> and the <code>ScoreThreshold</code> of an <code>MLModel</code>.</p> <p>You can use the <code>GetMLModel</code> operation to view the contents of the updated data element.</p>
     *
     * This operation may fail with one of the following errors:
     *   - {InvalidInputException} <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
     *   - {ResourceNotFoundException} <p>A specified resource cannot be located.</p>
     *   - {InternalServerException} <p>An error on the server occurred when trying to process a request.</p>
     *   - {Error} An error originating from the SDK or customizations rather than the service
     */
    public updateMLModel(args: UpdateMLModelInput): Promise<UpdateMLModelOutput>;
    public updateMLModel(
        args: UpdateMLModelInput,
        cb: (err: any, data?: UpdateMLModelOutput) => void
    ): void;
    public updateMLModel(
        args: UpdateMLModelInput,
        cb?: (err: any, data?: UpdateMLModelOutput) => void
    ): Promise<UpdateMLModelOutput>|void {
        // create the appropriate command and pass it to .send
        const command = new UpdateMLModelCommand(args);
        if (typeof cb === 'function') {
            this.send(command, cb);
        } else {
            return this.send(command);
        }
    }
}
