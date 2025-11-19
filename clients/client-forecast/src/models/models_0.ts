// smithy-typescript generated code
import {
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
 * <p>Defines the modifications that you are making to an attribute for a what-if forecast. For example, you can use this operation to create a what-if forecast that investigates a 10% off sale on all shoes. To do this, you specify <code>"AttributeName": "shoes"</code>, <code>"Operation": "MULTIPLY"</code>, and <code>"Value": "0.90"</code>. Pair this operation with the <a>TimeSeriesCondition</a> operation within the <a>CreateWhatIfForecastRequest$TimeSeriesTransformations</a> operation to define a subset of attribute items that are modified.</p>
 * @public
 */
export interface Action {
  /**
   * <p>The related time series that you are modifying. This value is case insensitive.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The operation that is applied to the provided attribute. Operations include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ADD</code> - adds <code>Value</code> to all rows of <code>AttributeName</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUBTRACT</code> - subtracts <code>Value</code> from all rows of <code>AttributeName</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MULTIPLY</code> - multiplies all rows of <code>AttributeName</code> by <code>Value</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DIVIDE</code> - divides all rows of <code>AttributeName</code> by <code>Value</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Operation: Operation | undefined;

  /**
   * <p>The value that is applied for the chosen <code>Operation</code>.</p>
   * @public
   */
  Value: number | undefined;
}

/**
 * <p>Describes an additional dataset. This object is part of the <a>DataConfig</a> object. Forecast supports the Weather Index and Holidays additional datasets.</p>
 *          <p>
 *             <b>Weather Index</b>
 *          </p>
 *          <p>The Amazon Forecast Weather Index is a built-in dataset that incorporates historical and
 *             projected weather information into your model. The Weather Index supplements your
 *             datasets with over two years of historical weather data and up to 14 days of projected
 *             weather data. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/weather.html">Amazon Forecast
 *                 Weather Index</a>.</p>
 *          <p>
 *             <b>Holidays</b>
 *          </p>
 *          <p>Holidays is a built-in dataset that incorporates national holiday information into
 *             your model. It provides native support for the holiday calendars of 66 countries. To
 *             view the holiday calendars, refer to the <a href="http://jollyday.sourceforge.net/data.html">Jollyday</a> library. For more
 *             information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/holidays.html">Holidays
 *                 Featurization</a>.</p>
 * @public
 */
export interface AdditionalDataset {
  /**
   * <p>The name of the additional dataset. Valid names: <code>"holiday"</code> and
   *                 <code>"weather"</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   *             <b>Weather Index</b>
   *          </p>
   *          <p>To enable the Weather Index, do not specify a value for
   *             <code>Configuration</code>.</p>
   *          <p>
   *             <b>Holidays</b>
   *          </p>
   *          <p>
   *             <b>Holidays</b>
   *          </p>
   *          <p>To enable Holidays, set <code>CountryCode</code> to one of the following two-letter
   *             country codes:</p>
   *          <ul>
   *             <li>
   *                <p>"AL" - ALBANIA</p>
   *             </li>
   *             <li>
   *                <p>"AR" - ARGENTINA</p>
   *             </li>
   *             <li>
   *                <p>"AT" - AUSTRIA</p>
   *             </li>
   *             <li>
   *                <p>"AU" - AUSTRALIA</p>
   *             </li>
   *             <li>
   *                <p>"BA" - BOSNIA HERZEGOVINA</p>
   *             </li>
   *             <li>
   *                <p>"BE" - BELGIUM</p>
   *             </li>
   *             <li>
   *                <p>"BG" - BULGARIA</p>
   *             </li>
   *             <li>
   *                <p>"BO" - BOLIVIA</p>
   *             </li>
   *             <li>
   *                <p>"BR" - BRAZIL</p>
   *             </li>
   *             <li>
   *                <p>"BY" - BELARUS</p>
   *             </li>
   *             <li>
   *                <p>"CA" - CANADA</p>
   *             </li>
   *             <li>
   *                <p>"CL" - CHILE</p>
   *             </li>
   *             <li>
   *                <p>"CO" - COLOMBIA</p>
   *             </li>
   *             <li>
   *                <p>"CR" - COSTA RICA</p>
   *             </li>
   *             <li>
   *                <p>"HR" - CROATIA</p>
   *             </li>
   *             <li>
   *                <p>"CZ" - CZECH REPUBLIC</p>
   *             </li>
   *             <li>
   *                <p>"DK" - DENMARK</p>
   *             </li>
   *             <li>
   *                <p>"EC" - ECUADOR</p>
   *             </li>
   *             <li>
   *                <p>"EE" - ESTONIA</p>
   *             </li>
   *             <li>
   *                <p>"ET" - ETHIOPIA</p>
   *             </li>
   *             <li>
   *                <p>"FI" - FINLAND</p>
   *             </li>
   *             <li>
   *                <p>"FR" - FRANCE</p>
   *             </li>
   *             <li>
   *                <p>"DE" - GERMANY</p>
   *             </li>
   *             <li>
   *                <p>"GR" - GREECE</p>
   *             </li>
   *             <li>
   *                <p>"HU" - HUNGARY</p>
   *             </li>
   *             <li>
   *                <p>"IS" - ICELAND</p>
   *             </li>
   *             <li>
   *                <p>"IN" - INDIA</p>
   *             </li>
   *             <li>
   *                <p>"IE" - IRELAND</p>
   *             </li>
   *             <li>
   *                <p>"IT" - ITALY</p>
   *             </li>
   *             <li>
   *                <p>"JP" - JAPAN</p>
   *             </li>
   *             <li>
   *                <p>"KZ" - KAZAKHSTAN</p>
   *             </li>
   *             <li>
   *                <p>"KR" - KOREA</p>
   *             </li>
   *             <li>
   *                <p>"LV" - LATVIA</p>
   *             </li>
   *             <li>
   *                <p>"LI" - LIECHTENSTEIN</p>
   *             </li>
   *             <li>
   *                <p>"LT" - LITHUANIA</p>
   *             </li>
   *             <li>
   *                <p>"LU" - LUXEMBOURG</p>
   *             </li>
   *             <li>
   *                <p>"MK" - MACEDONIA</p>
   *             </li>
   *             <li>
   *                <p>"MT" - MALTA</p>
   *             </li>
   *             <li>
   *                <p>"MX" - MEXICO</p>
   *             </li>
   *             <li>
   *                <p>"MD" - MOLDOVA</p>
   *             </li>
   *             <li>
   *                <p>"ME" - MONTENEGRO</p>
   *             </li>
   *             <li>
   *                <p>"NL" - NETHERLANDS</p>
   *             </li>
   *             <li>
   *                <p>"NZ" - NEW ZEALAND</p>
   *             </li>
   *             <li>
   *                <p>"NI" - NICARAGUA</p>
   *             </li>
   *             <li>
   *                <p>"NG" - NIGERIA</p>
   *             </li>
   *             <li>
   *                <p>"NO" - NORWAY</p>
   *             </li>
   *             <li>
   *                <p>"PA" - PANAMA</p>
   *             </li>
   *             <li>
   *                <p>"PY" - PARAGUAY</p>
   *             </li>
   *             <li>
   *                <p>"PE" - PERU</p>
   *             </li>
   *             <li>
   *                <p>"PL" - POLAND</p>
   *             </li>
   *             <li>
   *                <p>"PT" - PORTUGAL</p>
   *             </li>
   *             <li>
   *                <p>"RO" - ROMANIA</p>
   *             </li>
   *             <li>
   *                <p>"RU" - RUSSIA</p>
   *             </li>
   *             <li>
   *                <p>"RS" - SERBIA</p>
   *             </li>
   *             <li>
   *                <p>"SK" - SLOVAKIA</p>
   *             </li>
   *             <li>
   *                <p>"SI" - SLOVENIA</p>
   *             </li>
   *             <li>
   *                <p>"ZA" - SOUTH AFRICA</p>
   *             </li>
   *             <li>
   *                <p>"ES" - SPAIN</p>
   *             </li>
   *             <li>
   *                <p>"SE" - SWEDEN</p>
   *             </li>
   *             <li>
   *                <p>"CH" - SWITZERLAND</p>
   *             </li>
   *             <li>
   *                <p>"UA" - UKRAINE</p>
   *             </li>
   *             <li>
   *                <p>"AE" - UNITED ARAB EMIRATES</p>
   *             </li>
   *             <li>
   *                <p>"US" - UNITED STATES</p>
   *             </li>
   *             <li>
   *                <p>"UK" - UNITED KINGDOM</p>
   *             </li>
   *             <li>
   *                <p>"UY" - URUGUAY</p>
   *             </li>
   *             <li>
   *                <p>"VE" - VENEZUELA</p>
   *             </li>
   *          </ul>
   * @public
   */
  Configuration?: Record<string, string[]> | undefined;
}

/**
 * <p>Provides information about the method used to transform attributes.</p>
 *          <p>The following is an example using the RETAIL domain:</p>
 *          <p>
 *             <code>\{</code>
 *          </p>
 *          <p>
 *             <code>"AttributeName": "demand",</code>
 *          </p>
 *          <p>
 *             <code>"Transformations": \{"aggregation": "sum", "middlefill": "zero", "backfill":
 *                 "zero"\}</code>
 *          </p>
 *          <p>
 *             <code>\}</code>
 *          </p>
 * @public
 */
export interface AttributeConfig {
  /**
   * <p>The name of the attribute as specified in the schema. Amazon Forecast supports the
   *             target field of the target time series and the related time series datasets. For
   *             example, for the RETAIL domain, the target is <code>demand</code>.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The method parameters (key-value pairs), which are a map of override parameters.
   *             Specify these parameters to override the default values. Related Time Series attributes
   *             do not accept aggregation parameters.</p>
   *          <p>The following list shows the parameters and their valid values for the "filling"
   *             featurization method for a <b>Target Time Series</b> dataset.
   *             Default values are bolded.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aggregation</code>: <b>sum</b>,
   *                         <code>avg</code>, <code>first</code>, <code>min</code>,
   *                     <code>max</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>frontfill</code>: <b>none</b>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>middlefill</code>: <b>zero</b>,
   *                         <code>nan</code> (not a number), <code>value</code>, <code>median</code>,
   *                         <code>mean</code>, <code>min</code>, <code>max</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>backfill</code>: <b>zero</b>,
   *                     <code>nan</code>, <code>value</code>, <code>median</code>, <code>mean</code>,
   *                         <code>min</code>, <code>max</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The following list shows the parameters and their valid values for a <b>Related Time Series</b> featurization method (there are no
   *             defaults):</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>middlefill</code>: <code>zero</code>, <code>value</code>,
   *                         <code>median</code>, <code>mean</code>, <code>min</code>,
   *                     <code>max</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>backfill</code>: <code>zero</code>, <code>value</code>,
   *                         <code>median</code>, <code>mean</code>, <code>min</code>,
   *                     <code>max</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>futurefill</code>: <code>zero</code>, <code>value</code>,
   *                         <code>median</code>, <code>mean</code>, <code>min</code>,
   *                     <code>max</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To set a filling method to a specific value, set the fill parameter to
   *                 <code>value</code> and define the value in a corresponding <code>_value</code>
   *             parameter. For example, to set backfilling to a value of 2, include the following:
   *                 <code>"backfill": "value"</code> and <code>"backfill_value":"2"</code>. </p>
   * @public
   */
  Transformations: Record<string, string> | undefined;
}

/**
 * <p>The data configuration for your dataset group and any additional datasets.</p>
 * @public
 */
export interface DataConfig {
  /**
   * <p>The ARN of the dataset group used to train the predictor.</p>
   * @public
   */
  DatasetGroupArn: string | undefined;

  /**
   * <p>Aggregation and filling options for attributes in your dataset group.</p>
   * @public
   */
  AttributeConfigs?: AttributeConfig[] | undefined;

  /**
   * <p>Additional built-in datasets like Holidays and the Weather Index.</p>
   * @public
   */
  AdditionalDatasets?: AdditionalDataset[] | undefined;
}

/**
 * <p>An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to
 *       access the key. You can specify this optional object in the
 *       <a>CreateDataset</a> and <a>CreatePredictor</a> requests.</p>
 * @public
 */
export interface EncryptionConfig {
  /**
   * <p>The ARN of the IAM role that Amazon Forecast can assume to access the KMS key.</p>
   *          <p>Passing a role across Amazon Web Services accounts is not allowed. If you pass a role that isn't in your
   *       account, you get an <code>InvalidInputException</code> error.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key.</p>
   * @public
   */
  KMSKeyArn: string | undefined;
}

/**
 * <p>The configuration details for the predictor monitor.</p>
 * @public
 */
export interface MonitorConfig {
  /**
   * <p>The name of the monitor resource.</p>
   * @public
   */
  MonitorName: string | undefined;
}

/**
 * <p>The optional metadata that you apply to a resource to help you categorize and organize
 *       them. Each tag consists of a key and an optional value, both of which you define.</p>
 *          <p>The following basic restrictions apply to tags:</p>
 *          <ul>
 *             <li>
 *                <p>Maximum number of tags per resource - 50.</p>
 *             </li>
 *             <li>
 *                <p>For each resource, each tag key must be unique, and each tag key can have only one
 *           value.</p>
 *             </li>
 *             <li>
 *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
 *             </li>
 *             <li>
 *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
 *             </li>
 *             <li>
 *                <p>If your tagging schema is used across multiple services and resources, remember that
 *           other services may have restrictions on allowed characters. Generally allowed characters
 *           are: letters, numbers, and spaces representable in UTF-8, and the following characters: +
 *           - = . _ : / @.</p>
 *             </li>
 *             <li>
 *                <p>Tag keys and values are case sensitive.</p>
 *             </li>
 *             <li>
 *                <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination
 *           of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag
 *           keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as
 *           its prefix but the key does not, then Forecast considers it to be a user tag and will
 *           count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do
 *           not count against your tags per resource limit.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that makes up a tag. A <code>key</code> is a general label
   *       that acts like a category for more specific tag values.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The optional part of a key-value pair that makes up a tag. A <code>value</code> acts as a
   *       descriptor within a tag category (key).</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>The time boundary Forecast uses to align and aggregate your data to match your forecast frequency. Provide the unit of time and the time boundary as a key value pair. If you
 *             don't provide a time boundary, Forecast uses a set of <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#default-time-boundaries">Default Time Boundaries</a>.
 *         </p>
 *          <p>For more information about aggregation,
 *             see <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html">Data Aggregation for Different Forecast Frequencies</a>.
 *             For more information setting a custom time boundary,
 *             see <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#specifying-time-boundary">Specifying a Time Boundary</a>.
 *
 *         </p>
 * @public
 */
export interface TimeAlignmentBoundary {
  /**
   * <p>The month to use for time alignment during aggregation. The month must be in uppercase.</p>
   * @public
   */
  Month?: Month | undefined;

  /**
   * <p>The day of the month to use for time alignment during aggregation.</p>
   * @public
   */
  DayOfMonth?: number | undefined;

  /**
   * <p>The day of week to use for time alignment during aggregation. The day must be in uppercase.</p>
   * @public
   */
  DayOfWeek?: DayOfWeek | undefined;

  /**
   * <p>The hour of day to use for time alignment during aggregation.</p>
   * @public
   */
  Hour?: number | undefined;
}

/**
 * @public
 */
export interface CreateAutoPredictorRequest {
  /**
   * <p>A unique name for the predictor</p>
   * @public
   */
  PredictorName: string | undefined;

  /**
   * <p>The number of time-steps that the model predicts. The forecast horizon is also called
   *             the prediction length.</p>
   *          <p>The maximum forecast horizon is the lesser of 500 time-steps or 1/4 of the
   *             TARGET_TIME_SERIES dataset length. If you are retraining an existing AutoPredictor, then
   *             the maximum forecast horizon is the lesser of 500 time-steps or 1/3 of the
   *             TARGET_TIME_SERIES dataset length.</p>
   *          <p>If you are upgrading to an AutoPredictor or retraining an existing AutoPredictor, you
   *             cannot update the forecast horizon parameter. You can meet this requirement by providing
   *             longer time-series in the dataset.</p>
   * @public
   */
  ForecastHorizon?: number | undefined;

  /**
   * <p>The forecast types used to train a predictor. You can specify up to five forecast
   *             types. Forecast types can be quantiles from 0.01 to 0.99, by increments of 0.01 or
   *             higher. You can also specify the mean forecast with <code>mean</code>.</p>
   * @public
   */
  ForecastTypes?: string[] | undefined;

  /**
   * <p>An array of dimension (field) names that specify how to group the generated
   *             forecast.</p>
   *          <p>For example, if you are generating forecasts for item sales across all your stores,
   *             and your dataset contains a <code>store_id</code> field, you would specify
   *                 <code>store_id</code> as a dimension to group sales forecasts for each store.</p>
   * @public
   */
  ForecastDimensions?: string[] | undefined;

  /**
   * <p>The frequency of predictions in a forecast.</p>
   *          <p>Valid intervals are an integer followed by Y (Year), M (Month), W (Week), D (Day), H (Hour), and min (Minute). For example,
   *         "1D" indicates every day and "15min" indicates every 15 minutes. You cannot specify a value that would overlap with the next larger frequency. That means, for example, you cannot specify a frequency of 60 minutes, because that is equivalent to 1 hour. The valid values for each frequency are the following:</p>
   *          <ul>
   *             <li>
   *                <p>Minute - 1-59</p>
   *             </li>
   *             <li>
   *                <p>Hour - 1-23</p>
   *             </li>
   *             <li>
   *                <p>Day - 1-6</p>
   *             </li>
   *             <li>
   *                <p>Week - 1-4</p>
   *             </li>
   *             <li>
   *                <p>Month - 1-11</p>
   *             </li>
   *             <li>
   *                <p>Year - 1</p>
   *             </li>
   *          </ul>
   *          <p>Thus, if you want every other week forecasts, specify "2W". Or, if you want quarterly forecasts, you specify "3M".</p>
   *          <p>The frequency must be greater than or equal to the TARGET_TIME_SERIES dataset
   *             frequency.</p>
   *          <p>When a RELATED_TIME_SERIES dataset is provided, the frequency must be equal to the
   *             RELATED_TIME_SERIES dataset frequency.</p>
   * @public
   */
  ForecastFrequency?: string | undefined;

  /**
   * <p>The data configuration for your dataset group and any additional datasets.</p>
   * @public
   */
  DataConfig?: DataConfig | undefined;

  /**
   * <p>An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to
   *       access the key. You can specify this optional object in the
   *       <a>CreateDataset</a> and <a>CreatePredictor</a> requests.</p>
   * @public
   */
  EncryptionConfig?: EncryptionConfig | undefined;

  /**
   * <p>The ARN of the predictor to retrain or upgrade. This parameter is only used when
   *             retraining or upgrading a predictor. When creating a new predictor, do not specify a
   *             value for this parameter.</p>
   *          <p>When upgrading or retraining a predictor, only specify values for the
   *                 <code>ReferencePredictorArn</code> and <code>PredictorName</code>. The value for
   *                 <code>PredictorName</code> must be a unique predictor name.</p>
   * @public
   */
  ReferencePredictorArn?: string | undefined;

  /**
   * <p>The accuracy metric used to optimize the predictor.</p>
   * @public
   */
  OptimizationMetric?: OptimizationMetric | undefined;

  /**
   * <p>Create an Explainability resource for the predictor.</p>
   * @public
   */
  ExplainPredictor?: boolean | undefined;

  /**
   * <p>Optional metadata to help you categorize and organize your predictors. Each tag
   *             consists of a key and an optional value, both of which you define. Tag keys and values
   *             are case sensitive.</p>
   *          <p>The following restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>For each resource, each tag key must be unique and each tag key must have one
   *                     value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum number of tags per resource: 50.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length: 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length: 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Accepted characters: all letters and numbers, spaces representable in UTF-8,
   *                     and + - = . _ : / @. If your tagging schema is used across other services and
   *                     resources, the character restrictions of those services also apply. </p>
   *             </li>
   *             <li>
   *                <p>Key prefixes cannot include any upper or lowercase combination of
   *                         <code>aws:</code> or <code>AWS:</code>. Values can have this prefix. If a
   *                     tag value has <code>aws</code> as its prefix but the key does not, Forecast
   *                     considers it to be a user tag and will count against the limit of 50 tags. Tags
   *                     with only the key prefix of <code>aws</code> do not count against your tags per
   *                     resource limit. You cannot edit or delete tag keys with this prefix.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The configuration details for predictor monitoring. Provide a name for the monitor resource to enable predictor monitoring.</p>
   *          <p>Predictor monitoring allows you to see how your predictor's performance changes over time.
   *          For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring.html">Predictor Monitoring</a>.</p>
   * @public
   */
  MonitorConfig?: MonitorConfig | undefined;

  /**
   * <p>The time boundary Forecast uses to align and aggregate any data that doesn't align with your forecast frequency. Provide the unit of time and the time boundary as a key value pair.
   *             For more information on specifying a time boundary, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#specifying-time-boundary">Specifying a Time Boundary</a>.
   *             If you
   *             don't provide a time boundary, Forecast uses a set of <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#default-time-boundaries">Default Time Boundaries</a>.</p>
   * @public
   */
  TimeAlignmentBoundary?: TimeAlignmentBoundary | undefined;
}

/**
 * @public
 */
export interface CreateAutoPredictorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor.</p>
   * @public
   */
  PredictorArn?: string | undefined;
}

