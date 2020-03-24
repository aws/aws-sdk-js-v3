import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AttributeType {
  FLOAT = "float",
  INTEGER = "integer",
  STRING = "string",
  TIMESTAMP = "timestamp"
}

/**
 * <p>Specifies a categorical hyperparameter and it's range of tunable values.
 *       This object is part of the <a>ParameterRanges</a> object.</p>
 */
export interface CategoricalParameterRange {
  __type?: "CategoricalParameterRange";
  /**
   * <p>The name of the categorical hyperparameter to tune.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of the tunable categories for the hyperparameter.</p>
   */
  Values: Array<string> | undefined;
}

export namespace CategoricalParameterRange {
  export function isa(o: any): o is CategoricalParameterRange {
    return _smithy.isa(o, "CategoricalParameterRange");
  }
}

/**
 * <p>Specifies a continuous hyperparameter and it's range of tunable values.
 *       This object is part of the <a>ParameterRanges</a> object.</p>
 */
export interface ContinuousParameterRange {
  __type?: "ContinuousParameterRange";
  /**
   * <p>The maximum tunable value of the hyperparameter.</p>
   */
  MaxValue: number | undefined;

  /**
   * <p>The minimum tunable value of the hyperparameter.</p>
   */
  MinValue: number | undefined;

  /**
   * <p>The name of the hyperparameter to tune.</p>
   */
  Name: string | undefined;

  /**
   * <p>The scale that hyperparameter tuning uses to search the hyperparameter range.
   *       Valid values:</p>
   *          <dl>
   *             <dt>Auto</dt>
   *             <dd>
   *                <p>Amazon Forecast hyperparameter tuning chooses the best scale for the hyperparameter.</p>
   *             </dd>
   *             <dt>Linear</dt>
   *             <dd>
   *                <p>Hyperparameter tuning searches the values in the hyperparameter range by using a
   *             linear scale.</p>
   *             </dd>
   *             <dt>Logarithmic</dt>
   *             <dd>
   *                <p>Hyperparameter tuning searches the values in the hyperparameter range by using a
   *             logarithmic scale.</p>
   *                <p>Logarithmic scaling works only for ranges that have values greater than 0.</p>
   *             </dd>
   *             <dt>ReverseLogarithmic</dt>
   *             <dd>
   *                <p>hyperparameter tuning searches the values in the hyperparameter range by using a
   *             reverse logarithmic scale.</p>
   *                <p>Reverse logarithmic scaling works only for ranges that are entirely within the
   *             range 0 <= x < 1.0.</p>
   *             </dd>
   *          </dl>
   *          <p>For information about choosing a hyperparameter scale, see
   *       <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-ranges.html#scaling-type">Hyperparameter Scaling</a>.
   *       One of the following values:</p>
   */
  ScalingType?: ScalingType | string;
}

export namespace ContinuousParameterRange {
  export function isa(o: any): o is ContinuousParameterRange {
    return _smithy.isa(o, "ContinuousParameterRange");
  }
}

export interface CreateDatasetGroupRequest {
  __type?: "CreateDatasetGroupRequest";
  /**
   * <p>An array of Amazon Resource Names (ARNs) of the datasets that you want to include in the
   *       dataset group.</p>
   */
  DatasetArns?: Array<string>;

  /**
   * <p>A name for the dataset group.</p>
   */
  DatasetGroupName: string | undefined;

  /**
   * <p>The domain associated with the dataset group. When you add a dataset to a dataset group,
   *       this value and the value specified for the <code>Domain</code> parameter of the <a>CreateDataset</a> operation must match.</p>
   *          <p>The <code>Domain</code> and <code>DatasetType</code> that you choose determine the fields
   *       that must be present in training data that you import to a dataset. For example, if you choose
   *       the <code>RETAIL</code> domain and <code>TARGET_TIME_SERIES</code> as the
   *         <code>DatasetType</code>, Amazon Forecast requires that <code>item_id</code>,
   *         <code>timestamp</code>, and <code>demand</code> fields are present in your data. For more
   *       information, see <a>howitworks-datasets-groups</a>.</p>
   */
  Domain: Domain | string | undefined;
}

export namespace CreateDatasetGroupRequest {
  export function isa(o: any): o is CreateDatasetGroupRequest {
    return _smithy.isa(o, "CreateDatasetGroupRequest");
  }
}

export interface CreateDatasetGroupResponse extends $MetadataBearer {
  __type?: "CreateDatasetGroupResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   */
  DatasetGroupArn?: string;
}

export namespace CreateDatasetGroupResponse {
  export function isa(o: any): o is CreateDatasetGroupResponse {
    return _smithy.isa(o, "CreateDatasetGroupResponse");
  }
}

export interface CreateDatasetImportJobRequest {
  __type?: "CreateDatasetImportJobRequest";
  /**
   * <p>The location of the training data to import and an AWS Identity and Access Management (IAM) role that Amazon Forecast
   *       can assume to access the data. The training data must be stored in an Amazon S3 bucket.</p>
   *          <p>If encryption is used, <code>DataSource</code> must include an AWS Key Management Service (KMS) key and the
   *       IAM role must allow Amazon Forecast permission to access the key. The KMS key and IAM role must
   *       match those specified in the <code>EncryptionConfig</code> parameter of the <a>CreateDataset</a> operation.</p>
   */
  DataSource: DataSource | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Forecast dataset that you want to import data
   *       to.</p>
   */
  DatasetArn: string | undefined;

  /**
   * <p>The name for the dataset import job. We recommend including the current timestamp in the
   *       name, for example, <code>20190721DatasetImport</code>. This can help you avoid getting a
   *         <code>ResourceAlreadyExistsException</code> exception.</p>
   */
  DatasetImportJobName: string | undefined;

  /**
   * <p>The format of timestamps in the dataset. The format that you specify depends on the
   *         <code>DataFrequency</code> specified when the dataset was created. The following formats are
   *       supported</p>
   *          <ul>
   *             <li>
   *                <p>"yyyy-MM-dd"</p>
   *                <p>For the following data frequencies: Y, M, W, and D</p>
   *             </li>
   *             <li>
   *                <p>"yyyy-MM-dd HH:mm:ss"</p>
   *                <p>For the following data frequencies: H, 30min, 15min, and 1min; and optionally, for: Y,
   *           M, W, and D</p>
   *             </li>
   *          </ul>
   *          <p>If the format isn't specified, Amazon Forecast expects the format to be "yyyy-MM-dd
   *       HH:mm:ss".</p>
   */
  TimestampFormat?: string;
}

export namespace CreateDatasetImportJobRequest {
  export function isa(o: any): o is CreateDatasetImportJobRequest {
    return _smithy.isa(o, "CreateDatasetImportJobRequest");
  }
}

export interface CreateDatasetImportJobResponse extends $MetadataBearer {
  __type?: "CreateDatasetImportJobResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset import job.</p>
   */
  DatasetImportJobArn?: string;
}

export namespace CreateDatasetImportJobResponse {
  export function isa(o: any): o is CreateDatasetImportJobResponse {
    return _smithy.isa(o, "CreateDatasetImportJobResponse");
  }
}

export interface CreateDatasetRequest {
  __type?: "CreateDatasetRequest";
  /**
   * <p>The frequency of data collection. This parameter is required for RELATED_TIME_SERIES
   *       datasets.</p>
   *          <p>Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30 minutes),
   *       15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute). For example,
   *       "D" indicates every day and "15min" indicates every 15 minutes.</p>
   */
  DataFrequency?: string;

  /**
   * <p>A name for the dataset.</p>
   */
  DatasetName: string | undefined;

  /**
   * <p>The dataset type. Valid values depend on the chosen <code>Domain</code>.</p>
   */
  DatasetType: DatasetType | string | undefined;

  /**
   * <p>The domain associated with the dataset. When you add a dataset to a dataset group, this
   *       value and the value specified for the <code>Domain</code> parameter of the <a>CreateDatasetGroup</a> operation must match.</p>
   *          <p>The <code>Domain</code> and <code>DatasetType</code> that you choose determine the fields
   *       that must be present in the training data that you import to the dataset. For example, if you
   *       choose the <code>RETAIL</code> domain and <code>TARGET_TIME_SERIES</code> as the
   *         <code>DatasetType</code>, Amazon Forecast requires <code>item_id</code>, <code>timestamp</code>,
   *       and <code>demand</code> fields to be present in your data. For more information, see <a>howitworks-datasets-groups</a>.</p>
   */
  Domain: Domain | string | undefined;

  /**
   * <p>An AWS Key Management Service (KMS) key and the AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access
   *       the key.</p>
   */
  EncryptionConfig?: EncryptionConfig;

  /**
   * <p>The schema for the dataset. The schema attributes and their order must match the fields in
   *       your data. The dataset <code>Domain</code> and <code>DatasetType</code> that you choose
   *       determine the minimum required fields in your training data. For information about the
   *       required fields for a specific dataset domain and type, see <a>howitworks-domains-ds-types</a>.</p>
   */
  Schema: Schema | undefined;
}

export namespace CreateDatasetRequest {
  export function isa(o: any): o is CreateDatasetRequest {
    return _smithy.isa(o, "CreateDatasetRequest");
  }
}

export interface CreateDatasetResponse extends $MetadataBearer {
  __type?: "CreateDatasetResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DatasetArn?: string;
}

export namespace CreateDatasetResponse {
  export function isa(o: any): o is CreateDatasetResponse {
    return _smithy.isa(o, "CreateDatasetResponse");
  }
}

export interface CreateForecastExportJobRequest {
  __type?: "CreateForecastExportJobRequest";
  /**
   * <p>The location where you want to save the forecast and an AWS Identity and Access Management (IAM) role that
   *       Amazon Forecast can assume to access the location. The forecast must be exported to an Amazon S3
   *       bucket.</p>
   *          <p>If encryption is used, <code>Destination</code> must include an AWS Key Management Service (KMS) key. The
   *       IAM role must allow Amazon Forecast permission to access the key.</p>
   */
  Destination: DataDestination | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the forecast that you want to export.</p>
   */
  ForecastArn: string | undefined;

