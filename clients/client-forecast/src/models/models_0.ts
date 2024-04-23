// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ForecastServiceException as __BaseException } from "./ForecastServiceException";

/**
 * @public
 * @enum
 */
export const Operation = {
  ADD: "ADD",
  DIVIDE: "DIVIDE",
  MULTIPLY: "MULTIPLY",
  SUBTRACT: "SUBTRACT",
} as const;

/**
 * @public
 */
export type Operation = (typeof Operation)[keyof typeof Operation];

/**
 * @public
 * <p>Defines the modifications that you are making to an attribute for a what-if forecast. For example, you can use this operation to create a what-if forecast that investigates a 10% off sale on all shoes. To do this, you specify <code>"AttributeName": "shoes"</code>, <code>"Operation": "MULTIPLY"</code>, and <code>"Value": "0.90"</code>. Pair this operation with the <a>TimeSeriesCondition</a> operation within the <a>CreateWhatIfForecastRequest$TimeSeriesTransformations</a> operation to define a subset of attribute items that are modified.</p>
 */
export interface Action {
  /**
   * @public
   * <p>The related time series that you are modifying. This value is case insensitive.</p>
   */
  AttributeName: string | undefined;

  /**
   * @public
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
   */
  Operation: Operation | undefined;

  /**
   * @public
   * <p>The value that is applied for the chosen <code>Operation</code>.</p>
   */
  Value: number | undefined;
}

/**
 * @public
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
 */
export interface AdditionalDataset {
  /**
   * @public
   * <p>The name of the additional dataset. Valid names: <code>"holiday"</code> and
   *                 <code>"weather"</code>.</p>
   */
  Name: string | undefined;

  /**
   * @public
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
   */
  Configuration?: Record<string, string[]>;
}

/**
 * @public
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
 */
export interface AttributeConfig {
  /**
   * @public
   * <p>The name of the attribute as specified in the schema. Amazon Forecast supports the
   *             target field of the target time series and the related time series datasets. For
   *             example, for the RETAIL domain, the target is <code>demand</code>.</p>
   */
  AttributeName: string | undefined;

  /**
   * @public
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
   */
  Transformations: Record<string, string> | undefined;
}

/**
 * @public
 * <p>The data configuration for your dataset group and any additional datasets.</p>
 */
export interface DataConfig {
  /**
   * @public
   * <p>The ARN of the dataset group used to train the predictor.</p>
   */
  DatasetGroupArn: string | undefined;

  /**
   * @public
   * <p>Aggregation and filling options for attributes in your dataset group.</p>
   */
  AttributeConfigs?: AttributeConfig[];

  /**
   * @public
   * <p>Additional built-in datasets like Holidays and the Weather Index.</p>
   */
  AdditionalDatasets?: AdditionalDataset[];
}

/**
 * @public
 * <p>An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to
 *       access the key. You can specify this optional object in the
 *       <a>CreateDataset</a> and <a>CreatePredictor</a> requests.</p>
 */
export interface EncryptionConfig {
  /**
   * @public
   * <p>The ARN of the IAM role that Amazon Forecast can assume to access the KMS key.</p>
   *          <p>Passing a role across Amazon Web Services accounts is not allowed. If you pass a role that isn't in your
   *       account, you get an <code>InvalidInputException</code> error.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the KMS key.</p>
   */
  KMSKeyArn: string | undefined;
}

/**
 * @public
 * <p>The configuration details for the predictor monitor.</p>
 */
export interface MonitorConfig {
  /**
   * @public
   * <p>The name of the monitor resource.</p>
   */
  MonitorName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const OptimizationMetric = {
  AverageWeightedQuantileLoss: "AverageWeightedQuantileLoss",
  MAPE: "MAPE",
  MASE: "MASE",
  RMSE: "RMSE",
  WAPE: "WAPE",
} as const;

/**
 * @public
 */
export type OptimizationMetric = (typeof OptimizationMetric)[keyof typeof OptimizationMetric];

/**
 * @public
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
 */
export interface Tag {
  /**
   * @public
   * <p>One part of a key-value pair that makes up a tag. A <code>key</code> is a general label
   *       that acts like a category for more specific tag values.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The optional part of a key-value pair that makes up a tag. A <code>value</code> acts as a
   *       descriptor within a tag category (key).</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DayOfWeek = {
  FRIDAY: "FRIDAY",
  MONDAY: "MONDAY",
  SATURDAY: "SATURDAY",
  SUNDAY: "SUNDAY",
  THURSDAY: "THURSDAY",
  TUESDAY: "TUESDAY",
  WEDNESDAY: "WEDNESDAY",
} as const;

/**
 * @public
 */
export type DayOfWeek = (typeof DayOfWeek)[keyof typeof DayOfWeek];

/**
 * @public
 * @enum
 */
export const Month = {
  APRIL: "APRIL",
  AUGUST: "AUGUST",
  DECEMBER: "DECEMBER",
  FEBRUARY: "FEBRUARY",
  JANUARY: "JANUARY",
  JULY: "JULY",
  JUNE: "JUNE",
  MARCH: "MARCH",
  MAY: "MAY",
  NOVEMBER: "NOVEMBER",
  OCTOBER: "OCTOBER",
  SEPTEMBER: "SEPTEMBER",
} as const;

/**
 * @public
 */
export type Month = (typeof Month)[keyof typeof Month];

/**
 * @public
 * <p>The time boundary Forecast uses to align and aggregate your data to match your forecast frequency. Provide the unit of time and the time boundary as a key value pair. If you
 *             don't provide a time boundary, Forecast uses a set of <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#default-time-boundaries">Default Time Boundaries</a>.
 *         </p>
 *          <p>For more information about aggregation,
 *             see <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html">Data Aggregation for Different Forecast Frequencies</a>.
 *             For more information setting a custom time boundary,
 *             see <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#specifying-time-boundary">Specifying a Time Boundary</a>.
 *
 *         </p>
 */
export interface TimeAlignmentBoundary {
  /**
   * @public
   * <p>The month to use for time alignment during aggregation. The month must be in uppercase.</p>
   */
  Month?: Month;

  /**
   * @public
   * <p>The day of the month to use for time alignment during aggregation.</p>
   */
  DayOfMonth?: number;

  /**
   * @public
   * <p>The day of week to use for time alignment during aggregation. The day must be in uppercase.</p>
   */
  DayOfWeek?: DayOfWeek;

  /**
   * @public
   * <p>The hour of day to use for time alignment during aggregation.</p>
   */
  Hour?: number;
}

/**
 * @public
 */
export interface CreateAutoPredictorRequest {
  /**
   * @public
   * <p>A unique name for the predictor</p>
   */
  PredictorName: string | undefined;

  /**
   * @public
   * <p>The number of time-steps that the model predicts. The forecast horizon is also called
   *             the prediction length.</p>
   *          <p>The maximum forecast horizon is the lesser of 500 time-steps or 1/4 of the
   *             TARGET_TIME_SERIES dataset length. If you are retraining an existing AutoPredictor, then
   *             the maximum forecast horizon is the lesser of 500 time-steps or 1/3 of the
   *             TARGET_TIME_SERIES dataset length.</p>
   *          <p>If you are upgrading to an AutoPredictor or retraining an existing AutoPredictor, you
   *             cannot update the forecast horizon parameter. You can meet this requirement by providing
   *             longer time-series in the dataset.</p>
   */
  ForecastHorizon?: number;

  /**
   * @public
   * <p>The forecast types used to train a predictor. You can specify up to five forecast
   *             types. Forecast types can be quantiles from 0.01 to 0.99, by increments of 0.01 or
   *             higher. You can also specify the mean forecast with <code>mean</code>.</p>
   */
  ForecastTypes?: string[];

  /**
   * @public
   * <p>An array of dimension (field) names that specify how to group the generated
   *             forecast.</p>
   *          <p>For example, if you are generating forecasts for item sales across all your stores,
   *             and your dataset contains a <code>store_id</code> field, you would specify
   *                 <code>store_id</code> as a dimension to group sales forecasts for each store.</p>
   */
  ForecastDimensions?: string[];

  /**
   * @public
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
   */
  ForecastFrequency?: string;

  /**
   * @public
   * <p>The data configuration for your dataset group and any additional datasets.</p>
   */
  DataConfig?: DataConfig;

  /**
   * @public
   * <p>An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to
   *       access the key. You can specify this optional object in the
   *       <a>CreateDataset</a> and <a>CreatePredictor</a> requests.</p>
   */
  EncryptionConfig?: EncryptionConfig;

  /**
   * @public
   * <p>The ARN of the predictor to retrain or upgrade. This parameter is only used when
   *             retraining or upgrading a predictor. When creating a new predictor, do not specify a
   *             value for this parameter.</p>
   *          <p>When upgrading or retraining a predictor, only specify values for the
   *                 <code>ReferencePredictorArn</code> and <code>PredictorName</code>. The value for
   *                 <code>PredictorName</code> must be a unique predictor name.</p>
   */
  ReferencePredictorArn?: string;

  /**
   * @public
   * <p>The accuracy metric used to optimize the predictor.</p>
   */
  OptimizationMetric?: OptimizationMetric;

  /**
   * @public
   * <p>Create an Explainability resource for the predictor.</p>
   */
  ExplainPredictor?: boolean;

  /**
   * @public
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
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The configuration details for predictor monitoring. Provide a name for the monitor resource to enable predictor monitoring.</p>
   *          <p>Predictor monitoring allows you to see how your predictor's performance changes over time.
   *          For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring.html">Predictor Monitoring</a>.</p>
   */
  MonitorConfig?: MonitorConfig;

  /**
   * @public
   * <p>The time boundary Forecast uses to align and aggregate any data that doesn't align with your forecast frequency. Provide the unit of time and the time boundary as a key value pair.
   *             For more information on specifying a time boundary, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#specifying-time-boundary">Specifying a Time Boundary</a>.
   *             If you
   *             don't provide a time boundary, Forecast uses a set of <a href="https://docs.aws.amazon.com/forecast/latest/dg/data-aggregation.html#default-time-boundaries">Default Time Boundaries</a>.</p>
   */
  TimeAlignmentBoundary?: TimeAlignmentBoundary;
}

/**
 * @public
 */
export interface CreateAutoPredictorResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the predictor.</p>
   */
  PredictorArn?: string;
}

/**
 * @public
 * <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The limit on the number of resources per account has been exceeded.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>There is already a resource with this name. Try again with a different name.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The specified resource is in use.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const DatasetType = {
  ITEM_METADATA: "ITEM_METADATA",
  RELATED_TIME_SERIES: "RELATED_TIME_SERIES",
  TARGET_TIME_SERIES: "TARGET_TIME_SERIES",
} as const;

/**
 * @public
 */
export type DatasetType = (typeof DatasetType)[keyof typeof DatasetType];

/**
 * @public
 * @enum
 */
export const Domain = {
  CUSTOM: "CUSTOM",
  EC2_CAPACITY: "EC2_CAPACITY",
  INVENTORY_PLANNING: "INVENTORY_PLANNING",
  METRICS: "METRICS",
  RETAIL: "RETAIL",
  WEB_TRAFFIC: "WEB_TRAFFIC",
  WORK_FORCE: "WORK_FORCE",
} as const;

/**
 * @public
 */
export type Domain = (typeof Domain)[keyof typeof Domain];

/**
 * @public
 * @enum
 */
export const AttributeType = {
  FLOAT: "float",
  GEOLOCATION: "geolocation",
  INTEGER: "integer",
  STRING: "string",
  TIMESTAMP: "timestamp",
} as const;

/**
 * @public
 */
export type AttributeType = (typeof AttributeType)[keyof typeof AttributeType];

/**
 * @public
 * <p>An attribute of a schema, which defines a dataset field. A schema attribute is required
 *       for every field in a dataset. The <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_Schema.html">Schema</a> object contains an array of
 *         <code>SchemaAttribute</code> objects.</p>
 */
export interface SchemaAttribute {
  /**
   * @public
   * <p>The name of the dataset field.</p>
   */
  AttributeName?: string;

  /**
   * @public
   * <p>The data type of the field.</p>
   *          <p>For a related time series dataset, other than date, item_id, and forecast dimensions attributes, all attributes should be of numerical type (integer/float).</p>
   */
  AttributeType?: AttributeType;
}

/**
 * @public
 * <p>Defines the fields of a dataset.</p>
 */
export interface Schema {
  /**
   * @public
   * <p>An array of attributes specifying the name and type of each field in a dataset.</p>
   */
  Attributes?: SchemaAttribute[];
}

/**
 * @public
 */
export interface CreateDatasetRequest {
  /**
   * @public
   * <p>A name for the dataset.</p>
   */
  DatasetName: string | undefined;

