// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IoTAnalyticsServiceException as __BaseException } from "./IoTAnalyticsServiceException";

/**
 * <p>An activity that adds other attributes based on existing attributes in the message.</p>
 * @public
 */
export interface AddAttributesActivity {
  /**
   * <p>The name of the addAttributes activity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A list of 1-50 <code>AttributeNameMapping</code> objects that map an existing attribute to
   *       a new attribute.</p>
   *          <note>
   *             <p>The existing attributes remain in the message, so if you want to remove the originals,
   *         use <code>RemoveAttributeActivity</code>.</p>
   *          </note>
   * @public
   */
  attributes: Record<string, string> | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   * @public
   */
  next?: string | undefined;
}

/**
 * <p>Information about a message.</p>
 * @public
 */
export interface Message {
  /**
   * <p>The ID you want to assign to the message. Each <code>messageId</code> must be unique
   *          within each batch sent.</p>
   * @public
   */
  messageId: string | undefined;

  /**
   * <p>The payload of the message. This can be a JSON string or a base64-encoded string
   *          representing binary data, in which case you must decode it by means of a pipeline
   *          activity.</p>
   * @public
   */
  payload: Uint8Array | undefined;
}

/**
 * @public
 */
export interface BatchPutMessageRequest {
  /**
   * <p>The name of the channel where the messages are sent.</p>
   * @public
   */
  channelName: string | undefined;

  /**
   * <p>The list of messages to be sent. Each message has the format: \{ "messageId": "string",
   *          "payload": "string"\}.</p>
   *          <p>The field names of message payloads (data) that you send to IoT Analytics:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain only alphanumeric characters and undescores (_). No other special characters are
   *                allowed.</p>
   *             </li>
   *             <li>
   *                <p>Must begin with an alphabetic character or single underscore (_).</p>
   *             </li>
   *             <li>
   *                <p>Cannot contain hyphens (-).</p>
   *             </li>
   *             <li>
   *                <p>In regular expression terms: "^[A-Za-z_]([A-Za-z0-9]*|[A-Za-z0-9][A-Za-z0-9_]*)$".
   *             </p>
   *             </li>
   *             <li>
   *                <p>Cannot be more than 255 characters.</p>
   *             </li>
   *             <li>
   *                <p>Are case insensitive. (Fields named foo and FOO in the same payload are considered
   *                duplicates.)</p>
   *             </li>
   *          </ul>
   *          <p>For example, \{"temp_01": 29\} or \{"_temp_01": 29\} are valid, but \{"temp-01": 29\},
   *  \{"01_temp": 29\} or \{"__temp_01": 29\} are invalid in message payloads.  </p>
   * @public
   */
  messages: Message[] | undefined;
}

/**
 * <p>Contains informations about errors.</p>
 * @public
 */
export interface BatchPutMessageErrorEntry {
  /**
   * <p>The ID of the message that caused the error. See the value corresponding to the
   *             <code>messageId</code> key in the message object.</p>
   * @public
   */
  messageId?: string | undefined;

  /**
   * <p>The code associated with the error.</p>
   * @public
   */
  errorCode?: string | undefined;

  /**
   * <p>The message associated with the error.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchPutMessageResponse {
  /**
   * <p>A list of any errors encountered when sending the messages to the channel.</p>
   * @public
   */
  batchPutMessageErrorEntries?: BatchPutMessageErrorEntry[] | undefined;
}

/**
 * <p>There was an internal failure.</p>
 * @public
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
  }
}

/**
 * <p>The request was not valid.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
  }
}

/**
 * <p>A resource with the specified name could not be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>The service is temporarily unavailable.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * @public
 */
export interface CancelPipelineReprocessingRequest {
  /**
   * <p>The name of pipeline for which data reprocessing is canceled.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The ID of the reprocessing task (returned by
   *       <code>StartPipelineReprocessing</code>).</p>
   * @public
   */
  reprocessingId: string | undefined;
}

/**
 * @public
 */
export interface CancelPipelineReprocessingResponse {}

/**
 * <p>Used to store channel data in an S3 bucket that you manage. If customer-managed storage is
 *       selected, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice
 *       of S3 storage after the data store is created.</p>
 * @public
 */
export interface CustomerManagedChannelS3Storage {
  /**
   * <p>The name of the S3 bucket in which channel data is stored.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>(Optional) The prefix used to create the keys of the channel data objects. Each object in
   *       an S3 bucket has a key that is its unique identifier in the bucket. Each object in a bucket
   *       has exactly one key. The prefix must end with a forward slash (/).</p>
   * @public
   */
  keyPrefix?: string | undefined;

  /**
   * <p>The ARN of the role that grants IoT Analytics permission to interact with your Amazon S3
   *       resources.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * <p>Used to store channel data in an S3 bucket managed by IoT Analytics. You can't change the choice
 *       of S3 storage after the data store is created.</p>
 * @public
 */
export interface ServiceManagedChannelS3Storage {}

/**
 * <p>Where channel data is stored. You may choose one of <code>serviceManagedS3</code>,
 *         <code>customerManagedS3</code> storage. If not specified, the default is
 *         <code>serviceManagedS3</code>. This can't be changed after creation of the channel.</p>
 * @public
 */
export interface ChannelStorage {
  /**
   * <p>Used to store channel data in an S3 bucket managed by IoT Analytics. You can't change the choice
   *       of S3 storage after the data store is created.</p>
   * @public
   */
  serviceManagedS3?: ServiceManagedChannelS3Storage | undefined;

  /**
   * <p>Used to store channel data in an S3 bucket that you manage. If customer managed storage is
   *       selected, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice
   *       of S3 storage after the data store is created.</p>
   * @public
   */
  customerManagedS3?: CustomerManagedChannelS3Storage | undefined;
}

/**
 * <p>How long, in days, message data is kept.</p>
 * @public
 */
export interface RetentionPeriod {
  /**
   * <p>If true, message data is kept indefinitely.</p>
   * @public
   */
  unlimited?: boolean | undefined;

  /**
   * <p>The number of days that message data is kept. The <code>unlimited</code> parameter must be
   *       false.</p>
   * @public
   */
  numberOfDays?: number | undefined;
}

/**
 * <p>A set of key-value pairs that are used to manage the resource.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag's key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The tag's value.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface CreateChannelRequest {
  /**
   * <p>The name of the channel.</p>
   * @public
   */
  channelName: string | undefined;

  /**
   * <p>Where channel data is stored. You can choose one of <code>serviceManagedS3</code> or
   *         <code>customerManagedS3</code> storage. If not specified, the default is
   *         <code>serviceManagedS3</code>. You can't change this storage option after the channel is
   *       created.</p>
   * @public
   */
  channelStorage?: ChannelStorage | undefined;

  /**
   * <p>How long, in days, message data is kept for the channel. When
   *         <code>customerManagedS3</code> storage is selected, this parameter is ignored.</p>
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>Metadata which can be used to manage the channel.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateChannelResponse {
  /**
   * <p>The name of the channel.</p>
   * @public
   */
  channelName?: string | undefined;

  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  channelArn?: string | undefined;

  /**
   * <p>How long, in days, message data is kept for the channel.</p>
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;
}

/**
 * <p>The command caused an internal limit to be exceeded.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * <p>A resource with the same name already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The ARN of the resource.</p>
   * @public
   */
  resourceArn?: string | undefined;

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
    this.resourceId = opts.resourceId;
    this.resourceArn = opts.resourceArn;
  }
}

/**
 * @public
 * @enum
 */
export const ComputeType = {
  ACU_1: "ACU_1",
  ACU_2: "ACU_2",
} as const;

/**
 * @public
 */
export type ComputeType = (typeof ComputeType)[keyof typeof ComputeType];

/**
 * <p>The configuration of the resource used to execute the <code>containerAction</code>.</p>
 * @public
 */
export interface ResourceConfiguration {
  /**
   * <p>The type of the compute resource used to execute the <code>containerAction</code>.
   *       Possible values are: <code>ACU_1</code> (vCPU=4, memory=16 GiB) or <code>ACU_2</code> (vCPU=8,
   *       memory=32 GiB).</p>
   * @public
   */
  computeType: ComputeType | undefined;

  /**
   * <p>The size, in GB, of the persistent storage available to the resource instance used to
   *       execute the <code>containerAction</code> (min: 1, max: 50).</p>
   * @public
   */
  volumeSizeInGB: number | undefined;
}

/**
 * <p>The dataset whose latest contents are used as input to the notebook or application.</p>
 * @public
 */
export interface DatasetContentVersionValue {
  /**
   * <p>The name of the dataset whose latest contents are used as input to the notebook or
   *       application.</p>
   * @public
   */
  datasetName: string | undefined;
}