  /**
   * <p>The name for the forecast export job.</p>
   */
  ForecastExportJobName: string | undefined;
}

export namespace CreateForecastExportJobRequest {
  export function isa(o: any): o is CreateForecastExportJobRequest {
    return _smithy.isa(o, "CreateForecastExportJobRequest");
  }
}

export interface CreateForecastExportJobResponse extends $MetadataBearer {
  __type?: "CreateForecastExportJobResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the export job.</p>
   */
  ForecastExportJobArn?: string;
}

export namespace CreateForecastExportJobResponse {
  export function isa(o: any): o is CreateForecastExportJobResponse {
    return _smithy.isa(o, "CreateForecastExportJobResponse");
  }
}

export interface CreateForecastRequest {
  __type?: "CreateForecastRequest";
  /**
   * <p>A name for the forecast.</p>
   */
  ForecastName: string | undefined;

  /**
   * <p>The quantiles at which probabilistic forecasts are generated. <b>You
   *         can currently specify up to 5 quantiles per forecast</b>. Accepted values include
   *         <code>0.01 to 0.99</code> (increments of .01 only) and <code>mean</code>. The mean forecast
   *       is different from the median (0.50) when the distribution is not symmetric (for example, Beta
   *       and Negative Binomial). The default value is <code>["0.1", "0.5", "0.9"]</code>.</p>
   */
  ForecastTypes?: Array<string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the predictor to use to generate the forecast.</p>
   */
  PredictorArn: string | undefined;
}

export namespace CreateForecastRequest {
  export function isa(o: any): o is CreateForecastRequest {
    return _smithy.isa(o, "CreateForecastRequest");
  }
}

export interface CreateForecastResponse extends $MetadataBearer {
  __type?: "CreateForecastResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the forecast.</p>
   */
  ForecastArn?: string;
}

export namespace CreateForecastResponse {
  export function isa(o: any): o is CreateForecastResponse {
    return _smithy.isa(o, "CreateForecastResponse");
  }
}

export interface CreatePredictorRequest {
  __type?: "CreatePredictorRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm to use for model training. Required if
   *         <code>PerformAutoML</code> is not set to <code>true</code>.</p>
   *          <p class="title">
   *             <b>Supported algorithms:</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>arn:aws:forecast:::algorithm/ARIMA</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:forecast:::algorithm/Deep_AR_Plus</code>
   *                </p>
   *                <p>Supports hyperparameter optimization (HPO)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:forecast:::algorithm/ETS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:forecast:::algorithm/NPTS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:forecast:::algorithm/Prophet</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  AlgorithmArn?: string;

  /**
   * <p>An AWS Key Management Service (KMS) key and the AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access
   *       the key.</p>
   */
  EncryptionConfig?: EncryptionConfig;

  /**
   * <p>Used to override the default evaluation parameters of the specified algorithm. Amazon Forecast
   *       evaluates a predictor by splitting a dataset into training data and testing data. The
   *       evaluation parameters define how to perform the split and the number of iterations.</p>
   */
  EvaluationParameters?: EvaluationParameters;

  /**
   * <p>The featurization configuration.</p>
   */
  FeaturizationConfig: FeaturizationConfig | undefined;

  /**
   * <p>Specifies the number of time-steps that the model is trained to predict. The forecast
   *       horizon is also called the prediction length.</p>
   *          <p>For example, if you configure a dataset for daily data collection (using the
   *         <code>DataFrequency</code> parameter of the <a>CreateDataset</a> operation) and
   *       set the forecast horizon to 10, the model returns predictions for 10 days.</p>
   *          <p>The maximum forecast horizon is the lesser of 500 time-steps or 1/3 of the
   *       TARGET_TIME_SERIES dataset length.</p>
   */
  ForecastHorizon: number | undefined;

  /**
   * <p>Provides hyperparameter override values for the algorithm. If you don't provide this
   *       parameter, Amazon Forecast uses default values. The individual algorithms specify which
   *       hyperparameters support hyperparameter optimization (HPO). For more information, see <a>aws-forecast-choosing-recipes</a>.</p>
   *          <p>If you included the <code>HPOConfig</code> object, you must set <code>PerformHPO</code> to
   *       true.</p>
   */
  HPOConfig?: HyperParameterTuningJobConfig;

  /**
   * <p>Describes the dataset group that contains the data to use to train the predictor.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>Whether to perform AutoML. When Amazon Forecast performs AutoML, it evaluates the algorithms it
   *       provides and chooses the best algorithm and configuration for your training dataset.</p>
   *          <p>The default value is <code>false</code>. In this case, you are required to specify an
   *       algorithm.</p>
   *          <p>Set <code>PerformAutoML</code> to <code>true</code> to have Amazon Forecast perform AutoML. This
   *       is a good option if you aren't sure which algorithm is suitable for your training data. In
   *       this case, <code>PerformHPO</code> must be false.</p>
   */
  PerformAutoML?: boolean;

  /**
   * <p>Whether to perform hyperparameter optimization (HPO). HPO finds optimal hyperparameter
   *       values for your training data. The process of performing HPO is known as running a
   *       hyperparameter tuning job.</p>
   *          <p>The default value is <code>false</code>. In this case, Amazon Forecast uses default
   *       hyperparameter values from the chosen algorithm.</p>
   *          <p>To override the default values, set <code>PerformHPO</code> to <code>true</code> and,
   *       optionally, supply the <a>HyperParameterTuningJobConfig</a> object. The tuning job
   *       specifies a metric to optimize, which hyperparameters participate in tuning, and the valid
   *       range for each tunable hyperparameter. In this case, you are required to specify an algorithm
   *       and <code>PerformAutoML</code> must be false.</p>
   *          <p>The following algorithm supports HPO:</p>
   *          <ul>
   *             <li>
   *                <p>DeepAR+</p>
   *             </li>
   *          </ul>
   */
  PerformHPO?: boolean;

  /**
   * <p>A name for the predictor.</p>
   */
  PredictorName: string | undefined;

  /**
   * <p>The hyperparameters to override for model training. The hyperparameters that you can
   *       override are listed in the individual algorithms. For the list of supported algorithms, see
   *         <a>aws-forecast-choosing-recipes</a>.</p>
   */
  TrainingParameters?: { [key: string]: string };
}

export namespace CreatePredictorRequest {
  export function isa(o: any): o is CreatePredictorRequest {
    return _smithy.isa(o, "CreatePredictorRequest");
  }
}

export interface CreatePredictorResponse extends $MetadataBearer {
  __type?: "CreatePredictorResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor.</p>
   */
  PredictorArn?: string;
}

export namespace CreatePredictorResponse {
  export function isa(o: any): o is CreatePredictorResponse {
    return _smithy.isa(o, "CreatePredictorResponse");
  }
}

/**
 * <p>The destination for an exported forecast, an AWS Identity and Access Management (IAM) role that allows
 *       Amazon Forecast to access the location and, optionally, an AWS Key Management Service (KMS) key. This object is
 *       submitted in the <a>CreateForecastExportJob</a> request.</p>
 */
export interface DataDestination {
  __type?: "DataDestination";
  /**
   * <p>The path to an Amazon Simple Storage Service (Amazon S3) bucket along with the credentials to access the
   *       bucket.</p>
   */
  S3Config: S3Config | undefined;
}

export namespace DataDestination {
  export function isa(o: any): o is DataDestination {
    return _smithy.isa(o, "DataDestination");
  }
}

/**
 * <p>The source of your training data, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to
 *       access the data and, optionally, an AWS Key Management Service (KMS) key. This object is submitted in the
 *       <a>CreateDatasetImportJob</a> request.</p>
 */
export interface DataSource {
  __type?: "DataSource";
  /**
   * <p>The path to the training data stored in an Amazon Simple Storage Service (Amazon S3) bucket along with the
   *       credentials to access the data.</p>
   */
  S3Config: S3Config | undefined;
}

export namespace DataSource {
  export function isa(o: any): o is DataSource {
    return _smithy.isa(o, "DataSource");
  }
}

/**
 * <p>Provides a summary of the dataset group properties used in the <a>ListDatasetGroups</a> operation. To get the complete set of properties, call the
 *         <a>DescribeDatasetGroup</a> operation, and provide the
 *         <code>DatasetGroupArn</code>.</p>
 */
export interface DatasetGroupSummary {
  __type?: "DatasetGroupSummary";
  /**
   * <p>When the dataset group was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   */
  DatasetGroupArn?: string;

  /**
   * <p>The name of the dataset group.</p>
   */
  DatasetGroupName?: string;

  /**
   * <p>When the dataset group was created or last updated from a call to the <a>UpdateDatasetGroup</a> operation. While the dataset group is being updated,
   *         <code>LastModificationTime</code> is the current time of the <code>ListDatasetGroups</code>
   *       call.</p>
   */
  LastModificationTime?: Date;
}

export namespace DatasetGroupSummary {
  export function isa(o: any): o is DatasetGroupSummary {
    return _smithy.isa(o, "DatasetGroupSummary");
  }
}

/**
 * <p>Provides a summary of the dataset import job properties used in the <a>ListDatasetImportJobs</a> operation. To get the complete set of properties, call the
 *         <a>DescribeDatasetImportJob</a> operation, and provide the
 *         <code>DatasetImportJobArn</code>.</p>
 */
export interface DatasetImportJobSummary {
  __type?: "DatasetImportJobSummary";
  /**
   * <p>When the dataset import job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The location of the training data to import and an AWS Identity and Access Management (IAM) role that Amazon Forecast
   *       can assume to access the data. The training data must be stored in an Amazon S3 bucket.</p>
   *          <p>If encryption is used, <code>DataSource</code> includes an AWS Key Management Service (KMS) key.</p>
   */
  DataSource?: DataSource;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset import job.</p>
   */
  DatasetImportJobArn?: string;