  /**
   * @public
   * <p>The domain associated with the dataset. When you add a dataset to a dataset group, this
   *       value and the value specified for the <code>Domain</code> parameter of the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetGroup.html">CreateDatasetGroup</a> operation must match.</p>
   *          <p>The <code>Domain</code> and <code>DatasetType</code> that you choose determine the fields
   *       that must be present in the training data that you import to the dataset. For example, if you
   *       choose the <code>RETAIL</code> domain and <code>TARGET_TIME_SERIES</code> as the
   *         <code>DatasetType</code>, Amazon Forecast requires <code>item_id</code>, <code>timestamp</code>,
   *       and <code>demand</code> fields to be present in your data. For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Importing
   *         datasets</a>.</p>
   */
  Domain: Domain | undefined;

  /**
   * @public
   * <p>The dataset type. Valid values depend on the chosen <code>Domain</code>.</p>
   */
  DatasetType: DatasetType | undefined;

  /**
   * @public
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
   */
  DataFrequency?: string;

  /**
   * @public
   * <p>The schema for the dataset. The schema attributes and their order must match the fields in
   *       your data. The dataset <code>Domain</code> and <code>DatasetType</code> that you choose
   *       determine the minimum required fields in your training data. For information about the
   *       required fields for a specific dataset domain and type, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-domains-ds-types.html">Dataset Domains and Dataset
   *         Types</a>.</p>
   */
  Schema: Schema | undefined;

  /**
   * @public
   * <p>An Key Management Service (KMS) key and the Identity and Access Management (IAM) role that Amazon Forecast can assume to access
   *       the key.</p>
   */
  EncryptionConfig?: EncryptionConfig;

  /**
   * @public
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
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DatasetArn?: string;
}

/**
 * @public
 */
export interface CreateDatasetGroupRequest {
  /**
   * @public
   * <p>A name for the dataset group.</p>
   */
  DatasetGroupName: string | undefined;

  /**
   * @public
   * <p>The domain associated with the dataset group. When you add a dataset to a dataset group,
   *       this value and the value specified for the <code>Domain</code> parameter of the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a>
   *       operation must match.</p>
   *          <p>The <code>Domain</code> and <code>DatasetType</code> that you choose determine the fields
   *       that must be present in training data that you import to a dataset. For example, if you choose
   *       the <code>RETAIL</code> domain and <code>TARGET_TIME_SERIES</code> as the
   *         <code>DatasetType</code>, Amazon Forecast requires that <code>item_id</code>,
   *         <code>timestamp</code>, and <code>demand</code> fields are present in your data. For more
   *       information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/howitworks-datasets-groups.html">Dataset groups</a>.</p>
   */
  Domain: Domain | undefined;

  /**
   * @public
   * <p>An array of Amazon Resource Names (ARNs) of the datasets that you want to include in the
   *       dataset group.</p>
   */
  DatasetArns?: string[];

  /**
   * @public
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
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateDatasetGroupResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   */
  DatasetGroupArn?: string;
}

/**
 * @public
 * <p>The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an Identity and Access Management (IAM) role that
 *       Amazon Forecast can assume to access the file(s). Optionally, includes an Key Management Service (KMS) key. This
 *       object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object.</p>
 */
export interface S3Config {
  /**
   * @public
   * <p>The path to an Amazon Simple Storage Service (Amazon S3) bucket or file(s) in an Amazon S3 bucket.</p>
   */
  Path: string | undefined;

  /**
   * @public
   * <p>The ARN of the Identity and Access Management (IAM) role that Amazon Forecast can assume to access the Amazon S3
   *       bucket or files. If you provide a value for the <code>KMSKeyArn</code> key, the role must
   *       allow access to the key.</p>
   *          <p>Passing a role across Amazon Web Services accounts is not allowed. If you pass a role that isn't in your
   *       account, you get an <code>InvalidInputException</code> error.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an Key Management Service (KMS) key.</p>
   */
  KMSKeyArn?: string;
}

/**
 * @public
 * <p>The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to
 *       access the data and, optionally, an Key Management Service (KMS) key.</p>
 */
export interface DataSource {
  /**
   * @public
   * <p>The path to the data stored in an Amazon Simple Storage Service (Amazon S3) bucket along with the
   *       credentials to access the data.</p>
   */
  S3Config: S3Config | undefined;
}

/**
 * @public
 * @enum
 */
export const ImportMode = {
  FULL: "FULL",
  INCREMENTAL: "INCREMENTAL",
} as const;

/**
 * @public
 */
export type ImportMode = (typeof ImportMode)[keyof typeof ImportMode];

/**
 * @public
 */
export interface CreateDatasetImportJobRequest {
  /**
   * @public
   * <p>The name for the dataset import job. We recommend including the current timestamp in the
   *       name, for example, <code>20190721DatasetImport</code>. This can help you avoid getting a
   *         <code>ResourceAlreadyExistsException</code> exception.</p>
   */
  DatasetImportJobName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon Forecast dataset that you want to import data
   *       to.</p>
   */
  DatasetArn: string | undefined;

  /**
   * @public
   * <p>The location of the training data to import and an Identity and Access Management (IAM) role that Amazon Forecast
   *       can assume to access the data. The training data must be stored in an Amazon S3 bucket.</p>
   *          <p>If encryption is used, <code>DataSource</code> must include an Key Management Service (KMS) key and the
   *       IAM role must allow Amazon Forecast permission to access the key. The KMS key and IAM role must
   *       match those specified in the <code>EncryptionConfig</code> parameter of the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDataset.html">CreateDataset</a>
   *       operation.</p>
   */
  DataSource: DataSource | undefined;

  /**
   * @public
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

  /**
   * @public
   * <p>A single time zone for every item in your dataset. This option is ideal for datasets
   *             with all timestamps within a single time zone, or if all timestamps are normalized to a
   *             single time zone. </p>
   *          <p>Refer to the <a href="http://joda-time.sourceforge.net/timezones.html">Joda-Time
   *                 API</a> for a complete list of valid time zone names.</p>
   */
  TimeZone?: string;

  /**
   * @public
   * <p>Automatically derive time zone information from the geolocation attribute. This option
   *             is ideal for datasets that contain timestamps in multiple time zones and those
   *             timestamps are expressed in local time.</p>
   */
  UseGeolocationForTimeZone?: boolean;

  /**
   * @public
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
   */
  GeolocationFormat?: string;

  /**
   * @public
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
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The format of the imported data, CSV or PARQUET. The default value is CSV.</p>
   */
  Format?: string;

  /**
   * @public
   * <p>Specifies whether the dataset import job is a <code>FULL</code> or <code>INCREMENTAL</code> import. A <code>FULL</code> dataset import replaces all of the existing data with the newly imported data. An <code>INCREMENTAL</code> import appends the imported data to the existing data.</p>
   */
  ImportMode?: ImportMode;
}

/**
 * @public
 */
export interface CreateDatasetImportJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset import job.</p>
   */
  DatasetImportJobArn?: string;
}

/**
 * @public
 * @enum
 */
export const TimePointGranularity = {
  ALL: "ALL",
  SPECIFIC: "SPECIFIC",
} as const;

/**
 * @public
 */
export type TimePointGranularity = (typeof TimePointGranularity)[keyof typeof TimePointGranularity];

/**
 * @public
 * @enum
 */
export const TimeSeriesGranularity = {
  ALL: "ALL",
  SPECIFIC: "SPECIFIC",
} as const;

/**
 * @public
 */
export type TimeSeriesGranularity = (typeof TimeSeriesGranularity)[keyof typeof TimeSeriesGranularity];

/**
 * @public
 * <p>The ExplainabilityConfig data type defines the number of time series and time points
 *             included in <a>CreateExplainability</a>.</p>
 *          <p>If you provide a predictor ARN for <code>ResourceArn</code>, you must set both
 *                 <code>TimePointGranularity</code> and <code>TimeSeriesGranularity</code> to “ALL”.
 *             When creating Predictor Explainability, Amazon Forecast considers all time series and
 *             time points.</p>
 *          <p>If you provide a forecast ARN for <code>ResourceArn</code>, you can set
 *                 <code>TimePointGranularity</code> and <code>TimeSeriesGranularity</code> to either
 *             “ALL” or “Specific”.</p>
 */
export interface ExplainabilityConfig {
  /**
   * @public
   * <p>To create an Explainability for all time series in your datasets, use
   *             <code>ALL</code>. To create an Explainability for specific time series in your datasets,
   *             use <code>SPECIFIC</code>.</p>
   *          <p>Specify time series by uploading a CSV or Parquet file to an Amazon S3 bucket and set the location
   *             within the <a>DataDestination</a> data type.</p>
   */
  TimeSeriesGranularity: TimeSeriesGranularity | undefined;

  /**
   * @public
   * <p>To create an Explainability for all time points in your forecast horizon, use
   *                 <code>ALL</code>. To create an Explainability for specific time points in your
   *             forecast horizon, use <code>SPECIFIC</code>.</p>
   *          <p>Specify time points with the <code>StartDateTime</code> and <code>EndDateTime</code>
   *             parameters within the <a>CreateExplainability</a> operation.</p>
   */
  TimePointGranularity: TimePointGranularity | undefined;
}

/**
 * @public
 */
export interface CreateExplainabilityRequest {
  /**
   * @public
   * <p>A unique name for the Explainability.</p>
   */
  ExplainabilityName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the
   *             Explainability.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The configuration settings that define the granularity of time series and time points
   *             for the Explainability.</p>
   */
  ExplainabilityConfig: ExplainabilityConfig | undefined;

  /**
   * @public
   * <p>The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to
   *       access the data and, optionally, an Key Management Service (KMS) key.</p>
   */
  DataSource?: DataSource;

  /**
   * @public
   * <p>Defines the fields of a dataset.</p>
   */
  Schema?: Schema;

  /**
   * @public
   * <p>Create an Explainability visualization that is viewable within the Amazon Web Services console.</p>
   */
  EnableVisualization?: boolean;

  /**
   * @public
   * <p>If <code>TimePointGranularity</code> is set to <code>SPECIFIC</code>, define the first
   *             point for the Explainability.</p>
   *          <p>Use the following timestamp format: yyyy-MM-ddTHH:mm:ss (example:
   *             2015-01-01T20:00:00)</p>
   */
  StartDateTime?: string;

  /**
   * @public
   * <p>If <code>TimePointGranularity</code> is set to <code>SPECIFIC</code>, define the last
   *             time point for the Explainability.</p>
   *          <p>Use the following timestamp format: yyyy-MM-ddTHH:mm:ss (example:
   *             2015-01-01T20:00:00)</p>
   */
  EndDateTime?: string;

  /**
   * @public
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
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateExplainabilityResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Explainability.</p>
   */
  ExplainabilityArn?: string;
}

/**
 * @public
 * <p>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast
 *       to access the location, and an Key Management Service (KMS) key (optional). </p>
 */
export interface DataDestination {
  /**
   * @public
   * <p>The path to an Amazon Simple Storage Service (Amazon S3) bucket along with the credentials to access the
   *       bucket.</p>
   */
  S3Config: S3Config | undefined;
}

/**
 * @public
 */
export interface CreateExplainabilityExportRequest {
  /**
   * @public
   * <p>A unique name for the Explainability export.</p>
   */
  ExplainabilityExportName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Explainability to export.</p>
   */
  ExplainabilityArn: string | undefined;

  /**
   * @public
   * <p>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast
   *       to access the location, and an Key Management Service (KMS) key (optional). </p>
   */
  Destination: DataDestination | undefined;

  /**
   * @public
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
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The format of the exported data, CSV or PARQUET.</p>
   */
  Format?: string;
}

/**
 * @public
 */
export interface CreateExplainabilityExportResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the export.</p>
   */
  ExplainabilityExportArn?: string;
}

/**
 * @public
 * <p>Details about the import file that contains the time series for which you want to create forecasts.</p>
 */
export interface TimeSeriesIdentifiers {
  /**
   * @public
   * <p>The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to
   *       access the data and, optionally, an Key Management Service (KMS) key.</p>
   */
  DataSource?: DataSource;

  /**
   * @public
   * <p>Defines the fields of a dataset.</p>
   */
  Schema?: Schema;

  /**
   * @public
   * <p>The format of the data, either CSV or PARQUET.</p>
   */
  Format?: string;
}

/**
 * @public
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
 */
export interface TimeSeriesSelector {
  /**
   * @public
   * <p>Details about the import file that contains the time series for which you want to create forecasts.</p>
   */
  TimeSeriesIdentifiers?: TimeSeriesIdentifiers;
}

/**
 * @public
 */
export interface CreateForecastRequest {
  /**
   * @public
   * <p>A name for the forecast.</p>
   */
  ForecastName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the predictor to use to generate the forecast.</p>
   */
  PredictorArn: string | undefined;

  /**
   * @public
   * <p>The quantiles at which probabilistic forecasts are generated. <b>You
   *         can currently specify up to 5 quantiles per forecast</b>. Accepted values include
   *         <code>0.01 to 0.99</code> (increments of .01 only) and <code>mean</code>. The mean forecast
   *       is different from the median (0.50) when the distribution is not symmetric (for example, Beta
   *       and Negative Binomial).
   *       </p>
   *          <p>The default quantiles are the quantiles you specified during predictor creation.
   *       If you didn't specify quantiles, the default values are <code>["0.1", "0.5", "0.9"]</code>.
   *     </p>
   */
  ForecastTypes?: string[];

