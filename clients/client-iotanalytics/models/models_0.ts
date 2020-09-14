import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>An activity that adds other attributes based on existing attributes in the message.</p>
 */
export interface AddAttributesActivity {
  /**
   * <p>The name of the 'addAttributes' activity.</p>
   */
  name: string | undefined;

  /**
   * <p>A list of 1-50 "AttributeNameMapping"
   *         objects that map an existing attribute to a new attribute.</p>
   *          <note>
   *             <p>The existing attributes remain in the message,
   *      so if you want to remove the originals,
   *      use "RemoveAttributeActivity".</p>
   *          </note>
   */
  attributes: { [key: string]: string } | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export namespace AddAttributesActivity {
  export const filterSensitiveLog = (obj: AddAttributesActivity): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a message.</p>
 */
export interface Message {
  /**
   * <p>The ID you wish to assign to the message. Each "messageId" must be unique
   *           within each batch sent.</p>
   */
  messageId: string | undefined;

  /**
   * <p>The payload of the message. This may be a JSON string or a Base64-encoded string
   *           representing binary data (in which case you must decode it by means of a pipeline activity).</p>
   */
  payload: Uint8Array | undefined;
}

export namespace Message {
  export const filterSensitiveLog = (obj: Message): any => ({
    ...obj,
  });
}

export interface BatchPutMessageRequest {
  /**
   * <p>The list of messages to be sent. Each message has format:
   *           '{ "messageId": "string", "payload": "string"}'.</p>
   *          <p>Note that the field names of message payloads (data) that you send to AWS IoT Analytics:</p>
   *         <ul>
   *             <li>
   *                <p>Must contain only alphanumeric characters and undescores (_); no other special
   *               characters are allowed.</p>
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
   *                <p>Cannot be greater than 255 characters.</p>
   *             </li>
   *             <li>
   *                <p>Are case-insensitive. (Fields named "foo" and "FOO" in the same payload are
   *               considered duplicates.)</p>
   *             </li>
   *          </ul>
   *          <p>For example, {"temp_01": 29} or {"_temp_01": 29} are valid, but {"temp-01": 29},
   *  {"01_temp": 29} or {"__temp_01": 29} are invalid in message payloads.  </p>
   */
  messages: Message[] | undefined;

  /**
   * <p>The name of the channel where the messages are sent.</p>
   */
  channelName: string | undefined;
}

export namespace BatchPutMessageRequest {
  export const filterSensitiveLog = (obj: BatchPutMessageRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains informations about errors.</p>
 */
export interface BatchPutMessageErrorEntry {
  /**
   * <p>The message associated with the error.</p>
   */
  errorMessage?: string;

  /**
   * <p>The ID of the message that caused the error. (See the value corresponding to the
   *           "messageId" key in the message object.)</p>
   */
  messageId?: string;

  /**
   * <p>The code associated with the error.</p>
   */
  errorCode?: string;
}

export namespace BatchPutMessageErrorEntry {
  export const filterSensitiveLog = (obj: BatchPutMessageErrorEntry): any => ({
    ...obj,
  });
}

export interface BatchPutMessageResponse {
  /**
   * <p>A list of any errors encountered when sending the messages to the channel.</p>
   */
  batchPutMessageErrorEntries?: BatchPutMessageErrorEntry[];
}

export namespace BatchPutMessageResponse {
  export const filterSensitiveLog = (obj: BatchPutMessageResponse): any => ({
    ...obj,
  });
}

/**
 * <p>There was an internal failure.</p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  message?: string;
}

export namespace InternalFailureException {
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was not valid.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>A resource with the specified name could not be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message?: string;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

export interface CancelPipelineReprocessingRequest {
  /**
   * <p>The name of pipeline for which data reprocessing is canceled.</p>
   */
  pipelineName: string | undefined;

  /**
   * <p>The ID of the reprocessing task (returned by "StartPipelineReprocessing").</p>
   */
  reprocessingId: string | undefined;
}

export namespace CancelPipelineReprocessingRequest {
  export const filterSensitiveLog = (obj: CancelPipelineReprocessingRequest): any => ({
    ...obj,
  });
}

export interface CancelPipelineReprocessingResponse {}

export namespace CancelPipelineReprocessingResponse {
  export const filterSensitiveLog = (obj: CancelPipelineReprocessingResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Use this to store channel data in an S3 bucket that you manage. If customer managed storage is
 *         selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed
 *         S3 storage cannot be changed after creation of the channel.</p>
 */
export interface CustomerManagedChannelS3Storage {
  /**
   * <p>The name of the Amazon S3 bucket in which channel data is stored.</p>
   */
  bucket: string | undefined;

  /**
   * <p>[Optional] The prefix used to create the keys of the channel data objects. Each object in
   *         an Amazon S3 bucket has a key that is its unique identifier within the bucket (each object in
   *         a bucket has exactly one key). The prefix must end with a '/'.</p>
   */
  keyPrefix?: string;

  /**
   * <p>The ARN of the role which grants AWS IoT Analytics permission to interact with your Amazon S3 resources.</p>
   */
  roleArn: string | undefined;
}

export namespace CustomerManagedChannelS3Storage {
  export const filterSensitiveLog = (obj: CustomerManagedChannelS3Storage): any => ({
    ...obj,
  });
}

/**
 * <p>Use this to store channel data in an S3 bucket managed by the AWS IoT Analytics service.
 *         The choice of service-managed or customer-managed S3 storage cannot be changed after creation
 *         of the channel.</p>
 */
export interface ServiceManagedChannelS3Storage {}

export namespace ServiceManagedChannelS3Storage {
  export const filterSensitiveLog = (obj: ServiceManagedChannelS3Storage): any => ({
    ...obj,
  });
}

/**
 * <p>Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3"
 *         storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation
 *         of the channel.</p>
 */
export interface ChannelStorage {
  /**
   * <p>Use this to store channel data in an S3 bucket managed by the AWS IoT Analytics service.
   *         The choice of service-managed or customer-managed S3 storage cannot be changed after creation
   *         of the channel.</p>
   */
  serviceManagedS3?: ServiceManagedChannelS3Storage;

  /**
   * <p>Use this to store channel data in an S3 bucket that you manage. If customer managed storage is
   *         selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed
   *         S3 storage cannot be changed after creation of the channel.</p>
   */
  customerManagedS3?: CustomerManagedChannelS3Storage;
}

export namespace ChannelStorage {
  export const filterSensitiveLog = (obj: ChannelStorage): any => ({
    ...obj,
  });
}

/**
 * <p>How long, in days, message data is kept.</p>
 */
export interface RetentionPeriod {
  /**
   * <p>If true, message data is kept indefinitely.</p>
   */
  unlimited?: boolean;

  /**
   * <p>The number of days that message data is kept. The "unlimited" parameter must be false.</p>
   */
  numberOfDays?: number;
}

export namespace RetentionPeriod {
  export const filterSensitiveLog = (obj: RetentionPeriod): any => ({
    ...obj,
  });
}

/**
 * <p>A set of key/value pairs which are used to manage the resource.</p>
 */
export interface Tag {
  /**
   * <p>The tag's value.</p>
   */
  value: string | undefined;

  /**
   * <p>The tag's key.</p>
   */
  key: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface CreateChannelRequest {
  /**
   * <p>Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3"
   *         storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation
   *         of the channel.</p>
   */
  channelStorage?: ChannelStorage;

  /**
   * <p>How long, in days, message data is kept for the channel. When "customerManagedS3" storage is
   *         selected, this parameter is ignored.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * <p>Metadata which can be used to manage the channel.</p>
   */
  tags?: Tag[];

  /**
   * <p>The name of the channel.</p>
   */
  channelName: string | undefined;
}

export namespace CreateChannelRequest {
  export const filterSensitiveLog = (obj: CreateChannelRequest): any => ({
    ...obj,
  });
}

export interface CreateChannelResponse {
  /**
   * <p>How long, in days, message data is kept for the channel.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * <p>The ARN of the channel.</p>
   */
  channelArn?: string;

  /**
   * <p>The name of the channel.</p>
   */
  channelName?: string;
}

export namespace CreateChannelResponse {
  export const filterSensitiveLog = (obj: CreateChannelResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The command caused an internal limit to be exceeded.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>A resource with the same name already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  message?: string;
  /**
   * <p>The ID of the resource.</p>
   */
  resourceId?: string;

  /**
   * <p>The ARN of the resource.</p>
   */
  resourceArn?: string;
}

export namespace ResourceAlreadyExistsException {
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
}

export enum ComputeType {
  ACU_1 = "ACU_1",
  ACU_2 = "ACU_2",
}

/**
 * <p>The configuration of the resource used to execute the "containerAction".</p>
 */
export interface ResourceConfiguration {
  /**
   * <p>The size (in GB) of the persistent storage available to the resource instance used to
   *           execute the "containerAction" (min: 1, max: 50).</p>
   */
  volumeSizeInGB: number | undefined;

  /**
   * <p>The type of the compute resource used to execute the "containerAction". Possible values
   *           are: ACU_1 (vCPU=4, memory=16GiB) or ACU_2 (vCPU=8, memory=32GiB).</p>
   */
  computeType: ComputeType | string | undefined;
}

export namespace ResourceConfiguration {
  export const filterSensitiveLog = (obj: ResourceConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The data set whose latest contents are used as input to the notebook or
 *           application.</p>
 */
export interface DatasetContentVersionValue {
  /**
   * <p>The name of the data set whose latest contents are used as input to the notebook or
   *           application.</p>
   */
  datasetName: string | undefined;
}

export namespace DatasetContentVersionValue {
  export const filterSensitiveLog = (obj: DatasetContentVersionValue): any => ({
    ...obj,
  });
}

/**
 * <p>The value of the variable as a structure that specifies an output file URI.</p>
 */
export interface OutputFileUriValue {
  /**
   * <p>The URI of the location where data set contents are stored, usually the URI of a file in an
   *           S3 bucket.</p>
   */
  fileName: string | undefined;
}

export namespace OutputFileUriValue {
  export const filterSensitiveLog = (obj: OutputFileUriValue): any => ({
    ...obj,
  });
}

/**
 * <p>An instance of a variable to be passed to the "containerAction" execution.  Each variable
 *           must have a name and a value given by one of "stringValue", "datasetContentVersionValue", or
 *           "outputFileUriValue".</p>
 */
export interface Variable {
  /**
   * <p>The value of the variable as a string.</p>
   */
  stringValue?: string;

  /**
   * <p>The value of the variable as a structure that specifies an output file URI.</p>
   */
  outputFileUriValue?: OutputFileUriValue;

  /**
   * <p>The value of the variable as a double (numeric).</p>
   */
  doubleValue?: number;

  /**
   * <p>The value of the variable as a structure that specifies a data set content version.</p>
   */
  datasetContentVersionValue?: DatasetContentVersionValue;

  /**
   * <p>The name of the variable.</p>
   */
  name: string | undefined;
}

export namespace Variable {
  export const filterSensitiveLog = (obj: Variable): any => ({
    ...obj,
  });
}

/**
 * <p>Information needed to run the "containerAction" to produce data set contents.</p>
 */
export interface ContainerDatasetAction {
  /**
   * <p>The ARN of the role which gives permission to the system to access needed resources in order
   *           to run the "containerAction". This includes, at minimum, permission to retrieve the data set
   *           contents which are the input to the containerized application.</p>
   */
  executionRoleArn: string | undefined;

  /**
   * <p>The values of variables used within the context of the execution of the containerized
   *           application (basically, parameters passed to the application). Each variable must have a
   *           name and a value given by one of "stringValue", "datasetContentVersionValue",
   *           or "outputFileUriValue".</p>
   */
  variables?: Variable[];

  /**
   * <p>Configuration of the resource which executes the "containerAction".</p>
   */
  resourceConfiguration: ResourceConfiguration | undefined;

  /**
   * <p>The ARN of the Docker container stored in your account. The Docker container contains an
   *           application and needed support libraries and is used to generate data set contents.</p>
   */
  image: string | undefined;
}

export namespace ContainerDatasetAction {
  export const filterSensitiveLog = (obj: ContainerDatasetAction): any => ({
    ...obj,
  });
}

/**
 * <p>Used to limit data to that which has arrived since the last execution of the action.</p>
 */
export interface DeltaTime {
  /**
   * <p>The number of seconds of estimated "in flight" lag time of message data.  When you create
   *        data set contents using message data from a specified time frame, some message data may still be
   *        "in flight" when processing begins, and so will not arrive in time to be processed. Use this
   *        field to make allowances for the "in flight" time of your message data, so that data not processed
   *        from a previous time frame will be included with the next time frame. Without this, missed message
   *        data would be excluded from processing during the next time frame as well, because its timestamp
   *        places it within the previous time frame.</p>
   */
  offsetSeconds: number | undefined;

  /**
   * <p>An expression by which the time of the message data may be determined. This may be the name
   *           of a timestamp field, or a SQL expression which is used to derive the time the message
   *           data was generated.</p>
   */
  timeExpression: string | undefined;
}

export namespace DeltaTime {
  export const filterSensitiveLog = (obj: DeltaTime): any => ({
    ...obj,
  });
}

/**
 * <p>Information which is used to filter message data, to segregate it according to the time
 *           frame in which it arrives.</p>
 */
export interface QueryFilter {
  /**
   * <p>Used to limit data to that which has arrived since the last execution of the action.</p>
   */
  deltaTime?: DeltaTime;
}

export namespace QueryFilter {
  export const filterSensitiveLog = (obj: QueryFilter): any => ({
    ...obj,
  });
}

/**
 * <p>The SQL query to modify the message.</p>
 */
export interface SqlQueryDatasetAction {
  /**
   * <p>Pre-filters applied to message data.</p>
   */
  filters?: QueryFilter[];

  /**
   * <p>A SQL query string.</p>
   */
  sqlQuery: string | undefined;
}

export namespace SqlQueryDatasetAction {
  export const filterSensitiveLog = (obj: SqlQueryDatasetAction): any => ({
    ...obj,
  });
}

/**
 * <p>A "DatasetAction" object that specifies how data set contents are automatically created.</p>
 */
export interface DatasetAction {
  /**
   * <p>Information which allows the system to run a containerized application in order to create
   *           the data set contents. The application must be in a Docker container along with any needed
   *           support libraries.</p>
   */
  containerAction?: ContainerDatasetAction;

  /**
   * <p>An "SqlQueryDatasetAction" object that uses an SQL query to automatically create data set contents.</p>
   */
  queryAction?: SqlQueryDatasetAction;

  /**
   * <p>The name of the data set action by which data set contents are automatically created.</p>
   */
  actionName?: string;
}

export namespace DatasetAction {
  export const filterSensitiveLog = (obj: DatasetAction): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for delivery of data set contents to AWS IoT Events.</p>
 */
export interface IotEventsDestinationConfiguration {
  /**
   * <p>The ARN of the role which grants AWS IoT Analytics permission to deliver data set contents
   *         to an AWS IoT Events input.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the AWS IoT Events input to which data set contents are delivered.</p>
   */
  inputName: string | undefined;
}

export namespace IotEventsDestinationConfiguration {
  export const filterSensitiveLog = (obj: IotEventsDestinationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for coordination with the AWS Glue ETL (extract, transform and
 *         load) service.</p>
 */
export interface GlueConfiguration {
  /**
   * <p>The name of the database in your AWS Glue Data Catalog in which the table is located. (An AWS
   *         Glue Data Catalog database contains Glue Data tables.)</p>
   */
  databaseName: string | undefined;

  /**
   * <p>The name of the table in your AWS Glue Data Catalog which is used to perform the ETL (extract,
   *         transform and load) operations. (An AWS Glue Data Catalog table contains partitioned data and descriptions
   *         of data sources and targets.)</p>
   */
  tableName: string | undefined;
}

export namespace GlueConfiguration {
  export const filterSensitiveLog = (obj: GlueConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for delivery of data set contents to Amazon S3.</p>
 */
export interface S3DestinationConfiguration {
  /**
   * <p>Configuration information for coordination with the AWS Glue ETL (extract, transform and
   *         load) service.</p>
   */
  glueConfiguration?: GlueConfiguration;

  /**
   * <p>The ARN of the role which grants AWS IoT Analytics permission to interact with your Amazon S3
   *         and AWS Glue resources.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The key of the data set contents object. Each object in an Amazon S3 bucket has a key that is
   *         its unique identifier within the bucket (each object in a bucket has exactly one key). To produce
   *         a unique key, you can use "!{iotanalytics:scheduledTime}" to insert the time of the scheduled SQL
   *         query run, or "!{iotanalytics:versioned} to insert a unique hash identifying the data set, for
   *         example: "/DataSet/!{iotanalytics:scheduledTime}/!{iotanalytics:versioned}.csv".</p>
   */
  key: string | undefined;

  /**
   * <p>The name of the Amazon S3 bucket to which data set contents are delivered.</p>
   */
  bucket: string | undefined;
}

export namespace S3DestinationConfiguration {
  export const filterSensitiveLog = (obj: S3DestinationConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The destination to which data set contents are delivered.</p>
 */
export interface DatasetContentDeliveryDestination {
  /**
   * <p>Configuration information for delivery of data set contents to Amazon S3.</p>
   */
  s3DestinationConfiguration?: S3DestinationConfiguration;

  /**
   * <p>Configuration information for delivery of data set contents to AWS IoT Events.</p>
   */
  iotEventsDestinationConfiguration?: IotEventsDestinationConfiguration;
}

export namespace DatasetContentDeliveryDestination {
  export const filterSensitiveLog = (obj: DatasetContentDeliveryDestination): any => ({
    ...obj,
  });
}

/**
 * <p>When data set contents are created they are delivered to destination specified here.</p>
 */
export interface DatasetContentDeliveryRule {
  /**
   * <p>The destination to which data set contents are delivered.</p>
   */
  destination: DatasetContentDeliveryDestination | undefined;

  /**
   * <p>The name of the data set content delivery rules entry.</p>
   */
  entryName?: string;
}

export namespace DatasetContentDeliveryRule {
  export const filterSensitiveLog = (obj: DatasetContentDeliveryRule): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the data set whose content generation triggers the new data set content
 *           generation.</p>
 */
export interface TriggeringDataset {
  /**
   * <p>The name of the data set whose content generation triggers the new data set content
   *           generation.</p>
   */
  name: string | undefined;
}

export namespace TriggeringDataset {
  export const filterSensitiveLog = (obj: TriggeringDataset): any => ({
    ...obj,
  });
}

/**
 * <p>The schedule for when to trigger an update.</p>
 */
export interface Schedule {
  /**
   * <p>The expression that defines when to trigger an update. For more information, see
   *           <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">
   *           Schedule Expressions for Rules</a> in the Amazon CloudWatch Events User Guide.</p>
   */
  expression?: string;
}

export namespace Schedule {
  export const filterSensitiveLog = (obj: Schedule): any => ({
    ...obj,
  });
}

/**
 * <p>The "DatasetTrigger"
 *      that specifies when the data set is automatically updated.</p>
 */
export interface DatasetTrigger {
  /**
   * <p>The "Schedule" when the trigger is initiated.</p>
   */
  schedule?: Schedule;

  /**
   * <p>The data set whose content creation triggers the creation of this data set's contents.</p>
   */
  dataset?: TriggeringDataset;
}

export namespace DatasetTrigger {
  export const filterSensitiveLog = (obj: DatasetTrigger): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the versioning of data set contents.</p>
 */
export interface VersioningConfiguration {
  /**
   * <p>How many versions of data set contents will be kept. The "unlimited" parameter must be false.</p>
   */
  maxVersions?: number;

  /**
   * <p>If true, unlimited versions of data set contents will be kept.</p>
   */
  unlimited?: boolean;
}

export namespace VersioningConfiguration {
  export const filterSensitiveLog = (obj: VersioningConfiguration): any => ({
    ...obj,
  });
}

export interface CreateDatasetRequest {
  /**
   * <p>[Optional] How many versions of data set contents are kept. If not specified or set to null, only the
   *         latest version plus the latest succeeded version (if they are different) are kept for
   *         the time period specified by the "retentionPeriod" parameter. (For more information, see
   *         https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions)</p>
   */
  versioningConfiguration?: VersioningConfiguration;

  /**
   * <p>A list of actions that create the data set contents.</p>
   */
  actions: DatasetAction[] | undefined;

  /**
   * <p>When data set contents are created they are delivered to destinations specified here.</p>
   */
  contentDeliveryRules?: DatasetContentDeliveryRule[];

  /**
   * <p>The name of the data set.</p>
   */
  datasetName: string | undefined;

  /**
   * <p>A list of triggers. A trigger causes data set contents to be populated at a specified
   *           time interval or when another data set's contents are created. The list of triggers can
   *           be empty or contain up to five <b>DataSetTrigger</b> objects.</p>
   */
  triggers?: DatasetTrigger[];

  /**
   * <p>Metadata which can be used to manage the data set.</p>
   */
  tags?: Tag[];

  /**
   * <p>[Optional] How long, in days, versions of data set contents are kept for the data set. If
   *           not specified or set to null, versions of data set contents are retained for at most 90 days.
   *           The number of versions of data set contents retained is determined by the
   *           <code>versioningConfiguration</code> parameter.  (For more information, see
   *           https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions)</p>
   */
  retentionPeriod?: RetentionPeriod;
}

export namespace CreateDatasetRequest {
  export const filterSensitiveLog = (obj: CreateDatasetRequest): any => ({
    ...obj,
  });
}

export interface CreateDatasetResponse {
  /**
   * <p>How long, in days, data set contents are kept for the data set.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * <p>The name of the data set.</p>
   */
  datasetName?: string;

  /**
   * <p>The ARN of the data set.</p>
   */
  datasetArn?: string;
}

export namespace CreateDatasetResponse {
  export const filterSensitiveLog = (obj: CreateDatasetResponse): any => ({
    ...obj,
  });
}

export interface CreateDatasetContentRequest {
  /**
   * <p>The name of the data set.</p>
   */
  datasetName: string | undefined;
}

export namespace CreateDatasetContentRequest {
  export const filterSensitiveLog = (obj: CreateDatasetContentRequest): any => ({
    ...obj,
  });
}

export interface CreateDatasetContentResponse {
  /**
   * <p>The version ID of the data set contents which are being created.</p>
   */
  versionId?: string;
}

export namespace CreateDatasetContentResponse {
  export const filterSensitiveLog = (obj: CreateDatasetContentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Use this to store data store data in an S3 bucket that you manage. When customer managed storage is
 *         selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed
 *         S3 storage cannot be changed after creation of the data store.</p>
 */
export interface CustomerManagedDatastoreS3Storage {
  /**
   * <p>The ARN of the role which grants AWS IoT Analytics permission to interact with your Amazon S3 resources.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>[Optional] The prefix used to create the keys of the data store data objects. Each object in
   *         an Amazon S3 bucket has a key that is its unique identifier within the bucket (each object in a
   *         bucket has exactly one key). The prefix must end with a '/'.</p>
   */
  keyPrefix?: string;

  /**
   * <p>The name of the Amazon S3 bucket in which data store data is stored.</p>
   */
  bucket: string | undefined;
}

export namespace CustomerManagedDatastoreS3Storage {
  export const filterSensitiveLog = (obj: CustomerManagedDatastoreS3Storage): any => ({
    ...obj,
  });
}

/**
 * <p>Use this to store data store data in an S3 bucket managed by the AWS IoT Analytics service.
 *         The choice of service-managed or customer-managed S3 storage cannot be changed after creation
 *         of the data store.</p>
 */
export interface ServiceManagedDatastoreS3Storage {}

export namespace ServiceManagedDatastoreS3Storage {
  export const filterSensitiveLog = (obj: ServiceManagedDatastoreS3Storage): any => ({
    ...obj,
  });
}

/**
 * <p>Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3"
 *         storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data
 *         store is created.</p>
 */
export interface DatastoreStorage {
  /**
   * <p>Use this to store data store data in an S3 bucket that you manage. When customer managed storage is
   *         selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed
   *         S3 storage cannot be changed after creation of the data store.</p>
   */
  customerManagedS3?: CustomerManagedDatastoreS3Storage;

  /**
   * <p>Use this to store data store data in an S3 bucket managed by the AWS IoT Analytics service.
   *         The choice of service-managed or customer-managed S3 storage cannot be changed after creation
   *         of the data store.</p>
   */
  serviceManagedS3?: ServiceManagedDatastoreS3Storage;
}

export namespace DatastoreStorage {
  export const filterSensitiveLog = (obj: DatastoreStorage): any => ({
    ...obj,
  });
}

export interface CreateDatastoreRequest {
  /**
   * <p>How long, in days, message data is kept for the data store. When "customerManagedS3" storage
   *         is selected, this parameter is ignored.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * <p>The name of the data store.</p>
   */
  datastoreName: string | undefined;

  /**
   * <p>Metadata which can be used to manage the data store.</p>
   */
  tags?: Tag[];

  /**
   * <p>Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3"
   *         storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data
   *         store is created.</p>
   */
  datastoreStorage?: DatastoreStorage;
}

export namespace CreateDatastoreRequest {
  export const filterSensitiveLog = (obj: CreateDatastoreRequest): any => ({
    ...obj,
  });
}

export interface CreateDatastoreResponse {
  /**
   * <p>The ARN of the data store.</p>
   */
  datastoreArn?: string;

  /**
   * <p>How long, in days, message data is kept for the data store.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * <p>The name of the data store.</p>
   */
  datastoreName?: string;
}

export namespace CreateDatastoreResponse {
  export const filterSensitiveLog = (obj: CreateDatastoreResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The activity that determines the source of the messages to be processed.</p>
 */
export interface ChannelActivity {
  /**
   * <p>The name of the 'channel' activity.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the channel from which the messages are processed.</p>
   */
  channelName: string | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export namespace ChannelActivity {
  export const filterSensitiveLog = (obj: ChannelActivity): any => ({
    ...obj,
  });
}

/**
 * <p>The 'datastore' activity that specifies where to store the processed data.</p>
 */
export interface DatastoreActivity {
  /**
   * <p>The name of the data store where processed messages are stored.</p>
   */
  datastoreName: string | undefined;

  /**
   * <p>The name of the 'datastore' activity.</p>
   */
  name: string | undefined;
}

export namespace DatastoreActivity {
  export const filterSensitiveLog = (obj: DatastoreActivity): any => ({
    ...obj,
  });
}

/**
 * <p>An activity that adds data from the AWS IoT device registry to your message.</p>
 */
export interface DeviceRegistryEnrichActivity {
  /**
   * <p>The name of the attribute that is added to the message.</p>
   */
  attribute: string | undefined;

  /**
   * <p>The ARN of the role that allows access to the device's registry information.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the 'deviceRegistryEnrich' activity.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the IoT device whose registry information is added to the message.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export namespace DeviceRegistryEnrichActivity {
  export const filterSensitiveLog = (obj: DeviceRegistryEnrichActivity): any => ({
    ...obj,
  });
}

/**
 * <p>An activity that adds information from the AWS IoT Device Shadows service to a message.</p>
 */
export interface DeviceShadowEnrichActivity {
  /**
   * <p>The name of the 'deviceShadowEnrich' activity.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the IoT device whose shadow information is added to
   *           the message.</p>
   */
  thingName: string | undefined;

  /**
   * <p>The ARN of the role that allows access to the device's shadow.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The name of the attribute that is added to the message.</p>
   */
  attribute: string | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export namespace DeviceShadowEnrichActivity {
  export const filterSensitiveLog = (obj: DeviceShadowEnrichActivity): any => ({
    ...obj,
  });
}

/**
 * <p>An activity that filters a message based on its attributes.</p>
 */
export interface FilterActivity {
  /**
   * <p>An expression that looks like a SQL WHERE clause that must return a Boolean value.</p>
   */
  filter: string | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;

  /**
   * <p>The name of the 'filter' activity.</p>
   */
  name: string | undefined;
}

export namespace FilterActivity {
  export const filterSensitiveLog = (obj: FilterActivity): any => ({
    ...obj,
  });
}

/**
 * <p>An activity that runs a Lambda function to modify the message.</p>
 */
export interface LambdaActivity {
  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;

  /**
   * <p>The number of messages passed to the Lambda function for processing.</p>
   *          <p>The AWS Lambda function must be able to process all of these messages within
   *          five minutes, which is the maximum timeout duration for Lambda functions.</p>
   */
  batchSize: number | undefined;

  /**
   * <p>The name of the 'lambda' activity.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the Lambda function that is run on the message.</p>
   */
  lambdaName: string | undefined;
}

export namespace LambdaActivity {
  export const filterSensitiveLog = (obj: LambdaActivity): any => ({
    ...obj,
  });
}

/**
 * <p>An activity that computes an arithmetic expression using the message's attributes.</p>
 */
export interface MathActivity {
  /**
   * <p>The name of the attribute that contains the result of the math operation.</p>
   */
  attribute: string | undefined;

  /**
   * <p>An expression that uses one or more existing attributes and must return an integer value.</p>
   */
  math: string | undefined;

  /**
   * <p>The name of the 'math' activity.</p>
   */
  name: string | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export namespace MathActivity {
  export const filterSensitiveLog = (obj: MathActivity): any => ({
    ...obj,
  });
}

/**
 * <p>An activity that removes attributes from a message.</p>
 */
export interface RemoveAttributesActivity {
  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;

  /**
   * <p>A list of 1-50 attributes to remove from the message.</p>
   */
  attributes: string[] | undefined;

  /**
   * <p>The name of the 'removeAttributes' activity.</p>
   */
  name: string | undefined;
}

export namespace RemoveAttributesActivity {
  export const filterSensitiveLog = (obj: RemoveAttributesActivity): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a new message using only the specified attributes
 *         from the original message.</p>
 */
export interface SelectAttributesActivity {
  /**
   * <p>The name of the 'selectAttributes' activity.</p>
   */
  name: string | undefined;

  /**
   * <p>A list of the attributes to select from the message.</p>
   */
  attributes: string[] | undefined;

  /**
   * <p>The next activity in the pipeline.</p>
   */
  next?: string;
}

export namespace SelectAttributesActivity {
  export const filterSensitiveLog = (obj: SelectAttributesActivity): any => ({
    ...obj,
  });
}

/**
 * <p>An activity that performs a transformation on a message.</p>
 */
export interface PipelineActivity {
  /**
   * <p>Adds information from the AWS IoT Device Shadows service to a message.</p>
   */
  deviceShadowEnrich?: DeviceShadowEnrichActivity;

  /**
   * <p>Filters a message based on its attributes.</p>
   */
  filter?: FilterActivity;

  /**
   * <p>Computes an arithmetic expression using the message's attributes and adds
   *        it to the message.</p>
   */
  math?: MathActivity;

  /**
   * <p>Removes attributes from a message.</p>
   */
  removeAttributes?: RemoveAttributesActivity;

  /**
   * <p>Runs a Lambda function to modify the message.</p>
   */
  lambda?: LambdaActivity;

  /**
   * <p>Determines the source of the messages to be processed.</p>
   */
  channel?: ChannelActivity;

  /**
   * <p>Adds other attributes based on existing attributes in the message.</p>
   */
  addAttributes?: AddAttributesActivity;

  /**
   * <p>Specifies where to store the processed message data.</p>
   */
  datastore?: DatastoreActivity;

  /**
   * <p>Creates a new message using only the specified attributes from the original message.
   *      </p>
   */
  selectAttributes?: SelectAttributesActivity;

  /**
   * <p>Adds data from the AWS IoT device registry to your message.</p>
   */
  deviceRegistryEnrich?: DeviceRegistryEnrichActivity;
}

export namespace PipelineActivity {
  export const filterSensitiveLog = (obj: PipelineActivity): any => ({
    ...obj,
  });
}

export interface CreatePipelineRequest {
  /**
   * <p>Metadata which can be used to manage the pipeline.</p>
   */
  tags?: Tag[];

  /**
   * <p>A list of "PipelineActivity" objects. Activities perform transformations on your messages,
   *           such as removing, renaming or adding message attributes; filtering messages based on attribute
   *           values; invoking your Lambda functions on messages for advanced processing; or performing
   *           mathematical transformations to normalize device data.</p>
   *          <p>The list can be 2-25 <b>PipelineActivity</b> objects and must
   *           contain both a <code>channel</code> and a <code>datastore</code> activity. Each entry in the
   *           list must contain only one activity, for example:</p>
   *          <p>
   *             <code>pipelineActivities = [
   *   {
   *     "channel": { ... }
   *   },
   *   {
   *     "lambda": { ... }
   *   },
   *   ...
   * ]</code>
   *          </p>
   */
  pipelineActivities: PipelineActivity[] | undefined;

  /**
   * <p>The name of the pipeline.</p>
   */
  pipelineName: string | undefined;
}

export namespace CreatePipelineRequest {
  export const filterSensitiveLog = (obj: CreatePipelineRequest): any => ({
    ...obj,
  });
}

export interface CreatePipelineResponse {
  /**
   * <p>The name of the pipeline.</p>
   */
  pipelineName?: string;

  /**
   * <p>The ARN of the pipeline.</p>
   */
  pipelineArn?: string;
}

export namespace CreatePipelineResponse {
  export const filterSensitiveLog = (obj: CreatePipelineResponse): any => ({
    ...obj,
  });
}

export interface DeleteChannelRequest {
  /**
   * <p>The name of the channel to delete.</p>
   */
  channelName: string | undefined;
}

export namespace DeleteChannelRequest {
  export const filterSensitiveLog = (obj: DeleteChannelRequest): any => ({
    ...obj,
  });
}

export interface DeleteDatasetRequest {
  /**
   * <p>The name of the data set to delete.</p>
   */
  datasetName: string | undefined;
}

export namespace DeleteDatasetRequest {
  export const filterSensitiveLog = (obj: DeleteDatasetRequest): any => ({
    ...obj,
  });
}

export interface DeleteDatasetContentRequest {
  /**
   * <p>The name of the data set whose content is deleted.</p>
   */
  datasetName: string | undefined;

  /**
   * <p>The version of the data set whose content is deleted. You can also use the strings
   *           "$LATEST" or "$LATEST_SUCCEEDED" to delete the latest or latest successfully
   *           completed data set. If not specified, "$LATEST_SUCCEEDED" is the default.</p>
   */
  versionId?: string;
}

export namespace DeleteDatasetContentRequest {
  export const filterSensitiveLog = (obj: DeleteDatasetContentRequest): any => ({
    ...obj,
  });
}

export interface DeleteDatastoreRequest {
  /**
   * <p>The name of the data store to delete.</p>
   */
  datastoreName: string | undefined;
}

export namespace DeleteDatastoreRequest {
  export const filterSensitiveLog = (obj: DeleteDatastoreRequest): any => ({
    ...obj,
  });
}

export interface DeletePipelineRequest {
  /**
   * <p>The name of the pipeline to delete.</p>
   */
  pipelineName: string | undefined;
}

export namespace DeletePipelineRequest {
  export const filterSensitiveLog = (obj: DeletePipelineRequest): any => ({
    ...obj,
  });
}

export interface DescribeChannelRequest {
  /**
   * <p>The name of the channel whose information is retrieved.</p>
   */
  channelName: string | undefined;

  /**
   * <p>If true, additional statistical information about the channel is included in the response.
   *          This feature cannot be used with a channel whose S3 storage is customer-managed.</p>
   */
  includeStatistics?: boolean;
}

export namespace DescribeChannelRequest {
  export const filterSensitiveLog = (obj: DescribeChannelRequest): any => ({
    ...obj,
  });
}

export enum ChannelStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
}

/**
 * <p>A collection of data from an MQTT topic.
 *         Channels archive the raw, unprocessed messages before publishing the data to a pipeline.</p>
 */
export interface Channel {
  /**
   * <p>When the channel was last updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3"
   *         storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation
   *         of the channel.</p>
   */
  storage?: ChannelStorage;

  /**
   * <p>The name of the channel.</p>
   */
  name?: string;

  /**
   * <p>The ARN of the channel.</p>
   */
  arn?: string;

  /**
   * <p>The status of the channel.</p>
   */
  status?: ChannelStatus | string;

  /**
   * <p>How long, in days, message data is kept for the channel.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * <p>When the channel was created.</p>
   */
  creationTime?: Date;
}

export namespace Channel {
  export const filterSensitiveLog = (obj: Channel): any => ({
    ...obj,
  });
}

/**
 * <p>The estimated size of the resource.</p>
 */
export interface EstimatedResourceSize {
  /**
   * <p>The time when the estimate of the size of the resource was made.</p>
   */
  estimatedOn?: Date;

  /**
   * <p>The estimated size of the resource in bytes.</p>
   */
  estimatedSizeInBytes?: number;
}

export namespace EstimatedResourceSize {
  export const filterSensitiveLog = (obj: EstimatedResourceSize): any => ({
    ...obj,
  });
}

/**
 * <p>Statistics information about the channel.</p>
 */
export interface ChannelStatistics {
  /**
   * <p>The estimated size of the channel.</p>
   */
  size?: EstimatedResourceSize;
}

export namespace ChannelStatistics {
  export const filterSensitiveLog = (obj: ChannelStatistics): any => ({
    ...obj,
  });
}

export interface DescribeChannelResponse {
  /**
   * <p>Statistics about the channel. Included if the 'includeStatistics' parameter is set
   *          to true in the request.</p>
   */
  statistics?: ChannelStatistics;

  /**
   * <p>An object that contains information about the channel.</p>
   */
  channel?: Channel;
}

export namespace DescribeChannelResponse {
  export const filterSensitiveLog = (obj: DescribeChannelResponse): any => ({
    ...obj,
  });
}

export interface DescribeDatasetRequest {
  /**
   * <p>The name of the data set whose information is retrieved.</p>
   */
  datasetName: string | undefined;
}

export namespace DescribeDatasetRequest {
  export const filterSensitiveLog = (obj: DescribeDatasetRequest): any => ({
    ...obj,
  });
}

export enum DatasetStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
}

/**
 * <p>Information about a data set.</p>
 */
export interface Dataset {
  /**
   * <p>[Optional] How many versions of data set contents are kept. If not specified or set to null, only the
   *         latest version plus the latest succeeded version (if they are different) are kept for
   *         the time period specified by the "retentionPeriod" parameter. (For more information, see
   *         https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions)</p>
   */
  versioningConfiguration?: VersioningConfiguration;

  /**
   * <p>The status of the data set.</p>
   */
  status?: DatasetStatus | string;

  /**
   * <p>The "DatasetTrigger" objects
   *      that specify when the data set is automatically updated.</p>
   */
  triggers?: DatasetTrigger[];

  /**
   * <p>[Optional] How long, in days, message data is kept for the data set.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * <p>The name of the data set.</p>
   */
  name?: string;

  /**
   * <p>The "DatasetAction" objects that automatically create the data set contents.</p>
   */
  actions?: DatasetAction[];

  /**
   * <p>The ARN of the data set.</p>
   */
  arn?: string;

  /**
   * <p>The last time the data set was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>When data set contents are created they are delivered to destinations specified here.</p>
   */
  contentDeliveryRules?: DatasetContentDeliveryRule[];

  /**
   * <p>When the data set was created.</p>
   */
  creationTime?: Date;
}

export namespace Dataset {
  export const filterSensitiveLog = (obj: Dataset): any => ({
    ...obj,
  });
}

export interface DescribeDatasetResponse {
  /**
   * <p>An object that contains information about the data set.</p>
   */
  dataset?: Dataset;
}

export namespace DescribeDatasetResponse {
  export const filterSensitiveLog = (obj: DescribeDatasetResponse): any => ({
    ...obj,
  });
}

export interface DescribeDatastoreRequest {
  /**
   * <p>The name of the data store</p>
   */
  datastoreName: string | undefined;

  /**
   * <p>If true, additional statistical information about the data store is included in the response.
   *          This feature cannot be used with a data store whose S3 storage is customer-managed.</p>
   */
  includeStatistics?: boolean;
}

export namespace DescribeDatastoreRequest {
  export const filterSensitiveLog = (obj: DescribeDatastoreRequest): any => ({
    ...obj,
  });
}

export enum DatastoreStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
}

/**
 * <p>Information about a data store.</p>
 */
export interface Datastore {
  /**
   * <p>Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3"
   *         storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data
   *         store is created.</p>
   */
  storage?: DatastoreStorage;

  /**
   * <p>When the data store was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The name of the data store.</p>
   */
  name?: string;

  /**
   * <p>The ARN of the data store.</p>
   */
  arn?: string;

  /**
   * <p>The last time the data store was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>How long, in days, message data is kept for the data store. When "customerManagedS3" storage
   *         is selected, this parameter is ignored.</p>
   */
  retentionPeriod?: RetentionPeriod;

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
   */
  status?: DatastoreStatus | string;
}

export namespace Datastore {
  export const filterSensitiveLog = (obj: Datastore): any => ({
    ...obj,
  });
}

/**
 * <p>Statistical information about the data store.</p>
 */
export interface DatastoreStatistics {
  /**
   * <p>The estimated size of the data store.</p>
   */
  size?: EstimatedResourceSize;
}

export namespace DatastoreStatistics {
  export const filterSensitiveLog = (obj: DatastoreStatistics): any => ({
    ...obj,
  });
}

export interface DescribeDatastoreResponse {
  /**
   * <p>Information about the data store.</p>
   */
  datastore?: Datastore;

  /**
   * <p>Additional statistical information about the data store. Included if the 'includeStatistics'
   *            parameter is set to true in the request.</p>
   */
  statistics?: DatastoreStatistics;
}

export namespace DescribeDatastoreResponse {
  export const filterSensitiveLog = (obj: DescribeDatastoreResponse): any => ({
    ...obj,
  });
}

export interface DescribeLoggingOptionsRequest {}

export namespace DescribeLoggingOptionsRequest {
  export const filterSensitiveLog = (obj: DescribeLoggingOptionsRequest): any => ({
    ...obj,
  });
}

export enum LoggingLevel {
  ERROR = "ERROR",
}

/**
 * <p>Information about logging options.</p>
 */
export interface LoggingOptions {
  /**
   * <p>The logging level.  Currently, only "ERROR" is supported.</p>
   */
  level: LoggingLevel | string | undefined;

  /**
   * <p>If true, logging is enabled for AWS IoT Analytics.</p>
   */
  enabled: boolean | undefined;

  /**
   * <p>The ARN of the role that grants permission to AWS IoT Analytics to
   *           perform logging.</p>
   */
  roleArn: string | undefined;
}

export namespace LoggingOptions {
  export const filterSensitiveLog = (obj: LoggingOptions): any => ({
    ...obj,
  });
}

export interface DescribeLoggingOptionsResponse {
  /**
   * <p>The current settings of the AWS IoT Analytics logging options.</p>
   */
  loggingOptions?: LoggingOptions;
}

export namespace DescribeLoggingOptionsResponse {
  export const filterSensitiveLog = (obj: DescribeLoggingOptionsResponse): any => ({
    ...obj,
  });
}

export interface DescribePipelineRequest {
  /**
   * <p>The name of the pipeline whose information is retrieved.</p>
   */
  pipelineName: string | undefined;
}

export namespace DescribePipelineRequest {
  export const filterSensitiveLog = (obj: DescribePipelineRequest): any => ({
    ...obj,
  });
}

export enum ReprocessingStatus {
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>Information about pipeline reprocessing.</p>
 */
export interface ReprocessingSummary {
  /**
   * <p>The status of the pipeline reprocessing.</p>
   */
  status?: ReprocessingStatus | string;

  /**
   * <p>The 'reprocessingId' returned by "StartPipelineReprocessing".</p>
   */
  id?: string;

  /**
   * <p>The time the pipeline reprocessing was created.</p>
   */
  creationTime?: Date;
}

export namespace ReprocessingSummary {
  export const filterSensitiveLog = (obj: ReprocessingSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a pipeline.</p>
 */
export interface Pipeline {
  /**
   * <p>When the pipeline was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The activities that perform transformations on the messages.</p>
   */
  activities?: PipelineActivity[];

  /**
   * <p>The ARN of the pipeline.</p>
   */
  arn?: string;

  /**
   * <p>The name of the pipeline.</p>
   */
  name?: string;

  /**
   * <p>The last time the pipeline was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>A summary of information about the pipeline reprocessing.</p>
   */
  reprocessingSummaries?: ReprocessingSummary[];
}

export namespace Pipeline {
  export const filterSensitiveLog = (obj: Pipeline): any => ({
    ...obj,
  });
}

export interface DescribePipelineResponse {
  /**
   * <p>A "Pipeline" object
   *         that contains information about the pipeline.</p>
   */
  pipeline?: Pipeline;
}

export namespace DescribePipelineResponse {
  export const filterSensitiveLog = (obj: DescribePipelineResponse): any => ({
    ...obj,
  });
}

export interface GetDatasetContentRequest {
  /**
   * <p>The name of the data set whose contents are retrieved.</p>
   */
  datasetName: string | undefined;

  /**
   * <p>The version of the data set whose contents are retrieved. You can also use
   *          the strings "$LATEST" or "$LATEST_SUCCEEDED" to retrieve the contents of the
   *          latest or latest successfully completed data set. If not specified, "$LATEST_SUCCEEDED"
   *          is the default.</p>
   */
  versionId?: string;
}

export namespace GetDatasetContentRequest {
  export const filterSensitiveLog = (obj: GetDatasetContentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The reference to a data set entry.</p>
 */
export interface DatasetEntry {
  /**
   * <p>The name of the data set item.</p>
   */
  entryName?: string;

  /**
   * <p>The pre-signed URI of the data set item.</p>
   */
  dataURI?: string;
}

export namespace DatasetEntry {
  export const filterSensitiveLog = (obj: DatasetEntry): any => ({
    ...obj,
  });
}

export enum DatasetContentState {
  CREATING = "CREATING",
  FAILED = "FAILED",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>The state of the data set contents and the reason they are in this state.</p>
 */
export interface DatasetContentStatus {
  /**
   * <p>The reason the data set contents are in this state.</p>
   */
  reason?: string;

  /**
   * <p>The state of the data set contents. Can be one of "READY", "CREATING", "SUCCEEDED" or
   *          "FAILED".</p>
   */
  state?: DatasetContentState | string;
}

export namespace DatasetContentStatus {
  export const filterSensitiveLog = (obj: DatasetContentStatus): any => ({
    ...obj,
  });
}

export interface GetDatasetContentResponse {
  /**
   * <p>A list of "DatasetEntry" objects.</p>
   */
  entries?: DatasetEntry[];

  /**
   * <p>The time when the request was made.</p>
   */
  timestamp?: Date;

  /**
   * <p>The status of the data set content.</p>
   */
  status?: DatasetContentStatus;
}

export namespace GetDatasetContentResponse {
  export const filterSensitiveLog = (obj: GetDatasetContentResponse): any => ({
    ...obj,
  });
}

export interface ListChannelsRequest {
  /**
   * <p>The maximum number of results to return in this request.</p>
   *          <p>The default value is 100.</p>
   */
  maxResults?: number;

  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListChannelsRequest {
  export const filterSensitiveLog = (obj: ListChannelsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Used to store channel data in an S3 bucket that you manage.</p>
 */
export interface CustomerManagedChannelS3StorageSummary {
  /**
   * <p>The ARN of the role which grants AWS IoT Analytics permission to interact with your Amazon
   *         S3 resources.</p>
   */
  roleArn?: string;

  /**
   * <p>[Optional] The prefix used to create the keys of the channel data objects. Each object in
   *         an Amazon S3 bucket has a key that is its unique identifier within the bucket (each object in
   *         a bucket has exactly one key). The prefix must end with a '/'.</p>
   */
  keyPrefix?: string;

  /**
   * <p>The name of the Amazon S3 bucket in which channel data is stored.</p>
   */
  bucket?: string;
}

export namespace CustomerManagedChannelS3StorageSummary {
  export const filterSensitiveLog = (obj: CustomerManagedChannelS3StorageSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Used to store channel data in an S3 bucket managed by the AWS IoT Analytics service.</p>
 */
export interface ServiceManagedChannelS3StorageSummary {}

export namespace ServiceManagedChannelS3StorageSummary {
  export const filterSensitiveLog = (obj: ServiceManagedChannelS3StorageSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Where channel data is stored.</p>
 */
export interface ChannelStorageSummary {
  /**
   * <p>Used to store channel data in an S3 bucket managed by the AWS IoT Analytics service.</p>
   */
  serviceManagedS3?: ServiceManagedChannelS3StorageSummary;

  /**
   * <p>Used to store channel data in an S3 bucket that you manage.</p>
   */
  customerManagedS3?: CustomerManagedChannelS3StorageSummary;
}

export namespace ChannelStorageSummary {
  export const filterSensitiveLog = (obj: ChannelStorageSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of information about a channel.</p>
 */
export interface ChannelSummary {
  /**
   * <p>The status of the channel.</p>
   */
  status?: ChannelStatus | string;

  /**
   * <p>When the channel was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>Where channel data is stored.</p>
   */
  channelStorage?: ChannelStorageSummary;

  /**
   * <p>The name of the channel.</p>
   */
  channelName?: string;

  /**
   * <p>The last time the channel was updated.</p>
   */
  lastUpdateTime?: Date;
}

export namespace ChannelSummary {
  export const filterSensitiveLog = (obj: ChannelSummary): any => ({
    ...obj,
  });
}

export interface ListChannelsResponse {
  /**
   * <p>A list of "ChannelSummary" objects.</p>
   */
  channelSummaries?: ChannelSummary[];

  /**
   * <p>The token to retrieve the next set of results, or <code>null</code> if there are no
   *           more results.</p>
   */
  nextToken?: string;
}

export namespace ListChannelsResponse {
  export const filterSensitiveLog = (obj: ListChannelsResponse): any => ({
    ...obj,
  });
}

export interface ListDatasetContentsRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the data set whose contents information you want to list.</p>
   */
  datasetName: string | undefined;

  /**
   * <p>A filter to limit results to those data set contents whose creation is scheduled on or
   *        after the given time. See the field <code>triggers.schedule</code> in the CreateDataset
   *        request. (timestamp)</p>
   */
  scheduledOnOrAfter?: Date;

  /**
   * <p>The maximum number of results to return in this request.</p>
   */
  maxResults?: number;

  /**
   * <p>A filter to limit results to those data set contents whose creation is scheduled before the
   *        given time. See the field <code>triggers.schedule</code> in the CreateDataset request. (timestamp)</p>
   */
  scheduledBefore?: Date;
}

export namespace ListDatasetContentsRequest {
  export const filterSensitiveLog = (obj: ListDatasetContentsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about data set contents.</p>
 */
export interface DatasetContentSummary {
  /**
   * <p>The status of the data set contents.</p>
   */
  status?: DatasetContentStatus;

  /**
   * <p>The version of the data set contents.</p>
   */
  version?: string;

  /**
   * <p>The time the dataset content status was updated to SUCCEEDED or FAILED.</p>
   */
  completionTime?: Date;

  /**
   * <p>The time the creation of the data set contents was scheduled to start.</p>
   */
  scheduleTime?: Date;

  /**
   * <p>The actual time the creation of the data set contents was started.</p>
   */
  creationTime?: Date;
}

export namespace DatasetContentSummary {
  export const filterSensitiveLog = (obj: DatasetContentSummary): any => ({
    ...obj,
  });
}

export interface ListDatasetContentsResponse {
  /**
   * <p>Summary information about data set contents that have been created.</p>
   */
  datasetContentSummaries?: DatasetContentSummary[];

  /**
   * <p>The token to retrieve the next set of results, or <code>null</code> if there are no
   *            more results.</p>
   */
  nextToken?: string;
}

export namespace ListDatasetContentsResponse {
  export const filterSensitiveLog = (obj: ListDatasetContentsResponse): any => ({
    ...obj,
  });
}

export interface ListDatasetsRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this request.</p>
   *          <p>The default value is 100.</p>
   */
  maxResults?: number;
}

export namespace ListDatasetsRequest {
  export const filterSensitiveLog = (obj: ListDatasetsRequest): any => ({
    ...obj,
  });
}

export enum DatasetActionType {
  CONTAINER = "CONTAINER",
  QUERY = "QUERY",
}

/**
 * <p>Information about the action which automatically creates the data set's contents.</p>
 */
export interface DatasetActionSummary {
  /**
   * <p>The type of action by which the data set's contents are automatically created.</p>
   */
  actionType?: DatasetActionType | string;

  /**
   * <p>The name of the action which automatically creates the data set's contents.</p>
   */
  actionName?: string;
}

export namespace DatasetActionSummary {
  export const filterSensitiveLog = (obj: DatasetActionSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of information about a data set.</p>
 */
export interface DatasetSummary {
  /**
   * <p>The time the data set was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The status of the data set.</p>
   */
  status?: DatasetStatus | string;

  /**
   * <p>A list of triggers. A trigger causes data set content to be populated at a specified time
   *        interval or when another data set is populated. The list of triggers can be empty or contain up
   *        to five DataSetTrigger objects</p>
   */
  triggers?: DatasetTrigger[];

  /**
   * <p>The last time the data set was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The name of the data set.</p>
   */
  datasetName?: string;

  /**
   * <p>A list of "DataActionSummary" objects.</p>
   */
  actions?: DatasetActionSummary[];
}

export namespace DatasetSummary {
  export const filterSensitiveLog = (obj: DatasetSummary): any => ({
    ...obj,
  });
}

export interface ListDatasetsResponse {
  /**
   * <p>The token to retrieve the next set of results, or <code>null</code> if there are no
   *           more results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of "DatasetSummary" objects.</p>
   */
  datasetSummaries?: DatasetSummary[];
}

export namespace ListDatasetsResponse {
  export const filterSensitiveLog = (obj: ListDatasetsResponse): any => ({
    ...obj,
  });
}

export interface ListDatastoresRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this request.</p>
   *          <p>The default value is 100.</p>
   */
  maxResults?: number;
}

export namespace ListDatastoresRequest {
  export const filterSensitiveLog = (obj: ListDatastoresRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Used to store data store data in an S3 bucket that you manage.</p>
 */
export interface CustomerManagedDatastoreS3StorageSummary {
  /**
   * <p>The name of the Amazon S3 bucket in which data store data is stored.</p>
   */
  bucket?: string;

  /**
   * <p>[Optional] The prefix used to create the keys of the data store data objects. Each object in
   *         an Amazon S3 bucket has a key that is its unique identifier within the bucket (each object in a
   *         bucket has exactly one key). The prefix must end with a '/'.</p>
   */
  keyPrefix?: string;

  /**
   * <p>The ARN of the role which grants AWS IoT Analytics permission to interact with your Amazon S3 resources.</p>
   */
  roleArn?: string;
}

export namespace CustomerManagedDatastoreS3StorageSummary {
  export const filterSensitiveLog = (obj: CustomerManagedDatastoreS3StorageSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Used to store data store data in an S3 bucket managed by the AWS IoT Analytics service.</p>
 */
export interface ServiceManagedDatastoreS3StorageSummary {}

export namespace ServiceManagedDatastoreS3StorageSummary {
  export const filterSensitiveLog = (obj: ServiceManagedDatastoreS3StorageSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Where data store data is stored.</p>
 */
export interface DatastoreStorageSummary {
  /**
   * <p>Used to store data store data in an S3 bucket that you manage.</p>
   */
  customerManagedS3?: CustomerManagedDatastoreS3StorageSummary;

  /**
   * <p>Used to store data store data in an S3 bucket managed by the AWS IoT Analytics service.</p>
   */
  serviceManagedS3?: ServiceManagedDatastoreS3StorageSummary;
}

export namespace DatastoreStorageSummary {
  export const filterSensitiveLog = (obj: DatastoreStorageSummary): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of information about a data store.</p>
 */
export interface DatastoreSummary {
  /**
   * <p>Where data store data is stored.</p>
   */
  datastoreStorage?: DatastoreStorageSummary;

  /**
   * <p>When the data store was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>The status of the data store.</p>
   */
  status?: DatastoreStatus | string;

  /**
   * <p>The last time the data store was updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>The name of the data store.</p>
   */
  datastoreName?: string;
}

export namespace DatastoreSummary {
  export const filterSensitiveLog = (obj: DatastoreSummary): any => ({
    ...obj,
  });
}

export interface ListDatastoresResponse {
  /**
   * <p>A list of "DatastoreSummary" objects.</p>
   */
  datastoreSummaries?: DatastoreSummary[];

  /**
   * <p>The token to retrieve the next set of results, or <code>null</code> if there are no
   *           more results.</p>
   */
  nextToken?: string;
}

export namespace ListDatastoresResponse {
  export const filterSensitiveLog = (obj: ListDatastoresResponse): any => ({
    ...obj,
  });
}

export interface ListPipelinesRequest {
  /**
   * <p>The token for the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return in this request.</p>
   *          <p>The default value is 100.</p>
   */
  maxResults?: number;
}

export namespace ListPipelinesRequest {
  export const filterSensitiveLog = (obj: ListPipelinesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A summary of information about a pipeline.</p>
 */
export interface PipelineSummary {
  /**
   * <p>When the pipeline was created.</p>
   */
  creationTime?: Date;

  /**
   * <p>When the pipeline was last updated.</p>
   */
  lastUpdateTime?: Date;

  /**
   * <p>A summary of information about the pipeline reprocessing.</p>
   */
  reprocessingSummaries?: ReprocessingSummary[];

  /**
   * <p>The name of the pipeline.</p>
   */
  pipelineName?: string;
}

export namespace PipelineSummary {
  export const filterSensitiveLog = (obj: PipelineSummary): any => ({
    ...obj,
  });
}

export interface ListPipelinesResponse {
  /**
   * <p>The token to retrieve the next set of results, or <code>null</code> if there are no
   *           more results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of "PipelineSummary" objects.</p>
   */
  pipelineSummaries?: PipelineSummary[];
}

export namespace ListPipelinesResponse {
  export const filterSensitiveLog = (obj: ListPipelinesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource whose tags you want to list.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags (metadata) which you have assigned to the resource.</p>
   */
  tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface PutLoggingOptionsRequest {
  /**
   * <p>The new values of the AWS IoT Analytics logging options.</p>
   */
  loggingOptions: LoggingOptions | undefined;
}

export namespace PutLoggingOptionsRequest {
  export const filterSensitiveLog = (obj: PutLoggingOptionsRequest): any => ({
    ...obj,
  });
}

export interface RunPipelineActivityRequest {
  /**
   * <p>The pipeline activity that is run. This must not be a 'channel' activity or a
   *           'datastore' activity because these activities are used in a pipeline only to load the
   *           original message and to store the (possibly) transformed message. If a 'lambda' activity is
   *           specified, only short-running Lambda functions (those with a timeout of less than 30 seconds
   *           or less) can be used.</p>
   */
  pipelineActivity: PipelineActivity | undefined;

  /**
   * <p>The sample message payloads on which the pipeline activity is run.</p>
   */
  payloads: Uint8Array[] | undefined;
}

export namespace RunPipelineActivityRequest {
  export const filterSensitiveLog = (obj: RunPipelineActivityRequest): any => ({
    ...obj,
  });
}

export interface RunPipelineActivityResponse {
  /**
   * <p>The enriched or transformed sample message payloads as base64-encoded strings.
   *           (The results of running the pipeline activity on each input sample message payload,
   *           encoded in base64.)</p>
   */
  payloads?: Uint8Array[];

  /**
   * <p>In case the pipeline activity fails, the log message that is generated.</p>
   */
  logResult?: string;
}

export namespace RunPipelineActivityResponse {
  export const filterSensitiveLog = (obj: RunPipelineActivityResponse): any => ({
    ...obj,
  });
}

export interface SampleChannelDataRequest {
  /**
   * <p>The end of the time window from which sample messages are retrieved.</p>
   */
  endTime?: Date;

  /**
   * <p>The start of the time window from which sample messages are retrieved.</p>
   */
  startTime?: Date;

  /**
   * <p>The name of the channel whose message samples are retrieved.</p>
   */
  channelName: string | undefined;

  /**
   * <p>The number of sample messages to be retrieved. The limit is 10, the default
   *           is also 10.</p>
   */
  maxMessages?: number;
}

export namespace SampleChannelDataRequest {
  export const filterSensitiveLog = (obj: SampleChannelDataRequest): any => ({
    ...obj,
  });
}

export interface SampleChannelDataResponse {
  /**
   * <p>The list of message samples.  Each sample message is returned as a base64-encoded
   *           string.</p>
   */
  payloads?: Uint8Array[];
}

export namespace SampleChannelDataResponse {
  export const filterSensitiveLog = (obj: SampleChannelDataResponse): any => ({
    ...obj,
  });
}

export interface StartPipelineReprocessingRequest {
  /**
   * <p>The end time (exclusive) of raw message data that is reprocessed.</p>
   */
  endTime?: Date;

  /**
   * <p>The name of the pipeline on which to start reprocessing.</p>
   */
  pipelineName: string | undefined;

  /**
   * <p>The start time (inclusive) of raw message data that is reprocessed.</p>
   */
  startTime?: Date;
}

export namespace StartPipelineReprocessingRequest {
  export const filterSensitiveLog = (obj: StartPipelineReprocessingRequest): any => ({
    ...obj,
  });
}

export interface StartPipelineReprocessingResponse {
  /**
   * <p>The ID of the pipeline reprocessing activity that was started.</p>
   */
  reprocessingId?: string;
}

export namespace StartPipelineReprocessingResponse {
  export const filterSensitiveLog = (obj: StartPipelineReprocessingResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The new or modified tags for the resource.</p>
   */
  tags: Tag[] | undefined;

  /**
   * <p>The ARN of the resource whose tags you want to modify.</p>
   */
  resourceArn: string | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The keys of those tags which you want to remove.</p>
   */
  tagKeys: string[] | undefined;

  /**
   * <p>The ARN of the resource whose tags you want to remove.</p>
   */
  resourceArn: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateChannelRequest {
  /**
   * <p>The name of the channel to be updated.</p>
   */
  channelName: string | undefined;

  /**
   * <p>How long, in days, message data is kept for the channel. The retention period cannot be updated
   *         if the channel's S3 storage is customer-managed.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * <p>Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3"
   *         storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation
   *         of the channel.</p>
   */
  channelStorage?: ChannelStorage;
}

export namespace UpdateChannelRequest {
  export const filterSensitiveLog = (obj: UpdateChannelRequest): any => ({
    ...obj,
  });
}

export interface UpdateDatasetRequest {
  /**
   * <p>The name of the data set to update.</p>
   */
  datasetName: string | undefined;

  /**
   * <p>[Optional] How many versions of data set contents are kept. If not specified or set to null, only the
   *         latest version plus the latest succeeded version (if they are different) are kept for
   *         the time period specified by the "retentionPeriod" parameter. (For more information, see
   *         https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions)</p>
   */
  versioningConfiguration?: VersioningConfiguration;

  /**
   * <p>When data set contents are created they are delivered to destinations specified here.</p>
   */
  contentDeliveryRules?: DatasetContentDeliveryRule[];

  /**
   * <p>A list of "DatasetAction" objects.</p>
   */
  actions: DatasetAction[] | undefined;

  /**
   * <p>How long, in days, data set contents are kept for the data set.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * <p>A list of "DatasetTrigger" objects.  The list can be empty or can contain up
   *           to five <b>DataSetTrigger</b> objects.</p>
   */
  triggers?: DatasetTrigger[];
}

export namespace UpdateDatasetRequest {
  export const filterSensitiveLog = (obj: UpdateDatasetRequest): any => ({
    ...obj,
  });
}

export interface UpdateDatastoreRequest {
  /**
   * <p>The name of the data store to be updated.</p>
   */
  datastoreName: string | undefined;

  /**
   * <p>Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3"
   *         storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data
   *         store is created.</p>
   */
  datastoreStorage?: DatastoreStorage;

  /**
   * <p>How long, in days, message data is kept for the data store. The retention period cannot be updated
   *         if the data store's S3 storage is customer-managed.</p>
   */
  retentionPeriod?: RetentionPeriod;
}

export namespace UpdateDatastoreRequest {
  export const filterSensitiveLog = (obj: UpdateDatastoreRequest): any => ({
    ...obj,
  });
}

export interface UpdatePipelineRequest {
  /**
   * <p>The name of the pipeline to update.</p>
   */
  pipelineName: string | undefined;

  /**
   * <p>A list of "PipelineActivity" objects. Activities perform transformations on your messages,
   *           such as removing, renaming or adding message attributes; filtering messages based on attribute
   *           values; invoking your Lambda functions on messages for advanced processing; or performing
   *           mathematical transformations to normalize device data.</p>
   *          <p>The list can be 2-25 <b>PipelineActivity</b> objects and must
   *           contain both a <code>channel</code> and a <code>datastore</code> activity. Each entry in the
   *           list must contain only one activity, for example:</p>
   *          <p>
   *             <code>pipelineActivities = [
   *   {
   *     "channel": { ... }
   *   },
   *   {
   *     "lambda": { ... }
   *   },
   *   ...
   * ]</code>
   *          </p>
   */
  pipelineActivities: PipelineActivity[] | undefined;
}

export namespace UpdatePipelineRequest {
  export const filterSensitiveLog = (obj: UpdatePipelineRequest): any => ({
    ...obj,
  });
}
