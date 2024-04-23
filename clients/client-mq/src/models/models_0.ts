// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MqServiceException as __BaseException } from "./MqServiceException";

/**
 * @public
 * <p>Action required for a broker.</p>
 */
export interface ActionRequired {
  /**
   * @public
   * <p>The code you can use to find instructions on the action required to resolve your broker issue.</p>
   */
  ActionRequiredCode?: string;

  /**
   * @public
   * <p>Information about the action required to resolve your broker issue.</p>
   */
  ActionRequiredInfo?: string;
}

/**
 * @public
 * <p>Name of the availability zone.</p>
 */
export interface AvailabilityZone {
  /**
   * @public
   * <p>Id for the availability zone.</p>
   */
  Name?: string;
}

/**
 * @public
 * @enum
 */
export const EngineType = {
  ACTIVEMQ: "ACTIVEMQ",
  RABBITMQ: "RABBITMQ",
} as const;

/**
 * @public
 */
export type EngineType = (typeof EngineType)[keyof typeof EngineType];

/**
 * @public
 * <p>Id of the engine version.</p>
 */
export interface EngineVersion {
  /**
   * @public
   * <p>Id for the version.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Types of broker engines.</p>
 */
export interface BrokerEngineType {
  /**
   * @public
   * <p>The broker's engine type.</p>
   */
  EngineType?: EngineType;

  /**
   * @public
   * <p>The list of engine versions.</p>
   */
  EngineVersions?: EngineVersion[];
}

/**
 * @public
 * <p>Returns information about all brokers.</p>
 */
export interface BrokerInstance {
  /**
   * @public
   * <p>The brokers web console URL.</p>
   */
  ConsoleURL?: string;

  /**
   * @public
   * <p>The broker's wire-level protocol endpoints.</p>
   */
  Endpoints?: string[];

  /**
   * @public
   * <p>The IP address of the Elastic Network Interface (ENI) attached to the broker. Does not apply to RabbitMQ brokers.</p>
   */
  IpAddress?: string;
}

/**
 * @public
 * @enum
 */
export const BrokerStorageType = {
  EBS: "EBS",
  EFS: "EFS",
} as const;

/**
 * @public
 */
export type BrokerStorageType = (typeof BrokerStorageType)[keyof typeof BrokerStorageType];

/**
 * @public
 * @enum
 */
export const DeploymentMode = {
  ACTIVE_STANDBY_MULTI_AZ: "ACTIVE_STANDBY_MULTI_AZ",
  CLUSTER_MULTI_AZ: "CLUSTER_MULTI_AZ",
  SINGLE_INSTANCE: "SINGLE_INSTANCE",
} as const;

/**
 * @public
 */
export type DeploymentMode = (typeof DeploymentMode)[keyof typeof DeploymentMode];

/**
 * @public
 * <p>Option for host instance type.</p>
 */
export interface BrokerInstanceOption {
  /**
   * @public
   * <p>The list of available az.</p>
   */
  AvailabilityZones?: AvailabilityZone[];

  /**
   * @public
   * <p>The broker's engine type.</p>
   */
  EngineType?: EngineType;

  /**
   * @public
   * <p>The broker's instance type.</p>
   */
  HostInstanceType?: string;

  /**
   * @public
   * <p>The broker's storage type.</p>
   */
  StorageType?: BrokerStorageType;

  /**
   * @public
   * <p>The list of supported deployment modes.</p>
   */
  SupportedDeploymentModes?: DeploymentMode[];

