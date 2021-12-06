import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Name of the availability zone.</p>
 */
export interface AvailabilityZone {
  /**
   * <p>Id for the availability zone.</p>
   */
  Name?: string;
}

export namespace AvailabilityZone {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AvailabilityZone): any => ({
    ...obj,
  });
}

export enum EngineType {
  ACTIVEMQ = "ACTIVEMQ",
  RABBITMQ = "RABBITMQ",
}

/**
 * <p>Id of the engine version.</p>
 */
export interface EngineVersion {
  /**
   * <p>Id for the version.</p>
   */
  Name?: string;
}

export namespace EngineVersion {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EngineVersion): any => ({
    ...obj,
  });
}

/**
 * <p>Types of broker engines.</p>
 */
export interface BrokerEngineType {
  /**
   * <p>The broker's engine type.</p>
   */
  EngineType?: EngineType | string;

  /**
   * <p>The list of engine versions.</p>
   */
  EngineVersions?: EngineVersion[];
}

export namespace BrokerEngineType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BrokerEngineType): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about all brokers.</p>
 */
export interface BrokerInstance {
  /**
   * <p>The brokers web console URL.</p>
   */
  ConsoleURL?: string;

  /**
   * <p>The broker's wire-level protocol endpoints.</p>
   */
  Endpoints?: string[];

  /**
   * <p>The IP address of the Elastic Network Interface (ENI) attached to the broker. Does not apply to RabbitMQ brokers.</p>
   */
  IpAddress?: string;
}

export namespace BrokerInstance {
  /**
   * @internal
   */
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
  CLUSTER_MULTI_AZ = "CLUSTER_MULTI_AZ",
  SINGLE_INSTANCE = "SINGLE_INSTANCE",
}

/**
 * <p>Option for host instance type.</p>
 */
export interface BrokerInstanceOption {
  /**
   * <p>The list of available az.</p>
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * <p>The broker's engine type.</p>
   */
  EngineType?: EngineType | string;

  /**
   * <p>The broker's instance type.</p>
   */
  HostInstanceType?: string;

  /**
   * <p>The broker's storage type.</p>
   */
  StorageType?: BrokerStorageType | string;

  /**
   * <p>The list of supported deployment modes.</p>
   */
  SupportedDeploymentModes?: (DeploymentMode | string)[];

  /**
   * <p>The list of supported engine versions.</p>
   */
  SupportedEngineVersions?: string[];
}

export namespace BrokerInstanceOption {
  /**
   * @internal
   */
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
 * <p>Returns information about all brokers.</p>
 */
export interface BrokerSummary {
  /**
   * <p>The broker's Amazon Resource Name (ARN).</p>
   */
  BrokerArn?: string;

  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId?: string;

  /**
   * <p>The broker's name. This value is unique in your AWS account, 1-50 characters long, and containing only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.</p>
   */
  BrokerName?: string;

  /**
   * <p>The broker's status.</p>
   */
  BrokerState?: BrokerState | string;

  /**
   * <p>The time when the broker was created.</p>
   */
  Created?: Date;

  /**
   * <p>The broker's deployment mode.</p>
   */
  DeploymentMode: DeploymentMode | string | undefined;

  /**
   * <p>The type of broker engine.</p>
   */
  EngineType: EngineType | string | undefined;

  /**
   * <p>The broker's instance type.</p>
   */
  HostInstanceType?: string;
}

export namespace BrokerSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BrokerSummary): any => ({
    ...obj,
  });
}

export enum AuthenticationStrategy {
  LDAP = "LDAP",
  SIMPLE = "SIMPLE",
}

/**
 * <p>Returns information about the specified configuration revision.</p>
 */
export interface ConfigurationRevision {
  /**
   * <p>Required. The date and time of the configuration revision.</p>
   */
  Created: Date | undefined;

  /**
   * <p>The description of the configuration revision.</p>
   */
  Description?: string;

  /**
   * <p>Required. The revision number of the configuration.</p>
   */
  Revision: number | undefined;
}

export namespace ConfigurationRevision {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigurationRevision): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about all configurations.</p>
 */
export interface Configuration {
  /**
   * <p>Required. The ARN of the configuration.</p>
   */
  Arn: string | undefined;

  /**
   * <p>Optional. The authentication strategy associated with the configuration. The default is SIMPLE.</p>
   */
  AuthenticationStrategy: AuthenticationStrategy | string | undefined;

  /**
   * <p>Required. The date and time of the configuration revision.</p>
   */
  Created: Date | undefined;

  /**
   * <p>Required. The description of the configuration.</p>
   */
  Description: string | undefined;

  /**
   * <p>Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.</p>
   */
  EngineType: EngineType | string | undefined;

  /**
   * <p>Required. The broker engine's version. For a list of supported engine versions, see, <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.</p>
   */
  EngineVersion: string | undefined;

