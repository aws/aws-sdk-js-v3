// smithy-typescript generated code
import type {
  AttributeType,
  AutoMLOverrideStrategy,
  Condition,
  DatasetType,
  DayOfWeek,
  Domain,
  EvaluationType,
  FeaturizationMethodName,
  FilterConditionString,
  ImportMode,
  Month,
  Operation,
  OptimizationMetric,
  ScalingType,
  State,
  TimePointGranularity,
  TimeSeriesGranularity,
} from "./enums";

/**
 * Defines the modifications that you are making to an attribute for a what-if forecast. For example, you can use this operation to create a what-if forecast that investigates a 10% off sale on all shoes. To do this, you specify `"AttributeName": "shoes"`, `"Operation": "MULTIPLY"`, and `"Value": "0.90"`. Pair this operation with the TimeSeriesCondition operation within the CreateWhatIfForecastRequest$TimeSeriesTransformations operation to define a subset of attribute items that are modified.
 *
 * @public
 */
export interface Action {
  /**
   * The related time series that you are modifying. This value is case insensitive.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The operation that is applied to the provided attribute. Operations include:
   *
   * - `ADD` - adds `Value` to all rows of `AttributeName`.
   * - `SUBTRACT` - subtracts `Value` from all rows of `AttributeName`.
   * - `MULTIPLY` - multiplies all rows of `AttributeName` by `Value`.
   * - `DIVIDE` - divides all rows of `AttributeName` by `Value`.
   *
   * @public
   */
  Operation: Operation | undefined;

  /**
   * The value that is applied for the chosen `Operation`.
   *
   * @public
   */
  Value: number | undefined;
}

/**
 * Describes an additional dataset. This object is part of the DataConfig object. Forecast supports the Weather Index and Holidays additional datasets.
 *
 * **Weather Index**
 *
 * The Amazon Forecast Weather Index is a built-in dataset that incorporates historical and projected weather information into your model. The Weather Index supplements your datasets with over two years of historical weather data and up to 14 days of projected weather data. For more information, see [Amazon Forecast Weather Index](https://docs.aws.amazon.com/forecast/latest/dg/weather.html).
 *
 * **Holidays**
 *
 * Holidays is a built-in dataset that incorporates national holiday information into your model. It provides native support for the holiday calendars of 66 countries. To view the holiday calendars, refer to the [Jollyday](http://jollyday.sourceforge.net/data.html) library. For more information, see [Holidays Featurization](https://docs.aws.amazon.com/forecast/latest/dg/holidays.html).
 *
 * @public
 */
export interface AdditionalDataset {
  /**
   * The name of the additional dataset. Valid names: `"holiday"` and `"weather"`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * **Weather Index**
   *
   * To enable the Weather Index, do not specify a value for `Configuration`.
   *
   * **Holidays**
   *
   * **Holidays**
   *
   * To enable Holidays, set `CountryCode` to one of the following two-letter country codes:
   *
   * - "AL" - ALBANIA
   * - "AR" - ARGENTINA
   * - "AT" - AUSTRIA
   * - "AU" - AUSTRALIA
   * - "BA" - BOSNIA HERZEGOVINA
   * - "BE" - BELGIUM
   * - "BG" - BULGARIA
   * - "BO" - BOLIVIA
   * - "BR" - BRAZIL
   * - "BY" - BELARUS
   * - "CA" - CANADA
   * - "CL" - CHILE
   * - "CO" - COLOMBIA
   * - "CR" - COSTA RICA
   * - "HR" - CROATIA
   * - "CZ" - CZECH REPUBLIC
   * - "DK" - DENMARK
   * - "EC" - ECUADOR
   * - "EE" - ESTONIA
   * - "ET" - ETHIOPIA
   * - "FI" - FINLAND
   * - "FR" - FRANCE
   * - "DE" - GERMANY
   * - "GR" - GREECE
   * - "HU" - HUNGARY
   * - "IS" - ICELAND
   * - "IN" - INDIA
   * - "IE" - IRELAND
   * - "IT" - ITALY
   * - "JP" - JAPAN
   * - "KZ" - KAZAKHSTAN
   * - "KR" - KOREA
   * - "LV" - LATVIA
   * - "LI" - LIECHTENSTEIN
   * - "LT" - LITHUANIA
   * - "LU" - LUXEMBOURG
   * - "MK" - MACEDONIA
   * - "MT" - MALTA
   * - "MX" - MEXICO
   * - "MD" - MOLDOVA
   * - "ME" - MONTENEGRO
   * - "NL" - NETHERLANDS
   * - "NZ" - NEW ZEALAND
   * - "NI" - NICARAGUA
   * - "NG" - NIGERIA
   * - "NO" - NORWAY
   * - "PA" - PANAMA
   * - "PY" - PARAGUAY
   * - "PE" - PERU
   * - "PL" - POLAND
   * - "PT" - PORTUGAL
   * - "RO" - ROMANIA
   * - "RU" - RUSSIA
   * - "RS" - SERBIA
   * - "SK" - SLOVAKIA
   * - "SI" - SLOVENIA
   * - "ZA" - SOUTH AFRICA
   * - "ES" - SPAIN
   * - "SE" - SWEDEN
   * - "CH" - SWITZERLAND
   * - "UA" - UKRAINE
   * - "AE" - UNITED ARAB EMIRATES
   * - "US" - UNITED STATES
   * - "UK" - UNITED KINGDOM
   * - "UY" - URUGUAY
   * - "VE" - VENEZUELA
   *
   * @public
   */
  Configuration?: Record<string, string[]> | undefined;
}

/**
 * Provides information about the method used to transform attributes.
 *
 * The following is an example using the RETAIL domain:
 *
 * `\{`
 *
 * `"AttributeName": "demand",`
 *
 * `"Transformations": \{"aggregation": "sum", "middlefill": "zero", "backfill": "zero"\}`
 *
 * `\}`
 *
 * @public
 */
export interface AttributeConfig {
  /**
   * The name of the attribute as specified in the schema. Amazon Forecast supports the target field of the target time series and the related time series datasets. For example, for the RETAIL domain, the target is `demand`.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The method parameters (key-value pairs), which are a map of override parameters. Specify these parameters to override the default values. Related Time Series attributes do not accept aggregation parameters.
   *
   * The following list shows the parameters and their valid values for the "filling" featurization method for a **Target Time Series** dataset. Default values are bolded.
   *
   * - `aggregation`: **sum**, `avg`, `first`, `min`, `max`
   * - `frontfill`: **none**
   * - `middlefill`: **zero**, `nan` (not a number), `value`, `median`, `mean`, `min`, `max`
   * - `backfill`: **zero**, `nan`, `value`, `median`, `mean`, `min`, `max`
   *
   * The following list shows the parameters and their valid values for a **Related Time Series** featurization method (there are no defaults):
   *
   * - `middlefill`: `zero`, `value`, `median`, `mean`, `min`, `max`
   * - `backfill`: `zero`, `value`, `median`, `mean`, `min`, `max`
   * - `futurefill`: `zero`, `value`, `median`, `mean`, `min`, `max`
   *
   * To set a filling method to a specific value, set the fill parameter to `value` and define the value in a corresponding `_value` parameter. For example, to set backfilling to a value of 2, include the following: `"backfill": "value"` and `"backfill_value":"2"`.
   *
   * @public
   */
  Transformations: Record<string, string> | undefined;
}

/**
 * The data configuration for your dataset group and any additional datasets.
 *
 * @public
 */
export interface DataConfig {
  /**
   * The ARN of the dataset group used to train the predictor.
   *
   * @public
   */
  DatasetGroupArn: string | undefined;

  /**
   * Aggregation and filling options for attributes in your dataset group.
   *
   * @public
   */
  AttributeConfigs?: AttributeConfig[] | undefined;

  /**
   * Additional built-in datasets like Holidays and the Weather Index.
   *
   * @public
   */
  AdditionalDatasets?: AdditionalDataset[] | undefined;
}

/**
 * An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the CreateDataset and CreatePredictor requests.
 *
 * @public
 */
export interface EncryptionConfig {
  /**
   * The ARN of the IAM role that Amazon Forecast can assume to access the KMS key.
   *
   * Passing a role across Amazon Web Services accounts is not allowed. If you pass a role that isn't in your account, you get an `InvalidInputException` error.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key.
   *
   * @public
   */
  KMSKeyArn: string | undefined;
}

/**
 * The configuration details for the predictor monitor.
 *
 * @public
 */
export interface MonitorConfig {
  /**
   * The name of the monitor resource.
   *
   * @public
   */
  MonitorName: string | undefined;
}

/**
 * The optional metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
 *
 * The following basic restrictions apply to tags:
 *
 * - Maximum number of tags per resource - 50.
 * - For each resource, each tag key must be unique, and each tag key can have only one value.
 * - Maximum key length - 128 Unicode characters in UTF-8.
 * - Maximum value length - 256 Unicode characters in UTF-8.
 * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
 * - Tag keys and values are case sensitive.
 * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has `aws` as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of `aws` do not count against your tags per resource limit.
 *
 * @public
 */
export interface Tag {
  /**
   * One part of a key-value pair that makes up a tag. A `key` is a general label that acts like a category for more specific tag values.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The optional part of a key-value pair that makes up a tag. A `value` acts as a descriptor within a tag category (key).
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * The time boundary Forecast uses to align and aggregate your data to match your forecast frequency. Provide the unit of time and the time boundary as a key value pair. If you don't provide a time boundary, Forecast uses a set of [Default Time Boundaries](https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#default-time-boundaries).
 *
 * For more information about aggregation, see [Data Aggregation for Different Forecast Frequencies](https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html). For more information setting a custom time boundary, see [Specifying a Time Boundary](https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#specifying-time-boundary).
 *
 * @public
 */
export interface TimeAlignmentBoundary {
  /**
   * The month to use for time alignment during aggregation. The month must be in uppercase.
   *
   * @public
   */
  Month?: Month | undefined;

  /**
   * The day of the month to use for time alignment during aggregation.
   *
   * @public
   */
  DayOfMonth?: number | undefined;

  /**
   * The day of week to use for time alignment during aggregation. The day must be in uppercase.
   *
   * @public
   */
  DayOfWeek?: DayOfWeek | undefined;

  /**
   * The hour of day to use for time alignment during aggregation.
   *
   * @public
   */
  Hour?: number | undefined;
}

/**
 * @public
 */
export interface CreateAutoPredictorRequest {
  /**
   * A unique name for the predictor
   *
   * @public
   */
  PredictorName: string | undefined;

  /**
   * The number of time-steps that the model predicts. The forecast horizon is also called the prediction length.
   *
   * The maximum forecast horizon is the lesser of 500 time-steps or 1/4 of the TARGET_TIME_SERIES dataset length. If you are retraining an existing AutoPredictor, then the maximum forecast horizon is the lesser of 500 time-steps or 1/3 of the TARGET_TIME_SERIES dataset length.
   *
   * If you are upgrading to an AutoPredictor or retraining an existing AutoPredictor, you cannot update the forecast horizon parameter. You can meet this requirement by providing longer time-series in the dataset.
   *
   * @public
   */
  ForecastHorizon?: number | undefined;

  /**
   * The forecast types used to train a predictor. You can specify up to five forecast types. Forecast types can be quantiles from 0.01 to 0.99, by increments of 0.01 or higher. You can also specify the mean forecast with `mean`.
   *
   * @public
   */
  ForecastTypes?: string[] | undefined;

  /**
   * An array of dimension (field) names that specify how to group the generated forecast.
   *
   * For example, if you are generating forecasts for item sales across all your stores, and your dataset contains a `store_id` field, you would specify `store_id` as a dimension to group sales forecasts for each store.
   *
   * @public
   */
  ForecastDimensions?: string[] | undefined;

  /**
   * The frequency of predictions in a forecast.
   *
   * Valid intervals are an integer followed by Y (Year), M (Month), W (Week), D (Day), H (Hour), and min (Minute). For example, "1D" indicates every day and "15min" indicates every 15 minutes. You cannot specify a value that would overlap with the next larger frequency. That means, for example, you cannot specify a frequency of 60 minutes, because that is equivalent to 1 hour. The valid values for each frequency are the following:
   *
   * - Minute - 1-59
   * - Hour - 1-23
   * - Day - 1-6
   * - Week - 1-4
   * - Month - 1-11
   * - Year - 1
   *
   * Thus, if you want every other week forecasts, specify "2W". Or, if you want quarterly forecasts, you specify "3M".
   *
   * The frequency must be greater than or equal to the TARGET_TIME_SERIES dataset frequency.
   *
   * When a RELATED_TIME_SERIES dataset is provided, the frequency must be equal to the RELATED_TIME_SERIES dataset frequency.
   *
   * @public
   */
  ForecastFrequency?: string | undefined;

  /**
   * The data configuration for your dataset group and any additional datasets.
   *
   * @public
   */
  DataConfig?: DataConfig | undefined;

  /**
   * An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the CreateDataset and CreatePredictor requests.
   *
   * @public
   */
  EncryptionConfig?: EncryptionConfig | undefined;

  /**
   * The ARN of the predictor to retrain or upgrade. This parameter is only used when retraining or upgrading a predictor. When creating a new predictor, do not specify a value for this parameter.
   *
   * When upgrading or retraining a predictor, only specify values for the `ReferencePredictorArn` and `PredictorName`. The value for `PredictorName` must be a unique predictor name.
   *
   * @public
   */
  ReferencePredictorArn?: string | undefined;

  /**
   * The accuracy metric used to optimize the predictor.
   *
   * @public
   */
  OptimizationMetric?: OptimizationMetric | undefined;

  /**
   * Create an Explainability resource for the predictor.
   *
   * @public
   */
  ExplainPredictor?: boolean | undefined;

  /**
   * Optional metadata to help you categorize and organize your predictors. Each tag consists of a key and an optional value, both of which you define. Tag keys and values are case sensitive.
   *
   * The following restrictions apply to tags:
   *
   * - For each resource, each tag key must be unique and each tag key must have one value.
   * - Maximum number of tags per resource: 50.
   * - Maximum key length: 128 Unicode characters in UTF-8.
   * - Maximum value length: 256 Unicode characters in UTF-8.
   * - Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : / @. If your tagging schema is used across other services and resources, the character restrictions of those services also apply.
   * - Key prefixes cannot include any upper or lowercase combination of `aws:` or `AWS:`. Values can have this prefix. If a tag value has `aws` as its prefix but the key does not, Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of `aws` do not count against your tags per resource limit. You cannot edit or delete tag keys with this prefix.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The configuration details for predictor monitoring. Provide a name for the monitor resource to enable predictor monitoring.
   *
   * Predictor monitoring allows you to see how your predictor's performance changes over time. For more information, see [Predictor Monitoring](https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring.html).
   *
   * @public
   */
  MonitorConfig?: MonitorConfig | undefined;

  /**
   * The time boundary Forecast uses to align and aggregate any data that doesn't align with your forecast frequency. Provide the unit of time and the time boundary as a key value pair. For more information on specifying a time boundary, see [Specifying a Time Boundary](https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#specifying-time-boundary). If you don't provide a time boundary, Forecast uses a set of [Default Time Boundaries](https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#default-time-boundaries).
   *
   * @public
   */
  TimeAlignmentBoundary?: TimeAlignmentBoundary | undefined;
}

/**
 * @public
 */
export interface CreateAutoPredictorResponse {
  /**
   * The Amazon Resource Name (ARN) of the predictor.
   *
   * @public
   */
  PredictorArn?: string | undefined;
}

/**
 * An attribute of a schema, which defines a dataset field. A schema attribute is required for every field in a dataset. The [Schema](https://docs.aws.amazon.com/forecast/latest/dg/API_Schema.html) object contains an array of `SchemaAttribute` objects.
 *
 * @public
 */
export interface SchemaAttribute {
  /**
   * The name of the dataset field.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The data type of the field.
   *
   * For a related time series dataset, other than date, item_id, and forecast dimensions attributes, all attributes should be of numerical type (integer/float).
   *
   * @public
   */
  AttributeType?: AttributeType | undefined;
}

/**
 * Defines the fields of a dataset.
 *
 * @public
 */
export interface Schema {
  /**
   * An array of attributes specifying the name and type of each field in a dataset.
   *
   * @public
   */
  Attributes?: SchemaAttribute[] | undefined;
}

/**
 * @public
 */
export interface CreateDatasetRequest {
  /**
   * A name for the dataset.
   *
   * @public
   */
  DatasetName: string | undefined;