  /**
   * <p>The name of the dataset import job.</p>
   */
  DatasetImportJobName?: string;

  /**
   * <p>The last time that the dataset was modified. The time depends on the status of the job, as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The same time as <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *           failed.</p>
   *             </li>
   *          </ul>
   */
  LastModificationTime?: Date;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * <p>The status of the dataset import job. The status is reflected in the status of the
   *       dataset. For example, when the import job status is <code>CREATE_IN_PROGRESS</code>, the
   *       status of the dataset is <code>UPDATE_IN_PROGRESS</code>. States include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *             <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *             <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: string;
}

export namespace DatasetImportJobSummary {
  export function isa(o: any): o is DatasetImportJobSummary {
    return _smithy.isa(o, "DatasetImportJobSummary");
  }
}

/**
 * <p>Provides a summary of the dataset properties used in the <a>ListDatasets</a>
 *       operation. To get the complete set of properties, call the <a>DescribeDataset</a>
 *       operation, and provide the <code>DatasetArn</code>.</p>
 */
export interface DatasetSummary {
  __type?: "DatasetSummary";
  /**
   * <p>When the dataset was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DatasetArn?: string;

  /**
   * <p>The name of the dataset.</p>
   */
  DatasetName?: string;

  /**
   * <p>The dataset type.</p>
   */
  DatasetType?: DatasetType | string;

  /**
   * <p>The domain associated with the dataset.</p>
   */
  Domain?: Domain | string;

  /**
   * <p>When you create a dataset, <code>LastModificationTime</code> is the same as
   *         <code>CreationTime</code>. While data is being imported to the dataset,
   *         <code>LastModificationTime</code> is the current time of the <code>ListDatasets</code> call.
   *       After a <a>CreateDatasetImportJob</a> operation has finished,
   *         <code>LastModificationTime</code> is when the import job completed or failed.</p>
   */
  LastModificationTime?: Date;
}

export namespace DatasetSummary {
  export function isa(o: any): o is DatasetSummary {
    return _smithy.isa(o, "DatasetSummary");
  }
}

export enum DatasetType {
  ITEM_METADATA = "ITEM_METADATA",
  RELATED_TIME_SERIES = "RELATED_TIME_SERIES",
  TARGET_TIME_SERIES = "TARGET_TIME_SERIES"
}

export interface DeleteDatasetGroupRequest {
  __type?: "DeleteDatasetGroupRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group to delete.</p>
   */
  DatasetGroupArn: string | undefined;
}

export namespace DeleteDatasetGroupRequest {
  export function isa(o: any): o is DeleteDatasetGroupRequest {
    return _smithy.isa(o, "DeleteDatasetGroupRequest");
  }
}

export interface DeleteDatasetImportJobRequest {
  __type?: "DeleteDatasetImportJobRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset import job to delete.</p>
   */
  DatasetImportJobArn: string | undefined;
}

export namespace DeleteDatasetImportJobRequest {
  export function isa(o: any): o is DeleteDatasetImportJobRequest {
    return _smithy.isa(o, "DeleteDatasetImportJobRequest");
  }
}

export interface DeleteDatasetRequest {
  __type?: "DeleteDatasetRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset to delete.</p>
   */
  DatasetArn: string | undefined;
}

export namespace DeleteDatasetRequest {
  export function isa(o: any): o is DeleteDatasetRequest {
    return _smithy.isa(o, "DeleteDatasetRequest");
  }
}

export interface DeleteForecastExportJobRequest {
  __type?: "DeleteForecastExportJobRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the forecast export job to delete.</p>
   */
  ForecastExportJobArn: string | undefined;
}

export namespace DeleteForecastExportJobRequest {
  export function isa(o: any): o is DeleteForecastExportJobRequest {
    return _smithy.isa(o, "DeleteForecastExportJobRequest");
  }
}

export interface DeleteForecastRequest {
  __type?: "DeleteForecastRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the forecast to delete.</p>
   */
  ForecastArn: string | undefined;
}

export namespace DeleteForecastRequest {
  export function isa(o: any): o is DeleteForecastRequest {
    return _smithy.isa(o, "DeleteForecastRequest");
  }
}

export interface DeletePredictorRequest {
  __type?: "DeletePredictorRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor to delete.</p>
   */
  PredictorArn: string | undefined;
}

export namespace DeletePredictorRequest {
  export function isa(o: any): o is DeletePredictorRequest {
    return _smithy.isa(o, "DeletePredictorRequest");
  }
}

export interface DescribeDatasetGroupRequest {
  __type?: "DescribeDatasetGroupRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   */
  DatasetGroupArn: string | undefined;
}

export namespace DescribeDatasetGroupRequest {
  export function isa(o: any): o is DescribeDatasetGroupRequest {
    return _smithy.isa(o, "DescribeDatasetGroupRequest");
  }
}

export interface DescribeDatasetGroupResponse extends $MetadataBearer {
  __type?: "DescribeDatasetGroupResponse";
  /**
   * <p>When the dataset group was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>An array of Amazon Resource Names (ARNs) of the datasets contained in the dataset
   *       group.</p>
   */
  DatasetArns?: Array<string>;

  /**
   * <p>The ARN of the dataset group.</p>
   */
  DatasetGroupArn?: string;

  /**
   * <p>The name of the dataset group.</p>
   */
  DatasetGroupName?: string;

  /**
   * <p>The domain associated with the dataset group.</p>
   */
  Domain?: Domain | string;

  /**
   * <p>When the dataset group was created or last updated from a call to the <a>UpdateDatasetGroup</a> operation. While the dataset group is being updated,
   *         <code>LastModificationTime</code> is the current time of the
   *         <code>DescribeDatasetGroup</code> call.</p>
   */
  LastModificationTime?: Date;

  /**
   * <p>The status of the dataset group. States include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *             <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *             <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_PENDING</code>, <code>UPDATE_IN_PROGRESS</code>,
   *             <code>UPDATE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The <code>UPDATE</code> states apply when you call the <a>UpdateDatasetGroup</a> operation.</p>
   *          <note>
   *             <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can
   *         use the dataset group to create a predictor.</p>
   *          </note>
   */
  Status?: string;
}

export namespace DescribeDatasetGroupResponse {
  export function isa(o: any): o is DescribeDatasetGroupResponse {
    return _smithy.isa(o, "DescribeDatasetGroupResponse");
  }
}

export interface DescribeDatasetImportJobRequest {
  __type?: "DescribeDatasetImportJobRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset import job.</p>
   */
  DatasetImportJobArn: string | undefined;
}

export namespace DescribeDatasetImportJobRequest {
  export function isa(o: any): o is DescribeDatasetImportJobRequest {
    return _smithy.isa(o, "DescribeDatasetImportJobRequest");
  }
}

export interface DescribeDatasetImportJobResponse extends $MetadataBearer {
  __type?: "DescribeDatasetImportJobResponse";
  /**
   * <p>When the dataset import job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The size of the dataset in gigabytes (GB) after the import job has finished.</p>
   */
  DataSize?: number;

  /**
   * <p>The location of the training data to import and an AWS Identity and Access Management (IAM) role that Amazon Forecast
   *       can assume to access the data.</p>
   *          <p>If encryption is used, <code>DataSource</code> includes an AWS Key Management Service (KMS) key.</p>
   */
  DataSource?: DataSource;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that the training data was imported
   *       to.</p>
   */
  DatasetArn?: string;

  /**
   * <p>The ARN of the dataset import job.</p>
   */
  DatasetImportJobArn?: string;

  /**
   * <p>The name of the dataset import job.</p>
   */
  DatasetImportJobName?: string;

  /**
   * <p>Statistical information about each field in the input data.</p>
   */
  FieldStatistics?: { [key: string]: Statistics };

  /**
   * <p>The last time that the dataset was modified. The time depends on the status of the job, as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The same time as <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *           failed.</p>
   *             </li>
   *          </ul>
   */
  LastModificationTime?: Date;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * <p>The status of the dataset import job. The status is reflected in the status of the
   *       dataset. For example, when the import job status is <code>CREATE_IN_PROGRESS</code>, the
   *       status of the dataset is <code>UPDATE_IN_PROGRESS</code>. States include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *             <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *             <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>The format of timestamps in the dataset. The format that you specify depends on the
   *         <code>DataFrequency</code> specified when the dataset was created. The following formats are
   *       supported</p>
   *          <ul>
   *             <li>
   *                <p>"yyyy-MM-dd"</p>
   *                <p>For the following data frequencies: Y, M, W, and D</p>
   *             </li>
   *             <li>
   *                <p>"yyyy-MM-dd HH:mm:ss"</p>
   *                <p>For the following data frequencies: H, 30min, 15min, and 1min; and optionally, for: Y,
   *           M, W, and D</p>
   *             </li>
   *          </ul>
   */
  TimestampFormat?: string;
}

export namespace DescribeDatasetImportJobResponse {
  export function isa(o: any): o is DescribeDatasetImportJobResponse {
    return _smithy.isa(o, "DescribeDatasetImportJobResponse");
  }
}

export interface DescribeDatasetRequest {
  __type?: "DescribeDatasetRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DatasetArn: string | undefined;
}

export namespace DescribeDatasetRequest {
  export function isa(o: any): o is DescribeDatasetRequest {
    return _smithy.isa(o, "DescribeDatasetRequest");
  }
}

export interface DescribeDatasetResponse extends $MetadataBearer {
  __type?: "DescribeDatasetResponse";
  /**
   * <p>When the dataset was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The frequency of data collection.</p>
   *          <p>Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30 minutes),
   *       15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute). For example,
   *       "M" indicates every month and "30min" indicates every 30 minutes.</p>
   */
  DataFrequency?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DatasetArn?: string;

  /**
   * <p>The name of the dataset.</p>
   */
  DatasetName?: string;

