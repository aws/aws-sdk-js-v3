import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
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
    ...obj
  });
  export const isa = (o: any): o is AccessDeniedFault =>
    __isa(o, "AccessDeniedFault");
}

/**
 * <p>Describes a quota for an AWS account, for example, the number of replication instances
 *          allowed.</p>
 */
export interface AccountQuota {
  __type?: "AccountQuota";
  /**
   * <p>The name of the AWS DMS quota for this AWS account.</p>
   */
  AccountQuotaName?: string;

  /**
   * <p>The maximum allowed value for the quota.</p>
   */
  Max?: number;

  /**
   * <p>The amount currently used toward the quota maximum.</p>
   */
  Used?: number;
}

export namespace AccountQuota {
  export const filterSensitiveLog = (obj: AccountQuota): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccountQuota => __isa(o, "AccountQuota");
}

/**
 * <p>Associates a set of tags with an AWS DMS resource.</p>
 */
export interface AddTagsToResourceMessage {
  __type?: "AddTagsToResourceMessage";
  /**
   * <p>Identifies the AWS DMS resource to which tags should be added. The value for this parameter is an Amazon Resource Name (ARN).</p>
   *          <p>For AWS DMS, you can tag a replication instance, an endpoint, or a replication task.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>One or more tags to be assigned to the resource.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace AddTagsToResourceMessage {
  export const filterSensitiveLog = (obj: AddTagsToResourceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddTagsToResourceMessage =>
    __isa(o, "AddTagsToResourceMessage");
}

/**
 * <p></p>
 */
export interface AddTagsToResourceResponse {
  __type?: "AddTagsToResourceResponse";
}

export namespace AddTagsToResourceResponse {
  export const filterSensitiveLog = (obj: AddTagsToResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is AddTagsToResourceResponse =>
    __isa(o, "AddTagsToResourceResponse");
}

/**
 * <p></p>
 */
export interface ApplyPendingMaintenanceActionMessage {
  __type?: "ApplyPendingMaintenanceActionMessage";
  /**
   * <p>The pending maintenance action to apply to this resource.</p>
   */
  ApplyAction: string | undefined;

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

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS DMS resource that the pending maintenance
   *          action applies to.</p>
   */
  ReplicationInstanceArn: string | undefined;
}

export namespace ApplyPendingMaintenanceActionMessage {
  export const filterSensitiveLog = (
    obj: ApplyPendingMaintenanceActionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplyPendingMaintenanceActionMessage =>
    __isa(o, "ApplyPendingMaintenanceActionMessage");
}

/**
 * <p></p>
 */
export interface ApplyPendingMaintenanceActionResponse {
  __type?: "ApplyPendingMaintenanceActionResponse";
  /**
   * <p>The AWS DMS resource that the pending maintenance action will be applied to.</p>
   */
  ResourcePendingMaintenanceActions?: ResourcePendingMaintenanceActions;
}

export namespace ApplyPendingMaintenanceActionResponse {
  export const filterSensitiveLog = (
    obj: ApplyPendingMaintenanceActionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplyPendingMaintenanceActionResponse =>
    __isa(o, "ApplyPendingMaintenanceActionResponse");
}

export enum AuthMechanismValue {
  DEFAULT = "default",
  MONGODB_CR = "mongodb_cr",
  SCRAM_SHA_1 = "scram_sha_1"
}

export enum AuthTypeValue {
  NO = "no",
  PASSWORD = "password"
}

/**
 * <p></p>
 */
export interface AvailabilityZone {
  __type?: "AvailabilityZone";
  /**
   * <p>The name of the availability zone.</p>
   */
  Name?: string;
}

export namespace AvailabilityZone {
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj
  });
  export const isa = (o: any): o is AvailabilityZone =>
    __isa(o, "AvailabilityZone");
}

/**
 * <p>The SSL certificate that can be used to encrypt connections between the endpoints and
 *          the replication instance.</p>
 */
export interface Certificate {
  __type?: "Certificate";
  /**
   * <p>The Amazon Resource Name (ARN) for the certificate.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The date that the certificate was created.</p>
   */
  CertificateCreationDate?: Date;

  /**
   * <p>A customer-assigned name for the certificate. Identifiers must begin with a letter;
   *             must contain only ASCII letters, digits, and hyphens; and must not end with a hyphen or
   *             contain two consecutive hyphens.</p>
   */
  CertificateIdentifier?: string;

  /**
   * <p>The owner of the certificate.</p>
   */
  CertificateOwner?: string;

  /**
   * <p>The contents of a <code>.pem</code> file, which contains an X.509 certificate.</p>
   */
  CertificatePem?: string;

  /**
   * <p>The location of an imported Oracle Wallet certificate for use with SSL.</p>
   */
  CertificateWallet?: Uint8Array;

  /**
   * <p>The key length of the cryptographic algorithm being used.</p>
   */
  KeyLength?: number;

  /**
   * <p>The signing algorithm for the certificate.</p>
   */
  SigningAlgorithm?: string;

  /**
   * <p>The beginning date that the certificate is valid.</p>
   */
  ValidFromDate?: Date;

  /**
   * <p>The final date that the certificate is valid.</p>
   */
  ValidToDate?: Date;
}

export namespace Certificate {
  export const filterSensitiveLog = (obj: Certificate): any => ({
    ...obj
  });
  export const isa = (o: any): o is Certificate => __isa(o, "Certificate");
}

export enum CompressionTypeValue {
  GZIP = "gzip",
  NONE = "none"
}

/**
 * <p></p>
 */
export interface Connection {
  __type?: "Connection";
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn?: string;

  /**
   * <p>The identifier of the endpoint. Identifiers must begin with a letter; must contain only
   *          ASCII letters, digits, and hyphens; and must not end with a hyphen or contain two
   *          consecutive hyphens.</p>
   */
  EndpointIdentifier?: string;

  /**
   * <p>The error message when the connection last failed.</p>
   */
  LastFailureMessage?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * <p>The replication instance identifier. This parameter is stored as a lowercase
   *          string.</p>
   */
  ReplicationInstanceIdentifier?: string;

  /**
   * <p>The connection status.</p>
   */
  Status?: string;
}

export namespace Connection {
  export const filterSensitiveLog = (obj: Connection): any => ({
    ...obj
  });
  export const isa = (o: any): o is Connection => __isa(o, "Connection");
}

/**
 * <p></p>
 */
export interface CreateEndpointMessage {
  __type?: "CreateEndpointMessage";
  /**
   * <p>The Amazon Resource Name (ARN) for the certificate.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The name of the endpoint database.</p>
   */
  DatabaseName?: string;

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
   * <p>Settings in JSON format for the target Amazon DynamoDB endpoint. For more information
   *          about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB.html">Using Object Mapping to Migrate
   *             Data to DynamoDB</a> in the <i>AWS Database Migration Service User
   *             Guide.</i>
   *          </p>
   */
  DynamoDbSettings?: DynamoDbSettings;

  /**
   * <p>Settings in JSON format for the target Elasticsearch endpoint. For more information
   *          about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Elasticsearch.html#CHAP_Target.Elasticsearch.Configuration">Extra Connection Attributes When Using Elasticsearch as a Target for AWS DMS</a> in
   *          the <i>AWS Database Migration User Guide.</i>
   *          </p>
   */
  ElasticsearchSettings?: ElasticsearchSettings;

  /**
   * <p>The database endpoint identifier. Identifiers must begin with a letter; must contain
   *          only ASCII letters, digits, and hyphens; and must not end with a hyphen or contain two
   *          consecutive hyphens.</p>
   */
  EndpointIdentifier: string | undefined;

  /**
   * <p>The type of endpoint.  Valid values are <code>source</code> and <code>target</code>.</p>
   */
  EndpointType: ReplicationEndpointTypeValue | string | undefined;

  /**
   * <p>The type of engine for the endpoint. Valid values, depending on the
   *             <code>EndpointType</code> value, include <code>mysql</code>, <code>oracle</code>,
   *             <code>postgres</code>, <code>mariadb</code>, <code>aurora</code>,
   *             <code>aurora-postgresql</code>, <code>redshift</code>, <code>s3</code>,
   *          <code>db2</code>, <code>azuredb</code>, <code>sybase</code>, <code>dynamodb</code>,
   *             <code>mongodb</code>, and <code>sqlserver</code>.</p>
   */
  EngineName: string | undefined;

  /**
   * <p>The external table definition. </p>
   */
  ExternalTableDefinition?: string;

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
   * <p>Settings in JSON format for the target Amazon Kinesis Data Streams endpoint. For more
   *          information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html#CHAP_Target.Kinesis.ObjectMapping">Using Object Mapping to Migrate Data to a Kinesis Data Stream</a> in the
   *             <i>AWS Database Migration User Guide.</i>
   *          </p>
   */
  KinesisSettings?: KinesisSettings;

  /**
   * <p>An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then
   *            AWS DMS uses your default encryption key.</p>
   *          <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account has a
   *          different default encryption key for each AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Settings in JSON format for the source MongoDB endpoint. For more information about the
   *          available settings, see the configuration properties section in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html"> Using MongoDB as a Target for AWS
   *             Database Migration Service</a> in the <i>AWS Database Migration Service User
   *             Guide.</i>
   *
   *          </p>
   */
  MongoDbSettings?: MongoDbSettings;

  /**
   * <p>The password to be used to log in to the endpoint database.</p>
   */
  Password?: string;

  /**
   * <p>The port used by the endpoint database.</p>
   */
  Port?: number;

  /**
   * <p></p>
   */
  RedshiftSettings?: RedshiftSettings;

  /**
   * <p>Settings in JSON format for the target Amazon S3 endpoint. For more information about
   *          the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring">Extra
   *             Connection Attributes When Using Amazon S3 as a Target for AWS DMS</a> in the
   *             <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  S3Settings?: S3Settings;

  /**
   * <p>The name of the server where the endpoint database resides.</p>
   */
  ServerName?: string;

  /**
   * <p> The Amazon Resource Name (ARN) for the service access role that you want to use to
   *          create the endpoint. </p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * <p>The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is <code>none</code>
   *          </p>
   */
  SslMode?: DmsSslModeValue | string;

  /**
   * <p>One or more tags to be assigned to the endpoint.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The user name to be used to log in to the endpoint database.</p>
   */
  Username?: string;
}

export namespace CreateEndpointMessage {
  export const filterSensitiveLog = (obj: CreateEndpointMessage): any => ({
    ...obj,
    ...(obj.MongoDbSettings && {
      MongoDbSettings: MongoDbSettings.filterSensitiveLog(obj.MongoDbSettings)
    }),
    ...(obj.Password && { Password: SENSITIVE_STRING }),
    ...(obj.RedshiftSettings && {
      RedshiftSettings: RedshiftSettings.filterSensitiveLog(
        obj.RedshiftSettings
      )
    })
  });
  export const isa = (o: any): o is CreateEndpointMessage =>
    __isa(o, "CreateEndpointMessage");
}

/**
 * <p></p>
 */
export interface CreateEndpointResponse {
  __type?: "CreateEndpointResponse";
  /**
   * <p>The endpoint that was created.</p>
   */
  Endpoint?: Endpoint;
}

export namespace CreateEndpointResponse {
  export const filterSensitiveLog = (obj: CreateEndpointResponse): any => ({
    ...obj,
    ...(obj.Endpoint && { Endpoint: Endpoint.filterSensitiveLog(obj.Endpoint) })
  });
  export const isa = (o: any): o is CreateEndpointResponse =>
    __isa(o, "CreateEndpointResponse");
}

/**
 * <p></p>
 */
export interface CreateEventSubscriptionMessage {
  __type?: "CreateEventSubscriptionMessage";
  /**
   * <p> A Boolean value; set to <code>true</code> to activate the subscription, or set to
   *             <code>false</code> to create the subscription but not activate it. </p>
   */
  Enabled?: boolean;

  /**
   * <p>A list of event categories for a source type that you want to subscribe to. For more
   *            information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and
   *                Notifications</a> in the <i>AWS Database Migration Service User
   *                    Guide.</i>
   *          </p>
   */
  EventCategories?: string[];

  /**
   * <p> The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification.
   *          The ARN is created by Amazon SNS when you create a topic and subscribe to it. </p>
   */
  SnsTopicArn: string | undefined;

  /**
   * <p>A list of identifiers for which AWS DMS provides notification events.</p>
   *          <p>If you don't specify a value, notifications are provided for all sources.</p>
   *         <p>If you specify multiple values, they must be of the same type. For example, if you
   *             specify a database instance ID, then all of the other values must be database instance
   *             IDs.</p>
   */
  SourceIds?: string[];

  /**
   * <p> The type of AWS DMS resource that generates the events. For example, if you want to be
   *          notified of events generated by a replication instance, you set this parameter to
   *             <code>replication-instance</code>. If this value is not specified, all events are
   *          returned. </p>
   *          <p>Valid values: <code>replication-instance</code> | <code>replication-task</code>
   *          </p>
   */
  SourceType?: string;

  /**
   * <p>The name of the AWS DMS event notification subscription. This name must be less than 255 characters.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * <p>One or more tags to be assigned to the event subscription.</p>
   */
  Tags?: Tag[];
}

export namespace CreateEventSubscriptionMessage {
  export const filterSensitiveLog = (
    obj: CreateEventSubscriptionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateEventSubscriptionMessage =>
    __isa(o, "CreateEventSubscriptionMessage");
}

/**
 * <p></p>
 */
export interface CreateEventSubscriptionResponse {
  __type?: "CreateEventSubscriptionResponse";
  /**
   * <p>The event subscription that was created.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace CreateEventSubscriptionResponse {
  export const filterSensitiveLog = (
    obj: CreateEventSubscriptionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateEventSubscriptionResponse =>
    __isa(o, "CreateEventSubscriptionResponse");
}

/**
 * <p></p>
 */
export interface CreateReplicationInstanceMessage {
  __type?: "CreateReplicationInstanceMessage";
  /**
   * <p>The amount of storage (in gigabytes) to be initially allocated for the replication
   *          instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Indicates whether minor engine upgrades will be applied automatically to the replication
   *          instance during the maintenance window. This parameter defaults to <code>true</code>.</p>
   *          <p>Default: <code>true</code>
   *          </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The AWS Availability Zone where the replication instance will be created. The
   *             default value is a random, system-chosen Availability Zone in the endpoint's AWS
   *             Region, for example: <code>us-east-1d</code>
   *          </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>A list of DNS name servers supported for the replication instance.</p>
   */
  DnsNameServers?: string;

