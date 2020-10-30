import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * Name of the availability zone.
 */
export interface AvailabilityZone {
  /**
   * Id for the availability zone.
   */
  Name?: string;
}

export namespace AvailabilityZone {
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj,
  });
}

export enum EngineType {
  ACTIVEMQ = "ACTIVEMQ",
}

/**
 * Id of the engine version.
 */
export interface EngineVersion {
  /**
   * Id for the version.
   */
  Name?: string;
}

export namespace EngineVersion {
  export const filterSensitiveLog = (obj: EngineVersion): any => ({
    ...obj,
  });
}

/**
 * Types of broker engines.
 */
export interface BrokerEngineType {
  /**
   * The list of engine versions.
   */
  EngineVersions?: EngineVersion[];

  /**
   * The type of broker engine.
   */
  EngineType?: EngineType | string;
}

export namespace BrokerEngineType {
  export const filterSensitiveLog = (obj: BrokerEngineType): any => ({
    ...obj,
  });
}

/**
 * Returns information about all brokers.
 */
export interface BrokerInstance {
  /**
   * The IP address of the Elastic Network Interface (ENI) attached to the broker.
   */
  IpAddress?: string;

  /**
   * The broker's wire-level protocol endpoints.
   */
  Endpoints?: string[];

  /**
   * The URL of the broker's ActiveMQ Web Console.
   */
  ConsoleURL?: string;
}

export namespace BrokerInstance {
  export const filterSensitiveLog = (obj: BrokerInstance): any => ({
    ...obj,
  });
}

export enum BrokerStorageType {
  EBS = "EBS",
  EFS = "EFS",
}

export enum DeploymentMode {
  ACTIVE_STANDBY_MULTI_AZ = "ACTIVE_STANDBY_MULTI_AZ",
  SINGLE_INSTANCE = "SINGLE_INSTANCE",
}

/**
 * Option for host instance type.
 */
export interface BrokerInstanceOption {
  /**
   * The list of supported engine versions.
   */
  SupportedEngineVersions?: string[];

  /**
   * The type of broker instance.
   */
  HostInstanceType?: string;

  /**
   * The list of supported deployment modes.
   */
  SupportedDeploymentModes?: (DeploymentMode | string)[];

  /**
   * The type of broker engine.
   */
  EngineType?: EngineType | string;

  /**
   * The list of available az.
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * The broker's storage type.
   */
  StorageType?: BrokerStorageType | string;
}

export namespace BrokerInstanceOption {
  export const filterSensitiveLog = (obj: BrokerInstanceOption): any => ({
    ...obj,
  });
}

export enum BrokerState {
  CREATION_FAILED = "CREATION_FAILED",
  CREATION_IN_PROGRESS = "CREATION_IN_PROGRESS",
  DELETION_IN_PROGRESS = "DELETION_IN_PROGRESS",
  REBOOT_IN_PROGRESS = "REBOOT_IN_PROGRESS",
  RUNNING = "RUNNING",
}

/**
 * The Amazon Resource Name (ARN) of the broker.
 */
export interface BrokerSummary {
  /**
   * The time when the broker was created.
   */
  Created?: Date;

  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId?: string;

  /**
   * Required. The deployment mode of the broker.
   */
  DeploymentMode?: DeploymentMode | string;

  /**
   * The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
   */
  BrokerName?: string;

  /**
   * The broker's instance type.
   */
  HostInstanceType?: string;

  /**
   * The Amazon Resource Name (ARN) of the broker.
   */
  BrokerArn?: string;

  /**
   * The status of the broker.
   */
  BrokerState?: BrokerState | string;
}

export namespace BrokerSummary {
  export const filterSensitiveLog = (obj: BrokerSummary): any => ({
    ...obj,
  });
}

export enum AuthenticationStrategy {
  LDAP = "LDAP",
  SIMPLE = "SIMPLE",
}

/**
 * Returns information about the specified configuration revision.
 */
export interface ConfigurationRevision {
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
  export const filterSensitiveLog = (obj: ConfigurationRevision): any => ({
    ...obj,
  });
}

/**
 * Returns information about all configurations.
 */
export interface Configuration {
  /**
   * The authentication strategy associated with the configuration.
   */
  AuthenticationStrategy?: AuthenticationStrategy | string;