/**
 * <p>An attribute of a schema, which defines a dataset field. A schema attribute is required
 *       for every field in a dataset. The <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_Schema.html">Schema</a> object contains an array of
 *         <code>SchemaAttribute</code> objects.</p>
 * @public
 */
export interface SchemaAttribute {
  /**
   * <p>The name of the dataset field.</p>
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * <p>The data type of the field.</p>
   *          <p>For a related time series dataset, other than date, item_id, and forecast dimensions attributes, all attributes should be of numerical type (integer/float).</p>
   * @public
   */
  AttributeType?: AttributeType | undefined;
}

/**
 * <p>Defines the fields of a dataset.</p>
 * @public
 */
export interface Schema {
  /**
   * <p>An array of attributes specifying the name and type of each field in a dataset.</p>
   * @public
   */
  Attributes?: SchemaAttribute[] | undefined;
}

/**
 * @public
 */
export interface CreateDatasetRequest {
  /**
   * <p>A name for the dataset.</p>
   * @public
   */
  DatasetName: string | undefined;

  /**
   * <p>The domain associated with the dataset. When you add a dataset to a dataset group, this
   *       value and the value specified for the <code>Domain</code> parameter of the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation must match.</p>
   *          <p>The <code>Domain</code> and <code>DatasetType</code> that you choose determine the fields
   *       that must be present in the training data that you import to the dataset. For example, if you
   *       choose the <code>RETAIL</code> domain and <code>TARGET_TIME_SERIES</code> as the
   *         <code>DatasetType</code>, Amazon Forecast requires <code>item_id</code>, <code>timestamp</code>,
   *       and <code>demand</code> fields to be present in your data. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Importing
   *         datasets</a>.</p>
   * @public
   */
  Domain: Domain | undefined;

  /**
   * <p>The dataset type. Valid values depend on the chosen <code>Domain</code>.</p>
   * @public
   */
  DatasetType: DatasetType | undefined;

  /**
   * <p>The frequency of data collection. This parameter is required for RELATED_TIME_SERIES
   *       datasets.</p>
   *          <p>Valid intervals are an integer followed by Y (Year), M (Month), W (Week), D (Day), H (Hour), and min (Minute). For example,
   *       "1D" indicates every day and "15min" indicates every 15 minutes. You cannot specify a value that would overlap with the next larger frequency. That means, for example, you cannot specify a frequency of 60 minutes, because that is equivalent to 1 hour. The valid values for each frequency are the following:</p>
   *          <ul>
   *             <li>
   *                <p>Minute - 1-59</p>
   *             </li>
   *             <li>
   *                <p>Hour - 1-23</p>
   *             </li>
   *             <li>
   *                <p>Day - 1-6</p>
   *             </li>
   *             <li>
   *                <p>Week - 1-4</p>
   *             </li>
   *             <li>
   *                <p>Month - 1-11</p>
   *             </li>
   *             <li>
   *                <p>Year - 1</p>
   *             </li>
   *          </ul>
   *          <p>Thus, if you want every other week forecasts, specify "2W". Or, if you want quarterly forecasts, you specify "3M".</p>
   * @public
   */
  DataFrequency?: string | undefined;

  /**
   * <p>The schema for the dataset. The schema attributes and their order must match the fields in
   *       your data. The dataset <code>Domain</code> and <code>DatasetType</code> that you choose
   *       determine the minimum required fields in your training data. For information about the
   *       required fields for a specific dataset domain and type, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-domains-ds-types.html">Dataset Domains and Dataset
   *         Types</a>.</p>
   * @public
   */
  Schema: Schema | undefined;

  /**
   * <p>An Key Management Service (KMS) key and the Identity and Access Management (IAM) role that Amazon Forecast can assume to access
   *       the key.</p>
   * @public
   */
  EncryptionConfig?: EncryptionConfig | undefined;

  /**
   * <p>The optional metadata that you apply to the dataset to help you categorize and organize
   *       them. Each tag consists of a key and an optional value, both of which you define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource - 50.</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only one
   *           value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources, remember that
   *           other services may have restrictions on allowed characters. Generally allowed characters
   *           are: letters, numbers, and spaces representable in UTF-8, and the following characters: +
   *           - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination
   *           of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag
   *           keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as
   *           its prefix but the key does not, then Forecast considers it to be a user tag and will
   *           count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do
   *           not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  DatasetArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateDatasetGroupRequest {
  /**
   * <p>A name for the dataset group.</p>
   * @public
   */
  DatasetGroupName: string | undefined;

  /**
   * <p>The domain associated with the dataset group. When you add a dataset to a dataset group,
   *       this value and the value specified for the <code>Domain</code> parameter of the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a>
   *       operation must match.</p>
   *          <p>The <code>Domain</code> and <code>DatasetType</code> that you choose determine the fields
   *       that must be present in training data that you import to a dataset. For example, if you choose
   *       the <code>RETAIL</code> domain and <code>TARGET_TIME_SERIES</code> as the
   *         <code>DatasetType</code>, Amazon Forecast requires that <code>item_id</code>,
   *         <code>timestamp</code>, and <code>demand</code> fields are present in your data. For more
   *       information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Dataset groups</a>.</p>
   * @public
   */
  Domain: Domain | undefined;

  /**
   * <p>An array of Amazon Resource Names (ARNs) of the datasets that you want to include in the
   *       dataset group.</p>
   * @public
   */
  DatasetArns?: string[] | undefined;

  /**
   * <p>The optional metadata that you apply to the dataset group to help you categorize and
   *       organize them. Each tag consists of a key and an optional value, both of which you
   *       define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource - 50.</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only one
   *           value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources, remember that
   *           other services may have restrictions on allowed characters. Generally allowed characters
   *           are: letters, numbers, and spaces representable in UTF-8, and the following characters: +
   *           - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination
   *           of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag
   *           keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as
   *           its prefix but the key does not, then Forecast considers it to be a user tag and will
   *           count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do
   *           not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateDatasetGroupResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   * @public
   */
  DatasetGroupArn?: string | undefined;
}

/**
 * <p>The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an Identity and Access Management (IAM) role that
 *       Amazon Forecast can assume to access the file(s). Optionally, includes an Key Management Service (KMS) key. This
 *       object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object.</p>
 * @public
 */
export interface S3Config {
  /**
   * <p>The path to an Amazon Simple Storage Service (Amazon S3) bucket or file(s) in an Amazon S3 bucket.</p>
   * @public
   */
  Path: string | undefined;

  /**
   * <p>The ARN of the Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3
   *       bucket or files. If you provide a value for the <code>KMSKeyArn</code> key, the role must
   *       allow access to the key.</p>
   *          <p>Passing a role across Amazon Web Services accounts is not allowed. If you pass a role that isn't in your
   *       account, you get an <code>InvalidInputException</code> error.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an Key Management Service (KMS) key.</p>
   * @public
   */
  KMSKeyArn?: string | undefined;
}

/**
 * <p>The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to
 *       access the data and, optionally, an Key Management Service (KMS) key.</p>
 * @public
 */
export interface DataSource {
  /**
   * <p>The path to the data stored in an Amazon Simple Storage Service (Amazon S3) bucket along with the
   *       credentials to access the data.</p>
   * @public
   */
  S3Config: S3Config | undefined;
}

/**
 * @public
 */
export interface CreateDatasetImportJobRequest {
  /**
   * <p>The name for the dataset import job. We recommend including the current timestamp in the
   *       name, for example, <code>20190721DatasetImport</code>. This can help you avoid getting a
   *         <code>ResourceAlreadyExistsException</code> exception.</p>
   * @public
   */
  DatasetImportJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Forecast dataset that you want to import data
   *       to.</p>
   * @public
   */
  DatasetArn: string | undefined;

  /**
   * <p>The location of the training data to import and an Identity and Access Management (IAM) role that Amazon Forecast
   *       can assume to access the data. The training data must be stored in an Amazon S3 bucket.</p>
   *          <p>If encryption is used, <code>DataSource</code> must include an Key Management Service (KMS) key and the
   *       IAM role must allow Amazon Forecast permission to access the key. The KMS key and IAM role must
   *       match those specified in the <code>EncryptionConfig</code> parameter of the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a>
   *       operation.</p>
   * @public
   */
  DataSource: DataSource | undefined;

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
   * @public
   */
  TimestampFormat?: string | undefined;

  /**
   * <p>A single time zone for every item in your dataset. This option is ideal for datasets
   *             with all timestamps within a single time zone, or if all timestamps are normalized to a
   *             single time zone. </p>
   *          <p>Refer to the <a href="http://joda-time.sourceforge.net/timezones.html">Joda-Time
   *                 API</a> for a complete list of valid time zone names.</p>
   * @public
   */
  TimeZone?: string | undefined;

  /**
   * <p>Automatically derive time zone information from the geolocation attribute. This option
   *             is ideal for datasets that contain timestamps in multiple time zones and those
   *             timestamps are expressed in local time.</p>
   * @public
   */
  UseGeolocationForTimeZone?: boolean | undefined;

  /**
   * <p>The format of the geolocation attribute. The geolocation attribute can be formatted in
   *             one of two ways:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LAT_LONG</code> - the latitude and longitude in decimal format (Example: 47.61_-122.33).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CC_POSTALCODE</code> (US Only) - the country code (US), followed by the 5-digit ZIP code (Example: US_98121).</p>
   *             </li>
   *          </ul>
   * @public
   */
  GeolocationFormat?: string | undefined;

  /**
   * <p>The optional metadata that you apply to the dataset import job to help you categorize and
   *       organize them. Each tag consists of a key and an optional value, both of which you
   *       define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource - 50.</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only one
   *           value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources, remember that
   *           other services may have restrictions on allowed characters. Generally allowed characters
   *           are: letters, numbers, and spaces representable in UTF-8, and the following characters: +
   *           - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination
   *           of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag
   *           keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as
   *           its prefix but the key does not, then Forecast considers it to be a user tag and will
   *           count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do
   *           not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The format of the imported data, CSV or PARQUET. The default value is CSV.</p>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>Specifies whether the dataset import job is a <code>FULL</code> or <code>INCREMENTAL</code> import. A <code>FULL</code> dataset import replaces all of the existing data with the newly imported data. An <code>INCREMENTAL</code> import appends the imported data to the existing data.</p>
   * @public
   */
  ImportMode?: ImportMode | undefined;
}

/**
 * @public
 */
export interface CreateDatasetImportJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset import job.</p>
   * @public
   */
  DatasetImportJobArn?: string | undefined;
}

/**
 * <p>The ExplainabilityConfig data type defines the number of time series and time points
 *             included in <a>CreateExplainability</a>.</p>
 *          <p>If you provide a predictor ARN for <code>ResourceArn</code>, you must set both
 *                 <code>TimePointGranularity</code> and <code>TimeSeriesGranularity</code> to “ALL”.
 *             When creating Predictor Explainability, Amazon Forecast considers all time series and
 *             time points.</p>
 *          <p>If you provide a forecast ARN for <code>ResourceArn</code>, you can set
 *                 <code>TimePointGranularity</code> and <code>TimeSeriesGranularity</code> to either
 *             “ALL” or “Specific”.</p>
 * @public
 */
export interface ExplainabilityConfig {
  /**
   * <p>To create an Explainability for all time series in your datasets, use
   *             <code>ALL</code>. To create an Explainability for specific time series in your datasets,
   *             use <code>SPECIFIC</code>.</p>
   *          <p>Specify time series by uploading a CSV or Parquet file to an Amazon S3 bucket and set the location
   *             within the <a>DataDestination</a> data type.</p>
   * @public
   */
  TimeSeriesGranularity: TimeSeriesGranularity | undefined;

  /**
   * <p>To create an Explainability for all time points in your forecast horizon, use
   *                 <code>ALL</code>. To create an Explainability for specific time points in your
   *             forecast horizon, use <code>SPECIFIC</code>.</p>
   *          <p>Specify time points with the <code>StartDateTime</code> and <code>EndDateTime</code>
   *             parameters within the <a>CreateExplainability</a> operation.</p>
   * @public
   */
  TimePointGranularity: TimePointGranularity | undefined;
}

/**
 * @public
 */
export interface CreateExplainabilityRequest {
  /**
   * <p>A unique name for the Explainability.</p>
   * @public
   */
  ExplainabilityName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the
   *             Explainability.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The configuration settings that define the granularity of time series and time points
   *             for the Explainability.</p>
   * @public
   */
  ExplainabilityConfig: ExplainabilityConfig | undefined;

  /**
   * <p>The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to
   *       access the data and, optionally, an Key Management Service (KMS) key.</p>
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * <p>Defines the fields of a dataset.</p>
   * @public
   */
  Schema?: Schema | undefined;

  /**
   * <p>Create an Explainability visualization that is viewable within the Amazon Web Services console.</p>
   * @public
   */
  EnableVisualization?: boolean | undefined;

  /**
   * <p>If <code>TimePointGranularity</code> is set to <code>SPECIFIC</code>, define the first
   *             point for the Explainability.</p>
   *          <p>Use the following timestamp format: yyyy-MM-ddTHH:mm:ss (example:
   *             2015-01-01T20:00:00)</p>
   * @public
   */
  StartDateTime?: string | undefined;

  /**
   * <p>If <code>TimePointGranularity</code> is set to <code>SPECIFIC</code>, define the last
   *             time point for the Explainability.</p>
   *          <p>Use the following timestamp format: yyyy-MM-ddTHH:mm:ss (example:
   *             2015-01-01T20:00:00)</p>
   * @public
   */
  EndDateTime?: string | undefined;