  /**
   * <p>The dataset type.</p>
   */
  DatasetType?: DatasetType | string;

  /**
   * <p>The domain associated with the dataset.</p>
   */
  Domain?: Domain | string;

  /**
   * <p>The AWS Key Management Service (KMS) key and the AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access
   *       the key.</p>
   */
  EncryptionConfig?: EncryptionConfig;

  /**
   * <p>When you create a dataset, <code>LastModificationTime</code> is the same as
   *         <code>CreationTime</code>. While data is being imported to the dataset,
   *         <code>LastModificationTime</code> is the current time of the <code>DescribeDataset</code>
   *       call. After a <a>CreateDatasetImportJob</a> operation has finished,
   *         <code>LastModificationTime</code> is when the import job completed or failed.</p>
   */
  LastModificationTime?: Date;

  /**
   * <p>An array of <code>SchemaAttribute</code> objects that specify the dataset fields. Each
   *         <code>SchemaAttribute</code> specifies the name and data type of a field.</p>
   */
  Schema?: Schema;

  /**
   * <p>The status of the dataset. States include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *             <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *             <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_PENDING</code>, <code>UPDATE_IN_PROGRESS</code>,
   *             <code>UPDATE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The <code>UPDATE</code> states apply while data is imported to the dataset from a call to
   *       the <a>CreateDatasetImportJob</a> operation and reflect the status of the dataset
   *       import job. For example, when the import job status is <code>CREATE_IN_PROGRESS</code>, the
   *       status of the dataset is <code>UPDATE_IN_PROGRESS</code>.</p>
   *          <note>
   *             <p>The <code>Status</code> of the dataset must be <code>ACTIVE</code> before you can import
   *         training data.</p>
   *          </note>
   */
  Status?: string;
}

export namespace DescribeDatasetResponse {
  export function isa(o: any): o is DescribeDatasetResponse {
    return _smithy.isa(o, "DescribeDatasetResponse");
  }
}

export interface DescribeForecastExportJobRequest {
  __type?: "DescribeForecastExportJobRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the forecast export job.</p>
   */
  ForecastExportJobArn: string | undefined;
}

export namespace DescribeForecastExportJobRequest {
  export function isa(o: any): o is DescribeForecastExportJobRequest {
    return _smithy.isa(o, "DescribeForecastExportJobRequest");
  }
}

export interface DescribeForecastExportJobResponse extends $MetadataBearer {
  __type?: "DescribeForecastExportJobResponse";
  /**
   * <p>When the forecast export job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The path to the Amazon Simple Storage Service (Amazon S3) bucket where the forecast is exported.</p>
   */
  Destination?: DataDestination;

  /**
   * <p>The Amazon Resource Name (ARN) of the exported forecast.</p>
   */
  ForecastArn?: string;

  /**
   * <p>The ARN of the forecast export job.</p>
   */
  ForecastExportJobArn?: string;

  /**
   * <p>The name of the forecast export job.</p>
   */
  ForecastExportJobName?: string;

  /**
   * <p>When the last successful export job finished.</p>
   */
  LastModificationTime?: Date;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * <p>The status of the forecast export job. States include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *             <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *             <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before
   *         you can access the forecast in your S3 bucket.</p>
   *          </note>
   */
  Status?: string;
}

export namespace DescribeForecastExportJobResponse {
  export function isa(o: any): o is DescribeForecastExportJobResponse {
    return _smithy.isa(o, "DescribeForecastExportJobResponse");
  }
}

export interface DescribeForecastRequest {
  __type?: "DescribeForecastRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the forecast.</p>
   */
  ForecastArn: string | undefined;
}

export namespace DescribeForecastRequest {
  export function isa(o: any): o is DescribeForecastRequest {
    return _smithy.isa(o, "DescribeForecastRequest");
  }
}

export interface DescribeForecastResponse extends $MetadataBearer {
  __type?: "DescribeForecastResponse";
  /**
   * <p>When the forecast creation task was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The ARN of the dataset group that provided the data used to train the predictor.</p>
   */
  DatasetGroupArn?: string;

  /**
   * <p>The forecast ARN as specified in the request.</p>
   */
  ForecastArn?: string;

  /**
   * <p>The name of the forecast.</p>
   */
  ForecastName?: string;

  /**
   * <p>The quantiles at which probabilistic forecasts were generated.</p>
   */
  ForecastTypes?: Array<string>;

  /**
   * <p>Initially, the same as <code>CreationTime</code> (status is <code>CREATE_PENDING</code>).
   *       Updated when inference (creating the forecast) starts (status changed to
   *         <code>CREATE_IN_PROGRESS</code>), and when inference is complete (status changed to
   *         <code>ACTIVE</code>) or fails (status changed to <code>CREATE_FAILED</code>).</p>
   */
  LastModificationTime?: Date;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * <p>The ARN of the predictor used to generate the forecast.</p>
   */
  PredictorArn?: string;

  /**
   * <p>The status of the forecast. States include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *             <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *             <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query
   *         or export the forecast.</p>
   *          </note>
   */
  Status?: string;
}

export namespace DescribeForecastResponse {
  export function isa(o: any): o is DescribeForecastResponse {
    return _smithy.isa(o, "DescribeForecastResponse");
  }
}

export interface DescribePredictorRequest {
  __type?: "DescribePredictorRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor that you want information about.</p>
   */
  PredictorArn: string | undefined;
}

export namespace DescribePredictorRequest {
  export function isa(o: any): o is DescribePredictorRequest {
    return _smithy.isa(o, "DescribePredictorRequest");
  }
}

export interface DescribePredictorResponse extends $MetadataBearer {
  __type?: "DescribePredictorResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm used for model training.</p>
   */
  AlgorithmArn?: string;

  /**
   * <p>When <code>PerformAutoML</code> is specified, the ARN of the chosen algorithm.</p>
   */
  AutoMLAlgorithmArns?: Array<string>;

  /**
   * <p>When the model training task was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>An array of the ARNs of the dataset import jobs used to import training data for the
   *       predictor.</p>
   */
  DatasetImportJobArns?: Array<string>;

  /**
   * <p>An AWS Key Management Service (KMS) key and the AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access
   *       the key.</p>
   */
  EncryptionConfig?: EncryptionConfig;

  /**
   * <p>Used to override the default evaluation parameters of the specified algorithm. Amazon Forecast
   *       evaluates a predictor by splitting a dataset into training data and testing data. The
   *       evaluation parameters define how to perform the split and the number of iterations.</p>
   */
  EvaluationParameters?: EvaluationParameters;

  /**
   * <p>The featurization configuration.</p>
   */
  FeaturizationConfig?: FeaturizationConfig;

  /**
   * <p>The number of time-steps of the forecast. The forecast horizon is also called the
   *       prediction length.</p>
   */
  ForecastHorizon?: number;

  /**
   * <p>The hyperparameter override values for the algorithm.</p>
   */
  HPOConfig?: HyperParameterTuningJobConfig;

  /**
   * <p>Describes the dataset group that contains the data to use to train the predictor.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>Initially, the same as <code>CreationTime</code> (when the status is
   *         <code>CREATE_PENDING</code>). This value is updated when training starts (when the status
   *       changes to <code>CREATE_IN_PROGRESS</code>), and when training has completed (when the status
   *       changes to <code>ACTIVE</code>) or fails (when the status changes to
   *         <code>CREATE_FAILED</code>).</p>
   */
  LastModificationTime?: Date;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * <p>Whether the predictor is set to perform AutoML.</p>
   */
  PerformAutoML?: boolean;

  /**
   * <p>Whether the predictor is set to perform hyperparameter optimization (HPO).</p>
   */
  PerformHPO?: boolean;

  /**
   * <p>The ARN of the predictor.</p>
   */
  PredictorArn?: string;

  /**
   * <p>Details on the the status and results of the backtests performed to evaluate the accuracy
   *       of the predictor. You specify the number of backtests to perform when you call the  operation.</p>
   */
  PredictorExecutionDetails?: PredictorExecutionDetails;

  /**
   * <p>The name of the predictor.</p>
   */
  PredictorName?: string;

  /**
   * <p>The status of the predictor. States include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *             <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *             <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_PENDING</code>, <code>UPDATE_IN_PROGRESS</code>,
   *             <code>UPDATE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Status</code> of the predictor must be <code>ACTIVE</code> before you can use
   *         the predictor to create a forecast.</p>
   *          </note>
   */
  Status?: string;

  /**
   * <p>The default training parameters or overrides selected during model training. If using the
   *       AutoML algorithm or if HPO is turned on while using the DeepAR+ algorithms, the optimized
   *       values for the chosen hyperparameters are returned. For more information, see <a>aws-forecast-choosing-recipes</a>.</p>
   */
  TrainingParameters?: { [key: string]: string };
}

export namespace DescribePredictorResponse {
  export function isa(o: any): o is DescribePredictorResponse {
    return _smithy.isa(o, "DescribePredictorResponse");
  }
}

export enum Domain {
  CUSTOM = "CUSTOM",
  EC2_CAPACITY = "EC2_CAPACITY",
  INVENTORY_PLANNING = "INVENTORY_PLANNING",
  METRICS = "METRICS",
  RETAIL = "RETAIL",
  WEB_TRAFFIC = "WEB_TRAFFIC",
  WORK_FORCE = "WORK_FORCE"
}

/**
 * <p>An AWS Key Management Service (KMS) key and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to
 *       access the key. You can specify this optional object in the
 *       <a>CreateDataset</a> and <a>CreatePredictor</a> requests.</p>
 */
export interface EncryptionConfig {
  __type?: "EncryptionConfig";
  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key.</p>
   */
  KMSKeyArn: string | undefined;

  /**
   * <p>The ARN of the IAM role that Amazon Forecast can assume to access the AWS KMS key.</p>
   *          <p>Passing a role across AWS accounts is not allowed. If you pass a role that isn't in your
   *       account, you get an <code>InvalidInputException</code> error.</p>
   */
  RoleArn: string | undefined;
}