  /**
   * <p>Required. The unique ID that Amazon MQ generates for the configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>Required. The latest revision of the configuration.</p>
   */
  LatestRevision: ConfigurationRevision | undefined;

  /**
   * <p>Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.</p>
   */
  Name: string | undefined;

  /**
   * <p>The list of all tags associated with this configuration.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace Configuration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Configuration): any => ({
    ...obj,
  });
}

/**
 * <p>A list of information about the configuration.</p> <important><p>Does not apply to RabbitMQ brokers.</p></important>
 */
export interface ConfigurationId {
  /**
   * <p>Required. The unique ID that Amazon MQ generates for the configuration.</p>
   */
  Id: string | undefined;

  /**
   * <p>The revision number of the configuration.</p>
   */
  Revision?: number;
}

export namespace ConfigurationId {
  /**
   * @internal
   */
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
 * <p>Returns information about the XML element or attribute that was sanitized in the configuration.</p>
 */
export interface SanitizationWarning {
  /**
   * <p>The name of the XML attribute that has been sanitized.</p>
   */
  AttributeName?: string;

  /**
   * <p>The name of the XML element that has been sanitized.</p>
   */
  ElementName?: string;

  /**
   * <p>Required. The reason for which the XML elements or attributes were sanitized.</p>
   */
  Reason: SanitizationWarningReason | string | undefined;
}

export namespace SanitizationWarning {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SanitizationWarning): any => ({
    ...obj,
  });
}

/**
 * <p>A user associated with the broker. For RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created by making RabbitMQ API calls directly to brokers or via the RabbitMQ web console.</p>
 */
export interface User {
  /**
   * <p>Enables access to the ActiveMQ Web Console for the ActiveMQ user. Does not apply to RabbitMQ brokers.</p>
   */
  ConsoleAccess?: boolean;

  /**
   * <p>The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long. Does not apply to RabbitMQ brokers.</p>
   */
  Groups?: string[];

  /**
   * <p>Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).</p>
   */
  Password: string | undefined;

  /**
   * <p>important><title>Amazon MQ for ActiveMQ</title> <para>For ActiveMQ brokers, this value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>/important> <important><title>Amazon MQ for RabbitMQ</title> <p>For RabbitMQ brokers, this value can contain only alphanumeric characters, dashes, periods, underscores (- . _). This value must not contain a tilde (~) character. Amazon MQ prohibts using guest as a valid usename. This value must be 2-100 characters long.</p></important></para>
   */
  Username: string | undefined;
}

export namespace User {
  /**
   * @internal
   */
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
 * <p>Returns a list of all broker users. Does not apply to RabbitMQ brokers.</p>
 */
export interface UserSummary {
  /**
   * <p>The type of change pending for the broker user.</p>
   */
  PendingChange?: ChangeType | string;

  /**
   * <p>Required. The username of the broker user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Username: string | undefined;
}

export namespace UserSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an error.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  /**
   * <p>The attribute which caused the error.</p>
   */
  ErrorAttribute?: string;

  /**
   * <p>The explanation of the error.</p>
   */
  Message?: string;
}

export namespace BadRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>Broker configuration information</p>
 */
export interface Configurations {
  /**
   * <p>The broker's current configuration.</p>
   */
  Current?: ConfigurationId;

  /**
   * <p>The history of configurations applied to the broker.</p>
   */
  History?: ConfigurationId[];

  /**
   * <p>The broker's pending configuration.</p>
   */
  Pending?: ConfigurationId;
}

export namespace Configurations {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Configurations): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an error.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>The attribute which caused the error.</p>
   */
  ErrorAttribute?: string;

  /**
   * <p>The explanation of the error.</p>
   */
  Message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <important><p>Does not apply to RabbitMQ brokers.</p></important> <p>Encryption options for the broker.</p>
 */
export interface EncryptionOptions {
  /**
   * <p>The customer master key (CMK) to use for the AWS Key Management Service (KMS). This key is used to encrypt your data at rest. If not provided, Amazon MQ will use a default CMK to encrypt your data.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>Enables the use of an AWS owned CMK using AWS Key Management Service (KMS). Set to true by default, if no value is provided, for example, for RabbitMQ brokers.</p>
   */
  UseAwsOwnedKey: boolean | undefined;
}

export namespace EncryptionOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptionOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.</p> <important><p>Does not apply to RabbitMQ brokers.</p></important>
 */
export interface LdapServerMetadataInput {
  /**
   * <p>Specifies the location of the LDAP server such as AWS Directory Service for Microsoft Active Directory . Optional failover server.</p>
   */
  Hosts: string[] | undefined;

  /**
   * <p>The distinguished name of the node in the directory information tree (DIT) to search for roles or groups. For example, ou=group, ou=corp, dc=corp,
   *                   dc=example, dc=com.</p>
   */
  RoleBase: string | undefined;

  /**
   * <p>Specifies the LDAP attribute that identifies the group name attribute in the object returned from the group membership query.</p>
   */
  RoleName?: string;