  /**
   * <p>Optional metadata to help you categorize and organize your resources. Each tag
   *             consists of a key and an optional value, both of which you define. Tag keys and values
   *             are case sensitive.</p>
   *          <p>The following restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>For each resource, each tag key must be unique and each tag key must have one
   *                     value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum number of tags per resource: 50.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length: 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length: 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Accepted characters: all letters and numbers, spaces representable in UTF-8,
   *                     and + - = . _ : / @. If your tagging schema is used across other services and
   *                     resources, the character restrictions of those services also apply. </p>
   *             </li>
   *             <li>
   *                <p>Key prefixes cannot include any upper or lowercase combination of
   *                         <code>aws:</code> or <code>AWS:</code>. Values can have this prefix. If a
   *                     tag value has <code>aws</code> as its prefix but the key does not, Forecast
   *                     considers it to be a user tag and will count against the limit of 50 tags. Tags
   *                     with only the key prefix of <code>aws</code> do not count against your tags per
   *                     resource limit. You cannot edit or delete tag keys with this prefix.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateExplainabilityResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Explainability.</p>
   * @public
   */
  ExplainabilityArn?: string | undefined;
}

/**
 * <p>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast
 *       to access the location, and an Key Management Service (KMS) key (optional). </p>
 * @public
 */
export interface DataDestination {
  /**
   * <p>The path to an Amazon Simple Storage Service (Amazon S3) bucket along with the credentials to access the
   *       bucket.</p>
   * @public
   */
  S3Config: S3Config | undefined;
}

/**
 * @public
 */
export interface CreateExplainabilityExportRequest {
  /**
   * <p>A unique name for the Explainability export.</p>
   * @public
   */
  ExplainabilityExportName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Explainability to export.</p>
   * @public
   */
  ExplainabilityArn: string | undefined;

  /**
   * <p>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast
   *       to access the location, and an Key Management Service (KMS) key (optional). </p>
   * @public
   */
  Destination: DataDestination | undefined;

  /**
   * <p>Optional metadata to help you categorize and organize your resources. Each tag
   *             consists of a key and an optional value, both of which you define. Tag keys and values
   *             are case sensitive.</p>
   *          <p>The following restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>For each resource, each tag key must be unique and each tag key must have one
   *                     value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum number of tags per resource: 50.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length: 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length: 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Accepted characters: all letters and numbers, spaces representable in UTF-8,
   *                     and + - = . _ : / @. If your tagging schema is used across other services and
   *                     resources, the character restrictions of those services also apply. </p>
   *             </li>
   *             <li>
   *                <p>Key prefixes cannot include any upper or lowercase combination of
   *                         <code>aws:</code> or <code>AWS:</code>. Values can have this prefix. If a
   *                     tag value has <code>aws</code> as its prefix but the key does not, Forecast
   *                     considers it to be a user tag and will count against the limit of 50 tags. Tags
   *                     with only the key prefix of <code>aws</code> do not count against your tags per
   *                     resource limit. You cannot edit or delete tag keys with this prefix.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The format of the exported data, CSV or PARQUET.</p>
   * @public
   */
  Format?: string | undefined;
}

/**
 * @public
 */
export interface CreateExplainabilityExportResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the export.</p>
   * @public
   */
  ExplainabilityExportArn?: string | undefined;
}

/**
 * <p>Details about the import file that contains the time series for which you want to create forecasts.</p>
 * @public
 */
export interface TimeSeriesIdentifiers {
  /**
   * <p>The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to
   *       access the data and, optionally, an Key Management Service (KMS) key.</p>
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * <p>Defines the fields of a dataset.</p>
   * @public
   */
  Schema?: Schema | undefined;

  /**
   * <p>The format of the data, either CSV or PARQUET.</p>
   * @public
   */
  Format?: string | undefined;
}

/**
 * <p>Defines the set of time series that are used to create the forecasts in a <code>TimeSeriesIdentifiers</code> object.</p>
 *          <p>The <code>TimeSeriesIdentifiers</code> object needs the following information:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>DataSource</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Format</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>Schema</code>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface TimeSeriesSelector {
  /**
   * <p>Details about the import file that contains the time series for which you want to create forecasts.</p>
   * @public
   */
  TimeSeriesIdentifiers?: TimeSeriesIdentifiers | undefined;
}

/**
 * @public
 */
export interface CreateForecastRequest {
  /**
   * <p>A name for the forecast.</p>
   * @public
   */
  ForecastName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the predictor to use to generate the forecast.</p>
   * @public
   */
  PredictorArn: string | undefined;

  /**
   * <p>The quantiles at which probabilistic forecasts are generated. <b>You
   *         can currently specify up to 5 quantiles per forecast</b>. Accepted values include
   *         <code>0.01 to 0.99</code> (increments of .01 only) and <code>mean</code>. The mean forecast
   *       is different from the median (0.50) when the distribution is not symmetric (for example, Beta
   *       and Negative Binomial).
   *       </p>
   *          <p>The default quantiles are the quantiles you specified during predictor creation.
   *       If you didn't specify quantiles, the default values are <code>["0.1", "0.5", "0.9"]</code>.
   *     </p>
   * @public
   */
  ForecastTypes?: string[] | undefined;

  /**
   * <p>The optional metadata that you apply to the forecast to help you categorize and organize
   *       them. Each tag consists of a key and an optional value, both of which you define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource - 50.</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only one
   *           value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources, remember that
   *           other services may have restrictions on allowed characters. Generally allowed characters
   *           are: letters, numbers, and spaces representable in UTF-8, and the following characters: +
   *           - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination
   *           of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag
   *           keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as
   *           its prefix but the key does not, then Forecast considers it to be a user tag and will
   *           count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do
   *           not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Defines the set of time series that are used to create the forecasts in a <code>TimeSeriesIdentifiers</code> object.</p>
   *          <p>The <code>TimeSeriesIdentifiers</code> object needs the following information:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DataSource</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Format</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Schema</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  TimeSeriesSelector?: TimeSeriesSelector | undefined;
}

/**
 * @public
 */
export interface CreateForecastResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the forecast.</p>
   * @public
   */
  ForecastArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateForecastExportJobRequest {
  /**
   * <p>The name for the forecast export job.</p>
   * @public
   */
  ForecastExportJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the forecast that you want to export.</p>
   * @public
   */
  ForecastArn: string | undefined;

  /**
   * <p>The location where you want to save the forecast and an Identity and Access Management (IAM) role that
   *       Amazon Forecast can assume to access the location. The forecast must be exported to an Amazon S3
   *       bucket.</p>
   *          <p>If encryption is used, <code>Destination</code> must include an Key Management Service (KMS) key. The
   *       IAM role must allow Amazon Forecast permission to access the key.</p>
   * @public
   */
  Destination: DataDestination | undefined;

  /**
   * <p>The optional metadata that you apply to the forecast export job to help you categorize and
   *       organize them. Each tag consists of a key and an optional value, both of which you
   *       define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource - 50.</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only one
   *           value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources, remember that
   *           other services may have restrictions on allowed characters. Generally allowed characters
   *           are: letters, numbers, and spaces representable in UTF-8, and the following characters: +
   *           - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination
   *           of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag
   *           keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as
   *           its prefix but the key does not, then Forecast considers it to be a user tag and will
   *           count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do
   *           not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The format of the exported data, CSV or PARQUET. The default value is CSV.</p>
   * @public
   */
  Format?: string | undefined;
}

/**
 * @public
 */
export interface CreateForecastExportJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the export job.</p>
   * @public
   */
  ForecastExportJobArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateMonitorRequest {
  /**
   * <p>The name of the monitor resource.</p>
   * @public
   */
  MonitorName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the predictor to monitor.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/forecast/latest/dg/tagging-forecast-resources.html">tags</a> to apply to the monitor resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateMonitorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitor resource.</p>
   * @public
   */
  MonitorArn?: string | undefined;
}

/**
 * <p>Parameters that define how to split a dataset into training data and testing data, and the
 *       number of iterations to perform. These parameters are specified in the predefined algorithms
 *       but you can override them in the <a>CreatePredictor</a> request.</p>
 * @public
 */
export interface EvaluationParameters {
  /**
   * <p>The number of times to split the input data. The default is 1. Valid values are 1 through
   *       5.</p>
   * @public
   */
  NumberOfBacktestWindows?: number | undefined;

  /**
   * <p>The point from the end of the dataset where you want to split the data for model training
   *       and testing (evaluation). Specify the value as the number of data points. The default is the
   *       value of the forecast horizon. <code>BackTestWindowOffset</code> can be used to mimic a past
   *       virtual forecast start date. This value must be greater than or equal to the forecast horizon
   *       and less than half of the TARGET_TIME_SERIES dataset length.</p>
   *          <p>
   *             <code>ForecastHorizon</code> <= <code>BackTestWindowOffset</code> < 1/2 *
   *       TARGET_TIME_SERIES dataset length</p>
   * @public
   */
  BackTestWindowOffset?: number | undefined;
}

/**
 * <p>Provides information about the method that featurizes (transforms) a dataset field. The
 *       method is part of the <code>FeaturizationPipeline</code> of the <a>Featurization</a> object. </p>
 *          <p>The following is an example of how you specify a <code>FeaturizationMethod</code>
 *       object.</p>
 *          <p>
 *             <code>\{</code>
 *          </p>
 *          <p>
 *             <code>"FeaturizationMethodName": "filling",</code>
 *          </p>
 *          <p>
 *             <code>"FeaturizationMethodParameters": \{"aggregation": "sum", "middlefill": "zero",
 *         "backfill": "zero"\}</code>
 *          </p>
 *          <p>
 *             <code>\}</code>
 *          </p>
 * @public
 */
export interface FeaturizationMethod {
  /**
   * <p>The name of the method. The "filling" method is the only supported method.</p>
   * @public
   */
  FeaturizationMethodName: FeaturizationMethodName | undefined;

  /**
   * <p>The method parameters (key-value pairs), which are a map of override parameters. Specify
   *       these parameters to override the default values. Related Time Series attributes do not accept
   *       aggregation parameters.</p>
   *          <p>The following list shows the parameters and their valid values for the "filling"
   *       featurization method for a <b>Target Time Series</b> dataset. Bold
   *       signifies the default value.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>aggregation</code>: <b>sum</b>, <code>avg</code>,
   *             <code>first</code>, <code>min</code>, <code>max</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>frontfill</code>: <b>none</b>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>middlefill</code>: <b>zero</b>, <code>nan</code> (not
   *           a number), <code>value</code>, <code>median</code>, <code>mean</code>, <code>min</code>,
   *             <code>max</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>backfill</code>: <b>zero</b>, <code>nan</code>,
   *             <code>value</code>, <code>median</code>, <code>mean</code>, <code>min</code>,
   *             <code>max</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>The following list shows the parameters and their valid values for a <b>Related Time Series</b> featurization method (there are no defaults):</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>middlefill</code>: <code>zero</code>, <code>value</code>, <code>median</code>,
   *             <code>mean</code>, <code>min</code>, <code>max</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>backfill</code>: <code>zero</code>, <code>value</code>, <code>median</code>,
   *             <code>mean</code>, <code>min</code>, <code>max</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>futurefill</code>: <code>zero</code>, <code>value</code>, <code>median</code>,
   *             <code>mean</code>, <code>min</code>, <code>max</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To set a filling method to a specific value, set the fill parameter to <code>value</code>
   *       and define the value in a corresponding <code>_value</code> parameter. For example, to set
   *       backfilling to a value of 2, include the following: <code>"backfill": "value"</code> and
   *         <code>"backfill_value":"2"</code>. </p>
   * @public
   */
  FeaturizationMethodParameters?: Record<string, string> | undefined;
}

/**
 * <note>
 *             <p>This object belongs to the <a>CreatePredictor</a> operation. If you created
 *         your predictor with <a>CreateAutoPredictor</a>, see <a>AttributeConfig</a>.</p>
 *          </note>
 *          <p>Provides featurization (transformation) information for a dataset field. This object is
 *       part of the <a>FeaturizationConfig</a> object.</p>
 *          <p>For example:</p>
 *          <p>
 *             <code>\{</code>
 *          </p>
 *          <p>
 *             <code>"AttributeName": "demand",</code>
 *          </p>
 *          <p>
 *             <code>FeaturizationPipeline [ \{</code>
 *          </p>
 *          <p>
 *             <code>"FeaturizationMethodName": "filling",</code>
 *          </p>
 *          <p>
 *             <code>"FeaturizationMethodParameters": \{"aggregation": "avg", "backfill":
 *       "nan"\}</code>
 *          </p>
 *          <p>
 *             <code>\} ]</code>
 *          </p>
 *          <p>
 *             <code>\}</code>
 *          </p>
 * @public
 */
export interface Featurization {
  /**
   * <p>The name of the schema attribute that specifies the data field to be featurized. Amazon
   *       Forecast supports the target field of the <code>TARGET_TIME_SERIES</code> and the
   *         <code>RELATED_TIME_SERIES</code> datasets. For example, for the <code>RETAIL</code> domain,
   *       the target is <code>demand</code>, and for the <code>CUSTOM</code> domain, the target is
   *         <code>target_value</code>. For more information, see <a>howitworks-missing-values</a>.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>An array of one <code>FeaturizationMethod</code> object that specifies the feature
   *       transformation method.</p>
   * @public
   */
  FeaturizationPipeline?: FeaturizationMethod[] | undefined;
}

/**
 * <note>
 *             <p>This object belongs to the <a>CreatePredictor</a> operation. If you created
 *         your predictor with <a>CreateAutoPredictor</a>, see <a>AttributeConfig</a>.</p>
 *          </note>
 *          <p>In a <a>CreatePredictor</a> operation, the specified algorithm trains a model
 *       using the specified dataset group. You can optionally tell the operation to modify data fields
 *       prior to training a model. These modifications are referred to as
 *         <i>featurization</i>.</p>
 *          <p>You define featurization using the <code>FeaturizationConfig</code> object. You specify an
 *       array of transformations, one for each field that you want to featurize. You then include the
 *         <code>FeaturizationConfig</code> object in your <code>CreatePredictor</code> request.
 *       Amazon Forecast applies the featurization to the <code>TARGET_TIME_SERIES</code> and
 *         <code>RELATED_TIME_SERIES</code> datasets before model training.</p>
 *          <p>You can create multiple featurization configurations. For example, you might call the
 *         <code>CreatePredictor</code> operation twice by specifying different featurization
 *       configurations.</p>
 * @public
 */
export interface FeaturizationConfig {
  /**
   * <p>The frequency of predictions in a forecast.</p>
   *          <p>Valid intervals are an integer followed by Y (Year), M (Month), W (Week), D (Day), H (Hour), and min (Minute). For example,
   *       "1D" indicates every day and "15min" indicates every 15 minutes. You cannot specify a value that would overlap with the next larger frequency. That means, for example, you cannot specify a frequency of 60 minutes, because that is equivalent to 1 hour. The valid values for each frequency are the following:</p>
   *          <ul>
   *             <li>
   *                <p>Minute - 1-59</p>
   *             </li>
   *             <li>
   *                <p>Hour - 1-23</p>
   *             </li>
   *             <li>
   *                <p>Day - 1-6</p>
   *             </li>
   *             <li>
   *                <p>Week - 1-4</p>
   *             </li>
   *             <li>
   *                <p>Month - 1-11</p>
   *             </li>
   *             <li>
   *                <p>Year - 1</p>
   *             </li>
   *          </ul>
   *          <p>Thus, if you want every other week forecasts, specify "2W". Or, if you want quarterly forecasts, you specify "3M".</p>
   *          <p>The frequency must be greater than or equal to the TARGET_TIME_SERIES dataset
   *       frequency.</p>
   *          <p>When a RELATED_TIME_SERIES dataset is provided, the frequency must be equal to the
   *       TARGET_TIME_SERIES dataset frequency.</p>
   * @public
   */
  ForecastFrequency: string | undefined;

  /**
   * <p>An array of dimension (field) names that specify how to group the generated
   *       forecast.</p>
   *          <p>For example, suppose that you are generating a forecast for item sales across all of your
   *       stores, and your dataset contains a <code>store_id</code> field. If you want the sales
   *       forecast for each item by store, you would specify <code>store_id</code> as the
   *       dimension.</p>
   *          <p>All forecast dimensions specified in the <code>TARGET_TIME_SERIES</code> dataset don't
   *       need to be specified in the <code>CreatePredictor</code> request. All forecast dimensions
   *       specified in the <code>RELATED_TIME_SERIES</code> dataset must be specified in the
   *         <code>CreatePredictor</code> request.</p>
   * @public
   */
  ForecastDimensions?: string[] | undefined;

  /**
   * <p>An array of featurization (transformation) information for the fields of a dataset.</p>
   * @public
   */
  Featurizations?: Featurization[] | undefined;
}

/**
 * <p>Specifies a categorical hyperparameter and it's range of tunable values.
 *       This object is part of the <a>ParameterRanges</a> object.</p>
 * @public
 */
export interface CategoricalParameterRange {
  /**
   * <p>The name of the categorical hyperparameter to tune.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A list of the tunable categories for the hyperparameter.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>Specifies a continuous hyperparameter and it's range of tunable values.
 *       This object is part of the <a>ParameterRanges</a> object.</p>
 * @public
 */
export interface ContinuousParameterRange {
  /**
   * <p>The name of the hyperparameter to tune.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The maximum tunable value of the hyperparameter.</p>
   * @public
   */
  MaxValue: number | undefined;

  /**
   * <p>The minimum tunable value of the hyperparameter.</p>
   * @public
   */
  MinValue: number | undefined;

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
   * @public
   */
  ScalingType?: ScalingType | undefined;
}

/**
 * <p>Specifies an integer hyperparameter and it's range of tunable values.
 *       This object is part of the <a>ParameterRanges</a> object.</p>
 * @public
 */
export interface IntegerParameterRange {
  /**
   * <p>The name of the hyperparameter to tune.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The maximum tunable value of the hyperparameter.</p>
   * @public
   */
  MaxValue: number | undefined;