export namespace EncryptionConfig {
  export function isa(o: any): o is EncryptionConfig {
    return _smithy.isa(o, "EncryptionConfig");
  }
}

/**
 * <p>Parameters that define how to split a dataset into training data and testing data, and the
 *       number of iterations to perform. These parameters are specified in the predefined algorithms
 *       but you can override them in the <a>CreatePredictor</a> request.</p>
 */
export interface EvaluationParameters {
  __type?: "EvaluationParameters";
  /**
   * <p>The point from the end of the dataset where you want to split the data for model training
   *       and testing (evaluation). Specify the value as the number of data points. The default is the
   *       value of the forecast horizon. <code>BackTestWindowOffset</code> can be used to mimic a past
   *       virtual forecast start date. This value must be greater than or equal to the forecast horizon
   *       and less than half of the TARGET_TIME_SERIES dataset length.</p>
   *          <p>
   *             <code>ForecastHorizon</code> <= <code>BackTestWindowOffset</code> < 1/2 *
   *       TARGET_TIME_SERIES dataset length</p>
   */
  BackTestWindowOffset?: number;

  /**
   * <p>The number of times to split the input data. The default is 1. Valid values are 1 through
   *       5.</p>
   */
  NumberOfBacktestWindows?: number;
}

export namespace EvaluationParameters {
  export function isa(o: any): o is EvaluationParameters {
    return _smithy.isa(o, "EvaluationParameters");
  }
}

/**
 * <p>The results of evaluating an algorithm. Returned as part of the
 *       <a>GetAccuracyMetrics</a> response.</p>
 */
export interface EvaluationResult {
  __type?: "EvaluationResult";
  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm that was evaluated.</p>
   */
  AlgorithmArn?: string;

  /**
   * <p>The array of test windows used for evaluating the algorithm. The
   *       <code>NumberOfBacktestWindows</code> from the <a>EvaluationParameters</a>
   *       object determines the number of windows in the array.</p>
   */
  TestWindows?: Array<WindowSummary>;
}

export namespace EvaluationResult {
  export function isa(o: any): o is EvaluationResult {
    return _smithy.isa(o, "EvaluationResult");
  }
}

export enum EvaluationType {
  COMPUTED = "COMPUTED",
  SUMMARY = "SUMMARY"
}

/**
 * <p>Provides featurization (transformation) information for a dataset field. This object
 *       is part of the <a>FeaturizationConfig</a> object.</p>
 *          <p>For example:</p>
 *          <p>
 *             <code>{</code>
 *          </p>
 *          <p>
 *             <code>"AttributeName": "demand",</code>
 *          </p>
 *          <p>
 *             <code>FeaturizationPipeline [ {</code>
 *          </p>
 *
 *          <p>
 *             <code>"FeaturizationMethodName": "filling",</code>
 *          </p>
 *          <p>
 *             <code>"FeaturizationMethodParameters": {"aggregation": "avg", "backfill": "nan"}</code>
 *          </p>
 *          <p>
 *             <code>} ]</code>
 *          </p>
 *          <p>
 *             <code>}</code>
 *          </p>
 */
export interface Featurization {
  __type?: "Featurization";
  /**
   * <p>The name of the schema attribute that specifies the data field to be featurized.
   *       Only the <code>target</code> field of the <code>TARGET_TIME_SERIES</code>
   *       dataset type is supported. For example, for the <code>RETAIL</code> domain, the target is
   *       <code>demand</code>, and for the <code>CUSTOM</code> domain, the target is
   *       <code>target_value</code>.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>An array of one <code>FeaturizationMethod</code> object that specifies the feature
   *       transformation method.</p>
   */
  FeaturizationPipeline?: Array<FeaturizationMethod>;
}

export namespace Featurization {
  export function isa(o: any): o is Featurization {
    return _smithy.isa(o, "Featurization");
  }
}

/**
 * <p>In a <a>CreatePredictor</a> operation, the specified algorithm
 *       trains a model using the specified dataset group. You can optionally tell the operation
 *       to modify data fields prior to training a model. These modifications are referred to as
 *       <i>featurization</i>.</p>
 *          <p>You define featurization using the <code>FeaturizationConfig</code> object.
 *       You specify an array of transformations, one for each field that you want to
 *       featurize. You then include the <code>FeaturizationConfig</code> object in your
 *       <code>CreatePredictor</code> request. Amazon Forecast applies the featurization to the
 *       <code>TARGET_TIME_SERIES</code> dataset before model training.</p>
 *          <p>You can create multiple featurization configurations. For example, you
 *       might call the <code>CreatePredictor</code> operation twice by specifying different
 *       featurization configurations.</p>
 */
export interface FeaturizationConfig {
  __type?: "FeaturizationConfig";
  /**
   * <p>An array of featurization (transformation) information for the fields of a dataset.
   *       Only a single featurization is supported.</p>
   */
  Featurizations?: Array<Featurization>;

  /**
   * <p>An array of dimension (field) names that specify how to group the generated forecast.</p>
   *          <p>For example, suppose that you are generating a forecast for item sales across all of
   *       your stores, and your dataset contains a <code>store_id</code> field. If you want the sales
   *       forecast for each item by store, you would specify <code>store_id</code> as the dimension.</p>
   *          <p>All forecast dimensions specified in the <code>TARGET_TIME_SERIES</code> dataset don't
   *       need to be specified in the <code>CreatePredictor</code> request.
   *       All forecast dimensions specified in the <code>RELATED_TIME_SERIES</code> dataset must
   *       be specified in the <code>CreatePredictor</code> request.</p>
   */
  ForecastDimensions?: Array<string>;

  /**
   * <p>The frequency of predictions in a forecast.</p>
   *          <p>Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30 minutes),
   *       15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute).
   *       For example, "Y" indicates every year and "5min" indicates every five minutes.</p>
   *          <p>The frequency must be greater than or equal to the TARGET_TIME_SERIES dataset
   *       frequency.</p>
   *          <p>When a RELATED_TIME_SERIES dataset is provided, the frequency must be equal to the
   *       RELATED_TIME_SERIES dataset frequency.</p>
   */
  ForecastFrequency: string | undefined;
}

export namespace FeaturizationConfig {
  export function isa(o: any): o is FeaturizationConfig {
    return _smithy.isa(o, "FeaturizationConfig");
  }
}

/**
 * <p>Provides information about the method that featurizes (transforms) a dataset field.
 *       The method is part of the <code>FeaturizationPipeline</code> of the
 *       <a>Featurization</a> object. If you don't specify <code>FeaturizationMethodParameters</code>,
 *       Amazon Forecast uses default parameters.</p>
 *          <p>The following is an example of how you specify a <code>FeaturizationMethod</code> object.</p>
 *          <p>
 *             <code>{</code>
 *          </p>
 *          <p>
 *             <code>"FeaturizationMethodName": "filling",</code>
 *          </p>
 *          <p>
 *             <code>"FeaturizationMethodParameters": {"aggregation": "avg", "backfill": "nan"}</code>
 *          </p>
 *          <p>
 *             <code>}</code>
 *          </p>
 */
export interface FeaturizationMethod {
  __type?: "FeaturizationMethod";
  /**
   * <p>The name of the method. The "filling" method is the only supported method.</p>
   */
  FeaturizationMethodName: FeaturizationMethodName | string | undefined;

  /**
   * <p>The method parameters (key-value pairs). Specify these parameters to override the default values.
   *       The following list shows the parameters and their valid values. Bold signifies the default
   *       value.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aggregation</code>: <b>sum</b>, <code>avg</code>, <code>first</code>, <code>min</code>, <code>max</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>frontfill</code>: <b>none</b>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>middlefill</code>: <b>zero</b>, <code>nan</code> (not a number)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>backfill</code>: <b>zero</b>, <code>nan</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  FeaturizationMethodParameters?: { [key: string]: string };
}

export namespace FeaturizationMethod {
  export function isa(o: any): o is FeaturizationMethod {
    return _smithy.isa(o, "FeaturizationMethod");
  }
}

export enum FeaturizationMethodName {
  filling = "filling"
}

/**
 * <p>Describes a filter for choosing a subset of objects. Each filter consists of a
 *       condition and a match statement. The condition is either <code>IS</code> or
 *       <code>IS_NOT</code>, which specifies whether to include or exclude
 *       the objects that match the statement, respectively. The match statement consists of a key and a
 *       value.</p>
 */
export interface Filter {
  __type?: "Filter";
  /**
   * <p>The condition to apply. To include the objects that match the statement, specify
   *       <code>IS</code>. To exclude matching objects, specify <code>IS_NOT</code>.</p>
   */
  Condition: FilterConditionString | string | undefined;

  /**
   * <p>The name of the parameter to filter on.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value to match.</p>
   */
  Value: string | undefined;
}

export namespace Filter {
  export function isa(o: any): o is Filter {
    return _smithy.isa(o, "Filter");
  }
}

export enum FilterConditionString {
  IS = "IS",
  IS_NOT = "IS_NOT"
}

/**
 * <p>Provides a summary of the forecast export job properties used in the <a>ListForecastExportJobs</a> operation. To get the complete set of properties, call
 *       the <a>DescribeForecastExportJob</a> operation, and provide the listed
 *         <code>ForecastExportJobArn</code>.</p>
 */
export interface ForecastExportJobSummary {
  __type?: "ForecastExportJobSummary";
  /**
   * <p>When the forecast export job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The path to the Amazon Simple Storage Service (Amazon S3) bucket where the forecast is exported.</p>
   */
  Destination?: DataDestination;

  /**
   * <p>The Amazon Resource Name (ARN) of the forecast export job.</p>
   */
  ForecastExportJobArn?: string;

  /**
   * <p>The name of the forecast export job.</p>
   */
  ForecastExportJobName?: string;

