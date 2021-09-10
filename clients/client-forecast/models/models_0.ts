import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

export enum DatasetType {
  ITEM_METADATA = "ITEM_METADATA",
  RELATED_TIME_SERIES = "RELATED_TIME_SERIES",
  TARGET_TIME_SERIES = "TARGET_TIME_SERIES",
}

export enum Domain {
  CUSTOM = "CUSTOM",
  EC2_CAPACITY = "EC2_CAPACITY",
  INVENTORY_PLANNING = "INVENTORY_PLANNING",
  METRICS = "METRICS",
  RETAIL = "RETAIL",
  WEB_TRAFFIC = "WEB_TRAFFIC",
  WORK_FORCE = "WORK_FORCE",
}

/**
 * <p>An AWS Key Management Service (KMS) key and an AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to
 *       access the key. You can specify this optional object in the
 *       <a>CreateDataset</a> and <a>CreatePredictor</a> requests.</p>
 */
export interface EncryptionConfig {
  /**
   * <p>The ARN of the IAM role that Amazon Forecast can assume to access the AWS KMS key.</p>
   *          <p>Passing a role across AWS accounts is not allowed. If you pass a role that isn't in your
   *       account, you get an <code>InvalidInputException</code> error.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key.</p>
   */
  KMSKeyArn: string | undefined;
}

export namespace EncryptionConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptionConfig): any => ({
    ...obj,
  });
}

export enum AttributeType {
  FLOAT = "float",
  GEOLOCATION = "geolocation",
  INTEGER = "integer",
  STRING = "string",
  TIMESTAMP = "timestamp",
}

/**
 * <p>An attribute of a schema, which defines a dataset field. A schema attribute is required
 *       for every field in a dataset. The <a>Schema</a> object contains an array of
 *         <code>SchemaAttribute</code> objects.</p>
 */
export interface SchemaAttribute {
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SchemaAttribute): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the fields of a dataset. You specify this object in the <a>CreateDataset</a> request.</p>
 */
export interface Schema {
  /**
   * <p>An array of attributes specifying the name and type of each field in a dataset.</p>
   */
  Attributes?: SchemaAttribute[];
}

export namespace Schema {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Schema): any => ({
    ...obj,
  });
}

/**
 * <p>The optional metadata that you apply to a resource to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p>
 *          <p>The following basic restrictions apply to tags:</p>
 *          <ul>
 *             <li>
 *                <p>Maximum number of tags per resource - 50.</p>
 *             </li>
 *             <li>
 *                <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p>
 *             </li>
 *             <li>
 *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
 *             </li>
 *             <li>
 *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
 *             </li>
 *             <li>
 *                <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p>
 *             </li>
 *             <li>
 *                <p>Tag keys and values are case sensitive.</p>
 *             </li>
 *             <li>
 *                <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p>
 *             </li>
 *          </ul>
 */
export interface Tag {
  /**
   * <p>One part of a key-value pair that makes up a tag. A <code>key</code> is a general label that acts like a category for more specific tag values.</p>
   */
  Key: string | undefined;

  /**
   * <p>The optional part of a key-value pair that makes up a tag. A <code>value</code> acts as a descriptor within a tag category (key).</p>
   */
  Value: string | undefined;
}

export namespace Tag {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
    ...(obj.Key && { Key: SENSITIVE_STRING }),
    ...(obj.Value && { Value: SENSITIVE_STRING }),
  });
}

export interface CreateDatasetRequest {
  /**
   * <p>A name for the dataset.</p>
   */
  DatasetName: string | undefined;

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
   * <p>The dataset type. Valid values depend on the chosen <code>Domain</code>.</p>
   */
  DatasetType: DatasetType | string | undefined;

  /**
   * <p>The frequency of data collection. This parameter is required for RELATED_TIME_SERIES
   *       datasets.</p>
   *          <p>Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30 minutes),
   *       15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute). For example,
   *       "D" indicates every day and "15min" indicates every 15 minutes.</p>
   */
  DataFrequency?: string;

  /**
   * <p>The schema for the dataset. The schema attributes and their order must match the fields in
   *       your data. The dataset <code>Domain</code> and <code>DatasetType</code> that you choose
   *       determine the minimum required fields in your training data. For information about the
   *       required fields for a specific dataset domain and type, see <a>howitworks-domains-ds-types</a>.</p>
   */
  Schema: Schema | undefined;

  /**
   * <p>An AWS Key Management Service (KMS) key and the AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access
   *       the key.</p>
   */
  EncryptionConfig?: EncryptionConfig;

  /**
   * <p>The optional metadata that you apply to the dataset to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource - 50.</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Tag[];
}

export namespace CreateDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface CreateDatasetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DatasetArn?: string;
}

export namespace CreateDatasetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInputException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj,
  });
}

/**
 * <p>The limit on the number of resources per account has been exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  Message?: string;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>There is already a resource with this name. Try again with a different name.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
}

export interface CreateDatasetGroupRequest {
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

  /**
   * <p>An array of Amazon Resource Names (ARNs) of the datasets that you want to include in the
   *       dataset group.</p>
   */
  DatasetArns?: string[];

  /**
   * <p>The optional metadata that you apply to the dataset group to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource - 50.</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Tag[];
}

export namespace CreateDatasetGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetGroupRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface CreateDatasetGroupResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   */
  DatasetGroupArn?: string;
}

export namespace CreateDatasetGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified resource is in use.</p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceInUseException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

/**
 * <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The path to the file(s) in an Amazon Simple Storage Service (Amazon S3) bucket, and an AWS Identity and Access Management (IAM) role that
 *       Amazon Forecast can assume to access the file(s). Optionally, includes an AWS Key Management Service (KMS) key. This
 *       object is part of the <a>DataSource</a> object that is submitted in the <a>CreateDatasetImportJob</a> request, and part of the <a>DataDestination</a> object.</p>
 */
export interface S3Config {
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

  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Key Management Service (KMS) key.</p>
   */
  KMSKeyArn?: string;
}

export namespace S3Config {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Config): any => ({
    ...obj,
  });
}

/**
 * <p>The source of your training data, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast to
 *       access the data and, optionally, an AWS Key Management Service (KMS) key. This object is submitted in the
 *       <a>CreateDatasetImportJob</a> request.</p>
 */
export interface DataSource {
  /**
   * <p>The path to the training data stored in an Amazon Simple Storage Service (Amazon S3) bucket along with the
   *       credentials to access the data.</p>
   */
  S3Config: S3Config | undefined;
}

export namespace DataSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataSource): any => ({
    ...obj,
  });
}

export interface CreateDatasetImportJobRequest {
  /**
   * <p>The name for the dataset import job. We recommend including the current timestamp in the
   *       name, for example, <code>20190721DatasetImport</code>. This can help you avoid getting a
   *         <code>ResourceAlreadyExistsException</code> exception.</p>
   */
  DatasetImportJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Forecast dataset that you want to import data
   *       to.</p>
   */
  DatasetArn: string | undefined;

  /**
   * <p>The location of the training data to import and an AWS Identity and Access Management (IAM) role that Amazon Forecast
   *       can assume to access the data. The training data must be stored in an Amazon S3 bucket.</p>
   *          <p>If encryption is used, <code>DataSource</code> must include an AWS Key Management Service (KMS) key and the
   *       IAM role must allow Amazon Forecast permission to access the key. The KMS key and IAM role must
   *       match those specified in the <code>EncryptionConfig</code> parameter of the <a>CreateDataset</a> operation.</p>
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
   */
  TimestampFormat?: string;

  /**
   * <p>A single time zone for every item in your dataset. This option is ideal for datasets
   *             with all timestamps within a single time zone, or if all timestamps are normalized to a
   *             single time zone. </p>
   *         <p>Refer to the <a href="http://joda-time.sourceforge.net/timezones.html">Joda-Time
   *                 API</a> for a complete list of valid time zone names.</p>
   */
  TimeZone?: string;