  /**
   * <p>The LDAP search filter used to find roles within the roleBase. The distinguished name of the user matched by userSearchMatching is substituted into the {0} placeholder in the search filter. The client's username is substituted into the {1} placeholder. For example, if you set this option to (member=uid={1})for the user janedoe, the search filter becomes (member=uid=janedoe) after string substitution. It matches all role entries that have a member attribute equal to uid=janedoe under the subtree selected by the roleBase.</p>
   */
  RoleSearchMatching: string | undefined;

  /**
   * <p>The directory search scope for the role. If set to true, scope is to search the entire subtree.</p>
   */
  RoleSearchSubtree?: boolean;

  /**
   * <p>Service account password. A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example,
   *                   dc=com.</p>
   */
  ServiceAccountPassword: string | undefined;

  /**
   * <p>Service account username. A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example,
   *                   dc=com.</p>
   */
  ServiceAccountUsername: string | undefined;

  /**
   * <p>Select a particular subtree of the directory information tree (DIT) to search for user entries. The subtree is specified by a DN, which specifies the base node of the subtree. For example, by setting this option to ou=Users,ou=corp, dc=corp,
   *                   dc=example, dc=com, the search for user entries is restricted to the subtree beneath ou=Users, ou=corp, dc=corp, dc=example, dc=com.</p>
   */
  UserBase: string | undefined;

  /**
   * <p>Specifies the name of the LDAP attribute for the user group membership.</p>
   */
  UserRoleName?: string;

  /**
   * <p>The LDAP search filter used to find users within the userBase. The client's username is substituted into the {0} placeholder in the search filter. For example, if this option is set to (uid={0}) and the received username is janedoe, the search filter becomes (uid=janedoe) after string substitution. It will result in matching an entry like uid=janedoe, ou=Users,ou=corp, dc=corp, dc=example,
   *                   dc=com.</p>
   */
  UserSearchMatching: string | undefined;

  /**
   * <p>The directory search scope for the user. If set to true, scope is to search the entire subtree.</p>
   */
  UserSearchSubtree?: boolean;
}

export namespace LdapServerMetadataInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LdapServerMetadataInput): any => ({
    ...obj,
  });
}

/**
 * <p>The list of information about logs to be enabled for the specified broker.</p>
 */
export interface Logs {
  /**
   * <p>Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged. Does not apply to RabbitMQ brokers.</p>
   */
  Audit?: boolean;

  /**
   * <p>Enables general logging.</p>
   */
  General?: boolean;
}

export namespace Logs {
  /**
   * @internal
   */
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
 * <p>The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.</p>
 */
export interface WeeklyStartTime {
  /**
   * <p>Required. The day of the week.</p>
   */
  DayOfWeek: DayOfWeek | string | undefined;

  /**
   * <p>Required. The time, in 24-hour format.</p>
   */
  TimeOfDay: string | undefined;

  /**
   * <p>The time zone, UTC by default, in either the Country/City format, or the UTC offset format.</p>
   */
  TimeZone?: string;
}

export namespace WeeklyStartTime {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WeeklyStartTime): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a broker using the specified properties.</p>
 */
export interface CreateBrokerRequest {
  /**
   * <p>Optional. The authentication strategy used to secure the broker. The default is SIMPLE.</p>
   */
  AuthenticationStrategy?: AuthenticationStrategy | string;

  /**
   * <p>Enables automatic upgrades to new minor versions for brokers, as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot. Set to true by default, if no value is specified.</p>
   */
  AutoMinorVersionUpgrade: boolean | undefined;

  /**
   * <p>Required. The broker's name. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.</p>
   */
  BrokerName: string | undefined;

  /**
   * <p>A list of information about the configuration.</p>
   */
  Configuration?: ConfigurationId;

  /**
   * <p>The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action. Note: We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency.</p>
   */
  CreatorRequestId?: string;

  /**
   * <p>Required. The broker's deployment mode.</p>
   */
  DeploymentMode: DeploymentMode | string | undefined;

  /**
   * <p>Encryption options for the broker. Does not apply to RabbitMQ brokers.</p>
   */
  EncryptionOptions?: EncryptionOptions;

  /**
   * <p>Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.</p>
   */
  EngineType: EngineType | string | undefined;

  /**
   * <p>Required. The broker engine's version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.</p>
   */
  EngineVersion: string | undefined;

  /**
   * <p>Required. The broker's instance type.</p>
   */
  HostInstanceType: string | undefined;

  /**
   * <p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers.</p>
   */
  LdapServerMetadata?: LdapServerMetadataInput;

  /**
   * <p>Enables Amazon CloudWatch logging for brokers.</p>
   */
  Logs?: Logs;

  /**
   * <p>The parameters that determine the WeeklyStartTime.</p>
   */
  MaintenanceWindowStartTime?: WeeklyStartTime;

