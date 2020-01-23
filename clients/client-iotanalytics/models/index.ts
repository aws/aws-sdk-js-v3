import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 *
 *          <p>There was an internal failure.</p>
 *
 */
export interface InternalFailureException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InternalFailureException";
  name: "InternalFailureException";
  $fault: "server";
  message?: string;
}

export namespace InternalFailureException {
  export function isa(o: any): o is InternalFailureException {
    return _smithy.isa(o, "InternalFailureException");
  }
}

/**
 *
 *          <p>The request was not valid.</p>
 *
 */
export interface InvalidRequestException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "InvalidRequestException";
  name: "InvalidRequestException";
  $fault: "client";
  message?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return _smithy.isa(o, "InvalidRequestException");
  }
}

/**
 *
 *          <p>The command caused an internal limit to be exceeded.</p>
 *
 */
export interface LimitExceededException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "LimitExceededException";
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return _smithy.isa(o, "LimitExceededException");
  }
}

/**
 *
 *          <p>A resource with the same name already exists.</p>
 *
 */
export interface ResourceAlreadyExistsException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceAlreadyExistsException";
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  message?: string;
  /**
   *
   *          <p>The ARN of the resource.</p>
   *
   */
  resourceArn?: string;

  /**
   *
   *          <p>The ID of the resource.</p>
   *
   */
  resourceId?: string;
}

export namespace ResourceAlreadyExistsException {
  export function isa(o: any): o is ResourceAlreadyExistsException {
    return _smithy.isa(o, "ResourceAlreadyExistsException");
  }
}

/**
 *
 *          <p>A resource with the specified name could not be found.</p>
 *
 */
export interface ResourceNotFoundException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ResourceNotFoundException";
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return _smithy.isa(o, "ResourceNotFoundException");
  }
}

/**
 *
 *          <p>The service is temporarily unavailable.</p>
 *
 */
export interface ServiceUnavailableException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ServiceUnavailableException";
  name: "ServiceUnavailableException";
  $fault: "server";
  message?: string;
}

export namespace ServiceUnavailableException {
  export function isa(o: any): o is ServiceUnavailableException {
    return _smithy.isa(o, "ServiceUnavailableException");
  }
}

/**
 *
 *          <p>The request was denied due to request throttling.</p>
 *
 */
export interface ThrottlingException
  extends _smithy.SmithyException,
    $MetadataBearer {
  __type: "ThrottlingException";
  name: "ThrottlingException";
  $fault: "client";
  message?: string;
}

export namespace ThrottlingException {
  export function isa(o: any): o is ThrottlingException {
    return _smithy.isa(o, "ThrottlingException");
  }
}

/**
 *
 *          <p>An activity that adds other attributes based on existing attributes in the message.</p>
 *
 */
export interface AddAttributesActivity {
  __type?: "AddAttributesActivity";
  /**
   *
   *          <p>A list of 1-50 "AttributeNameMapping"
   *         objects that map an existing attribute to a new attribute.</p>
   *          <note>
   *             <p>The existing attributes remain in the message,
   *      so if you want to remove the originals,
   *      use "RemoveAttributeActivity".</p>
   *          </note>
   *
   */
  attributes: { [key: string]: string } | undefined;

  /**
   *
   *          <p>The name of the 'addAttributes' activity.</p>
   *
   */
  name: string | undefined;

  /**
   *
   *          <p>The next activity in the pipeline.</p>
   *
   */
  next?: string;
}

export namespace AddAttributesActivity {
  export function isa(o: any): o is AddAttributesActivity {
    return _smithy.isa(o, "AddAttributesActivity");
  }
}

export interface CancelPipelineReprocessingRequest {
  __type?: "CancelPipelineReprocessingRequest";
  /**
   *
   *          <p>The name of pipeline for which data reprocessing is canceled.</p>
   *
   */
  pipelineName: string | undefined;

  /**
   *
   *          <p>The ID of the reprocessing task (returned by "StartPipelineReprocessing").</p>
   *
   */
  reprocessingId: string | undefined;
}

export namespace CancelPipelineReprocessingRequest {
  export function isa(o: any): o is CancelPipelineReprocessingRequest {
    return _smithy.isa(o, "CancelPipelineReprocessingRequest");
  }
}

export interface CancelPipelineReprocessingResponse extends $MetadataBearer {
  __type?: "CancelPipelineReprocessingResponse";
}

export namespace CancelPipelineReprocessingResponse {
  export function isa(o: any): o is CancelPipelineReprocessingResponse {
    return _smithy.isa(o, "CancelPipelineReprocessingResponse");
  }
}

/**
 *
 *          <p>A collection of data from an MQTT topic.
 *         Channels archive the raw, unprocessed messages before publishing the data to a pipeline.</p>
 *
 */
export interface Channel {
  __type?: "Channel";
  /**
   *
   *          <p>The ARN of the channel.</p>
   *
   */
  arn?: string;

  /**
   *
   *          <p>When the channel was created.</p>
   *
   */
  creationTime?: Date;

  /**
   *
   *          <p>When the channel was last updated.</p>
   *
   */
  lastUpdateTime?: Date;

  /**
   *
   *          <p>The name of the channel.</p>
   *
   */
  name?: string;

  /**
   *
   *          <p>How long, in days, message data is kept for the channel.</p>
   *
   */
  retentionPeriod?: RetentionPeriod;

  /**
   *
   *          <p>The status of the channel.</p>
   *
   */
  status?: ChannelStatus | string;

  /**
   *
   *          <p>Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3"
   *         storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation
   *         of the channel.</p>
   *
   */
  storage?: ChannelStorage;
}

export namespace Channel {
  export function isa(o: any): o is Channel {
    return _smithy.isa(o, "Channel");
  }
}

/**
 *
 *          <p>The activity that determines the source of the messages to be processed.</p>
 *
 */
export interface ChannelActivity {
  __type?: "ChannelActivity";
  /**
   *
   *          <p>The name of the channel from which the messages are processed.</p>
   *
   */
  channelName: string | undefined;

  /**
   *
   *          <p>The name of the 'channel' activity.</p>
   *
   */
  name: string | undefined;

  /**
   *
   *          <p>The next activity in the pipeline.</p>
   *
   */
  next?: string;
}

export namespace ChannelActivity {
  export function isa(o: any): o is ChannelActivity {
    return _smithy.isa(o, "ChannelActivity");
  }
}

/**
 *
 *          <p>Statistics information about the channel.</p>
 *
 */
export interface ChannelStatistics {
  __type?: "ChannelStatistics";
  /**
   *
   *          <p>The estimated size of the channel.</p>
   *
   */
  size?: EstimatedResourceSize;
}

export namespace ChannelStatistics {
  export function isa(o: any): o is ChannelStatistics {
    return _smithy.isa(o, "ChannelStatistics");
  }
}

export enum ChannelStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING"
}

/**
 *
 *          <p>Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3"
 *         storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation
 *         of the channel.</p>
 *
 */
export interface ChannelStorage {
  __type?: "ChannelStorage";
  /**
   *
   *          <p>Use this to store channel data in an S3 bucket that you manage. If customer managed storage is
   *         selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed
   *         S3 storage cannot be changed after creation of the channel.</p>
   *
   */
  customerManagedS3?: CustomerManagedChannelS3Storage;

  /**
   *
   *          <p>Use this to store channel data in an S3 bucket managed by the AWS IoT Analytics service.
   *         The choice of service-managed or customer-managed S3 storage cannot be changed after creation
   *         of the channel.</p>
   *
   */
  serviceManagedS3?: ServiceManagedChannelS3Storage;
}

export namespace ChannelStorage {
  export function isa(o: any): o is ChannelStorage {
    return _smithy.isa(o, "ChannelStorage");
  }
}

/**
 *
 *          <p>Where channel data is stored.</p>
 *
 */
export interface ChannelStorageSummary {
  __type?: "ChannelStorageSummary";
  /**
   *
   *          <p>Used to store channel data in an S3 bucket that you manage.</p>
   *
   */
  customerManagedS3?: CustomerManagedChannelS3StorageSummary;

  /**
   *
   *          <p>Used to store channel data in an S3 bucket managed by the AWS IoT Analytics service.</p>
   *
   */
  serviceManagedS3?: ServiceManagedChannelS3StorageSummary;
}

export namespace ChannelStorageSummary {
  export function isa(o: any): o is ChannelStorageSummary {
    return _smithy.isa(o, "ChannelStorageSummary");
  }
}

/**
 *
 *          <p>A summary of information about a channel.</p>
 *
 */
export interface ChannelSummary {
  __type?: "ChannelSummary";
  /**
   *
   *          <p>The name of the channel.</p>
   *
   */
  channelName?: string;

  /**
   *
   *          <p>Where channel data is stored.</p>
   *
   */
  channelStorage?: ChannelStorageSummary;

  /**
   *
   *          <p>When the channel was created.</p>
   *
   */
  creationTime?: Date;

  /**
   *
   *          <p>The last time the channel was updated.</p>
   *
   */
  lastUpdateTime?: Date;

  /**
   *
   *          <p>The status of the channel.</p>
   *
   */
  status?: ChannelStatus | string;
}

export namespace ChannelSummary {
  export function isa(o: any): o is ChannelSummary {
    return _smithy.isa(o, "ChannelSummary");
  }
}

export enum ComputeType {
  ACU_1 = "ACU_1",
  ACU_2 = "ACU_2"
}

/**
 *
 *          <p>Information needed to run the "containerAction" to produce data set contents.</p>
 *
 */
export interface ContainerDatasetAction {
  __type?: "ContainerDatasetAction";
  /**
   *
   *          <p>The ARN of the role which gives permission to the system to access needed resources in order
   *           to run the "containerAction". This includes, at minimum, permission to retrieve the data set
   *           contents which are the input to the containerized application.</p>
   *
   */
  executionRoleArn: string | undefined;

  /**
   *
   *          <p>The ARN of the Docker container stored in your account. The Docker container contains an
   *           application and needed support libraries and is used to generate data set contents.</p>
   *
   */
  image: string | undefined;

  /**
   *
   *          <p>Configuration of the resource which executes the "containerAction".</p>
   *
   */
  resourceConfiguration: ResourceConfiguration | undefined;

  /**
   *
   *          <p>The values of variables used within the context of the execution of the containerized
   *           application (basically, parameters passed to the application). Each variable must have a
   *           name and a value given by one of "stringValue", "datasetContentVersionValue",
   *           or "outputFileUriValue".</p>
   *
   */
  variables?: Array<Variable>;
}

export namespace ContainerDatasetAction {
  export function isa(o: any): o is ContainerDatasetAction {
    return _smithy.isa(o, "ContainerDatasetAction");
  }
}

export interface CreateChannelRequest {
  __type?: "CreateChannelRequest";
  /**
   *
   *          <p>The name of the channel.</p>
   *
   */
  channelName: string | undefined;

  /**
   *
   *          <p>Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3"
   *         storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation
   *         of the channel.</p>
   *
   */
  channelStorage?: ChannelStorage;

