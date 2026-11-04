// smithy-typescript generated code
import type {
  Algorithm,
  BatchPredictionFilterVariable,
  DataSourceFilterVariable,
  DetailsAttributes,
  EntityStatus,
  EvaluationFilterVariable,
  MLModelFilterVariable,
  MLModelType,
  RealtimeEndpointStatus,
  SortOrder,
  TaggableResourceType,
} from "./enums";

/**
 * A custom key-value pair associated with an ML object, such as an ML model.
 *
 * @public
 */
export interface Tag {
  /**
   * A unique identifier for the tag. Valid characters include Unicode letters, digits, white space, _, ., /, =, +, -, %, and @.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * An optional string, typically used to describe or define the tag. Valid characters include Unicode letters, digits, white space, _, ., /, =, +, -, %, and @.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface AddTagsInput {
  /**
   * The key-value pairs to use to create tags. If you specify a key without specifying a value, Amazon ML creates a tag with the specified key and a value of null.
   *
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * The ID of the ML object to tag. For example, `exampleModelId`.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The type of the ML object to tag.
   *
   * @public
   */
  ResourceType: TaggableResourceType | undefined;
}

/**
 * Amazon ML returns the following elements.
 *
 * @public
 */
export interface AddTagsOutput {
  /**
   * The ID of the ML object that was tagged.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of the ML object that was tagged.
   *
   * @public
   */
  ResourceType?: TaggableResourceType | undefined;
}

/**
 * @public
 */
export interface CreateBatchPredictionInput {
  /**
   * A user-supplied ID that uniquely identifies the `BatchPrediction`.
   *
   * @public
   */
  BatchPredictionId: string | undefined;

  /**
   * A user-supplied name or description of the `BatchPrediction`. `BatchPredictionName` can only use the UTF-8 character set.
   *
   * @public
   */
  BatchPredictionName?: string | undefined;

  /**
   * The ID of the `MLModel` that will generate predictions for the group of observations.
   *
   * @public
   */
  MLModelId: string | undefined;

  /**
   * The ID of the `DataSource` that points to the group of observations to predict.
   *
   * @public
   */
  BatchPredictionDataSourceId: string | undefined;

  /**
   * The location of an Amazon Simple Storage Service (Amazon S3) bucket or directory to store the batch prediction results. The following substrings are not allowed in the `s3 key` portion of the `outputURI` field: ':', '//', '/./', '/../'.
   *
   *
   *
   * Amazon ML needs permissions to store and retrieve the logs on your behalf. For information about how to set permissions, see the [Amazon Machine Learning Developer Guide](https://docs.aws.amazon.com/machine-learning/latest/dg).
   *
   * @public
   */
  OutputUri: string | undefined;
}

/**
 * Represents the output of a `CreateBatchPrediction` operation, and is an acknowledgement that Amazon ML received the request.
 *
 * The `CreateBatchPrediction` operation is asynchronous. You can poll for status updates by using the `>GetBatchPrediction` operation and checking the `Status` parameter of the result.
 *
 * @public
 */
export interface CreateBatchPredictionOutput {
  /**
   * A user-supplied ID that uniquely identifies the `BatchPrediction`. This value is identical to the value of the `BatchPredictionId` in the request.
   *
   * @public
   */
  BatchPredictionId?: string | undefined;
}

/**
 * The database credentials to connect to a database on an RDS DB instance.
 *
 * @public
 */
export interface RDSDatabaseCredentials {
  /**
   * The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an `RDSSelectSqlQuery` query.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The password to be used by Amazon ML to connect to a database on an RDS DB instance. The password should have sufficient permissions to execute the `RDSSelectQuery` query.
   *
   * @public
   */
  Password: string | undefined;
}

/**
 * The database details of an Amazon RDS database.
 *
 * @public
 */
export interface RDSDatabase {
  /**
   * The ID of an RDS DB instance.
   *
   * @public
   */
  InstanceIdentifier: string | undefined;

  /**
   * The name of a database hosted on an RDS DB instance.
   *
   * @public
   */
  DatabaseName: string | undefined;
}

/**
 * The data specification of an Amazon Relational Database Service (Amazon RDS) `DataSource`.
 *
 * @public
 */
export interface RDSDataSpec {
  /**
   * Describes the `DatabaseName` and `InstanceIdentifier` of an Amazon RDS database.
   *
   * @public
   */
  DatabaseInformation: RDSDatabase | undefined;

  /**
   * The query that is used to retrieve the observation data for the `DataSource`.
   *
   * @public
   */
  SelectSqlQuery: string | undefined;

  /**
   * The AWS Identity and Access Management (IAM) credentials that are used connect to the Amazon RDS database.
   *
   * @public
   */
  DatabaseCredentials: RDSDatabaseCredentials | undefined;

  /**
   * The Amazon S3 location for staging Amazon RDS data. The data retrieved from Amazon RDS using `SelectSqlQuery` is stored in this location.
   *
   * @public
   */
  S3StagingLocation: string | undefined;

  /**
   * A JSON string that represents the splitting and rearrangement processing to be applied to a `DataSource`. If the `DataRearrangement` parameter is not provided, all of the input data is used to create the `Datasource`.
   *
   * There are multiple parameters that control what data is used to create a datasource:
   *
   * - **`percentBegin`**
   *
   *   Use `percentBegin` to indicate the beginning of the range of the data used to create the Datasource. If you do not include `percentBegin` and `percentEnd`, Amazon ML includes all of the data when creating the datasource.
   * - **`percentEnd`**
   *
   *   Use `percentEnd` to indicate the end of the range of the data used to create the Datasource. If you do not include `percentBegin` and `percentEnd`, Amazon ML includes all of the data when creating the datasource.
   * - **`complement`**
   *
   *   The `complement` parameter instructs Amazon ML to use the data that is not included in the range of `percentBegin` to `percentEnd` to create a datasource. The `complement` parameter is useful if you need to create complementary datasources for training and evaluation. To create a complementary datasource, use the same values for `percentBegin` and `percentEnd`, along with the `complement` parameter.
   *
   *   For example, the following two datasources do not share any data, and can be used to train and evaluate a model. The first datasource has 25 percent of the data, and the second one has 75 percent of the data.
   *
   *   Datasource for evaluation: `\{"splitting":\{"percentBegin":0, "percentEnd":25\}\}`
   *
   *   Datasource for training: `\{"splitting":\{"percentBegin":0, "percentEnd":25, "complement":"true"\}\}`
   * - **`strategy`**
   *
   *   To change how Amazon ML splits the data for a datasource, use the `strategy` parameter.
   *
   *   The default value for the `strategy` parameter is `sequential`, meaning that Amazon ML takes all of the data records between the `percentBegin` and `percentEnd` parameters for the datasource, in the order that the records appear in the input data.
   *
   *   The following two `DataRearrangement` lines are examples of sequentially ordered training and evaluation datasources:
   *
   *   Datasource for evaluation: `\{"splitting":\{"percentBegin":70, "percentEnd":100, "strategy":"sequential"\}\}`
   *
   *   Datasource for training: `\{"splitting":\{"percentBegin":70, "percentEnd":100, "strategy":"sequential", "complement":"true"\}\}`
   *
   *   To randomly split the input data into the proportions indicated by the percentBegin and percentEnd parameters, set the `strategy` parameter to `random` and provide a string that is used as the seed value for the random data splitting (for example, you can use the S3 path to your data as the random seed string). If you choose the random split strategy, Amazon ML assigns each row of data a pseudo-random number between 0 and 100, and then selects the rows that have an assigned number between `percentBegin` and `percentEnd`. Pseudo-random numbers are assigned using both the input seed string value and the byte offset as a seed, so changing the data results in a different split. Any existing ordering is preserved. The random splitting strategy ensures that variables in the training and evaluation data are distributed similarly. It is useful in the cases where the input data may have an implicit sort order, which would otherwise result in training and evaluation datasources containing non-similar data records.
   *
   *   The following two `DataRearrangement` lines are examples of non-sequentially ordered training and evaluation datasources:
   *
   *   Datasource for evaluation: `\{"splitting":\{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv"\}\}`
   *
   *   Datasource for training: `\{"splitting":\{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv", "complement":"true"\}\}`
   *
   * @public
   */
  DataRearrangement?: string | undefined;

  /**
   * A JSON string that represents the schema for an Amazon RDS `DataSource`. The `DataSchema` defines the structure of the observation data in the data file(s) referenced in the `DataSource`.
   *
   * A `DataSchema` is not required if you specify a `DataSchemaUri`
   *
   * Define your `DataSchema` as a series of key-value pairs. `attributes` and `excludedVariableNames` have an array of key-value pairs for their value. Use the following format to define your `DataSchema`.
   *
   * \{ "version": "1.0",
   *
   * "recordAnnotationFieldName": "F1",
   *
   * "recordWeightFieldName": "F2",
   *
   * "targetFieldName": "F3",
   *
   * "dataFormat": "CSV",
   *
   * "dataFileContainsHeader": true,
   *
   * "attributes": [
   *
   * \{ "fieldName": "F1", "fieldType": "TEXT" \}, \{ "fieldName": "F2", "fieldType": "NUMERIC" \}, \{ "fieldName": "F3", "fieldType": "CATEGORICAL" \}, \{ "fieldName": "F4", "fieldType": "NUMERIC" \}, \{ "fieldName": "F5", "fieldType": "CATEGORICAL" \}, \{ "fieldName": "F6", "fieldType": "TEXT" \}, \{ "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" \}, \{ "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" \} ],
   *
   * "excludedVariableNames": [ "F6" ] \}
   *
   * @public
   */
  DataSchema?: string | undefined;

  /**
   * The Amazon S3 location of the `DataSchema`.
   *
   * @public
   */
  DataSchemaUri?: string | undefined;

  /**
   * The role (DataPipelineDefaultResourceRole) assumed by an Amazon Elastic Compute Cloud (Amazon EC2) instance to carry out the copy operation from Amazon RDS to an Amazon S3 task. For more information, see [Role templates](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html) for data pipelines.
   *
   * @public
   */
  ResourceRole: string | undefined;

  /**
   * The role (DataPipelineDefaultRole) assumed by AWS Data Pipeline service to monitor the progress of the copy task from Amazon RDS to Amazon S3. For more information, see [Role templates](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html) for data pipelines.
   *
   * @public
   */
  ServiceRole: string | undefined;

  /**
   * The subnet ID to be used to access a VPC-based RDS DB instance. This attribute is used by Data Pipeline to carry out the copy task from Amazon RDS to Amazon S3.
   *
   * @public
   */
  SubnetId: string | undefined;

  /**
   * The security group IDs to be used to access a VPC-based RDS DB instance. Ensure that there are appropriate ingress rules set up to allow access to the RDS DB instance. This attribute is used by Data Pipeline to carry out the copy operation from Amazon RDS to an Amazon S3 task.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceFromRDSInput {
  /**
   * A user-supplied ID that uniquely identifies the `DataSource`. Typically, an Amazon Resource Number (ARN) becomes the ID for a `DataSource`.
   *
   * @public
   */
  DataSourceId: string | undefined;

  /**
   * A user-supplied name or description of the `DataSource`.
   *
   * @public
   */
  DataSourceName?: string | undefined;