  /**
   * <p>Enables connections from applications outside of the VPC that hosts the broker's subnets. Set to false by default, if no value is provided.</p>
   */
  PubliclyAccessible: boolean | undefined;

  /**
   * <p>The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The broker's storage type.</p>
   */
  StorageType?: BrokerStorageType | string;

  /**
   * <p>The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones. If you specify more than one subnet, the subnets must be in different Availability Zones. Amazon MQ will not be able to create VPC endpoints for your broker with multiple subnets in the same Availability Zone. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ Amazon MQ for ActiveMQ deployment requires two subnets. A CLUSTER_MULTI_AZ Amazon MQ for RabbitMQ deployment has no subnet requirements when deployed with public accessibility. Deployment without public accessibility requires at least one subnet.</p> <important><p>If you specify subnets in a <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html">shared VPC</a> for a RabbitMQ broker, the associated VPC to which the specified subnets belong must be owned by your AWS account. Amazon MQ will not be able to create VPC endpoints in VPCs that are not owned by your AWS account.</p></important>
   */
  SubnetIds?: string[];

  /**
   * <p>Create tags when creating the broker.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>Required. The list of broker users (persons or applications) who can access queues and topics. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p> <important><title>Amazon MQ for RabbitMQ</title> <p>When you create an Amazon MQ for RabbitMQ broker, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created by making RabbitMQ API calls directly to brokers or via the RabbitMQ web console.</p></important>
   */
  Users: User[] | undefined;
}

export namespace CreateBrokerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBrokerRequest): any => ({
    ...obj,
  });
}

export interface CreateBrokerResponse {
  /**
   * <p>The broker's Amazon Resource Name (ARN).</p>
   */
  BrokerArn?: string;

  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId?: string;
}

export namespace CreateBrokerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBrokerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an error.</p>
 */
export interface ForbiddenException extends __SmithyException, $MetadataBearer {
  name: "ForbiddenException";
  $fault: "client";
  /**
   * <p>The attribute which caused the error.</p>
   */
  ErrorAttribute?: string;

  /**
   * <p>The explanation of the error.</p>
   */
  Message?: string;
}

export namespace ForbiddenException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ForbiddenException): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an error.</p>
 */
export interface InternalServerErrorException extends __SmithyException, $MetadataBearer {
  name: "InternalServerErrorException";
  $fault: "server";
  /**
   * <p>The attribute which caused the error.</p>
   */
  ErrorAttribute?: string;

  /**
   * <p>The explanation of the error.</p>
   */
  Message?: string;
}

export namespace InternalServerErrorException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerErrorException): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an error.</p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  /**
   * <p>The attribute which caused the error.</p>
   */
  ErrorAttribute?: string;

  /**
   * <p>The explanation of the error.</p>
   */
  Message?: string;
}

export namespace UnauthorizedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).</p>
 */
export interface CreateConfigurationRequest {
  /**
   * <p>Optional. The authentication strategy associated with the configuration. The default is SIMPLE.</p>
   */
  AuthenticationStrategy?: AuthenticationStrategy | string;

  /**
   * <p>Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.</p>
   */
  EngineType: EngineType | string | undefined;

  /**
   * <p>Required. The broker engine's version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.</p>
   */
  EngineVersion: string | undefined;

  /**
   * <p>Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.</p>
   */
  Name: string | undefined;

  /**
   * <p>Create tags when creating the configuration.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConfigurationRequest): any => ({
    ...obj,
  });
}

export interface CreateConfigurationResponse {
  /**
   * <p>Required. The Amazon Resource Name (ARN) of the configuration.</p>
   */
  Arn?: string;

  /**
   * <p>Optional. The authentication strategy associated with the configuration. The default is SIMPLE.</p>
   */
  AuthenticationStrategy?: AuthenticationStrategy | string;

  /**
   * <p>Required. The date and time of the configuration.</p>
   */
  Created?: Date;

  /**
   * <p>Required. The unique ID that Amazon MQ generates for the configuration.</p>
   */
  Id?: string;

  /**
   * <p>The latest revision of the configuration.</p>
   */
  LatestRevision?: ConfigurationRevision;

  /**
   * <p>Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.</p>
   */
  Name?: string;
}

export namespace CreateConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A map of the key-value pairs for the resource tag.</p>
 */
export interface CreateTagsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key-value pair for the resource tag.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateTagsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about an error.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  /**
   * <p>The attribute which caused the error.</p>
   */
  ErrorAttribute?: string;

  /**
   * <p>The explanation of the error.</p>
   */
  Message?: string;
}

export namespace NotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Creates a new ActiveMQ user.</p>
 */
