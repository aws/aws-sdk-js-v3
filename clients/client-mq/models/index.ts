import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * Name of the availability zone.
 */
export interface AvailabilityZone {
  __type?: "AvailabilityZone";
  /**
   * Id for the availability zone.
   */
  Name?: string;
}

export namespace AvailabilityZone {
  export function isa(o: any): o is AvailabilityZone {
    return __isa(o, "AvailabilityZone");
  }
}

/**
 * Returns information about an error.
 */
export interface BadRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  /**
   * The attribute which caused the error.
   */
  ErrorAttribute?: string;

  /**
   * The explanation of the error.
   */
  Message?: string;
}

export namespace BadRequestException {
  export function isa(o: any): o is BadRequestException {
    return __isa(o, "BadRequestException");
  }
}

/**
 * Types of broker engines.
 */
export interface BrokerEngineType {
  __type?: "BrokerEngineType";
  /**
   * The type of broker engine.
   */
  EngineType?: EngineType | string;

  /**
   * The list of engine versions.
   */
  EngineVersions?: Array<EngineVersion>;
}

export namespace BrokerEngineType {
  export function isa(o: any): o is BrokerEngineType {
    return __isa(o, "BrokerEngineType");
  }
}

/**
 * Returns information about all brokers.
 */
export interface BrokerInstance {
  __type?: "BrokerInstance";
  /**
   * The URL of the broker's ActiveMQ Web Console.
   */
  ConsoleURL?: string;

  /**
   * The broker's wire-level protocol endpoints.
   */
  Endpoints?: Array<string>;

  /**
   * The IP address of the Elastic Network Interface (ENI) attached to the broker.
   */
  IpAddress?: string;
}

export namespace BrokerInstance {
  export function isa(o: any): o is BrokerInstance {
    return __isa(o, "BrokerInstance");
  }
}

/**
 * Option for host instance type.
 */
export interface BrokerInstanceOption {
  __type?: "BrokerInstanceOption";
  /**
   * The list of available az.
   */
  AvailabilityZones?: Array<AvailabilityZone>;

  /**
   * The type of broker engine.
   */
  EngineType?: EngineType | string;

  /**
   * The type of broker instance.
   */
  HostInstanceType?: string;

  /**
   * The broker's storage type.
   */
  StorageType?: BrokerStorageType | string;

  /**
   * The list of supported deployment modes.
   */
  SupportedDeploymentModes?: Array<DeploymentMode | string>;

  /**
   * The list of supported engine versions.
   */
  SupportedEngineVersions?: Array<string>;
}

export namespace BrokerInstanceOption {
  export function isa(o: any): o is BrokerInstanceOption {
    return __isa(o, "BrokerInstanceOption");
  }
}

export enum BrokerState {
  CREATION_FAILED = "CREATION_FAILED",
  CREATION_IN_PROGRESS = "CREATION_IN_PROGRESS",
  DELETION_IN_PROGRESS = "DELETION_IN_PROGRESS",
  REBOOT_IN_PROGRESS = "REBOOT_IN_PROGRESS",
  RUNNING = "RUNNING"
}

export enum BrokerStorageType {
  EBS = "EBS",
  EFS = "EFS"
}

/**
 * The Amazon Resource Name (ARN) of the broker.
 */
export interface BrokerSummary {
  __type?: "BrokerSummary";
  /**
   * The Amazon Resource Name (ARN) of the broker.
   */
  BrokerArn?: string;

  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId?: string;

  /**
   * The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
   */
  BrokerName?: string;

  /**
   * The status of the broker.
   */
  BrokerState?: BrokerState | string;

  /**
   * The time when the broker was created.
   */
  Created?: Date;

  /**
   * Required. The deployment mode of the broker.
   */
  DeploymentMode?: DeploymentMode | string;

  /**
   * The broker's instance type.
   */
  HostInstanceType?: string;
}

export namespace BrokerSummary {
  export function isa(o: any): o is BrokerSummary {
    return __isa(o, "BrokerSummary");
  }
}

export enum ChangeType {
  CREATE = "CREATE",
  DELETE = "DELETE",
  UPDATE = "UPDATE"
}

/**
 * Returns information about all configurations.
 */
export interface Configuration {
  __type?: "Configuration";
  /**
   * Required. The ARN of the configuration.
   */
  Arn?: string;

  /**
   * Required. The date and time of the configuration revision.
   */
  Created?: Date;

  /**
   * Required. The description of the configuration.
   */
  Description?: string;

  /**
   * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
   */
  EngineType?: EngineType | string;

  /**
   * Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  EngineVersion?: string;

  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   */
  Id?: string;