  /**
   * The data specification of an Amazon RDS `DataSource`:
   *
   * - DatabaseInformation -
   *
   *   - `DatabaseName` - The name of the Amazon RDS database.
   *   - `InstanceIdentifier` - A unique identifier for the Amazon RDS database instance.
   * - DatabaseCredentials - AWS Identity and Access Management (IAM) credentials that are used to connect to the Amazon RDS database.
   * - ResourceRole - A role (DataPipelineDefaultResourceRole) assumed by an EC2 instance to carry out the copy task from Amazon RDS to Amazon Simple Storage Service (Amazon S3). For more information, see [Role templates](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html) for data pipelines.
   * - ServiceRole - A role (DataPipelineDefaultRole) assumed by the AWS Data Pipeline service to monitor the progress of the copy task from Amazon RDS to Amazon S3. For more information, see [Role templates](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html) for data pipelines.
   * - SecurityInfo - The security information to use to access an RDS DB instance. You need to set up appropriate ingress rules for the security entity IDs provided to allow access to the Amazon RDS instance. Specify a [`SubnetId`, `SecurityGroupIds`] pair for a VPC-based RDS DB instance.
   * - SelectSqlQuery - A query that is used to retrieve the observation data for the `Datasource`.
   * - S3StagingLocation - The Amazon S3 location for staging Amazon RDS data. The data retrieved from Amazon RDS using `SelectSqlQuery` is stored in this location.
   * - DataSchemaUri - The Amazon S3 location of the `DataSchema`.
   * - DataSchema - A JSON string representing the schema. This is not required if `DataSchemaUri` is specified.
   * - DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the `Datasource`.
   *
   *   Sample - `"\{\"splitting\":\{\"percentBegin\":10,\"percentEnd\":60\}\}"`
   *
   * @public
   */
  RDSData: RDSDataSpec | undefined;

  /**
   * The role that Amazon ML assumes on behalf of the user to create and activate a data pipeline in the user's account and copy data using the `SelectSqlQuery` query from Amazon RDS to Amazon S3.
   *
   * @public
   */
  RoleARN: string | undefined;

  /**
   * The compute statistics for a `DataSource`. The statistics are generated from the observation data referenced by a `DataSource`. Amazon ML uses the statistics internally during `MLModel` training. This parameter must be set to `true` if the DataSource needs to be used for `MLModel` training.
   *
   * @public
   */
  ComputeStatistics?: boolean | undefined;
}

/**
 * Represents the output of a `CreateDataSourceFromRDS` operation, and is an acknowledgement that Amazon ML received the request.
 *
 * The `CreateDataSourceFromRDS`> operation is asynchronous. You can poll for updates by using the `GetBatchPrediction` operation and checking the `Status` parameter. You can inspect the `Message` when `Status` shows up as `FAILED`. You can also check the progress of the copy operation by going to the `DataPipeline` console and looking up the pipeline using the `pipelineId` from the describe call.
 *
 * @public
 */
export interface CreateDataSourceFromRDSOutput {
  /**
   * A user-supplied ID that uniquely identifies the datasource. This value should be identical to the value of the `DataSourceID` in the request.
   *
   * @public
   */
  DataSourceId?: string | undefined;
}

/**
 * Describes the database credentials for connecting to a database on an Amazon Redshift cluster.
 *
 * @public
 */
export interface RedshiftDatabaseCredentials {
  /**
   * A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the `RedshiftSelectSqlQuery` query. The username should be valid for an Amazon Redshift [USER](https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html).
   *
   * @public
   */
  Username: string | undefined;

  /**
   * A password to be used by Amazon ML to connect to a database on an Amazon Redshift cluster. The password should have sufficient permissions to execute a `RedshiftSelectSqlQuery` query. The password should be valid for an Amazon Redshift [USER](https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html).
   *
   * @public
   */
  Password: string | undefined;
}

/**
 * Describes the database details required to connect to an Amazon Redshift database.
 *
 * @public
 */
export interface RedshiftDatabase {
  /**
   * The name of a database hosted on an Amazon Redshift cluster.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The ID of an Amazon Redshift cluster.
   *
   * @public
   */
  ClusterIdentifier: string | undefined;
}

/**
 * Describes the data specification of an Amazon Redshift `DataSource`.
 *
 * @public
 */
export interface RedshiftDataSpec {
  /**
   * Describes the `DatabaseName` and `ClusterIdentifier` for an Amazon Redshift `DataSource`.
   *
   * @public
   */
  DatabaseInformation: RedshiftDatabase | undefined;

  /**
   * Describes the SQL Query to execute on an Amazon Redshift database for an Amazon Redshift `DataSource`.
   *
   * @public
   */
  SelectSqlQuery: string | undefined;

  /**
   * Describes AWS Identity and Access Management (IAM) credentials that are used connect to the Amazon Redshift database.
   *
   * @public
   */
  DatabaseCredentials: RedshiftDatabaseCredentials | undefined;

  /**
   * Describes an Amazon S3 location to store the result set of the `SelectSqlQuery` query.
   *
   * @public
   */
  S3StagingLocation: string | undefined;

  /**
   * A JSON string that represents the splitting and rearrangement processing to be applied to a `DataSource`. If the `DataRearrangement` parameter is not provided, all of the input data is used to create the `Datasource`.
   *
   * There are multiple parameters that control what data is used to create a datasource:
   *
   * - **`percentBegin`**
   *
   *   Use `percentBegin` to indicate the beginning of the range of the data used to create the Datasource. If you do not include `percentBegin` and `percentEnd`, Amazon ML includes all of the data when creating the datasource.
   * - **`percentEnd`**
   *
   *   Use `percentEnd` to indicate the end of the range of the data used to create the Datasource. If you do not include `percentBegin` and `percentEnd`, Amazon ML includes all of the data when creating the datasource.
   * - **`complement`**
   *
   *   The `complement` parameter instructs Amazon ML to use the data that is not included in the range of `percentBegin` to `percentEnd` to create a datasource. The `complement` parameter is useful if you need to create complementary datasources for training and evaluation. To create a complementary datasource, use the same values for `percentBegin` and `percentEnd`, along with the `complement` parameter.
   *
   *   For example, the following two datasources do not share any data, and can be used to train and evaluate a model. The first datasource has 25 percent of the data, and the second one has 75 percent of the data.
   *
   *   Datasource for evaluation: `\{"splitting":\{"percentBegin":0, "percentEnd":25\}\}`
   *
   *   Datasource for training: `\{"splitting":\{"percentBegin":0, "percentEnd":25, "complement":"true"\}\}`
   * - **`strategy`**
   *
   *   To change how Amazon ML splits the data for a datasource, use the `strategy` parameter.
   *
   *   The default value for the `strategy` parameter is `sequential`, meaning that Amazon ML takes all of the data records between the `percentBegin` and `percentEnd` parameters for the datasource, in the order that the records appear in the input data.
   *
   *   The following two `DataRearrangement` lines are examples of sequentially ordered training and evaluation datasources:
   *
   *   Datasource for evaluation: `\{"splitting":\{"percentBegin":70, "percentEnd":100, "strategy":"sequential"\}\}`
   *
   *   Datasource for training: `\{"splitting":\{"percentBegin":70, "percentEnd":100, "strategy":"sequential", "complement":"true"\}\}`
   *
   *   To randomly split the input data into the proportions indicated by the percentBegin and percentEnd parameters, set the `strategy` parameter to `random` and provide a string that is used as the seed value for the random data splitting (for example, you can use the S3 path to your data as the random seed string). If you choose the random split strategy, Amazon ML assigns each row of data a pseudo-random number between 0 and 100, and then selects the rows that have an assigned number between `percentBegin` and `percentEnd`. Pseudo-random numbers are assigned using both the input seed string value and the byte offset as a seed, so changing the data results in a different split. Any existing ordering is preserved. The random splitting strategy ensures that variables in the training and evaluation data are distributed similarly. It is useful in the cases where the input data may have an implicit sort order, which would otherwise result in training and evaluation datasources containing non-similar data records.
   *
   *   The following two `DataRearrangement` lines are examples of non-sequentially ordered training and evaluation datasources:
   *
   *   Datasource for evaluation: `\{"splitting":\{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv"\}\}`
   *
   *   Datasource for training: `\{"splitting":\{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv", "complement":"true"\}\}`
   *
   * @public
   */
  DataRearrangement?: string | undefined;

  /**
   * A JSON string that represents the schema for an Amazon Redshift `DataSource`. The `DataSchema` defines the structure of the observation data in the data file(s) referenced in the `DataSource`.
   *
   * A `DataSchema` is not required if you specify a `DataSchemaUri`.
   *
   * Define your `DataSchema` as a series of key-value pairs. `attributes` and `excludedVariableNames` have an array of key-value pairs for their value. Use the following format to define your `DataSchema`.
   *
   * \{ "version": "1.0",
   *
   * "recordAnnotationFieldName": "F1",
   *
   * "recordWeightFieldName": "F2",
   *
   * "targetFieldName": "F3",
   *
   * "dataFormat": "CSV",
   *
   * "dataFileContainsHeader": true,
   *
   * "attributes": [
   *
   * \{ "fieldName": "F1", "fieldType": "TEXT" \}, \{ "fieldName": "F2", "fieldType": "NUMERIC" \}, \{ "fieldName": "F3", "fieldType": "CATEGORICAL" \}, \{ "fieldName": "F4", "fieldType": "NUMERIC" \}, \{ "fieldName": "F5", "fieldType": "CATEGORICAL" \}, \{ "fieldName": "F6", "fieldType": "TEXT" \}, \{ "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" \}, \{ "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" \} ],
   *
   * "excludedVariableNames": [ "F6" ] \}
   *
   * @public
   */
  DataSchema?: string | undefined;

  /**
   * Describes the schema location for an Amazon Redshift `DataSource`.
   *
   * @public
   */
  DataSchemaUri?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceFromRedshiftInput {
  /**
   * A user-supplied ID that uniquely identifies the `DataSource`.
   *
   * @public
   */
  DataSourceId: string | undefined;

  /**
   * A user-supplied name or description of the `DataSource`.
   *
   * @public
   */
  DataSourceName?: string | undefined;

  /**
   * The data specification of an Amazon Redshift `DataSource`:
   *
   * - DatabaseInformation -
   *
   *   - `DatabaseName` - The name of the Amazon Redshift database.
   *   - `ClusterIdentifier` - The unique ID for the Amazon Redshift cluster.
   * - DatabaseCredentials - The AWS Identity and Access Management (IAM) credentials that are used to connect to the Amazon Redshift database.
   * - SelectSqlQuery - The query that is used to retrieve the observation data for the `Datasource`.
   * - S3StagingLocation - The Amazon Simple Storage Service (Amazon S3) location for staging Amazon Redshift data. The data retrieved from Amazon Redshift using the `SelectSqlQuery` query is stored in this location.
   * - DataSchemaUri - The Amazon S3 location of the `DataSchema`.
   * - DataSchema - A JSON string representing the schema. This is not required if `DataSchemaUri` is specified.
   * - DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the `DataSource`.
   *
   *   Sample - `"\{\"splitting\":\{\"percentBegin\":10,\"percentEnd\":60\}\}"`
   *
   * @public
   */
  DataSpec: RedshiftDataSpec | undefined;

  /**
   * A fully specified role Amazon Resource Name (ARN). Amazon ML assumes the role on behalf of the user to create the following:
   *
   *
   *
   * - A security group to allow Amazon ML to execute the `SelectSqlQuery` query on an Amazon Redshift cluster
   * - An Amazon S3 bucket policy to grant Amazon ML read/write permissions on the `S3StagingLocation`
   *
   * @public
   */
  RoleARN: string | undefined;

  /**
   * The compute statistics for a `DataSource`. The statistics are generated from the observation data referenced by a `DataSource`. Amazon ML uses the statistics internally during `MLModel` training. This parameter must be set to `true` if the `DataSource` needs to be used for `MLModel` training.
   *
   * @public
   */
  ComputeStatistics?: boolean | undefined;
}

/**
 * Represents the output of a `CreateDataSourceFromRedshift` operation, and is an acknowledgement that Amazon ML received the request.
 *
 * The `CreateDataSourceFromRedshift` operation is asynchronous. You can poll for updates by using the `GetBatchPrediction` operation and checking the `Status` parameter.
 *
 * @public
 */
export interface CreateDataSourceFromRedshiftOutput {
  /**
   * A user-supplied ID that uniquely identifies the datasource. This value should be identical to the value of the `DataSourceID` in the request.
   *
   * @public
   */
  DataSourceId?: string | undefined;
}

/**
 * Describes the data specification of a `DataSource`.
 *
 * @public
 */
export interface S3DataSpec {
  /**
   * The location of the data file(s) used by a `DataSource`. The URI specifies a data file or an Amazon Simple Storage Service (Amazon S3) directory or bucket containing data files.
   *
   * @public
   */
  DataLocationS3: string | undefined;