  /**
   *
   *          <p>How long, in days, message data is kept for the channel. When "customerManagedS3" storage is
   *         selected, this parameter is ignored.</p>
   *
   */
  retentionPeriod?: RetentionPeriod;

  /**
   *
   *          <p>Metadata which can be used to manage the channel.</p>
   *
   */
  tags?: Array<Tag>;
}

export namespace CreateChannelRequest {
  export function isa(o: any): o is CreateChannelRequest {
    return _smithy.isa(o, "CreateChannelRequest");
  }
}

export interface CreateChannelResponse extends $MetadataBearer {
  __type?: "CreateChannelResponse";
  /**
   *
   *          <p>The ARN of the channel.</p>
   *
   */
  channelArn?: string;

  /**
   *
   *          <p>The name of the channel.</p>
   *
   */
  channelName?: string;

  /**
   *
   *          <p>How long, in days, message data is kept for the channel.</p>
   *
   */
  retentionPeriod?: RetentionPeriod;
}

export namespace CreateChannelResponse {
  export function isa(o: any): o is CreateChannelResponse {
    return _smithy.isa(o, "CreateChannelResponse");
  }
}

export interface CreateDatasetContentRequest {
  __type?: "CreateDatasetContentRequest";
  /**
   *
   *          <p>The name of the data set.</p>
   *
   */
  datasetName: string | undefined;
}

export namespace CreateDatasetContentRequest {
  export function isa(o: any): o is CreateDatasetContentRequest {
    return _smithy.isa(o, "CreateDatasetContentRequest");
  }
}

export interface CreateDatasetContentResponse extends $MetadataBearer {
  __type?: "CreateDatasetContentResponse";
  /**
   *
   *          <p>The version ID of the data set contents which are being created.</p>
   *
   */
  versionId?: string;
}

export namespace CreateDatasetContentResponse {
  export function isa(o: any): o is CreateDatasetContentResponse {
    return _smithy.isa(o, "CreateDatasetContentResponse");
  }
}

export interface CreateDatasetRequest {
  __type?: "CreateDatasetRequest";
  /**
   *
   *          <p>A list of actions that create the data set contents.</p>
   *
   */
  actions: Array<DatasetAction> | undefined;

  /**
   *
   *          <p>When data set contents are created they are delivered to destinations specified here.</p>
   *
   */
  contentDeliveryRules?: Array<DatasetContentDeliveryRule>;

  /**
   *
   *          <p>The name of the data set.</p>
   *
   */
  datasetName: string | undefined;

  /**
   *
   *          <p>[Optional] How long, in days, versions of data set contents are kept for the data set. If
   *           not specified or set to null, versions of data set contents are retained for at most 90 days.
   *           The number of versions of data set contents retained is determined by the
   *           <code>versioningConfiguration</code> parameter.  (For more information, see
   *           https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions)</p>
   *
   */
  retentionPeriod?: RetentionPeriod;

  /**
   *
   *          <p>Metadata which can be used to manage the data set.</p>
   *
   */
  tags?: Array<Tag>;

  /**
   *
   *          <p>A list of triggers. A trigger causes data set contents to be populated at a specified
   *           time interval or when another data set's contents are created. The list of triggers can
   *           be empty or contain up to five <b>DataSetTrigger</b> objects.</p>
   *
   */
  triggers?: Array<DatasetTrigger>;

  /**
   *
   *          <p>[Optional] How many versions of data set contents are kept. If not specified or set to null, only the
   *         latest version plus the latest succeeded version (if they are different) are kept for
   *         the time period specified by the "retentionPeriod" parameter. (For more information, see
   *         https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions)</p>
   *
   */
  versioningConfiguration?: VersioningConfiguration;
}

export namespace CreateDatasetRequest {
  export function isa(o: any): o is CreateDatasetRequest {
    return _smithy.isa(o, "CreateDatasetRequest");
  }
}

export interface CreateDatasetResponse extends $MetadataBearer {
  __type?: "CreateDatasetResponse";
  /**
   *
   *          <p>The ARN of the data set.</p>
   *
   */
  datasetArn?: string;

  /**
   *
   *          <p>The name of the data set.</p>
   *
   */
  datasetName?: string;

  /**
   *
   *          <p>How long, in days, data set contents are kept for the data set.</p>
   *
   */
  retentionPeriod?: RetentionPeriod;
}

export namespace CreateDatasetResponse {
  export function isa(o: any): o is CreateDatasetResponse {
    return _smithy.isa(o, "CreateDatasetResponse");
  }
}

export interface CreateDatastoreRequest {
  __type?: "CreateDatastoreRequest";
  /**
   *
   *          <p>The name of the data store.</p>
   *
   */
  datastoreName: string | undefined;

  /**
   *
   *          <p>Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3"
   *         storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data
   *         store is created.</p>
   *
   */
  datastoreStorage?: DatastoreStorage;

  /**
   *
   *          <p>How long, in days, message data is kept for the data store. When "customerManagedS3" storage
   *         is selected, this parameter is ignored.</p>
   *
   */
  retentionPeriod?: RetentionPeriod;

  /**
   *
   *          <p>Metadata which can be used to manage the data store.</p>
   *
   */
  tags?: Array<Tag>;
}

export namespace CreateDatastoreRequest {
  export function isa(o: any): o is CreateDatastoreRequest {
    return _smithy.isa(o, "CreateDatastoreRequest");
  }
}

export interface CreateDatastoreResponse extends $MetadataBearer {
  __type?: "CreateDatastoreResponse";
  /**
   *
   *          <p>The ARN of the data store.</p>
   *
   */
  datastoreArn?: string;

  /**
   *
   *          <p>The name of the data store.</p>
   *
   */
  datastoreName?: string;

  /**
   *
   *          <p>How long, in days, message data is kept for the data store.</p>
   *
   */
  retentionPeriod?: RetentionPeriod;
}

export namespace CreateDatastoreResponse {
  export function isa(o: any): o is CreateDatastoreResponse {
    return _smithy.isa(o, "CreateDatastoreResponse");
  }
}

export interface CreatePipelineRequest {
  __type?: "CreatePipelineRequest";
  /**
   *
   *          <p>A list of "PipelineActivity" objects. Activities perform transformations on your messages,
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
   *
   */
  pipelineActivities: Array<PipelineActivity> | undefined;

  /**
   *
   *          <p>The name of the pipeline.</p>
   *
   */
  pipelineName: string | undefined;

  /**
   *
   *          <p>Metadata which can be used to manage the pipeline.</p>
   *
   */
  tags?: Array<Tag>;
}

export namespace CreatePipelineRequest {
  export function isa(o: any): o is CreatePipelineRequest {
    return _smithy.isa(o, "CreatePipelineRequest");
  }
}

export interface CreatePipelineResponse extends $MetadataBearer {
  __type?: "CreatePipelineResponse";
  /**
   *
   *          <p>The ARN of the pipeline.</p>
   *
   */
  pipelineArn?: string;

  /**
   *
   *          <p>The name of the pipeline.</p>
   *
   */
  pipelineName?: string;
}

export namespace CreatePipelineResponse {
  export function isa(o: any): o is CreatePipelineResponse {
    return _smithy.isa(o, "CreatePipelineResponse");
  }
}

/**
 *
 *          <p>Use this to store channel data in an S3 bucket that you manage. If customer managed storage is
 *         selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed
 *         S3 storage cannot be changed after creation of the channel.</p>
 *
 */
export interface CustomerManagedChannelS3Storage {
  __type?: "CustomerManagedChannelS3Storage";
  /**
   *
   *          <p>The name of the Amazon S3 bucket in which channel data is stored.</p>
   *
   */
  bucket: string | undefined;

  /**
   *
   *          <p>[Optional] The prefix used to create the keys of the channel data objects. Each object in
   *         an Amazon S3 bucket has a key that is its unique identifier within the bucket (each object in
   *         a bucket has exactly one key). The prefix must end with a '/'.</p>
   *
   */
  keyPrefix?: string;

  /**
   *
   *          <p>The ARN of the role which grants AWS IoT Analytics permission to interact with your Amazon S3 resources.</p>
   *
   */
  roleArn: string | undefined;
}

export namespace CustomerManagedChannelS3Storage {
  export function isa(o: any): o is CustomerManagedChannelS3Storage {
    return _smithy.isa(o, "CustomerManagedChannelS3Storage");
  }
}

/**
 *
 *          <p>Used to store channel data in an S3 bucket that you manage.</p>
 *
 */
export interface CustomerManagedChannelS3StorageSummary {
  __type?: "CustomerManagedChannelS3StorageSummary";
  /**
   *
   *          <p>The name of the Amazon S3 bucket in which channel data is stored.</p>
   *
   */
  bucket?: string;

  /**
   *
   *          <p>[Optional] The prefix used to create the keys of the channel data objects. Each object in
   *         an Amazon S3 bucket has a key that is its unique identifier within the bucket (each object in
   *         a bucket has exactly one key). The prefix must end with a '/'.</p>
   *
   */
  keyPrefix?: string;

  /**
   *
   *          <p>The ARN of the role which grants AWS IoT Analytics permission to interact with your Amazon
   *         S3 resources.</p>
   *
   */
  roleArn?: string;
}

export namespace CustomerManagedChannelS3StorageSummary {
  export function isa(o: any): o is CustomerManagedChannelS3StorageSummary {
    return _smithy.isa(o, "CustomerManagedChannelS3StorageSummary");
  }
}

/**
 *
 *          <p>Use this to store data store data in an S3 bucket that you manage. When customer managed storage is
 *         selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed
 *         S3 storage cannot be changed after creation of the data store.</p>
 *
 */
export interface CustomerManagedDatastoreS3Storage {
  __type?: "CustomerManagedDatastoreS3Storage";
  /**
   *
   *          <p>The name of the Amazon S3 bucket in which data store data is stored.</p>
   *
   */
  bucket: string | undefined;

  /**
   *
   *          <p>[Optional] The prefix used to create the keys of the data store data objects. Each object in
   *         an Amazon S3 bucket has a key that is its unique identifier within the bucket (each object in a
   *         bucket has exactly one key). The prefix must end with a '/'.</p>
   *
   */
  keyPrefix?: string;

  /**
   *
   *          <p>The ARN of the role which grants AWS IoT Analytics permission to interact with your Amazon S3 resources.</p>
   *
   */
  roleArn: string | undefined;
}

export namespace CustomerManagedDatastoreS3Storage {
  export function isa(o: any): o is CustomerManagedDatastoreS3Storage {
    return _smithy.isa(o, "CustomerManagedDatastoreS3Storage");
  }
}

/**
 *
 *          <p>Used to store data store data in an S3 bucket that you manage.</p>
 *
 */
export interface CustomerManagedDatastoreS3StorageSummary {
  __type?: "CustomerManagedDatastoreS3StorageSummary";
  /**
   *
   *          <p>The name of the Amazon S3 bucket in which data store data is stored.</p>
   *
   */
  bucket?: string;

