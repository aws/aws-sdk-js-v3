// smithy-typescript generated code
import type {
  LakehouseIdcRegistration,
  LakehouseRegistration,
  LogDestinationType,
  LogExport,
  ManagedWorkgroupStatus,
  NamespaceStatus,
  OfferingType,
  PerformanceTargetStatus,
  S3TableAction,
  S3TableGranularity,
  SnapshotStatus,
  State,
  UsageLimitBreachAction,
  UsageLimitPeriod,
  UsageLimitUsageType,
  WorkgroupStatus,
} from "./enums";

/**
 * An object that represents the custom domain name association.
 *
 * @public
 */
export interface Association {
  /**
   * The custom domain name’s certificate Amazon resource name (ARN).
   *
   * @public
   */
  customDomainCertificateArn?: string | undefined;

  /**
   * The expiration time for the certificate.
   *
   * @public
   */
  customDomainCertificateExpiryTime?: Date | undefined;

  /**
   * The custom domain name associated with the workgroup.
   *
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * The name of the workgroup associated with the database.
   *
   * @public
   */
  workgroupName?: string | undefined;
}

/**
 * An array of key-value pairs to set for advanced control over Amazon Redshift Serverless.
 *
 * @public
 */
export interface ConfigParameter {
  /**
   * The key of the parameter. The options are `auto_mv`, `datestyle`, `enable_case_sensitive_identifier`, `enable_user_activity_logging`, `query_group`, `search_path`, `require_ssl`, `use_fips_ssl`, and either `wlm_json_configuration` or query monitoring metrics that let you define performance boundaries. You can either specify individual query monitoring metrics (such as `max_scan_row_count`, `max_query_execution_time`) or use `wlm_json_configuration` to define query queues with rules, but not both. If you're using `wlm_json_configuration`, the maximum size of `parameterValue` is 8000 characters. For more information about query monitoring rules and available metrics, see [Query monitoring metrics for Amazon Redshift Serverless](https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics-serverless).
   *
   * @public
   */
  parameterKey?: string | undefined;

  /**
   * The value of the parameter to set.
   *
   * @public
   */
  parameterValue?: string | undefined;
}

/**
 * A map of key-value pairs.
 *
 * @public
 */
export interface Tag {
  /**
   * The key to use in the tag.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface ConvertRecoveryPointToSnapshotRequest {
  /**
   * The unique identifier of the recovery point.
   *
   * @public
   */
  recoveryPointId: string | undefined;

  /**
   * The name of the snapshot.
   *
   * @public
   */
  snapshotName: string | undefined;

  /**
   * How long to retain the snapshot.
   *
   * @public
   */
  retentionPeriod?: number | undefined;

  /**
   * An array of [Tag objects](https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_Tag.html) to associate with the created snapshot.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * A snapshot object that contains databases.
 *
 * @public
 */
export interface Snapshot {
  /**
   * The name of the namepsace.
   *
   * @public
   */
  namespaceName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the namespace the snapshot was created from.
   *
   * @public
   */
  namespaceArn?: string | undefined;

  /**
   * The name of the snapshot.
   *
   * @public
   */
  snapshotName?: string | undefined;

  /**
   * The timestamp of when the snapshot was created.
   *
   * @public
   */
  snapshotCreateTime?: Date | undefined;

  /**
   * The username of the database within a snapshot.
   *
   * @public
   */
  adminUsername?: string | undefined;

  /**
   * The status of the snapshot.
   *
   * @public
   */
  status?: SnapshotStatus | undefined;

  /**
   * The unique identifier of the KMS key used to encrypt the snapshot.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The owner Amazon Web Services; account of the snapshot.
   *
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * The total size, in megabytes, of how big the snapshot is.
   *
   * @public
   */
  totalBackupSizeInMegaBytes?: number | undefined;

  /**
   * The size of the incremental backup in megabytes.
   *
   * @public
   */
  actualIncrementalBackupSizeInMegaBytes?: number | undefined;

  /**
   * The size in megabytes of the data that has been backed up to a snapshot.
   *
   * @public
   */
  backupProgressInMegaBytes?: number | undefined;

  /**
   * The rate at which data is backed up into a snapshot in megabytes per second.
   *
   * @public
   */
  currentBackupRateInMegaBytesPerSecond?: number | undefined;

  /**
   * The estimated amount of seconds until the snapshot completes backup.
   *
   * @public
   */
  estimatedSecondsToCompletion?: number | undefined;

  /**
   * The amount of time it took to back up data into a snapshot.
   *
   * @public
   */
  elapsedTimeInSeconds?: number | undefined;

  /**
   * The period of time, in days, of how long the snapshot is retained.
   *
   * @public
   */
  snapshotRetentionPeriod?: number | undefined;

  /**
   * The amount of days until the snapshot is deleted.
   *
   * @public
   */
  snapshotRemainingDays?: number | undefined;

  /**
   * The timestamp of when data within the snapshot started getting retained.
   *
   * @public
   */
  snapshotRetentionStartTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the snapshot.
   *
   * @public
   */
  snapshotArn?: string | undefined;

  /**
   * All of the Amazon Web Services accounts that have access to restore a snapshot to a namespace.
   *
   * @public
   */
  accountsWithRestoreAccess?: string[] | undefined;

  /**
   * All of the Amazon Web Services accounts that have access to restore a snapshot to a provisioned cluster.
   *
   * @public
   */
  accountsWithProvisionedRestoreAccess?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) for the namespace's admin user credentials secret.
   *
   * @public
   */
  adminPasswordSecretArn?: string | undefined;

