import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>AWS DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 */
export interface AccessDeniedFault extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace AccessDeniedFault {
  export const filterSensitiveLog = (obj: AccessDeniedFault): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a quota for an AWS account, for example, the number of replication instances
 *          allowed.</p>
 */
export interface AccountQuota {
  /**
   * <p>The amount currently used toward the quota maximum.</p>
   */
  Used?: number;

  /**
   * <p>The maximum allowed value for the quota.</p>
   */
  Max?: number;

  /**
   * <p>The name of the AWS DMS quota for this AWS account.</p>
   */
  AccountQuotaName?: string;
}

export namespace AccountQuota {
  export const filterSensitiveLog = (obj: AccountQuota): any => ({
    ...obj,
  });
}

/**
 * <p>A user-defined key-value pair that describes metadata added to an AWS DMS resource and
 *          that is used by operations such as the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AddTagsToResource</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListTagsForResource</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>RemoveTagsFromResource</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface Tag {
  /**
   * <p>A value is the optional value of the tag. The string value can be 1-256 Unicode
   *          characters in length and can't be prefixed with "aws:" or "dms:". The string can only
   *          contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-'
   *          (Java regular expressions: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</p>
   */
  Value?: string;

  /**
   * <p>A key is the required name of the tag. The string value can be 1-128 Unicode characters
   *          in length and can't be prefixed with "aws:" or "dms:". The string can only contain
   *          only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-' (Java
   *          regular expressions: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</p>
   */
  Key?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>Associates a set of tags with an AWS DMS resource.</p>
 */
export interface AddTagsToResourceMessage {
  /**
   * <p>One or more tags to be assigned to the resource.</p>
   */
  Tags: Tag[] | undefined;