  /**
   * Required. The latest revision of the configuration.
   */
  LatestRevision?: ConfigurationRevision;

  /**
   * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
   */
  Name?: string;

  /**
   * The list of all tags associated with this configuration.
   */
  Tags?: { [key: string]: string };
}

export namespace Configuration {
  export function isa(o: any): o is Configuration {
    return __isa(o, "Configuration");
  }
}

/**
 * A list of information about the configuration.
 */
export interface ConfigurationId {
  __type?: "ConfigurationId";
  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   */
  Id?: string;

  /**
   * The revision number of the configuration.
   */
  Revision?: number;
}

export namespace ConfigurationId {
  export function isa(o: any): o is ConfigurationId {
    return __isa(o, "ConfigurationId");
  }
}

/**
 * Returns information about the specified configuration revision.
 */
export interface ConfigurationRevision {
  __type?: "ConfigurationRevision";
  /**
   * Required. The date and time of the configuration revision.
   */
  Created?: Date;

  /**
   * The description of the configuration revision.
   */
  Description?: string;

  /**
   * Required. The revision number of the configuration.
   */
  Revision?: number;
}

export namespace ConfigurationRevision {
  export function isa(o: any): o is ConfigurationRevision {
    return __isa(o, "ConfigurationRevision");
  }
}

/**
 * Broker configuration information
 */
export interface Configurations {
  __type?: "Configurations";
  /**
   * The current configuration of the broker.
   */
  Current?: ConfigurationId;

  /**
   * The history of configurations applied to the broker.
   */
  History?: Array<ConfigurationId>;

  /**
   * The pending configuration of the broker.
   */
  Pending?: ConfigurationId;
}

export namespace Configurations {
  export function isa(o: any): o is Configurations {
    return __isa(o, "Configurations");
  }
}

/**
 * Returns information about an error.
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * The attribute which caused the error.
   */
  ErrorAttribute?: string;

  /**
   * The explanation of the error.
   */
  Message?: string;
}

export namespace ConflictException {
  export function isa(o: any): o is ConflictException {
    return __isa(o, "ConflictException");
  }
}

/**
 * Creates a broker using the specified properties.
 */
export interface CreateBrokerRequest {
  __type?: "CreateBrokerRequest";
  /**
   * Required. Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot.
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * Required. The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
   */
  BrokerName?: string;

  /**
   * A list of information about the configuration.
   */
  Configuration?: ConfigurationId;

  /**
   * The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action. Note: We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency.
   */
  CreatorRequestId?: string;

  /**
   * Required. The deployment mode of the broker.
   */
  DeploymentMode?: DeploymentMode | string;

  /**
   * Encryption options for the broker.
   */
  EncryptionOptions?: EncryptionOptions;

  /**
   * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
   */
  EngineType?: EngineType | string;

  /**
   * Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  EngineVersion?: string;

  /**
   * Required. The broker's instance type.
   */
  HostInstanceType?: string;

  /**
   * Enables Amazon CloudWatch logging for brokers.
   */
  Logs?: Logs;

  /**
   * The parameters that determine the WeeklyStartTime.
   */
  MaintenanceWindowStartTime?: WeeklyStartTime;

  /**
   * Required. Enables connections from applications outside of the VPC that hosts the broker's subnets.
   */
  PubliclyAccessible?: boolean;

  /**
   * The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.
   */
  SecurityGroups?: Array<string>;

  /**
   * The broker's storage type.
   */
  StorageType?: BrokerStorageType | string;

  /**
   * The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment requires two subnets.
   */
  SubnetIds?: Array<string>;

  /**
   * Create tags when creating the broker.
   */
  Tags?: { [key: string]: string };

  /**
   * Required. The list of ActiveMQ users (persons or applications) who can access queues and topics. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Users?: Array<User>;
}

export namespace CreateBrokerRequest {
  export function isa(o: any): o is CreateBrokerRequest {
    return __isa(o, "CreateBrokerRequest");
  }
}

export interface CreateBrokerResponse {
  __type?: "CreateBrokerResponse";
  /**
   * The Amazon Resource Name (ARN) of the broker.
   */
  BrokerArn?: string;

  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId?: string;
}

export namespace CreateBrokerResponse {
  export function isa(o: any): o is CreateBrokerResponse {
    return __isa(o, "CreateBrokerResponse");
  }
}

/**
 * Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).
 */
export interface CreateConfigurationRequest {
  __type?: "CreateConfigurationRequest";
  /**
   * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
   */
  EngineType?: EngineType | string;

  /**
   * Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  EngineVersion?: string;

  /**
   * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
   */
  Name?: string;