  /**
   * <p>When the last successful export job finished.</p>
   */
  LastModificationTime?: Date;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * <p>The status of the forecast export job. States include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *             <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *             <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before
   *         you can access the forecast in your S3 bucket.</p>
   *          </note>
   */
  Status?: string;
}

export namespace ForecastExportJobSummary {
  export function isa(o: any): o is ForecastExportJobSummary {
    return _smithy.isa(o, "ForecastExportJobSummary");
  }
}

/**
 * <p>Provides a summary of the forecast properties used in the <a>ListForecasts</a>
 *       operation. To get the complete set of properties, call the <a>DescribeForecast</a>
 *       operation, and provide the <code>ForecastArn</code> that is listed in the summary.</p>
 */
export interface ForecastSummary {
  __type?: "ForecastSummary";
  /**
   * <p>When the forecast creation task was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group that provided the data used to train
   *       the predictor.</p>
   */
  DatasetGroupArn?: string;

  /**
   * <p>The ARN of the forecast.</p>
   */
  ForecastArn?: string;

  /**
   * <p>The name of the forecast.</p>
   */
  ForecastName?: string;

  /**
   * <p>Initially, the same as <code>CreationTime</code> (status is <code>CREATE_PENDING</code>).
   *       Updated when inference (creating the forecast) starts (status changed to
   *         <code>CREATE_IN_PROGRESS</code>), and when inference is complete (status changed to
   *         <code>ACTIVE</code>) or fails (status changed to <code>CREATE_FAILED</code>).</p>
   */
  LastModificationTime?: Date;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * <p>The ARN of the predictor used to generate the forecast.</p>
   */
  PredictorArn?: string;

  /**
   * <p>The status of the forecast. States include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *             <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *             <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query
   *         or export the forecast.</p>
   *          </note>
   */
  Status?: string;
}

export namespace ForecastSummary {
  export function isa(o: any): o is ForecastSummary {
    return _smithy.isa(o, "ForecastSummary");
  }
}

export interface GetAccuracyMetricsRequest {
  __type?: "GetAccuracyMetricsRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor to get metrics for.</p>
   */
  PredictorArn: string | undefined;
}

export namespace GetAccuracyMetricsRequest {
  export function isa(o: any): o is GetAccuracyMetricsRequest {
    return _smithy.isa(o, "GetAccuracyMetricsRequest");
  }
}

export interface GetAccuracyMetricsResponse extends $MetadataBearer {
  __type?: "GetAccuracyMetricsResponse";
  /**
   * <p>An array of results from evaluating the predictor.</p>
   */
  PredictorEvaluationResults?: Array<EvaluationResult>;
}

export namespace GetAccuracyMetricsResponse {
  export function isa(o: any): o is GetAccuracyMetricsResponse {
    return _smithy.isa(o, "GetAccuracyMetricsResponse");
  }
}

/**
 * <p>Configuration information for a hyperparameter tuning job. You specify this object in
 *       the <a>CreatePredictor</a> request.</p>
 *          <p>A <i>hyperparameter</i> is a parameter that governs the model training process. You set
 *       hyperparameters before training starts, unlike model parameters, which are determined during
 *       training. The values of the hyperparameters effect which values are chosen for the model parameters.</p>
 *          <p>In a <i>hyperparameter tuning job</i>, Amazon Forecast chooses the set of hyperparameter
 *       values that optimize a specified metric.  Forecast accomplishes this by running many training jobs
 *       over a range of hyperparameter values. The optimum set of values depends on the
 *       algorithm, the training data, and the specified metric objective.</p>
 */
export interface HyperParameterTuningJobConfig {
  __type?: "HyperParameterTuningJobConfig";
  /**
   * <p>Specifies the ranges of valid values for the hyperparameters.</p>
   */
  ParameterRanges?: ParameterRanges;
}

export namespace HyperParameterTuningJobConfig {
  export function isa(o: any): o is HyperParameterTuningJobConfig {
    return _smithy.isa(o, "HyperParameterTuningJobConfig");
  }
}

/**
 * <p>The data used to train a predictor. The data includes a dataset group and any
 *       supplementary features. You specify this object in the <a>CreatePredictor</a>
 *       request.</p>
 */
export interface InputDataConfig {
  __type?: "InputDataConfig";
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   */
  DatasetGroupArn: string | undefined;

  /**
   * <p>An array of supplementary features. The only supported feature is a holiday
   *       calendar.</p>
   */
  SupplementaryFeatures?: Array<SupplementaryFeature>;
}

export namespace InputDataConfig {
  export function isa(o: any): o is InputDataConfig {
    return _smithy.isa(o, "InputDataConfig");
  }
}

/**
 * <p>Specifies an integer hyperparameter and it's range of tunable values.
 *       This object is part of the <a>ParameterRanges</a> object.</p>
 */
export interface IntegerParameterRange {
  __type?: "IntegerParameterRange";
  /**
   * <p>The maximum tunable value of the hyperparameter.</p>
   */
  MaxValue: number | undefined;

  /**
   * <p>The minimum tunable value of the hyperparameter.</p>
   */
  MinValue: number | undefined;

  /**
   * <p>The name of the hyperparameter to tune.</p>
   */
  Name: string | undefined;

  /**
   * <p>The scale that hyperparameter tuning uses to search the hyperparameter range.
   *       Valid values:</p>
   *          <dl>
   *             <dt>Auto</dt>
   *             <dd>
   *                <p>Amazon Forecast hyperparameter tuning chooses the best scale for the hyperparameter.</p>
   *             </dd>
   *             <dt>Linear</dt>
   *             <dd>
   *                <p>Hyperparameter tuning searches the values in the hyperparameter range by using a
   *             linear scale.</p>
   *             </dd>
   *             <dt>Logarithmic</dt>
   *             <dd>
   *                <p>Hyperparameter tuning searches the values in the hyperparameter range by using a
   *             logarithmic scale.</p>
   *                <p>Logarithmic scaling works only for ranges that have values greater than 0.</p>
   *             </dd>
   *             <dt>ReverseLogarithmic</dt>
   *             <dd>
   *                <p>Not supported for <code>IntegerParameterRange</code>.</p>
   *                <p>Reverse logarithmic scaling works only for ranges that are entirely within the
   *             range 0 <= x < 1.0.</p>
   *             </dd>
   *          </dl>
   *          <p>For information about choosing a hyperparameter scale, see
   *       <a href="http://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-ranges.html#scaling-type">Hyperparameter Scaling</a>.
   *       One of the following values:</p>
   */
  ScalingType?: ScalingType | string;
}

export namespace IntegerParameterRange {
  export function isa(o: any): o is IntegerParameterRange {
    return _smithy.isa(o, "IntegerParameterRange");
  }
}

/**
 * <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 */
export interface InvalidInputException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidInputException";
  name: "InvalidInputException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInputException {
  export function isa(o: any): o is InvalidInputException {
    return _smithy.isa(o, "InvalidInputException");
  }
}

/**
 * <p>The token is not valid. Tokens expire after 24 hours.</p>
 */
export interface InvalidNextTokenException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidNextTokenException";
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextTokenException {
  export function isa(o: any): o is InvalidNextTokenException {
    return _smithy.isa(o, "InvalidNextTokenException");
  }
}

/**
 * <p>The limit on the number of resources per account has been exceeded.</p>
 */
export interface LimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "LimitExceededException";
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, "LimitExceededException");
  }
}