  /**
   * <p>Automatically derive time zone information from the geolocation attribute. This option
   *             is ideal for datasets that contain timestamps in multiple time zones and those
   *             timestamps are expressed in local time.</p>
   */
  UseGeolocationForTimeZone?: boolean;

  /**
   * <p>The format of the geolocation attribute. The geolocation attribute can be formatted in
   *             one of two ways:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>LAT_LONG</code> - the latitude and longitude in decimal format (Example: 47.61_-122.33).</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CC_POSTALCODE</code> (US Only) - the country code (US), followed by the 5-digit ZIP code (Example: US_98121).</p>
   *             </li>
   *          </ul>
   */
  GeolocationFormat?: string;

  /**
   * <p>The optional metadata that you apply to the dataset import job to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource - 50.</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Tag[];
}

export namespace CreateDatasetImportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetImportJobRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface CreateDatasetImportJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset import job.</p>
   */
  DatasetImportJobArn?: string;
}

export namespace CreateDatasetImportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetImportJobResponse): any => ({
    ...obj,
  });
}

export interface CreateForecastRequest {
  /**
   * <p>A name for the forecast.</p>
   */
  ForecastName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the predictor to use to generate the forecast.</p>
   */
  PredictorArn: string | undefined;

  /**
   * <p>The quantiles at which probabilistic forecasts are generated. <b>You
   *         can currently specify up to 5 quantiles per forecast</b>. Accepted values include
   *         <code>0.01 to 0.99</code> (increments of .01 only) and <code>mean</code>. The mean forecast
   *       is different from the median (0.50) when the distribution is not symmetric (for example, Beta
   *       and Negative Binomial). The default value is <code>["0.1", "0.5", "0.9"]</code>.</p>
   */
  ForecastTypes?: string[];

  /**
   * <p>The optional metadata that you apply to the forecast to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource - 50.</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Tag[];
}

export namespace CreateForecastRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateForecastRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface CreateForecastResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the forecast.</p>
   */
  ForecastArn?: string;
}

export namespace CreateForecastResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateForecastResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The destination for an export job. Provide an S3 path, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast
 *       to access the location, and an AWS Key Management Service (KMS) key (optional). </p>
 */
export interface DataDestination {
  /**
   * <p>The path to an Amazon Simple Storage Service (Amazon S3) bucket along with the credentials to access the
   *       bucket.</p>
   */
  S3Config: S3Config | undefined;
}

export namespace DataDestination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataDestination): any => ({
    ...obj,
  });
}

export interface CreateForecastExportJobRequest {
  /**
   * <p>The name for the forecast export job.</p>
   */
  ForecastExportJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the forecast that you want to export.</p>
   */
  ForecastArn: string | undefined;

  /**
   * <p>The location where you want to save the forecast and an AWS Identity and Access Management (IAM) role that
   *       Amazon Forecast can assume to access the location. The forecast must be exported to an Amazon S3
   *       bucket.</p>
   *          <p>If encryption is used, <code>Destination</code> must include an AWS Key Management Service (KMS) key. The
   *       IAM role must allow Amazon Forecast permission to access the key.</p>
   */
  Destination: DataDestination | undefined;

  /**
   * <p>The optional metadata that you apply to the forecast export job to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource - 50.</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Tag[];
}

export namespace CreateForecastExportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateForecastExportJobRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface CreateForecastExportJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the export job.</p>
   */
  ForecastExportJobArn?: string;
}

export namespace CreateForecastExportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateForecastExportJobResponse): any => ({
    ...obj,
  });
}

export enum AutoMLOverrideStrategy {
  LatencyOptimized = "LatencyOptimized",
}

/**
 * <p>Parameters that define how to split a dataset into training data and testing data, and the
 *       number of iterations to perform. These parameters are specified in the predefined algorithms
 *       but you can override them in the <a>CreatePredictor</a> request.</p>
 */
export interface EvaluationParameters {
  /**
   * <p>The number of times to split the input data. The default is 1. Valid values are 1 through
   *       5.</p>
   */
  NumberOfBacktestWindows?: number;

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
}

export namespace EvaluationParameters {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluationParameters): any => ({
    ...obj,
  });
}

export enum FeaturizationMethodName {
  filling = "filling",
}

/**
 * <p>Provides information about the method that featurizes (transforms) a dataset field.
 *       The method is part of the <code>FeaturizationPipeline</code> of the
 *       <a>Featurization</a> object. </p>
 *          <p>The following is an example of how you specify a <code>FeaturizationMethod</code> object.</p>
 *          <p>
 *             <code>{</code>
 *          </p>
 *          <p>
 *             <code>"FeaturizationMethodName": "filling",</code>
 *          </p>
 *          <p>
 *             <code>"FeaturizationMethodParameters": {"aggregation": "sum", "middlefill": "zero", "backfill": "zero"}</code>
 *          </p>
 *          <p>
 *             <code>}</code>
 *          </p>
 */
export interface FeaturizationMethod {
  /**
   * <p>The name of the method. The "filling" method is the only supported method.</p>
   */
  FeaturizationMethodName: FeaturizationMethodName | string | undefined;

  /**
   * <p>The method parameters (key-value pairs), which are a map of override parameters. Specify these parameters to override the default values.
   *       Related Time Series attributes do not accept aggregation parameters.</p>
   *          <p>The following list shows the parameters and their valid values for the "filling" featurization method for a <b>Target Time Series</b> dataset. Bold signifies the default
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
   *                   <code>middlefill</code>: <b>zero</b>, <code>nan</code> (not a number), <code>value</code>, <code>median</code>, <code>mean</code>, <code>min</code>, <code>max</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>backfill</code>: <b>zero</b>, <code>nan</code>, <code>value</code>, <code>median</code>, <code>mean</code>, <code>min</code>, <code>max</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <p>The following list shows the parameters and their valid values for a <b>Related Time Series</b> featurization method (there are no defaults):</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>middlefill</code>: <code>zero</code>, <code>value</code>, <code>median</code>, <code>mean</code>, <code>min</code>, <code>max</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>backfill</code>: <code>zero</code>, <code>value</code>, <code>median</code>, <code>mean</code>, <code>min</code>, <code>max</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>futurefill</code>: <code>zero</code>, <code>value</code>, <code>median</code>, <code>mean</code>, <code>min</code>, <code>max</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>To set a filling method to a specific value, set the fill parameter to <code>value</code>
   *       and define the value in a corresponding <code>_value</code> parameter. For example, to set
   *       backfilling to a value of 2, include the following: <code>"backfill": "value"</code> and
   *         <code>"backfill_value":"2"</code>. </p>
   */
  FeaturizationMethodParameters?: { [key: string]: string };
}

export namespace FeaturizationMethod {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FeaturizationMethod): any => ({
    ...obj,
  });
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
  /**
   * <p>The name of the schema attribute that specifies the data field to be featurized. Amazon Forecast supports the target field of
   *       the <code>TARGET_TIME_SERIES</code> and the <code>RELATED_TIME_SERIES</code> datasets. For example, for the <code>RETAIL</code> domain, the target is
   *       <code>demand</code>, and for the <code>CUSTOM</code> domain, the target is
   *       <code>target_value</code>.
   *       For more information, see <a>howitworks-missing-values</a>.</p>
   */
  AttributeName: string | undefined;

  /**
   * <p>An array of one <code>FeaturizationMethod</code> object that specifies the feature
   *       transformation method.</p>
   */
  FeaturizationPipeline?: FeaturizationMethod[];
}

export namespace Featurization {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Featurization): any => ({
    ...obj,
  });
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
 *       <code>TARGET_TIME_SERIES</code> and <code>RELATED_TIME_SERIES</code> datasets before model training.</p>
 *          <p>You can create multiple featurization configurations. For example, you
 *       might call the <code>CreatePredictor</code> operation twice by specifying different
 *       featurization configurations.</p>
 */
export interface FeaturizationConfig {
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
  ForecastDimensions?: string[];

  /**
   * <p>An array of featurization (transformation) information for the fields of a dataset.</p>
   */
  Featurizations?: Featurization[];
}