  /**
   * Create tags when creating the configuration.
   */
  Tags?: { [key: string]: string };
}

export namespace CreateConfigurationRequest {
  export function isa(o: any): o is CreateConfigurationRequest {
    return __isa(o, "CreateConfigurationRequest");
  }
}

export interface CreateConfigurationResponse {
  __type?: "CreateConfigurationResponse";
  /**
   * Required. The Amazon Resource Name (ARN) of the configuration.
   */
  Arn?: string;

  /**
   * Required. The date and time of the configuration.
   */
  Created?: Date;

  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   */
  Id?: string;

  /**
   * The latest revision of the configuration.
   */
  LatestRevision?: ConfigurationRevision;

  /**
   * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
   */
  Name?: string;
}

export namespace CreateConfigurationResponse {
  export function isa(o: any): o is CreateConfigurationResponse {
    return __isa(o, "CreateConfigurationResponse");
  }
}

/**
 * A map of the key-value pairs for the resource tag.
 */
export interface CreateTagsRequest {
  __type?: "CreateTagsRequest";
  /**
   * The Amazon Resource Name (ARN) of the resource tag.
   */
  ResourceArn: string | undefined;

  /**
   * The key-value pair for the resource tag.
   */
  Tags?: { [key: string]: string };
}

export namespace CreateTagsRequest {
  export function isa(o: any): o is CreateTagsRequest {
    return __isa(o, "CreateTagsRequest");
  }
}

/**
 * Creates a new ActiveMQ user.
 */
export interface CreateUserRequest {
  __type?: "CreateUserRequest";
  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId: string | undefined;

  /**
   * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
   */
  ConsoleAccess?: boolean;

  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Groups?: Array<string>;

  /**
   * Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas.
   */
  Password?: string;

  /**
   * The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Username: string | undefined;
}

export namespace CreateUserRequest {
  export function isa(o: any): o is CreateUserRequest {
    return __isa(o, "CreateUserRequest");
  }
}

export interface CreateUserResponse {
  __type?: "CreateUserResponse";
}

export namespace CreateUserResponse {
  export function isa(o: any): o is CreateUserResponse {
    return __isa(o, "CreateUserResponse");
  }
}

export enum DayOfWeek {
  FRIDAY = "FRIDAY",
  MONDAY = "MONDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
  THURSDAY = "THURSDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY"
}

export interface DeleteBrokerRequest {
  __type?: "DeleteBrokerRequest";
  /**
   * The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
   */
  BrokerId: string | undefined;
}

export namespace DeleteBrokerRequest {
  export function isa(o: any): o is DeleteBrokerRequest {
    return __isa(o, "DeleteBrokerRequest");
  }
}

export interface DeleteBrokerResponse {
  __type?: "DeleteBrokerResponse";
  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId?: string;
}

export namespace DeleteBrokerResponse {
  export function isa(o: any): o is DeleteBrokerResponse {
    return __isa(o, "DeleteBrokerResponse");
  }
}

export interface DeleteTagsRequest {
  __type?: "DeleteTagsRequest";
  /**
   * The Amazon Resource Name (ARN) of the resource tag.
   */
  ResourceArn: string | undefined;

  /**
   * An array of tag keys to delete
   */
  TagKeys: Array<string> | undefined;
}

export namespace DeleteTagsRequest {
  export function isa(o: any): o is DeleteTagsRequest {
    return __isa(o, "DeleteTagsRequest");
  }
}

export interface DeleteUserRequest {
  __type?: "DeleteUserRequest";
  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId: string | undefined;

  /**
   * The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Username: string | undefined;
}

export namespace DeleteUserRequest {
  export function isa(o: any): o is DeleteUserRequest {
    return __isa(o, "DeleteUserRequest");
  }
}

export interface DeleteUserResponse {
  __type?: "DeleteUserResponse";
}

export namespace DeleteUserResponse {
  export function isa(o: any): o is DeleteUserResponse {
    return __isa(o, "DeleteUserResponse");
  }
}

export enum DeploymentMode {
  ACTIVE_STANDBY_MULTI_AZ = "ACTIVE_STANDBY_MULTI_AZ",
  SINGLE_INSTANCE = "SINGLE_INSTANCE"
}

export interface DescribeBrokerEngineTypesRequest {
  __type?: "DescribeBrokerEngineTypesRequest";
  /**
   * Filter response by engine type.
   */
  EngineType?: string;