  /**
   * <p>The engine version number of the replication instance.</p>
   */
  EngineVersion?: string;

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
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You cannot set the
   *             <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to
   *             <code>true</code>. </p>
   */
  MultiAZ?: boolean;

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
   * <p> Specifies the accessibility options for the replication instance. A value of
   *             <code>true</code> represents an instance with a public IP address. A value of
   *             <code>false</code> represents an instance with a private IP address. The default value
   *          is <code>true</code>. </p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The compute and memory capacity of the replication instance as specified by the
   *          replication instance class.</p>
   *          <p> Valid Values: <code>dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large |
   *             dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge </code>
   *          </p>
   */
  ReplicationInstanceClass: string | undefined;

  /**
   * <p>The replication instance identifier. This parameter is stored as a lowercase
   *          string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p>
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
  ReplicationInstanceIdentifier: string | undefined;

  /**
   * <p>A subnet group to associate with the replication instance.</p>
   */
  ReplicationSubnetGroupIdentifier?: string;

  /**
   * <p>One or more tags to be assigned to the replication instance.</p>
   */
  Tags?: Tag[];

  /**
   * <p> Specifies the VPC security group to be used with the replication instance. The VPC
   *          security group must work with the VPC containing the replication instance. </p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace CreateReplicationInstanceMessage {
  export const filterSensitiveLog = (
    obj: CreateReplicationInstanceMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateReplicationInstanceMessage =>
    __isa(o, "CreateReplicationInstanceMessage");
}

/**
 * <p></p>
 */
export interface CreateReplicationInstanceResponse {
  __type?: "CreateReplicationInstanceResponse";
  /**
   * <p>The replication instance that was created.</p>
   */
  ReplicationInstance?: ReplicationInstance;
}

export namespace CreateReplicationInstanceResponse {
  export const filterSensitiveLog = (
    obj: CreateReplicationInstanceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateReplicationInstanceResponse =>
    __isa(o, "CreateReplicationInstanceResponse");
}

/**
 * <p></p>
 */
export interface CreateReplicationSubnetGroupMessage {
  __type?: "CreateReplicationSubnetGroupMessage";
  /**
   * <p>The description for the subnet group.</p>
   */
  ReplicationSubnetGroupDescription: string | undefined;

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

  /**
   * <p>One or more tags to be assigned to the subnet group.</p>
   */
  Tags?: Tag[];
}

export namespace CreateReplicationSubnetGroupMessage {
  export const filterSensitiveLog = (
    obj: CreateReplicationSubnetGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateReplicationSubnetGroupMessage =>
    __isa(o, "CreateReplicationSubnetGroupMessage");
}

/**
 * <p></p>
 */
export interface CreateReplicationSubnetGroupResponse {
  __type?: "CreateReplicationSubnetGroupResponse";
  /**
   * <p>The replication subnet group that was created.</p>
   */
  ReplicationSubnetGroup?: ReplicationSubnetGroup;
}

export namespace CreateReplicationSubnetGroupResponse {
  export const filterSensitiveLog = (
    obj: CreateReplicationSubnetGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateReplicationSubnetGroupResponse =>
    __isa(o, "CreateReplicationSubnetGroupResponse");
}

/**
 * <p></p>
 */
export interface CreateReplicationTaskMessage {
  __type?: "CreateReplicationTaskMessage";
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
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either
   *          CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>
   */
  CdcStartTime?: Date;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   *          <p>Server time example: --cdc-stop-position “server_time:3018-02-09T12:12:12”</p>
   *          <p>Commit time example: --cdc-stop-position “commit_time: 3018-02-09T12:12:12 “</p>
   */
  CdcStopPosition?: string;

  /**
   * <p>The migration type. Valid values: <code>full-load</code> | <code>cdc</code> | <code>full-load-and-cdc</code>
   *          </p>
   */
  MigrationType: MigrationTypeValue | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * <p>An identifier for the replication task.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 255 alphanumeric characters or hyphens.</p>
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
   * <p>Overall settings for the task, in JSON format. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TaskSettings.html">Task Settings</a> in the <i>AWS Database Migration
   *             User Guide.</i>
   *          </p>
   */
  ReplicationTaskSettings?: string;

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the source endpoint.</p>
   */
  SourceEndpointArn: string | undefined;

  /**
   * <p>The table mappings for the task, in JSON format. For more information, see
   *             <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.CustomizingTasks.TableMapping.html">Table
   *                 Mapping</a> in the <i>AWS Database Migration
   *                    User Guide.</i>
   *          </p>
   */
  TableMappings: string | undefined;

  /**
   * <p>One or more tags to be assigned to the replication task.</p>
   */
  Tags?: Tag[];

  /**
   * <p>An Amazon Resource Name (ARN) that uniquely identifies the target endpoint.</p>
   */
  TargetEndpointArn: string | undefined;
}

export namespace CreateReplicationTaskMessage {
  export const filterSensitiveLog = (
    obj: CreateReplicationTaskMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateReplicationTaskMessage =>
    __isa(o, "CreateReplicationTaskMessage");
}

/**
 * <p></p>
 */
export interface CreateReplicationTaskResponse {
  __type?: "CreateReplicationTaskResponse";
  /**
   * <p>The replication task that was created.</p>
   */
  ReplicationTask?: ReplicationTask;
}

export namespace CreateReplicationTaskResponse {
  export const filterSensitiveLog = (
    obj: CreateReplicationTaskResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateReplicationTaskResponse =>
    __isa(o, "CreateReplicationTaskResponse");
}

export enum DataFormatValue {
  CSV = "csv",
  PARQUET = "parquet"
}

export interface DeleteCertificateMessage {
  __type?: "DeleteCertificateMessage";
  /**
   * <p>The Amazon Resource Name (ARN) of the deleted certificate.</p>
   */
  CertificateArn: string | undefined;
}

export namespace DeleteCertificateMessage {
  export const filterSensitiveLog = (obj: DeleteCertificateMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteCertificateMessage =>
    __isa(o, "DeleteCertificateMessage");
}

export interface DeleteCertificateResponse {
  __type?: "DeleteCertificateResponse";
  /**
   * <p>The Secure Sockets Layer (SSL) certificate.</p>
   */
  Certificate?: Certificate;
}

export namespace DeleteCertificateResponse {
  export const filterSensitiveLog = (obj: DeleteCertificateResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteCertificateResponse =>
    __isa(o, "DeleteCertificateResponse");
}

/**
 * <p></p>
 */
export interface DeleteConnectionMessage {
  __type?: "DeleteConnectionMessage";
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
    ...obj
  });
  export const isa = (o: any): o is DeleteConnectionMessage =>
    __isa(o, "DeleteConnectionMessage");
}

/**
 * <p></p>
 */
export interface DeleteConnectionResponse {
  __type?: "DeleteConnectionResponse";
  /**
   * <p>The connection that is being deleted.</p>
   */
  Connection?: Connection;
}

export namespace DeleteConnectionResponse {
  export const filterSensitiveLog = (obj: DeleteConnectionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteConnectionResponse =>
    __isa(o, "DeleteConnectionResponse");
}

/**
 * <p></p>
 */
export interface DeleteEndpointMessage {
  __type?: "DeleteEndpointMessage";
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

export namespace DeleteEndpointMessage {
  export const filterSensitiveLog = (obj: DeleteEndpointMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteEndpointMessage =>
    __isa(o, "DeleteEndpointMessage");
}

/**
 * <p></p>
 */
export interface DeleteEndpointResponse {
  __type?: "DeleteEndpointResponse";
  /**
   * <p>The endpoint that was deleted.</p>
   */
  Endpoint?: Endpoint;
}

export namespace DeleteEndpointResponse {
  export const filterSensitiveLog = (obj: DeleteEndpointResponse): any => ({
    ...obj,
    ...(obj.Endpoint && { Endpoint: Endpoint.filterSensitiveLog(obj.Endpoint) })
  });
  export const isa = (o: any): o is DeleteEndpointResponse =>
    __isa(o, "DeleteEndpointResponse");
}

/**
 * <p></p>
 */
export interface DeleteEventSubscriptionMessage {
  __type?: "DeleteEventSubscriptionMessage";
  /**
   * <p>The name of the DMS event notification subscription to be deleted.</p>
   */
  SubscriptionName: string | undefined;
}

export namespace DeleteEventSubscriptionMessage {
  export const filterSensitiveLog = (
    obj: DeleteEventSubscriptionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteEventSubscriptionMessage =>
    __isa(o, "DeleteEventSubscriptionMessage");
}

/**
 * <p></p>
 */
export interface DeleteEventSubscriptionResponse {
  __type?: "DeleteEventSubscriptionResponse";
  /**
   * <p>The event subscription that was deleted.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace DeleteEventSubscriptionResponse {
  export const filterSensitiveLog = (
    obj: DeleteEventSubscriptionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteEventSubscriptionResponse =>
    __isa(o, "DeleteEventSubscriptionResponse");
}

/**
 * <p></p>
 */
export interface DeleteReplicationInstanceMessage {
  __type?: "DeleteReplicationInstanceMessage";
  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance to be deleted.</p>
   */
  ReplicationInstanceArn: string | undefined;
}

export namespace DeleteReplicationInstanceMessage {
  export const filterSensitiveLog = (
    obj: DeleteReplicationInstanceMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteReplicationInstanceMessage =>
    __isa(o, "DeleteReplicationInstanceMessage");
}

/**
 * <p></p>
 */
export interface DeleteReplicationInstanceResponse {
  __type?: "DeleteReplicationInstanceResponse";
  /**
   * <p>The replication instance that was deleted.</p>
   */
  ReplicationInstance?: ReplicationInstance;
}

export namespace DeleteReplicationInstanceResponse {
  export const filterSensitiveLog = (
    obj: DeleteReplicationInstanceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteReplicationInstanceResponse =>
    __isa(o, "DeleteReplicationInstanceResponse");
}

/**
 * <p></p>
 */
export interface DeleteReplicationSubnetGroupMessage {
  __type?: "DeleteReplicationSubnetGroupMessage";
  /**
   * <p>The subnet group name of the replication instance.</p>
   */
  ReplicationSubnetGroupIdentifier: string | undefined;
}

export namespace DeleteReplicationSubnetGroupMessage {
  export const filterSensitiveLog = (
    obj: DeleteReplicationSubnetGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteReplicationSubnetGroupMessage =>
    __isa(o, "DeleteReplicationSubnetGroupMessage");
}

/**
 * <p></p>
 */
export interface DeleteReplicationSubnetGroupResponse {
  __type?: "DeleteReplicationSubnetGroupResponse";
}

export namespace DeleteReplicationSubnetGroupResponse {
  export const filterSensitiveLog = (
    obj: DeleteReplicationSubnetGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteReplicationSubnetGroupResponse =>
    __isa(o, "DeleteReplicationSubnetGroupResponse");
}

/**
 * <p></p>
 */
export interface DeleteReplicationTaskMessage {
  __type?: "DeleteReplicationTaskMessage";
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task to be deleted.</p>
   */
  ReplicationTaskArn: string | undefined;
}

export namespace DeleteReplicationTaskMessage {
  export const filterSensitiveLog = (
    obj: DeleteReplicationTaskMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteReplicationTaskMessage =>
    __isa(o, "DeleteReplicationTaskMessage");
}

/**
 * <p></p>
 */
export interface DeleteReplicationTaskResponse {
  __type?: "DeleteReplicationTaskResponse";
  /**
   * <p>The deleted replication task.</p>
   */
  ReplicationTask?: ReplicationTask;
}

export namespace DeleteReplicationTaskResponse {
  export const filterSensitiveLog = (
    obj: DeleteReplicationTaskResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteReplicationTaskResponse =>
    __isa(o, "DeleteReplicationTaskResponse");
}

/**
 * <p></p>
 */
export interface DescribeAccountAttributesMessage {
  __type?: "DescribeAccountAttributesMessage";
}

export namespace DescribeAccountAttributesMessage {
  export const filterSensitiveLog = (
    obj: DescribeAccountAttributesMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAccountAttributesMessage =>
    __isa(o, "DescribeAccountAttributesMessage");
}

/**
 * <p></p>
 */
export interface DescribeAccountAttributesResponse {
  __type?: "DescribeAccountAttributesResponse";
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
  export const filterSensitiveLog = (
    obj: DescribeAccountAttributesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAccountAttributesResponse =>
    __isa(o, "DescribeAccountAttributesResponse");
}

export interface DescribeCertificatesMessage {
  __type?: "DescribeCertificatesMessage";
  /**
   * <p>Filters applied to the certificate described in the form of key-value pairs.</p>
   */
  Filters?: Filter[];

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the vlue specified
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
}

export namespace DescribeCertificatesMessage {
  export const filterSensitiveLog = (
    obj: DescribeCertificatesMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCertificatesMessage =>
    __isa(o, "DescribeCertificatesMessage");
}

export interface DescribeCertificatesResponse {
  __type?: "DescribeCertificatesResponse";
  /**
   * <p>The Secure Sockets Layer (SSL) certificates associated with the replication
   *          instance.</p>
   */
  Certificates?: Certificate[];

