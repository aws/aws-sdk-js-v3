// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MqServiceException as __BaseException } from "./MqServiceException";

/**
 * <p>Action required for a broker.</p>
 * @public
 */
export interface ActionRequired {
  /**
   * <p>The code you can use to find instructions on the action required to resolve your broker issue.</p>
   * @public
   */
  ActionRequiredCode?: string | undefined;

  /**
   * <p>Information about the action required to resolve your broker issue.</p>
   * @public
   */
  ActionRequiredInfo?: string | undefined;
}

/**
 * <p>Name of the availability zone.</p>
 * @public
 */
export interface AvailabilityZone {
  /**
   * <p>Id for the availability zone.</p>
   * @public
   */
  Name?: string | undefined;
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
 * <p>Id of the engine version.</p>
 * @public
 */
export interface EngineVersion {
  /**
   * <p>Id for the version.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Types of broker engines.</p>
 * @public
 */
export interface BrokerEngineType {
  /**
   * <p>The broker's engine type.</p>
   * @public
   */
  EngineType?: EngineType | undefined;

  /**
   * <p>The list of engine versions.</p>
   * @public
   */
  EngineVersions?: EngineVersion[] | undefined;
}

/**
 * <p>Returns information about all brokers.</p>
 * @public
 */
export interface BrokerInstance {
  /**
   * <p>The brokers web console URL.</p>
   * @public
   */
  ConsoleURL?: string | undefined;

  /**
   * <p>The broker's wire-level protocol endpoints.</p>
   * @public
   */
  Endpoints?: string[] | undefined;

  /**
   * <p>The IP address of the Elastic Network Interface (ENI) attached to the broker. Does not apply to RabbitMQ brokers.</p>
   * @public
   */
  IpAddress?: string | undefined;
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
 * <p>Option for host instance type.</p>
 * @public
 */
export interface BrokerInstanceOption {
  /**
   * <p>The list of available az.</p>
   * @public
   */
  AvailabilityZones?: AvailabilityZone[] | undefined;

  /**
   * <p>The broker's engine type.</p>
   * @public
   */
  EngineType?: EngineType | undefined;

  /**
   * <p>The broker's instance type.</p>
   * @public
   */
  HostInstanceType?: string | undefined;

  /**
   * <p>The broker's storage type.</p>
   * @public
   */
  StorageType?: BrokerStorageType | undefined;

  /**
   * <p>The list of supported deployment modes.</p>
   * @public
   */
  SupportedDeploymentModes?: DeploymentMode[] | undefined;

  /**
   * <p>The list of supported engine versions.</p>
   * @public
   */
  SupportedEngineVersions?: string[] | undefined;
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
 * <p>Returns information about all brokers.</p>
 * @public
 */
export interface BrokerSummary {
  /**
   * <p>The broker's Amazon Resource Name (ARN).</p>
   * @public
   */
  BrokerArn?: string | undefined;

  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   * @public
   */
  BrokerId?: string | undefined;

  /**
   * <p>The broker's name. This value is unique in your Amazon Web Services account, 1-50 characters long, and containing only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.</p>
   * @public
   */
  BrokerName?: string | undefined;

  /**
   * <p>The broker's status.</p>
   * @public
   */
  BrokerState?: BrokerState | undefined;

  /**
   * <p>The time when the broker was created.</p>
   * @public
   */
  Created?: Date | undefined;

  /**
   * <p>The broker's deployment mode.</p>
   * @public
   */
  DeploymentMode: DeploymentMode | undefined;

  /**
   * <p>The type of broker engine.</p>
   * @public
   */
  EngineType: EngineType | undefined;

  /**
   * <p>The broker's instance type.</p>
   * @public
   */
  HostInstanceType?: string | undefined;
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
 * <p>Returns information about the specified configuration revision.</p>
 * @public
 */
export interface ConfigurationRevision {
  /**
   * <p>Required. The date and time of the configuration revision.</p>
   * @public
   */
  Created: Date | undefined;

  /**
   * <p>The description of the configuration revision.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Required. The revision number of the configuration.</p>
   * @public
   */
  Revision: number | undefined;
}

/**
 * <p>Returns information about all configurations.</p>
 * @public
 */
export interface Configuration {
  /**
   * <p>Required. The ARN of the configuration.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>Optional. The authentication strategy associated with the configuration. The default is SIMPLE.</p>
   * @public
   */
  AuthenticationStrategy: AuthenticationStrategy | undefined;

  /**
   * <p>Required. The date and time of the configuration revision.</p>
   * @public
   */
  Created: Date | undefined;

  /**
   * <p>Required. The description of the configuration.</p>
   * @public
   */
  Description: string | undefined;

  /**
   * <p>Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.</p>
   * @public
   */
  EngineType: EngineType | undefined;

  /**
   * <p>The broker engine version. Defaults to the latest available version for the specified broker engine type. For a list of supported engine versions, see the <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/activemq-version-management.html">ActiveMQ version management</a> and the <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/rabbitmq-version-management.html">RabbitMQ version management</a> sections in the Amazon MQ Developer Guide.</p>
   * @public
   */
  EngineVersion: string | undefined;

  /**
   * <p>Required. The unique ID that Amazon MQ generates for the configuration.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>Required. The latest revision of the configuration.</p>
   * @public
   */
  LatestRevision: ConfigurationRevision | undefined;