  /**
   * @public
   * <p>The list of supported engine versions.</p>
   */
  SupportedEngineVersions?: string[];
}

/**
 * @public
 * @enum
 */
export const BrokerState = {
  CREATION_FAILED: "CREATION_FAILED",
  CREATION_IN_PROGRESS: "CREATION_IN_PROGRESS",
  CRITICAL_ACTION_REQUIRED: "CRITICAL_ACTION_REQUIRED",
  DELETION_IN_PROGRESS: "DELETION_IN_PROGRESS",
  REBOOT_IN_PROGRESS: "REBOOT_IN_PROGRESS",
  REPLICA: "REPLICA",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type BrokerState = (typeof BrokerState)[keyof typeof BrokerState];

/**
 * @public
 * <p>Returns information about all brokers.</p>
 */
export interface BrokerSummary {
  /**
   * @public
   * <p>The broker's Amazon Resource Name (ARN).</p>
   */
  BrokerArn?: string;

  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId?: string;

  /**
   * @public
   * <p>The broker's name. This value is unique in your Amazon Web Services account, 1-50 characters long, and containing only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.</p>
   */
  BrokerName?: string;

  /**
   * @public
   * <p>The broker's status.</p>
   */
  BrokerState?: BrokerState;

  /**
   * @public
   * <p>The time when the broker was created.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>The broker's deployment mode.</p>
   */
  DeploymentMode: DeploymentMode | undefined;

  /**
   * @public
   * <p>The type of broker engine.</p>
   */
  EngineType: EngineType | undefined;

  /**
   * @public
   * <p>The broker's instance type.</p>
   */
  HostInstanceType?: string;
}

/**
 * @public
 * @enum
 */
export const AuthenticationStrategy = {
  LDAP: "LDAP",
  SIMPLE: "SIMPLE",
} as const;

/**
 * @public
 */
export type AuthenticationStrategy = (typeof AuthenticationStrategy)[keyof typeof AuthenticationStrategy];

/**
 * @public
 * <p>Returns information about the specified configuration revision.</p>
 */
export interface ConfigurationRevision {
  /**
   * @public
   * <p>Required. The date and time of the configuration revision.</p>
   */
  Created: Date | undefined;

  /**
   * @public
   * <p>The description of the configuration revision.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Required. The revision number of the configuration.</p>
   */
  Revision: number | undefined;
}

/**
 * @public
 * <p>Returns information about all configurations.</p>
 */
export interface Configuration {
  /**
   * @public
   * <p>Required. The ARN of the configuration.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>Optional. The authentication strategy associated with the configuration. The default is SIMPLE.</p>
   */
  AuthenticationStrategy: AuthenticationStrategy | undefined;

  /**
   * @public
   * <p>Required. The date and time of the configuration revision.</p>
   */
  Created: Date | undefined;

  /**
   * @public
   * <p>Required. The description of the configuration.</p>
   */
  Description: string | undefined;

  /**
   * @public
   * <p>Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.</p>
   */
  EngineType: EngineType | undefined;

  /**
   * @public
   * <p>Required. The broker engine's version. For a list of supported engine versions, see, <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.</p>
   */
  EngineVersion: string | undefined;

  /**
   * @public
   * <p>Required. The unique ID that Amazon MQ generates for the configuration.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>Required. The latest revision of the configuration.</p>
   */
  LatestRevision: ConfigurationRevision | undefined;

  /**
   * @public
   * <p>Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The list of all tags associated with this configuration.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>A list of information about the configuration.</p>
 */
export interface ConfigurationId {
  /**
   * @public
   * <p>Required. The unique ID that Amazon MQ generates for the configuration.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The revision number of the configuration.</p>
   */
  Revision?: number;
}

/**
 * @public
 * @enum
 */
export const SanitizationWarningReason = {
  DISALLOWED_ATTRIBUTE_REMOVED: "DISALLOWED_ATTRIBUTE_REMOVED",
  DISALLOWED_ELEMENT_REMOVED: "DISALLOWED_ELEMENT_REMOVED",
  INVALID_ATTRIBUTE_VALUE_REMOVED: "INVALID_ATTRIBUTE_VALUE_REMOVED",
} as const;

/**
 * @public
 */
export type SanitizationWarningReason = (typeof SanitizationWarningReason)[keyof typeof SanitizationWarningReason];

/**
 * @public
 * <p>Returns information about the configuration element or attribute that was sanitized in the configuration.</p>
 */
export interface SanitizationWarning {
  /**
   * @public
   * <p>The name of the configuration attribute that has been sanitized.</p>
   */
  AttributeName?: string;

  /**
   * @public
   * <p>The name of the configuration element that has been sanitized.</p>
   */
  ElementName?: string;

  /**
   * @public
   * <p>The reason for which the configuration elements or attributes were sanitized.</p>
   */
  Reason: SanitizationWarningReason | undefined;
}

/**
 * @public
 * <p>A user associated with the broker. For Amazon MQ for RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created by making RabbitMQ API calls directly to brokers or via the RabbitMQ web console.</p>
 */
export interface User {
  /**
   * @public
   * <p>Enables access to the ActiveMQ Web Console for the ActiveMQ user. Does not apply to RabbitMQ brokers.</p>
   */
  ConsoleAccess?: boolean;

  /**
   * @public
   * <p>The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long. Does not apply to RabbitMQ brokers.</p>
   */
  Groups?: string[];

  /**
   * @public
   * <p>Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).</p>
   */
  Password: string | undefined;

  /**
   * @public
   * <p>The username of the broker user. The following restrictions apply to broker usernames:</p> <ul><li><p>For Amazon MQ for ActiveMQ brokers, this value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p></li> <li><p>para>For Amazon MQ for RabbitMQ brokers, this value can contain only alphanumeric characters, dashes, periods, underscores (- . _). This value must not contain a tilde (~) character. Amazon MQ prohibts using guest as a valid usename. This value must be 2-100 characters long.</p></para></li></ul> <important><p>Do not add personally identifiable information (PII) or other confidential or sensitive information in broker usernames. Broker usernames are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker usernames are not intended to be used for private or sensitive data.</p></important>
   */
  Username: string | undefined;

  /**
   * @public
   * <p>Defines if this user is intended for CRDR replication purposes.</p>
   */
  ReplicationUser?: boolean;
}

/**
 * @public
 * @enum
 */
export const ChangeType = {
  CREATE: "CREATE",
  DELETE: "DELETE",
  UPDATE: "UPDATE",
} as const;

/**
 * @public
 */
export type ChangeType = (typeof ChangeType)[keyof typeof ChangeType];

/**
 * @public
 * <p>Returns a list of all broker users. Does not apply to RabbitMQ brokers.</p>
 */
export interface UserSummary {
  /**
   * @public
   * <p>The type of change pending for the broker user.</p>
   */
  PendingChange?: ChangeType;

  /**
   * @public
   * <p>Required. The username of the broker user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Username: string | undefined;
}

/**
 * @public
 * <p>Returns information about an error.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The attribute which caused the error.</p>
   */
  ErrorAttribute?: string;

  /**
   * @public
   * <p>The explanation of the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.ErrorAttribute = opts.ErrorAttribute;
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Broker configuration information</p>
 */
export interface Configurations {
  /**
   * @public
   * <p>The broker's current configuration.</p>
   */
  Current?: ConfigurationId;

  /**
   * @public
   * <p>The history of configurations applied to the broker.</p>
   */
  History?: ConfigurationId[];

  /**
   * @public
   * <p>The broker's pending configuration.</p>
   */
  Pending?: ConfigurationId;
}

/**
 * @public
 * <p>Returns information about an error.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The attribute which caused the error.</p>
   */
  ErrorAttribute?: string;

  /**
   * @public
   * <p>The explanation of the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.ErrorAttribute = opts.ErrorAttribute;
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const DataReplicationMode = {
  CRDR: "CRDR",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type DataReplicationMode = (typeof DataReplicationMode)[keyof typeof DataReplicationMode];

/**
 * @public
 * <p>Encryption options for the broker.</p>
 */
export interface EncryptionOptions {
  /**
   * @public
   * <p>The customer master key (CMK) to use for the A KMS (KMS). This key is used to encrypt your data at rest. If not provided, Amazon MQ will use a default CMK to encrypt your data.</p>
   */
  KmsKeyId?: string;

  /**
   * @public
   * <p>Enables the use of an Amazon Web Services owned CMK using KMS (KMS). Set to true by default, if no value is provided, for example, for RabbitMQ brokers.</p>
   */
  UseAwsOwnedKey: boolean | undefined;
}

/**
 * @public
 * <p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.</p> <important><p>Does not apply to RabbitMQ brokers.</p></important>
 */
export interface LdapServerMetadataInput {
  /**
   * @public
   * <p>Specifies the location of the LDAP server such as Directory Service for Microsoft Active Directory. Optional failover server.</p>
   */
  Hosts: string[] | undefined;

  /**
   * @public
   * <p>The distinguished name of the node in the directory information tree (DIT) to search for roles or groups. For example, ou=group, ou=corp, dc=corp,
   *                   dc=example, dc=com.</p>
   */
  RoleBase: string | undefined;

  /**
   * @public
   * <p>Specifies the LDAP attribute that identifies the group name attribute in the object returned from the group membership query.</p>
   */
  RoleName?: string;

  /**
   * @public
   * <p>The LDAP search filter used to find roles within the roleBase. The distinguished name of the user matched by userSearchMatching is substituted into the \{0\} placeholder in the search filter. The client's username is substituted into the \{1\} placeholder. For example, if you set this option to (member=uid=\{1\})for the user janedoe, the search filter becomes (member=uid=janedoe) after string substitution. It matches all role entries that have a member attribute equal to uid=janedoe under the subtree selected by the roleBase.</p>
   */
  RoleSearchMatching: string | undefined;

  /**
   * @public
   * <p>The directory search scope for the role. If set to true, scope is to search the entire subtree.</p>
   */
  RoleSearchSubtree?: boolean;

  /**
   * @public
   * <p>Service account password. A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example,
   *                   dc=com.</p>
   */
  ServiceAccountPassword: string | undefined;

  /**
   * @public
   * <p>Service account username. A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example,
   *                   dc=com.</p>
   */
  ServiceAccountUsername: string | undefined;

  /**
   * @public
   * <p>Select a particular subtree of the directory information tree (DIT) to search for user entries. The subtree is specified by a DN, which specifies the base node of the subtree. For example, by setting this option to ou=Users,ou=corp, dc=corp,
   *                   dc=example, dc=com, the search for user entries is restricted to the subtree beneath ou=Users, ou=corp, dc=corp, dc=example, dc=com.</p>
   */
  UserBase: string | undefined;

  /**
   * @public
   * <p>Specifies the name of the LDAP attribute for the user group membership.</p>
   */
  UserRoleName?: string;

  /**
   * @public
   * <p>The LDAP search filter used to find users within the userBase. The client's username is substituted into the \{0\} placeholder in the search filter. For example, if this option is set to (uid=\{0\}) and the received username is janedoe, the search filter becomes (uid=janedoe) after string substitution. It will result in matching an entry like uid=janedoe, ou=Users,ou=corp, dc=corp, dc=example,
   *                   dc=com.</p>
   */
  UserSearchMatching: string | undefined;

  /**
   * @public
   * <p>The directory search scope for the user. If set to true, scope is to search the entire subtree.</p>
   */
  UserSearchSubtree?: boolean;
}

/**
 * @public
 * <p>The list of information about logs to be enabled for the specified broker.</p>
 */
export interface Logs {
  /**
   * @public
   * <p>Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged. Does not apply to RabbitMQ brokers.</p>
   */
  Audit?: boolean;

  /**
   * @public
   * <p>Enables general logging.</p>
   */
  General?: boolean;
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
 * <p>The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.</p>
 */
export interface WeeklyStartTime {
  /**
   * @public
   * <p>Required. The day of the week.</p>
   */
  DayOfWeek: DayOfWeek | undefined;

  /**
   * @public
   * <p>Required. The time, in 24-hour format.</p>
   */
  TimeOfDay: string | undefined;

  /**
   * @public
   * <p>The time zone, UTC by default, in either the Country/City format, or the UTC offset format.</p>
   */
  TimeZone?: string;
}

/**
 * @public
 * <p>Creates a broker using the specified properties.</p>
 */
export interface CreateBrokerRequest {
  /**
   * @public
   * <p>Optional. The authentication strategy used to secure the broker. The default is SIMPLE.</p>
   */
  AuthenticationStrategy?: AuthenticationStrategy;

  /**
   * @public
   * <p>Enables automatic upgrades to new minor versions for brokers, as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot. Set to true by default, if no value is specified.</p>
   */
  AutoMinorVersionUpgrade: boolean | undefined;

  /**
   * @public
   * <p>Required. The broker's name. This value must be unique in your Amazon Web Services account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.</p> <important><p>Do not add personally identifiable information (PII) or other confidential or sensitive information in broker names. Broker names are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker names are not intended to be used for private or sensitive data.</p></important>
   */
  BrokerName: string | undefined;

  /**
   * @public
   * <p>A list of information about the configuration.</p>
   */
  Configuration?: ConfigurationId;

  /**
   * @public
   * <p>The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action.</p> <note><p>We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency.</p></note>
   */
  CreatorRequestId?: string;

  /**
   * @public
   * <p>Required. The broker's deployment mode.</p>
   */
  DeploymentMode: DeploymentMode | undefined;

  /**
   * @public
   * <p>Encryption options for the broker.</p>
   */
  EncryptionOptions?: EncryptionOptions;

  /**
   * @public
   * <p>Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.</p>
   */
  EngineType: EngineType | undefined;

  /**
   * @public
   * <p>Required. The broker engine's version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.</p>
   */
  EngineVersion: string | undefined;

  /**
   * @public
   * <p>Required. The broker's instance type.</p>
   */
  HostInstanceType: string | undefined;

  /**
   * @public
   * <p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers.</p>
   */
  LdapServerMetadata?: LdapServerMetadataInput;

  /**
   * @public
   * <p>Enables Amazon CloudWatch logging for brokers.</p>
   */
  Logs?: Logs;

  /**
   * @public
   * <p>The parameters that determine the WeeklyStartTime.</p>
   */
  MaintenanceWindowStartTime?: WeeklyStartTime;

  /**
   * @public
   * <p>Enables connections from applications outside of the VPC that hosts the broker's subnets. Set to false by default, if no value is provided.</p>
   */
  PubliclyAccessible: boolean | undefined;

  /**
   * @public
   * <p>The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>The broker's storage type.</p>
   */
  StorageType?: BrokerStorageType;

  /**
   * @public
   * <p>The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones. If you specify more than one subnet, the subnets must be in different Availability Zones. Amazon MQ will not be able to create VPC endpoints for your broker with multiple subnets in the same Availability Zone. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ Amazon MQ for ActiveMQ deployment requires two subnets. A CLUSTER_MULTI_AZ Amazon MQ for RabbitMQ deployment has no subnet requirements when deployed with public accessibility. Deployment without public accessibility requires at least one subnet.</p> <important><p>If you specify subnets in a <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html">shared VPC</a> for a RabbitMQ broker, the associated VPC to which the specified subnets belong must be owned by your Amazon Web Services account. Amazon MQ will not be able to create VPC endpoints in VPCs that are not owned by your Amazon Web Services account.</p></important>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>Create tags when creating the broker.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The list of broker users (persons or applications) who can access queues and topics. For Amazon MQ for RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created by making RabbitMQ API calls directly to brokers or via the RabbitMQ web console.</p>
   */
  Users: User[] | undefined;

  /**
   * @public
   * <p>Defines whether this broker is a part of a data replication pair.</p>
   */
  DataReplicationMode?: DataReplicationMode;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the primary broker that is used to replicate data from in a data replication pair, and is applied to the replica broker. Must be set when dataReplicationMode is set to CRDR.</p>
   */
  DataReplicationPrimaryBrokerArn?: string;
}

/**
 * @public
 */
export interface CreateBrokerResponse {
  /**
   * @public
   * <p>The broker's Amazon Resource Name (ARN).</p>
   */
  BrokerArn?: string;

  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId?: string;
}

/**
 * @public
 * <p>Returns information about an error.</p>
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The attribute which caused the error.</p>
   */
  ErrorAttribute?: string;

  /**
   * @public
   * <p>The explanation of the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
    this.ErrorAttribute = opts.ErrorAttribute;
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Returns information about an error.</p>
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>The attribute which caused the error.</p>
   */
  ErrorAttribute?: string;

  /**
   * @public
   * <p>The explanation of the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerErrorException, __BaseException>) {
    super({
      name: "InternalServerErrorException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
    this.ErrorAttribute = opts.ErrorAttribute;
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Returns information about an error.</p>
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The attribute which caused the error.</p>
   */
  ErrorAttribute?: string;

  /**
   * @public
   * <p>The explanation of the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
    this.ErrorAttribute = opts.ErrorAttribute;
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).</p>
 */
export interface CreateConfigurationRequest {
  /**
   * @public
   * <p>Optional. The authentication strategy associated with the configuration. The default is SIMPLE.</p>
   */
  AuthenticationStrategy?: AuthenticationStrategy;

  /**
   * @public
   * <p>Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.</p>
   */
  EngineType: EngineType | undefined;

  /**
   * @public
   * <p>Required. The broker engine's version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.</p>
   */
  EngineVersion: string | undefined;

  /**
   * @public
   * <p>Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Create tags when creating the configuration.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateConfigurationResponse {
  /**
   * @public
   * <p>Required. The Amazon Resource Name (ARN) of the configuration.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Optional. The authentication strategy associated with the configuration. The default is SIMPLE.</p>
   */
  AuthenticationStrategy?: AuthenticationStrategy;

  /**
   * @public
   * <p>Required. The date and time of the configuration.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>Required. The unique ID that Amazon MQ generates for the configuration.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The latest revision of the configuration.</p>
   */
  LatestRevision?: ConfigurationRevision;

  /**
   * @public
   * <p>Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>A map of the key-value pairs for the resource tag.</p>
 */
export interface CreateTagsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The key-value pair for the resource tag.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * <p>Returns information about an error.</p>
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The attribute which caused the error.</p>
   */
  ErrorAttribute?: string;

  /**
   * @public
   * <p>The explanation of the error.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
    this.ErrorAttribute = opts.ErrorAttribute;
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>Creates a new ActiveMQ user.</p>
 */
export interface CreateUserRequest {
  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId: string | undefined;

  /**
   * @public
   * <p>Enables access to the ActiveMQ Web Console for the ActiveMQ user.</p>
   */
  ConsoleAccess?: boolean;

  /**
   * @public
   * <p>The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Groups?: string[];

  /**
   * @public
   * <p>Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).</p>
   */
  Password: string | undefined;

  /**
   * @public
   * <p>The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Username: string | undefined;

  /**
   * @public
   * <p>Defines if this user is intended for CRDR replication purposes.</p>
   */
  ReplicationUser?: boolean;
}

/**
 * @public
 */
export interface CreateUserResponse {}

/**
 * @public
 * <p>Specifies a broker in a data replication pair.</p>
 */
export interface DataReplicationCounterpart {
  /**
   * @public
   * <p>Required. The unique broker id generated by Amazon MQ.</p>
   */
  BrokerId: string | undefined;

  /**
   * @public
   * <p>Required. The region of the broker.</p>
   */
  Region: string | undefined;
}

/**
 * @public
 * <p>The replication details of the data replication-enabled broker. Only returned if dataReplicationMode or pendingDataReplicationMode is set to CRDR.</p>
 */
export interface DataReplicationMetadataOutput {
  /**
   * @public
   * <p>Describes the replica/primary broker. Only returned if this broker is currently set as a primary or replica in the broker's dataReplicationRole property.</p>
   */
  DataReplicationCounterpart?: DataReplicationCounterpart;

  /**
   * @public
   * <p>Defines the role of this broker in a data replication pair. When a replica broker is promoted to primary, this role is interchanged.</p>
   */
  DataReplicationRole: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrokerRequest {
  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrokerResponse {
  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId?: string;
}

/**
 * @public
 */
export interface DeleteTagsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource tag.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>An array of tag keys to delete</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId: string | undefined;

  /**
   * @public
   * <p>The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Username: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserResponse {}

/**
 * @public
 */
export interface DescribeBrokerRequest {
  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId: string | undefined;
}

/**
 * @public
 * <p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.</p>
 */
export interface LdapServerMetadataOutput {
  /**
   * @public
   * <p>Specifies the location of the LDAP server such as Directory Service for Microsoft Active Directory. Optional failover server.</p>
   */
  Hosts: string[] | undefined;

  /**
   * @public
   * <p>The distinguished name of the node in the directory information tree (DIT) to search for roles or groups. For example, ou=group, ou=corp, dc=corp,
   *                   dc=example, dc=com.</p>
   */
  RoleBase: string | undefined;

  /**
   * @public
   * <p>Specifies the LDAP attribute that identifies the group name attribute in the object returned from the group membership query.</p>
   */
  RoleName?: string;

  /**
   * @public
   * <p>The LDAP search filter used to find roles within the roleBase. The distinguished name of the user matched by userSearchMatching is substituted into the \{0\} placeholder in the search filter. The client's username is substituted into the \{1\} placeholder. For example, if you set this option to (member=uid=\{1\})for the user janedoe, the search filter becomes (member=uid=janedoe) after string substitution. It matches all role entries that have a member attribute equal to uid=janedoe under the subtree selected by the roleBase.</p>
   */
  RoleSearchMatching: string | undefined;

  /**
   * @public
   * <p>The directory search scope for the role. If set to true, scope is to search the entire subtree.</p>
   */
  RoleSearchSubtree?: boolean;

  /**
   * @public
   * <p>Service account username. A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example,
   *                   dc=com.</p>
   */
  ServiceAccountUsername: string | undefined;

  /**
   * @public
   * <p>Select a particular subtree of the directory information tree (DIT) to search for user entries. The subtree is specified by a DN, which specifies the base node of the subtree. For example, by setting this option to ou=Users,ou=corp, dc=corp,
   *                   dc=example, dc=com, the search for user entries is restricted to the subtree beneath ou=Users, ou=corp, dc=corp, dc=example, dc=com.</p>
   */
  UserBase: string | undefined;

  /**
   * @public
   * <p>Specifies the name of the LDAP attribute for the user group membership.</p>
   */
  UserRoleName?: string;

  /**
   * @public
   * <p>The LDAP search filter used to find users within the userBase. The client's username is substituted into the \{0\} placeholder in the search filter. For example, if this option is set to (uid=\{0\}) and the received username is janedoe, the search filter becomes (uid=janedoe) after string substitution. It will result in matching an entry like uid=janedoe, ou=Users,ou=corp, dc=corp, dc=example,
   *                dc=com.</p>
   */
  UserSearchMatching: string | undefined;

  /**
   * @public
   * <p>The directory search scope for the user. If set to true, scope is to search the entire subtree.</p>
   */
  UserSearchSubtree?: boolean;
}

/**
 * @public
 * <p>The list of information about logs to be enabled for the specified broker.</p>
 */
export interface PendingLogs {
  /**
   * @public
   * <p>Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged.</p>
   */
  Audit?: boolean;

  /**
   * @public
   * <p>Enables general logging.</p>
   */
  General?: boolean;
}

/**
 * @public
 * <p>The list of information about logs currently enabled and pending to be deployed for the specified broker.</p>
 */
export interface LogsSummary {
  /**
   * @public
   * <p>Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged.</p>
   */
  Audit?: boolean;

  /**
   * @public
   * <p>The location of the CloudWatch Logs log group where audit logs are sent.</p>
   */
  AuditLogGroup?: string;

  /**
   * @public
   * <p>Enables general logging.</p>
   */
  General: boolean | undefined;

  /**
   * @public
   * <p>The location of the CloudWatch Logs log group where general logs are sent.</p>
   */
  GeneralLogGroup: string | undefined;

  /**
   * @public
   * <p>The list of information about logs pending to be deployed for the specified broker.</p>
   */
  Pending?: PendingLogs;
}

/**
 * @public
 */
export interface DescribeBrokerResponse {
  /**
   * @public
   * <p>Actions required for a broker.</p>
   */
  ActionsRequired?: ActionRequired[];

  /**
   * @public
   * <p>The authentication strategy used to secure the broker. The default is SIMPLE.</p>
   */
  AuthenticationStrategy?: AuthenticationStrategy;

  /**
   * @public
   * <p>Enables automatic upgrades to new minor versions for brokers, as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * @public
   * <p>The broker's Amazon Resource Name (ARN).</p>
   */
  BrokerArn?: string;

  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId?: string;

  /**
   * @public
   * <p>A list of information about allocated brokers.</p>
   */
  BrokerInstances?: BrokerInstance[];

  /**
   * @public
   * <p>The broker's name. This value must be unique in your Amazon Web Services account account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.</p>
   */
  BrokerName?: string;

  /**
   * @public
   * <p>The broker's status.</p>
   */
  BrokerState?: BrokerState;

  /**
   * @public
   * <p>The list of all revisions for the specified configuration.</p>
   */
  Configurations?: Configurations;

  /**
   * @public
   * <p>The time when the broker was created.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>The broker's deployment mode.</p>
   */
  DeploymentMode?: DeploymentMode;

  /**
   * @public
   * <p>Encryption options for the broker.</p>
   */
  EncryptionOptions?: EncryptionOptions;

  /**
   * @public
   * <p>The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.</p>
   */
  EngineType?: EngineType;

  /**
   * @public
   * <p>The broker engine's version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The broker's instance type.</p>
   */
  HostInstanceType?: string;

  /**
   * @public
   * <p>The metadata of the LDAP server used to authenticate and authorize connections to the broker.</p>
   */
  LdapServerMetadata?: LdapServerMetadataOutput;

  /**
   * @public
   * <p>The list of information about logs currently enabled and pending to be deployed for the specified broker.</p>
   */
  Logs?: LogsSummary;

  /**
   * @public
   * <p>The parameters that determine the WeeklyStartTime.</p>
   */
  MaintenanceWindowStartTime?: WeeklyStartTime;

  /**
   * @public
   * <p>The authentication strategy that will be applied when the broker is rebooted. The default is SIMPLE.</p>
   */
  PendingAuthenticationStrategy?: AuthenticationStrategy;

  /**
   * @public
   * <p>The broker engine version to upgrade to. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.</p>
   */
  PendingEngineVersion?: string;

  /**
   * @public
   * <p>The broker's host instance type to upgrade to. For a list of supported instance types, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker.html#broker-instance-types">Broker instance types</a>.</p>
   */
  PendingHostInstanceType?: string;

  /**
   * @public
   * <p>The metadata of the LDAP server that will be used to authenticate and authorize connections to the broker after it is rebooted.</p>
   */
  PendingLdapServerMetadata?: LdapServerMetadataOutput;

  /**
   * @public
   * <p>The list of pending security groups to authorize connections to brokers.</p>
   */
  PendingSecurityGroups?: string[];

  /**
   * @public
   * <p>Enables connections from applications outside of the VPC that hosts the broker's subnets.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * @public
   * <p>The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>The broker's storage type.</p>
   */
  StorageType?: BrokerStorageType;

  /**
   * @public
   * <p>The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>The list of all tags associated with this broker.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The list of all broker usernames for the specified broker.</p>
   */
  Users?: UserSummary[];

  /**
   * @public
   * <p>The replication details of the data replication-enabled broker. Only returned if dataReplicationMode is set to CRDR.</p>
   */
  DataReplicationMetadata?: DataReplicationMetadataOutput;

  /**
   * @public
   * <p>Describes whether this broker is a part of a data replication pair.</p>
   */
  DataReplicationMode?: DataReplicationMode;

  /**
   * @public
   * <p>The pending replication details of the data replication-enabled broker. Only returned if pendingDataReplicationMode is set to CRDR.</p>
   */
  PendingDataReplicationMetadata?: DataReplicationMetadataOutput;

  /**
   * @public
   * <p>Describes whether this broker will be a part of a data replication pair after reboot.</p>
   */
  PendingDataReplicationMode?: DataReplicationMode;
}

/**
 * @public
 */
export interface DescribeBrokerEngineTypesRequest {
  /**
   * @public
   * <p>Filter response by engine type.</p>
   */
  EngineType?: string;

  /**
   * @public
   * <p>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeBrokerEngineTypesResponse {
  /**
   * @public
   * <p>List of available engine types and versions.</p>
   */
  BrokerEngineTypes?: BrokerEngineType[];

  /**
   * @public
   * <p>Required. The maximum number of engine types that can be returned per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeBrokerInstanceOptionsRequest {
  /**
   * @public
   * <p>Filter response by engine type.</p>
   */
  EngineType?: string;

  /**
   * @public
   * <p>Filter response by host instance type.</p>
   */
  HostInstanceType?: string;

  /**
   * @public
   * <p>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Filter response by storage type.</p>
   */
  StorageType?: string;
}

/**
 * @public
 */
export interface DescribeBrokerInstanceOptionsResponse {
  /**
   * @public
   * <p>List of available broker instance options.</p>
   */
  BrokerInstanceOptions?: BrokerInstanceOption[];

  /**
   * @public
   * <p>Required. The maximum number of instance options that can be returned per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface DescribeConfigurationRequest {
  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the configuration.</p>
   */
  ConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationResponse {
  /**
   * @public
   * <p>Required. The ARN of the configuration.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Optional. The authentication strategy associated with the configuration. The default is SIMPLE.</p>
   */
  AuthenticationStrategy?: AuthenticationStrategy;

  /**
   * @public
   * <p>Required. The date and time of the configuration revision.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>Required. The description of the configuration.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.</p>
   */
  EngineType?: EngineType;

  /**
   * @public
   * <p>Required. The broker engine's version. For a list of supported engine versions, see, <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>Required. The unique ID that Amazon MQ generates for the configuration.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>Required. The latest revision of the configuration.</p>
   */
  LatestRevision?: ConfigurationRevision;

  /**
   * @public
   * <p>Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The list of all tags associated with this configuration.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeConfigurationRevisionRequest {
  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the configuration.</p>
   */
  ConfigurationId: string | undefined;

  /**
   * @public
   * <p>The revision of the configuration.</p>
   */
  ConfigurationRevision: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationRevisionResponse {
  /**
   * @public
   * <p>Required. The unique ID that Amazon MQ generates for the configuration.</p>
   */
  ConfigurationId?: string;

  /**
   * @public
   * <p>Required. The date and time of the configuration.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>Amazon MQ for ActiveMQ: the base64-encoded XML configuration. Amazon MQ for RabbitMQ: base64-encoded Cuttlefish.</p>
   */
  Data?: string;

  /**
   * @public
   * <p>The description of the configuration.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface DescribeUserRequest {
  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId: string | undefined;

  /**
   * @public
   * <p>The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Username: string | undefined;
}

/**
 * @public
 * <p>Returns information about the status of the changes pending for the ActiveMQ user.</p>
 */
export interface UserPendingChanges {
  /**
   * @public
   * <p>Enables access to the the ActiveMQ Web Console for the ActiveMQ user.</p>
   */
  ConsoleAccess?: boolean;

  /**
   * @public
   * <p>The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Groups?: string[];

  /**
   * @public
   * <p>Required. The type of change pending for the ActiveMQ user.</p>
   */
  PendingChange: ChangeType | undefined;
}

/**
 * @public
 */
export interface DescribeUserResponse {
  /**
   * @public
   * <p>Required. The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId?: string;

  /**
   * @public
   * <p>Enables access to the the ActiveMQ Web Console for the ActiveMQ user.</p>
   */
  ConsoleAccess?: boolean;

  /**
   * @public
   * <p>The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Groups?: string[];

  /**
   * @public
   * <p>The status of the changes pending for the ActiveMQ user.</p>
   */
  Pending?: UserPendingChanges;

  /**
   * @public
   * <p>Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>Describes whether the user is intended for data replication</p>
   */
  ReplicationUser?: boolean;
}

/**
 * @public
 */
export interface ListBrokersRequest {
  /**
   * @public
   * <p>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListBrokersResponse {
  /**
   * @public
   * <p>A list of information about all brokers.</p>
   */
  BrokerSummaries?: BrokerSummary[];

  /**
   * @public
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConfigurationRevisionsRequest {
  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the configuration.</p>
   */
  ConfigurationId: string | undefined;

  /**
   * @public
   * <p>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConfigurationRevisionsResponse {
  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the configuration.</p>
   */
  ConfigurationId?: string;

  /**
   * @public
   * <p>The maximum number of configuration revisions that can be returned per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The list of all revisions for the specified configuration.</p>
   */
  Revisions?: ConfigurationRevision[];
}

/**
 * @public
 */
export interface ListConfigurationsRequest {
  /**
   * @public
   * <p>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConfigurationsResponse {
  /**
   * @public
   * <p>The list of all revisions for the specified configuration.</p>
   */
  Configurations?: Configuration[];

  /**
   * @public
   * <p>The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource tag.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsResponse {
  /**
   * @public
   * <p>The key-value pair for the resource tag.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId: string | undefined;

  /**
   * @public
   * <p>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * @public
   * <p>Required. The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId?: string;

  /**
   * @public
   * <p>Required. The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Required. The list of all ActiveMQ usernames for the specified broker. Does not apply to RabbitMQ brokers.</p>
   */
  Users?: UserSummary[];
}

/**
 * @public
 * @enum
 */
export const PromoteMode = {
  FAILOVER: "FAILOVER",
  SWITCHOVER: "SWITCHOVER",
} as const;

/**
 * @public
 */
export type PromoteMode = (typeof PromoteMode)[keyof typeof PromoteMode];

/**
 * @public
 * <p>Promotes a data replication replica broker to the primary broker role.</p>
 */
export interface PromoteRequest {
  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId: string | undefined;

  /**
   * @public
   * <p>The Promote mode requested. Note: Valid values for the parameter are SWITCHOVER, FAILOVER.</p>
   */
  Mode: PromoteMode | undefined;
}

/**
 * @public
 */
export interface PromoteResponse {
  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId?: string;
}

/**
 * @public
 */
export interface RebootBrokerRequest {
  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId: string | undefined;
}

/**
 * @public
 */
export interface RebootBrokerResponse {}

/**
 * @public
 * <p>Updates the broker using the specified properties.</p>
 */
export interface UpdateBrokerRequest {
  /**
   * @public
   * <p>Optional. The authentication strategy used to secure the broker. The default is SIMPLE.</p>
   */
  AuthenticationStrategy?: AuthenticationStrategy;

  /**
   * @public
   * <p>Enables automatic upgrades to new minor versions for brokers, as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window of the broker or after a manual broker reboot.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId: string | undefined;

  /**
   * @public
   * <p>A list of information about the configuration.</p>
   */
  Configuration?: ConfigurationId;

  /**
   * @public
   * <p>The broker engine version. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The broker's host instance type to upgrade to. For a list of supported instance types, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker.html#broker-instance-types">Broker instance types</a>.</p>
   */
  HostInstanceType?: string;

  /**
   * @public
   * <p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers.</p>
   */
  LdapServerMetadata?: LdapServerMetadataInput;

  /**
   * @public
   * <p>Enables Amazon CloudWatch logging for brokers.</p>
   */
  Logs?: Logs;

  /**
   * @public
   * <p>The parameters that determine the WeeklyStartTime.</p>
   */
  MaintenanceWindowStartTime?: WeeklyStartTime;

  /**
   * @public
   * <p>The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>Defines whether this broker is a part of a data replication pair.</p>
   */
  DataReplicationMode?: DataReplicationMode;
}

/**
 * @public
 */
export interface UpdateBrokerResponse {
  /**
   * @public
   * <p>Optional. The authentication strategy used to secure the broker. The default is SIMPLE.</p>
   */
  AuthenticationStrategy?: AuthenticationStrategy;

  /**
   * @public
   * <p>The new boolean value that specifies whether broker engines automatically upgrade to new minor versions as new versions are released and supported by Amazon MQ.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * @public
   * <p>Required. The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId?: string;

  /**
   * @public
   * <p>The ID of the updated configuration.</p>
   */
  Configuration?: ConfigurationId;

  /**
   * @public
   * <p>The broker engine version to upgrade to. For a list of supported engine versions, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker-engine.html">Supported engines</a>.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>The broker's host instance type to upgrade to. For a list of supported instance types, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker.html#broker-instance-types">Broker instance types</a>.</p>
   */
  HostInstanceType?: string;

  /**
   * @public
   * <p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers.</p>
   */
  LdapServerMetadata?: LdapServerMetadataOutput;

  /**
   * @public
   * <p>The list of information about logs to be enabled for the specified broker.</p>
   */
  Logs?: Logs;

  /**
   * @public
   * <p>The parameters that determine the WeeklyStartTime.</p>
   */
  MaintenanceWindowStartTime?: WeeklyStartTime;

  /**
   * @public
   * <p>The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>The replication details of the data replication-enabled broker. Only returned if dataReplicationMode is set to CRDR.</p>
   */
  DataReplicationMetadata?: DataReplicationMetadataOutput;

  /**
   * @public
   * <p>Describes whether this broker is a part of a data replication pair.</p>
   */
  DataReplicationMode?: DataReplicationMode;

  /**
   * @public
   * <p>The pending replication details of the data replication-enabled broker. Only returned if pendingDataReplicationMode is set to CRDR.</p>
   */
  PendingDataReplicationMetadata?: DataReplicationMetadataOutput;

  /**
   * @public
   * <p>Describes whether this broker will be a part of a data replication pair after reboot.</p>
   */
  PendingDataReplicationMode?: DataReplicationMode;
}

/**
 * @public
 * <p>Updates the specified configuration.</p>
 */
export interface UpdateConfigurationRequest {
  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the configuration.</p>
   */
  ConfigurationId: string | undefined;

  /**
   * @public
   * <p>Amazon MQ for Active MQ: The base64-encoded XML configuration. Amazon MQ for RabbitMQ: the base64-encoded Cuttlefish configuration.</p>
   */
  Data: string | undefined;

  /**
   * @public
   * <p>The description of the configuration.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateConfigurationResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>Required. The date and time of the configuration.</p>
   */
  Created?: Date;

  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the configuration.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The latest revision of the configuration.</p>
   */
  LatestRevision?: ConfigurationRevision;

  /**
   * @public
   * <p>The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The list of the first 20 warnings about the configuration elements or attributes that were sanitized.</p>
   */
  Warnings?: SanitizationWarning[];
}

/**
 * @public
 * <p>Updates the information for an ActiveMQ user.</p>
 */
export interface UpdateUserRequest {
  /**
   * @public
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   */
  BrokerId: string | undefined;

  /**
   * @public
   * <p>Enables access to the the ActiveMQ Web Console for the ActiveMQ user.</p>
   */
  ConsoleAccess?: boolean;

  /**
   * @public
   * <p>The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Groups?: string[];

  /**
   * @public
   * <p>The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).</p>
   */
  Password?: string;

  /**
   * @public
   * <p>The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   */
  Username: string | undefined;

  /**
   * @public
   * <p>Defines whether the user is intended for data replication.</p>
   */
  ReplicationUser?: boolean;
}

/**
 * @public
 */
export interface UpdateUserResponse {}