  /**
   *
   *          <p>[Optional] The prefix used to create the keys of the data store data objects. Each object in
   *         an Amazon S3 bucket has a key that is its unique identifier within the bucket (each object in a
   *         bucket has exactly one key). The prefix must end with a '/'.</p>
   *
   */
  keyPrefix?: string;

  /**
   *
   *          <p>The ARN of the role which grants AWS IoT Analytics permission to interact with your Amazon S3 resources.</p>
   *
   */
  roleArn?: string;
}

export namespace CustomerManagedDatastoreS3StorageSummary {
  export function isa(o: any): o is CustomerManagedDatastoreS3StorageSummary {
    return _smithy.isa(o, "CustomerManagedDatastoreS3StorageSummary");
  }
}

/**
 *
 *          <p>Information about a data set.</p>
 *
 */
export interface Dataset {
  __type?: "Dataset";
  /**
   *
   *          <p>The "DatasetAction" objects that automatically create the data set contents.</p>
   *
   */
  actions?: Array<DatasetAction>;

  /**
   *
   *          <p>The ARN of the data set.</p>
   *
   */
  arn?: string;

  /**
   *
   *          <p>When data set contents are created they are delivered to destinations specified here.</p>
   *
   */
  contentDeliveryRules?: Array<DatasetContentDeliveryRule>;

  /**
   *
   *          <p>When the data set was created.</p>
   *
   */
  creationTime?: Date;

  /**
   *
   *          <p>The last time the data set was updated.</p>
   *
   */
  lastUpdateTime?: Date;

  /**
   *
   *          <p>The name of the data set.</p>
   *
   */
  name?: string;

  /**
   *
   *          <p>[Optional] How long, in days, message data is kept for the data set.</p>
   *
   */
  retentionPeriod?: RetentionPeriod;

  /**
   *
   *          <p>The status of the data set.</p>
   *
   */
  status?: DatasetStatus | string;

  /**
   *
   *          <p>The "DatasetTrigger" objects
   *      that specify when the data set is automatically updated.</p>
   *
   */
  triggers?: Array<DatasetTrigger>;

  /**
   *
   *          <p>[Optional] How many versions of data set contents are kept. If not specified or set to null, only the
   *         latest version plus the latest succeeded version (if they are different) are kept for
   *         the time period specified by the "retentionPeriod" parameter. (For more information, see
   *         https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions)</p>
   *
   */
  versioningConfiguration?: VersioningConfiguration;
}

export namespace Dataset {
  export function isa(o: any): o is Dataset {
    return _smithy.isa(o, "Dataset");
  }
}

/**
 *
 *          <p>A "DatasetAction" object that specifies how data set contents are automatically created.</p>
 *
 */
export interface DatasetAction {
  __type?: "DatasetAction";
  /**
   *
   *          <p>The name of the data set action by which data set contents are automatically created.</p>
   *
   */
  actionName?: string;

  /**
   *
   *          <p>Information which allows the system to run a containerized application in order to create
   *           the data set contents. The application must be in a Docker container along with any needed
   *           support libraries.</p>
   *
   */
  containerAction?: ContainerDatasetAction;

  /**
   *
   *          <p>An "SqlQueryDatasetAction" object that uses an SQL query to automatically create data set contents.</p>
   *
   */
  queryAction?: SqlQueryDatasetAction;
}

export namespace DatasetAction {
  export function isa(o: any): o is DatasetAction {
    return _smithy.isa(o, "DatasetAction");
  }
}

/**
 *
 *          <p>Information about the action which automatically creates the data set's contents.</p>
 *
 */
export interface DatasetActionSummary {
  __type?: "DatasetActionSummary";
  /**
   *
   *          <p>The name of the action which automatically creates the data set's contents.</p>
   *
   */
  actionName?: string;

  /**
   *
   *          <p>The type of action by which the data set's contents are automatically created.</p>
   *
   */
  actionType?: DatasetActionType | string;
}

export namespace DatasetActionSummary {
  export function isa(o: any): o is DatasetActionSummary {
    return _smithy.isa(o, "DatasetActionSummary");
  }
}

export enum DatasetActionType {
  CONTAINER = "CONTAINER",
  QUERY = "QUERY"
}

/**
 *
 *          <p>The destination to which data set contents are delivered.</p>
 *
 */
export interface DatasetContentDeliveryDestination {
  __type?: "DatasetContentDeliveryDestination";
  /**
   *
   *          <p>Configuration information for delivery of data set contents to AWS IoT Events.</p>
   *
   */
  iotEventsDestinationConfiguration?: IotEventsDestinationConfiguration;

  /**
   *
   *          <p>Configuration information for delivery of data set contents to Amazon S3.</p>
   *
   */
  s3DestinationConfiguration?: S3DestinationConfiguration;
}

export namespace DatasetContentDeliveryDestination {
  export function isa(o: any): o is DatasetContentDeliveryDestination {
    return _smithy.isa(o, "DatasetContentDeliveryDestination");
  }
}

/**
 *
 *          <p>When data set contents are created they are delivered to destination specified here.</p>
 *
 */
export interface DatasetContentDeliveryRule {
  __type?: "DatasetContentDeliveryRule";
  /**
   *
   *          <p>The destination to which data set contents are delivered.</p>
   *
   */
  destination: DatasetContentDeliveryDestination | undefined;

  /**
   *
   *          <p>The name of the data set content delivery rules entry.</p>
   *
   */
  entryName?: string;
}

export namespace DatasetContentDeliveryRule {
  export function isa(o: any): o is DatasetContentDeliveryRule {
    return _smithy.isa(o, "DatasetContentDeliveryRule");
  }
}

export enum DatasetContentState {
  CREATING = "CREATING",
  FAILED = "FAILED",
  SUCCEEDED = "SUCCEEDED"
}

/**
 *
 *          <p>The state of the data set contents and the reason they are in this state.</p>
 *
 */
export interface DatasetContentStatus {
  __type?: "DatasetContentStatus";
  /**
   *
   *          <p>The reason the data set contents are in this state.</p>
   *
   */
  reason?: string;

  /**
   *
   *          <p>The state of the data set contents. Can be one of "READY", "CREATING", "SUCCEEDED" or
   *          "FAILED".</p>
   *
   */
  state?: DatasetContentState | string;
}

export namespace DatasetContentStatus {
  export function isa(o: any): o is DatasetContentStatus {
    return _smithy.isa(o, "DatasetContentStatus");
  }
}

/**
 *
 *          <p>Summary information about data set contents.</p>
 *
 */
export interface DatasetContentSummary {
  __type?: "DatasetContentSummary";
  /**
   *
   *          <p>The time the dataset content status was updated to SUCCEEDED or FAILED.</p>
   *
   */
  completionTime?: Date;

  /**
   *
   *          <p>The actual time the creation of the data set contents was started.</p>
   *
   */
  creationTime?: Date;

  /**
   *
   *          <p>The time the creation of the data set contents was scheduled to start.</p>
   *
   */
  scheduleTime?: Date;

  /**
   *
   *          <p>The status of the data set contents.</p>
   *
   */
  status?: DatasetContentStatus;

  /**
   *
   *          <p>The version of the data set contents.</p>
   *
   */
  version?: string;
}

export namespace DatasetContentSummary {
  export function isa(o: any): o is DatasetContentSummary {
    return _smithy.isa(o, "DatasetContentSummary");
  }
}

/**
 *
 *          <p>The data set whose latest contents are used as input to the notebook or
 *           application.</p>
 *
 */
export interface DatasetContentVersionValue {
  __type?: "DatasetContentVersionValue";
  /**
   *
   *          <p>The name of the data set whose latest contents are used as input to the notebook or
   *           application.</p>
   *
   */
  datasetName: string | undefined;
}

export namespace DatasetContentVersionValue {
  export function isa(o: any): o is DatasetContentVersionValue {
    return _smithy.isa(o, "DatasetContentVersionValue");
  }
}

/**
 *
 *          <p>The reference to a data set entry.</p>
 *
 */
export interface DatasetEntry {
  __type?: "DatasetEntry";
  /**
   *
   *          <p>The pre-signed URI of the data set item.</p>
   *
   */
  dataURI?: string;

  /**
   *
   *          <p>The name of the data set item.</p>
   *
   */
  entryName?: string;
}

export namespace DatasetEntry {
  export function isa(o: any): o is DatasetEntry {
    return _smithy.isa(o, "DatasetEntry");
  }
}

export enum DatasetStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING"
}

/**
 *
 *          <p>A summary of information about a data set.</p>
 *
 */
export interface DatasetSummary {
  __type?: "DatasetSummary";
  /**
   *
   *          <p>A list of "DataActionSummary" objects.</p>
   *
   */
  actions?: Array<DatasetActionSummary>;

  /**
   *
   *          <p>The time the data set was created.</p>
   *
   */
  creationTime?: Date;

  /**
   *
   *          <p>The name of the data set.</p>
   *
   */
  datasetName?: string;

  /**
   *
   *          <p>The last time the data set was updated.</p>
   *
   */
  lastUpdateTime?: Date;

  /**
   *
   *          <p>The status of the data set.</p>
   *
   */
  status?: DatasetStatus | string;

  /**
   *
   *          <p>A list of triggers. A trigger causes data set content to be populated at a specified time
   *        interval or when another data set is populated. The list of triggers can be empty or contain up
   *        to five DataSetTrigger objects</p>
   *
   */
  triggers?: Array<DatasetTrigger>;
}

export namespace DatasetSummary {
  export function isa(o: any): o is DatasetSummary {
    return _smithy.isa(o, "DatasetSummary");
  }
}

/**
 *
 *          <p>The "DatasetTrigger"
 *      that specifies when the data set is automatically updated.</p>
 *
 */
export interface DatasetTrigger {
  __type?: "DatasetTrigger";
  /**
   *
   *          <p>The data set whose content creation triggers the creation of this data set's contents.</p>
   *
   */
  dataset?: TriggeringDataset;

  /**
   *
   *          <p>The "Schedule" when the trigger is initiated.</p>
   *
   */
  schedule?: Schedule;
}

export namespace DatasetTrigger {
  export function isa(o: any): o is DatasetTrigger {
    return _smithy.isa(o, "DatasetTrigger");
  }
}

/**
 *
 *          <p>Information about a data store.</p>
 *
 */
export interface Datastore {
  __type?: "Datastore";
  /**
   *
   *          <p>The ARN of the data store.</p>
   *
   */
  arn?: string;

  /**
   *
   *          <p>When the data store was created.</p>
   *
   */
  creationTime?: Date;

  /**
   *
   *          <p>The last time the data store was updated.</p>
   *
   */
  lastUpdateTime?: Date;

  /**
   *
   *          <p>The name of the data store.</p>
   *
   */
  name?: string;

  /**
   *
   *          <p>How long, in days, message data is kept for the data store. When "customerManagedS3" storage
   *         is selected, this parameter is ignored.</p>
   *
   */
  retentionPeriod?: RetentionPeriod;