  /**
   * <p>The pagination token.</p>
   */
  Marker?: string;
}

export namespace DescribeCertificatesResponse {
  export const filterSensitiveLog = (
    obj: DescribeCertificatesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeCertificatesResponse =>
    __isa(o, "DescribeCertificatesResponse");
}

/**
 * <p></p>
 */
export interface DescribeConnectionsMessage {
  __type?: "DescribeConnectionsMessage";
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
    ...obj
  });
  export const isa = (o: any): o is DescribeConnectionsMessage =>
    __isa(o, "DescribeConnectionsMessage");
}

/**
 * <p></p>
 */
export interface DescribeConnectionsResponse {
  __type?: "DescribeConnectionsResponse";
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
  export const filterSensitiveLog = (
    obj: DescribeConnectionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeConnectionsResponse =>
    __isa(o, "DescribeConnectionsResponse");
}

/**
 * <p></p>
 */
export interface DescribeEndpointsMessage {
  __type?: "DescribeEndpointsMessage";
  /**
   * <p>Filters applied to the describe action.</p>
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
    ...obj
  });
  export const isa = (o: any): o is DescribeEndpointsMessage =>
    __isa(o, "DescribeEndpointsMessage");
}

/**
 * <p></p>
 */
export interface DescribeEndpointsResponse {
  __type?: "DescribeEndpointsResponse";
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
    ...(obj.Endpoints && {
      Endpoints: obj.Endpoints.map(item => Endpoint.filterSensitiveLog(item))
    })
  });
  export const isa = (o: any): o is DescribeEndpointsResponse =>
    __isa(o, "DescribeEndpointsResponse");
}

/**
 * <p></p>
 */
export interface DescribeEndpointTypesMessage {
  __type?: "DescribeEndpointTypesMessage";
  /**
   * <p>Filters applied to the describe action.</p>
   *          <p>Valid filter names: engine-name | endpoint-type</p>
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

export namespace DescribeEndpointTypesMessage {
  export const filterSensitiveLog = (
    obj: DescribeEndpointTypesMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEndpointTypesMessage =>
    __isa(o, "DescribeEndpointTypesMessage");
}

/**
 * <p></p>
 */
export interface DescribeEndpointTypesResponse {
  __type?: "DescribeEndpointTypesResponse";
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
  export const filterSensitiveLog = (
    obj: DescribeEndpointTypesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEndpointTypesResponse =>
    __isa(o, "DescribeEndpointTypesResponse");
}

/**
 * <p></p>
 */
export interface DescribeEventCategoriesMessage {
  __type?: "DescribeEventCategoriesMessage";
  /**
   * <p>Filters applied to the action.</p>
   */
  Filters?: Filter[];

  /**
   * <p> The type of AWS DMS resource that generates events. </p>
   *          <p>Valid values: replication-instance | replication-task</p>
   */
  SourceType?: string;
}

export namespace DescribeEventCategoriesMessage {
  export const filterSensitiveLog = (
    obj: DescribeEventCategoriesMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventCategoriesMessage =>
    __isa(o, "DescribeEventCategoriesMessage");
}

/**
 * <p></p>
 */
export interface DescribeEventCategoriesResponse {
  __type?: "DescribeEventCategoriesResponse";
  /**
   * <p>A list of event categories.</p>
   */
  EventCategoryGroupList?: EventCategoryGroup[];
}

export namespace DescribeEventCategoriesResponse {
  export const filterSensitiveLog = (
    obj: DescribeEventCategoriesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventCategoriesResponse =>
    __isa(o, "DescribeEventCategoriesResponse");
}

/**
 * <p></p>
 */
export interface DescribeEventsMessage {
  __type?: "DescribeEventsMessage";
  /**
   * <p>The duration of the events to be listed.</p>
   */
  Duration?: number;

  /**
   * <p>The end time for the events to be listed.</p>
   */
  EndTime?: Date;

  /**
   * <p>A list of event categories for the source type that you've chosen.</p>
   */
  EventCategories?: string[];

  /**
   * <p>Filters applied to the action.</p>
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

  /**
   * <p> The identifier of an event source.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p>The type of AWS DMS resource that generates events.</p>
   *          <p>Valid values: replication-instance | replication-task</p>
   */
  SourceType?: SourceType | string;

  /**
   * <p>The start time for the events to be listed.</p>
   */
  StartTime?: Date;
}

export namespace DescribeEventsMessage {
  export const filterSensitiveLog = (obj: DescribeEventsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventsMessage =>
    __isa(o, "DescribeEventsMessage");
}

/**
 * <p></p>
 */
export interface DescribeEventsResponse {
  __type?: "DescribeEventsResponse";
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
    ...obj
  });
  export const isa = (o: any): o is DescribeEventsResponse =>
    __isa(o, "DescribeEventsResponse");
}

/**
 * <p></p>
 */
export interface DescribeEventSubscriptionsMessage {
  __type?: "DescribeEventSubscriptionsMessage";
  /**
   * <p>Filters applied to the action.</p>
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

  /**
   * <p>The name of the AWS DMS event subscription to be described.</p>
   */
  SubscriptionName?: string;
}

export namespace DescribeEventSubscriptionsMessage {
  export const filterSensitiveLog = (
    obj: DescribeEventSubscriptionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventSubscriptionsMessage =>
    __isa(o, "DescribeEventSubscriptionsMessage");
}

/**
 * <p></p>
 */
export interface DescribeEventSubscriptionsResponse {
  __type?: "DescribeEventSubscriptionsResponse";
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
  export const filterSensitiveLog = (
    obj: DescribeEventSubscriptionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventSubscriptionsResponse =>
    __isa(o, "DescribeEventSubscriptionsResponse");
}

/**
 * <p></p>
 */
export interface DescribeOrderableReplicationInstancesMessage {
  __type?: "DescribeOrderableReplicationInstancesMessage";
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
  export const filterSensitiveLog = (
    obj: DescribeOrderableReplicationInstancesMessage
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeOrderableReplicationInstancesMessage =>
    __isa(o, "DescribeOrderableReplicationInstancesMessage");
}

/**
 * <p></p>
 */
export interface DescribeOrderableReplicationInstancesResponse {
  __type?: "DescribeOrderableReplicationInstancesResponse";
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
  export const filterSensitiveLog = (
    obj: DescribeOrderableReplicationInstancesResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeOrderableReplicationInstancesResponse =>
    __isa(o, "DescribeOrderableReplicationInstancesResponse");
}

/**
 * <p></p>
 */
export interface DescribePendingMaintenanceActionsMessage {
  __type?: "DescribePendingMaintenanceActionsMessage";
  /**
   * <p></p>
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

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;
}

export namespace DescribePendingMaintenanceActionsMessage {
  export const filterSensitiveLog = (
    obj: DescribePendingMaintenanceActionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePendingMaintenanceActionsMessage =>
    __isa(o, "DescribePendingMaintenanceActionsMessage");
}

/**
 * <p></p>
 */
export interface DescribePendingMaintenanceActionsResponse {
  __type?: "DescribePendingMaintenanceActionsResponse";
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
  export const filterSensitiveLog = (
    obj: DescribePendingMaintenanceActionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePendingMaintenanceActionsResponse =>
    __isa(o, "DescribePendingMaintenanceActionsResponse");
}

/**
 * <p></p>
 */
export interface DescribeRefreshSchemasStatusMessage {
  __type?: "DescribeRefreshSchemasStatusMessage";
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

export namespace DescribeRefreshSchemasStatusMessage {
  export const filterSensitiveLog = (
    obj: DescribeRefreshSchemasStatusMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeRefreshSchemasStatusMessage =>
    __isa(o, "DescribeRefreshSchemasStatusMessage");
}

/**
 * <p></p>
 */
export interface DescribeRefreshSchemasStatusResponse {
  __type?: "DescribeRefreshSchemasStatusResponse";
  /**
   * <p>The status of the schema.</p>
   */
  RefreshSchemasStatus?: RefreshSchemasStatus;
}

export namespace DescribeRefreshSchemasStatusResponse {
  export const filterSensitiveLog = (
    obj: DescribeRefreshSchemasStatusResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeRefreshSchemasStatusResponse =>
    __isa(o, "DescribeRefreshSchemasStatusResponse");
}

/**
 * <p></p>
 */
export interface DescribeReplicationInstancesMessage {
  __type?: "DescribeReplicationInstancesMessage";
  /**
   * <p>Filters applied to the describe action.</p>
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

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   */
  MaxRecords?: number;
}

export namespace DescribeReplicationInstancesMessage {
  export const filterSensitiveLog = (
    obj: DescribeReplicationInstancesMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeReplicationInstancesMessage =>
    __isa(o, "DescribeReplicationInstancesMessage");
}

/**
 * <p></p>
 */
export interface DescribeReplicationInstancesResponse {
  __type?: "DescribeReplicationInstancesResponse";
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
  export const filterSensitiveLog = (
    obj: DescribeReplicationInstancesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeReplicationInstancesResponse =>
    __isa(o, "DescribeReplicationInstancesResponse");
}

export interface DescribeReplicationInstanceTaskLogsMessage {
  __type?: "DescribeReplicationInstanceTaskLogsMessage";
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>.</p>
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
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;
}

export namespace DescribeReplicationInstanceTaskLogsMessage {
  export const filterSensitiveLog = (
    obj: DescribeReplicationInstanceTaskLogsMessage
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeReplicationInstanceTaskLogsMessage =>
    __isa(o, "DescribeReplicationInstanceTaskLogsMessage");
}

export interface DescribeReplicationInstanceTaskLogsResponse {
  __type?: "DescribeReplicationInstanceTaskLogsResponse";
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>.</p>
   */
  Marker?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * <p>An array of replication task log metadata. Each member of the array contains the
   *          replication task name, ARN, and task log size (in bytes). </p>
   */
  ReplicationInstanceTaskLogs?: ReplicationInstanceTaskLog[];
}

export namespace DescribeReplicationInstanceTaskLogsResponse {
  export const filterSensitiveLog = (
    obj: DescribeReplicationInstanceTaskLogsResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeReplicationInstanceTaskLogsResponse =>
    __isa(o, "DescribeReplicationInstanceTaskLogsResponse");
}

/**
 * <p></p>
 */
export interface DescribeReplicationSubnetGroupsMessage {
  __type?: "DescribeReplicationSubnetGroupsMessage";
  /**
   * <p>Filters applied to the describe action.</p>
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

export namespace DescribeReplicationSubnetGroupsMessage {
  export const filterSensitiveLog = (
    obj: DescribeReplicationSubnetGroupsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeReplicationSubnetGroupsMessage =>
    __isa(o, "DescribeReplicationSubnetGroupsMessage");
}

/**
 * <p></p>
 */
export interface DescribeReplicationSubnetGroupsResponse {
  __type?: "DescribeReplicationSubnetGroupsResponse";
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
  export const filterSensitiveLog = (
    obj: DescribeReplicationSubnetGroupsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeReplicationSubnetGroupsResponse =>
    __isa(o, "DescribeReplicationSubnetGroupsResponse");
}

/**
 * <p></p>
 */
export interface DescribeReplicationTaskAssessmentResultsMessage {
  __type?: "DescribeReplicationTaskAssessmentResultsMessage";
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
   * <p>- The Amazon Resource Name (ARN) string that uniquely identifies the task. When this
   *          input parameter is specified the API will return only one result and ignore the values of
   *          the max-records and marker parameters. </p>
   */
  ReplicationTaskArn?: string;
}

export namespace DescribeReplicationTaskAssessmentResultsMessage {
  export const filterSensitiveLog = (
    obj: DescribeReplicationTaskAssessmentResultsMessage
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeReplicationTaskAssessmentResultsMessage =>
    __isa(o, "DescribeReplicationTaskAssessmentResultsMessage");
}

/**
 * <p></p>
 */
export interface DescribeReplicationTaskAssessmentResultsResponse {
  __type?: "DescribeReplicationTaskAssessmentResultsResponse";
  /**
   * <p>- The Amazon S3 bucket where the task assessment report is located. </p>
   */
  BucketName?: string;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p> The task assessment report. </p>
   */
  ReplicationTaskAssessmentResults?: ReplicationTaskAssessmentResult[];
}

export namespace DescribeReplicationTaskAssessmentResultsResponse {
  export const filterSensitiveLog = (
    obj: DescribeReplicationTaskAssessmentResultsResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeReplicationTaskAssessmentResultsResponse =>
    __isa(o, "DescribeReplicationTaskAssessmentResultsResponse");
}

/**
 * <p></p>
 */
export interface DescribeReplicationTasksMessage {
  __type?: "DescribeReplicationTasksMessage";
  /**
   * <p>Filters applied to the describe action.</p>
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
}

export namespace DescribeReplicationTasksMessage {
  export const filterSensitiveLog = (
    obj: DescribeReplicationTasksMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeReplicationTasksMessage =>
    __isa(o, "DescribeReplicationTasksMessage");
}

/**
 * <p></p>
 */
export interface DescribeReplicationTasksResponse {
  __type?: "DescribeReplicationTasksResponse";
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p>A description of the replication tasks.</p>
   */
  ReplicationTasks?: ReplicationTask[];
}

export namespace DescribeReplicationTasksResponse {
  export const filterSensitiveLog = (
    obj: DescribeReplicationTasksResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeReplicationTasksResponse =>
    __isa(o, "DescribeReplicationTasksResponse");
}

/**
 * <p></p>
 */
export interface DescribeSchemasMessage {
  __type?: "DescribeSchemasMessage";
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;

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

export namespace DescribeSchemasMessage {
  export const filterSensitiveLog = (obj: DescribeSchemasMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSchemasMessage =>
    __isa(o, "DescribeSchemasMessage");
}

/**
 * <p></p>
 */
export interface DescribeSchemasResponse {
  __type?: "DescribeSchemasResponse";
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p>The described schema.</p>
   */
  Schemas?: string[];
}

export namespace DescribeSchemasResponse {
  export const filterSensitiveLog = (obj: DescribeSchemasResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSchemasResponse =>
    __isa(o, "DescribeSchemasResponse");
}

/**
 * <p></p>
 */
export interface DescribeTableStatisticsMessage {
  __type?: "DescribeTableStatisticsMessage";
  /**
   * <p>Filters applied to the describe table statistics action.</p>
   *          <p>Valid filter names: schema-name | table-name | table-state</p>
   *          <p>A combination of filters creates an AND condition where each record matches all
   *          specified filters.</p>
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
   *          <p>Constraints: Minimum 20, maximum 500.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   */
  ReplicationTaskArn: string | undefined;
}

export namespace DescribeTableStatisticsMessage {
  export const filterSensitiveLog = (
    obj: DescribeTableStatisticsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTableStatisticsMessage =>
    __isa(o, "DescribeTableStatisticsMessage");
}

/**
 * <p></p>
 */
export interface DescribeTableStatisticsResponse {
  __type?: "DescribeTableStatisticsResponse";
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   */
  Marker?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   */
  ReplicationTaskArn?: string;

  /**
   * <p>The table statistics.</p>
   */
  TableStatistics?: TableStatistics[];
}

export namespace DescribeTableStatisticsResponse {
  export const filterSensitiveLog = (
    obj: DescribeTableStatisticsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTableStatisticsResponse =>
    __isa(o, "DescribeTableStatisticsResponse");
}

export enum DmsSslModeValue {
  NONE = "none",
  REQUIRE = "require",
  VERIFY_CA = "verify-ca",
  VERIFY_FULL = "verify-full"
}

/**
 * <p> The settings in JSON format for the DMS Transfer type source endpoint. </p>
 */
export interface DmsTransferSettings {
  __type?: "DmsTransferSettings";
  /**
   * <p> The name of the S3 bucket to use. </p>
   */
  BucketName?: string;