export interface ListDatasetGroupsRequest {
  __type?: "ListDatasetGroupsRequest";
  /**
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;
}

export namespace ListDatasetGroupsRequest {
  export function isa(o: any): o is ListDatasetGroupsRequest {
    return _smithy.isa(o, "ListDatasetGroupsRequest");
  }
}

export interface ListDatasetGroupsResponse extends $MetadataBearer {
  __type?: "ListDatasetGroupsResponse";
  /**
   * <p>An array of objects that summarize each dataset group's properties.</p>
   */
  DatasetGroups?: Array<DatasetGroupSummary>;

  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListDatasetGroupsResponse {
  export function isa(o: any): o is ListDatasetGroupsResponse {
    return _smithy.isa(o, "ListDatasetGroupsResponse");
  }
}

export interface ListDatasetImportJobsRequest {
  __type?: "ListDatasetImportJobsRequest";
  /**
   * <p>An array of filters. For each filter, you provide a condition and a match statement. The
   *       condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include
   *       or exclude the datasets that match the statement from the list, respectively. The match
   *       statement consists of a key and a value.</p>
   *          <p>
   *             <b>Filter properties</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Condition</code> - The condition to apply. Valid values are <code>IS</code> and
   *             <code>IS_NOT</code>. To include the datasets that match the statement, specify
   *             <code>IS</code>. To exclude matching datasets, specify <code>IS_NOT</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key</code> - The name of the parameter to filter on. Valid values are
   *             <code>DatasetArn</code> and <code>Status</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Value</code> - The value to match.</p>
   *             </li>
   *          </ul>
   *          <p>For example, to list all dataset import jobs whose status is ACTIVE, you specify the
   *       following filter:</p>
   *          <p>
   *             <code>"Filters": [ { "Condition": "IS", "Key": "Status", "Value": "ACTIVE" }
   *       ]</code>
   *          </p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;
}

export namespace ListDatasetImportJobsRequest {
  export function isa(o: any): o is ListDatasetImportJobsRequest {
    return _smithy.isa(o, "ListDatasetImportJobsRequest");
  }
}

export interface ListDatasetImportJobsResponse extends $MetadataBearer {
  __type?: "ListDatasetImportJobsResponse";
  /**
   * <p>An array of objects that summarize each dataset import job's properties.</p>
   */
  DatasetImportJobs?: Array<DatasetImportJobSummary>;

  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListDatasetImportJobsResponse {
  export function isa(o: any): o is ListDatasetImportJobsResponse {
    return _smithy.isa(o, "ListDatasetImportJobsResponse");
  }
}

export interface ListDatasetsRequest {
  __type?: "ListDatasetsRequest";
  /**
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;
}

export namespace ListDatasetsRequest {
  export function isa(o: any): o is ListDatasetsRequest {
    return _smithy.isa(o, "ListDatasetsRequest");
  }
}

export interface ListDatasetsResponse extends $MetadataBearer {
  __type?: "ListDatasetsResponse";
  /**
   * <p>An array of objects that summarize each dataset's properties.</p>
   */
  Datasets?: Array<DatasetSummary>;

  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListDatasetsResponse {
  export function isa(o: any): o is ListDatasetsResponse {
    return _smithy.isa(o, "ListDatasetsResponse");
  }
}

export interface ListForecastExportJobsRequest {
  __type?: "ListForecastExportJobsRequest";
  /**
   * <p>An array of filters. For each filter, you provide a condition and a match statement. The
   *       condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include
   *       or exclude the forecast export jobs that match the statement from the list, respectively. The
   *       match statement consists of a key and a value.</p>
   *          <p>
   *             <b>Filter properties</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Condition</code> - The condition to apply. Valid values are <code>IS</code> and
   *             <code>IS_NOT</code>. To include the forecast export jobs that match the statement,
   *           specify <code>IS</code>. To exclude matching forecast export jobs, specify
   *             <code>IS_NOT</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key</code> - The name of the parameter to filter on. Valid values are
   *             <code>ForecastArn</code> and <code>Status</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Value</code> - The value to match.</p>
   *             </li>
   *          </ul>
   *          <p>For example, to list all jobs that export a forecast named
   *         <i>electricityforecast</i>, specify the following filter:</p>
   *          <p>
   *             <code>"Filters": [ { "Condition": "IS", "Key": "ForecastArn", "Value":
   *         "arn:aws:forecast:us-west-2:<acct-id>:forecast/electricityforecast" } ]</code>
   *          </p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;
}

export namespace ListForecastExportJobsRequest {
  export function isa(o: any): o is ListForecastExportJobsRequest {
    return _smithy.isa(o, "ListForecastExportJobsRequest");
  }
}

export interface ListForecastExportJobsResponse extends $MetadataBearer {
  __type?: "ListForecastExportJobsResponse";
  /**
   * <p>An array of objects that summarize each export job's properties.</p>
   */
  ForecastExportJobs?: Array<ForecastExportJobSummary>;

  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListForecastExportJobsResponse {
  export function isa(o: any): o is ListForecastExportJobsResponse {
    return _smithy.isa(o, "ListForecastExportJobsResponse");
  }
}

export interface ListForecastsRequest {
  __type?: "ListForecastsRequest";
  /**
   * <p>An array of filters. For each filter, you provide a condition and a match statement. The
   *       condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include
   *       or exclude the forecasts that match the statement from the list, respectively. The match
   *       statement consists of a key and a value.</p>
   *          <p>
   *             <b>Filter properties</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Condition</code> - The condition to apply. Valid values are <code>IS</code> and
   *             <code>IS_NOT</code>. To include the forecasts that match the statement, specify
   *             <code>IS</code>. To exclude matching forecasts, specify <code>IS_NOT</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key</code> - The name of the parameter to filter on. Valid values are
   *             <code>DatasetGroupArn</code>, <code>PredictorArn</code>, and <code>Status</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Value</code> - The value to match.</p>
   *             </li>
   *          </ul>
   *          <p>For example, to list all forecasts whose status is not ACTIVE, you would specify:</p>
   *          <p>
   *             <code>"Filters": [ { "Condition": "IS_NOT", "Key": "Status", "Value": "ACTIVE" }
   *       ]</code>
   *          </p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;
}

export namespace ListForecastsRequest {
  export function isa(o: any): o is ListForecastsRequest {
    return _smithy.isa(o, "ListForecastsRequest");
  }
}

export interface ListForecastsResponse extends $MetadataBearer {
  __type?: "ListForecastsResponse";
  /**
   * <p>An array of objects that summarize each forecast's properties.</p>
   */
  Forecasts?: Array<ForecastSummary>;

  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set
   *       of results, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListForecastsResponse {
  export function isa(o: any): o is ListForecastsResponse {
    return _smithy.isa(o, "ListForecastsResponse");
  }
}

export interface ListPredictorsRequest {
  __type?: "ListPredictorsRequest";
  /**
   * <p>An array of filters. For each filter, you provide a condition and a match statement. The
   *       condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include
   *       or exclude the predictors that match the statement from the list, respectively. The match
   *       statement consists of a key and a value.</p>
   *          <p>
   *             <b>Filter properties</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Condition</code> - The condition to apply. Valid values are <code>IS</code> and
   *             <code>IS_NOT</code>. To include the predictors that match the statement, specify
   *             <code>IS</code>. To exclude matching predictors, specify <code>IS_NOT</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key</code> - The name of the parameter to filter on. Valid values are
   *             <code>DatasetGroupArn</code> and <code>Status</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Value</code> - The value to match.</p>
   *             </li>
   *          </ul>
   *          <p>For example, to list all predictors whose status is ACTIVE, you would specify:</p>
   *          <p>
   *             <code>"Filters": [ { "Condition": "IS", "Key": "Status", "Value": "ACTIVE" }
   *       ]</code>
   *          </p>
   */
  Filters?: Array<Filter>;

  /**
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;
}

export namespace ListPredictorsRequest {
  export function isa(o: any): o is ListPredictorsRequest {
    return _smithy.isa(o, "ListPredictorsRequest");
  }
}

export interface ListPredictorsResponse extends $MetadataBearer {
  __type?: "ListPredictorsResponse";
  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * <p>An array of objects that summarize each predictor's properties.</p>
   */
  Predictors?: Array<PredictorSummary>;
}

export namespace ListPredictorsResponse {
  export function isa(o: any): o is ListPredictorsResponse {
    return _smithy.isa(o, "ListPredictorsResponse");
  }
}

/**
 * <p>Provides metrics that are used to evaluate the performance of a predictor. This object
 *       is part of the <a>WindowSummary</a> object.</p>
 */
export interface Metrics {
  __type?: "Metrics";
  /**
   * <p>The root mean square error (RMSE).</p>
   */
  RMSE?: number;

  /**
   * <p>An array of weighted quantile losses. Quantiles divide a probability distribution into
   *       regions of equal probability. The distribution in this case is the loss function.</p>
   */
  WeightedQuantileLosses?: Array<WeightedQuantileLoss>;
}

export namespace Metrics {
  export function isa(o: any): o is Metrics {
    return _smithy.isa(o, "Metrics");
  }
}

/**
 * <p>Specifies the categorical, continuous, and integer hyperparameters, and their ranges of
 *       tunable values. The range of tunable values determines which values that a hyperparameter
 *       tuning job can choose for the specified hyperparameter. This object is part of the
 *       <a>HyperParameterTuningJobConfig</a> object.</p>
 */
export interface ParameterRanges {
  __type?: "ParameterRanges";
  /**
   * <p>Specifies the tunable range for each categorical hyperparameter.</p>
   */
  CategoricalParameterRanges?: Array<CategoricalParameterRange>;

  /**
   * <p>Specifies the tunable range for each continuous hyperparameter.</p>
   */
  ContinuousParameterRanges?: Array<ContinuousParameterRange>;

  /**
   * <p>Specifies the tunable range for each integer hyperparameter.</p>
   */
  IntegerParameterRanges?: Array<IntegerParameterRange>;
}

export namespace ParameterRanges {
  export function isa(o: any): o is ParameterRanges {
    return _smithy.isa(o, "ParameterRanges");
  }
}

/**
 * <p>The algorithm used to perform a backtest and the status of those tests.</p>
 */
export interface PredictorExecution {
  __type?: "PredictorExecution";
  /**
   * <p>The ARN of the algorithm used to test the predictor.</p>
   */
  AlgorithmArn?: string;

  /**
   * <p>An array of test windows used to evaluate the algorithm. The
   *         <code>NumberOfBacktestWindows</code> from the
   *       object determines the number of windows in the array.</p>
   */
  TestWindows?: Array<TestWindowSummary>;
}

export namespace PredictorExecution {
  export function isa(o: any): o is PredictorExecution {
    return _smithy.isa(o, "PredictorExecution");
  }
}

/**
 * <p>Contains details on the backtests performed to evaluate the accuracy of the predictor. The
 *       tests are returned in descending order of accuracy, with the most accurate backtest appearing
 *       first. You specify the number of backtests to perform when you call the  operation.</p>
 */
export interface PredictorExecutionDetails {
  __type?: "PredictorExecutionDetails";
  /**
   * <p>An array of the backtests performed to evaluate the accuracy of the predictor against a
   *       particular algorithm. The <code>NumberOfBacktestWindows</code> from the  object determines the number of windows in the
   *       array.</p>
   */
  PredictorExecutions?: Array<PredictorExecution>;
}

export namespace PredictorExecutionDetails {
  export function isa(o: any): o is PredictorExecutionDetails {
    return _smithy.isa(o, "PredictorExecutionDetails");
  }
}

/**
 * <p>Provides a summary of the predictor properties that are used in the <a>ListPredictors</a> operation. To get the complete set of properties, call the <a>DescribePredictor</a> operation, and provide the listed
 *       <code>PredictorArn</code>.</p>
 */
export interface PredictorSummary {
  __type?: "PredictorSummary";
  /**
   * <p>When the model training task was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group that contains the data used to train
   *       the predictor.</p>
   */
  DatasetGroupArn?: string;

  /**
   * <p>Initially, the same as <code>CreationTime</code> (status is <code>CREATE_PENDING</code>).
   *       Updated when training starts (status changed to <code>CREATE_IN_PROGRESS</code>), and when
   *       training is complete (status changed to <code>ACTIVE</code>) or fails (status changed to
   *         <code>CREATE_FAILED</code>).</p>
   */
  LastModificationTime?: Date;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * <p>The ARN of the predictor.</p>
   */
  PredictorArn?: string;

