import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface AddTagsInput {
  __type?: "AddTagsInput";
  /**
   * <p>The ID of the ML object to tag. For example, <code>exampleModelId</code>.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of the ML object to tag.</p>
   */
  ResourceType: TaggableResourceType | string | undefined;

  /**
   * <p>The key-value pairs to use to create tags. If you specify a key without specifying a value, Amazon ML creates a tag with the specified key and a value of null.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace AddTagsInput {
  export const filterSensitiveLog = (obj: AddTagsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddTagsInput => __isa(o, "AddTagsInput");
}

/**
 * <p>Amazon ML returns the following elements.</p>
 */
export interface AddTagsOutput {
  __type?: "AddTagsOutput";
  /**
   * <p>The ID of the ML object that was tagged.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of the ML object that was tagged.</p>
   */
  ResourceType?: TaggableResourceType | string;
}

export namespace AddTagsOutput {
  export const filterSensitiveLog = (obj: AddTagsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddTagsOutput => __isa(o, "AddTagsOutput");
}

export enum Algorithm {
  SGD = "sgd"
}

/**
 * <p> Represents the output of a <code>GetBatchPrediction</code> operation.</p>
 *         <p> The content consists of the detailed metadata, the status, and the data file information of a
 *             <code>Batch Prediction</code>.</p>
 */
export interface BatchPrediction {
  __type?: "BatchPrediction";
  /**
   * <p>The ID of the <code>DataSource</code> that points to the group of observations to predict.</p>
   */
  BatchPredictionDataSourceId?: string;

  /**
   * <p>The ID assigned to the <code>BatchPrediction</code> at creation. This value should be identical to the value of the <code>BatchPredictionID</code>
   *             in the request.
   *         </p>
   */
  BatchPredictionId?: string;

  /**
   * <p>Long integer type that is a 64-bit signed number.</p>
   */
  ComputeTime?: number;

  /**
   * <p>The time that the <code>BatchPrediction</code> was created. The time is expressed in epoch time.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The AWS user account that invoked the <code>BatchPrediction</code>. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>
   */
  CreatedByIamUser?: string;

  /**
   * <p>A timestamp represented in epoch time.</p>
   */
  FinishedAt?: Date;

  /**
   * <p>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).</p>
   */
  InputDataLocationS3?: string;

  /**
   * <p>Long integer type that is a 64-bit signed number.</p>
   */
  InvalidRecordCount?: number;

  /**
   * <p>The time of the most recent edit to the <code>BatchPrediction</code>. The time is expressed in epoch time.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * <p>The ID of the <code>MLModel</code> that generated predictions for the <code>BatchPrediction</code> request.</p>
   */
  MLModelId?: string;

  /**
   * <p>A description of the most recent details about processing the batch prediction request.</p>
   */
  Message?: string;

  /**
   * <p>A user-supplied name or description of the <code>BatchPrediction</code>.</p>
   */
  Name?: string;

  /**
   * <p>The location of an Amazon S3 bucket or directory to receive the operation results. The following substrings are not allowed in the <code>s3 key</code> portion of the <code>outputURI</code> field: ':', '//', '/./', '/../'.</p>
   */
  OutputUri?: string;

  /**
   * <p>A timestamp represented in epoch time.</p>
   */
  StartedAt?: Date;

  /**
   * <p>The status of the <code>BatchPrediction</code>. This element can have one of the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Amazon Machine Learning (Amazon ML) submitted a request to generate predictions for a batch of observations.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INPROGRESS</code> - The process is underway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The request to perform a batch prediction did not run to completion. It is not usable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> - The batch prediction process completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The <code>BatchPrediction</code> is marked as deleted. It is not usable.</p>
   *             </li>
   *          </ul>
   */
  Status?: EntityStatus | string;

  /**
   * <p>Long integer type that is a 64-bit signed number.</p>
   */
  TotalRecordCount?: number;
}

export namespace BatchPrediction {
  export const filterSensitiveLog = (obj: BatchPrediction): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchPrediction =>
    __isa(o, "BatchPrediction");
}

export enum BatchPredictionFilterVariable {
  CREATED_AT = "CreatedAt",
  DATASOURCE_ID = "DataSourceId",
  DATA_URI = "DataURI",
  IAM_USER = "IAMUser",
  LAST_UPDATED_AT = "LastUpdatedAt",
  ML_MODEL_ID = "MLModelId",
  NAME = "Name",
  STATUS = "Status"
}

export interface CreateBatchPredictionInput {
  __type?: "CreateBatchPredictionInput";
  /**
   * <p>The ID of the <code>DataSource</code> that points to the group of observations to predict.</p>
   */
  BatchPredictionDataSourceId: string | undefined;

  /**
   * <p>A user-supplied ID that uniquely identifies the
   *                 <code>BatchPrediction</code>.</p>
   */
  BatchPredictionId: string | undefined;

  /**
   * <p>A user-supplied name or description of the <code>BatchPrediction</code>. <code>BatchPredictionName</code> can only use the UTF-8 character set.</p>
   */
  BatchPredictionName?: string;

  /**
   * <p>The ID of the <code>MLModel</code> that will generate predictions for the group of observations. </p>
   */
  MLModelId: string | undefined;

  /**
   * <p>The location of an Amazon Simple Storage Service (Amazon S3) bucket or directory to store the batch prediction results. The following substrings are not allowed in the <code>s3 key</code> portion of the <code>outputURI</code> field: ':', '//', '/./', '/../'.</p>
   *         <p>Amazon ML needs permissions to store and retrieve the logs on your behalf. For information about how to set permissions, see the <a href="https://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>.</p>
   */
  OutputUri: string | undefined;
}

export namespace CreateBatchPredictionInput {
  export const filterSensitiveLog = (obj: CreateBatchPredictionInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateBatchPredictionInput =>
    __isa(o, "CreateBatchPredictionInput");
}

/**
 * <p> Represents the output of a <code>CreateBatchPrediction</code> operation, and is an acknowledgement that Amazon ML received the request.</p>
 *          <p>The <code>CreateBatchPrediction</code> operation is asynchronous. You can poll for status updates by using the <code>>GetBatchPrediction</code>
 *             operation and checking the <code>Status</code> parameter of the result.
 *         </p>
 */
export interface CreateBatchPredictionOutput {
  __type?: "CreateBatchPredictionOutput";
  /**
   * <p>A user-supplied ID that uniquely identifies the <code>BatchPrediction</code>. This value is identical to the value of the
   *             <code>BatchPredictionId</code> in the request.</p>
   */
  BatchPredictionId?: string;
}

export namespace CreateBatchPredictionOutput {
  export const filterSensitiveLog = (
    obj: CreateBatchPredictionOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateBatchPredictionOutput =>
    __isa(o, "CreateBatchPredictionOutput");
}

export interface CreateDataSourceFromRDSInput {
  __type?: "CreateDataSourceFromRDSInput";
  /**
   * <p>The compute statistics for a <code>DataSource</code>. The statistics are generated from the observation data referenced by
   *             a <code>DataSource</code>. Amazon ML uses the statistics internally during <code>MLModel</code> training.
   *             This parameter must be set to <code>true</code> if the <code></code>DataSource<code></code> needs to be used for <code>MLModel</code> training.
   *             </p>
   */
  ComputeStatistics?: boolean;

  /**
   * <p>A user-supplied ID that uniquely identifies the <code>DataSource</code>. Typically, an Amazon Resource Number (ARN)
   *             becomes the ID for a <code>DataSource</code>.</p>
   */
  DataSourceId: string | undefined;

  /**
   * <p>A user-supplied name or description of the <code>DataSource</code>.</p>
   */
  DataSourceName?: string;

  /**
   * <p>The data specification of an Amazon RDS <code>DataSource</code>:</p>
   *         <ul>
   *             <li>
   *                <p>DatabaseInformation -</p>
   *                 <ul>
   *                   <li>
   *                      <p>
   *                         <code>DatabaseName</code> - The name of the Amazon RDS database.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>InstanceIdentifier </code> - A unique identifier for the Amazon RDS database instance.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>DatabaseCredentials - AWS Identity and Access Management (IAM) credentials that are used to connect to the Amazon RDS database.</p>
   *             </li>
   *             <li>
   *                <p>ResourceRole - A role (DataPipelineDefaultResourceRole) assumed by an EC2 instance to carry out the copy task from Amazon RDS to Amazon
   * 			Simple Storage Service (Amazon S3). For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html">Role templates</a> for data pipelines.</p>
   *             </li>
   *             <li>
   *                <p>ServiceRole - A role (DataPipelineDefaultRole) assumed by the AWS Data Pipeline service to monitor the progress of the copy task from Amazon RDS
   * 			to Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html">Role templates</a> for data pipelines.</p>
   *             </li>
   *             <li>
   *                <p>SecurityInfo - The security information to use to access an RDS DB instance. You need to set up appropriate ingress rules for the security entity IDs provided to allow access to the Amazon RDS instance. Specify a [<code>SubnetId</code>, <code>SecurityGroupIds</code>] pair for a VPC-based RDS DB instance.</p>
   *             </li>
   *             <li>
   *                <p>SelectSqlQuery - A query that is used to retrieve the observation data for the <code>Datasource</code>.</p>
   *             </li>
   *             <li>
   *                <p>S3StagingLocation - The Amazon S3 location for staging Amazon RDS data. The data retrieved from Amazon RDS using <code>SelectSqlQuery</code> is stored in this location.</p>
   *             </li>
   *             <li>
   *                <p>DataSchemaUri - The Amazon S3 location of the <code>DataSchema</code>.</p>
   *             </li>
   *             <li>
   *                <p>DataSchema - A JSON string representing the schema. This is not required if <code>DataSchemaUri</code> is specified. </p>
   *             </li>
   *             <li>
   *                <p>DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the <code>Datasource</code>. </p>
   *                <p> Sample -
   *             <code> "{\"splitting\":{\"percentBegin\":10,\"percentEnd\":60}}"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  RDSData: RDSDataSpec | undefined;

  /**
   * <p>The role that Amazon ML assumes on behalf of the user to create and activate a data
   *           pipeline in the user's account and copy data using the <code>SelectSqlQuery</code> query from Amazon RDS to Amazon S3.</p>
   *         <p></p>
   */
  RoleARN: string | undefined;
}

export namespace CreateDataSourceFromRDSInput {
  export const filterSensitiveLog = (
    obj: CreateDataSourceFromRDSInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDataSourceFromRDSInput =>
    __isa(o, "CreateDataSourceFromRDSInput");
}

/**
 * <p> Represents the output of a <code>CreateDataSourceFromRDS</code> operation, and is an acknowledgement that Amazon ML received the request.</p>
 *          <p>The <code>CreateDataSourceFromRDS</code>> operation is asynchronous. You can poll for updates by using
 *         the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. You can
 *             inspect the <code>Message</code> when <code>Status</code> shows up as <code>FAILED</code>. You can
 *             also check the progress of the copy operation by going to the <code>DataPipeline</code> console and looking up
 *             the pipeline using the <code>pipelineId </code> from the describe call.</p>
 */
export interface CreateDataSourceFromRDSOutput {
  __type?: "CreateDataSourceFromRDSOutput";
  /**
   * <p>A user-supplied ID that uniquely identifies the datasource. This value should be identical to the value of the
   *             <code>DataSourceID</code> in the request.
   *         </p>
   */
  DataSourceId?: string;
}

export namespace CreateDataSourceFromRDSOutput {
  export const filterSensitiveLog = (
    obj: CreateDataSourceFromRDSOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDataSourceFromRDSOutput =>
    __isa(o, "CreateDataSourceFromRDSOutput");
}

export interface CreateDataSourceFromRedshiftInput {
  __type?: "CreateDataSourceFromRedshiftInput";
  /**
   * <p>The compute statistics for a <code>DataSource</code>. The statistics are generated from the observation data referenced by
   *             a <code>DataSource</code>. Amazon ML uses the statistics internally during <code>MLModel</code> training.
   *            This parameter must be set to <code>true</code> if the <code>DataSource</code> needs to
   *           be used for <code>MLModel</code> training.</p>
   */
  ComputeStatistics?: boolean;

  /**
   * <p>A user-supplied ID that uniquely identifies the <code>DataSource</code>.</p>
   */
  DataSourceId: string | undefined;

  /**
   * <p>A user-supplied name or description of the <code>DataSource</code>. </p>
   */
  DataSourceName?: string;

  /**
   * <p>The data specification of an Amazon Redshift <code>DataSource</code>:</p>
   *         <ul>
   *             <li>
   *                <p>DatabaseInformation -</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>DatabaseName</code> - The name of the Amazon Redshift database.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code> ClusterIdentifier</code> - The unique ID for the Amazon Redshift cluster.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>DatabaseCredentials - The AWS Identity and Access Management (IAM) credentials that are used to connect to the Amazon Redshift database.</p>
   *             </li>
   *             <li>
   *                <p>SelectSqlQuery - The query that is used to retrieve the observation data for the
   * 			<code>Datasource</code>.</p>
   *             </li>
   *             <li>
   *                <p>S3StagingLocation - The Amazon Simple Storage Service (Amazon S3) location for staging Amazon
   *                     Redshift data. The data retrieved from Amazon Redshift using
   *                         the <code>SelectSqlQuery</code> query is stored in this location.</p>
   *             </li>
   *             <li>
   *                <p>DataSchemaUri - The Amazon S3 location of the <code>DataSchema</code>.</p>
   *             </li>
   *             <li>
   *                <p>DataSchema - A JSON string representing the schema. This is not required if <code>DataSchemaUri</code> is specified. </p>
   *             </li>
   *             <li>
   *                <p>DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the <code>DataSource</code>.</p>
   *                <p> Sample -
   *             <code> "{\"splitting\":{\"percentBegin\":10,\"percentEnd\":60}}"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  DataSpec: RedshiftDataSpec | undefined;

  /**
   * <p>A fully specified role Amazon Resource Name (ARN). Amazon ML assumes the role on behalf of the user to create the following:</p>
   *
   *            <ul>
   *             <li>
   *                <p>A security group to allow Amazon ML to execute the <code>SelectSqlQuery</code> query on an Amazon Redshift cluster</p>
   *             </li>
   *             <li>
   *                <p>An Amazon S3 bucket policy to grant Amazon ML read/write permissions on the <code>S3StagingLocation</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  RoleARN: string | undefined;
}

export namespace CreateDataSourceFromRedshiftInput {
  export const filterSensitiveLog = (
    obj: CreateDataSourceFromRedshiftInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDataSourceFromRedshiftInput =>
    __isa(o, "CreateDataSourceFromRedshiftInput");
}

/**
 * <p> Represents the output of a <code>CreateDataSourceFromRedshift</code> operation, and is an acknowledgement that Amazon ML received the request.</p>
 *          <p>The <code>CreateDataSourceFromRedshift</code> operation is asynchronous. You can poll for updates by using
 *         the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p>
 */
export interface CreateDataSourceFromRedshiftOutput {
  __type?: "CreateDataSourceFromRedshiftOutput";
  /**
   * <p>A user-supplied ID that uniquely identifies the datasource. This value should be identical to the value of the
   *             <code>DataSourceID</code> in the request.
   *         </p>
   */
  DataSourceId?: string;
}

export namespace CreateDataSourceFromRedshiftOutput {
  export const filterSensitiveLog = (
    obj: CreateDataSourceFromRedshiftOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDataSourceFromRedshiftOutput =>
    __isa(o, "CreateDataSourceFromRedshiftOutput");
}

export interface CreateDataSourceFromS3Input {
  __type?: "CreateDataSourceFromS3Input";
  /**
   * <p>The compute statistics for a <code>DataSource</code>. The statistics are generated from the observation data referenced by
   *             a <code>DataSource</code>. Amazon ML uses the statistics internally during <code>MLModel</code> training.
   *             This parameter must be set to <code>true</code> if the <code></code>DataSource<code></code> needs to be used for <code>MLModel</code> training.</p>
   */
  ComputeStatistics?: boolean;

  /**
   * <p>A user-supplied identifier that uniquely identifies the <code>DataSource</code>. </p>
   */
  DataSourceId: string | undefined;

  /**
   * <p>A user-supplied name or description of the <code>DataSource</code>. </p>
   */
  DataSourceName?: string;

  /**
   * <p>The data specification of a <code>DataSource</code>:</p>
   *         <ul>
   *             <li>
   *                <p>DataLocationS3 - The Amazon S3 location of the observation data.</p>
   *             </li>
   *             <li>
   *                <p>DataSchemaLocationS3 - The Amazon S3 location of the <code>DataSchema</code>.</p>
   *             </li>
   *             <li>
   *                <p>DataSchema - A JSON string representing the schema. This is not required if <code>DataSchemaUri</code> is specified. </p>
   *             </li>
   *             <li>
   *                <p>DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the <code>Datasource</code>. </p>
   *                <p> Sample -
   *             <code> "{\"splitting\":{\"percentBegin\":10,\"percentEnd\":60}}"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  DataSpec: S3DataSpec | undefined;
}

export namespace CreateDataSourceFromS3Input {
  export const filterSensitiveLog = (
    obj: CreateDataSourceFromS3Input
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDataSourceFromS3Input =>
    __isa(o, "CreateDataSourceFromS3Input");
}

/**
 * <p> Represents the output of a <code>CreateDataSourceFromS3</code> operation, and is an acknowledgement that Amazon ML received the request.</p>
 *         <p>The <code>CreateDataSourceFromS3</code> operation is asynchronous. You can poll for updates by using
 *             the <code>GetBatchPrediction</code> operation and checking the <code>Status</code> parameter. </p>
 */
export interface CreateDataSourceFromS3Output {
  __type?: "CreateDataSourceFromS3Output";
  /**
   * <p>A user-supplied ID that uniquely identifies the <code>DataSource</code>. This value should be identical to the value of the
   *             <code>DataSourceID</code> in the request.
   *         </p>
   */
  DataSourceId?: string;
}

export namespace CreateDataSourceFromS3Output {
  export const filterSensitiveLog = (
    obj: CreateDataSourceFromS3Output
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDataSourceFromS3Output =>
    __isa(o, "CreateDataSourceFromS3Output");
}

export interface CreateEvaluationInput {
  __type?: "CreateEvaluationInput";
  /**
   * <p>The ID of the <code>DataSource</code> for the evaluation. The schema of the <code>DataSource</code>
   *             must match the schema used to create the <code>MLModel</code>.</p>
   */
  EvaluationDataSourceId: string | undefined;

  /**
   * <p>A user-supplied ID that uniquely identifies the <code>Evaluation</code>.</p>
   */
  EvaluationId: string | undefined;

  /**
   * <p>A user-supplied name or description of the <code>Evaluation</code>.</p>
   */
  EvaluationName?: string;

  /**
   * <p>The ID of the <code>MLModel</code> to evaluate.</p>
   *         <p>The schema used in creating the <code>MLModel</code> must match the schema of the <code>DataSource</code> used in the <code>Evaluation</code>.</p>
   */
  MLModelId: string | undefined;
}

export namespace CreateEvaluationInput {
  export const filterSensitiveLog = (obj: CreateEvaluationInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateEvaluationInput =>
    __isa(o, "CreateEvaluationInput");
}

/**
 * <p> Represents the output of a <code>CreateEvaluation</code> operation, and is an acknowledgement that Amazon ML received the request.</p>
 *         <p>
 *             <code>CreateEvaluation</code> operation is asynchronous. You can poll for status updates
 *           by using the <code>GetEvcaluation</code> operation
 *             and checking the <code>Status</code> parameter.
 *         </p>
 */
export interface CreateEvaluationOutput {
  __type?: "CreateEvaluationOutput";
  /**
   * <p>The user-supplied ID that uniquely identifies the <code>Evaluation</code>. This value should be identical to the value of the
   *             <code>EvaluationId</code> in the request.</p>
   */
  EvaluationId?: string;
}

export namespace CreateEvaluationOutput {
  export const filterSensitiveLog = (obj: CreateEvaluationOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateEvaluationOutput =>
    __isa(o, "CreateEvaluationOutput");
}

export interface CreateMLModelInput {
  __type?: "CreateMLModelInput";
  /**
   * <p>A user-supplied ID that uniquely identifies the <code>MLModel</code>.</p>
   */
  MLModelId: string | undefined;

  /**
   * <p>A user-supplied name or description of the <code>MLModel</code>.</p>
   */
  MLModelName?: string;

  /**
   * <p>The category of supervised learning that this <code>MLModel</code> will address. Choose from the following types:</p>
   *          <ul>
   *             <li>
   *                <p>Choose <code>REGRESSION</code> if the <code>MLModel</code> will be used to predict a numeric value.</p>
   *             </li>
   *             <li>
   *                <p>Choose <code>BINARY</code> if the <code>MLModel</code> result has two possible values.</p>
   *             </li>
   *             <li>
   *                <p>Choose <code>MULTICLASS</code> if the <code>MLModel</code> result has a limited number of values.</p>
   *             </li>
   *          </ul>
   *         <p> For more information, see the <a href="https://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>.</p>
   */
  MLModelType: MLModelType | string | undefined;

  /**
   * <p>A list of the training parameters in the <code>MLModel</code>. The list is implemented as
   *             a map of key-value pairs.</p>
   *         <p>The following is the current set of training parameters:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>sgd.maxMLModelSizeInBytes</code> - The maximum allowed size of the model. Depending on the
   *                     input data, the size of the model might affect its performance.</p>
   *                 <p> The value is an integer that ranges from <code>100000</code> to <code>2147483648</code>. The default value is <code>33554432</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sgd.maxPasses</code> - The number of times that the training process traverses the
   *                     observations to build the <code>MLModel</code>. The value is an integer that
   *                     ranges from <code>1</code> to <code>100</code>. The default value is
   *                         <code>10</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>sgd.shuffleType</code> - Whether Amazon ML shuffles the training data. Shuffling
   *                     the data improves a model's ability to find the optimal solution for a variety
   *                     of data types. The valid values are <code>auto</code> and <code>none</code>. The
   *                     default value is <code>none</code>. We strongly recommend that you shuffle your data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sgd.l1RegularizationAmount</code> - The coefficient regularization L1 norm. It controls
   *                     overfitting the data by penalizing large coefficients. This tends to drive
   *                     coefficients to zero, resulting in a sparse feature set. If you use this
   *                     parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p>
   *                 <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>.
   *                     The default is to not use L1 normalization. This parameter can't be used when
   *                         <code>L2</code> is specified. Use this parameter sparingly.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sgd.l2RegularizationAmount</code> - The coefficient regularization L2 norm. It controls
   *                     overfitting the data by penalizing large coefficients. This tends to drive
   *                     coefficients to small, nonzero values. If you use this parameter, start by
   *                     specifying a small value, such as <code>1.0E-08</code>.</p>
   *                 <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>.
   *                     The default is to not use L2 normalization. This parameter can't be used when
   *                         <code>L1</code> is specified. Use this parameter sparingly.</p>
   *             </li>
   *          </ul>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>The data recipe for creating the <code>MLModel</code>. You must specify either the recipe
   *             or its URI. If you don't specify a recipe or its URI, Amazon ML creates a default.</p>
   */
  Recipe?: string;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) location and file name that contains the <code>MLModel</code> recipe. You must specify either the recipe or its URI. If you don't specify a recipe or its URI, Amazon ML creates a default.</p>
   */
  RecipeUri?: string;

  /**
   * <p>The <code>DataSource</code> that points to the training data.</p>
   */
  TrainingDataSourceId: string | undefined;
}

export namespace CreateMLModelInput {
  export const filterSensitiveLog = (obj: CreateMLModelInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateMLModelInput =>
    __isa(o, "CreateMLModelInput");
}

/**
 * <p> Represents the output of a <code>CreateMLModel</code> operation, and is an acknowledgement that Amazon ML received the request.</p>
 *         <p>The <code>CreateMLModel</code> operation is asynchronous. You can poll for status updates by using the
 *             <code>GetMLModel</code> operation and checking the <code>Status</code> parameter.
 *         </p>
 */
export interface CreateMLModelOutput {
  __type?: "CreateMLModelOutput";
  /**
   * <p>A user-supplied ID that uniquely identifies the <code>MLModel</code>. This value should be identical to the value of the
   *             <code>MLModelId</code> in the request.
   *         </p>
   */
  MLModelId?: string;
}

export namespace CreateMLModelOutput {
  export const filterSensitiveLog = (obj: CreateMLModelOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateMLModelOutput =>
    __isa(o, "CreateMLModelOutput");
}

export interface CreateRealtimeEndpointInput {
  __type?: "CreateRealtimeEndpointInput";
  /**
   * <p>The ID assigned to the <code>MLModel</code> during creation.</p>
   */
  MLModelId: string | undefined;
}

export namespace CreateRealtimeEndpointInput {
  export const filterSensitiveLog = (
    obj: CreateRealtimeEndpointInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRealtimeEndpointInput =>
    __isa(o, "CreateRealtimeEndpointInput");
}

/**
 * <p>Represents the output of an <code>CreateRealtimeEndpoint</code> operation.</p>
 *         <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>.</p>
 *         <p>
 *             <b>Note:</b> The endpoint information includes the URI of the <code>MLModel</code>; that is, the location to send online prediction requests for the specified <code>MLModel</code>.</p>
 */
export interface CreateRealtimeEndpointOutput {
  __type?: "CreateRealtimeEndpointOutput";
  /**
   * <p>A user-supplied ID that uniquely identifies the <code>MLModel</code>. This value should be identical to the value of the
   *             <code>MLModelId</code> in the request.</p>
   */
  MLModelId?: string;

  /**
   * <p>The endpoint information of the <code>MLModel</code>
   *          </p>
   */
  RealtimeEndpointInfo?: RealtimeEndpointInfo;
}

export namespace CreateRealtimeEndpointOutput {
  export const filterSensitiveLog = (
    obj: CreateRealtimeEndpointOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateRealtimeEndpointOutput =>
    __isa(o, "CreateRealtimeEndpointOutput");
}

/**
 * <p> Represents the output of the <code>GetDataSource</code> operation. </p>
 *          <p>  The content consists of the detailed metadata and data file information and the current status of the <code>DataSource</code>. </p>
 */
export interface DataSource {
  __type?: "DataSource";
  /**
   * <p>
   *           The parameter is <code>true</code> if statistics need to be generated from the observation data.
   *       </p>
   */
  ComputeStatistics?: boolean;

  /**
   * <p>Long integer type that is a 64-bit signed number.</p>
   */
  ComputeTime?: number;

  /**
   * <p>The time that the <code>DataSource</code> was created. The time is expressed in epoch time.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The AWS user account from which the <code>DataSource</code> was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>
   */
  CreatedByIamUser?: string;

  /**
   * <p>The location and name of the data in Amazon Simple Storage Service (Amazon S3) that is used by a <code>DataSource</code>.</p>
   */
  DataLocationS3?: string;

  /**
   * <p>A JSON string that represents the splitting and rearrangement requirement used when this <code>DataSource</code>
   *         was created.</p>
   */
  DataRearrangement?: string;

  /**
   * <p>The total number of observations contained in the data files that the <code>DataSource</code> references.</p>
   */
  DataSizeInBytes?: number;

  /**
   * <p>The ID that is assigned to the <code>DataSource</code> during creation.</p>
   */
  DataSourceId?: string;

  /**
   * <p>A timestamp represented in epoch time.</p>
   */
  FinishedAt?: Date;

  /**
   * <p>The time of the most recent edit to the
   *       <code>BatchPrediction</code>. The time is expressed in epoch time.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * <p>A description of the most recent details about creating the <code>DataSource</code>.</p>
   */
  Message?: string;

  /**
   * <p>A user-supplied name or description of the <code>DataSource</code>.</p>
   */
  Name?: string;

  /**
   * <p>The number of data files referenced by the <code>DataSource</code>.</p>
   */
  NumberOfFiles?: number;

  /**
   * <p>The datasource details that are specific to Amazon RDS.</p>
   */
  RDSMetadata?: RDSMetadata;

  /**
   * <p>Describes the <code>DataSource</code> details specific to Amazon Redshift.</p>
   */
  RedshiftMetadata?: RedshiftMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename. </p>
   */
  RoleARN?: string;

  /**
   * <p>A timestamp represented in epoch time.</p>
   */
  StartedAt?: Date;

  /**
   * <p>The current status of the <code>DataSource</code>. This element can have one of the following values: </p>
   *          <ul>
   *             <li>
   *                <p>PENDING	- Amazon Machine Learning (Amazon ML) submitted a request to create a <code>DataSource</code>.</p>
   *             </li>
   *             <li>
   *                <p>INPROGRESS - The creation process is underway.</p>
   *             </li>
   *             <li>
   *                <p>FAILED - The request to create a <code>DataSource</code> did not run to completion. It is not usable.</p>
   *             </li>
   *             <li>
   *                <p>COMPLETED - The creation process completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>DELETED	- The <code>DataSource</code> is marked as deleted. It is not usable.</p>
   *             </li>
   *          </ul>
   */
  Status?: EntityStatus | string;
}

export namespace DataSource {
  export const filterSensitiveLog = (obj: DataSource): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataSource => __isa(o, "DataSource");
}

export enum DataSourceFilterVariable {
  CREATED_AT = "CreatedAt",
  DATA_URI = "DataLocationS3",
  IAM_USER = "IAMUser",
  LAST_UPDATED_AT = "LastUpdatedAt",
  NAME = "Name",
  STATUS = "Status"
}

export interface DeleteBatchPredictionInput {
  __type?: "DeleteBatchPredictionInput";
  /**
   * <p>A user-supplied ID that uniquely identifies the <code>BatchPrediction</code>.</p>
   */
  BatchPredictionId: string | undefined;
}

export namespace DeleteBatchPredictionInput {
  export const filterSensitiveLog = (obj: DeleteBatchPredictionInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteBatchPredictionInput =>
    __isa(o, "DeleteBatchPredictionInput");
}

/**
 * <p> Represents the output of a <code>DeleteBatchPrediction</code> operation.</p>
 *         <p>You can use the <code>GetBatchPrediction</code> operation and check the value of the <code>Status</code> parameter to see whether a
 *             <code>BatchPrediction</code> is marked as <code>DELETED</code>.</p>
 */
export interface DeleteBatchPredictionOutput {
  __type?: "DeleteBatchPredictionOutput";
  /**
   * <p>A user-supplied ID that uniquely identifies the <code>BatchPrediction</code>. This value should be identical to the value of the <code>BatchPredictionID</code> in the request.</p>
   */
  BatchPredictionId?: string;
}

export namespace DeleteBatchPredictionOutput {
  export const filterSensitiveLog = (
    obj: DeleteBatchPredictionOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteBatchPredictionOutput =>
    __isa(o, "DeleteBatchPredictionOutput");
}

export interface DeleteDataSourceInput {
  __type?: "DeleteDataSourceInput";
  /**
   * <p>A user-supplied ID that uniquely identifies the <code>DataSource</code>.</p>
   */
  DataSourceId: string | undefined;
}

export namespace DeleteDataSourceInput {
  export const filterSensitiveLog = (obj: DeleteDataSourceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDataSourceInput =>
    __isa(o, "DeleteDataSourceInput");
}

/**
 * <p> Represents the output of a <code>DeleteDataSource</code> operation.</p>
 */
export interface DeleteDataSourceOutput {
  __type?: "DeleteDataSourceOutput";
  /**
   * <p>A user-supplied ID that uniquely identifies the <code>DataSource</code>. This value should be identical to the value of the <code>DataSourceID</code> in the request.</p>
   */
  DataSourceId?: string;
}

export namespace DeleteDataSourceOutput {
  export const filterSensitiveLog = (obj: DeleteDataSourceOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDataSourceOutput =>
    __isa(o, "DeleteDataSourceOutput");
}

export interface DeleteEvaluationInput {
  __type?: "DeleteEvaluationInput";
  /**
   * <p>A user-supplied ID that uniquely identifies the <code>Evaluation</code> to delete.</p>
   */
  EvaluationId: string | undefined;
}

export namespace DeleteEvaluationInput {
  export const filterSensitiveLog = (obj: DeleteEvaluationInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteEvaluationInput =>
    __isa(o, "DeleteEvaluationInput");
}

/**
 * <p> Represents the output of a <code>DeleteEvaluation</code> operation. The output indicates that Amazon Machine Learning (Amazon ML) received the request.</p>
 *         <p>You can use the <code>GetEvaluation</code> operation and check the value of the <code>Status</code> parameter to see whether an
 *             <code>Evaluation</code> is marked as <code>DELETED</code>.</p>
 */
export interface DeleteEvaluationOutput {
  __type?: "DeleteEvaluationOutput";
  /**
   * <p>A user-supplied ID that uniquely identifies the <code>Evaluation</code>. This value should be identical to the value of the <code>EvaluationId</code> in the request.</p>
   */
  EvaluationId?: string;
}

export namespace DeleteEvaluationOutput {
  export const filterSensitiveLog = (obj: DeleteEvaluationOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteEvaluationOutput =>
    __isa(o, "DeleteEvaluationOutput");
}

export interface DeleteMLModelInput {
  __type?: "DeleteMLModelInput";
  /**
   * <p>A user-supplied ID that uniquely identifies the <code>MLModel</code>.</p>
   */
  MLModelId: string | undefined;
}

export namespace DeleteMLModelInput {
  export const filterSensitiveLog = (obj: DeleteMLModelInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteMLModelInput =>
    __isa(o, "DeleteMLModelInput");
}

/**
 * <p>Represents the output of a <code>DeleteMLModel</code> operation.</p>
 *         <p>You can use the <code>GetMLModel</code> operation and check the value of the <code>Status</code> parameter to see whether an
 *             <code>MLModel</code> is marked as <code>DELETED</code>.</p>
 */
export interface DeleteMLModelOutput {
  __type?: "DeleteMLModelOutput";
  /**
   * <p>A user-supplied ID that uniquely identifies the <code>MLModel</code>. This value should be identical to the value of the <code>MLModelID</code> in the request.</p>
   */
  MLModelId?: string;
}

export namespace DeleteMLModelOutput {
  export const filterSensitiveLog = (obj: DeleteMLModelOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteMLModelOutput =>
    __isa(o, "DeleteMLModelOutput");
}

export interface DeleteRealtimeEndpointInput {
  __type?: "DeleteRealtimeEndpointInput";
  /**
   * <p>The ID assigned to the <code>MLModel</code> during creation.</p>
   */
  MLModelId: string | undefined;
}

export namespace DeleteRealtimeEndpointInput {
  export const filterSensitiveLog = (
    obj: DeleteRealtimeEndpointInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRealtimeEndpointInput =>
    __isa(o, "DeleteRealtimeEndpointInput");
}

/**
 * <p>Represents the output of an <code>DeleteRealtimeEndpoint</code> operation.</p>
 *         <p>The result contains the <code>MLModelId</code> and the endpoint information for the <code>MLModel</code>. </p>
 */
export interface DeleteRealtimeEndpointOutput {
  __type?: "DeleteRealtimeEndpointOutput";
  /**
   * <p>A user-supplied ID that uniquely identifies the <code>MLModel</code>. This value should be identical to the value of the
   *             <code>MLModelId</code> in the request.</p>
   */
  MLModelId?: string;

  /**
   * <p>The endpoint information of the <code>MLModel</code>
   *          </p>
   */
  RealtimeEndpointInfo?: RealtimeEndpointInfo;
}

export namespace DeleteRealtimeEndpointOutput {
  export const filterSensitiveLog = (
    obj: DeleteRealtimeEndpointOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteRealtimeEndpointOutput =>
    __isa(o, "DeleteRealtimeEndpointOutput");
}

export interface DeleteTagsInput {
  __type?: "DeleteTagsInput";
  /**
   * <p>The ID of the tagged ML object. For example, <code>exampleModelId</code>.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of the tagged ML object.</p>
   */
  ResourceType: TaggableResourceType | string | undefined;

  /**
   * <p>One or more tags to delete.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace DeleteTagsInput {
  export const filterSensitiveLog = (obj: DeleteTagsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTagsInput =>
    __isa(o, "DeleteTagsInput");
}

/**
 * <p>Amazon ML returns the following elements.</p>
 */
export interface DeleteTagsOutput {
  __type?: "DeleteTagsOutput";
  /**
   * <p>The ID of the ML object from which tags were deleted.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of the ML object from which tags were deleted.</p>
   */
  ResourceType?: TaggableResourceType | string;
}

export namespace DeleteTagsOutput {
  export const filterSensitiveLog = (obj: DeleteTagsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTagsOutput =>
    __isa(o, "DeleteTagsOutput");
}

export interface DescribeBatchPredictionsInput {
  __type?: "DescribeBatchPredictionsInput";
  /**
   * <p>The equal to operator. The <code>BatchPrediction</code> results will have
   *             <code>FilterVariable</code> values that exactly match the value specified with <code>EQ</code>.</p>
   */
  EQ?: string;

  /**
   * <p>Use one of the following variables to filter a list of <code>BatchPrediction</code>:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>CreatedAt</code> - Sets the search criteria to the <code>BatchPrediction</code> creation date.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code> - Sets the search criteria to the <code>BatchPrediction</code> status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code> - Sets the search criteria to the contents of the <code>BatchPrediction</code>
   *                   <b> </b>
   *                   <code>Name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>BatchPrediction</code> creation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MLModelId</code> - Sets the search criteria to the <code>MLModel</code> used in the <code>BatchPrediction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in the <code>BatchPrediction</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DataURI</code> - Sets the search criteria to the data file(s) used in the <code>BatchPrediction</code>. The URL can identify either a file or an Amazon Simple Storage Solution (Amazon S3) bucket or directory.</p>
   *             </li>
   *          </ul>
   */
  FilterVariable?: BatchPredictionFilterVariable | string;

  /**
   * <p>The greater than or equal to operator. The <code>BatchPrediction</code> results will have <code>FilterVariable</code> values that are greater than or equal to the value specified with <code>GE</code>.
   *         </p>
   */
  GE?: string;

  /**
   * <p>The greater than operator. The <code>BatchPrediction</code> results will
   *             have <code>FilterVariable</code> values that are greater than the value specified with <code>GT</code>.</p>
   */
  GT?: string;

  /**
   * <p>The less than or equal to operator. The <code>BatchPrediction</code> results will have <code>FilterVariable</code> values that are less than or equal to the value specified with <code>LE</code>.</p>
   */
  LE?: string;

  /**
   * <p>The less than operator. The <code>BatchPrediction</code> results will
   *             have <code>FilterVariable</code> values that are less than the value specified with <code>LT</code>.</p>
   */
  LT?: string;

  /**
   * <p>The number of pages of information to include in the result. The range of acceptable values is <code>1</code> through <code>100</code>. The default value is <code>100</code>.</p>
   */
  Limit?: number;

  /**
   * <p>The not equal to operator. The <code>BatchPrediction</code> results will have <code>FilterVariable</code> values not equal to the value specified with <code>NE</code>.</p>
   */
  NE?: string;

  /**
   * <p>An ID of the page in the paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>A string that is found at the beginning of a variable, such as <code>Name</code> or <code>Id</code>.</p>
   *         <p>For example, a <code>Batch Prediction</code> operation could have the <code>Name</code>
   *             <code>2014-09-09-HolidayGiftMailer</code>. To search for
   *             this <code>BatchPrediction</code>, select <code>Name</code> for the <code>FilterVariable</code> and any of the following strings for the
   *             <code>Prefix</code>:
   *         </p>
   *
   *         <ul>
   *             <li>
   *                <p>2014-09</p>
   *             </li>
   *             <li>
   *                <p>2014-09-09</p>
   *             </li>
   *             <li>
   *                <p>2014-09-09-Holiday</p>
   *             </li>
   *          </ul>
   */
  Prefix?: string;

  /**
   * <p>A two-value parameter that determines the sequence of the resulting list of <code>MLModel</code>s.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>asc</code> - Arranges the list in ascending order (A-Z, 0-9).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dsc</code> - Arranges the list in descending order (Z-A, 9-0).</p>
   *             </li>
   *          </ul>
   *         <p>Results are sorted by <code>FilterVariable</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace DescribeBatchPredictionsInput {
  export const filterSensitiveLog = (
    obj: DescribeBatchPredictionsInput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeBatchPredictionsInput =>
    __isa(o, "DescribeBatchPredictionsInput");
}

/**
 * <p>Represents the output of a <code>DescribeBatchPredictions</code> operation. The content is essentially a list of <code>BatchPrediction</code>s.</p>
 */
export interface DescribeBatchPredictionsOutput {
  __type?: "DescribeBatchPredictionsOutput";
  /**
   * <p>The ID of the next page in the paginated results that indicates at least one more page follows.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>BatchPrediction</code> objects that meet the search criteria.
   *         </p>
   */
  Results?: BatchPrediction[];
}

export namespace DescribeBatchPredictionsOutput {
  export const filterSensitiveLog = (
    obj: DescribeBatchPredictionsOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeBatchPredictionsOutput =>
    __isa(o, "DescribeBatchPredictionsOutput");
}

export interface DescribeDataSourcesInput {
  __type?: "DescribeDataSourcesInput";
  /**
   * <p>The equal to operator. The <code>DataSource</code> results will have
   *             <code>FilterVariable</code> values that exactly match the value specified with <code>EQ</code>.</p>
   */
  EQ?: string;

  /**
   * <p>Use one of the following variables to filter a list of <code>DataSource</code>:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>CreatedAt</code> - Sets the search criteria to <code>DataSource</code> creation dates.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code> - Sets the search criteria to <code>DataSource</code> statuses.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code> - Sets the search criteria to the contents of <code>DataSource</code>
   *                   <code>Name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DataUri</code> - Sets the search criteria to the URI of data files used to create the <code>DataSource</code>. The URI can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>DataSource</code> creation.</p>
   *             </li>
   *          </ul>
   */
  FilterVariable?: DataSourceFilterVariable | string;

  /**
   * <p>The greater than or equal to operator. The <code>DataSource</code> results will have <code>FilterVariable</code> values that are greater than or equal to the value specified with <code>GE</code>.
   *         </p>
   */
  GE?: string;

  /**
   * <p>The greater than operator. The <code>DataSource</code> results will
   *             have <code>FilterVariable</code> values that are greater than the value specified with <code>GT</code>.</p>
   */
  GT?: string;

  /**
   * <p>The less than or equal to operator. The <code>DataSource</code> results will have <code>FilterVariable</code> values that are less than or equal to the value specified with <code>LE</code>.</p>
   */
  LE?: string;

  /**
   * <p>The less than operator. The <code>DataSource</code> results will
   *             have <code>FilterVariable</code> values that are less than the value specified with <code>LT</code>.</p>
   */
  LT?: string;

  /**
   * <p> The maximum number of <code>DataSource</code> to include in the result.</p>
   */
  Limit?: number;

  /**
   * <p>The not equal to operator. The <code>DataSource</code> results will have <code>FilterVariable</code> values not equal to the value specified with <code>NE</code>.</p>
   */
  NE?: string;

  /**
   * <p>The ID of the page in the paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>A string that is found at the beginning of a variable, such as <code>Name</code> or <code>Id</code>.</p>
   *         <p>For example, a <code>DataSource</code> could have the <code>Name</code>
   *             <code>2014-09-09-HolidayGiftMailer</code>. To search for
   *             this <code>DataSource</code>, select <code>Name</code> for the <code>FilterVariable</code> and any of the following strings for the
   *             <code>Prefix</code>:
   *         </p>
   *
   *         <ul>
   *             <li>
   *                <p>2014-09</p>
   *             </li>
   *             <li>
   *                <p>2014-09-09</p>
   *             </li>
   *             <li>
   *                <p>2014-09-09-Holiday</p>
   *             </li>
   *          </ul>
   */
  Prefix?: string;

  /**
   * <p>A two-value parameter that determines the sequence of the resulting list of <code>DataSource</code>.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>asc</code> - Arranges the list in ascending order (A-Z, 0-9).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dsc</code> - Arranges the list in descending order (Z-A, 9-0).</p>
   *             </li>
   *          </ul>
   *         <p>Results are sorted by <code>FilterVariable</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace DescribeDataSourcesInput {
  export const filterSensitiveLog = (obj: DescribeDataSourcesInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDataSourcesInput =>
    __isa(o, "DescribeDataSourcesInput");
}

/**
 * <p>Represents the query results from a <a>DescribeDataSources</a> operation. The content is essentially a list of <code>DataSource</code>.</p>
 */
export interface DescribeDataSourcesOutput {
  __type?: "DescribeDataSourcesOutput";
  /**
   * <p>An ID of the next page in the paginated results that indicates at least one more page follows.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>DataSource</code> that meet the search criteria.
   *          </p>
   */
  Results?: DataSource[];
}

export namespace DescribeDataSourcesOutput {
  export const filterSensitiveLog = (obj: DescribeDataSourcesOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDataSourcesOutput =>
    __isa(o, "DescribeDataSourcesOutput");
}

export interface DescribeEvaluationsInput {
  __type?: "DescribeEvaluationsInput";
  /**
   * <p>The equal to operator. The <code>Evaluation</code> results will have
   *             <code>FilterVariable</code> values that exactly match the value specified with <code>EQ</code>.</p>
   */
  EQ?: string;

  /**
   * <p>Use one of the following variable to filter a list of <code>Evaluation</code> objects:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>CreatedAt</code> - Sets the search criteria to the <code>Evaluation</code> creation date.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code> - Sets the search criteria to the <code>Evaluation</code> status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code> - Sets the search criteria to the contents of <code>Evaluation</code>
   *                   <b> </b>
   *                   <code>Name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IAMUser</code> - Sets the search criteria to the user account that invoked an <code>Evaluation</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MLModelId</code> - Sets the search criteria to the <code>MLModel</code> that was evaluated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used in <code>Evaluation</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DataUri</code> - Sets the search criteria to the data file(s) used in <code>Evaluation</code>. The URL can identify either a file or an Amazon Simple Storage Solution (Amazon S3) bucket or directory.</p>
   *             </li>
   *          </ul>
   */
  FilterVariable?: EvaluationFilterVariable | string;

  /**
   * <p>The greater than or equal to operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values that are greater than or equal to the value specified with <code>GE</code>.
   *         </p>
   */
  GE?: string;

  /**
   * <p>The greater than operator. The <code>Evaluation</code> results will
   *             have <code>FilterVariable</code> values that are greater than the value specified with <code>GT</code>.</p>
   */
  GT?: string;

  /**
   * <p>The less than or equal to operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values that are less than or equal to the value specified with <code>LE</code>.</p>
   */
  LE?: string;

  /**
   * <p>The less than operator. The <code>Evaluation</code> results will
   *             have <code>FilterVariable</code> values that are less than the value specified with <code>LT</code>.</p>
   */
  LT?: string;

  /**
   * <p> The maximum number of <code>Evaluation</code> to include in the result.</p>
   */
  Limit?: number;

  /**
   * <p>The not equal to operator. The <code>Evaluation</code> results will have <code>FilterVariable</code> values not equal to the value specified with <code>NE</code>.</p>
   */
  NE?: string;

  /**
   * <p>The ID of the page in the paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>A string that is found at the beginning of a variable, such as <code>Name</code> or <code>Id</code>.</p>
   *         <p>For example, an <code>Evaluation</code> could have the <code>Name</code>
   *             <code>2014-09-09-HolidayGiftMailer</code>. To search for
   *             this <code>Evaluation</code>, select <code>Name</code> for the <code>FilterVariable</code> and any of the following strings for the
   *             <code>Prefix</code>:
   *         </p>
   *
   *         <ul>
   *             <li>
   *                <p>2014-09</p>
   *             </li>
   *             <li>
   *                <p>2014-09-09</p>
   *             </li>
   *             <li>
   *                <p>2014-09-09-Holiday</p>
   *             </li>
   *          </ul>
   */
  Prefix?: string;

  /**
   * <p>A two-value parameter that determines the sequence of the resulting list of <code>Evaluation</code>.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>asc</code> - Arranges the list in ascending order (A-Z, 0-9).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dsc</code> - Arranges the list in descending order (Z-A, 9-0).</p>
   *             </li>
   *          </ul>
   *         <p>Results are sorted by <code>FilterVariable</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace DescribeEvaluationsInput {
  export const filterSensitiveLog = (obj: DescribeEvaluationsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEvaluationsInput =>
    __isa(o, "DescribeEvaluationsInput");
}

/**
 * <p>Represents the query results from a <code>DescribeEvaluations</code> operation. The content is essentially a list of <code>Evaluation</code>.</p>
 */
export interface DescribeEvaluationsOutput {
  __type?: "DescribeEvaluationsOutput";
  /**
   * <p>The ID of the next page in the paginated results that indicates at least one more page follows.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>Evaluation</code> that meet the search criteria.
   *         </p>
   */
  Results?: Evaluation[];
}

export namespace DescribeEvaluationsOutput {
  export const filterSensitiveLog = (obj: DescribeEvaluationsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEvaluationsOutput =>
    __isa(o, "DescribeEvaluationsOutput");
}

export interface DescribeMLModelsInput {
  __type?: "DescribeMLModelsInput";
  /**
   * <p>The equal to operator. The <code>MLModel</code> results will have
   *             <code>FilterVariable</code> values that exactly match the value specified with <code>EQ</code>.</p>
   */
  EQ?: string;

  /**
   * <p>Use one of the following variables to filter a list of <code>MLModel</code>:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>CreatedAt</code> - Sets the search criteria to <code>MLModel</code> creation date.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Status</code> - Sets the search criteria to <code>MLModel</code> status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Name</code> - Sets the search criteria to the contents of <code>MLModel</code>
   *                   <b> </b>
   *                   <code>Name</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IAMUser</code> - Sets the search criteria to the user account that invoked the <code>MLModel</code> creation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TrainingDataSourceId</code> - Sets the search criteria to the <code>DataSource</code> used to train one or more <code>MLModel</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RealtimeEndpointStatus</code> - Sets the search criteria to the <code>MLModel</code> real-time endpoint status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MLModelType</code> - Sets the search criteria to <code>MLModel</code> type: binary, regression, or multi-class.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Algorithm</code> - Sets the search criteria to the algorithm that the <code>MLModel</code> uses.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TrainingDataURI</code> - Sets the search criteria to the data file(s) used in training a <code>MLModel</code>. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.</p>
   *             </li>
   *          </ul>
   */
  FilterVariable?: MLModelFilterVariable | string;

  /**
   * <p>The greater than or equal to operator. The <code>MLModel</code> results will have <code>FilterVariable</code> values that are greater than or equal to the value specified with <code>GE</code>.
   *         </p>
   */
  GE?: string;

  /**
   * <p>The greater than operator. The <code>MLModel</code> results will
   *             have <code>FilterVariable</code> values that are greater than the value specified with <code>GT</code>.</p>
   */
  GT?: string;

  /**
   * <p>The less than or equal to operator. The <code>MLModel</code> results will have <code>FilterVariable</code> values that are less than or equal to the value specified with <code>LE</code>.</p>
   */
  LE?: string;

  /**
   * <p>The less than operator. The <code>MLModel</code> results will
   *             have <code>FilterVariable</code> values that are less than the value specified with <code>LT</code>.</p>
   */
  LT?: string;

  /**
   * <p>The number of pages of information to include in the result. The range of acceptable values is <code>1</code> through <code>100</code>. The default value is <code>100</code>.</p>
   */
  Limit?: number;

  /**
   * <p>The not equal to operator. The <code>MLModel</code> results will have <code>FilterVariable</code> values not equal to the value specified with <code>NE</code>.</p>
   */
  NE?: string;

  /**
   * <p>The ID of the page in the paginated results.</p>
   */
  NextToken?: string;

  /**
   * <p>A string that is found at the beginning of a variable, such as <code>Name</code> or <code>Id</code>.</p>
   *         <p>For example, an <code>MLModel</code> could have the <code>Name</code>
   *             <code>2014-09-09-HolidayGiftMailer</code>. To search for
   *             this <code>MLModel</code>, select <code>Name</code> for the <code>FilterVariable</code> and any of the following strings for the
   *             <code>Prefix</code>:
   *         </p>
   *
   *         <ul>
   *             <li>
   *                <p>2014-09</p>
   *             </li>
   *             <li>
   *                <p>2014-09-09</p>
   *             </li>
   *             <li>
   *                <p>2014-09-09-Holiday</p>
   *             </li>
   *          </ul>
   */
  Prefix?: string;

  /**
   * <p>A two-value parameter that determines the sequence of the resulting list of <code>MLModel</code>.</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>asc</code> - Arranges the list in ascending order (A-Z, 0-9).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>dsc</code> - Arranges the list in descending order (Z-A, 9-0).</p>
   *             </li>
   *          </ul>
   *         <p>Results are sorted by <code>FilterVariable</code>.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace DescribeMLModelsInput {
  export const filterSensitiveLog = (obj: DescribeMLModelsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMLModelsInput =>
    __isa(o, "DescribeMLModelsInput");
}

/**
 * <p>Represents the output of a <code>DescribeMLModels</code> operation. The content is essentially a list of <code>MLModel</code>.</p>
 */
export interface DescribeMLModelsOutput {
  __type?: "DescribeMLModelsOutput";
  /**
   * <p>The ID of the next page in the paginated results that indicates at least one more page follows.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of <code>MLModel</code> that meet the search criteria.</p>
   */
  Results?: MLModel[];
}

export namespace DescribeMLModelsOutput {
  export const filterSensitiveLog = (obj: DescribeMLModelsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMLModelsOutput =>
    __isa(o, "DescribeMLModelsOutput");
}

export interface DescribeTagsInput {
  __type?: "DescribeTagsInput";
  /**
   * <p>The ID of the ML object. For example, <code>exampleModelId</code>. </p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of the ML object.</p>
   */
  ResourceType: TaggableResourceType | string | undefined;
}

export namespace DescribeTagsInput {
  export const filterSensitiveLog = (obj: DescribeTagsInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTagsInput =>
    __isa(o, "DescribeTagsInput");
}

/**
 * <p>Amazon ML returns the following elements.</p>
 */
export interface DescribeTagsOutput {
  __type?: "DescribeTagsOutput";
  /**
   * <p>The ID of the tagged ML object.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of the tagged ML object.</p>
   */
  ResourceType?: TaggableResourceType | string;

  /**
   * <p>A list of tags associated with the ML object.</p>
   */
  Tags?: Tag[];
}

export namespace DescribeTagsOutput {
  export const filterSensitiveLog = (obj: DescribeTagsOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTagsOutput =>
    __isa(o, "DescribeTagsOutput");
}

export enum DetailsAttributes {
  ALGORITHM = "Algorithm",
  PREDICTIVE_MODEL_TYPE = "PredictiveModelType"
}

export enum EntityStatus {
  COMPLETED = "COMPLETED",
  DELETED = "DELETED",
  FAILED = "FAILED",
  INPROGRESS = "INPROGRESS",
  PENDING = "PENDING"
}

/**
 * <p> Represents the output of <code>GetEvaluation</code> operation. </p>
 *          <p>The content consists of the detailed metadata and data file information and the current status of the
 *             <code>Evaluation</code>.</p>
 */
export interface Evaluation {
  __type?: "Evaluation";
  /**
   * <p>Long integer type that is a 64-bit signed number.</p>
   */
  ComputeTime?: number;

  /**
   * <p>The time that the <code>Evaluation</code> was created. The time is expressed in epoch time.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The AWS user account that invoked the evaluation. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>
   */
  CreatedByIamUser?: string;

  /**
   * <p>The ID of the <code>DataSource</code> that is used to evaluate the <code>MLModel</code>.</p>
   */
  EvaluationDataSourceId?: string;

  /**
   * <p>The ID that is assigned to the <code>Evaluation</code> at creation.</p>
   */
  EvaluationId?: string;

  /**
   * <p>A timestamp represented in epoch time.</p>
   */
  FinishedAt?: Date;

  /**
   * <p>The location and name of the data in Amazon Simple Storage Server (Amazon S3) that is used in the evaluation.</p>
   */
  InputDataLocationS3?: string;

  /**
   * <p>The time of the most recent edit to the <code>Evaluation</code>. The time is expressed in epoch time.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * <p>The ID of the <code>MLModel</code> that is the focus of the evaluation.</p>
   */
  MLModelId?: string;

  /**
   * <p>A description of the most recent details about evaluating the <code>MLModel</code>.</p>
   */
  Message?: string;

  /**
   * <p>A user-supplied name or description of the <code>Evaluation</code>. </p>
   */
  Name?: string;

  /**
   * <p>Measurements of how well the <code>MLModel</code> performed, using observations referenced
   *         by the <code>DataSource</code>. One of the following metrics is returned, based on the type of the <code>MLModel</code>:
   *         </p>
   *         <ul>
   *             <li>
   *                <p>BinaryAUC: A binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p>
   *             </li>
   *             <li>
   *                <p>RegressionRMSE: A regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p>
   *             </li>
   *             <li>
   *                <p>MulticlassAvgFScore: A multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p>
   *             </li>
   *          </ul>
   *         <p>
   *             For more information about performance metrics, please see the <a href="https://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>.
   *         </p>
   */
  PerformanceMetrics?: PerformanceMetrics;

  /**
   * <p>A timestamp represented in epoch time.</p>
   */
  StartedAt?: Date;

  /**
   * <p>The status of the evaluation. This element can have one of the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Amazon Machine Learning (Amazon ML) submitted a request to evaluate an <code>MLModel</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INPROGRESS</code> - The evaluation is underway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The request to evaluate an <code>MLModel</code> did not run to completion. It is not usable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> - The evaluation process completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The <code>Evaluation</code> is marked as deleted. It is not usable.</p>
   *             </li>
   *          </ul>
   */
  Status?: EntityStatus | string;
}

export namespace Evaluation {
  export const filterSensitiveLog = (obj: Evaluation): any => ({
    ...obj
  });
  export const isa = (o: any): o is Evaluation => __isa(o, "Evaluation");
}

export enum EvaluationFilterVariable {
  CREATED_AT = "CreatedAt",
  DATASOURCE_ID = "DataSourceId",
  DATA_URI = "DataURI",
  IAM_USER = "IAMUser",
  LAST_UPDATED_AT = "LastUpdatedAt",
  ML_MODEL_ID = "MLModelId",
  NAME = "Name",
  STATUS = "Status"
}

export interface GetBatchPredictionInput {
  __type?: "GetBatchPredictionInput";
  /**
   * <p>An ID assigned to the <code>BatchPrediction</code> at creation.</p>
   */
  BatchPredictionId: string | undefined;
}

export namespace GetBatchPredictionInput {
  export const filterSensitiveLog = (obj: GetBatchPredictionInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetBatchPredictionInput =>
    __isa(o, "GetBatchPredictionInput");
}

/**
 * <p>Represents the output of a <code>GetBatchPrediction</code> operation and describes a <code>BatchPrediction</code>.</p>
 */
export interface GetBatchPredictionOutput {
  __type?: "GetBatchPredictionOutput";
  /**
   * <p>The ID of the <code>DataSource</code> that was used to create the <code>BatchPrediction</code>.
   *         </p>
   */
  BatchPredictionDataSourceId?: string;

  /**
   * <p>An ID assigned to the <code>BatchPrediction</code> at creation. This value should be identical to the value of the <code>BatchPredictionID</code>
   *             in the request.</p>
   */
  BatchPredictionId?: string;

  /**
   * <p>The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the <code>BatchPrediction</code>, normalized and scaled on computation resources. <code>ComputeTime</code> is only available if the <code>BatchPrediction</code> is in the <code>COMPLETED</code> state.</p>
   */
  ComputeTime?: number;

  /**
   * <p>The time when the <code>BatchPrediction</code> was created. The time is expressed in epoch time.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The AWS user account that invoked the <code>BatchPrediction</code>. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>
   */
  CreatedByIamUser?: string;

  /**
   * <p>The epoch time when Amazon Machine Learning marked the <code>BatchPrediction</code> as <code>COMPLETED</code> or <code>FAILED</code>. <code>FinishedAt</code> is only available when the <code>BatchPrediction</code> is in the <code>COMPLETED</code> or <code>FAILED</code> state.</p>
   */
  FinishedAt?: Date;

  /**
   * <p>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).</p>
   */
  InputDataLocationS3?: string;

  /**
   * <p>The number of invalid records that Amazon Machine Learning saw while processing the <code>BatchPrediction</code>.</p>
   */
  InvalidRecordCount?: number;

  /**
   * <p>The time of the most recent edit to <code>BatchPrediction</code>. The time is expressed in epoch time.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * <p>A link to the file that contains logs of the <code>CreateBatchPrediction</code> operation.</p>
   */
  LogUri?: string;

  /**
   * <p>The ID of the <code>MLModel</code> that generated predictions for the <code>BatchPrediction</code> request.</p>
   */
  MLModelId?: string;

  /**
   * <p>A description of the most recent details about processing the batch prediction request.</p>
   */
  Message?: string;

  /**
   * <p>A user-supplied name or description of the <code>BatchPrediction</code>.</p>
   */
  Name?: string;

  /**
   * <p>The location of an Amazon S3 bucket or directory to receive the operation results.</p>
   */
  OutputUri?: string;

  /**
   * <p>The epoch time when Amazon Machine Learning marked the <code>BatchPrediction</code> as <code>INPROGRESS</code>. <code>StartedAt</code> isn't available if the <code>BatchPrediction</code> is in the <code>PENDING</code> state.</p>
   */
  StartedAt?: Date;

  /**
   * <p>The status of the <code>BatchPrediction</code>, which can be one of the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Amazon Machine Learning (Amazon ML) submitted a request to generate batch predictions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INPROGRESS</code> - The batch predictions are in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The request to perform a batch prediction did not run to completion. It is not usable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> - The batch prediction process completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The <code>BatchPrediction</code> is marked as deleted. It is not usable.</p>
   *             </li>
   *          </ul>
   */
  Status?: EntityStatus | string;

  /**
   * <p>The number of total records that Amazon Machine Learning saw while processing the <code>BatchPrediction</code>.</p>
   */
  TotalRecordCount?: number;
}

export namespace GetBatchPredictionOutput {
  export const filterSensitiveLog = (obj: GetBatchPredictionOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetBatchPredictionOutput =>
    __isa(o, "GetBatchPredictionOutput");
}

export interface GetDataSourceInput {
  __type?: "GetDataSourceInput";
  /**
   * <p>The ID assigned to the <code>DataSource</code> at creation.</p>
   */
  DataSourceId: string | undefined;

  /**
   * <p>Specifies whether the <code>GetDataSource</code> operation should return <code>DataSourceSchema</code>.</p>
   *         <p>If true, <code>DataSourceSchema</code> is returned.</p>
   *         <p>If false, <code>DataSourceSchema</code> is not returned.</p>
   */
  Verbose?: boolean;
}

export namespace GetDataSourceInput {
  export const filterSensitiveLog = (obj: GetDataSourceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDataSourceInput =>
    __isa(o, "GetDataSourceInput");
}

/**
 * <p>Represents the output of a <code>GetDataSource</code> operation and describes a <code>DataSource</code>.</p>
 */
export interface GetDataSourceOutput {
  __type?: "GetDataSourceOutput";
  /**
   * <p>
   *             The parameter is <code>true</code> if statistics need to be generated from the observation data.
   *         </p>
   */
  ComputeStatistics?: boolean;

  /**
   * <p>The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the <code>DataSource</code>, normalized and scaled on computation resources. <code>ComputeTime</code> is only available if the <code>DataSource</code> is in the <code>COMPLETED</code> state and the <code>ComputeStatistics</code> is set to true.</p>
   */
  ComputeTime?: number;

  /**
   * <p>The time that the <code>DataSource</code> was created. The time is expressed in epoch time.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The AWS user account from which the <code>DataSource</code> was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>
   */
  CreatedByIamUser?: string;

  /**
   * <p>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).</p>
   */
  DataLocationS3?: string;

  /**
   * <p>A JSON string that represents the splitting and rearrangement requirement used when this <code>DataSource</code>
   *             was created.</p>
   */
  DataRearrangement?: string;

  /**
   * <p>The total size of observations in the data files.</p>
   */
  DataSizeInBytes?: number;

  /**
   * <p>The ID assigned to the <code>DataSource</code> at creation.  This value should be identical to the value of the <code>DataSourceId</code> in the request.</p>
   */
  DataSourceId?: string;

  /**
   * <p>The schema used by all of the data files of this <code>DataSource</code>.</p>
   *         <p>
   *             <b>Note:</b> This parameter is provided as part of the verbose format.</p>
   */
  DataSourceSchema?: string;

  /**
   * <p>The epoch time when Amazon Machine Learning marked the <code>DataSource</code> as <code>COMPLETED</code> or <code>FAILED</code>. <code>FinishedAt</code> is only available when the <code>DataSource</code> is in the <code>COMPLETED</code> or <code>FAILED</code> state.</p>
   */
  FinishedAt?: Date;

  /**
   * <p>The time of the most recent edit to the <code>DataSource</code>. The time is expressed in epoch time.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * <p>A link to the file containing logs of <code>CreateDataSourceFrom*</code> operations.</p>
   */
  LogUri?: string;

  /**
   * <p>The user-supplied description of the most recent details about creating the <code>DataSource</code>.</p>
   */
  Message?: string;

  /**
   * <p>A user-supplied name or description of the <code>DataSource</code>.</p>
   */
  Name?: string;

  /**
   * <p>The number of data files referenced by the <code>DataSource</code>.</p>
   */
  NumberOfFiles?: number;

  /**
   * <p>The datasource details that are specific to Amazon RDS.</p>
   */
  RDSMetadata?: RDSMetadata;

  /**
   * <p>Describes the <code>DataSource</code> details specific to Amazon Redshift.</p>
   */
  RedshiftMetadata?: RedshiftMetadata;

  /**
   * <p>The Amazon Resource Name (ARN) of an <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename. </p>
   */
  RoleARN?: string;

  /**
   * <p>The epoch time when Amazon Machine Learning marked the <code>DataSource</code> as <code>INPROGRESS</code>. <code>StartedAt</code> isn't available if the <code>DataSource</code> is in the <code>PENDING</code> state.</p>
   */
  StartedAt?: Date;

  /**
   * <p>The current status of the <code>DataSource</code>. This element can have one of the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Amazon ML submitted a request to create a <code>DataSource</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INPROGRESS</code> - The creation process is underway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The request to create a <code>DataSource</code> did not run to completion. It is not usable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> - The creation process completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The <code>DataSource</code> is marked as deleted. It is not usable.</p>
   *             </li>
   *          </ul>
   */
  Status?: EntityStatus | string;
}

export namespace GetDataSourceOutput {
  export const filterSensitiveLog = (obj: GetDataSourceOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDataSourceOutput =>
    __isa(o, "GetDataSourceOutput");
}

export interface GetEvaluationInput {
  __type?: "GetEvaluationInput";
  /**
   * <p>The ID of the <code>Evaluation</code> to retrieve. The evaluation of each <code>MLModel</code> is recorded and cataloged. The ID provides the means to access the information. </p>
   */
  EvaluationId: string | undefined;
}

export namespace GetEvaluationInput {
  export const filterSensitiveLog = (obj: GetEvaluationInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetEvaluationInput =>
    __isa(o, "GetEvaluationInput");
}

/**
 * <p>Represents the output of a <code>GetEvaluation</code> operation and describes an <code>Evaluation</code>.</p>
 */
export interface GetEvaluationOutput {
  __type?: "GetEvaluationOutput";
  /**
   * <p>The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the <code>Evaluation</code>, normalized and scaled on computation resources. <code>ComputeTime</code> is only available if the <code>Evaluation</code> is in the <code>COMPLETED</code> state.</p>
   */
  ComputeTime?: number;

  /**
   * <p>The time that the <code>Evaluation</code> was created. The time is expressed in epoch time.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The AWS user account that invoked the evaluation. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>
   */
  CreatedByIamUser?: string;

  /**
   * <p>The <code>DataSource</code> used for this evaluation.</p>
   */
  EvaluationDataSourceId?: string;

  /**
   * <p>The evaluation ID which is same as the <code>EvaluationId</code> in the request.</p>
   */
  EvaluationId?: string;

  /**
   * <p>The epoch time when Amazon Machine Learning marked the <code>Evaluation</code> as <code>COMPLETED</code> or <code>FAILED</code>. <code>FinishedAt</code> is only available when the <code>Evaluation</code> is in the <code>COMPLETED</code> or <code>FAILED</code> state.</p>
   */
  FinishedAt?: Date;

  /**
   * <p>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).</p>
   */
  InputDataLocationS3?: string;

  /**
   * <p>The time of the most recent edit to the <code>Evaluation</code>. The time is expressed in epoch time.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * <p>A link to the file that contains logs of the <code>CreateEvaluation</code> operation.</p>
   */
  LogUri?: string;

  /**
   * <p>The ID of the <code>MLModel</code> that was the focus of the evaluation.</p>
   */
  MLModelId?: string;

  /**
   * <p>A description of the most recent details about evaluating the <code>MLModel</code>.</p>
   */
  Message?: string;

  /**
   * <p>A user-supplied name or description of the <code>Evaluation</code>. </p>
   */
  Name?: string;

  /**
   * <p>Measurements of how well the <code>MLModel</code> performed using observations referenced by the <code>DataSource</code>. One of the following metric is returned based on the type of the <code>MLModel</code>:
   *         </p>
   *         <ul>
   *             <li>
   *                <p>BinaryAUC: A binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p>
   *             </li>
   *             <li>
   *                <p>RegressionRMSE: A regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p>
   *             </li>
   *             <li>
   *                <p>MulticlassAvgFScore: A multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p>
   *             </li>
   *          </ul>
   *         <p>
   *                         For more information about performance metrics, please see the <a href="https://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>.
   *         </p>
   */
  PerformanceMetrics?: PerformanceMetrics;

  /**
   * <p>The epoch time when Amazon Machine Learning marked the <code>Evaluation</code> as <code>INPROGRESS</code>. <code>StartedAt</code> isn't available if the <code>Evaluation</code> is in the <code>PENDING</code> state.</p>
   */
  StartedAt?: Date;

  /**
   * <p>The status of the evaluation. This element can have one of the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Amazon Machine Language (Amazon ML) submitted a request to evaluate an <code>MLModel</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INPROGRESS</code> - The evaluation is underway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The request to evaluate an <code>MLModel</code> did not run to completion. It is not usable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> - The evaluation process completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The <code>Evaluation</code> is marked as deleted. It is not usable.</p>
   *             </li>
   *          </ul>
   */
  Status?: EntityStatus | string;
}

export namespace GetEvaluationOutput {
  export const filterSensitiveLog = (obj: GetEvaluationOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetEvaluationOutput =>
    __isa(o, "GetEvaluationOutput");
}

export interface GetMLModelInput {
  __type?: "GetMLModelInput";
  /**
   * <p>The ID assigned to the <code>MLModel</code> at creation.</p>
   */
  MLModelId: string | undefined;

  /**
   * <p>Specifies whether the <code>GetMLModel</code> operation should return <code>Recipe</code>.</p>
   *         <p>If true, <code>Recipe</code> is returned.</p>
   *         <p>If false, <code>Recipe</code> is not returned.</p>
   */
  Verbose?: boolean;
}

export namespace GetMLModelInput {
  export const filterSensitiveLog = (obj: GetMLModelInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMLModelInput =>
    __isa(o, "GetMLModelInput");
}

/**
 * <p>Represents the output of a <code>GetMLModel</code> operation, and provides detailed information about a <code>MLModel</code>.</p>
 */
export interface GetMLModelOutput {
  __type?: "GetMLModelOutput";
  /**
   * <p>The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the <code>MLModel</code>, normalized and scaled on computation resources. <code>ComputeTime</code> is only available if the <code>MLModel</code> is in the <code>COMPLETED</code> state.</p>
   */
  ComputeTime?: number;

  /**
   * <p>The time that the <code>MLModel</code> was created. The time is expressed in epoch time.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The AWS user account from which the <code>MLModel</code> was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>
   */
  CreatedByIamUser?: string;

  /**
   * <p>The current endpoint of the <code>MLModel</code>
   *          </p>
   */
  EndpointInfo?: RealtimeEndpointInfo;

  /**
   * <p>The epoch time when Amazon Machine Learning marked the <code>MLModel</code> as <code>COMPLETED</code> or <code>FAILED</code>. <code>FinishedAt</code> is only available when the <code>MLModel</code> is in the <code>COMPLETED</code> or <code>FAILED</code> state.</p>
   */
  FinishedAt?: Date;

  /**
   * <p>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).</p>
   */
  InputDataLocationS3?: string;

  /**
   * <p>The time of the most recent edit to the <code>MLModel</code>. The time is expressed in epoch time.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * <p>A link to the file that contains logs of the <code>CreateMLModel</code> operation.</p>
   */
  LogUri?: string;

  /**
   * <p>The MLModel ID,
   *             which is same as the <code>MLModelId</code> in the request.</p>
   */
  MLModelId?: string;

  /**
   * <p>Identifies the <code>MLModel</code> category. The following are the available types: </p>
   *         <ul>
   *             <li>
   *                <p>REGRESSION -- Produces a numeric result. For example, "What price should a house be listed at?"</p>
   *             </li>
   *             <li>
   *                <p>BINARY -- Produces one of two possible results. For example, "Is this an e-commerce website?"</p>
   *             </li>
   *             <li>
   *                <p>MULTICLASS -- Produces one of several possible results. For example, "Is this a HIGH, LOW or MEDIUM risk trade?"</p>
   *             </li>
   *          </ul>
   */
  MLModelType?: MLModelType | string;

  /**
   * <p>A description of the most recent details about accessing the <code>MLModel</code>.</p>
   */
  Message?: string;

  /**
   * <p>A user-supplied name or description of the <code>MLModel</code>.</p>
   */
  Name?: string;

  /**
   * <p>The recipe to use when training the <code>MLModel</code>. The <code>Recipe</code>
   *             provides detailed information about the observation data to use during training, and
   *             manipulations to perform on the observation data during training.</p>
   *         <p>
   *             <b>Note:</b> This parameter is provided as part of the verbose format.</p>
   */
  Recipe?: string;

  /**
   * <p>The schema used by all of the data files referenced by the <code>DataSource</code>.</p>
   *         <p>
   *             <b>Note:</b> This parameter is provided as part of the verbose format.</p>
   */
  Schema?: string;

  /**
   * <p>The scoring threshold is used in binary classification <code>MLModel</code>
   *             models. It marks the boundary between a positive prediction and a
   *             negative prediction.</p>
   *         <p>Output values greater than or equal to the threshold receive a positive result from the MLModel, such as
   *             <code>true</code>. Output values less than the threshold receive a negative response from the MLModel,
   *             such as <code>false</code>.</p>
   */
  ScoreThreshold?: number;

  /**
   * <p>The time of the most recent edit to the <code>ScoreThreshold</code>. The time is expressed in epoch time.</p>
   */
  ScoreThresholdLastUpdatedAt?: Date;

  /**
   * <p>Long integer type that is a 64-bit signed number.</p>
   */
  SizeInBytes?: number;

  /**
   * <p>The epoch time when Amazon Machine Learning marked the <code>MLModel</code> as <code>INPROGRESS</code>. <code>StartedAt</code> isn't available if the <code>MLModel</code> is in the <code>PENDING</code> state.</p>
   */
  StartedAt?: Date;

  /**
   * <p>The current status of the <code>MLModel</code>. This element can have one of the following values:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> - Amazon Machine Learning (Amazon ML) submitted a request to describe a <code>MLModel</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INPROGRESS</code> - The request is processing.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The request did not run to completion. The ML model isn't
   *                 usable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> - The request completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The <code>MLModel</code> is marked as deleted. It isn't
   *                 usable.</p>
   *             </li>
   *          </ul>
   */
  Status?: EntityStatus | string;

  /**
   * <p>The ID of the training <code>DataSource</code>.</p>
   */
  TrainingDataSourceId?: string;

  /**
   * <p>A list of the training parameters in the <code>MLModel</code>. The list is implemented as
   *             a map of key-value pairs.</p>
   *         <p>The following is the current set of training parameters:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>sgd.maxMLModelSizeInBytes</code> - The maximum allowed size of the model. Depending on the
   *                     input data, the size of the model might affect its performance.</p>
   *                 <p> The value is an integer that ranges from <code>100000</code> to <code>2147483648</code>. The default value is <code>33554432</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sgd.maxPasses</code> - The number of times that the training process traverses the
   *                     observations to build the <code>MLModel</code>. The value is an integer that
   *                     ranges from <code>1</code> to <code>100</code>. The default value is
   *                         <code>10</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sgd.shuffleType</code> - Whether Amazon ML shuffles the training data. Shuffling data improves a
   *                     model's ability to find the optimal solution for a variety of data types. The
   *                     valid values are <code>auto</code> and <code>none</code>. The default value is
   *                         <code>none</code>. We strongly recommend that you shuffle your data.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sgd.l1RegularizationAmount</code> - The coefficient regularization L1 norm. It controls
   *                     overfitting the data by penalizing large coefficients. This tends to drive
   *                     coefficients to zero, resulting in a sparse feature set. If you use this
   *                     parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p>
   *                 <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>.
   *                     The default is to not use L1 normalization. This parameter can't be used when
   *                         <code>L2</code> is specified. Use this parameter sparingly.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sgd.l2RegularizationAmount</code> - The coefficient regularization L2 norm. It controls
   *                     overfitting the data by penalizing large coefficients. This tends to drive
   *                     coefficients to small, nonzero values. If you use this parameter, start by
   *                     specifying a small value, such as <code>1.0E-08</code>.</p>
   *                 <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>.
   *                     The default is to not use L2 normalization. This parameter can't be used when
   *                         <code>L1</code> is specified. Use this parameter sparingly.</p>
   *             </li>
   *          </ul>
   */
  TrainingParameters?: { [key: string]: string };
}

export namespace GetMLModelOutput {
  export const filterSensitiveLog = (obj: GetMLModelOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMLModelOutput =>
    __isa(o, "GetMLModelOutput");
}

/**
 * <p>A second request to use or change an object was not allowed. This can result from retrying a request using a parameter that was not present in the original request.</p>
 */
export interface IdempotentParameterMismatchException
  extends __SmithyException,
    $MetadataBearer {
  name: "IdempotentParameterMismatchException";
  $fault: "client";
  code?: number;
  message?: string;
}

export namespace IdempotentParameterMismatchException {
  export const filterSensitiveLog = (
    obj: IdempotentParameterMismatchException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is IdempotentParameterMismatchException =>
    __isa(o, "IdempotentParameterMismatchException");
}

/**
 * <p>An error on the server occurred when trying to process a request.</p>
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  code?: number;
  message?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServerException =>
    __isa(o, "InternalServerException");
}

/**
 * <p>An error on the client occurred. Typically, the cause is an invalid input value.</p>
 */
export interface InvalidInputException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  code?: number;
  message?: string;
}

export namespace InvalidInputException {
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidInputException =>
    __isa(o, "InvalidInputException");
}

/**
 * <p>A submitted tag is invalid.</p>
 */
export interface InvalidTagException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTagException";
  $fault: "client";
  message?: string;
}

export namespace InvalidTagException {
  export const filterSensitiveLog = (obj: InvalidTagException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidTagException =>
    __isa(o, "InvalidTagException");
}

/**
 * <p>The subscriber exceeded the maximum number of operations. This exception can occur when listing objects such as <code>DataSource</code>.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  code?: number;
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

/**
 * <p> Represents the output of a <code>GetMLModel</code> operation. </p>
 *          <p>The content consists of the detailed metadata and the current status of the <code>MLModel</code>.</p>
 */
export interface MLModel {
  __type?: "MLModel";
  /**
   * <p>The algorithm used to train the <code>MLModel</code>. The following algorithm is supported:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>SGD</code> -- Stochastic gradient descent. The goal of <code>SGD</code> is to minimize the gradient of the loss function. </p>
   *             </li>
   *          </ul>
   */
  Algorithm?: Algorithm | string;

  /**
   * <p>Long integer type that is a 64-bit signed number.</p>
   */
  ComputeTime?: number;

  /**
   * <p>The time that the <code>MLModel</code> was created. The time is expressed in epoch time.</p>
   */
  CreatedAt?: Date;

  /**
   * <p>The AWS user account from which the <code>MLModel</code> was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>
   */
  CreatedByIamUser?: string;

  /**
   * <p>The current endpoint of the <code>MLModel</code>.</p>
   */
  EndpointInfo?: RealtimeEndpointInfo;

  /**
   * <p>A timestamp represented in epoch time.</p>
   */
  FinishedAt?: Date;

  /**
   * <p>The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).</p>
   */
  InputDataLocationS3?: string;

  /**
   * <p>The time of the most recent edit to the <code>MLModel</code>. The time is expressed in epoch time.</p>
   */
  LastUpdatedAt?: Date;

  /**
   * <p>The ID assigned to the <code>MLModel</code> at creation.</p>
   */
  MLModelId?: string;

  /**
   * <p>Identifies the <code>MLModel</code> category. The following are the available types:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>REGRESSION</code> - Produces a numeric result. For example, "What price should a
   *                 house be listed at?"</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BINARY</code> - Produces one of two possible results. For example, "Is this a
   *                 child-friendly web site?".</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MULTICLASS</code> - Produces one of several possible results. For example, "Is
   *                 this a HIGH-, LOW-, or MEDIUM-risk trade?".</p>
   *             </li>
   *          </ul>
   */
  MLModelType?: MLModelType | string;

  /**
   * <p>A description of the most recent details about accessing the <code>MLModel</code>.</p>
   */
  Message?: string;

  /**
   * <p>A user-supplied name or description of the <code>MLModel</code>.</p>
   */
  Name?: string;

  /**
   * <p>The score threshold for the <code>MLModel</code>.</p>
   */
  ScoreThreshold?: number;

  /**
   * <p>The time of the most recent edit to the <code>ScoreThreshold</code>. The time is expressed in epoch time.</p>
   */
  ScoreThresholdLastUpdatedAt?: Date;

  /**
   * <p>Long integer type that is a 64-bit signed number.</p>
   */
  SizeInBytes?: number;

  /**
   * <p>A timestamp represented in epoch time.</p>
   */
  StartedAt?: Date;

  /**
   * <p>The current status of an <code>MLModel</code>. This element can have one of the following values: </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code>	- Amazon Machine Learning (Amazon ML) submitted a request to create an <code>MLModel</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INPROGRESS</code>	- The creation process is underway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The request to create an <code>MLModel</code> didn't run to
   *                 completion. The model isn't usable.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code>	- The creation process completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETED</code> - The <code>MLModel</code> is marked as deleted. It isn't
   *                 usable.</p>
   *             </li>
   *          </ul>
   */
  Status?: EntityStatus | string;

  /**
   * <p>The ID of the training <code>DataSource</code>. The <code>CreateMLModel</code> operation uses the <code>TrainingDataSourceId</code>.</p>
   */
  TrainingDataSourceId?: string;

  /**
   * <p>A list of the training parameters in the <code>MLModel</code>. The list is implemented as
   *             a map of key-value pairs.</p>
   *         <p>The following is the current set of training parameters:</p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>sgd.maxMLModelSizeInBytes</code> - The maximum allowed size of the model. Depending on the
   *                     input data, the size of the model might affect its performance.</p>
   *                 <p> The value is an integer that ranges from <code>100000</code> to <code>2147483648</code>. The default value is <code>33554432</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sgd.maxPasses</code> - The number of times that the training process traverses the
   *                     observations to build the <code>MLModel</code>. The value is an integer that
   *                     ranges from <code>1</code> to <code>100</code>. The default value is
   *                         <code>10</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sgd.shuffleType</code> - Whether Amazon ML shuffles the training data. Shuffling the data
   *                     improves a model's ability to find the optimal solution for a variety of data
   *                     types. The valid values are <code>auto</code> and <code>none</code>. The default
   *                     value is <code>none</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sgd.l1RegularizationAmount</code> - The coefficient regularization L1 norm, which controls
   *                     overfitting the data by penalizing large coefficients. This parameter tends to
   *                     drive coefficients to zero, resulting in sparse feature set. If you use this
   *                     parameter, start by specifying a small value, such as <code>1.0E-08</code>.</p>
   *                 <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>.
   *                     The default is to not use L1 normalization. This parameter can't be used when
   *                         <code>L2</code> is specified. Use this parameter sparingly.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>sgd.l2RegularizationAmount</code> - The coefficient regularization L2 norm, which controls
   *                     overfitting the data by penalizing large coefficients. This tends to drive
   *                     coefficients to small, nonzero values. If you use this parameter, start by
   *                     specifying a small value, such as <code>1.0E-08</code>.</p>
   *                 <p>The value is a double that ranges from <code>0</code> to <code>MAX_DOUBLE</code>.
   *                     The default is to not use L2 normalization. This parameter can't be used when
   *                         <code>L1</code> is specified. Use this parameter sparingly.</p>
   *             </li>
   *          </ul>
   */
  TrainingParameters?: { [key: string]: string };
}

export namespace MLModel {
  export const filterSensitiveLog = (obj: MLModel): any => ({
    ...obj
  });
  export const isa = (o: any): o is MLModel => __isa(o, "MLModel");
}

export enum MLModelFilterVariable {
  ALGORITHM = "Algorithm",
  CREATED_AT = "CreatedAt",
  IAM_USER = "IAMUser",
  LAST_UPDATED_AT = "LastUpdatedAt",
  ML_MODEL_TYPE = "MLModelType",
  NAME = "Name",
  REAL_TIME_ENDPOINT_STATUS = "RealtimeEndpointStatus",
  STATUS = "Status",
  TRAINING_DATASOURCE_ID = "TrainingDataSourceId",
  TRAINING_DATA_URI = "TrainingDataURI"
}

export enum MLModelType {
  BINARY = "BINARY",
  MULTICLASS = "MULTICLASS",
  REGRESSION = "REGRESSION"
}

/**
 * <p>Measurements of how well the <code>MLModel</code> performed on known observations. One of the following metrics is returned, based on the type of the <code>MLModel</code>:
 *         </p>
 *         <ul>
 *             <li>
 *                <p>BinaryAUC: The binary <code>MLModel</code> uses the Area Under the Curve (AUC) technique to measure performance. </p>
 *             </li>
 *             <li>
 *                <p>RegressionRMSE: The regression <code>MLModel</code> uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.</p>
 *             </li>
 *             <li>
 *                <p>MulticlassAvgFScore: The multiclass <code>MLModel</code> uses the F1 score technique to measure performance. </p>
 *             </li>
 *          </ul>
 *         <p>
 *             For more information about performance metrics, please see the <a href="https://docs.aws.amazon.com/machine-learning/latest/dg">Amazon Machine Learning Developer Guide</a>.
 *         </p>
 */
export interface PerformanceMetrics {
  __type?: "PerformanceMetrics";
  /**
   * <p>Specific performance metric information.</p>
   */
  Properties?: { [key: string]: string };
}

export namespace PerformanceMetrics {
  export const filterSensitiveLog = (obj: PerformanceMetrics): any => ({
    ...obj
  });
  export const isa = (o: any): o is PerformanceMetrics =>
    __isa(o, "PerformanceMetrics");
}

export interface PredictInput {
  __type?: "PredictInput";
  /**
   * <p>A unique identifier of the <code>MLModel</code>.</p>
   */
  MLModelId: string | undefined;

  /**
   * <p>The predicted endpoint for the input.</p>
   */
  PredictEndpoint: string | undefined;

  /**
   * <p>A map of variable name-value pairs that represent an observation.</p>
   */
  Record: { [key: string]: string } | undefined;
}

export namespace PredictInput {
  export const filterSensitiveLog = (obj: PredictInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is PredictInput => __isa(o, "PredictInput");
}

/**
 * <p>The output from a <code>Predict</code> operation: </p>
 *
 * 		       <ul>
 *             <li>
 * 				           <p>
 * 				              <code>Details</code> - Contains the following attributes:
 * 				  <code>DetailsAttributes.PREDICTIVE_MODEL_TYPE - REGRESSION | BINARY | MULTICLASS</code>
 * 				              <code>DetailsAttributes.ALGORITHM - SGD</code>
 * 				           </p>
 * 			         </li>
 *             <li>
 * 				           <p>
 * 				              <code>PredictedLabel</code> - Present for either a <code>BINARY</code> or <code>MULTICLASS</code>
 *                   <code>MLModel</code> request.
 * 				</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 * 				              <code>PredictedScores</code> - Contains the raw classification score corresponding to each label.
 * 				</p>
 * 			         </li>
 *             <li>
 * 				           <p>
 * 				              <code>PredictedValue</code> - Present for a <code>REGRESSION</code>
 *                   <code>MLModel</code> request.
 * 				</p>
 * 			         </li>
 *          </ul>
 */
export interface Prediction {
  __type?: "Prediction";
  /**
   * <p>Provides any additional details regarding the prediction.</p>
   */
  details?: { [key: string]: string };

  /**
   * <p>The prediction label for either a <code>BINARY</code> or <code>MULTICLASS</code>
   *             <code>MLModel</code>.</p>
   */
  predictedLabel?: string;

  /**
   * <p>Provides the raw classification score corresponding to each label.</p>
   */
  predictedScores?: { [key: string]: number };

  /**
   * <p>The prediction value for <code>REGRESSION</code>
   *             <code>MLModel</code>.</p>
   */
  predictedValue?: number;
}

export namespace Prediction {
  export const filterSensitiveLog = (obj: Prediction): any => ({
    ...obj
  });
  export const isa = (o: any): o is Prediction => __isa(o, "Prediction");
}

/**
 * <p>The exception is thrown when a predict request is made to an unmounted <code>MLModel</code>.</p>
 */
export interface PredictorNotMountedException
  extends __SmithyException,
    $MetadataBearer {
  name: "PredictorNotMountedException";
  $fault: "client";
  message?: string;
}

export namespace PredictorNotMountedException {
  export const filterSensitiveLog = (
    obj: PredictorNotMountedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PredictorNotMountedException =>
    __isa(o, "PredictorNotMountedException");
}

export interface PredictOutput {
  __type?: "PredictOutput";
  /**
   * <p>The output from a <code>Predict</code> operation: </p>
   *
   * 		       <ul>
   *             <li>
   * 				           <p>
   * 				              <code>Details</code> - Contains the following attributes:
   * 				  <code>DetailsAttributes.PREDICTIVE_MODEL_TYPE - REGRESSION | BINARY | MULTICLASS</code>
   * 				              <code>DetailsAttributes.ALGORITHM - SGD</code>
   * 				           </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 				              <code>PredictedLabel</code> - Present for either a <code>BINARY</code> or <code>MULTICLASS</code>
   *                   <code>MLModel</code> request.
   * 				</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 				              <code>PredictedScores</code> - Contains the raw classification score corresponding to each label.
   * 				</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   * 				              <code>PredictedValue</code> - Present for a <code>REGRESSION</code>
   *                   <code>MLModel</code> request.
   * 				</p>
   * 			         </li>
   *          </ul>
   */
  Prediction?: Prediction;
}

export namespace PredictOutput {
  export const filterSensitiveLog = (obj: PredictOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is PredictOutput => __isa(o, "PredictOutput");
}

/**
 * <p>The database details of an Amazon RDS database.</p>
 */
export interface RDSDatabase {
  __type?: "RDSDatabase";
  /**
   * <p>The name of a database hosted on an RDS DB instance.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The ID of an RDS DB instance.</p>
   */
  InstanceIdentifier: string | undefined;
}

export namespace RDSDatabase {
  export const filterSensitiveLog = (obj: RDSDatabase): any => ({
    ...obj
  });
  export const isa = (o: any): o is RDSDatabase => __isa(o, "RDSDatabase");
}

/**
 * <p>The database credentials to connect to a database on an RDS DB instance.</p>
 */
export interface RDSDatabaseCredentials {
  __type?: "RDSDatabaseCredentials";
  /**
   * <p>The password to be used by Amazon ML to connect to a database on an RDS DB instance.
   *             The password should have sufficient permissions to execute the <code>RDSSelectQuery</code> query.</p>
   */
  Password: string | undefined;

  /**
   * <p>The username to be used by Amazon ML to connect to database on an Amazon RDS instance.
   *             The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.</p>
   */
  Username: string | undefined;
}

export namespace RDSDatabaseCredentials {
  export const filterSensitiveLog = (obj: RDSDatabaseCredentials): any => ({
    ...obj
  });
  export const isa = (o: any): o is RDSDatabaseCredentials =>
    __isa(o, "RDSDatabaseCredentials");
}

/**
 * <p>The data specification of an Amazon Relational Database Service (Amazon RDS) <code>DataSource</code>.</p>
 */
export interface RDSDataSpec {
  __type?: "RDSDataSpec";
  /**
   * <p>A JSON string that represents the splitting and rearrangement
   *     processing to be applied to a <code>DataSource</code>. If the <code>DataRearrangement</code>
   *     parameter is not provided, all of the input data is used to create the <code>Datasource</code>.</p>
   *
   *          <p>There are multiple parameters that control what data is used to create a datasource:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>percentBegin</code>
   *                   </b>
   *                </p>
   *                <p>Use <code>percentBegin</code> to indicate the beginning of the range of the data used to
   *         create the Datasource.
   *         If you do not include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML includes
   *         all of the data when creating the datasource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>percentEnd</code>
   *                   </b>
   *                </p>
   *                <p>Use <code>percentEnd</code> to indicate the end of the range of the data used to create the
   *         Datasource. If you do not
   *         include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML
   *         includes all of the data when creating the datasource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>complement</code>
   *                   </b>
   *                </p>
   *                <p>The <code>complement</code> parameter instructs Amazon ML to use the data that is
   *     not included in the range of <code>percentBegin</code> to <code>percentEnd</code> to create a
   *     datasource. The <code>complement</code> parameter is useful if you need to create
   *     complementary datasources for training and evaluation.
   *     To create a complementary datasource, use the same
   *     values for <code>percentBegin</code> and <code>percentEnd</code>, along with the
   *     <code>complement</code> parameter.</p>
   *
   *                <p>For example, the following two datasources do not share any data, and can be used to train and evaluate a model. The first datasource has 25 percent of the data, and the second one has 75 percent of the data.</p>
   *                <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":0, "percentEnd":25}}</code>
   *                </p>
   *                <p>Datasource for training: <code>{"splitting":{"percentBegin":0, "percentEnd":25, "complement":"true"}}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>strategy</code>
   *                   </b>
   *                </p>
   *                <p>To change how Amazon ML splits the data for a datasource, use the <code>strategy</code> parameter.</p>
   *                <p>The default value for the <code>strategy</code> parameter
   *     is <code>sequential</code>, meaning that Amazon ML takes all of the data records between the <code>percentBegin</code>
   *     and <code>percentEnd</code> parameters for the datasource, in the order that the records appear in the input data.</p>
   *
   *                <p>The following two <code>DataRearrangement</code> lines are examples of sequentially ordered
   *     training and evaluation datasources:</p>
   *                <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential"}}</code>
   *                </p>
   *                <p>Datasource for training: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential", "complement":"true"}}</code>
   *                </p>
   *
   *                <p>To randomly split the input data into the proportions indicated by the percentBegin and percentEnd
   *         parameters, set the <code>strategy</code> parameter to
   *     <code>random</code> and provide a string that is used as the seed value for the random data splitting (for
   *     example, you can use the S3 path to your data as the random seed string).
   *     If you choose the random split strategy,
   *     Amazon ML assigns each row of data a pseudo-random number between 0 and 100, and then selects the rows that have an assigned
   *     number between <code>percentBegin</code> and <code>percentEnd</code>. Pseudo-random numbers are assigned
   *     using both the input seed string value and the byte offset as a seed, so changing the data results in a
   *     different split. Any existing ordering is preserved.
   *     The random splitting strategy ensures that variables in the training and evaluation data are distributed similarly.
   *     It is useful in the cases where the input data may have an implicit sort order, which would otherwise result in
   *     training and evaluation datasources containing non-similar data records.</p>
   *                <p>The following two <code>DataRearrangement</code> lines are examples of non-sequentially ordered
   *     training and evaluation datasources:</p>
   *                <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "strategyParams": {"randomSeed":"RANDOMSEED"}}}</code>
   *                </p>
   *                <p>Datasource for training: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "strategyParams": {"randomSeed":"RANDOMSEED"}, "complement":"true"}}</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  DataRearrangement?: string;

  /**
   * <p>A JSON string that represents the schema for an Amazon RDS
   *             <code>DataSource</code>. The <code>DataSchema</code>
   *             defines the structure of the observation data in the data file(s)
   *             referenced in the <code>DataSource</code>.</p>
   *         <p>A <code>DataSchema</code> is not required if you specify a
   *             <code>DataSchemaUri</code>
   *          </p>
   *         <p>Define your <code>DataSchema</code> as a series of key-value pairs. <code>attributes</code>
   *             and <code>excludedAttributeNames</code> have an array of key-value pairs
   *             for their value. Use the following format to define your <code>DataSchema</code>.</p>
   *         <p>{ "version": "1.0",</p>
   *          <p>"recordAnnotationFieldName": "F1",</p>
   *          <p>"recordWeightFieldName": "F2",</p>
   *          <p>"targetAttributeName": "F3",</p>
   *          <p>"dataFormat": "CSV",</p>
   *          <p>"dataFileContainsHeader": true,</p>
   *          <p>"attributes": [</p>
   *          <p>{ "attributeName": "F1", "attributeType": "TEXT" }, { "attributeName": "F2", "attributeType": "NUMERIC" }, { "attributeName": "F3", "attributeType": "CATEGORICAL" }, { "attributeName": "F4", "attributeType": "NUMERIC" }, { "attributeName": "F5", "attributeType": "CATEGORICAL" }, { "attributeName": "F6", "attributeType": "TEXT" }, { "attributeName": "F7", "attributeType": "WEIGHTED_INT_SEQUENCE" }, { "attributeName": "F8", "attributeType": "WEIGHTED_STRING_SEQUENCE" } ],</p>
   *          <p>"excludedAttributeNames": [ "F6" ] }</p>
   */
  DataSchema?: string;

  /**
   * <p>The Amazon S3 location of the <code>DataSchema</code>. </p>
   */
  DataSchemaUri?: string;

  /**
   * <p>The AWS Identity and Access Management (IAM) credentials that are used connect to the Amazon RDS database.</p>
   */
  DatabaseCredentials: RDSDatabaseCredentials | undefined;

  /**
   * <p>Describes the <code>DatabaseName</code> and <code>InstanceIdentifier</code> of an Amazon RDS database.</p>
   */
  DatabaseInformation: RDSDatabase | undefined;

  /**
   * <p>The role (DataPipelineDefaultResourceRole) assumed by an Amazon Elastic Compute Cloud (Amazon EC2) instance to carry out the copy operation from Amazon RDS to an Amazon S3 task. For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html">Role templates</a> for data pipelines.</p>
   */
  ResourceRole: string | undefined;

  /**
   * <p>The Amazon S3 location for staging Amazon RDS data. The data retrieved from Amazon RDS using <code>SelectSqlQuery</code> is stored in this location.</p>
   */
  S3StagingLocation: string | undefined;

  /**
   * <p>The security group IDs to be used to access a VPC-based RDS DB instance. Ensure that there are appropriate ingress rules set up to allow access to the RDS DB instance. This attribute is used by Data Pipeline to carry out the copy operation from Amazon RDS to an Amazon S3 task.</p>
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * <p>The query that is used to retrieve the observation data for the <code>DataSource</code>.</p>
   */
  SelectSqlQuery: string | undefined;

  /**
   * <p>The role (DataPipelineDefaultRole) assumed by AWS Data Pipeline service to monitor the progress of the copy task from Amazon RDS to Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html">Role templates</a> for data pipelines.</p>
   */
  ServiceRole: string | undefined;

  /**
   * <p>The subnet ID to be used to access a VPC-based RDS DB instance. This attribute is used by Data Pipeline to carry out the copy task from Amazon RDS to Amazon S3.</p>
   */
  SubnetId: string | undefined;
}

export namespace RDSDataSpec {
  export const filterSensitiveLog = (obj: RDSDataSpec): any => ({
    ...obj
  });
  export const isa = (o: any): o is RDSDataSpec => __isa(o, "RDSDataSpec");
}

/**
 * <p>The datasource details that are specific to Amazon RDS.</p>
 */
export interface RDSMetadata {
  __type?: "RDSMetadata";
  /**
   * <p>The ID of the Data Pipeline instance that is used to carry to copy data from Amazon RDS to Amazon S3. You can use the ID to find details about the instance in the Data Pipeline console.</p>
   */
  DataPipelineId?: string;

  /**
   * <p>The database details required to connect to an Amazon RDS.</p>
   */
  Database?: RDSDatabase;

  /**
   * <p>The username to be used by Amazon ML to connect to database on an Amazon RDS instance.
   *             The username should have sufficient permissions to execute an <code>RDSSelectSqlQuery</code> query.</p>
   */
  DatabaseUserName?: string;

  /**
   * <p>The role (DataPipelineDefaultResourceRole) assumed by an Amazon EC2 instance to carry out the copy task from Amazon RDS to Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html">Role templates</a> for data pipelines.</p>
   */
  ResourceRole?: string;

  /**
   * <p>The SQL query that is supplied during <a>CreateDataSourceFromRDS</a>. Returns only if <code>Verbose</code> is true in <code>GetDataSourceInput</code>. </p>
   */
  SelectSqlQuery?: string;

  /**
   * <p>The role (DataPipelineDefaultRole) assumed by the Data Pipeline service to monitor the progress of the copy task from Amazon RDS to Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html">Role templates</a> for data pipelines.</p>
   */
  ServiceRole?: string;
}

export namespace RDSMetadata {
  export const filterSensitiveLog = (obj: RDSMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is RDSMetadata => __isa(o, "RDSMetadata");
}

/**
 * <p> Describes the real-time endpoint information for an <code>MLModel</code>.</p>
 */
export interface RealtimeEndpointInfo {
  __type?: "RealtimeEndpointInfo";
  /**
   * <p>The time that the request to create the real-time endpoint for the <code>MLModel</code> was received. The time is expressed in epoch time.</p>
   */
  CreatedAt?: Date;

  /**
   * <p> The current status of the real-time endpoint for the <code>MLModel</code>. This element can have one of the following values: </p>
   *         <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code>  - Endpoint does not exist or was previously deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READY</code> - Endpoint is ready to be used for real-time predictions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code> - Updating/creating the endpoint. </p>
   *             </li>
   *          </ul>
   */
  EndpointStatus?: RealtimeEndpointStatus | string;

  /**
   * <p>The URI that specifies where to send real-time prediction requests for the <code>MLModel</code>.</p>
   *         <p>
   *             <b>Note:</b> The application must wait until the real-time endpoint is ready before using this URI.</p>
   */
  EndpointUrl?: string;

  /**
   * <p> The maximum processing rate for the real-time endpoint for <code>MLModel</code>, measured in incoming requests per second.</p>
   */
  PeakRequestsPerSecond?: number;
}

export namespace RealtimeEndpointInfo {
  export const filterSensitiveLog = (obj: RealtimeEndpointInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is RealtimeEndpointInfo =>
    __isa(o, "RealtimeEndpointInfo");
}

export enum RealtimeEndpointStatus {
  FAILED = "FAILED",
  NONE = "NONE",
  READY = "READY",
  UPDATING = "UPDATING"
}

/**
 * <p>Describes the database details required to connect to an Amazon Redshift database.</p>
 */
export interface RedshiftDatabase {
  __type?: "RedshiftDatabase";
  /**
   * <p>The ID of an Amazon Redshift cluster.</p>
   */
  ClusterIdentifier: string | undefined;

  /**
   * <p>The name of a database hosted on an Amazon Redshift cluster.</p>
   */
  DatabaseName: string | undefined;
}

export namespace RedshiftDatabase {
  export const filterSensitiveLog = (obj: RedshiftDatabase): any => ({
    ...obj
  });
  export const isa = (o: any): o is RedshiftDatabase =>
    __isa(o, "RedshiftDatabase");
}

/**
 * <p>Describes the database credentials for connecting to a database on an Amazon Redshift cluster.</p>
 */
export interface RedshiftDatabaseCredentials {
  __type?: "RedshiftDatabaseCredentials";
  /**
   * <p>A password to be used by Amazon ML to connect to a database on an Amazon Redshift cluster.
   *           The password should have sufficient permissions to execute a <code>RedshiftSelectSqlQuery</code> query. The password should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.</p>
   */
  Password: string | undefined;

  /**
   * <p>A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster.
   *           The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.</p>
   */
  Username: string | undefined;
}

export namespace RedshiftDatabaseCredentials {
  export const filterSensitiveLog = (
    obj: RedshiftDatabaseCredentials
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RedshiftDatabaseCredentials =>
    __isa(o, "RedshiftDatabaseCredentials");
}

/**
 * <p>Describes the data specification of an Amazon Redshift <code>DataSource</code>.</p>
 */
export interface RedshiftDataSpec {
  __type?: "RedshiftDataSpec";
  /**
   * <p>A JSON string that represents the splitting and rearrangement
   *     processing to be applied to a <code>DataSource</code>. If the <code>DataRearrangement</code>
   *     parameter is not provided, all of the input data is used to create the <code>Datasource</code>.</p>
   *
   *          <p>There are multiple parameters that control what data is used to create a datasource:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>percentBegin</code>
   *                   </b>
   *                </p>
   *                <p>Use <code>percentBegin</code> to indicate the beginning of the range of the data used to
   *         create the Datasource.
   *         If you do not include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML includes
   *         all of the data when creating the datasource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>percentEnd</code>
   *                   </b>
   *                </p>
   *                <p>Use <code>percentEnd</code> to indicate the end of the range of the data used to create the
   *         Datasource. If you do not
   *         include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML
   *         includes all of the data when creating the datasource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>complement</code>
   *                   </b>
   *                </p>
   *                <p>The <code>complement</code> parameter instructs Amazon ML to use the data that is
   *     not included in the range of <code>percentBegin</code> to <code>percentEnd</code> to create a
   *     datasource. The <code>complement</code> parameter is useful if you need to create
   *     complementary datasources for training and evaluation.
   *     To create a complementary datasource, use the same
   *     values for <code>percentBegin</code> and <code>percentEnd</code>, along with the
   *     <code>complement</code> parameter.</p>
   *
   *                <p>For example, the following two datasources do not share any data, and can be used to train and evaluate a model. The first datasource has 25 percent of the data, and the second one has 75 percent of the data.</p>
   *                <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":0, "percentEnd":25}}</code>
   *                </p>
   *                <p>Datasource for training: <code>{"splitting":{"percentBegin":0, "percentEnd":25, "complement":"true"}}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>strategy</code>
   *                   </b>
   *                </p>
   *                <p>To change how Amazon ML splits the data for a datasource, use the <code>strategy</code> parameter.</p>
   *                <p>The default value for the <code>strategy</code> parameter
   *     is <code>sequential</code>, meaning that Amazon ML takes all of the data records between the <code>percentBegin</code>
   *     and <code>percentEnd</code> parameters for the datasource, in the order that the records appear in the input data.</p>
   *
   *                <p>The following two <code>DataRearrangement</code> lines are examples of sequentially ordered
   *     training and evaluation datasources:</p>
   *                <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential"}}</code>
   *                </p>
   *                <p>Datasource for training: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential", "complement":"true"}}</code>
   *                </p>
   *
   *                <p>To randomly split the input data into the proportions indicated by the percentBegin and percentEnd
   *         parameters, set the <code>strategy</code> parameter to
   *     <code>random</code> and provide a string that is used as the seed value for the random data splitting (for
   *     example, you can use the S3 path to your data as the random seed string).
   *     If you choose the random split strategy,
   *     Amazon ML assigns each row of data a pseudo-random number between 0 and 100, and then selects the rows that have an assigned
   *     number between <code>percentBegin</code> and <code>percentEnd</code>. Pseudo-random numbers are assigned
   *     using both the input seed string value and the byte offset as a seed, so changing the data results in a
   *     different split. Any existing ordering is preserved.
   *     The random splitting strategy ensures that variables in the training and evaluation data are distributed similarly.
   *     It is useful in the cases where the input data may have an implicit sort order, which would otherwise result in
   *     training and evaluation datasources containing non-similar data records.</p>
   *                <p>The following two <code>DataRearrangement</code> lines are examples of non-sequentially ordered
   *     training and evaluation datasources:</p>
   *                <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "strategyParams": {"randomSeed":"RANDOMSEED"}}}</code>
   *                </p>
   *                <p>Datasource for training: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "strategyParams": {"randomSeed":"RANDOMSEED"}, "complement":"true"}}</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  DataRearrangement?: string;

  /**
   * <p>A JSON string that represents the schema for an Amazon Redshift
   *             <code>DataSource</code>. The <code>DataSchema</code>
   *             defines the structure of the observation data in the data file(s)
   *             referenced in the <code>DataSource</code>.</p>
   *         <p>A <code>DataSchema</code> is not required if you specify a
   *             <code>DataSchemaUri</code>.</p>
   *         <p>Define your <code>DataSchema</code> as a series of key-value pairs. <code>attributes</code>
   *             and <code>excludedAttributeNames</code> have an array of key-value pairs
   *             for their value. Use the following format to define your <code>DataSchema</code>.</p>
   *         <p>{ "version": "1.0",</p>
   *          <p>"recordAnnotationFieldName": "F1",</p>
   *          <p>"recordWeightFieldName": "F2",</p>
   *          <p>"targetAttributeName": "F3",</p>
   *          <p>"dataFormat": "CSV",</p>
   *          <p>"dataFileContainsHeader": true,</p>
   *          <p>"attributes": [</p>
   *          <p>{ "attributeName": "F1", "attributeType": "TEXT" }, { "attributeName": "F2", "attributeType": "NUMERIC" }, { "attributeName": "F3", "attributeType": "CATEGORICAL" }, { "attributeName": "F4", "attributeType": "NUMERIC" }, { "attributeName": "F5", "attributeType": "CATEGORICAL" }, { "attributeName": "F6", "attributeType": "TEXT" }, { "attributeName": "F7", "attributeType": "WEIGHTED_INT_SEQUENCE" }, { "attributeName": "F8", "attributeType": "WEIGHTED_STRING_SEQUENCE" } ],</p>
   *          <p>"excludedAttributeNames": [ "F6" ] }</p>
   */
  DataSchema?: string;

  /**
   * <p>Describes the schema location for an Amazon Redshift <code>DataSource</code>.</p>
   */
  DataSchemaUri?: string;

  /**
   * <p>Describes AWS Identity and Access Management (IAM) credentials that are used connect to the Amazon Redshift database.</p>
   */
  DatabaseCredentials: RedshiftDatabaseCredentials | undefined;

  /**
   * <p>Describes the <code>DatabaseName</code> and <code>ClusterIdentifier</code> for an Amazon Redshift <code>DataSource</code>.</p>
   */
  DatabaseInformation: RedshiftDatabase | undefined;

  /**
   * <p>Describes an Amazon S3 location to store the result set of the <code>SelectSqlQuery</code> query.</p>
   */
  S3StagingLocation: string | undefined;

  /**
   * <p>Describes the SQL Query to execute on an Amazon Redshift database for an Amazon Redshift <code>DataSource</code>.</p>
   */
  SelectSqlQuery: string | undefined;
}

export namespace RedshiftDataSpec {
  export const filterSensitiveLog = (obj: RedshiftDataSpec): any => ({
    ...obj
  });
  export const isa = (o: any): o is RedshiftDataSpec =>
    __isa(o, "RedshiftDataSpec");
}

/**
 * <p>Describes the <code>DataSource</code> details specific to Amazon Redshift.</p>
 */
export interface RedshiftMetadata {
  __type?: "RedshiftMetadata";
  /**
   * <p>A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster.
   *           The username should have sufficient permissions to execute the <code>RedshiftSelectSqlQuery</code> query. The username should be valid for an Amazon Redshift <a href="https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html">USER</a>.</p>
   */
  DatabaseUserName?: string;

  /**
   * <p>Describes the database details required to connect to an Amazon Redshift database.</p>
   */
  RedshiftDatabase?: RedshiftDatabase;

  /**
   * <p> The SQL query that is specified during <a>CreateDataSourceFromRedshift</a>. Returns only if <code>Verbose</code> is true in GetDataSourceInput. </p>
   */
  SelectSqlQuery?: string;
}

export namespace RedshiftMetadata {
  export const filterSensitiveLog = (obj: RedshiftMetadata): any => ({
    ...obj
  });
  export const isa = (o: any): o is RedshiftMetadata =>
    __isa(o, "RedshiftMetadata");
}

/**
 * <p>A specified resource cannot be located.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  code?: number;
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p> Describes the data specification of a <code>DataSource</code>.</p>
 */
export interface S3DataSpec {
  __type?: "S3DataSpec";
  /**
   * <p>The location of the data file(s) used by a <code>DataSource</code>. The URI specifies a data file or
   *             an Amazon Simple Storage Service (Amazon S3) directory or bucket containing data files.</p>
   */
  DataLocationS3: string | undefined;

  /**
   * <p>A JSON string that represents the splitting and rearrangement
   *     processing to be applied to a <code>DataSource</code>. If the <code>DataRearrangement</code>
   *     parameter is not provided, all of the input data is used to create the <code>Datasource</code>.</p>
   *
   *          <p>There are multiple parameters that control what data is used to create a datasource:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>percentBegin</code>
   *                   </b>
   *                </p>
   *                <p>Use <code>percentBegin</code> to indicate the beginning of the range of the data used to
   *         create the Datasource.
   *         If you do not include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML includes
   *         all of the data when creating the datasource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>percentEnd</code>
   *                   </b>
   *                </p>
   *                <p>Use <code>percentEnd</code> to indicate the end of the range of the data used to create the
   *         Datasource. If you do not
   *         include <code>percentBegin</code> and <code>percentEnd</code>, Amazon ML
   *         includes all of the data when creating the datasource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>complement</code>
   *                   </b>
   *                </p>
   *                <p>The <code>complement</code> parameter instructs Amazon ML to use the data that is
   *     not included in the range of <code>percentBegin</code> to <code>percentEnd</code> to create a
   *     datasource. The <code>complement</code> parameter is useful if you need to create
   *     complementary datasources for training and evaluation.
   *     To create a complementary datasource, use the same
   *     values for <code>percentBegin</code> and <code>percentEnd</code>, along with the
   *     <code>complement</code> parameter.</p>
   *
   *                <p>For example, the following two datasources do not share any data, and can be used to train and evaluate a model. The first datasource has 25 percent of the data, and the second one has 75 percent of the data.</p>
   *                <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":0, "percentEnd":25}}</code>
   *                </p>
   *                <p>Datasource for training: <code>{"splitting":{"percentBegin":0, "percentEnd":25, "complement":"true"}}</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>
   *                      <code>strategy</code>
   *                   </b>
   *                </p>
   *                <p>To change how Amazon ML splits the data for a datasource, use the <code>strategy</code> parameter.</p>
   *                <p>The default value for the <code>strategy</code> parameter
   *     is <code>sequential</code>, meaning that Amazon ML takes all of the data records between the <code>percentBegin</code>
   *     and <code>percentEnd</code> parameters for the datasource, in the order that the records appear in the input data.</p>
   *
   *                <p>The following two <code>DataRearrangement</code> lines are examples of sequentially ordered
   *     training and evaluation datasources:</p>
   *                <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential"}}</code>
   *                </p>
   *                <p>Datasource for training: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"sequential", "complement":"true"}}</code>
   *                </p>
   *
   *                <p>To randomly split the input data into the proportions indicated by the percentBegin and percentEnd
   *         parameters, set the <code>strategy</code> parameter to
   *     <code>random</code> and provide a string that is used as the seed value for the random data splitting (for
   *     example, you can use the S3 path to your data as the random seed string).
   *     If you choose the random split strategy,
   *     Amazon ML assigns each row of data a pseudo-random number between 0 and 100, and then selects the rows that have an assigned
   *     number between <code>percentBegin</code> and <code>percentEnd</code>. Pseudo-random numbers are assigned
   *     using both the input seed string value and the byte offset as a seed, so changing the data results in a
   *     different split. Any existing ordering is preserved.
   *     The random splitting strategy ensures that variables in the training and evaluation data are distributed similarly.
   *     It is useful in the cases where the input data may have an implicit sort order, which would otherwise result in
   *     training and evaluation datasources containing non-similar data records.</p>
   *                <p>The following two <code>DataRearrangement</code> lines are examples of non-sequentially ordered
   *     training and evaluation datasources:</p>
   *                <p>Datasource for evaluation: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "strategyParams": { "randomSeed":"RANDOMSEED"}}}</code>
   *                </p>
   *                <p>Datasource for training: <code>{"splitting":{"percentBegin":70, "percentEnd":100, "strategy":"random", "strategyParams": {"randomSeed":"RANDOMSEED"}, "complement":"true"}}</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  DataRearrangement?: string;

  /**
   * <p> A JSON string that represents the schema for an Amazon S3
   *             <code>DataSource</code>. The <code>DataSchema</code>
   *             defines the structure of the observation data in the data file(s)
   *             referenced in the <code>DataSource</code>.</p>
   *         <p>You must provide either the <code>DataSchema</code> or the <code>DataSchemaLocationS3</code>.</p>
   *         <p>Define your <code>DataSchema</code> as a series of key-value pairs. <code>attributes</code>
   *             and <code>excludedAttributeNames</code> have an array of key-value pairs
   *             for their value. Use the following format to define your <code>DataSchema</code>.</p>
   *         <p>{ "version": "1.0",</p>
   *          <p>"recordAnnotationFieldName": "F1",</p>
   *          <p>"recordWeightFieldName": "F2",</p>
   *          <p>"targetAttributeName": "F3",</p>
   *          <p>"dataFormat": "CSV",</p>
   *          <p>"dataFileContainsHeader": true,</p>
   *          <p>"attributes": [</p>
   *          <p>{ "attributeName": "F1", "attributeType": "TEXT" }, { "attributeName": "F2", "attributeType": "NUMERIC" }, { "attributeName": "F3", "attributeType": "CATEGORICAL" }, { "attributeName": "F4", "attributeType": "NUMERIC" }, { "attributeName": "F5", "attributeType": "CATEGORICAL" }, { "attributeName": "F6", "attributeType": "TEXT" }, { "attributeName": "F7", "attributeType": "WEIGHTED_INT_SEQUENCE" }, { "attributeName": "F8", "attributeType": "WEIGHTED_STRING_SEQUENCE" } ],</p>
   *          <p>"excludedAttributeNames": [ "F6" ] }</p>
   */
  DataSchema?: string;

  /**
   * <p>Describes the schema location in Amazon S3. You must provide either the
   *            <code>DataSchema</code> or the <code>DataSchemaLocationS3</code>.</p>
   */
  DataSchemaLocationS3?: string;
}

export namespace S3DataSpec {
  export const filterSensitiveLog = (obj: S3DataSpec): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3DataSpec => __isa(o, "S3DataSpec");
}

export enum SortOrder {
  ASC = "asc",
  DSC = "dsc"
}

/**
 * <p>A custom key-value pair associated with an ML object, such as an ML model.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>A unique identifier for the tag. Valid characters include Unicode letters, digits, white space, _, ., /, =, +, -, %, and @.</p>
   */
  Key?: string;

  /**
   * <p>An optional string, typically used to describe or define the tag. Valid characters include Unicode letters, digits, white space, _, ., /, =, +, -, %, and @.</p>
   */
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

export enum TaggableResourceType {
  BATCH_PREDICTION = "BatchPrediction",
  DATASOURCE = "DataSource",
  EVALUATION = "Evaluation",
  ML_MODEL = "MLModel"
}

/**
 * <p>The limit in the number of tags has been exceeded.</p>
 */
export interface TagLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "TagLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace TagLimitExceededException {
  export const filterSensitiveLog = (obj: TagLimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagLimitExceededException =>
    __isa(o, "TagLimitExceededException");
}

export interface UpdateBatchPredictionInput {
  __type?: "UpdateBatchPredictionInput";
  /**
   * <p>The ID assigned to the <code>BatchPrediction</code> during creation.</p>
   */
  BatchPredictionId: string | undefined;

  /**
   * <p>A new user-supplied name or description of the <code>BatchPrediction</code>.</p>
   */
  BatchPredictionName: string | undefined;
}

export namespace UpdateBatchPredictionInput {
  export const filterSensitiveLog = (obj: UpdateBatchPredictionInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateBatchPredictionInput =>
    __isa(o, "UpdateBatchPredictionInput");
}

/**
 * <p>Represents the output of an <code>UpdateBatchPrediction</code> operation.</p>
 *         <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>
 */
export interface UpdateBatchPredictionOutput {
  __type?: "UpdateBatchPredictionOutput";
  /**
   * <p>The ID assigned to the <code>BatchPrediction</code> during creation.  This value should be identical to the value
   *             of the <code>BatchPredictionId</code> in the request.</p>
   */
  BatchPredictionId?: string;
}

export namespace UpdateBatchPredictionOutput {
  export const filterSensitiveLog = (
    obj: UpdateBatchPredictionOutput
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateBatchPredictionOutput =>
    __isa(o, "UpdateBatchPredictionOutput");
}

export interface UpdateDataSourceInput {
  __type?: "UpdateDataSourceInput";
  /**
   * <p>The ID assigned to the <code>DataSource</code> during creation.</p>
   */
  DataSourceId: string | undefined;

  /**
   * <p>A new user-supplied name or description of the <code>DataSource</code> that will replace the current description. </p>
   */
  DataSourceName: string | undefined;
}

export namespace UpdateDataSourceInput {
  export const filterSensitiveLog = (obj: UpdateDataSourceInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDataSourceInput =>
    __isa(o, "UpdateDataSourceInput");
}

/**
 * <p>Represents the output of an <code>UpdateDataSource</code> operation.</p>
 *         <p>You can see the updated content by using the <code>GetBatchPrediction</code> operation.</p>
 */
export interface UpdateDataSourceOutput {
  __type?: "UpdateDataSourceOutput";
  /**
   * <p>The ID assigned to the <code>DataSource</code> during creation.  This value should be identical to the value
   *             of the <code>DataSourceID</code> in the request.</p>
   */
  DataSourceId?: string;
}

export namespace UpdateDataSourceOutput {
  export const filterSensitiveLog = (obj: UpdateDataSourceOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDataSourceOutput =>
    __isa(o, "UpdateDataSourceOutput");
}

export interface UpdateEvaluationInput {
  __type?: "UpdateEvaluationInput";
  /**
   * <p>The ID assigned to the <code>Evaluation</code> during creation.</p>
   */
  EvaluationId: string | undefined;

  /**
   * <p>A new user-supplied name or description of the <code>Evaluation</code> that will replace the current content. </p>
   */
  EvaluationName: string | undefined;
}

export namespace UpdateEvaluationInput {
  export const filterSensitiveLog = (obj: UpdateEvaluationInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateEvaluationInput =>
    __isa(o, "UpdateEvaluationInput");
}

/**
 * <p>Represents the output of an <code>UpdateEvaluation</code> operation.</p>
 *         <p>You can see the updated content by using the <code>GetEvaluation</code> operation.</p>
 */
export interface UpdateEvaluationOutput {
  __type?: "UpdateEvaluationOutput";
  /**
   * <p>The ID assigned to the <code>Evaluation</code> during creation.  This value should be identical to the value
   *             of the <code>Evaluation</code> in the request.</p>
   */
  EvaluationId?: string;
}

export namespace UpdateEvaluationOutput {
  export const filterSensitiveLog = (obj: UpdateEvaluationOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateEvaluationOutput =>
    __isa(o, "UpdateEvaluationOutput");
}

export interface UpdateMLModelInput {
  __type?: "UpdateMLModelInput";
  /**
   * <p>The ID assigned to the <code>MLModel</code> during creation.</p>
   */
  MLModelId: string | undefined;

  /**
   * <p>A user-supplied name or description of the <code>MLModel</code>.</p>
   */
  MLModelName?: string;

  /**
   * <p>The <code>ScoreThreshold</code> used in binary classification <code>MLModel</code> that marks the boundary between a positive prediction and a negative prediction.</p>
   *         <p>Output values greater than or equal to the <code>ScoreThreshold</code> receive a positive result from the <code>MLModel</code>, such as <code>true</code>. Output values less than the <code>ScoreThreshold</code> receive a negative response from the <code>MLModel</code>, such as <code>false</code>.</p>
   */
  ScoreThreshold?: number;
}

export namespace UpdateMLModelInput {
  export const filterSensitiveLog = (obj: UpdateMLModelInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateMLModelInput =>
    __isa(o, "UpdateMLModelInput");
}

/**
 * <p>Represents the output of an <code>UpdateMLModel</code> operation.</p>
 *         <p>You can see the updated content by using the <code>GetMLModel</code> operation.</p>
 */
export interface UpdateMLModelOutput {
  __type?: "UpdateMLModelOutput";
  /**
   * <p>The ID assigned to the <code>MLModel</code> during creation.  This value should be identical to the value
   *             of the <code>MLModelID</code> in the request.</p>
   */
  MLModelId?: string;
}

export namespace UpdateMLModelOutput {
  export const filterSensitiveLog = (obj: UpdateMLModelOutput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateMLModelOutput =>
    __isa(o, "UpdateMLModelOutput");
}