  /**
   *
   *          <p>The status of a data store:</p>
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
   *
   */
  status?: DatastoreStatus | string;

  /**
   *
   *          <p>Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3"
   *         storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data
   *         store is created.</p>
   *
   */
  storage?: DatastoreStorage;
}

export namespace Datastore {
  export function isa(o: any): o is Datastore {
    return _smithy.isa(o, "Datastore");
  }
}

/**
 *
 *          <p>The 'datastore' activity that specifies where to store the processed data.</p>
 *
 */
export interface DatastoreActivity {
  __type?: "DatastoreActivity";
  /**
   *
   *          <p>The name of the data store where processed messages are stored.</p>
   *
   */
  datastoreName: string | undefined;

  /**
   *
   *          <p>The name of the 'datastore' activity.</p>
   *
   */
  name: string | undefined;
}

export namespace DatastoreActivity {
  export function isa(o: any): o is DatastoreActivity {
    return _smithy.isa(o, "DatastoreActivity");
  }
}

/**
 *
 *          <p>Statistical information about the data store.</p>
 *
 */
export interface DatastoreStatistics {
  __type?: "DatastoreStatistics";
  /**
   *
   *          <p>The estimated size of the data store.</p>
   *
   */
  size?: EstimatedResourceSize;
}

export namespace DatastoreStatistics {
  export function isa(o: any): o is DatastoreStatistics {
    return _smithy.isa(o, "DatastoreStatistics");
  }
}

export enum DatastoreStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING"
}

/**
 *
 *          <p>Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3"
 *         storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data
 *         store is created.</p>
 *
 */
export interface DatastoreStorage {
  __type?: "DatastoreStorage";
  /**
   *
   *          <p>Use this to store data store data in an S3 bucket that you manage. When customer managed storage is
   *         selected, the "retentionPeriod" parameter is ignored. The choice of service-managed or customer-managed
   *         S3 storage cannot be changed after creation of the data store.</p>
   *
   */
  customerManagedS3?: CustomerManagedDatastoreS3Storage;

  /**
   *
   *          <p>Use this to store data store data in an S3 bucket managed by the AWS IoT Analytics service.
   *         The choice of service-managed or customer-managed S3 storage cannot be changed after creation
   *         of the data store.</p>
   *
   */
  serviceManagedS3?: ServiceManagedDatastoreS3Storage;
}

export namespace DatastoreStorage {
  export function isa(o: any): o is DatastoreStorage {
    return _smithy.isa(o, "DatastoreStorage");
  }
}

/**
 *
 *          <p>Where data store data is stored.</p>
 *
 */
export interface DatastoreStorageSummary {
  __type?: "DatastoreStorageSummary";
  /**
   *
   *          <p>Used to store data store data in an S3 bucket that you manage.</p>
   *
   */
  customerManagedS3?: CustomerManagedDatastoreS3StorageSummary;

  /**
   *
   *          <p>Used to store data store data in an S3 bucket managed by the AWS IoT Analytics service.</p>
   *
   */
  serviceManagedS3?: ServiceManagedDatastoreS3StorageSummary;
}

export namespace DatastoreStorageSummary {
  export function isa(o: any): o is DatastoreStorageSummary {
    return _smithy.isa(o, "DatastoreStorageSummary");
  }
}

/**
 *
 *          <p>A summary of information about a data store.</p>
 *
 */
export interface DatastoreSummary {
  __type?: "DatastoreSummary";
  /**
   *
   *          <p>When the data store was created.</p>
   *
   */
  creationTime?: Date;

  /**
   *
   *          <p>The name of the data store.</p>
   *
   */
  datastoreName?: string;

  /**
   *
   *          <p>Where data store data is stored.</p>
   *
   */
  datastoreStorage?: DatastoreStorageSummary;

  /**
   *
   *          <p>The last time the data store was updated.</p>
   *
   */
  lastUpdateTime?: Date;

  /**
   *
   *          <p>The status of the data store.</p>
   *
   */
  status?: DatastoreStatus | string;
}

export namespace DatastoreSummary {
  export function isa(o: any): o is DatastoreSummary {
    return _smithy.isa(o, "DatastoreSummary");
  }
}

export interface DeleteChannelRequest {
  __type?: "DeleteChannelRequest";
  /**
   *
   *          <p>The name of the channel to delete.</p>
   *
   */
  channelName: string | undefined;
}

export namespace DeleteChannelRequest {
  export function isa(o: any): o is DeleteChannelRequest {
    return _smithy.isa(o, "DeleteChannelRequest");
  }
}

export interface DeleteDatasetContentRequest {
  __type?: "DeleteDatasetContentRequest";
  /**
   *
   *          <p>The name of the data set whose content is deleted.</p>
   *
   */
  datasetName: string | undefined;

  /**
   *
   *          <p>The version of the data set whose content is deleted. You can also use the strings
   *           "$LATEST" or "$LATEST_SUCCEEDED" to delete the latest or latest successfully
   *           completed data set. If not specified, "$LATEST_SUCCEEDED" is the default.</p>
   *
   */
  versionId?: string;
}

export namespace DeleteDatasetContentRequest {
  export function isa(o: any): o is DeleteDatasetContentRequest {
    return _smithy.isa(o, "DeleteDatasetContentRequest");
  }
}

export interface DeleteDatasetRequest {
  __type?: "DeleteDatasetRequest";
  /**
   *
   *          <p>The name of the data set to delete.</p>
   *
   */
  datasetName: string | undefined;
}

export namespace DeleteDatasetRequest {
  export function isa(o: any): o is DeleteDatasetRequest {
    return _smithy.isa(o, "DeleteDatasetRequest");
  }
}

export interface DeleteDatastoreRequest {
  __type?: "DeleteDatastoreRequest";
  /**
   *
   *          <p>The name of the data store to delete.</p>
   *
   */
  datastoreName: string | undefined;
}

export namespace DeleteDatastoreRequest {
  export function isa(o: any): o is DeleteDatastoreRequest {
    return _smithy.isa(o, "DeleteDatastoreRequest");
  }
}

export interface DeletePipelineRequest {
  __type?: "DeletePipelineRequest";
  /**
   *
   *          <p>The name of the pipeline to delete.</p>
   *
   */
  pipelineName: string | undefined;
}

export namespace DeletePipelineRequest {
  export function isa(o: any): o is DeletePipelineRequest {
    return _smithy.isa(o, "DeletePipelineRequest");
  }
}

/**
 *
 *          <p>Used to limit data to that which has arrived since the last execution of the action.</p>
 *
 */
export interface DeltaTime {
  __type?: "DeltaTime";
  /**
   *
   *          <p>The number of seconds of estimated "in flight" lag time of message data.  When you create
   *        data set contents using message data from a specified time frame, some message data may still be
   *        "in flight" when processing begins, and so will not arrive in time to be processed. Use this
   *        field to make allowances for the "in flight" time of your message data, so that data not processed
   *        from a previous time frame will be included with the next time frame. Without this, missed message
   *        data would be excluded from processing during the next time frame as well, because its timestamp
   *        places it within the previous time frame.</p>
   *
   */
  offsetSeconds: number | undefined;

  /**
   *
   *          <p>An expression by which the time of the message data may be determined. This may be the name
   *           of a timestamp field, or a SQL expression which is used to derive the time the message
   *           data was generated.</p>
   *
   */
  timeExpression: string | undefined;
}

export namespace DeltaTime {
  export function isa(o: any): o is DeltaTime {
    return _smithy.isa(o, "DeltaTime");
  }
}

export interface DescribeChannelRequest {
  __type?: "DescribeChannelRequest";
  /**
   *
   *          <p>The name of the channel whose information is retrieved.</p>
   *
   */
  channelName: string | undefined;

  /**
   *
   *          <p>If true, additional statistical information about the channel is included in the response.
   *          This feature cannot be used with a channel whose S3 storage is customer-managed.</p>
   *
   */
  includeStatistics?: boolean;
}

export namespace DescribeChannelRequest {
  export function isa(o: any): o is DescribeChannelRequest {
    return _smithy.isa(o, "DescribeChannelRequest");
  }
}

export interface DescribeChannelResponse extends $MetadataBearer {
  __type?: "DescribeChannelResponse";
  /**
   *
   *          <p>An object that contains information about the channel.</p>
   *
   */
  channel?: Channel;

  /**
   *
   *          <p>Statistics about the channel. Included if the 'includeStatistics' parameter is set
   *          to true in the request.</p>
   *
   */
  statistics?: ChannelStatistics;
}

export namespace DescribeChannelResponse {
  export function isa(o: any): o is DescribeChannelResponse {
    return _smithy.isa(o, "DescribeChannelResponse");
  }
}

export interface DescribeDatasetRequest {
  __type?: "DescribeDatasetRequest";
  /**
   *
   *          <p>The name of the data set whose information is retrieved.</p>
   *
   */
  datasetName: string | undefined;
}

export namespace DescribeDatasetRequest {
  export function isa(o: any): o is DescribeDatasetRequest {
    return _smithy.isa(o, "DescribeDatasetRequest");
  }
}

export interface DescribeDatasetResponse extends $MetadataBearer {
  __type?: "DescribeDatasetResponse";
  /**
   *
   *          <p>An object that contains information about the data set.</p>
   *
   */
  dataset?: Dataset;
}

export namespace DescribeDatasetResponse {
  export function isa(o: any): o is DescribeDatasetResponse {
    return _smithy.isa(o, "DescribeDatasetResponse");
  }
}

export interface DescribeDatastoreRequest {
  __type?: "DescribeDatastoreRequest";
  /**
   *
   *          <p>The name of the data store</p>
   *
   */
  datastoreName: string | undefined;

  /**
   *
   *          <p>If true, additional statistical information about the data store is included in the response.
   *          This feature cannot be used with a data store whose S3 storage is customer-managed.</p>
   *
   */
  includeStatistics?: boolean;
}

export namespace DescribeDatastoreRequest {
  export function isa(o: any): o is DescribeDatastoreRequest {
    return _smithy.isa(o, "DescribeDatastoreRequest");
  }
}

export interface DescribeDatastoreResponse extends $MetadataBearer {
  __type?: "DescribeDatastoreResponse";
  /**
   *
   *          <p>Information about the data store.</p>
   *
   */
  datastore?: Datastore;

  /**
   *
   *          <p>Additional statistical information about the data store. Included if the 'includeStatistics'
   *            parameter is set to true in the request.</p>
   *
   */
  statistics?: DatastoreStatistics;
}

export namespace DescribeDatastoreResponse {
  export function isa(o: any): o is DescribeDatastoreResponse {
    return _smithy.isa(o, "DescribeDatastoreResponse");
  }
}

export interface DescribeLoggingOptionsRequest {
  __type?: "DescribeLoggingOptionsRequest";
}

export namespace DescribeLoggingOptionsRequest {
  export function isa(o: any): o is DescribeLoggingOptionsRequest {
    return _smithy.isa(o, "DescribeLoggingOptionsRequest");
  }
}