  /**
   * Required. The description of the configuration.
   */
  Description?: string;

  /**
   * Required. The ARN of the configuration.
   */
  Arn?: string;

  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   */
  Id?: string;

  /**
   * Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  EngineVersion?: string;

  /**
   * Required. The latest revision of the configuration.
   */
  LatestRevision?: ConfigurationRevision;

  /**
   * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
   */
  Name?: string;

  /**
   * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
   */
  EngineType?: EngineType | string;

  /**
   * The list of all tags associated with this configuration.
   */
  Tags?: { [key: string]: string };

  /**
   * Required. The date and time of the configuration revision.
   */
  Created?: Date;
}

export namespace Configuration {
  export const filterSensitiveLog = (obj: Configuration): any => ({
    ...obj,
  });
}

/**
 * A list of information about the configuration.
 */
export interface ConfigurationId {
  /**
   * The revision number of the configuration.
   */
  Revision?: number;

  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   */
  Id?: string;
}

export namespace ConfigurationId {
  export const filterSensitiveLog = (obj: ConfigurationId): any => ({
    ...obj,
  });
}

export enum SanitizationWarningReason {
  DISALLOWED_ATTRIBUTE_REMOVED = "DISALLOWED_ATTRIBUTE_REMOVED",
  DISALLOWED_ELEMENT_REMOVED = "DISALLOWED_ELEMENT_REMOVED",
  INVALID_ATTRIBUTE_VALUE_REMOVED = "INVALID_ATTRIBUTE_VALUE_REMOVED",
}

/**
 * Returns information about the XML element or attribute that was sanitized in the configuration.
 */
export interface SanitizationWarning {
  /**
   * The name of the XML element that has been sanitized.
   */
  ElementName?: string;

  /**
   * The name of the XML attribute that has been sanitized.
   */
  AttributeName?: string;

  /**
   * Required. The reason for which the XML elements or attributes were sanitized.
   */
  Reason?: SanitizationWarningReason | string;
}

export namespace SanitizationWarning {
  export const filterSensitiveLog = (obj: SanitizationWarning): any => ({
    ...obj,
  });
}

/**
 * An ActiveMQ user associated with the broker.
 */
export interface User {
  /**
   * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
   */
  ConsoleAccess?: boolean;

  /**
   * Required. The password of the ActiveMQ user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas.
   */
  Password?: string;

  /**
   * Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Username?: string;

  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Groups?: string[];
}

export namespace User {
  export const filterSensitiveLog = (obj: User): any => ({
    ...obj,
  });
}

export enum ChangeType {
  CREATE = "CREATE",
  DELETE = "DELETE",
  UPDATE = "UPDATE",
}

/**
 * Returns a list of all ActiveMQ users.
 */
export interface UserSummary {
  /**
   * Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Username?: string;

  /**
   * The type of change pending for the ActiveMQ user.
   */
  PendingChange?: ChangeType | string;
}

export namespace UserSummary {
  export const filterSensitiveLog = (obj: UserSummary): any => ({
    ...obj,
  });
}

/**
 * Returns information about an error.
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  /**
   * The explanation of the error.
   */
  Message?: string;

  /**
   * The attribute which caused the error.
   */
  ErrorAttribute?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * Broker configuration information
 */
export interface Configurations {
  /**
   * The history of configurations applied to the broker.
   */
  History?: ConfigurationId[];

  /**
   * The pending configuration of the broker.
   */
  Pending?: ConfigurationId;

  /**
   * The current configuration of the broker.
   */
  Current?: ConfigurationId;
}

export namespace Configurations {
  export const filterSensitiveLog = (obj: Configurations): any => ({
    ...obj,
  });
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
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * Encryption options for the broker.
 */
export interface EncryptionOptions {
  /**
   * The symmetric customer master key (CMK) to use for the AWS Key Management Service (KMS). This key is used to encrypt your data at rest. If not provided, Amazon MQ will use a default CMK to encrypt your data.
   */
  KmsKeyId?: string;