  /**
   * <p>Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The list of all tags associated with this configuration.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>A list of information about the configuration.</p>
 * @public
 */
export interface ConfigurationId {
  /**
   * <p>Required. The unique ID that Amazon MQ generates for the configuration.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The revision number of the configuration.</p>
   * @public
   */
  Revision?: number | undefined;
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
 * <p>Returns information about the configuration element or attribute that was sanitized in the configuration.</p>
 * @public
 */
export interface SanitizationWarning {
  /**
   * <p>The name of the configuration attribute that has been sanitized.</p>
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * <p>The name of the configuration element that has been sanitized.</p>
   * @public
   */
  ElementName?: string | undefined;

  /**
   * <p>The reason for which the configuration elements or attributes were sanitized.</p>
   * @public
   */
  Reason: SanitizationWarningReason | undefined;
}

/**
 * <p>A user associated with the broker. For Amazon MQ for RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created by making RabbitMQ API calls directly to brokers or via the RabbitMQ web console.</p>
 * @public
 */
export interface User {
  /**
   * <p>Enables access to the ActiveMQ Web Console for the ActiveMQ user. Does not apply to RabbitMQ brokers.</p>
   * @public
   */
  ConsoleAccess?: boolean | undefined;

  /**
   * <p>The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long. Does not apply to RabbitMQ brokers.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).</p>
   * @public
   */
  Password: string | undefined;

  /**
   * <p>The username of the broker user. The following restrictions apply to broker usernames:</p> <ul><li><p>For Amazon MQ for ActiveMQ brokers, this value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p></li> <li><p>para>For Amazon MQ for RabbitMQ brokers, this value can contain only alphanumeric characters, dashes, periods, underscores (- . _). This value must not contain a tilde (~) character. Amazon MQ prohibts using guest as a valid usename. This value must be 2-100 characters long.</p></para></li></ul> <important><p>Do not add personally identifiable information (PII) or other confidential or sensitive information in broker usernames. Broker usernames are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker usernames are not intended to be used for private or sensitive data.</p></important>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>Defines if this user is intended for CRDR replication purposes.</p>
   * @public
   */
  ReplicationUser?: boolean | undefined;
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
 * <p>Returns a list of all broker users. Does not apply to RabbitMQ brokers.</p>
 * @public
 */
export interface UserSummary {
  /**
   * <p>The type of change pending for the broker user.</p>
   * @public
   */
  PendingChange?: ChangeType | undefined;

  /**
   * <p>Required. The username of the broker user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   * @public
   */
  Username: string | undefined;
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * <p>The attribute which caused the error.</p>
   * @public
   */
  ErrorAttribute?: string | undefined;

  /**
   * <p>The explanation of the error.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Broker configuration information</p>
 * @public
 */
export interface Configurations {
  /**
   * <p>The broker's current configuration.</p>
   * @public
   */
  Current?: ConfigurationId | undefined;

  /**
   * <p>The history of configurations applied to the broker.</p>
   * @public
   */
  History?: ConfigurationId[] | undefined;

  /**
   * <p>The broker's pending configuration.</p>
   * @public
   */
  Pending?: ConfigurationId | undefined;
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * <p>The attribute which caused the error.</p>
   * @public
   */
  ErrorAttribute?: string | undefined;

  /**
   * <p>The explanation of the error.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Encryption options for the broker.</p>
 * @public
 */
export interface EncryptionOptions {
  /**
   * <p>The customer master key (CMK) to use for the A KMS (KMS). This key is used to encrypt your data at rest. If not provided, Amazon MQ will use a default CMK to encrypt your data.</p>
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * <p>Enables the use of an Amazon Web Services owned CMK using KMS (KMS). Set to true by default, if no value is provided, for example, for RabbitMQ brokers.</p>
   * @public
   */
  UseAwsOwnedKey: boolean | undefined;
}

/**
 * <p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.</p> <important><p>Does not apply to RabbitMQ brokers.</p></important>
 * @public
 */
export interface LdapServerMetadataInput {
  /**
   * <p>Specifies the location of the LDAP server such as Directory Service for Microsoft Active Directory. Optional failover server.</p>
   * @public
   */
  Hosts: string[] | undefined;

  /**
   * <p>The distinguished name of the node in the directory information tree (DIT) to search for roles or groups. For example, ou=group, ou=corp, dc=corp,
   *                   dc=example, dc=com.</p>
   * @public
   */
  RoleBase: string | undefined;

  /**
   * <p>Specifies the LDAP attribute that identifies the group name attribute in the object returned from the group membership query.</p>
   * @public
   */
  RoleName?: string | undefined;

  /**
   * <p>The LDAP search filter used to find roles within the roleBase. The distinguished name of the user matched by userSearchMatching is substituted into the \{0\} placeholder in the search filter. The client's username is substituted into the \{1\} placeholder. For example, if you set this option to (member=uid=\{1\})for the user janedoe, the search filter becomes (member=uid=janedoe) after string substitution. It matches all role entries that have a member attribute equal to uid=janedoe under the subtree selected by the roleBase.</p>
   * @public
   */
  RoleSearchMatching: string | undefined;

  /**
   * <p>The directory search scope for the role. If set to true, scope is to search the entire subtree.</p>
   * @public
   */
  RoleSearchSubtree?: boolean | undefined;

  /**
   * <p>Service account password. A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example,
   *                   dc=com.</p>
   * @public
   */
  ServiceAccountPassword: string | undefined;