  /**
   * A JSON string that represents the splitting and rearrangement processing to be applied to a `DataSource`. If the `DataRearrangement` parameter is not provided, all of the input data is used to create the `Datasource`.
   *
   * There are multiple parameters that control what data is used to create a datasource:
   *
   * - **`percentBegin`**
   *
   *   Use `percentBegin` to indicate the beginning of the range of the data used to create the Datasource. If you do not include `percentBegin` and `percentEnd`, Amazon ML includes all of the data when creating the datasource.
   * - **`percentEnd`**
   *
   *   Use `percentEnd` to indicate the end of the range of the data used to create the Datasource. If you do not include `percentBegin` and `percentEnd`, Amazon ML includes all of the data when creating the datasource.
   * - **`complement`**
   *
   *   The `complement` parameter instructs Amazon ML to use the data that is not included in the range of `percentBegin` to `percentEnd` to create a datasource. The `complement` parameter is useful if you need to create complementary datasources for training and evaluation. To create a complementary datasource, use the same values for `percentBegin` and `percentEnd`, along with the `complement` parameter.
   *
   *   For example, the following two datasources do not share any data, and can be used to train and evaluate a model. The first datasource has 25 percent of the data, and the second one has 75 percent of the data.
   *
   *   Datasource for evaluation: `\{"splitting":\{"percentBegin":0, "percentEnd":25\}\}`
   *
   *   Datasource for training: `\{"splitting":\{"percentBegin":0, "percentEnd":25, "complement":"true"\}\}`
   * - **`strategy`**
   *
   *   To change how Amazon ML splits the data for a datasource, use the `strategy` parameter.
   *
   *   The default value for the `strategy` parameter is `sequential`, meaning that Amazon ML takes all of the data records between the `percentBegin` and `percentEnd` parameters for the datasource, in the order that the records appear in the input data.
   *
   *   The following two `DataRearrangement` lines are examples of sequentially ordered training and evaluation datasources:
   *
   *   Datasource for evaluation: `\{"splitting":\{"percentBegin":70, "percentEnd":100, "strategy":"sequential"\}\}`
   *
   *   Datasource for training: `\{"splitting":\{"percentBegin":70, "percentEnd":100, "strategy":"sequential", "complement":"true"\}\}`
   *
   *   To randomly split the input data into the proportions indicated by the percentBegin and percentEnd parameters, set the `strategy` parameter to `random` and provide a string that is used as the seed value for the random data splitting (for example, you can use the S3 path to your data as the random seed string). If you choose the random split strategy, Amazon ML assigns each row of data a pseudo-random number between 0 and 100, and then selects the rows that have an assigned number between `percentBegin` and `percentEnd`. Pseudo-random numbers are assigned using both the input seed string value and the byte offset as a seed, so changing the data results in a different split. Any existing ordering is preserved. The random splitting strategy ensures that variables in the training and evaluation data are distributed similarly. It is useful in the cases where the input data may have an implicit sort order, which would otherwise result in training and evaluation datasources containing non-similar data records.
   *
   *   The following two `DataRearrangement` lines are examples of non-sequentially ordered training and evaluation datasources:
   *
   *   Datasource for evaluation: `\{"splitting":\{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv"\}\}`
   *
   *   Datasource for training: `\{"splitting":\{"percentBegin":70, "percentEnd":100, "strategy":"random", "randomSeed"="s3://my_s3_path/bucket/file.csv", "complement":"true"\}\}`
   *
   * @public
   */
  DataRearrangement?: string | undefined;

  /**
   * A JSON string that represents the schema for an Amazon S3 `DataSource`. The `DataSchema` defines the structure of the observation data in the data file(s) referenced in the `DataSource`.
   *
   * You must provide either the `DataSchema` or the `DataSchemaLocationS3`.
   *
   * Define your `DataSchema` as a series of key-value pairs. `attributes` and `excludedVariableNames` have an array of key-value pairs for their value. Use the following format to define your `DataSchema`.
   *
   * \{ "version": "1.0",
   *
   * "recordAnnotationFieldName": "F1",
   *
   * "recordWeightFieldName": "F2",
   *
   * "targetFieldName": "F3",
   *
   * "dataFormat": "CSV",
   *
   * "dataFileContainsHeader": true,
   *
   * "attributes": [
   *
   * \{ "fieldName": "F1", "fieldType": "TEXT" \}, \{ "fieldName": "F2", "fieldType": "NUMERIC" \}, \{ "fieldName": "F3", "fieldType": "CATEGORICAL" \}, \{ "fieldName": "F4", "fieldType": "NUMERIC" \}, \{ "fieldName": "F5", "fieldType": "CATEGORICAL" \}, \{ "fieldName": "F6", "fieldType": "TEXT" \}, \{ "fieldName": "F7", "fieldType": "WEIGHTED_INT_SEQUENCE" \}, \{ "fieldName": "F8", "fieldType": "WEIGHTED_STRING_SEQUENCE" \} ],
   *
   * "excludedVariableNames": [ "F6" ] \}
   *
   * @public
   */
  DataSchema?: string | undefined;

  /**
   * Describes the schema location in Amazon S3. You must provide either the `DataSchema` or the `DataSchemaLocationS3`.
   *
   * @public
   */
  DataSchemaLocationS3?: string | undefined;
}

/**
 * @public
 */
export interface CreateDataSourceFromS3Input {
  /**
   * A user-supplied identifier that uniquely identifies the `DataSource`.
   *
   * @public
   */
  DataSourceId: string | undefined;

  /**
   * A user-supplied name or description of the `DataSource`.
   *
   * @public
   */
  DataSourceName?: string | undefined;

  /**
   * The data specification of a `DataSource`:
   *
   * - DataLocationS3 - The Amazon S3 location of the observation data.
   * - DataSchemaLocationS3 - The Amazon S3 location of the `DataSchema`.
   * - DataSchema - A JSON string representing the schema. This is not required if `DataSchemaUri` is specified.
   * - DataRearrangement - A JSON string that represents the splitting and rearrangement requirements for the `Datasource`.
   *
   *   Sample - `"\{\"splitting\":\{\"percentBegin\":10,\"percentEnd\":60\}\}"`
   *
   * @public
   */
  DataSpec: S3DataSpec | undefined;

  /**
   * The compute statistics for a `DataSource`. The statistics are generated from the observation data referenced by a `DataSource`. Amazon ML uses the statistics internally during `MLModel` training. This parameter must be set to `true` if the DataSource needs to be used for `MLModel` training.
   *
   * @public
   */
  ComputeStatistics?: boolean | undefined;
}

/**
 * Represents the output of a `CreateDataSourceFromS3` operation, and is an acknowledgement that Amazon ML received the request.
 *
 * The `CreateDataSourceFromS3` operation is asynchronous. You can poll for updates by using the `GetBatchPrediction` operation and checking the `Status` parameter.
 *
 * @public
 */
export interface CreateDataSourceFromS3Output {
  /**
   * A user-supplied ID that uniquely identifies the `DataSource`. This value should be identical to the value of the `DataSourceID` in the request.
   *
   * @public
   */
  DataSourceId?: string | undefined;
}

/**
 * @public
 */
export interface CreateEvaluationInput {
  /**
   * A user-supplied ID that uniquely identifies the `Evaluation`.
   *
   * @public
   */
  EvaluationId: string | undefined;

  /**
   * A user-supplied name or description of the `Evaluation`.
   *
   * @public
   */
  EvaluationName?: string | undefined;

  /**
   * The ID of the `MLModel` to evaluate.
   *
   *
   *
   * The schema used in creating the `MLModel` must match the schema of the `DataSource` used in the `Evaluation`.
   *
   * @public
   */
  MLModelId: string | undefined;

  /**
   * The ID of the `DataSource` for the evaluation. The schema of the `DataSource` must match the schema used to create the `MLModel`.
   *
   * @public
   */
  EvaluationDataSourceId: string | undefined;
}

/**
 * Represents the output of a `CreateEvaluation` operation, and is an acknowledgement that Amazon ML received the request.
 *
 * `CreateEvaluation` operation is asynchronous. You can poll for status updates by using the `GetEvcaluation` operation and checking the `Status` parameter.
 *
 * @public
 */
export interface CreateEvaluationOutput {
  /**
   * The user-supplied ID that uniquely identifies the `Evaluation`. This value should be identical to the value of the `EvaluationId` in the request.
   *
   * @public
   */
  EvaluationId?: string | undefined;
}

/**
 * @public
 */
export interface CreateMLModelInput {
  /**
   * A user-supplied ID that uniquely identifies the `MLModel`.
   *
   * @public
   */
  MLModelId: string | undefined;

  /**
   * A user-supplied name or description of the `MLModel`.
   *
   * @public
   */
  MLModelName?: string | undefined;

  /**
   * The category of supervised learning that this `MLModel` will address. Choose from the following types:
   *
   * - Choose `REGRESSION` if the `MLModel` will be used to predict a numeric value.
   * - Choose `BINARY` if the `MLModel` result has two possible values.
   * - Choose `MULTICLASS` if the `MLModel` result has a limited number of values.
   *
   * For more information, see the [Amazon Machine Learning Developer Guide](https://docs.aws.amazon.com/machine-learning/latest/dg).
   *
   * @public
   */
  MLModelType: MLModelType | undefined;

  /**
   * A list of the training parameters in the `MLModel`. The list is implemented as a map of key-value pairs.
   *
   * The following is the current set of training parameters:
   *
   * - `sgd.maxMLModelSizeInBytes` - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance.
   *
   *   The value is an integer that ranges from `100000` to `2147483648`. The default value is `33554432`.
   * - `sgd.maxPasses` - The number of times that the training process traverses the observations to build the `MLModel`. The value is an integer that ranges from `1` to `10000`. The default value is `10`.
   * - `sgd.shuffleType` - Whether Amazon ML shuffles the training data. Shuffling the data improves a model's ability to find the optimal solution for a variety of data types. The valid values are `auto` and `none`. The default value is `none`. We strongly recommend that you shuffle your data.
   * - `sgd.l1RegularizationAmount` - The coefficient regularization L1 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to zero, resulting in a sparse feature set. If you use this parameter, start by specifying a small value, such as `1.0E-08`.
   *
   *   The value is a double that ranges from `0` to `MAX_DOUBLE`. The default is to not use L1 normalization. This parameter can't be used when `L2` is specified. Use this parameter sparingly.
   * - `sgd.l2RegularizationAmount` - The coefficient regularization L2 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as `1.0E-08`.
   *
   *   The value is a double that ranges from `0` to `MAX_DOUBLE`. The default is to not use L2 normalization. This parameter can't be used when `L1` is specified. Use this parameter sparingly.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;

  /**
   * The `DataSource` that points to the training data.
   *
   * @public
   */
  TrainingDataSourceId: string | undefined;

  /**
   * The data recipe for creating the `MLModel`. You must specify either the recipe or its URI. If you don't specify a recipe or its URI, Amazon ML creates a default.
   *
   * @public
   */
  Recipe?: string | undefined;