  /**
   * @public
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
   */
  Tags?: Tag[];

  /**
   * @public
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
   */
  TimeSeriesSelector?: TimeSeriesSelector;
}

/**
 * @public
 */
export interface CreateForecastResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the forecast.</p>
   */
  ForecastArn?: string;
}

/**
 * @public
 */
export interface CreateForecastExportJobRequest {
  /**
   * @public
   * <p>The name for the forecast export job.</p>
   */
  ForecastExportJobName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the forecast that you want to export.</p>
   */
  ForecastArn: string | undefined;

  /**
   * @public
   * <p>The location where you want to save the forecast and an Identity and Access Management (IAM) role that
   *       Amazon Forecast can assume to access the location. The forecast must be exported to an Amazon S3
   *       bucket.</p>
   *          <p>If encryption is used, <code>Destination</code> must include an Key Management Service (KMS) key. The
   *       IAM role must allow Amazon Forecast permission to access the key.</p>
   */
  Destination: DataDestination | undefined;

  /**
   * @public
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
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The format of the exported data, CSV or PARQUET. The default value is CSV.</p>
   */
  Format?: string;
}

/**
 * @public
 */
export interface CreateForecastExportJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the export job.</p>
   */
  ForecastExportJobArn?: string;
}

/**
 * @public
 */
export interface CreateMonitorRequest {
  /**
   * @public
   * <p>The name of the monitor resource.</p>
   */
  MonitorName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the predictor to monitor.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>A list of <a href="https://docs.aws.amazon.com/forecast/latest/dg/tagging-forecast-resources.html">tags</a> to apply to the monitor resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateMonitorResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitor resource.</p>
   */
  MonitorArn?: string;
}

/**
 * @public
 * @enum
 */
export const AutoMLOverrideStrategy = {
  AccuracyOptimized: "AccuracyOptimized",
  LatencyOptimized: "LatencyOptimized",
} as const;

/**
 * @public
 */
export type AutoMLOverrideStrategy = (typeof AutoMLOverrideStrategy)[keyof typeof AutoMLOverrideStrategy];

/**
 * @public
 * <p>Parameters that define how to split a dataset into training data and testing data, and the
 *       number of iterations to perform. These parameters are specified in the predefined algorithms
 *       but you can override them in the <a>CreatePredictor</a> request.</p>
 */
export interface EvaluationParameters {
  /**
   * @public
   * <p>The number of times to split the input data. The default is 1. Valid values are 1 through
   *       5.</p>
   */
  NumberOfBacktestWindows?: number;

  /**
   * @public
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
}

/**
 * @public
 * @enum
 */
export const FeaturizationMethodName = {
  filling: "filling",
} as const;

/**
 * @public
 */
export type FeaturizationMethodName = (typeof FeaturizationMethodName)[keyof typeof FeaturizationMethodName];

/**
 * @public
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
 */
export interface FeaturizationMethod {
  /**
   * @public
   * <p>The name of the method. The "filling" method is the only supported method.</p>
   */
  FeaturizationMethodName: FeaturizationMethodName | undefined;

  /**
   * @public
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
   */
  FeaturizationMethodParameters?: Record<string, string>;
}

/**
 * @public
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
 */
export interface Featurization {
  /**
   * @public
   * <p>The name of the schema attribute that specifies the data field to be featurized. Amazon
   *       Forecast supports the target field of the <code>TARGET_TIME_SERIES</code> and the
   *         <code>RELATED_TIME_SERIES</code> datasets. For example, for the <code>RETAIL</code> domain,
   *       the target is <code>demand</code>, and for the <code>CUSTOM</code> domain, the target is
   *         <code>target_value</code>. For more information, see <a>howitworks-missing-values</a>.</p>
   */
  AttributeName: string | undefined;

  /**
   * @public
   * <p>An array of one <code>FeaturizationMethod</code> object that specifies the feature
   *       transformation method.</p>
   */
  FeaturizationPipeline?: FeaturizationMethod[];
}

/**
 * @public
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
 */
export interface FeaturizationConfig {
  /**
   * @public
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
   */
  ForecastFrequency: string | undefined;

  /**
   * @public
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
   */
  ForecastDimensions?: string[];

  /**
   * @public
   * <p>An array of featurization (transformation) information for the fields of a dataset.</p>
   */
  Featurizations?: Featurization[];
}

/**
 * @public
 * <p>Specifies a categorical hyperparameter and it's range of tunable values.
 *       This object is part of the <a>ParameterRanges</a> object.</p>
 */
export interface CategoricalParameterRange {
  /**
   * @public
   * <p>The name of the categorical hyperparameter to tune.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A list of the tunable categories for the hyperparameter.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ScalingType = {
  Auto: "Auto",
  Linear: "Linear",
  Logarithmic: "Logarithmic",
  ReverseLogarithmic: "ReverseLogarithmic",
} as const;

/**
 * @public
 */
export type ScalingType = (typeof ScalingType)[keyof typeof ScalingType];

/**
 * @public
 * <p>Specifies a continuous hyperparameter and it's range of tunable values.
 *       This object is part of the <a>ParameterRanges</a> object.</p>
 */
export interface ContinuousParameterRange {
  /**
   * @public
   * <p>The name of the hyperparameter to tune.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The maximum tunable value of the hyperparameter.</p>
   */
  MaxValue: number | undefined;

  /**
   * @public
   * <p>The minimum tunable value of the hyperparameter.</p>
   */
  MinValue: number | undefined;

  /**
   * @public
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
  ScalingType?: ScalingType;
}

/**
 * @public
 * <p>Specifies an integer hyperparameter and it's range of tunable values.
 *       This object is part of the <a>ParameterRanges</a> object.</p>
 */
export interface IntegerParameterRange {
  /**
   * @public
   * <p>The name of the hyperparameter to tune.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The maximum tunable value of the hyperparameter.</p>
   */
  MaxValue: number | undefined;

  /**
   * @public
   * <p>The minimum tunable value of the hyperparameter.</p>
   */
  MinValue: number | undefined;

  /**
   * @public
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
  ScalingType?: ScalingType;
}

/**
 * @public
 * <p>Specifies the categorical, continuous, and integer hyperparameters, and their ranges of
 *       tunable values. The range of tunable values determines which values that a hyperparameter
 *       tuning job can choose for the specified hyperparameter. This object is part of the
 *       <a>HyperParameterTuningJobConfig</a> object.</p>
 */
export interface ParameterRanges {
  /**
   * @public
   * <p>Specifies the tunable range for each categorical hyperparameter.</p>
   */
  CategoricalParameterRanges?: CategoricalParameterRange[];

  /**
   * @public
   * <p>Specifies the tunable range for each continuous hyperparameter.</p>
   */
  ContinuousParameterRanges?: ContinuousParameterRange[];

  /**
   * @public
   * <p>Specifies the tunable range for each integer hyperparameter.</p>
   */
  IntegerParameterRanges?: IntegerParameterRange[];
}

/**
 * @public
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
  /**
   * @public
   * <p>Specifies the ranges of valid values for the hyperparameters.</p>
   */
  ParameterRanges?: ParameterRanges;
}

/**
 * @public
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
 */
export interface SupplementaryFeature {
  /**
   * @public
   * <p>The name of the feature. Valid values: <code>"holiday"</code> and
   *       <code>"weather"</code>.</p>
   */
  Name: string | undefined;

  /**
   * @public
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
   */
  Value: string | undefined;
}

/**
 * @public
 * <note>
 *             <p>This object belongs to the <a>CreatePredictor</a> operation. If you created
 *         your predictor with <a>CreateAutoPredictor</a>, see <a>DataConfig</a>.</p>
 *          </note>
 *          <p>The data used to train a predictor. The data includes a dataset group and any
 *       supplementary features. You specify this object in the <a>CreatePredictor</a>
 *       request.</p>
 */
export interface InputDataConfig {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   */
  DatasetGroupArn: string | undefined;

  /**
   * @public
   * <p>An array of supplementary features. The only supported feature is a holiday
   *       calendar.</p>
   */
  SupplementaryFeatures?: SupplementaryFeature[];
}

/**
 * @public
 */
export interface CreatePredictorRequest {
  /**
   * @public
   * <p>A name for the predictor.</p>
   */
  PredictorName: string | undefined;

  /**
   * @public
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
   */
  AlgorithmArn?: string;

  /**
   * @public
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
   * @public
   * <p>Specifies the forecast types used to train a predictor. You can specify up to five
   *       forecast types. Forecast types can be quantiles from 0.01 to 0.99, by increments of 0.01 or
   *       higher. You can also specify the mean forecast with <code>mean</code>. </p>
   *          <p>The default value is <code>["0.10", "0.50", "0.9"]</code>.</p>
   */
  ForecastTypes?: string[];

  /**
   * @public
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
   * @public
   * <note>
   *             <p> The <code>LatencyOptimized</code> AutoML override strategy is only available in private beta.
   *                 Contact Amazon Web Services Support or your account manager to learn more about access privileges.
   *             </p>
   *          </note>
   *          <p>Used to overide the default AutoML strategy, which is to optimize predictor accuracy.
   *             To apply an AutoML strategy that minimizes training time, use
   *                 <code>LatencyOptimized</code>.</p>
   *          <p>This parameter is only valid for predictors trained using AutoML.</p>
   */
  AutoMLOverrideStrategy?: AutoMLOverrideStrategy;

  /**
   * @public
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
   */
  PerformHPO?: boolean;

  /**
   * @public
   * <p>The hyperparameters to override for model training. The hyperparameters that you can
   *       override are listed in the individual algorithms. For the list of supported algorithms, see
   *         <a>aws-forecast-choosing-recipes</a>.</p>
   */
  TrainingParameters?: Record<string, string>;

  /**
   * @public
   * <p>Used to override the default evaluation parameters of the specified algorithm. Amazon Forecast
   *       evaluates a predictor by splitting a dataset into training data and testing data. The
   *       evaluation parameters define how to perform the split and the number of iterations.</p>
   */
  EvaluationParameters?: EvaluationParameters;

  /**
   * @public
   * <p>Provides hyperparameter override values for the algorithm. If you don't provide this
   *       parameter, Amazon Forecast uses default values. The individual algorithms specify which
   *       hyperparameters support hyperparameter optimization (HPO). For more information, see <a>aws-forecast-choosing-recipes</a>.</p>
   *          <p>If you included the <code>HPOConfig</code> object, you must set <code>PerformHPO</code> to
   *       true.</p>
   */
  HPOConfig?: HyperParameterTuningJobConfig;

  /**
   * @public
   * <p>Describes the dataset group that contains the data to use to train the predictor.</p>
   */
  InputDataConfig: InputDataConfig | undefined;

  /**
   * @public
   * <p>The featurization configuration.</p>
   */
  FeaturizationConfig: FeaturizationConfig | undefined;

  /**
   * @public
   * <p>An Key Management Service (KMS) key and the Identity and Access Management (IAM) role that Amazon Forecast can assume to access
   *       the key.</p>
   */
  EncryptionConfig?: EncryptionConfig;

  /**
   * @public
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
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The accuracy metric used to optimize the predictor.</p>
   */
  OptimizationMetric?: OptimizationMetric;
}

/**
 * @public
 */
export interface CreatePredictorResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the predictor.</p>
   */
  PredictorArn?: string;
}

/**
 * @public
 */
export interface CreatePredictorBacktestExportJobRequest {
  /**
   * @public
   * <p>The name for the backtest export job.</p>
   */
  PredictorBacktestExportJobName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the predictor that you want to export.</p>
   */
  PredictorArn: string | undefined;

  /**
   * @public
   * <p>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast
   *       to access the location, and an Key Management Service (KMS) key (optional). </p>
   */
  Destination: DataDestination | undefined;

  /**
   * @public
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
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The format of the exported data, CSV or PARQUET. The default value is CSV.</p>
   */
  Format?: string;
}

/**
 * @public
 */
export interface CreatePredictorBacktestExportJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the predictor backtest export job that you want to
   *             export.</p>
   */
  PredictorBacktestExportJobArn?: string;
}

/**
 * @public
 */
export interface CreateWhatIfAnalysisRequest {
  /**
   * @public
   * <p>The name of the what-if analysis. Each name must be unique.</p>
   */
  WhatIfAnalysisName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the baseline forecast.</p>
   */
  ForecastArn: string | undefined;

  /**
   * @public
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
   */
  TimeSeriesSelector?: TimeSeriesSelector;

