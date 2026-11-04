// smithy-typescript generated code
import type {
  AuthenticationStrategy,
  BrokerState,
  BrokerStorageType,
  ChangeType,
  DataReplicationMode,
  DayOfWeek,
  DeploymentMode,
  EngineType,
  PromoteMode,
  SanitizationWarningReason,
  SharedResourceErrorCode,
  SharedResourceStatus,
  SharedResourceType,
} from "./enums";

/**
 * Action required for a broker.
 *
 * @public
 */
export interface ActionRequired {
  /**
   * The code you can use to find instructions on the action required to resolve your broker issue.
   *
   * @public
   */
  ActionRequiredCode?: string | undefined;

  /**
   * Information about the action required to resolve your broker issue.
   *
   * @public
   */
  ActionRequiredInfo?: string | undefined;
}

/**
 * Name of the availability zone.
 *
 * @public
 */
export interface AvailabilityZone {
  /**
   * Id for the availability zone.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Id of the engine version.
 *
 * @public
 */
export interface EngineVersion {
  /**
   * Id for the version.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Types of broker engines.
 *
 * @public
 */
export interface BrokerEngineType {
  /**
   * The broker's engine type.
   *
   * @public
   */
  EngineType?: EngineType | undefined;

  /**
   * The list of engine versions.
   *
   * @public
   */
  EngineVersions?: EngineVersion[] | undefined;
}

/**
 * Returns information about all brokers.
 *
 * @public
 */
export interface BrokerInstance {
  /**
   * The brokers web console URL.
   *
   * @public
   */
  ConsoleURL?: string | undefined;

  /**
   * The broker's wire-level protocol endpoints.
   *
   * @public
   */
  Endpoints?: string[] | undefined;

  /**
   * The IP address of the Elastic Network Interface (ENI) attached to the broker. Does not apply to RabbitMQ brokers.
   *
   * @public
   */
  IpAddress?: string | undefined;
}

/**
 * Option for host instance type.
 *
 * @public
 */
export interface BrokerInstanceOption {
  /**
   * The list of available az.
   *
   * @public
   */
  AvailabilityZones?: AvailabilityZone[] | undefined;

  /**
   * The broker's engine type.
   *
   * @public
   */
  EngineType?: EngineType | undefined;

  /**
   * The broker's instance type.
   *
   * @public
   */
  HostInstanceType?: string | undefined;

  /**
   * The broker's storage type.
   *
   * @public
   */
  StorageType?: BrokerStorageType | undefined;

  /**
   * The list of supported deployment modes.
   *
   * @public
   */
  SupportedDeploymentModes?: DeploymentMode[] | undefined;

  /**
   * The list of supported engine versions.
   *
   * @public
   */
  SupportedEngineVersions?: string[] | undefined;
}

/**
 * Returns information about all brokers.
 *
 * @public
 */
export interface BrokerSummary {
  /**
   * The broker's Amazon Resource Name (ARN).
   *
   * @public
   */
  BrokerArn?: string | undefined;

  /**
   * The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId?: string | undefined;

  /**
   * The broker's name. This value is unique in your Amazon Web Services account, 1-50 characters long, and containing only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.
   *
   * @public
   */
  BrokerName?: string | undefined;

  /**
   * The broker's status.
   *
   * @public
   */
  BrokerState?: BrokerState | undefined;

  /**
   * The time when the broker was created.
   *
   * @public
   */
  Created?: Date | undefined;

  /**
   * The broker's deployment mode.
   *
   * @public
   */
  DeploymentMode: DeploymentMode | undefined;

  /**
   * The type of broker engine.
   *
   * @public
   */
  EngineType: EngineType | undefined;

  /**
   * The broker's instance type.
   *
   * @public
   */
  HostInstanceType?: string | undefined;
}

/**
 * Returns information about the specified configuration revision.
 *
 * @public
 */
export interface ConfigurationRevision {
  /**
   * Required. The date and time of the configuration revision.
   *
   * @public
   */
  Created: Date | undefined;

  /**
   * The description of the configuration revision.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Required. The revision number of the configuration.
   *
   * @public
   */
  Revision: number | undefined;
}

/**
 * Returns information about all configurations.
 *
 * @public
 */
export interface Configuration {
  /**
   * Required. The ARN of the configuration.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Optional. The authentication strategy associated with the configuration. The default is SIMPLE.
   *
   * @public
   */
  AuthenticationStrategy: AuthenticationStrategy | undefined;

  /**
   * Required. The date and time of the configuration revision.
   *
   * @public
   */
  Created: Date | undefined;

  /**
   * Required. The description of the configuration.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.
   *
   * @public
   */
  EngineType: EngineType | undefined;

  /**
   * The broker engine version. Defaults to the latest available version for the specified broker engine type. For a list of supported engine versions, see the [ActiveMQ version management](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/activemq-version-management.html) and the [RabbitMQ version management](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/rabbitmq-version-management.html) sections in the Amazon MQ Developer Guide.
   *
   * @public
   */
  EngineVersion: string | undefined;

  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * Required. The latest revision of the configuration.
   *
   * @public
   */
  LatestRevision: ConfigurationRevision | undefined;

  /**
   * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The list of all tags associated with this configuration.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * A list of information about the configuration.
 *
 * @public
 */
export interface ConfigurationId {
  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The revision number of the configuration.
   *
   * @public
   */
  Revision?: number | undefined;
}

/**
 * Returns info about the resource share error after updating the broker.
 *
 * @public
 */
export interface ResourceShareError {
  /**
   * The error code of the resource share.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The ARN of the resource share.
   *
   * @public
   */
  ResourceShareArn?: string | undefined;