export interface CreateUserRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId: string | undefined;

  /**
   * <p>Enables access to the ActiveMQ Web Console for the ActiveMQ user.</p>
   */
  ConsoleAccess?: boolean;

  /**
   * <p>The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Groups?: string[];

  /**
   * <p>Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).</p>
   */
  Password: string | undefined;

  /**
   * <p>The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Username: string | undefined;
}

export namespace CreateUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserRequest): any => ({
    ...obj,
  });
}

export interface CreateUserResponse {}

export namespace CreateUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUserResponse): any => ({
    ...obj,
  });
}

export interface DeleteBrokerRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId: string | undefined;
}

export namespace DeleteBrokerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBrokerRequest): any => ({
    ...obj,
  });
}

export interface DeleteBrokerResponse {
  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId?: string;
}

export namespace DeleteBrokerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBrokerResponse): any => ({
    ...obj,
  });
}

export interface DeleteTagsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array of tag keys to delete</p>
   */
  TagKeys: string[] | undefined;
}

export namespace DeleteTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTagsRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId: string | undefined;

  /**
   * <p>The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Username: string | undefined;
}

export namespace DeleteUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserResponse {}

export namespace DeleteUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserResponse): any => ({
    ...obj,
  });
}

export interface DescribeBrokerRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId: string | undefined;
}

export namespace DescribeBrokerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBrokerRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.</p>
 */
export interface LdapServerMetadataOutput {
  /**
   * <p>Specifies the location of the LDAP server such as AWS Directory Service for Microsoft Active Directory . Optional failover server.</p>
   */
  Hosts: string[] | undefined;

  /**
   * <p>The distinguished name of the node in the directory information tree (DIT) to search for roles or groups. For example, ou=group, ou=corp, dc=corp,
   *                   dc=example, dc=com.</p>
   */
  RoleBase: string | undefined;

  /**
   * <p>Specifies the LDAP attribute that identifies the group name attribute in the object returned from the group membership query.</p>
   */
  RoleName?: string;

  /**
   * <p>The LDAP search filter used to find roles within the roleBase. The distinguished name of the user matched by userSearchMatching is substituted into the {0} placeholder in the search filter. The client's username is substituted into the {1} placeholder. For example, if you set this option to (member=uid={1})for the user janedoe, the search filter becomes (member=uid=janedoe) after string substitution. It matches all role entries that have a member attribute equal to uid=janedoe under the subtree selected by the roleBase.</p>
   */
  RoleSearchMatching: string | undefined;

  /**
   * <p>The directory search scope for the role. If set to true, scope is to search the entire subtree.</p>
   */
  RoleSearchSubtree?: boolean;

  /**
   * <p>Service account username. A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example,
   *                   dc=com.</p>
   */
  ServiceAccountUsername: string | undefined;

  /**
   * <p>Select a particular subtree of the directory information tree (DIT) to search for user entries. The subtree is specified by a DN, which specifies the base node of the subtree. For example, by setting this option to ou=Users,ou=corp, dc=corp,
   *                   dc=example, dc=com, the search for user entries is restricted to the subtree beneath ou=Users, ou=corp, dc=corp, dc=example, dc=com.</p>
   */
  UserBase: string | undefined;

  /**
   * <p>Specifies the name of the LDAP attribute for the user group membership.</p>
   */
  UserRoleName?: string;

  /**
   * <p>The LDAP search filter used to find users within the userBase. The client's username is substituted into the {0} placeholder in the search filter. For example, if this option is set to (uid={0}) and the received username is janedoe, the search filter becomes (uid=janedoe) after string substitution. It will result in matching an entry like uid=janedoe, ou=Users,ou=corp, dc=corp, dc=example,
   *                dc=com.</p>
   */
  UserSearchMatching: string | undefined;

  /**
   * <p>The directory search scope for the user. If set to true, scope is to search the entire subtree.</p>
   */
  UserSearchSubtree?: boolean;
}

export namespace LdapServerMetadataOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LdapServerMetadataOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The list of information about logs to be enabled for the specified broker.</p>
 */
export interface PendingLogs {
  /**
   * <p>Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged.</p>
   */
  Audit?: boolean;

  /**
   * <p>Enables general logging.</p>
   */
  General?: boolean;
}

export namespace PendingLogs {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PendingLogs): any => ({
    ...obj,
  });
}

/**
 * <p>The list of information about logs currently enabled and pending to be deployed for the specified broker.</p>
 */
export interface LogsSummary {
  /**
   * <p>Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged.</p>
   */
  Audit?: boolean;

  /**
   * <p>The location of the CloudWatch Logs log group where audit logs are sent.</p>
   */
  AuditLogGroup?: string;

  /**
   * <p>Enables general logging.</p>
   */
  General: boolean | undefined;

  /**
   * <p>The location of the CloudWatch Logs log group where general logs are sent.</p>
   */
  GeneralLogGroup: string | undefined;

  /**
   * <p>The list of information about logs pending to be deployed for the specified broker.</p>
   */
  Pending?: PendingLogs;
}

export namespace LogsSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LogsSummary): any => ({
    ...obj,
  });
}

export interface DescribeBrokerResponse {
  /**
   * <p>The authentication strategy used to secure the broker. The default is SIMPLE.</p>
   */
  AuthenticationStrategy?: AuthenticationStrategy | string;