  /**
   * @public
   * <p>A list of <a href="https://docs.aws.amazon.com/forecast/latest/dg/tagging-forecast-resources.html">tags</a> to apply to the what if forecast.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateWhatIfAnalysisResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the what-if analysis.</p>
   */
  WhatIfAnalysisArn?: string;
}

/**
 * @public
 * <p>A replacement dataset is a modified version of the baseline related time series that contains only the values
 *       that you want to include in a what-if forecast. The replacement dataset must contain the forecast dimensions and
 *       item identifiers in the baseline related time series as well as at least 1 changed time series. This dataset is
 *       merged with the baseline related time series to create a transformed dataset that is used for the what-if
 *       forecast.</p>
 */
export interface TimeSeriesReplacementsDataSource {
  /**
   * @public
   * <p>The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an Identity and Access Management (IAM) role that
   *       Amazon Forecast can assume to access the file(s). Optionally, includes an Key Management Service (KMS) key. This
   *       object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object.</p>
   */
  S3Config: S3Config | undefined;

  /**
   * @public
   * <p>Defines the fields of a dataset.</p>
   */
  Schema: Schema | undefined;

  /**
   * @public
   * <p>The format of the replacement data, CSV or PARQUET.</p>
   */
  Format?: string;

  /**
   * @public
   * <p>The timestamp format of the replacement data.</p>
   */
  TimestampFormat?: string;
}

/**
 * @public
 * @enum
 */
export const Condition = {
  EQUALS: "EQUALS",
  GREATER_THAN: "GREATER_THAN",
  LESS_THAN: "LESS_THAN",
  NOT_EQUALS: "NOT_EQUALS",
} as const;

/**
 * @public
 */
export type Condition = (typeof Condition)[keyof typeof Condition];

/**
 * @public
 * <p>Creates a subset of items within an attribute that are modified. For example, you can use this operation to create a subset of items that cost $5 or less. To do this, you specify <code>"AttributeName": "price"</code>, <code>"AttributeValue": "5"</code>, and <code>"Condition": "LESS_THAN"</code>. Pair this operation with the <a>Action</a> operation within the <a>CreateWhatIfForecastRequest$TimeSeriesTransformations</a> operation to define how the attribute is modified.</p>
 */
export interface TimeSeriesCondition {
  /**
   * @public
   * <p>The item_id, dimension name, IM name, or timestamp that you are modifying.</p>
   */
  AttributeName: string | undefined;

  /**
   * @public
   * <p>The value that is applied for the chosen <code>Condition</code>.</p>
   */
  AttributeValue: string | undefined;

  /**
   * @public
   * <p>The condition to apply. Valid values are <code>EQUALS</code>, <code>NOT_EQUALS</code>, <code>LESS_THAN</code> and
   *       <code>GREATER_THAN</code>.</p>
   */
  Condition: Condition | undefined;
}

/**
 * @public
 * <p>A transformation function is a pair of operations that select and modify the rows in a related time series. You select the rows that you want with a condition operation and you modify the rows with a transformation operation. All conditions are joined with an AND operation, meaning that all conditions must be true for the transformation to be applied. Transformations are applied in the order that they are listed.</p>
 */
export interface TimeSeriesTransformation {
  /**
   * @public
   * <p>An array of actions that define a time series and how it is transformed. These transformations create a new
   *       time series that is used for the what-if analysis.</p>
   */
  Action?: Action;

  /**
   * @public
   * <p>An array of conditions that define which members of the related time series are transformed.</p>
   */
  TimeSeriesConditions?: TimeSeriesCondition[];
}

/**
 * @public
 */
export interface CreateWhatIfForecastRequest {
  /**
   * @public
   * <p>The name of the what-if forecast. Names must be unique within each what-if analysis.</p>
   */
  WhatIfForecastName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the what-if analysis.</p>
   */
  WhatIfAnalysisArn: string | undefined;

  /**
   * @public
   * <p>The transformations that are applied to the baseline time series. Each transformation contains an action and a set of conditions. An action is applied only when all conditions are met. If no conditions are provided, the action is applied to all items.</p>
   */
  TimeSeriesTransformations?: TimeSeriesTransformation[];

  /**
   * @public
   * <p>The replacement time series dataset, which contains the rows that you want to change in the related time
   *       series dataset. A replacement time series does not need to contain all rows that are in the baseline related time
   *       series. Include only the rows (measure-dimension combinations) that you want to include in the what-if
   *       forecast.</p>
   *          <p>This dataset is merged with the
   *       original time series to create a transformed dataset that is used for the what-if analysis.</p>
   *          <p>This dataset should contain the items to modify (such as item_id or workforce_type), any relevant dimensions, the timestamp column, and at least one of the related time series columns. This file should not contain duplicate timestamps for the same time series.</p>
   *          <p>Timestamps and item_ids not included in this dataset are not included in the what-if analysis. </p>
   */
  TimeSeriesReplacementsDataSource?: TimeSeriesReplacementsDataSource;

  /**
   * @public
   * <p>A list of <a href="https://docs.aws.amazon.com/forecast/latest/dg/tagging-forecast-resources.html">tags</a> to apply to the what if forecast.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateWhatIfForecastResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the what-if forecast.</p>
   */
  WhatIfForecastArn?: string;
}

/**
 * @public
 */
export interface CreateWhatIfForecastExportRequest {
  /**
   * @public
   * <p>The name of the what-if forecast to export.</p>
   */
  WhatIfForecastExportName: string | undefined;

  /**
   * @public
   * <p>The list of what-if forecast Amazon Resource Names (ARNs) to export.</p>
   */
  WhatIfForecastArns: string[] | undefined;

  /**
   * @public
   * <p>The location where you want to save the forecast and an Identity and Access Management (IAM) role that
   *       Amazon Forecast can assume to access the location. The forecast must be exported to an Amazon S3
   *       bucket.</p>
   *          <p>If encryption is used, <code>Destination</code> must include an Key Management Service (KMS) key. The
   *       IAM role must allow Amazon Forecast permission to access the key.</p>
   */
  Destination: DataDestination | undefined;

  /**
   * @public
   * <p>A list of <a href="https://docs.aws.amazon.com/forecast/latest/dg/tagging-forecast-resources.html">tags</a> to apply to the what if forecast.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The format of the exported data, CSV or PARQUET.</p>
   */
  Format?: string;
}

/**
 * @public
 */
export interface CreateWhatIfForecastExportResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the what-if forecast.</p>
   */
  WhatIfForecastExportArn?: string;
}

/**
 * @public
 */
export interface DeleteDatasetRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset to delete.</p>
   */
  DatasetArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetGroupRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset group to delete.</p>
   */
  DatasetGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetImportJobRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset import job to delete.</p>
   */
  DatasetImportJobArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteExplainabilityRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Explainability resource to delete.</p>
   */
  ExplainabilityArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteExplainabilityExportRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Explainability export to delete. </p>
   */
  ExplainabilityExportArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteForecastRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the forecast to delete.</p>
   */
  ForecastArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteForecastExportJobRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the forecast export job to delete.</p>
   */
  ForecastExportJobArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteMonitorRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitor resource to delete.</p>
   */
  MonitorArn: string | undefined;
}

/**
 * @public
 */
export interface DeletePredictorRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the predictor to delete.</p>
   */
  PredictorArn: string | undefined;
}

/**
 * @public
 */
export interface DeletePredictorBacktestExportJobRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the predictor backtest export job to delete.</p>
   */
  PredictorBacktestExportJobArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourceTreeRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the parent resource to delete. All child resources
   *             of the parent resource will also be deleted.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteWhatIfAnalysisRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the what-if analysis that you want to delete.</p>
   */
  WhatIfAnalysisArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteWhatIfForecastRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the what-if forecast that you want to delete.</p>
   */
  WhatIfForecastArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteWhatIfForecastExportRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the what-if forecast export that you want to delete.</p>
   */
  WhatIfForecastExportArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeAutoPredictorRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the predictor.</p>
   */
  PredictorArn: string | undefined;
}

/**
 * @public
 * <p>Provides information about the Explainability resource.</p>
 */
export interface ExplainabilityInfo {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Explainability.</p>
   */
  ExplainabilityArn?: string;

  /**
   * @public
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
   */
  Status?: string;
}

/**
 * @public
 * <p>Provides information about the monitor resource.</p>
 */
export interface MonitorInfo {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitor resource.</p>
   */
  MonitorArn?: string;

  /**
   * @public
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
   */
  Status?: string;
}

/**
 * @public
 * @enum
 */
export const State = {
  Active: "Active",
  Deleted: "Deleted",
} as const;

/**
 * @public
 */
export type State = (typeof State)[keyof typeof State];

/**
 * @public
 * <p>Provides a summary of the reference predictor used when retraining or upgrading a
 *             predictor.</p>
 */
export interface ReferencePredictorSummary {
  /**
   * @public
   * <p>The ARN of the reference predictor.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Whether the reference predictor is <code>Active</code> or <code>Deleted</code>.</p>
   */
  State?: State;
}

/**
 * @public
 */
export interface DescribeAutoPredictorResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the predictor</p>
   */
  PredictorArn?: string;

  /**
   * @public
   * <p>The name of the predictor.</p>
   */
  PredictorName?: string;

  /**
   * @public
   * <p>The number of time-steps that the model predicts. The forecast horizon is also called
   *             the prediction length.</p>
   */
  ForecastHorizon?: number;

  /**
   * @public
   * <p>The forecast types used during predictor training. Default value is
   *             ["0.1","0.5","0.9"].</p>
   */
  ForecastTypes?: string[];

  /**
   * @public
   * <p>The frequency of predictions in a forecast.</p>
   *          <p>Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30
   *             minutes), 15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute).
   *             For example, "Y" indicates every year and "5min" indicates every five minutes.</p>
   */
  ForecastFrequency?: string;

  /**
   * @public
   * <p>An array of dimension (field) names that specify the attributes used to group your
   *             time series.</p>
   */
  ForecastDimensions?: string[];

  /**
   * @public
   * <p>An array of the ARNs of the dataset import jobs used to import training data for the
   *             predictor.</p>
   */
  DatasetImportJobArns?: string[];

  /**
   * @public
   * <p>The data configuration for your dataset group and any additional datasets.</p>
   */
  DataConfig?: DataConfig;

  /**
   * @public
   * <p>An Key Management Service (KMS) key and an Identity and Access Management (IAM) role that Amazon Forecast can assume to
   *       access the key. You can specify this optional object in the
   *       <a>CreateDataset</a> and <a>CreatePredictor</a> requests.</p>
   */
  EncryptionConfig?: EncryptionConfig;

  /**
   * @public
   * <p>The ARN and state of the reference predictor. This parameter is only valid for
   *             retrained or upgraded predictors.</p>
   */
  ReferencePredictorSummary?: ReferencePredictorSummary;

  /**
   * @public
   * <p>The estimated time remaining in minutes for the predictor training job to
   *             complete.</p>
   */
  EstimatedTimeRemainingInMinutes?: number;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>In the event of an error, a message detailing the cause of the error.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The timestamp of the CreateAutoPredictor request.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;

  /**
   * @public
   * <p>The accuracy metric used to optimize the predictor.</p>
   */
  OptimizationMetric?: OptimizationMetric;

  /**
   * @public
   * <p>Provides the status and ARN of the Predictor Explainability.</p>
   */
  ExplainabilityInfo?: ExplainabilityInfo;

  /**
   * @public
   * <p>A  object with the Amazon Resource Name (ARN) and status of the monitor resource.</p>
   */
  MonitorInfo?: MonitorInfo;

  /**
   * @public
   * <p>The time boundary Forecast uses when aggregating data.</p>
   */
  TimeAlignmentBoundary?: TimeAlignmentBoundary;
}

/**
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DatasetArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DatasetArn?: string;

  /**
   * @public
   * <p>The name of the dataset.</p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>The domain associated with the dataset.</p>
   */
  Domain?: Domain;

  /**
   * @public
   * <p>The dataset type.</p>
   */
  DatasetType?: DatasetType;

  /**
   * @public
   * <p>The frequency of data collection.</p>
   *          <p>Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30 minutes),
   *       15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute). For example,
   *       "M" indicates every month and "30min" indicates every 30 minutes.</p>
   */
  DataFrequency?: string;

  /**
   * @public
   * <p>An array of <code>SchemaAttribute</code> objects that specify the dataset fields. Each
   *         <code>SchemaAttribute</code> specifies the name and data type of a field.</p>
   */
  Schema?: Schema;

  /**
   * @public
   * <p>The Key Management Service (KMS) key and the Identity and Access Management (IAM) role that Amazon Forecast can assume to access
   *       the key.</p>
   */
  EncryptionConfig?: EncryptionConfig;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>When the dataset was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>When you create a dataset, <code>LastModificationTime</code> is the same as
   *         <code>CreationTime</code>. While data is being imported to the dataset,
   *         <code>LastModificationTime</code> is the current time of the <code>DescribeDataset</code>
   *       call. After a <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a>
   *       operation has finished, <code>LastModificationTime</code> is when the import job completed or
   *       failed.</p>
   */
  LastModificationTime?: Date;
}