  /**
   * The Amazon Simple Storage Service (Amazon S3) location and file name that contains the `MLModel` recipe. You must specify either the recipe or its URI. If you don't specify a recipe or its URI, Amazon ML creates a default.
   *
   * @public
   */
  RecipeUri?: string | undefined;
}

/**
 * Represents the output of a `CreateMLModel` operation, and is an acknowledgement that Amazon ML received the request.
 *
 * The `CreateMLModel` operation is asynchronous. You can poll for status updates by using the `GetMLModel` operation and checking the `Status` parameter.
 *
 * @public
 */
export interface CreateMLModelOutput {
  /**
   * A user-supplied ID that uniquely identifies the `MLModel`. This value should be identical to the value of the `MLModelId` in the request.
   *
   * @public
   */
  MLModelId?: string | undefined;
}

/**
 * @public
 */
export interface CreateRealtimeEndpointInput {
  /**
   * The ID assigned to the `MLModel` during creation.
   *
   * @public
   */
  MLModelId: string | undefined;
}

/**
 * Describes the real-time endpoint information for an `MLModel`.
 *
 * @public
 */
export interface RealtimeEndpointInfo {
  /**
   * The maximum processing rate for the real-time endpoint for `MLModel`, measured in incoming requests per second.
   *
   * @public
   */
  PeakRequestsPerSecond?: number | undefined;

  /**
   * The time that the request to create the real-time endpoint for the `MLModel` was received. The time is expressed in epoch time.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The URI that specifies where to send real-time prediction requests for the `MLModel`.
   *
   * **Note:** The application must wait until the real-time endpoint is ready before using this URI.
   *
   * @public
   */
  EndpointUrl?: string | undefined;

  /**
   * The current status of the real-time endpoint for the `MLModel`. This element can have one of the following values:
   *
   * - `NONE` - Endpoint does not exist or was previously deleted.
   * - `READY` - Endpoint is ready to be used for real-time predictions.
   * - `UPDATING` - Updating/creating the endpoint.
   *
   * @public
   */
  EndpointStatus?: RealtimeEndpointStatus | undefined;
}

/**
 * Represents the output of an `CreateRealtimeEndpoint` operation.
 *
 * The result contains the `MLModelId` and the endpoint information for the `MLModel`.
 *
 * **Note:** The endpoint information includes the URI of the `MLModel`; that is, the location to send online prediction requests for the specified `MLModel`.
 *
 * @public
 */
export interface CreateRealtimeEndpointOutput {
  /**
   * A user-supplied ID that uniquely identifies the `MLModel`. This value should be identical to the value of the `MLModelId` in the request.
   *
   * @public
   */
  MLModelId?: string | undefined;

  /**
   * The endpoint information of the `MLModel`
   *
   * @public
   */
  RealtimeEndpointInfo?: RealtimeEndpointInfo | undefined;
}

/**
 * @public
 */
export interface DeleteBatchPredictionInput {
  /**
   * A user-supplied ID that uniquely identifies the `BatchPrediction`.
   *
   * @public
   */
  BatchPredictionId: string | undefined;
}

/**
 * Represents the output of a `DeleteBatchPrediction` operation.
 *
 *
 *
 * You can use the `GetBatchPrediction` operation and check the value of the `Status` parameter to see whether a `BatchPrediction` is marked as `DELETED`.
 *
 * @public
 */
export interface DeleteBatchPredictionOutput {
  /**
   * A user-supplied ID that uniquely identifies the `BatchPrediction`. This value should be identical to the value of the `BatchPredictionID` in the request.
   *
   * @public
   */
  BatchPredictionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataSourceInput {
  /**
   * A user-supplied ID that uniquely identifies the `DataSource`.
   *
   * @public
   */
  DataSourceId: string | undefined;
}

/**
 * Represents the output of a `DeleteDataSource` operation.
 *
 * @public
 */
export interface DeleteDataSourceOutput {
  /**
   * A user-supplied ID that uniquely identifies the `DataSource`. This value should be identical to the value of the `DataSourceID` in the request.
   *
   * @public
   */
  DataSourceId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteEvaluationInput {
  /**
   * A user-supplied ID that uniquely identifies the `Evaluation` to delete.
   *
   * @public
   */
  EvaluationId: string | undefined;
}

/**
 * Represents the output of a `DeleteEvaluation` operation. The output indicates that Amazon Machine Learning (Amazon ML) received the request.
 *
 * You can use the `GetEvaluation` operation and check the value of the `Status` parameter to see whether an `Evaluation` is marked as `DELETED`.
 *
 * @public
 */
export interface DeleteEvaluationOutput {
  /**
   * A user-supplied ID that uniquely identifies the `Evaluation`. This value should be identical to the value of the `EvaluationId` in the request.
   *
   * @public
   */
  EvaluationId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteMLModelInput {
  /**
   * A user-supplied ID that uniquely identifies the `MLModel`.
   *
   * @public
   */
  MLModelId: string | undefined;
}

/**
 * Represents the output of a `DeleteMLModel` operation.
 *
 * You can use the `GetMLModel` operation and check the value of the `Status` parameter to see whether an `MLModel` is marked as `DELETED`.
 *
 * @public
 */
export interface DeleteMLModelOutput {
  /**
   * A user-supplied ID that uniquely identifies the `MLModel`. This value should be identical to the value of the `MLModelID` in the request.
   *
   * @public
   */
  MLModelId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteRealtimeEndpointInput {
  /**
   * The ID assigned to the `MLModel` during creation.
   *
   * @public
   */
  MLModelId: string | undefined;
}

/**
 * Represents the output of an `DeleteRealtimeEndpoint` operation.
 *
 * The result contains the `MLModelId` and the endpoint information for the `MLModel`.
 *
 * @public
 */
export interface DeleteRealtimeEndpointOutput {
  /**
   * A user-supplied ID that uniquely identifies the `MLModel`. This value should be identical to the value of the `MLModelId` in the request.
   *
   * @public
   */
  MLModelId?: string | undefined;

  /**
   * The endpoint information of the `MLModel`
   *
   * @public
   */
  RealtimeEndpointInfo?: RealtimeEndpointInfo | undefined;
}

/**
 * @public
 */
export interface DeleteTagsInput {
  /**
   * One or more tags to delete.
   *
   * @public
   */
  TagKeys: string[] | undefined;

  /**
   * The ID of the tagged ML object. For example, `exampleModelId`.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The type of the tagged ML object.
   *
   * @public
   */
  ResourceType: TaggableResourceType | undefined;
}

/**
 * Amazon ML returns the following elements.
 *
 * @public
 */
export interface DeleteTagsOutput {
  /**
   * The ID of the ML object from which tags were deleted.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of the ML object from which tags were deleted.
   *
   * @public
   */
  ResourceType?: TaggableResourceType | undefined;
}

/**
 * @public
 */
export interface DescribeBatchPredictionsInput {
  /**
   * Use one of the following variables to filter a list of `BatchPrediction`:
   *
   * - `CreatedAt` - Sets the search criteria to the `BatchPrediction` creation date.
   * - `Status` - Sets the search criteria to the `BatchPrediction` status.
   * - `Name` - Sets the search criteria to the contents of the `BatchPrediction` `Name`.
   * - `IAMUser` - Sets the search criteria to the user account that invoked the `BatchPrediction` creation.
   * - `MLModelId` - Sets the search criteria to the `MLModel` used in the `BatchPrediction`.
   * - `DataSourceId` - Sets the search criteria to the `DataSource` used in the `BatchPrediction`.
   * - `DataURI` - Sets the search criteria to the data file(s) used in the `BatchPrediction`. The URL can identify either a file or an Amazon Simple Storage Solution (Amazon S3) bucket or directory.
   *
   * @public
   */
  FilterVariable?: BatchPredictionFilterVariable | undefined;

  /**
   * The equal to operator. The `BatchPrediction` results will have `FilterVariable` values that exactly match the value specified with `EQ`.
   *
   * @public
   */
  EQ?: string | undefined;

  /**
   * The greater than operator. The `BatchPrediction` results will have `FilterVariable` values that are greater than the value specified with `GT`.
   *
   * @public
   */
  GT?: string | undefined;

  /**
   * The less than operator. The `BatchPrediction` results will have `FilterVariable` values that are less than the value specified with `LT`.
   *
   * @public
   */
  LT?: string | undefined;

  /**
   * The greater than or equal to operator. The `BatchPrediction` results will have `FilterVariable` values that are greater than or equal to the value specified with `GE`.
   *
   * @public
   */
  GE?: string | undefined;

  /**
   * The less than or equal to operator. The `BatchPrediction` results will have `FilterVariable` values that are less than or equal to the value specified with `LE`.
   *
   * @public
   */
  LE?: string | undefined;

  /**
   * The not equal to operator. The `BatchPrediction` results will have `FilterVariable` values not equal to the value specified with `NE`.
   *
   * @public
   */
  NE?: string | undefined;

  /**
   * A string that is found at the beginning of a variable, such as `Name` or `Id`.
   *
   *
   *
   * For example, a `Batch Prediction` operation could have the `Name` `2014-09-09-HolidayGiftMailer`. To search for this `BatchPrediction`, select `Name` for the `FilterVariable` and any of the following strings for the `Prefix`:
   *
   *
   *
   * - 2014-09
   * - 2014-09-09
   * - 2014-09-09-Holiday
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A two-value parameter that determines the sequence of the resulting list of `MLModel`s.
   *
   * - `asc` - Arranges the list in ascending order (A-Z, 0-9).
   * - `dsc` - Arranges the list in descending order (Z-A, 9-0).
   *
   * Results are sorted by `FilterVariable`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * An ID of the page in the paginated results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of pages of information to include in the result. The range of acceptable values is `1` through `100`. The default value is `100`.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Represents the output of a `GetBatchPrediction` operation.
 *
 * The content consists of the detailed metadata, the status, and the data file information of a `Batch Prediction`.
 *
 * @public
 */
export interface BatchPrediction {
  /**
   * The ID assigned to the `BatchPrediction` at creation. This value should be identical to the value of the `BatchPredictionID` in the request.
   *
   * @public
   */
  BatchPredictionId?: string | undefined;

  /**
   * The ID of the `MLModel` that generated predictions for the `BatchPrediction` request.
   *
   * @public
   */
  MLModelId?: string | undefined;

  /**
   * The ID of the `DataSource` that points to the group of observations to predict.
   *
   * @public
   */
  BatchPredictionDataSourceId?: string | undefined;

  /**
   * The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).
   *
   * @public
   */
  InputDataLocationS3?: string | undefined;

  /**
   * The AWS user account that invoked the `BatchPrediction`. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.
   *
   * @public
   */
  CreatedByIamUser?: string | undefined;

  /**
   * The time that the `BatchPrediction` was created. The time is expressed in epoch time.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time of the most recent edit to the `BatchPrediction`. The time is expressed in epoch time.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * A user-supplied name or description of the `BatchPrediction`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the `BatchPrediction`. This element can have one of the following values:
   *
   * - `PENDING` - Amazon Machine Learning (Amazon ML) submitted a request to generate predictions for a batch of observations.
   * - `INPROGRESS` - The process is underway.
   * - `FAILED` - The request to perform a batch prediction did not run to completion. It is not usable.
   * - `COMPLETED` - The batch prediction process completed successfully.
   * - `DELETED` - The `BatchPrediction` is marked as deleted. It is not usable.
   *
   * @public
   */
  Status?: EntityStatus | undefined;

  /**
   * The location of an Amazon S3 bucket or directory to receive the operation results. The following substrings are not allowed in the `s3 key` portion of the `outputURI` field: ':', '//', '/./', '/../'.
   *
   * @public
   */
  OutputUri?: string | undefined;