  /**
   * <p>Enables automatic upgrades to new minor versions for brokers, as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The broker's Amazon Resource Name (ARN).</p>
   */
  BrokerArn?: string;

  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId?: string;

  /**
   * <p>A list of information about allocated brokers.</p>
   */
  BrokerInstances?: BrokerInstance[];

  /**
   * <p>The broker's name. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.</p>
   */
  BrokerName?: string;

  /**
   * <p>The broker's status.</p>
   */
  BrokerState?: BrokerState | string;

  /**
   * <p>The list of all revisions for the specified configuration.</p>
   */
  Configurations?: Configurations;

  /**
   * <p>The time when the broker was created.</p>
   */
  Created?: Date;

  /**
   * <p>The broker's deployment mode.</p>
   */
  DeploymentMode?: DeploymentMode | string;

  /**
   * <p>Encryption options for the broker. Does not apply to RabbitMQ brokers.</p>
   */
  EncryptionOptions?: EncryptionOptions;

  /**
   * <p>The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.</p>
   */
  EngineType?: EngineType | string;

  /**
   * <p>The broker engine's version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The broker's instance type.</p>
   */
  HostInstanceType?: string;

  /**
   * <p>The metadata of the LDAP server used to authenticate and authorize connections to the broker.</p>
   */
  LdapServerMetadata?: LdapServerMetadataOutput;

  /**
   * <p>The list of information about logs currently enabled and pending to be deployed for the specified broker.</p>
   */
  Logs?: LogsSummary;

  /**
   * <p>The parameters that determine the WeeklyStartTime.</p>
   */
  MaintenanceWindowStartTime?: WeeklyStartTime;

  /**
   * <p>The authentication strategy that will be applied when the broker is rebooted. The default is SIMPLE.</p>
   */
  PendingAuthenticationStrategy?: AuthenticationStrategy | string;

  /**
   * <p>The broker engine version to upgrade to. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.</p>
   */
  PendingEngineVersion?: string;

  /**
   * <p>The broker's host instance type to upgrade to. For a list of supported instance types, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker.html#broker-instance-types">Broker instance types</a>.</p>
   */
  PendingHostInstanceType?: string;

  /**
   * <p>The metadata of the LDAP server that will be used to authenticate and authorize connections to the broker after it is rebooted.</p>
   */
  PendingLdapServerMetadata?: LdapServerMetadataOutput;

  /**
   * <p>The list of pending security groups to authorize connections to brokers.</p>
   */
  PendingSecurityGroups?: string[];

  /**
   * <p>Enables connections from applications outside of the VPC that hosts the broker's subnets.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The broker's storage type.</p>
   */
  StorageType?: BrokerStorageType | string;

  /**
   * <p>The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The list of all tags associated with this broker.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The list of all broker usernames for the specified broker.</p>
   */
  Users?: UserSummary[];
}

export namespace DescribeBrokerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBrokerResponse): any => ({
    ...obj,
  });
}

export interface DescribeBrokerEngineTypesRequest {
  /**
   * <p>Filter response by engine type.</p>
   */
  EngineType?: string;

  /**
   * <p>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;
}

export namespace DescribeBrokerEngineTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBrokerEngineTypesRequest): any => ({
    ...obj,
  });
}

export interface DescribeBrokerEngineTypesResponse {
  /**
   * <p>List of available engine types and versions.</p>
   */
  BrokerEngineTypes?: BrokerEngineType[];

  /**
   * <p>Required. The maximum number of engine types that can be returned per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;
}

export namespace DescribeBrokerEngineTypesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBrokerEngineTypesResponse): any => ({
    ...obj,
  });
}

export interface DescribeBrokerInstanceOptionsRequest {
  /**
   * <p>Filter response by engine type.</p>
   */
  EngineType?: string;

  /**
   * <p>Filter response by host instance type.</p>
   */
  HostInstanceType?: string;

  /**
   * <p>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;

  /**
   * <p>Filter response by storage type.</p>
   */
  StorageType?: string;
}

export namespace DescribeBrokerInstanceOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBrokerInstanceOptionsRequest): any => ({
    ...obj,
  });
}

export interface DescribeBrokerInstanceOptionsResponse {
  /**
   * <p>List of available broker instance options.</p>
   */
  BrokerInstanceOptions?: BrokerInstanceOption[];

  /**
   * <p>Required. The maximum number of instance options that can be returned per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;
}

export namespace DescribeBrokerInstanceOptionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBrokerInstanceOptionsResponse): any => ({
    ...obj,
  });
}

export interface DescribeConfigurationRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the configuration.</p>
   */
  ConfigurationId: string | undefined;
}

export namespace DescribeConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DescribeConfigurationResponse {
  /**
   * <p>Required. The ARN of the configuration.</p>
   */
  Arn?: string;