  /**
   * The status of the resource share.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Returns information about the configuration element or attribute that was sanitized in the configuration.
 *
 * @public
 */
export interface SanitizationWarning {
  /**
   * The name of the configuration attribute that has been sanitized.
   *
   * @public
   */
  AttributeName?: string | undefined;

  /**
   * The name of the configuration element that has been sanitized.
   *
   * @public
   */
  ElementName?: string | undefined;

  /**
   * The reason for which the configuration elements or attributes were sanitized.
   *
   * @public
   */
  Reason: SanitizationWarningReason | undefined;
}

/**
 * Information on the error encountered by the resource.
 *
 * @public
 */
export interface SharedResourceError {
  /**
   * The error code associated with the error.
   *
   * @public
   */
  Code: SharedResourceErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  Message: string | undefined;
}

/**
 * Represents a resource that is shared with the broker, including its type, ARN, and current status.
 *
 * @public
 */
export interface SharedResource {
  /**
   * The DNS names accessible by the broker.
   *
   * @public
   */
  DnsNames?: string[] | undefined;

  /**
   * Information on the error encountered by the resource.
   *
   * @public
   */
  Error?: SharedResourceError | undefined;

  /**
   * The ARN of the shared resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The resource share ARNs to which the resource belongs.
   *
   * @public
   */
  ResourceShareArns?: string[] | undefined;

  /**
   * The status of the shared resource.
   *
   * @public
   */
  Status: SharedResourceStatus | undefined;

  /**
   * The type of shared resource.
   *
   * @public
   */
  Type: SharedResourceType | undefined;
}

/**
 * A user associated with the broker. For Amazon MQ for RabbitMQ brokers, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created by making RabbitMQ API calls directly to brokers or via the RabbitMQ web console.
 *
 * @public
 */
export interface User {
  /**
   * Enables access to the ActiveMQ Web Console for the ActiveMQ user. Does not apply to RabbitMQ brokers.
   *
   * @public
   */
  ConsoleAccess?: boolean | undefined;

  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long. Does not apply to RabbitMQ brokers.
   *
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).
   *
   * @public
   */
  Password: string | undefined;

  /**
   * The username of the broker user. The following restrictions apply to broker usernames:
   *
   * - For Amazon MQ for ActiveMQ brokers, this value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   * - para>For Amazon MQ for RabbitMQ brokers, this value can contain only alphanumeric characters, dashes, periods, underscores (- . _). This value must not contain a tilde (~) character. Amazon MQ prohibts using guest as a valid usename. This value must be 2-100 characters long.
   *
   *   </para>
   *
   * > **Important:** Do not add personally identifiable information (PII) or other confidential or sensitive information in broker usernames. Broker usernames are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker usernames are not intended to be used for private or sensitive data.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * Defines if this user is intended for CRDR replication purposes.
   *
   * @public
   */
  ReplicationUser?: boolean | undefined;
}

/**
 * Returns a list of all broker users. Does not apply to RabbitMQ brokers.
 *
 * @public
 */
export interface UserSummary {
  /**
   * The type of change pending for the broker user.
   *
   * @public
   */
  PendingChange?: ChangeType | undefined;

  /**
   * Required. The username of the broker user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   *
   * @public
   */
  Username: string | undefined;
}

/**
 * Broker configuration information
 *
 * @public
 */
export interface Configurations {
  /**
   * The broker's current configuration.
   *
   * @public
   */
  Current?: ConfigurationId | undefined;

  /**
   * The history of configurations applied to the broker.
   *
   * @public
   */
  History?: ConfigurationId[] | undefined;

  /**
   * The broker's pending configuration.
   *
   * @public
   */
  Pending?: ConfigurationId | undefined;
}

/**
 * Encryption options for the broker.
 *
 * @public
 */
export interface EncryptionOptions {
  /**
   * The customer master key (CMK) to use for the A KMS (KMS). This key is used to encrypt your data at rest. If not provided, Amazon MQ will use a default CMK to encrypt your data.
   *
   * @public
   */
  KmsKeyId?: string | undefined;

  /**
   * Enables the use of an Amazon Web Services owned CMK using KMS (KMS). Set to true by default, if no value is provided, for example, for RabbitMQ brokers.
   *
   * @public
   */
  UseAwsOwnedKey: boolean | undefined;
}

/**
 * Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.
 *
 * > **Important:** Does not apply to RabbitMQ brokers.
 *
 * @public
 */
export interface LdapServerMetadataInput {
  /**
   * Specifies the location of the LDAP server such as Directory Service for Microsoft Active Directory. Optional failover server.
   *
   * @public
   */
  Hosts: string[] | undefined;

  /**
   * The distinguished name of the node in the directory information tree (DIT) to search for roles or groups. For example, ou=group, ou=corp, dc=corp, dc=example, dc=com.
   *
   * @public
   */
  RoleBase: string | undefined;

  /**
   * Specifies the LDAP attribute that identifies the group name attribute in the object returned from the group membership query.
   *
   * @public
   */
  RoleName?: string | undefined;

  /**
   * The LDAP search filter used to find roles within the roleBase. The distinguished name of the user matched by userSearchMatching is substituted into the \{0\} placeholder in the search filter. The client's username is substituted into the \{1\} placeholder. For example, if you set this option to (member=uid=\{1\})for the user janedoe, the search filter becomes (member=uid=janedoe) after string substitution. It matches all role entries that have a member attribute equal to uid=janedoe under the subtree selected by the roleBase.
   *
   * @public
   */
  RoleSearchMatching: string | undefined;