  /**
   * <p>Service account username. A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example,
   *                   dc=com.</p>
   * @public
   */
  ServiceAccountUsername: string | undefined;

  /**
   * <p>Select a particular subtree of the directory information tree (DIT) to search for user entries. The subtree is specified by a DN, which specifies the base node of the subtree. For example, by setting this option to ou=Users,ou=corp, dc=corp,
   *                   dc=example, dc=com, the search for user entries is restricted to the subtree beneath ou=Users, ou=corp, dc=corp, dc=example, dc=com.</p>
   * @public
   */
  UserBase: string | undefined;

  /**
   * <p>Specifies the name of the LDAP attribute for the user group membership.</p>
   * @public
   */
  UserRoleName?: string | undefined;

  /**
   * <p>The LDAP search filter used to find users within the userBase. The client's username is substituted into the \{0\} placeholder in the search filter. For example, if this option is set to (uid=\{0\}) and the received username is janedoe, the search filter becomes (uid=janedoe) after string substitution. It will result in matching an entry like uid=janedoe, ou=Users,ou=corp, dc=corp, dc=example,
   *                   dc=com.</p>
   * @public
   */
  UserSearchMatching: string | undefined;

  /**
   * <p>The directory search scope for the user. If set to true, scope is to search the entire subtree.</p>
   * @public
   */
  UserSearchSubtree?: boolean | undefined;
}

/**
 * <p>The list of information about logs to be enabled for the specified broker.</p>
 * @public
 */
export interface Logs {
  /**
   * <p>Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged. Does not apply to RabbitMQ brokers.</p>
   * @public
   */
  Audit?: boolean | undefined;

  /**
   * <p>Enables general logging.</p>
   * @public
   */
  General?: boolean | undefined;
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
 * <p>The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.</p>
 * @public
 */
export interface WeeklyStartTime {
  /**
   * <p>Required. The day of the week.</p>
   * @public
   */
  DayOfWeek: DayOfWeek | undefined;

  /**
   * <p>Required. The time, in 24-hour format.</p>
   * @public
   */
  TimeOfDay: string | undefined;

  /**
   * <p>The time zone, UTC by default, in either the Country/City format, or the UTC offset format.</p>
   * @public
   */
  TimeZone?: string | undefined;
}

/**
 * <p>Creates a broker using the specified properties.</p>
 * @public
 */
export interface CreateBrokerRequest {
  /**
   * <p>Optional. The authentication strategy used to secure the broker. The default is SIMPLE.</p>
   * @public
   */
  AuthenticationStrategy?: AuthenticationStrategy | undefined;

  /**
   * <p>Enables automatic upgrades to new patch versions for brokers as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window or after a manual broker reboot. Set to true by default, if no value is specified.</p> <note><p>Must be set to true for ActiveMQ brokers version 5.18 and above and for RabbitMQ brokers version 3.13 and above.</p></note>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>Required. The broker's name. This value must be unique in your Amazon Web Services account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.</p> <important><p>Do not add personally identifiable information (PII) or other confidential or sensitive information in broker names. Broker names are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker names are not intended to be used for private or sensitive data.</p></important>
   * @public
   */
  BrokerName: string | undefined;

  /**
   * <p>A list of information about the configuration.</p>
   * @public
   */
  Configuration?: ConfigurationId | undefined;

  /**
   * <p>The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action.</p> <note><p>We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency.</p></note>
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * <p>Required. The broker's deployment mode.</p>
   * @public
   */
  DeploymentMode: DeploymentMode | undefined;

  /**
   * <p>Encryption options for the broker.</p>
   * @public
   */
  EncryptionOptions?: EncryptionOptions | undefined;

  /**
   * <p>Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.</p>
   * @public
   */
  EngineType: EngineType | undefined;

  /**
   * <p>The broker engine version. Defaults to the latest available version for the specified broker engine type. For more information, see the <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/activemq-version-management.html">ActiveMQ version management</a> and the <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/rabbitmq-version-management.html">RabbitMQ version management</a> sections in the Amazon MQ Developer Guide.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Required. The broker's instance type.</p>
   * @public
   */
  HostInstanceType: string | undefined;

  /**
   * <p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers.</p>
   * @public
   */
  LdapServerMetadata?: LdapServerMetadataInput | undefined;

  /**
   * <p>Enables Amazon CloudWatch logging for brokers.</p>
   * @public
   */
  Logs?: Logs | undefined;

  /**
   * <p>The parameters that determine the WeeklyStartTime.</p>
   * @public
   */
  MaintenanceWindowStartTime?: WeeklyStartTime | undefined;

  /**
   * <p>Enables connections from applications outside of the VPC that hosts the broker's subnets. Set to false by default, if no value is provided.</p>
   * @public
   */
  PubliclyAccessible: boolean | undefined;

  /**
   * <p>The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>The broker's storage type.</p>
   * @public
   */
  StorageType?: BrokerStorageType | undefined;

  /**
   * <p>The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones. If you specify more than one subnet, the subnets must be in different Availability Zones. Amazon MQ will not be able to create VPC endpoints for your broker with multiple subnets in the same Availability Zone. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ Amazon MQ for ActiveMQ deployment requires two subnets. A CLUSTER_MULTI_AZ Amazon MQ for RabbitMQ deployment has no subnet requirements when deployed with public accessibility. Deployment without public accessibility requires at least one subnet.</p> <important><p>If you specify subnets in a <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html">shared VPC</a> for a RabbitMQ broker, the associated VPC to which the specified subnets belong must be owned by your Amazon Web Services account. Amazon MQ will not be able to create VPC endpoints in VPCs that are not owned by your Amazon Web Services account.</p></important>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>Create tags when creating the broker.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The list of broker users (persons or applications) who can access queues and topics. For Amazon MQ for RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created by making RabbitMQ API calls directly to brokers or via the RabbitMQ web console.</p>
   * @public
   */
  Users: User[] | undefined;