  /**
   * Enables the use of an AWS owned CMK using AWS Key Management Service (KMS).
   */
  UseAwsOwnedKey: boolean | undefined;
}

export namespace EncryptionOptions {
  export const filterSensitiveLog = (obj: EncryptionOptions): any => ({
    ...obj,
  });
}

/**
 * The metadata of the LDAP server used to authenticate and authorize connections to the broker.
 */
export interface LdapServerMetadataInput {
  /**
   * Specifies the LDAP attribute that identifies the group name attribute in the object returned from the group membership query.
   */
  RoleName?: string;

  /**
   * The directory search scope for the role. If set to true, scope is to search the entire sub-tree.
   */
  RoleSearchSubtree?: boolean;

  /**
   * Fully qualified domain name of the LDAP server. Optional failover server.
   */
  Hosts?: string[];

  /**
   * The directory search scope for the user. If set to true, scope is to search the entire sub-tree.
   */
  UserSearchSubtree?: boolean;

  /**
   * The search criteria for users.
   */
  UserSearchMatching?: string;

  /**
   * Service account password.
   */
  ServiceAccountPassword?: string;

  /**
   * Fully qualified name of the directory to search for a user’s groups.
   */
  RoleBase?: string;

  /**
   * Fully qualified name of the directory where you want to search for users.
   */
  UserBase?: string;

  /**
   * Service account username.
   */
  ServiceAccountUsername?: string;

  /**
   * Specifies the name of the LDAP attribute for the user group membership.
   */
  UserRoleName?: string;

  /**
   * The search criteria for groups.
   */
  RoleSearchMatching?: string;
}

export namespace LdapServerMetadataInput {
  export const filterSensitiveLog = (obj: LdapServerMetadataInput): any => ({
    ...obj,
  });
}

/**
 * The list of information about logs to be enabled for the specified broker.
 */
export interface Logs {
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
  export const filterSensitiveLog = (obj: Logs): any => ({
    ...obj,
  });
}

export enum DayOfWeek {
  FRIDAY = "FRIDAY",
  MONDAY = "MONDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
  THURSDAY = "THURSDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
}

/**
 * The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.
 */
export interface WeeklyStartTime {
  /**
   * Required. The time, in 24-hour format.
   */
  TimeOfDay?: string;

  /**
   * The time zone, UTC by default, in either the Country/City format, or the UTC offset format.
   */
  TimeZone?: string;

  /**
   * Required. The day of the week.
   */
  DayOfWeek?: DayOfWeek | string;
}

export namespace WeeklyStartTime {
  export const filterSensitiveLog = (obj: WeeklyStartTime): any => ({
    ...obj,
  });
}

/**
 * Creates a broker using the specified properties.
 */
export interface CreateBrokerRequest {
  /**
   * Enables Amazon CloudWatch logging for brokers.
   */
  Logs?: Logs;

  /**
   * Encryption options for the broker.
   */
  EncryptionOptions?: EncryptionOptions;

  /**
   * The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action. Note: We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency.
   */
  CreatorRequestId?: string;

  /**
   * The metadata of the LDAP server used to authenticate and authorize connections to the broker.
   */
  LdapServerMetadata?: LdapServerMetadataInput;

  /**
   * The parameters that determine the WeeklyStartTime.
   */
  MaintenanceWindowStartTime?: WeeklyStartTime;

  /**
   * Create tags when creating the broker.
   */
  Tags?: { [key: string]: string };

  /**
   * Required. The deployment mode of the broker.
   */
  DeploymentMode?: DeploymentMode | string;

  /**
   * Required. The broker's instance type.
   */
  HostInstanceType?: string;

  /**
   * The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.
   */
  SecurityGroups?: string[];

  /**
   * The broker's storage type.
   */
  StorageType?: BrokerStorageType | string;

  /**
   * The authentication strategy used to secure the broker.
   */
  AuthenticationStrategy?: AuthenticationStrategy | string;

  /**
   * Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  EngineVersion?: string;

  /**
   * Required. The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
   */
  BrokerName?: string;

  /**
   * The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment requires two subnets.
   */
  SubnetIds?: string[];

  /**
   * Required. The list of ActiveMQ users (persons or applications) who can access queues and topics. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Users?: User[];

  /**
   * Required. Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot.
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
   */
  EngineType?: EngineType | string;

  /**
   * Required. Enables connections from applications outside of the VPC that hosts the broker's subnets.
   */
  PubliclyAccessible?: boolean;