  /**
   * The directory search scope for the role. If set to true, scope is to search the entire subtree.
   *
   * @public
   */
  RoleSearchSubtree?: boolean | undefined;

  /**
   * Service account password. A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example, dc=com.
   *
   * @public
   */
  ServiceAccountPassword: string | undefined;

  /**
   * Service account username. A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example, dc=com.
   *
   * @public
   */
  ServiceAccountUsername: string | undefined;

  /**
   * Select a particular subtree of the directory information tree (DIT) to search for user entries. The subtree is specified by a DN, which specifies the base node of the subtree. For example, by setting this option to ou=Users,ou=corp, dc=corp, dc=example, dc=com, the search for user entries is restricted to the subtree beneath ou=Users, ou=corp, dc=corp, dc=example, dc=com.
   *
   * @public
   */
  UserBase: string | undefined;

  /**
   * Specifies the name of the LDAP attribute for the user group membership.
   *
   * @public
   */
  UserRoleName?: string | undefined;

  /**
   * The LDAP search filter used to find users within the userBase. The client's username is substituted into the \{0\} placeholder in the search filter. For example, if this option is set to (uid=\{0\}) and the received username is janedoe, the search filter becomes (uid=janedoe) after string substitution. It will result in matching an entry like uid=janedoe, ou=Users,ou=corp, dc=corp, dc=example, dc=com.
   *
   * @public
   */
  UserSearchMatching: string | undefined;

  /**
   * The directory search scope for the user. If set to true, scope is to search the entire subtree.
   *
   * @public
   */
  UserSearchSubtree?: boolean | undefined;
}

/**
 * The list of information about logs to be enabled for the specified broker.
 *
 * @public
 */
export interface Logs {
  /**
   * Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged. Does not apply to RabbitMQ brokers.
   *
   * @public
   */
  Audit?: boolean | undefined;

  /**
   * Enables general logging.
   *
   * @public
   */
  General?: boolean | undefined;
}

/**
 * The scheduled time period relative to UTC during which Amazon MQ begins to apply pending updates or patches to the broker.
 *
 * @public
 */
export interface WeeklyStartTime {
  /**
   * Required. The day of the week.
   *
   * @public
   */
  DayOfWeek: DayOfWeek | undefined;

  /**
   * Required. The time, in 24-hour format.
   *
   * @public
   */
  TimeOfDay: string | undefined;

  /**
   * The time zone, UTC by default, in either the Country/City format, or the UTC offset format.
   *
   * @public
   */
  TimeZone?: string | undefined;
}

/**
 * Creates a broker using the specified properties.
 *
 * @public
 */
export interface CreateBrokerRequest {
  /**
   * Optional. The authentication strategy used to secure the broker. The default is SIMPLE.
   *
   * @public
   */
  AuthenticationStrategy?: AuthenticationStrategy | undefined;

  /**
   * Enables automatic upgrades to new patch versions for brokers as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window or after a manual broker reboot. Set to true by default, if no value is specified.
   *
   * > **Note:** Must be set to true for ActiveMQ brokers version 5.18 and above and for RabbitMQ brokers version 3.13 and above.
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * Required. The broker's name. This value must be unique in your Amazon Web Services account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.
   *
   * > **Important:** Do not add personally identifiable information (PII) or other confidential or sensitive information in broker names. Broker names are accessible to other Amazon Web Services services, including CloudWatch Logs. Broker names are not intended to be used for private or sensitive data.
   *
   * @public
   */
  BrokerName: string | undefined;

  /**
   * A list of information about the configuration.
   *
   * @public
   */
  Configuration?: ConfigurationId | undefined;

  /**
   * The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action.
   *
   * > **Note:** We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency.
   *
   * @public
   */
  CreatorRequestId?: string | undefined;

  /**
   * Required. The broker's deployment mode.
   *
   * @public
   */
  DeploymentMode: DeploymentMode | undefined;

  /**
   * Encryption options for the broker.
   *
   * @public
   */
  EncryptionOptions?: EncryptionOptions | undefined;

  /**
   * Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.
   *
   * @public
   */
  EngineType: EngineType | undefined;

  /**
   * The broker engine version. Defaults to the latest available version for the specified broker engine type. For more information, see the [ActiveMQ version management](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/activemq-version-management.html) and the [RabbitMQ version management](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/rabbitmq-version-management.html) sections in the Amazon MQ Developer Guide.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Required. The broker's instance type.
   *
   * @public
   */
  HostInstanceType: string | undefined;

  /**
   * Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers.
   *
   * @public
   */
  LdapServerMetadata?: LdapServerMetadataInput | undefined;

  /**
   * Enables Amazon CloudWatch logging for brokers.
   *
   * @public
   */
  Logs?: Logs | undefined;

  /**
   * The parameters that determine the WeeklyStartTime.
   *
   * @public
   */
  MaintenanceWindowStartTime?: WeeklyStartTime | undefined;

  /**
   * Enables connections from applications outside of the VPC that hosts the broker's subnets. Set to false by default, if no value is provided.
   *
   * @public
   */
  PubliclyAccessible: boolean | undefined;

  /**
   * The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The broker's storage size in GB.
   *
   * @public
   */
  StorageSize?: number | undefined;

  /**
   * The broker's storage type.
   *
   * @public
   */
  StorageType?: BrokerStorageType | undefined;

