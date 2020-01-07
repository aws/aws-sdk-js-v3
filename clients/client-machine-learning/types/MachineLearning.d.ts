import { MachineLearningClient } from "./MachineLearningClient";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { CreateBatchPredictionCommandInput, CreateBatchPredictionCommandOutput } from "./commands/CreateBatchPredictionCommand";
import { CreateDataSourceFromRDSCommandInput, CreateDataSourceFromRDSCommandOutput } from "./commands/CreateDataSourceFromRDSCommand";
import { CreateDataSourceFromRedshiftCommandInput, CreateDataSourceFromRedshiftCommandOutput } from "./commands/CreateDataSourceFromRedshiftCommand";
import { CreateDataSourceFromS3CommandInput, CreateDataSourceFromS3CommandOutput } from "./commands/CreateDataSourceFromS3Command";
import { CreateEvaluationCommandInput, CreateEvaluationCommandOutput } from "./commands/CreateEvaluationCommand";
import { CreateMLModelCommandInput, CreateMLModelCommandOutput } from "./commands/CreateMLModelCommand";
import { CreateRealtimeEndpointCommandInput, CreateRealtimeEndpointCommandOutput } from "./commands/CreateRealtimeEndpointCommand";
import { DeleteBatchPredictionCommandInput, DeleteBatchPredictionCommandOutput } from "./commands/DeleteBatchPredictionCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import { DeleteEvaluationCommandInput, DeleteEvaluationCommandOutput } from "./commands/DeleteEvaluationCommand";
import { DeleteMLModelCommandInput, DeleteMLModelCommandOutput } from "./commands/DeleteMLModelCommand";
import { DeleteRealtimeEndpointCommandInput, DeleteRealtimeEndpointCommandOutput } from "./commands/DeleteRealtimeEndpointCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import { DescribeBatchPredictionsCommandInput, DescribeBatchPredictionsCommandOutput } from "./commands/DescribeBatchPredictionsCommand";
import { DescribeDataSourcesCommandInput, DescribeDataSourcesCommandOutput } from "./commands/DescribeDataSourcesCommand";
import { DescribeEvaluationsCommandInput, DescribeEvaluationsCommandOutput } from "./commands/DescribeEvaluationsCommand";
import { DescribeMLModelsCommandInput, DescribeMLModelsCommandOutput } from "./commands/DescribeMLModelsCommand";
import { DescribeTagsCommandInput, DescribeTagsCommandOutput } from "./commands/DescribeTagsCommand";
import { GetBatchPredictionCommandInput, GetBatchPredictionCommandOutput } from "./commands/GetBatchPredictionCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "./commands/GetDataSourceCommand";
import { GetEvaluationCommandInput, GetEvaluationCommandOutput } from "./commands/GetEvaluationCommand";
import { GetMLModelCommandInput, GetMLModelCommandOutput } from "./commands/GetMLModelCommand";
import { PredictCommandInput, PredictCommandOutput } from "./commands/PredictCommand";
import { UpdateBatchPredictionCommandInput, UpdateBatchPredictionCommandOutput } from "./commands/UpdateBatchPredictionCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import { UpdateEvaluationCommandInput, UpdateEvaluationCommandOutput } from "./commands/UpdateEvaluationCommand";
import { UpdateMLModelCommandInput, UpdateMLModelCommandOutput } from "./commands/UpdateMLModelCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>Definition of the public APIs
 *             exposed by Amazon Machine Learning</p>
 */