  /**
   * <p>Defines whether this broker is a part of a data replication pair.</p>
   * @public
   */
  DataReplicationMode?: DataReplicationMode | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the primary broker that is used to replicate data from in a data replication pair, and is applied to the replica broker. Must be set when dataReplicationMode is set to CRDR.</p>
   * @public
   */
  DataReplicationPrimaryBrokerArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateBrokerResponse {
  /**
   * <p>The broker's Amazon Resource Name (ARN).</p>
   * @public
   */
  BrokerArn?: string | undefined;

  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   * @public
   */
  BrokerId?: string | undefined;
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * <p>The attribute which caused the error.</p>
   * @public
   */
  ErrorAttribute?: string | undefined;

  /**
   * <p>The explanation of the error.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Returns information about an error.</p>
 * @public
 */
export class InternalServerErrorException extends __BaseException {
  readonly name: "InternalServerErrorException" = "InternalServerErrorException";
  readonly $fault: "server" = "server";
  /**
   * <p>The attribute which caused the error.</p>
   * @public
   */
  ErrorAttribute?: string | undefined;

  /**
   * <p>The explanation of the error.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Returns information about an error.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The attribute which caused the error.</p>
   * @public
   */
  ErrorAttribute?: string | undefined;

  /**
   * <p>The explanation of the error.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).</p>
 * @public
 */
export interface CreateConfigurationRequest {
  /**
   * <p>Optional. The authentication strategy associated with the configuration. The default is SIMPLE.</p>
   * @public
   */
  AuthenticationStrategy?: AuthenticationStrategy | undefined;

  /**
   * <p>Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.</p>
   * @public
   */
  EngineType: EngineType | undefined;

  /**
   * <p>The broker engine version. Defaults to the latest available version for the specified broker engine type. For more information, see the <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/activemq-version-management.html">ActiveMQ version management</a> and the <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/rabbitmq-version-management.html">RabbitMQ version management</a> sections in the Amazon MQ Developer Guide.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Create tags when creating the configuration.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationResponse {
  /**
   * <p>Required. The Amazon Resource Name (ARN) of the configuration.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Optional. The authentication strategy associated with the configuration. The default is SIMPLE.</p>
   * @public
   */
  AuthenticationStrategy?: AuthenticationStrategy | undefined;

  /**
   * <p>Required. The date and time of the configuration.</p>
   * @public
   */
  Created?: Date | undefined;

  /**
   * <p>Required. The unique ID that Amazon MQ generates for the configuration.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The latest revision of the configuration.</p>
   * @public
   */
  LatestRevision?: ConfigurationRevision | undefined;

  /**
   * <p>Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>A map of the key-value pairs for the resource tag.</p>
 * @public
 */
export interface CreateTagsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource tag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The key-value pair for the resource tag.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * <p>Returns information about an error.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>The attribute which caused the error.</p>
   * @public
   */
  ErrorAttribute?: string | undefined;

  /**
   * <p>The explanation of the error.</p>
   * @public
   */
  Message?: string | undefined;
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
 * <p>Creates a new ActiveMQ user.</p>
 * @public
 */
export interface CreateUserRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   * @public
   */
  BrokerId: string | undefined;

  /**
   * <p>Enables access to the ActiveMQ Web Console for the ActiveMQ user.</p>
   * @public
   */
  ConsoleAccess?: boolean | undefined;

  /**
   * <p>The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).</p>
   * @public
   */
  Password: string | undefined;

  /**
   * <p>The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>Defines if this user is intended for CRDR replication purposes.</p>
   * @public
   */
  ReplicationUser?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {}

/**
 * <p>Specifies a broker in a data replication pair.</p>
 * @public
 */
export interface DataReplicationCounterpart {
  /**
   * <p>Required. The unique broker id generated by Amazon MQ.</p>
   * @public
   */
  BrokerId: string | undefined;

  /**
   * <p>Required. The region of the broker.</p>
   * @public
   */
  Region: string | undefined;
}

/**
 * <p>The replication details of the data replication-enabled broker. Only returned if dataReplicationMode or pendingDataReplicationMode is set to CRDR.</p>
 * @public
 */
export interface DataReplicationMetadataOutput {
  /**
   * <p>Describes the replica/primary broker. Only returned if this broker is currently set as a primary or replica in the broker's dataReplicationRole property.</p>
   * @public
   */
  DataReplicationCounterpart?: DataReplicationCounterpart | undefined;

  /**
   * <p>Defines the role of this broker in a data replication pair. When a replica broker is promoted to primary, this role is interchanged.</p>
   * @public
   */
  DataReplicationRole: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrokerRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   * @public
   */
  BrokerId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrokerResponse {
  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   * @public
   */
  BrokerId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTagsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource tag.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>An array of tag keys to delete</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   * @public
   */
  BrokerId: string | undefined;

  /**
   * <p>The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   * @public
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
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   * @public
   */
  BrokerId: string | undefined;
}

/**
 * <p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.</p>
 * @public
 */
export interface LdapServerMetadataOutput {
  /**
   * <p>Specifies the location of the LDAP server such as Directory Service for Microsoft Active Directory. Optional failover server.</p>
   * @public
   */
  Hosts: string[] | undefined;

  /**
   * <p>The distinguished name of the node in the directory information tree (DIT) to search for roles or groups. For example, ou=group, ou=corp, dc=corp,
   *                   dc=example, dc=com.</p>
   * @public
   */
  RoleBase: string | undefined;

  /**
   * <p>Specifies the LDAP attribute that identifies the group name attribute in the object returned from the group membership query.</p>
   * @public
   */
  RoleName?: string | undefined;

  /**
   * <p>The LDAP search filter used to find roles within the roleBase. The distinguished name of the user matched by userSearchMatching is substituted into the \{0\} placeholder in the search filter. The client's username is substituted into the \{1\} placeholder. For example, if you set this option to (member=uid=\{1\})for the user janedoe, the search filter becomes (member=uid=janedoe) after string substitution. It matches all role entries that have a member attribute equal to uid=janedoe under the subtree selected by the roleBase.</p>
   * @public
   */
  RoleSearchMatching: string | undefined;

  /**
   * <p>The directory search scope for the role. If set to true, scope is to search the entire subtree.</p>
   * @public
   */
  RoleSearchSubtree?: boolean | undefined;

  /**
   * <p>Service account username. A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example,
   *                   dc=com.</p>
   * @public
   */
  ServiceAccountUsername: string | undefined;

  /**
   * <p>Select a particular subtree of the directory information tree (DIT) to search for user entries. The subtree is specified by a DN, which specifies the base node of the subtree. For example, by setting this option to ou=Users,ou=corp, dc=corp,
   *                   dc=example, dc=com, the search for user entries is restricted to the subtree beneath ou=Users, ou=corp, dc=corp, dc=example, dc=com.</p>
   * @public
   */
  UserBase: string | undefined;

  /**
   * <p>Specifies the name of the LDAP attribute for the user group membership.</p>
   * @public
   */
  UserRoleName?: string | undefined;

  /**
   * <p>The LDAP search filter used to find users within the userBase. The client's username is substituted into the \{0\} placeholder in the search filter. For example, if this option is set to (uid=\{0\}) and the received username is janedoe, the search filter becomes (uid=janedoe) after string substitution. It will result in matching an entry like uid=janedoe, ou=Users,ou=corp, dc=corp, dc=example,
   *                dc=com.</p>
   * @public
   */
  UserSearchMatching: string | undefined;

  /**
   * <p>The directory search scope for the user. If set to true, scope is to search the entire subtree.</p>
   * @public
   */
  UserSearchSubtree?: boolean | undefined;
}

/**
 * <p>The list of information about logs to be enabled for the specified broker.</p>
 * @public
 */
export interface PendingLogs {
  /**
   * <p>Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged.</p>
   * @public
   */
  Audit?: boolean | undefined;

  /**
   * <p>Enables general logging.</p>
   * @public
   */
  General?: boolean | undefined;
}

/**
 * <p>The list of information about logs currently enabled and pending to be deployed for the specified broker.</p>
 * @public
 */
export interface LogsSummary {
  /**
   * <p>Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged.</p>
   * @public
   */
  Audit?: boolean | undefined;

  /**
   * <p>The location of the CloudWatch Logs log group where audit logs are sent.</p>
   * @public
   */
  AuditLogGroup?: string | undefined;

  /**
   * <p>Enables general logging.</p>
   * @public
   */
  General: boolean | undefined;

  /**
   * <p>The location of the CloudWatch Logs log group where general logs are sent.</p>
   * @public
   */
  GeneralLogGroup: string | undefined;

  /**
   * <p>The list of information about logs pending to be deployed for the specified broker.</p>
   * @public
   */
  Pending?: PendingLogs | undefined;
}

/**
 * @public
 */
export interface DescribeBrokerResponse {
  /**
   * <p>Actions required for a broker.</p>
   * @public
   */
  ActionsRequired?: ActionRequired[] | undefined;

  /**
   * <p>The authentication strategy used to secure the broker. The default is SIMPLE.</p>
   * @public
   */
  AuthenticationStrategy?: AuthenticationStrategy | undefined;

  /**
   * <p>Enables automatic upgrades to new patch versions for brokers as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window or after a manual broker reboot.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>The broker's Amazon Resource Name (ARN).</p>
   * @public
   */
  BrokerArn?: string | undefined;

  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   * @public
   */
  BrokerId?: string | undefined;

  /**
   * <p>A list of information about allocated brokers.</p>
   * @public
   */
  BrokerInstances?: BrokerInstance[] | undefined;

  /**
   * <p>The broker's name. This value must be unique in your Amazon Web Services account account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.</p>
   * @public
   */
  BrokerName?: string | undefined;

  /**
   * <p>The broker's status.</p>
   * @public
   */
  BrokerState?: BrokerState | undefined;

  /**
   * <p>The list of all revisions for the specified configuration.</p>
   * @public
   */
  Configurations?: Configurations | undefined;

  /**
   * <p>The time when the broker was created.</p>
   * @public
   */
  Created?: Date | undefined;

  /**
   * <p>The broker's deployment mode.</p>
   * @public
   */
  DeploymentMode?: DeploymentMode | undefined;

  /**
   * <p>Encryption options for the broker.</p>
   * @public
   */
  EncryptionOptions?: EncryptionOptions | undefined;

  /**
   * <p>The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.</p>
   * @public
   */
  EngineType?: EngineType | undefined;

  /**
   * <p>The broker engine version. For more information, see the <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/activemq-version-management.html">ActiveMQ version management</a> and the <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/rabbitmq-version-management.html">RabbitMQ version management</a> sections in the Amazon MQ Developer Guide.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The broker's instance type.</p>
   * @public
   */
  HostInstanceType?: string | undefined;

  /**
   * <p>The metadata of the LDAP server used to authenticate and authorize connections to the broker.</p>
   * @public
   */
  LdapServerMetadata?: LdapServerMetadataOutput | undefined;

  /**
   * <p>The list of information about logs currently enabled and pending to be deployed for the specified broker.</p>
   * @public
   */
  Logs?: LogsSummary | undefined;

  /**
   * <p>The parameters that determine the WeeklyStartTime.</p>
   * @public
   */
  MaintenanceWindowStartTime?: WeeklyStartTime | undefined;

  /**
   * <p>The authentication strategy that will be applied when the broker is rebooted. The default is SIMPLE.</p>
   * @public
   */
  PendingAuthenticationStrategy?: AuthenticationStrategy | undefined;

  /**
   * <p>The broker engine version to upgrade to. For more information, see the <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/activemq-version-management.html">ActiveMQ version management</a> and the <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/rabbitmq-version-management.html">RabbitMQ version management</a> sections in the Amazon MQ Developer Guide.</p>
   * @public
   */
  PendingEngineVersion?: string | undefined;

  /**
   * <p>The broker's host instance type to upgrade to. For a list of supported instance types, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker.html#broker-instance-types">Broker instance types</a>.</p>
   * @public
   */
  PendingHostInstanceType?: string | undefined;

  /**
   * <p>The metadata of the LDAP server that will be used to authenticate and authorize connections to the broker after it is rebooted.</p>
   * @public
   */
  PendingLdapServerMetadata?: LdapServerMetadataOutput | undefined;

  /**
   * <p>The list of pending security groups to authorize connections to brokers.</p>
   * @public
   */
  PendingSecurityGroups?: string[] | undefined;

  /**
   * <p>Enables connections from applications outside of the VPC that hosts the broker's subnets.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>The broker's storage type.</p>
   * @public
   */
  StorageType?: BrokerStorageType | undefined;

  /**
   * <p>The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones.</p>
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * <p>The list of all tags associated with this broker.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The list of all broker usernames for the specified broker.</p>
   * @public
   */
  Users?: UserSummary[] | undefined;

  /**
   * <p>The replication details of the data replication-enabled broker. Only returned if dataReplicationMode is set to CRDR.</p>
   * @public
   */
  DataReplicationMetadata?: DataReplicationMetadataOutput | undefined;

  /**
   * <p>Describes whether this broker is a part of a data replication pair.</p>
   * @public
   */
  DataReplicationMode?: DataReplicationMode | undefined;

  /**
   * <p>The pending replication details of the data replication-enabled broker. Only returned if pendingDataReplicationMode is set to CRDR.</p>
   * @public
   */
  PendingDataReplicationMetadata?: DataReplicationMetadataOutput | undefined;

  /**
   * <p>Describes whether this broker will be a part of a data replication pair after reboot.</p>
   * @public
   */
  PendingDataReplicationMode?: DataReplicationMode | undefined;
}

/**
 * @public
 */
export interface DescribeBrokerEngineTypesRequest {
  /**
   * <p>Filter response by engine type.</p>
   * @public
   */
  EngineType?: string | undefined;

  /**
   * <p>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBrokerEngineTypesResponse {
  /**
   * <p>List of available engine types and versions.</p>
   * @public
   */
  BrokerEngineTypes?: BrokerEngineType[] | undefined;

  /**
   * <p>Required. The maximum number of engine types that can be returned per page (20 by default). This value must be an integer from 5 to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBrokerInstanceOptionsRequest {
  /**
   * <p>Filter response by engine type.</p>
   * @public
   */
  EngineType?: string | undefined;

  /**
   * <p>Filter response by host instance type.</p>
   * @public
   */
  HostInstanceType?: string | undefined;

  /**
   * <p>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Filter response by storage type.</p>
   * @public
   */
  StorageType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBrokerInstanceOptionsResponse {
  /**
   * <p>List of available broker instance options.</p>
   * @public
   */
  BrokerInstanceOptions?: BrokerInstanceOption[] | undefined;

  /**
   * <p>Required. The maximum number of instance options that can be returned per page (20 by default). This value must be an integer from 5 to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the configuration.</p>
   * @public
   */
  ConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationResponse {
  /**
   * <p>Required. The ARN of the configuration.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Optional. The authentication strategy associated with the configuration. The default is SIMPLE.</p>
   * @public
   */
  AuthenticationStrategy?: AuthenticationStrategy | undefined;

  /**
   * <p>Required. The date and time of the configuration revision.</p>
   * @public
   */
  Created?: Date | undefined;

  /**
   * <p>Required. The description of the configuration.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.</p>
   * @public
   */
  EngineType?: EngineType | undefined;

  /**
   * <p>The broker engine version. Defaults to the latest available version for the specified broker engine type. For a list of supported engine versions, see the <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/activemq-version-management.html">ActiveMQ version management</a> and the <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/rabbitmq-version-management.html">RabbitMQ version management</a> sections in the Amazon MQ Developer Guide.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Required. The unique ID that Amazon MQ generates for the configuration.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>Required. The latest revision of the configuration.</p>
   * @public
   */
  LatestRevision?: ConfigurationRevision | undefined;

  /**
   * <p>Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The list of all tags associated with this configuration.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationRevisionRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the configuration.</p>
   * @public
   */
  ConfigurationId: string | undefined;

  /**
   * <p>The revision of the configuration.</p>
   * @public
   */
  ConfigurationRevision: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationRevisionResponse {
  /**
   * <p>Required. The unique ID that Amazon MQ generates for the configuration.</p>
   * @public
   */
  ConfigurationId?: string | undefined;

  /**
   * <p>Required. The date and time of the configuration.</p>
   * @public
   */
  Created?: Date | undefined;

  /**
   * <p>Amazon MQ for ActiveMQ: the base64-encoded XML configuration. Amazon MQ for RabbitMQ: base64-encoded Cuttlefish.</p>
   * @public
   */
  Data?: string | undefined;

  /**
   * <p>The description of the configuration.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface DescribeUserRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   * @public
   */
  BrokerId: string | undefined;

  /**
   * <p>The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   * @public
   */
  Username: string | undefined;
}

/**
 * <p>Returns information about the status of the changes pending for the ActiveMQ user.</p>
 * @public
 */
export interface UserPendingChanges {
  /**
   * <p>Enables access to the the ActiveMQ Web Console for the ActiveMQ user.</p>
   * @public
   */
  ConsoleAccess?: boolean | undefined;

  /**
   * <p>The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>Required. The type of change pending for the ActiveMQ user.</p>
   * @public
   */
  PendingChange: ChangeType | undefined;
}

/**
 * @public
 */
export interface DescribeUserResponse {
  /**
   * <p>Required. The unique ID that Amazon MQ generates for the broker.</p>
   * @public
   */
  BrokerId?: string | undefined;

  /**
   * <p>Enables access to the the ActiveMQ Web Console for the ActiveMQ user.</p>
   * @public
   */
  ConsoleAccess?: boolean | undefined;

  /**
   * <p>The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>The status of the changes pending for the ActiveMQ user.</p>
   * @public
   */
  Pending?: UserPendingChanges | undefined;

  /**
   * <p>Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>Describes whether the user is intended for data replication</p>
   * @public
   */
  ReplicationUser?: boolean | undefined;
}

/**
 * @public
 */
export interface ListBrokersRequest {
  /**
   * <p>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBrokersResponse {
  /**
   * <p>A list of information about all brokers.</p>
   * @public
   */
  BrokerSummaries?: BrokerSummary[] | undefined;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationRevisionsRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the configuration.</p>
   * @public
   */
  ConfigurationId: string | undefined;

  /**
   * <p>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationRevisionsResponse {
  /**
   * <p>The unique ID that Amazon MQ generates for the configuration.</p>
   * @public
   */
  ConfigurationId?: string | undefined;

  /**
   * <p>The maximum number of configuration revisions that can be returned per page (20 by default). This value must be an integer from 5 to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The list of all revisions for the specified configuration.</p>
   * @public
   */
  Revisions?: ConfigurationRevision[] | undefined;
}

/**
 * @public
 */
export interface ListConfigurationsRequest {
  /**
   * <p>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationsResponse {
  /**
   * <p>The list of all revisions for the specified configuration.</p>
   * @public
   */
  Configurations?: Configuration[] | undefined;

  /**
   * <p>The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource tag.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsResponse {
  /**
   * <p>The key-value pair for the resource tag.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   * @public
   */
  BrokerId: string | undefined;

  /**
   * <p>The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * <p>Required. The unique ID that Amazon MQ generates for the broker.</p>
   * @public
   */
  BrokerId?: string | undefined;

  /**
   * <p>Required. The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Required. The list of all ActiveMQ usernames for the specified broker. Does not apply to RabbitMQ brokers.</p>
   * @public
   */
  Users?: UserSummary[] | undefined;
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
 * <p>Promotes a data replication replica broker to the primary broker role.</p>
 * @public
 */
export interface PromoteRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   * @public
   */
  BrokerId: string | undefined;

  /**
   * <p>The Promote mode requested. Note: Valid values for the parameter are SWITCHOVER, FAILOVER.</p>
   * @public
   */
  Mode: PromoteMode | undefined;
}

/**
 * @public
 */
export interface PromoteResponse {
  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   * @public
   */
  BrokerId?: string | undefined;
}

/**
 * @public
 */
export interface RebootBrokerRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   * @public
   */
  BrokerId: string | undefined;
}

/**
 * @public
 */
export interface RebootBrokerResponse {}

/**
 * <p>Updates the broker using the specified properties.</p>
 * @public
 */
export interface UpdateBrokerRequest {
  /**
   * <p>Optional. The authentication strategy used to secure the broker. The default is SIMPLE.</p>
   * @public
   */
  AuthenticationStrategy?: AuthenticationStrategy | undefined;

  /**
   * <p>Enables automatic upgrades to new patch versions for brokers as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window or after a manual broker reboot.</p> <note><p>Must be set to true for ActiveMQ brokers version 5.18 and above and for RabbitMQ brokers version 3.13 and above.</p></note>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   * @public
   */
  BrokerId: string | undefined;

  /**
   * <p>A list of information about the configuration.</p>
   * @public
   */
  Configuration?: ConfigurationId | undefined;

  /**
   * <p>The broker engine version. For more information, see the <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/activemq-version-management.html">ActiveMQ version management</a> and the <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/rabbitmq-version-management.html">RabbitMQ version management</a> sections in the Amazon MQ Developer Guide.</p> <note><p>When upgrading to ActiveMQ version 5.18 and above or RabbitMQ version 3.13 and above, you must have autoMinorVersionUpgrade set to true for the broker.</p></note>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The broker's host instance type to upgrade to. For a list of supported instance types, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker.html#broker-instance-types">Broker instance types</a>.</p>
   * @public
   */
  HostInstanceType?: string | undefined;

  /**
   * <p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers.</p>
   * @public
   */
  LdapServerMetadata?: LdapServerMetadataInput | undefined;

  /**
   * <p>Enables Amazon CloudWatch logging for brokers.</p>
   * @public
   */
  Logs?: Logs | undefined;

  /**
   * <p>The parameters that determine the WeeklyStartTime.</p>
   * @public
   */
  MaintenanceWindowStartTime?: WeeklyStartTime | undefined;

  /**
   * <p>The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>Defines whether this broker is a part of a data replication pair.</p>
   * @public
   */
  DataReplicationMode?: DataReplicationMode | undefined;
}

/**
 * @public
 */
export interface UpdateBrokerResponse {
  /**
   * <p>Optional. The authentication strategy used to secure the broker. The default is SIMPLE.</p>
   * @public
   */
  AuthenticationStrategy?: AuthenticationStrategy | undefined;

  /**
   * <p>Enables automatic upgrades to new patch versions for brokers as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window or after a manual broker reboot.</p>
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>Required. The unique ID that Amazon MQ generates for the broker.</p>
   * @public
   */
  BrokerId?: string | undefined;

  /**
   * <p>The ID of the updated configuration.</p>
   * @public
   */
  Configuration?: ConfigurationId | undefined;

  /**
   * <p>The broker engine version to upgrade to. For more information, see the <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/activemq-version-management.html">ActiveMQ version management</a> and the <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/rabbitmq-version-management.html">RabbitMQ version management</a> sections in the Amazon MQ Developer Guide.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>The broker's host instance type to upgrade to. For a list of supported instance types, see <a href="https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker.html#broker-instance-types">Broker instance types</a>.</p>
   * @public
   */
  HostInstanceType?: string | undefined;

  /**
   * <p>Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers.</p>
   * @public
   */
  LdapServerMetadata?: LdapServerMetadataOutput | undefined;

  /**
   * <p>The list of information about logs to be enabled for the specified broker.</p>
   * @public
   */
  Logs?: Logs | undefined;

  /**
   * <p>The parameters that determine the WeeklyStartTime.</p>
   * @public
   */
  MaintenanceWindowStartTime?: WeeklyStartTime | undefined;

  /**
   * <p>The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>The replication details of the data replication-enabled broker. Only returned if dataReplicationMode is set to CRDR.</p>
   * @public
   */
  DataReplicationMetadata?: DataReplicationMetadataOutput | undefined;

  /**
   * <p>Describes whether this broker is a part of a data replication pair.</p>
   * @public
   */
  DataReplicationMode?: DataReplicationMode | undefined;

  /**
   * <p>The pending replication details of the data replication-enabled broker. Only returned if pendingDataReplicationMode is set to CRDR.</p>
   * @public
   */
  PendingDataReplicationMetadata?: DataReplicationMetadataOutput | undefined;

  /**
   * <p>Describes whether this broker will be a part of a data replication pair after reboot.</p>
   * @public
   */
  PendingDataReplicationMode?: DataReplicationMode | undefined;
}

/**
 * <p>Updates the specified configuration.</p>
 * @public
 */
export interface UpdateConfigurationRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the configuration.</p>
   * @public
   */
  ConfigurationId: string | undefined;

  /**
   * <p>Amazon MQ for Active MQ: The base64-encoded XML configuration. Amazon MQ for RabbitMQ: the base64-encoded Cuttlefish configuration.</p>
   * @public
   */
  Data: string | undefined;

  /**
   * <p>The description of the configuration.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the configuration.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>Required. The date and time of the configuration.</p>
   * @public
   */
  Created?: Date | undefined;

  /**
   * <p>The unique ID that Amazon MQ generates for the configuration.</p>
   * @public
   */
  Id?: string | undefined;

  /**
   * <p>The latest revision of the configuration.</p>
   * @public
   */
  LatestRevision?: ConfigurationRevision | undefined;

  /**
   * <p>The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The list of the first 20 warnings about the configuration elements or attributes that were sanitized.</p>
   * @public
   */
  Warnings?: SanitizationWarning[] | undefined;
}

/**
 * <p>Updates the information for an ActiveMQ user.</p>
 * @public
 */
export interface UpdateUserRequest {
  /**
   * <p>The unique ID that Amazon MQ generates for the broker.</p>
   * @public
   */
  BrokerId: string | undefined;

  /**
   * <p>Enables access to the the ActiveMQ Web Console for the ActiveMQ user.</p>
   * @public
   */
  ConsoleAccess?: boolean | undefined;

  /**
   * <p>The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * <p>The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>Defines whether the user is intended for data replication.</p>
   * @public
   */
  ReplicationUser?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateUserResponse {}