/**
 * @public
 */
export interface DescribeDatasetGroupRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   */
  DatasetGroupArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetGroupResponse {
  /**
   * @public
   * <p>The name of the dataset group.</p>
   */
  DatasetGroupName?: string;

  /**
   * @public
   * <p>The ARN of the dataset group.</p>
   */
  DatasetGroupArn?: string;

  /**
   * @public
   * <p>An array of Amazon Resource Names (ARNs) of the datasets contained in the dataset
   *       group.</p>
   */
  DatasetArns?: string[];

  /**
   * @public
   * <p>The domain associated with the dataset group.</p>
   */
  Domain?: Domain;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>When the dataset group was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>When the dataset group was created or last updated from a call to the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation. While the dataset group is being updated,
   *         <code>LastModificationTime</code> is the current time of the
   *         <code>DescribeDatasetGroup</code> call.</p>
   */
  LastModificationTime?: Date;
}

/**
 * @public
 */
export interface DescribeDatasetImportJobRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset import job.</p>
   */
  DatasetImportJobArn: string | undefined;
}

/**
 * @public
 * <p>Provides statistics for each data field imported into to an Amazon Forecast dataset with
 *       the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation.</p>
 */
export interface Statistics {
  /**
   * @public
   * <p>The number of values in the field. If the response value is -1, refer to
   *         <code>CountLong</code>.</p>
   */
  Count?: number;

  /**
   * @public
   * <p>The number of distinct values in the field. If the response value is -1, refer to
   *         <code>CountDistinctLong</code>.</p>
   */
  CountDistinct?: number;

  /**
   * @public
   * <p>The number of null values in the field. If the response value is -1, refer to
   *         <code>CountNullLong</code>.</p>
   */
  CountNull?: number;

  /**
   * @public
   * <p>The number of NAN (not a number) values in the field. If the response value is -1, refer
   *       to <code>CountNanLong</code>.</p>
   */
  CountNan?: number;

  /**
   * @public
   * <p>For a numeric field, the minimum value in the field.</p>
   */
  Min?: string;

  /**
   * @public
   * <p>For a numeric field, the maximum value in the field.</p>
   */
  Max?: string;

  /**
   * @public
   * <p>For a numeric field, the average value in the field.</p>
   */
  Avg?: number;

  /**
   * @public
   * <p>For a numeric field, the standard deviation.</p>
   */
  Stddev?: number;

  /**
   * @public
   * <p>The number of values in the field. <code>CountLong</code> is used instead of
   *         <code>Count</code> if the value is greater than 2,147,483,647.</p>
   */
  CountLong?: number;

  /**
   * @public
   * <p>The number of distinct values in the field. <code>CountDistinctLong</code> is used instead
   *       of <code>CountDistinct</code> if the value is greater than 2,147,483,647.</p>
   */
  CountDistinctLong?: number;

  /**
   * @public
   * <p>The number of null values in the field. <code>CountNullLong</code> is used instead of
   *         <code>CountNull</code> if the value is greater than 2,147,483,647.</p>
   */
  CountNullLong?: number;

  /**
   * @public
   * <p>The number of NAN (not a number) values in the field. <code>CountNanLong</code> is used
   *       instead of <code>CountNan</code> if the value is greater than 2,147,483,647.</p>
   */
  CountNanLong?: number;
}

/**
 * @public
 */
export interface DescribeDatasetImportJobResponse {
  /**
   * @public
   * <p>The name of the dataset import job.</p>
   */
  DatasetImportJobName?: string;

  /**
   * @public
   * <p>The ARN of the dataset import job.</p>
   */
  DatasetImportJobArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset that the training data was imported
   *       to.</p>
   */
  DatasetArn?: string;

  /**
   * @public
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

  /**
   * @public
   * <p>The single time zone applied to every item in the dataset</p>
   */
  TimeZone?: string;

  /**
   * @public
   * <p>Whether <code>TimeZone</code> is automatically derived from the geolocation
   *             attribute.</p>
   */
  UseGeolocationForTimeZone?: boolean;

  /**
   * @public
   * <p>The format of the geolocation attribute. Valid Values:<code>"LAT_LONG"</code> and
   *                 <code>"CC_POSTALCODE"</code>.</p>
   */
  GeolocationFormat?: string;

  /**
   * @public
   * <p>The location of the training data to import and an Identity and Access Management (IAM) role that Amazon Forecast
   *       can assume to access the data.</p>
   *          <p>If encryption is used, <code>DataSource</code> includes an Key Management Service (KMS) key.</p>
   */
  DataSource?: DataSource;

  /**
   * @public
   * <p>The estimated time remaining in minutes for the dataset import job to complete.</p>
   */
  EstimatedTimeRemainingInMinutes?: number;

  /**
   * @public
   * <p>Statistical information about each field in the input data.</p>
   */
  FieldStatistics?: Record<string, Statistics>;

  /**
   * @public
   * <p>The size of the dataset in gigabytes (GB) after the import job has finished.</p>
   */
  DataSize?: number;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>When the dataset import job was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;

  /**
   * @public
   * <p>The format of the imported data, CSV or PARQUET.</p>
   */
  Format?: string;

  /**
   * @public
   * <p>The import mode of the dataset import job, FULL or INCREMENTAL.</p>
   */
  ImportMode?: ImportMode;
}

/**
 * @public
 */
export interface DescribeExplainabilityRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Explaianability to describe.</p>
   */
  ExplainabilityArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeExplainabilityResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Explainability.</p>
   */
  ExplainabilityArn?: string;

  /**
   * @public
   * <p>The name of the Explainability.</p>
   */
  ExplainabilityName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the
   *             Explainability resource.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The configuration settings that define the granularity of time series and time points
   *             for the Explainability.</p>
   */
  ExplainabilityConfig?: ExplainabilityConfig;

  /**
   * @public
   * <p>Whether the visualization was enabled for the Explainability resource.</p>
   */
  EnableVisualization?: boolean;

  /**
   * @public
   * <p>The source of your data, an Identity and Access Management (IAM) role that allows Amazon Forecast to
   *       access the data and, optionally, an Key Management Service (KMS) key.</p>
   */
  DataSource?: DataSource;

  /**
   * @public
   * <p>Defines the fields of a dataset.</p>
   */
  Schema?: Schema;

  /**
   * @public
   * <p>If <code>TimePointGranularity</code> is set to <code>SPECIFIC</code>, the first time
   *             point in the Explainability.</p>
   */
  StartDateTime?: string;

  /**
   * @public
   * <p>If <code>TimePointGranularity</code> is set to <code>SPECIFIC</code>, the last time
   *             point in the Explainability.</p>
   */
  EndDateTime?: string;

  /**
   * @public
   * <p>The estimated time remaining in minutes for the <a>CreateExplainability</a>
   *             job to complete.</p>
   */
  EstimatedTimeRemainingInMinutes?: number;

  /**
   * @public
   * <p>If an error occurred, a message about the error.</p>
   */
  Message?: string;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>When the Explainability resource was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;
}

/**
 * @public
 */
export interface DescribeExplainabilityExportRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Explainability export.</p>
   */
  ExplainabilityExportArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeExplainabilityExportResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Explainability export.</p>
   */
  ExplainabilityExportArn?: string;

  /**
   * @public
   * <p>The name of the Explainability export.</p>
   */
  ExplainabilityExportName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Explainability export.</p>
   */
  ExplainabilityArn?: string;

  /**
   * @public
   * <p>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast
   *       to access the location, and an Key Management Service (KMS) key (optional). </p>
   */
  Destination?: DataDestination;

  /**
   * @public
   * <p>Information about any errors that occurred during the export.</p>
   */
  Message?: string;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>When the Explainability export was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;

  /**
   * @public
   * <p>The format of the exported data, CSV or PARQUET.</p>
   */
  Format?: string;
}

/**
 * @public
 */
export interface DescribeForecastRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the forecast.</p>
   */
  ForecastArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeForecastResponse {
  /**
   * @public
   * <p>The forecast ARN as specified in the request.</p>
   */
  ForecastArn?: string;

  /**
   * @public
   * <p>The name of the forecast.</p>
   */
  ForecastName?: string;

  /**
   * @public
   * <p>The quantiles at which probabilistic forecasts were generated.</p>
   */
  ForecastTypes?: string[];

  /**
   * @public
   * <p>The ARN of the predictor used to generate the forecast.</p>
   */
  PredictorArn?: string;

  /**
   * @public
   * <p>The ARN of the dataset group that provided the data used to train the predictor.</p>
   */
  DatasetGroupArn?: string;

  /**
   * @public
   * <p>The estimated time remaining in minutes for the forecast job to complete.</p>
   */
  EstimatedTimeRemainingInMinutes?: number;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>When the forecast creation task was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;

  /**
   * @public
   * <p>The time series to include in the forecast.</p>
   */
  TimeSeriesSelector?: TimeSeriesSelector;
}

/**
 * @public
 */
export interface DescribeForecastExportJobRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the forecast export job.</p>
   */
  ForecastExportJobArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeForecastExportJobResponse {
  /**
   * @public
   * <p>The ARN of the forecast export job.</p>
   */
  ForecastExportJobArn?: string;

  /**
   * @public
   * <p>The name of the forecast export job.</p>
   */
  ForecastExportJobName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the exported forecast.</p>
   */
  ForecastArn?: string;

  /**
   * @public
   * <p>The path to the Amazon Simple Storage Service (Amazon S3) bucket where the forecast is exported.</p>
   */
  Destination?: DataDestination;

  /**
   * @public
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>When the forecast export job was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;

  /**
   * @public
   * <p>The format of the exported data, CSV or PARQUET.</p>
   */
  Format?: string;
}

/**
 * @public
 */
export interface DescribeMonitorRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitor resource to describe.</p>
   */
  MonitorArn: string | undefined;
}

/**
 * @public
 * <p>An individual metric that you can use for comparison as you evaluate your monitoring results.</p>
 */
export interface BaselineMetric {
  /**
   * @public
   * <p>The name of the metric.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The value for the metric.</p>
   */
  Value?: number;
}

/**
 * @public
 * <p>Metrics you can use as a baseline for comparison purposes. Use these metrics when you interpret monitoring results for an auto predictor.</p>
 */
export interface PredictorBaseline {
  /**
   * @public
   * <p>The initial <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">accuracy metrics</a> for the predictor. Use these metrics as a baseline for comparison purposes as you
   *          use your predictor and the metrics change.</p>
   */
  BaselineMetrics?: BaselineMetric[];
}

/**
 * @public
 * <p>Metrics you can use as a baseline for comparison purposes. Use these metrics when you interpret monitoring results for an auto predictor.</p>
 */
export interface Baseline {
  /**
   * @public
   * <p>The initial <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">accuracy metrics</a> for the predictor you are monitoring. Use these metrics as a baseline for comparison purposes as you
   *          use your predictor and the metrics change.</p>
   */
  PredictorBaseline?: PredictorBaseline;
}

/**
 * @public
 */
export interface DescribeMonitorResponse {
  /**
   * @public
   * <p>The name of the monitor.</p>
   */
  MonitorName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitor resource described.</p>
   */
  MonitorArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the auto predictor being monitored.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The status of the monitor resource.</p>
   */
  Status?: string;

  /**
   * @public
   * <p>The timestamp of the latest evaluation completed by the monitor.</p>
   */
  LastEvaluationTime?: Date;

  /**
   * @public
   * <p>The state of the monitor's latest evaluation.</p>
   */
  LastEvaluationState?: string;

  /**
   * @public
   * <p>Metrics you can use as a baseline for comparison purposes. Use these values you interpret monitoring results for an auto predictor.</p>
   */
  Baseline?: Baseline;

  /**
   * @public
   * <p>An error message, if any, for the monitor.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The timestamp for when the monitor resource was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The timestamp of the latest modification to the monitor.</p>
   */
  LastModificationTime?: Date;

  /**
   * @public
   * <p>The estimated number of minutes remaining before the monitor resource finishes its current evaluation.</p>
   */
  EstimatedEvaluationTimeRemainingInMinutes?: number;
}

/**
 * @public
 */
export interface DescribePredictorRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the predictor that you want information about.</p>
   */
  PredictorArn: string | undefined;
}

/**
 * @public
 * <p>The status, start time, and end time of a backtest, as well as a failure reason if
 *       applicable.</p>
 */
export interface TestWindowSummary {
  /**
   * @public
   * <p>The time at which the test began.</p>
   */
  TestWindowStart?: Date;

  /**
   * @public
   * <p>The time at which the test ended.</p>
   */
  TestWindowEnd?: Date;

  /**
   * @public
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
   * @public
   * <p>If the test failed, the reason why it failed.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>The algorithm used to perform a backtest and the status of those tests.</p>
 */
export interface PredictorExecution {
  /**
   * @public
   * <p>The ARN of the algorithm used to test the predictor.</p>
   */
  AlgorithmArn?: string;