  /**
   * A list of information about the configuration.
   */
  Configuration?: ConfigurationId;
}

export namespace CreateBrokerRequest {
  export const filterSensitiveLog = (obj: CreateBrokerRequest): any => ({
    ...obj,
  });
}

export interface CreateBrokerResponse {
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
  export const filterSensitiveLog = (obj: CreateBrokerResponse): any => ({
    ...obj,
  });
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
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
}

/**
 * Returns information about an error.
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  /**
   * The explanation of the error.
   */
  Message?: string;

  /**
   * The attribute which caused the error.
   */
  ErrorAttribute?: string;
}

export namespace InternalServerErrorException {
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
}

/**
 * Returns information about an error.
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  /**
   * The explanation of the error.
   */
  Message?: string;

  /**
   * The attribute which caused the error.
   */
  ErrorAttribute?: string;
}

export namespace UnauthorizedException {
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj,
  });
}

/**
 * Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).
 */
export interface CreateConfigurationRequest {
  /**
   * Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  EngineVersion?: string;

  /**
   * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
   */
  EngineType?: EngineType | string;

  /**
   * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
   */
  Name?: string;

  /**
   * Create tags when creating the configuration.
   */
  Tags?: { [key: string]: string };

  /**
   * The authentication strategy associated with the configuration.
   */
  AuthenticationStrategy?: AuthenticationStrategy | string;
}

export namespace CreateConfigurationRequest {
  export const filterSensitiveLog = (obj: CreateConfigurationRequest): any => ({
    ...obj,
  });
}

export interface CreateConfigurationResponse {
  /**
   * The authentication strategy associated with the configuration.
   */
  AuthenticationStrategy?: AuthenticationStrategy | string;

  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   */
  Id?: string;

  /**
   * Required. The date and time of the configuration.
   */
  Created?: Date;

  /**
   * Required. The Amazon Resource Name (ARN) of the configuration.
   */
  Arn?: string;

  /**
   * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
   */
  Name?: string;

  /**
   * The latest revision of the configuration.
   */
  LatestRevision?: ConfigurationRevision;
}