  /**
   * <p> The IAM role that has permission to access the Amazon S3 bucket. </p>
   */
  ServiceAccessRoleArn?: string;
}

export namespace DmsTransferSettings {
  export const filterSensitiveLog = (obj: DmsTransferSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is DmsTransferSettings =>
    __isa(o, "DmsTransferSettings");
}

/**
 * <p></p>
 */
export interface DynamoDbSettings {
  __type?: "DynamoDbSettings";
  /**
   * <p> The Amazon Resource Name (ARN) used by the service access IAM role. </p>
   */
  ServiceAccessRoleArn: string | undefined;
}

export namespace DynamoDbSettings {
  export const filterSensitiveLog = (obj: DynamoDbSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is DynamoDbSettings =>
    __isa(o, "DynamoDbSettings");
}

/**
 * <p></p>
 */
export interface ElasticsearchSettings {
  __type?: "ElasticsearchSettings";
  /**
   * <p>The endpoint for the Elasticsearch cluster.</p>
   */
  EndpointUri: string | undefined;

  /**
   * <p>The maximum number of seconds that DMS retries failed API requests to the Elasticsearch
   *          cluster.</p>
   */
  ErrorRetryDuration?: number;

  /**
   * <p>The maximum percentage of records that can fail to be written before a full load
   *          operation stops. </p>
   */
  FullLoadErrorPercentage?: number;

  /**
   * <p>The Amazon Resource Name (ARN) used by service to access the IAM role.</p>
   */
  ServiceAccessRoleArn: string | undefined;
}

export namespace ElasticsearchSettings {
  export const filterSensitiveLog = (obj: ElasticsearchSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is ElasticsearchSettings =>
    __isa(o, "ElasticsearchSettings");
}

export enum EncodingTypeValue {
  PLAIN = "plain",
  PLAIN_DICTIONARY = "plain-dictionary",
  RLE_DICTIONARY = "rle-dictionary"
}

export enum EncryptionModeValue {
  SSE_KMS = "sse-kms",
  SSE_S3 = "sse-s3"
}

/**
 * <p></p>
 */
export interface Endpoint {
  __type?: "Endpoint";
  /**
   * <p>The Amazon Resource Name (ARN) used for SSL connection to the endpoint.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The name of the database at the endpoint.</p>
   */
  DatabaseName?: string;

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
   * <p>The settings for the target DynamoDB database. For more information, see the
   *             <code>DynamoDBSettings</code> structure.</p>
   */
  DynamoDbSettings?: DynamoDbSettings;

  /**
   * <p>The settings for the Elasticsearch source endpoint. For more information, see the
   *             <code>ElasticsearchSettings</code> structure.</p>
   */
  ElasticsearchSettings?: ElasticsearchSettings;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn?: string;

  /**
   * <p>The database endpoint identifier. Identifiers must begin with a letter; must contain
   *          only ASCII letters, digits, and hyphens; and must not end with a hyphen or contain two
   *          consecutive hyphens.</p>
   */
  EndpointIdentifier?: string;

  /**
   * <p>The type of endpoint.  Valid values are <code>source</code> and <code>target</code>.</p>
   */
  EndpointType?: ReplicationEndpointTypeValue | string;

  /**
   * <p>The expanded name for the engine name. For example, if the <code>EngineName</code>
   *          parameter is "aurora," this value would be "Amazon Aurora MySQL."</p>
   */
  EngineDisplayName?: string;

  /**
   * <p>The database engine name. Valid values, depending on the EndpointType, include mysql,
   *          oracle, postgres, mariadb, aurora, aurora-postgresql, redshift, s3, db2, azuredb,
   *          sybase, dynamodb, mongodb, and sqlserver.</p>
   */
  EngineName?: string;

  /**
   * <p> Value returned by a call to CreateEndpoint that can be used for cross-account
   *          validation. Use it on a subsequent call to CreateEndpoint to create the endpoint with a
   *          cross-account. </p>
   */
  ExternalId?: string;

  /**
   * <p>The external table definition.</p>
   */
  ExternalTableDefinition?: string;

  /**
   * <p>Additional connection attributes used to connect to the endpoint.</p>
   */
  ExtraConnectionAttributes?: string;

  /**
   * <p>The settings for the Amazon Kinesis source endpoint. For more information, see the
   *             <code>KinesisSettings</code> structure.</p>
   */
  KinesisSettings?: KinesisSettings;

  /**
   * <p>An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then
   *            AWS DMS uses your default encryption key.</p>
   *          <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account has a
   *          different default encryption key for each AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The settings for the MongoDB source endpoint. For more information, see the
   *             <code>MongoDbSettings</code> structure.</p>
   */
  MongoDbSettings?: MongoDbSettings;

  /**
   * <p>The port value used to access the endpoint.</p>
   */
  Port?: number;

  /**
   * <p>Settings for the Amazon Redshift endpoint.</p>
   */
  RedshiftSettings?: RedshiftSettings;

  /**
   * <p>The settings for the S3 target endpoint. For more information, see the
   *             <code>S3Settings</code> structure.</p>
   */
  S3Settings?: S3Settings;

  /**
   * <p>The name of the server at the endpoint.</p>
   */
  ServerName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) used by the service access IAM role.</p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * <p>The SSL mode used to connect to the endpoint. The default value is <code>none</code>.</p>
   */
  SslMode?: DmsSslModeValue | string;

  /**
   * <p>The status of the endpoint.</p>
   */
  Status?: string;

  /**
   * <p>The user name used to connect to the endpoint.</p>
   */
  Username?: string;
}

export namespace Endpoint {
  export const filterSensitiveLog = (obj: Endpoint): any => ({
    ...obj,
    ...(obj.MongoDbSettings && {
      MongoDbSettings: MongoDbSettings.filterSensitiveLog(obj.MongoDbSettings)
    }),
    ...(obj.RedshiftSettings && {
      RedshiftSettings: RedshiftSettings.filterSensitiveLog(
        obj.RedshiftSettings
      )
    })
  });
  export const isa = (o: any): o is Endpoint => __isa(o, "Endpoint");
}

/**
 * <p></p>
 */
export interface Event {
  __type?: "Event";
  /**
   * <p>The date of the event.</p>
   */
  Date?: Date;

  /**
   * <p>The event categories available for the specified source type.</p>
   */
  EventCategories?: string[];

  /**
   * <p>The event message.</p>
   */
  Message?: string;

  /**
   * <p> The identifier of an event source.</p>
   */
  SourceIdentifier?: string;

  /**
   * <p> The type of AWS DMS resource that generates events. </p>
   *          <p>Valid values: replication-instance | endpoint | replication-task</p>
   */
  SourceType?: SourceType | string;
}

export namespace Event {
  export const filterSensitiveLog = (obj: Event): any => ({
    ...obj
  });
  export const isa = (o: any): o is Event => __isa(o, "Event");
}

/**
 * <p></p>
 */
export interface EventCategoryGroup {
  __type?: "EventCategoryGroup";
  /**
   * <p> A list of event categories from a source type that you've chosen.</p>
   */
  EventCategories?: string[];

  /**
   * <p> The type of AWS DMS resource that generates events. </p>
   *          <p>Valid values: replication-instance | replication-server | security-group |
   *          replication-task</p>
   */
  SourceType?: string;
}

export namespace EventCategoryGroup {
  export const filterSensitiveLog = (obj: EventCategoryGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventCategoryGroup =>
    __isa(o, "EventCategoryGroup");
}

/**
 * <p></p>
 */
export interface EventSubscription {
  __type?: "EventSubscription";
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
   * <p>Boolean value that indicates if the event subscription is enabled.</p>
   */
  Enabled?: boolean;

  /**
   * <p>A lists of event categories.</p>
   */
  EventCategoriesList?: string[];

  /**
   * <p>The topic ARN of the AWS DMS event notification subscription.</p>
   */
  SnsTopicArn?: string;

  /**
   * <p>A list of source Ids for the event subscription.</p>
   */
  SourceIdsList?: string[];

  /**
   * <p> The type of AWS DMS resource that generates events. </p>
   *          <p>Valid values: replication-instance | replication-server | security-group |
   *          replication-task</p>
   */
  SourceType?: string;

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

  /**
   * <p>The time the RDS event notification subscription was created.</p>
   */
  SubscriptionCreationTime?: string;
}

export namespace EventSubscription {
  export const filterSensitiveLog = (obj: EventSubscription): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventSubscription =>
    __isa(o, "EventSubscription");
}

/**
 * <p></p>
 */
export interface Filter {
  __type?: "Filter";
  /**
   * <p>The name of the filter.</p>
   */
  Name: string | undefined;

  /**
   * <p>The filter value.</p>
   */
  Values: string[] | undefined;
}

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj
  });
  export const isa = (o: any): o is Filter => __isa(o, "Filter");
}

export interface ImportCertificateMessage {
  __type?: "ImportCertificateMessage";
  /**
   * <p>A customer-assigned name for the certificate. Identifiers must begin with a letter;
   *            must contain only ASCII letters, digits, and hyphens; and must not end with a hyphen or
   *            contain two consecutive hyphens.</p>
   */
  CertificateIdentifier: string | undefined;

  /**
   * <p>The contents of a <code>.pem</code> file, which contains an X.509 certificate.</p>
   */
  CertificatePem?: string;

  /**
   * <p>The location of an imported Oracle Wallet certificate for use with SSL.</p>
   */
  CertificateWallet?: Uint8Array;

  /**
   * <p>The tags associated with the certificate.</p>
   */
  Tags?: Tag[];
}

export namespace ImportCertificateMessage {
  export const filterSensitiveLog = (obj: ImportCertificateMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportCertificateMessage =>
    __isa(o, "ImportCertificateMessage");
}

export interface ImportCertificateResponse {
  __type?: "ImportCertificateResponse";
  /**
   * <p>The certificate to be uploaded.</p>
   */
  Certificate?: Certificate;
}

export namespace ImportCertificateResponse {
  export const filterSensitiveLog = (obj: ImportCertificateResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportCertificateResponse =>
    __isa(o, "ImportCertificateResponse");
}

/**
 * <p>There are not enough resources allocated to the database migration.</p>
 */
export interface InsufficientResourceCapacityFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientResourceCapacityFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace InsufficientResourceCapacityFault {
  export const filterSensitiveLog = (
    obj: InsufficientResourceCapacityFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InsufficientResourceCapacityFault =>
    __isa(o, "InsufficientResourceCapacityFault");
}

/**
 * <p>The certificate was not valid.</p>
 */
export interface InvalidCertificateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidCertificateFault";
  $fault: "client";
  message?: string;
}

export namespace InvalidCertificateFault {
  export const filterSensitiveLog = (obj: InvalidCertificateFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidCertificateFault =>
    __isa(o, "InvalidCertificateFault");
}

/**
 * <p>The resource is in a state that prevents it from being used for database migration.</p>
 */
export interface InvalidResourceStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidResourceStateFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace InvalidResourceStateFault {
  export const filterSensitiveLog = (obj: InvalidResourceStateFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidResourceStateFault =>
    __isa(o, "InvalidResourceStateFault");
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
    ...obj
  });
  export const isa = (o: any): o is InvalidSubnet => __isa(o, "InvalidSubnet");
}

/**
 * <p></p>
 */
export interface KinesisSettings {
  __type?: "KinesisSettings";
  /**
   * <p>The output format for the records created on the endpoint. The message format is
   *             <code>JSON</code>.</p>
   */
  MessageFormat?: MessageFormatValue | string;