export interface DescribeLoggingOptionsResponse extends $MetadataBearer {
  __type?: "DescribeLoggingOptionsResponse";
  /**
   *
   *          <p>The current settings of the AWS IoT Analytics logging options.</p>
   *
   */
  loggingOptions?: LoggingOptions;
}

export namespace DescribeLoggingOptionsResponse {
  export function isa(o: any): o is DescribeLoggingOptionsResponse {
    return _smithy.isa(o, "DescribeLoggingOptionsResponse");
  }
}

export interface DescribePipelineRequest {
  __type?: "DescribePipelineRequest";
  /**
   *
   *          <p>The name of the pipeline whose information is retrieved.</p>
   *
   */
  pipelineName: string | undefined;
}

export namespace DescribePipelineRequest {
  export function isa(o: any): o is DescribePipelineRequest {
    return _smithy.isa(o, "DescribePipelineRequest");
  }
}

export interface DescribePipelineResponse extends $MetadataBearer {
  __type?: "DescribePipelineResponse";
  /**
   *
   *          <p>A "Pipeline" object
   *         that contains information about the pipeline.</p>
   *
   */
  pipeline?: Pipeline;
}

export namespace DescribePipelineResponse {
  export function isa(o: any): o is DescribePipelineResponse {
    return _smithy.isa(o, "DescribePipelineResponse");
  }
}

/**
 *
 *          <p>An activity that adds data from the AWS IoT device registry to your message.</p>
 *
 */
export interface DeviceRegistryEnrichActivity {
  __type?: "DeviceRegistryEnrichActivity";
  /**
   *
   *          <p>The name of the attribute that is added to the message.</p>
   *
   */
  attribute: string | undefined;

  /**
   *
   *          <p>The name of the 'deviceRegistryEnrich' activity.</p>
   *
   */
  name: string | undefined;

  /**
   *
   *          <p>The next activity in the pipeline.</p>
   *
   */
  next?: string;

  /**
   *
   *          <p>The ARN of the role that allows access to the device's registry information.</p>
   *
   */
  roleArn: string | undefined;

  /**
   *
   *          <p>The name of the IoT device whose registry information is added to the message.</p>
   *
   */
  thingName: string | undefined;
}

export namespace DeviceRegistryEnrichActivity {
  export function isa(o: any): o is DeviceRegistryEnrichActivity {
    return _smithy.isa(o, "DeviceRegistryEnrichActivity");
  }
}

/**
 *
 *          <p>An activity that adds information from the AWS IoT Device Shadows service to a message.</p>
 *
 */
export interface DeviceShadowEnrichActivity {
  __type?: "DeviceShadowEnrichActivity";
  /**
   *
   *          <p>The name of the attribute that is added to the message.</p>
   *
   */
  attribute: string | undefined;

  /**
   *
   *          <p>The name of the 'deviceShadowEnrich' activity.</p>
   *
   */
  name: string | undefined;

  /**
   *
   *          <p>The next activity in the pipeline.</p>
   *
   */
  next?: string;

  /**
   *
   *          <p>The ARN of the role that allows access to the device's shadow.</p>
   *
   */
  roleArn: string | undefined;

  /**
   *
   *          <p>The name of the IoT device whose shadow information is added to
   *           the message.</p>
   *
   */
  thingName: string | undefined;
}

export namespace DeviceShadowEnrichActivity {
  export function isa(o: any): o is DeviceShadowEnrichActivity {
    return _smithy.isa(o, "DeviceShadowEnrichActivity");
  }
}

/**
 *
 *          <p>The estimated size of the resource.</p>
 *
 */
export interface EstimatedResourceSize {
  __type?: "EstimatedResourceSize";
  /**
   *
   *          <p>The time when the estimate of the size of the resource was made.</p>
   *
   */
  estimatedOn?: Date;

  /**
   *
   *          <p>The estimated size of the resource in bytes.</p>
   *
   */
  estimatedSizeInBytes?: number;
}

export namespace EstimatedResourceSize {
  export function isa(o: any): o is EstimatedResourceSize {
    return _smithy.isa(o, "EstimatedResourceSize");
  }
}

/**
 *
 *          <p>An activity that filters a message based on its attributes.</p>
 *
 */
export interface FilterActivity {
  __type?: "FilterActivity";
  /**
   *
   *          <p>An expression that looks like a SQL WHERE clause that must return a Boolean value.</p>
   *
   */
  filter: string | undefined;

  /**
   *
   *          <p>The name of the 'filter' activity.</p>
   *
   */
  name: string | undefined;

  /**
   *
   *          <p>The next activity in the pipeline.</p>
   *
   */
  next?: string;
}

export namespace FilterActivity {
  export function isa(o: any): o is FilterActivity {
    return _smithy.isa(o, "FilterActivity");
  }
}

export interface GetDatasetContentRequest {
  __type?: "GetDatasetContentRequest";
  /**
   *
   *          <p>The name of the data set whose contents are retrieved.</p>
   *
   */
  datasetName: string | undefined;

  /**
   *
   *          <p>The version of the data set whose contents are retrieved. You can also use
   *          the strings "$LATEST" or "$LATEST_SUCCEEDED" to retrieve the contents of the
   *          latest or latest successfully completed data set. If not specified, "$LATEST_SUCCEEDED"
   *          is the default.</p>
   *
   */
  versionId?: string;
}

export namespace GetDatasetContentRequest {
  export function isa(o: any): o is GetDatasetContentRequest {
    return _smithy.isa(o, "GetDatasetContentRequest");
  }
}

export interface GetDatasetContentResponse extends $MetadataBearer {
  __type?: "GetDatasetContentResponse";
  /**
   *
   *          <p>A list of "DatasetEntry" objects.</p>
   *
   */
  entries?: Array<DatasetEntry>;

  /**
   *
   *          <p>The status of the data set content.</p>
   *
   */
  status?: DatasetContentStatus;

  /**
   *
   *          <p>The time when the request was made.</p>
   *
   */
  timestamp?: Date;
}

export namespace GetDatasetContentResponse {
  export function isa(o: any): o is GetDatasetContentResponse {
    return _smithy.isa(o, "GetDatasetContentResponse");
  }
}

/**
 *
 *          <p>Configuration information for coordination with the AWS Glue ETL (extract, transform and
 *         load) service.</p>
 *
 */
export interface GlueConfiguration {
  __type?: "GlueConfiguration";
  /**
   *
   *          <p>The name of the database in your AWS Glue Data Catalog in which the table is located. (An AWS
   *         Glue Data Catalog database contains Glue Data tables.)</p>
   *
   */
  databaseName: string | undefined;

  /**
   *
   *          <p>The name of the table in your AWS Glue Data Catalog which is used to perform the ETL (extract,
   *         transform and load) operations. (An AWS Glue Data Catalog table contains partitioned data and descriptions
   *         of data sources and targets.)</p>
   *
   */
  tableName: string | undefined;
}

export namespace GlueConfiguration {
  export function isa(o: any): o is GlueConfiguration {
    return _smithy.isa(o, "GlueConfiguration");
  }
}

/**
 *
 *          <p>Configuration information for delivery of data set contents to AWS IoT Events.</p>
 *
 */
export interface IotEventsDestinationConfiguration {
  __type?: "IotEventsDestinationConfiguration";
  /**
   *
   *          <p>The name of the AWS IoT Events input to which data set contents are delivered.</p>
   *
   */
  inputName: string | undefined;

  /**
   *
   *          <p>The ARN of the role which grants AWS IoT Analytics permission to deliver data set contents
   *         to an AWS IoT Events input.</p>
   *
   */
  roleArn: string | undefined;
}

export namespace IotEventsDestinationConfiguration {
  export function isa(o: any): o is IotEventsDestinationConfiguration {
    return _smithy.isa(o, "IotEventsDestinationConfiguration");
  }
}

/**
 *
 *          <p>An activity that runs a Lambda function to modify the message.</p>
 *
 */
export interface LambdaActivity {
  __type?: "LambdaActivity";
  /**
   *
   *          <p>The number of messages passed to the Lambda function for processing.</p>
   *          <p>The AWS Lambda function must be able to process all of these messages within
   *          five minutes, which is the maximum timeout duration for Lambda functions.</p>
   *
   */
  batchSize: number | undefined;

  /**
   *
   *          <p>The name of the Lambda function that is run on the message.</p>
   *
   */
  lambdaName: string | undefined;

  /**
   *
   *          <p>The name of the 'lambda' activity.</p>
   *
   */
  name: string | undefined;

  /**
   *
   *          <p>The next activity in the pipeline.</p>
   *
   */
  next?: string;
}

export namespace LambdaActivity {
  export function isa(o: any): o is LambdaActivity {
    return _smithy.isa(o, "LambdaActivity");
  }
}

export interface ListChannelsRequest {
  __type?: "ListChannelsRequest";
  /**
   *
   *          <p>The maximum number of results to return in this request.</p>
   *          <p>The default value is 100.</p>
   *
   */
  maxResults?: number;

  /**
   *
   *          <p>The token for the next set of results.</p>
   *
   */
  nextToken?: string;
}

export namespace ListChannelsRequest {
  export function isa(o: any): o is ListChannelsRequest {
    return _smithy.isa(o, "ListChannelsRequest");
  }
}

export interface ListChannelsResponse extends $MetadataBearer {
  __type?: "ListChannelsResponse";
  /**
   *
   *          <p>A list of "ChannelSummary" objects.</p>
   *
   */
  channelSummaries?: Array<ChannelSummary>;

  /**
   *
   *          <p>The token to retrieve the next set of results, or <code>null</code> if there are no
   *           more results.</p>
   *
   */
  nextToken?: string;
}

export namespace ListChannelsResponse {
  export function isa(o: any): o is ListChannelsResponse {
    return _smithy.isa(o, "ListChannelsResponse");
  }
}

export interface ListDatasetContentsRequest {
  __type?: "ListDatasetContentsRequest";
  /**
   *
   *          <p>The name of the data set whose contents information you want to list.</p>
   *
   */
  datasetName: string | undefined;

  /**
   *
   *          <p>The maximum number of results to return in this request.</p>
   *
   */
  maxResults?: number;

  /**
   *
   *          <p>The token for the next set of results.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *          <p>A filter to limit results to those data set contents whose creation is scheduled before the
   *        given time. See the field <code>triggers.schedule</code> in the CreateDataset request. (timestamp)</p>
   *
   */
  scheduledBefore?: Date;

  /**
   *
   *          <p>A filter to limit results to those data set contents whose creation is scheduled on or
   *        after the given time. See the field <code>triggers.schedule</code> in the CreateDataset
   *        request. (timestamp)</p>
   *
   */
  scheduledOnOrAfter?: Date;
}

export namespace ListDatasetContentsRequest {
  export function isa(o: any): o is ListDatasetContentsRequest {
    return _smithy.isa(o, "ListDatasetContentsRequest");
  }
}