  /**
   * A description of the most recent details about processing the batch prediction request.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Long integer type that is a 64-bit signed number.
   *
   * @public
   */
  ComputeTime?: number | undefined;

  /**
   * A timestamp represented in epoch time.
   *
   * @public
   */
  FinishedAt?: Date | undefined;

  /**
   * A timestamp represented in epoch time.
   *
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * Long integer type that is a 64-bit signed number.
   *
   * @public
   */
  TotalRecordCount?: number | undefined;

  /**
   * Long integer type that is a 64-bit signed number.
   *
   * @public
   */
  InvalidRecordCount?: number | undefined;
}

/**
 * Represents the output of a `DescribeBatchPredictions` operation. The content is essentially a list of `BatchPrediction`s.
 *
 * @public
 */
export interface DescribeBatchPredictionsOutput {
  /**
   * A list of `BatchPrediction` objects that meet the search criteria.
   *
   * @public
   */
  Results?: BatchPrediction[] | undefined;

  /**
   * The ID of the next page in the paginated results that indicates at least one more page follows.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeDataSourcesInput {
  /**
   * Use one of the following variables to filter a list of `DataSource`:
   *
   * - `CreatedAt` - Sets the search criteria to `DataSource` creation dates.
   * - `Status` - Sets the search criteria to `DataSource` statuses.
   * - `Name` - Sets the search criteria to the contents of `DataSource` `Name`.
   * - `DataUri` - Sets the search criteria to the URI of data files used to create the `DataSource`. The URI can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.
   * - `IAMUser` - Sets the search criteria to the user account that invoked the `DataSource` creation.
   *
   * @public
   */
  FilterVariable?: DataSourceFilterVariable | undefined;

  /**
   * The equal to operator. The `DataSource` results will have `FilterVariable` values that exactly match the value specified with `EQ`.
   *
   * @public
   */
  EQ?: string | undefined;

  /**
   * The greater than operator. The `DataSource` results will have `FilterVariable` values that are greater than the value specified with `GT`.
   *
   * @public
   */
  GT?: string | undefined;

  /**
   * The less than operator. The `DataSource` results will have `FilterVariable` values that are less than the value specified with `LT`.
   *
   * @public
   */
  LT?: string | undefined;

  /**
   * The greater than or equal to operator. The `DataSource` results will have `FilterVariable` values that are greater than or equal to the value specified with `GE`.
   *
   * @public
   */
  GE?: string | undefined;

  /**
   * The less than or equal to operator. The `DataSource` results will have `FilterVariable` values that are less than or equal to the value specified with `LE`.
   *
   * @public
   */
  LE?: string | undefined;

  /**
   * The not equal to operator. The `DataSource` results will have `FilterVariable` values not equal to the value specified with `NE`.
   *
   * @public
   */
  NE?: string | undefined;

  /**
   * A string that is found at the beginning of a variable, such as `Name` or `Id`.
   *
   *
   *
   * For example, a `DataSource` could have the `Name` `2014-09-09-HolidayGiftMailer`. To search for this `DataSource`, select `Name` for the `FilterVariable` and any of the following strings for the `Prefix`:
   *
   *
   *
   * - 2014-09
   * - 2014-09-09
   * - 2014-09-09-Holiday
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A two-value parameter that determines the sequence of the resulting list of `DataSource`.
   *
   * - `asc` - Arranges the list in ascending order (A-Z, 0-9).
   * - `dsc` - Arranges the list in descending order (Z-A, 9-0).
   *
   * Results are sorted by `FilterVariable`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The ID of the page in the paginated results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of `DataSource` to include in the result.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * The datasource details that are specific to Amazon RDS.
 *
 * @public
 */
export interface RDSMetadata {
  /**
   * The database details required to connect to an Amazon RDS.
   *
   * @public
   */
  Database?: RDSDatabase | undefined;

  /**
   * The username to be used by Amazon ML to connect to database on an Amazon RDS instance. The username should have sufficient permissions to execute an `RDSSelectSqlQuery` query.
   *
   * @public
   */
  DatabaseUserName?: string | undefined;

  /**
   * The SQL query that is supplied during CreateDataSourceFromRDS. Returns only if `Verbose` is true in `GetDataSourceInput`.
   *
   * @public
   */
  SelectSqlQuery?: string | undefined;

  /**
   * The role (DataPipelineDefaultResourceRole) assumed by an Amazon EC2 instance to carry out the copy task from Amazon RDS to Amazon S3. For more information, see [Role templates](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html) for data pipelines.
   *
   * @public
   */
  ResourceRole?: string | undefined;

  /**
   * The role (DataPipelineDefaultRole) assumed by the Data Pipeline service to monitor the progress of the copy task from Amazon RDS to Amazon S3. For more information, see [Role templates](https://docs.aws.amazon.com/datapipeline/latest/DeveloperGuide/dp-iam-roles.html) for data pipelines.
   *
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * The ID of the Data Pipeline instance that is used to carry to copy data from Amazon RDS to Amazon S3. You can use the ID to find details about the instance in the Data Pipeline console.
   *
   * @public
   */
  DataPipelineId?: string | undefined;
}

/**
 * Describes the `DataSource` details specific to Amazon Redshift.
 *
 * @public
 */
export interface RedshiftMetadata {
  /**
   * Describes the database details required to connect to an Amazon Redshift database.
   *
   * @public
   */
  RedshiftDatabase?: RedshiftDatabase | undefined;

  /**
   * A username to be used by Amazon Machine Learning (Amazon ML)to connect to a database on an Amazon Redshift cluster. The username should have sufficient permissions to execute the `RedshiftSelectSqlQuery` query. The username should be valid for an Amazon Redshift [USER](https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_USER.html).
   *
   * @public
   */
  DatabaseUserName?: string | undefined;

  /**
   * The SQL query that is specified during CreateDataSourceFromRedshift. Returns only if `Verbose` is true in GetDataSourceInput.
   *
   * @public
   */
  SelectSqlQuery?: string | undefined;
}

/**
 * Represents the output of the `GetDataSource` operation.
 *
 * The content consists of the detailed metadata and data file information and the current status of the `DataSource`.
 *
 * @public
 */
export interface DataSource {
  /**
   * The ID that is assigned to the `DataSource` during creation.
   *
   * @public
   */
  DataSourceId?: string | undefined;

  /**
   * The location and name of the data in Amazon Simple Storage Service (Amazon S3) that is used by a `DataSource`.
   *
   * @public
   */
  DataLocationS3?: string | undefined;

  /**
   * A JSON string that represents the splitting and rearrangement requirement used when this `DataSource` was created.
   *
   * @public
   */
  DataRearrangement?: string | undefined;

  /**
   * The AWS user account from which the `DataSource` was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.
   *
   * @public
   */
  CreatedByIamUser?: string | undefined;

  /**
   * The time that the `DataSource` was created. The time is expressed in epoch time.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time of the most recent edit to the `BatchPrediction`. The time is expressed in epoch time.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The total number of observations contained in the data files that the `DataSource` references.
   *
   * @public
   */
  DataSizeInBytes?: number | undefined;

  /**
   * The number of data files referenced by the `DataSource`.
   *
   * @public
   */
  NumberOfFiles?: number | undefined;

  /**
   * A user-supplied name or description of the `DataSource`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The current status of the `DataSource`. This element can have one of the following values:
   *
   * - PENDING - Amazon Machine Learning (Amazon ML) submitted a request to create a `DataSource`.
   * - INPROGRESS - The creation process is underway.
   * - FAILED - The request to create a `DataSource` did not run to completion. It is not usable.
   * - COMPLETED - The creation process completed successfully.
   * - DELETED - The `DataSource` is marked as deleted. It is not usable.
   *
   * @public
   */
  Status?: EntityStatus | undefined;

  /**
   * A description of the most recent details about creating the `DataSource`.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Describes the `DataSource` details specific to Amazon Redshift.
   *
   * @public
   */
  RedshiftMetadata?: RedshiftMetadata | undefined;

  /**
   * The datasource details that are specific to Amazon RDS.
   *
   * @public
   */
  RDSMetadata?: RDSMetadata | undefined;

  /**
   * The Amazon Resource Name (ARN) of an [AWS IAM Role](https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts), such as the following: arn:aws:iam::account:role/rolename.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The parameter is `true` if statistics need to be generated from the observation data.
   *
   * @public
   */
  ComputeStatistics?: boolean | undefined;

  /**
   * Long integer type that is a 64-bit signed number.
   *
   * @public
   */
  ComputeTime?: number | undefined;

  /**
   * A timestamp represented in epoch time.
   *
   * @public
   */
  FinishedAt?: Date | undefined;

  /**
   * A timestamp represented in epoch time.
   *
   * @public
   */
  StartedAt?: Date | undefined;
}

/**
 * Represents the query results from a DescribeDataSources operation. The content is essentially a list of `DataSource`.
 *
 * @public
 */
export interface DescribeDataSourcesOutput {
  /**
   * A list of `DataSource` that meet the search criteria.
   *
   * @public
   */
  Results?: DataSource[] | undefined;

  /**
   * An ID of the next page in the paginated results that indicates at least one more page follows.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEvaluationsInput {
  /**
   * Use one of the following variable to filter a list of `Evaluation` objects:
   *
   *
   *
   * - `CreatedAt` - Sets the search criteria to the `Evaluation` creation date.
   * - `Status` - Sets the search criteria to the `Evaluation` status.
   * - `Name` - Sets the search criteria to the contents of `Evaluation` `Name`.
   * - `IAMUser` - Sets the search criteria to the user account that invoked an `Evaluation`.
   * - `MLModelId` - Sets the search criteria to the `MLModel` that was evaluated.
   * - `DataSourceId` - Sets the search criteria to the `DataSource` used in `Evaluation`.
   * - `DataUri` - Sets the search criteria to the data file(s) used in `Evaluation`. The URL can identify either a file or an Amazon Simple Storage Solution (Amazon S3) bucket or directory.
   *
   * @public
   */
  FilterVariable?: EvaluationFilterVariable | undefined;

  /**
   * The equal to operator. The `Evaluation` results will have `FilterVariable` values that exactly match the value specified with `EQ`.
   *
   * @public
   */
  EQ?: string | undefined;

  /**
   * The greater than operator. The `Evaluation` results will have `FilterVariable` values that are greater than the value specified with `GT`.
   *
   * @public
   */
  GT?: string | undefined;

  /**
   * The less than operator. The `Evaluation` results will have `FilterVariable` values that are less than the value specified with `LT`.
   *
   * @public
   */
  LT?: string | undefined;

  /**
   * The greater than or equal to operator. The `Evaluation` results will have `FilterVariable` values that are greater than or equal to the value specified with `GE`.
   *
   * @public
   */
  GE?: string | undefined;

  /**
   * The less than or equal to operator. The `Evaluation` results will have `FilterVariable` values that are less than or equal to the value specified with `LE`.
   *
   * @public
   */
  LE?: string | undefined;

  /**
   * The not equal to operator. The `Evaluation` results will have `FilterVariable` values not equal to the value specified with `NE`.
   *
   * @public
   */
  NE?: string | undefined;