  /**
   * The maximum number of engine types that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;
}

export namespace DescribeBrokerEngineTypesRequest {
  export function isa(o: any): o is DescribeBrokerEngineTypesRequest {
    return __isa(o, "DescribeBrokerEngineTypesRequest");
  }
}

export interface DescribeBrokerEngineTypesResponse {
  __type?: "DescribeBrokerEngineTypesResponse";
  /**
   * List of available engine types and versions.
   */
  BrokerEngineTypes?: Array<BrokerEngineType>;

  /**
   * Required. The maximum number of engine types that can be returned per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;
}

export namespace DescribeBrokerEngineTypesResponse {
  export function isa(o: any): o is DescribeBrokerEngineTypesResponse {
    return __isa(o, "DescribeBrokerEngineTypesResponse");
  }
}

export interface DescribeBrokerInstanceOptionsRequest {
  __type?: "DescribeBrokerInstanceOptionsRequest";
  /**
   * Filter response by engine type.
   */
  EngineType?: string;

  /**
   * Filter response by host instance type.
   */
  HostInstanceType?: string;

  /**
   * The maximum number of instance options that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;

  /**
   * Filter response by storage type.
   */
  StorageType?: string;
}

export namespace DescribeBrokerInstanceOptionsRequest {
  export function isa(o: any): o is DescribeBrokerInstanceOptionsRequest {
    return __isa(o, "DescribeBrokerInstanceOptionsRequest");
  }
}

export interface DescribeBrokerInstanceOptionsResponse {
  __type?: "DescribeBrokerInstanceOptionsResponse";
  /**
   * List of available broker instance options.
   */
  BrokerInstanceOptions?: Array<BrokerInstanceOption>;

  /**
   * Required. The maximum number of instance options that can be returned per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;
}

export namespace DescribeBrokerInstanceOptionsResponse {
  export function isa(o: any): o is DescribeBrokerInstanceOptionsResponse {
    return __isa(o, "DescribeBrokerInstanceOptionsResponse");
  }
}

export interface DescribeBrokerRequest {
  __type?: "DescribeBrokerRequest";
  /**
   * The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
   */
  BrokerId: string | undefined;
}

export namespace DescribeBrokerRequest {
  export function isa(o: any): o is DescribeBrokerRequest {
    return __isa(o, "DescribeBrokerRequest");
  }
}

export interface DescribeBrokerResponse {
  __type?: "DescribeBrokerResponse";
  /**
   * Required. Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot.
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * The Amazon Resource Name (ARN) of the broker.
   */
  BrokerArn?: string;

  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId?: string;

  /**
   * A list of information about allocated brokers.
   */
  BrokerInstances?: Array<BrokerInstance>;

  /**
   * The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
   */
  BrokerName?: string;

  /**
   * The status of the broker.
   */
  BrokerState?: BrokerState | string;

  /**
   * The list of all revisions for the specified configuration.
   */
  Configurations?: Configurations;

  /**
   * The time when the broker was created.
   */
  Created?: Date;

  /**
   * Required. The deployment mode of the broker.
   */
  DeploymentMode?: DeploymentMode | string;

  /**
   * Encryption options for the broker.
   */
  EncryptionOptions?: EncryptionOptions;

  /**
   * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
   */
  EngineType?: EngineType | string;

  /**
   * The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  EngineVersion?: string;

  /**
   * The broker's instance type.
   */
  HostInstanceType?: string;

  /**
   * The list of information about logs currently enabled and pending to be deployed for the specified broker.
   */
  Logs?: LogsSummary;

  /**
   * The parameters that determine the WeeklyStartTime.
   */
  MaintenanceWindowStartTime?: WeeklyStartTime;

  /**
   * The version of the broker engine to upgrade to. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  PendingEngineVersion?: string;

  /**
   * The host instance type of the broker to upgrade to. For a list of supported instance types, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide//broker.html#broker-instance-types
   */
  PendingHostInstanceType?: string;

  /**
   * The list of pending security groups to authorize connections to brokers.
   */
  PendingSecurityGroups?: Array<string>;

  /**
   * Required. Enables connections from applications outside of the VPC that hosts the broker's subnets.
   */
  PubliclyAccessible?: boolean;

  /**
   * The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.
   */
  SecurityGroups?: Array<string>;

  /**
   * The broker's storage type.
   */
  StorageType?: BrokerStorageType | string;

  /**
   * The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment requires two subnets.
   */
  SubnetIds?: Array<string>;

  /**
   * The list of all tags associated with this broker.
   */
  Tags?: { [key: string]: string };

  /**
   * The list of all ActiveMQ usernames for the specified broker.
   */
  Users?: Array<UserSummary>;
}

export namespace DescribeBrokerResponse {
  export function isa(o: any): o is DescribeBrokerResponse {
    return __isa(o, "DescribeBrokerResponse");
  }
}