export interface ListDatasetContentsResponse extends $MetadataBearer {
  __type?: "ListDatasetContentsResponse";
  /**
   *
   *          <p>Summary information about data set contents that have been created.</p>
   *
   */
  datasetContentSummaries?: Array<DatasetContentSummary>;

  /**
   *
   *          <p>The token to retrieve the next set of results, or <code>null</code> if there are no
   *            more results.</p>
   *
   */
  nextToken?: string;
}

export namespace ListDatasetContentsResponse {
  export function isa(o: any): o is ListDatasetContentsResponse {
    return _smithy.isa(o, "ListDatasetContentsResponse");
  }
}

export interface ListDatasetsRequest {
  __type?: "ListDatasetsRequest";
  /**
   *
   *          <p>The maximum number of results to return in this request.</p>
   *          <p>The default value is 100.</p>
   *
   */
  maxResults?: number;

  /**
   *
   *          <p>The token for the next set of results.</p>
   *
   */
  nextToken?: string;
}

export namespace ListDatasetsRequest {
  export function isa(o: any): o is ListDatasetsRequest {
    return _smithy.isa(o, "ListDatasetsRequest");
  }
}

export interface ListDatasetsResponse extends $MetadataBearer {
  __type?: "ListDatasetsResponse";
  /**
   *
   *          <p>A list of "DatasetSummary" objects.</p>
   *
   */
  datasetSummaries?: Array<DatasetSummary>;

  /**
   *
   *          <p>The token to retrieve the next set of results, or <code>null</code> if there are no
   *           more results.</p>
   *
   */
  nextToken?: string;
}

export namespace ListDatasetsResponse {
  export function isa(o: any): o is ListDatasetsResponse {
    return _smithy.isa(o, "ListDatasetsResponse");
  }
}

export interface ListDatastoresRequest {
  __type?: "ListDatastoresRequest";
  /**
   *
   *          <p>The maximum number of results to return in this request.</p>
   *          <p>The default value is 100.</p>
   *
   */
  maxResults?: number;

  /**
   *
   *          <p>The token for the next set of results.</p>
   *
   */
  nextToken?: string;
}

export namespace ListDatastoresRequest {
  export function isa(o: any): o is ListDatastoresRequest {
    return _smithy.isa(o, "ListDatastoresRequest");
  }
}

export interface ListDatastoresResponse extends $MetadataBearer {
  __type?: "ListDatastoresResponse";
  /**
   *
   *          <p>A list of "DatastoreSummary" objects.</p>
   *
   */
  datastoreSummaries?: Array<DatastoreSummary>;

  /**
   *
   *          <p>The token to retrieve the next set of results, or <code>null</code> if there are no
   *           more results.</p>
   *
   */
  nextToken?: string;
}

export namespace ListDatastoresResponse {
  export function isa(o: any): o is ListDatastoresResponse {
    return _smithy.isa(o, "ListDatastoresResponse");
  }
}

export interface ListPipelinesRequest {
  __type?: "ListPipelinesRequest";
  /**
   *
   *          <p>The maximum number of results to return in this request.</p>
   *          <p>The default value is 100.</p>
   *
   */
  maxResults?: number;

  /**
   *
   *          <p>The token for the next set of results.</p>
   *
   */
  nextToken?: string;
}

export namespace ListPipelinesRequest {
  export function isa(o: any): o is ListPipelinesRequest {
    return _smithy.isa(o, "ListPipelinesRequest");
  }
}

export interface ListPipelinesResponse extends $MetadataBearer {
  __type?: "ListPipelinesResponse";
  /**
   *
   *          <p>The token to retrieve the next set of results, or <code>null</code> if there are no
   *           more results.</p>
   *
   */
  nextToken?: string;

  /**
   *
   *          <p>A list of "PipelineSummary" objects.</p>
   *
   */
  pipelineSummaries?: Array<PipelineSummary>;
}