  /**
   * <p>The minimum tunable value of the hyperparameter.</p>
   * @public
   */
  MinValue: number | undefined;

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
   * @public
   */
  ScalingType?: ScalingType | undefined;
}

/**
 * <p>Specifies the categorical, continuous, and integer hyperparameters, and their ranges of
 *       tunable values. The range of tunable values determines which values that a hyperparameter
 *       tuning job can choose for the specified hyperparameter. This object is part of the
 *       <a>HyperParameterTuningJobConfig</a> object.</p>
 * @public
 */
export interface ParameterRanges {
  /**
   * <p>Specifies the tunable range for each categorical hyperparameter.</p>
   * @public
   */
  CategoricalParameterRanges?: CategoricalParameterRange[] | undefined;

  /**
   * <p>Specifies the tunable range for each continuous hyperparameter.</p>
   * @public
   */
  ContinuousParameterRanges?: ContinuousParameterRange[] | undefined;

  /**
   * <p>Specifies the tunable range for each integer hyperparameter.</p>
   * @public
   */
  IntegerParameterRanges?: IntegerParameterRange[] | undefined;
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
 * @public
 */
export interface HyperParameterTuningJobConfig {
  /**
   * <p>Specifies the ranges of valid values for the hyperparameters.</p>
   * @public
   */
  ParameterRanges?: ParameterRanges | undefined;
}

/**
 * <note>
 *             <p>This object belongs to the <a>CreatePredictor</a> operation. If you created
 *         your predictor with <a>CreateAutoPredictor</a>, see <a>AdditionalDataset</a>.</p>
 *          </note>
 *          <p>Describes a supplementary feature of a dataset group. This object is part of the <a>InputDataConfig</a> object. Forecast supports the Weather Index and Holidays built-in
 *       featurizations.</p>
 *          <p>
 *             <b>Weather Index</b>
 *          </p>
 *          <p>The Amazon Forecast Weather Index is a built-in featurization that incorporates historical and
 *       projected weather information into your model. The Weather Index supplements your datasets
 *       with over two years of historical weather data and up to 14 days of projected weather data.
 *       For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/weather.html">Amazon Forecast Weather
 *         Index</a>.</p>
 *          <p>
 *             <b>Holidays</b>
 *          </p>
 *          <p>Holidays is a built-in featurization that incorporates a feature-engineered dataset of
 *       national holiday information into your model. It provides native support for the holiday
 *       calendars of 66 countries. To view the holiday calendars, refer to the <a href="http://jollyday.sourceforge.net/data.html">Jollyday</a> library. For more
 *       information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/holidays.html">Holidays Featurization</a>.</p>
 * @public
 */
export interface SupplementaryFeature {
  /**
   * <p>The name of the feature. Valid values: <code>"holiday"</code> and
   *       <code>"weather"</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>
   *             <b>Weather Index</b>
   *          </p>
   *          <p>To enable the Weather Index, set the value to <code>"true"</code>
   *          </p>
   *          <p>
   *             <b>Holidays</b>
   *          </p>
   *          <p>To enable Holidays, specify a country with one of the following two-letter country
   *       codes:</p>
   *          <ul>
   *             <li>
   *                <p>"AL" - ALBANIA</p>
   *             </li>
   *             <li>
   *                <p>"AR" - ARGENTINA</p>
   *             </li>
   *             <li>
   *                <p>"AT" - AUSTRIA</p>
   *             </li>
   *             <li>
   *                <p>"AU" - AUSTRALIA</p>
   *             </li>
   *             <li>
   *                <p>"BA" - BOSNIA HERZEGOVINA</p>
   *             </li>
   *             <li>
   *                <p>"BE" - BELGIUM</p>
   *             </li>
   *             <li>
   *                <p>"BG" - BULGARIA</p>
   *             </li>
   *             <li>
   *                <p>"BO" - BOLIVIA</p>
   *             </li>
   *             <li>
   *                <p>"BR" - BRAZIL</p>
   *             </li>
   *             <li>
   *                <p>"BY" - BELARUS</p>
   *             </li>
   *             <li>
   *                <p>"CA" - CANADA</p>
   *             </li>
   *             <li>
   *                <p>"CL" - CHILE</p>
   *             </li>
   *             <li>
   *                <p>"CO" - COLOMBIA</p>
   *             </li>
   *             <li>
   *                <p>"CR" - COSTA RICA</p>
   *             </li>
   *             <li>
   *                <p>"HR" - CROATIA</p>
   *             </li>
   *             <li>
   *                <p>"CZ" - CZECH REPUBLIC</p>
   *             </li>
   *             <li>
   *                <p>"DK" - DENMARK</p>
   *             </li>
   *             <li>
   *                <p>"EC" - ECUADOR</p>
   *             </li>
   *             <li>
   *                <p>"EE" - ESTONIA</p>
   *             </li>
   *             <li>
   *                <p>"ET" - ETHIOPIA</p>
   *             </li>
   *             <li>
   *                <p>"FI" - FINLAND</p>
   *             </li>
   *             <li>
   *                <p>"FR" - FRANCE</p>
   *             </li>
   *             <li>
   *                <p>"DE" - GERMANY</p>
   *             </li>
   *             <li>
   *                <p>"GR" - GREECE</p>
   *             </li>
   *             <li>
   *                <p>"HU" - HUNGARY</p>
   *             </li>
   *             <li>
   *                <p>"IS" - ICELAND</p>
   *             </li>
   *             <li>
   *                <p>"IN" - INDIA</p>
   *             </li>
   *             <li>
   *                <p>"IE" - IRELAND</p>
   *             </li>
   *             <li>
   *                <p>"IT" - ITALY</p>
   *             </li>
   *             <li>
   *                <p>"JP" - JAPAN</p>
   *             </li>
   *             <li>
   *                <p>"KZ" - KAZAKHSTAN</p>
   *             </li>
   *             <li>
   *                <p>"KR" - KOREA</p>
   *             </li>
   *             <li>
   *                <p>"LV" - LATVIA</p>
   *             </li>
   *             <li>
   *                <p>"LI" - LIECHTENSTEIN</p>
   *             </li>
   *             <li>
   *                <p>"LT" - LITHUANIA</p>
   *             </li>
   *             <li>
   *                <p>"LU" - LUXEMBOURG</p>
   *             </li>
   *             <li>
   *                <p>"MK" - MACEDONIA</p>
   *             </li>
   *             <li>
   *                <p>"MT" - MALTA</p>
   *             </li>
   *             <li>
   *                <p>"MX" - MEXICO</p>
   *             </li>
   *             <li>
   *                <p>"MD" - MOLDOVA</p>
   *             </li>
   *             <li>
   *                <p>"ME" - MONTENEGRO</p>
   *             </li>
   *             <li>
   *                <p>"NL" - NETHERLANDS</p>
   *             </li>
   *             <li>
   *                <p>"NZ" - NEW ZEALAND</p>
   *             </li>
   *             <li>
   *                <p>"NI" - NICARAGUA</p>
   *             </li>
   *             <li>
   *                <p>"NG" - NIGERIA</p>
   *             </li>
   *             <li>
   *                <p>"NO" - NORWAY</p>
   *             </li>
   *             <li>
   *                <p>"PA" - PANAMA</p>
   *             </li>
   *             <li>
   *                <p>"PY" - PARAGUAY</p>
   *             </li>
   *             <li>
   *                <p>"PE" - PERU</p>
   *             </li>
   *             <li>
   *                <p>"PL" - POLAND</p>
   *             </li>
   *             <li>
   *                <p>"PT" - PORTUGAL</p>
   *             </li>
   *             <li>
   *                <p>"RO" - ROMANIA</p>
   *             </li>
   *             <li>
   *                <p>"RU" - RUSSIA</p>
   *             </li>
   *             <li>
   *                <p>"RS" - SERBIA</p>
   *             </li>
   *             <li>
   *                <p>"SK" - SLOVAKIA</p>
   *             </li>
   *             <li>
   *                <p>"SI" - SLOVENIA</p>
   *             </li>
   *             <li>
   *                <p>"ZA" - SOUTH AFRICA</p>
   *             </li>
   *             <li>
   *                <p>"ES" - SPAIN</p>
   *             </li>
   *             <li>
   *                <p>"SE" - SWEDEN</p>
   *             </li>
   *             <li>
   *                <p>"CH" - SWITZERLAND</p>
   *             </li>
   *             <li>
   *                <p>"UA" - UKRAINE</p>
   *             </li>
   *             <li>
   *                <p>"AE" - UNITED ARAB EMIRATES</p>
   *             </li>
   *             <li>
   *                <p>"US" - UNITED STATES</p>
   *             </li>
   *             <li>
   *                <p>"UK" - UNITED KINGDOM</p>
   *             </li>
   *             <li>
   *                <p>"UY" - URUGUAY</p>
   *             </li>
   *             <li>
   *                <p>"VE" - VENEZUELA</p>
   *             </li>
   *          </ul>
   * @public
   */
  Value: string | undefined;
}

/**
 * <note>
 *             <p>This object belongs to the <a>CreatePredictor</a> operation. If you created
 *         your predictor with <a>CreateAutoPredictor</a>, see <a>DataConfig</a>.</p>
 *          </note>
 *          <p>The data used to train a predictor. The data includes a dataset group and any
 *       supplementary features. You specify this object in the <a>CreatePredictor</a>
 *       request.</p>
 * @public
 */
export interface InputDataConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   * @public
   */
  DatasetGroupArn: string | undefined;

  /**
   * <p>An array of supplementary features. The only supported feature is a holiday
   *       calendar.</p>
   * @public
   */
  SupplementaryFeatures?: SupplementaryFeature[] | undefined;
}

/**
 * @public
 */
export interface CreatePredictorRequest {
  /**
   * <p>A name for the predictor.</p>
   * @public
   */
  PredictorName: string | undefined;

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
   *                   <code>arn:aws:forecast:::algorithm/CNN-QR</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>arn:aws:forecast:::algorithm/Deep_AR_Plus</code>
   *                </p>
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
   * @public
   */
  AlgorithmArn?: string | undefined;

  /**
   * <p>Specifies the number of time-steps that the model is trained to predict. The forecast
   *       horizon is also called the prediction length.</p>
   *          <p>For example, if you configure a dataset for daily data collection (using the
   *         <code>DataFrequency</code> parameter of the <a>CreateDataset</a> operation) and
   *       set the forecast horizon to 10, the model returns predictions for 10 days.</p>
   *          <p>The maximum forecast horizon is the lesser of 500 time-steps or 1/3 of the
   *       TARGET_TIME_SERIES dataset length.</p>
   * @public
   */
  ForecastHorizon: number | undefined;

  /**
   * <p>Specifies the forecast types used to train a predictor. You can specify up to five
   *       forecast types. Forecast types can be quantiles from 0.01 to 0.99, by increments of 0.01 or
   *       higher. You can also specify the mean forecast with <code>mean</code>. </p>
   *          <p>The default value is <code>["0.10", "0.50", "0.9"]</code>.</p>
   * @public
   */
  ForecastTypes?: string[] | undefined;

  /**
   * <p>Whether to perform AutoML. When Amazon Forecast performs AutoML, it evaluates the algorithms it
   *       provides and chooses the best algorithm and configuration for your training dataset.</p>
   *          <p>The default value is <code>false</code>. In this case, you are required to specify an
   *       algorithm.</p>
   *          <p>Set <code>PerformAutoML</code> to <code>true</code> to have Amazon Forecast perform AutoML. This
   *       is a good option if you aren't sure which algorithm is suitable for your training data. In
   *       this case, <code>PerformHPO</code> must be false.</p>
   * @public
   */
  PerformAutoML?: boolean | undefined;

  /**
   * <note>
   *             <p> The <code>LatencyOptimized</code> AutoML override strategy is only available in private beta.
   *                 Contact Amazon Web Services Support or your account manager to learn more about access privileges.
   *             </p>
   *          </note>
   *          <p>Used to overide the default AutoML strategy, which is to optimize predictor accuracy.
   *             To apply an AutoML strategy that minimizes training time, use
   *                 <code>LatencyOptimized</code>.</p>
   *          <p>This parameter is only valid for predictors trained using AutoML.</p>
   * @public
   */
  AutoMLOverrideStrategy?: AutoMLOverrideStrategy | undefined;

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
   *          <p>The following algorithms support HPO:</p>
   *          <ul>
   *             <li>
   *                <p>DeepAR+</p>
   *             </li>
   *             <li>
   *                <p>CNN-QR</p>
   *             </li>
   *          </ul>
   * @public
   */
  PerformHPO?: boolean | undefined;

  /**
   * <p>The hyperparameters to override for model training. The hyperparameters that you can
   *       override are listed in the individual algorithms. For the list of supported algorithms, see
   *         <a>aws-forecast-choosing-recipes</a>.</p>
   * @public
   */
  TrainingParameters?: Record<string, string> | undefined;

  /**
   * <p>Used to override the default evaluation parameters of the specified algorithm. Amazon Forecast
   *       evaluates a predictor by splitting a dataset into training data and testing data. The
   *       evaluation parameters define how to perform the split and the number of iterations.</p>
   * @public
   */
  EvaluationParameters?: EvaluationParameters | undefined;

  /**
   * <p>Provides hyperparameter override values for the algorithm. If you don't provide this
   *       parameter, Amazon Forecast uses default values. The individual algorithms specify which
   *       hyperparameters support hyperparameter optimization (HPO). For more information, see <a>aws-forecast-choosing-recipes</a>.</p>
   *          <p>If you included the <code>HPOConfig</code> object, you must set <code>PerformHPO</code> to
   *       true.</p>
   * @public
   */
  HPOConfig?: HyperParameterTuningJobConfig | undefined;

  /**
   * <p>Describes the dataset group that contains the data to use to train the predictor.</p>
   * @public
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * <p>The featurization configuration.</p>
   * @public
   */
  FeaturizationConfig: FeaturizationConfig | undefined;

  /**
   * <p>An Key Management Service (KMS) key and the Identity and Access Management (IAM) role that Amazon Forecast can assume to access
   *       the key.</p>
   * @public
   */
  EncryptionConfig?: EncryptionConfig | undefined;

  /**
   * <p>The optional metadata that you apply to the predictor to help you categorize and organize
   *       them. Each tag consists of a key and an optional value, both of which you define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource - 50.</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only one
   *           value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources, remember that
   *           other services may have restrictions on allowed characters. Generally allowed characters
   *           are: letters, numbers, and spaces representable in UTF-8, and the following characters: +
   *           - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination
   *           of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag
   *           keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as
   *           its prefix but the key does not, then Forecast considers it to be a user tag and will
   *           count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do
   *           not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The accuracy metric used to optimize the predictor.</p>
   * @public
   */
  OptimizationMetric?: OptimizationMetric | undefined;
}

/**
 * @public
 */
export interface CreatePredictorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor.</p>
   * @public
   */
  PredictorArn?: string | undefined;
}

/**
 * @public
 */
export interface CreatePredictorBacktestExportJobRequest {
  /**
   * <p>The name for the backtest export job.</p>
   * @public
   */
  PredictorBacktestExportJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the predictor that you want to export.</p>
   * @public
   */
  PredictorArn: string | undefined;

  /**
   * <p>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast
   *       to access the location, and an Key Management Service (KMS) key (optional). </p>
   * @public
   */
  Destination: DataDestination | undefined;

  /**
   * <p>Optional metadata to help you categorize and organize your backtests. Each tag
   *             consists of a key and an optional value, both of which you define. Tag keys and values
   *             are case sensitive.</p>
   *          <p>The following restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>For each resource, each tag key must be unique and each tag key must have one
   *                     value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum number of tags per resource: 50.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length: 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length: 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Accepted characters: all letters and numbers, spaces representable in UTF-8,
   *                     and + - = . _ : / @. If your tagging schema is used across other services and
   *                     resources, the character restrictions of those services also apply. </p>
   *             </li>
   *             <li>
   *                <p>Key prefixes cannot include any upper or lowercase combination of
   *                         <code>aws:</code> or <code>AWS:</code>. Values can have this prefix. If a
   *                     tag value has <code>aws</code> as its prefix but the key does not, Forecast
   *                     considers it to be a user tag and will count against the limit of 50 tags. Tags
   *                     with only the key prefix of <code>aws</code> do not count against your tags per
   *                     resource limit. You cannot edit or delete tag keys with this prefix.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The format of the exported data, CSV or PARQUET. The default value is CSV.</p>
   * @public
   */
  Format?: string | undefined;
}

/**
 * @public
 */
export interface CreatePredictorBacktestExportJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor backtest export job that you want to
   *             export.</p>
   * @public
   */
  PredictorBacktestExportJobArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateWhatIfAnalysisRequest {
  /**
   * <p>The name of the what-if analysis. Each name must be unique.</p>
   * @public
   */
  WhatIfAnalysisName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the baseline forecast.</p>
   * @public
   */
  ForecastArn: string | undefined;

  /**
   * <p>Defines the set of time series that are used in the what-if analysis with a <code>TimeSeriesIdentifiers</code>
   *       object. What-if analyses are performed only for the time series in this object.</p>
   *          <p>The <code>TimeSeriesIdentifiers</code> object needs the following information:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DataSource</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Format</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Schema</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  TimeSeriesSelector?: TimeSeriesSelector | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/forecast/latest/dg/tagging-forecast-resources.html">tags</a> to apply to the what if forecast.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateWhatIfAnalysisResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the what-if analysis.</p>
   * @public
   */
  WhatIfAnalysisArn?: string | undefined;
}

/**
 * <p>A replacement dataset is a modified version of the baseline related time series that contains only the values
 *       that you want to include in a what-if forecast. The replacement dataset must contain the forecast dimensions and
 *       item identifiers in the baseline related time series as well as at least 1 changed time series. This dataset is
 *       merged with the baseline related time series to create a transformed dataset that is used for the what-if
 *       forecast.</p>
 * @public
 */
export interface TimeSeriesReplacementsDataSource {
  /**
   * <p>The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an Identity and Access Management (IAM) role that
   *       Amazon Forecast can assume to access the file(s). Optionally, includes an Key Management Service (KMS) key. This
   *       object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object.</p>
   * @public
   */
  S3Config: S3Config | undefined;