/**
 * <p>The value of the variable as a structure that specifies an output file URI.</p>
 * @public
 */
export interface OutputFileUriValue {
  /**
   * <p>The URI of the location where dataset contents are stored, usually the URI of a file in an
   *       S3 bucket.</p>
   * @public
   */
  fileName: string | undefined;
}

/**
 * <p>An instance of a variable to be passed to the <code>containerAction</code> execution. Each
 *       variable must have a name and a value given by one of <code>stringValue</code>,
 *         <code>datasetContentVersionValue</code>, or <code>outputFileUriValue</code>.</p>
 * @public
 */
export interface Variable {
  /**
   * <p>The name of the variable.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The value of the variable as a string.</p>
   * @public
   */
  stringValue?: string | undefined;

  /**
   * <p>The value of the variable as a double (numeric).</p>
   * @public
   */
  doubleValue?: number | undefined;

  /**
   * <p>The value of the variable as a structure that specifies a dataset content version.</p>
   * @public
   */
  datasetContentVersionValue?: DatasetContentVersionValue | undefined;

  /**
   * <p>The value of the variable as a structure that specifies an output file URI.</p>
   * @public
   */
  outputFileUriValue?: OutputFileUriValue | undefined;
}

/**
 * <p>Information required to run the <code>containerAction</code> to produce dataset
 *       contents.</p>
 * @public
 */
export interface ContainerDatasetAction {
  /**
   * <p>The ARN of the Docker container stored in your account. The Docker container contains an
   *       application and required support libraries and is used to generate dataset contents.</p>
   * @public
   */
  image: string | undefined;

  /**
   * <p>The ARN of the role that gives permission to the system to access required resources to
   *       run the <code>containerAction</code>. This includes, at minimum, permission to retrieve the
   *       dataset contents that are the input to the containerized application.</p>
   * @public
   */
  executionRoleArn: string | undefined;

  /**
   * <p>Configuration of the resource that executes the <code>containerAction</code>.</p>
   * @public
   */
  resourceConfiguration: ResourceConfiguration | undefined;

  /**
   * <p>The values of variables used in the context of the execution of the containerized
   *       application (basically, parameters passed to the application). Each variable must have a name
   *       and a value given by one of <code>stringValue</code>, <code>datasetContentVersionValue</code>,
   *       or <code>outputFileUriValue</code>.</p>
   * @public
   */
  variables?: Variable[] | undefined;
}

/**
 * <p>Used to limit data to that which has arrived since the last execution of the
 *       action.</p>
 * @public
 */
export interface DeltaTime {
  /**
   * <p>The number of seconds of estimated in-flight lag time of message data. When you create
   *       dataset contents using message data from a specified timeframe, some message data might still
   *       be in flight when processing begins, and so do not arrive in time to be processed. Use this
   *       field to make allowances for the in flight time of your message data, so that data not
   *       processed from a previous timeframe is included with the next timeframe. Otherwise, missed
   *       message data would be excluded from processing during the next timeframe too, because its
   *       timestamp places it within the previous timeframe.</p>
   * @public
   */
  offsetSeconds: number | undefined;

  /**
   * <p>An expression by which the time of the message data might be determined. This can be the
   *       name of a timestamp field or a SQL expression that is used to derive the time the message data
   *       was generated.</p>
   * @public
   */
  timeExpression: string | undefined;
}

/**
 * <p>Information that is used to filter message data, to segregate it according to the
 *       timeframe in which it arrives.</p>
 * @public
 */
export interface QueryFilter {
  /**
   * <p>Used to limit data to that which has arrived since the last execution of the
   *       action.</p>
   * @public
   */
  deltaTime?: DeltaTime | undefined;
}

/**
 * <p>The SQL query to modify the message.</p>
 * @public
 */
export interface SqlQueryDatasetAction {
  /**
   * <p>A SQL query string.</p>
   * @public
   */
  sqlQuery: string | undefined;

  /**
   * <p>Prefilters applied to message data.</p>
   * @public
   */
  filters?: QueryFilter[] | undefined;
}

/**
 * <p>A <code>DatasetAction</code> object that specifies how dataset contents are automatically
 *       created.</p>
 * @public
 */
export interface DatasetAction {
  /**
   * <p>The name of the dataset action by which dataset contents are automatically created.</p>
   * @public
   */
  actionName?: string | undefined;

  /**
   * <p>An <code>SqlQueryDatasetAction</code> object that uses an SQL query to automatically
   *       create dataset contents.</p>
   * @public
   */
  queryAction?: SqlQueryDatasetAction | undefined;

  /**
   * <p>Information that allows the system to run a containerized application to create the
   *       dataset contents. The application must be in a Docker container along with any required
   *       support libraries.</p>
   * @public
   */
  containerAction?: ContainerDatasetAction | undefined;
}

/**
 * <p>Configuration information for delivery of dataset contents to IoT Events.</p>
 * @public
 */
export interface IotEventsDestinationConfiguration {
  /**
   * <p>The name of the IoT Events input to which dataset contents are delivered.</p>
   * @public
   */
  inputName: string | undefined;

  /**
   * <p>The ARN of the role that grants IoT Analytics permission to deliver dataset contents to an IoT Events
   *       input.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * <p>Configuration information for coordination with Glue, a fully managed extract, transform
 *       and load (ETL) service.</p>
 * @public
 */
export interface GlueConfiguration {
  /**
   * <p>The name of the table in your Glue Data Catalog that is used to perform the ETL
   *       operations. An Glue Data Catalog table contains partitioned data and descriptions of data
   *       sources and targets.</p>
   * @public
   */
  tableName: string | undefined;

  /**
   * <p>The name of the database in your Glue Data Catalog in which the table is located. An
   *       Glue Data Catalog database contains metadata tables.</p>
   * @public
   */
  databaseName: string | undefined;
}

/**
 * <p>Configuration information for delivery of dataset contents to Amazon Simple Storage Service (Amazon S3).</p>
 * @public
 */
export interface S3DestinationConfiguration {
  /**
   * <p>The name of the S3 bucket to which dataset contents are delivered.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>The key of the dataset contents object in an S3 bucket. Each object has a key that is a
   *       unique identifier. Each object has exactly one key.</p>
   *          <p>You can create a unique key with the following options:</p>
   *          <ul>
   *             <li>
   *                <p>Use <code>!\{iotanalytics:scheduleTime\}</code> to insert the time of a scheduled SQL
   *           query run.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>!\{iotanalytics:versionId\}</code> to insert a unique hash that identifies a
   *           dataset content.</p>
   *             </li>
   *             <li>
   *                <p>Use <code>!\{iotanalytics:creationTime\}</code> to insert the creation time of a dataset
   *           content.</p>
   *             </li>
   *          </ul>
   *          <p>The following example creates a unique key for a CSV file:
   *         <code>dataset/mydataset/!\{iotanalytics:scheduleTime\}/!\{iotanalytics:versionId\}.csv</code>
   *          </p>
   *          <note>
   *             <p>If you don't use <code>!\{iotanalytics:versionId\}</code> to specify the key, you might
   *         get duplicate keys. For example, you might have two dataset contents with the same
   *           <code>scheduleTime</code> but different <code>versionId</code>s. This means that one
   *         dataset content overwrites the other. </p>
   *          </note>
   * @public
   */
  key: string | undefined;

  /**
   * <p>Configuration information for coordination with Glue, a fully managed extract, transform
   *       and load (ETL) service.</p>
   * @public
   */
  glueConfiguration?: GlueConfiguration | undefined;

  /**
   * <p>The ARN of the role that grants IoT Analytics permission to interact with your Amazon S3 and Glue
   *       resources.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * <p>The destination to which dataset contents are delivered.</p>
 * @public
 */
export interface DatasetContentDeliveryDestination {
  /**
   * <p>Configuration information for delivery of dataset contents to IoT Events.</p>
   * @public
   */
  iotEventsDestinationConfiguration?: IotEventsDestinationConfiguration | undefined;

  /**
   * <p>Configuration information for delivery of dataset contents to Amazon S3.</p>
   * @public
   */
  s3DestinationConfiguration?: S3DestinationConfiguration | undefined;
}

/**
 * <p>When dataset contents are created, they are delivered to destination specified
 *       here.</p>
 * @public
 */
export interface DatasetContentDeliveryRule {
  /**
   * <p>The name of the dataset content delivery rules entry.</p>
   * @public
   */
  entryName?: string | undefined;