export interface DescribeConfigurationRequest {
  __type?: "DescribeConfigurationRequest";
  /**
   * The unique ID that Amazon MQ generates for the configuration.
   */
  ConfigurationId: string | undefined;
}

export namespace DescribeConfigurationRequest {
  export function isa(o: any): o is DescribeConfigurationRequest {
    return __isa(o, "DescribeConfigurationRequest");
  }
}

export interface DescribeConfigurationResponse {
  __type?: "DescribeConfigurationResponse";
  /**
   * Required. The ARN of the configuration.
   */
  Arn?: string;

  /**
   * Required. The date and time of the configuration revision.
   */
  Created?: Date;

  /**
   * Required. The description of the configuration.
   */
  Description?: string;

  /**
   * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
   */
  EngineType?: EngineType | string;

  /**
   * Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  EngineVersion?: string;

  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   */
  Id?: string;

  /**
   * Required. The latest revision of the configuration.
   */
  LatestRevision?: ConfigurationRevision;

  /**
   * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
   */
  Name?: string;

  /**
   * The list of all tags associated with this configuration.
   */
  Tags?: { [key: string]: string };
}

export namespace DescribeConfigurationResponse {
  export function isa(o: any): o is DescribeConfigurationResponse {
    return __isa(o, "DescribeConfigurationResponse");
  }
}

export interface DescribeConfigurationRevisionRequest {
  __type?: "DescribeConfigurationRevisionRequest";
  /**
   * The unique ID that Amazon MQ generates for the configuration.
   */
  ConfigurationId: string | undefined;

  /**
   * The revision of the configuration.
   */
  ConfigurationRevision: string | undefined;
}

export namespace DescribeConfigurationRevisionRequest {
  export function isa(o: any): o is DescribeConfigurationRevisionRequest {
    return __isa(o, "DescribeConfigurationRevisionRequest");
  }
}

export interface DescribeConfigurationRevisionResponse {
  __type?: "DescribeConfigurationRevisionResponse";
  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   */
  ConfigurationId?: string;

  /**
   * Required. The date and time of the configuration.
   */
  Created?: Date;

  /**
   * Required. The base64-encoded XML configuration.
   */
  Data?: string;

  /**
   * The description of the configuration.
   */
  Description?: string;
}

export namespace DescribeConfigurationRevisionResponse {
  export function isa(o: any): o is DescribeConfigurationRevisionResponse {
    return __isa(o, "DescribeConfigurationRevisionResponse");
  }
}

export interface DescribeUserRequest {
  __type?: "DescribeUserRequest";
  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId: string | undefined;

  /**
   * The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Username: string | undefined;
}

export namespace DescribeUserRequest {
  export function isa(o: any): o is DescribeUserRequest {
    return __isa(o, "DescribeUserRequest");
  }
}

export interface DescribeUserResponse {
  __type?: "DescribeUserResponse";
  /**
   * Required. The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId?: string;

  /**
   * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
   */
  ConsoleAccess?: boolean;

  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Groups?: Array<string>;

  /**
   * The status of the changes pending for the ActiveMQ user.
   */
  Pending?: UserPendingChanges;

  /**
   * Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Username?: string;
}

export namespace DescribeUserResponse {
  export function isa(o: any): o is DescribeUserResponse {
    return __isa(o, "DescribeUserResponse");
  }
}

/**
 * Encryption options for the broker.
 */
export interface EncryptionOptions {
  __type?: "EncryptionOptions";
  /**
   * The customer master key (CMK) to use for the AWS Key Management Service (KMS). This key is used to encrypt your data at rest. If not provided, Amazon MQ will use a default CMK to encrypt your data.
   */
  KmsKeyId?: string;

  /**
   * Enables the use of an AWS owned CMK using AWS Key Management Service (KMS).
   */
  UseAwsOwnedKey: boolean | undefined;
}

export namespace EncryptionOptions {
  export function isa(o: any): o is EncryptionOptions {
    return __isa(o, "EncryptionOptions");
  }
}

export enum EngineType {
  ACTIVEMQ = "ACTIVEMQ"
}

/**
 * Id of the engine version.
 */
export interface EngineVersion {
  __type?: "EngineVersion";
  /**
   * Id for the version.
   */
  Name?: string;
}

export namespace EngineVersion {
  export function isa(o: any): o is EngineVersion {
    return __isa(o, "EngineVersion");
  }
}

/**
 * Returns information about an error.
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  /**
   * The attribute which caused the error.
   */
  ErrorAttribute?: string;

  /**
   * The explanation of the error.
   */
  Message?: string;
}