export namespace CreateConfigurationResponse {
  export const filterSensitiveLog = (obj: CreateConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * A map of the key-value pairs for the resource tag.
 */
export interface CreateTagsRequest {
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
  export const filterSensitiveLog = (obj: CreateTagsRequest): any => ({
    ...obj,
  });
}

/**
 * Returns information about an error.
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  /**
   * The explanation of the error.
   */
  Message?: string;

  /**
   * The attribute which caused the error.
   */
  ErrorAttribute?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * Creates a new ActiveMQ user.
 */
export interface CreateUserRequest {
  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Groups?: string[];

  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId: string | undefined;

  /**
   * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
   */
  ConsoleAccess?: boolean;

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
  export const filterSensitiveLog = (obj: CreateUserRequest): any => ({
    ...obj,
  });
}

export interface CreateUserResponse {}

export namespace CreateUserResponse {
  export const filterSensitiveLog = (obj: CreateUserResponse): any => ({
    ...obj,
  });
}

export interface DeleteBrokerRequest {
  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId: string | undefined;
}

export namespace DeleteBrokerRequest {
  export const filterSensitiveLog = (obj: DeleteBrokerRequest): any => ({
    ...obj,
  });
}

export interface DeleteBrokerResponse {
  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId?: string;
}

export namespace DeleteBrokerResponse {
  export const filterSensitiveLog = (obj: DeleteBrokerResponse): any => ({
    ...obj,
  });
}

export interface DeleteTagsRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource tag.
   */
  ResourceArn: string | undefined;

  /**
   * An array of tag keys to delete
   */
  TagKeys: string[] | undefined;
}

export namespace DeleteTagsRequest {
  export const filterSensitiveLog = (obj: DeleteTagsRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserRequest {
  /**
   * The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Username: string | undefined;

  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId: string | undefined;
}

export namespace DeleteUserRequest {
  export const filterSensitiveLog = (obj: DeleteUserRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserResponse {}

export namespace DeleteUserResponse {
  export const filterSensitiveLog = (obj: DeleteUserResponse): any => ({
    ...obj,
  });
}

export interface DescribeBrokerRequest {
  /**
   * The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
   */
  BrokerId: string | undefined;
}

export namespace DescribeBrokerRequest {
  export const filterSensitiveLog = (obj: DescribeBrokerRequest): any => ({
    ...obj,
  });
}

/**
 * The metadata of the LDAP server used to authenticate and authorize connections to the broker.
 */
export interface LdapServerMetadataOutput {
  /**
   * The search criteria for groups.
   */
  RoleSearchMatching?: string;

  /**
   * Fully qualified name of the directory to search for a user’s groups.
   */
  RoleBase?: string;

  /**
   * Fully qualified domain name of the LDAP server. Optional failover server.
   */
  Hosts?: string[];

  /**
   * Specifies the LDAP attribute that identifies the group name attribute in the object returned from the group membership query.
   */
  RoleName?: string;

  /**
   * The search criteria for users.
   */
  UserSearchMatching?: string;

  /**
   * The directory search scope for the user. If set to true, scope is to search the entire sub-tree.
   */
  UserSearchSubtree?: boolean;

  /**
   * Service account username.
   */
  ServiceAccountUsername?: string;

  /**
   * The directory search scope for the role. If set to true, scope is to search the entire sub-tree.
   */
  RoleSearchSubtree?: boolean;

  /**
   * Specifies the name of the LDAP attribute for the user group membership.
   */
  UserRoleName?: string;

  /**
   * Fully qualified name of the directory where you want to search for users.
   */
  UserBase?: string;
}

export namespace LdapServerMetadataOutput {
  export const filterSensitiveLog = (obj: LdapServerMetadataOutput): any => ({
    ...obj,
  });
}

/**
 * The list of information about logs to be enabled for the specified broker.
 */
export interface PendingLogs {
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
  export const filterSensitiveLog = (obj: PendingLogs): any => ({
    ...obj,
  });
}

/**
 * The list of information about logs currently enabled and pending to be deployed for the specified broker.
 */
export interface LogsSummary {
  /**
   * The list of information about logs pending to be deployed for the specified broker.
   */
  Pending?: PendingLogs;

  /**
   * The location of the CloudWatch Logs log group where general logs are sent.
   */
  GeneralLogGroup?: string;

  /**
   * Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged.
   */
  Audit?: boolean;

  /**
   * Enables general logging.
   */
  General?: boolean;

  /**
   * The location of the CloudWatch Logs log group where audit logs are sent.
   */
  AuditLogGroup?: string;
}

export namespace LogsSummary {
  export const filterSensitiveLog = (obj: LogsSummary): any => ({
    ...obj,
  });
}

export interface DescribeBrokerResponse {
  /**
   * The Amazon Resource Name (ARN) of the broker.
   */
  BrokerArn?: string;

  /**
   * The metadata of the LDAP server that will be used to authenticate and authorize connections to the broker once it is rebooted.
   */
  PendingLdapServerMetadata?: LdapServerMetadataOutput;

  /**
   * The list of all tags associated with this broker.
   */
  Tags?: { [key: string]: string };

  /**
   * Required. Enables connections from applications outside of the VPC that hosts the broker's subnets.
   */
  PubliclyAccessible?: boolean;

  /**
   * The list of all ActiveMQ usernames for the specified broker.
   */
  Users?: UserSummary[];

  /**
   * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
   */
  EngineType?: EngineType | string;

  /**
   * Encryption options for the broker.
   */
  EncryptionOptions?: EncryptionOptions;

  /**
   * The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.
   */
  SecurityGroups?: string[];

  /**
   * A list of information about allocated brokers.
   */
  BrokerInstances?: BrokerInstance[];

  /**
   * The broker's instance type.
   */
  HostInstanceType?: string;

  /**
   * The version of the broker engine to upgrade to. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  PendingEngineVersion?: string;

  /**
   * The list of pending security groups to authorize connections to brokers.
   */
  PendingSecurityGroups?: string[];

  /**
   * The time when the broker was created.
   */
  Created?: Date;

  /**
   * The list of all revisions for the specified configuration.
   */
  Configurations?: Configurations;

  /**
   * The authentication strategy used to secure the broker.
   */
  AuthenticationStrategy?: AuthenticationStrategy | string;

  /**
   * Required. The deployment mode of the broker.
   */
  DeploymentMode?: DeploymentMode | string;

  /**
   * Required. Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot.
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * The list of information about logs currently enabled and pending to be deployed for the specified broker.
   */
  Logs?: LogsSummary;

  /**
   * The parameters that determine the WeeklyStartTime.
   */
  MaintenanceWindowStartTime?: WeeklyStartTime;

  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId?: string;

  /**
   * The host instance type of the broker to upgrade to. For a list of supported instance types, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide//broker.html#broker-instance-types
   */
  PendingHostInstanceType?: string;

  /**
   * The metadata of the LDAP server used to authenticate and authorize connections to the broker.
   */
  LdapServerMetadata?: LdapServerMetadataOutput;

  /**
   * The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  EngineVersion?: string;

  /**
   * The broker's storage type.
   */
  StorageType?: BrokerStorageType | string;

  /**
   * The authentication strategy that will be applied when the broker is rebooted.
   */
  PendingAuthenticationStrategy?: AuthenticationStrategy | string;

  /**
   * The status of the broker.
   */
  BrokerState?: BrokerState | string;

  /**
   * The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
   */
  BrokerName?: string;

  /**
   * The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment requires two subnets.
   */
  SubnetIds?: string[];
}

export namespace DescribeBrokerResponse {
  export const filterSensitiveLog = (obj: DescribeBrokerResponse): any => ({
    ...obj,
  });
}

export interface DescribeBrokerEngineTypesRequest {
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
  export const filterSensitiveLog = (obj: DescribeBrokerEngineTypesRequest): any => ({
    ...obj,
  });
}

export interface DescribeBrokerEngineTypesResponse {
  /**
   * Required. The maximum number of engine types that can be returned per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;

  /**
   * List of available engine types and versions.
   */
  BrokerEngineTypes?: BrokerEngineType[];

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;
}

export namespace DescribeBrokerEngineTypesResponse {
  export const filterSensitiveLog = (obj: DescribeBrokerEngineTypesResponse): any => ({
    ...obj,
  });
}

export interface DescribeBrokerInstanceOptionsRequest {
  /**
   * Filter response by storage type.
   */
  StorageType?: string;

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
}

export namespace DescribeBrokerInstanceOptionsRequest {
  export const filterSensitiveLog = (obj: DescribeBrokerInstanceOptionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeBrokerInstanceOptionsResponse {
  /**
   * List of available broker instance options.
   */
  BrokerInstanceOptions?: BrokerInstanceOption[];

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;

  /**
   * Required. The maximum number of instance options that can be returned per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;
}

export namespace DescribeBrokerInstanceOptionsResponse {
  export const filterSensitiveLog = (obj: DescribeBrokerInstanceOptionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeConfigurationRequest {
  /**
   * The unique ID that Amazon MQ generates for the configuration.
   */
  ConfigurationId: string | undefined;
}

export namespace DescribeConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribeConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DescribeConfigurationResponse {
  /**
   * Required. The date and time of the configuration revision.
   */
  Created?: Date;

  /**
   * The list of all tags associated with this configuration.
   */
  Tags?: { [key: string]: string };

  /**
   * Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  EngineVersion?: string;

  /**
   * Required. The description of the configuration.
   */
  Description?: string;

  /**
   * Required. The latest revision of the configuration.
   */
  LatestRevision?: ConfigurationRevision;

  /**
   * The authentication strategy associated with the configuration.
   */
  AuthenticationStrategy?: AuthenticationStrategy | string;

  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   */
  Id?: string;

  /**
   * Required. The ARN of the configuration.
   */
  Arn?: string;

  /**
   * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
   */
  EngineType?: EngineType | string;

  /**
   * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
   */
  Name?: string;
}

export namespace DescribeConfigurationResponse {
  export const filterSensitiveLog = (obj: DescribeConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DescribeConfigurationRevisionRequest {
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
  export const filterSensitiveLog = (obj: DescribeConfigurationRevisionRequest): any => ({
    ...obj,
  });
}

export interface DescribeConfigurationRevisionResponse {
  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   */
  ConfigurationId?: string;

  /**
   * Required. The date and time of the configuration.
   */
  Created?: Date;

  /**
   * The description of the configuration.
   */
  Description?: string;

  /**
   * Required. The base64-encoded XML configuration.
   */
  Data?: string;
}

export namespace DescribeConfigurationRevisionResponse {
  export const filterSensitiveLog = (obj: DescribeConfigurationRevisionResponse): any => ({
    ...obj,
  });
}

export interface DescribeUserRequest {
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
  export const filterSensitiveLog = (obj: DescribeUserRequest): any => ({
    ...obj,
  });
}

/**
 * Returns information about the status of the changes pending for the ActiveMQ user.
 */
export interface UserPendingChanges {
  /**
   * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
   */
  ConsoleAccess?: boolean;

  /**
   * Required. The type of change pending for the ActiveMQ user.
   */
  PendingChange?: ChangeType | string;

  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Groups?: string[];
}

export namespace UserPendingChanges {
  export const filterSensitiveLog = (obj: UserPendingChanges): any => ({
    ...obj,
  });
}

export interface DescribeUserResponse {
  /**
   * Required. The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId?: string;

  /**
   * The status of the changes pending for the ActiveMQ user.
   */
  Pending?: UserPendingChanges;

  /**
   * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
   */
  ConsoleAccess?: boolean;

  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Groups?: string[];

  /**
   * Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Username?: string;
}

export namespace DescribeUserResponse {
  export const filterSensitiveLog = (obj: DescribeUserResponse): any => ({
    ...obj,
  });
}

export interface ListBrokersRequest {
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
  export const filterSensitiveLog = (obj: ListBrokersRequest): any => ({
    ...obj,
  });
}

export interface ListBrokersResponse {
  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;

  /**
   * A list of information about all brokers.
   */
  BrokerSummaries?: BrokerSummary[];
}

export namespace ListBrokersResponse {
  export const filterSensitiveLog = (obj: ListBrokersResponse): any => ({
    ...obj,
  });
}

export interface ListConfigurationRevisionsRequest {
  /**
   * The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;

  /**
   * The unique ID that Amazon MQ generates for the configuration.
   */
  ConfigurationId: string | undefined;
}

export namespace ListConfigurationRevisionsRequest {
  export const filterSensitiveLog = (obj: ListConfigurationRevisionsRequest): any => ({
    ...obj,
  });
}

export interface ListConfigurationRevisionsResponse {
  /**
   * The unique ID that Amazon MQ generates for the configuration.
   */
  ConfigurationId?: string;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;

  /**
   * The list of all revisions for the specified configuration.
   */
  Revisions?: ConfigurationRevision[];

  /**
   * The maximum number of configuration revisions that can be returned per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;
}

export namespace ListConfigurationRevisionsResponse {
  export const filterSensitiveLog = (obj: ListConfigurationRevisionsResponse): any => ({
    ...obj,
  });
}

export interface ListConfigurationsRequest {
  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;

  /**
   * The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;
}

export namespace ListConfigurationsRequest {
  export const filterSensitiveLog = (obj: ListConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface ListConfigurationsResponse {
  /**
   * The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;

  /**
   * The list of all revisions for the specified configuration.
   */
  Configurations?: Configuration[];
}

export namespace ListConfigurationsResponse {
  export const filterSensitiveLog = (obj: ListConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource tag.
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsRequest {
  export const filterSensitiveLog = (obj: ListTagsRequest): any => ({
    ...obj,
  });
}

export interface ListTagsResponse {
  /**
   * The key-value pair for the resource tag.
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsResponse {
  export const filterSensitiveLog = (obj: ListTagsResponse): any => ({
    ...obj,
  });
}

export interface ListUsersRequest {
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
  export const filterSensitiveLog = (obj: ListUsersRequest): any => ({
    ...obj,
  });
}

export interface ListUsersResponse {
  /**
   * Required. The list of all ActiveMQ usernames for the specified broker.
   */
  Users?: UserSummary[];

  /**
   * Required. The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId?: string;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   */
  NextToken?: string;

  /**
   * Required. The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100.
   */
  MaxResults?: number;
}

export namespace ListUsersResponse {
  export const filterSensitiveLog = (obj: ListUsersResponse): any => ({
    ...obj,
  });
}

export interface RebootBrokerRequest {
  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId: string | undefined;
}

export namespace RebootBrokerRequest {
  export const filterSensitiveLog = (obj: RebootBrokerRequest): any => ({
    ...obj,
  });
}

export interface RebootBrokerResponse {}

export namespace RebootBrokerResponse {
  export const filterSensitiveLog = (obj: RebootBrokerResponse): any => ({
    ...obj,
  });
}

/**
 * Updates the broker using the specified properties.
 */
export interface UpdateBrokerRequest {
  /**
   * The authentication strategy used to secure the broker.
   */
  AuthenticationStrategy?: AuthenticationStrategy | string;

  /**
   * The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.
   */
  SecurityGroups?: string[];

  /**
   * The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  EngineVersion?: string;

  /**
   * Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot.
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * A list of information about the configuration.
   */
  Configuration?: ConfigurationId;

  /**
   * The metadata of the LDAP server used to authenticate and authorize connections to the broker.
   */
  LdapServerMetadata?: LdapServerMetadataInput;

  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId: string | undefined;

  /**
   * Enables Amazon CloudWatch logging for brokers.
   */
  Logs?: Logs;

  /**
   * The host instance type of the broker to upgrade to. For a list of supported instance types, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide//broker.html#broker-instance-types
   */
  HostInstanceType?: string;
}

export namespace UpdateBrokerRequest {
  export const filterSensitiveLog = (obj: UpdateBrokerRequest): any => ({
    ...obj,
  });
}

export interface UpdateBrokerResponse {
  /**
   * Required. The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId?: string;

  /**
   * The metadata of the LDAP server used to authenticate and authorize connections to the broker.
   */
  LdapServerMetadata?: LdapServerMetadataOutput;

  /**
   * The ID of the updated configuration.
   */
  Configuration?: ConfigurationId;

  /**
   * The authentication strategy used to secure the broker.
   */
  AuthenticationStrategy?: AuthenticationStrategy | string;

  /**
   * The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.
   */
  SecurityGroups?: string[];

  /**
   * The version of the broker engine to upgrade to. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  EngineVersion?: string;

  /**
   * The new value of automatic upgrades to new minor version for brokers.
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * The host instance type of the broker to upgrade to. For a list of supported instance types, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide//broker.html#broker-instance-types
   */
  HostInstanceType?: string;

  /**
   * The list of information about logs to be enabled for the specified broker.
   */
  Logs?: Logs;
}

export namespace UpdateBrokerResponse {
  export const filterSensitiveLog = (obj: UpdateBrokerResponse): any => ({
    ...obj,
  });
}

/**
 * Updates the specified configuration.
 */
export interface UpdateConfigurationRequest {
  /**
   * The description of the configuration.
   */
  Description?: string;

  /**
   * The unique ID that Amazon MQ generates for the configuration.
   */
  ConfigurationId: string | undefined;

  /**
   * Required. The base64-encoded XML configuration.
   */
  Data?: string;
}

export namespace UpdateConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateConfigurationResponse {
  /**
   * The latest revision of the configuration.
   */
  LatestRevision?: ConfigurationRevision;

  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   */
  Id?: string;

  /**
   * Required. The Amazon Resource Name (ARN) of the configuration.
   */
  Arn?: string;

  /**
   * The list of the first 20 warnings about the configuration XML elements or attributes that were sanitized.
   */
  Warnings?: SanitizationWarning[];

  /**
   * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
   */
  Name?: string;

  /**
   * Required. The date and time of the configuration.
   */
  Created?: Date;
}

export namespace UpdateConfigurationResponse {
  export const filterSensitiveLog = (obj: UpdateConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * Updates the information for an ActiveMQ user.
 */
export interface UpdateUserRequest {
  /**
   * The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas.
   */
  Password?: string;

  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId: string | undefined;

  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Groups?: string[];

  /**
   * Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Username: string | undefined;

  /**
   * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
   */
  ConsoleAccess?: boolean;
}

export namespace UpdateUserRequest {
  export const filterSensitiveLog = (obj: UpdateUserRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserResponse {}

export namespace UpdateUserResponse {
  export const filterSensitiveLog = (obj: UpdateUserResponse): any => ({
    ...obj,
  });
}