  /**
   * The domain associated with the dataset. When you add a dataset to a dataset group, this value and the value specified for the `Domain` parameter of the [CreateDatasetGroup](https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html) operation must match.
   *
   * The `Domain` and `DatasetType` that you choose determine the fields that must be present in the training data that you import to the dataset. For example, if you choose the `RETAIL` domain and `TARGET_TIME_SERIES` as the `DatasetType`, Amazon Forecast requires `item_id`, `timestamp`, and `demand` fields to be present in your data. For more information, see [Importing datasets](https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html).
   *
   * @public
   */
  Domain: Domain | undefined;

  /**
   * The dataset type. Valid values depend on the chosen `Domain`.
   *
   * @public
   */
  DatasetType: DatasetType | undefined;

  /**
   * The frequency of data collection. This parameter is required for RELATED_TIME_SERIES datasets.
   *
   * Valid intervals are an integer followed by Y (Year), M (Month), W (Week), D (Day), H (Hour), and min (Minute). For example, "1D" indicates every day and "15min" indicates every 15 minutes. You cannot specify a value that would overlap with the next larger frequency. That means, for example, you cannot specify a frequency of 60 minutes, because that is equivalent to 1 hour. The valid values for each frequency are the following:
   *
   * - Minute - 1-59
   * - Hour - 1-23
   * - Day - 1-6
   * - Week - 1-4
   * - Month - 1-11
   * - Year - 1
   *
   * Thus, if you want every other week forecasts, specify "2W". Or, if you want quarterly forecasts, you specify "3M".
   *
   * @public
   */
  DataFrequency?: string | undefined;

  /**
   * The schema for the dataset. The schema attributes and their order must match the fields in your data. The dataset `Domain` and `DatasetType` that you choose determine the minimum required fields in your training data. For information about the required fields for a specific dataset domain and type, see [Dataset Domains and Dataset Types](https://docs.aws.amazon.com/forecast/latest/dg/howitworks-domains-ds-types.html).
   *
   * @public
   */
  Schema: Schema | undefined;

  /**
   * An Key Management Service (KMS) key and the Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key.
   *
   * @public
   */
  EncryptionConfig?: EncryptionConfig | undefined;

  /**
   * The optional metadata that you apply to the dataset to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has `aws` as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of `aws` do not count against your tags per resource limit.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  DatasetArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateDatasetGroupRequest {
  /**
   * A name for the dataset group.
   *
   * @public
   */
  DatasetGroupName: string | undefined;

  /**
   * The domain associated with the dataset group. When you add a dataset to a dataset group, this value and the value specified for the `Domain` parameter of the [CreateDataset](https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html) operation must match.
   *
   * The `Domain` and `DatasetType` that you choose determine the fields that must be present in training data that you import to a dataset. For example, if you choose the `RETAIL` domain and `TARGET_TIME_SERIES` as the `DatasetType`, Amazon Forecast requires that `item_id`, `timestamp`, and `demand` fields are present in your data. For more information, see [Dataset groups](https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html).
   *
   * @public
   */
  Domain: Domain | undefined;

  /**
   * An array of Amazon Resource Names (ARNs) of the datasets that you want to include in the dataset group.
   *
   * @public
   */
  DatasetArns?: string[] | undefined;

  /**
   * The optional metadata that you apply to the dataset group to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has `aws` as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of `aws` do not count against your tags per resource limit.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDatasetGroupResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset group.
   *
   * @public
   */
  DatasetGroupArn?: string | undefined;
}

/**
 * The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the file(s). Optionally, includes an Key Management Service (KMS) key. This object is part of the DataSource object that is submitted in the CreateDatasetImportJob request, and part of the DataDestination object.
 *
 * @public
 */
export interface S3Config {
  /**
   * The path to an Amazon Simple Storage Service (Amazon S3) bucket or file(s) in an Amazon S3 bucket.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * The ARN of the Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3 bucket or files. If you provide a value for the `KMSKeyArn` key, the role must allow access to the key.
   *
   * Passing a role across Amazon Web Services accounts is not allowed. If you pass a role that isn't in your account, you get an `InvalidInputException` error.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an Key Management Service (KMS) key.
   *
   * @public
   */
  KMSKeyArn?: string | undefined;
}

/**
 * The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.
 *
 * @public
 */
export interface DataSource {
  /**
   * The path to the data stored in an Amazon Simple Storage Service (Amazon S3) bucket along with the credentials to access the data.
   *
   * @public
   */
  S3Config: S3Config | undefined;
}

/**
 * @public
 */
export interface CreateDatasetImportJobRequest {
  /**
   * The name for the dataset import job. We recommend including the current timestamp in the name, for example, `20190721DatasetImport`. This can help you avoid getting a `ResourceAlreadyExistsException` exception.
   *
   * @public
   */
  DatasetImportJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon Forecast dataset that you want to import data to.
   *
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * The location of the training data to import and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data. The training data must be stored in an Amazon S3 bucket.
   *
   * If encryption is used, `DataSource` must include an Key Management Service (KMS) key and the IAM role must allow Amazon Forecast permission to access the key. The KMS key and IAM role must match those specified in the `EncryptionConfig` parameter of the [CreateDataset](https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html) operation.
   *
   * @public
   */
  DataSource: DataSource | undefined;

  /**
   * The format of timestamps in the dataset. The format that you specify depends on the `DataFrequency` specified when the dataset was created. The following formats are supported
   *
   * - "yyyy-MM-dd"
   *
   *   For the following data frequencies: Y, M, W, and D
   * - "yyyy-MM-dd HH:mm:ss"
   *
   *   For the following data frequencies: H, 30min, 15min, and 1min; and optionally, for: Y, M, W, and D
   *
   * If the format isn't specified, Amazon Forecast expects the format to be "yyyy-MM-dd HH:mm:ss".
   *
   * @public
   */
  TimestampFormat?: string | undefined;

  /**
   * A single time zone for every item in your dataset. This option is ideal for datasets with all timestamps within a single time zone, or if all timestamps are normalized to a single time zone.
   *
   * Refer to the [Joda-Time API](http://joda-time.sourceforge.net/timezones.html) for a complete list of valid time zone names.
   *
   * @public
   */
  TimeZone?: string | undefined;

  /**
   * Automatically derive time zone information from the geolocation attribute. This option is ideal for datasets that contain timestamps in multiple time zones and those timestamps are expressed in local time.
   *
   * @public
   */
  UseGeolocationForTimeZone?: boolean | undefined;

  /**
   * The format of the geolocation attribute. The geolocation attribute can be formatted in one of two ways:
   *
   * - `LAT_LONG` - the latitude and longitude in decimal format (Example: 47.61_-122.33).
   * - `CC_POSTALCODE` (US Only) - the country code (US), followed by the 5-digit ZIP code (Example: US_98121).
   *
   * @public
   */
  GeolocationFormat?: string | undefined;

  /**
   * The optional metadata that you apply to the dataset import job to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has `aws` as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of `aws` do not count against your tags per resource limit.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The format of the imported data, CSV or PARQUET. The default value is CSV.
   *
   * @public
   */
  Format?: string | undefined;

  /**
   * Specifies whether the dataset import job is a `FULL` or `INCREMENTAL` import. A `FULL` dataset import replaces all of the existing data with the newly imported data. An `INCREMENTAL` import appends the imported data to the existing data.
   *
   * @public
   */
  ImportMode?: ImportMode | undefined;
}

/**
 * @public
 */
export interface CreateDatasetImportJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset import job.
   *
   * @public
   */
  DatasetImportJobArn?: string | undefined;
}

/**
 * The ExplainabilityConfig data type defines the number of time series and time points included in CreateExplainability.
 *
 * If you provide a predictor ARN for `ResourceArn`, you must set both `TimePointGranularity` and `TimeSeriesGranularity` to “ALL”. When creating Predictor Explainability, Amazon Forecast considers all time series and time points.
 *
 * If you provide a forecast ARN for `ResourceArn`, you can set `TimePointGranularity` and `TimeSeriesGranularity` to either “ALL” or “Specific”.
 *
 * @public
 */
export interface ExplainabilityConfig {
  /**
   * To create an Explainability for all time series in your datasets, use `ALL`. To create an Explainability for specific time series in your datasets, use `SPECIFIC`.
   *
   * Specify time series by uploading a CSV or Parquet file to an Amazon S3 bucket and set the location within the DataDestination data type.
   *
   * @public
   */
  TimeSeriesGranularity: TimeSeriesGranularity | undefined;

  /**
   * To create an Explainability for all time points in your forecast horizon, use `ALL`. To create an Explainability for specific time points in your forecast horizon, use `SPECIFIC`.
   *
   * Specify time points with the `StartDateTime` and `EndDateTime` parameters within the CreateExplainability operation.
   *
   * @public
   */
  TimePointGranularity: TimePointGranularity | undefined;
}

/**
 * @public
 */
export interface CreateExplainabilityRequest {
  /**
   * A unique name for the Explainability.
   *
   * @public
   */
  ExplainabilityName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the Explainability.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The configuration settings that define the granularity of time series and time points for the Explainability.
   *
   * @public
   */
  ExplainabilityConfig: ExplainabilityConfig | undefined;

  /**
   * The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.
   *
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * Defines the fields of a dataset.
   *
   * @public
   */
  Schema?: Schema | undefined;

  /**
   * Create an Explainability visualization that is viewable within the Amazon Web Services console.
   *
   * @public
   */
  EnableVisualization?: boolean | undefined;

  /**
   * If `TimePointGranularity` is set to `SPECIFIC`, define the first point for the Explainability.
   *
   * Use the following timestamp format: yyyy-MM-ddTHH:mm:ss (example: 2015-01-01T20:00:00)
   *
   * @public
   */
  StartDateTime?: string | undefined;

  /**
   * If `TimePointGranularity` is set to `SPECIFIC`, define the last time point for the Explainability.
   *
   * Use the following timestamp format: yyyy-MM-ddTHH:mm:ss (example: 2015-01-01T20:00:00)
   *
   * @public
   */
  EndDateTime?: string | undefined;

  /**
   * Optional metadata to help you categorize and organize your resources. Each tag consists of a key and an optional value, both of which you define. Tag keys and values are case sensitive.
   *
   * The following restrictions apply to tags:
   *
   * - For each resource, each tag key must be unique and each tag key must have one value.
   * - Maximum number of tags per resource: 50.
   * - Maximum key length: 128 Unicode characters in UTF-8.
   * - Maximum value length: 256 Unicode characters in UTF-8.
   * - Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : / @. If your tagging schema is used across other services and resources, the character restrictions of those services also apply.
   * - Key prefixes cannot include any upper or lowercase combination of `aws:` or `AWS:`. Values can have this prefix. If a tag value has `aws` as its prefix but the key does not, Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of `aws` do not count against your tags per resource limit. You cannot edit or delete tag keys with this prefix.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateExplainabilityResponse {
  /**
   * The Amazon Resource Name (ARN) of the Explainability.
   *
   * @public
   */
  ExplainabilityArn?: string | undefined;
}

/**
 * The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).
 *
 * @public
 */
export interface DataDestination {
  /**
   * The path to an Amazon Simple Storage Service (Amazon S3) bucket along with the credentials to access the bucket.
   *
   * @public
   */
  S3Config: S3Config | undefined;
}

/**
 * @public
 */
export interface CreateExplainabilityExportRequest {
  /**
   * A unique name for the Explainability export.
   *
   * @public
   */
  ExplainabilityExportName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Explainability to export.
   *
   * @public
   */
  ExplainabilityArn: string | undefined;

  /**
   * The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).
   *
   * @public
   */
  Destination: DataDestination | undefined;

  /**
   * Optional metadata to help you categorize and organize your resources. Each tag consists of a key and an optional value, both of which you define. Tag keys and values are case sensitive.
   *
   * The following restrictions apply to tags:
   *
   * - For each resource, each tag key must be unique and each tag key must have one value.
   * - Maximum number of tags per resource: 50.
   * - Maximum key length: 128 Unicode characters in UTF-8.
   * - Maximum value length: 256 Unicode characters in UTF-8.
   * - Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : / @. If your tagging schema is used across other services and resources, the character restrictions of those services also apply.
   * - Key prefixes cannot include any upper or lowercase combination of `aws:` or `AWS:`. Values can have this prefix. If a tag value has `aws` as its prefix but the key does not, Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of `aws` do not count against your tags per resource limit. You cannot edit or delete tag keys with this prefix.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The format of the exported data, CSV or PARQUET.
   *
   * @public
   */
  Format?: string | undefined;
}

/**
 * @public
 */
export interface CreateExplainabilityExportResponse {
  /**
   * The Amazon Resource Name (ARN) of the export.
   *
   * @public
   */
  ExplainabilityExportArn?: string | undefined;
}

/**
 * Details about the import file that contains the time series for which you want to create forecasts.
 *
 * @public
 */
export interface TimeSeriesIdentifiers {
  /**
   * The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.
   *
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * Defines the fields of a dataset.
   *
   * @public
   */
  Schema?: Schema | undefined;

  /**
   * The format of the data, either CSV or PARQUET.
   *
   * @public
   */
  Format?: string | undefined;
}

/**
 * Defines the set of time series that are used to create the forecasts in a `TimeSeriesIdentifiers` object.
 *
 * The `TimeSeriesIdentifiers` object needs the following information:
 *
 * - `DataSource`
 * - `Format`
 * - `Schema`
 *
 * @public
 */
export interface TimeSeriesSelector {
  /**
   * Details about the import file that contains the time series for which you want to create forecasts.
   *
   * @public
   */
  TimeSeriesIdentifiers?: TimeSeriesIdentifiers | undefined;
}

/**
 * @public
 */
export interface CreateForecastRequest {
  /**
   * A name for the forecast.
   *
   * @public
   */
  ForecastName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the predictor to use to generate the forecast.
   *
   * @public
   */
  PredictorArn: string | undefined;

  /**
   * The quantiles at which probabilistic forecasts are generated. **You can currently specify up to 5 quantiles per forecast**. Accepted values include `0.01 to 0.99` (increments of .01 only) and `mean`. The mean forecast is different from the median (0.50) when the distribution is not symmetric (for example, Beta and Negative Binomial).
   *
   * The default quantiles are the quantiles you specified during predictor creation. If you didn't specify quantiles, the default values are `["0.1", "0.5", "0.9"]`.
   *
   * @public
   */
  ForecastTypes?: string[] | undefined;

  /**
   * The optional metadata that you apply to the forecast to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has `aws` as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of `aws` do not count against your tags per resource limit.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Defines the set of time series that are used to create the forecasts in a `TimeSeriesIdentifiers` object.
   *
   * The `TimeSeriesIdentifiers` object needs the following information:
   *
   * - `DataSource`
   * - `Format`
   * - `Schema`
   *
   * @public
   */
  TimeSeriesSelector?: TimeSeriesSelector | undefined;
}

/**
 * @public
 */