export declare class MachineLearning extends MachineLearningClient {
    /**
     * <p>Adds one or more tags to an object, up to a limit of 10. Each tag consists of a key
     * 		    and an optional value. If you add a tag using a key that is already associated with the ML object,
     * 			<code>AddTags</code> updates the tag's value.</p>
     */
    addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
    addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
    addTags(args: AddTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
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
    createBatchPrediction(args: CreateBatchPredictionCommandInput, options?: __HttpHandlerOptions): Promise<CreateBatchPredictionCommandOutput>;
    createBatchPrediction(args: CreateBatchPredictionCommandInput, cb: (err: any, data?: CreateBatchPredictionCommandOutput) => void): void;
    createBatchPrediction(args: CreateBatchPredictionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateBatchPredictionCommandOutput) => void): void;
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
    createDataSourceFromRDS(args: CreateDataSourceFromRDSCommandInput, options?: __HttpHandlerOptions): Promise<CreateDataSourceFromRDSCommandOutput>;
    createDataSourceFromRDS(args: CreateDataSourceFromRDSCommandInput, cb: (err: any, data?: CreateDataSourceFromRDSCommandOutput) => void): void;
    createDataSourceFromRDS(args: CreateDataSourceFromRDSCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDataSourceFromRDSCommandOutput) => void): void;
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
    createDataSourceFromRedshift(args: CreateDataSourceFromRedshiftCommandInput, options?: __HttpHandlerOptions): Promise<CreateDataSourceFromRedshiftCommandOutput>;
    createDataSourceFromRedshift(args: CreateDataSourceFromRedshiftCommandInput, cb: (err: any, data?: CreateDataSourceFromRedshiftCommandOutput) => void): void;
    createDataSourceFromRedshift(args: CreateDataSourceFromRedshiftCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDataSourceFromRedshiftCommandOutput) => void): void;
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
    createDataSourceFromS3(args: CreateDataSourceFromS3CommandInput, options?: __HttpHandlerOptions): Promise<CreateDataSourceFromS3CommandOutput>;
    createDataSourceFromS3(args: CreateDataSourceFromS3CommandInput, cb: (err: any, data?: CreateDataSourceFromS3CommandOutput) => void): void;
    createDataSourceFromS3(args: CreateDataSourceFromS3CommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDataSourceFromS3CommandOutput) => void): void;
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
    createEvaluation(args: CreateEvaluationCommandInput, options?: __HttpHandlerOptions): Promise<CreateEvaluationCommandOutput>;
    createEvaluation(args: CreateEvaluationCommandInput, cb: (err: any, data?: CreateEvaluationCommandOutput) => void): void;
    createEvaluation(args: CreateEvaluationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEvaluationCommandOutput) => void): void;
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
    createMLModel(args: CreateMLModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateMLModelCommandOutput>;
    createMLModel(args: CreateMLModelCommandInput, cb: (err: any, data?: CreateMLModelCommandOutput) => void): void;
    createMLModel(args: CreateMLModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMLModelCommandOutput) => void): void;
    /**
     * <p>Creates a real-time endpoint for the <code>MLModel</code>. The endpoint contains the URI of the <code>MLModel</code>; that is, the location to send real-time prediction requests for the specified <code>MLModel</code>.</p>
     */
    createRealtimeEndpoint(args: CreateRealtimeEndpointCommandInput, options?: __HttpHandlerOptions): Promise<CreateRealtimeEndpointCommandOutput>;
    createRealtimeEndpoint(args: CreateRealtimeEndpointCommandInput, cb: (err: any, data?: CreateRealtimeEndpointCommandOutput) => void): void;
    createRealtimeEndpoint(args: CreateRealtimeEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRealtimeEndpointCommandOutput) => void): void;
    /**
     * <p>Assigns the DELETED status to a <code>BatchPrediction</code>, rendering it unusable.</p>
     *         <p>After using the <code>DeleteBatchPrediction</code> operation, you can use the <a>GetBatchPrediction</a>
     *             operation to verify that the status of the <code>BatchPrediction</code> changed to DELETED.</p>
     *
     *         <p>
     *             <b>Caution:</b> The result of the <code>DeleteBatchPrediction</code> operation is irreversible.</p>
     */
    deleteBatchPrediction(args: DeleteBatchPredictionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteBatchPredictionCommandOutput>;
    deleteBatchPrediction(args: DeleteBatchPredictionCommandInput, cb: (err: any, data?: DeleteBatchPredictionCommandOutput) => void): void;
    deleteBatchPrediction(args: DeleteBatchPredictionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteBatchPredictionCommandOutput) => void): void;
    /**
     * <p>Assigns the DELETED status to a <code>DataSource</code>, rendering it unusable.</p>
     *         <p>After using the <code>DeleteDataSource</code> operation, you can use the <a>GetDataSource</a> operation to verify that the status of the <code>DataSource</code> changed to DELETED.</p>
     *         <p>
     *             <b>Caution:</b> The results of the <code>DeleteDataSource</code> operation are irreversible.</p>
     */
    deleteDataSource(args: DeleteDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDataSourceCommandOutput>;
    deleteDataSource(args: DeleteDataSourceCommandInput, cb: (err: any, data?: DeleteDataSourceCommandOutput) => void): void;
    deleteDataSource(args: DeleteDataSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDataSourceCommandOutput) => void): void;
    /**
     * <p>Assigns the <code>DELETED</code> status to an <code>Evaluation</code>, rendering it unusable.</p>
     *
     *         <p>After invoking the <code>DeleteEvaluation</code> operation, you can use the
     *           <code>GetEvaluation</code> operation to verify that the status of the <code>Evaluation</code> changed to <code>DELETED</code>.</p>
     *         <p>
     *             <b>Caution:</b> The results of the <code>DeleteEvaluation</code> operation are irreversible.</p>
     */
    deleteEvaluation(args: DeleteEvaluationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEvaluationCommandOutput>;
    deleteEvaluation(args: DeleteEvaluationCommandInput, cb: (err: any, data?: DeleteEvaluationCommandOutput) => void): void;
    deleteEvaluation(args: DeleteEvaluationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEvaluationCommandOutput) => void): void;
    /**
     * <p>Assigns the <code>DELETED</code> status to an <code>MLModel</code>, rendering it unusable.</p>
     *         <p>After using the <code>DeleteMLModel</code> operation, you can use the
     *           <code>GetMLModel</code> operation to verify that the status of the <code>MLModel</code> changed to DELETED.</p>
     *
     *         <p>
     *             <b>Caution:</b> The result of the <code>DeleteMLModel</code> operation is irreversible.</p>
     */
    deleteMLModel(args: DeleteMLModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMLModelCommandOutput>;
    deleteMLModel(args: DeleteMLModelCommandInput, cb: (err: any, data?: DeleteMLModelCommandOutput) => void): void;
    deleteMLModel(args: DeleteMLModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMLModelCommandOutput) => void): void;
    /**
     * <p>Deletes a real time endpoint of an <code>MLModel</code>.</p>
     */
    deleteRealtimeEndpoint(args: DeleteRealtimeEndpointCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRealtimeEndpointCommandOutput>;
    deleteRealtimeEndpoint(args: DeleteRealtimeEndpointCommandInput, cb: (err: any, data?: DeleteRealtimeEndpointCommandOutput) => void): void;
    deleteRealtimeEndpoint(args: DeleteRealtimeEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRealtimeEndpointCommandOutput) => void): void;
    /**
     * <p>Deletes the specified tags associated with an ML object. After this operation is complete, you can't recover deleted tags.</p>
     * 		       <p>If you specify a tag that doesn't exist, Amazon ML ignores it.</p>
     */
    deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
    deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
    deleteTags(args: DeleteTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
    /**
     * <p>Returns a list of <code>BatchPrediction</code> operations that match the search criteria in the request.</p>
     */
    describeBatchPredictions(args: DescribeBatchPredictionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeBatchPredictionsCommandOutput>;
    describeBatchPredictions(args: DescribeBatchPredictionsCommandInput, cb: (err: any, data?: DescribeBatchPredictionsCommandOutput) => void): void;
    describeBatchPredictions(args: DescribeBatchPredictionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeBatchPredictionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of <code>DataSource</code> that match the search criteria in the request.</p>
     */
    describeDataSources(args: DescribeDataSourcesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDataSourcesCommandOutput>;
    describeDataSources(args: DescribeDataSourcesCommandInput, cb: (err: any, data?: DescribeDataSourcesCommandOutput) => void): void;
    describeDataSources(args: DescribeDataSourcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDataSourcesCommandOutput) => void): void;
    /**
     * <p>Returns a list of <code>DescribeEvaluations</code> that match the search criteria in the request.</p>
     */
    describeEvaluations(args: DescribeEvaluationsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEvaluationsCommandOutput>;
    describeEvaluations(args: DescribeEvaluationsCommandInput, cb: (err: any, data?: DescribeEvaluationsCommandOutput) => void): void;
    describeEvaluations(args: DescribeEvaluationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEvaluationsCommandOutput) => void): void;
    /**
     * <p>Returns a list of <code>MLModel</code> that match the search criteria in the request.</p>
     */
    describeMLModels(args: DescribeMLModelsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMLModelsCommandOutput>;
    describeMLModels(args: DescribeMLModelsCommandInput, cb: (err: any, data?: DescribeMLModelsCommandOutput) => void): void;
    describeMLModels(args: DescribeMLModelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMLModelsCommandOutput) => void): void;
    /**
     * <p>Describes one or more of the tags for your Amazon ML object.</p>
     */
    describeTags(args: DescribeTagsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTagsCommandOutput>;
    describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
    describeTags(args: DescribeTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
    /**
     * <p>Returns a <code>BatchPrediction</code> that includes detailed metadata, status, and data file information for a
     *             <code>Batch Prediction</code> request.</p>
     */
    getBatchPrediction(args: GetBatchPredictionCommandInput, options?: __HttpHandlerOptions): Promise<GetBatchPredictionCommandOutput>;
    getBatchPrediction(args: GetBatchPredictionCommandInput, cb: (err: any, data?: GetBatchPredictionCommandOutput) => void): void;
    getBatchPrediction(args: GetBatchPredictionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetBatchPredictionCommandOutput) => void): void;
    /**
     * <p>Returns a <code>DataSource</code> that includes metadata and data file information, as well as the current status of the <code>DataSource</code>.</p>
     *         <p>
     *             <code>GetDataSource</code> provides results in normal or verbose format. The verbose format
     *             adds the schema description and the list of files pointed to by the DataSource to the normal format.</p>
     */
    getDataSource(args: GetDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<GetDataSourceCommandOutput>;
    getDataSource(args: GetDataSourceCommandInput, cb: (err: any, data?: GetDataSourceCommandOutput) => void): void;
    getDataSource(args: GetDataSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDataSourceCommandOutput) => void): void;
    /**
     * <p>Returns an <code>Evaluation</code> that includes metadata as well as the current status of the <code>Evaluation</code>.</p>
     */
    getEvaluation(args: GetEvaluationCommandInput, options?: __HttpHandlerOptions): Promise<GetEvaluationCommandOutput>;
    getEvaluation(args: GetEvaluationCommandInput, cb: (err: any, data?: GetEvaluationCommandOutput) => void): void;
    getEvaluation(args: GetEvaluationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetEvaluationCommandOutput) => void): void;
    /**
     * <p>Returns an <code>MLModel</code> that includes detailed metadata, data source information, and the current status of the <code>MLModel</code>.</p>
     *         <p>
     *             <code>GetMLModel</code> provides results in normal or verbose format. </p>
     */
    getMLModel(args: GetMLModelCommandInput, options?: __HttpHandlerOptions): Promise<GetMLModelCommandOutput>;
    getMLModel(args: GetMLModelCommandInput, cb: (err: any, data?: GetMLModelCommandOutput) => void): void;
    getMLModel(args: GetMLModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetMLModelCommandOutput) => void): void;
    /**
     * <p>Generates a prediction for the observation using the specified <code>ML Model</code>.</p>
     *         <p>
     *             <b>Note:</b> Not all response parameters will be populated. Whether a
     *           response parameter is populated depends on the type of model requested.</p>
     */
    predict(args: PredictCommandInput, options?: __HttpHandlerOptions): Promise<PredictCommandOutput>;
    predict(args: PredictCommandInput, cb: (err: any, data?: PredictCommandOutput) => void): void;
    predict(args: PredictCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PredictCommandOutput) => void): void;
    /**
     * <p>Updates the <code>BatchPredictionName</code> of a <code>BatchPrediction</code>.</p>
     *         <p>You can use the <code>GetBatchPrediction</code> operation to view the contents of the updated data element.</p>
     */
    updateBatchPrediction(args: UpdateBatchPredictionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateBatchPredictionCommandOutput>;
    updateBatchPrediction(args: UpdateBatchPredictionCommandInput, cb: (err: any, data?: UpdateBatchPredictionCommandOutput) => void): void;
    updateBatchPrediction(args: UpdateBatchPredictionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateBatchPredictionCommandOutput) => void): void;
    /**
     * <p>Updates the <code>DataSourceName</code> of a <code>DataSource</code>.</p>
     *         <p>You can use the <code>GetDataSource</code> operation to view the contents of the updated data element.</p>
     */
    updateDataSource(args: UpdateDataSourceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDataSourceCommandOutput>;
    updateDataSource(args: UpdateDataSourceCommandInput, cb: (err: any, data?: UpdateDataSourceCommandOutput) => void): void;
    updateDataSource(args: UpdateDataSourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDataSourceCommandOutput) => void): void;
    /**
     * <p>Updates the <code>EvaluationName</code> of an <code>Evaluation</code>.</p>
     *         <p>You can use the <code>GetEvaluation</code> operation to view the contents of the updated data element.</p>
     */
    updateEvaluation(args: UpdateEvaluationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateEvaluationCommandOutput>;
    updateEvaluation(args: UpdateEvaluationCommandInput, cb: (err: any, data?: UpdateEvaluationCommandOutput) => void): void;
    updateEvaluation(args: UpdateEvaluationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateEvaluationCommandOutput) => void): void;
    /**
     * <p>Updates the <code>MLModelName</code> and the <code>ScoreThreshold</code> of an <code>MLModel</code>.</p>
     *         <p>You can use the <code>GetMLModel</code> operation to view the contents of the updated data element.</p>
     */
    updateMLModel(args: UpdateMLModelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMLModelCommandOutput>;
    updateMLModel(args: UpdateMLModelCommandInput, cb: (err: any, data?: UpdateMLModelCommandOutput) => void): void;
    updateMLModel(args: UpdateMLModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMLModelCommandOutput) => void): void;
}