  /**
   * @public
   * <p>An array of test windows used to evaluate the algorithm. The
   *         <code>NumberOfBacktestWindows</code> from the
   *       object determines the number of windows in the array.</p>
   */
  TestWindows?: TestWindowSummary[];
}

/**
 * @public
 * <p>Contains details on the backtests performed to evaluate the accuracy of the predictor. The
 *       tests are returned in descending order of accuracy, with the most accurate backtest appearing
 *       first. You specify the number of backtests to perform when you call the  operation.</p>
 */
export interface PredictorExecutionDetails {
  /**
   * @public
   * <p>An array of the backtests performed to evaluate the accuracy of the predictor against a
   *       particular algorithm. The <code>NumberOfBacktestWindows</code> from the  object determines the number of windows in the
   *       array.</p>
   */
  PredictorExecutions?: PredictorExecution[];
}

/**
 * @public
 */
export interface DescribePredictorResponse {
  /**
   * @public
   * <p>The ARN of the predictor.</p>
   */
  PredictorArn?: string;

  /**
   * @public
   * <p>The name of the predictor.</p>
   */
  PredictorName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the algorithm used for model training.</p>
   */
  AlgorithmArn?: string;

  /**
   * @public
   * <p>When <code>PerformAutoML</code> is specified, the ARN of the chosen algorithm.</p>
   */
  AutoMLAlgorithmArns?: string[];

  /**
   * @public
   * <p>The number of time-steps of the forecast. The forecast horizon is also called the
   *       prediction length.</p>
   */
  ForecastHorizon?: number;

  /**
   * @public
   * <p>The forecast types used during predictor training. Default value is
   *         <code>["0.1","0.5","0.9"]</code>
   *          </p>
   */
  ForecastTypes?: string[];

  /**
   * @public
   * <p>Whether the predictor is set to perform AutoML.</p>
   */
  PerformAutoML?: boolean;

  /**
   * @public
   * <note>
   *             <p> The <code>LatencyOptimized</code> AutoML override strategy is only available in private beta.
   *                 Contact Amazon Web Services Support or your account manager to learn more about access privileges.
   *             </p>
   *          </note>
   *          <p>The AutoML strategy used to train the predictor. Unless <code>LatencyOptimized</code>
   *             is specified, the AutoML strategy optimizes predictor accuracy.</p>
   *          <p>This parameter is only valid for predictors trained using AutoML.</p>
   */
  AutoMLOverrideStrategy?: AutoMLOverrideStrategy;

  /**
   * @public
   * <p>Whether the predictor is set to perform hyperparameter optimization (HPO).</p>
   */
  PerformHPO?: boolean;

  /**
   * @public
   * <p>The default training parameters or overrides selected during model training. When running
   *       AutoML or choosing HPO with CNN-QR or DeepAR+, the optimized values for the chosen
   *       hyperparameters are returned. For more information, see <a>aws-forecast-choosing-recipes</a>.</p>
   */
  TrainingParameters?: Record<string, string>;

  /**
   * @public
   * <p>Used to override the default evaluation parameters of the specified algorithm. Amazon Forecast
   *       evaluates a predictor by splitting a dataset into training data and testing data. The
   *       evaluation parameters define how to perform the split and the number of iterations.</p>
   */
  EvaluationParameters?: EvaluationParameters;

  /**
   * @public
   * <p>The hyperparameter override values for the algorithm.</p>
   */
  HPOConfig?: HyperParameterTuningJobConfig;

  /**
   * @public
   * <p>Describes the dataset group that contains the data to use to train the predictor.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * @public
   * <p>The featurization configuration.</p>
   */
  FeaturizationConfig?: FeaturizationConfig;

  /**
   * @public
   * <p>An Key Management Service (KMS) key and the Identity and Access Management (IAM) role that Amazon Forecast can assume to access
   *       the key.</p>
   */
  EncryptionConfig?: EncryptionConfig;

  /**
   * @public
   * <p>Details on the the status and results of the backtests performed to evaluate the accuracy
   *       of the predictor. You specify the number of backtests to perform when you call the  operation.</p>
   */
  PredictorExecutionDetails?: PredictorExecutionDetails;

  /**
   * @public
   * <p>The estimated time remaining in minutes for the predictor training job to complete.</p>
   */
  EstimatedTimeRemainingInMinutes?: number;

  /**
   * @public
   * <p>Whether the predictor was created with <a>CreateAutoPredictor</a>.</p>
   */
  IsAutoPredictor?: boolean;

  /**
   * @public
   * <p>An array of the ARNs of the dataset import jobs used to import training data for the
   *       predictor.</p>
   */
  DatasetImportJobArns?: string[];

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>When the model training task was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;

  /**
   * @public
   * <p>The accuracy metric used to optimize the predictor.</p>
   */
  OptimizationMetric?: OptimizationMetric;
}

/**
 * @public
 */
export interface DescribePredictorBacktestExportJobRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the predictor backtest export job.</p>
   */
  PredictorBacktestExportJobArn: string | undefined;
}

/**
 * @public
 */
export interface DescribePredictorBacktestExportJobResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the predictor backtest export job.</p>
   */
  PredictorBacktestExportJobArn?: string;

  /**
   * @public
   * <p>The name of the predictor backtest export job.</p>
   */
  PredictorBacktestExportJobName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the predictor.</p>
   */
  PredictorArn?: string;

  /**
   * @public
   * <p>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast
   *       to access the location, and an Key Management Service (KMS) key (optional). </p>
   */
  Destination?: DataDestination;

  /**
   * @public
   * <p>Information about any errors that may have occurred during the backtest export.</p>
   */
  Message?: string;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>When the predictor backtest export job was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;

  /**
   * @public
   * <p>The format of the exported data, CSV or PARQUET.</p>
   */
  Format?: string;
}

/**
 * @public
 */
export interface DescribeWhatIfAnalysisRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the what-if analysis that you are interested in.</p>
   */
  WhatIfAnalysisArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeWhatIfAnalysisResponse {
  /**
   * @public
   * <p>The name of the what-if analysis.</p>
   */
  WhatIfAnalysisName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the what-if analysis.</p>
   */
  WhatIfAnalysisArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the what-if forecast.</p>
   */
  ForecastArn?: string;

  /**
   * @public
   * <p>The approximate time remaining to complete the what-if analysis, in minutes.</p>
   */
  EstimatedTimeRemainingInMinutes?: number;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>When the what-if analysis was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;

  /**
   * @public
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
   */
  TimeSeriesSelector?: TimeSeriesSelector;
}

/**
 * @public
 */
export interface DescribeWhatIfForecastRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the what-if forecast that you are interested in.</p>
   */
  WhatIfForecastArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeWhatIfForecastResponse {
  /**
   * @public
   * <p>The name of the what-if forecast.</p>
   */
  WhatIfForecastName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the what-if forecast.</p>
   */
  WhatIfForecastArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the what-if analysis that contains this forecast.</p>
   */
  WhatIfAnalysisArn?: string;

  /**
   * @public
   * <p>The approximate time remaining to complete the what-if forecast, in minutes.</p>
   */
  EstimatedTimeRemainingInMinutes?: number;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>When the what-if forecast was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;

  /**
   * @public
   * <p>An array of <code>Action</code> and <code>TimeSeriesConditions</code> elements that describe what transformations were applied to which time series.</p>
   */
  TimeSeriesTransformations?: TimeSeriesTransformation[];

  /**
   * @public
   * <p>An array of <code>S3Config</code>, <code>Schema</code>, and <code>Format</code> elements that describe the replacement time series.</p>
   */
  TimeSeriesReplacementsDataSource?: TimeSeriesReplacementsDataSource;

  /**
   * @public
   * <p>The quantiles at which probabilistic forecasts are generated. You can specify up to five quantiles per what-if
   *       forecast in the <a>CreateWhatIfForecast</a> operation. If you didn't specify quantiles, the default
   *       values are <code>["0.1", "0.5", "0.9"]</code>. </p>
   */
  ForecastTypes?: string[];
}

/**
 * @public
 */
export interface DescribeWhatIfForecastExportRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the what-if forecast export that you are interested in.</p>
   */
  WhatIfForecastExportArn: string | undefined;
}

/**
 * @public
 */
export interface DescribeWhatIfForecastExportResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the what-if forecast export.</p>
   */
  WhatIfForecastExportArn?: string;

  /**
   * @public
   * <p>The name of the what-if forecast export.</p>
   */
  WhatIfForecastExportName?: string;

  /**
   * @public
   * <p>An array of Amazon Resource Names (ARNs) that represent all of the what-if forecasts exported in this
   *       resource.</p>
   */
  WhatIfForecastArns?: string[];

  /**
   * @public
   * <p>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast
   *       to access the location, and an Key Management Service (KMS) key (optional). </p>
   */
  Destination?: DataDestination;

  /**
   * @public
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>When the what-if forecast export was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The approximate time remaining to complete the what-if forecast export, in minutes.</p>
   */
  EstimatedTimeRemainingInMinutes?: number;

  /**
   * @public
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
   */
  LastModificationTime?: Date;

  /**
   * @public
   * <p>The format of the exported data, CSV or PARQUET.</p>
   */
  Format?: string;
}

/**
 * @public
 */
export interface GetAccuracyMetricsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the predictor to get metrics for.</p>
   */
  PredictorArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EvaluationType = {
  COMPUTED: "COMPUTED",
  SUMMARY: "SUMMARY",
} as const;

/**
 * @public
 */
export type EvaluationType = (typeof EvaluationType)[keyof typeof EvaluationType];

/**
 * @public
 * <p> Provides detailed error metrics to evaluate the performance of a predictor. This object
 *       is part of the <a>Metrics</a> object. </p>
 */
export interface ErrorMetric {
  /**
   * @public
   * <p> The Forecast type used to compute WAPE, MAPE, MASE, and RMSE. </p>
   */
  ForecastType?: string;

  /**
   * @public
   * <p> The weighted absolute percentage error (WAPE). </p>
   */
  WAPE?: number;

  /**
   * @public
   * <p> The root-mean-square error (RMSE). </p>
   */
  RMSE?: number;

  /**
   * @public
   * <p>The Mean Absolute Scaled Error (MASE)</p>
   */
  MASE?: number;

  /**
   * @public
   * <p>The Mean Absolute Percentage Error (MAPE)</p>
   */
  MAPE?: number;
}

/**
 * @public
 * <p>The weighted loss value for a quantile. This object is part of the <a>Metrics</a> object.</p>
 */
export interface WeightedQuantileLoss {
  /**
   * @public
   * <p>The quantile. Quantiles divide a probability distribution into regions of equal
   *       probability. For example, if the distribution was divided into 5 regions of equal probability,
   *       the quantiles would be 0.2, 0.4, 0.6, and 0.8.</p>
   */
  Quantile?: number;

  /**
   * @public
   * <p>The difference between the predicted value and the actual value over the quantile,
   *       weighted (normalized) by dividing by the sum over all quantiles.</p>
   */
  LossValue?: number;
}

/**
 * @public
 * <p>Provides metrics that are used to evaluate the performance of a predictor. This object is
 *       part of the <a>WindowSummary</a> object.</p>
 */
export interface Metrics {
  /**
   * @public
   * @deprecated
   *
   * <p>The root-mean-square error (RMSE).</p>
   */
  RMSE?: number;

  /**
   * @public
   * <p>An array of weighted quantile losses. Quantiles divide a probability distribution into
   *       regions of equal probability. The distribution in this case is the loss function.</p>
   */
  WeightedQuantileLosses?: WeightedQuantileLoss[];

  /**
   * @public
   * <p> Provides detailed error metrics for each forecast type. Metrics include root-mean
   *       square-error (RMSE), mean absolute percentage error (MAPE), mean absolute scaled error (MASE),
   *       and weighted average percentage error (WAPE). </p>
   */
  ErrorMetrics?: ErrorMetric[];

  /**
   * @public
   * <p>The average value of all weighted quantile losses.</p>
   */
  AverageWeightedQuantileLoss?: number;
}

/**
 * @public
 * <p>The metrics for a time range within the evaluation portion of a dataset. This object is
 *       part of the <a>EvaluationResult</a> object.</p>
 *          <p>The <code>TestWindowStart</code> and <code>TestWindowEnd</code> parameters are determined
 *       by the <code>BackTestWindowOffset</code> parameter of the <a>EvaluationParameters</a> object.</p>
 */
export interface WindowSummary {
  /**
   * @public
   * <p>The timestamp that defines the start of the window.</p>
   */
  TestWindowStart?: Date;

  /**
   * @public
   * <p>The timestamp that defines the end of the window.</p>
   */
  TestWindowEnd?: Date;

  /**
   * @public
   * <p>The number of data points within the window.</p>
   */
  ItemCount?: number;

  /**
   * @public
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
  EvaluationType?: EvaluationType;

  /**
   * @public
   * <p>Provides metrics used to evaluate the performance of a predictor.</p>
   */
  Metrics?: Metrics;
}