  /**
   * <p>The destination to which dataset contents are delivered.</p>
   * @public
   */
  destination: DatasetContentDeliveryDestination | undefined;
}

/**
 * <p>A structure that contains the configuration information of a delta time session
 *       window.</p>
 *          <p>
 *             <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">
 *                <code>DeltaTime</code>
 *             </a> specifies a time interval. You can use
 *         <code>DeltaTime</code> to create dataset contents with data that has arrived in the data
 *       store since the last execution. For an example of <code>DeltaTime</code>, see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/automate-create-dataset.html#automate-example6"> Creating
 *         a SQL dataset with a delta window (CLI)</a> in the
 *         <i>IoT Analytics User Guide</i>.</p>
 * @public
 */
export interface DeltaTimeSessionWindowConfiguration {
  /**
   * <p>A time interval. You can use <code>timeoutInMinutes</code> so that IoT Analytics can batch up late
   *       data notifications that have been generated since the last execution. IoT Analytics sends one batch of
   *       notifications to Amazon CloudWatch Events at one time.</p>
   *          <p>For more information about how to write a timestamp expression, see <a href="https://prestodb.io/docs/0.172/functions/datetime.html">Date and Time Functions and
   *         Operators</a>, in the <i>Presto 0.172 Documentation</i>.</p>
   * @public
   */
  timeoutInMinutes: number | undefined;
}

/**
 * <p>The information needed to configure a delta time session window.</p>
 * @public
 */
export interface LateDataRuleConfiguration {
  /**
   * <p>The information needed to configure a delta time session window.</p>
   * @public
   */
  deltaTimeSessionWindowConfiguration?: DeltaTimeSessionWindowConfiguration | undefined;
}

/**
 * <p>A structure that contains the name and configuration information of a late data
 *       rule.</p>
 * @public
 */
export interface LateDataRule {
  /**
   * <p>The name of the late data rule.</p>
   * @public
   */
  ruleName?: string | undefined;

  /**
   * <p>The information needed to configure the late data rule.</p>
   * @public
   */
  ruleConfiguration: LateDataRuleConfiguration | undefined;
}

/**
 * <p>Information about the dataset whose content generation triggers the new dataset content
 *       generation.</p>
 * @public
 */
export interface TriggeringDataset {
  /**
   * <p>The name of the dataset whose content generation triggers the new dataset content
   *       generation.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>The schedule for when to trigger an update.</p>
 * @public
 */
export interface Schedule {
  /**
   * <p>The expression that defines when to trigger an update. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">Schedule
   *         Expressions for Rules</a> in the <i>Amazon CloudWatch Events User
   *         Guide</i>.</p>
   * @public
   */
  expression?: string | undefined;
}

/**
 * <p>The <code>DatasetTrigger</code> that specifies when the dataset is automatically
 *       updated.</p>
 * @public
 */
export interface DatasetTrigger {
  /**
   * <p>The Schedule when the trigger is initiated.</p>
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * <p>The dataset whose content creation triggers the creation of this dataset's
   *       contents.</p>
   * @public
   */
  dataset?: TriggeringDataset | undefined;
}

/**
 * <p>Information about the versioning of dataset contents.</p>
 * @public
 */
export interface VersioningConfiguration {
  /**
   * <p>If true, unlimited versions of dataset contents are kept.</p>
   * @public
   */
  unlimited?: boolean | undefined;

  /**
   * <p>How many versions of dataset contents are kept. The <code>unlimited</code> parameter must
   *       be <code>false</code>.</p>
   * @public
   */
  maxVersions?: number | undefined;
}

/**
 * @public
 */
export interface CreateDatasetRequest {
  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  datasetName: string | undefined;

  /**
   * <p>A list of actions that create the dataset contents.</p>
   * @public
   */
  actions: DatasetAction[] | undefined;

  /**
   * <p>A list of triggers. A trigger causes dataset contents to be populated at a specified time
   *       interval or when another dataset's contents are created. The list of triggers can be empty or
   *       contain up to five <code>DataSetTrigger</code> objects.</p>
   * @public
   */
  triggers?: DatasetTrigger[] | undefined;

  /**
   * <p>When dataset contents are created, they are delivered to destinations specified
   *       here.</p>
   * @public
   */
  contentDeliveryRules?: DatasetContentDeliveryRule[] | undefined;

  /**
   * <p>Optional. How long, in days, versions of dataset contents are kept for the dataset. If not
   *       specified or set to <code>null</code>, versions of dataset contents are retained for at most
   *       90 days. The number of versions of dataset contents retained is determined by the
   *         <code>versioningConfiguration</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions">
   *         Keeping Multiple Versions of IoT Analytics datasets</a> in the
   *         <i>IoT Analytics User Guide</i>.</p>
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>Optional. How many versions of dataset contents are kept. If not specified or set to null,
   *       only the latest version plus the latest succeeded version (if they are different) are kept for
   *       the time period specified by the <code>retentionPeriod</code> parameter. For more information,
   *       see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions">Keeping Multiple Versions of IoT Analytics datasets</a> in the
   *         <i>IoT Analytics User Guide</i>.</p>
   * @public
   */
  versioningConfiguration?: VersioningConfiguration | undefined;

  /**
   * <p>Metadata which can be used to manage the dataset.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>A list of data rules that send notifications to CloudWatch, when data arrives late. To specify <code>lateDataRules</code>, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.</p>
   * @public
   */
  lateDataRules?: LateDataRule[] | undefined;
}

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  datasetName?: string | undefined;

  /**
   * <p>The ARN of the dataset.</p>
   * @public
   */
  datasetArn?: string | undefined;

  /**
   * <p>How long, in days, dataset contents are kept for the dataset.</p>
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;
}

/**
 * @public
 */
export interface CreateDatasetContentRequest {
  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  datasetName: string | undefined;

  /**
   * <p>The version ID of the dataset content. To specify <code>versionId</code> for a dataset
   *       content, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.</p>
   * @public
   */
  versionId?: string | undefined;
}

/**
 * @public
 */
export interface CreateDatasetContentResponse {
  /**
   * <p>The version ID of the dataset contents that are being created.</p>
   * @public
   */
  versionId?: string | undefined;
}

/**
 * <p> A partition dimension defined by an attribute. </p>
 * @public
 */
export interface Partition {
  /**
   * <p> The name of the attribute that defines a partition dimension. </p>
   * @public
   */
  attributeName: string | undefined;
}

/**
 * <p> A partition dimension defined by a timestamp attribute. </p>
 * @public
 */
export interface TimestampPartition {
  /**
   * <p> The attribute name of the partition defined by a timestamp. </p>
   * @public
   */
  attributeName: string | undefined;

  /**
   * <p> The timestamp format of a partition defined by a timestamp. The default format is seconds
   *       since epoch (January 1, 1970 at midnight UTC time). </p>
   * @public
   */
  timestampFormat?: string | undefined;
}

/**
 * <p> A single dimension to partition a data store. The dimension must be an
 *         <code>AttributePartition</code> or a <code>TimestampPartition</code>. </p>
 * @public
 */
export interface DatastorePartition {
  /**
   * <p> A partition dimension defined by an <code>attributeName</code>. </p>
   * @public
   */
  attributePartition?: Partition | undefined;

  /**
   * <p> A partition dimension defined by a timestamp attribute. </p>
   * @public
   */
  timestampPartition?: TimestampPartition | undefined;
}

/**
 * <p> Contains information about the partition dimensions in a data store. </p>
 * @public
 */
export interface DatastorePartitions {
  /**
   * <p> A list of partition dimensions in a data store. </p>
   * @public
   */
  partitions?: DatastorePartition[] | undefined;
}

/**
 * <p>S3-customer-managed; When you choose customer-managed storage, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created.  </p>
 * @public
 */
export interface CustomerManagedDatastoreS3Storage {
  /**
   * <p>The name of the Amazon S3 bucket where your data is stored.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>(Optional) The prefix used to create the keys of the data store data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/).</p>
   * @public
   */
  keyPrefix?: string | undefined;