  /**
   * The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones. If you specify more than one subnet, the subnets must be in different Availability Zones. Amazon MQ will not be able to create VPC endpoints for your broker with multiple subnets in the same Availability Zone. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ Amazon MQ for ActiveMQ deployment requires two subnets. A CLUSTER_MULTI_AZ Amazon MQ for RabbitMQ deployment has no subnet requirements when deployed with public accessibility. Deployment without public accessibility requires at least one subnet.
   *
   * > **Important:** If you specify subnets in a [shared VPC](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-sharing.html) for a RabbitMQ broker, the associated VPC to which the specified subnets belong must be owned by your Amazon Web Services account. Amazon MQ will not be able to create VPC endpoints in VPCs that are not owned by your Amazon Web Services account.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * Create tags when creating the broker.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The list of broker users (persons or applications) who can access queues and topics. For Amazon MQ for RabbitMQ brokers, an administrative user is required if using simple authentication and authorization. For brokers using OAuth2, this user is optional. When provided, one and only one administrative user is accepted and created when a broker is first provisioned. All subsequent broker users are created by making RabbitMQ API calls directly to brokers or via the RabbitMQ web console.
   *
   * @public
   */
  Users?: User[] | undefined;

  /**
   * Defines whether this broker is a part of a data replication pair.
   *
   * @public
   */
  DataReplicationMode?: DataReplicationMode | undefined;