  /**
   * <p>Identifies the AWS DMS resource to which tags should be added. The value for this parameter is an Amazon Resource Name (ARN).</p>
   *          <p>For AWS DMS, you can tag a replication instance, an endpoint, or a replication task.</p>
   */
  ResourceArn: string | undefined;
}

export namespace AddTagsToResourceMessage {
  export const filterSensitiveLog = (obj: AddTagsToResourceMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface AddTagsToResourceResponse {}

export namespace AddTagsToResourceResponse {
  export const filterSensitiveLog = (obj: AddTagsToResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource could not be found.</p>
 */
export interface ResourceNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace ResourceNotFoundFault {
  export const filterSensitiveLog = (obj: ResourceNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ApplyPendingMaintenanceActionMessage {
  /**
   * <p>The pending maintenance action to apply to this resource.</p>
   */
  ApplyAction: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS DMS resource that the pending maintenance
   *          action applies to.</p>
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * <p>A value that specifies the type of opt-in request, or undoes an opt-in request. You can't undo an
   *          opt-in request of type <code>immediate</code>.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>immediate</code> - Apply the maintenance action immediately.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>next-maintenance</code> - Apply the maintenance action during the next
   *                maintenance window for the resource.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>undo-opt-in</code> - Cancel any existing <code>next-maintenance</code> opt-in
   *                requests.</p>
   *             </li>
   *          </ul>
   */
  OptInType: string | undefined;
}

export namespace ApplyPendingMaintenanceActionMessage {
  export const filterSensitiveLog = (obj: ApplyPendingMaintenanceActionMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a maintenance action pending for an AWS DMS resource, including when and how
 *          it will be applied. This data type is a response element to the
 *             <code>DescribePendingMaintenanceActions</code> operation.</p>
 */
export interface PendingMaintenanceAction {
  /**
   * <p>The effective date when the pending maintenance action will be applied to the resource.
   *          This date takes into account opt-in requests received from the
   *             <code>ApplyPendingMaintenanceAction</code> API operation, and also the
   *             <code>AutoAppliedAfterDate</code> and <code>ForcedApplyDate</code> parameter values.
   *          This value is blank if an opt-in request has not been received and nothing has been
   *          specified for <code>AutoAppliedAfterDate</code> or <code>ForcedApplyDate</code>.</p>
   */
  CurrentApplyDate?: Date;

  /**
   * <p>A description providing more detail about the maintenance action.</p>
   */
  Description?: string;

  /**
   * <p>The date of the maintenance window when the action is to be applied. The maintenance
   *          action is applied to the resource during its first maintenance window after this date. If
   *          this date is specified, any <code>next-maintenance</code> opt-in requests are
   *          ignored.</p>
   */
  AutoAppliedAfterDate?: Date;

  /**
   * <p>The type of opt-in request that has been received for the resource.</p>
   */
  OptInStatus?: string;

  /**
   * <p>The date when the maintenance action will be automatically applied. The maintenance
   *          action is applied to the resource on this date regardless of the maintenance window for the
   *          resource. If this date is specified, any <code>immediate</code> opt-in requests are
   *          ignored.</p>
   */
  ForcedApplyDate?: Date;

  /**
   * <p>The type of pending maintenance action that is available for the resource.</p>
   */
  Action?: string;
}

export namespace PendingMaintenanceAction {
  export const filterSensitiveLog = (obj: PendingMaintenanceAction): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies an AWS DMS resource and any pending actions for it.</p>
 */
export interface ResourcePendingMaintenanceActions {
  /**
   * <p>Detailed information about the pending maintenance action.</p>
   */
  PendingMaintenanceActionDetails?: PendingMaintenanceAction[];

  /**
   * <p>The Amazon Resource Name (ARN) of the DMS resource that the pending maintenance action
   *          applies to. For information about creating an ARN, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Introduction.AWS.ARN.html"> Constructing an Amazon
   *             Resource Name (ARN) for AWS DMS</a> in the DMS documentation.</p>
   */
  ResourceIdentifier?: string;
}

export namespace ResourcePendingMaintenanceActions {
  export const filterSensitiveLog = (obj: ResourcePendingMaintenanceActions): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ApplyPendingMaintenanceActionResponse {
  /**
   * <p>The AWS DMS resource that the pending maintenance action will be applied to.</p>
   */
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
}

export namespace ApplyPendingMaintenanceActionResponse {
  export const filterSensitiveLog = (obj: ApplyPendingMaintenanceActionResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CancelReplicationTaskAssessmentRunMessage {
  /**
   * <p>Amazon Resource Name (ARN) of the premigration assessment run to be canceled.</p>
   */
  ReplicationTaskAssessmentRunArn: string | undefined;
}

export namespace CancelReplicationTaskAssessmentRunMessage {
  export const filterSensitiveLog = (obj: CancelReplicationTaskAssessmentRunMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The progress values reported by the <code>AssessmentProgress</code> response
 *          element.</p>
 */
export interface ReplicationTaskAssessmentRunProgress {
  /**
   * <p>The number of individual assessments that are specified to run.</p>
   */
  IndividualAssessmentCount?: number;

  /**
   * <p>The number of individual assessments that have completed, successfully or not.</p>
   */
  IndividualAssessmentCompletedCount?: number;
}

export namespace ReplicationTaskAssessmentRunProgress {
  export const filterSensitiveLog = (obj: ReplicationTaskAssessmentRunProgress): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information that describes a premigration assessment run that you have started
 *          using the <code>StartReplicationTaskAssessmentRun</code> operation.</p>
 *          <p>Some of the information appears based on other operations that can return the
 *             <code>ReplicationTaskAssessmentRun</code> object.</p>
 */
export interface ReplicationTaskAssessmentRun {
  /**
   * <p>Amazon Resource Name (ARN) of this assessment run.</p>
   */
  ReplicationTaskAssessmentRunArn?: string;

  /**
   * <p>Indication of the completion progress for the individual assessments specified to
   *          run.</p>
   */
  AssessmentProgress?: ReplicationTaskAssessmentRunProgress;

  /**
   * <p>Encryption mode used to encrypt the assessment run results.</p>
   */
  ResultEncryptionMode?: string;

  /**
   * <p>Folder in an Amazon S3 bucket where AWS DMS stores the results of this assessment
   *          run.</p>
   */
  ResultLocationFolder?: string;

  /**
   * <p>Last message generated by an individual assessment failure.</p>
   */
  LastFailureMessage?: string;

  /**
   * <p>ARN of the service role used to start the assessment run using the
   *             <code>StartReplicationTaskAssessmentRun</code> operation.</p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * <p>Unique name of the assessment run.</p>
   */
  AssessmentRunName?: string;

  /**
   * <p>Date on which the assessment run was created using the
   *             <code>StartReplicationTaskAssessmentRun</code> operation.</p>
   */
  ReplicationTaskAssessmentRunCreationDate?: Date;

  /**
   * <p>Assessment run status. </p>
   *          <p>This status can have one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"cancelling"</code> – The assessment run was canceled by the
   *                   <code>CancelReplicationTaskAssessmentRun</code> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"deleting"</code> – The assessment run was deleted by the
   *                   <code>DeleteReplicationTaskAssessmentRun</code> operation.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"failed"</code> – At least one individual assessment completed with a
   *                   <code>failed</code> status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"error-provisioning"</code> – An internal error occurred while
   *                resources were provisioned (during <code>provisioning</code> status).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"error-executing"</code> – An internal error occurred while
   *                individual assessments ran (during <code>running</code> status).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"invalid state"</code> – The assessment run is in an unknown state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"passed"</code> – All individual assessments have completed, and none
   *                has a <code>failed</code> status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"provisioning"</code> – Resources required to run individual
   *                assessments are being provisioned.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"running"</code> – Individual assessments are being run.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"starting"</code> – The assessment run is starting, but resources are not yet
   *                being provisioned for individual assessments.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>ARN of the AWS KMS encryption key used to encrypt the assessment run results.</p>
   */
  ResultKmsKeyArn?: string;

  /**
   * <p>ARN of the migration task associated with this premigration
   *          assessment run.</p>
   */
  ReplicationTaskArn?: string;

  /**
   * <p>Amazon S3 bucket where AWS DMS stores the results of this assessment run.</p>
   */
  ResultLocationBucket?: string;
}

export namespace ReplicationTaskAssessmentRun {
  export const filterSensitiveLog = (obj: ReplicationTaskAssessmentRun): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CancelReplicationTaskAssessmentRunResponse {
  /**
   * <p>The <code>ReplicationTaskAssessmentRun</code> object for the canceled assessment
   *          run.</p>
   */
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
}

export namespace CancelReplicationTaskAssessmentRunResponse {
  export const filterSensitiveLog = (obj: CancelReplicationTaskAssessmentRunResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource is in a state that prevents it from being used for database migration.</p>
 */
export interface InvalidResourceStateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidResourceStateFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace InvalidResourceStateFault {
  export const filterSensitiveLog = (obj: InvalidResourceStateFault): any => ({
    ...obj,
  });
}

/**
 * <p> The settings in JSON format for the DMS Transfer type source endpoint. </p>
 */
export interface DmsTransferSettings {
  /**
   * <p> The IAM role that has permission to access the Amazon S3 bucket. </p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * <p> The name of the S3 bucket to use. </p>
   */
  BucketName?: string;
}

export namespace DmsTransferSettings {
  export const filterSensitiveLog = (obj: DmsTransferSettings): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM)
 *          role used to define an Amazon DynamoDB target endpoint.</p>
 */
export interface DynamoDbSettings {
  /**
   * <p> The Amazon Resource Name (ARN) used by the service access IAM role. </p>
   */
  ServiceAccessRoleArn: string | undefined;
}

export namespace DynamoDbSettings {
  export const filterSensitiveLog = (obj: DynamoDbSettings): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information that defines an Elasticsearch endpoint.</p>
 */
export interface ElasticsearchSettings {
  /**
   * <p>The maximum number of seconds for which DMS retries failed API requests to the
   *          Elasticsearch cluster.</p>
   */
  ErrorRetryDuration?: number;

  /**
   * <p>The endpoint for the Elasticsearch cluster.</p>
   */
  EndpointUri: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) used by service to access the IAM role.</p>
   */
  ServiceAccessRoleArn: string | undefined;

  /**
   * <p>The maximum percentage of records that can fail to be written before a full load
   *          operation stops. </p>
   */
  FullLoadErrorPercentage?: number;
}

export namespace ElasticsearchSettings {
  export const filterSensitiveLog = (obj: ElasticsearchSettings): any => ({
    ...obj,
  });
}

export enum ReplicationEndpointTypeValue {
  SOURCE = "source",
  TARGET = "target",
}

/**
 * <p>Provides information that defines an IBM Db2 LUW endpoint.</p>
 */
export interface IBMDb2Settings {
  /**
   * <p>Endpoint TCP port.</p>
   */
  Port?: number;

  /**
   * <p>Endpoint connection password.</p>
   */
  Password?: string;

  /**
   * <p>Database name for the endpoint.</p>
   */
  DatabaseName?: string;

  /**
   * <p>Endpoint connection user name.</p>
   */
  Username?: string;

  /**
   * <p>Fully qualified domain name of the endpoint.</p>
   */
  ServerName?: string;
}

export namespace IBMDb2Settings {
  export const filterSensitiveLog = (obj: IBMDb2Settings): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export enum MessageFormatValue {
  JSON = "json",
  JSON_UNFORMATTED = "json-unformatted",
}

/**
 * <p>Provides information that describes an Apache Kafka endpoint. This
 *          information includes the output format of records applied to the endpoint and details of
 *          transaction and control table data information.</p>
 */
export interface KafkaSettings {
  /**
   * <p>The output format for the records created on the endpoint. The message format is
   *             <code>JSON</code> (default) or <code>JSON_UNFORMATTED</code> (a single line with no
   *          tab).</p>
   */
  MessageFormat?: MessageFormatValue | string;

  /**
   * <p>The broker location and port of the Kafka broker that hosts your Kafka instance. Specify the broker
   *          in the form <code>
   *                <i>broker-hostname-or-ip</i>:<i>port</i>
   *             </code>. For example, <code>"ec2-12-345-678-901.compute-1.amazonaws.com:2345"</code>.</p>
   */
  Broker?: string;

  /**
   * <p>Prefixes schema and table names to partition values, when the partition type is
   *             <code>primary-key-type</code>. Doing this increases data distribution among Kafka
   *          partitions. For example, suppose that a SysBench schema has thousands of tables and each
   *          table has only limited range for a primary key. In this case, the same primary key is sent
   *          from thousands of tables to the same partition, which causes throttling. The default is
   *             <code>False</code>.</p>
   */
  PartitionIncludeSchemaTable?: boolean;

  /**
   * <p>Includes any data definition language (DDL) operations that change the table in the
   *          control data, such as <code>rename-table</code>, <code>drop-table</code>,
   *             <code>add-column</code>, <code>drop-column</code>, and <code>rename-column</code>. The
   *          default is <code>False</code>.</p>
   */
  IncludeTableAlterOperations?: boolean;

  /**
   * <p>Shows the partition value within the Kafka message output, unless the partition type is
   *             <code>schema-table-type</code>. The default is <code>False</code>.</p>
   */
  IncludePartitionValue?: boolean;

  /**
   * <p>The topic to which you migrate the data. If you don't specify a topic, AWS DMS
   *          specifies <code>"kafka-default-topic"</code> as the migration topic.</p>
   */
  Topic?: string;

  /**
   * <p>Shows detailed control information for table definition, column definition, and table
   *          and column changes in the Kafka message output. The default is <code>False</code>.</p>
   */
  IncludeControlDetails?: boolean;

  /**
   * <p>Provides detailed transaction information from the source database. This information
   *          includes a commit timestamp, a log position, and values for <code>transaction_id</code>,
   *          previous <code>transaction_id</code>, and <code>transaction_record_id</code> (the record
   *          offset within a transaction). The default is <code>False</code>.</p>
   */
  IncludeTransactionDetails?: boolean;
}

export namespace KafkaSettings {
  export const filterSensitiveLog = (obj: KafkaSettings): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information that describes an Amazon Kinesis Data Stream endpoint. This
 *          information includes the output format of records applied to the endpoint and details of
 *          transaction and control table data information.</p>
 */
export interface KinesisSettings {
  /**
   * <p>Provides detailed transaction information from the source database. This information
   *          includes a commit timestamp, a log position, and values for <code>transaction_id</code>,
   *          previous <code>transaction_id</code>, and <code>transaction_record_id</code> (the record
   *          offset within a transaction). The default is <code>False</code>.</p>
   */
  IncludeTransactionDetails?: boolean;

  /**
   * <p>Prefixes schema and table names to partition values, when the partition type is
   *             <code>primary-key-type</code>. Doing this increases data distribution among Kinesis
   *          shards. For example, suppose that a SysBench schema has thousands of tables and each table
   *          has only limited range for a primary key. In this case, the same primary key is sent from
   *          thousands of tables to the same shard, which causes throttling. The default is <code>False</code>.</p>
   */
  PartitionIncludeSchemaTable?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint.</p>
   */
  StreamArn?: string;

  /**
   * <p>Includes any data definition language (DDL) operations that change the table in the
   *          control data, such as <code>rename-table</code>, <code>drop-table</code>,
   *             <code>add-column</code>, <code>drop-column</code>, and <code>rename-column</code>. The
   *          default is <code>False</code>.</p>
   */
  IncludeTableAlterOperations?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) for the AWS Identity and Access Management (IAM) role
   *          that AWS DMS uses to write to the Kinesis data stream.</p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * <p>The output format for the records created on the endpoint. The message format is
   *          <code>JSON</code> (default) or <code>JSON_UNFORMATTED</code> (a single line with no tab).</p>
   */
  MessageFormat?: MessageFormatValue | string;

  /**
   * <p>Shows detailed control information for table definition, column definition, and table
   *          and column changes in the Kinesis message output. The default is <code>False</code>.</p>
   */
  IncludeControlDetails?: boolean;

  /**
   * <p>Shows the partition value within the Kinesis message output, unless the partition type
   *          is <code>schema-table-type</code>. The default is <code>False</code>.</p>
   */
  IncludePartitionValue?: boolean;
}

export namespace KinesisSettings {
  export const filterSensitiveLog = (obj: KinesisSettings): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information that defines a Microsoft SQL Server endpoint.</p>
 */
export interface MicrosoftSQLServerSettings {
  /**
   * <p>Endpoint connection user name.</p>
   */
  Username?: string;

  /**
   * <p>Fully qualified domain name of the endpoint.</p>
   */
  ServerName?: string;

  /**
   * <p>Database name for the endpoint.</p>
   */
  DatabaseName?: string;

  /**
   * <p>Endpoint connection password.</p>
   */
  Password?: string;

  /**
   * <p>Endpoint TCP port.</p>
   */
  Port?: number;
}

export namespace MicrosoftSQLServerSettings {
  export const filterSensitiveLog = (obj: MicrosoftSQLServerSettings): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export enum AuthMechanismValue {
  DEFAULT = "default",
  MONGODB_CR = "mongodb_cr",
  SCRAM_SHA_1 = "scram_sha_1",
}

export enum AuthTypeValue {
  NO = "no",
  PASSWORD = "password",
}

export enum NestingLevelValue {
  NONE = "none",
  ONE = "one",
}

/**
 * <p>Provides information that defines a MongoDB endpoint.</p>
 */
export interface MongoDbSettings {
  /**
   * <p>The AWS KMS key identifier that is used to encrypt the content on the replication
   *          instance. If you don't specify a value for the <code>KmsKeyId</code> parameter, then
   *          AWS DMS uses your default encryption key. AWS KMS creates the default encryption key for
   *          your AWS account. Your AWS account has a different default encryption key for each AWS
   *          Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p> Specifies the document ID. Use this setting when <code>NestingLevel</code> is set to
   *             <code>"none"</code>. </p>
   *          <p>Default value is <code>"false"</code>. </p>
   */
  ExtractDocId?: string;

  /**
   * <p> The port value for the MongoDB source endpoint. </p>
   */
  Port?: number;

  /**
   * <p> The authentication type you use to access the MongoDB source endpoint.</p>
   *          <p>When when set to <code>"no"</code>, user name and password parameters are not used and
   *          can be empty. </p>
   */
  AuthType?: AuthTypeValue | string;

  /**
   * <p> The password for the user account you use to access the MongoDB source endpoint.
   *       </p>
   */
  Password?: string;

  /**
   * <p> The name of the server on the MongoDB source endpoint. </p>
   */
  ServerName?: string;

  /**
   * <p> Specifies either document or table mode. </p>
   *          <p>Default value is <code>"none"</code>. Specify <code>"none"</code> to use document mode.
   *          Specify <code>"one"</code> to use table mode.</p>
   */
  NestingLevel?: NestingLevelValue | string;

  /**
   * <p>The user name you use to access the MongoDB source endpoint. </p>
   */
  Username?: string;

  /**
   * <p> The database name on the MongoDB source endpoint. </p>
   */
  DatabaseName?: string;

  /**
   * <p> The authentication mechanism you use to access the MongoDB source endpoint.</p>
   *          <p>For the default value, in MongoDB version 2.x, <code>"default"</code> is
   *             <code>"mongodb_cr"</code>. For MongoDB version 3.x or later, <code>"default"</code> is
   *             <code>"scram_sha_1"</code>. This setting isn't used when <code>AuthType</code> is
   *          set to <code>"no"</code>.</p>
   */
  AuthMechanism?: AuthMechanismValue | string;

  /**
   * <p> Indicates the number of documents to preview to determine the document organization.
   *          Use this setting when <code>NestingLevel</code> is set to <code>"one"</code>. </p>
   *          <p>Must be a positive value greater than <code>0</code>. Default value is
   *          <code>1000</code>.</p>
   */
  DocsToInvestigate?: string;

  /**
   * <p> The MongoDB database name. This setting isn't used when <code>AuthType</code> is
   *          set to <code>"no"</code>. </p>
   *          <p>The default is <code>"admin"</code>.</p>
   */
  AuthSource?: string;
}

export namespace MongoDbSettings {
  export const filterSensitiveLog = (obj: MongoDbSettings): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

/**
 * <p>Provides information that defines a MySQL endpoint.</p>
 */
export interface MySQLSettings {
  /**
   * <p>Endpoint TCP port.</p>
   */
  Port?: number;

  /**
   * <p>Endpoint connection user name.</p>
   */
  Username?: string;

  /**
   * <p>Database name for the endpoint.</p>
   */
  DatabaseName?: string;

  /**
   * <p>Fully qualified domain name of the endpoint.</p>
   */
  ServerName?: string;

  /**
   * <p>Endpoint connection password.</p>
   */
  Password?: string;
}

export namespace MySQLSettings {
  export const filterSensitiveLog = (obj: MySQLSettings): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

/**
 * <p>Provides information that defines an Amazon Neptune endpoint.</p>
 */
export interface NeptuneSettings {
  /**
   * <p>A folder path where you want AWS DMS to store migrated graph data in the S3 bucket
   *          specified by <code>S3BucketName</code>
   *          </p>
   */
  S3BucketFolder: string | undefined;

  /**
   * <p>The number of times for AWS DMS to retry a bulk load of migrated graph data to the
   *          Neptune target database before raising an error. The default is 5.</p>
   */
  MaxRetryCount?: number;

  /**
   * <p>The maximum size in kilobytes of migrated graph data stored in a .csv file before AWS
   *          DMS bulk-loads the data to the Neptune target database. The default is 1,048,576 KB. If the
   *          bulk load is successful, AWS DMS clears the bucket, ready to store the next batch of
   *          migrated graph data.</p>
   */
  MaxFileSize?: number;

  /**
   * <p>If you want AWS Identity and Access Management (IAM) authorization enabled for this
   *          endpoint, set this parameter to <code>true</code>. Then attach the appropriate IAM policy
   *          document to your service role specified by <code>ServiceAccessRoleArn</code>. The default
   *          is <code>false</code>.</p>
   */
  IamAuthEnabled?: boolean;

  /**
   * <p>The name of the Amazon S3 bucket where AWS DMS can temporarily store migrated graph data
   *          in .csv files before bulk-loading it to the Neptune target database. AWS DMS maps the SQL
   *          source data to graph data before storing it in these .csv files.</p>
   */
  S3BucketName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service role that you created for the Neptune
   *          target endpoint.
   *          For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.ServiceRole">Creating an IAM Service Role for Accessing Amazon Neptune as a Target</a> in the <i>AWS Database Migration Service User
   *             Guide. </i>
   *          </p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * <p>The number of milliseconds for AWS DMS to wait to retry a bulk-load of migrated graph
   *          data to the Neptune target database before raising an error. The default is 250.</p>
   */
  ErrorRetryDuration?: number;
}

export namespace NeptuneSettings {
  export const filterSensitiveLog = (obj: NeptuneSettings): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information that defines an Oracle endpoint.</p>
 */
export interface OracleSettings {
  /**
   * <p>Database name for the endpoint.</p>
   */
  DatabaseName?: string;

  /**
   * <p>Endpoint connection password.</p>
   */
  Password?: string;

  /**
   * <p>For an Oracle source endpoint, your ASM user name. You can set this value from the
   *             <code>asm_user</code> value. You set <code>asm_user</code> as part of the extra
   *          connection attribute string to access an Oracle server with Binary Reader that uses ASM.
   *          For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration">Configuration for change data capture (CDC) on an Oracle source
   *             database</a>.</p>
   */
  AsmUser?: string;

  /**
   * <p>For an Oracle source endpoint, the name of a key used for the transparent data
   *          encryption (TDE) of the columns and tablespaces in an Oracle source database that is
   *          encrypted using TDE. The key value is the value of the <code>SecurityDbEncryption</code>
   *          setting. For more information on setting the key name value of
   *             <code>SecurityDbEncryptionName</code>, see the information and example for setting the
   *             <code>securityDbEncryptionName</code> extra connection attribute in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.Encryption"> Supported encryption methods for using Oracle as a source for AWS
   *             DMS</a> in the <i>AWS Database Migration Service User
   *          Guide</i>.</p>
   */
  SecurityDbEncryptionName?: string;

  /**
   * <p>For an Oracle source endpoint, the transparent data encryption (TDE) password required
   *          by AWM DMS to access Oracle redo logs encrypted by TDE using Binary Reader. It is also the
   *                <code>
   *                <i>TDE_Password</i>
   *             </code> part of the comma-separated value you
   *          set to the <code>Password</code> request parameter when you create the endpoint. The
   *             <code>SecurityDbEncryptian</code> setting is related to this
   *             <code>SecurityDbEncryptionName</code> setting. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.Encryption"> Supported encryption methods for using Oracle as a source for AWS
   *             DMS</a> in the <i>AWS Database Migration Service User Guide</i>. </p>
   */
  SecurityDbEncryption?: string;

  /**
   * <p>For an Oracle source endpoint, your Oracle Automatic Storage Management (ASM) password.
   *          You can set this value from the <code>
   *                <i>asm_user_password</i>
   *             </code> value.
   *          You set this value as part of the comma-separated value that you set to the
   *             <code>Password</code> request parameter when you create the endpoint to access
   *          transaction logs using Binary Reader. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration">Configuration for change data capture (CDC) on an Oracle source
   *             database</a>.</p>
   */
  AsmPassword?: string;

  /**
   * <p>For an Oracle source endpoint, your ASM server address. You can set this value from the
   *             <code>asm_server</code> value. You set <code>asm_server</code> as part of the extra
   *          connection attribute string to access an Oracle server with Binary Reader that uses ASM.
   *          For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.CDC.Configuration">Configuration for change data capture (CDC) on an Oracle source
   *             database</a>.</p>
   */
  AsmServer?: string;

  /**
   * <p>Fully qualified domain name of the endpoint.</p>
   */
  ServerName?: string;

  /**
   * <p>Endpoint connection user name.</p>
   */
  Username?: string;

  /**
   * <p>Endpoint TCP port.</p>
   */
  Port?: number;
}

export namespace OracleSettings {
  export const filterSensitiveLog = (obj: OracleSettings): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
    ...(obj.SecurityDbEncryption && { SecurityDbEncryption: SENSITIVE_STRING }),
    ...(obj.AsmPassword && { AsmPassword: SENSITIVE_STRING }),
  });
}

/**
 * <p>Provides information that defines a PostgreSQL endpoint.</p>
 */
export interface PostgreSQLSettings {
  /**
   * <p>Endpoint connection user name.</p>
   */
  Username?: string;

  /**
   * <p>Fully qualified domain name of the endpoint.</p>
   */
  ServerName?: string;

  /**
   * <p>Endpoint connection password.</p>
   */
  Password?: string;

  /**
   * <p>Endpoint TCP port.</p>
   */
  Port?: number;

  /**
   * <p>Database name for the endpoint.</p>
   */
  DatabaseName?: string;
}

export namespace PostgreSQLSettings {
  export const filterSensitiveLog = (obj: PostgreSQLSettings): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export enum EncryptionModeValue {
  SSE_KMS = "sse-kms",
  SSE_S3 = "sse-s3",
}

/**
 * <p>Provides information that defines an Amazon Redshift endpoint.</p>
 */
export interface RedshiftSettings {
  /**
   * <p>A list of characters that you want to replace. Use with
   *          <code>ReplaceChars</code>.</p>
   */
  ReplaceInvalidChars?: string;

  /**
   * <p>The time format that you want to use. Valid values are <code>auto</code>
   *          (case-sensitive), <code>'timeformat_string'</code>, <code>'epochsecs'</code>, or
   *          <code>'epochmillisecs'</code>. It defaults to 10. Using <code>auto</code> recognizes
   *          most strings, even some that aren't supported when you use a time format string. </p>
   *          <p>If your date and time values use formats different from each other, set this parameter
   *          to <code>auto</code>. </p>
   */
  TimeFormat?: string;

  /**
   * <p>The location where the comma-separated value (.csv) files are stored before being
   *          uploaded to the S3 bucket. </p>
   */
  BucketFolder?: string;

  /**
   * <p>A value that specifies to remove surrounding quotation marks from strings in the
   *          incoming data. All characters within the quotation marks, including delimiters, are
   *          retained. Choose <code>true</code> to remove quotation marks. The default is
   *             <code>false</code>.</p>
   */
  RemoveQuotes?: boolean;

  /**
   * <p>The name of the Amazon Redshift data warehouse (service) that you are working
   *          with.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A value that specifies to replaces the invalid characters specified in
   *          <code>ReplaceInvalidChars</code>, substituting the specified characters instead. The
   *          default is <code>"?"</code>.</p>
   */
  ReplaceChars?: string;

  /**
   * <p>The AWS KMS key ID. If you are using <code>SSE_KMS</code> for the <code>EncryptionMode</code>,
   *          provide this key ID. The key that you use needs an attached policy that enables IAM user
   *          permissions and allows use of the key.</p>
   */
  ServerSideEncryptionKmsKeyId?: string;

  /**
   * <p>The name of the S3 bucket you want to use</p>
   */
  BucketName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift
   *          service.</p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * <p>A value that specifies to truncate data in columns to the appropriate number of
   *          characters, so that the data fits in the column. This parameter applies only to columns
   *          with a VARCHAR or CHAR data type, and rows with a size of 4 MB or less. Choose
   *             <code>true</code> to truncate data. The default is <code>false</code>.</p>
   */
  TruncateColumns?: boolean;

  /**
   * <p>The password for the user named in the <code>username</code> property.</p>
   */
  Password?: string;

  /**
   * <p>The number of threads used to upload a single file. This parameter accepts a value from
   *          1 through 64. It defaults to 10.</p>
   */
  FileTransferUploadStreams?: number;

  /**
   * <p>A value that sets the amount of time to wait (in milliseconds) before timing out,
   *          beginning from when you initially establish a connection.</p>
   */
  ConnectionTimeout?: number;

  /**
   * <p>The size of the write buffer to use in rows. Valid values range from 1 through 2,048.
   *          The default is 1,024. Use this setting to tune performance. </p>
   */
  WriteBufferSize?: number;

  /**
   * <p>A value that specifies to remove the trailing white space characters from a VARCHAR
   *          string. This parameter applies only to columns with a VARCHAR data type. Choose
   *             <code>true</code> to remove unneeded white space. The default is
   *          <code>false</code>.</p>
   */
  TrimBlanks?: boolean;

  /**
   * <p>Code to run after connecting. This parameter should contain the code itself, not the
   *          name of a file containing the code.</p>
   */
  AfterConnectScript?: string;

  /**
   * <p>The maximum size (in KB) of any .csv file used to transfer data to Amazon Redshift. This
   *          accepts a value from 1 through 1,048,576. It defaults to 32,768 KB (32 MB).</p>
   */
  MaxFileSize?: number;

  /**
   * <p>An Amazon Redshift user name for a registered user.</p>
   */
  Username?: string;

  /**
   * <p>The date format that you are using. Valid values are <code>auto</code> (case-sensitive),
   *          your date format string enclosed in quotes, or NULL. If this parameter is left unset
   *          (NULL), it defaults to a format of 'YYYY-MM-DD'. Using <code>auto</code> recognizes most
   *          strings, even some that aren't supported when you use a date format string. </p>
   *          <p>If your date and time values use formats different from each other, set this to
   *          <code>auto</code>. </p>
   */
  DateFormat?: string;

  /**
   * <p>The amount of time to wait (in milliseconds) before timing out, beginning from when you
   *          begin loading.</p>
   */
  LoadTimeout?: number;

  /**
   * <p>The name of the Amazon Redshift cluster you are using.</p>
   */
  ServerName?: string;

  /**
   * <p>The port number for Amazon Redshift. The default value is 5439.</p>
   */
  Port?: number;

  /**
   * <p>The type of server-side encryption that you want to use for your data. This encryption
   *          type is part of the endpoint settings or the extra connections attributes for Amazon S3.
   *          You can choose either <code>SSE_S3</code> (the default) or <code>SSE_KMS</code>. To use
   *             <code>SSE_S3</code>, create an AWS Identity and Access Management (IAM) role with a
   *          policy that allows <code>"arn:aws:s3:::*"</code> to use the following actions:
   *             <code>"s3:PutObject", "s3:ListBucket"</code>
   *          </p>
   */
  EncryptionMode?: EncryptionModeValue | string;

  /**
   * <p>A value that specifies whether AWS DMS should migrate empty CHAR and VARCHAR fields as
   *          NULL. A value of <code>true</code> sets empty CHAR and VARCHAR fields to null. The default
   *          is <code>false</code>.</p>
   */
  EmptyAsNull?: boolean;

  /**
   * <p>A value that indicates to allow any date format, including invalid formats such as
   *          00/00/00 00:00:00, to be loaded without generating an error. You can choose
   *             <code>true</code> or <code>false</code> (the default).</p>
   *          <p>This parameter applies only to TIMESTAMP and DATE columns. Always use ACCEPTANYDATE with
   *          the DATEFORMAT parameter. If the date format for the data doesn't match the DATEFORMAT
   *          specification, Amazon Redshift inserts a NULL value into that field. </p>
   */
  AcceptAnyDate?: boolean;
}

export namespace RedshiftSettings {
  export const filterSensitiveLog = (obj: RedshiftSettings): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

export enum CompressionTypeValue {
  GZIP = "gzip",
  NONE = "none",
}

export enum DataFormatValue {
  CSV = "csv",
  PARQUET = "parquet",
}

export enum EncodingTypeValue {
  PLAIN = "plain",
  PLAIN_DICTIONARY = "plain-dictionary",
  RLE_DICTIONARY = "rle-dictionary",
}

export enum ParquetVersionValue {
  PARQUET_1_0 = "parquet-1-0",
  PARQUET_2_0 = "parquet-2-0",
}

/**
 * <p>Settings for exporting data to Amazon S3. </p>
 */
export interface S3Settings {
  /**
   * <p>A value that when nonblank causes AWS DMS to add a column with timestamp information to
   *          the endpoint data for an Amazon S3 target.</p>
   *          <note>
   *             <p>AWS DMS supports the <code>TimestampColumnName</code> parameter in versions 3.1.4 and later.</p>
   *          </note>
   *          <p>DMS includes an additional <code>STRING</code> column in the
   *          .csv or .parquet object files of your migrated data when you set
   *          <code>TimestampColumnName</code> to a nonblank value.</p>
   *          <p>For a full load, each row of this timestamp column contains a
   *          timestamp for when the data was transferred from the source to
   *          the target by DMS. </p>
   *          <p>For a change data capture (CDC) load, each row of the timestamp column contains the
   *          timestamp for the commit of that row in the source
   *          database.</p>
   *          <p>The string format for this timestamp column value is
   *          <code>yyyy-MM-dd HH:mm:ss.SSSSSS</code>. By default, the
   *          precision of this value is in microseconds. For a CDC load, the
   *          rounding of the precision depends on the commit timestamp
   *          supported by DMS for the source database.</p>
   *          <p>When the <code>AddColumnName</code> parameter is set to <code>true</code>, DMS also
   *          includes a name for the timestamp column that you set with
   *          <code>TimestampColumnName</code>.</p>
   */
  TimestampColumnName?: string;

  /**
   * <p>An optional parameter to use GZIP to compress the target files. Set to GZIP to compress
   *          the target files. Either set this parameter to NONE (the default) or don't use it to leave the files uncompressed.
   *          This parameter applies to both .csv and .parquet file formats. </p>
   */
  CompressionType?: CompressionTypeValue | string;

  /**
   * <p>A value that specifies the precision of any <code>TIMESTAMP</code> column values that
   *          are written to an Amazon S3 object file in .parquet format.</p>
   *          <note>
   *             <p>AWS DMS supports the <code>ParquetTimestampInMillisecond</code> parameter in versions
   *             3.1.4 and later.</p>
   *          </note>
   *          <p>When <code>ParquetTimestampInMillisecond</code> is set to <code>true</code> or
   *             <code>y</code>, AWS DMS writes all <code>TIMESTAMP</code> columns in a .parquet
   *          formatted file with millisecond precision. Otherwise, DMS writes them with microsecond
   *          precision.</p>
   *          <p>Currently, Amazon Athena and AWS Glue can handle only
   *          millisecond precision for <code>TIMESTAMP</code> values. Set
   *          this parameter to <code>true</code> for S3 endpoint object
   *          files that are .parquet formatted only if you plan to query or process the data with Athena or AWS Glue.</p>
   *          <note>
   *
   *                <p>AWS DMS writes any <code>TIMESTAMP</code> column
   *                   values written to an S3 file in .csv format with
   *                   microsecond precision.</p>
   *
   *                <p>Setting <code>ParquetTimestampInMillisecond</code> has no effect on the string
   *             format of the timestamp column value that is inserted by setting the
   *                <code>TimestampColumnName</code> parameter.</p>
   *
   *          </note>
   */
  ParquetTimestampInMillisecond?: boolean;

  /**
   * <p>A value that enables statistics for Parquet pages and row groups. Choose
   *             <code>true</code> to enable statistics, <code>false</code> to disable. Statistics
   *          include <code>NULL</code>, <code>DISTINCT</code>, <code>MAX</code>, and <code>MIN</code>
   *          values. This parameter defaults to <code>true</code>. This value is used for
   *             .parquet file format only.</p>
   */
  EnableStatistics?: boolean;

  /**
   * <p>The format of the data that you want to use for output. You can choose one of the
   *          following: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>csv</code> : This is a row-based file format with comma-separated values
   *                (.csv). </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>parquet</code> : Apache Parquet (.parquet) is a columnar storage file format
   *                that features efficient compression and provides faster query response. </p>
   *             </li>
   *          </ul>
   */
  DataFormat?: DataFormatValue | string;

  /**
   * <p>The version of the Apache Parquet format that you want to use: <code>parquet_1_0</code>
   *          (the default) or <code>parquet_2_0</code>.</p>
   */
  ParquetVersion?: ParquetVersionValue | string;

  /**
   * <p> The delimiter used to separate columns in the source files. The default is a comma.
   *       </p>
   */
  CsvDelimiter?: string;

  /**
   * <p> An optional parameter to set a folder name in the S3 bucket. If provided, tables are
   *          created in the path
   *                <code>
   *                <i>bucketFolder</i>/<i>schema_name</i>/<i>table_name</i>/</code>.
   *          If this parameter isn't specified, then the path used is
   *                <code>
   *                <i>schema_name</i>/<i>table_name</i>/</code>. </p>
   */
  BucketFolder?: string;

  /**
   * <p>A value that enables a full load to write INSERT operations to the comma-separated value
   *          (.csv) output files only to indicate how the rows were added to the source database.</p>
   *          <note>
   *             <p>AWS DMS supports the <code>IncludeOpForFullLoad</code> parameter in versions 3.1.4 and
   *             later.</p>
   *          </note>
   *          <p>For full load, records can only be inserted. By default (the <code>false</code>
   *          setting), no information is recorded in these output files for a full load to indicate that
   *          the rows were inserted at the source database. If <code>IncludeOpForFullLoad</code> is set
   *          to <code>true</code> or <code>y</code>, the INSERT is recorded as an I annotation in the
   *          first field of the .csv file. This allows the format of your target records from a full
   *          load to be consistent with the target records from a CDC load.</p>
   *          <note>
   *             <p>This setting works together with the <code>CdcInsertsOnly</code> and the
   *                <code>CdcInsertsAndUpdates</code> parameters for output to .csv files only. For more
   *             information about how these settings work together, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps">Indicating Source DB Operations in Migrated S3 Data</a> in the <i>AWS
   *                Database Migration Service User Guide.</i>.</p>
   *          </note>
   */
  IncludeOpForFullLoad?: boolean;

  /**
   * <p>The type of encoding you are using: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RLE_DICTIONARY</code> uses a combination of bit-packing and run-length
   *                encoding to store repeated values more efficiently. This is the default.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PLAIN</code> doesn't use encoding at all. Values are stored as they
   *                are.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PLAIN_DICTIONARY</code> builds a dictionary of the values encountered in a
   *                given column. The dictionary is stored in a dictionary page for each column
   *                chunk.</p>
   *             </li>
   *          </ul>
   */
  EncodingType?: EncodingTypeValue | string;

  /**
   * <p>A value that enables a change data capture (CDC) load to write INSERT and UPDATE
   *          operations to .csv or .parquet (columnar storage) output files. The default setting is
   *          <code>false</code>, but when <code>CdcInsertsAndUpdates</code> is set to
   *          <code>true</code>or <code>y</code>, INSERTs and UPDATEs from the
   *          source database are migrated to the .csv or .parquet file. </p>
   *          <p>For .csv file format only, how these INSERTs and UPDATEs are recorded depends on the
   *          value of the <code>IncludeOpForFullLoad</code> parameter. If
   *             <code>IncludeOpForFullLoad</code> is set to <code>true</code>, the first field of every
   *          CDC record is set to either <code>I</code> or <code>U</code> to indicate INSERT and UPDATE
   *          operations at the source. But if <code>IncludeOpForFullLoad</code> is set to
   *             <code>false</code>, CDC records are written without an indication of INSERT or UPDATE
   *          operations at the source. For more information about how these settings work together, see
   *             <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps">Indicating Source DB Operations in Migrated S3 Data</a> in the <i>AWS
   *             Database Migration Service User Guide.</i>.</p>
   *          <note>
   *
   *             <p>AWS DMS supports the use of the <code>CdcInsertsAndUpdates</code> parameter in
   *             versions 3.3.1 and later.</p>
   *
   *             <p>
   *                <code>CdcInsertsOnly</code> and <code>CdcInsertsAndUpdates</code> can't
   *             both be set to <code>true</code> for the same endpoint. Set either
   *             <code>CdcInsertsOnly</code> or <code>CdcInsertsAndUpdates</code> to <code>true</code>
   *             for the same endpoint, but not both.</p>
   *
   *          </note>
   */
  CdcInsertsAndUpdates?: boolean;

  /**
   * <p> The external table definition. </p>
   */
  ExternalTableDefinition?: string;

  /**
   * <p>If you are using <code>SSE_KMS</code> for the <code>EncryptionMode</code>, provide the
   *          AWS KMS key ID. The key that you use needs an attached policy that enables AWS Identity and
   *          Access Management (IAM) user permissions and allows use of the key.</p>
   *          <p>Here is a CLI example: <code>aws dms create-endpoint --endpoint-identifier
   *                <i>value</i> --endpoint-type target --engine-name s3 --s3-settings
   *                ServiceAccessRoleArn=<i>value</i>,BucketFolder=<i>value</i>,BucketName=<i>value</i>,EncryptionMode=SSE_KMS,ServerSideEncryptionKmsKeyId=<i>value</i>
   *             </code>
   *          </p>
   */
  ServerSideEncryptionKmsKeyId?: string;

  /**
   * <p> The name of the S3 bucket. </p>
   */
  BucketName?: string;

  /**
   * <p>The size of one data page in bytes. This parameter defaults to 1024 * 1024 bytes (1 MiB).
   *          This number is used for .parquet file format only. </p>
   */
  DataPageSize?: number;

  /**
   * <p> The Amazon Resource Name (ARN) used by the service access IAM role. </p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * <p>A value that enables a change data capture (CDC) load to write only INSERT operations to
   *          .csv or columnar storage (.parquet) output files. By default (the
   *             <code>false</code> setting), the first field in a .csv or .parquet record contains the
   *          letter I (INSERT), U (UPDATE), or D (DELETE). These values indicate whether the row was
   *          inserted, updated, or deleted at the source database for a CDC load to the target.</p>
   *          <p>If <code>CdcInsertsOnly</code> is set to <code>true</code> or <code>y</code>, only
   *          INSERTs from the source database are migrated to the .csv or .parquet file. For .csv format
   *          only, how these INSERTs are recorded depends on the value of
   *             <code>IncludeOpForFullLoad</code>. If <code>IncludeOpForFullLoad</code> is set to
   *             <code>true</code>, the first field of every CDC record is set to I to indicate the
   *          INSERT operation at the source. If <code>IncludeOpForFullLoad</code> is set to
   *             <code>false</code>, every CDC record is written without a first field to indicate the
   *          INSERT operation at the source. For more information about how these settings work
   *          together, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps">Indicating Source DB Operations in Migrated S3 Data</a> in the <i>AWS
   *             Database Migration Service User Guide.</i>.</p>
   *
   *          <note>
   *
   *                <p>AWS DMS supports the interaction described preceding between the
   *                <code>CdcInsertsOnly</code> and <code>IncludeOpForFullLoad</code> parameters in
   *             versions 3.1.4 and later. </p>
   *
   *                <p>
   *                <code>CdcInsertsOnly</code> and <code>CdcInsertsAndUpdates</code> can't
   *             both be set to <code>true</code> for the same endpoint. Set either
   *                <code>CdcInsertsOnly</code> or <code>CdcInsertsAndUpdates</code> to <code>true</code>
   *             for the same endpoint, but not both.</p>
   *
   *          </note>
   */
  CdcInsertsOnly?: boolean;

  /**
   * <p>The maximum size of an encoded dictionary page of a column. If the dictionary page
   *          exceeds this, this column is stored using an encoding type of <code>PLAIN</code>. This
   *          parameter defaults to 1024 * 1024 bytes (1 MiB), the maximum size of a dictionary page
   *          before it reverts to <code>PLAIN</code> encoding. This size is used for
   *            .parquet file format only. </p>
   */
  DictPageSizeLimit?: number;

  /**
   * <p> The delimiter used to separate rows in the source files. The default is a carriage
   *          return (<code>\n</code>). </p>
   */
  CsvRowDelimiter?: string;

  /**
   * <p>The number of rows in a row group. A smaller row group size provides faster reads. But
   *          as the number of row groups grows, the slower writes become. This parameter defaults to
   *          10,000 rows. This number is used for .parquet file format only. </p>
   *          <p>If you choose a value larger than the maximum, <code>RowGroupLength</code> is set to the
   *          max row group length in bytes (64 * 1024 * 1024). </p>
   */
  RowGroupLength?: number;

  /**
   * <p>The type of server-side encryption that you want to use for your data. This encryption
   *          type is part of the endpoint settings or the extra connections attributes for Amazon S3.
   *          You can choose either <code>SSE_S3</code> (the default) or <code>SSE_KMS</code>. To use
   *             <code>SSE_S3</code>, you need an AWS Identity and Access Management (IAM) role with
   *          permission to allow <code>"arn:aws:s3:::dms-*"</code> to use the following actions:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>s3:CreateBucket</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:ListBucket</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:DeleteBucket</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:GetBucketLocation</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:GetObject</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:PutObject</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:DeleteObject</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:GetObjectVersion</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:GetBucketPolicy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:PutBucketPolicy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>s3:DeleteBucketPolicy</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  EncryptionMode?: EncryptionModeValue | string;
}

export namespace S3Settings {
  export const filterSensitiveLog = (obj: S3Settings): any => ({
    ...obj,
  });
}

export enum DmsSslModeValue {
  NONE = "none",
  REQUIRE = "require",
  VERIFY_CA = "verify-ca",
  VERIFY_FULL = "verify-full",
}

/**
 * <p>Provides information that defines a SAP ASE endpoint.</p>
 */
export interface SybaseSettings {
  /**
   * <p>Endpoint TCP port.</p>
   */
  Port?: number;

  /**
   * <p>Database name for the endpoint.</p>
   */
  DatabaseName?: string;

  /**
   * <p>Endpoint connection user name.</p>
   */
  Username?: string;

  /**
   * <p>Fully qualified domain name of the endpoint.</p>
   */
  ServerName?: string;

  /**
   * <p>Endpoint connection password.</p>
   */
  Password?: string;
}

export namespace SybaseSettings {
  export const filterSensitiveLog = (obj: SybaseSettings): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

/**
 * <p></p>
 */
export interface CreateEndpointMessage {
  /**
   * <p>Provides information that defines an Amazon Redshift endpoint.</p>
   */
  RedshiftSettings?: RedshiftSettings;

  /**
   * <p>One or more tags to be assigned to the endpoint.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name of the server where the endpoint database resides.</p>
   */
  ServerName?: string;

  /**
   * <p>Additional attributes associated with the connection. Each attribute is specified as a
   *          name-value pair associated by an equal sign (=). Multiple attributes are separated by a
   *          semicolon (;) with no additional white space. For information on the attributes available
   *          for connecting your source or target endpoint, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Endpoints.html">Working with
   *             AWS DMS Endpoints</a> in the <i>AWS Database Migration Service User
   *             Guide.</i>
   *          </p>
   */
  ExtraConnectionAttributes?: string;

  /**
   * <p>Settings in JSON format for the source MongoDB endpoint. For more information about the
   *          available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html#CHAP_Source.MongoDB.Configuration">Using MongoDB as a Target for AWS Database Migration Service</a> in the
   *             <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  MongoDbSettings?: MongoDbSettings;

  /**
   * <p>The Amazon Resource Name (ARN) for the certificate.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The password to be used to log in to the endpoint database.</p>
   */
  Password?: string;

  /**
   * <p>Settings in JSON format for the source and target SAP ASE endpoint. For information
   *          about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SAP.ConnectionAttrib">Extra connection attributes
   *             when using SAP ASE as a source for AWS DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SAP.ConnectionAttrib">Extra connection attributes
   *             when using SAP ASE as a target for AWS DMS</a> in the <i>AWS Database
   *             Migration Service User Guide.</i>
   *          </p>
   */
  SybaseSettings?: SybaseSettings;

  /**
   * <p>An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then
   *            AWS DMS uses your default encryption key.</p>
   *          <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account has a
   *          different default encryption key for each AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The name of the endpoint database.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The type of engine for the endpoint. Valid values, depending on the
   *          <code>EndpointType</code> value, include <code>"mysql"</code>, <code>"oracle"</code>,
   *          <code>"postgres"</code>, <code>"mariadb"</code>, <code>"aurora"</code>,
   *          <code>"aurora-postgresql"</code>, <code>"redshift"</code>, <code>"s3"</code>,
   *          <code>"db2"</code>, <code>"azuredb"</code>, <code>"sybase"</code>, <code>"dynamodb"</code>, <code>"mongodb"</code>,
   *          <code>"kinesis"</code>, <code>"kafka"</code>, <code>"elasticsearch"</code>, <code>"documentdb"</code>,
   *          <code>"sqlserver"</code>, and <code>"neptune"</code>.</p>
   */
  EngineName: string | undefined;

  /**
   * <p>Settings in JSON format for the target Elasticsearch endpoint. For more information
   *          about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Elasticsearch.html#CHAP_Target.Elasticsearch.Configuration">Extra Connection Attributes When Using Elasticsearch as a Target for AWS DMS</a> in
   *          the <i>AWS Database Migration Service User Guide</i>.</p>
   */
  ElasticsearchSettings?: ElasticsearchSettings;

  /**
   * <p>Settings in JSON format for the target Amazon DynamoDB endpoint. For information about other
   *             available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB.html">Using Object Mapping to Migrate
   *             Data to DynamoDB</a> in the <i>AWS Database Migration Service User
   *             Guide.</i>
   *          </p>
   */
  DynamoDbSettings?: DynamoDbSettings;

  /**
   * <p>The user name to be used to log in to the endpoint database.</p>
   */
  Username?: string;

  /**
   * <p>Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For
   *          more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html">Using Amazon Kinesis Data Streams
   *             as a Target for AWS Database Migration Service</a> in the <i>AWS Database Migration Service User
   *             Guide.</i>
   *          </p>
   */
  KinesisSettings?: KinesisSettings;

  /**
   * <p>The external table definition. </p>
   */
  ExternalTableDefinition?: string;

  /**
   * <p>Settings in JSON format for the source and target MySQL endpoint. For information about
   *          other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.ConnectionAttrib">Extra connection attributes
   *             when using MySQL as a source for AWS DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.MySQL.ConnectionAttrib">Extra connection attributes when using a MySQL-compatible database as a target for AWS DMS</a> in
   *          the <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  MySQLSettings?: MySQLSettings;

  /**
   * <p>The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is <code>none</code>
   *          </p>
   */
  SslMode?: DmsSslModeValue | string;

  /**
   * <p>The type of endpoint.  Valid values are <code>source</code> and <code>target</code>.</p>
   */
  EndpointType: ReplicationEndpointTypeValue | string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) for the service access role that you want to use to
   *          create the endpoint. </p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * <p>Settings in JSON format for the source and target PostgreSQL endpoint. For information
   *          about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.ConnectionAttrib">Extra connection
   *             attributes when using PostgreSQL as a source for AWS DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.PostgreSQL.ConnectionAttrib">
   *                Extra connection attributes when using PostgreSQL as a target for AWS DMS</a> in the
   *             <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  PostgreSQLSettings?: PostgreSQLSettings;

  /**
   * <p>The database endpoint identifier. Identifiers must begin with a letter and must contain only
   *          ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two
   *          consecutive hyphens.</p>
   */
  EndpointIdentifier: string | undefined;

  /**
   * <p>Settings in JSON format for the source and target Microsoft SQL Server endpoint. For
   *          information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SQLServer.ConnectionAttrib">Extra connection
   *             attributes when using SQL Server as a source for AWS DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SQLServer.ConnectionAttrib">
   *             Extra connection attributes when using SQL Server as a target for AWS DMS</a> in the
   *             <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings;

  /**
   * <p>Settings in JSON format for the source and target Oracle endpoint. For information about
   *          other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.ConnectionAttrib">Extra connection attributes
   *             when using Oracle as a source for AWS DMS</a> and
   *             <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Oracle.ConnectionAttrib">
   *             Extra connection attributes when using Oracle as a target for AWS DMS</a>
   *             in the <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  OracleSettings?: OracleSettings;

  /**
   * <p>Settings in JSON format for the target Apache Kafka endpoint. For more information about
   *          the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html">Using Apache Kafka as a Target for
   *             AWS Database Migration Service</a> in the <i>AWS Database Migration Service User
   *             Guide.</i>
   *          </p>
   */
  KafkaSettings?: KafkaSettings;

  /**
   * <p>The port used by the endpoint database.</p>
   */
  Port?: number;

  /**
   * <p>Settings in JSON format for the target Amazon Neptune endpoint.
   *          For more information
   *          about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.EndpointSettings">Specifying Endpoint Settings for Amazon Neptune as a Target</a>
   *             in the <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  NeptuneSettings?: NeptuneSettings;

  /**
   * <p>The settings in JSON format for the DMS transfer type of source endpoint. </p>
   *          <p>Possible settings include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ServiceAccessRoleArn</code> - The IAM role that has permission to access the
   *                Amazon S3 bucket.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BucketName</code> - The name of the S3 bucket to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CompressionType</code> - An optional parameter to use GZIP to compress the
   *                target files. To use GZIP, set this value to <code>NONE</code> (the default). To keep
   *                the files uncompressed, don't use this value.</p>
   *             </li>
   *          </ul>
   *          <p>Shorthand syntax for these settings is as follows:
   *             <code>ServiceAccessRoleArn=string,BucketName=string,CompressionType=string</code>
   *          </p>
   *          <p>JSON syntax for these settings is as follows: <code>{ "ServiceAccessRoleArn":
   *             "string", "BucketName": "string", "CompressionType": "none"|"gzip" } </code>
   *          </p>
   */
  DmsTransferSettings?: DmsTransferSettings;

  /**
   * <p>Settings in JSON format for the target Amazon S3 endpoint. For more information about
   *          the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring">Extra
   *             Connection Attributes When Using Amazon S3 as a Target for AWS DMS</a> in the
   *             <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  S3Settings?: S3Settings;

  /**
   * <p>Settings in JSON format for the source IBM Db2 LUW endpoint. For information about other
   *          available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DB2.ConnectionAttrib">Extra connection attributes
   *             when using Db2 LUW as a source for AWS DMS</a> in the <i>AWS Database
   *             Migration Service User Guide.</i>
   *          </p>
   */
  IBMDb2Settings?: IBMDb2Settings;
}

export namespace CreateEndpointMessage {
  export const filterSensitiveLog = (obj: CreateEndpointMessage): any => ({
    ...obj,
    ...(obj.RedshiftSettings && { RedshiftSettings: RedshiftSettings.filterSensitiveLog(obj.RedshiftSettings) }),
    ...(obj.MongoDbSettings && { MongoDbSettings: MongoDbSettings.filterSensitiveLog(obj.MongoDbSettings) }),
    ...(obj.Password && { Password: SENSITIVE_STRING }),
    ...(obj.SybaseSettings && { SybaseSettings: SybaseSettings.filterSensitiveLog(obj.SybaseSettings) }),
    ...(obj.MySQLSettings && { MySQLSettings: MySQLSettings.filterSensitiveLog(obj.MySQLSettings) }),
    ...(obj.PostgreSQLSettings && {
      PostgreSQLSettings: PostgreSQLSettings.filterSensitiveLog(obj.PostgreSQLSettings),
    }),
    ...(obj.MicrosoftSQLServerSettings && {
      MicrosoftSQLServerSettings: MicrosoftSQLServerSettings.filterSensitiveLog(obj.MicrosoftSQLServerSettings),
    }),
    ...(obj.OracleSettings && { OracleSettings: OracleSettings.filterSensitiveLog(obj.OracleSettings) }),
    ...(obj.IBMDb2Settings && { IBMDb2Settings: IBMDb2Settings.filterSensitiveLog(obj.IBMDb2Settings) }),
  });
}

/**
 * <p>Describes an endpoint of a database instance in response to operations such as the
 *          following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>CreateEndpoint</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeEndpoint</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeEndpointTypes</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ModifyEndpoint</code>
 *                </p>
 *             </li>
 *          </ul>
 */
export interface Endpoint {
  /**
   * <p>The database engine name. Valid values, depending on the EndpointType, include
   *             <code>"mysql"</code>, <code>"oracle"</code>, <code>"postgres"</code>,
   *             <code>"mariadb"</code>, <code>"aurora"</code>, <code>"aurora-postgresql"</code>,
   *             <code>"redshift"</code>, <code>"s3"</code>, <code>"db2"</code>, <code>"azuredb"</code>,
   *             <code>"sybase"</code>, <code>"dynamodb"</code>, <code>"mongodb"</code>,
   *             <code>"kinesis"</code>, <code>"kafka"</code>, <code>"elasticsearch"</code>,
   *             <code>"documentdb"</code>, <code>"sqlserver"</code>, and <code>"neptune"</code>.</p>
   */
  EngineName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn?: string;

  /**
   * <p> Value returned by a call to CreateEndpoint that can be used for cross-account
   *          validation. Use it on a subsequent call to CreateEndpoint to create the endpoint with a
   *          cross-account. </p>
   */
  ExternalId?: string;

  /**
   * <p>The settings in JSON format for the DMS transfer type of source endpoint. </p>
   *          <p>Possible settings include the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ServiceAccessRoleArn</code> - The IAM role that has permission to access the
   *                Amazon S3 bucket.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BucketName</code> - The name of the S3 bucket to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CompressionType</code> - An optional parameter to use GZIP to compress the
   *                target files. To use GZIP, set this value to <code>NONE</code> (the default). To keep
   *                the files uncompressed, don't use this value.</p>
   *             </li>
   *          </ul>
   *          <p>Shorthand syntax for these settings is as follows:
   *             <code>ServiceAccessRoleArn=string,BucketName=string,CompressionType=string</code>
   *          </p>
   *          <p>JSON syntax for these settings is as follows: <code>{ "ServiceAccessRoleArn":
   *             "string", "BucketName": "string", "CompressionType": "none"|"gzip" } </code>
   *          </p>
   */
  DmsTransferSettings?: DmsTransferSettings;

  /**
   * <p>The SSL mode used to connect to the endpoint. The default value is <code>none</code>.</p>
   */
  SslMode?: DmsSslModeValue | string;

  /**
   * <p>The type of endpoint.  Valid values are <code>source</code> and <code>target</code>.</p>
   */
  EndpointType?: ReplicationEndpointTypeValue | string;

  /**
   * <p>The settings for the PostgreSQL source and target endpoint. For more information, see
   *          the <code>PostgreSQLSettings</code> structure.</p>
   */
  PostgreSQLSettings?: PostgreSQLSettings;

  /**
   * <p>The status of the endpoint.</p>
   */
  Status?: string;

  /**
   * <p>The settings for the Amazon Kinesis target endpoint. For more information, see the
   *             <code>KinesisSettings</code> structure.</p>
   */
  KinesisSettings?: KinesisSettings;

  /**
   * <p>The database endpoint identifier. Identifiers must begin with a letter and must contain
   *          only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two
   *          consecutive hyphens.</p>
   */
  EndpointIdentifier?: string;

  /**
   * <p>An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then
   *            AWS DMS uses your default encryption key.</p>
   *          <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account has a
   *          different default encryption key for each AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Additional connection attributes used to connect to the endpoint.</p>
   */
  ExtraConnectionAttributes?: string;

  /**
   * <p>The user name used to connect to the endpoint.</p>
   */
  Username?: string;

  /**
   * <p>The external table definition.</p>
   */
  ExternalTableDefinition?: string;

  /**
   * <p>The settings for the DynamoDB target endpoint. For more information, see the
   *             <code>DynamoDBSettings</code> structure.</p>
   */
  DynamoDbSettings?: DynamoDbSettings;

  /**
   * <p>The settings for the SAP ASE source and target endpoint. For more information, see the
   *             <code>SybaseSettings</code> structure.</p>
   */
  SybaseSettings?: SybaseSettings;

  /**
   * <p>The name of the database at the endpoint.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) used for SSL connection to the endpoint.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The settings for the MongoDB source endpoint. For more information, see the
   *             <code>MongoDbSettings</code> structure.</p>
   */
  MongoDbSettings?: MongoDbSettings;

  /**
   * <p>The name of the server at the endpoint.</p>
   */
  ServerName?: string;

  /**
   * <p>The settings for the Elasticsearch source endpoint. For more information, see the
   *             <code>ElasticsearchSettings</code> structure.</p>
   */
  ElasticsearchSettings?: ElasticsearchSettings;

  /**
   * <p>The settings for the Oracle source and target endpoint. For more information, see the
   *             <code>OracleSettings</code> structure.</p>
   */
  OracleSettings?: OracleSettings;

  /**
   * <p>The port value used to access the endpoint.</p>
   */
  Port?: number;

  /**
   * <p>The settings for the Apache Kafka target endpoint. For more information, see the
   *          <code>KafkaSettings</code> structure.</p>
   */
  KafkaSettings?: KafkaSettings;

  /**
   * <p>The Amazon Resource Name (ARN) used by the service access IAM role.</p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * <p>The expanded name for the engine name. For example, if the <code>EngineName</code>
   *          parameter is "aurora," this value would be "Amazon Aurora MySQL."</p>
   */
  EngineDisplayName?: string;

  /**
   * <p>The settings for the Microsoft SQL Server source and target endpoint. For more
   *          information, see the <code>MicrosoftSQLServerSettings</code> structure.</p>
   */
  MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings;

  /**
   * <p>The settings for the MySQL source and target endpoint. For more information, see the
   *             <code>MySQLSettings</code> structure.</p>
   */
  MySQLSettings?: MySQLSettings;

  /**
   * <p>The settings for the S3 target endpoint. For more information, see the
   *             <code>S3Settings</code> structure.</p>
   */
  S3Settings?: S3Settings;

  /**
   * <p>The settings for the Amazon Neptune target endpoint. For more information, see the
   *          <code>NeptuneSettings</code> structure.</p>
   */
  NeptuneSettings?: NeptuneSettings;

  /**
   * <p>The settings for the IBM Db2 LUW source endpoint. For more information, see the
   *             <code>IBMDb2Settings</code> structure.
   *       </p>
   */
  IBMDb2Settings?: IBMDb2Settings;

  /**
   * <p>Settings for the Amazon Redshift endpoint.</p>
   */
  RedshiftSettings?: RedshiftSettings;
}

export namespace Endpoint {
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj,
    ...(obj.PostgreSQLSettings && {
      PostgreSQLSettings: PostgreSQLSettings.filterSensitiveLog(obj.PostgreSQLSettings),
    }),
    ...(obj.SybaseSettings && { SybaseSettings: SybaseSettings.filterSensitiveLog(obj.SybaseSettings) }),
    ...(obj.MongoDbSettings && { MongoDbSettings: MongoDbSettings.filterSensitiveLog(obj.MongoDbSettings) }),
    ...(obj.OracleSettings && { OracleSettings: OracleSettings.filterSensitiveLog(obj.OracleSettings) }),
    ...(obj.MicrosoftSQLServerSettings && {
      MicrosoftSQLServerSettings: MicrosoftSQLServerSettings.filterSensitiveLog(obj.MicrosoftSQLServerSettings),
    }),
    ...(obj.MySQLSettings && { MySQLSettings: MySQLSettings.filterSensitiveLog(obj.MySQLSettings) }),
    ...(obj.IBMDb2Settings && { IBMDb2Settings: IBMDb2Settings.filterSensitiveLog(obj.IBMDb2Settings) }),
    ...(obj.RedshiftSettings && { RedshiftSettings: RedshiftSettings.filterSensitiveLog(obj.RedshiftSettings) }),
  });
}

/**
 * <p></p>
 */
export interface CreateEndpointResponse {
  /**
   * <p>The endpoint that was created.</p>
   */
  Endpoint?: Endpoint;
}

export namespace CreateEndpointResponse {
  export const filterSensitiveLog = (obj: CreateEndpointResponse): any => ({
    ...obj,
    ...(obj.Endpoint && { Endpoint: Endpoint.filterSensitiveLog(obj.Endpoint) }),
  });
}

/**
 * <p>AWS DMS cannot access the AWS KMS key.</p>
 */
export interface KMSKeyNotAccessibleFault extends __SmithyException, $MetadataBearer {
  name: "KMSKeyNotAccessibleFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace KMSKeyNotAccessibleFault {
  export const filterSensitiveLog = (obj: KMSKeyNotAccessibleFault): any => ({
    ...obj,
  });
}

/**
 * <p>The resource you are attempting to create already exists.</p>
 */
export interface ResourceAlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;

  resourceArn?: string;
}

export namespace ResourceAlreadyExistsFault {
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsFault): any => ({
    ...obj,
  });
}

/**
 * <p>The quota for this resource quota has been exceeded.</p>
 */
export interface ResourceQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "ResourceQuotaExceededFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace ResourceQuotaExceededFault {
  export const filterSensitiveLog = (obj: ResourceQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateEventSubscriptionMessage {
  /**
   * <p>A list of identifiers for which AWS DMS provides notification events.</p>
   *          <p>If you don't specify a value, notifications are provided for all sources.</p>
   *         <p>If you specify multiple values, they must be of the same type. For example, if you
   *             specify a database instance ID, then all of the other values must be database instance
   *             IDs.</p>
   */
  SourceIds?: string[];

  /**
   * <p>The name of the AWS DMS event notification subscription. This name must be less than 255 characters.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * <p>A list of event categories for a source type that you want to subscribe to. For more
   *            information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and
   *                Notifications</a> in the <i>AWS Database Migration Service User
   *                    Guide.</i>
   *          </p>
   */
  EventCategories?: string[];

  /**
   * <p> A Boolean value; set to <code>true</code> to activate the subscription, or set to
   *             <code>false</code> to create the subscription but not activate it. </p>
   */
  Enabled?: boolean;

  /**
   * <p> The type of AWS DMS resource that generates the events. For example, if you want to be
   *          notified of events generated by a replication instance, you set this parameter to
   *             <code>replication-instance</code>. If this value isn't specified, all events are
   *          returned. </p>
   *          <p>Valid values: <code>replication-instance</code> | <code>replication-task</code>
   *          </p>
   */
  SourceType?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification.
   *          The ARN is created by Amazon SNS when you create a topic and subscribe to it. </p>
   */
  SnsTopicArn: string | undefined;

  /**
   * <p>One or more tags to be assigned to the event subscription.</p>
   */
  Tags?: Tag[];
}

export namespace CreateEventSubscriptionMessage {
  export const filterSensitiveLog = (obj: CreateEventSubscriptionMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an event notification subscription created by the <code>CreateEventSubscription</code>
 *          operation.</p>
 */
export interface EventSubscription {
  /**
   * <p>Boolean value that indicates if the event subscription is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>The topic ARN of the AWS DMS event notification subscription.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>The AWS DMS event notification subscription Id.</p>
   */
  CustSubscriptionId?: string;

  /**
   * <p>The AWS customer account associated with the AWS DMS event notification
   *          subscription.</p>
   */
  CustomerAwsId?: string;

  /**
   * <p>The time the AWS DMS event notification subscription was created.</p>
   */
  SubscriptionCreationTime?: string;

  /**
   * <p>A lists of event categories.</p>
   */
  EventCategoriesList?: string[];

  /**
   * <p> The type of AWS DMS resource that generates events. </p>
   *          <p>Valid values: replication-instance | replication-server | security-group |
   *          replication-task</p>
   */
  SourceType?: string;

  /**
   * <p>A list of source Ids for the event subscription.</p>
   */
  SourceIdsList?: string[];

  /**
   * <p>The status of the AWS DMS event notification subscription.</p>
   *          <p>Constraints:</p>
   *          <p>Can be one of the following: creating | modifying | deleting | active | no-permission |
   *          topic-not-exist</p>
   *          <p>The status "no-permission" indicates that AWS DMS no longer has permission to post to
   *          the SNS topic. The status "topic-not-exist" indicates that the topic was deleted after the
   *          subscription was created.</p>
   */
  Status?: string;
}

export namespace EventSubscription {
  export const filterSensitiveLog = (obj: EventSubscription): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateEventSubscriptionResponse {
  /**
   * <p>The event subscription that was created.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace CreateEventSubscriptionResponse {
  export const filterSensitiveLog = (obj: CreateEventSubscriptionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The ciphertext references a key that doesn't exist or that the DMS account doesn't have access to.</p>
 */
export interface KMSAccessDeniedFault extends __SmithyException, $MetadataBearer {
  name: "KMSAccessDeniedFault";
  $fault: "client";
  message?: string;
}

export namespace KMSAccessDeniedFault {
  export const filterSensitiveLog = (obj: KMSAccessDeniedFault): any => ({
    ...obj,
  });
}

/**
 * <p>The specified master key (CMK) isn't enabled.</p>
 */
export interface KMSDisabledFault extends __SmithyException, $MetadataBearer {
  name: "KMSDisabledFault";
  $fault: "client";
  message?: string;
}

export namespace KMSDisabledFault {
  export const filterSensitiveLog = (obj: KMSDisabledFault): any => ({
    ...obj,
  });
}

/**
 * <p>The state of the specified AWS KMS resource isn't valid for this request.</p>
 */
export interface KMSInvalidStateFault extends __SmithyException, $MetadataBearer {
  name: "KMSInvalidStateFault";
  $fault: "client";
  message?: string;
}

export namespace KMSInvalidStateFault {
  export const filterSensitiveLog = (obj: KMSInvalidStateFault): any => ({
    ...obj,
  });
}

/**
 * <p>The specified AWS KMS entity or resource can't be found.</p>
 */
export interface KMSNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "KMSNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace KMSNotFoundFault {
  export const filterSensitiveLog = (obj: KMSNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p>This request triggered AWS KMS request throttling.</p>
 */
export interface KMSThrottlingFault extends __SmithyException, $MetadataBearer {
  name: "KMSThrottlingFault";
  $fault: "client";
  message?: string;
}

export namespace KMSThrottlingFault {
  export const filterSensitiveLog = (obj: KMSThrottlingFault): any => ({
    ...obj,
  });
}

/**
 * <p>The SNS topic is invalid.</p>
 */
export interface SNSInvalidTopicFault extends __SmithyException, $MetadataBearer {
  name: "SNSInvalidTopicFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace SNSInvalidTopicFault {
  export const filterSensitiveLog = (obj: SNSInvalidTopicFault): any => ({
    ...obj,
  });
}

/**
 * <p>You are not authorized for the SNS subscription.</p>
 */
export interface SNSNoAuthorizationFault extends __SmithyException, $MetadataBearer {
  name: "SNSNoAuthorizationFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace SNSNoAuthorizationFault {
  export const filterSensitiveLog = (obj: SNSNoAuthorizationFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateReplicationInstanceMessage {
  /**
   * <p>A subnet group to associate with the replication instance.</p>
   */
  ReplicationSubnetGroupIdentifier?: string;

  /**
   * <p>One or more tags to be assigned to the replication instance.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal
   *          Coordinated Time (UTC).</p>
   *          <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code>
   *          </p>
   *          <p>Default: A 30-minute window selected at random from an 8-hour block of time per AWS
   *          Region, occurring on a random day of the week.</p>
   *          <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun</p>
   *          <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A value that indicates whether minor engine upgrades are applied automatically to the
   *          replication instance during the maintenance window. This parameter defaults to
   *             <code>true</code>.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The compute and memory capacity of the replication instance as defined for the specified
   *          replication instance class. For example to specify the instance class dms.c4.large, set this parameter to <code>"dms.c4.large"</code>.</p>
   *          <p>For more information on the settings and capacities for the available replication instance classes, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth">
   *             Selecting the right AWS DMS replication instance for your migration</a>.
   *       </p>
   */
  ReplicationInstanceClass: string | undefined;

  /**
   * <p> Specifies the accessibility options for the replication instance. A value of
   *             <code>true</code> represents an instance with a public IP address. A value of
   *             <code>false</code> represents an instance with a private IP address. The default value
   *          is <code>true</code>. </p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>A list of custom DNS name servers supported for the replication instance to access your
   *          on-premise source or target database. This list overrides the default name servers
   *          supported by the replication instance. You can specify a comma-separated list of internet
   *          addresses for up to four on-premise DNS name servers. For example:
   *             <code>"1.1.1.1,2.2.2.2,3.3.3.3,4.4.4.4"</code>
   *          </p>
   */
  DnsNameServers?: string;

  /**
   * <p>The replication instance identifier. This parameter is stored as a lowercase
   *          string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain 1-63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Can't end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>myrepinstance</code>
   *          </p>
   */
  ReplicationInstanceIdentifier: string | undefined;

  /**
   * <p>The engine version number of the replication instance.</p>
   */
  EngineVersion?: string;

  /**
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You can't set the
   *             <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to
   *             <code>true</code>. </p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The amount of storage (in gigabytes) to be initially allocated for the replication
   *          instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The Availability Zone where the replication instance will be created. The default
   *          value is a random, system-chosen Availability Zone in the endpoint's AWS Region, for
   *          example: <code>us-east-1d</code>
   *          </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>An AWS KMS key identifier that is used to encrypt the data on the replication
   *            instance.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then
   *            AWS DMS uses your default encryption key.</p>
   *          <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account has a
   *          different default encryption key for each AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p> Specifies the VPC security group to be used with the replication instance. The VPC
   *          security group must work with the VPC containing the replication instance. </p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace CreateReplicationInstanceMessage {
  export const filterSensitiveLog = (obj: CreateReplicationInstanceMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the values of pending modifications to a replication
 *          instance. This data type is an object of the <code>ReplicationInstance</code> user-defined
 *          data type. </p>
 */
export interface ReplicationPendingModifiedValues {
  /**
   * <p>The engine version number of the replication instance.</p>
   */
  EngineVersion?: string;

  /**
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You can't set the
   *             <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to
   *             <code>true</code>. </p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The amount of storage (in gigabytes) that is allocated for the replication
   *          instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The compute and memory capacity of the replication instance as defined for the specified
   *          replication instance class.</p>
   *          <p>For more information on the settings and capacities for the available replication instance classes, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth">
   *             Selecting the right AWS DMS replication instance for your migration</a>.
   *       </p>
   */
  ReplicationInstanceClass?: string;
}

export namespace ReplicationPendingModifiedValues {
  export const filterSensitiveLog = (obj: ReplicationPendingModifiedValues): any => ({
    ...obj,
  });
}

/**
 * <p>The name of an Availability Zone for use during database migration.</p>
 */
export interface AvailabilityZone {
  /**
   * <p>The name of the Availability Zone.</p>
   */
  Name?: string;
}

export namespace AvailabilityZone {
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj,
  });
}

/**
 * <p>In response to a request by the <code>DescribeReplicationSubnetGroup</code> operation, this object
 *          identifies a subnet by its given Availability Zone, subnet identifier, and status.</p>
 */
export interface Subnet {
  /**
   * <p>The Availability Zone of the subnet.</p>
   */
  SubnetAvailabilityZone?: AvailabilityZone;

  /**
   * <p>The subnet identifier.</p>
   */
  SubnetIdentifier?: string;

  /**
   * <p>The status of the subnet.</p>
   */
  SubnetStatus?: string;
}

export namespace Subnet {
  export const filterSensitiveLog = (obj: Subnet): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a subnet group in response to a request by the <code>DescribeReplicationSubnetGroup</code>
 *          operation.</p>
 */
export interface ReplicationSubnetGroup {
  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>A description for the replication subnet group.</p>
   */
  ReplicationSubnetGroupDescription?: string;

  /**
   * <p>The status of the subnet group.</p>
   */
  SubnetGroupStatus?: string;

  /**
   * <p>The identifier of the replication instance subnet group.</p>
   */
  ReplicationSubnetGroupIdentifier?: string;

  /**
   * <p>The subnets that are in the subnet group.</p>
   */
  Subnets?: Subnet[];
}

export namespace ReplicationSubnetGroup {
  export const filterSensitiveLog = (obj: ReplicationSubnetGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of a security group associated with the virtual private cloud (VPC)
 *          hosting your replication and DB instances.</p>
 */
export interface VpcSecurityGroupMembership {
  /**
   * <p>The VPC security group ID.</p>
   */
  VpcSecurityGroupId?: string;

  /**
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;
}

export namespace VpcSecurityGroupMembership {
  export const filterSensitiveLog = (obj: VpcSecurityGroupMembership): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information that defines a replication instance.</p>
 */
export interface ReplicationInstance {
  /**
   * <p>The VPC security group for the instance.</p>
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[];

  /**
   * <p>The public IP address of the replication instance.</p>
   */
  ReplicationInstancePublicIpAddress?: string;

  /**
   * <p>The pending modification values.</p>
   */
  PendingModifiedValues?: ReplicationPendingModifiedValues;

  /**
   * <p>The compute and memory capacity of the replication instance as defined for the specified
   *          replication instance class.</p>
   *          <p>For more information on the settings and capacities for the available replication instance classes, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth">
   *             Selecting the right AWS DMS replication instance for your migration</a>.
   *       </p>
   */
  ReplicationInstanceClass?: string;

  /**
   * <p>One or more private IP addresses for the replication instance.</p>
   */
  ReplicationInstancePrivateIpAddresses?: string[];

  /**
   * <p>The amount of storage (in gigabytes) that is allocated for the replication
   *          instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The maintenance window times for the replication instance.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>An AWS KMS key identifier that is used to encrypt the data on the replication
   *            instance.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then
   *            AWS DMS uses your default encryption key.</p>
   *          <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account has a
   *          different default encryption key for each AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The DNS name servers supported for the replication instance to access your on-premise source or target database.</p>
   */
  DnsNameServers?: string;

  /**
   * <p>The Availability Zone for the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The replication instance identifier. This parameter is stored as a lowercase
   *          string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain 1-63 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   *          <p>Example: <code>myrepinstance</code>
   *          </p>
   */
  ReplicationInstanceIdentifier?: string;

  /**
   * <p> Specifies the accessibility options for the replication instance. A value of
   *             <code>true</code> represents an instance with a public IP address. A value of
   *             <code>false</code> represents an instance with a private IP address. The default value
   *          is <code>true</code>. </p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p> The expiration date of the free replication instance that is part of the Free DMS
   *          program. </p>
   */
  FreeUntil?: Date;

  /**
   * <p>The time the replication instance was created.</p>
   */
  InstanceCreateTime?: Date;

  /**
   * <p>One or more public IP addresses for the replication instance.</p>
   */
  ReplicationInstancePublicIpAddresses?: string[];

  /**
   * <p>The private IP address of the replication instance.</p>
   */
  ReplicationInstancePrivateIpAddress?: string;

  /**
   * <p>The Availability Zone of the standby replication instance in a Multi-AZ
   *          deployment.</p>
   */
  SecondaryAvailabilityZone?: string;

  /**
   * <p>The engine version number of the replication instance.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Boolean value indicating if minor version upgrades will be automatically applied to the
   *          instance.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * <p>The status of the replication instance. The possible return values include:</p>
   *
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"available"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"creating"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"deleted"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"deleting"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"failed"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"modifying"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"upgrading"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"rebooting"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"resetting-master-credentials"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"storage-full"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"incompatible-credentials"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"incompatible-network"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"maintenance"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ReplicationInstanceStatus?: string;

  /**
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You can't set the
   *             <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to
   *             <code>true</code>. </p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The subnet group for the replication instance.</p>
   */
  ReplicationSubnetGroup?: ReplicationSubnetGroup;
}

export namespace ReplicationInstance {
  export const filterSensitiveLog = (obj: ReplicationInstance): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateReplicationInstanceResponse {
  /**
   * <p>The replication instance that was created.</p>
   */
  ReplicationInstance?: ReplicationInstance;
}

export namespace CreateReplicationInstanceResponse {
  export const filterSensitiveLog = (obj: CreateReplicationInstanceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>There are not enough resources allocated to the database migration.</p>
 */
export interface InsufficientResourceCapacityFault extends __SmithyException, $MetadataBearer {
  name: "InsufficientResourceCapacityFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace InsufficientResourceCapacityFault {
  export const filterSensitiveLog = (obj: InsufficientResourceCapacityFault): any => ({
    ...obj,
  });
}

/**
 * <p>The subnet provided is invalid.</p>
 */
export interface InvalidSubnet extends __SmithyException, $MetadataBearer {
  name: "InvalidSubnet";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace InvalidSubnet {
  export const filterSensitiveLog = (obj: InvalidSubnet): any => ({
    ...obj,
  });
}

/**
 * <p>The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.</p>
 */
export interface ReplicationSubnetGroupDoesNotCoverEnoughAZs extends __SmithyException, $MetadataBearer {
  name: "ReplicationSubnetGroupDoesNotCoverEnoughAZs";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace ReplicationSubnetGroupDoesNotCoverEnoughAZs {
  export const filterSensitiveLog = (obj: ReplicationSubnetGroupDoesNotCoverEnoughAZs): any => ({
    ...obj,
  });
}

/**
 * <p>The storage quota has been exceeded.</p>
 */
export interface StorageQuotaExceededFault extends __SmithyException, $MetadataBearer {
  name: "StorageQuotaExceededFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace StorageQuotaExceededFault {
  export const filterSensitiveLog = (obj: StorageQuotaExceededFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateReplicationSubnetGroupMessage {
  /**
   * <p>The description for the subnet group.</p>
   */
  ReplicationSubnetGroupDescription: string | undefined;

  /**
   * <p>One or more tags to be assigned to the subnet group.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name for the replication subnet group. This value is stored as a lowercase
   *          string.</p>
   *          <p>Constraints: Must contain no more than 255 alphanumeric characters, periods, spaces,
   *          underscores, or hyphens. Must not be "default".</p>
   *          <p>Example: <code>mySubnetgroup</code>
   *          </p>
   */
  ReplicationSubnetGroupIdentifier: string | undefined;

  /**
   * <p>One or more subnet IDs to be assigned to the subnet group.</p>
   */
  SubnetIds: string[] | undefined;
}

export namespace CreateReplicationSubnetGroupMessage {
  export const filterSensitiveLog = (obj: CreateReplicationSubnetGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateReplicationSubnetGroupResponse {
  /**
   * <p>The replication subnet group that was created.</p>
   */
  ReplicationSubnetGroup?: ReplicationSubnetGroup;
}

export namespace CreateReplicationSubnetGroupResponse {
  export const filterSensitiveLog = (obj: CreateReplicationSubnetGroupResponse): any => ({
    ...obj,
  });
}

export enum MigrationTypeValue {
  CDC = "cdc",
  FULL_LOAD = "full-load",
  FULL_LOAD_AND_CDC = "full-load-and-cdc",
}

/**
 * <p></p>
 */
export interface CreateReplicationTaskMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of a replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either
   *          CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>
   */
  CdcStartTime?: Date;

  /**
   * <p>The table mappings for the task, in JSON format. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html">Using Table
   *             Mapping to Specify Task Settings</a> in the <i>AWS Database Migration Service User
   *             Guide.</i>
   *          </p>
   */
  TableMappings: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the target endpoint.</p>
   */
  TargetEndpointArn: string | undefined;

  /**
   * <p>An identifier for the replication task.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain 1-255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  ReplicationTaskIdentifier: string | undefined;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the source endpoint.</p>
   */
  SourceEndpointArn: string | undefined;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to start. Use either
   *          CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p> The value can be in date, checkpoint, or LSN/SCN format.</p>
   *          <p>Date Example: --cdc-start-position “2018-03-08T12:12:12”</p>
   *          <p>Checkpoint Example: --cdc-start-position
   *          "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93"</p>
   *          <p>LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</p>
   *          <note>
   *             <p>When you use this task setting with a source PostgreSQL database, a logical
   *             replication slot should already be created and associated with the source endpoint. You
   *             can verify this by setting the <code>slotName</code> extra connection attribute to the
   *             name of this logical replication slot. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib">Extra Connection Attributes When Using PostgreSQL as a Source
   *                for AWS DMS</a>.</p>
   *          </note>
   */
  CdcStartPosition?: string;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   *          <p>Server time example: --cdc-stop-position “server_time:3018-02-09T12:12:12”</p>
   *          <p>Commit time example: --cdc-stop-position “commit_time: 3018-02-09T12:12:12 “</p>
   */
  CdcStopPosition?: string;

  /**
   * <p>One or more tags to be assigned to the replication task.</p>
   */
  Tags?: Tag[];

  /**
   * <p>Supplemental information that the task requires to migrate the data for certain source and target endpoints.
   *          For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html">Specifying Supplemental Data for Task Settings</a> in the
   *             <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  TaskData?: string;

  /**
   * <p>Overall settings for the task, in JSON format. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html">Specifying Task
   *             Settings for AWS Database Migration Service Tasks</a> in the <i>AWS Database
   *             Migration User Guide.</i>
   *          </p>
   */
  ReplicationTaskSettings?: string;

  /**
   * <p>The migration type. Valid values: <code>full-load</code> | <code>cdc</code> | <code>full-load-and-cdc</code>
   *          </p>
   */
  MigrationType: MigrationTypeValue | string | undefined;
}

export namespace CreateReplicationTaskMessage {
  export const filterSensitiveLog = (obj: CreateReplicationTaskMessage): any => ({
    ...obj,
  });
}

/**
 * <p>In response to a request by the <code>DescribeReplicationTasks</code> operation, this object provides
 *          a collection of statistics about a replication task.</p>
 */
export interface ReplicationTaskStats {
  /**
   * <p>The date the replication task full load was completed.</p>
   */
  FullLoadFinishDate?: Date;

  /**
   * <p>The date the replication task was started either with a fresh start or a target reload.</p>
   */
  FreshStartDate?: Date;

  /**
   * <p>The number of tables loaded for this task.</p>
   */
  TablesLoaded?: number;

  /**
   * <p>The number of tables currently loading for this task.</p>
   */
  TablesLoading?: number;

  /**
   * <p>The date the replication task was stopped.</p>
   */
  StopDate?: Date;

  /**
   * <p>The number of errors that have occurred during this task.</p>
   */
  TablesErrored?: number;

  /**
   * <p>The date the replication task full load was started.</p>
   */
  FullLoadStartDate?: Date;

  /**
   * <p>The date the replication task was started either with a fresh start or a resume. For more information, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html#DMS-StartReplicationTask-request-StartReplicationTaskType">StartReplicationTaskType</a>.</p>
   */
  StartDate?: Date;

  /**
   * <p>The elapsed time of the task, in milliseconds.</p>
   */
  ElapsedTimeMillis?: number;

  /**
   * <p>The number of tables queued for this task.</p>
   */
  TablesQueued?: number;

  /**
   * <p>The percent complete for the full load migration task.</p>
   */
  FullLoadProgressPercent?: number;
}

export namespace ReplicationTaskStats {
  export const filterSensitiveLog = (obj: ReplicationTaskStats): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information that describes a replication task created by the
 *          <code>CreateReplicationTask</code> operation.</p>
 */
export interface ReplicationTask {
  /**
   * <p>The date the replication task was created.</p>
   */
  ReplicationTaskCreationDate?: Date;

  /**
   * <p>The settings for the replication task.</p>
   */
  ReplicationTaskSettings?: string;

  /**
   * <p>The status of the replication task.</p>
   */
  Status?: string;

  /**
   * <p>The date the replication task is scheduled to start.</p>
   */
  ReplicationTaskStartDate?: Date;

  /**
   * <p>The user-assigned replication task identifier or name.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain 1-255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  ReplicationTaskIdentifier?: string;

  /**
   * <p>The reason the replication task was stopped. This response parameter can return one of
   *          the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"STOP_REASON_FULL_LOAD_COMPLETED"</code> – Full-load migration
   *                completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"STOP_REASON_CACHED_CHANGES_APPLIED"</code> – Change data capture (CDC)
   *                load completed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"STOP_REASON_CACHED_CHANGES_NOT_APPLIED"</code> – In a full-load and
   *                CDC migration, the full-load stopped as specified before starting the CDC
   *                migration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"STOP_REASON_SERVER_TIME"</code> – The migration stopped at the
   *                specified server time.</p>
   *             </li>
   *          </ul>
   */
  StopReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   */
  ReplicationTaskArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  SourceEndpointArn?: string;

  /**
   * <p>Indicates the last checkpoint that occurred during a change data capture (CDC)
   *          operation. You can provide this value to the <code>CdcStartPosition</code> parameter to
   *          start a CDC operation that begins at that checkpoint.</p>
   */
  RecoveryCheckpoint?: string;

  /**
   * <p>The statistics for the task, including elapsed time, tables loaded, and table
   *          errors.</p>
   */
  ReplicationTaskStats?: ReplicationTaskStats;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   *          <p>Server time example: --cdc-stop-position “server_time:3018-02-09T12:12:12”</p>
   *          <p>Commit time example: --cdc-stop-position “commit_time: 3018-02-09T12:12:12 “</p>
   */
  CdcStopPosition?: string;

  /**
   * <p>The last error (failure) message generated for the replication instance.</p>
   */
  LastFailureMessage?: string;

  /**
   * <p>Table mappings specified in the task.</p>
   */
  TableMappings?: string;

  /**
   * <p>The type of migration.</p>
   */
  MigrationType?: MigrationTypeValue | string;

  /**
   * <p>Supplemental information that the task requires to migrate the data for certain source and target endpoints.
   *             For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html">Specifying Supplemental Data for Task Settings</a> in the
   *          <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  TaskData?: string;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  TargetEndpointArn?: string;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to start. Use either
   *          <code>CdcStartPosition</code> or <code>CdcStartTime</code> to specify when you want the CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p>The value can be in date, checkpoint, or LSN/SCN format.</p>
   *          <p>Date Example: --cdc-start-position “2018-03-08T12:12:12”</p>
   *          <p>Checkpoint Example: --cdc-start-position
   *          "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93"</p>
   *          <p>LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</p>
   */
  CdcStartPosition?: string;
}

export namespace ReplicationTask {
  export const filterSensitiveLog = (obj: ReplicationTask): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface CreateReplicationTaskResponse {
  /**
   * <p>The replication task that was created.</p>
   */
  ReplicationTask?: ReplicationTask;
}

export namespace CreateReplicationTaskResponse {
  export const filterSensitiveLog = (obj: CreateReplicationTaskResponse): any => ({
    ...obj,
  });
}

export interface DeleteCertificateMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted certificate.</p>
   */
  CertificateArn: string | undefined;
}

export namespace DeleteCertificateMessage {
  export const filterSensitiveLog = (obj: DeleteCertificateMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The SSL certificate that can be used to encrypt connections between the endpoints and
 *          the replication instance.</p>
 */
export interface Certificate {
  /**
   * <p>The contents of a <code>.pem</code> file, which contains an X.509 certificate.</p>
   */
  CertificatePem?: string;

  /**
   * <p>The owner of the certificate.</p>
   */
  CertificateOwner?: string;

  /**
   * <p>The beginning date that the certificate is valid.</p>
   */
  ValidFromDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) for the certificate.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The date that the certificate was created.</p>
   */
  CertificateCreationDate?: Date;

  /**
   * <p>The location of an imported Oracle Wallet certificate for use with SSL.</p>
   */
  CertificateWallet?: Uint8Array;

  /**
   * <p>The signing algorithm for the certificate.</p>
   */
  SigningAlgorithm?: string;

  /**
   * <p>The key length of the cryptographic algorithm being used.</p>
   */
  KeyLength?: number;

  /**
   * <p>The final date that the certificate is valid.</p>
   */
  ValidToDate?: Date;

  /**
   * <p>A customer-assigned name for the certificate. Identifiers must begin with a letter and
   *          must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or
   *          contain two consecutive hyphens.</p>
   */
  CertificateIdentifier?: string;
}

export namespace Certificate {
  export const filterSensitiveLog = (obj: Certificate): any => ({
    ...obj,
  });
}

export interface DeleteCertificateResponse {
  /**
   * <p>The Secure Sockets Layer (SSL) certificate.</p>
   */
  Certificate?: Certificate;
}

export namespace DeleteCertificateResponse {
  export const filterSensitiveLog = (obj: DeleteCertificateResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteConnectionMessage {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;
}

export namespace DeleteConnectionMessage {
  export const filterSensitiveLog = (obj: DeleteConnectionMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Status of the connection between an endpoint and a replication instance, including
 *          Amazon Resource Names (ARNs) and the last error message issued.</p>
 */
export interface Connection {
  /**
   * <p>The ARN string that uniquely identifies the endpoint.</p>
   */
  EndpointArn?: string;

  /**
   * <p>The replication instance identifier. This parameter is stored as a lowercase
   *          string.</p>
   */
  ReplicationInstanceIdentifier?: string;

  /**
   * <p>The identifier of the endpoint. Identifiers must begin with a letter and must contain only
   *          ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two
   *          consecutive hyphens.</p>
   */
  EndpointIdentifier?: string;

  /**
   * <p>The connection status. This parameter can return one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"successful"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"testing"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"failed"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"deleting"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>The ARN of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * <p>The error message when the connection last failed.</p>
   */
  LastFailureMessage?: string;
}

export namespace Connection {
  export const filterSensitiveLog = (obj: Connection): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteConnectionResponse {
  /**
   * <p>The connection that is being deleted.</p>
   */
  Connection?: Connection;
}

export namespace DeleteConnectionResponse {
  export const filterSensitiveLog = (obj: DeleteConnectionResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteEndpointMessage {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

export namespace DeleteEndpointMessage {
  export const filterSensitiveLog = (obj: DeleteEndpointMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteEndpointResponse {
  /**
   * <p>The endpoint that was deleted.</p>
   */
  Endpoint?: Endpoint;
}

export namespace DeleteEndpointResponse {
  export const filterSensitiveLog = (obj: DeleteEndpointResponse): any => ({
    ...obj,
    ...(obj.Endpoint && { Endpoint: Endpoint.filterSensitiveLog(obj.Endpoint) }),
  });
}

/**
 * <p></p>
 */
export interface DeleteEventSubscriptionMessage {
  /**
   * <p>The name of the DMS event notification subscription to be deleted.</p>
   */
  SubscriptionName: string | undefined;
}

export namespace DeleteEventSubscriptionMessage {
  export const filterSensitiveLog = (obj: DeleteEventSubscriptionMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteEventSubscriptionResponse {
  /**
   * <p>The event subscription that was deleted.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace DeleteEventSubscriptionResponse {
  export const filterSensitiveLog = (obj: DeleteEventSubscriptionResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteReplicationInstanceMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance to be deleted.</p>
   */
  ReplicationInstanceArn: string | undefined;
}

export namespace DeleteReplicationInstanceMessage {
  export const filterSensitiveLog = (obj: DeleteReplicationInstanceMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteReplicationInstanceResponse {
  /**
   * <p>The replication instance that was deleted.</p>
   */
  ReplicationInstance?: ReplicationInstance;
}

export namespace DeleteReplicationInstanceResponse {
  export const filterSensitiveLog = (obj: DeleteReplicationInstanceResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteReplicationSubnetGroupMessage {
  /**
   * <p>The subnet group name of the replication instance.</p>
   */
  ReplicationSubnetGroupIdentifier: string | undefined;
}

export namespace DeleteReplicationSubnetGroupMessage {
  export const filterSensitiveLog = (obj: DeleteReplicationSubnetGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteReplicationSubnetGroupResponse {}

export namespace DeleteReplicationSubnetGroupResponse {
  export const filterSensitiveLog = (obj: DeleteReplicationSubnetGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteReplicationTaskMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task to be deleted.</p>
   */
  ReplicationTaskArn: string | undefined;
}

export namespace DeleteReplicationTaskMessage {
  export const filterSensitiveLog = (obj: DeleteReplicationTaskMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteReplicationTaskResponse {
  /**
   * <p>The deleted replication task.</p>
   */
  ReplicationTask?: ReplicationTask;
}

export namespace DeleteReplicationTaskResponse {
  export const filterSensitiveLog = (obj: DeleteReplicationTaskResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteReplicationTaskAssessmentRunMessage {
  /**
   * <p>Amazon Resource Name (ARN) of the premigration assessment run to be deleted.</p>
   */
  ReplicationTaskAssessmentRunArn: string | undefined;
}

export namespace DeleteReplicationTaskAssessmentRunMessage {
  export const filterSensitiveLog = (obj: DeleteReplicationTaskAssessmentRunMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DeleteReplicationTaskAssessmentRunResponse {
  /**
   * <p>The <code>ReplicationTaskAssessmentRun</code> object for the deleted assessment
   *          run.</p>
   */
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
}

export namespace DeleteReplicationTaskAssessmentRunResponse {
  export const filterSensitiveLog = (obj: DeleteReplicationTaskAssessmentRunResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeAccountAttributesMessage {}

export namespace DescribeAccountAttributesMessage {
  export const filterSensitiveLog = (obj: DescribeAccountAttributesMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeAccountAttributesResponse {
  /**
   * <p>Account quota information.</p>
   */
  AccountQuotas?: AccountQuota[];

  /**
   * <p>A unique AWS DMS identifier for an account in a particular AWS Region. The value of this
   *          identifier has the following format: <code>c99999999999</code>. DMS uses this identifier to
   *          name artifacts. For example, DMS uses this identifier to name the default Amazon S3 bucket
   *          for storing task assessment reports in a given AWS Region. The format of this S3 bucket
   *          name is the following:
   *                <code>dms-<i>AccountNumber</i>-<i>UniqueAccountIdentifier</i>.</code>
   *          Here is an example name for this default S3 bucket:
   *             <code>dms-111122223333-c44445555666</code>.</p>
   *          <note>
   *             <p>AWS DMS supports the <code>UniqueAccountIdentifier</code> parameter in
   *             versions 3.1.4 and later.</p>
   *          </note>
   */
  UniqueAccountIdentifier?: string;
}

export namespace DescribeAccountAttributesResponse {
  export const filterSensitiveLog = (obj: DescribeAccountAttributesResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeApplicableIndividualAssessmentsMessage {
  /**
   * <p>Maximum number of records to include in the response. If more records exist than the
   *          specified <code>MaxRecords</code> value, a pagination token called a marker is included in
   *          the response so that the remaining results can be retrieved.</p>
   */
  MaxRecords?: number;

  /**
   * <p>Amazon Resource Name (ARN) of a migration task on which you want to base
   *          the default list of individual assessments.</p>
   */
  ReplicationTaskArn?: string;

  /**
   * <p>Name of a database engine that the specified replication instance supports as a target.</p>
   */
  TargetEngineName?: string;

  /**
   * <p>Name of the migration type that each provided individual assessment must support.</p>
   */
  MigrationType?: MigrationTypeValue | string;

  /**
   * <p>Optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>Name of a database engine that the specified replication instance supports as a source.</p>
   */
  SourceEngineName?: string;

  /**
   * <p>ARN of a replication instance on which you want to base the default list of individual
   *          assessments.</p>
   */
  ReplicationInstanceArn?: string;
}

export namespace DescribeApplicableIndividualAssessmentsMessage {
  export const filterSensitiveLog = (obj: DescribeApplicableIndividualAssessmentsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeApplicableIndividualAssessmentsResponse {
  /**
   * <p>Pagination token returned for you to pass to a subsequent request. If you pass this
   *          token as the <code>Marker</code> value in a subsequent request, the response includes only
   *          records beyond the marker, up to the value specified in the request by
   *             <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>List of names for the individual assessments supported by the premigration assessment
   *          run that you start based on the specified request parameters. For more information on the
   *          available individual assessments, including compatibility with different migration task
   *          configurations, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Working with premigration assessment runs</a> in the
   *             <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  IndividualAssessmentNames?: string[];
}

export namespace DescribeApplicableIndividualAssessmentsResponse {
  export const filterSensitiveLog = (obj: DescribeApplicableIndividualAssessmentsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies the name and value of a filter object. This filter is used to limit the
 *          number and type of AWS DMS objects that are returned for a particular
 *             <code>Describe*</code> or similar operation.</p>
 */
export interface Filter {
  /**
   * <p>The filter value, which can specify one or more values used to narrow the returned results.</p>
   */
  Values: string[] | undefined;

  /**
   * <p>The name of the filter as specified for a <code>Describe*</code> or similar
   *          operation.</p>
   */
  Name: string | undefined;
}

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

export interface DescribeCertificatesMessage {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 10</p>
   */
  MaxRecords?: number;

  /**
   * <p>Filters applied to the certificates described in the form of key-value pairs.</p>
   */
  Filters?: Filter[];
}

export namespace DescribeCertificatesMessage {
  export const filterSensitiveLog = (obj: DescribeCertificatesMessage): any => ({
    ...obj,
  });
}

export interface DescribeCertificatesResponse {
  /**
   * <p>The pagination token.</p>
   */
  Marker?: string;

  /**
   * <p>The Secure Sockets Layer (SSL) certificates associated with the replication
   *          instance.</p>
   */
  Certificates?: Certificate[];
}

export namespace DescribeCertificatesResponse {
  export const filterSensitiveLog = (obj: DescribeCertificatesResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeConnectionsMessage {
  /**
   * <p>The filters applied to the connection.</p>
   *          <p>Valid filter names: endpoint-arn | replication-instance-arn</p>
   */
  Filters?: Filter[];

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeConnectionsMessage {
  export const filterSensitiveLog = (obj: DescribeConnectionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeConnectionsResponse {
  /**
   * <p>A description of the connections.</p>
   */
  Connections?: Connection[];

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

export namespace DescribeConnectionsResponse {
  export const filterSensitiveLog = (obj: DescribeConnectionsResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeEndpointsMessage {
  /**
   * <p>Filters applied to the endpoints.</p>
   *          <p>Valid filter names: endpoint-arn | endpoint-type | endpoint-id | engine-name</p>
   */
  Filters?: Filter[];

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeEndpointsMessage {
  export const filterSensitiveLog = (obj: DescribeEndpointsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeEndpointsResponse {
  /**
   * <p>Endpoint description.</p>
   */
  Endpoints?: Endpoint[];

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

export namespace DescribeEndpointsResponse {
  export const filterSensitiveLog = (obj: DescribeEndpointsResponse): any => ({
    ...obj,
    ...(obj.Endpoints && { Endpoints: obj.Endpoints.map((item) => Endpoint.filterSensitiveLog(item)) }),
  });
}

/**
 * <p></p>
 */
export interface DescribeEndpointTypesMessage {
  /**
   * <p>Filters applied to the endpoint types.</p>
   *          <p>Valid filter names: engine-name | endpoint-type</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

export namespace DescribeEndpointTypesMessage {
  export const filterSensitiveLog = (obj: DescribeEndpointTypesMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about types of supported endpoints in response to a request by the
 *             <code>DescribeEndpointTypes</code> operation. This information includes the type of
 *          endpoint, the database engine name, and whether change data capture (CDC) is
 *          supported.</p>
 */
export interface SupportedEndpointType {
  /**
   * <p>The database engine name. Valid values, depending on the EndpointType,  include
   *          <code>"mysql"</code>, <code>"oracle"</code>, <code>"postgres"</code>,
   *          <code>"mariadb"</code>, <code>"aurora"</code>, <code>"aurora-postgresql"</code>,
   *          <code>"redshift"</code>, <code>"s3"</code>, <code>"db2"</code>, <code>"azuredb"</code>,
   *          <code>"sybase"</code>, <code>"dynamodb"</code>, <code>"mongodb"</code>,
   *          <code>"kinesis"</code>, <code>"kafka"</code>, <code>"elasticsearch"</code>,
   *          <code>"documentdb"</code>, <code>"sqlserver"</code>, and <code>"neptune"</code>.</p>
   */
  EngineName?: string;

  /**
   * <p>The earliest AWS DMS engine version that supports this endpoint engine. Note that endpoint engines released with AWS DMS versions earlier than 3.1.1 do not return a value for this parameter.</p>
   */
  ReplicationInstanceEngineMinimumVersion?: string;

  /**
   * <p>Indicates if Change Data Capture (CDC) is supported.</p>
   */
  SupportsCDC?: boolean;

  /**
   * <p>The expanded name for the engine name. For example, if the <code>EngineName</code>
   *          parameter is "aurora," this value would be "Amazon Aurora MySQL."</p>
   */
  EngineDisplayName?: string;

  /**
   * <p>The type of endpoint.  Valid values are <code>source</code> and <code>target</code>.</p>
   */
  EndpointType?: ReplicationEndpointTypeValue | string;
}

export namespace SupportedEndpointType {
  export const filterSensitiveLog = (obj: SupportedEndpointType): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeEndpointTypesResponse {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p>The types of endpoints that are supported.</p>
   */
  SupportedEndpointTypes?: SupportedEndpointType[];
}

export namespace DescribeEndpointTypesResponse {
  export const filterSensitiveLog = (obj: DescribeEndpointTypesResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeEventCategoriesMessage {
  /**
   * <p>Filters applied to the event categories.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The type of AWS DMS resource that generates events. </p>
   *          <p>Valid values: replication-instance | replication-task</p>
   */
  SourceType?: string;
}

export namespace DescribeEventCategoriesMessage {
  export const filterSensitiveLog = (obj: DescribeEventCategoriesMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Lists categories of events subscribed to, and generated by, the applicable AWS DMS
 *          resource type.</p>
 */
export interface EventCategoryGroup {
  /**
   * <p> The type of AWS DMS resource that generates events. </p>
   *          <p>Valid values: replication-instance | replication-server | security-group |
   *          replication-task</p>
   */
  SourceType?: string;

  /**
   * <p> A list of event categories from a source type that you've chosen.</p>
   */
  EventCategories?: string[];
}

export namespace EventCategoryGroup {
  export const filterSensitiveLog = (obj: EventCategoryGroup): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeEventCategoriesResponse {
  /**
   * <p>A list of event categories.</p>
   */
  EventCategoryGroupList?: EventCategoryGroup[];
}

export namespace DescribeEventCategoriesResponse {
  export const filterSensitiveLog = (obj: DescribeEventCategoriesResponse): any => ({
    ...obj,
  });
}

export type SourceType = "replication-instance";

/**
 * <p></p>
 */
export interface DescribeEventsMessage {
  /**
   * <p>The end time for the events to be listed.</p>
   */
  EndTime?: Date;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p> The identifier of an event source.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p>The duration of the events to be listed.</p>
   */
  Duration?: number;

  /**
   * <p>The type of AWS DMS resource that generates events.</p>
   *          <p>Valid values: replication-instance | replication-task</p>
   */
  SourceType?: SourceType | string;

  /**
   * <p>Filters applied to events.</p>
   */
  Filters?: Filter[];

  /**
   * <p>A list of event categories for the source type that you've chosen.</p>
   */
  EventCategories?: string[];

  /**
   * <p>The start time for the events to be listed.</p>
   */
  StartTime?: Date;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

export namespace DescribeEventsMessage {
  export const filterSensitiveLog = (obj: DescribeEventsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an identifiable significant activity that affects a replication instance or
 *          task. This object can provide the message, the available event categories, the date and
 *          source of the event, and the AWS DMS resource type.</p>
 */
export interface Event {
  /**
   * <p> The identifier of an event source.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p>The event categories available for the specified source type.</p>
   */
  EventCategories?: string[];

  /**
   * <p> The type of AWS DMS resource that generates events. </p>
   *          <p>Valid values: replication-instance | endpoint | replication-task</p>
   */
  SourceType?: SourceType | string;

  /**
   * <p>The event message.</p>
   */
  Message?: string;

  /**
   * <p>The date of the event.</p>
   */
  Date?: Date;
}

export namespace Event {
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeEventsResponse {
  /**
   * <p>The events described.</p>
   */
  Events?: Event[];

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

export namespace DescribeEventsResponse {
  export const filterSensitiveLog = (obj: DescribeEventsResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeEventSubscriptionsMessage {
  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p>Filters applied to event subscriptions.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The name of the AWS DMS event subscription to be described.</p>
   */
  SubscriptionName?: string;
}

export namespace DescribeEventSubscriptionsMessage {
  export const filterSensitiveLog = (obj: DescribeEventSubscriptionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeEventSubscriptionsResponse {
  /**
   * <p>A list of event subscriptions.</p>
   */
  EventSubscriptionsList?: EventSubscription[];

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

export namespace DescribeEventSubscriptionsResponse {
  export const filterSensitiveLog = (obj: DescribeEventSubscriptionsResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeOrderableReplicationInstancesMessage {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeOrderableReplicationInstancesMessage {
  export const filterSensitiveLog = (obj: DescribeOrderableReplicationInstancesMessage): any => ({
    ...obj,
  });
}

export enum ReleaseStatusValues {
  BETA = "beta",
}

/**
 * <p>In response to the <code>DescribeOrderableReplicationInstances</code> operation, this
 *          object describes an available replication instance. This description includes the
 *          replication instance's type, engine version, and allocated storage.</p>
 */
export interface OrderableReplicationInstance {
  /**
   * <p>The version of the replication engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The type of storage used by the replication instance.</p>
   */
  StorageType?: string;

  /**
   * <p>List of Availability Zones for this replication instance.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The compute and memory capacity of the replication instance as defined for the specified
   *          replication instance class. For example to specify the instance class dms.c4.large, set this parameter to <code>"dms.c4.large"</code>.</p>
   *          <p>For more information on the settings and capacities for the available replication instance classes, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth">
   *             Selecting the right AWS DMS replication instance for your migration</a>.
   *       </p>
   */
  ReplicationInstanceClass?: string;

  /**
   * <p>The minimum amount of storage (in gigabytes) that can be allocated for the replication
   *          instance.</p>
   */
  MinAllocatedStorage?: number;

  /**
   * <p>The default amount of storage (in gigabytes) that is allocated for the replication
   *          instance.</p>
   */
  DefaultAllocatedStorage?: number;

  /**
   * <p>The value returned when the specified <code>EngineVersion</code> of the replication
   *          instance is in Beta or test mode. This indicates some features might not work as expected.</p>
   *          <note>
   *             <p>AWS DMS supports the <code>ReleaseStatus</code> parameter in versions 3.1.4 and later.</p>
   *          </note>
   */
  ReleaseStatus?: ReleaseStatusValues | string;

  /**
   * <p>The minimum amount of storage (in gigabytes) that can be allocated for the replication
   *          instance.</p>
   */
  MaxAllocatedStorage?: number;

  /**
   * <p>The amount of storage (in gigabytes) that is allocated for the replication
   *          instance.</p>
   */
  IncludedAllocatedStorage?: number;
}

export namespace OrderableReplicationInstance {
  export const filterSensitiveLog = (obj: OrderableReplicationInstance): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeOrderableReplicationInstancesResponse {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p>The order-able replication instances available.</p>
   */
  OrderableReplicationInstances?: OrderableReplicationInstance[];
}

export namespace DescribeOrderableReplicationInstancesResponse {
  export const filterSensitiveLog = (obj: DescribeOrderableReplicationInstancesResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribePendingMaintenanceActionsMessage {
  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p></p>
   */
  Filters?: Filter[];

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

export namespace DescribePendingMaintenanceActionsMessage {
  export const filterSensitiveLog = (obj: DescribePendingMaintenanceActionsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribePendingMaintenanceActionsResponse {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p>The pending maintenance action.</p>
   */
  PendingMaintenanceActions?: ResourcePendingMaintenanceActions[];
}

export namespace DescribePendingMaintenanceActionsResponse {
  export const filterSensitiveLog = (obj: DescribePendingMaintenanceActionsResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeRefreshSchemasStatusMessage {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

export namespace DescribeRefreshSchemasStatusMessage {
  export const filterSensitiveLog = (obj: DescribeRefreshSchemasStatusMessage): any => ({
    ...obj,
  });
}

export enum RefreshSchemasStatusTypeValue {
  FAILED = "failed",
  REFRESHING = "refreshing",
  SUCCESSFUL = "successful",
}

/**
 * <p>Provides information that describes status of a schema at an endpoint specified by the
 *          <code>DescribeRefreshSchemaStatus</code> operation.</p>
 */
export interface RefreshSchemasStatus {
  /**
   * <p>The date the schema was last refreshed.</p>
   */
  LastRefreshDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * <p>The last failure message for the schema.</p>
   */
  LastFailureMessage?: string;

  /**
   * <p>The status of the schema.</p>
   */
  Status?: RefreshSchemasStatusTypeValue | string;
}

export namespace RefreshSchemasStatus {
  export const filterSensitiveLog = (obj: RefreshSchemasStatus): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeRefreshSchemasStatusResponse {
  /**
   * <p>The status of the schema.</p>
   */
  RefreshSchemasStatus?: RefreshSchemasStatus;
}

export namespace DescribeRefreshSchemasStatusResponse {
  export const filterSensitiveLog = (obj: DescribeRefreshSchemasStatusResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeReplicationInstancesMessage {
  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>Filters applied to replication instances.</p>
   *          <p>Valid filter names: replication-instance-arn | replication-instance-id |
   *          replication-instance-class | engine-version</p>
   */
  Filters?: Filter[];

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

export namespace DescribeReplicationInstancesMessage {
  export const filterSensitiveLog = (obj: DescribeReplicationInstancesMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeReplicationInstancesResponse {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p>The replication instances described.</p>
   */
  ReplicationInstances?: ReplicationInstance[];
}

export namespace DescribeReplicationInstancesResponse {
  export const filterSensitiveLog = (obj: DescribeReplicationInstancesResponse): any => ({
    ...obj,
  });
}

export interface DescribeReplicationInstanceTaskLogsMessage {
  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;
}

export namespace DescribeReplicationInstanceTaskLogsMessage {
  export const filterSensitiveLog = (obj: DescribeReplicationInstanceTaskLogsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Contains metadata for a replication instance task log.</p>
 */
export interface ReplicationInstanceTaskLog {
  /**
   * <p>The name of the replication task.</p>
   */
  ReplicationTaskName?: string;

  /**
   * <p>The size, in bytes, of the replication task log.</p>
   */
  ReplicationInstanceTaskLogSize?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   */
  ReplicationTaskArn?: string;
}

export namespace ReplicationInstanceTaskLog {
  export const filterSensitiveLog = (obj: ReplicationInstanceTaskLog): any => ({
    ...obj,
  });
}

export interface DescribeReplicationInstanceTaskLogsResponse {
  /**
   * <p>An array of replication task log metadata. Each member of the array contains the
   *          replication task name, ARN, and task log size (in bytes). </p>
   */
  ReplicationInstanceTaskLogs?: ReplicationInstanceTaskLog[];

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeReplicationInstanceTaskLogsResponse {
  export const filterSensitiveLog = (obj: DescribeReplicationInstanceTaskLogsResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeReplicationSubnetGroupsMessage {
  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p>Filters applied to replication subnet groups.</p>
   *          <p>Valid filter names: replication-subnet-group-id</p>
   */
  Filters?: Filter[];
}

export namespace DescribeReplicationSubnetGroupsMessage {
  export const filterSensitiveLog = (obj: DescribeReplicationSubnetGroupsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeReplicationSubnetGroupsResponse {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p>A description of the replication subnet groups.</p>
   */
  ReplicationSubnetGroups?: ReplicationSubnetGroup[];
}

export namespace DescribeReplicationSubnetGroupsResponse {
  export const filterSensitiveLog = (obj: DescribeReplicationSubnetGroupsResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeReplicationTaskAssessmentResultsMessage {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the task. When this input
   *          parameter is specified, the API returns only one result and ignore the values of the
   *             <code>MaxRecords</code> and <code>Marker</code> parameters. </p>
   */
  ReplicationTaskArn?: string;
}

export namespace DescribeReplicationTaskAssessmentResultsMessage {
  export const filterSensitiveLog = (obj: DescribeReplicationTaskAssessmentResultsMessage): any => ({
    ...obj,
  });
}

/**
 * <p> The task assessment report in JSON format. </p>
 */
export interface ReplicationTaskAssessmentResult {
  /**
   * <p> The URL of the S3 object containing the task assessment results. </p>
   */
  S3ObjectUrl?: string;

  /**
   * <p>The date the task assessment was completed. </p>
   */
  ReplicationTaskLastAssessmentDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication task. </p>
   */
  ReplicationTaskArn?: string;

  /**
   * <p> The replication task identifier of the task on which the task assessment was run.
   *       </p>
   */
  ReplicationTaskIdentifier?: string;

  /**
   * <p> The status of the task assessment. </p>
   */
  AssessmentStatus?: string;

  /**
   * <p> The task assessment results in JSON format. </p>
   */
  AssessmentResults?: string;

  /**
   * <p> The file containing the results of the task assessment. </p>
   */
  AssessmentResultsFile?: string;
}

export namespace ReplicationTaskAssessmentResult {
  export const filterSensitiveLog = (obj: ReplicationTaskAssessmentResult): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeReplicationTaskAssessmentResultsResponse {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p>- The Amazon S3 bucket where the task assessment report is located. </p>
   */
  BucketName?: string;

  /**
   * <p> The task assessment report. </p>
   */
  ReplicationTaskAssessmentResults?: ReplicationTaskAssessmentResult[];
}

export namespace DescribeReplicationTaskAssessmentResultsResponse {
  export const filterSensitiveLog = (obj: DescribeReplicationTaskAssessmentResultsResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeReplicationTaskAssessmentRunsMessage {
  /**
   * <p>Filters applied to the premigration assessment runs described in the form of key-value pairs.</p>
   *          <p>Valid filter names: <code>replication-task-assessment-run-arn</code>, <code>replication-task-arn</code>,
   *          <code>replication-instance-arn</code>, <code>status</code>
   *          </p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *          specified <code>MaxRecords</code> value, a pagination token called a marker is included in
   *          the response so that the remaining results can be retrieved.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeReplicationTaskAssessmentRunsMessage {
  export const filterSensitiveLog = (obj: DescribeReplicationTaskAssessmentRunsMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeReplicationTaskAssessmentRunsResponse {
  /**
   * <p>A pagination token returned for you to pass to a subsequent request. If you pass this
   *          token as the <code>Marker</code> value in a subsequent request, the response includes only
   *          records beyond the marker, up to the value specified in the request by
   *             <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>One or more premigration assessment runs as specified by <code>Filters</code>.</p>
   */
  ReplicationTaskAssessmentRuns?: ReplicationTaskAssessmentRun[];
}

export namespace DescribeReplicationTaskAssessmentRunsResponse {
  export const filterSensitiveLog = (obj: DescribeReplicationTaskAssessmentRunsResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeReplicationTaskIndividualAssessmentsMessage {
  /**
   * <p>Filters applied to the individual assessments described in the form of key-value
   *          pairs.</p>
   *          <p>Valid filter names: <code>replication-task-assessment-run-arn</code>,
   *             <code>replication-task-arn</code>, <code>status</code>
   *          </p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of records to include in the response. If more records exist than the
   *          specified <code>MaxRecords</code> value, a pagination token called a marker is included in
   *          the response so that the remaining results can be retrieved.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeReplicationTaskIndividualAssessmentsMessage {
  export const filterSensitiveLog = (obj: DescribeReplicationTaskIndividualAssessmentsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information that describes an individual assessment from a premigration
 *          assessment run.</p>
 */
export interface ReplicationTaskIndividualAssessment {
  /**
   * <p>Name of this individual assessment.</p>
   */
  IndividualAssessmentName?: string;

  /**
   * <p>ARN of the premigration assessment run that is created to run this individual
   *          assessment.</p>
   */
  ReplicationTaskAssessmentRunArn?: string;

  /**
   * <p>Date when this individual assessment was started as part of running the
   *             <code>StartReplicationTaskAssessmentRun</code> operation.</p>
   */
  ReplicationTaskIndividualAssessmentStartDate?: Date;

  /**
   * <p>Individual assessment status.</p>
   *          <p>This status can have one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"cancelled"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"error"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"failed"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"passed"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"pending"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"running"</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>Amazon Resource Name (ARN) of this individual assessment.</p>
   */
  ReplicationTaskIndividualAssessmentArn?: string;
}

export namespace ReplicationTaskIndividualAssessment {
  export const filterSensitiveLog = (obj: ReplicationTaskIndividualAssessment): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeReplicationTaskIndividualAssessmentsResponse {
  /**
   * <p>One or more individual assessments as specified by <code>Filters</code>.</p>
   */
  ReplicationTaskIndividualAssessments?: ReplicationTaskIndividualAssessment[];

  /**
   * <p>A pagination token returned for you to pass to a subsequent request. If you pass this
   *          token as the <code>Marker</code> value in a subsequent request, the response includes only
   *          records beyond the marker, up to the value specified in the request by
   *             <code>MaxRecords</code>.</p>
   */
  Marker?: string;
}

export namespace DescribeReplicationTaskIndividualAssessmentsResponse {
  export const filterSensitiveLog = (obj: DescribeReplicationTaskIndividualAssessmentsResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeReplicationTasksMessage {
  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;

  /**
   * <p>An option to set to avoid returning information about settings. Use this to reduce
   *          overhead when setting information is too large. To use this option, choose
   *             <code>true</code>; otherwise, choose <code>false</code> (the default).</p>
   */
  WithoutSettings?: boolean;

  /**
   * <p>Filters applied to replication tasks.</p>
   *          <p>Valid filter names: replication-task-arn | replication-task-id | migration-type |
   *          endpoint-arn | replication-instance-arn</p>
   */
  Filters?: Filter[];

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

export namespace DescribeReplicationTasksMessage {
  export const filterSensitiveLog = (obj: DescribeReplicationTasksMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeReplicationTasksResponse {
  /**
   * <p>A description of the replication tasks.</p>
   */
  ReplicationTasks?: ReplicationTask[];

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

export namespace DescribeReplicationTasksResponse {
  export const filterSensitiveLog = (obj: DescribeReplicationTasksResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeSchemasMessage {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeSchemasMessage {
  export const filterSensitiveLog = (obj: DescribeSchemasMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeSchemasResponse {
  /**
   * <p>The described schema.</p>
   */
  Schemas?: string[];

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

export namespace DescribeSchemasResponse {
  export const filterSensitiveLog = (obj: DescribeSchemasResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeTableStatisticsMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   */
  ReplicationTaskArn: string | undefined;

  /**
   * <p>Filters applied to table statistics.</p>
   *          <p>Valid filter names: schema-name | table-name | table-state</p>
   *          <p>A combination of filters creates an AND condition where each record matches all
   *          specified filters.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 500.</p>
   */
  MaxRecords?: number;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;
}

export namespace DescribeTableStatisticsMessage {
  export const filterSensitiveLog = (obj: DescribeTableStatisticsMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a collection of table statistics in response to a request by the
 *          <code>DescribeTableStatistics</code> operation.</p>
 */
export interface TableStatistics {
  /**
   * <p>The number of records that failed validation.</p>
   */
  ValidationFailedRecords?: number;

  /**
   * <p>The number of insert actions performed on a table.</p>
   */
  Inserts?: number;

  /**
   * <p>The validation state of the table.</p>
   *          <p>This parameter can have the following values:</p>
   *          <ul>
   *             <li>
   *                <p>Not enabled - Validation isn't enabled for the table in the migration
   *                task.</p>
   *             </li>
   *             <li>
   *                <p>Pending records - Some records in the table are waiting for validation.</p>
   *             </li>
   *             <li>
   *                <p>Mismatched records - Some records in the table don't match between the source
   *                and target.</p>
   *             </li>
   *             <li>
   *                <p>Suspended records - Some records in the table couldn't be validated.</p>
   *             </li>
   *             <li>
   *                <p>No primary key - The table couldn't be validated because it has no primary
   *                key.</p>
   *             </li>
   *             <li>
   *                <p>Table error - The table wasn't validated because it's in an error state
   *                and some data wasn't migrated.</p>
   *             </li>
   *             <li>
   *                <p>Validated - All rows in the table are validated. If the table is updated, the
   *                status can change from Validated.</p>
   *             </li>
   *             <li>
   *                <p>Error - The table couldn't be validated because of an unexpected
   *                error.</p>
   *             </li>
   *          </ul>
   */
  ValidationState?: string;

  /**
   * <p>Additional details about the state of validation.</p>
   */
  ValidationStateDetails?: string;

  /**
   * <p>The name of the table.</p>
   */
  TableName?: string;

  /**
   * <p>The number of rows added during the full load operation.</p>
   */
  FullLoadRows?: number;

  /**
   * <p>The state of the tables described.</p>
   *          <p>Valid states: Table does not exist | Before load | Full load | Table completed | Table
   *          cancelled | Table error | Table all | Table updates | Table is being reloaded</p>
   */
  TableState?: string;

  /**
   * <p>The schema name.</p>
   */
  SchemaName?: string;

  /**
   * <p>The number of records that couldn't be validated.</p>
   */
  ValidationSuspendedRecords?: number;

  /**
   * <p>The number of records that have yet to be validated.</p>
   */
  ValidationPendingRecords?: number;

  /**
   * <p>A value that indicates if the table was reloaded (<code>true</code>)
   *          or loaded as part of a new full load operation (<code>false</code>).</p>
   */
  FullLoadReloaded?: boolean;

  /**
   * <p>The number of update actions performed on a table.</p>
   */
  Updates?: number;

  /**
   * <p>The data definition language (DDL) used to build and modify the structure of your tables.</p>
   */
  Ddls?: number;

  /**
   * <p>The last time a table was updated.</p>
   */
  LastUpdateTime?: Date;

  /**
   * <p>The time when the full load operation completed.</p>
   */
  FullLoadEndTime?: Date;

  /**
   * <p>The time when the full load operation started.</p>
   */
  FullLoadStartTime?: Date;

  /**
   * <p>The number of rows that failed to load during the full load operation (valid only for
   *          migrations where DynamoDB is the target).</p>
   */
  FullLoadErrorRows?: number;

  /**
   * <p>The number of delete actions performed on a table.</p>
   */
  Deletes?: number;

  /**
   * <p>The number of rows that failed conditional checks during the full load operation (valid
   *          only for migrations where DynamoDB is the target).</p>
   */
  FullLoadCondtnlChkFailedRows?: number;
}

export namespace TableStatistics {
  export const filterSensitiveLog = (obj: TableStatistics): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface DescribeTableStatisticsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   */
  ReplicationTaskArn?: string;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p>The table statistics.</p>
   */
  TableStatistics?: TableStatistics[];
}

export namespace DescribeTableStatisticsResponse {
  export const filterSensitiveLog = (obj: DescribeTableStatisticsResponse): any => ({
    ...obj,
  });
}

export interface ImportCertificateMessage {
  /**
   * <p>The location of an imported Oracle Wallet certificate for use with SSL.</p>
   */
  CertificateWallet?: Uint8Array;

  /**
   * <p>The contents of a <code>.pem</code> file, which contains an X.509 certificate.</p>
   */
  CertificatePem?: string;

  /**
   * <p>A customer-assigned name for the certificate. Identifiers must begin with a letter and
   *          must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or
   *          contain two consecutive hyphens.</p>
   */
  CertificateIdentifier: string | undefined;

  /**
   * <p>The tags associated with the certificate.</p>
   */
  Tags?: Tag[];
}

export namespace ImportCertificateMessage {
  export const filterSensitiveLog = (obj: ImportCertificateMessage): any => ({
    ...obj,
  });
}

export interface ImportCertificateResponse {
  /**
   * <p>The certificate to be uploaded.</p>
   */
  Certificate?: Certificate;
}

export namespace ImportCertificateResponse {
  export const filterSensitiveLog = (obj: ImportCertificateResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The certificate was not valid.</p>
 */
export interface InvalidCertificateFault extends __SmithyException, $MetadataBearer {
  name: "InvalidCertificateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidCertificateFault {
  export const filterSensitiveLog = (obj: InvalidCertificateFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ListTagsForResourceMessage {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the AWS DMS
   *          resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceMessage {
  export const filterSensitiveLog = (obj: ListTagsForResourceMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags for the resource.</p>
   */
  TagList?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyEndpointMessage {
  /**
   * <p>Settings in JSON format for the source and target SAP ASE endpoint. For information
   *          about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SAP.ConnectionAttrib">Extra connection attributes
   *             when using SAP ASE as a source for AWS DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SAP.ConnectionAttrib">Extra connection attributes
   *             when using SAP ASE as a target for AWS DMS</a> in the <i>AWS Database
   *             Migration Service User Guide.</i>
   *          </p>
   */
  SybaseSettings?: SybaseSettings;

  /**
   * <p>Settings in JSON format for the source and target Microsoft SQL Server endpoint. For
   *          information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SQLServer.ConnectionAttrib">Extra connection
   *             attributes when using SQL Server as a source for AWS DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SQLServer.ConnectionAttrib">
   *             Extra connection attributes when using SQL Server as a target for AWS DMS</a> in the
   *             <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings;

  /**
   * <p>Settings in JSON format for the source and target Oracle endpoint. For information about
   *          other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.ConnectionAttrib">Extra connection
   *             attributes when using Oracle as a source for AWS DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Oracle.ConnectionAttrib">
   *             Extra connection attributes when using Oracle as a target for AWS DMS</a> in the
   *             <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  OracleSettings?: OracleSettings;

  /**
   * <p>The database endpoint identifier. Identifiers must begin with a letter and must contain
   *          only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two
   *          consecutive hyphens.</p>
   */
  EndpointIdentifier?: string;

  /**
   * <p> The Amazon Resource Name (ARN) for the service access role you want to use to modify
   *          the endpoint. </p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * <p>The type of endpoint.  Valid values are <code>source</code> and <code>target</code>.</p>
   */
  EndpointType?: ReplicationEndpointTypeValue | string;

  /**
   * <p>The port used by the endpoint database.</p>
   */
  Port?: number;

  /**
   * <p>The SSL mode used to connect to the endpoint.  The default value is <code>none</code>.</p>
   */
  SslMode?: DmsSslModeValue | string;

  /**
   * <p>Additional attributes associated with the connection. To reset this parameter, pass the
   *          empty string ("") as an argument.</p>
   */
  ExtraConnectionAttributes?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The name of the endpoint database.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The user name to be used to login to the endpoint database.</p>
   */
  Username?: string;

  /**
   * <p>The external table definition.</p>
   */
  ExternalTableDefinition?: string;

  /**
   * <p>Settings in JSON format for the target Amazon DynamoDB endpoint. For information about other
   *             available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB.html">Using Object Mapping to Migrate
   *             Data to DynamoDB</a> in the <i>AWS Database Migration Service User
   *             Guide.</i>
   *          </p>
   */
  DynamoDbSettings?: DynamoDbSettings;

  /**
   * <p>The type of engine for the endpoint. Valid values, depending on the EndpointType,
   *          include
   *          <code>"mysql"</code>, <code>"oracle"</code>, <code>"postgres"</code>,
   *          <code>"mariadb"</code>, <code>"aurora"</code>, <code>"aurora-postgresql"</code>,
   *          <code>"redshift"</code>, <code>"s3"</code>, <code>"db2"</code>, <code>"azuredb"</code>,
   *          <code>"sybase"</code>, <code>"dynamodb"</code>, <code>"mongodb"</code>,
   *          <code>"kinesis"</code>, <code>"kafka"</code>, <code>"elasticsearch"</code>,
   *          <code>"documentdb"</code>, <code>"sqlserver"</code>, and <code>"neptune"</code>.</p>
   */
  EngineName?: string;

  /**
   * <p>Settings in JSON format for the source and target PostgreSQL endpoint. For information
   *          about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.ConnectionAttrib">Extra connection
   *             attributes when using PostgreSQL as a source for AWS DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.PostgreSQL.ConnectionAttrib">
   *             Extra connection attributes when using PostgreSQL as a target for AWS DMS</a> in the
   *             <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  PostgreSQLSettings?: PostgreSQLSettings;

  /**
   * <p>The settings in JSON format for the DMS transfer type of source endpoint. </p>
   *          <p>Attributes include the following:</p>
   *          <ul>
   *             <li>
   *                <p>serviceAccessRoleArn - The AWS Identity and Access Management (IAM) role that has
   *                permission to access the Amazon S3 bucket.</p>
   *             </li>
   *             <li>
   *                <p>BucketName - The name of the S3 bucket to use.</p>
   *             </li>
   *             <li>
   *                <p>compressionType - An optional parameter to use GZIP to compress the target files.
   *                Either set this parameter to NONE (the default) or don't use it to leave the
   *                files uncompressed.</p>
   *             </li>
   *          </ul>
   *          <p>Shorthand syntax for these settings is as follows: <code>ServiceAccessRoleArn=string
   *             ,BucketName=string,CompressionType=string</code>
   *          </p>
   *          <p>JSON syntax for these settings is as follows: <code>{ "ServiceAccessRoleArn": "string",
   *             "BucketName": "string", "CompressionType": "none"|"gzip" } </code>
   *          </p>
   */
  DmsTransferSettings?: DmsTransferSettings;

  /**
   * <p>The name of the server where the endpoint database resides.</p>
   */
  ServerName?: string;

  /**
   * <p>Settings in JSON format for the target Elasticsearch endpoint. For more information
   *          about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Elasticsearch.html#CHAP_Target.Elasticsearch.Configuration">Extra Connection Attributes When Using Elasticsearch as a Target for AWS DMS</a> in
   *          the <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  ElasticsearchSettings?: ElasticsearchSettings;

  /**
   * <p>Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For
   *          more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html">Using Amazon Kinesis Data Streams
   *             as a Target for AWS Database Migration Service</a> in the <i>AWS Database Migration Service User
   *                Guide.</i>
   *          </p>
   */
  KinesisSettings?: KinesisSettings;

  /**
   * <p>Provides information that defines an Amazon Redshift endpoint.</p>
   */
  RedshiftSettings?: RedshiftSettings;

  /**
   * <p>Settings in JSON format for the source and target MySQL endpoint. For information about
   *          other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.ConnectionAttrib">Extra connection
   *             attributes when using MySQL as a source for AWS DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.MySQL.ConnectionAttrib">Extra
   *             connection attributes when using a MySQL-compatible database as a target for AWS
   *             DMS</a> in the <i>AWS Database Migration Service User
   *          Guide.</i>
   *          </p>
   */
  MySQLSettings?: MySQLSettings;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>Settings in JSON format for the source IBM Db2 LUW endpoint. For information about other
   *          available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DB2.ConnectionAttrib">Extra connection attributes
   *             when using Db2 LUW as a source for AWS DMS</a> in the <i>AWS Database
   *             Migration Service User Guide.</i>
   *          </p>
   */
  IBMDb2Settings?: IBMDb2Settings;

  /**
   * <p>Settings in JSON format for the target Amazon S3 endpoint. For more information about
   *             the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring">Extra
   *             Connection Attributes When Using Amazon S3 as a Target for AWS DMS</a> in the
   *             <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  S3Settings?: S3Settings;

  /**
   * <p>Settings in JSON format for the target Amazon Neptune endpoint. For more information
   *          about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.EndpointSettings">Specifying Endpoint Settings for Amazon Neptune as a Target</a>
   *          in the <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  NeptuneSettings?: NeptuneSettings;

  /**
   * <p>Settings in JSON format for the target Apache Kafka endpoint. For more information about
   *          the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html">Using Apache Kafka as a Target for AWS
   *             Database Migration Service</a> in the <i>AWS Database Migration Service User
   *                Guide.</i>
   *          </p>
   */
  KafkaSettings?: KafkaSettings;

  /**
   * <p>Settings in JSON format for the source MongoDB endpoint. For more information about the
   *          available settings, see the configuration properties section in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html"> Using MongoDB as a Target for AWS
   *             Database Migration Service</a> in the <i>AWS Database Migration Service User
   *             Guide.</i>
   *          </p>
   */
  MongoDbSettings?: MongoDbSettings;

  /**
   * <p>The password to be used to login to the endpoint database.</p>
   */
  Password?: string;
}

export namespace ModifyEndpointMessage {
  export const filterSensitiveLog = (obj: ModifyEndpointMessage): any => ({
    ...obj,
    ...(obj.SybaseSettings && { SybaseSettings: SybaseSettings.filterSensitiveLog(obj.SybaseSettings) }),
    ...(obj.MicrosoftSQLServerSettings && {
      MicrosoftSQLServerSettings: MicrosoftSQLServerSettings.filterSensitiveLog(obj.MicrosoftSQLServerSettings),
    }),
    ...(obj.OracleSettings && { OracleSettings: OracleSettings.filterSensitiveLog(obj.OracleSettings) }),
    ...(obj.PostgreSQLSettings && {
      PostgreSQLSettings: PostgreSQLSettings.filterSensitiveLog(obj.PostgreSQLSettings),
    }),
    ...(obj.RedshiftSettings && { RedshiftSettings: RedshiftSettings.filterSensitiveLog(obj.RedshiftSettings) }),
    ...(obj.MySQLSettings && { MySQLSettings: MySQLSettings.filterSensitiveLog(obj.MySQLSettings) }),
    ...(obj.IBMDb2Settings && { IBMDb2Settings: IBMDb2Settings.filterSensitiveLog(obj.IBMDb2Settings) }),
    ...(obj.MongoDbSettings && { MongoDbSettings: MongoDbSettings.filterSensitiveLog(obj.MongoDbSettings) }),
    ...(obj.Password && { Password: SENSITIVE_STRING }),
  });
}

/**
 * <p></p>
 */
export interface ModifyEndpointResponse {
  /**
   * <p>The modified endpoint.</p>
   */
  Endpoint?: Endpoint;
}

export namespace ModifyEndpointResponse {
  export const filterSensitiveLog = (obj: ModifyEndpointResponse): any => ({
    ...obj,
    ...(obj.Endpoint && { Endpoint: Endpoint.filterSensitiveLog(obj.Endpoint) }),
  });
}

/**
 * <p></p>
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * <p> A list of event categories for a source type that you want to subscribe to. Use the
   *             <code>DescribeEventCategories</code> action to see a list of event categories. </p>
   */
  EventCategories?: string[];

  /**
   * <p> A Boolean value; set to <b>true</b> to activate the
   *          subscription. </p>
   */
  Enabled?: boolean;

  /**
   * <p>The name of the AWS DMS event notification subscription to be modified.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification.
   *          The ARN is created by Amazon SNS when you create a topic and subscribe to it.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p> The type of AWS DMS resource that generates the events you want to subscribe to. </p>
   *          <p>Valid values: replication-instance | replication-task</p>
   */
  SourceType?: string;
}

export namespace ModifyEventSubscriptionMessage {
  export const filterSensitiveLog = (obj: ModifyEventSubscriptionMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyEventSubscriptionResponse {
  /**
   * <p>The modified event subscription.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace ModifyEventSubscriptionResponse {
  export const filterSensitiveLog = (obj: ModifyEventSubscriptionResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyReplicationInstanceMessage {
  /**
   * <p>The compute and memory capacity of the replication instance as defined for the specified
   *          replication instance class. For example to specify the instance class dms.c4.large, set this parameter to <code>"dms.c4.large"</code>.</p>
   *          <p>For more information on the settings and capacities for the available replication instance classes, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth">
   *             Selecting the right AWS DMS replication instance for your migration</a>.
   *       </p>
   */
  ReplicationInstanceClass?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * <p>A value that indicates that minor version upgrades are applied automatically to the
   *          replication instance during the maintenance window. Changing this parameter doesn't result
   *          in an outage, except in the case dsecribed following. The change is asynchronously applied
   *          as soon as possible. </p>
   *          <p>An outage does result if these factors apply: </p>
   *          <ul>
   *             <li>
   *                <p>This parameter is set to <code>true</code> during the maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>A newer minor version is available. </p>
   *             </li>
   *             <li>
   *                <p>AWS DMS has enabled automatic patching for the given engine version. </p>
   *             </li>
   *          </ul>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p> Specifies the VPC security group to be used with the replication instance. The VPC
   *          security group must work with the VPC containing the replication instance. </p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * <p>Indicates that major version upgrades are allowed. Changing this parameter does not
   *          result in an outage, and the change is asynchronously applied as soon as possible.</p>
   *          <p>This parameter must be set to <code>true</code> when specifying a value for the
   *             <code>EngineVersion</code> parameter that is a different major version than the
   *          replication instance's current version.</p>
   */
  AllowMajorVersionUpgrade?: boolean;

  /**
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You can't set the
   *             <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to
   *             <code>true</code>. </p>
   */
  MultiAZ?: boolean;

  /**
   * <p>Indicates whether the changes should be applied immediately or during the next
   *          maintenance window.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The engine version number of the replication instance.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The replication instance identifier. This parameter is stored as a lowercase
   *          string.</p>
   */
  ReplicationInstanceIdentifier?: string;

  /**
   * <p>The weekly time range (in UTC) during which system maintenance can occur, which might
   *          result in an outage. Changing this parameter does not result in an outage, except in the
   *          following situation, and the change is asynchronously applied as soon as possible. If
   *          moving this window to the current time, there must be at least 30 minutes between the
   *          current time and end of the window to ensure pending changes are applied.</p>
   *          <p>Default: Uses existing setting</p>
   *          <p>Format: ddd:hh24:mi-ddd:hh24:mi</p>
   *          <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *          <p>Constraints: Must be at least 30 minutes</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The amount of storage (in gigabytes) to be allocated for the replication
   *          instance.</p>
   */
  AllocatedStorage?: number;
}

export namespace ModifyReplicationInstanceMessage {
  export const filterSensitiveLog = (obj: ModifyReplicationInstanceMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyReplicationInstanceResponse {
  /**
   * <p>The modified replication instance.</p>
   */
  ReplicationInstance?: ReplicationInstance;
}

export namespace ModifyReplicationInstanceResponse {
  export const filterSensitiveLog = (obj: ModifyReplicationInstanceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An upgrade dependency is preventing the database migration.</p>
 */
export interface UpgradeDependencyFailureFault extends __SmithyException, $MetadataBearer {
  name: "UpgradeDependencyFailureFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace UpgradeDependencyFailureFault {
  export const filterSensitiveLog = (obj: UpgradeDependencyFailureFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyReplicationSubnetGroupMessage {
  /**
   * <p>A list of subnet IDs.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The name of the replication instance subnet group.</p>
   */
  ReplicationSubnetGroupIdentifier: string | undefined;

  /**
   * <p>A description for the replication instance subnet group.</p>
   */
  ReplicationSubnetGroupDescription?: string;
}

export namespace ModifyReplicationSubnetGroupMessage {
  export const filterSensitiveLog = (obj: ModifyReplicationSubnetGroupMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyReplicationSubnetGroupResponse {
  /**
   * <p>The modified replication subnet group.</p>
   */
  ReplicationSubnetGroup?: ReplicationSubnetGroup;
}

export namespace ModifyReplicationSubnetGroupResponse {
  export const filterSensitiveLog = (obj: ModifyReplicationSubnetGroupResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified subnet is already in use.</p>
 */
export interface SubnetAlreadyInUse extends __SmithyException, $MetadataBearer {
  name: "SubnetAlreadyInUse";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace SubnetAlreadyInUse {
  export const filterSensitiveLog = (obj: SubnetAlreadyInUse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyReplicationTaskMessage {
  /**
   * <p>When using the AWS CLI or boto3, provide the path of the JSON file that contains the
   *          table mappings. Precede the path with <code>file://</code>. When working with the DMS API,
   *          provide the JSON as the parameter value, for example: <code>--table-mappings
   *             file://mappingfile.json</code>
   *          </p>
   */
  TableMappings?: string;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to start. Use either
   *          CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p> The value can be in date, checkpoint, or LSN/SCN format.</p>
   *          <p>Date Example: --cdc-start-position “2018-03-08T12:12:12”</p>
   *          <p>Checkpoint Example: --cdc-start-position
   *          "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93"</p>
   *          <p>LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</p>
   *          <note>
   *             <p>When you use this task setting with a source PostgreSQL database, a logical
   *             replication slot should already be created and associated with the source endpoint. You
   *             can verify this by setting the <code>slotName</code> extra connection attribute to the
   *             name of this logical replication slot. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib">Extra Connection Attributes When Using PostgreSQL as a Source
   *                for AWS DMS</a>.</p>
   *          </note>
   */
  CdcStartPosition?: string;

  /**
   * <p>JSON file that contains settings for the task, such as task metadata settings.</p>
   */
  ReplicationTaskSettings?: string;

  /**
   * <p>The replication task identifier.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain 1-255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  ReplicationTaskIdentifier?: string;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   *          <p>Server time example: --cdc-stop-position “server_time:3018-02-09T12:12:12”</p>
   *          <p>Commit time example: --cdc-stop-position “commit_time: 3018-02-09T12:12:12 “</p>
   */
  CdcStopPosition?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   */
  ReplicationTaskArn: string | undefined;

  /**
   * <p>The migration type. Valid values: <code>full-load</code> | <code>cdc</code> | <code>full-load-and-cdc</code>
   *          </p>
   */
  MigrationType?: MigrationTypeValue | string;

  /**
   * <p>Supplemental information that the task requires to migrate the data for certain source and target endpoints.
   *             For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html">Specifying Supplemental Data for Task Settings</a> in the
   *          <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  TaskData?: string;

  /**
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either
   *          CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>
   */
  CdcStartTime?: Date;
}

export namespace ModifyReplicationTaskMessage {
  export const filterSensitiveLog = (obj: ModifyReplicationTaskMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ModifyReplicationTaskResponse {
  /**
   * <p>The replication task that was modified.</p>
   */
  ReplicationTask?: ReplicationTask;
}

export namespace ModifyReplicationTaskResponse {
  export const filterSensitiveLog = (obj: ModifyReplicationTaskResponse): any => ({
    ...obj,
  });
}

export interface RebootReplicationInstanceMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * <p>If this parameter is <code>true</code>, the reboot is conducted through a Multi-AZ
   *          failover. (If the instance isn't configured for Multi-AZ, then you can't specify
   *             <code>true</code>.)</p>
   */
  ForceFailover?: boolean;
}

export namespace RebootReplicationInstanceMessage {
  export const filterSensitiveLog = (obj: RebootReplicationInstanceMessage): any => ({
    ...obj,
  });
}

export interface RebootReplicationInstanceResponse {
  /**
   * <p>The replication instance that is being rebooted. </p>
   */
  ReplicationInstance?: ReplicationInstance;
}

export namespace RebootReplicationInstanceResponse {
  export const filterSensitiveLog = (obj: RebootReplicationInstanceResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RefreshSchemasMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

export namespace RefreshSchemasMessage {
  export const filterSensitiveLog = (obj: RefreshSchemasMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RefreshSchemasResponse {
  /**
   * <p>The status of the refreshed schema.</p>
   */
  RefreshSchemasStatus?: RefreshSchemasStatus;
}

export namespace RefreshSchemasResponse {
  export const filterSensitiveLog = (obj: RefreshSchemasResponse): any => ({
    ...obj,
  });
}

export enum ReloadOptionValue {
  DATA_RELOAD = "data-reload",
  VALIDATE_ONLY = "validate-only",
}

/**
 * <p>Provides the name of the schema and table to be reloaded.</p>
 */
export interface TableToReload {
  /**
   * <p>The schema name of the table to be reloaded.</p>
   */
  SchemaName: string | undefined;

  /**
   * <p>The table name of the table to be reloaded.</p>
   */
  TableName: string | undefined;
}

export namespace TableToReload {
  export const filterSensitiveLog = (obj: TableToReload): any => ({
    ...obj,
  });
}

export interface ReloadTablesMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task. </p>
   */
  ReplicationTaskArn: string | undefined;

  /**
   * <p>The name and schema of the table to be reloaded. </p>
   */
  TablesToReload: TableToReload[] | undefined;

  /**
   * <p>Options for reload. Specify <code>data-reload</code> to reload the data and re-validate
   *          it if validation is enabled. Specify <code>validate-only</code> to re-validate the table.
   *          This option applies only when validation is enabled for the task. </p>
   *          <p>Valid values: data-reload, validate-only</p>
   *          <p>Default value is data-reload.</p>
   */
  ReloadOption?: ReloadOptionValue | string;
}

export namespace ReloadTablesMessage {
  export const filterSensitiveLog = (obj: ReloadTablesMessage): any => ({
    ...obj,
  });
}

export interface ReloadTablesResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task. </p>
   */
  ReplicationTaskArn?: string;
}

export namespace ReloadTablesResponse {
  export const filterSensitiveLog = (obj: ReloadTablesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Removes one or more tags from an AWS DMS resource.</p>
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * <p>The tag key (name) of the tag to be removed.</p>
   */
  TagKeys: string[] | undefined;

  /**
   * <p>An AWS DMS resource from which you want to remove tag(s). The value for this parameter is an Amazon Resource Name (ARN).</p>
   */
  ResourceArn: string | undefined;
}

export namespace RemoveTagsFromResourceMessage {
  export const filterSensitiveLog = (obj: RemoveTagsFromResourceMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface RemoveTagsFromResourceResponse {}

export namespace RemoveTagsFromResourceResponse {
  export const filterSensitiveLog = (obj: RemoveTagsFromResourceResponse): any => ({
    ...obj,
  });
}

export enum StartReplicationTaskTypeValue {
  RELOAD_TARGET = "reload-target",
  RESUME_PROCESSING = "resume-processing",
  START_REPLICATION = "start-replication",
}

/**
 * <p></p>
 */
export interface StartReplicationTaskMessage {
  /**
   * <p>Indicates when you want a change data capture (CDC) operation to start. Use either
   *          CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p> The value can be in date, checkpoint, or LSN/SCN format.</p>
   *          <p>Date Example: --cdc-start-position “2018-03-08T12:12:12”</p>
   *          <p>Checkpoint Example: --cdc-start-position
   *          "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93"</p>
   *          <p>LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</p>
   *          <note>
   *             <p>When you use this task setting with a source PostgreSQL database, a logical
   *             replication slot should already be created and associated with the source endpoint. You
   *             can verify this by setting the <code>slotName</code> extra connection attribute to the
   *             name of this logical replication slot. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib">Extra Connection Attributes When Using PostgreSQL as a Source
   *                for AWS DMS</a>.</p>
   *          </note>
   */
  CdcStartPosition?: string;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   *          <p>Server time example: --cdc-stop-position “server_time:3018-02-09T12:12:12”</p>
   *          <p>Commit time example: --cdc-stop-position “commit_time: 3018-02-09T12:12:12 “</p>
   */
  CdcStopPosition?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication task to be started.</p>
   */
  ReplicationTaskArn: string | undefined;

  /**
   * <p>The type of replication task.</p>
   */
  StartReplicationTaskType: StartReplicationTaskTypeValue | string | undefined;

  /**
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either
   *          CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>
   */
  CdcStartTime?: Date;
}

export namespace StartReplicationTaskMessage {
  export const filterSensitiveLog = (obj: StartReplicationTaskMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface StartReplicationTaskResponse {
  /**
   * <p>The replication task started.</p>
   */
  ReplicationTask?: ReplicationTask;
}

export namespace StartReplicationTaskResponse {
  export const filterSensitiveLog = (obj: StartReplicationTaskResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface StartReplicationTaskAssessmentMessage {
  /**
   * <p> The Amazon Resource Name (ARN) of the replication task. </p>
   */
  ReplicationTaskArn: string | undefined;
}

export namespace StartReplicationTaskAssessmentMessage {
  export const filterSensitiveLog = (obj: StartReplicationTaskAssessmentMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface StartReplicationTaskAssessmentResponse {
  /**
   * <p> The assessed replication task. </p>
   */
  ReplicationTask?: ReplicationTask;
}

export namespace StartReplicationTaskAssessmentResponse {
  export const filterSensitiveLog = (obj: StartReplicationTaskAssessmentResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An AWS Key Management Service (AWS KMS) error is preventing access to AWS KMS.</p>
 */
export interface KMSFault extends __SmithyException, $MetadataBearer {
  name: "KMSFault";
  $fault: "client";
  message?: string;
}

export namespace KMSFault {
  export const filterSensitiveLog = (obj: KMSFault): any => ({
    ...obj,
  });
}

/**
 * <p>Insufficient privileges are preventing access to an Amazon S3 object.</p>
 */
export interface S3AccessDeniedFault extends __SmithyException, $MetadataBearer {
  name: "S3AccessDeniedFault";
  $fault: "client";
  message?: string;
}

export namespace S3AccessDeniedFault {
  export const filterSensitiveLog = (obj: S3AccessDeniedFault): any => ({
    ...obj,
  });
}

/**
 * <p>A specified Amazon S3 bucket, bucket folder, or other object can't be
 *             found.</p>
 */
export interface S3ResourceNotFoundFault extends __SmithyException, $MetadataBearer {
  name: "S3ResourceNotFoundFault";
  $fault: "client";
  message?: string;
}

export namespace S3ResourceNotFoundFault {
  export const filterSensitiveLog = (obj: S3ResourceNotFoundFault): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface StartReplicationTaskAssessmentRunMessage {
  /**
   * <p>ARN of a service role needed to start the assessment run.</p>
   */
  ServiceAccessRoleArn: string | undefined;

  /**
   * <p>Unique name to identify the assessment run.</p>
   */
  AssessmentRunName: string | undefined;

  /**
   * <p>Folder within an Amazon S3 bucket where you want AWS DMS to store the results of this assessment
   *          run.</p>
   */
  ResultLocationFolder?: string;

  /**
   * <p>Encryption mode that you can specify to encrypt the results of this assessment run. If
   *          you don't specify this request parameter, AWS DMS stores the assessment run results
   *          without encryption. You can specify one of the options following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"SSE_S3"</code> – The server-side encryption provided as a default by
   *                Amazon S3.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"SSE_KMS"</code> – AWS Key Management Service (AWS KMS) encryption.
   *                This encryption can use either a custom KMS encryption key that you specify or the
   *                default KMS encryption key that DMS provides.</p>
   *             </li>
   *          </ul>
   */
  ResultEncryptionMode?: string;

  /**
   * <p>Space-separated list of names for specific individual assessments that you want to
   *          include. These names come from the default list of individual assessments that AWS DMS
   *          supports for the associated migration task. This task is specified by
   *             <code>ReplicationTaskArn</code>.</p>
   *          <note>
   *             <p>You can't set a value for <code>IncludeOnly</code> if you also set a value for
   *             <code>Exclude</code> in the API operation. </p>
   *             <p>To identify the names of the default individual assessments that AWS DMS
   *             supports for the associated migration task, run the
   *             <code>DescribeApplicableIndividualAssessments</code> operation using its own
   *             <code>ReplicationTaskArn</code> request parameter.</p>
   *          </note>
   */
  IncludeOnly?: string[];

  /**
   * <p>Space-separated list of names for specific individual assessments that you want to
   *          exclude. These names come from the default list of individual assessments that AWS DMS
   *          supports for the associated migration task. This task is specified by
   *             <code>ReplicationTaskArn</code>.</p>
   *          <note>
   *             <p>You can't set a value for <code>Exclude</code> if you also set a value for
   *             <code>IncludeOnly</code> in the API operation.</p>
   *             <p>To identify the names of the default individual assessments that AWS DMS
   *             supports for the associated migration task, run the
   *             <code>DescribeApplicableIndividualAssessments</code> operation using its own
   *             <code>ReplicationTaskArn</code> request parameter.</p>
   *          </note>
   */
  Exclude?: string[];

  /**
   * <p>Amazon S3 bucket where you want AWS DMS to store the results of this assessment
   *          run.</p>
   */
  ResultLocationBucket: string | undefined;

  /**
   * <p>Amazon Resource Name (ARN) of the migration task associated with the premigration
   *          assessment run that you want to start.</p>
   */
  ReplicationTaskArn: string | undefined;

  /**
   * <p>ARN of a custom KMS encryption key that you specify when you set
   *             <code>ResultEncryptionMode</code> to <code>"SSE_KMS</code>".</p>
   */
  ResultKmsKeyArn?: string;
}

export namespace StartReplicationTaskAssessmentRunMessage {
  export const filterSensitiveLog = (obj: StartReplicationTaskAssessmentRunMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface StartReplicationTaskAssessmentRunResponse {
  /**
   * <p>The premigration assessment run that was started.</p>
   */
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
}

export namespace StartReplicationTaskAssessmentRunResponse {
  export const filterSensitiveLog = (obj: StartReplicationTaskAssessmentRunResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface StopReplicationTaskMessage {
  /**
   * <p>The Amazon Resource Name(ARN) of the replication task to be stopped.</p>
   */
  ReplicationTaskArn: string | undefined;
}

export namespace StopReplicationTaskMessage {
  export const filterSensitiveLog = (obj: StopReplicationTaskMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface StopReplicationTaskResponse {
  /**
   * <p>The replication task stopped.</p>
   */
  ReplicationTask?: ReplicationTask;
}

export namespace StopReplicationTaskResponse {
  export const filterSensitiveLog = (obj: StopReplicationTaskResponse): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface TestConnectionMessage {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;
}

export namespace TestConnectionMessage {
  export const filterSensitiveLog = (obj: TestConnectionMessage): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface TestConnectionResponse {
  /**
   * <p>The connection tested.</p>
   */
  Connection?: Connection;
}

export namespace TestConnectionResponse {
  export const filterSensitiveLog = (obj: TestConnectionResponse): any => ({
    ...obj,
  });
}