export namespace FeaturizationConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FeaturizationConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a categorical hyperparameter and it's range of tunable values.
 *       This object is part of the <a>ParameterRanges</a> object.</p>
 */
export interface CategoricalParameterRange {
  /**
   * <p>The name of the categorical hyperparameter to tune.</p>
   */
  Name: string | undefined;

  /**
   * <p>A list of the tunable categories for the hyperparameter.</p>
   */
  Values: string[] | undefined;
}

export namespace CategoricalParameterRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CategoricalParameterRange): any => ({
    ...obj,
  });
}

export enum ScalingType {
  Auto = "Auto",
  Linear = "Linear",
  Logarithmic = "Logarithmic",
  ReverseLogarithmic = "ReverseLogarithmic",
}

/**
 * <p>Specifies a continuous hyperparameter and it's range of tunable values.
 *       This object is part of the <a>ParameterRanges</a> object.</p>
 */
export interface ContinuousParameterRange {
  /**
   * <p>The name of the hyperparameter to tune.</p>
   */
  Name: string | undefined;

  /**
   * <p>The maximum tunable value of the hyperparameter.</p>
   */
  MaxValue: number | undefined;

  /**
   * <p>The minimum tunable value of the hyperparameter.</p>
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
   */
  ScalingType?: ScalingType | string;
}

export namespace ContinuousParameterRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContinuousParameterRange): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an integer hyperparameter and it's range of tunable values.
 *       This object is part of the <a>ParameterRanges</a> object.</p>
 */
export interface IntegerParameterRange {
  /**
   * <p>The name of the hyperparameter to tune.</p>
   */
  Name: string | undefined;

  /**
   * <p>The maximum tunable value of the hyperparameter.</p>
   */
  MaxValue: number | undefined;

  /**
   * <p>The minimum tunable value of the hyperparameter.</p>
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
   */
  ScalingType?: ScalingType | string;
}

export namespace IntegerParameterRange {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IntegerParameterRange): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the categorical, continuous, and integer hyperparameters, and their ranges of
 *       tunable values. The range of tunable values determines which values that a hyperparameter
 *       tuning job can choose for the specified hyperparameter. This object is part of the
 *       <a>HyperParameterTuningJobConfig</a> object.</p>
 */
export interface ParameterRanges {
  /**
   * <p>Specifies the tunable range for each categorical hyperparameter.</p>
   */
  CategoricalParameterRanges?: CategoricalParameterRange[];

  /**
   * <p>Specifies the tunable range for each continuous hyperparameter.</p>
   */
  ContinuousParameterRanges?: ContinuousParameterRange[];

  /**
   * <p>Specifies the tunable range for each integer hyperparameter.</p>
   */
  IntegerParameterRanges?: IntegerParameterRange[];
}

export namespace ParameterRanges {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ParameterRanges): any => ({
    ...obj,
  });
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
  /**
   * <p>Specifies the ranges of valid values for the hyperparameters.</p>
   */
  ParameterRanges?: ParameterRanges;
}

export namespace HyperParameterTuningJobConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: HyperParameterTuningJobConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a supplementary feature of a dataset group. This object is part of the <a>InputDataConfig</a> object. Forecast supports the Weather Index and Holidays built-in
 *       featurizations.</p>
 *          <p>
 *             <b>Weather Index</b>
 *          </p>
 *          <p>The Amazon Forecast Weather Index is a built-in featurization that incorporates historical and
 *       projected weather information into your model. The Weather Index supplements your datasets
 *       with over two years of historical weather data and up to 14 days of projected weather data.
 *       For more information, see <a href="https://docs.aws.amazon.com/forecast/latest/dg/weather.html">Amazon Forecast Weather Index</a>.</p>
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
   * <p>The name of the feature. Valid values: <code>"holiday"</code> and <code>"weather"</code>.</p>
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
   */
  Value: string | undefined;
}

export namespace SupplementaryFeature {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SupplementaryFeature): any => ({
    ...obj,
  });
}

/**
 * <p>The data used to train a predictor. The data includes a dataset group and any
 *       supplementary features. You specify this object in the <a>CreatePredictor</a>
 *       request.</p>
 */
export interface InputDataConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   */
  DatasetGroupArn: string | undefined;

  /**
   * <p>An array of supplementary features. The only supported feature is a holiday
   *       calendar.</p>
   */
  SupplementaryFeatures?: SupplementaryFeature[];
}

export namespace InputDataConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputDataConfig): any => ({
    ...obj,
  });
}

export enum OptimizationMetric {
  AverageWeightedQuantileLoss = "AverageWeightedQuantileLoss",
  MAPE = "MAPE",
  MASE = "MASE",
  RMSE = "RMSE",
  WAPE = "WAPE",
}

export interface CreatePredictorRequest {
  /**
   * <p>A name for the predictor.</p>
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
   */
  AlgorithmArn?: string;

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
   * <p>Specifies the forecast types used to train a predictor. You can specify up to five forecast types.
   *       Forecast types can be quantiles from 0.01 to 0.99, by increments of 0.01 or higher. You can also specify
   *       the mean forecast with <code>mean</code>.
   *     </p>
   *          <p>The default value is <code>["0.10", "0.50", "0.9"]</code>.</p>
   */
  ForecastTypes?: string[];

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
   * <note>
   *             <p> The <code>LatencyOptimized</code> AutoML override strategy is only available in private beta.
   *                 Contact AWS Support or your account manager to learn more about access privileges.
   *             </p>
   *         </note>
   *         <p>Used to overide the default AutoML strategy, which is to optimize predictor accuracy.
   *             To apply an AutoML strategy that minimizes training time, use
   *                 <code>LatencyOptimized</code>.</p>
   *         <p>This parameter is only valid for predictors trained using AutoML.</p>
   */
  AutoMLOverrideStrategy?: AutoMLOverrideStrategy | string;

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
   */
  PerformHPO?: boolean;

  /**
   * <p>The hyperparameters to override for model training. The hyperparameters that you can
   *       override are listed in the individual algorithms. For the list of supported algorithms, see
   *         <a>aws-forecast-choosing-recipes</a>.</p>
   */
  TrainingParameters?: { [key: string]: string };

  /**
   * <p>Used to override the default evaluation parameters of the specified algorithm. Amazon Forecast
   *       evaluates a predictor by splitting a dataset into training data and testing data. The
   *       evaluation parameters define how to perform the split and the number of iterations.</p>
   */
  EvaluationParameters?: EvaluationParameters;

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
   * <p>The featurization configuration.</p>
   */
  FeaturizationConfig: FeaturizationConfig | undefined;

  /**
   * <p>An AWS Key Management Service (KMS) key and the AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access
   *       the key.</p>
   */
  EncryptionConfig?: EncryptionConfig;

  /**
   * <p>The optional metadata that you apply to the predictor to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define.</p>
   *          <p>The following basic restrictions apply to tags:</p>
   *          <ul>
   *             <li>
   *                <p>Maximum number of tags per resource - 50.</p>
   *             </li>
   *             <li>
   *                <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Tag[];

  /**
   * <p>The accuracy metric used to optimize the predictor.</p>
   */
  OptimizationMetric?: OptimizationMetric | string;
}

export namespace CreatePredictorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePredictorRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface CreatePredictorResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor.</p>
   */
  PredictorArn?: string;
}

export namespace CreatePredictorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePredictorResponse): any => ({
    ...obj,
  });
}

export interface CreatePredictorBacktestExportJobRequest {
  /**
   * <p>The name for the backtest export job.</p>
   */
  PredictorBacktestExportJobName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the predictor that you want to export.</p>
   */
  PredictorArn: string | undefined;

  /**
   * <p>The destination for an export job. Provide an S3 path, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast
   *       to access the location, and an AWS Key Management Service (KMS) key (optional). </p>
   */
  Destination: DataDestination | undefined;