  /**
   * <p>Optional. The authentication strategy associated with the configuration. The default is SIMPLE.</p>
   */
  AuthenticationStrategy?: AuthenticationStrategy | string;

  /**
   * <p>Required. The date and time of the configuration revision.</p>
   */
  Created?: Date;

  /**
   * <p>Required. The description of the configuration.</p>
   */
  Description?: string;

  /**
   * <p>Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.</p>
   */
  EngineType?: EngineType | string;

  /**
   * <p>Required. The broker engine's version. For a list of supported engine versions, see, <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.</p>
   */
  EngineVersion?: string;

  /**
   * <p>Required. The unique ID that Amazon MQ generates for the configuration.</p>
   */
  Id?: string;

  /**
   * <p>Required. The latest revision of the configuration.</p>
   */
  LatestRevision?: ConfigurationRevision;

  /**
   * <p>Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.</p>
   */
  Name?: string;

  /**
   * <p>The list of all tags associated with this configuration.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace DescribeConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DescribeConfigurationRevisionRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the configuration.</p>
   */
  ConfigurationId: string | undefined;

  /**
   * <p>The revision of the configuration.</p>
   */
  ConfigurationRevision: string | undefined;
}

export namespace DescribeConfigurationRevisionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigurationRevisionRequest): any => ({
    ...obj,
  });
}

export interface DescribeConfigurationRevisionResponse {
  /**
   * <p>Required. The unique ID that Amazon MQ generates for the configuration.</p>
   */
  ConfigurationId?: string;

  /**
   * <p>Required. The date and time of the configuration.</p>
   */
  Created?: Date;

  /**
   * <p>Required. The base64-encoded XML configuration.</p>
   */
  Data?: string;

  /**
   * <p>The description of the configuration.</p>
   */
  Description?: string;
}

export namespace DescribeConfigurationRevisionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeConfigurationRevisionResponse): any => ({
    ...obj,
  });
}

export interface DescribeUserRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId: string | undefined;

  /**
   * <p>The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Username: string | undefined;
}

export namespace DescribeUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUserRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Returns information about the status of the changes pending for the ActiveMQ user.</p>
 */
export interface UserPendingChanges {
  /**
   * <p>Enables access to the the ActiveMQ Web Console for the ActiveMQ user.</p>
   */
  ConsoleAccess?: boolean;

  /**
   * <p>The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Groups?: string[];

  /**
   * <p>Required. The type of change pending for the ActiveMQ user.</p>
   */
  PendingChange: ChangeType | string | undefined;
}

export namespace UserPendingChanges {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserPendingChanges): any => ({
    ...obj,
  });
}

export interface DescribeUserResponse {
  /**
   * <p>Required. The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId?: string;

  /**
   * <p>Enables access to the the ActiveMQ Web Console for the ActiveMQ user.</p>
   */
  ConsoleAccess?: boolean;

  /**
   * <p>The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Groups?: string[];

  /**
   * <p>The status of the changes pending for the ActiveMQ user.</p>
   */
  Pending?: UserPendingChanges;

  /**
   * <p>Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Username?: string;
}

export namespace DescribeUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeUserResponse): any => ({
    ...obj,
  });
}

export interface ListBrokersRequest {
  /**
   * <p>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;
}

export namespace ListBrokersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBrokersRequest): any => ({
    ...obj,
  });
}

export interface ListBrokersResponse {
  /**
   * <p>A list of information about all brokers.</p>
   */
  BrokerSummaries?: BrokerSummary[];

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;
}

export namespace ListBrokersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBrokersResponse): any => ({
    ...obj,
  });
}

export interface ListConfigurationRevisionsRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the configuration.</p>
   */
  ConfigurationId: string | undefined;

  /**
   * <p>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;
}

export namespace ListConfigurationRevisionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConfigurationRevisionsRequest): any => ({
    ...obj,
  });
}

export interface ListConfigurationRevisionsResponse {
  /**
   * <p>The unique ID that Amazon MQ generates for the configuration.</p>
   */
  ConfigurationId?: string;

  /**
   * <p>The maximum number of configuration revisions that can be returned per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;

  /**
   * <p>The list of all revisions for the specified configuration.</p>
   */
  Revisions?: ConfigurationRevision[];
}

export namespace ListConfigurationRevisionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConfigurationRevisionsResponse): any => ({
    ...obj,
  });
}

export interface ListConfigurationsRequest {
  /**
   * <p>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;
}

export namespace ListConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface ListConfigurationsResponse {
  /**
   * <p>The list of all revisions for the specified configuration.</p>
   */
  Configurations?: Configuration[];

  /**
   * <p>The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;
}

export namespace ListConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource tag.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsRequest): any => ({
    ...obj,
  });
}

export interface ListTagsResponse {
  /**
   * <p>The key-value pair for the resource tag.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsResponse): any => ({
    ...obj,
  });
}

export interface ListUsersRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId: string | undefined;

  /**
   * <p>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;
}

export namespace ListUsersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUsersRequest): any => ({
    ...obj,
  });
}

export interface ListUsersResponse {
  /**
   * <p>Required. The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId?: string;

  /**
   * <p>Required. The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;

  /**
   * <p>Required. The list of all ActiveMQ usernames for the specified broker. Does not apply to RabbitMQ brokers.</p>
   */
  Users?: UserSummary[];
}