  /**
   * The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.
   *
   * @public
   */
  adminPasswordSecretKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface ConvertRecoveryPointToSnapshotResponse {
  /**
   * The snapshot converted from the recovery point.
   *
   * @public
   */
  snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface CreateCustomDomainAssociationRequest {
  /**
   * The name of the workgroup associated with the database.
   *
   * @public
   */
  workgroupName: string | undefined;

  /**
   * The custom domain name to associate with the workgroup.
   *
   * @public
   */
  customDomainName: string | undefined;

  /**
   * The custom domain name’s certificate Amazon resource name (ARN).
   *
   * @public
   */
  customDomainCertificateArn: string | undefined;
}

/**
 * @public
 */
export interface CreateCustomDomainAssociationResponse {
  /**
   * The custom domain name to associate with the workgroup.
   *
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * The name of the workgroup associated with the database.
   *
   * @public
   */
  workgroupName?: string | undefined;

  /**
   * The custom domain name’s certificate Amazon resource name (ARN).
   *
   * @public
   */
  customDomainCertificateArn?: string | undefined;

  /**
   * The expiration time for the certificate.
   *
   * @public
   */
  customDomainCertificateExpiryTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateEndpointAccessRequest {
  /**
   * The name of the VPC endpoint. An endpoint name must contain 1-30 characters. Valid characters are A-Z, a-z, 0-9, and hyphen(-). The first character must be a letter. The name can't contain two consecutive hyphens or end with a hyphen.
   *
   * @public
   */
  endpointName: string | undefined;

  /**
   * The unique identifers of subnets from which Amazon Redshift Serverless chooses one to deploy a VPC endpoint.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The name of the workgroup to associate with the VPC endpoint.
   *
   * @public
   */
  workgroupName: string | undefined;

  /**
   * The unique identifiers of the security group that defines the ports, protocols, and sources for inbound traffic that you are authorizing into your endpoint.
   *
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;

  /**
   * The owner Amazon Web Services account for the Amazon Redshift Serverless workgroup.
   *
   * @public
   */
  ownerAccount?: string | undefined;
}

/**
 * Contains information about a network interface in an Amazon Redshift Serverless managed VPC endpoint.
 *
 * @public
 */
export interface NetworkInterface {
  /**
   * The unique identifier of the network interface.
   *
   * @public
   */
  networkInterfaceId?: string | undefined;

  /**
   * The unique identifier of the subnet.
   *
   * @public
   */
  subnetId?: string | undefined;

  /**
   * The IPv4 address of the network interface within the subnet.
   *
   * @public
   */
  privateIpAddress?: string | undefined;

  /**
   * The availability Zone.
   *
   * @public
   */
  availabilityZone?: string | undefined;

  /**
   * The IPv6 address of the network interface within the subnet.
   *
   * @public
   */
  ipv6Address?: string | undefined;
}

/**
 * The connection endpoint for connecting to Amazon Redshift Serverless through the proxy.
 *
 * @public
 */
export interface VpcEndpoint {
  /**
   * The connection endpoint ID for connecting to Amazon Redshift Serverless.
   *
   * @public
   */
  vpcEndpointId?: string | undefined;

  /**
   * The VPC identifier that the endpoint is associated with.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * One or more network interfaces of the endpoint. Also known as an interface endpoint.
   *
   * @public
   */
  networkInterfaces?: NetworkInterface[] | undefined;
}

/**
 * Describes the members of a VPC security group.
 *
 * @public
 */
export interface VpcSecurityGroupMembership {
  /**
   * The unique identifier of the VPC security group.
   *
   * @public
   */
  vpcSecurityGroupId?: string | undefined;

  /**
   * The status of the VPC security group.
   *
   * @public
   */
  status?: string | undefined;
}

/**
 * Information about an Amazon Redshift Serverless VPC endpoint.
 *
 * @public
 */
export interface EndpointAccess {
  /**
   * The name of the VPC endpoint.
   *
   * @public
   */
  endpointName?: string | undefined;

  /**
   * The status of the VPC endpoint.
   *
   * @public
   */
  endpointStatus?: string | undefined;

  /**
   * The name of the workgroup associated with the endpoint.
   *
   * @public
   */
  workgroupName?: string | undefined;

  /**
   * The time that the endpoint was created.
   *
   * @public
   */
  endpointCreateTime?: Date | undefined;

  /**
   * The port number on which Amazon Redshift Serverless accepts incoming connections.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The DNS address of the endpoint.
   *
   * @public
   */
  address?: string | undefined;

  /**
   * The unique identifier of subnets where Amazon Redshift Serverless choose to deploy the VPC endpoint.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The security groups associated with the endpoint.
   *
   * @public
   */
  vpcSecurityGroups?: VpcSecurityGroupMembership[] | undefined;

  /**
   * The connection endpoint for connecting to Amazon Redshift Serverless.
   *
   * @public
   */
  vpcEndpoint?: VpcEndpoint | undefined;

  /**
   * The Amazon Resource Name (ARN) of the VPC endpoint.
   *
   * @public
   */
  endpointArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateEndpointAccessResponse {
  /**
   * The created VPC endpoint.
   *
   * @public
   */
  endpoint?: EndpointAccess | undefined;
}

/**
 * @public
 */
export interface CreateNamespaceRequest {
  /**
   * The name of the namespace.
   *
   * @public
   */
  namespaceName: string | undefined;

  /**
   * The username of the administrator for the first database created in the namespace.
   *
   * @public
   */
  adminUsername?: string | undefined;

  /**
   * The password of the administrator for the first database created in the namespace.
   *
   * You can't use `adminUserPassword` if `manageAdminPassword` is true.
   *
   * @public
   */
  adminUserPassword?: string | undefined;

  /**
   * The name of the first database created in the namespace.
   *
   * @public
   */
  dbName?: string | undefined;

  /**
   * The ID of the Amazon Web Services Key Management Service key used to encrypt your data.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace.
   *
   * @public
   */
  defaultIamRoleArn?: string | undefined;

  /**
   * A list of IAM roles to associate with the namespace.
   *
   * @public
   */
  iamRoles?: string[] | undefined;

  /**
   * The types of logs the namespace can export. Available export types are `userlog`, `connectionlog`, and `useractivitylog`.
   *
   * @public
   */
  logExports?: LogExport[] | undefined;

  /**
   * A list of tag instances.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * If `true`, Amazon Redshift uses Secrets Manager to manage the namespace's admin credentials. You can't use `adminUserPassword` if `manageAdminPassword` is true. If `manageAdminPassword` is false or not set, Amazon Redshift uses `adminUserPassword` for the admin user account's password.
   *
   * @public
   */
  manageAdminPassword?: boolean | undefined;

  /**
   * The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret. You can only use this parameter if `manageAdminPassword` is true.
   *
   * @public
   */
  adminPasswordSecretKmsKeyId?: string | undefined;

  /**
   * The ARN for the Redshift application that integrates with IAM Identity Center.
   *
   * @public
   */
  redshiftIdcApplicationArn?: string | undefined;
}

/**
 * Describes the state of Amazon S3 Tables system-table log publishing for a namespace.
 *
 * @public
 */
export interface S3TablePublishStatus {
  /**
   * The system tables currently being published.
   *
   * @public
   */
  s3Tables?: string[] | undefined;

  /**
   * The identifier of the namespace in the S3 table bucket that holds the published tables.
   *
   * @public
   */
  s3TableNamespace?: string | undefined;

  /**
   * The scope currently in effect. Values are `namespace` or `account`.
   *
   * @public
   */
  s3TableGranularity?: S3TableGranularity | undefined;

  /**
   * `true` when the namespace is enrolled in every current and future system table rather than an explicit list of tables.
   *
   * @public
   */
  enabledAll?: boolean | undefined;

  /**
   * A map of system table name to the time that table last received data, as an ISO-8601 timestamp. A table that has not yet been ingested is absent from the map. Use it to judge data freshness.
   *
   * @public
   */
  lastIngestionTimes?: Record<string, string> | undefined;
}

/**
 * A collection of database objects and users.
 *
 * @public
 */
export interface Namespace {
  /**
   * The Amazon Resource Name (ARN) associated with a namespace.
   *
   * @public
   */
  namespaceArn?: string | undefined;

  /**
   * The unique identifier of a namespace.
   *
   * @public
   */
  namespaceId?: string | undefined;

  /**
   * The name of the namespace. Must be between 3-64 alphanumeric characters in lowercase, and it cannot be a reserved word. A list of reserved words can be found in [Reserved Words](https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html) in the Amazon Redshift Database Developer Guide.
   *
   * @public
   */
  namespaceName?: string | undefined;

  /**
   * The username of the administrator for the first database created in the namespace.
   *
   * @public
   */
  adminUsername?: string | undefined;

  /**
   * The name of the first database created in the namespace.
   *
   * @public
   */
  dbName?: string | undefined;

  /**
   * The ID of the Amazon Web Services Key Management Service key used to encrypt your data.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace.
   *
   * @public
   */
  defaultIamRoleArn?: string | undefined;

  /**
   * A list of IAM roles to associate with the namespace.
   *
   * @public
   */
  iamRoles?: string[] | undefined;

  /**
   * The types of logs the namespace can export. Available export types are User log, Connection log, and User activity log.
   *
   * @public
   */
  logExports?: LogExport[] | undefined;

  /**
   * The status of the namespace.
   *
   * @public
   */
  status?: NamespaceStatus | undefined;

  /**
   * The date of when the namespace was created.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) for the namespace's admin user credentials secret.
   *
   * @public
   */
  adminPasswordSecretArn?: string | undefined;

  /**
   * The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.
   *
   * @public
   */
  adminPasswordSecretKmsKeyId?: string | undefined;

  /**
   * The status of the lakehouse registration for the namespace. Indicates whether the namespace is successfully registered with Amazon Redshift federated permissions.
   *
   * @public
   */
  lakehouseRegistrationStatus?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Glue Data Catalog associated with the namespace enabled with Amazon Redshift federated permissions.
   *
   * @public
   */
  catalogArn?: string | undefined;

  /**
   * The current Amazon S3 Tables log-publishing status for the namespace. Not returned when S3 Tables publishing has never been configured for the namespace.
   *
   * @public
   */
  s3TablePublishStatus?: S3TablePublishStatus | undefined;
}

/**
 * @public
 */
export interface CreateNamespaceResponse {
  /**
   * The created namespace object.
   *
   * @public
   */
  namespace?: Namespace | undefined;
}

/**
 * @public
 */
export interface CreateReservationRequest {
  /**
   * The number of Redshift Processing Units (RPUs) to reserve.
   *
   * @public
   */
  capacity: number | undefined;

  /**
   * The ID of the offering associated with the reservation. The offering determines the payment schedule for the reservation.
   *
   * @public
   */
  offeringId: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. This token must be a valid UUIDv4 value. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * The class of offering for the reservation. The offering class determines the payment schedule for the reservation.
 *
 * @public
 */
export interface ReservationOffering {
  /**
   * The offering identifier.
   *
   * @public
   */
  offeringId?: string | undefined;

  /**
   * The duration, in seconds, for which the reservation reserves the RPUs.
   *
   * @public
   */
  duration?: number | undefined;

  /**
   * The up-front price you are charged for the reservation.
   *
   * @public
   */
  upfrontCharge?: number | undefined;

  /**
   * The rate you are charged for each hour the reservation is active.
   *
   * @public
   */
  hourlyCharge?: number | undefined;

  /**
   * The currency code for the offering.
   *
   * @public
   */
  currencyCode?: string | undefined;

  /**
   * Determines the payment schedule for the reservation.
   *
   * @public
   */
  offeringType?: OfferingType | undefined;
}

/**
 * Represents an Amazon Redshift Serverless reservation, which gives you the option to commit to a specified number of Redshift Processing Units (RPUs) for a year at a discount from Serverless on-demand (OD) rates.
 *
 * @public
 */
export interface Reservation {
  /**
   * The identifier that uniquely identifies the serverless reservation.
   *
   * @public
   */
  reservationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that uniquely identifies the serverless reservation.
   *
   * @public
   */
  reservationArn?: string | undefined;

  /**
   * The start date for the serverless reservation. This is the date you created the reservation.
   *
   * @public
   */
  startDate?: Date | undefined;

  /**
   * The end date for the serverless reservation. This date is one year after the start date that you specify.
   *
   * @public
   */
  endDate?: Date | undefined;

  /**
   * The number of Redshift Processing Units (RPUs) to reserve.
   *
   * @public
   */
  capacity?: number | undefined;

  /**
   * The type of offering for the reservation. The offering class determines the payment schedule for the reservation.
   *
   * @public
   */
  offering?: ReservationOffering | undefined;

  /**
   * The status of the reservation. Possible values include the following:
   *
   * - `payment-pending`
   * - `active`
   * - `payment-failed`
   * - `retired`
   *
   * @public
   */
  status?: string | undefined;
}

/**
 * @public
 */
export interface CreateReservationResponse {
  /**
   * The reservation object that the `CreateReservation` action created.
   *
   * @public
   */
  reservation?: Reservation | undefined;
}

/**
 * The schedule of when Amazon Redshift Serverless should run the scheduled action.
 *
 * @public
 */
export type Schedule =
  | Schedule.AtMember
  | Schedule.CronMember
  | Schedule.$UnknownMember;

/**
 * @public
 */
export namespace Schedule {
  /**
   * The timestamp of when Amazon Redshift Serverless should run the scheduled action. Timestamp is in UTC. Format of at expression is `yyyy-mm-ddThh:mm:ss`. For example, `2016-03-04T17:27:00`.
   *
   * @public
   */
  export interface AtMember {
    at: Date;
    cron?: never;
    $unknown?: never;
  }

  /**
   * The cron expression to use to schedule a recurring scheduled action. Schedule invocations must be separated by at least one hour. Times are in UTC.
   *
   * Format of cron expressions is `(Minutes Hours Day-of-month Month Day-of-week Year)`. For example, `"(0 10 ? * MON *)"`. For more information, see [Cron Expressions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions) in the *Amazon CloudWatch Events User Guide*.
   *
   * @public
   */
  export interface CronMember {
    at?: never;
    cron: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    at?: never;
    cron?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    at: (value: Date) => T;
    cron: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * The parameters that you can use to configure a [scheduled action](https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateScheduledAction.html) to create a snapshot. For more information about creating a scheduled action, see [CreateScheduledAction](https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateScheduledAction.html).
 *
 * @public
 */
export interface CreateSnapshotScheduleActionParameters {
  /**
   * The name of the namespace for which you want to configure a scheduled action to create a snapshot.
   *
   * @public
   */
  namespaceName: string | undefined;

  /**
   * A string prefix that is attached to the name of the snapshot created by the scheduled action. The final name of the snapshot is the string prefix appended by the date and time of when the snapshot was created.
   *
   * @public
   */
  snapshotNamePrefix: string | undefined;

  /**
   * The retention period of the snapshot created by the scheduled action.
   *
   * @public
   */
  retentionPeriod?: number | undefined;

  /**
   * An array of [Tag objects](https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_Tag.html) to associate with the snapshot.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * A JSON format string of the Amazon Redshift Serverless API operation with input parameters. The following is an example of a target action.
 *
 * `"\{"CreateSnapshot": \{"NamespaceName": "sampleNamespace","SnapshotName": "sampleSnapshot", "retentionPeriod": "1"\}\}"`
 *
 * @public
 */
export type TargetAction =
  | TargetAction.CreateSnapshotMember
  | TargetAction.$UnknownMember;

/**
 * @public
 */
export namespace TargetAction {
  /**
   * The parameters that you can use to configure a [scheduled action](https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateScheduledAction.html) to create a snapshot. For more information about creating a scheduled action, see [CreateScheduledAction](https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_CreateScheduledAction.html).
   *
   * @public
   */
  export interface CreateSnapshotMember {
    createSnapshot: CreateSnapshotScheduleActionParameters;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    createSnapshot?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    createSnapshot: (value: CreateSnapshotScheduleActionParameters) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateScheduledActionRequest {
  /**
   * The name of the scheduled action.
   *
   * @public
   */
  scheduledActionName: string | undefined;

  /**
   * A JSON format string of the Amazon Redshift Serverless API operation with input parameters. The following is an example of a target action.
   *
   * `"\{"CreateSnapshot": \{"NamespaceName": "sampleNamespace","SnapshotName": "sampleSnapshot", "retentionPeriod": "1"\}\}"`
   *
   * @public
   */
  targetAction: TargetAction | undefined;

  /**
   * The schedule for a one-time (at timestamp format) or recurring (cron format) scheduled action. Schedule invocations must be separated by at least one hour. Times are in UTC.
   *
   * - Format of at timestamp is `yyyy-mm-ddThh:mm:ss`. For example, `2016-03-04T17:27:00`.
   * - Format of cron expression is `(Minutes Hours Day-of-month Month Day-of-week Year)`. For example, `"(0 10 ? * MON *)"`. For more information, see [Cron Expressions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions) in the *Amazon CloudWatch Events User Guide*.
   *
   * @public
   */
  schedule: Schedule | undefined;

  /**
   * The ARN of the IAM role to assume to run the scheduled action. This IAM role must have permission to run the Amazon Redshift Serverless API operation in the scheduled action. This IAM role must allow the Amazon Redshift scheduler to schedule creating snapshots. (Principal scheduler.redshift.amazonaws.com) to assume permissions on your behalf. For more information about the IAM role to use with the Amazon Redshift scheduler, see [Using Identity-Based Policies for Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html) in the Amazon Redshift Management Guide
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * The name of the namespace for which to create a scheduled action.
   *
   * @public
   */
  namespaceName: string | undefined;

  /**
   * Indicates whether the schedule is enabled. If false, the scheduled action does not trigger. For more information about `state` of the scheduled action, see [ScheduledAction](https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_ScheduledAction.html).
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The description of the scheduled action.
   *
   * @public
   */
  scheduledActionDescription?: string | undefined;

  /**
   * The start time in UTC when the schedule is active. Before this time, the scheduled action does not trigger.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time in UTC when the schedule is no longer active. After this time, the scheduled action does not trigger.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * The returned scheduled action object.
 *
 * @public
 */
export interface ScheduledActionResponse {
  /**
   * The name of the scheduled action.
   *
   * @public
   */
  scheduledActionName?: string | undefined;

  /**
   * The schedule for a one-time (at timestamp format) or recurring (cron format) scheduled action. Schedule invocations must be separated by at least one hour. Times are in UTC.
   *
   * - Format of at timestamp is `yyyy-mm-ddThh:mm:ss`. For example, `2016-03-04T17:27:00`.
   * - Format of cron expression is `(Minutes Hours Day-of-month Month Day-of-week Year)`. For example, `"(0 10 ? * MON *)"`. For more information, see [Cron Expressions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions) in the *Amazon CloudWatch Events User Guide*.
   *
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * The description of the scheduled action.
   *
   * @public
   */
  scheduledActionDescription?: string | undefined;

  /**
   * An array of timestamps of when the next scheduled actions will trigger.
   *
   * @public
   */
  nextInvocations?: Date[] | undefined;

  /**
   * The ARN of the IAM role to assume to run the scheduled action. This IAM role must have permission to run the Amazon Redshift Serverless API operation in the scheduled action. This IAM role must allow the Amazon Redshift scheduler to schedule creating snapshots. (Principal scheduler.redshift.amazonaws.com) to assume permissions on your behalf. For more information about the IAM role to use with the Amazon Redshift scheduler, see [Using Identity-Based Policies for Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html) in the Amazon Redshift Management Guide
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The state of the scheduled action.
   *
   * @public
   */
  state?: State | undefined;

  /**
   * The start time in UTC when the schedule is active. Before this time, the scheduled action does not trigger.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time of
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * A JSON format string of the Amazon Redshift Serverless API operation with input parameters. The following is an example of a target action.
   *
   * `"\{"CreateSnapshot": \{"NamespaceName": "sampleNamespace","SnapshotName": "sampleSnapshot", "retentionPeriod": "1"\}\}"`
   *
   * @public
   */
  targetAction?: TargetAction | undefined;

  /**
   * The end time in UTC when the schedule is no longer active. After this time, the scheduled action does not trigger.
   *
   * @public
   */
  namespaceName?: string | undefined;

  /**
   * The uuid of the scheduled action.
   *
   * @public
   */
  scheduledActionUuid?: string | undefined;
}

/**
 * @public
 */
export interface CreateScheduledActionResponse {
  /**
   * The returned `ScheduledAction` object that describes the properties of a scheduled action.
   *
   * @public
   */
  scheduledAction?: ScheduledActionResponse | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotRequest {
  /**
   * The namespace to create a snapshot for.
   *
   * @public
   */
  namespaceName: string | undefined;

  /**
   * The name of the snapshot.
   *
   * @public
   */
  snapshotName: string | undefined;

  /**
   * How long to retain the created snapshot.
   *
   * @public
   */
  retentionPeriod?: number | undefined;

  /**
   * An array of [Tag objects](https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_Tag.html) to associate with the snapshot.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotResponse {
  /**
   * The created snapshot object.
   *
   * @public
   */
  snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotCopyConfigurationRequest {
  /**
   * The name of the namespace to copy snapshots from.
   *
   * @public
   */
  namespaceName: string | undefined;

  /**
   * The destination Amazon Web Services Region that you want to copy snapshots to.
   *
   * @public
   */
  destinationRegion: string | undefined;

  /**
   * The retention period of the snapshots that you copy to the destination Amazon Web Services Region.
   *
   * @public
   */
  snapshotRetentionPeriod?: number | undefined;

  /**
   * The KMS key to use to encrypt your snapshots in the destination Amazon Web Services Region.
   *
   * @public
   */
  destinationKmsKeyId?: string | undefined;
}

/**
 * The object that you configure to copy snapshots from one namespace to a namespace in another Amazon Web Services Region.
 *
 * @public
 */
export interface SnapshotCopyConfiguration {
  /**
   * The ID of the snapshot copy configuration object.
   *
   * @public
   */
  snapshotCopyConfigurationId?: string | undefined;

  /**
   * The ARN of the snapshot copy configuration object.
   *
   * @public
   */
  snapshotCopyConfigurationArn?: string | undefined;

  /**
   * The name of the namespace to copy snapshots from in the source Amazon Web Services Region.
   *
   * @public
   */
  namespaceName?: string | undefined;

  /**
   * The destination Amazon Web Services Region to copy snapshots to.
   *
   * @public
   */
  destinationRegion?: string | undefined;

  /**
   * The retention period of snapshots that are copied to the destination Amazon Web Services Region.
   *
   * @public
   */
  snapshotRetentionPeriod?: number | undefined;

  /**
   * The ID of the KMS key to use to encrypt your snapshots in the destination Amazon Web Services Region.
   *
   * @public
   */
  destinationKmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateSnapshotCopyConfigurationResponse {
  /**
   * The snapshot copy configuration object that is returned.
   *
   * @public
   */
  snapshotCopyConfiguration: SnapshotCopyConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateUsageLimitRequest {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Redshift Serverless resource to create the usage limit for.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The type of Amazon Redshift Serverless usage to create a usage limit for.
   *
   * @public
   */
  usageType: UsageLimitUsageType | undefined;

  /**
   * The limit amount. If time-based, this amount is in Redshift Processing Units (RPU) consumed per hour. If data-based, this amount is in terabytes (TB) of data transferred between Regions in cross-account sharing. The value must be a positive number.
   *
   * @public
   */
  amount: number | undefined;

  /**
   * The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly.
   *
   * @public
   */
  period?: UsageLimitPeriod | undefined;

  /**
   * The action that Amazon Redshift Serverless takes when the limit is reached. The default is log.
   *
   * @public
   */
  breachAction?: UsageLimitBreachAction | undefined;
}

/**
 * The usage limit object.
 *
 * @public
 */
export interface UsageLimit {
  /**
   * The identifier of the usage limit.
   *
   * @public
   */
  usageLimitId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the resource associated with the usage limit.
   *
   * @public
   */
  usageLimitArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that identifies the Amazon Redshift Serverless resource.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The Amazon Redshift Serverless feature to limit.
   *
   * @public
   */
  usageType?: UsageLimitUsageType | undefined;

  /**
   * The limit amount. If time-based, this amount is in RPUs consumed per hour. If data-based, this amount is in terabytes (TB). The value must be a positive number.
   *
   * @public
   */
  amount?: number | undefined;

  /**
   * The time period that the amount applies to. A weekly period begins on Sunday. The default is monthly.
   *
   * @public
   */
  period?: UsageLimitPeriod | undefined;

  /**
   * The action that Amazon Redshift Serverless takes when the limit is reached.
   *
   * @public
   */
  breachAction?: UsageLimitBreachAction | undefined;
}

/**
 * @public
 */
export interface CreateUsageLimitResponse {
  /**
   * The returned usage limit object.
   *
   * @public
   */
  usageLimit?: UsageLimit | undefined;
}

/**
 * An object that represents the price performance target settings for the workgroup.
 *
 * @public
 */
export interface PerformanceTarget {
  /**
   * Whether the price performance target is enabled for the workgroup.
   *
   * @public
   */
  status?: PerformanceTargetStatus | undefined;

  /**
   * The target price performance level for the workgroup. Valid values include 1, 25, 50, 75, and 100. These correspond to the price performance levels LOW_COST, ECONOMICAL, BALANCED, RESOURCEFUL, and HIGH_PERFORMANCE.
   *
   * @public
   */
  level?: number | undefined;
}

/**
 * @public
 */
export interface CreateWorkgroupRequest {
  /**
   * The name of the created workgroup.
   *
   * @public
   */
  workgroupName: string | undefined;

  /**
   * The name of the namespace to associate with the workgroup.
   *
   * @public
   */
  namespaceName: string | undefined;

  /**
   * The base data warehouse capacity of the workgroup in Redshift Processing Units (RPUs).
   *
   * @public
   */
  baseCapacity?: number | undefined;

  /**
   * The value that specifies whether to turn on enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC instead of over the internet.
   *
   * @public
   */
  enhancedVpcRouting?: boolean | undefined;

  /**
   * An array of parameters to set for advanced control over a database. The options are `auto_mv`, `datestyle`, `enable_case_sensitive_identifier`, `enable_user_activity_logging`, `query_group`, `search_path`, `require_ssl`, `use_fips_ssl`, and either `wlm_json_configuration` or query monitoring metrics that let you define performance boundaries. You can either specify individual query monitoring metrics (such as `max_scan_row_count`, `max_query_execution_time`) or use `wlm_json_configuration` to define query queues with rules, but not both. If you're using `wlm_json_configuration`, the maximum size of `parameterValue` is 8000 characters. For more information about query monitoring rules and available metrics, see [Query monitoring metrics for Amazon Redshift Serverless](https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics-serverless).
   *
   * @public
   */
  configParameters?: ConfigParameter[] | undefined;

  /**
   * An array of security group IDs to associate with the workgroup.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * An array of VPC subnet IDs to associate with the workgroup.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * A value that specifies whether the workgroup can be accessed from a public network.
   *
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * A array of tag instances.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The maximum data-warehouse capacity Amazon Redshift Serverless uses to serve queries. The max capacity is specified in RPUs.
   *
   * @public
   */
  maxCapacity?: number | undefined;

  /**
   * An object that represents the price performance target settings for the workgroup.
   *
   * @public
   */
  pricePerformanceTarget?: PerformanceTarget | undefined;

  /**
   * The IP address type that the workgroup supports. Possible values are `ipv4` and `dualstack`.
   *
   * @public
   */
  ipAddressType?: string | undefined;

  /**
   * An optional parameter for the name of the track for the workgroup. If you don't provide a track name, the workgroup is assigned to the `current` track.
   *
   * @public
   */
  trackName?: string | undefined;

  /**
   * If `true`, allocates additional compute resources for running automatic optimization operations.
   *
   * Default: false
   *
   * @public
   */
  extraComputeForAutomaticOptimization?: boolean | undefined;
}

/**
 * The VPC endpoint object.
 *
 * @public
 */
export interface Endpoint {
  /**
   * The DNS address of the VPC endpoint.
   *
   * @public
   */
  address?: string | undefined;

  /**
   * The port that Amazon Redshift Serverless listens on.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * An array of `VpcEndpoint` objects.
   *
   * @public
   */
  vpcEndpoints?: VpcEndpoint[] | undefined;
}

/**
 * The collection of computing resources from which an endpoint is created.
 *
 * @public
 */
export interface Workgroup {
  /**
   * The unique identifier of the workgroup.
   *
   * @public
   */
  workgroupId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) that links to the workgroup.
   *
   * @public
   */
  workgroupArn?: string | undefined;

  /**
   * The name of the workgroup.
   *
   * @public
   */
  workgroupName?: string | undefined;

  /**
   * The namespace the workgroup is associated with.
   *
   * @public
   */
  namespaceName?: string | undefined;

  /**
   * The base data warehouse capacity of the workgroup in Redshift Processing Units (RPUs).
   *
   * @public
   */
  baseCapacity?: number | undefined;

  /**
   * The value that specifies whether to enable enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.
   *
   * @public
   */
  enhancedVpcRouting?: boolean | undefined;

  /**
   * An array of parameters to set for advanced control over a database. The options are `auto_mv`, `datestyle`, `enable_case_sensitive_identifier`, `enable_user_activity_logging`, `query_group`, `search_path`, `require_ssl`, `use_fips_ssl`, and either `wlm_json_configuration` or query monitoring metrics that let you define performance boundaries. You can either specify individual query monitoring metrics (such as `max_scan_row_count`, `max_query_execution_time`) or use `wlm_json_configuration` to define query queues with rules, but not both. If you're using `wlm_json_configuration`, the maximum size of `parameterValue` is 8000 characters. For more information about query monitoring rules and available metrics, see [Query monitoring metrics for Amazon Redshift Serverless](https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics-serverless).
   *
   * @public
   */
  configParameters?: ConfigParameter[] | undefined;

  /**
   * An array of security group IDs to associate with the workgroup.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * An array of subnet IDs the workgroup is associated with.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * The status of the workgroup.
   *
   * @public
   */
  status?: WorkgroupStatus | undefined;

  /**
   * The endpoint that is created from the workgroup.
   *
   * @public
   */
  endpoint?: Endpoint | undefined;

  /**
   * A value that specifies whether the workgroup can be accessible from a public network.
   *
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * The creation date of the workgroup.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The custom domain name associated with the workgroup.
   *
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * The custom domain name’s certificate Amazon resource name (ARN).
   *
   * @public
   */
  customDomainCertificateArn?: string | undefined;

  /**
   * The expiration time for the certificate.
   *
   * @public
   */
  customDomainCertificateExpiryTime?: Date | undefined;

  /**
   * The Amazon Redshift Serverless version of your workgroup. For more information about Amazon Redshift Serverless versions, see[Cluster versions for Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/cluster-versions.html).
   *
   * @public
   */
  workgroupVersion?: string | undefined;

  /**
   * The patch version of your Amazon Redshift Serverless workgroup. For more information about patch versions, see [Cluster versions for Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/cluster-versions.html).
   *
   * @public
   */
  patchVersion?: string | undefined;

  /**
   * The maximum data-warehouse capacity Amazon Redshift Serverless uses to serve queries. The max capacity is specified in RPUs.
   *
   * @public
   */
  maxCapacity?: number | undefined;

  /**
   * A list of VPCs. Each entry is the unique identifier of a virtual private cloud with access to Amazon Redshift Serverless. If all of the VPCs for the grantee are allowed, it shows an asterisk.
   *
   * @public
   */
  crossAccountVpcs?: string[] | undefined;

  /**
   * The IP address type that the workgroup supports. Possible values are `ipv4` and `dualstack`.
   *
   * @public
   */
  ipAddressType?: string | undefined;

  /**
   * An object that represents the price performance target settings for the workgroup.
   *
   * @public
   */
  pricePerformanceTarget?: PerformanceTarget | undefined;

  /**
   * The name of the track for the workgroup.
   *
   * @public
   */
  trackName?: string | undefined;

  /**
   * The name for the track that you want to assign to the workgroup. When the track changes, the workgroup is switched to the latest workgroup release available for the track. At this point, the track name is applied.
   *
   * @public
   */
  pendingTrackName?: string | undefined;

  /**
   * A boolean value that, if `true`, indicates that the workgroup allocates additional compute resources to run automatic optimization operations.
   *
   * Default: false
   *
   * @public
   */
  extraComputeForAutomaticOptimization?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateWorkgroupResponse {
  /**
   * The created workgroup object.
   *
   * @public
   */
  workgroup?: Workgroup | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointAccessRequest {
  /**
   * The name of the VPC endpoint to delete.
   *
   * @public
   */
  endpointName: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointAccessResponse {
  /**
   * The deleted VPC endpoint.
   *
   * @public
   */
  endpoint?: EndpointAccess | undefined;
}

/**
 * @public
 */
export interface GetEndpointAccessRequest {
  /**
   * The name of the VPC endpoint to return information for.
   *
   * @public
   */
  endpointName: string | undefined;
}

/**
 * @public
 */
export interface GetEndpointAccessResponse {
  /**
   * The returned VPC endpoint.
   *
   * @public
   */
  endpoint?: EndpointAccess | undefined;
}

/**
 * @public
 */
export interface ListEndpointAccessRequest {
  /**
   * If your initial `ListEndpointAccess` operation returns a `nextToken`, you can include the returned `nextToken` in following `ListEndpointAccess` operations, which returns results in the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to display the next page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The name of the workgroup associated with the VPC endpoint to return.
   *
   * @public
   */
  workgroupName?: string | undefined;

  /**
   * The unique identifier of the virtual private cloud with access to Amazon Redshift Serverless.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The owner Amazon Web Services account for the Amazon Redshift Serverless workgroup.
   *
   * @public
   */
  ownerAccount?: string | undefined;
}

/**
 * @public
 */
export interface ListEndpointAccessResponse {
  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The returned VPC endpoints.
   *
   * @public
   */
  endpoints: EndpointAccess[] | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointAccessRequest {
  /**
   * The name of the VPC endpoint to update.
   *
   * @public
   */
  endpointName: string | undefined;

  /**
   * The list of VPC security groups associated with the endpoint after the endpoint is modified.
   *
   * @public
   */
  vpcSecurityGroupIds?: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointAccessResponse {
  /**
   * The updated VPC endpoint.
   *
   * @public
   */
  endpoint?: EndpointAccess | undefined;
}

/**
 * @public
 */
export interface DeleteCustomDomainAssociationRequest {
  /**
   * The name of the workgroup associated with the database.
   *
   * @public
   */
  workgroupName: string | undefined;

  /**
   * The custom domain name associated with the workgroup.
   *
   * @public
   */
  customDomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomDomainAssociationResponse {}

/**
 * @public
 */
export interface DeleteNamespaceRequest {
  /**
   * The name of the namespace to delete.
   *
   * @public
   */
  namespaceName: string | undefined;

  /**
   * The name of the snapshot to be created before the namespace is deleted.
   *
   * @public
   */
  finalSnapshotName?: string | undefined;

  /**
   * How long to retain the final snapshot.
   *
   * @public
   */
  finalSnapshotRetentionPeriod?: number | undefined;
}

/**
 * @public
 */
export interface DeleteNamespaceResponse {
  /**
   * The deleted namespace object.
   *
   * @public
   */
  namespace: Namespace | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the policy to delete.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * @public
 */
export interface DeleteScheduledActionRequest {
  /**
   * The name of the scheduled action to delete.
   *
   * @public
   */
  scheduledActionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduledActionResponse {
  /**
   * The deleted scheduled action object.
   *
   * @public
   */
  scheduledAction?: ScheduledActionResponse | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotRequest {
  /**
   * The name of the snapshot to be deleted.
   *
   * @public
   */
  snapshotName: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotResponse {
  /**
   * The deleted snapshot object.
   *
   * @public
   */
  snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotCopyConfigurationRequest {
  /**
   * The ID of the snapshot copy configuration to delete.
   *
   * @public
   */
  snapshotCopyConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSnapshotCopyConfigurationResponse {
  /**
   * The deleted snapshot copy configuration object.
   *
   * @public
   */
  snapshotCopyConfiguration: SnapshotCopyConfiguration | undefined;
}

/**
 * @public
 */
export interface DeleteUsageLimitRequest {
  /**
   * The unique identifier of the usage limit to delete.
   *
   * @public
   */
  usageLimitId: string | undefined;
}

/**
 * @public
 */
export interface DeleteUsageLimitResponse {
  /**
   * The deleted usage limit object.
   *
   * @public
   */
  usageLimit?: UsageLimit | undefined;
}

/**
 * @public
 */
export interface DeleteWorkgroupRequest {
  /**
   * The name of the workgroup to be deleted.
   *
   * @public
   */
  workgroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkgroupResponse {
  /**
   * The deleted workgroup object.
   *
   * @public
   */
  workgroup: Workgroup | undefined;
}

/**
 * @public
 */
export interface GetCredentialsRequest {
  /**
   * The name of the database to get temporary authorization to log on to.
   *
   * Constraints:
   *
   * - Must be 1 to 64 alphanumeric characters or hyphens.
   * - Must contain only uppercase or lowercase letters, numbers, underscore, plus sign, period (dot), at symbol (@), or hyphen.
   * - The first character must be a letter.
   * - Must not contain a colon ( : ) or slash ( / ).
   * - Cannot be a reserved word. A list of reserved words can be found in [Reserved Words](https://docs.aws.amazon.com/redshift/latest/dg/r_pg_keywords.html) in the Amazon Redshift Database Developer Guide
   *
   * @public
   */
  dbName?: string | undefined;

  /**
   * The number of seconds until the returned temporary password expires. The minimum is 900 seconds, and the maximum is 3600 seconds.
   *
   * @public
   */
  durationSeconds?: number | undefined;

  /**
   * The name of the workgroup associated with the database.
   *
   * @public
   */
  workgroupName?: string | undefined;

  /**
   * The custom domain name associated with the workgroup. The custom domain name or the workgroup name must be included in the request.
   *
   * @public
   */
  customDomainName?: string | undefined;
}

/**
 * @public
 */
export interface GetCredentialsResponse {
  /**
   * A database user name that is authorized to log on to the database `DbName` using the password `DbPassword`. If the specified `DbUser` exists in the database, the new user name has the same database privileges as the the user named in `DbUser`. By default, the user is added to PUBLIC.
   *
   * @public
   */
  dbUser?: string | undefined;

  /**
   * A temporary password that authorizes the user name returned by `DbUser` to log on to the database `DbName`.
   *
   * @public
   */
  dbPassword?: string | undefined;

  /**
   * The date and time the password in `DbPassword` expires.
   *
   * @public
   */
  expiration?: Date | undefined;

  /**
   * The date and time of when the `DbUser` and `DbPassword` authorization refreshes.
   *
   * @public
   */
  nextRefreshTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetCustomDomainAssociationRequest {
  /**
   * The custom domain name associated with the workgroup.
   *
   * @public
   */
  customDomainName: string | undefined;

  /**
   * The name of the workgroup associated with the database.
   *
   * @public
   */
  workgroupName: string | undefined;
}

/**
 * @public
 */
export interface GetCustomDomainAssociationResponse {
  /**
   * The custom domain name associated with the workgroup.
   *
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * The name of the workgroup associated with the database.
   *
   * @public
   */
  workgroupName?: string | undefined;

  /**
   * The custom domain name’s certificate Amazon resource name (ARN).
   *
   * @public
   */
  customDomainCertificateArn?: string | undefined;

  /**
   * The expiration time for the certificate.
   *
   * @public
   */
  customDomainCertificateExpiryTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetIdentityCenterAuthTokenRequest {
  /**
   * A list of workgroup names for which to generate the Identity Center authentication token.
   *
   * Constraints:
   *
   * - Must contain between 1 and 20 workgroup names.
   * - Each workgroup name must be a valid Amazon Redshift Serverless workgroup identifier.
   * - All specified workgroups must have Identity Center integration enabled.
   *
   * @public
   */
  workgroupNames: string[] | undefined;
}

/**
 * @public
 */
export interface GetIdentityCenterAuthTokenResponse {
  /**
   * The Identity Center authentication token that can be used to access data in the specified workgroups.
   *
   * This token contains the Identity Center identity information and is encrypted for secure transmission.
   *
   * @public
   */
  token?: string | undefined;

  /**
   * The date and time when the Identity Center authentication token expires.
   *
   * After this time, a new token must be requested for continued access.
   *
   * @public
   */
  expirationTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetNamespaceRequest {
  /**
   * The name of the namespace to retrieve information for.
   *
   * @public
   */
  namespaceName: string | undefined;
}

/**
 * @public
 */
export interface GetNamespaceResponse {
  /**
   * The returned namespace object.
   *
   * @public
   */
  namespace: Namespace | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPointRequest {
  /**
   * The unique identifier of the recovery point to return information for.
   *
   * @public
   */
  recoveryPointId: string | undefined;
}

/**
 * The automatically created recovery point of a namespace. Recovery points are created every 30 minutes and kept for 24 hours.
 *
 * @public
 */
export interface RecoveryPoint {
  /**
   * The unique identifier of the recovery point.
   *
   * @public
   */
  recoveryPointId?: string | undefined;

  /**
   * The time the recovery point is created.
   *
   * @public
   */
  recoveryPointCreateTime?: Date | undefined;

  /**
   * The total size of the data in the recovery point in megabytes.
   *
   * @public
   */
  totalSizeInMegaBytes?: number | undefined;

  /**
   * The name of the namespace the recovery point is associated with.
   *
   * @public
   */
  namespaceName?: string | undefined;

  /**
   * The name of the workgroup the recovery point is associated with.
   *
   * @public
   */
  workgroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the namespace the recovery point is associated with.
   *
   * @public
   */
  namespaceArn?: string | undefined;
}

/**
 * @public
 */
export interface GetRecoveryPointResponse {
  /**
   * The returned recovery point object.
   *
   * @public
   */
  recoveryPoint?: RecoveryPoint | undefined;
}

/**
 * @public
 */
export interface GetReservationRequest {
  /**
   * The ID of the reservation to retrieve.
   *
   * @public
   */
  reservationId: string | undefined;
}

/**
 * @public
 */
export interface GetReservationResponse {
  /**
   * The returned reservation object.
   *
   * @public
   */
  reservation: Reservation | undefined;
}

/**
 * @public
 */
export interface GetReservationOfferingRequest {
  /**
   * The identifier for the offering..
   *
   * @public
   */
  offeringId: string | undefined;
}

/**
 * @public
 */
export interface GetReservationOfferingResponse {
  /**
   * The returned reservation offering. The offering determines the payment schedule for the reservation.
   *
   * @public
   */
  reservationOffering: ReservationOffering | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to return.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * The resource policy object. Currently, you can use policies to share snapshots across Amazon Web Services accounts.
 *
 * @public
 */
export interface ResourcePolicy {
  /**
   * The Amazon Resource Name (ARN) of the policy.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The resource policy.
   *
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * The returned resource policy.
   *
   * @public
   */
  resourcePolicy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface GetScheduledActionRequest {
  /**
   * The name of the scheduled action.
   *
   * @public
   */
  scheduledActionName: string | undefined;
}

/**
 * @public
 */
export interface GetScheduledActionResponse {
  /**
   * The returned scheduled action object.
   *
   * @public
   */
  scheduledAction?: ScheduledActionResponse | undefined;
}

/**
 * @public
 */
export interface GetSnapshotRequest {
  /**
   * The name of the snapshot to return.
   *
   * @public
   */
  snapshotName?: string | undefined;

  /**
   * The owner Amazon Web Services account of a snapshot shared with another user.
   *
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the snapshot to return.
   *
   * @public
   */
  snapshotArn?: string | undefined;
}

/**
 * @public
 */
export interface GetSnapshotResponse {
  /**
   * The returned snapshot object.
   *
   * @public
   */
  snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface GetTableRestoreStatusRequest {
  /**
   * The ID of the `RestoreTableFromSnapshot` request to return status for.
   *
   * @public
   */
  tableRestoreRequestId: string | undefined;
}

/**
 * Contains information about a table restore request.
 *
 * @public
 */
export interface TableRestoreStatus {
  /**
   * The ID of the RestoreTableFromSnapshot request.
   *
   * @public
   */
  tableRestoreRequestId?: string | undefined;

  /**
   * A value that describes the current state of the table restore request. Possible values are `SUCCEEDED`, `FAILED`, `CANCELED`, `PENDING`, and `IN_PROGRESS`.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * A message that explains the returned status. For example, if the status of the operation is `FAILED`, the message explains why the operation failed.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The time that the table restore request was made, in Universal Coordinated Time (UTC).
   *
   * @public
   */
  requestTime?: Date | undefined;

  /**
   * The namespace of the table being restored from.
   *
   * @public
   */
  namespaceName?: string | undefined;

  /**
   * The name of the workgroup being restored from.
   *
   * @public
   */
  workgroupName?: string | undefined;

  /**
   * The name of the snapshot being restored from.
   *
   * @public
   */
  snapshotName?: string | undefined;

  /**
   * The amount of data restored to the new table so far, in megabytes (MB).
   *
   * @public
   */
  progressInMegaBytes?: number | undefined;

  /**
   * The total amount of data to restore to the new table, in megabytes (MB).
   *
   * @public
   */
  totalDataInMegaBytes?: number | undefined;

  /**
   * The name of the source database being restored from.
   *
   * @public
   */
  sourceDatabaseName?: string | undefined;

  /**
   * The name of the source schema being restored from.
   *
   * @public
   */
  sourceSchemaName?: string | undefined;

  /**
   * The name of the source table being restored from.
   *
   * @public
   */
  sourceTableName?: string | undefined;

  /**
   * The name of the database to restore to.
   *
   * @public
   */
  targetDatabaseName?: string | undefined;

  /**
   * The name of the schema to restore to.
   *
   * @public
   */
  targetSchemaName?: string | undefined;

  /**
   * The name of the table to create from the restore operation.
   *
   * @public
   */
  newTableName?: string | undefined;

  /**
   * The ID of the recovery point being restored from.
   *
   * @public
   */
  recoveryPointId?: string | undefined;
}

/**
 * @public
 */
export interface GetTableRestoreStatusResponse {
  /**
   * The returned `TableRestoreStatus` object that contains information about the status of your `RestoreTableFromSnapshot` request.
   *
   * @public
   */
  tableRestoreStatus?: TableRestoreStatus | undefined;
}

/**
 * @public
 */
export interface GetTrackRequest {
  /**
   * The name of the track of which its version is fetched.
   *
   * @public
   */
  trackName: string | undefined;
}

/**
 * A track that you can switch the current track to.
 *
 * @public
 */
export interface UpdateTarget {
  /**
   * The name of the new track.
   *
   * @public
   */
  trackName?: string | undefined;

  /**
   * The workgroup version for the new track.
   *
   * @public
   */
  workgroupVersion?: string | undefined;
}

/**
 * Defines a track that determines which Amazon Redshift version to apply after a new version is released. If the value for `ServerlessTrack` is `current`, the workgroup is updated to the most recently certified release. If the value is `trailing`, the workgroup is updated to the previously certified release.
 *
 * @public
 */
export interface ServerlessTrack {
  /**
   * The name of the track. Valid values are `current` and `trailing`.
   *
   * @public
   */
  trackName?: string | undefined;

  /**
   * The workgroup version number for the workgroup release.
   *
   * @public
   */
  workgroupVersion?: string | undefined;

  /**
   * An array of `UpdateTarget` objects to update with the track.
   *
   * @public
   */
  updateTargets?: UpdateTarget[] | undefined;
}

/**
 * @public
 */
export interface GetTrackResponse {
  /**
   * The version of the specified track.
   *
   * @public
   */
  track?: ServerlessTrack | undefined;
}

/**
 * @public
 */
export interface GetUsageLimitRequest {
  /**
   * The unique identifier of the usage limit to return information for.
   *
   * @public
   */
  usageLimitId: string | undefined;
}

/**
 * @public
 */
export interface GetUsageLimitResponse {
  /**
   * The returned usage limit object.
   *
   * @public
   */
  usageLimit?: UsageLimit | undefined;
}

/**
 * @public
 */
export interface GetWorkgroupRequest {
  /**
   * The name of the workgroup to return information for.
   *
   * @public
   */
  workgroupName: string | undefined;
}

/**
 * @public
 */
export interface GetWorkgroupResponse {
  /**
   * The returned workgroup object.
   *
   * @public
   */
  workgroup: Workgroup | undefined;
}

/**
 * @public
 */
export interface ListCustomDomainAssociationsRequest {
  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to display the next page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The custom domain name associated with the workgroup.
   *
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * The custom domain name’s certificate Amazon resource name (ARN).
   *
   * @public
   */
  customDomainCertificateArn?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomDomainAssociationsResponse {
  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of Association objects.
   *
   * @public
   */
  associations?: Association[] | undefined;
}

/**
 * @public
 */
export interface ListManagedWorkgroupsRequest {
  /**
   * The Amazon Resource Name (ARN) for the managed workgroup in the Glue Data Catalog.
   *
   * @public
   */
  sourceArn?: string | undefined;

  /**
   * If your initial ListManagedWorkgroups operation returns a nextToken, you can include the returned nextToken in following ListManagedWorkgroups operations, which returns results in the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use nextToken to display the next page of results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A collection of Amazon Redshift compute resources managed by Glue.
 *
 * @public
 */
export interface ManagedWorkgroupListItem {
  /**
   * The name of the managed workgroup.
   *
   * @public
   */
  managedWorkgroupName?: string | undefined;

  /**
   * The unique identifier of the managed workgroup.
   *
   * @public
   */
  managedWorkgroupId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the managed workgroup in the Glue Data Catalog.
   *
   * @public
   */
  sourceArn?: string | undefined;

  /**
   * The status of the managed workgroup.
   *
   * @public
   */
  status?: ManagedWorkgroupStatus | undefined;

  /**
   * The creation date of the managed workgroup.
   *
   * @public
   */
  creationDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListManagedWorkgroupsResponse {
  /**
   * If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The returned array of managed workgroups.
   *
   * @public
   */
  managedWorkgroups?: ManagedWorkgroupListItem[] | undefined;
}

/**
 * @public
 */
export interface ListNamespacesRequest {
  /**
   * If your initial `ListNamespaces` operation returns a `nextToken`, you can include the returned `nextToken` in following `ListNamespaces` operations, which returns results in the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to display the next page of results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListNamespacesResponse {
  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of returned namespaces.
   *
   * @public
   */
  namespaces: Namespace[] | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPointsRequest {
  /**
   * If your initial `ListRecoveryPoints` operation returns a `nextToken`, you can include the returned `nextToken` in following `ListRecoveryPoints` operations, which returns results in the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to display the next page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The time when the recovery point's creation was initiated.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The time when creation of the recovery point finished.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The name of the namespace to list recovery points for.
   *
   * @public
   */
  namespaceName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the namespace from which to list recovery points.
   *
   * @public
   */
  namespaceArn?: string | undefined;
}

/**
 * @public
 */
export interface ListRecoveryPointsResponse {
  /**
   * The returned recovery point objects.
   *
   * @public
   */
  recoveryPoints?: RecoveryPoint[] | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReservationOfferingsRequest {
  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListReservationOfferingsResponse {
  /**
   * The returned list of reservation offerings.
   *
   * @public
   */
  reservationOfferingsList: ReservationOffering[] | undefined;

  /**
   * The token to use when requesting the next set of items.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReservationsRequest {
  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of items to return for this call. The call also returns a token that you can specify in a subsequent call to get the next set of results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListReservationsResponse {
  /**
   * The serverless reservations returned by the request.
   *
   * @public
   */
  reservationsList: Reservation[] | undefined;

  /**
   * The token to use when requesting the next set of items.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScheduledActionsRequest {
  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. Use `nextToken` to display the next page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The name of namespace associated with the scheduled action to retrieve.
   *
   * @public
   */
  namespaceName?: string | undefined;
}

/**
 * Contains names of objects associated with a scheduled action.
 *
 * @public
 */
export interface ScheduledActionAssociation {
  /**
   * Name of associated Amazon Redshift Serverless namespace.
   *
   * @public
   */
  namespaceName?: string | undefined;

  /**
   * Name of associated scheduled action.
   *
   * @public
   */
  scheduledActionName?: string | undefined;
}

/**
 * @public
 */
export interface ListScheduledActionsResponse {
  /**
   * If nextToken is returned, there are more results available. The value of nextToken is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * All of the returned scheduled action association objects.
   *
   * @public
   */
  scheduledActions?: ScheduledActionAssociation[] | undefined;
}

/**
 * @public
 */
export interface ListSnapshotCopyConfigurationsRequest {
  /**
   * The namespace from which to list all snapshot copy configurations.
   *
   * @public
   */
  namespaceName?: string | undefined;

  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to display the next page of results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSnapshotCopyConfigurationsResponse {
  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * All of the returned snapshot copy configurations.
   *
   * @public
   */
  snapshotCopyConfigurations: SnapshotCopyConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListSnapshotsRequest {
  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to display the next page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The namespace from which to list all snapshots.
   *
   * @public
   */
  namespaceName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the namespace from which to list all snapshots.
   *
   * @public
   */
  namespaceArn?: string | undefined;

  /**
   * The owner Amazon Web Services account of the snapshot.
   *
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * The time when the creation of the snapshot was initiated.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The timestamp showing when the snapshot creation finished.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSnapshotsResponse {
  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * All of the returned snapshot objects.
   *
   * @public
   */
  snapshots?: Snapshot[] | undefined;
}

/**
 * @public
 */
export interface ListTableRestoreStatusRequest {
  /**
   * If your initial `ListTableRestoreStatus` operation returns a nextToken, you can include the returned `nextToken` in following `ListTableRestoreStatus` operations. This will return results on the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use nextToken to display the next page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The namespace from which to list all of the statuses of `RestoreTableFromSnapshot` operations .
   *
   * @public
   */
  namespaceName?: string | undefined;

  /**
   * The workgroup from which to list all of the statuses of `RestoreTableFromSnapshot` operations.
   *
   * @public
   */
  workgroupName?: string | undefined;
}

/**
 * @public
 */
export interface ListTableRestoreStatusResponse {
  /**
   * If your initial `ListTableRestoreStatus` operation returns a `nextToken`, you can include the returned `nextToken` in following `ListTableRestoreStatus` operations. This will returns results on the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The array of returned `TableRestoreStatus` objects.
   *
   * @public
   */
  tableRestoreStatuses?: TableRestoreStatus[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to list tags for.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A map of the key-value pairs assigned to the resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTracksRequest {
  /**
   * If your initial `ListTracksRequest` operation returns a `nextToken`, you can include the returned `nextToken` in following `ListTracksRequest` operations, which returns results in the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of response records to return in each call. If the number of remaining response records exceeds the specified MaxRecords value, a value is returned in a marker field of the response. You can retrieve the next set of records by retrying the command with the returned marker value.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListTracksResponse {
  /**
   * The returned tracks.
   *
   * @public
   */
  tracks?: ServerlessTrack[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListUsageLimitsRequest {
  /**
   * The Amazon Resource Name (ARN) associated with the resource whose usage limits you want to list.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The Amazon Redshift Serverless feature whose limits you want to see.
   *
   * @public
   */
  usageType?: UsageLimitUsageType | undefined;

  /**
   * If your initial `ListUsageLimits` operation returns a `nextToken`, you can include the returned `nextToken` in following `ListUsageLimits` operations, which returns results in the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to get the next page of results. The default is 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListUsageLimitsResponse {
  /**
   * An array of returned usage limit objects.
   *
   * @public
   */
  usageLimits?: UsageLimit[] | undefined;

  /**
   * When `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. Make the call again using the returned token to retrieve the next page.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkgroupsRequest {
  /**
   * If your initial ListWorkgroups operation returns a `nextToken`, you can include the returned `nextToken` in following ListNamespaces operations, which returns results in the next page.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An optional parameter that specifies the maximum number of results to return. You can use `nextToken` to display the next page of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The owner Amazon Web Services account for the Amazon Redshift Serverless workgroup.
   *
   * @public
   */
  ownerAccount?: string | undefined;
}

/**
 * @public
 */
export interface ListWorkgroupsResponse {
  /**
   * If `nextToken` is returned, there are more results available. The value of `nextToken` is a unique pagination token for each page. To retrieve the next page, make the call again using the returned token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The returned array of workgroups.
   *
   * @public
   */
  workgroups: Workgroup[] | undefined;
}

/**
 * @public
 */
export interface UpdateLakehouseConfigurationRequest {
  /**
   * The name of the namespace whose lakehouse configuration you want to modify.
   *
   * @public
   */
  namespaceName: string | undefined;

  /**
   * Specifies whether to register or deregister the namespace with Amazon Redshift federated permissions. Valid values are `Register` or `Deregister`.
   *
   * @public
   */
  lakehouseRegistration?: LakehouseRegistration | undefined;

  /**
   * The name of the Glue Data Catalog that will be associated with the namespace enabled with Amazon Redshift federated permissions.
   *
   * Pattern: `^[a-z0-9_-]*[a-z]+[a-z0-9_-]*$`
   *
   * @public
   */
  catalogName?: string | undefined;

  /**
   * Modifies the Amazon Web Services IAM Identity Center trusted identity propagation on a namespace enabled with Amazon Redshift federated permissions. Valid values are `Associate` or `Disassociate`.
   *
   * @public
   */
  lakehouseIdcRegistration?: LakehouseIdcRegistration | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM Identity Center application used for enabling Amazon Web Services IAM Identity Center trusted identity propagation on a namespace enabled with Amazon Redshift federated permissions.
   *
   * @public
   */
  lakehouseIdcApplicationArn?: string | undefined;

  /**
   * A boolean value that, if `true`, validates the request without actually updating the lakehouse configuration. Use this to check for errors before making changes.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateLakehouseConfigurationResponse {
  /**
   * The name of the namespace.
   *
   * @public
   */
  namespaceName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM Identity Center application used for enabling Amazon Web Services IAM Identity Center trusted identity propagation.
   *
   * @public
   */
  lakehouseIdcApplicationArn?: string | undefined;

  /**
   * The current status of the lakehouse registration. Indicates whether the namespace is successfully registered with Amazon Redshift federated permissions.
   *
   * @public
   */
  lakehouseRegistrationStatus?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Glue Data Catalog associated with the lakehouse configuration.
   *
   * @public
   */
  catalogArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateNamespaceRequest {
  /**
   * The name of the namespace to update. You can't update the name of a namespace once it is created.
   *
   * @public
   */
  namespaceName: string | undefined;

  /**
   * The password of the administrator for the first database created in the namespace. This parameter must be updated together with `adminUsername`.
   *
   * You can't use `adminUserPassword` if `manageAdminPassword` is true.
   *
   * If your admin user account is locked, this operation also unlocks your account and resets the failed-login counter. This option is available only when account lockout security is enabled for the namespace.
   *
   * @public
   */
  adminUserPassword?: string | undefined;

  /**
   * The username of the administrator for the first database created in the namespace. This parameter must be updated together with `adminUserPassword`.
   *
   * @public
   */
  adminUsername?: string | undefined;

  /**
   * The ID of the Amazon Web Services Key Management Service key used to encrypt your data.
   *
   * @public
   */
  kmsKeyId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to set as a default in the namespace. This parameter must be updated together with `iamRoles`.
   *
   * @public
   */
  defaultIamRoleArn?: string | undefined;

  /**
   * A list of IAM roles to associate with the namespace. This parameter must be updated together with `defaultIamRoleArn`.
   *
   * @public
   */
  iamRoles?: string[] | undefined;

  /**
   * The types of logs the namespace can export. The export types are `userlog`, `connectionlog`, and `useractivitylog`.
   *
   * @public
   */
  logExports?: LogExport[] | undefined;

  /**
   * If `true`, Amazon Redshift uses Secrets Manager to manage the namespace's admin credentials. You can't use `adminUserPassword` if `manageAdminPassword` is true. If `manageAdminPassword` is false or not set, Amazon Redshift uses `adminUserPassword` for the admin user account's password.
   *
   * @public
   */
  manageAdminPassword?: boolean | undefined;

  /**
   * The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret. You can only use this parameter if `manageAdminPassword` is true.
   *
   * @public
   */
  adminPasswordSecretKmsKeyId?: string | undefined;

  /**
   * The destination for the log data. Valid values are `s3table` and `cloudwatch`.
   *
   * Set this to `s3table` to manage Amazon S3 Tables system-table publishing for the namespace.
   *
   * @public
   */
  logDestinationType?: LogDestinationType | undefined;

  /**
   * Whether to enable or disable Amazon S3 Tables publishing. Valid values are `Enable` and `Disable`, matched case-insensitively.
   *
   * When omitted, defaults to `Enable`. Valid only when `logDestinationType` is `s3table`.
   *
   * @public
   */
  s3TableAction?: S3TableAction | undefined;

  /**
   * The system tables to publish (on enable) or to stop publishing (on disable). Each value is either a system table view name that begins with `sys_` or the keyword `all`.
   *
   * Omitting this parameter, passing an empty list, or including `all` each select every current and future system table. Each name must be 1-128 characters, and the list can contain up to 256 names.
   *
   * Valid only when `logDestinationType` is `s3table`.
   *
   * @public
   */
  s3TableNames?: string[] | undefined;

  /**
   * The identifier of the Key Management Service key used to encrypt the published Amazon S3 Tables data. When omitted, the data is encrypted with SSE-S3 (Amazon S3 managed keys).
   *
   * Valid only when `logDestinationType` is `s3table`.
   *
   * @public
   */
  s3TableKmsKeyId?: string | undefined;

  /**
   * The scope of the Amazon S3 Tables destination. Valid values are `namespace` and `account`, matched case-insensitively. `namespace` scopes the published tables to this namespace; `account` scopes them to the Amazon Web Services account.
   *
   * Required when enabling. Omitting this parameter or passing a blank value fails with `ValidationException`. Valid only when `logDestinationType` is `s3table`.
   *
   * @public
   */
  s3TableGranularity?: S3TableGranularity | undefined;
}

/**
 * @public
 */
export interface UpdateNamespaceResponse {
  /**
   * A list of tag instances.
   *
   * @public
   */
  namespace: Namespace | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the account to create or update a resource policy for.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The policy to create or update. For example, the following policy grants a user authorization to restore a snapshot.
   *
   * `"\{\"Version\": \"2012-10-17\", \"Statement\" : [\{ \"Sid\": \"AllowUserRestoreFromSnapshot\", \"Principal\":\{\"AWS\": [\"739247239426\"]\}, \"Action\": [\"redshift-serverless:RestoreFromSnapshot\"] , \"Effect\": \"Allow\" \}]\}"`
   *
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * The policy that was created or updated.
   *
   * @public
   */
  resourcePolicy?: ResourcePolicy | undefined;
}

/**
 * @public
 */
export interface RestoreFromRecoveryPointRequest {
  /**
   * The unique identifier of the recovery point to restore from.
   *
   * @public
   */
  recoveryPointId: string | undefined;

  /**
   * The name of the namespace to restore data into.
   *
   * @public
   */
  namespaceName: string | undefined;

  /**
   * The name of the workgroup used to restore data.
   *
   * @public
   */
  workgroupName: string | undefined;

  /**
   * If `true`, maintain existing data sharing, zero-ETL and S3 event integrations when restoring. Otherwise, integrations will not be maintained after the restore operation. Integrations are only maintained when restored to the same serverless namespace.
   *
   * Default: true
   *
   * @public
   */
  maintainIntegration?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreFromRecoveryPointResponse {
  /**
   * The unique identifier of the recovery point used for the restore.
   *
   * @public
   */
  recoveryPointId?: string | undefined;

  /**
   * The namespace that data was restored into.
   *
   * @public
   */
  namespace?: Namespace | undefined;
}

/**
 * @public
 */
export interface RestoreTableFromRecoveryPointRequest {
  /**
   * Namespace of the recovery point to restore from.
   *
   * @public
   */
  namespaceName: string | undefined;

  /**
   * The workgroup to restore the table to.
   *
   * @public
   */
  workgroupName: string | undefined;

  /**
   * The ID of the recovery point to restore the table from.
   *
   * @public
   */
  recoveryPointId: string | undefined;

  /**
   * The name of the source database that contains the table being restored.
   *
   * @public
   */
  sourceDatabaseName: string | undefined;

  /**
   * The name of the source schema that contains the table being restored.
   *
   * @public
   */
  sourceSchemaName?: string | undefined;

  /**
   * The name of the source table being restored.
   *
   * @public
   */
  sourceTableName: string | undefined;

  /**
   * The name of the database to restore the table to.
   *
   * @public
   */
  targetDatabaseName?: string | undefined;

  /**
   * The name of the schema to restore the table to.
   *
   * @public
   */
  targetSchemaName?: string | undefined;

  /**
   * The name of the table to create from the restore operation.
   *
   * @public
   */
  newTableName: string | undefined;

  /**
   * Indicates whether name identifiers for database, schema, and table are case sensitive. If true, the names are case sensitive. If false, the names are not case sensitive. The default is false.
   *
   * @public
   */
  activateCaseSensitiveIdentifier?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreTableFromRecoveryPointResponse {
  /**
   * Contains information about a table restore request.
   *
   * @public
   */
  tableRestoreStatus?: TableRestoreStatus | undefined;
}

/**
 * @public
 */
export interface UpdateScheduledActionRequest {
  /**
   * The name of the scheduled action to update to.
   *
   * @public
   */
  scheduledActionName: string | undefined;

  /**
   * A JSON format string of the Amazon Redshift Serverless API operation with input parameters. The following is an example of a target action.
   *
   * `"\{"CreateSnapshot": \{"NamespaceName": "sampleNamespace","SnapshotName": "sampleSnapshot", "retentionPeriod": "1"\}\}"`
   *
   * @public
   */
  targetAction?: TargetAction | undefined;

  /**
   * The schedule for a one-time (at timestamp format) or recurring (cron format) scheduled action. Schedule invocations must be separated by at least one hour. Times are in UTC.
   *
   * - Format of at timestamp is `yyyy-mm-ddThh:mm:ss`. For example, `2016-03-04T17:27:00`.
   * - Format of cron expression is `(Minutes Hours Day-of-month Month Day-of-week Year)`. For example, `"(0 10 ? * MON *)"`. For more information, see [Cron Expressions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/events/ScheduledEvents.html#CronExpressions) in the *Amazon CloudWatch Events User Guide*.
   *
   * @public
   */
  schedule?: Schedule | undefined;

  /**
   * The ARN of the IAM role to assume to run the scheduled action. This IAM role must have permission to run the Amazon Redshift Serverless API operation in the scheduled action. This IAM role must allow the Amazon Redshift scheduler to schedule creating snapshots (Principal scheduler.redshift.amazonaws.com) to assume permissions on your behalf. For more information about the IAM role to use with the Amazon Redshift scheduler, see [Using Identity-Based Policies for Amazon Redshift](https://docs.aws.amazon.com/redshift/latest/mgmt/redshift-iam-access-control-identity-based.html) in the Amazon Redshift Management Guide
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Specifies whether to enable the scheduled action.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The descripion of the scheduled action to update to.
   *
   * @public
   */
  scheduledActionDescription?: string | undefined;

  /**
   * The start time in UTC of the scheduled action to update to.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The end time in UTC of the scheduled action to update.
   *
   * @public
   */
  endTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateScheduledActionResponse {
  /**
   * The ScheduledAction object that was updated.
   *
   * @public
   */
  scheduledAction?: ScheduledActionResponse | undefined;
}

/**
 * @public
 */
export interface RestoreFromSnapshotRequest {
  /**
   * The name of the namespace to restore the snapshot to.
   *
   * @public
   */
  namespaceName: string | undefined;

  /**
   * The name of the workgroup used to restore the snapshot.
   *
   * @public
   */
  workgroupName: string | undefined;

  /**
   * The name of the snapshot to restore from. Must not be specified at the same time as `snapshotArn`.
   *
   * @public
   */
  snapshotName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the snapshot to restore from. Required if restoring from a provisioned cluster to Amazon Redshift Serverless. Must not be specified at the same time as `snapshotName`.
   *
   * The format of the ARN is arn:aws:redshift:&lt;region&gt;:&lt;account_id&gt;:snapshot:&lt;cluster_identifier&gt;/&lt;snapshot_identifier&gt;.
   *
   * @public
   */
  snapshotArn?: string | undefined;

  /**
   * The Amazon Web Services account that owns the snapshot.
   *
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * If `true`, Amazon Redshift uses Secrets Manager to manage the restored snapshot's admin credentials. If `MmanageAdminPassword` is false or not set, Amazon Redshift uses the admin credentials that the namespace or cluster had at the time the snapshot was taken.
   *
   * @public
   */
  manageAdminPassword?: boolean | undefined;

  /**
   * The ID of the Key Management Service (KMS) key used to encrypt and store the namespace's admin credentials secret.
   *
   * @public
   */
  adminPasswordSecretKmsKeyId?: string | undefined;

  /**
   * If `true`, maintain existing data sharing, zero-ETL and S3 event integrations when restoring. Otherwise, integrations will not be maintained after the restore operation. Integrations are only maintained when restored to the same serverless namespace.
   *
   * Default: true
   *
   * @public
   */
  maintainIntegration?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreFromSnapshotResponse {
  /**
   * The name of the snapshot used to restore the namespace.
   *
   * @public
   */
  snapshotName?: string | undefined;

  /**
   * The owner Amazon Web Services; account of the snapshot that was restored.
   *
   * @public
   */
  ownerAccount?: string | undefined;

  /**
   * A collection of database objects and users.
   *
   * @public
   */
  namespace?: Namespace | undefined;
}

/**
 * @public
 */
export interface RestoreTableFromSnapshotRequest {
  /**
   * The namespace of the snapshot to restore from.
   *
   * @public
   */
  namespaceName: string | undefined;

  /**
   * The workgroup to restore the table to.
   *
   * @public
   */
  workgroupName: string | undefined;

  /**
   * The name of the snapshot to restore the table from.
   *
   * @public
   */
  snapshotName: string | undefined;

  /**
   * The name of the source database that contains the table being restored.
   *
   * @public
   */
  sourceDatabaseName: string | undefined;

  /**
   * The name of the source schema that contains the table being restored.
   *
   * @public
   */
  sourceSchemaName?: string | undefined;

  /**
   * The name of the source table being restored.
   *
   * @public
   */
  sourceTableName: string | undefined;

  /**
   * The name of the database to restore the table to.
   *
   * @public
   */
  targetDatabaseName?: string | undefined;

  /**
   * The name of the schema to restore the table to.
   *
   * @public
   */
  targetSchemaName?: string | undefined;

  /**
   * The name of the table to create from the restore operation.
   *
   * @public
   */
  newTableName: string | undefined;

  /**
   * Indicates whether name identifiers for database, schema, and table are case sensitive. If true, the names are case sensitive. If false, the names are not case sensitive. The default is false.
   *
   * @public
   */
  activateCaseSensitiveIdentifier?: boolean | undefined;
}

/**
 * @public
 */
export interface RestoreTableFromSnapshotResponse {
  /**
   * The TableRestoreStatus object that contains the status of the restore operation.
   *
   * @public
   */
  tableRestoreStatus?: TableRestoreStatus | undefined;
}

/**
 * @public
 */
export interface UpdateSnapshotRequest {
  /**
   * The name of the snapshot.
   *
   * @public
   */
  snapshotName: string | undefined;

  /**
   * The new retention period of the snapshot.
   *
   * @public
   */
  retentionPeriod?: number | undefined;
}

/**
 * @public
 */
export interface UpdateSnapshotResponse {
  /**
   * The updated snapshot object.
   *
   * @public
   */
  snapshot?: Snapshot | undefined;
}

/**
 * @public
 */
export interface UpdateSnapshotCopyConfigurationRequest {
  /**
   * The ID of the snapshot copy configuration to update.
   *
   * @public
   */
  snapshotCopyConfigurationId: string | undefined;

  /**
   * The new retention period of how long to keep a snapshot in the destination Amazon Web Services Region.
   *
   * @public
   */
  snapshotRetentionPeriod?: number | undefined;
}

/**
 * @public
 */
export interface UpdateSnapshotCopyConfigurationResponse {
  /**
   * The updated snapshot copy configuration object.
   *
   * @public
   */
  snapshotCopyConfiguration: SnapshotCopyConfiguration | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The map of the key-value pairs used to tag the resource.
   *
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to remove tags from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag or set of tags to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateCustomDomainAssociationRequest {
  /**
   * The name of the workgroup associated with the database.
   *
   * @public
   */
  workgroupName: string | undefined;

  /**
   * The custom domain name associated with the workgroup.
   *
   * @public
   */
  customDomainName: string | undefined;

  /**
   * The custom domain name’s certificate Amazon resource name (ARN). This is optional.
   *
   * @public
   */
  customDomainCertificateArn: string | undefined;
}

/**
 * @public
 */
export interface UpdateCustomDomainAssociationResponse {
  /**
   * The custom domain name associated with the workgroup.
   *
   * @public
   */
  customDomainName?: string | undefined;

  /**
   * The name of the workgroup associated with the database.
   *
   * @public
   */
  workgroupName?: string | undefined;

  /**
   * The custom domain name’s certificate Amazon resource name (ARN).
   *
   * @public
   */
  customDomainCertificateArn?: string | undefined;

  /**
   * The expiration time for the certificate.
   *
   * @public
   */
  customDomainCertificateExpiryTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateUsageLimitRequest {
  /**
   * The identifier of the usage limit to update.
   *
   * @public
   */
  usageLimitId: string | undefined;

  /**
   * The new limit amount. If time-based, this amount is in Redshift Processing Units (RPU) consumed per hour. If data-based, this amount is in terabytes (TB) of data transferred between Regions in cross-account sharing. The value must be a positive number.
   *
   * @public
   */
  amount?: number | undefined;

  /**
   * The new action that Amazon Redshift Serverless takes when the limit is reached.
   *
   * @public
   */
  breachAction?: UsageLimitBreachAction | undefined;
}

/**
 * @public
 */
export interface UpdateUsageLimitResponse {
  /**
   * The updated usage limit object.
   *
   * @public
   */
  usageLimit?: UsageLimit | undefined;
}

/**
 * @public
 */
export interface UpdateWorkgroupRequest {
  /**
   * The name of the workgroup to update. You can't update the name of a workgroup once it is created.
   *
   * @public
   */
  workgroupName: string | undefined;

  /**
   * The new base data warehouse capacity in Redshift Processing Units (RPUs).
   *
   * @public
   */
  baseCapacity?: number | undefined;

  /**
   * The value that specifies whether to turn on enhanced virtual private cloud (VPC) routing, which forces Amazon Redshift Serverless to route traffic through your VPC.
   *
   * @public
   */
  enhancedVpcRouting?: boolean | undefined;

  /**
   * An array of parameters to set for advanced control over a database. The options are `auto_mv`, `datestyle`, `enable_case_sensitive_identifier`, `enable_user_activity_logging`, `query_group`, `search_path`, `require_ssl`, `use_fips_ssl`, and either `wlm_json_configuration` or query monitoring metrics that let you define performance boundaries. You can either specify individual query monitoring metrics (such as `max_scan_row_count`, `max_query_execution_time`) or use `wlm_json_configuration` to define query queues with rules, but not both. If you're using `wlm_json_configuration`, the maximum size of `parameterValue` is 8000 characters. For more information about query monitoring rules and available metrics, see [Query monitoring metrics for Amazon Redshift Serverless](https://docs.aws.amazon.com/redshift/latest/dg/cm-c-wlm-query-monitoring-rules.html#cm-c-wlm-query-monitoring-metrics-serverless).
   *
   * @public
   */
  configParameters?: ConfigParameter[] | undefined;

  /**
   * A value that specifies whether the workgroup can be accessible from a public network.
   *
   * @public
   */
  publiclyAccessible?: boolean | undefined;

  /**
   * An array of VPC subnet IDs to associate with the workgroup.
   *
   * @public
   */
  subnetIds?: string[] | undefined;

  /**
   * An array of security group IDs to associate with the workgroup.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * The custom port to use when connecting to a workgroup. Valid port ranges are 5431-5455 and 8191-8215. The default is 5439.
   *
   * @public
   */
  port?: number | undefined;

  /**
   * The maximum data-warehouse capacity Amazon Redshift Serverless uses to serve queries. The max capacity is specified in RPUs.
   *
   * @public
   */
  maxCapacity?: number | undefined;

  /**
   * The IP address type that the workgroup supports. Possible values are `ipv4` and `dualstack`.
   *
   * @public
   */
  ipAddressType?: string | undefined;

  /**
   * An object that represents the price performance target settings for the workgroup.
   *
   * @public
   */
  pricePerformanceTarget?: PerformanceTarget | undefined;

  /**
   * An optional parameter for the name of the track for the workgroup. If you don't provide a track name, the workgroup is assigned to the `current` track.
   *
   * @public
   */
  trackName?: string | undefined;

  /**
   * If `true`, allocates additional compute resources for running automatic optimization operations.
   *
   * Default: false
   *
   * @public
   */
  extraComputeForAutomaticOptimization?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateWorkgroupResponse {
  /**
   * The updated workgroup object.
   *
   * @public
   */
  workgroup: Workgroup | undefined;
}