  /**
   * <p>Optional metadata to help you categorize and organize your backtests. Each tag consists
   *             of a key and an optional value, both of which you define. Tag keys and values are case
   *             sensitive.</p>
   *         <p>The following restrictions apply to tags:</p>
   *         <ul>
   *             <li>
   *                 <p>For each resource, each tag key must be unique and each tag key must have one
   *                     value.</p>
   *             </li>
   *             <li>
   *                 <p>Maximum number of tags per resource: 50.</p>
   *             </li>
   *             <li>
   *                 <p>Maximum key length: 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                 <p>Maximum value length: 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                 <p>Accepted characters: all letters and numbers, spaces representable in UTF-8, and +
   *                     - = . _ : / @. If your tagging schema is used across other services and resources,
   *                     the character restrictions of those services also apply. </p>
   *             </li>
   *             <li>
   *                 <p>Key prefixes cannot include any upper or lowercase combination of
   *                     <code>aws:</code> or <code>AWS:</code>. Values can have this prefix. If a tag
   *                     value has <code>aws</code> as its prefix but the key does not, Forecast considers it
   *                     to be a user tag and will count against the limit of 50 tags. Tags with only the key
   *                     prefix of <code>aws</code> do not count against your tags per resource limit. You
   *                     cannot edit or delete tag keys with this prefix.</p>
   *             </li>
   *          </ul>
   */
  Tags?: Tag[];
}

export namespace CreatePredictorBacktestExportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePredictorBacktestExportJobRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface CreatePredictorBacktestExportJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor backtest export job that you want to
   *             export.</p>
   */
  PredictorBacktestExportJobArn?: string;
}

export namespace CreatePredictorBacktestExportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePredictorBacktestExportJobResponse): any => ({
    ...obj,
  });
}

export interface DeleteDatasetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset to delete.</p>
   */
  DatasetArn: string | undefined;
}

export namespace DeleteDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDatasetRequest): any => ({
    ...obj,
  });
}

export interface DeleteDatasetGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group to delete.</p>
   */
  DatasetGroupArn: string | undefined;
}

export namespace DeleteDatasetGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDatasetGroupRequest): any => ({
    ...obj,
  });
}

export interface DeleteDatasetImportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset import job to delete.</p>
   */
  DatasetImportJobArn: string | undefined;
}

export namespace DeleteDatasetImportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDatasetImportJobRequest): any => ({
    ...obj,
  });
}

export interface DeleteForecastRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the forecast to delete.</p>
   */
  ForecastArn: string | undefined;
}

export namespace DeleteForecastRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteForecastRequest): any => ({
    ...obj,
  });
}

export interface DeleteForecastExportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the forecast export job to delete.</p>
   */
  ForecastExportJobArn: string | undefined;
}

export namespace DeleteForecastExportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteForecastExportJobRequest): any => ({
    ...obj,
  });
}

export interface DeletePredictorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor to delete.</p>
   */
  PredictorArn: string | undefined;
}

export namespace DeletePredictorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePredictorRequest): any => ({
    ...obj,
  });
}

export interface DeletePredictorBacktestExportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor backtest export job to delete.</p>
   */
  PredictorBacktestExportJobArn: string | undefined;
}

export namespace DeletePredictorBacktestExportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePredictorBacktestExportJobRequest): any => ({
    ...obj,
  });
}

export interface DeleteResourceTreeRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the parent resource to delete. All child resources
   *             of the parent resource will also be deleted.</p>
   */
  ResourceArn: string | undefined;
}

export namespace DeleteResourceTreeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourceTreeRequest): any => ({
    ...obj,
  });
}

export interface DescribeDatasetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DatasetArn: string | undefined;
}

export namespace DescribeDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetRequest): any => ({
    ...obj,
  });
}

export interface DescribeDatasetResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  DatasetArn?: string;

  /**
   * <p>The name of the dataset.</p>
   */
  DatasetName?: string;

  /**
   * <p>The domain associated with the dataset.</p>
   */
  Domain?: Domain | string;

  /**
   * <p>The dataset type.</p>
   */
  DatasetType?: DatasetType | string;

  /**
   * <p>The frequency of data collection.</p>
   *          <p>Valid intervals are Y (Year), M (Month), W (Week), D (Day), H (Hour), 30min (30 minutes),
   *       15min (15 minutes), 10min (10 minutes), 5min (5 minutes), and 1min (1 minute). For example,
   *       "M" indicates every month and "30min" indicates every 30 minutes.</p>
   */
  DataFrequency?: string;

  /**
   * <p>An array of <code>SchemaAttribute</code> objects that specify the dataset fields. Each
   *         <code>SchemaAttribute</code> specifies the name and data type of a field.</p>
   */
  Schema?: Schema;

  /**
   * <p>The AWS Key Management Service (KMS) key and the AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access
   *       the key.</p>
   */
  EncryptionConfig?: EncryptionConfig;

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

  /**
   * <p>When the dataset was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When you create a dataset, <code>LastModificationTime</code> is the same as
   *         <code>CreationTime</code>. While data is being imported to the dataset,
   *         <code>LastModificationTime</code> is the current time of the <code>DescribeDataset</code>
   *       call. After a <a>CreateDatasetImportJob</a> operation has finished,
   *         <code>LastModificationTime</code> is when the import job completed or failed.</p>
   */
  LastModificationTime?: Date;
}

export namespace DescribeDatasetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetResponse): any => ({
    ...obj,
  });
}

export interface DescribeDatasetGroupRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   */
  DatasetGroupArn: string | undefined;
}

export namespace DescribeDatasetGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetGroupRequest): any => ({
    ...obj,
  });
}

export interface DescribeDatasetGroupResponse {
  /**
   * <p>The name of the dataset group.</p>
   */
  DatasetGroupName?: string;

  /**
   * <p>The ARN of the dataset group.</p>
   */
  DatasetGroupArn?: string;

  /**
   * <p>An array of Amazon Resource Names (ARNs) of the datasets contained in the dataset
   *       group.</p>
   */
  DatasetArns?: string[];

  /**
   * <p>The domain associated with the dataset group.</p>
   */
  Domain?: Domain | string;

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

  /**
   * <p>When the dataset group was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the dataset group was created or last updated from a call to the <a>UpdateDatasetGroup</a> operation. While the dataset group is being updated,
   *         <code>LastModificationTime</code> is the current time of the
   *         <code>DescribeDatasetGroup</code> call.</p>
   */
  LastModificationTime?: Date;
}

export namespace DescribeDatasetGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetGroupResponse): any => ({
    ...obj,
  });
}

export interface DescribeDatasetImportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset import job.</p>
   */
  DatasetImportJobArn: string | undefined;
}

export namespace DescribeDatasetImportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetImportJobRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides statistics for each data field imported into to an Amazon Forecast dataset with
 *       the <a>CreateDatasetImportJob</a> operation.</p>
 */
export interface Statistics {
  /**
   * <p>The number of values in the field. If the response value is -1, refer to
   *         <code>CountLong</code>.</p>
   */
  Count?: number;

  /**
   * <p>The number of distinct values in the field. If the response value is -1, refer to
   *       <code>CountDistinctLong</code>.</p>
   */
  CountDistinct?: number;

  /**
   * <p>The number of null values in the field. If the response value is -1, refer to
   *       <code>CountNullLong</code>.</p>
   */
  CountNull?: number;

  /**
   * <p>The number of NAN (not a number) values in the field. If the response value is -1, refer to
   *       <code>CountNanLong</code>.</p>
   */
  CountNan?: number;

  /**
   * <p>For a numeric field, the minimum value in the field.</p>
   */
  Min?: string;

  /**
   * <p>For a numeric field, the maximum value in the field.</p>
   */
  Max?: string;

  /**
   * <p>For a numeric field, the average value in the field.</p>
   */
  Avg?: number;

  /**
   * <p>For a numeric field, the standard deviation.</p>
   */
  Stddev?: number;

  /**
   * <p>The number of values in the field. <code>CountLong</code> is used instead of
   *         <code>Count</code> if the value is greater than 2,147,483,647.</p>
   */
  CountLong?: number;