export namespace ListUsersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListUsersResponse): any => ({
    ...obj,
  });
}

export interface RebootBrokerRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId: string | undefined;
}

export namespace RebootBrokerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebootBrokerRequest): any => ({
    ...obj,
  });
}

export interface RebootBrokerResponse {}

export namespace RebootBrokerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RebootBrokerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Updates the broker using the specified properties.</p>
 */
export interface UpdateBrokerRequest {
  /**
   * <p>Optional. The authentication strategy used to secure the broker. The default is SIMPLE.</p>
   */
  AuthenticationStrategy?: AuthenticationStrategy | string;

  /**
   * <p>Enables automatic upgrades to new minor versions for brokers, as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId: string | undefined;

  /**
   * <p>A list of information about the configuration.</p>
   */
  Configuration?: ConfigurationId;

  /**
   * <p>The broker engine version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The broker's host instance type to upgrade to. For a list of supported instance types, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker.html#broker-instance-types">Broker instance types</a>.</p>
   */
  HostInstanceType?: string;

  /**
   * <p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers.</p>
   */
  LdapServerMetadata?: LdapServerMetadataInput;

  /**
   * <p>Enables Amazon CloudWatch logging for brokers.</p>
   */
  Logs?: Logs;

  /**
   * <p>The parameters that determine the WeeklyStartTime.</p>
   */
  MaintenanceWindowStartTime?: WeeklyStartTime;

  /**
   * <p>The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.</p>
   */
  SecurityGroups?: string[];
}

export namespace UpdateBrokerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBrokerRequest): any => ({
    ...obj,
  });
}

export interface UpdateBrokerResponse {
  /**
   * <p>Optional. The authentication strategy used to secure the broker. The default is SIMPLE.</p>
   */
  AuthenticationStrategy?: AuthenticationStrategy | string;

  /**
   * <p>The new boolean value that specifies whether broker engines automatically upgrade to new minor versions as new versions are released and supported by Amazon MQ.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>Required. The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId?: string;

  /**
   * <p>The ID of the updated configuration.</p>
   */
  Configuration?: ConfigurationId;

  /**
   * <p>The broker engine version to upgrade to. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The broker's host instance type to upgrade to. For a list of supported instance types, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker.html#broker-instance-types">Broker instance types</a>.</p>
   */
  HostInstanceType?: string;

  /**
   * <p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers.</p>
   */
  LdapServerMetadata?: LdapServerMetadataOutput;

  /**
   * <p>The list of information about logs to be enabled for the specified broker.</p>
   */
  Logs?: Logs;

  /**
   * <p>The parameters that determine the WeeklyStartTime.</p>
   */
  MaintenanceWindowStartTime?: WeeklyStartTime;

  /**
   * <p>The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.</p>
   */
  SecurityGroups?: string[];
}

export namespace UpdateBrokerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBrokerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Updates the specified configuration.</p>
 */
export interface UpdateConfigurationRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the configuration.</p>
   */
  ConfigurationId: string | undefined;

  /**
   * <p>Required. The base64-encoded XML configuration.</p>
   */
  Data: string | undefined;

  /**
   * <p>The description of the configuration.</p>
   */
  Description?: string;
}

export namespace UpdateConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateConfigurationResponse {
  /**
   * <p>Required. The Amazon Resource Name (ARN) of the configuration.</p>
   */
  Arn?: string;

  /**
   * <p>Required. The date and time of the configuration.</p>
   */
  Created?: Date;

  /**
   * <p>Required. The unique ID that Amazon MQ generates for the configuration.</p>
   */
  Id?: string;

  /**
   * <p>The latest revision of the configuration.</p>
   */
  LatestRevision?: ConfigurationRevision;

  /**
   * <p>Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.</p>
   */
  Name?: string;

  /**
   * <p>The list of the first 20 warnings about the configuration XML elements or attributes that were sanitized.</p>
   */
  Warnings?: SanitizationWarning[];
}

export namespace UpdateConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateConfigurationResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Updates the information for an ActiveMQ user.</p>
 */
export interface UpdateUserRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId: string | undefined;

  /**
   * <p>Enables access to the the ActiveMQ Web Console for the ActiveMQ user.</p>
   */
  ConsoleAccess?: boolean;

  /**
   * <p>The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Groups?: string[];

  /**
   * <p>The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).</p>
   */
  Password?: string;

  /**
   * <p>The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Username: string | undefined;
}

export namespace UpdateUserRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserResponse {}

export namespace UpdateUserResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserResponse): any => ({
    ...obj,
  });
}