export namespace ForbiddenException {
  export function isa(o: any): o is ForbiddenException {
    return __isa(o, "ForbiddenException");
  }
}

/**
 * Returns information about an error.
 */
export interface InternalServerErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  /**
   * The attribute which caused the error.
   */
  ErrorAttribute?: string;

  /**
   * The explanation of the error.
   */
  Message?: string;
}

export namespace InternalServerErrorException {
  export function isa(o: any): o is InternalServerErrorException {
    return __isa(o, "InternalServerErrorException");
  }
}

export interface ListBrokersRequest {
  __type?: "ListBrokersRequest";
  /**
   * The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;
}

export namespace ListBrokersRequest {
  export function isa(o: any): o is ListBrokersRequest {
    return __isa(o, "ListBrokersRequest");
  }
}

export interface ListBrokersResponse {
  __type?: "ListBrokersResponse";
  /**
   * A list of information about all brokers.
   */
  BrokerSummaries?: Array<BrokerSummary>;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;
}

export namespace ListBrokersResponse {
  export function isa(o: any): o is ListBrokersResponse {
    return __isa(o, "ListBrokersResponse");
  }
}

export interface ListConfigurationRevisionsRequest {
  __type?: "ListConfigurationRevisionsRequest";
  /**
   * The unique ID that Amazon MQ generates for the configuration.
   */
  ConfigurationId: string | undefined;

  /**
   * The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;
}

export namespace ListConfigurationRevisionsRequest {
  export function isa(o: any): o is ListConfigurationRevisionsRequest {
    return __isa(o, "ListConfigurationRevisionsRequest");
  }
}

export interface ListConfigurationRevisionsResponse {
  __type?: "ListConfigurationRevisionsResponse";
  /**
   * The unique ID that Amazon MQ generates for the configuration.
   */
  ConfigurationId?: string;

  /**
   * The maximum number of configuration revisions that can be returned per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;

  /**
   * The list of all revisions for the specified configuration.
   */
  Revisions?: Array<ConfigurationRevision>;
}

export namespace ListConfigurationRevisionsResponse {
  export function isa(o: any): o is ListConfigurationRevisionsResponse {
    return __isa(o, "ListConfigurationRevisionsResponse");
  }
}

export interface ListConfigurationsRequest {
  __type?: "ListConfigurationsRequest";
  /**
   * The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;
}

export namespace ListConfigurationsRequest {
  export function isa(o: any): o is ListConfigurationsRequest {
    return __isa(o, "ListConfigurationsRequest");
  }
}

export interface ListConfigurationsResponse {
  __type?: "ListConfigurationsResponse";
  /**
   * The list of all revisions for the specified configuration.
   */
  Configurations?: Array<Configuration>;

  /**
   * The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;
}

export namespace ListConfigurationsResponse {
  export function isa(o: any): o is ListConfigurationsResponse {
    return __isa(o, "ListConfigurationsResponse");
  }
}

export interface ListTagsRequest {
  __type?: "ListTagsRequest";
  /**
   * The Amazon Resource Name (ARN) of the resource tag.
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsRequest {
  export function isa(o: any): o is ListTagsRequest {
    return __isa(o, "ListTagsRequest");
  }
}

export interface ListTagsResponse {
  __type?: "ListTagsResponse";
  /**
   * The key-value pair for the resource tag.
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsResponse {
  export function isa(o: any): o is ListTagsResponse {
    return __isa(o, "ListTagsResponse");
  }
}

export interface ListUsersRequest {
  __type?: "ListUsersRequest";
  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId: string | undefined;

  /**
   * The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;
}

export namespace ListUsersRequest {
  export function isa(o: any): o is ListUsersRequest {
    return __isa(o, "ListUsersRequest");
  }
}

export interface ListUsersResponse {
  __type?: "ListUsersResponse";
  /**
   * Required. The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId?: string;

  /**
   * Required. The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;

  /**
   * Required. The list of all ActiveMQ usernames for the specified broker.
   */
  Users?: Array<UserSummary>;
}

export namespace ListUsersResponse {
  export function isa(o: any): o is ListUsersResponse {
    return __isa(o, "ListUsersResponse");
  }
}

/**
 * The list of information about logs to be enabled for the specified broker.
 */
export interface Logs {
  __type?: "Logs";
  /**
   * Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged.
   */
  Audit?: boolean;

  /**
   * Enables general logging.
   */
  General?: boolean;
}

export namespace Logs {
  export function isa(o: any): o is Logs {
    return __isa(o, "Logs");
  }
}

/**
 * The list of information about logs currently enabled and pending to be deployed for the specified broker.
 */
export interface LogsSummary {
  __type?: "LogsSummary";
  /**
   * Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged.
   */
  Audit?: boolean;