  /**
   * <p>Defines the fields of a dataset.</p>
   * @public
   */
  Schema: Schema | undefined;

  /**
   * <p>The format of the replacement data, CSV or PARQUET.</p>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>The timestamp format of the replacement data.</p>
   * @public
   */
  TimestampFormat?: string | undefined;
}

/**
 * <p>Creates a subset of items within an attribute that are modified. For example, you can use this operation to create a subset of items that cost $5 or less. To do this, you specify <code>"AttributeName": "price"</code>, <code>"AttributeValue": "5"</code>, and <code>"Condition": "LESS_THAN"</code>. Pair this operation with the <a>Action</a> operation within the <a>CreateWhatIfForecastRequest$TimeSeriesTransformations</a> operation to define how the attribute is modified.</p>
 * @public
 */
export interface TimeSeriesCondition {
  /**
   * <p>The item_id, dimension name, IM name, or timestamp that you are modifying.</p>
   * @public
   */
  AttributeName: string | undefined;

  /**
   * <p>The value that is applied for the chosen <code>Condition</code>.</p>
   * @public
   */
  AttributeValue: string | undefined;

  /**
   * <p>The condition to apply. Valid values are <code>EQUALS</code>, <code>NOT_EQUALS</code>, <code>LESS_THAN</code> and
   *       <code>GREATER_THAN</code>.</p>
   * @public
   */
  Condition: Condition | undefined;
}

/**
 * <p>A transformation function is a pair of operations that select and modify the rows in a related time series. You select the rows that you want with a condition operation and you modify the rows with a transformation operation. All conditions are joined with an AND operation, meaning that all conditions must be true for the transformation to be applied. Transformations are applied in the order that they are listed.</p>
 * @public
 */
export interface TimeSeriesTransformation {
  /**
   * <p>An array of actions that define a time series and how it is transformed. These transformations create a new
   *       time series that is used for the what-if analysis.</p>
   * @public
   */
  Action?: Action | undefined;

  /**
   * <p>An array of conditions that define which members of the related time series are transformed.</p>
   * @public
   */
  TimeSeriesConditions?: TimeSeriesCondition[] | undefined;
}

/**
 * @public
 */
export interface CreateWhatIfForecastRequest {
  /**
   * <p>The name of the what-if forecast. Names must be unique within each what-if analysis.</p>
   * @public
   */
  WhatIfForecastName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the what-if analysis.</p>
   * @public
   */
  WhatIfAnalysisArn: string | undefined;

  /**
   * <p>The transformations that are applied to the baseline time series. Each transformation contains an action and a set of conditions. An action is applied only when all conditions are met. If no conditions are provided, the action is applied to all items.</p>
   * @public
   */
  TimeSeriesTransformations?: TimeSeriesTransformation[] | undefined;

  /**
   * <p>The replacement time series dataset, which contains the rows that you want to change in the related time
   *       series dataset. A replacement time series does not need to contain all rows that are in the baseline related time
   *       series. Include only the rows (measure-dimension combinations) that you want to include in the what-if
   *       forecast.</p>
   *          <p>This dataset is merged with the
   *       original time series to create a transformed dataset that is used for the what-if analysis.</p>
   *          <p>This dataset should contain the items to modify (such as item_id or workforce_type), any relevant dimensions, the timestamp column, and at least one of the related time series columns. This file should not contain duplicate timestamps for the same time series.</p>
   *          <p>Timestamps and item_ids not included in this dataset are not included in the what-if analysis. </p>
   * @public
   */
  TimeSeriesReplacementsDataSource?: TimeSeriesReplacementsDataSource | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/forecast/latest/dg/tagging-forecast-resources.html">tags</a> to apply to the what if forecast.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateWhatIfForecastResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the what-if forecast.</p>
   * @public
   */
  WhatIfForecastArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateWhatIfForecastExportRequest {
  /**
   * <p>The name of the what-if forecast to export.</p>
   * @public
   */
  WhatIfForecastExportName: string | undefined;

  /**
   * <p>The list of what-if forecast Amazon Resource Names (ARNs) to export.</p>
   * @public
   */
  WhatIfForecastArns: string[] | undefined;

  /**
   * <p>The location where you want to save the forecast and an Identity and Access Management (IAM) role that
   *       Amazon Forecast can assume to access the location. The forecast must be exported to an Amazon S3
   *       bucket.</p>
   *          <p>If encryption is used, <code>Destination</code> must include an Key Management Service (KMS) key. The
   *       IAM role must allow Amazon Forecast permission to access the key.</p>
   * @public
   */
  Destination: DataDestination | undefined;

  /**
   * <p>A list of <a href="https://docs.aws.amazon.com/forecast/latest/dg/tagging-forecast-resources.html">tags</a> to apply to the what if forecast.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The format of the exported data, CSV or PARQUET.</p>
   * @public
   */
  Format?: string | undefined;
}

/**
 * @public
 */
export interface CreateWhatIfForecastExportResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the what-if forecast.</p>
   * @public
   */
  WhatIfForecastExportArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset to delete.</p>
   * @public
   */
  DatasetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group to delete.</p>
   * @public
   */
  DatasetGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetImportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset import job to delete.</p>
   * @public
   */
  DatasetImportJobArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteExplainabilityRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Explainability resource to delete.</p>
   * @public
   */
  ExplainabilityArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteExplainabilityExportRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Explainability export to delete. </p>
   * @public
   */
  ExplainabilityExportArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteForecastRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the forecast to delete.</p>
   * @public
   */
  ForecastArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteForecastExportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the forecast export job to delete.</p>
   * @public
   */
  ForecastExportJobArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteMonitorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitor resource to delete.</p>
   * @public
   */
  MonitorArn: string | undefined;
}

/**
 * @public
 */
export interface DeletePredictorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor to delete.</p>
   * @public
   */
  PredictorArn: string | undefined;
}

/**
 * @public
 */
export interface DeletePredictorBacktestExportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor backtest export job to delete.</p>
   * @public
   */
  PredictorBacktestExportJobArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceTreeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the parent resource to delete. All child resources
   *             of the parent resource will also be deleted.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteWhatIfAnalysisRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the what-if analysis that you want to delete.</p>
   * @public
   */
  WhatIfAnalysisArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteWhatIfForecastRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the what-if forecast that you want to delete.</p>
   * @public
   */
  WhatIfForecastArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteWhatIfForecastExportRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the what-if forecast export that you want to delete.</p>
   * @public
   */
  WhatIfForecastExportArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAutoPredictorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor.</p>
   * @public
   */
  PredictorArn: string | undefined;
}

/**
 * <p>Provides information about the Explainability resource.</p>
 * @public
 */
export interface ExplainabilityInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the Explainability.</p>
   * @public
   */
  ExplainabilityArn?: string | undefined;

  /**
   * <p>The status of the Explainability. States include: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *                         <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *                         <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Provides information about the monitor resource.</p>
 * @public
 */
export interface MonitorInfo {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitor resource.</p>
   * @public
   */
  MonitorArn?: string | undefined;

  /**
   * <p>The status of the monitor. States include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE_STOPPING</code>, <code>ACTIVE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;
}

/**
 * <p>Provides a summary of the reference predictor used when retraining or upgrading a
 *             predictor.</p>
 * @public
 */
export interface ReferencePredictorSummary {
  /**
   * <p>The ARN of the reference predictor.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Whether the reference predictor is <code>Active</code> or <code>Deleted</code>.</p>
   * @public
   */
  State?: State | undefined;
}

/**
 * @public
 */
export interface DescribeAutoPredictorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor</p>
   * @public
   */
  PredictorArn?: string | undefined;

  /**
   * <p>The name of the predictor.</p>
   * @public
   */
  PredictorName?: string | undefined;

  /**
   * <p>The number of time-steps that the model predicts. The forecast horizon is also called
   *             the prediction length.</p>
   * @public
   */
  ForecastHorizon?: number | undefined;

  /**
   * <p>The forecast types used during predictor training. Default value is
   *             ["0.1","0.5","0.9"].</p>
   * @public
   */
  ForecastTypes?: string[] | undefined;

  /**
   * <p>The frequency of predictions in a forecast.</p>
   *          <p>Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30
   *             minutes), 15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute).
   *             For example, "Y" indicates every year and "5min" indicates every five minutes.</p>
   * @public
   */
  ForecastFrequency?: string | undefined;

  /**
   * <p>An array of dimension (field) names that specify the attributes used to group your
   *             time series.</p>
   * @public
   */
  ForecastDimensions?: string[] | undefined;

  /**
   * <p>An array of the ARNs of the dataset import jobs used to import training data for the
   *             predictor.</p>
   * @public
   */
  DatasetImportJobArns?: string[] | undefined;

  /**
   * <p>The data configuration for your dataset group and any additional datasets.</p>
   * @public
   */
  DataConfig?: DataConfig | undefined;

  /**
   * <p>An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to
   *       access the key. You can specify this optional object in the
   *       <a>CreateDataset</a> and <a>CreatePredictor</a> requests.</p>
   * @public
   */
  EncryptionConfig?: EncryptionConfig | undefined;

  /**
   * <p>The ARN and state of the reference predictor. This parameter is only valid for
   *             retrained or upgraded predictors.</p>
   * @public
   */
  ReferencePredictorSummary?: ReferencePredictorSummary | undefined;

  /**
   * <p>The estimated time remaining in minutes for the predictor training job to
   *             complete.</p>
   * @public
   */
  EstimatedTimeRemainingInMinutes?: number | undefined;

  /**
   * <p>The status of the predictor. States include: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *                         <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *                         <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>In the event of an error, a message detailing the cause of the error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The timestamp of the CreateAutoPredictor request.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the
   *             job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *                     failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * <p>The accuracy metric used to optimize the predictor.</p>
   * @public
   */
  OptimizationMetric?: OptimizationMetric | undefined;

  /**
   * <p>Provides the status and ARN of the Predictor Explainability.</p>
   * @public
   */
  ExplainabilityInfo?: ExplainabilityInfo | undefined;

  /**
   * <p>A  object with the Amazon Resource Name (ARN) and status of the monitor resource.</p>
   * @public
   */
  MonitorInfo?: MonitorInfo | undefined;

  /**
   * <p>The time boundary Forecast uses when aggregating data.</p>
   * @public
   */
  TimeAlignmentBoundary?: TimeAlignmentBoundary | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  DatasetArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The domain associated with the dataset.</p>
   * @public
   */
  Domain?: Domain | undefined;

  /**
   * <p>The dataset type.</p>
   * @public
   */
  DatasetType?: DatasetType | undefined;

  /**
   * <p>The frequency of data collection.</p>
   *          <p>Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30 minutes),
   *       15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute). For example,
   *       "M" indicates every month and "30min" indicates every 30 minutes.</p>
   * @public
   */
  DataFrequency?: string | undefined;

  /**
   * <p>An array of <code>SchemaAttribute</code> objects that specify the dataset fields. Each
   *         <code>SchemaAttribute</code> specifies the name and data type of a field.</p>
   * @public
   */
  Schema?: Schema | undefined;

  /**
   * <p>The Key Management Service (KMS) key and the Identity and Access Management (IAM) role that Amazon Forecast can assume to access
   *       the key.</p>
   * @public
   */
  EncryptionConfig?: EncryptionConfig | undefined;

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
   *       the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation and reflect the status of the dataset import job.
   *       For example, when the import job status is <code>CREATE_IN_PROGRESS</code>, the status of the
   *       dataset is <code>UPDATE_IN_PROGRESS</code>.</p>
   *          <note>
   *             <p>The <code>Status</code> of the dataset must be <code>ACTIVE</code> before you can import
   *         training data.</p>
   *          </note>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>When the dataset was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>When you create a dataset, <code>LastModificationTime</code> is the same as
   *         <code>CreationTime</code>. While data is being imported to the dataset,
   *         <code>LastModificationTime</code> is the current time of the <code>DescribeDataset</code>
   *       call. After a <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>
   *       operation has finished, <code>LastModificationTime</code> is when the import job completed or
   *       failed.</p>
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   * @public
   */
  DatasetGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetGroupResponse {
  /**
   * <p>The name of the dataset group.</p>
   * @public
   */
  DatasetGroupName?: string | undefined;

  /**
   * <p>The ARN of the dataset group.</p>
   * @public
   */
  DatasetGroupArn?: string | undefined;

  /**
   * <p>An array of Amazon Resource Names (ARNs) of the datasets contained in the dataset
   *       group.</p>
   * @public
   */
  DatasetArns?: string[] | undefined;

  /**
   * <p>The domain associated with the dataset group.</p>
   * @public
   */
  Domain?: Domain | undefined;

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
   *          <p>The <code>UPDATE</code> states apply when you call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a>
   *       operation.</p>
   *          <note>
   *             <p>The <code>Status</code> of the dataset group must be <code>ACTIVE</code> before you can
   *         use the dataset group to create a predictor.</p>
   *          </note>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>When the dataset group was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>When the dataset group was created or last updated from a call to the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation. While the dataset group is being updated,
   *         <code>LastModificationTime</code> is the current time of the
   *         <code>DescribeDatasetGroup</code> call.</p>
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetImportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset import job.</p>
   * @public
   */
  DatasetImportJobArn: string | undefined;
}

/**
 * <p>Provides statistics for each data field imported into to an Amazon Forecast dataset with
 *       the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation.</p>
 * @public
 */
export interface Statistics {
  /**
   * <p>The number of values in the field. If the response value is -1, refer to
   *         <code>CountLong</code>.</p>
   * @public
   */
  Count?: number | undefined;

  /**
   * <p>The number of distinct values in the field. If the response value is -1, refer to
   *         <code>CountDistinctLong</code>.</p>
   * @public
   */
  CountDistinct?: number | undefined;

  /**
   * <p>The number of null values in the field. If the response value is -1, refer to
   *         <code>CountNullLong</code>.</p>
   * @public
   */
  CountNull?: number | undefined;

  /**
   * <p>The number of NAN (not a number) values in the field. If the response value is -1, refer
   *       to <code>CountNanLong</code>.</p>
   * @public
   */
  CountNan?: number | undefined;

  /**
   * <p>For a numeric field, the minimum value in the field.</p>
   * @public
   */
  Min?: string | undefined;

  /**
   * <p>For a numeric field, the maximum value in the field.</p>
   * @public
   */
  Max?: string | undefined;

  /**
   * <p>For a numeric field, the average value in the field.</p>
   * @public
   */
  Avg?: number | undefined;

  /**
   * <p>For a numeric field, the standard deviation.</p>
   * @public
   */
  Stddev?: number | undefined;

  /**
   * <p>The number of values in the field. <code>CountLong</code> is used instead of
   *         <code>Count</code> if the value is greater than 2,147,483,647.</p>
   * @public
   */
  CountLong?: number | undefined;

  /**
   * <p>The number of distinct values in the field. <code>CountDistinctLong</code> is used instead
   *       of <code>CountDistinct</code> if the value is greater than 2,147,483,647.</p>
   * @public
   */
  CountDistinctLong?: number | undefined;

  /**
   * <p>The number of null values in the field. <code>CountNullLong</code> is used instead of
   *         <code>CountNull</code> if the value is greater than 2,147,483,647.</p>
   * @public
   */
  CountNullLong?: number | undefined;

  /**
   * <p>The number of NAN (not a number) values in the field. <code>CountNanLong</code> is used
   *       instead of <code>CountNan</code> if the value is greater than 2,147,483,647.</p>
   * @public
   */
  CountNanLong?: number | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetImportJobResponse {
  /**
   * <p>The name of the dataset import job.</p>
   * @public
   */
  DatasetImportJobName?: string | undefined;

  /**
   * <p>The ARN of the dataset import job.</p>
   * @public
   */
  DatasetImportJobArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that the training data was imported
   *       to.</p>
   * @public
   */
  DatasetArn?: string | undefined;

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
   * @public
   */
  TimestampFormat?: string | undefined;

  /**
   * <p>The single time zone applied to every item in the dataset</p>
   * @public
   */
  TimeZone?: string | undefined;

  /**
   * <p>Whether <code>TimeZone</code> is automatically derived from the geolocation
   *             attribute.</p>
   * @public
   */
  UseGeolocationForTimeZone?: boolean | undefined;

  /**
   * <p>The format of the geolocation attribute. Valid Values:<code>"LAT_LONG"</code> and
   *                 <code>"CC_POSTALCODE"</code>.</p>
   * @public
   */
  GeolocationFormat?: string | undefined;

  /**
   * <p>The location of the training data to import and an Identity and Access Management (IAM) role that Amazon Forecast
   *       can assume to access the data.</p>
   *          <p>If encryption is used, <code>DataSource</code> includes an Key Management Service (KMS) key.</p>
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * <p>The estimated time remaining in minutes for the dataset import job to complete.</p>
   * @public
   */
  EstimatedTimeRemainingInMinutes?: number | undefined;

  /**
   * <p>Statistical information about each field in the input data.</p>
   * @public
   */
  FieldStatistics?: Record<string, Statistics> | undefined;

  /**
   * <p>The size of the dataset in gigabytes (GB) after the import job has finished.</p>
   * @public
   */
  DataSize?: number | undefined;

  /**
   * <p>The status of the dataset import job. States include:</p>
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
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>When the dataset import job was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the
   *       job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *           failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * <p>The format of the imported data, CSV or PARQUET.</p>
   * @public
   */
  Format?: string | undefined;

  /**
   * <p>The import mode of the dataset import job, FULL or INCREMENTAL.</p>
   * @public
   */
  ImportMode?: ImportMode | undefined;
}

/**
 * @public
 */
export interface DescribeExplainabilityRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Explaianability to describe.</p>
   * @public
   */
  ExplainabilityArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeExplainabilityResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Explainability.</p>
   * @public
   */
  ExplainabilityArn?: string | undefined;