  /**
   * <p>The ARN of the role that grants IoT Analytics permission to interact with your Amazon S3 resources.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * <p> Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.   </p>
 * @public
 */
export interface IotSiteWiseCustomerManagedDatastoreS3Storage {
  /**
   * <p> The name of the Amazon S3 bucket where your data is stored. </p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p> (Optional) The prefix used to create the keys of the data store data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/). </p>
   * @public
   */
  keyPrefix?: string | undefined;
}

/**
 * <p> Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.   </p>
 * @public
 */
export interface DatastoreIotSiteWiseMultiLayerStorage {
  /**
   * <p> Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. </p>
   * @public
   */
  customerManagedS3Storage: IotSiteWiseCustomerManagedDatastoreS3Storage | undefined;
}

/**
 * <p>Used to store data in an Amazon S3 bucket managed by IoT Analytics. You can't change the choice of Amazon S3 storage after your data store is created.  </p>
 * @public
 */
export interface ServiceManagedDatastoreS3Storage {}

/**
 * <p>Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. </p>
 * @public
 */
export type DatastoreStorage =
  | DatastoreStorage.CustomerManagedS3Member
  | DatastoreStorage.IotSiteWiseMultiLayerStorageMember
  | DatastoreStorage.ServiceManagedS3Member
  | DatastoreStorage.$UnknownMember;

/**
 * @public
 */
export namespace DatastoreStorage {
  /**
   * <p>Used to store data in an Amazon S3 bucket managed by IoT Analytics. You can't change the choice of Amazon S3 storage after your data store is created.  </p>
   * @public
   */
  export interface ServiceManagedS3Member {
    serviceManagedS3: ServiceManagedDatastoreS3Storage;
    customerManagedS3?: never;
    iotSiteWiseMultiLayerStorage?: never;
    $unknown?: never;
  }

  /**
   * <p>S3-customer-managed; When you choose customer-managed storage, the <code>retentionPeriod</code> parameter is ignored. You can't change the choice of Amazon S3 storage after your data store is created.  </p>
   * @public
   */
  export interface CustomerManagedS3Member {
    serviceManagedS3?: never;
    customerManagedS3: CustomerManagedDatastoreS3Storage;
    iotSiteWiseMultiLayerStorage?: never;
    $unknown?: never;
  }

  /**
   * <p> Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. You can't change the choice of Amazon S3 storage after your data store is created.   </p>
   * @public
   */
  export interface IotSiteWiseMultiLayerStorageMember {
    serviceManagedS3?: never;
    customerManagedS3?: never;
    iotSiteWiseMultiLayerStorage: DatastoreIotSiteWiseMultiLayerStorage;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    serviceManagedS3?: never;
    customerManagedS3?: never;
    iotSiteWiseMultiLayerStorage?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    serviceManagedS3: (value: ServiceManagedDatastoreS3Storage) => T;
    customerManagedS3: (value: CustomerManagedDatastoreS3Storage) => T;
    iotSiteWiseMultiLayerStorage: (value: DatastoreIotSiteWiseMultiLayerStorage) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains the configuration information of the JSON format.</p>
 * @public
 */
export interface JsonConfiguration {}

/**
 * <p>Contains information about a column that stores your data.</p>
 * @public
 */
export interface Column {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of data. For more information about the supported data types, see <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-common.html">Common data types</a>
   *       in the <i>Glue Developer Guide</i>.</p>
   * @public
   */
  type: string | undefined;
}

/**
 * <p>Information needed to define a schema.</p>
 * @public
 */
export interface SchemaDefinition {
  /**
   * <p>Specifies one or more columns that store your data.</p>
   *          <p>Each schema can have up to 100 columns. Each column can have up to 100 nested
   *       types.</p>
   * @public
   */
  columns?: Column[] | undefined;
}

/**
 * <p>Contains the configuration information of the Parquet format.</p>
 * @public
 */
export interface ParquetConfiguration {
  /**
   * <p>Information needed to define a schema.</p>
   * @public
   */
  schemaDefinition?: SchemaDefinition | undefined;
}

/**
 * <p>Contains the configuration information of file formats.  IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p>
 *          <p>The default file format is JSON. You can specify only one format.</p>
 *          <p>You can't change the file format after you create the data store.</p>
 * @public
 */
export interface FileFormatConfiguration {
  /**
   * <p>Contains the configuration information of the JSON format.</p>
   * @public
   */
  jsonConfiguration?: JsonConfiguration | undefined;

  /**
   * <p>Contains the configuration information of the Parquet format.</p>
   * @public
   */
  parquetConfiguration?: ParquetConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateDatastoreRequest {
  /**
   * <p>The name of the data store.</p>
   * @public
   */
  datastoreName: string | undefined;

  /**
   * <p>Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. </p>
   * @public
   */
  datastoreStorage?: DatastoreStorage | undefined;

  /**
   * <p>How long, in days, message data is kept for the data store. When
   *         <code>customerManagedS3</code> storage is selected, this parameter is ignored.</p>
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>Metadata which can be used to manage the data store.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>Contains the configuration information of file formats.  IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p>
   *          <p>The default file format is JSON. You can specify only one format.</p>
   *          <p>You can't change the file format after you create the data store.</p>
   * @public
   */
  fileFormatConfiguration?: FileFormatConfiguration | undefined;

  /**
   * <p> Contains information about the partition dimensions in a data store. </p>
   * @public
   */
  datastorePartitions?: DatastorePartitions | undefined;
}

/**
 * @public
 */
export interface CreateDatastoreResponse {
  /**
   * <p>The name of the data store.</p>
   * @public
   */
  datastoreName?: string | undefined;

  /**
   * <p>The ARN of the data store.</p>
   * @public
   */
  datastoreArn?: string | undefined;

  /**
   * <p>How long, in days, message data is kept for the data store.</p>
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;
}

/**
 * <p>The activity that determines the source of the messages to be processed.</p>
 * @public
 */
export interface ChannelActivity {
  /**
   * <p>The name of the channel activity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the channel from which the messages are processed.</p>
   * @public
   */
  channelName: string | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   * @public
   */
  next?: string | undefined;
}

/**
 * <p>The datastore activity that specifies where to store the processed data.</p>
 * @public
 */
export interface DatastoreActivity {
  /**
   * <p>The name of the datastore activity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the data store where processed messages are stored.</p>
   * @public
   */
  datastoreName: string | undefined;
}

/**
 * <p>An activity that adds data from the IoT device registry to your message.</p>
 * @public
 */
export interface DeviceRegistryEnrichActivity {
  /**
   * <p>The name of the <code>deviceRegistryEnrich</code> activity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the attribute that is added to the message.</p>
   * @public
   */
  attribute: string | undefined;

  /**
   * <p>The name of the IoT device whose registry information is added to the message.</p>
   * @public
   */
  thingName: string | undefined;

  /**
   * <p>The ARN of the role that allows access to the device's registry information.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   * @public
   */
  next?: string | undefined;
}

/**
 * <p>An activity that adds information from the IoT Device Shadow service to a
 *       message.</p>
 * @public
 */
export interface DeviceShadowEnrichActivity {
  /**
   * <p>The name of the <code>deviceShadowEnrich</code> activity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the attribute that is added to the message.</p>
   * @public
   */
  attribute: string | undefined;

  /**
   * <p>The name of the IoT device whose shadow information is added to the message.</p>
   * @public
   */
  thingName: string | undefined;

  /**
   * <p>The ARN of the role that allows access to the device's shadow.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   * @public
   */
  next?: string | undefined;
}

/**
 * <p>An activity that filters a message based on its attributes.</p>
 * @public
 */
export interface FilterActivity {
  /**
   * <p>The name of the filter activity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An expression that looks like a SQL WHERE clause that must return a Boolean value.
   *       Messages that satisfy the condition are passed to the next activity. </p>
   * @public
   */
  filter: string | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   * @public
   */
  next?: string | undefined;
}

/**
 * <p>An activity that runs a Lambda function to modify the message.</p>
 * @public
 */
export interface LambdaActivity {
  /**
   * <p>The name of the lambda activity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the Lambda function that is run on the message.</p>
   * @public
   */
  lambdaName: string | undefined;

  /**
   * <p>The number of messages passed to the Lambda function for processing.</p>
   *          <p>The Lambda function must be able to process all of these messages within five minutes,
   *       which is the maximum timeout duration for Lambda functions.</p>
   * @public
   */
  batchSize: number | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   * @public
   */
  next?: string | undefined;
}

/**
 * <p>An activity that computes an arithmetic expression using the message's attributes.</p>
 * @public
 */
export interface MathActivity {
  /**
   * <p>The name of the math activity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the attribute that contains the result of the math operation.</p>
   * @public
   */
  attribute: string | undefined;

  /**
   * <p>An expression that uses one or more existing attributes and must return an integer
   *       value.</p>
   * @public
   */
  math: string | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   * @public
   */
  next?: string | undefined;
}

/**
 * <p>An activity that removes attributes from a message.</p>
 * @public
 */
export interface RemoveAttributesActivity {
  /**
   * <p>The name of the <code>removeAttributes</code> activity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A list of 1-50 attributes to remove from the message.</p>
   * @public
   */
  attributes: string[] | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   * @public
   */
  next?: string | undefined;
}

/**
 * <p>Used to create a new message using only the specified attributes from the original
 *       message.</p>
 * @public
 */
export interface SelectAttributesActivity {
  /**
   * <p>The name of the <code>selectAttributes</code> activity.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A list of the attributes to select from the message.</p>
   * @public
   */
  attributes: string[] | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   * @public
   */
  next?: string | undefined;
}

/**
 * <p>An activity that performs a transformation on a message.</p>
 * @public
 */
export interface PipelineActivity {
  /**
   * <p>Determines the source of the messages to be processed.</p>
   * @public
   */
  channel?: ChannelActivity | undefined;