  /**
   * The location of the CloudWatch Logs log group where audit logs are sent.
   */
  AuditLogGroup?: string;

  /**
   * Enables general logging.
   */
  General?: boolean;

  /**
   * The location of the CloudWatch Logs log group where general logs are sent.
   */
  GeneralLogGroup?: string;

  /**
   * The list of information about logs pending to be deployed for the specified broker.
   */
  Pending?: PendingLogs;
}

export namespace LogsSummary {
  export function isa(o: any): o is LogsSummary {
    return __isa(o, "LogsSummary");
  }
}

/**
 * Returns information about an error.
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  /**
   * The attribute which caused the error.
   */
  ErrorAttribute?: string;

  /**
   * The explanation of the error.
   */
  Message?: string;
}

export namespace NotFoundException {
  export function isa(o: any): o is NotFoundException {
    return __isa(o, "NotFoundException");
  }
}

/**
 * The list of information about logs to be enabled for the specified broker.
 */
export interface PendingLogs {
  __type?: "PendingLogs";
  /**
   * Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged.
   */
  Audit?: boolean;

  /**
   * Enables general logging.
   */
  General?: boolean;
}

export namespace PendingLogs {
  export function isa(o: any): o is PendingLogs {
    return __isa(o, "PendingLogs");
  }
}

export interface RebootBrokerRequest {
  __type?: "RebootBrokerRequest";
  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId: string | undefined;
}

export namespace RebootBrokerRequest {
  export function isa(o: any): o is RebootBrokerRequest {
    return __isa(o, "RebootBrokerRequest");
  }
}

export interface RebootBrokerResponse {
  __type?: "RebootBrokerResponse";
}

export namespace RebootBrokerResponse {
  export function isa(o: any): o is RebootBrokerResponse {
    return __isa(o, "RebootBrokerResponse");
  }
}

/**
 * Returns information about the XML element or attribute that was sanitized in the configuration.
 */
export interface SanitizationWarning {
  __type?: "SanitizationWarning";
  /**
   * The name of the XML attribute that has been sanitized.
   */
  AttributeName?: string;

  /**
   * The name of the XML element that has been sanitized.
   */
  ElementName?: string;

  /**
   * Required. The reason for which the XML elements or attributes were sanitized.
   */
  Reason?: SanitizationWarningReason | string;
}

export namespace SanitizationWarning {
  export function isa(o: any): o is SanitizationWarning {
    return __isa(o, "SanitizationWarning");
  }
}

export enum SanitizationWarningReason {
  DISALLOWED_ATTRIBUTE_REMOVED = "DISALLOWED_ATTRIBUTE_REMOVED",
  DISALLOWED_ELEMENT_REMOVED = "DISALLOWED_ELEMENT_REMOVED",
  INVALID_ATTRIBUTE_VALUE_REMOVED = "INVALID_ATTRIBUTE_VALUE_REMOVED"
}

/**
 * Returns information about an error.
 */
export interface UnauthorizedException
  extends __SmithyException,
    $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  /**
   * The attribute which caused the error.
   */
  ErrorAttribute?: string;

  /**
   * The explanation of the error.
   */
  Message?: string;
}

export namespace UnauthorizedException {
  export function isa(o: any): o is UnauthorizedException {
    return __isa(o, "UnauthorizedException");
  }
}

/**
 * Updates the broker using the specified properties.
 */
export interface UpdateBrokerRequest {
  __type?: "UpdateBrokerRequest";
  /**
   * Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot.
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
   */
  BrokerId: string | undefined;

  /**
   * A list of information about the configuration.
   */
  Configuration?: ConfigurationId;

  /**
   * The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  EngineVersion?: string;

  /**
   * The host instance type of the broker to upgrade to. For a list of supported instance types, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide//broker.html#broker-instance-types
   */
  HostInstanceType?: string;

  /**
   * Enables Amazon CloudWatch logging for brokers.
   */
  Logs?: Logs;

  /**
   * The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.
   */
  SecurityGroups?: Array<string>;
}

export namespace UpdateBrokerRequest {
  export function isa(o: any): o is UpdateBrokerRequest {
    return __isa(o, "UpdateBrokerRequest");
  }
}

export interface UpdateBrokerResponse {
  __type?: "UpdateBrokerResponse";
  /**
   * The new value of automatic upgrades to new minor version for brokers.
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * Required. The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId?: string;

  /**
   * The ID of the updated configuration.
   */
  Configuration?: ConfigurationId;