  /**
   * <p>The number of distinct values in the field. <code>CountDistinctLong</code> is used instead
   *       of <code>CountDistinct</code> if the value is greater than 2,147,483,647.</p>
   */
  CountDistinctLong?: number;

  /**
   * <p>The number of null values in the field. <code>CountNullLong</code> is used instead of
   *         <code>CountNull</code> if the value is greater than 2,147,483,647.</p>
   */
  CountNullLong?: number;

  /**
   * <p>The number of NAN (not a number) values in the field. <code>CountNanLong</code> is used
   *       instead of <code>CountNan</code> if the value is greater than 2,147,483,647.</p>
   */
  CountNanLong?: number;
}

export namespace Statistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Statistics): any => ({
    ...obj,
  });
}

export interface DescribeDatasetImportJobResponse {
  /**
   * <p>The name of the dataset import job.</p>
   */
  DatasetImportJobName?: string;

  /**
   * <p>The ARN of the dataset import job.</p>
   */
  DatasetImportJobArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset that the training data was imported
   *       to.</p>
   */
  DatasetArn?: string;

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

  /**
   * <p>The single time zone applied to every item in the dataset</p>
   */
  TimeZone?: string;

  /**
   * <p>Whether <code>TimeZone</code> is automatically derived from the geolocation
   *             attribute.</p>
   */
  UseGeolocationForTimeZone?: boolean;

  /**
   * <p>The format of the geolocation attribute. Valid Values:<code>"LAT_LONG"</code> and
   *                 <code>"CC_POSTALCODE"</code>.</p>
   */
  GeolocationFormat?: string;

  /**
   * <p>The location of the training data to import and an AWS Identity and Access Management (IAM) role that Amazon Forecast
   *       can assume to access the data.</p>
   *          <p>If encryption is used, <code>DataSource</code> includes an AWS Key Management Service (KMS) key.</p>
   */
  DataSource?: DataSource;

  /**
   * <p>The estimated time remaining in minutes for the dataset import job to complete.</p>
   */
  EstimatedTimeRemainingInMinutes?: number;

  /**
   * <p>Statistical information about each field in the input data.</p>
   */
  FieldStatistics?: { [key: string]: Statistics };

  /**
   * <p>The size of the dataset in gigabytes (GB) after the import job has finished.</p>
   */
  DataSize?: number;

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
   */
  Status?: string;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * <p>When the dataset import job was created.</p>
   */
  CreationTime?: Date;

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
   */
  LastModificationTime?: Date;
}

export namespace DescribeDatasetImportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetImportJobResponse): any => ({
    ...obj,
  });
}

export interface DescribeForecastRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the forecast.</p>
   */
  ForecastArn: string | undefined;
}

export namespace DescribeForecastRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeForecastRequest): any => ({
    ...obj,
  });
}

export interface DescribeForecastResponse {
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
  ForecastTypes?: string[];

  /**
   * <p>The ARN of the predictor used to generate the forecast.</p>
   */
  PredictorArn?: string;

  /**
   * <p>The ARN of the dataset group that provided the data used to train the predictor.</p>
   */
  DatasetGroupArn?: string;

  /**
   * <p>The estimated time remaining in minutes for the forecast job to complete.</p>
   */
  EstimatedTimeRemainingInMinutes?: number;

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
   */
  Status?: string;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * <p>When the forecast creation task was created.</p>
   */
  CreationTime?: Date;

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
   */
  LastModificationTime?: Date;
}

export namespace DescribeForecastResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeForecastResponse): any => ({
    ...obj,
  });
}

export interface DescribeForecastExportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the forecast export job.</p>
   */
  ForecastExportJobArn: string | undefined;
}

export namespace DescribeForecastExportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeForecastExportJobRequest): any => ({
    ...obj,
  });
}

export interface DescribeForecastExportJobResponse {
  /**
   * <p>The ARN of the forecast export job.</p>
   */
  ForecastExportJobArn?: string;

  /**
   * <p>The name of the forecast export job.</p>
   */
  ForecastExportJobName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the exported forecast.</p>
   */
  ForecastArn?: string;

  /**
   * <p>The path to the Amazon Simple Storage Service (Amazon S3) bucket where the forecast is exported.</p>
   */
  Destination?: DataDestination;

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
   * <p>When the forecast export job was created.</p>
   */
  CreationTime?: Date;

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
   */
  LastModificationTime?: Date;
}

export namespace DescribeForecastExportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeForecastExportJobResponse): any => ({
    ...obj,
  });
}

export interface DescribePredictorRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor that you want information about.</p>
   */
  PredictorArn: string | undefined;
}

export namespace DescribePredictorRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePredictorRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The status, start time, and end time of a backtest, as well as a failure reason if
 *       applicable.</p>
 */
export interface TestWindowSummary {
  /**
   * <p>The time at which the test began.</p>
   */
  TestWindowStart?: Date;

  /**
   * <p>The time at which the test ended.</p>
   */
  TestWindowEnd?: Date;

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
   * <p>If the test failed, the reason why it failed.</p>
   */
  Message?: string;
}

export namespace TestWindowSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TestWindowSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The algorithm used to perform a backtest and the status of those tests.</p>
 */
export interface PredictorExecution {
  /**
   * <p>The ARN of the algorithm used to test the predictor.</p>
   */
  AlgorithmArn?: string;

  /**
   * <p>An array of test windows used to evaluate the algorithm. The
   *         <code>NumberOfBacktestWindows</code> from the
   *       object determines the number of windows in the array.</p>
   */
  TestWindows?: TestWindowSummary[];
}

export namespace PredictorExecution {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PredictorExecution): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details on the backtests performed to evaluate the accuracy of the predictor. The
 *       tests are returned in descending order of accuracy, with the most accurate backtest appearing
 *       first. You specify the number of backtests to perform when you call the  operation.</p>
 */
export interface PredictorExecutionDetails {
  /**
   * <p>An array of the backtests performed to evaluate the accuracy of the predictor against a
   *       particular algorithm. The <code>NumberOfBacktestWindows</code> from the  object determines the number of windows in the
   *       array.</p>
   */
  PredictorExecutions?: PredictorExecution[];
}

export namespace PredictorExecutionDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PredictorExecutionDetails): any => ({
    ...obj,
  });
}

export interface DescribePredictorResponse {
  /**
   * <p>The ARN of the predictor.</p>
   */
  PredictorArn?: string;

  /**
   * <p>The name of the predictor.</p>
   */
  PredictorName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm used for model training.</p>
   */
  AlgorithmArn?: string;

  /**
   * <p>The number of time-steps of the forecast. The forecast horizon is also called the
   *       prediction length.</p>
   */
  ForecastHorizon?: number;

  /**
   * <p>The forecast types used during predictor training. Default value is <code>["0.1","0.5","0.9"]</code>
   *          </p>
   */
  ForecastTypes?: string[];

  /**
   * <p>Whether the predictor is set to perform AutoML.</p>
   */
  PerformAutoML?: boolean;

  /**
   * <note>
   *             <p> The <code>LatencyOptimized</code> AutoML override strategy is only available in private beta.
   *                 Contact AWS Support or your account manager to learn more about access privileges.
   *             </p>
   *         </note>
   *         <p>The AutoML strategy used to train the predictor. Unless <code>LatencyOptimized</code>
   *             is specified, the AutoML strategy optimizes predictor accuracy.</p>
   *         <p>This parameter is only valid for predictors trained using AutoML.</p>
   */
  AutoMLOverrideStrategy?: AutoMLOverrideStrategy | string;

  /**
   * <p>Whether the predictor is set to perform hyperparameter optimization (HPO).</p>
   */
  PerformHPO?: boolean;

  /**
   * <p>The default training parameters or overrides selected during model training. When running
   *       AutoML or choosing HPO with CNN-QR or DeepAR+, the optimized values for the chosen
   *       hyperparameters are returned. For more information, see <a>aws-forecast-choosing-recipes</a>.</p>
   */
  TrainingParameters?: { [key: string]: string };