  /**
   * <p>The name of the Explainability.</p>
   * @public
   */
  ExplainabilityName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the
   *             Explainability resource.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The configuration settings that define the granularity of time series and time points
   *             for the Explainability.</p>
   * @public
   */
  ExplainabilityConfig?: ExplainabilityConfig | undefined;

  /**
   * <p>Whether the visualization was enabled for the Explainability resource.</p>
   * @public
   */
  EnableVisualization?: boolean | undefined;

  /**
   * <p>The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to
   *       access the data and, optionally, an Key Management Service (KMS) key.</p>
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * <p>Defines the fields of a dataset.</p>
   * @public
   */
  Schema?: Schema | undefined;

  /**
   * <p>If <code>TimePointGranularity</code> is set to <code>SPECIFIC</code>, the first time
   *             point in the Explainability.</p>
   * @public
   */
  StartDateTime?: string | undefined;

  /**
   * <p>If <code>TimePointGranularity</code> is set to <code>SPECIFIC</code>, the last time
   *             point in the Explainability.</p>
   * @public
   */
  EndDateTime?: string | undefined;

  /**
   * <p>The estimated time remaining in minutes for the <a>CreateExplainability</a>
   *             job to complete.</p>
   * @public
   */
  EstimatedTimeRemainingInMinutes?: number | undefined;

  /**
   * <p>If an error occurred, a message about the error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The status of the Explainability resource. States include: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *                         <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *                         <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>When the Explainability resource was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the
   *             job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *                     failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeExplainabilityExportRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Explainability export.</p>
   * @public
   */
  ExplainabilityExportArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeExplainabilityExportResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Explainability export.</p>
   * @public
   */
  ExplainabilityExportArn?: string | undefined;

  /**
   * <p>The name of the Explainability export.</p>
   * @public
   */
  ExplainabilityExportName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Explainability export.</p>
   * @public
   */
  ExplainabilityArn?: string | undefined;

  /**
   * <p>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast
   *       to access the location, and an Key Management Service (KMS) key (optional). </p>
   * @public
   */
  Destination?: DataDestination | undefined;

  /**
   * <p>Information about any errors that occurred during the export.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The status of the Explainability export. States include: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *                         <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *                         <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>When the Explainability export was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the
   *             job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *                     failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * <p>The format of the exported data, CSV or PARQUET.</p>
   * @public
   */
  Format?: string | undefined;
}

/**
 * @public
 */
export interface DescribeForecastRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the forecast.</p>
   * @public
   */
  ForecastArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeForecastResponse {
  /**
   * <p>The forecast ARN as specified in the request.</p>
   * @public
   */
  ForecastArn?: string | undefined;

  /**
   * <p>The name of the forecast.</p>
   * @public
   */
  ForecastName?: string | undefined;

  /**
   * <p>The quantiles at which probabilistic forecasts were generated.</p>
   * @public
   */
  ForecastTypes?: string[] | undefined;

  /**
   * <p>The ARN of the predictor used to generate the forecast.</p>
   * @public
   */
  PredictorArn?: string | undefined;

  /**
   * <p>The ARN of the dataset group that provided the data used to train the predictor.</p>
   * @public
   */
  DatasetGroupArn?: string | undefined;

  /**
   * <p>The estimated time remaining in minutes for the forecast job to complete.</p>
   * @public
   */
  EstimatedTimeRemainingInMinutes?: number | undefined;

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
   *           <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *           <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query
   *         or export the forecast.</p>
   *          </note>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>When the forecast creation task was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *           failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * <p>The time series to include in the forecast.</p>
   * @public
   */
  TimeSeriesSelector?: TimeSeriesSelector | undefined;
}

/**
 * @public
 */
export interface DescribeForecastExportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the forecast export job.</p>
   * @public
   */
  ForecastExportJobArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeForecastExportJobResponse {
  /**
   * <p>The ARN of the forecast export job.</p>
   * @public
   */
  ForecastExportJobArn?: string | undefined;

  /**
   * <p>The name of the forecast export job.</p>
   * @public
   */
  ForecastExportJobName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the exported forecast.</p>
   * @public
   */
  ForecastArn?: string | undefined;

  /**
   * <p>The path to the Amazon Simple Storage Service (Amazon S3) bucket where the forecast is exported.</p>
   * @public
   */
  Destination?: DataDestination | undefined;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   * @public
   */
  Message?: string | undefined;

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
   *           <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *           <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before
   *         you can access the forecast in your S3 bucket.</p>
   *          </note>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>When the forecast export job was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *           failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * <p>The format of the exported data, CSV or PARQUET.</p>
   * @public
   */
  Format?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMonitorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitor resource to describe.</p>
   * @public
   */
  MonitorArn: string | undefined;
}

/**
 * <p>An individual metric that you can use for comparison as you evaluate your monitoring results.</p>
 * @public
 */
export interface BaselineMetric {
  /**
   * <p>The name of the metric.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The value for the metric.</p>
   * @public
   */
  Value?: number | undefined;
}

/**
 * <p>Metrics you can use as a baseline for comparison purposes. Use these metrics when you interpret monitoring results for an auto predictor.</p>
 * @public
 */
export interface PredictorBaseline {
  /**
   * <p>The initial <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">accuracy metrics</a> for the predictor. Use these metrics as a baseline for comparison purposes as you
   *          use your predictor and the metrics change.</p>
   * @public
   */
  BaselineMetrics?: BaselineMetric[] | undefined;
}

/**
 * <p>Metrics you can use as a baseline for comparison purposes. Use these metrics when you interpret monitoring results for an auto predictor.</p>
 * @public
 */
export interface Baseline {
  /**
   * <p>The initial <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">accuracy metrics</a> for the predictor you are monitoring. Use these metrics as a baseline for comparison purposes as you
   *          use your predictor and the metrics change.</p>
   * @public
   */
  PredictorBaseline?: PredictorBaseline | undefined;
}

/**
 * @public
 */
export interface DescribeMonitorResponse {
  /**
   * <p>The name of the monitor.</p>
   * @public
   */
  MonitorName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitor resource described.</p>
   * @public
   */
  MonitorArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the auto predictor being monitored.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The status of the monitor resource.</p>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>The timestamp of the latest evaluation completed by the monitor.</p>
   * @public
   */
  LastEvaluationTime?: Date | undefined;

  /**
   * <p>The state of the monitor's latest evaluation.</p>
   * @public
   */
  LastEvaluationState?: string | undefined;

  /**
   * <p>Metrics you can use as a baseline for comparison purposes. Use these values you interpret monitoring results for an auto predictor.</p>
   * @public
   */
  Baseline?: Baseline | undefined;

  /**
   * <p>An error message, if any, for the monitor.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The timestamp for when the monitor resource was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The timestamp of the latest modification to the monitor.</p>
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * <p>The estimated number of minutes remaining before the monitor resource finishes its current evaluation.</p>
   * @public
   */
  EstimatedEvaluationTimeRemainingInMinutes?: number | undefined;
}

/**
 * @public
 */
export interface DescribePredictorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor that you want information about.</p>
   * @public
   */
  PredictorArn: string | undefined;
}

/**
 * <p>The status, start time, and end time of a backtest, as well as a failure reason if
 *       applicable.</p>
 * @public
 */
export interface TestWindowSummary {
  /**
   * <p>The time at which the test began.</p>
   * @public
   */
  TestWindowStart?: Date | undefined;

  /**
   * <p>The time at which the test ended.</p>
   * @public
   */
  TestWindowEnd?: Date | undefined;

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
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>If the test failed, the reason why it failed.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * <p>The algorithm used to perform a backtest and the status of those tests.</p>
 * @public
 */
export interface PredictorExecution {
  /**
   * <p>The ARN of the algorithm used to test the predictor.</p>
   * @public
   */
  AlgorithmArn?: string | undefined;

  /**
   * <p>An array of test windows used to evaluate the algorithm. The
   *         <code>NumberOfBacktestWindows</code> from the
   *       object determines the number of windows in the array.</p>
   * @public
   */
  TestWindows?: TestWindowSummary[] | undefined;
}

/**
 * <p>Contains details on the backtests performed to evaluate the accuracy of the predictor. The
 *       tests are returned in descending order of accuracy, with the most accurate backtest appearing
 *       first. You specify the number of backtests to perform when you call the  operation.</p>
 * @public
 */
export interface PredictorExecutionDetails {
  /**
   * <p>An array of the backtests performed to evaluate the accuracy of the predictor against a
   *       particular algorithm. The <code>NumberOfBacktestWindows</code> from the  object determines the number of windows in the
   *       array.</p>
   * @public
   */
  PredictorExecutions?: PredictorExecution[] | undefined;
}

/**
 * @public
 */
export interface DescribePredictorResponse {
  /**
   * <p>The ARN of the predictor.</p>
   * @public
   */
  PredictorArn?: string | undefined;

  /**
   * <p>The name of the predictor.</p>
   * @public
   */
  PredictorName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm used for model training.</p>
   * @public
   */
  AlgorithmArn?: string | undefined;

  /**
   * <p>When <code>PerformAutoML</code> is specified, the ARN of the chosen algorithm.</p>
   * @public
   */
  AutoMLAlgorithmArns?: string[] | undefined;

  /**
   * <p>The number of time-steps of the forecast. The forecast horizon is also called the
   *       prediction length.</p>
   * @public
   */
  ForecastHorizon?: number | undefined;

  /**
   * <p>The forecast types used during predictor training. Default value is
   *         <code>["0.1","0.5","0.9"]</code>
   *          </p>
   * @public
   */
  ForecastTypes?: string[] | undefined;

  /**
   * <p>Whether the predictor is set to perform AutoML.</p>
   * @public
   */
  PerformAutoML?: boolean | undefined;

  /**
   * <note>
   *             <p> The <code>LatencyOptimized</code> AutoML override strategy is only available in private beta.
   *                 Contact Amazon Web Services Support or your account manager to learn more about access privileges.
   *             </p>
   *          </note>
   *          <p>The AutoML strategy used to train the predictor. Unless <code>LatencyOptimized</code>
   *             is specified, the AutoML strategy optimizes predictor accuracy.</p>
   *          <p>This parameter is only valid for predictors trained using AutoML.</p>
   * @public
   */
  AutoMLOverrideStrategy?: AutoMLOverrideStrategy | undefined;

  /**
   * <p>Whether the predictor is set to perform hyperparameter optimization (HPO).</p>
   * @public
   */
  PerformHPO?: boolean | undefined;

  /**
   * <p>The default training parameters or overrides selected during model training. When running
   *       AutoML or choosing HPO with CNN-QR or DeepAR+, the optimized values for the chosen
   *       hyperparameters are returned. For more information, see <a>aws-forecast-choosing-recipes</a>.</p>
   * @public
   */
  TrainingParameters?: Record<string, string> | undefined;

  /**
   * <p>Used to override the default evaluation parameters of the specified algorithm. Amazon Forecast
   *       evaluates a predictor by splitting a dataset into training data and testing data. The
   *       evaluation parameters define how to perform the split and the number of iterations.</p>
   * @public
   */
  EvaluationParameters?: EvaluationParameters | undefined;

  /**
   * <p>The hyperparameter override values for the algorithm.</p>
   * @public
   */
  HPOConfig?: HyperParameterTuningJobConfig | undefined;

  /**
   * <p>Describes the dataset group that contains the data to use to train the predictor.</p>
   * @public
   */
  InputDataConfig?: InputDataConfig | undefined;

  /**
   * <p>The featurization configuration.</p>
   * @public
   */
  FeaturizationConfig?: FeaturizationConfig | undefined;

  /**
   * <p>An Key Management Service (KMS) key and the Identity and Access Management (IAM) role that Amazon Forecast can assume to access
   *       the key.</p>
   * @public
   */
  EncryptionConfig?: EncryptionConfig | undefined;

  /**
   * <p>Details on the the status and results of the backtests performed to evaluate the accuracy
   *       of the predictor. You specify the number of backtests to perform when you call the  operation.</p>
   * @public
   */
  PredictorExecutionDetails?: PredictorExecutionDetails | undefined;

  /**
   * <p>The estimated time remaining in minutes for the predictor training job to complete.</p>
   * @public
   */
  EstimatedTimeRemainingInMinutes?: number | undefined;

  /**
   * <p>Whether the predictor was created with <a>CreateAutoPredictor</a>.</p>
   * @public
   */
  IsAutoPredictor?: boolean | undefined;

  /**
   * <p>An array of the ARNs of the dataset import jobs used to import training data for the
   *       predictor.</p>
   * @public
   */
  DatasetImportJobArns?: string[] | undefined;

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
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Status</code> of the predictor must be <code>ACTIVE</code> before you can use
   *         the predictor to create a forecast.</p>
   *          </note>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>When the model training task was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the
   *       job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *           failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * <p>The accuracy metric used to optimize the predictor.</p>
   * @public
   */
  OptimizationMetric?: OptimizationMetric | undefined;
}

/**
 * @public
 */
export interface DescribePredictorBacktestExportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor backtest export job.</p>
   * @public
   */
  PredictorBacktestExportJobArn: string | undefined;
}

/**
 * @public
 */
export interface DescribePredictorBacktestExportJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor backtest export job.</p>
   * @public
   */
  PredictorBacktestExportJobArn?: string | undefined;

  /**
   * <p>The name of the predictor backtest export job.</p>
   * @public
   */
  PredictorBacktestExportJobName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the predictor.</p>
   * @public
   */
  PredictorArn?: string | undefined;

  /**
   * <p>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast
   *       to access the location, and an Key Management Service (KMS) key (optional). </p>
   * @public
   */
  Destination?: DataDestination | undefined;

  /**
   * <p>Information about any errors that may have occurred during the backtest export.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The status of the predictor backtest export job. States include: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *                         <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *                         <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>When the predictor backtest export job was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the
   *             job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *                     failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * <p>The format of the exported data, CSV or PARQUET.</p>
   * @public
   */
  Format?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWhatIfAnalysisRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the what-if analysis that you are interested in.</p>
   * @public
   */
  WhatIfAnalysisArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeWhatIfAnalysisResponse {
  /**
   * <p>The name of the what-if analysis.</p>
   * @public
   */
  WhatIfAnalysisName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the what-if analysis.</p>
   * @public
   */
  WhatIfAnalysisArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the what-if forecast.</p>
   * @public
   */
  ForecastArn?: string | undefined;

  /**
   * <p>The approximate time remaining to complete the what-if analysis, in minutes.</p>
   * @public
   */
  EstimatedTimeRemainingInMinutes?: number | undefined;

  /**
   * <p>The status of the what-if analysis. States include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *           <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *           <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Status</code> of the what-if analysis must be <code>ACTIVE</code> before you can access the
   *         analysis.</p>
   *          </note>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>When the what-if analysis was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *           failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * <p>Defines the set of time series that are used to create the forecasts in a <code>TimeSeriesIdentifiers</code> object.</p>
   *          <p>The <code>TimeSeriesIdentifiers</code> object needs the following information:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DataSource</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Format</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Schema</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  TimeSeriesSelector?: TimeSeriesSelector | undefined;
}

/**
 * @public
 */
export interface DescribeWhatIfForecastRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the what-if forecast that you are interested in.</p>
   * @public
   */
  WhatIfForecastArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeWhatIfForecastResponse {
  /**
   * <p>The name of the what-if forecast.</p>
   * @public
   */
  WhatIfForecastName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the what-if forecast.</p>
   * @public
   */
  WhatIfForecastArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the what-if analysis that contains this forecast.</p>
   * @public
   */
  WhatIfAnalysisArn?: string | undefined;

  /**
   * <p>The approximate time remaining to complete the what-if forecast, in minutes.</p>
   * @public
   */
  EstimatedTimeRemainingInMinutes?: number | undefined;

  /**
   * <p>The status of the what-if forecast. States include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *           <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *           <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Status</code> of the what-if forecast must be <code>ACTIVE</code> before you can access the
   *         forecast.</p>
   *          </note>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>When the what-if forecast was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *           failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * <p>An array of <code>Action</code> and <code>TimeSeriesConditions</code> elements that describe what transformations were applied to which time series.</p>
   * @public
   */
  TimeSeriesTransformations?: TimeSeriesTransformation[] | undefined;

  /**
   * <p>An array of <code>S3Config</code>, <code>Schema</code>, and <code>Format</code> elements that describe the replacement time series.</p>
   * @public
   */
  TimeSeriesReplacementsDataSource?: TimeSeriesReplacementsDataSource | undefined;

  /**
   * <p>The quantiles at which probabilistic forecasts are generated. You can specify up to five quantiles per what-if
   *       forecast in the <a>CreateWhatIfForecast</a> operation. If you didn't specify quantiles, the default
   *       values are <code>["0.1", "0.5", "0.9"]</code>. </p>
   * @public
   */
  ForecastTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeWhatIfForecastExportRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the what-if forecast export that you are interested in.</p>
   * @public
   */
  WhatIfForecastExportArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeWhatIfForecastExportResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the what-if forecast export.</p>
   * @public
   */
  WhatIfForecastExportArn?: string | undefined;

  /**
   * <p>The name of the what-if forecast export.</p>
   * @public
   */
  WhatIfForecastExportName?: string | undefined;

  /**
   * <p>An array of Amazon Resource Names (ARNs) that represent all of the what-if forecasts exported in this
   *       resource.</p>
   * @public
   */
  WhatIfForecastArns?: string[] | undefined;

  /**
   * <p>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast
   *       to access the location, and an Key Management Service (KMS) key (optional). </p>
   * @public
   */
  Destination?: DataDestination | undefined;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The status of the what-if forecast. States include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *           <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *           <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Status</code> of the what-if forecast export must be <code>ACTIVE</code> before you can access the
   *         forecast export.</p>
   *          </note>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>When the what-if forecast export was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The approximate time remaining to complete the what-if forecast export, in minutes.</p>
   * @public
   */
  EstimatedTimeRemainingInMinutes?: number | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *           failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * <p>The format of the exported data, CSV or PARQUET.</p>
   * @public
   */
  Format?: string | undefined;
}

/**
 * @public
 */
export interface GetAccuracyMetricsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor to get metrics for.</p>
   * @public
   */
  PredictorArn: string | undefined;
}