export interface CreateForecastResponse {
  /**
   * The Amazon Resource Name (ARN) of the forecast.
   *
   * @public
   */
  ForecastArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateForecastExportJobRequest {
  /**
   * The name for the forecast export job.
   *
   * @public
   */
  ForecastExportJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the forecast that you want to export.
   *
   * @public
   */
  ForecastArn: string | undefined;

  /**
   * The location where you want to save the forecast and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the location. The forecast must be exported to an Amazon S3 bucket.
   *
   * If encryption is used, `Destination` must include an Key Management Service (KMS) key. The IAM role must allow Amazon Forecast permission to access the key.
   *
   * @public
   */
  Destination: DataDestination | undefined;

  /**
   * The optional metadata that you apply to the forecast export job to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has `aws` as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of `aws` do not count against your tags per resource limit.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The format of the exported data, CSV or PARQUET. The default value is CSV.
   *
   * @public
   */
  Format?: string | undefined;
}

/**
 * @public
 */
export interface CreateForecastExportJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the export job.
   *
   * @public
   */
  ForecastExportJobArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateMonitorRequest {
  /**
   * The name of the monitor resource.
   *
   * @public
   */
  MonitorName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the predictor to monitor.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of [tags](https://docs.aws.amazon.com/forecast/latest/dg/tagging-forecast-resources.html) to apply to the monitor resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateMonitorResponse {
  /**
   * The Amazon Resource Name (ARN) of the monitor resource.
   *
   * @public
   */
  MonitorArn?: string | undefined;
}

/**
 * Parameters that define how to split a dataset into training data and testing data, and the number of iterations to perform. These parameters are specified in the predefined algorithms but you can override them in the CreatePredictor request.
 *
 * @public
 */
export interface EvaluationParameters {
  /**
   * The number of times to split the input data. The default is 1. Valid values are 1 through 5.
   *
   * @public
   */
  NumberOfBacktestWindows?: number | undefined;

  /**
   * The point from the end of the dataset where you want to split the data for model training and testing (evaluation). Specify the value as the number of data points. The default is the value of the forecast horizon. `BackTestWindowOffset` can be used to mimic a past virtual forecast start date. This value must be greater than or equal to the forecast horizon and less than half of the TARGET_TIME_SERIES dataset length.
   *
   * `ForecastHorizon` <= `BackTestWindowOffset` < 1/2 * TARGET_TIME_SERIES dataset length
   *
   * @public
   */
  BackTestWindowOffset?: number | undefined;
}

/**
 * Provides information about the method that featurizes (transforms) a dataset field. The method is part of the `FeaturizationPipeline` of the Featurization object.
 *
 * The following is an example of how you specify a `FeaturizationMethod` object.
 *
 * `\{`
 *
 * `"FeaturizationMethodName": "filling",`
 *
 * `"FeaturizationMethodParameters": \{"aggregation": "sum", "middlefill": "zero", "backfill": "zero"\}`
 *
 * `\}`
 *
 * @public
 */
export interface FeaturizationMethod {
  /**
   * The name of the method. The "filling" method is the only supported method.
   *
   * @public
   */
  FeaturizationMethodName: FeaturizationMethodName | undefined;

  /**
   * The method parameters (key-value pairs), which are a map of override parameters. Specify these parameters to override the default values. Related Time Series attributes do not accept aggregation parameters.
   *
   * The following list shows the parameters and their valid values for the "filling" featurization method for a **Target Time Series** dataset. Bold signifies the default value.
   *
   * - `aggregation`: **sum**, `avg`, `first`, `min`, `max`
   * - `frontfill`: **none**
   * - `middlefill`: **zero**, `nan` (not a number), `value`, `median`, `mean`, `min`, `max`
   * - `backfill`: **zero**, `nan`, `value`, `median`, `mean`, `min`, `max`
   *
   * The following list shows the parameters and their valid values for a **Related Time Series** featurization method (there are no defaults):
   *
   * - `middlefill`: `zero`, `value`, `median`, `mean`, `min`, `max`
   * - `backfill`: `zero`, `value`, `median`, `mean`, `min`, `max`
   * - `futurefill`: `zero`, `value`, `median`, `mean`, `min`, `max`
   *
   * To set a filling method to a specific value, set the fill parameter to `value` and define the value in a corresponding `_value` parameter. For example, to set backfilling to a value of 2, include the following: `"backfill": "value"` and `"backfill_value":"2"`.
   *
   * @public
   */
  FeaturizationMethodParameters?: Record<string, string> | undefined;
}

/**
 * > **Note:** This object belongs to the CreatePredictor operation. If you created your predictor with CreateAutoPredictor, see AttributeConfig.
 *
 * Provides featurization (transformation) information for a dataset field. This object is part of the FeaturizationConfig object.
 *
 * For example:
 *
 * `\{`
 *
 * `"AttributeName": "demand",`
 *
 * `FeaturizationPipeline [ \{`
 *
 * `"FeaturizationMethodName": "filling",`
 *
 * `"FeaturizationMethodParameters": \{"aggregation": "avg", "backfill": "nan"\}`
 *
 * `\} ]`
 *
 * `\}`
 *
 * @public
 */
export interface Featurization {
  /**
   * The name of the schema attribute that specifies the data field to be featurized. Amazon Forecast supports the target field of the `TARGET_TIME_SERIES` and the `RELATED_TIME_SERIES` datasets. For example, for the `RETAIL` domain, the target is `demand`, and for the `CUSTOM` domain, the target is `target_value`. For more information, see howitworks-missing-values.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * An array of one `FeaturizationMethod` object that specifies the feature transformation method.
   *
   * @public
   */
  FeaturizationPipeline?: FeaturizationMethod[] | undefined;
}

/**
 * > **Note:** This object belongs to the CreatePredictor operation. If you created your predictor with CreateAutoPredictor, see AttributeConfig.
 *
 * In a CreatePredictor operation, the specified algorithm trains a model using the specified dataset group. You can optionally tell the operation to modify data fields prior to training a model. These modifications are referred to as *featurization*.
 *
 * You define featurization using the `FeaturizationConfig` object. You specify an array of transformations, one for each field that you want to featurize. You then include the `FeaturizationConfig` object in your `CreatePredictor` request. Amazon Forecast applies the featurization to the `TARGET_TIME_SERIES` and `RELATED_TIME_SERIES` datasets before model training.
 *
 * You can create multiple featurization configurations. For example, you might call the `CreatePredictor` operation twice by specifying different featurization configurations.
 *
 * @public
 */
export interface FeaturizationConfig {
  /**
   * The frequency of predictions in a forecast.
   *
   * Valid intervals are an integer followed by Y (Year), M (Month), W (Week), D (Day), H (Hour), and min (Minute). For example, "1D" indicates every day and "15min" indicates every 15 minutes. You cannot specify a value that would overlap with the next larger frequency. That means, for example, you cannot specify a frequency of 60 minutes, because that is equivalent to 1 hour. The valid values for each frequency are the following:
   *
   * - Minute - 1-59
   * - Hour - 1-23
   * - Day - 1-6
   * - Week - 1-4
   * - Month - 1-11
   * - Year - 1
   *
   * Thus, if you want every other week forecasts, specify "2W". Or, if you want quarterly forecasts, you specify "3M".
   *
   * The frequency must be greater than or equal to the TARGET_TIME_SERIES dataset frequency.
   *
   * When a RELATED_TIME_SERIES dataset is provided, the frequency must be equal to the TARGET_TIME_SERIES dataset frequency.
   *
   * @public
   */
  ForecastFrequency: string | undefined;

  /**
   * An array of dimension (field) names that specify how to group the generated forecast.
   *
   * For example, suppose that you are generating a forecast for item sales across all of your stores, and your dataset contains a `store_id` field. If you want the sales forecast for each item by store, you would specify `store_id` as the dimension.
   *
   * All forecast dimensions specified in the `TARGET_TIME_SERIES` dataset don't need to be specified in the `CreatePredictor` request. All forecast dimensions specified in the `RELATED_TIME_SERIES` dataset must be specified in the `CreatePredictor` request.
   *
   * @public
   */
  ForecastDimensions?: string[] | undefined;

  /**
   * An array of featurization (transformation) information for the fields of a dataset.
   *
   * @public
   */
  Featurizations?: Featurization[] | undefined;
}

/**
 * Specifies a categorical hyperparameter and it's range of tunable values. This object is part of the ParameterRanges object.
 *
 * @public
 */
export interface CategoricalParameterRange {
  /**
   * The name of the categorical hyperparameter to tune.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of the tunable categories for the hyperparameter.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * Specifies a continuous hyperparameter and it's range of tunable values. This object is part of the ParameterRanges object.
 *
 * @public
 */
export interface ContinuousParameterRange {
  /**
   * The name of the hyperparameter to tune.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The maximum tunable value of the hyperparameter.
   *
   * @public
   */
  MaxValue: number | undefined;

  /**
   * The minimum tunable value of the hyperparameter.
   *
   * @public
   */
  MinValue: number | undefined;

  /**
   * The scale that hyperparameter tuning uses to search the hyperparameter range. Valid values:
   *
   * - **Auto**
   *
   *   Amazon Forecast hyperparameter tuning chooses the best scale for the hyperparameter.
   *
   * - **Linear**
   *
   *   Hyperparameter tuning searches the values in the hyperparameter range by using a linear scale.
   *
   * - **Logarithmic**
   *
   *   Hyperparameter tuning searches the values in the hyperparameter range by using a logarithmic scale.
   *
   *   Logarithmic scaling works only for ranges that have values greater than 0.
   *
   * - **ReverseLogarithmic**
   *
   *   hyperparameter tuning searches the values in the hyperparameter range by using a reverse logarithmic scale.
   *
   *   Reverse logarithmic scaling works only for ranges that are entirely within the range 0 <= x < 1.0.
   *
   * For information about choosing a hyperparameter scale, see [Hyperparameter Scaling](http://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-ranges.html#scaling-type). One of the following values:
   *
   * @public
   */
  ScalingType?: ScalingType | undefined;
}

/**
 * Specifies an integer hyperparameter and it's range of tunable values. This object is part of the ParameterRanges object.
 *
 * @public
 */
export interface IntegerParameterRange {
  /**
   * The name of the hyperparameter to tune.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The maximum tunable value of the hyperparameter.
   *
   * @public
   */
  MaxValue: number | undefined;

  /**
   * The minimum tunable value of the hyperparameter.
   *
   * @public
   */
  MinValue: number | undefined;

  /**
   * The scale that hyperparameter tuning uses to search the hyperparameter range. Valid values:
   *
   * - **Auto**
   *
   *   Amazon Forecast hyperparameter tuning chooses the best scale for the hyperparameter.
   *
   * - **Linear**
   *
   *   Hyperparameter tuning searches the values in the hyperparameter range by using a linear scale.
   *
   * - **Logarithmic**
   *
   *   Hyperparameter tuning searches the values in the hyperparameter range by using a logarithmic scale.
   *
   *   Logarithmic scaling works only for ranges that have values greater than 0.
   *
   * - **ReverseLogarithmic**
   *
   *   Not supported for `IntegerParameterRange`.
   *
   *   Reverse logarithmic scaling works only for ranges that are entirely within the range 0 <= x < 1.0.
   *
   * For information about choosing a hyperparameter scale, see [Hyperparameter Scaling](http://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-ranges.html#scaling-type). One of the following values:
   *
   * @public
   */
  ScalingType?: ScalingType | undefined;
}

/**
 * Specifies the categorical, continuous, and integer hyperparameters, and their ranges of tunable values. The range of tunable values determines which values that a hyperparameter tuning job can choose for the specified hyperparameter. This object is part of the HyperParameterTuningJobConfig object.
 *
 * @public
 */
export interface ParameterRanges {
  /**
   * Specifies the tunable range for each categorical hyperparameter.
   *
   * @public
   */
  CategoricalParameterRanges?: CategoricalParameterRange[] | undefined;

  /**
   * Specifies the tunable range for each continuous hyperparameter.
   *
   * @public
   */
  ContinuousParameterRanges?: ContinuousParameterRange[] | undefined;

  /**
   * Specifies the tunable range for each integer hyperparameter.
   *
   * @public
   */
  IntegerParameterRanges?: IntegerParameterRange[] | undefined;
}

/**
 * Configuration information for a hyperparameter tuning job. You specify this object in the CreatePredictor request.
 *
 * A *hyperparameter* is a parameter that governs the model training process. You set hyperparameters before training starts, unlike model parameters, which are determined during training. The values of the hyperparameters effect which values are chosen for the model parameters.
 *
 * In a *hyperparameter tuning job*, Amazon Forecast chooses the set of hyperparameter values that optimize a specified metric. Forecast accomplishes this by running many training jobs over a range of hyperparameter values. The optimum set of values depends on the algorithm, the training data, and the specified metric objective.
 *
 * @public
 */
export interface HyperParameterTuningJobConfig {
  /**
   * Specifies the ranges of valid values for the hyperparameters.
   *
   * @public
   */
  ParameterRanges?: ParameterRanges | undefined;
}

/**
 * > **Note:** This object belongs to the CreatePredictor operation. If you created your predictor with CreateAutoPredictor, see AdditionalDataset.
 *
 * Describes a supplementary feature of a dataset group. This object is part of the InputDataConfig object. Forecast supports the Weather Index and Holidays built-in featurizations.
 *
 * **Weather Index**
 *
 * The Amazon Forecast Weather Index is a built-in featurization that incorporates historical and projected weather information into your model. The Weather Index supplements your datasets with over two years of historical weather data and up to 14 days of projected weather data. For more information, see [Amazon Forecast Weather Index](https://docs.aws.amazon.com/forecast/latest/dg/weather.html).
 *
 * **Holidays**
 *
 * Holidays is a built-in featurization that incorporates a feature-engineered dataset of national holiday information into your model. It provides native support for the holiday calendars of 66 countries. To view the holiday calendars, refer to the [Jollyday](http://jollyday.sourceforge.net/data.html) library. For more information, see [Holidays Featurization](https://docs.aws.amazon.com/forecast/latest/dg/holidays.html).
 *
 * @public
 */
export interface SupplementaryFeature {
  /**
   * The name of the feature. Valid values: `"holiday"` and `"weather"`.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * **Weather Index**
   *
   * To enable the Weather Index, set the value to `"true"`
   *
   * **Holidays**
   *
   * To enable Holidays, specify a country with one of the following two-letter country codes:
   *
   * - "AL" - ALBANIA
   * - "AR" - ARGENTINA
   * - "AT" - AUSTRIA
   * - "AU" - AUSTRALIA
   * - "BA" - BOSNIA HERZEGOVINA
   * - "BE" - BELGIUM
   * - "BG" - BULGARIA
   * - "BO" - BOLIVIA
   * - "BR" - BRAZIL
   * - "BY" - BELARUS
   * - "CA" - CANADA
   * - "CL" - CHILE
   * - "CO" - COLOMBIA
   * - "CR" - COSTA RICA
   * - "HR" - CROATIA
   * - "CZ" - CZECH REPUBLIC
   * - "DK" - DENMARK
   * - "EC" - ECUADOR
   * - "EE" - ESTONIA
   * - "ET" - ETHIOPIA
   * - "FI" - FINLAND
   * - "FR" - FRANCE
   * - "DE" - GERMANY
   * - "GR" - GREECE
   * - "HU" - HUNGARY
   * - "IS" - ICELAND
   * - "IN" - INDIA
   * - "IE" - IRELAND
   * - "IT" - ITALY
   * - "JP" - JAPAN
   * - "KZ" - KAZAKHSTAN
   * - "KR" - KOREA
   * - "LV" - LATVIA
   * - "LI" - LIECHTENSTEIN
   * - "LT" - LITHUANIA
   * - "LU" - LUXEMBOURG
   * - "MK" - MACEDONIA
   * - "MT" - MALTA
   * - "MX" - MEXICO
   * - "MD" - MOLDOVA
   * - "ME" - MONTENEGRO
   * - "NL" - NETHERLANDS
   * - "NZ" - NEW ZEALAND
   * - "NI" - NICARAGUA
   * - "NG" - NIGERIA
   * - "NO" - NORWAY
   * - "PA" - PANAMA
   * - "PY" - PARAGUAY
   * - "PE" - PERU
   * - "PL" - POLAND
   * - "PT" - PORTUGAL
   * - "RO" - ROMANIA
   * - "RU" - RUSSIA
   * - "RS" - SERBIA
   * - "SK" - SLOVAKIA
   * - "SI" - SLOVENIA
   * - "ZA" - SOUTH AFRICA
   * - "ES" - SPAIN
   * - "SE" - SWEDEN
   * - "CH" - SWITZERLAND
   * - "UA" - UKRAINE
   * - "AE" - UNITED ARAB EMIRATES
   * - "US" - UNITED STATES
   * - "UK" - UNITED KINGDOM
   * - "UY" - URUGUAY
   * - "VE" - VENEZUELA
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * > **Note:** This object belongs to the CreatePredictor operation. If you created your predictor with CreateAutoPredictor, see DataConfig.
 *
 * The data used to train a predictor. The data includes a dataset group and any supplementary features. You specify this object in the CreatePredictor request.
 *
 * @public
 */
export interface InputDataConfig {
  /**
   * The Amazon Resource Name (ARN) of the dataset group.
   *
   * @public
   */
  DatasetGroupArn: string | undefined;

  /**
   * An array of supplementary features. The only supported feature is a holiday calendar.
   *
   * @public
   */
  SupplementaryFeatures?: SupplementaryFeature[] | undefined;
}

/**
 * @public
 */
export interface CreatePredictorRequest {
  /**
   * A name for the predictor.
   *
   * @public
   */
  PredictorName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the algorithm to use for model training. Required if `PerformAutoML` is not set to `true`.
   *
   * **Supported algorithms:**
   *
   * - `arn:aws:forecast:::algorithm/ARIMA`
   * - `arn:aws:forecast:::algorithm/CNN-QR`
   * - `arn:aws:forecast:::algorithm/Deep_AR_Plus`
   * - `arn:aws:forecast:::algorithm/ETS`
   * - `arn:aws:forecast:::algorithm/NPTS`
   * - `arn:aws:forecast:::algorithm/Prophet`
   *
   * @public
   */
  AlgorithmArn?: string | undefined;

  /**
   * Specifies the number of time-steps that the model is trained to predict. The forecast horizon is also called the prediction length.
   *
   * For example, if you configure a dataset for daily data collection (using the `DataFrequency` parameter of the CreateDataset operation) and set the forecast horizon to 10, the model returns predictions for 10 days.
   *
   * The maximum forecast horizon is the lesser of 500 time-steps or 1/3 of the TARGET_TIME_SERIES dataset length.
   *
   * @public
   */
  ForecastHorizon: number | undefined;

  /**
   * Specifies the forecast types used to train a predictor. You can specify up to five forecast types. Forecast types can be quantiles from 0.01 to 0.99, by increments of 0.01 or higher. You can also specify the mean forecast with `mean`.
   *
   * The default value is `["0.10", "0.50", "0.9"]`.
   *
   * @public
   */
  ForecastTypes?: string[] | undefined;

  /**
   * Whether to perform AutoML. When Amazon Forecast performs AutoML, it evaluates the algorithms it provides and chooses the best algorithm and configuration for your training dataset.
   *
   * The default value is `false`. In this case, you are required to specify an algorithm.
   *
   * Set `PerformAutoML` to `true` to have Amazon Forecast perform AutoML. This is a good option if you aren't sure which algorithm is suitable for your training data. In this case, `PerformHPO` must be false.
   *
   * @public
   */
  PerformAutoML?: boolean | undefined;

  /**
   * > **Note:** The `LatencyOptimized` AutoML override strategy is only available in private beta. Contact Amazon Web Services Support or your account manager to learn more about access privileges.
   *
   * Used to overide the default AutoML strategy, which is to optimize predictor accuracy. To apply an AutoML strategy that minimizes training time, use `LatencyOptimized`.
   *
   * This parameter is only valid for predictors trained using AutoML.
   *
   * @public
   */
  AutoMLOverrideStrategy?: AutoMLOverrideStrategy | undefined;

  /**
   * Whether to perform hyperparameter optimization (HPO). HPO finds optimal hyperparameter values for your training data. The process of performing HPO is known as running a hyperparameter tuning job.
   *
   * The default value is `false`. In this case, Amazon Forecast uses default hyperparameter values from the chosen algorithm.
   *
   * To override the default values, set `PerformHPO` to `true` and, optionally, supply the HyperParameterTuningJobConfig object. The tuning job specifies a metric to optimize, which hyperparameters participate in tuning, and the valid range for each tunable hyperparameter. In this case, you are required to specify an algorithm and `PerformAutoML` must be false.
   *
   * The following algorithms support HPO:
   *
   * - DeepAR+
   * - CNN-QR
   *
   * @public
   */
  PerformHPO?: boolean | undefined;

  /**
   * The hyperparameters to override for model training. The hyperparameters that you can override are listed in the individual algorithms. For the list of supported algorithms, see aws-forecast-choosing-recipes.
   *
   * @public
   */
  TrainingParameters?: Record<string, string> | undefined;

  /**
   * Used to override the default evaluation parameters of the specified algorithm. Amazon Forecast evaluates a predictor by splitting a dataset into training data and testing data. The evaluation parameters define how to perform the split and the number of iterations.
   *
   * @public
   */
  EvaluationParameters?: EvaluationParameters | undefined;

  /**
   * Provides hyperparameter override values for the algorithm. If you don't provide this parameter, Amazon Forecast uses default values. The individual algorithms specify which hyperparameters support hyperparameter optimization (HPO). For more information, see aws-forecast-choosing-recipes.
   *
   * If you included the `HPOConfig` object, you must set `PerformHPO` to true.
   *
   * @public
   */
  HPOConfig?: HyperParameterTuningJobConfig | undefined;

  /**
   * Describes the dataset group that contains the data to use to train the predictor.
   *
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * The featurization configuration.
   *
   * @public
   */
  FeaturizationConfig: FeaturizationConfig | undefined;

  /**
   * An Key Management Service (KMS) key and the Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key.
   *
   * @public
   */
  EncryptionConfig?: EncryptionConfig | undefined;

  /**
   * The optional metadata that you apply to the predictor to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has `aws` as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of `aws` do not count against your tags per resource limit.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The accuracy metric used to optimize the predictor.
   *
   * @public
   */
  OptimizationMetric?: OptimizationMetric | undefined;
}

/**
 * @public
 */
export interface CreatePredictorResponse {
  /**
   * The Amazon Resource Name (ARN) of the predictor.
   *
   * @public
   */
  PredictorArn?: string | undefined;
}

/**
 * @public
 */
export interface CreatePredictorBacktestExportJobRequest {
  /**
   * The name for the backtest export job.
   *
   * @public
   */
  PredictorBacktestExportJobName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the predictor that you want to export.
   *
   * @public
   */
  PredictorArn: string | undefined;

  /**
   * The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).
   *
   * @public
   */
  Destination: DataDestination | undefined;

  /**
   * Optional metadata to help you categorize and organize your backtests. Each tag consists of a key and an optional value, both of which you define. Tag keys and values are case sensitive.
   *
   * The following restrictions apply to tags:
   *
   * - For each resource, each tag key must be unique and each tag key must have one value.
   * - Maximum number of tags per resource: 50.
   * - Maximum key length: 128 Unicode characters in UTF-8.
   * - Maximum value length: 256 Unicode characters in UTF-8.
   * - Accepted characters: all letters and numbers, spaces representable in UTF-8, and + - = . _ : / @. If your tagging schema is used across other services and resources, the character restrictions of those services also apply.
   * - Key prefixes cannot include any upper or lowercase combination of `aws:` or `AWS:`. Values can have this prefix. If a tag value has `aws` as its prefix but the key does not, Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of `aws` do not count against your tags per resource limit. You cannot edit or delete tag keys with this prefix.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The format of the exported data, CSV or PARQUET. The default value is CSV.
   *
   * @public
   */
  Format?: string | undefined;
}

/**
 * @public
 */
export interface CreatePredictorBacktestExportJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the predictor backtest export job that you want to export.
   *
   * @public
   */
  PredictorBacktestExportJobArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateWhatIfAnalysisRequest {
  /**
   * The name of the what-if analysis. Each name must be unique.
   *
   * @public
   */
  WhatIfAnalysisName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the baseline forecast.
   *
   * @public
   */
  ForecastArn: string | undefined;

  /**
   * Defines the set of time series that are used in the what-if analysis with a `TimeSeriesIdentifiers` object. What-if analyses are performed only for the time series in this object.
   *
   * The `TimeSeriesIdentifiers` object needs the following information:
   *
   * - `DataSource`
   * - `Format`
   * - `Schema`
   *
   * @public
   */
  TimeSeriesSelector?: TimeSeriesSelector | undefined;

  /**
   * A list of [tags](https://docs.aws.amazon.com/forecast/latest/dg/tagging-forecast-resources.html) to apply to the what if forecast.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateWhatIfAnalysisResponse {
  /**
   * The Amazon Resource Name (ARN) of the what-if analysis.
   *
   * @public
   */
  WhatIfAnalysisArn?: string | undefined;
}

/**
 * A replacement dataset is a modified version of the baseline related time series that contains only the values that you want to include in a what-if forecast. The replacement dataset must contain the forecast dimensions and item identifiers in the baseline related time series as well as at least 1 changed time series. This dataset is merged with the baseline related time series to create a transformed dataset that is used for the what-if forecast.
 *
 * @public
 */
export interface TimeSeriesReplacementsDataSource {
  /**
   * The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the file(s). Optionally, includes an Key Management Service (KMS) key. This object is part of the DataSource object that is submitted in the CreateDatasetImportJob request, and part of the DataDestination object.
   *
   * @public
   */
  S3Config: S3Config | undefined;

  /**
   * Defines the fields of a dataset.
   *
   * @public
   */
  Schema: Schema | undefined;

  /**
   * The format of the replacement data, CSV or PARQUET.
   *
   * @public
   */
  Format?: string | undefined;

  /**
   * The timestamp format of the replacement data.
   *
   * @public
   */
  TimestampFormat?: string | undefined;
}

/**
 * Creates a subset of items within an attribute that are modified. For example, you can use this operation to create a subset of items that cost $5 or less. To do this, you specify `"AttributeName": "price"`, `"AttributeValue": "5"`, and `"Condition": "LESS_THAN"`. Pair this operation with the Action operation within the CreateWhatIfForecastRequest$TimeSeriesTransformations operation to define how the attribute is modified.
 *
 * @public
 */
export interface TimeSeriesCondition {
  /**
   * The item_id, dimension name, IM name, or timestamp that you are modifying.
   *
   * @public
   */
  AttributeName: string | undefined;

  /**
   * The value that is applied for the chosen `Condition`.
   *
   * @public
   */
  AttributeValue: string | undefined;

  /**
   * The condition to apply. Valid values are `EQUALS`, `NOT_EQUALS`, `LESS_THAN` and `GREATER_THAN`.
   *
   * @public
   */
  Condition: Condition | undefined;
}

/**
 * A transformation function is a pair of operations that select and modify the rows in a related time series. You select the rows that you want with a condition operation and you modify the rows with a transformation operation. All conditions are joined with an AND operation, meaning that all conditions must be true for the transformation to be applied. Transformations are applied in the order that they are listed.
 *
 * @public
 */
export interface TimeSeriesTransformation {
  /**
   * An array of actions that define a time series and how it is transformed. These transformations create a new time series that is used for the what-if analysis.
   *
   * @public
   */
  Action?: Action | undefined;

  /**
   * An array of conditions that define which members of the related time series are transformed.
   *
   * @public
   */
  TimeSeriesConditions?: TimeSeriesCondition[] | undefined;
}

/**
 * @public
 */
export interface CreateWhatIfForecastRequest {
  /**
   * The name of the what-if forecast. Names must be unique within each what-if analysis.
   *
   * @public
   */
  WhatIfForecastName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the what-if analysis.
   *
   * @public
   */
  WhatIfAnalysisArn: string | undefined;

  /**
   * The transformations that are applied to the baseline time series. Each transformation contains an action and a set of conditions. An action is applied only when all conditions are met. If no conditions are provided, the action is applied to all items.
   *
   * @public
   */
  TimeSeriesTransformations?: TimeSeriesTransformation[] | undefined;

  /**
   * The replacement time series dataset, which contains the rows that you want to change in the related time series dataset. A replacement time series does not need to contain all rows that are in the baseline related time series. Include only the rows (measure-dimension combinations) that you want to include in the what-if forecast.
   *
   * This dataset is merged with the original time series to create a transformed dataset that is used for the what-if analysis.
   *
   * This dataset should contain the items to modify (such as item_id or workforce_type), any relevant dimensions, the timestamp column, and at least one of the related time series columns. This file should not contain duplicate timestamps for the same time series.
   *
   * Timestamps and item_ids not included in this dataset are not included in the what-if analysis.
   *
   * @public
   */
  TimeSeriesReplacementsDataSource?: TimeSeriesReplacementsDataSource | undefined;

  /**
   * A list of [tags](https://docs.aws.amazon.com/forecast/latest/dg/tagging-forecast-resources.html) to apply to the what if forecast.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateWhatIfForecastResponse {
  /**
   * The Amazon Resource Name (ARN) of the what-if forecast.
   *
   * @public
   */
  WhatIfForecastArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateWhatIfForecastExportRequest {
  /**
   * The name of the what-if forecast to export.
   *
   * @public
   */
  WhatIfForecastExportName: string | undefined;

  /**
   * The list of what-if forecast Amazon Resource Names (ARNs) to export.
   *
   * @public
   */
  WhatIfForecastArns: string[] | undefined;

  /**
   * The location where you want to save the forecast and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the location. The forecast must be exported to an Amazon S3 bucket.
   *
   * If encryption is used, `Destination` must include an Key Management Service (KMS) key. The IAM role must allow Amazon Forecast permission to access the key.
   *
   * @public
   */
  Destination: DataDestination | undefined;

  /**
   * A list of [tags](https://docs.aws.amazon.com/forecast/latest/dg/tagging-forecast-resources.html) to apply to the what if forecast.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The format of the exported data, CSV or PARQUET.
   *
   * @public
   */
  Format?: string | undefined;
}

/**
 * @public
 */
export interface CreateWhatIfForecastExportResponse {
  /**
   * The Amazon Resource Name (ARN) of the what-if forecast.
   *
   * @public
   */
  WhatIfForecastExportArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset to delete.
   *
   * @public
   */
  DatasetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetGroupRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset group to delete.
   *
   * @public
   */
  DatasetGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetImportJobRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset import job to delete.
   *
   * @public
   */
  DatasetImportJobArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteExplainabilityRequest {
  /**
   * The Amazon Resource Name (ARN) of the Explainability resource to delete.
   *
   * @public
   */
  ExplainabilityArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteExplainabilityExportRequest {
  /**
   * The Amazon Resource Name (ARN) of the Explainability export to delete.
   *
   * @public
   */
  ExplainabilityExportArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteForecastRequest {
  /**
   * The Amazon Resource Name (ARN) of the forecast to delete.
   *
   * @public
   */
  ForecastArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteForecastExportJobRequest {
  /**
   * The Amazon Resource Name (ARN) of the forecast export job to delete.
   *
   * @public
   */
  ForecastExportJobArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteMonitorRequest {
  /**
   * The Amazon Resource Name (ARN) of the monitor resource to delete.
   *
   * @public
   */
  MonitorArn: string | undefined;
}

/**
 * @public
 */
export interface DeletePredictorRequest {
  /**
   * The Amazon Resource Name (ARN) of the predictor to delete.
   *
   * @public
   */
  PredictorArn: string | undefined;
}

/**
 * @public
 */
export interface DeletePredictorBacktestExportJobRequest {
  /**
   * The Amazon Resource Name (ARN) of the predictor backtest export job to delete.
   *
   * @public
   */
  PredictorBacktestExportJobArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceTreeRequest {
  /**
   * The Amazon Resource Name (ARN) of the parent resource to delete. All child resources of the parent resource will also be deleted.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteWhatIfAnalysisRequest {
  /**
   * The Amazon Resource Name (ARN) of the what-if analysis that you want to delete.
   *
   * @public
   */
  WhatIfAnalysisArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteWhatIfForecastRequest {
  /**
   * The Amazon Resource Name (ARN) of the what-if forecast that you want to delete.
   *
   * @public
   */
  WhatIfForecastArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteWhatIfForecastExportRequest {
  /**
   * The Amazon Resource Name (ARN) of the what-if forecast export that you want to delete.
   *
   * @public
   */
  WhatIfForecastExportArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAutoPredictorRequest {
  /**
   * The Amazon Resource Name (ARN) of the predictor.
   *
   * @public
   */
  PredictorArn: string | undefined;
}

/**
 * Provides information about the Explainability resource.
 *
 * @public
 */
export interface ExplainabilityInfo {
  /**
   * The Amazon Resource Name (ARN) of the Explainability.
   *
   * @public
   */
  ExplainabilityArn?: string | undefined;

  /**
   * The status of the Explainability. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Provides information about the monitor resource.
 *
 * @public
 */
export interface MonitorInfo {
  /**
   * The Amazon Resource Name (ARN) of the monitor resource.
   *
   * @public
   */
  MonitorArn?: string | undefined;

  /**
   * The status of the monitor. States include:
   *
   * - `ACTIVE`
   * - `ACTIVE_STOPPING`, `ACTIVE_STOPPED`
   * - `UPDATE_IN_PROGRESS`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Provides a summary of the reference predictor used when retraining or upgrading a predictor.
 *
 * @public
 */
export interface ReferencePredictorSummary {
  /**
   * The ARN of the reference predictor.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Whether the reference predictor is `Active` or `Deleted`.
   *
   * @public
   */
  State?: State | undefined;
}

/**
 * @public
 */
export interface DescribeAutoPredictorResponse {
  /**
   * The Amazon Resource Name (ARN) of the predictor
   *
   * @public
   */
  PredictorArn?: string | undefined;

  /**
   * The name of the predictor.
   *
   * @public
   */
  PredictorName?: string | undefined;

  /**
   * The number of time-steps that the model predicts. The forecast horizon is also called the prediction length.
   *
   * @public
   */
  ForecastHorizon?: number | undefined;

  /**
   * The forecast types used during predictor training. Default value is ["0.1","0.5","0.9"].
   *
   * @public
   */
  ForecastTypes?: string[] | undefined;

  /**
   * The frequency of predictions in a forecast.
   *
   * Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30 minutes), 15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute). For example, "Y" indicates every year and "5min" indicates every five minutes.
   *
   * @public
   */
  ForecastFrequency?: string | undefined;

  /**
   * An array of dimension (field) names that specify the attributes used to group your time series.
   *
   * @public
   */
  ForecastDimensions?: string[] | undefined;

  /**
   * An array of the ARNs of the dataset import jobs used to import training data for the predictor.
   *
   * @public
   */
  DatasetImportJobArns?: string[] | undefined;

  /**
   * The data configuration for your dataset group and any additional datasets.
   *
   * @public
   */
  DataConfig?: DataConfig | undefined;

  /**
   * An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key. You can specify this optional object in the CreateDataset and CreatePredictor requests.
   *
   * @public
   */
  EncryptionConfig?: EncryptionConfig | undefined;

  /**
   * The ARN and state of the reference predictor. This parameter is only valid for retrained or upgraded predictors.
   *
   * @public
   */
  ReferencePredictorSummary?: ReferencePredictorSummary | undefined;

  /**
   * The estimated time remaining in minutes for the predictor training job to complete.
   *
   * @public
   */
  EstimatedTimeRemainingInMinutes?: number | undefined;

  /**
   * The status of the predictor. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * In the event of an error, a message detailing the cause of the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The timestamp of the CreateAutoPredictor request.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * The accuracy metric used to optimize the predictor.
   *
   * @public
   */
  OptimizationMetric?: OptimizationMetric | undefined;

  /**
   * Provides the status and ARN of the Predictor Explainability.
   *
   * @public
   */
  ExplainabilityInfo?: ExplainabilityInfo | undefined;

  /**
   * A object with the Amazon Resource Name (ARN) and status of the monitor resource.
   *
   * @public
   */
  MonitorInfo?: MonitorInfo | undefined;

  /**
   * The time boundary Forecast uses when aggregating data.
   *
   * @public
   */
  TimeAlignmentBoundary?: TimeAlignmentBoundary | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  DatasetArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * The name of the dataset.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The domain associated with the dataset.
   *
   * @public
   */
  Domain?: Domain | undefined;

  /**
   * The dataset type.
   *
   * @public
   */
  DatasetType?: DatasetType | undefined;

  /**
   * The frequency of data collection.
   *
   * Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30 minutes), 15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute). For example, "M" indicates every month and "30min" indicates every 30 minutes.
   *
   * @public
   */
  DataFrequency?: string | undefined;

  /**
   * An array of `SchemaAttribute` objects that specify the dataset fields. Each `SchemaAttribute` specifies the name and data type of a field.
   *
   * @public
   */
  Schema?: Schema | undefined;

  /**
   * The Key Management Service (KMS) key and the Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key.
   *
   * @public
   */
  EncryptionConfig?: EncryptionConfig | undefined;

  /**
   * The status of the dataset. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   * - `UPDATE_PENDING`, `UPDATE_IN_PROGRESS`, `UPDATE_FAILED`
   *
   * The `UPDATE` states apply while data is imported to the dataset from a call to the [CreateDatasetImportJob](https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html) operation and reflect the status of the dataset import job. For example, when the import job status is `CREATE_IN_PROGRESS`, the status of the dataset is `UPDATE_IN_PROGRESS`.
   *
   * > **Note:** The `Status` of the dataset must be `ACTIVE` before you can import training data.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * When the dataset was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * When you create a dataset, `LastModificationTime` is the same as `CreationTime`. While data is being imported to the dataset, `LastModificationTime` is the current time of the `DescribeDataset` call. After a [CreateDatasetImportJob](https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html) operation has finished, `LastModificationTime` is when the import job completed or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetGroupRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset group.
   *
   * @public
   */
  DatasetGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetGroupResponse {
  /**
   * The name of the dataset group.
   *
   * @public
   */
  DatasetGroupName?: string | undefined;

  /**
   * The ARN of the dataset group.
   *
   * @public
   */
  DatasetGroupArn?: string | undefined;

  /**
   * An array of Amazon Resource Names (ARNs) of the datasets contained in the dataset group.
   *
   * @public
   */
  DatasetArns?: string[] | undefined;

  /**
   * The domain associated with the dataset group.
   *
   * @public
   */
  Domain?: Domain | undefined;

  /**
   * The status of the dataset group. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   * - `UPDATE_PENDING`, `UPDATE_IN_PROGRESS`, `UPDATE_FAILED`
   *
   * The `UPDATE` states apply when you call the [UpdateDatasetGroup](https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html) operation.
   *
   * > **Note:** The `Status` of the dataset group must be `ACTIVE` before you can use the dataset group to create a predictor.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * When the dataset group was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * When the dataset group was created or last updated from a call to the [UpdateDatasetGroup](https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html) operation. While the dataset group is being updated, `LastModificationTime` is the current time of the `DescribeDatasetGroup` call.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetImportJobRequest {
  /**
   * The Amazon Resource Name (ARN) of the dataset import job.
   *
   * @public
   */
  DatasetImportJobArn: string | undefined;
}

/**
 * Provides statistics for each data field imported into to an Amazon Forecast dataset with the [CreateDatasetImportJob](https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html) operation.
 *
 * @public
 */
export interface Statistics {
  /**
   * The number of values in the field. If the response value is -1, refer to `CountLong`.
   *
   * @public
   */
  Count?: number | undefined;

  /**
   * The number of distinct values in the field. If the response value is -1, refer to `CountDistinctLong`.
   *
   * @public
   */
  CountDistinct?: number | undefined;

  /**
   * The number of null values in the field. If the response value is -1, refer to `CountNullLong`.
   *
   * @public
   */
  CountNull?: number | undefined;

  /**
   * The number of NAN (not a number) values in the field. If the response value is -1, refer to `CountNanLong`.
   *
   * @public
   */
  CountNan?: number | undefined;

  /**
   * For a numeric field, the minimum value in the field.
   *
   * @public
   */
  Min?: string | undefined;

  /**
   * For a numeric field, the maximum value in the field.
   *
   * @public
   */
  Max?: string | undefined;

  /**
   * For a numeric field, the average value in the field.
   *
   * @public
   */
  Avg?: number | undefined;

  /**
   * For a numeric field, the standard deviation.
   *
   * @public
   */
  Stddev?: number | undefined;

  /**
   * The number of values in the field. `CountLong` is used instead of `Count` if the value is greater than 2,147,483,647.
   *
   * @public
   */
  CountLong?: number | undefined;

  /**
   * The number of distinct values in the field. `CountDistinctLong` is used instead of `CountDistinct` if the value is greater than 2,147,483,647.
   *
   * @public
   */
  CountDistinctLong?: number | undefined;

  /**
   * The number of null values in the field. `CountNullLong` is used instead of `CountNull` if the value is greater than 2,147,483,647.
   *
   * @public
   */
  CountNullLong?: number | undefined;

  /**
   * The number of NAN (not a number) values in the field. `CountNanLong` is used instead of `CountNan` if the value is greater than 2,147,483,647.
   *
   * @public
   */
  CountNanLong?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetImportJobResponse {
  /**
   * The name of the dataset import job.
   *
   * @public
   */
  DatasetImportJobName?: string | undefined;

  /**
   * The ARN of the dataset import job.
   *
   * @public
   */
  DatasetImportJobArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset that the training data was imported to.
   *
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * The format of timestamps in the dataset. The format that you specify depends on the `DataFrequency` specified when the dataset was created. The following formats are supported
   *
   * - "yyyy-MM-dd"
   *
   *   For the following data frequencies: Y, M, W, and D
   * - "yyyy-MM-dd HH:mm:ss"
   *
   *   For the following data frequencies: H, 30min, 15min, and 1min; and optionally, for: Y, M, W, and D
   *
   * @public
   */
  TimestampFormat?: string | undefined;

  /**
   * The single time zone applied to every item in the dataset
   *
   * @public
   */
  TimeZone?: string | undefined;

  /**
   * Whether `TimeZone` is automatically derived from the geolocation attribute.
   *
   * @public
   */
  UseGeolocationForTimeZone?: boolean | undefined;

  /**
   * The format of the geolocation attribute. Valid Values:`"LAT_LONG"` and `"CC_POSTALCODE"`.
   *
   * @public
   */
  GeolocationFormat?: string | undefined;

  /**
   * The location of the training data to import and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data.
   *
   * If encryption is used, `DataSource` includes an Key Management Service (KMS) key.
   *
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * The estimated time remaining in minutes for the dataset import job to complete.
   *
   * @public
   */
  EstimatedTimeRemainingInMinutes?: number | undefined;

  /**
   * Statistical information about each field in the input data.
   *
   * @public
   */
  FieldStatistics?: Record<string, Statistics> | undefined;

  /**
   * The size of the dataset in gigabytes (GB) after the import job has finished.
   *
   * @public
   */
  DataSize?: number | undefined;

  /**
   * The status of the dataset import job. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * If an error occurred, an informational message about the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * When the dataset import job was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * The format of the imported data, CSV or PARQUET.
   *
   * @public
   */
  Format?: string | undefined;

  /**
   * The import mode of the dataset import job, FULL or INCREMENTAL.
   *
   * @public
   */
  ImportMode?: ImportMode | undefined;
}

/**
 * @public
 */
export interface DescribeExplainabilityRequest {
  /**
   * The Amazon Resource Name (ARN) of the Explaianability to describe.
   *
   * @public
   */
  ExplainabilityArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeExplainabilityResponse {
  /**
   * The Amazon Resource Name (ARN) of the Explainability.
   *
   * @public
   */
  ExplainabilityArn?: string | undefined;

  /**
   * The name of the Explainability.
   *
   * @public
   */
  ExplainabilityName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the Explainability resource.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The configuration settings that define the granularity of time series and time points for the Explainability.
   *
   * @public
   */
  ExplainabilityConfig?: ExplainabilityConfig | undefined;

  /**
   * Whether the visualization was enabled for the Explainability resource.
   *
   * @public
   */
  EnableVisualization?: boolean | undefined;

  /**
   * The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the data and, optionally, an Key Management Service (KMS) key.
   *
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * Defines the fields of a dataset.
   *
   * @public
   */
  Schema?: Schema | undefined;

  /**
   * If `TimePointGranularity` is set to `SPECIFIC`, the first time point in the Explainability.
   *
   * @public
   */
  StartDateTime?: string | undefined;

  /**
   * If `TimePointGranularity` is set to `SPECIFIC`, the last time point in the Explainability.
   *
   * @public
   */
  EndDateTime?: string | undefined;

  /**
   * The estimated time remaining in minutes for the CreateExplainability job to complete.
   *
   * @public
   */
  EstimatedTimeRemainingInMinutes?: number | undefined;

  /**
   * If an error occurred, a message about the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The status of the Explainability resource. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * When the Explainability resource was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeExplainabilityExportRequest {
  /**
   * The Amazon Resource Name (ARN) of the Explainability export.
   *
   * @public
   */
  ExplainabilityExportArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeExplainabilityExportResponse {
  /**
   * The Amazon Resource Name (ARN) of the Explainability export.
   *
   * @public
   */
  ExplainabilityExportArn?: string | undefined;

  /**
   * The name of the Explainability export.
   *
   * @public
   */
  ExplainabilityExportName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Explainability export.
   *
   * @public
   */
  ExplainabilityArn?: string | undefined;

  /**
   * The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).
   *
   * @public
   */
  Destination?: DataDestination | undefined;

  /**
   * Information about any errors that occurred during the export.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The status of the Explainability export. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * When the Explainability export was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * The format of the exported data, CSV or PARQUET.
   *
   * @public
   */
  Format?: string | undefined;
}

/**
 * @public
 */
export interface DescribeForecastRequest {
  /**
   * The Amazon Resource Name (ARN) of the forecast.
   *
   * @public
   */
  ForecastArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeForecastResponse {
  /**
   * The forecast ARN as specified in the request.
   *
   * @public
   */
  ForecastArn?: string | undefined;

  /**
   * The name of the forecast.
   *
   * @public
   */
  ForecastName?: string | undefined;

  /**
   * The quantiles at which probabilistic forecasts were generated.
   *
   * @public
   */
  ForecastTypes?: string[] | undefined;

  /**
   * The ARN of the predictor used to generate the forecast.
   *
   * @public
   */
  PredictorArn?: string | undefined;

  /**
   * The ARN of the dataset group that provided the data used to train the predictor.
   *
   * @public
   */
  DatasetGroupArn?: string | undefined;

  /**
   * The estimated time remaining in minutes for the forecast job to complete.
   *
   * @public
   */
  EstimatedTimeRemainingInMinutes?: number | undefined;

  /**
   * The status of the forecast. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * > **Note:** The `Status` of the forecast must be `ACTIVE` before you can query or export the forecast.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * If an error occurred, an informational message about the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * When the forecast creation task was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * The time series to include in the forecast.
   *
   * @public
   */
  TimeSeriesSelector?: TimeSeriesSelector | undefined;
}

/**
 * @public
 */
export interface DescribeForecastExportJobRequest {
  /**
   * The Amazon Resource Name (ARN) of the forecast export job.
   *
   * @public
   */
  ForecastExportJobArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeForecastExportJobResponse {
  /**
   * The ARN of the forecast export job.
   *
   * @public
   */
  ForecastExportJobArn?: string | undefined;

  /**
   * The name of the forecast export job.
   *
   * @public
   */
  ForecastExportJobName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the exported forecast.
   *
   * @public
   */
  ForecastArn?: string | undefined;

  /**
   * The path to the Amazon Simple Storage Service (Amazon S3) bucket where the forecast is exported.
   *
   * @public
   */
  Destination?: DataDestination | undefined;

  /**
   * If an error occurred, an informational message about the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The status of the forecast export job. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * > **Note:** The `Status` of the forecast export job must be `ACTIVE` before you can access the forecast in your S3 bucket.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * When the forecast export job was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * The format of the exported data, CSV or PARQUET.
   *
   * @public
   */
  Format?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMonitorRequest {
  /**
   * The Amazon Resource Name (ARN) of the monitor resource to describe.
   *
   * @public
   */
  MonitorArn: string | undefined;
}

/**
 * An individual metric that you can use for comparison as you evaluate your monitoring results.
 *
 * @public
 */
export interface BaselineMetric {
  /**
   * The name of the metric.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The value for the metric.
   *
   * @public
   */
  Value?: number | undefined;
}

/**
 * Metrics you can use as a baseline for comparison purposes. Use these metrics when you interpret monitoring results for an auto predictor.
 *
 * @public
 */
export interface PredictorBaseline {
  /**
   * The initial [accuracy metrics](https://docs.aws.amazon.com/forecast/latest/dg/metrics.html) for the predictor. Use these metrics as a baseline for comparison purposes as you use your predictor and the metrics change.
   *
   * @public
   */
  BaselineMetrics?: BaselineMetric[] | undefined;
}

/**
 * Metrics you can use as a baseline for comparison purposes. Use these metrics when you interpret monitoring results for an auto predictor.
 *
 * @public
 */
export interface Baseline {
  /**
   * The initial [accuracy metrics](https://docs.aws.amazon.com/forecast/latest/dg/metrics.html) for the predictor you are monitoring. Use these metrics as a baseline for comparison purposes as you use your predictor and the metrics change.
   *
   * @public
   */
  PredictorBaseline?: PredictorBaseline | undefined;
}

/**
 * @public
 */
export interface DescribeMonitorResponse {
  /**
   * The name of the monitor.
   *
   * @public
   */
  MonitorName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the monitor resource described.
   *
   * @public
   */
  MonitorArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the auto predictor being monitored.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The status of the monitor resource.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The timestamp of the latest evaluation completed by the monitor.
   *
   * @public
   */
  LastEvaluationTime?: Date | undefined;

  /**
   * The state of the monitor's latest evaluation.
   *
   * @public
   */
  LastEvaluationState?: string | undefined;

  /**
   * Metrics you can use as a baseline for comparison purposes. Use these values you interpret monitoring results for an auto predictor.
   *
   * @public
   */
  Baseline?: Baseline | undefined;

  /**
   * An error message, if any, for the monitor.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The timestamp for when the monitor resource was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The timestamp of the latest modification to the monitor.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * The estimated number of minutes remaining before the monitor resource finishes its current evaluation.
   *
   * @public
   */
  EstimatedEvaluationTimeRemainingInMinutes?: number | undefined;
}

/**
 * @public
 */
export interface DescribePredictorRequest {
  /**
   * The Amazon Resource Name (ARN) of the predictor that you want information about.
   *
   * @public
   */
  PredictorArn: string | undefined;
}

/**
 * The status, start time, and end time of a backtest, as well as a failure reason if applicable.
 *
 * @public
 */
export interface TestWindowSummary {
  /**
   * The time at which the test began.
   *
   * @public
   */
  TestWindowStart?: Date | undefined;

  /**
   * The time at which the test ended.
   *
   * @public
   */
  TestWindowEnd?: Date | undefined;

  /**
   * The status of the test. Possible status values are:
   *
   * - `ACTIVE`
   * - `CREATE_IN_PROGRESS`
   * - `CREATE_FAILED`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * If the test failed, the reason why it failed.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The algorithm used to perform a backtest and the status of those tests.
 *
 * @public
 */
export interface PredictorExecution {
  /**
   * The ARN of the algorithm used to test the predictor.
   *
   * @public
   */
  AlgorithmArn?: string | undefined;

  /**
   * An array of test windows used to evaluate the algorithm. The `NumberOfBacktestWindows` from the object determines the number of windows in the array.
   *
   * @public
   */
  TestWindows?: TestWindowSummary[] | undefined;
}

/**
 * Contains details on the backtests performed to evaluate the accuracy of the predictor. The tests are returned in descending order of accuracy, with the most accurate backtest appearing first. You specify the number of backtests to perform when you call the operation.
 *
 * @public
 */
export interface PredictorExecutionDetails {
  /**
   * An array of the backtests performed to evaluate the accuracy of the predictor against a particular algorithm. The `NumberOfBacktestWindows` from the object determines the number of windows in the array.
   *
   * @public
   */
  PredictorExecutions?: PredictorExecution[] | undefined;
}

/**
 * @public
 */
export interface DescribePredictorResponse {
  /**
   * The ARN of the predictor.
   *
   * @public
   */
  PredictorArn?: string | undefined;

  /**
   * The name of the predictor.
   *
   * @public
   */
  PredictorName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the algorithm used for model training.
   *
   * @public
   */
  AlgorithmArn?: string | undefined;

  /**
   * When `PerformAutoML` is specified, the ARN of the chosen algorithm.
   *
   * @public
   */
  AutoMLAlgorithmArns?: string[] | undefined;

  /**
   * The number of time-steps of the forecast. The forecast horizon is also called the prediction length.
   *
   * @public
   */
  ForecastHorizon?: number | undefined;

  /**
   * The forecast types used during predictor training. Default value is `["0.1","0.5","0.9"]`
   *
   * @public
   */
  ForecastTypes?: string[] | undefined;

  /**
   * Whether the predictor is set to perform AutoML.
   *
   * @public
   */
  PerformAutoML?: boolean | undefined;

  /**
   * > **Note:** The `LatencyOptimized` AutoML override strategy is only available in private beta. Contact Amazon Web Services Support or your account manager to learn more about access privileges.
   *
   * The AutoML strategy used to train the predictor. Unless `LatencyOptimized` is specified, the AutoML strategy optimizes predictor accuracy.
   *
   * This parameter is only valid for predictors trained using AutoML.
   *
   * @public
   */
  AutoMLOverrideStrategy?: AutoMLOverrideStrategy | undefined;

  /**
   * Whether the predictor is set to perform hyperparameter optimization (HPO).
   *
   * @public
   */
  PerformHPO?: boolean | undefined;

  /**
   * The default training parameters or overrides selected during model training. When running AutoML or choosing HPO with CNN-QR or DeepAR+, the optimized values for the chosen hyperparameters are returned. For more information, see aws-forecast-choosing-recipes.
   *
   * @public
   */
  TrainingParameters?: Record<string, string> | undefined;

  /**
   * Used to override the default evaluation parameters of the specified algorithm. Amazon Forecast evaluates a predictor by splitting a dataset into training data and testing data. The evaluation parameters define how to perform the split and the number of iterations.
   *
   * @public
   */
  EvaluationParameters?: EvaluationParameters | undefined;

  /**
   * The hyperparameter override values for the algorithm.
   *
   * @public
   */
  HPOConfig?: HyperParameterTuningJobConfig | undefined;

  /**
   * Describes the dataset group that contains the data to use to train the predictor.
   *
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * The featurization configuration.
   *
   * @public
   */
  FeaturizationConfig?: FeaturizationConfig | undefined;

  /**
   * An Key Management Service (KMS) key and the Identity and Access Management (IAM) role that Amazon Forecast can assume to access the key.
   *
   * @public
   */
  EncryptionConfig?: EncryptionConfig | undefined;

  /**
   * Details on the the status and results of the backtests performed to evaluate the accuracy of the predictor. You specify the number of backtests to perform when you call the operation.
   *
   * @public
   */
  PredictorExecutionDetails?: PredictorExecutionDetails | undefined;

  /**
   * The estimated time remaining in minutes for the predictor training job to complete.
   *
   * @public
   */
  EstimatedTimeRemainingInMinutes?: number | undefined;

  /**
   * Whether the predictor was created with CreateAutoPredictor.
   *
   * @public
   */
  IsAutoPredictor?: boolean | undefined;

  /**
   * An array of the ARNs of the dataset import jobs used to import training data for the predictor.
   *
   * @public
   */
  DatasetImportJobArns?: string[] | undefined;

  /**
   * The status of the predictor. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   *
   * > **Note:** The `Status` of the predictor must be `ACTIVE` before you can use the predictor to create a forecast.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * If an error occurred, an informational message about the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * When the model training task was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * The accuracy metric used to optimize the predictor.
   *
   * @public
   */
  OptimizationMetric?: OptimizationMetric | undefined;
}

/**
 * @public
 */
export interface DescribePredictorBacktestExportJobRequest {
  /**
   * The Amazon Resource Name (ARN) of the predictor backtest export job.
   *
   * @public
   */
  PredictorBacktestExportJobArn: string | undefined;
}

/**
 * @public
 */
export interface DescribePredictorBacktestExportJobResponse {
  /**
   * The Amazon Resource Name (ARN) of the predictor backtest export job.
   *
   * @public
   */
  PredictorBacktestExportJobArn?: string | undefined;

  /**
   * The name of the predictor backtest export job.
   *
   * @public
   */
  PredictorBacktestExportJobName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the predictor.
   *
   * @public
   */
  PredictorArn?: string | undefined;

  /**
   * The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).
   *
   * @public
   */
  Destination?: DataDestination | undefined;

  /**
   * Information about any errors that may have occurred during the backtest export.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The status of the predictor backtest export job. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * When the predictor backtest export job was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * The format of the exported data, CSV or PARQUET.
   *
   * @public
   */
  Format?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWhatIfAnalysisRequest {
  /**
   * The Amazon Resource Name (ARN) of the what-if analysis that you are interested in.
   *
   * @public
   */
  WhatIfAnalysisArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeWhatIfAnalysisResponse {
  /**
   * The name of the what-if analysis.
   *
   * @public
   */
  WhatIfAnalysisName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the what-if analysis.
   *
   * @public
   */
  WhatIfAnalysisArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the what-if forecast.
   *
   * @public
   */
  ForecastArn?: string | undefined;

  /**
   * The approximate time remaining to complete the what-if analysis, in minutes.
   *
   * @public
   */
  EstimatedTimeRemainingInMinutes?: number | undefined;

  /**
   * The status of the what-if analysis. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * > **Note:** The `Status` of the what-if analysis must be `ACTIVE` before you can access the analysis.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * If an error occurred, an informational message about the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * When the what-if analysis was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * Defines the set of time series that are used to create the forecasts in a `TimeSeriesIdentifiers` object.
   *
   * The `TimeSeriesIdentifiers` object needs the following information:
   *
   * - `DataSource`
   * - `Format`
   * - `Schema`
   *
   * @public
   */
  TimeSeriesSelector?: TimeSeriesSelector | undefined;
}

/**
 * @public
 */
export interface DescribeWhatIfForecastRequest {
  /**
   * The Amazon Resource Name (ARN) of the what-if forecast that you are interested in.
   *
   * @public
   */
  WhatIfForecastArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeWhatIfForecastResponse {
  /**
   * The name of the what-if forecast.
   *
   * @public
   */
  WhatIfForecastName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the what-if forecast.
   *
   * @public
   */
  WhatIfForecastArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the what-if analysis that contains this forecast.
   *
   * @public
   */
  WhatIfAnalysisArn?: string | undefined;

  /**
   * The approximate time remaining to complete the what-if forecast, in minutes.
   *
   * @public
   */
  EstimatedTimeRemainingInMinutes?: number | undefined;

  /**
   * The status of the what-if forecast. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * > **Note:** The `Status` of the what-if forecast must be `ACTIVE` before you can access the forecast.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * If an error occurred, an informational message about the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * When the what-if forecast was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * An array of `Action` and `TimeSeriesConditions` elements that describe what transformations were applied to which time series.
   *
   * @public
   */
  TimeSeriesTransformations?: TimeSeriesTransformation[] | undefined;

  /**
   * An array of `S3Config`, `Schema`, and `Format` elements that describe the replacement time series.
   *
   * @public
   */
  TimeSeriesReplacementsDataSource?: TimeSeriesReplacementsDataSource | undefined;

  /**
   * The quantiles at which probabilistic forecasts are generated. You can specify up to five quantiles per what-if forecast in the CreateWhatIfForecast operation. If you didn't specify quantiles, the default values are `["0.1", "0.5", "0.9"]`.
   *
   * @public
   */
  ForecastTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeWhatIfForecastExportRequest {
  /**
   * The Amazon Resource Name (ARN) of the what-if forecast export that you are interested in.
   *
   * @public
   */
  WhatIfForecastExportArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeWhatIfForecastExportResponse {
  /**
   * The Amazon Resource Name (ARN) of the what-if forecast export.
   *
   * @public
   */
  WhatIfForecastExportArn?: string | undefined;

  /**
   * The name of the what-if forecast export.
   *
   * @public
   */
  WhatIfForecastExportName?: string | undefined;

  /**
   * An array of Amazon Resource Names (ARNs) that represent all of the what-if forecasts exported in this resource.
   *
   * @public
   */
  WhatIfForecastArns?: string[] | undefined;

  /**
   * The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).
   *
   * @public
   */
  Destination?: DataDestination | undefined;

  /**
   * If an error occurred, an informational message about the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The status of the what-if forecast. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * > **Note:** The `Status` of the what-if forecast export must be `ACTIVE` before you can access the forecast export.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * When the what-if forecast export was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The approximate time remaining to complete the what-if forecast export, in minutes.
   *
   * @public
   */
  EstimatedTimeRemainingInMinutes?: number | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * The format of the exported data, CSV or PARQUET.
   *
   * @public
   */
  Format?: string | undefined;
}

/**
 * @public
 */
export interface GetAccuracyMetricsRequest {
  /**
   * The Amazon Resource Name (ARN) of the predictor to get metrics for.
   *
   * @public
   */
  PredictorArn: string | undefined;
}

/**
 * Provides detailed error metrics to evaluate the performance of a predictor. This object is part of the Metrics object.
 *
 * @public
 */
export interface ErrorMetric {
  /**
   * The Forecast type used to compute WAPE, MAPE, MASE, and RMSE.
   *
   * @public
   */
  ForecastType?: string | undefined;

  /**
   * The weighted absolute percentage error (WAPE).
   *
   * @public
   */
  WAPE?: number | undefined;

  /**
   * The root-mean-square error (RMSE).
   *
   * @public
   */
  RMSE?: number | undefined;

  /**
   * The Mean Absolute Scaled Error (MASE)
   *
   * @public
   */
  MASE?: number | undefined;

  /**
   * The Mean Absolute Percentage Error (MAPE)
   *
   * @public
   */
  MAPE?: number | undefined;
}

/**
 * The weighted loss value for a quantile. This object is part of the Metrics object.
 *
 * @public
 */
export interface WeightedQuantileLoss {
  /**
   * The quantile. Quantiles divide a probability distribution into regions of equal probability. For example, if the distribution was divided into 5 regions of equal probability, the quantiles would be 0.2, 0.4, 0.6, and 0.8.
   *
   * @public
   */
  Quantile?: number | undefined;

  /**
   * The difference between the predicted value and the actual value over the quantile, weighted (normalized) by dividing by the sum over all quantiles.
   *
   * @public
   */
  LossValue?: number | undefined;
}

/**
 * Provides metrics that are used to evaluate the performance of a predictor. This object is part of the WindowSummary object.
 *
 * @public
 */
export interface Metrics {
  /**
   * The root-mean-square error (RMSE).
   *
   * @deprecated This property is deprecated, please refer to ErrorMetrics for both RMSE and WAPE.
   * @public
   */
  RMSE?: number | undefined;

  /**
   * An array of weighted quantile losses. Quantiles divide a probability distribution into regions of equal probability. The distribution in this case is the loss function.
   *
   * @public
   */
  WeightedQuantileLosses?: WeightedQuantileLoss[] | undefined;

  /**
   * Provides detailed error metrics for each forecast type. Metrics include root-mean square-error (RMSE), mean absolute percentage error (MAPE), mean absolute scaled error (MASE), and weighted average percentage error (WAPE).
   *
   * @public
   */
  ErrorMetrics?: ErrorMetric[] | undefined;

  /**
   * The average value of all weighted quantile losses.
   *
   * @public
   */
  AverageWeightedQuantileLoss?: number | undefined;
}

/**
 * The metrics for a time range within the evaluation portion of a dataset. This object is part of the EvaluationResult object.
 *
 * The `TestWindowStart` and `TestWindowEnd` parameters are determined by the `BackTestWindowOffset` parameter of the EvaluationParameters object.
 *
 * @public
 */
export interface WindowSummary {
  /**
   * The timestamp that defines the start of the window.
   *
   * @public
   */
  TestWindowStart?: Date | undefined;

  /**
   * The timestamp that defines the end of the window.
   *
   * @public
   */
  TestWindowEnd?: Date | undefined;

  /**
   * The number of data points within the window.
   *
   * @public
   */
  ItemCount?: number | undefined;

  /**
   * The type of evaluation.
   *
   * - `SUMMARY` - The average metrics across all windows.
   * - `COMPUTED` - The metrics for the specified window.
   *
   * @public
   */
  EvaluationType?: EvaluationType | undefined;

  /**
   * Provides metrics used to evaluate the performance of a predictor.
   *
   * @public
   */
  Metrics?: Metrics | undefined;
}

/**
 * The results of evaluating an algorithm. Returned as part of the GetAccuracyMetrics response.
 *
 * @public
 */
export interface EvaluationResult {
  /**
   * The Amazon Resource Name (ARN) of the algorithm that was evaluated.
   *
   * @public
   */
  AlgorithmArn?: string | undefined;

  /**
   * The array of test windows used for evaluating the algorithm. The `NumberOfBacktestWindows` from the EvaluationParameters object determines the number of windows in the array.
   *
   * @public
   */
  TestWindows?: WindowSummary[] | undefined;
}

/**
 * @public
 */
export interface GetAccuracyMetricsResponse {
  /**
   * An array of results from evaluating the predictor.
   *
   * @public
   */
  PredictorEvaluationResults?: EvaluationResult[] | undefined;

  /**
   * Whether the predictor was created with CreateAutoPredictor.
   *
   * @public
   */
  IsAutoPredictor?: boolean | undefined;

  /**
   * > **Note:** The `LatencyOptimized` AutoML override strategy is only available in private beta. Contact Amazon Web Services Support or your account manager to learn more about access privileges.
   *
   * The AutoML strategy used to train the predictor. Unless `LatencyOptimized` is specified, the AutoML strategy optimizes predictor accuracy.
   *
   * This parameter is only valid for predictors trained using AutoML.
   *
   * @public
   */
  AutoMLOverrideStrategy?: AutoMLOverrideStrategy | undefined;

  /**
   * The accuracy metric used to optimize the predictor.
   *
   * @public
   */
  OptimizationMetric?: OptimizationMetric | undefined;
}

/**
 * @public
 */
export interface ListDatasetGroupsRequest {
  /**
   * If the result of the previous request was truncated, the response includes a `NextToken`. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of items to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides a summary of the dataset group properties used in the [ListDatasetGroups](https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html) operation. To get the complete set of properties, call the [DescribeDatasetGroup](https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html) operation, and provide the `DatasetGroupArn`.
 *
 * @public
 */
export interface DatasetGroupSummary {
  /**
   * The Amazon Resource Name (ARN) of the dataset group.
   *
   * @public
   */
  DatasetGroupArn?: string | undefined;

  /**
   * The name of the dataset group.
   *
   * @public
   */
  DatasetGroupName?: string | undefined;

  /**
   * When the dataset group was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * When the dataset group was created or last updated from a call to the [UpdateDatasetGroup](https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html) operation. While the dataset group is being updated, `LastModificationTime` is the current time of the `ListDatasetGroups` call.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListDatasetGroupsResponse {
  /**
   * An array of objects that summarize each dataset group's properties.
   *
   * @public
   */
  DatasetGroups?: DatasetGroupSummary[] | undefined;

  /**
   * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a filter for choosing a subset of objects. Each filter consists of a condition and a match statement. The condition is either `IS` or `IS_NOT`, which specifies whether to include or exclude the objects that match the statement, respectively. The match statement consists of a key and a value.
 *
 * @public
 */
export interface Filter {
  /**
   * The name of the parameter to filter on.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value to match.
   *
   * @public
   */
  Value: string | undefined;

  /**
   * The condition to apply. To include the objects that match the statement, specify `IS`. To exclude matching objects, specify `IS_NOT`.
   *
   * @public
   */
  Condition: FilterConditionString | undefined;
}

/**
 * @public
 */
export interface ListDatasetImportJobsRequest {
  /**
   * If the result of the previous request was truncated, the response includes a `NextToken`. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of items to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An array of filters. For each filter, you provide a condition and a match statement. The condition is either `IS` or `IS_NOT`, which specifies whether to include or exclude the datasets that match the statement from the list, respectively. The match statement consists of a key and a value.
   *
   * **Filter properties**
   *
   * - `Condition` - The condition to apply. Valid values are `IS` and `IS_NOT`. To include the datasets that match the statement, specify `IS`. To exclude matching datasets, specify `IS_NOT`.
   * - `Key` - The name of the parameter to filter on. Valid values are `DatasetArn` and `Status`.
   * - `Value` - The value to match.
   *
   * For example, to list all dataset import jobs whose status is ACTIVE, you specify the following filter:
   *
   * `"Filters": [ \{ "Condition": "IS", "Key": "Status", "Value": "ACTIVE" \} ]`
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Provides a summary of the dataset import job properties used in the [ListDatasetImportJobs](https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html) operation. To get the complete set of properties, call the [DescribeDatasetImportJob](https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html) operation, and provide the `DatasetImportJobArn`.
 *
 * @public
 */
export interface DatasetImportJobSummary {
  /**
   * The Amazon Resource Name (ARN) of the dataset import job.
   *
   * @public
   */
  DatasetImportJobArn?: string | undefined;

  /**
   * The name of the dataset import job.
   *
   * @public
   */
  DatasetImportJobName?: string | undefined;

  /**
   * The location of the training data to import and an Identity and Access Management (IAM) role that Amazon Forecast can assume to access the data. The training data must be stored in an Amazon S3 bucket.
   *
   * If encryption is used, `DataSource` includes an Key Management Service (KMS) key.
   *
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * The status of the dataset import job. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * If an error occurred, an informational message about the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * When the dataset import job was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * The import mode of the dataset import job, FULL or INCREMENTAL.
   *
   * @public
   */
  ImportMode?: ImportMode | undefined;
}

/**
 * @public
 */
export interface ListDatasetImportJobsResponse {
  /**
   * An array of objects that summarize each dataset import job's properties.
   *
   * @public
   */
  DatasetImportJobs?: DatasetImportJobSummary[] | undefined;

  /**
   * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * If the result of the previous request was truncated, the response includes a `NextToken`. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of items to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Provides a summary of the dataset properties used in the [ListDatasets](https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html) operation. To get the complete set of properties, call the [DescribeDataset](https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html) operation, and provide the `DatasetArn`.
 *
 * @public
 */
export interface DatasetSummary {
  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * The name of the dataset.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The dataset type.
   *
   * @public
   */
  DatasetType?: DatasetType | undefined;

  /**
   * The domain associated with the dataset.
   *
   * @public
   */
  Domain?: Domain | undefined;

  /**
   * When the dataset was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * When you create a dataset, `LastModificationTime` is the same as `CreationTime`. While data is being imported to the dataset, `LastModificationTime` is the current time of the `ListDatasets` call. After a [CreateDatasetImportJob](https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html) operation has finished, `LastModificationTime` is when the import job completed or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * An array of objects that summarize each dataset's properties.
   *
   * @public
   */
  Datasets?: DatasetSummary[] | undefined;

  /**
   * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExplainabilitiesRequest {
  /**
   * If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of items returned in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An array of filters. For each filter, provide a condition and a match statement. The condition is either `IS` or `IS_NOT`, which specifies whether to include or exclude the resources that match the statement from the list. The match statement consists of a key and a value.
   *
   * **Filter properties**
   *
   * - `Condition` - The condition to apply. Valid values are `IS` and `IS_NOT`.
   * - `Key` - The name of the parameter to filter on. Valid values are `ResourceArn` and `Status`.
   * - `Value` - The value to match.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Provides a summary of the Explainability properties used in the ListExplainabilities operation. To get a complete set of properties, call the DescribeExplainability operation, and provide the listed `ExplainabilityArn`.
 *
 * @public
 */
export interface ExplainabilitySummary {
  /**
   * The Amazon Resource Name (ARN) of the Explainability.
   *
   * @public
   */
  ExplainabilityArn?: string | undefined;

  /**
   * The name of the Explainability.
   *
   * @public
   */
  ExplainabilityName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the Explainability.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The configuration settings that define the granularity of time series and time points for the Explainability.
   *
   * @public
   */
  ExplainabilityConfig?: ExplainabilityConfig | undefined;

  /**
   * The status of the Explainability. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Information about any errors that may have occurred during the Explainability creation process.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * When the Explainability was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListExplainabilitiesResponse {
  /**
   * An array of objects that summarize the properties of each Explainability resource.
   *
   * @public
   */
  Explainabilities?: ExplainabilitySummary[] | undefined;

  /**
   * Returns this token if the response is truncated. To retrieve the next set of results, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExplainabilityExportsRequest {
  /**
   * If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of items to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An array of filters. For each filter, provide a condition and a match statement. The condition is either `IS` or `IS_NOT`, which specifies whether to include or exclude resources that match the statement from the list. The match statement consists of a key and a value.
   *
   * **Filter properties**
   *
   * - `Condition` - The condition to apply. Valid values are `IS` and `IS_NOT`.
   * - `Key` - The name of the parameter to filter on. Valid values are `ResourceArn` and `Status`.
   * - `Value` - The value to match.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Provides a summary of the Explainability export properties used in the ListExplainabilityExports operation. To get a complete set of properties, call the DescribeExplainabilityExport operation, and provide the `ExplainabilityExportArn`.
 *
 * @public
 */
export interface ExplainabilityExportSummary {
  /**
   * The Amazon Resource Name (ARN) of the Explainability export.
   *
   * @public
   */
  ExplainabilityExportArn?: string | undefined;

  /**
   * The name of the Explainability export
   *
   * @public
   */
  ExplainabilityExportName?: string | undefined;

  /**
   * The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).
   *
   * @public
   */
  Destination?: DataDestination | undefined;

  /**
   * The status of the Explainability export. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Information about any errors that may have occurred during the Explainability export.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * When the Explainability was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListExplainabilityExportsResponse {
  /**
   * An array of objects that summarize the properties of each Explainability export.
   *
   * @public
   */
  ExplainabilityExports?: ExplainabilityExportSummary[] | undefined;

  /**
   * Returns this token if the response is truncated. To retrieve the next set of results, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListForecastExportJobsRequest {
  /**
   * If the result of the previous request was truncated, the response includes a `NextToken`. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of items to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An array of filters. For each filter, you provide a condition and a match statement. The condition is either `IS` or `IS_NOT`, which specifies whether to include or exclude the forecast export jobs that match the statement from the list, respectively. The match statement consists of a key and a value.
   *
   * **Filter properties**
   *
   * - `Condition` - The condition to apply. Valid values are `IS` and `IS_NOT`. To include the forecast export jobs that match the statement, specify `IS`. To exclude matching forecast export jobs, specify `IS_NOT`.
   * - `Key` - The name of the parameter to filter on. Valid values are `ForecastArn` and `Status`.
   * - `Value` - The value to match.
   *
   * For example, to list all jobs that export a forecast named *electricityforecast*, specify the following filter:
   *
   * `"Filters": [ \{ "Condition": "IS", "Key": "ForecastArn", "Value": "arn:aws:forecast:us-west-2:<acct-id>:forecast/electricityforecast" \} ]`
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Provides a summary of the forecast export job properties used in the ListForecastExportJobs operation. To get the complete set of properties, call the DescribeForecastExportJob operation, and provide the listed `ForecastExportJobArn`.
 *
 * @public
 */
export interface ForecastExportJobSummary {
  /**
   * The Amazon Resource Name (ARN) of the forecast export job.
   *
   * @public
   */
  ForecastExportJobArn?: string | undefined;

  /**
   * The name of the forecast export job.
   *
   * @public
   */
  ForecastExportJobName?: string | undefined;

  /**
   * The path to the Amazon Simple Storage Service (Amazon S3) bucket where the forecast is exported.
   *
   * @public
   */
  Destination?: DataDestination | undefined;

  /**
   * The status of the forecast export job. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * > **Note:** The `Status` of the forecast export job must be `ACTIVE` before you can access the forecast in your S3 bucket.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * If an error occurred, an informational message about the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * When the forecast export job was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListForecastExportJobsResponse {
  /**
   * An array of objects that summarize each export job's properties.
   *
   * @public
   */
  ForecastExportJobs?: ForecastExportJobSummary[] | undefined;

  /**
   * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListForecastsRequest {
  /**
   * If the result of the previous request was truncated, the response includes a `NextToken`. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of items to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An array of filters. For each filter, you provide a condition and a match statement. The condition is either `IS` or `IS_NOT`, which specifies whether to include or exclude the forecasts that match the statement from the list, respectively. The match statement consists of a key and a value.
   *
   * **Filter properties**
   *
   * - `Condition` - The condition to apply. Valid values are `IS` and `IS_NOT`. To include the forecasts that match the statement, specify `IS`. To exclude matching forecasts, specify `IS_NOT`.
   * - `Key` - The name of the parameter to filter on. Valid values are `DatasetGroupArn`, `PredictorArn`, and `Status`.
   * - `Value` - The value to match.
   *
   * For example, to list all forecasts whose status is not ACTIVE, you would specify:
   *
   * `"Filters": [ \{ "Condition": "IS_NOT", "Key": "Status", "Value": "ACTIVE" \} ]`
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Provides a summary of the forecast properties used in the ListForecasts operation. To get the complete set of properties, call the DescribeForecast operation, and provide the `ForecastArn` that is listed in the summary.
 *
 * @public
 */
export interface ForecastSummary {
  /**
   * The ARN of the forecast.
   *
   * @public
   */
  ForecastArn?: string | undefined;

  /**
   * The name of the forecast.
   *
   * @public
   */
  ForecastName?: string | undefined;

  /**
   * The ARN of the predictor used to generate the forecast.
   *
   * @public
   */
  PredictorArn?: string | undefined;

  /**
   * Whether the Forecast was created from an AutoPredictor.
   *
   * @public
   */
  CreatedUsingAutoPredictor?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset group that provided the data used to train the predictor.
   *
   * @public
   */
  DatasetGroupArn?: string | undefined;

  /**
   * The status of the forecast. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * > **Note:** The `Status` of the forecast must be `ACTIVE` before you can query or export the forecast.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * If an error occurred, an informational message about the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * When the forecast creation task was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListForecastsResponse {
  /**
   * An array of objects that summarize each forecast's properties.
   *
   * @public
   */
  Forecasts?: ForecastSummary[] | undefined;

  /**
   * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMonitorEvaluationsRequest {
  /**
   * If the result of the previous request was truncated, the response includes a `NextToken`. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of monitoring results to return.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The Amazon Resource Name (ARN) of the monitor resource to get results from.
   *
   * @public
   */
  MonitorArn: string | undefined;

  /**
   * An array of filters. For each filter, provide a condition and a match statement. The condition is either `IS` or `IS_NOT`, which specifies whether to include or exclude the resources that match the statement from the list. The match statement consists of a key and a value.
   *
   * **Filter properties**
   *
   * - `Condition` - The condition to apply. Valid values are `IS` and `IS_NOT`.
   * - `Key` - The name of the parameter to filter on. The only valid value is `EvaluationState`.
   * - `Value` - The value to match. Valid values are only `SUCCESS` or `FAILURE`.
   *
   * For example, to list only successful monitor evaluations, you would specify:
   *
   * `"Filters": [ \{ "Condition": "IS", "Key": "EvaluationState", "Value": "SUCCESS" \} ]`
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * An individual metric Forecast calculated when monitoring predictor usage. You can compare the value for this metric to the metric's value in the Baseline to see how your predictor's performance is changing.
 *
 * For more information about metrics generated by Forecast see [Evaluating Predictor Accuracy](https://docs.aws.amazon.com/forecast/latest/dg/metrics.html)
 *
 * @public
 */
export interface MetricResult {
  /**
   * The name of the metric.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The value for the metric.
   *
   * @public
   */
  MetricValue?: number | undefined;
}

/**
 * The source of the data the monitor used during the evaluation.
 *
 * @public
 */
export interface MonitorDataSource {
  /**
   * The Amazon Resource Name (ARN) of the dataset import job used to import the data that initiated the monitor evaluation.
   *
   * @public
   */
  DatasetImportJobArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the forecast the monitor used during the evaluation.
   *
   * @public
   */
  ForecastArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the predictor resource you are monitoring.
   *
   * @public
   */
  PredictorArn?: string | undefined;
}

/**
 * Provides details about a predictor event, such as a retraining.
 *
 * @public
 */
export interface PredictorEvent {
  /**
   * The type of event. For example, `Retrain`. A retraining event denotes the timepoint when a predictor was retrained. Any monitor results from before the `Datetime` are from the previous predictor. Any new metrics are for the newly retrained predictor.
   *
   * @public
   */
  Detail?: string | undefined;

  /**
   * The timestamp for when the event occurred.
   *
   * @public
   */
  Datetime?: Date | undefined;
}

/**
 * Describes the results of a monitor evaluation.
 *
 * @public
 */
export interface PredictorMonitorEvaluation {
  /**
   * The Amazon Resource Name (ARN) of the resource to monitor.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the monitor resource.
   *
   * @public
   */
  MonitorArn?: string | undefined;

  /**
   * The timestamp that indicates when the monitor evaluation was started.
   *
   * @public
   */
  EvaluationTime?: Date | undefined;

  /**
   * The status of the monitor evaluation. The state can be `SUCCESS` or `FAILURE`.
   *
   * @public
   */
  EvaluationState?: string | undefined;

  /**
   * The timestamp that indicates the start of the window that is used for monitor evaluation.
   *
   * @public
   */
  WindowStartDatetime?: Date | undefined;

  /**
   * The timestamp that indicates the end of the window that is used for monitor evaluation.
   *
   * @public
   */
  WindowEndDatetime?: Date | undefined;

  /**
   * Provides details about a predictor event, such as a retraining.
   *
   * @public
   */
  PredictorEvent?: PredictorEvent | undefined;

  /**
   * The source of the data the monitor resource used during the evaluation.
   *
   * @public
   */
  MonitorDataSource?: MonitorDataSource | undefined;

  /**
   * A list of metrics Forecast calculated when monitoring a predictor. You can compare the value for each metric in the list to the metric's value in the Baseline to see how your predictor's performance is changing.
   *
   * @public
   */
  MetricResults?: MetricResult[] | undefined;

  /**
   * The number of items considered during the evaluation.
   *
   * @public
   */
  NumItemsEvaluated?: number | undefined;

  /**
   * Information about any errors that may have occurred during the monitor evaluation.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface ListMonitorEvaluationsResponse {
  /**
   * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The monitoring results and predictor events collected by the monitor resource during different windows of time.
   *
   * For information about monitoring see [Viewing Monitoring Results](https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html). For more information about retrieving monitoring results see [Viewing Monitoring Results](https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html).
   *
   * @public
   */
  PredictorMonitorEvaluations?: PredictorMonitorEvaluation[] | undefined;
}

/**
 * @public
 */
export interface ListMonitorsRequest {
  /**
   * If the result of the previous request was truncated, the response includes a `NextToken`. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of monitors to include in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An array of filters. For each filter, provide a condition and a match statement. The condition is either `IS` or `IS_NOT`, which specifies whether to include or exclude the resources that match the statement from the list. The match statement consists of a key and a value.
   *
   * **Filter properties**
   *
   * - `Condition` - The condition to apply. Valid values are `IS` and `IS_NOT`.
   * - `Key` - The name of the parameter to filter on. The only valid value is `Status`.
   * - `Value` - The value to match.
   *
   * For example, to list all monitors who's status is ACTIVE, you would specify:
   *
   * `"Filters": [ \{ "Condition": "IS", "Key": "Status", "Value": "ACTIVE" \} ]`
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Provides a summary of the monitor properties used in the ListMonitors operation. To get a complete set of properties, call the DescribeMonitor operation, and provide the listed `MonitorArn`.
 *
 * @public
 */
export interface MonitorSummary {
  /**
   * The Amazon Resource Name (ARN) of the monitor resource.
   *
   * @public
   */
  MonitorArn?: string | undefined;

  /**
   * The name of the monitor resource.
   *
   * @public
   */
  MonitorName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the predictor being monitored.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The status of the monitor. States include:
   *
   * - `ACTIVE`
   * - `ACTIVE_STOPPING`, `ACTIVE_STOPPED`
   * - `UPDATE_IN_PROGRESS`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * When the monitor resource was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the monitor resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `STOPPED` - When the resource stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the monitor creation finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListMonitorsResponse {
  /**
   * An array of objects that summarize each monitor's properties.
   *
   * @public
   */
  Monitors?: MonitorSummary[] | undefined;

  /**
   * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPredictorBacktestExportJobsRequest {
  /**
   * If the result of the previous request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of items to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An array of filters. For each filter, provide a condition and a match statement. The condition is either `IS` or `IS_NOT`, which specifies whether to include or exclude the predictor backtest export jobs that match the statement from the list. The match statement consists of a key and a value.
   *
   * **Filter properties**
   *
   * - `Condition` - The condition to apply. Valid values are `IS` and `IS_NOT`. To include the predictor backtest export jobs that match the statement, specify `IS`. To exclude matching predictor backtest export jobs, specify `IS_NOT`.
   * - `Key` - The name of the parameter to filter on. Valid values are `PredictorArn` and `Status`.
   * - `Value` - The value to match.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Provides a summary of the predictor backtest export job properties used in the ListPredictorBacktestExportJobs operation. To get a complete set of properties, call the DescribePredictorBacktestExportJob operation, and provide the listed `PredictorBacktestExportJobArn`.
 *
 * @public
 */
export interface PredictorBacktestExportJobSummary {
  /**
   * The Amazon Resource Name (ARN) of the predictor backtest export job.
   *
   * @public
   */
  PredictorBacktestExportJobArn?: string | undefined;

  /**
   * The name of the predictor backtest export job.
   *
   * @public
   */
  PredictorBacktestExportJobName?: string | undefined;

  /**
   * The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast to access the location, and an Key Management Service (KMS) key (optional).
   *
   * @public
   */
  Destination?: DataDestination | undefined;

  /**
   * The status of the predictor backtest export job. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * Information about any errors that may have occurred during the backtest export.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * When the predictor backtest export job was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListPredictorBacktestExportJobsResponse {
  /**
   * An array of objects that summarize the properties of each predictor backtest export job.
   *
   * @public
   */
  PredictorBacktestExportJobs?: PredictorBacktestExportJobSummary[] | undefined;

  /**
   * Returns this token if the response is truncated. To retrieve the next set of results, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPredictorsRequest {
  /**
   * If the result of the previous request was truncated, the response includes a `NextToken`. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of items to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An array of filters. For each filter, you provide a condition and a match statement. The condition is either `IS` or `IS_NOT`, which specifies whether to include or exclude the predictors that match the statement from the list, respectively. The match statement consists of a key and a value.
   *
   * **Filter properties**
   *
   * - `Condition` - The condition to apply. Valid values are `IS` and `IS_NOT`. To include the predictors that match the statement, specify `IS`. To exclude matching predictors, specify `IS_NOT`.
   * - `Key` - The name of the parameter to filter on. Valid values are `DatasetGroupArn` and `Status`.
   * - `Value` - The value to match.
   *
   * For example, to list all predictors whose status is ACTIVE, you would specify:
   *
   * `"Filters": [ \{ "Condition": "IS", "Key": "Status", "Value": "ACTIVE" \} ]`
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Provides a summary of the predictor properties that are used in the ListPredictors operation. To get the complete set of properties, call the DescribePredictor operation, and provide the listed `PredictorArn`.
 *
 * @public
 */
export interface PredictorSummary {
  /**
   * The ARN of the predictor.
   *
   * @public
   */
  PredictorArn?: string | undefined;

  /**
   * The name of the predictor.
   *
   * @public
   */
  PredictorName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset group that contains the data used to train the predictor.
   *
   * @public
   */
  DatasetGroupArn?: string | undefined;

  /**
   * Whether AutoPredictor was used to create the predictor.
   *
   * @public
   */
  IsAutoPredictor?: boolean | undefined;

  /**
   * A summary of the reference predictor used if the predictor was retrained or upgraded.
   *
   * @public
   */
  ReferencePredictorSummary?: ReferencePredictorSummary | undefined;

  /**
   * The status of the predictor. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   *
   * > **Note:** The `Status` of the predictor must be `ACTIVE` before you can use the predictor to create a forecast.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * If an error occurred, an informational message about the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * When the model training task was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListPredictorsResponse {
  /**
   * An array of objects that summarize each predictor's properties.
   *
   * @public
   */
  Predictors?: PredictorSummary[] | undefined;

  /**
   * If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of results, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the resource for which to list the tags.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags for the resource.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListWhatIfAnalysesRequest {
  /**
   * If the result of the previous request was truncated, the response includes a `NextToken`. To retrieve the next set of results, use the token in the next request. Tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of items to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An array of filters. For each filter, you provide a condition and a match statement. The condition is either `IS` or `IS_NOT`, which specifies whether to include or exclude the what-if analysis jobs that match the statement from the list, respectively. The match statement consists of a key and a value.
   *
   * **Filter properties**
   *
   * - `Condition` - The condition to apply. Valid values are `IS` and `IS_NOT`. To include the what-if analysis jobs that match the statement, specify `IS`. To exclude matching what-if analysis jobs, specify `IS_NOT`.
   * - `Key` - The name of the parameter to filter on. Valid values are `WhatIfAnalysisArn` and `Status`.
   * - `Value` - The value to match.
   *
   * For example, to list all jobs that export a forecast named *electricityWhatIf*, specify the following filter:
   *
   * `"Filters": [ \{ "Condition": "IS", "Key": "WhatIfAnalysisArn", "Value": "arn:aws:forecast:us-west-2:<acct-id>:forecast/electricityWhatIf" \} ]`
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Provides a summary of the what-if analysis properties used in the ListWhatIfAnalyses operation. To get the complete set of properties, call the DescribeWhatIfAnalysis operation, and provide the `WhatIfAnalysisArn` that is listed in the summary.
 *
 * @public
 */
export interface WhatIfAnalysisSummary {
  /**
   * The Amazon Resource Name (ARN) of the what-if analysis.
   *
   * @public
   */
  WhatIfAnalysisArn?: string | undefined;

  /**
   * The name of the what-if analysis.
   *
   * @public
   */
  WhatIfAnalysisName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the baseline forecast that is being used in this what-if analysis.
   *
   * @public
   */
  ForecastArn?: string | undefined;

  /**
   * The status of the what-if analysis. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * > **Note:** The `Status` of the what-if analysis must be `ACTIVE` before you can access the analysis.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * If an error occurred, an informational message about the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * When the what-if analysis was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListWhatIfAnalysesResponse {
  /**
   * An array of `WhatIfAnalysisSummary` objects that describe the matched analyses.
   *
   * @public
   */
  WhatIfAnalyses?: WhatIfAnalysisSummary[] | undefined;

  /**
   * If the response is truncated, Forecast returns this token. To retrieve the next set of results, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWhatIfForecastExportsRequest {
  /**
   * If the result of the previous request was truncated, the response includes a `NextToken`. To retrieve the next set of results, use the token in the next  request. Tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of items to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An array of filters. For each filter, you provide a condition and a match statement. The condition is either `IS` or `IS_NOT`, which specifies whether to include or exclude the what-if forecast export jobs that match the statement from the list, respectively. The match statement consists of a key and a value.
   *
   * **Filter properties**
   *
   * - `Condition` - The condition to apply. Valid values are `IS` and `IS_NOT`. To include the forecast export jobs that match the statement, specify `IS`. To exclude matching forecast export jobs, specify `IS_NOT`.
   * - `Key` - The name of the parameter to filter on. Valid values are `WhatIfForecastExportArn` and `Status`.
   * - `Value` - The value to match.
   *
   * For example, to list all jobs that export a forecast named *electricityWIFExport*, specify the following filter:
   *
   * `"Filters": [ \{ "Condition": "IS", "Key": "WhatIfForecastExportArn", "Value": "arn:aws:forecast:us-west-2:<acct-id>:forecast/electricityWIFExport" \} ]`
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Provides a summary of the what-if forecast export properties used in the ListWhatIfForecastExports operation. To get the complete set of properties, call the DescribeWhatIfForecastExport operation, and provide the `WhatIfForecastExportArn` that is listed in the summary.
 *
 * @public
 */
export interface WhatIfForecastExportSummary {
  /**
   * The Amazon Resource Name (ARN) of the what-if forecast export.
   *
   * @public
   */
  WhatIfForecastExportArn?: string | undefined;

  /**
   * An array of Amazon Resource Names (ARNs) that define the what-if forecasts included in the export.
   *
   * @public
   */
  WhatIfForecastArns?: string[] | undefined;

  /**
   * The what-if forecast export name.
   *
   * @public
   */
  WhatIfForecastExportName?: string | undefined;

  /**
   * The path to the Amazon Simple Storage Service (Amazon S3) bucket where the forecast is exported.
   *
   * @public
   */
  Destination?: DataDestination | undefined;

  /**
   * The status of the what-if forecast export. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * > **Note:** The `Status` of the what-if analysis must be `ACTIVE` before you can access the analysis.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * If an error occurred, an informational message about the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * When the what-if forecast export was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListWhatIfForecastExportsResponse {
  /**
   * An array of `WhatIfForecastExports` objects that describe the matched forecast exports.
   *
   * @public
   */
  WhatIfForecastExports?: WhatIfForecastExportSummary[] | undefined;

  /**
   * If the response is truncated, Forecast returns this token. To retrieve the next set of results, use the token in the next request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWhatIfForecastsRequest {
  /**
   * If the result of the previous request was truncated, the response includes a `NextToken`. To retrieve the next set of results, use the token in the next  request. Tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The number of items to return in the response.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An array of filters. For each filter, you provide a condition and a match statement. The condition is either `IS` or `IS_NOT`, which specifies whether to include or exclude the what-if forecast export jobs that match the statement from the list, respectively. The match statement consists of a key and a value.
   *
   * **Filter properties**
   *
   * - `Condition` - The condition to apply. Valid values are `IS` and `IS_NOT`. To include the forecast export jobs that match the statement, specify `IS`. To exclude matching forecast export jobs, specify `IS_NOT`.
   * - `Key` - The name of the parameter to filter on. Valid values are `WhatIfForecastArn` and `Status`.
   * - `Value` - The value to match.
   *
   * For example, to list all jobs that export a forecast named *electricityWhatIfForecast*, specify the following filter:
   *
   * `"Filters": [ \{ "Condition": "IS", "Key": "WhatIfForecastArn", "Value": "arn:aws:forecast:us-west-2:<acct-id>:forecast/electricityWhatIfForecast" \} ]`
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Provides a summary of the what-if forecast properties used in the ListWhatIfForecasts operation. To get the complete set of properties, call the DescribeWhatIfForecast operation, and provide the `WhatIfForecastArn` that is listed in the summary.
 *
 * @public
 */
export interface WhatIfForecastSummary {
  /**
   * The Amazon Resource Name (ARN) of the what-if forecast.
   *
   * @public
   */
  WhatIfForecastArn?: string | undefined;

  /**
   * The name of the what-if forecast.
   *
   * @public
   */
  WhatIfForecastName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the what-if analysis that contains this what-if forecast.
   *
   * @public
   */
  WhatIfAnalysisArn?: string | undefined;

  /**
   * The status of the what-if forecast. States include:
   *
   * - `ACTIVE`
   * - `CREATE_PENDING`, `CREATE_IN_PROGRESS`, `CREATE_FAILED`
   * - `CREATE_STOPPING`, `CREATE_STOPPED`
   * - `DELETE_PENDING`, `DELETE_IN_PROGRESS`, `DELETE_FAILED`
   *
   * > **Note:** The `Status` of the what-if analysis must be `ACTIVE` before you can access the analysis.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * If an error occurred, an informational message about the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * When the what-if forecast was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The last time the resource was modified. The timestamp depends on the status of the job:
   *
   * - `CREATE_PENDING` - The `CreationTime`.
   * - `CREATE_IN_PROGRESS` - The current timestamp.
   * - `CREATE_STOPPING` - The current timestamp.
   * - `CREATE_STOPPED` - When the job stopped.
   * - `ACTIVE` or `CREATE_FAILED` - When the job finished or failed.
   *
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListWhatIfForecastsResponse {
  /**
   * An array of `WhatIfForecasts` objects that describe the matched forecasts.
   *
   * @public
   */
  WhatIfForecasts?: WhatIfForecastSummary[] | undefined;

  /**
   * If the result of the previous request was truncated, the response includes a `NextToken`. To retrieve the next set of results, use the token in the next  request. Tokens expire after 24 hours.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ResumeResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the monitor resource to resume.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface StopResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the resource to stop. The supported ARNs are `DatasetImportJobArn`, `PredictorArn`, `PredictorBacktestExportJobArn`, `ForecastArn`, `ForecastExportJobArn`, `ExplainabilityArn`, and `ExplainabilityExportArn`.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the resource for which to list the tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tags to add to the resource. A tag is an array of key-value pairs.
   *
   * The following basic restrictions apply to tags:
   *
   * - Maximum number of tags per resource - 50.
   * - For each resource, each tag key must be unique, and each tag key can have only one value.
   * - Maximum key length - 128 Unicode characters in UTF-8.
   * - Maximum value length - 256 Unicode characters in UTF-8.
   * - If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.
   * - Tag keys and values are case sensitive.
   * - Do not use `aws:`, `AWS:`, or any upper or lowercase combination of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has `aws` as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of `aws` do not count against your tags per resource limit.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) that identifies the resource for which to list the tags.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The keys of the tags to be removed.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateDatasetGroupRequest {
  /**
   * The ARN of the dataset group.
   *
   * @public
   */
  DatasetGroupArn: string | undefined;

  /**
   * An array of the Amazon Resource Names (ARNs) of the datasets to add to the dataset group.
   *
   * @public
   */
  DatasetArns: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetGroupResponse {}