export namespace ListPipelinesResponse {
  export function isa(o: any): o is ListPipelinesResponse {
    return _smithy.isa(o, "ListPipelinesResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   *
   *          <p>The ARN of the resource whose tags you want to list.</p>
   *
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return _smithy.isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse extends $MetadataBearer {
  __type?: "ListTagsForResourceResponse";
  /**
   *
   *          <p>The tags (metadata) which you have assigned to the resource.</p>
   *
   */
  tags?: Array<Tag>;
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return _smithy.isa(o, "ListTagsForResourceResponse");
  }
}

export enum LoggingLevel {
  ERROR = "ERROR"
}

/**
 *
 *          <p>Information about logging options.</p>
 *
 */
export interface LoggingOptions {
  __type?: "LoggingOptions";
  /**
   *
   *          <p>If true, logging is enabled for AWS IoT Analytics.</p>
   *
   */
  enabled: boolean | undefined;

  /**
   *
   *          <p>The logging level.  Currently, only "ERROR" is supported.</p>
   *
   */
  level: LoggingLevel | string | undefined;

  /**
   *
   *          <p>The ARN of the role that grants permission to AWS IoT Analytics to
   *           perform logging.</p>
   *
   */
  roleArn: string | undefined;
}

export namespace LoggingOptions {
  export function isa(o: any): o is LoggingOptions {
    return _smithy.isa(o, "LoggingOptions");
  }
}

/**
 *
 *          <p>An activity that computes an arithmetic expression using the message's attributes.</p>
 *
 */
export interface MathActivity {
  __type?: "MathActivity";
  /**
   *
   *          <p>The name of the attribute that contains the result of the math operation.</p>
   *
   */
  attribute: string | undefined;

  /**
   *
   *          <p>An expression that uses one or more existing attributes and must return an integer value.</p>
   *
   */
  math: string | undefined;

  /**
   *
   *          <p>The name of the 'math' activity.</p>
   *
   */
  name: string | undefined;

  /**
   *
   *          <p>The next activity in the pipeline.</p>
   *
   */
  next?: string;
}

export namespace MathActivity {
  export function isa(o: any): o is MathActivity {
    return _smithy.isa(o, "MathActivity");
  }
}

/**
 *
 *          <p>The value of the variable as a structure that specifies an output file URI.</p>
 *
 */
export interface OutputFileUriValue {
  __type?: "OutputFileUriValue";
  /**
   *
   *          <p>The URI of the location where data set contents are stored, usually the URI of a file in an
   *           S3 bucket.</p>
   *
   */
  fileName: string | undefined;
}

export namespace OutputFileUriValue {
  export function isa(o: any): o is OutputFileUriValue {
    return _smithy.isa(o, "OutputFileUriValue");
  }
}

/**
 *
 *          <p>Contains information about a pipeline.</p>
 *
 */
export interface Pipeline {
  __type?: "Pipeline";
  /**
   *
   *          <p>The activities that perform transformations on the messages.</p>
   *
   */
  activities?: Array<PipelineActivity>;

  /**
   *
   *          <p>The ARN of the pipeline.</p>
   *
   */
  arn?: string;

  /**
   *
   *          <p>When the pipeline was created.</p>
   *
   */
  creationTime?: Date;

  /**
   *
   *          <p>The last time the pipeline was updated.</p>
   *
   */
  lastUpdateTime?: Date;

  /**
   *
   *          <p>The name of the pipeline.</p>
   *
   */
  name?: string;

  /**
   *
   *          <p>A summary of information about the pipeline reprocessing.</p>
   *
   */
  reprocessingSummaries?: Array<ReprocessingSummary>;
}

export namespace Pipeline {
  export function isa(o: any): o is Pipeline {
    return _smithy.isa(o, "Pipeline");
  }
}

/**
 *
 *          <p>An activity that performs a transformation on a message.</p>
 *
 */
export interface PipelineActivity {
  __type?: "PipelineActivity";
  /**
   *
   *          <p>Adds other attributes based on existing attributes in the message.</p>
   *
   */
  addAttributes?: AddAttributesActivity;

  /**
   *
   *          <p>Determines the source of the messages to be processed.</p>
   *
   */
  channel?: ChannelActivity;

  /**
   *
   *          <p>Specifies where to store the processed message data.</p>
   *
   */
  datastore?: DatastoreActivity;

  /**
   *
   *          <p>Adds data from the AWS IoT device registry to your message.</p>
   *
   */
  deviceRegistryEnrich?: DeviceRegistryEnrichActivity;

  /**
   *
   *          <p>Adds information from the AWS IoT Device Shadows service to a message.</p>
   *
   */
  deviceShadowEnrich?: DeviceShadowEnrichActivity;

  /**
   *
   *          <p>Filters a message based on its attributes.</p>
   *
   */
  filter?: FilterActivity;

  /**
   *
   *          <p>Runs a Lambda function to modify the message.</p>
   *
   */
  lambda?: LambdaActivity;

  /**
   *
   *          <p>Computes an arithmetic expression using the message's attributes and adds
   *        it to the message.</p>
   *
   */
  math?: MathActivity;

  /**
   *
   *          <p>Removes attributes from a message.</p>
   *
   */
  removeAttributes?: RemoveAttributesActivity;

  /**
   *
   *          <p>Creates a new message using only the specified attributes from the original message.
   *      </p>
   *
   */
  selectAttributes?: SelectAttributesActivity;
}

export namespace PipelineActivity {
  export function isa(o: any): o is PipelineActivity {
    return _smithy.isa(o, "PipelineActivity");
  }
}

/**
 *
 *          <p>A summary of information about a pipeline.</p>
 *
 */
export interface PipelineSummary {
  __type?: "PipelineSummary";
  /**
   *
   *          <p>When the pipeline was created.</p>
   *
   */
  creationTime?: Date;

  /**
   *
   *          <p>When the pipeline was last updated.</p>
   *
   */
  lastUpdateTime?: Date;

  /**
   *
   *          <p>The name of the pipeline.</p>
   *
   */
  pipelineName?: string;

  /**
   *
   *          <p>A summary of information about the pipeline reprocessing.</p>
   *
   */
  reprocessingSummaries?: Array<ReprocessingSummary>;
}

export namespace PipelineSummary {
  export function isa(o: any): o is PipelineSummary {
    return _smithy.isa(o, "PipelineSummary");
  }
}

export interface PutLoggingOptionsRequest {
  __type?: "PutLoggingOptionsRequest";
  /**
   *
   *          <p>The new values of the AWS IoT Analytics logging options.</p>
   *
   */
  loggingOptions: LoggingOptions | undefined;
}

export namespace PutLoggingOptionsRequest {
  export function isa(o: any): o is PutLoggingOptionsRequest {
    return _smithy.isa(o, "PutLoggingOptionsRequest");
  }
}

/**
 *
 *          <p>Information which is used to filter message data, to segregate it according to the time
 *           frame in which it arrives.</p>
 *
 */
export interface QueryFilter {
  __type?: "QueryFilter";
  /**
   *
   *          <p>Used to limit data to that which has arrived since the last execution of the action.</p>
   *
   */
  deltaTime?: DeltaTime;
}

export namespace QueryFilter {
  export function isa(o: any): o is QueryFilter {
    return _smithy.isa(o, "QueryFilter");
  }
}

/**
 *
 *          <p>An activity that removes attributes from a message.</p>
 *
 */
export interface RemoveAttributesActivity {
  __type?: "RemoveAttributesActivity";
  /**
   *
   *          <p>A list of 1-50 attributes to remove from the message.</p>
   *
   */
  attributes: Array<string> | undefined;

  /**
   *
   *          <p>The name of the 'removeAttributes' activity.</p>
   *
   */
  name: string | undefined;

  /**
   *
   *          <p>The next activity in the pipeline.</p>
   *
   */
  next?: string;
}

export namespace RemoveAttributesActivity {
  export function isa(o: any): o is RemoveAttributesActivity {
    return _smithy.isa(o, "RemoveAttributesActivity");
  }
}

export enum ReprocessingStatus {
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  SUCCEEDED = "SUCCEEDED"
}

/**
 *
 *          <p>Information about pipeline reprocessing.</p>
 *
 */
export interface ReprocessingSummary {
  __type?: "ReprocessingSummary";
  /**
   *
   *          <p>The time the pipeline reprocessing was created.</p>
   *
   */
  creationTime?: Date;

  /**
   *
   *          <p>The 'reprocessingId' returned by "StartPipelineReprocessing".</p>
   *
   */
  id?: string;

  /**
   *
   *          <p>The status of the pipeline reprocessing.</p>
   *
   */
  status?: ReprocessingStatus | string;
}

export namespace ReprocessingSummary {
  export function isa(o: any): o is ReprocessingSummary {
    return _smithy.isa(o, "ReprocessingSummary");
  }
}

/**
 *
 *          <p>The configuration of the resource used to execute the "containerAction".</p>
 *
 */
export interface ResourceConfiguration {
  __type?: "ResourceConfiguration";
  /**
   *
   *          <p>The type of the compute resource used to execute the "containerAction". Possible values
   *           are: ACU_1 (vCPU=4, memory=16GiB) or ACU_2 (vCPU=8, memory=32GiB).</p>
   *
   */
  computeType: ComputeType | string | undefined;

  /**
   *
   *          <p>The size (in GB) of the persistent storage available to the resource instance used to
   *           execute the "containerAction" (min: 1, max: 50).</p>
   *
   */
  volumeSizeInGB: number | undefined;
}

export namespace ResourceConfiguration {
  export function isa(o: any): o is ResourceConfiguration {
    return _smithy.isa(o, "ResourceConfiguration");
  }
}

/**
 *
 *          <p>How long, in days, message data is kept.</p>
 *
 */
export interface RetentionPeriod {
  __type?: "RetentionPeriod";
  /**
   *
   *          <p>The number of days that message data is kept. The "unlimited" parameter must be false.</p>
   *
   */
  numberOfDays?: number;

  /**
   *
   *          <p>If true, message data is kept indefinitely.</p>
   *
   */
  unlimited?: boolean;
}

export namespace RetentionPeriod {
  export function isa(o: any): o is RetentionPeriod {
    return _smithy.isa(o, "RetentionPeriod");
  }
}

export interface RunPipelineActivityRequest {
  __type?: "RunPipelineActivityRequest";
  /**
   *
   *          <p>The sample message payloads on which the pipeline activity is run.</p>
   *
   */
  payloads: Array<Uint8Array> | undefined;

  /**
   *
   *          <p>The pipeline activity that is run. This must not be a 'channel' activity or a
   *           'datastore' activity because these activities are used in a pipeline only to load the
   *           original message and to store the (possibly) transformed message. If a 'lambda' activity is
   *           specified, only short-running Lambda functions (those with a timeout of less than 30 seconds
   *           or less) can be used.</p>
   *
   */
  pipelineActivity: PipelineActivity | undefined;
}

export namespace RunPipelineActivityRequest {
  export function isa(o: any): o is RunPipelineActivityRequest {
    return _smithy.isa(o, "RunPipelineActivityRequest");
  }
}

export interface RunPipelineActivityResponse extends $MetadataBearer {
  __type?: "RunPipelineActivityResponse";
  /**
   *
   *          <p>In case the pipeline activity fails, the log message that is generated.</p>
   *
   */
  logResult?: string;

  /**
   *
   *          <p>The enriched or transformed sample message payloads as base64-encoded strings.
   *           (The results of running the pipeline activity on each input sample message payload,
   *           encoded in base64.)</p>
   *
   */
  payloads?: Array<Uint8Array>;
}

export namespace RunPipelineActivityResponse {
  export function isa(o: any): o is RunPipelineActivityResponse {
    return _smithy.isa(o, "RunPipelineActivityResponse");
  }
}

/**
 *
 *          <p>Configuration information for delivery of data set contents to Amazon S3.</p>
 *
 */
export interface S3DestinationConfiguration {
  __type?: "S3DestinationConfiguration";
  /**
   *
   *          <p>The name of the Amazon S3 bucket to which data set contents are delivered.</p>
   *
   */
  bucket: string | undefined;

  /**
   *
   *          <p>Configuration information for coordination with the AWS Glue ETL (extract, transform and
   *         load) service.</p>
   *
   */
  glueConfiguration?: GlueConfiguration;

  /**
   *
   *          <p>The key of the data set contents object. Each object in an Amazon S3 bucket has a key that is
   *         its unique identifier within the bucket (each object in a bucket has exactly one key). To produce
   *         a unique key, you can use "!{iotanalytics:scheduledTime}" to insert the time of the scheduled SQL
   *         query run, or "!{iotanalytics:versioned} to insert a unique hash identifying the data set, for
   *         example: "/DataSet/!{iotanalytics:scheduledTime}/!{iotanalytics:versioned}.csv".</p>
   *
   */
  key: string | undefined;

  /**
   *
   *          <p>The ARN of the role which grants AWS IoT Analytics permission to interact with your Amazon S3
   *         and AWS Glue resources.</p>
   *
   */
  roleArn: string | undefined;
}

export namespace S3DestinationConfiguration {
  export function isa(o: any): o is S3DestinationConfiguration {
    return _smithy.isa(o, "S3DestinationConfiguration");
  }
}

export interface SampleChannelDataRequest {
  __type?: "SampleChannelDataRequest";
  /**
   *
   *          <p>The name of the channel whose message samples are retrieved.</p>
   *
   */
  channelName: string | undefined;

  /**
   *
   *          <p>The end of the time window from which sample messages are retrieved.</p>
   *
   */
  endTime?: Date;

  /**
   *
   *          <p>The number of sample messages to be retrieved. The limit is 10, the default
   *           is also 10.</p>
   *
   */
  maxMessages?: number;

  /**
   *
   *          <p>The start of the time window from which sample messages are retrieved.</p>
   *
   */
  startTime?: Date;
}

export namespace SampleChannelDataRequest {
  export function isa(o: any): o is SampleChannelDataRequest {
    return _smithy.isa(o, "SampleChannelDataRequest");
  }
}

export interface SampleChannelDataResponse extends $MetadataBearer {
  __type?: "SampleChannelDataResponse";
  /**
   *
   *          <p>The list of message samples.  Each sample message is returned as a base64-encoded
   *           string.</p>
   *
   */
  payloads?: Array<Uint8Array>;
}

export namespace SampleChannelDataResponse {
  export function isa(o: any): o is SampleChannelDataResponse {
    return _smithy.isa(o, "SampleChannelDataResponse");
  }
}

/**
 *
 *          <p>The schedule for when to trigger an update.</p>
 *
 */
export interface Schedule {
  __type?: "Schedule";
  /**
   *
   *          <p>The expression that defines when to trigger an update. For more information, see
   *           <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html">
   *           Schedule Expressions for Rules</a> in the Amazon CloudWatch Events User Guide.</p>
   *
   */
  expression?: string;
}

export namespace Schedule {
  export function isa(o: any): o is Schedule {
    return _smithy.isa(o, "Schedule");
  }
}

/**
 *
 *          <p>Creates a new message using only the specified attributes
 *         from the original message.</p>
 *
 */
export interface SelectAttributesActivity {
  __type?: "SelectAttributesActivity";
  /**
   *
   *          <p>A list of the attributes to select from the message.</p>
   *
   */
  attributes: Array<string> | undefined;

  /**
   *
   *          <p>The name of the 'selectAttributes' activity.</p>
   *
   */
  name: string | undefined;

  /**
   *
   *          <p>The next activity in the pipeline.</p>
   *
   */
  next?: string;
}

export namespace SelectAttributesActivity {
  export function isa(o: any): o is SelectAttributesActivity {
    return _smithy.isa(o, "SelectAttributesActivity");
  }
}

/**
 *
 *          <p>Use this to store channel data in an S3 bucket managed by the AWS IoT Analytics service.
 *         The choice of service-managed or customer-managed S3 storage cannot be changed after creation
 *         of the channel.</p>
 *
 */
export interface ServiceManagedChannelS3Storage {
  __type?: "ServiceManagedChannelS3Storage";
}

export namespace ServiceManagedChannelS3Storage {
  export function isa(o: any): o is ServiceManagedChannelS3Storage {
    return _smithy.isa(o, "ServiceManagedChannelS3Storage");
  }
}

/**
 *
 *          <p>Used to store channel data in an S3 bucket managed by the AWS IoT Analytics service.</p>
 *
 */
export interface ServiceManagedChannelS3StorageSummary {
  __type?: "ServiceManagedChannelS3StorageSummary";
}

export namespace ServiceManagedChannelS3StorageSummary {
  export function isa(o: any): o is ServiceManagedChannelS3StorageSummary {
    return _smithy.isa(o, "ServiceManagedChannelS3StorageSummary");
  }
}

/**
 *
 *          <p>Use this to store data store data in an S3 bucket managed by the AWS IoT Analytics service.
 *         The choice of service-managed or customer-managed S3 storage cannot be changed after creation
 *         of the data store.</p>
 *
 */
export interface ServiceManagedDatastoreS3Storage {
  __type?: "ServiceManagedDatastoreS3Storage";
}

export namespace ServiceManagedDatastoreS3Storage {
  export function isa(o: any): o is ServiceManagedDatastoreS3Storage {
    return _smithy.isa(o, "ServiceManagedDatastoreS3Storage");
  }
}

/**
 *
 *          <p>Used to store data store data in an S3 bucket managed by the AWS IoT Analytics service.</p>
 *
 */
export interface ServiceManagedDatastoreS3StorageSummary {
  __type?: "ServiceManagedDatastoreS3StorageSummary";
}

export namespace ServiceManagedDatastoreS3StorageSummary {
  export function isa(o: any): o is ServiceManagedDatastoreS3StorageSummary {
    return _smithy.isa(o, "ServiceManagedDatastoreS3StorageSummary");
  }
}

/**
 *
 *          <p>The SQL query to modify the message.</p>
 *
 */
export interface SqlQueryDatasetAction {
  __type?: "SqlQueryDatasetAction";
  /**
   *
   *          <p>Pre-filters applied to message data.</p>
   *
   */
  filters?: Array<QueryFilter>;

  /**
   *
   *          <p>A SQL query string.</p>
   *
   */
  sqlQuery: string | undefined;
}

export namespace SqlQueryDatasetAction {
  export function isa(o: any): o is SqlQueryDatasetAction {
    return _smithy.isa(o, "SqlQueryDatasetAction");
  }
}

export interface StartPipelineReprocessingRequest {
  __type?: "StartPipelineReprocessingRequest";
  /**
   *
   *          <p>The end time (exclusive) of raw message data that is reprocessed.</p>
   *
   */
  endTime?: Date;

  /**
   *
   *          <p>The name of the pipeline on which to start reprocessing.</p>
   *
   */
  pipelineName: string | undefined;

  /**
   *
   *          <p>The start time (inclusive) of raw message data that is reprocessed.</p>
   *
   */
  startTime?: Date;
}

export namespace StartPipelineReprocessingRequest {
  export function isa(o: any): o is StartPipelineReprocessingRequest {
    return _smithy.isa(o, "StartPipelineReprocessingRequest");
  }
}

export interface StartPipelineReprocessingResponse extends $MetadataBearer {
  __type?: "StartPipelineReprocessingResponse";
  /**
   *
   *          <p>The ID of the pipeline reprocessing activity that was started.</p>
   *
   */
  reprocessingId?: string;
}

export namespace StartPipelineReprocessingResponse {
  export function isa(o: any): o is StartPipelineReprocessingResponse {
    return _smithy.isa(o, "StartPipelineReprocessingResponse");
  }
}

/**
 *
 *          <p>A set of key/value pairs which are used to manage the resource.</p>
 *
 */
export interface Tag {
  __type?: "Tag";
  /**
   *
   *          <p>The tag's key.</p>
   *
   */
  key: string | undefined;

  /**
   *
   *          <p>The tag's value.</p>
   *
   */
  value: string | undefined;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return _smithy.isa(o, "Tag");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   *
   *          <p>The ARN of the resource whose tags you want to modify.</p>
   *
   */
  resourceArn: string | undefined;

  /**
   *
   *          <p>The new or modified tags for the resource.</p>
   *
   */
  tags: Array<Tag> | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return _smithy.isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse extends $MetadataBearer {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return _smithy.isa(o, "TagResourceResponse");
  }
}

/**
 *
 *          <p>Information about the data set whose content generation triggers the new data set content
 *           generation.</p>
 *
 */
export interface TriggeringDataset {
  __type?: "TriggeringDataset";
  /**
   *
   *          <p>The name of the data set whose content generation triggers the new data set content
   *           generation.</p>
   *
   */
  name: string | undefined;
}

export namespace TriggeringDataset {
  export function isa(o: any): o is TriggeringDataset {
    return _smithy.isa(o, "TriggeringDataset");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   *
   *          <p>The ARN of the resource whose tags you want to remove.</p>
   *
   */
  resourceArn: string | undefined;

  /**
   *
   *          <p>The keys of those tags which you want to remove.</p>
   *
   */
  tagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return _smithy.isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse extends $MetadataBearer {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return _smithy.isa(o, "UntagResourceResponse");
  }
}

export interface UpdateChannelRequest {
  __type?: "UpdateChannelRequest";
  /**
   *
   *          <p>The name of the channel to be updated.</p>
   *
   */
  channelName: string | undefined;

  /**
   *
   *          <p>Where channel data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3"
   *         storage. If not specified, the default is "serviceManagedS3". This cannot be changed after creation
   *         of the channel.</p>
   *
   */
  channelStorage?: ChannelStorage;

  /**
   *
   *          <p>How long, in days, message data is kept for the channel. The retention period cannot be updated
   *         if the channel's S3 storage is customer-managed.</p>
   *
   */
  retentionPeriod?: RetentionPeriod;
}

export namespace UpdateChannelRequest {
  export function isa(o: any): o is UpdateChannelRequest {
    return _smithy.isa(o, "UpdateChannelRequest");
  }
}

export interface UpdateDatasetRequest {
  __type?: "UpdateDatasetRequest";
  /**
   *
   *          <p>A list of "DatasetAction" objects.</p>
   *
   */
  actions: Array<DatasetAction> | undefined;

  /**
   *
   *          <p>When data set contents are created they are delivered to destinations specified here.</p>
   *
   */
  contentDeliveryRules?: Array<DatasetContentDeliveryRule>;

  /**
   *
   *          <p>The name of the data set to update.</p>
   *
   */
  datasetName: string | undefined;

  /**
   *
   *          <p>How long, in days, data set contents are kept for the data set.</p>
   *
   */
  retentionPeriod?: RetentionPeriod;

  /**
   *
   *          <p>A list of "DatasetTrigger" objects.  The list can be empty or can contain up
   *           to five <b>DataSetTrigger</b> objects.</p>
   *
   */
  triggers?: Array<DatasetTrigger>;

  /**
   *
   *          <p>[Optional] How many versions of data set contents are kept. If not specified or set to null, only the
   *         latest version plus the latest succeeded version (if they are different) are kept for
   *         the time period specified by the "retentionPeriod" parameter. (For more information, see
   *         https://docs.aws.amazon.com/iotanalytics/latest/userguide/getting-started.html#aws-iot-analytics-dataset-versions)</p>
   *
   */
  versioningConfiguration?: VersioningConfiguration;
}

export namespace UpdateDatasetRequest {
  export function isa(o: any): o is UpdateDatasetRequest {
    return _smithy.isa(o, "UpdateDatasetRequest");
  }
}

export interface UpdateDatastoreRequest {
  __type?: "UpdateDatastoreRequest";
  /**
   *
   *          <p>The name of the data store to be updated.</p>
   *
   */
  datastoreName: string | undefined;

  /**
   *
   *          <p>Where data store data is stored. You may choose one of "serviceManagedS3" or "customerManagedS3"
   *         storage. If not specified, the default is "serviceManagedS3". This cannot be changed after the data
   *         store is created.</p>
   *
   */
  datastoreStorage?: DatastoreStorage;

  /**
   *
   *          <p>How long, in days, message data is kept for the data store. The retention period cannot be updated
   *         if the data store's S3 storage is customer-managed.</p>
   *
   */
  retentionPeriod?: RetentionPeriod;
}

export namespace UpdateDatastoreRequest {
  export function isa(o: any): o is UpdateDatastoreRequest {
    return _smithy.isa(o, "UpdateDatastoreRequest");
  }
}

export interface UpdatePipelineRequest {
  __type?: "UpdatePipelineRequest";
  /**
   *
   *          <p>A list of "PipelineActivity" objects. Activities perform transformations on your messages,
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
   *
   */
  pipelineActivities: Array<PipelineActivity> | undefined;

  /**
   *
   *          <p>The name of the pipeline to update.</p>
   *
   */
  pipelineName: string | undefined;
}

export namespace UpdatePipelineRequest {
  export function isa(o: any): o is UpdatePipelineRequest {
    return _smithy.isa(o, "UpdatePipelineRequest");
  }
}

/**
 *
 *          <p>An instance of a variable to be passed to the "containerAction" execution.  Each variable
 *           must have a name and a value given by one of "stringValue", "datasetContentVersionValue", or
 *           "outputFileUriValue".</p>
 *
 */
export interface Variable {
  __type?: "Variable";
  /**
   *
   *          <p>The value of the variable as a structure that specifies a data set content version.</p>
   *
   */
  datasetContentVersionValue?: DatasetContentVersionValue;

  /**
   *
   *          <p>The value of the variable as a double (numeric).</p>
   *
   */
  doubleValue?: number;

  /**
   *
   *          <p>The name of the variable.</p>
   *
   */
  name: string | undefined;

  /**
   *
   *          <p>The value of the variable as a structure that specifies an output file URI.</p>
   *
   */
  outputFileUriValue?: OutputFileUriValue;

  /**
   *
   *          <p>The value of the variable as a string.</p>
   *
   */
  stringValue?: string;
}

export namespace Variable {
  export function isa(o: any): o is Variable {
    return _smithy.isa(o, "Variable");
  }
}

/**
 *
 *          <p>Information about the versioning of data set contents.</p>
 *
 */
export interface VersioningConfiguration {
  __type?: "VersioningConfiguration";
  /**
   *
   *          <p>How many versions of data set contents will be kept. The "unlimited" parameter must be false.</p>
   *
   */
  maxVersions?: number;

  /**
   *
   *          <p>If true, unlimited versions of data set contents will be kept.</p>
   *
   */
  unlimited?: boolean;
}

export namespace VersioningConfiguration {
  export function isa(o: any): o is VersioningConfiguration {
    return _smithy.isa(o, "VersioningConfiguration");
  }
}

/**
 *
 *          <p>Contains informations about errors.</p>
 *
 */
export interface BatchPutMessageErrorEntry {
  __type?: "BatchPutMessageErrorEntry";
  /**
   *
   *          <p>The code associated with the error.</p>
   *
   */
  errorCode?: string;

  /**
   *
   *          <p>The message associated with the error.</p>
   *
   */
  errorMessage?: string;

  /**
   *
   *          <p>The ID of the message that caused the error. (See the value corresponding to the
   *           "messageId" key in the message object.)</p>
   *
   */
  messageId?: string;
}

export namespace BatchPutMessageErrorEntry {
  export function isa(o: any): o is BatchPutMessageErrorEntry {
    return _smithy.isa(o, "BatchPutMessageErrorEntry");
  }
}

export interface BatchPutMessageRequest {
  __type?: "BatchPutMessageRequest";
  /**
   *
   *          <p>The name of the channel where the messages are sent.</p>
   *
   */
  channelName: string | undefined;

  /**
   *
   *          <p>The list of messages to be sent. Each message has format:
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
   *
   */
  messages: Array<Message> | undefined;
}

export namespace BatchPutMessageRequest {
  export function isa(o: any): o is BatchPutMessageRequest {
    return _smithy.isa(o, "BatchPutMessageRequest");
  }
}

export interface BatchPutMessageResponse extends $MetadataBearer {
  __type?: "BatchPutMessageResponse";
  /**
   *
   *          <p>A list of any errors encountered when sending the messages to the channel.</p>
   *
   */
  batchPutMessageErrorEntries?: Array<BatchPutMessageErrorEntry>;
}

export namespace BatchPutMessageResponse {
  export function isa(o: any): o is BatchPutMessageResponse {
    return _smithy.isa(o, "BatchPutMessageResponse");
  }
}

/**
 *
 *          <p>Information about a message.</p>
 *
 */
export interface Message {
  __type?: "Message";
  /**
   *
   *          <p>The ID you wish to assign to the message. Each "messageId" must be unique
   *           within each batch sent.</p>
   *
   */
  messageId: string | undefined;

  /**
   *
   *          <p>The payload of the message. This may be a JSON string or a Base64-encoded string
   *           representing binary data (in which case you must decode it by means of a pipeline activity).</p>
   *
   */
  payload: Uint8Array | undefined;
}

export namespace Message {
  export function isa(o: any): o is Message {
    return _smithy.isa(o, "Message");
  }
}