  /**
   * <p>Used to override the default evaluation parameters of the specified algorithm. Amazon Forecast
   *       evaluates a predictor by splitting a dataset into training data and testing data. The
   *       evaluation parameters define how to perform the split and the number of iterations.</p>
   */
  EvaluationParameters?: EvaluationParameters;

  /**
   * <p>The hyperparameter override values for the algorithm.</p>
   */
  HPOConfig?: HyperParameterTuningJobConfig;

  /**
   * <p>Describes the dataset group that contains the data to use to train the predictor.</p>
   */
  InputDataConfig?: InputDataConfig;

  /**
   * <p>The featurization configuration.</p>
   */
  FeaturizationConfig?: FeaturizationConfig;

  /**
   * <p>An AWS Key Management Service (KMS) key and the AWS Identity and Access Management (IAM) role that Amazon Forecast can assume to access
   *       the key.</p>
   */
  EncryptionConfig?: EncryptionConfig;

  /**
   * <p>Details on the the status and results of the backtests performed to evaluate the accuracy
   *       of the predictor. You specify the number of backtests to perform when you call the  operation.</p>
   */
  PredictorExecutionDetails?: PredictorExecutionDetails;

  /**
   * <p>The estimated time remaining in minutes for the predictor training job to complete.</p>
   */
  EstimatedTimeRemainingInMinutes?: number;

  /**
   * <p>An array of the ARNs of the dataset import jobs used to import training data for the
   *       predictor.</p>
   */
  DatasetImportJobArns?: string[];

  /**
   * <p>When <code>PerformAutoML</code> is specified, the ARN of the chosen algorithm.</p>
   */
  AutoMLAlgorithmArns?: string[];

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
   *           <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *           <code>DELETE_FAILED</code>
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
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * <p>When the model training task was created.</p>
   */
  CreationTime?: Date;

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
   */
  LastModificationTime?: Date;

  /**
   * <p>The accuracy metric used to optimize the predictor.</p>
   */
  OptimizationMetric?: OptimizationMetric | string;
}

export namespace DescribePredictorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePredictorResponse): any => ({
    ...obj,
  });
}

export interface DescribePredictorBacktestExportJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor backtest export job.</p>
   */
  PredictorBacktestExportJobArn: string | undefined;
}

export namespace DescribePredictorBacktestExportJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePredictorBacktestExportJobRequest): any => ({
    ...obj,
  });
}

export interface DescribePredictorBacktestExportJobResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor backtest export job.</p>
   */
  PredictorBacktestExportJobArn?: string;

  /**
   * <p>The name of the predictor backtest export job.</p>
   */
  PredictorBacktestExportJobName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the predictor.</p>
   */
  PredictorArn?: string;

  /**
   * <p>The destination for an export job. Provide an S3 path, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast
   *       to access the location, and an AWS Key Management Service (KMS) key (optional). </p>
   */
  Destination?: DataDestination;

  /**
   * <p>Information about any errors that may have occurred during the backtest export.</p>
   */
  Message?: string;

  /**
   * <p>The status of the predictor backtest export job. States include: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *                     <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *                     <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>When the predictor backtest export job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the job:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *                     failed.</p>
   *             </li>
   *          </ul>
   */
  LastModificationTime?: Date;
}

export namespace DescribePredictorBacktestExportJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePredictorBacktestExportJobResponse): any => ({
    ...obj,
  });
}

export interface GetAccuracyMetricsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor to get metrics for.</p>
   */
  PredictorArn: string | undefined;
}

export namespace GetAccuracyMetricsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccuracyMetricsRequest): any => ({
    ...obj,
  });
}

export enum EvaluationType {
  COMPUTED = "COMPUTED",
  SUMMARY = "SUMMARY",
}

/**
 * <p> Provides detailed error metrics to evaluate the performance of a predictor. This object
 *       is part of the <a>Metrics</a> object. </p>
 */
export interface ErrorMetric {
  /**
   * <p> The Forecast type used to compute WAPE, MAPE, MASE, and RMSE. </p>
   */
  ForecastType?: string;

  /**
   * <p> The weighted absolute percentage error (WAPE). </p>
   */
  WAPE?: number;

  /**
   * <p> The root-mean-square error (RMSE). </p>
   */
  RMSE?: number;

  /**
   * <p>The Mean Absolute Scaled Error (MASE)</p>
   */
  MASE?: number;

  /**
   * <p>The Mean Absolute Percentage Error (MAPE)</p>
   */
  MAPE?: number;
}

export namespace ErrorMetric {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorMetric): any => ({
    ...obj,
  });
}

/**
 * <p>The weighted loss value for a quantile. This object is part of the <a>Metrics</a> object.</p>
 */
export interface WeightedQuantileLoss {
  /**
   * <p>The quantile. Quantiles divide a probability distribution into regions of equal
   *       probability. For example, if the distribution was divided into 5 regions of equal probability,
   *       the quantiles would be 0.2, 0.4, 0.6, and 0.8.</p>
   */
  Quantile?: number;

  /**
   * <p>The difference between the predicted value and the actual value over the quantile,
   *       weighted (normalized) by dividing by the sum over all quantiles.</p>
   */
  LossValue?: number;
}

export namespace WeightedQuantileLoss {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WeightedQuantileLoss): any => ({
    ...obj,
  });
}

/**
 * <p>Provides metrics that are used to evaluate the performance of a predictor. This object is
 *       part of the <a>WindowSummary</a> object.</p>
 */
export interface Metrics {
  /**
   * @deprecated
   *
   * <p>The root-mean-square error (RMSE).</p>
   */
  RMSE?: number;

  /**
   * <p>An array of weighted quantile losses. Quantiles divide a probability distribution into
   *       regions of equal probability. The distribution in this case is the loss function.</p>
   */
  WeightedQuantileLosses?: WeightedQuantileLoss[];

  /**
   * <p> Provides detailed error metrics for each forecast type. Metrics include root-mean
   *       square-error (RMSE), mean absolute percentage error (MAPE), mean absolute scaled error (MASE),
   *       and weighted average percentage error (WAPE). </p>
   */
  ErrorMetrics?: ErrorMetric[];

  /**
   * <p>The average value of all weighted quantile losses.</p>
   */
  AverageWeightedQuantileLoss?: number;
}

export namespace Metrics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Metrics): any => ({
    ...obj,
  });
}

/**
 * <p>The metrics for a time range within the evaluation portion of a dataset. This object is
 *       part of the <a>EvaluationResult</a> object.</p>
 *          <p>The <code>TestWindowStart</code> and <code>TestWindowEnd</code> parameters are determined
 *       by the <code>BackTestWindowOffset</code> parameter of the <a>EvaluationParameters</a> object.</p>
 */
export interface WindowSummary {
  /**
   * <p>The timestamp that defines the start of the window.</p>
   */
  TestWindowStart?: Date;

  /**
   * <p>The timestamp that defines the end of the window.</p>
   */
  TestWindowEnd?: Date;

  /**
   * <p>The number of data points within the window.</p>
   */
  ItemCount?: number;

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
   * <p>Provides metrics used to evaluate the performance of a predictor.</p>
   */
  Metrics?: Metrics;
}

export namespace WindowSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WindowSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The results of evaluating an algorithm. Returned as part of the <a>GetAccuracyMetrics</a> response.</p>
 */
export interface EvaluationResult {
  /**
   * <p>The Amazon Resource Name (ARN) of the algorithm that was evaluated.</p>
   */
  AlgorithmArn?: string;

  /**
   * <p>The array of test windows used for evaluating the algorithm. The
   *         <code>NumberOfBacktestWindows</code> from the <a>EvaluationParameters</a> object
   *       determines the number of windows in the array.</p>
   */
  TestWindows?: WindowSummary[];
}

export namespace EvaluationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EvaluationResult): any => ({
    ...obj,
  });
}

export interface GetAccuracyMetricsResponse {
  /**
   * <p>An array of results from evaluating the predictor.</p>
   */
  PredictorEvaluationResults?: EvaluationResult[];