  /**
   * <p>Runs a Lambda function to modify the message.</p>
   * @public
   */
  lambda?: LambdaActivity | undefined;

  /**
   * <p>Specifies where to store the processed message data.</p>
   * @public
   */
  datastore?: DatastoreActivity | undefined;

  /**
   * <p>Adds other attributes based on existing attributes in the message.</p>
   * @public
   */
  addAttributes?: AddAttributesActivity | undefined;

  /**
   * <p>Removes attributes from a message.</p>
   * @public
   */
  removeAttributes?: RemoveAttributesActivity | undefined;

  /**
   * <p>Used to create a new message using only the specified attributes from the original
   *       message. </p>
   * @public
   */
  selectAttributes?: SelectAttributesActivity | undefined;

  /**
   * <p>Filters a message based on its attributes.</p>
   * @public
   */
  filter?: FilterActivity | undefined;

  /**
   * <p>Computes an arithmetic expression using the message's attributes and adds it to the
   *       message.</p>
   * @public
   */
  math?: MathActivity | undefined;

  /**
   * <p>Adds data from the IoT device registry to your message.</p>
   * @public
   */
  deviceRegistryEnrich?: DeviceRegistryEnrichActivity | undefined;

  /**
   * <p>Adds information from the IoT Device Shadow service to a message.</p>
   * @public
   */
  deviceShadowEnrich?: DeviceShadowEnrichActivity | undefined;
}

/**
 * @public
 */
export interface CreatePipelineRequest {
  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>A list of <code>PipelineActivity</code> objects. Activities perform transformations on
   *       your messages, such as removing, renaming or adding message attributes; filtering messages
   *       based on attribute values; invoking your Lambda unctions on messages for advanced processing;
   *       or performing mathematical transformations to normalize device data.</p>
   *          <p>The list can be 2-25 <code>PipelineActivity</code> objects and must contain both a
   *         <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must
   *       contain only one activity. For example:</p>
   *          <p>
   *             <code>pipelineActivities = [ \{ "channel": \{ ... \} \}, \{ "lambda": \{ ... \} \}, ...
   *       ]</code>
   *          </p>
   * @public
   */
  pipelineActivities: PipelineActivity[] | undefined;