/**
 * <p> Provides detailed error metrics to evaluate the performance of a predictor. This object
 *       is part of the <a>Metrics</a> object. </p>
 * @public
 */
export interface ErrorMetric {
  /**
   * <p> The Forecast type used to compute WAPE, MAPE, MASE, and RMSE. </p>
   * @public
   */
  ForecastType?: string | undefined;

  /**
   * <p> The weighted absolute percentage error (WAPE). </p>
   * @public
   */
  WAPE?: number | undefined;

  /**
   * <p> The root-mean-square error (RMSE). </p>
   * @public
   */
  RMSE?: number | undefined;

  /**
   * <p>The Mean Absolute Scaled Error (MASE)</p>
   * @public
   */
  MASE?: number | undefined;

  /**
   * <p>The Mean Absolute Percentage Error (MAPE)</p>
   * @public
   */
  MAPE?: number | undefined;
}

/**
 * <p>The weighted loss value for a quantile. This object is part of the <a>Metrics</a> object.</p>
 * @public
 */
export interface WeightedQuantileLoss {
  /**
   * <p>The quantile. Quantiles divide a probability distribution into regions of equal
   *       probability. For example, if the distribution was divided into 5 regions of equal probability,
   *       the quantiles would be 0.2, 0.4, 0.6, and 0.8.</p>
   * @public
   */
  Quantile?: number | undefined;

  /**
   * <p>The difference between the predicted value and the actual value over the quantile,
   *       weighted (normalized) by dividing by the sum over all quantiles.</p>
   * @public
   */
  LossValue?: number | undefined;
}

/**
 * <p>Provides metrics that are used to evaluate the performance of a predictor. This object is
 *       part of the <a>WindowSummary</a> object.</p>
 * @public
 */
export interface Metrics {
  /**
   * <p>The root-mean-square error (RMSE).</p>
   *
   * @deprecated This property is deprecated, please refer to ErrorMetrics for both RMSE and WAPE
   * @public
   */
  RMSE?: number | undefined;

  /**
   * <p>An array of weighted quantile losses. Quantiles divide a probability distribution into
   *       regions of equal probability. The distribution in this case is the loss function.</p>
   * @public
   */
  WeightedQuantileLosses?: WeightedQuantileLoss[] | undefined;

  /**
   * <p> Provides detailed error metrics for each forecast type. Metrics include root-mean
   *       square-error (RMSE), mean absolute percentage error (MAPE), mean absolute scaled error (MASE),
   *       and weighted average percentage error (WAPE). </p>
   * @public
   */
  ErrorMetrics?: ErrorMetric[] | undefined;

  /**
   * <p>The average value of all weighted quantile losses.</p>
   * @public
   */
  AverageWeightedQuantileLoss?: number | undefined;
}

/**
 * <p>The metrics for a time range within the evaluation portion of a dataset. This object is
 *       part of the <a>EvaluationResult</a> object.</p>
 *          <p>The <code>TestWindowStart</code> and <code>TestWindowEnd</code> parameters are determined
 *       by the <code>BackTestWindowOffset</code> parameter of the <a>EvaluationParameters</a> object.</p>
 * @public
 */
export interface WindowSummary {
  /**
   * <p>The timestamp that defines the start of the window.</p>
   * @public
   */
  TestWindowStart?: Date | undefined;

  /**
   * <p>The timestamp that defines the end of the window.</p>
   * @public
   */
  TestWindowEnd?: Date | undefined;

  /**
   * <p>The number of data points within the window.</p>
   * @public
   */
  ItemCount?: number | undefined;

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
   * @public
   */
  EvaluationType?: EvaluationType | undefined;

  /**
   * <p>Provides metrics used to evaluate the performance of a predictor.</p>
   * @public
   */
  Metrics?: Metrics | undefined;
}

/**
 * <p>The results of evaluating an algorithm. Returned as part of the <a>GetAccuracyMetrics</a> response.</p>
 * @public
 */
export interface EvaluationResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm that was evaluated.</p>
   * @public
   */
  AlgorithmArn?: string | undefined;

  /**
   * <p>The array of test windows used for evaluating the algorithm. The
   *         <code>NumberOfBacktestWindows</code> from the <a>EvaluationParameters</a> object
   *       determines the number of windows in the array.</p>
   * @public
   */
  TestWindows?: WindowSummary[] | undefined;
}

/**
 * @public
 */
export interface GetAccuracyMetricsResponse {
  /**
   * <p>An array of results from evaluating the predictor.</p>
   * @public
   */
  PredictorEvaluationResults?: EvaluationResult[] | undefined;

  /**
   * <p>Whether the predictor was created with <a>CreateAutoPredictor</a>.</p>
   * @public
   */
  IsAutoPredictor?: boolean | undefined;

  /**
   * <note>
   *             <p> The <code>LatencyOptimized</code> AutoML override strategy is only available in private beta.
   *                 Contact Amazon Web Services Support or your account manager to learn more about access privileges.
   *             </p>
   *          </note>
   *          <p>The AutoML strategy used to train the predictor. Unless <code>LatencyOptimized</code>
   *             is specified, the AutoML strategy optimizes predictor accuracy.</p>
   *          <p>This parameter is only valid for predictors trained using AutoML.</p>
   * @public
   */
  AutoMLOverrideStrategy?: AutoMLOverrideStrategy | undefined;

  /**
   * <p>The accuracy metric used to optimize the predictor.</p>
   * @public
   */
  OptimizationMetric?: OptimizationMetric | undefined;
}

/**
 * @public
 */
export interface ListDatasetGroupsRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of items to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Provides a summary of the dataset group properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> operation. To
 *       get the complete set of properties, call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>
 *       operation, and provide the <code>DatasetGroupArn</code>.</p>
 * @public
 */
export interface DatasetGroupSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   * @public
   */
  DatasetGroupArn?: string | undefined;

  /**
   * <p>The name of the dataset group.</p>
   * @public
   */
  DatasetGroupName?: string | undefined;

  /**
   * <p>When the dataset group was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>When the dataset group was created or last updated from a call to the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation. While the dataset group is being updated,
   *         <code>LastModificationTime</code> is the current time of the <code>ListDatasetGroups</code>
   *       call.</p>
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListDatasetGroupsResponse {
  /**
   * <p>An array of objects that summarize each dataset group's properties.</p>
   * @public
   */
  DatasetGroups?: DatasetGroupSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Describes a filter for choosing a subset of objects. Each filter consists of a
 *       condition and a match statement. The condition is either <code>IS</code> or
 *       <code>IS_NOT</code>, which specifies whether to include or exclude
 *       the objects that match the statement, respectively. The match statement consists of a key and a
 *       value.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>The name of the parameter to filter on.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value to match.</p>
   * @public
   */
  Value: string | undefined;

  /**
   * <p>The condition to apply. To include the objects that match the statement, specify
   *       <code>IS</code>. To exclude matching objects, specify <code>IS_NOT</code>.</p>
   * @public
   */
  Condition: FilterConditionString | undefined;
}

/**
 * @public
 */
export interface ListDatasetImportJobsRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of items to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

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
   *             <code>"Filters": [ \{ "Condition": "IS", "Key": "Status", "Value": "ACTIVE" \} ]</code>
   *          </p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Provides a summary of the dataset import job properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> operation. To get the complete set of properties, call the
 *         <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation, and provide the
 *         <code>DatasetImportJobArn</code>.</p>
 * @public
 */
export interface DatasetImportJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset import job.</p>
   * @public
   */
  DatasetImportJobArn?: string | undefined;

  /**
   * <p>The name of the dataset import job.</p>
   * @public
   */
  DatasetImportJobName?: string | undefined;

  /**
   * <p>The location of the training data to import and an Identity and Access Management (IAM) role that Amazon Forecast
   *       can assume to access the data. The training data must be stored in an Amazon S3 bucket.</p>
   *          <p>If encryption is used, <code>DataSource</code> includes an Key Management Service (KMS) key.</p>
   * @public
   */
  DataSource?: DataSource | undefined;

  /**
   * <p>The status of the dataset import job. States include:</p>
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
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>When the dataset import job was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the
   *       job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *           failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;

  /**
   * <p>The import mode of the dataset import job, FULL or INCREMENTAL.</p>
   * @public
   */
  ImportMode?: ImportMode | undefined;
}

/**
 * @public
 */
export interface ListDatasetImportJobsResponse {
  /**
   * <p>An array of objects that summarize each dataset import job's properties.</p>
   * @public
   */
  DatasetImportJobs?: DatasetImportJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of items to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Provides a summary of the dataset properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html">ListDatasets</a> operation. To get the
 *       complete set of properties, call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation, and
 *       provide the <code>DatasetArn</code>.</p>
 * @public
 */
export interface DatasetSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  DatasetArn?: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The dataset type.</p>
   * @public
   */
  DatasetType?: DatasetType | undefined;

  /**
   * <p>The domain associated with the dataset.</p>
   * @public
   */
  Domain?: Domain | undefined;

  /**
   * <p>When the dataset was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>When you create a dataset, <code>LastModificationTime</code> is the same as
   *         <code>CreationTime</code>. While data is being imported to the dataset,
   *         <code>LastModificationTime</code> is the current time of the <code>ListDatasets</code> call.
   *       After a <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation has finished, <code>LastModificationTime</code> is
   *       when the import job completed or failed.</p>
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * <p>An array of objects that summarize each dataset's properties.</p>
   * @public
   */
  Datasets?: DatasetSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExplainabilitiesRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *             NextToken. To retrieve the next set of results, use the token in the next request.
   *             Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of items returned in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An array of filters. For each filter, provide a condition and a match statement. The
   *             condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to
   *             include or exclude the resources that match the statement from the list. The match
   *             statement consists of a key and a value.</p>
   *          <p>
   *             <b>Filter properties</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Condition</code> - The condition to apply. Valid values are
   *                         <code>IS</code> and <code>IS_NOT</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key</code> - The name of the parameter to filter on. Valid values are
   *                         <code>ResourceArn</code> and <code>Status</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Value</code> - The value to match.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Provides a summary of the Explainability properties used in the <a>ListExplainabilities</a> operation. To get a complete set of properties,
 *             call the <a>DescribeExplainability</a> operation, and provide the listed
 *                 <code>ExplainabilityArn</code>.</p>
 * @public
 */
export interface ExplainabilitySummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the Explainability.</p>
   * @public
   */
  ExplainabilityArn?: string | undefined;

  /**
   * <p>The name of the Explainability.</p>
   * @public
   */
  ExplainabilityName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the
   *             Explainability.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The configuration settings that define the granularity of time series and time points
   *             for the Explainability.</p>
   * @public
   */
  ExplainabilityConfig?: ExplainabilityConfig | undefined;

  /**
   * <p>The status of the Explainability. States include: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *                         <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *                         <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Information about any errors that may have occurred during the Explainability creation
   *             process.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>When the Explainability was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the
   *             job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *                     failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListExplainabilitiesResponse {
  /**
   * <p>An array of objects that summarize the properties of each Explainability
   *             resource.</p>
   * @public
   */
  Explainabilities?: ExplainabilitySummary[] | undefined;

  /**
   * <p>Returns this token if the response is truncated. To retrieve the next set of results,
   *             use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListExplainabilityExportsRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *             NextToken. To retrieve the next set of results, use the token in the next request.
   *             Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of items to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An array of filters. For each filter, provide a condition and a match statement. The
   *             condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to
   *             include or exclude resources that match the statement from the list. The match statement
   *             consists of a key and a value.</p>
   *          <p>
   *             <b>Filter properties</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Condition</code> - The condition to apply. Valid values are
   *                         <code>IS</code> and <code>IS_NOT</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key</code> - The name of the parameter to filter on. Valid values are
   *                         <code>ResourceArn</code> and <code>Status</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Value</code> - The value to match.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Provides a summary of the Explainability export properties used in the <a>ListExplainabilityExports</a> operation. To get a complete set of
 *             properties, call the <a>DescribeExplainabilityExport</a> operation, and
 *             provide the <code>ExplainabilityExportArn</code>.</p>
 * @public
 */
export interface ExplainabilityExportSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the Explainability export.</p>
   * @public
   */
  ExplainabilityExportArn?: string | undefined;

  /**
   * <p>The name of the Explainability export</p>
   * @public
   */
  ExplainabilityExportName?: string | undefined;

  /**
   * <p>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast
   *       to access the location, and an Key Management Service (KMS) key (optional). </p>
   * @public
   */
  Destination?: DataDestination | undefined;

  /**
   * <p>The status of the Explainability export. States include: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *                         <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *                         <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Information about any errors that may have occurred during the Explainability
   *             export.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>When the Explainability was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the
   *             job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *                     failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListExplainabilityExportsResponse {
  /**
   * <p>An array of objects that summarize the properties of each Explainability
   *             export.</p>
   * @public
   */
  ExplainabilityExports?: ExplainabilityExportSummary[] | undefined;

  /**
   * <p>Returns this token if the response is truncated. To retrieve the next set of results,
   *             use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListForecastExportJobsRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of items to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

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
   *             <code>"Filters": [ \{ "Condition": "IS", "Key": "ForecastArn", "Value":
   *         "arn:aws:forecast:us-west-2:<acct-id>:forecast/electricityforecast" \} ]</code>
   *          </p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Provides a summary of the forecast export job properties used in the <a>ListForecastExportJobs</a> operation. To get the complete set of properties, call
 *       the <a>DescribeForecastExportJob</a> operation, and provide the listed
 *         <code>ForecastExportJobArn</code>.</p>
 * @public
 */
export interface ForecastExportJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the forecast export job.</p>
   * @public
   */
  ForecastExportJobArn?: string | undefined;

  /**
   * <p>The name of the forecast export job.</p>
   * @public
   */
  ForecastExportJobName?: string | undefined;