  /**
   * The Amazon Resource Name (ARN) of the primary broker that is used to replicate data from in a data replication pair, and is applied to the replica broker. Must be set when dataReplicationMode is set to CRDR.
   *
   * @public
   */
  DataReplicationPrimaryBrokerArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateBrokerResponse {
  /**
   * The broker's Amazon Resource Name (ARN).
   *
   * @public
   */
  BrokerArn?: string | undefined;

  /**
   * The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId?: string | undefined;
}

/**
 * Creates a new configuration for the specified configuration name. Amazon MQ uses the default configuration (the engine type and version).
 *
 * @public
 */
export interface CreateConfigurationRequest {
  /**
   * Optional. The authentication strategy associated with the configuration. The default is SIMPLE.
   *
   * @public
   */
  AuthenticationStrategy?: AuthenticationStrategy | undefined;

  /**
   * Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.
   *
   * @public
   */
  EngineType: EngineType | undefined;

  /**
   * The broker engine version. Defaults to the latest available version for the specified broker engine type. For more information, see the [ActiveMQ version management](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/activemq-version-management.html) and the [RabbitMQ version management](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/rabbitmq-version-management.html) sections in the Amazon MQ Developer Guide.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Create tags when creating the configuration.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateConfigurationResponse {
  /**
   * Required. The Amazon Resource Name (ARN) of the configuration.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Optional. The authentication strategy associated with the configuration. The default is SIMPLE.
   *
   * @public
   */
  AuthenticationStrategy?: AuthenticationStrategy | undefined;

  /**
   * Required. The date and time of the configuration.
   *
   * @public
   */
  Created?: Date | undefined;

  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The latest revision of the configuration.
   *
   * @public
   */
  LatestRevision?: ConfigurationRevision | undefined;

  /**
   * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * A map of the key-value pairs for the resource tag.
 *
 * @public
 */
export interface CreateTagsRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource tag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The key-value pair for the resource tag.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Creates a new ActiveMQ user.
 *
 * @public
 */
export interface CreateUserRequest {
  /**
   * The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId: string | undefined;

  /**
   * Enables access to the ActiveMQ Web Console for the ActiveMQ user.
   *
   * @public
   */
  ConsoleAccess?: boolean | undefined;

  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   *
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * Required. The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).
   *
   * @public
   */
  Password: string | undefined;

  /**
   * The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * Defines if this user is intended for CRDR replication purposes.
   *
   * @public
   */
  ReplicationUser?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateUserResponse {}

/**
 * Specifies a broker in a data replication pair.
 *
 * @public
 */
export interface DataReplicationCounterpart {
  /**
   * Required. The unique broker id generated by Amazon MQ.
   *
   * @public
   */
  BrokerId: string | undefined;

  /**
   * Required. The region of the broker.
   *
   * @public
   */
  Region: string | undefined;
}

/**
 * The replication details of the data replication-enabled broker. Only returned if dataReplicationMode or pendingDataReplicationMode is set to CRDR.
 *
 * @public
 */
export interface DataReplicationMetadataOutput {
  /**
   * Describes the replica/primary broker. Only returned if this broker is currently set as a primary or replica in the broker's dataReplicationRole property.
   *
   * @public
   */
  DataReplicationCounterpart?: DataReplicationCounterpart | undefined;

  /**
   * Defines the role of this broker in a data replication pair. When a replica broker is promoted to primary, this role is interchanged.
   *
   * @public
   */
  DataReplicationRole: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrokerRequest {
  /**
   * The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId: string | undefined;
}

/**
 * @public
 */
export interface DeleteBrokerResponse {
  /**
   * The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationRequest {
  /**
   * The unique ID that Amazon MQ generates for the configuration.
   *
   * @public
   */
  ConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteConfigurationResponse {
  /**
   * The unique ID that Amazon MQ generates for the configuration.
   *
   * @public
   */
  ConfigurationId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteTagsRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource tag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * An array of tag keys to delete
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface DeleteUserRequest {
  /**
   * The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId: string | undefined;

  /**
   * The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   *
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
   * The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId: string | undefined;
}

/**
 * Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker.
 *
 * @public
 */
export interface LdapServerMetadataOutput {
  /**
   * Specifies the location of the LDAP server such as Directory Service for Microsoft Active Directory. Optional failover server.
   *
   * @public
   */
  Hosts: string[] | undefined;

  /**
   * The distinguished name of the node in the directory information tree (DIT) to search for roles or groups. For example, ou=group, ou=corp, dc=corp, dc=example, dc=com.
   *
   * @public
   */
  RoleBase: string | undefined;

  /**
   * Specifies the LDAP attribute that identifies the group name attribute in the object returned from the group membership query.
   *
   * @public
   */
  RoleName?: string | undefined;

  /**
   * The LDAP search filter used to find roles within the roleBase. The distinguished name of the user matched by userSearchMatching is substituted into the \{0\} placeholder in the search filter. The client's username is substituted into the \{1\} placeholder. For example, if you set this option to (member=uid=\{1\})for the user janedoe, the search filter becomes (member=uid=janedoe) after string substitution. It matches all role entries that have a member attribute equal to uid=janedoe under the subtree selected by the roleBase.
   *
   * @public
   */
  RoleSearchMatching: string | undefined;

  /**
   * The directory search scope for the role. If set to true, scope is to search the entire subtree.
   *
   * @public
   */
  RoleSearchSubtree?: boolean | undefined;

  /**
   * Service account username. A service account is an account in your LDAP server that has access to initiate a connection. For example, cn=admin,dc=corp, dc=example, dc=com.
   *
   * @public
   */
  ServiceAccountUsername: string | undefined;

  /**
   * Select a particular subtree of the directory information tree (DIT) to search for user entries. The subtree is specified by a DN, which specifies the base node of the subtree. For example, by setting this option to ou=Users,ou=corp, dc=corp, dc=example, dc=com, the search for user entries is restricted to the subtree beneath ou=Users, ou=corp, dc=corp, dc=example, dc=com.
   *
   * @public
   */
  UserBase: string | undefined;

  /**
   * Specifies the name of the LDAP attribute for the user group membership.
   *
   * @public
   */
  UserRoleName?: string | undefined;

  /**
   * The LDAP search filter used to find users within the userBase. The client's username is substituted into the \{0\} placeholder in the search filter. For example, if this option is set to (uid=\{0\}) and the received username is janedoe, the search filter becomes (uid=janedoe) after string substitution. It will result in matching an entry like uid=janedoe, ou=Users,ou=corp, dc=corp, dc=example, dc=com.
   *
   * @public
   */
  UserSearchMatching: string | undefined;

  /**
   * The directory search scope for the user. If set to true, scope is to search the entire subtree.
   *
   * @public
   */
  UserSearchSubtree?: boolean | undefined;
}

/**
 * The list of information about logs to be enabled for the specified broker.
 *
 * @public
 */
export interface PendingLogs {
  /**
   * Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged.
   *
   * @public
   */
  Audit?: boolean | undefined;

  /**
   * Enables general logging.
   *
   * @public
   */
  General?: boolean | undefined;
}

/**
 * The list of information about logs currently enabled and pending to be deployed for the specified broker.
 *
 * @public
 */
export interface LogsSummary {
  /**
   * Enables audit logging. Every user management action made using JMX or the ActiveMQ Web Console is logged.
   *
   * @public
   */
  Audit?: boolean | undefined;

  /**
   * The location of the CloudWatch Logs log group where audit logs are sent.
   *
   * @public
   */
  AuditLogGroup?: string | undefined;

  /**
   * Enables general logging.
   *
   * @public
   */
  General: boolean | undefined;

  /**
   * The location of the CloudWatch Logs log group where general logs are sent.
   *
   * @public
   */
  GeneralLogGroup: string | undefined;

  /**
   * The list of information about logs pending to be deployed for the specified broker.
   *
   * @public
   */
  Pending?: PendingLogs | undefined;
}

/**
 * @public
 */
export interface DescribeBrokerResponse {
  /**
   * Actions required for a broker.
   *
   * @public
   */
  ActionsRequired?: ActionRequired[] | undefined;

  /**
   * The authentication strategy used to secure the broker. The default is SIMPLE.
   *
   * @public
   */
  AuthenticationStrategy?: AuthenticationStrategy | undefined;

  /**
   * Enables automatic upgrades to new patch versions for brokers as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window or after a manual broker reboot.
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The broker's Amazon Resource Name (ARN).
   *
   * @public
   */
  BrokerArn?: string | undefined;

  /**
   * The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId?: string | undefined;

  /**
   * A list of information about allocated brokers.
   *
   * @public
   */
  BrokerInstances?: BrokerInstance[] | undefined;

  /**
   * The broker's name. This value must be unique in your Amazon Web Services account account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain white spaces, brackets, wildcard characters, or special characters.
   *
   * @public
   */
  BrokerName?: string | undefined;

  /**
   * The broker's status.
   *
   * @public
   */
  BrokerState?: BrokerState | undefined;

  /**
   * The list of all revisions for the specified configuration.
   *
   * @public
   */
  Configurations?: Configurations | undefined;

  /**
   * The time when the broker was created.
   *
   * @public
   */
  Created?: Date | undefined;

  /**
   * The broker's deployment mode.
   *
   * @public
   */
  DeploymentMode?: DeploymentMode | undefined;

  /**
   * Encryption options for the broker.
   *
   * @public
   */
  EncryptionOptions?: EncryptionOptions | undefined;

  /**
   * The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.
   *
   * @public
   */
  EngineType?: EngineType | undefined;

  /**
   * The broker engine version. For more information, see the [ActiveMQ version management](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/activemq-version-management.html) and the [RabbitMQ version management](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/rabbitmq-version-management.html) sections in the Amazon MQ Developer Guide.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The broker's instance type.
   *
   * @public
   */
  HostInstanceType?: string | undefined;

  /**
   * The metadata of the LDAP server used to authenticate and authorize connections to the broker.
   *
   * @public
   */
  LdapServerMetadata?: LdapServerMetadataOutput | undefined;

  /**
   * The list of information about logs currently enabled and pending to be deployed for the specified broker.
   *
   * @public
   */
  Logs?: LogsSummary | undefined;

  /**
   * The parameters that determine the WeeklyStartTime.
   *
   * @public
   */
  MaintenanceWindowStartTime?: WeeklyStartTime | undefined;

  /**
   * The authentication strategy that will be applied when the broker is rebooted. The default is SIMPLE.
   *
   * @public
   */
  PendingAuthenticationStrategy?: AuthenticationStrategy | undefined;

  /**
   * The broker engine version to upgrade to. For more information, see the [ActiveMQ version management](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/activemq-version-management.html) and the [RabbitMQ version management](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/rabbitmq-version-management.html) sections in the Amazon MQ Developer Guide.
   *
   * @public
   */
  PendingEngineVersion?: string | undefined;

  /**
   * The broker's host instance type to upgrade to. For a list of supported instance types, see [Broker instance types](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker.html#broker-instance-types).
   *
   * @public
   */
  PendingHostInstanceType?: string | undefined;

  /**
   * The metadata of the LDAP server that will be used to authenticate and authorize connections to the broker after it is rebooted.
   *
   * @public
   */
  PendingLdapServerMetadata?: LdapServerMetadataOutput | undefined;

  /**
   * The list of pending security groups to authorize connections to brokers.
   *
   * @public
   */
  PendingSecurityGroups?: string[] | undefined;

  /**
   * The pending storage size in GB, to be applied on the next broker restart.
   *
   * @public
   */
  PendingStorageSize?: number | undefined;

  /**
   * Enables connections from applications outside of the VPC that hosts the broker's subnets.
   *
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The broker's storage size in GB.
   *
   * @public
   */
  StorageSize?: number | undefined;

  /**
   * The broker's storage type.
   *
   * @public
   */
  StorageType?: BrokerStorageType | undefined;

  /**
   * The list of groups that define which subnets and IP ranges the broker can use from different Availability Zones.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The list of all tags associated with this broker.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The list of all broker usernames for the specified broker.
   *
   * @public
   */
  Users?: UserSummary[] | undefined;

  /**
   * The replication details of the data replication-enabled broker. Only returned if dataReplicationMode is set to CRDR.
   *
   * @public
   */
  DataReplicationMetadata?: DataReplicationMetadataOutput | undefined;

  /**
   * Describes whether this broker is a part of a data replication pair.
   *
   * @public
   */
  DataReplicationMode?: DataReplicationMode | undefined;

  /**
   * The pending replication details of the data replication-enabled broker. Only returned if pendingDataReplicationMode is set to CRDR.
   *
   * @public
   */
  PendingDataReplicationMetadata?: DataReplicationMetadataOutput | undefined;

  /**
   * Describes whether this broker will be a part of a data replication pair after reboot.
   *
   * @public
   */
  PendingDataReplicationMode?: DataReplicationMode | undefined;
}

/**
 * @public
 */
export interface DescribeBrokerEngineTypesRequest {
  /**
   * Filter response by engine type.
   *
   * @public
   */
  EngineType?: string | undefined;

  /**
   * The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBrokerEngineTypesResponse {
  /**
   * List of available engine types and versions.
   *
   * @public
   */
  BrokerEngineTypes?: BrokerEngineType[] | undefined;

  /**
   * Required. The maximum number of engine types that can be returned per page (20 by default). This value must be an integer from 5 to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBrokerInstanceOptionsRequest {
  /**
   * Filter response by engine type.
   *
   * @public
   */
  EngineType?: string | undefined;

  /**
   * Filter response by host instance type.
   *
   * @public
   */
  HostInstanceType?: string | undefined;

  /**
   * The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Filter response by storage type.
   *
   * @public
   */
  StorageType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBrokerInstanceOptionsResponse {
  /**
   * List of available broker instance options.
   *
   * @public
   */
  BrokerInstanceOptions?: BrokerInstanceOption[] | undefined;

  /**
   * Required. The maximum number of instance options that can be returned per page (20 by default). This value must be an integer from 5 to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationRequest {
  /**
   * The unique ID that Amazon MQ generates for the configuration.
   *
   * @public
   */
  ConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationResponse {
  /**
   * Required. The ARN of the configuration.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Optional. The authentication strategy associated with the configuration. The default is SIMPLE.
   *
   * @public
   */
  AuthenticationStrategy?: AuthenticationStrategy | undefined;

  /**
   * Required. The date and time of the configuration revision.
   *
   * @public
   */
  Created?: Date | undefined;

  /**
   * Required. The description of the configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Required. The type of broker engine. Currently, Amazon MQ supports ACTIVEMQ and RABBITMQ.
   *
   * @public
   */
  EngineType?: EngineType | undefined;

  /**
   * The broker engine version. Defaults to the latest available version for the specified broker engine type. For a list of supported engine versions, see the [ActiveMQ version management](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/activemq-version-management.html) and the [RabbitMQ version management](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/rabbitmq-version-management.html) sections in the Amazon MQ Developer Guide.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * Required. The latest revision of the configuration.
   *
   * @public
   */
  LatestRevision?: ConfigurationRevision | undefined;

  /**
   * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The list of all tags associated with this configuration.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationRevisionRequest {
  /**
   * The unique ID that Amazon MQ generates for the configuration.
   *
   * @public
   */
  ConfigurationId: string | undefined;

  /**
   * The revision of the configuration.
   *
   * @public
   */
  ConfigurationRevision: string | undefined;
}

/**
 * @public
 */
export interface DescribeConfigurationRevisionResponse {
  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   *
   * @public
   */
  ConfigurationId?: string | undefined;

  /**
   * Required. The date and time of the configuration.
   *
   * @public
   */
  Created?: Date | undefined;

  /**
   * Amazon MQ for ActiveMQ: the base64-encoded XML configuration. Amazon MQ for RabbitMQ: base64-encoded Cuttlefish.
   *
   * @public
   */
  Data?: string | undefined;

  /**
   * The description of the configuration.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSharedResourcesRequest {
  /**
   * The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId: string | undefined;

  /**
   * The maximum number of resources that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSharedResourcesResponse {
  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of resources shared to the broker.
   *
   * @public
   */
  SharedResources?: SharedResource[] | undefined;
}

/**
 * @public
 */
export interface DescribeUserRequest {
  /**
   * The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId: string | undefined;

  /**
   * The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   *
   * @public
   */
  Username: string | undefined;
}

/**
 * Returns information about the status of the changes pending for the ActiveMQ user.
 *
 * @public
 */
export interface UserPendingChanges {
  /**
   * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
   *
   * @public
   */
  ConsoleAccess?: boolean | undefined;

  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   *
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * Required. The type of change pending for the ActiveMQ user.
   *
   * @public
   */
  PendingChange: ChangeType | undefined;
}

/**
 * @public
 */
export interface DescribeUserResponse {
  /**
   * Required. The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId?: string | undefined;

  /**
   * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
   *
   * @public
   */
  ConsoleAccess?: boolean | undefined;

  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   *
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * The status of the changes pending for the ActiveMQ user.
   *
   * @public
   */
  Pending?: UserPendingChanges | undefined;

  /**
   * Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * Describes whether the user is intended for data replication
   *
   * @public
   */
  ReplicationUser?: boolean | undefined;
}

/**
 * @public
 */
export interface ListBrokersRequest {
  /**
   * The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBrokersResponse {
  /**
   * A list of information about all brokers.
   *
   * @public
   */
  BrokerSummaries?: BrokerSummary[] | undefined;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationRevisionsRequest {
  /**
   * The unique ID that Amazon MQ generates for the configuration.
   *
   * @public
   */
  ConfigurationId: string | undefined;

  /**
   * The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationRevisionsResponse {
  /**
   * The unique ID that Amazon MQ generates for the configuration.
   *
   * @public
   */
  ConfigurationId?: string | undefined;

  /**
   * The maximum number of configuration revisions that can be returned per page (20 by default). This value must be an integer from 5 to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of all revisions for the specified configuration.
   *
   * @public
   */
  Revisions?: ConfigurationRevision[] | undefined;
}

/**
 * @public
 */
export interface ListConfigurationsRequest {
  /**
   * The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConfigurationsResponse {
  /**
   * The list of all revisions for the specified configuration.
   *
   * @public
   */
  Configurations?: Configuration[] | undefined;

  /**
   * The maximum number of configurations that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource tag.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsResponse {
  /**
   * The key-value pair for the resource tag.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListUsersRequest {
  /**
   * The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId: string | undefined;

  /**
   * The maximum number of brokers that Amazon MQ can return per page (20 by default). This value must be an integer from 5 to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsersResponse {
  /**
   * Required. The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId?: string | undefined;

  /**
   * Required. The maximum number of ActiveMQ users that can be returned per page (20 by default). This value must be an integer from 5 to 100.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token that specifies the next page of results Amazon MQ should return. To request the first page, leave nextToken empty.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Required. The list of all ActiveMQ usernames for the specified broker. Does not apply to RabbitMQ brokers.
   *
   * @public
   */
  Users?: UserSummary[] | undefined;
}

/**
 * Promotes a data replication replica broker to the primary broker role.
 *
 * @public
 */
export interface PromoteRequest {
  /**
   * The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId: string | undefined;

  /**
   * The Promote mode requested. Note: Valid values for the parameter are SWITCHOVER, FAILOVER.
   *
   * @public
   */
  Mode: PromoteMode | undefined;
}

/**
 * @public
 */
export interface PromoteResponse {
  /**
   * The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId?: string | undefined;
}

/**
 * @public
 */
export interface RebootBrokerRequest {
  /**
   * The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId: string | undefined;
}

/**
 * @public
 */
export interface RebootBrokerResponse {}

/**
 * Updates the broker using the specified properties.
 *
 * @public
 */
export interface UpdateBrokerRequest {
  /**
   * Optional. The authentication strategy used to secure the broker. The default is SIMPLE.
   *
   * @public
   */
  AuthenticationStrategy?: AuthenticationStrategy | undefined;

  /**
   * Enables automatic upgrades to new patch versions for brokers as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window or after a manual broker reboot.
   *
   * > **Note:** Must be set to true for ActiveMQ brokers version 5.18 and above and for RabbitMQ brokers version 3.13 and above.
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId: string | undefined;

  /**
   * A list of information about the configuration.
   *
   * @public
   */
  Configuration?: ConfigurationId | undefined;

  /**
   * The broker engine version. For more information, see the [ActiveMQ version management](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/activemq-version-management.html) and the [RabbitMQ version management](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/rabbitmq-version-management.html) sections in the Amazon MQ Developer Guide.
   *
   * > **Note:** When upgrading to ActiveMQ version 5.18 and above or RabbitMQ version 3.13 and above, you must have autoMinorVersionUpgrade set to true for the broker.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The broker's host instance type to upgrade to. For a list of supported instance types, see [Broker instance types](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker.html#broker-instance-types).
   *
   * @public
   */
  HostInstanceType?: string | undefined;

  /**
   * Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers.
   *
   * @public
   */
  LdapServerMetadata?: LdapServerMetadataInput | undefined;

  /**
   * Enables Amazon CloudWatch logging for brokers.
   *
   * @public
   */
  Logs?: Logs | undefined;

  /**
   * The parameters that determine the WeeklyStartTime.
   *
   * @public
   */
  MaintenanceWindowStartTime?: WeeklyStartTime | undefined;

  /**
   * The list of resource shares to update on the broker
   *
   * @public
   */
  ResourceShareArns?: string[] | undefined;

  /**
   * The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The broker's storage size in GB.
   *
   * @public
   */
  StorageSize?: number | undefined;

  /**
   * Defines whether this broker is a part of a data replication pair.
   *
   * @public
   */
  DataReplicationMode?: DataReplicationMode | undefined;
}

/**
 * @public
 */
export interface UpdateBrokerResponse {
  /**
   * Optional. The authentication strategy used to secure the broker. The default is SIMPLE.
   *
   * @public
   */
  AuthenticationStrategy?: AuthenticationStrategy | undefined;

  /**
   * Enables automatic upgrades to new patch versions for brokers as new versions are released and supported by Amazon MQ. Automatic upgrades occur during the scheduled maintenance window or after a manual broker reboot.
   *
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * Required. The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId?: string | undefined;

  /**
   * The ID of the updated configuration.
   *
   * @public
   */
  Configuration?: ConfigurationId | undefined;

  /**
   * The broker engine version to upgrade to. For more information, see the [ActiveMQ version management](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/activemq-version-management.html) and the [RabbitMQ version management](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/rabbitmq-version-management.html) sections in the Amazon MQ Developer Guide.
   *
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * The broker's host instance type to upgrade to. For a list of supported instance types, see [Broker instance types](https://docs.aws.amazon.com//amazon-mq/latest/developer-guide/broker.html#broker-instance-types).
   *
   * @public
   */
  HostInstanceType?: string | undefined;

  /**
   * Optional. The metadata of the LDAP server used to authenticate and authorize connections to the broker. Does not apply to RabbitMQ brokers.
   *
   * @public
   */
  LdapServerMetadata?: LdapServerMetadataOutput | undefined;

  /**
   * The list of information about logs to be enabled for the specified broker.
   *
   * @public
   */
  Logs?: Logs | undefined;

  /**
   * The parameters that determine the WeeklyStartTime.
   *
   * @public
   */
  MaintenanceWindowStartTime?: WeeklyStartTime | undefined;

  /**
   * The pending broker's target list of resource shares
   *
   * @public
   */
  ResourceShareArns?: string[] | undefined;

  /**
   * The list of security groups (1 minimum, 5 maximum) that authorizes connections to brokers.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * The replication details of the data replication-enabled broker. Only returned if dataReplicationMode is set to CRDR.
   *
   * @public
   */
  DataReplicationMetadata?: DataReplicationMetadataOutput | undefined;

  /**
   * Describes whether this broker is a part of a data replication pair.
   *
   * @public
   */
  DataReplicationMode?: DataReplicationMode | undefined;

  /**
   * The pending replication details of the data replication-enabled broker. Only returned if pendingDataReplicationMode is set to CRDR.
   *
   * @public
   */
  PendingDataReplicationMetadata?: DataReplicationMetadataOutput | undefined;

  /**
   * Describes whether this broker will be a part of a data replication pair after reboot.
   *
   * @public
   */
  PendingDataReplicationMode?: DataReplicationMode | undefined;

  /**
   * The broker's storage size in GB.
   *
   * @public
   */
  StorageSize?: number | undefined;
}

/**
 * Updates the specified configuration.
 *
 * @public
 */
export interface UpdateConfigurationRequest {
  /**
   * The unique ID that Amazon MQ generates for the configuration.
   *
   * @public
   */
  ConfigurationId: string | undefined;

  /**
   * Amazon MQ for Active MQ: The base64-encoded XML configuration. Amazon MQ for RabbitMQ: the base64-encoded Cuttlefish configuration.
   *
   * @public
   */
  Data: string | undefined;

  /**
   * The description of the configuration.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConfigurationResponse {
  /**
   * The Amazon Resource Name (ARN) of the configuration.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * Required. The date and time of the configuration.
   *
   * @public
   */
  Created?: Date | undefined;

  /**
   * The unique ID that Amazon MQ generates for the configuration.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The latest revision of the configuration.
   *
   * @public
   */
  LatestRevision?: ConfigurationRevision | undefined;

  /**
   * The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The list of the first 20 warnings about the configuration elements or attributes that were sanitized.
   *
   * @public
   */
  Warnings?: SanitizationWarning[] | undefined;
}

/**
 * Updates the information for an ActiveMQ user.
 *
 * @public
 */
export interface UpdateUserRequest {
  /**
   * The unique ID that Amazon MQ generates for the broker.
   *
   * @public
   */
  BrokerId: string | undefined;

  /**
   * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
   *
   * @public
   */
  ConsoleAccess?: boolean | undefined;

  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   *
   * @public
   */
  Groups?: string[] | undefined;

  /**
   * The password of the user. This value must be at least 12 characters long, must contain at least 4 unique characters, and must not contain commas, colons, or equal signs (,:=).
   *
   * @public
   */
  Password?: string | undefined;

  /**
   * The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * Defines whether the user is intended for data replication.
   *
   * @public
   */
  ReplicationUser?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateUserResponse {}