  /**
   * A string that is found at the beginning of a variable, such as `Name` or `Id`.
   *
   *
   *
   * For example, an `Evaluation` could have the `Name` `2014-09-09-HolidayGiftMailer`. To search for this `Evaluation`, select `Name` for the `FilterVariable` and any of the following strings for the `Prefix`:
   *
   *
   *
   * - 2014-09
   * - 2014-09-09
   * - 2014-09-09-Holiday
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A two-value parameter that determines the sequence of the resulting list of `Evaluation`.
   *
   * - `asc` - Arranges the list in ascending order (A-Z, 0-9).
   * - `dsc` - Arranges the list in descending order (Z-A, 9-0).
   *
   * Results are sorted by `FilterVariable`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The ID of the page in the paginated results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of `Evaluation` to include in the result.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Measurements of how well the `MLModel` performed on known observations. One of the following metrics is returned, based on the type of the `MLModel`:
 *
 * - BinaryAUC: The binary `MLModel` uses the Area Under the Curve (AUC) technique to measure performance.
 * - RegressionRMSE: The regression `MLModel` uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.
 * - MulticlassAvgFScore: The multiclass `MLModel` uses the F1 score technique to measure performance.
 *
 * For more information about performance metrics, please see the [Amazon Machine Learning Developer Guide](https://docs.aws.amazon.com/machine-learning/latest/dg).
 *
 * @public
 */
export interface PerformanceMetrics {
  Properties?: Record<string, string> | undefined;
}

/**
 * Represents the output of `GetEvaluation` operation.
 *
 * The content consists of the detailed metadata and data file information and the current status of the `Evaluation`.
 *
 * @public
 */
export interface Evaluation {
  /**
   * The ID that is assigned to the `Evaluation` at creation.
   *
   * @public
   */
  EvaluationId?: string | undefined;

  /**
   * The ID of the `MLModel` that is the focus of the evaluation.
   *
   * @public
   */
  MLModelId?: string | undefined;

  /**
   * The ID of the `DataSource` that is used to evaluate the `MLModel`.
   *
   * @public
   */
  EvaluationDataSourceId?: string | undefined;

  /**
   * The location and name of the data in Amazon Simple Storage Server (Amazon S3) that is used in the evaluation.
   *
   * @public
   */
  InputDataLocationS3?: string | undefined;

  /**
   * The AWS user account that invoked the evaluation. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.
   *
   * @public
   */
  CreatedByIamUser?: string | undefined;

  /**
   * The time that the `Evaluation` was created. The time is expressed in epoch time.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time of the most recent edit to the `Evaluation`. The time is expressed in epoch time.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * A user-supplied name or description of the `Evaluation`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the evaluation. This element can have one of the following values:
   *
   * - `PENDING` - Amazon Machine Learning (Amazon ML) submitted a request to evaluate an `MLModel`.
   * - `INPROGRESS` - The evaluation is underway.
   * - `FAILED` - The request to evaluate an `MLModel` did not run to completion. It is not usable.
   * - `COMPLETED` - The evaluation process completed successfully.
   * - `DELETED` - The `Evaluation` is marked as deleted. It is not usable.
   *
   * @public
   */
  Status?: EntityStatus | undefined;

  /**
   * Measurements of how well the `MLModel` performed, using observations referenced by the `DataSource`. One of the following metrics is returned, based on the type of the `MLModel`:
   *
   * - BinaryAUC: A binary `MLModel` uses the Area Under the Curve (AUC) technique to measure performance.
   * - RegressionRMSE: A regression `MLModel` uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.
   * - MulticlassAvgFScore: A multiclass `MLModel` uses the F1 score technique to measure performance.
   *
   * For more information about performance metrics, please see the [Amazon Machine Learning Developer Guide](https://docs.aws.amazon.com/machine-learning/latest/dg).
   *
   * @public
   */
  PerformanceMetrics?: PerformanceMetrics | undefined;

  /**
   * A description of the most recent details about evaluating the `MLModel`.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Long integer type that is a 64-bit signed number.
   *
   * @public
   */
  ComputeTime?: number | undefined;

  /**
   * A timestamp represented in epoch time.
   *
   * @public
   */
  FinishedAt?: Date | undefined;

  /**
   * A timestamp represented in epoch time.
   *
   * @public
   */
  StartedAt?: Date | undefined;
}

/**
 * Represents the query results from a `DescribeEvaluations` operation. The content is essentially a list of `Evaluation`.
 *
 * @public
 */
export interface DescribeEvaluationsOutput {
  /**
   * A list of `Evaluation` that meet the search criteria.
   *
   * @public
   */
  Results?: Evaluation[] | undefined;

  /**
   * The ID of the next page in the paginated results that indicates at least one more page follows.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMLModelsInput {
  /**
   * Use one of the following variables to filter a list of `MLModel`:
   *
   * - `CreatedAt` - Sets the search criteria to `MLModel` creation date.
   * - `Status` - Sets the search criteria to `MLModel` status.
   * - `Name` - Sets the search criteria to the contents of `MLModel` `Name`.
   * - `IAMUser` - Sets the search criteria to the user account that invoked the `MLModel` creation.
   * - `TrainingDataSourceId` - Sets the search criteria to the `DataSource` used to train one or more `MLModel`.
   * - `RealtimeEndpointStatus` - Sets the search criteria to the `MLModel` real-time endpoint status.
   * - `MLModelType` - Sets the search criteria to `MLModel` type: binary, regression, or multi-class.
   * - `Algorithm` - Sets the search criteria to the algorithm that the `MLModel` uses.
   * - `TrainingDataURI` - Sets the search criteria to the data file(s) used in training a `MLModel`. The URL can identify either a file or an Amazon Simple Storage Service (Amazon S3) bucket or directory.
   *
   * @public
   */
  FilterVariable?: MLModelFilterVariable | undefined;

  /**
   * The equal to operator. The `MLModel` results will have `FilterVariable` values that exactly match the value specified with `EQ`.
   *
   * @public
   */
  EQ?: string | undefined;

  /**
   * The greater than operator. The `MLModel` results will have `FilterVariable` values that are greater than the value specified with `GT`.
   *
   * @public
   */
  GT?: string | undefined;

  /**
   * The less than operator. The `MLModel` results will have `FilterVariable` values that are less than the value specified with `LT`.
   *
   * @public
   */
  LT?: string | undefined;

  /**
   * The greater than or equal to operator. The `MLModel` results will have `FilterVariable` values that are greater than or equal to the value specified with `GE`.
   *
   * @public
   */
  GE?: string | undefined;

  /**
   * The less than or equal to operator. The `MLModel` results will have `FilterVariable` values that are less than or equal to the value specified with `LE`.
   *
   * @public
   */
  LE?: string | undefined;

  /**
   * The not equal to operator. The `MLModel` results will have `FilterVariable` values not equal to the value specified with `NE`.
   *
   * @public
   */
  NE?: string | undefined;

  /**
   * A string that is found at the beginning of a variable, such as `Name` or `Id`.
   *
   *
   *
   * For example, an `MLModel` could have the `Name` `2014-09-09-HolidayGiftMailer`. To search for this `MLModel`, select `Name` for the `FilterVariable` and any of the following strings for the `Prefix`:
   *
   *
   *
   * - 2014-09
   * - 2014-09-09
   * - 2014-09-09-Holiday
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * A two-value parameter that determines the sequence of the resulting list of `MLModel`.
   *
   * - `asc` - Arranges the list in ascending order (A-Z, 0-9).
   * - `dsc` - Arranges the list in descending order (Z-A, 9-0).
   *
   * Results are sorted by `FilterVariable`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * The ID of the page in the paginated results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of pages of information to include in the result. The range of acceptable values is `1` through `100`. The default value is `100`.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Represents the output of a `GetMLModel` operation.
 *
 * The content consists of the detailed metadata and the current status of the `MLModel`.
 *
 * @public
 */
export interface MLModel {
  /**
   * The ID assigned to the `MLModel` at creation.
   *
   * @public
   */
  MLModelId?: string | undefined;

  /**
   * The ID of the training `DataSource`. The `CreateMLModel` operation uses the `TrainingDataSourceId`.
   *
   * @public
   */
  TrainingDataSourceId?: string | undefined;

  /**
   * The AWS user account from which the `MLModel` was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.
   *
   * @public
   */
  CreatedByIamUser?: string | undefined;

  /**
   * The time that the `MLModel` was created. The time is expressed in epoch time.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time of the most recent edit to the `MLModel`. The time is expressed in epoch time.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * A user-supplied name or description of the `MLModel`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The current status of an `MLModel`. This element can have one of the following values:
   *
   * - `PENDING` - Amazon Machine Learning (Amazon ML) submitted a request to create an `MLModel`.
   * - `INPROGRESS` - The creation process is underway.
   * - `FAILED` - The request to create an `MLModel` didn't run to completion. The model isn't usable.
   * - `COMPLETED` - The creation process completed successfully.
   * - `DELETED` - The `MLModel` is marked as deleted. It isn't usable.
   *
   * @public
   */
  Status?: EntityStatus | undefined;

  /**
   * Long integer type that is a 64-bit signed number.
   *
   * @public
   */
  SizeInBytes?: number | undefined;

  /**
   * The current endpoint of the `MLModel`.
   *
   * @public
   */
  EndpointInfo?: RealtimeEndpointInfo | undefined;

  /**
   * A list of the training parameters in the `MLModel`. The list is implemented as a map of key-value pairs.
   *
   * The following is the current set of training parameters:
   *
   * - `sgd.maxMLModelSizeInBytes` - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance.
   *
   *   The value is an integer that ranges from `100000` to `2147483648`. The default value is `33554432`.
   * - `sgd.maxPasses` - The number of times that the training process traverses the observations to build the `MLModel`. The value is an integer that ranges from `1` to `10000`. The default value is `10`.
   * - `sgd.shuffleType` - Whether Amazon ML shuffles the training data. Shuffling the data improves a model's ability to find the optimal solution for a variety of data types. The valid values are `auto` and `none`. The default value is `none`.
   * - `sgd.l1RegularizationAmount` - The coefficient regularization L1 norm, which controls overfitting the data by penalizing large coefficients. This parameter tends to drive coefficients to zero, resulting in sparse feature set. If you use this parameter, start by specifying a small value, such as `1.0E-08`.
   *
   *   The value is a double that ranges from `0` to `MAX_DOUBLE`. The default is to not use L1 normalization. This parameter can't be used when `L2` is specified. Use this parameter sparingly.
   * - `sgd.l2RegularizationAmount` - The coefficient regularization L2 norm, which controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as `1.0E-08`.
   *
   *   The value is a double that ranges from `0` to `MAX_DOUBLE`. The default is to not use L2 normalization. This parameter can't be used when `L1` is specified. Use this parameter sparingly.
   *
   * @public
   */
  TrainingParameters?: Record<string, string> | undefined;

  /**
   * The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).
   *
   * @public
   */
  InputDataLocationS3?: string | undefined;

  /**
   * The algorithm used to train the `MLModel`. The following algorithm is supported:
   *
   * - `SGD` -- Stochastic gradient descent. The goal of `SGD` is to minimize the gradient of the loss function.
   *
   * @public
   */
  Algorithm?: Algorithm | undefined;

  /**
   * Identifies the `MLModel` category. The following are the available types:
   *
   * - `REGRESSION` - Produces a numeric result. For example, "What price should a house be listed at?"
   * - `BINARY` - Produces one of two possible results. For example, "Is this a child-friendly web site?".
   * - `MULTICLASS` - Produces one of several possible results. For example, "Is this a HIGH-, LOW-, or MEDIUM-risk trade?".
   *
   * @public
   */
  MLModelType?: MLModelType | undefined;

  ScoreThreshold?: number | undefined;
  /**
   * The time of the most recent edit to the `ScoreThreshold`. The time is expressed in epoch time.
   *
   * @public
   */
  ScoreThresholdLastUpdatedAt?: Date | undefined;

  /**
   * A description of the most recent details about accessing the `MLModel`.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Long integer type that is a 64-bit signed number.
   *
   * @public
   */
  ComputeTime?: number | undefined;

  /**
   * A timestamp represented in epoch time.
   *
   * @public
   */
  FinishedAt?: Date | undefined;