  /**
   * <p>The path to the Amazon Simple Storage Service (Amazon S3) bucket where the forecast is exported.</p>
   * @public
   */
  Destination?: DataDestination | undefined;

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
   *           <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *           <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Status</code> of the forecast export job must be <code>ACTIVE</code> before
   *         you can access the forecast in your S3 bucket.</p>
   *          </note>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>When the forecast export job was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *           failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListForecastExportJobsResponse {
  /**
   * <p>An array of objects that summarize each export job's properties.</p>
   * @public
   */
  ForecastExportJobs?: ForecastExportJobSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListForecastsRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of items to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

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
   *             <code>"Filters": [ \{ "Condition": "IS_NOT", "Key": "Status", "Value": "ACTIVE" \}
   *       ]</code>
   *          </p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Provides a summary of the forecast properties used in the <a>ListForecasts</a>
 *       operation. To get the complete set of properties, call the <a>DescribeForecast</a>
 *       operation, and provide the <code>ForecastArn</code> that is listed in the summary.</p>
 * @public
 */
export interface ForecastSummary {
  /**
   * <p>The ARN of the forecast.</p>
   * @public
   */
  ForecastArn?: string | undefined;

  /**
   * <p>The name of the forecast.</p>
   * @public
   */
  ForecastName?: string | undefined;

  /**
   * <p>The ARN of the predictor used to generate the forecast.</p>
   * @public
   */
  PredictorArn?: string | undefined;

  /**
   * <p>Whether the Forecast was created from an AutoPredictor.</p>
   * @public
   */
  CreatedUsingAutoPredictor?: boolean | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group that provided the data used to train
   *       the predictor.</p>
   * @public
   */
  DatasetGroupArn?: string | undefined;

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
   *           <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *           <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Status</code> of the forecast must be <code>ACTIVE</code> before you can query
   *         or export the forecast.</p>
   *          </note>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>When the forecast creation task was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *           failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListForecastsResponse {
  /**
   * <p>An array of objects that summarize each forecast's properties.</p>
   * @public
   */
  Forecasts?: ForecastSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set
   *       of results, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMonitorEvaluationsRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *          <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *          request. Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of monitoring results to return.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitor resource to get results from.</p>
   * @public
   */
  MonitorArn: string | undefined;

  /**
   * <p>An array of filters. For each filter, provide a condition and a match statement. The
   *          condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to
   *          include or exclude the resources that match the statement from the list. The match
   *          statement consists of a key and a value.</p>
   *          <p>
   *             <b>Filter properties</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Condition</code> - The condition to apply. Valid values are
   *                <code>IS</code> and <code>IS_NOT</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key</code> - The name of the parameter to filter on. The only valid value is
   *                <code>EvaluationState</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Value</code> - The value to match. Valid values are only <code>SUCCESS</code> or <code>FAILURE</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For example, to list only successful monitor evaluations, you would specify:</p>
   *          <p>
   *             <code>"Filters": [ \{ "Condition": "IS", "Key": "EvaluationState", "Value": "SUCCESS" \} ]</code>
   *          </p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>An individual metric Forecast calculated when monitoring predictor usage. You can compare the value for this metric to the metric's value in the <a>Baseline</a> to see how your predictor's performance is changing.</p>
 *          <p>For more information about metrics generated by Forecast see <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">Evaluating Predictor Accuracy</a>
 *          </p>
 * @public
 */
export interface MetricResult {
  /**
   * <p>The name of the metric.</p>
   * @public
   */
  MetricName?: string | undefined;

  /**
   * <p>The value for the metric.</p>
   * @public
   */
  MetricValue?: number | undefined;
}

/**
 * <p>The source of the data the monitor used during the evaluation.</p>
 * @public
 */
export interface MonitorDataSource {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset import job used to import the data that initiated the monitor evaluation.</p>
   * @public
   */
  DatasetImportJobArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the forecast the monitor used during the evaluation.</p>
   * @public
   */
  ForecastArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the predictor resource you are monitoring.</p>
   * @public
   */
  PredictorArn?: string | undefined;
}

/**
 * <p>Provides details about a predictor event, such as a retraining.</p>
 * @public
 */
export interface PredictorEvent {
  /**
   * <p>The type of event. For example, <code>Retrain</code>. A retraining event denotes the timepoint when a predictor was retrained. Any monitor results from before the <code>Datetime</code> are from the previous predictor. Any new metrics are for the newly retrained predictor.</p>
   * @public
   */
  Detail?: string | undefined;

  /**
   * <p>The timestamp for when the event occurred.</p>
   * @public
   */
  Datetime?: Date | undefined;
}

/**
 * <p>Describes the results of a monitor evaluation.</p>
 * @public
 */
export interface PredictorMonitorEvaluation {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to monitor.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the monitor resource.</p>
   * @public
   */
  MonitorArn?: string | undefined;

  /**
   * <p>The timestamp that indicates when the monitor evaluation was started. </p>
   * @public
   */
  EvaluationTime?: Date | undefined;

  /**
   * <p>The status of the monitor evaluation. The state can be <code>SUCCESS</code> or <code>FAILURE</code>.</p>
   * @public
   */
  EvaluationState?: string | undefined;

  /**
   * <p>The timestamp that indicates the start of the window that is used for monitor evaluation.</p>
   * @public
   */
  WindowStartDatetime?: Date | undefined;

  /**
   * <p>The timestamp that indicates the end of the window that is used for monitor evaluation.</p>
   * @public
   */
  WindowEndDatetime?: Date | undefined;

  /**
   * <p>Provides details about a predictor event, such as a retraining.</p>
   * @public
   */
  PredictorEvent?: PredictorEvent | undefined;

  /**
   * <p>The source of the data the monitor resource used during the evaluation.</p>
   * @public
   */
  MonitorDataSource?: MonitorDataSource | undefined;

  /**
   * <p>A list of metrics Forecast calculated when monitoring a predictor. You can compare the value for each metric in the list to the metric's value in the <a>Baseline</a> to see how your predictor's performance is changing.</p>
   * @public
   */
  MetricResults?: MetricResult[] | undefined;

  /**
   * <p>The number of items considered during the evaluation.</p>
   * @public
   */
  NumItemsEvaluated?: number | undefined;

  /**
   * <p>Information about any errors that may have occurred during the monitor evaluation.</p>
   * @public
   */
  Message?: string | undefined;
}

/**
 * @public
 */
export interface ListMonitorEvaluationsResponse {
  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *          results, use the token in the next request. Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The monitoring results and predictor events collected by the monitor resource during different windows of time.</p>
   *          <p>For information about monitoring see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html">Viewing Monitoring Results</a>. For more information about retrieving monitoring results see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html">Viewing Monitoring Results</a>.</p>
   * @public
   */
  PredictorMonitorEvaluations?: PredictorMonitorEvaluation[] | undefined;
}

/**
 * @public
 */
export interface ListMonitorsRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *          <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *          request. Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of monitors to include in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An array of filters. For each filter, provide a condition and a match statement. The
   *          condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to
   *          include or exclude the resources that match the statement from the list. The match
   *          statement consists of a key and a value.</p>
   *          <p>
   *             <b>Filter properties</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Condition</code> - The condition to apply. Valid values are
   *                <code>IS</code> and <code>IS_NOT</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key</code> - The name of the parameter to filter on. The only valid value is
   *                <code>Status</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Value</code> - The value to match.</p>
   *             </li>
   *          </ul>
   *          <p>For example, to list all monitors who's status is ACTIVE, you would specify:</p>
   *          <p>
   *             <code>"Filters": [ \{ "Condition": "IS", "Key": "Status", "Value": "ACTIVE" \} ]</code>
   *          </p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Provides a summary of the monitor properties used in the <a>ListMonitors</a> operation. To get a complete set of properties,
 *          call the <a>DescribeMonitor</a> operation, and provide the listed
 *          <code>MonitorArn</code>.</p>
 * @public
 */
export interface MonitorSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitor resource.</p>
   * @public
   */
  MonitorArn?: string | undefined;

  /**
   * <p>The name of the monitor resource.</p>
   * @public
   */
  MonitorName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the predictor being monitored.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The status of the monitor. States include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE_STOPPING</code>, <code>ACTIVE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_IN_PROGRESS</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>, <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>, <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>When the monitor resource was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the monitor resource was modified. The timestamp depends on the status of the
   *          job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code> - When the resource stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the monitor creation finished or
   *                failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListMonitorsResponse {
  /**
   * <p>An array of objects that summarize each monitor's properties.</p>
   * @public
   */
  Monitors?: MonitorSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *          results, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPredictorBacktestExportJobsRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *             NextToken. To retrieve the next set of results, use the token in the next request.
   *             Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of items to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An array of filters. For each filter, provide a condition and a match statement. The
   *             condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to
   *             include or exclude the predictor backtest export jobs that match the statement from the
   *             list. The match statement consists of a key and a value.</p>
   *          <p>
   *             <b>Filter properties</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Condition</code> - The condition to apply. Valid values are
   *                         <code>IS</code> and <code>IS_NOT</code>. To include the predictor backtest
   *                     export jobs that match the statement, specify <code>IS</code>. To exclude
   *                     matching predictor backtest export jobs, specify <code>IS_NOT</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key</code> - The name of the parameter to filter on. Valid values are
   *                         <code>PredictorArn</code> and <code>Status</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Value</code> - The value to match.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Provides a summary of the predictor backtest export job properties used in the <a>ListPredictorBacktestExportJobs</a> operation. To get a complete set of
 *             properties, call the <a>DescribePredictorBacktestExportJob</a> operation, and
 *             provide the listed <code>PredictorBacktestExportJobArn</code>.</p>
 * @public
 */
export interface PredictorBacktestExportJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor backtest export job.</p>
   * @public
   */
  PredictorBacktestExportJobArn?: string | undefined;

  /**
   * <p>The name of the predictor backtest export job.</p>
   * @public
   */
  PredictorBacktestExportJobName?: string | undefined;

  /**
   * <p>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast
   *       to access the location, and an Key Management Service (KMS) key (optional). </p>
   * @public
   */
  Destination?: DataDestination | undefined;

  /**
   * <p>The status of the predictor backtest export job. States include: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *                         <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *                         <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>Information about any errors that may have occurred during the backtest export.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>When the predictor backtest export job was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the
   *             job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *                     failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListPredictorBacktestExportJobsResponse {
  /**
   * <p>An array of objects that summarize the properties of each predictor backtest export
   *             job.</p>
   * @public
   */
  PredictorBacktestExportJobs?: PredictorBacktestExportJobSummary[] | undefined;

  /**
   * <p>Returns this token if the response is truncated. To retrieve the next set of results,
   *             use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPredictorsRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of items to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

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
   *             <code>"Filters": [ \{ "Condition": "IS", "Key": "Status", "Value": "ACTIVE" \}
   *       ]</code>
   *          </p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Provides a summary of the predictor properties that are used in the <a>ListPredictors</a> operation. To get the complete set of properties, call the <a>DescribePredictor</a> operation, and provide the listed
 *       <code>PredictorArn</code>.</p>
 * @public
 */
export interface PredictorSummary {
  /**
   * <p>The ARN of the predictor.</p>
   * @public
   */
  PredictorArn?: string | undefined;

  /**
   * <p>The name of the predictor.</p>
   * @public
   */
  PredictorName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group that contains the data used to train
   *       the predictor.</p>
   * @public
   */
  DatasetGroupArn?: string | undefined;

  /**
   * <p>Whether AutoPredictor was used to create the predictor.</p>
   * @public
   */
  IsAutoPredictor?: boolean | undefined;

  /**
   * <p>A summary of the reference predictor used if the predictor was retrained or
   *             upgraded.</p>
   * @public
   */
  ReferencePredictorSummary?: ReferencePredictorSummary | undefined;

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
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Status</code> of the predictor must be <code>ACTIVE</code> before you can use
   *         the predictor to create a forecast.</p>
   *          </note>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>When the model training task was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the
   *       job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *           failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListPredictorsResponse {
  /**
   * <p>An array of objects that summarize each predictor's properties.</p>
   * @public
   */
  Predictors?: PredictorSummary[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags.
   *     </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListWhatIfAnalysesRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *       <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of items to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An array of filters. For each filter, you provide a condition and a match statement. The condition is either
   *         <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the what-if analysis jobs
   *       that match the statement from the list, respectively. The match statement consists of a key and a value.</p>
   *          <p>
   *             <b>Filter properties</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Condition</code> - The condition to apply. Valid values are <code>IS</code> and
   *             <code>IS_NOT</code>. To include the what-if analysis jobs that match the statement, specify <code>IS</code>.
   *           To exclude matching what-if analysis jobs, specify <code>IS_NOT</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key</code> - The name of the parameter to filter on. Valid values are
   *             <code>WhatIfAnalysisArn</code> and <code>Status</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Value</code> - The value to match.</p>
   *             </li>
   *          </ul>
   *          <p>For example, to list all jobs that export a forecast named
   *         <i>electricityWhatIf</i>, specify the following filter:</p>
   *          <p>
   *             <code>"Filters": [ \{ "Condition": "IS", "Key": "WhatIfAnalysisArn", "Value":
   *         "arn:aws:forecast:us-west-2:<acct-id>:forecast/electricityWhatIf" \} ]</code>
   *          </p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Provides a summary of the what-if analysis properties used in the <a>ListWhatIfAnalyses</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfAnalysis</a> operation, and provide the <code>WhatIfAnalysisArn</code> that is listed in the summary.</p>
 * @public
 */
export interface WhatIfAnalysisSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the what-if analysis.</p>
   * @public
   */
  WhatIfAnalysisArn?: string | undefined;

  /**
   * <p>The name of the what-if analysis.</p>
   * @public
   */
  WhatIfAnalysisName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the baseline forecast that is being used in this what-if analysis.</p>
   * @public
   */
  ForecastArn?: string | undefined;

  /**
   * <p>The status of the what-if analysis. States include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *           <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *           <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Status</code> of the what-if analysis must be <code>ACTIVE</code> before you can access the
   *         analysis.</p>
   *          </note>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>When the what-if analysis was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *             failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListWhatIfAnalysesResponse {
  /**
   * <p>An array of <code>WhatIfAnalysisSummary</code> objects that describe the matched analyses.</p>
   * @public
   */
  WhatIfAnalyses?: WhatIfAnalysisSummary[] | undefined;

  /**
   * <p>If the response is truncated, Forecast returns this token. To retrieve the next set of results, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWhatIfForecastExportsRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next  request. Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of items to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An array of filters. For each filter, you provide a condition and a match statement. The condition is either
   *         <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the what-if forecast
   *       export jobs that match the statement from the list, respectively. The match statement consists of a key and a
   *       value.</p>
   *          <p>
   *             <b>Filter properties</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Condition</code> - The condition to apply. Valid values are <code>IS</code> and
   *           <code>IS_NOT</code>. To include the forecast export jobs that match the statement,
   *           specify <code>IS</code>. To exclude matching forecast export jobs, specify
   *           <code>IS_NOT</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key</code> - The name of the parameter to filter on. Valid values are
   *           <code>WhatIfForecastExportArn</code> and <code>Status</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Value</code> - The value to match.</p>
   *             </li>
   *          </ul>
   *          <p>For example, to list all jobs that export a forecast named
   *       <i>electricityWIFExport</i>, specify the following filter:</p>
   *          <p>
   *             <code>"Filters": [ \{ "Condition": "IS", "Key": "WhatIfForecastExportArn", "Value":
   *       "arn:aws:forecast:us-west-2:<acct-id>:forecast/electricityWIFExport" \} ]</code>
   *          </p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Provides a summary of the what-if forecast export properties used in the <a>ListWhatIfForecastExports</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfForecastExport</a> operation, and provide the <code>WhatIfForecastExportArn</code> that is listed in the summary.</p>
 * @public
 */
export interface WhatIfForecastExportSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the what-if forecast export.</p>
   * @public
   */
  WhatIfForecastExportArn?: string | undefined;

  /**
   * <p>An array of Amazon Resource Names (ARNs) that define the what-if forecasts included in the export.</p>
   * @public
   */
  WhatIfForecastArns?: string[] | undefined;

  /**
   * <p>The what-if forecast export name.</p>
   * @public
   */
  WhatIfForecastExportName?: string | undefined;

  /**
   * <p>The path to the Amazon Simple Storage Service (Amazon S3) bucket where the forecast is exported.</p>
   * @public
   */
  Destination?: DataDestination | undefined;

  /**
   * <p>The status of the what-if forecast export. States include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *           <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *           <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Status</code> of the what-if analysis must be <code>ACTIVE</code> before you can access the
   *         analysis.</p>
   *          </note>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>When the what-if forecast export was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *           failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListWhatIfForecastExportsResponse {
  /**
   * <p>An array of <code>WhatIfForecastExports</code> objects that describe the matched forecast exports.</p>
   * @public
   */
  WhatIfForecastExports?: WhatIfForecastExportSummary[] | undefined;

  /**
   * <p>If the response is truncated, Forecast returns this token. To retrieve the next set of results, use the token in the next request.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWhatIfForecastsRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next  request. Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The number of items to return in the response.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An array of filters. For each filter, you provide a condition and a match statement. The condition is either
   *         <code>IS</code> or <code>IS_NOT</code>, which specifies whether to include or exclude the what-if forecast
   *       export jobs that match the statement from the list, respectively. The match statement consists of a key and a
   *       value.</p>
   *          <p>
   *             <b>Filter properties</b>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Condition</code> - The condition to apply. Valid values are <code>IS</code> and
   *           <code>IS_NOT</code>. To include the forecast export jobs that match the statement,
   *           specify <code>IS</code>. To exclude matching forecast export jobs, specify
   *           <code>IS_NOT</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Key</code> - The name of the parameter to filter on. Valid values are
   *           <code>WhatIfForecastArn</code> and <code>Status</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Value</code> - The value to match.</p>
   *             </li>
   *          </ul>
   *          <p>For example, to list all jobs that export a forecast named
   *       <i>electricityWhatIfForecast</i>, specify the following filter:</p>
   *          <p>
   *             <code>"Filters": [ \{ "Condition": "IS", "Key": "WhatIfForecastArn", "Value":
   *       "arn:aws:forecast:us-west-2:<acct-id>:forecast/electricityWhatIfForecast" \} ]</code>
   *          </p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p>Provides a summary of the what-if forecast properties used in the <a>ListWhatIfForecasts</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfForecast</a> operation, and provide the <code>WhatIfForecastArn</code> that is listed in the summary.</p>
 * @public
 */
export interface WhatIfForecastSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the what-if forecast.</p>
   * @public
   */
  WhatIfForecastArn?: string | undefined;

  /**
   * <p>The name of the what-if forecast.</p>
   * @public
   */
  WhatIfForecastName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the what-if analysis that contains this what-if forecast.</p>
   * @public
   */
  WhatIfAnalysisArn?: string | undefined;

  /**
   * <p>The status of the what-if forecast. States include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *           <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *           <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>The <code>Status</code> of the what-if analysis must be <code>ACTIVE</code> before you can access the
   *         analysis.</p>
   *          </note>
   * @public
   */
  Status?: string | undefined;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>When the what-if forecast was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the job:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *           failed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  LastModificationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListWhatIfForecastsResponse {
  /**
   * <p>An array of <code>WhatIfForecasts</code> objects that describe the matched forecasts.</p>
   * @public
   */
  WhatIfForecasts?: WhatIfForecastSummary[] | undefined;

  /**
   * <p>If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next  request. Tokens expire after 24 hours.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ResumeResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the monitor resource to resume.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface StopResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource to stop. The supported ARNs
   *          are <code>DatasetImportJobArn</code>, <code>PredictorArn</code>,
   *             <code>PredictorBacktestExportJobArn</code>, <code>ForecastArn</code>,
   *             <code>ForecastExportJobArn</code>, <code>ExplainabilityArn</code>, and
   *             <code>ExplainabilityExportArn</code>. </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags.
   *     </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tags to add to the resource. A tag is an array of key-value pairs.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource - 50.</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only one
   *           value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources, remember that
   *           other services may have restrictions on allowed characters. Generally allowed characters
   *           are: letters, numbers, and spaces representable in UTF-8, and the following characters: +
   *           - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination
   *           of such as a prefix for keys as it is reserved for Amazon Web Services use. You cannot edit or delete tag
   *           keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as
   *           its prefix but the key does not, then Forecast considers it to be a user tag and will
   *           count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do
   *           not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
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
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags.
   *     </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
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
   * <p>The ARN of the dataset group.</p>
   * @public
   */
  DatasetGroupArn: string | undefined;

  /**
   * <p>An array of the Amazon Resource Names (ARNs) of the datasets to add to the dataset
   *       group.</p>
   * @public
   */
  DatasetArns: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetGroupResponse {}