  /**
   * <p>The name of the predictor.</p>
   */
  PredictorName?: string;

  /**
   * <p>The status of the predictor. States include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *             <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *             <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_PENDING</code>, <code>UPDATE_IN_PROGRESS</code>,
   *             <code>UPDATE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Status</code> of the predictor must be <code>ACTIVE</code> before you can use
   *         the predictor to create a forecast.</p>
   *          </note>
   */
  Status?: string;
}

export namespace PredictorSummary {
  export function isa(o: any): o is PredictorSummary {
    return _smithy.isa(o, "PredictorSummary");
  }
}

/**
 * <p>There is already a resource with this name. Try again with a different name.</p>
 */
export interface ResourceAlreadyExistsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceAlreadyExistsException";
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceAlreadyExistsException {
  export function isa(o: any): o is ResourceAlreadyExistsException {
    return _smithy.isa(o, "ResourceAlreadyExistsException");
  }
}

/**
 * <p>The specified resource is in use.</p>
 */
export interface ResourceInUseException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceInUseException";
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUseException {
  export function isa(o: any): o is ResourceInUseException {
    return _smithy.isa(o, "ResourceInUseException");
  }
}

/**
 * <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 */
export interface ResourceNotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceNotFoundException";
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return _smithy.isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an AWS Identity and Access Management (IAM) role
 *       that Amazon Forecast can assume to access the file(s). Optionally, includes
 *       an AWS Key Management Service (KMS) key. This object is part of the <a>DataSource</a> object that
 *       is submitted in the <a>CreateDatasetImportJob</a> request, and part of the
 *       <a>DataDestination</a> object that is submitted in the
 *       <a>CreateForecastExportJob</a> request.</p>
 */
export interface S3Config {
  __type?: "S3Config";
  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key.</p>
   */
  KMSKeyArn?: string;

  /**
   * <p>The path to an Amazon Simple Storage Service (Amazon S3) bucket or file(s) in an Amazon S3 bucket.</p>
   */
  Path: string | undefined;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3
   *       bucket or files. If you provide a value for the <code>KMSKeyArn</code> key, the role must
   *       allow access to the key.</p>
   *          <p>Passing a role across AWS accounts is not allowed. If you pass a role that isn't in your
   *       account, you get an <code>InvalidInputException</code> error.</p>
   */
  RoleArn: string | undefined;
}

export namespace S3Config {
  export function isa(o: any): o is S3Config {
    return _smithy.isa(o, "S3Config");
  }
}

export enum ScalingType {
  Auto = "Auto",
  Linear = "Linear",
  Logarithmic = "Logarithmic",
  ReverseLogarithmic = "ReverseLogarithmic"
}

/**
 * <p>Defines the fields of a dataset. You specify this object in the <a>CreateDataset</a> request.</p>
 */
export interface Schema {
  __type?: "Schema";
  /**
   * <p>An array of attributes specifying the name and type of each field in a dataset.</p>
   */
  Attributes?: Array<SchemaAttribute>;
}

export namespace Schema {
  export function isa(o: any): o is Schema {
    return _smithy.isa(o, "Schema");
  }
}

/**
 * <p>An attribute of a schema, which defines a dataset field. A schema attribute is required
 *       for every field in a dataset. The <a>Schema</a> object contains an array of
 *         <code>SchemaAttribute</code> objects.</p>
 */
export interface SchemaAttribute {
  __type?: "SchemaAttribute";
  /**
   * <p>The name of the dataset field.</p>
   */
  AttributeName?: string;

  /**
   * <p>The data type of the field.</p>
   */
  AttributeType?: AttributeType | string;
}

export namespace SchemaAttribute {
  export function isa(o: any): o is SchemaAttribute {
    return _smithy.isa(o, "SchemaAttribute");
  }
}

/**
 * <p>Provides statistics for each data field imported into to an Amazon Forecast dataset with
 *       the <a>CreateDatasetImportJob</a> operation.</p>
 */
export interface Statistics {
  __type?: "Statistics";
  /**
   * <p>For a numeric field, the average value in the field.</p>
   */
  Avg?: number;

  /**
   * <p>The number of values in the field.</p>
   */
  Count?: number;

  /**
   * <p>The number of distinct values in the field.</p>
   */
  CountDistinct?: number;

  /**
   * <p>The number of NAN (not a number) values in the field.</p>
   */
  CountNan?: number;

  /**
   * <p>The number of null values in the field.</p>
   */
  CountNull?: number;

  /**
   * <p>For a numeric field, the maximum value in the field.</p>
   */
  Max?: string;

  /**
   * <p>For a numeric field, the minimum value in the field.</p>
   */
  Min?: string;

  /**
   * <p>For a numeric field, the standard deviation.</p>
   */
  Stddev?: number;
}

export namespace Statistics {
  export function isa(o: any): o is Statistics {
    return _smithy.isa(o, "Statistics");
  }
}

/**
 * <p>Describes a supplementary feature of a dataset group. This object is part of the <a>InputDataConfig</a> object.</p>
 *          <p>The only supported feature is a holiday calendar. If you use the calendar, all data in the
 *       datasets should belong to the same country as the calendar. For the holiday calendar data, see
 *       the <a href="http://jollyday.sourceforge.net/data.html">Jollyday</a> web site.</p>
 */
export interface SupplementaryFeature {
  __type?: "SupplementaryFeature";
  /**
   * <p>The name of the feature. This must be "holiday".</p>
   */
  Name: string | undefined;

  /**
   * <p>One of the following 2 letter country codes:</p>
   *          <ul>
   *             <li>
   *                <p>"AU" - AUSTRALIA</p>
   *             </li>
   *             <li>
   *                <p>"DE" - GERMANY</p>
   *             </li>
   *             <li>
   *                <p>"JP" - JAPAN</p>
   *             </li>
   *             <li>
   *                <p>"US" - UNITED_STATES</p>
   *             </li>
   *             <li>
   *                <p>"UK" - UNITED_KINGDOM</p>
   *             </li>
   *          </ul>
   */
  Value: string | undefined;
}

export namespace SupplementaryFeature {
  export function isa(o: any): o is SupplementaryFeature {
    return _smithy.isa(o, "SupplementaryFeature");
  }
}

/**
 * <p>The status, start time, and end time of a backtest, as well as a failure reason if
 *       applicable.</p>
 */
export interface TestWindowSummary {
  __type?: "TestWindowSummary";
  /**
   * <p>If the test failed, the reason why it failed.</p>
   */
  Message?: string;

  /**
   * <p>The status of the test. Possible status values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>The time at which the test ended.</p>
   */
  TestWindowEnd?: Date;

  /**
   * <p>The time at which the test began.</p>
   */
  TestWindowStart?: Date;
}

export namespace TestWindowSummary {
  export function isa(o: any): o is TestWindowSummary {
    return _smithy.isa(o, "TestWindowSummary");
  }
}

export interface UpdateDatasetGroupRequest {
  __type?: "UpdateDatasetGroupRequest";
  /**
   * <p>An array of the Amazon Resource Names (ARNs) of the datasets to add to the dataset
   *       group.</p>
   */
  DatasetArns: Array<string> | undefined;

  /**
   * <p>The ARN of the dataset group.</p>
   */
  DatasetGroupArn: string | undefined;
}

export namespace UpdateDatasetGroupRequest {
  export function isa(o: any): o is UpdateDatasetGroupRequest {
    return _smithy.isa(o, "UpdateDatasetGroupRequest");
  }
}

export interface UpdateDatasetGroupResponse extends $MetadataBearer {
  __type?: "UpdateDatasetGroupResponse";
}

export namespace UpdateDatasetGroupResponse {
  export function isa(o: any): o is UpdateDatasetGroupResponse {
    return _smithy.isa(o, "UpdateDatasetGroupResponse");
  }
}

/**
 * <p>The weighted loss value for a quantile. This object is part of the
 *       <a>Metrics</a> object.</p>
 */
export interface WeightedQuantileLoss {
  __type?: "WeightedQuantileLoss";
  /**
   * <p>The difference between the predicted value and the actual value over the quantile,
   *       weighted (normalized) by dividing by the sum over all quantiles.</p>
   */
  LossValue?: number;

  /**
   * <p>The quantile. Quantiles divide a probability distribution into regions of equal
   *       probability. For example, if the distribution was divided into 5 regions of equal
   *       probability, the quantiles would be 0.2, 0.4, 0.6, and 0.8.</p>
   */
  Quantile?: number;
}

export namespace WeightedQuantileLoss {
  export function isa(o: any): o is WeightedQuantileLoss {
    return _smithy.isa(o, "WeightedQuantileLoss");
  }
}

/**
 * <p>The metrics for a time range within the evaluation portion of a dataset. This object
 *       is part of the <a>EvaluationResult</a> object.</p>
 *          <p>The <code>TestWindowStart</code> and <code>TestWindowEnd</code> parameters are
 *       determined by the <code>BackTestWindowOffset</code> parameter of the
 *       <a>EvaluationParameters</a> object.</p>
 */
export interface WindowSummary {
  __type?: "WindowSummary";
  /**
   * <p>The type of evaluation.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUMMARY</code> - The average metrics across all windows.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPUTED</code> - The metrics for the specified window.</p>
   *             </li>
   *          </ul>
   */
  EvaluationType?: EvaluationType | string;

  /**
   * <p>The number of data points within the window.</p>
   */
  ItemCount?: number;

  /**
   * <p>Provides metrics used to evaluate the performance of a predictor.</p>
   */
  Metrics?: Metrics;

  /**
   * <p>The timestamp that defines the end of the window.</p>
   */
  TestWindowEnd?: Date;

  /**
   * <p>The timestamp that defines the start of the window.</p>
   */
  TestWindowStart?: Date;
}

export namespace WindowSummary {
  export function isa(o: any): o is WindowSummary {
    return _smithy.isa(o, "WindowSummary");
  }
}