  /**
   * <note>
   *             <p> The <code>LatencyOptimized</code> AutoML override strategy is only available in private beta.
   *                 Contact AWS Support or your account manager to learn more about access privileges.
   *             </p>
   *         </note>
   *         <p>The AutoML strategy used to train the predictor. Unless <code>LatencyOptimized</code>
   *             is specified, the AutoML strategy optimizes predictor accuracy.</p>
   *         <p>This parameter is only valid for predictors trained using AutoML.</p>
   */
  AutoMLOverrideStrategy?: AutoMLOverrideStrategy | string;

  /**
   * <p>The accuracy metric used to optimize the predictor.</p>
   */
  OptimizationMetric?: OptimizationMetric | string;
}

export namespace GetAccuracyMetricsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAccuracyMetricsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The token is not valid. Tokens expire after 24 hours.</p>
 */
export interface InvalidNextTokenException extends __SmithyException, $MetadataBearer {
  name: "InvalidNextTokenException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidNextTokenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidNextTokenException): any => ({
    ...obj,
  });
}

export interface ListDatasetGroupsRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace ListDatasetGroupsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetGroupsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of the dataset group properties used in the <a>ListDatasetGroups</a> operation. To get the complete set of properties, call the
 *         <a>DescribeDatasetGroup</a> operation, and provide the
 *         <code>DatasetGroupArn</code>.</p>
 */
export interface DatasetGroupSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group.</p>
   */
  DatasetGroupArn?: string;

  /**
   * <p>The name of the dataset group.</p>
   */
  DatasetGroupName?: string;

  /**
   * <p>When the dataset group was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>When the dataset group was created or last updated from a call to the <a>UpdateDatasetGroup</a> operation. While the dataset group is being updated,
   *         <code>LastModificationTime</code> is the current time of the <code>ListDatasetGroups</code>
   *       call.</p>
   */
  LastModificationTime?: Date;
}

export namespace DatasetGroupSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetGroupSummary): any => ({
    ...obj,
  });
}

export interface ListDatasetGroupsResponse {
  /**
   * <p>An array of objects that summarize each dataset group's properties.</p>
   */
  DatasetGroups?: DatasetGroupSummary[];

  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListDatasetGroupsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetGroupsResponse): any => ({
    ...obj,
  });
}

export enum FilterConditionString {
  IS = "IS",
  IS_NOT = "IS_NOT",
}

/**
 * <p>Describes a filter for choosing a subset of objects. Each filter consists of a
 *       condition and a match statement. The condition is either <code>IS</code> or
 *       <code>IS_NOT</code>, which specifies whether to include or exclude
 *       the objects that match the statement, respectively. The match statement consists of a key and a
 *       value.</p>
 */
export interface Filter {
  /**
   * <p>The name of the parameter to filter on.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value to match.</p>
   */
  Value: string | undefined;

  /**
   * <p>The condition to apply. To include the objects that match the statement, specify
   *       <code>IS</code>. To exclude matching objects, specify <code>IS_NOT</code>.</p>
   */
  Condition: FilterConditionString | string | undefined;
}

export namespace Filter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

export interface ListDatasetImportJobsRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

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
  Filters?: Filter[];
}

export namespace ListDatasetImportJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetImportJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of the dataset import job properties used in the <a>ListDatasetImportJobs</a> operation. To get the complete set of properties, call the
 *         <a>DescribeDatasetImportJob</a> operation, and provide the
 *         <code>DatasetImportJobArn</code>.</p>
 */
export interface DatasetImportJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the dataset import job.</p>
   */
  DatasetImportJobArn?: string;

  /**
   * <p>The name of the dataset import job.</p>
   */
  DatasetImportJobName?: string;

  /**
   * <p>The location of the training data to import and an AWS Identity and Access Management (IAM) role that Amazon Forecast
   *       can assume to access the data. The training data must be stored in an Amazon S3 bucket.</p>
   *          <p>If encryption is used, <code>DataSource</code> includes an AWS Key Management Service (KMS) key.</p>
   */
  DataSource?: DataSource;

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
   */
  Status?: string;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * <p>When the dataset import job was created.</p>
   */
  CreationTime?: Date;

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
   */
  LastModificationTime?: Date;
}

export namespace DatasetImportJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetImportJobSummary): any => ({
    ...obj,
  });
}

export interface ListDatasetImportJobsResponse {
  /**
   * <p>An array of objects that summarize each dataset import job's properties.</p>
   */
  DatasetImportJobs?: DatasetImportJobSummary[];

  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListDatasetImportJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetImportJobsResponse): any => ({
    ...obj,
  });
}

export interface ListDatasetsRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;
}

export namespace ListDatasetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of the dataset properties used in the <a>ListDatasets</a>
 *       operation. To get the complete set of properties, call the <a>DescribeDataset</a>
 *       operation, and provide the <code>DatasetArn</code>.</p>
 */
export interface DatasetSummary {
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
   * <p>When the dataset was created.</p>
   */
  CreationTime?: Date;

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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetSummary): any => ({
    ...obj,
  });
}

export interface ListDatasetsResponse {
  /**
   * <p>An array of objects that summarize each dataset's properties.</p>
   */
  Datasets?: DatasetSummary[];

  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListDatasetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetsResponse): any => ({
    ...obj,
  });
}

export interface ListForecastExportJobsRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

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
  Filters?: Filter[];
}

export namespace ListForecastExportJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListForecastExportJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of the forecast export job properties used in the <a>ListForecastExportJobs</a> operation. To get the complete set of properties, call
 *       the <a>DescribeForecastExportJob</a> operation, and provide the listed
 *         <code>ForecastExportJobArn</code>.</p>
 */
export interface ForecastExportJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the forecast export job.</p>
   */
  ForecastExportJobArn?: string;

  /**
   * <p>The name of the forecast export job.</p>
   */
  ForecastExportJobName?: string;

  /**
   * <p>The path to the Amazon Simple Storage Service (Amazon S3) bucket where the forecast is exported.</p>
   */
  Destination?: DataDestination;

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
   */
  Status?: string;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * <p>When the forecast export job was created.</p>
   */
  CreationTime?: Date;

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
   */
  LastModificationTime?: Date;
}

export namespace ForecastExportJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ForecastExportJobSummary): any => ({
    ...obj,
  });
}

export interface ListForecastExportJobsResponse {
  /**
   * <p>An array of objects that summarize each export job's properties.</p>
   */
  ForecastExportJobs?: ForecastExportJobSummary[];

  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListForecastExportJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListForecastExportJobsResponse): any => ({
    ...obj,
  });
}

export interface ListForecastsRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

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
  Filters?: Filter[];
}

export namespace ListForecastsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListForecastsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of the forecast properties used in the <a>ListForecasts</a>
 *       operation. To get the complete set of properties, call the <a>DescribeForecast</a>
 *       operation, and provide the <code>ForecastArn</code> that is listed in the summary.</p>
 */
export interface ForecastSummary {
  /**
   * <p>The ARN of the forecast.</p>
   */
  ForecastArn?: string;

  /**
   * <p>The name of the forecast.</p>
   */
  ForecastName?: string;

  /**
   * <p>The ARN of the predictor used to generate the forecast.</p>
   */
  PredictorArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group that provided the data used to train
   *       the predictor.</p>
   */
  DatasetGroupArn?: string;

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
   */
  Status?: string;

  /**
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * <p>When the forecast creation task was created.</p>
   */
  CreationTime?: Date;

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
   */
  LastModificationTime?: Date;
}

export namespace ForecastSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ForecastSummary): any => ({
    ...obj,
  });
}

export interface ListForecastsResponse {
  /**
   * <p>An array of objects that summarize each forecast's properties.</p>
   */
  Forecasts?: ForecastSummary[];

  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set
   *       of results, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListForecastsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListForecastsResponse): any => ({
    ...obj,
  });
}

export interface ListPredictorBacktestExportJobsRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a NextToken.
   *             To retrieve the next set of results, use the token in the next request. Tokens expire after
   *             24 hours.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>An array of filters. For each filter, provide a condition and a match statement. The
   *                 condition is either <code>IS</code> or <code>IS_NOT</code>, which specifies whether to
   *                 include or exclude the predictor backtest export jobs that match the statement from the
   *                 list. The match statement consists of a key and a value.</p>
   *             <p>
   *                 <b>Filter properties</b>
   *             </p>
   *             <ul>
   *             <li>
   *                     <p>
   *                   <code>Condition</code> - The condition to apply. Valid values are
   *                         <code>IS</code> and <code>IS_NOT</code>. To include the predictor backtest
   *                         export jobs that match the statement, specify <code>IS</code>. To exclude matching
   *                         predictor backtest export jobs, specify <code>IS_NOT</code>.</p>
   *                 </li>
   *             <li>
   *                     <p>
   *                   <code>Key</code> - The name of the parameter to filter on. Valid values are
   *                         <code>PredictorArn</code> and <code>Status</code>.</p>
   *                 </li>
   *             <li>
   *                     <p>
   *                   <code>Value</code> - The value to match.</p>
   *                 </li>
   *          </ul>
   */
  Filters?: Filter[];
}

export namespace ListPredictorBacktestExportJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPredictorBacktestExportJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of the predictor backtest export job properties used in the <a>ListPredictorBacktestExportJobs</a> operation. To get a complete set of properties, call
 *             the <a>DescribePredictorBacktestExportJob</a> operation, and provide the listed
 *             <code>PredictorBacktestExportJobArn</code>.</p>
 */
export interface PredictorBacktestExportJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the predictor backtest export job.</p>
   */
  PredictorBacktestExportJobArn?: string;

  /**
   * <p>The name of the predictor backtest export job.</p>
   */
  PredictorBacktestExportJobName?: string;

  /**
   * <p>The destination for an export job. Provide an S3 path, an AWS Identity and Access Management (IAM) role that allows Amazon Forecast
   *       to access the location, and an AWS Key Management Service (KMS) key (optional). </p>
   */
  Destination?: DataDestination;

  /**
   * <p>The status of the predictor backtest export job. States include: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ACTIVE</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CREATE_PENDING</code>, <code>CREATE_IN_PROGRESS</code>,
   *                     <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>CREATE_STOPPING</code>, <code>CREATE_STOPPED</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *                     <code>DELETE_FAILED</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>Information about any errors that may have occurred during the backtest export.</p>
   */
  Message?: string;

  /**
   * <p>When the predictor backtest export job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last time the resource was modified. The timestamp depends on the status of the job:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>CREATE_PENDING</code> - The <code>CreationTime</code>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CREATE_IN_PROGRESS</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CREATE_STOPPING</code> - The current timestamp.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CREATE_STOPPED</code> - When the job stopped.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ACTIVE</code> or <code>CREATE_FAILED</code> - When the job finished or
   *                     failed.</p>
   *             </li>
   *          </ul>
   */
  LastModificationTime?: Date;
}

export namespace PredictorBacktestExportJobSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PredictorBacktestExportJobSummary): any => ({
    ...obj,
  });
}

export interface ListPredictorBacktestExportJobsResponse {
  /**
   * <p>An array of objects that summarize the properties of each predictor backtest export
   *             job.</p>
   */
  PredictorBacktestExportJobs?: PredictorBacktestExportJobSummary[];

  /**
   * <p>Returns this token if the response is truncated. To retrieve the next
   *             set of results, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListPredictorBacktestExportJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPredictorBacktestExportJobsResponse): any => ({
    ...obj,
  });
}

export interface ListPredictorsRequest {
  /**
   * <p>If the result of the previous request was truncated, the response includes a
   *         <code>NextToken</code>. To retrieve the next set of results, use the token in the next
   *       request. Tokens expire after 24 hours.</p>
   */
  NextToken?: string;

  /**
   * <p>The number of items to return in the response.</p>
   */
  MaxResults?: number;

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
  Filters?: Filter[];
}

export namespace ListPredictorsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPredictorsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a summary of the predictor properties that are used in the <a>ListPredictors</a> operation. To get the complete set of properties, call the <a>DescribePredictor</a> operation, and provide the listed
 *       <code>PredictorArn</code>.</p>
 */
export interface PredictorSummary {
  /**
   * <p>The ARN of the predictor.</p>
   */
  PredictorArn?: string;

  /**
   * <p>The name of the predictor.</p>
   */
  PredictorName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset group that contains the data used to train
   *       the predictor.</p>
   */
  DatasetGroupArn?: string;

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
   *           <code>CREATE_FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETE_PENDING</code>, <code>DELETE_IN_PROGRESS</code>,
   *           <code>DELETE_FAILED</code>
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
   * <p>If an error occurred, an informational message about the error.</p>
   */
  Message?: string;

  /**
   * <p>When the model training task was created.</p>
   */
  CreationTime?: Date;

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
   */
  LastModificationTime?: Date;
}

export namespace PredictorSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PredictorSummary): any => ({
    ...obj,
  });
}

export interface ListPredictorsResponse {
  /**
   * <p>An array of objects that summarize each predictor's properties.</p>
   */
  Predictors?: PredictorSummary[];

  /**
   * <p>If the response is truncated, Amazon Forecast returns this token. To retrieve the next set of
   *       results, use the token in the next request.</p>
   */
  NextToken?: string;
}

export namespace ListPredictorsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPredictorsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are Forecast dataset groups, datasets, dataset import jobs, predictors, forecasts, and forecast export jobs.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags for the resource.</p>
   */
  Tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface StopResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource to stop. The supported ARNs
   *          are <code>DatasetImportJobArn</code>, <code>PredictorArn</code>,
   *             <code>PredictorBacktestExportJobArn</code>, <code>ForecastArn</code>, and
   *             <code>ForecastExportJobArn</code>. </p>
   */
  ResourceArn: string | undefined;
}

export namespace StopResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are Forecast dataset groups, datasets, dataset import jobs, predictors, forecasts, and forecast export jobs.</p>
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
   *                <p>For each resource, each tag key must be unique, and each tag key can have only one value.</p>
   *             </li>
   *             <li>
   *                <p>Maximum key length - 128 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>Maximum value length - 256 Unicode characters in UTF-8.</p>
   *             </li>
   *             <li>
   *                <p>If your tagging schema is used across multiple services and resources, remember that other services may have restrictions on allowed characters. Generally allowed characters are: letters, numbers, and spaces representable in UTF-8, and the following characters: + - = . _ : / @.</p>
   *             </li>
   *             <li>
   *                <p>Tag keys and values are case sensitive.</p>
   *             </li>
   *             <li>
   *                <p>Do not use <code>aws:</code>, <code>AWS:</code>, or any upper or lowercase combination of such as a prefix for keys as it is reserved for AWS use. You cannot edit or delete tag keys with this prefix. Values can have this prefix. If a tag value has <code>aws</code> as its prefix but the key does not, then Forecast considers it to be a user tag and will count against the limit of 50 tags. Tags with only the key prefix of <code>aws</code> do not count against your tags per resource limit.</p>
   *             </li>
   *          </ul>
   */
  Tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: obj.Tags.map((item) => Tag.filterSensitiveLog(item)) }),
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the resource for which to list the tags. Currently, the supported resources are Forecast dataset groups, datasets, dataset import jobs, predictors, forecasts, and forecast exports.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The keys of the tags to be removed.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
    ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateDatasetGroupRequest {
  /**
   * <p>The ARN of the dataset group.</p>
   */
  DatasetGroupArn: string | undefined;

  /**
   * <p>An array of the Amazon Resource Names (ARNs) of the datasets to add to the dataset
   *       group.</p>
   */
  DatasetArns: string[] | undefined;
}

export namespace UpdateDatasetGroupRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDatasetGroupRequest): any => ({
    ...obj,
  });
}

export interface UpdateDatasetGroupResponse {}

export namespace UpdateDatasetGroupResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDatasetGroupResponse): any => ({
    ...obj,
  });
}