/**
 * @public
 * <p>The results of evaluating an algorithm. Returned as part of the <a>GetAccuracyMetrics</a> response.</p>
 */
export interface EvaluationResult {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the algorithm that was evaluated.</p>
   */
  AlgorithmArn?: string;

  /**
   * @public
   * <p>The array of test windows used for evaluating the algorithm. The
   *         <code>NumberOfBacktestWindows</code> from the <a>EvaluationParameters</a> object
   *       determines the number of windows in the array.</p>
   */
  TestWindows?: WindowSummary[];
}

/**
 * @public
 */
export interface GetAccuracyMetricsResponse {
  /**
   * @public
   * <p>An array of results from evaluating the predictor.</p>
   */
  PredictorEvaluationResults?: EvaluationResult[];

  /**
   * @public
   * <p>Whether the predictor was created with <a>CreateAutoPredictor</a>.</p>
   */
  IsAutoPredictor?: boolean;

  /**
   * @public
   * <note>
   *             <p> The <code>LatencyOptimized</code> AutoML override strategy is only available in private beta.
   *                 Contact Amazon Web Services Support or your account manager to learn more about access privileges.
   *             </p>
   *          </note>
   *          <p>The AutoML strategy used to train the predictor. Unless <code>LatencyOptimized</code>
   *             is specified, the AutoML strategy optimizes predictor accuracy.</p>
   *          <p>This parameter is only valid for predictors trained using AutoML.</p>
   */
  AutoMLOverrideStrategy?: AutoMLOverrideStrategy;

  /**
   * @public
   * <p>The accuracy metric used to optimize the predictor.</p>
   */
  OptimizationMetric?: OptimizationMetric;
}

/**
 * @public
 * <p>The token is not valid. Tokens expire after 24 hours.</p>
 */