  /**
   * A timestamp represented in epoch time.
   *
   * @public
   */
  StartedAt?: Date | undefined;
}

/**
 * Represents the output of a `DescribeMLModels` operation. The content is essentially a list of `MLModel`.
 *
 * @public
 */
export interface DescribeMLModelsOutput {
  /**
   * A list of `MLModel` that meet the search criteria.
   *
   * @public
   */
  Results?: MLModel[] | undefined;

  /**
   * The ID of the next page in the paginated results that indicates at least one more page follows.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTagsInput {
  /**
   * The ID of the ML object. For example, `exampleModelId`.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * The type of the ML object.
   *
   * @public
   */
  ResourceType: TaggableResourceType | undefined;
}

/**
 * Amazon ML returns the following elements.
 *
 * @public
 */
export interface DescribeTagsOutput {
  /**
   * The ID of the tagged ML object.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of the tagged ML object.
   *
   * @public
   */
  ResourceType?: TaggableResourceType | undefined;

  /**
   * A list of tags associated with the ML object.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetBatchPredictionInput {
  /**
   * An ID assigned to the `BatchPrediction` at creation.
   *
   * @public
   */
  BatchPredictionId: string | undefined;
}

/**
 * Represents the output of a `GetBatchPrediction` operation and describes a `BatchPrediction`.
 *
 * @public
 */
export interface GetBatchPredictionOutput {
  /**
   * An ID assigned to the `BatchPrediction` at creation. This value should be identical to the value of the `BatchPredictionID` in the request.
   *
   * @public
   */
  BatchPredictionId?: string | undefined;

  /**
   * The ID of the `MLModel` that generated predictions for the `BatchPrediction` request.
   *
   * @public
   */
  MLModelId?: string | undefined;

  /**
   * The ID of the `DataSource` that was used to create the `BatchPrediction`.
   *
   * @public
   */
  BatchPredictionDataSourceId?: string | undefined;

  /**
   * The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).
   *
   * @public
   */
  InputDataLocationS3?: string | undefined;

  /**
   * The AWS user account that invoked the `BatchPrediction`. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.
   *
   * @public
   */
  CreatedByIamUser?: string | undefined;

  /**
   * The time when the `BatchPrediction` was created. The time is expressed in epoch time.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time of the most recent edit to `BatchPrediction`. The time is expressed in epoch time.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * A user-supplied name or description of the `BatchPrediction`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the `BatchPrediction`, which can be one of the following values:
   *
   * - `PENDING` - Amazon Machine Learning (Amazon ML) submitted a request to generate batch predictions.
   * - `INPROGRESS` - The batch predictions are in progress.
   * - `FAILED` - The request to perform a batch prediction did not run to completion. It is not usable.
   * - `COMPLETED` - The batch prediction process completed successfully.
   * - `DELETED` - The `BatchPrediction` is marked as deleted. It is not usable.
   *
   * @public
   */
  Status?: EntityStatus | undefined;

  /**
   * The location of an Amazon S3 bucket or directory to receive the operation results.
   *
   * @public
   */
  OutputUri?: string | undefined;

  /**
   * A link to the file that contains logs of the `CreateBatchPrediction` operation.
   *
   * @public
   */
  LogUri?: string | undefined;

  /**
   * A description of the most recent details about processing the batch prediction request.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the `BatchPrediction`, normalized and scaled on computation resources. `ComputeTime` is only available if the `BatchPrediction` is in the `COMPLETED` state.
   *
   * @public
   */
  ComputeTime?: number | undefined;

  /**
   * The epoch time when Amazon Machine Learning marked the `BatchPrediction` as `COMPLETED` or `FAILED`. `FinishedAt` is only available when the `BatchPrediction` is in the `COMPLETED` or `FAILED` state.
   *
   * @public
   */
  FinishedAt?: Date | undefined;

  /**
   * The epoch time when Amazon Machine Learning marked the `BatchPrediction` as `INPROGRESS`. `StartedAt` isn't available if the `BatchPrediction` is in the `PENDING` state.
   *
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * The number of total records that Amazon Machine Learning saw while processing the `BatchPrediction`.
   *
   * @public
   */
  TotalRecordCount?: number | undefined;

  /**
   * The number of invalid records that Amazon Machine Learning saw while processing the `BatchPrediction`.
   *
   * @public
   */
  InvalidRecordCount?: number | undefined;
}

/**
 * @public
 */
export interface GetDataSourceInput {
  /**
   * The ID assigned to the `DataSource` at creation.
   *
   * @public
   */
  DataSourceId: string | undefined;

  /**
   * Specifies whether the `GetDataSource` operation should return `DataSourceSchema`.
   *
   * If true, `DataSourceSchema` is returned.
   *
   * If false, `DataSourceSchema` is not returned.
   *
   * @public
   */
  Verbose?: boolean | undefined;
}

/**
 * Represents the output of a `GetDataSource` operation and describes a `DataSource`.
 *
 * @public
 */
export interface GetDataSourceOutput {
  /**
   * The ID assigned to the `DataSource` at creation. This value should be identical to the value of the `DataSourceId` in the request.
   *
   * @public
   */
  DataSourceId?: string | undefined;

  /**
   * The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).
   *
   * @public
   */
  DataLocationS3?: string | undefined;

  /**
   * A JSON string that represents the splitting and rearrangement requirement used when this `DataSource` was created.
   *
   * @public
   */
  DataRearrangement?: string | undefined;

  /**
   * The AWS user account from which the `DataSource` was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.
   *
   * @public
   */
  CreatedByIamUser?: string | undefined;

  /**
   * The time that the `DataSource` was created. The time is expressed in epoch time.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time of the most recent edit to the `DataSource`. The time is expressed in epoch time.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * The total size of observations in the data files.
   *
   * @public
   */
  DataSizeInBytes?: number | undefined;

  /**
   * The number of data files referenced by the `DataSource`.
   *
   * @public
   */
  NumberOfFiles?: number | undefined;

  /**
   * A user-supplied name or description of the `DataSource`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The current status of the `DataSource`. This element can have one of the following values:
   *
   * - `PENDING` - Amazon ML submitted a request to create a `DataSource`.
   * - `INPROGRESS` - The creation process is underway.
   * - `FAILED` - The request to create a `DataSource` did not run to completion. It is not usable.
   * - `COMPLETED` - The creation process completed successfully.
   * - `DELETED` - The `DataSource` is marked as deleted. It is not usable.
   *
   * @public
   */
  Status?: EntityStatus | undefined;

  /**
   * A link to the file containing logs of `CreateDataSourceFrom*` operations.
   *
   * @public
   */
  LogUri?: string | undefined;

  /**
   * The user-supplied description of the most recent details about creating the `DataSource`.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * Describes the `DataSource` details specific to Amazon Redshift.
   *
   * @public
   */
  RedshiftMetadata?: RedshiftMetadata | undefined;

  /**
   * The datasource details that are specific to Amazon RDS.
   *
   * @public
   */
  RDSMetadata?: RDSMetadata | undefined;

  /**
   * The Amazon Resource Name (ARN) of an [AWS IAM Role](https://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts), such as the following: arn:aws:iam::account:role/rolename.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The parameter is `true` if statistics need to be generated from the observation data.
   *
   * @public
   */
  ComputeStatistics?: boolean | undefined;

  /**
   * The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the `DataSource`, normalized and scaled on computation resources. `ComputeTime` is only available if the `DataSource` is in the `COMPLETED` state and the `ComputeStatistics` is set to true.
   *
   * @public
   */
  ComputeTime?: number | undefined;

  /**
   * The epoch time when Amazon Machine Learning marked the `DataSource` as `COMPLETED` or `FAILED`. `FinishedAt` is only available when the `DataSource` is in the `COMPLETED` or `FAILED` state.
   *
   * @public
   */
  FinishedAt?: Date | undefined;

  /**
   * The epoch time when Amazon Machine Learning marked the `DataSource` as `INPROGRESS`. `StartedAt` isn't available if the `DataSource` is in the `PENDING` state.
   *
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * The schema used by all of the data files of this `DataSource`.
   *
   * **Note:** This parameter is provided as part of the verbose format.
   *
   * @public
   */
  DataSourceSchema?: string | undefined;
}

/**
 * @public
 */
export interface GetEvaluationInput {
  /**
   * The ID of the `Evaluation` to retrieve. The evaluation of each `MLModel` is recorded and cataloged. The ID provides the means to access the information.
   *
   * @public
   */
  EvaluationId: string | undefined;
}

/**
 * Represents the output of a `GetEvaluation` operation and describes an `Evaluation`.
 *
 * @public
 */
export interface GetEvaluationOutput {
  /**
   * The evaluation ID which is same as the `EvaluationId` in the request.
   *
   * @public
   */
  EvaluationId?: string | undefined;

  /**
   * The ID of the `MLModel` that was the focus of the evaluation.
   *
   * @public
   */
  MLModelId?: string | undefined;

  /**
   * The `DataSource` used for this evaluation.
   *
   * @public
   */
  EvaluationDataSourceId?: string | undefined;

  /**
   * The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).
   *
   * @public
   */
  InputDataLocationS3?: string | undefined;

  /**
   * The AWS user account that invoked the evaluation. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.
   *
   * @public
   */
  CreatedByIamUser?: string | undefined;

  /**
   * The time that the `Evaluation` was created. The time is expressed in epoch time.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time of the most recent edit to the `Evaluation`. The time is expressed in epoch time.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * A user-supplied name or description of the `Evaluation`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The status of the evaluation. This element can have one of the following values:
   *
   * - `PENDING` - Amazon Machine Language (Amazon ML) submitted a request to evaluate an `MLModel`.
   * - `INPROGRESS` - The evaluation is underway.
   * - `FAILED` - The request to evaluate an `MLModel` did not run to completion. It is not usable.
   * - `COMPLETED` - The evaluation process completed successfully.
   * - `DELETED` - The `Evaluation` is marked as deleted. It is not usable.
   *
   * @public
   */
  Status?: EntityStatus | undefined;

  /**
   * Measurements of how well the `MLModel` performed using observations referenced by the `DataSource`. One of the following metric is returned based on the type of the `MLModel`:
   *
   * - BinaryAUC: A binary `MLModel` uses the Area Under the Curve (AUC) technique to measure performance.
   * - RegressionRMSE: A regression `MLModel` uses the Root Mean Square Error (RMSE) technique to measure performance. RMSE measures the difference between predicted and actual values for a single variable.
   * - MulticlassAvgFScore: A multiclass `MLModel` uses the F1 score technique to measure performance.
   *
   * For more information about performance metrics, please see the [Amazon Machine Learning Developer Guide](https://docs.aws.amazon.com/machine-learning/latest/dg).
   *
   * @public
   */
  PerformanceMetrics?: PerformanceMetrics | undefined;

  /**
   * A link to the file that contains logs of the `CreateEvaluation` operation.
   *
   * @public
   */
  LogUri?: string | undefined;

  /**
   * A description of the most recent details about evaluating the `MLModel`.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the `Evaluation`, normalized and scaled on computation resources. `ComputeTime` is only available if the `Evaluation` is in the `COMPLETED` state.
   *
   * @public
   */
  ComputeTime?: number | undefined;

  /**
   * The epoch time when Amazon Machine Learning marked the `Evaluation` as `COMPLETED` or `FAILED`. `FinishedAt` is only available when the `Evaluation` is in the `COMPLETED` or `FAILED` state.
   *
   * @public
   */
  FinishedAt?: Date | undefined;