  /**
   * <p>The Amazon Resource Name (ARN) for the IAM role that DMS uses to write to the Amazon
   *          Kinesis data stream.</p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the Amazon Kinesis Data Streams endpoint.</p>
   */
  StreamArn?: string;
}

export namespace KinesisSettings {
  export const filterSensitiveLog = (obj: KinesisSettings): any => ({
    ...obj
  });
  export const isa = (o: any): o is KinesisSettings =>
    __isa(o, "KinesisSettings");
}

/**
 * <p>The ciphertext references a key that doesn't exist or that the DMS account doesn't have access to.</p>
 */
export interface KMSAccessDeniedFault
  extends __SmithyException,
    $MetadataBearer {
  name: "KMSAccessDeniedFault";
  $fault: "client";
  message?: string;
}

export namespace KMSAccessDeniedFault {
  export const filterSensitiveLog = (obj: KMSAccessDeniedFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is KMSAccessDeniedFault =>
    __isa(o, "KMSAccessDeniedFault");
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
    ...obj
  });
  export const isa = (o: any): o is KMSDisabledFault =>
    __isa(o, "KMSDisabledFault");
}

/**
 * <p>The state of the specified AWS KMS resource isn't valid for this request.</p>
 */
export interface KMSInvalidStateFault
  extends __SmithyException,
    $MetadataBearer {
  name: "KMSInvalidStateFault";
  $fault: "client";
  message?: string;
}

export namespace KMSInvalidStateFault {
  export const filterSensitiveLog = (obj: KMSInvalidStateFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is KMSInvalidStateFault =>
    __isa(o, "KMSInvalidStateFault");
}

/**
 * <p>AWS DMS cannot access the AWS KMS key.</p>
 */
export interface KMSKeyNotAccessibleFault
  extends __SmithyException,
    $MetadataBearer {
  name: "KMSKeyNotAccessibleFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace KMSKeyNotAccessibleFault {
  export const filterSensitiveLog = (obj: KMSKeyNotAccessibleFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is KMSKeyNotAccessibleFault =>
    __isa(o, "KMSKeyNotAccessibleFault");
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
    ...obj
  });
  export const isa = (o: any): o is KMSNotFoundFault =>
    __isa(o, "KMSNotFoundFault");
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
    ...obj
  });
  export const isa = (o: any): o is KMSThrottlingFault =>
    __isa(o, "KMSThrottlingFault");
}

/**
 * <p></p>
 */
export interface ListTagsForResourceMessage {
  __type?: "ListTagsForResourceMessage";
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the AWS DMS
   *          resource.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceMessage {
  export const filterSensitiveLog = (obj: ListTagsForResourceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceMessage =>
    __isa(o, "ListTagsForResourceMessage");
}

/**
 * <p></p>
 */
export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>A list of tags for the resource.</p>
   */
  TagList?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (
    obj: ListTagsForResourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceResponse =>
    __isa(o, "ListTagsForResourceResponse");
}

export enum MessageFormatValue {
  JSON = "json"
}

export enum MigrationTypeValue {
  CDC = "cdc",
  FULL_LOAD = "full-load",
  FULL_LOAD_AND_CDC = "full-load-and-cdc"
}

/**
 * <p></p>
 */
export interface ModifyEndpointMessage {
  __type?: "ModifyEndpointMessage";
  /**
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The name of the endpoint database.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The settings in JSON format for the DMS transfer type of source endpoint. </p>
   *          <p>Attributes include the following:</p>
   *          <ul>
   *             <li>
   *                <p>serviceAccessRoleArn - The IAM role that has permission to access the Amazon S3
   *                bucket.</p>
   *             </li>
   *             <li>
   *                <p>BucketName - The name of the S3 bucket to use.</p>
   *             </li>
   *             <li>
   *                <p>compressionType - An optional parameter to use GZIP to compress the target files.
   *                Set to NONE (the default) or do not use to leave the files uncompressed.</p>
   *             </li>
   *          </ul>
   *          <p>Shorthand syntax: ServiceAccessRoleArn=string
   *          ,BucketName=string,CompressionType=string</p>
   *          <p>JSON syntax:</p>
   *          <p> { "ServiceAccessRoleArn": "string", "BucketName": "string", "CompressionType":
   *          "none"|"gzip" } </p>
   */
  DmsTransferSettings?: DmsTransferSettings;

  /**
   * <p>Settings in JSON format for the target Amazon DynamoDB endpoint. For more information
   *          about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB.html">Using Object Mapping to Migrate
   *             Data to DynamoDB</a> in the <i>AWS Database Migration Service User
   *             Guide.</i>
   *          </p>
   */
  DynamoDbSettings?: DynamoDbSettings;

  /**
   * <p>Settings in JSON format for the target Elasticsearch endpoint. For more information
   *          about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Elasticsearch.html#CHAP_Target.Elasticsearch.Configuration">Extra Connection Attributes When Using Elasticsearch as a Target for AWS DMS</a> in
   *          the <i>AWS Database Migration User Guide.</i>
   *          </p>
   */
  ElasticsearchSettings?: ElasticsearchSettings;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>The database endpoint identifier. Identifiers must begin with a letter; must contain
   *          only ASCII letters, digits, and hyphens; and must not end with a hyphen or contain two
   *          consecutive hyphens.</p>
   */
  EndpointIdentifier?: string;

  /**
   * <p>The type of endpoint.  Valid values are <code>source</code> and <code>target</code>.</p>
   */
  EndpointType?: ReplicationEndpointTypeValue | string;

  /**
   * <p>The type of engine for the endpoint. Valid values, depending on the EndpointType,
   *          include mysql, oracle, postgres, mariadb, aurora, aurora-postgresql, redshift, s3, db2,
   *          azuredb, sybase, dynamodb, mongodb, and sqlserver.</p>
   */
  EngineName?: string;

  /**
   * <p>The external table definition.</p>
   */
  ExternalTableDefinition?: string;

  /**
   * <p>Additional attributes associated with the connection. To reset this parameter, pass the
   *          empty string ("") as an argument.</p>
   */
  ExtraConnectionAttributes?: string;

  /**
   * <p>Settings in JSON format for the target Amazon Kinesis Data Streams endpoint. For more
   *          information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html#CHAP_Target.Kinesis.ObjectMapping">Using Object Mapping to Migrate Data to a Kinesis Data Stream</a> in the
   *             <i>AWS Database Migration User Guide.</i>
   *          </p>
   */
  KinesisSettings?: KinesisSettings;

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

  /**
   * <p>The port used by the endpoint database.</p>
   */
  Port?: number;

  /**
   * <p></p>
   */
  RedshiftSettings?: RedshiftSettings;

  /**
   * <p>Settings in JSON format for the target Amazon S3 endpoint. For more information about
   *          the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring">Extra
   *             Connection Attributes When Using Amazon S3 as a Target for AWS DMS</a> in the
   *             <i>AWS Database Migration Service User Guide.</i>
   *          </p>
   */
  S3Settings?: S3Settings;

  /**
   * <p>The name of the server where the endpoint database resides.</p>
   */
  ServerName?: string;

  /**
   * <p> The Amazon Resource Name (ARN) for the service access role you want to use to modify
   *          the endpoint. </p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * <p>The SSL mode used to connect to the endpoint.  The default value is <code>none</code>.</p>
   */
  SslMode?: DmsSslModeValue | string;

  /**
   * <p>The user name to be used to login to the endpoint database.</p>
   */
  Username?: string;
}

export namespace ModifyEndpointMessage {
  export const filterSensitiveLog = (obj: ModifyEndpointMessage): any => ({
    ...obj,
    ...(obj.MongoDbSettings && {
      MongoDbSettings: MongoDbSettings.filterSensitiveLog(obj.MongoDbSettings)
    }),
    ...(obj.Password && { Password: SENSITIVE_STRING }),
    ...(obj.RedshiftSettings && {
      RedshiftSettings: RedshiftSettings.filterSensitiveLog(
        obj.RedshiftSettings
      )
    })
  });
  export const isa = (o: any): o is ModifyEndpointMessage =>
    __isa(o, "ModifyEndpointMessage");
}

/**
 * <p></p>
 */
export interface ModifyEndpointResponse {
  __type?: "ModifyEndpointResponse";
  /**
   * <p>The modified endpoint.</p>
   */
  Endpoint?: Endpoint;
}

export namespace ModifyEndpointResponse {
  export const filterSensitiveLog = (obj: ModifyEndpointResponse): any => ({
    ...obj,
    ...(obj.Endpoint && { Endpoint: Endpoint.filterSensitiveLog(obj.Endpoint) })
  });
  export const isa = (o: any): o is ModifyEndpointResponse =>
    __isa(o, "ModifyEndpointResponse");
}

/**
 * <p></p>
 */
export interface ModifyEventSubscriptionMessage {
  __type?: "ModifyEventSubscriptionMessage";
  /**
   * <p> A Boolean value; set to <b>true</b> to activate the
   *          subscription. </p>
   */
  Enabled?: boolean;

  /**
   * <p> A list of event categories for a source type that you want to subscribe to. Use the
   *             <code>DescribeEventCategories</code> action to see a list of event categories. </p>
   */
  EventCategories?: string[];

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

  /**
   * <p>The name of the AWS DMS event notification subscription to be modified.</p>
   */
  SubscriptionName: string | undefined;
}

export namespace ModifyEventSubscriptionMessage {
  export const filterSensitiveLog = (
    obj: ModifyEventSubscriptionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyEventSubscriptionMessage =>
    __isa(o, "ModifyEventSubscriptionMessage");
}

/**
 * <p></p>
 */
export interface ModifyEventSubscriptionResponse {
  __type?: "ModifyEventSubscriptionResponse";
  /**
   * <p>The modified event subscription.</p>
   */
  EventSubscription?: EventSubscription;
}

export namespace ModifyEventSubscriptionResponse {
  export const filterSensitiveLog = (
    obj: ModifyEventSubscriptionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyEventSubscriptionResponse =>
    __isa(o, "ModifyEventSubscriptionResponse");
}

/**
 * <p></p>
 */
export interface ModifyReplicationInstanceMessage {
  __type?: "ModifyReplicationInstanceMessage";
  /**
   * <p>The amount of storage (in gigabytes) to be allocated for the replication
   *          instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Indicates that major version upgrades are allowed. Changing this parameter does not
   *          result in an outage, and the change is asynchronously applied as soon as possible.</p>
   *          <p>This parameter must be set to <code>true</code> when specifying a value for the
   *             <code>EngineVersion</code> parameter that is a different major version than the
   *          replication instance's current version.</p>
   */
  AllowMajorVersionUpgrade?: boolean;

  /**
   * <p>Indicates whether the changes should be applied immediately or during the next
   *          maintenance window.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p> Indicates that minor version upgrades will be applied automatically to the replication
   *          instance during the maintenance window. Changing this parameter does not result in an
   *          outage except in the following case and the change is asynchronously applied as soon as
   *          possible. An outage will result if this parameter is set to <code>true</code> during the
   *          maintenance window, and a newer minor version is available, and AWS DMS has enabled auto
   *          patching for that engine version. </p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The engine version number of the replication instance.</p>
   */
  EngineVersion?: string;

  /**
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You cannot set the
   *             <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to
   *             <code>true</code>. </p>
   */
  MultiAZ?: boolean;

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
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * <p>The compute and memory capacity of the replication instance.</p>
   *          <p> Valid Values: <code>dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large |
   *             dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge </code>
   *          </p>
   */
  ReplicationInstanceClass?: string;

  /**
   * <p>The replication instance identifier. This parameter is stored as a lowercase
   *          string.</p>
   */
  ReplicationInstanceIdentifier?: string;

  /**
   * <p> Specifies the VPC security group to be used with the replication instance. The VPC
   *          security group must work with the VPC containing the replication instance. </p>
   */
  VpcSecurityGroupIds?: string[];
}

export namespace ModifyReplicationInstanceMessage {
  export const filterSensitiveLog = (
    obj: ModifyReplicationInstanceMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyReplicationInstanceMessage =>
    __isa(o, "ModifyReplicationInstanceMessage");
}

/**
 * <p></p>
 */
export interface ModifyReplicationInstanceResponse {
  __type?: "ModifyReplicationInstanceResponse";
  /**
   * <p>The modified replication instance.</p>
   */
  ReplicationInstance?: ReplicationInstance;
}

export namespace ModifyReplicationInstanceResponse {
  export const filterSensitiveLog = (
    obj: ModifyReplicationInstanceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyReplicationInstanceResponse =>
    __isa(o, "ModifyReplicationInstanceResponse");
}

/**
 * <p></p>
 */
export interface ModifyReplicationSubnetGroupMessage {
  __type?: "ModifyReplicationSubnetGroupMessage";
  /**
   * <p>A description for the replication instance subnet group.</p>
   */
  ReplicationSubnetGroupDescription?: string;

  /**
   * <p>The name of the replication instance subnet group.</p>
   */
  ReplicationSubnetGroupIdentifier: string | undefined;

  /**
   * <p>A list of subnet IDs.</p>
   */
  SubnetIds: string[] | undefined;
}

export namespace ModifyReplicationSubnetGroupMessage {
  export const filterSensitiveLog = (
    obj: ModifyReplicationSubnetGroupMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyReplicationSubnetGroupMessage =>
    __isa(o, "ModifyReplicationSubnetGroupMessage");
}

/**
 * <p></p>
 */
export interface ModifyReplicationSubnetGroupResponse {
  __type?: "ModifyReplicationSubnetGroupResponse";
  /**
   * <p>The modified replication subnet group.</p>
   */
  ReplicationSubnetGroup?: ReplicationSubnetGroup;
}

export namespace ModifyReplicationSubnetGroupResponse {
  export const filterSensitiveLog = (
    obj: ModifyReplicationSubnetGroupResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyReplicationSubnetGroupResponse =>
    __isa(o, "ModifyReplicationSubnetGroupResponse");
}

/**
 * <p></p>
 */
export interface ModifyReplicationTaskMessage {
  __type?: "ModifyReplicationTaskMessage";
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
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either
   *          CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>
   */
  CdcStartTime?: Date;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   *          <p>Server time example: --cdc-stop-position “server_time:3018-02-09T12:12:12”</p>
   *          <p>Commit time example: --cdc-stop-position “commit_time: 3018-02-09T12:12:12 “</p>
   */
  CdcStopPosition?: string;

  /**
   * <p>The migration type. Valid values: <code>full-load</code> | <code>cdc</code> | <code>full-load-and-cdc</code>
   *          </p>
   */
  MigrationType?: MigrationTypeValue | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   */
  ReplicationTaskArn: string | undefined;

  /**
   * <p>The replication task identifier.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 255 alphanumeric characters or hyphens.</p>
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
   * <p>JSON file that contains settings for the task, such as target metadata settings.</p>
   */
  ReplicationTaskSettings?: string;

  /**
   * <p>When using the AWS CLI or boto3, provide the path of the JSON file that contains the
   *          table mappings. Precede the path with <code>file://</code>. When working with the DMS API, provide the
   *          JSON as the parameter value, for example: <code>--table-mappings file://mappingfile.json</code>
   *          </p>
   */
  TableMappings?: string;
}

export namespace ModifyReplicationTaskMessage {
  export const filterSensitiveLog = (
    obj: ModifyReplicationTaskMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyReplicationTaskMessage =>
    __isa(o, "ModifyReplicationTaskMessage");
}

/**
 * <p></p>
 */
export interface ModifyReplicationTaskResponse {
  __type?: "ModifyReplicationTaskResponse";
  /**
   * <p>The replication task that was modified.</p>
   */
  ReplicationTask?: ReplicationTask;
}

export namespace ModifyReplicationTaskResponse {
  export const filterSensitiveLog = (
    obj: ModifyReplicationTaskResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ModifyReplicationTaskResponse =>
    __isa(o, "ModifyReplicationTaskResponse");
}

/**
 * <p></p>
 */
export interface MongoDbSettings {
  __type?: "MongoDbSettings";
  /**
   * <p> The authentication mechanism you use to access the MongoDB source endpoint.</p>
   *          <p>Valid values: DEFAULT, MONGODB_CR, SCRAM_SHA_1 </p>
   *          <p>DEFAULT – For MongoDB version 2.x, use MONGODB_CR. For MongoDB version 3.x, use
   *          SCRAM_SHA_1. This setting is not used when authType=No.</p>
   */
  AuthMechanism?: AuthMechanismValue | string;

  /**
   * <p> The MongoDB database name. This setting is not used when <code>authType=NO</code>. </p>
   *          <p>The default is admin.</p>
   */
  AuthSource?: string;

  /**
   * <p> The authentication type you use to access the MongoDB source endpoint.</p>
   *          <p>Valid values: NO, PASSWORD </p>
   *          <p>When NO is selected, user name and password parameters are not used and can be empty.
   *       </p>
   */
  AuthType?: AuthTypeValue | string;

  /**
   * <p> The database name on the MongoDB source endpoint. </p>
   */
  DatabaseName?: string;

  /**
   * <p> Indicates the number of documents to preview to determine the document organization.
   *          Use this setting when <code>NestingLevel</code> is set to ONE. </p>
   *          <p>Must be a positive value greater than 0. Default value is 1000.</p>
   */
  DocsToInvestigate?: string;

  /**
   * <p> Specifies the document ID. Use this setting when <code>NestingLevel</code> is set to
   *          NONE. </p>
   *          <p>Default value is false. </p>
   */
  ExtractDocId?: string;

  /**
   * <p>The AWS KMS key identifier that is used to encrypt the content on the replication
   *          instance. If you don't specify a value for the <code>KmsKeyId</code> parameter, then
   *          AWS DMS uses your default encryption key. AWS KMS creates the default encryption key for
   *          your AWS account. Your AWS account has a different default encryption key for each AWS
   *          Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p> Specifies either document or table mode. </p>
   *          <p>Valid values: NONE, ONE</p>
   *          <p>Default value is NONE. Specify NONE to use document mode. Specify ONE to use table
   *          mode.</p>
   */
  NestingLevel?: NestingLevelValue | string;

  /**
   * <p> The password for the user account you use to access the MongoDB source endpoint.
   *       </p>
   */
  Password?: string;

  /**
   * <p> The port value for the MongoDB source endpoint. </p>
   */
  Port?: number;

  /**
   * <p> The name of the server on the MongoDB source endpoint. </p>
   */
  ServerName?: string;

  /**
   * <p>The user name you use to access the MongoDB source endpoint. </p>
   */
  Username?: string;
}

export namespace MongoDbSettings {
  export const filterSensitiveLog = (obj: MongoDbSettings): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is MongoDbSettings =>
    __isa(o, "MongoDbSettings");
}

export enum NestingLevelValue {
  NONE = "none",
  ONE = "one"
}

/**
 * <p></p>
 */
export interface OrderableReplicationInstance {
  __type?: "OrderableReplicationInstance";
  /**
   * <p>List of Availability Zones for this replication instance.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The default amount of storage (in gigabytes) that is allocated for the replication
   *          instance.</p>
   */
  DefaultAllocatedStorage?: number;

  /**
   * <p>The version of the replication engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The amount of storage (in gigabytes) that is allocated for the replication
   *          instance.</p>
   */
  IncludedAllocatedStorage?: number;

  /**
   * <p>The minimum amount of storage (in gigabytes) that can be allocated for the replication
   *          instance.</p>
   */
  MaxAllocatedStorage?: number;

  /**
   * <p>The minimum amount of storage (in gigabytes) that can be allocated for the replication
   *          instance.</p>
   */
  MinAllocatedStorage?: number;

  /**
   * <p>The value returned when the specified <code>EngineVersion</code> of the replication
   *          instance is in Beta or test mode. This indicates some features might not work as expected.</p>
   *          <note>
   *             <p>AWS DMS supports the <code>ReleaseStatus</code> parameter in versions 3.1.4 and later.</p>
   *          </note>
   */
  ReleaseStatus?: ReleaseStatusValues | string;

  /**
   * <p>The compute and memory capacity of the replication instance.</p>
   *          <p> Valid Values: <code>dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large |
   *             dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge </code>
   *          </p>
   */
  ReplicationInstanceClass?: string;

  /**
   * <p>The type of storage used by the replication instance.</p>
   */
  StorageType?: string;
}

export namespace OrderableReplicationInstance {
  export const filterSensitiveLog = (
    obj: OrderableReplicationInstance
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OrderableReplicationInstance =>
    __isa(o, "OrderableReplicationInstance");
}

export enum ParquetVersionValue {
  PARQUET_1_0 = "parquet-1-0",
  PARQUET_2_0 = "parquet-2-0"
}

/**
 * <p></p>
 */
export interface PendingMaintenanceAction {
  __type?: "PendingMaintenanceAction";
  /**
   * <p>The type of pending maintenance action that is available for the resource.</p>
   */
  Action?: string;

  /**
   * <p>The date of the maintenance window when the action will be applied. The maintenance
   *          action will be applied to the resource during its first maintenance window after this date.
   *          If this date is specified, any <code>next-maintenance</code> opt-in requests are
   *          ignored.</p>
   */
  AutoAppliedAfterDate?: Date;

  /**
   * <p>The effective date when the pending maintenance action will be applied to the resource.
   *          This date takes into account opt-in requests received from the
   *             <code>ApplyPendingMaintenanceAction</code> API, the <code>AutoAppliedAfterDate</code>,
   *          and the <code>ForcedApplyDate</code>. This value is blank if an opt-in request has not been
   *          received and nothing has been specified as <code>AutoAppliedAfterDate</code> or
   *             <code>ForcedApplyDate</code>.</p>
   */
  CurrentApplyDate?: Date;

  /**
   * <p>A description providing more detail about the maintenance action.</p>
   */
  Description?: string;

  /**
   * <p>The date when the maintenance action will be automatically applied. The maintenance
   *          action will be applied to the resource on this date regardless of the maintenance window
   *          for the resource. If this date is specified, any <code>immediate</code> opt-in requests are
   *          ignored.</p>
   */
  ForcedApplyDate?: Date;

  /**
   * <p>Indicates the type of opt-in request that has been received for the resource.</p>
   */
  OptInStatus?: string;
}

export namespace PendingMaintenanceAction {
  export const filterSensitiveLog = (obj: PendingMaintenanceAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is PendingMaintenanceAction =>
    __isa(o, "PendingMaintenanceAction");
}

export interface RebootReplicationInstanceMessage {
  __type?: "RebootReplicationInstanceMessage";
  /**
   * <p>If this parameter is <code>true</code>, the reboot is conducted through a Multi-AZ
   *          failover. (If the instance isn't configured for Multi-AZ, then you can't specify
   *             <code>true</code>.)</p>
   */
  ForceFailover?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;
}

export namespace RebootReplicationInstanceMessage {
  export const filterSensitiveLog = (
    obj: RebootReplicationInstanceMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RebootReplicationInstanceMessage =>
    __isa(o, "RebootReplicationInstanceMessage");
}

export interface RebootReplicationInstanceResponse {
  __type?: "RebootReplicationInstanceResponse";
  /**
   * <p>The replication instance that is being rebooted. </p>
   */
  ReplicationInstance?: ReplicationInstance;
}

export namespace RebootReplicationInstanceResponse {
  export const filterSensitiveLog = (
    obj: RebootReplicationInstanceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RebootReplicationInstanceResponse =>
    __isa(o, "RebootReplicationInstanceResponse");
}

/**
 * <p></p>
 */
export interface RedshiftSettings {
  __type?: "RedshiftSettings";
  /**
   * <p>A value that indicates to allow any date format, including invalid formats such as
   *          00/00/00 00:00:00, to be loaded without generating an error. You can choose
   *             <code>true</code> or <code>false</code> (the default).</p>
   *          <p>This parameter applies only to TIMESTAMP and DATE columns. Always use ACCEPTANYDATE with
   *          the DATEFORMAT parameter. If the date format for the data doesn't match the DATEFORMAT
   *          specification, Amazon Redshift inserts a NULL value into that field. </p>
   */
  AcceptAnyDate?: boolean;

  /**
   * <p>Code to run after connecting. This parameter should contain the code itself, not the
   *          name of a file containing the code.</p>
   */
  AfterConnectScript?: string;

  /**
   * <p>The location where the comma-separated value (.csv) files are stored before being
   *          uploaded to the S3 bucket. </p>
   */
  BucketFolder?: string;

  /**
   * <p>The name of the S3 bucket you want to use</p>
   */
  BucketName?: string;

  /**
   * <p>A value that sets the amount of time to wait (in milliseconds) before timing out,
   *          beginning from when you initially establish a connection.</p>
   */
  ConnectionTimeout?: number;

  /**
   * <p>The name of the Amazon Redshift data warehouse (service) that you are working
   *          with.</p>
   */
  DatabaseName?: string;

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
   * <p>A value that specifies whether AWS DMS should migrate empty CHAR and VARCHAR fields as
   *          NULL. A value of <code>true</code> sets empty CHAR and VARCHAR fields to null. The default
   *          is <code>false</code>.</p>
   */
  EmptyAsNull?: boolean;

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
   * <p>The number of threads used to upload a single file. This parameter accepts a value from
   *          1 through 64. It defaults to 10.</p>
   */
  FileTransferUploadStreams?: number;

  /**
   * <p>The amount of time to wait (in milliseconds) before timing out, beginning from when you
   *          begin loading.</p>
   */
  LoadTimeout?: number;

  /**
   * <p>The maximum size (in KB) of any .csv file used to transfer data to Amazon Redshift. This
   *          accepts a value from 1 through 1,048,576. It defaults to 32,768 KB (32 MB).</p>
   */
  MaxFileSize?: number;

  /**
   * <p>The password for the user named in the <code>username</code> property.</p>
   */
  Password?: string;

  /**
   * <p>The port number for Amazon Redshift. The default value is 5439.</p>
   */
  Port?: number;

  /**
   * <p>A value that specifies to remove surrounding quotation marks from strings in the
   *          incoming data. All characters within the quotation marks, including delimiters, are
   *          retained. Choose <code>true</code> to remove quotation marks. The default is
   *             <code>false</code>.</p>
   */
  RemoveQuotes?: boolean;

  /**
   * <p>A value that specifies to replaces the invalid characters specified in
   *          <code>ReplaceInvalidChars</code>, substituting the specified characters instead. The
   *          default is <code>"?"</code>.</p>
   */
  ReplaceChars?: string;

  /**
   * <p>A list of characters that you want to replace. Use with
   *          <code>ReplaceChars</code>.</p>
   */
  ReplaceInvalidChars?: string;

  /**
   * <p>The name of the Amazon Redshift cluster you are using.</p>
   */
  ServerName?: string;

  /**
   * <p>The AWS KMS key ID. If you are using <code>SSE_KMS</code> for the <code>EncryptionMode</code>,
   *          provide this key ID. The key that you use needs an attached policy that enables IAM user
   *          permissions and allows use of the key.</p>
   */
  ServerSideEncryptionKmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role that has access to the Amazon Redshift
   *          service.</p>
   */
  ServiceAccessRoleArn?: string;

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
   * <p>A value that specifies to remove the trailing white space characters from a VARCHAR
   *          string. This parameter applies only to columns with a VARCHAR data type. Choose
   *             <code>true</code> to remove unneeded white space. The default is
   *          <code>false</code>.</p>
   */
  TrimBlanks?: boolean;

  /**
   * <p>A value that specifies to truncate data in columns to the appropriate number of
   *          characters, so that the data fits in the column. This parameter applies only to columns
   *          with a VARCHAR or CHAR data type, and rows with a size of 4 MB or less. Choose
   *             <code>true</code> to truncate data. The default is <code>false</code>.</p>
   */
  TruncateColumns?: boolean;

  /**
   * <p>An Amazon Redshift user name for a registered user.</p>
   */
  Username?: string;

  /**
   * <p>The size of the write buffer to use in rows. Valid values range from 1 through 2,048.
   *          The default is 1,024. Use this setting to tune performance. </p>
   */
  WriteBufferSize?: number;
}

export namespace RedshiftSettings {
  export const filterSensitiveLog = (obj: RedshiftSettings): any => ({
    ...obj,
    ...(obj.Password && { Password: SENSITIVE_STRING })
  });
  export const isa = (o: any): o is RedshiftSettings =>
    __isa(o, "RedshiftSettings");
}

/**
 * <p></p>
 */
export interface RefreshSchemasMessage {
  __type?: "RefreshSchemasMessage";
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;
}

export namespace RefreshSchemasMessage {
  export const filterSensitiveLog = (obj: RefreshSchemasMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is RefreshSchemasMessage =>
    __isa(o, "RefreshSchemasMessage");
}

/**
 * <p></p>
 */
export interface RefreshSchemasResponse {
  __type?: "RefreshSchemasResponse";
  /**
   * <p>The status of the refreshed schema.</p>
   */
  RefreshSchemasStatus?: RefreshSchemasStatus;
}

export namespace RefreshSchemasResponse {
  export const filterSensitiveLog = (obj: RefreshSchemasResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is RefreshSchemasResponse =>
    __isa(o, "RefreshSchemasResponse");
}

/**
 * <p></p>
 */
export interface RefreshSchemasStatus {
  __type?: "RefreshSchemasStatus";
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn?: string;

  /**
   * <p>The last failure message for the schema.</p>
   */
  LastFailureMessage?: string;

  /**
   * <p>The date the schema was last refreshed.</p>
   */
  LastRefreshDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * <p>The status of the schema.</p>
   */
  Status?: RefreshSchemasStatusTypeValue | string;
}

export namespace RefreshSchemasStatus {
  export const filterSensitiveLog = (obj: RefreshSchemasStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is RefreshSchemasStatus =>
    __isa(o, "RefreshSchemasStatus");
}

export enum RefreshSchemasStatusTypeValue {
  FAILED = "failed",
  REFRESHING = "refreshing",
  SUCCESSFUL = "successful"
}

export enum ReleaseStatusValues {
  BETA = "beta"
}

export enum ReloadOptionValue {
  DATA_RELOAD = "data-reload",
  VALIDATE_ONLY = "validate-only"
}

export interface ReloadTablesMessage {
  __type?: "ReloadTablesMessage";
  /**
   * <p>Options for reload. Specify <code>data-reload</code> to reload the data and re-validate
   *          it if validation is enabled. Specify <code>validate-only</code> to re-validate the table.
   *          This option applies only when validation is enabled for the task. </p>
   *          <p>Valid values: data-reload, validate-only</p>
   *          <p>Default value is data-reload.</p>
   */
  ReloadOption?: ReloadOptionValue | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication task. </p>
   */
  ReplicationTaskArn: string | undefined;

  /**
   * <p>The name and schema of the table to be reloaded. </p>
   */
  TablesToReload: TableToReload[] | undefined;
}

export namespace ReloadTablesMessage {
  export const filterSensitiveLog = (obj: ReloadTablesMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReloadTablesMessage =>
    __isa(o, "ReloadTablesMessage");
}

export interface ReloadTablesResponse {
  __type?: "ReloadTablesResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task. </p>
   */
  ReplicationTaskArn?: string;
}

export namespace ReloadTablesResponse {
  export const filterSensitiveLog = (obj: ReloadTablesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReloadTablesResponse =>
    __isa(o, "ReloadTablesResponse");
}

/**
 * <p>Removes one or more tags from an AWS DMS resource.</p>
 */
export interface RemoveTagsFromResourceMessage {
  __type?: "RemoveTagsFromResourceMessage";
  /**
   * <p>An AWS DMS resource from which you want to remove tag(s). The value for this parameter is an Amazon Resource Name (ARN).</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag key (name) of the tag to be removed.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace RemoveTagsFromResourceMessage {
  export const filterSensitiveLog = (
    obj: RemoveTagsFromResourceMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveTagsFromResourceMessage =>
    __isa(o, "RemoveTagsFromResourceMessage");
}

/**
 * <p></p>
 */
export interface RemoveTagsFromResourceResponse {
  __type?: "RemoveTagsFromResourceResponse";
}

export namespace RemoveTagsFromResourceResponse {
  export const filterSensitiveLog = (
    obj: RemoveTagsFromResourceResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RemoveTagsFromResourceResponse =>
    __isa(o, "RemoveTagsFromResourceResponse");
}

export enum ReplicationEndpointTypeValue {
  SOURCE = "source",
  TARGET = "target"
}

/**
 * <p></p>
 */
export interface ReplicationInstance {
  __type?: "ReplicationInstance";
  /**
   * <p>The amount of storage (in gigabytes) that is allocated for the replication
   *          instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Boolean value indicating if minor version upgrades will be automatically applied to the
   *          instance.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The Availability Zone for the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The DNS name servers for the replication instance.</p>
   */
  DnsNameServers?: string;

  /**
   * <p>The engine version number of the replication instance.</p>
   */
  EngineVersion?: string;

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
   * <p>An AWS KMS key identifier that is used to encrypt the data on the replication
   *            instance.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then
   *            AWS DMS uses your default encryption key.</p>
   *          <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account has a
   *          different default encryption key for each AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You cannot set the
   *             <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to
   *             <code>true</code>. </p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The pending modification values.</p>
   */
  PendingModifiedValues?: ReplicationPendingModifiedValues;

  /**
   * <p>The maintenance window times for the replication instance.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p> Specifies the accessibility options for the replication instance. A value of
   *             <code>true</code> represents an instance with a public IP address. A value of
   *             <code>false</code> represents an instance with a private IP address. The default value
   *          is <code>true</code>. </p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * <p>The compute and memory capacity of the replication instance.</p>
   *          <p> Valid Values: <code>dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large |
   *             dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge </code>
   *          </p>
   */
  ReplicationInstanceClass?: string;

  /**
   * <p>The replication instance identifier. This parameter is stored as a lowercase
   *          string.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 63 alphanumeric characters or hyphens.</p>
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
   * <p>The private IP address of the replication instance.</p>
   */
  ReplicationInstancePrivateIpAddress?: string;

  /**
   * <p>One or more private IP addresses for the replication instance.</p>
   */
  ReplicationInstancePrivateIpAddresses?: string[];

  /**
   * <p>The public IP address of the replication instance.</p>
   */
  ReplicationInstancePublicIpAddress?: string;

  /**
   * <p>One or more public IP addresses for the replication instance.</p>
   */
  ReplicationInstancePublicIpAddresses?: string[];

  /**
   * <p>The status of the replication instance.</p>
   */
  ReplicationInstanceStatus?: string;

  /**
   * <p>The subnet group for the replication instance.</p>
   */
  ReplicationSubnetGroup?: ReplicationSubnetGroup;

  /**
   * <p>The availability zone of the standby replication instance in a Multi-AZ
   *          deployment.</p>
   */
  SecondaryAvailabilityZone?: string;

  /**
   * <p>The VPC security group for the instance.</p>
   */
  VpcSecurityGroups?: VpcSecurityGroupMembership[];
}

export namespace ReplicationInstance {
  export const filterSensitiveLog = (obj: ReplicationInstance): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicationInstance =>
    __isa(o, "ReplicationInstance");
}

/**
 * <p>Contains metadata for a replication instance task log.</p>
 */
export interface ReplicationInstanceTaskLog {
  __type?: "ReplicationInstanceTaskLog";
  /**
   * <p>The size, in bytes, of the replication task log.</p>
   */
  ReplicationInstanceTaskLogSize?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   */
  ReplicationTaskArn?: string;

  /**
   * <p>The name of the replication task.</p>
   */
  ReplicationTaskName?: string;
}

export namespace ReplicationInstanceTaskLog {
  export const filterSensitiveLog = (obj: ReplicationInstanceTaskLog): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicationInstanceTaskLog =>
    __isa(o, "ReplicationInstanceTaskLog");
}

/**
 * <p></p>
 */
export interface ReplicationPendingModifiedValues {
  __type?: "ReplicationPendingModifiedValues";
  /**
   * <p>The amount of storage (in gigabytes) that is allocated for the replication
   *          instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * <p>The engine version number of the replication instance.</p>
   */
  EngineVersion?: string;

  /**
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You cannot set the
   *             <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to
   *             <code>true</code>. </p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The compute and memory capacity of the replication instance.</p>
   *          <p> Valid Values: <code>dms.t2.micro | dms.t2.small | dms.t2.medium | dms.t2.large |
   *             dms.c4.large | dms.c4.xlarge | dms.c4.2xlarge | dms.c4.4xlarge </code>
   *          </p>
   */
  ReplicationInstanceClass?: string;
}

export namespace ReplicationPendingModifiedValues {
  export const filterSensitiveLog = (
    obj: ReplicationPendingModifiedValues
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicationPendingModifiedValues =>
    __isa(o, "ReplicationPendingModifiedValues");
}

/**
 * <p></p>
 */
export interface ReplicationSubnetGroup {
  __type?: "ReplicationSubnetGroup";
  /**
   * <p>A description for the replication subnet group.</p>
   */
  ReplicationSubnetGroupDescription?: string;

  /**
   * <p>The identifier of the replication instance subnet group.</p>
   */
  ReplicationSubnetGroupIdentifier?: string;

  /**
   * <p>The status of the subnet group.</p>
   */
  SubnetGroupStatus?: string;

  /**
   * <p>The subnets that are in the subnet group.</p>
   */
  Subnets?: Subnet[];

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;
}

export namespace ReplicationSubnetGroup {
  export const filterSensitiveLog = (obj: ReplicationSubnetGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicationSubnetGroup =>
    __isa(o, "ReplicationSubnetGroup");
}

/**
 * <p>The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.</p>
 */
export interface ReplicationSubnetGroupDoesNotCoverEnoughAZs
  extends __SmithyException,
    $MetadataBearer {
  name: "ReplicationSubnetGroupDoesNotCoverEnoughAZs";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace ReplicationSubnetGroupDoesNotCoverEnoughAZs {
  export const filterSensitiveLog = (
    obj: ReplicationSubnetGroupDoesNotCoverEnoughAZs
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ReplicationSubnetGroupDoesNotCoverEnoughAZs =>
    __isa(o, "ReplicationSubnetGroupDoesNotCoverEnoughAZs");
}

/**
 * <p></p>
 */
export interface ReplicationTask {
  __type?: "ReplicationTask";
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
   * <p>The type of migration.</p>
   */
  MigrationType?: MigrationTypeValue | string;

  /**
   * <p>Indicates the last checkpoint that occurred during a change data capture (CDC)
   *          operation. You can provide this value to the <code>CdcStartPosition</code> parameter to
   *          start a CDC operation that begins at that checkpoint.</p>
   */
  RecoveryCheckpoint?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   */
  ReplicationTaskArn?: string;

  /**
   * <p>The date the replication task was created.</p>
   */
  ReplicationTaskCreationDate?: Date;

  /**
   * <p>The user-assigned replication task identifier or name.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain from 1 to 255 alphanumeric characters or hyphens.</p>
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
   * <p>The settings for the replication task.</p>
   */
  ReplicationTaskSettings?: string;

  /**
   * <p>The date the replication task is scheduled to start.</p>
   */
  ReplicationTaskStartDate?: Date;

  /**
   * <p>The statistics for the task, including elapsed time, tables loaded, and table
   *          errors.</p>
   */
  ReplicationTaskStats?: ReplicationTaskStats;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  SourceEndpointArn?: string;

  /**
   * <p>The status of the replication task.</p>
   */
  Status?: string;

  /**
   * <p>The reason the replication task was stopped.</p>
   */
  StopReason?: string;

  /**
   * <p>Table mappings specified in the task.</p>
   */
  TableMappings?: string;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  TargetEndpointArn?: string;
}

export namespace ReplicationTask {
  export const filterSensitiveLog = (obj: ReplicationTask): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicationTask =>
    __isa(o, "ReplicationTask");
}

/**
 * <p> The task assessment report in JSON format. </p>
 */
export interface ReplicationTaskAssessmentResult {
  __type?: "ReplicationTaskAssessmentResult";
  /**
   * <p> The task assessment results in JSON format. </p>
   */
  AssessmentResults?: string;

  /**
   * <p> The file containing the results of the task assessment. </p>
   */
  AssessmentResultsFile?: string;

  /**
   * <p> The status of the task assessment. </p>
   */
  AssessmentStatus?: string;

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
   * <p>The date the task assessment was completed. </p>
   */
  ReplicationTaskLastAssessmentDate?: Date;

  /**
   * <p> The URL of the S3 object containing the task assessment results. </p>
   */
  S3ObjectUrl?: string;
}

export namespace ReplicationTaskAssessmentResult {
  export const filterSensitiveLog = (
    obj: ReplicationTaskAssessmentResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicationTaskAssessmentResult =>
    __isa(o, "ReplicationTaskAssessmentResult");
}

/**
 * <p></p>
 */
export interface ReplicationTaskStats {
  __type?: "ReplicationTaskStats";
  /**
   * <p>The elapsed time of the task, in milliseconds.</p>
   */
  ElapsedTimeMillis?: number;

  /**
   * <p>The date the replication task was started either with a fresh start or a target reload.</p>
   */
  FreshStartDate?: Date;

  /**
   * <p>The date the replication task full load was completed.</p>
   */
  FullLoadFinishDate?: Date;

  /**
   * <p>The percent complete for the full load migration task.</p>
   */
  FullLoadProgressPercent?: number;

  /**
   * <p>The date the the replication task full load was started.</p>
   */
  FullLoadStartDate?: Date;

  /**
   * <p>The date the replication task was started either with a fresh start or a resume. For more information, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_StartReplicationTask.html#DMS-StartReplicationTask-request-StartReplicationTaskType">StartReplicationTaskType</a>.</p>
   */
  StartDate?: Date;

  /**
   * <p>The date the replication task was stopped.</p>
   */
  StopDate?: Date;

  /**
   * <p>The number of errors that have occurred during this task.</p>
   */
  TablesErrored?: number;

  /**
   * <p>The number of tables loaded for this task.</p>
   */
  TablesLoaded?: number;

  /**
   * <p>The number of tables currently loading for this task.</p>
   */
  TablesLoading?: number;

  /**
   * <p>The number of tables queued for this task.</p>
   */
  TablesQueued?: number;
}

export namespace ReplicationTaskStats {
  export const filterSensitiveLog = (obj: ReplicationTaskStats): any => ({
    ...obj
  });
  export const isa = (o: any): o is ReplicationTaskStats =>
    __isa(o, "ReplicationTaskStats");
}

/**
 * <p>The resource you are attempting to create already exists.</p>
 */
export interface ResourceAlreadyExistsFault
  extends __SmithyException,
    $MetadataBearer {
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
    ...obj
  });
  export const isa = (o: any): o is ResourceAlreadyExistsFault =>
    __isa(o, "ResourceAlreadyExistsFault");
}

/**
 * <p>The resource could not be found.</p>
 */
export interface ResourceNotFoundFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace ResourceNotFoundFault {
  export const filterSensitiveLog = (obj: ResourceNotFoundFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundFault =>
    __isa(o, "ResourceNotFoundFault");
}

/**
 * <p></p>
 */
export interface ResourcePendingMaintenanceActions {
  __type?: "ResourcePendingMaintenanceActions";
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
  export const filterSensitiveLog = (
    obj: ResourcePendingMaintenanceActions
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourcePendingMaintenanceActions =>
    __isa(o, "ResourcePendingMaintenanceActions");
}

/**
 * <p>The quota for this resource quota has been exceeded.</p>
 */
export interface ResourceQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceQuotaExceededFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace ResourceQuotaExceededFault {
  export const filterSensitiveLog = (obj: ResourceQuotaExceededFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceQuotaExceededFault =>
    __isa(o, "ResourceQuotaExceededFault");
}

/**
 * <p>Settings for exporting data to Amazon S3. </p>
 */
export interface S3Settings {
  __type?: "S3Settings";
  /**
   * <p> An optional parameter to set a folder name in the S3 bucket. If provided, tables are
   *          created in the path
   *                <code>
   *                <i>bucketFolder</i>/<i>schema_name</i>/<i>table_name</i>/</code>.
   *          If this parameter is not specified, then the path used is
   *                <code>
   *                <i>schema_name</i>/<i>table_name</i>/</code>. </p>
   */
  BucketFolder?: string;

  /**
   * <p> The name of the S3 bucket. </p>
   */
  BucketName?: string;

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
   *          <note>
   *             <p>AWS DMS supports this interaction between the <code>CdcInsertsOnly</code> and
   *                <code>IncludeOpForFullLoad</code> parameters in versions 3.1.4 and later. </p>
   *          </note>
   */
  CdcInsertsOnly?: boolean;

  /**
   * <p> An optional parameter to use GZIP to compress the target files. Set to GZIP to compress
   *          the target files. Set to NONE (the default) or do not use to leave the files uncompressed.
   *          Applies to both .csv and .parquet file formats. </p>
   */
  CompressionType?: CompressionTypeValue | string;

  /**
   * <p> The delimiter used to separate columns in the source files. The default is a comma.
   *       </p>
   */
  CsvDelimiter?: string;

  /**
   * <p> The delimiter used to separate rows in the source files. The default is a carriage
   *          return (<code>\n</code>). </p>
   */
  CsvRowDelimiter?: string;

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
   * <p>The size of one data page in bytes. This parameter defaults to 1024 * 1024 bytes (1 MiB).
   *          This number is used for .parquet file format only. </p>
   */
  DataPageSize?: number;

  /**
   * <p>The maximum size of an encoded dictionary page of a column. If the dictionary page
   *          exceeds this, this column is stored using an encoding type of <code>PLAIN</code>. This
   *          parameter defaults to 1024 * 1024 bytes (1 MiB), the maximum size of a dictionary page
   *          before it reverts to <code>PLAIN</code> encoding. This size is used for
   *            .parquet file format only. </p>
   */
  DictPageSizeLimit?: number;

  /**
   * <p>A value that enables statistics for Parquet pages and row groups. Choose
   *             <code>true</code> to enable statistics, <code>false</code> to disable. Statistics
   *          include <code>NULL</code>, <code>DISTINCT</code>, <code>MAX</code>, and <code>MIN</code>
   *          values. This parameter defaults to <code>true</code>. This value is used for
   *             .parquet file format only.</p>
   */
  EnableStatistics?: boolean;

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

  /**
   * <p> The external table definition. </p>
   */
  ExternalTableDefinition?: string;

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
   *             <p>This setting works together with the <code>CdcInsertsOnly</code> parameter for output to .csv files
   *             only. For more information about how these settings work together, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring.InsertOps">Indicating Source DB Operations in Migrated S3 Data</a> in the <i>AWS
   *                Database Migration Service User Guide.</i>.</p>
   *          </note>
   */
  IncludeOpForFullLoad?: boolean;

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
   * <p>The version of the Apache Parquet format that you want to use: <code>parquet_1_0</code>
   *          (the default) or <code>parquet_2_0</code>.</p>
   */
  ParquetVersion?: ParquetVersionValue | string;

  /**
   * <p>The number of rows in a row group. A smaller row group size provides faster reads. But
   *          as the number of row groups grows, the slower writes become. This parameter defaults to
   *          10,000 rows. This number is used for .parquet file format only. </p>
   *          <p>If you choose a value larger than the maximum, <code>RowGroupLength</code> is set to the
   *          max row group length in bytes (64 * 1024 * 1024). </p>
   */
  RowGroupLength?: number;

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
   * <p> The Amazon Resource Name (ARN) used by the service access IAM role. </p>
   */
  ServiceAccessRoleArn?: string;

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
}

export namespace S3Settings {
  export const filterSensitiveLog = (obj: S3Settings): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3Settings => __isa(o, "S3Settings");
}

/**
 * <p>The SNS topic is invalid.</p>
 */
export interface SNSInvalidTopicFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SNSInvalidTopicFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace SNSInvalidTopicFault {
  export const filterSensitiveLog = (obj: SNSInvalidTopicFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is SNSInvalidTopicFault =>
    __isa(o, "SNSInvalidTopicFault");
}

/**
 * <p>You are not authorized for the SNS subscription.</p>
 */
export interface SNSNoAuthorizationFault
  extends __SmithyException,
    $MetadataBearer {
  name: "SNSNoAuthorizationFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace SNSNoAuthorizationFault {
  export const filterSensitiveLog = (obj: SNSNoAuthorizationFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is SNSNoAuthorizationFault =>
    __isa(o, "SNSNoAuthorizationFault");
}

export type SourceType = "replication-instance";

/**
 * <p></p>
 */
export interface StartReplicationTaskAssessmentMessage {
  __type?: "StartReplicationTaskAssessmentMessage";
  /**
   * <p> The Amazon Resource Name (ARN) of the replication task. </p>
   */
  ReplicationTaskArn: string | undefined;
}

export namespace StartReplicationTaskAssessmentMessage {
  export const filterSensitiveLog = (
    obj: StartReplicationTaskAssessmentMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartReplicationTaskAssessmentMessage =>
    __isa(o, "StartReplicationTaskAssessmentMessage");
}

/**
 * <p></p>
 */
export interface StartReplicationTaskAssessmentResponse {
  __type?: "StartReplicationTaskAssessmentResponse";
  /**
   * <p> The assessed replication task. </p>
   */
  ReplicationTask?: ReplicationTask;
}

export namespace StartReplicationTaskAssessmentResponse {
  export const filterSensitiveLog = (
    obj: StartReplicationTaskAssessmentResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartReplicationTaskAssessmentResponse =>
    __isa(o, "StartReplicationTaskAssessmentResponse");
}

/**
 * <p></p>
 */
export interface StartReplicationTaskMessage {
  __type?: "StartReplicationTaskMessage";
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
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either
   *          CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>
   */
  CdcStartTime?: Date;

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
}

export namespace StartReplicationTaskMessage {
  export const filterSensitiveLog = (
    obj: StartReplicationTaskMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartReplicationTaskMessage =>
    __isa(o, "StartReplicationTaskMessage");
}

/**
 * <p></p>
 */
export interface StartReplicationTaskResponse {
  __type?: "StartReplicationTaskResponse";
  /**
   * <p>The replication task started.</p>
   */
  ReplicationTask?: ReplicationTask;
}

export namespace StartReplicationTaskResponse {
  export const filterSensitiveLog = (
    obj: StartReplicationTaskResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartReplicationTaskResponse =>
    __isa(o, "StartReplicationTaskResponse");
}

export enum StartReplicationTaskTypeValue {
  RELOAD_TARGET = "reload-target",
  RESUME_PROCESSING = "resume-processing",
  START_REPLICATION = "start-replication"
}

/**
 * <p></p>
 */
export interface StopReplicationTaskMessage {
  __type?: "StopReplicationTaskMessage";
  /**
   * <p>The Amazon Resource Name(ARN) of the replication task to be stopped.</p>
   */
  ReplicationTaskArn: string | undefined;
}

export namespace StopReplicationTaskMessage {
  export const filterSensitiveLog = (obj: StopReplicationTaskMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopReplicationTaskMessage =>
    __isa(o, "StopReplicationTaskMessage");
}

/**
 * <p></p>
 */
export interface StopReplicationTaskResponse {
  __type?: "StopReplicationTaskResponse";
  /**
   * <p>The replication task stopped.</p>
   */
  ReplicationTask?: ReplicationTask;
}

export namespace StopReplicationTaskResponse {
  export const filterSensitiveLog = (
    obj: StopReplicationTaskResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopReplicationTaskResponse =>
    __isa(o, "StopReplicationTaskResponse");
}

/**
 * <p>The storage quota has been exceeded.</p>
 */
export interface StorageQuotaExceededFault
  extends __SmithyException,
    $MetadataBearer {
  name: "StorageQuotaExceededFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace StorageQuotaExceededFault {
  export const filterSensitiveLog = (obj: StorageQuotaExceededFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is StorageQuotaExceededFault =>
    __isa(o, "StorageQuotaExceededFault");
}

/**
 * <p></p>
 */
export interface Subnet {
  __type?: "Subnet";
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
    ...obj
  });
  export const isa = (o: any): o is Subnet => __isa(o, "Subnet");
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
    ...obj
  });
  export const isa = (o: any): o is SubnetAlreadyInUse =>
    __isa(o, "SubnetAlreadyInUse");
}

/**
 * <p></p>
 */
export interface SupportedEndpointType {
  __type?: "SupportedEndpointType";
  /**
   * <p>The type of endpoint.  Valid values are <code>source</code> and <code>target</code>.</p>
   */
  EndpointType?: ReplicationEndpointTypeValue | string;

  /**
   * <p>The expanded name for the engine name. For example, if the <code>EngineName</code>
   *          parameter is "aurora," this value would be "Amazon Aurora MySQL."</p>
   */
  EngineDisplayName?: string;

  /**
   * <p>The database engine name. Valid values, depending on the EndpointType, include mysql,
   *          oracle, postgres, mariadb, aurora, aurora-postgresql, redshift, s3, db2, azuredb,
   *          sybase, dynamodb, mongodb, and sqlserver.</p>
   */
  EngineName?: string;

  /**
   * <p>Indicates if Change Data Capture (CDC) is supported.</p>
   */
  SupportsCDC?: boolean;
}

export namespace SupportedEndpointType {
  export const filterSensitiveLog = (obj: SupportedEndpointType): any => ({
    ...obj
  });
  export const isa = (o: any): o is SupportedEndpointType =>
    __isa(o, "SupportedEndpointType");
}

/**
 * <p></p>
 */
export interface TableStatistics {
  __type?: "TableStatistics";
  /**
   * <p>The Data Definition Language (DDL) used to build and modify the structure of your
   *          tables.</p>
   */
  Ddls?: number;

  /**
   * <p>The number of delete actions performed on a table.</p>
   */
  Deletes?: number;

  /**
   * <p>The number of rows that failed conditional checks during the Full Load operation (valid
   *          only for DynamoDB as a target migrations).</p>
   */
  FullLoadCondtnlChkFailedRows?: number;

  /**
   * <p>The number of rows that failed to load during the Full Load operation (valid only for
   *          DynamoDB as a target migrations).</p>
   */
  FullLoadErrorRows?: number;

  /**
   * <p>The number of rows added during the Full Load operation.</p>
   */
  FullLoadRows?: number;

  /**
   * <p>The number of insert actions performed on a table.</p>
   */
  Inserts?: number;

  /**
   * <p>The last time the table was updated.</p>
   */
  LastUpdateTime?: Date;

  /**
   * <p>The schema name.</p>
   */
  SchemaName?: string;

  /**
   * <p>The name of the table.</p>
   */
  TableName?: string;

  /**
   * <p>The state of the tables described.</p>
   *          <p>Valid states: Table does not exist | Before load | Full load | Table completed | Table
   *          cancelled | Table error | Table all | Table updates | Table is being reloaded</p>
   */
  TableState?: string;

  /**
   * <p>The number of update actions performed on a table.</p>
   */
  Updates?: number;

  /**
   * <p>The number of records that failed validation.</p>
   */
  ValidationFailedRecords?: number;

  /**
   * <p>The number of records that have yet to be validated.</p>
   */
  ValidationPendingRecords?: number;

  /**
   * <p>The validation state of the table.</p>
   *          <p>The parameter can have the following values</p>
   *          <ul>
   *             <li>
   *                <p>Not enabled—Validation is not enabled for the table in the migration task.</p>
   *             </li>
   *             <li>
   *                <p>Pending records—Some records in the table are waiting for validation.</p>
   *             </li>
   *             <li>
   *                <p>Mismatched records—Some records in the table do not match between the source and
   *                target.</p>
   *             </li>
   *             <li>
   *                <p>Suspended records—Some records in the table could not be validated.</p>
   *             </li>
   *             <li>
   *                <p>No primary key—The table could not be validated because it had no primary
   *                key.</p>
   *             </li>
   *             <li>
   *                <p>Table error—The table was not validated because it was in an error state and some
   *                data was not migrated.</p>
   *             </li>
   *             <li>
   *                <p>Validated—All rows in the table were validated. If the table is updated, the
   *                status can change from Validated.</p>
   *             </li>
   *             <li>
   *                <p>Error—The table could not be validated because of an unexpected error.</p>
   *             </li>
   *          </ul>
   */
  ValidationState?: string;

  /**
   * <p>Additional details about the state of validation.</p>
   */
  ValidationStateDetails?: string;

  /**
   * <p>The number of records that could not be validated.</p>
   */
  ValidationSuspendedRecords?: number;
}

export namespace TableStatistics {
  export const filterSensitiveLog = (obj: TableStatistics): any => ({
    ...obj
  });
  export const isa = (o: any): o is TableStatistics =>
    __isa(o, "TableStatistics");
}

/**
 * <p></p>
 */
export interface TableToReload {
  __type?: "TableToReload";
  /**
   * <p>The schema name of the table to be reloaded.</p>
   */
  SchemaName?: string;

  /**
   * <p>The table name of the table to be reloaded.</p>
   */
  TableName?: string;
}

export namespace TableToReload {
  export const filterSensitiveLog = (obj: TableToReload): any => ({
    ...obj
  });
  export const isa = (o: any): o is TableToReload => __isa(o, "TableToReload");
}

/**
 * <p></p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>A key is the required name of the tag. The string value can be from 1 to 128 Unicode
   *          characters in length and cannot be prefixed with "aws:" or "dms:". The string can only
   *          contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-'
   *          (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</p>
   */
  Key?: string;

  /**
   * <p>A value is the optional value of the tag. The string value can be from 1 to 256 Unicode
   *          characters in length and cannot be prefixed with "aws:" or "dms:". The string can only
   *          contain only the set of Unicode letters, digits, white-space, '_', '.', '/', '=', '+', '-'
   *          (Java regex: "^([\\p{L}\\p{Z}\\p{N}_.:/=+\\-]*)$").</p>
   */
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

/**
 * <p></p>
 */
export interface TestConnectionMessage {
  __type?: "TestConnectionMessage";
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
    ...obj
  });
  export const isa = (o: any): o is TestConnectionMessage =>
    __isa(o, "TestConnectionMessage");
}

/**
 * <p></p>
 */
export interface TestConnectionResponse {
  __type?: "TestConnectionResponse";
  /**
   * <p>The connection tested.</p>
   */
  Connection?: Connection;
}

export namespace TestConnectionResponse {
  export const filterSensitiveLog = (obj: TestConnectionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is TestConnectionResponse =>
    __isa(o, "TestConnectionResponse");
}

/**
 * <p>An upgrade dependency is preventing the database migration.</p>
 */
export interface UpgradeDependencyFailureFault
  extends __SmithyException,
    $MetadataBearer {
  name: "UpgradeDependencyFailureFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace UpgradeDependencyFailureFault {
  export const filterSensitiveLog = (
    obj: UpgradeDependencyFailureFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpgradeDependencyFailureFault =>
    __isa(o, "UpgradeDependencyFailureFault");
}

/**
 * <p></p>
 */
export interface VpcSecurityGroupMembership {
  __type?: "VpcSecurityGroupMembership";
  /**
   * <p>The status of the VPC security group.</p>
   */
  Status?: string;

  /**
   * <p>The VPC security group Id.</p>
   */
  VpcSecurityGroupId?: string;
}

export namespace VpcSecurityGroupMembership {
  export const filterSensitiveLog = (obj: VpcSecurityGroupMembership): any => ({
    ...obj
  });
  export const isa = (o: any): o is VpcSecurityGroupMembership =>
    __isa(o, "VpcSecurityGroupMembership");
}