  /**
   * The version of the broker engine to upgrade to. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  EngineVersion?: string;

  /**
   * The host instance type of the broker to upgrade to. For a list of supported instance types, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide//broker.html#broker-instance-types
   */
  HostInstanceType?: string;

  /**
   * The list of information about logs to be enabled for the specified broker.
   */
  Logs?: Logs;

  /**
   * The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.
   */
  SecurityGroups?: Array<string>;
}

export namespace UpdateBrokerResponse {
  export function isa(o: any): o is UpdateBrokerResponse {
    return __isa(o, "UpdateBrokerResponse");
  }
}

/**
 * Updates the specified configuration.
 */
export interface UpdateConfigurationRequest {
  __type?: "UpdateConfigurationRequest";
  /**
   * The unique ID that Amazon MQ generates for the configuration.
   */
  ConfigurationId: string | undefined;

  /**
   * Required. The base64-encoded XML configuration.
   */
  Data?: string;

  /**
   * The description of the configuration.
   */
  Description?: string;
}

export namespace UpdateConfigurationRequest {
  export function isa(o: any): o is UpdateConfigurationRequest {
    return __isa(o, "UpdateConfigurationRequest");
  }
}

export interface UpdateConfigurationResponse {
  __type?: "UpdateConfigurationResponse";
  /**
   * Required. The Amazon Resource Name (ARN) of the configuration.
   */
  Arn?: string;

  /**
   * Required. The date and time of the configuration.
   */
  Created?: Date;

  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   */
  Id?: string;

  /**
   * The latest revision of the configuration.
   */
  LatestRevision?: ConfigurationRevision;

  /**
   * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
   */
  Name?: string;

  /**
   * The list of the first 20 warnings about the configuration XML elements or attributes that were sanitized.
   */
  Warnings?: Array<SanitizationWarning>;
}

export namespace UpdateConfigurationResponse {
  export function isa(o: any): o is UpdateConfigurationResponse {
    return __isa(o, "UpdateConfigurationResponse");
  }
}

/**
 * Updates the information for an ActiveMQ user.
 */
export interface UpdateUserRequest {
  __type?: "UpdateUserRequest";
  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId: string | undefined;

  /**
   * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
   */
  ConsoleAccess?: boolean;

  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Groups?: Array<string>;

  /**
   * The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas.
   */
  Password?: string;

  /**
   * Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Username: string | undefined;
}

export namespace UpdateUserRequest {
  export function isa(o: any): o is UpdateUserRequest {
    return __isa(o, "UpdateUserRequest");
  }
}

export interface UpdateUserResponse {
  __type?: "UpdateUserResponse";
}

export namespace UpdateUserResponse {
  export function isa(o: any): o is UpdateUserResponse {
    return __isa(o, "UpdateUserResponse");
  }
}

/**
 * An ActiveMQ user associated with the broker.
 */
export interface User {
  __type?: "User";
  /**
   * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
   */
  ConsoleAccess?: boolean;

  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Groups?: Array<string>;

  /**
   * Required. The password of the ActiveMQ user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas.
   */
  Password?: string;

  /**
   * Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Username?: string;
}

export namespace User {
  export function isa(o: any): o is User {
    return __isa(o, "User");
  }
}

/**
 * Returns information about the status of the changes pending for the ActiveMQ user.
 */
export interface UserPendingChanges {
  __type?: "UserPendingChanges";
  /**
   * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
   */
  ConsoleAccess?: boolean;

  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Groups?: Array<string>;

  /**
   * Required. The type of change pending for the ActiveMQ user.
   */
  PendingChange?: ChangeType | string;
}

export namespace UserPendingChanges {
  export function isa(o: any): o is UserPendingChanges {
    return __isa(o, "UserPendingChanges");
  }
}

/**
 * Returns a list of all ActiveMQ users.
 */
export interface UserSummary {
  __type?: "UserSummary";
  /**
   * The type of change pending for the ActiveMQ user.
   */
  PendingChange?: ChangeType | string;

  /**
   * Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Username?: string;
}

export namespace UserSummary {
  export function isa(o: any): o is UserSummary {
    return __isa(o, "UserSummary");
  }
}

/**
 * The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.
 */
export interface WeeklyStartTime {
  __type?: "WeeklyStartTime";
  /**
   * Required. The day of the week.
   */
  DayOfWeek?: DayOfWeek | string;

  /**
   * Required. The time, in 24-hour format.
   */
  TimeOfDay?: string;

  /**
   * The time zone, UTC by default, in either the Country/City format, or the UTC offset format.
   */
  TimeZone?: string;
}

export namespace WeeklyStartTime {
  export function isa(o: any): o is WeeklyStartTime {
    return __isa(o, "WeeklyStartTime");
  }
}