  /**
   * The epoch time when Amazon Machine Learning marked the `Evaluation` as `INPROGRESS`. `StartedAt` isn't available if the `Evaluation` is in the `PENDING` state.
   *
   * @public
   */
  StartedAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetMLModelInput {
  /**
   * The ID assigned to the `MLModel` at creation.
   *
   * @public
   */
  MLModelId: string | undefined;

  /**
   * Specifies whether the `GetMLModel` operation should return `Recipe`.
   *
   * If true, `Recipe` is returned.
   *
   * If false, `Recipe` is not returned.
   *
   * @public
   */
  Verbose?: boolean | undefined;
}

/**
 * Represents the output of a `GetMLModel` operation, and provides detailed information about a `MLModel`.
 *
 * @public
 */
export interface GetMLModelOutput {
  /**
   * The MLModel ID, which is same as the `MLModelId` in the request.
   *
   * @public
   */
  MLModelId?: string | undefined;

  /**
   * The ID of the training `DataSource`.
   *
   * @public
   */
  TrainingDataSourceId?: string | undefined;

  /**
   * The AWS user account from which the `MLModel` was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.
   *
   * @public
   */
  CreatedByIamUser?: string | undefined;

  /**
   * The time that the `MLModel` was created. The time is expressed in epoch time.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The time of the most recent edit to the `MLModel`. The time is expressed in epoch time.
   *
   * @public
   */
  LastUpdatedAt?: Date | undefined;

  /**
   * A user-supplied name or description of the `MLModel`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The current status of the `MLModel`. This element can have one of the following values:
   *
   * - `PENDING` - Amazon Machine Learning (Amazon ML) submitted a request to describe a `MLModel`.
   * - `INPROGRESS` - The request is processing.
   * - `FAILED` - The request did not run to completion. The ML model isn't usable.
   * - `COMPLETED` - The request completed successfully.
   * - `DELETED` - The `MLModel` is marked as deleted. It isn't usable.
   *
   * @public
   */
  Status?: EntityStatus | undefined;

  /**
   * Long integer type that is a 64-bit signed number.
   *
   * @public
   */
  SizeInBytes?: number | undefined;

  /**
   * The current endpoint of the `MLModel`
   *
   * @public
   */
  EndpointInfo?: RealtimeEndpointInfo | undefined;

  /**
   * A list of the training parameters in the `MLModel`. The list is implemented as a map of key-value pairs.
   *
   * The following is the current set of training parameters:
   *
   * - `sgd.maxMLModelSizeInBytes` - The maximum allowed size of the model. Depending on the input data, the size of the model might affect its performance.
   *
   *   The value is an integer that ranges from `100000` to `2147483648`. The default value is `33554432`.
   * - `sgd.maxPasses` - The number of times that the training process traverses the observations to build the `MLModel`. The value is an integer that ranges from `1` to `10000`. The default value is `10`.
   * - `sgd.shuffleType` - Whether Amazon ML shuffles the training data. Shuffling data improves a model's ability to find the optimal solution for a variety of data types. The valid values are `auto` and `none`. The default value is `none`. We strongly recommend that you shuffle your data.
   * - `sgd.l1RegularizationAmount` - The coefficient regularization L1 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to zero, resulting in a sparse feature set. If you use this parameter, start by specifying a small value, such as `1.0E-08`.
   *
   *   The value is a double that ranges from `0` to `MAX_DOUBLE`. The default is to not use L1 normalization. This parameter can't be used when `L2` is specified. Use this parameter sparingly.
   * - `sgd.l2RegularizationAmount` - The coefficient regularization L2 norm. It controls overfitting the data by penalizing large coefficients. This tends to drive coefficients to small, nonzero values. If you use this parameter, start by specifying a small value, such as `1.0E-08`.
   *
   *   The value is a double that ranges from `0` to `MAX_DOUBLE`. The default is to not use L2 normalization. This parameter can't be used when `L1` is specified. Use this parameter sparingly.
   *
   * @public
   */
  TrainingParameters?: Record<string, string> | undefined;

  /**
   * The location of the data file or directory in Amazon Simple Storage Service (Amazon S3).
   *
   * @public
   */
  InputDataLocationS3?: string | undefined;

  /**
   * Identifies the `MLModel` category. The following are the available types:
   *
   * - REGRESSION -- Produces a numeric result. For example, "What price should a house be listed at?"
   * - BINARY -- Produces one of two possible results. For example, "Is this an e-commerce website?"
   * - MULTICLASS -- Produces one of several possible results. For example, "Is this a HIGH, LOW or MEDIUM risk trade?"
   *
   * @public
   */
  MLModelType?: MLModelType | undefined;

  /**
   * The scoring threshold is used in binary classification `MLModel` models. It marks the boundary between a positive prediction and a negative prediction.
   *
   * Output values greater than or equal to the threshold receive a positive result from the MLModel, such as `true`. Output values less than the threshold receive a negative response from the MLModel, such as `false`.
   *
   * @public
   */
  ScoreThreshold?: number | undefined;

  /**
   * The time of the most recent edit to the `ScoreThreshold`. The time is expressed in epoch time.
   *
   * @public
   */
  ScoreThresholdLastUpdatedAt?: Date | undefined;

  /**
   * A link to the file that contains logs of the `CreateMLModel` operation.
   *
   * @public
   */
  LogUri?: string | undefined;

  /**
   * A description of the most recent details about accessing the `MLModel`.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The approximate CPU time in milliseconds that Amazon Machine Learning spent processing the `MLModel`, normalized and scaled on computation resources. `ComputeTime` is only available if the `MLModel` is in the `COMPLETED` state.
   *
   * @public
   */
  ComputeTime?: number | undefined;

  /**
   * The epoch time when Amazon Machine Learning marked the `MLModel` as `COMPLETED` or `FAILED`. `FinishedAt` is only available when the `MLModel` is in the `COMPLETED` or `FAILED` state.
   *
   * @public
   */
  FinishedAt?: Date | undefined;

  /**
   * The epoch time when Amazon Machine Learning marked the `MLModel` as `INPROGRESS`. `StartedAt` isn't available if the `MLModel` is in the `PENDING` state.
   *
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * The recipe to use when training the `MLModel`. The `Recipe` provides detailed information about the observation data to use during training, and manipulations to perform on the observation data during training.
   *
   * **Note:** This parameter is provided as part of the verbose format.
   *
   * @public
   */
  Recipe?: string | undefined;

  /**
   * The schema used by all of the data files referenced by the `DataSource`.
   *
   * **Note:** This parameter is provided as part of the verbose format.
   *
   * @public
   */
  Schema?: string | undefined;
}

/**
 * @public
 */
export interface PredictInput {
  /**
   * A unique identifier of the `MLModel`.
   *
   * @public
   */
  MLModelId: string | undefined;

  /**
   * A map of variable name-value pairs that represent an observation.
   *
   * @public
   */
  Record: Record<string, string> | undefined;

  PredictEndpoint: string | undefined;
}

/**
 * The output from a `Predict` operation:
 *
 *
 *
 * - `Details` - Contains the following attributes: `DetailsAttributes.PREDICTIVE_MODEL_TYPE - REGRESSION | BINARY | MULTICLASS` `DetailsAttributes.ALGORITHM - SGD`
 * - `PredictedLabel` - Present for either a `BINARY` or `MULTICLASS` `MLModel` request.
 * - `PredictedScores` - Contains the raw classification score corresponding to each label.
 * - `PredictedValue` - Present for a `REGRESSION` `MLModel` request.
 *
 * @public
 */
export interface Prediction {
  /**
   * The prediction label for either a `BINARY` or `MULTICLASS` `MLModel`.
   *
   * @public
   */
  predictedLabel?: string | undefined;

  /**
   * The prediction value for `REGRESSION` `MLModel`.
   *
   * @public
   */
  predictedValue?: number | undefined;

  /**
   * Provides the raw classification score corresponding to each label.
   *
   * @public
   */
  predictedScores?: Record<string, number> | undefined;

  /**
   * Provides any additional details regarding the prediction.
   *
   * @public
   */
  details?: Partial<Record<DetailsAttributes, string>> | undefined;
}

/**
 * @public
 */
export interface PredictOutput {
  /**
   * The output from a `Predict` operation:
   *
   *
   *
   * - `Details` - Contains the following attributes: `DetailsAttributes.PREDICTIVE_MODEL_TYPE - REGRESSION | BINARY | MULTICLASS` `DetailsAttributes.ALGORITHM - SGD`
   * - `PredictedLabel` - Present for either a `BINARY` or `MULTICLASS` `MLModel` request.
   * - `PredictedScores` - Contains the raw classification score corresponding to each label.
   * - `PredictedValue` - Present for a `REGRESSION` `MLModel` request.
   *
   * @public
   */
  Prediction?: Prediction | undefined;
}

/**
 * @public
 */
export interface UpdateBatchPredictionInput {
  /**
   * The ID assigned to the `BatchPrediction` during creation.
   *
   * @public
   */
  BatchPredictionId: string | undefined;

  /**
   * A new user-supplied name or description of the `BatchPrediction`.
   *
   * @public
   */
  BatchPredictionName: string | undefined;
}

/**
 * Represents the output of an `UpdateBatchPrediction` operation.
 *
 * You can see the updated content by using the `GetBatchPrediction` operation.
 *
 * @public
 */
export interface UpdateBatchPredictionOutput {
  /**
   * The ID assigned to the `BatchPrediction` during creation. This value should be identical to the value of the `BatchPredictionId` in the request.
   *
   * @public
   */
  BatchPredictionId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataSourceInput {
  /**
   * The ID assigned to the `DataSource` during creation.
   *
   * @public
   */
  DataSourceId: string | undefined;

  /**
   * A new user-supplied name or description of the `DataSource` that will replace the current description.
   *
   * @public
   */
  DataSourceName: string | undefined;
}

/**
 * Represents the output of an `UpdateDataSource` operation.
 *
 * You can see the updated content by using the `GetBatchPrediction` operation.
 *
 * @public
 */
export interface UpdateDataSourceOutput {
  /**
   * The ID assigned to the `DataSource` during creation. This value should be identical to the value of the `DataSourceID` in the request.
   *
   * @public
   */
  DataSourceId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEvaluationInput {
  /**
   * The ID assigned to the `Evaluation` during creation.
   *
   * @public
   */
  EvaluationId: string | undefined;

  /**
   * A new user-supplied name or description of the `Evaluation` that will replace the current content.
   *
   * @public
   */
  EvaluationName: string | undefined;
}

/**
 * Represents the output of an `UpdateEvaluation` operation.
 *
 * You can see the updated content by using the `GetEvaluation` operation.
 *
 * @public
 */
export interface UpdateEvaluationOutput {
  /**
   * The ID assigned to the `Evaluation` during creation. This value should be identical to the value of the `Evaluation` in the request.
   *
   * @public
   */
  EvaluationId?: string | undefined;
}

/**
 * @public
 */
export interface UpdateMLModelInput {
  /**
   * The ID assigned to the `MLModel` during creation.
   *
   * @public
   */
  MLModelId: string | undefined;

  /**
   * A user-supplied name or description of the `MLModel`.
   *
   * @public
   */
  MLModelName?: string | undefined;

  /**
   * The `ScoreThreshold` used in binary classification `MLModel` that marks the boundary between a positive prediction and a negative prediction.
   *
   * Output values greater than or equal to the `ScoreThreshold` receive a positive result from the `MLModel`, such as `true`. Output values less than the `ScoreThreshold` receive a negative response from the `MLModel`, such as `false`.
   *
   * @public
   */
  ScoreThreshold?: number | undefined;
}

/**
 * Represents the output of an `UpdateMLModel` operation.
 *
 * You can see the updated content by using the `GetMLModel` operation.
 *
 * @public
 */
export interface UpdateMLModelOutput {
  /**
   * The ID assigned to the `MLModel` during creation. This value should be identical to the value of the `MLModelID` in the request.
   *
   * @public
   */
  MLModelId?: string | undefined;
}