  /**
   * <p>Metadata which can be used to manage the pipeline.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreatePipelineResponse {
  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  pipelineName?: string | undefined;

  /**
   * <p>The ARN of the pipeline.</p>
   * @public
   */
  pipelineArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteChannelRequest {
  /**
   * <p>The name of the channel to delete.</p>
   * @public
   */
  channelName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetRequest {
  /**
   * <p>The name of the dataset to delete.</p>
   * @public
   */
  datasetName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetContentRequest {
  /**
   * <p>The name of the dataset whose content is deleted.</p>
   * @public
   */
  datasetName: string | undefined;

  /**
   * <p>The version of the dataset whose content is deleted. You can also use the strings
   *       "$LATEST" or "$LATEST_SUCCEEDED" to delete the latest or latest successfully completed data
   *       set. If not specified, "$LATEST_SUCCEEDED" is the default.</p>
   * @public
   */
  versionId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatastoreRequest {
  /**
   * <p>The name of the data store to delete.</p>
   * @public
   */
  datastoreName: string | undefined;
}

/**
 * @public
 */
export interface DeletePipelineRequest {
  /**
   * <p>The name of the pipeline to delete.</p>
   * @public
   */
  pipelineName: string | undefined;
}

/**
 * @public
 */
export interface DescribeChannelRequest {
  /**
   * <p>The name of the channel whose information is retrieved.</p>
   * @public
   */
  channelName: string | undefined;

  /**
   * <p>If true, additional statistical information about the channel is included in the response.
   *       This feature can't be used with a channel whose S3 storage is customer-managed.</p>
   * @public
   */
  includeStatistics?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const ChannelStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type ChannelStatus = (typeof ChannelStatus)[keyof typeof ChannelStatus];

/**
 * <p>A collection of data from an MQTT topic. Channels archive the raw, unprocessed messages
 *       before publishing the data to a pipeline.</p>
 * @public
 */
export interface Channel {
  /**
   * <p>The name of the channel.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Where channel data is stored. You can choose one of <code>serviceManagedS3</code> or
   *         <code>customerManagedS3</code> storage. If not specified, the default is
   *         <code>serviceManagedS3</code>. You can't change this storage option after the channel is
   *       created.</p>
   * @public
   */
  storage?: ChannelStorage | undefined;

  /**
   * <p>The ARN of the channel.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of the channel.</p>
   * @public
   */
  status?: ChannelStatus | undefined;

  /**
   * <p>How long, in days, message data is kept for the channel.</p>
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>When the channel was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>When the channel was last updated.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * <p>The last time when a new message arrived in the channel.</p>
   *          <p>IoT Analytics updates this value at most once per minute for one channel. Hence, the <code>lastMessageArrivalTime</code> value is an approximation.</p>
   *          <p>This feature only applies to messages that arrived in the data store after October 23, 2020. </p>
   * @public
   */
  lastMessageArrivalTime?: Date | undefined;
}

/**
 * <p>The estimated size of the resource.</p>
 * @public
 */
export interface EstimatedResourceSize {
  /**
   * <p>The estimated size of the resource, in bytes.</p>
   * @public
   */
  estimatedSizeInBytes?: number | undefined;

  /**
   * <p>The time when the estimate of the size of the resource was made.</p>
   * @public
   */
  estimatedOn?: Date | undefined;
}

/**
 * <p>Statistics information about the channel.</p>
 * @public
 */
export interface ChannelStatistics {
  /**
   * <p>The estimated size of the channel.</p>
   * @public
   */
  size?: EstimatedResourceSize | undefined;
}

/**
 * @public
 */
export interface DescribeChannelResponse {
  /**
   * <p>An object that contains information about the channel.</p>
   * @public
   */
  channel?: Channel | undefined;

  /**
   * <p>Statistics about the channel. Included if the <code>includeStatistics</code> parameter is
   *       set to <code>true</code> in the request.</p>
   * @public
   */
  statistics?: ChannelStatistics | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * <p>The name of the dataset whose information is retrieved.</p>
   * @public
   */
  datasetName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DatasetStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type DatasetStatus = (typeof DatasetStatus)[keyof typeof DatasetStatus];

/**
 * <p>Information about a dataset.</p>
 * @public
 */
export interface Dataset {
  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ARN of the dataset.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The <code>DatasetAction</code> objects that automatically create the dataset
   *       contents.</p>
   * @public
   */
  actions?: DatasetAction[] | undefined;

  /**
   * <p>The <code>DatasetTrigger</code> objects that specify when the dataset is automatically
   *       updated.</p>
   * @public
   */
  triggers?: DatasetTrigger[] | undefined;

  /**
   * <p>When dataset contents are created they are delivered to destinations specified
   *       here.</p>
   * @public
   */
  contentDeliveryRules?: DatasetContentDeliveryRule[] | undefined;

  /**
   * <p>The status of the dataset.</p>
   * @public
   */
  status?: DatasetStatus | undefined;

  /**
   * <p>When the dataset was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The last time the dataset was updated.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * <p>Optional. How long, in days, message data is kept for the dataset.</p>
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>Optional. How many versions of dataset contents are kept. If not specified or set to null,
   *       only the latest version plus the latest succeeded version (if they are different) are kept for
   *       the time period specified by the <code>retentionPeriod</code> parameter. For more information,
   *       see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions">
   *         Keeping Multiple Versions of IoT Analytics datasets</a> in the
   *         <i>IoT Analytics User Guide</i>.</p>
   * @public
   */
  versioningConfiguration?: VersioningConfiguration | undefined;

  /**
   * <p>A list of data rules that send notifications to CloudWatch, when data arrives late. To specify <code>lateDataRules</code>, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.</p>
   * @public
   */
  lateDataRules?: LateDataRule[] | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * <p>An object that contains information about the dataset.</p>
   * @public
   */
  dataset?: Dataset | undefined;
}

/**
 * @public
 */
export interface DescribeDatastoreRequest {
  /**
   * <p>The name of the data store</p>
   * @public
   */
  datastoreName: string | undefined;

  /**
   * <p>If true, additional statistical information about the data store is included in the
   *       response. This feature can't be used with a data store whose S3 storage is
   *       customer-managed.</p>
   * @public
   */
  includeStatistics?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const DatastoreStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type DatastoreStatus = (typeof DatastoreStatus)[keyof typeof DatastoreStatus];

/**
 * <p>Information about a data store.</p>
 * @public
 */
export interface Datastore {
  /**
   * <p>The name of the data store.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. </p>
   * @public
   */
  storage?: DatastoreStorage | undefined;

  /**
   * <p>The ARN of the data store.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The status of a data store:</p>
   *          <dl>
   *             <dt>CREATING</dt>
   *             <dd>
   *                <p>The data store is being created.</p>
   *             </dd>
   *             <dt>ACTIVE</dt>
   *             <dd>
   *                <p>The data store has been created and can be used.</p>
   *             </dd>
   *             <dt>DELETING</dt>
   *             <dd>
   *                <p>The data store is being deleted.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  status?: DatastoreStatus | undefined;

  /**
   * <p>How long, in days, message data is kept for the data store. When
   *         <code>customerManagedS3</code> storage is selected, this parameter is ignored.</p>
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>When the data store was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The last time the data store was updated.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * <p>The last time when a new message arrived in the data store.</p>
   *          <p>IoT Analytics updates this value at most once per minute for Amazon Simple Storage Service one data store. Hence, the <code>lastMessageArrivalTime</code> value is an approximation.</p>
   *          <p>This feature only applies to messages that arrived in the data store after October 23, 2020. </p>
   * @public
   */
  lastMessageArrivalTime?: Date | undefined;

  /**
   * <p>Contains the configuration information of file formats.  IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p>
   *          <p>The default file format is JSON. You can specify only one format.</p>
   *          <p>You can't change the file format after you create the data store.</p>
   * @public
   */
  fileFormatConfiguration?: FileFormatConfiguration | undefined;

  /**
   * <p> Contains information about the partition dimensions in a data store. </p>
   * @public
   */
  datastorePartitions?: DatastorePartitions | undefined;
}

/**
 * <p>Statistical information about the data store.</p>
 * @public
 */
export interface DatastoreStatistics {
  /**
   * <p>The estimated size of the data store.</p>
   * @public
   */
  size?: EstimatedResourceSize | undefined;
}

/**
 * @public
 */
export interface DescribeDatastoreResponse {
  /**
   * <p>Information about the data store.</p>
   * @public
   */
  datastore?: Datastore | undefined;

  /**
   * <p>Additional statistical information about the data store. Included if the
   *         <code>includeStatistics</code> parameter is set to <code>true</code> in the request.</p>
   * @public
   */
  statistics?: DatastoreStatistics | undefined;
}

/**
 * @public
 */
export interface DescribeLoggingOptionsRequest {}

/**
 * @public
 * @enum
 */
export const LoggingLevel = {
  ERROR: "ERROR",
} as const;

/**
 * @public
 */
export type LoggingLevel = (typeof LoggingLevel)[keyof typeof LoggingLevel];

/**
 * <p>Information about logging options.</p>
 * @public
 */
export interface LoggingOptions {
  /**
   * <p>The ARN of the role that grants permission to IoT Analytics to perform logging.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>The logging level. Currently, only ERROR is supported.</p>
   * @public
   */
  level: LoggingLevel | undefined;

  /**
   * <p>If true, logging is enabled for IoT Analytics.</p>
   * @public
   */
  enabled: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeLoggingOptionsResponse {
  /**
   * <p>The current settings of the IoT Analytics logging options.</p>
   * @public
   */
  loggingOptions?: LoggingOptions | undefined;
}

/**
 * @public
 */
export interface DescribePipelineRequest {
  /**
   * <p>The name of the pipeline whose information is retrieved.</p>
   * @public
   */
  pipelineName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ReprocessingStatus = {
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type ReprocessingStatus = (typeof ReprocessingStatus)[keyof typeof ReprocessingStatus];

/**
 * <p>Information about pipeline reprocessing.</p>
 * @public
 */
export interface ReprocessingSummary {
  /**
   * <p>The <code>reprocessingId</code> returned by <code>StartPipelineReprocessing</code>.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The status of the pipeline reprocessing.</p>
   * @public
   */
  status?: ReprocessingStatus | undefined;

  /**
   * <p>The time the pipeline reprocessing was created.</p>
   * @public
   */
  creationTime?: Date | undefined;
}

/**
 * <p>Contains information about a pipeline.</p>
 * @public
 */
export interface Pipeline {
  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ARN of the pipeline.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The activities that perform transformations on the messages.</p>
   * @public
   */
  activities?: PipelineActivity[] | undefined;

  /**
   * <p>A summary of information about the pipeline reprocessing.</p>
   * @public
   */
  reprocessingSummaries?: ReprocessingSummary[] | undefined;

  /**
   * <p>When the pipeline was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The last time the pipeline was updated.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribePipelineResponse {
  /**
   * <p>A <code>Pipeline</code> object that contains information about the pipeline.</p>
   * @public
   */
  pipeline?: Pipeline | undefined;
}

/**
 * @public
 */
export interface GetDatasetContentRequest {
  /**
   * <p>The name of the dataset whose contents are retrieved.</p>
   * @public
   */
  datasetName: string | undefined;

  /**
   * <p>The version of the dataset whose contents are retrieved. You can also use the strings
   *       "$LATEST" or "$LATEST_SUCCEEDED" to retrieve the contents of the latest or latest successfully
   *       completed dataset. If not specified, "$LATEST_SUCCEEDED" is the default.</p>
   * @public
   */
  versionId?: string | undefined;
}

/**
 * <p>The reference to a dataset entry.</p>
 * @public
 */
export interface DatasetEntry {
  /**
   * <p>The name of the dataset item.</p>
   * @public
   */
  entryName?: string | undefined;

  /**
   * <p>The presigned URI of the dataset item.</p>
   * @public
   */
  dataURI?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DatasetContentState = {
  CREATING: "CREATING",
  FAILED: "FAILED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type DatasetContentState = (typeof DatasetContentState)[keyof typeof DatasetContentState];

/**
 * <p>The state of the dataset contents and the reason they are in this state.</p>
 * @public
 */
export interface DatasetContentStatus {
  /**
   * <p>The state of the dataset contents. Can be one of READY, CREATING, SUCCEEDED, or
   *       FAILED.</p>
   * @public
   */
  state?: DatasetContentState | undefined;

  /**
   * <p>The reason the dataset contents are in this state.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * @public
 */
export interface GetDatasetContentResponse {
  /**
   * <p>A list of <code>DatasetEntry</code> objects.</p>
   * @public
   */
  entries?: DatasetEntry[] | undefined;

  /**
   * <p>The time when the request was made.</p>
   * @public
   */
  timestamp?: Date | undefined;

  /**
   * <p>The status of the dataset content.</p>
   * @public
   */
  status?: DatasetContentStatus | undefined;
}

/**
 * @public
 */
export interface ListChannelsRequest {
  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   *          <p>The default value is 100.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Used to store channel data in an S3 bucket that you manage.</p>
 * @public
 */
export interface CustomerManagedChannelS3StorageSummary {
  /**
   * <p>The name of the S3 bucket in which channel data is stored.</p>
   * @public
   */
  bucket?: string | undefined;

  /**
   * <p>(Optional) The prefix used to create the keys of the channel data objects. Each object in
   *       an S3 bucket has a key that is its unique identifier within the bucket (each object in a
   *       bucket has exactly one key). The prefix must end with a forward slash (/).</p>
   * @public
   */
  keyPrefix?: string | undefined;

  /**
   * <p>The ARN of the role that grants IoT Analytics permission to interact with your Amazon S3
   *       resources.</p>
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * <p>Used to store channel data in an S3 bucket managed by IoT Analytics.</p>
 * @public
 */
export interface ServiceManagedChannelS3StorageSummary {}

/**
 * <p>Where channel data is stored.</p>
 * @public
 */
export interface ChannelStorageSummary {
  /**
   * <p>Used to store channel data in an S3 bucket managed by IoT Analytics.</p>
   * @public
   */
  serviceManagedS3?: ServiceManagedChannelS3StorageSummary | undefined;

  /**
   * <p>Used to store channel data in an S3 bucket that you manage.</p>
   * @public
   */
  customerManagedS3?: CustomerManagedChannelS3StorageSummary | undefined;
}

/**
 * <p>A summary of information about a channel.</p>
 * @public
 */
export interface ChannelSummary {
  /**
   * <p>The name of the channel.</p>
   * @public
   */
  channelName?: string | undefined;

  /**
   * <p>Where channel data is stored.</p>
   * @public
   */
  channelStorage?: ChannelStorageSummary | undefined;

  /**
   * <p>The status of the channel.</p>
   * @public
   */
  status?: ChannelStatus | undefined;

  /**
   * <p>When the channel was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The last time the channel was updated.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * <p>The last time when a new message arrived in the channel.</p>
   *          <p>IoT Analytics updates this value at most once per minute for one channel. Hence, the <code>lastMessageArrivalTime</code> value is an approximation.</p>
   *          <p>This feature only applies to messages that arrived in the data store after October 23, 2020. </p>
   * @public
   */
  lastMessageArrivalTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListChannelsResponse {
  /**
   * <p>A list of <code>ChannelSummary</code> objects.</p>
   * @public
   */
  channelSummaries?: ChannelSummary[] | undefined;

  /**
   * <p>The token to retrieve the next set of results, or <code>null</code> if there are no more
   *       results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetContentsRequest {
  /**
   * <p>The name of the dataset whose contents information you want to list.</p>
   * @public
   */
  datasetName: string | undefined;

  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A filter to limit results to those dataset contents whose creation is scheduled on or
   *       after the given time. See the field <code>triggers.schedule</code> in the
   *         <code>CreateDataset</code> request. (timestamp)</p>
   * @public
   */
  scheduledOnOrAfter?: Date | undefined;

  /**
   * <p>A filter to limit results to those dataset contents whose creation is scheduled before the
   *       given time. See the field <code>triggers.schedule</code> in the <code>CreateDataset</code>
   *       request. (timestamp)</p>
   * @public
   */
  scheduledBefore?: Date | undefined;
}

/**
 * <p>Summary information about dataset contents.</p>
 * @public
 */
export interface DatasetContentSummary {
  /**
   * <p>The version of the dataset contents.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The status of the dataset contents.</p>
   * @public
   */
  status?: DatasetContentStatus | undefined;

  /**
   * <p>The actual time the creation of the dataset contents was started.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The time the creation of the dataset contents was scheduled to start.</p>
   * @public
   */
  scheduleTime?: Date | undefined;

  /**
   * <p>The time the dataset content status was updated to SUCCEEDED or FAILED.</p>
   * @public
   */
  completionTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListDatasetContentsResponse {
  /**
   * <p>Summary information about dataset contents that have been created.</p>
   * @public
   */
  datasetContentSummaries?: DatasetContentSummary[] | undefined;

  /**
   * <p>The token to retrieve the next set of results, or <code>null</code> if there are no more
   *       results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   *          <p>The default value is 100.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const DatasetActionType = {
  CONTAINER: "CONTAINER",
  QUERY: "QUERY",
} as const;

/**
 * @public
 */
export type DatasetActionType = (typeof DatasetActionType)[keyof typeof DatasetActionType];

/**
 * <p>Information about the action that automatically creates the dataset's contents.</p>
 * @public
 */
export interface DatasetActionSummary {
  /**
   * <p>The name of the action that automatically creates the dataset's contents.</p>
   * @public
   */
  actionName?: string | undefined;

  /**
   * <p>The type of action by which the dataset's contents are automatically created.</p>
   * @public
   */
  actionType?: DatasetActionType | undefined;
}

/**
 * <p>A summary of information about a dataset.</p>
 * @public
 */
export interface DatasetSummary {
  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  datasetName?: string | undefined;

  /**
   * <p>The status of the dataset.</p>
   * @public
   */
  status?: DatasetStatus | undefined;

  /**
   * <p>The time the dataset was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The last time the dataset was updated.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * <p>A list of triggers. A trigger causes dataset content to be populated at a specified time
   *       interval or when another dataset is populated. The list of triggers can be empty or contain up
   *       to five <code>DataSetTrigger</code> objects</p>
   * @public
   */
  triggers?: DatasetTrigger[] | undefined;

  /**
   * <p>A list of <code>DataActionSummary</code> objects.</p>
   * @public
   */
  actions?: DatasetActionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * <p>A list of <code>DatasetSummary</code> objects.</p>
   * @public
   */
  datasetSummaries?: DatasetSummary[] | undefined;

  /**
   * <p>The token to retrieve the next set of results, or <code>null</code> if there are no more
   *       results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDatastoresRequest {
  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   *          <p>The default value is 100.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains information about the data store that you manage.</p>
 * @public
 */
export interface CustomerManagedDatastoreS3StorageSummary {
  /**
   * <p>The name of the Amazon S3 bucket where your data is stored.</p>
   * @public
   */
  bucket?: string | undefined;

  /**
   * <p>(Optional) The prefix used to create the keys of the data store data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/).</p>
   * @public
   */
  keyPrefix?: string | undefined;

  /**
   * <p>The ARN of the role that grants IoT Analytics permission to interact with your Amazon S3 resources.</p>
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * <p> Contains information about the data store that you manage, which stores data used by IoT SiteWise. </p>
 * @public
 */
export interface IotSiteWiseCustomerManagedDatastoreS3StorageSummary {
  /**
   * <p> The name of the Amazon S3 bucket where your data is stored. </p>
   * @public
   */
  bucket?: string | undefined;

  /**
   * <p> (Optional) The prefix used to create the keys of the data store data objects. Each object in an Amazon S3 bucket has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/). </p>
   * @public
   */
  keyPrefix?: string | undefined;
}

/**
 * <p> Contains information about the data store that you manage, which stores data used by IoT SiteWise. </p>
 * @public
 */
export interface DatastoreIotSiteWiseMultiLayerStorageSummary {
  /**
   * <p>Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage.</p>
   * @public
   */
  customerManagedS3Storage?: IotSiteWiseCustomerManagedDatastoreS3StorageSummary | undefined;
}

/**
 * <p>Contains information about the data store that is managed by IoT Analytics.</p>
 * @public
 */
export interface ServiceManagedDatastoreS3StorageSummary {}

/**
 * <p>Contains information about your data store.</p>
 * @public
 */
export interface DatastoreStorageSummary {
  /**
   * <p>Used to store data in an Amazon S3 bucket managed by IoT Analytics.</p>
   * @public
   */
  serviceManagedS3?: ServiceManagedDatastoreS3StorageSummary | undefined;

  /**
   * <p>Used to store data in an Amazon S3 bucket managed by IoT Analytics.</p>
   * @public
   */
  customerManagedS3?: CustomerManagedDatastoreS3StorageSummary | undefined;

  /**
   * <p> Used to store data used by IoT SiteWise in an Amazon S3 bucket that you manage. </p>
   * @public
   */
  iotSiteWiseMultiLayerStorage?: DatastoreIotSiteWiseMultiLayerStorageSummary | undefined;
}

/**
 * @public
 * @enum
 */
export const FileFormatType = {
  JSON: "JSON",
  PARQUET: "PARQUET",
} as const;

/**
 * @public
 */
export type FileFormatType = (typeof FileFormatType)[keyof typeof FileFormatType];

/**
 * <p>A summary of information about a data store.</p>
 * @public
 */
export interface DatastoreSummary {
  /**
   * <p>The name of the data store.</p>
   * @public
   */
  datastoreName?: string | undefined;

  /**
   * <p>Where data in a data store is stored.</p>
   * @public
   */
  datastoreStorage?: DatastoreStorageSummary | undefined;

  /**
   * <p>The status of the data store.</p>
   * @public
   */
  status?: DatastoreStatus | undefined;

  /**
   * <p>When the data store was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>The last time the data store was updated.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;

  /**
   * <p>The last time when a new message arrived in the data store.</p>
   *          <p>IoT Analytics updates this value at most once per minute for Amazon Simple Storage Service one data store. Hence, the <code>lastMessageArrivalTime</code> value is an approximation.</p>
   *          <p>This feature only applies to messages that arrived in the data store after October 23, 2020. </p>
   * @public
   */
  lastMessageArrivalTime?: Date | undefined;

  /**
   * <p>The file format of the data in the data store.</p>
   * @public
   */
  fileFormatType?: FileFormatType | undefined;

  /**
   * <p> Contains information about the partition dimensions in a data store. </p>
   * @public
   */
  datastorePartitions?: DatastorePartitions | undefined;
}

/**
 * @public
 */
export interface ListDatastoresResponse {
  /**
   * <p>A list of <code>DatastoreSummary</code> objects.</p>
   * @public
   */
  datastoreSummaries?: DatastoreSummary[] | undefined;

  /**
   * <p>The token to retrieve the next set of results, or <code>null</code> if there are no more
   *       results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPipelinesRequest {
  /**
   * <p>The token for the next set of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   *          <p>The default value is 100.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A summary of information about a pipeline.</p>
 * @public
 */
export interface PipelineSummary {
  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  pipelineName?: string | undefined;

  /**
   * <p>A summary of information about the pipeline reprocessing.</p>
   * @public
   */
  reprocessingSummaries?: ReprocessingSummary[] | undefined;

  /**
   * <p>When the pipeline was created.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>When the pipeline was last updated.</p>
   * @public
   */
  lastUpdateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListPipelinesResponse {
  /**
   * <p>A list of <code>PipelineSummary</code> objects.</p>
   * @public
   */
  pipelineSummaries?: PipelineSummary[] | undefined;

  /**
   * <p>The token to retrieve the next set of results, or <code>null</code> if there are no more
   *       results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource whose tags you want to list.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags (metadata) that you have assigned to the resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutLoggingOptionsRequest {
  /**
   * <p>The new values of the IoT Analytics logging options.</p>
   * @public
   */
  loggingOptions: LoggingOptions | undefined;
}

/**
 * @public
 */
export interface RunPipelineActivityRequest {
  /**
   * <p>The pipeline activity that is run. This must not be a channel activity or a data store
   *       activity because these activities are used in a pipeline only to load the original message and
   *       to store the (possibly) transformed message. If a Lambda activity is specified, only
   *       short-running Lambda functions (those with a timeout of less than 30 seconds or less) can be
   *       used.</p>
   * @public
   */
  pipelineActivity: PipelineActivity | undefined;

  /**
   * <p>The sample message payloads on which the pipeline activity is run.</p>
   * @public
   */
  payloads: Uint8Array[] | undefined;
}

/**
 * @public
 */
export interface RunPipelineActivityResponse {
  /**
   * <p>The enriched or transformed sample message payloads as base64-encoded strings. (The
   *       results of running the pipeline activity on each input sample message payload, encoded in
   *       base64.)</p>
   * @public
   */
  payloads?: Uint8Array[] | undefined;

  /**
   * <p>In case the pipeline activity fails, the log message that is generated.</p>
   * @public
   */
  logResult?: string | undefined;
}

/**
 * @public
 */
export interface SampleChannelDataRequest {
  /**
   * <p>The name of the channel whose message samples are retrieved.</p>
   * @public
   */
  channelName: string | undefined;

  /**
   * <p>The number of sample messages to be retrieved. The limit is 10. The default is also
   *       10.</p>
   * @public
   */
  maxMessages?: number | undefined;

  /**
   * <p>The start of the time window from which sample messages are retrieved.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The end of the time window from which sample messages are retrieved.</p>
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface SampleChannelDataResponse {
  /**
   * <p>The list of message samples. Each sample message is returned as a base64-encoded
   *       string.</p>
   * @public
   */
  payloads?: Uint8Array[] | undefined;
}

/**
 * <p>Specifies one or more sets of channel messages.</p>
 * @public
 */
export interface ChannelMessages {
  /**
   * <p>Specifies one or more keys that identify the Amazon Simple Storage Service (Amazon S3) objects that save your
   *       channel messages.</p>
   *          <p>You must use the full path for the key.</p>
   *          <p>Example path: <code>channel/mychannel/__dt=2020-02-29
   *         00:00:00/1582940490000_1582940520000_123456789012_mychannel_0_2118.0.json.gz</code>
   *          </p>
   * @public
   */
  s3Paths?: string[] | undefined;
}

/**
 * @public
 */
export interface StartPipelineReprocessingRequest {
  /**
   * <p>The name of the pipeline on which to start reprocessing.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The start time (inclusive) of raw message data that is reprocessed.</p>
   *          <p>If you specify a value for the <code>startTime</code> parameter, you must not use the
   *         <code>channelMessages</code> object.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The end time (exclusive) of raw message data that is reprocessed.</p>
   *          <p>If you specify a value for the <code>endTime</code> parameter, you must not use the
   *         <code>channelMessages</code> object.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>Specifies one or more sets of channel messages that you want to reprocess.</p>
   *          <p>If you use the <code>channelMessages</code> object, you must not specify a value for
   *         <code>startTime</code> and <code>endTime</code>.</p>
   * @public
   */
  channelMessages?: ChannelMessages | undefined;
}

/**
 * @public
 */
export interface StartPipelineReprocessingResponse {
  /**
   * <p>The ID of the pipeline reprocessing activity that was started.</p>
   * @public
   */
  reprocessingId?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource whose tags you want to modify.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The new or modified tags for the resource.</p>
   * @public
   */
  tags: Tag[] | undefined;
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
   * <p>The ARN of the resource whose tags you want to remove.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of those tags which you want to remove.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateChannelRequest {
  /**
   * <p>The name of the channel to be updated.</p>
   * @public
   */
  channelName: string | undefined;

  /**
   * <p>Where channel data is stored. You can choose one of <code>serviceManagedS3</code> or
   *         <code>customerManagedS3</code> storage. If not specified, the default is
   *         <code>serviceManagedS3</code>. You can't change this storage option after the channel is
   *       created.</p>
   * @public
   */
  channelStorage?: ChannelStorage | undefined;

  /**
   * <p>How long, in days, message data is kept for the channel. The retention period can't be
   *       updated if the channel's Amazon S3 storage is customer-managed.</p>
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetRequest {
  /**
   * <p>The name of the dataset to update.</p>
   * @public
   */
  datasetName: string | undefined;

  /**
   * <p>A list of <code>DatasetAction</code> objects.</p>
   * @public
   */
  actions: DatasetAction[] | undefined;

  /**
   * <p>A list of <code>DatasetTrigger</code> objects. The list can be empty or can contain up to
   *       five <code>DatasetTrigger</code> objects.</p>
   * @public
   */
  triggers?: DatasetTrigger[] | undefined;

  /**
   * <p>When dataset contents are created, they are delivered to destinations specified
   *       here.</p>
   * @public
   */
  contentDeliveryRules?: DatasetContentDeliveryRule[] | undefined;

  /**
   * <p>How long, in days, dataset contents are kept for the dataset.</p>
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>Optional. How many versions of dataset contents are kept. If not specified or set to null,
   *       only the latest version plus the latest succeeded version (if they are different) are kept for
   *       the time period specified by the <code>retentionPeriod</code> parameter. For more information,
   *       see <a href="https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions">Keeping Multiple Versions of IoT Analytics datasets</a> in the
   *         <i>IoT Analytics User Guide</i>.</p>
   * @public
   */
  versioningConfiguration?: VersioningConfiguration | undefined;

  /**
   * <p>A list of data rules that send notifications to CloudWatch, when data arrives late. To specify <code>lateDataRules</code>, the dataset must use a <a href="https://docs.aws.amazon.com/iotanalytics/latest/APIReference/API_DeltaTime.html">DeltaTimer</a> filter.</p>
   * @public
   */
  lateDataRules?: LateDataRule[] | undefined;
}

/**
 * @public
 */
export interface UpdateDatastoreRequest {
  /**
   * <p>The name of the data store to be updated.</p>
   * @public
   */
  datastoreName: string | undefined;

  /**
   * <p>How long, in days, message data is kept for the data store. The retention period can't be
   *       updated if the data store's Amazon S3 storage is customer-managed.</p>
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>Where data in a data store is stored.. You can choose <code>serviceManagedS3</code> storage, <code>customerManagedS3</code> storage, or <code>iotSiteWiseMultiLayerStorage</code> storage. The default is <code>serviceManagedS3</code>. You can't change the choice of Amazon S3 storage after your data store is created. </p>
   * @public
   */
  datastoreStorage?: DatastoreStorage | undefined;

  /**
   * <p>Contains the configuration information of file formats.  IoT Analytics data stores support JSON and <a href="https://parquet.apache.org/">Parquet</a>.</p>
   *          <p>The default file format is JSON. You can specify only one format.</p>
   *          <p>You can't change the file format after you create the data store.</p>
   * @public
   */
  fileFormatConfiguration?: FileFormatConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdatePipelineRequest {
  /**
   * <p>The name of the pipeline to update.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>A list of <code>PipelineActivity</code> objects. Activities perform transformations on
   *       your messages, such as removing, renaming or adding message attributes; filtering messages
   *       based on attribute values; invoking your Lambda functions on messages for advanced processing;
   *       or performing mathematical transformations to normalize device data.</p>
   *          <p>The list can be 2-25 <code>PipelineActivity</code> objects and must contain both a
   *         <code>channel</code> and a <code>datastore</code> activity. Each entry in the list must
   *       contain only one activity. For example:</p>
   *          <p>
   *             <code>pipelineActivities = [ \{ "channel": \{ ... \} \}, \{ "lambda": \{ ... \} \}, ...
   *       ]</code>
   *          </p>
   * @public
   */
  pipelineActivities: PipelineActivity[] | undefined;
}