export class InvalidNextTokenException extends __BaseException {
  readonly name: "InvalidNextTokenException" = "InvalidNextTokenException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextTokenException, __BaseException>) {
    super({
      name: "InvalidNextTokenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextTokenException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListDatasetGroupsRequest {
  /**
   * @public
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Provides a summary of the dataset group properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetGroups.html">ListDatasetGroups</a> operation. To
 *       get the complete set of properties, call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetGroup.html">DescribeDatasetGroup</a>
 *       operation, and provide the <code>DatasetGroupArn</code>.</p>
 */
export interface DatasetGroupSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   */
  DatasetGroupArn?: string;

  /**
   * @public
   * <p>The name of the dataset group.</p>
   */
  DatasetGroupName?: string;

  /**
   * @public
   * <p>When the dataset group was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>When the dataset group was created or last updated from a call to the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_UpdateDatasetGroup.html">UpdateDatasetGroup</a> operation. While the dataset group is being updated,
   *         <code>LastModificationTime</code> is the current time of the <code>ListDatasetGroups</code>
   *       call.</p>
   */
  LastModificationTime?: Date;
}

/**
 * @public
 */
export interface ListDatasetGroupsResponse {
  /**
   * @public
   * <p>An array of objects that summarize each dataset group's properties.</p>
   */
  DatasetGroups?: DatasetGroupSummary[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const FilterConditionString = {
  IS: "IS",
  IS_NOT: "IS_NOT",
} as const;

/**
 * @public
 */
export type FilterConditionString = (typeof FilterConditionString)[keyof typeof FilterConditionString];

/**
 * @public
 * <p>Describes a filter for choosing a subset of objects. Each filter consists of a
 *       condition and a match statement. The condition is either <code>IS</code> or
 *       <code>IS_NOT</code>, which specifies whether to include or exclude
 *       the objects that match the statement, respectively. The match statement consists of a key and a
 *       value.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>The name of the parameter to filter on.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value to match.</p>
   */
  Value: string | undefined;

  /**
   * @public
   * <p>The condition to apply. To include the objects that match the statement, specify
   *       <code>IS</code>. To exclude matching objects, specify <code>IS_NOT</code>.</p>
   */
  Condition: FilterConditionString | undefined;
}

/**
 * @public
 */
export interface ListDatasetImportJobsRequest {
  /**
   * @public
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   */
  Filters?: Filter[];
}

/**
 * @public
 * <p>Provides a summary of the dataset import job properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasetImportJobs.html">ListDatasetImportJobs</a> operation. To get the complete set of properties, call the
 *         <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDatasetImportJob.html">DescribeDatasetImportJob</a> operation, and provide the
 *         <code>DatasetImportJobArn</code>.</p>
 */
export interface DatasetImportJobSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset import job.</p>
   */
  DatasetImportJobArn?: string;

  /**
   * @public
   * <p>The name of the dataset import job.</p>
   */
  DatasetImportJobName?: string;

  /**
   * @public
   * <p>The location of the training data to import and an Identity and Access Management (IAM) role that Amazon Forecast
   *       can assume to access the data. The training data must be stored in an Amazon S3 bucket.</p>
   *          <p>If encryption is used, <code>DataSource</code> includes an Key Management Service (KMS) key.</p>
   */
  DataSource?: DataSource;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>When the dataset import job was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;

  /**
   * @public
   * <p>The import mode of the dataset import job, FULL or INCREMENTAL.</p>
   */
  ImportMode?: ImportMode;
}

/**
 * @public
 */
export interface ListDatasetImportJobsResponse {
  /**
   * @public
   * <p>An array of objects that summarize each dataset import job's properties.</p>
   */
  DatasetImportJobs?: DatasetImportJobSummary[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * @public
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Provides a summary of the dataset properties used in the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_ListDatasets.html">ListDatasets</a> operation. To get the
 *       complete set of properties, call the <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_DescribeDataset.html">DescribeDataset</a> operation, and
 *       provide the <code>DatasetArn</code>.</p>
 */
export interface DatasetSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DatasetArn?: string;

  /**
   * @public
   * <p>The name of the dataset.</p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>The dataset type.</p>
   */
  DatasetType?: DatasetType;

  /**
   * @public
   * <p>The domain associated with the dataset.</p>
   */
  Domain?: Domain;

  /**
   * @public
   * <p>When the dataset was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>When you create a dataset, <code>LastModificationTime</code> is the same as
   *         <code>CreationTime</code>. While data is being imported to the dataset,
   *         <code>LastModificationTime</code> is the current time of the <code>ListDatasets</code> call.
   *       After a <a href="https://docs.aws.amazon.com/forecast/latest/dg/API_CreateDatasetImportJob.html">CreateDatasetImportJob</a> operation has finished, <code>LastModificationTime</code> is
   *       when the import job completed or failed.</p>
   */
  LastModificationTime?: Date;
}

/**
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * @public
   * <p>An array of objects that summarize each dataset's properties.</p>
   */
  Datasets?: DatasetSummary[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListExplainabilitiesRequest {
  /**
   * @public
   * <p>If the result of the previous request was truncated, the response includes a
   *             NextToken. To retrieve the next set of results, use the token in the next request.
   *             Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of items returned in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   */
  Filters?: Filter[];
}

/**
 * @public
 * <p>Provides a summary of the Explainability properties used in the <a>ListExplainabilities</a> operation. To get a complete set of properties,
 *             call the <a>DescribeExplainability</a> operation, and provide the listed
 *                 <code>ExplainabilityArn</code>.</p>
 */
export interface ExplainabilitySummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Explainability.</p>
   */
  ExplainabilityArn?: string;

  /**
   * @public
   * <p>The name of the Explainability.</p>
   */
  ExplainabilityName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Predictor or Forecast used to create the
   *             Explainability.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The configuration settings that define the granularity of time series and time points
   *             for the Explainability.</p>
   */
  ExplainabilityConfig?: ExplainabilityConfig;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>Information about any errors that may have occurred during the Explainability creation
   *             process.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>When the Explainability was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;
}

/**
 * @public
 */
export interface ListExplainabilitiesResponse {
  /**
   * @public
   * <p>An array of objects that summarize the properties of each Explainability
   *             resource.</p>
   */
  Explainabilities?: ExplainabilitySummary[];

  /**
   * @public
   * <p>Returns this token if the response is truncated. To retrieve the next set of results,
   *             use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListExplainabilityExportsRequest {
  /**
   * @public
   * <p>If the result of the previous request was truncated, the response includes a
   *             NextToken. To retrieve the next set of results, use the token in the next request.
   *             Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   */
  Filters?: Filter[];
}

/**
 * @public
 * <p>Provides a summary of the Explainability export properties used in the <a>ListExplainabilityExports</a> operation. To get a complete set of
 *             properties, call the <a>DescribeExplainabilityExport</a> operation, and
 *             provide the <code>ExplainabilityExportArn</code>.</p>
 */
export interface ExplainabilityExportSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Explainability export.</p>
   */
  ExplainabilityExportArn?: string;

  /**
   * @public
   * <p>The name of the Explainability export</p>
   */
  ExplainabilityExportName?: string;

  /**
   * @public
   * <p>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast
   *       to access the location, and an Key Management Service (KMS) key (optional). </p>
   */
  Destination?: DataDestination;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>Information about any errors that may have occurred during the Explainability
   *             export.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>When the Explainability was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;
}

/**
 * @public
 */
export interface ListExplainabilityExportsResponse {
  /**
   * @public
   * <p>An array of objects that summarize the properties of each Explainability
   *             export.</p>
   */
  ExplainabilityExports?: ExplainabilityExportSummary[];

  /**
   * @public
   * <p>Returns this token if the response is truncated. To retrieve the next set of results,
   *             use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListForecastExportJobsRequest {
  /**
   * @public
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   */
  Filters?: Filter[];
}

/**
 * @public
 * <p>Provides a summary of the forecast export job properties used in the <a>ListForecastExportJobs</a> operation. To get the complete set of properties, call
 *       the <a>DescribeForecastExportJob</a> operation, and provide the listed
 *         <code>ForecastExportJobArn</code>.</p>
 */
export interface ForecastExportJobSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the forecast export job.</p>
   */
  ForecastExportJobArn?: string;

  /**
   * @public
   * <p>The name of the forecast export job.</p>
   */
  ForecastExportJobName?: string;

  /**
   * @public
   * <p>The path to the Amazon Simple Storage Service (Amazon S3) bucket where the forecast is exported.</p>
   */
  Destination?: DataDestination;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>When the forecast export job was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;
}

/**
 * @public
 */
export interface ListForecastExportJobsResponse {
  /**
   * @public
   * <p>An array of objects that summarize each export job's properties.</p>
   */
  ForecastExportJobs?: ForecastExportJobSummary[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListForecastsRequest {
  /**
   * @public
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   */
  Filters?: Filter[];
}

/**
 * @public
 * <p>Provides a summary of the forecast properties used in the <a>ListForecasts</a>
 *       operation. To get the complete set of properties, call the <a>DescribeForecast</a>
 *       operation, and provide the <code>ForecastArn</code> that is listed in the summary.</p>
 */
export interface ForecastSummary {
  /**
   * @public
   * <p>The ARN of the forecast.</p>
   */
  ForecastArn?: string;

  /**
   * @public
   * <p>The name of the forecast.</p>
   */
  ForecastName?: string;

  /**
   * @public
   * <p>The ARN of the predictor used to generate the forecast.</p>
   */
  PredictorArn?: string;

  /**
   * @public
   * <p>Whether the Forecast was created from an AutoPredictor.</p>
   */
  CreatedUsingAutoPredictor?: boolean;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset group that provided the data used to train
   *       the predictor.</p>
   */
  DatasetGroupArn?: string;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>When the forecast creation task was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;
}

/**
 * @public
 */
export interface ListForecastsResponse {
  /**
   * @public
   * <p>An array of objects that summarize each forecast's properties.</p>
   */
  Forecasts?: ForecastSummary[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set
   *       of results, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMonitorEvaluationsRequest {
  /**
   * @public
   * <p>If the result of the previous request was truncated, the response includes a
   *          <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *          request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of monitoring results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitor resource to get results from.</p>
   */
  MonitorArn: string | undefined;

  /**
   * @public
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
   */
  Filters?: Filter[];
}

/**
 * @public
 * <p>An individual metric Forecast calculated when monitoring predictor usage. You can compare the value for this metric to the metric's value in the <a>Baseline</a> to see how your predictor's performance is changing.</p>
 *          <p>For more information about metrics generated by Forecast see <a href="https://docs.aws.amazon.com/forecast/latest/dg/metrics.html">Evaluating Predictor Accuracy</a>
 *          </p>
 */
export interface MetricResult {
  /**
   * @public
   * <p>The name of the metric.</p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>The value for the metric.</p>
   */
  MetricValue?: number;
}

/**
 * @public
 * <p>The source of the data the monitor used during the evaluation.</p>
 */
export interface MonitorDataSource {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset import job used to import the data that initiated the monitor evaluation.</p>
   */
  DatasetImportJobArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the forecast the monitor used during the evaluation.</p>
   */
  ForecastArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the predictor resource you are monitoring.</p>
   */
  PredictorArn?: string;
}

/**
 * @public
 * <p>Provides details about a predictor event, such as a retraining.</p>
 */
export interface PredictorEvent {
  /**
   * @public
   * <p>The type of event. For example, <code>Retrain</code>. A retraining event denotes the timepoint when a predictor was retrained. Any monitor results from before the <code>Datetime</code> are from the previous predictor. Any new metrics are for the newly retrained predictor.</p>
   */
  Detail?: string;

  /**
   * @public
   * <p>The timestamp for when the event occurred.</p>
   */
  Datetime?: Date;
}

/**
 * @public
 * <p>Describes the results of a monitor evaluation.</p>
 */
export interface PredictorMonitorEvaluation {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource to monitor.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitor resource.</p>
   */
  MonitorArn?: string;

  /**
   * @public
   * <p>The timestamp that indicates when the monitor evaluation was started. </p>
   */
  EvaluationTime?: Date;

  /**
   * @public
   * <p>The status of the monitor evaluation. The state can be <code>SUCCESS</code> or <code>FAILURE</code>.</p>
   */
  EvaluationState?: string;

  /**
   * @public
   * <p>The timestamp that indicates the start of the window that is used for monitor evaluation.</p>
   */
  WindowStartDatetime?: Date;

  /**
   * @public
   * <p>The timestamp that indicates the end of the window that is used for monitor evaluation.</p>
   */
  WindowEndDatetime?: Date;

  /**
   * @public
   * <p>Provides details about a predictor event, such as a retraining.</p>
   */
  PredictorEvent?: PredictorEvent;

  /**
   * @public
   * <p>The source of the data the monitor resource used during the evaluation.</p>
   */
  MonitorDataSource?: MonitorDataSource;

  /**
   * @public
   * <p>A list of metrics Forecast calculated when monitoring a predictor. You can compare the value for each metric in the list to the metric's value in the <a>Baseline</a> to see how your predictor's performance is changing.</p>
   */
  MetricResults?: MetricResult[];

  /**
   * @public
   * <p>The number of items considered during the evaluation.</p>
   */
  NumItemsEvaluated?: number;

  /**
   * @public
   * <p>Information about any errors that may have occurred during the monitor evaluation.</p>
   */
  Message?: string;
}

/**
 * @public
 */
export interface ListMonitorEvaluationsResponse {
  /**
   * @public
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *          results, use the token in the next request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The monitoring results and predictor events collected by the monitor resource during different windows of time.</p>
   *          <p>For information about monitoring see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html">Viewing Monitoring Results</a>. For more information about retrieving monitoring results see <a href="https://docs.aws.amazon.com/forecast/latest/dg/predictor-monitoring-results.html">Viewing Monitoring Results</a>.</p>
   */
  PredictorMonitorEvaluations?: PredictorMonitorEvaluation[];
}

/**
 * @public
 */
export interface ListMonitorsRequest {
  /**
   * @public
   * <p>If the result of the previous request was truncated, the response includes a
   *          <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *          request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of monitors to include in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   */
  Filters?: Filter[];
}

/**
 * @public
 * <p>Provides a summary of the monitor properties used in the <a>ListMonitors</a> operation. To get a complete set of properties,
 *          call the <a>DescribeMonitor</a> operation, and provide the listed
 *          <code>MonitorArn</code>.</p>
 */
export interface MonitorSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitor resource.</p>
   */
  MonitorArn?: string;

  /**
   * @public
   * <p>The name of the monitor resource.</p>
   */
  MonitorName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the predictor being monitored.</p>
   */
  ResourceArn?: string;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>When the monitor resource was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;
}

/**
 * @public
 */
export interface ListMonitorsResponse {
  /**
   * @public
   * <p>An array of objects that summarize each monitor's properties.</p>
   */
  Monitors?: MonitorSummary[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *          results, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPredictorBacktestExportJobsRequest {
  /**
   * @public
   * <p>If the result of the previous request was truncated, the response includes a
   *             NextToken. To retrieve the next set of results, use the token in the next request.
   *             Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   */
  Filters?: Filter[];
}

/**
 * @public
 * <p>Provides a summary of the predictor backtest export job properties used in the <a>ListPredictorBacktestExportJobs</a> operation. To get a complete set of
 *             properties, call the <a>DescribePredictorBacktestExportJob</a> operation, and
 *             provide the listed <code>PredictorBacktestExportJobArn</code>.</p>
 */
export interface PredictorBacktestExportJobSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the predictor backtest export job.</p>
   */
  PredictorBacktestExportJobArn?: string;

  /**
   * @public
   * <p>The name of the predictor backtest export job.</p>
   */
  PredictorBacktestExportJobName?: string;

  /**
   * @public
   * <p>The destination for an export job. Provide an S3 path, an Identity and Access Management (IAM) role that allows Amazon Forecast
   *       to access the location, and an Key Management Service (KMS) key (optional). </p>
   */
  Destination?: DataDestination;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>Information about any errors that may have occurred during the backtest export.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>When the predictor backtest export job was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;
}

/**
 * @public
 */
export interface ListPredictorBacktestExportJobsResponse {
  /**
   * @public
   * <p>An array of objects that summarize the properties of each predictor backtest export
   *             job.</p>
   */
  PredictorBacktestExportJobs?: PredictorBacktestExportJobSummary[];

  /**
   * @public
   * <p>Returns this token if the response is truncated. To retrieve the next set of results,
   *             use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPredictorsRequest {
  /**
   * @public
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   */
  Filters?: Filter[];
}

/**
 * @public
 * <p>Provides a summary of the predictor properties that are used in the <a>ListPredictors</a> operation. To get the complete set of properties, call the <a>DescribePredictor</a> operation, and provide the listed
 *       <code>PredictorArn</code>.</p>
 */
export interface PredictorSummary {
  /**
   * @public
   * <p>The ARN of the predictor.</p>
   */
  PredictorArn?: string;

  /**
   * @public
   * <p>The name of the predictor.</p>
   */
  PredictorName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset group that contains the data used to train
   *       the predictor.</p>
   */
  DatasetGroupArn?: string;

  /**
   * @public
   * <p>Whether AutoPredictor was used to create the predictor.</p>
   */
  IsAutoPredictor?: boolean;

  /**
   * @public
   * <p>A summary of the reference predictor used if the predictor was retrained or
   *             upgraded.</p>
   */
  ReferencePredictorSummary?: ReferencePredictorSummary;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>When the model training task was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;
}

/**
 * @public
 */
export interface ListPredictorsResponse {
  /**
   * @public
   * <p>An array of objects that summarize each predictor's properties.</p>
   */
  Predictors?: PredictorSummary[];

  /**
   * @public
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags.
   *     </p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The tags for the resource.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ListWhatIfAnalysesRequest {
  /**
   * @public
   * <p>If the result of the previous request was truncated, the response includes a
   *       <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   */
  Filters?: Filter[];
}

/**
 * @public
 * <p>Provides a summary of the what-if analysis properties used in the <a>ListWhatIfAnalyses</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfAnalysis</a> operation, and provide the <code>WhatIfAnalysisArn</code> that is listed in the summary.</p>
 */
export interface WhatIfAnalysisSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the what-if analysis.</p>
   */
  WhatIfAnalysisArn?: string;

  /**
   * @public
   * <p>The name of the what-if analysis.</p>
   */
  WhatIfAnalysisName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the baseline forecast that is being used in this what-if analysis.</p>
   */
  ForecastArn?: string;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>When the what-if analysis was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;
}

/**
 * @public
 */
export interface ListWhatIfAnalysesResponse {
  /**
   * @public
   * <p>An array of <code>WhatIfAnalysisSummary</code> objects that describe the matched analyses.</p>
   */
  WhatIfAnalyses?: WhatIfAnalysisSummary[];

  /**
   * @public
   * <p>If the response is truncated, Forecast returns this token. To retrieve the next set of results, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListWhatIfForecastExportsRequest {
  /**
   * @public
   * <p>If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next  request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   */
  Filters?: Filter[];
}

/**
 * @public
 * <p>Provides a summary of the what-if forecast export properties used in the <a>ListWhatIfForecastExports</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfForecastExport</a> operation, and provide the <code>WhatIfForecastExportArn</code> that is listed in the summary.</p>
 */
export interface WhatIfForecastExportSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the what-if forecast export.</p>
   */
  WhatIfForecastExportArn?: string;

  /**
   * @public
   * <p>An array of Amazon Resource Names (ARNs) that define the what-if forecasts included in the export.</p>
   */
  WhatIfForecastArns?: string[];

  /**
   * @public
   * <p>The what-if forecast export name.</p>
   */
  WhatIfForecastExportName?: string;

  /**
   * @public
   * <p>The path to the Amazon Simple Storage Service (Amazon S3) bucket where the forecast is exported.</p>
   */
  Destination?: DataDestination;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>When the what-if forecast export was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;
}

/**
 * @public
 */
export interface ListWhatIfForecastExportsResponse {
  /**
   * @public
   * <p>An array of <code>WhatIfForecastExports</code> objects that describe the matched forecast exports.</p>
   */
  WhatIfForecastExports?: WhatIfForecastExportSummary[];

  /**
   * @public
   * <p>If the response is truncated, Forecast returns this token. To retrieve the next set of results, use the token in the next request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListWhatIfForecastsRequest {
  /**
   * @public
   * <p>If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next  request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * @public
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
   */
  Filters?: Filter[];
}

/**
 * @public
 * <p>Provides a summary of the what-if forecast properties used in the <a>ListWhatIfForecasts</a> operation. To get the complete set of properties, call the <a>DescribeWhatIfForecast</a> operation, and provide the <code>WhatIfForecastArn</code> that is listed in the summary.</p>
 */
export interface WhatIfForecastSummary {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the what-if forecast.</p>
   */
  WhatIfForecastArn?: string;

  /**
   * @public
   * <p>The name of the what-if forecast.</p>
   */
  WhatIfForecastName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the what-if analysis that contains this what-if forecast.</p>
   */
  WhatIfAnalysisArn?: string;

  /**
   * @public
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
   */
  Status?: string;

  /**
   * @public
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>When the what-if forecast was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
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
   */
  LastModificationTime?: Date;
}

/**
 * @public
 */
export interface ListWhatIfForecastsResponse {
  /**
   * @public
   * <p>An array of <code>WhatIfForecasts</code> objects that describe the matched forecasts.</p>
   */
  WhatIfForecasts?: WhatIfForecastSummary[];

  /**
   * @public
   * <p>If the result of the previous request was truncated, the response includes a <code>NextToken</code>. To retrieve the next set of results, use the token in the next  request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ResumeResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the monitor resource to resume.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface StopResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies the resource to stop. The supported ARNs
   *          are <code>DatasetImportJobArn</code>, <code>PredictorArn</code>,
   *             <code>PredictorBacktestExportJobArn</code>, <code>ForecastArn</code>,
   *             <code>ForecastExportJobArn</code>, <code>ExplainabilityArn</code>, and
   *             <code>ExplainabilityExportArn</code>. </p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags.
   *     </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags.
   *     </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The keys of the tags to be removed.</p>
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
   * @public
   * <p>The ARN of the dataset group.</p>
   */
  DatasetGroupArn: string | undefined;

  /**
   * @public
   * <p>An array of the Amazon Resource Names (ARNs) of the datasets to add to the dataset
   *       group.</p>
   */
  DatasetArns: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetGroupResponse {}

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
  ...(obj.Key && { Key: SENSITIVE_STRING }),
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateAutoPredictorRequestFilterSensitiveLog = (obj: CreateAutoPredictorRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateDatasetRequestFilterSensitiveLog = (obj: CreateDatasetRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateDatasetGroupRequestFilterSensitiveLog = (obj: CreateDatasetGroupRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateDatasetImportJobRequestFilterSensitiveLog = (obj: CreateDatasetImportJobRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateExplainabilityRequestFilterSensitiveLog = (obj: CreateExplainabilityRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateExplainabilityExportRequestFilterSensitiveLog = (obj: CreateExplainabilityExportRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateForecastRequestFilterSensitiveLog = (obj: CreateForecastRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateForecastExportJobRequestFilterSensitiveLog = (obj: CreateForecastExportJobRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateMonitorRequestFilterSensitiveLog = (obj: CreateMonitorRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreatePredictorRequestFilterSensitiveLog = (obj: CreatePredictorRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreatePredictorBacktestExportJobRequestFilterSensitiveLog = (
  obj: CreatePredictorBacktestExportJobRequest
): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateWhatIfAnalysisRequestFilterSensitiveLog = (obj: CreateWhatIfAnalysisRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateWhatIfForecastRequestFilterSensitiveLog = (obj: CreateWhatIfForecastRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const CreateWhatIfForecastExportRequestFilterSensitiveLog = (obj: CreateWhatIfForecastExportRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: obj.Tags.map((item) => TagFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
  ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
});
